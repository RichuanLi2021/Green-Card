const pool = require('../config/database');

const getAntidepressantSafetyData = async () => {
    const [rows, fields] = await pool.query('SELECT * FROM `green_card`.`antidepressant safety concerns`');
    return rows;
  };
  
  const antidepressantSafetyController = {
     getData: async (req,res, next) => {
      const antidepressantSafetyData = await getAntidepressantSafetyData ();
      res.send(antidepressantSafetyData);
     }
  
  };
  
  module.exports = antidepressantSafetyController;