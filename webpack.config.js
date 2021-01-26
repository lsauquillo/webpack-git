const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  mode: 'development',
  optimization: {
    minimizer: [
      new OptimizeCssAssetsPlugin()
    ]
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'html-loader',
        options: {
          attributes: false,
          minimize: false
        }
      },

      {
        test: /\.css$/,
        exclude: /styles\.css$/,
        use: [          
          'style-loader',
          'css-loader'
        ]
      }, 

      {
        test: /styles\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      }
    ]
  },

  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: 'index.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      ignoreOrder: false
    })
  ]
  
};