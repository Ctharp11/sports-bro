const mongoose = require('mongoose');
const passwordValidator = require('password-validator');
const User = require('../models/User');
const promisify = require('es6-promisify');

exports.validateRegister = (req, res, next) => {
    req.body.name = req.body.user.name
    req.body.email = req.body.user.email
    req.body.password = req.body.user.password
    req.sanitizeBody('name');
    req.checkBody('name', 'You must supply a name!').notEmpty();
    req.checkBody('email', 'That email is not valid!').isEmail();
    req.sanitizeBody('email').normalizeEmail({
        remove_dots: false,
        remove_extensions: false,
        gmail_remove_subaddress: false
    });
    req.checkBody('password', 'You must supply a password!').notEmpty();

    const errors = req.validationErrors();
    if (errors) {
        res.status(200).json({ 'errors': errors.map(err => err.msg) })
        return;
    }
    next()
}

exports.validatePassword = (req, res, next) => {
    var schema = new passwordValidator();
    schema.is().min(8)                                
    schema.has().uppercase()  
    schema.has().not().spaces() 
    schema.has().digits()

    const passValidate = schema.validate(req.body.password, { list: true });

    if(passValidate.length > 0) {
        res.status(200).json({ 'errors': 'Your password must be at least 8 characters long, have at least one uppercase letter, at least one number, and no spaces.'});
        return;
    }
    next()
}

exports.register = async (req, res, next) => {
    try {
        console.log('req.body.user', req.body.user)
        const user = new User({
            email: req.body.user.email,
            name: req.body.user.name
        })
        await user.save()
        // const register = promisify(User.register, User);
        // await register(user, req.body.password);
        const errors = req.validationErrors()
        console.log('errors', errors)
        if('controller',errors) {
            console.log(errors)
        }

        console.log('here')
        next()
    }
    catch(err) {
        res.status(500).json(err)
        return;
    }
}
