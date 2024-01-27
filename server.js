const express = require('express')
// DEPENDENCIES
const methodOverride = require('method-override')

// configuration
require('dotenv').config()
const PORT = process.env.PORT
const app = express()
app.use(express.urlencoded({extended: true}));


// // MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'));
app.use(methodOverride('_method'))



// ROUTES
app.get('/', (req, res) => {
    res.send('Welcome to the World of Breads!!')
})

// Breads
const breadsController = require('./controllers/breads_controller.js')
app.use('/breads', breadsController)

// 404 Page Route
app.get('*', (req, res) => {
    res.send('404')
})

// Listen
app.listen(PORT, () => {
    console.log('Listening to port', PORT);
})

