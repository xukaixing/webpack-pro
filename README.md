# 说明

  `Webpack-Pro` Demo，介绍了webpack打包简单用法。  
  
## 版本

> v1.0.7 : 2021.05.30
>> 新增cross-env依赖  
>> 新增terser-webpack-plugin插件  
>> 新增optimize-css-assets-webpack-plugin插件  

---

> v1.0.6 : 2021.05.24
>> 新增postcss-loader插件  
>> 新增自动前缀autoprefixer插件  
>> 新增stylelint插件配置

---

> v1.0.5 : 2021.05.10
>> 新增file-loader插件  
>> 新增url-loader插件  
>> 新增mini-css-extract-plugin插件  
>> 新增sass-loader、node-sass插件，转换scss为css  
>> 新增less-loader、less插件，转换less为css  

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
## 安装eslint、eslint-loader、eslint-friendly-formatter、eslint-plugin-html，对源码进行质量检测
npm install eslint-loader --save-dev
## 安装prettier格式化插件，不做语法校验
npm install prettier --save-dev
## 安装babel，babel-loader注意版本，使用@7.1.5
npm install babel-loader @babel/core @babel/plugin-transform-runtime @babel/preset-env --save-dev
npm install @babel/runtime --save-dev
npm install @babel/plugin-proposal-class-properties @babel/plugin-proposal-decorators @babel/plugin-syntax-dynamic-import @babel/plugin-transform-runtime --save-dev
npm install core-js --save-dev
## 安装html-webpack-plugin生成html插件
npm install html-webpack-plugin@3.2.0 --save-dev
## 安装ejs-loader解析ejs文件插件
npm install ejs-loader --save-dev
## 安装clean-webpack-plugin清除dist生成文件插件
npm install clean-webpack-plugin@3.0.0 --save-dev
## 安装copy-webpack-plugin，将单个文件或整个目录复制到构建目录(用最新版会有报错：Compiler.getCache方法报错)
npm install copy-webpack-plugin@5.1.1 --save-dev
## 安装css-loader，处理CSS的各种加载语法（@import和url()函数等）
npm install css-loader@3 --save-dev
## 安装style-loader，将css编译为样式字符串包装成style标签插入页面
npm install style-loader --save-dev
## 安装file-loader，打包文件类型的资源，并返回其publicPath供js加载
npm install file-loader --save-dev
## 安装url-loader，与file-loader作用类似，区别在于可以设置文件大小的阀值，小于阀值返回base64编码，大于则与file-loader一样返回url
npm install url-loader --save-dev
## 安装mini-css-extract-plugin插件，分离css为独立的文件
npm install mini-css-extract-plugin --save-dev
## 安装node-sass预处理器，转换scss样式为css（如果安装node-sass超时，则切换为cnpm镜像地址）
## 也可以在根目录下创建.npmrc文件，指定taobao镜像（推荐用cnpm安装）
npm install node-sass --sass_binary_site=https://npm.taobao.org/mirrors/node-sass/ --save-dev
或
cnpm install node-sass --save-dev
## 安装sass-loader，将scss编译为css,注意：最新版本11+是webpack5版本以上；（推荐用cnpm安装）
cnpm install sass-loader@10 --save-dev
## 安装less-loader，less将less编译为css，注意：less-loader@8以上是webpack5版本以上支持；
npm install less-loader@7 less --save-dev
## 安装postcss-loader,注意：post-loader@5以上是webpack5版本以上支持；
npm install postcss-loader@4 --save-dev
## 安装autopreefixer，注意：autoprefixer@9版本；
npm install autoprefixer@9 --save-dev
## 安装stylelint CSS检测工具
npm install stylelint --save-dev
## 安装stylelint-config-standard是stylelint的推荐配置
## stylelint-order是CSS属性排序插件(先写定位，再写盒模型，再写内容区样式，最后写 CSS3 相关属性)。
npm install stylelint-config-standard stylelint-order --save-dev
## 安装 cross-env，解决跨平台的使用环境变量脚本
npm install cross-env --save-dev
## 安装terser，压缩js工具（由于老牌工具uglify不支持es6，且uglify-es不再更新，选择terser作为js代码压缩工具。）
npm install terser-webpack-plugin --save-dev
## 安装css压缩插件：optimize-css-assets-webpack-plugin
npm install optimize-css-assets-webpack-plugin --save-dev
## 安装css压缩工具：postcss的插件：cssnano(cssnano@5以上会与postcss版本冲突)
npm install cssnano@4 --save-dev
## 安装可视化分析包大小插件
npm install webpack-bundle-analyzer --save-dev
## 安装bundlesize检查bundle是否超限，用于验证 webpack 的资源不超过指定的大小
npm install bundlesize --save-dev

```

## 目录结构

``` 目录
.
├── build
│   ├── webpack.base.config.js
│   ├── webpack.dev.config.js
│   ├── webpack.prod.config.js
│   └── webpack.util.js
├── config
│   └── index.js
├── favicon.ico
├── index.html
├── md
├── package-lock.json
├── package.json
├── src
│   ├── app.js
│   ├── app2.js
│   ├── assets
│   │   ├── css
│   │   │   ├── _button.scss
│   │   │   ├── _font.scss
│   │   │   ├── _form.scss
│   │   │   ├── _tablelist.scss
│   │   │   ├── _variables.scss
│   │   │   └── core.scss
│   │   └── img
│   │       └── avatar.jpg
│   └── components
│       ├── add-content.js
│       ├── add-fileloader.js
│       └── async-load.js
└── static
    ├── css
    │   └── style.css
    └── image
        └── avatar.jpg

11 directories, 23 files

```

## 个人主页

- 欢迎访问个人 [github-xukaixing](https://github.com/xukaixing) 主页.
- 欢迎访问个人 [gitee-xukaixing](https://gitee.com/xukaixing) 主页.
