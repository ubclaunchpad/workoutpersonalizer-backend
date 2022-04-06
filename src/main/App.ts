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
import Http from 'http';
import Https from 'https';
import fs from 'fs';

/* eslint-disable  no-console */

export class App {
  private app: Express;
  private server: Https.Server;
  private httpsPort: number;
  private httpPort: number;

  async init(): Promise<void> {
    try {
      this.app = express();

      await this.registerHandlersAndRoutes(this.app);

      await db.sequelize.sync();

      this.httpsPort = 8000;
      this.httpPort = 80;

      this.server = Https.createServer(
        {
          key: fs.readFileSync('server.key'),
          cert: fs.readFileSync('server.cert'),
        },
        this.app
      );

      Http.createServer(this.app).listen(this.httpPort, () => {
        console.log(
          `⚡️[server]: Server is running at http://localhost:${this.httpPort}`
        );
      });

      this.server.listen(this.httpsPort, () => {
        console.log(
          `⚡️[server]: Server is running at https://localhost:${this.httpsPort}`
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

  getServerForTest(): Https.Server {
    return this.server;
  }
}
