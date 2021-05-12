/*
 * @Copyright: Copyright (c) 2021 andyten
 * @Description: webpack默认入口文件
 * @Author: andy.ten@tom.com
 * @Date: 2021-04-17 13:36:36
 * @LastEditors: andy.ten@tom.com
 * @LastEditTime: 2021-05-11 20:37:18
 * @Version: 1.0.1
 */
import _addContent from './vendor/add-content';
import _path from 'path';
import './assets/css/style.scss';
import './vendor/add-fileloader';

// const path = require('path');
document.write('My first Webpack app.<br />');
_addContent();
document.write('dirname path:' + _path.join(__dirname) + ' <br/>');
document.write('dirname.join:' + _path.join(__dirname, '..', 'src/index.js') + ' <br/>');
document.write('dirname.resolve:' + _path.resolve(__dirname, '/dist') + ' <br/>');
