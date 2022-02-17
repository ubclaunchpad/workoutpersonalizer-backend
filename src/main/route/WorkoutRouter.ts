import express, { Router } from 'express';
import { Route } from '../constant/Route';
import { WorkoutController } from '../controller/WorkoutController';

export class WorkoutRouter {
  private workoutController: WorkoutController;
  private workoutRouter = express.Router();

  constructor(workoutController: WorkoutController) {
    this.workoutController = workoutController;
  }

  getRoutes = () => {
    this.workoutRouter.get(
      Route.WORKOUTS,
      this.workoutController.getAllWorkouts
    );
    this.workoutRouter.post(Route.WORKOUTS, this.workoutController.addWorkout);
    this.workoutRouter.put(Route.WORKOUTS, this.workoutController.editWorkout);
    this.workoutRouter.delete(
      Route.WORKOUTS,
      this.workoutController.deleteWorkout
    );

    return this.workoutRouter;
  };
}
