'use strict';

const exerciseTypes = [
  {
    id: 1,
    name: "cardio",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 2,
    name: "yoga",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 3,
    name: "hiit",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 4,
    name: "pilates",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 5,
    name: "endurance",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 6,
    name: "weight training",
    createdAt: new Date(),
    updatedAt: new Date(),
  }
];

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ExerciseTypes', {
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
      return queryInterface.bulkInsert('ExerciseTypes', exerciseTypes);
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('ExerciseTypes');
  }
};