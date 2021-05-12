# 说明

  `Webpack` 常见问题说明

## `version`  

- v1.0.1

## `build`

- `Error: No valid exports main found for '**/**//node_modules/postcss'`
  - 一般出现这个错误，是与nodejs版本有关，安装的插件版本可能过高导致无法兼容
- `Module not found: Error: Can't resolve 'core-js/modules/es.array.join.js'`
  - 安装core-js：npm install core-js --save-dev  
- `Error: ENOENT: no such file or directory, scandir node-sass`
  - node-sass安装失败，需要重新安装node-sass，执行命令：npm rebuild node-sass
- `NPM Error：gyp: No Xcode or CLT version detected!`
  - $ sudo rm -rf $(xcode-select -print-path)
  - $ xcode-select --install
- `Error: Cannot find module '/Users/xukaixing/project/resource/webpack/webpack-pro/node_modules/fibers/bin/darwin-x64-88/fibers'`
  - 删除node_modules，重新执行npm install  
  
## 个人主页

- 欢迎访问个人 [github-xukaixing](https://github.com/xukaixing) 主页.
- 欢迎访问个人 [gitee-xukaixing](https://gitee.com/xukaixing) 主页.
  