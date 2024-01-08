
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
        SoundManager_1.SoundManager.stopAllEffect();
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
        if (count > 5) {
            scale = 1 + (8 - count) * 0.1;
        }
        if (count > 7) {
            scale = 0.9;
        }
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
        var scale = 1 + (8 - count) * 0.15;
        if (count > 5) {
            scale = 1 + (8 - count) * 0.1;
        }
        if (count > 7) {
            scale = 0.9;
        }
        this.cubeRootNode.getChildByName("firstStep").scale = scale;
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
            var scale = 1 + (8 - count) * 0.15;
            if (count > 5) {
                scale = 1 + (8 - count) * 0.1;
            }
            if (count > 7) {
                scale = 0.9;
            }
            node.scale = scale;
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
        var _this = this;
        this.sliderRotate.getComponent(cc.Slider).enabled = false;
        var count = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.count;
        var scale = 1 + (8 - count) * 0.15;
        if (count > 5) {
            scale = 1 + (8 - count) * 0.1;
        }
        if (count > 7) {
            scale = 0.9;
        }
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
        cc.tween(slider).to(1, { progress: 1 }).call(function () {
            _this.sliderRotate.getComponent(cc.Slider).enabled = true;
        }).start();
    };
    ThreeNode.prototype.merge = function () {
        var _this = this;
        this.sliderMerge.getComponent(cc.Slider).enabled = false;
        this.secondStepBigCube[0].eulerAngles = cc.v3(-90 * 1, 0, 0);
        this.secondStepBigCube[1].eulerAngles = cc.v3(180 * 1, -90, 0);
        this.secondStepBigCube[2].eulerAngles = cc.v3(0, 0, 90 * 1);
        this.secondStepBigCube[3].eulerAngles = cc.v3(90 * 1, -90 * (1 - 1) + 90 * 1, 0);
        this.secondStepBigCube[4].eulerAngles = cc.v3(0, 180 * 1, 0);
        this.secondStepBigCube[5].eulerAngles = cc.v3(0, -90, -90 * 1);
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
        if (count > 5) {
            scale = 1 + (8 - count) * 0.1;
        }
        if (count > 7) {
            scale = 0.9;
        }
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
                            _this.sliderMerge.getComponent(cc.Slider).enabled = true;
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
        if (count > 5) {
            scale = 1 + (8 - count) * 0.1;
        }
        if (count > 7) {
            scale = 0.9;
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZVxcc2NyaXB0c1xcVUlcXEl0ZW1cXFRocmVlRE5vZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUZBQW9GO0FBQ3BGLCtFQUE4RTtBQUM5RSxxRkFBb0Y7QUFDcEYsa0RBQWlEO0FBRzNDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXVDLDZCQUFZO0lBQW5EO1FBQUEscUVBMmhCQztRQXpoQlcsZ0JBQVUsR0FBYyxJQUFJLENBQUM7UUFFN0Isa0JBQVksR0FBWSxJQUFJLENBQUM7UUFFN0IsdUJBQWlCLEdBQWMsRUFBRSxDQUFDO1FBRWxDLGtCQUFZLEdBQVksSUFBSSxDQUFDO1FBRTdCLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBRzVCLG1CQUFhLEdBQWMsRUFBRSxDQUFDO1FBQzlCLG9CQUFjLEdBQWdCLEVBQUUsQ0FBQzs7SUE2Z0I3QyxDQUFDO0lBMWdCRywwQkFBTSxHQUFOO1FBQ0ksd0NBQXdDO1FBQ3hDLDJEQUEyRDtRQUMzRCw0RUFBNEU7UUFDNUUsaUNBQWlDO1FBQ2pDLDhDQUE4QztRQUM5QyxJQUFJO1FBQ0osZ0NBQWdDO1FBQ2hDLG9DQUFvQztRQUNwQyw0Q0FBNEM7UUFDNUMsZ0VBQWdFO1FBQ2hFLG9IQUFvSDtRQUNwSCxzQ0FBc0M7UUFDdEMsdURBQXVEO1FBQ3ZELFFBQVE7UUFDUixJQUFJO0lBQ1IsQ0FBQztJQUVELDZCQUFTLEdBQVQ7SUFFQSxDQUFDO0lBRU0sd0JBQUksR0FBWDtRQUNJLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRU0sNkJBQVMsR0FBaEI7UUFDSSxJQUFJLFFBQVEsR0FBRyxDQUFDLENBQUM7UUFDakIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsR0FBRyxFQUFFLENB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QUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxXQUFXLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBRXBFLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUN0QyxNQUFNLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUN2QixFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxXQUFXLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFNUUsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ3RDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLFdBQVcsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFNUUsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ3RDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLFdBQVcsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBRXZGLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUN0QyxNQUFNLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUN2QixFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxXQUFXLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBRS9FLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN2RCxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDekMsS0FBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDN0QsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDZixDQUFDO0lBRU0seUJBQUssR0FBWjtRQUFBLGlCQThEQztRQTdERyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUN6RCxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM3RCxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMvRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNqRixJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUMvRCxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdEQsRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFaEQsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZDLElBQUks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QUNsQywyQkFBWSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO3dCQUMzQywyQkFBWSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDbkMsMkJBQVksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQzt3QkFDNUMsSUFBSSxNQUFNLEdBQUcsS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQzt3QkFDdEUsRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxNQUFNLEdBQUcsS0FBSyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUM7d0JBRTFELENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO3dCQUNYLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEdBQUcsS0FBSyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUM7NEJBQ3ZELDJCQUFZLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDOzRCQUNsQywyQkFBWSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDOzRCQUMzQyxpQ0FBZSxDQUFDLFFBQVEsQ0FBQyxxQkFBUyxDQUFDLGNBQWMsQ0FBQyxDQUFDOzRCQUNuRCxLQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQzt3QkFDNUQsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7b0JBQ2YsQ0FBQyxD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QUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBeGhCRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO2lEQUNpQjtJQUVyQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO21EQUNtQjtJQUVyQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3dEQUN3QjtJQUUxQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO21EQUNtQjtJQUVyQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2tEQUNrQjtJQVZuQixTQUFTO1FBRDdCLE9BQU87T0FDYSxTQUFTLENBMmhCN0I7SUFBRCxnQkFBQztDQTNoQkQsQUEyaEJDLENBM2hCc0MsRUFBRSxDQUFDLFNBQVMsR0EyaEJsRDtrQkEzaEJvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGlzdGVuZXJNYW5hZ2VyIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2ZyYW1lL3NjcmlwdHMvTWFuYWdlci9MaXN0ZW5lck1hbmFnZXJcIjtcbmltcG9ydCB7IFNvdW5kTWFuYWdlciB9IGZyb20gXCIuLi8uLi8uLi8uLi9mcmFtZS9zY3JpcHRzL01hbmFnZXIvU291bmRNYW5hZ2VyXCI7XG5pbXBvcnQgeyBTeW5jRGF0YU1hbmFnZXIgfSBmcm9tIFwiLi4vLi4vLi4vLi4vZnJhbWUvc2NyaXB0cy9NYW5hZ2VyL1N5bmNEYXRhTWFuYWdlclwiO1xuaW1wb3J0IHsgRXZlbnRUeXBlIH0gZnJvbSBcIi4uLy4uL0RhdGEvRXZlbnRUeXBlXCI7XG5pbXBvcnQgeyBTb3VuZENvbmZpZyB9IGZyb20gXCIuL1NvdW5kQ29uZmlnXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaHJlZU5vZGUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgcHJpdmF0ZSBjdWJlUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHByaXZhdGUgY3ViZVJvb3ROb2RlOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBwcml2YXRlIHNlY29uZFN0ZXBCaWdDdWJlOiBjYy5Ob2RlW10gPSBbXTtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBwcml2YXRlIHNsaWRlclJvdGF0ZTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcHJpdmF0ZSBzbGlkZXJNZXJnZTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBwcml2YXRlIHRvdWNoRXZlbnRJZDogbnVtYmVyO1xuICAgIHByaXZhdGUgZmlyc3RTdGVwTm9kZTogY2MuTm9kZVtdID0gW107XG4gICAgcHJpdmF0ZSBzZWNvbmRTdGVwTm9kZTogY2MuTm9kZVtdW10gPSBbXTtcblxuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IDggKiA4ICogODsgaSsrKSB7XG4gICAgICAgIC8vICAgICBsZXQgc21hbGxDdWJlTm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuY3ViZVByZWZhYik7XG4gICAgICAgIC8vICAgICBzbWFsbEN1YmVOb2RlLnBhcmVudCA9IHRoaXMuY3ViZVJvb3ROb2RlLmdldENoaWxkQnlOYW1lKFwiZmlyc3RTdGVwXCIpO1xuICAgICAgICAvLyAgICAgc21hbGxDdWJlTm9kZS5vcGFjaXR5ID0gMDtcbiAgICAgICAgLy8gICAgIHRoaXMuZmlyc3RTdGVwTm9kZS5wdXNoKHNtYWxsQ3ViZU5vZGUpO1xuICAgICAgICAvLyB9XG4gICAgICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgNjsgaSsrKSB7XG4gICAgICAgIC8vICAgICB0aGlzLnNlY29uZFN0ZXBOb2RlLnB1c2goW10pO1xuICAgICAgICAvLyAgICAgZm9yIChsZXQgaiA9IDA7IGogPCA4ICogOCAqIDg7IGorKykge1xuICAgICAgICAvLyAgICAgICAgIGxldCBzbWFsbEN1YmVOb2RlMiA9IGNjLmluc3RhbnRpYXRlKHRoaXMuY3ViZVByZWZhYik7XG4gICAgICAgIC8vICAgICAgICAgc21hbGxDdWJlTm9kZTIucGFyZW50ID0gdGhpcy5jdWJlUm9vdE5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJzZWNvbmRTdGVwXCIpLmdldENoaWxkQnlOYW1lKFwic2Vjb25kU3RlcF9cIiArIGkpO1xuICAgICAgICAvLyAgICAgICAgIHNtYWxsQ3ViZU5vZGUyLm9wYWNpdHkgPSAwO1xuICAgICAgICAvLyAgICAgICAgIHRoaXMuc2Vjb25kU3RlcE5vZGVbaV0ucHVzaChzbWFsbEN1YmVOb2RlMik7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH1cbiAgICB9XG5cbiAgICBvbkRlc3Ryb3koKSB7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5pbml0QmlnQ3ViZSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzaG93U3RlcDIoKSB7XG4gICAgICAgIGxldCBwcm9ncmVzcyA9IDA7XG4gICAgICAgIHRoaXMuc2Vjb25kU3RlcEJpZ0N1YmVbMF0uZXVsZXJBbmdsZXMgPSBjYy52MygtOTAgKiBwcm9ncmVzcywgMCwgMCk7XG4gICAgICAgIHRoaXMuc2Vjb25kU3RlcEJpZ0N1YmVbMV0uZXVsZXJBbmdsZXMgPSBjYy52MygxODAgKiBwcm9ncmVzcywgLTkwLCAwKTtcbiAgICAgICAgdGhpcy5zZWNvbmRTdGVwQmlnQ3ViZVsyXS5ldWxlckFuZ2xlcyA9IGNjLnYzKDAsIDAsIDkwICogcHJvZ3Jlc3MpO1xuICAgICAgICB0aGlzLnNlY29uZFN0ZXBCaWdDdWJlWzNdLmV1bGVyQW5nbGVzID0gY2MudjMoOTAgKiBwcm9ncmVzcywgLTkwICogKDEgLSBwcm9ncmVzcykgKyA5MCAqIHByb2dyZXNzLCAwKTtcbiAgICAgICAgdGhpcy5zZWNvbmRTdGVwQmlnQ3ViZVs0XS5ldWxlckFuZ2xlcyA9IGNjLnYzKDAsIDE4MCAqIHByb2dyZXNzLCAwKTtcbiAgICAgICAgdGhpcy5zZWNvbmRTdGVwQmlnQ3ViZVs1XS5ldWxlckFuZ2xlcyA9IGNjLnYzKDAsIC05MCwgLTkwICogcHJvZ3Jlc3MpO1xuXG4gICAgICAgIHRoaXMuY3ViZVJvb3ROb2RlLmdldENoaWxkQnlOYW1lKFwiZmlyc3RTdGVwXCIpLm9wYWNpdHkgPSAwO1xuICAgICAgICB0aGlzLmN1YmVSb290Tm9kZS5nZXRDaGlsZEJ5TmFtZShcInNlY29uZFN0ZXBcIikub3BhY2l0eSA9IDI1NTtcbiAgICAgICAgdGhpcy5zaG93U2Vjb25kU3RlcCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyByZXNldCgpIHtcbiAgICAgICAgU291bmRNYW5hZ2VyLnN0b3BBbGxFZmZlY3QoKTtcbiAgICAgICAgbGV0IHF1YXQgPSBuZXcgY2MuUXVhdCgpXG4gICAgICAgIGNjLlF1YXQuZnJvbUV1bGVyKHF1YXQsIDE1LCAtMjUsIC01KVxuICAgICAgICB0aGlzLmN1YmVSb290Tm9kZS5zZXRSb3RhdGlvbihxdWF0KTtcbiAgICAgICAgLy8gdGhpcy5pbml0QmlnQ3ViZSgpO1xuXG4gICAgICAgIC8vIGxldCB0b3BQb3MgPSBjYy52MygwLCAwLCAwKTtcbiAgICAgICAgLy8gbGV0IHJpZ2h0UG9zID0gY2MudjMoMCwgMCwgMCk7XG4gICAgICAgIC8vIGxldCBib3R0b21Qb3MgPSBjYy52MygwLCAwLCAwKTtcbiAgICAgICAgLy8gbGV0IHRvcFdpZHRoID0gMDtcbiAgICAgICAgLy8gbGV0IHJpZ2h0SGVpZ2h0ID0gMDtcbiAgICAgICAgLy8gbGV0IGJvdHRvbUhlaWdodCA9IDA7XG4gICAgICAgIC8vIHN3aXRjaCAoU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuY291bnQpIHtcbiAgICAgICAgLy8gICAgIGNhc2UgMjpcbiAgICAgICAgLy8gICAgICAgICB0b3BQb3MgPSBjYy52MygyNSwgMTU1LCAwKTtcbiAgICAgICAgLy8gICAgICAgICByaWdodFBvcyA9IGNjLnYzKDE0NywgMCwgMCk7XG4gICAgICAgIC8vICAgICAgICAgYm90dG9tUG9zID0gY2MudjMoMCwgLTE1NSwgMCk7XG4gICAgICAgIC8vICAgICAgICAgdG9wV2lkdGggPSAxMDc7XG4gICAgICAgIC8vICAgICAgICAgcmlnaHRIZWlnaHQgPSAyNDA7XG4gICAgICAgIC8vICAgICAgICAgYm90dG9tSGVpZ2h0ID0gMTgwO1xuICAgICAgICAvLyAgICAgICAgIGJyZWFrO1xuICAgICAgICAvLyAgICAgY2FzZSAzOlxuICAgICAgICAvLyAgICAgICAgIGJyZWFrO1xuICAgICAgICAvLyAgICAgY2FzZSA0OlxuICAgICAgICAvLyAgICAgICAgIGJyZWFrO1xuICAgICAgICAvLyAgICAgY2FzZSA1OlxuICAgICAgICAvLyAgICAgICAgIGJyZWFrO1xuICAgICAgICAvLyAgICAgY2FzZSA2OlxuICAgICAgICAvLyAgICAgICAgIGJyZWFrO1xuICAgICAgICAvLyAgICAgY2FzZSA3OlxuICAgICAgICAvLyAgICAgICAgIGJyZWFrO1xuICAgICAgICAvLyAgICAgY2FzZSA4OlxuICAgICAgICAvLyAgICAgICAgIGJyZWFrO1xuICAgICAgICAvLyB9XG5cbiAgICAgICAgbGV0IGNvdW50ID0gU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuY291bnQ7XG4gICAgICAgIGxldCBzY2FsZSA9IDEgKyAoOCAtIGNvdW50KSAqIDAuMTU7XG4gICAgICAgIGlmIChjb3VudCA+IDUpIHtcbiAgICAgICAgICAgIHNjYWxlID0gMSArICg4IC0gY291bnQpICogMC4xO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb3VudCA+IDcpIHtcbiAgICAgICAgICAgIHNjYWxlID0gMC45O1xuICAgICAgICB9XG4gICAgICAgIGxldCBjdWJlU3RhcnRYID0gLWNvdW50IC8gMjtcblxuICAgICAgICBsZXQgenVvYmlhb19ub2RlID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwienVvYmlhb19ub2RlXCIpO1xuXG4gICAgICAgIHp1b2JpYW9fbm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICBsZXQgdG9wID0genVvYmlhb19ub2RlLmdldENoaWxkQnlOYW1lKFwidG9wXCIpO1xuICAgICAgICB0b3Aud2lkdGggPSAoY291bnQgKiBzY2FsZSAvIDAuMDMpICogMC44NTtcbiAgICAgICAgdG9wLnNldFJvdGF0aW9uKHF1YXQpO1xuICAgICAgICB0b3AueSA9IGNvdW50ICogc2NhbGUgLyAwLjAzICsgMzA7XG4gICAgICAgIHRvcC54ID0gY3ViZVN0YXJ0WCArIHRvcC53aWR0aCAvIDQgLSAxO1xuICAgICAgICB0b3AuZ2V0Q2hpbGRCeU5hbWUoXCJsYmxfY291bnRcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBjb3VudC50b1N0cmluZygpO1xuICAgICAgICB0b3AuZ2V0Q2hpbGRCeU5hbWUoXCJsaW5lXzFcIikud2lkdGggPSB0b3Aud2lkdGggLyAyIC0gMzA7XG4gICAgICAgIHRvcC5nZXRDaGlsZEJ5TmFtZShcImxpbmVfMlwiKS53aWR0aCA9IHRvcC53aWR0aCAvIDIgLSAzMDtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJ0b3Aud2lkdGhcIiwgdG9wLndpZHRoKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJ0b3AucG9zXCIsIHRvcC5wb3NpdGlvbik7XG5cbiAgICAgICAgbGV0IHJpZ2h0ID0genVvYmlhb19ub2RlLmdldENoaWxkQnlOYW1lKFwicmlnaHRcIik7XG4gICAgICAgIHJpZ2h0LmhlaWdodCA9ICgoMiAqIGNvdW50ICsgMSkgKiBzY2FsZSAvIDAuMDMpICogMC43NTtcbiAgICAgICAgcmlnaHQueCA9IGNvdW50ICogc2NhbGUgLyAwLjAzICsgKGNvdW50ID4gMiA/IDAgOiBjb3VudCAqIDEwKTtcbiAgICAgICAgcmlnaHQueSA9IGNvdW50ICogNTtcbiAgICAgICAgcmlnaHQuZ2V0Q2hpbGRCeU5hbWUoXCJsYmxfY291bnRcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIihcIiArIGNvdW50ICsgXCJ4MisxKVwiO1xuICAgICAgICByaWdodC5nZXRDaGlsZEJ5TmFtZShcImxpbmVfMVwiKS5oZWlnaHQgPSByaWdodC5oZWlnaHQgLyAyIC0gMzA7XG4gICAgICAgIHJpZ2h0LmdldENoaWxkQnlOYW1lKFwibGluZV8yXCIpLmhlaWdodCA9IHJpZ2h0LmhlaWdodCAvIDIgLSAzMDtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJyaWdodC5oZWlnaHRcIiwgcmlnaHQuaGVpZ2h0KTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJyaWdodC5wb3NcIiwgcmlnaHQucG9zaXRpb24pO1xuXG4gICAgICAgIGxldCBib3R0b20gPSB6dW9iaWFvX25vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJib3R0b21cIik7XG4gICAgICAgIGJvdHRvbS5oZWlnaHQgPSAoKDIgKiBjb3VudCArIDEpICogc2NhbGUgLyAwLjAzKSAqIDAuNDUgLSBjb3VudCAqIDU7XG4gICAgICAgIGJvdHRvbS54ID0gY291bnQgKiBzY2FsZSAvIDAuMDMgLSAoY291bnQgKiAxMCk7XG4gICAgICAgIGJvdHRvbS55ID0gLWNvdW50ICogc2NhbGUgLyAwLjAzIC0gKChjb3VudCkgKiAxMCkgLSAoY291bnQgPCA1ID8gYm90dG9tLmhlaWdodCAvIGNvdW50IDogLTIgKiBjb3VudCk7XG4gICAgICAgIGJvdHRvbS5nZXRDaGlsZEJ5TmFtZShcImxpbmVfMVwiKS5oZWlnaHQgPSBib3R0b20uaGVpZ2h0IC8gMiAtIDMwO1xuICAgICAgICBib3R0b20uZ2V0Q2hpbGRCeU5hbWUoXCJsaW5lXzJcIikuaGVpZ2h0ID0gYm90dG9tLmhlaWdodCAvIDIgLSAzMDtcbiAgICAgICAgYm90dG9tLmdldENoaWxkQnlOYW1lKFwibGJsX2NvdW50XCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCIoXCIgKyBjb3VudCArIFwiKzEpXCI7XG4gICAgICAgIGxldCBib3R0b21xdWF0ID0gbmV3IGNjLlF1YXQoKVxuICAgICAgICBjYy5RdWF0LmZyb21FdWxlcihib3R0b21xdWF0LCAwLCAwLCAtNSAqIHNjYWxlIC0gMTApXG4gICAgICAgIGJvdHRvbS5zZXRSb3RhdGlvbihib3R0b21xdWF0KTtcblxuXG4gICAgICAgIHRoaXMuc2Vjb25kU3RlcEJpZ0N1YmVbMF0ueCA9IDA7XG4gICAgICAgIHRoaXMuc2Vjb25kU3RlcEJpZ0N1YmVbMF0ueiA9IHNjYWxlO1xuXG4gICAgICAgIHRoaXMuc2Vjb25kU3RlcEJpZ0N1YmVbMV0ucG9zaXRpb24gPSBjYy52MygwLCAwLCAwKTtcblxuICAgICAgICB0aGlzLnNlY29uZFN0ZXBCaWdDdWJlWzJdLnggPSAwO1xuICAgICAgICB0aGlzLnNlY29uZFN0ZXBCaWdDdWJlWzJdLnkgPSAtc2NhbGU7XG5cblxuICAgICAgICB0aGlzLnNlY29uZFN0ZXBCaWdDdWJlWzNdLnggPSAwO1xuICAgICAgICB0aGlzLnNlY29uZFN0ZXBCaWdDdWJlWzNdLnogPSBzY2FsZTtcblxuICAgICAgICB0aGlzLnNlY29uZFN0ZXBCaWdDdWJlWzRdLnkgPSAtc2NhbGU7XG4gICAgICAgIHRoaXMuc2Vjb25kU3RlcEJpZ0N1YmVbNF0ueiA9IHNjYWxlO1xuXG4gICAgICAgIHRoaXMuc2Vjb25kU3RlcEJpZ0N1YmVbNV0ueCA9IDA7XG4gICAgICAgIHRoaXMuc2Vjb25kU3RlcEJpZ0N1YmVbNV0ueSA9IC1zY2FsZTtcblxuICAgICAgICBsZXQgY291bnQyID0gY291bnQgJSAyID09IDAgPyBjb3VudCAvIDIgOiBNYXRoLmZsb29yKGNvdW50IC8gMikgKyAwLjU7XG4gICAgICAgIGxldCBvZmZzZXQgPSBjb3VudDIgKiBzY2FsZSAqICg1IC0gMSAqIDUpID4gMCA/IGNvdW50MiAqIHNjYWxlICogKDUgLSAxICogNSkgOiAwO1xuICAgICAgICB0aGlzLnNlY29uZFN0ZXBCaWdDdWJlWzBdLnBhcmVudC55ID0gY291bnQyICogc2NhbGUgKyBvZmZzZXQgPiA1ID8gNSA6IGNvdW50MiAqIHNjYWxlICsgb2Zmc2V0O1xuICAgICAgICB0aGlzLnNlY29uZFN0ZXBCaWdDdWJlWzNdLnBhcmVudC55ID0gLWNvdW50MiAqIHNjYWxlIC0gb2Zmc2V0IDwgLTUgPyAtNSA6IC1jb3VudDIgKiBzY2FsZSAtIG9mZnNldDtcbiAgICB9XG5cbiAgICBwdWJsaWMgaGlkZVp1b2JpYW8oKSB7XG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInp1b2JpYW9fbm9kZVwiKS5hY3RpdmUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICAvL+WIneWni+WMluWkp+ato+aWueS9k1xuICAgIHByaXZhdGUgaW5pdEJpZ0N1YmUoKSB7XG4gICAgICAgIHRoaXMuY2hhbmdlQmlnQ3ViZVNpemUoKTtcbiAgICB9XG5cblxuICAgIHByaXZhdGUgY2hhbmdlQmlnQ3ViZVNpemUoKSB7XG4gICAgICAgIGxldCBjb3VudCA9IFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmNvdW50O1xuXG4gICAgICAgIHRoaXMuY3ViZVJvb3ROb2RlLmdldENoaWxkQnlOYW1lKFwiZmlyc3RTdGVwXCIpLm9wYWNpdHkgPSAyNTU7XG4gICAgICAgIHRoaXMuY3ViZVJvb3ROb2RlLmdldENoaWxkQnlOYW1lKFwic2Vjb25kU3RlcFwiKS5vcGFjaXR5ID0gMDtcbiAgICAgICAgdGhpcy5jdWJlUm9vdE5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJmaXJzdFN0ZXBcIikuY2hpbGRyZW4uZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQub3BhY2l0eSA9IDA7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8v56uL5pa55L2T55qE5bGC5pWw5Li6Y291bnTvvIzkvovvvJpjb3VudD0z77yM56uL5pa55L2T5pyA5LiK5bGC5Li6MSox77yM5LiL5LiA5bGC5Li6MioyLOacgOS4i+WxguS4ujMqM1xuICAgICAgICBsZXQgY3ViZVdpZHRoID0gMTtcbiAgICAgICAgbGV0IGN1YmVIZWlnaHQgPSAxO1xuICAgICAgICBsZXQgY3ViZUxlbmd0aCA9IDE7XG4gICAgICAgIGxldCBjdWJlRGlzID0gMDtcbiAgICAgICAgbGV0IGN1YmVYRGlzID0gY3ViZVdpZHRoICsgY3ViZURpcztcbiAgICAgICAgbGV0IGN1YmVZRGlzID0gY3ViZUhlaWdodCArIGN1YmVEaXM7XG4gICAgICAgIGxldCBjdWJlWkRpcyA9IGN1YmVMZW5ndGggKyBjdWJlRGlzO1xuICAgICAgICBsZXQgY3ViZVN0YXJ0WCA9IC1jb3VudCAqIGN1YmVYRGlzIC8gMiArIGN1YmVYRGlzIC8gMjtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNvdW50IC0gaTsgaisrKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCBjb3VudCAtIGk7IGsrKykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgc21hbGxDdWJlTm9kZSA9IHRoaXMuZmlyc3RTdGVwTm9kZVtpICogY291bnQgKiBjb3VudCArIGogKiBjb3VudCArIGtdO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXNtYWxsQ3ViZU5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNtYWxsQ3ViZU5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmN1YmVQcmVmYWIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc21hbGxDdWJlTm9kZS5wYXJlbnQgPSB0aGlzLmN1YmVSb290Tm9kZS5nZXRDaGlsZEJ5TmFtZShcImZpcnN0U3RlcFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmlyc3RTdGVwTm9kZS5wdXNoKHNtYWxsQ3ViZU5vZGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIHNtYWxsQ3ViZU5vZGUucGFyZW50ID0gdGhpcy5jdWJlUm9vdE5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJmaXJzdFN0ZXBcIik7XG4gICAgICAgICAgICAgICAgICAgIHNtYWxsQ3ViZU5vZGUub3BhY2l0eSA9IDI1NTtcbiAgICAgICAgICAgICAgICAgICAgc21hbGxDdWJlTm9kZS5zZXRQb3NpdGlvbihjdWJlU3RhcnRYICsgaiAqIGN1YmVZRGlzLCBjdWJlU3RhcnRYICsgaSAqIGN1YmVYRGlzLCBjdWJlU3RhcnRYICsgayAqIGN1YmVaRGlzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHNjYWxlID0gMSArICg4IC0gY291bnQpICogMC4xNTtcbiAgICAgICAgaWYgKGNvdW50ID4gNSkge1xuICAgICAgICAgICAgc2NhbGUgPSAxICsgKDggLSBjb3VudCkgKiAwLjE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvdW50ID4gNykge1xuICAgICAgICAgICAgc2NhbGUgPSAwLjk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jdWJlUm9vdE5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJmaXJzdFN0ZXBcIikuc2NhbGUgPSBzY2FsZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNob3dTZWNvbmRTdGVwKCkge1xuICAgICAgICBsZXQgY29sb3JBcnIgPSBbXCIjMkE4MkU0XCIsIFwiI0UzMjlBRVwiLCBcIiM0M0NGN0NcIiwgXCIjNzk0OEVBXCIsIFwiI0ZGQzMwMFwiLCBcIiNGRjhEMUFcIl07XG4gICAgICAgIGxldCBjb3VudCA9IFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmNvdW50O1xuXG4gICAgICAgIHRoaXMuY3ViZVJvb3ROb2RlLmdldENoaWxkQnlOYW1lKFwiZmlyc3RTdGVwXCIpLm9wYWNpdHkgPSAwO1xuICAgICAgICB0aGlzLmN1YmVSb290Tm9kZS5nZXRDaGlsZEJ5TmFtZShcInNlY29uZFN0ZXBcIikub3BhY2l0eSA9IDI1NTtcbiAgICAgICAgdGhpcy5zZWNvbmRTdGVwQmlnQ3ViZS5mb3JFYWNoKGN1YmUgPT4ge1xuICAgICAgICAgICAgY3ViZS5jaGlsZHJlbi5mb3JFYWNoKG5vZGUgPT4ge1xuICAgICAgICAgICAgICAgIG5vZGUub3BhY2l0eSA9IDA7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IGN1YmVXaWR0aCA9IDE7XG4gICAgICAgIGxldCBjdWJlSGVpZ2h0ID0gMTtcbiAgICAgICAgbGV0IGN1YmVMZW5ndGggPSAxO1xuICAgICAgICBsZXQgY3ViZURpcyA9IDA7XG4gICAgICAgIGxldCBjdWJlWERpcyA9IGN1YmVXaWR0aCArIGN1YmVEaXM7XG4gICAgICAgIGxldCBjdWJlWURpcyA9IGN1YmVIZWlnaHQgKyBjdWJlRGlzO1xuICAgICAgICBsZXQgY3ViZVpEaXMgPSBjdWJlTGVuZ3RoICsgY3ViZURpcztcbiAgICAgICAgbGV0IGN1YmVTdGFydFggPSAtY291bnQgKiBjdWJlWERpcyAvIDIgKyBjdWJlWERpcyAvIDI7XG5cbiAgICAgICAgdGhpcy5zZWNvbmRTdGVwQmlnQ3ViZVswXS5wYXJlbnQueSA9IDU7XG4gICAgICAgIHRoaXMuc2Vjb25kU3RlcEJpZ0N1YmVbM10ucGFyZW50LnkgPSAtNTtcblxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgNjsgaW5kZXgrKykge1xuICAgICAgICAgICAgbGV0IG5vZGUgPSB0aGlzLnNlY29uZFN0ZXBCaWdDdWJlW2luZGV4XTtcbiAgICAgICAgICAgIGxldCBzY2FsZSA9IDEgKyAoOCAtIGNvdW50KSAqIDAuMTU7XG4gICAgICAgICAgICBpZiAoY291bnQgPiA1KSB7XG4gICAgICAgICAgICAgICAgc2NhbGUgPSAxICsgKDggLSBjb3VudCkgKiAwLjE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY291bnQgPiA3KSB7XG4gICAgICAgICAgICAgICAgc2NhbGUgPSAwLjk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBub2RlLnNjYWxlID0gc2NhbGU7XG4gICAgICAgICAgICBub2RlLmlzM0ROb2RlID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmIChpbmRleCA9PSAzIHx8IGluZGV4ID09IDEgfHwgaW5kZXggPT0gNSkge1xuICAgICAgICAgICAgICAgIG5vZGUuZXVsZXJBbmdsZXMgPSBjYy52MygwLCAtOTAsIDApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvL+WIhuaIkOS4pOihjOS4ieWIl++8jOWxheS4rVxuICAgICAgICAgICAgbGV0IHJvdyA9IE1hdGguZmxvb3IoaW5kZXggLyAzKTtcbiAgICAgICAgICAgIGxldCBjb2wgPSBpbmRleCAlIDM7XG4gICAgICAgICAgICBsZXQgcG9zWCA9IDA7XG4gICAgICAgICAgICBsZXQgcG9zWSA9IDA7XG4gICAgICAgICAgICAvLyBpZiAocm93ID09IDApIHtcbiAgICAgICAgICAgIC8vICAgICBwb3NZID0gNTtcbiAgICAgICAgICAgIC8vIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyAgICAgcG9zWSA9IC01O1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgaWYgKGNvbCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgcG9zWCA9IC0xMDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY29sID09IDEpIHtcbiAgICAgICAgICAgICAgICBwb3NYID0gMDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcG9zWCA9IDEwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbm9kZS5zZXRQb3NpdGlvbihwb3NYLCAwLCAwKTtcblxuICAgICAgICAgICAgaWYgKCF0aGlzLnNlY29uZFN0ZXBOb2RlW2luZGV4XSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2Vjb25kU3RlcE5vZGVbaW5kZXhdID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNvdW50IC0gaTsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgY291bnQgLSBpOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzbWFsbEN1YmVOb2RlID0gdGhpcy5zZWNvbmRTdGVwTm9kZVtpbmRleF1baSAqIGNvdW50ICogY291bnQgKyBqICogY291bnQgKyBrXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghc21hbGxDdWJlTm9kZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNtYWxsQ3ViZU5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmN1YmVQcmVmYWIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNtYWxsQ3ViZU5vZGUucGFyZW50ID0gbm9kZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlY29uZFN0ZXBOb2RlW2luZGV4XS5wdXNoKHNtYWxsQ3ViZU5vZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgc21hbGxDdWJlTm9kZS5vcGFjaXR5ID0gMjU1O1xuICAgICAgICAgICAgICAgICAgICAgICAgc21hbGxDdWJlTm9kZS5zZXRQb3NpdGlvbihjdWJlU3RhcnRYICsgaiAqIGN1YmVZRGlzLCBjdWJlU3RhcnRYICsgaSAqIGN1YmVYRGlzLCBjdWJlU3RhcnRYICsgayAqIGN1YmVaRGlzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGZhY2UgPSAwOyBmYWNlIDwgNjsgZmFjZSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZhY2VOb2RlID0gc21hbGxDdWJlTm9kZS5nZXRDaGlsZEJ5TmFtZSgoZmFjZSArIDEpLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtYXRlcmlhbCA9IGZhY2VOb2RlLmdldENvbXBvbmVudChjYy5NZXNoUmVuZGVyZXIpLmdldE1hdGVyaWFsKDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjb2xvciA9IGNjLkNvbG9yLldISVRFLmZyb21IRVgoY29sb3JBcnJbaW5kZXhdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRlcmlhbC5zZXRQcm9wZXJ0eShcImRpZmZ1c2VDb2xvclwiLCBjb2xvciwgMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgcm90YXRpb24oKSB7XG4gICAgICAgIHRoaXMuc2xpZGVyUm90YXRlLmdldENvbXBvbmVudChjYy5TbGlkZXIpLmVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgbGV0IGNvdW50ID0gU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuY291bnQ7XG4gICAgICAgIGxldCBzY2FsZSA9IDEgKyAoOCAtIGNvdW50KSAqIDAuMTU7XG4gICAgICAgIGlmIChjb3VudCA+IDUpIHtcbiAgICAgICAgICAgIHNjYWxlID0gMSArICg4IC0gY291bnQpICogMC4xO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb3VudCA+IDcpIHtcbiAgICAgICAgICAgIHNjYWxlID0gMC45O1xuICAgICAgICB9XG4gICAgICAgIGxldCBub2RlXzAgPSB0aGlzLnNlY29uZFN0ZXBCaWdDdWJlWzBdXG4gICAgICAgIG5vZGVfMC5pczNETm9kZSA9IHRydWU7XG4gICAgICAgIGNjLnR3ZWVuKG5vZGVfMCkudG8oMSwgeyBldWxlckFuZ2xlczogY2MudjMoLTkwLCAwLCAwKSwgejogc2NhbGUgfSkuc3RhcnQoKTtcblxuICAgICAgICBsZXQgbm9kZV8xID0gdGhpcy5zZWNvbmRTdGVwQmlnQ3ViZVsxXVxuICAgICAgICBub2RlXzEuaXMzRE5vZGUgPSB0cnVlO1xuICAgICAgICBjYy50d2Vlbihub2RlXzEpLnRvKDEsIHsgZXVsZXJBbmdsZXM6IGNjLnYzKDE4MCwgLTkwLCAwKSB9KS5zdGFydCgpO1xuXG4gICAgICAgIGxldCBub2RlXzIgPSB0aGlzLnNlY29uZFN0ZXBCaWdDdWJlWzJdXG4gICAgICAgIG5vZGVfMi5pczNETm9kZSA9IHRydWU7XG4gICAgICAgIGNjLnR3ZWVuKG5vZGVfMikudG8oMSwgeyBldWxlckFuZ2xlczogY2MudjMoMCwgMCwgOTApLCB5OiAtc2NhbGUgfSkuc3RhcnQoKTtcblxuICAgICAgICBsZXQgbm9kZV8zID0gdGhpcy5zZWNvbmRTdGVwQmlnQ3ViZVszXVxuICAgICAgICBub2RlXzMuaXMzRE5vZGUgPSB0cnVlO1xuICAgICAgICBjYy50d2Vlbihub2RlXzMpLnRvKDEsIHsgZXVsZXJBbmdsZXM6IGNjLnYzKDkwLCA5MCwgMCksIHo6IHNjYWxlIH0pLnN0YXJ0KCk7XG5cbiAgICAgICAgbGV0IG5vZGVfNCA9IHRoaXMuc2Vjb25kU3RlcEJpZ0N1YmVbNF1cbiAgICAgICAgbm9kZV80LmlzM0ROb2RlID0gdHJ1ZTtcbiAgICAgICAgY2MudHdlZW4obm9kZV80KS50bygxLCB7IGV1bGVyQW5nbGVzOiBjYy52MygwLCAxODAsIDApLCB5OiAtc2NhbGUsIHo6IHNjYWxlIH0pLnN0YXJ0KCk7XG5cbiAgICAgICAgbGV0IG5vZGVfNSA9IHRoaXMuc2Vjb25kU3RlcEJpZ0N1YmVbNV1cbiAgICAgICAgbm9kZV81LmlzM0ROb2RlID0gdHJ1ZTtcbiAgICAgICAgY2MudHdlZW4obm9kZV81KS50bygxLCB7IGV1bGVyQW5nbGVzOiBjYy52MygwLCAtOTAsIC05MCksIHk6IC1zY2FsZSB9KS5zdGFydCgpO1xuXG4gICAgICAgIGxldCBzbGlkZXIgPSB0aGlzLnNsaWRlclJvdGF0ZS5nZXRDb21wb25lbnQoY2MuU2xpZGVyKTtcbiAgICAgICAgY2MudHdlZW4oc2xpZGVyKS50bygxLCB7IHByb2dyZXNzOiAxIH0pLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zbGlkZXJSb3RhdGUuZ2V0Q29tcG9uZW50KGNjLlNsaWRlcikuZW5hYmxlZCA9IHRydWU7XG4gICAgICAgIH0pLnN0YXJ0KCk7XG4gICAgfVxuXG4gICAgcHVibGljIG1lcmdlKCkge1xuICAgICAgICB0aGlzLnNsaWRlck1lcmdlLmdldENvbXBvbmVudChjYy5TbGlkZXIpLmVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zZWNvbmRTdGVwQmlnQ3ViZVswXS5ldWxlckFuZ2xlcyA9IGNjLnYzKC05MCAqIDEsIDAsIDApO1xuICAgICAgICB0aGlzLnNlY29uZFN0ZXBCaWdDdWJlWzFdLmV1bGVyQW5nbGVzID0gY2MudjMoMTgwICogMSwgLTkwLCAwKTtcbiAgICAgICAgdGhpcy5zZWNvbmRTdGVwQmlnQ3ViZVsyXS5ldWxlckFuZ2xlcyA9IGNjLnYzKDAsIDAsIDkwICogMSk7XG4gICAgICAgIHRoaXMuc2Vjb25kU3RlcEJpZ0N1YmVbM10uZXVsZXJBbmdsZXMgPSBjYy52Myg5MCAqIDEsIC05MCAqICgxIC0gMSkgKyA5MCAqIDEsIDApO1xuICAgICAgICB0aGlzLnNlY29uZFN0ZXBCaWdDdWJlWzRdLmV1bGVyQW5nbGVzID0gY2MudjMoMCwgMTgwICogMSwgMCk7XG4gICAgICAgIHRoaXMuc2Vjb25kU3RlcEJpZ0N1YmVbNV0uZXVsZXJBbmdsZXMgPSBjYy52MygwLCAtOTAsIC05MCAqIDEpO1xuICAgICAgICBsZXQgc2xpZGVyID0gdGhpcy5zbGlkZXJNZXJnZS5nZXRDb21wb25lbnQoY2MuU2xpZGVyKTtcbiAgICAgICAgY2MudHdlZW4oc2xpZGVyKS50byg1LCB7IHByb2dyZXNzOiAxIH0pLnN0YXJ0KCk7XG5cbiAgICAgICAgbGV0IG5vZGVfMCA9IHRoaXMuc2Vjb25kU3RlcEJpZ0N1YmVbMF07XG4gICAgICAgIGxldCBub2RlXzEgPSB0aGlzLnNlY29uZFN0ZXBCaWdDdWJlWzFdO1xuICAgICAgICBsZXQgbm9kZV8yID0gdGhpcy5zZWNvbmRTdGVwQmlnQ3ViZVsyXTtcbiAgICAgICAgbGV0IG5vZGVfMyA9IHRoaXMuc2Vjb25kU3RlcEJpZ0N1YmVbM107XG4gICAgICAgIGxldCBub2RlXzQgPSB0aGlzLnNlY29uZFN0ZXBCaWdDdWJlWzRdO1xuICAgICAgICBsZXQgbm9kZV81ID0gdGhpcy5zZWNvbmRTdGVwQmlnQ3ViZVs1XTtcblxuICAgICAgICBsZXQgY291bnQgPSBTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5jb3VudDtcbiAgICAgICAgbGV0IHNjYWxlID0gMSArICg4IC0gY291bnQpICogMC4xNTtcbiAgICAgICAgaWYgKGNvdW50ID4gNSkge1xuICAgICAgICAgICAgc2NhbGUgPSAxICsgKDggLSBjb3VudCkgKiAwLjE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvdW50ID4gNykge1xuICAgICAgICAgICAgc2NhbGUgPSAwLjk7XG4gICAgICAgIH1cbiAgICAgICAgU291bmRNYW5hZ2VyLnN0b3BTb3VuZEJ5TmFtZShcIuenu+WKqFwiKTtcbiAgICAgICAgU291bmRNYW5hZ2VyLnBsYXlFZmZlY3QoXCLnp7vliqhcIiwgZmFsc2UpO1xuICAgICAgICBjYy50d2Vlbihub2RlXzApLnRvKDEsIHsgeDogMCB9KS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgIFNvdW5kTWFuYWdlci5zdG9wU291bmRCeU5hbWUoXCLmi7xcIik7XG4gICAgICAgICAgICBTb3VuZE1hbmFnZXIucGxheUVmZmVjdChcIuaLvFwiLCBmYWxzZSwgZmFsc2UpO1xuICAgICAgICAgICAgU291bmRNYW5hZ2VyLnN0b3BTb3VuZEJ5TmFtZShcIuenu+WKqFwiKTtcbiAgICAgICAgICAgIFNvdW5kTWFuYWdlci5wbGF5RWZmZWN0KFwi56e75YqoXCIsIGZhbHNlLCBmYWxzZSk7XG4gICAgICAgICAgICBjYy50d2Vlbihub2RlXzIpLnRvKDEsIHsgeDogMCwgeTogLXNjYWxlIH0pLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIFNvdW5kTWFuYWdlci5zdG9wU291bmRCeU5hbWUoXCLmi7xcIik7XG4gICAgICAgICAgICAgICAgU291bmRNYW5hZ2VyLnBsYXlFZmZlY3QoXCLmi7xcIiwgZmFsc2UsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBTb3VuZE1hbmFnZXIuc3RvcFNvdW5kQnlOYW1lKFwi56e75YqoXCIpO1xuICAgICAgICAgICAgICAgIFNvdW5kTWFuYWdlci5wbGF5RWZmZWN0KFwi56e75YqoXCIsIGZhbHNlLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgY2MudHdlZW4obm9kZV8zKS50bygxLCB7IHg6IDAgfSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIFNvdW5kTWFuYWdlci5zdG9wU291bmRCeU5hbWUoXCLmi7xcIik7XG4gICAgICAgICAgICAgICAgICAgIFNvdW5kTWFuYWdlci5wbGF5RWZmZWN0KFwi5ou8XCIsIGZhbHNlLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIFNvdW5kTWFuYWdlci5zdG9wU291bmRCeU5hbWUoXCLnp7vliqhcIik7XG4gICAgICAgICAgICAgICAgICAgIFNvdW5kTWFuYWdlci5wbGF5RWZmZWN0KFwi56e75YqoXCIsIGZhbHNlLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKG5vZGVfNSkudG8oMSwgeyB4OiAwIH0pLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgU291bmRNYW5hZ2VyLnN0b3BTb3VuZEJ5TmFtZShcIuaLvFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFNvdW5kTWFuYWdlci5wbGF5RWZmZWN0KFwi5ou8XCIsIGZhbHNlLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBTb3VuZE1hbmFnZXIuc3RvcFNvdW5kQnlOYW1lKFwi56e75YqoXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgU291bmRNYW5hZ2VyLnBsYXlFZmZlY3QoXCLnp7vliqhcIiwgZmFsc2UsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjb3VudDIgPSBjb3VudCAlIDIgPT0gMCA/IGNvdW50IC8gMiA6IE1hdGguZmxvb3IoY291bnQgLyAyKSArIDAuNTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKG5vZGVfMC5wYXJlbnQpLnRvKDEsIHsgeTogY291bnQyICogc2NhbGUgfSkuY2FsbCgoKSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYy50d2Vlbihub2RlXzMucGFyZW50KS50bygxLCB7IHk6IC1jb3VudDIgKiBzY2FsZSB9KS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTb3VuZE1hbmFnZXIuc3RvcFNvdW5kQnlOYW1lKFwi5ou8XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNvdW5kTWFuYWdlci5wbGF5RWZmZWN0KFwi5ou8XCIsIGZhbHNlLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTGlzdGVuZXJNYW5hZ2VyLmRpc3BhdGNoKEV2ZW50VHlwZS5oZWJpbmd3YW5jaGVuZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zbGlkZXJNZXJnZS5nZXRDb21wb25lbnQoY2MuU2xpZGVyKS5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgICAgIH0pLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgfSkuc3RhcnQoKTtcbiAgICAgICAgICAgIH0pLnN0YXJ0KCk7XG4gICAgICAgIH0pLnN0YXJ0KCk7XG4gICAgfVxuXG4gICAgcHVibGljIGNvbnRyb2xSb3RhdGUocHJvZ3Jlc3M6IG51bWJlcikge1xuICAgICAgICB0aGlzLnN0b3BBbGxUd2VlbigpO1xuICAgICAgICB0aGlzLnNlY29uZFN0ZXBCaWdDdWJlWzBdLmV1bGVyQW5nbGVzID0gY2MudjMoLTkwICogcHJvZ3Jlc3MsIDAsIDApO1xuICAgICAgICB0aGlzLnNlY29uZFN0ZXBCaWdDdWJlWzFdLmV1bGVyQW5nbGVzID0gY2MudjMoMTgwICogcHJvZ3Jlc3MsIC05MCwgMCk7XG4gICAgICAgIHRoaXMuc2Vjb25kU3RlcEJpZ0N1YmVbMl0uZXVsZXJBbmdsZXMgPSBjYy52MygwLCAwLCA5MCAqIHByb2dyZXNzKTtcbiAgICAgICAgdGhpcy5zZWNvbmRTdGVwQmlnQ3ViZVszXS5ldWxlckFuZ2xlcyA9IGNjLnYzKDkwICogcHJvZ3Jlc3MsIC05MCAqICgxIC0gcHJvZ3Jlc3MpICsgOTAgKiBwcm9ncmVzcywgMCk7XG4gICAgICAgIHRoaXMuc2Vjb25kU3RlcEJpZ0N1YmVbNF0uZXVsZXJBbmdsZXMgPSBjYy52MygwLCAxODAgKiBwcm9ncmVzcywgMCk7XG4gICAgICAgIHRoaXMuc2Vjb25kU3RlcEJpZ0N1YmVbNV0uZXVsZXJBbmdsZXMgPSBjYy52MygwLCAtOTAsIC05MCAqIHByb2dyZXNzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY29udHJvbE1lcmdlKHByb2dyZXNzOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5zdG9wQWxsVHdlZW4oKTtcbiAgICAgICAgbGV0IGNvdW50ID0gU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuY291bnQ7XG4gICAgICAgIGxldCBzY2FsZSA9IDEgKyAoOCAtIGNvdW50KSAqIDAuMTU7XG4gICAgICAgIGlmIChjb3VudCA+IDUpIHtcbiAgICAgICAgICAgIHNjYWxlID0gMSArICg4IC0gY291bnQpICogMC4xO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb3VudCA+IDcpIHtcbiAgICAgICAgICAgIHNjYWxlID0gMC45O1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9ncmVzcyAqIDUgPD0gMSkge1xuICAgICAgICAgICAgdGhpcy5zZWNvbmRTdGVwQmlnQ3ViZVswXS5wYXJlbnQueSA9IDU7XG4gICAgICAgICAgICB0aGlzLnNlY29uZFN0ZXBCaWdDdWJlWzNdLnBhcmVudC55ID0gLTU7XG5cbiAgICAgICAgICAgIHRoaXMuc2Vjb25kU3RlcEJpZ0N1YmVbMF0ueCA9IC0xMCAqICgxIC0gcHJvZ3Jlc3MgKiA1KTtcbiAgICAgICAgICAgIHRoaXMuc2Vjb25kU3RlcEJpZ0N1YmVbMF0ueiA9IHNjYWxlO1xuXG4gICAgICAgICAgICB0aGlzLnNlY29uZFN0ZXBCaWdDdWJlWzFdLnBvc2l0aW9uID0gY2MudjMoMCwgMCwgMCk7XG5cbiAgICAgICAgICAgIHRoaXMuc2Vjb25kU3RlcEJpZ0N1YmVbMl0ueCA9IDEwO1xuICAgICAgICAgICAgdGhpcy5zZWNvbmRTdGVwQmlnQ3ViZVsyXS55ID0gLXNjYWxlO1xuXG4gICAgICAgICAgICB0aGlzLnNlY29uZFN0ZXBCaWdDdWJlWzNdLnggPSAtMTA7XG4gICAgICAgICAgICB0aGlzLnNlY29uZFN0ZXBCaWdDdWJlWzNdLnogPSBzY2FsZTtcblxuICAgICAgICAgICAgdGhpcy5zZWNvbmRTdGVwQmlnQ3ViZVs0XS55ID0gLXNjYWxlO1xuICAgICAgICAgICAgdGhpcy5zZWNvbmRTdGVwQmlnQ3ViZVs0XS56ID0gc2NhbGU7XG5cbiAgICAgICAgICAgIHRoaXMuc2Vjb25kU3RlcEJpZ0N1YmVbNV0ueCA9IDEwO1xuICAgICAgICAgICAgdGhpcy5zZWNvbmRTdGVwQmlnQ3ViZVs1XS55ID0gLXNjYWxlO1xuICAgICAgICB9IGVsc2UgaWYgKHByb2dyZXNzICogNSA8PSAyKSB7XG4gICAgICAgICAgICB0aGlzLnNlY29uZFN0ZXBCaWdDdWJlWzBdLnBhcmVudC55ID0gNTtcbiAgICAgICAgICAgIHRoaXMuc2Vjb25kU3RlcEJpZ0N1YmVbM10ucGFyZW50LnkgPSAtNTtcblxuICAgICAgICAgICAgdGhpcy5zZWNvbmRTdGVwQmlnQ3ViZVswXS54ID0gMDtcbiAgICAgICAgICAgIHRoaXMuc2Vjb25kU3RlcEJpZ0N1YmVbMF0ueiA9IHNjYWxlO1xuXG4gICAgICAgICAgICB0aGlzLnNlY29uZFN0ZXBCaWdDdWJlWzFdLnBvc2l0aW9uID0gY2MudjMoMCwgMCwgMCk7XG5cbiAgICAgICAgICAgIHRoaXMuc2Vjb25kU3RlcEJpZ0N1YmVbMl0ueCA9IDEwICogKDIgLSBwcm9ncmVzcyAqIDUpO1xuICAgICAgICAgICAgdGhpcy5zZWNvbmRTdGVwQmlnQ3ViZVsyXS55ID0gLXNjYWxlO1xuXG4gICAgICAgICAgICB0aGlzLnNlY29uZFN0ZXBCaWdDdWJlWzNdLnggPSAtMTA7XG4gICAgICAgICAgICB0aGlzLnNlY29uZFN0ZXBCaWdDdWJlWzNdLnogPSBzY2FsZTtcblxuICAgICAgICAgICAgdGhpcy5zZWNvbmRTdGVwQmlnQ3ViZVs0XS55ID0gLXNjYWxlO1xuICAgICAgICAgICAgdGhpcy5zZWNvbmRTdGVwQmlnQ3ViZVs0XS56ID0gc2NhbGU7XG5cbiAgICAgICAgICAgIHRoaXMuc2Vjb25kU3RlcEJpZ0N1YmVbNV0ueCA9IDEwO1xuICAgICAgICAgICAgdGhpcy5zZWNvbmRTdGVwQmlnQ3ViZVs1XS55ID0gLXNjYWxlO1xuICAgICAgICB9IGVsc2UgaWYgKHByb2dyZXNzICogNSA8PSAzKSB7XG4gICAgICAgICAgICB0aGlzLnNlY29uZFN0ZXBCaWdDdWJlWzBdLnBhcmVudC55ID0gNTtcbiAgICAgICAgICAgIHRoaXMuc2Vjb25kU3RlcEJpZ0N1YmVbM10ucGFyZW50LnkgPSAtNTtcblxuICAgICAgICAgICAgdGhpcy5zZWNvbmRTdGVwQmlnQ3ViZVswXS54ID0gMDtcbiAgICAgICAgICAgIHRoaXMuc2Vjb25kU3RlcEJpZ0N1YmVbMF0ueiA9IHNjYWxlO1xuXG4gICAgICAgICAgICB0aGlzLnNlY29uZFN0ZXBCaWdDdWJlWzFdLnBvc2l0aW9uID0gY2MudjMoMCwgMCwgMCk7XG5cbiAgICAgICAgICAgIHRoaXMuc2Vjb25kU3RlcEJpZ0N1YmVbMl0ueCA9IDA7XG4gICAgICAgICAgICB0aGlzLnNlY29uZFN0ZXBCaWdDdWJlWzJdLnkgPSAtc2NhbGU7XG5cbiAgICAgICAgICAgIHRoaXMuc2Vjb25kU3RlcEJpZ0N1YmVbM10ueCA9IC0xMCAqICgzIC0gcHJvZ3Jlc3MgKiA1KTtcbiAgICAgICAgICAgIHRoaXMuc2Vjb25kU3RlcEJpZ0N1YmVbM10ueiA9IHNjYWxlO1xuXG4gICAgICAgICAgICB0aGlzLnNlY29uZFN0ZXBCaWdDdWJlWzRdLnkgPSAtc2NhbGU7XG4gICAgICAgICAgICB0aGlzLnNlY29uZFN0ZXBCaWdDdWJlWzRdLnogPSBzY2FsZTtcblxuICAgICAgICAgICAgdGhpcy5zZWNvbmRTdGVwQmlnQ3ViZVs1XS54ID0gMTA7XG4gICAgICAgICAgICB0aGlzLnNlY29uZFN0ZXBCaWdDdWJlWzVdLnkgPSAtc2NhbGU7XG4gICAgICAgIH0gZWxzZSBpZiAocHJvZ3Jlc3MgKiA1IDw9IDQpIHtcbiAgICAgICAgICAgIHRoaXMuc2Vjb25kU3RlcEJpZ0N1YmVbMF0ucGFyZW50LnkgPSA1O1xuICAgICAgICAgICAgdGhpcy5zZWNvbmRTdGVwQmlnQ3ViZVszXS5wYXJlbnQueSA9IC01O1xuXG4gICAgICAgICAgICB0aGlzLnNlY29uZFN0ZXBCaWdDdWJlWzBdLnggPSAwO1xuICAgICAgICAgICAgdGhpcy5zZWNvbmRTdGVwQmlnQ3ViZVswXS56ID0gc2NhbGU7XG5cbiAgICAgICAgICAgIHRoaXMuc2Vjb25kU3RlcEJpZ0N1YmVbMV0ucG9zaXRpb24gPSBjYy52MygwLCAwLCAwKTtcblxuICAgICAgICAgICAgdGhpcy5zZWNvbmRTdGVwQmlnQ3ViZVsyXS54ID0gMDtcbiAgICAgICAgICAgIHRoaXMuc2Vjb25kU3RlcEJpZ0N1YmVbMl0ueSA9IC1zY2FsZTtcblxuICAgICAgICAgICAgdGhpcy5zZWNvbmRTdGVwQmlnQ3ViZVszXS54ID0gMDtcbiAgICAgICAgICAgIHRoaXMuc2Vjb25kU3RlcEJpZ0N1YmVbM10ueiA9IHNjYWxlO1xuXG4gICAgICAgICAgICB0aGlzLnNlY29uZFN0ZXBCaWdDdWJlWzRdLnkgPSAtc2NhbGU7XG4gICAgICAgICAgICB0aGlzLnNlY29uZFN0ZXBCaWdDdWJlWzRdLnogPSBzY2FsZTtcblxuICAgICAgICAgICAgdGhpcy5zZWNvbmRTdGVwQmlnQ3ViZVs1XS54ID0gMTAgKiAoNCAtIHByb2dyZXNzICogNSk7XG4gICAgICAgICAgICB0aGlzLnNlY29uZFN0ZXBCaWdDdWJlWzVdLnkgPSAtc2NhbGU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNlY29uZFN0ZXBCaWdDdWJlWzBdLnggPSAwO1xuICAgICAgICAgICAgdGhpcy5zZWNvbmRTdGVwQmlnQ3ViZVswXS56ID0gc2NhbGU7XG5cbiAgICAgICAgICAgIHRoaXMuc2Vjb25kU3RlcEJpZ0N1YmVbMV0ucG9zaXRpb24gPSBjYy52MygwLCAwLCAwKTtcblxuICAgICAgICAgICAgdGhpcy5zZWNvbmRTdGVwQmlnQ3ViZVsyXS54ID0gMDtcbiAgICAgICAgICAgIHRoaXMuc2Vjb25kU3RlcEJpZ0N1YmVbMl0ueSA9IC1zY2FsZTtcblxuXG4gICAgICAgICAgICB0aGlzLnNlY29uZFN0ZXBCaWdDdWJlWzNdLnggPSAwO1xuICAgICAgICAgICAgdGhpcy5zZWNvbmRTdGVwQmlnQ3ViZVszXS56ID0gc2NhbGU7XG5cbiAgICAgICAgICAgIHRoaXMuc2Vjb25kU3RlcEJpZ0N1YmVbNF0ueSA9IC1zY2FsZTtcbiAgICAgICAgICAgIHRoaXMuc2Vjb25kU3RlcEJpZ0N1YmVbNF0ueiA9IHNjYWxlO1xuXG4gICAgICAgICAgICB0aGlzLnNlY29uZFN0ZXBCaWdDdWJlWzVdLnggPSAwO1xuICAgICAgICAgICAgdGhpcy5zZWNvbmRTdGVwQmlnQ3ViZVs1XS55ID0gLXNjYWxlO1xuXG4gICAgICAgICAgICBsZXQgY291bnQyID0gY291bnQgJSAyID09IDAgPyBjb3VudCAvIDIgOiBNYXRoLmZsb29yKGNvdW50IC8gMikgKyAwLjU7XG4gICAgICAgICAgICBsZXQgb2Zmc2V0ID0gY291bnQyICogc2NhbGUgKiAoNSAtIHByb2dyZXNzICogNSkgPiAwID8gY291bnQyICogc2NhbGUgKiAoNSAtIHByb2dyZXNzICogNSkgOiAwO1xuICAgICAgICAgICAgdGhpcy5zZWNvbmRTdGVwQmlnQ3ViZVswXS5wYXJlbnQueSA9IGNvdW50MiAqIHNjYWxlICsgb2Zmc2V0ID4gNSA/IDUgOiBjb3VudDIgKiBzY2FsZSArIG9mZnNldDtcbiAgICAgICAgICAgIHRoaXMuc2Vjb25kU3RlcEJpZ0N1YmVbM10ucGFyZW50LnkgPSAtY291bnQyICogc2NhbGUgLSBvZmZzZXQgPCAtNSA/IC01IDogLWNvdW50MiAqIHNjYWxlIC0gb2Zmc2V0O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdG9wQWxsVHdlZW4oKSB7XG4gICAgICAgIHRoaXMuc2Vjb25kU3RlcEJpZ0N1YmUuZm9yRWFjaChjdWJlID0+IHtcbiAgICAgICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldChjdWJlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldCh0aGlzLnNlY29uZFN0ZXBCaWdDdWJlWzBdLnBhcmVudCk7XG4gICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldCh0aGlzLnNlY29uZFN0ZXBCaWdDdWJlWzNdLnBhcmVudCk7XG4gICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldCh0aGlzLnNsaWRlclJvdGF0ZS5nZXRDb21wb25lbnQoY2MuU2xpZGVyKSk7XG4gICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldCh0aGlzLnNsaWRlck1lcmdlLmdldENvbXBvbmVudChjYy5TbGlkZXIpKTtcbiAgICB9XG59XG4iXX0=