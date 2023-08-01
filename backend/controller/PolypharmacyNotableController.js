const pool = require('../config/database');

const getPolypharmacyNotableData = async () => {
  const [rows, fields] = await pool.query('SELECT * FROM `green_card`.`NOTABLE CHANGES IN OLDER ADULTS THAT AFFECT PRESCRIBING`');
  return rows;
};

const PolypharmacyNotableController = {
   getData: async (req,res, next) => {
    const polypharmacyNotableData = await getPolypharmacyNotableData();
    res.send(polypharmacyNotableData );
   }

};

module.exports = PolypharmacyNotableController;