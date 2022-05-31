import { tw } from 'twind/css';
import ColorThief from 'colorthief/dist/color-thief.mjs';
import { createSignal, onMount } from 'solid-js';

const PokemonSprite = (props: { alt: string; id: string }) => {
  let image;

  const [color, setColor] = createSignal([255, 255, 255]);

  const url = () =>
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${Number(
      props.id
    )}.png`;

  onMount(() => {
    const colorThief = new ColorThief();
    image?.addEventListener('load', function () {
      setColor(colorThief.getColor(image));
    });
  });

  return (
    <div
      class={tw(
        'relative flex items-center justify-center self-stretch overflow-hidden'
      )}
    >
      <div
        class={`absolute inset-0 w-full h-full bg-gradient-to-t from-[rgba(${color().join()},0.8)] to-[rgba(${color().join()},0.2)]`}
      ></div>
      <div
        class={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[150%] h-[42%] rounded-t-1/2 bg-gradient-to-t from-[rgba(${color().join()},1)] to-[rgba(${color().join()},0.3)]`}
      ></div>
      <div class={tw('w-[80%] aspect-1-1')}>
        <img
          ref={image}
          loading="lazy"
          alt={props.alt}
          class="relative w-full object-fill"
          src={url()}
          crossorigin="anonymous"
        />
      </div>
    </div>
  );
};

export default PokemonSprite;
