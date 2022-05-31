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
