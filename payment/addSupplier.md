# 新供应商接入流程

- [新供应商接入流程](#新供应商接入流程)
  - [SDK接入](#sdk接入)
    - [BaseClass](#baseclass)
    - [PaymentProcessor](#paymentprocessor)
    - [定时器处理](#定时器处理)
  - [Stars后台设置](#stars后台设置)


## SDK接入
  供应商SKD接入模块目录：
  `/stars.power.payment/pay/processors/`
### BaseClass
供应商基础类，需要引用实现接ISupplierBase。用于支付业务报文的加密、签名、验证、回调参数解析等。
``` java
/**
* 生成签名
*/
String signature(Map params, String key);
/**
* 数据校验
*/
boolean verify(String srcContent, String key);
/**
* 获取供应商参数
*/
PaymentSupplierInstrumentBasicProperty getBasicProperty(Integer instrumentId);
/**
* 支付结果处理批量更新
*/
void paymentResultUpdate(List<PaymentTransactionBillVo> bills);
/**
* 支付结果处理
*/
String paymentResultUpdateSinge(PaymentTransactionBillVo bill);

```      
### PaymentProcessor
供应商支付工具的处理函数，需要继承自己的基础类和引用实现接口IPaymentProcessor。用于供应对应的支付工具的支付业务报文的接口处理等。
``` java
/**
* 执行支付
*/
Object pay(PaymentSupplierInstrumentBasicProperty basicProperty,PayParamsVo ppv) throws Exception;

/**
* 支付异步回调地址
*/
Object onPayResult(PaymentSupplierInstrumentBasicProperty basicProperty, HttpServletRequest req, PaymentTransactionBill bill) throws Exception;

/**
* 支付单拆单分账
*/
Object divide(PaymentSupplierInstrumentBasicProperty basicProperty,PayParamsVo ppv) throws Exception;

/**
* 支付单拆单分账异步回调
*/
Object onDivideResult(PaymentSupplierInstrumentBasicProperty basicProperty, HttpServletRequest req, String orderCode) throws Exception;

ClearanceStatus sendPaymentBillToCustoms(Integer supplierId, String orderNumber,Customs customs,Map<String,String> extraParams) throws Exception;

/**
* 签名
*/
String signature(Map params, String key);

/**
* 退款
*/
String refund(PaymentSupplierInstrumentBasicProperty basicProperty,String orderCode,Double price,String sign) throws Exception;

```
### 定时器处理
定时器里需要实时检查支付状态，在代码里加入新供应商支付处理方法。
`stars.power.payment.service.PaymentService:addToPool`
## Stars后台设置
  1. [新增供应商](./paymentSupplier.md)
  2. [按需新增支付工具](./paymentInstrument.md)
  3. [供应商支付工具参数设置](./paymentSetting.md)
