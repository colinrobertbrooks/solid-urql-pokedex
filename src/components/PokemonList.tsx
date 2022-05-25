import { For, Show } from "solid-js";
import { createQuery, gql } from "solid-urql";
import { Pokemon } from "../types";
import Loader from "./Loader";
import PokemonCard from "./PokemonCard";

const POKEMON_LIST_QUERY = gql`
  query PokemonList {
    pokemons {
      id
      name
    }
  }
`;

const PokemonList = () => {
  const [fetchedResult, fetchState] = createQuery<{
    pokemons: Pick<Pokemon, "id" | "name">[];
  }>({
    query: POKEMON_LIST_QUERY,
  });

  return (
    <Show
      when={!fetchState().fetching && fetchedResult()?.pokemons}
      fallback={
        <div class="min-h-[200px]">
          <Loader size={80} />
        </div>
      }
    >
      <div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4">
        <For each={fetchedResult()!.pokemons}>
          {(pokemon) => <PokemonCard {...pokemon} />}
        </For>
      </div>
    </Show>
  );
};

export default PokemonList;
