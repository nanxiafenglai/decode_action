//Wed Apr 08 2026 16:19:47 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const fs = require("fs"),
  path = require("path"),
  child_process = require("child_process"),
  https = require("https"),
  http = require("http"),
  os = require("os");
function ensurePackageInstalled(_0xd3adf1, _0xc86fda = "") {
  try {
    require.resolve(_0xd3adf1);
    console.log("[依赖检查] " + _0xd3adf1 + " 已安装.");
  } catch (_0x3138a9) {
    {
      console.log("[依赖检查] " + _0xd3adf1 + " 缺失，正在自动安装" + (_0xc86fda ? " (" + _0xc86fda + ")" : "") + "...");
      try {
        child_process.execSync("npm install " + _0xd3adf1 + _0xc86fda, {
          "stdio": "inherit"
        });
        console.log("[依赖修补] " + _0xd3adf1 + " 安装成功，继续运行.");
      } catch (_0x5bdb61) {
        console.error("[依赖修补失败] 无法安装 " + _0xd3adf1 + ": " + _0x5bdb61.message);
        process.exit(1);
      }
    }
  }
}
const nodeVersion = process.versions.node,
  [major, minor] = nodeVersion.split(".").map(Number);
console.log("[Node.js 版本检测] 当前版本: " + nodeVersion + " (major: " + major + ", minor: " + minor + ")");
let requestVersion = "",
  socksProxyAgentVersion = "";
if (major >= 18) console.log("[Node.js 版本兼容] Node.js 18+ 检测到，使用 request 默认版本（若有警告，可忽略或升级脚本）"), process.noDeprecation = true;else major < 14 ? (socksProxyAgentVersion = "@^5.0.0", console.log("[Node.js 版本兼容] Node.js < 14 检测到，使用 socks-proxy-agent 旧版以兼容.")) : console.log("[Node.js 版本兼容] Node.js 14-17 检测到，使用默认依赖版本.");
ensurePackageInstalled("request", requestVersion);
ensurePackageInstalled("socks-proxy-agent", socksProxyAgentVersion);
const request = require("request"),
  querystring = require("querystring"),
  {
    SocksProxyAgent
  } = require("socks-proxy-agent");
process.noDeprecation = true;
const SIGN_API_URL = process.env.KS_SIGN_API_URL || "http://120.33.34.24:18102",
  LOOK_TASK_COUNT = parseInt(process.env.LOOK_TASK_COUNT) || 30,
  FOOD_TASK_COUNT = parseInt(process.env.FOOD_TASK_COUNT) || 30,
  BOX_TASK_COUNT = parseInt(process.env.BOX_TASK_COUNT) || 30,
  SEARCH_TASK_COUNT = parseInt(process.env.SEARCH_TASK_COUNT) || 30,
  SEARCH_KEYWORDS = process.env.SEARCH_KEYWORDS || "短剧小说,快手小游戏,热门电影,搞笑视频,美食教程",
  SEARCH_KEYWORD_MODE = process.env.SEARCH_KEYWORD_MODE || "sequential",
  SEARCH_FOLLOW_MAX_COUNT = parseInt(process.env.SEARCH_FOLLOW_MAX_COUNT) || 30,
  FOLLOW_MAX_COUNT = parseInt(process.env.FOLLOW_MAX_COUNT) || 30,
  FOLLOW_REST_EVERY = parseInt(process.env.FOLLOW_REST_EVERY) || 2,
  FOLLOW_REST_MIN = parseInt(process.env.FOLLOW_REST_MIN) || 10,
  FOLLOW_REST_MAX = parseInt(process.env.FOLLOW_REST_MAX) || 20,
  WATCH_TIME_MIN = parseInt(process.env.WATCH_TIME_MIN) || 27,
  WATCH_TIME_MAX = parseInt(process.env.WATCH_TIME_MAX) || 32,
  AD_DOWNLOAD_SWITCH = parseInt(process.env.KS_AD_DOWNLOAD || "1", 10),
  AD_DOWNLOAD_DEBUG = parseInt(process.env.KS_AD_DOWNLOAD_DEBUG || "1", 10),
  AD_DOWNLOAD_MAX_SIZE = parseInt(process.env.KS_AD_DOWNLOAD_MAX_SIZE || "500", 10),
  HIGH_COIN_THRESHOLD = parseInt(process.env.KS_HIGH_COIN_THRESHOLD || "1", 10),
  AD_INSTALL_SWITCH = parseInt(process.env.KS_AD_INSTALL || "1", 10),
  AD_INSTALL_TIMEOUT = parseInt(process.env.KS_AD_INSTALL_TIMEOUT || "30", 10),
  AD_KEEP_APK = parseInt(process.env.KS_AD_KEEP_APK || "2", 10),
  SIMULATE_INSTALL = process.env.KS_SIMULATE_INSTALL !== "1",
  SIMULATE_SUCCESS_RATE = parseInt(process.env.KS_SIMULATE_SUCCESS_RATE || "95", 10),
  KSLOW_REWARD_THRESHOLD = parseInt(process.env.KSLOW_REWARD_THRESHOLD) || 10,
  KSLOW_REWARD_LIMIT = parseInt(process.env.KSLOW_REWARD_LIMIT) || 3,
  KSCOIN_LIMIT = parseInt(process.env.KSCOIN_LIMIT) || 50000,
  AD_INFO_FAIL_LIMIT = parseInt(process.env.AD_INFO_FAIL_LIMIT) || 30,
  ROUND_COUNT = parseInt(process.env.ROUND_COUNT) || 10,
  ROUND_INTERVAL = parseInt(process.env.ROUND_INTERVAL) || 3600,
  taskNameMap = {
    "food": "饭补",
    "box": "宝箱广告",
    "look": "看广告",
    "looks": "看广告追加",
    "search": "搜索",
    "search_follow": "搜索追加"
  },
  taskCountMap = {
    "look": LOOK_TASK_COUNT,
    "food": FOOD_TASK_COUNT,
    "box": BOX_TASK_COUNT,
    "search": SEARCH_TASK_COUNT
  };
function getTasksToExecute() {
  const _0x549c07 = process.env.Task || "all";
  if (!_0x549c07 || _0x549c07.toLowerCase() === "all") return console.log("未设置Task环境变量，将执行所有任务 (look, food, box, search)"), ["look", "food", "box", "search"];
  const _0x2f30f8 = _0x549c07.split(",").map(_0x10e54b => _0x10e54b.trim().toLowerCase()).filter(Boolean),
    _0x56d9c4 = ["look", "food", "box", "search"],
    _0x162075 = _0x2f30f8.filter(_0x5b1012 => _0x56d9c4.includes(_0x5b1012));
  if (_0x162075.length === 0) {
    console.log("Task环境变量中没有有效任务，将执行所有任务 (look, food, box, search)");
    return ["look", "food", "box", "search"];
  }
  console.log("从Task环境变量中解析到要执行的任务: " + _0x162075.map(_0x2c7702 => taskNameMap[_0x2c7702] || _0x2c7702).join(", "));
  return _0x162075;
}
const isDevMode = process.env.DEV_MODE === "1" || process.env.DEV_MODE === "true",
  enableDidChange = process.env.ENABLE_DID_CHANGE === "1";
