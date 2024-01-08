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
var ListenerManager_1 = require("../../../../frame/scripts/Manager/ListenerManager");
var SoundManager_1 = require("../../../../frame/scripts/Manager/SoundManager");
var SyncDataManager_1 = require("../../../../frame/scripts/Manager/SyncDataManager");
var EventType_1 = require("../../Data/EventType");
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
        _this.lbl_gongshi1 = null;
        _this.gongshi_2 = null;
        _this.inputType = 0;
        return _this;
    }
    GameUI.prototype.onLoad = function () {
        ListenerManager_1.ListenerManager.on(EventType_1.EventType.hebingwancheng, this.showGongshi_2, this);
    };
    GameUI.prototype.onDestroy = function () {
        ListenerManager_1.ListenerManager.off(EventType_1.EventType.hebingwancheng, this.showGongshi_2, this);
    };
    GameUI.prototype.showGongshi_2 = function () {
        var count = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.count;
        this.lbl_gongshi1.node.active = false;
        this.gongshi_2.active = true;
        var gongshi = "";
        for (var i = 1; i <= count; i++) {
            gongshi += i + "²";
            if (i != count) {
                gongshi += " + ";
            }
        }
        gongshi += " = ";
        this.gongshi_2.getChildByName("gongshi_1").getComponent(cc.Label).string = gongshi;
        var top = this.gongshi_2.getChildByName("gongshi_2").getChildByName("top");
        top.getChildByName("first").getComponent(cc.Label).string = count + "x(";
        top.getChildByName("btn_1").getComponent(cc.Label).string = count + "+1";
        top.getChildByName("btn_2").getComponent(cc.Label).string = count + "x2+1";
        top.getChildByName("btn_1_1").getComponent(cc.Label).string = count + 1 + "";
        top.getChildByName("btn_2_2").getComponent(cc.Label).string = count * 2 + 1 + "";
        top.getChildByName("btn_1_1").active = false;
        top.getChildByName("btn_2_2").active = false;
        top.getChildByName("btn_1").active = true;
        top.getChildByName("btn_2").active = true;
    };
    GameUI.prototype.onclick_1 = function () {
        var top = this.gongshi_2.getChildByName("gongshi_2").getChildByName("top");
        top.getChildByName("btn_1_1").active = true;
        top.getChildByName("btn_1").active = false;
    };
    GameUI.prototype.onclick_1_1 = function () {
        var top = this.gongshi_2.getChildByName("gongshi_2").getChildByName("top");
        top.getChildByName("btn_1_1").active = false;
        top.getChildByName("btn_1").active = true;
    };
    GameUI.prototype.onclick_2 = function () {
        var top = this.gongshi_2.getChildByName("gongshi_2").getChildByName("top");
        top.getChildByName("btn_2").active = false;
        top.getChildByName("btn_2_2").active = true;
    };
    GameUI.prototype.onclick_2_2 = function () {
        var top = this.gongshi_2.getChildByName("gongshi_2").getChildByName("top");
        top.getChildByName("btn_2").active = true;
        top.getChildByName("btn_2_2").active = false;
    };
    GameUI.prototype.init = function () {
        this.updateBtnState(SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curIndex);
        var count = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.count;
        this.lbl_count.string = count.toString();
        var gongshi = "";
        for (var i = 1; i <= count; i++) {
            gongshi += i + "²";
            if (i != count) {
                gongshi += " + ";
            }
        }
        gongshi += " = ?";
        this.lbl_gongshi1.node.active = true;
        this.gongshi_2.active = false;
        this.lbl_gongshi1.string = gongshi;
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
            SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curIndex = 0;
            this.threeDNode.init();
            this.threeDNode.hideZuobiao();
            this.init();
        }
    };
    GameUI.prototype.onClickMinus = function () {
        if (SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.count > 2) {
            SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.count--;
            this.handleBtnState(SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.count);
            SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curIndex = 0;
            this.threeDNode.init();
            this.threeDNode.hideZuobiao();
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
        this.updateBtnState(1);
    };
    GameUI.prototype.onClickRotate = function () {
        SoundManager_1.SoundManager.stopSoundByName(SoundConfig_1.SoundConfig.soudlist["点击音效"]);
        SoundManager_1.SoundManager.playEffect(SoundConfig_1.SoundConfig.soudlist["点击音效"], false, false);
        this.addMinus.active = false;
        this.threeDNode.rotation();
        this.sliderRotate.active = true;
        this.updateBtnState(2);
    };
    GameUI.prototype.onClickMerge = function () {
        SoundManager_1.SoundManager.stopSoundByName(SoundConfig_1.SoundConfig.soudlist["点击音效"]);
        SoundManager_1.SoundManager.playEffect(SoundConfig_1.SoundConfig.soudlist["点击音效"], false, false);
        this.addMinus.active = false;
        this.threeDNode.merge();
        this.sliderMerge.active = true;
        this.updateBtnState(3);
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
        this.updateBtnState(4);
        this.threeDNode.reset();
    };
    GameUI.prototype.onClickBtnBack = function () {
        this.addMinus.active = false;
        if (SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curIndex > 0) {
            switch (SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curIndex) {
                case 1:
                    this.threeDNode.init();
                    this.init();
                    break;
                case 2:
                    this.threeDNode.init();
                    this.init();
                    this.threeDNode.showStep2();
                    this.sliderRotate.getComponent(cc.Slider).progress = 0;
                    break;
                case 3:
                    this.init();
                    this.sliderRotate.getComponent(cc.Slider).progress = 1;
                    this.threeDNode.controlMerge(0);
                    this.sliderMerge.getComponent(cc.Slider).progress = 0;
                    break;
                case 4:
                    this.threeDNode.hideZuobiao();
                    break;
            }
            SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curIndex--;
        }
        this.updateBtnState(SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curIndex);
    };
    GameUI.prototype.updateBtnState = function (index) {
        if (index === void 0) { index = 0; }
        console.log("updateBtnState", index);
        SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curIndex = index;
        this.node.getChildByName("btnCopy").getChildByName("disable").active = index > 0;
        this.node.getChildByName("btnRotate").getChildByName("disable").active = true;
        this.node.getChildByName("btnMerge").getChildByName("disable").active = true;
        this.node.getChildByName("btnZuobiao").getChildByName("disable").active = true;
        switch (index) {
            case 1:
                this.node.getChildByName("btnRotate").getChildByName("disable").active = false;
                break;
            case 2:
                this.node.getChildByName("btnMerge").getChildByName("disable").active = false;
                break;
            case 3:
                this.node.getChildByName("btnZuobiao").getChildByName("disable").active = false;
                break;
        }
        if (index != 4) {
            this.threeDNode.hideZuobiao();
        }
        this.node.getChildByName("btnBack").getChildByName("disable").active = index == 0;
        this.sliderRotate.active = index == 2;
        this.sliderMerge.active = index == 3;
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
    __decorate([
        property(cc.Label)
    ], GameUI.prototype, "lbl_gongshi1", void 0);
    __decorate([
        property(cc.Node)
    ], GameUI.prototype, "gongshi_2", void 0);
    GameUI = __decorate([
        ccclass
    ], GameUI);
    return GameUI;
}(cc.Component));
exports.default = GameUI;

cc._RF.pop();