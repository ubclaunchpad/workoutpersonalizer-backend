import { Request, Response } from 'express';
import Joi from 'joi';
import db from '../model';
import { ExerciseAttributes } from '../model/exercise';
import { ExerciseValidation } from '../validation/ExerciseValidation';
import {
  DatabaseError,
  NotFoundError,
  RequestBodyValidationError,
} from '../error/Error';

export class ExerciseController {
  getAllExercises = async (_req: Request, res: Response): Promise<any> => {
    try {
      const exercises = await db.Exercise.findAll();
      return res.status(200).send(exercises);
    } catch (e) {
      return res
        .status(400)
        .send(new DatabaseError('Error getting all exercises'));
    }
  };

  addExercise = async (req: Request, res: Response): Promise<any> => {
    try {
      const { value, error } = ExerciseValidation.schema.validate(req.body, {
        abortEarly: false,
      });
      if (error) {
        throw error;
      }
      const newExercise: ExerciseAttributes = { ...value };
      const createdExercise = await db.Exercise.create(newExercise);
      return res.status(200).send(createdExercise);
    } catch (e) {
      if (e instanceof Joi.ValidationError) {
        return res.status(400).send(new RequestBodyValidationError(e.message));
      } else {
        return res.status(400).send(new DatabaseError('Error adding exercise'));
      }
    }
  };

  // (4 - EXP + WP) Retrieve detailed information about an exercise (name, video link, desc, tags)
  getDetailedExercise = async (req: Request, res: Response): Promise<any> => {
    try {
      const exercise = await db.Exercise.findOne({
        where: {
          id: req.params.exerciseId,
        },
        attributes: [
          'name',
          'description',
          'thumbnailSrc',
          'videoSrc',
          'length',
        ],
        include: [
          db.DifficultyLevel,
          db.ExerciseType,
          db.Equipment,
          db.MuscleGroup,
        ],
      });

      return res
        .status(exercise != null ? 200 : 404)
        .send(
          exercise != null ? exercise : new NotFoundError(req.params.exerciseId)
        );
    } catch (e) {
      return res.status(400).send(new DatabaseError('Error getting exercise'));
    }
  };
}
