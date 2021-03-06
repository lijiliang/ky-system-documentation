# 单页模块

官网的公司简介、优良产品、研发理念、携手关爱计划、联系我们栏目下所有的子类模块都属于单页模块

单页对应的前端模块是一样的，区别的是 url 传不同的值可以显示不同的内容

<!-- TOC -->

- [单页模块](#单页模块)
  - [后端模块](#后端模块)
    - [路由（Router）](#路由router)
    - [服务（Service）](#服务service)
    - [控制器（Controller）](#控制器controller)
  - [前端模块](#前端模块)
    - [view层](#view层)
    - [前端页面效果](#前端页面效果)
    - [style (样式)](#style-样式)

<!-- /TOC -->

## 后端模块

### 路由（Router）
Router 主要用来描述请求 URL 和具体承担执行动作的 Controller 的对应关系
Router 文件必须放在 server/router 目录,系统会自动读取路由文件

当前控制器文件位置在 `server/router/home/home.js`

```js
const homeCtrl = require('../../controller/home/home');
module.exports.default = module.exports = [
    {path: 'page/:id', ctrl: homeCtrl.page},
    ...
];

```

### 服务（Service）
简单来说，Service 就是在复杂业务场景下用于做业务逻辑封装的一个抽象层，提供这个抽象有以下几个好处：

- 保持 Controller 中的逻辑更加简洁。
- 保持业务逻辑的独立性，抽象出来的 Service 可以被多个 Controller 重复调用。
- 将逻辑和展现分离

Service 文件必须放在 server/service 目录

```js
const Urls = require('../../lib/common/urls')
const apiservice = require('../../lib/common/apiservice')
const axios = require('axios')

// 获取导航 传参数，topMap=顶部导航、bottomMap=底部导航
async function getNav(navMap) {
  return axios.get(Urls.nav + '?code=' + navMap)
}

// 根据Id获取文章
async function getDetails(id) {
  return axios.get(`${Urls.details}/${id}`)
}


....

module.exports = {
  getDetails
  getNav,
  ...
}

```

### 控制器（Controller）

简单的说 Controller 负责解析用户的输入，处理后返回相应的结果

- 在 HTML 页面请求中，Controller 根据用户访问不同的 URL，渲染不同的模板得到 HTML 返回给用户。

- 在代理服务器中，Controller 将用户的请求转发到其他服务器上，并将其他服务器的处理结果返回给用户。

Controller 层主要对用户的请求参数进行处理（校验、转换），然后调用对应的 service 方法处理业务，得到业务结果后封装并返回：

- 获取用户通过 HTTP 传递过来的请求参数。
- 校验、组装参数。
- 调用 Service 进行业务处理，必要时处理转换 Service 的返回结果，让它适应用户的需求。
- 通过 HTTP 将结果响应给用户。

所有的 Controller 文件都必须放在 server/controller 目录下

当前控制器文件位置在 `server/controller/home/home.js`

控制器主要的代码如下：
```js
//单页页
const page = async (ctx, _next) => {
    const _id = ctx.params.id
    let getAll = async () => {
        const all = await Promise.all([
            homeServer.getDetails(_id)
        ]).catch(ex => console.log(ex))
        return {details: all[0]}
    }

    let locals = {}
    try{
        const {topNav, bottomNav} = await getNavData();
        const { details } = await getAll();
        const content = details.data.data
        // 没有内容输出，直接跳到错误页
        if (!content) {
            ctx.redirect("/404.html")
        }
        locals = {
            topNav:  topNav.data.data,
            bottomNav: bottomNav.data.data,
            title: content.title,
            metaTitle: content.metaTitle,
            metaKeywords: content.metaKeywords,
            metaDescription: content.metaDescription,
            content: content,
            crumbs: content.channel, // 面包屑
        }
    }catch(e) {
        locals = {
            title: '出现错误了'
        }
    }
    
    await ctx.render('page/page', locals)
}
```

## 前端模块

### view层

view层就是页面的展示，外界传入对应的模型数据给view，view拿到模型数据后给内部的子控件设置对应的数据

view是前端页面的显示层，文件位于 `server/view/page/page.hbs`

以下的是新建一个页面的 layout ，layout包含了公共头尾部及公共js的引用，只需要在index.hbs页面上写上以下代码即可显示一个页面的基础信息。剩下的就是通过传数据，然后通过hbs的语法结构去展现数据即可

```hbs
{{#extend "layout-example"}}
    {{#content "head"}}
    {{/content}}
    {{#content "body"}}
      <div class="m-crumbs">
        <div class="container">
          <div class="crumbs">
            {{{crumbsList crumbs}}}
          </div>
        </div>
      </div>
      {{#if content.picPath}}
      <div class="m-page-banner">
        <img src="{{content.picPath}}" alt="{{content.title}}">
        <div class="page-banner-text">
          <div class="title">
            <h1>{{content.title}}</h1>
            <h2 class="subtitle">{{content.subtitle}}</h2>
          </div>
        </div>
      </div>
      {{/if}}
      <div class="m-page-content">
        {{{content.content}}}
      </div>
    {{/content}}
    {{#content 'js'}}
      {{{parseUrl 'page.js'}}}
    {{/content}}
{{/extend}}

```

### 前端页面效果
前端页面效果代码位于 web  目录下，当前模块的代码位于`web/page/page/index.js` ，页面效果代码主要基于jquery编写


页面js在开发环境下会经过webpack编译自动引入到页面中

在正式环境下直接引用webpack编译好的文件

### style (样式)
style文件是基于scss编写，当前模块代码位于 `web/style/pages` 目录下
