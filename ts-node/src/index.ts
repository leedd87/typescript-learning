// import { getPokemon } from "./generics/get-pokemon";

// getPokemon(4)
//    .then(pokemon => console.log(pokemon))
//    .catch(error => console.log(error))
//    .finally(() => console.log('Fin de getPokemon'))

import { Pokemon } from "./decorators/pokemon";

const charmander = new Pokemon('Charmander');

//(Pokemon.prototype as any).customName = "Pikachu"

charmander.savePokemonToDB(3)
