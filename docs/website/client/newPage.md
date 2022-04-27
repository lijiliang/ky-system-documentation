# 如何创建一个页面

页面采用node输入html页面，node做为服务层，处理接口返回的数据再展现到view层。前端的效果用webpack处理后的js插入到html页面上。整个页面可分为两大块来实现：后端模块、前端模块
<!-- TOC -->

- [如何创建一个页面](#如何创建一个页面)
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

```js
const homeCtrl = require('../../controller/home/home');
module.exports.default = module.exports = [
    {path: '', ctrl: homeCtrl.index},
    {path: 'contact', ctrl: homeCtrl.contact},
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

// 首页
async function getHome() {
  return axios.get(Urls.home)
}

....

module.exports = {
  index,
  getHome,
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


控制器主要的代码如下：
```js
// 首页
const index = async (ctx, _next) => {
  let getAll = async () => {
      // 合并请求 
    const all = await Promise.all([
        homeServer.getHome()
    ]).catch(ex => console.log(ex))
    return {homeData: all[0]}
  }
  let locals = {}
  try {
    const { homeData } = await getAll();
    const _homeData = homeData.data.data || {};
    const _topMap = _homeData.topMap; // 头部导航
    const _bottomMap = _homeData.bottomMap; // 底部导航
    const _homeNews = _homeData.homeNews; // 首页最新消息
    const _homeBanner = _homeData.homeBanner; // 首页顶部滚动
    const _bannerItems = bannerItems(_homeBanner.items);
    const _hotSales = _homeData.hotSales; // 热销商品
    const _companyTrends = _homeData.companyTrends; // 公司动向
    const _articleShare = _homeData.articleShare;  // 文章分享
    const _links = _homeData.links; // 友情链接

    locals = {
        topNav:  _topMap,
        bottomNav: _bottomMap,
        title: '凯娅尼（上海）日用品有限公司 - 官方网站',
        metaTitle:'凯娅尼（上海）日用品有限公司 - 官方网站',
        metaKeywords: '凯娅尼官网,kyani,凯娅尼跨境网上订购平台,美国进口天然营养补充品,保健品,蓝莓新乐思,新舒康Omega-3鱼油胶囊,尼多乐,凯娅尼,健康三角组合',
        metaDescription: '凯娅尼商城致力于提供美国进口天然营养补充品在中市场的推广及普及，提供跨境网上订购平台，主要产品是蓝莓新乐思、新舒康Omega-3鱼油胶囊、尼多乐、凯娅尼健康三角组合，又称健康金三角。有助抗氧化、降低胆固醇、舒缓关节健康。',
        env: process.env.NODE_ENV,
        homeBanner: _bannerItems,
        homeNews: _homeNews,
        hotSales: _hotSales,
        companyTrends: _companyTrends,
        articleShare: _articleShare,
        links: _links,
    };
  } catch(e) {
    ...
  }

```

## 前端模块

### view层

view层就是页面的展示，外界传入对应的模型数据给view，view拿到模型数据后给内部的子控件设置对应的数据

view是前端页面的显示层，文件位于 `server/view/page`

以下的是新建一个页面的 layout ，layout包含了公共头尾部及公共js的引用，只需要在index.hbs页面上写上以下代码即可显示一个页面的基础信息。剩下的就是通过传数据，然后通过hbs的语法结构去展现数据即可

```hbs
{{#extend "layout-example"}}
    {{#content "head"}}
        {{!-- {{{parseUrl 'example.css'}}} --}}
    {{/content}}
    {{#content "body"}}
      {{!-- 这里是页面的主体结构 --}}
      
      ...

      <!-- Slides -->
      {{#each homeBanner}}
      <div class="swiper-slide swiper-item">
        {{#if url}}
          <a href="{{url}}">
        {{/if}}
          <img src="{{picPath}}" alt="{{title}}">
          <div class="swiper-item-text">
            <p class="ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s">{{title}}</p>
          </div>
        {{#if url}}
          </a>
        {{/if}}
      </div>
      {{/each}}

      ...
      
    {{/content}}
    {{#content 'js'}}
      {{{parseUrl 'home.js'}}}
    {{/content}}
{{/extend}}

```

### 前端页面效果
前端页面效果代码位于 web  目录下，当前模块的代码位于`web/page/` ，页面效果代码主要基于jquery编写

页面js在开发环境下会经过webpack编译自动引入到页面中

在正式环境下直接引用webpack编译好的文件

### style (样式)
style文件是基于scss编写，模块代码位于 `web/style`
