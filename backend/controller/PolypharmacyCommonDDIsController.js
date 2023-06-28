const pool = require('../config/database');

const getPolypharmacyCommonData = async () => {
  const [rows, fields] = await pool.query('SELECT * FROM `green_card`.`common ddis with psychotropics`');
  return rows;
};

const PolypharmacyCommonController = {
   getData: async (req,res, next) => {
    const polypharmacyCommonData = await getPolypharmacyCommonData();
    res.send(polypharmacyCommonData );
   }

};

module.exports = PolypharmacyCommonController;
