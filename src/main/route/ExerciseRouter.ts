import express, { Router } from 'express';
import { ExerciseController } from '../controller/ExerciseController';
import { Route } from '../constant/Route';

export class ExerciseRouter {
  private exerciseController: ExerciseController;
  private exerciseRouter = express.Router();

  constructor(exerciseController: ExerciseController) {
    this.exerciseController = exerciseController;
  }

  getRoutes = (): Router => {
    this.exerciseRouter.get(
      Route.EXERCISES,
      this.exerciseController.getAllExercises
    );
    this.exerciseRouter.post(
      Route.EXERCISES,
      this.exerciseController.addExercise
    );
    this.exerciseRouter.put(
      Route.EXERCISES,
      this.exerciseController.editExercise
    );
    this.exerciseRouter.delete(
      Route.EXERCISES,
      this.exerciseController.deleteExercise
    );

    return this.exerciseRouter;
  };
}
