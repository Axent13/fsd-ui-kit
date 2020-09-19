const path = require('path');
const webpack = require('webpack');
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
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      },
      {
        test: /\.pug$/,
        use: [
          'pug-loader',
        ],
      },
      {
        test: /\.s?css$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader?name=[path][name].[ext]',
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
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.pug',
      filename: 'index.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/colors-and-types/colors-and-types.pug',
      filename: 'colors-and-types.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/form-elements/form-elements.pug',
      filename: 'form-elements.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/cards/cards.pug',
      filename: 'cards.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/headers-and-footers/headers-and-footers.pug',
      filename: 'headers-and-footers.html',
    })
  ],
};