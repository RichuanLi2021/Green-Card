const pool = require('../config/database');


const getAPData = async () => {
  const [rows, fields] = await pool.query('SELECT * FROM `green_card`.`SEDATIVES/HYPNOTICS GUIDE`');
  return rows;
};

const getData = async (req, res, next) => {
  const apData = await getAPData();
  res.send(apData);
}


const updateData = async (req, res, next) => {
  try {
    const { name, column, value } = req.body;
    await pool.query('UPDATE `green_card`.`SEDATIVES/HYPNOTICS GUIDE` SET ' + column + ' = ' + '"' + value + '"' + ' WHERE name = ' + '"' + name + '"');
    res.send("Updated Successfully!");
  } catch (error) {
    console.log(error);
    next(error);
    throw error;
  }
}


const drugData = async (req, res, next) => {
  const { drugName, doseEquiv, timeToPeakInPlasma, halfLife, avgDoseRange,mgFormsupplied } = req.body;
  try {
      await pool.query('INSERT INTO `green_card`.`SEDATIVES/HYPNOTICS GUIDE` (`Name`,`Dose equiv.`,`Time to peak in plasma`,`Half-life`,`Avg dose range (mg/day)`,`mg/Form supplied`) VALUES (?, ?, ?, ?, ?,?)',
          [drugName, doseEquiv, timeToPeakInPlasma, halfLife, avgDoseRange,mgFormsupplied]);
      res.send('Drug was submitted successfully');
  } catch (err) {
      next(err);
      throw err;
  }
};

// const drugDelete = async (req, res, next) => {
//   const  Name  = req.params.Name;
//   try {
//       await pool.query('DELETE FROM `green_card`.`SEDATIVES/HYPNOTICS GUIDE` WHERE Name = ? ',
//           Name);
//       res.send('Drug was deleted successfully');
//   } catch (err) {
//       next(err);
//       throw err;
//   }
// };




module.exports = {
  getData,
  updateData,
  drugData,
  drugDelete
};



