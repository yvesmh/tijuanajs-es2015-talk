/*jshint esversion: 6*/

var pokemons = [
  {
    name: 'Bulbasaur',
    pokedexNumber: 1,
    type: 'Grass'
  },
  {
    name: 'Squirtle',
    pokedexNumber: 7,
    type: 'Water'
  },
  {
    name: 'Charmander',
    pokedexNumber: 4,
    type: 'Fire'
  },
  {
    name: 'Pikachu',
    pokedexNumber: 25,
    type: 'Electric'
  },
  {
    name: 'Growlithe',
    pokedexNumber: 58,
    type: 'Fire'
  }
];

pokemons.forEach(p => {
  console.log(p.name);
});

var firePokemonNames = pokemons.filter(p => {
  return p.type === 'Fire';
}).map(p => {
  return p.name;
});

console.log(firePokemonNames);