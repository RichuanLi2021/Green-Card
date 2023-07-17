
const pool = require('../config/database');

const getAPData = async () => {
  const [rows, fields] = await pool.query('SELECT * FROM `green_card`.`DEPRESCRIBING BENZODIAZEPINE-LIKE SEDATIVES`');
  return rows;
};
const getData = async (req, res, next) => {
  const apData = await getAPData();
  res.send(apData);
}


const updateData = async (req, res, next) => {
  try {
    const { duration, column, value } = req.body;
    await pool.query('UPDATE `green_card`.`DEPRESCRIBING BENZODIAZEPINE-LIKE SEDATIVES` SET ' + column + ' = ' + '"' + value + '"' + ' WHERE Duration = ' + '"' + duration + '"');
    res.send("Updated Successfully!");
  } catch (error) {
    console.log(error);
    next(error);
    throw error;
  }
}


const drugData = async (req, res, next) => {
  const { duration, doseReduction, interval} = req.body;
  try {
      await pool.query('INSERT INTO `green_card`.`DEPRESCRIBING BENZODIAZEPINE-LIKE SEDATIVES` (`Duration of BZRA use (months)`,`Dose Reduction Schedule Duration (weeks)`,`Interval Between Dose Reductions (weeks)`) VALUES (?, ?, ?)',
          [duration, doseReduction, interval]);
      res.send('Drug was submitted successfully');
  } catch (err) {
      next(err);
      throw err;
  }
};

const drugDelete = async (req, res, next) => {
  const  Duration  = req.params.Duration;
  try {
      await pool.query('DELETE FROM `green_card`.`DEPRESCRIBING BENZODIAZEPINE-LIKE SEDATIVES` WHERE Duration = ? ',
          Duration);
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



