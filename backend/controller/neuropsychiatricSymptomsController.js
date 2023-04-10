//KEY: CogEData: Cognitive enhancers data
//     cogEController: Cognitive enhancers controller

const pool = require('../config/database');

const getNeuropsychiatricSymptomsData = async () => {
  const [rows, fields] = await pool.query('SELECT * FROM `green_card`.`ECT & PSYCHOACTIVE MEDICATIONS`');
  return rows;
};



const neuropsychiatricSymptomsController = {
  getData: async (req, res, next) => {
    const neuropsychiatricSymptomsData = await getNeuropsychiatricSymptomsData();
    res.send(neuropsychiatricSymptomsData);
  }
};



module.exports = neuropsychiatricSymptomsController;
