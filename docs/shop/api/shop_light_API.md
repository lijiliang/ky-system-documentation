# Stars Power Shop Restful APIS


<a name="overview"></a>
## Overview

### Version information
*Version* : 1.0


### Contact information
*Contact* : Kyani dev team china


### Tags

* address-api : 提供省市县地址类的维护
* home-api : 提供首页要获取数据
* order-after-service-api : 退单服务
* order-api : 订单服务
* payment-api : Payment Api
* product-api : 提供商品、商品组合的查询
* promotion-api : 提供推广活动/优惠卷等
* shipping-address-api : 会员收货地址服务
* shopping-cart-api : 商品购物车
* user-api : 用户服务，提供注册、登陆等功能




<a name="paths"></a>
## Paths

<a name="getalladdressusingget"></a>
### 获取所有地址数据
```
GET /starspower/shop/service/v1/address
```


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[AjaxTree](#ajaxtree)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Produces

* `\*/*`


#### Tags

* address-api


<a name="verifybycitynameusingget"></a>
### 校验市级黑名单
```
GET /starspower/shop/service/v1/address/blacklist/verify/{cityName}
```


#### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**cityName**  <br>*required*|市名|string|


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|boolean|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Produces

* `\*/*`


#### Tags

* address-api


<a name="getpickupsiteusingget"></a>
### 获取自提地址
```
GET /starspower/shop/service/v1/address/pickupsite
```


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[PickupSiteAddress](#pickupsiteaddress)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Produces

* `\*/*`


#### Tags

* address-api


<a name="getaddressbyparentidusingget"></a>
### 根据父级ID获取响应的地址
```
GET /starspower/shop/service/v1/address/{parentId}/{type}
```


#### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**parentId**  <br>*required*|父级ID,如果传0则取所有省份|integer (int32)|
|**Path**|**type**  <br>*required*|地址类型，0代表省份，1代表城市，2代表县 、区 由于千米网的错误设计，导致需要多出这个参数|integer (int32)|


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[AddressVo](#addressvo)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Produces

* `\*/*`


#### Tags

* address-api


<a name="addusingpost"></a>
### 新增收货地址
```
POST /starspower/shop/service/v1/shipAddress
```


#### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Body**|**addr**  <br>*required*|新增地址的实体信息|[ShippingInfoVo](#shippinginfovo)|


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|object|
|**201**|Created|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Consumes

* `application/json`


#### Produces

* `\*/*`


#### Tags

* shipping-address-api


<a name="listusingget_1"></a>
### 获取用户收货地址
```
GET /starspower/shop/service/v1/shipAddress
```


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ShippingInfoVo](#shippinginfovo)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Produces

* `\*/*`


#### Tags

* shipping-address-api


<a name="saveusingput"></a>
### 保存收货地址
```
PUT /starspower/shop/service/v1/shipAddress
```


#### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Body**|**addr**  <br>*required*|修改地址的实体信息|[ShippingInfoVo](#shippinginfovo)|


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|object|
|**201**|Created|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Consumes

* `application/json`


#### Produces

* `\*/*`


#### Tags

* shipping-address-api


<a name="checkshippingaddressusingpost"></a>
### 验证：收货信息表单
```
POST /starspower/shop/service/v1/shipAddress/check
```


#### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Body**|**addr**  <br>*optional*|收货信息的实体|[ShippingInfoVo](#shippinginfovo)|


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|boolean|
|**201**|Created|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Consumes

* `application/json`


#### Produces

* `\*/*`


#### Tags

* shipping-address-api


<a name="settingdefaultusingput"></a>
### 设置默认地址
```
PUT /starspower/shop/service/v1/shipAddress/default
```


#### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Body**|**params**  <br>*required*|修改的地址ID|object|


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|object|
|**201**|Created|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Consumes

* `application/json`


#### Produces

* `\*/*`


#### Tags

* shipping-address-api


<a name="getusingget"></a>
### 获取用户收货地址
```
GET /starspower/shop/service/v1/shipAddress/{id}
```


#### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**id**  <br>*optional*|收货地址ID|integer (int32)|


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ShippingInfoVo](#shippinginfovo)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Produces

* `\*/*`


#### Tags

* shipping-address-api


<a name="delbyidusingdelete"></a>
### 删除指定的地址
```
DELETE /starspower/shop/service/v1/shipAddress/{id}
```


#### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**id**  <br>*optional*|收货地址ID|integer (int32)|


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|object|
|**204**|No Content|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|


#### Produces

* `\*/*`


#### Tags

* shipping-address-api


<a name="userregusingpost"></a>
### 注册消费者
```
POST /starspower/shop/service/v1/user
```


#### Description
无折扣会员


#### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Body**|**user**  <br>*optional*|用户注册的JSON对象，包含用户名密码等等对象|[UserRegVo](#userregvo)|


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[UserCurrentVo](#usercurrentvo)|
|**201**|Created|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Consumes

* `application/json`


#### Produces

* `\*/*`


#### Tags

* user-api


<a name="changeemailusingput"></a>
### 修改邮箱并认证
```
PUT /starspower/shop/service/v1/user/changeEmail
```


#### Description
参数：password，captcha,email


#### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Body**|**params**  <br>*required*|params|object|


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|object|
|**201**|Created|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Consumes

* `application/json`


#### Produces

* `\*/*`


#### Tags

* user-api


<a name="changeemailcaptchausingpost"></a>
### 修改邮箱发送验证码)
```
POST /starspower/shop/service/v1/user/changeEmail/captcha
```


#### Description
参数：password,email


#### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Body**|**params**  <br>*required*|params|object|


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|object|
|**201**|Created|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Consumes

* `application/json`


#### Produces

* `\*/*`


#### Tags

* user-api


<a name="changemobileusingput"></a>
### 修改手机并认证提交
```
PUT /starspower/shop/service/v1/user/changeMobile
```


#### Description
参数：password，captcha,mobile


#### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Body**|**params**  <br>*required*|params|object|


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|object|
|**201**|Created|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Consumes

* `application/json`


#### Produces

* `\*/*`


#### Tags

* user-api


<a name="changemobilecaptchausingpost"></a>
### 修改手机取短信验证码)
```
POST /starspower/shop/service/v1/user/changeMobile/captcha
```


#### Description
参数：password,mobile


#### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Body**|**params**  <br>*required*|params|object|


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|object|
|**201**|Created|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Consumes

* `application/json`


#### Produces

* `\*/*`


#### Tags

* user-api


<a name="changepasswordusingput"></a>
### 修改密码
```
PUT /starspower/shop/service/v1/user/changePwd
```


#### Description
参数：password，newPassword


#### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Body**|**params**  <br>*required*|params|< string, string > map|


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|object|
|**201**|Created|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Consumes

* `application/json`


#### Produces

* `\*/*`


#### Tags

* user-api


<a name="docheckdealerregusingpost"></a>
### 验证：会员注册帐户信息表单
```
POST /starspower/shop/service/v1/user/check/dealerReg
```


#### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Body**|**user**  <br>*optional*|会员注册的JSON对象|[DealerVo](#dealervo)|


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|object|
|**201**|Created|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Consumes

* `application/json`


#### Produces

* `\*/*`


#### Tags

* user-api


<a name="getcurrentloginuserusingget"></a>
### 获取当前登录会员的消息
```
GET /starspower/shop/service/v1/user/current
```


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[UserCurrentVo](#usercurrentvo)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Produces

* `\*/*`


#### Tags

* user-api


<a name="dealerregusingpost"></a>
### 注册会员/修改并重新下单
```
POST /starspower/shop/service/v1/user/dealer
```


#### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Body**|**dealer**  <br>*optional*|包含用户信息和订单信息，点击支付的时候同事调用此api|[DealerRegVo](#dealerregvo)|


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[UserCurrentVo](#usercurrentvo)|
|**201**|Created|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Consumes

* `application/json`


#### Produces

* `\*/*`


#### Tags

* user-api


<a name="dealerregusingget"></a>
### 获取注册会员信息，用于修改会员信息和重新下注册单
```
GET /starspower/shop/service/v1/user/dealer
```


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[DealerRegVo](#dealerregvo)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Produces

* `\*/*`


#### Tags

* user-api


<a name="updateinfousingpost"></a>
### 更新基本信息
```
POST /starspower/shop/service/v1/user/info
```


#### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Body**|**userModif**  <br>*required*|userModif|[UserInfoModifVo](#userinfomodifvo)|


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[UserInfoModifVo](#userinfomodifvo)|
|**201**|Created|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Consumes

* `application/json`


#### Produces

* `\*/*`


#### Tags

* user-api


<a name="getuserinfousingget"></a>
### 获取用户基础信息
```
GET /starspower/shop/service/v1/user/info
```


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[UserInfoModifVo](#userinfomodifvo)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Produces

* `\*/*`


#### Tags

* user-api


<a name="logoutusingput"></a>
### 退出登陆
```
PUT /starspower/shop/service/v1/user/logout
```


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|object|
|**201**|Created|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Consumes

* `application/json`


#### Produces

* `\*/*`


#### Tags

* user-api


<a name="resetpwdusingput"></a>
### 重置密码
```
PUT /starspower/shop/service/v1/user/resetPwd
```


#### Description
参数：userName，captcha,newPassword


#### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Body**|**params**  <br>*required*|params|object|


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|object|
|**201**|Created|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Consumes

* `application/json`


#### Produces

* `\*/*`


#### Tags

* user-api


<a name="resetpwdcaptchausingpost"></a>
### 重置密码获取短信验证码)
```
POST /starspower/shop/service/v1/user/resetPwd/captcha
```


#### Description
参数：userName,mobile


#### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Body**|**params**  <br>*required*|params|object|


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|object|
|**201**|Created|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Consumes

* `application/json`


#### Produces

* `\*/*`


#### Tags

* user-api


<a name="getyearamountusingpost"></a>
### 跟据身份证查询年额度)
```
POST /starspower/shop/service/v1/user/yearAmount
```


#### Description
参数：buyerRealName,buyerIdCard


#### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Body**|**params**  <br>*required*|params|< string, string > map|


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|object|
|**201**|Created|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Consumes

* `application/json`


#### Produces

* `\*/*`


#### Tags

* user-api


<a name="homedatausingget"></a>
### 首页数据
```
GET /starspower/shop/service/v2/home
```


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|object|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Produces

* `\*/*`


#### Tags

* home-api


<a name="saveusingpost"></a>
### 保存订单
```
POST /starspower/shop/service/v2/order
```


#### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Body**|**submitParam**  <br>*optional*|订单提交模型|[OrderSubmitVo](#ordersubmitvo)|


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[OrderSubmitResultVo](#ordersubmitresultvo)|
|**201**|Created|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Consumes

* `application/json`


#### Produces

* `\*/*`


#### Tags

* order-api


<a name="cancelusingpost"></a>
### 取消订单(number:订单号,reason：取消原因)
```
POST /starspower/shop/service/v2/order/cancel
```


#### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Body**|**param**  <br>*required*|param|< string, string > map|


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[AjaxResult](#ajaxresult)|
|**201**|Created|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Consumes

* `application/json`


#### Produces

* `\*/*`


#### Tags

* order-api


<a name="getcanceltypeusingget"></a>
### 获取订单取消原因类型
```
GET /starspower/shop/service/v2/order/cancel/Type
```


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[Dictionary](#dictionary)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Produces

* `\*/*`


#### Tags

* order-api


<a name="completeorderusingget"></a>
### 订单支付后回调完成页，支付成功/失败
```
GET /starspower/shop/service/v2/order/complete/{number}
```


#### Description
success,errMsg,payAmount订单金额，regOrder是否注册单，canReOrder是否可以重新下单,paymentStatus支付状态，tradeNo订单号，userName会员CNID


#### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**number**  <br>*required*|number|string|


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|object|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Produces

* `\*/*`


#### Tags

* order-api


<a name="listusingget"></a>
### 会员中心订单列表，参数：1、size每页数 2、num页数 3、type（0全部,1待处理，2已发货,3已取消,4退款/退货）
```
GET /starspower/shop/service/v2/order/list/{size}/{num}
```


#### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**num**  <br>*required*|num|integer (int32)|
|**Path**|**size**  <br>*required*|size|integer (int32)|
|**Query**|**type**  <br>*optional*|type|integer (int32)|


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[OrderListVo](#orderlistvo)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Produces

* `\*/*`


#### Tags

* order-api


<a name="previewusingpost"></a>
### 下单预览页
```
POST /starspower/shop/service/v2/order/preview
```


#### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Body**|**submitParam**  <br>*required*|submitParam|[OrderSubmitVo](#ordersubmitvo)|


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[OrderPreviewVo](#orderpreviewvo)|
|**201**|Created|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Consumes

* `application/json`


#### Produces

* `\*/*`


#### Tags

* order-api


<a name="regpreviewusingpost"></a>
### 注册下单预览页
```
POST /starspower/shop/service/v2/order/regPreview
```


#### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Body**|**submitParam**  <br>*required*|submitParam|[OrderSubmitVo](#ordersubmitvo)|


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[OrderPreviewVo](#orderpreviewvo)|
|**201**|Created|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Consumes

* `application/json`


#### Produces

* `\*/*`


#### Tags

* order-api


<a name="subviewusingget"></a>
### 会员订单详情
```
GET /starspower/shop/service/v2/order/view/{number}
```


#### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**number**  <br>*required*|number|string|


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[OrderSubViewVo](#ordersubviewvo)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Produces

* `\*/*`


#### Tags

* order-api


<a name="saverefundusingpost"></a>
### 申请订单退款,参数：订单号number、原因reason、描述desc
```
POST /starspower/shop/service/v2/orderAfterService/refund
```


#### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Body**|**params**  <br>*required*|params|< string, string > map|


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|object|
|**201**|Created|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Consumes

* `application/json`


#### Produces

* `\*/*`


#### Tags

* order-after-service-api


<a name="getrefundviewusingget"></a>
### 退款详情
```
GET /starspower/shop/service/v2/orderAfterService/refund/details/{number}
```


#### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**number**  <br>*required*|number|string|


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[OrderAfterServiceViewVo](#orderafterserviceviewvo)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Produces

* `\*/*`


#### Tags

* order-after-service-api


<a name="applyrefundinfousingget"></a>
### 申请订单退款需要数据
```
GET /starspower/shop/service/v2/orderAfterService/refund/{orderNumber}
```


#### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**orderNumber**  <br>*required*|orderNumber|string|


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|object|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Produces

* `\*/*`


#### Tags

* order-after-service-api


<a name="savereturngoodsusingpost"></a>
### 申请订单退货,参数：订单号number、原因reason、描述desc
```
POST /starspower/shop/service/v2/orderAfterService/returnGoods
```


#### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Body**|**params**  <br>*required*|params|< string, string > map|


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|object|
|**201**|Created|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Consumes

* `application/json`


#### Produces

* `\*/*`


#### Tags

* order-after-service-api


<a name="getreturngoodsviewusingget"></a>
### 退货详情
```
GET /starspower/shop/service/v2/orderAfterService/returnGoods/details/{number}
```


#### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**number**  <br>*required*|number|string|


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[OrderAfterServiceViewVo](#orderafterserviceviewvo)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Produces

* `\*/*`


#### Tags

* order-after-service-api


<a name="applyreturngoodsinfousingget"></a>
### 申请订单单退货需要数据
```
GET /starspower/shop/service/v2/orderAfterService/returnGoods/{orderNumber}
```


#### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**orderNumber**  <br>*required*|orderNumber|string|


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|object|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Produces

* `\*/*`


#### Tags

* order-after-service-api


<a name="paycallbackusingpost"></a>
### 支付回调(异步)
```
POST /starspower/shop/service/v2/payment/callback
```


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|object|
|**201**|Created|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Consumes

* `application/json`


#### Produces

* `\*/*`


#### Tags

* payment-api


<a name="gopayusingget"></a>
### 订单去支付
```
GET /starspower/shop/service/v2/payment/goPay/{number}
```


#### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**number**  <br>*required*|number|string|


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[PayResultVo](#payresultvo)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Produces

* `\*/*`


#### Tags

* payment-api


<a name="orderinfousingget"></a>
### 订单信息
```
GET /starspower/shop/service/v2/payment/orders/{num}
```


#### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**num**  <br>*required*|num|string|


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|object|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Produces

* `\*/*`


#### Tags

* payment-api


<a name="verifyorderusingget"></a>
### 订单验证
```
GET /starspower/shop/service/v2/payment/verify/order/{num}/{price}
```


#### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**num**  <br>*required*|num|string|
|**Path**|**price**  <br>*required*|price|string|


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[AjaxResult](#ajaxresult)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Produces

* `\*/*`


#### Tags

* payment-api


<a name="verifyordersubusingget"></a>
### 子订单验证
```
GET /starspower/shop/service/v2/payment/verify/ordersub/{num}/{price}
```


#### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**num**  <br>*required*|num|string|
|**Path**|**price**  <br>*required*|price|string|


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[AjaxResult](#ajaxresult)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Produces

* `\*/*`


#### Tags

* payment-api


<a name="columnlistusingget"></a>
### 跟据产品栏目获取产品列表
```
GET /starspower/shop/service/v2/product/column/{code}/{size}/{num}
```


#### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**code**  <br>*required*|code|string|
|**Path**|**num**  <br>*required*|num|integer (int32)|
|**Path**|**size**  <br>*required*|size|integer (int32)|


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ProductColumnVo](#productcolumnvo)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Produces

* `\*/*`


#### Tags

* product-api


<a name="getdetailusingget"></a>
### 根据Id获取详情
```
GET /starspower/shop/service/v2/product/detail/{id}
```


#### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**id**  <br>*required*|id|integer (int32)|


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ProductViewVo](#productviewvo)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Produces

* `\*/*`


#### Tags

* product-api


<a name="quicklistusingget"></a>
### 获取快速下单产品列表
```
GET /starspower/shop/service/v2/product/quick
```


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ProductListVo](#productlistvo)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Produces

* `\*/*`


#### Tags

* product-api


<a name="regproductlistusingget"></a>
### 获取注册产品列表
```
GET /starspower/shop/service/v2/product/register/{size}/{num}
```


#### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**num**  <br>*required*|num|integer (int32)|
|**Path**|**size**  <br>*required*|size|integer (int32)|


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ProductColumnVo](#productcolumnvo)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Produces

* `\*/*`


#### Tags

* product-api


<a name="getrelationgroupusingget"></a>
### 获取关联套组
```
GET /starspower/shop/service/v2/product/relation/{limit}/{productId}
```


#### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**limit**  <br>*required*|limit|integer (int32)|
|**Path**|**productId**  <br>*required*|productId|integer (int32)|


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ProductListVo](#productlistvo)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Produces

* `\*/*`


#### Tags

* product-api


<a name="verifyusingpost"></a>
### 验证优惠券
```
POST /starspower/shop/service/v2/promotion/coupon
```


#### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Body**|**submitParam**  <br>*optional*|订单提交模型|[OrderSubmitVo](#ordersubmitvo)|


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|object|
|**201**|Created|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Consumes

* `application/json`


#### Produces

* `\*/*`


#### Tags

* promotion-api


<a name="saveusingpost_2"></a>
### 更新购物车，增加或减少某个商品的数量
```
POST /starspower/shop/service/v2/shoppingcart
```


#### Description
需要传三个属性：productId,sku,quantity,如果传入的数量和原有的数量之和为0则删除商品，和不能小于0


#### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Body**|**sc**  <br>*required*|sc|[ShoppingCart](#shoppingcart)|


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|object|
|**201**|Created|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Consumes

* `application/json`


#### Produces

* `\*/*`


#### Tags

* shopping-cart-api


<a name="listusingget_2"></a>
### 获取购物车中所有的商品
```
GET /starspower/shop/service/v2/shoppingcart
```


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ShoppingCartVo](#shoppingcartvo)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Produces

* `\*/*`


#### Tags

* shopping-cart-api


<a name="clearusingdelete"></a>
### 清空购物车
```
DELETE /starspower/shop/service/v2/shoppingcart
```


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|object|
|**204**|No Content|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|


#### Produces

* `\*/*`


#### Tags

* shopping-cart-api


<a name="getcountusingget"></a>
### 获取购物车中所有的商品数量
```
GET /starspower/shop/service/v2/shoppingcart/count
```


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|object|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Produces

* `\*/*`


#### Tags

* shopping-cart-api


<a name="saveusingpost_1"></a>
### 从快速下单更新购物车，更新某个商品的数量
```
POST /starspower/shop/service/v2/shoppingcart/quick
```


#### Description
需要传三个属性：productId,sku,quantity,如果传入的数量和原有的数量之和为0则删除商品，和不能小于0


#### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Body**|**arr**  <br>*required*|arr|< [ShoppingCart](#shoppingcart) > array|


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|object|
|**201**|Created|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Consumes

* `application/json`


#### Produces

* `\*/*`


#### Tags

* shopping-cart-api


<a name="delbyidusingdelete_1"></a>
### 删除指定的购物车中的商品
```
DELETE /starspower/shop/service/v2/shoppingcart/{id}
```


#### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**id**  <br>*optional*|购物车ID|integer (int32)|


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|object|
|**204**|No Content|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|


#### Produces

* `\*/*`


#### Tags

* shopping-cart-api




<a name="definitions"></a>
## Definitions

<a name="addressvo"></a>
### AddressVo
地址实体


|Name|Schema|
|---|---|
|**id**  <br>*optional*|string|
|**name**  <br>*optional*|string|
|**parentId**  <br>*optional*|string|


<a name="26ae37cde47f4feac7dff9d95968218c"></a>
### AjaxPagination«ProductListVo»

|Name|Schema|
|---|---|
|**data**  <br>*optional*|< [ProductListVo](#productlistvo) > array|
|**isFirstPage**  <br>*optional*|boolean|
|**isLastPage**  <br>*optional*|boolean|
|**pageNum**  <br>*optional*|integer (int32)|
|**pageSize**  <br>*optional*|integer (int32)|
|**pages**  <br>*optional*|integer (int32)|
|**total**  <br>*optional*|integer (int32)|


<a name="ajaxresult"></a>
### AjaxResult

|Name|Schema|
|---|---|
|**data**  <br>*optional*|object|
|**message**  <br>*optional*|string|
|**server**  <br>*optional*|string|
|**statusCode**  <br>*optional*|string|
|**success**  <br>*optional*|boolean|
|**total**  <br>*optional*|integer (int64)|


<a name="ajaxtree"></a>
### AjaxTree

|Name|Schema|
|---|---|
|**children**  <br>*optional*|< [AjaxTree](#ajaxtree) > array|
|**label**  <br>*optional*|string|
|**value**  <br>*optional*|string|


<a name="dealerregvo"></a>
### DealerRegVo

|Name|Description|Schema|
|---|---|---|
|**buyerIdCard**  <br>*optional*|订购人身份证|string|
|**buyerMobile**  <br>*optional*|订购人手机号|string|
|**buyerRealName**  <br>*optional*|订购人名称|string|
|**couponCode**  <br>*optional*|优惠卷码信息|string|
|**dealer**  <br>*optional*|会员信息|[DealerVo](#dealervo)|
|**orderLogistics**  <br>*optional*|收货信息|[OrderLogisticsVo](#orderlogisticsvo)|
|**orderOriginalPrice**  <br>*optional*|订单原金额|string|
|**orderPayAmount**  <br>*optional*|订单应付金额|string|
|**orderPreferential**  <br>*optional*|订单优惠|string|
|**productGroupId**  <br>*optional*|产品套组ID|string|
|**registerOrderNumber**  <br>*optional*|注册订单号，用于重下注册单用|string|


<a name="dealervo"></a>
### DealerVo

|Name|Description|Schema|
|---|---|---|
|**addrCity**  <br>*optional*|市|string|
|**addrCounty**  <br>*optional*|县/区|string|
|**addrDetail**  <br>*optional*|详细地址|string|
|**addrPrivonce**  <br>*optional*|省|string|
|**email**  <br>*optional*|邮箱|string|
|**firstName**  <br>*optional*|姓氏|string|
|**gender**  <br>*optional*|性别(1男2女)|string|
|**idCard**  <br>*optional*|身份证号码|string|
|**lastName**  <br>*optional*|名字|string|
|**password**  <br>*optional*|密码|string|
|**phoneNumber**  <br>*optional*|手机号码|string|
|**postcode**  <br>*optional*|邮编|string|
|**reRecommender**  <br>*optional*|确认推荐人（安置人）|string|
|**recommender**  <br>*optional*|推荐人，KID，例如：CN123456或123456|string|
|**telNumber**  <br>*optional*|固定电话号码|string|


<a name="dictionary"></a>
### Dictionary

|Name|Schema|
|---|---|
|**children**  <br>*optional*|< [Dictionary](#dictionary) > array|
|**id**  <br>*optional*|integer (int32)|
|**leaf**  <br>*optional*|boolean|
|**name**  <br>*optional*|string|
|**parentId**  <br>*optional*|integer (int32)|
|**value**  <br>*optional*|string|


<a name="map"></a>
### Map
*Type* : < string, object > map


<a name="ec171edd847026ed605d65393fdab658"></a>
### Map«string,string»
*Type* : < string, string > map


<a name="orderafterservicedetailvo"></a>
### OrderAfterServiceDetailVo

|Name|Description|Schema|
|---|---|---|
|**id**  <br>*optional*||integer (int32)|
|**orderNumber**  <br>*optional*|订单编号|string|
|**orderPrice**  <br>*optional*|订单金额|string|
|**paymentInstrument**  <br>*optional*|支付工具|string|
|**paymentNumber**  <br>*optional*|支付流水编号|string|
|**paymentSupplierName**  <br>*optional*|支付供应商|string|
|**paymentSupplierNumber**  <br>*optional*|支付供流水号|string|
|**permitRefund**  <br>*optional*||boolean|
|**products**  <br>*optional*|明细产品|< [OrderListProductVo](#orderlistproductvo) > array|
|**refundPrice**  <br>*optional*|退款金额|string|
|**status**  <br>*optional*|状态|string|


<a name="orderafterservicegoodsvo"></a>
### OrderAfterServiceGoodsVo

|Name|Description|Schema|
|---|---|---|
|**id**  <br>*optional*||integer (int32)|
|**quantity**  <br>*optional*|购买数量|integer (int32)|
|**returnQuantity**  <br>*optional*|退货数量|integer (int32)|
|**sku**  <br>*optional*|商品sku|string|
|**skuName**  <br>*optional*|商品名称|string|
|**skuPicPath**  <br>*optional*|商品图片|string|


<a name="orderafterservicerecordvo"></a>
### OrderAfterServiceRecordVo

|Name|Description|Schema|
|---|---|---|
|**createTime**  <br>*optional*|时间|string|
|**creator**  <br>*optional*|操作人|string|
|**description**  <br>*optional*|详细信息|string|
|**isAdmin**  <br>*optional*|是否后台处理|boolean|
|**title**  <br>*optional*|标题|string|


<a name="orderafterserviceviewvo"></a>
### OrderAfterServiceViewVo

|Name|Description|Schema|
|---|---|---|
|**createTime**  <br>*optional*|申请时间|string|
|**currentStep**  <br>*optional*|当前步骤|integer (int32)|
|**currentTitle**  <br>*optional*|当前步骤标题|string|
|**details**  <br>*optional*|子订单列表|< [OrderAfterServiceDetailVo](#orderafterservicedetailvo) > array|
|**number**  <br>*optional*|退单编号|string|
|**orderNumber**  <br>*optional*|订单编号|string|
|**paymentTotal**  <br>*optional*|申请退单金额|string|
|**permitApprove**  <br>*optional*|允许审批|boolean|
|**permitCancel**  <br>*optional*|允许取消订单|boolean|
|**permitRefund**  <br>*optional*|允许退款|boolean|
|**permitReturnGoods**  <br>*optional*|允许退货|boolean|
|**products**  <br>*optional*|子订单列表|< [OrderAfterServiceGoodsVo](#orderafterservicegoodsvo) > array|
|**reason**  <br>*optional*|退单原因|string|
|**records**  <br>*optional*|流程进度|< [OrderAfterServiceRecordVo](#orderafterservicerecordvo) > array|
|**refundTotal**  <br>*optional*|实际退款金额|string|
|**status**  <br>*optional*|状态|string|
|**type**  <br>*optional*|类型|string|
|**typeName**  <br>*optional*|类型|string|


<a name="orderbuyervo"></a>
### OrderBuyerVo

|Name|Schema|
|---|---|
|**idCardNumber**  <br>*optional*|string|
|**orderNumber**  <br>*optional*|string|
|**phoneNumber**  <br>*optional*|string|
|**realName**  <br>*optional*|string|


<a name="orderlistproductvo"></a>
### OrderListProductVo

|Name|Description|Schema|
|---|---|---|
|**available**  <br>*optional*|是否有货|boolean|
|**imgPath**  <br>*optional*|图片|string|
|**price**  <br>*optional*|单价|string|
|**productAttrs**  <br>*optional*|SKU属性|string|
|**productId**  <br>*optional*|产品ID|integer (int32)|
|**productName**  <br>*optional*|产品名称|string|
|**productSku**  <br>*optional*|产品名称|string|
|**quantity**  <br>*optional*|数量|integer (int32)|
|**total**  <br>*optional*|合计|string|


<a name="orderlistvo"></a>
### OrderListVo

|Name|Description|Schema|
|---|---|---|
|**number**  <br>*optional*|主订单号|string|
|**paymentTime**  <br>*optional*|完成支付时间|string|
|**permitCancel**  <br>*optional*|允许取消订单|boolean|
|**permitPayment**  <br>*optional*|允许支付|boolean|
|**permitReOrder**  <br>*optional*|允许重新下单|boolean|
|**permitRefund**  <br>*optional*|允许退款|boolean|
|**permitRefundDetail**  <br>*optional*|允许查看退款详情|boolean|
|**permitReturnGoods**  <br>*optional*|允许退货|boolean|
|**permitReturnGoodsDetail**  <br>*optional*|允许查看退货详情|boolean|
|**products**  <br>*optional*|明细清单|< [OrderListProductVo](#orderlistproductvo) > array|
|**subList**  <br>*optional*|子订单|< [OrderSubListVo](#ordersublistvo) > array|
|**time**  <br>*optional*|下单时间|string|
|**totalPrice**  <br>*optional*|订单总额|string|


<a name="orderlogisticsvo"></a>
### OrderLogisticsVo

|Name|Description|Schema|
|---|---|---|
|**consigneeAddressCity**  <br>*optional*|收货人地址-市|string|
|**consigneeAddressCityId**  <br>*optional*|收货人地址-市ID|integer (int32)|
|**consigneeAddressCounty**  <br>*optional*|收货人地址-县|string|
|**consigneeAddressCountyId**  <br>*optional*|收货人地址-县ID|integer (int32)|
|**consigneeAddressDetail**  <br>*optional*|收货人地址-详情|string|
|**consigneeAddressProvince**  <br>*optional*|收货人地址-省|string|
|**consigneeAddressProvinceId**  <br>*optional*|收货人地址-省ID|integer (int32)|
|**consigneeAddressZipCode**  <br>*optional*|收货人地址-邮编|integer (int32)|
|**consigneeIDCardNumber**  <br>*optional*|收货人身份证|string|
|**consigneeName**  <br>*optional*|收货人姓名|string|
|**consigneePhoneNumber**  <br>*optional*|收货人电话|string|
|**deliveryTime**  <br>*optional*|发货时间|string|
|**expressCode**  <br>*optional*|快递code|string|
|**expressName**  <br>*optional*|快递名称|string|
|**expressNumber**  <br>*optional*|快递单号|string|
|**fullConsigneeAddress**  <br>*optional*||string|
|**isPickup**  <br>*optional*|是否自提|boolean|
|**orderNumber**  <br>*optional*||string|
|**pickupSite**  <br>*optional*|自提点|string|


<a name="orderpreviewvo"></a>
### OrderPreviewVo

|Name|Description|Schema|
|---|---|---|
|**buyProducts**  <br>*optional*|购买清单|< [OrderListProductVo](#orderlistproductvo) > array|
|**buyerIdCard**  <br>*optional*|订购人身份证|string|
|**buyerMobile**  <br>*optional*|订购人手机号|string|
|**buyerRealName**  <br>*optional*|订购人姓名|string|
|**checkBuyer**  <br>*optional*|验证订购人是否通过|boolean|
|**crossBorderOrders**  <br>*optional*|跨境子订单|< [OrderSubListVo](#ordersublistvo) > array|
|**demesticOrders**  <br>*optional*|国内子订单|< [OrderSubListVo](#ordersublistvo) > array|
|**expressFee**  <br>*optional*|运费|string|
|**hasCrossBorder**  <br>*optional*|是否有跨境单|boolean|
|**hasDemestic**  <br>*optional*|是否有国内单|boolean|
|**hasVirtual**  <br>*optional*|是否有虚拟单|boolean|
|**isEnableCoupon**  <br>*optional*|是否启用优惠卷|boolean|
|**originalPrice**  <br>*optional*|原价|string|
|**productTotal**  <br>*optional*|商品总数|integer (int32)|
|**salesPrict**  <br>*optional*|销售价|string|
|**shippingInfo**  <br>*optional*|默认收货地址|[ShippingInfoVo](#shippinginfovo)|
|**sumDiscount**  <br>*optional*|总优惠|string|
|**tax**  <br>*optional*|关税|string|
|**total**  <br>*optional*|总计|string|
|**virtualOrders**  <br>*optional*|虚拟子订单|< [OrderSubListVo](#ordersublistvo) > array|
|**yearLimit**  <br>*optional*|跨境年额度|string|


<a name="ordersublistvo"></a>
### OrderSubListVo

|Name|Description|Schema|
|---|---|---|
|**buyer**  <br>*optional*|买家信息|[OrderBuyerVo](#orderbuyervo)|
|**logistics**  <br>*optional*|收货人信息|[OrderLogisticsVo](#orderlogisticsvo)|
|**number**  <br>*optional*|子订单号|string|
|**paymentNumber**  <br>*optional*|支付流水号|string|
|**paymentTime**  <br>*optional*|支付时间|string|
|**productQuantity**  <br>*optional*|产品数|integer (int32)|
|**products**  <br>*optional*|明细产品|< [OrderListProductVo](#orderlistproductvo) > array|
|**status**  <br>*optional*|最新状态|string|
|**totalMarketPrice**  <br>*optional*|市场价合计|string|
|**totalPrice**  <br>*optional*|合计|string|
|**tradeMethod**  <br>*optional*|贸易方式|string|


<a name="ordersubviewvo"></a>
### OrderSubViewVo

|Name|Description|Schema|
|---|---|---|
|**buyer**  <br>*optional*|购买人信息|[OrderBuyerVo](#orderbuyervo)|
|**cancelReason**  <br>*optional*|订单取消原因|string|
|**completeTime**  <br>*optional*|完成时间|string|
|**createTime**  <br>*optional*|下单时间|string|
|**logistics**  <br>*optional*|物流信息|[OrderLogisticsVo](#orderlogisticsvo)|
|**logisticsFee**  <br>*optional*|物流费用|string|
|**number**  <br>*optional*|订单编号|string|
|**paymentInstrument**  <br>*optional*|支付工具|string|
|**paymentNumber**  <br>*optional*|支付流水号|string|
|**paymentSupplier**  <br>*optional*|支付供应商|string|
|**paymentSupplierNumber**  <br>*optional*|支付商流水号|string|
|**paymentTime**  <br>*optional*|支付时间|string|
|**price**  <br>*optional*|成交价格|string|
|**priceMarket**  <br>*optional*|市场价格|string|
|**products**  <br>*optional*|订单商品列表|< [OrderListProductVo](#orderlistproductvo) > array|
|**status**  <br>*optional*|最新状态|string|
|**tax**  <br>*optional*|税|string|
|**tradeMethod**  <br>*optional*|贸易方式|string|


<a name="ordersubmitresultvo"></a>
### OrderSubmitResultVo

|Name|Description|Schema|
|---|---|---|
|**cnid**  <br>*optional*|会员编号|string|
|**message**  <br>*optional*|返回信息|string|
|**orderNumber**  <br>*optional*|订单编号|string|
|**paymentLink**  <br>*optional*|支付链接|string|
|**price**  <br>*optional*|支付金额|string|
|**regOrderIsPayment**  <br>*optional*|注册单是否完成|boolean|
|**success**  <br>*optional*|是否成功|boolean|
|**time**  <br>*optional*|订单时间|integer (int64)|


<a name="ordersubmitvo"></a>
### OrderSubmitVo

|Name|Description|Schema|
|---|---|---|
|**buyProducts**  <br>*optional*|下单产品：productId、sku、quantity|< [Map«string,string»](#ec171edd847026ed605d65393fdab658) > array|
|**buyerIdCard**  <br>*optional*|订购人身份证|string|
|**buyerMobile**  <br>*optional*|订购人手机号|string|
|**buyerRealName**  <br>*optional*|订购人姓名|string|
|**couponCode**  <br>*optional*|优惠券码|string|
|**orderLogistics**  <br>*optional*|收货地址|[OrderLogisticsVo](#orderlogisticsvo)|
|**pickupAddress**  <br>*optional*|自提货地址|[OrderLogisticsVo](#orderlogisticsvo)|
|**shoppingCartIds**  <br>*optional*|购物车ID组|< integer (int32) > array|


<a name="payresultvo"></a>
### PayResultVo

|Name|Description|Schema|
|---|---|---|
|**data**  <br>*optional*|返回数据|object|
|**errMsg**  <br>*optional*|错误信息|string|
|**payTime**  <br>*optional*|支付时间|integer (int64)|
|**payTransBillNo**  <br>*optional*|支付流水号|string|
|**price**  <br>*optional*|支付金额|string|
|**success**  <br>*optional*|是否成功|boolean|
|**tradeNo**  <br>*optional*|主订单号|string|


<a name="pickupsiteaddress"></a>
### PickupSiteAddress

|Name|Description|Schema|
|---|---|---|
|**addressDetail**  <br>*optional*|地址详情|string|
|**city**  <br>*optional*|市|string|
|**county**  <br>*optional*|县|string|
|**createTime**  <br>*optional*||string (date-time)|
|**creator**  <br>*optional*||string|
|**enable**  <br>*optional*|是否启用|boolean|
|**id**  <br>*optional*||integer (int32)|
|**linkman**  <br>*optional*|联系人|string|
|**phoneNumber**  <br>*optional*|联系电话|string|
|**province**  <br>*optional*|省|string|
|**siteName**  <br>*optional*|自提点名称|string|
|**zipCode**  <br>*optional*|邮编|integer (int32)|


<a name="productcolumnvo"></a>
### ProductColumnVo

|Name|Description|Schema|
|---|---|---|
|**code**  <br>*optional*|编码|string|
|**customParamsMap**  <br>*optional*|自定义参数|< string, string > map|
|**orderBy**  <br>*optional*|排序方式|string|
|**pagingData**  <br>*optional*||[AjaxPagination«ProductListVo»](#26ae37cde47f4feac7dff9d95968218c)|
|**picPath**  <br>*optional*|图片路径|string|
|**title**  <br>*optional*|标题|string|


<a name="productgroupitemvo"></a>
### ProductGroupItemVo

|Name|Description|Schema|
|---|---|---|
|**imgPath**  <br>*optional*|产品图片|string|
|**inventoryQuantity**  <br>*optional*|商品库存|integer (int32)|
|**name**  <br>*optional*|产品名称|string|
|**quantity**  <br>*optional*|产品数量|integer (int32)|
|**sku**  <br>*optional*|产品sku|string|


<a name="productlistvo"></a>
### ProductListVo

|Name|Description|Schema|
|---|---|---|
|**cv**  <br>*optional*|cv积分|string|
|**groupItems**  <br>*optional*|套组明细|< [ProductGroupItemVo](#productgroupitemvo) > array|
|**id**  <br>*optional*||string|
|**img**  <br>*optional*|图片|string|
|**isCrossBonded**  <br>*optional*|是否跨境商品|boolean|
|**isGroup**  <br>*optional*|是否套组|boolean|
|**name**  <br>*optional*|名称|string|
|**originalPrice**  <br>*optional*|原价|string|
|**qv**  <br>*optional*|qv积分|string|
|**salePrice**  <br>*optional*|销售价|string|
|**skus**  <br>*optional*|套组明细|< [ProductSkuVo](#productskuvo) > array|


<a name="productskuvo"></a>
### ProductSkuVo

|Name|Description|Schema|
|---|---|---|
|**attrProperties**  <br>*optional*|属性横向值|string|
|**attrValue**  <br>*optional*|属性选择值|string|
|**imgPath**  <br>*optional*|默认图片|string|
|**inventoryQuantity**  <br>*optional*|库存量|integer (int32)|
|**marketPrice**  <br>*optional*|市场价|string|
|**name**  <br>*optional*|sku名称|string|
|**salesPrice**  <br>*optional*|销售价|string|
|**sku**  <br>*optional*|sku|string|
|**taxesPrice**  <br>*optional*|税费|string|


<a name="productviewvo"></a>
### ProductViewVo

|Name|Description|Schema|
|---|---|---|
|**available**  <br>*optional*|是否可售|boolean|
|**cv**  <br>*optional*|cv积分|integer (int32)|
|**description**  <br>*optional*|描述|string|
|**group**  <br>*optional*||boolean|
|**groupItems**  <br>*optional*|套组明细|< [ProductGroupItemVo](#productgroupitemvo) > array|
|**id**  <br>*optional*|产品ID|integer (int32)|
|**imgs**  <br>*optional*|产品图|< string > array|
|**intro**  <br>*optional*|简介|string|
|**isSales**  <br>*optional*|是否可售|boolean|
|**name**  <br>*optional*|产品名称|string|
|**originalPrice**  <br>*optional*|原价|string|
|**qv**  <br>*optional*|qv积分|integer (int32)|
|**salePrice**  <br>*optional*|销售价|string|
|**salesAttrs**  <br>*optional*|产品销售属性|< [Map](#map) > array|
|**skus**  <br>*optional*|单品SKU|< [ProductSkuVo](#productskuvo) > array|
|**specAttrs**  <br>*optional*|产品规格属性|< [Map](#map) > array|


<a name="shippinginfovo"></a>
### ShippingInfoVo
收货地址信息


|Name|Description|Schema|
|---|---|---|
|**addrAlias**  <br>*optional*|地址别名|string|
|**addrCity**  <br>*optional*|市ID|string|
|**addrCityName**  <br>*optional*|市|string|
|**addrCounty**  <br>*optional*|县/区ID|string|
|**addrCountyName**  <br>*optional*|县/区|string|
|**addrDetail**  <br>*optional*|详细地址|string|
|**addrPrivonce**  <br>*optional*|省ID|string|
|**addrPrivonceName**  <br>*optional*|省|string|
|**consignee**  <br>*optional*|收件人|string|
|**default**  <br>*optional*||boolean|
|**id**  <br>*optional*|地址ID|string|
|**idCard**  <br>*optional*|身份证号码|string|
|**phoneNumber**  <br>*optional*|手机号码|string|
|**postcode**  <br>*optional*|邮编|string|
|**telNumber**  <br>*optional*|固定电话号码|string|


<a name="shoppingcart"></a>
### ShoppingCart

|Name|Description|Schema|
|---|---|---|
|**createTime**  <br>*optional*|创建时间|string (date-time)|
|**customerId**  <br>*optional*|会员id|integer (int32)|
|**id**  <br>*optional*||integer (int32)|
|**price**  <br>*optional*|单价|number|
|**productId**  <br>*optional*|产品ID|integer (int32)|
|**quantity**  <br>*optional*|数量|integer (int32)|
|**sku**  <br>*optional*|SKU|string|


<a name="shoppingcartvo"></a>
### ShoppingCartVo

|Name|Description|Schema|
|---|---|---|
|**attrProperties**  <br>*optional*|SKU属性|string|
|**available**  <br>*optional*|是否可售|boolean|
|**cv**  <br>*optional*|积分|integer (int32)|
|**groupItems**  <br>*optional*|套组明细，name/quantity|< [Map«string,string»](#ec171edd847026ed605d65393fdab658) > array|
|**id**  <br>*optional*||integer (int32)|
|**imgPath**  <br>*optional*|图片|string|
|**inventoryQuantity**  <br>*optional*|库存|integer (int32)|
|**isGroup**  <br>*optional*|是否套组|boolean|
|**isSales**  <br>*optional*|是否可售|boolean|
|**originalPrice**  <br>*optional*|原价|string|
|**productId**  <br>*optional*|产品ID|integer (int32)|
|**productName**  <br>*optional*|产品名|string|
|**quantity**  <br>*optional*|数量|integer (int32)|
|**qv**  <br>*optional*|积分|integer (int32)|
|**salesPrice**  <br>*optional*|销售价|string|
|**shoppingCartPrice**  <br>*optional*|购物车价|string|
|**sku**  <br>*optional*|SKU|string|
|**total**  <br>*optional*|合计|string|


<a name="usercurrentvo"></a>
### UserCurrentVo
用户在线信息


|Name|Description|Schema|
|---|---|---|
|**errMsg**  <br>*optional*|错误信息|string|
|**isVerifyEmail**  <br>*optional*|是否验证邮箱|boolean|
|**isVerifyPhone**  <br>*optional*|是否验证手机|boolean|
|**memberFlag**  <br>*optional*|是否会员|boolean|
|**payUrl**  <br>*optional*|支付链接|string|
|**price**  <br>*optional*|订单金额|string|
|**realName**  <br>*optional*|真实姓名|string|
|**success**  <br>*optional*|是否成功|boolean|
|**tradeNo**  <br>*optional*|订单编号|string|
|**userImgPath**  <br>*optional*|用户头像|string|
|**userName**  <br>*optional*|用户名|string|


<a name="userinfomodifvo"></a>
### UserInfoModifVo

|Name|Description|Schema|
|---|---|---|
|**addrCity**  <br>*optional*|市|string|
|**addrCounty**  <br>*optional*|县/区|string|
|**addrDetail**  <br>*optional*|详细地址|string|
|**addrPrivonce**  <br>*optional*|省|string|
|**cnid**  <br>*optional*|CNID|string|
|**email**  <br>*optional*|邮箱|string|
|**gender**  <br>*optional*|性别(0保密1男2女)|string|
|**idCardNumber**  <br>*optional*|身份证|string|
|**isMember**  <br>*optional*|是否会员|boolean|
|**isVerifyEmail**  <br>*optional*|邮件是否验证|boolean|
|**isVerifyPhone**  <br>*optional*|手机是否验证|boolean|
|**phoneNumber**  <br>*optional*|手机号码|string|
|**postcode**  <br>*optional*|邮编|string|
|**realName**  <br>*optional*|真实姓名|string|
|**userImgPath**  <br>*optional*|会员头像图|string|
|**wechatNo**  <br>*optional*|微信号|string|


<a name="userregvo"></a>
### UserRegVo

|Name|Description|Schema|
|---|---|---|
|**email**  <br>*optional*|邮箱|string|
|**firstName**  <br>*optional*|姓氏|string|
|**gender**  <br>*optional*|性别(1男2女)|string|
|**lastName**  <br>*optional*|名字|string|
|**password**  <br>*optional*|密码|string|
|**phoneNumber**  <br>*optional*|手机号码|string|
|**recommender**  <br>*optional*|推荐人，KID，例如：CN123456或123456|string|





