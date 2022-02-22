import { Request, Response } from 'express';
import db from '../models';

export class ExerciseController {
  // TODO: implement all get/add/edit/delete with db & Sequelize
  getAllExercises = async (_req: Request, res: Response) => {
    try {
      const exercises = db.Exercise.findAll();
      return res.status(200).send(exercises);
    } catch (e) {
      return res.status(400).send({ e });
    }
  };

  addExercise = (req: Request, res: Response) => {
    try {
      const newExercise = db.Exercise.create(req.body);
      return res.status(200).send(newExercise);
    } catch (e) {
      return res.status(400).send({ e });
    }
  };

  editExercise = (req: Request, res: Response) => {
    res.status(501).send('TODO');
  };

  deleteExercise = (req: Request, res: Response) => {
    res.status(501).send('TODO');
  };
}
