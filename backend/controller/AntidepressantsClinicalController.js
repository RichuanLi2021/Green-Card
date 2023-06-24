const pool = require('../config/database');

const getAntidepressantsClinicalData = async () => {
    const [rows, fields] = await pool.query('SELECT * FROM `green_card`.`antidepressant clinical guide`');
    return rows;
  };
  
  const antidepressantsClinicalController = {
     getData: async (req,res, next) => {
      const antidepressantsClinicalData = await getAntidepressantsClinicalData ();
      res.send(antidepressantsClinicalData);
     }
  
  };
  
  module.exports = antidepressantsClinicalController;
 