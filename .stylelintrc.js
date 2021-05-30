/*
 * @Copyright: Copyright (c) 2021 andyten
 * @Description: stylelint配置规则
 * <p>
 *  配置文件配置方式：
 *  按顺序查找，任何一项有值，就会结束查找
 *  在 package.json 中的stylelint属性指定规则
 *  在 .stylelintrc 文件中指定，文件格式可以是JSON或者YAML。也可以给该文件加后缀，如：
 *  .stylelintrc.json , .stylelintrc.yaml , .stylelintrc.yml , .stylelintrc.js
 *  stylelint.config.js 文件，该文件 exports 一个配置对象
 *
 *  rules优先级大于extends，建议采用extends方式统一管理
 * </p>
 * @Author: andy.ten@tom.com
 * @Date: 2021-05-24 17:42:36
 * @LastEditors: andy.ten@tom.com
 * @LastEditTime: 2021-05-24 17:43:43
 * @Version: 1.0.1
 */
module.exports = {
  processors: [],
  extends: [
    "stylelint-config-standard",
    "stylelint-config-css-modules"
  ],
  plugins: [
    "stylelint-scss"
  ],
  rules: {
    "at-rule-no-unknown": [ true, {
      ignoreAtRules: ['extend', 'at-root', 'debug', 'warn', 'error', 'if', 'else', 'for', 'each', 'while', 'mixin', 'include', 'content', 'return', 'function']
    }]
  }
};
