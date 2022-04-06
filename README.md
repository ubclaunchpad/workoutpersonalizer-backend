<!-- HEADER -->
<br />
<p align="center">
  <a href="https://github.com/ubclaunchpad/workoutpersonalizer-backend">
    <img src="src/main/assets/FitHubLogo.png" alt="Logo" height="100" resize>
  </a>

  <h3 align="center">FitHub Server</h3>
  <a href="https://github.com/ubclaunchpad/workoutpersonalizer-frontend"> <i> View the FitHub Client </i> </a>

</p>


<!-- TABLE OF CONTENTS -->
  <h2 style="display: inline-block">Table of Contents</h2>
  <ol>
    <li><a href="#about-the-project">About The Project</a></li>
    <li><a href="#technologies">Technologies</a></li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#configuration">Configuration</a></li>
      </ul>
    </li>
    <li><a href="#database-setup">Database Setup</a></li>
    <li><a href="#database-commands">Database Commands</a></li>
    <li><a href="#contributing">Contributing</a></li>
  </ol>

<!-- ABOUT THE PROJECT -->
## About The Project
FitHub allows users to create, organize and follow playlists of exercises- allowing for a convenient, centralized, and easy workout experience.

<!-- TECHNOLOGIES -->
## Technologies
* Flutter - Frontend
* Node - Backend
* AWS S3 - Media Storage 
* PostgreSQL - Database
* Firebase - Authentication
* Firebase Hosting - FE Deployment
* Amazon EC2 - BE Deployment
* Amazon RDS - DB Deployment

<!-- GETTING STARTED -->
## Getting Started
### Prerequisites

1. Yarn (https://classic.yarnpkg.com/en/docs/install/)
2. Postgres (https://www.postgresql.org/download/)
   - When installing, use the default password "postgres"
   - For macOS users, suggested installation is through homebrew
3. Postico (https://eggerapps.at/postico/)
   - This is specific to macOS users

### Installation

1. Run `yarn install` to install all dependencies

### Configurations

Make a copy of `sample.env`, rename it to `.env`, and fill out the environment variables.

<!-- DATABASE SETUP -->
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

<!-- DATABASE COMMANDS -->
## Database Commands
If you are interested in running other commands, run `yarn sequelize-cli --help`

<!-- CONTRIBUTING -->
## Contributing
Have an idea on how to make FitHub greater? Check out our
<a href="https://github.com/ubclaunchpad/workoutpersonalizer-backend/blob/main/CONTRIBUTING.md"> Contributing Doc</a>!
