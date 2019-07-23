require('../src/data.js');
const pokemon = require('../src/data/pokemon/pokemon.json');
const squirtle = require('./squirtle.json');

describe('example', () => {
  it('is a function', () => {
    expect(typeof dataLovers.example).toBe('function');
  });

  it('returns `example`', () => {
    expect(dataLovers.example()).toBe('example');
  });
});

describe('pokemon', () => {

  it('should return pokemon', () => {
    expect(dataLovers.listPokemon(pokemon)).toBe(pokemon);
  });
  it('should filter pokemon by water type', () => {
    expect(dataLovers.filterPokemon(pokemon, 'Water')[0]).toEqual(squirtle);
  });
});
