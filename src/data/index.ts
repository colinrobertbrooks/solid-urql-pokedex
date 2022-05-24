// https://github.com/FormidableLabs/trygql/blob/main/graphql/basic-pokedex/data/pokemons.ts
import { Pokemon } from "../types";
import data from "./pokemon-data";

export const pokemonList: Pokemon[] = data;

export const pokemonById: Map<string, Pokemon> = pokemonList.reduce(
  (map, pokemon) => {
    if (pokemon.id) map.set(pokemon.id, pokemon);
    return map;
  },
  new Map()
);
