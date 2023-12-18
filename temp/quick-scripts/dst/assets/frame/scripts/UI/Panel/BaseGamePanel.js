
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/frame/scripts/UI/Panel/BaseGamePanel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f1694s8BidGvaCpzhIeiAbf', 'BaseGamePanel');
// frame/scripts/UI/Panel/BaseGamePanel.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ConstValue_1 = require("../../../../game/scripts/Data/ConstValue");
var EditorManager_1 = require("../../../../game/scripts/Manager/EditorManager");
var FrameMsgType_1 = require("../../Data/FrameMsgType");
var NetWork_1 = require("../../Http/NetWork");
var ListenerManager_1 = require("../../Manager/ListenerManager");
var ReportManager_1 = require("../../Manager/ReportManager");
var SoundManager_1 = require("../../Manager/SoundManager");
var SyncDataManager_1 = require("../../Manager/SyncDataManager");
var UIManager_1 = require("../../Manager/UIManager");
var GameMsg_1 = require("../../SDK/GameMsg");
var T2M_1 = require("../../SDK/T2M");
var UIHelp_1 = require("../../Utils/UIHelp");
var BaseUI_1 = require("../BaseUI");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BaseGamePanel = /** @class */ (function (_super) {
    __extends(BaseGamePanel, _super);
    function BaseGamePanel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._isPanelReady = false;
        return _this;
    }
    // onLoad () {}
    BaseGamePanel.prototype.start = function () {
        if (this.data && this.data.node && this.data.node.parent) {
            this.data.node.removeFromParent();
        }
        // 发送GameStart
        GameMsg_1.default.gameStart();
        this.addSDKEventListener();
        if (NetWork_1.NetWork.isSync && !NetWork_1.NetWork.isMaster) {
            UIHelp_1.UIHelp.showRecoverMask();
        }
        ListenerManager_1.ListenerManager.dispatch(FrameMsgType_1.FrameMsgType.TEACHER_PANEL_LOADING, false);
        if (ConstValue_1.ConstValue.IS_TEACHER) {
            this.panelReady();
            UIHelp_1.UIHelp.showUploadAndReturnPanel();
        }
        else {
            this.getNet();
        }
    };
    BaseGamePanel.prototype.onDestroy = function () {
        _super.prototype.onDestroy.call(this);
        UIHelp_1.UIHelp.closeMask();
    };
    BaseGamePanel.prototype.panelReady = function () {
        this._isPanelReady = true;
        if (UIManager_1.UIManager.isGameShowing) {
            this.setPanel();
        }
        else {
            cc.game.pause();
        }
    };
    BaseGamePanel.prototype.setPanel = function () {
        T2M_1.T2M.init();
        SyncDataManager_1.SyncDataManager.initSyncData();
        ReportManager_1.ReportManager.initReportData(EditorManager_1.EditorManager.getLevelCount());
        if (!NetWork_1.NetWork.isSync || NetWork_1.NetWork.isMaster) {
            UIHelp_1.UIHelp.closeRecoverMask();
        }
        if (EditorManager_1.EditorManager.editorData.isStarCount) {
            cc.resources.load('prefab/ui/panel/OverTips');
        }
        else {
            cc.resources.load('prefab/ui/panel/StarCount');
        }
    };
    BaseGamePanel.prototype.onRecoveryData = function (recovery) {
        SyncDataManager_1.SyncDataManager.setSyncData(recovery);
        if (SyncDataManager_1.SyncDataManager.syncData.frameSyncData.isGameOver) {
            this.showGameOverPanel();
        }
        else {
            UIHelp_1.UIHelp.closeOverTips();
            UIHelp_1.UIHelp.closeStarCount();
        }
    };
    BaseGamePanel.prototype.answerRight = function (isCurLevelFinish) {
        ReportManager_1.ReportManager.reportLevelResult(true, isCurLevelFinish);
    };
    BaseGamePanel.prototype.answerWrong = function (isCurLevelFinish) {
        if (isCurLevelFinish === void 0) { isCurLevelFinish = false; }
        ReportManager_1.ReportManager.reportLevelResult(false, isCurLevelFinish);
    };
    BaseGamePanel.prototype.gameOver = function () {
        SyncDataManager_1.SyncDataManager.syncData.frameSyncData.isGameOver = true;
        this.showGameOverPanel();
    };
    BaseGamePanel.prototype.showGameOverPanel = function () {
        UIHelp_1.UIHelp.showMask();
        SoundManager_1.SoundManager.stopAll();
        var isShowReplay = EditorManager_1.EditorManager.editorData.isReplay &&
            SyncDataManager_1.SyncDataManager.syncData.frameSyncData.hasReplayCount < EditorManager_1.EditorManager.editorData.replayCount;
        if (EditorManager_1.EditorManager.editorData.isStarCount) {
            UIHelp_1.UIHelp.showStarCount(isShowReplay);
        }
        else {
            var str = 1 === EditorManager_1.EditorManager.getLevelCount() ? '挑战成功' : '闯关成功';
            UIHelp_1.UIHelp.showOverTips(2, '', null, str, isShowReplay);
        }
    };
    BaseGamePanel.prototype.onGameShow = function () {
        if (this._isPanelReady) {
            cc.game.resume();
            this.setPanel();
        }
    };
    BaseGamePanel.prototype.onReplay = function () {
        UIHelp_1.UIHelp.closeOverTips();
        UIHelp_1.UIHelp.closeStarCount();
        SyncDataManager_1.SyncDataManager.replay();
        ReportManager_1.ReportManager.replayGame();
    };
    BaseGamePanel.prototype.addSDKEventListener = function () {
        // 小组课
        GameMsg_1.default.addEvent(FrameMsgType_1.FrameMsgType.STOP, this.onSDKMsgStopReceived.bind(this));
        // 小班课
        ListenerManager_1.ListenerManager.on(FrameMsgType_1.FrameMsgType.ON_RECOVERY_DATA, this.onRecoveryData, this);
        T2M_1.T2M.addSyncEventListener(FrameMsgType_1.FrameMsgType.REPLAY_START, this.onReplay.bind(this));
        // 预加载：监听窗口打开
        ListenerManager_1.ListenerManager.on(FrameMsgType_1.FrameMsgType.PRELOAD_GAME_SHOW, this.onGameShow.bind(this), this);
    };
    BaseGamePanel.prototype.getNet = function () {
        var _this = this;
        NetWork_1.NetWork.httpRequest(NetWork_1.NetWork.GET_QUESTION + '?courseware_id=' + NetWork_1.NetWork.coursewareId, 'GET', 'application/json;charset=utf-8', function (err, response) {
            if (!err) {
                var response_data = response;
                if (Array.isArray(response_data.data)) {
                    return;
                }
                var content = JSON.parse(response_data.data.courseware_content);
                if (content != null) {
                    if (content.CoursewareKey == ConstValue_1.ConstValue.CoursewareKey) {
                        EditorManager_1.EditorManager.setData(content.data);
                        _this.panelReady();
                    }
                    else {
                        // coursewareKey错误
                        GameMsg_1.default.differntKey('CoursewareKey错误！');
                        UIHelp_1.UIHelp.showErrorPanel('CoursewareKey错误,请联系客服！', '', '', '确定');
                        return;
                    }
                }
            }
            else {
            }
        }, null);
    };
    // 游戏结束消息监听
    BaseGamePanel.prototype.onSDKMsgStopReceived = function () {
        //各游戏独立处理  先上报当前作答数据  后发送finish消息
        GameMsg_1.default.gameStop();
        //新课堂上报
        ReportManager_1.ReportManager.reportGameOver();
        GameMsg_1.default.finished();
    };
    BaseGamePanel.prototype.update = function (dt) {
        T2M_1.T2M.update();
    };
    BaseGamePanel.className = 'BaseGamePanel';
    BaseGamePanel = __decorate([
        ccclass
    ], BaseGamePanel);
    return BaseGamePanel;
}(BaseUI_1.BaseUI));
exports.default = BaseGamePanel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWVcXHNjcmlwdHNcXFVJXFxQYW5lbFxcQmFzZUdhbWVQYW5lbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1RUFBc0U7QUFDdEUsZ0ZBQStFO0FBQy9FLHdEQUF1RDtBQUN2RCw4Q0FBNkM7QUFDN0MsaUVBQWdFO0FBQ2hFLDZEQUE0RDtBQUM1RCwyREFBMEQ7QUFDMUQsaUVBQTBFO0FBQzFFLHFEQUFvRDtBQUNwRCw2Q0FBd0M7QUFDeEMscUNBQW9DO0FBQ3BDLDZDQUE0QztBQUM1QyxvQ0FBbUM7QUFFN0IsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBMkMsaUNBQU07SUFBakQ7UUFBQSxxRUFrS0M7UUFoS1csbUJBQWEsR0FBWSxLQUFLLENBQUM7O0lBZ0szQyxDQUFDO0lBOUpHLGVBQWU7SUFFZiw2QkFBSyxHQUFMO1FBQ0ksSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUN0RCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1NBQ3JDO1FBRUQsY0FBYztRQUNkLGlCQUFPLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDM0IsSUFBSSxpQkFBTyxDQUFDLE1BQU0sSUFBSSxDQUFDLGlCQUFPLENBQUMsUUFBUSxFQUFFO1lBQ3JDLGVBQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQztTQUM1QjtRQUNELGlDQUFlLENBQUMsUUFBUSxDQUFDLDJCQUFZLENBQUMscUJBQXFCLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFcEUsSUFBSSx1QkFBVSxDQUFDLFVBQVUsRUFB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QUFHLGVBQWUsQ0FBQztJQUR6QixhQUFhO1FBRGpDLE9BQU87T0FDYSxhQUFhLENBa0tqQztJQUFELG9CQUFDO0NBbEtELEFBa0tDLENBbEswQyxlQUFNLEdBa0toRDtrQkFsS29CLGFBQWEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25zdFZhbHVlIH0gZnJvbSAnLi4vLi4vLi4vLi4vZ2FtZS9zY3JpcHRzL0RhdGEvQ29uc3RWYWx1ZSc7XHJcbmltcG9ydCB7IEVkaXRvck1hbmFnZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9nYW1lL3NjcmlwdHMvTWFuYWdlci9FZGl0b3JNYW5hZ2VyJztcclxuaW1wb3J0IHsgRnJhbWVNc2dUeXBlIH0gZnJvbSAnLi4vLi4vRGF0YS9GcmFtZU1zZ1R5cGUnO1xyXG5pbXBvcnQgeyBOZXRXb3JrIH0gZnJvbSAnLi4vLi4vSHR0cC9OZXRXb3JrJztcclxuaW1wb3J0IHsgTGlzdGVuZXJNYW5hZ2VyIH0gZnJvbSAnLi4vLi4vTWFuYWdlci9MaXN0ZW5lck1hbmFnZXInO1xyXG5pbXBvcnQgeyBSZXBvcnRNYW5hZ2VyIH0gZnJvbSAnLi4vLi4vTWFuYWdlci9SZXBvcnRNYW5hZ2VyJztcclxuaW1wb3J0IHsgU291bmRNYW5hZ2VyIH0gZnJvbSAnLi4vLi4vTWFuYWdlci9Tb3VuZE1hbmFnZXInO1xyXG5pbXBvcnQgeyBTeW5jRGF0YSwgU3luY0RhdGFNYW5hZ2VyIH0gZnJvbSAnLi4vLi4vTWFuYWdlci9TeW5jRGF0YU1hbmFnZXInO1xyXG5pbXBvcnQgeyBVSU1hbmFnZXIgfSBmcm9tICcuLi8uLi9NYW5hZ2VyL1VJTWFuYWdlcic7XHJcbmltcG9ydCBHYW1lTXNnIGZyb20gJy4uLy4uL1NESy9HYW1lTXNnJztcclxuaW1wb3J0IHsgVDJNIH0gZnJvbSAnLi4vLi4vU0RLL1QyTSc7XHJcbmltcG9ydCB7IFVJSGVscCB9IGZyb20gJy4uLy4uL1V0aWxzL1VJSGVscCc7XHJcbmltcG9ydCB7IEJhc2VVSSB9IGZyb20gJy4uL0Jhc2VVSSc7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZUdhbWVQYW5lbCBleHRlbmRzIEJhc2VVSSB7XHJcbiAgICBwdWJsaWMgc3RhdGljIGNsYXNzTmFtZSA9ICdCYXNlR2FtZVBhbmVsJztcclxuICAgIHByaXZhdGUgX2lzUGFuZWxSZWFkeTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmRhdGEgJiYgdGhpcy5kYXRhLm5vZGUgJiYgdGhpcy5kYXRhLm5vZGUucGFyZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YS5ub2RlLnJlbW92ZUZyb21QYXJlbnQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOWPkemAgUdhbWVTdGFydFxyXG4gICAgICAgIEdhbWVNc2cuZ2FtZVN0YXJ0KCk7XHJcbiAgICAgICAgdGhpcy5hZGRTREtFdmVudExpc3RlbmVyKCk7XHJcbiAgICAgICAgaWYgKE5ldFdvcmsuaXNTeW5jICYmICFOZXRXb3JrLmlzTWFzdGVyKSB7XHJcbiAgICAgICAgICAgIFVJSGVscC5zaG93UmVjb3Zlck1hc2soKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgTGlzdGVuZXJNYW5hZ2VyLmRpc3BhdGNoKEZyYW1lTXNnVHlwZS5URUFDSEVSX1BBTkVMX0xPQURJTkcsIGZhbHNlKTtcclxuXHJcbiAgICAgICAgaWYgKENvbnN0VmFsdWUuSVNfVEVBQ0hFUikge1xyXG4gICAgICAgICAgICB0aGlzLnBhbmVsUmVhZHkoKTtcclxuICAgICAgICAgICAgVUlIZWxwLnNob3dVcGxvYWRBbmRSZXR1cm5QYW5lbCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0TmV0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uRGVzdHJveSgpIHtcclxuICAgICAgICBzdXBlci5vbkRlc3Ryb3koKTtcclxuICAgICAgICBVSUhlbHAuY2xvc2VNYXNrKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBwYW5lbFJlYWR5KCkge1xyXG4gICAgICAgIHRoaXMuX2lzUGFuZWxSZWFkeSA9IHRydWU7XHJcbiAgICAgICAgaWYgKFVJTWFuYWdlci5pc0dhbWVTaG93aW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0UGFuZWwoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjYy5nYW1lLnBhdXNlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBzZXRQYW5lbCgpIHtcclxuICAgICAgICBUMk0uaW5pdCgpO1xyXG4gICAgICAgIFN5bmNEYXRhTWFuYWdlci5pbml0U3luY0RhdGEoKTtcclxuICAgICAgICBSZXBvcnRNYW5hZ2VyLmluaXRSZXBvcnREYXRhKEVkaXRvck1hbmFnZXIuZ2V0TGV2ZWxDb3VudCgpKTtcclxuICAgICAgICBpZiAoIU5ldFdvcmsuaXNTeW5jIHx8IE5ldFdvcmsuaXNNYXN0ZXIpIHtcclxuICAgICAgICAgICAgVUlIZWxwLmNsb3NlUmVjb3Zlck1hc2soKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChFZGl0b3JNYW5hZ2VyLmVkaXRvckRhdGEuaXNTdGFyQ291bnQpIHtcclxuICAgICAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQoJ3ByZWZhYi91aS9wYW5lbC9PdmVyVGlwcycpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNjLnJlc291cmNlcy5sb2FkKCdwcmVmYWIvdWkvcGFuZWwvU3RhckNvdW50Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBvblJlY292ZXJ5RGF0YShyZWNvdmVyeTogU3luY0RhdGEpIHtcclxuICAgICAgICBTeW5jRGF0YU1hbmFnZXIuc2V0U3luY0RhdGEocmVjb3ZlcnkpO1xyXG4gICAgICAgIGlmIChTeW5jRGF0YU1hbmFnZXIuc3luY0RhdGEuZnJhbWVTeW5jRGF0YS5pc0dhbWVPdmVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0dhbWVPdmVyUGFuZWwoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBVSUhlbHAuY2xvc2VPdmVyVGlwcygpO1xyXG4gICAgICAgICAgICBVSUhlbHAuY2xvc2VTdGFyQ291bnQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGFuc3dlclJpZ2h0KGlzQ3VyTGV2ZWxGaW5pc2g6IGJvb2xlYW4pIHtcclxuICAgICAgICBSZXBvcnRNYW5hZ2VyLnJlcG9ydExldmVsUmVzdWx0KHRydWUsIGlzQ3VyTGV2ZWxGaW5pc2gpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBhbnN3ZXJXcm9uZyhpc0N1ckxldmVsRmluaXNoOiBib29sZWFuID0gZmFsc2UpIHtcclxuICAgICAgICBSZXBvcnRNYW5hZ2VyLnJlcG9ydExldmVsUmVzdWx0KGZhbHNlLCBpc0N1ckxldmVsRmluaXNoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgZ2FtZU92ZXIoKSB7XHJcbiAgICAgICAgU3luY0RhdGFNYW5hZ2VyLnN5bmNEYXRhLmZyYW1lU3luY0RhdGEuaXNHYW1lT3ZlciA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zaG93R2FtZU92ZXJQYW5lbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBzaG93R2FtZU92ZXJQYW5lbCgpIHtcclxuICAgICAgICBVSUhlbHAuc2hvd01hc2soKTtcclxuICAgICAgICBTb3VuZE1hbmFnZXIuc3RvcEFsbCgpO1xyXG4gICAgICAgIGxldCBpc1Nob3dSZXBsYXk6IGJvb2xlYW4gPVxyXG4gICAgICAgICAgICBFZGl0b3JNYW5hZ2VyLmVkaXRvckRhdGEuaXNSZXBsYXkgJiZcclxuICAgICAgICAgICAgU3luY0RhdGFNYW5hZ2VyLnN5bmNEYXRhLmZyYW1lU3luY0RhdGEuaGFzUmVwbGF5Q291bnQgPCBFZGl0b3JNYW5hZ2VyLmVkaXRvckRhdGEucmVwbGF5Q291bnQ7XHJcbiAgICAgICAgaWYgKEVkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS5pc1N0YXJDb3VudCkge1xyXG4gICAgICAgICAgICBVSUhlbHAuc2hvd1N0YXJDb3VudChpc1Nob3dSZXBsYXkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBzdHIgPSAxID09PSBFZGl0b3JNYW5hZ2VyLmdldExldmVsQ291bnQoKSA/ICfmjJHmiJjmiJDlip8nIDogJ+mXr+WFs+aIkOWKnyc7XHJcbiAgICAgICAgICAgIFVJSGVscC5zaG93T3ZlclRpcHMoMiwgJycsIG51bGwsIHN0ciwgaXNTaG93UmVwbGF5KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvbkdhbWVTaG93KCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9pc1BhbmVsUmVhZHkpIHtcclxuICAgICAgICAgICAgY2MuZ2FtZS5yZXN1bWUoKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRQYW5lbCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25SZXBsYXkoKSB7XHJcbiAgICAgICAgVUlIZWxwLmNsb3NlT3ZlclRpcHMoKTtcclxuICAgICAgICBVSUhlbHAuY2xvc2VTdGFyQ291bnQoKTtcclxuXHJcbiAgICAgICAgU3luY0RhdGFNYW5hZ2VyLnJlcGxheSgpO1xyXG4gICAgICAgIFJlcG9ydE1hbmFnZXIucmVwbGF5R2FtZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYWRkU0RLRXZlbnRMaXN0ZW5lcigpIHtcclxuICAgICAgICAvLyDlsI/nu4Tor75cclxuICAgICAgICBHYW1lTXNnLmFkZEV2ZW50KEZyYW1lTXNnVHlwZS5TVE9QLCB0aGlzLm9uU0RLTXNnU3RvcFJlY2VpdmVkLmJpbmQodGhpcykpO1xyXG4gICAgICAgIC8vIOWwj+ePreivvlxyXG4gICAgICAgIExpc3RlbmVyTWFuYWdlci5vbihGcmFtZU1zZ1R5cGUuT05fUkVDT1ZFUllfREFUQSwgdGhpcy5vblJlY292ZXJ5RGF0YSwgdGhpcyk7XHJcblxyXG4gICAgICAgIFQyTS5hZGRTeW5jRXZlbnRMaXN0ZW5lcihGcmFtZU1zZ1R5cGUuUkVQTEFZX1NUQVJULCB0aGlzLm9uUmVwbGF5LmJpbmQodGhpcykpO1xyXG5cclxuICAgICAgICAvLyDpooTliqDovb3vvJrnm5HlkKznqpflj6PmiZPlvIBcclxuICAgICAgICBMaXN0ZW5lck1hbmFnZXIub24oRnJhbWVNc2dUeXBlLlBSRUxPQURfR0FNRV9TSE9XLCB0aGlzLm9uR2FtZVNob3cuYmluZCh0aGlzKSwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXROZXQoKSB7XHJcbiAgICAgICAgTmV0V29yay5odHRwUmVxdWVzdChcclxuICAgICAgICAgICAgTmV0V29yay5HRVRfUVVFU1RJT04gKyAnP2NvdXJzZXdhcmVfaWQ9JyArIE5ldFdvcmsuY291cnNld2FyZUlkLFxyXG4gICAgICAgICAgICAnR0VUJyxcclxuICAgICAgICAgICAgJ2FwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtOCcsXHJcbiAgICAgICAgICAgIChlcnIsIHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCByZXNwb25zZV9kYXRhID0gcmVzcG9uc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocmVzcG9uc2VfZGF0YS5kYXRhKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjb250ZW50ID0gSlNPTi5wYXJzZShyZXNwb25zZV9kYXRhLmRhdGEuY291cnNld2FyZV9jb250ZW50KTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY29udGVudCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb250ZW50LkNvdXJzZXdhcmVLZXkgPT0gQ29uc3RWYWx1ZS5Db3Vyc2V3YXJlS2V5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBFZGl0b3JNYW5hZ2VyLnNldERhdGEoY29udGVudC5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFuZWxSZWFkeSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY291cnNld2FyZUtleemUmeivr1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgR2FtZU1zZy5kaWZmZXJudEtleSgnQ291cnNld2FyZUtleemUmeivr++8gScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVUlIZWxwLnNob3dFcnJvclBhbmVsKCdDb3Vyc2V3YXJlS2V56ZSZ6K+vLOivt+iBlOezu+Wuouacje+8gScsICcnLCAnJywgJ+ehruWumicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOa4uOaIj+e7k+adn+a2iOaBr+ebkeWQrFxyXG4gICAgcHJpdmF0ZSBvblNES01zZ1N0b3BSZWNlaXZlZCgpIHtcclxuICAgICAgICAvL+WQhOa4uOaIj+eLrOeri+WkhOeQhiAg5YWI5LiK5oql5b2T5YmN5L2c562U5pWw5o2uICDlkI7lj5HpgIFmaW5pc2jmtojmga9cclxuICAgICAgICBHYW1lTXNnLmdhbWVTdG9wKCk7XHJcbiAgICAgICAgLy/mlrDor77loILkuIrmiqVcclxuICAgICAgICBSZXBvcnRNYW5hZ2VyLnJlcG9ydEdhbWVPdmVyKCk7XHJcbiAgICAgICAgR2FtZU1zZy5maW5pc2hlZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdCkge1xyXG4gICAgICAgIFQyTS51cGRhdGUoKTtcclxuICAgIH1cclxufVxyXG4iXX0=