require('dotenv').config()

const express = require('express')
const app = express()

require('./config/mongoose.config')
require('./config/flash.config')(app)
require("./config/preprocessor.config")(app)
require("./config/middleware.config")(app)
require('./config/hbs.config')
require('./config/locals.config')(app)
require('./config/session.config')(app)
require('./config/passport.config')(app)
require('./config/debug.config')

//Base URLs
app.use('/', require('./routes/index.routes'))
app.use('/auth', require('./routes/auth.routes'))
app.use('/comments', require('./routes/comments.routes'))
app.use('/profile', require('./routes/profile.routes'))


module.exports = app
