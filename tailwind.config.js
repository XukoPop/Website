/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'dark-bg': '#0a0a0a',
        },
        animation: {
          'flow': 'flow 15s ease infinite',
        },
        keyframes: {
          flow: {
            '0%': { transform: 'rotate(0deg) scale(1.5)' },
            '50%': { transform: 'rotate(180deg) scale(1.8)' },
            '100%': { transform: 'rotate(360deg) scale(1.5)' },
          }
        }
      },
    },
    plugins: [],
  }