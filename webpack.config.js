const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
  },
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: [
          'pug-loader',
        ],
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader',
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.pug',
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/colors-and-types/colors-and-types.pug',
      filename: 'colors-and-types.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/form-elements.pug',
      filename: 'form-elements.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/cards.pug',
      filename: './cards.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/headers-and-footers.pug',
      filename: 'headers-and-footers.html'
    })
  ],
};