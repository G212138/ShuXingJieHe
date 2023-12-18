
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
var EditorManager_1 = require("../../../../game/scripts/Manager/EditorManager");
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
        var isEdit = EditorManager_1.EditorManager.isSupportEdit();
        if (!isEdit || ReportManager_1.ReportManager.isAllOver) {
            UIHelp_1.UIHelp.showSubmissionPanel();
        }
        else {
            UIHelp_1.UIHelp.showTip('请先完成一遍题目');
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWVcXHNjcmlwdHNcXFVJXFxQYW5lbFxcVXBsb2FkQW5kUmV0dXJuUGFuZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbUVBQWtFO0FBQ2xFLDhDQUF5QztBQUN6Qyx3REFBdUQ7QUFDdkQsNkNBQTRDO0FBQzVDLDZEQUE0RDtBQUM1RCwyREFBMEQ7QUFDMUQscUNBQW9DO0FBQ3BDLGdGQUErRTtBQUMvRSxxREFBb0Q7QUFDcEQsK0VBQTBFO0FBRXBFLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQWtELHdDQUFXO0lBQTdEOztJQW9EQSxDQUFDO0lBakRHLHFDQUFNLEdBQU47UUFBQSxpQkFJQztRQUhHLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixFQUFFO1lBQzdDLEtBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN4QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxvQ0FBSyxHQUFMO1FBQ0ksaUNBQWUsQ0FBQyxRQUFRLENBQUMsMkJBQVksQ0FBQyx1QkFBdUIsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN0RSxDQUFDO0lBRUQsdUNBQVEsR0FBUjtRQUNJLGlDQUFlLENBQUMsUUFBUSxDQUFDLDJCQUFZLENBQUMsdUJBQXVCLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDbEUsZUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3hCLGVBQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN4QixlQUFNLENBQUMseUJBQXlCLEVBQUUsQ0FBQztRQUNuQyxlQUFNLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUM5QixlQUFNLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDdkIsZUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3hCLDZCQUFhLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDL0IsMkJBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUN2QixTQUFHLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztRQUM3QixxQkFBUyxDQUFDLE1BQU0sQ0FBQyxzQkFBWSxDQUFDLENBQUM7UUFDL0IsSUFBSSxVQUFVLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDdEUsSUFBSSxFQUFFLEdBQUcsVUFBVSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDM0MsRUFBRSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDbEIsVUFBVSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQztJQUNuSCxDQUFDO0lBRUQsdUNBQVEsR0FBUjtRQUNJLElBQU0sTUFBTSxHQUFHLDZCQUFhLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDN0MsSUFBSSxDQUFDLE1BQU0sSUFBSSw2QkFBYSxDQUFDLFNBQVMsRUFBRTtZQUNwQyxlQUFNLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztTQUNoQzthQUFNO1lBQ0gsZUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUM5QjtJQUNMLENBQUM7SUFFRCwyQ0FBWSxHQUFaO1FBQ0ksSUFBSSxZQUFZLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7UUFDckMsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDMUMsSUFBSSxNQUFNLEVBQUU7WUFDUixJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDakMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUN6RDtpQkFBTTtnQkFDSCxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQzthQUNyQjtZQUNELE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQztTQUM1QjtJQUNMLENBQUM7SUFsRGEsOEJBQVMsR0FBRyxzQkFBc0IsQ0FBQztJQURoQyxvQkFBb0I7UUFEeEMsT0FBTztPQUNhLG9CQUFvQixDQW9EeEM7SUFBRCwyQkFBQztDQXBERCxBQW9EQyxDQXBEaUQscUJBQVcsR0FvRDVEO2tCQXBEb0Isb0JBQW9CIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGlzdGVuZXJNYW5hZ2VyIH0gZnJvbSAnLi8uLi8uLi9NYW5hZ2VyL0xpc3RlbmVyTWFuYWdlcic7XG5pbXBvcnQgQmFzZUZyYW1lVUkgZnJvbSAnLi4vQmFzZUZyYW1lVUknO1xuaW1wb3J0IHsgRnJhbWVNc2dUeXBlIH0gZnJvbSAnLi4vLi4vRGF0YS9GcmFtZU1zZ1R5cGUnO1xuaW1wb3J0IHsgVUlIZWxwIH0gZnJvbSAnLi4vLi4vVXRpbHMvVUlIZWxwJztcbmltcG9ydCB7IFJlcG9ydE1hbmFnZXIgfSBmcm9tICcuLi8uLi9NYW5hZ2VyL1JlcG9ydE1hbmFnZXInO1xuaW1wb3J0IHsgU291bmRNYW5hZ2VyIH0gZnJvbSAnLi4vLi4vTWFuYWdlci9Tb3VuZE1hbmFnZXInO1xuaW1wb3J0IHsgVDJNIH0gZnJvbSAnLi4vLi4vU0RLL1QyTSc7XG5pbXBvcnQgeyBFZGl0b3JNYW5hZ2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vZ2FtZS9zY3JpcHRzL01hbmFnZXIvRWRpdG9yTWFuYWdlcic7XG5pbXBvcnQgeyBVSU1hbmFnZXIgfSBmcm9tICcuLi8uLi9NYW5hZ2VyL1VJTWFuYWdlcic7XG5pbXBvcnQgVGVhY2hlclBhbmVsIGZyb20gJy4uLy4uLy4uLy4uL2dhbWUvc2NyaXB0cy9VSS9wYW5lbC9UZWFjaGVyUGFuZWwnO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXBsb2FkQW5kUmV0dXJuUGFuZWwgZXh0ZW5kcyBCYXNlRnJhbWVVSSB7XG4gICAgcHVibGljIHN0YXRpYyBjbGFzc05hbWUgPSAnVXBsb2FkQW5kUmV0dXJuUGFuZWwnO1xuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuUE9TSVRJT05fQ0hBTkdFRCwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5hZGp1c3RXaWRnZXQoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIExpc3RlbmVyTWFuYWdlci5kaXNwYXRjaChGcmFtZU1zZ1R5cGUuT05fRURJVF9TVEFURV9TV0lUQ0hJTkcsIDEpO1xuICAgIH1cblxuICAgIG9uRmFuSHVpKCkge1xuICAgICAgICBMaXN0ZW5lck1hbmFnZXIuZGlzcGF0Y2goRnJhbWVNc2dUeXBlLk9OX0VESVRfU1RBVEVfU1dJVENISU5HLCAwKTtcbiAgICAgICAgVUlIZWxwLmNsb3NlU3RhckNvdW50KCk7XG4gICAgICAgIFVJSGVscC5jbG9zZUdhbWVQYW5lbCgpO1xuICAgICAgICBVSUhlbHAuY2xvc2VVcGxvYWRBbmRSZXR1cm5QYW5lbCgpO1xuICAgICAgICBVSUhlbHAuY2xvc2VTdWJtaXNzaW9uUGFuZWwoKTtcbiAgICAgICAgVUlIZWxwLmNsb3NlT3ZlclRpcHMoKTtcbiAgICAgICAgVUlIZWxwLmNsb3NlQWZmaXJtVGlwKCk7XG4gICAgICAgIFJlcG9ydE1hbmFnZXIucmVwb3J0R2FtZU92ZXIoKTtcbiAgICAgICAgU291bmRNYW5hZ2VyLnN0b3BBbGwoKTtcbiAgICAgICAgVDJNLm9uUmV0dXJuVG9UZWFjaGVyUGFuZWwoKTtcbiAgICAgICAgVUlNYW5hZ2VyLnNob3dVSShUZWFjaGVyUGFuZWwpO1xuICAgICAgICBsZXQgbWFpbkNhbWVyYSA9IGNjLmZpbmQoXCJDYW52YXMvTWFpbiBDYW1lcmFcIikuZ2V0Q29tcG9uZW50KGNjLkNhbWVyYSlcbiAgICAgICAgbGV0IGJnID0gbWFpbkNhbWVyYS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKVxuICAgICAgICBiZy5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgbWFpbkNhbWVyYS5jbGVhckZsYWdzID0gY2MuQ2FtZXJhLkNsZWFyRmxhZ3MuREVQVEggfCBjYy5DYW1lcmEuQ2xlYXJGbGFncy5TVEVOQ0lMIHwgY2MuQ2FtZXJhLkNsZWFyRmxhZ3MuQ09MT1I7XG4gICAgfVxuXG4gICAgb25UaUppYW8oKSB7XG4gICAgICAgIGNvbnN0IGlzRWRpdCA9IEVkaXRvck1hbmFnZXIuaXNTdXBwb3J0RWRpdCgpO1xuICAgICAgICBpZiAoIWlzRWRpdCB8fCBSZXBvcnRNYW5hZ2VyLmlzQWxsT3Zlcikge1xuICAgICAgICAgICAgVUlIZWxwLnNob3dTdWJtaXNzaW9uUGFuZWwoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIFVJSGVscC5zaG93VGlwKCfor7flhYjlrozmiJDkuIDpgY3popjnm64nKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFkanVzdFdpZGdldCgpIHtcbiAgICAgICAgbGV0IHNjZW5jZUhlaWdodCA9IGNjLndpblNpemUuaGVpZ2h0O1xuICAgICAgICBsZXQgd2lkZ2V0ID0gdGhpcy5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KTtcbiAgICAgICAgaWYgKHdpZGdldCkge1xuICAgICAgICAgICAgaWYgKHNjZW5jZUhlaWdodCA+IHRoaXMubm9kZS5oZWlnaHQpIHtcbiAgICAgICAgICAgICAgICB3aWRnZXQuYm90dG9tID0gKHNjZW5jZUhlaWdodCAtIHRoaXMubm9kZS5oZWlnaHQpIC8gMjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgd2lkZ2V0LmJvdHRvbSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aWRnZXQudXBkYXRlQWxpZ25tZW50KCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=