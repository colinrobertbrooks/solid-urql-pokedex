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
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
      <For each={pokemons()}>{(pokemon) => <PokemonCard {...pokemon} />}</For>
    </div>
  );
};

export default PokemonList;
