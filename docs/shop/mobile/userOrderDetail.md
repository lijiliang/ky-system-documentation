# 订单详情模块

订单详情主要是显示订单的所有信息，包括：当前状态、订购人信息、收货人信息、商品清单、付款信息

<!-- TOC -->

- [订单详情模块](#订单详情模块)
  - [页面展示](#页面展示)
  - [函数及调用接口](#函数及调用接口)
  - [功能介绍](#功能介绍)
    - [订单状态](#订单状态)
    - [其它信息](#其它信息)

<!-- /TOC -->

## 页面展示

![image](./images/userOrderDetail_1.png)
![image](./images/userOrderDetail_2.png)

## 函数及调用接口

路由定义

```js
{
    path: '/user',
    component: Layout,
    redirect: '/user/index',
    children: [{
      path: 'index',
      name: 'UserIndex',
      component: () => import('@/views/user/UserIndex'),
      meta: {
        requireAuth: true,
        title: '我的'
      }
    },
}
```

[UserOrderview.vue](https://gitlab.kyani.cn/kyani-inc/kyani-shop-mobile/blob/master/src/views/user/UserOrderview.vue)

在Vue页面 `methods` 生命周期钩子时分别调用以下几个函数：
- [getOrderViewData](https://gitlab.kyani.cn/kyani-inc/kyani-shop-mobile/blob/master/src/views/user/UserOrderview.vue#L107) 获取到当前用户订单的数据后并渲染到页面上。

`handleGetOrderView`是通过[OrderView接口](https://gitlab.kyani.cn/kyani-inc/kyani-shop-mobile/blob/master/src/api/urls.js#L37)获取数据


## 功能介绍

### 订单状态
  - 每笔订单都会有相对应的状态。分别有如下状态：已下单、已付款、已发货、已完成

  - 根据api数据返回页面信息，逻辑判断如下，根据不同的`stepsActive`显示相对应的状态
  
  ```js
    if (createTime) {
      this.stepsActive = 1
    }
    if (createTime && paymentTime) {
      this.stepsActive = 2
    }
    if (createTime && paymentTime && deliveryTime) {
      this.stepsActive = 3
    }
    if (createTime && paymentTime && deliveryTime && completeTime) {
      this.stepsActive = 4
    }
  ```

### 其它信息
  - 订购人信息、收货人信息、商品清单、付款信息是根据api返回的数据直接显示在页面上