const env = require('../config/env')
const { sign } = require("jsonwebtoken")

const createToken = (user) => {
  return sign(
    { u_uuid: user.uuid },
    env.JWT_SECRET
  )
}

module.exports = { createToken }