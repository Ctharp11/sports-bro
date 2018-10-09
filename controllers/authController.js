const passport = require('passport');
const User = require('../models/User');
const mongoose = require('mongoose');
const crypto = require('crypto');
const promisify = require('es6-promisify');

exports.login = passport.authenticate('local', { 
  successRedirect: 'http://localhost:3000/account',
  successFlash: true,
  failureRedirect: 'http://localhost:3000/signup',
  failureFlash: true 
})
exports.logout = (req, res) => {
  req.logout()
  res.status(200).json({ success: "log out successful"})
}
exports.forgot = async (req, res) => {
  //see if user exists
  const user = await User.findOne({ email: req.body.email})
  if (!user) {
    res.status(200).json({ "error": "A password reset has been sent to that email."});
  }
  //is user, set tokens and expiry on account
  user.resetPasswordToken = crypto.randomBytes(20).toString('hex');
  user.resetPasswordExpires = Date.now() + 3600000;
  await user.save();
  //send them an email with token
  const resetUrl =  `http://${req.headers.host}/account/reset/${user.resetPasswordToken}`
  res.status(200).json({ "success": `A password reset link has been sent to your email.`, "key": user.resetPasswordToken });
}
exports.reset = async (req, res) => {
  try {
    const user = await User.findOne({ 
      resetPasswordToken: req.params.token,
      resetPasswordExpires: { $gt: Date.now() }
    })
    if(!user) {
      res.status(200).json({'error': 'Password reset token invalid or expired' });
    }
  }
  catch(err) {
    res.status(500).send(err)
  }
}
exports.updatePasswords = async (req, res) => {
  try {
    // console.log(req.params.token)
    // console.log(req.body.password)
    const user = await User.findOne({ 
      resetPasswordToken: req.params.token,
      resetPasswordExpires: { $gt: Date.now() }
    })
    if(!user) {
      res.status(200).json({'errors': 'Password reset token invalid or expired' });
    }
    // console.log('user', user)
    const setPassword = promisify(user.setPassword, user);
    await setPassword(req.body.password)
    // console.log(setPassword)
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;
    const updatedUser = await user.save();
    // await req.login(updatedUser);
    console.log(req.login)
    res.json({ 'successLogin': updatedUser })
  } 
  catch(err) {
    res.status(500).send(err)
  }
}
