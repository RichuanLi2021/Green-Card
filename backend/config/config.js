require("dotenv").config();
const fs = require('fs');
const env = require('./env');

module.exports = {
  'development': {
    username: env.DB_USERNAME,
    password: env.DB_PASSWORD,
    database: env.DB_DATABASE,
    host: env.DB_HOST,
    port: env.DB_PORT,
    dialect: env.DB_DIALECT,
    dialectOptions: {
      bigNumberStrings: true
    }
  },
  'test': {
    username: process.env.CI_DB_USERNAME,
    password: process.env.CI_DB_PASSWORD,
    database: process.env.CI_DB_NAME,
    host: process.env.CI_DB_HOST,
    port: process.env.CI_DB_PORT,
    dialect: process.env.CI_DB_DIALECT || 'mysql',
    dialectOptions: {
      bigNumberStrings: true
    }
  },
  'production': {
    username: process.env.PROD_DB_USERNAME,
    password: process.env.PROD_DB_PASSWORD,
    database: process.env.PROD_DB_NAME,
    host: process.env.PROD_DB_HOSTNAME,
    port: process.env.PROD_DB_PORT,
    dialect: process.env.PROD_DB_DIALECT || 'mysql',
    dialectOptions: {
      bigNumberStrings: true,
      // ssl: {
      //   ca: fs.readFileSync(__dirname + '/mysql-ca-main.crt')
      // }
    }
  }
};