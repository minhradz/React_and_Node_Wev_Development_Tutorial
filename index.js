// this is for the server side 
const express = require('express')
const app = express()

// create a route handler 
app.get('/', (req, res) => {
    res.send({ hi: 'there general Kenobi' })
})

app.listen(process.env.PORT || 5000)

