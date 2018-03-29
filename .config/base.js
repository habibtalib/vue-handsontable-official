'use strict';

const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports.create = function create(hotType) {
  const config = {
    devtool: 'source-map',
    output: {
      path: path.resolve(__dirname, './../dist-' + hotType + '/'),
      filename: '[name].js',
      library: 'HotTable',
      libraryTarget: 'umd',
      libraryExport: 'default'
    },
    module: {
      loaders: [
        {
          test: /(\.js)$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel-loader',
          query: {
            presets: ['env'],
          }
        },
        {
          test: /(\.vue)$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'vue-loader',
          query: {
            presets: ['vue-style-loader'],

          }
        }
      ]
    },
    plugins: [
      new UglifyJsPlugin({
        include: /\.min\.js$/
      }),
    ],
  };

  return config;
};