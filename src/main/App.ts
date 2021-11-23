import express, { Express } from 'express';
import bodyParser from 'body-parser';
import db from './models';
import { FilterController } from './controller/FilterController';
import { FilterRouter } from './route/FilterRouter';
import { Route } from './constant/Route';

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
    const filterController = new FilterController();
    const filterRouter = new FilterRouter(filterController);
    app.use(Route.FILTERS, filterRouter.getRoutes());
  }
}