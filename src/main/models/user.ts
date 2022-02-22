'use strict';
import { Model, UUIDV4 } from 'sequelize';

export interface UserAttributes {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class User extends Model<UserAttributes> implements UserAttributes {
    id!: string;
    firstName!: string;
    lastName!: string;
    username!: string;
    email!: string;

    static associate(models: any) {
      User.hasMany(models.Workout, {
        as: 'workouts',
        foreignKey: 'userId',
        onDelete: 'CASCADE',
      });
      User.belongsToMany(models.Exercise, {
        through: 'SavedExercises',
        onDelete: 'CASCADE',
      });
    }
  }

  User.init(
    {
      id: {
        allowNull: false,
        defaultValue: UUIDV4,
        primaryKey: true,
        type: DataTypes.UUID,
      },
      firstName: {
        type: DataTypes.STRING(40),
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING(40),
        allowNull: false,
      },
      username: {
        type: DataTypes.STRING(40),
        allowNull: false,
        unique: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
    },
    {
      sequelize,
      modelName: 'User',
    }
  );
  return User;
};
