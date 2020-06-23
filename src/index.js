const uniqueRandomArray = require('unique-random-array')
const pokemons = require('./pokemon.json')
const getRandomItem = uniqueRandomArray(pokemons)

const random = (number) => {
  if (number === undefined) {
    return getRandomItem()
  } else {
    let randomItems = []
    for (let i = 0; i < number; i++) {
      randomItems.push(getRandomItem())
    }
    return randomItems
  }
}

module.exports = {
  all: pokemons,
  random,
}
