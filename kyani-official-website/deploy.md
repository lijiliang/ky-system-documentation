# kyani 官网部署文档

## 开发命令

``` bash
npm install    //安装
npm run dev    //启动开发模式
npm run build  //构建项目
npm run prod   //启动生产模式
```

## 正式环境部署

### 安装node.js、nginx、pm2
```
// 利用nvm方式安装node
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash

// 重启bashrc
source ~/.bashrc

// 安装node并指定版本
nvm install v8.9.2 && nvm use v8.9.2 && nvm alias default v8.9.2

```

```
// 先装完node再全局安装pm2
npm install pm2 -g

// 用于pm2 cluster 集群模式下的日志输出
pm2 install pm2-intercom 
```

### 配置nginx反向代理
在/etc/conf.d 下添加 www.kyani.cn.conf文件
```
server {
    listen       80;
    server_name  需要访问的域名;

    location / {
        proxy_set_header    X-Real-IP           $remote_addr;
        proxy_set_header    X-Forwarded-For     $proxy_add_x_forwarded_for;
        proxy_set_header    Host                $http_host;
        proxy_set_header    X-NginX-Proxy       true;
        proxy_set_header    Connection          "";
        proxy_http_version  1.1;
        proxy_connect_timeout 1;
        proxy_send_timeout 30;
        proxy_read_timeout 60;
        proxy_pass          http://localhost:3399;
    }
}
```

### 配置nginx服务器
```
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
    # include       mime.types;

    #log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
    #                  '$status $body_bytes_sent "$http_referer" '
    #                  '"$http_user_agent" "$http_x_forwarded_for"';

    #access_log  logs/access.log  main;

    # sendfile        on;
    #tcp_nopush     on;

    #keepalive_timeout  0;
    # keepalive_timeout  65;

    #gzip  on;

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
        server_name  localhost;

        #静态文件拦截器，将以images/js/img/css...开头的地址映射到网站目录，由ngnix直接提供服务
        location ~ ^/(images/|img/|javascript/|js/|css/|stylesheets/|flash/|media/|static/|robots.txt|humans.txt|favicon.ico) {
          root /data/www/stars/stars_power_officialSite/;
          access_log off;
          expires max;
        #   expires 1y;
        #   add_header Cache-Control "public";
        }

        location ~* \.(?:css|js|jpg|jpeg|png|svg)$ {
            root /data/www/stars/stars_power_officialSite/;
            expires 1y;
            access_log off;
            add_header Cache-Control "public";
        }

        location / {
            proxy_set_header    X-Real-IP           $remote_addr;
            proxy_set_header    X-Forwarded-For     $proxy_add_x_forwarded_for;
            proxy_set_header    Host                $http_host;
            proxy_set_header    X-NginX-Proxy       true;
            proxy_set_header    Connection          "";
            proxy_http_version  1.1;
            proxy_connect_timeout 1;
            proxy_send_timeout 30;
            proxy_read_timeout 60;
            proxy_pass          http://localhost:3399;
        }
    }


    # another virtual host using mix of IP-, name-, and port-based configuration
    #
    #server {
    #    listen       8000;
    #    listen       somename:8080;
    #    server_name  somename  alias  another.alias;

    #    location / {
    #        root   html;
    #        index  index.html index.htm;
    #    }
    #}


    # HTTPS server
    #
    #server {
    #    listen       443 ssl;
    #    server_name  localhost;

    #    ssl_certificate      cert.pem;
    #    ssl_certificate_key  cert.key;

    #    ssl_session_cache    shared:SSL:1m;
    #    ssl_session_timeout  5m;

    #    ssl_ciphers  HIGH:!aNULL:!MD5;
    #    ssl_prefer_server_ciphers  on;

    #    location / {
    #        root   html;
    #        index  index.html index.htm;
    #    }
    #}

}

```
nginx配置参考链接
https://blog.csdn.net/kefengwang/article/details/54233554

https://blog.csdn.net/shiyong1949/article/details/78439293

### 启动网站
到网站根目录下执行
```
// 启动
sh ./bin/start.sh

// 停止
sh ./bin/stop.sh
```
如果没有执行权限，执行`chmod 775 ./bin/start.sh`，`chmod 775 ./bin/stop.sh`给权限