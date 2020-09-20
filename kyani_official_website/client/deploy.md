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

}

```

### 启动网站
到网站根目录下执行
```
// 启动
sh ./bin/start.sh

// 停止
sh ./bin/stop.sh
```
如果没有执行权限，执行`chmod 775 ./bin/start.sh`，`chmod 775 ./bin/stop.sh`给权限

## 自动化部署方式

首先先配置pm2配置文件 `ecosystem.json` 具体参数如下：

```json
{
  "apps": [{
    "name": "kyainOfficialWebsite",
    "script": "../server/server.js",
    "cwd": "../",
    "watch": true,
    "node_args": "--harmony",
    "instances": "max",
    "exec_mode": "cluster",
    "max_memory_restart" : "300M",
    "instance_var": "INSTANCE_ID",
    "ignore_watch": [
      "node_modules", 
      "logs"
    ],
    "watch_options": {
      "followSymlinks": false
    },
    "error_file": "../logs/app-err.log",
    "out_file": "../logs/app-out.log",
    "log_date_format" : "YYYY-MM-DD HH:mm:ss",
    "combine_logs": true,
    "env": {
        "NODE_ENV": "production"
    },
    "env_production" : {
      "NODE_ENV": "production"
    }
  }]
}
```

`nginx.conf` 配置文件
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
        server_name  localhost;
        
        location ~* \.(?:php|asp|jsp|aspx)$ {
           return 503;
        }

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
        
        # 代理转发更新kid接口
        location /updatekid {
            proxy_pass http://shop.kyani.cn/updatekid;
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
 
}

```

`run-pro.sh` 配置文件
```bash
#!/usr/bin/env bash
cd /data/www/stars/stars_power_officialSite
sh ./bin/start.sh
#覆盖Nginx
cp -rf /data/www/stars/stars_power_officialSite/bin/nginx.conf /usr/local/nginx/conf/
/usr/local/nginx/sbin/nginx &
/bin/bash
```

`docker-run-pro.sh` 配置文件

```bash
#!/usr/bin/env bash
sudo docker stop stars_power_officialSite
sudo docker rm stars_power_officialSite
sudo docker run --privileged=true  -t -i -d -v /data:/data -p 80:80  --name=stars_power_officialSite  557111830783.dkr.ecr.cn-north-1.amazonaws.com.cn/os_nginx_node_pm2:latest /bin/bash -c "/data/www/stars/stars_power_officialSite/bin/run-pro.sh"

```

启动pm2`start.sh`
```bash
#!/bin/bash

#export PATH=/usr/local/bin:/bin:/usr/bin
#export NODE_PATH=/usr/local/lib/node_modules

pm2 start ecosystem.json --env production
```

停止pm2`stop.sh`
```
#!/bin/bash
pm2 stop ecosystem.json
```
