const pool = require('../../database');

const getUsers = async () => {
  const [rows, fields] = await pool.query('SELECT * FROM user_model');
  return rows;
};

const authController = {
  getLogin: async (req, res, next) => {
    const users = await getUsers();
    res.send(users);
  }
};

module.exports = authController;
