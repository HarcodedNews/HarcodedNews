const mongoose = require('mongoose')
const Schema = mongoose.Schema

const pictureSchema = new Schema({
    description: String,
    name: String,
    path: String
}, {
    timestamps: true
})


module.exports = mongoose.model('Userpic', pictureSchema)