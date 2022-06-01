import { gql } from '@urql/core';
import { For } from 'solid-js';
import { createQuery, useClient } from '../utils/solid-urql';
import PokemonCard from './PokemonCard';

const POKEMON_LIST_QUERY = gql`
  query Pokemons {
    pokemons {
      id
      name
    }
  }
`;

// TODO: paginate list
const PokemonList = () => {
  const client = useClient();
  const [query] = createQuery(() => ({
    client,
    query: POKEMON_LIST_QUERY,
  }));

  const pokemons = () => query()?.data.pokemons;

  return (
    <main class="mx-auto max-w-screen-xl grid grid-cols-2 p-6 gap-4 sm:(grid-cols-3 gap-4 p-6) md:(grid-cols-4 gap-6 p-8) lg:(grid-cols-5 gap-6 p-8)">
      <For each={pokemons()}>{(pokemon) => <PokemonCard {...pokemon} />}</For>
    </main>
  );
};

export default PokemonList;
