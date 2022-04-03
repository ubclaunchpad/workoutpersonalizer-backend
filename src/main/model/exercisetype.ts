'use strict';
import { Model } from 'sequelize';

export interface ExerciseTypeAttributes {
  id: number;
  name: string;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class ExerciseType
    extends Model<ExerciseTypeAttributes>
    implements ExerciseTypeAttributes
  {
    id!: number;
    name!: string;

    static associate(models: any) {
      ExerciseType.belongsToMany(models.Exercise, {
        through: 'ExerciseTypeExercise',
        onDelete: 'CASCADE',
      });
    }
  }

  ExerciseType.init(
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING(40),
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'ExerciseType',
    }
  );
  return ExerciseType;
};
