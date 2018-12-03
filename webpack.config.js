let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    vender: ['react','react-dom'],
    main: path.resolve(__dirname,'src/index.js'),
  },
  output:{
    path: path.resolve(__dirname,'build'),
    filename: '[name].js'
  },
  devtool: 'inline-source-map',
  stats: {
    chunkModules: false,
    modules: false,
    children: false,
  },
  module:{
    rules:[
      {test: /\.js?$/, use: 'babel-loader',},
    ],
  },
  devServer:{
    contentBase: path.join(__dirname,'build'),
    compress: true,
    port: 9000,
    overlay: true,
    open: true,
  },
  plugins:[new HtmlWebpackPlugin({
    template: 'index.html',
  })]
};