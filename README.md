# Workout Personalizer Backend

## Getting Started

### Prerequisites

1. Yarn (https://classic.yarnpkg.com/en/docs/install/)
2. Postgres (https://www.postgresql.org/download/)
   - When installing, use the default password "postgres"
   - For macOS users, suggested installation is through homebrew
3. Postico (https://eggerapps.at/postico/)
   - This is specific to macOS users

### Installations

1. Run `yarn install` to install all dependencies

### Configurations

Make a copy of `sample.env`, rename it to `.env`, and fill out the environment variables.

## Database Setup

All database commands must start with `yarn sequelize-cli` due to changes in path structure.

1. Start the postgres server.
2. Run `yarn sequelize-cli init` to setup the project.
3. Run `yarn sequelize-cli db:create`
   - This command only setups the dev database. There will also databases for testing and production.
4. Run `yarn sequelize-cli db:migrate` to run the pending migrations. Any changes to the tables must take place through migrations.
   Ensure changes are also updated in the model files.
5. Setup Postico using the same values in the `.env`
6. Start the server.
7. Ensure all tables and attributes are correct. Check that tables are populated as intended.

## Database Commands

If you are interested in running other commands, run `yarn sequelize-cli --help`
