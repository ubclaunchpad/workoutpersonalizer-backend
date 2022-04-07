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
    freezeTableName: true;
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
      freezeTableName: true,
    }
  );

  return WorkoutExercise;
};
