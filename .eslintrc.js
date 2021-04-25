/*
 * @Copyright: Copyright (c) 2021 andyten
 * @Description: eslint配置规则
 * <p>
 *  off   或 0：表示不验证规则
 *  warn  或 1：表示验证规则，当不满足时，给警告
 *  error 或 2：表示验证规则，不满足时报错
 * </p>
 * @Author: andy.ten@tom.com
 * @Date: 2021-04-17 13:39:17
 * @LastEditors: andy.ten@tom.com
 * @LastEditTime: 2021-04-25 14:37:44
 * @Version: 1.0.3
 */
module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
    allowImportExportEverywhere: true,
    ecmaFeatures: {
      jsx: true,
      modules: true,
      impliedStrict: true,
      experimentalObjectRestSpread: true
    }
  },
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es6: true,
    jquery: true
  },
  plugins: [
    'commonjs',
    // 'vue',
    'prettier',
    'html'],
  // extends: ['plugin:vue/recommended', 'prettier', 'prettier/vue'],
  rules: {
    'prettier/prettier': [0],
    'arrow-parens': 2,
    'arrow-spacing': [2, {
      before: true,
      after: true
    }
    ],
    'block-spacing': [2, 'always'],
    'brace-style': [1, '1tbs',
      {
        allowSingleLine: true
      }
    ],
    camelcase: [2, {
      properties: 'always'
    }
    ],
    'comma-dangle': [2, 'never'],
    'comma-spacing': [2, {
      before: false,
      after: true
    }
    ],
    'new-parens': 2,
    'comma-style': [2, 'last'],
    curly: [2, 'all'],
    'dot-location': [2, 'property'],
    'eol-last': 2,
    'generator-star-spacing': [2, {
      before: true,
      after: true
    }
    ],
    indent: [2, 2, {
      SwitchCase: 1
    }
    ],
    'jsx-quotes': [2, 'prefer-single'],
    'key-spacing': [2, {
      beforeColon: false,
      afterColon: true
    }
    ],
    'keyword-spacing': [2, {
      before: true,
      after: true
    }
    ],
    'new-cap': [2, {
      newIsCap: true,
      capIsNew: false
    }
    ],
    'no-multi-spaces': 2,
    'no-multi-str': 2,
    'no-multiple-empty-lines': [1, {
      max: 2
    }
    ],
    'no-mixed-spaces-and-tabs': 2,
    'no-irregular-whitespace': 2,
    'no-trailing-spaces': 1,
    'no-spaced-func': 2,
    'no-whitespace-before-property': 2,
    'padded-blocks': [2, 'never'],
    'array-bracket-spacing': [2, 'never'],
    quotes: [2, 'single', {
      avoidEscape: true,
      allowTemplateLiterals: true
    }
    ],
    semi: [2, 'always'],
    'semi-spacing': [1, {
      before: false,
      after: true
    }
    ],
    'space-before-blocks': [2, 'always'],
    'space-before-function-paren': [1, 'never'],
    'space-in-parens': [1, 'never'],
    'space-infix-ops': 1,
    'space-unary-ops': [2, {
      words: true,
      nonwords: false
    }
    ],
    'spaced-comment': [1, 'always', {
      markers: ['global', 'globals', 'eslint', 'eslint-disable', '*package', '!', ',']
    }
    ],
    'template-curly-spacing': [2, 'never'],
    'object-curly-spacing': [2, 'always', {
      objectsInObjects: false
    }
    ],
    // -------------------------------------------- 语法规则 ------------------------------------------
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'accessor-pairs': 2,
    'constructor-super': 2,
    'handle-callback-err': [2, '^(err|error)$'],
    eqeqeq: [2, 'allow-null'],
    'no-array-constructor': 2,
    'no-caller': 2,
    'no-class-assign': 2,
    'no-cond-assign': 2,
    'no-const-assign': 2,
    'no-control-regex': 0,
    'no-delete-var': 2,
    'no-dupe-args': 2,
    'no-dupe-class-members': 2,
    'no-dupe-keys': 2,
    'no-duplicate-case': 2,
    'no-empty-character-class': 2,
    'no-empty-pattern': 2,
    'no-eval': 2,
    'no-ex-assign': 2,
    'no-extend-native': 2,
    'no-extra-bind': 2,
    'no-extra-boolean-cast': 2,
    'no-extra-parens': [2, 'functions'],
    'no-fallthrough': 2,
    'no-floating-decimal': 2,
    'no-func-assign': 2,
    'no-implied-eval': 2,
    'no-inner-declarations': [2, 'functions'],
    'no-invalid-regexp': 2,
    'no-iterator': 2,
    'no-label-var': 2,
    'no-labels': [2, {
      allowLoop: false,
      allowSwitch: false
    }
    ],
    'no-lone-blocks': 2,
    'no-native-reassign': 2,
    'no-negated-in-lhs': 2,
    'no-new-object': 2,
    'no-new-require': 2,
    'no-new-symbol': 2,
    'no-new-wrappers': 2,
    'no-obj-calls': 2,
    'no-octal': 2,
    'no-octal-escape': 2,
    'no-path-concat': 1,
    'no-proto': 2,
    'no-redeclare': 2,
    'no-regex-spaces': 2,
    'no-return-assign': [2, 'except-parens'],
    'no-self-assign': 2,
    'no-self-compare': 2,
    'no-sequences': 2,
    'no-shadow-restricted-names': 2,
    'no-sparse-arrays': 2,
    'no-this-before-super': 2,
    'no-throw-literal': 2,
    'no-undef': 2,
    'no-undef-init': 2,
    'no-unexpected-multiline': 2,
    'no-unmodified-loop-condition': 2,
    'no-unneeded-ternary': [2, {
      defaultAssignment: true
    }
    ],
    'no-unreachable': 2,
    'no-unsafe-finally': 2,
    'no-unused-vars': [2, {
      vars: 'all',
      args: 'none'
    }
    ],
    'no-useless-call': 2,
    'no-useless-computed-key': 2,
    'no-useless-constructor': 2,
    'no-useless-escape': 1,
    'no-with': 2,
    'one-var': [2, {
      initialized: 'never'
    }
    ],
    'operator-linebreak': [2, 'after', {
      overrides: {
        '?': 'before',
        ':': 'before'
      }
    }
    ],
    'use-isnan': 2,
    'valid-typeof': 2,
    'wrap-iife': [2, 'any'],
    'yield-star-spacing': [2, 'both'],
    yoda: [2, 'never'],
    'prefer-const': 2,
    // -------------------------------------------- vue规则 ------------------------------------------
    'vue/eqeqeq': [0],
    'vue/no-v-html': [0],
    'vue/this-in-template': [0],
    'vue/attribute-hyphenation': [0],
    'vue/require-default-prop': [0],
    'vue/require-prop-types': [0],
    'vue/require-valid-default-prop': [0],
    'vue/no-unused-vars': [0],
    'vue/prop-name-casing': [0],
    'vue/name-property-casing': [0],
    'vue/component-name-in-template-casing': [0],
    'vue/no-unused-components': [0],
    'vue/no-duplicate-attributes': [0]
  }
};
