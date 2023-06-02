const pool = require('../config/database');

const getSedativesGuideData = async () => {
  const [rows, fields] = await pool.query('SELECT * FROM `green_card`.`SEDATIVES/HYPNOTICS GUIDE`');
  return rows;
};

const InsomniaSedativesGuideController = {
   getData: async (req,res, next) => {
    const sedativesData = await getSedativesGuideData();
    res.send(sedativesData);
   }

};

module.exports = InsomniaSedativesGuideController;

