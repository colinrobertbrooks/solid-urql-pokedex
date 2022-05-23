const PokemonSprite = ({ id, name }: { id: string; name: string }) => (
  <img
    class="w-full"
    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${Number(
      id
    )}.png`}
    alt={name}
  />
);

export default PokemonSprite;
