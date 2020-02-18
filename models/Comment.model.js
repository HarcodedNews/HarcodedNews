const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = Schema({
    idNews: String,
    idAuthor: { type: Schema.Types.ObjectId, ref: "User" },
    comment: String,
}, {
    timestamps: true
})

module.exports = mongoose.model('Comment', commentSchema)