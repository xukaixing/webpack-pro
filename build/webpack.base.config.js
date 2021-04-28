/*
 * @Copyright: Copyright (c) 2021 andyten
 * @Description: webpack默认配置文件
 * <p>
 *  webpack.config使用了node.js环境，遵循了CommonJS规范
 * </p>
 * @Author: andy.ten@tom.com
 * @Date: 2021-04-17 14:33:17
 * @LastEditors: andy.ten@tom.com
 * @LastEditTime: 2021-04-27 10:57:14
 * @Version: 1.0.4
 */
'use strict';

/**
 * 定义常量
 */
const _path = require('path');
const _webpack = require('webpack');
const _webpackUtil = require('./webpack.util');
const _webpackConfig = require('../config/index');
const _HtmlWebpackPlugin = require('html-webpack-plugin');
const _CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
/**
 * 导出
 */
module.exports = {
  context: _webpackUtil.join('/src'),
  entry: {
    app: ['babel-polyfill', './app.js'],
    verdor: ['./vendor.js']
  },
  output: {
    path: _webpackUtil.resolve(__dirname, '../dist'),
    filename: '[name].[chunkhash:8].js',
    publicPath: _webpackConfig.base.assetsPublicPath()
  },
  mode: 'development',
  devServer: {
    port: _webpackConfig.dev.devServerPort(),
    publicPath: _webpackConfig.base.assetsPublicPath(),
    overlay: {
      warnings: false,
      errors: true
    }
  },
  module: {
    rules: [
      {
        test: /\.js|jsx$/,
        enforce: 'pre',
        loader: 'eslint-loader',
        include: [_webpackUtil.join('src')],
        exclude: /(node_modules|bower_components)|.ejs$/,
        options: {
          formatter: require('eslint-friendly-formatter'),
          emitWarning: true
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.ejs$/,
        loader: 'ejs-loader?variable=data'
      },
      {
        test: /\.js|jsx$/,
        include: [_webpackUtil.join('src')],
        exclude: /(node_modules|bower_components)|.ejs$/,
        loader: 'babel-loader'
        // options: {
        //   presets: ['@babel/preset-env'],
        // }
      }
    ]
  },
  plugins: [
    new _webpack.BannerPlugin(_webpackConfig.base.bannerPluginBanner()),
    new _HtmlWebpackPlugin({
      filename: _webpackConfig.base.htmlPluginFilename(),
      template: _path.join(__dirname, _webpackConfig.base.htmlPluginTemplate()),
      inject: true,
      favicon: _webpackUtil.join(_webpackConfig.base.htmlPluginFavicon()),
      minify: {
        removeComments: true,
        collapseWhitespace: false,
        removeAttributeQuotes: false,
        minifyCSS: false
      },
      chunksSortMode: 'dependency',
      templateParameters: {
        myTitle: _webpackConfig.base.htmlPluginTemplateParametersTitle(),
        baseUrl: _webpackConfig.base.htmlPluginTemplateParametersBaseUrl()
      }
    }),
    new _CopyWebpackPlugin([
      {
        from: _webpackUtil.resolve(__dirname, '..', _webpackConfig.base.assetsSubDirectory()),
        to: _webpackConfig.base.assetsSubDirectory(),
        ignore: ['.*']
      }
    ]),
    new CleanWebpackPlugin({
      verbose: true,
      cleanOnceBeforeBuildPatterns: ['**/*', _webpackConfig.build.buildPath()]
    })
  ]
};