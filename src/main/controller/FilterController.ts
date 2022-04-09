import { Request, Response } from 'express';
import db from '../model';
import { DatabaseError } from '../error/Error';

export class FilterController {
  getAllFilters = async (req: Request, res: Response): Promise<any> => {
    // TODO: add tests for endpoint
    try {
      const difficultyLevels = await db.DifficultyLevel.findAll();
      const exerciseTypes = await db.ExerciseType.findAll();
      const equipment = await db.Equipment.findAll();
      const muscleGroups = await db.MuscleGroup.findAll();

      const filters = {
        difficultyLevels: difficultyLevels,
        exerciseTypes: exerciseTypes,
        equipment: equipment,
        muscleGroups: muscleGroups,
      };

      return res.status(200).send(filters);
    } catch (e) {
      return res.status(400).send(new DatabaseError('Error getting filters'));
    }
  };
}
