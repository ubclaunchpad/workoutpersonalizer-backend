'use strict';
const { UUIDV4 } = require("sequelize");
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Workouts', {
            id: {
                allowNull: false,
                defaultValue: UUIDV4,
                primaryKey: true,
                type: Sequelize.UUID
            },
            userId: {
                type: Sequelize.UUID,
                defaultValue: UUIDV4,
                references: {
                    model: 'Users',
                    key: 'id',
                },
                onDelete: 'CASCADE',
                allowNull: false,
            },
            name: {
                type: Sequelize.STRING(40),
                allowNull: false,
            },
            imageUrl: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            totalWorkoutTime: {
                type: Sequelize.DECIMAL,
                allowNull: false,
            },
            creationDate: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            lastModificationDate: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            deletionDate: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            createdAt: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            updatedAt: {
                type: Sequelize.DATE,
                allowNull: false,
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Workouts');
    }
};
//# sourceMappingURL=20211117082843-create-workout.js.map