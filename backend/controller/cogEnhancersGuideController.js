//KEY: CogEData: Cognitive enhancers data
//     cogEController: Cognitive enhancers controller

const pool = require('../config/database');

const getCogEData = async () => {
  const [rows, fields] = await pool.query('SELECT * FROM `green_card`.`COGNITIVE ENHANCERS GUIDE`');
  return rows;
};

const cogEController = {
  getData: async (req, res, next) => {
    const cognitiveEnhancersData = await getAPData();
    res.send(cognitiveEnhancersData);
  }
};

module.exports = cogEController;