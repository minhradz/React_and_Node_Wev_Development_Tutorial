// this is for the server side 
const express = require('express')
const passport =require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const app = express()

// console.developers.google.com
passport.use(new GoogleStrategy())

// PORT for deployment environment, 500 for development deployment( local )
app.listen(process.env.PORT || 5000)

