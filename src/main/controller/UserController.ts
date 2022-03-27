import { Request, Response } from 'express';
import Joi from 'joi';
import { Route } from '../constant/Route';
import db from '../model';
import { WorkoutAttributes } from '../model/workout';
import { WorkoutValidation } from '../validation/WorkoutValidation';
import {
  DatabaseError,
  RequestBodyValidationError,
  RouteValidationError,
} from '../error/Error';

export class UserController {
  getUser = async (req: Request, res: Response): Promise<any> => {
    try {
      if (!req.params.userId) {
        throw new RouteValidationError('userId', `/${Route.USERS}/:userId`);
      }

      const user = await db.User.findOne({
        attributes: ['firstName', 'lastName', 'username', 'email'],
        where: { id: req.params.userId },
      });

      return res.status(200).send(user);
    } catch (e) {
      if (e instanceof RouteValidationError) {
        return res.status(400).send(e);
      } else {
        return res.status(400).send(e);
      }
    }
  };

  getSavedExercises = async (req: Request, res: Response): Promise<any> => {
    try {
      if (!req.params.userId) {
        throw new RouteValidationError(
          'userId',
          `/${Route.USERS}/:userId/savedExercises`
        );
      }

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
      if (e instanceof RouteValidationError) {
        return res.status(400).send(e);
      } else {
        return res
          .status(400)
          .send(new DatabaseError('Error getting saved exercises'));
      }
    }
  };

  getAllBasicWorkouts = async (req: Request, res: Response): Promise<any> => {
    try {
      if (!req.params.userId) {
        throw new RouteValidationError(
          'userId',
          `/${Route.USERS}/:userId/workouts`
        );
      }

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
      if (e instanceof RouteValidationError) {
        return res.status(400).send(e);
      } else {
        return res
          .status(400)
          .send(new DatabaseError('Error getting workouts'));
      }
    }
  };

  getAllDetailedWorkouts = async (
    req: Request,
    res: Response
  ): Promise<any> => {
    try {
      if (!req.params.userId) {
        throw new RouteValidationError(
          'userId',
          `/${Route.USERS}/:userId/workouts`
        );
      }

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
      if (e instanceof RouteValidationError) {
        return res.status(400).send(e);
      } else {
        return res
          .status(400)
          .send(new DatabaseError('Error getting workouts'));
      }
    }
  };

  getBasicWorkout = async (req: Request, res: Response): Promise<any> => {
    try {
      if (!req.params.workoutId) {
        throw new RouteValidationError(
          'workoutId',
          `/${Route.USERS}/:userId/workouts/basic/:workoutId`
        );
      }

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
      if (e instanceof RouteValidationError) {
        return res.status(400).send(e);
      } else {
        return res.status(400).send(new DatabaseError('Error getting workout'));
      }
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
      if (!req.params.workoutId) {
        throw new RouteValidationError(
          'workoutId',
          `:userId${Route.WORKOUTS}/:workoutId`
        );
      }

      await db.Workout.destroy({
        where: {
          id: req.params.workoutId,
          userId: req.params.userId,
        },
      });

      return res.status(200).end();
    } catch (e) {
      if (e instanceof RouteValidationError) {
        return res.status(400).send(e);
      } else {
        return res
          .status(400)
          .send(new DatabaseError('Error deleting workout'));
      }
    }
  };
}
