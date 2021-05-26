module.exports = {
  mode:"jit",
  purge: [
    './public/**/*.html',
     './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        'brand-lightest':'#EAF9E7',
        'brand-light':'#C0E6BA',
        'brand':'#4CA771',
        'brand-dark':'#013237'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
