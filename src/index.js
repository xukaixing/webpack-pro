/*
 * @Copyright: Copyright (c) 2021 andyten
 * @Description: 入口文件
 * @Author: andy.ten@tom.com
 * @Date: 2021-04-17 13:36:36
 * @LastEditors: andy.ten@tom.com
 * @LastEditTime: 2021-04-17 15:10:01
 * @Version: 1.0.1
 */
import addContent from './add-content';
import path from 'path';
document.write('My first Webpack app.<br />');
addContent();
document.write('dirname:' + path.resolve(__dirname) + ' <br/>');
document.write('dirname.join:' + path.join(__dirname, '/dist') + ' <br/>');
document.write('dirname.resolve:' + path.resolve(__dirname,'/dist') + ' <br/>');