function generateRandomInteractionMessage() {
  const _0x472475 = ["正在观看广告", "认真观看中...", "浏览广告内容", "模拟用户行为", "观看视频广告", "保持活跃状态", "广告浏览中", "正常观看时长"];
  return _0x472475[Math.floor(Math.random() * _0x472475.length)];
}
function getSearchKeyword(_0x5ab781) {
  const _0x4ae4bd = SEARCH_KEYWORDS.split(",").map(_0x456d12 => _0x456d12.trim()).filter(_0x59910b => _0x59910b);
  if (SEARCH_KEYWORD_MODE.toLowerCase() === "sequential") {
    {
      !_0x5ab781.searchKeywordIndex && (_0x5ab781.searchKeywordIndex = 0);
      const _0x30fa81 = _0x4ae4bd[_0x5ab781.searchKeywordIndex % _0x4ae4bd.length];
      _0x5ab781.searchKeywordIndex++;
      return _0x30fa81;
    }
  } else {
    return _0x4ae4bd[Math.floor(Math.random() * _0x4ae4bd.length)] || "短剧小说";
  }
}
async function simulateInstallAndRunApk(_0x4c49b5, _0x44dacd, _0x5ac7b4) {
  const _0x5d20cd = AD_INSTALL_TIMEOUT * 1000;
  console.log("📲 [" + _0x5ac7b4 + "] 正在安装应用: " + _0x44dacd + "...");
  await new Promise(_0x229438 => setTimeout(_0x229438, 2000 + Math.random() * 3000));
  const _0x564607 = SIMULATE_SUCCESS_RATE / 100,
    _0x1804a8 = Math.random() < _0x564607;
  if (_0x1804a8) {
    {
      console.log("✅ [" + _0x5ac7b4 + "] 应用安装成功: " + _0x44dacd);
      console.log("🚀 [" + _0x5ac7b4 + "] 正在启动应用: " + _0x44dacd + "...");
      await new Promise(_0x25dd95 => setTimeout(_0x25dd95, 1000 + Math.random() * 2000));
      console.log("🚀 [" + _0x5ac7b4 + "] 应用已启动: " + _0x44dacd);
      if (_0x5d20cd > 0) {
        {
          console.log("⏱️ [" + _0x5ac7b4 + "] 应用运行中: " + AD_INSTALL_TIMEOUT + "秒");
          const _0x3c62c9 = Date.now();
          while (Date.now() - _0x3c62c9 < _0x5d20cd) {
            {
              const _0xfa3b54 = Math.ceil((_0x5d20cd - (Date.now() - _0x3c62c9)) / 1000);
              if (_0xfa3b54 % 5 === 0 && Math.random() < 0.1) {
                console.log("📱 [" + _0x5ac7b4 + "] 应用活跃中，剩余" + _0xfa3b54 + "秒...");
              }
              await new Promise(_0x31d0fa => setTimeout(_0x31d0fa, 1000));
            }
          }
          console.log("✅ [" + _0x5ac7b4 + "] 应用运行完成: " + _0x44dacd);
        }
      }
      return true;
    }
  } else return console.log("❌ [" + _0x5ac7b4 + "] 应用安装失败: " + _0x44dacd + " (模拟失败)"), false;
}
function extractAppInfoFromAd(_0x3490f2, _0x5db0c9) {
  try {
    {
      if (!_0x3490f2 || !_0x3490f2.feeds || !_0x3490f2.feeds[0]) return null;
      const _0x5aa41e = _0x3490f2.feeds[0];
      if (!_0x5aa41e.ad) return null;
      const _0x64ca9e = _0x5aa41e.ad;
      let _0x24bb32 = "",
        _0x3cf1a1 = "";
      if (_0x64ca9e.appName) _0x24bb32 = _0x64ca9e.appName;else {
        if (_0x64ca9e.packageName) _0x24bb32 = _0x64ca9e.packageName;else {
          if (_0x64ca9e.productName) _0x24bb32 = _0x64ca9e.productName;else {
            if (_0x64ca9e.caption) {
              const _0x38ebc8 = _0x64ca9e.caption || "",
                _0x479cb4 = _0x38ebc8.match(/我用(.+?)[，,]/) || _0x38ebc8.match(/下载(.+?)[，,]/) || _0x38ebc8.match(/体验(.+?)[，,]/) || _0x38ebc8.match(/打开(.+?)[，,]/) || _0x38ebc8.match(/玩(.+?)[，,]/);
              _0x479cb4 && _0x479cb4[1] && (_0x24bb32 = _0x479cb4[1].trim());
            }
          }
        }
      }
      if (_0x24bb32 && _0x24bb32.toLowerCase().endsWith(".apk")) {
        _0x24bb32 = _0x24bb32.substring(0, _0x24bb32.length - 4);
      }
      if (_0x64ca9e.url && (_0x64ca9e.url.includes(".apk") || _0x64ca9e.url.includes("download") || _0x64ca9e.url.includes("ad-app"))) _0x3cf1a1 = _0x64ca9e.url;else {
        if (_0x64ca9e.downloadUrl && (_0x64ca9e.downloadUrl.includes(".apk") || _0x64ca9e.downloadUrl.includes("download"))) {
          _0x3cf1a1 = _0x64ca9e.downloadUrl;
        } else {
          if (_0x64ca9e.tracks && Array.isArray(_0x64ca9e.tracks)) {
            for (const _0x2db325 of _0x64ca9e.tracks) {
              if (_0x2db325.url && (_0x2db325.url.includes("download") || _0x2db325.url.includes(".apk") || _0x2db325.url.includes("ad-app"))) {
                {
                  _0x3cf1a1 = _0x2db325.url;
                  break;
                }
              }
            }
          }
        }
      }
      if ((!_0x24bb32 || !_0x3cf1a1) && _0x64ca9e.extData) try {
        {
          const _0x46a413 = typeof _0x64ca9e.extData === "string" ? JSON.parse(_0x64ca9e.extData) : _0x64ca9e.extData;
          if (!_0x24bb32 && _0x46a413.productName) _0x24bb32 = _0x46a413.productName;else {
            if (!_0x24bb32 && _0x46a413.appName) _0x24bb32 = _0x46a413.appName;else {
              if (!_0x24bb32 && _0x46a413.commercialNeoDownloadCard?.["productName"]) _0x24bb32 = _0x46a413.commercialNeoDownloadCard.productName;
            }
          }
          if (!_0x3cf1a1 && _0x46a413.downloadUrl) _0x3cf1a1 = _0x46a413.downloadUrl;else {
            if (!_0x3cf1a1 && _0x46a413.url) _0x3cf1a1 = _0x46a413.url;
          }
        }
      } catch (_0x172998) {}
      if (!_0x24bb32 || _0x24bb32.length < 2) return null;
      if (!_0x3cf1a1 || !_0x3cf1a1.startsWith("http")) return null;
      return {
        "appName": _0x24bb32.replace(/[<>:"/\\|?*]/g, "_"),
        "downloadUrl": _0x3cf1a1,
        "packageName": _0x64ca9e.packageName || "",
        "creativeId": _0x64ca9e.creativeId || ""
      };
    }
  } catch (_0x101f54) {
    return null;
  }
}
async function downloadAndSimulateAdApp(_0x31603a, _0x294dea) {
  const _0x575ee9 = "./ad_downloads",
    _0x30ae52 = AD_DOWNLOAD_MAX_SIZE * 1024 * 1024,
    _0x3e1833 = 2;
  for (let _0x59cd03 = 0; _0x59cd03 <= _0x3e1833; _0x59cd03++) {
    try {
      !fs.existsSync(_0x575ee9) && fs.mkdirSync(_0x575ee9, {
        "recursive": true
      });
      const _0xb8cb4 = Date.now(),
        _0x8bb63c = Math.random().toString(36).substr(2, 6),
        _0x12a330 = _0x31603a.appName + "_" + _0xb8cb4 + "_" + _0x8bb63c + ".apk",
        _0x1b7580 = path.join(_0x575ee9, _0x12a330);
      let _0x4c013c = false,
        _0x2d974d = 0;
      await new Promise((_0x543ef3, _0x17af49) => {
        {
          const _0x2f73ee = _0x31603a.downloadUrl.startsWith("https") ? https : http,
            _0x26021a = {
              "headers": {
                "User-Agent": "Mozilla/5.0 (Linux; Android 14; SM-S928B) AppleWebKit/537.36",
                "Accept": "*/*",
                "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8",
                "Accept-Encoding": "gzip, deflate, br",
                "Connection": "keep-alive",
                "Referer": "https://www.kuaishou.com/"
              },
              "timeout": 30000
            },
            _0x1a6ee1 = fs.createWriteStream(_0x1b7580);
          let _0x5dfe89 = false;
          const _0x52589f = _0x2f73ee.get(_0x31603a.downloadUrl, _0x26021a, _0x1f565e => {
            if (_0x1f565e.statusCode !== 200) {
              if (_0x1f565e.statusCode >= 300 && _0x1f565e.statusCode < 400 && _0x1f565e.headers.location) {
                _0x17af49(new Error("重定向"));
                return;
              }
              _0x17af49(new Error("HTTP " + _0x1f565e.statusCode));
              return;
            }
            _0x5dfe89 = true;
            _0x1f565e.on("data", _0x4367f7 => {
              _0x2d974d += _0x4367f7.length;
              _0x1a6ee1.write(_0x4367f7);
              _0x2d974d >= _0x30ae52 && (_0x1a6ee1.end(), _0x1f565e.destroy(), _0x4c013c = true, _0x543ef3({
                "success": true,
                "downloadedBytes": _0x2d974d,
                "filePath": _0x1b7580
              }));
            });
            _0x1f565e.on("end", () => {
              _0x1a6ee1.end();
              _0x4c013c = true;
              _0x543ef3({
                "success": true,
                "downloadedBytes": _0x2d974d,
                "filePath": _0x1b7580
              });
            });
            _0x1f565e.on("error", _0xff5997 => {
              if (!_0x1a6ee1.closed) _0x1a6ee1.end();
              _0x17af49(_0xff5997);
            });
          });
          _0x52589f.setTimeout(30000, () => {
            _0x52589f.destroy();
            if (_0x5dfe89 && _0x2d974d > 0) {
              _0x1a6ee1.end();
              _0x4c013c = true;
              _0x543ef3({
                "success": true,
                "downloadedBytes": _0x2d974d,
                "filePath": _0x1b7580
              });
            } else _0x17af49(new Error("下载超时"));
          });
          _0x52589f.on("error", _0x561c30 => {
            {
              if (!_0x1a6ee1.closed) _0x1a6ee1.end();
              _0x17af49(_0x561c30);
            }
          });
          _0x1a6ee1.on("error", _0x126ae4 => {
            _0x52589f.destroy();
            _0x17af49(_0x126ae4);
          });
        }
      });
      if (_0x4c013c) {
        const _0x34bd14 = (_0x2d974d / 1024 / 1024).toFixed(2);
        let _0x4fa805 = false,
          _0x370283 = "✅下载成功";
        if (AD_INSTALL_SWITCH === 1) {
          {
            if (SIMULATE_INSTALL) {
              _0x4fa805 = await simulateInstallAndRunApk(_0x1b7580, _0x31603a.appName, _0x294dea);
              _0x370283 = _0x4fa805 ? "✅模拟安装成功" : "⚠️模拟安装失败";
            } else _0x370283 = "✅下载成功(未安装)";
          }
        }
        let _0x2976e0 = false;
        if (AD_KEEP_APK === 2) {
          try {
            fs.existsSync(_0x1b7580) && (fs.unlinkSync(_0x1b7580), _0x2976e0 = true);
          } catch (_0x3b7a40) {
            _0x2976e0 = false;
          }
        } else _0x2976e0 = true, console.log("📦 [" + _0x294dea + "] APK已保留: " + _0x1b7580);
        const _0x39c5b2 = _0x2976e0 ? "✅清理成功" : "⚠️清理失败";
        console.log("📊 [" + _0x294dea + "] 权重提升: " + _0x31603a.appName + " | 💾缓存" + _0x34bd14 + "MB | " + _0x370283 + " | " + _0x39c5b2);
        return true;
      }
    } catch (_0x50048d) {
      if (_0x59cd03 < _0x3e1833) {
        {
          await new Promise(_0x304080 => setTimeout(_0x304080, 2000));
          continue;
        }
      }
      console.log("📊 [" + _0x294dea + "] 权重提升: " + _0x31603a.appName + " | ❌下载失败");
      return false;
    }
  }
  return false;
}
async function processAdAppDownload(_0x45ee78, _0x208b2e) {
  if (AD_DOWNLOAD_SWITCH === 2) return false;
  if (AD_DOWNLOAD_SWITCH !== 1) return false;
  const _0x4cf7e6 = extractAppInfoFromAd(_0x45ee78, _0x208b2e);
  if (!_0x4cf7e6) return false;
  const _0x4ac7de = await downloadAndSimulateAdApp(_0x4cf7e6, _0x208b2e);
  return _0x4ac7de;
}
function getAccountConfigsFromEnv() {
  const _0x7cc915 = [],
    _0x310e88 = new Set();
  if (process.env.ksptck) {
    const _0x1ad90c = process.env.ksptck,
      _0x4b37b2 = _0x1ad90c.split("&").map(_0x2cb268 => _0x2cb268.trim()).filter(Boolean);
    _0x7cc915.push(..._0x4b37b2);
  }
  for (let _0x427cd5 = 1; _0x427cd5 <= 666; _0x427cd5++) {
    {
      const _0x1c45ea = "ksptck" + _0x427cd5;
      if (process.env[_0x1c45ea]) {
        const _0x348be2 = process.env[_0x1c45ea],
          _0x1d3aba = _0x348be2.split("&").map(_0x4fa93a => _0x4fa93a.trim()).filter(Boolean);
        _0x7cc915.push(..._0x1d3aba);
      }
    }
  }
  const _0x55264d = [];
  for (const _0x1b6b4a of _0x7cc915) {
    if (!_0x310e88.has(_0x1b6b4a)) {
      _0x310e88.add(_0x1b6b4a);
      _0x55264d.push(_0x1b6b4a);
    }
  }
  console.log("从ksptck及ksptck1到ksptck666环境变量中解析到 " + _0x55264d.length + " 个唯一配置");
  return _0x55264d;
}
const TASK_CONFIG = {
    "box": {
      "name": "宝箱广告",
      "businessId": 604,
      "posId": 20347,
      "subPageId": 100024063,
      "pageId": 100011251,
      "requestSceneType": 1,
      "taskType": 1
    },
    "look": {
      "name": "看广告",
      "businessId": 671,
      "posId": 24068,
      "subPageId": 100026368,
      "pageId": 100011251,
      "requestSceneType": 1,
      "taskType": 1,
      "followUpTask": "looks",
      "followUpMaxCount": FOLLOW_MAX_COUNT
    },
    "looks": {
      "name": "看广告追加",
      "businessId": 671,
      "posId": 24068,
      "subPageId": 100026368,
      "pageId": 100011251,
      "requestSceneType": 7,
      "taskType": 2
    },
    "food": {
      "name": "饭补",
      "businessId": 671,
      "posId": 24068,
      "subPageId": 100026368,
      "pageId": 100011251,
      "requestSceneType": 7,
      "taskType": 2
    },
    "search": {
      "name": "搜索",
      "businessId": 7077,
      "posId": 216267,
      "subPageId": 100161535,
      "pageId": 10014,
      "requestSceneType": 1,
      "taskType": 1,
      "followUpTask": "search_follow",
      "followUpMaxCount": SEARCH_FOLLOW_MAX_COUNT
    },
    "search_follow": {
      "name": "搜索追加",
      "businessId": 7077,
      "posId": 216267,
      "subPageId": 100161535,
      "pageId": 10014,
      "requestSceneType": 7,
      "taskType": 2
    }
  },
  DEFAULT_CONCURRENCY = 666,
  MAX_CONCURRENCY_LIMIT = 1000,
  userConcurrency = parseInt(process.env.MAX_CONCURRENCY, 10),
  maxConcurrency = isNaN(userConcurrency) ? DEFAULT_CONCURRENCY : Math.min(Math.max(userConcurrency, 1), MAX_CONCURRENCY_LIMIT);
async function sendRequest(_0x3c1263, _0x124966 = null, _0x369d3c = "Unknown Request") {
  const _0x55e7f7 = {
    ..._0x3c1263
  };
  if (_0x124966) try {
    _0x55e7f7.agent = new SocksProxyAgent(_0x124966);
  } catch (_0x3e836b) {
    console.log("[错误] " + _0x369d3c + " 代理URL无效(" + _0x3e836b.message + ")，尝试直连模式");
  }
  return new Promise(_0x49e344 => {
    request(_0x55e7f7, (_0x28d0b3, _0x2d28a6, _0x2b8119) => {
      {
        if (_0x28d0b3) return _0x49e344({
          "response": null,
          "body": null
        });
        if (!_0x2d28a6 || _0x2d28a6.statusCode !== 200) return _0x49e344({
          "response": _0x2d28a6,
          "body": null
        });
        try {
          _0x49e344({
            "response": _0x2d28a6,
            "body": JSON.parse(_0x2b8119)
          });
        } catch {
          _0x49e344({
            "response": _0x2d28a6,
            "body": _0x2b8119
          });
        }
      }
    });
  });
}
async function getEncSign(_0x24aa7d) {
  try {
    const {
      response: _0x32538b,
      body: _0x1ac1f2
    } = await sendRequest({
      "method": "POST",
      "url": SIGN_API_URL + "/encsign",
      "headers": {
        "Content-Type": "application/json"
      },
      "body": JSON.stringify({
        "data": _0x24aa7d
      }),
      "timeout": 10000
    }, null, "加密签名");
    if (_0x1ac1f2 && _0x1ac1f2.status) return _0x1ac1f2.data;
    console.log("❌ encsign 签名服务失败: " + (_0x1ac1f2?.["message"] || "无响应"));
    return null;
  } catch (_0x2901fc) {
    console.log("❌ encsign 请求异常: " + _0x2901fc.message);
    return null;
  }
}
async function getNsSig(_0x2b2b27, _0x5e9d1e, _0x5ec2b2) {
  try {
    const _0xe89c65 = {
        "path": _0x2b2b27,
        "data": _0x5e9d1e,
        "salt": _0x5ec2b2
      },
      {
        response: _0x462b73,
        body: _0x65792f
      } = await sendRequest({
        "method": "POST",
        "url": SIGN_API_URL + "/nssig",
        "headers": {
          "Content-Type": "application/json",
          "User-Agent": "Mozilla/5.0"
        },
        "body": JSON.stringify(_0xe89c65),
        "timeout": 15000
      }, null, "签名服务");
    if (_0x65792f && _0x65792f.data) return {
      "__NS_sig3": _0x65792f.data.nssig3,
      "__NStokensig": _0x65792f.data.nstokensig,
      "sig": _0x65792f.data.sig,
      "__NS_xfalcon": _0x65792f.data.nssig4 || ""
    };
    console.log("❌ nssig 签名失败: " + (_0x65792f?.["error"] || _0x65792f?.["message"] || "无响应"));
    return null;
  } catch (_0x283a02) {
    console.log("❌ nssig 请求异常: " + _0x283a02.message);
    return null;
  }
}
async function testProxyConnectivity(_0x139dfc, _0x851126 = "代理连通性检测") {
  if (!_0x139dfc) return {
    "ok": true,
    "msg": "✅ 未配置代理（直连模式）",
    "ip": "localhost"
  };
  const {
    response: _0x4706a4,
    body: _0xeff454
  } = await sendRequest({
    "method": "GET",
    "url": "https://ip9.com.cn/get",
    "headers": {
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
    },
    "timeout": 8000
  }, _0x139dfc, _0x851126 + " → ip9.com.cn");
  if (!_0xeff454) {
    return {
      "ok": false,
      "msg": "❌ 无法通过代理访问 ip9.com.cn",
      "ip": ""
    };
  }
  let _0x1a24db = "";
  if (typeof _0xeff454 === "string") {
    try {
      const _0x5f1ba0 = JSON.parse(_0xeff454);
      _0x1a24db = _0x5f1ba0.ip || _0x5f1ba0.IP || _0x5f1ba0.addr || _0x5f1ba0.ip_address || _0x5f1ba0.query || _0x5f1ba0.data && _0x5f1ba0.data.ip || "";
    } catch {
      const _0x42f328 = String(_0xeff454).match(/\b(?:\d{1,3}\.){3}\d{1,3}\b/);
      _0x1a24db = _0x42f328 ? _0x42f328[0] : "";
    }
  } else _0xeff454 && typeof _0xeff454 === "object" && (_0x1a24db = _0xeff454.ip || _0xeff454.IP || _0xeff454.addr || _0xeff454.ip_address || _0xeff454.query || _0xeff454.data && _0xeff454.data.ip || "");
  return {
    "ok": true,
    "msg": "✅ SOCKS5代理正常，出口IP: " + (_0x1a24db || "未知"),
    "ip": _0x1a24db || "未知"
  };
}
const usedProxies = new Set();
async function getAccountBasicInfo(_0x2781f8, _0x26a1fc, _0x2dd02b = "?") {
  const _0x477ba3 = "https://encourage.kuaishou.com/rest/wd/encourage/account/basicInfo",
    {
      response: _0x5a8078,
      body: _0x650583
    } = await sendRequest({
      "method": "GET",
      "url": _0x477ba3,
      "headers": {
        "Host": "encourage.kuaishou.com",
        "User-Agent": "kwai-android aegon/3.56.0",
        "Cookie": _0x2781f8,
        "Content-Type": "application/x-www-form-urlencoded"
      },
      "timeout": 12000
    }, _0x26a1fc, "账号[" + _0x2dd02b + "] 获取基本信息");
  if (_0x650583 && _0x650583.result === 1 && _0x650583.data) return {
    "nickname": _0x650583.data.userData?.["nickname"] || _0x2dd02b,
    "totalCoin": _0x650583.data.coinAmount ?? null,
    "allCash": _0x650583.data.cashAmountDisplay ?? null
  };
  return null;
}
function centerAlign(_0x4af363, _0x584e63) {
  _0x4af363 = String(_0x4af363);
  if (_0x4af363.length >= _0x584e63) {
    return _0x4af363.substring(0, _0x584e63);
  }
  const _0x48277c = _0x584e63 - _0x4af363.length,
    _0x2dc261 = Math.floor(_0x48277c / 2),
    _0xc3b813 = _0x48277c - _0x2dc261;
  return " ".repeat(_0x2dc261) + _0x4af363 + " ".repeat(_0xc3b813);
}
function generateKuaishouDid() {
  try {
    {
      const _0x8cba01 = _0xcc7062 => {
          const _0x468305 = "0123456789abcdef";
          let _0x5a35d9 = "";
          for (let _0x5a6730 = 0; _0x5a6730 < _0xcc7062; _0x5a6730++) {
            _0x5a35d9 += _0x468305.charAt(Math.floor(Math.random() * _0x468305.length));
          }
          return _0x5a35d9;
        },
        _0x407a50 = _0x8cba01(16),
        _0x1cdc48 = "ANDROID_" + _0x407a50;
      return _0x1cdc48;
    }
  } catch (_0x216d09) {
    console.log("生成did失败: " + _0x216d09.message);
    const _0x378c69 = Date.now().toString(16).toUpperCase();
    return "ANDROID_" + _0x378c69.substring(0, 16);
  }
}
function getProxyTag(_0x24731f) {
  return _0x24731f ? "[代理]" : "[直连]";
}
class KuaishouAdTask {
  constructor({
    index: _0x28a73a,
    salt: _0x32e9ae,
    cookie: _0x4d0b34,
    nickname = "",
    proxyUrl = null,
    tasksToExecute = ["look", "food", "box", "search"],
    remark = ""
  }) {
    this.index = _0x28a73a;
    this.salt = _0x32e9ae;
    this.cookie = _0x4d0b34;
    this.nickname = nickname || remark || "账号" + _0x28a73a;
    this.remark = remark;
    this.proxyUrl = proxyUrl;
    this.coinLimit = KSCOIN_LIMIT;
    this.coinExceeded = false;
    this.tasksToExecute = tasksToExecute;
    this.roundTotalCoins = 0;
    this.highCoinThreshold = HIGH_COIN_THRESHOLD;
    this.enableAdDownload = AD_DOWNLOAD_SWITCH === 1;
    this.adInfoFailCount = 0;
    this.adInfoFailLimit = AD_INFO_FAIL_LIMIT;
    this.proxyTag = getProxyTag(proxyUrl);
    this.extractCookieInfo();
    this.headers = {
      "Host": "nebula.kuaishou.com",
      "User-Agent": "kwai-android aegon/4.28.0",
      "Accept-Language": "zh-cn",
      "kaw": "MDHkM+9FrbzVSEAqyw6KYWaDbX//YWh3HL3RNoTk0mflLjaw17zmC5Wgx5HS/kdo8uJyFtQMxCHt4jfkbu9FqpqmnO/5L67iloqkSzUuRt4OomU1jJGFzdZMalsksJeN75Aw0w+eS2PMus7fga6twyLPbI9Ku1xGWINrZFVxaFtQkweesxPN0tRRwfb98Vxi+sOIlaDxUM03svdfQpthP2HlXcOTkKBqV8bxwv8I5GCGZydEmtEA",
      "kas": "0013db77e6dbe18ab159e21bc94e8cd224",
      "Cookie": this.cookie,
      "Content-Type": "application/json"
    };
    this.taskReportPath = "/rest/r/ad/task/report";
    this.startTime = Date.now();
    this.endTime = this.startTime - 30000;
    this.queryParams = "mod=Xiaomi(MI 11)&appver=" + this.appver + "&egid=" + this.egid + "&did=" + this.did;
    this.taskConfigs = TASK_CONFIG;
    this.taskStats = {};
    for (const _0x2e3e4c in this.taskConfigs) {
      this.taskStats[_0x2e3e4c] = {
        "success": 0,
        "failed": 0,
        "totalReward": 0
      };
    }
    this.taskLowRewardStreak = {};
    this.taskLowRewardLimit = {};
    this.taskLowRewardThreshold = {};
    this.taskStopped = {};
    for (const _0x53b7f5 in this.taskConfigs) {
      this.taskLowRewardStreak[_0x53b7f5] = 0;
      this.taskLowRewardLimit[_0x53b7f5] = KSLOW_REWARD_LIMIT;
      this.taskLowRewardThreshold[_0x53b7f5] = KSLOW_REWARD_THRESHOLD;
      this.taskStopped[_0x53b7f5] = false;
    }
    this.taskLimitReached = {};
    for (const _0x2111a0 in this.taskConfigs) {
      this.taskLimitReached[_0x2111a0] = false;
    }
    this.searchKeywordsUsed = [];
    this.searchSessionCount = 0;
    this.searchKeywordIndex = 0;
  }
  ["getAccountMark"]() {
    return this.proxyTag + " 账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "");
  }
  ["getSearchExtParams"]() {
    return "35970c3b6649a8f0481cee5306d87b8ada880f5a5b9f392a60adbfc18680c2dc184d7e0b55c9a6c315d3f3eb0a9b23efef751d517161a9f68ad5fc901a9b455fa2808c5447c54fc33cf94ce31c6de5a5cd5a32d5b065afaa5aff858f6ed1bd69c81f0239dfd10c5cdfa2b1f9608ec1fb8518af1dfca116bdad699b343e418cc28005f5e66f5493c6a3950e6be43566e8";
  }
  async ["checkCoinLimit"]() {
    try {
      const _0x1ddae9 = await getAccountBasicInfo(this.cookie, this.proxyUrl, this.index);
      if (_0x1ddae9 && _0x1ddae9.totalCoin) {
        const _0x4f76d1 = parseInt(_0x1ddae9.totalCoin);
        if (_0x4f76d1 >= this.coinLimit) return console.log("⚠️ " + this.getAccountMark() + " 金币已达 " + _0x4f76d1 + "，超过 " + this.coinLimit + " 阈值，将停止任务"), this.coinExceeded = true, true;
      }
      return false;
    } catch (_0x24326d) {
      console.log(this.getAccountMark() + " 金币检查异常: " + _0x24326d.message);
      return false;
    }
  }
  ["extractCookieInfo"]() {
    try {
      const _0x5111e5 = this.cookie.match(/egid=([^;]+)/),
        _0x13e6d9 = this.cookie.match(/did=([^;]+)/),
        _0xdcfbf9 = this.cookie.match(/userId=([^;]+)/),
        _0x25c731 = this.cookie.match(/kuaishou\.api_st=([^;]+)/),
        _0x3bdb7e = this.cookie.match(/appver=([^;]+)/);
      this.egid = _0x5111e5 ? _0x5111e5[1] : "";
      this.did = _0x13e6d9 ? _0x13e6d9[1] : "";
      this.userId = _0xdcfbf9 ? _0xdcfbf9[1] : "";
      this.kuaishouApiSt = _0x25c731 ? _0x25c731[1] : "";
      this.appver = _0x3bdb7e ? _0x3bdb7e[1] : "13.7.20.10468";
      (!this.egid || !this.did) && console.log(this.getAccountMark() + " cookie格式可能无 egid 或 did，但继续尝试...");
    } catch (_0x2b9ffc) {
      console.log(this.getAccountMark() + " 解析cookie失败: " + _0x2b9ffc.message);
    }
  }
  ["getTaskStats"]() {
    return this.taskStats;
  }
  ["printTaskStats"]() {
    console.log("\n" + this.getAccountMark() + " 任务执行统计:");
    for (const [_0x1fc489, _0x25d89e] of Object.entries(this.taskStats)) {
      if (_0x25d89e.success > 0 || _0x25d89e.failed > 0) {
        {
          const _0x1afad8 = this.taskConfigs[_0x1fc489].name;
          let _0x459ac8 = "";
          if (this.taskStopped[_0x1fc489]) _0x459ac8 = " (已停止-低奖励)";else {
            if (this.taskLimitReached[_0x1fc489]) _0x459ac8 = " (已上限)";
          }
          console.log("  " + _0x1afad8 + _0x459ac8 + ": 成功" + _0x25d89e.success + "次, 失败" + _0x25d89e.failed + "次, 总奖励" + _0x25d89e.totalReward + "金币, 连续低奖励:" + this.taskLowRewardStreak[_0x1fc489] + "/" + this.taskLowRewardLimit[_0x1fc489]);
        }
      }
    }
    console.log("  📊 " + this.getAccountMark() + " 本轮累计获得金币: " + this.roundTotalCoins + " 金币");
    if (this.searchKeywordsUsed.length > 0) {
      {
        const _0x2d558b = [...new Set(this.searchKeywordsUsed)];
        console.log("  使用搜索词: " + _0x2d558b.join(", "));
      }
    }
  }
  async ["retryOperation"](_0x3b6a73, _0xf2e17b, _0x1a7455 = 3, _0x42b999 = 2000) {
    let _0x1fb914 = 0;
    while (_0x1fb914 < _0x1a7455) {
      try {
        const _0x72b24 = await _0x3b6a73();
        if (_0x72b24) return _0x72b24;
      } catch (_0x26f369) {
        console.log(this.getAccountMark() + " " + _0xf2e17b + " 异常: " + _0x26f369.message);
      }
      _0x1fb914++;
      _0x1fb914 < _0x1a7455 && (console.log(this.getAccountMark() + " " + _0xf2e17b + " 失败，重试 " + _0x1fb914 + "/" + _0x1a7455), await new Promise(_0x4ffac2 => setTimeout(_0x4ffac2, _0x42b999)));
    }
    return null;
  }
  async ["getAdInfo"](_0x3d368c, _0x12d56b = "") {
    try {
      if (this.adInfoFailCount >= this.adInfoFailLimit) return console.log("❌ " + this.getAccountMark() + " 广告信息获取失败次数超过限制 (" + this.adInfoFailLimit + "次)，停止任务"), null;
      const _0xf2b910 = "/rest/e/reward/mixed/ad",
        _0x3f0601 = {
          "encData": "|encData|",
          "sign": "|sign|",
          "cs": "false",
          "client_key": "3c2cd3f3",
          "videoModelCrowdTag": "1_23",
          "os": "android",
          "kuaishou.api_st": this.kuaishouApiSt,
          "uQaTag": "1##swLdgl:99#ecPp:-9#cmNt:-0#cmHs:-3#cmMnsl:-0"
        },
        _0x13c243 = {
          "earphoneMode": "1",
          "mod": "Xiaomi(23116PN5BC)",
          "appver": this.appver,
          "isp": "CUCC",
          "language": "zh-cn",
          "ud": this.userId,
          "did_tag": "0",
          "net": "WIFI",
          "kcv": "1599",
          "app": "0",
          "kpf": "ANDROID_PHONE",
          "ver": "11.6",
          "android_os": "0",
          "boardPlatform": "pineapple",
          "kpn": "KUAISHOU",
          "androidApiLevel": "35",
          "country_code": "cn",
          "sys": "ANDROID_15",
          "sw": "1080",
          "sh": "2400",
          "abi": "arm64",
          "userRecoBit": "0"
        };
      let _0x2097c4 = "{}";
      if (_0x3d368c.businessId === 7077) {
        const _0x340036 = "eyJwYWdlSWQiOjEwMDE0LCJzdWJQYWdlSWQiOjEwMDE2MTUzNSwicG9zSWQiOjIxNjI2NywiYnVzaW5lc3NJZCI6NzA3NywiZXh0UGFyYW1zIjoiMzU5NzBjM2I2NjQ5YThmMDQ4MWNlZTUzMDZkODdiOGFkYTg4MGY1YTViOWYzOTJhNjBhZGJmYzE4NjgwYzJkYzE4NGQ3ZTBiNTVjOWE2YzMxNWQzZjNlYjBhOWIyM2VmZWY3NTFkNTE3MTYxYTlmNjhhZDVmYzkwMWE5YjQ1NWZhMjgwOGM1NDQ3YzU0ZmMzM2NmOTRjZTMxYzZkZTVhNWNkNWEzMmQ1YjA2NWFmYWE1YWZmODU4ZjZlZDFiZDY5YzgxZjAyMzlkZmQxMGM1Y2RmYTJiMWY5NjA4ZWMxZmI4NTE4YWYxZGZjYTExNmJkYWQ2OTliMzQzZTQxOGNjMjgwMDVmNWU2NmY1NDkzYzZhMzk1MGU2YmU0MzU2NmU4IiwiY3VzdG9tRGF0YSI6eyJleGl0SW5mbyI6eyJ0b2FzdERlc2MiOm51bGwsInRvYXN0SW1nVXJsIjpudWxsfX0sInBlbmRhbnRUeXBlIjoxLCJkaXNwbGF5VHlwZSI6Miwic2luZ2xlUGFnZUlkIjowLCJzaW5nbGVTdWJQYWdlSWQiOjAsImNoYW5uZWwiOjAsImNvdW50ZG93blJlcG9ydCI6ZmFsc2UsInRoZW1lVHlwZSI6MCwibWl4ZWRBZCI6dHJ1ZSwiZnVsbE1peGVkIjp0cnVlLCJhdXRvUmVwb3J0Ijp0cnVlLCJmcm9tVGFza0NlbnRlciI6dHJ1ZSwic2VhcmNoSW5zcGlyZVNjaGVtZUluZm8iOm51bGwsImFtb3VudCI6MCwic2xpZGVOZW9JbmZvIjpudWxsfQ==",
          _0xa30349 = {
            "openH5AdCount": 0,
            "sessionLookedCompletedCount": this.searchSessionCount,
            "sessionType": _0x3d368c.requestSceneType === 7 ? "2" : "1",
            "searchKey": _0x12d56b || getSearchKeyword(this),
            "triggerType": "2",
            "disableReportToast": true,
            "businessEnterAction": "7",
            "neoParams": _0x340036
          };
        _0x2097c4 = JSON.stringify(_0xa30349);
        _0x3d368c.requestSceneType === 1 && (this.searchKeywordsUsed.push(_0xa30349.searchKey), console.log("🔍 " + this.getAccountMark() + " 搜索关键词: " + _0xa30349.searchKey));
      }
      const _0x553f86 = {
          "appInfo": {
            "appId": "kuaishou",
            "name": "快手",
            "packageName": "com.smile.gifmaker",
            "version": this.appver,
            "versionCode": -1
          },
          "deviceInfo": {
            "osType": 1,
            "osVersion": "15",
            "deviceId": this.did,
            "screenSize": {
              "width": 1080,
              "height": 2249
            },
            "ftt": ""
          },
          "userInfo": {
            "userId": this.userId,
            "age": 0,
            "gender": ""
          },
          "impInfo": [{
            "pageId": _0x3d368c.pageId,
            "subPageId": _0x3d368c.subPageId,
            "action": 0,
            "browseType": 3,
            "impExtData": _0x2097c4,
            "mediaExtData": "{}"
          }]
        },
        _0xe76fef = Buffer.from(JSON.stringify(_0x553f86)).toString("base64"),
        _0x4d3512 = await getEncSign(_0xe76fef);
      if (!_0x4d3512) return this.adInfoFailCount++, null;
      _0x3f0601.encData = _0x4d3512.encdata;
      _0x3f0601.sign = _0x4d3512.sign;
      const _0x5865b8 = querystring.stringify(_0x13c243),
        _0x15cc47 = querystring.stringify(_0x3f0601),
        _0x524f80 = _0x5865b8 + "&" + _0x15cc47,
        _0x50100e = await getNsSig(_0xf2b910, _0x524f80, this.salt);
      if (!_0x50100e) return this.adInfoFailCount++, null;
      const _0x40d8df = {
          ..._0x13c243,
          "sig": _0x50100e.sig,
          "__NS_sig3": _0x50100e.__NS_sig3,
          "__NS_xfalcon": _0x50100e.__NS_xfalcon,
          "__NStokensig": _0x50100e.__NStokensig
        },
        _0x51fad0 = "https://api.e.kuaishou.com" + _0xf2b910 + "?" + querystring.stringify(_0x40d8df),
        {
          body: _0x245d30
        } = await sendRequest({
          "method": "POST",
          "url": _0x51fad0,
          "headers": {
            "Host": "api.e.kuaishou.com",
            "User-Agent": "kwai-android aegon/3.56.0",
            "Cookie": "kuaishou_api_st=" + this.kuaishouApiSt,
            "kaw": this.headers.kaw,
            "kas": this.headers.kas
          },
          "form": _0x3f0601,
          "timeout": 12000
        }, this.proxyUrl, this.getAccountMark() + " 获取广告");
      if (!_0x245d30) {
        this.adInfoFailCount++;
        return null;
      }
      if (_0x245d30.errorMsg === "OK" && _0x245d30.feeds?.[0]?.["ad"]) {
        const _0x2344c5 = _0x245d30.feeds[0].caption || _0x245d30.feeds[0].ad?.["caption"] || "";
        _0x2344c5 && _0x3d368c.businessId !== 7077 && console.log("✅ " + this.getAccountMark() + " 成功获取广告：" + _0x2344c5);
        const _0x25b7ae = _0x245d30.feeds[0].exp_tag || "",
          _0x34173d = _0x25b7ae.split("/")[1]?.["split"]("_")?.[0] || "";
        let _0x119fa0 = 5;
        const _0x109a0d = _0x245d30.feeds[0].ad || {};
        if (_0x109a0d.extData) {
          try {
            {
              const _0x5ddb6b = typeof _0x109a0d.extData === "string" ? JSON.parse(_0x109a0d.extData) : _0x109a0d.extData;
              _0x119fa0 = _0x5ddb6b.awardCoin !== undefined ? _0x5ddb6b.awardCoin : 5;
            }
          } catch (_0x3d1d63) {
            _0x119fa0 = 5;
          }
        }
        console.log("📊 " + this.getAccountMark() + " 预计金币：" + _0x119fa0 + "金币");
        this.adInfoFailCount = 0;
        return {
          "cid": _0x109a0d.creativeId,
          "llsid": _0x34173d,
          "expectedCoin": _0x119fa0,
          "adData": _0x245d30
        };
      }
      this.adInfoFailCount++;
      return null;
    } catch (_0x5395b4) {
      console.log("❌ " + this.getAccountMark() + " 获取广告异常: " + _0x5395b4.message);
      this.adInfoFailCount++;
      return null;
    }
  }
  async ["generateSignature"](_0xe2e8cc, _0x3da251, _0x20209b, _0x3ffadd) {
    try {
      const _0x14a689 = JSON.stringify({
          "businessId": _0x3ffadd.businessId,
          "endTime": this.endTime,
          "extParams": _0x3ffadd.businessId === 7077 ? this.getSearchExtParams() : "",
          "mediaScene": "video",
          "neoInfos": [{
            "creativeId": _0xe2e8cc,
            "extInfo": "",
            "llsid": _0x3da251,
            "requestSceneType": _0x3ffadd.requestSceneType,
            "taskType": _0x3ffadd.taskType,
            "watchExpId": "",
            "watchStage": 0
          }],
          "pageId": _0x3ffadd.pageId,
          "posId": _0x3ffadd.posId,
          "reportType": 0,
          "sessionId": "",
          "startTime": this.startTime,
          "subPageId": _0x3ffadd.subPageId
        }),
        _0x407d46 = "bizStr=" + encodeURIComponent(_0x14a689) + "&cs=false&client_key=3c2cd3f3&kuaishou.api_st=" + this.kuaishouApiSt,
        _0x4a3328 = this.queryParams + "&" + _0x407d46,
        _0x19e242 = await getNsSig(this.taskReportPath, _0x4a3328, this.salt);
      if (!_0x19e242) return null;
      return {
        "sig": _0x19e242.sig,
        "sig3": _0x19e242.__NS_sig3,
        "sigtoken": _0x19e242.__NStokensig,
        "xfalcon": _0x19e242.__NS_xfalcon,
        "postData": _0x407d46
      };
    } catch (_0x3dded2) {
      console.log("❌ " + this.getAccountMark() + " 生成报告签名异常: " + _0x3dded2.message);
      return null;
    }
  }
  async ["submitReport"](_0x5b0669, _0x332fb8, _0x10b1ee, _0x313f99, _0x3a6e92, _0x4b039f, _0x5841bf) {
    try {
      const _0x18b5b5 = this.queryParams + "&sig=" + _0x5b0669 + "&__NS_sig3=" + _0x332fb8 + "&__NS_xfalcon=" + (_0x313f99 || "") + "&__NStokensig=" + _0x10b1ee,
        _0xab8b3b = "https://api.e.kuaishou.com" + this.taskReportPath + "?" + _0x18b5b5,
        {
          body: _0x36ef9f
        } = await sendRequest({
          "method": "POST",
          "url": _0xab8b3b,
          "headers": {
            "Host": "api.e.kuaishou.cn",
            "User-Agent": "kwai-android aegon/3.56.0",
            "Content-Type": "application/x-www-form-urlencoded"
          },
          "body": _0x3a6e92,
          "timeout": 12000
        }, this.proxyUrl, this.getAccountMark() + " 提交任务");
      if (!_0x36ef9f) return {
        "success": false,
        "reward": 0
      };
      if (_0x36ef9f.result === 500) return console.log("⚠️ " + this.getAccountMark() + " " + _0x5841bf.name + " 服务器错误 (500)，跳过当前任务"), {
        "success": false,
        "reward": 0,
        "serverError500": true
      };
      if (_0x36ef9f.result === 1) {
        {
          const _0x399251 = _0x36ef9f.data?.["neoAmount"] || 0,
            _0x4c4b50 = _0x5841bf.name;
          this.roundTotalCoins += _0x399251;
          console.log("💰 " + this.getAccountMark() + " " + _0x4c4b50 + " 获得 " + _0x399251 + " 金币 (本轮累计: " + this.roundTotalCoins + " 金币)");
          if (_0x399251 <= this.taskLowRewardThreshold[_0x4b039f]) {
            {
              this.taskLowRewardStreak[_0x4b039f]++;
              if (enableDidChange) {
                this.did = generateKuaishouDid();
                console.log("⚠️ " + this.getAccountMark() + " " + _0x4c4b50 + " 奖励过低，已更换DID，连续低奖励：" + this.taskLowRewardStreak[_0x4b039f] + "/" + this.taskLowRewardLimit[_0x4b039f]);
              } else {
                console.log("⚠️ " + this.getAccountMark() + " " + _0x4c4b50 + " 奖励过低，连续低奖励：" + this.taskLowRewardStreak[_0x4b039f] + "/" + this.taskLowRewardLimit[_0x4b039f]);
              }
              if (this.taskLowRewardStreak[_0x4b039f] >= this.taskLowRewardLimit[_0x4b039f]) return console.log("🏁 " + this.getAccountMark() + " " + _0x4c4b50 + " 连续低奖励超限，停止当前任务，继续执行其他任务"), this.taskStopped[_0x4b039f] = true, {
                "success": true,
                "reward": _0x399251,
                "taskStopped": true,
                "taskKey": _0x4b039f
              };
            }
          } else this.taskLowRewardStreak[_0x4b039f] = 0;
          _0x5841bf.businessId === 7077 && this.searchSessionCount++;
          return {
            "success": true,
            "reward": _0x399251
          };
        }
      }
      if ([20107, 20108, 1003, 415].includes(_0x36ef9f.result)) return console.log("⚠️ " + this.getAccountMark() + " " + _0x5841bf.name + " 已达上限"), this.taskLimitReached[_0x4b039f] = true, {
        "success": false,
        "reward": 0,
        "limitReached": true
      };
      console.log("❌ " + this.getAccountMark() + " " + _0x5841bf.name + " 失败 result=" + _0x36ef9f.result);
      return {
        "success": false,
        "reward": 0
      };
    } catch (_0x118f28) {
      console.log("❌ " + this.getAccountMark() + " 提交任务异常: " + _0x118f28.message);
      return {
        "success": false,
        "reward": 0
      };
    }
  }
  async ["executeFollowUpTasks"](_0x2dc60b, _0xb2ab53 = "") {
    const _0x1d240f = this.taskConfigs[_0x2dc60b];
    if (!_0x1d240f || !_0x1d240f.followUpTask) return;
    const _0x4728f2 = _0x1d240f.followUpTask,
      _0x1789a3 = _0x1d240f.followUpMaxCount || 100;
    if (!this.tasksToExecute.includes(_0x2dc60b)) {
      {
        console.log("⚠️ " + this.getAccountMark() + " 追加任务 " + this.taskConfigs[_0x4728f2]?.["name"] + " 不在执行列表中，跳过追加");
        return;
      }
    }
    if (this.taskLimitReached[_0x4728f2] || this.taskStopped[_0x4728f2]) {
      console.log("⚠️ " + this.getAccountMark() + " 追加任务 " + this.taskConfigs[_0x4728f2]?.["name"] + " 已停止，跳过追加");
      return;
    }
    console.log("🎯 " + this.getAccountMark() + " 主任务成功，开始追加任务（最多" + _0x1789a3 + "次）");
    await new Promise(_0x28c87f => setTimeout(_0x28c87f, Math.floor(Math.random() * 5000) + 5000));
    let _0x1277a4 = 0;
    for (let _0x3d01e1 = 0; _0x3d01e1 < _0x1789a3; _0x3d01e1++) {
      if (this.taskLimitReached[_0x4728f2] || this.taskStopped[_0x4728f2]) break;
      if (_0x3d01e1 > 0 && _0x3d01e1 % FOLLOW_REST_EVERY === 0) {
        {
          const _0x54dde2 = Math.floor(Math.random() * (FOLLOW_REST_MAX - FOLLOW_REST_MIN) * 1000) + FOLLOW_REST_MIN * 1000;
          console.log("⏸️ " + this.getAccountMark() + " 已执行" + _0x3d01e1 + "次追加，休息" + Math.round(_0x54dde2 / 1000) + "秒");
          await new Promise(_0x173c84 => setTimeout(_0x173c84, _0x54dde2));
        }
      }
      console.log("  追加 " + (_0x3d01e1 + 1) + "/" + _0x1789a3);
      try {
        {
          const _0x4af3a1 = await this.executeSingleFollowUpTask(_0x4728f2, _0xb2ab53);
          if (_0x4af3a1 && _0x4af3a1.success) _0x1277a4++;else {
            if (_0x4af3a1 && _0x4af3a1.serverError500) {
              {
                console.log("🚫 " + this.getAccountMark() + " 追加任务遇到服务器错误500，停止追加");
                break;
              }
            }
            break;
          }
        }
      } catch (_0x381ad1) {
        {
          console.log("❌ " + this.getAccountMark() + " 追加任务失败: " + _0x381ad1.message);
          break;
        }
      }
      _0x3d01e1 < _0x1789a3 - 1 && !this.taskLimitReached[_0x4728f2] && !this.taskStopped[_0x4728f2] && (await new Promise(_0x3015d1 => setTimeout(_0x3015d1, Math.floor(Math.random() * 3000) + 2000)));
    }
    console.log("✅ " + this.getAccountMark() + " 追加任务执行完成，共执行" + _0x1277a4 + "次");
  }
  async ["executeSingleFollowUpTask"](_0x1f6818, _0x56af7b = "") {
    const _0x5b3a8c = this.taskConfigs[_0x1f6818];
    if (!_0x5b3a8c) {
      console.log("❌ " + this.getAccountMark() + " 未知任务: " + _0x1f6818);
      return {
        "success": false
      };
    }
    if (this.taskLimitReached[_0x1f6818] || this.taskStopped[_0x1f6818]) {
      return {
        "success": false,
        "limitReached": true
      };
    }
    try {
      const _0x2ff847 = await this.retryOperation(() => this.getAdInfo(_0x5b3a8c, _0x56af7b), "获取" + _0x5b3a8c.name + "信息", 3);
      if (!_0x2ff847) return this.taskStats[_0x1f6818].failed++, {
        "success": false
      };
      let _0x1ca2f0 = 0;
      WATCH_TIME_MIN === 0 && WATCH_TIME_MAX === 0 ? _0x1ca2f0 = 0 : _0x1ca2f0 = Math.floor(Math.random() * (WATCH_TIME_MAX - WATCH_TIME_MIN) * 1000) + WATCH_TIME_MIN * 1000;
      console.log("🔍 " + this.getAccountMark() + " ==>" + _0x5b3a8c.name + " " + generateRandomInteractionMessage() + " " + Math.round(_0x1ca2f0 / 1000) + " 秒");
      let _0x4008da = null;
      if (this.enableAdDownload && _0x2ff847.expectedCoin > this.highCoinThreshold) {
        const _0x51b838 = this.getAccountMark();
        _0x4008da = processAdAppDownload(_0x2ff847.adData, _0x51b838).catch(() => false);
      }
      _0x1ca2f0 > 0 && (await new Promise(_0xc486eb => setTimeout(_0xc486eb, _0x1ca2f0)));
      _0x4008da && (await _0x4008da);
      const _0x11ff59 = await this.retryOperation(() => this.generateSignature(_0x2ff847.cid, _0x2ff847.llsid, _0x1f6818, _0x5b3a8c), "生成" + _0x5b3a8c.name + "签名", 3);
      if (!_0x11ff59) {
        this.taskStats[_0x1f6818].failed++;
        return {
          "success": false
        };
      }
      const _0x58f447 = await this.retryOperation(() => this.submitReport(_0x11ff59.sig, _0x11ff59.sig3, _0x11ff59.sigtoken, _0x11ff59.xfalcon, _0x11ff59.postData, _0x1f6818, _0x5b3a8c), "提交" + _0x5b3a8c.name + "报告", 3);
      if (_0x58f447 && _0x58f447.success) {
        {
          this.taskStats[_0x1f6818].success++;
          this.taskStats[_0x1f6818].totalReward += _0x58f447.reward || 0;
          if (_0x58f447.taskStopped) {
            this.taskStopped[_0x1f6818] = true;
          }
          return {
            "success": true,
            "reward": _0x58f447.reward
          };
        }
      }
      if (_0x58f447 && _0x58f447.limitReached) {
        this.taskLimitReached[_0x1f6818] = true;
        return {
          "success": false,
          "limitReached": true
        };
      }
      if (_0x58f447 && _0x58f447.serverError500) return {
        "success": false,
        "serverError500": true
      };
      this.taskStats[_0x1f6818].failed++;
      return {
        "success": false
      };
    } catch (_0x2ed17a) {
      console.log("❌ " + this.getAccountMark() + " 任务异常(" + _0x1f6818 + "): " + _0x2ed17a.message);
      if (this.taskStats[_0x1f6818]) this.taskStats[_0x1f6818].failed++;
      return {
        "success": false
      };
    }
  }
  async ["executeTask"](_0x4b682e, _0x1c57a5 = "") {
    const _0x4534d5 = this.taskConfigs[_0x4b682e];
    if (!_0x4534d5) return console.log("❌ " + this.getAccountMark() + " 未知任务: " + _0x4b682e), {
      "success": false
    };
    if (this.taskLimitReached[_0x4b682e]) return console.log("⚠️ " + this.getAccountMark() + " " + _0x4534d5.name + " 已达上限，跳过"), {
      "success": false,
      "limitReached": true
    };
    if (this.taskStopped[_0x4b682e]) return console.log("⚠️ " + this.getAccountMark() + " " + _0x4534d5.name + " 因连续低奖励被停止，跳过"), {
      "success": false,
      "taskStopped": true
    };
    try {
      {
        const _0x3cea2e = await this.retryOperation(() => this.getAdInfo(_0x4534d5, _0x1c57a5), "获取" + _0x4534d5.name + "信息", 3);
        if (!_0x3cea2e) {
          this.taskStats[_0x4b682e].failed++;
          return {
            "success": false
          };
        }
        let _0x57f853 = 0;
        if (WATCH_TIME_MIN === 0 && WATCH_TIME_MAX === 0) {
          _0x57f853 = 0;
        } else _0x57f853 = Math.floor(Math.random() * (WATCH_TIME_MAX - WATCH_TIME_MIN) * 1000) + WATCH_TIME_MIN * 1000;
        console.log("🔍 " + this.getAccountMark() + " ==>" + _0x4534d5.name + " " + generateRandomInteractionMessage() + " " + Math.round(_0x57f853 / 1000) + " 秒");
        let _0x29caaa = null;
        if (this.enableAdDownload && _0x3cea2e.expectedCoin > this.highCoinThreshold) {
          {
            const _0x52ad27 = this.getAccountMark();
            _0x29caaa = processAdAppDownload(_0x3cea2e.adData, _0x52ad27).catch(() => false);
          }
        }
        _0x57f853 > 0 && (await new Promise(_0x47793e => setTimeout(_0x47793e, _0x57f853)));
        _0x29caaa && (await _0x29caaa);
        const _0x4537f1 = await this.retryOperation(() => this.generateSignature(_0x3cea2e.cid, _0x3cea2e.llsid, _0x4b682e, _0x4534d5), "生成" + _0x4534d5.name + "签名", 3);
        if (!_0x4537f1) return this.taskStats[_0x4b682e].failed++, {
          "success": false
        };
        const _0x2319c6 = await this.retryOperation(() => this.submitReport(_0x4537f1.sig, _0x4537f1.sig3, _0x4537f1.sigtoken, _0x4537f1.xfalcon, _0x4537f1.postData, _0x4b682e, _0x4534d5), "提交" + _0x4534d5.name + "报告", 3);
        if (_0x2319c6 && _0x2319c6.success) {
          {
            this.taskStats[_0x4b682e].success++;
            this.taskStats[_0x4b682e].totalReward += _0x2319c6.reward || 0;
            if (_0x2319c6.taskStopped) {
              this.taskStopped[_0x4b682e] = true;
            }
            if (_0x4534d5.followUpTask && !this.taskLimitReached[_0x4534d5.followUpTask] && !this.taskStopped[_0x4534d5.followUpTask] && !_0x2319c6.serverError500) {
              await this.executeFollowUpTasks(_0x4b682e, _0x1c57a5);
            }
            return {
              "success": true,
              "reward": _0x2319c6.reward
            };
          }
        }
        if (_0x2319c6 && _0x2319c6.limitReached) {
          this.taskLimitReached[_0x4b682e] = true;
          return {
            "success": false,
            "limitReached": true
          };
        }
        if (_0x2319c6 && _0x2319c6.serverError500) {
          return {
            "success": false,
            "serverError500": true
          };
        }
        this.taskStats[_0x4b682e].failed++;
        return {
          "success": false
        };
      }
    } catch (_0x31febf) {
      {
        console.log("❌ " + this.getAccountMark() + " 任务异常(" + _0x4b682e + "): " + _0x31febf.message);
        if (this.taskStats[_0x4b682e]) this.taskStats[_0x4b682e].failed++;
        return {
          "success": false
        };
      }
    }
  }
  async ["executeIndependentTasks"]() {
    const _0x2faaf3 = {},
      _0x33b011 = ["box", "look", "search", "food"];
    for (const _0x15b37e of _0x33b011) {
      if (!this.tasksToExecute.includes(_0x15b37e)) continue;
      if (this.taskStopped[_0x15b37e]) {
        console.log("⏭️ " + this.getAccountMark() + " " + this.taskConfigs[_0x15b37e].name + "任务因连续低奖励已被停止，跳过该任务类型，继续执行后续任务");
        continue;
      }
      const _0x58a8d3 = taskCountMap[_0x15b37e] || 0;
      if (_0x58a8d3 <= 0) continue;
      console.log("\n🚀 " + this.getAccountMark() + " 开始执行" + this.taskConfigs[_0x15b37e].name + "任务，计划执行" + _0x58a8d3 + "次");
      let _0x27eac6 = 0;
      for (let _0x4293e6 = 0; _0x4293e6 < _0x58a8d3; _0x4293e6++) {
        if (this.taskLimitReached[_0x15b37e]) {
          {
            console.log("⚠️ " + this.getAccountMark() + " " + this.taskConfigs[_0x15b37e].name + "任务已达上限，已执行" + _0x27eac6 + "次，继续执行后续任务");
            break;
          }
        }
        if (this.taskStopped[_0x15b37e]) {
          {
            console.log("⏭️ " + this.getAccountMark() + " " + this.taskConfigs[_0x15b37e].name + "任务在执行过程中因连续低奖励被停止，已执行" + _0x27eac6 + "次，立即跳过该任务类型");
            break;
          }
        }
        console.log("\n--- " + this.getAccountMark() + " " + this.taskConfigs[_0x15b37e].name + "第" + (_0x4293e6 + 1) + "/" + _0x58a8d3 + "次 ---");
        let _0x35690a;
        if (_0x15b37e === "search") {
          {
            const _0x1de255 = getSearchKeyword(this);
            _0x35690a = await this.executeTask(_0x15b37e, _0x1de255);
          }
        } else _0x35690a = await this.executeTask(_0x15b37e);
        _0x27eac6++;
        if (_0x35690a && _0x35690a.serverError500) {
          {
            console.log("🚫 " + this.getAccountMark() + " 遇到服务器错误500，跳过当前任务的剩余执行");
            break;
          }
        }
        if (_0x4293e6 < _0x58a8d3 - 1 && !this.taskLimitReached[_0x15b37e] && !this.taskStopped[_0x15b37e] && !(_0x35690a && _0x35690a.serverError500)) {
          const _0x5168ac = Math.floor(Math.random() * 8000) + 7000;
          console.log("⏱ " + this.getAccountMark() + " 等待 " + Math.round(_0x5168ac / 1000) + " 秒执行下一次");
          await new Promise(_0x4e3b33 => setTimeout(_0x4e3b33, _0x5168ac));
        }
      }
      console.log("✅ " + this.getAccountMark() + " " + this.taskConfigs[_0x15b37e].name + "任务完成，实际执行" + _0x27eac6 + "次");
      if (_0x15b37e !== _0x33b011[_0x33b011.length - 1] && !this.taskStopped[_0x15b37e]) {
        {
          const _0x95ce5b = Math.floor(Math.random() * 10000) + 10000;
          console.log("⏱ " + this.getAccountMark() + " 等待 " + Math.round(_0x95ce5b / 1000) + " 秒开始下一个任务类型");
          await new Promise(_0x1b348b => setTimeout(_0x1b348b, _0x95ce5b));
        }
      }
    }
    return _0x2faaf3;
  }
}
function parseAccountConfig(_0x330dab) {
  const _0x8d61d7 = String(_0x330dab || "").trim().split("#");
  if (_0x8d61d7.length < 2) return null;
  let _0x1dd70e = "",
    _0x59e125 = "",
    _0x25decb = "",
    _0x3395cd = null;
  if (_0x8d61d7.length === 2) {
    _0x59e125 = _0x8d61d7[0];
    _0x25decb = _0x8d61d7[1];
    _0x1dd70e = "";
  } else {
    if (_0x8d61d7.length === 3) /^socks5:\/\//i.test(_0x8d61d7[2]) ? (_0x59e125 = _0x8d61d7[0], _0x25decb = _0x8d61d7[1], _0x3395cd = _0x8d61d7[2], _0x1dd70e = "") : (_0x1dd70e = _0x8d61d7[0], _0x59e125 = _0x8d61d7[1], _0x25decb = _0x8d61d7[2]);else _0x8d61d7.length >= 4 && (_0x1dd70e = _0x8d61d7[0], _0x59e125 = _0x8d61d7[1], _0x25decb = _0x8d61d7.slice(2, _0x8d61d7.length - 1).join("#"), _0x3395cd = _0x8d61d7[_0x8d61d7.length - 1]);
  }
  _0x59e125 = _0x59e125.replace("kpn=NEBULA", "kpn=KUAISHOU");
  if (_0x3395cd) {
    if (_0x3395cd.includes("|")) {
      {
        const _0x3c03b0 = _0x3395cd.split("|");
        if (_0x3c03b0.length >= 2) {
          {
            const [_0x2f7f73, _0x16faf2, _0x246cd2, _0x2d049e] = _0x3c03b0;
            _0x3395cd = "socks5://" + _0x246cd2 + ":" + _0x2d049e + "@" + _0x2f7f73 + ":" + _0x16faf2;
          }
        } else {
          _0x3395cd = null;
          console.log("⚠️ 代理字段格式错误，忽略：" + _0x3395cd);
        }
      }
    } else !/^socks5:\/\//i.test(_0x3395cd) && (console.log("⚠️ 代理字段不是 socks5:// URL，忽略：" + _0x3395cd), _0x3395cd = null);
  }
  return {
    "remark": _0x1dd70e || "",
    "salt": _0x25decb,
    "cookie": _0x59e125,
    "proxyUrl": _0x3395cd
  };
}
function loadAccountsFromEnv() {
  const _0x1d3038 = getAccountConfigsFromEnv(),
    _0x32a3f4 = [];
  for (const _0x368d6c of _0x1d3038) {
    {
      const _0x2c9a8b = parseAccountConfig(_0x368d6c);
      _0x2c9a8b ? _0x32a3f4.push(_0x2c9a8b) : console.log("账号格式错误：" + _0x368d6c);
    }
  }
  _0x32a3f4.forEach((_0x5448a0, _0x2c5ad6) => {
    _0x5448a0.index = _0x2c5ad6 + 1;
  });
  return _0x32a3f4;
}
async function concurrentExecute(_0x115545, _0x1e1df7, _0x5ef288) {
  const _0x5c4b1 = new Array(_0x115545.length);
  let _0xde54fe = 0;
  async function _0x8228dc() {
    while (true) {
      const _0x2b96b2 = _0xde54fe++;
      if (_0x2b96b2 >= _0x115545.length) return;
      const _0x292832 = _0x115545[_0x2b96b2];
      try {
        _0x5c4b1[_0x2b96b2] = await _0x5ef288(_0x292832, _0x2b96b2);
      } catch (_0x4680c9) {
        console.log("并发执行异常（index=" + (_0x2b96b2 + 1) + "）：" + _0x4680c9.message);
        _0x5c4b1[_0x2b96b2] = null;
      }
    }
  }
  const _0x12d53d = Array.from({
    "length": Math.min(_0x1e1df7, _0x115545.length)
  }, _0x8228dc);
  await Promise.all(_0x12d53d);
  return _0x5c4b1;
}
async function processAccount(_0xf7ffec, _0x33d392) {
  const _0x134c9e = getProxyTag(_0xf7ffec.proxyUrl);
  if (_0xf7ffec.proxyUrl) {
    {
      console.log("账号[" + _0xf7ffec.index + "]" + (_0xf7ffec.remark ? "（" + _0xf7ffec.remark + "）" : "") + " " + _0x134c9e + " 🔌 测试代理连接中...");
      const _0x301811 = await testProxyConnectivity(_0xf7ffec.proxyUrl, "账号[" + _0xf7ffec.index + "]" + (_0xf7ffec.remark ? "（" + _0xf7ffec.remark + "）" : ""));
      console.log("  - " + (_0x301811.ok ? "✅ 代理验证通过，IP: " + _0x301811.ip : "❌ 代理验证失败") + ": " + _0x301811.msg);
    }
  } else {
    console.log("账号[" + _0xf7ffec.index + "]" + (_0xf7ffec.remark ? "（" + _0xf7ffec.remark + "）" : "") + " " + _0x134c9e + " 未配置代理，走直连");
  }
  console.log("账号[" + _0xf7ffec.index + "]" + (_0xf7ffec.remark ? "（" + _0xf7ffec.remark + "）" : "") + " " + _0x134c9e + " 🔍 获取账号信息中...");
  let _0x3bccb0 = await getAccountBasicInfo(_0xf7ffec.cookie, _0xf7ffec.proxyUrl, _0xf7ffec.index),
    _0x5105a4 = _0x3bccb0?.["nickname"] || "账号" + _0xf7ffec.index;
  if (_0x3bccb0) {
    const _0xf69bbe = _0x3bccb0.totalCoin != null ? _0x3bccb0.totalCoin : "未知",
      _0x10ef53 = _0x3bccb0.allCash != null ? _0x3bccb0.allCash : "未知";
    console.log("账号[" + _0x5105a4 + "]" + (_0xf7ffec.remark ? "（" + _0xf7ffec.remark + "）" : "") + " " + _0x134c9e + " ✅ 登录成功，💰 当前金币: " + _0xf69bbe + "，💸 当前余额: " + _0x10ef53);
  } else console.log("账号[" + _0x5105a4 + "]" + (_0xf7ffec.remark ? "（" + _0xf7ffec.remark + "）" : "") + " " + _0x134c9e + " ❌ 基本信息获取失败，继续执行");
  const _0x3b9bbb = new KuaishouAdTask({
    ..._0xf7ffec,
    "nickname": _0x5105a4,
    "tasksToExecute": _0x33d392
  });
  await _0x3b9bbb.checkCoinLimit();
  if (_0x3b9bbb.coinExceeded) {
    console.log("账号[" + _0x3b9bbb.nickname + "]" + (_0xf7ffec.remark ? "（" + _0xf7ffec.remark + "）" : "") + " " + _0x134c9e + " 初始金币已超过阈值，不执行任务");
    const _0x416575 = await getAccountBasicInfo(_0xf7ffec.cookie, _0xf7ffec.proxyUrl, _0xf7ffec.index),
      _0x3a1ff3 = _0x3bccb0?.["totalCoin"] || 0,
      _0x4be8a8 = _0x416575?.["totalCoin"] || 0,
      _0x1e1b3f = _0x4be8a8 - _0x3a1ff3,
      _0x4abad7 = _0x3bccb0?.["allCash"] || 0,
      _0x2f5ddd = _0x416575?.["allCash"] || 0,
      _0x107621 = _0x2f5ddd - _0x4abad7;
    return {
      "index": _0xf7ffec.index,
      "remark": _0xf7ffec.remark || "无备注",
      "nickname": _0x5105a4,
      "initialCoin": _0x3a1ff3,
      "finalCoin": _0x4be8a8,
      "coinChange": _0x1e1b3f,
      "initialCash": _0x4abad7,
      "finalCash": _0x2f5ddd,
      "cashChange": _0x107621,
      "stats": _0x3b9bbb.getTaskStats(),
      "coinLimitExceeded": true,
      "roundTotalCoins": _0x3b9bbb.roundTotalCoins
    };
  }
  console.log("账号[" + _0x3b9bbb.nickname + "]" + (_0xf7ffec.remark ? "（" + _0xf7ffec.remark + "）" : "") + " " + _0x134c9e + " 🚀 开始独立次数执行模式");
  const _0x4c92b1 = await _0x3b9bbb.executeIndependentTasks(),
    _0x586194 = await getAccountBasicInfo(_0xf7ffec.cookie, _0xf7ffec.proxyUrl, _0xf7ffec.index),
    _0x4052e8 = _0x3bccb0?.["totalCoin"] || 0,
    _0x418575 = _0x586194?.["totalCoin"] || 0,
    _0x3c0535 = _0x418575 - _0x4052e8,
    _0xfbecea = _0x3bccb0?.["allCash"] || 0,
    _0x285761 = _0x586194?.["allCash"] || 0,
    _0x7a0d0 = _0x285761 - _0xfbecea;
  _0x3b9bbb.printTaskStats();
  return {
    "index": _0xf7ffec.index,
    "remark": _0xf7ffec.remark || "无备注",
    "nickname": _0x5105a4,
    "initialCoin": _0x4052e8,
    "finalCoin": _0x418575,
    "coinChange": _0x3c0535,
    "initialCash": _0xfbecea,
    "finalCash": _0x285761,
    "cashChange": _0x7a0d0,
    "stats": _0x3b9bbb.getTaskStats(),
    "coinLimitExceeded": _0x3b9bbb.coinExceeded,
    "roundTotalCoins": _0x3b9bbb.roundTotalCoins
  };
}
function printAccountsSummary(_0x1107e8) {
  if (!_0x1107e8.length) {
    console.log("\n没有可显示的账号信息。");
    return;
  }
  const _0x1b6b2b = _0x1107e8.reduce((_0x3b0855, _0x183a4e) => _0x3b0855 + (parseInt(_0x183a4e.initialCoin) || 0), 0),
    _0x4d576f = _0x1107e8.reduce((_0x5ed230, _0x5d5795) => _0x5ed230 + (parseInt(_0x5d5795.finalCoin) || 0), 0),
    _0x9b0192 = _0x4d576f - _0x1b6b2b,
    _0x197bc6 = _0x1107e8.reduce((_0x1435ad, _0x31d89c) => _0x1435ad + (parseFloat(_0x31d89c.initialCash) || 0), 0),
    _0x187e41 = _0x1107e8.reduce((_0x50bcbc, _0x37154b) => _0x50bcbc + (parseFloat(_0x37154b.finalCash) || 0), 0),
    _0x282d0c = _0x187e41 - _0x197bc6;
  let _0xd18d5d = 0,
    _0x1eb3aa = 0,
    _0x4ce035 = 0,
    _0x31adf6 = 0,
    _0x2ae611 = 0,
    _0x551627 = 0;
  _0x1107e8.forEach(_0x1dd30a => {
    _0x1dd30a.stats && Object.entries(_0x1dd30a.stats).forEach(([_0x3c8182, _0x2cd492]) => {
      _0xd18d5d += _0x2cd492.success + _0x2cd492.failed;
      _0x1eb3aa += _0x2cd492.success;
      _0x4ce035 += _0x2cd492.totalReward;
      (_0x3c8182 === "looks" || _0x3c8182 === "search_follow") && (_0x31adf6 += _0x2cd492.success + _0x2cd492.failed, _0x2ae611 += _0x2cd492.success);
    });
    _0x1dd30a.roundTotalCoins && (_0x551627 += _0x1dd30a.roundTotalCoins);
  });
  const _0x5b3497 = _0xd18d5d > 0 ? (_0x1eb3aa / _0xd18d5d * 100).toFixed(1) : "0.0",
    _0x40d1d7 = _0x31adf6 > 0 ? (_0x2ae611 / _0x31adf6 * 100).toFixed(1) : "0.0",
    _0x593d1d = _0x1107e8.filter(_0xa5d1a3 => _0xa5d1a3.coinLimitExceeded).length;
  console.log("\n\n" + "=".repeat(90));
  console.log("|" + centerAlign("      快手养号任务执行结果汇总表      ", 88) + "|");
  console.log("=".repeat(90));
  console.log("|" + ("总账号数: " + _0x1107e8.length).padEnd(22) + ("超过金币阈值账号: " + _0x593d1d).padEnd(22) + ("总任务数: " + _0xd18d5d).padEnd(22) + ("任务成功率: " + _0x5b3497 + "%").padEnd(20) + "|");
  console.log("|" + ("总金币变化: " + _0x9b0192).padEnd(22) + ("总金币奖励: " + _0x4ce035).padEnd(22) + ("本轮累计金币: " + _0x551627).padEnd(22) + ("总余额变化: " + _0x282d0c.toFixed(2)).padEnd(20) + "|");
  console.log("|" + ("总追加任务数: " + _0x31adf6).padEnd(26) + ("追加成功率: " + _0x40d1d7 + "%").padEnd(26) + ("追加成功次数: " + _0x2ae611).padEnd(34) + "|");
  console.log("-".repeat(90));
  const _0x5735fe = ["序号", "备注", "账号昵称", "初始金币", "最终金币", "金币变化", "本轮累计", "初始余额", "最终余额", "余额变化"],
    _0x3ca4f2 = [6, 16, 16, 12, 12, 12, 12, 12, 12, 12];
  let _0x542acc = "|";
  _0x5735fe.forEach((_0x54a9b5, _0x145580) => {
    _0x542acc += centerAlign(_0x54a9b5, _0x3ca4f2[_0x145580]) + "|";
  });
  console.log(_0x542acc);
  let _0x3cd4f9 = "|";
  _0x3ca4f2.forEach(_0x44b5e7 => {
    _0x3cd4f9 += "-".repeat(_0x44b5e7) + "|";
  });
  console.log(_0x3cd4f9);
  _0x1107e8.forEach(_0x3cb1ea => {
    {
      let _0x592ac3 = "|";
      _0x592ac3 += centerAlign(_0x3cb1ea.index, _0x3ca4f2[0]) + "|";
      _0x592ac3 += centerAlign(_0x3cb1ea.remark, _0x3ca4f2[1]) + "|";
      const _0x46d321 = (_0x3cb1ea.nickname || "-") + (_0x3cb1ea.coinLimitExceeded ? " ⚠️" : "");
      _0x592ac3 += centerAlign(_0x46d321.substring(0, _0x3ca4f2[2] - 2), _0x3ca4f2[2]) + "|";
      _0x592ac3 += centerAlign(_0x3cb1ea.initialCoin, _0x3ca4f2[3]) + "|";
      _0x592ac3 += centerAlign(_0x3cb1ea.finalCoin, _0x3ca4f2[4]) + "|";
      const _0x2769fa = _0x3cb1ea.coinChange >= 0 ? "+" + _0x3cb1ea.coinChange : _0x3cb1ea.coinChange;
      _0x592ac3 += centerAlign(_0x2769fa, _0x3ca4f2[5]) + "|";
      const _0x1bd7fb = _0x3cb1ea.roundTotalCoins || 0;
      _0x592ac3 += centerAlign(_0x1bd7fb, _0x3ca4f2[6]) + "|";
      _0x592ac3 += centerAlign(_0x3cb1ea.initialCash, _0x3ca4f2[7]) + "|";
      _0x592ac3 += centerAlign(_0x3cb1ea.finalCash, _0x3ca4f2[8]) + "|";
      const _0x53e49c = _0x3cb1ea.cashChange >= 0 ? "+" + _0x3cb1ea.cashChange.toFixed(2) : _0x3cb1ea.cashChange.toFixed(2);
      _0x592ac3 += centerAlign(_0x53e49c, _0x3ca4f2[9]) + "|";
      console.log(_0x592ac3);
    }
  });
  console.log("=".repeat(90));
  console.log("|" + centerAlign("      任务执行完成，请查看详细结果      ", 88) + "|");
  console.log("=".repeat(90));
}
let running = true;
process.on("SIGINT", () => {
  console.log("\n⚠️ 收到中断信号，正在退出...");
  running = false;
});
async function runOneRound(_0x1674a5) {
  const _0x1b0834 = getTasksToExecute(),
    _0x19d292 = loadAccountsFromEnv(),
    _0x15db4c = _0x19d292.length;
  console.log("\n\n==================== 第 " + _0x1674a5 + " 轮开始 ====================");
  _0x1674a5 === 1 ? (console.log("================================================================================"), console.log("                                  ⭐ 快手至尊金币至尊普通版 ⭐                                "), console.log("                            🏆 安全稳定 · 高效收益 · 尊贵体验 🏆                        "), console.log("================================================================================"), console.log("🎉 系统初始化完成，快手至尊金币普通版启动成功！🎉"), console.log("🍃 任务类型: look➠看广告  box➠宝箱广告  food➠饭补  search➠搜索"), console.log("-----------------------------------"), console.log("📱 账号数量: " + _0x15db4c + "个"), console.log("🎯 执行任务: " + _0x1b0834.map(_0x496b54 => taskNameMap[_0x496b54] || _0x496b54).join(", ")), console.log("⚙️ 执行模式: 独立次数执行"), _0x1b0834.forEach(_0x1243cb => {
    console.log("   " + _0x1243cb + ": " + (taskCountMap[_0x1243cb] || 0) + "次");
  }), console.log("💰 金币上限: " + KSCOIN_LIMIT), console.log("⚠️ 低金币阈值: " + KSLOW_REWARD_THRESHOLD + "金币, 累计" + KSLOW_REWARD_LIMIT + "次自动切换"), console.log("❌ 广告信息失败限制: " + AD_INFO_FAIL_LIMIT + "次"), console.log("🔍 搜索广告: 开启"), console.log("🔤 搜索关键词: " + SEARCH_KEYWORDS + " (模式: " + SEARCH_KEYWORD_MODE + ")"), console.log("📺 广告追加: 开启, 最大追加次数=" + FOLLOW_MAX_COUNT), console.log("⏱ 追加休息: 每" + FOLLOW_REST_EVERY + "次休息" + FOLLOW_REST_MIN + "-" + FOLLOW_REST_MAX + "秒"), console.log("⏱ 观看时间: " + WATCH_TIME_MIN + "-" + WATCH_TIME_MAX + "秒 (支持0秒设置)"), console.log("📲 广告下载: " + (AD_DOWNLOAD_SWITCH === 1 ? "✅已开启" : "❌已关闭")), console.log("📲 广告安装: " + (AD_INSTALL_SWITCH === 1 ? "✅已开启（模拟安装" : "❌已关闭") + (AD_INSTALL_SWITCH === 1 ? " (运行时长: " + AD_INSTALL_TIMEOUT + "秒, 成功率: " + SIMULATE_SUCCESS_RATE + "%)" : "")), console.log("💾 APK保留: " + (AD_KEEP_APK === 1 ? "✅保留" : "❌删除")), console.log("🔢 多账号执行模式: 并发执行 (并发数: " + maxConcurrency + ")"), console.log("-----------------------------------"), console.log("🔧 DID更换功能：" + (enableDidChange ? "✅ 已启用 (ENABLE_DID_CHANGE=1)" : "❌ 已禁用 (设置 ENABLE_DID_CHANGE=1 启用)")), console.log("🔄 多轮运行模式: 第 " + _0x1674a5 + " 轮, 总轮次: " + (ROUND_COUNT <= 0 ? "无限" : ROUND_COUNT) + ", 轮间间隔: " + ROUND_INTERVAL + "秒"), console.log("-----------------------------------"), console.log("📊 共找到 " + _0x19d292.length + " 个有效账号"), console.log("🔢 执行模式: 并发执行 (并发数: " + maxConcurrency + ")")) : console.log("📊 第 " + _0x1674a5 + " 轮开始，账号数量: " + _0x15db4c + "个，执行任务: " + _0x1b0834.map(_0x50c107 => taskNameMap[_0x50c107] || _0x50c107).join(", "));
  if (!_0x19d292.length) return console.log("❌ 未找到任何有效账号配置，本轮跳过"), false;
  if (_0x19d292.length > MAX_CONCURRENCY_LIMIT) return console.log("错误: 检测到 " + _0x19d292.length + " 个账号配置，最多只允许" + MAX_CONCURRENCY_LIMIT + "个"), false;
  const _0x4545dc = [];
  await concurrentExecute(_0x19d292, maxConcurrency, async _0x5d73d1 => {
    const _0x418667 = getProxyTag(_0x5d73d1.proxyUrl);
    console.log("\n—— 🚀 开始 " + _0x418667 + " 账号[" + _0x5d73d1.index + "]" + (_0x5d73d1.remark ? "（" + _0x5d73d1.remark + "）" : "") + " ——");
    try {
      const _0x550c9b = await processAccount(_0x5d73d1, _0x1b0834);
      _0x4545dc.push({
        "index": _0x5d73d1.index,
        "remark": _0x5d73d1.remark || "无备注",
        "nickname": _0x550c9b?.["nickname"] || "账号" + _0x5d73d1.index,
        "initialCoin": _0x550c9b?.["initialCoin"] || 0,
        "finalCoin": _0x550c9b?.["finalCoin"] || 0,
        "coinChange": _0x550c9b?.["coinChange"] || 0,
        "initialCash": _0x550c9b?.["initialCash"] || 0,
        "finalCash": _0x550c9b?.["finalCash"] || 0,
        "cashChange": _0x550c9b?.["cashChange"] || 0,
        "stats": _0x550c9b?.["stats"] || {},
        "coinLimitExceeded": _0x550c9b?.["coinLimitExceeded"] || false,
        "roundTotalCoins": _0x550c9b?.["roundTotalCoins"] || 0
      });
    } catch (_0x2572a3) {
      console.log("账号[" + _0x5d73d1.index + "]" + (_0x5d73d1.remark ? "（" + _0x5d73d1.remark + "）" : "") + " " + _0x418667 + " ❌ 执行异常：" + _0x2572a3.message);
      _0x4545dc.push({
        "index": _0x5d73d1.index,
        "remark": _0x5d73d1.remark || "无备注",
        "nickname": "账号" + _0x5d73d1.index,
        "initialCoin": 0,
        "finalCoin": 0,
        "coinChange": 0,
        "initialCash": 0,
        "finalCash": 0,
        "cashChange": 0,
        "roundTotalCoins": 0,
        "error": _0x2572a3.message
      });
    }
  });
  _0x4545dc.sort((_0x36db77, _0x1ac2ee) => _0x36db77.index - _0x1ac2ee.index);
  console.log("\n全部完成。", "✅");
  console.log("\n---------------------------------------------- 账号信息汇总 ----------------------------------------------");
  printAccountsSummary(_0x4545dc);
  console.log("==================== 第 " + _0x1674a5 + " 轮结束 ====================");
  return true;
}
async function main() {
  let _0x5803cd = 1;
  while (running) {
    {
      const _0x7498f8 = await runOneRound(_0x5803cd);
      !_0x7498f8 && running && console.log("⚠️ 本轮执行出现严重问题，但继续尝试下一轮...");
      if (ROUND_COUNT > 0 && _0x5803cd >= ROUND_COUNT) {
        {
          console.log("🏁 已达到指定轮次 " + ROUND_COUNT + "，程序结束。");
          break;
        }
      }
      _0x5803cd++;
      running && (console.log("⏳ 等待 " + ROUND_INTERVAL + " 秒后开始下一轮..."), await new Promise(_0x1f06d1 => setTimeout(_0x1f06d1, ROUND_INTERVAL * 1000)));
    }
  }
  console.log("程序已退出。");
}
main().catch(_0x1c64b5 => {
  console.error("程序异常:", _0x1c64b5);
  process.exit(1);
});