import { css, tw } from 'twind/css';
import { PokemonLogo } from './PokemonLogo';

// backdrop-filter: blur(10px);

const Navigation = () => (
  <nav class={tw('sticky top-0 z-10 mb-6 flex')}>
    <svg
      viewBox="0 0 961 86"
      width="100%"
      height="6rem"
      preserveAspectRatio="none"
      class={tw(
        css`
          & {
            filter: drop-shadow(0 0 1rem rgb(0 0 0 / 0.2));
            fill: #fff;
          }
        `
      )}
    >
      <path
        d="M0.325562 85.0412V0.0411987H960.326V85.0412H756.382C754.118 85.0412 751.88 84.5608 749.815 83.6317L709.925 65.6791C707.861 64.7499 705.623 64.2695 703.359 64.2695H254.215C251.951 64.2695 249.713 64.7499 247.649 65.6791L207.759 83.6317C205.694 84.5608 203.456 85.0412 201.192 85.0412H0.325562Z"
        fill="white"
      />
    </svg>
    <div
      class={tw(
        'absolute top-4 w-1/6 min-w-[16rem] w-24 max-w-[50%] left-1/2 transform -translate-x-1/2',
        css`
          & svg {
            filter: drop-shadow(0 0.3rem 0.2rem rgb(0 0 0 / 0.4));
          }
        `
      )}
    >
      <PokemonLogo />
    </div>
  </nav>
);

export default Navigation;
