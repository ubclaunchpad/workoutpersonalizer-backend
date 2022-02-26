import { Request, Response } from 'express';
import db from '../models';
import { Route } from '../constant/Route';

export class WorkoutController {
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

  getWorkoutMinimal = async (req: Request, res: Response) => {
    try {
      if (!req.params.workoutId) {
        throw `Missing workoutId param. Endpoint usage: /${Route.WORKOUTS}/minimal/:workoutId`;
      }

      const workout = await db.Workout.findOne({
        attributes: [
          'name',
          'totalWorkoutTime',
          'creationDate',
          'lastModificationDate',
        ],
        where: { id: req.params.workoutId },
      });

      return res.status(200).send(workout);
    } catch (e) {
      return res.status(400).send({ e });
    }
  };

  addWorkout = async (req: Request, res: Response) => {
    try {
      const newWorkout = await db.Workout.create(req.body);
      return res.status(200).send(newWorkout);
    } catch (e) {
      return res.status(400).send({ e });
    }
  };

  deleteWorkout = async (req: Request, res: Response) => {
    try {
      if (!req.params.workoutId) {
        throw `Missing workoutId param. Usage: /${Route.WORKOUTS}/:workoutId`;
      }

      await db.Workout.destroy({
        where: {
          id: req.params.workoutId,
        },
      });

      return res.status(200).end();
    } catch (e) {
      return res.status(400).send({ e });
    }
  };
}
