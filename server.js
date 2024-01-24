const express = require('express')

// configuration

require('dotenv').config()
const PORT = process.env.PORT
const app = express()

// // MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))


// ROUTES
app.get('/', (req, res) => {
    res.send('Welcome to the World of Breads!!')
})
// 404 Page Route
app.get('*', (req, res) => {
    res.send('404')
})

// Breads
const breadsController = require('./controllers/breads_controller.js')
app.use('/breads', breadsController)

// Listen
app.listen(PORT, () => {
    console.log('Listening to port', PORT);
})

