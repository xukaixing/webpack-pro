/*
 * @Copyright: Copyright (c) 2021 andyten
 * @Description: webpack打包配置常量工具
 * <p>
 *  不同的项目，只需要修改config配置内容，而无须修改webpack.config
 * </p>
 * @Author: andy.ten@tom.com
 * @Date: 2021-04-21 10:05:12
 * @LastEditors: andy.ten@tom.com
 * @LastEditTime: 2021-04-26 21:34:21
 * @Version: 1.0.1
 */
'use strict';

const _assetsPublicPath = '/';
const _assetsSubDirectory = 'static';
const _buildPath = 'dist';

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
    bannerPluginBanner: () => _bannerPluginBanner,
    // path
    assetsPublicPath: () => _assetsPublicPath,
    assetsSubDirectory: () => _assetsSubDirectory,
    htmlPluginFilename: () => _htmlPluginFilename,
    htmlPluginTemplate: () => _htmlPluginTemplate,
    htmlPluginTemplateParametersBaseUrl: () => _assetsPublicPath + _assetsSubDirectory,
    htmlPluginTemplateParametersTitle: () => _htmlPluginTemplateParametersTitle,
    htmlPluginFavicon: () => _htmlPluginFavicon
  },
  dev: {
    devServerPort: () => _devServerPort
  },
  build: {
    buildPath: () => _buildPath
  }
};
