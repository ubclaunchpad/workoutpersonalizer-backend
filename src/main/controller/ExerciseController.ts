import { Request, Response } from 'express';
import db from '../models';

export class ExerciseController {
  getAllExercises = async (_req: Request, res: Response) => {
    try {
      const exercises = await db.Exercise.findAll();
      return res.status(200).send(exercises);
    } catch (e) {
      return res.status(400).send({ e });
    }
  };

  addExercise = async (req: Request, res: Response) => {
    try {
      const newExercise = await db.Exercise.create(req.body);
      return res.status(200).send(newExercise);
    } catch (e) {
      return res.status(400).send({ e });
    }
  };
}
