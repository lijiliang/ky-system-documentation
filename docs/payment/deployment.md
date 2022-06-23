# Payment gateway部署文档
- [Payment gateway部署文档](#payment-gateway部署文档)
  - [环境要求](#环境要求)
  - [配置参数](#配置参数)
  - [基于Maven项目打包](#基于maven项目打包)
  - [启动项目](#启动项目)
  - [基于Gitlab+Jenkins+Docker持续集成自动化部署](#基于gitlabjenkinsdocker持续集成自动化部署)
    - [项目配置](#项目配置)
    - [Jenkins配置](#jenkins配置)

## 环境要求
Java SE Development Kit 8 (JDK8)下载与安装
```bash
#下载JDK后解压文件
https://www.oracle.com/java/technologies/javase/javase-jdk8-downloads.html
#配置JDK环境变量
vim /etc/profile
#在profile文件未尾加上，保存
export JAVA_HOME=/usr/local/jdk1.8.0_181  #jdk安装目录 
export JRE_HOME=${JAVA_HOME}/jre
export CLASSPATH=.:${JAVA_HOME}/lib:${JRE_HOME}/lib:$CLASSPATH
export JAVA_PATH=${JAVA_HOME}/bin:${JRE_HOME}/bin
export PATH=$PATH:${JAVA_PATH}
#生效命令
source /etc/profile
#验证是否成功
java -version
```
Nginx下载与安装 
```bash
# 安装依赖
yum -y install gcc zlib zlib-devel pcre-devel openssl openssl-devel
# 下载Nginx
wget http://nginx.org/download/nginx-1.18.0.tar.gz
# 解压到/usr/local/nginx
tar -zxvf linux-nginx-1.18.0.tar.gz
# 执行配置
cd /usr/local/nginx
./configure --prefix=/usr/local/nginx
# 编译安装(默认安装在/usr/local/nginx)
make
make install
#启动
cd /usr/local/nginx/sbin

./nginx &
```
## 配置参数
系统配置文件目录：
`kyani-stars-power/stars.power.payment.light/src/main/resources`

更新在需要部署的环境，如正式环境 `application-pro.properties`
```bash
# 启动端口
server.port=80
# 数据库配置
spring.datasource.url=jdbc:mysql://*** DB URL ***:3306/kyani?useUnicode=true&characterEncoding=UTF-8&relaxAutoCommit=true&zeroDateTimeBehavior=convertToNull
spring.datasource.username=*** DB USER Name ***
spring.datasource.password=*** DB USER PWD ***
# Redis配置
spring.redis.hostName=*** Redis URL ***
spring.redis.password=**** Redis PWD ****
spring.redis.port=9779

```
## 基于Maven项目打包
``` bash
#下载Maven
wget http://mirrors.cnnic.cn/apache/maven/maven-3/3.5.4/binaries/apache-maven-3.5.4-bin.tar.gz
#解压
tar -zxvf apache-maven-3.5.4-bin.tar.gz
#配置
vi /etc/profile
#在配置文件添加以下
export MAVEN_HOME=/opt/apache-maven-3.5.4
export PATH=$MAVEN_HOME/bin:$PATH
#让配置生效
source /etc/profile
#查看是否成功
mvn -version
```
``` bash
# 项目目录
cd /kyani-stars-power
# 打包JAR文件
mvn clean install -Dmaven.test.skip=true -X
# 成功后生成项目文件 stars.power.payment.light-1.0.0-SNAPSHOT.jar
# 复制Jar文件到指定位置，启动项目
cd /kyani-stars-power/stars.power.payment.light/target/
```

## 启动项目
```bash
# 指向正式环境配置 --spring.profiles.active=pro
java -jar stars.power.payment.light-1.0.0-SNAPSHOT.jar --spring.profiles.active=pro
```

## 基于Gitlab+Jenkins+Docker持续集成自动化部署
### 项目配置
项目里新建脚本文件，用于Jenkins部署时执行,这里以正式环境为示例：
```bash
# 在项目scripts目录下新增两个脚本文件： docker-run-pro.sh run-pro.sh
cd /kyani-stars-power/stars.power.payment.light/src/main/scripts/

# docker-run-pro.sh内容
#!/usr/bin/env bash
source /etc/profile;
java -jar /data/www/stars/stars_power_payment/stars.power.payment.light-1.0.0-SNAPSHOT.jar --spring.profiles.active=pro
/bin/bash

# run-pro.sh 内容
#!/usr/bin/env bash
source /etc/profile;
java -jar /data/www/stars/stars_power_payment/stars.power.payment.light-1.0.0-SNAPSHOT.jar --spring.profiles.active=pro
/bin/bash
```
### Jenkins配置
```bash
sudo cp -rf /home/centos/release/stars/stars_power_payment/stars.power.payment.light-1.0.0-SNAPSHOT.jar /data/www/stars/stars_power_payment/
sudo cp -rf /home/centos/release/stars/stars_power_payment/stars.power.payment.light-1.0.0-SNAPSHOT-script/stars.power.payment.light-1.0.0-SNAPSHOT/* /data/www/stars/stars_power_payment/
sudo chmod 777 /data/www/stars/stars_power_payment/run-pro.sh
sudo chmod 777 /data/www/stars/stars_power_payment/docker-run-pro.sh
sudo sh /data/www/stars/stars_power_payment/docker-run-pro.sh
```
