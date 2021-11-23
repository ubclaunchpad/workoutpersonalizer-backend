'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Equipment extends sequelize_1.Model {
        static associate(models) {
            Equipment.belongsToMany(models.Exercise, {
                through: 'EquipmentExercise',
                onDelete: 'SET NULL',
            });
        }
    }
    ;
    Equipment.init({
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING(40),
            allowNull: false,
        },
    }, {
        sequelize,
        modelName: 'Equipment',
    });
    return Equipment;
};
//# sourceMappingURL=equipment.js.map