var g3_iplist = new Array();
String.prototype.replaceAll = function(AFindText, ARepText){
	return this.replace(new RegExp(AFindText.replace(/([\(\)\[\]\{\}\^\$\+\-\*\?\.\"\'\|\/\\])/g,"\\$1"), "ig"), ARepText);
}
function setPlayerUri(uri) {
	vstPlayer.src = uri;
	vstPlayer.play();
}
function ps(str, va, n) {
	if(arguments.length < 3) {
		n = 1;
	}
	var list = str.match(va);
	if (list != null && list.length > 0 && n > 0) {
		return list[n];
	}
	return "";
}
function getFileName(url, ext){
	url = url.replaceAll("\\", "/");
	if (url.indexOf("?") > -1){
		url = url.split("?")[0];
	}
	if (url.indexOf("#") > -1){
		url = url.split("#")[0];
	}
	if(url.indexOf("/") > -1){
		var fn = url.substring(url.lastIndexOf("/")+1);
		if(ext || fn.indexOf(".") == -1){
			return fn;
		}
		return fn.substring(0, fn.lastIndexOf("."));
	}
	return url;
}
function open52itvUri(uri) {
	$.get(uri, function(m3u8) {
		if (m3u8.indexOf("http://")) {
			var m3u8url = m3u8.substr(m3u8.indexOf("http://"));
			setPlayerUri(m3u8url.replace("timeshift=-15", "timeshift=-30"));
		}
	}, "text");
}
function openLetvLive(uri) {
	$.getJSON("http://g3.letv.com/r?format=1&jsonp=?", null, function(obj) {
		var nodelist = obj.nodelist;
		for(var i=0;i < nodelist.length;i++) {
			var obj = nodelist[i];
			var gid = obj.gone;
			var url = obj.location;
			var pip = ps(url, "http://(.*?)/");
			g3_iplist[i] = new Array(gid, pip);
		}
		if (g3_iplist.length > 0) {
			var i = Math.floor(Math.random()*g3_iplist.length);
			var gid = g3_iplist[i][0];
			var pip = g3_iplist[i][1];
			$.get("/index.php?uri=" + uri + "&pip=" + pip + "&gid=" + gid, function(obj) {
				open52itvUri(obj.uri);
			}, "json");
		}
	});
}
function startPlayer(uri) {
	if ("undefined" != uri && "" != uri && uri != null && uri.length > 7) {
		var vid = uri.substr(uri.indexOf("://") + 3);
		if (uri.indexOf("letv://") > -1) {
			var stream_id = vid.split("&")[0];
			uri = "http://uri.52itv.cn/vlive/letv/" + stream_id + ".m3u8";
		}
		if (uri.indexOf("hunantv://") > -1) {
			var hnurl = "http://live.api.hunantv.com/pc/getById?liveId=" + vid + "&liveType=2";
			$.getJSON(hnurl + "&callback=?", null, function(obj) {
				setPlayerUri(obj.data.html5Sources[0].url);
			});
		} else if (uri.indexOf("pplive://") > -1) {
			var ppurl = "http://play.api.pptv.com/boxplay.api?id=300146&type=m3u8.web.phone&gslbversion=2&ft=2&version=4&userLevel=1&appver=4.2.5&appid=com.pptv.iphoneapp&playback=0&o=pub.pptv.com";
			if (vid.length > 15) {
				$.getJSON(ppurl + "&callback=?", null, function(text) {
					var host = ps(text, "<sh limit=\"(.*?)\">(.*?)</sh>", 2);
					var kk = ps(text, "<key expire=\"(.*?)\">(.*?)</key>", 2);
					var puri = "http://" + host + "/live/5/30/" + vid + ".m3u8?playback=0&pre=ikan&o=pub.pptv.com&type=m3u8.web.phone&k=" + kk;
					setPlayerUri(puri);
				});
			} else {
				setPlayerUri("http://web-play.pptv.com/web-m3u8-" + vid + ".m3u8?type=m3u8.web.phone&playback=0&o=pub.pptv.com");
			}
		} else if (uri.indexOf(".52itv.cn/vlive/") > -1) {
			var chid = getFileName(uri, false);
			$.get("/index.php?s=1009&uri=" + uri, function(gslb) {
				var tmpUri = gslb.uri;
				if (tmpUri.indexOf("/gslb") > -1 && tmpUri.indexOf("&format=1") > -1) {
					$.getJSON(tmpUri + "&timeshift=-60&jsonp=?", null, function(obj) {
						var locaUri = obj.location;
						if (locaUri.indexOf(chid) > -1) {
							setPlayerUri(locaUri);
						} else {
							openLetvLive(uri.replace("/letv/", "/ipad/"));
						}
					});
				} else {
					open52itvUri(tmpUri);
				}
			}, "json");
		} else if (uri.indexOf("/live.m3u8") > -1) {
			$.get("/index.php?uri=" + uri, function(gslb) {
				setPlayerUri(gslb.uri);
			}, "json");
		} else {
			setPlayerUri(uri);
		}
	}
}

$(document).ready(function(){
	startPlayer($("#playURL").val());
});
