const uniqueRandomArray = require('unique-random-array')
const pokemons = require('./pokemon.json')

module.exports = {
  all: pokemons,
  random: uniqueRandomArray(pokemons),
}
