# 商品详情页模块
  商品详情页模块
<!-- TOC -->

- [商品详情页模块](#商品详情页模块)
  - [页面展示](#页面展示)
  - [Components](#components)
  - [函数及调用接口](#函数及调用接口)
  - [功能介绍](#功能介绍)

<!-- /TOC -->
## 页面展示
![image](./images/detail.png)

## Components
[ProductList.vue](https://gitlab.kyani.cn/kyani-inc/kyani-shop-pc/blob/master/src/views/product/components/ProductList.vue)
[KySuitInfo.vue](https://gitlab.kyani.cn/kyani-inc/kyani-shop-pc/blob/master/src/components/business/KySuitInfo/index.vue)
[ItemLayout.vue](https://gitlab.kyani.cn/kyani-inc/kyani-shop-pc/blob/master/src/views/product/components/ItemLayout.vue)

## 函数及调用接口
[Detail.vue](https://gitlab.kyani.cn/kyani-inc/kyani-shop-pc/blob/master/src/views/product/Detail.vue)

在Vue页面 `mounted` 生命周期钩子时分别调用以下几个函数：
- [getDetail](https://gitlab.kyani.cn/kyani-inc/kyani-shop-pc/blob/master/src/views/product/Detail.vue#L243) 获取到当前详情页的数据后并渲染到页面上。

- 获取当前页商品所关联的数据列表,数据是通过[getPruductRelation](https://gitlab.kyani.cn/kyani-inc/kyani-shop-pc/blob/master/src/views/product/Detail.vue#L375)函数获得关联产品

- 初始化及自动选择sku[skuCheckItem](https://gitlab.kyani.cn/kyani-inc/kyani-shop-pc/blob/master/src/views/product/Detail.vue#L342)


`getDetail`是通过[ProductInfoId接口](https://gitlab.kyani.cn/kyani-inc/kyani-shop-pc/blob/master/src/api/urls.js#L28)获取数据

`getPruductRelation`是通过[pruductRelation接口](https://gitlab.kyani.cn/kyani-inc/kyani-shop-pc/blob/master/src/api/urls.js#L62)获取数据

## 功能介绍

