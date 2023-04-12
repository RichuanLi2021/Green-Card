const mysql = require('mysql2');
const dbConfig = require('../config/databaseConfig.json');

const {host, user, password, database, port} = dbConfig.database;

const pool = mysql.createPool({
  host: host,
  user: user,
  password: password,
  database: database,
  port: port,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = pool.promise();

  
