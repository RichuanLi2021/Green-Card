//KEY: APData: AntiPsychoticsData
//     ap: antipsychotics

const pool = require("../config/database");

const getAPData = async () => {
  const [rows, fields] = await pool.query("SELECT * FROM `green_card`.`ANTIPSYCHOTICS GUIDE`");
  return rows;
};

const getData = async (req, res, next) => {
  const apData = await getAPData();
  res.send(apData);
};

const updateData = async (req, res, next) => {
  try {
    const { name, column, value } = req.body;
    await pool.query(
      "UPDATE `green_card`.`ANTIPSYCHOTICS GUIDE` SET " +
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
// contoller here for adding/inserting data
const addData = async (req, res, next) => {
  try {
    const {
      Name,
      Approx_equiv_dose,
      Half_life,
      Frequency,
      Tab_Strength_Form_Supplied,
      NPS,
      PP,
      MDE_ADaugment,
      MDE_w_psychosis,
      Delirium,
      EO_SCZ,
      LO_SCZ,
    } = req.body;

    await pool.query(
      `INSERT INTO \`green_card\`.\`ANTIPSYCHOTICS GUIDE\`
    (
      \`Name\`, \`Approx. equiv. dose\`, \`Half-life\`, \`Frequency\`, 
      \`Tab Strength/Form Supplied\`, \`NPS\`, \`PP\`, 
      \`MDE (ADaugment)\`, \`MDE (w.psychosis)\`, \`Delirium\`, 
      \`EO-SCZ\`, \`LO-SCZ\`
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        Name,
        Approx_equiv_dose,
        Half_life,
        Frequency,
        Tab_Strength_Form_Supplied,
        NPS,
        PP,
        MDE_ADaugment,
        MDE_w_psychosis,
        Delirium,
        EO_SCZ,
        LO_SCZ,
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
    await pool.query(`DELETE FROM \`green_card\`.\`ANTIPSYCHOTICS GUIDE\` WHERE Name = ?`, [Name]);
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
  deleteData,
};

//admin view