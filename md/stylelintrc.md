# 说明

  `StyleLint` 说明
    StyleLint 是『一个强大的、现代化的 CSS 检测工具』, 与 ESLint 类似, 是通过定义一系列的编码风格规则帮助我们避免在样式表中出现错误.

## `version`  

- v1.0.1
  
## 配置方式

按顺序查找，任何一项有值，就会结束查找

- 在 package.json 中的stylelint属性指定规则
- 在 .stylelintrc 文件中指定，文件格式可以是JSON或者YAML。也可以给该文件加后缀，像这样:
  .stylelintrc.json , .stylelintrc.yaml , .stylelintrc.yml , .stylelintrc.js
  stylelint.config.js 文件，该文件 exports 一个配置对象

## 语法格式

rules优先级大于extends，建议采用extends方式统一管理

## 配置项解析

- `rules`
  rules是一个对象，属性名为规则名称，属性值为规则取值，它告诉stylelint该检查什么，该怎么报错。所有规则默认都是关闭的。

```text
规则名称
由连字符组成的小写单词:"number-leading-zero"
由两个部分组成：
第一部分描述该规则应用于什么东西
第二部分表示该规则检查了什么
值为 null 时表示禁用该规则：
{
  "rules": {
    "block-no-empty": null
  }
}
通过配置项，你可以指定：

severity，错误级别，取值"warning"或者"error"。默认情况下，所有规则的错误级别都是"error"，通过defaultSeverity可以修改此默认值。不过，需要针对某规则修改错误级别就需要用到该属性。
"indentation": [2, { 
  "severity": "warning" 
}]
```

## 个人主页

- 欢迎访问个人 [github-xukaixing](https://github.com/xukaixing) 主页.
- 欢迎访问个人 [gitee-xukaixing](https://gitee.com/xukaixing) 主页.
  