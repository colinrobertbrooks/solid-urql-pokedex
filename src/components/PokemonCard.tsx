import { createSignal, Show } from "solid-js";
import PokemonModal from "./PokemonModal";
import PokemonSprite from "./PokemonSprite";

// https://v1.tailwindcss.com/components/cards
const PokemonCard = ({ id, name }: { id: string; name: string }) => {
  const [modalIsOpen, setModalIsOpen] = createSignal(false);

  return (
    <>
      <Show when={modalIsOpen()}>
        <PokemonModal
          id={id}
          name={name}
          handleClose={() => setModalIsOpen(false)}
        />
      </Show>
      <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <PokemonSprite id={id} name={name} />
        <div class="px-6 py-4 text-center">
          <button
            class="font-bold text-xl focus:underline hover:underline"
            onClick={() => setModalIsOpen(true)}
          >
            {name}
          </button>
        </div>
      </div>
    </>
  );
};

export default PokemonCard;
