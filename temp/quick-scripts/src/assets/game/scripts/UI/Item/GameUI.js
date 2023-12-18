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
var Cube_1 = require("./Cube");
var QiepianPanel_1 = require("./QiepianPanel");
var SoundConfig_1 = require("./SoundConfig");
var ThreeDNode_1 = require("./ThreeDNode");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameUI = /** @class */ (function (_super) {
    __extends(GameUI, _super);
    function GameUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.threeDNode = null;
        _this.qiepianNode = null;
        _this.qiepianPanel_prefab = null;
        _this.addMinus = null;
        _this.lbl_xCount = null;
        _this.lbl_yCount = null;
        _this.lbl_zCount = null;
        _this.img_huangbian = [];
        _this.inputType = 0;
        return _this;
    }
    GameUI.prototype.onLoad = function () {
        ListenerManager_1.ListenerManager.on(EventType_1.EventType.CLICK_CUBE, this.handleClickCube, this);
    };
    GameUI.prototype.onDestroy = function () {
        ListenerManager_1.ListenerManager.off(EventType_1.EventType.CLICK_CUBE, this.handleClickCube, this);
    };
    GameUI.prototype.init = function () {
        this.lbl_xCount.string = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.xCount.toString();
        this.lbl_yCount.string = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.zCount.toString();
        this.lbl_zCount.string = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.yCount.toString();
        this.node.getChildByName("btnEnanleClick").getChildByName('disable').active = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.cubeOpened;
        this.node.getChildByName("btnEnanleClick").getChildByName('xuanzhong').active = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.enableClick;
        this.node.getChildByName("btnOpen").getChildByName('xuanzhong').active = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.cubeOpened;
        this.node.getChildByName("btnBack").getChildByName('disable').active = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.cubeClickArr.length <= 0;
        if (SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.cubeOpened) {
            this.showQiepianPanel();
        }
    };
    GameUI.prototype.onClickBtnOpen = function () {
        SoundManager_1.SoundManager.stopSoundByName(SoundConfig_1.SoundConfig.soudlist["点击音效"]);
        SoundManager_1.SoundManager.playEffect(SoundConfig_1.SoundConfig.soudlist["点击音效"], false, false);
        this.addMinus.active = false;
        this.img_huangbian[0].active = false;
        this.img_huangbian[1].active = false;
        this.img_huangbian[2].active = false;
        if (!SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.cubeOpened) {
            SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.cubeOpened = true;
            ListenerManager_1.ListenerManager.dispatch(EventType_1.EventType.CUBE_OPEN, true);
            this.showQiepianPanel();
            this.handleClickCube();
            this.node.getChildByName("btnEnanleClick").getChildByName('disable').active = true;
            this.node.getChildByName("btnEnanleClick").getChildByName('xuanzhong').active = false;
            this.node.getChildByName("btnOpen").getChildByName('xuanzhong').active = true;
            SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.enableClick = false;
        }
        else {
            SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.cubeOpened = false;
            ListenerManager_1.ListenerManager.dispatch(EventType_1.EventType.CUBE_OPEN, false);
            this.qiepianNode.active = false;
            this.node.getChildByName("btnEnanleClick").getChildByName('disable').active = false;
            this.node.getChildByName("btnOpen").getChildByName('xuanzhong').active = false;
        }
    };
    GameUI.prototype.onClickReset = function () {
        SoundManager_1.SoundManager.stopSoundByName(SoundConfig_1.SoundConfig.soudlist["点击音效"]);
        SoundManager_1.SoundManager.playEffect(SoundConfig_1.SoundConfig.soudlist["点击音效"], false, false);
        SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.cubeOpened = false;
        this.threeDNode.reset();
        this.qiepianNode.active = false;
        SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.cubeClickArr = [];
        SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.qiepianClickArr = [];
        this.node.getChildByName("btnBack").getChildByName('disable').active = true;
        this.node.getChildByName("btnOpen").getChildByName('xuanzhong').active = false;
    };
    GameUI.prototype.onClickBack = function () {
        SoundManager_1.SoundManager.stopSoundByName(SoundConfig_1.SoundConfig.soudlist["点击音效"]);
        SoundManager_1.SoundManager.playEffect(SoundConfig_1.SoundConfig.soudlist["点击音效"], false, false);
        this.addMinus.active = false;
        this.img_huangbian[0].active = false;
        this.img_huangbian[1].active = false;
        this.img_huangbian[2].active = false;
        if (SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.cubeClickArr.length > 0) {
            SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.cubeClickArr.pop();
            // for (let j = 0; j < this.qiepianNode.childrenCount; j++) {
            //     this.qiepianNode.children[j].getComponent(QiepianPanel).resetBlock();
            // }
            // for (let i = 0; i < SyncDataManager.getSyncData().customSyncData.cubeClickArr.length; i++) {
            //     for (let j = 0; j < this.qiepianNode.childrenCount; j++) {
            //         this.qiepianNode.children[j].getComponent(QiepianPanel).onHandleClickCube(SyncDataManager.getSyncData().customSyncData.cubeClickArr[i]);
            //     }
            // }
            this.cubeClickBack();
        }
    };
    GameUI.prototype.onClickEnanleClick = function () {
        SoundManager_1.SoundManager.stopSoundByName(SoundConfig_1.SoundConfig.soudlist["点击音效"]);
        SoundManager_1.SoundManager.playEffect(SoundConfig_1.SoundConfig.soudlist["点击音效"], false, false);
        this.addMinus.active = false;
        this.img_huangbian[0].active = false;
        this.img_huangbian[1].active = false;
        this.img_huangbian[2].active = false;
        SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.enableClick = !SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.enableClick;
        this.node.getChildByName("btnEnanleClick").getChildByName('xuanzhong').active = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.enableClick;
    };
    GameUI.prototype.cubeClickBack = function () {
        var cubeRootNode = this.threeDNode.node.getChildByName("cubeRootNode");
        for (var i = 0; i < cubeRootNode.childrenCount; i++) {
            cubeRootNode.children[i].getComponent(Cube_1.default).reset();
            for (var j = 0; j < SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.cubeClickArr.length; j++) {
                cubeRootNode.children[i].getComponent(Cube_1.default).handleCubeClick(SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.cubeClickArr[j], false);
            }
        }
        this.node.getChildByName("btnBack").getChildByName('disable').active = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.cubeClickArr.length <= 0;
    };
    GameUI.prototype.showQiepianPanel = function () {
        this.qiepianNode.active = true;
        this.qiepianNode.removeAllChildren();
        for (var i = 0; i < SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.yCount; i++) {
            var qiepianPanel = cc.instantiate(this.qiepianPanel_prefab);
            qiepianPanel.parent = this.qiepianNode;
            qiepianPanel.getComponent(QiepianPanel_1.default).init(i);
        }
    };
    GameUI.prototype.handleClickCube = function () {
        // for (let i = 0; i < SyncDataManager.getSyncData().customSyncData.cubeClickArr.length; i++) {
        //     for (let j = 0; j < this.qiepianNode.childrenCount; j++) {
        //         this.qiepianNode.children[j].getComponent(QiepianPanel).onHandleClickCube(SyncDataManager.getSyncData().customSyncData.cubeClickArr[i]);
        //     }
        // }
        this.node.getChildByName("btnBack").getChildByName('disable').active = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.cubeClickArr.length <= 0;
    };
    GameUI.prototype.onClick_xCount = function () {
        this.addMinus.active = true;
        this.addMinus.x = -140;
        this.inputType = 0;
        this.handleBtnState(SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.xCount);
        this.img_huangbian[0].active = true;
        this.img_huangbian[1].active = false;
        this.img_huangbian[2].active = false;
    };
    GameUI.prototype.onClick_yCount = function () {
        this.addMinus.active = true;
        this.addMinus.x = 0;
        this.inputType = 1;
        this.handleBtnState(SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.zCount);
        this.img_huangbian[0].active = false;
        this.img_huangbian[1].active = true;
        this.img_huangbian[2].active = false;
    };
    GameUI.prototype.onClick_zCount = function () {
        this.addMinus.active = true;
        this.addMinus.x = 140;
        this.inputType = 2;
        this.handleBtnState(SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.yCount);
        this.img_huangbian[0].active = false;
        this.img_huangbian[1].active = false;
        this.img_huangbian[2].active = true;
    };
    GameUI.prototype.onClickAdd = function () {
        if (this.inputType == 0 && SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.xCount < 6) {
            SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.xCount++;
            this.lbl_xCount.string = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.xCount.toString();
            this.handleBtnState(SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.xCount);
        }
        else if (this.inputType == 1 && SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.zCount < 6) {
            SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.zCount++;
            this.lbl_yCount.string = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.zCount.toString();
            this.handleBtnState(SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.zCount);
        }
        else if (this.inputType == 2 && SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.yCount < 6) {
            SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.yCount++;
            this.lbl_zCount.string = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.yCount.toString();
            this.handleBtnState(SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.yCount);
        }
        this.threeDNode.reset();
        this.qiepianNode.active = false;
        this.init();
    };
    GameUI.prototype.onClickMinus = function () {
        if (this.inputType == 0 && SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.xCount > 1) {
            SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.xCount--;
            this.lbl_xCount.string = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.xCount.toString();
            this.handleBtnState(SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.xCount);
        }
        else if (this.inputType == 1 && SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.zCount > 1) {
            SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.zCount--;
            this.lbl_yCount.string = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.zCount.toString();
            this.handleBtnState(SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.zCount);
        }
        else if (this.inputType == 2 && SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.yCount > 1) {
            SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.yCount--;
            this.lbl_zCount.string = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.yCount.toString();
            this.handleBtnState(SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.yCount);
        }
        this.threeDNode.reset();
        this.qiepianNode.active = false;
        this.init();
    };
    GameUI.prototype.handleBtnState = function (count) {
        if (count <= 1) {
            this.addMinus.getChildByName("btnMinusSize").getChildByName("Label").color = new cc.Color().fromHEX("#74BBF2");
        }
        else {
            this.addMinus.getChildByName("btnMinusSize").getChildByName("Label").color = new cc.Color().fromHEX("#2094EE");
        }
        if (count >= 6) {
            this.addMinus.getChildByName("btnAddSize").getChildByName("Label").color = new cc.Color().fromHEX("#74BBF2");
        }
        else {
            this.addMinus.getChildByName("btnAddSize").getChildByName("Label").color = new cc.Color().fromHEX("#2094EE");
        }
    };
    __decorate([
        property(ThreeDNode_1.default)
    ], GameUI.prototype, "threeDNode", void 0);
    __decorate([
        property(cc.Node)
    ], GameUI.prototype, "qiepianNode", void 0);
    __decorate([
        property(cc.Prefab)
    ], GameUI.prototype, "qiepianPanel_prefab", void 0);
    __decorate([
        property(cc.Node)
    ], GameUI.prototype, "addMinus", void 0);
    __decorate([
        property(cc.Label)
    ], GameUI.prototype, "lbl_xCount", void 0);
    __decorate([
        property(cc.Label)
    ], GameUI.prototype, "lbl_yCount", void 0);
    __decorate([
        property(cc.Label)
    ], GameUI.prototype, "lbl_zCount", void 0);
    __decorate([
        property(cc.Node)
    ], GameUI.prototype, "img_huangbian", void 0);
    GameUI = __decorate([
        ccclass
    ], GameUI);
    return GameUI;
}(cc.Component));
exports.default = GameUI;

cc._RF.pop();