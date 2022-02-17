import { Request, Response } from 'express';

export class WorkoutController {
  // TODO: implement all get/add/edit/delete with db & Sequelize
  getAllWorkouts = (req: Request, res: Response) => {
    res.status(501).send('TODO');
  };

  addWorkout = (req: Request, res: Response) => {
    res.status(501).send('TODO');
  };

  editWorkout = (req: Request, res: Response) => {
    res.status(501).send('TODO');
  };

  deleteWorkout = (req: Request, res: Response) => {
    res.status(501).send('TODO');
  };
}
