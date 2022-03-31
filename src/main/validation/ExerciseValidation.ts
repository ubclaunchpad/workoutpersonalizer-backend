import Joi from 'joi';

export class ExerciseValidation {
  static schema = Joi.object().keys({
    id: Joi.number().positive().required(),
    name: Joi.string().required(),
    description: Joi.string().required(),
    thumbnailSrc: Joi.string().required(),
    videoSrc: Joi.string().required(),
    length: Joi.number().positive().required(),
  });
}
