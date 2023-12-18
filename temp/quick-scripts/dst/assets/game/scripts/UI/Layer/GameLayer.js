
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game/scripts/UI/Layer/GameLayer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZVxcc2NyaXB0c1xcVUlcXExheWVyXFxHYW1lTGF5ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsa0VBQWlFO0FBQ2pFLHFGQUFvRjtBQUNwRixxRkFBb0Y7QUFDcEYseURBQXdEO0FBQ3hELGtEQUFpRDtBQUNqRCxxQ0FBZ0M7QUFDaEMseUNBQW9DO0FBQ3BDLGlEQUEyQztBQUVyQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF1Qyw2QkFBWTtJQUFuRDtRQUFBLHFFQWdLQztRQTlKVyxnQkFBVSxHQUFjLElBQUksQ0FBQztRQUU3QixZQUFNLEdBQVcsSUFBSSxDQUFDO1FBR3RCLGtCQUFZLEdBQVksSUFBSSxDQUFDO1FBRTdCLGtCQUFZLEdBQVksSUFBSSxDQUFDO1FBRTdCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsbUJBQWEsR0FBYyxFQUFFLENBQUM7O0lBbUoxQyxDQUFDO0lBL0lHLDBCQUFNLEdBQU47UUFDSSxpQ0FBZSxDQUFDLEVBQUUsQ0FBQyxxQkFBUyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3JFLGlDQUFlLENBQUMsRUFBRSxDQUFDLHFCQUFTLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFekUsU0FBRyxDQUFDLG9CQUFvQixDQUFDLHFCQUFTLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDNUUsdUVBQXVFO1FBQ3ZFLHFFQUFxRTtRQUNyRSxtRUFBbUU7SUFDdkUsQ0FBQztJQUNELDZCQUFTLEdBQVQ7UUFDSSxpQ0FBZSxDQUFDLEdBQUcsQ0FBQyxxQkFBUyxDQUFDLFVB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Q3pCLHlCQUF5QjtRQUN6QixnRUFBZ0U7SUFDcEUsQ0FBQztJQTdKRDtRQURDLFFBQVEsQ0FBQyxvQkFBUyxDQUFDO2lEQUNpQjtJQUVyQztRQURDLFFBQVEsQ0FBQyxnQkFBTSxDQUFDOzZDQUNhO0lBRzlCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7bURBQ21CO0lBRXJDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7bURBQ21CO0lBRXJDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7K0NBQ2U7SUFFakM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztvREFDb0I7SUFickIsU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQWdLN0I7SUFBRCxnQkFBQztDQWhLRCxBQWdLQyxDQWhLc0MsRUFBRSxDQUFDLFNBQVMsR0FnS2xEO2tCQWhLb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5ldFdvcmsgfSBmcm9tIFwiLi4vLi4vLi4vLi4vZnJhbWUvc2NyaXB0cy9IdHRwL05ldFdvcmtcIjtcbmltcG9ydCB7IExpc3RlbmVyTWFuYWdlciB9IGZyb20gXCIuLi8uLi8uLi8uLi9mcmFtZS9zY3JpcHRzL01hbmFnZXIvTGlzdGVuZXJNYW5hZ2VyXCI7XG5pbXBvcnQgeyBTeW5jRGF0YU1hbmFnZXIgfSBmcm9tIFwiLi4vLi4vLi4vLi4vZnJhbWUvc2NyaXB0cy9NYW5hZ2VyL1N5bmNEYXRhTWFuYWdlclwiO1xuaW1wb3J0IHsgVDJNIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2ZyYW1lL3NjcmlwdHMvU0RLL1QyTVwiO1xuaW1wb3J0IHsgRXZlbnRUeXBlIH0gZnJvbSBcIi4uLy4uL0RhdGEvRXZlbnRUeXBlXCI7XG5pbXBvcnQgQ3ViZSBmcm9tIFwiLi4vSXRlbS9DdWJlXCI7XG5pbXBvcnQgR2FtZVVJIGZyb20gXCIuLi9JdGVtL0dhbWVVSVwiO1xuaW1wb3J0IFRocmVlTm9kZSBmcm9tIFwiLi4vSXRlbS9UaHJlZUROb2RlXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lTGF5ZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIEBwcm9wZXJ0eShUaHJlZU5vZGUpXG4gICAgcHJpdmF0ZSB0aHJlZUROb2RlOiBUaHJlZU5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShHYW1lVUkpXG4gICAgcHJpdmF0ZSBnYW1lVUk6IEdhbWVVSSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBwcml2YXRlIHRocmVlRENhbWVyYTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcHJpdmF0ZSBjdWJlUm9vdE5vZGU6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHByaXZhdGUgYWRkTWludXM6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHByaXZhdGUgaW1nX2h1YW5nYmlhbjogY2MuTm9kZVtdID0gW107XG5cbiAgICBwcml2YXRlIHRvdWNoRXZlbnRJZDogbnVtYmVyO1xuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICBMaXN0ZW5lck1hbmFnZXIub24oRXZlbnRUeXBlLkVOVEVSX0dBTUUsIHRoaXMuaGFuZGxlRW50ZXJHYW1lLCB0aGlzKTtcbiAgICAgICAgTGlzdGVuZXJNYW5hZ2VyLm9uKEV2ZW50VHlwZS5HQU1FX1JFQ09OTkVDVCwgdGhpcy5oYW5kbGVFbnRlckdhbWUsIHRoaXMpO1xuXG4gICAgICAgIFQyTS5hZGRTeW5jRXZlbnRMaXN0ZW5lcihFdmVudFR5cGUuRFJBR19FTkQsIHRoaXMuaGFuZGxlRHJhZ0VuZC5iaW5kKHRoaXMpKTtcbiAgICAgICAgLy8gdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLm9uVG91Y2hTdGFydCwgdGhpcylcbiAgICAgICAgLy8gdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIHRoaXMub25Ub3VjaE1vdmUsIHRoaXMpXG4gICAgICAgIC8vIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25Ub3VjaEVuZCwgdGhpcylcbiAgICB9XG4gICAgb25EZXN0cm95KCkge1xuICAgICAgICBMaXN0ZW5lck1hbmFnZXIub2ZmKEV2ZW50VHlwZS5FTlRFUl9HQU1FLCB0aGlzLmhhbmRsZUVudGVyR2FtZSwgdGhpcyk7XG4gICAgICAgIExpc3RlbmVyTWFuYWdlci5vZmYoRXZlbnRUeXBlLkdBTUVfUkVDT05ORUNULCB0aGlzLmhhbmRsZUVudGVyR2FtZSwgdGhpcyk7XG5cbiAgICAgICAgVDJNLnJlbW92ZVN5bmNFdmVudExpc3RlbmVyKEV2ZW50VHlwZS5EUkFHX0VORCk7XG4gICAgICAgIC8vIHRoaXMubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMub25Ub3VjaFN0YXJ0LCB0aGlzKVxuICAgICAgICAvLyB0aGlzLm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIHRoaXMub25Ub3VjaE1vdmUsIHRoaXMpXG4gICAgICAgIC8vIHRoaXMubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uVG91Y2hFbmQsIHRoaXMpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBoYW5kbGVFbnRlckdhbWUoKSB7XG4gICAgICAgIHRoaXMudGhyZWVETm9kZS5pbml0KCk7XG4gICAgICAgIHRoaXMuZ2FtZVVJLmluaXQoKTtcblxuICAgICAgICBsZXQgZXVsZXJYID0gU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuZXVsZXJYO1xuICAgICAgICBsZXQgZXVsZXJZID0gU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuZXVsZXJZO1xuICAgICAgICBsZXQgZXVsZXJaID0gU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuZXVsZXJaO1xuICAgICAgICBsZXQgcm90YXRpb24gPSBjYy5xdWF0KCk7XG4gICAgICAgIGNjLlF1YXQuZnJvbUV1bGVyKHJvdGF0aW9uLCBldWxlclgsIGV1bGVyWSwgZXVsZXJaKTtcbiAgICAgICAgdGhpcy5jdWJlUm9vdE5vZGUuc2V0Um90YXRpb24ocm90YXRpb24pO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25EcmFnU3RhcnQoZGF0YSkge1xuICAgICAgICB0aGlzLmFkZE1pbnVzLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmltZ19odWFuZ2JpYW5bMF0uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaW1nX2h1YW5nYmlhblsxXS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pbWdfaHVhbmdiaWFuWzJdLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25EcmFnTW92ZShkYXRhKSB7XG4gICAgICAgIGxldCBwb3MgPSBkYXRhLnRhcmdldC5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKGRhdGEucG9zLngsIGRhdGEucG9zLnkpKTtcbiAgICAgICAgbGV0IHByZXZQb3MgPSBkYXRhLnRhcmdldC5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKGRhdGEucHJldkxvY2F0aW9uLngsIGRhdGEucHJldkxvY2F0aW9uLnkpKTtcbiAgICAgICAgbGV0IHByZXZMb2NhdGlvbiA9IGNjLnYyKHByZXZQb3MueCwgcHJldlBvcy55KTtcbiAgICAgICAgbGV0IGN1ckxvY2F0aW9uID0gY2MudjIocG9zLngsIHBvcy55KTtcblxuICAgICAgICBsZXQgdmVsID0gY3VyTG9jYXRpb24uc3ViKHByZXZMb2NhdGlvbik7XG4gICAgICAgIGxldCBkaXNYID0gdmVsLng7XG4gICAgICAgIGxldCBkaXNZID0gdmVsLnk7XG5cbiAgICAgICAgbGV0IGV1bGVyWCA9IHRoaXMuY3ViZVJvb3ROb2RlLmV1bGVyQW5nbGVzLng7XG4gICAgICAgIGxldCBldWxlclkgPSB0aGlzLmN1YmVSb290Tm9kZS5ldWxlckFuZ2xlcy55O1xuICAgICAgICBsZXQgZXVsZXJaID0gdGhpcy5jdWJlUm9vdE5vZGUuZXVsZXJBbmdsZXMuejtcbiAgICAgICAgbGV0IHF1YXQgPSBuZXcgY2MuUXVhdCgpXG4gICAgICAgIGNjLlF1YXQuZnJvbUV1bGVyKHF1YXQsIGV1bGVyWCwgZXVsZXJZLCBldWxlclopXG4gICAgICAgIGxldCBjaGFuZ2VkID0gZmFsc2U7XG4gICAgICAgIGxldCBkb3QgPSB2ZWwubm9ybWFsaXplKCkuZG90KGNjLlZlYzIuUklHSFQpO1xuICAgICAgICBsZXQgcm90YXRlQnlVcCA9IE1hdGguYWJzKGRvdCkgPiBNYXRoLmNvcyhjYy5taXNjLmRlZ3JlZXNUb1JhZGlhbnMoNDUpKTtcbiAgICAgICAgaWYgKCByb3RhdGVCeVVwKSB7XG4gICAgICAgICAgICBsZXQgYW5nbGUgPSAoZGlzWCAvIDI0MzYgKiAzNjApO1xuICAgICAgICAgICAgLy8gZXVsZXJZICs9IGFuZ2xlXG4gICAgICAgICAgICBjYy5RdWF0LnJvdGF0ZUFyb3VuZChxdWF0LCBxdWF0LCBjYy5WZWMzLlVQLCBjYy5taXNjLmRlZ3JlZXNUb1JhZGlhbnMoYW5nbGUpKVxuICAgICAgICAgICAgY2hhbmdlZCA9IHRydWVcbiAgICAgICAgfVxuICAgICAgICBpZiAoICFyb3RhdGVCeVVwKSB7XG4gICAgICAgICAgICBsZXQgYW5nbGUgPSAtKGRpc1kgLyAyNDM2ICogNzIwKTtcbiAgICAgICAgICAgIC8vIGV1bGVyWCArPSBhbmdsZVxuICAgICAgICAgICAgY2MuUXVhdC5yb3RhdGVBcm91bmQocXVhdCwgcXVhdCwgdGhpcy50aHJlZURDYW1lcmEucmlnaHQsIGNjLm1pc2MuZGVncmVlc1RvUmFkaWFucyhhbmdsZSkpXG4gICAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNoYW5nZWQpIHtcbiAgICAgICAgICAgIGxldCBvdXRFdWxlciA9IGNjLnYzKClcbiAgICAgICAgICAgIHF1YXQudG9FdWxlcihvdXRFdWxlcilcbiAgICAgICAgICAgIHRoaXMub25DaGFuZ2VCaWdDdWJlRXVsZXIob3V0RXVsZXIueCwgb3V0RXVsZXIueSwgb3V0RXVsZXIueilcbiAgICAgICAgfVxuXG5cblxuXG4gICAgICAgIC8vIGxldCBkaWYgPSBkYXRhLnRhcmdldC5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKGRhdGEuZGVsdGEueCwgZGF0YS5kZWx0YS55KSk7XG4gICAgICAgIC8vIGxldCBxX3RtcCA9IG5ldyBjYy5RdWF0KCk7XG4gICAgICAgIC8vIGxldCB2X3RtcCA9IGNjLnYzKC1kaWYueSwgZGlmLngsIDApO1xuICAgICAgICAvLyB2X3RtcC5ub3JtYWxpemVTZWxmKCk7XG4gICAgICAgIC8vIGxldCBldWxlclggPSB0aGlzLmN1YmVSb290Tm9kZS5ldWxlckFuZ2xlcy54O1xuICAgICAgICAvLyBsZXQgZXVsZXJZID0gdGhpcy5jdWJlUm9vdE5vZGUuZXVsZXJBbmdsZXMueTtcbiAgICAgICAgLy8gbGV0IGV1bGVyWiA9IHRoaXMuY3ViZVJvb3ROb2RlLmV1bGVyQW5nbGVzLno7XG4gICAgICAgIC8vIGxldCBxdWF0ID0gbmV3IGNjLlF1YXQoKVxuICAgICAgICAvLyBjYy5RdWF0LmZyb21FdWxlcihxdWF0LCBldWxlclgsIGV1bGVyWSwgZXVsZXJaKVxuICAgICAgICAvLyBsZXQgb3V0X1EgPSBjYy5RdWF0LnJvdGF0ZUFyb3VuZChxX3RtcCwgcXVhdCwgdl90bXAsIE1hdGguUEkgKiAwLjAwNyk7XG4gICAgICAgIC8vIHRoaXMuY3ViZVJvb3ROb2RlLnNldFJvdGF0aW9uKG91dF9RLngsIG91dF9RLnksIG91dF9RLnosIG91dF9RLncpO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25EcmFnRW5kKGRhdGEpIHtcbiAgICAgICAgaWYgKGRhdGEuaXNDbGljaykge1xuICAgICAgICAgICAgdGhpcy5hZGRNaW51cy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuaW1nX2h1YW5nYmlhblswXS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuaW1nX2h1YW5nYmlhblsxXS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuaW1nX2h1YW5nYmlhblsyXS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm5vZGUucG9zaXRpb24gPSBjYy5WZWMzLlpFUk87XG4gICAgICAgIGlmIChkYXRhLmlzQ2xpY2sgJiYgU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuZW5hYmxlQ2xpY2spIHtcbiAgICAgICAgICAgIGxldCBwb3MgPSBkYXRhLnRhcmdldC5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKGRhdGEucG9zLngsIGRhdGEucG9zLnkpKTtcbiAgICAgICAgICAgIGxldCBsb2NhdGlvbiA9IGNjLnYyKHBvcy54LCBwb3MueSk7XG4gICAgICAgICAgICBsZXQgcmF5ID0gdGhpcy50aHJlZURDYW1lcmEuZ2V0Q29tcG9uZW50KGNjLkNhbWVyYSkuZ2V0UmF5KGxvY2F0aW9uKTtcbiAgICAgICAgICAgIGxldCByZXN1bHRzID0gY2MuZ2VvbVV0aWxzLmludGVyc2VjdC5yYXljYXN0KHRoaXMuY3ViZVJvb3ROb2RlLCByYXksIG51bGwsIG51bGwpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXN1bHRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdHNbMF0ubm9kZS5wYXJlbnQuZ2V0Q29tcG9uZW50KEN1YmUpICYmIHJlc3VsdHNbMV0pIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0c1swXS5ub2RlLnBhcmVudC5nZXRDb21wb25lbnQoQ3ViZSkuY2xpY2tDdWJlKHJlc3VsdHNbMV0ubm9kZS5uYW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKE5ldFdvcmsuaXNNYXN0ZXIgfHwgIU5ldFdvcmsuaXNTeW5jKSB7XG4gICAgICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICBldWxlclg6IFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmV1bGVyWCxcbiAgICAgICAgICAgICAgICBldWxlclk6IFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmV1bGVyWSxcbiAgICAgICAgICAgICAgICBldWxlclo6IFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmV1bGVyWlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgVDJNLmRpc3BhdGNoKEV2ZW50VHlwZS5EUkFHX0VORCwgZGF0YSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIG9uQ2hhbmdlQmlnQ3ViZUV1bGVyKGV1bGVyWDogbnVtYmVyLCBldWxlclk6IG51bWJlciwgZXVsZXJaOiBudW1iZXIpIHtcbiAgICAgICAgbGV0IHJvdGF0aW9uID0gY2MucXVhdCgpO1xuICAgICAgICBjYy5RdWF0LmZyb21FdWxlcihyb3RhdGlvbiwgZXVsZXJYLCBldWxlclksIGV1bGVyWik7XG4gICAgICAgIFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmV1bGVyWCA9IGV1bGVyWDtcbiAgICAgICAgU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuZXVsZXJZID0gZXVsZXJZO1xuICAgICAgICBTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5ldWxlclogPSBldWxlclo7XG4gICAgICAgIHRoaXMuY3ViZVJvb3ROb2RlLnNldFJvdGF0aW9uKHJvdGF0aW9uKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGhhbmRsZURyYWdFbmQoZGF0YTogYW55KSB7XG4gICAgICAgIGxldCByb3RhdGlvbiA9IGNjLnF1YXQoKTtcbiAgICAgICAgY2MuUXVhdC5mcm9tRXVsZXIocm90YXRpb24sIGRhdGEuZXVsZXJYLCBkYXRhLmV1bGVyWSwgZGF0YS5ldWxlclopO1xuICAgICAgICB0aGlzLmN1YmVSb290Tm9kZS5zZXRSb3RhdGlvbihyb3RhdGlvbik7XG4gICAgICAgIC8v5bCGdGhpcy5jdWJlUm9vdE5vZGXnmoTovbTph43nva7kuLrkuJbnlYzlnZDmoIfns7vnmoTovbRcbiAgICAgICAgLy8gbGV0IGV1bGVyID0gdGhpcy5jdWJlUm9vdE5vZGUuZXVsZXJBbmdsZXM7XG4gICAgICAgIC8vIGxldCBxdWF0ID0gbmV3IGNjLlF1YXQoKVxuICAgICAgICAvLyBjYy5RdWF0LmZyb21FdWxlcihxdWF0LCBldWxlci54LCBldWxlci55LCBldWxlci56KVxuICAgICAgICAvLyBsZXQgb3V0RXVsZXIgPSBjYy52MygpXG4gICAgICAgIC8vIHF1YXQudG9FdWxlcihvdXRFdWxlcilcbiAgICAgICAgLy8gdGhpcy5vbkNoYW5nZUJpZ0N1YmVFdWxlcihvdXRFdWxlci54LCBvdXRFdWxlci55LCBvdXRFdWxlci56KVxuICAgIH1cbn1cbiJdfQ==