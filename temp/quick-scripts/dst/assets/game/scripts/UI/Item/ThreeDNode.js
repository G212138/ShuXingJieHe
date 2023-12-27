
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
        cc.Quat.fromEuler(quat, 15, -25, -5);
        this.cubeRootNode.setRotation(quat);
        // this.initBigCube();
        // let topPos = cc.v3(0, 0, 0);
        // let rightPos = cc.v3(0, 0, 0);
        // let bottomPos = cc.v3(0, 0, 0);
        // let topWidth = 0;
        // let rightHeight = 0;
        // let bottomHeight = 0;
        // switch (SyncDataManager.getSyncData().customSyncData.count) {
        //     case 2:
        //         topPos = cc.v3(25, 155, 0);
        //         rightPos = cc.v3(147, 0, 0);
        //         bottomPos = cc.v3(0, -155, 0);
        //         topWidth = 107;
        //         rightHeight = 240;
        //         bottomHeight = 180;
        //         break;
        //     case 3:
        //         break;
        //     case 4:
        //         break;
        //     case 5:
        //         break;
        //     case 6:
        //         break;
        //     case 7:
        //         break;
        //     case 8:
        //         break;
        // }
        var count = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.count;
        var scale = 1 + (8 - count) * 0.15;
        var cubeStartX = -count / 2;
        var zuobiao_node = this.node.getChildByName("zuobiao_node");
        zuobiao_node.active = true;
        var top = zuobiao_node.getChildByName("top");
        top.width = (count * scale / 0.03) * 0.85;
        top.setRotation(quat);
        top.y = count * scale / 0.03 + 30;
        top.x = cubeStartX + top.width / 4 - 1;
        top.getChildByName("lbl_count").getComponent(cc.Label).string = count.toString();
        top.getChildByName("line_1").width = top.width / 2 - 30;
        top.getChildByName("line_2").width = top.width / 2 - 30;
        // console.log("top.width", top.width);
        // console.log("top.pos", top.position);
        var right = zuobiao_node.getChildByName("right");
        right.height = ((2 * count + 1) * scale / 0.03) * 0.75;
        right.x = count * scale / 0.03 + (count > 2 ? 0 : count * 10);
        right.y = count * 5;
        right.getChildByName("lbl_count").getComponent(cc.Label).string = "(" + count + "x2+1)";
        right.getChildByName("line_1").height = right.height / 2 - 30;
        right.getChildByName("line_2").height = right.height / 2 - 30;
        // console.log("right.height", right.height);
        // console.log("right.pos", right.position);
        var bottom = zuobiao_node.getChildByName("bottom");
        bottom.height = ((2 * count + 1) * scale / 0.03) * 0.45 - count * 5;
        bottom.x = count * scale / 0.03 - (count * 10);
        bottom.y = -count * scale / 0.03 - ((count) * 10) - (count < 5 ? bottom.height / count : -2 * count);
        bottom.getChildByName("line_1").height = bottom.height / 2 - 30;
        bottom.getChildByName("line_2").height = bottom.height / 2 - 30;
        bottom.getChildByName("lbl_count").getComponent(cc.Label).string = "(" + count + "+1)";
        var bottomquat = new cc.Quat();
        cc.Quat.fromEuler(bottomquat, 0, 0, -5 * scale - 10);
        bottom.setRotation(bottomquat);
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
        if (progress * 5 <= 1) {
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
        else if (progress * 5 <= 2) {
            this.secondStepBigCube[0].parent.y = 5;
            this.secondStepBigCube[3].parent.y = -5;
            this.secondStepBigCube[0].x = 0;
            this.secondStepBigCube[0].z = scale;
            this.secondStepBigCube[1].position = cc.v3(0, 0, 0);
            this.secondStepBigCube[2].x = 10 * (2 - progress * 5);
            this.secondStepBigCube[2].y = -scale;
            this.secondStepBigCube[3].x = -10;
            this.secondStepBigCube[3].z = scale;
            this.secondStepBigCube[4].y = -scale;
            this.secondStepBigCube[4].z = scale;
            this.secondStepBigCube[5].x = 10;
            this.secondStepBigCube[5].y = -scale;
        }
        else if (progress * 5 <= 3) {
            this.secondStepBigCube[0].parent.y = 5;
            this.secondStepBigCube[3].parent.y = -5;
            this.secondStepBigCube[0].x = 0;
            this.secondStepBigCube[0].z = scale;
            this.secondStepBigCube[1].position = cc.v3(0, 0, 0);
            this.secondStepBigCube[2].x = 0;
            this.secondStepBigCube[2].y = -scale;
            this.secondStepBigCube[3].x = -10 * (3 - progress * 5);
            this.secondStepBigCube[3].z = scale;
            this.secondStepBigCube[4].y = -scale;
            this.secondStepBigCube[4].z = scale;
            this.secondStepBigCube[5].x = 10;
            this.secondStepBigCube[5].y = -scale;
        }
        else if (progress * 5 <= 4) {
            this.secondStepBigCube[0].parent.y = 5;
            this.secondStepBigCube[3].parent.y = -5;
            this.secondStepBigCube[0].x = 0;
            this.secondStepBigCube[0].z = scale;
            this.secondStepBigCube[1].position = cc.v3(0, 0, 0);
            this.secondStepBigCube[2].x = 0;
            this.secondStepBigCube[2].y = -scale;
            this.secondStepBigCube[3].x = 0;
            this.secondStepBigCube[3].z = scale;
            this.secondStepBigCube[4].y = -scale;
            this.secondStepBigCube[4].z = scale;
            this.secondStepBigCube[5].x = 10 * (4 - progress * 5);
            this.secondStepBigCube[5].y = -scale;
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
            var offset = Math.floor(count / 2) * scale * (5 - progress * 5) > 0 ? Math.floor(count / 2) * scale * (5 - progress * 5) : 0;
            this.secondStepBigCube[0].parent.y = Math.floor(count / 2) * scale + offset > 5 ? 5 : Math.floor(count / 2) * scale + offset;
            this.secondStepBigCube[3].parent.y = -Math.floor(count / 2) * scale - offset < -5 ? -5 : -Math.floor(count / 2) * scale - offset;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZVxcc2NyaXB0c1xcVUlcXEl0ZW1cXFRocmVlRE5vZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0VBQThFO0FBQzlFLHFGQUFvRjtBQUc5RSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF1Qyw2QkFBWTtJQUFuRDtRQUFBLHFFQW9jQztRQWxjVyxnQkFBVSxHQUFjLElBQUksQ0FBQztRQUU3QixrQkFBWSxHQUFZLElBQUksQ0FBQztRQUU3Qix1QkFBaUIsR0FBYyxFQUFFLENBQUM7UUFFbEMsa0JBQVksR0FBWSxJQUFJLENBQUM7UUFFN0IsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFHNUIsbUJBQWEsR0FBYyxFQUFFLENBQUM7UUFDOUIsb0JBQWMsR0FBZ0IsRUFBRSxDQUFDOztJQXNiN0MsQ0FBQztJQW5iRywwQkFBTSxHQUFOO1FBQ0ksd0NBQXdDO1FBQ3hDLDJEQUEyRDtRQUMzRCw0RUFBNEU7UUFDNUUsaUNBQWlDO1FBQ2pDLDhDQUE4QztRQUM5QyxJQUFJO1FBQ0osZ0NBQWdDO1FBQ2hDLG9DQUFvQztRQUNwQyw0Q0FBNEM7UUFDNUMsZ0VBQWdFO1FBQ2hFLG9IQUFvSDtRQUNwSCxzQ0FBc0M7UUFDdEMsdURBQXVEO1FBQ3ZELFFBQVE7UUFDUixJQUFJO0lBQ1IsQ0FBQztJQUVELDZCQUFTLEdBQVQ7SUFFQSxDQUFDO0lBRU0sd0JBQUksR0FBWDtRQUNJLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRU0sNkJBQVMsR0FBaEI7UUFDSSxJQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFD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TSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUN0QyxNQUFNLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUN2QixFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxXQUFXLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFNUUsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ3RDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLFdBQVcsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFcEUsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ3RDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLFdBQVcsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUU1RSxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDdEMsTUFBTSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDdkIsRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsV0FBVyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUU1RSxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDdEMsTUFBTSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDdkIsRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsV0FBVyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFdkYsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ3RDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLFdBQVcsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFL0UsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3ZELEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLFFBQVEsRUFBRSxDQUFDLEVB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QyxFQUFFLENBQUMsSUFBSSxDQUFDO21EQUNtQjtJQUVyQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3dEQUN3QjtJQUUxQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO21EQUNtQjtJQUVyQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2tEQUNrQjtJQVZuQixTQUFTO1FBRDdCLE9BQU87T0FDYSxTQUFTLENBb2M3QjtJQUFELGdCQUFDO0NBcGNELEFBb2NDLENBcGNzQyxFQUFFLENBQUMsU0FBUyxHQW9jbEQ7a0JBcGNvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU291bmRNYW5hZ2VyIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2ZyYW1lL3NjcmlwdHMvTWFuYWdlci9Tb3VuZE1hbmFnZXJcIjtcbmltcG9ydCB7IFN5bmNEYXRhTWFuYWdlciB9IGZyb20gXCIuLi8uLi8uLi8uLi9mcmFtZS9zY3JpcHRzL01hbmFnZXIvU3luY0RhdGFNYW5hZ2VyXCI7XG5pbXBvcnQgeyBTb3VuZENvbmZpZyB9IGZyb20gXCIuL1NvdW5kQ29uZmlnXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaHJlZU5vZGUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgcHJpdmF0ZSBjdWJlUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHByaXZhdGUgY3ViZVJvb3ROb2RlOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBwcml2YXRlIHNlY29uZFN0ZXBCaWdDdWJlOiBjYy5Ob2RlW10gPSBbXTtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBwcml2YXRlIHNsaWRlclJvdGF0ZTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcHJpdmF0ZSBzbGlkZXJNZXJnZTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBwcml2YXRlIHRvdWNoRXZlbnRJZDogbnVtYmVyO1xuICAgIHByaXZhdGUgZmlyc3RTdGVwTm9kZTogY2MuTm9kZVtdID0gW107XG4gICAgcHJpdmF0ZSBzZWNvbmRTdGVwTm9kZTogY2MuTm9kZVtdW10gPSBbXTtcblxuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IDggKiA4ICogODsgaSsrKSB7XG4gICAgICAgIC8vICAgICBsZXQgc21hbGxDdWJlTm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuY3ViZVByZWZhYik7XG4gICAgICAgIC8vICAgICBzbWFsbEN1YmVOb2RlLnBhcmVudCA9IHRoaXMuY3ViZVJvb3ROb2RlLmdldENoaWxkQnlOYW1lKFwiZmlyc3RTdGVwXCIpO1xuICAgICAgICAvLyAgICAgc21hbGxDdWJlTm9kZS5vcGFjaXR5ID0gMDtcbiAgICAgICAgLy8gICAgIHRoaXMuZmlyc3RTdGVwTm9kZS5wdXNoKHNtYWxsQ3ViZU5vZGUpO1xuICAgICAgICAvLyB9XG4gICAgICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgNjsgaSsrKSB7XG4gICAgICAgIC8vICAgICB0aGlzLnNlY29uZFN0ZXBOb2RlLnB1c2goW10pO1xuICAgICAgICAvLyAgICAgZm9yIChsZXQgaiA9IDA7IGogPCA4ICogOCAqIDg7IGorKykge1xuICAgICAgICAvLyAgICAgICAgIGxldCBzbWFsbEN1YmVOb2RlMiA9IGNjLmluc3RhbnRpYXRlKHRoaXMuY3ViZVByZWZhYik7XG4gICAgICAgIC8vICAgICAgICAgc21hbGxDdWJlTm9kZTIucGFyZW50ID0gdGhpcy5jdWJlUm9vdE5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJzZWNvbmRTdGVwXCIpLmdldENoaWxkQnlOYW1lKFwic2Vjb25kU3RlcF9cIiArIGkpO1xuICAgICAgICAvLyAgICAgICAgIHNtYWxsQ3ViZU5vZGUyLm9wYWNpdHkgPSAwO1xuICAgICAgICAvLyAgICAgICAgIHRoaXMuc2Vjb25kU3RlcE5vZGVbaV0ucHVzaChzbWFsbEN1YmVOb2RlMik7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH1cbiAgICB9XG5cbiAgICBvbkRlc3Ryb3koKSB7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5pbml0QmlnQ3ViZSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzaG93U3RlcDIoKSB7XG4gICAgICAgIHRoaXMuY3ViZVJvb3ROb2RlLmdldENoaWxkQnlOYW1lKFwiZmlyc3RTdGVwXCIpLm9wYWNpdHkgPSAwO1xuICAgICAgICB0aGlzLmN1YmVSb290Tm9kZS5nZXRDaGlsZEJ5TmFtZShcInNlY29uZFN0ZXBcIikub3BhY2l0eSA9IDI1NTtcbiAgICAgICAgdGhpcy5zaG93U2Vjb25kU3RlcCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyByZXNldCgpIHtcbiAgICAgICAgbGV0IHF1YXQgPSBuZXcgY2MuUXVhdCgpXG4gICAgICAgIGNjLlF1YXQuZnJvbUV1bGVyKHF1YXQsIDE1LCAtMjUsIC01KVxuICAgICAgICB0aGlzLmN1YmVSb290Tm9kZS5zZXRSb3RhdGlvbihxdWF0KTtcbiAgICAgICAgLy8gdGhpcy5pbml0QmlnQ3ViZSgpO1xuXG4gICAgICAgIC8vIGxldCB0b3BQb3MgPSBjYy52MygwLCAwLCAwKTtcbiAgICAgICAgLy8gbGV0IHJpZ2h0UG9zID0gY2MudjMoMCwgMCwgMCk7XG4gICAgICAgIC8vIGxldCBib3R0b21Qb3MgPSBjYy52MygwLCAwLCAwKTtcbiAgICAgICAgLy8gbGV0IHRvcFdpZHRoID0gMDtcbiAgICAgICAgLy8gbGV0IHJpZ2h0SGVpZ2h0ID0gMDtcbiAgICAgICAgLy8gbGV0IGJvdHRvbUhlaWdodCA9IDA7XG4gICAgICAgIC8vIHN3aXRjaCAoU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuY291bnQpIHtcbiAgICAgICAgLy8gICAgIGNhc2UgMjpcbiAgICAgICAgLy8gICAgICAgICB0b3BQb3MgPSBjYy52MygyNSwgMTU1LCAwKTtcbiAgICAgICAgLy8gICAgICAgICByaWdodFBvcyA9IGNjLnYzKDE0NywgMCwgMCk7XG4gICAgICAgIC8vICAgICAgICAgYm90dG9tUG9zID0gY2MudjMoMCwgLTE1NSwgMCk7XG4gICAgICAgIC8vICAgICAgICAgdG9wV2lkdGggPSAxMDc7XG4gICAgICAgIC8vICAgICAgICAgcmlnaHRIZWlnaHQgPSAyNDA7XG4gICAgICAgIC8vICAgICAgICAgYm90dG9tSGVpZ2h0ID0gMTgwO1xuICAgICAgICAvLyAgICAgICAgIGJyZWFrO1xuICAgICAgICAvLyAgICAgY2FzZSAzOlxuICAgICAgICAvLyAgICAgICAgIGJyZWFrO1xuICAgICAgICAvLyAgICAgY2FzZSA0OlxuICAgICAgICAvLyAgICAgICAgIGJyZWFrO1xuICAgICAgICAvLyAgICAgY2FzZSA1OlxuICAgICAgICAvLyAgICAgICAgIGJyZWFrO1xuICAgICAgICAvLyAgICAgY2FzZSA2OlxuICAgICAgICAvLyAgICAgICAgIGJyZWFrO1xuICAgICAgICAvLyAgICAgY2FzZSA3OlxuICAgICAgICAvLyAgICAgICAgIGJyZWFrO1xuICAgICAgICAvLyAgICAgY2FzZSA4OlxuICAgICAgICAvLyAgICAgICAgIGJyZWFrO1xuICAgICAgICAvLyB9XG5cbiAgICAgICAgbGV0IGNvdW50ID0gU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuY291bnQ7XG4gICAgICAgIGxldCBzY2FsZSA9IDEgKyAoOCAtIGNvdW50KSAqIDAuMTU7XG4gICAgICAgIGxldCBjdWJlU3RhcnRYID0gLWNvdW50IC8gMjtcblxuICAgICAgICBsZXQgenVvYmlhb19ub2RlID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwienVvYmlhb19ub2RlXCIpO1xuXG4gICAgICAgIHp1b2JpYW9fbm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICBsZXQgdG9wID0genVvYmlhb19ub2RlLmdldENoaWxkQnlOYW1lKFwidG9wXCIpO1xuICAgICAgICB0b3Aud2lkdGggPSAoY291bnQgKiBzY2FsZSAvIDAuMDMpICogMC44NTtcbiAgICAgICAgdG9wLnNldFJvdGF0aW9uKHF1YXQpO1xuICAgICAgICB0b3AueSA9IGNvdW50ICogc2NhbGUgLyAwLjAzICsgMzA7XG4gICAgICAgIHRvcC54ID0gY3ViZVN0YXJ0WCArIHRvcC53aWR0aCAvIDQgLSAxO1xuICAgICAgICB0b3AuZ2V0Q2hpbGRCeU5hbWUoXCJsYmxfY291bnRcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBjb3VudC50b1N0cmluZygpO1xuICAgICAgICB0b3AuZ2V0Q2hpbGRCeU5hbWUoXCJsaW5lXzFcIikud2lkdGggPSB0b3Aud2lkdGggLyAyIC0gMzA7XG4gICAgICAgIHRvcC5nZXRDaGlsZEJ5TmFtZShcImxpbmVfMlwiKS53aWR0aCA9IHRvcC53aWR0aCAvIDIgLSAzMDtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJ0b3Aud2lkdGhcIiwgdG9wLndpZHRoKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJ0b3AucG9zXCIsIHRvcC5wb3NpdGlvbik7XG5cbiAgICAgICAgbGV0IHJpZ2h0ID0genVvYmlhb19ub2RlLmdldENoaWxkQnlOYW1lKFwicmlnaHRcIik7XG4gICAgICAgIHJpZ2h0LmhlaWdodCA9ICgoMiAqIGNvdW50ICsgMSkgKiBzY2FsZSAvIDAuMDMpICogMC43NSA7XG4gICAgICAgIHJpZ2h0LnggPSBjb3VudCAqIHNjYWxlIC8gMC4wMyArIChjb3VudCA+IDIgPyAwIDogY291bnQgKiAxMCk7XG4gICAgICAgIHJpZ2h0LnkgPSBjb3VudCAqIDU7XG4gICAgICAgIHJpZ2h0LmdldENoaWxkQnlOYW1lKFwibGJsX2NvdW50XCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCIoXCIgKyBjb3VudCArIFwieDIrMSlcIjtcbiAgICAgICAgcmlnaHQuZ2V0Q2hpbGRCeU5hbWUoXCJsaW5lXzFcIikuaGVpZ2h0ID0gcmlnaHQuaGVpZ2h0IC8gMiAtIDMwO1xuICAgICAgICByaWdodC5nZXRDaGlsZEJ5TmFtZShcImxpbmVfMlwiKS5oZWlnaHQgPSByaWdodC5oZWlnaHQgLyAyIC0gMzA7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwicmlnaHQuaGVpZ2h0XCIsIHJpZ2h0LmhlaWdodCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwicmlnaHQucG9zXCIsIHJpZ2h0LnBvc2l0aW9uKTtcblxuICAgICAgICBsZXQgYm90dG9tID0genVvYmlhb19ub2RlLmdldENoaWxkQnlOYW1lKFwiYm90dG9tXCIpO1xuICAgICAgICBib3R0b20uaGVpZ2h0ID0gKCgyICogY291bnQgKyAxKSAqIHNjYWxlIC8gMC4wMykgKiAwLjQ1IC0gY291bnQgKiA1O1xuICAgICAgICBib3R0b20ueCA9IGNvdW50ICogc2NhbGUgLyAwLjAzIC0oY291bnQgKjEwKTtcbiAgICAgICAgYm90dG9tLnkgPSAtY291bnQgKiBzY2FsZSAvIDAuMDMgLSgoY291bnQpICoxMCkgLSAoY291bnQgPCA1P2JvdHRvbS5oZWlnaHQgLyBjb3VudCA6IC0yKmNvdW50KTtcbiAgICAgICAgYm90dG9tLmdldENoaWxkQnlOYW1lKFwibGluZV8xXCIpLmhlaWdodCA9IGJvdHRvbS5oZWlnaHQgLyAyIC0gMzA7XG4gICAgICAgIGJvdHRvbS5nZXRDaGlsZEJ5TmFtZShcImxpbmVfMlwiKS5oZWlnaHQgPSBib3R0b20uaGVpZ2h0IC8gMiAtIDMwO1xuICAgICAgICBib3R0b20uZ2V0Q2hpbGRCeU5hbWUoXCJsYmxfY291bnRcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIihcIiArIGNvdW50ICsgXCIrMSlcIjtcbiAgICAgICAgbGV0IGJvdHRvbXF1YXQgPSBuZXcgY2MuUXVhdCgpXG4gICAgICAgIGNjLlF1YXQuZnJvbUV1bGVyKGJvdHRvbXF1YXQsIDAsIDAsIC01ICogc2NhbGUgLSAxMClcbiAgICAgICAgYm90dG9tLnNldFJvdGF0aW9uKGJvdHRvbXF1YXQpO1xuICAgIH1cblxuICAgIC8v5Yid5aeL5YyW5aSn5q2j5pa55L2TXG4gICAgcHJpdmF0ZSBpbml0QmlnQ3ViZSgpIHtcbiAgICAgICAgdGhpcy5jaGFuZ2VCaWdDdWJlU2l6ZSgpO1xuICAgIH1cblxuXG4gICAgcHJpdmF0ZSBjaGFuZ2VCaWdDdWJlU2l6ZSgpIHtcbiAgICAgICAgbGV0IGNvdW50ID0gU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuY291bnQ7XG5cbiAgICAgICAgdGhpcy5jdWJlUm9vdE5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJmaXJzdFN0ZXBcIikub3BhY2l0eSA9IDI1NTtcbiAgICAgICAgdGhpcy5jdWJlUm9vdE5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJzZWNvbmRTdGVwXCIpLm9wYWNpdHkgPSAwO1xuICAgICAgICB0aGlzLmN1YmVSb290Tm9kZS5nZXRDaGlsZEJ5TmFtZShcImZpcnN0U3RlcFwiKS5jaGlsZHJlbi5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5vcGFjaXR5ID0gMDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy/nq4vmlrnkvZPnmoTlsYLmlbDkuLpjb3VudO+8jOS+i++8mmNvdW50PTPvvIznq4vmlrnkvZPmnIDkuIrlsYLkuLoxKjHvvIzkuIvkuIDlsYLkuLoyKjIs5pyA5LiL5bGC5Li6MyozXG4gICAgICAgIGxldCBjdWJlV2lkdGggPSAxO1xuICAgICAgICBsZXQgY3ViZUhlaWdodCA9IDE7XG4gICAgICAgIGxldCBjdWJlTGVuZ3RoID0gMTtcbiAgICAgICAgbGV0IGN1YmVEaXMgPSAwO1xuICAgICAgICBsZXQgY3ViZVhEaXMgPSBjdWJlV2lkdGggKyBjdWJlRGlzO1xuICAgICAgICBsZXQgY3ViZVlEaXMgPSBjdWJlSGVpZ2h0ICsgY3ViZURpcztcbiAgICAgICAgbGV0IGN1YmVaRGlzID0gY3ViZUxlbmd0aCArIGN1YmVEaXM7XG4gICAgICAgIGxldCBjdWJlU3RhcnRYID0gLWNvdW50ICogY3ViZVhEaXMgLyAyICsgY3ViZVhEaXMgLyAyO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY291bnQgLSBpOyBqKyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IGNvdW50IC0gaTsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzbWFsbEN1YmVOb2RlID0gdGhpcy5maXJzdFN0ZXBOb2RlW2kgKiBjb3VudCAqIGNvdW50ICsgaiAqIGNvdW50ICsga107XG4gICAgICAgICAgICAgICAgICAgIGlmICghc21hbGxDdWJlTm9kZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc21hbGxDdWJlTm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuY3ViZVByZWZhYik7XG4gICAgICAgICAgICAgICAgICAgICAgICBzbWFsbEN1YmVOb2RlLnBhcmVudCA9IHRoaXMuY3ViZVJvb3ROb2RlLmdldENoaWxkQnlOYW1lKFwiZmlyc3RTdGVwXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maXJzdFN0ZXBOb2RlLnB1c2goc21hbGxDdWJlTm9kZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gc21hbGxDdWJlTm9kZS5wYXJlbnQgPSB0aGlzLmN1YmVSb290Tm9kZS5nZXRDaGlsZEJ5TmFtZShcImZpcnN0U3RlcFwiKTtcbiAgICAgICAgICAgICAgICAgICAgc21hbGxDdWJlTm9kZS5vcGFjaXR5ID0gMjU1O1xuICAgICAgICAgICAgICAgICAgICBzbWFsbEN1YmVOb2RlLnNldFBvc2l0aW9uKGN1YmVTdGFydFggKyBqICogY3ViZVlEaXMsIGN1YmVTdGFydFggKyBpICogY3ViZVhEaXMsIGN1YmVTdGFydFggKyBrICogY3ViZVpEaXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmN1YmVSb290Tm9kZS5nZXRDaGlsZEJ5TmFtZShcImZpcnN0U3RlcFwiKS5zY2FsZSA9IDEgKyAoOCAtIGNvdW50KSAqIDAuMTU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzaG93U2Vjb25kU3RlcCgpIHtcbiAgICAgICAgbGV0IGNvbG9yQXJyID0gW1wiIzJBODJFNFwiLCBcIiNFMzI5QUVcIiwgXCIjNDNDRjdDXCIsIFwiIzc5NDhFQVwiLCBcIiNGRkMzMDBcIiwgXCIjRkY4RDFBXCJdO1xuICAgICAgICBsZXQgY291bnQgPSBTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5jb3VudDtcblxuICAgICAgICB0aGlzLmN1YmVSb290Tm9kZS5nZXRDaGlsZEJ5TmFtZShcImZpcnN0U3RlcFwiKS5vcGFjaXR5ID0gMDtcbiAgICAgICAgdGhpcy5jdWJlUm9vdE5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJzZWNvbmRTdGVwXCIpLm9wYWNpdHkgPSAyNTU7XG4gICAgICAgIHRoaXMuc2Vjb25kU3RlcEJpZ0N1YmUuZm9yRWFjaChjdWJlID0+IHtcbiAgICAgICAgICAgIGN1YmUuY2hpbGRyZW4uZm9yRWFjaChub2RlID0+IHtcbiAgICAgICAgICAgICAgICBub2RlLm9wYWNpdHkgPSAwO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBjdWJlV2lkdGggPSAxO1xuICAgICAgICBsZXQgY3ViZUhlaWdodCA9IDE7XG4gICAgICAgIGxldCBjdWJlTGVuZ3RoID0gMTtcbiAgICAgICAgbGV0IGN1YmVEaXMgPSAwO1xuICAgICAgICBsZXQgY3ViZVhEaXMgPSBjdWJlV2lkdGggKyBjdWJlRGlzO1xuICAgICAgICBsZXQgY3ViZVlEaXMgPSBjdWJlSGVpZ2h0ICsgY3ViZURpcztcbiAgICAgICAgbGV0IGN1YmVaRGlzID0gY3ViZUxlbmd0aCArIGN1YmVEaXM7XG4gICAgICAgIGxldCBjdWJlU3RhcnRYID0gLWNvdW50ICogY3ViZVhEaXMgLyAyICsgY3ViZVhEaXMgLyAyO1xuXG4gICAgICAgIHRoaXMuc2Vjb25kU3RlcEJpZ0N1YmVbMF0ucGFyZW50LnkgPSA1O1xuICAgICAgICB0aGlzLnNlY29uZFN0ZXBCaWdDdWJlWzNdLnBhcmVudC55ID0gLTU7XG5cbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDY7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGxldCBub2RlID0gdGhpcy5zZWNvbmRTdGVwQmlnQ3ViZVtpbmRleF07XG4gICAgICAgICAgICBub2RlLnNjYWxlID0gMSArICg4IC0gY291bnQpICogMC4xNTtcbiAgICAgICAgICAgIG5vZGUuaXMzRE5vZGUgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKGluZGV4ID09IDMgfHwgaW5kZXggPT0gMSB8fCBpbmRleCA9PSA1KSB7XG4gICAgICAgICAgICAgICAgbm9kZS5ldWxlckFuZ2xlcyA9IGNjLnYzKDAsIC05MCwgMCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8v5YiG5oiQ5Lik6KGM5LiJ5YiX77yM5bGF5LitXG4gICAgICAgICAgICBsZXQgcm93ID0gTWF0aC5mbG9vcihpbmRleCAvIDMpO1xuICAgICAgICAgICAgbGV0IGNvbCA9IGluZGV4ICUgMztcbiAgICAgICAgICAgIGxldCBwb3NYID0gMDtcbiAgICAgICAgICAgIGxldCBwb3NZID0gMDtcbiAgICAgICAgICAgIC8vIGlmIChyb3cgPT0gMCkge1xuICAgICAgICAgICAgLy8gICAgIHBvc1kgPSA1O1xuICAgICAgICAgICAgLy8gfSBlbHNlIHtcbiAgICAgICAgICAgIC8vICAgICBwb3NZID0gLTU7XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICBpZiAoY29sID09IDApIHtcbiAgICAgICAgICAgICAgICBwb3NYID0gLTEwO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChjb2wgPT0gMSkge1xuICAgICAgICAgICAgICAgIHBvc1ggPSAwO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwb3NYID0gMTA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBub2RlLnNldFBvc2l0aW9uKHBvc1gsIDAsIDApO1xuXG4gICAgICAgICAgICBpZiAoIXRoaXMuc2Vjb25kU3RlcE5vZGVbaW5kZXhdKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWNvbmRTdGVwTm9kZVtpbmRleF0gPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY291bnQgLSBpOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCBjb3VudCAtIGk7IGsrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNtYWxsQ3ViZU5vZGUgPSB0aGlzLnNlY29uZFN0ZXBOb2RlW2luZGV4XVtpICogY291bnQgKiBjb3VudCArIGogKiBjb3VudCArIGtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFzbWFsbEN1YmVOb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc21hbGxDdWJlTm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuY3ViZVByZWZhYik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc21hbGxDdWJlTm9kZS5wYXJlbnQgPSBub2RlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2Vjb25kU3RlcE5vZGVbaW5kZXhdLnB1c2goc21hbGxDdWJlTm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBzbWFsbEN1YmVOb2RlLm9wYWNpdHkgPSAyNTU7XG4gICAgICAgICAgICAgICAgICAgICAgICBzbWFsbEN1YmVOb2RlLnNldFBvc2l0aW9uKGN1YmVTdGFydFggKyBqICogY3ViZVlEaXMsIGN1YmVTdGFydFggKyBpICogY3ViZVhEaXMsIGN1YmVTdGFydFggKyBrICogY3ViZVpEaXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgZmFjZSA9IDA7IGZhY2UgPCA2OyBmYWNlKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZmFjZU5vZGUgPSBzbWFsbEN1YmVOb2RlLmdldENoaWxkQnlOYW1lKChmYWNlICsgMSkudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1hdGVyaWFsID0gZmFjZU5vZGUuZ2V0Q29tcG9uZW50KGNjLk1lc2hSZW5kZXJlcikuZ2V0TWF0ZXJpYWwoMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNvbG9yID0gY2MuQ29sb3IuV0hJVEUuZnJvbUhFWChjb2xvckFycltpbmRleF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGVyaWFsLnNldFByb3BlcnR5KFwiZGlmZnVzZUNvbG9yXCIsIGNvbG9yLCAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyByb3RhdGlvbigpIHtcbiAgICAgICAgbGV0IGNvdW50ID0gU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuY291bnQ7XG4gICAgICAgIGxldCBzY2FsZSA9IDEgKyAoOCAtIGNvdW50KSAqIDAuMTU7XG4gICAgICAgIGxldCBub2RlXzAgPSB0aGlzLnNlY29uZFN0ZXBCaWdDdWJlWzBdXG4gICAgICAgIG5vZGVfMC5pczNETm9kZSA9IHRydWU7XG4gICAgICAgIGNjLnR3ZWVuKG5vZGVfMCkudG8oMSwgeyBldWxlckFuZ2xlczogY2MudjMoLTkwLCAwLCAwKSwgejogc2NhbGUgfSkuc3RhcnQoKTtcblxuICAgICAgICBsZXQgbm9kZV8xID0gdGhpcy5zZWNvbmRTdGVwQmlnQ3ViZVsxXVxuICAgICAgICBub2RlXzEuaXMzRE5vZGUgPSB0cnVlO1xuICAgICAgICBjYy50d2Vlbihub2RlXzEpLnRvKDEsIHsgZXVsZXJBbmdsZXM6IGNjLnYzKDE4MCwgLTkwLCAwKSB9KS5zdGFydCgpO1xuXG4gICAgICAgIGxldCBub2RlXzIgPSB0aGlzLnNlY29uZFN0ZXBCaWdDdWJlWzJdXG4gICAgICAgIG5vZGVfMi5pczNETm9kZSA9IHRydWU7XG4gICAgICAgIGNjLnR3ZWVuKG5vZGVfMikudG8oMSwgeyBldWxlckFuZ2xlczogY2MudjMoMCwgMCwgOTApLCB5OiAtc2NhbGUgfSkuc3RhcnQoKTtcblxuICAgICAgICBsZXQgbm9kZV8zID0gdGhpcy5zZWNvbmRTdGVwQmlnQ3ViZVszXVxuICAgICAgICBub2RlXzMuaXMzRE5vZGUgPSB0cnVlO1xuICAgICAgICBjYy50d2Vlbihub2RlXzMpLnRvKDEsIHsgZXVsZXJBbmdsZXM6IGNjLnYzKDkwLCA5MCwgMCksIHo6IHNjYWxlIH0pLnN0YXJ0KCk7XG5cbiAgICAgICAgbGV0IG5vZGVfNCA9IHRoaXMuc2Vjb25kU3RlcEJpZ0N1YmVbNF1cbiAgICAgICAgbm9kZV80LmlzM0ROb2RlID0gdHJ1ZTtcbiAgICAgICAgY2MudHdlZW4obm9kZV80KS50bygxLCB7IGV1bGVyQW5nbGVzOiBjYy52MygwLCAxODAsIDApLCB5OiAtc2NhbGUsIHo6IHNjYWxlIH0pLnN0YXJ0KCk7XG5cbiAgICAgICAgbGV0IG5vZGVfNSA9IHRoaXMuc2Vjb25kU3RlcEJpZ0N1YmVbNV1cbiAgICAgICAgbm9kZV81LmlzM0ROb2RlID0gdHJ1ZTtcbiAgICAgICAgY2MudHdlZW4obm9kZV81KS50bygxLCB7IGV1bGVyQW5nbGVzOiBjYy52MygwLCAtOTAsIC05MCksIHk6IC1zY2FsZSB9KS5zdGFydCgpO1xuXG4gICAgICAgIGxldCBzbGlkZXIgPSB0aGlzLnNsaWRlclJvdGF0ZS5nZXRDb21wb25lbnQoY2MuU2xpZGVyKTtcbiAgICAgICAgY2MudHdlZW4oc2xpZGVyKS50bygxLCB7IHByb2dyZXNzOiAxIH0pLnN0YXJ0KCk7XG4gICAgfVxuXG4gICAgcHVibGljIG1lcmdlKCkge1xuICAgICAgICBsZXQgc2xpZGVyID0gdGhpcy5zbGlkZXJNZXJnZS5nZXRDb21wb25lbnQoY2MuU2xpZGVyKTtcbiAgICAgICAgY2MudHdlZW4oc2xpZGVyKS50byg1LCB7IHByb2dyZXNzOiAxIH0pLnN0YXJ0KCk7XG5cbiAgICAgICAgbGV0IG5vZGVfMCA9IHRoaXMuc2Vjb25kU3RlcEJpZ0N1YmVbMF07XG4gICAgICAgIGxldCBub2RlXzEgPSB0aGlzLnNlY29uZFN0ZXBCaWdDdWJlWzFdO1xuICAgICAgICBsZXQgbm9kZV8yID0gdGhpcy5zZWNvbmRTdGVwQmlnQ3ViZVsyXTtcbiAgICAgICAgbGV0IG5vZGVfMyA9IHRoaXMuc2Vjb25kU3RlcEJpZ0N1YmVbM107XG4gICAgICAgIGxldCBub2RlXzQgPSB0aGlzLnNlY29uZFN0ZXBCaWdDdWJlWzRdO1xuICAgICAgICBsZXQgbm9kZV81ID0gdGhpcy5zZWNvbmRTdGVwQmlnQ3ViZVs1XTtcblxuICAgICAgICBsZXQgY291bnQgPSBTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5jb3VudDtcbiAgICAgICAgbGV0IHNjYWxlID0gMSArICg4IC0gY291bnQpICogMC4xNTtcblxuICAgICAgICBTb3VuZE1hbmFnZXIuc3RvcFNvdW5kQnlOYW1lKFwi56e75YqoXCIpO1xuICAgICAgICBTb3VuZE1hbmFnZXIucGxheUVmZmVjdChcIuenu+WKqFwiLCBmYWxzZSk7XG4gICAgICAgIGNjLnR3ZWVuKG5vZGVfMCkudG8oMSwgeyB4OiAwIH0pLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgU291bmRNYW5hZ2VyLnN0b3BTb3VuZEJ5TmFtZShcIuaLvFwiKTtcbiAgICAgICAgICAgIFNvdW5kTWFuYWdlci5wbGF5RWZmZWN0KFwi5ou8XCIsIGZhbHNlLCBmYWxzZSk7XG4gICAgICAgICAgICBTb3VuZE1hbmFnZXIuc3RvcFNvdW5kQnlOYW1lKFwi56e75YqoXCIpO1xuICAgICAgICAgICAgU291bmRNYW5hZ2VyLnBsYXlFZmZlY3QoXCLnp7vliqhcIiwgZmFsc2UsIGZhbHNlKTtcbiAgICAgICAgICAgIGNjLnR3ZWVuKG5vZGVfMikudG8oMSwgeyB4OiAwLCB5OiAtc2NhbGUgfSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgU291bmRNYW5hZ2VyLnN0b3BTb3VuZEJ5TmFtZShcIuaLvFwiKTtcbiAgICAgICAgICAgICAgICBTb3VuZE1hbmFnZXIucGxheUVmZmVjdChcIuaLvFwiLCBmYWxzZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIFNvdW5kTWFuYWdlci5zdG9wU291bmRCeU5hbWUoXCLnp7vliqhcIik7XG4gICAgICAgICAgICAgICAgU291bmRNYW5hZ2VyLnBsYXlFZmZlY3QoXCLnp7vliqhcIiwgZmFsc2UsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBjYy50d2Vlbihub2RlXzMpLnRvKDEsIHsgeDogMCB9KS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgU291bmRNYW5hZ2VyLnN0b3BTb3VuZEJ5TmFtZShcIuaLvFwiKTtcbiAgICAgICAgICAgICAgICAgICAgU291bmRNYW5hZ2VyLnBsYXlFZmZlY3QoXCLmi7xcIiwgZmFsc2UsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgU291bmRNYW5hZ2VyLnN0b3BTb3VuZEJ5TmFtZShcIuenu+WKqFwiKTtcbiAgICAgICAgICAgICAgICAgICAgU291bmRNYW5hZ2VyLnBsYXlFZmZlY3QoXCLnp7vliqhcIiwgZmFsc2UsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4obm9kZV81KS50bygxLCB7IHg6IDAgfSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBTb3VuZE1hbmFnZXIuc3RvcFNvdW5kQnlOYW1lKFwi5ou8XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgU291bmRNYW5hZ2VyLnBsYXlFZmZlY3QoXCLmi7xcIiwgZmFsc2UsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFNvdW5kTWFuYWdlci5zdG9wU291bmRCeU5hbWUoXCLnp7vliqhcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBTb3VuZE1hbmFnZXIucGxheUVmZmVjdChcIuenu+WKqFwiLCBmYWxzZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4obm9kZV8wLnBhcmVudCkudG8oMSwgeyB5OiBNYXRoLmZsb29yKGNvdW50IC8gMikgKiBzY2FsZSB9KS5jYWxsKCgpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgfSkuc3RhcnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKG5vZGVfMy5wYXJlbnQpLnRvKDEsIHsgeTogLU1hdGguZmxvb3IoY291bnQgLyAyKSAqIHNjYWxlIH0pLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNvdW5kTWFuYWdlci5zdG9wU291bmRCeU5hbWUoXCLmi7xcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU291bmRNYW5hZ2VyLnBsYXlFZmZlY3QoXCLmi7xcIiwgZmFsc2UsIGZhbHNlKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgfSkuc3RhcnQoKTtcbiAgICAgICAgICAgICAgICAgICAgfSkuc3RhcnQoKTtcbiAgICAgICAgICAgICAgICB9KS5zdGFydCgpO1xuICAgICAgICAgICAgfSkuc3RhcnQoKTtcbiAgICAgICAgfSkuc3RhcnQoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY29udHJvbFJvdGF0ZShwcm9ncmVzczogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuc3RvcEFsbFR3ZWVuKCk7XG4gICAgICAgIHRoaXMuc2Vjb25kU3RlcEJpZ0N1YmVbMF0uZXVsZXJBbmdsZXMgPSBjYy52MygtOTAgKiBwcm9ncmVzcywgMCwgMCk7XG4gICAgICAgIHRoaXMuc2Vjb25kU3RlcEJpZ0N1YmVbMV0uZXVsZXJBbmdsZXMgPSBjYy52MygxODAgKiBwcm9ncmVzcywgLTkwLCAwKTtcbiAgICAgICAgdGhpcy5zZWNvbmRTdGVwQmlnQ3ViZVsyXS5ldWxlckFuZ2xlcyA9IGNjLnYzKDAsIDAsIDkwICogcHJvZ3Jlc3MpO1xuICAgICAgICB0aGlzLnNlY29uZFN0ZXBCaWdDdWJlWzNdLmV1bGVyQW5nbGVzID0gY2MudjMoOTAgKiBwcm9ncmVzcywgLTkwICogKDEgLSBwcm9ncmVzcykgKyA5MCAqIHByb2dyZXNzLCAwKTtcbiAgICAgICAgdGhpcy5zZWNvbmRTdGVwQmlnQ3ViZVs0XS5ldWxlckFuZ2xlcyA9IGNjLnYzKDAsIDE4MCAqIHByb2dyZXNzLCAwKTtcbiAgICAgICAgdGhpcy5zZWNvbmRTdGVwQmlnQ3ViZVs1XS5ldWxlckFuZ2xlcyA9IGNjLnYzKDAsIC05MCwgLTkwICogcHJvZ3Jlc3MpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjb250cm9sTWVyZ2UocHJvZ3Jlc3M6IG51bWJlcikge1xuICAgICAgICB0aGlzLnN0b3BBbGxUd2VlbigpO1xuICAgICAgICBsZXQgY291bnQgPSBTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5jb3VudDtcbiAgICAgICAgbGV0IHNjYWxlID0gMSArICg4IC0gY291bnQpICogMC4xNTtcbiAgICAgICAgaWYgKHByb2dyZXNzICogNSA8PSAxKSB7XG4gICAgICAgICAgICB0aGlzLnNlY29uZFN0ZXBCaWdDdWJlWzBdLnBhcmVudC55ID0gNTtcbiAgICAgICAgICAgIHRoaXMuc2Vjb25kU3RlcEJpZ0N1YmVbM10ucGFyZW50LnkgPSAtNTtcblxuICAgICAgICAgICAgdGhpcy5zZWNvbmRTdGVwQmlnQ3ViZVswXS54ID0gLTEwICogKDEgLSBwcm9ncmVzcyAqIDUpO1xuICAgICAgICAgICAgdGhpcy5zZWNvbmRTdGVwQmlnQ3ViZVswXS56ID0gc2NhbGU7XG5cbiAgICAgICAgICAgIHRoaXMuc2Vjb25kU3RlcEJpZ0N1YmVbMV0ucG9zaXRpb24gPSBjYy52MygwLCAwLCAwKTtcblxuICAgICAgICAgICAgdGhpcy5zZWNvbmRTdGVwQmlnQ3ViZVsyXS54ID0gMTA7XG4gICAgICAgICAgICB0aGlzLnNlY29uZFN0ZXBCaWdDdWJlWzJdLnkgPSAtc2NhbGU7XG5cbiAgICAgICAgICAgIHRoaXMuc2Vjb25kU3RlcEJpZ0N1YmVbM10ueCA9IC0xMDtcbiAgICAgICAgICAgIHRoaXMuc2Vjb25kU3RlcEJpZ0N1YmVbM10ueiA9IHNjYWxlO1xuXG4gICAgICAgICAgICB0aGlzLnNlY29uZFN0ZXBCaWdDdWJlWzRdLnkgPSAtc2NhbGU7XG4gICAgICAgICAgICB0aGlzLnNlY29uZFN0ZXBCaWdDdWJlWzRdLnogPSBzY2FsZTtcblxuICAgICAgICAgICAgdGhpcy5zZWNvbmRTdGVwQmlnQ3ViZVs1XS54ID0gMTA7XG4gICAgICAgICAgICB0aGlzLnNlY29uZFN0ZXBCaWdDdWJlWzVdLnkgPSAtc2NhbGU7XG4gICAgICAgIH0gZWxzZSBpZiAocHJvZ3Jlc3MgKiA1IDw9IDIpIHtcbiAgICAgICAgICAgIHRoaXMuc2Vjb25kU3RlcEJpZ0N1YmVbMF0ucGFyZW50LnkgPSA1O1xuICAgICAgICAgICAgdGhpcy5zZWNvbmRTdGVwQmlnQ3ViZVszXS5wYXJlbnQueSA9IC01O1xuXG4gICAgICAgICAgICB0aGlzLnNlY29uZFN0ZXBCaWdDdWJlWzBdLnggPSAwO1xuICAgICAgICAgICAgdGhpcy5zZWNvbmRTdGVwQmlnQ3ViZVswXS56ID0gc2NhbGU7XG5cbiAgICAgICAgICAgIHRoaXMuc2Vjb25kU3RlcEJpZ0N1YmVbMV0ucG9zaXRpb24gPSBjYy52MygwLCAwLCAwKTtcblxuICAgICAgICAgICAgdGhpcy5zZWNvbmRTdGVwQmlnQ3ViZVsyXS54ID0gMTAgKiAoMiAtIHByb2dyZXNzICogNSk7XG4gICAgICAgICAgICB0aGlzLnNlY29uZFN0ZXBCaWdDdWJlWzJdLnkgPSAtc2NhbGU7XG5cbiAgICAgICAgICAgIHRoaXMuc2Vjb25kU3RlcEJpZ0N1YmVbM10ueCA9IC0xMDtcbiAgICAgICAgICAgIHRoaXMuc2Vjb25kU3RlcEJpZ0N1YmVbM10ueiA9IHNjYWxlO1xuXG4gICAgICAgICAgICB0aGlzLnNlY29uZFN0ZXBCaWdDdWJlWzRdLnkgPSAtc2NhbGU7XG4gICAgICAgICAgICB0aGlzLnNlY29uZFN0ZXBCaWdDdWJlWzRdLnogPSBzY2FsZTtcblxuICAgICAgICAgICAgdGhpcy5zZWNvbmRTdGVwQmlnQ3ViZVs1XS54ID0gMTA7XG4gICAgICAgICAgICB0aGlzLnNlY29uZFN0ZXBCaWdDdWJlWzVdLnkgPSAtc2NhbGU7XG4gICAgICAgIH0gZWxzZSBpZiAocHJvZ3Jlc3MgKiA1IDw9IDMpIHtcbiAgICAgICAgICAgIHRoaXMuc2Vjb25kU3RlcEJpZ0N1YmVbMF0ucGFyZW50LnkgPSA1O1xuICAgICAgICAgICAgdGhpcy5zZWNvbmRTdGVwQmlnQ3ViZVszXS5wYXJlbnQueSA9IC01O1xuXG4gICAgICAgICAgICB0aGlzLnNlY29uZFN0ZXBCaWdDdWJlWzBdLnggPSAwO1xuICAgICAgICAgICAgdGhpcy5zZWNvbmRTdGVwQmlnQ3ViZVswXS56ID0gc2NhbGU7XG5cbiAgICAgICAgICAgIHRoaXMuc2Vjb25kU3RlcEJpZ0N1YmVbMV0ucG9zaXRpb24gPSBjYy52MygwLCAwLCAwKTtcblxuICAgICAgICAgICAgdGhpcy5zZWNvbmRTdGVwQmlnQ3ViZVsyXS54ID0gMDtcbiAgICAgICAgICAgIHRoaXMuc2Vjb25kU3RlcEJpZ0N1YmVbMl0ueSA9IC1zY2FsZTtcblxuICAgICAgICAgICAgdGhpcy5zZWNvbmRTdGVwQmlnQ3ViZVszXS54ID0gLTEwICogKDMgLSBwcm9ncmVzcyAqIDUpO1xuICAgICAgICAgICAgdGhpcy5zZWNvbmRTdGVwQmlnQ3ViZVszXS56ID0gc2NhbGU7XG5cbiAgICAgICAgICAgIHRoaXMuc2Vjb25kU3RlcEJpZ0N1YmVbNF0ueSA9IC1zY2FsZTtcbiAgICAgICAgICAgIHRoaXMuc2Vjb25kU3RlcEJpZ0N1YmVbNF0ueiA9IHNjYWxlO1xuXG4gICAgICAgICAgICB0aGlzLnNlY29uZFN0ZXBCaWdDdWJlWzVdLnggPSAxMDtcbiAgICAgICAgICAgIHRoaXMuc2Vjb25kU3RlcEJpZ0N1YmVbNV0ueSA9IC1zY2FsZTtcbiAgICAgICAgfSBlbHNlIGlmIChwcm9ncmVzcyAqIDUgPD0gNCkge1xuICAgICAgICAgICAgdGhpcy5zZWNvbmRTdGVwQmlnQ3ViZVswXS5wYXJlbnQueSA9IDU7XG4gICAgICAgICAgICB0aGlzLnNlY29uZFN0ZXBCaWdDdWJlWzNdLnBhcmVudC55ID0gLTU7XG5cbiAgICAgICAgICAgIHRoaXMuc2Vjb25kU3RlcEJpZ0N1YmVbMF0ueCA9IDA7XG4gICAgICAgICAgICB0aGlzLnNlY29uZFN0ZXBCaWdDdWJlWzBdLnogPSBzY2FsZTtcblxuICAgICAgICAgICAgdGhpcy5zZWNvbmRTdGVwQmlnQ3ViZVsxXS5wb3NpdGlvbiA9IGNjLnYzKDAsIDAsIDApO1xuXG4gICAgICAgICAgICB0aGlzLnNlY29uZFN0ZXBCaWdDdWJlWzJdLnggPSAwO1xuICAgICAgICAgICAgdGhpcy5zZWNvbmRTdGVwQmlnQ3ViZVsyXS55ID0gLXNjYWxlO1xuXG4gICAgICAgICAgICB0aGlzLnNlY29uZFN0ZXBCaWdDdWJlWzNdLnggPSAwO1xuICAgICAgICAgICAgdGhpcy5zZWNvbmRTdGVwQmlnQ3ViZVszXS56ID0gc2NhbGU7XG5cbiAgICAgICAgICAgIHRoaXMuc2Vjb25kU3RlcEJpZ0N1YmVbNF0ueSA9IC1zY2FsZTtcbiAgICAgICAgICAgIHRoaXMuc2Vjb25kU3RlcEJpZ0N1YmVbNF0ueiA9IHNjYWxlO1xuXG4gICAgICAgICAgICB0aGlzLnNlY29uZFN0ZXBCaWdDdWJlWzVdLnggPSAxMCAqICg0IC0gcHJvZ3Jlc3MgKiA1KTtcbiAgICAgICAgICAgIHRoaXMuc2Vjb25kU3RlcEJpZ0N1YmVbNV0ueSA9IC1zY2FsZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2Vjb25kU3RlcEJpZ0N1YmVbMF0ueCA9IDA7XG4gICAgICAgICAgICB0aGlzLnNlY29uZFN0ZXBCaWdDdWJlWzBdLnogPSBzY2FsZTtcblxuICAgICAgICAgICAgdGhpcy5zZWNvbmRTdGVwQmlnQ3ViZVsxXS5wb3NpdGlvbiA9IGNjLnYzKDAsIDAsIDApO1xuXG4gICAgICAgICAgICB0aGlzLnNlY29uZFN0ZXBCaWdDdWJlWzJdLnggPSAwO1xuICAgICAgICAgICAgdGhpcy5zZWNvbmRTdGVwQmlnQ3ViZVsyXS55ID0gLXNjYWxlO1xuXG5cbiAgICAgICAgICAgIHRoaXMuc2Vjb25kU3RlcEJpZ0N1YmVbM10ueCA9IDA7XG4gICAgICAgICAgICB0aGlzLnNlY29uZFN0ZXBCaWdDdWJlWzNdLnogPSBzY2FsZTtcblxuICAgICAgICAgICAgdGhpcy5zZWNvbmRTdGVwQmlnQ3ViZVs0XS55ID0gLXNjYWxlO1xuICAgICAgICAgICAgdGhpcy5zZWNvbmRTdGVwQmlnQ3ViZVs0XS56ID0gc2NhbGU7XG5cbiAgICAgICAgICAgIHRoaXMuc2Vjb25kU3RlcEJpZ0N1YmVbNV0ueCA9IDA7XG4gICAgICAgICAgICB0aGlzLnNlY29uZFN0ZXBCaWdDdWJlWzVdLnkgPSAtc2NhbGU7XG5cbiAgICAgICAgICAgIGxldCBvZmZzZXQgPSBNYXRoLmZsb29yKGNvdW50IC8gMikgKiBzY2FsZSAqICg1IC0gcHJvZ3Jlc3MgKiA1KSA+IDAgPyBNYXRoLmZsb29yKGNvdW50IC8gMikgKiBzY2FsZSAqICg1IC0gcHJvZ3Jlc3MgKiA1KSA6IDA7XG4gICAgICAgICAgICB0aGlzLnNlY29uZFN0ZXBCaWdDdWJlWzBdLnBhcmVudC55ID0gTWF0aC5mbG9vcihjb3VudCAvIDIpICogc2NhbGUgKyBvZmZzZXQgPiA1ID8gNSA6IE1hdGguZmxvb3IoY291bnQgLyAyKSAqIHNjYWxlICsgb2Zmc2V0O1xuICAgICAgICAgICAgdGhpcy5zZWNvbmRTdGVwQmlnQ3ViZVszXS5wYXJlbnQueSA9IC1NYXRoLmZsb29yKGNvdW50IC8gMikgKiBzY2FsZSAtIG9mZnNldCA8IC01ID8gLTUgOiAtTWF0aC5mbG9vcihjb3VudCAvIDIpICogc2NhbGUgLSBvZmZzZXQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHN0b3BBbGxUd2VlbigpIHtcbiAgICAgICAgdGhpcy5zZWNvbmRTdGVwQmlnQ3ViZS5mb3JFYWNoKGN1YmUgPT4ge1xuICAgICAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KGN1YmUpO1xuICAgICAgICB9KTtcbiAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KHRoaXMuc2Vjb25kU3RlcEJpZ0N1YmVbMF0ucGFyZW50KTtcbiAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KHRoaXMuc2Vjb25kU3RlcEJpZ0N1YmVbM10ucGFyZW50KTtcbiAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KHRoaXMuc2xpZGVyUm90YXRlLmdldENvbXBvbmVudChjYy5TbGlkZXIpKTtcbiAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KHRoaXMuc2xpZGVyTWVyZ2UuZ2V0Q29tcG9uZW50KGNjLlNsaWRlcikpO1xuICAgIH1cbn1cbiJdfQ==