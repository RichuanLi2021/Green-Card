const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const env = require('../config/env')
const { createToken } = require('../utils/token')
const { User, User_Role, Role } = require('../models')

router.post('/login', async (req, res) => {
  const { email, password } = req.body

  try {
    const user = await User.findOne({ where: { email: email } })
    if (!user) res.status(400).json({ error: 'Incorrect email or password, or the account does not exist' })

    const hashedPass = user.password
    bcrypt.compare(password, hashedPass).then((match) => {
      if (!match) {
        res.status(400).json({ error: 'Incorrect email or password, or the account does not exist' })
      }
      else {
        User.update(
          { lastLogin: new Date() },
          { where: { id: user.id } }
        ).then(async () => {

          const role = await Role.findOne({
            include: {
              model: User_Role,
              include: {
                model: User,
                where: { uuid: user.uuid }
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
            ).json({message: 'Successfully logged in'})
        }).catch((err) => {
          return res.status(400).json({ error: err })
        })
      }
    })

  } catch (error) {
    return res.status(500).json(error)
  }
})

router.post('/logout', async (req, res) => {
  try {
    if (!req.cookies['access-token']) {
      return res
        .status(400)
        .json({ error: "Not logged in" })
    }

    return res
      .clearCookie('access-token')
      .status(200)
      .json({ message: "Successfully logged out" })
  } catch (error) {
    return res.status(500).json(error)
  }

})

router.post('/register', async (req, res) => {
  const { fName, lName, email, password } = req.body
  // Sanitize and Validate

  try {
    bcrypt.hash(password, 12).then((hash) => {
        User.create({
          fName: fName,
          lName: lName,
          email: email,
          password: hash
        })
          .then((user) => {
            User_Role.create({
              userID: user.id,
              roleID: 2 // 'User' role
            })
              .then(() => {
                res.status(201).json({ message: `Successfully registered account for ${user.email}`, user })
              })
              .catch((error) => {
                res.status(400).json(error)
              })
          })
          .catch((error) => {
            res.status(400).json(error)
          })
    })
  } catch (error) {
    return res.status(500).json(error)
  }
})

module.exports = router