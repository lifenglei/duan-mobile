# vue-vant-project-template

利用 [vant](https://github.com/youzan/vant) 和 [vue](https://github.com/vuejs/vue) 构建的移动端快速开发模板，高效、轻量、简洁。

## 内置功能
* vuex 
* vue-router 路由模块化配置
* 动态设置title
* less 模块化样式
* 基于 postcss-px-to-viewport 的移动端兼容适配
* lodash 打包优化
* vant-ui 按需加载
* axios 请求封装
* vue cli3 构建
* eslint + prettier 代码校验
* 根据环境打包生成不同目录
* 代码拆包
* gzip压缩

## 目录结构
```
├─.browserslistrc --------------- // 浏览器兼容性
├─.env.development -------------- // 开发环境的环境变量
├─.env.production --------------- // 生产环境的环境变量
├─.env.test --------------------- // 测试环境的环境
├─.eslintignore ----------------- // eslint忽略文件
├─.eslintrc.js ------------------ // eslint配置
├─.gitignore -------------------- // git提交忽略文件
├─.prettierignore --------------- // prettier忽略文件
├─.prettierrc.js ---------------- // prettier配置
├─babel.config.js --------------- // babel配置
├─package.json 
├─jsconfig.json ----------------- // vscode 组件路径配置 
├─postcss.config.js ------------- // postcss配置
├─public 
│ ├─favicon.ico 
│ └─index.html 
├─README.md 
├─src 
│ ├─api 
│ │ └─api-test.js --------------- // 各个模块api配置
│ ├─App.vue
│ ├─assets ---------------------- // 静态资源
│ │ └─img
│ ├─components 
│ │ └─goBack.vue 
│ ├─main.js 
│ ├─router ---------------------- // 路由
│ │ ├─index.js 
│ │ └─modules 
│ │   ├─about.js 
│ │   ├─home.js 
│ │   └─list.js 
│ ├─store ----------------------- // vuex数据
│ │ ├─getters.js 
│ │ ├─index.js 
│ │ └─modules 
│ │   └─app.js 
│ │ └─waves 
│ ├─styles ---------------------- // 全局样式
│ │ ├─btn.scss 
│ │ ├─element-ui.scss 
│ │ ├─element-variables.scss 
│ │ ├─index.scss 
│ │ ├─mixin.scss 
│ │ ├─reset.css 
│ │ ├─transition.scss 
│ │ └─variables.scss 
│ ├─utils ----------------------- // 全局工具
│ │ ├─auth.js 
│ │ ├─index.js 
│ │ └─request.js 
│ └─views ----------------------- // 页面
│   
└─vue.config.js ----------------- // vue及webpack配置
```

## 使用方法
```
npm i               // 安装依赖
npm run dev         // 运行项目
npm run build-test  // 构建测试包 
npm run build-prod  // 构建正式包 
npm run report      // 项目打包分析 
```


## License

[MIT](http://opensource.org/licenses/MIT)
