'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class User extends sequelize_1.Model {
        static associate(models) {
            User.hasMany(models.Workout, {
                as: 'workouts',
                onDelete: 'CASCADE',
            });
            User.belongsToMany(models.Exercise, {
                through: 'SavedExercises',
                onDelete: 'CASCADE',
            });
        }
    }
    ;
    User.init({
        id: {
            allowNull: false,
            defaultValue: sequelize_1.UUIDV4,
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
    }, {
        sequelize,
        modelName: 'User',
    });
    return User;
};
//# sourceMappingURL=user.js.map