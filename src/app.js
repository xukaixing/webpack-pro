/*
 * @Copyright: Copyright (c) 2021 andyten
 * @Description: webpack默认入口文件
 * @Author: andy.ten@tom.com
 * @Date: 2021-04-17 13:36:36
 * @LastEditors: andy.ten@tom.com
 * @LastEditTime: 2021-05-26 17:41:39
 * @Version: 1.0.1
 */
import _addContent from './components/add-content';
import _path from 'path';
import './assets/css/core.scss';
import './components/add-fileloader';
// const path = require('path');
document.write('My first Webpack app.<br />');
_addContent();
document.write('dirname path:' + _path.join(__dirname) + ' <br/>');
document.write('dirname.join:' + _path.join(__dirname, '..', 'src/index.js') + ' <br/>');
document.write('dirname.resolve:' + _path.resolve(__dirname, '/dist') + ' <br/>');
console.log(...[{ a: 1, b: 2 }]);
// test 按需加载/异步加载,通过注释/* webpackChunkName: "name"方式修改异步加载chunk名字，否则就是数据 0.js
import(/* webpackChunkName: "add-async" */ './components/async-load.js').then(({ addAsync }) => {
  console.log('async load:', addAsync(2, 3));
  alert('async load:' + addAsync(2, 3));
});
