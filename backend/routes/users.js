const express = require('express');
const router = express.Router();
const { User } = require('../models');
const { validateUserToken, validateAdminToken } = require('../middleware/validateToken');
const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcrypt");
const sequelize = require('sequelize');

// Get All (Admin Only)
router.get('/', async (req, res) => {
  try {
    const users = await User.findAll();
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ error, errorMessage: 'Encountered unexpected error' });
  }
});

// Get One (User and Admin)
router.get('/:id', validateUserToken, async (req, res) => {
  try {
    const user = await User.findOne({
      where: { uuid: req.params.id }
    });
    if (!user) {
      return res.status(400).json({ errorMessage: 'Encountered error while trying to find account' });
    }
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ error, errorMessage: 'Encountered unexpected error' });
  }
});

// Create One (Admin Only)
router.post('/', validateUserToken, async (req, res) => {
  const { discipline, firstName, lastName, email, password, title } = req.body;
  // Sanitize and validate

  try {
    bcrypt.hash(password, 12).then((hash) => {
      User.create({
        uuid: uuidv4(),
        discipline: discipline,
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: hash,
        title: title
      })
        .then((user) => {
          res.status(201).json({ message: 'Successfully created account', user });
        })
        .catch((error) => { res.status(400).json({ error, errorMessage: error.message }) });
    });
  } catch (error) {
    return res.status(500).json({ error, errorMessage: 'Encountered unexpected error' });
  }
});

// Update One (Admin Only)
router.put('/:id', validateUserToken, async (req, res) => {
  const { discipline, email, password, title } = req.body;
  // Sanitize and validate

  try {
    const hash = password ? await bcrypt.hash(password, 12) : undefined;
    const updatedData = {
      discipline: discipline,
      email: email,
      title: title
    };
    if (hash) {
      updatedData.password = hash;
    }
    const result = await User.update(updatedData, {
      where: { uuid: req.params.id }
    });
    if (result[0] !== 1) {
      return res.status(400).json({ errorMessage: 'Encountered error while updating account' });
    }
    return res.status(200).json({ message: 'Successfully updated account' });
  } catch (error) {
    return res.status(500).json({ error, errorMessage: 'Encountered unexpected error' });
  }
});

// Delete One (Admin)
router.delete('/admin/:id', validateUserToken, async (req, res) => {
  try {
    const result = await User.destroy({
      where: { uuid: req.params.id }
    });
    if (result !== 1) {
      return res.status(400).json({ errorMessage: 'Encountered error while trying to disable account' });
    }
    return res.status(200).json({ message: 'Successfully disabled account' });
  } catch (error) {
    return res.status(500).json({ error, errorMessage: 'Encountered unexpected error' });
  }
});

// Get user disciplines with user count
router.get('/disciplinesWithUserCount', async (req, res) => {
  try {
    const disciplinesWithUserCount = await User.findAll({
      attributes: [
        'discipline',
        [sequelize.fn('COUNT', sequelize.col('discipline')), 'userCount']
      ],
      group: ['discipline']
    });

    res.status(200).json(disciplinesWithUserCount);
  } catch (error) {
    console.error("Error fetching disciplines with user count:", error);
    res.status(500).json({ error: "Internal Server Error", details: error });
  }
});

// Delete One (User)
router.delete('/user/:id', validateUserToken, async (req, res) => {
  if (req.user.uuid !== req.params.id) {
    return res.status(403).json({ error: 'User is not authorized to delete this account' });
  }
  try {
    const result = await User.destroy({ where: { uuid: req.params.id } });
    if (result !== 1) return res.status(400).json({ errorMessage: 'Encountered error while trying to disable account' });
    return res.status(200).json({ message: 'Successfully disabled account' });
  } catch (error) {
    return res.status(500).json({ error, errorMessage: 'Encountered unexpected error' });
  }
});

module.exports = router;