import { Configuration } from 'twind';
import { css } from 'twind/css';

export const config: Configuration = {
  preflight: (defaults) => css`
    ${defaults};
    html,
    body {
      font-size: clamp(14px, 2vmin, 18px);
      overscroll-behavior-y: none;
    }
    body {
      background-image: radial-gradient(#fff, #fff3),
        url(/src/assets/background.png);
    }
  `,
  theme: {
    extend: {},
  },
  plugins: {
    aspect: (parts) => css`
      & {
        aspect-ratio: ${parts[0]} / ${parts[1]};
      }
    `,
  },
};
