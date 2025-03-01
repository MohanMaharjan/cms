/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
    },

    keyframes: {
      'border-expand': {
        '0%': { width: '0%' },
        '100%': { width: '100%' },
      },
    },
    animation: {
      'border-expand': 'border-expand 0.3s ease-in-out forwards',
    },
  },

  plugins: [],
};
