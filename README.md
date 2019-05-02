# 520 - 无二研究所

**请阅读本README后再进行代码修改**

## 说明

+ 本项目采用yarn进行包管理
+ 所有组件采用[react-loadable](https://github.com/jamiebuilds/react-loadable)组件进行异步加载

## Path

```
520
  - node_modules
  - public
    |-- api 存放前档mock的API数据 (进行生产环境打包时应该删除)
    |-- index.html 模板html文档
    |-- favicon 网页图标
  - src 项目工程目录
    |-- pages 存放各页面文件夹
    |-- App.js 最高级组件 控制路由
    |-- index.js 项目入口文件
  - .gitignore
  - package.json
  - README.md
  - yarn.lock
```

## Get Started

To run app in dev mode

```bash
yarn start
```

To build app for production to the build folder

```bash
yarn build
```

## Commit Messages

本项目Git commit信息遵循[Conventional Commits规范](https://www.conventionalcommits.org/en/v1.0.0-beta.3/)并且附加[Git emoji](https://gitmoji.carloscuesta.me/)
