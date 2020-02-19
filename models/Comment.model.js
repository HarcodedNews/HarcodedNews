const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = Schema({
    idNews: String,
    iauthorName: String,
    comment: String,
}, {
    timestamps: true
})

module.exports = mongoose.model('Comment', commentSchema)