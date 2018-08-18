
一款聚合「番剧&动漫搜索」开源程序，借助于各网站的数据及各网站的搜索功能进行指定搜索，以减少搜索番剧的时间。


以下是代码说明块。

代码说明
==========================

## 代码结构:

```
.
├── .css
├── .images
├── .js
├── .functions
    ├── .chttochs - 繁体与简体转换代码
    ├── function.php - 封装的通用功能性代码
    ├── mains.php - 程序主要功能代码
    ├── pages.php - 输出通用网页部分代码
    ├── srhauto.php - 获取关键词联想结果代码
    ├── bangumiinfo.php - 获取番剧信息代码
    ├── bangumiSug.php - 番剧推荐代码
    ├── bangumiS.json - 2000年至今(2017/10/1)的日本动漫信息
    ├── bangumiS2017.json - 新番放送表(2017秋)
    ├── bangumiToday.json - 动漫推荐缓存文件
├── .d
    ├── .server - 放于其他服务器的文件
    ├── index.php - InfoDownload主代码
    ├── list.js - 列表搜索功能JS
├── .pages
    ├── about.php - 关于页面
    ├── start.php - 使用文档页面
    ├── if.php - 数据源可用性页面
    ├── srhcode.php - 搜索指令页面
    ├── notice.php - 告示页面
├── index.php - 程序主代码
├── run.php - AJAX接受数据并处理

```

## 细节
### 番剧推荐
设计思路是这样的：

自已更换bangumi动画id→执行更新数据(访问 url/functions/bangumiSug.php/?code=up )→数据保存到本地。程序只是调用本地数据。

id获取代码在 functions/bangumiSug.php 25-27行。百度翻译API授权于 'index.php'266,267行。

### Fonts
字体链接位于 '.css' 4个.css后缀文件中。默认使用我的七牛CDN，但这存在风险，万一我哪天突然换了是吧，所以请请自行修改。字体位于 '.css/Roboto' (请注意更改css.css的代码)。

### PicSearch(以图搜番)[beta]
已开放测试此功能，用 !image:?; 指令使用，限制为 10次/min 。具体请参考 搜索指令 页面。自行搭建前请务必修改 贴图库与whatanime.ga 的token，分别位于 'index.php'97行 与 'functions/mains.php'471行。

### Type类型
本程序的搜索内容类型分为: 二次元 Anine(动画),Comic(漫画),Novel(小说),Download(下载).

Anine包含如下数据源: Bilibili(哔哩哔哩),Dilidili(嘀哩嘀哩),Fcdm(风车动漫),PPTV(聚力),Letv(乐视),iQiyi(爱奇艺),Youku(优酷),TencentTV(腾讯视频),BaiduAll(百度集合搜索).

Comic包含如下数据源:DMZJ(动漫之家),BKMH(布卡漫画),DMW(动漫屋),TKMH(图库漫画).

Novel包含如下数据源:DMZJ(动漫之家),TXDM(腾讯动漫).

Download包含如下数据源:MGJH(蜜柑计划).

搜索以上信息包含三种方式:  
* 站内搜索 -抓取网站内提供的搜索信息，所以相对较准确。
* 百度协助搜索 -在一些站内搜索速度慢或者不怎么推荐的数据源或者没办法直接抓取的数据源会使用这种方法，因为取百度搜索结果，并且用正则只匹配一种规则，所以匹配结果范围较大。
* 集合搜索 -抓取百度工具的集合番剧信息，不过匹配码只针对一些例子，所以时有时无。



## 声明
本程序源代码可任意修改并任意使用，但禁止商业化用途。一旦使用，任何不可知事件都与原作者无关，原作者不承担任何后果。
联系QQ:2248186422
