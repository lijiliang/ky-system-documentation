# Stars管理后台Api部署
- [Stars管理后台Api部署](#stars管理后台api部署)
  - [环境要求](#环境要求)
  - [打包](#打包)
    - [安装Maven](#安装maven)
    - [配置参数](#配置参数)
  - [启动](#启动)

## 环境要求
Java SE Development Kit 8 (JDK8)
```bash
https://www.oracle.com/java/technologies/javase/javase-jdk8-downloads.html
```
Nginx
```bash
yum install nginx
```
## 打包
### 安装Maven
``` bash
#下载
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

### 配置参数
系统配置文件目录：kyani-stars-power/stars.power.admin.light/src/main/resources

更新在需要部署的环境，如正式环境 `application-pro.properties`
``` bash
# 启动端口
server.port=80
# 数据库配置
spring.datasource.url=jdbc:mysql://*** DB URL ***:3306/kyani?useUnicode=true&characterEncoding=UTF-8&relaxAutoCommit=true&zeroDateTimeBehavior=convertToNull
spring.datasource.username=*** DB USER Name ***
spring.datasource.password=*** DB USER PWD ***
# Redis配置
spring.redis.hostName=**** Redis URL **
spring.redis.password=**** Redis PWD ****
spring.redis.port=9779



### 项目打包
``` bash
# 项目目录
cd /kyani-stars-power
# 打包JAR文件
mvn clean install -Dmaven.test.skip=true -X
# 成功后文件保存在stars.power.admin.light目录下的target下,stars.power.admin.light-1.0.0-SNAPSHOT.jar
cd stars.power.admin.light/target/
```

## 启动
```bash
# 指向正式环境配置 --spring.profiles.active=pro
java -jar stars.power.admin.light-1.0.0-SNAPSHOT.jar --spring.profiles.active=pro
```
