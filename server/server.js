const express = require('express');
const app = express();
const routes = require('.//lib//routes//auth');

//for parsing application/json
app.use(express.json());
app.use('/api', routes);

const port = 8887;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
