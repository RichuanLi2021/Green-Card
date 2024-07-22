module.exports = {
  "API_PORT": process.env.API_PORT,
  "FRONTEND_URL": process.env.FRONTEND_URL,
  "JWT_SECRET": process.env.JWT_SECRET,
  "JWT_LENGTH_MS": process.env.JWT_LENGTH_MS || 604800000,

  "DB_HOST": process.env.DB_HOST || 'localhost',
  "DB_PORT": process.env.DB_PORT || 3306,
  "DB_DATABASE": process.env.DB_DATABASE || 'gpgc',
  "DB_USERNAME": process.env.DB_USERNAME || 'root',
  "DB_PASSWORD": process.env.DB_PASSWORD || null,
  "DB_DIALECT": process.env.DB_DIALECT || 'mysql',

  "SMTP_HOST": process.env.SMTP_HOST || 'SMTP SERVER HOSTNAME',
  "SMTP_PORT": process.env.SMTP_PORT || "587:TLS, 465:SSL",
  "SMTP_USER": process.env.SMTP_USER || 'your-email@gpgc.com',
  "SMTP_PASSWORD": process.env.SMTP_PASSWORD || 'your-SMTP-password'
}