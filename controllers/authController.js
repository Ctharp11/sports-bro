const passport = require('passport');

// exports.login = passport.authenticate('local', { successMessage: true, failureMessage: true }),
//   function(req, res) {
//     console.log(req)
//     res.status(200).json({ 'it': 'worked' })
//   }

exports.login = passport.authenticate('local', { 
  successRedirect: 'http://localhost:3000/account',
  successFlash: true,
  failureRedirect: 'http://localhost:3000/signup',
  failureFlash: true 
})
