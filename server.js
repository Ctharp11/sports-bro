'use strict';
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const routes = require('./routes/index');
require('dotenv').config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

mongoose.connect(process.env.DATABASE, {useNewUrlParser: true})
.then(() => console.log('Mongo connection successful'))
.catch(err => console.log(`Mongo error ${err}`))
mongoose.set('useCreateIndex', true)

app.use('/api', routes)

app.use((error, req, res, next) => {
    console.error(error);
    res.status(500).json({
      error
    })
});

const port = process.env.PORT || 5555;

app.listen(port, () => console.log(`Connected at port ${port}`));
