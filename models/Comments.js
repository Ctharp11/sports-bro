const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const commmentsSchema = new mongoose.Schema({
    comment: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        default: Date.now()
    },
    author: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true
    }

})

module.exports = mongoose.model('Comments', commmentsSchema);