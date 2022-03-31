import express, { Express } from 'express';
import bodyParser from 'body-parser';
import db from './model';
import { Route } from './constant/Route';

import { FilterController } from './controller/FilterController';
import { FilterRouter } from './route/FilterRouter';
import { ExerciseController } from './controller/ExerciseController';
import { ExerciseRouter } from './route/ExerciseRouter';
import { WorkoutController } from './controller/WorkoutController';
import { WorkoutRouter } from './route/WorkoutRouter';
import { UserController } from './controller/UserController';
import { UserRouter } from './route/UserRouter';
import { Server } from 'http';

/* eslint-disable  no-console */

export class App {
  private app: Express;
  private server: Server;
  private port: number;

  async init(): Promise<void> {
    try {
      this.app = express();

      await this.registerHandlersAndRoutes(this.app);

      await db.sequelize.sync();

      this.port = 8000;
      this.server = this.app.listen(this.port, () => {
        console.log(
          `⚡️[server]: Server is running at http://localhost:${this.port}`
        );
      });
    } catch (error) {
      console.log(error);
    }
  }

  async registerHandlersAndRoutes(app: Express): Promise<void> {
    app.use(bodyParser.json());
    app.get('/', (_req, res) => res.send('Hello World'));

    const filterController = new FilterController();
    const filterRouter = new FilterRouter(filterController);
    app.use(Route.FILTERS, filterRouter.getRoutes());

    const userController = new UserController();
    const userRouter = new UserRouter(userController);
    app.use(Route.USERS, userRouter.getRoutes());

    const workoutController = new WorkoutController();
    const workoutRouter = new WorkoutRouter(workoutController);
    app.use(Route.WORKOUTS, workoutRouter.getRoutes());

    const exerciseController = new ExerciseController();
    const exerciseRouter = new ExerciseRouter(exerciseController);
    app.use(Route.EXERCISES, exerciseRouter.getRoutes());
  }

  getExpressForTest(): Express {
    return this.app;
  }

  getServerForTest(): Server {
    return this.server;
  }
}
