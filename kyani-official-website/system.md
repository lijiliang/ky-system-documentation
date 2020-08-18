# 系统架构
kyani官网由于需要做SEO及搜索引擎优化，架构上选用 node.js + koa2 + handlebars + webpack 等一系列成熟的技术开发。采用node.js直接输出html的方式可以加快页面的访问速度，目前的官网访问几乎是可以做到秒开。经过seo的优化，现在搜索kayni关键字均能排在百度搜索首页

<!-- TOC -->

- [系统架构](#系统架构)
  - [技术概览](#技术概览)
  - [目录结构](#目录结构)
  - [系统架构图](#系统架构图)

<!-- /TOC -->

## 技术概览
* `后台开发`: node.js
* `样式`: scss
* `框架`: koa2
* `模板引擎`: handlebars
* `打包`: webapck4

**运行环境中Nodejs的版本至少是7**

## 目录结构

```text
.
├── build                                       // 使用 vue-cli 2.9.3
├── config                                      // 使用 vue-cli 2.9.3
├── server                                      // 服务端(koa,nodejs)
│    ├── lib                                    //     库
│    ├── controller                             //     控制器
│    ├── router                                 //     路由(koa-router,或者在前端用vue-router)
│    ├── service                                //     数据(api)
│    ├── view                                   //     视图
│    ├── server.js                              //     服务器入口
├── dist                                        // 生产目录
├── public                                      // 公共资源
│    ├── images                                 //     图片
│    └── vendor                                 //     第三方插件
├── web                                         // 前端(vue,js,css...)
│    ├── component                              //     组件
│    ├── lib                                    //     库
│    ├── locale                                 //     多语言文件
│    ├── page                                   //     页面(目录下的每个文件夹都应是一个应用)
│    ├── style                                  //     样式(应用样式)
│    ├── webpack.entry.conf.js                  //     webpack入口配置文件
│    ├── webpack.dev.conf.js                    //     webpack开发模式配置文件
│    └── webpack.pord.conf.js                   //     webpack生产模式配置文件
│   config.yml                                  //     通用配置文件
```

## 系统架构图