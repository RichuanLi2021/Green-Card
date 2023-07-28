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
const updatePsychotropicMonitoringSectionData = async (req, res, next) => {
  try {
    const { name, column, value } = req.body;
    await pool.query(
      "UPDATE `green_card`.`Psychotropic Monitoring` SET " +
        column +
        " = " +
        '"' +
        value +
        '"' +
        " WHERE name = " +
        '"' +
        name +
        '"'
    );
    res.send("Updated Successfully!");
  } catch (error) {
    console.log(error);
    next(error);
    throw error;
  }
};

const drugDelete = async (req, res, next) => {
  const  Name  = req.params.Name;
  try {
      await pool.query('DELETE FROM `green_card`.`Psychotropic Monitoring` WHERE Name = ? ',
          Name);
      res.send('Drug was deleted successfully');
  } catch (err) {
      next(err);
      throw err;
  }
};


module.exports = { PsychotropicMonitoringSectionController, updatePsychotropicMonitoringSectionData,drugDelete};
