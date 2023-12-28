
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/frame/scripts/UI/Panel/UploadAndReturnPanel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8a2a4ho4VlCloJCvzPCR9a/', 'UploadAndReturnPanel');
// frame/scripts/UI/Panel/UploadAndReturnPanel.ts

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
var ListenerManager_1 = require("./../../Manager/ListenerManager");
var BaseFrameUI_1 = require("../BaseFrameUI");
var FrameMsgType_1 = require("../../Data/FrameMsgType");
var UIHelp_1 = require("../../Utils/UIHelp");
var ReportManager_1 = require("../../Manager/ReportManager");
var SoundManager_1 = require("../../Manager/SoundManager");
var T2M_1 = require("../../SDK/T2M");
var UIManager_1 = require("../../Manager/UIManager");
var TeacherPanel_1 = require("../../../../game/scripts/UI/panel/TeacherPanel");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UploadAndReturnPanel = /** @class */ (function (_super) {
    __extends(UploadAndReturnPanel, _super);
    function UploadAndReturnPanel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UploadAndReturnPanel.prototype.onLoad = function () {
        var _this = this;
        this.node.on(cc.Node.EventType.POSITION_CHANGED, function () {
            _this.adjustWidget();
        });
    };
    UploadAndReturnPanel.prototype.start = function () {
        ListenerManager_1.ListenerManager.dispatch(FrameMsgType_1.FrameMsgType.ON_EDIT_STATE_SWITCHING, 1);
    };
    UploadAndReturnPanel.prototype.onFanHui = function () {
        ListenerManager_1.ListenerManager.dispatch(FrameMsgType_1.FrameMsgType.ON_EDIT_STATE_SWITCHING, 0);
        UIHelp_1.UIHelp.closeStarCount();
        UIHelp_1.UIHelp.closeGamePanel();
        UIHelp_1.UIHelp.closeUploadAndReturnPanel();
        UIHelp_1.UIHelp.closeSubmissionPanel();
        UIHelp_1.UIHelp.closeOverTips();
        UIHelp_1.UIHelp.closeAffirmTip();
        ReportManager_1.ReportManager.reportGameOver();
        SoundManager_1.SoundManager.stopAll();
        T2M_1.T2M.onReturnToTeacherPanel();
        UIManager_1.UIManager.showUI(TeacherPanel_1.default);
        var mainCamera = cc.find("Canvas/Main Camera").getComponent(cc.Camera);
        var bg = mainCamera.getComponent(cc.Sprite);
        bg.enabled = true;
        mainCamera.clearFlags = cc.Camera.ClearFlags.DEPTH | cc.Camera.ClearFlags.STENCIL | cc.Camera.ClearFlags.COLOR;
    };
    UploadAndReturnPanel.prototype.onTiJiao = function () {
        // const isEdit = EditorManager.isSupportEdit();
        // if (!isEdit || ReportManager.isAllOver) {
        UIHelp_1.UIHelp.showSubmissionPanel();
        // } else {
        //     UIHelp.showTip('请先完成一遍题目');
        // }
    };
    UploadAndReturnPanel.prototype.adjustWidget = function () {
        var scenceHeight = cc.winSize.height;
        var widget = this.getComponent(cc.Widget);
        if (widget) {
            if (scenceHeight > this.node.height) {
                widget.bottom = (scenceHeight - this.node.height) / 2;
            }
            else {
                widget.bottom = 0;
            }
            widget.updateAlignment();
        }
    };
    UploadAndReturnPanel.className = 'UploadAndReturnPanel';
    UploadAndReturnPanel = __decorate([
        ccclass
    ], UploadAndReturnPanel);
    return UploadAndReturnPanel;
}(BaseFrameUI_1.default));
exports.default = UploadAndReturnPanel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWVcXHNjcmlwdHNcXFVJXFxQYW5lbFxcVXBsb2FkQW5kUmV0dXJuUGFuZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbUVBQWtFO0FBQ2xFLDhDQUF5QztBQUN6Qyx3REFBdUQ7QUFDdkQsNkNBQTRDO0FBQzVDLDZEQUE0RDtBQUM1RCwyREFBMEQ7QUFDMUQscUNBQW9DO0FBRXBDLHFEQUFvRDtBQUNwRCwrRUFBMEU7QUFFcEUsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBa0Qsd0NBQVc7SUFBN0Q7O0lBb0RBLENBQUM7SUFqREcscUNBQU0sR0FBTjtRQUFBLGlCQUlDO1FBSEcsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLEVBQUU7WUFDN0MsS0FBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3hCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELG9DQUFLLEdBQUw7UUFDSSxpQ0FBZSxDQUFDLFFBQVEsQ0FBQywyQkFBWSxDQUFDLHVCQUF1QixFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3RFLENBQUM7SUFFRCx1Q0FBUSxHQUFSO1FBQ0ksaUNBQWUsQ0FBQyxRQUFRLENBQUMsMkJBQVksQ0FBQyx1QkFBdUIsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNsRSxlQUFNLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDeEIsZUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3hCLGVBQU0sQ0FBQyx5QkFBeUIsRUFBRSxDQUFDO1FBQ25DLGVBQU0sQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1FBQzlCLGVBQU0sQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN2QixlQUFNLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDeEIsNkJBQWEsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUMvQiwyQkFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3ZCLFNBQUcsQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO1FBQzdCLHFCQUFTLENBQUMsTUFBTSxDQUFDLHNCQUFZLENBQUMsQ0FBQztRQUMvQixJQUFJLFVBQVUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUN0RSxJQUFJLEVBQUUsR0FBRyxVQUFVLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUMzQyxFQUFFLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNsQixVQUFVLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDO0lBQ25ILENBQUM7SUFFRCx1Q0FBUSxHQUFSO1FBQ0ksZ0RBQWdEO1FBQ2hELDRDQUE0QztRQUN4QyxlQUFNLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUNqQyxXQUFXO1FBQ1gsa0NBQWtDO1FBQ2xDLElBQUk7SUFDUixDQUFDO0lBRUQsMkNBQVksR0FBWjtRQUNJLElBQUksWUFBWSxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO1FBQ3JDLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzFDLElBQUksTUFBTSxFQUFFO1lBQ1IsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQ2pDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDekQ7aUJBQU07Z0JBQ0gsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7YUFDckI7WUFDRCxNQUFNLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDNUI7SUFDTCxDQUFDO0lBbERhLDhCQUFTLEdBQUcsc0JBQXNCLENBQUM7SUFEaEMsb0JBQW9CO1FBRHhDLE9BQU87T0FDYSxvQkFBb0IsQ0FvRHhDO0lBQUQsMkJBQUM7Q0FwREQsQUFvREMsQ0FwRGlELHFCQUFXLEdBb0Q1RDtrQkFwRG9CLG9CQUFvQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExpc3RlbmVyTWFuYWdlciB9IGZyb20gJy4vLi4vLi4vTWFuYWdlci9MaXN0ZW5lck1hbmFnZXInO1xuaW1wb3J0IEJhc2VGcmFtZVVJIGZyb20gJy4uL0Jhc2VGcmFtZVVJJztcbmltcG9ydCB7IEZyYW1lTXNnVHlwZSB9IGZyb20gJy4uLy4uL0RhdGEvRnJhbWVNc2dUeXBlJztcbmltcG9ydCB7IFVJSGVscCB9IGZyb20gJy4uLy4uL1V0aWxzL1VJSGVscCc7XG5pbXBvcnQgeyBSZXBvcnRNYW5hZ2VyIH0gZnJvbSAnLi4vLi4vTWFuYWdlci9SZXBvcnRNYW5hZ2VyJztcbmltcG9ydCB7IFNvdW5kTWFuYWdlciB9IGZyb20gJy4uLy4uL01hbmFnZXIvU291bmRNYW5hZ2VyJztcbmltcG9ydCB7IFQyTSB9IGZyb20gJy4uLy4uL1NESy9UMk0nO1xuaW1wb3J0IHsgRWRpdG9yTWFuYWdlciB9IGZyb20gJy4uLy4uLy4uLy4uL2dhbWUvc2NyaXB0cy9NYW5hZ2VyL0VkaXRvck1hbmFnZXInO1xuaW1wb3J0IHsgVUlNYW5hZ2VyIH0gZnJvbSAnLi4vLi4vTWFuYWdlci9VSU1hbmFnZXInO1xuaW1wb3J0IFRlYWNoZXJQYW5lbCBmcm9tICcuLi8uLi8uLi8uLi9nYW1lL3NjcmlwdHMvVUkvcGFuZWwvVGVhY2hlclBhbmVsJztcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVwbG9hZEFuZFJldHVyblBhbmVsIGV4dGVuZHMgQmFzZUZyYW1lVUkge1xuICAgIHB1YmxpYyBzdGF0aWMgY2xhc3NOYW1lID0gJ1VwbG9hZEFuZFJldHVyblBhbmVsJztcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlBPU0lUSU9OX0NIQU5HRUQsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuYWRqdXN0V2lkZ2V0KCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHN0YXJ0KCkge1xuICAgICAgICBMaXN0ZW5lck1hbmFnZXIuZGlzcGF0Y2goRnJhbWVNc2dUeXBlLk9OX0VESVRfU1RBVEVfU1dJVENISU5HLCAxKTtcbiAgICB9XG5cbiAgICBvbkZhbkh1aSgpIHtcbiAgICAgICAgTGlzdGVuZXJNYW5hZ2VyLmRpc3BhdGNoKEZyYW1lTXNnVHlwZS5PTl9FRElUX1NUQVRFX1NXSVRDSElORywgMCk7XG4gICAgICAgIFVJSGVscC5jbG9zZVN0YXJDb3VudCgpO1xuICAgICAgICBVSUhlbHAuY2xvc2VHYW1lUGFuZWwoKTtcbiAgICAgICAgVUlIZWxwLmNsb3NlVXBsb2FkQW5kUmV0dXJuUGFuZWwoKTtcbiAgICAgICAgVUlIZWxwLmNsb3NlU3VibWlzc2lvblBhbmVsKCk7XG4gICAgICAgIFVJSGVscC5jbG9zZU92ZXJUaXBzKCk7XG4gICAgICAgIFVJSGVscC5jbG9zZUFmZmlybVRpcCgpO1xuICAgICAgICBSZXBvcnRNYW5hZ2VyLnJlcG9ydEdhbWVPdmVyKCk7XG4gICAgICAgIFNvdW5kTWFuYWdlci5zdG9wQWxsKCk7XG4gICAgICAgIFQyTS5vblJldHVyblRvVGVhY2hlclBhbmVsKCk7XG4gICAgICAgIFVJTWFuYWdlci5zaG93VUkoVGVhY2hlclBhbmVsKTtcbiAgICAgICAgbGV0IG1haW5DYW1lcmEgPSBjYy5maW5kKFwiQ2FudmFzL01haW4gQ2FtZXJhXCIpLmdldENvbXBvbmVudChjYy5DYW1lcmEpXG4gICAgICAgIGxldCBiZyA9IG1haW5DYW1lcmEuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSlcbiAgICAgICAgYmcuZW5hYmxlZCA9IHRydWU7XG4gICAgICAgIG1haW5DYW1lcmEuY2xlYXJGbGFncyA9IGNjLkNhbWVyYS5DbGVhckZsYWdzLkRFUFRIIHwgY2MuQ2FtZXJhLkNsZWFyRmxhZ3MuU1RFTkNJTCB8IGNjLkNhbWVyYS5DbGVhckZsYWdzLkNPTE9SO1xuICAgIH1cblxuICAgIG9uVGlKaWFvKCkge1xuICAgICAgICAvLyBjb25zdCBpc0VkaXQgPSBFZGl0b3JNYW5hZ2VyLmlzU3VwcG9ydEVkaXQoKTtcbiAgICAgICAgLy8gaWYgKCFpc0VkaXQgfHwgUmVwb3J0TWFuYWdlci5pc0FsbE92ZXIpIHtcbiAgICAgICAgICAgIFVJSGVscC5zaG93U3VibWlzc2lvblBhbmVsKCk7XG4gICAgICAgIC8vIH0gZWxzZSB7XG4gICAgICAgIC8vICAgICBVSUhlbHAuc2hvd1RpcCgn6K+35YWI5a6M5oiQ5LiA6YGN6aKY55uuJyk7XG4gICAgICAgIC8vIH1cbiAgICB9XG5cbiAgICBhZGp1c3RXaWRnZXQoKSB7XG4gICAgICAgIGxldCBzY2VuY2VIZWlnaHQgPSBjYy53aW5TaXplLmhlaWdodDtcbiAgICAgICAgbGV0IHdpZGdldCA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLldpZGdldCk7XG4gICAgICAgIGlmICh3aWRnZXQpIHtcbiAgICAgICAgICAgIGlmIChzY2VuY2VIZWlnaHQgPiB0aGlzLm5vZGUuaGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgd2lkZ2V0LmJvdHRvbSA9IChzY2VuY2VIZWlnaHQgLSB0aGlzLm5vZGUuaGVpZ2h0KSAvIDI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHdpZGdldC5ib3R0b20gPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2lkZ2V0LnVwZGF0ZUFsaWdubWVudCgpO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19