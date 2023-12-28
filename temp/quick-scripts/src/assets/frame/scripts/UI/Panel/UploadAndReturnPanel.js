"use strict";
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