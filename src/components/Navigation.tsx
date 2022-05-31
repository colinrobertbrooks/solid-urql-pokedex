import { css, tw } from 'twind/css';
import { PokemonLogo } from './PokemonLogo';

// backdrop-filter: blur(10px);

const Navigation = () => (
  <nav class={tw('flex items-center flex-wrap p-4 sticky top-0 mb-12 z-10')}>
    <div
      class={tw(
        'absolute w-[110vw] min-w-[980px] transform left-1/2 -translate-x-[50%]',
        css`
          & svg {
            filter: drop-shadow(0 0 1rem rgb(0 0 0 / 0.2));
            fill: #fff;
          }
        `
      )}
    >
      <svg class="w-full" viewBox="0 0 981 86">
        <path d="M0.714294 68.3651V17.3651C0.714294 7.97621 8.32543 0.365051 17.7143 0.365051H963.714C973.103 0.365051 980.714 7.97621 980.714 17.365V68.3651C980.714 77.7539 973.103 85.3651 963.714 85.3651H692.18C689.818 85.3651 687.483 84.8731 685.322 83.9204L644.76 66.038C642.599 65.0854 640.264 64.5934 637.902 64.5934H319.968C317.607 64.5934 315.271 65.0854 313.111 66.038L272.549 83.9204C270.388 84.8731 268.052 85.3651 265.691 85.3651H17.7143C8.32545 85.3651 0.714294 77.7539 0.714294 68.3651Z" />
      </svg>
    </div>
    <div
      class={tw(
        'mx-auto -mb-14 max-w-[62%]',
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
