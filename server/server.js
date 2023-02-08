//back-end just test
const express = require('express');
const app = express();

// Connect to MySQL
const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: '127.0.0.1',
    //port: '3306',
    user: 'root',
    password: '', //please add password when you use it
    database: 'green_card'
  });
  connection.query(
    'SELECT * FROM example_table',
    function(error, results, fields) {
      if (error) throw error;
      console.log(results);
    }
  );
  connection.end();

app.get('/api/users', (req, res) => {
    const users = [{ name: 'John', age: 30 }, { name: 'Samantha', age: 25 }];
    res.json(users);
});

const port = 8887;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});