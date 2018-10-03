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
    authController.login
)

module.exports = router;