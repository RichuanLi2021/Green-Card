const pool = require("../config/database");

const getMoodStabilizersControllerData = async () => {
  const [rows, fields] = await pool.query("SELECT * FROM `green_card`.`mood stabilizers guide`");
  return rows;
};

const MoodStabilizersController = {
  getData: async (req, res, next) => {
    const MoodStabilizersControllerData = await getMoodStabilizersControllerData();
    res.send(MoodStabilizersControllerData);
  },
};

const updateMoodStabilzerControllerData = async (req, res, next) => {
  try {
    const { name, column, value } = req.body;
    await pool.query(
      "UPDATE `green_card`.`mood stabilizers guide` SET " +
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

module.exports = { MoodStabilizersController, updateMoodStabilzerControllerData };
