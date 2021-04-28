# 说明

  `Webpack` 常用配置说明

## `version`  

- v1.0.4
  
## `path`

- `__dirname`: 指向被执行 js 文件所在目录的绝对路径
  - 在/d1/d2/myscript.js文件中执行__dirname,返回: /d1/d2
- `join`: 路径拼接方法
- `resolve`: 相当于cd操作

## `context`

- 资源入口的路径前缀
  - context: _webpackUtil.join('/src'),

## `entry`

```text
在webpack默认配置中，当一个bundle大于250KB时（压缩前）会认为这个bundle已经过大来，打包时会发出警告(显示[big]警告)
```

- 对象类型入口
  
```es5
entry: {
    app: ['babel-polyfill','./app.js'],
    verdor: ['./vendor.js']
  },
```

- 函数类型入口

```es5
// 返回一个字符串类型的入口
module.exports = {
  entry: () => './src/app.js',
};
// 返回一个对象型的入口
module.exports = {
  entry: () => ({
    index: ['babel-polyfill', './src/app.js'],
    lib: './src/vendor.js'
  }),
};
```

## `output`

```text
资源出口，只针对npm run build命令，npm run dev在内存中，不涉及生成文件
```

- `path`: 输出位置，打包完成后资源产生的目录，一般将其指定为工程中的dist目录
- `publicPath`: 请求位置；由JS或CSS所请求的间接资源路径。页面中的资源分为两种，
  - 一种是由HTML页面直接请求的，比如通过script标签加载的JS；
  - 另一种是由JS或CSS请求的（如异步加载的JS、从CSS请求的图片字体等），publicPath的作用就是指定这部分间接资源的请求位置
  
```text
// 假设当前html地址为：http://localhost:8080/app/index.html
- publicPath: ""  // 实际路径http://localhost:8080/app/app.chunkhash.js
- publicPath: "./js" // 实际路径http://localhost:8080/app/js/app.chunkhash.js
- publicPath: "../assets/" // 实际路径http://localhost:8080/assets/app.chunkhash.js
// 若publicPath的值以"/"开始，则代表publicPath是以当前页面的hostname为基础路径
- publicPath: "/" // 实际路径http://localhost:8080/app.chunkhash.js
- publicPath: "/js/" // 实际路径http://localhost:8080/js/app.chunkhash.js
- publicPath: "/dist/" // 实际路径http://localhost:8080/dist/app.chunkhash.js
```

## `devServer`

```text
开发服务
```

- `publicPath`: webpack-dev-sever的静态资源路径;一般与webpack的output.publicPath保持一致，避免开发环境和生产环境不一致；
- `overlay`: webpack 在编译的时候如果出现了错误，可以在网页上显示
  
## `module`

```text
loader在Webpack中它的实际功能则更像是预处理器。Webpack本身只认识JavaScript，对于其他类型的资源必须预先定义一个或多个loader对其进行转译，输出为Webpack能够接收的形式再继续进行，因此loader做的实际上是一个预处理的工作。
```

- `rule`  
  
```text
loader相关配置，loader的顺序代表了加载执行的顺序
include和exclude同时存在时，exclude优先级更好
```

- `eslint-loader`
  - eslint-friendly-formatter 可以让eslint的错误信息出现在终端上
- `css-loader`
  - 作用是处理CSS的各种加载语法@import和url()函数等，如果要使样式起作用需要style-loader把样式插入页面
- `style-loader`
- 作用是将样式字符串包装成style标签插入页面哦
  - use:['style-loader', 'css-loader'] webpack打包时是按照数组从后往前的顺序将资源交给loader处理

## `plugins`

- `BannerPlugin`
  - banner插件，在webpack模块大下，引入webpack模块即可

- `clean-webpack-plugin`
  - cleanOnceBeforeBuildPatterns: ['**/*', _webpackConfig.build.buildPath()] 必须是数组，且必须加上"**/*"通配符,否则无法删除

- `copy-webpack-plugin`
  - 拷贝静态目录至dist生成目录
  
```javascript
旧版本配置方法：（5.1.1以前）
new _CopyWebpackPlugin([
      {
        from: _webpackUtil.resolve(__dirname, '..', _webpackConfig.base.assetsSubDirectory()),
        to: _webpackConfig.base.assetsSubDirectory(),
        ignore: ['.*']
      }
    ]),
新版本配置方法：（6.0.0以后）
new _CopyWebpackPlugin({
      patterns: [{
        from: _webpackUtil.resolve(__dirname, '../static'),
        to: 'static',
        globOptions: {
          ignore: ["**/.*"],
        },
      }],
      options:{

      }
    }),
```
  
- `html-webpack-plugin`
  - 作用一是创建HTML页面文件到你的输出目录，作用二是将webpack打包后的chunk自动引入到这个HTML中
  - `inject`: 向template或者templateContent中注入所有静态资源，不同的配置值注入的位置不经相同
    - true或者body：所有JavaScript资源插入到body标签内的最底部
    - head: 所有JavaScript资源插入到head元素中
    - false： 所有静态资源css和JavaScript都不会注入到模板文件中  
  - `templateParameters`: 允许覆盖html模板中使用的参数，参数定义：<%= 参数名字1 %>
    - 参数名字1
  - `favicon`: 添加特定favicon路径到输出的html文档中，这个同title配置项，需要在模板中动态获取其路径值
    - favicon: _webpackUtil.join('/favicon.ico'),
  - `minify`: 对生成的html文件进行压缩,默认是false,即不进行压缩
    - `removeComments`: 清理html中的注释,默认值为false
    - `collapseWhitespace`: 清理html中的空格、换行符,默认值为false
    - `minifyCSS`: 压缩html内的样式,默认为false
    - `removeAttributeQuotes`: 移除属性的引号，默认为false
  - `chunksSortMode`: 在插入html前chunk生成的script标签进行排序，默认为auto，四个选项： none auto dependency {function}
    - dependency: 指按照依赖关系排序后插入到html中
  - `chunks`: 当有多个入口文件的时候，对应就会生成多个编译后的 js 文件。那么 chunks 选项就可以决定是否都使用这些生成的 js 文件。
    - chunks: ['index','index2']
  - `excludeChunks`: 排除掉某些 js chunk
    - excludeChunks: ['index1.js']
  
```text
  生成html插件(注意版本需与webpack版本对应；3.2.0可以兼容webpack4)
  - 为html文件中引入的外部资源如script、link动态添加每次compile后的hash，防止引用缓存的外部文件问题;
  - 可以生成创建html入口文件，比如单页面可以生成一个html文件入口，配置N个html-webpack-plugin可以生成N个页面入口;  
```

## 个人主页

- 欢迎访问个人 [github-xukaixing](https://github.com/xukaixing) 主页.
- 欢迎访问个人 [gitee-xukaixing](https://gitee.com/xukaixing) 主页.
