# Redis服务器
Stars-power需要依赖Redis，我们基于Docker创建Redis。
- [Redis服务器](#redis服务器)
  - [安装Docker](#安装docker)
  - [安装并启动Reids](#安装并启动reids)

## 安装Docker
``` bash
# 安装Docker依赖包
yum install -y yum-utils device-mapper-persistent-data lvm2

# 添加Aliyun源
yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo

#安装docker-ce
yum clean all yum makecache fastyum -y install docker-ce

#启动服务
systemctl start docker

```
## 安装并启动Reids
``` bash
# 拉取镜像
docker pull redis:5.0.5
# 创建启动Redis容器
docker run -t -i -d  -p 9779:6379  --name=redis-9779 redis --requirepass "**** Password ****"
```

