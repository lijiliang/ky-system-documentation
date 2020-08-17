# 部署文档
主要讲解一下开发环境的启动方式与线上环境的部署

需要安装开发环境Node.js, npm

Node.js > v9

npm > v5

<!-- TOC -->

- [部署文档](#部署文档)
  - [开发环境](#开发环境)
  - [线上环境](#线上环境)
    - [基于nginx部署](#基于nginx部署)
    - [基于docker+jenkins+nginx自动化部署](#基于dockerjenkinsnginx自动化部署)

<!-- /TOC -->

## 开发环境

环境安装好后，到项目的根目录下进行安装依赖
```bash
npm install
```

当前项目中所有用到的包以本地依赖的形式被安装到你的项目中，并且在`package.json`中配置了如下的 npm scripts

```bash
{
  "scripts": {
    "dev": "vue-cli-service serve",
  }
}
```

开发模式运行

``` bash
# 开发环境 
npm run dev 
```

当项目启动成功，打开浏览器输入`http://localhost:9912/`即可看到运行成功的项目


## 线上环境

在`package.json`中配置了如下的 npm scripts

```bash
{
  "scripts": {
    "prod-build": "vue-cli-service build --mode production",
  }
}
```

打包正式环境命令，编译项目

``` bash
# 打包正式环境
npm run prod-build
```

执行完以上命令后稍等一会，待命令执行完后会在当前文件夹下生成一个`dist`目录。`dist`就是线上环境运行所需要的所有文件了

### 基于nginx部署
基于生成的`dist`目录，在本机装好nginx后，只需要配置`nginx.conf`文件指向到当前`dist`目录下重新启动下nginx即可

`nginx.conf`的安装目录一般在 `/usr/local/nginx/conf/nginx.conf` 这个位置
 
 ```nginx
#user  nobody;
worker_processes  1;

events {
    worker_connections  1024;
}

http {
    #设置缓存
    proxy_cache_path  /var/cache/nginx levels=1:2 keys_zone=one:8m max_size=3000m inactive=600m;
    proxy_temp_path /var/tmp;
    include       mime.types;
    default_type  application/octet-stream;
    sendfile        on;
    keepalive_timeout  65;

    #设置Gzip压缩
    gzip on;
    gzip_comp_level 6;
    gzip_vary on;
    gzip_min_length  1k;
    gzip_proxied any;
    gzip_types text/plain application/x-javascript application/javascript text/css application/xml text/javascript image/jpeg image/gif image/png image/svg+xml;
    gzip_buffers 16 8k;

    server {
       listen       80;
       listen       localhost;

       location / {
           root /data/www/shop_mobile_clinet/;  // 这个目录的内容就是dist的，只不过是目录名不一样而已
           index  index.html index.htm;
           try_files $uri $uri/ /index.html;  # 配置支持 History 模式
       }
    }

}

 ```

### 基于docker+jenkins+nginx自动化部署

基于nginx部署的方案是需要我们先在本地构建好`dist`文件，然后再通过某种方式放到服务器上。这种方式就有些过于繁琐。所以建议使用基于docker+jenkins+nginx自动化部署的方案。

这种方式只需要开发者将代码push到git,git的webhook会自动触发jenkins服务进行包安装，然后进行自动打包，打好包后jenkins会在服务器上根据脚本自动创建好docker容器。

以下是简要部署流程图

![image](./images/ci2.jpg)

如上图所示，jenkins自动触发会根据写好的脚本自动创建docker及启动所需要的服务。

具体的脚本在代码目录下的`bin`目录里面。

`nginx.prod.conf`  nginx的配置
```nginx
#user  nobody;
worker_processes  1;

#error_log  logs/error.log;
#error_log  logs/error.log  notice;
#error_log  logs/error.log  info;

#pid        logs/nginx.pid;


events {
    worker_connections  1024;
}


http {
    #设置缓存
    proxy_cache_path  /var/cache/nginx levels=1:2 keys_zone=one:8m max_size=3000m inactive=600m;
    proxy_temp_path /var/tmp;
    include       mime.types;
    default_type  application/octet-stream;
    sendfile        on;
    keepalive_timeout  65;

    #设置Gzip压缩
    gzip on;
    gzip_comp_level 6;
    gzip_vary on;
    gzip_min_length  1k;
    gzip_proxied any;
    gzip_types text/plain application/x-javascript application/javascript text/css application/xml text/javascript image/jpeg image/gif image/png image/svg+xml;
    gzip_buffers 16 8k;

    server {
       listen       80;
       listen       localhost;

       location / {
           root /data/www/shop_mobile_clinet/;
           index  index.html index.htm;
           try_files $uri $uri/ /index.html;  # 配置支持 History 模式
       }
    }

}

```

`docker-run-prod.sh` docker配置脚本
```bash
#!/usr/bin/env bash

sudo docker stop shop_mobile_clinet_7001
sudo docker rm shop_mobile_clinet_7001
sudo docker run --privileged=true  -t -i -d -v /data:/data -p 7001:80  --name=shop_mobile_clinet_7001  --network prodnet --ip 192.168.1.11 557111830783.dkr.ecr.cn-north-1.amazonaws.com.cn/os_nginx:latest /bin/bash -c "/data/www/shop_mobile_clinet/bin/run-prod.sh"

sudo docker stop kyani_shop_nginx_forwarding_80
sudo docker rm kyani_shop_nginx_forwarding_80
sudo docker run -t -i --name=kyani_shop_nginx_forwarding_80 --network prodnet --ip 192.168.1.8 -v /data/www/shop_mobile_clinet/bin/conf.d:/etc/nginx/conf.d -p 80:80 -d docker.io/nginx:latest

```

`run-prod.sh` nginx启动服务脚本
```bash
#!/usr/bin/env bash
cd /data/www/shop_mobile_clinet
#覆盖Nginx
cp -rf /data/www/shop_mobile_clinet/bin/nginx.prod.conf /usr/local/nginx/conf/nginx.conf
/usr/local/nginx/sbin/nginx &
/bin/bash

```

基于以上脚本再配合`jenkins`的配置，即可快速部署kyani商城系统。

最后附上详细的部署流程图

![image](images/ci1.png)