import { gql } from '@urql/core';
import { For, Show } from 'solid-js';
import { createQuery, useClient } from '../../../utils/solid-urql';
import PokemonSprite from '../../../components/PokemonSprite';
import { Link, useParams } from 'solid-app-router';
import { scrollLock } from '../../../utils/scrollLock';

const POKEMON_QUERY = gql`
  query Pokemon($id: ID!) {
    pokemon(id: $id) {
      id
      name
      classification
      maxHP
      weight {
        minimum
        maximum
      }
      height {
        minimum
        maximum
      }
      attacks {
        fast {
          name
          type
          damage
        }
        special {
          name
          type
          damage
        }
      }
    }
  }
`;

const PokemonModal = () => {
  scrollLock(() => true);

  const params = useParams();
  const client = useClient();

  const [query] = createQuery(() => ({
    client,
    query: POKEMON_QUERY,
    variables: { id: params.id },
  }));

  const pokemon = () => query()?.data?.pokemon;

  return (
    <div class="flex fixed inset-0 p-5 bg-gray-600 bg-opacity-70 overflow-y-auto h-full w-full">
      <div class="relative m-auto border w-full max-w-[50ch] md:max-w-screen-md shadow-2xl rounded-2xl bg-white">
        <div class="flex items-center justify-between p-6 border-b">
          <span class="font-light text-gray-400 text-xl">
            Pokémon #{params.id}
          </span>
          <Link href="../../" aria-label="Close" class="w-8 h-8 p-2" noScroll>
            <CloseIcon />
          </Link>
        </div>
        <div class="grid md:grid-cols-2">
          <div class="p-8 self-center">
            <PokemonSprite alt={pokemon()?.name || 'Pokémon'} id={params.id} />
          </div>
          <div class="border-t md:border-t-0 md:border-l">
            <Show
              when={!query.loading && pokemon()}
              fallback={<h2 class="font-medium text-3xl">Loading...</h2>}
            >
              <div class="flex flex-col h-full relative p-8 gap-4">
                <div class="flex items-start">
                  <div class="mr-auto">
                    <h1 class="text-gray-700 font-bold text-2xl">
                      {pokemon().name}
                    </h1>
                    <h2 class="text-gray-400 font-medium text-lg">
                      {pokemon().classification}
                    </h2>
                  </div>
                  <span class="font-medium text-gray-600 text-xl tracking-wide">
                    {pokemon().maxHP} HP
                  </span>
                </div>
                <div class="flex items-center gap-2 children:(bg-gray-100 rounded-lg border px-2 py-1 text-gray-500 text-sm)">
                  <span>Weight: {pokemon().weight.minimum}</span>
                  <span>Height: {pokemon().height.minimum}</span>
                </div>
                <div class="mt-1 px-4 py-1 bg-gray-50 border rounded-xl divide-y">
                  <For
                    each={[
                      ...pokemon().attacks.fast,
                      ...pokemon().attacks.special,
                    ]}
                  >
                    {({ name, type, damage }) => (
                      <div class="flex items-center gap-2 text-gray-600 p-1">
                        <span class="mr-auto text-lg">{name}</span>
                        <span class="text-xs">{type}</span>
                        <span class="text-lg font-bold">{damage}</span>
                      </div>
                    )}
                  </For>
                </div>
              </div>
            </Show>
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
