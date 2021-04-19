# 说明

  `Webpack` 常用配置说明
  
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

## `module`

- `rule`  

## `plugins`

- `BannerPlugin`
  - banner插件，在webpack模块大下，引入webpack模块即可
  
- `html-webpack-plugin`
  - `inject`: 向template或者templateContent中注入所有静态资源，不同的配置值注入的位置不经相同
    - true或者body：所有JavaScript资源插入到body标签内的最底部
    - head: 所有JavaScript资源插入到head元素中
    - false： 所有静态资源css和JavaScript都不会注入到模板文件中  
  - `templateParameters`: 允许覆盖html模板中使用的参数，参数定义：<%= 参数名字1 %>
    - 参数名字1
  
```text
  生成html插件(注意版本需与webpack版本对应；3.2.0可以兼容webpack4)
  - 为html文件中引入的外部资源如script、link动态添加每次compile后的hash，防止引用缓存的外部文件问题;
  - 可以生成创建html入口文件，比如单页面可以生成一个html文件入口，配置N个html-webpack-plugin可以生成N个页面入口;  
```
