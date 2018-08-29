const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const routes = require('./routes/index');
require('dotenv').config();

const app = express();

app.use(bodyParser.json());

mongoose.connect(process.env.DATABASE, {useNewUrlParser: true})
.then(() => console.log('Mongo connection successful'))
.catch(err => console.log(`Mongo error ${err}`))

app.use('/api', routes)

const port = process.env.PORT || 5555;

app.listen(port, () => console.log(`Connected at port ${port}`));
