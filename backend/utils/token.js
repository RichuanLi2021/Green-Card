const env = require('../config/env')
const { sign } = require("jsonwebtoken")

// Note: Payload contents are not encrypted (see `decodePayload` function below), so do not place sensitive data the payload
const createToken = (user, roleUUID) => {
  return sign(
    {
      u_uuid: user.uuid,
      role: roleUUID
    },
    env.JWT_SECRET
  )
}

const decodePayload = (validToken) => {
  return JSON.parse(Buffer.from(validToken.split('.')[1], 'base64').toString());
}

module.exports = { createToken, decodePayload }