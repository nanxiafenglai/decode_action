//Wed Nov 05 2025 16:22:11 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
console.log("/*\n------------------------------------------\n@Description: eva\ncron: 12 12 * * *\n------------------------------------------\n#Notice:\nAPP CK的版本最少要是13.5以上\n变量名字-必填:ksck 格式ck#salt#socks\nck#salt#socks://用户名:密码@IP:端口 不写代理就是默认本地网络 报错503和脚本没关系\nsocks:// 或者 socks5://  哪个不报错写哪个\n\n变量名字 count 轮数\n默认执行看广告版本 一次执行15轮，look 5次，food,box各一次\n\n变量名字 adType='look,food,box'\n多号必须设置代理 否则黑号不管\n\n⚠️【免责声明】\n      依赖axios socks-proxy-agent\n      //获取oaid和osVersion 下载https://hub.gitmirror.com/https://raw.githubusercontent.com/gzu-liyujiang/Android_CN_OAID/refs/heads/master/demo.apk 进行实时获取\n      //或者在群文件下载\n      //systemVersion 就是osVersion\n      //oaid就是oaid\n      获取后填写到COOKIE后面 [如果不写则默认为以下两个参数]\n      例如\n      osVersion=10; oaid=9e4bb0e5bc326fb1;\n------------------------------------------\n1、此脚本仅用于学习研究，不保证其合法性、准确性、有效性，请根据情况自行判断，本人对此不承担任何保证责任。\n2、由于此脚本仅用于学习研究，您必须在下载后 24 小时内将所有内容从您的计算机或手机或任何存储设备中完全删除，若违反规定引起任何事件本人对此均不负责。\n3、请勿将此脚本用于任何商业或非法目的，若违反规定请自行对此负责。\n4、此脚本涉及应用与本人无关，本人对因此引起的任何隐私泄漏或其他后果不承担任何责任。\n5、本人对任何脚本引发的问题概不负责，包括但不限于由脚本错误引起的任何损失和损害。\n6、如果任何单位或个人认为此脚本可能涉嫌侵犯其权利，应及时通知并提供身份证明，所有权证明，我们将在收到认证文件确认后删除此脚本。\n7、所有直接或间接使用、查看此脚本的人均应该仔细阅读此声明。本人保留随时更改或补充此声明的权利。一旦您使用或复制了此脚本，即视为您已接受此免责声明。\n------------------------------------------*/");
const x_0x34d87b = {
  km: "1028-new"
};
let x_0x544818 = [];
const {
  SocksProxyAgent: x_0x3be25e
} = require("socks-proxy-agent");
const x_0x4316eb = require("axios");
const x_0x38aa16 = "kwai-android aegon/4.28.0";
require("dotenv").config();
const x_0x5f5b07 = (_0x550847, _0x4a0809 = "YYYY-MM-DD HH:mm:ss") => {
  const _0x3fe08f = _0x550847.getFullYear();
  const _0x4c52c9 = String(_0x550847.getMonth() + 1).padStart(2, "0");
  const _0x67a8f1 = String(_0x550847.getDate()).padStart(2, "0");
  const _0x2042db = String(_0x550847.getHours()).padStart(2, "0");
  const _0x2bb6fc = String(_0x550847.getMinutes()).padStart(2, "0");
  const _0x263ac3 = String(_0x550847.getSeconds()).padStart(2, "0");
  return _0x4a0809.replace("YYYY", _0x3fe08f).replace("MM", _0x4c52c9).replace("DD", _0x67a8f1).replace("HH", _0x2042db).replace("mm", _0x2bb6fc).replace("ss", _0x263ac3);
};
class x_0x2c4c69 {
  constructor(_0x1a8b47) {
    this.index = x_0x4f5fa9.userIdx++;
    this.nickname = this.index;
    this.totalCoin = 0;
    this.allCash = 0;
    this.user = _0x1a8b47.split("#");
    this.ck = this.user[0];
    this.salt = this.user[1];
    this.sock = null;
    const _0x5661a4 = {
      businessId: "672",
      subPageId: "100026367",
      posId: "24067",
      requestSceneType: 1,
      taskType: 1
    };
    this.lookAdInfo = _0x5661a4;
    const _0x18ea0f = {
      businessId: "9362",
      subPageId: "100029907",
      posId: "29741",
      requestSceneType: 1,
      taskType: 2
    };
    this.foodAdInfo = _0x18ea0f;
    const _0x342871 = {
      businessId: "606",
      subPageId: "100024064",
      posId: "20346",
      requestSceneType: 1,
      taskType: 1
    };
    this.boxAdInfo = _0x342871;
    this.adinfo = {};
    this.userId = null;
    this.did = null;
    this.socks5 = null;
    this.adaddnum = 0;
    this.wwip = "";
    this.nwip = "192.168.31.57";
    const _0x129d13 = {
      look: true,
      box: true,
      food: true
    };
    this.adTypesEnabled = _0x129d13;
  }
  async getAccountBasicInfo() {
    x_0x4f5fa9.wait(4000);
    try {
      {
        const _0xf81e4b = {
          url: "https://nebula.kuaishou.com/rest/n/nebula/activity/earn/overview/basicInfo?source=bottom_guide_first",
          method: "GET",
          timeout: 12000,
          headers: {}
        };
        _0xf81e4b.headers["User-Agent"] = x_0x38aa16;
        _0xf81e4b.headers.Cookie = this.ck;
        _0xf81e4b.headers["Content-Type"] = "application/x-www-form-urlencoded";
        const {
          data: _0x3fb421
        } = await x_0x4316eb.request(_0xf81e4b);
        if (_0x3fb421 && _0x3fb421.result === 1 && _0x3fb421.data) {
          this.nickname = "[" + this.index + "] " + _0x3fb421.data.userData?.["nickname"];
          this.totalCoin = _0x3fb421.data.totalCoin;
          this.allCash = _0x3fb421.data.allCash;
          x_0x4f5fa9.log("账号[" + this.nickname + "] 💰 当前金币: " + this.totalCoin + "，💸 当前余额: " + this.allCash);
        }
      }
    } catch (_0x68c070) {
      {
        x_0x4f5fa9.log("账号[" + this.nickname + "] 获取账户信息失败: " + _0x68c070);
      }
    }
  }
  checkCookieVariables() {
    const _0x455982 = ["kpn", "kpf", "userId", "did", "c", "appver", "language", "mod", "did_tag", "egid", "oDid", "androidApiLevel", "newOc", "browseType", "socName", "ftt", "abi", "userRecoBit", "device_abi", "grant_browse_type", "iuid", "rdid"];
    const _0x508bc0 = this.ck;
    const _0x1cdc1c = {};
    if (_0x508bc0) {
      {
        _0x508bc0.split(";").forEach(_0x5689a4 => {
          {
            const [_0x58c527, _0x3ae23e] = _0x5689a4.trim().split("=");
            _0x1cdc1c[_0x58c527] = _0x3ae23e;
          }
        });
      }
    }
    const _0x58a532 = {};
    _0x455982.forEach(_0x1eecb7 => {
      {
        _0x58a532[_0x1eecb7] = _0x1cdc1c[_0x1eecb7];
      }
    });
    let _0x214aa4 = /kuaishou\.api_st=([^;]+)/;
    let _0x2c2569 = _0x508bc0.match(new RegExp(_0x214aa4, ""));
    this.api_st = _0x2c2569[1] || "";
    this.mod = _0x1cdc1c.mod;
    this.userId = _0x1cdc1c.userId;
    this.did = _0x1cdc1c.did;
    this.kpf = _0x1cdc1c.kpf;
    this.androidApiLevel = _0x1cdc1c.androidApiLevel;
    this.kpn = _0x1cdc1c.kpn;
    this.egid = _0x1cdc1c.egid;
    this.oDid = _0x1cdc1c.oDid;
    this.newOc = _0x1cdc1c.newOc;
    this.rdid = _0x1cdc1c.rdid;
    this.appver = _0x1cdc1c.appver;
    this.c = _0x1cdc1c.c;
    this.socName = _0x1cdc1c.socName;
    this.language = _0x1cdc1c.language;
    this.ftt = _0x1cdc1c.ftt;
    this.abi = _0x1cdc1c.abi;
    this.grant_browse_type = _0x1cdc1c.grant_browse_type;
    this.device_abi = _0x1cdc1c.device_abi;
    this.iuid = _0x1cdc1c.iuid;
    this.userRecoBit = _0x1cdc1c.userRecoBit;
    this.browseType = _0x1cdc1c.browseType;
    this.did_tag = _0x1cdc1c.did_tag;
    return _0x58a532;
  }
  getOaid() {
    const _0x5b1b2e = this.ck;
    const _0x178cea = {};
    if (_0x5b1b2e) {
      {
        _0x5b1b2e.split(";").forEach(_0x599e86 => {
          {
            const [_0x2e2e28, _0x3601cd] = _0x599e86.trim().split("=");
            _0x178cea[_0x2e2e28] = _0x3601cd;
          }
        });
      }
    }
    return _0x178cea.oaid || "9e4bb0e5bc326fb1";
  }
  getOsVersion() {
    const _0x3ac5bd = this.ck;
    const _0x4cab03 = {};
    if (_0x3ac5bd) {
      _0x3ac5bd.split(";").forEach(_0x4410c6 => {
        {
          const [_0x512a3c, _0x1a6da9] = _0x4410c6.trim().split("=");
          _0x4cab03[_0x512a3c] = _0x1a6da9;
        }
      });
    }
    return _0x4cab03.osVersion || 10;
  }
  async getIP() {
    if (this.user.length > 2) {
      {
        this.sock = this.user[2];
        if (this.sock && (this.sock.includes("socks5://") || this.sock.includes("socks://"))) {
          try {
            {
              this.socks5 = new x_0x3be25e(this.sock);
              const _0x4af356 = {
                url: "https://www.2eva.cn/api/health",
                method: "GET",
                timeout: 30000,
                httpAgent: this.socks5,
                httpsAgent: this.socks5,
                proxy: false,
                headers: {}
              };
              _0x4af356.headers["User-Agent"] = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36";
              let {
                data: _0x57121f
              } = await x_0x4316eb.request(_0x4af356);
              this.wwip = _0x57121f.ip;
              x_0x4f5fa9.log("账号[" + this.nickname + "] 外网IP:[" + this.wwip + "]");
              return;
            }
          } catch (_0x2fb921) {
            {
              this.socks5 = null;
              console.log("账号[" + this.nickname + "]sock5代理错误");
            }
          }
        }
      }
    }
    try {
      {
        const _0x265499 = {
          url: "https://www.2eva.cn/api/health",
          method: "GET",
          timeout: 30000
        };
        let {
          data: _0x1e297a
        } = await x_0x4316eb.request(_0x265499);
        this.wwip = _0x1e297a.ip;
        x_0x4f5fa9.log("账号[" + this.nickname + "] 代理不存在 采用直连模式[" + this.wwip + "]");
      }
    } catch (_0x376f19) {
      {
        x_0x4f5fa9.log("账号[" + this.nickname + "] 网络获取失败");
      }
    }
  }
  async run() {
    this.checkCookieVariables();
    if (!this.salt) {
      {
        return x_0x4f5fa9.log("账号['" + this.nickname + "'] salt不存在");
      }
    }
    await this.getIP();
    this.oaid = this.getOaid();
    this.osVersion = this.getOsVersion();
    await this.getAccountBasicInfo();
    x_0x4f5fa9.log("账号[" + this.nickname + " 广告设备标识[" + this.oaid + "]]获取系统版本 [" + this.osVersion + "]");
    for (let _0x422300 = 1; _0x422300 <= x_0x4f5fa9.count; _0x422300++) {
      x_0x4f5fa9.log("账号[" + this.nickname + "] ========== 开始第" + _0x422300 + "轮任务 ==========");
      const _0x138534 = Object.values(this.adTypesEnabled).some(_0x448ae0 => {
        {
          return _0x448ae0;
        }
      });
      if (!_0x138534) {
        {
          x_0x4f5fa9.log("账号[" + this.nickname + "] 所有广告类型都已停止，提前结束任务");
          break;
        }
      }
      if (x_0x544818.includes("food") && this.adTypesEnabled.food) {
        {
          const _0x1590c0 = 1;
          x_0x4f5fa9.log("第" + _0x422300 + "轮 - 开始执行饭补广告任务(" + _0x1590c0 + "个)");
          let _0x318285 = 0;
          for (let _0xf77a57 = 1; _0xf77a57 <= _0x1590c0; _0xf77a57++) {
            {
              x_0x4f5fa9.log("账号[" + this.nickname + "] 第" + _0x422300 + "轮第" + _0xf77a57 + "次请求 [饭补广告]");
              let _0x4ee22d = await this.loadAd("food");
              if (!_0x4ee22d) {
                x_0x4f5fa9.log("账号[" + this.nickname + "] 获取广告信息失败，跳过本次饭补广告");
                this.adTypesEnabled.food = false;
                break;
              }
              await x_0x4f5fa9.wait(Math.floor(Math.random() * 4 + 2) * 1000);
              let _0x2186f6 = await this.preSub(_0x4ee22d.cid, _0x4ee22d.llsid);
              if (!_0x2186f6) {
                {
                  x_0x4f5fa9.log("账号[" + this.nickname + "] 预加载失败，跳过本次饭补广告");
                  continue;
                }
              }
              const _0x364780 = Math.floor((_0x4ee22d.watchAdTime + Math.floor(Math.random() * 8 + 2) * 1000) / 1000);
              x_0x4f5fa9.log("账号[" + this.nickname + "] 广告时间" + _0x4ee22d.watchAdTime / 1000 + "秒 随机延迟" + _0x364780 + "秒");
              await x_0x4f5fa9.wait(_0x364780 * 1000);
              const {
                neoAmount: _0x1a78b1,
                status: _0x2f7eed
              } = await this.subAd(_0x4ee22d.cid, _0x4ee22d.llsid, _0x4ee22d.adExtInfo, Date.now(), _0x364780, _0x4ee22d.materialTime, _0x4ee22d.watchAdTime);
              if (_0x2f7eed == 2) {
                return;
              }
              const _0x50bb4b = Math.floor(Math.random() * 4 + 4);
              x_0x4f5fa9.log("✅ 账号[" + this.nickname + "] 获取金币[" + _0x1a78b1 + "] 等待[" + _0x50bb4b + "秒]");
              await this.getAccountBasicInfo();
              if (_0x1a78b1 < 20) {
                {
                  this.adTypesEnabled.food = false;
                  x_0x4f5fa9.log("❌ 账号[" + this.nickname + "] 领取金币不足20 等待进入下一轮");
                  await x_0x4f5fa9.wait(_0x50bb4b * 1000);
                  break;
                }
              } else {
                {
                  this.adaddnum = this.adaddnum + 1;
                  _0x318285++;
                  if (_0x318285 < _0x1590c0) {
                    {
                      await x_0x4f5fa9.wait(_0x50bb4b * 1000);
                    }
                  } else {
                    {
                      x_0x4f5fa9.log("账号[" + this.nickname + "] 第" + _0x422300 + "轮饭补广告任务完成，成功" + _0x318285 + "/" + _0x1590c0 + "个");
                      await x_0x4f5fa9.wait(_0x50bb4b * 1000);
                    }
                  }
                }
              }
            }
          }
        }
      } else {
        if (!this.adTypesEnabled.food) {
          x_0x4f5fa9.log("第" + _0x422300 + "轮 - 饭补广告任务已停止");
        }
      }
      if (x_0x544818.includes("box") && this.adTypesEnabled.box) {
        {
          const _0x3d63fb = 1;
          x_0x4f5fa9.log("账号[" + this.nickname + "] 第" + _0x422300 + "轮 - 开始执行宝箱广告任务(" + _0x3d63fb + "个)");
          let _0x28cd35 = 0;
          for (let _0x2f096a = 1; _0x2f096a <= _0x3d63fb; _0x2f096a++) {
            x_0x4f5fa9.log("账号[" + this.nickname + "] 第" + _0x422300 + "轮第" + _0x2f096a + "次请求 [宝箱广告]");
            let _0x2726f1 = await this.loadAd("box");
            if (!_0x2726f1) {
              {
                x_0x4f5fa9.log("账号[" + this.nickname + "] 获取广告信息失败，跳过本次宝箱广告");
                this.adTypesEnabled.box = false;
                break;
              }
            }
            await x_0x4f5fa9.wait(Math.floor(Math.random() * 4 + 2) * 1000);
            let _0x13c719 = await this.preSub(_0x2726f1.cid, _0x2726f1.llsid);
            if (!_0x13c719) {
              x_0x4f5fa9.log("账号[" + this.nickname + "]  预加载失败，跳过本次宝箱广告");
              continue;
            }
            const _0x24b209 = Math.floor((_0x2726f1.watchAdTime + Math.floor(Math.random() * 8 + 2) * 1000) / 1000);
            x_0x4f5fa9.log("账号[" + this.nickname + "] 广告时间" + _0x2726f1.watchAdTime / 1000 + "秒 随机延迟" + _0x24b209 + "秒");
            await x_0x4f5fa9.wait(_0x24b209 * 1000);
            const {
              neoAmount: _0x38e925,
              status: _0x4303cf
            } = await this.subAd(_0x2726f1.cid, _0x2726f1.llsid, _0x2726f1.adExtInfo, Date.now(), _0x24b209, _0x2726f1.materialTime, _0x2726f1.watchAdTime);
            if (_0x4303cf == 2) {
              {
                return;
              }
            }
            const _0x4e181e = Math.floor(Math.random() * 4 + 4);
            x_0x4f5fa9.log("✅ 账号[" + this.nickname + "] 获取金币[" + _0x38e925 + "]  等待[" + _0x4e181e + "秒]");
            await this.getAccountBasicInfo();
            if (_0x38e925 < 20) {
              {
                this.adTypesEnabled.box = false;
                x_0x4f5fa9.log("❌ 账号[" + this.nickname + "] 领取金币不足20 等待进入下一轮");
                await x_0x4f5fa9.wait(_0x4e181e * 1000);
                break;
              }
            } else {
              {
                this.adaddnum = this.adaddnum + 1;
                _0x28cd35++;
                if (_0x28cd35 < _0x3d63fb) {
                  {
                    await x_0x4f5fa9.wait(_0x4e181e * 1000);
                  }
                } else {
                  {
                    x_0x4f5fa9.log("账号[" + this.nickname + "] 第" + _0x422300 + "轮宝箱广告任务完成，成功" + _0x28cd35 + "/" + _0x3d63fb + "个");
                    await x_0x4f5fa9.wait(_0x4e181e * 1000);
                  }
                }
              }
            }
          }
        }
      } else {
        {
          if (!this.adTypesEnabled.box) {
            {
              x_0x4f5fa9.log("账号[" + this.nickname + "] 第" + _0x422300 + "轮 - 宝箱广告任务已停止");
            }
          }
        }
      }
      if (x_0x544818.includes("look") && this.adTypesEnabled.look) {
        const _0x5c3b4d = 3;
        x_0x4f5fa9.log("账号[" + this.nickname + "] 第" + _0x422300 + "轮 - 开始执行看广告任务(" + _0x5c3b4d + "个)");
        let _0x4a5b32 = 0;
        for (let _0x169bb7 = 1; _0x169bb7 <= _0x5c3b4d; _0x169bb7++) {
          x_0x4f5fa9.log("账号[" + this.nickname + "] 第" + _0x422300 + "轮第" + _0x169bb7 + "次请求 [看广告]");
          let _0x379f22 = await this.loadAd("look");
          if (!_0x379f22) {
            x_0x4f5fa9.log("账号[" + this.nickname + "] 获取广告信息失败，跳过本次看广告");
            this.adTypesEnabled.look = false;
            break;
          }
          await x_0x4f5fa9.wait(Math.floor(Math.random() * 4 + 2) * 1000);
          let _0x1a62ec = await this.preSub(_0x379f22.cid, _0x379f22.llsid);
          if (!_0x1a62ec) {
            {
              x_0x4f5fa9.log("账号[" + this.nickname + "] 预加载失败，跳过本次看广告");
              continue;
            }
          }
          const _0x5ecac9 = Math.floor((_0x379f22.watchAdTime + Math.floor(Math.random() * 8 + 2) * 1000) / 1000);
          x_0x4f5fa9.log("账号[" + this.nickname + "] 广告时间" + _0x379f22.watchAdTime / 1000 + "秒 随机延迟" + _0x5ecac9 + "秒");
          await x_0x4f5fa9.wait(_0x5ecac9 * 1000);
          const {
            neoAmount: _0x560c45,
            status: _0xda800e
          } = await this.subAd(_0x379f22.cid, _0x379f22.llsid, _0x379f22.adExtInfo, Date.now(), _0x5ecac9, _0x379f22.materialTime, _0x379f22.watchAdTime);
          if (_0xda800e == 2) {
            {
              return;
            }
          }
          const _0x4c584f = Math.floor(Math.random() * 4 + 4);
          x_0x4f5fa9.log("✅ 账号[" + this.nickname + "] 获取金币[" + _0x560c45 + "] 等待[" + _0x4c584f + "秒]");
          await this.getAccountBasicInfo();
          if (_0x560c45 < 20) {
            this.adTypesEnabled.look = false;
            x_0x4f5fa9.log("❌账号[" + this.nickname + "] 领取金币不足20 等待进入下一轮");
            await x_0x4f5fa9.wait(_0x4c584f * 1000);
            break;
          } else {
            this.adaddnum = this.adaddnum + 1;
            _0x4a5b32++;
            if (_0x4a5b32 < _0x5c3b4d) {
              await x_0x4f5fa9.wait(_0x4c584f * 1000);
            } else {
              const _0x5470f5 = Math.floor(Math.random() * 4 + 4);
              x_0x4f5fa9.log("账号[" + this.nickname + "] 第" + _0x422300 + "轮看广告任务完成，成功" + _0x4a5b32 + "/" + _0x5c3b4d + "个");
              await x_0x4f5fa9.wait(_0x5470f5 * 1000);
            }
          }
        }
      } else {
        {
          if (!this.adTypesEnabled.look) {
            x_0x4f5fa9.log("账号[" + this.nickname + "] 第" + _0x422300 + "轮 - 看广告任务已停止");
          }
        }
      }
      x_0x4f5fa9.log("账号[" + this.nickname + "] ========== 第" + _0x422300 + "轮任务完成 ==========");
      const _0x542330 = Object.values(this.adTypesEnabled).filter(_0x1646a0 => {
        {
          return _0x1646a0;
        }
      }).length;
      if (_0x542330 === 0) {
        x_0x4f5fa9.log("账号[" + this.nickname + "] 所有广告类型都已停止，提前结束全部任务");
        break;
      }
      if (_0x422300 < x_0x4f5fa9.count) {
        {
          const _0x4217dc = Math.floor(Math.random() * 20 + 10);
          x_0x4f5fa9.log("账号[" + this.nickname + "] 等待" + _0x4217dc + "秒后开始下一轮...");
          await x_0x4f5fa9.wait(_0x4217dc * 1000);
        }
      }
    }
    x_0x4f5fa9.log("账号[" + this.nickname + "] 所有任务完成！共执行" + Math.min(x_0x4f5fa9.count, this.getCompletedRounds()) + "轮任务");
  }
  getCompletedRounds() {
    let _0x242bc0 = 0;
    for (let _0x15b675 = 1; _0x15b675 <= x_0x4f5fa9.count; _0x15b675++) {
      if (Object.values(this.adTypesEnabled).some(_0x465ad6 => {
        return _0x465ad6;
      })) {
        {
          _0x242bc0 = _0x15b675;
        }
      } else {
        break;
      }
    }
    return _0x242bc0;
  }
  async loadReqParams(_0xdbea91, _0x2c61c3, _0x335e8d) {
    let _0x34d5a2 = {
      mod: this.mod,
      c: this.c,
      appver: this.appver,
      language: this.language,
      ud: this.userId,
      did_tag: this.did_tag,
      egid: this.egid,
      kpf: this.kpf,
      oDid: this.oDid,
      kpn: this.kpn,
      newOc: this.newOc,
      androidApiLevel: this.androidApiLevel,
      browseType: this.browseType,
      socName: this.socName,
      abi: this.abi,
      ftt: this.ftt,
      userRecoBit: this.userRecoBit,
      device_abi: this.device_abi,
      grant_browse_type: this.grant_browse_type,
      iuid: this.iuid,
      rdid: this.rdid,
      did: this.did
    };
    try {
      let _0x51eb32 = await x_0x4316eb.request({
        url: "http://47.109.187.158:6848/nssig",
        headers: x_0x34d87b,
        method: "POST",
        data: {
          path: _0xdbea91,
          salt: _0x335e8d,
          data: x_0x4f5fa9.queryStr(_0x2c61c3) + "&" + x_0x4f5fa9.queryStr(_0x34d5a2)
        }
      });
      if (_0x51eb32.data) {
        {
          const _0x55be27 = {
            sig: _0x51eb32.data.sig,
            __NS_xfalcon: "",
            __NStokensig: _0x51eb32.data.nstokensig,
            __NS_sig3: _0x51eb32.data.nssig3
          };
          Object.assign(_0x34d5a2, _0x55be27);
          return _0x34d5a2;
        }
      } else {
        return null;
      }
    } catch (_0x3bcab8) {
      console.log("加载nssig3失败");
      return null;
    }
  }
  async encsign(_0x4c9536) {
    try {
      {
        let _0x3ae93 = JSON.stringify(_0x4c9536);
        const _0x456240 = {
          data: _0x3ae93
        };
        const _0x571717 = {
          url: "http://47.109.187.158:6848/encsign",
          headers: x_0x34d87b,
          method: "POST",
          data: _0x456240
        };
        const _0x1b2545 = await x_0x4316eb.request(_0x571717);
        return _0x1b2545.data || null;
      }
    } catch (_0x78146d) {
      console.log("加载encsign 失败");
      return null;
    }
  }
  loadAdInfo(_0x17427c) {
    if (_0x17427c == "look") {
      {
        this.adinfo = this.lookAdInfo;
      }
    }
    if (_0x17427c == "food") {
      {
        this.adinfo = this.foodAdInfo;
      }
    }
    if (_0x17427c == "box") {
      this.adinfo = this.boxAdInfo;
    }
    if (this.adaddnum != 0) {
      {
        this.adinfo.requestSceneType = 7;
      }
    }
    const _0x2f38c6 = {
      appId: "kuaishou_nebula",
      name: "快手极速版",
      packageName: "com.kuaishou.nebula",
      version: this.appver,
      versionCode: -1
    };
    const _0x12c6c8 = {
      width: 1080,
      height: 2068
    };
    const _0x52ffc2 = {
      latitude: 0,
      longitude: 0
    };
    const _0x37de6c = {
      toastDesc: null,
      toastImgUrl: null
    };
    const _0xe1dae0 = {
      exitInfo: _0x37de6c
    };
    let _0x300118 = {
      appInfo: _0x2f38c6,
      deviceInfo: {
        oaid: this.oaid,
        osType: 1,
        osVersion: 12,
        language: this.language,
        deviceId: "" + this.did,
        screenSize: _0x12c6c8,
        ftt: "",
        supportGyroscope: true
      },
      networkInfo: {
        ip: this.nwip,
        connectionType: 100
      },
      geoInfo: _0x52ffc2,
      userInfo: {
        userId: this.userId,
        age: 0,
        gender: ""
      },
      impInfo: [{
        pageId: 11101,
        subPageId: this.adinfo.subPageId,
        action: 0,
        width: 0,
        height: 0,
        browseType: this.browseType,
        requestSceneType: this.adinfo.requestSceneType,
        lastReceiveAmount: 0,
        impExtData: "{\"openH5AdCount\":0,\"sessionLookedCompletedCount\":" + this.adaddnum + ",\"sessionType\":\"1\",\"neoParams\":\"" + Buffer.from(JSON.stringify({
          pageId: 11101,
          subPageId: this.adinfo.subPageId,
          posId: 0,
          businessId: this.adinfo.businessId,
          extParams: "",
          customData: _0xe1dae0,
          pendantType: 1,
          displayType: 2,
          singlePageId: 0,
          singleSubPageId: 0,
          channel: 0,
          countdownReport: false,
          themeType: 0,
          mixedAd: false,
          fullMixed: true,
          autoReport: true,
          fromTaskCenter: false,
          searchInspireSchemeInfo: null,
          amount: 0
        })).toString("base64") + "\"}",
        impExtData: "{}",
        mediaExtData: "{}",
        session: x_0x4f5fa9.uuid()
      }],
      adClientInfo: "{\"ipdxIP\":\"" + this.wwip + "\"}"
    };
    return _0x300118;
  }
  async loadAd(_0x22d3a0) {
    const _0x2e954c = this.loadAdInfo(_0x22d3a0);
    const _0xb14c55 = await this.encsign(_0x2e954c);
    if (_0xb14c55 == null) {
      {
        x_0x4f5fa9.log("获取encsign失败");
        return;
      }
    }
    const _0x3dd7e8 = {
      encData: _0xb14c55.encdata,
      sign: _0xb14c55.sign,
      cs: false,
      client_key: "2ac2a76d",
      videoModelCrowdTag: "1_23",
      watchStage: "android",
      "kuaishou.api_st": this.api_st,
      uQaTag: "1##cmWns:-0#swLdgl:99#ecPp:--#cmNt:-1"
    };
    const _0x196689 = await this.loadReqParams("/rest/e/reward/mixed/ad", _0x3dd7e8, this.salt);
    if (_0x196689 == null) {
      {
        x_0x4f5fa9.log("获取广告信息失败");
        return;
      }
    }
    try {
      {
        let {
          data: _0x938d10
        } = await x_0x4316eb.request({
          url: "https://api.e.kuaishou.com/rest/e/reward/mixed/ad",
          params: _0x196689,
          httpAgent: this.socks5,
          httpsAgent: this.socks5,
          proxy: false,
          timeout: 30000,
          method: "POST",
          headers: {
            Host: "api.e.kuaishou.com",
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
            Cookie: "kuaishou.api_st=" + this.api_st,
            "User-Agent": x_0x38aa16
          },
          data: _0x3dd7e8
        });
        if (_0x938d10.errorMsg === "OK" && _0x938d10.feeds && _0x938d10.feeds[0] && _0x938d10.feeds[0].ad) {
          const _0x41399b = _0x938d10.feeds[0].caption || _0x938d10.feeds[0].ad?.["caption"] || "";
          if (_0x41399b) {
            x_0x4f5fa9.log("账号[" + this.nickname + "] 成功获取到广告信息：" + _0x41399b);
          } else {
            {
              x_0x4f5fa9.log("账号[" + this.nickname + "] 获取广告信息失败");
              return null;
            }
          }
          const _0x3af01d = _0x938d10.feeds[0].exp_tag || "";
          const _0x29a9fb = _0x3af01d.split("/")[1]?.["split"]("_")?.[0] || "";
          if (_0x938d10.feeds[0].streamManifest) {
            {
              const _0x62e0ae = {
                cid: _0x938d10.feeds[0].ad.creativeId,
                llsid: _0x29a9fb,
                adExtInfo: _0x938d10.feeds[0].ad.adDataV2.inspireAdInfo.adExtInfo,
                materialTime: _0x938d10.feeds[0].streamManifest.adaptationSet[0].duration,
                watchAdTime: _0x938d10.feeds[0].ad.adDataV2.inspireAdInfo.inspireAdBillTime
              };
              return _0x62e0ae;
            }
          } else {
            {
              const _0x34f9e2 = {
                cid: _0x938d10.feeds[0].ad.creativeId,
                llsid: _0x29a9fb,
                adExtInfo: _0x938d10.feeds[0].ad.adDataV2.inspireAdInfo.adExtInfo,
                materialTime: 3000,
                watchAdTime: _0x938d10.feeds[0].ad.adDataV2.inspireAdInfo.inspireAdBillTime
              };
              return _0x34f9e2;
            }
          }
        } else {
          {
            x_0x4f5fa9.log("账号[" + this.nickname + "] 获取广告信息失败");
            return null;
          }
        }
      }
    } catch (_0x196a78) {
      {
        console.log("加载广告信息失败");
        return null;
      }
    }
  }
  async preSub(_0x1fefb7, _0x1fad37) {
    const _0x69022c = {
      bizStr: JSON.stringify({
        pageId: 11101,
        subPageId: this.adinfo.subPageId,
        posId: this.adinfo.posId,
        taskId: this.adinfo.businessId,
        items: [{
          basicType: 1,
          creativeId: _0x1fefb7,
          llsid: _0x1fad37,
          mediaType: "video"
        }]
      }),
      cs: false,
      client_key: "2ac2a76d",
      videoModelCrowdTag: "",
      watchStage: "android",
      "kuaishou.api_st": this.api_st,
      uQaTag: "1##cmWns:-0#swLdgl:99#ecPp:--#cmNt:-1"
    };
    let _0x5df7c1 = await this.loadReqParams("/rest/r/ad/exposure/report", _0x69022c, this.salt);
    if (_0x5df7c1 == null) {
      return x_0x4f5fa9.log("获取曝光信息失败");
    }
    try {
      {
        let {
          data: _0x56d190
        } = await x_0x4316eb.request({
          url: "https://api.e.kuaishou.com/rest/r/ad/exposure/report",
          params: _0x5df7c1,
          httpAgent: this.socks5,
          httpsAgent: this.socks5,
          proxy: false,
          timeout: 30000,
          headers: {
            Host: "api.e.kuaishou.com",
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
            Cookie: "kuaishou.api_st=" + this.api_st,
            "User-Agent": x_0x38aa16
          },
          method: "POST",
          data: _0x69022c
        });
        return _0x56d190.result == 1 ? true : (x_0x4f5fa9.log("账号[" + this.nickname + "] 曝光广告失败"), false);
      }
    } catch (_0x3b1f49) {
      console.log("账号[" + this.nickname + "] 曝光广告失败");
      return false;
    }
  }
  async subAd(_0x127b87, _0x3a0a0c, _0x263c4b, _0x23e64d, _0x555bbe, _0x56b76f, _0x2bcc8a) {
    const _0x28c561 = _0x23e64d + _0x555bbe * 1000;
    const _0x156192 = {
      bizStr: JSON.stringify({
        businessId: this.adinfo.businessId,
        endTime: _0x28c561,
        extParams: "",
        mediaScene: "video",
        neoInfos: [{
          clientExtInfo: "{\"serialPaySuccess\":true}",
          creativeId: _0x127b87,
          extInfo: "",
          llsid: _0x3a0a0c,
          adExtInfo: _0x263c4b,
          materialTime: _0x56b76f,
          watchAdTime: _0x2bcc8a,
          requestSceneType: this.adinfo.requestSceneType,
          taskType: this.adinfo.taskType,
          watchExpId: "",
          watchStage: 0
        }],
        pageId: 11101,
        posId: this.adinfo.posId,
        reportType: 0,
        sessionId: "adNeo-" + this.userId + "-" + this.adinfo.subPageId + "-" + _0x23e64d,
        startTime: _0x28c561,
        subPageId: this.adinfo.subPageId
      }),
      cs: false,
      client_key: "2ac2a76d",
      videoModelCrowdTag: "",
      watchStage: "android",
      "kuaishou.api_st": this.api_st,
      uQaTag: "1##cmWns:-0#swLdgl:99#ecPp:--#cmNt:-1"
    };
    const _0x5d2db8 = await this.loadReqParams("/rest/r/ad/task/report", _0x156192, this.salt);
    if (_0x5d2db8 == null) {
      console.log("获取sign失败 请重试");
      return 0;
    }
    try {
      {
        let {
          data: _0x113f55
        } = await x_0x4316eb.request({
          url: "https://api.e.kuaishou.com/rest/r/ad/task/report",
          httpAgent: this.socks5,
          httpsAgent: this.socks5,
          proxy: false,
          timeout: 30000,
          params: _0x5d2db8,
          method: "POST",
          headers: {
            Host: "api.e.kuaishou.com",
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
            Cookie: "kuaishou.api_st=" + this.api_st,
            "User-Agent": x_0x38aa16
          },
          data: _0x156192
        });
        if (_0x113f55.message == "成功") {
          {
            const _0x4a6ad7 = {
              neoAmount: _0x113f55.data.neoAmount,
              status: 1
            };
            return _0x4a6ad7;
          }
        } else {
          console.log(_0x113f55);
          const _0x20612b = {
            neoAmount: 0,
            status: 2
          };
          return _0x20612b;
        }
      }
    } catch (_0x4f2955) {
      console.log(_0x4f2955);
      const _0x145c68 = {
        neoAmount: 0,
        status: 1
      };
      return _0x145c68;
    }
  }
}
function x_0x294ec6(_0x1f0c83) {
  return new class {
    constructor(_0x877c1b) {
      {
        this.userIdx = 1;
        this.userList = [];
        this.userCount = 0;
        this.name = _0x877c1b;
        this.startTime = new Date().getTime();
        this.log(this.name + ",开始!");
        this.count = 15;
      }
    }
    checkEnv() {
      {
        const _0x2d18f2 = (this.isNode() ? process.env.ksck : "") || "";
        this.userList = _0x2d18f2.split(["&", "\n"].find(_0x57085e => {
          {
            return _0x2d18f2.includes(_0x57085e);
          }
        }) || "&").filter(_0x2e6e3a => {
          return _0x2e6e3a;
        });
        this.userCount = this.userList.length;
        const _0x4f47a3 = (this.isNode() ? process.env.count : 15) || 15;
        this.count = _0x4f47a3;
        const _0x52ea71 = (this.isNode() ? process.env.adType : "food,look,box") || "food,look,box";
        x_0x544818 = _0x52ea71.split(",");
        const _0x1a8bff = (this.isNode() ? process.env.km : "") || "";
        x_0x34d87b.km = _0x1a8bff;
        this.log("共找到" + this.userCount + "个账号,运行" + this.count + "轮,广告为" + _0x52ea71);
      }
    }
    isNode() {
      {
        return "undefined" != typeof module && !!module.exports;
      }
    }
    queryStr(_0x2a8207) {
      {
        const _0x355e74 = require("querystring");
        return _0x355e74.stringify(_0x2a8207);
      }
    }
    uuid() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (_0x5a0f96) {
        var _0x567499 = Math.random() * 16 | 0;
        var _0x2a25e4 = _0x5a0f96 == "x" ? _0x567499 : _0x567499 & 3 | 8;
        return _0x2a25e4.toString(16);
      });
    }
    log(_0x308581) {
      {
        const _0x16c2ba = new Date();
        console.log(x_0x5f5b07(_0x16c2ba, "MM-DD HH:mm:ss"), _0x308581);
      }
    }
    wait(_0x407d1a) {
      {
        return new Promise(_0x2b1195 => {
          {
            return setTimeout(_0x2b1195, _0x407d1a);
          }
        });
      }
    }
    async done() {
      const _0x4fa7dd = new Date().getTime();
      const _0x3cfba7 = (_0x4fa7dd - this.startTime) / 1000;
      this.log(this.name + ",结束!" + _0x3cfba7 + "秒");
      if (this.isNode()) {
        process.exit(1);
      }
    }
  }(_0x1f0c83);
}
const x_0x4f5fa9 = new x_0x294ec6("eva");
async function x_0xf3ead1() {
  const _0x32a385 = {
    url: "http://47.109.187.158:6848/notice",
    method: "POST",
    headers: {}
  };
  _0x32a385.headers.Host = "api.e.kuaishou.com";
  _0x32a385.headers["Content-Type"] = "application/x-www-form-urlencoded; charset=UTF-8";
  const {
    data: _0x4ff828
  } = await x_0x4316eb.request(_0x32a385);
  console.log(_0x4ff828);
}
!(async () => {
  await x_0xf3ead1();
  x_0x4f5fa9.checkEnv();
  await Promise.all(x_0x4f5fa9.userList.map(_0x5e0605 => new x_0x2c4c69(_0x5e0605).run()));
})().catch(_0x3fa6a3 => {
  return x_0x4f5fa9.log(_0x3fa6a3);
}).finally(() => {
  return x_0x4f5fa9.done();
});