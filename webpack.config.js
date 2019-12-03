const base = require('./webpack.base')
const merge = require("webpack-merge");

module.exports = merge(base, {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
});

