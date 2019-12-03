const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const base = require("./webpack.base");
const merge = require("webpack-merge");

module.exports = merge(base, {
  mode: "production",
  plugins: [
    ...base.plugins,
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
      chunkFilename: "[id].css"
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "../",
              hmr: process.env.NODE_ENV === "development"
            }
          },
          "css-loader"
        ]
      }
    ]
  }
});
