import { Pokemon } from "../types";
import PokemonSprite from "./PokemonSprite";

type PokemonCardProps = Pokemon & {
  handleClick: (id: string) => void;
};

// https://v1.tailwindcss.com/components/cards
const PokemonCard = ({ handleClick, ...pokemon }: PokemonCardProps) => {
  const { id, name } = pokemon;

  return (
    <>
      <button
        class="max-w-sm rounded overflow-hidden shadow-lg focus:border-1 focus:border-gray-200 hover:border-1 hover:border-gray-200 focus:shadow-xl hover:shadow-xl"
        onClick={() => handleClick(id)}
      >
        <PokemonSprite alt={name} id={id} />
        <div class="px-6 py-4 text-center">
          <p class="font-bold text-xl">{name}</p>
          <span class="text-sm text-gray-400">#{id}</span>
        </div>
      </button>
    </>
  );
};

export default PokemonCard;
