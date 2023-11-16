const env = require('../config/env')
const { sign } = require("jsonwebtoken")

const createToken = (user, roleUUID) => {
  return sign(
    { u_uuid: user.uuid, role: roleUUID },
    env.JWT_SECRET
  )
}

module.exports = { createToken }