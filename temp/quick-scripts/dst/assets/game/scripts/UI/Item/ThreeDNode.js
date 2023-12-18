
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game/scripts/UI/Item/ThreeDNode.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZVxcc2NyaXB0c1xcVUlcXEl0ZW1cXFRocmVlRE5vZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUZBQW9GO0FBQ3BGLHFGQUFvRjtBQUNwRixrREFBaUQ7QUFDakQsK0JBQTBCO0FBRXBCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXVDLDZCQUFZO0lBQW5EO1FBQUEscUVBMEhDO1FBeEhXLGdCQUFVLEdBQWMsSUFBSSxDQUFDO1FBRTdCLGtCQUFZLEdBQVksSUFBSSxDQUFDOztJQXNIekMsQ0FBQztJQWxIRywwQkFBTSxHQUFOO1FBQ0ksaUNBQWUsQ0FBQyxFQUFFLENBQUMscUJBQVMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMvRCxpQ0FBZSxDQUFDLEVBQUUsQ0FBQyxxQkFBUyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3JFLENBQUM7SUFFRCw2QkFBUyxHQUFUO1FBQ0ksaUNBQWUsQ0FBQyxHQUFHLENBQUMscUJBQVMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNoRSxpQ0FBZSxDQUFDLEdBQUcsQ0FBQyxxQkFBUyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFBO0lBQ3JFLENBQUM7SUFFTSx3QkFBSSxHQUFYO1FBQ0ksSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxVQUFVLENBQUMsaUNBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDekUsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUs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b3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGlzdGVuZXJNYW5hZ2VyIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2ZyYW1lL3NjcmlwdHMvTWFuYWdlci9MaXN0ZW5lck1hbmFnZXJcIjtcbmltcG9ydCB7IFN5bmNEYXRhTWFuYWdlciB9IGZyb20gXCIuLi8uLi8uLi8uLi9mcmFtZS9zY3JpcHRzL01hbmFnZXIvU3luY0RhdGFNYW5hZ2VyXCI7XG5pbXBvcnQgeyBFdmVudFR5cGUgfSBmcm9tIFwiLi4vLi4vRGF0YS9FdmVudFR5cGVcIjtcbmltcG9ydCBDdWJlIGZyb20gXCIuL0N1YmVcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRocmVlTm9kZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBwcml2YXRlIGN1YmVQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcHJpdmF0ZSBjdWJlUm9vdE5vZGU6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSB0b3VjaEV2ZW50SWQ6IG51bWJlcjtcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgTGlzdGVuZXJNYW5hZ2VyLm9uKEV2ZW50VHlwZS5DVUJFX09QRU4sIHRoaXMub25DdWJlT3BlbiwgdGhpcyk7XG4gICAgICAgIExpc3RlbmVyTWFuYWdlci5vbihFdmVudFR5cGUuQ0xJQ0tfQ1VCRSwgdGhpcy5vbkNsaWNrQ3ViZSwgdGhpcyk7XG4gICAgfVxuXG4gICAgb25EZXN0cm95KCkge1xuICAgICAgICBMaXN0ZW5lck1hbmFnZXIub2ZmKEV2ZW50VHlwZS5DVUJFX09QRU4sIHRoaXMub25DdWJlT3BlbiwgdGhpcyk7XG4gICAgICAgIExpc3RlbmVyTWFuYWdlci5vZmYoRXZlbnRUeXBlLkNMSUNLX0NVQkUsIHRoaXMub25DbGlja0N1YmUsIHRoaXMpXG4gICAgfVxuXG4gICAgcHVibGljIGluaXQoKSB7XG4gICAgICAgIHRoaXMuaW5pdEJpZ0N1YmUoKTtcbiAgICAgICAgdGhpcy5vbkN1YmVPcGVuKFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmN1YmVPcGVuZWQpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmN1YmVDbGlja0Fyci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5vbkNsaWNrQ3ViZShTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5jdWJlQ2xpY2tBcnJbaV0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHJlc2V0KCkge1xuICAgICAgICBsZXQgcXVhdCA9IG5ldyBjYy5RdWF0KClcbiAgICAgICAgY2MuUXVhdC5mcm9tRXVsZXIocXVhdCwgMCwgNDUsIDApXG4gICAgICAgIHRoaXMuY3ViZVJvb3ROb2RlLnNldFJvdGF0aW9uKHF1YXQpO1xuICAgICAgICB0aGlzLmluaXRCaWdDdWJlKCk7XG4gICAgICAgIFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmN1YmVDbGlja0FyciA9IFtdO1xuICAgICAgICBTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5jdWJlT3BlbmVkID0gZmFsc2U7XG4gICAgICAgIFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLnFpZXBpYW5DbGlja0FyciA9IFtdO1xuICAgIH1cblxuICAgIC8v5Yid5aeL5YyW5aSn5q2j5pa55L2TXG4gICAgcHJpdmF0ZSBpbml0QmlnQ3ViZSgpIHtcbiAgICAgICAgbGV0IHhDb3VudCA9IFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLnhDb3VudDtcbiAgICAgICAgbGV0IHlDb3VudCA9IFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLnlDb3VudDtcbiAgICAgICAgbGV0IHpDb3VudCA9IFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLnpDb3VudDtcbiAgICAgICAgdGhpcy5jaGFuZ2VCaWdDdWJlU2l6ZSh4Q291bnQsIHlDb3VudCwgekNvdW50KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNoYW5nZUJpZ0N1YmVTaXplKHhDb3VudDogbnVtYmVyLCB5Q291bnQ6IG51bWJlciwgekNvdW50OiBudW1iZXIpIHtcbiAgICAgICAgLy/lhYjmuIXnqbpcbiAgICAgICAgdGhpcy5jdWJlUm9vdE5vZGUucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcblxuICAgICAgICAvL+WIm+W7unhDb3VudOihjHlDb3VudOWIl3pDb3VudOWxgueahOWkp+ato+aWueS9k++8jOW5tuS4lOS7peWkp+ato+aWueS9k+eahOS4reW/g+eCueS4uuWOn+eCuVxuICAgICAgICBsZXQgY3ViZVdpZHRoID0gMTtcbiAgICAgICAgbGV0IGN1YmVIZWlnaHQgPSAxO1xuICAgICAgICBsZXQgY3ViZUxlbmd0aCA9IDE7XG4gICAgICAgIGxldCBjdWJlRGlzID0gMDtcbiAgICAgICAgbGV0IGN1YmVYRGlzID0gY3ViZVdpZHRoICsgY3ViZURpcztcbiAgICAgICAgbGV0IGN1YmVZRGlzID0gY3ViZUhlaWdodCArIGN1YmVEaXM7XG4gICAgICAgIGxldCBjdWJlWkRpcyA9IGN1YmVMZW5ndGggKyBjdWJlRGlzO1xuICAgICAgICBsZXQgY3ViZVhDb3VudCA9IHhDb3VudDtcbiAgICAgICAgbGV0IGN1YmVZQ291bnQgPSB5Q291bnQ7XG4gICAgICAgIGxldCBjdWJlWkNvdW50ID0gekNvdW50O1xuICAgICAgICBsZXQgY3ViZVhUb3RhbERpcyA9IGN1YmVYQ291bnQgKiBjdWJlWERpcztcbiAgICAgICAgbGV0IGN1YmVZVG90YWxEaXMgPSBjdWJlWUNvdW50ICogY3ViZVlEaXM7XG4gICAgICAgIGxldCBjdWJlWlRvdGFsRGlzID0gY3ViZVpDb3VudCAqIGN1YmVaRGlzO1xuICAgICAgICBsZXQgY3ViZVhTdGFydCA9IC1jdWJlWFRvdGFsRGlzIC8gMiArIGN1YmVYRGlzIC8gMjtcbiAgICAgICAgbGV0IGN1YmVZU3RhcnQgPSAtY3ViZVlUb3RhbERpcyAvIDIgKyBjdWJlWURpcyAvIDI7XG4gICAgICAgIGxldCBjdWJlWlN0YXJ0ID0gLWN1YmVaVG90YWxEaXMgLyAyICsgY3ViZVpEaXMgLyAyO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGN1YmVYQ291bnQ7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjdWJlWUNvdW50OyBqKyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IGN1YmVaQ291bnQ7IGsrKykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgY3ViZU5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmN1YmVQcmVmYWIpO1xuICAgICAgICAgICAgICAgICAgICBjdWJlTm9kZS5wYXJlbnQgPSB0aGlzLmN1YmVSb290Tm9kZTtcbiAgICAgICAgICAgICAgICAgICAgY3ViZU5vZGUuc2V0UG9zaXRpb24oY3ViZVhTdGFydCArIGkgKiBjdWJlWERpcywgY3ViZVlTdGFydCArIGogKiBjdWJlWURpcywgY3ViZVpTdGFydCArIGsgKiBjdWJlWkRpcyk7XG4gICAgICAgICAgICAgICAgICAgIGN1YmVOb2RlLmdldENvbXBvbmVudChDdWJlKS5pbml0KGksIGosIGspO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgb25DdWJlT3Blbihpc09wZW46IGJvb2xlYW4pIHtcbiAgICAgICAgaWYgKGlzT3Blbikge1xuICAgICAgICAgICAgLy/lsIblpKfmraPmlrnkvZPnmoTmjInlsYLliIblvIDkuIDlrprot53nprtcbiAgICAgICAgICAgIGxldCBjdWJlV2lkdGggPSAxO1xuICAgICAgICAgICAgbGV0IGN1YmVIZWlnaHQgPSAxO1xuICAgICAgICAgICAgbGV0IGN1YmVMZW5ndGggPSAxO1xuICAgICAgICAgICAgbGV0IGN1YmVEaXMgPSAwLjg7XG4gICAgICAgICAgICBsZXQgY3ViZVhEaXMgPSBjdWJlV2lkdGg7XG4gICAgICAgICAgICBsZXQgY3ViZVlEaXMgPSBjdWJlSGVpZ2h0ICsgY3ViZURpcztcbiAgICAgICAgICAgIGxldCBjdWJlWkRpcyA9IGN1YmVMZW5ndGg7XG4gICAgICAgICAgICBsZXQgY3ViZVhDb3VudCA9IFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLnhDb3VudDtcbiAgICAgICAgICAgIGxldCBjdWJlWUNvdW50ID0gU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEueUNvdW50O1xuICAgICAgICAgICAgbGV0IGN1YmVaQ291bnQgPSBTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS56Q291bnQ7XG4gICAgICAgICAgICBsZXQgY3ViZVhUb3RhbERpcyA9IGN1YmVYQ291bnQgKiBjdWJlWERpcztcbiAgICAgICAgICAgIGxldCBjdWJlWVRvdGFsRGlzID0gY3ViZVlDb3VudCAqIGN1YmVZRGlzO1xuICAgICAgICAgICAgbGV0IGN1YmVaVG90YWxEaXMgPSBjdWJlWkNvdW50ICogY3ViZVpEaXM7XG4gICAgICAgICAgICBsZXQgY3ViZVhTdGFydCA9IC1jdWJlWFRvdGFsRGlzIC8gMiArIGN1YmVYRGlzIC8gMjtcbiAgICAgICAgICAgIGxldCBjdWJlWVN0YXJ0ID0gLWN1YmVZVG90YWxEaXMgLyAyICsgY3ViZVlEaXMgLyAyO1xuICAgICAgICAgICAgbGV0IGN1YmVaU3RhcnQgPSAtY3ViZVpUb3RhbERpcyAvIDIgKyBjdWJlWkRpcyAvIDI7XG4gICAgICAgICAgICBsZXQgb3BlblBvc0FyciA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjdWJlWENvdW50OyBpKyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGN1YmVZQ291bnQ7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IGN1YmVaQ291bnQ7IGsrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3BlblBvc0Fyci5wdXNoKHsgeDogY3ViZVhTdGFydCArIGkgKiBjdWJlWERpcywgeTogY3ViZVlTdGFydCArIGogKiBjdWJlWURpcywgejogY3ViZVpTdGFydCArIGsgKiBjdWJlWkRpcyB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jdWJlUm9vdE5vZGUuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgY3ViZU5vZGUgPSB0aGlzLmN1YmVSb290Tm9kZS5jaGlsZHJlbltpXTtcbiAgICAgICAgICAgICAgICBjdWJlTm9kZS5nZXRDb21wb25lbnQoQ3ViZSkuaGFuZGxlT3BlbihvcGVuUG9zQXJyW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jdWJlUm9vdE5vZGUuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgY3ViZU5vZGUgPSB0aGlzLmN1YmVSb290Tm9kZS5jaGlsZHJlbltpXTtcbiAgICAgICAgICAgICAgICBjdWJlTm9kZS5nZXRDb21wb25lbnQoQ3ViZSkuaGFuZGxlQ2xvc2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgb25DbGlja0N1YmUoZGF0YTogeyB4SW5kZXg6IG51bWJlciwgeUluZGV4OiBudW1iZXIsIHpJbmRleDogbnVtYmVyIH0pIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmN1YmVSb290Tm9kZS5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGN1YmVOb2RlID0gdGhpcy5jdWJlUm9vdE5vZGUuY2hpbGRyZW5baV07XG4gICAgICAgICAgICBjdWJlTm9kZS5nZXRDb21wb25lbnQoQ3ViZSkuaGFuZGxlQ3ViZUNsaWNrKGRhdGEpO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19