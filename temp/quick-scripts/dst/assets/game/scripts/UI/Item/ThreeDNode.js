
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
var SoundManager_1 = require("../../../../frame/scripts/Manager/SoundManager");
var SyncDataManager_1 = require("../../../../frame/scripts/Manager/SyncDataManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ThreeNode = /** @class */ (function (_super) {
    __extends(ThreeNode, _super);
    function ThreeNode() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.cubePrefab = null;
        _this.cubeRootNode = null;
        _this.secondStepBigCube = [];
        _this.sliderRotate = null;
        _this.sliderMerge = null;
        _this.firstStepNode = [];
        _this.secondStepNode = [];
        return _this;
    }
    ThreeNode.prototype.onLoad = function () {
        // for (let i = 0; i < 8 * 8 * 8; i++) {
        //     let smallCubeNode = cc.instantiate(this.cubePrefab);
        //     smallCubeNode.parent = this.cubeRootNode.getChildByName("firstStep");
        //     smallCubeNode.opacity = 0;
        //     this.firstStepNode.push(smallCubeNode);
        // }
        // for (let i = 0; i < 6; i++) {
        //     this.secondStepNode.push([]);
        //     for (let j = 0; j < 8 * 8 * 8; j++) {
        //         let smallCubeNode2 = cc.instantiate(this.cubePrefab);
        //         smallCubeNode2.parent = this.cubeRootNode.getChildByName("secondStep").getChildByName("secondStep_" + i);
        //         smallCubeNode2.opacity = 0;
        //         this.secondStepNode[i].push(smallCubeNode2);
        //     }
        // }
    };
    ThreeNode.prototype.onDestroy = function () {
    };
    ThreeNode.prototype.init = function () {
        this.initBigCube();
    };
    ThreeNode.prototype.showStep2 = function () {
        this.cubeRootNode.getChildByName("firstStep").opacity = 0;
        this.cubeRootNode.getChildByName("secondStep").opacity = 255;
        this.showSecondStep();
    };
    ThreeNode.prototype.reset = function () {
        var quat = new cc.Quat();
        cc.Quat.fromEuler(quat, 0, -15, 0);
        this.cubeRootNode.setRotation(quat);
        this.initBigCube();
    };
    //初始化大正方体
    ThreeNode.prototype.initBigCube = function () {
        this.changeBigCubeSize();
    };
    ThreeNode.prototype.changeBigCubeSize = function () {
        var count = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.count;
        this.cubeRootNode.getChildByName("firstStep").opacity = 255;
        this.cubeRootNode.getChildByName("secondStep").opacity = 0;
        this.cubeRootNode.getChildByName("firstStep").children.forEach(function (element) {
            element.opacity = 0;
        });
        //立方体的层数为count，例：count=3，立方体最上层为1*1，下一层为2*2,最下层为3*3
        var cubeWidth = 1;
        var cubeHeight = 1;
        var cubeLength = 1;
        var cubeDis = 0;
        var cubeXDis = cubeWidth + cubeDis;
        var cubeYDis = cubeHeight + cubeDis;
        var cubeZDis = cubeLength + cubeDis;
        var cubeStartX = -count * cubeXDis / 2 + cubeXDis / 2;
        for (var i = 0; i < count; i++) {
            for (var j = 0; j < count - i; j++) {
                for (var k = 0; k < count - i; k++) {
                    var smallCubeNode = this.firstStepNode[i * count * count + j * count + k];
                    if (!smallCubeNode) {
                        smallCubeNode = cc.instantiate(this.cubePrefab);
                        smallCubeNode.parent = this.cubeRootNode.getChildByName("firstStep");
                        this.firstStepNode.push(smallCubeNode);
                    }
                    // smallCubeNode.parent = this.cubeRootNode.getChildByName("firstStep");
                    smallCubeNode.opacity = 255;
                    smallCubeNode.setPosition(cubeStartX + j * cubeYDis, cubeStartX + i * cubeXDis, cubeStartX + k * cubeZDis);
                }
            }
        }
        this.cubeRootNode.getChildByName("firstStep").scale = 1 + (8 - count) * 0.15;
    };
    ThreeNode.prototype.showSecondStep = function () {
        var colorArr = ["#2A82E4", "#E329AE", "#43CF7C", "#7948EA", "#FFC300", "#FF8D1A"];
        var count = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.count;
        this.cubeRootNode.getChildByName("firstStep").opacity = 0;
        this.cubeRootNode.getChildByName("secondStep").opacity = 255;
        this.secondStepBigCube.forEach(function (cube) {
            cube.children.forEach(function (node) {
                node.opacity = 0;
            });
        });
        var cubeWidth = 1;
        var cubeHeight = 1;
        var cubeLength = 1;
        var cubeDis = 0;
        var cubeXDis = cubeWidth + cubeDis;
        var cubeYDis = cubeHeight + cubeDis;
        var cubeZDis = cubeLength + cubeDis;
        var cubeStartX = -count * cubeXDis / 2 + cubeXDis / 2;
        this.secondStepBigCube[0].parent.y = 5;
        this.secondStepBigCube[3].parent.y = -5;
        for (var index = 0; index < 6; index++) {
            var node = this.secondStepBigCube[index];
            node.scale = 1 + (8 - count) * 0.15;
            node.is3DNode = true;
            if (index == 3 || index == 1 || index == 5) {
                node.eulerAngles = cc.v3(0, -90, 0);
            }
            //分成两行三列，居中
            var row = Math.floor(index / 3);
            var col = index % 3;
            var posX = 0;
            var posY = 0;
            // if (row == 0) {
            //     posY = 5;
            // } else {
            //     posY = -5;
            // }
            if (col == 0) {
                posX = -10;
            }
            else if (col == 1) {
                posX = 0;
            }
            else {
                posX = 10;
            }
            node.setPosition(posX, 0, 0);
            if (!this.secondStepNode[index]) {
                this.secondStepNode[index] = [];
            }
            for (var i = 0; i < count; i++) {
                for (var j = 0; j < count - i; j++) {
                    for (var k = 0; k < count - i; k++) {
                        var smallCubeNode = this.secondStepNode[index][i * count * count + j * count + k];
                        if (!smallCubeNode) {
                            smallCubeNode = cc.instantiate(this.cubePrefab);
                            smallCubeNode.parent = node;
                            this.secondStepNode[index].push(smallCubeNode);
                        }
                        smallCubeNode.opacity = 255;
                        smallCubeNode.setPosition(cubeStartX + j * cubeYDis, cubeStartX + i * cubeXDis, cubeStartX + k * cubeZDis);
                        for (var face = 0; face < 6; face++) {
                            var faceNode = smallCubeNode.getChildByName((face + 1).toString());
                            var material = faceNode.getComponent(cc.MeshRenderer).getMaterial(0);
                            var color = cc.Color.WHITE.fromHEX(colorArr[index]);
                            material.setProperty("diffuseColor", color, 0);
                        }
                    }
                }
            }
        }
    };
    ThreeNode.prototype.rotation = function () {
        var count = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.count;
        var scale = 1 + (8 - count) * 0.15;
        var node_0 = this.secondStepBigCube[0];
        node_0.is3DNode = true;
        cc.tween(node_0).to(1, { eulerAngles: cc.v3(-90, 0, 0), z: scale }).start();
        var node_1 = this.secondStepBigCube[1];
        node_1.is3DNode = true;
        cc.tween(node_1).to(1, { eulerAngles: cc.v3(180, -90, 0) }).start();
        var node_2 = this.secondStepBigCube[2];
        node_2.is3DNode = true;
        cc.tween(node_2).to(1, { eulerAngles: cc.v3(0, 0, 90), y: -scale }).start();
        var node_3 = this.secondStepBigCube[3];
        node_3.is3DNode = true;
        cc.tween(node_3).to(1, { eulerAngles: cc.v3(90, 90, 0), z: scale }).start();
        var node_4 = this.secondStepBigCube[4];
        node_4.is3DNode = true;
        cc.tween(node_4).to(1, { eulerAngles: cc.v3(0, 180, 0), y: -scale, z: scale }).start();
        var node_5 = this.secondStepBigCube[5];
        node_5.is3DNode = true;
        cc.tween(node_5).to(1, { eulerAngles: cc.v3(0, -90, -90), y: -scale }).start();
        var slider = this.sliderRotate.getComponent(cc.Slider);
        cc.tween(slider).to(1, { progress: 1 }).start();
    };
    ThreeNode.prototype.merge = function () {
        var slider = this.sliderMerge.getComponent(cc.Slider);
        cc.tween(slider).to(5, { progress: 1 }).start();
        var node_0 = this.secondStepBigCube[0];
        var node_1 = this.secondStepBigCube[1];
        var node_2 = this.secondStepBigCube[2];
        var node_3 = this.secondStepBigCube[3];
        var node_4 = this.secondStepBigCube[4];
        var node_5 = this.secondStepBigCube[5];
        var count = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.count;
        var scale = 1 + (8 - count) * 0.15;
        SoundManager_1.SoundManager.stopSoundByName("移动");
        SoundManager_1.SoundManager.playEffect("移动", false);
        cc.tween(node_0).to(1, { x: 0 }).call(function () {
            SoundManager_1.SoundManager.stopSoundByName("拼");
            SoundManager_1.SoundManager.playEffect("拼", false, false);
            SoundManager_1.SoundManager.stopSoundByName("移动");
            SoundManager_1.SoundManager.playEffect("移动", false, false);
            cc.tween(node_2).to(1, { x: 0, y: -scale }).call(function () {
                SoundManager_1.SoundManager.stopSoundByName("拼");
                SoundManager_1.SoundManager.playEffect("拼", false, false);
                SoundManager_1.SoundManager.stopSoundByName("移动");
                SoundManager_1.SoundManager.playEffect("移动", false, false);
                cc.tween(node_3).to(1, { x: 0 }).call(function () {
                    SoundManager_1.SoundManager.stopSoundByName("拼");
                    SoundManager_1.SoundManager.playEffect("拼", false, false);
                    SoundManager_1.SoundManager.stopSoundByName("移动");
                    SoundManager_1.SoundManager.playEffect("移动", false, false);
                    cc.tween(node_5).to(1, { x: 0 }).call(function () {
                        SoundManager_1.SoundManager.stopSoundByName("拼");
                        SoundManager_1.SoundManager.playEffect("拼", false, false);
                        SoundManager_1.SoundManager.stopSoundByName("移动");
                        SoundManager_1.SoundManager.playEffect("移动", false, false);
                        cc.tween(node_0.parent).to(1, { y: Math.floor(count / 2) * scale }).call(function () {
                        }).start();
                        cc.tween(node_3.parent).to(1, { y: -Math.floor(count / 2) * scale }).call(function () {
                            SoundManager_1.SoundManager.stopSoundByName("拼");
                            SoundManager_1.SoundManager.playEffect("拼", false, false);
                        }).start();
                    }).start();
                }).start();
            }).start();
        }).start();
    };
    ThreeNode.prototype.controlRotate = function (progress) {
        this.stopAllTween();
        this.secondStepBigCube[0].eulerAngles = cc.v3(-90 * progress, 0, 0);
        this.secondStepBigCube[1].eulerAngles = cc.v3(180 * progress, -90, 0);
        this.secondStepBigCube[2].eulerAngles = cc.v3(0, 0, 90 * progress);
        this.secondStepBigCube[3].eulerAngles = cc.v3(90 * progress, -90 * (1 - progress) + 90 * progress, 0);
        this.secondStepBigCube[4].eulerAngles = cc.v3(0, 180 * progress, 0);
        this.secondStepBigCube[5].eulerAngles = cc.v3(0, -90, -90 * progress);
    };
    ThreeNode.prototype.controlMerge = function (progress) {
        this.stopAllTween();
        var count = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.count;
        var scale = 1 + (8 - count) * 0.15;
        if (progress * 5 < 1) {
            this.secondStepBigCube[0].parent.y = 5;
            this.secondStepBigCube[3].parent.y = -5;
            this.secondStepBigCube[0].x = -10 * (1 - progress * 5);
            this.secondStepBigCube[0].z = scale;
            this.secondStepBigCube[1].position = cc.v3(0, 0, 0);
            this.secondStepBigCube[2].x = 10;
            this.secondStepBigCube[2].y = -scale;
            this.secondStepBigCube[3].x = -10;
            this.secondStepBigCube[3].z = scale;
            this.secondStepBigCube[4].y = -scale;
            this.secondStepBigCube[4].z = scale;
            this.secondStepBigCube[5].x = 10;
            this.secondStepBigCube[5].y = -scale;
        }
        else if (progress * 5 < 2) {
            this.secondStepBigCube[0].parent.y = 5;
            this.secondStepBigCube[3].parent.y = -5;
            this.secondStepBigCube[0].x = 0;
            this.secondStepBigCube[0].z = scale;
            this.secondStepBigCube[1].position = cc.v3(0, 0, 0);
        }
        else if (progress * 5 < 3) {
            this.secondStepBigCube[0].parent.y = 5;
            this.secondStepBigCube[3].parent.y = -5;
            this.secondStepBigCube[0].x = 0;
            this.secondStepBigCube[0].z = scale;
            this.secondStepBigCube[1].position = cc.v3(0, 0, 0);
        }
        else if (progress * 5 < 4) {
            this.secondStepBigCube[0].parent.y = 5;
            this.secondStepBigCube[3].parent.y = -5;
            this.secondStepBigCube[0].x = 0;
            this.secondStepBigCube[0].z = scale;
            this.secondStepBigCube[1].position = cc.v3(0, 0, 0);
        }
        else {
            this.secondStepBigCube[0].x = 0;
            this.secondStepBigCube[0].z = scale;
            this.secondStepBigCube[1].position = cc.v3(0, 0, 0);
            this.secondStepBigCube[2].x = 0;
            this.secondStepBigCube[2].y = -scale;
            this.secondStepBigCube[3].x = 0;
            this.secondStepBigCube[3].z = scale;
            this.secondStepBigCube[4].y = -scale;
            this.secondStepBigCube[4].z = scale;
            this.secondStepBigCube[5].x = 0;
            this.secondStepBigCube[5].y = -scale;
        }
    };
    ThreeNode.prototype.stopAllTween = function () {
        this.secondStepBigCube.forEach(function (cube) {
            cc.Tween.stopAllByTarget(cube);
        });
        cc.Tween.stopAllByTarget(this.secondStepBigCube[0].parent);
        cc.Tween.stopAllByTarget(this.secondStepBigCube[3].parent);
        cc.Tween.stopAllByTarget(this.sliderRotate.getComponent(cc.Slider));
        cc.Tween.stopAllByTarget(this.sliderMerge.getComponent(cc.Slider));
    };
    __decorate([
        property(cc.Prefab)
    ], ThreeNode.prototype, "cubePrefab", void 0);
    __decorate([
        property(cc.Node)
    ], ThreeNode.prototype, "cubeRootNode", void 0);
    __decorate([
        property(cc.Node)
    ], ThreeNode.prototype, "secondStepBigCube", void 0);
    __decorate([
        property(cc.Node)
    ], ThreeNode.prototype, "sliderRotate", void 0);
    __decorate([
        property(cc.Node)
    ], ThreeNode.prototype, "sliderMerge", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZVxcc2NyaXB0c1xcVUlcXEl0ZW1cXFRocmVlRE5vZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0VBQThFO0FBQzlFLHFGQUFvRjtBQUc5RSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF1Qyw2QkFBWTtJQUFuRDtRQUFBLHFFQTBWQztRQXhWVyxnQkFBVSxHQUFjLElBQUksQ0FBQztRQUU3QixrQkFBWSxHQUFZLElBQUksQ0FBQztRQUU3Qix1QkFBaUIsR0FBYyxFQUFFLENBQUM7UUFFbEMsa0JBQVksR0FBWSxJQUFJLENBQUM7UUFFN0IsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFHNUIsbUJBQWEsR0FBYyxFQUFFLENBQUM7UUFDOUIsb0JBQWMsR0FBZ0IsRUFBRSxDQUFDOztJQTRVN0MsQ0FBQztJQXpVRywwQkFBTSxHQUFOO1FBQ0ksd0NBQXdDO1FBQ3hDLDJEQUEyRDtRQUMzRCw0RUFBNEU7UUFDNUUsaUNBQWlDO1FBQ2pDLDhDQUE4QztRQUM5QyxJQUFJO1FBQ0osZ0NBQWdDO1FBQ2hDLG9DQUFvQztRQUNwQyw0Q0FBNEM7UUFDNUMsZ0VBQWdFO1FBQ2hFLG9IQUFvSDtRQUNwSCxzQ0FBc0M7UUFDdEMsdURBQXVEO1FBQ3ZELFFBQVE7UUFDUixJQUFJO0lBQ1IsQ0FBQztJQUVELDZCQUFTLEdBQVQ7SUFFQSxDQUFDO0lBRU0sd0JBQUksR0FBWDtRQUNJLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRU0sNkJBQVMsR0FBaEI7UUFDSSxJQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFD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LEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBRTVFLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUN0QyxNQUFNLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUN2QixFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxXQUFXLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBRXBFLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUN0QyxNQUFNLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUN2QixFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxXQUFXLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFNUUsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ3RDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLFdBQVcsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFNUUsSUFBSSxNQUFNLEdBQUcsSUFB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QUMsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7SUF2VkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztpREFDaUI7SUFFckM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzttREFDbUI7SUFFckM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt3REFDd0I7SUFFMUM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzttREFDbUI7SUFFckM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztrREFDa0I7SUFWbkIsU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQTBWN0I7SUFBRCxnQkFBQztDQTFWRCxBQTBWQyxDQTFWc0MsRUFBRSxDQUFDLFNBQVMsR0EwVmxEO2tCQTFWb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNvdW5kTWFuYWdlciB9IGZyb20gXCIuLi8uLi8uLi8uLi9mcmFtZS9zY3JpcHRzL01hbmFnZXIvU291bmRNYW5hZ2VyXCI7XG5pbXBvcnQgeyBTeW5jRGF0YU1hbmFnZXIgfSBmcm9tIFwiLi4vLi4vLi4vLi4vZnJhbWUvc2NyaXB0cy9NYW5hZ2VyL1N5bmNEYXRhTWFuYWdlclwiO1xuaW1wb3J0IHsgU291bmRDb25maWcgfSBmcm9tIFwiLi9Tb3VuZENvbmZpZ1wiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGhyZWVOb2RlIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIHByaXZhdGUgY3ViZVByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBwcml2YXRlIGN1YmVSb290Tm9kZTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcHJpdmF0ZSBzZWNvbmRTdGVwQmlnQ3ViZTogY2MuTm9kZVtdID0gW107XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcHJpdmF0ZSBzbGlkZXJSb3RhdGU6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHByaXZhdGUgc2xpZGVyTWVyZ2U6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSB0b3VjaEV2ZW50SWQ6IG51bWJlcjtcbiAgICBwcml2YXRlIGZpcnN0U3RlcE5vZGU6IGNjLk5vZGVbXSA9IFtdO1xuICAgIHByaXZhdGUgc2Vjb25kU3RlcE5vZGU6IGNjLk5vZGVbXVtdID0gW107XG5cblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCA4ICogOCAqIDg7IGkrKykge1xuICAgICAgICAvLyAgICAgbGV0IHNtYWxsQ3ViZU5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmN1YmVQcmVmYWIpO1xuICAgICAgICAvLyAgICAgc21hbGxDdWJlTm9kZS5wYXJlbnQgPSB0aGlzLmN1YmVSb290Tm9kZS5nZXRDaGlsZEJ5TmFtZShcImZpcnN0U3RlcFwiKTtcbiAgICAgICAgLy8gICAgIHNtYWxsQ3ViZU5vZGUub3BhY2l0eSA9IDA7XG4gICAgICAgIC8vICAgICB0aGlzLmZpcnN0U3RlcE5vZGUucHVzaChzbWFsbEN1YmVOb2RlKTtcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IDY7IGkrKykge1xuICAgICAgICAvLyAgICAgdGhpcy5zZWNvbmRTdGVwTm9kZS5wdXNoKFtdKTtcbiAgICAgICAgLy8gICAgIGZvciAobGV0IGogPSAwOyBqIDwgOCAqIDggKiA4OyBqKyspIHtcbiAgICAgICAgLy8gICAgICAgICBsZXQgc21hbGxDdWJlTm9kZTIgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmN1YmVQcmVmYWIpO1xuICAgICAgICAvLyAgICAgICAgIHNtYWxsQ3ViZU5vZGUyLnBhcmVudCA9IHRoaXMuY3ViZVJvb3ROb2RlLmdldENoaWxkQnlOYW1lKFwic2Vjb25kU3RlcFwiKS5nZXRDaGlsZEJ5TmFtZShcInNlY29uZFN0ZXBfXCIgKyBpKTtcbiAgICAgICAgLy8gICAgICAgICBzbWFsbEN1YmVOb2RlMi5vcGFjaXR5ID0gMDtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLnNlY29uZFN0ZXBOb2RlW2ldLnB1c2goc21hbGxDdWJlTm9kZTIpO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9XG4gICAgfVxuXG4gICAgb25EZXN0cm95KCkge1xuXG4gICAgfVxuXG4gICAgcHVibGljIGluaXQoKSB7XG4gICAgICAgIHRoaXMuaW5pdEJpZ0N1YmUoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2hvd1N0ZXAyKCkge1xuICAgICAgICB0aGlzLmN1YmVSb290Tm9kZS5nZXRDaGlsZEJ5TmFtZShcImZpcnN0U3RlcFwiKS5vcGFjaXR5ID0gMDtcbiAgICAgICAgdGhpcy5jdWJlUm9vdE5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJzZWNvbmRTdGVwXCIpLm9wYWNpdHkgPSAyNTU7XG4gICAgICAgIHRoaXMuc2hvd1NlY29uZFN0ZXAoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVzZXQoKSB7XG4gICAgICAgIGxldCBxdWF0ID0gbmV3IGNjLlF1YXQoKVxuICAgICAgICBjYy5RdWF0LmZyb21FdWxlcihxdWF0LCAwLCAtMTUsIDApXG4gICAgICAgIHRoaXMuY3ViZVJvb3ROb2RlLnNldFJvdGF0aW9uKHF1YXQpO1xuICAgICAgICB0aGlzLmluaXRCaWdDdWJlKCk7XG4gICAgfVxuXG4gICAgLy/liJ3lp4vljJblpKfmraPmlrnkvZNcbiAgICBwcml2YXRlIGluaXRCaWdDdWJlKCkge1xuICAgICAgICB0aGlzLmNoYW5nZUJpZ0N1YmVTaXplKCk7XG4gICAgfVxuXG5cbiAgICBwcml2YXRlIGNoYW5nZUJpZ0N1YmVTaXplKCkge1xuICAgICAgICBsZXQgY291bnQgPSBTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5jb3VudDtcblxuICAgICAgICB0aGlzLmN1YmVSb290Tm9kZS5nZXRDaGlsZEJ5TmFtZShcImZpcnN0U3RlcFwiKS5vcGFjaXR5ID0gMjU1O1xuICAgICAgICB0aGlzLmN1YmVSb290Tm9kZS5nZXRDaGlsZEJ5TmFtZShcInNlY29uZFN0ZXBcIikub3BhY2l0eSA9IDA7XG4gICAgICAgIHRoaXMuY3ViZVJvb3ROb2RlLmdldENoaWxkQnlOYW1lKFwiZmlyc3RTdGVwXCIpLmNoaWxkcmVuLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICBlbGVtZW50Lm9wYWNpdHkgPSAwO1xuICAgICAgICB9KTtcblxuICAgICAgICAvL+eri+aWueS9k+eahOWxguaVsOS4umNvdW5077yM5L6L77yaY291bnQ9M++8jOeri+aWueS9k+acgOS4iuWxguS4ujEqMe+8jOS4i+S4gOWxguS4ujIqMizmnIDkuIvlsYLkuLozKjNcbiAgICAgICAgbGV0IGN1YmVXaWR0aCA9IDE7XG4gICAgICAgIGxldCBjdWJlSGVpZ2h0ID0gMTtcbiAgICAgICAgbGV0IGN1YmVMZW5ndGggPSAxO1xuICAgICAgICBsZXQgY3ViZURpcyA9IDA7XG4gICAgICAgIGxldCBjdWJlWERpcyA9IGN1YmVXaWR0aCArIGN1YmVEaXM7XG4gICAgICAgIGxldCBjdWJlWURpcyA9IGN1YmVIZWlnaHQgKyBjdWJlRGlzO1xuICAgICAgICBsZXQgY3ViZVpEaXMgPSBjdWJlTGVuZ3RoICsgY3ViZURpcztcbiAgICAgICAgbGV0IGN1YmVTdGFydFggPSAtY291bnQgKiBjdWJlWERpcyAvIDIgKyBjdWJlWERpcyAvIDI7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjb3VudCAtIGk7IGorKykge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgY291bnQgLSBpOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNtYWxsQ3ViZU5vZGUgPSB0aGlzLmZpcnN0U3RlcE5vZGVbaSAqIGNvdW50ICogY291bnQgKyBqICogY291bnQgKyBrXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFzbWFsbEN1YmVOb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzbWFsbEN1YmVOb2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5jdWJlUHJlZmFiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNtYWxsQ3ViZU5vZGUucGFyZW50ID0gdGhpcy5jdWJlUm9vdE5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJmaXJzdFN0ZXBcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpcnN0U3RlcE5vZGUucHVzaChzbWFsbEN1YmVOb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBzbWFsbEN1YmVOb2RlLnBhcmVudCA9IHRoaXMuY3ViZVJvb3ROb2RlLmdldENoaWxkQnlOYW1lKFwiZmlyc3RTdGVwXCIpO1xuICAgICAgICAgICAgICAgICAgICBzbWFsbEN1YmVOb2RlLm9wYWNpdHkgPSAyNTU7XG4gICAgICAgICAgICAgICAgICAgIHNtYWxsQ3ViZU5vZGUuc2V0UG9zaXRpb24oY3ViZVN0YXJ0WCArIGogKiBjdWJlWURpcywgY3ViZVN0YXJ0WCArIGkgKiBjdWJlWERpcywgY3ViZVN0YXJ0WCArIGsgKiBjdWJlWkRpcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY3ViZVJvb3ROb2RlLmdldENoaWxkQnlOYW1lKFwiZmlyc3RTdGVwXCIpLnNjYWxlID0gMSArICg4IC0gY291bnQpICogMC4xNTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNob3dTZWNvbmRTdGVwKCkge1xuICAgICAgICBsZXQgY29sb3JBcnIgPSBbXCIjMkE4MkU0XCIsIFwiI0UzMjlBRVwiLCBcIiM0M0NGN0NcIiwgXCIjNzk0OEVBXCIsIFwiI0ZGQzMwMFwiLCBcIiNGRjhEMUFcIl07XG4gICAgICAgIGxldCBjb3VudCA9IFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmNvdW50O1xuXG4gICAgICAgIHRoaXMuY3ViZVJvb3ROb2RlLmdldENoaWxkQnlOYW1lKFwiZmlyc3RTdGVwXCIpLm9wYWNpdHkgPSAwO1xuICAgICAgICB0aGlzLmN1YmVSb290Tm9kZS5nZXRDaGlsZEJ5TmFtZShcInNlY29uZFN0ZXBcIikub3BhY2l0eSA9IDI1NTtcbiAgICAgICAgdGhpcy5zZWNvbmRTdGVwQmlnQ3ViZS5mb3JFYWNoKGN1YmUgPT4ge1xuICAgICAgICAgICAgY3ViZS5jaGlsZHJlbi5mb3JFYWNoKG5vZGUgPT4ge1xuICAgICAgICAgICAgICAgIG5vZGUub3BhY2l0eSA9IDA7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IGN1YmVXaWR0aCA9IDE7XG4gICAgICAgIGxldCBjdWJlSGVpZ2h0ID0gMTtcbiAgICAgICAgbGV0IGN1YmVMZW5ndGggPSAxO1xuICAgICAgICBsZXQgY3ViZURpcyA9IDA7XG4gICAgICAgIGxldCBjdWJlWERpcyA9IGN1YmVXaWR0aCArIGN1YmVEaXM7XG4gICAgICAgIGxldCBjdWJlWURpcyA9IGN1YmVIZWlnaHQgKyBjdWJlRGlzO1xuICAgICAgICBsZXQgY3ViZVpEaXMgPSBjdWJlTGVuZ3RoICsgY3ViZURpcztcbiAgICAgICAgbGV0IGN1YmVTdGFydFggPSAtY291bnQgKiBjdWJlWERpcyAvIDIgKyBjdWJlWERpcyAvIDI7XG5cbiAgICAgICAgdGhpcy5zZWNvbmRTdGVwQmlnQ3ViZVswXS5wYXJlbnQueSA9IDU7XG4gICAgICAgIHRoaXMuc2Vjb25kU3RlcEJpZ0N1YmVbM10ucGFyZW50LnkgPSAtNTtcblxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgNjsgaW5kZXgrKykge1xuICAgICAgICAgICAgbGV0IG5vZGUgPSB0aGlzLnNlY29uZFN0ZXBCaWdDdWJlW2luZGV4XTtcbiAgICAgICAgICAgIG5vZGUuc2NhbGUgPSAxICsgKDggLSBjb3VudCkgKiAwLjE1O1xuICAgICAgICAgICAgbm9kZS5pczNETm9kZSA9IHRydWU7XG4gICAgICAgICAgICBpZiAoaW5kZXggPT0gMyB8fCBpbmRleCA9PSAxIHx8IGluZGV4ID09IDUpIHtcbiAgICAgICAgICAgICAgICBub2RlLmV1bGVyQW5nbGVzID0gY2MudjMoMCwgLTkwLCAwKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy/liIbmiJDkuKTooYzkuInliJfvvIzlsYXkuK1cbiAgICAgICAgICAgIGxldCByb3cgPSBNYXRoLmZsb29yKGluZGV4IC8gMyk7XG4gICAgICAgICAgICBsZXQgY29sID0gaW5kZXggJSAzO1xuICAgICAgICAgICAgbGV0IHBvc1ggPSAwO1xuICAgICAgICAgICAgbGV0IHBvc1kgPSAwO1xuICAgICAgICAgICAgLy8gaWYgKHJvdyA9PSAwKSB7XG4gICAgICAgICAgICAvLyAgICAgcG9zWSA9IDU7XG4gICAgICAgICAgICAvLyB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gICAgIHBvc1kgPSAtNTtcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIGlmIChjb2wgPT0gMCkge1xuICAgICAgICAgICAgICAgIHBvc1ggPSAtMTA7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNvbCA9PSAxKSB7XG4gICAgICAgICAgICAgICAgcG9zWCA9IDA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBvc1ggPSAxMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5vZGUuc2V0UG9zaXRpb24ocG9zWCwgMCwgMCk7XG5cbiAgICAgICAgICAgIGlmICghdGhpcy5zZWNvbmRTdGVwTm9kZVtpbmRleF0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlY29uZFN0ZXBOb2RlW2luZGV4XSA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjb3VudCAtIGk7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IGNvdW50IC0gaTsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgc21hbGxDdWJlTm9kZSA9IHRoaXMuc2Vjb25kU3RlcE5vZGVbaW5kZXhdW2kgKiBjb3VudCAqIGNvdW50ICsgaiAqIGNvdW50ICsga107XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXNtYWxsQ3ViZU5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbWFsbEN1YmVOb2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5jdWJlUHJlZmFiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbWFsbEN1YmVOb2RlLnBhcmVudCA9IG5vZGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWNvbmRTdGVwTm9kZVtpbmRleF0ucHVzaChzbWFsbEN1YmVOb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNtYWxsQ3ViZU5vZGUub3BhY2l0eSA9IDI1NTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNtYWxsQ3ViZU5vZGUuc2V0UG9zaXRpb24oY3ViZVN0YXJ0WCArIGogKiBjdWJlWURpcywgY3ViZVN0YXJ0WCArIGkgKiBjdWJlWERpcywgY3ViZVN0YXJ0WCArIGsgKiBjdWJlWkRpcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBmYWNlID0gMDsgZmFjZSA8IDY7IGZhY2UrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmYWNlTm9kZSA9IHNtYWxsQ3ViZU5vZGUuZ2V0Q2hpbGRCeU5hbWUoKGZhY2UgKyAxKS50b1N0cmluZygpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbWF0ZXJpYWwgPSBmYWNlTm9kZS5nZXRDb21wb25lbnQoY2MuTWVzaFJlbmRlcmVyKS5nZXRNYXRlcmlhbCgwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY29sb3IgPSBjYy5Db2xvci5XSElURS5mcm9tSEVYKGNvbG9yQXJyW2luZGV4XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0ZXJpYWwuc2V0UHJvcGVydHkoXCJkaWZmdXNlQ29sb3JcIiwgY29sb3IsIDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHJvdGF0aW9uKCkge1xuICAgICAgICBsZXQgY291bnQgPSBTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5jb3VudDtcbiAgICAgICAgbGV0IHNjYWxlID0gMSArICg4IC0gY291bnQpICogMC4xNTtcbiAgICAgICAgbGV0IG5vZGVfMCA9IHRoaXMuc2Vjb25kU3RlcEJpZ0N1YmVbMF1cbiAgICAgICAgbm9kZV8wLmlzM0ROb2RlID0gdHJ1ZTtcbiAgICAgICAgY2MudHdlZW4obm9kZV8wKS50bygxLCB7IGV1bGVyQW5nbGVzOiBjYy52MygtOTAsIDAsIDApLCB6OiBzY2FsZSB9KS5zdGFydCgpO1xuXG4gICAgICAgIGxldCBub2RlXzEgPSB0aGlzLnNlY29uZFN0ZXBCaWdDdWJlWzFdXG4gICAgICAgIG5vZGVfMS5pczNETm9kZSA9IHRydWU7XG4gICAgICAgIGNjLnR3ZWVuKG5vZGVfMSkudG8oMSwgeyBldWxlckFuZ2xlczogY2MudjMoMTgwLCAtOTAsIDApIH0pLnN0YXJ0KCk7XG5cbiAgICAgICAgbGV0IG5vZGVfMiA9IHRoaXMuc2Vjb25kU3RlcEJpZ0N1YmVbMl1cbiAgICAgICAgbm9kZV8yLmlzM0ROb2RlID0gdHJ1ZTtcbiAgICAgICAgY2MudHdlZW4obm9kZV8yKS50bygxLCB7IGV1bGVyQW5nbGVzOiBjYy52MygwLCAwLCA5MCksIHk6IC1zY2FsZSB9KS5zdGFydCgpO1xuXG4gICAgICAgIGxldCBub2RlXzMgPSB0aGlzLnNlY29uZFN0ZXBCaWdDdWJlWzNdXG4gICAgICAgIG5vZGVfMy5pczNETm9kZSA9IHRydWU7XG4gICAgICAgIGNjLnR3ZWVuKG5vZGVfMykudG8oMSwgeyBldWxlckFuZ2xlczogY2MudjMoOTAsIDkwLCAwKSwgejogc2NhbGUgfSkuc3RhcnQoKTtcblxuICAgICAgICBsZXQgbm9kZV80ID0gdGhpcy5zZWNvbmRTdGVwQmlnQ3ViZVs0XVxuICAgICAgICBub2RlXzQuaXMzRE5vZGUgPSB0cnVlO1xuICAgICAgICBjYy50d2Vlbihub2RlXzQpLnRvKDEsIHsgZXVsZXJBbmdsZXM6IGNjLnYzKDAsIDE4MCwgMCksIHk6IC1zY2FsZSwgejogc2NhbGUgfSkuc3RhcnQoKTtcblxuICAgICAgICBsZXQgbm9kZV81ID0gdGhpcy5zZWNvbmRTdGVwQmlnQ3ViZVs1XVxuICAgICAgICBub2RlXzUuaXMzRE5vZGUgPSB0cnVlO1xuICAgICAgICBjYy50d2Vlbihub2RlXzUpLnRvKDEsIHsgZXVsZXJBbmdsZXM6IGNjLnYzKDAsIC05MCwgLTkwKSwgeTogLXNjYWxlIH0pLnN0YXJ0KCk7XG5cbiAgICAgICAgbGV0IHNsaWRlciA9IHRoaXMuc2xpZGVyUm90YXRlLmdldENvbXBvbmVudChjYy5TbGlkZXIpO1xuICAgICAgICBjYy50d2VlbihzbGlkZXIpLnRvKDEsIHsgcHJvZ3Jlc3M6IDEgfSkuc3RhcnQoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbWVyZ2UoKSB7XG4gICAgICAgIGxldCBzbGlkZXIgPSB0aGlzLnNsaWRlck1lcmdlLmdldENvbXBvbmVudChjYy5TbGlkZXIpO1xuICAgICAgICBjYy50d2VlbihzbGlkZXIpLnRvKDUsIHsgcHJvZ3Jlc3M6IDEgfSkuc3RhcnQoKTtcblxuICAgICAgICBsZXQgbm9kZV8wID0gdGhpcy5zZWNvbmRTdGVwQmlnQ3ViZVswXTtcbiAgICAgICAgbGV0IG5vZGVfMSA9IHRoaXMuc2Vjb25kU3RlcEJpZ0N1YmVbMV07XG4gICAgICAgIGxldCBub2RlXzIgPSB0aGlzLnNlY29uZFN0ZXBCaWdDdWJlWzJdO1xuICAgICAgICBsZXQgbm9kZV8zID0gdGhpcy5zZWNvbmRTdGVwQmlnQ3ViZVszXTtcbiAgICAgICAgbGV0IG5vZGVfNCA9IHRoaXMuc2Vjb25kU3RlcEJpZ0N1YmVbNF07XG4gICAgICAgIGxldCBub2RlXzUgPSB0aGlzLnNlY29uZFN0ZXBCaWdDdWJlWzVdO1xuXG4gICAgICAgIGxldCBjb3VudCA9IFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmNvdW50O1xuICAgICAgICBsZXQgc2NhbGUgPSAxICsgKDggLSBjb3VudCkgKiAwLjE1O1xuXG4gICAgICAgIFNvdW5kTWFuYWdlci5zdG9wU291bmRCeU5hbWUoXCLnp7vliqhcIik7XG4gICAgICAgIFNvdW5kTWFuYWdlci5wbGF5RWZmZWN0KFwi56e75YqoXCIsIGZhbHNlKTtcbiAgICAgICAgY2MudHdlZW4obm9kZV8wKS50bygxLCB7IHg6IDAgfSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICBTb3VuZE1hbmFnZXIuc3RvcFNvdW5kQnlOYW1lKFwi5ou8XCIpO1xuICAgICAgICAgICAgU291bmRNYW5hZ2VyLnBsYXlFZmZlY3QoXCLmi7xcIiwgZmFsc2UsIGZhbHNlKTtcbiAgICAgICAgICAgIFNvdW5kTWFuYWdlci5zdG9wU291bmRCeU5hbWUoXCLnp7vliqhcIik7XG4gICAgICAgICAgICBTb3VuZE1hbmFnZXIucGxheUVmZmVjdChcIuenu+WKqFwiLCBmYWxzZSwgZmFsc2UpO1xuICAgICAgICAgICAgY2MudHdlZW4obm9kZV8yKS50bygxLCB7IHg6IDAsIHk6IC1zY2FsZSB9KS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICBTb3VuZE1hbmFnZXIuc3RvcFNvdW5kQnlOYW1lKFwi5ou8XCIpO1xuICAgICAgICAgICAgICAgIFNvdW5kTWFuYWdlci5wbGF5RWZmZWN0KFwi5ou8XCIsIGZhbHNlLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgU291bmRNYW5hZ2VyLnN0b3BTb3VuZEJ5TmFtZShcIuenu+WKqFwiKTtcbiAgICAgICAgICAgICAgICBTb3VuZE1hbmFnZXIucGxheUVmZmVjdChcIuenu+WKqFwiLCBmYWxzZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKG5vZGVfMykudG8oMSwgeyB4OiAwIH0pLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBTb3VuZE1hbmFnZXIuc3RvcFNvdW5kQnlOYW1lKFwi5ou8XCIpO1xuICAgICAgICAgICAgICAgICAgICBTb3VuZE1hbmFnZXIucGxheUVmZmVjdChcIuaLvFwiLCBmYWxzZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICBTb3VuZE1hbmFnZXIuc3RvcFNvdW5kQnlOYW1lKFwi56e75YqoXCIpO1xuICAgICAgICAgICAgICAgICAgICBTb3VuZE1hbmFnZXIucGxheUVmZmVjdChcIuenu+WKqFwiLCBmYWxzZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICBjYy50d2Vlbihub2RlXzUpLnRvKDEsIHsgeDogMCB9KS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFNvdW5kTWFuYWdlci5zdG9wU291bmRCeU5hbWUoXCLmi7xcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBTb3VuZE1hbmFnZXIucGxheUVmZmVjdChcIuaLvFwiLCBmYWxzZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgU291bmRNYW5hZ2VyLnN0b3BTb3VuZEJ5TmFtZShcIuenu+WKqFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFNvdW5kTWFuYWdlci5wbGF5RWZmZWN0KFwi56e75YqoXCIsIGZhbHNlLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYy50d2Vlbihub2RlXzAucGFyZW50KS50bygxLCB7IHk6IE1hdGguZmxvb3IoY291bnQgLyAyKSAqIHNjYWxlIH0pLmNhbGwoKCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS5zdGFydCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4obm9kZV8zLnBhcmVudCkudG8oMSwgeyB5OiAtTWF0aC5mbG9vcihjb3VudCAvIDIpICogc2NhbGUgfSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU291bmRNYW5hZ2VyLnN0b3BTb3VuZEJ5TmFtZShcIuaLvFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTb3VuZE1hbmFnZXIucGxheUVmZmVjdChcIuaLvFwiLCBmYWxzZSwgZmFsc2UpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS5zdGFydCgpO1xuICAgICAgICAgICAgICAgICAgICB9KS5zdGFydCgpO1xuICAgICAgICAgICAgICAgIH0pLnN0YXJ0KCk7XG4gICAgICAgICAgICB9KS5zdGFydCgpO1xuICAgICAgICB9KS5zdGFydCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjb250cm9sUm90YXRlKHByb2dyZXNzOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5zdG9wQWxsVHdlZW4oKTtcbiAgICAgICAgdGhpcy5zZWNvbmRTdGVwQmlnQ3ViZVswXS5ldWxlckFuZ2xlcyA9IGNjLnYzKC05MCAqIHByb2dyZXNzLCAwLCAwKTtcbiAgICAgICAgdGhpcy5zZWNvbmRTdGVwQmlnQ3ViZVsxXS5ldWxlckFuZ2xlcyA9IGNjLnYzKDE4MCAqIHByb2dyZXNzLCAtOTAsIDApO1xuICAgICAgICB0aGlzLnNlY29uZFN0ZXBCaWdDdWJlWzJdLmV1bGVyQW5nbGVzID0gY2MudjMoMCwgMCwgOTAgKiBwcm9ncmVzcyk7XG4gICAgICAgIHRoaXMuc2Vjb25kU3RlcEJpZ0N1YmVbM10uZXVsZXJBbmdsZXMgPSBjYy52Myg5MCAqIHByb2dyZXNzLCAtOTAgKiAoMSAtIHByb2dyZXNzKSArIDkwICogcHJvZ3Jlc3MsIDApO1xuICAgICAgICB0aGlzLnNlY29uZFN0ZXBCaWdDdWJlWzRdLmV1bGVyQW5nbGVzID0gY2MudjMoMCwgMTgwICogcHJvZ3Jlc3MsIDApO1xuICAgICAgICB0aGlzLnNlY29uZFN0ZXBCaWdDdWJlWzVdLmV1bGVyQW5nbGVzID0gY2MudjMoMCwgLTkwLCAtOTAgKiBwcm9ncmVzcyk7XG4gICAgfVxuXG4gICAgcHVibGljIGNvbnRyb2xNZXJnZShwcm9ncmVzczogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuc3RvcEFsbFR3ZWVuKCk7XG4gICAgICAgIGxldCBjb3VudCA9IFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmNvdW50O1xuICAgICAgICBsZXQgc2NhbGUgPSAxICsgKDggLSBjb3VudCkgKiAwLjE1O1xuICAgICAgICBpZiAocHJvZ3Jlc3MgKiA1IDwgMSkge1xuICAgICAgICAgICAgdGhpcy5zZWNvbmRTdGVwQmlnQ3ViZVswXS5wYXJlbnQueSA9IDU7XG4gICAgICAgICAgICB0aGlzLnNlY29uZFN0ZXBCaWdDdWJlWzNdLnBhcmVudC55ID0gLTU7XG5cbiAgICAgICAgICAgIHRoaXMuc2Vjb25kU3RlcEJpZ0N1YmVbMF0ueCA9IC0xMCAqICgxIC0gcHJvZ3Jlc3MgKiA1KTtcbiAgICAgICAgICAgIHRoaXMuc2Vjb25kU3RlcEJpZ0N1YmVbMF0ueiA9IHNjYWxlO1xuXG4gICAgICAgICAgICB0aGlzLnNlY29uZFN0ZXBCaWdDdWJlWzFdLnBvc2l0aW9uID0gY2MudjMoMCwgMCwgMCk7XG5cbiAgICAgICAgICAgIHRoaXMuc2Vjb25kU3RlcEJpZ0N1YmVbMl0ueCA9IDEwO1xuICAgICAgICAgICAgdGhpcy5zZWNvbmRTdGVwQmlnQ3ViZVsyXS55ID0gLXNjYWxlO1xuXG4gICAgICAgICAgICB0aGlzLnNlY29uZFN0ZXBCaWdDdWJlWzNdLnggPSAtMTA7XG4gICAgICAgICAgICB0aGlzLnNlY29uZFN0ZXBCaWdDdWJlWzNdLnogPSBzY2FsZTtcblxuICAgICAgICAgICAgdGhpcy5zZWNvbmRTdGVwQmlnQ3ViZVs0XS55ID0gLXNjYWxlO1xuICAgICAgICAgICAgdGhpcy5zZWNvbmRTdGVwQmlnQ3ViZVs0XS56ID0gc2NhbGU7XG5cbiAgICAgICAgICAgIHRoaXMuc2Vjb25kU3RlcEJpZ0N1YmVbNV0ueCA9IDEwO1xuICAgICAgICAgICAgdGhpcy5zZWNvbmRTdGVwQmlnQ3ViZVs1XS55ID0gLXNjYWxlO1xuICAgICAgICB9IGVsc2UgaWYgKHByb2dyZXNzICogNSA8IDIpIHtcbiAgICAgICAgICAgIHRoaXMuc2Vjb25kU3RlcEJpZ0N1YmVbMF0ucGFyZW50LnkgPSA1O1xuICAgICAgICAgICAgdGhpcy5zZWNvbmRTdGVwQmlnQ3ViZVszXS5wYXJlbnQueSA9IC01O1xuXG4gICAgICAgICAgICB0aGlzLnNlY29uZFN0ZXBCaWdDdWJlWzBdLnggPSAwO1xuICAgICAgICAgICAgdGhpcy5zZWNvbmRTdGVwQmlnQ3ViZVswXS56ID0gc2NhbGU7XG5cbiAgICAgICAgICAgIHRoaXMuc2Vjb25kU3RlcEJpZ0N1YmVbMV0ucG9zaXRpb24gPSBjYy52MygwLCAwLCAwKTtcblxuICAgICAgICB9IGVsc2UgaWYgKHByb2dyZXNzICogNSA8IDMpIHtcbiAgICAgICAgICAgIHRoaXMuc2Vjb25kU3RlcEJpZ0N1YmVbMF0ucGFyZW50LnkgPSA1O1xuICAgICAgICAgICAgdGhpcy5zZWNvbmRTdGVwQmlnQ3ViZVszXS5wYXJlbnQueSA9IC01O1xuXG4gICAgICAgICAgICB0aGlzLnNlY29uZFN0ZXBCaWdDdWJlWzBdLnggPSAwO1xuICAgICAgICAgICAgdGhpcy5zZWNvbmRTdGVwQmlnQ3ViZVswXS56ID0gc2NhbGU7XG5cbiAgICAgICAgICAgIHRoaXMuc2Vjb25kU3RlcEJpZ0N1YmVbMV0ucG9zaXRpb24gPSBjYy52MygwLCAwLCAwKTtcbiAgICAgICAgfSBlbHNlIGlmIChwcm9ncmVzcyAqIDUgPCA0KSB7XG4gICAgICAgICAgICB0aGlzLnNlY29uZFN0ZXBCaWdDdWJlWzBdLnBhcmVudC55ID0gNTtcbiAgICAgICAgICAgIHRoaXMuc2Vjb25kU3RlcEJpZ0N1YmVbM10ucGFyZW50LnkgPSAtNTtcblxuICAgICAgICAgICAgdGhpcy5zZWNvbmRTdGVwQmlnQ3ViZVswXS54ID0gMDtcbiAgICAgICAgICAgIHRoaXMuc2Vjb25kU3RlcEJpZ0N1YmVbMF0ueiA9IHNjYWxlO1xuXG4gICAgICAgICAgICB0aGlzLnNlY29uZFN0ZXBCaWdDdWJlWzFdLnBvc2l0aW9uID0gY2MudjMoMCwgMCwgMCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNlY29uZFN0ZXBCaWdDdWJlWzBdLnggPSAwO1xuICAgICAgICAgICAgdGhpcy5zZWNvbmRTdGVwQmlnQ3ViZVswXS56ID0gc2NhbGU7XG5cbiAgICAgICAgICAgIHRoaXMuc2Vjb25kU3RlcEJpZ0N1YmVbMV0ucG9zaXRpb24gPSBjYy52MygwLCAwLCAwKTtcblxuICAgICAgICAgICAgdGhpcy5zZWNvbmRTdGVwQmlnQ3ViZVsyXS54ID0gMDtcbiAgICAgICAgICAgIHRoaXMuc2Vjb25kU3RlcEJpZ0N1YmVbMl0ueSA9IC1zY2FsZTtcblxuXG4gICAgICAgICAgICB0aGlzLnNlY29uZFN0ZXBCaWdDdWJlWzNdLnggPSAwO1xuICAgICAgICAgICAgdGhpcy5zZWNvbmRTdGVwQmlnQ3ViZVszXS56ID0gc2NhbGU7XG5cbiAgICAgICAgICAgIHRoaXMuc2Vjb25kU3RlcEJpZ0N1YmVbNF0ueSA9IC1zY2FsZTtcbiAgICAgICAgICAgIHRoaXMuc2Vjb25kU3RlcEJpZ0N1YmVbNF0ueiA9IHNjYWxlO1xuXG4gICAgICAgICAgICB0aGlzLnNlY29uZFN0ZXBCaWdDdWJlWzVdLnggPSAwO1xuICAgICAgICAgICAgdGhpcy5zZWNvbmRTdGVwQmlnQ3ViZVs1XS55ID0gLXNjYWxlO1xuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHN0b3BBbGxUd2VlbigpIHtcbiAgICAgICAgdGhpcy5zZWNvbmRTdGVwQmlnQ3ViZS5mb3JFYWNoKGN1YmUgPT4ge1xuICAgICAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KGN1YmUpO1xuICAgICAgICB9KTtcbiAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KHRoaXMuc2Vjb25kU3RlcEJpZ0N1YmVbMF0ucGFyZW50KTtcbiAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KHRoaXMuc2Vjb25kU3RlcEJpZ0N1YmVbM10ucGFyZW50KTtcbiAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KHRoaXMuc2xpZGVyUm90YXRlLmdldENvbXBvbmVudChjYy5TbGlkZXIpKTtcbiAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KHRoaXMuc2xpZGVyTWVyZ2UuZ2V0Q29tcG9uZW50KGNjLlNsaWRlcikpO1xuICAgIH1cbn1cbiJdfQ==