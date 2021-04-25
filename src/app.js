/*
 * @Copyright: Copyright (c) 2021 andyten
 * @Description: webpack默认入口文件
 * @Author: andy.ten@tom.com
 * @Date: 2021-04-17 13:36:36
 * @LastEditors: andy.ten@tom.com
 * @LastEditTime: 2021-04-25 00:18:03
 * @Version: 1.0.1
 */
import addContent from './vendor/add-content';
import path from 'path';
import './assets/css/style.css';

// const path = require('path');
document.write('My first Webpack app.<br />');
addContent();
document.write('dirname:' + __dirname + ' <br/>');
document.write('dirname.join:' + path.join(__dirname, '..', 'src/index.js') + ' <br/>');
document.write('dirname.resolve:' + path.resolve(__dirname, '/dist') + ' <br/>');
