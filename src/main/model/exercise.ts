'use strict';
import { Model } from 'sequelize';

export interface ExerciseAttributes {
  id: number;
  name: string;
  description: string;
  thumbnailSrc: string;
  videoSrc: string;
  length: number;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Exercise
    extends Model<ExerciseAttributes>
    implements ExerciseAttributes
  {
    id!: number;
    name!: string;
    description!: string;
    thumbnailSrc!: string;
    videoSrc!: string;
    length!: number;

    static associate(models: any) {
      Exercise.belongsToMany(models.MuscleGroup, {
        through: 'MuscleGroupExercise',
        onDelete: 'CASCADE',
      });
      Exercise.belongsToMany(models.ExerciseType, {
        through: 'ExerciseTypeExercise',
        onDelete: 'CASCADE',
      });
      Exercise.belongsToMany(models.DifficultyLevel, {
        through: 'DifficultyLevelExercise',
        onDelete: 'CASCADE',
      });
      Exercise.belongsToMany(models.Equipment, {
        through: 'EquipmentExercise',
        onDelete: 'CASCADE',
      });
      Exercise.belongsToMany(models.Workout, {
        through: 'WorkoutExercise',
        foreignKey: 'exerciseId',
        onDelete: 'CASCADE',
      });
      Exercise.belongsToMany(models.User, {
        through: 'SavedExercises',
        foreignKey: 'exerciseId',
        onDelete: 'CASCADE',
      });
    }
  }

  Exercise.init(
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      thumbnailSrc: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      videoSrc: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      length: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        get(): number {
          // Workaround sequelize issue is fixed
          // Issue: decinmal type returned as string to preserve precision
          const value = this.getDataValue('length');
          return value === null ? 0 : parseFloat(value.toString());
        },
      },
    },
    {
      sequelize,
      modelName: 'Exercise',
      timestamps: true,
    }
  );

  return Exercise;
};
