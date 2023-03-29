//KEY: APData: AntiPsychoticsData
//     ap: antipsychotics 

const pool = require('../config/database');

const getAPData = async () => {
  const [rows, fields] = await pool.query('SELECT * FROM `green_card`.`ANTIPSYCHOTICS GUIDE`');
  return rows;
};

const apController = {
  getData: async (req, res, next) => {
    const apData = await getAPData();
    res.send(apData);
  }
};

module.exports = apController;