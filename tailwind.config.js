module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: {
          dark: '#191928',
          light: '#222231',
        },
        green: {
          dark: '#00a8b0',
          light: '#06b4bc',
        },
        grey: {
          dark: '#727272',
          light: '#7b7b7b',
        },
        red: '#fe424c',
        orange: '#ff9700',
      },
      fontFamily: {
        spartan: ['Spartan', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
