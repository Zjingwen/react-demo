/**
 * 
 */
module.exports = {
  "root": true,
  "globals": {
    React: false,
  },
  "plugins":[
    "react",
  ],
  "extends": [
    "google",
    "plugin:react/all",
  ],
  "parserOptions": {
    "sourceType": "module",
    "ecmaVersion": 7,
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      //允许在全局作用域下使用return语句
      "globalReturn": false,
      //启用全局strict模式（严格模式）
      "impliedStrict": true,
      "spread": true,
      "jsx": true,
    }
  },
  "rules":{
    // 不强制使用jsdoc
    "valid-jsdoc": [0],
    //禁止对只读的全局变量进行修改
    "no-global-assign": [2],
    //强制分号结尾
    "semi":[2],
    //禁止jsdoc
    "require-jsdoc": [0],
    //强制两空格缩进
    "indent": [2, 2],
    //禁止 for 循环出现方向错误的循环，比如 for (i = 0; i < 10; i--)
    'for-direction': 'error',
    //使用 === 替代 ==
    "eqeqeq": [2, "allow-null"], 
    //强制在函数括号内使用一致的换行
    "function-paren-newline": ["error", "never"],
    //强制使用一致的逗号风格
    "comma-style": ["error", "last"],
    //强制在逗号周围使用空格
    "comma-spacing": ["error", { "before": false, "after": true }],
    //禁止或强制在计算属性中使用空格
    "computed-property-spacing": ["error", "never"],
    //强制使用一致的换行符风格
    "linebreak-style": ["error", "unix"],
    //要求使用剩余参数而不是 arguments
    "prefer-rest-params" : [0],
    //禁止 this 关键字出现在类和类对象之外
    "no-invalid-this": [0],
    //强制一行的最大长度
    "max-len": [0],
    //允许apply
    "prefer-spread":[0],
    //允许在代码中保留 console 命令
    'no-console': [0],
    //大写为构造函数
    'no-extend-native':[0],
    'new-cap': [0],
    'not-an-aardvark': [0],
    'guard-for-in': [0],
    'react/require-optimization': [0],
    'react/jsx-filename-extension': [0],
    //防止使用未包装的JSX字符串
    "react/jsx-no-literals": [0],
    "react/jsx-indent": [0],
    "react/jsx-one-expression-per-line": [0],
    "react/no-multi-comp": [0],
    "react/prefer-stateless-function": [0],
    "react/jsx-closing-bracket-location": [0],
    "react/jsx-first-prop-new-line": [0],
    "react/jsx-max-props-per-line": [0],
    "react/jsx-sort-props": [0],
    "react/jsx-no-bind": [0],
    "react/jsx-child-element-spacing": [0],
    "react/no-set-state": [0],
    "react/destructuring-assignment": [0],
    'react/no-array-index-key': [0],
    'function-paren-newline': [0],
    'react/sort-prop-types': [0],
    'react/no-did-mount-set-state': [0],
    'react/forbid-prop-types': [0],
  },
};