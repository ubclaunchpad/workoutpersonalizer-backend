import express, { Router, Request, Response, NextFunction } from 'express';
import { WorkoutController } from '../controller/WorkoutController';

export class WorkoutRouter {
  private workoutController: WorkoutController;
  private workoutRouter = express.Router();

  constructor(workoutController: WorkoutController) {
    this.workoutController = workoutController;
  }

  getRoutes(): Router {
    return this.workoutRouter;
  }
}
