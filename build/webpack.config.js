/*
 * @Copyright: Copyright (c) 2021 andyten
 * @Description: webpack默认配置文件
 * <p>
 *  webpack.config使用了node.js环境，遵循了CommonJS规范
 * </p>
 * @Author: andy.ten@tom.com
 * @Date: 2021-04-17 14:33:17
 * @LastEditors: andy.ten@tom.com
 * @LastEditTime: 2021-04-20 00:01:44
 * @Version: 1.0.1
 */

/**
 * 定义常量
 */
const _path = require('path');
const _webpack = require('webpack');
const _webpackUtil = require('./webpack.util');
const _HtmlWebpackPlugin = require('html-webpack-plugin');
/**
 * 导出
 */
module.exports = {
  context: _webpackUtil.join('/src'),
  entry: {
    app: ['babel-polyfill','./app.js'],
    verdor: ['./vendor.js']
  },
  output: {
    path:_webpackUtil.resolve(__dirname, '../dist'),
    filename: '[name].[chunkhash:8].js',
    publicPath: '/'
  },
  mode: 'development',
  devServer: {
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.ejs$/,
        loader: "ejs-loader?variable=data"
      },
      {
        test: /\.js|jsx$/,
        include: [_webpackUtil.join('src')],
        exclude: /(node_modules|bower_components)|.ejs$/,
        loader: 'babel-loader',
        // options: {
        //   presets: ['@babel/preset-env'],
        // }
      },
    ]
  },
  plugins: [
    new _webpack.BannerPlugin('Copyright® xukaixing<andy.ten@tom.com>'),
    new _HtmlWebpackPlugin({
      filename: 'index.html',
      template: _path.join(__dirname, '../index.html'),
      inject: true,
      templateParameters: {
        my_title: 'My App',
        base_url: '/static'
      }
    }),
  ]
}
