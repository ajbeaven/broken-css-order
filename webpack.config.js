const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = () => ({
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(less|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'less-loader'
        ]
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin(),
  ]
});