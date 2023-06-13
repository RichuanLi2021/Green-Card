const mysql = require('mysql2');
const dbConfig = require('../config/databaseConfig.json');

const {host, user, password, database} = dbConfig.database;

const pool = mysql.createPool({
  host: host,
  user: user,
  password: password,
  database: database,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  port:3306
});

module.exports = pool.promise();

  
