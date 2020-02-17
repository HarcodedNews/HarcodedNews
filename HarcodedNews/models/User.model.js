const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  email: String,
  password: String,
  photo: String,
  favNews: String
}, {
  timestamps: true
})

module.exports = mongoose.model('User', userSchema)
