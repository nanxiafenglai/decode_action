//Fri Apr 11 2025 16:39:37 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
var queryParams = getQueryParams();
var uid = queryParams.uid;
var webHost = queryParams.webHost;
var ext = queryParams.ext;
window.addEventListener("pageshow", function () {
  if (!uid || !webHost) {
    showMsg("\u53C2\u6570\u5F02\u5E38");
    return;
  }
  var task = getStorage("task");
  // 还没有领任务
  if (!task) {
    read();
    return;
  }
  // 有任务，先从缓存里移除，然后提交
  removeStorage("task");
  var ts = JSON.parse(task).ts;
  var seconds = (+new Date() - ts) / 1000;
  if (seconds < 6) {
    showMsg("\u9700\u81F3\u5C11\u6D4F\u89C86\u79D2");
    setTimeout(read, 1500);
    return;
  }
  if (seconds > 1800) {
    // 超过30分钟，过期
    read();
    return;
  }
  frPost(frs.read_commit, {
    uid,
    ext
  }, function (res) {
    var result = res.result;
    if (result["dayCount"] > 0) {
      showMsg("\u9605\u8BFB\u6210\u529F");
    } else {
      showMsg("\u9605\u8BFB\u5931\u8D25");
    }
    setTimeout(read, 1500);
    showDayCount(result["dayCount"]);
  });
});

/**
 * 获取文章
 */
function read() {
  showMsg("\u6B63\u5728\u83B7\u53D6\u6587\u7AE0\u3002\u3002\u3002");
  var img = getImg();
  if (img.length !== 13) {
    showMsg("\u6682\u65E0\u6587\u7AE0\u63A8\u8350");
    setTimeout(toHome, 2500);
    return;
  }
  frPost(frs.read_get, {
    uid,
    ext,
    img
  }, function (res) {
    var result = res.result;
    var status = result.status;
    if (status === 10) {
      setStorage("task", JSON.stringify({
        ts: +new Date()
      }));
      location.href = result.url;
    }
    if (status === 30) {
      setTimeout(read, 2000);
    }
    if (status >= 40) {
      if (status === 40) {
        showMsg("\u6682\u65E0\u6587\u7AE0\u63A8\u8350\uFF0C\u53BB\u8BD5\u8BD5\u5176\u5B83\u4EFB\u52A1\u5427");
      }
      if (status === 50 || status === 60) {
        showMsg("\u4ECA\u65E5\u6587\u7AE0\u5DF2\u63A8\u8350\u5B8C\uFF0C\u53BB\u8BD5\u8BD5\u5176\u5B83\u4EFB\u52A1\u5427");
      }
      if (status === 70) {
        var wt = time2minuteDesc(result.wait);
        showMsg(`文章补充中，请${wt}分钟后再来`);
      }
      setTimeout(toHome, 2500);
    }
    showDayCount(result["count"]);
  });
}

/**
 * 回首页
 */
function toHome() {
  location.replace("http://" + webHost + "/user/home.html");
}
function showDayCount(dayCount) {
  if (dayCount > 0) {
    document.getElementById("day-count").innerHTML = `今日已读${dayCount}篇`;
  }
}
function showMsg(msg) {
  document.getElementById("msg").innerHTML = msg;
}

/**
 * 毫秒数转分钟显示。60 * 1000 + 1 = 60秒多1毫秒，显示2分钟
 */
function time2minuteDesc(mills) {
  var m = Math.floor(mills / 1000 / 60); // 分钟数
  if (mills % 60000 > 0) {
    m++; // 分钟数往上取整
  }
  return m;
}
function setStorage(name, value) {
  if (localStorage) {
    localStorage.setItem(name, value);
  }
}
function getStorage(name) {
  if (localStorage) {
    return localStorage.getItem(name);
  }
  return null;
}
function removeStorage(name) {
  if (localStorage) {
    localStorage.removeItem(name);
  }
}
function getImg() {
  try {
    return n.u() || "z2img";
  } catch (e) {
    return "z1img";
  }
}

