config = {
    "database": process.env.DB_DATABASE,
    "db_host": process.env.DB_HOST,
    "db_port": process.env.DB_PORT,
    "db_username": process.env.DB_USERNAME,
    "db_password": process.env.DB_PASSWORD,

    "frontend_url": process.env.FRONTEND_URL,
    "api_port": process.env.API_PORT
}

module.exports = config