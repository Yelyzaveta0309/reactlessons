const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const webpack = require("webpack");

module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './build'),
  },
  resolve: {
    extensions: ['.jsx', '.js']
  },
  devtool: 'eval-source-map',
  // devServer: {
  //   static: './build',
  //   hot: true,
  // },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css?$/i,
        use: [
          'style-loader',
          'css-loader'
        ],
      }
    ]
  },
  // externals: {
  //   'react': 'React'
  // },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ]
}