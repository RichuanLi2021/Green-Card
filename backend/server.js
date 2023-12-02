"use strict";
require("dotenv").config({ path: __dirname + "/.env" }); // Must be called first
const config = require("./config/env");
const envCheck = require('./utils/environmentCheck')
envCheck()
const express = require("express");
const app = express();
const rateLimit = require('./middleware/rateLimit')
const cookieParser = require('cookie-parser');
const cors = require("cors");
const helmet = require('helmet');
const routesIndex = require('./routes/index');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger/swaggerDocument');
const swaggerOptions = require('./swagger/swaggerOptions');
const { sequelize } = require('./models');

app.use(rateLimit)
app.use(cookieParser());
app.use(cors({ origin: config.FRONTEND_URL, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.disable('x-powered-by');
app.use(helmet());
app.use("/api", routesIndex);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, swaggerOptions));

try {
  sequelize.authenticate()
    .then(() => {
      app.listen(config.API_PORT, () => console.log("API server started on port " + config.API_PORT))
    })
} catch (err) {
  console.error("API server unable to start: ", err);
}
