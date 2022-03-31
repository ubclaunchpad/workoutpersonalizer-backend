'use strict';
import { Model } from 'sequelize';

export interface EquipmentAttributes {
  id: number;
  name: string;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Equipment
    extends Model<EquipmentAttributes>
    implements EquipmentAttributes
  {
    id!: number;
    name!: string;

    static associate(models: any) {
      Equipment.belongsToMany(models.Exercise, {
        through: 'EquipmentExercise',
        onDelete: 'CASCADE',
      });
    }
  }
  Equipment.init(
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
      modelName: 'Equipment',
    }
  );
  return Equipment;
};
