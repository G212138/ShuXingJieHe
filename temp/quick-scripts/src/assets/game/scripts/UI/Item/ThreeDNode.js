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
var SoundManager_1 = require("../../../../frame/scripts/Manager/SoundManager");
var SyncDataManager_1 = require("../../../../frame/scripts/Manager/SyncDataManager");
var EventType_1 = require("../../Data/EventType");
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
        var progress = 0;
        this.secondStepBigCube[0].eulerAngles = cc.v3(-90 * progress, 0, 0);
        this.secondStepBigCube[1].eulerAngles = cc.v3(180 * progress, -90, 0);
        this.secondStepBigCube[2].eulerAngles = cc.v3(0, 0, 90 * progress);
        this.secondStepBigCube[3].eulerAngles = cc.v3(90 * progress, -90 * (1 - progress) + 90 * progress, 0);
        this.secondStepBigCube[4].eulerAngles = cc.v3(0, 180 * progress, 0);
        this.secondStepBigCube[5].eulerAngles = cc.v3(0, -90, -90 * progress);
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
        var count2 = count % 2 == 0 ? count / 2 : Math.floor(count / 2) + 0.5;
        var offset = count2 * scale * (5 - 1 * 5) > 0 ? count2 * scale * (5 - 1 * 5) : 0;
        this.secondStepBigCube[0].parent.y = count2 * scale + offset > 5 ? 5 : count2 * scale + offset;
        this.secondStepBigCube[3].parent.y = -count2 * scale - offset < -5 ? -5 : -count2 * scale - offset;
    };
    ThreeNode.prototype.hideZuobiao = function () {
        this.node.getChildByName("zuobiao_node").active = false;
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
                        var count2 = count % 2 == 0 ? count / 2 : Math.floor(count / 2) + 0.5;
                        cc.tween(node_0.parent).to(1, { y: count2 * scale }).call(function () {
                        }).start();
                        cc.tween(node_3.parent).to(1, { y: -count2 * scale }).call(function () {
                            SoundManager_1.SoundManager.stopSoundByName("拼");
                            SoundManager_1.SoundManager.playEffect("拼", false, false);
                            ListenerManager_1.ListenerManager.dispatch(EventType_1.EventType.hebingwancheng);
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
            var count2 = count % 2 == 0 ? count / 2 : Math.floor(count / 2) + 0.5;
            var offset = count2 * scale * (5 - progress * 5) > 0 ? count2 * scale * (5 - progress * 5) : 0;
            this.secondStepBigCube[0].parent.y = count2 * scale + offset > 5 ? 5 : count2 * scale + offset;
            this.secondStepBigCube[3].parent.y = -count2 * scale - offset < -5 ? -5 : -count2 * scale - offset;
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