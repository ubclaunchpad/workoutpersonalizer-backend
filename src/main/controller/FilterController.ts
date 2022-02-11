import { NextFunction, Request, Response } from 'express';
import { MuscleGroupAttributes } from '../models/musclegroup';
import { WhereOptions } from 'sequelize';
import db from '../models';

export class FilterController {
  getAllMuscleGroups = async (
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const whereOptions: WhereOptions<MuscleGroupAttributes> = {
        // filters
      };

      const muscleGroups = await db.MuscleGroup.findAll({
        where: whereOptions,
      });

      return response.send(muscleGroups);
    } catch (e) {
      return next(e);
    }
  };
}
