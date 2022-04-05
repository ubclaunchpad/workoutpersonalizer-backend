import { Request, Response } from 'express';
import Joi from 'joi';
import db from '../model';
import { WorkoutAttributes } from '../model/workout';
import { WorkoutValidation } from '../validation/WorkoutValidation';
import {
  DatabaseError,
  RequestBodyValidationError,
  NotFoundError,
} from '../error/Error';

export class UserController {
  getUser = async (req: Request, res: Response): Promise<any> => {
    try {
      const user = await db.User.findOne({
        attributes: ['firstName', 'lastName', 'username', 'email'],
        where: { id: req.params.userId },
      });

      return res.status(200).send(user);
    } catch (e) {
      return res.status(400).send(new DatabaseError('Error getting user'));
    }
  };

  getSavedExercises = async (req: Request, res: Response): Promise<any> => {
    try {
      const savedExercises = await db.User.findAll({
        where: { id: req.params.userId },
        include: {
          model: db.Exercise,
          as: 'savedExercises',
          required: true,
          through: { attributes: [] },
        },
      });

      return res
        .status(200)
        .send(
          savedExercises.length > 0 ? savedExercises[0].savedExercises : []
        );
    } catch (e) {
      return res
        .status(400)
        .send(new DatabaseError('Error getting saved exercises'));
    }
  };

  getAllBasicWorkouts = async (req: Request, res: Response): Promise<any> => {
    try {
      const workouts = await db.User.findAll({
        where: { id: req.params.userId },
        include: {
          model: db.Workout,
          as: 'workouts',
          required: true,
          attributes: [
            'name',
            'totalWorkoutTime',
            'creationDate',
            'lastModificationDate',
          ],
        },
      });

      return res
        .status(200)
        .send(workouts.length > 0 ? workouts[0].workouts : []);
    } catch (e) {
      return res.status(400).send(new DatabaseError('Error getting workouts'));
    }
  };

  getAllDetailedWorkouts = async (
    req: Request,
    res: Response
  ): Promise<any> => {
    try {
      const workouts = await db.User.findAll({
        where: { id: req.params.userId },
        include: {
          model: db.Workout,
          as: 'workouts',
          required: true,
        },
      });

      return res
        .status(200)
        .send(workouts.length > 0 ? workouts[0].workouts : []);
    } catch (e) {
      return res.status(400).send(new DatabaseError('Error getting workouts'));
    }
  };

  getBasicWorkout = async (req: Request, res: Response): Promise<any> => {
    try {
      const workout = await db.User.findOne({
        where: { id: req.params.userId },
        include: {
          model: db.Workout,
          as: 'workouts',
          required: true,
          attributes: [
            'name',
            'totalWorkoutTime',
            'creationDate',
            'lastModificationDate',
          ],
          where: { id: req.params.workoutId },
        },
      });

      return res
        .status(200)
        .send(workout.workouts.length > 0 ? workout.workouts[0] : []);
    } catch (e) {
      return res.status(400).send(new DatabaseError('Error getting workout'));
    }
  };

  // (9 - CC & WP) Retrieve detailed information about workout (title, duration, video link), exercises and their order, and info regarding exercises
  getDetailedWorkout = async (req: Request, res: Response): Promise<any> => {
    try {
      const workout = await db.User.findOne({
        where: {
          id: req.params.userId,
        },
        attributes: [],
        include: [
          {
            model: db.Workout,
            as: 'workouts',
            attributes: ['name', 'totalWorkoutTime', 'imageUrl'],
            where: { id: req.params.workoutId },
            required: true,
            include: [
              {
                model: db.Exercise,
                through: {
                  attributes: ['orderNum'],
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
                required: true,
              },
            ],
          },
        ],
      });

      return res
        .status(workout != null ? 200 : 404)
        .send(
          workout != null
            ? workout.workouts
            : new NotFoundError(req.params.workoutId)
        );
    } catch (e) {
      return res.status(400).send(new DatabaseError('Error getting workout'));
    }
  };

  addWorkout = async (req: Request, res: Response): Promise<any> => {
    // TODO: validate that the user with userId is logged in
    try {
      req.body.userId = req.params.userId;
      const { value, error } = WorkoutValidation.schema.validate(req.body, {
        abortEarly: false,
      });

      if (error) {
        throw error;
      }

      const newWorkout: WorkoutAttributes = { ...value };
      const createdWorkout = await db.Workout.create(newWorkout);
      return res.status(200).send(createdWorkout);
    } catch (e) {
      if (e instanceof Joi.ValidationError) {
        return res.status(400).send(new RequestBodyValidationError(e.message));
      } else {
        return res.status(400).send(new DatabaseError('Error adding workout'));
      }
    }
  };

  deleteWorkout = async (req: Request, res: Response): Promise<any> => {
    try {
      // TODO: validate that the user with userId is logged in
      await db.Workout.destroy({
        where: {
          id: req.params.workoutId,
          userId: req.params.userId,
        },
      });

      return res.status(200).end();
    } catch (e) {
      return res.status(400).send(new DatabaseError('Error deleting workout'));
    }
  };
}
