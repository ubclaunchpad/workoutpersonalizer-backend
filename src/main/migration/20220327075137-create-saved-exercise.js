'use strict';

const savedExercisesTableName = 'SavedExercises';
const savedExercises = [
  {
    userId: 'b70820ae-d0a3-411b-9217-0bf2370e7139',
    exerciseId: 1,
    createdAt: '2022-02-27T01:38:52.138Z',
    updatedAt: '2022-02-27T01:38:52.138Z',
  },
  {
    userId: 'b70820ae-d0a3-411b-9217-0bf2370e7139',
    exerciseId: 2,
    createdAt: '2022-02-27T01:38:52.138Z',
    updatedAt: '2022-02-27T01:38:52.138Z',
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
            as: 'userId',
          },
        },
        exerciseId: {
          type: Sequelize.INTEGER.UNSIGNED,
          primaryKey: true,
          references: {
            model: 'Exercises',
            key: 'id',
            as: 'exerciseId',
          },
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
