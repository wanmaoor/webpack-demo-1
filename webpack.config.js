const base = require('./webpack.base')
module.exports = {
  ...base,
  mode: "development",
  module: {
    
    rules: [
      ...base.module.rules,
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
};
