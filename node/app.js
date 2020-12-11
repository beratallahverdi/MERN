const express = require('express');
const app = express();
var cors = require('cors');

const routes = require('./routes/DerslerRoutes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(cors());
app.use('/dersler',routes);

module.exports = app;
