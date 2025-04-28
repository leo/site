import type { Config } from 'tailwindcss';

export default {
  content: ['./**/*.{ts,tsx}'],
  theme: {
    extend: {
      screens: {
        thin: { raw: '(max-height: 390px) and (min-width: 768px)' },
      },
    },
  },
} satisfies Config;
