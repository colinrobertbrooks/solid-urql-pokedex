import { Portal } from "solid-js/web";
import { POKEMON_MODAL_ID } from "../constants";
import PokemonSprite from "./PokemonSprite";

// TODO: focus trap
const PokemonModal = ({
  id,
  name,
  handleClose,
}: {
  id: string;
  name: string;
  handleClose: () => void;
}) => (
  <Portal mount={document.getElementById(POKEMON_MODAL_ID) as HTMLElement}>
    <div class="fixed inset-0 bg-gray-600 bg-opacity-70 overflow-y-auto h-full w-full">
      <div class="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        <button
          aria-label="Close"
          class="absolute top-0 right-0 p-2 text-gray-500 hover:text-gray-900"
          onClick={handleClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 50 50"
            stroke="currentColor"
            stroke-width="8"
          >
            <line x2="50" y2="50" />
            <line x1="50" y2="50" />
          </svg>
        </button>
        <div class="mt-3 ">
          <PokemonSprite id={id} name={name} />
          <h2 class="font-bold text-xl text-center">{name}</h2>
        </div>
      </div>
    </div>
  </Portal>
);

export default PokemonModal;
