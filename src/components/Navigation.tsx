import { css, tw } from 'twind/css';
import { PokemonLogo } from './PokemonLogo';

// backdrop-filter: blur(10px);

const Navigation = () => (
  <nav class={tw('sticky top-0 z-10 mb-6 flex')}>
    <svg
      viewBox="0 0 981 86"
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
        d="M0.714294 85.3651V0.365051H980.714V85.3651H751.018C749.414 85.3651 747.82 85.1239 746.288 84.6498L683.795 65.3087C682.263 64.8345 680.668 64.5934 679.064 64.5934H278.807C277.203 64.5934 275.608 64.8345 274.076 65.3087L211.583 84.6498C210.051 85.1239 208.456 85.3651 206.853 85.3651H0.714294Z"
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
