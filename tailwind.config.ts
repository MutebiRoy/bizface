// tailwind.config.ts
import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    // Add more paths if necessary
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          DEFAULT: '#1DA1F2', // Customize as needed
          dark: '#0d8ddb',
          light: '#66c2ff',
        },
        // Add more custom colors if needed
      },
    },
  },
  plugins: [],
};

export default config;
