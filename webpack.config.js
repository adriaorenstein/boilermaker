const path = require("path");

module.exports = {
  entry: "./index.js", //assumes your entry point is the index.js in the root of your project folder
  output: {
    path: __dirname, //assumes your bundle.js will also be in the root of your project folder (dirname is absolute path of current file)
    filename: "./public/bundle.js",
  },
  mode: "development",
  devtool: "source-map", //a way to map code within a compressed file back to its original position in a source file (for easy debugging)
  module: {
    rules: [
      {
        test: /js?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};
