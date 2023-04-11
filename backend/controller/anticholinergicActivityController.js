//KEY: APData: AntiPsychoticsData
//     ap: antipsychotics 

const pool = require('../config/database');

const getAnticholinergicListData = async () => {
  const [rows, fields] = await pool.query('SELECT * FROM `green_card`.`ANTICHOLINERGIC ACTIVITY`');
  return rows;
};

const getListHeaders = async () => {
    const [rows, fields] = await pool.query('SELECT * FROM `LIST HEADERS` WHERE ID = "ANTI_HIGH" OR ID= "ANTI_MED" OR ID= "ANTI_LOW"')
}

const anticholinergicListController = {
  getData: async (req, res, next) => {
    const listData = await getAnticholinergicListData();
    const headerData = await getListHeaders();
    res.send(listData, headerData);
  }
};

module.exports = anticholinergicListController;