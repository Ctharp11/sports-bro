const passport = require('passport');
const mongoose = require('mongoose');
const crypto = require('crypto');
const User = require('../models/User');
const promisify = require('es6-promisify');
const main = require('../handlers/mail');
const passwordValidator = require('password-validator');

exports.login = (req, res) => {
    console.log('logging in', req.body)
}