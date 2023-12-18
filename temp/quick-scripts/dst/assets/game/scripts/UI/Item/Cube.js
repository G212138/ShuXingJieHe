
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game/scripts/UI/Item/Cube.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '402defmy1xNR6or/0nZbjE9', 'Cube');
// game/scripts/UI/Item/Cube.ts

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
var SoundConfig_1 = require("./SoundConfig");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Cube = /** @class */ (function (_super) {
    __extends(Cube, _super);
    function Cube() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        //上面的面
        _this.upFace = null;
        //下面的面
        _this.downFace = null;
        //左面的面
        _this.leftFace = null;
        //右面的面
        _this.rightFace = null;
        //前面的面
        _this.frontFace = null;
        //后面的面
        _this.backFace = null;
        _this.isHide = false;
        _this.initPos = cc.v3();
        return _this;
    }
    Cube.prototype.init = function (xCount, yCount, zCount) {
        this.xIndex = xCount;
        this.yIndex = yCount;
        this.zIndex = zCount;
        this.initPos = this.node.position;
        this.onChangeColor();
    };
    Cube.prototype.clickCube = function (clckName) {
        var enableClick = false;
        var data = { xIndex: null, yIndex: null, zIndex: null };
        switch (clckName) {
            case "up":
                enableClick = this.yIndex == 5;
                data.xIndex = this.xIndex;
                data.zIndex = this.zIndex;
                break;
            case "down":
                enableClick = this.yIndex == 0;
                data.xIndex = this.xIndex;
                data.zIndex = this.zIndex;
                break;
            case "left":
                enableClick = this.xIndex == 0;
                data.yIndex = this.yIndex;
                data.zIndex = this.zIndex;
                break;
            case "right":
                enableClick = this.xIndex == 5;
                data.yIndex = this.yIndex;
                data.zIndex = this.zIndex;
                break;
            case "front":
                enableClick = this.zIndex == 5;
                data.xIndex = this.xIndex;
                data.yIndex = this.yIndex;
                break;
            case "back":
                enableClick = this.zIndex == 0;
                data.xIndex = this.xIndex;
                data.yIndex = this.yIndex;
                break;
            default:
                break;
        }
        SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.cubeClickArr.push(data);
        ListenerManager_1.ListenerManager.dispatch(EventType_1.EventType.CLICK_CUBE, data);
    };
    Cube.prototype.handleCubeClick = function (data, isClick) {
        if (isClick === void 0) { isClick = true; }
        if (data.xIndex == null && data.yIndex == this.yIndex && data.zIndex == this.zIndex) {
            if (isClick) {
                SoundManager_1.SoundManager.stopSoundByName(SoundConfig_1.SoundConfig.soudlist["打孔音效"]);
                SoundManager_1.SoundManager.playEffect(SoundConfig_1.SoundConfig.soudlist["打孔音效"], false, false);
            }
            this.isHide = true;
            this.node.active = false;
        }
        else if (data.yIndex == null && data.xIndex == this.xIndex && data.zIndex == this.zIndex) {
            if (isClick) {
                SoundManager_1.SoundManager.stopSoundByName(SoundConfig_1.SoundConfig.soudlist["打孔音效"]);
                SoundManager_1.SoundManager.playEffect(SoundConfig_1.SoundConfig.soudlist["打孔音效"], false, false);
            }
            this.isHide = true;
            this.node.active = false;
        }
        else if (data.zIndex == null && data.xIndex == this.xIndex && data.yIndex == this.yIndex) {
            if (isClick) {
                SoundManager_1.SoundManager.stopSoundByName(SoundConfig_1.SoundConfig.soudlist["打孔音效"]);
                SoundManager_1.SoundManager.playEffect(SoundConfig_1.SoundConfig.soudlist["打孔音效"], false, false);
            }
            this.isHide = true;
            this.node.active = false;
        }
    };
    Cube.prototype.handleOpen = function (pos) {
        this.node.setPosition(pos.x, pos.y, pos.z);
    };
    Cube.prototype.handleClose = function () {
        this.node.setPosition(this.initPos);
    };
    Cube.prototype.reset = function () {
        this.isHide = false;
        this.node.active = true;
    };
    Cube.prototype.onChangeColor = function () {
        if (this.xIndex == 0) {
            var material = this.leftFace.getComponent(cc.MeshRenderer).getMaterial(0);
            var color = new cc.Color().fromHEX("#2DB97A");
            material.setProperty("diffuseColor", color, 0);
        }
        if (this.xIndex == SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.xCount - 1) {
            var material = this.rightFace.getComponent(cc.MeshRenderer).getMaterial(0);
            var color = new cc.Color().fromHEX("#2DB97A");
            material.setProperty("diffuseColor", color, 0);
        }
        if (this.yIndex == 0) {
            var material = this.downFace.getComponent(cc.MeshRenderer).getMaterial(0);
            var color = new cc.Color().fromHEX("#2DB97A");
            material.setProperty("diffuseColor", color, 0);
        }
        if (this.yIndex == SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.yCount - 1) {
            var material = this.upFace.getComponent(cc.MeshRenderer).getMaterial(0);
            var color = new cc.Color().fromHEX("#2DB97A");
            material.setProperty("diffuseColor", color, 0);
        }
        if (this.zIndex == 0) {
            var material = this.backFace.getComponent(cc.MeshRenderer).getMaterial(0);
            var color = new cc.Color().fromHEX("#2DB97A");
            material.setProperty("diffuseColor", color, 0);
        }
        if (this.zIndex == SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.zCount - 1) {
            var material = this.frontFace.getComponent(cc.MeshRenderer).getMaterial(0);
            var color = new cc.Color().fromHEX("#2DB97A");
            material.setProperty("diffuseColor", color, 0);
        }
    };
    __decorate([
        property(cc.Node)
    ], Cube.prototype, "upFace", void 0);
    __decorate([
        property(cc.Node)
    ], Cube.prototype, "downFace", void 0);
    __decorate([
        property(cc.Node)
    ], Cube.prototype, "leftFace", void 0);
    __decorate([
        property(cc.Node)
    ], Cube.prototype, "rightFace", void 0);
    __decorate([
        property(cc.Node)
    ], Cube.prototype, "frontFace", void 0);
    __decorate([
        property(cc.Node)
    ], Cube.prototype, "backFace", void 0);
    Cube = __decorate([
        ccclass
    ], Cube);
    return Cube;
}(cc.Component));
exports.default = Cube;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZVxcc2NyaXB0c1xcVUlcXEl0ZW1cXEN1YmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EscUZBQW9GO0FBQ3BGLCtFQUE4RTtBQUM5RSxxRkFBb0Y7QUFDcEYsa0RBQWlEO0FBQ2pELDZDQUE0QztBQUd0QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFrQyx3QkFBWTtJQUE5QztRQUFBLHFFQXVKQztRQXRKRyxNQUFNO1FBRUUsWUFBTSxHQUFZLElBQUksQ0FBQztRQUMvQixNQUFNO1FBRUUsY0FBUSxHQUFZLElBQUksQ0FBQztRQUNqQyxNQUFNO1FBRUUsY0FBUSxHQUFZLElBQUksQ0FBQztRQUNqQyxNQUFNO1FBRUUsZUFBUyxHQUFZLElBQUksQ0FBQztRQUNsQyxNQUFNO1FBRUUsZUFBUyxHQUFZLElBQUksQ0FBQztRQUNsQyxNQUFNO1FBRUUsY0FBUSxHQUFZLElBQUksQ0FBQztRQVF6QixZQUFNLEdBQVksS0FBSyxDQUFDO1FBRXhCLGFBQU8sR0FBWSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7O0lBMkh2QyxDQUFDO0lBekhVLG1CQUFJLEdBQVgsVUFBWSxNQUFjLEVBQUUsTUFBYyxFQUFFLE1BQWM7UUFDdEQsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUNsQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVPLHdCQUFTLEdBQWpCLFVBQWtCLFFBQWdCO1FBQzlCLElBQUksV0FBVyxHQUFHLEtBQUss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UUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDM0UsSUFBSSxLQUFLLEdBQUcsSUFBSSxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzlDLFFBQVEsQ0FBQyxXQUFXLENBQUMsY0FBYyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQTtTQUNqRDtJQUNMLENBQUM7SUFqSkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt3Q0FDYTtJQUcvQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzBDQUNlO0lBR2pDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MENBQ2U7SUFHakM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsyQ0FDZ0I7SUFHbEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsyQ0FDZ0I7SUFHbEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzswQ0FDZTtJQWxCaEIsSUFBSTtRQUR4QixPQUFPO09BQ2EsSUFBSSxDQXVKeEI7SUFBRCxXQUFDO0NBdkpELEFBdUpDLENBdkppQyxFQUFFLENBQUMsU0FBUyxHQXVKN0M7a0JBdkpvQixJQUFJIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV0V29yayB9IGZyb20gXCIuLi8uLi8uLi8uLi9mcmFtZS9zY3JpcHRzL0h0dHAvTmV0V29ya1wiO1xuaW1wb3J0IHsgTGlzdGVuZXJNYW5hZ2VyIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2ZyYW1lL3NjcmlwdHMvTWFuYWdlci9MaXN0ZW5lck1hbmFnZXJcIjtcbmltcG9ydCB7IFNvdW5kTWFuYWdlciB9IGZyb20gXCIuLi8uLi8uLi8uLi9mcmFtZS9zY3JpcHRzL01hbmFnZXIvU291bmRNYW5hZ2VyXCI7XG5pbXBvcnQgeyBTeW5jRGF0YU1hbmFnZXIgfSBmcm9tIFwiLi4vLi4vLi4vLi4vZnJhbWUvc2NyaXB0cy9NYW5hZ2VyL1N5bmNEYXRhTWFuYWdlclwiO1xuaW1wb3J0IHsgRXZlbnRUeXBlIH0gZnJvbSBcIi4uLy4uL0RhdGEvRXZlbnRUeXBlXCI7XG5pbXBvcnQgeyBTb3VuZENvbmZpZyB9IGZyb20gXCIuL1NvdW5kQ29uZmlnXCI7XG5cblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEN1YmUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIC8v5LiK6Z2i55qE6Z2iXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcHJpdmF0ZSB1cEZhY2U6IGNjLk5vZGUgPSBudWxsO1xuICAgIC8v5LiL6Z2i55qE6Z2iXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcHJpdmF0ZSBkb3duRmFjZTogY2MuTm9kZSA9IG51bGw7XG4gICAgLy/lt6bpnaLnmoTpnaJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBwcml2YXRlIGxlZnRGYWNlOiBjYy5Ob2RlID0gbnVsbDtcbiAgICAvL+WPs+mdoueahOmdolxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHByaXZhdGUgcmlnaHRGYWNlOiBjYy5Ob2RlID0gbnVsbDtcbiAgICAvL+WJjemdoueahOmdolxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHByaXZhdGUgZnJvbnRGYWNlOiBjYy5Ob2RlID0gbnVsbDtcbiAgICAvL+WQjumdoueahOmdolxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHByaXZhdGUgYmFja0ZhY2U6IGNjLk5vZGUgPSBudWxsO1xuXG5cbiAgICAvL+aWueWdl+eahOihjOWIl+Wxgue0ouW8lVxuICAgIHByaXZhdGUgeEluZGV4OiBudW1iZXI7XG4gICAgcHJpdmF0ZSB5SW5kZXg6IG51bWJlcjtcbiAgICBwcml2YXRlIHpJbmRleDogbnVtYmVyO1xuXG4gICAgcHJpdmF0ZSBpc0hpZGU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIHByaXZhdGUgaW5pdFBvczogY2MuVmVjMyA9IGNjLnYzKCk7XG5cbiAgICBwdWJsaWMgaW5pdCh4Q291bnQ6IG51bWJlciwgeUNvdW50OiBudW1iZXIsIHpDb3VudDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMueEluZGV4ID0geENvdW50O1xuICAgICAgICB0aGlzLnlJbmRleCA9IHlDb3VudDtcbiAgICAgICAgdGhpcy56SW5kZXggPSB6Q291bnQ7XG4gICAgICAgIHRoaXMuaW5pdFBvcyA9IHRoaXMubm9kZS5wb3NpdGlvbjtcbiAgICAgICAgdGhpcy5vbkNoYW5nZUNvbG9yKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjbGlja0N1YmUoY2xja05hbWU6IHN0cmluZykge1xuICAgICAgICBsZXQgZW5hYmxlQ2xpY2sgPSBmYWxzZTtcbiAgICAgICAgbGV0IGRhdGEgPSB7IHhJbmRleDogbnVsbCwgeUluZGV4OiBudWxsLCB6SW5kZXg6IG51bGwgfVxuICAgICAgICBzd2l0Y2ggKGNsY2tOYW1lKSB7XG4gICAgICAgICAgICBjYXNlIFwidXBcIjpcbiAgICAgICAgICAgICAgICBlbmFibGVDbGljayA9IHRoaXMueUluZGV4ID09IDU7XG4gICAgICAgICAgICAgICAgZGF0YS54SW5kZXggPSB0aGlzLnhJbmRleDtcbiAgICAgICAgICAgICAgICBkYXRhLnpJbmRleCA9IHRoaXMuekluZGV4O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImRvd25cIjpcbiAgICAgICAgICAgICAgICBlbmFibGVDbGljayA9IHRoaXMueUluZGV4ID09IDA7XG4gICAgICAgICAgICAgICAgZGF0YS54SW5kZXggPSB0aGlzLnhJbmRleDtcbiAgICAgICAgICAgICAgICBkYXRhLnpJbmRleCA9IHRoaXMuekluZGV4O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImxlZnRcIjpcbiAgICAgICAgICAgICAgICBlbmFibGVDbGljayA9IHRoaXMueEluZGV4ID09IDA7XG4gICAgICAgICAgICAgICAgZGF0YS55SW5kZXggPSB0aGlzLnlJbmRleDtcbiAgICAgICAgICAgICAgICBkYXRhLnpJbmRleCA9IHRoaXMuekluZGV4O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInJpZ2h0XCI6XG4gICAgICAgICAgICAgICAgZW5hYmxlQ2xpY2sgPSB0aGlzLnhJbmRleCA9PSA1O1xuICAgICAgICAgICAgICAgIGRhdGEueUluZGV4ID0gdGhpcy55SW5kZXg7XG4gICAgICAgICAgICAgICAgZGF0YS56SW5kZXggPSB0aGlzLnpJbmRleDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJmcm9udFwiOlxuICAgICAgICAgICAgICAgIGVuYWJsZUNsaWNrID0gdGhpcy56SW5kZXggPT0gNTtcbiAgICAgICAgICAgICAgICBkYXRhLnhJbmRleCA9IHRoaXMueEluZGV4O1xuICAgICAgICAgICAgICAgIGRhdGEueUluZGV4ID0gdGhpcy55SW5kZXg7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiYmFja1wiOlxuICAgICAgICAgICAgICAgIGVuYWJsZUNsaWNrID0gdGhpcy56SW5kZXggPT0gMDtcbiAgICAgICAgICAgICAgICBkYXRhLnhJbmRleCA9IHRoaXMueEluZGV4O1xuICAgICAgICAgICAgICAgIGRhdGEueUluZGV4ID0gdGhpcy55SW5kZXg7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmN1YmVDbGlja0Fyci5wdXNoKGRhdGEpO1xuICAgICAgICBMaXN0ZW5lck1hbmFnZXIuZGlzcGF0Y2goRXZlbnRUeXBlLkNMSUNLX0NVQkUsIGRhdGEpO1xuICAgIH1cblxuICAgIHB1YmxpYyBoYW5kbGVDdWJlQ2xpY2soZGF0YTogeyB4SW5kZXg6IG51bWJlciwgeUluZGV4OiBudW1iZXIsIHpJbmRleDogbnVtYmVyIH0sIGlzQ2xpY2s6Ym9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgaWYgKGRhdGEueEluZGV4ID09IG51bGwgJiYgZGF0YS55SW5kZXggPT0gdGhpcy55SW5kZXggJiYgZGF0YS56SW5kZXggPT0gdGhpcy56SW5kZXgpIHtcbiAgICAgICAgICAgIGlmIChpc0NsaWNrKSB7XG4gICAgICAgICAgICAgICAgU291bmRNYW5hZ2VyLnN0b3BTb3VuZEJ5TmFtZShTb3VuZENvbmZpZy5zb3VkbGlzdFtcIuaJk+WtlOmfs+aViFwiXSk7XG4gICAgICAgICAgICAgICAgU291bmRNYW5hZ2VyLnBsYXlFZmZlY3QoU291bmRDb25maWcuc291ZGxpc3RbXCLmiZPlrZTpn7PmlYhcIl0sIGZhbHNlLCBmYWxzZSk7XG4gICAgICAgICAgICB9ICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLmlzSGlkZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSBpZiAoZGF0YS55SW5kZXggPT0gbnVsbCAmJiBkYXRhLnhJbmRleCA9PSB0aGlzLnhJbmRleCAmJiBkYXRhLnpJbmRleCA9PSB0aGlzLnpJbmRleCkge1xuICAgICAgICAgICAgaWYgKGlzQ2xpY2spIHtcbiAgICAgICAgICAgICAgICBTb3VuZE1hbmFnZXIuc3RvcFNvdW5kQnlOYW1lKFNvdW5kQ29uZmlnLnNvdWRsaXN0W1wi5omT5a2U6Z+z5pWIXCJdKTtcbiAgICAgICAgICAgICAgICBTb3VuZE1hbmFnZXIucGxheUVmZmVjdChTb3VuZENvbmZpZy5zb3VkbGlzdFtcIuaJk+WtlOmfs+aViFwiXSwgZmFsc2UsIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuaXNIaWRlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIGlmIChkYXRhLnpJbmRleCA9PSBudWxsICYmIGRhdGEueEluZGV4ID09IHRoaXMueEluZGV4ICYmIGRhdGEueUluZGV4ID09IHRoaXMueUluZGV4KSB7XG4gICAgICAgICAgICBpZiAoaXNDbGljaykge1xuICAgICAgICAgICAgICAgIFNvdW5kTWFuYWdlci5zdG9wU291bmRCeU5hbWUoU291bmRDb25maWcuc291ZGxpc3RbXCLmiZPlrZTpn7PmlYhcIl0pO1xuICAgICAgICAgICAgICAgIFNvdW5kTWFuYWdlci5wbGF5RWZmZWN0KFNvdW5kQ29uZmlnLnNvdWRsaXN0W1wi5omT5a2U6Z+z5pWIXCJdLCBmYWxzZSwgZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5pc0hpZGUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGhhbmRsZU9wZW4ocG9zOiB7IHg6IG51bWJlciwgeTogbnVtYmVyLCB6OiBudW1iZXIgfSkge1xuICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24ocG9zLngsIHBvcy55LCBwb3Mueik7XG4gICAgfVxuXG4gICAgcHVibGljIGhhbmRsZUNsb3NlKCkge1xuICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24odGhpcy5pbml0UG9zKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVzZXQoKSB7XG4gICAgICAgIHRoaXMuaXNIaWRlID0gZmFsc2U7XG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25DaGFuZ2VDb2xvcigpIHtcbiAgICAgICAgaWYgKHRoaXMueEluZGV4ID09IDApIHtcbiAgICAgICAgICAgIGxldCBtYXRlcmlhbCA9IHRoaXMubGVmdEZhY2UuZ2V0Q29tcG9uZW50KGNjLk1lc2hSZW5kZXJlcikuZ2V0TWF0ZXJpYWwoMCk7XG4gICAgICAgICAgICBsZXQgY29sb3IgPSBuZXcgY2MuQ29sb3IoKS5mcm9tSEVYKFwiIzJEQjk3QVwiKTtcbiAgICAgICAgICAgIG1hdGVyaWFsLnNldFByb3BlcnR5KFwiZGlmZnVzZUNvbG9yXCIsIGNvbG9yLCAwKVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnhJbmRleCA9PSBTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS54Q291bnQgLSAxKSB7XG4gICAgICAgICAgICBsZXQgbWF0ZXJpYWwgPSB0aGlzLnJpZ2h0RmFjZS5nZXRDb21wb25lbnQoY2MuTWVzaFJlbmRlcmVyKS5nZXRNYXRlcmlhbCgwKTtcbiAgICAgICAgICAgIGxldCBjb2xvciA9IG5ldyBjYy5Db2xvcigpLmZyb21IRVgoXCIjMkRCOTdBXCIpO1xuICAgICAgICAgICAgbWF0ZXJpYWwuc2V0UHJvcGVydHkoXCJkaWZmdXNlQ29sb3JcIiwgY29sb3IsIDApXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMueUluZGV4ID09IDApIHtcbiAgICAgICAgICAgIGxldCBtYXRlcmlhbCA9IHRoaXMuZG93bkZhY2UuZ2V0Q29tcG9uZW50KGNjLk1lc2hSZW5kZXJlcikuZ2V0TWF0ZXJpYWwoMCk7XG4gICAgICAgICAgICBsZXQgY29sb3IgPSBuZXcgY2MuQ29sb3IoKS5mcm9tSEVYKFwiIzJEQjk3QVwiKTtcbiAgICAgICAgICAgIG1hdGVyaWFsLnNldFByb3BlcnR5KFwiZGlmZnVzZUNvbG9yXCIsIGNvbG9yLCAwKVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnlJbmRleCA9PSBTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS55Q291bnQgLSAxKSB7XG4gICAgICAgICAgICBsZXQgbWF0ZXJpYWwgPSB0aGlzLnVwRmFjZS5nZXRDb21wb25lbnQoY2MuTWVzaFJlbmRlcmVyKS5nZXRNYXRlcmlhbCgwKTtcbiAgICAgICAgICAgIGxldCBjb2xvciA9IG5ldyBjYy5Db2xvcigpLmZyb21IRVgoXCIjMkRCOTdBXCIpO1xuICAgICAgICAgICAgbWF0ZXJpYWwuc2V0UHJvcGVydHkoXCJkaWZmdXNlQ29sb3JcIiwgY29sb3IsIDApXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuekluZGV4ID09IDApIHtcbiAgICAgICAgICAgIGxldCBtYXRlcmlhbCA9IHRoaXMuYmFja0ZhY2UuZ2V0Q29tcG9uZW50KGNjLk1lc2hSZW5kZXJlcikuZ2V0TWF0ZXJpYWwoMCk7XG4gICAgICAgICAgICBsZXQgY29sb3IgPSBuZXcgY2MuQ29sb3IoKS5mcm9tSEVYKFwiIzJEQjk3QVwiKTtcbiAgICAgICAgICAgIG1hdGVyaWFsLnNldFByb3BlcnR5KFwiZGlmZnVzZUNvbG9yXCIsIGNvbG9yLCAwKVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnpJbmRleCA9PSBTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS56Q291bnQgLSAxKSB7XG4gICAgICAgICAgICBsZXQgbWF0ZXJpYWwgPSB0aGlzLmZyb250RmFjZS5nZXRDb21wb25lbnQoY2MuTWVzaFJlbmRlcmVyKS5nZXRNYXRlcmlhbCgwKTtcbiAgICAgICAgICAgIGxldCBjb2xvciA9IG5ldyBjYy5Db2xvcigpLmZyb21IRVgoXCIjMkRCOTdBXCIpO1xuICAgICAgICAgICAgbWF0ZXJpYWwuc2V0UHJvcGVydHkoXCJkaWZmdXNlQ29sb3JcIiwgY29sb3IsIDApXG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuIl19