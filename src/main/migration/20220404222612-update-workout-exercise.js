'use strict';

const workoutExerciseTableName = 'WorkoutExercise';
const workoutExercise = [
  {
    createdAt: '2022-02-27T01:38:52.188Z',
    updatedAt: '2022-02-27T01:38:52.188Z',
    exerciseId: 1,
    workoutId: 'a9af2b50-fc51-4d42-82d2-a65ad02c44ae',
  },
  {
    createdAt: '2022-02-27T01:38:52.188Z',
    updatedAt: '2022-02-27T01:38:52.188Z',
    exerciseId: 2,
    workoutId: 'a9af2b50-fc51-4d42-82d2-a65ad02c44ae',
  },
  {
    createdAt: '2022-02-27T01:38:52.188Z',
    updatedAt: '2022-02-27T01:38:52.188Z',
    exerciseId: 3,
    workoutId: 'a9af2b50-fc51-4d42-82d2-a65ad02c44ae',
  },
];

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface
      .renameColumn(workoutExerciseTableName, 'ExerciseId', 'exerciseId')
      .then(() => {
        return queryInterface.renameColumn(
          workoutExerciseTableName,
          'WorkoutId',
          'workoutId'
        );
      })
      .then(() => {
        return queryInterface.bulkInsert(
          workoutExerciseTableName,
          workoutExercise
        );
      });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface
      .renameColumn(workoutExerciseTableName, 'exerciseId', 'ExerciseId')
      .then(() => {
        return queryInterface.renameColumn(
          workoutExerciseTableName,
          'workoutId',
          'WorkoutId'
        );
      });
  },
};
