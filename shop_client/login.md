# 登录模块

用户购物前必须得先登录系统，登录系统需要用户名跟密码。当用户名与密码正确时，点击“登录“按钮即可成功登入系统

<!-- TOC -->

- [登录模块](#登录模块)
  - [页面展示](#页面展示)
  - [函数及调用接口](#函数及调用接口)
    - [如图所示 `1` 登录按钮](#如图所示-1-登录按钮)
    - [如图所示 `2` 记住帐号](#如图所示-2-记住帐号)

<!-- /TOC -->

## 页面展示

![image](./images/login_pc.jpg)

## 函数及调用接口
当前页面使用了vue.js

[Login.vue](https://gitlab.kyani.cn/kyani-inc/kyani-shop-pc/blob/master/src/views/login/Login.vue)


### 如图所示 `1` 登录按钮
- 当用户点击”登录“按钮后将触发 [handleLogin()](https://gitlab.kyani.cn/kyani-inc/kyani-shop-pc/blob/master/src/views/login/Login.vue#L101)函数
- 函数先进行对用户输入的用户名与密码进行前端核验，不符合条件前端有相应的错误提示。如果符合条件就请求[登录接口](https://gitlab.kyani.cn/kyani-inc/kyani-shop-pc/blob/master/src/api/urls.js#L7)进行登录
- 如果用户输入的用户名或密码不正确，则显示接口返回的错误信息

### 如图所示 `2` 记住帐号
- 用户选择`记住帐号`后第二次用上次相同的浏览器打开当前页会自动会员号显示出来