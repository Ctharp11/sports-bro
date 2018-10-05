const Article = require('../models/Article');

exports.getArticles = (req, res) => {
    res.json({ it: 'worked'});
};

exports.postArticle = (req, res) => {
    // const newArticle = new Article({
    //     post: req.body.post,
    //     author: req.body.author
    // });
    // newArticle.save()
    // .then(res => console.log(res))
    // .catch(err => console.log(err))
};