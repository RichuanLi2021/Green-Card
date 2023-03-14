const express = require('express');
const app = express();

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // Replace with your React app's URL
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });

const routes = require('./routes/loginRoute');

//for parsing application/json
app.use(express.json());
app.use('/api', routes);

const port = 8887;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
