const env = require('../config/env')

module.exports = () => {
  console.log('Checking environment variables...')
  let message = null

  if (env.API_PORT === undefined) message = '`API_PORT` NOT DEFINED'
  if (env.FRONTEND_URL === undefined) message = '`FRONTEND_URL` NOT DEFINED'
  if (env.JWT_SECRET === undefined) message = '`JWT_SECRET` NOT DEFINED'
  if (env.JWT_LENGTH_MS === undefined) message = '`JWT_LENGTH_MS` NOT DEFINED'

  if (process.env.NODE_ENV.toLowerCase() === 'development') {
    if (env.DB_HOST === undefined) message = '`DB_HOST` NOT DEFINED'
    if (env.DB_PORT === undefined) message = '`DB_PORT` NOT DEFINED'
    if (env.DB_DATABASE === undefined) message = '`DB_DATABASE` NOT DEFINED'
    if (env.DB_USERNAME === undefined) message = '`DB_USERNAME` NOT DEFINED'
    if (env.DB_PASSWORD === undefined) message = '`DB_PASSWORD` NOT DEFINED'
    if (env.DB_DIALECT === undefined) message = '`DB_DIALECT` NOT DEFINED'
  }

  else if (process.env.NODE_ENV.toLowerCase() === 'production') {
    if (process.env.PROD_DB_HOSTNAME === undefined) message = '`PROD_DB_HOSTNAME` NOT DEFINED'
    if (process.env.PROD_DB_PORT === undefined) message = '`PROD_DB_PORT` NOT DEFINED'
    if (process.env.PROD_DB_NAME === undefined) message = '`PROD_DB_NAME` NOT DEFINED'
    if (process.env.PROD_DB_USERNAME === undefined) message = '`PROD_DB_USERNAME` NOT DEFINED'
    if (process.env.PROD_DB_PASSWORD === undefined) message = '`PROD_DB_PASSWORD` NOT DEFINED'
  }

  if (message !== null) console.log(`\n\nENVIRONMENT VARIABLE ERROR: ${message}\n\n`)
  else console.log('Environment variables checked.')
}