'use strict';

const muscleGroups = [
  {
    id: 1,
    name: 'chest',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 2,
    name: 'back',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 3,
    name: 'arms',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 4,
    name: 'shoulders',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 5,
    name: 'legs',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 6,
    name: 'calves',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface
      .createTable('MuscleGroups', {
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
        return queryInterface.bulkInsert('MuscleGroups', muscleGroups);
      });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('MuscleGroups');
  },
};
