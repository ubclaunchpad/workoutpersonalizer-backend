'use strict';
const { UUIDV4 } = require("sequelize");
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Users', {
            id: {
                allowNull: false,
                defaultValue: UUIDV4,
                primaryKey: true,
                type: Sequelize.UUID,
            },
            firstName: {
                type: Sequelize.STRING(40),
                allowNull: false,
            },
            lastName: {
                type: Sequelize.STRING(40),
                allowNull: false,
            },
            username: {
                type: Sequelize.STRING(40),
                allowNull: false,
                unique: true,
            },
            email: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true,
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
        return queryInterface.dropTable('Users');
    }
};
//# sourceMappingURL=20211117081012-create-user.js.map