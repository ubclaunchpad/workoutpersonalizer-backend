'use strict';

const difficultyLevels = [
  {
    id: 1,
    name: "easy",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 2,
    name: "medium",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 3,
    name: "hard",
    createdAt: new Date(),
    updatedAt: new Date(),
  }
];

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('DifficultyLevels', {
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
      return queryInterface.bulkInsert('DifficultyLevels', difficultyLevels);
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('DifficultyLevels');
  }
};