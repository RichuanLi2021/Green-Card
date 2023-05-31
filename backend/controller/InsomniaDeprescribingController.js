const pool = require('../config/database');

const getDeprescribingData = async () => {
  const [rows, fields] = await pool.query('SELECT * FROM `green_card`.`DEPRESCRIBING BENZODIAZEPINE-LIKE SEDATIVES`');
  return rows;
};

const InsomniaDeprescribingController = {
   getData: async (req,res, next) => {
    const deprescribingData = await getDeprescribingData();
    res.send(deprescribingData);
   }

};

module.exports = InsomniaDeprescribingController;
