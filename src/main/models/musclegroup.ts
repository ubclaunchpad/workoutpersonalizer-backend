'use strict';
import { Model } from 'sequelize';

export interface MuscleGroupAttributes {
  id: number;
  name: string;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class MuscleGroup
    extends Model<MuscleGroupAttributes>
    implements MuscleGroupAttributes
  {
    id!: number;
    name!: string;

    static associate(models: any) {
      MuscleGroup.belongsToMany(models.Exercise, {
        through: 'MuscleGroupExercise',
        onDelete: 'CASCADE',
      });
    }
  }

  MuscleGroup.init(
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
      modelName: 'MuscleGroup',
    }
  );
  return MuscleGroup;
};
