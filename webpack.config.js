const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (argv) => {
  return {
    mode: 'production',
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader'
          ]
        },
        {
          test: /\.less$/,
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
  };
};