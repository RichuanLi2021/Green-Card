const env = require('../config/env')
const { verify } = require('jsonwebtoken')
const { User, User_Role, Role } = require('../models');
const { decodePayload } = require('../utils/token')

const validateUserToken = (req, res, next) => {
  const accessToken = req.cookies['access-token']
  if (!accessToken) return res.status(400).json({ error: 'User not authenticated!' })

  try {
    const validToken = verify(accessToken, env.JWT_SECRET)
    if (validToken) {
      req.authenticated = true
      return next()
    } else {
      return res.status(400).json({ error: 'User not authenticated!' })
    }
  } catch (err) {
    return res.status(400).json({ error: err })
  }
}

const validateAdminToken = async (req, res, next) => {
  const accessToken = req.cookies["access-token"]
  if (!accessToken) return res.status(400).json({ error: 'User not authenticated!' })

  try {
    const validToken = verify(accessToken, env.JWT_SECRET)
    if (validToken) {
      const payload = decodePayload(accessToken)
      if (!payload.role) return res.status(400).json({ error: 'User does not have administrative privileges!' })

      const adminRole = await Role.findOne({ where: { title: 'admin' } })
      const adminUUID = adminRole.uuid
      if (payload.role !== adminUUID) return res.status(400).json({ error: 'User does not have administrative privileges!' })

      req.authenticated = true
      return next()
    } else {
      return res.status(400).json({ error: 'User not authenticated!' })
    }
  } catch (err) {
    return err ? res.status(400).json({ error: err }) : res.status(400).json({ error: 'Unknown error occurred' })
  }
}

module.exports = { validateUserToken, validateAdminToken }