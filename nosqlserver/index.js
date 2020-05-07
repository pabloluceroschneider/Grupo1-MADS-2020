const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const routesV1 = require("./api/routes/v1");
const PORT = process.env.PORT || 4000;

dotenv.config()
routesV1(app)

mongoose.connect( process.env.MONGO , {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then( () => {
  console.log("Connected to mongodb");
  app.listen( PORT, function () {
    console.log(`Application running on port ${PORT}`);
  });
}).catch(e => {console.log("mongo db error", e)})
