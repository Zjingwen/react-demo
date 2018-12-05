let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    vender: ['react','react-router-dom','react-dom'],
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
  resolve:{
    extensions: [".js", ".css"],
    alias:{
      '@Component': path.resolve(__dirname,'src/component/'),
    }
  },
  module:{
    rules:[
      {test: /\.js?$/, use: 'babel-loader',},
      {test: /\.css?$/, use: ['style-loader','css-loader'],},
    ],
  },
  devServer:{
    compress: true,
    port: 9000,
    overlay: {
      warnings: true,
      errors: true
    },
    open: true,
    historyApiFallback: true,
    watchOptions: {
      poll: true
    },
  },
  plugins:[new HtmlWebpackPlugin({
    template: 'index.html',
  })]
};