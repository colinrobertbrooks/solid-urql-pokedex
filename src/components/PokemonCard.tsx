// https://v1.tailwindcss.com/components/cards
const PokemonCard = ({ id, name }: { id: string; name: string }) => (
  <div class="max-w-sm rounded overflow-hidden shadow-lg">
    <img
      class="w-full"
      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${Number(
        id
      )}.png`}
      alt={name}
    />
    <div class="px-6 py-4">
      <div class="font-bold text-xl text-center">{name}</div>
    </div>
  </div>
);

export default PokemonCard;
