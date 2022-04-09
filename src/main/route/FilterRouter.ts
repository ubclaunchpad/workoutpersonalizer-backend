import express, { Router } from 'express';
import { FilterController } from '../controller/FilterController';

export class FilterRouter {
  private filterRouter = express.Router();
  private filterController;

  constructor(filterController: FilterController) {
    this.filterController = filterController;
  }

  getRoutes(): Router {
    this.filterRouter.get('/filters', this.filterController.getAllFilters);
    return this.filterRouter;
  }
}
