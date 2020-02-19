const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newsSchema = Schema({
    idNew: { type: String, unique: true },
    title: String,
    description: String,
    url: String,
    image: String,
    comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }]
}, {
    timestamps: true
})

module.exports = mongoose.model('News', newsSchema)