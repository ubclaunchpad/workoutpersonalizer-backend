'use strict';
import { Model, UUIDV4 } from 'sequelize';

export interface WorkoutAttributes {
  id: string;
  userId: string;
  name: string;
  imageUrl: string;
  totalWorkoutTime: number;
  creationDate: Date;
  lastModificationDate: Date;
  deletionDate: Date;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Workout extends Model<WorkoutAttributes> implements WorkoutAttributes {
    id!: string;
    userId!: string;
    name!: string;
    imageUrl!: string;
    totalWorkoutTime!: number;
    creationDate!: Date;
    lastModificationDate: Date;
    deletionDate: Date;

    static associate(models: any) {
      Workout.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'user',
        onDelete: 'CASCADE',
      });

      Workout.belongsToMany(models.Exercise, {
        through: 'WorkoutExercise',
        onDelete: 'CASCADE',
      });
    }
  }
  Workout.init(
    {
      id: {
        allowNull: false,
        defaultValue: UUIDV4,
        primaryKey: true,
        type: DataTypes.UUID,
      },
      userId: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        references: {
          model: 'Users',
          key: 'id',
        },
        onDelete: 'CASCADE',
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(40),
        allowNull: false,
      },
      imageUrl: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      totalWorkoutTime: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      creationDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      lastModificationDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      deletionDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Workout',
    }
  );
  return Workout;
};
