const express = require('express')
const router = express.Router()
const authController = require ('../controllers/authController')

router.post('/login', authController.userLogin);

router.post('/logout', authController.userLogout);

<<<<<<< Updated upstream
router.post('/register', authController.userRegister);
=======
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
            sameSite: 'Lax',   // Cannot be 'None' when 'secure' is false
            secure: false   //Temporarily bypass security requirement to allow cookie over HTTP
          }
        ).json({ message: 'Successfully logged in', token: token, role: roleTitle, uuid: user.uuid })
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

  const { discipline, firstName, lastName, email, password, title} = req.body
  // Sanitize and Validate

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
            User_Role.create({
              uuid: uuidv4(),
              userID: user.id,
              roleID: 2 // 'user' role
            })
            //Once server rec'd post req a new token will be generated??????//
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
>>>>>>> Stashed changes

router.post('/forgot-password', async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ errorMessage: 'User not found' });
    }

    // Generate a password reset token and set expiry
    const passwordResetToken = crypto.randomBytes(20).toString('hex');
    const passwordResetTokenExpiry = new Date(Date.now() + 3600000); // Token expires in 1 hour

    // Save the token and expiry to the user record
    user.passwordResetToken = passwordResetToken;
    user.passwordResetTokenExpiry = passwordResetTokenExpiry;
    await user.save();

    // Send email with password reset link containing token
    // Example implementation using Nodemailer:
    const resetLink = `http://example.com/reset-password?token=${passwordResetToken}`;
    await sendPasswordResetEmail(email, resetLink);

    return res.status(200).json({ message: 'Password reset email sent' });
  } catch (error) {
    console.error('Error requesting password reset:', error);
    return res.status(500).json({ error, errorMessage: 'Encountered unexpected error while requesting password reset' });
  }
});
module.exports = router