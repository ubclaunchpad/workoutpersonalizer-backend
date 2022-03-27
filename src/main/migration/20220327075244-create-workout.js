'use strict';
const { UUIDV4 } = require('sequelize');

const workouts = [
  {
    id: 'a9af2b50-fc51-4d42-82d2-a65ad02c44ae',
    userId: 'b70820ae-d0a3-411b-9217-0bf2370e7139',
    name: '8 Minutes to Intense Abs',
    imageUrl:
      'https://teamworkoutplatform.s3.us-west-2.amazonaws.com/Exercise+1+Thumbnail.png',
    totalWorkoutTime: 510,
    creationDate: '2022-02-27T01:38:52.188Z',
    lastModificationDate: '2022-02-27T01:38:52.188Z',
    deletionDate: '2022-02-27T01:38:52.188Z'
  },
  {
    id: '5015cb45-bde5-40f4-b0b8-027d960f2e92',
    userId: 'b70820ae-d0a3-411b-9217-0bf2370e7139',
    name: '4 Minute Stretch',
    imageUrl:
      'https://teamworkoutplatform.s3.us-west-2.amazonaws.com/Clip+1+Thumbnail.png',
    totalWorkoutTime: 240,
    creationDate: '2022-02-27T01:38:52.188Z',
    lastModificationDate: '2022-02-27T01:38:52.188Z',
    deletionDate: '2022-02-27T01:38:52.188Z',
  },
];

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface
      .createTable('Workouts', {
        id: {
          allowNull: false,
          defaultValue: UUIDV4,
          primaryKey: true,
          type: Sequelize.UUID,
        },
        userId: {
          type: Sequelize.UUID,
          defaultValue: UUIDV4,
          references: {
            model: 'Users',
            key: 'id',
          },
          onDelete: 'CASCADE',
          allowNull: false,
        },
        name: {
          type: Sequelize.STRING(40),
          allowNull: false,
        },
        imageUrl: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        totalWorkoutTime: {
          type: Sequelize.DECIMAL,
          allowNull: false,
        },
        creationDate: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        lastModificationDate: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        deletionDate: {
          type: Sequelize.DATE,
          allowNull: false,
        },
      })
      .then(() => {
        return queryInterface.bulkInsert('Workouts', workouts);
      });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Workouts');
  },
};
