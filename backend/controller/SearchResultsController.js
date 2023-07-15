const pool = require('../config/database');

const getallData = async () => {
  const [rows, fields] = await pool.query(
    // 'SELECT NAME, `Action`, `Half-life`, `Dose (initial/monthly increment/maint)`, `Frequency`, `mg/form supplied`, `With food?`, `MCI`, `Mild-mod Alz`, `Severe Alz`, `Mixed (Alz+vas)`, `Vascular`, `LBD`, `FTD`, `PD`, `DSD` FROM `green_card`.`COGNITIVE ENHANCERS GUIDE` UNION SELECT NAME,`Half-life`,`Dose (mg/day) Initial | Maint. | Max.`,`Frequency`,`mg/Form Supplied`,`Monitoring Level`,null,null,null,null,null,null,null,null,null,null FROM  `green_card`.`MOOD STABILIZERS GUIDE` UNION SELECT  NAME,`Half-life`,`Dose equiv.`,`Time to peak in plasma`,`Avg dose range (mg/day)`,`mg/Form supplied`,null,null,null,null,null,null,null,null,null,null FROM  `green_card`.`SEDATIVES/HYPNOTICS GUIDE` UNION SELECT NAME,`Half-life`, `Approx. equiv. dose`,`Frequency`, `Tab Strength/Form Supplied`,`NPS`, `PP`, `MDE (ADaugment)`, `MDE (w.psychosis)`, `Delirium`, `EO-SCZ`, `LO-SCZ`,null,null,null,null FROM  `green_card`.`ANTIPSYCHOTICS GUIDE` UNION SELECT NAME, `Half-life`, `Primary NT` , `Dose (mg/day) Initial | Maint. | Max.` , `Frequency` , `mg/Form Supplied` , null,null,null,null,null,null,null,null,null,null FROM `green_card`.`ANTIDEPRESSANTS GUIDE`'
   
    // 'SELECT a.ID,a.NAME,b.ID,b.NAME FROM  `green_card`.`ANTIPSYCHOTICS GUIDE` a , `green_card`.`SEDATIVES/HYPNOTICS GUIDE` b  '
  
  'SELECT * FROM `green_card`.`SEARCH RESULTS`'
  
  );
  return rows;
};


const SearchResultsController = {
   getData: async (req,res, next) => {
    const searchData = await getallData();
    console.log("All is well!")
    res.send(searchData);
   }

};

module.exports = SearchResultsController;