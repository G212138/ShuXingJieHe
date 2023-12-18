"use strict";
cc._RF.push(module, '7af02EPP/BOs5jB1F8+Z9kE', 'GameLayer');
// game/scripts/UI/Layer/GameLayer.ts

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
var NetWork_1 = require("../../../../frame/scripts/Http/NetWork");
var ListenerManager_1 = require("../../../../frame/scripts/Manager/ListenerManager");
var SyncDataManager_1 = require("../../../../frame/scripts/Manager/SyncDataManager");
var T2M_1 = require("../../../../frame/scripts/SDK/T2M");
var EventType_1 = require("../../Data/EventType");
var Cube_1 = require("../Item/Cube");
var GameUI_1 = require("../Item/GameUI");
var ThreeDNode_1 = require("../Item/ThreeDNode");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameLayer = /** @class */ (function (_super) {
    __extends(GameLayer, _super);
    function GameLayer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.threeDNode = null;
        _this.gameUI = null;
        _this.threeDCamera = null;
        _this.cubeRootNode = null;
        _this.addMinus = null;
        _this.img_huangbian = [];
        return _this;
    }
    GameLayer.prototype.onLoad = function () {
        ListenerManager_1.ListenerManager.on(EventType_1.EventType.ENTER_GAME, this.handleEnterGame, this);
        ListenerManager_1.ListenerManager.on(EventType_1.EventType.GAME_RECONNECT, this.handleEnterGame, this);
        T2M_1.T2M.addSyncEventListener(EventType_1.EventType.DRAG_END, this.handleDragEnd.bind(this));
        // this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this)
        // this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this)
        // this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this)
    };
    GameLayer.prototype.onDestroy = function () {
        ListenerManager_1.ListenerManager.off(EventType_1.EventType.ENTER_GAME, this.handleEnterGame, this);
        ListenerManager_1.ListenerManager.off(EventType_1.EventType.GAME_RECONNECT, this.handleEnterGame, this);
        T2M_1.T2M.removeSyncEventListener(EventType_1.EventType.DRAG_END);
        // this.node.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this)
        // this.node.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this)
        // this.node.off(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this)
    };
    GameLayer.prototype.handleEnterGame = function () {
        this.threeDNode.init();
        this.gameUI.init();
        var eulerX = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.eulerX;
        var eulerY = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.eulerY;
        var eulerZ = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.eulerZ;
        var rotation = cc.quat();
        cc.Quat.fromEuler(rotation, eulerX, eulerY, eulerZ);
        this.cubeRootNode.setRotation(rotation);
    };
    GameLayer.prototype.onDragStart = function (data) {
        this.addMinus.active = false;
        this.img_huangbian[0].active = false;
        this.img_huangbian[1].active = false;
        this.img_huangbian[2].active = false;
    };
    GameLayer.prototype.onDragMove = function (data) {
        var pos = data.target.parent.convertToWorldSpaceAR(cc.v2(data.pos.x, data.pos.y));
        var prevPos = data.target.parent.convertToWorldSpaceAR(cc.v2(data.prevLocation.x, data.prevLocation.y));
        var prevLocation = cc.v2(prevPos.x, prevPos.y);
        var curLocation = cc.v2(pos.x, pos.y);
        var vel = curLocation.sub(prevLocation);
        var disX = vel.x;
        var disY = vel.y;
        var eulerX = this.cubeRootNode.eulerAngles.x;
        var eulerY = this.cubeRootNode.eulerAngles.y;
        var eulerZ = this.cubeRootNode.eulerAngles.z;
        var quat = new cc.Quat();
        cc.Quat.fromEuler(quat, eulerX, eulerY, eulerZ);
        var changed = false;
        var dot = vel.normalize().dot(cc.Vec2.RIGHT);
        var rotateByUp = Math.abs(dot) > Math.cos(cc.misc.degreesToRadians(45));
        if (rotateByUp) {
            var angle = (disX / 2436 * 360);
            // eulerY += angle
            cc.Quat.rotateAround(quat, quat, cc.Vec3.UP, cc.misc.degreesToRadians(angle));
            changed = true;
        }
        if (!rotateByUp) {
            var angle = -(disY / 2436 * 720);
            // eulerX += angle
            cc.Quat.rotateAround(quat, quat, this.threeDCamera.right, cc.misc.degreesToRadians(angle));
            changed = true;
        }
        if (changed) {
            var outEuler = cc.v3();
            quat.toEuler(outEuler);
            this.onChangeBigCubeEuler(outEuler.x, outEuler.y, outEuler.z);
        }
        // let dif = data.target.parent.convertToWorldSpaceAR(cc.v2(data.delta.x, data.delta.y));
        // let q_tmp = new cc.Quat();
        // let v_tmp = cc.v3(-dif.y, dif.x, 0);
        // v_tmp.normalizeSelf();
        // let eulerX = this.cubeRootNode.eulerAngles.x;
        // let eulerY = this.cubeRootNode.eulerAngles.y;
        // let eulerZ = this.cubeRootNode.eulerAngles.z;
        // let quat = new cc.Quat()
        // cc.Quat.fromEuler(quat, eulerX, eulerY, eulerZ)
        // let out_Q = cc.Quat.rotateAround(q_tmp, quat, v_tmp, Math.PI * 0.007);
        // this.cubeRootNode.setRotation(out_Q.x, out_Q.y, out_Q.z, out_Q.w);
    };
    GameLayer.prototype.onDragEnd = function (data) {
        if (data.isClick) {
            this.addMinus.active = false;
            this.img_huangbian[0].active = false;
            this.img_huangbian[1].active = false;
            this.img_huangbian[2].active = false;
        }
        this.node.position = cc.Vec3.ZERO;
        if (data.isClick && SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.enableClick) {
            var pos = data.target.parent.convertToWorldSpaceAR(cc.v2(data.pos.x, data.pos.y));
            var location = cc.v2(pos.x, pos.y);
            var ray = this.threeDCamera.getComponent(cc.Camera).getRay(location);
            var results = cc.geomUtils.intersect.raycast(this.cubeRootNode, ray, null, null);
            for (var i = 0; i < results.length; i++) {
                if (results[0].node.parent.getComponent(Cube_1.default) && results[1]) {
                    results[0].node.parent.getComponent(Cube_1.default).clickCube(results[1].node.name);
                }
                return;
            }
        }
        if (NetWork_1.NetWork.isMaster || !NetWork_1.NetWork.isSync) {
            var data_1 = {
                eulerX: SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.eulerX,
                eulerY: SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.eulerY,
                eulerZ: SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.eulerZ
            };
            T2M_1.T2M.dispatch(EventType_1.EventType.DRAG_END, data_1);
        }
    };
    GameLayer.prototype.onChangeBigCubeEuler = function (eulerX, eulerY, eulerZ) {
        var rotation = cc.quat();
        cc.Quat.fromEuler(rotation, eulerX, eulerY, eulerZ);
        SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.eulerX = eulerX;
        SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.eulerY = eulerY;
        SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.eulerZ = eulerZ;
        this.cubeRootNode.setRotation(rotation);
    };
    GameLayer.prototype.handleDragEnd = function (data) {
        var rotation = cc.quat();
        cc.Quat.fromEuler(rotation, data.eulerX, data.eulerY, data.eulerZ);
        this.cubeRootNode.setRotation(rotation);
        //将this.cubeRootNode的轴重置为世界坐标系的轴
        // let euler = this.cubeRootNode.eulerAngles;
        // let quat = new cc.Quat()
        // cc.Quat.fromEuler(quat, euler.x, euler.y, euler.z)
        // let outEuler = cc.v3()
        // quat.toEuler(outEuler)
        // this.onChangeBigCubeEuler(outEuler.x, outEuler.y, outEuler.z)
    };
    __decorate([
        property(ThreeDNode_1.default)
    ], GameLayer.prototype, "threeDNode", void 0);
    __decorate([
        property(GameUI_1.default)
    ], GameLayer.prototype, "gameUI", void 0);
    __decorate([
        property(cc.Node)
    ], GameLayer.prototype, "threeDCamera", void 0);
    __decorate([
        property(cc.Node)
    ], GameLayer.prototype, "cubeRootNode", void 0);
    __decorate([
        property(cc.Node)
    ], GameLayer.prototype, "addMinus", void 0);
    __decorate([
        property(cc.Node)
    ], GameLayer.prototype, "img_huangbian", void 0);
    GameLayer = __decorate([
        ccclass
    ], GameLayer);
    return GameLayer;
}(cc.Component));
exports.default = GameLayer;

cc._RF.pop();