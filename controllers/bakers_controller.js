// dependencies
const express = require('express')
const baker = express.Router()
const Baker = require('../models/baker.js')
const bakerSeedData = require('../models/baker_seed.js')



baker.get('/data/seed', (req, res) => {
    Baker.insertMany(bakerSeedData)
        .then(res.redirect('/breads'))
})


// Index
baker.get('/', async (req, res) => {
 const foundBakers = await Baker.find()
 const foundBreads = await Bread.find().limit(2)
 res.render('index', {
    breads: foundBreads,
    bakers: foundBakers,
    title: 'Index Page'
    })
})

// Show: 
baker.get('/:id', (req, res) => {
    Baker.findById(req.params.id)
        .populate('breads')
        .then(foundBaker => {
            res.render('bakerShow', {
                baker: foundBaker
            })
        })
})

// delete
baker.delete('/:id', (req, res) =>{
    Baker.findByIdAndDelete(req.params.id)
    .then(deletedBaker => {
        res.status(303).redirect('/breads')
    })
})


// export
module.exports = baker                    
