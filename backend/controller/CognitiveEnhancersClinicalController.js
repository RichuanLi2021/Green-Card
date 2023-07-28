const pool = require("../config/database");

const getAPData = async () => {
  const [rows, fields] = await pool.query(
    "SELECT * FROM `green_card`.`COGNITIVE ENHANCERS CLINICAL GUIDE` ORDER BY `LIST_HEADERS_Id`"
  );
  return rows;
};

const getData = async (req, res, next) => {
  const apData = await getAPData();

  const groupedData = apData.reduce((accumulator, currentValue) => {
    let headerKey = currentValue.LIST_HEADERS_Id;

    if (!accumulator[headerKey]) {
      accumulator[headerKey] = [];
    }
    accumulator[headerKey].push(currentValue.Description);
    return accumulator;
  }, {});

  res.send(groupedData);
};

const updateData = async (req, res) => {
  try {
    // Extract data from the request
    const column = req.body.column; // The column identifier (e.g., COG_ACHEI_ME)
    const oldValue = req.body.oldValue; // The current description (e.g., "Hallucinations")
    const newValue = req.body.newValue; // The new description (e.g., "Visual Hallucinations")

    // Construct the SQL query
    const sql = `UPDATE \`green_card\`.\`COGNITIVE ENHANCERS CLINICAL GUIDE\` 
                     SET Description = ? 
                     WHERE LIST_HEADERS_Id = ? AND Description = ?`;

    // Execute the query
    const result = await pool.query(sql, [newValue, column, oldValue]);

    // Return the result or some form of success message
    res.status(200).json({ message: "Data successfully updated" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const drugData = async (req, res, next) => {
  const { listHeader, description } = req.body;

  try {
    await pool.query(
      "INSERT INTO `green_card`.`COGNITIVE ENHANCERS CLINICAL GUIDE` (`LIST_HEADERS_Id`,`Description`) VALUES (?, ?)",
      [listHeader, description]
    );

    res.send("Drug was submitted successfully");
  } catch (err) {
    next(err);
    throw err;
  }
};

const drugDelete = async (req, res, next) => {
  const Description = req.params.Description;
  try {
    await pool.query("DELETE FROM `green_card`.`COGNITIVE ENHANCERS CLINICAL GUIDE` WHERE `Description` = ?", [
      Description,
    ]);
    res.send("Drug was deleted successfully");
  } catch (err) {
    next(err);
    throw err;
  }
};

module.exports = {
  getData,
  updateData,
  drugData,
  drugDelete,
};
