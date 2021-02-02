const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'production',
  output: {
    filename: 'main.[contentHash].js'
  },
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
        test: /\.(jpg|png|svg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              esModule: false,
	            name: 'assets/[name].[ext]'	
            }
          }
        ]
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
      filename: '[name].[contentHash].css',
      ignoreOrder: false
    }),
    new CopyPlugin([
      {
        from: 'src/assets', to: 'assets/'
      }
    ]),
  ]
  
};
