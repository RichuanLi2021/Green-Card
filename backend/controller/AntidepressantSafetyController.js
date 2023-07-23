const pool = require('../config/database');

const getAntidepressantSafetyData = async () => {
    const [rows, fields] = await pool.query('SELECT * FROM `green_card`.`antidepressant safety concerns`');
    return rows;
  };
  
  const antidepressantSafetyController = {
     getData: async (req,res, next) => {
      const antidepressantSafetyData = await getAntidepressantSafetyData ();
      res.send(antidepressantSafetyData);
     },

     addData: async (req, res, next) => {
      try {
         const { Description } = req.body;
         await pool.query(
            "INSERT INTO `green_card`.`ANTIDEPRESSANT SAFETY CONCERNS`(`LIST_HEADERS_Id`,`Description`) VALUES (?, ?)",
            ["ANTID_SC", Description]
         );
         res.send("Added Successfully!");
      } catch (error) {
         console.log(error);
         next(error);
         throw error;
      }
     },

     deleteData:  async (req, res, next) => {
      try {
         const { Description } = req.params;
         await pool.query(`DELETE FROM \`green_card\`.\`ANTIDEPRESSANT SAFETY CONCERNS\` WHERE Description = ?`, [
            Description,
         ]);
         res.send("Deleted Successfully!");
      } catch (error) {
         console.log(error);
         next(error);
         throw error;
      }
     }
  };
  
  
  module.exports = antidepressantSafetyController;