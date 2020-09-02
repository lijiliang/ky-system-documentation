# 快速下单模块

快速下单是商城所有商品的集合点，全部的商品都在这个页面当中。当前页面是需要用户先登录才能进到快速下单页

快速下单我们需要实现的功能有如下功能点：

向购物车加入商品

目前快速下单有`添加套组`、`添加单品`、`添加国内直邮`三个组合，用户根据自己的需要去选择需要添加的商品即可

<!-- TOC -->

- [快速下单模块](#快速下单模块)
  - [页面展示](#页面展示)
  - [Components](#components)
  - [函数及调用接口](#函数及调用接口)
  - [功能介绍](#功能介绍)
    - [1、快速下单加减功能](#1快速下单加减功能)
    - [2、立即结算](#2立即结算)

<!-- /TOC -->

## 页面展示


## Components
[KyOrderside.vue](https://gitlab.kyani.cn/kyani-inc/kyani-shop-pc/blob/master/src/components/business/KyOrderside/index.vue)

[KyOrderLayout.vue](https://gitlab.kyani.cn/kyani-inc/kyani-shop-pc/blob/master/src/components/business/KyOrderLayout/index.vue)

## 函数及调用接口

购物车-核对订单页
[QuickOrder.vue](https://gitlab.kyani.cn/kyani-inc/kyani-shop-pc/blob/master/src/views/cart/QuickOrder.vue)

在Vue页面创建 `mounted` 时调用 [getCartList](https://gitlab.kyani.cn/kyani-inc/kyani-shop-pc/blob/master/src/views/cart/QuickOrder.vue#L187) 根据用户token获取到当前用户的购物车列表数据后并渲染到页面上

`getCartList`是通过[快速下单加入购物车接口](https://gitlab.kyani.cn/kyani-inc/kyani-shop-pc/blob/master/src/api/urls.js#L24)获取数据

`mounted`进来后先清空之前已经有的数据，以免新数据受到影响
```js
mounted() {
  // 清空相关数据
  this.$store.dispatch('setCartIds', [])
  this.$store.dispatch('setCartSkuList', [])
  this.$store.dispatch('setCartTradeNo', '') // 清空下单成功后的订单id

  this.getCartList()
}
```
## 功能介绍

### 1、快速下单加减功能
 
- 快速下单加减功能是通过函数[handleChangeQuantity](https://gitlab.kyani.cn/kyani-inc/kyani-shop-pc/blob/master/src/views/cart/QuickOrder.vue#L203)实现
- 快速下单只需要用户按下加减按钮会将用户操作的数据存到本地，数量大于1即可加入到购物车

主要功能实现如下
```js
  // 加减数量
  async handleChangeQuantity(item) {
    const loadingInstance = Loading.service({})
    const _checkedcartList = this.checkedcartList
    if (item.quantity > 0) {
      _checkedcartList.push(item.id)
    } else {
      _checkedcartList.splice(_checkedcartList.indexOf(item.id), 1)
    }
    this.checkedcartList = Array.from(new Set(_checkedcartList))
    this._computedTotal()

    ....
  },
```

### 2、立即结算
- 立即结算是由[handleBtnSettlement](https://gitlab.kyani.cn/kyani-inc/kyani-shop-pc/blob/master/src/views/cart/QuickOrder.vue#L221)函数实现。该函数会筛选出选中的所有购物车列表id，然后根据所选的购物车列表id去及sku列表信息去提交数据。
- 数据提交正确后页面会跳到[核对订单页模块](./order.md)

```js
// 立即结算
handleBtnSettlement() {
  const _cartIds = this.checkedcartList
  const _cartList = [...this.groupList, ...this.singleList, ...this.domesticList]
  // 筛选出选中的所有购物车列表
  const checkSkuList = _cartList.filter(item => _cartIds.some(cartId => cartId === item.id))
  const cartSkuList = this._initCartSkuList(checkSkuList)
  if (_cartIds.length && cartSkuList.length) {
    this.postShoppingCartQuick(cartSkuList)
  } else {
    this.$confirm('您还没选择商品，请先选择商品', '提示', {
      confirmButtonText: '确定',
      showCancelButton: false,
      type: 'warning'
    })
  }
}
```


