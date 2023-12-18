"use strict";
cc._RF.push(module, '402defmy1xNR6or/0nZbjE9', 'Cube');
// game/scripts/UI/Item/Cube.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Cube = /** @class */ (function (_super) {
    __extends(Cube, _super);
    function Cube() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        //上面的面
        _this.upFace = null;
        //下面的面
        _this.downFace = null;
        //左面的面
        _this.leftFace = null;
        //右面的面
        _this.rightFace = null;
        //前面的面
        _this.frontFace = null;
        //后面的面
        _this.backFace = null;
        _this.isHide = false;
        _this.initPos = cc.v3();
        return _this;
    }
    Cube.prototype.init = function (xCount, yCount, zCount) {
        this.xIndex = xCount;
        this.yIndex = yCount;
        this.zIndex = zCount;
        this.initPos = this.node.position;
        this.onChangeColor();
    };
    Cube.prototype.clickCube = function (clckName) {
        var enableClick = false;
        var data = { xIndex: null, yIndex: null, zIndex: null };
        switch (clckName) {
            case "up":
                enableClick = this.yIndex == 5;
                data.xIndex = this.xIndex;
                data.zIndex = this.zIndex;
                break;
            case "down":
                enableClick = this.yIndex == 0;
                data.xIndex = this.xIndex;
                data.zIndex = this.zIndex;
                break;
            case "left":
                enableClick = this.xIndex == 0;
                data.yIndex = this.yIndex;
                data.zIndex = this.zIndex;
                break;
            case "right":
                enableClick = this.xIndex == 5;
                data.yIndex = this.yIndex;
                data.zIndex = this.zIndex;
                break;
            case "front":
                enableClick = this.zIndex == 5;
                data.xIndex = this.xIndex;
                data.yIndex = this.yIndex;
                break;
            case "back":
                enableClick = this.zIndex == 0;
                data.xIndex = this.xIndex;
                data.yIndex = this.yIndex;
                break;
            default:
                break;
        }
        SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.cubeClickArr.push(data);
        ListenerManager_1.ListenerManager.dispatch(EventType_1.EventType.CLICK_CUBE, data);
    };
    Cube.prototype.handleCubeClick = function (data, isClick) {
        if (isClick === void 0) { isClick = true; }
        if (data.xIndex == null && data.yIndex == this.yIndex && data.zIndex == this.zIndex) {
            if (isClick) {
                SoundManager_1.SoundManager.stopSoundByName(SoundConfig_1.SoundConfig.soudlist["打孔音效"]);
                SoundManager_1.SoundManager.playEffect(SoundConfig_1.SoundConfig.soudlist["打孔音效"], false, false);
            }
            this.isHide = true;
            this.node.active = false;
        }
        else if (data.yIndex == null && data.xIndex == this.xIndex && data.zIndex == this.zIndex) {
            if (isClick) {
                SoundManager_1.SoundManager.stopSoundByName(SoundConfig_1.SoundConfig.soudlist["打孔音效"]);
                SoundManager_1.SoundManager.playEffect(SoundConfig_1.SoundConfig.soudlist["打孔音效"], false, false);
            }
            this.isHide = true;
            this.node.active = false;
        }
        else if (data.zIndex == null && data.xIndex == this.xIndex && data.yIndex == this.yIndex) {
            if (isClick) {
                SoundManager_1.SoundManager.stopSoundByName(SoundConfig_1.SoundConfig.soudlist["打孔音效"]);
                SoundManager_1.SoundManager.playEffect(SoundConfig_1.SoundConfig.soudlist["打孔音效"], false, false);
            }
            this.isHide = true;
            this.node.active = false;
        }
    };
    Cube.prototype.handleOpen = function (pos) {
        this.node.setPosition(pos.x, pos.y, pos.z);
    };
    Cube.prototype.handleClose = function () {
        this.node.setPosition(this.initPos);
    };
    Cube.prototype.reset = function () {
        this.isHide = false;
        this.node.active = true;
    };
    Cube.prototype.onChangeColor = function () {
        if (this.xIndex == 0) {
            var material = this.leftFace.getComponent(cc.MeshRenderer).getMaterial(0);
            var color = new cc.Color().fromHEX("#2DB97A");
            material.setProperty("diffuseColor", color, 0);
        }
        if (this.xIndex == SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.xCount - 1) {
            var material = this.rightFace.getComponent(cc.MeshRenderer).getMaterial(0);
            var color = new cc.Color().fromHEX("#2DB97A");
            material.setProperty("diffuseColor", color, 0);
        }
        if (this.yIndex == 0) {
            var material = this.downFace.getComponent(cc.MeshRenderer).getMaterial(0);
            var color = new cc.Color().fromHEX("#2DB97A");
            material.setProperty("diffuseColor", color, 0);
        }
        if (this.yIndex == SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.yCount - 1) {
            var material = this.upFace.getComponent(cc.MeshRenderer).getMaterial(0);
            var color = new cc.Color().fromHEX("#2DB97A");
            material.setProperty("diffuseColor", color, 0);
        }
        if (this.zIndex == 0) {
            var material = this.backFace.getComponent(cc.MeshRenderer).getMaterial(0);
            var color = new cc.Color().fromHEX("#2DB97A");
            material.setProperty("diffuseColor", color, 0);
        }
        if (this.zIndex == SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.zCount - 1) {
            var material = this.frontFace.getComponent(cc.MeshRenderer).getMaterial(0);
            var color = new cc.Color().fromHEX("#2DB97A");
            material.setProperty("diffuseColor", color, 0);
        }
    };
    __decorate([
        property(cc.Node)
    ], Cube.prototype, "upFace", void 0);
    __decorate([
        property(cc.Node)
    ], Cube.prototype, "downFace", void 0);
    __decorate([
        property(cc.Node)
    ], Cube.prototype, "leftFace", void 0);
    __decorate([
        property(cc.Node)
    ], Cube.prototype, "rightFace", void 0);
    __decorate([
        property(cc.Node)
    ], Cube.prototype, "frontFace", void 0);
    __decorate([
        property(cc.Node)
    ], Cube.prototype, "backFace", void 0);
    Cube = __decorate([
        ccclass
    ], Cube);
    return Cube;
}(cc.Component));
exports.default = Cube;

cc._RF.pop();