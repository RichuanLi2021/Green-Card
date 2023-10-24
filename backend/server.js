"use strict";
const dotenv = require("dotenv").config({ path: __dirname + "/.env" }); // Required for .env file
const config = require("./config/config");

const express = require("express");
const app = express();
const cors = require("cors");

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", config.frontend_url);
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "DELETE, POST, GET, OPTIONS");
  next();
});


console.log("config.frontend_url: " + process.env.FRONTEND_URL);
console.log("config.frontend_url: " + config.frontend_url);

// Importing routes master files
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

//for parsing application/json
app.use(express.json());
app.use(cors({ origin: true }));

// Using master route files with specific API paths
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

// Welcome Route
app.get("/", function (req, res) {
  res.send("Express on Vercel");
});

const port = config.api_port || 8887;

app.listen(port, function () {
  console.log("Server started on port " + port);
});
