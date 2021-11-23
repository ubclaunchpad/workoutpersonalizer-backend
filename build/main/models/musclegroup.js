'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class MuscleGroup extends sequelize_1.Model {
        static associate(models) {
            MuscleGroup.belongsToMany(models.Exercise, {
                through: 'MuscleGroupExercise',
                onDelete: 'SET NULL',
            });
        }
    }
    ;
    MuscleGroup.init({
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
        modelName: 'MuscleGroup',
    });
    return MuscleGroup;
};
//# sourceMappingURL=musclegroup.js.map