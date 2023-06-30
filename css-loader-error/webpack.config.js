module.exports = {
  mode: "development",
  entry: {
    main: "./src/index.tsx",
  },
  experiments: {
    css: true,
  },
  module: {
    rules: [
      {
        test: [/\.png$/],
        type: "asset/resource",
      },
    ],
  },
};
