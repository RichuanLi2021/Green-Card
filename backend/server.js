"use strict";
require("dotenv").config({ path: __dirname + "/.env" }); // Required for .env file
const config = require("./config/env");
const cookieParser = require('cookie-parser');
const routesIndex = require('./routes/index');
const express = require("express");
const app = express();
const cors = require("cors");
const { sequelize } = require('./models');

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", config.FRONTEND_URL);
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "DELETE, POST, GET, OPTIONS");
  next();
});
app.use(cookieParser());
app.use(express.json());
app.use(cors({ origin: true }));
app.use(express.urlencoded({ extended: true }));
app.use("/api", routesIndex);

const port = config.API_PORT || 8887;
try {
  sequelize.authenticate()
    .then(() => {
      app.listen(port, () => console.log("API server started on port " + port))
    })
} catch (err) {
  console.error("API server unable to start: ", err);
}