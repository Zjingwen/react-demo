let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname,'src/index.js'),
  output:{
    path: path.resolve(__dirname,'build'),
    filename: '[name].js'
  },
  devtool: 'inline-source-map',
  module:{
    rules:[
      {test: /\.js?$/, use: 'babel-loader',},
    ],
  },
  devServer:{
    contentBase: path.join(__dirname,'build'),
    compress: true,
    port: 9000,
  },
  plugins:[new HtmlWebpackPlugin({
    template: 'index.html',
    open: true,
  })]
};