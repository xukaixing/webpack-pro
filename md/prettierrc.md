# 说明

  `.prettierrc.yaml` 常用配置说明

## `version`  

- v1.0.1
  
## `配置参数`

``` yml
# yaml格式的prettier config
printWidth: 200 #每行最大字符数，超过即换行
tabWidth: 2 #缩进字节数,tab按键等于2个空格
singleQuote: true #使用单引号代替双引号
semi: true #句尾添加分号
jsxSingleQuote: false
arrowParens: "avoid" #(x) => {} 箭头函数参数只有一个时是否要有小括号。avoid：省略括号
eslintIntegration: true
bracketSpacing: true #在对象，数组括号与文字之间加空格 "{ foo: bar }"
#disableLanguages: ["vue"] # 不格式化vue文件，vue文件的格式化单独设置

```
