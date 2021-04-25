/*
 * @Copyright: Copyright (c) 2021 andyten
 * @Description: webpack打包工具类
 * <p>
 *  使用es5语法
 * </p>
 * @Author: andy.ten@tom.com
 * @Date: 2021-04-19 15:24:00
 * @LastEditors: andy.ten@tom.com
 * @LastEditTime: 2021-04-25 00:25:03
 * @Version: 1.0.3
 */
'use strict';

/**
 * 定义常量
 */
const _path = require('path');

/**
 * 返回join绝对路径方法
 * @param {...any} _path
 * @returns
 */
const _join = function(..._vPath) {
  const vPath = _path.join(__dirname, '..', ..._vPath);
  return vPath;
};

/**
 * 返回resolve绝对路径方法
 * @param  {...any} _vPath
 * @returns
 */
const _resolve = function(..._vPath) {
  const vPath = _path.resolve(__dirname, ..._vPath);
  return vPath;
};


/**
 * 导出
 */
module.exports = {
  join: (..._path) => {
    return _join(..._path);
  },
  resolve: (..._vPath) => {
    return _resolve(..._vPath);
  }
};
