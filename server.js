const express = require('express')
// DEPENDENCIES
const methodOverride = require('method-override')
const mongoose = require('mongoose')

// configuration
require('dotenv').config()
const PORT = process.env.PORT
const app = express()




// // MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'))



// ROUTES
app.get('/', (req, res) => {
    res.send('Welcome to the World of Breads!!')
})

// breads
const breadsController = require('./controllers/breads_controller')
app.use('/breads', breadsController)

// bakers 
const bakersController = require('./controllers/bakers_controller')
app.use('/bakers', bakersController)

// 404 Page
app.get('*', (req, res) => {
  res.send('404')
})


mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}).then(() => console.log('connected to mongo: ', process.env.MONGO_URI))

// Listen
app.listen(PORT, () => {
    console.log('Listening to port', PORT);
})

