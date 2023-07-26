const pool = require('../config/database');


const getAPData = async () => {
  const [rows, fields] = await pool.query('SELECT * FROM `green_card`.`COGNITIVE ENHANCERS GUIDE`');
  return rows;
};

const getData = async (req, res, next) => {
  const apData = await getAPData();
  res.send(apData);
}


const updateData = async (req, res, next) => {
  try {
    const { name, column, value } = req.body;
    await pool.query('UPDATE `green_card`.`COGNITIVE ENHANCERS GUIDE` SET ' + column + ' = ' + '"' + value + '"' + ' WHERE name = ' + '"' + name + '"');
    res.send("Updated Successfully!");
  } catch (error) {
    console.log(error);
    next(error);
    throw error;
  }
}

const drugData = async (req, res, next) => {
  const {
    drugName, action, halfLife, dose, frequency, mgFormsupplied, withFood, mci, mildModeAlz, severeAlz, mixed, vascular, lbd, ftd, pd, dsd
  } = req.body;
  
  try {
    await pool.query(
      `INSERT INTO \`green_card\`.\`COGNITIVE ENHANCERS GUIDE\` 
      (\`Name\`, \`Action\`, \`Half-life\`, \`Dose (initial/monthly increment/maint)\`, \`Frequency\`, 
      \`mg/form supplied\`, \`With food??n??\`, \`MCI\`, \`Mild-mod Alz\`, \`Severe Alz\`, 
      \`Mixed (Alz+vas)\`, \`Vascular\`, \`LBD\`, \`FTD\`, \`PD\`, \`DSD\`) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        drugName, action, halfLife, dose, frequency, mgFormsupplied, withFood, mci, mildModeAlz, severeAlz, mixed, vascular, lbd, ftd, pd, dsd
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
      await pool.query('DELETE FROM `green_card`.`COGNITIVE ENHANCERS GUIDE` WHERE `Name` = ? ',
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



