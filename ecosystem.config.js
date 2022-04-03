module.exports = {
  name: 'FitHub',
  script: 'sudo yarn start',
  env_production: {
    NODE_ENV: 'production',
  },
  watch: ['src/main'],
};
