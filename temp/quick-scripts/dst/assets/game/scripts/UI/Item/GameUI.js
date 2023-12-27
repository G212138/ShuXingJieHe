
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game/scripts/UI/Item/GameUI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3f05fPAQipNXooynbRVeysu', 'GameUI');
// game/scripts/UI/Item/GameUI.ts

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
var ThreeDNode_1 = require("./ThreeDNode");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameUI = /** @class */ (function (_super) {
    __extends(GameUI, _super);
    function GameUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.threeDNode = null;
        _this.addMinus = null;
        _this.img_huangbian = null;
        _this.lbl_count = null;
        _this.sliderRotate = null;
        _this.sliderMerge = null;
        _this.inputType = 0;
        return _this;
    }
    GameUI.prototype.onLoad = function () {
    };
    GameUI.prototype.onDestroy = function () {
    };
    GameUI.prototype.init = function () {
        this.lbl_count.string = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.count.toString();
    };
    GameUI.prototype.onClick_count = function () {
        this.addMinus.active = !this.addMinus.active;
        this.img_huangbian.active = false;
        this.handleBtnState(SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.count);
    };
    GameUI.prototype.onClickAdd = function () {
        if (SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.count < 8) {
            SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.count++;
            this.handleBtnState(SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.count);
            this.threeDNode.init();
            this.init();
        }
    };
    GameUI.prototype.onClickMinus = function () {
        if (SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.count > 2) {
            SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.count--;
            this.handleBtnState(SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.count);
            this.threeDNode.init();
            this.init();
        }
    };
    GameUI.prototype.handleBtnState = function (count) {
        if (count <= 2) {
            this.addMinus.getChildByName("btnMinusSize").getChildByName("Label").color = new cc.Color().fromHEX("#74BBF2");
        }
        else {
            this.addMinus.getChildByName("btnMinusSize").getChildByName("Label").color = new cc.Color().fromHEX("#2094EE");
        }
        if (count >= 8) {
            this.addMinus.getChildByName("btnAddSize").getChildByName("Label").color = new cc.Color().fromHEX("#74BBF2");
        }
        else {
            this.addMinus.getChildByName("btnAddSize").getChildByName("Label").color = new cc.Color().fromHEX("#2094EE");
        }
    };
    GameUI.prototype.onClickBtnCopy = function () {
        SoundManager_1.SoundManager.stopSoundByName(SoundConfig_1.SoundConfig.soudlist["点击音效"]);
        SoundManager_1.SoundManager.playEffect(SoundConfig_1.SoundConfig.soudlist["点击音效"], false, false);
        this.addMinus.active = false;
        this.threeDNode.showStep2();
        // this.node.getChildByName("btnCopy").getChildByName("disable").active = true;
    };
    GameUI.prototype.onClickRotate = function () {
        SoundManager_1.SoundManager.stopSoundByName(SoundConfig_1.SoundConfig.soudlist["点击音效"]);
        SoundManager_1.SoundManager.playEffect(SoundConfig_1.SoundConfig.soudlist["点击音效"], false, false);
        this.addMinus.active = false;
        // this.node.getChildByName("btnRotate").getChildByName("disable").active = true;
        this.threeDNode.rotation();
        this.sliderRotate.active = true;
    };
    GameUI.prototype.onClickMerge = function () {
        SoundManager_1.SoundManager.stopSoundByName(SoundConfig_1.SoundConfig.soudlist["点击音效"]);
        SoundManager_1.SoundManager.playEffect(SoundConfig_1.SoundConfig.soudlist["点击音效"], false, false);
        this.addMinus.active = false;
        // this.node.getChildByName("btnMerge").getChildByName("disable").active = true;
        this.threeDNode.merge();
        this.sliderMerge.active = true;
    };
    GameUI.prototype.onSlideRotate = function (event) {
        var progress = event.progress;
        this.threeDNode.controlRotate(progress);
    };
    GameUI.prototype.onSlideMerge = function (event) {
        var progress = event.progress;
        this.threeDNode.controlMerge(progress);
    };
    GameUI.prototype.onClickShowZuoBiao = function () {
        this.threeDNode.reset();
        // this.node.getChildByName("btnZuobiao").getChildByName("disable").active = true;
        // let zuobiao_node = this.node.getChildByName("zuobiao_node");
        // zuobiao_node.active = true;
        // let zuobiao_top = zuobiao_node.getChildByName("top");
        // let count = SyncDataManager.getSyncData().customSyncData.count;
        // zuobiao_top.y = count * 80;
    };
    __decorate([
        property(ThreeDNode_1.default)
    ], GameUI.prototype, "threeDNode", void 0);
    __decorate([
        property(cc.Node)
    ], GameUI.prototype, "addMinus", void 0);
    __decorate([
        property(cc.Node)
    ], GameUI.prototype, "img_huangbian", void 0);
    __decorate([
        property(cc.Label)
    ], GameUI.prototype, "lbl_count", void 0);
    __decorate([
        property(cc.Node)
    ], GameUI.prototype, "sliderRotate", void 0);
    __decorate([
        property(cc.Node)
    ], GameUI.prototype, "sliderMerge", void 0);
    GameUI = __decorate([
        ccclass
    ], GameUI);
    return GameUI;
}(cc.Component));
exports.default = GameUI;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZVxcc2NyaXB0c1xcVUlcXEl0ZW1cXEdhbWVVSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSwrRUFBOEU7QUFDOUUscUZBQW9GO0FBQ3BGLDZDQUE0QztBQUM1QywyQ0FBcUM7QUFFL0IsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBb0MsMEJBQVk7SUFBaEQ7UUFBQSxxRUErR0M7UUE1R1csZ0JBQVUsR0FBYyxJQUFJLENBQUM7UUFFN0IsY0FBUSxHQUFZLElBQUksQ0FBQztRQUV6QixtQkFBYSxHQUFZLElBQUksQ0FBQztRQUU5QixlQUFTLEdBQWEsSUFBSSxDQUFDO1FBRTNCLGtCQUFZLEdBQVksSUFBSSxDQUFDO1FBRTdCLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBYzVCLGVBQVMsR0FBVyxDQUFDLENBQUM7O0lBb0ZsQyxDQUFDO0lBaEdHLHVCQUFNLEdBQU47SUFFQSxDQUFDO0lBRUQsMEJBQVMsR0FBVDtJQUVBLENBQUM7SUFFTSxxQkFBSSxHQUFYO1FBQ0ksSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsaUNBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzFGLENBQUM7SUFHTyw4QkFBYSxHQUFyQjtRQUNJLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7UUFDN0MsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxjQUFjLENBQUMsaUNBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDNUUsQ0FBQztJQUVPLDJCQUFVLEdBQWxCO1FB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QyxJQUFJLENBQUM7NENBQ2U7SUFFakM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztpREFDb0I7SUFFdEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzs2Q0FDZ0I7SUFFbkM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDbUI7SUFFckM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsrQ0FDa0I7SUFibkIsTUFBTTtRQUQxQixPQUFPO09BQ2EsTUFBTSxDQStHMUI7SUFBRCxhQUFDO0NBL0dELEFBK0dDLENBL0dtQyxFQUFFLENBQUMsU0FBUyxHQStHL0M7a0JBL0dvQixNQUFNIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBTb3VuZE1hbmFnZXIgfSBmcm9tIFwiLi4vLi4vLi4vLi4vZnJhbWUvc2NyaXB0cy9NYW5hZ2VyL1NvdW5kTWFuYWdlclwiO1xuaW1wb3J0IHsgU3luY0RhdGFNYW5hZ2VyIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2ZyYW1lL3NjcmlwdHMvTWFuYWdlci9TeW5jRGF0YU1hbmFnZXJcIjtcbmltcG9ydCB7IFNvdW5kQ29uZmlnIH0gZnJvbSBcIi4vU291bmRDb25maWdcIjtcbmltcG9ydCBUaHJlZU5vZGUgZnJvbSBcIi4vVGhyZWVETm9kZVwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVVJIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShUaHJlZU5vZGUpXG4gICAgcHJpdmF0ZSB0aHJlZUROb2RlOiBUaHJlZU5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHByaXZhdGUgYWRkTWludXM6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHByaXZhdGUgaW1nX2h1YW5nYmlhbjogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIHByaXZhdGUgbGJsX2NvdW50OiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcHJpdmF0ZSBzbGlkZXJSb3RhdGU6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHByaXZhdGUgc2xpZGVyTWVyZ2U6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgb25Mb2FkKCkge1xuXG4gICAgfVxuXG4gICAgb25EZXN0cm95KCkge1xuXG4gICAgfVxuXG4gICAgcHVibGljIGluaXQoKSB7XG4gICAgICAgIHRoaXMubGJsX2NvdW50LnN0cmluZyA9IFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmNvdW50LnRvU3RyaW5nKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpbnB1dFR5cGU6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBvbkNsaWNrX2NvdW50KCkge1xuICAgICAgICB0aGlzLmFkZE1pbnVzLmFjdGl2ZSA9ICF0aGlzLmFkZE1pbnVzLmFjdGl2ZTtcbiAgICAgICAgdGhpcy5pbWdfaHVhbmdiaWFuLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmhhbmRsZUJ0blN0YXRlKFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmNvdW50KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uQ2xpY2tBZGQoKSB7XG4gICAgICAgIGlmIChTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5jb3VudCA8IDgpIHtcbiAgICAgICAgICAgIFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmNvdW50Kys7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZUJ0blN0YXRlKFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmNvdW50KTtcbiAgICAgICAgICAgIHRoaXMudGhyZWVETm9kZS5pbml0KCk7XG4gICAgICAgICAgICB0aGlzLmluaXQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgb25DbGlja01pbnVzKCkge1xuICAgICAgICBpZiAoU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuY291bnQgPiAyKSB7XG4gICAgICAgICAgICBTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5jb3VudC0tO1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVCdG5TdGF0ZShTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5jb3VudCk7XG4gICAgICAgICAgICB0aGlzLnRocmVlRE5vZGUuaW5pdCgpO1xuICAgICAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGhhbmRsZUJ0blN0YXRlKGNvdW50OiBudW1iZXIpIHtcbiAgICAgICAgaWYgKGNvdW50IDw9IDIpIHtcbiAgICAgICAgICAgIHRoaXMuYWRkTWludXMuZ2V0Q2hpbGRCeU5hbWUoXCJidG5NaW51c1NpemVcIikuZ2V0Q2hpbGRCeU5hbWUoXCJMYWJlbFwiKS5jb2xvciA9IG5ldyBjYy5Db2xvcigpLmZyb21IRVgoXCIjNzRCQkYyXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hZGRNaW51cy5nZXRDaGlsZEJ5TmFtZShcImJ0bk1pbnVzU2l6ZVwiKS5nZXRDaGlsZEJ5TmFtZShcIkxhYmVsXCIpLmNvbG9yID0gbmV3IGNjLkNvbG9yKCkuZnJvbUhFWChcIiMyMDk0RUVcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY291bnQgPj0gOCkge1xuICAgICAgICAgICAgdGhpcy5hZGRNaW51cy5nZXRDaGlsZEJ5TmFtZShcImJ0bkFkZFNpemVcIikuZ2V0Q2hpbGRCeU5hbWUoXCJMYWJlbFwiKS5jb2xvciA9IG5ldyBjYy5Db2xvcigpLmZyb21IRVgoXCIjNzRCQkYyXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hZGRNaW51cy5nZXRDaGlsZEJ5TmFtZShcImJ0bkFkZFNpemVcIikuZ2V0Q2hpbGRCeU5hbWUoXCJMYWJlbFwiKS5jb2xvciA9IG5ldyBjYy5Db2xvcigpLmZyb21IRVgoXCIjMjA5NEVFXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkNsaWNrQnRuQ29weSgpIHtcbiAgICAgICAgU291bmRNYW5hZ2VyLnN0b3BTb3VuZEJ5TmFtZShTb3VuZENvbmZpZy5zb3VkbGlzdFtcIueCueWHu+mfs+aViFwiXSk7XG4gICAgICAgIFNvdW5kTWFuYWdlci5wbGF5RWZmZWN0KFNvdW5kQ29uZmlnLnNvdWRsaXN0W1wi54K55Ye76Z+z5pWIXCJdLCBmYWxzZSwgZmFsc2UpO1xuICAgICAgICB0aGlzLmFkZE1pbnVzLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnRocmVlRE5vZGUuc2hvd1N0ZXAyKCk7XG4gICAgICAgIC8vIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJ0bkNvcHlcIikuZ2V0Q2hpbGRCeU5hbWUoXCJkaXNhYmxlXCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkNsaWNrUm90YXRlKCkge1xuICAgICAgICBTb3VuZE1hbmFnZXIuc3RvcFNvdW5kQnlOYW1lKFNvdW5kQ29uZmlnLnNvdWRsaXN0W1wi54K55Ye76Z+z5pWIXCJdKTtcbiAgICAgICAgU291bmRNYW5hZ2VyLnBsYXlFZmZlY3QoU291bmRDb25maWcuc291ZGxpc3RbXCLngrnlh7vpn7PmlYhcIl0sIGZhbHNlLCBmYWxzZSk7XG4gICAgICAgIHRoaXMuYWRkTWludXMuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIC8vIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJ0blJvdGF0ZVwiKS5nZXRDaGlsZEJ5TmFtZShcImRpc2FibGVcIikuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy50aHJlZUROb2RlLnJvdGF0aW9uKCk7XG4gICAgICAgIHRoaXMuc2xpZGVyUm90YXRlLmFjdGl2ZSA9IHRydWU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkNsaWNrTWVyZ2UoKSB7XG4gICAgICAgIFNvdW5kTWFuYWdlci5zdG9wU291bmRCeU5hbWUoU291bmRDb25maWcuc291ZGxpc3RbXCLngrnlh7vpn7PmlYhcIl0pO1xuICAgICAgICBTb3VuZE1hbmFnZXIucGxheUVmZmVjdChTb3VuZENvbmZpZy5zb3VkbGlzdFtcIueCueWHu+mfs+aViFwiXSwgZmFsc2UsIGZhbHNlKTtcbiAgICAgICAgdGhpcy5hZGRNaW51cy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgLy8gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiYnRuTWVyZ2VcIikuZ2V0Q2hpbGRCeU5hbWUoXCJkaXNhYmxlXCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMudGhyZWVETm9kZS5tZXJnZSgpO1xuICAgICAgICB0aGlzLnNsaWRlck1lcmdlLmFjdGl2ZSA9IHRydWU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvblNsaWRlUm90YXRlKGV2ZW50KSB7XG4gICAgICAgIGxldCBwcm9ncmVzcyA9IGV2ZW50LnByb2dyZXNzO1xuICAgICAgICB0aGlzLnRocmVlRE5vZGUuY29udHJvbFJvdGF0ZShwcm9ncmVzcyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvblNsaWRlTWVyZ2UoZXZlbnQpIHtcbiAgICAgICAgbGV0IHByb2dyZXNzID0gZXZlbnQucHJvZ3Jlc3M7XG4gICAgICAgIHRoaXMudGhyZWVETm9kZS5jb250cm9sTWVyZ2UocHJvZ3Jlc3MpO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25DbGlja1Nob3dadW9CaWFvKCkge1xuICAgICAgICB0aGlzLnRocmVlRE5vZGUucmVzZXQoKTtcbiAgICAgICAgLy8gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiYnRuWnVvYmlhb1wiKS5nZXRDaGlsZEJ5TmFtZShcImRpc2FibGVcIikuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgLy8gbGV0IHp1b2JpYW9fbm9kZSA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInp1b2JpYW9fbm9kZVwiKTtcbiAgICAgICAgLy8genVvYmlhb19ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIC8vIGxldCB6dW9iaWFvX3RvcCA9IHp1b2JpYW9fbm9kZS5nZXRDaGlsZEJ5TmFtZShcInRvcFwiKTtcbiAgICAgICAgLy8gbGV0IGNvdW50ID0gU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuY291bnQ7XG4gICAgICAgIC8vIHp1b2JpYW9fdG9wLnkgPSBjb3VudCAqIDgwO1xuICAgIH1cbn1cbiJdfQ==