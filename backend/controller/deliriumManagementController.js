const pool = require("../config/database");

const getDeliriumManagementControllerData = async () => {
  const [rows, fields] = await pool.query("SELECT * FROM `green_card`.`ANTICHOLINERGIC ACTIVITY`");
  return rows;
};

const deliriumManagementController = {
  getData: async (req, res, next) => {
    const deliriumManagementData = await getDeliriumManagementControllerData();
    res.send(deliriumManagementData);
  },
};

module.exports = deliriumManagementController;
