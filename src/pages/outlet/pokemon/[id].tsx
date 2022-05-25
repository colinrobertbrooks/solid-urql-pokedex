import { Link, useParams } from "solid-app-router";
import { Show } from "solid-js";
import { createQuery, gql } from "solid-urql";
import Loader from "../../../components/Loader";
import PokemonSprite from "../../../components/PokemonSprite";

// TODO: add fields
const POKEMON_QUERY = gql`
  query Pokemon($id: ID!) {
    pokemon(id: $id) {
      id
      name
    }
  }
`;

// TODO: focus trap
const PokemonModal = () => {
  const params = useParams();
  const [fetchedResult, fetchState] = createQuery({
    query: POKEMON_QUERY,
    variables: { id: params.id },
  });

  return (
    <div class="flex fixed inset-0 p-5 bg-gray-600 bg-opacity-70 overflow-y-auto h-full w-full">
      <div class="relative m-auto border w-full max-w-screen-md shadow-2xl rounded-2xl bg-white">
        <div class="flex items-center justify-between p-6 border-b">
          <span class="font-light text-gray-400 text-xl">
            Pokémon #{params.id}
          </span>
          <Link href="../../" aria-label="Close" class="w-4 h-4">
            <CloseIcon />
          </Link>
        </div>
        <div class="md:grid md:grid-cols-2 md:gap-3">
          <div class="p-8">
            <PokemonSprite
              alt={fetchedResult()?.name || "Pokémon"}
              id={params.id}
            />
          </div>
          <div class="border-t md:border-t-0 md:border-l">
            <div class="h-full relative p-6">
              <Show
                when={!fetchState().fetching && fetchedResult()?.pokemon}
                fallback={
                  <div class="min-h-[200px]">
                    <Loader size={80} />
                  </div>
                }
              >
                <code class="break-words">
                  <h2 class="font-medium text-3xl">
                    {fetchedResult().pokemon.name}
                  </h2>
                  <h3 class="text-xl">
                    {fetchedResult().pokemon.classification}
                  </h3>
                </code>
              </Show>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CloseIcon = () => (
  <svg
    class="w-full h-full"
    stroke-width={4}
    aria-hidden="true"
    stroke="currentColor"
    viewBox="0 0 50 50"
  >
    <line x1="50" y2="50" />
    <line x2="50" y2="50" />
  </svg>
);

export default PokemonModal;
