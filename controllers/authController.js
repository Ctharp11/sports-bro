const passport = require('passport');

exports.login = passport.authenticate('local', { 
  successRedirect: 'http://localhost:3000/account',
  successFlash: true,
  failureRedirect: 'http://localhost:3000/signup',
  failureFlash: true 
})
