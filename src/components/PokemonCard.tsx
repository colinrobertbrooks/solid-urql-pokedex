import { Link } from 'solid-app-router';
import { Pokemon } from '../types';
import PokemonSprite from './PokemonSprite';

type PokemonCardProps = Pokemon;

const PokemonCard = ({ ...pokemon }: PokemonCardProps) => {
  const { id, name } = pokemon;
  return (
    <Link
      href={`/pokemon/${id}`}
      class="max-w-sm shadow-xl rounded-3xl text-gray-600 overflow-hidden bg-white transition hover:scale-105 duration-200"
      noScroll
    >
      <div class="flex aspect-1-1.062">
        <PokemonSprite alt={name} id={id} />
      </div>
      <div class="py-2 px-4 text-center">
        <p class="font-bold text-xl">{name}</p>
        <span class="text-sm text-gray-400">#{id}</span>
      </div>
    </Link>
  );
};

export default PokemonCard;
