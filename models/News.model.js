const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newsSchema = Schema({
    id: String,
    title: String,
    description: String,
    url: String,
    image: String,
}, {
    timestamps: true
})

module.exports = mongoose.model('News', newsSchema)