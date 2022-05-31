import { css, tw } from 'twind/css';
import { PokemonLogo } from './PokemonLogo';

const Navigation = () => (
  <nav
    class={tw(
      'flex items-center flex-wrap bg-white p-4 border-b shadow-2xl sticky top-0 mb-12 z-10 bg-opacity-40',
      css`
        & {
          backdrop-filter: blur(10px);
        }
      `
    )}
  >
    <div
      class={tw(
        'mx-auto -mb-14 max-w-[62%]',
        css`
          & svg {
            filter: drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4));
          }
        `
      )}
    >
      <PokemonLogo />
    </div>
  </nav>
);

export default Navigation;
