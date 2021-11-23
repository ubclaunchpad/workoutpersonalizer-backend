'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Workout extends sequelize_1.Model {
        static associate(models) {
            Workout.belongsTo(models.User, {
                foreignKey: "userId",
                as: "user",
                onDelete: 'CASCADE',
            });
            Workout.belongsToMany(models.Exercise, {
                through: 'WorkoutExercise',
                onDelete: 'SET NULL',
            });
        }
    }
    ;
    Workout.init({
        id: {
            allowNull: false,
            defaultValue: sequelize_1.UUIDV4,
            primaryKey: true,
            type: DataTypes.UUID
        },
        userId: {
            type: DataTypes.UUID,
            defaultValue: sequelize_1.UUIDV4,
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
    }, {
        sequelize,
        modelName: 'Workout',
    });
    return Workout;
};
//# sourceMappingURL=workout.js.map