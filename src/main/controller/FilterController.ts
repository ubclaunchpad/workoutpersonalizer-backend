import { Request, Response } from 'express';
import db from '../model';
import { DatabaseError } from '../error/Error';

export class FilterController {
  getAllFilters = async (req: Request, res: Response): Promise<any> => {
    try {
      const difficultyLevels = await db.DifficultyLevel.findAll();
      const exerciseTypes = await db.ExerciseTy.findAll();
      const equipment = await db.Equipment.findAll();
      const muscleGroups = await db.MuscleGroup.findAll();

      const filters: any[] = [
        ...difficultyLevels,
        exerciseTypes,
        equipment,
        muscleGroups,
      ];

      return res.send(filters);
    } catch (e) {
      return res.status(400).send(new DatabaseError('Error getting filters'));
    }
  };
}
