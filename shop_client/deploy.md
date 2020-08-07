# 部署文档
主要讲解一下开发环境的启动方式与线上环境的部署
<!-- TOC -->

- [部署文档](#部署文档)
  - [开发环境](#开发环境)
  - [线上环境](#线上环境)
    - [基于nginx部署](#基于nginx部署)
    - [线上部署流程图](#线上部署流程图)
    - [基于docker+jenkins+nginx部署](#基于dockerjenkinsnginx部署)

<!-- /TOC -->

## 开发环境
需要安装开发环境Node.js, npm

Node.js > v9

npm > v5

环境安装好后，到项目的根目录下进行包安装
```bash
npm install
```

当前项目中所有用到的包以本地依赖的形式被安装到你的项目中，并且在`package.json`中配置了如下的 npm scripts

```bash
{
  "scripts": {
    "dev": "webpack-dev-server --inline --progress --config build/webpack.dev.conf.js",
  }
}
```

启动开发环境

``` bash
# 开发环境 
npm run dev 
```

当项目启动成功，打开浏览器输入`http://localhost:8990/`即可看到运行成功的项目

## 线上环境

### 基于nginx部署

### 线上部署流程图
![image](./images/ci2.jpg)

### 基于docker+jenkins+nginx部署