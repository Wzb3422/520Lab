# 520 - 无二研究所

**请阅读本README后再进行代码修改**

## 说明

+ 本项目采用yarn进行包管理
+ 所有组件采用[react-loadable](https://github.com/jamiebuilds/react-loadable)组件进行异步加载
+ 每个页面是组件化的 页面的state分别管理在每个页面对应的文件夹中 state请在mapStateToProps中引入， 对state的变更请在mapStateToDispatch中利用actionCreator派发事件， 在子reducer中接受并处理

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
    |   |-- archivepage 研究档案页
    |   |   |-- img 图片
    |   |   |-- store 本页的子级store
    |   |   |   |-- index.js 出口文件
    |   |   |   |-- reducer.js 本页的reducer 该页的所有对state的改变都在且仅在这里完成
    |   |-- common 公用组件\字体等
    |   |-- homepage 首页
    |-- store 最高级store
    |   |-- index.js 出口文件
    |   |-- reducer.js 最高级reducer
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

5ad77db82d125112c511b713e29dcdab

### Damn Bugs

+ poster页面添加到new的Link
+ Archive => Detail 的双方答案反了？
+ 文案 复制网址或截屏分享给好友生成报告
+ 来搞我→请输入云家园密码
+ 二维码文案：扫码成为研究员
+ 按钮文案：发起我的研究
