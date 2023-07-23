const pool = require('../config/database');

const getAPData = async () => {
  const [rows, fields] = await pool.query('SELECT * FROM `green_card`.`ANTIDEPRESSANTS GUIDE`');
  return rows;
};

const getData = async (req, res, next) => {
  const apData = await getAPData();
  res.send(apData);
}

const updateData = async (req, res, next) => {
  try {
    const { name, column, value } = req.body;
    await pool.query('UPDATE `green_card`.`ANTIDEPRESSANTS GUIDE` SET ' + column + ' = ' + '"' + value + '"' + ' WHERE name = ' + '"' + name + '"');
    res.send("Updated Successfully!");
  } catch (error) {
    console.log(error);
    next(error);
    throw error;
  }
}

const addData = async (req, res, next) => {
  try {
    const {
      Name,
      Half_life,
      Primary_NT,
      Dose,
      Frequency,
      supplied,
    } = req.body;
    await pool.query(
      `INSERT INTO \`green_card\`.\`ANTIDEPRESSANTS GUIDE\`
    (
      \`Name\`, \`Half-life\`, \`Primary NT\`, \`Dose (mg/day) Initial | Maint. | Max.\`, 
      \`Frequency\`, \`mg/Form Supplied\`
    ) VALUES (?, ?, ?, ?, ?, ?)`,
      [
        Name,
        Half_life,
        Primary_NT,
        Dose,
        Frequency,
        supplied,
      ]
    );
    res.send("Inserted Successfully!");
  } catch (error) {
    console.log(error);
    next(error);
    throw error;
  }
};

const deleteData = async (req, res, next) => {
  try {
    const { Name } = req.params; // Assuming you'll pass the drug name as a route parameter
    await pool.query(`DELETE FROM \`green_card\`.\`ANTIDEPRESSANTS GUIDE\` WHERE Name = ?`, [Name]);
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
