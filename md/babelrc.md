# 说明

  `Babel` 说明
    把es6的写法转换成es5的写法,转换后的代码是遵循commonJS规范的，而这个规范，浏览器并不能识别。因此导入到浏览器中会报错，而nodeJS是
  commonJS的实现者，所以在babel转换后的代码是可以在node中运行的.
    为了将babel生成的commonJS规范的es5写法能够在浏览器上直接运行，通过使用webpack这个打包工具来完成。

## `version`  

- v1.0.1
  
## `npm install`

- babel-loader: 负责 es6 语法转化
- babel-preset-env: 包含 es6、7 等版本的语法转化规则
- babel-polyfill: es6 内置方法和函数转化垫片
- babel-plugin-transform-runtime: 避免 polyfill 污染全局变量

## 个人主页

- 欢迎访问个人 [github-xukaixing](https://github.com/xukaixing) 主页.
- 欢迎访问个人 [gitee-xukaixing](https://gitee.com/xukaixing) 主页.
  