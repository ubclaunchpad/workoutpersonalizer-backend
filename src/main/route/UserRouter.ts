import express, { Router } from 'express';
import { UserController } from '../controller/UserController';

export class UserRouter {
  private userController: UserController;
  private userRouter = express.Router();

  constructor(userController: UserController) {
    this.userController = userController;
  }

  getRoutes(): Router {
    this.userRouter.get('/:userId', this.userController.getUser);
    this.userRouter.get(
      '/:userId/savedExercises',
      this.userController.getSavedExercises
    );

    return this.userRouter;
  }
}
