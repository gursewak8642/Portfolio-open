module.exports = {
  purge: ["./pages/**/*.tsx", "./components/**/*.tsx"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    fontFamily: {
      kaushan: ["Kaushan Script"],
    },
    boxShadow: {
      "custom-light": " 8px 8px 18px 2px rgba(38,0,35,0.7)",
      '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      //  "custom-light":" 0 0 10px #313131",
    },

    extend: {
      colors: {
        greenCustom: {
          // DEFAULT: '#00f260',
          // DEFAULT: '#004526',
          DEFAULT: "#009150",
        },
        blueCustom: {
          // backgroundDark:"#311D3F",
          // backgroundDark: "#160F30",
          backgroundDark: "#082032",
          // backgroundLight:"#112D4E"
          // backgroundLight: "#1A2849",
          // backgroundLight: "#184D47",
          backgroundLight: "#261C2C",
          backgroundLight: "#0A1931",
        },
        pinkCustom: {
          // DEFAULT: "#900C3F",
          // DEFAULT: "#008080",
          // DEFAULT: "#E94560",
          // DEFAULT: "#E02401",
          DEFAULT: "#009150",
        },
        darkButton:{
          blue:"#000b48",
          green:"#024a26"
        }
      },
      animation: {
        'bounce-custom': "bounce 4s infinite",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar'),

  ],
};
