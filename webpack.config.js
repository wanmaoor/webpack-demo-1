const {resolve} = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "[name].[contenthash].js",
    path: resolve(__dirname, "dist") //__dirname 代表当前目录，path.resolve()将一段路径解析为绝对路径
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "webpack demo",
      template: "src/assets/test.html"
    })
  ]
};
