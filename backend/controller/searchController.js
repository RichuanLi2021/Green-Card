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
    "DELIRIUM_MANAGEMENT",
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

  try {
    for (const table of tables) {
      const { columns, rows } = await getColumnsAndRows(table);
      const tableResults = rows
        .filter((row) => {
          for (const column of columns) {
            if (row[column] && row[column].toLowerCase().includes(searchTerm.toLowerCase())) {
              return true;
            }
          }
          return false;
        })
        .map((row) => {
          const matchedColumns = {};
          for (const column of columns) {
            matchedColumns[column] = row[column];
          }
          return matchedColumns;
        });

      results = [...results, ...tableResults];
    }

    res.json(results);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Helper function to get column names for a given table
const getColumns = async (table) => {
  try {
    const [rows] = await connection.execute(`SHOW COLUMNS FROM ${table}`);
    const columns = rows.map((row) => row.Field);
    return columns;
  } catch (error) {
    console.error(`Error fetching columns for table ${table}`, error);
    throw error;
  }
};

// Helper function to get column names and all rows for a given table
const getColumnsAndRows = async (table) => {
  try {
    const columns = await getColumns(table);
    const [rows] = await connection.execute(`SELECT * FROM ${table}`);
    return { columns, rows };
  } catch (error) {
    console.error(`Error fetching data for table ${table}`, error);
    throw error;
  }
};
