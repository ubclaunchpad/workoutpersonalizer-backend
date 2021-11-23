'use strict';
import { Model } from 'sequelize';

export interface DifficultyLevelAttributes {
  id: string;
  name: string;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class DifficultyLevel
    extends Model<DifficultyLevelAttributes>
    implements DifficultyLevelAttributes
  {
    id!: string;
    name!: string;

    static associate(models: any) {
      DifficultyLevel.belongsToMany(models.Exercise, {
        through: 'DifficultyLevelExercise',
        onDelete: 'SET NULL',
      });
    }
  }
  DifficultyLevel.init(
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
      modelName: 'DifficultyLevel',
    }
  );
  return DifficultyLevel;
};
