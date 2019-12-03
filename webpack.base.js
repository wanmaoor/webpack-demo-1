const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  devtool: "inline-source-map",
  output: {
    filename: "[name].[contenthash].js",
    path: resolve(__dirname, "dist")
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "webpack demo",
      template: "src/assets/test.html"
    })
  ],
  devServer: {
    contentBase: "./dist"
  },
  module: {
    rules: [
      
    ]
  }
};