//KEY: APData: AntiPsychoticsData
//     ap: antipsychotics 

const pool = require('../config/database');

const getAPData = async () => {
  const [rows, fields] = await pool.query('SELECT * FROM `green_card`.`ANTIPSYCHOTICS GUIDE`');
  return rows;
};

const apController = {
  getData: async (req, res, next) => {
    const apData = await getAPData();
    res.send(apData);
  }
};


// const submitChange = {
//     submitChange: async (req, res, next) => {
//         const { name, value } = req.body;
//         // const updateColumn = //identify the value id to determine the column below
//         try {
//             await pool.query('INSERT INTO `green_card`.`ANTIPSYCHOTICS GUIDE` (name, updateColumn) VALUES (?, ?)',
//                 [name, value]);
//             res.send(name + "updated successfully");
//         } catch (err) {
//             next(err);
//             throw err;
//         }
//     }
// };



module.exports = apController;