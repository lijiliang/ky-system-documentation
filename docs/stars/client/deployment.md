# 部署文档
- [部署文档](#部署文档)
	- [环境要求](#环境要求)
	- [打包](#打包)
	- [Nginx部署](#nginx部署)

## 环境要求
Java Run-time Environment or JDK
```
https://www.oracle.com/java/technologies/javase/javase-jdk8-downloads.html
```
Ruby
```
http://rubyinstaller.org/downloads
```
Sencha Cmd 6.2或以上 
```
https://www.sencha.com/products/extjs/cmd-download/
```
Nginx
```
yum install nginx
```
## 打包
修改调用Api路径，设置要指向的环境：

KYANI-STARS-CHINA/app/base/common/Config.js
```javascript
# 将domain指向要部署的环境路径，如 domain:servers.pro
Ext.define("Kyani.stars.base.common.Config",{
	alternateClassName:"CFG",
	statics:{
		sysname:'Kyani',
		domain:servers.dev,
		respath:'resources/',
		language:'zh_CN',
		theme:'default',
		version:'1.0.3',
		defaultPrefix:"kyani_"

	}
}); 
```
``` bash
# build项目，成功后目录在代码目录下/build/production/stars 
sencha app build 
```

## Nginx部署
基于build成功的`stars`目录，在服务器装好nginx后，只需要配置nginx.conf文件指向到当前`stars`目录下重新启动下nginx即可。
```bash
# 修改nginx.conf，目录指向到stars目录
server {
        listen       80;
        server_name  localhost;
        location / {
            root   /data/www/stars/stars;
            index  index.html index.htm;
        }
}
```
