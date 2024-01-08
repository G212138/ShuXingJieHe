
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/frame/scripts/Http/NetWork.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9cd01aQNbFMUY4sUMN0yYH5', 'NetWork');
// frame/scripts/Http/NetWork.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NetWork = exports.NetWorkClass = void 0;
var ConstValue_1 = require("../../../game/scripts/Data/ConstValue");
var UIManager_1 = require("../Manager/UIManager");
var GameMsg_1 = require("../SDK/GameMsg");
var UIHelp_1 = require("../Utils/UIHelp");
var NetWorkClass = /** @class */ (function () {
    function NetWorkClass() {
        //判断是否是线上   URL里不加参数则默认为测试环境
        this.isOnlineEnv = this.GetIsOnline() == 'online';
        //判断是否是pc预加载的协议    URL里不加参数则默认为非预加载
        this.isOwcr = this.GetBPreload();
        this.BASE = this.isOnlineEnv
            ? 'https://courseware-online.speiyou.com'
            : 'https://ceshi-courseware.speiyou.com'; /*  */
        // public readonly BASE = this.isOnlineEnv ? 'https://courseware-online.saasp.vdyoo.com' : 'https://ceshi-courseware-online.saasp.vdyoo.com';
        // public readonly COS_URL = this.isOnlineEnv ?
        //     'https://classroom-api-online.saasp.vdyoo.com/micro-class/storage/v1/tencent/sts'
        //     : 'https://test-class-api-online.saasp.vdyoo.com/micro-class/storage/v1/tencent/sts';
        // public readonly COS_BASE_URL = this.isOnlineEnv ? 'https://micro-class.xuepeiyou.com' : 'https://micro-class-test.xuepeiyou.com';
        this.GET_QUESTION = this.BASE + '/get';
        this.GET_USER_PROGRESS = this.BASE + '/get/answer';
        this.GET_TITLE = this.BASE + '/get/title';
        this.ADD = this.BASE + '/add';
        this.MODIFY = this.BASE + '/modify';
        this.CLEAR = this.BASE + '/clear';
        this.empty = false; //清理脏数据的开关，在URL里面拼此参数 = true；
        //新课堂参数
        this.userId = null; //用户id
        this.chapterId = null; //直播讲id
        this.coursewareId = null; //题目信息   用于交互游戏自身查题目信息
        this.titleId = null; //交互游戏绑定id   绑定的时候用（监课平台）  学生端不传
        this.bLive = null; //是否是直播
        this.bPreload = null; //是否预加载  （cdn/zip)
        this.env = null; //运行环境（线上/测试）
        this.app = null; //App名称
        this.platform = null; //硬件平台信息（pc/iPad/android/androidPad/web）
        this.channel = null; //使用方(辅导端、学生端、未来黑板、配齐、教研云、……）
        this.browser = null; //浏览器信息（内核及版本）
        this.appVersion = null; //端的版本信息
        this.isTeacher = false; //是否为教师（通过同步的get_role返回的是否为'teacher'）
        this.isSync = false; //是否为同步（通过同步的get_is_sync返回是否为1/true）
        this.isOffline = 0; //是否为离线模式
        this.isMaster = null; //是否是主动发心跳的一方
        this.isSupportKeepPlay = false; //是否支持接着玩重新玩
        this.theRequest = null;
    }
    NetWorkClass.getInstance = function () {
        if (this.instance == null) {
            this.instance = new NetWorkClass();
        }
        return this.instance;
    };
    NetWorkClass.prototype.setIsSync = function (isSync) {
        isSync = isSync == null ? false : isSync;
        exports.NetWork.isSync = isSync;
    };
    NetWorkClass.prototype.setIsTeacher = function (role) {
        var isTeacher = role == 'teacher';
        exports.NetWork.isTeacher = isTeacher;
    };
    NetWorkClass.prototype.setIsPreload = function (isPreload) {
        isPreload = isPreload == null ? false : isPreload;
        UIManager_1.UIManager.isGameShowing = !isPreload;
    };
    NetWorkClass.prototype.setIsMaster = function (isMaster) {
        isMaster = isMaster == null ? false : isMaster;
        exports.NetWork.isMaster = isMaster;
    };
    NetWorkClass.prototype.setIsSupportKeepPlay = function (isSupportKeepPlay) {
        exports.NetWork.isSupportKeepPlay = isSupportKeepPlay;
        if (!isSupportKeepPlay) {
            exports.NetWork.isMaster = exports.NetWork.isTeacher;
        }
        console.log("isSupportKeepPlay: " + isSupportKeepPlay);
    };
    /**
     * 请求网络Post 0成功 1超时
     * @param url
     * @param openType
     * @param contentType
     * @param callback
     * @param params
     */
    NetWorkClass.prototype.httpRequest = function (url, openType, contentType, callback, params) {
        var _this = this;
        if (callback === void 0) { callback = null; }
        if (params === void 0) { params = ''; }
        //------------------离线模式-------------------------
        if (this.isOffline && url.substring(0, this.GET_QUESTION.length) == this.GET_QUESTION) {
            GameMsg_1.default.recv_json_data(function (data) {
                console.log('recv_json_data:', data);
                if (callback && data.jsonData.errcode == 0) {
                    callback(false, data.jsonData);
                }
                else {
                    UIHelp_1.UIHelp.showErrorPanel(data.jsonData.errmsg + ',请联系客服！', '', '', '确定', function () {
                        _this.httpRequest(url, openType, contentType, callback, params);
                    }, false);
                }
            });
            GameMsg_1.default.request_json_data({ coursewareId: this.coursewareId });
            return;
        }
        if (ConstValue_1.ConstValue.IS_TEACHER) {
            if (!this.titleId) {
                //教师端没有titleId的情况
                UIHelp_1.UIHelp.showErrorPanel('URL参数错误,缺少titleId,请联系技术人员！', '', '', '确定');
                return;
            }
        }
        else {
            //新课堂学生端  判断所有参数
            if (!ConstValue_1.ConstValue.IS_TEACHER &&
                (!this.userId || !this.coursewareId || !this.env || !this.app || !this.channel || !this.browser)) {
                GameMsg_1.default.URLError(this.theRequest);
                UIHelp_1.UIHelp.showErrorPanel('URL参数错误,请联系客服！', '', '', '确定');
                return;
            }
        }
        var xhr = new XMLHttpRequest();
        xhr.open(openType, url);
        xhr.timeout = 10000;
        xhr.setRequestHeader('Content-Type', contentType);
        xhr.withCredentials = true;
        //回调
        xhr.onreadystatechange = function () {
            console.log('httpRequest rsp status', xhr.status, '        xhr.readyState', xhr.readyState, '        xhr.responseText', xhr.responseText);
            if (xhr.readyState == 4 && xhr.status >= 200 && xhr.status <= 400) {
                var response = JSON.parse(xhr.responseText);
                if (callback && response.errcode == 0) {
                    callback(false, response);
                }
                else {
                    GameMsg_1.default.httpError(response.errmsg);
                    if (ConstValue_1.ConstValue.IS_EDITIONS) {
                        UIHelp_1.UIHelp.showErrorPanel(response.errmsg + ',请联系客服！', '', '', '确定', function () {
                            _this.httpRequest(url, openType, contentType, callback, params);
                        }, false);
                    }
                }
            }
        };
        //超时回调
        xhr.ontimeout = function (event) {
            GameMsg_1.default.httpTimeOut('网络不佳，请稍后重试');
            if (ConstValue_1.ConstValue.IS_EDITIONS) {
                UIHelp_1.UIHelp.showErrorPanel('网络不佳，请稍后重试', '', '若重新连接无效，请联系客服', '重新连接', function () {
                    _this.httpRequest(url, openType, contentType, callback, params);
                }, true);
            }
            console.log('httpRequest timeout');
            callback && callback(true, null);
        };
        //出错
        xhr.onerror = function (error) {
            if (ConstValue_1.ConstValue.IS_EDITIONS) {
                UIHelp_1.UIHelp.showErrorPanel('网络出错，请稍后重试', '若重新连接无效，请联系客服', '', '重新连接', function () {
                    _this.httpRequest(url, openType, contentType, callback, params);
                }, true);
            }
            console.log('httpRequest error');
            callback && callback(true, null);
        };
        xhr.send(params);
    };
    /**
     * 获取url参数
     */
    NetWorkClass.prototype.GetRequest = function () {
        if (this.theRequest != null) {
            return this.theRequest;
        }
        this.theRequest = new Object();
        var url = location.search; //获取url中"?"符后的字串
        if (url.indexOf('?') != -1) {
            var str = url.substr(1);
            var strs = str.split('&');
            for (var i = 0; i < strs.length; i++) {
                this.theRequest[strs[i].split('=')[0]] = decodeURIComponent(strs[i].split('=')[1]);
            }
        }
        //新课堂url必需参数
        this.userId = this.theRequest['userId'];
        this.chapterId = this.theRequest['chapterId'];
        this.coursewareId = this.theRequest['coursewareId'];
        this.titleId = this.theRequest['titleId'];
        this.bLive = this.theRequest['bLive'];
        this.bPreload = this.theRequest['bPreload'];
        this.env = this.theRequest['env'];
        this.app = this.theRequest['app'];
        this.platform = this.theRequest['platform'];
        this.channel = this.theRequest['channel'];
        this.browser = this.theRequest['browser'];
        this.appVersion = this.theRequest['appVersion'];
        this.empty = this.theRequest['empty'];
        this.isOffline = parseInt(this.theRequest['isOffline']); //离线模式
        return this.theRequest;
    };
    NetWorkClass.prototype.GetBPreload = function () {
        var BPreload = 0;
        if (this.GetRequest()['bPreload']) {
            BPreload = this.GetRequest()['bPreload'];
        }
        return BPreload;
    };
    NetWorkClass.prototype.GetIsOnline = function () {
        var isOnline = 'test';
        if (this.GetRequest()['env']) {
            isOnline = this.GetRequest()['env'];
        }
        return isOnline;
    };
    return NetWorkClass;
}());
exports.NetWorkClass = NetWorkClass;
exports.NetWork = NetWorkClass.getInstance();

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWVcXHNjcmlwdHNcXEh0dHBcXE5ldFdvcmsudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0VBQW1FO0FBQ25FLGtEQUFpRDtBQUNqRCwwQ0FBcUM7QUFDckMsMENBQXlDO0FBQ3pDO0lBQUE7UUFHSSw0QkFBNEI7UUFDWixnQkFBVyxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxRQUFRLENBQUM7UUFDN0QsbUNBQW1DO1FBQ25CLFdBQU0sR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDNUIsU0FBSSxHQUFHLElBQUksQ0FBQyxXQUFXO1lBQ25DLENBQUMsQ0FBQyx1Q0FBdUM7WUFDekMsQ0FBQyxDQUFDLHNDQUFzQyxDQUFDLENBQUEsTUFBTTtRQUNuRCw2SUFBNkk7UUFDN0ksK0NBQStDO1FBQy9DLHdGQUF3RjtRQUN4Riw0RkFBNEY7UUFDNUYsb0lBQW9JO1FBRXBILGlCQUFZLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUM7UUFDbEMsc0JBQWlCLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxhQUFhLENBQUM7UUFDOUMsY0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsWUFBWSxDQUFDO1FBQ3JDLFFBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQztRQUN6QixXQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxTQUFTLENBQUM7UUFDL0IsVUFBSyxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDO1FBRXRDLFVBQUssR0FBWSxLQUFLLENBQUMsQ0FBQyw2QkFBNkI7UUFFNUQsT0FBTztRQUNBLFdBQU0sR0FBRyxJQUFJLENBQUMsQ0FBQyxNQUFNO1FBQ3JCLGNBQVMsR0FBRyxJQUFJLENBQUMsQ0FBQyxPQUFPO1FBQ3pCLGlCQUFZLEdBQUcsSUFBSSxDQUFDLENBQUMsc0JBQXNCO1FBQzNDLFlBQU8sR0FBRyxJ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QUFFLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDL0IsUUFBUSxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUM1QztRQUNELE9BQU8sUUFBUSxDQUFDO0lBQ3BCLENBQUM7SUFFTSxrQ0FBVyxHQUFsQjtRQUNJLElBQUksUUFBUSxHQUFHLE1BQU0sQ0FBQztRQUN0QixJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUMxQixRQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3ZDO1FBQ0QsT0FBTyxRQUFRLENBQUM7SUFDcEIsQ0FBQztJQUNMLG1CQUFDO0FBQUQsQ0FyUUEsQUFxUUMsSUFBQTtBQXJRWSxvQ0FBWTtBQXVRWixRQUFBLE9BQU8sR0FBRyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25zdFZhbHVlIH0gZnJvbSAnLi4vLi4vLi4vZ2FtZS9zY3JpcHRzL0RhdGEvQ29uc3RWYWx1ZSc7XHJcbmltcG9ydCB7IFVJTWFuYWdlciB9IGZyb20gJy4uL01hbmFnZXIvVUlNYW5hZ2VyJztcclxuaW1wb3J0IEdhbWVNc2cgZnJvbSAnLi4vU0RLL0dhbWVNc2cnO1xyXG5pbXBvcnQgeyBVSUhlbHAgfSBmcm9tICcuLi9VdGlscy9VSUhlbHAnO1xyXG5leHBvcnQgY2xhc3MgTmV0V29ya0NsYXNzIHtcclxuICAgIHByaXZhdGUgc3RhdGljIGluc3RhbmNlOiBOZXRXb3JrQ2xhc3M7XHJcblxyXG4gICAgLy/liKTmlq3mmK/lkKbmmK/nur/kuIogICBVUkzph4zkuI3liqDlj4LmlbDliJnpu5jorqTkuLrmtYvor5Xnjq/looNcclxuICAgIHB1YmxpYyByZWFkb25seSBpc09ubGluZUVudiA9IHRoaXMuR2V0SXNPbmxpbmUoKSA9PSAnb25saW5lJztcclxuICAgIC8v5Yik5pat5piv5ZCm5pivcGPpooTliqDovb3nmoTljY/orq4gICAgVVJM6YeM5LiN5Yqg5Y+C5pWw5YiZ6buY6K6k5Li66Z2e6aKE5Yqg6L29XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgaXNPd2NyID0gdGhpcy5HZXRCUHJlbG9hZCgpO1xyXG4gICAgcHVibGljIHJlYWRvbmx5IEJBU0UgPSB0aGlzLmlzT25saW5lRW52XHJcbiAgICAgICAgPyAnaHR0cHM6Ly9jb3Vyc2V3YXJlLW9ubGluZS5zcGVpeW91LmNvbSdcclxuICAgICAgICA6ICdodHRwczovL2Nlc2hpLWNvdXJzZXdhcmUuc3BlaXlvdS5jb20nOy8qICAqL1xyXG4gICAgLy8gcHVibGljIHJlYWRvbmx5IEJBU0UgPSB0aGlzLmlzT25saW5lRW52ID8gJ2h0dHBzOi8vY291cnNld2FyZS1vbmxpbmUuc2Fhc3AudmR5b28uY29tJyA6ICdodHRwczovL2Nlc2hpLWNvdXJzZXdhcmUtb25saW5lLnNhYXNwLnZkeW9vLmNvbSc7XHJcbiAgICAvLyBwdWJsaWMgcmVhZG9ubHkgQ09TX1VSTCA9IHRoaXMuaXNPbmxpbmVFbnYgP1xyXG4gICAgLy8gICAgICdodHRwczovL2NsYXNzcm9vbS1hcGktb25saW5lLnNhYXNwLnZkeW9vLmNvbS9taWNyby1jbGFzcy9zdG9yYWdlL3YxL3RlbmNlbnQvc3RzJ1xyXG4gICAgLy8gICAgIDogJ2h0dHBzOi8vdGVzdC1jbGFzcy1hcGktb25saW5lLnNhYXNwLnZkeW9vLmNvbS9taWNyby1jbGFzcy9zdG9yYWdlL3YxL3RlbmNlbnQvc3RzJztcclxuICAgIC8vIHB1YmxpYyByZWFkb25seSBDT1NfQkFTRV9VUkwgPSB0aGlzLmlzT25saW5lRW52ID8gJ2h0dHBzOi8vbWljcm8tY2xhc3MueHVlcGVpeW91LmNvbScgOiAnaHR0cHM6Ly9taWNyby1jbGFzcy10ZXN0Lnh1ZXBlaXlvdS5jb20nO1xyXG5cclxuICAgIHB1YmxpYyByZWFkb25seSBHRVRfUVVFU1RJT04gPSB0aGlzLkJBU0UgKyAnL2dldCc7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgR0VUX1VTRVJfUFJPR1JFU1MgPSB0aGlzLkJBU0UgKyAnL2dldC9hbnN3ZXInO1xyXG4gICAgcHVibGljIHJlYWRvbmx5IEdFVF9USVRMRSA9IHRoaXMuQkFTRSArICcvZ2V0L3RpdGxlJztcclxuICAgIHB1YmxpYyByZWFkb25seSBBREQgPSB0aGlzLkJBU0UgKyAnL2FkZCc7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgTU9ESUZZID0gdGhpcy5CQVNFICsgJy9tb2RpZnknO1xyXG4gICAgcHVibGljIHJlYWRvbmx5IENMRUFSID0gdGhpcy5CQVNFICsgJy9jbGVhcic7XHJcblxyXG4gICAgcHVibGljIGVtcHR5OiBib29sZWFuID0gZmFsc2U7IC8v5riF55CG6ISP5pWw5o2u55qE5byA5YWz77yM5ZyoVVJM6YeM6Z2i5ou85q2k5Y+C5pWwID0gdHJ1Ze+8m1xyXG5cclxuICAgIC8v5paw6K++5aCC5Y+C5pWwXHJcbiAgICBwdWJsaWMgdXNlcklkID0gbnVsbDsgLy/nlKjmiLdpZFxyXG4gICAgcHVibGljIGNoYXB0ZXJJZCA9IG51bGw7IC8v55u05pKt6K6yaWRcclxuICAgIHB1YmxpYyBjb3Vyc2V3YXJlSWQgPSBudWxsOyAvL+mimOebruS/oeaBryAgIOeUqOS6juS6pOS6kua4uOaIj+iHqui6q+afpemimOebruS/oeaBr1xyXG4gICAgcHVibGljIHRpdGxlSWQgPSBudWxsOyAvL+S6pOS6kua4uOaIj+e7keWummlkICAg57uR5a6a55qE5pe25YCZ55So77yI55uR6K++5bmz5Y+w77yJICDlrabnlJ/nq6/kuI3kvKBcclxuICAgIHB1YmxpYyBiTGl2ZSA9IG51bGw7IC8v5piv5ZCm5piv55u05pKtXHJcbiAgICBwdWJsaWMgYlByZWxvYWQgPSBudWxsOyAvL+aYr+WQpumihOWKoOi9vSAg77yIY2RuL3ppcClcclxuICAgIHB1YmxpYyBlbnYgPSBudWxsOyAvL+i/kOihjOeOr+Wig++8iOe6v+S4ii/mtYvor5XvvIlcclxuICAgIHB1YmxpYyBhcHAgPSBudWxsOyAvL0FwcOWQjeensFxyXG4gICAgcHVibGljIHBsYXRmb3JtID0gbnVsbDsgLy/noazku7blubPlj7Dkv6Hmga/vvIhwYy9pUGFkL2FuZHJvaWQvYW5kcm9pZFBhZC93ZWLvvIlcclxuICAgIHB1YmxpYyBjaGFubmVsID0gbnVsbDsgLy/kvb/nlKjmlrko6L6F5a+856uv44CB5a2m55Sf56uv44CB5pyq5p2l6buR5p2/44CB6YWN6b2Q44CB5pWZ56CU5LqR44CB4oCm4oCm77yJXHJcbiAgICBwdWJsaWMgYnJvd3NlciA9IG51bGw7IC8v5rWP6KeI5Zmo5L+h5oGv77yI5YaF5qC45Y+K54mI5pys77yJXHJcbiAgICBwdWJsaWMgYXBwVmVyc2lvbiA9IG51bGw7IC8v56uv55qE54mI5pys5L+h5oGvXHJcbiAgICBwdWJsaWMgaXNUZWFjaGVyID0gZmFsc2U7IC8v5piv5ZCm5Li65pWZ5biI77yI6YCa6L+H5ZCM5q2l55qEZ2V0X3JvbGXov5Tlm57nmoTmmK/lkKbkuLondGVhY2hlcifvvIlcclxuICAgIHB1YmxpYyBpc1N5bmMgPSBmYWxzZTsgLy/mmK/lkKbkuLrlkIzmraXvvIjpgJrov4flkIzmraXnmoRnZXRfaXNfc3luY+i/lOWbnuaYr+WQpuS4ujEvdHJ1Ze+8iVxyXG4gICAgcHVibGljIGlzT2ZmbGluZSA9IDA7IC8v5piv5ZCm5Li656a757q/5qih5byPXHJcbiAgICBwdWJsaWMgaXNNYXN0ZXIgPSBudWxsOyAvL+aYr+WQpuaYr+S4u+WKqOWPkeW/g+i3s+eahOS4gOaWuVxyXG4gICAgcHVibGljIGlzU3VwcG9ydEtlZXBQbGF5ID0gZmFsc2U7IC8v5piv5ZCm5pSv5oyB5o6l552A546p6YeN5paw546pXHJcblxyXG4gICAgcHVibGljIHRoZVJlcXVlc3QgPSBudWxsO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0SW5zdGFuY2UoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaW5zdGFuY2UgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlID0gbmV3IE5ldFdvcmtDbGFzcygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0SXNTeW5jKGlzU3luYzogYm9vbGVhbikge1xyXG4gICAgICAgIGlzU3luYyA9IGlzU3luYyA9PSBudWxsID8gZmFsc2UgOiBpc1N5bmM7XHJcbiAgICAgICAgTmV0V29yay5pc1N5bmMgPSBpc1N5bmM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldElzVGVhY2hlcihyb2xlOiBzdHJpbmcpIHtcclxuICAgICAgICBsZXQgaXNUZWFjaGVyID0gcm9sZSA9PSAndGVhY2hlcic7XHJcbiAgICAgICAgTmV0V29yay5pc1RlYWNoZXIgPSBpc1RlYWNoZXI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldElzUHJlbG9hZChpc1ByZWxvYWQ6IGJvb2xlYW4pIHtcclxuICAgICAgICBpc1ByZWxvYWQgPSBpc1ByZWxvYWQgPT0gbnVsbCA/IGZhbHNlIDogaXNQcmVsb2FkO1xyXG4gICAgICAgIFVJTWFuYWdlci5pc0dhbWVTaG93aW5nID0gIWlzUHJlbG9hZDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0SXNNYXN0ZXIoaXNNYXN0ZXI6IGJvb2xlYW4pIHtcclxuICAgICAgICBpc01hc3RlciA9IGlzTWFzdGVyID09IG51bGwgPyBmYWxzZSA6IGlzTWFzdGVyO1xyXG4gICAgICAgIE5ldFdvcmsuaXNNYXN0ZXIgPSBpc01hc3RlcjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0SXNTdXBwb3J0S2VlcFBsYXkoaXNTdXBwb3J0S2VlcFBsYXk6IGJvb2xlYW4pIHtcclxuICAgICAgICBOZXRXb3JrLmlzU3VwcG9ydEtlZXBQbGF5ID0gaXNTdXBwb3J0S2VlcFBsYXk7XHJcbiAgICAgICAgaWYgKCFpc1N1cHBvcnRLZWVwUGxheSkge1xyXG4gICAgICAgICAgICBOZXRXb3JrLmlzTWFzdGVyID0gTmV0V29yay5pc1RlYWNoZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGBpc1N1cHBvcnRLZWVwUGxheTogJHtpc1N1cHBvcnRLZWVwUGxheX1gKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOivt+axgue9kee7nFBvc3QgMOaIkOWKnyAx6LaF5pe2XHJcbiAgICAgKiBAcGFyYW0gdXJsXHJcbiAgICAgKiBAcGFyYW0gb3BlblR5cGVcclxuICAgICAqIEBwYXJhbSBjb250ZW50VHlwZVxyXG4gICAgICogQHBhcmFtIGNhbGxiYWNrXHJcbiAgICAgKiBAcGFyYW0gcGFyYW1zXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBodHRwUmVxdWVzdCh1cmw6IHN0cmluZywgb3BlblR5cGUsIGNvbnRlbnRUeXBlLCBjYWxsYmFjayA9IG51bGwsIHBhcmFtcyA9ICcnKSB7XHJcbiAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS3nprvnur/mqKHlvI8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgaWYgKHRoaXMuaXNPZmZsaW5lICYmIHVybC5zdWJzdHJpbmcoMCwgdGhpcy5HRVRfUVVFU1RJT04ubGVuZ3RoKSA9PSB0aGlzLkdFVF9RVUVTVElPTikge1xyXG4gICAgICAgICAgICBHYW1lTXNnLnJlY3ZfanNvbl9kYXRhKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncmVjdl9qc29uX2RhdGE6JywgZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2sgJiYgZGF0YS5qc29uRGF0YS5lcnJjb2RlID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhmYWxzZSwgZGF0YS5qc29uRGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIFVJSGVscC5zaG93RXJyb3JQYW5lbChcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5qc29uRGF0YS5lcnJtc2cgKyAnLOivt+iBlOezu+Wuouacje+8gScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ+ehruWumicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaHR0cFJlcXVlc3QodXJsLCBvcGVuVHlwZSwgY29udGVudFR5cGUsIGNhbGxiYWNrLCBwYXJhbXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgR2FtZU1zZy5yZXF1ZXN0X2pzb25fZGF0YSh7IGNvdXJzZXdhcmVJZDogdGhpcy5jb3Vyc2V3YXJlSWQgfSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChDb25zdFZhbHVlLklTX1RFQUNIRVIpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLnRpdGxlSWQpIHtcclxuICAgICAgICAgICAgICAgIC8v5pWZ5biI56uv5rKh5pyJdGl0bGVJZOeahOaDheWGtVxyXG4gICAgICAgICAgICAgICAgVUlIZWxwLnNob3dFcnJvclBhbmVsKCdVUkzlj4LmlbDplJnor68s57y65bCRdGl0bGVJZCzor7fogZTns7vmioDmnK/kurrlkZjvvIEnLCAnJywgJycsICfnoa7lrponKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8v5paw6K++5aCC5a2m55Sf56uvICDliKTmlq3miYDmnInlj4LmlbBcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgIUNvbnN0VmFsdWUuSVNfVEVBQ0hFUiAmJlxyXG4gICAgICAgICAgICAgICAgKCF0aGlzLnVzZXJJZCB8fCAhdGhpcy5jb3Vyc2V3YXJlSWQgfHwgIXRoaXMuZW52IHx8ICF0aGlzLmFwcCB8fCAhdGhpcy5jaGFubmVsIHx8ICF0aGlzLmJyb3dzZXIpXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgR2FtZU1zZy5VUkxFcnJvcih0aGlzLnRoZVJlcXVlc3QpO1xyXG4gICAgICAgICAgICAgICAgVUlIZWxwLnNob3dFcnJvclBhbmVsKCdVUkzlj4LmlbDplJnor68s6K+36IGU57O75a6i5pyN77yBJywgJycsICcnLCAn56Gu5a6aJyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICB4aHIub3BlbihvcGVuVHlwZSwgdXJsKTtcclxuICAgICAgICB4aHIudGltZW91dCA9IDEwMDAwO1xyXG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LVR5cGUnLCBjb250ZW50VHlwZSk7XHJcbiAgICAgICAgeGhyLndpdGhDcmVkZW50aWFscyA9IHRydWU7XHJcblxyXG4gICAgICAgIC8v5Zue6LCDXHJcbiAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgICAgICAgICAnaHR0cFJlcXVlc3QgcnNwIHN0YXR1cycsXHJcbiAgICAgICAgICAgICAgICB4aHIuc3RhdHVzLFxyXG4gICAgICAgICAgICAgICAgJyAgICAgICAgeGhyLnJlYWR5U3RhdGUnLFxyXG4gICAgICAgICAgICAgICAgeGhyLnJlYWR5U3RhdGUsXHJcbiAgICAgICAgICAgICAgICAnICAgICAgICB4aHIucmVzcG9uc2VUZXh0JyxcclxuICAgICAgICAgICAgICAgIHhoci5yZXNwb25zZVRleHQsXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PSA0ICYmIHhoci5zdGF0dXMgPj0gMjAwICYmIHhoci5zdGF0dXMgPD0gNDAwKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmVzcG9uc2UgPSBKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrICYmIHJlc3BvbnNlLmVycmNvZGUgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKGZhbHNlLCByZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIEdhbWVNc2cuaHR0cEVycm9yKHJlc3BvbnNlLmVycm1zZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKENvbnN0VmFsdWUuSVNfRURJVElPTlMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgVUlIZWxwLnNob3dFcnJvclBhbmVsKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UuZXJybXNnICsgJyzor7fogZTns7vlrqLmnI3vvIEnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICfnoa7lrponLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaHR0cFJlcXVlc3QodXJsLCBvcGVuVHlwZSwgY29udGVudFR5cGUsIGNhbGxiYWNrLCBwYXJhbXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8v6LaF5pe25Zue6LCDXHJcbiAgICAgICAgeGhyLm9udGltZW91dCA9IChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBHYW1lTXNnLmh0dHBUaW1lT3V0KCfnvZHnu5zkuI3kvbPvvIzor7fnqI3lkI7ph43or5UnKTtcclxuICAgICAgICAgICAgaWYgKENvbnN0VmFsdWUuSVNfRURJVElPTlMpIHtcclxuICAgICAgICAgICAgICAgIFVJSGVscC5zaG93RXJyb3JQYW5lbChcclxuICAgICAgICAgICAgICAgICAgICAn572R57uc5LiN5L2z77yM6K+356iN5ZCO6YeN6K+VJyxcclxuICAgICAgICAgICAgICAgICAgICAnJyxcclxuICAgICAgICAgICAgICAgICAgICAn6Iul6YeN5paw6L+e5o6l5peg5pWI77yM6K+36IGU57O75a6i5pyNJyxcclxuICAgICAgICAgICAgICAgICAgICAn6YeN5paw6L+e5o6lJyxcclxuICAgICAgICAgICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaHR0cFJlcXVlc3QodXJsLCBvcGVuVHlwZSwgY29udGVudFR5cGUsIGNhbGxiYWNrLCBwYXJhbXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgdHJ1ZSxcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2h0dHBSZXF1ZXN0IHRpbWVvdXQnKTtcclxuICAgICAgICAgICAgY2FsbGJhY2sgJiYgY2FsbGJhY2sodHJ1ZSwgbnVsbCk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy/lh7rplJlcclxuICAgICAgICB4aHIub25lcnJvciA9IChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoQ29uc3RWYWx1ZS5JU19FRElUSU9OUykge1xyXG4gICAgICAgICAgICAgICAgVUlIZWxwLnNob3dFcnJvclBhbmVsKFxyXG4gICAgICAgICAgICAgICAgICAgICfnvZHnu5zlh7rplJnvvIzor7fnqI3lkI7ph43or5UnLFxyXG4gICAgICAgICAgICAgICAgICAgICfoi6Xph43mlrDov57mjqXml6DmlYjvvIzor7fogZTns7vlrqLmnI0nLFxyXG4gICAgICAgICAgICAgICAgICAgICcnLFxyXG4gICAgICAgICAgICAgICAgICAgICfph43mlrDov57mjqUnLFxyXG4gICAgICAgICAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5odHRwUmVxdWVzdCh1cmwsIG9wZW5UeXBlLCBjb250ZW50VHlwZSwgY2FsbGJhY2ssIHBhcmFtcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB0cnVlLFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnaHR0cFJlcXVlc3QgZXJyb3InKTtcclxuICAgICAgICAgICAgY2FsbGJhY2sgJiYgY2FsbGJhY2sodHJ1ZSwgbnVsbCk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgeGhyLnNlbmQocGFyYW1zKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPlnVybOWPguaVsFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgR2V0UmVxdWVzdCgpIHtcclxuICAgICAgICBpZiAodGhpcy50aGVSZXF1ZXN0ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudGhlUmVxdWVzdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy50aGVSZXF1ZXN0ID0gbmV3IE9iamVjdCgpO1xyXG4gICAgICAgIHZhciB1cmwgPSBsb2NhdGlvbi5zZWFyY2g7IC8v6I635Y+WdXJs5LitXCI/XCLnrKblkI7nmoTlrZfkuLJcclxuXHJcbiAgICAgICAgaWYgKHVybC5pbmRleE9mKCc/JykgIT0gLTEpIHtcclxuICAgICAgICAgICAgdmFyIHN0ciA9IHVybC5zdWJzdHIoMSk7XHJcbiAgICAgICAgICAgIHZhciBzdHJzID0gc3RyLnNwbGl0KCcmJyk7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3Rycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aGVSZXF1ZXN0W3N0cnNbaV0uc3BsaXQoJz0nKVswXV0gPSBkZWNvZGVVUklDb21wb25lbnQoc3Ryc1tpXS5zcGxpdCgnPScpWzFdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy/mlrDor77loIJ1cmzlv4XpnIDlj4LmlbBcclxuICAgICAgICB0aGlzLnVzZXJJZCA9IHRoaXMudGhlUmVxdWVzdFsndXNlcklkJ107XHJcbiAgICAgICAgdGhpcy5jaGFwdGVySWQgPSB0aGlzLnRoZVJlcXVlc3RbJ2NoYXB0ZXJJZCddO1xyXG4gICAgICAgIHRoaXMuY291cnNld2FyZUlkID0gdGhpcy50aGVSZXF1ZXN0Wydjb3Vyc2V3YXJlSWQnXTtcclxuICAgICAgICB0aGlzLnRpdGxlSWQgPSB0aGlzLnRoZVJlcXVlc3RbJ3RpdGxlSWQnXTtcclxuICAgICAgICB0aGlzLmJMaXZlID0gdGhpcy50aGVSZXF1ZXN0WydiTGl2ZSddO1xyXG4gICAgICAgIHRoaXMuYlByZWxvYWQgPSB0aGlzLnRoZVJlcXVlc3RbJ2JQcmVsb2FkJ107XHJcbiAgICAgICAgdGhpcy5lbnYgPSB0aGlzLnRoZVJlcXVlc3RbJ2VudiddO1xyXG4gICAgICAgIHRoaXMuYXBwID0gdGhpcy50aGVSZXF1ZXN0WydhcHAnXTtcclxuICAgICAgICB0aGlzLnBsYXRmb3JtID0gdGhpcy50aGVSZXF1ZXN0WydwbGF0Zm9ybSddO1xyXG4gICAgICAgIHRoaXMuY2hhbm5lbCA9IHRoaXMudGhlUmVxdWVzdFsnY2hhbm5lbCddO1xyXG4gICAgICAgIHRoaXMuYnJvd3NlciA9IHRoaXMudGhlUmVxdWVzdFsnYnJvd3NlciddO1xyXG4gICAgICAgIHRoaXMuYXBwVmVyc2lvbiA9IHRoaXMudGhlUmVxdWVzdFsnYXBwVmVyc2lvbiddO1xyXG4gICAgICAgIHRoaXMuZW1wdHkgPSB0aGlzLnRoZVJlcXVlc3RbJ2VtcHR5J107XHJcbiAgICAgICAgdGhpcy5pc09mZmxpbmUgPSBwYXJzZUludCh0aGlzLnRoZVJlcXVlc3RbJ2lzT2ZmbGluZSddKTsgLy/nprvnur/mqKHlvI9cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGhlUmVxdWVzdDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgR2V0QlByZWxvYWQoKSB7XHJcbiAgICAgICAgbGV0IEJQcmVsb2FkID0gMDtcclxuICAgICAgICBpZiAodGhpcy5HZXRSZXF1ZXN0KClbJ2JQcmVsb2FkJ10pIHtcclxuICAgICAgICAgICAgQlByZWxvYWQgPSB0aGlzLkdldFJlcXVlc3QoKVsnYlByZWxvYWQnXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIEJQcmVsb2FkO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBHZXRJc09ubGluZSgpIHtcclxuICAgICAgICBsZXQgaXNPbmxpbmUgPSAndGVzdCc7XHJcbiAgICAgICAgaWYgKHRoaXMuR2V0UmVxdWVzdCgpWydlbnYnXSkge1xyXG4gICAgICAgICAgICBpc09ubGluZSA9IHRoaXMuR2V0UmVxdWVzdCgpWydlbnYnXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGlzT25saW5lO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgTmV0V29yayA9IE5ldFdvcmtDbGFzcy5nZXRJbnN0YW5jZSgpO1xyXG4iXX0=