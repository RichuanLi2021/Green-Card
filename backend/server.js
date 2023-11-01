"use strict";
require("dotenv").config({ path: __dirname + "/.env" }); // Required for .env file
const config = require("./config/env");

const express = require("express");
const app = express();
const cors = require("cors");
// const { sequelize } = require('./models') // Sequelize

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", config.frontend_url);
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "DELETE, POST, GET, OPTIONS");
  next();
});
app.use(express.json());
app.use(cors({ origin: true }));
app.use(express.urlencoded({ extended: true }))

const AntidepressantMaster = require('./routes/AntidepressantMaster/index');
const AntipsychoticMaster = require('./routes/AntipsychoticMaster/index');
const CognitiveMaster = require('./routes/CognitiveMaster/index');
const DeliriumMaster = require('./routes/DeliriumMaster/index');
const FeedbackMaster = require('./routes/FeedbackMaster/index');
const InsomniaMaster = require('./routes/InsomniaMaster/index');
const loginMaster = require('./routes/loginMaster/index');
const MoodStaMaster = require('./routes/MoodStaMaster/index');
const NeuropsyMaster = require('./routes/NeuropsyMaster/index');
const NPS_Master = require('./routes/NPS_Master/index');
const PolypharmacyMaster = require('./routes/PolypharmacyMaster/index');
const PsychotropicMaster = require('./routes/PsychotropicMaster/index');
const searchMaster = require('./routes/SearchMaster/index');

app.use("/api/antidepressant", AntidepressantMaster);
app.use("/api/antipsychotic", AntipsychoticMaster);
app.use("/api/cognitive", CognitiveMaster);
app.use("/api/delirium", DeliriumMaster);
app.use("/api/feedback", FeedbackMaster);
app.use("/api/insomnia", InsomniaMaster);
app.use("/api/login", loginMaster);
app.use("/api/mood-sta", MoodStaMaster);
app.use("/api/neuropsy", NeuropsyMaster);
app.use("/api/nps", NPS_Master);
app.use("/api/polypharmacy", PolypharmacyMaster);
app.use("/api/psychotropic", PsychotropicMaster);
app.use("/api/search", searchMaster);

// Sequelize Routes
// const routesIndex = require('./routes/index');
// app.use("/api", routesIndex);

const port = config.api_port || 8887;

try {
  app.listen(port, function () {
    console.log("API server started on port " + port);
  });

  // Sequelize Startup
  // sequelize.authenticate()
  //   .then(() => {
  //     app.listen(port, () => console.log("API server started on port " + port))
  //   })
} catch (err) {
  console.error("API server unable to start: ", err);
}
