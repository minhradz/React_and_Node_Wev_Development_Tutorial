// this is for the server side 
const express = require('express')
const passport =require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const app = express()
const keys = require('./config/keys')

// console.developers.google.com
passport.use(
    new GoogleStrategy(
        {
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: '/auth/google/callback'
        }, 
        accessToken => {
            console.log(accessToken)
        }
    )
)

app.get(
    '/auth/google', 
    passport.authenticate('google', {
        scope: ['profile', 'email']
    })
)

// PORT for deployment environment, 500 for development deployment( local )
app.listen(process.env.PORT || 5000)

