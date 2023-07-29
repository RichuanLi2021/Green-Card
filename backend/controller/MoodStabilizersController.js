const pool = require("../config/database");

const getAPData = async () => {
  const [rows, fields] = await pool.query("SELECT * FROM `green_card`.`MOOD STABILIZERS GUIDE`");
  return rows;
};

const getData = async (req, res, next) => {
  const apData = await getAPData();
  res.send(apData);
}


const updateData = async (req, res, next) => {
  try {
    const { name, column, value } = req.body;
    await pool.query(
      "UPDATE `green_card`.`MOOD STABILIZERS GUIDE` SET " +
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

const drugData = async (req, res, next) => {
  const {
    drugName, halfLife, doseInitial, frequency, mgFormSupplied , monitoringLevel 
  } = req.body;
  
  try {
    await pool.query(
      "INSERT INTO `green_card`.`MOOD STABILIZERS GUIDE` (`Name`, `Half-life`, `Dose (mg/day) Initial | Maint. | Max.`, `Frequency`, `mg/Form Supplied`, `Monitoring Level`) VALUES (?, ?, ?, ?, ?, ?)",
      [
        drugName, halfLife, doseInitial, frequency, mgFormSupplied , monitoringLevel 
      ]
    );
    
    res.send('Drug was submitted successfully');
  } catch (err) {
    next(err);
    throw err;
  }
};

const drugDelete = async (req, res, next) => {
  const  Name  = req.params.Name;
  try {
      await pool.query('DELETE FROM `green_card`.`MOOD STABILIZERS GUIDE` WHERE `Name` = ? ',
          Name);
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

