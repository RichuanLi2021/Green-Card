const pool = require('../config/database');

const getPsychotropicMonitoringSectionData = async () => {
  const [rows, fields] = await pool.query('SELECT * FROM `green_card`.`PSYCHOTROPIC MONITORING`');
  return rows;
};

const PsychotropicMonitoringSectionController = {
   getData: async (req,res, next) => {
    const PsychotropicMonitoringSectionControllerData = await getPsychotropicMonitoringSectionData();
    res.send(PsychotropicMonitoringSectionControllerData);
   }

};

module.exports = PsychotropicMonitoringSectionController;
