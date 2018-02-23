#PIXIV爬虫小程序

##本项目使用的是node方式实现爬虫功能

##主要是设置好cookie和画师ID后自动下载画师所有作品，减去一张张下载所需的时间

##使用的工具为node+superagent+cheerio

##因为pixiv设置了登录限制，所以需要用到superagent

##superagent主要用来设置请求头及请求链接

##cheerio用法和jquery一样，简单方便

##图片预览如下

![](https://s1.ax1x.com/2018/02/23/9aAVA0.jpg)
![](https://s1.ax1x.com/2018/02/23/9UjRc6.png)

##使用时请先执行以下步骤
```
cnpm install

node index.js
```
