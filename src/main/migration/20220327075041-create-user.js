'use strict';
const { UUIDV4 } = require('sequelize');

const users = [
  {
    id: 'b70820ae-d0a3-411b-9217-0bf2370e7139',
    firstName: 'LP',
    lastName: 'Team',
    username: 'lp_team',
    email: 'lp_team@mail.com',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface
      .createTable('Users', {
        id: {
          allowNull: false,
          defaultValue: UUIDV4,
          primaryKey: true,
          type: Sequelize.UUID,
        },
        firstName: {
          type: Sequelize.STRING(40),
          allowNull: false,
        },
        lastName: {
          type: Sequelize.STRING(40),
          allowNull: false,
        },
        username: {
          type: Sequelize.STRING(40),
          allowNull: false,
          unique: true,
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true,
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
        return queryInterface.bulkInsert('Users', users);
      });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  },
};
