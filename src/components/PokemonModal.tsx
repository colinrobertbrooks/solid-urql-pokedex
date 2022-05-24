import { gql } from "@urql/core";
import { Accessor, Show } from "solid-js";
import { createQuery } from "solid-urql";
import { usePokemonContext } from "../contexts";
import Loader from "./Loader";
import PokemonSprite from "./PokemonSprite";

// TODO: add fields
const POKEMON_QUERY = gql`
  query Pokemon($id: ID!) {
    pokemon(id: $id) {
      id
      name
    }
  }
`;

// NOTE: preferred solution
const PokemonModalWithPause = () => {
  const { selectedPokemonId, setSelectedPokemonId } = usePokemonContext();

  const [fetchedResult, fetchState] = createQuery({
    query: POKEMON_QUERY,
    variables: { id: selectedPokemonId() },
    pause: !selectedPokemonId(), // NOTE: this isn't working (query never executes)
  });

  return (
    <Show when={selectedPokemonId()}>
      <ModalContent
        selectedPokemonId={selectedPokemonId}
        fetchState={fetchState}
        fetchedResult={fetchedResult}
        handleClose={() => setSelectedPokemonId(null)}
      />
    </Show>
  );
};

// NOTE: workaround solution
const PokemonModalWithoutPause = () => {
  const { selectedPokemonId, setSelectedPokemonId } = usePokemonContext();

  return (
    <Show when={selectedPokemonId()}>
      <PokemonModalWithoutPauseInner
        selectedPokemonId={selectedPokemonId}
        handleClose={() => setSelectedPokemonId(null)}
      />
    </Show>
  );
};

const PokemonModalWithoutPauseInner = ({
  selectedPokemonId,
  handleClose,
}: {
  selectedPokemonId: Accessor<string | null>;
  handleClose: () => void;
}) => {
  const [fetchedResult, fetchState] = createQuery({
    query: POKEMON_QUERY,
    variables: { id: selectedPokemonId() },
  });

  return (
    <ModalContent
      selectedPokemonId={selectedPokemonId}
      fetchedResult={fetchedResult}
      fetchState={fetchState}
      handleClose={handleClose}
    />
  );
};

// TODO: focus trap
const PokemonModal = () => {
  const withPause = false; // NOTE: toggle me
  if (withPause) return <PokemonModalWithPause />;
  return <PokemonModalWithoutPause />;
};

/*
 *  ui
 */
const ModalContent = ({
  selectedPokemonId,
  fetchedResult = {},
  fetchState,
  handleClose,
}: {
  selectedPokemonId: Accessor<string | null>;
  fetchedResult: any; // TEMP
  fetchState: any; // TEMP
  handleClose: () => void;
}) => {
  return (
    <div class="fixed inset-0 bg-gray-600 bg-opacity-70 overflow-y-auto h-full w-full">
      <div class="relative top-20 mx-auto p-5 border w-10/12 shadow-lg rounded-md bg-white">
        <button
          aria-label="Close"
          class="absolute top-0 right-0 p-2 text-gray-400 hover:text-gray-800"
          onClick={handleClose}
        >
          <CloseIcon size={14} />
        </button>
        <div class="md:grid md:grid-cols-2 md:gap-3">
          <div>
            <PokemonSprite
              alt={fetchedResult()?.name || "Pokémon"}
              id={selectedPokemonId()!}
            />
          </div>
          <div class="border-t md:border-t-0 md:border-l">
            <div class=" h-full relative px-6 py-4">
              <Show
                when={!fetchState().fetching && fetchedResult()?.pokemon}
                fallback={
                  <div class="min-h-[200px]">
                    <Loader size={80} />
                  </div>
                }
              >
                {/* TODO: render added fields */}
                <code class="break-words">
                  {JSON.stringify(fetchedResult()?.pokemon)}
                </code>
              </Show>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CloseIcon = ({ size }: { size: number }) => (
  <svg
    aria-hidden="true"
    height={size}
    stroke="currentColor"
    stroke-width="8"
    viewBox="0 0 50 50"
    width={size}
    xmlns="http://www.w3.org/2000/svg"
  >
    <line x1="50" y2="50" />
    <line x2="50" y2="50" />
  </svg>
);

export default PokemonModal;
