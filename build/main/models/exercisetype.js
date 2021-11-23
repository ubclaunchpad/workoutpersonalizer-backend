'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class ExerciseType extends sequelize_1.Model {
        static associate(models) {
            ExerciseType.belongsToMany(models.Exercise, {
                through: 'ExerciseTypeExercise',
                onDelete: 'SET NULL',
            });
        }
    }
    ;
    ExerciseType.init({
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
        modelName: 'ExerciseType',
    });
    return ExerciseType;
};
//# sourceMappingURL=exercisetype.js.map