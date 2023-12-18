
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game/scripts/UI/Item/GameUI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZVxcc2NyaXB0c1xcVUlcXEl0ZW1cXEdhbWVVSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxxRkFBb0Y7QUFDcEYsK0VBQThFO0FBQzlFLHFGQUFvRjtBQUNwRixrREFBaUQ7QUFDakQsK0JBQTBCO0FBQzFCLCtDQUEwQztBQUMxQyw2Q0FBNEM7QUFDNUMsMkNBQXFDO0FBRS9CLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQW9DLDBCQUFZO0lBQWhEO1FBQUEscUVBOE5DO1FBM05XLGdCQUFVLEdBQWMsSUFBSSxDQUFDO1FBRTdCLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBRTVCLHlCQUFtQixHQUFjLElBQUksQ0FBQztRQUV0QyxjQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLGdCQUFVLEdBQWEsSUFBSSxDQUFDO1FBRTVCLGdCQUFVLEdBQWEsSUFBSSxDQUFDO1FBRTVCLGdCQUFVLEdBQWEsSUFBSSxDQUFDO1FBRTVCLG1CQUFhLEdBQWMsRUFBRSxDQUFDO1FBMkg5QixlQUFTLEdBQVcsQ0FBQyxDQUFDOztJQWtGbEMsQ0FBQztJQTNNRyx1QkFBTSxHQUFOO1FBQ0ksaUNBQWUsQ0FBQyxFQUFFLENBQUMscUJBQVMsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN6RSxDQUFDO0lBRUQsMEJBQVMsR0FBVDtRQUNJLGlDQUFlLENBQUMsR0FBRyxDQUFDLHFCQUFTLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLENBQUE7SUFDekUsQ0FBQztJQUVNLHFCQUFJLEdBQVg7UUFDSSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxpQ0FBZSxDQUFDLFdBQVcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxN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Q0FBQyxFQUFFO1lBQ2hGLGlDQUFlLENBQUMsV0FBVyxFQUFFLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ3RELElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLGlDQUFlLENBQUMsV0FBVyxFQUFFLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUN4RixJQUFJLENBQUMsY0FBYyxDQUFDLGlDQUFlLENBQUMsV0FBVyxFQUFFLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQzVFO2FBQU0sSUFBSSxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsSUFBSSxpQ0FBZSxDQUFDLFdBQVcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3ZGLGlDQUFlLENBQUMsV0FBVyxFQUFFLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ3RELElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLGlDQUFlLENBQUMsV0FBVyxFQUFFLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUN4RixJQUFJLENBQUMsY0FBYyxDQUFDLGlDQUFlLENBQUMsV0FBVyxFQUFFLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQzVFO2FBQU0sSUFBSSxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsSUFBSSxpQ0FBZSxDQUFDLFdBQVcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3ZGLGlDQUFlLENBQUMsV0FBVyxFQUFFLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ3RELElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLGlDQUFlLENBQUMsV0FBVyxFQUFFLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUN4RixJQUFJLENBQUMsY0FBYyxDQUFDLGlDQUFlLENBQUMsV0FBVyxFQUFFLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQzVFO1FBQ0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDaEMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFFTywrQkFBYyxHQUF0QixVQUF1QixLQUFhO1FBQ2hDLElBQUksS0FBSyxJQUFJLENBQUMsRUFBRTtZQUNaLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ2xIO2FBQU07WUFDSCxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxHQUFHLElBQUksRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUNsSDtRQUVELElBQUksS0FBSyxJQUFJLENBQUMsRUFBRTtZQUNaLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ2hIO2FBQU07WUFDSCxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxHQUFHLElBQUksRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUNoSDtJQUNMLENBQUM7SUExTkQ7UUFEQyxRQUFRLENBQUMsb0JBQVMsQ0FBQzs4Q0FDaUI7SUFFckM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsrQ0FDa0I7SUFFcEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt1REFDMEI7SUFFOUM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs0Q0FDZTtJQUVqQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzhDQUNpQjtJQUVwQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzhDQUNpQjtJQUVwQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzhDQUNpQjtJQUVwQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2lEQUNvQjtJQWpCckIsTUFBTTtRQUQxQixPQUFPO09BQ2EsTUFBTSxDQThOMUI7SUFBRCxhQUFDO0NBOU5ELEFBOE5DLENBOU5tQyxFQUFFLENBQUMsU0FBUyxHQThOL0M7a0JBOU5vQixNQUFNIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBMaXN0ZW5lck1hbmFnZXIgfSBmcm9tIFwiLi4vLi4vLi4vLi4vZnJhbWUvc2NyaXB0cy9NYW5hZ2VyL0xpc3RlbmVyTWFuYWdlclwiO1xuaW1wb3J0IHsgU291bmRNYW5hZ2VyIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2ZyYW1lL3NjcmlwdHMvTWFuYWdlci9Tb3VuZE1hbmFnZXJcIjtcbmltcG9ydCB7IFN5bmNEYXRhTWFuYWdlciB9IGZyb20gXCIuLi8uLi8uLi8uLi9mcmFtZS9zY3JpcHRzL01hbmFnZXIvU3luY0RhdGFNYW5hZ2VyXCI7XG5pbXBvcnQgeyBFdmVudFR5cGUgfSBmcm9tIFwiLi4vLi4vRGF0YS9FdmVudFR5cGVcIjtcbmltcG9ydCBDdWJlIGZyb20gXCIuL0N1YmVcIjtcbmltcG9ydCBRaWVwaWFuUGFuZWwgZnJvbSBcIi4vUWllcGlhblBhbmVsXCI7XG5pbXBvcnQgeyBTb3VuZENvbmZpZyB9IGZyb20gXCIuL1NvdW5kQ29uZmlnXCI7XG5pbXBvcnQgVGhyZWVOb2RlIGZyb20gXCIuL1RocmVlRE5vZGVcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVVSSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoVGhyZWVOb2RlKVxuICAgIHByaXZhdGUgdGhyZWVETm9kZTogVGhyZWVOb2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBwcml2YXRlIHFpZXBpYW5Ob2RlOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIHByaXZhdGUgcWllcGlhblBhbmVsX3ByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBwcml2YXRlIGFkZE1pbnVzOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgcHJpdmF0ZSBsYmxfeENvdW50OiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIHByaXZhdGUgbGJsX3lDb3VudDogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBwcml2YXRlIGxibF96Q291bnQ6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBwcml2YXRlIGltZ19odWFuZ2JpYW46IGNjLk5vZGVbXSA9IFtdO1xuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICBMaXN0ZW5lck1hbmFnZXIub24oRXZlbnRUeXBlLkNMSUNLX0NVQkUsIHRoaXMuaGFuZGxlQ2xpY2tDdWJlLCB0aGlzKTtcbiAgICB9XG5cbiAgICBvbkRlc3Ryb3koKSB7XG4gICAgICAgIExpc3RlbmVyTWFuYWdlci5vZmYoRXZlbnRUeXBlLkNMSUNLX0NVQkUsIHRoaXMuaGFuZGxlQ2xpY2tDdWJlLCB0aGlzKVxuICAgIH1cblxuICAgIHB1YmxpYyBpbml0KCkge1xuICAgICAgICB0aGlzLmxibF94Q291bnQuc3RyaW5nID0gU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEueENvdW50LnRvU3RyaW5nKCk7XG4gICAgICAgIHRoaXMubGJsX3lDb3VudC5zdHJpbmcgPSBTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS56Q291bnQudG9TdHJpbmcoKTtcbiAgICAgICAgdGhpcy5sYmxfekNvdW50LnN0cmluZyA9IFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLnlDb3VudC50b1N0cmluZygpO1xuXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJ0bkVuYW5sZUNsaWNrXCIpLmdldENoaWxkQnlOYW1lKCdkaXNhYmxlJykuYWN0aXZlID0gU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuY3ViZU9wZW5lZDtcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiYnRuRW5hbmxlQ2xpY2tcIikuZ2V0Q2hpbGRCeU5hbWUoJ3h1YW56aG9uZycpLmFjdGl2ZSA9IFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmVuYWJsZUNsaWNrO1xuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJidG5PcGVuXCIpLmdldENoaWxkQnlOYW1lKCd4dWFuemhvbmcnKS5hY3RpdmUgPSBTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5jdWJlT3BlbmVkO1xuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJidG5CYWNrXCIpLmdldENoaWxkQnlOYW1lKCdkaXNhYmxlJykuYWN0aXZlID0gU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuY3ViZUNsaWNrQXJyLmxlbmd0aCA8PSAwO1xuICAgICAgICBpZiAoU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuY3ViZU9wZW5lZCkge1xuICAgICAgICAgICAgdGhpcy5zaG93UWllcGlhblBhbmVsKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIG9uQ2xpY2tCdG5PcGVuKCkge1xuICAgICAgICBTb3VuZE1hbmFnZXIuc3RvcFNvdW5kQnlOYW1lKFNvdW5kQ29uZmlnLnNvdWRsaXN0W1wi54K55Ye76Z+z5pWIXCJdKTtcbiAgICAgICAgU291bmRNYW5hZ2VyLnBsYXlFZmZlY3QoU291bmRDb25maWcuc291ZGxpc3RbXCLngrnlh7vpn7PmlYhcIl0sIGZhbHNlLCBmYWxzZSk7XG4gICAgICAgIHRoaXMuYWRkTWludXMuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaW1nX2h1YW5nYmlhblswXS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pbWdfaHVhbmdiaWFuWzFdLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmltZ19odWFuZ2JpYW5bMl0uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIGlmICghU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuY3ViZU9wZW5lZCkge1xuICAgICAgICAgICAgU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuY3ViZU9wZW5lZCA9IHRydWU7XG4gICAgICAgICAgICBMaXN0ZW5lck1hbmFnZXIuZGlzcGF0Y2goRXZlbnRUeXBlLkNVQkVfT1BFTiwgdHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLnNob3dRaWVwaWFuUGFuZWwoKTtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlQ2xpY2tDdWJlKCk7XG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJidG5FbmFubGVDbGlja1wiKS5nZXRDaGlsZEJ5TmFtZSgnZGlzYWJsZScpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJidG5FbmFubGVDbGlja1wiKS5nZXRDaGlsZEJ5TmFtZSgneHVhbnpob25nJykuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJidG5PcGVuXCIpLmdldENoaWxkQnlOYW1lKCd4dWFuemhvbmcnKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuZW5hYmxlQ2xpY2sgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmN1YmVPcGVuZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIExpc3RlbmVyTWFuYWdlci5kaXNwYXRjaChFdmVudFR5cGUuQ1VCRV9PUEVOLCBmYWxzZSk7XG4gICAgICAgICAgICB0aGlzLnFpZXBpYW5Ob2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiYnRuRW5hbmxlQ2xpY2tcIikuZ2V0Q2hpbGRCeU5hbWUoJ2Rpc2FibGUnKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJ0bk9wZW5cIikuZ2V0Q2hpbGRCeU5hbWUoJ3h1YW56aG9uZycpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkNsaWNrUmVzZXQoKSB7XG4gICAgICAgIFNvdW5kTWFuYWdlci5zdG9wU291bmRCeU5hbWUoU291bmRDb25maWcuc291ZGxpc3RbXCLngrnlh7vpn7PmlYhcIl0pO1xuICAgICAgICBTb3VuZE1hbmFnZXIucGxheUVmZmVjdChTb3VuZENvbmZpZy5zb3VkbGlzdFtcIueCueWHu+mfs+aViFwiXSwgZmFsc2UsIGZhbHNlKTtcbiAgICAgICAgU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuY3ViZU9wZW5lZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnRocmVlRE5vZGUucmVzZXQoKTtcbiAgICAgICAgdGhpcy5xaWVwaWFuTm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuY3ViZUNsaWNrQXJyID0gW107XG4gICAgICAgIFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLnFpZXBpYW5DbGlja0FyciA9IFtdO1xuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJidG5CYWNrXCIpLmdldENoaWxkQnlOYW1lKCdkaXNhYmxlJykuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiYnRuT3BlblwiKS5nZXRDaGlsZEJ5TmFtZSgneHVhbnpob25nJykuYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkNsaWNrQmFjaygpIHtcbiAgICAgICAgU291bmRNYW5hZ2VyLnN0b3BTb3VuZEJ5TmFtZShTb3VuZENvbmZpZy5zb3VkbGlzdFtcIueCueWHu+mfs+aViFwiXSk7XG4gICAgICAgIFNvdW5kTWFuYWdlci5wbGF5RWZmZWN0KFNvdW5kQ29uZmlnLnNvdWRsaXN0W1wi54K55Ye76Z+z5pWIXCJdLCBmYWxzZSwgZmFsc2UpO1xuICAgICAgICB0aGlzLmFkZE1pbnVzLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmltZ19odWFuZ2JpYW5bMF0uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaW1nX2h1YW5nYmlhblsxXS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pbWdfaHVhbmdiaWFuWzJdLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBpZiAoU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuY3ViZUNsaWNrQXJyLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmN1YmVDbGlja0Fyci5wb3AoKTtcbiAgICAgICAgICAgIC8vIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5xaWVwaWFuTm9kZS5jaGlsZHJlbkNvdW50OyBqKyspIHtcbiAgICAgICAgICAgIC8vICAgICB0aGlzLnFpZXBpYW5Ob2RlLmNoaWxkcmVuW2pdLmdldENvbXBvbmVudChRaWVwaWFuUGFuZWwpLnJlc2V0QmxvY2soKTtcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuY3ViZUNsaWNrQXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAvLyAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLnFpZXBpYW5Ob2RlLmNoaWxkcmVuQ291bnQ7IGorKykge1xuICAgICAgICAgICAgLy8gICAgICAgICB0aGlzLnFpZXBpYW5Ob2RlLmNoaWxkcmVuW2pdLmdldENvbXBvbmVudChRaWVwaWFuUGFuZWwpLm9uSGFuZGxlQ2xpY2tDdWJlKFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmN1YmVDbGlja0FycltpXSk7XG4gICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgdGhpcy5jdWJlQ2xpY2tCYWNrKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIG9uQ2xpY2tFbmFubGVDbGljaygpIHtcbiAgICAgICAgU291bmRNYW5hZ2VyLnN0b3BTb3VuZEJ5TmFtZShTb3VuZENvbmZpZy5zb3VkbGlzdFtcIueCueWHu+mfs+aViFwiXSk7XG4gICAgICAgIFNvdW5kTWFuYWdlci5wbGF5RWZmZWN0KFNvdW5kQ29uZmlnLnNvdWRsaXN0W1wi54K55Ye76Z+z5pWIXCJdLCBmYWxzZSwgZmFsc2UpO1xuICAgICAgICB0aGlzLmFkZE1pbnVzLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmltZ19odWFuZ2JpYW5bMF0uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaW1nX2h1YW5nYmlhblsxXS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pbWdfaHVhbmdiaWFuWzJdLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5lbmFibGVDbGljayA9ICFTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5lbmFibGVDbGljaztcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiYnRuRW5hbmxlQ2xpY2tcIikuZ2V0Q2hpbGRCeU5hbWUoJ3h1YW56aG9uZycpLmFjdGl2ZSA9IFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmVuYWJsZUNsaWNrO1xuICAgIH1cblxuICAgIHByaXZhdGUgY3ViZUNsaWNrQmFjaygpIHtcbiAgICAgICAgbGV0IGN1YmVSb290Tm9kZSA9IHRoaXMudGhyZWVETm9kZS5ub2RlLmdldENoaWxkQnlOYW1lKFwiY3ViZVJvb3ROb2RlXCIpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGN1YmVSb290Tm9kZS5jaGlsZHJlbkNvdW50OyBpKyspIHtcbiAgICAgICAgICAgIGN1YmVSb290Tm9kZS5jaGlsZHJlbltpXS5nZXRDb21wb25lbnQoQ3ViZSkucmVzZXQoKTtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuY3ViZUNsaWNrQXJyLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgY3ViZVJvb3ROb2RlLmNoaWxkcmVuW2ldLmdldENvbXBvbmVudChDdWJlKS5oYW5kbGVDdWJlQ2xpY2soU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuY3ViZUNsaWNrQXJyW2pdLCBmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiYnRuQmFja1wiKS5nZXRDaGlsZEJ5TmFtZSgnZGlzYWJsZScpLmFjdGl2ZSA9IFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmN1YmVDbGlja0Fyci5sZW5ndGggPD0gMDtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNob3dRaWVwaWFuUGFuZWwoKSB7XG4gICAgICAgIHRoaXMucWllcGlhbk5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5xaWVwaWFuTm9kZS5yZW1vdmVBbGxDaGlsZHJlbigpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLnlDb3VudDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgcWllcGlhblBhbmVsID0gY2MuaW5zdGFudGlhdGUodGhpcy5xaWVwaWFuUGFuZWxfcHJlZmFiKTtcbiAgICAgICAgICAgIHFpZXBpYW5QYW5lbC5wYXJlbnQgPSB0aGlzLnFpZXBpYW5Ob2RlO1xuICAgICAgICAgICAgcWllcGlhblBhbmVsLmdldENvbXBvbmVudChRaWVwaWFuUGFuZWwpLmluaXQoaSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGhhbmRsZUNsaWNrQ3ViZSgpIHtcbiAgICAgICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCBTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5jdWJlQ2xpY2tBcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5xaWVwaWFuTm9kZS5jaGlsZHJlbkNvdW50OyBqKyspIHtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLnFpZXBpYW5Ob2RlLmNoaWxkcmVuW2pdLmdldENvbXBvbmVudChRaWVwaWFuUGFuZWwpLm9uSGFuZGxlQ2xpY2tDdWJlKFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmN1YmVDbGlja0FycltpXSk7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH1cbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiYnRuQmFja1wiKS5nZXRDaGlsZEJ5TmFtZSgnZGlzYWJsZScpLmFjdGl2ZSA9IFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmN1YmVDbGlja0Fyci5sZW5ndGggPD0gMDtcbiAgICB9XG5cbiAgICBwcml2YXRlIGlucHV0VHlwZTogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIG9uQ2xpY2tfeENvdW50KCkge1xuICAgICAgICB0aGlzLmFkZE1pbnVzLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuYWRkTWludXMueCA9IC0xNDA7XG4gICAgICAgIHRoaXMuaW5wdXRUeXBlID0gMDtcbiAgICAgICAgdGhpcy5oYW5kbGVCdG5TdGF0ZShTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS54Q291bnQpO1xuICAgICAgICB0aGlzLmltZ19odWFuZ2JpYW5bMF0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pbWdfaHVhbmdiaWFuWzFdLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmltZ19odWFuZ2JpYW5bMl0uYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkNsaWNrX3lDb3VudCgpIHtcbiAgICAgICAgdGhpcy5hZGRNaW51cy5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmFkZE1pbnVzLnggPSAwO1xuICAgICAgICB0aGlzLmlucHV0VHlwZSA9IDE7XG4gICAgICAgIHRoaXMuaGFuZGxlQnRuU3RhdGUoU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuekNvdW50KTtcbiAgICAgICAgdGhpcy5pbWdfaHVhbmdiaWFuWzBdLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmltZ19odWFuZ2JpYW5bMV0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pbWdfaHVhbmdiaWFuWzJdLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25DbGlja196Q291bnQoKSB7XG4gICAgICAgIHRoaXMuYWRkTWludXMuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5hZGRNaW51cy54ID0gMTQwO1xuICAgICAgICB0aGlzLmlucHV0VHlwZSA9IDI7XG4gICAgICAgIHRoaXMuaGFuZGxlQnRuU3RhdGUoU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEueUNvdW50KTtcbiAgICAgICAgdGhpcy5pbWdfaHVhbmdiaWFuWzBdLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmltZ19odWFuZ2JpYW5bMV0uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaW1nX2h1YW5nYmlhblsyXS5hY3RpdmUgPSB0cnVlO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25DbGlja0FkZCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaW5wdXRUeXBlID09IDAgJiYgU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEueENvdW50IDwgNikge1xuICAgICAgICAgICAgU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEueENvdW50Kys7XG4gICAgICAgICAgICB0aGlzLmxibF94Q291bnQuc3RyaW5nID0gU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEueENvdW50LnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZUJ0blN0YXRlKFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLnhDb3VudCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5pbnB1dFR5cGUgPT0gMSAmJiBTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS56Q291bnQgPCA2KSB7XG4gICAgICAgICAgICBTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS56Q291bnQrKztcbiAgICAgICAgICAgIHRoaXMubGJsX3lDb3VudC5zdHJpbmcgPSBTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS56Q291bnQudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlQnRuU3RhdGUoU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuekNvdW50KTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlucHV0VHlwZSA9PSAyICYmIFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLnlDb3VudCA8IDYpIHtcbiAgICAgICAgICAgIFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLnlDb3VudCsrO1xuICAgICAgICAgICAgdGhpcy5sYmxfekNvdW50LnN0cmluZyA9IFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLnlDb3VudC50b1N0cmluZygpO1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVCdG5TdGF0ZShTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS55Q291bnQpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudGhyZWVETm9kZS5yZXNldCgpO1xuICAgICAgICB0aGlzLnFpZXBpYW5Ob2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uQ2xpY2tNaW51cygpIHtcbiAgICAgICAgaWYgKHRoaXMuaW5wdXRUeXBlID09IDAgJiYgU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEueENvdW50ID4gMSkge1xuICAgICAgICAgICAgU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEueENvdW50LS07XG4gICAgICAgICAgICB0aGlzLmxibF94Q291bnQuc3RyaW5nID0gU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEueENvdW50LnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZUJ0blN0YXRlKFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLnhDb3VudCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5pbnB1dFR5cGUgPT0gMSAmJiBTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS56Q291bnQgPiAxKSB7XG4gICAgICAgICAgICBTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS56Q291bnQtLTtcbiAgICAgICAgICAgIHRoaXMubGJsX3lDb3VudC5zdHJpbmcgPSBTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS56Q291bnQudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlQnRuU3RhdGUoU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuekNvdW50KTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlucHV0VHlwZSA9PSAyICYmIFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLnlDb3VudCA+IDEpIHtcbiAgICAgICAgICAgIFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLnlDb3VudC0tO1xuICAgICAgICAgICAgdGhpcy5sYmxfekNvdW50LnN0cmluZyA9IFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLnlDb3VudC50b1N0cmluZygpO1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVCdG5TdGF0ZShTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS55Q291bnQpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudGhyZWVETm9kZS5yZXNldCgpO1xuICAgICAgICB0aGlzLnFpZXBpYW5Ob2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGhhbmRsZUJ0blN0YXRlKGNvdW50OiBudW1iZXIpIHtcbiAgICAgICAgaWYgKGNvdW50IDw9IDEpIHtcbiAgICAgICAgICAgIHRoaXMuYWRkTWludXMuZ2V0Q2hpbGRCeU5hbWUoXCJidG5NaW51c1NpemVcIikuZ2V0Q2hpbGRCeU5hbWUoXCJMYWJlbFwiKS5jb2xvciA9IG5ldyBjYy5Db2xvcigpLmZyb21IRVgoXCIjNzRCQkYyXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hZGRNaW51cy5nZXRDaGlsZEJ5TmFtZShcImJ0bk1pbnVzU2l6ZVwiKS5nZXRDaGlsZEJ5TmFtZShcIkxhYmVsXCIpLmNvbG9yID0gbmV3IGNjLkNvbG9yKCkuZnJvbUhFWChcIiMyMDk0RUVcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY291bnQgPj0gNikge1xuICAgICAgICAgICAgdGhpcy5hZGRNaW51cy5nZXRDaGlsZEJ5TmFtZShcImJ0bkFkZFNpemVcIikuZ2V0Q2hpbGRCeU5hbWUoXCJMYWJlbFwiKS5jb2xvciA9IG5ldyBjYy5Db2xvcigpLmZyb21IRVgoXCIjNzRCQkYyXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hZGRNaW51cy5nZXRDaGlsZEJ5TmFtZShcImJ0bkFkZFNpemVcIikuZ2V0Q2hpbGRCeU5hbWUoXCJMYWJlbFwiKS5jb2xvciA9IG5ldyBjYy5Db2xvcigpLmZyb21IRVgoXCIjMjA5NEVFXCIpO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19