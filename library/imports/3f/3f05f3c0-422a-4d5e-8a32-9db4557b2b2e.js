"use strict";
cc._RF.push(module, '3f05fPAQipNXooynbRVeysu', 'GameUI');
// game/scripts/UI/Item/GameUI.ts

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
var SoundManager_1 = require("../../../../frame/scripts/Manager/SoundManager");
var SyncDataManager_1 = require("../../../../frame/scripts/Manager/SyncDataManager");
var SoundConfig_1 = require("./SoundConfig");
var ThreeDNode_1 = require("./ThreeDNode");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameUI = /** @class */ (function (_super) {
    __extends(GameUI, _super);
    function GameUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.threeDNode = null;
        _this.addMinus = null;
        _this.img_huangbian = null;
        _this.lbl_count = null;
        _this.sliderRotate = null;
        _this.sliderMerge = null;
        _this.inputType = 0;
        return _this;
    }
    GameUI.prototype.onLoad = function () {
    };
    GameUI.prototype.onDestroy = function () {
    };
    GameUI.prototype.init = function () {
        this.lbl_count.string = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.count.toString();
    };
    GameUI.prototype.onClick_count = function () {
        this.addMinus.active = !this.addMinus.active;
        this.img_huangbian.active = false;
        this.handleBtnState(SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.count);
    };
    GameUI.prototype.onClickAdd = function () {
        if (SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.count < 8) {
            SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.count++;
            this.handleBtnState(SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.count);
            this.threeDNode.init();
            this.init();
        }
    };
    GameUI.prototype.onClickMinus = function () {
        if (SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.count > 2) {
            SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.count--;
            this.handleBtnState(SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.count);
            this.threeDNode.init();
            this.init();
        }
    };
    GameUI.prototype.handleBtnState = function (count) {
        if (count <= 2) {
            this.addMinus.getChildByName("btnMinusSize").getChildByName("Label").color = new cc.Color().fromHEX("#74BBF2");
        }
        else {
            this.addMinus.getChildByName("btnMinusSize").getChildByName("Label").color = new cc.Color().fromHEX("#2094EE");
        }
        if (count >= 8) {
            this.addMinus.getChildByName("btnAddSize").getChildByName("Label").color = new cc.Color().fromHEX("#74BBF2");
        }
        else {
            this.addMinus.getChildByName("btnAddSize").getChildByName("Label").color = new cc.Color().fromHEX("#2094EE");
        }
    };
    GameUI.prototype.onClickBtnCopy = function () {
        SoundManager_1.SoundManager.stopSoundByName(SoundConfig_1.SoundConfig.soudlist["点击音效"]);
        SoundManager_1.SoundManager.playEffect(SoundConfig_1.SoundConfig.soudlist["点击音效"], false, false);
        this.addMinus.active = false;
        this.threeDNode.showStep2();
        // this.node.getChildByName("btnCopy").getChildByName("disable").active = true;
    };
    GameUI.prototype.onClickRotate = function () {
        SoundManager_1.SoundManager.stopSoundByName(SoundConfig_1.SoundConfig.soudlist["点击音效"]);
        SoundManager_1.SoundManager.playEffect(SoundConfig_1.SoundConfig.soudlist["点击音效"], false, false);
        this.addMinus.active = false;
        // this.node.getChildByName("btnRotate").getChildByName("disable").active = true;
        this.threeDNode.rotation();
        this.sliderRotate.active = true;
    };
    GameUI.prototype.onClickMerge = function () {
        SoundManager_1.SoundManager.stopSoundByName(SoundConfig_1.SoundConfig.soudlist["点击音效"]);
        SoundManager_1.SoundManager.playEffect(SoundConfig_1.SoundConfig.soudlist["点击音效"], false, false);
        this.addMinus.active = false;
        // this.node.getChildByName("btnMerge").getChildByName("disable").active = true;
        this.threeDNode.merge();
        this.sliderMerge.active = true;
    };
    GameUI.prototype.onSlideRotate = function (event) {
        var progress = event.progress;
        this.threeDNode.controlRotate(progress);
    };
    GameUI.prototype.onSlideMerge = function (event) {
        var progress = event.progress;
        this.threeDNode.controlMerge(progress);
    };
    GameUI.prototype.onClickShowZuoBiao = function () {
        this.threeDNode.reset();
        // this.node.getChildByName("btnZuobiao").getChildByName("disable").active = true;
        // let zuobiao_node = this.node.getChildByName("zuobiao_node");
        // zuobiao_node.active = true;
        // let zuobiao_top = zuobiao_node.getChildByName("top");
        // let count = SyncDataManager.getSyncData().customSyncData.count;
        // zuobiao_top.y = count * 80;
    };
    __decorate([
        property(ThreeDNode_1.default)
    ], GameUI.prototype, "threeDNode", void 0);
    __decorate([
        property(cc.Node)
    ], GameUI.prototype, "addMinus", void 0);
    __decorate([
        property(cc.Node)
    ], GameUI.prototype, "img_huangbian", void 0);
    __decorate([
        property(cc.Label)
    ], GameUI.prototype, "lbl_count", void 0);
    __decorate([
        property(cc.Node)
    ], GameUI.prototype, "sliderRotate", void 0);
    __decorate([
        property(cc.Node)
    ], GameUI.prototype, "sliderMerge", void 0);
    GameUI = __decorate([
        ccclass
    ], GameUI);
    return GameUI;
}(cc.Component));
exports.default = GameUI;

cc._RF.pop();