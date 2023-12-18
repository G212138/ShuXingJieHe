
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
        // public readonly BASE = this.isOnlineEnv
        //     ? 'https://courseware-online.speiyou.com'
        //     : 'https://ceshi-courseware.speiyou.com';/*  */
        this.BASE = this.isOnlineEnv ? 'https://courseware-online.saasp.vdyoo.com' : 'https://ceshi-courseware-online.saasp.vdyoo.com';
        this.COS_URL = this.isOnlineEnv ?
            'https://classroom-api-online.saasp.vdyoo.com/micro-class/storage/v1/tencent/sts'
            : 'https://test-class-api-online.saasp.vdyoo.com/micro-class/storage/v1/tencent/sts';
        this.COS_BASE_URL = this.isOnlineEnv ? 'https://micro-class.xuepeiyou.com' : 'https://micro-class-test.xuepeiyou.com';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWVcXHNjcmlwdHNcXEh0dHBcXE5ldFdvcmsudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0VBQW1FO0FBQ25FLGtEQUFpRDtBQUNqRCwwQ0FBcUM7QUFDckMsMENBQXlDO0FBQ3pDO0lBQUE7UUFHSSw0QkFBNEI7UUFDWixnQkFBVyxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxRQUFRLENBQUM7UUFDN0QsbUNBQW1DO1FBQ25CLFdBQU0sR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDNUMsMENBQTBDO1FBQzFDLGdEQUFnRDtRQUNoRCxzREFBc0Q7UUFDdEMsU0FBSSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLDJDQUEyQyxDQUFDLENBQUMsQ0FBQyxpREFBaUQsQ0FBQztRQUMxSCxZQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ3hDLGlGQUFpRjtZQUNqRixDQUFDLENBQUMsa0ZBQWtGLENBQUM7UUFDekUsaUJBQVksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDLENBQUMsd0NBQXdDLENBQUM7UUFFakgsaUJBQVksR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQztRQUNsQyxzQkFBaUIsR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLGFBQWEsQ0FBQztRQUM5QyxjQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxZQUFZLENBQUM7UUFDckMsUUFBRyxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDO1FBQ3pCLFdBQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQztRQUMvQixVQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUM7UUFFdEMsVUFBSyxHQUFZLEtBQUssQ0FBQyxDQUFDLDZCQUE2QjtRQUU1RCxPQUFPO1FB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QUFDLE1BQU07UUFFL0QsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQzNCLENBQUM7SUFFTSxrQ0FBVyxHQUFsQjtRQUNJLElBQUksUUFBUSxHQUFHLENBQUMsQ0FBQztRQUNqQixJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUMvQixRQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQzVDO1FBQ0QsT0FBTyxRQUFRLENBQUM7SUFDcEIsQ0FBQztJQUVNLGtDQUFXLEdBQWxCO1FBQ0ksSUFBSSxRQUFRLEdBQUcsTUFBTSxDQUFDO1FBQ3RCLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzFCLFFBQVEsR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDdkM7UUFDRCxPQUFPLFFBQVEsQ0FBQztJQUNwQixDQUFDO0lBQ0wsbUJBQUM7QUFBRCxDQXJRQSxBQXFRQyxJQUFBO0FBclFZLG9DQUFZO0FBdVFaLFFBQUEsT0FBTyxHQUFHLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnN0VmFsdWUgfSBmcm9tICcuLi8uLi8uLi9nYW1lL3NjcmlwdHMvRGF0YS9Db25zdFZhbHVlJztcclxuaW1wb3J0IHsgVUlNYW5hZ2VyIH0gZnJvbSAnLi4vTWFuYWdlci9VSU1hbmFnZXInO1xyXG5pbXBvcnQgR2FtZU1zZyBmcm9tICcuLi9TREsvR2FtZU1zZyc7XHJcbmltcG9ydCB7IFVJSGVscCB9IGZyb20gJy4uL1V0aWxzL1VJSGVscCc7XHJcbmV4cG9ydCBjbGFzcyBOZXRXb3JrQ2xhc3Mge1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2U6IE5ldFdvcmtDbGFzcztcclxuXHJcbiAgICAvL+WIpOaWreaYr+WQpuaYr+e6v+S4iiAgIFVSTOmHjOS4jeWKoOWPguaVsOWImem7mOiupOS4uua1i+ivleeOr+Wig1xyXG4gICAgcHVibGljIHJlYWRvbmx5IGlzT25saW5lRW52ID0gdGhpcy5HZXRJc09ubGluZSgpID09ICdvbmxpbmUnO1xyXG4gICAgLy/liKTmlq3mmK/lkKbmmK9wY+mihOWKoOi9veeahOWNj+iuriAgICBVUkzph4zkuI3liqDlj4LmlbDliJnpu5jorqTkuLrpnZ7pooTliqDovb1cclxuICAgIHB1YmxpYyByZWFkb25seSBpc093Y3IgPSB0aGlzLkdldEJQcmVsb2FkKCk7XHJcbiAgICAvLyBwdWJsaWMgcmVhZG9ubHkgQkFTRSA9IHRoaXMuaXNPbmxpbmVFbnZcclxuICAgIC8vICAgICA/ICdodHRwczovL2NvdXJzZXdhcmUtb25saW5lLnNwZWl5b3UuY29tJ1xyXG4gICAgLy8gICAgIDogJ2h0dHBzOi8vY2VzaGktY291cnNld2FyZS5zcGVpeW91LmNvbSc7LyogICovXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgQkFTRSA9IHRoaXMuaXNPbmxpbmVFbnYgPyAnaHR0cHM6Ly9jb3Vyc2V3YXJlLW9ubGluZS5zYWFzcC52ZHlvby5jb20nIDogJ2h0dHBzOi8vY2VzaGktY291cnNld2FyZS1vbmxpbmUuc2Fhc3AudmR5b28uY29tJztcclxuICAgIHB1YmxpYyByZWFkb25seSBDT1NfVVJMID0gdGhpcy5pc09ubGluZUVudiA/XHJcbiAgICAgICAgJ2h0dHBzOi8vY2xhc3Nyb29tLWFwaS1vbmxpbmUuc2Fhc3AudmR5b28uY29tL21pY3JvLWNsYXNzL3N0b3JhZ2UvdjEvdGVuY2VudC9zdHMnXHJcbiAgICAgICAgOiAnaHR0cHM6Ly90ZXN0LWNsYXNzLWFwaS1vbmxpbmUuc2Fhc3AudmR5b28uY29tL21pY3JvLWNsYXNzL3N0b3JhZ2UvdjEvdGVuY2VudC9zdHMnO1xyXG4gICAgcHVibGljIHJlYWRvbmx5IENPU19CQVNFX1VSTCA9IHRoaXMuaXNPbmxpbmVFbnYgPyAnaHR0cHM6Ly9taWNyby1jbGFzcy54dWVwZWl5b3UuY29tJyA6ICdodHRwczovL21pY3JvLWNsYXNzLXRlc3QueHVlcGVpeW91LmNvbSc7XHJcblxyXG4gICAgcHVibGljIHJlYWRvbmx5IEdFVF9RVUVTVElPTiA9IHRoaXMuQkFTRSArICcvZ2V0JztcclxuICAgIHB1YmxpYyByZWFkb25seSBHRVRfVVNFUl9QUk9HUkVTUyA9IHRoaXMuQkFTRSArICcvZ2V0L2Fuc3dlcic7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgR0VUX1RJVExFID0gdGhpcy5CQVNFICsgJy9nZXQvdGl0bGUnO1xyXG4gICAgcHVibGljIHJlYWRvbmx5IEFERCA9IHRoaXMuQkFTRSArICcvYWRkJztcclxuICAgIHB1YmxpYyByZWFkb25seSBNT0RJRlkgPSB0aGlzLkJBU0UgKyAnL21vZGlmeSc7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgQ0xFQVIgPSB0aGlzLkJBU0UgKyAnL2NsZWFyJztcclxuXHJcbiAgICBwdWJsaWMgZW1wdHk6IGJvb2xlYW4gPSBmYWxzZTsgLy/muIXnkIbohI/mlbDmja7nmoTlvIDlhbPvvIzlnKhVUkzph4zpnaLmi7zmraTlj4LmlbAgPSB0cnVl77ybXHJcblxyXG4gICAgLy/mlrDor77loILlj4LmlbBcclxuICAgIHB1YmxpYyB1c2VySWQgPSBudWxsOyAvL+eUqOaIt2lkXHJcbiAgICBwdWJsaWMgY2hhcHRlcklkID0gbnVsbDsgLy/nm7Tmkq3orrJpZFxyXG4gICAgcHVibGljIGNvdXJzZXdhcmVJZCA9IG51bGw7IC8v6aKY55uu5L+h5oGvICAg55So5LqO5Lqk5LqS5ri45oiP6Ieq6Lqr5p+l6aKY55uu5L+h5oGvXHJcbiAgICBwdWJsaWMgdGl0bGVJZCA9IG51bGw7IC8v5Lqk5LqS5ri45oiP57uR5a6aaWQgICDnu5HlrprnmoTml7blgJnnlKjvvIjnm5Hor77lubPlj7DvvIkgIOWtpueUn+err+S4jeS8oFxyXG4gICAgcHVibGljIGJMaXZlID0gbnVsbDsgLy/mmK/lkKbmmK/nm7Tmkq1cclxuICAgIHB1YmxpYyBiUHJlbG9hZCA9IG51bGw7IC8v5piv5ZCm6aKE5Yqg6L29ICDvvIhjZG4vemlwKVxyXG4gICAgcHVibGljIGVudiA9IG51bGw7IC8v6L+Q6KGM546v5aKD77yI57q/5LiKL+a1i+ivle+8iVxyXG4gICAgcHVibGljIGFwcCA9IG51bGw7IC8vQXBw5ZCN56ewXHJcbiAgICBwdWJsaWMgcGxhdGZvcm0gPSBudWxsOyAvL+ehrOS7tuW5s+WPsOS/oeaBr++8iHBjL2lQYWQvYW5kcm9pZC9hbmRyb2lkUGFkL3dlYu+8iVxyXG4gICAgcHVibGljIGNoYW5uZWwgPSBudWxsOyAvL+S9v+eUqOaWuSjovoXlr7znq6/jgIHlrabnlJ/nq6/jgIHmnKrmnaXpu5Hmnb/jgIHphY3pvZDjgIHmlZnnoJTkupHjgIHigKbigKbvvIlcclxuICAgIHB1YmxpYyBicm93c2VyID0gbnVsbDsgLy/mtY/op4jlmajkv6Hmga/vvIjlhoXmoLjlj4rniYjmnKzvvIlcclxuICAgIHB1YmxpYyBhcHBWZXJzaW9uID0gbnVsbDsgLy/nq6/nmoTniYjmnKzkv6Hmga9cclxuICAgIHB1YmxpYyBpc1RlYWNoZXIgPSBmYWxzZTsgLy/mmK/lkKbkuLrmlZnluIjvvIjpgJrov4flkIzmraXnmoRnZXRfcm9sZei/lOWbnueahOaYr+WQpuS4uid0ZWFjaGVyJ++8iVxyXG4gICAgcHVibGljIGlzU3luYyA9IGZhbHNlOyAvL+aYr+WQpuS4uuWQjOatpe+8iOmAmui/h+WQjOatpeeahGdldF9pc19zeW5j6L+U5Zue5piv5ZCm5Li6MS90cnVl77yJXHJcbiAgICBwdWJsaWMgaXNPZmZsaW5lID0gMDsgLy/mmK/lkKbkuLrnprvnur/mqKHlvI9cclxuICAgIHB1YmxpYyBpc01hc3RlciA9IG51bGw7IC8v5piv5ZCm5piv5Li75Yqo5Y+R5b+D6Lez55qE5LiA5pa5XHJcbiAgICBwdWJsaWMgaXNTdXBwb3J0S2VlcFBsYXkgPSBmYWxzZTsgLy/mmK/lkKbmlK/mjIHmjqXnnYDnjqnph43mlrDnjqlcclxuXHJcbiAgICBwdWJsaWMgdGhlUmVxdWVzdCA9IG51bGw7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXRJbnN0YW5jZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5pbnN0YW5jZSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgTmV0V29ya0NsYXNzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRJc1N5bmMoaXNTeW5jOiBib29sZWFuKSB7XHJcbiAgICAgICAgaXNTeW5jID0gaXNTeW5jID09IG51bGwgPyBmYWxzZSA6IGlzU3luYztcclxuICAgICAgICBOZXRXb3JrLmlzU3luYyA9IGlzU3luYztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0SXNUZWFjaGVyKHJvbGU6IHN0cmluZykge1xyXG4gICAgICAgIGxldCBpc1RlYWNoZXIgPSByb2xlID09ICd0ZWFjaGVyJztcclxuICAgICAgICBOZXRXb3JrLmlzVGVhY2hlciA9IGlzVGVhY2hlcjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0SXNQcmVsb2FkKGlzUHJlbG9hZDogYm9vbGVhbikge1xyXG4gICAgICAgIGlzUHJlbG9hZCA9IGlzUHJlbG9hZCA9PSBudWxsID8gZmFsc2UgOiBpc1ByZWxvYWQ7XHJcbiAgICAgICAgVUlNYW5hZ2VyLmlzR2FtZVNob3dpbmcgPSAhaXNQcmVsb2FkO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRJc01hc3Rlcihpc01hc3RlcjogYm9vbGVhbikge1xyXG4gICAgICAgIGlzTWFzdGVyID0gaXNNYXN0ZXIgPT0gbnVsbCA/IGZhbHNlIDogaXNNYXN0ZXI7XHJcbiAgICAgICAgTmV0V29yay5pc01hc3RlciA9IGlzTWFzdGVyO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRJc1N1cHBvcnRLZWVwUGxheShpc1N1cHBvcnRLZWVwUGxheTogYm9vbGVhbikge1xyXG4gICAgICAgIE5ldFdvcmsuaXNTdXBwb3J0S2VlcFBsYXkgPSBpc1N1cHBvcnRLZWVwUGxheTtcclxuICAgICAgICBpZiAoIWlzU3VwcG9ydEtlZXBQbGF5KSB7XHJcbiAgICAgICAgICAgIE5ldFdvcmsuaXNNYXN0ZXIgPSBOZXRXb3JrLmlzVGVhY2hlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coYGlzU3VwcG9ydEtlZXBQbGF5OiAke2lzU3VwcG9ydEtlZXBQbGF5fWApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6K+35rGC572R57ucUG9zdCAw5oiQ5YqfIDHotoXml7ZcclxuICAgICAqIEBwYXJhbSB1cmxcclxuICAgICAqIEBwYXJhbSBvcGVuVHlwZVxyXG4gICAgICogQHBhcmFtIGNvbnRlbnRUeXBlXHJcbiAgICAgKiBAcGFyYW0gY2FsbGJhY2tcclxuICAgICAqIEBwYXJhbSBwYXJhbXNcclxuICAgICAqL1xyXG4gICAgcHVibGljIGh0dHBSZXF1ZXN0KHVybDogc3RyaW5nLCBvcGVuVHlwZSwgY29udGVudFR5cGUsIGNhbGxiYWNrID0gbnVsbCwgcGFyYW1zID0gJycpIHtcclxuICAgICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLeemu+e6v+aooeW8jy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICBpZiAodGhpcy5pc09mZmxpbmUgJiYgdXJsLnN1YnN0cmluZygwLCB0aGlzLkdFVF9RVUVTVElPTi5sZW5ndGgpID09IHRoaXMuR0VUX1FVRVNUSU9OKSB7XHJcbiAgICAgICAgICAgIEdhbWVNc2cucmVjdl9qc29uX2RhdGEoKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZWN2X2pzb25fZGF0YTonLCBkYXRhKTtcclxuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjayAmJiBkYXRhLmpzb25EYXRhLmVycmNvZGUgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKGZhbHNlLCBkYXRhLmpzb25EYXRhKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgVUlIZWxwLnNob3dFcnJvclBhbmVsKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmpzb25EYXRhLmVycm1zZyArICcs6K+36IGU57O75a6i5pyN77yBJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAn56Gu5a6aJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5odHRwUmVxdWVzdCh1cmwsIG9wZW5UeXBlLCBjb250ZW50VHlwZSwgY2FsbGJhY2ssIHBhcmFtcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBHYW1lTXNnLnJlcXVlc3RfanNvbl9kYXRhKHsgY291cnNld2FyZUlkOiB0aGlzLmNvdXJzZXdhcmVJZCB9KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKENvbnN0VmFsdWUuSVNfVEVBQ0hFUikge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMudGl0bGVJZCkge1xyXG4gICAgICAgICAgICAgICAgLy/mlZnluIjnq6/msqHmnIl0aXRsZUlk55qE5oOF5Ya1XHJcbiAgICAgICAgICAgICAgICBVSUhlbHAuc2hvd0Vycm9yUGFuZWwoJ1VSTOWPguaVsOmUmeivryznvLrlsJF0aXRsZUlkLOivt+iBlOezu+aKgOacr+S6uuWRmO+8gScsICcnLCAnJywgJ+ehruWumicpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy/mlrDor77loILlrabnlJ/nq68gIOWIpOaWreaJgOacieWPguaVsFxyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAhQ29uc3RWYWx1ZS5JU19URUFDSEVSICYmXHJcbiAgICAgICAgICAgICAgICAoIXRoaXMudXNlcklkIHx8ICF0aGlzLmNvdXJzZXdhcmVJZCB8fCAhdGhpcy5lbnYgfHwgIXRoaXMuYXBwIHx8ICF0aGlzLmNoYW5uZWwgfHwgIXRoaXMuYnJvd3NlcilcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICBHYW1lTXNnLlVSTEVycm9yKHRoaXMudGhlUmVxdWVzdCk7XHJcbiAgICAgICAgICAgICAgICBVSUhlbHAuc2hvd0Vycm9yUGFuZWwoJ1VSTOWPguaVsOmUmeivryzor7fogZTns7vlrqLmnI3vvIEnLCAnJywgJycsICfnoa7lrponKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgIHhoci5vcGVuKG9wZW5UeXBlLCB1cmwpO1xyXG4gICAgICAgIHhoci50aW1lb3V0ID0gMTAwMDA7XHJcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ0NvbnRlbnQtVHlwZScsIGNvbnRlbnRUeXBlKTtcclxuICAgICAgICB4aHIud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgLy/lm57osINcclxuICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICAgICAgICAgICdodHRwUmVxdWVzdCByc3Agc3RhdHVzJyxcclxuICAgICAgICAgICAgICAgIHhoci5zdGF0dXMsXHJcbiAgICAgICAgICAgICAgICAnICAgICAgICB4aHIucmVhZHlTdGF0ZScsXHJcbiAgICAgICAgICAgICAgICB4aHIucmVhZHlTdGF0ZSxcclxuICAgICAgICAgICAgICAgICcgICAgICAgIHhoci5yZXNwb25zZVRleHQnLFxyXG4gICAgICAgICAgICAgICAgeGhyLnJlc3BvbnNlVGV4dCxcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09IDQgJiYgeGhyLnN0YXR1cyA+PSAyMDAgJiYgeGhyLnN0YXR1cyA8PSA0MDApIHtcclxuICAgICAgICAgICAgICAgIGxldCByZXNwb25zZSA9IEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2sgJiYgcmVzcG9uc2UuZXJyY29kZSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soZmFsc2UsIHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgR2FtZU1zZy5odHRwRXJyb3IocmVzcG9uc2UuZXJybXNnKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoQ29uc3RWYWx1ZS5JU19FRElUSU9OUykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBVSUhlbHAuc2hvd0Vycm9yUGFuZWwoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5lcnJtc2cgKyAnLOivt+iBlOezu+Wuouacje+8gScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ+ehruWumicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5odHRwUmVxdWVzdCh1cmwsIG9wZW5UeXBlLCBjb250ZW50VHlwZSwgY2FsbGJhY2ssIHBhcmFtcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy/otoXml7blm57osINcclxuICAgICAgICB4aHIub250aW1lb3V0ID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIEdhbWVNc2cuaHR0cFRpbWVPdXQoJ+e9kee7nOS4jeS9s++8jOivt+eojeWQjumHjeivlScpO1xyXG4gICAgICAgICAgICBpZiAoQ29uc3RWYWx1ZS5JU19FRElUSU9OUykge1xyXG4gICAgICAgICAgICAgICAgVUlIZWxwLnNob3dFcnJvclBhbmVsKFxyXG4gICAgICAgICAgICAgICAgICAgICfnvZHnu5zkuI3kvbPvvIzor7fnqI3lkI7ph43or5UnLFxyXG4gICAgICAgICAgICAgICAgICAgICcnLFxyXG4gICAgICAgICAgICAgICAgICAgICfoi6Xph43mlrDov57mjqXml6DmlYjvvIzor7fogZTns7vlrqLmnI0nLFxyXG4gICAgICAgICAgICAgICAgICAgICfph43mlrDov57mjqUnLFxyXG4gICAgICAgICAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5odHRwUmVxdWVzdCh1cmwsIG9wZW5UeXBlLCBjb250ZW50VHlwZSwgY2FsbGJhY2ssIHBhcmFtcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB0cnVlLFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnaHR0cFJlcXVlc3QgdGltZW91dCcpO1xyXG4gICAgICAgICAgICBjYWxsYmFjayAmJiBjYWxsYmFjayh0cnVlLCBudWxsKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvL+WHuumUmVxyXG4gICAgICAgIHhoci5vbmVycm9yID0gKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChDb25zdFZhbHVlLklTX0VESVRJT05TKSB7XHJcbiAgICAgICAgICAgICAgICBVSUhlbHAuc2hvd0Vycm9yUGFuZWwoXHJcbiAgICAgICAgICAgICAgICAgICAgJ+e9kee7nOWHuumUme+8jOivt+eojeWQjumHjeivlScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ+iLpemHjeaWsOi/nuaOpeaXoOaViO+8jOivt+iBlOezu+WuouacjScsXHJcbiAgICAgICAgICAgICAgICAgICAgJycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ+mHjeaWsOi/nuaOpScsXHJcbiAgICAgICAgICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmh0dHBSZXF1ZXN0KHVybCwgb3BlblR5cGUsIGNvbnRlbnRUeXBlLCBjYWxsYmFjaywgcGFyYW1zKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHRydWUsXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdodHRwUmVxdWVzdCBlcnJvcicpO1xyXG4gICAgICAgICAgICBjYWxsYmFjayAmJiBjYWxsYmFjayh0cnVlLCBudWxsKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB4aHIuc2VuZChwYXJhbXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+WdXJs5Y+C5pWwXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBHZXRSZXF1ZXN0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLnRoZVJlcXVlc3QgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy50aGVSZXF1ZXN0O1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnRoZVJlcXVlc3QgPSBuZXcgT2JqZWN0KCk7XHJcbiAgICAgICAgdmFyIHVybCA9IGxvY2F0aW9uLnNlYXJjaDsgLy/ojrflj5Z1cmzkuK1cIj9cIuespuWQjueahOWtl+S4slxyXG5cclxuICAgICAgICBpZiAodXJsLmluZGV4T2YoJz8nKSAhPSAtMSkge1xyXG4gICAgICAgICAgICB2YXIgc3RyID0gdXJsLnN1YnN0cigxKTtcclxuICAgICAgICAgICAgdmFyIHN0cnMgPSBzdHIuc3BsaXQoJyYnKTtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRoZVJlcXVlc3Rbc3Ryc1tpXS5zcGxpdCgnPScpWzBdXSA9IGRlY29kZVVSSUNvbXBvbmVudChzdHJzW2ldLnNwbGl0KCc9JylbMV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL+aWsOivvuWggnVybOW/hemcgOWPguaVsFxyXG4gICAgICAgIHRoaXMudXNlcklkID0gdGhpcy50aGVSZXF1ZXN0Wyd1c2VySWQnXTtcclxuICAgICAgICB0aGlzLmNoYXB0ZXJJZCA9IHRoaXMudGhlUmVxdWVzdFsnY2hhcHRlcklkJ107XHJcbiAgICAgICAgdGhpcy5jb3Vyc2V3YXJlSWQgPSB0aGlzLnRoZVJlcXVlc3RbJ2NvdXJzZXdhcmVJZCddO1xyXG4gICAgICAgIHRoaXMudGl0bGVJZCA9IHRoaXMudGhlUmVxdWVzdFsndGl0bGVJZCddO1xyXG4gICAgICAgIHRoaXMuYkxpdmUgPSB0aGlzLnRoZVJlcXVlc3RbJ2JMaXZlJ107XHJcbiAgICAgICAgdGhpcy5iUHJlbG9hZCA9IHRoaXMudGhlUmVxdWVzdFsnYlByZWxvYWQnXTtcclxuICAgICAgICB0aGlzLmVudiA9IHRoaXMudGhlUmVxdWVzdFsnZW52J107XHJcbiAgICAgICAgdGhpcy5hcHAgPSB0aGlzLnRoZVJlcXVlc3RbJ2FwcCddO1xyXG4gICAgICAgIHRoaXMucGxhdGZvcm0gPSB0aGlzLnRoZVJlcXVlc3RbJ3BsYXRmb3JtJ107XHJcbiAgICAgICAgdGhpcy5jaGFubmVsID0gdGhpcy50aGVSZXF1ZXN0WydjaGFubmVsJ107XHJcbiAgICAgICAgdGhpcy5icm93c2VyID0gdGhpcy50aGVSZXF1ZXN0Wydicm93c2VyJ107XHJcbiAgICAgICAgdGhpcy5hcHBWZXJzaW9uID0gdGhpcy50aGVSZXF1ZXN0WydhcHBWZXJzaW9uJ107XHJcbiAgICAgICAgdGhpcy5lbXB0eSA9IHRoaXMudGhlUmVxdWVzdFsnZW1wdHknXTtcclxuICAgICAgICB0aGlzLmlzT2ZmbGluZSA9IHBhcnNlSW50KHRoaXMudGhlUmVxdWVzdFsnaXNPZmZsaW5lJ10pOyAvL+emu+e6v+aooeW8j1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy50aGVSZXF1ZXN0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBHZXRCUHJlbG9hZCgpIHtcclxuICAgICAgICBsZXQgQlByZWxvYWQgPSAwO1xyXG4gICAgICAgIGlmICh0aGlzLkdldFJlcXVlc3QoKVsnYlByZWxvYWQnXSkge1xyXG4gICAgICAgICAgICBCUHJlbG9hZCA9IHRoaXMuR2V0UmVxdWVzdCgpWydiUHJlbG9hZCddO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gQlByZWxvYWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIEdldElzT25saW5lKCkge1xyXG4gICAgICAgIGxldCBpc09ubGluZSA9ICd0ZXN0JztcclxuICAgICAgICBpZiAodGhpcy5HZXRSZXF1ZXN0KClbJ2VudiddKSB7XHJcbiAgICAgICAgICAgIGlzT25saW5lID0gdGhpcy5HZXRSZXF1ZXN0KClbJ2VudiddO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaXNPbmxpbmU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBOZXRXb3JrID0gTmV0V29ya0NsYXNzLmdldEluc3RhbmNlKCk7XHJcbiJdfQ==