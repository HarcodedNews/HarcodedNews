const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  email: String,
  password: String,
  photo: String,
  favNews: [{ type: Schema.Types.ObjectId, ref: "News" }]
}, {
  timestamps: true
})

module.exports = mongoose.model('User', userSchema)
