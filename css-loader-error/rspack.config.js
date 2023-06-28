module.exports = {
  entry: {
    main: "./src/index.tsx",
  },
  module: {
    rules: [
      {
        test: [/\.png$/],
        type: "asset",
      },
    ],
  },
};
