import express, { Router } from 'express';
import { WorkoutController } from '../controller/WorkoutController';

export class WorkoutRouter {
  private workoutController: WorkoutController;
  private workoutRouter = express.Router();

  constructor(workoutController: WorkoutController) {
    this.workoutController = workoutController;
  }

  getRoutes = (): Router => {
    this.workoutRouter.get('/', this.workoutController.getAllWorkouts);

    this.workoutRouter.get(
      '/minimal',
      this.workoutController.getAllWorkoutsMinimal
    );

    this.workoutRouter.post('/', this.workoutController.addWorkout);

    this.workoutRouter.put('/', this.workoutController.editWorkout);

    this.workoutRouter.delete('/', this.workoutController.deleteWorkout);

    return this.workoutRouter;
  };
}
