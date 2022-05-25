import { createEffect, createSignal, For, Show } from "solid-js";
import { createQuery, gql } from "solid-urql";
import { Pokemon } from "../types";
import Loader from "./Loader";
import PokemonCard from "./PokemonCard";

const PAGINATED_POKEMON_LIST_QUERY = gql`
  query PaginatedPokemonList($limit: Int!, $skip: Int!) {
    pokemons(limit: $limit, skip: $skip) {
      id
      name
    }
  }
`;

const TOTAL_POKEMONS = 151;

const PokemonList = () => {
  const [skip, setSkip] = createSignal(0);
  const [fetchedResult, fetchState] = createQuery<{
    pokemons: Pick<Pokemon, "id" | "name">[];
  }>({
    query: PAGINATED_POKEMON_LIST_QUERY,
    variables: {
      limit: 24,
      skip: skip(), // NOTE: query doesn't rerun when this changes
    },
  });

  // TEMP: for debugging
  createEffect(() => console.log({ skip: skip() }));

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
      <Show when={fetchedResult()!.pokemons.length < TOTAL_POKEMONS}>
        {/* TODO: style me */}
        <button onClick={() => setSkip((s) => s + 24)}>Load more</button>
      </Show>
    </Show>
  );
};

export default PokemonList;
