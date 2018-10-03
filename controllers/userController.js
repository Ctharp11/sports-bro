const mongoose = require('mongoose');
const passwordValidator = require('password-validator');
const User = require('../models/User');
const promisify = require('es6-promisify');

exports.validateRegister = (req, res, next) => {
    console.log('validateResiter', req.body)
    next()

}

exports.validatePassword = (req, res, next) => {
    console.log('validatePassword', req.body)
    next()
}
