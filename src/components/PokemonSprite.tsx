

// https://github.com/PokeAPI/sprites
const PokemonSprite = ({ alt, id }: { alt: string; id: string }) => (
  <img
    alt={alt}
    class="w-full"
    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${Number(
      id
    )}.png`}
  />
);

export default PokemonSprite;
