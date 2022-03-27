import express, { Router, Request, Response, NextFunction } from 'express';
import { WorkoutController } from '../controller/WorkoutController';
import { Route } from '../constant/Route';
import { RouteValidationError } from '../error/Error';

export class WorkoutRouter {
  private workoutController: WorkoutController;
  private workoutRouter = express.Router();

  constructor(workoutController: WorkoutController) {
    this.workoutController = workoutController;
  }

  validateRoute(req: Request, _res: Response, next: NextFunction) {
    // eslint-disable-next-line no-console
    console.log(`=== validateRoute, userId: ${req.params.userId} ===`);
    if (!req.params.userId) {
      throw new RouteValidationError('userId', `/:userId${Route.WORKOUTS}`);
    } else {
      next();
    }
  }

  getRoutes(): Router {
    return this.workoutRouter;
  }
}
