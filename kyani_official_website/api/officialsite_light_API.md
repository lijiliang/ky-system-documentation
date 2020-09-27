# Stars Power Official Site Restful APIS


<a name="overview"></a>
## Overview

### Version information
*Version* : 1.0


### Contact information
*Contact* : Kyani dev team china


### License information
*Terms of service* : http://dev.kyani.cn


### URI scheme
*Host* : localhost:8013  
*BasePath* : /


### Tags

* article-api : 提供文章列表、详情等
* channel-api : 提供栏目信息等
* home-api : 提供首页信息等
* recommend-api : 提供推荐位信息等




<a name="paths"></a>
## Paths

<a name="getinfousingget"></a>
### 跟据id获取文章信息
```
GET /starspower/officialsite/service/v1/article/details/{id}
```


#### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**id**  <br>*required*|id|integer (int32)|


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ArticlePageVo](#articlepagevo)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Produces

* `\*/*`


#### Tags

* article-api


<a name="getlistusingget"></a>
### 跟据类目获取文章列表
```
GET /starspower/officialsite/service/v1/article/{channelId}/{limit}/{pageNum}
```


#### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**channelId**  <br>*required*|channelId|integer (int32)|
|**Path**|**limit**  <br>*required*|limit|integer (int32)|
|**Path**|**pageNum**  <br>*required*|pageNum|integer (int32)|
|**Query**|**searchTop**  <br>*optional*|searchTop|integer (int32)|


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ArticlePageVo](#articlepagevo)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Produces

* `\*/*`


#### Tags

* article-api


<a name="getchanneltreeusingget"></a>
### 跟据code获取树状类目
```
GET /starspower/officialsite/service/v1/channel
```


#### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Query**|**code**  <br>*optional*|code|string|


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ArticleChannelPageVo](#articlechannelpagevo)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Produces

* `\*/*`


#### Tags

* channel-api


<a name="getchannelusingget"></a>
### 跟据id获取类目
```
GET /starspower/officialsite/service/v1/channel/{id}
```


#### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**id**  <br>*required*|id|integer (int32)|


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ArticleChannelPageVo](#articlechannelpagevo)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Produces

* `\*/*`


#### Tags

* channel-api


<a name="getdatausingget"></a>
### 首页数据
```
GET /starspower/officialsite/service/v1/home
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


<a name="getsitemapdatausingget"></a>
### siteMap
```
GET /starspower/officialsite/service/v1/home/sitemap
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


<a name="getlistusingget_1"></a>
### 跟据code获取推荐位信息
```
GET /starspower/officialsite/service/v1/recommend/{code}/{limit}
```


#### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**code**  <br>*required*|code|string|
|**Path**|**limit**  <br>*required*|limit|integer (int32)|


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[RecommendPageVo](#recommendpagevo)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Produces

* `\*/*`


#### Tags

* recommend-api




<a name="definitions"></a>
## Definitions

<a name="articlechannelpagevo"></a>
### ArticleChannelPageVo

|Name|Schema|
|---|---|
|**articleId**  <br>*optional*|integer (int32)|
|**children**  <br>*optional*|< [ArticleChannelPageVo](#articlechannelpagevo) > array|
|**code**  <br>*optional*|string|
|**enName**  <br>*optional*|string|
|**id**  <br>*optional*|integer (int32)|
|**metaDescription**  <br>*optional*|string|
|**metaKeywords**  <br>*optional*|string|
|**metaTitle**  <br>*optional*|string|
|**name**  <br>*optional*|string|
|**parentId**  <br>*optional*|integer (int32)|
|**parents**  <br>*optional*|< [ArticleChannelPageVo](#articlechannelpagevo) > array|
|**picPath**  <br>*optional*|string|
|**route**  <br>*optional*|string|
|**type**  <br>*optional*|string|
|**url**  <br>*optional*|string|


<a name="articlepagevo"></a>
### ArticlePageVo

|Name|Schema|
|---|---|
|**channel**  <br>*optional*|[ArticleChannelPageVo](#articlechannelpagevo)|
|**channelId**  <br>*optional*|integer (int32)|
|**content**  <br>*optional*|string|
|**createTime**  <br>*optional*|string|
|**customParams**  <br>*optional*|< string, string > map|
|**id**  <br>*optional*|integer (int32)|
|**intro**  <br>*optional*|string|
|**metaDescription**  <br>*optional*|string|
|**metaKeywords**  <br>*optional*|string|
|**metaTitle**  <br>*optional*|string|
|**next**  <br>*optional*|[ArticlePageVo](#articlepagevo)|
|**picPath**  <br>*optional*|string|
|**prev**  <br>*optional*|[ArticlePageVo](#articlepagevo)|
|**previewPicPath**  <br>*optional*|string|
|**route**  <br>*optional*|string|
|**subtitle**  <br>*optional*|string|
|**tag**  <br>*optional*|string|
|**title**  <br>*optional*|string|
|**type**  <br>*optional*|string|
|**url**  <br>*optional*|string|
|**viewCount**  <br>*optional*|integer (int32)|


<a name="recommendpagevo"></a>
### RecommendPageVo

|Name|Schema|
|---|---|
|**code**  <br>*optional*|string|
|**createTime**  <br>*optional*|string|
|**id**  <br>*optional*|integer (int32)|
|**items**  <br>*optional*|< [ArticlePageVo](#articlepagevo) > array|
|**picPath**  <br>*optional*|string|
|**title**  <br>*optional*|string|





