import { Request, Response } from 'express';
import db from '../model';
import { Route } from '../constant/Route';
import { WorkoutValidation } from '../validation/WorkoutValidation';
import { WorkoutAttributes } from '../model/workout';

export class WorkoutController {
  addToWorkout = async (req: Request, res: Response): Promise<any> => {
    try {
      if (!req.params.workoutId) {
        throw `Missing workoutId param. Usage: /${Route.WORKOUTS}/:workoutId`;
      }
      const workout = await db.Workout.findOne({
        where: { id: req.params.workoutId },
      });
      const exercise = await db.Exercise.findOne({
        where: { id: req.body.exerciseId },
      });
      const workoutExercise = await workout.addExercise(exercise, {
        through: { createdAt: new Date(), updatedAt: new Date() },
      });
      return res.status(200).send(workoutExercise);
    } catch (e) {
      return res.status(400).send({ e });
    }
  };

  addToNewWorkout = async (req: Request, res: Response) => {
    try {
      const { value, error } = WorkoutValidation.schema.validate(
        req.body.workout,
        {
          abortEarly: false,
        }
      );
      if (error) {
        throw error;
      }
      const newWorkout: WorkoutAttributes = { ...value };
      const createdWorkout = await db.Workout.create(newWorkout);

      const exercise = await db.Exercise.findOne({
        where: { id: req.body.exerciseId },
      });
      const workoutExercise = await createdWorkout.addExercise(exercise, {
        through: { createdAt: new Date(), updatedAt: new Date() },
      });
      return res.status(200).send(workoutExercise);
    } catch (e) {
      return res.status(400).send({ e });
    }
  };
}