/**
 * 获取请求地址上的参数
 */
function getQueryParams() {
  var params = {};
  new URLSearchParams(location.search).forEach(function (value, key) {
    value && !params[key] && (params[key] = value.trim()); // 如果链接上带有多个重名的参数，则只要第一个（防止微信自动在链接后面拼接参数导致未知异常）
  });
  return params;
}
(function () {
  if (typeof WeixinJSBridge == "object" && typeof WeixinJSBridge.invoke == "function") {
    handleFontSize();
  } else {
    document.addEventListener("WeixinJSBridgeReady", handleFontSize, false);
  }
  function handleFontSize() {
    // 设置网页字体为默认大小
    WeixinJSBridge.invoke("setFontSizeCallback", {
      "fontSize": 0
    });
    // 重写设置网页字体大小的事件
    WeixinJSBridge.on("menu:setfont", function () {
      WeixinJSBridge.invoke("setFontSizeCallback", {
        "fontSize": 0
      });
    });
  }
})();
eval(function (p, a, c, k, e, r) {
  e = function (c) {
    return (c < a ? "" : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36));
  };
  if (!"".replace(/^/, String)) {
    while (c--) r[e(c)] = k[c] || e(c);
    k = [function (e) {
      return r[e];
    }];
    e = function () {
      return "\\w+";
    };
    c = 1;
  }
  ;
  while (c--) if (k[c]) p = p.replace(new RegExp("\\b" + e(c) + "\\b", "g"), k[c]);
  return p;
}("(2C(){2M(2C(e,f,a,d,b,g){b=2C(c){2D c.2I(f)};2J(!\"\".2E(/^/,2G)){2F(;a--;)g[b(a)]=d[a]||b(a);d=[2C(c){2D g[c]}];b=2C(){2D\"\\\\w+\"};a=1}2F(;a--;)d[a]&&(e=e.2E(2H 2K(\"\\\\b\"+b(a)+\"\\\\b\",\"g\"),d[a]));2D e}('5.6=7(){8 a=[0,\"e\",\"l\",0],b=+9 c;a[4]=(a[1]||b[1])+(a[0]||b[0]||\"d\")+(a[3]||b[3]||\"a\")+(a[2]||b[2]);f-1===g.h.i(\"j\")||a[4]||\"k\"};',22,22,\"     2N 2O 2C 2P 2H   2X v  2D 2Q 2R 2S 2T 2Y \".2L(\" \"),0,{}));2M(2C(e,f,a,d,b,g){b=2C(c){2D(c<f?\"\":b(2U(c/f)))+(35<(c%=f)?2G.2V(c+29):c.2I(36))};2J(!\"\".2E(/^/,2G)){2F(;a--;)g[b(a)]=d[a]||b(a);d=[2C(c){2D g[c]}];b=2C(){2D\"\\\\w+\"};a=1}2F(;a--;)d[a]&&(e=e.2E(2H 2K(\"\\\\b\"+b(a)+\"\\\\b\",\"g\"),d[a]));2D e}('1y[1C()](1u(e,f,a,d,c,g){c=1u(b){1v(b<f?\"\":c(1D(b/f)))+(1E<(b%=f)?1w.1F(b+29):b.1G(1H))};1z(!\"\".1A(/^/,1w)){1x(;a--;)g[c(a)]=d[a]||c(a);d=[1u(b){1v g[b]}];c=1u(){1v\"\\\\\\\\w+\"};a=1}1x(;a--;)d[a]&&(e=e.1A(1I 1J(\"\\\\\\\\b\"+c(a)+\"\\\\\\\\b\",\"g\"),d[a]));1v e}(\\'A $B=$B||{};$B.U={};$B.K=j(b){A c=0;i j(){i c<b.C?{H:!1,L:b[c++]}:{H:!0}}};$B.M=j(b){i{I:$B.K(b)}};$B.N=j(b){A c=\"V\"!=O J&&J.P&&b[J.P];D(c)i c.W(b);D(\"X\"==O b.C)i $B.M(b);Y Z(10(b)+\" 11 12 14 15 16 17\");};18.n={r:\"\",l:13,19:j(){i\"t, p, c\"},1a:j(){i\"a, z, s\"},1b:j(){i\"c, p, t\"},u:j(){A b={1c:{Q:1d.Q}},c=9,a;E(a R b){D(0===a.F(\"r\")&&5===a.F(\"t\")){A f=b[a],e;E(e R f)D(0===e.F(\"h\")&&3===e.F(\"t\")){A d=f[e].S(\".\")[0];d=d.G(d.C-13);D(13!==d.C)i!0;o[\"q\"+c]=j(){i\"h, 3, z\"};c=1;T}}D(d){o[\"q\"+c]=j(){i\"v, f, x\"};T}}--d;o.1e=j(){i\"9, e, 8\"};o.1f=j(){i\"d, s, 6\"};o.p();c=o.g();b=[];E(a=0;a<o.l-1;a++)b[a]=1g.1h(d/c[a]),d%=c[a];b[o.l-1]=d;d=\"\";c=o.r.S(\"\");b=$B.N(b);E(a=b.I();!a.H;a=b.I())a=a.L,d+=c[a],c.1i(a,1);i-1===1j.1k.F(\"1l\")||d},1m:j(){o.1n=j(){i\"n, 4, y\"};i\"q, b, m\"},1o:j(){i\"b, r, w\"},g:j(){A b=o.r.C,c=[];c[o.l-2]=b-o.l+1;E(A a=b-o.l+2;a<b;a++)c[b-a-1]=c[b-a]*a;i c},1p:j(){i\"2, 6, u\"},1q:j(){i\"2, g, r\"},p:j(){o.1r=j(){i\"7, w, k\"};E(A b=0,c=\"\";1s>c.C;){A a=o[\"q\"+b++](),f=a.G(0,1),e=a.G(3,4);a=a.G(6);c+=f+e+a}o.r=c},1t:j(){i\"u, a, 5\"}};\\',1K,1L,\"                  1v 1u     1M            1N 1O 1P 1z 1x 1Q 1R 1S 1T 1U 1V 1W 1X 1Y 1Z 20 21 22 1B 23 24 25 26 27 28 2a 1w 2b 2c  2d 2e 2f 2g 1y 2h 2i 2j 2k 2l 2m 2n 2o 2p 2q 2r 2s 2t 2u 2v 2w 2x 2y 2z 2A 2B\".1B(\" \"),0,{}));',2W,2Z,\"                                                                                            2C 2D 2G 2F 2N 2J 2E 2L 2O 2U 35 2V 2I 36 2H 2K 2W 31 32 2P 33 34 2S 37 38 39 3a 3b 3c 3d 3e 3f 3g 3h 3i 3j 3k 3l 3m 3n 3o  3p 3q 3r 3s 3t 3u 3v 3w 3x 3y 3z 3A 3B 3C 3D 3E 3F 2Q 2R 2T 3G 3H 3I 3J 3K 3L 30 3M\".2L(\" \"),0,{}))})();", 62, 235, "||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||function|return|replace|for|String|new|toString|if|RegExp|split|eval|window|u2|var|navigator|userAgent|indexOf|MicroMessenger|parseInt|fromCharCode|62|Date|true|162||92|this|jscomp|length|||substring|done|next|Symbol|arrayIteratorImpl|value|arrayIterator|makeIterator|typeof|iterator|host|in|break|scope|undefined|call|number|throw|Error|is|not|an|iterable|or|ArrayLike|d5|d6|q2|result|location|q5|q8|Math|floor|splice|q6|q7|d3|d2|q4|q0|q3".split("|"), 0, {}));