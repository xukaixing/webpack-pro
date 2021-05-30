/*
 * @Copyright: Copyright (c) 2021 andyten
 * @Description: webpack默认配置文件
 * <p>
 *  webpack.config使用了node.js环境，遵循了CommonJS规范
 * </p>
 * @Author: andy.ten@tom.com
 * @Date: 2021-04-17 14:33:17
 * @LastEditors: andy.ten@tom.com
 * @LastEditTime: 2021-05-30 14:49:11
 * @Version: 1.0.5
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
const _MiniCssExtractPlugin = require('mini-css-extract-plugin');
const _TerserPlugin = require('terser-webpack-plugin');
const _OptimizeCss = require('optimize-css-assets-webpack-plugin');

/**
 * 导出
 */
module.exports = {
  context: _webpackUtil.join('/src'),
  entry: {
    app: ['./app.js'],
    app2: ['./app2.js']
  },
  devtool: _webpackConfig.build.productionSourceMap() ? _webpackConfig.build.devTool() : false,
  output: {
    path: _webpackUtil.resolve(__dirname, '../dist'),
    publicPath: _webpackConfig.base.assetsPublicPath(),
    filename: _webpackUtil.assetsPath('js/[name].[chunkhash:8].js'),
    chunkFilename: _webpackUtil.assetsPath('js/[name].[chunkhash:8].js')
  },
  mode: 'production',
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
        use: [_MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          _MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: [
          _MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'less-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.ejs$/,
        loader: 'ejs-loader?variable=data'
      },
      {
        test: /\.js|jsx$/,
        include: [_webpackUtil.join('src')],
        exclude: /(node_modules|bower_components)|.ejs$/,
        loader: 'babel-loader',
        options: {
          cacheDirectory: true
        }
      },
      {
        test: /\.(png|jpe?g|svg|gif|ico)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: _webpackConfig.dev.urlLoaderLimit(),
          name: _webpackUtil.assetsPath('/img/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  optimization: {
    minimize: true,
    minimizer: [new _TerserPlugin({
      cache: true,
      sourceMap: false,
      parallel: true, // 多进程
      extractComments: true, // 移除注释
      terserOptions: {
        ecma: undefined,
        warnings: false,
        parse: {},
        compress: {
          // eslint-disable-next-line camelcase
          drop_console: true,
          // eslint-disable-next-line camelcase
          drop_debugger: false,
          // eslint-disable-next-line camelcase
          pure_funcs: ['console.log'] // 移除console
        }
      }
    })],
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendors: {
          name: 'app.vendors',
          test: /node_modules/,
          priority: -10,
          chunks: 'initial'
        },
        components: {
          name: 'app.components',
          test: _webpackUtil.resolve('src/components'),
          minChunks: 2,
          priority: 10,
          reuseExistingChunk: true
        }
      }
    }
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
        from: _webpackUtil.resolve(__dirname, '..', _webpackConfig.base.staticSubDirectory()),
        to: _webpackConfig.base.staticSubDirectory(),
        ignore: ['.*']
      }
    ]),
    new _MiniCssExtractPlugin({
      filename: _webpackUtil.assetsPath('/css/[name].[contenthash:8].css'),
      chunkFilename: _webpackUtil.assetsPath('/css/[name].[contenthash:8].css')
    }),
    new _OptimizeCss({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require('cssnano'), // 引入cssnano配置压缩选项
      cssProcessorPluginOptions: {
        preset: ['default', { discardComments: { removeAll: true }}]
      },
      cssProcessorOptions: {
        map: {
          inline: false,
          annotation: true
        }
      },
      safe: true,
      autoprefixer: false,
      canPrint: true
    }),
    new CleanWebpackPlugin({
      verbose: true,
      cleanOnceBeforeBuildPatterns: ['**/*', _webpackConfig.build.buildPath()]
    })
  ]
};
