module.exports = {
  entry: {
    main: "./src/index.tsx",
  },
  module: {
    rules: [
      // {
      //   test: /\.css$/i,
      //   use: ["style-loader", "css-loader"],
      // },
      {
        test: [/\.png$/],
        type: "asset",
      },
    ],
  },
};
