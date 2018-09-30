const express = require('express');
const router = express.Router();
const articleController = require('../controllers/articleController');
const Article = require('../models/Article');

router.get('/', articleController.getArticles);
router.post('/', articleController.postArticle);

module.exports = router;