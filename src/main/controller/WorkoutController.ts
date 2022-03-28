import { Request, Response } from 'express';
import db from '../models';
import { Route } from '../constant/Route';

export class WorkoutController {
  // (9 - CC & WP) Retrieve detailed information about workout (title, duration, video link), exercises and their order, and info regarding exercises
  getWorkoutDetails = async (req: Request, res: Response): Promise<any> => {
    try {
      if (!req.params.workoutID) {
        throw `Missing workoutId param. usage: /${Route.WORKOUTS}/:workoutID(\\b[0-9a-f]{8}\\b-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-\\b[0-9a-f]{12}\\b)`;
      }

      // TODO: make sure the user has permissions to view this workout (userId check? private / public check?)
      const workouts = await db.Workout.findOne({
        where: {
          id: req.params.workoutID,
        },
        attributes: ['name', 'totalWorkoutTime', 'imageUrl'],
        include: [
          {
            model: db.Exercise,
            attributes: [
              'name',
              'description',
              'thumbnailSrc',
              'videoSrc',
              'length',
            ],
            required: true,
          },
        ],
      });

      return res.status(200).send(workouts);
    } catch (e) {
      return res.status(400).send({ e });
    }
  };
}
