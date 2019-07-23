// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

const example = () => {
  return 'example';
};

const listPokemon = pokemon => {
  return pokemon;
};

const filterPokemon = (pokemon, type) => {
  return pokemon.pokemon.filter(pokemon => pokemon.type.includes(type));
};

window.dataLovers = {
  example,
  listPokemon,
  filterPokemon
};
