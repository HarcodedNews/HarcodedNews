const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = Schema({
    comment: String,
    idNews: String,
    idAuthor: { type: Schema.Types.ObjectId, ref: "User" }
}, {
    timestamps: true
})

module.exports = mongoose.model('Comment', commentSchema)