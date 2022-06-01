import { Link } from 'solid-app-router';
import { Pokemon } from '../types';
import PokemonSprite from './PokemonSprite';

type PokemonCardProps = Pokemon;

const PokemonCard = (props: PokemonCardProps) => (
  <Link
    href={`/pokemon/${props.id}`}
    class="max-w-sm shadow-xl rounded-3xl text-gray-600 overflow-hidden bg-white transition hover:scale-105 duration-200"
    noScroll
  >
    <div class="flex aspect-1-1.062">
      <PokemonSprite alt={props.name} id={props.id} />
    </div>
    <div class="py-2 px-4 text-center">
      <p class="font-bold text-xl">{props.name}</p>
      <span class="text-sm text-gray-400">#{props.id}</span>
    </div>
  </Link>
);

export default PokemonCard;
