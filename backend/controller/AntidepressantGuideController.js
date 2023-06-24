const pool = require('../config/database');

const getAntidepressantGuideData = async () => {
  const [rows, fields] = await pool.query('SELECT * FROM `green_card`.`ANTIDEPRESSANTS GUIDE`');
  return rows;
};

const antidepressantGuideController = {
   getData: async (req,res, next) => {
    const antidepressantGuideData = await getAntidepressantGuideData ();
    res.send(antidepressantGuideData);
   }

};

module.exports = antidepressantGuideController;
