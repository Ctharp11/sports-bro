const express = require('express');
const router = express.Router();
const articleController = require('../controllers/articleController');
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');
const Article = require('../models/Article');

router.get('/', articleController.getArticles);
router.post('/', articleController.postArticle);
router.post('/register', 
    userController.validateRegister,
    userController.validatePassword,
    userController.register,
    authController.login
)
router.route('/account')
    .get(userController.getAccount);
router.route('/user')
    .get(userController.getUser);
router.post('/login', authController.login);
router.get('/logout', authController.logout)
router.post('/account/forgot', authController.forgot);
router.get('/account/reset/:token', authController.reset);
router.post('/account/reset/:token', 
    userController.validatePassword,
    authController.updatePasswords
)

module.exports = router;