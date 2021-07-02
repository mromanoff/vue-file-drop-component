module.exports = {
  plugins: {
    "postcss-preset-env": {
      stage: 1,
      importFrom: "./src/assets/css/theme.css",
    },
    "rucksack-css": {},
  },
};
