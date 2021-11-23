'use strict';

const equipment = [
  {
    id: 1,
    name: 'weights',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 2,
    name: 'resistance bands',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface
      .createTable('Equipment', {
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
          type: Sequelize.DATE,
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          allowNull: false,
        },
      })
      .then(() => {
        return queryInterface.bulkInsert('Equipment', equipment);
      });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Equipment');
  },
};
