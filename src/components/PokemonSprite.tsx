import { css, tw } from 'twind/css';

const PokemonSprite = ({ alt, id }: { alt: string; id: string }) => (
  <div
    class={tw(
      css`
        & {
          aspect-ratio: 1 / 1;
        }
      `
    )}
  >
    <img
      alt={alt}
      class="w-full h-full object-fill"
      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${Number(
        id
      )}.png`}
    />
  </div>
);

export default PokemonSprite;
