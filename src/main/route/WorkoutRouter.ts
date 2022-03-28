import express, { Router } from 'express';
import { WorkoutController } from '../controller/WorkoutController';

export class WorkoutRouter {
  private workoutController: WorkoutController;
  private workoutRouter = express.Router();

  constructor(workoutController: WorkoutController) {
    this.workoutController = workoutController;
  }

  getRoutes = (): Router => {
    this.workoutRouter.get(
      '/detailed/:workoutID(\\b[0-9a-f]{8}\\b-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-\\b[0-9a-f]{12}\\b)',
      this.workoutController.getWorkoutDetails
    );

    return this.workoutRouter;
  };
}
