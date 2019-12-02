const {resolve} = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
      chunkFilename: "[id].css"
    })
  ],
  devServer: {
    contentBase: "./dist"
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // you can specify a publicPath here
              // by default it uses publicPath in webpackOptions.output
              publicPath: "../",
              hmr: process.env.NODE_ENV === "development"
            }
          },
          "css-loader"
        ]
      }
    ]
  }
};
