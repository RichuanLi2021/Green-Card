const pool = require("../config/database");

const getAPData = async () => {
  const [rows, fields] = await pool.query("SELECT * FROM `green_card`.`ANTIDEPRESSANT SAFETY CONCERNS`");
  return rows;
};

const getData = async (req, res, next) => {
  const apData = await getAPData();
  res.send(apData);
};

const updateData = async (req, res, next) => {
  try {
    const { name, column, value } = req.body;
    await pool.query( 'UPDATE `green_card`.`ANTIDEPRESSANT SAFETY CONCERNS` SET ' + column + ' = ' + '"' + value + '"' + ' WHERE Description = ' + '"' + name + '"'
    );
    res.send("Updated Successfully!");
  } catch (error) {
    console.log(error);
    next(error);
    throw error;
  }
};

const addData = async (req, res, next) => {
  try {
    const { Description } = req.body;
    await pool.query(
      "INSERT INTO `green_card`.`ANTIDEPRESSANT SAFETY CONCERNS`(`Description`) VALUES (?)",
      [Description]
    );
    res.send("Added Successfully!");
  } catch (error) {
    console.log(error);
    next(error);
    throw error;
  }
};

const deleteData = async (req, res, next) => {
  try {
    const { Description } = req.params;
    await pool.query(`DELETE FROM \`green_card\`.\`ANTIDEPRESSANT SAFETY CONCERNS\` WHERE Description = ?`, [
      Description,
    ]);
    res.send("Deleted Successfully!");
  } catch (error) {
    console.log(error);
    next(error);
    throw error;
  }
};

module.exports = {
  getData,
  updateData,
  addData,
  deleteData
};