require('dotenv').config()
const express = require('express')
const app = express()
const Pokemon = require('./Models/pokemon.js')
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3000
const methodOverride = require('method-override');

//MUST BE FIRST 
//middleware
app.use((req, res, next) => {
       console.log('I run for all routes')
       next()
})
//keep this near the top 
app.use(express.urlencoded({ extened: true }))

app.use(methodOverride('_method'));

app.get('/pokemon/seed', (req, res) => {
       Pokemon.create([
              { name: "bulbasaur", img: "http://img.pokemondb.net/artwork/bulbasaur" },
              { name: "ivysaur", img: "http://img.pokemondb.net/artwork/ivysaur" },
              { name: "venusaur", img: "http://img.pokemondb.net/artwork/venusaur" },
              { name: "charmander", img: "http://img.pokemondb.net/artwork/charmander" },
              { name: "charizard", img: "http://img.pokemondb.net/artwork/charizard" },
              { name: "squirtle", img: "http://img.pokemondb.net/artwork/squirtle" },
              { name: "wartortle", img: "http://img.pokemondb.net/artwork/wartortle" }],
              (err, data) => {
                     res.redirect('/pokemon');
              })
});


//set up view engine above routes
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

// define root route
app.get('/', function (req, res) {
       res.send(`<h1>Welcome to Pokemon App !</h1>`)
})

//index route : Show ALL 
app.get('/pokemon', function (req, res) {
       Pokemon.find({}, (error, allPokemon) => {
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
       Pokemon.create(req.body, (error, createdPokemon) => {
              res.redirect('/pokemon')
       })
})

//delete route
app.delete('/pokemon/:id', (req, res) => {
       Pokemon.findByIdAndRemove(req.params.id, (err, data) => {
              res.redirect('/pokemon');//redirect back to fruits index
       });
});

app.get('/pokemon/:id/edit', (req, res) => {
       Pokemon.findById(req.params.id, (err, foundPokemon) => { //find the pokemon
              if (!err) {
                     res.render(
                            'Edit',
                            {
                                   fruit: foundPokemon //pass in found fruit
                            }
                     );
              } else {
                     res.send({ msg: err.message })
              }
       });
});

app.put('/pokemon/:id', (req, res) => {
       res.send(req.body);
})

//show route 
app.get('/pokemon/:id', function (req, res) {
       Pokemon.findById(req.params.id, (err, foundPokemon) => {
              res.render('Show', { pokemon: foundPokemon })
       })
})

//connect to mongo database
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
       console.log('connected to mongo')
})

app.listen(PORT, () => {
       console.log("listening")
})