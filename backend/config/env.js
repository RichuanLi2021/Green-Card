module.exports = {
  "FRONTEND_URL": process.env.FRONTEND_URL || 'http://localhost:3000',
  "API_PORT": process.env.API_PORT || 8887,

  "DB_HOST": process.env.DB_HOST || 'localhost',
  "DB_PORT": process.env.DB_PORT || 3306,
  "DB_DATABASE": process.env.DB_DATABASE || 'gpgc',
  "DB_USERNAME": process.env.DB_USERNAME || 'root',
  "DB_PASSWORD": process.env.DB_PASSWORD || null,
  "DB_DIALECT": process.env.DB_DIALECT || 'mysql'
}