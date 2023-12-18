"use strict";
cc._RF.push(module, '888f7crmYBPp5pwHHEmIA6V', 'ThreeDNode');
// game/scripts/UI/Item/ThreeDNode.ts

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
var SyncDataManager_1 = require("../../../../frame/scripts/Manager/SyncDataManager");
var EventType_1 = require("../../Data/EventType");
var Cube_1 = require("./Cube");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ThreeNode = /** @class */ (function (_super) {
    __extends(ThreeNode, _super);
    function ThreeNode() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.cubePrefab = null;
        _this.cubeRootNode = null;
        return _this;
    }
    ThreeNode.prototype.onLoad = function () {
        ListenerManager_1.ListenerManager.on(EventType_1.EventType.CUBE_OPEN, this.onCubeOpen, this);
        ListenerManager_1.ListenerManager.on(EventType_1.EventType.CLICK_CUBE, this.onClickCube, this);
    };
    ThreeNode.prototype.onDestroy = function () {
        ListenerManager_1.ListenerManager.off(EventType_1.EventType.CUBE_OPEN, this.onCubeOpen, this);
        ListenerManager_1.ListenerManager.off(EventType_1.EventType.CLICK_CUBE, this.onClickCube, this);
    };
    ThreeNode.prototype.init = function () {
        this.initBigCube();
        this.onCubeOpen(SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.cubeOpened);
        for (var i = 0; i < SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.cubeClickArr.length; i++) {
            this.onClickCube(SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.cubeClickArr[i]);
        }
    };
    ThreeNode.prototype.reset = function () {
        var quat = new cc.Quat();
        cc.Quat.fromEuler(quat, 0, 45, 0);
        this.cubeRootNode.setRotation(quat);
        this.initBigCube();
        SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.cubeClickArr = [];
        SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.cubeOpened = false;
        SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.qiepianClickArr = [];
    };
    //初始化大正方体
    ThreeNode.prototype.initBigCube = function () {
        var xCount = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.xCount;
        var yCount = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.yCount;
        var zCount = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.zCount;
        this.changeBigCubeSize(xCount, yCount, zCount);
    };
    ThreeNode.prototype.changeBigCubeSize = function (xCount, yCount, zCount) {
        //先清空
        this.cubeRootNode.removeAllChildren();
        //创建xCount行yCount列zCount层的大正方体，并且以大正方体的中心点为原点
        var cubeWidth = 1;
        var cubeHeight = 1;
        var cubeLength = 1;
        var cubeDis = 0;
        var cubeXDis = cubeWidth + cubeDis;
        var cubeYDis = cubeHeight + cubeDis;
        var cubeZDis = cubeLength + cubeDis;
        var cubeXCount = xCount;
        var cubeYCount = yCount;
        var cubeZCount = zCount;
        var cubeXTotalDis = cubeXCount * cubeXDis;
        var cubeYTotalDis = cubeYCount * cubeYDis;
        var cubeZTotalDis = cubeZCount * cubeZDis;
        var cubeXStart = -cubeXTotalDis / 2 + cubeXDis / 2;
        var cubeYStart = -cubeYTotalDis / 2 + cubeYDis / 2;
        var cubeZStart = -cubeZTotalDis / 2 + cubeZDis / 2;
        for (var i = 0; i < cubeXCount; i++) {
            for (var j = 0; j < cubeYCount; j++) {
                for (var k = 0; k < cubeZCount; k++) {
                    var cubeNode = cc.instantiate(this.cubePrefab);
                    cubeNode.parent = this.cubeRootNode;
                    cubeNode.setPosition(cubeXStart + i * cubeXDis, cubeYStart + j * cubeYDis, cubeZStart + k * cubeZDis);
                    cubeNode.getComponent(Cube_1.default).init(i, j, k);
                }
            }
        }
    };
    ThreeNode.prototype.onCubeOpen = function (isOpen) {
        if (isOpen) {
            //将大正方体的按层分开一定距离
            var cubeWidth = 1;
            var cubeHeight = 1;
            var cubeLength = 1;
            var cubeDis = 0.8;
            var cubeXDis = cubeWidth;
            var cubeYDis = cubeHeight + cubeDis;
            var cubeZDis = cubeLength;
            var cubeXCount = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.xCount;
            var cubeYCount = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.yCount;
            var cubeZCount = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.zCount;
            var cubeXTotalDis = cubeXCount * cubeXDis;
            var cubeYTotalDis = cubeYCount * cubeYDis;
            var cubeZTotalDis = cubeZCount * cubeZDis;
            var cubeXStart = -cubeXTotalDis / 2 + cubeXDis / 2;
            var cubeYStart = -cubeYTotalDis / 2 + cubeYDis / 2;
            var cubeZStart = -cubeZTotalDis / 2 + cubeZDis / 2;
            var openPosArr = [];
            for (var i = 0; i < cubeXCount; i++) {
                for (var j = 0; j < cubeYCount; j++) {
                    for (var k = 0; k < cubeZCount; k++) {
                        openPosArr.push({ x: cubeXStart + i * cubeXDis, y: cubeYStart + j * cubeYDis, z: cubeZStart + k * cubeZDis });
                    }
                }
            }
            for (var i = 0; i < this.cubeRootNode.children.length; i++) {
                var cubeNode = this.cubeRootNode.children[i];
                cubeNode.getComponent(Cube_1.default).handleOpen(openPosArr[i]);
            }
        }
        else {
            for (var i = 0; i < this.cubeRootNode.children.length; i++) {
                var cubeNode = this.cubeRootNode.children[i];
                cubeNode.getComponent(Cube_1.default).handleClose();
            }
        }
    };
    ThreeNode.prototype.onClickCube = function (data) {
        for (var i = 0; i < this.cubeRootNode.children.length; i++) {
            var cubeNode = this.cubeRootNode.children[i];
            cubeNode.getComponent(Cube_1.default).handleCubeClick(data);
        }
    };
    __decorate([
        property(cc.Prefab)
    ], ThreeNode.prototype, "cubePrefab", void 0);
    __decorate([
        property(cc.Node)
    ], ThreeNode.prototype, "cubeRootNode", void 0);
    ThreeNode = __decorate([
        ccclass
    ], ThreeNode);
    return ThreeNode;
}(cc.Component));
exports.default = ThreeNode;

cc._RF.pop();