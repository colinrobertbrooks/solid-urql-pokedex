import { tw } from 'twind/css';
import ColorThief from 'colorthief/dist/color-thief.mjs';
import { createEffect, createSignal } from 'solid-js';

const colorCache: Record<string, []> = {};

const PokemonSprite = (props: { alt: string; id: string }) => {
  let image: HTMLImageElement;

  const [color, setColor] = createSignal([225, 225, 225]);

  const url = () =>
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${Number(
      props.id
    )}.png`;

  createEffect(() => {
    let cacheHit;
    if ((cacheHit = colorCache[url()])) return setColor(cacheHit);
    const colorThief = new ColorThief();
    image?.addEventListener('load', function () {
      const color = colorThief.getColor(image);
      colorCache[url()] = color;
      setColor(color);
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
