'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Exercises', {
            id: {
                type: Sequelize.INTEGER.UNSIGNED,
                primaryKey: true,
                autoIncrement: true,
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            description: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            thumbnailSrc: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            videoSrc: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            length: {
                type: Sequelize.DECIMAL,
                allowNull: false,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Exercises');
    }
};
//# sourceMappingURL=20211117081941-create-exercise.js.map