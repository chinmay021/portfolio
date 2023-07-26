/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        rotate: {
          from: {
            transform: "rotate(0deg)",
          },
          "50%": {
            transform: "rotate(180deg) scale(1,1.5)",
          },

          to: {
            transform: "rotate(360deg)",
          },
        },
      },
      animation: {
        rotate: "rotate 20s infinite",
      },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        Satisfy: ["Satisfy", "cursive"],
        Ubuntu: ["Ubuntu", "sans-serif"],
      },
      backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
        '50%': '50%',
        '16': '4rem',
        
      }
    },
  },
  plugins: [],
};
