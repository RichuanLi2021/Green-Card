const pool = require('../config/database');

const getMoodStabilizersControllerData = async () => {
  const [rows, fields] = await pool.query('SELECT * FROM `green_card`.`mood stabilizers guide`');
  return rows;
};

const MoodStabilizersController = {
   getData: async (req,res, next) => {
    const MoodStabilizersControllerData = await getMoodStabilizersControllerData();
    res.send(MoodStabilizersControllerData);
   }

};

module.exports = MoodStabilizersController;
