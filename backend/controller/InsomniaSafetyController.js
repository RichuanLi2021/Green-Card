const pool = require('../config/database');

const getAPData = async () => {
  const [rows, fields] = await pool.query('SELECT * FROM `green_card`.`sedatives/hypnotic safety concerns`');
  return rows;
};
const getData = async (req, res, next) => {
  const apData = await getAPData();
  res.send(apData);
}



const updateData = async (req, res, next) => {
  try {
    const { name, column, value } = req.body;
    await pool.query('UPDATE `green_card`.`sedatives/hypnotic safety concerns` SET ' + column + ' = ' + '"' + value + '"' + ' WHERE Description = ' + '"' + name + '"');
    res.send("Updated Successfully!");
  } catch (error) {
    console.log(error);
    next(error);
    throw error;
  }
}

const drugData = async (req, res, next) => {
  const { concern} = req.body;
  try {
      await pool.query('INSERT INTO `green_card`.`sedatives/hypnotic safety concerns` (`Description`) VALUES (?)',
          [concern]);
      res.send('Drug was submitted successfully');
  } catch (err) {
      next(err);
      throw err;
  }
};

const drugDelete = async (req, res, next) => {
  const  Description  = req.params.Description;
  try {
      await pool.query('DELETE FROM `green_card`.`sedatives/hypnotic safety concerns` WHERE Description = ? ',
          Description);
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
