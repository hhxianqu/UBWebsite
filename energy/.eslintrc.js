// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    "no-dupe-args": 2, //函数定义的时候不允许出现重复的参数
    "no-dupe-keys": 2, //对象中不允许出现重复的键
    "no-duplicate-case": 2, //switch语句中不允许出现重复的case标签
    "no-func-assign": 2, //不允许重新分配函数声明
    "no-inner-declarations": ["error", "functions"], //不允许在嵌套代码块里声明函数
    "no-invalid-regexp": 2, //不允许在RegExp构造函数里出现无效的正则表达式
    "no-negated-in-lhs": 2, //不允许在in表达式语句中对最左边的运算数使用取反操作
    "valid-typeof": ["error", {
      "requireStringLiterals": true
    }], //在使用typeof表达式比较的时候强制使用有效的字符串
    "complexity": 0, //限制条件语句的复杂度
    "no-multi-spaces": 2, //不允许出现多余的空格
    "no-redeclare": 2, //不允许变量重复声明
    "no-sequences": 2, //不允许使用逗号表达式
    "no-throw-literal": 2, //不允许抛出字面量错误 throw "error"
    "no-unused-expressions": 2, //不允许无用的表达式
    "no-label-var": 2, //不允许标签和变量同名
    "no-shadow": 2, //外部作用域中的变量不能与它所包含的作用域中的变量或参数同名
    "no-shadow-restricted-names": 2, //js关键字和保留字不能作为函数名或者变量名
    "no-undef": 2, //不允许未声明的变量
    "no-undefined": 2, //不允许把undefined当做标识符使用
    "no-unused-vars": [2, {
      "vars": "all",
      "args": "after-used"
    }], //不允许有声明后未使用的变量或者参数
    "brace-style": [2, "1tbs", {
      "allowSingleLine": false
    }], //大括号风格
    "key-spacing": [2, {
      "beforeColon": false,
      "afterColon": true
    }], //对象字面量中冒号的前后空格
    "new-cap": [2, {
      "newIsCap": true,
      "capIsNew": false
    }], //构造函数名字首字母要大写
    "new-parens": 2, //new时构造函数必须有小括号
    "no-mixed-spaces-and-tabs": [2, "smart-tabs"], //不允许混用tab和空格
    "fun-call-spacing": 2, //函数调用时，函数名与()之间不能有空格
    "no-trailing-spaces": 2, //一行最后不允许有空格
    "operator-assignment": 0, //赋值运算符的风格
    "padded-blocks": [2, "never"], //块内行首行尾是否空行
    "space-before-blocks": [2, "always"], //块前的空格
    "space-before-function-paren": [2, {
      "anonymous": "always",
      "named": "never"
    }], //函数定义时括号前的空格
    "space-infix-ops": [2, {
      "int32Hint": true
    }], //操作符周围的空格
    "keyword-spacing": 2, //关键字前后的空格
    "space-unary-ops": [2, {
      "words": true,
      "nonwords": false
    }], //一元运算符前后不要加空格
    "wrap-regex": 2, //正则表达式字面量用括号括起来
    "no-var": 0, //使用let和const代替var
    'generator-star-spacing': 'off',
    "max-depth": 0, //嵌套块深度
    "max-len": 0, //一行最大长度，单位为字符
    "max-params": 0, //函数最多能有多少个参数
    "max-statements": 0, //函数内最多有几个声明
  }
}
