const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

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
  'react-router-redux',
]

module.exports = {
  entry: {
    bundle: ['babel-polyfill', './src/index.jsx'],
    vendor: VENDOR_LIBS,
  },
  output: {
    path: path.resolve(__dirname, '../build'),
    chunkFilename: '[name].[hash].js',
    filename: '[name].[hash].js',
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        use: 'eslint-loader',
        exclude: /node_modules/,
        include: path.src,
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(scss|sass|css)$/,
        use: [
          {
            loader: 'style-loader',
          },
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              minimize: true,
              importLoaders: 2,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: './config/postcss.config.js',
              },
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: ['file-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  optimization: {
    runtimeChunk: true,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.[contenthash].css',
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ],
}
