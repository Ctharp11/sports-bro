'use strict';
const express = require('express');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const passport = require('passport');
const expressValidator = require('express-validator');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
var flash = require('connect-flash');
const promisify = require('es6-promisify');

const path = require('path');
const routes = require('./routes/index');
require('dotenv').config();
require('./handlers/passport');
const app = express();

// middleware

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

app.use(cookieParser());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(expressValidator());

app.use(session({
    secret: process.env.SECRET,
    key: process.env.KEY,
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection })
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(flash());


mongoose.connect(process.env.DATABASE, {useNewUrlParser: true})
.then(() => console.log('Mongo connection successful'))
.catch(err => console.log(`Mongo error ${err}`))
mongoose.set('useCreateIndex', true)

// app.use((req, res, next) => {
//     req.login = promisify(req.login, req);
//     next();
// });

app.use('/', routes)

const port = process.env.PORT || 5555;

app.listen(port, () => console.log(`Connected at port ${port}`));
