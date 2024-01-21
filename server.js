const express = require('express')

// configuration

require('dotenv').config()
const PORT = process.env.PORT
const app = express()

// ROUTES
app.get('/', (req, res) => {
    res.send('Welcome to the World of Breads!!')
})

// Breads
const breadsController = require('./controllers/breads_controller.js')
app.use('/breads', breadsController)

// Listen
app.listen(PORT, () =>{
    console.log('Listening to port', PORT);
})