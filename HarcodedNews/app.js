require('dotenv').config()

const express = require('express')
const app = express()

require('./config/mongoose.config')
require('./config/flash.config')(app)
require("./config/middleware.config")(app)
require("./config/preprocessor.config")(app)
require('./config/locals.config')(app)
require('./config/session.config')(app)
require('./config/passport.config')(app)
require('./config/debug.config')

//Base URLs
app.use('/', require('./routes/index'))
app.use('/auth', require('./routes/auth.routes'))

module.exports = app
