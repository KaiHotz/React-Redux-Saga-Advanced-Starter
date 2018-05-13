var webpack = require('webpack')
var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')

const VENDOR_LIBS = [
  'react',
  'redux',
  'axios',
  'history',
  'reselect',
  'react-dom',
  'recompose',
  'immutable',
  'prop-types',
  'react-redux',
  'redux-saga',
  'redux-immutable',
  'react-router-dom',
  'react-router-redux'
]

module.exports = {
  entry: {
    bundle: ['babel-polyfill', './src/index.js'],
    vendor: VENDOR_LIBS
  },
  output: {
    path: path.resolve(__dirname, '../build'),
    chunkFilename: '[name].[hash].js',
    filename: '[name].[hash].js'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, '../src'),
    hot: true,
    inline: true,
    port: 3000,
    historyApiFallback: true,
    compress: true,
    open: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(scss|sass|css)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: ['file-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  optimization: {
    runtimeChunk: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ]
}
