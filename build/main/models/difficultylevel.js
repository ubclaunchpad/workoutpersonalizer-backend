'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class DifficultyLevel extends sequelize_1.Model {
        static associate(models) {
            DifficultyLevel.belongsToMany(models.Exercise, {
                through: 'DifficultyLevelExercise',
                onDelete: 'SET NULL',
            });
        }
    }
    ;
    DifficultyLevel.init({
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
        modelName: 'DifficultyLevel',
    });
    return DifficultyLevel;
};
//# sourceMappingURL=difficultylevel.js.map