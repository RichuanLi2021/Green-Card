const pool = require('../config/database');

const getClinicalData = async () => {
  const [rows, fields] = await pool.query('SELECT * FROM `green_card`.`sedatives/hypnotics clinical guide`');
  return rows;
};

const InsomniaClinicalController = {
  getData: async (req, res, next) => {
    const clinicalData = await getClinicalData();
    res.send(clinicalData);
  }

};

module.exports = InsomniaClinicalController;
// non admin
// create it for the admin so it can update the statements