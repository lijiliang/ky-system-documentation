# Stars Power Payment ViewControllers

支付页面表态页面目录：

`/stars.power.payment.light/src/main/resources/static`

页面通过访问控制器URL跳转到指定静态页面。

### Tags

* view-controller : 支付页面的控制器




<a name="paths"></a>
## Paths

<a name="homeusingpost"></a>
### 支付首页控制器
```
POST /
```


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ModelAndView](#modelandview)|
|**201**|Created|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Consumes

* `application/json`


#### Produces

* `\*/*`


#### Tags

* view-controller


<a name="homeusingget"></a>
### 支付首页控制器
```
GET /
```


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ModelAndView](#modelandview)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Produces

* `\*/*`


#### Tags

* view-controller


<a name="homeusingput"></a>
### 支付首页控制器
```
PUT /
```


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ModelAndView](#modelandview)|
|**201**|Created|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Consumes

* `application/json`


#### Produces

* `\*/*`


#### Tags

* view-controller


<a name="homeusingdelete"></a>
### 支付首页控制器
```
DELETE /
```


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ModelAndView](#modelandview)|
|**204**|No Content|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|


#### Produces

* `\*/*`


#### Tags

* view-controller


<a name="homeusingpatch"></a>
### 支付首页控制器
```
PATCH /
```


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ModelAndView](#modelandview)|
|**204**|No Content|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|


#### Consumes

* `application/json`


#### Produces

* `\*/*`


#### Tags

* view-controller


<a name="homeusinghead"></a>
### 支付首页控制器
```
HEAD /
```


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ModelAndView](#modelandview)|
|**204**|No Content|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|


#### Consumes

* `application/json`


#### Produces

* `\*/*`


#### Tags

* view-controller


<a name="homeusingoptions"></a>
### 支付首页控制器
```
OPTIONS /
```


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ModelAndView](#modelandview)|
|**204**|No Content|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|


#### Consumes

* `application/json`


#### Produces

* `\*/*`


#### Tags

* view-controller


<a name="bankusingpost"></a>
### 银行支付页面控制器
```
POST /bank
```


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ModelAndView](#modelandview)|
|**201**|Created|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Consumes

* `application/json`


#### Produces

* `\*/*`


#### Tags

* view-controller


<a name="bankusingget"></a>
### 银行支付页面控制器
```
GET /bank
```


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ModelAndView](#modelandview)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Produces

* `\*/*`


#### Tags

* view-controller


<a name="bankusingput"></a>
### 银行支付页面控制器
```
PUT /bank
```


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ModelAndView](#modelandview)|
|**201**|Created|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Consumes

* `application/json`


#### Produces

* `\*/*`


#### Tags

* view-controller


<a name="bankusingdelete"></a>
### 银行支付页面控制器
```
DELETE /bank
```


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ModelAndView](#modelandview)|
|**204**|No Content|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|


#### Produces

* `\*/*`


#### Tags

* view-controller


<a name="bankusingpatch"></a>
### 银行支付页面控制器
```
PATCH /bank
```


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ModelAndView](#modelandview)|
|**204**|No Content|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|


#### Consumes

* `application/json`


#### Produces

* `\*/*`


#### Tags

* view-controller


<a name="bankusinghead"></a>
### 银行支付页面控制器
```
HEAD /bank
```


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ModelAndView](#modelandview)|
|**204**|No Content|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|


#### Consumes

* `application/json`


#### Produces

* `\*/*`


#### Tags

* view-controller


<a name="bankusingoptions"></a>
### 银行支付页面控制器
```
OPTIONS /bank
```


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ModelAndView](#modelandview)|
|**204**|No Content|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|


#### Consumes

* `application/json`


#### Produces

* `\*/*`


#### Tags

* view-controller


<a name="codesusingpost"></a>
### 二维码支付页面控制器
```
POST /codes
```


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ModelAndView](#modelandview)|
|**201**|Created|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Consumes

* `application/json`


#### Produces

* `\*/*`


#### Tags

* view-controller


<a name="codesusingget"></a>
### 二维码支付页面控制器
```
GET /codes
```


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ModelAndView](#modelandview)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Produces

* `\*/*`


#### Tags

* view-controller


<a name="codesusingput"></a>
### 二维码支付页面控制器
```
PUT /codes
```


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ModelAndView](#modelandview)|
|**201**|Created|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Consumes

* `application/json`


#### Produces

* `\*/*`


#### Tags

* view-controller


<a name="codesusingdelete"></a>
### 二维码支付页面控制器
```
DELETE /codes
```


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ModelAndView](#modelandview)|
|**204**|No Content|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|


#### Produces

* `\*/*`


#### Tags

* view-controller


<a name="codesusingpatch"></a>
### 二维码支付页面控制器
```
PATCH /codes
```


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ModelAndView](#modelandview)|
|**204**|No Content|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|


#### Consumes

* `application/json`


#### Produces

* `\*/*`


#### Tags

* view-controller


<a name="codesusinghead"></a>
### 二维码支付页面控制器
```
HEAD /codes
```


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ModelAndView](#modelandview)|
|**204**|No Content|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|


#### Consumes

* `application/json`


#### Produces

* `\*/*`


#### Tags

* view-controller


<a name="codesusingoptions"></a>
### 二维码支付页面控制器
```
OPTIONS /codes
```


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ModelAndView](#modelandview)|
|**204**|No Content|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|


#### Consumes

* `application/json`


#### Produces

* `\*/*`


#### Tags

* view-controller


<a name="divideresultusingpost"></a>
### 拆单回调接口
```
POST /divideResultCallback/{orderCode}
```


#### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**orderCode**  <br>*required*|订单号|string|


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|No Content|
|**201**|Created|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Consumes

* `application/json`


#### Produces

* `\*/*`


#### Tags

* view-controller


<a name="divideresultusingget"></a>
### 拆单回调接口
```
GET /divideResultCallback/{orderCode}
```


#### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**orderCode**  <br>*required*|订单号|string|


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Produces

* `\*/*`


#### Tags

* view-controller


<a name="divideresultusingput"></a>
### 拆单回调接口
```
PUT /divideResultCallback/{orderCode}
```


#### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**orderCode**  <br>*required*|订单号|string|


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|No Content|
|**201**|Created|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Consumes

* `application/json`


#### Produces

* `\*/*`


#### Tags

* view-controller


<a name="divideresultusingdelete"></a>
### 拆单回调接口
```
DELETE /divideResultCallback/{orderCode}
```


#### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**orderCode**  <br>*required*|订单号|string|


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|No Content|
|**204**|No Content|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|


#### Produces

* `\*/*`


#### Tags

* view-controller


<a name="divideresultusingpatch"></a>
### 拆单回调接口
```
PATCH /divideResultCallback/{orderCode}
```


#### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**orderCode**  <br>*required*|订单号|string|


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|No Content|
|**204**|No Content|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|


#### Consumes

* `application/json`


#### Produces

* `\*/*`


#### Tags

* view-controller


<a name="divideresultusinghead"></a>
### 拆单回调接口
```
HEAD /divideResultCallback/{orderCode}
```


#### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**orderCode**  <br>*required*|订单号|string|


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|No Content|
|**204**|No Content|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|


#### Consumes

* `application/json`


#### Produces

* `\*/*`


#### Tags

* view-controller


<a name="divideresultusingoptions"></a>
### 拆单回调接口
```
OPTIONS /divideResultCallback/{orderCode}
```


#### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**orderCode**  <br>*required*|订单号|string|


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|No Content|
|**204**|No Content|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|


#### Consumes

* `application/json`


#### Produces

* `\*/*`


#### Tags

* view-controller


<a name="icreditcardusingpost"></a>
### 信用卡支付页控制器
```
POST /icc
```


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ModelAndView](#modelandview)|
|**201**|Created|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Consumes

* `application/json`


#### Produces

* `\*/*`


#### Tags

* view-controller


<a name="icreditcardusingget"></a>
### 信用卡支付页控制器
```
GET /icc
```


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ModelAndView](#modelandview)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Produces

* `\*/*`


#### Tags

* view-controller


<a name="icreditcardusingput"></a>
### 信用卡支付页控制器
```
PUT /icc
```


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ModelAndView](#modelandview)|
|**201**|Created|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Consumes

* `application/json`


#### Produces

* `\*/*`


#### Tags

* view-controller


<a name="icreditcardusingdelete"></a>
### 信用卡支付页控制器
```
DELETE /icc
```


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ModelAndView](#modelandview)|
|**204**|No Content|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|


#### Produces

* `\*/*`


#### Tags

* view-controller


<a name="icreditcardusingpatch"></a>
### 信用卡支付页控制器
```
PATCH /icc
```


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ModelAndView](#modelandview)|
|**204**|No Content|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|


#### Consumes

* `application/json`


#### Produces

* `\*/*`


#### Tags

* view-controller


<a name="icreditcardusinghead"></a>
### 信用卡支付页控制器
```
HEAD /icc
```


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ModelAndView](#modelandview)|
|**204**|No Content|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|


#### Consumes

* `application/json`


#### Produces

* `\*/*`


#### Tags

* view-controller


<a name="icreditcardusingoptions"></a>
### 信用卡支付页控制器
```
OPTIONS /icc
```


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ModelAndView](#modelandview)|
|**204**|No Content|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|


#### Consumes

* `application/json`


#### Produces

* `\*/*`


#### Tags

* view-controller


<a name="resultpostusingpost"></a>
### 支付结果页控制器
```
POST /payResult/{orderCode}
```


#### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**orderCode**  <br>*required*|订单号|string|


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ModelAndView](#modelandview)|
|**201**|Created|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Consumes

* `application/json`


#### Produces

* `\*/*`


#### Tags

* view-controller


<a name="resultgetusingget"></a>
### 支付结果页控制器
```
GET /payResult/{orderCode}
```


#### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**orderCode**  <br>*required*|订单号|string|


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ModelAndView](#modelandview)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Produces

* `\*/*`


#### Tags

* view-controller


<a name="payresultusingpost"></a>
### payResult
```
POST /payResultCallback/{orderCode}
```


#### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**orderCode**  <br>*required*|orderCode|string|


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|No Content|
|**201**|Created|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Consumes

* `application/json`


#### Produces

* `\*/*`


#### Tags

* view-controller


<a name="payresultusingget"></a>
### payResult
```
GET /payResultCallback/{orderCode}
```


#### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**orderCode**  <br>*required*|orderCode|string|


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Produces

* `\*/*`


#### Tags

* view-controller


<a name="payresultusingput"></a>
### payResult
```
PUT /payResultCallback/{orderCode}
```


#### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**orderCode**  <br>*required*|orderCode|string|


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|No Content|
|**201**|Created|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Consumes

* `application/json`


#### Produces

* `\*/*`


#### Tags

* view-controller


<a name="payresultusingdelete"></a>
### payResult
```
DELETE /payResultCallback/{orderCode}
```


#### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**orderCode**  <br>*required*|orderCode|string|


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|No Content|
|**204**|No Content|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|


#### Produces

* `\*/*`


#### Tags

* view-controller


<a name="payresultusingpatch"></a>
### payResult
```
PATCH /payResultCallback/{orderCode}
```


#### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**orderCode**  <br>*required*|orderCode|string|


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|No Content|
|**204**|No Content|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|


#### Consumes

* `application/json`


#### Produces

* `\*/*`


#### Tags

* view-controller


<a name="payresultusinghead"></a>
### payResult
```
HEAD /payResultCallback/{orderCode}
```


#### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**orderCode**  <br>*required*|orderCode|string|


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|No Content|
|**204**|No Content|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|


#### Consumes

* `application/json`


#### Produces

* `\*/*`


#### Tags

* view-controller


<a name="payresultusingoptions"></a>
### payResult
```
OPTIONS /payResultCallback/{orderCode}
```


#### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**orderCode**  <br>*required*|orderCode|string|


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|No Content|
|**204**|No Content|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|


#### Consumes

* `application/json`


#### Produces

* `\*/*`


#### Tags

* view-controller


<a name="resultunionpayusingpost"></a>
### 未支付单页控制器
```
POST /payResultUnionPay/{orderCode}
```


#### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**orderCode**  <br>*required*|orderCode|string|


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ModelAndView](#modelandview)|
|**201**|Created|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Consumes

* `application/json`


#### Produces

* `\*/*`


#### Tags

* view-controller


<a name="resultunionpayusingget"></a>
### 未支付单页控制器
```
GET /payResultUnionPay/{orderCode}
```


#### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**orderCode**  <br>*required*|orderCode|string|


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ModelAndView](#modelandview)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Produces

* `\*/*`


#### Tags

* view-controller


<a name="resultunionpayusingput"></a>
### 未支付单页控制器
```
PUT /payResultUnionPay/{orderCode}
```


#### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**orderCode**  <br>*required*|orderCode|string|


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ModelAndView](#modelandview)|
|**201**|Created|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Consumes

* `application/json`


#### Produces

* `\*/*`


#### Tags

* view-controller


<a name="resultunionpayusingdelete"></a>
### 未支付单页控制器
```
DELETE /payResultUnionPay/{orderCode}
```


#### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**orderCode**  <br>*required*|orderCode|string|


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ModelAndView](#modelandview)|
|**204**|No Content|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|


#### Produces

* `\*/*`


#### Tags

* view-controller


<a name="resultunionpayusingpatch"></a>
### 未支付单页控制器
```
PATCH /payResultUnionPay/{orderCode}
```


#### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**orderCode**  <br>*required*|orderCode|string|


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ModelAndView](#modelandview)|
|**204**|No Content|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|


#### Consumes

* `application/json`


#### Produces

* `\*/*`


#### Tags

* view-controller


<a name="resultunionpayusinghead"></a>
### 未支付单页控制器
```
HEAD /payResultUnionPay/{orderCode}
```


#### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**orderCode**  <br>*required*|orderCode|string|


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ModelAndView](#modelandview)|
|**204**|No Content|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|


#### Consumes

* `application/json`


#### Produces

* `\*/*`


#### Tags

* view-controller


<a name="resultunionpayusingoptions"></a>
### 未支付单页控制器
```
OPTIONS /payResultUnionPay/{orderCode}
```


#### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**orderCode**  <br>*required*|orderCode|string|


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ModelAndView](#modelandview)|
|**204**|No Content|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|


#### Consumes

* `application/json`


#### Produces

* `\*/*`


#### Tags

* view-controller


<a name="quickusingpost"></a>
### 快捷支付页面（跳转）控制器
```
POST /quick
```


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ModelAndView](#modelandview)|
|**201**|Created|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Consumes

* `application/json`


#### Produces

* `\*/*`


#### Tags

* view-controller


<a name="quickusingget"></a>
### 快捷支付页面（跳转）控制器
```
GET /quick
```


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ModelAndView](#modelandview)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Produces

* `\*/*`


#### Tags

* view-controller


<a name="quickusingput"></a>
### 快捷支付页面（跳转）控制器
```
PUT /quick
```


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ModelAndView](#modelandview)|
|**201**|Created|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Consumes

* `application/json`


#### Produces

* `\*/*`


#### Tags

* view-controller


<a name="quickusingdelete"></a>
### 快捷支付页面（跳转）控制器
```
DELETE /quick
```


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ModelAndView](#modelandview)|
|**204**|No Content|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|


#### Produces

* `\*/*`


#### Tags

* view-controller


<a name="quickusingpatch"></a>
### 快捷支付页面（跳转）控制器
```
PATCH /quick
```


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ModelAndView](#modelandview)|
|**204**|No Content|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|


#### Consumes

* `application/json`


#### Produces

* `\*/*`


#### Tags

* view-controller


<a name="quickusinghead"></a>
### 快捷支付页面（跳转）控制器
```
HEAD /quick
```


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ModelAndView](#modelandview)|
|**204**|No Content|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|


#### Consumes

* `application/json`


#### Produces

* `\*/*`


#### Tags

* view-controller


<a name="quickusingoptions"></a>
### 快捷支付页面（跳转）控制器
```
OPTIONS /quick
```


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ModelAndView](#modelandview)|
|**204**|No Content|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|


#### Consumes

* `application/json`


#### Produces

* `\*/*`


#### Tags

* view-controller


<a name="quickformusingpost"></a>
### quickForm
```
POST /quickForm
```


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ModelAndView](#modelandview)|
|**201**|Created|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Consumes

* `application/json`


#### Produces

* `\*/*`


#### Tags

* view-controller


<a name="quickformusingget"></a>
### quickForm
```
GET /quickForm
```


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ModelAndView](#modelandview)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Produces

* `\*/*`


#### Tags

* view-controller


<a name="quickformusingput"></a>
### quickForm
```
PUT /quickForm
```


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ModelAndView](#modelandview)|
|**201**|Created|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Consumes

* `application/json`


#### Produces

* `\*/*`


#### Tags

* view-controller


<a name="quickformusingdelete"></a>
### quickForm
```
DELETE /quickForm
```


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ModelAndView](#modelandview)|
|**204**|No Content|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|


#### Produces

* `\*/*`


#### Tags

* view-controller


<a name="quickformusingpatch"></a>
### quickForm
```
PATCH /quickForm
```


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ModelAndView](#modelandview)|
|**204**|No Content|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|


#### Consumes

* `application/json`


#### Produces

* `\*/*`


#### Tags

* view-controller


<a name="quickformusinghead"></a>
### quickForm
```
HEAD /quickForm
```


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ModelAndView](#modelandview)|
|**204**|No Content|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|


#### Consumes

* `application/json`


#### Produces

* `\*/*`


#### Tags

* view-controller


<a name="quickformusingoptions"></a>
### quickForm
```
OPTIONS /quickForm
```


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ModelAndView](#modelandview)|
|**204**|No Content|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|


#### Consumes

* `application/json`


#### Produces

* `\*/*`


#### Tags

* view-controller


<a name="testusingpost"></a>
### test
```
POST /test/{orderCode}
```


#### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**orderCode**  <br>*required*|orderCode|string|


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ModelAndView](#modelandview)|
|**201**|Created|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Consumes

* `application/json`


#### Produces

* `\*/*`


#### Tags

* view-controller


<a name="testusingget"></a>
### test
```
GET /test/{orderCode}
```


#### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**orderCode**  <br>*required*|orderCode|string|


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ModelAndView](#modelandview)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Produces

* `\*/*`


#### Tags

* view-controller


<a name="testusingput"></a>
### test
```
PUT /test/{orderCode}
```


#### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**orderCode**  <br>*required*|orderCode|string|


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ModelAndView](#modelandview)|
|**201**|Created|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Consumes

* `application/json`


#### Produces

* `\*/*`


#### Tags

* view-controller


<a name="testusingdelete"></a>
### test
```
DELETE /test/{orderCode}
```


#### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**orderCode**  <br>*required*|orderCode|string|


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ModelAndView](#modelandview)|
|**204**|No Content|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|


#### Produces

* `\*/*`


#### Tags

* view-controller


<a name="testusingpatch"></a>
### test
```
PATCH /test/{orderCode}
```


#### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**orderCode**  <br>*required*|orderCode|string|


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ModelAndView](#modelandview)|
|**204**|No Content|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|


#### Consumes

* `application/json`


#### Produces

* `\*/*`


#### Tags

* view-controller


<a name="testusinghead"></a>
### test
```
HEAD /test/{orderCode}
```


#### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**orderCode**  <br>*required*|orderCode|string|


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ModelAndView](#modelandview)|
|**204**|No Content|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|


#### Consumes

* `application/json`


#### Produces

* `\*/*`


#### Tags

* view-controller


<a name="testusingoptions"></a>
### test
```
OPTIONS /test/{orderCode}
```


#### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**orderCode**  <br>*required*|orderCode|string|


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ModelAndView](#modelandview)|
|**204**|No Content|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|


#### Consumes

* `application/json`


#### Produces

* `\*/*`


#### Tags

* view-controller




<a name="definitions"></a>
## Definitions

<a name="modelandview"></a>
### ModelAndView

|Name|Schema|
|---|---|
|**empty**  <br>*optional*|boolean|
|**model**  <br>*optional*|object|
|**modelMap**  <br>*optional*|< string, object > map|
|**reference**  <br>*optional*|boolean|
|**status**  <br>*optional*|enum (100, 101, 102, 103, 200, 201, 202, 203, 204, 205, 206, 207, 208, 226, 300, 301, 302, 303, 304, 305, 307, 308, 400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422, 423, 424, 426, 428, 429, 431, 451, 500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 511)|
|**view**  <br>*optional*|[View](#view)|
|**viewName**  <br>*optional*|string|


<a name="view"></a>
### View

|Name|Schema|
|---|---|
|**contentType**  <br>*optional*|string|





