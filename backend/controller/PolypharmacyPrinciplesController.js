const pool = require('../config/database');

const getPolypharmacyPrinciplesData = async () => {
  const [rows, fields] = await pool.query('SELECT * FROM `green_card`.`prescribing and deprescribing principles`');
  return rows;
};

const PolypharmacyPrinciplesController = {
   getData: async (req,res, next) => {
    const polypharmacyPrinciplesData = await getPolypharmacyPrinciplesData();
    res.send(polypharmacyPrinciplesData );
   }

};

module.exports = PolypharmacyPrinciplesController;