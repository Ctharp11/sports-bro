const User = require('../models/User');
const passport = require('passport');
const LocalStrategy = require('passport-local');

// use static authenticate method of model in LocalStrategy
// passport.use(new LocalStrategy({usernameField:"email"}, User.authenticate()));
passport.use(User.createStrategy());

// use static serialize and deserialize of model for passport session support
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

