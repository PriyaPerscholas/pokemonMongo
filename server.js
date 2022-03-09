require('dotenv').config()
const express = require('express')
const app = express()
const pokemon = require('./Models/pokemon.js')
const mongoose = require('mongoose');

//MUST BE FIRST 
//middleware
app.use((req, res, next) => {
       console.log('I run for all routes')
       next()
})

//keep this near the top 
app.use(express.urlencoded({ extened: true }))

//set up view engine above routes
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

// define root route
app.get('/', function (req, res) {
       res.send(`<h1>Welcome to Pokemon App !</h1>`)
})

//index route : Show ALL 
app.get('/pokemon', function (req, res) {
       pokemon.find({}, (error, allPokemon) => {
              res.render('Index', {
                     pokemon: allPokemon
              })
       })
})


//create a page that will allow us to create a new Pokemon
app.get('/pokemon/new', (req, res) => {
       res.render('New')
})

//form POST 
app.post('/pokemon/', (req, res) => {
       pokemon.create(req.body, (error, createdPokemon) => {
              res.redirect('/pokemon')
       })
})

//show route 
app.get('/pokemon/:id', function (req, res) {
       pokemon.findById(req.params.id, (err, foundPokemon) => {
              res.render('Show', { pokemon: foundPokemon })
       })
})

//connect to mongo database
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
       console.log('connected to mongo')
})

app.listen(3000, () => {
       console.log("listening")
})