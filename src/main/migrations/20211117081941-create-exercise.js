'use strict';

const exercises = [
  {
    id: 1,
    name: 'Side to Side Stretch',
    description: 'Stretch from side to side!',
    thumbnailSrc: 'https://teamworkoutplatform.s3.us-west-2.amazonaws.com/Clip+1+Thumbnail.png',
    videoSrc: 'https://teamworkoutplatform.s3.us-west-2.amazonaws.com/Clip+1.mp4',
    length: 30,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 2,
    name: 'Arm Circles',
    description: 'Circular arms!',
    thumbnailSrc: 'https://teamworkoutplatform.s3.us-west-2.amazonaws.com/Clip+2+Thumbnail.png',
    videoSrc: 'https://teamworkoutplatform.s3.us-west-2.amazonaws.com/Clip+2.mp4',
    length: 30,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 3,
    name: 'Neck Circles',
    description: 'Rotational neck circles',
    thumbnailSrc: 'https://teamworkoutplatform.s3.us-west-2.amazonaws.com/Clip+3+Thumbnail.png',
    videoSrc: 'https://teamworkoutplatform.s3.us-west-2.amazonaws.com/Clip+3.mp4',
    length: 30,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 4,
    name: 'Hip Flexor Right',
    description: 'Stretch your right hip flexor!',
    thumbnailSrc: 'https://teamworkoutplatform.s3.us-west-2.amazonaws.com/Clip+4+Thumbnail.png',
    videoSrc: 'https://teamworkoutplatform.s3.us-west-2.amazonaws.com/Clip+4.mp4',
    length: 30,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 5,
    name: 'Ham String Stretch',
    description: 'Let\'s stretch those hamstrings!',
    thumbnailSrc: 'https://teamworkoutplatform.s3.us-west-2.amazonaws.com/Clip+5+Thumbnail.png',
    videoSrc: 'https://teamworkoutplatform.s3.us-west-2.amazonaws.com/Clip+5.mp4',
    length: 30,
    createdAt: new Date(),
    updatedAt: new Date()
  }
];


module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface
      .createTable('Exercises', {
        id: {
          type: Sequelize.INTEGER.UNSIGNED,
          primaryKey: true,
          autoIncrement: true,
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        description: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        thumbnailSrc: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        videoSrc: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        length: {
          type: Sequelize.DECIMAL,
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
        return queryInterface.bulkInsert('Exercises', exercises);
      });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Exercises');
  },
};
