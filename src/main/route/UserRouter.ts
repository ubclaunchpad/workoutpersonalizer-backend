import express, { Router } from 'express';
import { UUID_REGEX } from '../constant/Route';
import { UserController } from '../controller/UserController';

export class UserRouter {
  private userController: UserController;
  private userRouter = express.Router();

  constructor(userController: UserController) {
    this.userController = userController;
  }

  getRoutes(): Router {
    this.userRouter.get(`/:userId(${UUID_REGEX})`, this.userController.getUser);

    this.userRouter.get(
      `/:userId(${UUID_REGEX})/savedExercises`,
      this.userController.getSavedExercises
    );

    this.userRouter.get(
      `/:userId(${UUID_REGEX})/workouts/basic`,
      this.userController.getAllBasicWorkouts
    );

    this.userRouter.get(
      `/:userId(${UUID_REGEX})/workouts/detailed`,
      this.userController.getAllDetailedWorkouts
    );

    this.userRouter.get(
      `/:userId(${UUID_REGEX})/workouts/basic/:workoutId`,
      this.userController.getBasicWorkout
    );

    this.userRouter.get(
      `/:userId(${UUID_REGEX})/workouts/detailed/:workoutId(${UUID_REGEX})`,
      this.userController.getDetailedWorkout
    );

    this.userRouter.post(
      `/:userId(${UUID_REGEX})/workouts`,
      this.userController.addWorkout
    );

    this.userRouter.delete(
      `/:userId(${UUID_REGEX})/workouts/:workoutId(${UUID_REGEX})`,
      this.userController.deleteWorkout
    );
    return this.userRouter;
  }
}
