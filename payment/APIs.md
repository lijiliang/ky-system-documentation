# Stars Power Admin Restful APIS


### Tags

* payment-api : 提供支付界面需要数据和支付处理




<a name="paths"></a>
## Paths

<a name="geterrormessageusingpost"></a>
### getErrorMessage
```
POST /starspower/payment/v1/getErrorMessage
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


<a name="geterrormessageusingget"></a>
### getErrorMessage
```
GET /starspower/payment/v1/getErrorMessage
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

* payment-api


<a name="geterrormessageusingput"></a>
### getErrorMessage
```
PUT /starspower/payment/v1/getErrorMessage
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


<a name="geterrormessageusingdelete"></a>
### getErrorMessage
```
DELETE /starspower/payment/v1/getErrorMessage
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

* payment-api


<a name="geterrormessageusingpatch"></a>
### getErrorMessage
```
PATCH /starspower/payment/v1/getErrorMessage
```


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|object|
|**204**|No Content|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|


#### Consumes

* `application/json`


#### Produces

* `\*/*`


#### Tags

* payment-api


<a name="geterrormessageusinghead"></a>
### getErrorMessage
```
HEAD /starspower/payment/v1/getErrorMessage
```


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|object|
|**204**|No Content|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|


#### Consumes

* `application/json`


#### Produces

* `\*/*`


#### Tags

* payment-api


<a name="geterrormessageusingoptions"></a>
### getErrorMessage
```
OPTIONS /starspower/payment/v1/getErrorMessage
```


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|object|
|**204**|No Content|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|


#### Consumes

* `application/json`


#### Produces

* `\*/*`


#### Tags

* payment-api


<a name="getorderdetailsusingget"></a>
### 获取订单明细数据
```
GET /starspower/payment/v1/getOrderDetails/{key}/{orderCode}
```


#### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**key**  <br>*required*|key|string|
|**Path**|**orderCode**  <br>*required*|orderCode|string|


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


<a name="getsmscodeusingpost"></a>
### getSMSCode
```
POST /starspower/payment/v1/getSMSCode
```


#### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Body**|**qpbv**  <br>*required*|qpbv|[QuickPayBindRequestVo](#quickpaybindrequestvo)|


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


<a name="getpaymenttransactionbillusingget"></a>
### 获取订单已支付数据
```
GET /starspower/payment/v1/getTrans/{orderCode}
```


#### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**orderCode**  <br>*required*|orderCode|string|


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


<a name="getpaymenttransactionbillsusingget"></a>
### 获取订单已支付数据
```
GET /starspower/payment/v1/getTranss/{orderCodes}
```


#### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**orderCodes**  <br>*required*|orderCodes|string|


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


<a name="getwechatpayusingget"></a>
### getWechatPay
```
GET /starspower/payment/v1/getWechatPay/{orderCode}
```


#### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**orderCode**  <br>*required*|orderCode|string|


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


<a name="getactiveinstrumentsusingget"></a>
### 获取支付工具列表
```
GET /starspower/payment/v1/instruments/{codes}
```


#### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**codes**  <br>*required*|子订单号用，以逗号分隔|string|


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


<a name="payusingpost"></a>
### 支付处理接口
```
POST /starspower/payment/v1/pay
```


#### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Body**|**ppv**  <br>*required*|ppv|[PayParamsVo](#payparamsvo)|


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


<a name="quickbindcheckusingget"></a>
### quickBindCheck
```
GET /starspower/payment/v1/quickBindCheck/{cardNumber}
```


#### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**cardNumber**  <br>*required*|cardNumber|string|


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


<a name="refundusingget"></a>
### 退款处理接口
```
GET /starspower/payment/v1/refund
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

* payment-api


<a name="getsmsmessageusingget"></a>
### getSMSMessage
```
GET /starspower/payment/v1/smsCheck/{smsCode}
```


#### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**smsCode**  <br>*required*|smsCode|string|


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




<a name="definitions"></a>
## Definitions

<a name="creditcardvo"></a>
### CreditCardVo

|Name|Description|Schema|
|---|---|---|
|**cardNumber**  <br>*optional*|卡号|string|
|**cardType**  <br>*optional*|卡类型|string|
|**cardholderName**  <br>*optional*|持卡人姓名|string|
|**city**  <br>*optional*|城市|string|
|**country**  <br>*optional*|国家|string|
|**cvv**  <br>*optional*|发全码|string|
|**expDate**  <br>*optional*|有效期|string|
|**state**  <br>*optional*|省份|string|
|**street**  <br>*optional*|账单地址|string|
|**zip**  <br>*optional*|邮政编码|string|


<a name="payparamsvo"></a>
### PayParamsVo

|Name|Schema|
|---|---|
|**bankCardNumber**  <br>*optional*|string|
|**bankCardType**  <br>*optional*|string|
|**bankCode**  <br>*optional*|string|
|**callBackUrl1**  <br>*optional*|string|
|**callBackUrl2**  <br>*optional*|string|
|**callBackUrl3**  <br>*optional*|string|
|**creditCard**  <br>*optional*|[CreditCardVo](#creditcardvo)|
|**instrumentId**  <br>*optional*|integer (int32)|
|**key**  <br>*optional*|string|
|**orderCode**  <br>*optional*|string|
|**orderDate**  <br>*optional*|string|
|**orderPrice**  <br>*optional*|number (double)|
|**parent**  <br>*optional*|boolean|
|**queryStr**  <br>*optional*|string|


<a name="quickpaybindrequestvo"></a>
### QuickPayBindRequestVo

|Name|Schema|
|---|---|
|**bankCardNumber**  <br>*optional*|string|
|**bankCardType**  <br>*optional*|string|
|**bankCode**  <br>*optional*|string|
|**callBackUrl1**  <br>*optional*|string|
|**callBackUrl2**  <br>*optional*|string|
|**callBackUrl3**  <br>*optional*|string|
|**ccv**  <br>*optional*|string|
|**creditCard**  <br>*optional*|[CreditCardVo](#creditcardvo)|
|**instrumentId**  <br>*optional*|integer (int32)|
|**key**  <br>*optional*|string|
|**memberCardNo**  <br>*optional*|string|
|**memberID**  <br>*optional*|string|
|**memberMobile**  <br>*optional*|string|
|**memberName**  <br>*optional*|string|
|**orderCode**  <br>*optional*|string|
|**orderDate**  <br>*optional*|string|
|**orderPrice**  <br>*optional*|number (double)|
|**parent**  <br>*optional*|boolean|
|**queryStr**  <br>*optional*|string|
|**smsCode**  <br>*optional*|string|
|**validityPeriodMonth**  <br>*optional*|string|
|**validityPeriodYear**  <br>*optional*|string|





