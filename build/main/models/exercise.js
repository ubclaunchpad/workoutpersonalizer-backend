'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Exercise extends sequelize_1.Model {
        static associate(models) {
            Exercise.belongsToMany(models.MuscleGroup, {
                through: 'MuscleGroupExercise',
                onDelete: 'SET NULL',
            });
            Exercise.belongsToMany(models.ExerciseType, {
                through: 'ExerciseTypeExercise',
                onDelete: 'SET NULL',
            });
            Exercise.belongsToMany(models.DifficultyLevel, {
                through: 'DifficultyLevelExercise',
                onDelete: 'SET NULL',
            });
            Exercise.belongsToMany(models.Equipment, {
                through: 'EquipmentExercise',
                onDelete: 'SET NULL',
            });
            Exercise.belongsToMany(models.Workout, {
                through: 'WorkoutExercise',
                onDelete: 'SET NULL',
            });
            Exercise.belongsToMany(models.User, {
                through: 'SavedExercises',
                onDelete: 'SET NULL',
            });
        }
    }
    ;
    Exercise.init({
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
        },
    }, {
        sequelize,
        modelName: 'Exercise',
    });
    return Exercise;
};
//# sourceMappingURL=exercise.js.map