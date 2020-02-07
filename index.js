// this is for the server side 
const express = require('express')
const mongoose = require('mongoose')
const keys = require('./config/keys')
require('./models/User')
require('./services/passport')

mongoose.connect(keys.mongoURI)

const app = express()

require('./routes/authRoutes')(app)

// PORT for deployment environment, 500 for development deployment( local )
app.listen(process.env.PORT || 5000)
