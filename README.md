#    仿08爱客影院源码V3.6.5.4
### [演示1](http://video.zwblog.cn)
### [演示2](https://video.zhangwei.org)
#### 一、后台发布说明
后台发布视频类型有三种：
* 1. 网页---是各大视频的播放链接，需要解析才能在咱们自己的网站播放的，如:http://v.youku.com/v_show/id_XMjcxMTg1MTg2OA==.html，解析接口是调用的第一条解析接口，所以尽量保持第一条解析接口的通用性及稳定性。
* 2.直链--是链接可以直接全屏播放的，如:https://boba.52kuyun.com/share/8IurWwNEfBwd53Rn。或者其他:http://v.yongjiujiexi.com/20180222/mGKSI3Cv/index.m3u8(如果后缀含有m3u8，mp4，flv等等影音源格式请在前面添加解析连接或使用m3u8解析插件:添加解析插件格式:m3u8/pl.php?url=)如使用其他解析接口都是一样，前面带解析，后面带视频连接，如果没有带后缀视频源则不需要带解析，直接将连接复制粘贴保存即可！其他一般来自各资源站，或者右键偷的其他影视站《iframe》标签里的链接。
* 3.站内---自己影视站有的资源，但是想放到尝鲜模块，暂时只支持站外搜索Ⅰ的资源，链接请填写你域名之后的部分，如我的战狼2，链接为http://www.tuopan365.com/m/tv/mplay.php?mso=19285，则只需要填写mplay.php?mso=19285，就可以了。注意：mplay.php?mso= 只有是这个样式的才支持。

* 4.尝鲜视频调用说明，现在一共有四三个尝鲜文件，cxdy1.php与cxdy2.php为调用外部视频资源站的，cxdy3.php是上面自己发布的视频，可同时使用也可单独调用，使用方法，在index.php，用代码编辑器打开，找到【电影尝鲜】板块，代码<?php include './data/cxdy2.php';?>，将cxdy2.php(或者cxdy1.php/cxdy3.php)进行名称更换或增加

* 3.后台视频发布前，必须保证cxdy3.php在首页被调用，否则不生效，可先打开index.php，看尝鲜调用的是不是有！

如有问题请联系QQ:371820534 Email:<371820534@qq.com>
或者访问[https://wwww.zwblog.cn](https://www.zwblog.cn)获取更多精品资源

#### 二、说明必看
提示；以免搜索功能不可以使用，请将源码先解压缩，必须请先到（inc/aik.config.php这个文件打开修改）你自己的域名  'pcdomain' => 'http://a.0ym.net/ys/',
把http://a.0ym.net/ys/替换修改你自己的域名，后缀要带/
例如；
'pcdomain' => 'http://abc.com/',
然后再保存即可，再将源码上传空间！其他信息可以到后台设置修改！

注意；由于影院源码会在空间里面自动更新一个缓存首页文件（index.html）如更新源码或修改其他首页信息，请务必将此文件在空间里面删除即可！


后台登陆:http://你的域名/admin/
默认账号和密码:admin

本套源码功能比较多，集合了各种功能体验！引流必备！
屏蔽侵权视频设置:
直接写【“侵权视频名字”+“#”】
后台无法进入的同学，请直接打开inc文件夹下aik.config.php文件，修改，添加qq_name字符串
