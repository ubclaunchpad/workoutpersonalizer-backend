import express, { Router, Request, Response, NextFunction } from 'express';
import { WorkoutController } from '../controller/WorkoutController';
import { UUID_REGEX } from '../constant/Route';

export class WorkoutRouter {
  private workoutController: WorkoutController;
  private workoutRouter = express.Router();

  constructor(workoutController: WorkoutController) {
    this.workoutController = workoutController;
  }

  getRoutes(): Router {
    this.workoutRouter.post(
      `/exercise/:workoutId(${UUID_REGEX})`,
      this.workoutController.addToWorkout
    );
    this.workoutRouter.post(
      '/exercise',
      this.workoutController.addToNewWorkout
    );

    return this.workoutRouter;
  }
}
