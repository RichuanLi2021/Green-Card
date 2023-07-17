const pool = require('../config/database');


const getAPData = async () => {
  const [rows, fields] = await pool.query('SELECT * FROM `green_card`.`ect & psychoactive medications`');
  return rows;
};

const getData = async (req, res, next) => {
  const apData = await getAPData();
  res.send(apData);
}


const updateData = async (req, res, next) => {
  try {
    const { name, column, value } = req.body;
    await pool.query("UPDATE `green_card`.`ect & psychoactive medications` SET " +
    column +
    " = " +
    '"' +
    value +
    '"' +
    " WHERE Medication = " +
    '"' +
    name +
    '"');
    res.send("Updated Successfully!");
  } catch (error) {
    console.log(error);
    next(error);
    throw error;
  }
}

const drugData = async (req, res, next) => {
  const {
    medication, recommendedAction
  } = req.body;
  
  try {
    await pool.query(
      "INSERT INTO `green_card`.`ect & psychoactive medications` (`Medication`, `Recommended Action`) VALUES (?, ?)",
      [
        medication, recommendedAction
      ]
    );
    
    res.send('Drug was submitted successfully');
  } catch (err) {
    next(err);
    throw err;
  }
};

const drugDelete = async (req, res, next) => {
  const  Medication = req.params.Medication;
  try {
      await pool.query('DELETE FROM `green_card`.`ect & psychoactive medications` WHERE `Medication` = ? ',
      Medication);
      res.send('Drug was deleted successfully');
  } catch (err) {
      next(err);
      throw err;
  }
};

module.exports = {
  getData,
  updateData,
  drugData,
  drugDelete
};
