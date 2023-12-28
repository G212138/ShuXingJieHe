
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game/scripts/UI/panel/TeacherPanel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '70c27EBmWdPJYtgMQ9dyPZS', 'TeacherPanel');
// game/scripts/UI/panel/TeacherPanel.ts

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
var FrameMsgType_1 = require("../../../../frame/scripts/Data/FrameMsgType");
var ListenerManager_1 = require("../../../../frame/scripts/Manager/ListenerManager");
var UIManager_1 = require("../../../../frame/scripts/Manager/UIManager");
var BaseTeacherPanel_1 = require("../../../../frame/scripts/UI/Panel/BaseTeacherPanel");
var UIHelp_1 = require("../../../../frame/scripts/Utils/UIHelp");
var EditorManager_1 = require("../../Manager/EditorManager");
var GamePanel_1 = require("./GamePanel");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TeacherPanel = /** @class */ (function (_super) {
    __extends(TeacherPanel, _super);
    function TeacherPanel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.toggle_stars = null;
        _this.toggle_replay = null;
        _this.toggle_titleAudio = null;
        _this.toggle_count = null;
        _this._btn_save = null;
        _this._btn_view = null;
        return _this;
    }
    TeacherPanel_1 = TeacherPanel;
    TeacherPanel.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    TeacherPanel.prototype.start = function () {
        _super.prototype.start.call(this);
        // 可编辑的游戏，不展示保存按钮
        // const isEdit = EditorManager.isSupportEdit();
        // if (this._btn_save) {
        //     this._btn_save.active = !isEdit;
        // }
    };
    /**
     * 设置界面（这里已经拿到了网络请求数据）
     */
    TeacherPanel.prototype.setPanel = function () {
        _super.prototype.setPanel.call(this);
        this.toggle_stars.toggleItems[EditorManager_1.EditorManager.editorData.isStarCount ? 0 : 1].isChecked = true;
        this.toggle_replay.toggleItems[EditorManager_1.EditorManager.editorData.isReplay ? 0 : 1].isChecked = true;
        this.toggle_titleAudio.toggleItems[EditorManager_1.EditorManager.editorData.isPlayTitle ? 0 : 1].isChecked = true;
        this.toggle_count.toggleItems[EditorManager_1.EditorManager.editorData.count - 2].isChecked = true;
    };
    // 星级评判开关
    TeacherPanel.prototype.onToggleStar = function (toggle) {
        var index = this.toggle_stars.toggleItems.indexOf(toggle);
        EditorManager_1.EditorManager.editorData.isStarCount = 0 === index;
    };
    // 重玩开关
    TeacherPanel.prototype.onToggleReplay = function (toggle) {
        var index = this.toggle_replay.toggleItems.indexOf(toggle);
        EditorManager_1.EditorManager.editorData.isReplay = 0 === index;
    };
    // 自动播放题干语音开关
    TeacherPanel.prototype.onToggleTitleAudio = function (toggle) {
        var index = this.toggle_titleAudio.toggleItems.indexOf(toggle);
        EditorManager_1.EditorManager.editorData.isPlayTitle = 0 === index;
    };
    TeacherPanel.prototype.onToggleCount = function (toggle) {
        var index = this.toggle_count.toggleItems.indexOf(toggle);
        EditorManager_1.EditorManager.editorData.count = index + 2;
    };
    // 保存课件按钮
    TeacherPanel.prototype.onBtnSaveClicked = function () {
        // const isEdit = EditorManager.isSupportEdit();
        // if (!isEdit || ReportManager.isAllOver) {
        UIHelp_1.UIHelp.showSubmissionPanel();
        // } else {
        //     UIHelp.showTip('请先完成一遍题目');
        // }
    };
    // 预览课件按钮
    TeacherPanel.prototype.onBtnViewClicked = function () {
        if (-1 === EditorManager_1.EditorManager.getCoursewareLevel() ||
            null === EditorManager_1.EditorManager.getCoursewareLevel() ||
            void 0 === EditorManager_1.EditorManager.getCoursewareLevel()) {
            UIHelp_1.UIHelp.showTip('请先设置coursewareLevel');
        }
        else {
            ListenerManager_1.ListenerManager.dispatch(FrameMsgType_1.FrameMsgType.TEACHER_PANEL_LOADING, true);
            UIManager_1.UIManager.showUI(GamePanel_1.default);
            UIManager_1.UIManager.hideUI(TeacherPanel_1);
        }
    };
    var TeacherPanel_1;
    TeacherPanel.className = 'TeacherPanel';
    __decorate([
        property(cc.ToggleContainer)
    ], TeacherPanel.prototype, "toggle_stars", void 0);
    __decorate([
        property(cc.ToggleContainer)
    ], TeacherPanel.prototype, "toggle_replay", void 0);
    __decorate([
        property(cc.ToggleContainer)
    ], TeacherPanel.prototype, "toggle_titleAudio", void 0);
    __decorate([
        property(cc.ToggleContainer)
    ], TeacherPanel.prototype, "toggle_count", void 0);
    TeacherPanel = TeacherPanel_1 = __decorate([
        ccclass
    ], TeacherPanel);
    return TeacherPanel;
}(BaseTeacherPanel_1.default));
exports.default = TeacherPanel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZVxcc2NyaXB0c1xcVUlcXHBhbmVsXFxUZWFjaGVyUGFuZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNEVBQTJFO0FBQzNFLHFGQUFvRjtBQUVwRix5RUFBd0U7QUFDeEUsd0ZBQW1GO0FBRW5GLGlFQUFnRTtBQUNoRSw2REFBNEQ7QUFDNUQseUNBQW9DO0FBRTlCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTBDLGdDQUFnQjtJQUExRDtRQUFBLHFFQXdGQztRQXBGVyxrQkFBWSxHQUF1QixJQUFJLENBQUM7UUFFeEMsbUJBQWEsR0FBdUIsSUFBSSxDQUFDO1FBRXpDLHVCQUFpQixHQUF1QixJQUFJLENBQUM7UUFHN0Msa0JBQVksR0FBdUIsSUFBSSxDQUFDO1FBRXhDLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFDMUIsZUFBUyxHQUFZLElBQUksQ0FBQzs7SUEwRXRDLENBQUM7cUJBeEZvQixZQUFZO0lBZ0I3Qiw2QkFBTSxHQUFOO1FBQ0ksaUJBQU0sTUFBTSxXQUFFLENBQUM7SUFDbkIsQ0FBQztJQUVELDRCQUFLLEdBQUw7UUFDSSxpQkFBTSxLQUFLLFdBQUUsQ0FBQztRQUVkLGlCQUFpQjtRQUNqQixnREFBZ0Q7UUFDaEQsd0JBQXdCO1FBQ3hCLHVDQUF1QztRQUN2QyxJQUFJO0lBQ1IsQ0FBQztJQUVEOztPQUVHO0lBQ0gsK0JBQVEsR0FBUjtRQUNJLGlCQUFNLFFBQVEsV0FBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLDZCQUFhLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQzdGLElBQUksQ0FBQyxhQUFhLENB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ZSxDQUFDO3NEQUNtQjtJQVgvQixZQUFZO1FBRGhDLE9BQU87T0FDYSxZQUFZLENBd0ZoQztJQUFELG1CQUFDO0NBeEZELEFBd0ZDLENBeEZ5QywwQkFBZ0IsR0F3RnpEO2tCQXhGb0IsWUFBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZyYW1lTXNnVHlwZSB9IGZyb20gJy4uLy4uLy4uLy4uL2ZyYW1lL3NjcmlwdHMvRGF0YS9GcmFtZU1zZ1R5cGUnO1xuaW1wb3J0IHsgTGlzdGVuZXJNYW5hZ2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vZnJhbWUvc2NyaXB0cy9NYW5hZ2VyL0xpc3RlbmVyTWFuYWdlcic7XG5pbXBvcnQgeyBSZXBvcnRNYW5hZ2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vZnJhbWUvc2NyaXB0cy9NYW5hZ2VyL1JlcG9ydE1hbmFnZXInO1xuaW1wb3J0IHsgVUlNYW5hZ2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vZnJhbWUvc2NyaXB0cy9NYW5hZ2VyL1VJTWFuYWdlcic7XG5pbXBvcnQgQmFzZVRlYWNoZXJQYW5lbCBmcm9tICcuLi8uLi8uLi8uLi9mcmFtZS9zY3JpcHRzL1VJL1BhbmVsL0Jhc2VUZWFjaGVyUGFuZWwnO1xuaW1wb3J0IFN1Ym1pc3Npb25QYW5lbCBmcm9tICcuLi8uLi8uLi8uLi9mcmFtZS9zY3JpcHRzL1VJL1BhbmVsL1N1Ym1pc3Npb25QYW5lbCc7XG5pbXBvcnQgeyBVSUhlbHAgfSBmcm9tICcuLi8uLi8uLi8uLi9mcmFtZS9zY3JpcHRzL1V0aWxzL1VJSGVscCc7XG5pbXBvcnQgeyBFZGl0b3JNYW5hZ2VyIH0gZnJvbSAnLi4vLi4vTWFuYWdlci9FZGl0b3JNYW5hZ2VyJztcbmltcG9ydCBHYW1lUGFuZWwgZnJvbSAnLi9HYW1lUGFuZWwnO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVhY2hlclBhbmVsIGV4dGVuZHMgQmFzZVRlYWNoZXJQYW5lbCB7XG4gICAgcHVibGljIHN0YXRpYyBjbGFzc05hbWUgPSAnVGVhY2hlclBhbmVsJztcblxuICAgIEBwcm9wZXJ0eShjYy5Ub2dnbGVDb250YWluZXIpXG4gICAgcHJpdmF0ZSB0b2dnbGVfc3RhcnM6IGNjLlRvZ2dsZUNvbnRhaW5lciA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlRvZ2dsZUNvbnRhaW5lcilcbiAgICBwcml2YXRlIHRvZ2dsZV9yZXBsYXk6IGNjLlRvZ2dsZUNvbnRhaW5lciA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlRvZ2dsZUNvbnRhaW5lcilcbiAgICBwcml2YXRlIHRvZ2dsZV90aXRsZUF1ZGlvOiBjYy5Ub2dnbGVDb250YWluZXIgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlRvZ2dsZUNvbnRhaW5lcilcbiAgICBwcml2YXRlIHRvZ2dsZV9jb3VudDogY2MuVG9nZ2xlQ29udGFpbmVyID0gbnVsbDtcblxuICAgIHByaXZhdGUgX2J0bl9zYXZlOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBwcml2YXRlIF9idG5fdmlldzogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIHN1cGVyLm9uTG9hZCgpO1xuICAgIH1cblxuICAgIHN0YXJ0KCkge1xuICAgICAgICBzdXBlci5zdGFydCgpO1xuXG4gICAgICAgIC8vIOWPr+e8lui+keeahOa4uOaIj++8jOS4jeWxleekuuS/neWtmOaMiemSrlxuICAgICAgICAvLyBjb25zdCBpc0VkaXQgPSBFZGl0b3JNYW5hZ2VyLmlzU3VwcG9ydEVkaXQoKTtcbiAgICAgICAgLy8gaWYgKHRoaXMuX2J0bl9zYXZlKSB7XG4gICAgICAgIC8vICAgICB0aGlzLl9idG5fc2F2ZS5hY3RpdmUgPSAhaXNFZGl0O1xuICAgICAgICAvLyB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6K6+572u55WM6Z2i77yI6L+Z6YeM5bey57uP5ou/5Yiw5LqG572R57uc6K+35rGC5pWw5o2u77yJXG4gICAgICovXG4gICAgc2V0UGFuZWwoKSB7XG4gICAgICAgIHN1cGVyLnNldFBhbmVsKCk7XG4gICAgICAgIHRoaXMudG9nZ2xlX3N0YXJzLnRvZ2dsZUl0ZW1zW0VkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS5pc1N0YXJDb3VudCA/IDAgOiAxXS5pc0NoZWNrZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLnRvZ2dsZV9yZXBsYXkudG9nZ2xlSXRlbXNbRWRpdG9yTWFuYWdlci5lZGl0b3JEYXRhLmlzUmVwbGF5ID8gMCA6IDFdLmlzQ2hlY2tlZCA9IHRydWU7XG4gICAgICAgIHRoaXMudG9nZ2xlX3RpdGxlQXVkaW8udG9nZ2xlSXRlbXNbRWRpdG9yTWFuYWdlci5lZGl0b3JEYXRhLmlzUGxheVRpdGxlID8gMCA6IDFdLmlzQ2hlY2tlZCA9IHRydWU7XG5cbiAgICAgICAgdGhpcy50b2dnbGVfY291bnQudG9nZ2xlSXRlbXNbRWRpdG9yTWFuYWdlci5lZGl0b3JEYXRhLmNvdW50IC0gMl0uaXNDaGVja2VkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyDmmJ/nuqfor4TliKTlvIDlhbNcbiAgICBwdWJsaWMgb25Ub2dnbGVTdGFyKHRvZ2dsZTogY2MuVG9nZ2xlKTogdm9pZCB7XG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMudG9nZ2xlX3N0YXJzLnRvZ2dsZUl0ZW1zLmluZGV4T2YodG9nZ2xlKTtcbiAgICAgICAgRWRpdG9yTWFuYWdlci5lZGl0b3JEYXRhLmlzU3RhckNvdW50ID0gMCA9PT0gaW5kZXg7XG4gICAgfVxuXG4gICAgLy8g6YeN546p5byA5YWzXG4gICAgcHVibGljIG9uVG9nZ2xlUmVwbGF5KHRvZ2dsZTogY2MuVG9nZ2xlKTogdm9pZCB7XG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMudG9nZ2xlX3JlcGxheS50b2dnbGVJdGVtcy5pbmRleE9mKHRvZ2dsZSk7XG4gICAgICAgIEVkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS5pc1JlcGxheSA9IDAgPT09IGluZGV4O1xuICAgIH1cblxuICAgIC8vIOiHquWKqOaSreaUvumimOW5suivremfs+W8gOWFs1xuICAgIHB1YmxpYyBvblRvZ2dsZVRpdGxlQXVkaW8odG9nZ2xlOiBjYy5Ub2dnbGUpOiB2b2lkIHtcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy50b2dnbGVfdGl0bGVBdWRpby50b2dnbGVJdGVtcy5pbmRleE9mKHRvZ2dsZSk7XG4gICAgICAgIEVkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS5pc1BsYXlUaXRsZSA9IDAgPT09IGluZGV4O1xuICAgIH1cblxuICAgIHB1YmxpYyBvblRvZ2dsZUNvdW50KHRvZ2dsZTogY2MuVG9nZ2xlKTogdm9pZCB7XG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMudG9nZ2xlX2NvdW50LnRvZ2dsZUl0ZW1zLmluZGV4T2YodG9nZ2xlKTtcbiAgICAgICAgRWRpdG9yTWFuYWdlci5lZGl0b3JEYXRhLmNvdW50ID0gaW5kZXggKyAyO1xuICAgIH1cblxuICAgIC8vIOS/neWtmOivvuS7tuaMiemSrlxuICAgIHB1YmxpYyBvbkJ0blNhdmVDbGlja2VkKCkge1xuICAgICAgICAvLyBjb25zdCBpc0VkaXQgPSBFZGl0b3JNYW5hZ2VyLmlzU3VwcG9ydEVkaXQoKTtcbiAgICAgICAgLy8gaWYgKCFpc0VkaXQgfHwgUmVwb3J0TWFuYWdlci5pc0FsbE92ZXIpIHtcbiAgICAgICAgICAgIFVJSGVscC5zaG93U3VibWlzc2lvblBhbmVsKCk7XG4gICAgICAgIC8vIH0gZWxzZSB7XG4gICAgICAgIC8vICAgICBVSUhlbHAuc2hvd1RpcCgn6K+35YWI5a6M5oiQ5LiA6YGN6aKY55uuJyk7XG4gICAgICAgIC8vIH1cbiAgICB9XG4gICAgLy8g6aKE6KeI6K++5Lu25oyJ6ZKuXG4gICAgcHVibGljIG9uQnRuVmlld0NsaWNrZWQoKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIC0xID09PSBFZGl0b3JNYW5hZ2VyLmdldENvdXJzZXdhcmVMZXZlbCgpIHx8XG4gICAgICAgICAgICBudWxsID09PSBFZGl0b3JNYW5hZ2VyLmdldENvdXJzZXdhcmVMZXZlbCgpIHx8XG4gICAgICAgICAgICB2b2lkIDAgPT09IEVkaXRvck1hbmFnZXIuZ2V0Q291cnNld2FyZUxldmVsKClcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBVSUhlbHAuc2hvd1RpcCgn6K+35YWI6K6+572uY291cnNld2FyZUxldmVsJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBMaXN0ZW5lck1hbmFnZXIuZGlzcGF0Y2goRnJhbWVNc2dUeXBlLlRFQUNIRVJfUEFORUxfTE9BRElORywgdHJ1ZSk7XG4gICAgICAgICAgICBVSU1hbmFnZXIuc2hvd1VJKEdhbWVQYW5lbCk7XG4gICAgICAgICAgICBVSU1hbmFnZXIuaGlkZVVJKFRlYWNoZXJQYW5lbCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=