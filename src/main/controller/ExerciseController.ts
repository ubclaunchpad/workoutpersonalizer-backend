import { Request, Response } from 'express';
import db from '../models';
import { Route } from '../constant/Route';

export class ExerciseController {
  // TODO: implement all get/add/edit/delete with db & Sequelize
  getAllExercises = async (_req: Request, res: Response) => {
    try {
      const exercises = await db.Exercise.findAll();
      return res.status(200).send(exercises);
    } catch (e) {
      return res.status(400).send({ e });
    }
  };

  // (4 - EXP + WP) Retrieve detailed information about an exercise (name, video link, desc, tags)
  getExerciseDetailed = async (req: Request, res: Response): Promise<any> => {
    try {
      if (!req.params.exerciseID) {
        throw `Missing exerciseID param. usage: /${Route.EXERCISES}/:exerciseID(\\d)`;
      }

      // TODO: verify return
      const exercises = await db.Exercise.findOne({
        where: {
          id: req.params.exerciseID,
        },
        attributes: [
          'name',
          'description',
          'thumbnailSrc',
          'videoSrc',
          'length',
        ],
        include: db.ExerciseType,
      });

      return res.status(200).send(exercises);
    } catch (e) {
      return res.status(400).send({ e });
    }
  };
}
