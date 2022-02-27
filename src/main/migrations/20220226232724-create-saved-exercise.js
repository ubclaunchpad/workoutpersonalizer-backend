'use strict';

const savedExercisesTableName = 'SavedExercises';
const savedExercises = [
  {
    userId: 'b70820ae-d0a3-411b-9217-0bf2370e7139',
    exerciseId: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    userId: 'b70820ae-d0a3-411b-9217-0bf2370e7139',
    exerciseId: 2,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface
      .createTable(savedExercisesTableName, {
        userId: {
          type: Sequelize.UUID,
          primaryKey: true,
          references: {
            model: 'Users',
            key: 'id',
            as: 'userId'
          }
        },
        exerciseId: {
          type: Sequelize.INTEGER.UNSIGNED,
          primaryKey: true,
          references: {
            model: 'Exercises',
            key: 'id',
            as: 'exerciseId'
          }
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
      })
      .then(() => {
        return queryInterface.bulkInsert(
          savedExercisesTableName,
          savedExercises
        );
      });
  },

  down(queryInterface, Sequelize) {
    return queryInterface.dropTable(savedExercisesTableName);
  },
};
