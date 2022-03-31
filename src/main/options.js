const path = require('path');

module.exports = {
  config: path.join(__dirname, 'config', 'config.js'),
  'migrations-path': path.join(__dirname, 'migration'),
  'seeders-path': path.join(__dirname, 'seeder'),
  'models-path': path.join(__dirname, 'model'),
};
