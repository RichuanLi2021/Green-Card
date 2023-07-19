const pool = require('../config/database');

const getAPData = async () => {
    const [rows, fields] = await pool.query('SELECT * FROM `green_card`.`notable changes in older adults that affect prescribing`');
    return rows;
  };
  
  

const getData = async (req, res, next) => {
  const apData = await getAPData();
  res.send(apData);
}

const updateData = async (req, res, next) => {
  try {
    const { name, column, value } = req.body;
    await pool.query('UPDATE `green_card`.`notable changes in older adults that affect prescribing` SET ' + column + ' = ' + '"' + value + '"' + ' WHERE Description = ' + '"' + name + '"');
    res.send("Updated Successfully!");
  } catch (error) {
    console.log(error);
    next(error);
    throw error;
  }
};


module.exports = { getData, updateData };