# 微服务秒杀系统 - 前台页面

<p align="center"> 
 <img src="https://img.shields.io/badge/Vue%20-2.6.11-green.svg" alt="Build Status"/>
 <img src="https://img.shields.io/badge/Element%20Ui%20-2.15.0-blue.svg" alt="es"/>
 <img src="https://img.shields.io/badge/Vue%20Router%20-3.2.0-blue.svg" alt="es"/>
 <img src="https://img.shields.io/badge/Vuex-3.4.0-green.svg" alt="sb">
 <img src="https://img.shields.io/badge/Axios-0.21.1-blue.svg" alt="sc">
</p>

## 简介

微服务秒杀系统采用了前后端分离的模式，前端采用了Vue全家桶 + Element-Ui组件，后端采用Spring Cloud全家桶开发而成。此项目是本秒杀系统的前台前端页面。


## 项目链接

- [后台管理前端项目](https://github.com/ChoyRunYu/secondkill-admin)
- [微服务后端](https://github.com/ChoyRunYu/secondkill)

## 相关技术

| 相关技术   | 版本号 |
| :--------- | :----: |
| vue        | 2.6.11 |
| vuex       | 3.4.0  |
| vue-router | 3.2.0  |
| axios      | 0.21.1 |
| element-ui | 2.15.0 |

## 目录结构

```
├── public						公共目录
│  ├── favicon.ico					favicon图标
│  └── index.html					首页入口文件
├── src							源代码目录
│  ├── api							api请求接口目录
│  ├── assets						静态文件目录
│  ├── components					组件目录
│  ├── router						路由目录
│  ├── store						Vuex目录
│  ├── utils						工具类目录
│  ├── views						主要页面目录
│  ├── App.vue						项目入口文件
│  ├── main.js						项目核心文件
│  ├── permission.js				项目权限文件
│  └── setting.js					项目配置文件
├── .env
├── .eslistrc.js
├── .browserslistrc
├── bable.config.js
├── package.json
├── README.md
└── vue.config.js
```

## 跑起来

```
# 克隆项目
git clone https://github.com/ChoyRunYu/secondkill-vue.git

# 进入项目目录
cd secondkill-vue

# 安装依赖
npm install

# 启动项目
npm run serve

# 构建项目
npm run build

# 代码格式检查
npm run lint
```



## 系统截图

暂无
