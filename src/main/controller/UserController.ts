import { Request, Response } from 'express';
import db from '../models';
import { Route } from '../constant/Route';

export class UserController {
  getUser = async (req: Request, res: Response) => {
    try {
      if (!req.params.userId) {
        throw `Missing userId param. Usage: /${Route.USERS}/:userId`;
      }

      const user = await db.User.findOne({
        attributes: ['firstName', 'lastName', 'username', 'email'],
        where: { id: req.params.userId },
      });

      return res.status(200).send(user);
    } catch (e) {
      return res.status(400).send({ e });
    }
  };

  getSavedExercises = async (req: Request, res: Response) => {
    try {
      if (!req.params.userId) {
        throw `Missing userId param. Endpoint usage: /${Route.USERS}/:userId/savedExercises`;
      }

      const savedExercises = await db.User.findOne({
        attributes: [],
        where: { id: req.params.userId },
        include: {
          model: db.Exercise,
          as: 'savedExercises',
        },
      });

      return res.status(200).send(savedExercises);
    } catch (e) {
      return res.status(400).send(e);
    }
  };
}
