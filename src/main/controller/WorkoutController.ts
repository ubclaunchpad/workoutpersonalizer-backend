import { Request, Response } from 'express';
import db from '../models';

export class WorkoutController {
  // TODO: implement all get/add/edit/delete with db & Sequelize
  getAllWorkouts = async (_req: Request, res: Response): Promise<any> => {
    try {
      const workouts = await db.Workout.findAll();
      return res.status(200).send(workouts);
    } catch (e) {
      return res.status(400).send({ e });
    }
  };

  getAllWorkoutsMinimal = async (
    _req: Request,
    res: Response
  ): Promise<any> => {
    try {
      const workouts = await db.Workout.findAll({
        attributes: [
          'name',
          'totalWorkoutTime',
          'creationDate',
          'lastModificationDate',
        ],
      });
      return res.status(200).send(workouts);
    } catch (e) {
      return res.status(400).send({ e });
    }
  };

  addWorkout = (req: Request, res: Response) => {
    try {
      const newWorkout = db.Workout.create(req.body);
      return res.status(200).send(newWorkout);
    } catch (e) {
      return res.status(400).send({ e });
    }
  };

  editWorkout = (req: Request, res: Response) => {
    res.status(501).send('TODO');
  };

  deleteWorkout = (req: Request, res: Response) => {
    res.status(501).send('TODO');
  };
}
