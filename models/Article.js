const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const articleSchema = new mongoose.Schema({
    post: {
        type: String, 
        required: true
    },
    author: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('Article', articleSchema);