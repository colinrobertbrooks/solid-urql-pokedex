import { gql } from '@urql/core';
import { Link, useParams } from 'solid-app-router';
import { For, Show } from 'solid-js';
import Loader from '../../../components/Loader';
import PokemonSprite from '../../../components/PokemonSprite';
import { scrollLock } from '../../../utils/scrollLock';
import { createQuery, useClient } from '../../../utils/solid-urql';

const POKEMON_QUERY = gql`
  query Pokemon($id: ID!) {
    pokemon(id: $id) {
      id
      name
      classification
      types
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

  const incrementId = (by: number) => {
    const num = parseInt(pokemon()?.id.replace(/^0+/g, ''));
    return String(num + by).padStart(3, '0');
  };

  return (
    <div class="flex fixed inset-0 px-5 py-8 bg-gray-600 bg-opacity-70 overflow-y-auto h-full w-full z-20">
      <div class="relative m-auto w-full max-w-[50ch] md:max-w-screen-md shadow-2xl rounded-3xl overflow-hidden bg-white">
        <div class="grid md:grid-cols-2">
          <div class="flex w-full min-h-[33rem]">
            <PokemonSprite alt={pokemon()?.name || 'Pokémon'} id={params.id} />
          </div>
          <div class="border-t md:border-t-0 md:border-l">
            <div class="w-full p-6 border-b flex items-center justify-between gap-3">
              <h1 class="text-3xl font-extrabold text-gray-300">
                #{params.id}
              </h1>
              <div class="flex gap-3 children:(w-8 h-8 p-1.5 border border-2 border-gray-300 rounded-full text-gray-400 fill-current)">
                <Show when={params.id !== '001'}>
                  <Link href={`../${incrementId(-1)}`} noScroll>
                    <PrevIcon />
                  </Link>
                </Show>
                <Show when={params.id !== '151'}>
                  <Link href={`../${incrementId(1)}`}>
                    <NextIcon />
                  </Link>
                </Show>
                <Link href="../../" aria-label="Close" noScroll>
                  <CloseIcon />
                </Link>
              </div>
            </div>
            <Show when={pokemon()} fallback={<Loader class="opacity-5" />}>
              <div class="flex flex-col h-full relative p-8 gap-4">
                <div class="flex items-start">
                  <div class="mr-auto">
                    <h1 class="text-gray-700 font-bold text-4xl">
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
                        <span class="text-lg mr-auto">{name}</span>
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
  <svg class="w-full h-full" viewBox="0 0 16 16">
    <path
      fill-rule="evenodd"
      d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"
    />
  </svg>
);

const NextIcon = () => (
  <svg class="w-full h-full" viewBox="0 0 16 16">
    <path
      fill-rule="evenodd"
      d="M8.22 2.97a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06l2.97-2.97H3.75a.75.75 0 010-1.5h7.44L8.22 4.03a.75.75 0 010-1.06z"
    />
  </svg>
);

const PrevIcon = () => (
  <svg class="w-full h-full" viewBox="0 0 16 16">
    <path
      fill-rule="evenodd"
      d="M7.78 12.53a.75.75 0 01-1.06 0L2.47 8.28a.75.75 0 010-1.06l4.25-4.25a.75.75 0 011.06 1.06L4.81 7h7.44a.75.75 0 010 1.5H4.81l2.97 2.97a.75.75 0 010 1.06z"
    />
  </svg>
);

export default PokemonModal;
