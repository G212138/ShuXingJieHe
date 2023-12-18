
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game/scripts/UI/Item/Block.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '17969r1hoJE84o4r29gr9KX', 'Block');
// game/scripts/UI/Item/Block.ts

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
var SoundConfig_1 = require("./SoundConfig");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Block = /** @class */ (function (_super) {
    __extends(Block, _super);
    function Block() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._xIndex = 0;
        _this._yIndex = 0;
        _this._zIndex = 0;
        _this.isClicked = false;
        return _this;
    }
    Block.prototype.init = function (xIndex, yIndex, zIndex) {
        this.node.getChildByName("icon").active = false;
        this._xIndex = xIndex;
        this._yIndex = zIndex;
        this._zIndex = yIndex;
        var index = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.qiepianClickArr.indexOf(this.node.name);
        this.isClicked = index != -1;
        this.node.getChildByName("icon").active = this.isClicked;
    };
    Block.prototype.onHandleClickCube = function (data) {
        // if (data.xIndex == null && data.yIndex == this._yIndex && data.zIndex == this._zIndex) {
        //     this.node.getChildByName("icon").active = true;
        // } else if (data.yIndex == null && data.xIndex == this._xIndex && data.zIndex == this._zIndex) {
        //     this.node.getChildByName("icon").active = true;
        // } else if (data.zIndex == null && data.xIndex == this._xIndex && data.yIndex == this._yIndex) {
        //     this.node.getChildByName("icon").active = true;
        // }
    };
    Block.prototype.reset = function () {
        // this.node.getChildByName("icon").active = false;
    };
    Block.prototype.onClickBlock = function () {
        SoundManager_1.SoundManager.stopSoundByName(SoundConfig_1.SoundConfig.soudlist["点击音效"]);
        SoundManager_1.SoundManager.playEffect(SoundConfig_1.SoundConfig.soudlist["点击音效"], false, false);
        this.isClicked = !this.isClicked;
        this.node.getChildByName("icon").active = this.isClicked;
        if (this.isClicked) {
            SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.qiepianClickArr.push(this.node.name);
        }
        else {
            var index = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.qiepianClickArr.indexOf(this.node.name);
            SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.qiepianClickArr.splice(index, 1);
        }
    };
    Block = __decorate([
        ccclass
    ], Block);
    return Block;
}(cc.Component));
exports.default = Block;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZVxcc2NyaXB0c1xcVUlcXEl0ZW1cXEJsb2NrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtFQUE4RTtBQUM5RSxxRkFBb0Y7QUFDcEYsNkNBQTRDO0FBRXRDLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQW1DLHlCQUFZO0lBQS9DO1FBQUEscUVBNkNDO1FBM0NXLGFBQU8sR0FBVyxDQUFDLENBQUM7UUFDcEIsYUFBTyxHQUFXLENBQUMsQ0FBQztRQUNwQixhQUFPLEdBQVcsQ0FBQyxDQUFDO1FBRXBCLGVBQVMsR0FBWSxLQUFLLENBQUM7O0lBdUN2QyxDQUFDO0lBckNVLG9CQUFJLEdBQVgsVUFBWSxNQUFjLEVBQUUsTUFBYyxFQUFFLE1BQWM7UUFDdEQsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNoRCxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztRQUN0QixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztRQUN0QixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztRQUN0QixJQUFJLEtBQUssR0FBRyxpQ0FBZSxDQUFDLFdBQVcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakcsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDN0QsQ0FBQztJQUVNLGlDQUFpQixHQUF4QixVQUF5QixJQUFzRDtRQUMzRSwyRkFBMkY7UUFDM0Ysc0RBQXNEO1FBQ3RELGtHQUFrRztRQUNsRyxzREFBc0Q7UUFDdEQsa0dBQWtHO1FBQ2xHLHNEQUFzRDtRQUN0RCxJQUFJO0lBQ1IsQ0FBQztJQUVNLHFCQUFLLEdBQVo7UUFDSSxtREFBbUQ7SUFDdkQsQ0FBQztJQUVPLDRCQUFZLEdBQXBCO1FBQ0ksMkJBQVksQ0FBQyxlQUFlLENBQUMseUJBQVcsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUMzRCwyQkFBWSxDQUFDLFVBQVUsQ0FBQyx5QkFBVyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDcEUsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDekQsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2hCLGlDQUFlLENBQUMsV0FBVyxFQUFFLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNyRjthQUFNO1lBQ0gsSUFBSSxLQUFLLEdBQUcsaUNBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2pHLGlDQUFlLENBQUMsV0FBVyxFQUFFLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ2pGO0lBQ0wsQ0FBQztJQTNDZ0IsS0FBSztRQUR6QixPQUFPO09BQ2EsS0FBSyxDQTZDekI7SUFBRCxZQUFDO0NBN0NELEFBNkNDLENBN0NrQyxFQUFFLENBQUMsU0FBUyxHQTZDOUM7a0JBN0NvQixLQUFLIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU291bmRNYW5hZ2VyIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2ZyYW1lL3NjcmlwdHMvTWFuYWdlci9Tb3VuZE1hbmFnZXJcIjtcbmltcG9ydCB7IFN5bmNEYXRhTWFuYWdlciB9IGZyb20gXCIuLi8uLi8uLi8uLi9mcmFtZS9zY3JpcHRzL01hbmFnZXIvU3luY0RhdGFNYW5hZ2VyXCI7XG5pbXBvcnQgeyBTb3VuZENvbmZpZyB9IGZyb20gXCIuL1NvdW5kQ29uZmlnXCI7XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmxvY2sgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgcHJpdmF0ZSBfeEluZGV4OiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgX3lJbmRleDogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIF96SW5kZXg6IG51bWJlciA9IDA7XG5cbiAgICBwcml2YXRlIGlzQ2xpY2tlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgcHVibGljIGluaXQoeEluZGV4OiBudW1iZXIsIHlJbmRleDogbnVtYmVyLCB6SW5kZXg6IG51bWJlcikge1xuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJpY29uXCIpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLl94SW5kZXggPSB4SW5kZXg7XG4gICAgICAgIHRoaXMuX3lJbmRleCA9IHpJbmRleDtcbiAgICAgICAgdGhpcy5fekluZGV4ID0geUluZGV4O1xuICAgICAgICBsZXQgaW5kZXggPSBTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5xaWVwaWFuQ2xpY2tBcnIuaW5kZXhPZih0aGlzLm5vZGUubmFtZSk7XG4gICAgICAgIHRoaXMuaXNDbGlja2VkID0gaW5kZXggIT0gLTE7XG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImljb25cIikuYWN0aXZlID0gdGhpcy5pc0NsaWNrZWQ7XG4gICAgfVxuXG4gICAgcHVibGljIG9uSGFuZGxlQ2xpY2tDdWJlKGRhdGE6IHt4SW5kZXg6IG51bWJlciwgeUluZGV4OiBudW1iZXIsIHpJbmRleDogbnVtYmVyfSkge1xuICAgICAgICAvLyBpZiAoZGF0YS54SW5kZXggPT0gbnVsbCAmJiBkYXRhLnlJbmRleCA9PSB0aGlzLl95SW5kZXggJiYgZGF0YS56SW5kZXggPT0gdGhpcy5fekluZGV4KSB7XG4gICAgICAgIC8vICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJpY29uXCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIC8vIH0gZWxzZSBpZiAoZGF0YS55SW5kZXggPT0gbnVsbCAmJiBkYXRhLnhJbmRleCA9PSB0aGlzLl94SW5kZXggJiYgZGF0YS56SW5kZXggPT0gdGhpcy5fekluZGV4KSB7XG4gICAgICAgIC8vICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJpY29uXCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIC8vIH0gZWxzZSBpZiAoZGF0YS56SW5kZXggPT0gbnVsbCAmJiBkYXRhLnhJbmRleCA9PSB0aGlzLl94SW5kZXggJiYgZGF0YS55SW5kZXggPT0gdGhpcy5feUluZGV4KSB7XG4gICAgICAgIC8vICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJpY29uXCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIC8vIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgcmVzZXQoKSB7XG4gICAgICAgIC8vIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImljb25cIikuYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkNsaWNrQmxvY2soKSB7XG4gICAgICAgIFNvdW5kTWFuYWdlci5zdG9wU291bmRCeU5hbWUoU291bmRDb25maWcuc291ZGxpc3RbXCLngrnlh7vpn7PmlYhcIl0pO1xuICAgICAgICBTb3VuZE1hbmFnZXIucGxheUVmZmVjdChTb3VuZENvbmZpZy5zb3VkbGlzdFtcIueCueWHu+mfs+aViFwiXSwgZmFsc2UsIGZhbHNlKTtcbiAgICAgICAgdGhpcy5pc0NsaWNrZWQgPSAhdGhpcy5pc0NsaWNrZWQ7XG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImljb25cIikuYWN0aXZlID0gdGhpcy5pc0NsaWNrZWQ7XG4gICAgICAgIGlmICh0aGlzLmlzQ2xpY2tlZCkge1xuICAgICAgICAgICAgU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEucWllcGlhbkNsaWNrQXJyLnB1c2godGhpcy5ub2RlLm5hbWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGluZGV4ID0gU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEucWllcGlhbkNsaWNrQXJyLmluZGV4T2YodGhpcy5ub2RlLm5hbWUpO1xuICAgICAgICAgICAgU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEucWllcGlhbkNsaWNrQXJyLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cbiJdfQ==