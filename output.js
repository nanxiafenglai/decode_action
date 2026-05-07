//Thu May 07 2026 16:11:07 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const {
  log
} = require("console");
(function () {
  'use strict';

  function _0x1b9066() {
    {
      const _0x2e6445 = new Date(),
        _0x55c3fe = String(_0x2e6445.getHours()).padStart(2, "0"),
        _0x399321 = String(_0x2e6445.getMinutes()).padStart(2, "0"),
        _0xb95e03 = String(_0x2e6445.getSeconds()).padStart(2, "0");
      return "[" + _0x55c3fe + ":" + _0x399321 + ":" + _0xb95e03 + "]";
    }
  }
  const _0x8f1f25 = console.log;
  console.log = function (..._0x5a0203) {
    const _0x27cf41 = _0x1b9066();
    _0x5a0203.length > 0 && typeof _0x5a0203[0] === "string" ? _0x8f1f25(_0x27cf41 + " " + _0x5a0203[0], ..._0x5a0203.slice(1)) : _0x8f1f25(_0x27cf41, ..._0x5a0203);
  };
  const _0x4d4a14 = console.error;
  console.error = function (..._0x5c4491) {
    const _0x1b8465 = _0x1b9066();
    if (_0x5c4491.length > 0 && typeof _0x5c4491[0] === "string") {
      _0x4d4a14(_0x1b8465 + " " + _0x5c4491[0], ..._0x5c4491.slice(1));
    } else {
      _0x4d4a14(_0x1b8465, ..._0x5c4491);
    }
  };
  const _0x45375a = console.warn;
  console.warn = function (..._0x1d4c66) {
    const _0xa2bf8f = _0x1b9066();
    _0x1d4c66.length > 0 && typeof _0x1d4c66[0] === "string" ? _0x45375a(_0xa2bf8f + " " + _0x1d4c66[0], ..._0x1d4c66.slice(1)) : _0x45375a(_0xa2bf8f, ..._0x1d4c66);
  };
  const _0x434ddc = "http://vv.video.qq.com/checktime?otype=json",
    _0x20d7e9 = "https://api.e.kuaishou.com/rest/e/reward/mixed/ad",
    _0x38b148 = process.env.KSJSB_SIGN_API_URL || "",
    _0x43a840 = process.env.KS_SIGN_API_URL || "",
    _0x4db93 = process.env.ENABLE_RANDOM_DID_EGID ? parseInt(process.env.ENABLE_RANDOM_DID_EGID) : 0,
    _0x36ea41 = (process.env.PUSHPLUS_TOKEN || "").trim(),
    _0x4dfc62 = process.env.PUSHPLUS_COIN_SUMMARY_EVERY,
    _0x5699a5 = _0x4dfc62 === undefined || _0x4dfc62 === "" ? 1 : parseInt(_0x4dfc62, 10),
    _0x54d259 = Number.isFinite(_0x5699a5) && _0x5699a5 >= 0 ? _0x5699a5 : 1,
    _0x3da47e = parseInt(process.env.LOOK_TASK_COUNT) || 30,
    _0x1a8012 = parseInt(process.env.FOOD_TASK_COUNT) || 30,
    _0x40fc51 = parseInt(process.env.BOX_TASK_COUNT) || 30,
    _0x22c570 = parseInt(process.env.SEARCH_TASK_COUNT) || 30,
    _0x48f8a5 = parseInt(process.env.DJ_TASK_COUNT) || 30,
    _0x1a27a9 = {
      "food": "饭补",
      "box": "宝箱广告",
      "look": "看广告",
      "look_follow": "看广告追加",
      "search": "搜索",
      "dj": "短剧广告"
    },
    _0xf43bf0 = {
      "look": _0x3da47e,
      "food": _0x1a8012,
      "box": _0x40fc51,
      "search": _0x22c570,
      "dj": _0x48f8a5
    },
    _0x34c7c9 = process.env.TASK_CONFIG || "look:50,dj:50,food:50,box:50,search:50",
    _0x2463e0 = process.env.TASK_ORDER || "sequential",
    _0x465ed4 = process.env.ROUND_COUNT ? parseInt(process.env.ROUND_COUNT) : 10,
    _0x4578b7 = process.env.ROUND_INTERVAL ? parseInt(process.env.ROUND_INTERVAL) : 3600,
    _0x45c471 = process.env.DEFAULT_TASKS ? process.env.DEFAULT_TASKS.split(",").map(_0x348533 => _0x348533.trim()) : ["look", "food", "box", "search"],
    _0x4b03f9 = process.env.KS_EXECUTION_TIMES ? parseInt(process.env.KS_EXECUTION_TIMES) : 50,
    _0x2e3acd = process.env.TASK_EXECUTION_TIMES_PER_ROUND ? parseInt(process.env.TASK_EXECUTION_TIMES_PER_ROUND) : 3,
    _0x1d53d3 = process.env.REWARD_WAIT_MIN ? parseInt(process.env.REWARD_WAIT_MIN) : 3000,
    _0x5ea12 = process.env.REWARD_WAIT_MAX ? parseInt(process.env.REWARD_WAIT_MAX) : 5000,
    _0xa35f90 = process.env.REST_INTERVAL ? parseInt(process.env.REST_INTERVAL) : 30,
    _0x14e1f1 = process.env.REST_TIME_MIN ? parseInt(process.env.REST_TIME_MIN) : 60000,
    _0x45c4bc = process.env.REST_TIME_MAX ? parseInt(process.env.REST_TIME_MAX) : 120000,
    _0xfc6a7e = process.env.KSCOIN_LIMIT ? parseInt(process.env.KSCOIN_LIMIT) : 300000,
    _0x1e1557 = process.env.IMMEDIATE_STOP_THRESHOLD ? parseInt(process.env.IMMEDIATE_STOP_THRESHOLD) : 0,
    _0x5c07d8 = process.env.LOW_REWARD_THRESHOLD ? parseInt(process.env.LOW_REWARD_THRESHOLD) : 10,
    _0x5f4d5d = process.env.LOW_REWARD_LIMIT ? parseInt(process.env.LOW_REWARD_LIMIT) : 5,
    _0x2092c7 = process.env.AD_INFO_FAIL_LIMIT ? parseInt(process.env.AD_INFO_FAIL_LIMIT) : 10,
    _0x4ffc7 = process.env.REQUEST_TIMEOUT ? parseInt(process.env.REQUEST_TIMEOUT) : 30000,
    _0x5a75c4 = process.env.MAX_CONCURRENCY ? parseInt(process.env.MAX_CONCURRENCY) : 666,
    _0x353836 = process.env.ANTISPAM_REST_TIME ? parseInt(process.env.ANTISPAM_REST_TIME) : 15,
    _0x3e3697 = process.env.ROUND_REST_MIN ? parseInt(process.env.ROUND_REST_MIN) : 3,
    _0x3867d6 = process.env.ROUND_REST_MAX ? parseInt(process.env.ROUND_REST_MAX) : 8,
    _0x587727 = process.env.ANTISPAM_MAX_COUNT ? parseInt(process.env.ANTISPAM_MAX_COUNT) : 3,
    _0x1e3010 = process.env.AD_EW ? parseInt(process.env.AD_EW) : 0,
    _0x165a83 = _0x1e3010 === 3,
    _0x30ba33 = process.env.EXTRA_REWARD_FAIL_LIMIT ? parseInt(process.env.EXTRA_REWARD_FAIL_LIMIT) : 5,
    _0x559179 = process.env.REWARD_FAIL_LIMIT ? parseInt(process.env.REWARD_FAIL_LIMIT) : 2,
    _0x561beb = 1000,
    _0x4c9318 = 2000,
    _0x2018f9 = 800,
    _0x4249ff = 2000,
    _0x32e19e = 6000,
    _0x31ba80 = 12000,
    _0xbe4c38 = 1500,
    _0x310208 = 3000;
  let _0x5d9fba = process.env.WATCH_TIME_MIN ? parseInt(process.env.WATCH_TIME_MIN) : 45,
    _0x2cf3fa = process.env.WATCH_TIME_MAX ? parseInt(process.env.WATCH_TIME_MAX) : 65;
  if (_0x5d9fba < 0) console.log("⚠️ 自定义最小观看时间" + _0x5d9fba + "秒，允许0秒设置");
  if (_0x2cf3fa < 0) console.log("⚠️ 自定义最大观看时间" + _0x2cf3fa + "秒，允许0秒设置");
  _0x5d9fba > _0x2cf3fa && (console.log("⚠️ 最小观看时间" + _0x5d9fba + "秒大于最大观看时间" + _0x2cf3fa + "秒，自动交换"), [_0x5d9fba, _0x2cf3fa] = [_0x2cf3fa, _0x5d9fba]);
  const _0x2be342 = process.env.KS_MIN_WATCH_TIME ? parseInt(process.env.KS_MIN_WATCH_TIME) : 30000,
    _0x3c6a4c = process.env.KS_MAX_WATCH_TIME ? parseInt(process.env.KS_MAX_WATCH_TIME) : 40000,
    _0xed6f94 = false,
    _0x4ceef2 = process.env.AD_APPEND_ENABLED !== "0",
    _0x305c23 = process.env.SEARCH_AD_ENABLED !== "0",
    _0x6ce485 = process.env.SEARCH_AD_APPEND_ENABLED !== "0",
    _0x113472 = process.env.AD_APPEND_MAX_COUNT ? parseInt(process.env.AD_APPEND_MAX_COUNT) : 0,
    _0x4a3a37 = process.env.AD_APPEND_REST_INTERVAL ? parseInt(process.env.AD_APPEND_REST_INTERVAL) : 2,
    _0x4786c9 = process.env.AD_APPEND_REST_MIN ? parseInt(process.env.AD_APPEND_REST_MIN) : 10000,
    _0x4b98d7 = process.env.AD_APPEND_REST_MAX ? parseInt(process.env.AD_APPEND_REST_MAX) : 20000,
    _0x97d7fc = parseInt(process.env.FOLLOW_MAX_COUNT) || 30,
    _0x2af7ed = parseInt(process.env.FOLLOW_REST_EVERY) || 2,
    _0x773cc3 = parseInt(process.env.FOLLOW_REST_MIN) || 10,
    _0x1ea8aa = parseInt(process.env.FOLLOW_REST_MAX) || 20,
    _0x21afd1 = process.env.SEARCH_AD_COUNT ? parseInt(process.env.SEARCH_AD_COUNT) : 30,
    _0x2211a2 = process.env.SEARCH_KEYWORDS ? process.env.SEARCH_KEYWORDS.split(",").map(_0x470cc7 => _0x470cc7.trim()).filter(_0x460a01 => _0x460a01) : process.env.SEARCH_KEYWORD ? [process.env.SEARCH_KEYWORD] : ["短剧小说"],
    _0xb91b55 = process.env.SEARCH_KEYWORDS_MODE || "sequential",
    _0x3459f8 = require("crypto"),
    _0x464683 = require("fs"),
    _0x449e38 = require("path"),
    _0x10ed9a = require("axios"),
    _0x45cc7b = require("querystring"),
    {
      SocksProxyAgent: _0x4a9c2
    } = require("socks-proxy-agent"),
    _0x16e5ea = require("https");
  let _0xdd4a00 = false;
  const _0x19d0ea = {
    "API_URL": "http://101.200.154.82:3011/api/verify.php",
    "CARD_KEY": process.env.CARD_KEY || "",
    "DEVICE_ID": process.env.DEVICE_ID || _0x52797a(),
    "HEARTBEAT_INTERVAL": 60,
    "CACHE_FILE": _0x449e38.join(__dirname, ".card_auth_cache.json"),
    "CACHE_EXPIRE_HOURS": parseInt(process.env.CARD_CACHE_EXPIRE_HOURS) || 2
  };
  function _0x52797a() {
    const _0x594364 = require("os").hostname(),
      _0x347379 = require("os").userInfo().username,
      _0x37a9b8 = _0x594364 + _0x347379 + process.platform;
    return _0x3459f8.createHash("md5").update(_0x37a9b8).digest("hex").substring(0, 16);
  }
  class _0x2815f4 {
    constructor() {
      this.cardKey = _0x19d0ea.CARD_KEY;
      this.deviceId = _0x19d0ea.DEVICE_ID;
      this.apiUrl = _0x19d0ea.API_URL;
      this.isVerified = false;
      this.cardInfo = null;
      this.heartbeatTimer = null;
      this.boundAccounts = [];
    }
    ["loadCache"]() {
      {
        try {
          {
            if (_0x464683.existsSync(_0x19d0ea.CACHE_FILE)) {
              {
                const _0x470671 = JSON.parse(_0x464683.readFileSync(_0x19d0ea.CACHE_FILE, "utf8")),
                  _0x45694c = _0x19d0ea.CACHE_EXPIRE_HOURS * 60 * 60 * 1000;
                if (_0x470671.timestamp && Date.now() - _0x470671.timestamp < _0x45694c) {
                  {
                    if (_0x470671.cardKey === this.cardKey && _0x470671.deviceId === this.deviceId) {
                      if (_0x470671.cardInfo?.["expires_at"]) {
                        const _0x5362a2 = new Date(_0x470671.cardInfo.expires_at).getTime();
                        if (Date.now() > _0x5362a2) return console.log("缓存的卡密已过期，清除缓存"), this.clearCache(), false;
                      }
                      this.isVerified = true;
                      this.cardInfo = _0x470671.cardInfo;
                      this.boundAccounts = _0x470671.boundAccounts || [];
                      return true;
                    }
                  }
                }
              }
            }
          }
        } catch (_0x2c237d) {
          console.error("缓存加载失败:", _0x2c237d.message);
        }
        return false;
      }
    }
    ["saveCache"]() {
      try {
        const _0x443485 = {
          "cardKey": this.cardKey,
          "deviceId": this.deviceId,
          "cardInfo": this.cardInfo,
          "boundAccounts": this.boundAccounts,
          "timestamp": Date.now()
        };
        _0x464683.writeFileSync(_0x19d0ea.CACHE_FILE, JSON.stringify(_0x443485, null, 2));
      } catch (_0x3cb8a1) {
        console.error("缓存保存失败:", _0x3cb8a1.message);
      }
    }
    ["clearCache"]() {
      try {
        _0x464683.existsSync(_0x19d0ea.CACHE_FILE) && _0x464683.unlinkSync(_0x19d0ea.CACHE_FILE);
      } catch (_0x139c7d) {}
    }
    async ["activate"]() {
      try {
        console.log("正在激活卡密...");
        console.log("卡密:", this.cardKey.substring(0, 8) + "****");
        console.log("设备ID:", this.deviceId.substring(0, 4) + "****" + this.deviceId.substring(this.deviceId.length - 4));
        const _0x3aa73e = {
            "action": "activate",
            "card_key": this.cardKey,
            "device_id": this.deviceId
          },
          _0x2f5d48 = await _0x10ed9a.post(this.apiUrl, _0x3aa73e, {
            "timeout": 10000,
            "headers": {
              "Content-Type": "application/json"
            },
            "validateStatus": _0x4cf127 => _0x4cf127 < 500
          });
        console.log("服务器响应状态:", _0x2f5d48.status);
        if (_0x2f5d48.data && _0x2f5d48.data.success) {
          this.cardInfo = _0x2f5d48.data.data;
          this.boundAccounts = _0x2f5d48.data.data.bound_accounts_list || [];
          const _0x451933 = this._validateCardData(this.cardInfo, true);
          if (!_0x451933.success) return _0x451933;
          this.isVerified = true;
          this.saveCache();
          console.log("✅ 卡密激活成功！有效期至: " + this.cardInfo.expires_at);
          console.log("📊 卡密类型: " + this.cardInfo.card_type + ", 最大账号数: " + this.cardInfo.max_accounts);
          console.log("\n");
          return {
            "success": true,
            "data": this.cardInfo
          };
        } else {
          const _0x1059b6 = _0x2f5d48.data?.["message"] || _0x2f5d48.data?.["error"] || "未知错误";
          console.error("❌ 激活失败详情:", _0x1059b6);
          return {
            "success": false,
            "message": _0x1059b6
          };
        }
      } catch (_0x169e05) {
        console.error("❌ 请求异常详情:", _0x169e05.message);
        _0x169e05.response && (console.error("响应状态:", _0x169e05.response.status), console.error("响应数据:", _0x169e05.response.data));
        return {
          "success": false,
          "message": "网络错误: " + _0x169e05.message
        };
      }
    }
    ["_validateCardData"](_0x5ddfbb, _0x541aa0 = false) {
      if (_0x5ddfbb.status !== "activated") {
        const _0x27093a = "卡密状态异常: " + _0x5ddfbb.status;
        if (_0x541aa0) console.error("❌ 激活失败:", _0x27093a);
        return {
          "success": false,
          "message": _0x27093a
        };
      }
      if (_0x5ddfbb.expires_at) {
        {
          const _0x2f7c6d = new Date(_0x5ddfbb.expires_at).getTime();
          if (Date.now() > _0x2f7c6d) {
            {
              if (!_0x541aa0) this.clearCache();
              const _0x59d766 = "卡密已过期";
              if (_0x541aa0) console.error("❌ 激活失败:", _0x59d766);
              return {
                "success": false,
                "message": _0x59d766
              };
            }
          }
        }
      }
      return {
        "success": true
      };
    }
    async ["verify"]() {
      try {
        const _0x76ca = {
            "action": "verify",
            "card_key": this.cardKey,
            "device_id": this.deviceId
          },
          _0x3cb07b = await _0x10ed9a.post(this.apiUrl, _0x76ca, {
            "timeout": 10000,
            "headers": {
              "Content-Type": "application/json"
            }
          });
        if (_0x3cb07b.data && _0x3cb07b.data.success) {
          this.cardInfo = _0x3cb07b.data.data;
          this.boundAccounts = _0x3cb07b.data.data.bound_accounts_list || [];
          const _0x2bd7ec = this._validateCardData(this.cardInfo, false);
          if (!_0x2bd7ec.success) return _0x2bd7ec;
          this.isVerified = true;
          this.saveCache();
          return {
            "success": true,
            "data": this.cardInfo
          };
        } else return {
          "success": false,
          "message": _0x3cb07b.data?.["message"] || "验证失败"
        };
      } catch (_0xf0e465) {
        return {
          "success": false,
          "message": "网络错误: " + _0xf0e465.message
        };
      }
    }
    async ["bindAccount"](_0x190449, _0x2cb0a7 = "") {
      try {
        {
          const _0xcefee0 = {
              "action": "bind_account",
              "card_key": this.cardKey,
              "user_id": _0x190449,
              "account_remark": _0x2cb0a7,
              "device_id": this.deviceId
            },
            _0x20711e = await _0x10ed9a.post(this.apiUrl, _0xcefee0, {
              "timeout": 10000,
              "headers": {
                "Content-Type": "application/json"
              }
            });
          if (_0x20711e.data && _0x20711e.data.success) {
            !this.boundAccounts.includes(_0x190449) && (this.boundAccounts.push(_0x190449), this.saveCache());
            return {
              "success": true
            };
          } else {
            return {
              "success": false,
              "message": _0x20711e.data?.["message"] || "绑定失败"
            };
          }
        }
      } catch (_0x28d55e) {
        return {
          "success": false,
          "message": "网络错误: " + _0x28d55e.message
        };
      }
    }
    ["canAddAccount"]() {
      {
        if (!this.isVerified || !this.cardInfo) return false;
        return this.boundAccounts.length < this.cardInfo.max_accounts;
      }
    }
    ["startHeartbeat"]() {
      {
        if (this.heartbeatTimer) return;
        this.heartbeatTimer = setInterval(async () => {
          {
            const _0x514e09 = await this.verify();
            !_0x514e09.success && (console.error("❌ 卡密验证失败: " + _0x514e09.message), console.error("程序将在10秒后优雅退出..."), setTimeout(() => {
              _0xdd4a00 = true;
            }, 10000));
          }
        }, _0x19d0ea.HEARTBEAT_INTERVAL * 1000);
      }
    }
    ["stopHeartbeat"]() {
      this.heartbeatTimer && (clearInterval(this.heartbeatTimer), this.heartbeatTimer = null);
    }
  }
  const _0x162e7d = new _0x2815f4();
  async function _0x3c321b() {
    {
      !_0x19d0ea.CARD_KEY && (console.error("❌ 错误：未配置卡密！"), console.error("请设置环境变量 CARD_KEY=你的卡密"), console.error("示例: set CARD_KEY=XXXX-XXXX-XXXX-XXXX"), process.exit(1));
      console.log("🔐 正在初始化卡密验证系统...");
      const _0x20907f = _0x19d0ea.DEVICE_ID.substring(0, 4) + "****" + _0x19d0ea.DEVICE_ID.substring(_0x19d0ea.DEVICE_ID.length - 4);
      console.log("📱 设备ID: " + _0x20907f);
      if (_0x162e7d.loadCache()) {
        const _0x407852 = await _0x162e7d.verify();
        if (_0x407852.success) return console.log("✅ 卡密验证成功！有效期至: " + _0x162e7d.cardInfo.expires_at), _0x162e7d.startHeartbeat(), {
          "success": true,
          "fromCache": true
        };else {
          {
            console.log("⚠️ 缓存验证失败，清除缓存并尝试重新激活...");
            _0x162e7d.clearCache();
            _0x162e7d.isVerified = false;
            _0x162e7d.cardInfo = null;
            _0x162e7d.boundAccounts = [];
          }
        }
      }
      const _0x5b6122 = await _0x162e7d.activate();
      if (_0x5b6122.success) return _0x162e7d.startHeartbeat(), {
        "success": true
      };
      return _0x5b6122;
    }
  }
  function _0x4e663a(_0x50a623) {
    {
      if (_0x50a623 === "nebula") {
        const _0x1884ce = ["http://jsb.zaizai.asia", "http://111.170.14.34:18888"],
          _0x1798ed = _0x38b148.split(",").map(_0x11226a => _0x11226a.trim()).filter(_0x1e7b85 => _0x1e7b85 && _0x1e7b85.startsWith("http"));
        if (_0x1798ed.length > 0) return _0x1798ed;
        return _0x1884ce;
      }
      if (_0x50a623 === "kuaishou") {
        const _0x41a09f = ["http://ks.zaizai.asia", "http://111.170.14.34:18889"],
          _0x29da9a = _0x43a840.split(",").map(_0x73787 => _0x73787.trim()).filter(_0x44e536 => _0x44e536 && _0x44e536.startsWith("http"));
        if (_0x29da9a.length > 0) return _0x29da9a;
        return _0x41a09f;
      }
      return ["http://jsb.zaizai.asia", "http://111.170.14.34:18888"];
    }
  }
  function _0x2b3ade() {
    const _0x56da78 = "0123456789ABCDEF";
    let _0x36fc45 = "";
    for (let _0x13552a = 0; _0x13552a < 64; _0x13552a++) {
      _0x36fc45 += _0x56da78.charAt(Math.floor(Math.random() * _0x56da78.length));
    }
    return "DFP" + _0x36fc45;
  }
  const _0x5f0882 = {
    "nebula": [],
    "kuaishou": []
  };
  async function _0x3f9061(_0x3973dc) {
    {
      const _0x504c29 = _0x4e663a(_0x3973dc),
        _0x3bd533 = Buffer.from(JSON.stringify({
          "test": "check"
        })).toString("base64"),
        _0x3c49d8 = process.env.SIGN_API_CHECK_TIMEOUT ? parseInt(process.env.SIGN_API_CHECK_TIMEOUT) : 10000;
      for (let _0x12df0b = 0; _0x12df0b < _0x504c29.length; _0x12df0b++) {
        const _0x3148aa = _0x504c29[_0x12df0b],
          _0x44b680 = _0x3148aa.endsWith("/") ? _0x3148aa + "encsign" : _0x3148aa + "/encsign",
          _0x4bc6a6 = {
            "validateStatus": () => true,
            "headers": {
              "Content-Type": "application/json",
              "User-Agent": "Mozilla/5.0"
            }
          };
        try {
          const _0x335ca7 = await _0x10ed9a.post(_0x44b680, {
            "data": _0x3bd533
          }, {
            ..._0x4bc6a6,
            "timeout": _0x3c49d8
          });
          if (_0x335ca7.status >= 200 && _0x335ca7.status < 300) break;
        } catch (_0x422fd6) {
          _0x5f0882[_0x3973dc].push(_0x3148aa);
        }
      }
      try {
        {
          const _0x364b4a = await _0x10ed9a.get(_0x434ddc, {
            "timeout": 3000,
            "headers": {
              "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) FxiOS/125.3 Mobile/15E148 Safari/605.1.15"
            }
          });
          if (_0x364b4a.status === 200) {} else console.log("❌ 时间戳接口:连通异常，状态码: " + _0x364b4a.status);
        }
      } catch (_0x4a5147) {
        console.log("❌ 时间戳接口:连通异常: " + _0x4a5147.message);
      }
      try {
        {
          const _0x1adc33 = await _0x10ed9a.get(_0x20d7e9, {
            "timeout": 3000,
            "headers": {
              "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) FxiOS/125.3 Mobile/15E148 Safari/605.1.15"
            }
          });
          if (_0x1adc33.status === 200) {} else {
            console.log("❌ KS广告接口:连通异常，状态码: " + _0x1adc33.status);
          }
        }
      } catch (_0xc0c74d) {
        console.log("❌ KS广告接口:连通异常: " + _0xc0c74d.message);
      }
    }
  }
  async function _0x98d9d() {
    try {
      {
        const _0x223d00 = await _0x10ed9a.get(_0x434ddc, {
          "headers": {
            "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
          },
          "timeout": 10000
        });
        if (_0x223d00.data) {
          {
            const _0x591696 = _0x223d00.data,
              _0x2f6881 = _0x591696.match(/QZOutputJson=({.*?});/);
            if (_0x2f6881 && _0x2f6881[1]) {
              {
                const _0xc67324 = JSON.parse(_0x2f6881[1]);
                if (_0xc67324 && _0xc67324.t) return parseInt(_0xc67324.t);
              }
            }
          }
        }
      }
    } catch (_0x3afe45) {
      console.log("❌ 获取腾讯时间戳失败: " + _0x3afe45.message);
    }
    return Math.floor(Date.now() / 1000);
  }
  async function _0x18a90b() {
    const _0x4e7b20 = await _0x98d9d(),
      _0x3b8762 = _0x4e7b20 + "12345";
    return {
      "key": _0x3459f8.createHash("md5").update(_0x3b8762).digest("hex"),
      "timestamp": _0x4e7b20
    };
  }
  function _0x4c477d(_0x3d40a2, _0x2852e8) {
    const _0x4cea3c = parseInt(process.env[_0x3d40a2], 10);
    if (isNaN(_0x4cea3c)) {
      return _0x2852e8;
    } else {
      return _0x4cea3c;
    }
  }
  const _0x4c7097 = _0x4c477d("KSROUNDS", _0x4b03f9),
    _0x2602f5 = _0x4c477d("TASK_EXECUTION_TIMES_PER_ROUND", _0x2e3acd),
    _0x3253ec = _0x4c477d("KSCOIN_LIMIT", _0xfc6a7e),
    _0x124836 = _0x4c477d("IMMEDIATE_STOP_THRESHOLD", _0x1e1557),
    _0x538c06 = _0x4c477d("LOW_REWARD_THRESHOLD", _0x5c07d8),
    _0x493400 = _0x4c477d("LOW_REWARD_LIMIT", _0x5f4d5d),
    _0x13c5d6 = _0x4c477d("AD_INFO_FAIL_LIMIT", _0x2092c7);
  function _0x36bd12() {
    const _0x2eb673 = {},
      _0x3620d1 = _0x34c7c9.split(",");
    _0x3620d1.forEach(_0x4b7b66 => {
      const [_0x358127, _0x509d3f] = _0x4b7b66.split(":").map(_0x175087 => _0x175087.trim());
      _0x358127 && _0x509d3f && !isNaN(parseInt(_0x509d3f)) && (_0x2eb673[_0x358127] = parseInt(_0x509d3f));
    });
    const _0x376791 = {
      "food": 50,
      "look": 50,
      "box": 50,
      "search": 50,
      "dj": 50
    };
    return {
      ..._0x376791,
      ..._0x2eb673
    };
  }
  function _0x363a17() {
    const _0x52444f = process.env.Task;
    if (!_0x52444f) return _0x45c471;
    const _0xafebc5 = _0x52444f.split(",").map(_0x99aa0b => _0x99aa0b.trim().toLowerCase()).filter(Boolean),
      _0x5b46c6 = ["look", "dj", "food", "box", "search"],
      _0x11e770 = _0xafebc5.filter(_0x371ec6 => _0x5b46c6.includes(_0x371ec6));
    if (_0x11e770.length === 0) {
      return _0x45c471;
    }
    return _0x11e770;
  }
  function _0x449737() {
    {
      const _0x5cc3fa = [],
        _0x221d7d = new Set();
      if (process.env.ksck) {
        const _0x5c36fc = process.env.ksck,
          _0x2f4675 = _0x5c36fc.split("&").map(_0x2e61f3 => _0x2e61f3.trim()).filter(Boolean);
        _0x5cc3fa.push(..._0x2f4675);
      }
      for (let _0x1c2c13 = 1; _0x1c2c13 <= 666; _0x1c2c13++) {
        const _0x52746b = "ksck" + _0x1c2c13;
        if (process.env[_0x52746b]) {
          const _0x59869b = process.env[_0x52746b],
            _0x296842 = _0x59869b.split("&").map(_0x3cd56e => _0x3cd56e.trim()).filter(Boolean);
          _0x5cc3fa.push(..._0x296842);
        }
      }
      const _0x49b61f = [];
      for (const _0x5912b4 of _0x5cc3fa) {
        {
          if (!_0x221d7d.has(_0x5912b4)) {
            _0x221d7d.add(_0x5912b4);
            _0x49b61f.push(_0x5912b4);
          }
        }
      }
      return _0x49b61f;
    }
  }
  function _0x2c96b2(_0x5a89c7) {
    const _0x435fbb = String(_0x5a89c7 || "").trim().split("#");
    if (_0x435fbb.length < 2) {
      return null;
    }
    let _0xae4542 = "",
      _0x12c6a6 = "",
      _0x1e2405 = "",
      _0x134686 = null;
    const _0x549172 = _0x435fbb[_0x435fbb.length - 1],
      _0x3578b6 = _0x549172.startsWith("socks5://") || _0x549172.includes("|");
    _0x3578b6 && (_0x134686 = _0x549172, _0x435fbb.pop());
    if (_0x435fbb.length === 2) _0x12c6a6 = _0x435fbb[0], _0x1e2405 = _0x435fbb[1];else {
      if (_0x435fbb.length === 3) {
        _0xae4542 = _0x435fbb[0];
        _0x12c6a6 = _0x435fbb[1];
        _0x1e2405 = _0x435fbb[2];
      } else _0x435fbb.length > 3 && (_0xae4542 = _0x435fbb[0], _0x12c6a6 = _0x435fbb[1], _0x1e2405 = _0x435fbb.slice(2).join("#"));
    }
    if (_0x134686 && _0x134686.includes("|")) {
      const _0x311ccc = _0x134686.split("|");
      if (_0x311ccc.length >= 2) {
        const [_0x487807, _0x465b23, _0x3d0a45, _0x2e7e93] = _0x311ccc;
        _0x134686 = _0x3d0a45 && _0x2e7e93 ? "socks5://" + _0x3d0a45 + ":" + _0x2e7e93 + "@" + _0x487807 + ":" + _0x465b23 : "socks5://" + _0x487807 + ":" + _0x465b23;
      }
    }
    const _0x18c54c = _0x12c6a6.includes("kpn=NEBULA") ? "nebula" : "kuaishou";
    return {
      "remark": _0xae4542 || "",
      "salt": _0x1e2405,
      "cookie": _0x12c6a6,
      "proxyUrl": _0x134686,
      "version": _0x18c54c
    };
  }
  function _0x2305f5() {
    {
      const _0x5d5232 = _0x449737(),
        _0x379627 = [];
      for (const _0xf59d60 of _0x5d5232) {
        const _0xc4f19c = _0x2c96b2(_0xf59d60);
        _0xc4f19c ? _0x379627.push(_0xc4f19c) : console.log("❌ 账号格式错误：" + _0xf59d60);
      }
      _0x379627.forEach((_0x3f14c0, _0x5158aa) => {
        _0x3f14c0.index = _0x5158aa + 1;
      });
      return _0x379627;
    }
  }
  function _0x3f1926() {
    try {
      {
        const _0x43ec60 = _0x56fc4b => {
            const _0x24b3c1 = "0123456789abcdef";
            let _0x5e48f2 = "";
            for (let _0x529831 = 0; _0x529831 < _0x56fc4b; _0x529831++) {
              _0x5e48f2 += _0x24b3c1.charAt(Math.floor(Math.random() * _0x24b3c1.length));
            }
            return _0x5e48f2;
          },
          _0x2c3a64 = _0x43ec60(16),
          _0x3994c6 = "ANDROID_" + _0x2c3a64;
        return _0x3994c6;
      }
    } catch (_0x2ca7a1) {
      const _0x208f9f = Date.now().toString(16).toUpperCase();
      return "ANDROID_" + _0x208f9f.substring(0, 16);
    }
  }
  async function _0x7f8c93(_0x3402d9, _0x247ef1 = null, _0x2ee110 = "Unknown Request") {
    {
      const _0x4fd4e0 = {
        ..._0x3402d9
      };
      let _0x45b549 = null;
      if (_0x247ef1) try {
        _0x45b549 = new _0x4a9c2(_0x247ef1.replace(/^socks5:\/\//, "socks5h://"));
      } catch (_0xc037b3) {
        console.log("❌ " + _0x2ee110 + " 代理URL无效，尝试直连模式");
      }
      try {
        const _0x586433 = {
          "method": _0x4fd4e0.method || "GET",
          "url": _0x4fd4e0.url,
          "headers": _0x4fd4e0.headers || {},
          "timeout": _0x4fd4e0.timeout || _0x4ffc7,
          "validateStatus": () => true
        };
        if (_0x4fd4e0.body) _0x586433.data = _0x4fd4e0.body;else _0x4fd4e0.form && (_0x586433.data = _0x45cc7b.stringify(_0x4fd4e0.form), _0x586433.headers["Content-Type"] = "application/x-www-form-urlencoded");
        _0x45b549 ? (_0x586433.httpAgent = _0x45b549, _0x586433.httpsAgent = _0x45b549) : _0x586433.httpsAgent = new _0x16e5ea.Agent({
          "rejectUnauthorized": false
        });
        const _0x566ce0 = await _0x10ed9a(_0x586433);
        if (_0x566ce0.status !== 200) return _0x2ee110 !== "签名接口测试" && console.log("❌ [" + _0x2ee110 + "] HTTP " + _0x566ce0.status + ": " + (typeof _0x566ce0.data === "string" ? _0x566ce0.data.substring(0, 200) : JSON.stringify(_0x566ce0.data).substring(0, 200))), {
          "response": {
            "statusCode": _0x566ce0.status
          },
          "body": null
        };
        return {
          "response": _0x566ce0,
          "body": _0x566ce0.data
        };
      } catch (_0x4bc22c) {
        _0x2ee110 !== "签名接口测试" && console.log("❌ [" + _0x2ee110 + "] 请求异常: " + _0x4bc22c.message);
        return {
          "response": null,
          "body": null
        };
      }
    }
  }
  async function _0x362ad5(_0x2f4221, _0x430885 = "代理连通性检测") {
    if (!_0x2f4221) return {
      "ok": true,
      "msg": "",
      "ip": "localhost"
    };
    try {
      const _0x10148b = new _0x4a9c2(_0x2f4221.replace(/^socks5:\/\//, "socks5h://")),
        _0x166abe = await _0x10ed9a.get("https://ip9.com.cn/get", {
          "httpAgent": _0x10148b,
          "httpsAgent": _0x10148b,
          "timeout": 8000,
          "validateStatus": () => true,
          "headers": {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36"
          }
        });
      if (!_0x166abe.data) return {
        "ok": false,
        "msg": "❌ 无法通过代理访问 ip9.com.cn",
        "ip": ""
      };
      let _0x4e1f63 = "";
      if (typeof _0x166abe.data === "string") try {
        const _0x33cc0e = JSON.parse(_0x166abe.data);
        _0x4e1f63 = _0x33cc0e.ip || _0x33cc0e.IP || _0x33cc0e.addr || _0x33cc0e.ip_address || _0x33cc0e.query || _0x33cc0e.data && _0x33cc0e.data.ip || "";
      } catch {
        const _0x45d09a = String(_0x166abe.data).match(/\b(?:\d{1,3}\.){3}\d{1,3}\b/);
        _0x4e1f63 = _0x45d09a ? _0x45d09a[0] : "";
      } else _0x166abe.data && typeof _0x166abe.data === "object" && (_0x4e1f63 = _0x166abe.data.ip || _0x166abe.data.IP || _0x166abe.data.addr || _0x166abe.data.ip_address || _0x166abe.data.query || _0x166abe.data.data && _0x166abe.data.data.ip || "");
      return {
        "ok": true,
        "msg": "✅ SOCKS5代理正常，出口IP: " + (_0x4e1f63 || "未知"),
        "ip": _0x4e1f63 || "未知"
      };
    } catch (_0x598e75) {
      console.log("   ⚠️ 代理检测异常: " + _0x598e75.message);
      return {
        "ok": false,
        "msg": "❌ 代理连接失败: " + _0x598e75.message,
        "ip": null
      };
    }
  }
  const _0x416cd4 = ["https://ipv4.gdt.qq.com/get_client_ip", "https://myip.ipip.net", "https://v4.ident.me", "https://ipv4.icanhazip.com"];
  async function _0xf693fd(_0x26c309, _0x1771c7 = "代理连通性检测") {
    if (!_0x26c309) return {
      "ok": true,
      "msg": "",
      "ip": "localhost"
    };
    let _0x757c30 = null;
    try {
      {
        const _0x1c50ea = _0x26c309.match(/(\d+\.\d+\.\d+\.\d+)/);
        if (_0x1c50ea) _0x757c30 = _0x1c50ea[1];
      }
    } catch (_0x5560f9) {
      console.log("❌ 无法解析代理IP: " + _0x5560f9.message);
    }
    if (!_0x757c30) return {
      "ok": false,
      "msg": "❌ 无法解析代理IP地址",
      "ip": null
    };
    const _0x5095e4 = _0x416cd4.map(async (_0x4854e6, _0x30e97c) => {
        try {
          const _0x471cdd = new _0x4a9c2(_0x26c309.replace(/^socks5:\/\//, "socks5h://")),
            _0x27d125 = await _0x10ed9a.get(_0x4854e6, {
              "httpAgent": _0x471cdd,
              "httpsAgent": _0x471cdd,
              "timeout": 10000,
              "headers": {
                "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) FxiOS/125.3  Mobile/15E148 Safari/605.1.15",
                "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
                "Sec-Fetch-Site": "none",
                "Accept-Language": "zh-CN,zh-Hans;q=0.9",
                "Sec-Fetch-Mode": "navigate",
                "Cache-Control": "no-cache",
                "Pragma": "no-cache",
                "Sec-Fetch-Dest": "document"
              }
            });
          if (_0x27d125.status === 200 && _0x27d125.data) {
            let _0x4b6950 = "";
            if (_0x4854e6.includes("myip.ipip.net")) {
              {
                const _0x47fdbb = _0x27d125.data.match(/当前 IP：(\d+\.\d+\.\d+\.\d+)/);
                if (_0x47fdbb) _0x4b6950 = _0x47fdbb[1];
              }
            } else _0x4b6950 = _0x27d125.data.toString().trim();
            if (_0x4b6950 && _0x4b6950 !== "") return _0x4b6950 === _0x757c30 ? {
              "success": true,
              "url": _0x4854e6,
              "ip": _0x4b6950,
              "matched": true,
              "message": "✅ 接口" + (_0x30e97c + 1) + " IP匹配: " + _0x4b6950
            } : {
              "success": true,
              "url": _0x4854e6,
              "ip": _0x4b6950,
              "matched": false,
              "message": "⚠️ 接口" + (_0x30e97c + 1) + " IP不匹配: 检测到" + _0x4b6950 + ", 期望" + _0x757c30
            };
          }
        } catch (_0x2afb0a) {
          return {
            "success": false,
            "url": _0x4854e6,
            "ip": null,
            "matched": false,
            "message": "❌ 接口" + (_0x30e97c + 1) + "错误: " + _0x2afb0a.message
          };
        }
      }),
      _0x44d4ea = await Promise.all(_0x5095e4),
      _0x1206d2 = _0x44d4ea.filter(_0x2fd265 => _0x2fd265.success),
      _0x181761 = _0x1206d2.filter(_0x147309 => _0x147309.matched),
      _0x3bffde = [...new Set(_0x1206d2.map(_0x2b0ad7 => _0x2b0ad7.ip).filter(_0x3caa1a => _0x3caa1a))];
    _0x44d4ea.forEach(_0xddc25a => console.log("   " + _0xddc25a.message));
    if (_0x181761.length > 0) return {
      "ok": true,
      "msg": "✅ 代理检测通过 (" + _0x181761.length + "/" + _0x416cd4.length + "个接口IP匹配)",
      "ip": _0x757c30,
      "detectedIPs": _0x3bffde,
      "matchCount": _0x181761.length
    };else {
      if (_0x1206d2.length > 0) return {
        "ok": true,
        "msg": "⚠️ 代理连通但IP不匹配 (检测到: " + _0x3bffde.join(", ") + ", 期望: " + _0x757c30 + ")",
        "ip": _0x757c30,
        "detectedIPs": _0x3bffde,
        "matchCount": 0
      };else {
        const _0x556e04 = _0x44d4ea.map(_0x205e9c => _0x205e9c.message).join("; ");
        return {
          "ok": false,
          "msg": "❌ 代理连接失败: " + _0x556e04,
          "ip": null,
          "detectedIPs": [],
          "matchCount": 0
        };
      }
    }
  }
  async function _0x436743(_0xdbdc46, _0x1ce6c1 = "代理连通性检测") {
    const _0x44be1c = process.env.DL;
    if (_0x44be1c === "0") return console.log("   🔧 DL=0，跳过代理检测"), {
      "ok": true,
      "msg": "✅ 已跳过代理检测（直连模式）",
      "ip": "localhost"
    };
    if (_0x44be1c === "3") return console.log("   🔧 DL=3，使用V3代理检测逻辑"), await _0x362ad5(_0xdbdc46, _0x1ce6c1);
    if (_0x44be1c === "4") return console.log("   🔧 DL=4，使用V4代理检测逻辑"), await _0xf693fd(_0xdbdc46, _0x1ce6c1);
    if (_0x44be1c === undefined) {
      {
        const _0x498415 = await _0x362ad5(_0xdbdc46, _0x1ce6c1);
        if (_0x498415.ok) return _0x498415;
        console.log("   🔧 V3代理检测失败，尝试V4代理检测逻辑");
        const _0x2794ce = await _0xf693fd(_0xdbdc46, _0x1ce6c1);
        if (_0x2794ce.ok) return _0x2794ce;
        return {
          "ok": false,
          "msg": "❌ 代理检测不通过或存在问题，请创建DL环境变量设置值为0跳过检测，或使用直连模式！",
          "ip": null
        };
      }
    }
    console.log("   🔧 使用默认V3代理检测逻辑");
    return await _0x362ad5(_0xdbdc46, _0x1ce6c1);
  }
  function _0x19691b(_0x18ffb1) {
    return _0x18ffb1 ? "[代理]" : "[直连]";
  }
  function _0x554c13(_0x49c623) {
    {
      if (!_0x49c623) return null;
      try {
        {
          const _0x5e7dba = _0x49c623.match(/^(socks5:\/\/)([^:@]+)(?::([^@]+))?@(.+)$/);
          if (_0x5e7dba) {
            {
              const [, _0x5cd5d7, _0x58c3f8, _0x4a74d3, _0x4d31b1] = _0x5e7dba;
              if (_0x58c3f8) {
                return "" + _0x5cd5d7 + _0x58c3f8 + ":***@" + _0x4d31b1;
              }
            }
          }
        }
      } catch (_0x4d3511) {}
      return _0x49c623;
    }
  }
  async function _0x547bd0(_0x553b17, _0x1ccf80, _0x7ccc9f, _0xc7f99 = "?") {
    let _0x386065 = "",
      _0x1c0bdd = {};
    _0x7ccc9f === "nebula" ? (_0x386065 = "https://nebula.kuaishou.com/rest/n/nebula/activity/earn/overview/basicInfo?source=bottom_guide_first", _0x1c0bdd = {
      "Host": "nebula.kuaishou.com",
      "User-Agent": "kwai-android aegon/3.56.0",
      "Cookie": _0x553b17,
      "Content-Type": "application/x-www-form-urlencoded"
    }) : (_0x386065 = "https://encourage.kuaishou.com/rest/wd/encourage/account/basicInfo", _0x1c0bdd = {
      "Host": "encourage.kuaishou.com",
      "User-Agent": "kwai-android aegon/3.56.0",
      "Cookie": _0x553b17,
      "Content-Type": "application/x-www-form-urlencoded"
    });
    const {
      body: _0x57589b
    } = await _0x7f8c93({
      "method": "GET",
      "url": _0x386065,
      "headers": _0x1c0bdd,
      "timeout": 12000
    }, _0x1ccf80, "获取" + (_0x7ccc9f === "nebula" ? "极速版" : "普通版") + "账号[" + _0xc7f99 + "]基本信息");
    if (_0x57589b && _0x57589b.result === 1 && _0x57589b.data) return {
      "nickname": _0x57589b.data.userData?.["nickname"] || _0x57589b.data.nickname || null,
      "totalCoin": _0x7ccc9f === "nebula" ? _0x57589b.data.totalCoin ?? null : _0x57589b.data.coinAmount ?? null,
      "allCash": _0x7ccc9f === "nebula" ? _0x57589b.data.allCash ?? null : _0x57589b.data.cashAmountDisplay ?? null
    };
    return null;
  }
  function _0x76bfe7(_0xe68ea7) {
    if (_0xe68ea7 === "nebula") return {
      "box": {
        "name": "宝箱广告",
        "businessId": 606,
        "posId": 20346,
        "subPageId": 100024064,
        "requestSceneType": 1,
        "taskType": 1
      },
      "look": {
        "name": "看广告得金币",
        "businessId": 672,
        "posId": 24067,
        "subPageId": 100026367,
        "requestSceneType": 1,
        "taskType": 1
      },
      "food": {
        "name": "饭补广告",
        "businessId": 9362,
        "posId": 24067,
        "subPageId": 100026367,
        "requestSceneType": 7,
        "taskType": 2
      },
      "search": {
        "name": "搜索广告",
        "businessId": 7038,
        "posId": 96134,
        "subPageId": 100161537,
        "pageId": 11014,
        "requestSceneType": 1,
        "taskType": 2,
        "linkUrl": "eyJwYWdlSWQiOjExMTAxLCJzdWJQYWdlSWQiOjEwMDA3NDU4NCwicG9zSWQiOjk2MTM0LCJidXNpbmVzc0lkIjo3MDM4LCJleHRQYXJhbXMiOiI0YmJiMWI1OTBiZDViMGEwNzZlNTMxNjg5MThjMGQ5NWNjM2I5NjY1NmViMGVmNmJiNGY5Yjg4MGQ3OTNjZThmOWMwMDUwOWFlYjcxZGUwZTdjZmQ2YWM2Y2MwMjE3MjU0N2U1ZTEzNGZmYWNjOGU0OWQ5M2JhYjM4ZTdiYzRiN2IyZTBmNjIwMDE5Yzc1ODdmMmQzYzM4YWVhYmQ2MzJkN2JjZjA3YzU2Y2I4MDU5NjQ0YmU5ZDIxNzkzN2YzN2MiLCJjdXN0b21EYXRhIjp7ImV4aXRJbmZvIjp7InRvYXN0RGVzYyI6bnVsbCwidG9hc3RJbWdVcmwiOm51bGx9fSwicGVuZGFudFR5cGUiOjEsImRpc3BsYXlUeXBlIjoyLCJzaW5nbGVQYWdlSWQiOjAsInNpbmdsZVN1YlBhZ2VJZCI6MCwiY2hhbm5lbCI6MCwiY291bnRkb3duUmVwb3J0Ijp0cnVlLCJ0aGVtZVR5cGUiOjAsIm1peGVkQWQiOnRydWUsImZ1bGxNaXhlZCI6dHJ1ZSwiYXV0b1JlcG9ydCI6dHJ1ZSwiZnJvbVRhc2tDZW50ZXIiOnRydWUsInNlYXJjaEluc3BpcmVTY2hlbWVJbmZvIjp7InNlYXJjaFF1ZXJ5Ijoi5aW96LSnIiwic2VhcmNoU2Vzc2lvbklkIjoiTVRjMU56TTFOVE0zT0RjeE5GOWpiRzkxWkMweU1qWTBNVGMxTFRFeU1qRTROall0TVRBNE5EYzVOeTB5TURBdFpHVndiRzk1TFRnMU9HSTVOelZtTkRZdGJEbHpZbXhmNWFXOTZMU25YekF1TURFME1ETTFNekF3TnpRM01EYzRNRE0iLCJlbnRlclNvdXJjZSI6IkFDVF9yZW53dV9hZF9ib3hfc2luZ2xlX2NvbCJ9LCJhbW91bnQiOjI1MDB9"
      },
      "dj": {
        "name": "短剧广告",
        "pageId": 11101,
        "businessId": 7036,
        "posId": 24067,
        "subPageId": 100026367,
        "requestSceneType": 7,
        "taskType": 2
      }
    };else {
      return {
        "box": {
          "name": "宝箱广告",
          "businessId": 604,
          "posId": 20345,
          "subPageId": 100024063,
          "requestSceneType": 1,
          "taskType": 1
        },
        "look": {
          "name": "看广告得金币",
          "businessId": 671,
          "posId": 24068,
          "subPageId": 100026368,
          "requestSceneType": 1,
          "taskType": 1,
          "followUpTask": "look_follow",
          "followUpMaxCount": _0x97d7fc
        },
        "look_follow": {
          "name": "看广告追加",
          "businessId": 671,
          "posId": 24068,
          "subPageId": 100026368,
          "pageId": 100011251,
          "requestSceneType": 7,
          "taskType": 2
        },
        "food": {
          "name": "饭补广告",
          "businessId": 921,
          "posId": 29742,
          "subPageId": 100029908,
          "requestSceneType": 7,
          "taskType": 2
        },
        "search": {
          "name": "搜索广告",
          "businessId": 7077,
          "posId": 216267,
          "subPageId": 100161535,
          "pageId": 10014,
          "requestSceneType": 1,
          "taskType": 2,
          "linkUrl": "eyJwYWdlSWQiOjEwMDE0LCJzdWJQYWdlSWQiOjEwMDE2MTUzNSwicG9zSWQiOjIxNjI2NywiYnVzaW5lc3NJZCI6NzA3NywiZXh0UGFyYW1zIjoiYzc4OWI1ZTAzMjMxOTUwZjcyM2ZjMWE1ZGJjYzgwNmYzMDE1OTcyZWE0Mzc2NmNlNDYwNTk2ZDgzMGVjNTE5MDM0OGEwNTlkOTA2NWYwZGY1ZjkwY2YwMjEwMGVhMmQzYzU0YjUyZDBlNGUxY2Q0NmMxN2ExZDU3YmRhY2EyMzVlM2U1NjYzN2JmZGQzMThiZWMzNTgzOWU1YzIxNWUyNzMzY2IyMzQ2ZGQ1NDYyODc1NDdlMjc4OWYxMjZjZWU5NWZhYzg4N2IxMzM2MzBlZTEzYTVmYTlhODYzNDYxODQ5MjM0NDk3ZGY3ZTRmOWYyYzk2ZjQ5YzViMGExNzQ2NGE2MGM0MDg1MzU2NTY2ZDc4NGIxYjY3NzY3MzYzYjg3IiwiY3VzdG9tRGF0YSI6eyJleGl0SW5mbyI6eyJ0b2FzdERlc2MiOm51bGwsInRvYXN0SW1nVXJsIjpudWxsfX0sInBlbmRhbnRUeXBlIjoxLCJkaXNwbGF5VHlwZSI6Miwic2luZ2xlUGFnZUlkIjowLCJzaW5nbGVTdWJQYWdlSWQiOjAsImNoYW5uZWwiOjAsImNvdW50ZG93blJlcG9ydCI6ZmFsc2UsInRoZW1lVHlwZSI6MCwibWl4ZWRBZCI6dHJ1ZSwiZnVsbE1peGVkIjp0cnVlLCJhdXRvUmVwb3J0Ijp0cnVlLCJmcm9tVGFza0NlbnRlciI6dHJ1ZSwic2VhcmNoSW5zcGlyZVNjaGVtZUluZm8iOm51bGwsImFtb3VudCI6MH0"
        },
        "dj": {
          "name": "短剧广告",
          "businessId": 671,
          "posId": 24068,
          "subPageId": 100026368,
          "requestSceneType": 1,
          "taskType": 1
        }
      };
    }
  }
  function _0x329a25(_0x1d2aec, _0x4fe9d4, _0x3b9498, _0x3848cc, _0x2deb6f) {
    return _0x1d2aec === "nebula" ? {
      "commonParams": {
        "encData": "|encData|",
        "sign": "|sign|",
        "cs": "false",
        "client_key": "2ac2a76d",
        "videoModelCrowdTag": "1_23",
        "os": "android",
        "kuaishou.api_st": _0x4fe9d4,
        "uQaTag": "1##swLdgl:99#ecPp:-9#cmNt:-0#cmHs:-3#cmMnsl:-0"
      },
      "deviceParams": {
        "earphoneMode": "1",
        "mod": "Xiaomi(24129PN5BC)",
        "appver": _0x3848cc || "13.9.10.10684",
        "isp": "CUCC",
        "language": "zh-cn",
        "ud": _0x3b9498,
        "did_tag": "0",
        "net": "WIFI",
        "kcv": "1605",
        "app": "0",
        "kpf": "ANDROID_PHONE",
        "ver": "11.6",
        "android_os": "0",
        "boardPlatform": "kalama",
        "kpn": "NEBULA",
        "androidApiLevel": "35",
        "country_code": "cn",
        "sys": "ANDROID_15",
        "sw": "1440",
        "sh": "3200",
        "abi": "arm64",
        "userRecoBit": "0"
      },
      "appInfo": {
        "appId": "kuaishou_nebula",
        "name": "快手极速版",
        "packageName": "com.kuaishou.nebula",
        "version": _0x3848cc || "13.9.10.10684",
        "versionCode": -1
      },
      "defaultPageId": 11101
    } : {
      "commonParams": {
        "encData": "|encData|",
        "sign": "|sign|",
        "cs": "false",
        "client_key": "3c2cd3f3",
        "videoModelCrowdTag": "1_23",
        "os": "android",
        "kuaishou.api_st": _0x4fe9d4,
        "uQaTag": "1##swLdgl:99#ecPp:-9#cmNt:-0#cmHs:-3#cmMnsl:-0"
      },
      "deviceParams": {
        "earphoneMode": "1",
        "mod": "Xiaomi(24129PN5BC)",
        "appver": "13.9.10.10684",
        "isp": "CUCC",
        "language": "zh-cn",
        "ud": _0x3b9498,
        "did_tag": "0",
        "net": "WIFI",
        "kcv": "1605",
        "app": "0",
        "kpf": "ANDROID_PHONE",
        "ver": "11.6",
        "android_os": "0",
        "boardPlatform": "kalama",
        "kpn": "KUAISHOU",
        "androidApiLevel": "35",
        "country_code": "cn",
        "sys": "ANDROID_15",
        "sw": "1440",
        "sh": "3200",
        "abi": "arm64",
        "userRecoBit": "0"
      },
      "appInfo": {
        "appId": "kuaishou",
        "name": "快手",
        "packageName": "com.smile.gifmaker",
        "version": "13.9.10.10684",
        "versionCode": -1
      },
      "defaultPageId": 100011251
    };
  }
  class _0x4e1fe4 {
    constructor({
      index: _0x4fa737,
      salt: _0x182239,
      cookie: _0x570209,
      version: _0x1fb40e,
      nickname = "",
      proxyUrl = null,
      tasksToExecute = _0x45c471,
      remark = ""
    }) {
      {
        this.index = _0x4fa737;
        this.salt = _0x182239;
        this.cookie = _0x570209;
        this.version = _0x1fb40e;
        this.nickname = nickname || remark || "账号" + _0x4fa737;
        this.remark = remark;
        this.proxyUrl = proxyUrl;
        this.coinLimit = _0x3253ec;
        this.coinExceeded = false;
        this.tasksToExecute = tasksToExecute;
        this.accumulatedCoins = 0;
        this.proxyTag = _0x19691b(proxyUrl);
        this.clientIP = null;
        this.initialCoin = 0;
        this.totalCoinThresholdReached = false;
        this.roundTotalCoins = 0;
        this.searchKeywords = _0x2211a2;
        this.searchKeywordsMode = _0xb91b55;
        this.currentKeywordIndex = 0;
        this.lowRewardCount = 0;
        this.maxLowRewardCount = 30;
        this.adInfoFailCount = 0;
        this.maxAdInfoFailCount = _0x13c5d6;
        const _0x1f0c53 = ["box", "look", "look_follow", "search", "food", "dj"];
        this.taskLowRewardCount = {};
        this.taskStopped = {};
        this.taskRewardFailCount = {};
        this.taskLimitReached = {};
        this.taskDisabled = {};
        _0x1f0c53.forEach(_0x33077d => {
          this.taskLowRewardCount[_0x33077d] = 0;
          this.taskStopped[_0x33077d] = false;
          this.taskRewardFailCount[_0x33077d] = 0;
          this.taskLimitReached[_0x33077d] = false;
          this.taskDisabled[_0x33077d] = false;
        });
        this.totalRewardFailCount = 0;
        this.adTaskExecuteCount = 0;
        this.conversionSuccessCount = 0;
        this.conversionFailCount = 0;
        this.extraRewardFailCount = 0;
        this.extraRewardDisabled = false;
        this.lastConversionInfo = null;
        this.conversionExtraCoins = 0;
        this.extractCookieInfo();
        this.headers = this.version === "nebula" ? {
          "Host": "nebula.kuaishou.com",
          "Connection": "keep-alive",
          "User-Agent": "Mozilla/5.0 (Linux; Android 10; MI 8 Lite Build/QKQ1.190910.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/87.0.4280.101 Mobile Safari/537.36",
          "Cookie": this.cookie,
          "content-type": "application/json"
        } : {
          "Host": "encourage.kuaishou.com",
          "Connection": "keep-alive",
          "User-Agent": "kwai-android aegon/3.56.0",
          "Cookie": this.cookie,
          "content-type": "application/json"
        };
        this.taskReportPath = "/rest/r/ad/task/report";
        const _0x5d2ad5 = this.version === "kuaishou" ? "13.9.10.10684" : this.appver;
        this.queryParams = this.version === "nebula" ? "mod=" + encodeURIComponent("Xiaomi(24129PN5BC)") + "&appver=" + _0x5d2ad5 + "&egid=" + this.egid + "&did=" + this.did : "mod=" + encodeURIComponent("Xiaomi(24129PN5BC)") + "&appver=" + _0x5d2ad5 + "&egid=" + this.egid + "&did=" + this.did;
        this.taskConfigs = _0x76bfe7(this.version);
        this.taskStats = {};
        this.tasksToExecute.forEach(_0x197393 => {
          if (this.taskConfigs[_0x197393]) {
            this.taskStats[_0x197393] = {
              "success": 0,
              "failed": 0,
              "totalReward": 0
            };
            const _0xa76089 = this.taskConfigs[_0x197393];
            if (_0xa76089.followUpTask && this.taskConfigs[_0xa76089.followUpTask]) {
              this.taskStats[_0xa76089.followUpTask] = {
                "success": 0,
                "failed": 0,
                "totalReward": 0
              };
            }
          }
        });
        this.lowRewardStreak = 0;
        this.immediateStopThreshold = _0x124836;
        this.lowRewardThreshold = _0x538c06;
        this.lowRewardLimit = _0x493400;
        this.stopAllTasks = false;
        this.antispamCount = 0;
        this.antispamMaxCount = _0x587727;
        this.ssFirstTaskShown = false;
        this.currentTaskIndex = 0;
        this.taskLowRewardFlags = {};
        const _0x421f1e = ["box", "look", "look_follow", "search", "food", "dj"];
        _0x421f1e.forEach(_0x17cc68 => {
          this.taskLowRewardFlags[_0x17cc68] = false;
        });
        this.isSingleTaskMode = this.tasksToExecute.length === 1;
        this.isCycleMode = true;
        this.cycleRounds = _0x465ed4;
        this.roundInterval = _0x4578b7;
        this.currentCycleRound = 0;
        this.taskExecutionOrder = _0x2463e0;
        this.signApiUrls = _0x4e663a(this.version);
        this.signApiCurrentIndex = 0;
        this.signApiFormatErrorCount = 0;
        this.maxSignApiFormatErrorCount = 2;
        this.taskExecutionTimesPerRound = _0x2602f5;
      }
    }
    ["extractCookieInfo"]() {
      try {
        let _0x4cf468 = "",
          _0x41a393 = "";
        if (_0x4db93 === 1) _0x4cf468 = _0x2b3ade(), _0x41a393 = _0x3f1926(), this.cookie = this.cookie.replace(/egid=[^;]+/g, "egid=" + _0x4cf468), this.cookie = this.cookie.replace(/did=[^;]+/g, "did=" + _0x41a393), console.log("🔑 " + this.getAccountDisplayName() + " 随机生成egid/did：egid=" + _0x4cf468 + ", did=" + _0x41a393), console.log("__RANDOM_DID_EGID__|" + _0x41a393 + "|" + _0x4cf468);else {
          const _0x40b8e7 = this.cookie.match(/egid=([^;]+)/),
            _0x26915b = this.cookie.match(/did=([^;]+)/);
          _0x4cf468 = _0x40b8e7 ? _0x40b8e7[1] : "";
          _0x41a393 = _0x26915b ? _0x26915b[1] : "";
        }
        const _0x4fc105 = this.cookie.match(/userId=([^;]+)/),
          _0x572146 = this.cookie.match(/kuaishou\.api_st=([^;]+)/),
          _0xf05b4b = this.cookie.match(/appver=([^;]+)/);
        this.egid = _0x4cf468;
        this.did = _0x41a393;
        this.userId = _0x4fc105 ? _0x4fc105[1] : "";
        this.kuaishouApiSt = _0x572146 ? _0x572146[1] : "";
        this.appver = "13.9.10.10684";
      } catch (_0x43d1fb) {
        console.log("❌ " + this.getAccountDisplayName() + " 解析/替换cookie失败: " + _0x43d1fb.message);
      }
    }
    ["getAccountDisplayName"]() {
      const _0x389c5c = this.version === "nebula" ? "[极速版]" : "[普通版]";
      return this.version === "nebula" ? _0x389c5c + "[" + this.nickname + "]" + (this.remark ? "(" + this.remark + ")" : "") : _0x389c5c + (this.remark ? "(" + this.remark + ")" : "");
    }
    ["getAccountMark"]() {
      const _0x2ace4e = this.version === "nebula" ? "[极速版]" : "[普通版]";
      return "" + this.proxyTag + _0x2ace4e + " 账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "");
    }
    async ["initProxyExitIP"]() {
      try {
        if (this.proxyUrl) {
          const _0x43a19a = _0x554c13(this.proxyUrl);
          console.log("🔗 " + this.getAccountMark() + " 已配置代理: " + _0x43a19a);
          const _0x19f9f4 = await _0x436743(this.proxyUrl, this.getAccountMark());
          if (_0x19f9f4.ok && _0x19f9f4.ip) this.clientIP = _0x19f9f4.ip, console.log("✅ " + this.getAccountMark() + " 代理检测成功: " + _0x19f9f4.msg);else {
            console.log("⚠️ " + this.getAccountMark() + " 代理检测警告: " + _0x19f9f4.msg);
            this.clientIP = "代理检测异常";
          }
          return true;
        } else {
          this.clientIP = "直连模式";
          console.log("📶 " + this.getAccountMark() + " 使用直连模式");
          return true;
        }
      } catch (_0x422ab2) {
        console.log("❌ " + this.getAccountMark() + " IP检测异常: " + _0x422ab2.message);
        this.clientIP = "检测异常";
        return false;
      }
    }
    async ["checkCoinLimit"]() {
      try {
        const _0x14ae49 = await _0x547bd0(this.cookie, this.proxyUrl, this.version, this.index);
        if (_0x14ae49 && _0x14ae49.totalCoin) {
          {
            const _0x1078e0 = parseInt(_0x14ae49.totalCoin);
            if (_0x1078e0 >= this.coinLimit) return console.log("💰 " + this.getAccountDisplayName() + " 当前金币已达 " + _0x1078e0 + "，超过阈值 " + this.coinLimit + "，停止任务"), this.coinExceeded = true, this.stopAllTasks = true, true;
          }
        }
        return false;
      } catch (_0x44056d) {
        console.log("❌ " + this.getAccountDisplayName() + " 金币检查异常: " + _0x44056d.message);
        return false;
      }
    }
    ["checkAccumulatedCoinsLimit"]() {
      {
        if (this.accumulatedCoins >= this.coinLimit) return console.log("💰 " + this.getAccountDisplayName() + " 累计获得金币已达 " + this.coinLimit + "，停止任务"), this.stopAllTasks = true, true;
        return false;
      }
    }
    ["getSearchKeyword"]() {
      {
        if (this.searchKeywords.length === 0) return "短剧小说";
        if (this.searchKeywords.length === 1) return this.searchKeywords[0];
        if (this.searchKeywordsMode === "random") {
          {
            const _0x31f3a5 = Math.floor(Math.random() * this.searchKeywords.length);
            return this.searchKeywords[_0x31f3a5];
          }
        } else {
          const _0x41485c = this.searchKeywords[this.currentKeywordIndex];
          this.currentKeywordIndex = (this.currentKeywordIndex + 1) % this.searchKeywords.length;
          return _0x41485c;
        }
      }
    }
    ["_getImpExtData"](_0x1d6ab2) {
      if (_0x1d6ab2.name === "搜索广告") {
        {
          const _0x1c7fa0 = this.getSearchKeyword();
          return JSON.stringify({
            "openH5AdCount": 2,
            "sessionLookedCompletedCount": "1",
            "sessionType": "1",
            "searchKey": _0x1c7fa0,
            "triggerType": "2",
            "disableReportToast": "true",
            "businessEnterAction": "7",
            "neoParams": _0x1d6ab2.linkUrl
          });
        }
      } else return "{}";
    }
    async ["retryOperation"](_0x1cdb12, _0x22a60a, _0x5b2248 = 5, _0x351ff5 = 2000) {
      {
        let _0x235c44 = 0,
          _0x4c669c = null;
        while (_0x235c44 < _0x5b2248) {
          {
            try {
              {
                const _0x1c64b3 = await _0x1cdb12();
                if (_0x1c64b3) return _0x1c64b3;
                _0x4c669c = new Error(_0x22a60a + " 返回空结果");
              }
            } catch (_0x3d75e9) {
              _0x4c669c = _0x3d75e9;
            }
            _0x235c44++;
            if (_0x235c44 < _0x5b2248) {
              let _0x17c68b = "🔄 " + this.getAccountDisplayName() + " " + _0x22a60a + " 失败，重试 " + _0x235c44 + "/" + _0x5b2248;
              _0x22a60a.includes("获取") && _0x22a60a.includes("广告信息") && (_0x17c68b += " (偶尔出现可能是[1.面板网络不好][2.代理延迟太高]无视即可！若一直出现该提示[1.请重抓ck和salt][2.更换青龙面板][3.更换代理ip][4.不要使用国外ip的青龙面板])");
              console.log(_0x17c68b);
              await new Promise(_0x547599 => setTimeout(_0x547599, _0x351ff5));
            }
          }
        }
        console.log("❌ " + this.getAccountDisplayName() + " " + _0x22a60a + " 失败，已重试" + _0x5b2248 + "次");
        return null;
      }
    }
    ["getSignApiList"]() {
      const _0x3c99f1 = this.signApiUrls && this.signApiUrls.length > 0 ? this.signApiUrls : _0x4e663a(this.version),
        _0x8e8a8d = _0x5f0882[this.version] || [],
        _0x275c4c = _0x3c99f1.filter(_0x24f427 => !_0x8e8a8d.includes(_0x24f427));
      return _0x275c4c.length > 0 ? _0x275c4c : _0x3c99f1;
    }
    ["getCurrentSignApiUrl"]() {
      const _0x2e6a01 = this.getSignApiList();
      if (!_0x2e6a01.length) return null;
      if (typeof this.signApiCurrentIndex !== "number" || this.signApiCurrentIndex < 0) {
        this.signApiCurrentIndex = 0;
      }
      this.signApiCurrentIndex = this.signApiCurrentIndex % _0x2e6a01.length;
      return _0x2e6a01[this.signApiCurrentIndex];
    }
    ["resetSignApiFormatErrorCount"]() {
      this.signApiFormatErrorCount = 0;
    }
    ["switchToNextSignApi"](_0x476c9a) {
      const _0x2f0bdc = this.getSignApiList();
      if (_0x2f0bdc.length <= 1) return this.resetSignApiFormatErrorCount(), false;
      const _0x66bb4f = typeof this.signApiCurrentIndex === "number" ? this.signApiCurrentIndex % _0x2f0bdc.length : 0;
      this.signApiCurrentIndex = (_0x66bb4f + 1) % _0x2f0bdc.length;
      this.resetSignApiFormatErrorCount();
      console.log("🔁 远程签名服务已切换到备用地址，原因: " + _0x476c9a);
      return true;
    }
    ["handleSignApiFormatError"](_0x480b70, _0x1d2c2b = "远程签名服务") {
      this.signApiFormatErrorCount = (this.signApiFormatErrorCount || 0) + 1;
      console.log("❌ " + _0x1d2c2b + "返回格式错误，连续格式错误次数: " + this.signApiFormatErrorCount + "/" + this.maxSignApiFormatErrorCount);
      if (this.signApiFormatErrorCount >= this.maxSignApiFormatErrorCount) return this.switchToNextSignApi("连续" + this.maxSignApiFormatErrorCount + "次格式错误");
      return false;
    }
    async ["getSign"](_0x1b9541) {
      const _0x4227aa = this.getSignApiList();
      let _0x23c71f = null;
      const _0x998d78 = new Set();
      while (_0x998d78.size < _0x4227aa.length) {
        const _0x46192c = this.getCurrentSignApiUrl();
        if (!_0x46192c || _0x998d78.has(_0x46192c)) break;
        _0x998d78.add(_0x46192c);
        try {
          const _0x3ab7b6 = _0x46192c + (_0x46192c.endsWith("/") ? "encsign" : "/encsign"),
            {
              response: _0x55365f,
              body: _0x42929d
            } = await _0x7f8c93({
              "method": "POST",
              "url": _0x3ab7b6,
              "body": JSON.stringify({
                "data": _0x1b9541
              }),
              "headers": {
                "Content-Type": "application/json",
                "User-Agent": "Mozilla/5.0"
              },
              "timeout": 15000
            });
          if (_0x42929d && _0x42929d.data && _0x42929d.data.encdata) return this.resetSignApiFormatErrorCount(), _0x42929d.data;
          _0x23c71f = new Error("远程签名服务返回格式错误");
          const _0x1c4f9b = this.handleSignApiFormatError(_0x3ab7b6);
          if (!_0x1c4f9b) {
            break;
          }
        } catch (_0x5a7c1f) {
          {
            _0x23c71f = _0x5a7c1f;
            console.log("⚠️ 远程签名服务调用失败，原因: " + _0x5a7c1f.message);
            const _0x13b915 = this.switchToNextSignApi("请求异常: " + _0x5a7c1f.message);
            if (!_0x13b915) break;
          }
        }
      }
      _0x23c71f && console.log("❌ 远程签名服务全部地址调用失败: " + _0x23c71f.message);
      return null;
    }
    async ["requestSignService"](_0x74ef0, _0x51e253) {
      const _0x28f34a = {
          "path": _0x74ef0.urlpath,
          "data": _0x74ef0.reqdata,
          "salt": _0x74ef0.api_client_salt
        },
        _0x19bdeb = this.getSignApiList();
      let _0x14bf58 = null;
      const _0x14e275 = new Set();
      while (_0x14e275.size < _0x19bdeb.length) {
        {
          const _0x5df237 = this.getCurrentSignApiUrl();
          if (!_0x5df237 || _0x14e275.has(_0x5df237)) break;
          _0x14e275.add(_0x5df237);
          try {
            {
              const _0x3cddd9 = _0x5df237 + (_0x5df237.endsWith("/") ? "nssig" : "/nssig"),
                {
                  response: _0x40567e,
                  body: _0x1f4955
                } = await _0x7f8c93({
                  "method": "POST",
                  "url": _0x3cddd9,
                  "headers": {
                    "Content-Type": "application/json",
                    "User-Agent": "Mozilla/5.0"
                  },
                  "body": JSON.stringify(_0x28f34a),
                  "timeout": 15000
                }, null, _0x51e253 + "（远程签名服务）");
              if (_0x1f4955 && _0x1f4955.data) {
                this.resetSignApiFormatErrorCount();
                return {
                  "__NS_sig3": _0x1f4955.data.nssig3,
                  "__NStokensig": _0x1f4955.data.nstokensig,
                  "sig": _0x1f4955.data.sig,
                  "xfalcon": _0x1f4955.data.xfalcon || "",
                  "kaw": _0x1f4955.data.kaw || "",
                  "kas": _0x1f4955.data.kas || ""
                };
              }
              _0x14bf58 = new Error("远程签名服务返回格式错误");
              const _0x364cb9 = this.handleSignApiFormatError(_0x3cddd9, _0x51e253 + " 远程签名服务");
              if (!_0x364cb9) break;
            }
          } catch (_0x5d856f) {
            _0x14bf58 = _0x5d856f;
            console.log("⚠️ " + _0x51e253 + " 远程签名服务失败，原因: " + _0x5d856f.message);
            const _0x8addeb = this.switchToNextSignApi(_0x51e253 + " 请求异常: " + _0x5d856f.message);
            if (!_0x8addeb) break;
          }
        }
      }
      _0x14bf58 && console.log("❌ " + _0x51e253 + " 远程签名服务全部地址调用失败: " + _0x14bf58.message);
      return null;
    }
    async ["getAdInfo"](_0x29a990) {
      try {
        const _0x4acf88 = "/rest/e/reward/mixed/ad",
          {
            commonParams: _0x15807e,
            deviceParams: _0x5d2b80,
            appInfo: _0x4d82a8,
            defaultPageId: _0x59bd77
          } = _0x329a25(this.version, this.kuaishouApiSt, this.userId, this.appver, this.did),
          _0x2ec5e8 = {
            "appInfo": _0x4d82a8,
            "deviceInfo": {
              "osType": 1,
              "osVersion": "15",
              "deviceId": this.did,
              "screenSize": {
                "width": 1440,
                "height": 3200
              },
              "ftt": ""
            },
            "userInfo": {
              "userId": this.userId,
              "age": 0,
              "gender": ""
            },
            "impInfo": [{
              "pageId": _0x29a990.pageId || _0x59bd77,
              "subPageId": _0x29a990.subPageId,
              "action": 0,
              "browseType": _0x29a990.name === "搜索广告" ? 4 : 3,
              "impExtData": this._getImpExtData(_0x29a990),
              "mediaExtData": "{}"
            }]
          },
          _0x49d2c9 = Buffer.from(JSON.stringify(_0x2ec5e8)).toString("base64");
        let _0x594147 = await this.retryOperation(() => this.getSign(_0x49d2c9), "获取" + _0x29a990.name + "签名", 3);
        if (!_0x594147) {
          console.log("❌ " + this.getAccountDisplayName() + " 获取签名失败，跳过此次任务");
          return null;
        }
        _0x15807e.encData = _0x594147.encdata;
        _0x15807e.sign = _0x594147.sign;
        const _0x1bff89 = _0x45cc7b.stringify(_0x15807e) + "&" + _0x45cc7b.stringify(_0x5d2b80);
        let _0x531579 = await this.requestSignService({
          "urlpath": _0x4acf88,
          "reqdata": _0x1bff89,
          "api_client_salt": this.salt
        });
        if (!_0x531579) {
          console.log("❌ " + this.getAccountDisplayName() + " 获取签名服务失败，跳过此次任务");
          return null;
        }
        const _0x322659 = {
            ..._0x5d2b80,
            "sig": _0x531579.sig,
            "__NS_sig3": _0x531579.__NS_sig3,
            "__NS_xfalcon": _0x531579.xfalcon || "",
            "__NStokensig": _0x531579.__NStokensig
          },
          _0x3f9547 = "https://api.e.kuaishou.com" + _0x4acf88 + "?" + _0x45cc7b.stringify(_0x322659),
          _0x5d603c = {
            "Host": "api.e.kuaishou.com",
            "Accept-Language": "zh-cn",
            "X-REQUESTID": String(Date.now()) + String(Math.floor(Math.random() * 100000)).padStart(5, "0"),
            "User-Agent": "kwai-android aegon/4.32.0",
            "Cookie": "kuaishou_api_st=" + this.kuaishouApiSt
          };
        if (_0x531579.kaw) _0x5d603c.kaw = _0x531579.kaw;
        if (_0x531579.kas) _0x5d603c.kas = _0x531579.kas;
        const {
          response: _0xf611eb,
          body: _0x4ab3ed
        } = await _0x7f8c93({
          "method": "POST",
          "url": _0x3f9547,
          "headers": _0x5d603c,
          "form": _0x15807e,
          "timeout": 12000
        }, this.proxyUrl, this.getAccountDisplayName() + " 获取" + _0x29a990.name + "广告");
        if (!_0x4ab3ed) return this.adInfoFailCount++, console.log("❌ " + this.getAccountMark() + " 广告获取失败(无响应) " + this.adInfoFailCount + "/" + this.maxAdInfoFailCount), this.adInfoFailCount >= this.maxAdInfoFailCount && (console.log("🚨 " + this.getAccountMark() + " 广告失败超限，停止运行"), this.stopAllTasks = true), null;
        if (_0x4ab3ed.errorMsg && _0x4ab3ed.errorMsg !== "OK" && _0x4ab3ed.errorMsg.includes("ANTISPAM_REQUEST")) {
          {
            this.antispamCount++;
            const _0x5ce942 = _0x353836,
              _0xa55c40 = _0x5ce942 * 60 * 1000,
              _0x43c483 = new Date(Date.now() + _0xa55c40),
              _0x119248 = _0x43c483.toLocaleString("zh-CN", {
                "hour12": false
              });
            console.log("\n" + "=".repeat(50));
            console.log("🚨 " + this.getAccountMark() + " 风控拦截 第" + this.antispamCount + "/" + this.antispamMaxCount + "次");
            if (this.antispamCount >= this.antispamMaxCount) return console.log("🛑 " + this.getAccountMark() + " 风控达" + this.antispamMaxCount + "次上限，停止运行"), console.log("=".repeat(50) + "\n"), this.stopAllTasks = true, null;
            console.log("⏸️ " + this.getAccountMark() + " 休息" + _0x5ce942 + "分钟，预计" + _0x119248 + "恢复");
            console.log("=".repeat(50) + "\n");
            const _0x22d464 = Math.min(10, _0x5ce942),
              _0x4d56b4 = Math.ceil(_0x5ce942 / _0x22d464);
            for (let _0x5b163a = 0; _0x5b163a < _0x4d56b4; _0x5b163a++) {
              const _0x432907 = _0x5ce942 - _0x5b163a * _0x22d464,
                _0x29f9ff = Math.min(_0x22d464 * 60 * 1000, _0x432907 * 60 * 1000);
              if (_0x5b163a > 0) {
                console.log("⏳ " + this.getAccountMark() + " 风控休息中，剩余" + _0x432907 + "分钟");
              }
              await new Promise(_0x25838 => setTimeout(_0x25838, _0x29f9ff));
            }
            console.log("✅ " + this.getAccountMark() + " 风控休息结束，恢复执行\n");
            this.adInfoFailCount = 0;
            return null;
          }
        }
        _0x4ab3ed.errorMsg === "OK" && (this.antispamCount = 0);
        if (_0x4ab3ed.errorMsg === "OK" && _0x4ab3ed.feeds && _0x4ab3ed.feeds[0] && _0x4ab3ed.feeds[0].ad) {
          const _0x41fde0 = _0x4ab3ed.feeds[0],
            _0x3bc993 = _0x41fde0.ad,
            _0x572a0e = _0x3bc993?.["adDataV2"] || {},
            _0x33b1d9 = _0x41fde0.caption || _0x3bc993?.["caption"] || "",
            _0x7fa209 = _0x41fde0.exp_tag || "",
            _0x14ba13 = _0x7fa209.split("/")[1]?.["split"]("_")?.[0] || "",
            _0x259a8d = _0x41fde0.caption || _0x3bc993?.["caption"] || "";
          if (_0x259a8d && _0x29a990.businessId !== 7077) {
            console.log("✅ " + this.getAccountDisplayName() + " 成功获取广告：" + _0x259a8d);
          }
          let _0x34b718 = 0,
            _0x1d8729 = 0;
          try {
            {
              if (_0x3bc993.extData) {
                const _0x54bab0 = JSON.parse(_0x3bc993.extData);
                _0x34b718 = _0x54bab0.awardCoin || 0;
                _0x1d8729 = _0x54bab0.mixedAd || 0;
              }
              if (_0x34b718 === 0) {
                {
                  if (_0x572a0e?.["inspirePersonalize"]?.["awardValue"]) _0x34b718 = parseInt(_0x572a0e.inspirePersonalize.awardValue) || 0;else {
                    if (_0x572a0e?.["inspireAdInfo"]?.["inspirePersonalize"]?.["neoValue"]) {
                      _0x34b718 = parseInt(_0x572a0e.inspireAdInfo.inspirePersonalize.neoValue) || 0;
                    }
                  }
                }
              }
            }
          } catch (_0xb52d) {
            console.log("❌ " + this.getAccountDisplayName() + " 解析预计金币失败: " + _0xb52d.message);
          }
          console.log("📊 " + this.getAccountDisplayName() + " 预计金币：" + _0x34b718 + "金币");
          let _0x45207d = false;
          try {
            {
              const _0x2e4210 = _0x572a0e?.["onceAgainRewardInfo"];
              _0x2e4210?.["hasMore"] && (_0x45207d = true);
            }
          } catch (_0xac03eb) {}
          let _0x2e5aa3 = "";
          _0x572a0e.enableJumpToLive && (_0x2e5aa3 = _0x572a0e.liveStreamId || _0x41fde0.liveStreamId || "");
          if (_0x34b718 === 5) return console.log("⚠️ " + this.getAccountDisplayName() + " 预计金币5，跳过直播广告"), null;
          const _0x3e0ece = _0x572a0e.inspireAdInfo || {},
            _0x1e1d5f = _0x3e0ece.adExtInfo || "",
            _0x1bb92e = _0x3e0ece.inspireAdBillTime || 30000;
          let _0x42e985 = 30000;
          try {
            _0x41fde0.streamManifest && _0x41fde0.streamManifest.adaptationSet && _0x41fde0.streamManifest.adaptationSet[0] && (_0x42e985 = _0x41fde0.streamManifest.adaptationSet[0].duration || 30000);
          } catch (_0xe20299) {}
          const _0x3f7b07 = _0x3bc993.tracks || [],
            _0x27f62b = _0x3bc993.callbackParam || "";
          let _0xdc0a04 = false;
          try {
            if (_0x572a0e.templateDatas && Array.isArray(_0x572a0e.templateDatas)) for (let _0x4bd3db of _0x572a0e.templateDatas) {
              if (_0x4bd3db.resourceType == 1) {
                _0xdc0a04 = true;
                break;
              }
            }
          } catch (_0x586b5f) {}
          const _0x1356b1 = _0x3e0ece.neoParams || "",
            _0x2ad086 = _0x572a0e.posId || "",
            _0x55d666 = _0x4ab3ed.searchSessionId || "adNeo-" + this.userId + "-" + _0x29a990.subPageId + "-" + Date.now();
          let _0x5e32a8 = {};
          const _0x20a2d1 = _0x41fde0.liveStreamId || "";
          _0x20a2d1 && (_0x5e32a8 = {
            "feedId": _0x20a2d1
          });
          const _0x5f2281 = _0x4ab3ed.feedType || 0;
          let _0x3e73b6 = null;
          try {
            if (_0x3bc993.extData) {
              const _0x49b8a0 = JSON.parse(_0x3bc993.extData);
              _0x3e73b6 = _0x49b8a0.awardCoin;
            }
          } catch (_0x1b5a8d) {}
          let _0x2bcd87 = null;
          try {
            {
              const _0x1ee05a = _0x3bc993?.["actionUrl"] || _0x572a0e?.["actionUrl"] || "",
                _0x59c354 = _0x572a0e?.["landingPageUrl"] || _0x572a0e?.["h5Url"] || _0x1ee05a || "",
                _0x199bb8 = _0x572a0e?.["appDownloadUrl"] || _0x572a0e?.["downloadUrl"] || _0x3bc993?.["downloadUrl"] || "",
                _0x1813cf = _0x572a0e?.["appName"] || _0x572a0e?.["adTitle"] || _0x33b1d9 || "未知应用",
                _0x9b9387 = _0x572a0e?.["packageSize"] || _0x572a0e?.["appSize"] || 0,
                _0x170a60 = _0x572a0e?.["packageName"] || "",
                _0x165e6e = _0x3e0ece?.["reportToken"] || _0x572a0e?.["reportToken"] || "";
              if (_0x59c354 || _0x199bb8) {
                _0x2bcd87 = {
                  "landingUrl": _0x59c354,
                  "downloadUrl": _0x199bb8,
                  "appName": _0x1813cf,
                  "packageSize": _0x9b9387,
                  "packageName": _0x170a60,
                  "reportToken": _0x165e6e
                };
              }
            }
          } catch (_0x2afd2a) {}
          const _0x3b55ec = _0x572a0e.enableJumpToLive ? true : false,
            _0x29f72e = Math.round((_0x1bb92e || 0) / 1000),
            _0x2e0cdc = Math.round(_0x2be342 / 1000),
            _0x5d7827 = Math.round(_0x3c6a4c / 1000),
            _0x5eea44 = _0x29f72e > 0 ? _0x29f72e + "s" : _0x2e0cdc + "-" + _0x5d7827 + "s";
          console.log("⏱️ " + this.getAccountDisplayName() + " " + _0x29a990.name + " 观看时间" + _0x5eea44);
          return {
            "cid": _0x3bc993.creativeId,
            "llsid": _0x14ba13,
            "hasRewardEnd": _0x45207d,
            "expectedCoins": _0x34b718,
            "conversionInfo": _0x2bcd87,
            "adExtInfo": _0x1e1d5f,
            "materialTime": _0x42e985,
            "watchAdTime": _0x1bb92e,
            "liveStreamId": _0x2e5aa3,
            "tracks": _0x3f7b07,
            "callbackParam": _0x27f62b,
            "extraTask": _0xdc0a04,
            "neoparams": _0x1356b1,
            "posid": _0x2ad086,
            "sessionid": _0x55d666,
            "feedId": _0x5e32a8,
            "feedtype": _0x5f2281,
            "awardCoin": _0x3e73b6,
            "isMixedAd": _0x1d8729,
            "isLiveAd": _0x3b55ec
          };
        }
        this.adInfoFailCount++;
        const _0x48fbff = _0x4ab3ed ? JSON.stringify(_0x4ab3ed).substring(0, 300) : "无响应";
        console.log("❌ " + this.getAccountDisplayName() + " 广告获取失败(" + _0x48fbff + ") " + this.adInfoFailCount + "/" + this.maxAdInfoFailCount);
        this.adInfoFailCount >= this.maxAdInfoFailCount && (console.log("🚨 " + this.getAccountDisplayName() + " 广告失败超限，停止运行"), this.stopAllTasks = true);
        return null;
      } catch (_0x2f4a8f) {
        {
          console.log("❌ " + this.getAccountDisplayName() + " 广告获取异常: " + _0x2f4a8f.message);
          this.adInfoFailCount++;
          console.log("❌ " + this.getAccountDisplayName() + " 广告获取失败 " + this.adInfoFailCount + "/" + this.maxAdInfoFailCount);
          if (this.adInfoFailCount >= this.maxAdInfoFailCount) {
            console.log("🚨 " + this.getAccountDisplayName() + " 广告失败超限，停止运行");
            this.stopAllTasks = true;
          }
          return null;
        }
      }
    }
    async ["preSub"](_0x57af59, _0x24904d, _0x1c5e1d) {
      try {
        const _0xc0da1f = {
            "bizStr": JSON.stringify({
              "pageId": _0x1c5e1d.pageId || (this.version === "nebula" ? 11101 : 100011251),
              "subPageId": _0x1c5e1d.subPageId,
              "posId": _0x1c5e1d.posId,
              "taskId": _0x1c5e1d.businessId,
              "items": [{
                "basicType": 2,
                "creativeId": _0x57af59,
                "llsid": _0x24904d,
                "mediaType": "video"
              }]
            }),
            "cs": "false",
            "client_key": this.version === "nebula" ? "2ac2a76d" : "3c2cd3f3",
            "videoModelCrowdTag": "",
            "os": "android",
            "kuaishou.api_st": this.kuaishouApiSt
          },
          _0x1d0360 = Object.entries(_0xc0da1f).map(([_0x1e348c, _0x1ff3c6]) => _0x1e348c + "=" + encodeURIComponent(_0x1ff3c6)).join("&"),
          _0x5e3f6d = this.queryParams + "&" + _0x1d0360,
          _0x5a4bd4 = await this.requestSignService({
            "urlpath": "/rest/r/ad/exposure/report",
            "reqdata": _0x5e3f6d,
            "api_client_salt": this.salt
          }, this.getAccountDisplayName() + " 曝光预加载");
        if (!_0x5a4bd4) return false;
        if (_0x5a4bd4.kaw) this.headers.kaw = _0x5a4bd4.kaw;
        if (_0x5a4bd4.kas) this.headers.kas = _0x5a4bd4.kas;
        const _0x46e93e = "https://api.e.kuaishou.com/rest/r/ad/exposure/report?" + (this.queryParams + "&sig=" + _0x5a4bd4.sig + "&__NS_sig3=" + _0x5a4bd4.__NS_sig3 + "&__NS_xfalcon=" + (_0x5a4bd4.xfalcon || "") + "&__NStokensig=" + _0x5a4bd4.__NStokensig),
          {
            response: _0x19037f,
            body: _0x21bdfa
          } = await _0x7f8c93({
            "method": "POST",
            "url": _0x46e93e,
            "headers": {
              "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
              "Host": "api.e.kuaishou.com",
              "User-Agent": "kwai-android aegon/4.32.0",
              "X-REQUESTID": String(Date.now()) + String(Math.floor(Math.random() * 100000)).padStart(5, "0"),
              "Accept-Language": "zh-cn",
              "Cookie": this.version === "nebula" ? "kuaishou.api_st=" + this.kuaishouApiSt + ";__NSWJ=;" : "kuaishou_api_st=" + this.kuaishouApiSt,
              ...(_0x5a4bd4.kaw ? {
                "kaw": _0x5a4bd4.kaw
              } : {}),
              ...(_0x5a4bd4.kas ? {
                "kas": _0x5a4bd4.kas
              } : {})
            },
            "body": _0x1d0360,
            "timeout": 12000
          }, this.proxyUrl, this.getAccountDisplayName() + " 曝光上报");
        return _0x21bdfa && _0x21bdfa.result === 1 ? true : (console.log("⚠️ " + this.getAccountDisplayName() + " 曝光上报返回: " + JSON.stringify(_0x21bdfa || {}).substring(0, 200)), false);
      } catch (_0x5c99fb) {
        console.log("⚠️ " + this.getAccountDisplayName() + " 曝光预加载异常: " + _0x5c99fb.message);
        return false;
      }
    }
    async ["trackApi"](_0xd86a15) {
      try {
        if (!_0xd86a15) return;
        await _0x7f8c93({
          "method": "GET",
          "url": _0xd86a15,
          "headers": {
            "User-Agent": "kwai-android aegon/3.56.0"
          },
          "timeout": 10000
        }, this.proxyUrl);
      } catch (_0x21f180) {}
    }
    async ["generateSignature"](_0x24dd06, _0xf3cc71, _0x43d8fc, _0x5b2db2, _0x3bf9e2 = 40000, _0x2be70e = null, _0x540820 = []) {
      try {
        {
          const _0x3c85ad = _0x2be70e && _0x2be70e.adExtInfo ? _0x2be70e.adExtInfo : "",
            _0x993a4a = _0x2be70e && _0x2be70e.neoparams ? _0x2be70e.neoparams : "",
            _0x39c2ff = _0x2be70e && _0x2be70e.posid ? _0x2be70e.posid : _0x5b2db2.posId,
            _0x1d1acb = _0x2be70e && _0x2be70e.feedId ? _0x2be70e.feedId : {},
            _0x15c527 = _0x2be70e && _0x2be70e.feedtype ? _0x2be70e.feedtype : 0,
            _0x3c4260 = _0x15c527 ? "live" : "video",
            _0xbb68e4 = _0x2be70e && _0x2be70e.awardCoin !== null && _0x2be70e.awardCoin !== undefined ? _0x2be70e.awardCoin : 0,
            _0x4f185f = _0x2be70e && _0x2be70e.watchAdTime ? _0x2be70e.watchAdTime : 30000,
            _0x1f2dc7 = _0x2be70e && _0x2be70e.sessionid ? _0x2be70e.sessionid : "adNeo-" + this.userId + "-" + _0x5b2db2.subPageId + "-" + Date.now(),
            _0xdbf17c = Math.floor(_0x4f185f / 1000),
            _0x117be5 = Date.now(),
            _0x5851b4 = _0x117be5 - _0x4f185f,
            _0xd722 = _0x117be5,
            _0x424b51 = this.lastConversionInfo && this.lastConversionInfo.hasConversion ? this.lastConversionInfo : null,
            _0x25ff57 = this.version === "kuaishou" && _0x424b51,
            _0x8aa605 = _0x25ff57 ? [{
              "apkName": _0x424b51.apkName || _0x424b51.appName || _0x424b51.packageName || "unknown",
              "downloadTime": _0x424b51.downloadTime || _0x117be5,
              "installStatus": 1
            }] : [],
            _0x1d4b94 = _0x25ff57 ? JSON.stringify({
              "downloadApps": _0x8aa605
            }) : "";
          let _0x284d49 = [];
          if (this.version === "kuaishou") {
            {
              if (_0x1e3010 === 2) _0x284d49 = [{
                "creativeId": _0x24dd06,
                "extInfo": _0x993a4a,
                ..._0x1d1acb,
                "llsid": _0xf3cc71,
                "adExtInfo": _0x3c85ad,
                "materialTime": _0x2be70e ? _0x2be70e.materialTime : 30000,
                "watchAdTime": _0x2be70e ? _0x2be70e.watchAdTime : 26000,
                "requestSceneType": 7,
                "taskType": 1,
                "watchExpId": "",
                "watchStage": 0
              }];else {
                if (_0x1e3010 === 3 && !this.extraRewardDisabled && _0x424b51) _0xbb68e4 === 1 || _0xbb68e4 === "1" || !_0xbb68e4 ? _0x284d49 = [{
                  "creativeId": _0x24dd06,
                  "extInfo": _0x993a4a,
                  ..._0x1d1acb,
                  "llsid": _0xf3cc71,
                  "adExtInfo": _0x3c85ad,
                  "requestSceneType": _0x5b2db2.requestSceneType,
                  "taskType": 23,
                  "watchExpId": "",
                  "watchStage": 0
                }, {
                  "creativeId": _0x24dd06,
                  "extInfo": _0x993a4a,
                  ..._0x1d1acb,
                  "llsid": _0xf3cc71,
                  "adExtInfo": _0x3c85ad,
                  "requestSceneType": 1,
                  "taskType": 1,
                  "watchExpId": "",
                  "watchStage": 0
                }] : _0x284d49 = [{
                  "creativeId": _0x24dd06,
                  "extInfo": _0x993a4a,
                  ..._0x1d1acb,
                  "llsid": _0xf3cc71,
                  "adExtInfo": _0x3c85ad,
                  "requestSceneType": 1,
                  "taskType": 1,
                  "watchExpId": "",
                  "watchStage": 0
                }, {
                  "creativeId": _0x24dd06,
                  "extInfo": _0x993a4a,
                  ..._0x1d1acb,
                  "llsid": _0xf3cc71,
                  "adExtInfo": _0x3c85ad,
                  "requestSceneType": 7,
                  "taskType": 2,
                  "watchExpId": "",
                  "watchStage": 0
                }, {
                  "creativeId": _0x24dd06,
                  "extInfo": _0x993a4a,
                  ..._0x1d1acb,
                  "llsid": _0xf3cc71,
                  "adExtInfo": _0x3c85ad,
                  "requestSceneType": _0x5b2db2.requestSceneType,
                  "taskType": 4,
                  "watchExpId": "",
                  "watchStage": 0
                }, {
                  "creativeId": _0x24dd06,
                  "extInfo": _0x993a4a,
                  ..._0x1d1acb,
                  "llsid": _0xf3cc71,
                  "adExtInfo": _0x3c85ad,
                  "requestSceneType": _0x5b2db2.requestSceneType,
                  "taskType": 6,
                  "watchExpId": "",
                  "watchStage": 0
                }, {
                  "creativeId": _0x24dd06,
                  "extInfo": _0x993a4a,
                  ..._0x1d1acb,
                  "llsid": _0xf3cc71,
                  "adExtInfo": _0x3c85ad,
                  "requestSceneType": 7,
                  "taskType": 20,
                  "watchExpId": "",
                  "watchStage": 0
                }, {
                  "creativeId": _0x24dd06,
                  "extInfo": _0x993a4a,
                  ..._0x1d1acb,
                  "llsid": _0xf3cc71,
                  "adExtInfo": _0x3c85ad,
                  "requestSceneType": _0x5b2db2.requestSceneType,
                  "taskType": 23,
                  "watchExpId": "",
                  "watchStage": 0
                }];else {
                  _0x284d49 = [{
                    "creativeId": _0x24dd06,
                    "extInfo": _0x993a4a,
                    ..._0x1d1acb,
                    "llsid": _0xf3cc71,
                    "adExtInfo": _0x3c85ad,
                    "inflow": false,
                    "materialTime": _0xdbf17c,
                    "watchAdTime": _0xdbf17c,
                    "requestSceneType": _0x2be70e && _0x2be70e.requestSceneType ? _0x2be70e.requestSceneType : _0x5b2db2.requestSceneType,
                    "taskType": _0x5b2db2.taskType,
                    "watchExpId": "",
                    "watchStage": 0
                  }];
                }
              }
              _0x1e3010 !== 2 && _0x25ff57 && !_0x284d49.some(_0x55b7c2 => _0x55b7c2 && _0x55b7c2.taskType === 3) && _0x284d49.push({
                "creativeId": _0x24dd06,
                "extInfo": _0x993a4a,
                ..._0x1d1acb,
                "llsid": _0xf3cc71,
                "adExtInfo": _0x3c85ad,
                "requestSceneType": 1,
                "taskType": 3,
                "watchExpId": "",
                "watchStage": 0
              });
            }
          } else {
            const _0xfe759c = JSON.stringify({
                "downloadApps": 1,
                "installApps": 1
              }),
              _0x22e04c = JSON.stringify({
                "downloadApps": 0,
                "installApps": 0
              }),
              _0x5520f8 = {
                "clientExtInfo": JSON.stringify({
                  "serialPaySuccess": false
                }),
                "creativeId": _0x24dd06,
                "llsid": _0xf3cc71,
                "adExtInfo": _0x3c85ad,
                "inflow": false,
                "materialTime": 26,
                "watchExpId": "",
                "watchStage": 0
              };
            if (_0x1e3010 === 2) _0x284d49 = [{
              ..._0x5520f8,
              "extInfo": _0x22e04c,
              "requestSceneType": 7,
              "taskType": 1
            }];else {
              if (_0x1e3010 === 3 && _0x424b51) _0xbb68e4 === 1 || _0xbb68e4 === "1" || !_0xbb68e4 ? _0x284d49 = [{
                ..._0x5520f8,
                "extInfo": _0xfe759c,
                "requestSceneType": _0x5b2db2.requestSceneType,
                "taskType": 23
              }, {
                ..._0x5520f8,
                "extInfo": _0xfe759c,
                "requestSceneType": 1,
                "taskType": 1
              }] : _0x284d49 = [{
                ..._0x5520f8,
                "extInfo": _0xfe759c,
                "requestSceneType": 1,
                "taskType": 2
              }, {
                ..._0x5520f8,
                "extInfo": _0xfe759c,
                "requestSceneType": 7,
                "taskType": 2
              }], _0x284d49.push({
                ..._0x5520f8,
                "extInfo": _0xfe759c,
                "requestSceneType": 1,
                "taskType": 3
              });else _0x1e3010 === 1 && _0x424b51 ? _0x284d49 = [{
                ..._0x5520f8,
                "extInfo": _0xfe759c,
                "requestSceneType": _0x5b2db2.requestSceneType,
                "taskType": _0x5b2db2.taskType
              }, {
                ..._0x5520f8,
                "extInfo": _0xfe759c,
                "requestSceneType": 1,
                "taskType": 3
              }] : _0x284d49 = [{
                ..._0x5520f8,
                "extInfo": _0x22e04c,
                "requestSceneType": _0x5b2db2.requestSceneType,
                "taskType": _0x5b2db2.taskType
              }];
            }
          }
          if (_0x1e3010 === 2 && _0x540820 && _0x540820.length > 0) {
            if (_0x25ff57) {
              if (this.version === "kuaishou") _0x284d49.push({
                "creativeId": _0x24dd06,
                "extInfo": _0x993a4a,
                ..._0x1d1acb,
                "llsid": _0xf3cc71,
                "adExtInfo": _0x3c85ad,
                "requestSceneType": 1,
                "taskType": 3,
                "watchExpId": "",
                "watchStage": 0
              });else {
                {
                  const _0x4dd762 = JSON.stringify({
                    "downloadApps": 1,
                    "installApps": 1
                  });
                  _0x284d49.push({
                    "clientExtInfo": JSON.stringify({
                      "serialPaySuccess": false
                    }),
                    "creativeId": _0x24dd06,
                    "llsid": _0xf3cc71,
                    "adExtInfo": _0x3c85ad,
                    "inflow": false,
                    "materialTime": 26,
                    "watchExpId": "",
                    "watchStage": 0,
                    "extInfo": _0x4dd762,
                    "requestSceneType": 1,
                    "taskType": 3
                  });
                }
              }
            }
            for (const _0x5debb4 of _0x540820) {
              if (!_0x5debb4 || !_0x5debb4.cid) continue;
              const _0x468f72 = this.version === "kuaishou" ? {
                "creativeId": _0x5debb4.cid,
                "extInfo": _0x5debb4.neoparams || "",
                ...(_0x5debb4.feedId || {}),
                "llsid": _0x5debb4.llsid || "",
                "materialTime": _0x5debb4.materialTime || 30000,
                "watchAdTime": _0x5debb4.watchAdTime || 26000,
                "requestSceneType": 7,
                "taskType": 2,
                "watchExpId": "",
                "watchStage": 0
              } : {
                "clientExtInfo": JSON.stringify({
                  "serialPaySuccess": false
                }),
                "creativeId": _0x5debb4.cid,
                "llsid": _0x5debb4.llsid || "",
                "adExtInfo": _0x5debb4.adExtInfo || "",
                "inflow": false,
                "materialTime": _0x5debb4.materialTime || 30000,
                "watchAdTime": _0x5debb4.watchAdTime || 26000,
                "extInfo": JSON.stringify({
                  "downloadApps": 0,
                  "installApps": 0
                }),
                "requestSceneType": 7,
                "taskType": 2,
                "watchExpId": "",
                "watchStage": 0
              };
              this.version === "kuaishou" && _0x5debb4.adExtInfo && (_0x468f72.adExtInfo = _0x5debb4.adExtInfo, _0x468f72.clientExtInfo = JSON.stringify({
                "serialPaySuccess": false
              }), _0x468f72.inflow = false);
              _0x284d49.push(_0x468f72);
              const _0x49bb6a = !!(_0x5debb4.adExtInfo || _0x5debb4.conversionInfo);
              _0x49bb6a && (this.version === "kuaishou" ? _0x284d49.push({
                "creativeId": _0x5debb4.cid,
                "extInfo": _0x5debb4.neoparams || "",
                ...(_0x5debb4.feedId || {}),
                "llsid": _0x5debb4.llsid || "",
                "adExtInfo": _0x5debb4.adExtInfo || "",
                "requestSceneType": 1,
                "taskType": 3,
                "watchExpId": "",
                "watchStage": 0
              }) : _0x284d49.push({
                "clientExtInfo": JSON.stringify({
                  "serialPaySuccess": false
                }),
                "creativeId": _0x5debb4.cid,
                "llsid": _0x5debb4.llsid || "",
                "adExtInfo": _0x5debb4.adExtInfo || "",
                "inflow": false,
                "materialTime": 26,
                "watchExpId": "",
                "watchStage": 0,
                "extInfo": JSON.stringify({
                  "downloadApps": 1,
                  "installApps": 1
                }),
                "requestSceneType": 1,
                "taskType": 3
              }));
            }
          }
          const _0x46d162 = _0x5b2db2.businessId,
            _0x54d4b3 = JSON.stringify({
              "businessId": _0x46d162,
              "endTime": _0xd722,
              "extParams": _0x1d4b94,
              "mediaScene": _0x3c4260,
              "neoInfos": _0x284d49,
              "pageId": _0x5b2db2.pageId || (this.version === "nebula" ? 11101 : 100011251),
              "posId": _0x39c2ff,
              "reportType": 0,
              "sessionId": _0x1f2dc7,
              "startTime": _0x5851b4,
              "subPageId": _0x5b2db2.subPageId
            }),
            _0x38800b = this.version === "nebula" ? "2ac2a76d" : "3c2cd3f3";
          if (this.version === "kuaishou") {
            const _0x2f68a2 = "bizStr=" + encodeURIComponent(_0x54d4b3) + "&cs=false&client_key=" + _0x38800b + "&kuaishou.api_st=" + this.kuaishouApiSt,
              _0x550fd6 = this.queryParams + "&" + _0x2f68a2,
              _0x39d699 = await this.requestSignService({
                "urlpath": this.taskReportPath,
                "reqdata": _0x550fd6,
                "api_client_salt": this.salt
              }, this.getAccountDisplayName() + " 生成报告签名");
            if (!_0x39d699) return console.log("❌ " + this.getAccountDisplayName() + " 生成报告签名失败"), null;
            if (_0x39d699.kaw) this.headers.kaw = _0x39d699.kaw;
            if (_0x39d699.kas) this.headers.kas = _0x39d699.kas;
            return {
              "sig": _0x39d699.sig,
              "sig3": _0x39d699.__NS_sig3,
              "xfalcon": _0x39d699.xfalcon || "",
              "sigtoken": _0x39d699.__NStokensig,
              "post": _0x2f68a2
            };
          } else {
            {
              const _0x3f536b = "bizStr=" + encodeURIComponent(_0x54d4b3) + "&cs=false&client_key=" + _0x38800b + "&kuaishou.api_st=" + this.kuaishouApiSt,
                _0x27a9ad = this.queryParams + "&" + _0x3f536b,
                _0x38c71c = await this.requestSignService({
                  "urlpath": this.taskReportPath,
                  "reqdata": _0x27a9ad,
                  "api_client_salt": this.salt
                }, this.getAccountDisplayName() + " 生成报告签名");
              if (!_0x38c71c) return console.log("❌ " + this.getAccountDisplayName() + " 生成报告签名失败"), null;
              if (_0x38c71c.kaw) this.headers.kaw = _0x38c71c.kaw;
              if (_0x38c71c.kas) this.headers.kas = _0x38c71c.kas;
              return {
                "sig": _0x38c71c.sig,
                "sig3": _0x38c71c.__NS_sig3,
                "xfalcon": _0x38c71c.xfalcon || "",
                "sigtoken": _0x38c71c.__NStokensig,
                "post": _0x3f536b
              };
            }
          }
        }
      } catch (_0xf95b30) {
        console.log("❌ " + this.getAccountDisplayName() + " 生成签名异常: " + _0xf95b30.message);
        return null;
      }
    }
    async ["submitReport"](_0x2f5045, _0x1fe6b0, _0x21ea53, _0x4f2ef9, _0x728604, _0x26a7ac, _0xe5c318 = null, _0x39393e = "") {
      try {
        {
          let _0x141b48, _0x330a1c, _0x2a9adb;
          const _0x4fbda3 = _0x39393e || "";
          if (this.version === "kuaishou") {
            _0x141b48 = "https://api.e.kuaishou.com" + this.taskReportPath + "?" + (this.queryParams + "&sig=" + _0x2f5045 + "&__NS_sig3=" + _0x1fe6b0 + "&__NS_xfalcon=" + _0x4fbda3 + "&__NStokensig=" + _0x21ea53);
            _0x330a1c = _0x4f2ef9;
            _0x2a9adb = {
              "Host": "api.e.kuaishou.com",
              "Accept-Language": "zh-cn",
              "X-REQUESTID": String(Date.now()) + String(Math.floor(Math.random() * 100000)).padStart(5, "0"),
              "User-Agent": "kwai-android aegon/4.32.0",
              "Content-Type": "application/x-www-form-urlencoded",
              "Cookie": "kuaishou_api_st=" + this.kuaishouApiSt
            };
          } else _0x141b48 = "https://api.e.kuaishou.com" + this.taskReportPath + "?" + (this.queryParams + "&sig=" + _0x2f5045 + "&__NS_sig3=" + _0x1fe6b0 + "&__NS_xfalcon=" + _0x4fbda3 + "&__NStokensig=" + _0x21ea53), _0x330a1c = _0x4f2ef9, _0x2a9adb = {
            "Host": "api.e.kuaishou.com",
            "Accept-Language": "zh-cn",
            "X-REQUESTID": String(Date.now()) + String(Math.floor(Math.random() * 100000)).padStart(5, "0"),
            "User-Agent": "kwai-android aegon/4.32.0",
            "Content-Type": "application/x-www-form-urlencoded",
            "Cookie": "kuaishou_api_st=" + this.kuaishouApiSt,
            ...(this.headers.kaw ? {
              "kaw": this.headers.kaw
            } : {}),
            ...(this.headers.kas ? {
              "kas": this.headers.kas
            } : {})
          };
          const {
            response: _0x3e0cab,
            body: _0x277b7e
          } = await _0x7f8c93({
            "method": "POST",
            "url": _0x141b48,
            "headers": _0x2a9adb,
            "body": _0x330a1c,
            "timeout": 12000
          }, this.proxyUrl, this.getAccountDisplayName() + " 提交任务");
          if (!_0x277b7e) {
            {
              this.totalRewardFailCount++;
              if (this.taskRewardFailCount[_0x728604] !== undefined) this.taskRewardFailCount[_0x728604]++;
              const _0x46922f = this.taskRewardFailCount[_0x728604] || 0;
              console.log("⚠️ " + this.getAccountDisplayName() + " " + _0x26a7ac.name + " 无响应 连续失败" + _0x46922f + "/" + this.lowRewardLimit);
              _0x165a83 && !this.extraRewardDisabled && _0x46922f >= _0x559179 && (this.extraRewardDisabled = true, console.log("🔄 " + this.getAccountDisplayName() + " " + _0x26a7ac.name + " 奖励失败" + _0x559179 + "次，关闭直播额外奖励"));
              _0x46922f >= this.lowRewardLimit && (console.log("🚫 " + this.getAccountDisplayName() + " " + _0x26a7ac.name + " 连续失败" + this.lowRewardLimit + "次，停止该任务"), this.taskDisabled[_0x728604] = true);
              return {
                "success": false,
                "reward": 0,
                "rewardFailed": true
              };
            }
          }
          if (_0x277b7e.result === 1 || _0x277b7e.result === 500) {
            {
              if (this.taskRewardFailCount[_0x728604] !== undefined) this.taskRewardFailCount[_0x728604] = 0;
              const _0x8df53 = _0x277b7e.data?.["neoAmount"] || 0,
                _0x439994 = _0x277b7e.data?.["deepCompletedCount"] || 0;
              let _0x494241 = _0x8df53,
                _0xdd3e17 = 0;
              try {
                const _0x45039b = _0x277b7e.data?.["taskNeoDetail"];
                if (_0x45039b) {
                  const _0x31b8e1 = typeof _0x45039b === "string" ? JSON.parse(_0x45039b) : _0x45039b;
                  if (Array.isArray(_0x31b8e1)) {
                    _0x494241 = 0;
                    for (const _0x42f2e3 of _0x31b8e1) {
                      _0x42f2e3.taskType === 3 ? _0xdd3e17 += _0x42f2e3.amount || 0 : _0x494241 += _0x42f2e3.amount || 0;
                    }
                  }
                }
              } catch (_0xfacb04) {}
              const _0x2961da = _0x439994 > 0 && _0xdd3e17 > 0;
              if (_0x2961da) this.conversionExtraCoins += _0xdd3e17;else {
                if (_0x165a83 && !this.extraRewardDisabled) this.extraRewardFailCount++, this.extraRewardFailCount >= _0x30ba33 && (this.extraRewardDisabled = true, console.log("🔄 " + this.getAccountDisplayName() + " 无额外奖励" + _0x30ba33 + "次，已关闭"));else _0xdd3e17 > 0 && (this.conversionExtraCoins += _0xdd3e17);
              }
              return {
                "success": true,
                "reward": _0x8df53,
                "basicReward": _0x494241,
                "extraReward": _0xdd3e17,
                "deepCount": _0x439994
              };
            }
          }
          if ([20107, 20108, 1003, 415].includes(_0x277b7e.result)) return console.log("🚫 " + this.getAccountDisplayName() + " " + _0x26a7ac.name + " 已达上限"), this.taskLimitReached[_0x728604] = true, {
            "success": false,
            "reward": 0,
            "limitReached": true
          };
          this.totalRewardFailCount++;
          if (this.taskRewardFailCount[_0x728604] !== undefined) this.taskRewardFailCount[_0x728604]++;
          const _0x4896ea = this.taskRewardFailCount[_0x728604] || 0;
          console.log("❌ " + this.getAccountDisplayName() + " " + _0x26a7ac.name + " 奖励失败(" + _0x277b7e.result + ") 连续" + _0x4896ea + "/" + this.lowRewardLimit);
          if (_0x165a83 && !this.extraRewardDisabled && _0x4896ea >= _0x559179) {
            this.extraRewardDisabled = true;
            console.log("🔄 " + this.getAccountDisplayName() + " " + _0x26a7ac.name + " 奖励失败" + _0x559179 + "次，关闭直播额外奖励");
          }
          _0x4896ea >= this.lowRewardLimit && (console.log("🚫 " + this.getAccountDisplayName() + " " + _0x26a7ac.name + " 连续失败" + this.lowRewardLimit + "次，停止该任务"), this.taskDisabled[_0x728604] = true);
          return {
            "success": false,
            "reward": 0,
            "rewardFailed": true
          };
        }
      } catch (_0x2e5299) {
        this.totalRewardFailCount++;
        if (this.taskRewardFailCount[_0x728604] !== undefined) this.taskRewardFailCount[_0x728604]++;
        const _0xd7bc98 = this.taskRewardFailCount[_0x728604] || 0;
        console.log("❌ " + this.getAccountDisplayName() + " " + _0x26a7ac.name + " 提交异常: " + _0x2e5299.message + " 连续" + _0xd7bc98 + "/" + this.lowRewardLimit);
        _0x165a83 && !this.extraRewardDisabled && _0xd7bc98 >= _0x559179 && (this.extraRewardDisabled = true, console.log("🔄 " + this.getAccountDisplayName() + " " + _0x26a7ac.name + " 奖励失败" + _0x559179 + "次，关闭直播额外奖励"));
        if (_0xd7bc98 >= this.lowRewardLimit) {
          console.log("🚫 " + this.getAccountDisplayName() + " " + _0x26a7ac.name + " 连续失败" + this.lowRewardLimit + "次，停止该任务");
          this.taskDisabled[_0x728604] = true;
        }
        return {
          "success": false,
          "reward": 0,
          "rewardFailed": true
        };
      }
    }
    ["_randomDelay"](_0x2bd2f8, _0xbeeac4) {
      return Math.floor(Math.random() * (_0xbeeac4 - _0x2bd2f8) + _0x2bd2f8);
    }
    ["_randomPackageSize"]() {
      return (Math.random() * 80 + 15).toFixed(1);
    }
    async ["simulateAdClick"](_0x225f6a) {
      await new Promise(_0x4b2a37 => setTimeout(_0x4b2a37, this._randomDelay(300, 800)));
    }
    async ["simulateLandingPageBrowse"](_0x4051e8, _0x19aef0) {
      {
        const _0x505616 = this._randomDelay(_0x561beb, _0x4c9318);
        await new Promise(_0x3d8ab3 => setTimeout(_0x3d8ab3, _0x505616));
        const _0x38830f = this._randomDelay(_0x2018f9, _0x4249ff);
        await new Promise(_0x131107 => setTimeout(_0x131107, _0x38830f));
        const _0x43ba01 = this._randomDelay(_0x2018f9, _0x4249ff);
        await new Promise(_0x3ef4f8 => setTimeout(_0x3ef4f8, _0x43ba01));
        await new Promise(_0x28f6bf => setTimeout(_0x28f6bf, this._randomDelay(500, 1000)));
      }
    }
    async ["simulateAppDownload"](_0x586d6e, _0x3796a8, _0x4a61da) {
      {
        const _0x12ddf0 = this._randomDelay(_0x32e19e, _0x31ba80),
          _0x100302 = [20, 40, 60, 80, 100],
          _0x358a7d = Math.floor(_0x12ddf0 / _0x100302.length);
        for (const _0xd5d63e of _0x100302) {
          await new Promise(_0x18d257 => setTimeout(_0x18d257, _0x358a7d));
        }
        return _0x12ddf0;
      }
    }
    async ["simulateAppInstall"](_0xeadf5f) {
      const _0x5a9def = this._randomDelay(_0xbe4c38, _0x310208);
      await new Promise(_0x2a91dd => setTimeout(_0x2a91dd, _0x5a9def));
      return _0x5a9def;
    }
    async ["executeAdConversion"](_0x341af3, _0x57300a) {
      if (!_0x57300a) return 0;
      const _0x29d0a1 = this.getAccountDisplayName(),
        _0x10bbbf = Date.now();
      try {
        {
          const _0x576506 = (_0x561beb + _0x4c9318) / 2,
            _0x765431 = (_0x2018f9 + _0x4249ff) * 2 / 2 + 750,
            _0x53b003 = (_0x32e19e + _0x31ba80) / 2,
            _0x432969 = (_0xbe4c38 + _0x310208) / 2,
            _0x314d0f = Math.round((_0x576506 + _0x765431 + _0x53b003 + _0x432969) / 1000);
          await this.simulateAdClick(_0x341af3);
          _0x57300a.landingUrl && (await this.simulateLandingPageBrowse(_0x341af3, _0x57300a.landingUrl));
          (_0x57300a.downloadUrl || _0x57300a.landingUrl) && (await this.simulateAppDownload(_0x341af3, _0x57300a.downloadUrl || _0x57300a.landingUrl, _0x57300a.packageSize));
          await this.simulateAppInstall(_0x341af3);
          this.lastConversionInfo = {
            "hasConversion": true,
            "apkName": _0x57300a.appName || _0x57300a.downloadUrl || _0x57300a.landingUrl || "unknown",
            "appName": _0x57300a.appName || "未知应用",
            "packageName": _0x57300a.packageName || "",
            "downloadTime": Date.now()
          };
          this.conversionSuccessCount++;
          return Math.round((Date.now() - _0x10bbbf) / 1000);
        }
      } catch (_0x4ef60d) {
        console.log("❌ " + _0x29d0a1 + " " + _0x341af3 + " 广告转化异常: " + _0x4ef60d.message);
        this.conversionFailCount++;
        return Math.round((Date.now() - _0x10bbbf) / 1000);
      }
    }
    async ["executeTask"](_0x10c7e2, _0x2ef3eb = "") {
      const _0x5c3339 = this.taskConfigs[_0x10c7e2];
      if (!_0x5c3339) {
        console.log("❌ " + this.getAccountMark() + " 未知任务: " + _0x10c7e2);
        return {
          "success": false
        };
      }
      if (this.stopAllTasks) return console.log("🏁 " + this.getAccountMark() + " 因金币达到上限，停止执行 " + _0x5c3339.name + " 任务"), {
        "success": false,
        "coinLimitReached": true
      };
      if (this.taskLimitReached[_0x10c7e2]) return console.log("⚠️ " + this.getAccountMark() + " " + _0x5c3339.name + " 已达上限，跳过"), {
        "success": false,
        "limitReached": true
      };
      if (this.taskStopped[_0x10c7e2]) return console.log("⚠️ " + this.getAccountMark() + " " + _0x5c3339.name + " 因连续低奖励被停止，跳过"), {
        "success": false,
        "taskStopped": true
      };
      try {
        {
          const _0x606fd6 = {
            ..._0x5c3339
          };
          _0x10c7e2 === "search" && _0x2ef3eb && console.log("🔍 " + this.getAccountMark() + " 搜索: " + _0x2ef3eb);
          let _0x22809d = null,
            _0x5e8e01 = 0;
          const _0x47300d = 10;
          while (!_0x22809d && !this.stopAllTasks && _0x5e8e01 < _0x47300d) {
            {
              _0x5e8e01++;
              _0x22809d = await this.getAdInfo(_0x606fd6);
              if (_0x22809d) break;
              !_0x22809d && !this.stopAllTasks && _0x5e8e01 < _0x47300d && (console.log("⏱ " + this.getAccountDisplayName() + " 跳过直播广告，重试(" + _0x5e8e01 + "/" + _0x47300d + ")"), await new Promise(_0x29b661 => setTimeout(_0x29b661, 3000)));
            }
          }
          !_0x22809d && _0x5e8e01 >= _0x47300d && console.log("❌ " + this.getAccountDisplayName() + " 连续" + _0x47300d + "次广告失败，跳过");
          if (!_0x22809d) return this.taskStats[_0x10c7e2].failed++, {
            "success": false,
            "reward": 0,
            "hasRewardEnd": false
          };
          let _0x2abcb3 = [];
          if (_0x1e3010 === 2) {
            for (let _0x539679 = 0; _0x539679 < 1; _0x539679++) {
              try {
                await new Promise(_0x5c169c => setTimeout(_0x5c169c, 1000 + Math.floor(Math.random() * 1000)));
                const _0xb9d3b1 = await this.getAdInfo(_0x606fd6);
                if (_0xb9d3b1 && _0xb9d3b1.cid !== _0x22809d.cid) {
                  _0x2abcb3.push(_0xb9d3b1);
                }
              } catch (_0xda35a2) {}
            }
          }
          let _0x393012 = _0x22809d.watchAdTime || 0;
          (!_0x393012 || _0x393012 <= 0) && (_0x393012 = Math.floor(Math.random() * (_0x3c6a4c - _0x2be342 + 1)) + _0x2be342);
          const _0x56353b = _0x393012 + Math.floor(Math.random() * 6000) + 2000,
            _0x516258 = _0x22809d.isLiveAd ? "直播广告" : "广告",
            _0x52dbaf = (_0x561beb + _0x4c9318) / 2,
            _0x4b6c42 = (_0x2018f9 + _0x4249ff) * 2 / 2 + 750,
            _0x37b582 = (_0x32e19e + _0x31ba80) / 2,
            _0x5660e1 = (_0xbe4c38 + _0x310208) / 2,
            _0x5448ba = Math.round((_0x52dbaf + _0x4b6c42 + _0x37b582 + _0x5660e1) / 1000),
            _0x30792c = _0x22809d.conversionInfo && (_0x1e3010 === 1 || _0x1e3010 === 2 || _0x1e3010 === 3),
            _0x78e361 = _0x30792c ? " 🎯深度转化 模式=" + _0x1e3010 + " 应用=" + (_0x22809d.conversionInfo.appName || "未知应用") + " 🚀转化：浏览→下载→安装 预计" + _0x5448ba + "秒" : "";
          _0x56353b > 0 && (await new Promise(_0x7973f5 => setTimeout(_0x7973f5, _0x56353b)));
          this.lastConversionInfo = null;
          const _0x24620a = _0x1e3010 === 1 || _0x1e3010 === 2 && _0x22809d.conversionInfo || _0x1e3010 === 3 && _0x22809d.conversionInfo;
          if (_0x24620a && _0x22809d.conversionInfo) {
            {
              const _0x445459 = _0x22809d.conversionInfo;
              await this.executeAdConversion(_0x5c3339.name, _0x445459);
            }
          }
          const _0x46f80c = await this.retryOperation(() => this.generateSignature(_0x22809d.cid, _0x22809d.llsid, _0x10c7e2, _0x606fd6, _0x56353b, _0x22809d, _0x2abcb3), "生成" + _0x5c3339.name + "签名", 3);
          if (!_0x46f80c) return this.taskStats[_0x10c7e2].failed++, {
            "success": false,
            "reward": 0,
            "hasRewardEnd": false
          };
          const _0x2a7790 = await this.retryOperation(() => this.submitReport(_0x46f80c.sig, _0x46f80c.sig3, _0x46f80c.sigtoken, _0x46f80c.post, _0x10c7e2, _0x606fd6, _0x46f80c.urlParam, _0x46f80c.xfalcon), "提交" + _0x5c3339.name + "报告", 3);
          if (_0x2a7790?.["success"]) {
            {
              this.taskStats[_0x10c7e2].success++;
              const _0x42247c = _0x2a7790.reward || 0,
                _0x1d5f0a = _0x2a7790.basicReward || _0x42247c,
                _0x43f9c1 = _0x2a7790.extraReward || 0;
              this.taskStats[_0x10c7e2].totalReward += _0x42247c;
              this.accumulatedCoins += _0x42247c;
              if (this.checkAccumulatedCoinsLimit()) return {
                "success": true,
                "reward": _0x42247c,
                "hasRewardEnd": false,
                "coinLimitExceeded": true
              };
              const _0x3f37ab = _0x2a7790.deepCount || 0,
                _0x3a23f3 = _0x3f37ab > 0 && _0x43f9c1 > 0,
                _0x46f9d6 = _0x22809d ? _0x22809d.expectedCoins : _0x42247c,
                _0x231e8e = _0x22809d && _0x22809d.isLiveAd ? "(直播)" : "",
                _0x5a56be = _0x3a23f3 ? "(基础" + _0x1d5f0a + "+转化" + _0x43f9c1 + ")" : "",
                _0x4f1d92 = this.initialCoin + this.accumulatedCoins;
              console.log("💰 " + this.getAccountMark() + " " + _0x5c3339.name + _0x231e8e + " 获得 " + _0x42247c + " 金币 (当前金币: " + _0x4f1d92 + " 金币)" + _0x5a56be);
              this.checkLowReward(_0x42247c, _0x10c7e2, _0x5c3339.name);
              const _0x15957b = this.checkLowRewardAndStop(_0x42247c, _0x5c3339.name);
              if (_0x15957b) return {
                "success": true,
                "reward": _0x42247c,
                "hasRewardEnd": false,
                "lowRewardStopped": true,
                "taskStopped": true
              };
              if (_0x42247c < 5) {
                {
                  this.taskLowRewardFlags[_0x10c7e2] = true;
                  if (this.isSingleTaskMode) {
                    {
                      this.lowRewardStreak++;
                      if (this.lowRewardStreak >= this.lowRewardLimit) {
                        console.log("🏁 " + this.getAccountDisplayName() + " 连续" + this.lowRewardLimit + "次低奖励，停止");
                        this.stopAllTasks = true;
                      }
                    }
                  }
                }
              } else {
                this.taskLowRewardFlags[_0x10c7e2] = false;
                this.lowRewardStreak = 0;
              }
              if (_0x5c3339.followUpTask && !this.taskLimitReached[_0x5c3339.followUpTask] && !this.taskStopped[_0x5c3339.followUpTask] && !_0x2a7790.serverError500) {
                const _0x3814f3 = _0x10c7e2 === "search" ? _0x3814f3 : "";
                await this.executeFollowUpTasks(_0x10c7e2, _0x3814f3);
              }
              return {
                "success": true,
                "reward": _0x42247c,
                "hasRewardEnd": _0x22809d.hasRewardEnd || false,
                "limitReached": _0x2a7790.limitReached || false
              };
            }
          }
          _0x2a7790?.["limitReached"] && (this.taskLimitReached[_0x10c7e2] = true);
          if (_0x2a7790?.["serverError500"]) return {
            "success": false,
            "reward": 0,
            "hasRewardEnd": false,
            "serverError500": true
          };
          this.taskStats[_0x10c7e2].failed++;
          return {
            "success": false,
            "reward": 0,
            "hasRewardEnd": false,
            "limitReached": _0x2a7790?.["limitReached"] || false
          };
        }
      } catch (_0x3b40e2) {
        console.log("❌ " + this.getAccountDisplayName() + " 任务异常(" + _0x10c7e2 + "): " + _0x3b40e2.message);
        this.taskStats[_0x10c7e2].failed++;
        return {
          "success": false,
          "reward": 0,
          "hasRewardEnd": false
        };
      }
    }
    async ["executeFollowUpTasks"](_0x128ab1, _0x41d9f = "") {
      {
        const _0x1d49fe = this.taskConfigs[_0x128ab1];
        if (!_0x1d49fe || !_0x1d49fe.followUpTask) return;
        if (this.stopAllTasks) {
          console.log("🏁 " + this.getAccountMark() + " 因金币达到上限，停止执行追加任务");
          return;
        }
        const _0xc997d7 = _0x1d49fe.followUpTask,
          _0x42069a = _0x1d49fe.followUpMaxCount || 100;
        if (!this.tasksToExecute.includes(_0x128ab1)) {
          {
            console.log("⚠️ " + this.getAccountMark() + " 追加任务 " + this.taskConfigs[_0xc997d7]?.["name"] + " 不在执行列表中，跳过追加");
            return;
          }
        }
        if (this.taskLimitReached[_0xc997d7] || this.taskStopped[_0xc997d7]) {
          {
            console.log("⚠️ " + this.getAccountMark() + " 追加任务 " + this.taskConfigs[_0xc997d7]?.["name"] + " 已停止，跳过追加");
            return;
          }
        }
        console.log("🎯 " + this.getAccountMark() + " 主任务成功，开始追加任务（最多" + _0x42069a + "次）");
        await new Promise(_0x44e222 => setTimeout(_0x44e222, Math.floor(Math.random() * 5000) + 5000));
        let _0x22cafc = 0;
        for (let _0x4a1963 = 0; _0x4a1963 < _0x42069a; _0x4a1963++) {
          if (this.stopAllTasks) {
            console.log("🏁 " + this.getAccountMark() + " 因金币达到上限，停止执行追加任务");
            break;
          }
          if (this.taskLimitReached[_0xc997d7] || this.taskStopped[_0xc997d7]) break;
          if (_0x4a1963 > 0 && _0x4a1963 % _0x2af7ed === 0) {
            const _0x4ce252 = Math.floor(Math.random() * (_0x1ea8aa - _0x773cc3) * 1000) + _0x773cc3 * 1000;
            console.log("⏸️ " + this.getAccountMark() + " 已执行" + _0x4a1963 + "次追加，休息" + Math.round(_0x4ce252 / 1000) + "秒");
            await new Promise(_0x2b62c8 => setTimeout(_0x2b62c8, _0x4ce252));
          }
          console.log("  追加 " + (_0x4a1963 + 1) + "/" + _0x42069a);
          try {
            const _0x3f2c11 = await this.executeSingleFollowUpTask(_0xc997d7, _0x41d9f);
            if (_0x3f2c11 && _0x3f2c11.success) {
              _0x22cafc++;
            } else {
              {
                if (_0x3f2c11 && _0x3f2c11.serverError500) {
                  {
                    console.log("🚫 " + this.getAccountMark() + " 追加任务遇到服务器错误500，停止追加");
                    break;
                  }
                }
                break;
              }
            }
          } catch (_0x58b321) {
            {
              console.log("❌ " + this.getAccountMark() + " 追加任务失败: " + _0x58b321.message);
              break;
            }
          }
          _0x4a1963 < _0x42069a - 1 && !this.taskLimitReached[_0xc997d7] && !this.taskStopped[_0xc997d7] && (await new Promise(_0x3f053e => setTimeout(_0x3f053e, Math.floor(Math.random() * 3000) + 2000)));
        }
        console.log("✅ " + this.getAccountMark() + " 追加任务执行完成，共执行" + _0x22cafc + "次");
      }
    }
    async ["executeSingleFollowUpTask"](_0x65df56, _0x4b5d40 = "") {
      {
        const _0x5af3ff = this.taskConfigs[_0x65df56];
        if (!_0x5af3ff) return console.log("❌ " + this.getAccountMark() + " 未知任务: " + _0x65df56), {
          "success": false
        };
        if (this.stopAllTasks) return console.log("🏁 " + this.getAccountMark() + " 因金币达到上限，停止执行 " + _0x5af3ff.name + " 任务"), {
          "success": false,
          "coinLimitReached": true
        };
        if (this.taskLimitReached[_0x65df56] || this.taskStopped[_0x65df56]) return {
          "success": false,
          "limitReached": true
        };
        try {
          const _0x268522 = await this.retryOperation(() => this.getAdInfo(_0x5af3ff, _0x4b5d40), "获取" + _0x5af3ff.name + "信息", 3);
          if (!_0x268522) return !this.taskStats[_0x65df56] && (this.taskStats[_0x65df56] = {
            "success": 0,
            "failed": 0,
            "totalReward": 0
          }), this.taskStats[_0x65df56].failed++, {
            "success": false
          };
          this.adCounter++;
          const _0x4dbd49 = _0x268522.isLiveAd || false,
            _0x45c42a = _0x4dbd49 ? "(直播)" : "";
          let _0x4a6bf3 = _0x268522.watchAdTime || 0;
          if (!_0x4a6bf3 || _0x4a6bf3 <= 0) {
            _0x4a6bf3 = Math.floor(Math.random() * (_0x3c6a4c - _0x2be342 + 1)) + _0x2be342;
          }
          const _0x6afc4e = _0x4a6bf3 + Math.floor(Math.random() * 6000) + 2000;
          console.log("🔍 " + this.getAccountMark() + " ==>" + _0x5af3ff.name + _0x45c42a + " 正在观看广告 " + Math.round(_0x6afc4e / 1000) + " 秒");
          if (_0x6afc4e > 0) {
            await new Promise(_0x330a2b => setTimeout(_0x330a2b, _0x6afc4e));
          }
          const _0x69254b = await this.retryOperation(() => this.generateSignature(_0x268522.cid, _0x268522.llsid, _0x65df56, _0x5af3ff), "生成" + _0x5af3ff.name + "签名", 3);
          if (!_0x69254b) return !this.taskStats[_0x65df56] && (this.taskStats[_0x65df56] = {
            "success": 0,
            "failed": 0,
            "totalReward": 0
          }), this.taskStats[_0x65df56].failed++, {
            "success": false
          };
          const _0xb4d56d = await this.retryOperation(() => this.submitReport(_0x69254b.sig, _0x69254b.sig3, _0x69254b.sigtoken, _0x69254b.post, _0x65df56, _0x5af3ff, _0x69254b.urlParam, _0x69254b.xfalcon), "提交" + _0x5af3ff.name + "报告", 3);
          if (_0xb4d56d && _0xb4d56d.success) {
            if (!this.taskStats[_0x65df56]) {
              this.taskStats[_0x65df56] = {
                "success": 0,
                "failed": 0,
                "totalReward": 0
              };
            }
            this.taskStats[_0x65df56].success++;
            const _0x2a50f9 = _0xb4d56d.reward || 0;
            this.taskStats[_0x65df56].totalReward += _0x2a50f9;
            this.accumulatedCoins += _0x2a50f9;
            const _0x2feb6b = this.initialCoin + this.accumulatedCoins;
            console.log("💰 " + this.getAccountMark() + " " + _0x5af3ff.name + _0x45c42a + " 获得 " + _0x2a50f9 + " 金币 (当前金币: " + _0x2feb6b + " 金币)");
            this.checkLowReward(_0x2a50f9, _0x65df56, _0x5af3ff.name);
            const _0x1dbf07 = this.checkLowRewardAndStop(_0x2a50f9, _0x5af3ff.name);
            if (_0x1dbf07) return {
              "success": true,
              "reward": _0x2a50f9,
              "lowRewardStopped": true
            };
            _0xb4d56d.taskStopped && (this.taskStopped[_0x65df56] = true);
            return {
              "success": true,
              "reward": _0x2a50f9
            };
          }
          if (_0xb4d56d && _0xb4d56d.limitReached) {
            this.taskLimitReached[_0x65df56] = true;
            return {
              "success": false,
              "limitReached": true
            };
          }
          if (_0xb4d56d && _0xb4d56d.serverError500) return {
            "success": false,
            "serverError500": true
          };
          !this.taskStats[_0x65df56] && (this.taskStats[_0x65df56] = {
            "success": 0,
            "failed": 0,
            "totalReward": 0
          });
          this.taskStats[_0x65df56].failed++;
          return {
            "success": false
          };
        } catch (_0x46f58f) {
          console.log("❌ " + this.getAccountMark() + " 任务异常(" + _0x65df56 + "): " + _0x46f58f.message);
          if (this.taskStats[_0x65df56]) this.taskStats[_0x65df56].failed++;
          return {
            "success": false
          };
        }
      }
    }
    ["checkLowReward"](_0x5fd8ed, _0x287200, _0x4ce20c) {
      if (_0x5fd8ed < 5) {
        this.taskLowRewardCount[_0x287200]++;
        console.log("⚠️ " + this.getAccountMark() + " " + _0x4ce20c + " 连续低奖励 " + this.taskLowRewardCount[_0x287200] + "/" + this.lowRewardLimit + " 次，本次获得" + _0x5fd8ed + "金币");
        if (this.taskLowRewardCount[_0x287200] >= this.lowRewardLimit) {
          console.log("🚫 " + this.getAccountMark() + " " + _0x4ce20c + " 连续" + this.lowRewardLimit + "次低奖励，已自动停止该任务类型");
          this.taskStopped[_0x287200] = true;
          return true;
        }
      } else this.taskLowRewardCount[_0x287200] = 0;
      return false;
    }
    ["checkLowRewardAndStop"](_0x53c4a8, _0x3085a2) {
      if (_0x53c4a8 < 5) {
        this.lowRewardCount++;
        if (this.lowRewardCount >= this.maxLowRewardCount) {
          console.log("🚫 " + this.getAccountDisplayName() + " 低奖励累计" + this.maxLowRewardCount + "次，停止账号");
          this.stopAllTasks = true;
          return true;
        }
      } else this.lowRewardCount = 0;
      return false;
    }
    ["getNextAvailableTask"]() {
      const _0x49b34c = this.tasksToExecute.length;
      if (_0x49b34c === 1) return this.tasksToExecute[0];
      for (let _0x1f2fff = 0; _0x1f2fff < _0x49b34c; _0x1f2fff++) {
        this.currentTaskIndex = (this.currentTaskIndex + 1) % _0x49b34c;
        const _0x30d53b = this.tasksToExecute[this.currentTaskIndex];
        if (!this.taskLowRewardFlags[_0x30d53b] && !this.taskLimitReached[_0x30d53b] && !this.taskDisabled[_0x30d53b]) {
          return _0x30d53b;
        }
      }
      return null;
    }
    ["allTasksHaveLowReward"]() {
      return this.tasksToExecute.every(_0x2b251d => this.taskLowRewardFlags[_0x2b251d] || this.taskLimitReached[_0x2b251d] || this.taskDisabled[_0x2b251d]);
    }
    async ["appendAdRest"](_0x57bf11) {
      {
        if (_0x57bf11 > 0 && _0x57bf11 % _0x4a3a37 === 0) {
          const _0x38938b = Math.floor(Math.random() * (_0x4b98d7 - _0x4786c9)) + _0x4786c9;
          await new Promise(_0x2dc27d => setTimeout(_0x2dc27d, _0x38938b));
        }
      }
    }
    async ["processTaskWithAppend"](_0x152fc2, _0xb796b1 = 10) {
      {
        let _0xa652d = 0;
        while (_0xa652d < _0xb796b1 && !this.stopAllTasks) {
          _0xa652d++;
          const _0x52630f = await this.executeTask(_0x152fc2, _0x152fc2 === "search" ? 2 : 1, false);
          if (!_0x52630f.success) {
            if (_0x52630f.limitReached) {
              console.log("🚫 " + this.getAccountDisplayName() + " " + this.taskConfigs[_0x152fc2].name + " 已达上限");
              break;
            }
            if (this.taskDisabled[_0x152fc2]) break;
            continue;
          }
          if (_0x52630f.coinLimitExceeded) {
            return {
              "switched": false,
              "coinLimitExceeded": true
            };
          }
          if (_0x52630f.lowRewardStopped) return {
            "switched": false,
            "lowRewardStopped": true
          };
          if (this.taskDisabled[_0x152fc2]) {
            {
              console.log("🔄 " + this.getAccountDisplayName() + " " + this.taskConfigs[_0x152fc2].name + " 已禁用，切换任务");
              const _0x269e33 = this.getNextAvailableTask();
              if (_0x269e33 && _0x269e33 !== _0x152fc2) return {
                "switched": true,
                "nextTask": _0x269e33
              };
              break;
            }
          }
          if (this.taskLimitReached[_0x152fc2]) {
            console.log("🚫 " + this.getAccountDisplayName() + " " + this.taskConfigs[_0x152fc2].name + " 已达上限");
            break;
          }
          if (!this.isSingleTaskMode && _0x52630f.reward <= this.lowRewardThreshold && _0x52630f.reward !== 5) {
            const _0x42b720 = this.getNextAvailableTask();
            if (_0x42b720 && _0x42b720 !== _0x152fc2) return console.log("🔄 " + this.getAccountDisplayName() + " " + this.taskConfigs[_0x152fc2].name + " 奖励过低，切换任务"), {
              "switched": true,
              "nextTask": _0x42b720
            };
            break;
          }
          let _0x1e566c = 0,
            _0x3b3369 = _0x52630f.hasRewardEnd && _0x4ceef2;
          while (_0x3b3369 && _0x1e566c < _0x113472 && !this.stopAllTasks) {
            _0x1e566c++;
            await this.appendAdRest(_0x1e566c);
            const _0x4b4bad = await this.executeTask(_0x152fc2, 2, true, _0x1e566c);
            if (!_0x4b4bad.success) {
              if (_0x4b4bad.limitReached) {
                break;
              }
              continue;
            }
            if (_0x4b4bad.coinLimitExceeded) return {
              "switched": false,
              "coinLimitExceeded": true
            };
            if (_0x4b4bad.lowRewardStopped) return {
              "switched": false,
              "lowRewardStopped": true
            };
            if (this.taskDisabled[_0x152fc2]) {
              console.log("🔄 " + this.getAccountDisplayName() + " " + this.taskConfigs[_0x152fc2].name + "_追加" + _0x1e566c + " 已禁用，切换任务");
              const _0x55a80a = this.getNextAvailableTask();
              if (_0x55a80a && _0x55a80a !== _0x152fc2) {
                return {
                  "switched": true,
                  "nextTask": _0x55a80a
                };
              }
              break;
            }
            _0x3b3369 = _0x4b4bad.hasRewardEnd;
            if (!this.isSingleTaskMode && _0x4b4bad.reward <= this.lowRewardThreshold && _0x4b4bad.reward !== 5) {
              const _0xf2558 = this.getNextAvailableTask();
              if (_0xf2558 && _0xf2558 !== _0x152fc2) return console.log("🔄 " + this.getAccountDisplayName() + " " + this.taskConfigs[_0x152fc2].name + "_追加第" + _0x1e566c + "次 奖励过低，切换任务"), {
                "switched": true,
                "nextTask": _0xf2558
              };
              break;
            }
            if (_0x1e566c >= _0x113472) {
              if (!this.isSingleTaskMode) {
                {
                  console.log("🔄 " + this.getAccountDisplayName() + " " + this.taskConfigs[_0x152fc2].name + " 达到最大追加次数，切换任务");
                  const _0x1f92b3 = this.getNextAvailableTask();
                  if (_0x1f92b3 && _0x1f92b3 !== _0x152fc2) return {
                    "switched": true,
                    "nextTask": _0x1f92b3
                  };
                }
              } else {
                console.log("🔄 " + this.getAccountDisplayName() + " " + this.taskConfigs[_0x152fc2].name + " 达到最大追加次数，进行下一轮");
              }
              break;
            }
          }
          if (this.taskLimitReached[_0x152fc2]) {
            {
              console.log("🚫 " + this.getAccountDisplayName() + " " + this.taskConfigs[_0x152fc2].name + " 已达上限");
              break;
            }
          }
        }
        return {
          "switched": false
        };
      }
    }
    async ["executeCycleMode"]() {
      const _0x26571f = this.cycleRounds <= 0 ? "无限" : this.cycleRounds;
      console.log("🔄 " + this.getAccountMark() + " 多轮运行模式: 共 " + _0x26571f + " 轮, 轮间间隔: " + this.roundInterval + "秒");
      let _0x51769b = 1;
      while (!this.stopAllTasks) {
        if (this.cycleRounds > 0 && _0x51769b > this.cycleRounds) {
          console.log("🏁 " + this.getAccountMark() + " 已达到指定轮次 " + this.cycleRounds + "，停止运行");
          break;
        }
        this.currentCycleRound = _0x51769b;
        console.log("\n==================== 第 " + _0x51769b + " 轮开始 ====================");
        console.log("🔄 " + this.getAccountMark() + " 第 " + _0x51769b + (this.cycleRounds > 0 ? "/" + this.cycleRounds : "") + " 轮");
        await this.executeIndependentMode();
        console.log("==================== 第 " + _0x51769b + " 轮结束 ====================");
        const _0x23ba1d = this.tasksToExecute.every(_0x236101 => this.taskDisabled[_0x236101] || this.taskLimitReached[_0x236101] || this.taskStopped[_0x236101]);
        if (_0x23ba1d) {
          console.log("🛑 " + this.getAccountMark() + " 所有任务禁用/达限/停止，停止运行");
          break;
        }
        if (this.stopAllTasks) {
          console.log("🏁 " + this.getAccountMark() + " 任务已停止");
          break;
        }
        console.log("⏳ " + this.getAccountMark() + " 等待 " + this.roundInterval + " 秒后开始下一轮...");
        const _0x4bec80 = 10;
        for (let _0x141287 = 0; _0x141287 < this.roundInterval; _0x141287 += _0x4bec80) {
          {
            if (this.stopAllTasks) break;
            await new Promise(_0x3f36c9 => setTimeout(_0x3f36c9, Math.min(_0x4bec80, this.roundInterval - _0x141287) * 1000));
          }
        }
        _0x51769b++;
      }
    }
    async ["executeIndependentMode"]() {
      const _0x201826 = ["box", "look", "search", "food", "dj"];
      for (const _0x3b001a of _0x201826) {
        {
          if (this.stopAllTasks) {
            console.log("🏁 " + this.getAccountMark() + " 因金币达到上限，停止所有任务");
            break;
          }
          if (!this.tasksToExecute.includes(_0x3b001a)) {
            continue;
          }
          if (this.taskStopped[_0x3b001a]) {
            {
              console.log("⏭️ " + this.getAccountMark() + " " + _0x1a27a9[_0x3b001a] + "任务因连续低奖励已被停止，跳过该任务类型，继续执行后续任务");
              continue;
            }
          }
          if (this.taskLimitReached[_0x3b001a]) {
            {
              console.log("⏭️ " + this.getAccountMark() + " " + _0x1a27a9[_0x3b001a] + "任务已达上限，跳过该任务类型，继续执行后续任务");
              continue;
            }
          }
          const _0x3f4680 = _0xf43bf0[_0x3b001a] || 0;
          if (_0x3f4680 <= 0) continue;
          console.log("\n🚀 " + this.getAccountMark() + " 开始执行" + _0x1a27a9[_0x3b001a] + "任务，计划执行" + _0x3f4680 + "次");
          let _0x319df0 = 0;
          for (let _0xaf95e = 0; _0xaf95e < _0x3f4680; _0xaf95e++) {
            if (this.stopAllTasks) {
              {
                console.log("🏁 " + this.getAccountMark() + " 因金币达到上限，停止执行 " + _0x1a27a9[_0x3b001a] + " 任务");
                break;
              }
            }
            if (this.taskLimitReached[_0x3b001a]) {
              console.log("⚠️ " + this.getAccountMark() + " " + _0x1a27a9[_0x3b001a] + "任务已达上限，已执行" + _0x319df0 + "次，继续执行后续任务");
              break;
            }
            if (this.taskStopped[_0x3b001a]) {
              console.log("⏭️ " + this.getAccountMark() + " " + _0x1a27a9[_0x3b001a] + "任务在执行过程中因连续低奖励被停止，已执行" + _0x319df0 + "次，立即跳过该任务类型");
              break;
            }
            console.log("\n--- " + this.getAccountMark() + " " + _0x1a27a9[_0x3b001a] + "第" + (_0xaf95e + 1) + "/" + _0x3f4680 + "次 ---");
            let _0x4a1284;
            if (_0x3b001a === "search") {
              const _0x2d4b7f = this.getSearchKeyword();
              _0x4a1284 = await this.executeTask(_0x3b001a, _0x2d4b7f);
            } else _0x4a1284 = await this.executeTask(_0x3b001a);
            _0x319df0++;
            if (_0x4a1284 && _0x4a1284.serverError500) {
              {
                console.log("🚫 " + this.getAccountMark() + " 遇到服务器错误500，跳过当前任务的剩余执行");
                break;
              }
            }
            if (_0xaf95e < _0x3f4680 - 1 && !this.taskLimitReached[_0x3b001a] && !this.taskStopped[_0x3b001a] && !(_0x4a1284 && _0x4a1284.serverError500)) {
              const _0x4ecaa0 = Math.floor(Math.random() * 8000) + 7000;
              console.log("⏱ " + this.getAccountMark() + " 等待 " + Math.round(_0x4ecaa0 / 1000) + " 秒执行下一次");
              await new Promise(_0x16d0be => setTimeout(_0x16d0be, _0x4ecaa0));
            }
          }
          console.log("✅ " + this.getAccountMark() + " " + _0x1a27a9[_0x3b001a] + "任务完成，实际执行" + _0x319df0 + "次");
          if (_0x3b001a !== _0x201826[_0x201826.length - 1] && !this.taskStopped[_0x3b001a]) {
            {
              const _0x861e10 = Math.floor(Math.random() * 10000) + 10000;
              console.log("⏱ " + this.getAccountMark() + " 等待 " + Math.round(_0x861e10 / 1000) + " 秒开始下一个任务类型");
              await new Promise(_0x17459e => setTimeout(_0x17459e, _0x861e10));
            }
          }
        }
      }
    }
    async ["executeAllTasksByPriority"]() {
      this.isCycleMode ? await this.executeCycleMode() : await this.executeIndependentMode();
    }
    ["printTaskStats"]() {
      {
        const _0x5bc2bb = this.getAccountDisplayName();
        console.log("\n📊 " + _0x5bc2bb + " 统计:");
        for (const [_0x1c4ac2, _0x16324d] of Object.entries(this.taskStats)) {
          const _0x3a691d = this.taskConfigs[_0x1c4ac2].name,
            _0x218511 = this.taskRewardFailCount[_0x1c4ac2] > 0 ? " 奖励失败" + this.taskRewardFailCount[_0x1c4ac2] + "次" + (this.taskDisabled[_0x1c4ac2] ? "[已停]" : "") : "";
          console.log("   " + _0x3a691d + ": 成" + _0x16324d.success + " 败" + _0x16324d.failed + " +" + _0x16324d.totalReward + _0x218511);
        }
        console.log("💰 " + _0x5bc2bb + " 累计" + this.accumulatedCoins + " | 广告失败" + this.adInfoFailCount + "/" + this.maxAdInfoFailCount + " | 奖励失败" + this.totalRewardFailCount);
        (this.conversionSuccessCount > 0 || this.conversionFailCount > 0) && console.log("🚀 " + _0x5bc2bb + " 转化: 成" + this.conversionSuccessCount + " 败" + this.conversionFailCount + (this.conversionExtraCoins > 0 ? " 额外+" + this.conversionExtraCoins : "") + (this.extraRewardDisabled ? "[已回退普通模式]" : ""));
      }
    }
  }
  async function _0x1b4ca8(_0x35fffc) {
    {
      const _0x1e9fa4 = () => {
          {
            const _0x2ae7aa = _0x35fffc.version === "nebula" ? "[极速版]" : "[普通版]";
            return _0x2ae7aa + "账号[" + _0x35fffc.index + "]" + (_0x35fffc.remark ? "(" + _0x35fffc.remark + ")" : "");
          }
        },
        _0x36c318 = new _0x4e1fe4({
          ..._0x35fffc,
          "nickname": "账号" + _0x35fffc.index,
          "tasksToExecute": _0x363a17()
        });
      await _0x36c318.initProxyExitIP();
      let _0x2e2e3e = await _0x547bd0(_0x35fffc.cookie, _0x35fffc.proxyUrl, _0x35fffc.version, _0x35fffc.index),
        _0x513645 = _0x2e2e3e?.["nickname"] || "账号" + _0x35fffc.index;
      _0x36c318.nickname = _0x513645;
      const _0x43d7c1 = parseInt(_0x2e2e3e?.["totalCoin"]) || 0;
      _0x36c318.initialCoin = _0x43d7c1;
      if (_0x2e2e3e) {
        const _0xae9a6f = _0x2e2e3e.totalCoin != null ? _0x2e2e3e.totalCoin : "未知",
          _0x525b88 = _0x2e2e3e.allCash != null ? _0x2e2e3e.allCash : "未知";
        console.log("✅ " + _0x36c318.getAccountMark() + " 登录成功 金币" + _0xae9a6f + " 余额" + _0x525b88);
      } else {
        console.log("❌ " + _0x36c318.getAccountMark() + " 登录失败，请检查Cookie是否过期");
        return {
          "index": _0x35fffc.index,
          "remark": _0x35fffc.remark || "无备注",
          "nickname": _0x513645,
          "initialCoin": 0,
          "finalCoin": 0,
          "coinChange": 0,
          "stats": {},
          "error": "账号登录信息获取失败",
          "loginFailed": true,
          "accumulatedCoins": 0,
          "adInfoFailCount": 0,
          "totalRewardFailCount": 0,
          "version": _0x35fffc.version
        };
      }
      await _0x36c318.checkCoinLimit();
      if (_0x36c318.coinExceeded) return console.log("💰 " + _0x36c318.getAccountMark() + " 初始金币已超过阈值，不执行任务"), {
        "index": _0x35fffc.index,
        "remark": _0x35fffc.remark || "无备注",
        "nickname": _0x513645,
        "initialCoin": _0x2e2e3e?.["totalCoin"] || 0,
        "finalCoin": _0x2e2e3e?.["totalCoin"] || 0,
        "coinChange": 0,
        "stats": _0x36c318.taskStats,
        "coinLimitExceeded": true,
        "accumulatedCoins": 0,
        "adInfoFailCount": _0x36c318.adInfoFailCount,
        "totalRewardFailCount": _0x36c318.totalRewardFailCount,
        "version": _0x35fffc.version
      };
      await _0x36c318.executeAllTasksByPriority();
      const _0x4fb3e5 = await _0x547bd0(_0x36c318.cookie, _0x36c318.proxyUrl, _0x36c318.version, _0x36c318.index),
        _0x3d0ba9 = parseInt(_0x4fb3e5?.["totalCoin"]) || 0,
        _0x3c991a = _0x3d0ba9 - _0x43d7c1;
      console.log("\n🎯 " + _0x36c318.getAccountMark() + " 账号金币统计：");
      console.log("   初始金币: " + _0x43d7c1);
      console.log("   最终金币: " + _0x3d0ba9);
      console.log("   金币变动: " + (_0x3c991a >= 0 ? "+" : "") + _0x3c991a);
      console.log("   运行获得: " + _0x36c318.accumulatedCoins);
      if (_0x36ea41) {
        {
          const _0x3aedf2 = ["账号: " + _0x513645 + (_0x35fffc.remark ? "（" + _0x35fffc.remark + "）" : ""), "代理: " + _0x36c318.proxyTag + " " + (_0x36c318.clientIP || "未知"), "初始金币: " + _0x43d7c1, "最终金币: " + _0x3d0ba9, "金币变动: " + (_0x3c991a >= 0 ? "+" : "") + _0x3c991a, "运行获得: " + _0x36c318.accumulatedCoins, "", ...Object.entries(_0x36c318.taskStats).map(([_0x4d438d, _0x40cca1]) => {
            {
              if (_0x40cca1.success > 0 || _0x40cca1.failed > 0) {
                return "任务: " + _0x4d438d + " 成功" + _0x40cca1.success + "次 获得" + (_0x40cca1.totalReward || 0) + "金币";
              }
              return null;
            }
          }).filter(Boolean)].join("\n");
          await _0x50a5d5("金币汇总 - " + _0x513645, _0x3aedf2);
        }
      }
      _0x36c318.printTaskStats();
      return {
        "index": _0x35fffc.index,
        "remark": _0x35fffc.remark || "无备注",
        "nickname": _0x513645,
        "initialCoin": _0x43d7c1,
        "finalCoin": _0x3d0ba9,
        "coinChange": _0x3c991a,
        "stats": _0x36c318.taskStats,
        "coinLimitExceeded": _0x36c318.coinExceeded,
        "lowRewardStopped": _0x36c318.lowRewardCount >= _0x36c318.maxLowRewardCount,
        "accumulatedCoins": _0x36c318.accumulatedCoins,
        "adInfoFailCount": _0x36c318.adInfoFailCount,
        "totalRewardFailCount": _0x36c318.totalRewardFailCount,
        "conversionSuccessCount": _0x36c318.conversionSuccessCount || 0,
        "conversionExtraCoins": _0x36c318.conversionExtraCoins || 0,
        "version": _0x35fffc.version,
        "clientIP": _0x36c318.clientIP,
        "proxyTag": _0x36c318.proxyTag
      };
    }
  }
  async function _0x587361(_0x24acaa, _0x1385e3, _0x444576) {
    const _0x29e5d9 = new Array(_0x24acaa.length);
    let _0x458315 = 0;
    async function _0x390422() {
      while (true) {
        const _0x1cc205 = _0x458315++;
        if (_0x1cc205 >= _0x24acaa.length) return;
        const _0x2b26f8 = _0x24acaa[_0x1cc205];
        try {
          _0x29e5d9[_0x1cc205] = await _0x444576(_0x2b26f8, _0x1cc205);
        } catch (_0x1ca6af) {
          console.log("❌ 并发执行异常（index=" + (_0x1cc205 + 1) + "）：" + _0x1ca6af.message);
          _0x29e5d9[_0x1cc205] = null;
        }
      }
    }
    const _0x1eb228 = Array.from({
      "length": Math.min(_0x1385e3, _0x24acaa.length)
    }, _0x390422);
    await Promise.all(_0x1eb228);
    return _0x29e5d9;
  }
  function _0x4c20d3(_0x33897a) {
    {
      const _0xbba011 = parseInt(_0x33897a) || 0;
      if (_0xbba011 >= 10000) return (_0xbba011 / 10000).toFixed(1) + "万";
      return String(_0xbba011);
    }
  }
  function _0x3a62b7(_0x1d6de4) {
    {
      if (!_0x1d6de4 && _0x1d6de4 !== 0) return "0元";
      const _0x52f196 = parseFloat(_0x1d6de4) || 0;
      if (_0x52f196 === 0) return "0元";
      if (_0x52f196 < 1) return _0x52f196.toFixed(2) + "元";
      return _0x52f196.toFixed(2) + "元";
    }
  }
  async function _0x50a5d5(_0x24742f, _0x1a9c78, _0x2dd020 = null) {
    const _0x4674a3 = _0x2dd020 || _0x36ea41;
    if (!_0x4674a3) return console.log("⚠️ 未设置 pushplus token，跳过消息推送"), false;
    const _0x129e7a = JSON.stringify({
      "token": _0x4674a3,
      "title": _0x24742f,
      "content": _0x1a9c78,
      "template": "txt"
    });
    return new Promise(_0x43bb6c => {
      {
        const _0x44b5c3 = require("https"),
          _0x132c04 = {
            "method": "POST",
            "hostname": "www.pushplus.plus",
            "path": "/send",
            "headers": {
              "Content-Type": "application/json",
              "Content-Length": Buffer.byteLength(_0x129e7a)
            },
            "timeout": 10000
          },
          _0x27082b = _0x44b5c3.request(_0x132c04, _0x5bb9cd => {
            let _0xc0a7af = "";
            _0x5bb9cd.on("data", _0x1ef64e => _0xc0a7af += _0x1ef64e);
            _0x5bb9cd.on("end", () => {
              try {
                const _0x3b6df2 = JSON.parse(_0xc0a7af);
                if (_0x3b6df2.code === 200) {
                  console.log("✅ pushplus消息推送成功");
                  _0x43bb6c(true);
                } else console.log("❌ pushplus推送失败: " + (_0x3b6df2.msg || "未知错误")), _0x43bb6c(false);
              } catch (_0x5e6997) {
                console.log("❌ pushplus响应解析失败: " + _0xc0a7af.slice(0, 200));
                _0x43bb6c(false);
              }
            });
          });
        _0x27082b.on("error", _0x40a532 => {
          console.log("❌ pushplus推送异常: " + _0x40a532.message);
          _0x43bb6c(false);
        });
        _0x27082b.setTimeout(10000, () => {
          _0x27082b.destroy();
          console.log("❌ pushplus推送超时");
          _0x43bb6c(false);
        });
        _0x27082b.write(_0x129e7a);
        _0x27082b.end();
      }
    });
  }
  function _0x4de10d(_0x325ce4, _0x452235) {
    {
      const _0x1a4dcf = [];
      _0x1a4dcf.push("📊 快手账户信息查询结果");
      _0x1a4dcf.push("=".repeat(40));
      _0x1a4dcf.push("统计信息:");
      _0x1a4dcf.push("账户总数: " + _0x325ce4.length);
      _0x1a4dcf.push("正常账户: " + _0x325ce4.filter(_0xa5f89f => !_0xa5f89f.error && !_0xa5f89f.coinLimitExceeded && !_0xa5f89f.totalCoinThresholdReached).length);
      _0x1a4dcf.push("异常账户: " + _0x325ce4.filter(_0x4b580b => _0x4b580b.error || _0x4b580b.coinLimitExceeded).length);
      _0x1a4dcf.push("总金币: " + _0x4c20d3(_0x452235.totalCoinChange));
      _0x1a4dcf.push("总余额: " + _0x3a62b7(_0x452235.totalCashChange));
      _0x1a4dcf.push("=".repeat(40));
      for (const _0x312d3f of _0x325ce4) {
        {
          const _0x53b47d = _0x312d3f.error || _0x312d3f.coinLimitExceeded ? "❌" : "✅",
            _0x10888f = _0x312d3f.remark || "账号" + _0x312d3f.index;
          _0x1a4dcf.push(_0x53b47d + " " + _0x10888f);
          _0x1a4dcf.push("金币: " + _0x4c20d3(_0x312d3f.finalCoin));
          _0x1a4dcf.push("余额: " + _0x3a62b7(_0x312d3f.finalCash));
        }
      }
      _0x1a4dcf.push("\n查询时间: " + new Date().toLocaleString());
      return _0x1a4dcf.join("\n");
    }
  }
  function _0x22ab1b(_0x862664) {
    const _0x3662b0 = _0x862664.reduce((_0x6b5a18, _0x4f9c34) => _0x6b5a18 + (parseInt(_0x4f9c34.initialCoin) || 0), 0),
      _0x2d4309 = _0x862664.reduce((_0x5a2de1, _0x13c9fa) => _0x5a2de1 + (parseInt(_0x13c9fa.finalCoin) || 0), 0),
      _0x58269c = _0x2d4309 - _0x3662b0,
      _0x209aef = _0x862664.reduce((_0x1c6ac8, _0x3ebbb2) => _0x1c6ac8 + (parseFloat(_0x3ebbb2.initialCash) || 0), 0),
      _0x2d0b3e = _0x862664.reduce((_0x48cd92, _0xb011be) => _0x48cd92 + (parseFloat(_0xb011be.finalCash) || 0), 0),
      _0x4163fb = _0x2d0b3e - _0x209aef;
    let _0x3a2eb0 = 0,
      _0x3101c5 = 0,
      _0x29bfff = 0;
    _0x862664.forEach(_0x389881 => {
      _0x389881.stats && Object.entries(_0x389881.stats).forEach(([_0x313651, _0x9a7716]) => {
        _0x3a2eb0 += _0x9a7716.success + _0x9a7716.failed;
        _0x3101c5 += _0x9a7716.success;
        _0x29bfff += _0x9a7716.totalReward;
      });
    });
    const _0x599e23 = _0x3a2eb0 > 0 ? (_0x3101c5 / _0x3a2eb0 * 100).toFixed(1) : "0.0";
    return {
      "totalInitialCoin": _0x3662b0,
      "totalFinalCoin": _0x2d4309,
      "totalCoinChange": _0x58269c,
      "totalInitialCash": _0x209aef,
      "totalFinalCash": _0x2d0b3e,
      "totalCashChange": _0x4163fb,
      "totalTasks": _0x3a2eb0,
      "totalSuccessTasks": _0x3101c5,
      "totalReward": _0x29bfff,
      "successRate": _0x599e23
    };
  }
  function _0x5ededf(_0x549247) {
    {
      if (!_0x549247.length) {
        return;
      }
      let _0x5172b7 = 0,
        _0x2d82ce = 0,
        _0x57132f = 0,
        _0xa2723d = 0,
        _0x330ecf = 0,
        _0x48f236 = 0,
        _0xcaa6a6 = 0,
        _0xa0a0e = 0,
        _0x3765fc = 0,
        _0x228bb7 = 0,
        _0x42eeef = 0;
      _0x549247.forEach(_0x305dc7 => {
        if (_0x305dc7.version === "nebula") _0x228bb7++;
        if (_0x305dc7.version === "kuaishou") _0x42eeef++;
        _0x5172b7 += _0x305dc7.coinChange || 0;
        _0xcaa6a6 += _0x305dc7.accumulatedCoins || 0;
        _0xa0a0e += _0x305dc7.adInfoFailCount || 0;
        _0x3765fc += _0x305dc7.totalRewardFailCount || 0;
        _0x305dc7.stats && Object.values(_0x305dc7.stats).forEach(_0x55c0bf => {
          _0x2d82ce += _0x55c0bf.totalReward;
        });
        _0x305dc7.lowRewardStopped && _0x57132f++;
        _0x305dc7.loginFailed && _0xa2723d++;
        _0x330ecf += _0x305dc7.conversionSuccessCount || 0;
        _0x48f236 += _0x305dc7.conversionExtraCoins || 0;
      });
      console.log("\n" + "=".repeat(50));
      console.log("🎉 全部完成 | 极速" + _0x228bb7 + " 普通" + _0x42eeef + " | 金币变化" + (_0x5172b7 >= 0 ? "+" : "") + _0x5172b7 + " 奖励" + _0x2d82ce + " 累计" + _0xcaa6a6);
      console.log("📊 广告失败" + _0xa0a0e + " | 奖励失败" + _0x3765fc + (_0x48f236 > 0 ? " | 额外奖励+" + _0x48f236 : "") + (_0x330ecf > 0 ? " | 转化成功" + _0x330ecf : ""));
      if (_0x57132f > 0) console.log("⚠️ 低奖励停止" + _0x57132f + "个账号");
      if (_0xa2723d > 0) console.log("⚠️ 登录失败" + _0xa2723d + "个账号");
      console.log("=".repeat(50));
    }
  }
  typeof global !== "undefined" && (global.V8js = {
    "version": "8.0",
    "compatible": true,
    "features": ["双版本自动适配", "广告信息失败限制", "任务上限检测", "预计金币检测与跳过", "随机生成did/egid", "模式切换(AD_EW:0不执行/1执行/2有转化信息就执行/3额外模式)", "实时上报时间", "登录失败即停"]
  });
  const _0x38d530 = _0x449737(),
    _0x5a2db1 = _0x38d530.length,
    _0x10fc68 = _0x363a17(),
    _0x1beeb6 = _0x36bd12();
  (async () => {
    {
      const _0x70188e = await _0x3c321b();
      !_0x70188e.success && (console.error("❌ 卡密验证失败，程序退出"), process.exit(1));
      await _0x3f9061("nebula");
      await _0x3f9061("kuaishou");
      console.log("=========================================================================================");
      console.log("多号请购买代理: http://www.tianxingip.com/proxy/index/index/code/ericcccc");
      console.log("=========================================================================================");
      console.log("🍃 任务类型: look➠看广告  box➠宝箱广告  food➠饭补  search➠搜索  dj➠短剧广告");
      console.log("-----------------------------------");
      console.log("📱 账号数量: " + _0x5a2db1 + "个");
      console.log("🎯 执行任务: " + _0x10fc68.map(_0x4b24b2 => _0x1a27a9[_0x4b24b2] || _0x4b24b2).join(", "));
      console.log("⚙️ 执行模式: " + (_0xed6f94 ? "顺序执行" : "独立次数执行"));
      for (const _0x5133d3 of _0x10fc68) {
        const _0x3cfc76 = _0xf43bf0[_0x5133d3] || _0x1beeb6[_0x5133d3] || _0x4b03f9;
        console.log("   " + _0x5133d3 + ": " + _0x3cfc76 + "次");
      }
      console.log("💰 金币上限: " + _0xfc6a7e);
      console.log("⚠️ 低金币阈值: " + _0x5c07d8 + "金币, 累计" + _0x5f4d5d + "次自动停止");
      console.log("❌ 广告信息失败限制: " + _0x2092c7 + "次");
      console.log("🔍 搜索广告: " + (_0x305c23 ? "✅开启" : "❌关闭"));
      console.log("🔤 搜索关键词: " + _0x2211a2.join(",") + " (模式: " + _0xb91b55 + ")");
      console.log("📺 广告追加: " + (_0x4ceef2 ? "✅开启" : "❌关闭") + ", 最大追加次数=" + _0x113472);
      console.log("⏱ 追加休息: 每" + _0x4a3a37 + "次休息" + Math.round(_0x4786c9 / 1000) + "-" + Math.round(_0x4b98d7 / 1000) + "秒");
      const _0x1138b6 = Math.round((_0x2be342 || _0x5d9fba * 1000) / 1000),
        _0x385e9c = Math.round((_0x3c6a4c || _0x2cf3fa * 1000) / 1000);
      console.log("⏱ 观看时间: " + _0x1138b6 + "-" + _0x385e9c + "秒 (支持0秒设置)");
      console.log("📲 广告下载: " + (_0x1e3010 === 1 || _0x1e3010 === 2 || _0x1e3010 === 3 ? "✅已开启" : "❌已关闭"));
      console.log("📲 广告安装: " + (_0x1e3010 === 1 || _0x1e3010 === 2 || _0x1e3010 === 3 ? "✅已开启（模拟安装）" : "❌已关闭"));
      console.log("💾 APK保留: ❌删除");
      console.log("🔢 多账号执行模式: " + (_0xed6f94 ? "顺序执行" : "并发执行") + " (并发数: " + _0x5a75c4 + ")");
      console.log("-----------------------------------");
      console.log("🔧 DID更换功能：" + (_0x4db93 ? "✅ 已启用" : "❌ 已禁用") + " (设置 ENABLE_RANDOM_DID_EGID=1 启用)");
      const _0x2cb54e = _0x465ed4 <= 0 ? "无限" : _0x465ed4;
      console.log("🔄 多轮运行模式: 第 1 轮, 总轮次: " + _0x2cb54e + ", 轮间间隔: " + _0x4578b7 + "秒");
      console.log("-----------------------------------");
      console.log("📊 共找到 " + _0x5a2db1 + " 个有效账号");
      console.log("🔢 执行模式: " + (_0xed6f94 ? "顺序执行" : "并发执行") + " (并发数: " + _0x5a75c4 + ")");
      console.log("📤 PushPlus 金币汇总: " + (_0x36ea41 ? "已启用，每隔 " + _0x54d259 + " 轮推送一次" : "未启用"));
      console.log("-----------------------------------");
      _0x5a2db1 > (process.env.MAX_CONCURRENCY || _0x5a75c4) && (console.log("❌ 错误: 检测到 " + _0x5a2db1 + " 个账号配置，最多只允许" + (process.env.MAX_CONCURRENCY || _0x5a75c4) + "个"), process.exit(1));
      const _0x37d6a1 = _0x2305f5();
      !_0x37d6a1.length && (console.log("❌ 没有找到有效账号，程序退出"), process.exit(1));
      const _0x3e408e = _0xed6f94 ? 1 : _0x5a75c4,
        _0x429492 = [];
      await _0x587361(_0x37d6a1, _0x3e408e, async _0x1f805a => {
        try {
          {
            const _0x7168af = await _0x1b4ca8(_0x1f805a);
            _0x429492.push(_0x7168af);
          }
        } catch (_0x337de7) {
          console.log("❌ 账号[" + _0x1f805a.index + "] 执行异常：" + _0x337de7.message);
          _0x429492.push({
            "index": _0x1f805a.index,
            "remark": _0x1f805a.remark || "无备注",
            "nickname": "账号" + _0x1f805a.index,
            "initialCoin": 0,
            "finalCoin": 0,
            "coinChange": 0,
            "error": _0x337de7.message,
            "version": _0x1f805a.version
          });
        }
      });
      _0x429492.sort((_0x5a0a12, _0x20c0d1) => _0x5a0a12.index - _0x20c0d1.index);
      _0x5ededf(_0x429492);
      process.exit(0);
    }
  })();
})();