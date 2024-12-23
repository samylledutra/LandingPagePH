/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backdropBlur: {
        custom: '1px',
      },
      spacing: {
        '51p': '50.05%',
      },
      colors: {
        customBlue: '#00a3ff',
        customBlueBorder: 'rgba(4, 110, 170, 0.31)',
      },
      
    },
  },
  plugins: [],
}