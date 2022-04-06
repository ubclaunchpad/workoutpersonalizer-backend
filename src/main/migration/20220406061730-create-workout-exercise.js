'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface
      .createTable('WorkoutExercise', {
        workoutId: {
          type: Sequelize.UUID,
          primaryKey: true,
          references: {
            model: 'Workouts',
            key: 'id',
            as: 'workoutId',
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
        orderNum: {
          allowNull: false,
          type: Sequelize.INTEGER.UNSIGNED,
          default: 1,
        },
      });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.dropTable('WorkoutExercise');
  }
};
