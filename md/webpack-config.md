# 说明

  `Webpack` 常用配置说明

## `version`  

- v1.0.5
  
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

- `chunkFilename`
  
```text
  涉及懒加载和预加载
    chunkFilename用来打包require.ensure方法中引入的模块,如果该方法中没有引入任何模块则不会生成任何chunk块文件
    比如在main.js文件中,require.ensure([],function(require){alert(11);}),这样不会打包块文件
    只有这样才会打包生成块文件require.ensure([],function(require){alert(11);require('./greeter')})
    或者这样require.ensure(['./greeter'],function(require){alert(11);})
    chunk的hash值只有在require.ensure中引入的模块发生变化,hash值才会改变
    注意:对于不是在ensure方法中引入的模块,此属性不会生效,只能用CommonsChunkPlugin插件来提取
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
- 作用是将样式字符串包装成style标签插入页面
  - use:['style-loader', 'css-loader'] webpack打包时是按照数组从后往前的顺序将资源交给loader处理
- `babel-loader`
  - babel和Webpack协同工作的模块，用来处理ES6+并将其编译为ES5
  - babel-core: Baebl编译器的核心模块
  - babel-preset-evn: Babel官方推荐的预置器，可根据用户设置的目标环境自动添加所需的插件和补丁来编辑ES6+
  - 在 babel7中babel-core和 babel-preset被建议使用 `@babel` 开头声明作用域，因此应该分别下载 `@babel/core` 和· `@babel/presets`
  
```text
- 由于babel-loader通常属于对所有JS后缀文件设置的规则，所以需要在exclude中添加node_modules，否则会令babel-loader编译其中所有的模块，这将严重拖慢打包的速度，并且有可能改变第三方模块的原有行为。
- 对于babel-loader本身我们添加了cacheDirectory配置项，它会启用缓存机制，在重复打包未改变过的模块时防止二次编译，同样也会加快打包的速度。cacheDirectory可以接收一个字符串类型的路径来作为缓存路径，这个值也可以为true，此时其缓存目录会指向node_modules/.cache/babel-loader。
- 由于@babel/preset-env会将ES6 Module转化为CommonJS的形式，这会导致Webpack中的tree-shaking特性失效。将@babel/preset-env的modules配置项设置为false会禁用模块语句的转化，而将ES6 Module的语法交给Webpack本身处理。
- cacheDirectory：默认值为 false。当有设置时，指定的目录将用来缓存 loader 的执行结果。之后的 webpack 构建，将会尝试读取缓存，来避免在每次执行时，可能产生的、高性能消耗的 Babel 重新编译过程(recompilation process)。
  如果设置了一个空值 (loader: 'babel-loader?cacheDirectory') 或者 true (loader: babel-loader?cacheDirectory=true)，loader 将使用默认的缓存目录 node_modules/.cache/babel-loader，如果在任何根目录下都没有找到 node_modules 目录，将会降级回退到操作系统默认的临时文件目录。
```

- `file-loader`
  - webpack 将所需的对象作为文件发送并返回其公用publicPath
  - 默认情况下，生成的文件的文件名就是文件内容的 MD5 哈希值并会保留所引用资源的原始扩展名，如：返回："/a72d2dcfb73499513b9f7fd1f58efc67.jpg.png"

- `url-loader`
  - 作用与file-loader类似，区别在于可以设置文件大小的阀值，小于阀值返回base64编码，大于则与file-loader一样返回url
  - limit: 10000,单位为字节， 只有小于10000字节=10K的图片才转为base64码引用
- `MiniCssExtractPlugin.loader`
  - 分离css为独立的文件，使用该loader，不能与style-loader共用；（style-loader是把css打包成style标签内容插入页面，而不是分离文件）

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

- `MiniCssExtractPlugin`
  
## 个人主页

- 欢迎访问个人 [github-xukaixing](https://github.com/xukaixing) 主页.
- 欢迎访问个人 [gitee-xukaixing](https://gitee.com/xukaixing) 主页.
