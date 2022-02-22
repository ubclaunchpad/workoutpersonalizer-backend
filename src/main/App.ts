import express, { Express } from 'express';
import bodyParser from 'body-parser';
import db from './models';
import { Route } from './constant/Route';

import { FilterController } from './controller/FilterController';
import { FilterRouter } from './route/FilterRouter';

import { ExerciseController } from './controller/ExerciseController';
import { ExerciseRouter } from './route/ExerciseRouter';
import { WorkoutController } from './controller/WorkoutController';
import { WorkoutRouter } from './route/WorkoutRouter';

/* eslint-disable  no-console */

export class App {
  async init(): Promise<void> {
    try {
      const app = express();

      await this.registerHandlersAndRoutes(app);

      await db.sequelize.sync();

      const PORT = 8000;
      app.listen(PORT, () => {
        console.log(
          `⚡️[server]: Server is running at http://localhost:${PORT}`
        );
      });
    } catch (error) {
      console.log(error);
    }
  }

  async registerHandlersAndRoutes(app: Express): Promise<void> {
    app.use(bodyParser.json());
    app.get('/', (req, res) => res.send('Hello World'));

    // TODO: create remaining controllers and routes
    console.log('registerHandlersAndRoutes');
    const filterController = new FilterController();
    const filterRouter = new FilterRouter(filterController);
    app.use(Route.FILTERS, filterRouter.getRoutes());

    const workoutController = new WorkoutController();
    const workoutRouter = new WorkoutRouter(workoutController);
    app.use(Route.WORKOUTS, workoutRouter.getRoutes());

    const exerciseController = new ExerciseController();
    const exerciseRouter = new ExerciseRouter(exerciseController);
    app.use(Route.EXERCISES, exerciseRouter.getRoutes());
  }
}
