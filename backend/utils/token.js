const env = require('../config/env')
const { sign } = require("jsonwebtoken")

// Note: Payload contents are not encrypted (see `decodePayload` function below), so do not place sensitive data the payload
const createToken = (user, roleTitle) => {
  return sign(
    {
      uuid: user.uuid,
      role: roleTitle
    },
    env.JWT_SECRET
  )
}

const decodePayload = (validToken) => {
  return JSON.parse(Buffer.from(validToken.split('.')[1], 'base64').toString());
}

module.exports = { createToken, decodePayload }