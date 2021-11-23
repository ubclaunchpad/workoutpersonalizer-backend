'use strict';
const equipment = [
    {
        id: 1,
        name: "weights",
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        id: 2,
        name: "resistance bands",
        createdAt: new Date(),
        updatedAt: new Date(),
    },
];
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Equipment', {
            id: {
                type: Sequelize.INTEGER.UNSIGNED,
                primaryKey: true,
                autoIncrement: true,
            },
            name: {
                type: Sequelize.STRING(40),
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
        }).then(() => {
            return queryInterface.bulkInsert('Equipment', equipment);
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Equipment');
    }
};
//# sourceMappingURL=20211117082423-create-equipment.js.map