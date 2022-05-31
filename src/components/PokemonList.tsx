import { gql } from '@urql/core';
import { For } from 'solid-js';
import { createQuery, useClient } from '../utils/solid-urql';
import PokemonCard from './PokemonCard';

const ALL_POKEMON_QUERY = gql`
  query Pokemons {
    pokemons {
      id
      name
    }
  }
`;

// TODO: query paginated list
const PokemonList = () => {
  const client = useClient();
  const [query] = createQuery(() => ({
    client,
    query: ALL_POKEMON_QUERY,
  }));

  const pokemons = () => query()?.data.pokemons;

  return (
    <div class="mx-auto max-w-screen-xl grid grid-cols-2 p-6 gap-4 sm:(grid-cols-3 gap-4 p-6) md:(grid-cols-4 gap-6 p-8) lg:(grid-cols-5 gap-6 p-8)">
      <For each={pokemons()}>{(pokemon) => <PokemonCard {...pokemon} />}</For>
    </div>
  );
};

export default PokemonList;
