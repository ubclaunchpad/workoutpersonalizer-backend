import express, { Router } from 'express';
import { WorkoutController } from '../controller/WorkoutController';

export class WorkoutRouter {
  private workoutController: WorkoutController;
  private workoutRouter = express.Router();

  constructor(workoutController: WorkoutController) {
    this.workoutController = workoutController;
  }

  getRoutes(): Router {
    this.workoutRouter.get('/', this.workoutController.getAllWorkouts);
    this.workoutRouter.get(
      '/minimal',
      this.workoutController.getAllWorkoutsMinimal
    );
    this.workoutRouter.get(
      '/minimal/:workoutId',
      this.workoutController.getWorkoutMinimal
    );
    this.workoutRouter.post('/', this.workoutController.addWorkout);
    this.workoutRouter.delete(
      '/:workoutId',
      this.workoutController.deleteWorkout
    );

    return this.workoutRouter;
  }
}
