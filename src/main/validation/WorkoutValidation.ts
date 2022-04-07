import Joi from 'joi';
import { UUID_REGEX } from '../constant/Route';

export class WorkoutValidation {
  static schema = Joi.object().keys({
    id: Joi.string().pattern(new RegExp(UUID_REGEX)).required(),
    userId: Joi.string().pattern(new RegExp(UUID_REGEX)).required(),
    name: Joi.string().required(),
    imageUrl: Joi.string().required(),
    totalWorkoutTime: Joi.number().positive().required(),
    creationDate: Joi.date(),
    lastModificationDate: Joi.date(),
    deletionDate: Joi.date(),
    exercises: Joi.object().pattern(
      Joi.number().positive(),
      Joi.number().positive()
    ),
  });
}
