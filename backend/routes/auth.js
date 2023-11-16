const express = require('express')
const router = express.Router()
const { User, User_Role, Role } = require('../models')
const { createToken } = require('../utils/token')
const { v4: uuidv4 } = require("uuid")
const bcrypt = require('bcrypt')
const env = require('../config/env')

router.post('/login', async (req, res) => {
  const { email, password } = req.body

  try {
    const user = await User.findOne({
      where: { email: email }
    })
    if (!user) res.status(400).json({ errorMessage: 'Incorrect email or password, or the account does not exist' })

    const hashedPass = user.password
    bcrypt.compare(password, hashedPass).then(async (match) => {
      if (!match) {
        res.status(400).json({ errorMessage: 'Incorrect email or password, or the account does not exist' })
      } else {
        await User.update(
          {
            lastLogin: new Date()
          }, {
            where: {id: user.id}
          })

        const role = await Role.findOne({
          include: {
            model: User_Role,
            include: {
              model: User,
              where: {uuid: user.uuid}
            }
          }
        })
        const roleUUID = role.dataValues.uuid

        return res
          .status(200)
          .cookie(
            'access-token',
            createToken(user, roleUUID),
            {
              httpOnly: true,
              maxAge: env.JWT_LENGTH_MS
            }
          ).json({ message: 'Successfully logged in' })
      }
    })
  } catch (error) {
    return res.status(500).json({ error, errorMessage: 'Encountered unexpected error while logging in' })
  }
})

router.post('/logout', async (req, res) => {
  try {
    if (!req.cookies['access-token']) {
      return res
        .status(400)
        .json({ errorMessage: 'Not logged in' })
    }

    return res
      .clearCookie('access-token')
      .status(200)
      .json({ message: 'Successfully logged out' })
  } catch (error) {
    return res.status(500).json({ error, errorMessage: 'Encountered unexpected error while logging out' })
  }

})

router.post('/register', async (req, res) => {
  const { discipline, email, password } = req.body
  // Sanitize and Validate

  try {
    if (req.cookies['access-token']) return res.status(400).json({ errorMessage: 'Cannot register a new account while logged in' })

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
              .then(() => { res.status(201).json({ message: `Successfully registered account for ${user.email}`, user }) })
              .catch((error) => { res.status(400).json({ error, errorMessage: error['errors'][0].message }) })
            })
          .catch((error) => { res.status(400).json({ error, errorMessage: error['errors'][0].message }) })
    })
      .catch((error) => { res.status(400).json({ error, errorMessage: 'Encountered unexpected error while registering account' }) })
  } catch (error) {
    return res.status(500).json({ error, errorMessage: 'Encountered unexpected error while registering account' })
  }
})

module.exports = router