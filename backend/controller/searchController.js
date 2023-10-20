const mysql = require("mysql2/promise");
const config = require("../config/config");

const connection = mysql.createPool({
  database: config.database,
  host: config.db_host,
  port: config.db_port,
  user: config.db_username,
  password: config.db_password
});

exports.search = async (req, res) => {
  const searchTerm = req.query.term;
  const tables = [
    "ANTICHOLINERGIC ACTIVITY",
    "ANTIDEPRESSANT CLINICAL GUIDE",
    "ANTIDEPRESSANT SAFETY CONCERNS",
    "ANTIDEPRESSANTS GUIDE",
    "ANTIPSYCHOTIC SAFETY CONCERNS",
    "ANTIPSYCHOTICS GUIDE",
    "COGNITIVE ENHANCERS CLINICAL GUIDE",
    "COGNITIVE ENHANCERS GUIDE",
    "COMMON DDIs WITH PSYCHOTROPICS",
    "DEPRESCRIBING BENZODIAZEPINE-LIKE SEDATIVES",
    "ECT & PSYCHOACTIVE MEDICATIONS",
    "INSOMNIA MANAGEMENT",
    "MOOD STABILIZERS GUIDE",
    "NEUROPSYCHIATRIC SYMPTOMS OF DEMENTIA (NPS) MANAGEMENT",
    "PRESCRIBING AND DEPRESCRIBING PRINCIPLES",
    "PSYCHOTROPIC MONITORING",
    "SEDATIVES/HYPNOTIC SAFETY CONCERNS",
    "SEDATIVES/HYPNOTICS CLINICAL GUIDE",
    "SEDATIVES/HYPNOTICS GUIDE",
  ];

  let results = [];

  // Helper function to get column names for a given table
  const getColumns = async (tableName) => {
    try {
      const [rows] = await connection.execute(`SHOW COLUMNS FROM \`${tableName}\``);
      const columns = rows.map((row) => row.Field);
      return columns;
    } catch (error) {
      console.error("Error fetching columns for table", tableName);
      throw error;
    }
  };

  // Helper function to get column names and all rows for a given table
  const getColumnsAndRows = async (tableName) => {
    try {
      const columns = await getColumns(tableName);
      const columnNames = columns.map((column) => `\`${column}\``).join(",");

      const query = `
        SELECT ${columnNames}
        FROM \`${tableName}\`
        WHERE ${columns.map((column) => `\`${column}\` LIKE '%${searchTerm}%'`).join(" OR ")}
      `;

      const [rows] = await connection.execute(query);
      return { tableName, columns, rows };
    } catch (error) {
      console.error("Error fetching rows for table", tableName);
      throw error;
    }
  };

  try {
    for (const table of tables) {
      const { tableName, columns, rows } = await getColumnsAndRows(table);
      const tableResults = rows.map((row) => {
        const matchedColumns = {};
        for (const column of columns) {
          matchedColumns[column] = row[column];
        }
        return matchedColumns;
      });

      results = [...results, ...tableResults.map((row) => ({ tableName, ...row }))];
    }

    res.json(results);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
