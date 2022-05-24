import { Pokemon } from "../types";
import PokemonSprite from "./PokemonSprite";

type PokemonModalProps = Pokemon & {
  handleClose: () => null;
};

// TODO: focus trap
const PokemonModal = ({ handleClose, ...pokemon }: PokemonModalProps) => {
  const { id, name } = pokemon;

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
          <div class="text-center mb-3 md:mb-0">
            <PokemonSprite {...pokemon} />
            <h2 class="font-bold text-xl">{name}</h2>
            <span class="text-sm text-gray-400">#{id}</span>
          </div>
          <div class="border-t md:border-t-0 md:border-l">
            <div class="px-6 py-4">TODO</div>
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
