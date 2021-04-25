/*
 * @Copyright: Copyright (c) 2021 andyten
 * @Description: webpack打包配置常量工具
 * <p>
 *  不同的项目，只需要修改config配置内容，而无须修改webpack.config
 * </p>
 * @Author: andy.ten@tom.com
 * @Date: 2021-04-21 10:05:12
 * @LastEditors: andy.ten@tom.com
 * @LastEditTime: 2021-04-25 00:00:45
 * @Version: 1.0.1
 */
'use strict';

const _assetsPublicPath = '/';
const _assetsSubDirectory = 'static';
const _buildPath = './dist';

/**
 * 定义BannerPlugin插件常量
 */
const _bannerPluginBanner = 'Copyright® xukaixing<andy.ten@tom.com>';

/**
 * devServer配置
 */
const _devServerPort = '8081';
/**
 * 定义HtmlWebpackPlugin插件常量
 */
const _htmlPluginFilename = 'index.html';
const _htmlPluginTemplate = '../index.html';
const _htmlPluginFavicon = 'favicon.ico';
const _htmlPluginTemplateParametersTitle = 'My App';

/**
 * 导出
 */
module.exports = {
  base: {
    bannerPluginBanner: () => {
      return _bannerPluginBanner;
    },
    // path
    assetsPublicPath: () => {
      return _assetsPublicPath;
    },
    assetsSubDirectory: () => {
      return _assetsSubDirectory;
    },
    htmlPluginFilename: () => {
      return _htmlPluginFilename;
    },
    htmlPluginTemplate: () => {
      return _htmlPluginTemplate;
    },
    htmlPluginTemplateParametersBaseUrl: () => {
      return _assetsPublicPath + _assetsSubDirectory;
    },
    htmlPluginTemplateParametersTitle: () => {
      return _htmlPluginTemplateParametersTitle;
    },
    htmlPluginFavicon: () => {
      return _htmlPluginFavicon;
    }
  },
  dev: {
    devServerPort: () => {
      return _devServerPort;
    }
  },
  build: {
    buildPath: () => {
      return _buildPath;
    }
  }
};
