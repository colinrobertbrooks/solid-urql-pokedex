import { css, tw } from 'twind/css';

const PokemonSprite = (props: { alt: string; id: string }) => {
  return (
    <div
      class={tw(
        'flex items-center',
        css`
          & {
            aspect-ratio: 1 / 1.2;
          }
        `
      )}
    >
      <img
        alt={props.alt}
        class="w-full object-fill"
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${Number(
          props.id
        )}.png`}
      />
    </div>
  );
};

export default PokemonSprite;
