/*
 * @Copyright: Copyright (c) 2021 andyten
 * @Description: 测试脚本
 * @Author: andy.ten@tom.com
 * @Date: 2021-04-17 13:39:17
 * @LastEditors: andy.ten@tom.com
 * @LastEditTime: 2021-04-25 13:59:50
 * @Version: 1.0.1
 */

import _path from 'path';

export default function() {
  document.write('hello world using webpack-dev-server live-reloading ! <br/>');
  document.write('dirname2:' + __dirname + ' <br/>');
  document.write('dirname.join2:' + _path.join(__dirname, '..', 'src/index.js') + ' <br/>');
  document.write('dirname.resolve2:' + _path.resolve(__dirname, '/dist') + ' <br/>');
}