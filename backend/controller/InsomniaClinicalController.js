const pool = require("../config/database");

const getAPData = async () => {
  const [rows, fields] = await pool.query("SELECT * FROM `green_card`.`sedatives/hypnotics clinical guide`");
  return rows;
};

const getData = async (req, res, next) => {
  const apData = await getAPData();
  res.send(apData);
};

const updateData = async (req, res, next) => {
  try {
    const { name, column, value } = req.body;
    await pool.query('UPDATE `green_card`.`sedatives/hypnotics clinical guide` SET ' + column + ' = ' + '"' + value + '"' + ' WHERE `Id` = ' + '"' + name + '"'
    );
    res.send("Updated Successfully!");
  } catch (error) {
    console.log(error);
    next(error);
    throw error;
  }
};


const drugData = async (req, res, next) => {
  const { when, what} = req.body;
  try {
      await pool.query('INSERT INTO `green_card`.`sedatives/hypnotics clinical guide` (`LIST_HEADERS_Id`,`Description`) VALUES (?, ?)',
          [when, what]);
      res.send('Drug was submitted successfully');
  } catch (err) {
      next(err);
      throw err;
  }
};


const drugDelete = async (req, res, next) => {
  const  Description  = req.params.Description;
  try {
      await pool.query('DELETE FROM `green_card`.`SEDATIVES/HYPNOTICS CLINICAL GUIDE` WHERE `Description` = ? ',
          Description);
      res.send('Deleted successfully !')
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
