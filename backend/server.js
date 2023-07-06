"use strict";
var express = require("express");
var app = express();
var cors = require("cors");



app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // Replace with your React app's URL
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "DELETE, POST, GET, OPTIONS");
  next();
});

var routeLogin = require('./routes/loginRoute');
var routeFeedback = require('./routes/feedbackRoute');
var apRoute = require('./routes/antipsychoticsGuideRoute');
var neuropsychiatricSymptomsRoute = require('./routes/neuropsychiatricSymptomsRoute');
var InsomniaSedativesGuideRoute = require('./routes/InsomniaSedativesGuideRoute');
var insomniaDeprescribingRoute = require('./routes/insomniaDeprescribingRoute');
var InsomniaClinicalRoute = require('./routes/InsomniaClinicalRoute');
var InsomniaSafetyRoute = require('./routes/InsomniaSafetyRoute');
var MoodStabilizersRoute = require('./routes/MoodStabilizersRoute');
var PsychotropicMonitoringSectionRoute = require('./routes/PsychotropicMonitoringSectionRoute');
var AntidepressantGuideRoute = require('./routes/AntidepressantGuideRoute');
var AntidepressantSafetyRoute = require('./routes/AntidepressantSafetyRoute');
var AntidepressantsClinicalRoute = require('./routes/AntidepressantsClinicalRoute');
var deliriumManagementRoute = require("./routes/deliriumManagementRoute");
var PolypharmacyCommonDDIsRoute = require("./routes/PolypharmacyCommonDDIsRoute");
var PolypharmacyNotableRoute = require("./routes/PolypharmacyNotableRoute");
var PolypharmacyPrinciplesRoute = require("./routes/PolypharmacyPrinciplesRoute");
var SearchResultsRoute = require('./routes/SearchResultsRoute');
var CognitiveEnhancersGuideRoute = require('./routes/CognitiveEnhancersGuideRoute');
var CognitiveEnhancersGuideContRoute = require('./routes/CognitiveEnhancersGuideContRoute');
var CognitiveEnhancersClinicalRoute = require('./routes/CognitiveEnhancersClinicalRoute');

//for parsing application/json
app.use(express.json());
app.use(cors({origin: true}))
app.use('/api', routeLogin);
app.use('/api', routeFeedback);
app.use('/api', apRoute);
app.use('/api', neuropsychiatricSymptomsRoute);
app.use('/api', InsomniaSedativesGuideRoute);
app.use('/api', insomniaDeprescribingRoute);
app.use('/api', InsomniaClinicalRoute);
app.use('/api', InsomniaSafetyRoute);
app.use('/api', MoodStabilizersRoute);
app.use('/api', PsychotropicMonitoringSectionRoute);
app.use('/api', AntidepressantGuideRoute);
app.use('/api', AntidepressantSafetyRoute);
app.use('/api', AntidepressantsClinicalRoute);
app.use("/api", deliriumManagementRoute);
app.use("/api", PolypharmacyCommonDDIsRoute);
app.use("/api", PolypharmacyNotableRoute);
app.use("/api", PolypharmacyPrinciplesRoute);
app.use("/api", SearchResultsRoute);
app.use('/api', CognitiveEnhancersGuideRoute);
app.use('/api', CognitiveEnhancersGuideContRoute);
app.use('/api', CognitiveEnhancersClinicalRoute);

var port = 8887;


app.listen(port, function () {
  console.log("Server started on port ".concat(port));
});
