const pool = require('../config/database');
const bcrypt = require('bcrypt');

const saltRounds = 10; 

const hashPassword = async (password) => {
  try {
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
  } catch (error) {
    throw error;
  }
};

const getUsers = async () => {
  const [rows, fields] = await pool.query('SELECT * FROM user_model');
  return rows;
};

const addUser = async (username, password) => {
  try {
    const hashedPassword = await hashPassword(password);
    const sql = 'INSERT INTO user_model (username, password) VALUES (?, ?)';
    const [result] = await pool.query(sql, [username, hashedPassword]);
    return result.insertId;
  } catch (error) {
    throw error;
  }
};






const loginUser = async (username, password) => {
  
  const [users] = await pool.query('SELECT * FROM user_model WHERE username = ?', [username]);

  console.log(`Users found for username ${username}:`, users);

  if (users.length === 0) {
      return null;
  }

  const user = users[0];
  
  //const isMatch = await bcrypt.compare(password, user.password);
  const isMatch = (password === user.password);

  console.log(`Password match for username ${username}:`, isMatch);

  if (!isMatch) {
      return null;
  }

  return user;
};







const authController = {
  getLogin: async (req, res, next) => {
    const users = await getUsers();
    res.send(users);
  },

  postRegister: async (req, res, next) => {
    const { username, password } = req.body;
    try {
      const userId = await addUser(username, password);
      res.send(`User registered with ID: ${userId}`);
    } catch (error) {
      res.status(500).send('Error registering user.');
    }
  },

  postLogin: async (req, res, next) => {
    const { username, password } = req.body;

    try {
      const user = await loginUser(username, password);

      if (user) {
        res.send({ success: true, message: 'Login Success', userId: user.id });
      } else {
        res.status(401).send({ success: false, message: 'Incorrect Username or Password' });
      }
    } catch (error) {
      res.status(500).send({ success: false, message: 'Server Error' });
    }
  },

};





module.exports = authController;