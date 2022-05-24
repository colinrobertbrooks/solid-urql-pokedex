import { Pokemon } from "../types";

// https://github.com/PokeAPI/sprites
const PokemonSprite = ({ id, name }: Pokemon) => (
  <img
    class="w-full"
    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${Number(
      id
    )}.png`}
    alt={name}
  />
);

export default PokemonSprite;
