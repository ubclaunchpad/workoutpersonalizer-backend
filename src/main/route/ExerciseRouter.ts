import express, { Router } from 'express';
import { ExerciseController } from '../controller/ExerciseController';

export class ExerciseRouter {
  private exerciseController: ExerciseController;
  private exerciseRouter = express.Router();

  constructor(exerciseController: ExerciseController) {
    this.exerciseController = exerciseController;
  }

  getRoutes(): Router {
    this.exerciseRouter.get('/', this.exerciseController.getAllExercises);
    this.exerciseRouter.post('/', this.exerciseController.addExercise);

    return this.exerciseRouter;
  }
}
