# Server
========
Express RESTful API Boilerplate Using TypeScript

## Global Requisites
* node (^14.*)
* yarn (^1.4)
* typescript (^4.*)
* express (^4.*)
* socket.io (^4.*)
* sequelize (^6.*)

## App Structure
```bash
├── __test__
│   ├── integrations # integrations test case
│   ├── units # unit test cases
├── dist
├── src
│   ├── config
│   │   ├── express.ts # express setup
│   │   ├── logger.ts # morgan logger
│   │   ├── passport.ts # auth RestFulAPI setup
│   │   ├── sequelize.ts # sequelize connections
│   │   ├── socket.ts # socket.io setup
│   │   ├── vars.js # mapping variables from .env file to js variables
│   ├── consts
│   │   ├── index.ts # enum, constans, ...
│   ├── controllers
│   │   ├── auth.controller.ts
│   │   ├── bid.controller.ts
│   │   ├── deposit.controller.ts
│   │   ├── item.controller.ts
│   │   ├── {controller_name}.controller.ts
│   ├── database 
│   │   ├── migrations
│   │   │   ├── 20230311082632-create-user.js
│   │   │   ├── ...
│   │   ├── seeders
│   ├── docs
│   │   ├── schemas
│   │   │   ├── auth.yml
│   │   │   ├── ...
│   │   ├── components.yml
│   │   ├── swaggerDef.ts
│   ├── middlewares
│   │   ├── auth.middleware.ts
│   │   ├── error.middleware.ts
│   │   ├── rateLimit.middleware.ts
│   │   ├── {name}.middleware.ts
│   ├── models
│   │   ├── index.ts # main ORM file, which compile all models and map sequelize connection to the models
│   │   ├── bid.ts
│   │   ├── deposit.ts
│   │   ├── {db_table_single_name}.ts # aka model name
│   ├── public # store/access static resources
│   ├── repositories
│   │   ├── bid.repository.ts
│   │   ├── deposit.repository.ts
│   │   ├── {model_name}.repository.ts # each model should be mapped to a repository
│   ├── routes
│   │   ├── v1
│   │   │   ├── auth.routes.ts
│   │   │   ├── {controller_name}.routes.ts # each routes file should handle method of a controller
│   │   ├── {version} # versioning route
│   │   ├── docs.route.ts # swagger document route
│   │   ├── index.ts # main route file
│   ├── utils # store helpers files
│   ├── validations # store request validations
│   │   ├── auth.validation.ts
│   │   ├── bid.validation.ts
│   │   ├── {controller_name}.validation.ts # the validations is groupped by controller
├── index.ts # main file of the app
├── .env.development
├── .env.{NODE_ENV} # configuration file by env name
├── .eslint* # eslint configuration
├── .prettier* # prettier configuration
├── .sequelizerc # sequelize command line configuration
├── .git* # git configuration
├── jest.config.ts
├── nodemon.json
├── package.json
├── README.md
└── tsconfig.json
```
## Install, Configure & Run
Below mentioned are the steps to install, configure & run in your platform/distributions.

### Install
```bash
# Run command to clone the repo.
git clone https://github.com/anhht83/fs_boilerplate_server.git

# Goto the cloned project folder, run command
cd fs_boilerplate_server

# Run command to install packages dependencies.
yarn install

# [Optional] Setup husky with GIT, run command
yarn prepare
```

### Configure 
#### Configure database connection
- Create a new MySql database
- Edit your `.env.xxx` files to config database connection
```bash
DB_CLIENT=mysql
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=password 
DB_NAME=database name
DB_PORT=3306 
```
- Migrate database
```bash
# Run command to migrate/seed database
yarn sequelize db:migrate
```
**NOTE**: Sequelize support multiple RMDBs. You'll also have to manually install the driver for your database of choice:
```bash
# One of the following:
$ yarn add --save pg pg-hstore # Postgres
$ yarn add --save mysql2
$ yarn add --save mariadb
$ yarn add --save sqlite3
$ yarn add --save tedious # Microsoft SQL Server
$ yarn add --save oracledb # Oracle Database
```

### Run
```bash
# Run development
yarn dev
 
# Run production
yarn build:start

# after run successful, access the link below to check your installation
http://locahost:3001
```
### Test & Code format validation
```bash
# Run test
yarn test

# Validate code
yarn lint

# Format code
yarn format
#or
yarn pretty
```

### Build code and deployment
```bash
# Build code to "dist" folder
yarn build
```

## API Document
[Swagger](https://swagger.io/) is Simplify API development for users, teams, and enterprises with the Swagger open source and professional toolset.

Easily used by Swagger to design and document APIs at scale.

Start your app in development mode at http://localhost:3001/docs

## Development

### Migration / Seed
The app uses **Sequelize Command-Line Interface (CLI)**. The CLI ships support for migrations and project bootstrapping. 

You can find detailed how to use Sequelize CL and many tips in [its documentation](https://sequelize.org/docs/v6/other-topics/migrations/).

# Connect
=========
**Anh Tuan Hoang** <anhht83@gmail.com>  https://github.com/anhht83