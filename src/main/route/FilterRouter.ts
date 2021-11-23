import express, { Router } from 'express';
import { FilterController } from '../controller/FilterController';

export class FilterRouter {
  private filterRouter = express.Router();
  private filterController;

  constructor(filterController: FilterController) {
    this.filterController = filterController;
  }

  getRoutes(): Router {
    this.filterRouter.get(
      '/muscleGroups',
      this.filterController.getAllMuscleGroups
    );

    // TODO: add other filter endpoints

    return this.filterRouter;
  }
}
