const pool = require('../config/database');

const getSafetyData = async () => {
  const [rows, fields] = await pool.query('SELECT * FROM `green_card`.`sedatives/hypnotic safety concerns`');
  return rows;
};

const InsomniaSafetyController = {
   getData: async (req,res, next) => {
    const safetyData = await getSafetyData();
    res.send(safetyData);
   }

};

module.exports = InsomniaSafetyController;
