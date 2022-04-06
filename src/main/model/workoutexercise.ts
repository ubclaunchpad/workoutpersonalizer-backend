'use strict';
import { Model } from 'sequelize';

export interface WorkoutExerciseAttributes {
  orderNum: number;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class WorkoutExercise
    extends Model<WorkoutExerciseAttributes>
    implements WorkoutExerciseAttributes
  {
    orderNum!: number;
  }

  WorkoutExercise.init(
    {
      orderNum: {
        allowNull: true,
        type: DataTypes.INTEGER.UNSIGNED,
        defaultValue: 1,
      },
    },
    {
      sequelize,
      modelName: 'WorkoutExercise',
      timestamps: true,
    }
  );

  return WorkoutExercise;
};
