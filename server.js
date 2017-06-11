"use strict";

const express = require("express");
const api = require('./api/file-metadata-microservice-api.js');
const path = require('path');

const app = express();


app.use(express.static(path.join(__dirname, 'public')));


app.listen(process.env.PORT || 8080);

api(app);
