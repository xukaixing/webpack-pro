# 说明

  `Webpack-Pro` Demo，介绍了webpack打包简单用法。  
  
## 版本

> v1.0.2 : 2021.04.19
>> 重构index.js为app.js  
>> 增加vendor.js
>> 增加webpack.utils.js  
>> webpack.config.js增加多入口模式，output使用chunkhash命名  

---

> v1.0.1 : 2021.04.17
>> 增加index.html  
>> 增加index.js、add-content.js  
>> 增加webpack.config.js

## 环境

- 本地安装 nodejs 请使用 v12.16.0 及以上版本，建议使用 nvm 管理  
- 建议使用 yarn 管理 npm 依赖  
- 编译器统一使用 VScode，必要的插件列表:
  - Vetur
  - Prettier
  - EditorConfig
  - ESLint
  - SaveAction

### 使用 yarn 或 npm 命令

```bash
# 安装依赖
$ yarn install 或 npm install

# 启动本地服务
$ npm run start 或 npm run dev

# 发布，构建生产环境代码
$ npm run build

# 使用到的命令

## 安装webpack、webpack-cli，注意版本，不指定版本号，容易造成版本不兼容
$ npm install webpack@4.41.5 webpack-cli@3.3.10 --save-dev
## 查看webpack版本
$ npx webpack -v
## 使用webpack命令运行
$ npx webpack --entry=./index.js --output-filename=bundle.js --mode=development
## 安装webpaxk-dev-server,注意版本，不指定版本号，容易造成版本不兼容
$ npm install webpack-dev-server@3.10.3 --save-dev
## 安装babel，babel-loader注意版本，使用@7.1.5
npm install babel-core babel-loader@7.1.5 babel-plugin-transform-runtime babel-preset-env --save-dev
npm install babel-polyfill babel-runtime --save-dev
## 安装html-webpack-plugin生成html插件
npm install html-webpack-plugin@3.2.0 --save-dev
## 安装ejs-loader解析ejs文件插件
npm install ejs-loader --save-dev
```

## 目录结构

``` 目录
.
├── add-content.js
├── index.html
├── index.js
└── package.json

0 directories, 4 files

```

## 个人主页

- 欢迎访问个人 [github-xukaixing](https://github.com/xukaixing) 主页.
- 欢迎访问个人 [gitee-xukaixing](https://gitee.com/xukaixing) 主页.
