
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZVxcc2NyaXB0c1xcVUlcXEl0ZW1cXFRocmVlRE5vZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUZBQW9GO0FBQ3BGLCtFQUE4RTtBQUM5RSxxRkFBb0Y7QUFDcEYsa0RBQWlEO0FBRzNDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXVDLDZCQUFZO0lBQW5EO1FBQUEscUVBMGVDO1FBeGVXLGdCQUFVLEdBQWMsSUFBSSxDQUFDO1FBRTdCLGtCQUFZLEdBQVksSUFBSSxDQUFDO1FBRTdCLHVCQUFpQixHQUFjLEVBQUUsQ0FBQztRQUVsQyxrQkFBWSxHQUFZLElBQUksQ0FBQztRQUU3QixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUc1QixtQkFBYSxHQUFjLEVBQUUsQ0FBQztRQUM5QixvQkFBYyxHQUFnQixFQUFFLENBQUM7O0lBNGQ3QyxDQUFDO0lBemRHLDBCQUFNLEdBQU47UUFDSSx3Q0FBd0M7UUFDeEMsMkRBQTJEO1FBQzNELDRFQUE0RTtRQUM1RSxpQ0FBaUM7UUFDakMsOENBQThDO1FBQzlDLElBQUk7UUFDSixnQ0FBZ0M7UUFDaEMsb0NBQW9DO1FBQ3BDLDRDQUE0QztRQUM1QyxnRUFBZ0U7UUFDaEUsb0hBQW9IO1FBQ3BILHNDQUFzQztRQUN0Qyx1REFBdUQ7UUFDdkQsUUFBUTtRQUNSLElBQUk7SUFDUixDQUFDO0lBRUQsNkJBQVMsR0FBVDtJQUVBLENBQUM7SUFFTSx3QkFBSSxHQUFYO1FBQ0ksSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFTSw2QkFBUyxHQUFoQjtRQUNJLElBQUksUUFBUSxHQUFHLENBQUMsQ0FBQztRQUNqQixJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsUUFBUSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNwRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLFFBQVEsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN0RSxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcsUUFBUSxDQUFDLENBQUM7UUFDbkUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxRQUFRLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLEdBQUcsRUFBRSxHQUFHLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN0RyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsR0FBRyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDcEUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxRQUFRLENBQUMsQ0FBQztRQUV0RSxJQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7UUFDN0QsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFTSx5QkFBSyxHQUFaO1FBQ0ksSUFBSSxJQUFJLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUE7UUFDeEIsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ3BDLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BDLHNCQUFzQjtRQUV0QiwrQkFBK0I7UUFDL0IsaUNBQWlDO1FBQ2pDLGtDQUFrQztRQUNsQyxvQkFBb0I7UUFDcEIsdUJBQXVCO1FBQ3ZCLHdCQUF3QjtRQUN4QixnRUFBZ0U7UUFDaEUsY0FBYztRQUNkLHNDQUFzQztRQUN0Qyx1Q0FBdUM7UUFDdkMseUNBQXlDO1FBQ3pDLDBCQUEwQjtRQUMxQiw2QkFBNkI7UUFDN0IsOEJBQThCO1FBQzlCLGlCQUFpQjtRQUNqQixjQUFjO1FBQ2QsaUJBQWlCO1FBQ2pCLGNBQWM7UUFDZCxpQkFBaUI7UUFDakIsY0FBYztRQUNkLGlCQUFpQjtRQUNqQixjQUFjO1FBQ2QsaUJBQWlCO1FBQ2pCLGNBQWM7UUFDZCxpQkFBaUI7UUFDakIsY0FBYztRQUNkLGlCQUFpQjtRQUNqQixJQUFJO1FBRUosSUFBSSxLQUFLLEdBQUcsaUNBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDO1FBQy9ELElBQUksS0FBSyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDbkMsSUFBSSxVQUFVLEdBQUcsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBRTVCLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBRTVELFlBQVksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQzNCLElBQUksR0FBRyxHQUFHLFlBQVksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDN0MsR0FBRyxDQUFDLEtBQUssR0FBRyxDQUFDLEtBQUssR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQzFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEIsR0FBRyxDQUFDLENBQUMsR0FBRyxLQUFLLEdBQUcsS0FBSyxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7UUFDbEMsR0FBRyxDQUFDLENBQUMsR0FBRyxVQUFVLEdBQUcsR0FBRyxDQUFDLEtBQUssR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZDLEdBQUcsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2pGLEdBQUcsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUN4RCxHQUFHLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsS0FBSyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDeEQsdUNBQXVDO1FBQ3ZDLHdDQUF3QztRQUV4QyxJQUFJLEtBQUssR0FBRyxZQUFZLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2pELEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztRQUN2RCxLQUFLLENBQUMsQ0FBQyxHQUFHLEtBQUssR0FBRyxLQUFLLEdBQUcsSUFBSSxHQUFHLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDOUQsS0FBSyxDQUFDLENBQUMsR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ3BCLEtBQUssQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsR0FBRyxHQUFHLEtBQUssR0FBRyxPQUFPLENBQUM7UUFDeEYsS0FBSyxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQzlELEtBQUssQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUM5RCw2Q0FBNkM7UUFDN0MsNENBQTRDO1FBRTVDLElBQUksTUFBTSxHQUFHLFlBQVksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbkQsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsSUFBSSxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDcEUsTUFBTSxDQUFDLENBQUMsR0FBRyxLQUFLLEdBQUcsS0FBSyxHQUFHLElBQUksR0FBRyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsQ0FBQztRQUMvQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxHQUFHLEtBQUssR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDO1FBQ3JHLE1BQU0sQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNoRSxNQUFNLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDaEUsTUFBTSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxHQUFHLEdBQUcsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUN2RixJQUFJLFVBQVUsR0FBRyxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtRQUM5QixFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxLQUFLLEdBQUcsRUFBRSxDQUFDLENBQUE7UUFDcEQsTUFBTSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUcvQixJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUVwQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUVwRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDO1FBR3JDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDO1FBRXBDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUM7UUFDckMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7UUFFcEMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQztRQUVyQyxJQUFJLE1BQU0sR0FBRyxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQ3RFLElBQUksTUFBTSxHQUFHLE1BQU0sR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqRixJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxNQUFNLEdBQUcsS0FBSyxHQUFHLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssR0FBRyxNQUFNLENBQUM7UUFDL0YsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsS0FBSyxHQUFHLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENB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QUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLFdBQVcsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFcEUsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ3RDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLFdBQVcsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUU1RSxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDdEMsTUFBTSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDdkIsRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsV0FBVyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUU1RSxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDdEMsTUFBTSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDdkIsRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsV0FBVyxFQUFFLEVBQUUs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QUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDaEMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7WUFFcEMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQztZQUNyQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztZQUVwQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxRQUFRLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDdEQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQztTQUN4QzthQUFNO1lBQ0gsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDaEMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7WUFFcEMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFFcEQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDaEMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQztZQUdyQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNoQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztZ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b0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExpc3RlbmVyTWFuYWdlciB9IGZyb20gXCIuLi8uLi8uLi8uLi9mcmFtZS9zY3JpcHRzL01hbmFnZXIvTGlzdGVuZXJNYW5hZ2VyXCI7XG5pbXBvcnQgeyBTb3VuZE1hbmFnZXIgfSBmcm9tIFwiLi4vLi4vLi4vLi4vZnJhbWUvc2NyaXB0cy9NYW5hZ2VyL1NvdW5kTWFuYWdlclwiO1xuaW1wb3J0IHsgU3luY0RhdGFNYW5hZ2VyIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2ZyYW1lL3NjcmlwdHMvTWFuYWdlci9TeW5jRGF0YU1hbmFnZXJcIjtcbmltcG9ydCB7IEV2ZW50VHlwZSB9IGZyb20gXCIuLi8uLi9EYXRhL0V2ZW50VHlwZVwiO1xuaW1wb3J0IHsgU291bmRDb25maWcgfSBmcm9tIFwiLi9Tb3VuZENvbmZpZ1wiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGhyZWVOb2RlIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIHByaXZhdGUgY3ViZVByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBwcml2YXRlIGN1YmVSb290Tm9kZTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcHJpdmF0ZSBzZWNvbmRTdGVwQmlnQ3ViZTogY2MuTm9kZVtdID0gW107XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcHJpdmF0ZSBzbGlkZXJSb3RhdGU6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHByaXZhdGUgc2xpZGVyTWVyZ2U6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSB0b3VjaEV2ZW50SWQ6IG51bWJlcjtcbiAgICBwcml2YXRlIGZpcnN0U3RlcE5vZGU6IGNjLk5vZGVbXSA9IFtdO1xuICAgIHByaXZhdGUgc2Vjb25kU3RlcE5vZGU6IGNjLk5vZGVbXVtdID0gW107XG5cblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCA4ICogOCAqIDg7IGkrKykge1xuICAgICAgICAvLyAgICAgbGV0IHNtYWxsQ3ViZU5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmN1YmVQcmVmYWIpO1xuICAgICAgICAvLyAgICAgc21hbGxDdWJlTm9kZS5wYXJlbnQgPSB0aGlzLmN1YmVSb290Tm9kZS5nZXRDaGlsZEJ5TmFtZShcImZpcnN0U3RlcFwiKTtcbiAgICAgICAgLy8gICAgIHNtYWxsQ3ViZU5vZGUub3BhY2l0eSA9IDA7XG4gICAgICAgIC8vICAgICB0aGlzLmZpcnN0U3RlcE5vZGUucHVzaChzbWFsbEN1YmVOb2RlKTtcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IDY7IGkrKykge1xuICAgICAgICAvLyAgICAgdGhpcy5zZWNvbmRTdGVwTm9kZS5wdXNoKFtdKTtcbiAgICAgICAgLy8gICAgIGZvciAobGV0IGogPSAwOyBqIDwgOCAqIDggKiA4OyBqKyspIHtcbiAgICAgICAgLy8gICAgICAgICBsZXQgc21hbGxDdWJlTm9kZTIgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmN1YmVQcmVmYWIpO1xuICAgICAgICAvLyAgICAgICAgIHNtYWxsQ3ViZU5vZGUyLnBhcmVudCA9IHRoaXMuY3ViZVJvb3ROb2RlLmdldENoaWxkQnlOYW1lKFwic2Vjb25kU3RlcFwiKS5nZXRDaGlsZEJ5TmFtZShcInNlY29uZFN0ZXBfXCIgKyBpKTtcbiAgICAgICAgLy8gICAgICAgICBzbWFsbEN1YmVOb2RlMi5vcGFjaXR5ID0gMDtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLnNlY29uZFN0ZXBOb2RlW2ldLnB1c2goc21hbGxDdWJlTm9kZTIpO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9XG4gICAgfVxuXG4gICAgb25EZXN0cm95KCkge1xuXG4gICAgfVxuXG4gICAgcHVibGljIGluaXQoKSB7XG4gICAgICAgIHRoaXMuaW5pdEJpZ0N1YmUoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2hvd1N0ZXAyKCkge1xuICAgICAgICBsZXQgcHJvZ3Jlc3MgPSAwO1xuICAgICAgICB0aGlzLnNlY29uZFN0ZXBCaWdDdWJlWzBdLmV1bGVyQW5nbGVzID0gY2MudjMoLTkwICogcHJvZ3Jlc3MsIDAsIDApO1xuICAgICAgICB0aGlzLnNlY29uZFN0ZXBCaWdDdWJlWzFdLmV1bGVyQW5nbGVzID0gY2MudjMoMTgwICogcHJvZ3Jlc3MsIC05MCwgMCk7XG4gICAgICAgIHRoaXMuc2Vjb25kU3RlcEJpZ0N1YmVbMl0uZXVsZXJBbmdsZXMgPSBjYy52MygwLCAwLCA5MCAqIHByb2dyZXNzKTtcbiAgICAgICAgdGhpcy5zZWNvbmRTdGVwQmlnQ3ViZVszXS5ldWxlckFuZ2xlcyA9IGNjLnYzKDkwICogcHJvZ3Jlc3MsIC05MCAqICgxIC0gcHJvZ3Jlc3MpICsgOTAgKiBwcm9ncmVzcywgMCk7XG4gICAgICAgIHRoaXMuc2Vjb25kU3RlcEJpZ0N1YmVbNF0uZXVsZXJBbmdsZXMgPSBjYy52MygwLCAxODAgKiBwcm9ncmVzcywgMCk7XG4gICAgICAgIHRoaXMuc2Vjb25kU3RlcEJpZ0N1YmVbNV0uZXVsZXJBbmdsZXMgPSBjYy52MygwLCAtOTAsIC05MCAqIHByb2dyZXNzKTtcblxuICAgICAgICB0aGlzLmN1YmVSb290Tm9kZS5nZXRDaGlsZEJ5TmFtZShcImZpcnN0U3RlcFwiKS5vcGFjaXR5ID0gMDtcbiAgICAgICAgdGhpcy5jdWJlUm9vdE5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJzZWNvbmRTdGVwXCIpLm9wYWNpdHkgPSAyNTU7XG4gICAgICAgIHRoaXMuc2hvd1NlY29uZFN0ZXAoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVzZXQoKSB7XG4gICAgICAgIGxldCBxdWF0ID0gbmV3IGNjLlF1YXQoKVxuICAgICAgICBjYy5RdWF0LmZyb21FdWxlcihxdWF0LCAxNSwgLTI1LCAtNSlcbiAgICAgICAgdGhpcy5jdWJlUm9vdE5vZGUuc2V0Um90YXRpb24ocXVhdCk7XG4gICAgICAgIC8vIHRoaXMuaW5pdEJpZ0N1YmUoKTtcblxuICAgICAgICAvLyBsZXQgdG9wUG9zID0gY2MudjMoMCwgMCwgMCk7XG4gICAgICAgIC8vIGxldCByaWdodFBvcyA9IGNjLnYzKDAsIDAsIDApO1xuICAgICAgICAvLyBsZXQgYm90dG9tUG9zID0gY2MudjMoMCwgMCwgMCk7XG4gICAgICAgIC8vIGxldCB0b3BXaWR0aCA9IDA7XG4gICAgICAgIC8vIGxldCByaWdodEhlaWdodCA9IDA7XG4gICAgICAgIC8vIGxldCBib3R0b21IZWlnaHQgPSAwO1xuICAgICAgICAvLyBzd2l0Y2ggKFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmNvdW50KSB7XG4gICAgICAgIC8vICAgICBjYXNlIDI6XG4gICAgICAgIC8vICAgICAgICAgdG9wUG9zID0gY2MudjMoMjUsIDE1NSwgMCk7XG4gICAgICAgIC8vICAgICAgICAgcmlnaHRQb3MgPSBjYy52MygxNDcsIDAsIDApO1xuICAgICAgICAvLyAgICAgICAgIGJvdHRvbVBvcyA9IGNjLnYzKDAsIC0xNTUsIDApO1xuICAgICAgICAvLyAgICAgICAgIHRvcFdpZHRoID0gMTA3O1xuICAgICAgICAvLyAgICAgICAgIHJpZ2h0SGVpZ2h0ID0gMjQwO1xuICAgICAgICAvLyAgICAgICAgIGJvdHRvbUhlaWdodCA9IDE4MDtcbiAgICAgICAgLy8gICAgICAgICBicmVhaztcbiAgICAgICAgLy8gICAgIGNhc2UgMzpcbiAgICAgICAgLy8gICAgICAgICBicmVhaztcbiAgICAgICAgLy8gICAgIGNhc2UgNDpcbiAgICAgICAgLy8gICAgICAgICBicmVhaztcbiAgICAgICAgLy8gICAgIGNhc2UgNTpcbiAgICAgICAgLy8gICAgICAgICBicmVhaztcbiAgICAgICAgLy8gICAgIGNhc2UgNjpcbiAgICAgICAgLy8gICAgICAgICBicmVhaztcbiAgICAgICAgLy8gICAgIGNhc2UgNzpcbiAgICAgICAgLy8gICAgICAgICBicmVhaztcbiAgICAgICAgLy8gICAgIGNhc2UgODpcbiAgICAgICAgLy8gICAgICAgICBicmVhaztcbiAgICAgICAgLy8gfVxuXG4gICAgICAgIGxldCBjb3VudCA9IFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmNvdW50O1xuICAgICAgICBsZXQgc2NhbGUgPSAxICsgKDggLSBjb3VudCkgKiAwLjE1O1xuICAgICAgICBsZXQgY3ViZVN0YXJ0WCA9IC1jb3VudCAvIDI7XG5cbiAgICAgICAgbGV0IHp1b2JpYW9fbm9kZSA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInp1b2JpYW9fbm9kZVwiKTtcblxuICAgICAgICB6dW9iaWFvX25vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgbGV0IHRvcCA9IHp1b2JpYW9fbm9kZS5nZXRDaGlsZEJ5TmFtZShcInRvcFwiKTtcbiAgICAgICAgdG9wLndpZHRoID0gKGNvdW50ICogc2NhbGUgLyAwLjAzKSAqIDAuODU7XG4gICAgICAgIHRvcC5zZXRSb3RhdGlvbihxdWF0KTtcbiAgICAgICAgdG9wLnkgPSBjb3VudCAqIHNjYWxlIC8gMC4wMyArIDMwO1xuICAgICAgICB0b3AueCA9IGN1YmVTdGFydFggKyB0b3Aud2lkdGggLyA0IC0gMTtcbiAgICAgICAgdG9wLmdldENoaWxkQnlOYW1lKFwibGJsX2NvdW50XCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gY291bnQudG9TdHJpbmcoKTtcbiAgICAgICAgdG9wLmdldENoaWxkQnlOYW1lKFwibGluZV8xXCIpLndpZHRoID0gdG9wLndpZHRoIC8gMiAtIDMwO1xuICAgICAgICB0b3AuZ2V0Q2hpbGRCeU5hbWUoXCJsaW5lXzJcIikud2lkdGggPSB0b3Aud2lkdGggLyAyIC0gMzA7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwidG9wLndpZHRoXCIsIHRvcC53aWR0aCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwidG9wLnBvc1wiLCB0b3AucG9zaXRpb24pO1xuXG4gICAgICAgIGxldCByaWdodCA9IHp1b2JpYW9fbm9kZS5nZXRDaGlsZEJ5TmFtZShcInJpZ2h0XCIpO1xuICAgICAgICByaWdodC5oZWlnaHQgPSAoKDIgKiBjb3VudCArIDEpICogc2NhbGUgLyAwLjAzKSAqIDAuNzU7XG4gICAgICAgIHJpZ2h0LnggPSBjb3VudCAqIHNjYWxlIC8gMC4wMyArIChjb3VudCA+IDIgPyAwIDogY291bnQgKiAxMCk7XG4gICAgICAgIHJpZ2h0LnkgPSBjb3VudCAqIDU7XG4gICAgICAgIHJpZ2h0LmdldENoaWxkQnlOYW1lKFwibGJsX2NvdW50XCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCIoXCIgKyBjb3VudCArIFwieDIrMSlcIjtcbiAgICAgICAgcmlnaHQuZ2V0Q2hpbGRCeU5hbWUoXCJsaW5lXzFcIikuaGVpZ2h0ID0gcmlnaHQuaGVpZ2h0IC8gMiAtIDMwO1xuICAgICAgICByaWdodC5nZXRDaGlsZEJ5TmFtZShcImxpbmVfMlwiKS5oZWlnaHQgPSByaWdodC5oZWlnaHQgLyAyIC0gMzA7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwicmlnaHQuaGVpZ2h0XCIsIHJpZ2h0LmhlaWdodCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwicmlnaHQucG9zXCIsIHJpZ2h0LnBvc2l0aW9uKTtcblxuICAgICAgICBsZXQgYm90dG9tID0genVvYmlhb19ub2RlLmdldENoaWxkQnlOYW1lKFwiYm90dG9tXCIpO1xuICAgICAgICBib3R0b20uaGVpZ2h0ID0gKCgyICogY291bnQgKyAxKSAqIHNjYWxlIC8gMC4wMykgKiAwLjQ1IC0gY291bnQgKiA1O1xuICAgICAgICBib3R0b20ueCA9IGNvdW50ICogc2NhbGUgLyAwLjAzIC0gKGNvdW50ICogMTApO1xuICAgICAgICBib3R0b20ueSA9IC1jb3VudCAqIHNjYWxlIC8gMC4wMyAtICgoY291bnQpICogMTApIC0gKGNvdW50IDwgNSA/IGJvdHRvbS5oZWlnaHQgLyBjb3VudCA6IC0yICogY291bnQpO1xuICAgICAgICBib3R0b20uZ2V0Q2hpbGRCeU5hbWUoXCJsaW5lXzFcIikuaGVpZ2h0ID0gYm90dG9tLmhlaWdodCAvIDIgLSAzMDtcbiAgICAgICAgYm90dG9tLmdldENoaWxkQnlOYW1lKFwibGluZV8yXCIpLmhlaWdodCA9IGJvdHRvbS5oZWlnaHQgLyAyIC0gMzA7XG4gICAgICAgIGJvdHRvbS5nZXRDaGlsZEJ5TmFtZShcImxibF9jb3VudFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiKFwiICsgY291bnQgKyBcIisxKVwiO1xuICAgICAgICBsZXQgYm90dG9tcXVhdCA9IG5ldyBjYy5RdWF0KClcbiAgICAgICAgY2MuUXVhdC5mcm9tRXVsZXIoYm90dG9tcXVhdCwgMCwgMCwgLTUgKiBzY2FsZSAtIDEwKVxuICAgICAgICBib3R0b20uc2V0Um90YXRpb24oYm90dG9tcXVhdCk7XG5cblxuICAgICAgICB0aGlzLnNlY29uZFN0ZXBCaWdDdWJlWzBdLnggPSAwO1xuICAgICAgICB0aGlzLnNlY29uZFN0ZXBCaWdDdWJlWzBdLnogPSBzY2FsZTtcblxuICAgICAgICB0aGlzLnNlY29uZFN0ZXBCaWdDdWJlWzFdLnBvc2l0aW9uID0gY2MudjMoMCwgMCwgMCk7XG5cbiAgICAgICAgdGhpcy5zZWNvbmRTdGVwQmlnQ3ViZVsyXS54ID0gMDtcbiAgICAgICAgdGhpcy5zZWNvbmRTdGVwQmlnQ3ViZVsyXS55ID0gLXNjYWxlO1xuXG5cbiAgICAgICAgdGhpcy5zZWNvbmRTdGVwQmlnQ3ViZVszXS54ID0gMDtcbiAgICAgICAgdGhpcy5zZWNvbmRTdGVwQmlnQ3ViZVszXS56ID0gc2NhbGU7XG5cbiAgICAgICAgdGhpcy5zZWNvbmRTdGVwQmlnQ3ViZVs0XS55ID0gLXNjYWxlO1xuICAgICAgICB0aGlzLnNlY29uZFN0ZXBCaWdDdWJlWzRdLnogPSBzY2FsZTtcblxuICAgICAgICB0aGlzLnNlY29uZFN0ZXBCaWdDdWJlWzVdLnggPSAwO1xuICAgICAgICB0aGlzLnNlY29uZFN0ZXBCaWdDdWJlWzVdLnkgPSAtc2NhbGU7XG5cbiAgICAgICAgbGV0IGNvdW50MiA9IGNvdW50ICUgMiA9PSAwID8gY291bnQgLyAyIDogTWF0aC5mbG9vcihjb3VudCAvIDIpICsgMC41O1xuICAgICAgICBsZXQgb2Zmc2V0ID0gY291bnQyICogc2NhbGUgKiAoNSAtIDEgKiA1KSA+IDAgPyBjb3VudDIgKiBzY2FsZSAqICg1IC0gMSAqIDUpIDogMDtcbiAgICAgICAgdGhpcy5zZWNvbmRTdGVwQmlnQ3ViZVswXS5wYXJlbnQueSA9IGNvdW50MiAqIHNjYWxlICsgb2Zmc2V0ID4gNSA/IDUgOiBjb3VudDIgKiBzY2FsZSArIG9mZnNldDtcbiAgICAgICAgdGhpcy5zZWNvbmRTdGVwQmlnQ3ViZVszXS5wYXJlbnQueSA9IC1jb3VudDIgKiBzY2FsZSAtIG9mZnNldCA8IC01ID8gLTUgOiAtY291bnQyICogc2NhbGUgLSBvZmZzZXQ7XG4gICAgfVxuXG4gICAgcHVibGljIGhpZGVadW9iaWFvKCkge1xuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJ6dW9iaWFvX25vZGVcIikuYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgLy/liJ3lp4vljJblpKfmraPmlrnkvZNcbiAgICBwcml2YXRlIGluaXRCaWdDdWJlKCkge1xuICAgICAgICB0aGlzLmNoYW5nZUJpZ0N1YmVTaXplKCk7XG4gICAgfVxuXG5cbiAgICBwcml2YXRlIGNoYW5nZUJpZ0N1YmVTaXplKCkge1xuICAgICAgICBsZXQgY291bnQgPSBTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5jb3VudDtcblxuICAgICAgICB0aGlzLmN1YmVSb290Tm9kZS5nZXRDaGlsZEJ5TmFtZShcImZpcnN0U3RlcFwiKS5vcGFjaXR5ID0gMjU1O1xuICAgICAgICB0aGlzLmN1YmVSb290Tm9kZS5nZXRDaGlsZEJ5TmFtZShcInNlY29uZFN0ZXBcIikub3BhY2l0eSA9IDA7XG4gICAgICAgIHRoaXMuY3ViZVJvb3ROb2RlLmdldENoaWxkQnlOYW1lKFwiZmlyc3RTdGVwXCIpLmNoaWxkcmVuLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICBlbGVtZW50Lm9wYWNpdHkgPSAwO1xuICAgICAgICB9KTtcblxuICAgICAgICAvL+eri+aWueS9k+eahOWxguaVsOS4umNvdW5077yM5L6L77yaY291bnQ9M++8jOeri+aWueS9k+acgOS4iuWxguS4ujEqMe+8jOS4i+S4gOWxguS4ujIqMizmnIDkuIvlsYLkuLozKjNcbiAgICAgICAgbGV0IGN1YmVXaWR0aCA9IDE7XG4gICAgICAgIGxldCBjdWJlSGVpZ2h0ID0gMTtcbiAgICAgICAgbGV0IGN1YmVMZW5ndGggPSAxO1xuICAgICAgICBsZXQgY3ViZURpcyA9IDA7XG4gICAgICAgIGxldCBjdWJlWERpcyA9IGN1YmVXaWR0aCArIGN1YmVEaXM7XG4gICAgICAgIGxldCBjdWJlWURpcyA9IGN1YmVIZWlnaHQgKyBjdWJlRGlzO1xuICAgICAgICBsZXQgY3ViZVpEaXMgPSBjdWJlTGVuZ3RoICsgY3ViZURpcztcbiAgICAgICAgbGV0IGN1YmVTdGFydFggPSAtY291bnQgKiBjdWJlWERpcyAvIDIgKyBjdWJlWERpcyAvIDI7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjb3VudCAtIGk7IGorKykge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgY291bnQgLSBpOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNtYWxsQ3ViZU5vZGUgPSB0aGlzLmZpcnN0U3RlcE5vZGVbaSAqIGNvdW50ICogY291bnQgKyBqICogY291bnQgKyBrXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFzbWFsbEN1YmVOb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzbWFsbEN1YmVOb2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5jdWJlUHJlZmFiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNtYWxsQ3ViZU5vZGUucGFyZW50ID0gdGhpcy5jdWJlUm9vdE5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJmaXJzdFN0ZXBcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpcnN0U3RlcE5vZGUucHVzaChzbWFsbEN1YmVOb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBzbWFsbEN1YmVOb2RlLnBhcmVudCA9IHRoaXMuY3ViZVJvb3ROb2RlLmdldENoaWxkQnlOYW1lKFwiZmlyc3RTdGVwXCIpO1xuICAgICAgICAgICAgICAgICAgICBzbWFsbEN1YmVOb2RlLm9wYWNpdHkgPSAyNTU7XG4gICAgICAgICAgICAgICAgICAgIHNtYWxsQ3ViZU5vZGUuc2V0UG9zaXRpb24oY3ViZVN0YXJ0WCArIGogKiBjdWJlWURpcywgY3ViZVN0YXJ0WCArIGkgKiBjdWJlWERpcywgY3ViZVN0YXJ0WCArIGsgKiBjdWJlWkRpcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY3ViZVJvb3ROb2RlLmdldENoaWxkQnlOYW1lKFwiZmlyc3RTdGVwXCIpLnNjYWxlID0gMSArICg4IC0gY291bnQpICogMC4xNTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNob3dTZWNvbmRTdGVwKCkge1xuICAgICAgICBsZXQgY29sb3JBcnIgPSBbXCIjMkE4MkU0XCIsIFwiI0UzMjlBRVwiLCBcIiM0M0NGN0NcIiwgXCIjNzk0OEVBXCIsIFwiI0ZGQzMwMFwiLCBcIiNGRjhEMUFcIl07XG4gICAgICAgIGxldCBjb3VudCA9IFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmNvdW50O1xuXG4gICAgICAgIHRoaXMuY3ViZVJvb3ROb2RlLmdldENoaWxkQnlOYW1lKFwiZmlyc3RTdGVwXCIpLm9wYWNpdHkgPSAwO1xuICAgICAgICB0aGlzLmN1YmVSb290Tm9kZS5nZXRDaGlsZEJ5TmFtZShcInNlY29uZFN0ZXBcIikub3BhY2l0eSA9IDI1NTtcbiAgICAgICAgdGhpcy5zZWNvbmRTdGVwQmlnQ3ViZS5mb3JFYWNoKGN1YmUgPT4ge1xuICAgICAgICAgICAgY3ViZS5jaGlsZHJlbi5mb3JFYWNoKG5vZGUgPT4ge1xuICAgICAgICAgICAgICAgIG5vZGUub3BhY2l0eSA9IDA7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IGN1YmVXaWR0aCA9IDE7XG4gICAgICAgIGxldCBjdWJlSGVpZ2h0ID0gMTtcbiAgICAgICAgbGV0IGN1YmVMZW5ndGggPSAxO1xuICAgICAgICBsZXQgY3ViZURpcyA9IDA7XG4gICAgICAgIGxldCBjdWJlWERpcyA9IGN1YmVXaWR0aCArIGN1YmVEaXM7XG4gICAgICAgIGxldCBjdWJlWURpcyA9IGN1YmVIZWlnaHQgKyBjdWJlRGlzO1xuICAgICAgICBsZXQgY3ViZVpEaXMgPSBjdWJlTGVuZ3RoICsgY3ViZURpcztcbiAgICAgICAgbGV0IGN1YmVTdGFydFggPSAtY291bnQgKiBjdWJlWERpcyAvIDIgKyBjdWJlWERpcyAvIDI7XG5cbiAgICAgICAgdGhpcy5zZWNvbmRTdGVwQmlnQ3ViZVswXS5wYXJlbnQueSA9IDU7XG4gICAgICAgIHRoaXMuc2Vjb25kU3RlcEJpZ0N1YmVbM10ucGFyZW50LnkgPSAtNTtcblxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgNjsgaW5kZXgrKykge1xuICAgICAgICAgICAgbGV0IG5vZGUgPSB0aGlzLnNlY29uZFN0ZXBCaWdDdWJlW2luZGV4XTtcbiAgICAgICAgICAgIG5vZGUuc2NhbGUgPSAxICsgKDggLSBjb3VudCkgKiAwLjE1O1xuICAgICAgICAgICAgbm9kZS5pczNETm9kZSA9IHRydWU7XG4gICAgICAgICAgICBpZiAoaW5kZXggPT0gMyB8fCBpbmRleCA9PSAxIHx8IGluZGV4ID09IDUpIHtcbiAgICAgICAgICAgICAgICBub2RlLmV1bGVyQW5nbGVzID0gY2MudjMoMCwgLTkwLCAwKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy/liIbmiJDkuKTooYzkuInliJfvvIzlsYXkuK1cbiAgICAgICAgICAgIGxldCByb3cgPSBNYXRoLmZsb29yKGluZGV4IC8gMyk7XG4gICAgICAgICAgICBsZXQgY29sID0gaW5kZXggJSAzO1xuICAgICAgICAgICAgbGV0IHBvc1ggPSAwO1xuICAgICAgICAgICAgbGV0IHBvc1kgPSAwO1xuICAgICAgICAgICAgLy8gaWYgKHJvdyA9PSAwKSB7XG4gICAgICAgICAgICAvLyAgICAgcG9zWSA9IDU7XG4gICAgICAgICAgICAvLyB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gICAgIHBvc1kgPSAtNTtcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIGlmIChjb2wgPT0gMCkge1xuICAgICAgICAgICAgICAgIHBvc1ggPSAtMTA7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNvbCA9PSAxKSB7XG4gICAgICAgICAgICAgICAgcG9zWCA9IDA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBvc1ggPSAxMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5vZGUuc2V0UG9zaXRpb24ocG9zWCwgMCwgMCk7XG5cbiAgICAgICAgICAgIGlmICghdGhpcy5zZWNvbmRTdGVwTm9kZVtpbmRleF0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlY29uZFN0ZXBOb2RlW2luZGV4XSA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjb3VudCAtIGk7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IGNvdW50IC0gaTsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgc21hbGxDdWJlTm9kZSA9IHRoaXMuc2Vjb25kU3RlcE5vZGVbaW5kZXhdW2kgKiBjb3VudCAqIGNvdW50ICsgaiAqIGNvdW50ICsga107XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXNtYWxsQ3ViZU5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbWFsbEN1YmVOb2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5jdWJlUHJlZmFiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbWFsbEN1YmVOb2RlLnBhcmVudCA9IG5vZGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWNvbmRTdGVwTm9kZVtpbmRleF0ucHVzaChzbWFsbEN1YmVOb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNtYWxsQ3ViZU5vZGUub3BhY2l0eSA9IDI1NTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNtYWxsQ3ViZU5vZGUuc2V0UG9zaXRpb24oY3ViZVN0YXJ0WCArIGogKiBjdWJlWURpcywgY3ViZVN0YXJ0WCArIGkgKiBjdWJlWERpcywgY3ViZVN0YXJ0WCArIGsgKiBjdWJlWkRpcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBmYWNlID0gMDsgZmFjZSA8IDY7IGZhY2UrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmYWNlTm9kZSA9IHNtYWxsQ3ViZU5vZGUuZ2V0Q2hpbGRCeU5hbWUoKGZhY2UgKyAxKS50b1N0cmluZygpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbWF0ZXJpYWwgPSBmYWNlTm9kZS5nZXRDb21wb25lbnQoY2MuTWVzaFJlbmRlcmVyKS5nZXRNYXRlcmlhbCgwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY29sb3IgPSBjYy5Db2xvci5XSElURS5mcm9tSEVYKGNvbG9yQXJyW2luZGV4XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0ZXJpYWwuc2V0UHJvcGVydHkoXCJkaWZmdXNlQ29sb3JcIiwgY29sb3IsIDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHJvdGF0aW9uKCkge1xuICAgICAgICBsZXQgY291bnQgPSBTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5jb3VudDtcbiAgICAgICAgbGV0IHNjYWxlID0gMSArICg4IC0gY291bnQpICogMC4xNTtcbiAgICAgICAgbGV0IG5vZGVfMCA9IHRoaXMuc2Vjb25kU3RlcEJpZ0N1YmVbMF1cbiAgICAgICAgbm9kZV8wLmlzM0ROb2RlID0gdHJ1ZTtcbiAgICAgICAgY2MudHdlZW4obm9kZV8wKS50bygxLCB7IGV1bGVyQW5nbGVzOiBjYy52MygtOTAsIDAsIDApLCB6OiBzY2FsZSB9KS5zdGFydCgpO1xuXG4gICAgICAgIGxldCBub2RlXzEgPSB0aGlzLnNlY29uZFN0ZXBCaWdDdWJlWzFdXG4gICAgICAgIG5vZGVfMS5pczNETm9kZSA9IHRydWU7XG4gICAgICAgIGNjLnR3ZWVuKG5vZGVfMSkudG8oMSwgeyBldWxlckFuZ2xlczogY2MudjMoMTgwLCAtOTAsIDApIH0pLnN0YXJ0KCk7XG5cbiAgICAgICAgbGV0IG5vZGVfMiA9IHRoaXMuc2Vjb25kU3RlcEJpZ0N1YmVbMl1cbiAgICAgICAgbm9kZV8yLmlzM0ROb2RlID0gdHJ1ZTtcbiAgICAgICAgY2MudHdlZW4obm9kZV8yKS50bygxLCB7IGV1bGVyQW5nbGVzOiBjYy52MygwLCAwLCA5MCksIHk6IC1zY2FsZSB9KS5zdGFydCgpO1xuXG4gICAgICAgIGxldCBub2RlXzMgPSB0aGlzLnNlY29uZFN0ZXBCaWdDdWJlWzNdXG4gICAgICAgIG5vZGVfMy5pczNETm9kZSA9IHRydWU7XG4gICAgICAgIGNjLnR3ZWVuKG5vZGVfMykudG8oMSwgeyBldWxlckFuZ2xlczogY2MudjMoOTAsIDkwLCAwKSwgejogc2NhbGUgfSkuc3RhcnQoKTtcblxuICAgICAgICBsZXQgbm9kZV80ID0gdGhpcy5zZWNvbmRTdGVwQmlnQ3ViZVs0XVxuICAgICAgICBub2RlXzQuaXMzRE5vZGUgPSB0cnVlO1xuICAgICAgICBjYy50d2Vlbihub2RlXzQpLnRvKDEsIHsgZXVsZXJBbmdsZXM6IGNjLnYzKDAsIDE4MCwgMCksIHk6IC1zY2FsZSwgejogc2NhbGUgfSkuc3RhcnQoKTtcblxuICAgICAgICBsZXQgbm9kZV81ID0gdGhpcy5zZWNvbmRTdGVwQmlnQ3ViZVs1XVxuICAgICAgICBub2RlXzUuaXMzRE5vZGUgPSB0cnVlO1xuICAgICAgICBjYy50d2Vlbihub2RlXzUpLnRvKDEsIHsgZXVsZXJBbmdsZXM6IGNjLnYzKDAsIC05MCwgLTkwKSwgeTogLXNjYWxlIH0pLnN0YXJ0KCk7XG5cbiAgICAgICAgbGV0IHNsaWRlciA9IHRoaXMuc2xpZGVyUm90YXRlLmdldENvbXBvbmVudChjYy5TbGlkZXIpO1xuICAgICAgICBjYy50d2VlbihzbGlkZXIpLnRvKDEsIHsgcHJvZ3Jlc3M6IDEgfSkuc3RhcnQoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbWVyZ2UoKSB7XG4gICAgICAgIGxldCBzbGlkZXIgPSB0aGlzLnNsaWRlck1lcmdlLmdldENvbXBvbmVudChjYy5TbGlkZXIpO1xuICAgICAgICBjYy50d2VlbihzbGlkZXIpLnRvKDUsIHsgcHJvZ3Jlc3M6IDEgfSkuc3RhcnQoKTtcblxuICAgICAgICBsZXQgbm9kZV8wID0gdGhpcy5zZWNvbmRTdGVwQmlnQ3ViZVswXTtcbiAgICAgICAgbGV0IG5vZGVfMSA9IHRoaXMuc2Vjb25kU3RlcEJpZ0N1YmVbMV07XG4gICAgICAgIGxldCBub2RlXzIgPSB0aGlzLnNlY29uZFN0ZXBCaWdDdWJlWzJdO1xuICAgICAgICBsZXQgbm9kZV8zID0gdGhpcy5zZWNvbmRTdGVwQmlnQ3ViZVszXTtcbiAgICAgICAgbGV0IG5vZGVfNCA9IHRoaXMuc2Vjb25kU3RlcEJpZ0N1YmVbNF07XG4gICAgICAgIGxldCBub2RlXzUgPSB0aGlzLnNlY29uZFN0ZXBCaWdDdWJlWzVdO1xuXG4gICAgICAgIGxldCBjb3VudCA9IFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmNvdW50O1xuICAgICAgICBsZXQgc2NhbGUgPSAxICsgKDggLSBjb3VudCkgKiAwLjE1O1xuXG4gICAgICAgIFNvdW5kTWFuYWdlci5zdG9wU291bmRCeU5hbWUoXCLnp7vliqhcIik7XG4gICAgICAgIFNvdW5kTWFuYWdlci5wbGF5RWZmZWN0KFwi56e75YqoXCIsIGZhbHNlKTtcbiAgICAgICAgY2MudHdlZW4obm9kZV8wKS50bygxLCB7IHg6IDAgfSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICBTb3VuZE1hbmFnZXIuc3RvcFNvdW5kQnlOYW1lKFwi5ou8XCIpO1xuICAgICAgICAgICAgU291bmRNYW5hZ2VyLnBsYXlFZmZlY3QoXCLmi7xcIiwgZmFsc2UsIGZhbHNlKTtcbiAgICAgICAgICAgIFNvdW5kTWFuYWdlci5zdG9wU291bmRCeU5hbWUoXCLnp7vliqhcIik7XG4gICAgICAgICAgICBTb3VuZE1hbmFnZXIucGxheUVmZmVjdChcIuenu+WKqFwiLCBmYWxzZSwgZmFsc2UpO1xuICAgICAgICAgICAgY2MudHdlZW4obm9kZV8yKS50bygxLCB7IHg6IDAsIHk6IC1zY2FsZSB9KS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICBTb3VuZE1hbmFnZXIuc3RvcFNvdW5kQnlOYW1lKFwi5ou8XCIpO1xuICAgICAgICAgICAgICAgIFNvdW5kTWFuYWdlci5wbGF5RWZmZWN0KFwi5ou8XCIsIGZhbHNlLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgU291bmRNYW5hZ2VyLnN0b3BTb3VuZEJ5TmFtZShcIuenu+WKqFwiKTtcbiAgICAgICAgICAgICAgICBTb3VuZE1hbmFnZXIucGxheUVmZmVjdChcIuenu+WKqFwiLCBmYWxzZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKG5vZGVfMykudG8oMSwgeyB4OiAwIH0pLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBTb3VuZE1hbmFnZXIuc3RvcFNvdW5kQnlOYW1lKFwi5ou8XCIpO1xuICAgICAgICAgICAgICAgICAgICBTb3VuZE1hbmFnZXIucGxheUVmZmVjdChcIuaLvFwiLCBmYWxzZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICBTb3VuZE1hbmFnZXIuc3RvcFNvdW5kQnlOYW1lKFwi56e75YqoXCIpO1xuICAgICAgICAgICAgICAgICAgICBTb3VuZE1hbmFnZXIucGxheUVmZmVjdChcIuenu+WKqFwiLCBmYWxzZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICBjYy50d2Vlbihub2RlXzUpLnRvKDEsIHsgeDogMCB9KS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFNvdW5kTWFuYWdlci5zdG9wU291bmRCeU5hbWUoXCLmi7xcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBTb3VuZE1hbmFnZXIucGxheUVmZmVjdChcIuaLvFwiLCBmYWxzZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgU291bmRNYW5hZ2VyLnN0b3BTb3VuZEJ5TmFtZShcIuenu+WKqFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFNvdW5kTWFuYWdlci5wbGF5RWZmZWN0KFwi56e75YqoXCIsIGZhbHNlLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY291bnQyID0gY291bnQgJSAyID09IDAgPyBjb3VudCAvIDIgOiBNYXRoLmZsb29yKGNvdW50IC8gMikgKyAwLjU7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYy50d2Vlbihub2RlXzAucGFyZW50KS50bygxLCB7IHk6IGNvdW50MiAqIHNjYWxlIH0pLmNhbGwoKCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS5zdGFydCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4obm9kZV8zLnBhcmVudCkudG8oMSwgeyB5OiAtY291bnQyICogc2NhbGUgfSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU291bmRNYW5hZ2VyLnN0b3BTb3VuZEJ5TmFtZShcIuaLvFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTb3VuZE1hbmFnZXIucGxheUVmZmVjdChcIuaLvFwiLCBmYWxzZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIExpc3RlbmVyTWFuYWdlci5kaXNwYXRjaChFdmVudFR5cGUuaGViaW5nd2FuY2hlbmcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSkuc3RhcnQoKTtcbiAgICAgICAgICAgICAgICAgICAgfSkuc3RhcnQoKTtcbiAgICAgICAgICAgICAgICB9KS5zdGFydCgpO1xuICAgICAgICAgICAgfSkuc3RhcnQoKTtcbiAgICAgICAgfSkuc3RhcnQoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY29udHJvbFJvdGF0ZShwcm9ncmVzczogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuc3RvcEFsbFR3ZWVuKCk7XG4gICAgICAgIHRoaXMuc2Vjb25kU3RlcEJpZ0N1YmVbMF0uZXVsZXJBbmdsZXMgPSBjYy52MygtOTAgKiBwcm9ncmVzcywgMCwgMCk7XG4gICAgICAgIHRoaXMuc2Vjb25kU3RlcEJpZ0N1YmVbMV0uZXVsZXJBbmdsZXMgPSBjYy52MygxODAgKiBwcm9ncmVzcywgLTkwLCAwKTtcbiAgICAgICAgdGhpcy5zZWNvbmRTdGVwQmlnQ3ViZVsyXS5ldWxlckFuZ2xlcyA9IGNjLnYzKDAsIDAsIDkwICogcHJvZ3Jlc3MpO1xuICAgICAgICB0aGlzLnNlY29uZFN0ZXBCaWdDdWJlWzNdLmV1bGVyQW5nbGVzID0gY2MudjMoOTAgKiBwcm9ncmVzcywgLTkwICogKDEgLSBwcm9ncmVzcykgKyA5MCAqIHByb2dyZXNzLCAwKTtcbiAgICAgICAgdGhpcy5zZWNvbmRTdGVwQmlnQ3ViZVs0XS5ldWxlckFuZ2xlcyA9IGNjLnYzKDAsIDE4MCAqIHByb2dyZXNzLCAwKTtcbiAgICAgICAgdGhpcy5zZWNvbmRTdGVwQmlnQ3ViZVs1XS5ldWxlckFuZ2xlcyA9IGNjLnYzKDAsIC05MCwgLTkwICogcHJvZ3Jlc3MpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjb250cm9sTWVyZ2UocHJvZ3Jlc3M6IG51bWJlcikge1xuICAgICAgICB0aGlzLnN0b3BBbGxUd2VlbigpO1xuICAgICAgICBsZXQgY291bnQgPSBTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5jb3VudDtcbiAgICAgICAgbGV0IHNjYWxlID0gMSArICg4IC0gY291bnQpICogMC4xNTtcbiAgICAgICAgaWYgKHByb2dyZXNzICogNSA8PSAxKSB7XG4gICAgICAgICAgICB0aGlzLnNlY29uZFN0ZXBCaWdDdWJlWzBdLnBhcmVudC55ID0gNTtcbiAgICAgICAgICAgIHRoaXMuc2Vjb25kU3RlcEJpZ0N1YmVbM10ucGFyZW50LnkgPSAtNTtcblxuICAgICAgICAgICAgdGhpcy5zZWNvbmRTdGVwQmlnQ3ViZVswXS54ID0gLTEwICogKDEgLSBwcm9ncmVzcyAqIDUpO1xuICAgICAgICAgICAgdGhpcy5zZWNvbmRTdGVwQmlnQ3ViZVswXS56ID0gc2NhbGU7XG5cbiAgICAgICAgICAgIHRoaXMuc2Vjb25kU3RlcEJpZ0N1YmVbMV0ucG9zaXRpb24gPSBjYy52MygwLCAwLCAwKTtcblxuICAgICAgICAgICAgdGhpcy5zZWNvbmRTdGVwQmlnQ3ViZVsyXS54ID0gMTA7XG4gICAgICAgICAgICB0aGlzLnNlY29uZFN0ZXBCaWdDdWJlWzJdLnkgPSAtc2NhbGU7XG5cbiAgICAgICAgICAgIHRoaXMuc2Vjb25kU3RlcEJpZ0N1YmVbM10ueCA9IC0xMDtcbiAgICAgICAgICAgIHRoaXMuc2Vjb25kU3RlcEJpZ0N1YmVbM10ueiA9IHNjYWxlO1xuXG4gICAgICAgICAgICB0aGlzLnNlY29uZFN0ZXBCaWdDdWJlWzRdLnkgPSAtc2NhbGU7XG4gICAgICAgICAgICB0aGlzLnNlY29uZFN0ZXBCaWdDdWJlWzRdLnogPSBzY2FsZTtcblxuICAgICAgICAgICAgdGhpcy5zZWNvbmRTdGVwQmlnQ3ViZVs1XS54ID0gMTA7XG4gICAgICAgICAgICB0aGlzLnNlY29uZFN0ZXBCaWdDdWJlWzVdLnkgPSAtc2NhbGU7XG4gICAgICAgIH0gZWxzZSBpZiAocHJvZ3Jlc3MgKiA1IDw9IDIpIHtcbiAgICAgICAgICAgIHRoaXMuc2Vjb25kU3RlcEJpZ0N1YmVbMF0ucGFyZW50LnkgPSA1O1xuICAgICAgICAgICAgdGhpcy5zZWNvbmRTdGVwQmlnQ3ViZVszXS5wYXJlbnQueSA9IC01O1xuXG4gICAgICAgICAgICB0aGlzLnNlY29uZFN0ZXBCaWdDdWJlWzBdLnggPSAwO1xuICAgICAgICAgICAgdGhpcy5zZWNvbmRTdGVwQmlnQ3ViZVswXS56ID0gc2NhbGU7XG5cbiAgICAgICAgICAgIHRoaXMuc2Vjb25kU3RlcEJpZ0N1YmVbMV0ucG9zaXRpb24gPSBjYy52MygwLCAwLCAwKTtcblxuICAgICAgICAgICAgdGhpcy5zZWNvbmRTdGVwQmlnQ3ViZVsyXS54ID0gMTAgKiAoMiAtIHByb2dyZXNzICogNSk7XG4gICAgICAgICAgICB0aGlzLnNlY29uZFN0ZXBCaWdDdWJlWzJdLnkgPSAtc2NhbGU7XG5cbiAgICAgICAgICAgIHRoaXMuc2Vjb25kU3RlcEJpZ0N1YmVbM10ueCA9IC0xMDtcbiAgICAgICAgICAgIHRoaXMuc2Vjb25kU3RlcEJpZ0N1YmVbM10ueiA9IHNjYWxlO1xuXG4gICAgICAgICAgICB0aGlzLnNlY29uZFN0ZXBCaWdDdWJlWzRdLnkgPSAtc2NhbGU7XG4gICAgICAgICAgICB0aGlzLnNlY29uZFN0ZXBCaWdDdWJlWzRdLnogPSBzY2FsZTtcblxuICAgICAgICAgICAgdGhpcy5zZWNvbmRTdGVwQmlnQ3ViZVs1XS54ID0gMTA7XG4gICAgICAgICAgICB0aGlzLnNlY29uZFN0ZXBCaWdDdWJlWzVdLnkgPSAtc2NhbGU7XG4gICAgICAgIH0gZWxzZSBpZiAocHJvZ3Jlc3MgKiA1IDw9IDMpIHtcbiAgICAgICAgICAgIHRoaXMuc2Vjb25kU3RlcEJpZ0N1YmVbMF0ucGFyZW50LnkgPSA1O1xuICAgICAgICAgICAgdGhpcy5zZWNvbmRTdGVwQmlnQ3ViZVszXS5wYXJlbnQueSA9IC01O1xuXG4gICAgICAgICAgICB0aGlzLnNlY29uZFN0ZXBCaWdDdWJlWzBdLnggPSAwO1xuICAgICAgICAgICAgdGhpcy5zZWNvbmRTdGVwQmlnQ3ViZVswXS56ID0gc2NhbGU7XG5cbiAgICAgICAgICAgIHRoaXMuc2Vjb25kU3RlcEJpZ0N1YmVbMV0ucG9zaXRpb24gPSBjYy52MygwLCAwLCAwKTtcblxuICAgICAgICAgICAgdGhpcy5zZWNvbmRTdGVwQmlnQ3ViZVsyXS54ID0gMDtcbiAgICAgICAgICAgIHRoaXMuc2Vjb25kU3RlcEJpZ0N1YmVbMl0ueSA9IC1zY2FsZTtcblxuICAgICAgICAgICAgdGhpcy5zZWNvbmRTdGVwQmlnQ3ViZVszXS54ID0gLTEwICogKDMgLSBwcm9ncmVzcyAqIDUpO1xuICAgICAgICAgICAgdGhpcy5zZWNvbmRTdGVwQmlnQ3ViZVszXS56ID0gc2NhbGU7XG5cbiAgICAgICAgICAgIHRoaXMuc2Vjb25kU3RlcEJpZ0N1YmVbNF0ueSA9IC1zY2FsZTtcbiAgICAgICAgICAgIHRoaXMuc2Vjb25kU3RlcEJpZ0N1YmVbNF0ueiA9IHNjYWxlO1xuXG4gICAgICAgICAgICB0aGlzLnNlY29uZFN0ZXBCaWdDdWJlWzVdLnggPSAxMDtcbiAgICAgICAgICAgIHRoaXMuc2Vjb25kU3RlcEJpZ0N1YmVbNV0ueSA9IC1zY2FsZTtcbiAgICAgICAgfSBlbHNlIGlmIChwcm9ncmVzcyAqIDUgPD0gNCkge1xuICAgICAgICAgICAgdGhpcy5zZWNvbmRTdGVwQmlnQ3ViZVswXS5wYXJlbnQueSA9IDU7XG4gICAgICAgICAgICB0aGlzLnNlY29uZFN0ZXBCaWdDdWJlWzNdLnBhcmVudC55ID0gLTU7XG5cbiAgICAgICAgICAgIHRoaXMuc2Vjb25kU3RlcEJpZ0N1YmVbMF0ueCA9IDA7XG4gICAgICAgICAgICB0aGlzLnNlY29uZFN0ZXBCaWdDdWJlWzBdLnogPSBzY2FsZTtcblxuICAgICAgICAgICAgdGhpcy5zZWNvbmRTdGVwQmlnQ3ViZVsxXS5wb3NpdGlvbiA9IGNjLnYzKDAsIDAsIDApO1xuXG4gICAgICAgICAgICB0aGlzLnNlY29uZFN0ZXBCaWdDdWJlWzJdLnggPSAwO1xuICAgICAgICAgICAgdGhpcy5zZWNvbmRTdGVwQmlnQ3ViZVsyXS55ID0gLXNjYWxlO1xuXG4gICAgICAgICAgICB0aGlzLnNlY29uZFN0ZXBCaWdDdWJlWzNdLnggPSAwO1xuICAgICAgICAgICAgdGhpcy5zZWNvbmRTdGVwQmlnQ3ViZVszXS56ID0gc2NhbGU7XG5cbiAgICAgICAgICAgIHRoaXMuc2Vjb25kU3RlcEJpZ0N1YmVbNF0ueSA9IC1zY2FsZTtcbiAgICAgICAgICAgIHRoaXMuc2Vjb25kU3RlcEJpZ0N1YmVbNF0ueiA9IHNjYWxlO1xuXG4gICAgICAgICAgICB0aGlzLnNlY29uZFN0ZXBCaWdDdWJlWzVdLnggPSAxMCAqICg0IC0gcHJvZ3Jlc3MgKiA1KTtcbiAgICAgICAgICAgIHRoaXMuc2Vjb25kU3RlcEJpZ0N1YmVbNV0ueSA9IC1zY2FsZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2Vjb25kU3RlcEJpZ0N1YmVbMF0ueCA9IDA7XG4gICAgICAgICAgICB0aGlzLnNlY29uZFN0ZXBCaWdDdWJlWzBdLnogPSBzY2FsZTtcblxuICAgICAgICAgICAgdGhpcy5zZWNvbmRTdGVwQmlnQ3ViZVsxXS5wb3NpdGlvbiA9IGNjLnYzKDAsIDAsIDApO1xuXG4gICAgICAgICAgICB0aGlzLnNlY29uZFN0ZXBCaWdDdWJlWzJdLnggPSAwO1xuICAgICAgICAgICAgdGhpcy5zZWNvbmRTdGVwQmlnQ3ViZVsyXS55ID0gLXNjYWxlO1xuXG5cbiAgICAgICAgICAgIHRoaXMuc2Vjb25kU3RlcEJpZ0N1YmVbM10ueCA9IDA7XG4gICAgICAgICAgICB0aGlzLnNlY29uZFN0ZXBCaWdDdWJlWzNdLnogPSBzY2FsZTtcblxuICAgICAgICAgICAgdGhpcy5zZWNvbmRTdGVwQmlnQ3ViZVs0XS55ID0gLXNjYWxlO1xuICAgICAgICAgICAgdGhpcy5zZWNvbmRTdGVwQmlnQ3ViZVs0XS56ID0gc2NhbGU7XG5cbiAgICAgICAgICAgIHRoaXMuc2Vjb25kU3RlcEJpZ0N1YmVbNV0ueCA9IDA7XG4gICAgICAgICAgICB0aGlzLnNlY29uZFN0ZXBCaWdDdWJlWzVdLnkgPSAtc2NhbGU7XG5cbiAgICAgICAgICAgIGxldCBjb3VudDIgPSBjb3VudCAlIDIgPT0gMCA/IGNvdW50IC8gMiA6IE1hdGguZmxvb3IoY291bnQgLyAyKSArIDAuNTtcbiAgICAgICAgICAgIGxldCBvZmZzZXQgPSBjb3VudDIgKiBzY2FsZSAqICg1IC0gcHJvZ3Jlc3MgKiA1KSA+IDAgPyBjb3VudDIgKiBzY2FsZSAqICg1IC0gcHJvZ3Jlc3MgKiA1KSA6IDA7XG4gICAgICAgICAgICB0aGlzLnNlY29uZFN0ZXBCaWdDdWJlWzBdLnBhcmVudC55ID0gY291bnQyICogc2NhbGUgKyBvZmZzZXQgPiA1ID8gNSA6IGNvdW50MiAqIHNjYWxlICsgb2Zmc2V0O1xuICAgICAgICAgICAgdGhpcy5zZWNvbmRTdGVwQmlnQ3ViZVszXS5wYXJlbnQueSA9IC1jb3VudDIgKiBzY2FsZSAtIG9mZnNldCA8IC01ID8gLTUgOiAtY291bnQyICogc2NhbGUgLSBvZmZzZXQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHN0b3BBbGxUd2VlbigpIHtcbiAgICAgICAgdGhpcy5zZWNvbmRTdGVwQmlnQ3ViZS5mb3JFYWNoKGN1YmUgPT4ge1xuICAgICAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KGN1YmUpO1xuICAgICAgICB9KTtcbiAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KHRoaXMuc2Vjb25kU3RlcEJpZ0N1YmVbMF0ucGFyZW50KTtcbiAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KHRoaXMuc2Vjb25kU3RlcEJpZ0N1YmVbM10ucGFyZW50KTtcbiAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KHRoaXMuc2xpZGVyUm90YXRlLmdldENvbXBvbmVudChjYy5TbGlkZXIpKTtcbiAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KHRoaXMuc2xpZGVyTWVyZ2UuZ2V0Q29tcG9uZW50KGNjLlNsaWRlcikpO1xuICAgIH1cbn1cbiJdfQ==