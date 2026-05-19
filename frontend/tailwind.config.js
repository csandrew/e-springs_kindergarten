/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'kindergarten': {
          'primary': '#16a34a',
          'primary-dark': '#15803d',
          'primary-light': '#dcfce7',
          'secondary': '#f59e0b',
          'secondary-light': '#fef3c7',
          'accent': '#3b82f6',
          'text': '#1f2937',
          'text-light': '#6b7280',
          'background': '#f9fafb',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
