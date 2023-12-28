
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
        _this.img_huangbian = null;
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
        if (SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curIndex == 4)
            return;
        this.addMinus.active = false;
    };
    GameLayer.prototype.onDragMove = function (data) {
        if (SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curIndex == 4)
            return;
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
            cc.Quat.rotateAround(quat, quat, cc.Vec3.UP, cc.misc.degreesToRadians(angle));
            changed = true;
        }
        if (!rotateByUp) {
            var angle = -(disY / 2436 * 720);
            cc.Quat.rotateAround(quat, quat, this.threeDCamera.right, cc.misc.degreesToRadians(angle));
            changed = true;
        }
        if (changed) {
            var outEuler = cc.v3();
            quat.toEuler(outEuler);
            this.onChangeBigCubeEuler(outEuler.x, outEuler.y, outEuler.z);
        }
    };
    GameLayer.prototype.onDragEnd = function (data) {
        if (SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curIndex == 4)
            return;
        if (data.isClick) {
            this.addMinus.active = false;
        }
        this.node.position = cc.Vec3.ZERO;
        // if (data.isClick) {
        //     let pos = data.target.parent.convertToWorldSpaceAR(cc.v2(data.pos.x, data.pos.y));
        //     let location = cc.v2(pos.x, pos.y);
        //     let ray = this.threeDCamera.getComponent(cc.Camera).getRay(location);
        //     let results = cc.geomUtils.intersect.raycast(this.cubeRootNode, ray, null, null);
        //     for (let i = 0; i < results.length; i++) {
        //         if (results[0].node.parent.getComponent(Cube) && results[1]) {
        //             results[0].node.parent.getComponent(Cube).clickCube(results[1].node.name);
        //         }
        //         return;
        //     }
        // }
        if (NetWork_1.NetWork.isMaster || !NetWork_1.NetWork.isSync) {
            var data_1 = {
                eulerX: SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.eulerX,
                eulerY: SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.eulerY,
                eulerZ: SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.eulerZ
            };
            console.log("onDragEnd", data_1);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZVxcc2NyaXB0c1xcVUlcXExheWVyXFxHYW1lTGF5ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsa0VBQWlFO0FBQ2pFLHFGQUFvRjtBQUNwRixxRkFBb0Y7QUFDcEYseURBQXdEO0FBQ3hELGtEQUFpRDtBQUNqRCx5Q0FBb0M7QUFDcEMsaURBQTJDO0FBRXJDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXVDLDZCQUFZO0lBQW5EO1FBQUEscUVBNklDO1FBM0lXLGdCQUFVLEdBQWMsSUFBSSxDQUFDO1FBRTdCLFlBQU0sR0FBVyxJQUFJLENBQUM7UUFHdEIsa0JBQVksR0FBWSxJQUFJLENBQUM7UUFFN0Isa0JBQVksR0FBWSxJQUFJLENBQUM7UUFFN0IsY0FBUSxHQUFZLElBQUksQ0FBQztRQUV6QixtQkFBYSxHQUFZLElBQUksQ0FBQzs7SUFnSTFDLENBQUM7SUE1SEcsMEJBQU0sR0FBTjtRQUNJLGlDQUFlLENBQUMsRUFBRSxDQUFDLHFCQUFTLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDckUsaUNBQWUsQ0FBQyxFQUFFLENBQUMscUJBQVMsQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUV6RSxTQUFHLENBQUMsb0JBQW9CLENBQUMscUJBQVMsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUM1RSx1RUFBdUU7UUFDdkUscUVBQXFFO1FBQ3JFLG1FQUFtRTtJQUN2RSxDQUFDO0lBQ0QsNkJBQVMsR0FBVDtRQUNJLGlDQUFlLENBQUMsR0FBRyxDQUFDLHFCQUFTLENBQUMsVUFBVSxFQUFFLElBQUks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QURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO21EQUNtQjtJQUVyQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO21EQUNtQjtJQUVyQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOytDQUNlO0lBRWpDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7b0RBQ29CO0lBYnJCLFNBQVM7UUFEN0IsT0FBTztPQUNhLFNBQVMsQ0E2STdCO0lBQUQsZ0JBQUM7Q0E3SUQsQUE2SUMsQ0E3SXNDLEVBQUUsQ0FBQyxTQUFTLEdBNklsRDtrQkE3SW9CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXRXb3JrIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2ZyYW1lL3NjcmlwdHMvSHR0cC9OZXRXb3JrXCI7XG5pbXBvcnQgeyBMaXN0ZW5lck1hbmFnZXIgfSBmcm9tIFwiLi4vLi4vLi4vLi4vZnJhbWUvc2NyaXB0cy9NYW5hZ2VyL0xpc3RlbmVyTWFuYWdlclwiO1xuaW1wb3J0IHsgU3luY0RhdGFNYW5hZ2VyIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2ZyYW1lL3NjcmlwdHMvTWFuYWdlci9TeW5jRGF0YU1hbmFnZXJcIjtcbmltcG9ydCB7IFQyTSB9IGZyb20gXCIuLi8uLi8uLi8uLi9mcmFtZS9zY3JpcHRzL1NESy9UMk1cIjtcbmltcG9ydCB7IEV2ZW50VHlwZSB9IGZyb20gXCIuLi8uLi9EYXRhL0V2ZW50VHlwZVwiO1xuaW1wb3J0IEdhbWVVSSBmcm9tIFwiLi4vSXRlbS9HYW1lVUlcIjtcbmltcG9ydCBUaHJlZU5vZGUgZnJvbSBcIi4uL0l0ZW0vVGhyZWVETm9kZVwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZUxheWVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBAcHJvcGVydHkoVGhyZWVOb2RlKVxuICAgIHByaXZhdGUgdGhyZWVETm9kZTogVGhyZWVOb2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoR2FtZVVJKVxuICAgIHByaXZhdGUgZ2FtZVVJOiBHYW1lVUkgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcHJpdmF0ZSB0aHJlZURDYW1lcmE6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHByaXZhdGUgY3ViZVJvb3ROb2RlOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBwcml2YXRlIGFkZE1pbnVzOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBwcml2YXRlIGltZ19odWFuZ2JpYW46IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSB0b3VjaEV2ZW50SWQ6IG51bWJlcjtcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgTGlzdGVuZXJNYW5hZ2VyLm9uKEV2ZW50VHlwZS5FTlRFUl9HQU1FLCB0aGlzLmhhbmRsZUVudGVyR2FtZSwgdGhpcyk7XG4gICAgICAgIExpc3RlbmVyTWFuYWdlci5vbihFdmVudFR5cGUuR0FNRV9SRUNPTk5FQ1QsIHRoaXMuaGFuZGxlRW50ZXJHYW1lLCB0aGlzKTtcblxuICAgICAgICBUMk0uYWRkU3luY0V2ZW50TGlzdGVuZXIoRXZlbnRUeXBlLkRSQUdfRU5ELCB0aGlzLmhhbmRsZURyYWdFbmQuYmluZCh0aGlzKSk7XG4gICAgICAgIC8vIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5vblRvdWNoU3RhcnQsIHRoaXMpXG4gICAgICAgIC8vIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLm9uVG91Y2hNb3ZlLCB0aGlzKVxuICAgICAgICAvLyB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uVG91Y2hFbmQsIHRoaXMpXG4gICAgfVxuICAgIG9uRGVzdHJveSgpIHtcbiAgICAgICAgTGlzdGVuZXJNYW5hZ2VyLm9mZihFdmVudFR5cGUuRU5URVJfR0FNRSwgdGhpcy5oYW5kbGVFbnRlckdhbWUsIHRoaXMpO1xuICAgICAgICBMaXN0ZW5lck1hbmFnZXIub2ZmKEV2ZW50VHlwZS5HQU1FX1JFQ09OTkVDVCwgdGhpcy5oYW5kbGVFbnRlckdhbWUsIHRoaXMpO1xuXG4gICAgICAgIFQyTS5yZW1vdmVTeW5jRXZlbnRMaXN0ZW5lcihFdmVudFR5cGUuRFJBR19FTkQpO1xuICAgICAgICAvLyB0aGlzLm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLm9uVG91Y2hTdGFydCwgdGhpcylcbiAgICAgICAgLy8gdGhpcy5ub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLm9uVG91Y2hNb3ZlLCB0aGlzKVxuICAgICAgICAvLyB0aGlzLm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vblRvdWNoRW5kLCB0aGlzKVxuICAgIH1cblxuICAgIHByaXZhdGUgaGFuZGxlRW50ZXJHYW1lKCkge1xuICAgICAgICB0aGlzLnRocmVlRE5vZGUuaW5pdCgpO1xuICAgICAgICB0aGlzLmdhbWVVSS5pbml0KCk7XG5cbiAgICAgICAgbGV0IGV1bGVyWCA9IFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmV1bGVyWDtcbiAgICAgICAgbGV0IGV1bGVyWSA9IFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmV1bGVyWTtcbiAgICAgICAgbGV0IGV1bGVyWiA9IFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmV1bGVyWjtcbiAgICAgICAgbGV0IHJvdGF0aW9uID0gY2MucXVhdCgpO1xuICAgICAgICBjYy5RdWF0LmZyb21FdWxlcihyb3RhdGlvbiwgZXVsZXJYLCBldWxlclksIGV1bGVyWik7XG4gICAgICAgIHRoaXMuY3ViZVJvb3ROb2RlLnNldFJvdGF0aW9uKHJvdGF0aW9uKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uRHJhZ1N0YXJ0KGRhdGEpIHtcbiAgICAgICAgaWYgKFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmN1ckluZGV4ID09IDQpIHJldHVybjsgXG4gICAgICAgIHRoaXMuYWRkTWludXMuYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkRyYWdNb3ZlKGRhdGEpIHtcbiAgICAgICAgaWYgKFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmN1ckluZGV4ID09IDQpIHJldHVybjsgXG4gICAgICAgIGxldCBwb3MgPSBkYXRhLnRhcmdldC5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKGRhdGEucG9zLngsIGRhdGEucG9zLnkpKTtcbiAgICAgICAgbGV0IHByZXZQb3MgPSBkYXRhLnRhcmdldC5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKGRhdGEucHJldkxvY2F0aW9uLngsIGRhdGEucHJldkxvY2F0aW9uLnkpKTtcbiAgICAgICAgbGV0IHByZXZMb2NhdGlvbiA9IGNjLnYyKHByZXZQb3MueCwgcHJldlBvcy55KTtcbiAgICAgICAgbGV0IGN1ckxvY2F0aW9uID0gY2MudjIocG9zLngsIHBvcy55KTtcblxuICAgICAgICBsZXQgdmVsID0gY3VyTG9jYXRpb24uc3ViKHByZXZMb2NhdGlvbik7XG4gICAgICAgIGxldCBkaXNYID0gdmVsLng7XG4gICAgICAgIGxldCBkaXNZID0gdmVsLnk7XG5cbiAgICAgICAgbGV0IGV1bGVyWCA9IHRoaXMuY3ViZVJvb3ROb2RlLmV1bGVyQW5nbGVzLng7XG4gICAgICAgIGxldCBldWxlclkgPSB0aGlzLmN1YmVSb290Tm9kZS5ldWxlckFuZ2xlcy55O1xuICAgICAgICBsZXQgZXVsZXJaID0gdGhpcy5jdWJlUm9vdE5vZGUuZXVsZXJBbmdsZXMuejtcbiAgICAgICAgbGV0IHF1YXQgPSBuZXcgY2MuUXVhdCgpXG4gICAgICAgIGNjLlF1YXQuZnJvbUV1bGVyKHF1YXQsIGV1bGVyWCwgZXVsZXJZLCBldWxlclopXG4gICAgICAgIGxldCBjaGFuZ2VkID0gZmFsc2U7XG4gICAgICAgIGxldCBkb3QgPSB2ZWwubm9ybWFsaXplKCkuZG90KGNjLlZlYzIuUklHSFQpO1xuICAgICAgICBsZXQgcm90YXRlQnlVcCA9IE1hdGguYWJzKGRvdCkgPiBNYXRoLmNvcyhjYy5taXNjLmRlZ3JlZXNUb1JhZGlhbnMoNDUpKTtcbiAgICAgICAgaWYgKCByb3RhdGVCeVVwKSB7XG4gICAgICAgICAgICBsZXQgYW5nbGUgPSAoZGlzWCAvIDI0MzYgKiAzNjApO1xuICAgICAgICAgICAgY2MuUXVhdC5yb3RhdGVBcm91bmQocXVhdCwgcXVhdCwgY2MuVmVjMy5VUCwgY2MubWlzYy5kZWdyZWVzVG9SYWRpYW5zKGFuZ2xlKSlcbiAgICAgICAgICAgIGNoYW5nZWQgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgaWYgKCAhcm90YXRlQnlVcCkge1xuICAgICAgICAgICAgbGV0IGFuZ2xlID0gLShkaXNZIC8gMjQzNiAqIDcyMCk7XG4gICAgICAgICAgICBjYy5RdWF0LnJvdGF0ZUFyb3VuZChxdWF0LCBxdWF0LCB0aGlzLnRocmVlRENhbWVyYS5yaWdodCwgY2MubWlzYy5kZWdyZWVzVG9SYWRpYW5zKGFuZ2xlKSlcbiAgICAgICAgICAgIGNoYW5nZWQgPSB0cnVlXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2hhbmdlZCkge1xuICAgICAgICAgICAgbGV0IG91dEV1bGVyID0gY2MudjMoKVxuICAgICAgICAgICAgcXVhdC50b0V1bGVyKG91dEV1bGVyKVxuICAgICAgICAgICAgdGhpcy5vbkNoYW5nZUJpZ0N1YmVFdWxlcihvdXRFdWxlci54LCBvdXRFdWxlci55LCBvdXRFdWxlci56KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkRyYWdFbmQoZGF0YSkge1xuICAgICAgICBpZiAoU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuY3VySW5kZXggPT0gNCkgcmV0dXJuOyBcbiAgICAgICAgaWYgKGRhdGEuaXNDbGljaykge1xuICAgICAgICAgICAgdGhpcy5hZGRNaW51cy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm5vZGUucG9zaXRpb24gPSBjYy5WZWMzLlpFUk87XG4gICAgICAgIC8vIGlmIChkYXRhLmlzQ2xpY2spIHtcbiAgICAgICAgLy8gICAgIGxldCBwb3MgPSBkYXRhLnRhcmdldC5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKGRhdGEucG9zLngsIGRhdGEucG9zLnkpKTtcbiAgICAgICAgLy8gICAgIGxldCBsb2NhdGlvbiA9IGNjLnYyKHBvcy54LCBwb3MueSk7XG4gICAgICAgIC8vICAgICBsZXQgcmF5ID0gdGhpcy50aHJlZURDYW1lcmEuZ2V0Q29tcG9uZW50KGNjLkNhbWVyYSkuZ2V0UmF5KGxvY2F0aW9uKTtcbiAgICAgICAgLy8gICAgIGxldCByZXN1bHRzID0gY2MuZ2VvbVV0aWxzLmludGVyc2VjdC5yYXljYXN0KHRoaXMuY3ViZVJvb3ROb2RlLCByYXksIG51bGwsIG51bGwpO1xuICAgICAgICAvLyAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXN1bHRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vICAgICAgICAgaWYgKHJlc3VsdHNbMF0ubm9kZS5wYXJlbnQuZ2V0Q29tcG9uZW50KEN1YmUpICYmIHJlc3VsdHNbMV0pIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgcmVzdWx0c1swXS5ub2RlLnBhcmVudC5nZXRDb21wb25lbnQoQ3ViZSkuY2xpY2tDdWJlKHJlc3VsdHNbMV0ubm9kZS5uYW1lKTtcbiAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9XG5cbiAgICAgICAgaWYgKE5ldFdvcmsuaXNNYXN0ZXIgfHwgIU5ldFdvcmsuaXNTeW5jKSB7XG4gICAgICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICBldWxlclg6IFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmV1bGVyWCxcbiAgICAgICAgICAgICAgICBldWxlclk6IFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmV1bGVyWSxcbiAgICAgICAgICAgICAgICBldWxlclo6IFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmV1bGVyWlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJvbkRyYWdFbmRcIiwgZGF0YSk7XG4gICAgICAgICAgICBUMk0uZGlzcGF0Y2goRXZlbnRUeXBlLkRSQUdfRU5ELCBkYXRhKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgb25DaGFuZ2VCaWdDdWJlRXVsZXIoZXVsZXJYOiBudW1iZXIsIGV1bGVyWTogbnVtYmVyLCBldWxlclo6IG51bWJlcikge1xuICAgICAgICBsZXQgcm90YXRpb24gPSBjYy5xdWF0KCk7XG4gICAgICAgIGNjLlF1YXQuZnJvbUV1bGVyKHJvdGF0aW9uLCBldWxlclgsIGV1bGVyWSwgZXVsZXJaKTtcbiAgICAgICAgU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuZXVsZXJYID0gZXVsZXJYO1xuICAgICAgICBTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5ldWxlclkgPSBldWxlclk7XG4gICAgICAgIFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmV1bGVyWiA9IGV1bGVyWjtcbiAgICAgICAgdGhpcy5jdWJlUm9vdE5vZGUuc2V0Um90YXRpb24ocm90YXRpb24pO1xuICAgIH1cblxuICAgIHByaXZhdGUgaGFuZGxlRHJhZ0VuZChkYXRhOiBhbnkpIHtcbiAgICAgICAgbGV0IHJvdGF0aW9uID0gY2MucXVhdCgpO1xuICAgICAgICBjYy5RdWF0LmZyb21FdWxlcihyb3RhdGlvbiwgZGF0YS5ldWxlclgsIGRhdGEuZXVsZXJZLCBkYXRhLmV1bGVyWik7XG4gICAgICAgIHRoaXMuY3ViZVJvb3ROb2RlLnNldFJvdGF0aW9uKHJvdGF0aW9uKTtcbiAgICAgICAgLy/lsIZ0aGlzLmN1YmVSb290Tm9kZeeahOi9tOmHjee9ruS4uuS4lueVjOWdkOagh+ezu+eahOi9tFxuICAgICAgICAvLyBsZXQgZXVsZXIgPSB0aGlzLmN1YmVSb290Tm9kZS5ldWxlckFuZ2xlcztcbiAgICAgICAgLy8gbGV0IHF1YXQgPSBuZXcgY2MuUXVhdCgpXG4gICAgICAgIC8vIGNjLlF1YXQuZnJvbUV1bGVyKHF1YXQsIGV1bGVyLngsIGV1bGVyLnksIGV1bGVyLnopXG4gICAgICAgIC8vIGxldCBvdXRFdWxlciA9IGNjLnYzKClcbiAgICAgICAgLy8gcXVhdC50b0V1bGVyKG91dEV1bGVyKVxuICAgICAgICAvLyB0aGlzLm9uQ2hhbmdlQmlnQ3ViZUV1bGVyKG91dEV1bGVyLngsIG91dEV1bGVyLnksIG91dEV1bGVyLnopXG4gICAgfVxufVxuIl19