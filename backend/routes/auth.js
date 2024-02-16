const express = require('express')
const router = express.Router()
const { User, User_Role, Role } = require('../models')
const { createToken } = require('../utils/token')
const { v4: uuidv4 } = require("uuid")
const bcrypt = require('bcrypt')
const env = require('../config/env')

router.post('/login', async (req, res) => {
  if (req.cookies['access-token']) return res.status(400).json({ errorMessage: 'Already logged in' })

  const { email, password } = req.body
  // Sanitize and Validate

  try {
    const user = await User.findOne({
      where: { email: email }
    })
    if (!user) return res.status(400).json({ errorMessage: 'Incorrect email or password, or the account does not exist' })
    if (!user.verified) return res.status(400).json({ errorMessage: 'Account has not been verified yet' })

    bcrypt.compare(password, user.password).then(async (match) => {
      if (!match) return res.status(400).json({ errorMessage: 'Incorrect email or password, or the account does not exist' })

      await User.update(
        {
          lastLogin: new Date()
        }, {
          where: { id: user.id }
        })

      const role = await Role.findOne({
        include: {
          model: User_Role,
          include: {
            model: User,
            where: { uuid: user.uuid }
          }
        }
      })
      const roleTitle = role.dataValues.title

      const token = createToken(user, roleTitle)
      return res
        .status(200)
        .cookie(
          'access-token',
          token,
          {
            httpOnly: true,
            maxAge: env.JWT_LENGTH_MS,
            sameSite: 'none',
            secure: true
          }
        ).json({ message: 'Successfully logged in', token: token, role: roleTitle })
    })
  } catch (error) {
    return res.status(500).json({ error, errorMessage: 'Encountered unexpected error while logging in' })
  }
})

router.post('/logout', async (req, res) => {
  try {
    
    if (!req.cookies['access-token']) return res.status(400).json({ errorMessage: 'Not logged in' })
    return res.clearCookie('access-token').status(200).json({ message: 'Successfully logged out' })
  } catch (error) {
    return res.status(500).json({ error, errorMessage: 'Encountered unexpected error while logging out' })
  }
})

router.post('/register', async (req, res) => {
  if (req.cookies['access-token']) return res.status(400).json({ errorMessage: 'Cannot register a new account while logged in' })

  const { discipline, email, password } = req.body
  // Sanitize and Validate

  try {
    bcrypt.hash(password, 12).then((hash) => {
        User.create({
          uuid: uuidv4(),
          discipline: discipline,
          email: email,
          password: hash
        })
          .then((user) => {
            User_Role.create({
              uuid: uuidv4(),
              userID: user.id,
              roleID: 2 // 'user' role
            })
              .then(() => { return res.status(201).json({ message: `Successfully registered account for ${user.email}`, user }) })
              .catch((error) => { return res.status(400).json({ error, errorMessage: error['errors'][0].message }) })
            })
          .catch((error) => { return res.status(400).json({ error, errorMessage: error['errors'][0].message }) })
    })
      .catch((error) => { return res.status(400).json({ error, errorMessage: 'Encountered unexpected error while registering account' }) })
  } catch (error) {
    return res.status(500).json({ error, errorMessage: 'Encountered unexpected error while registering account' })
  }
})

module.exports = router