module.exports = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      screens: {
        thin: { raw: '(max-height: 390px) and (min-width: 768px)' },
      },
    },
  },
};
