
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
var ListenerManager_1 = require("../../../../frame/scripts/Manager/ListenerManager");
var SoundManager_1 = require("../../../../frame/scripts/Manager/SoundManager");
var SyncDataManager_1 = require("../../../../frame/scripts/Manager/SyncDataManager");
var EventType_1 = require("../../Data/EventType");
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
        _this.lbl_gongshi1 = null;
        _this.gongshi_2 = null;
        _this.inputType = 0;
        return _this;
    }
    GameUI.prototype.onLoad = function () {
        ListenerManager_1.ListenerManager.on(EventType_1.EventType.hebingwancheng, this.showGongshi_2, this);
    };
    GameUI.prototype.onDestroy = function () {
        ListenerManager_1.ListenerManager.off(EventType_1.EventType.hebingwancheng, this.showGongshi_2, this);
    };
    GameUI.prototype.showGongshi_2 = function () {
        var count = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.count;
        this.lbl_gongshi1.node.active = false;
        this.gongshi_2.active = true;
        var gongshi = "";
        for (var i = 1; i <= count; i++) {
            gongshi += i + "²";
            if (i != count) {
                gongshi += " + ";
            }
        }
        gongshi += " = ";
        this.gongshi_2.getChildByName("gongshi_1").getComponent(cc.Label).string = gongshi;
        var top = this.gongshi_2.getChildByName("gongshi_2").getChildByName("top");
        top.getChildByName("first").getComponent(cc.Label).string = count + "x(";
        top.getChildByName("btn_1").getComponent(cc.Label).string = count + "+1";
        top.getChildByName("btn_2").getComponent(cc.Label).string = count + "x2+1";
        top.getChildByName("btn_1_1").getComponent(cc.Label).string = count + 1 + "";
        top.getChildByName("btn_2_2").getComponent(cc.Label).string = count * 2 + 1 + "";
        top.getChildByName("btn_1_1").active = false;
        top.getChildByName("btn_2_2").active = false;
    };
    GameUI.prototype.onclick_1 = function () {
        var top = this.gongshi_2.getChildByName("gongshi_2").getChildByName("top");
        top.getChildByName("btn_1_1").active = true;
        top.getChildByName("btn_1").active = false;
    };
    GameUI.prototype.onclick_1_1 = function () {
        var top = this.gongshi_2.getChildByName("gongshi_2").getChildByName("top");
        top.getChildByName("btn_1_1").active = false;
        top.getChildByName("btn_1").active = true;
    };
    GameUI.prototype.onclick_2 = function () {
        var top = this.gongshi_2.getChildByName("gongshi_2").getChildByName("top");
        top.getChildByName("btn_2").active = false;
        top.getChildByName("btn_2_2").active = true;
    };
    GameUI.prototype.onclick_2_2 = function () {
        var top = this.gongshi_2.getChildByName("gongshi_2").getChildByName("top");
        top.getChildByName("btn_2").active = true;
        top.getChildByName("btn_2_2").active = false;
    };
    GameUI.prototype.init = function () {
        this.updateBtnState(SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curIndex);
        var count = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.count;
        this.lbl_count.string = count.toString();
        var gongshi = "";
        for (var i = 1; i <= count; i++) {
            gongshi += i + "²";
            if (i != count) {
                gongshi += " + ";
            }
        }
        gongshi += " = ?";
        this.lbl_gongshi1.node.active = true;
        this.gongshi_2.active = false;
        this.lbl_gongshi1.string = gongshi;
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
        this.updateBtnState(1);
    };
    GameUI.prototype.onClickRotate = function () {
        SoundManager_1.SoundManager.stopSoundByName(SoundConfig_1.SoundConfig.soudlist["点击音效"]);
        SoundManager_1.SoundManager.playEffect(SoundConfig_1.SoundConfig.soudlist["点击音效"], false, false);
        this.addMinus.active = false;
        this.threeDNode.rotation();
        this.sliderRotate.active = true;
        this.updateBtnState(2);
    };
    GameUI.prototype.onClickMerge = function () {
        SoundManager_1.SoundManager.stopSoundByName(SoundConfig_1.SoundConfig.soudlist["点击音效"]);
        SoundManager_1.SoundManager.playEffect(SoundConfig_1.SoundConfig.soudlist["点击音效"], false, false);
        this.addMinus.active = false;
        this.threeDNode.merge();
        this.sliderMerge.active = true;
        this.updateBtnState(3);
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
        this.updateBtnState(4);
        this.threeDNode.reset();
    };
    GameUI.prototype.onClickBtnBack = function () {
        this.addMinus.active = false;
        if (SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curIndex > 0) {
            switch (SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curIndex) {
                case 1:
                    this.threeDNode.init();
                    this.init();
                    break;
                case 2:
                    this.threeDNode.init();
                    this.init();
                    this.threeDNode.showStep2();
                    break;
                case 3:
                    this.threeDNode.controlMerge(0);
                    this.sliderMerge.getComponent(cc.Slider).progress = 0;
                    break;
                case 4:
                    this.threeDNode.hideZuobiao();
                    break;
            }
            SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curIndex--;
        }
        this.updateBtnState(SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curIndex);
    };
    GameUI.prototype.updateBtnState = function (index) {
        if (index === void 0) { index = 0; }
        console.log("updateBtnState", index);
        SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curIndex = index;
        this.node.getChildByName("btnCopy").getChildByName("disable").active = index > 0;
        this.node.getChildByName("btnRotate").getChildByName("disable").active = true;
        this.node.getChildByName("btnMerge").getChildByName("disable").active = true;
        this.node.getChildByName("btnZuobiao").getChildByName("disable").active = true;
        switch (index) {
            case 1:
                this.node.getChildByName("btnRotate").getChildByName("disable").active = false;
                break;
            case 2:
                this.node.getChildByName("btnMerge").getChildByName("disable").active = false;
                break;
            case 3:
                this.node.getChildByName("btnZuobiao").getChildByName("disable").active = false;
                break;
        }
        if (index != 4) {
            this.threeDNode.hideZuobiao();
        }
        this.node.getChildByName("btnBack").getChildByName("disable").active = index == 0;
        this.sliderRotate.active = index == 2;
        this.sliderMerge.active = index == 3;
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
    __decorate([
        property(cc.Label)
    ], GameUI.prototype, "lbl_gongshi1", void 0);
    __decorate([
        property(cc.Node)
    ], GameUI.prototype, "gongshi_2", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZVxcc2NyaXB0c1xcVUlcXEl0ZW1cXEdhbWVVSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxxRkFBb0Y7QUFDcEYsK0VBQThFO0FBQzlFLHFGQUFvRjtBQUNwRixrREFBaUQ7QUFDakQsNkNBQTRDO0FBQzVDLDJDQUFxQztBQUUvQixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFvQywwQkFBWTtJQUFoRDtRQUFBLHFFQWlPQztRQTlOVyxnQkFBVSxHQUFjLElBQUksQ0FBQztRQUU3QixjQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLG1CQUFhLEdBQVksSUFBSSxDQUFDO1FBRTlCLGVBQVMsR0FBYSxJQUFJLENBQUM7UUFFM0Isa0JBQVksR0FBWSxJQUFJLENBQUM7UUFFN0IsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFFNUIsa0JBQVksR0FBYSxJQUFJLENBQUM7UUFFOUIsZUFBUyxHQUFZLElBQUksQ0FBQztRQXdFMUIsZUFBUyxHQUFXLENBQUMsQ0FBQzs7SUF3SWxDLENBQUM7SUE5TUcsdUJBQU0sR0FBTjtRQUNJLGlDQUFlLENBQUMsRUFBRSxDQUFDLHFCQUFTLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDM0UsQ0FBQztJQUNELDBCQUFTLEdBQVQ7UUFDSSxpQ0FBZSxDQUFDLEdBQUcsQ0FBQyxxQkFBUyxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzVFLENBQUM7SUFFRCw4QkFBYSxHQUFiO1FBQ0ksSUFBSSxLQUFLLEdBQUcsaUNBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDO1FBQy9ELElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFD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QUMsSUFBSSxDQUFDOzZDQUNnQjtJQWpCakIsTUFBTTtRQUQxQixPQUFPO09BQ2EsTUFBTSxDQWlPMUI7SUFBRCxhQUFDO0NBak9ELEFBaU9DLENBak9tQyxFQUFFLENBQUMsU0FBUyxHQWlPL0M7a0JBak9vQixNQUFNIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBMaXN0ZW5lck1hbmFnZXIgfSBmcm9tIFwiLi4vLi4vLi4vLi4vZnJhbWUvc2NyaXB0cy9NYW5hZ2VyL0xpc3RlbmVyTWFuYWdlclwiO1xuaW1wb3J0IHsgU291bmRNYW5hZ2VyIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2ZyYW1lL3NjcmlwdHMvTWFuYWdlci9Tb3VuZE1hbmFnZXJcIjtcbmltcG9ydCB7IFN5bmNEYXRhTWFuYWdlciB9IGZyb20gXCIuLi8uLi8uLi8uLi9mcmFtZS9zY3JpcHRzL01hbmFnZXIvU3luY0RhdGFNYW5hZ2VyXCI7XG5pbXBvcnQgeyBFdmVudFR5cGUgfSBmcm9tIFwiLi4vLi4vRGF0YS9FdmVudFR5cGVcIjtcbmltcG9ydCB7IFNvdW5kQ29uZmlnIH0gZnJvbSBcIi4vU291bmRDb25maWdcIjtcbmltcG9ydCBUaHJlZU5vZGUgZnJvbSBcIi4vVGhyZWVETm9kZVwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVVJIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShUaHJlZU5vZGUpXG4gICAgcHJpdmF0ZSB0aHJlZUROb2RlOiBUaHJlZU5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHByaXZhdGUgYWRkTWludXM6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHByaXZhdGUgaW1nX2h1YW5nYmlhbjogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIHByaXZhdGUgbGJsX2NvdW50OiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcHJpdmF0ZSBzbGlkZXJSb3RhdGU6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHByaXZhdGUgc2xpZGVyTWVyZ2U6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBwcml2YXRlIGxibF9nb25nc2hpMTogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHByaXZhdGUgZ29uZ3NoaV8yOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgTGlzdGVuZXJNYW5hZ2VyLm9uKEV2ZW50VHlwZS5oZWJpbmd3YW5jaGVuZywgdGhpcy5zaG93R29uZ3NoaV8yLCB0aGlzKTtcbiAgICB9XG4gICAgb25EZXN0cm95KCkge1xuICAgICAgICBMaXN0ZW5lck1hbmFnZXIub2ZmKEV2ZW50VHlwZS5oZWJpbmd3YW5jaGVuZywgdGhpcy5zaG93R29uZ3NoaV8yLCB0aGlzKTtcbiAgICB9XG5cbiAgICBzaG93R29uZ3NoaV8yKCkge1xuICAgICAgICBsZXQgY291bnQgPSBTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5jb3VudDtcbiAgICAgICAgdGhpcy5sYmxfZ29uZ3NoaTEubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5nb25nc2hpXzIuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgbGV0IGdvbmdzaGkgPSBcIlwiO1xuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBjb3VudDsgaSsrKSB7XG4gICAgICAgICAgICBnb25nc2hpICs9IGkgKyBcIsKyXCI7XG4gICAgICAgICAgICBpZiAoaSAhPSBjb3VudCkge1xuICAgICAgICAgICAgICAgIGdvbmdzaGkgKz0gXCIgKyBcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBnb25nc2hpICs9IFwiID0gXCI7XG4gICAgICAgIHRoaXMuZ29uZ3NoaV8yLmdldENoaWxkQnlOYW1lKFwiZ29uZ3NoaV8xXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gZ29uZ3NoaTtcbiAgICAgICAgbGV0IHRvcCA9IHRoaXMuZ29uZ3NoaV8yLmdldENoaWxkQnlOYW1lKFwiZ29uZ3NoaV8yXCIpLmdldENoaWxkQnlOYW1lKFwidG9wXCIpO1xuICAgICAgICB0b3AuZ2V0Q2hpbGRCeU5hbWUoXCJmaXJzdFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGNvdW50ICsgXCJ4KFwiO1xuICAgICAgICB0b3AuZ2V0Q2hpbGRCeU5hbWUoXCJidG5fMVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGNvdW50ICsgXCIrMVwiO1xuICAgICAgICB0b3AuZ2V0Q2hpbGRCeU5hbWUoXCJidG5fMlwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGNvdW50ICsgXCJ4MisxXCI7XG4gICAgICAgIHRvcC5nZXRDaGlsZEJ5TmFtZShcImJ0bl8xXzFcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBjb3VudCArIDEgKyBcIlwiO1xuICAgICAgICB0b3AuZ2V0Q2hpbGRCeU5hbWUoXCJidG5fMl8yXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gY291bnQgKiAyICsgMSArIFwiXCI7XG4gICAgICAgIHRvcC5nZXRDaGlsZEJ5TmFtZShcImJ0bl8xXzFcIikuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRvcC5nZXRDaGlsZEJ5TmFtZShcImJ0bl8yXzJcIikuYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgb25jbGlja18xKCkge1xuICAgICAgICBsZXQgdG9wID0gdGhpcy5nb25nc2hpXzIuZ2V0Q2hpbGRCeU5hbWUoXCJnb25nc2hpXzJcIikuZ2V0Q2hpbGRCeU5hbWUoXCJ0b3BcIik7XG4gICAgICAgIHRvcC5nZXRDaGlsZEJ5TmFtZShcImJ0bl8xXzFcIikuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdG9wLmdldENoaWxkQnlOYW1lKFwiYnRuXzFcIikuYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgb25jbGlja18xXzEoKSB7XG4gICAgICAgIGxldCB0b3AgPSB0aGlzLmdvbmdzaGlfMi5nZXRDaGlsZEJ5TmFtZShcImdvbmdzaGlfMlwiKS5nZXRDaGlsZEJ5TmFtZShcInRvcFwiKTtcbiAgICAgICAgdG9wLmdldENoaWxkQnlOYW1lKFwiYnRuXzFfMVwiKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdG9wLmdldENoaWxkQnlOYW1lKFwiYnRuXzFcIikuYWN0aXZlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBvbmNsaWNrXzIoKSB7XG4gICAgICAgIGxldCB0b3AgPSB0aGlzLmdvbmdzaGlfMi5nZXRDaGlsZEJ5TmFtZShcImdvbmdzaGlfMlwiKS5nZXRDaGlsZEJ5TmFtZShcInRvcFwiKTtcbiAgICAgICAgdG9wLmdldENoaWxkQnlOYW1lKFwiYnRuXzJcIikuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRvcC5nZXRDaGlsZEJ5TmFtZShcImJ0bl8yXzJcIikuYWN0aXZlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBvbmNsaWNrXzJfMigpIHtcbiAgICAgICAgbGV0IHRvcCA9IHRoaXMuZ29uZ3NoaV8yLmdldENoaWxkQnlOYW1lKFwiZ29uZ3NoaV8yXCIpLmdldENoaWxkQnlOYW1lKFwidG9wXCIpO1xuICAgICAgICB0b3AuZ2V0Q2hpbGRCeU5hbWUoXCJidG5fMlwiKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0b3AuZ2V0Q2hpbGRCeU5hbWUoXCJidG5fMl8yXCIpLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cbiAgICBwdWJsaWMgaW5pdCgpIHtcbiAgICAgICAgdGhpcy51cGRhdGVCdG5TdGF0ZShTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5jdXJJbmRleCk7XG4gICAgICAgIGxldCBjb3VudCA9IFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmNvdW50O1xuICAgICAgICB0aGlzLmxibF9jb3VudC5zdHJpbmcgPSBjb3VudC50b1N0cmluZygpO1xuICAgICAgICBsZXQgZ29uZ3NoaSA9IFwiXCI7XG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IGNvdW50OyBpKyspIHtcbiAgICAgICAgICAgIGdvbmdzaGkgKz0gaSArIFwiwrJcIjtcbiAgICAgICAgICAgIGlmIChpICE9IGNvdW50KSB7XG4gICAgICAgICAgICAgICAgZ29uZ3NoaSArPSBcIiArIFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGdvbmdzaGkgKz0gXCIgPSA/XCI7XG4gICAgICAgIHRoaXMubGJsX2dvbmdzaGkxLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5nb25nc2hpXzIuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMubGJsX2dvbmdzaGkxLnN0cmluZyA9IGdvbmdzaGk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpbnB1dFR5cGU6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBvbkNsaWNrX2NvdW50KCkge1xuICAgICAgICB0aGlzLmFkZE1pbnVzLmFjdGl2ZSA9ICF0aGlzLmFkZE1pbnVzLmFjdGl2ZTtcbiAgICAgICAgdGhpcy5pbWdfaHVhbmdiaWFuLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmhhbmRsZUJ0blN0YXRlKFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmNvdW50KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uQ2xpY2tBZGQoKSB7XG4gICAgICAgIGlmIChTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5jb3VudCA8IDgpIHtcbiAgICAgICAgICAgIFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmNvdW50Kys7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZUJ0blN0YXRlKFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmNvdW50KTtcbiAgICAgICAgICAgIHRoaXMudGhyZWVETm9kZS5pbml0KCk7XG4gICAgICAgICAgICB0aGlzLmluaXQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgb25DbGlja01pbnVzKCkge1xuICAgICAgICBpZiAoU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuY291bnQgPiAyKSB7XG4gICAgICAgICAgICBTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5jb3VudC0tO1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVCdG5TdGF0ZShTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5jb3VudCk7XG4gICAgICAgICAgICB0aGlzLnRocmVlRE5vZGUuaW5pdCgpO1xuICAgICAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGhhbmRsZUJ0blN0YXRlKGNvdW50OiBudW1iZXIpIHtcbiAgICAgICAgaWYgKGNvdW50IDw9IDIpIHtcbiAgICAgICAgICAgIHRoaXMuYWRkTWludXMuZ2V0Q2hpbGRCeU5hbWUoXCJidG5NaW51c1NpemVcIikuZ2V0Q2hpbGRCeU5hbWUoXCJMYWJlbFwiKS5jb2xvciA9IG5ldyBjYy5Db2xvcigpLmZyb21IRVgoXCIjNzRCQkYyXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hZGRNaW51cy5nZXRDaGlsZEJ5TmFtZShcImJ0bk1pbnVzU2l6ZVwiKS5nZXRDaGlsZEJ5TmFtZShcIkxhYmVsXCIpLmNvbG9yID0gbmV3IGNjLkNvbG9yKCkuZnJvbUhFWChcIiMyMDk0RUVcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY291bnQgPj0gOCkge1xuICAgICAgICAgICAgdGhpcy5hZGRNaW51cy5nZXRDaGlsZEJ5TmFtZShcImJ0bkFkZFNpemVcIikuZ2V0Q2hpbGRCeU5hbWUoXCJMYWJlbFwiKS5jb2xvciA9IG5ldyBjYy5Db2xvcigpLmZyb21IRVgoXCIjNzRCQkYyXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hZGRNaW51cy5nZXRDaGlsZEJ5TmFtZShcImJ0bkFkZFNpemVcIikuZ2V0Q2hpbGRCeU5hbWUoXCJMYWJlbFwiKS5jb2xvciA9IG5ldyBjYy5Db2xvcigpLmZyb21IRVgoXCIjMjA5NEVFXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkNsaWNrQnRuQ29weSgpIHtcbiAgICAgICAgU291bmRNYW5hZ2VyLnN0b3BTb3VuZEJ5TmFtZShTb3VuZENvbmZpZy5zb3VkbGlzdFtcIueCueWHu+mfs+aViFwiXSk7XG4gICAgICAgIFNvdW5kTWFuYWdlci5wbGF5RWZmZWN0KFNvdW5kQ29uZmlnLnNvdWRsaXN0W1wi54K55Ye76Z+z5pWIXCJdLCBmYWxzZSwgZmFsc2UpO1xuICAgICAgICB0aGlzLmFkZE1pbnVzLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnRocmVlRE5vZGUuc2hvd1N0ZXAyKCk7XG4gICAgICAgIHRoaXMudXBkYXRlQnRuU3RhdGUoMSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkNsaWNrUm90YXRlKCkge1xuICAgICAgICBTb3VuZE1hbmFnZXIuc3RvcFNvdW5kQnlOYW1lKFNvdW5kQ29uZmlnLnNvdWRsaXN0W1wi54K55Ye76Z+z5pWIXCJdKTtcbiAgICAgICAgU291bmRNYW5hZ2VyLnBsYXlFZmZlY3QoU291bmRDb25maWcuc291ZGxpc3RbXCLngrnlh7vpn7PmlYhcIl0sIGZhbHNlLCBmYWxzZSk7XG4gICAgICAgIHRoaXMuYWRkTWludXMuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMudGhyZWVETm9kZS5yb3RhdGlvbigpO1xuICAgICAgICB0aGlzLnNsaWRlclJvdGF0ZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLnVwZGF0ZUJ0blN0YXRlKDIpO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25DbGlja01lcmdlKCkge1xuICAgICAgICBTb3VuZE1hbmFnZXIuc3RvcFNvdW5kQnlOYW1lKFNvdW5kQ29uZmlnLnNvdWRsaXN0W1wi54K55Ye76Z+z5pWIXCJdKTtcbiAgICAgICAgU291bmRNYW5hZ2VyLnBsYXlFZmZlY3QoU291bmRDb25maWcuc291ZGxpc3RbXCLngrnlh7vpn7PmlYhcIl0sIGZhbHNlLCBmYWxzZSk7XG4gICAgICAgIHRoaXMuYWRkTWludXMuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMudGhyZWVETm9kZS5tZXJnZSgpO1xuICAgICAgICB0aGlzLnNsaWRlck1lcmdlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMudXBkYXRlQnRuU3RhdGUoMyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvblNsaWRlUm90YXRlKGV2ZW50KSB7XG4gICAgICAgIGxldCBwcm9ncmVzcyA9IGV2ZW50LnByb2dyZXNzO1xuICAgICAgICB0aGlzLnRocmVlRE5vZGUuY29udHJvbFJvdGF0ZShwcm9ncmVzcyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvblNsaWRlTWVyZ2UoZXZlbnQpIHtcbiAgICAgICAgbGV0IHByb2dyZXNzID0gZXZlbnQucHJvZ3Jlc3M7XG4gICAgICAgIHRoaXMudGhyZWVETm9kZS5jb250cm9sTWVyZ2UocHJvZ3Jlc3MpO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25DbGlja1Nob3dadW9CaWFvKCkge1xuICAgICAgICB0aGlzLnVwZGF0ZUJ0blN0YXRlKDQpO1xuICAgICAgICB0aGlzLnRocmVlRE5vZGUucmVzZXQoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uQ2xpY2tCdG5CYWNrKCkge1xuICAgICAgICB0aGlzLmFkZE1pbnVzLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBpZiAoU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuY3VySW5kZXggPiAwKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmN1ckluZGV4KSB7XG4gICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRocmVlRE5vZGUuaW5pdCgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmluaXQoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRocmVlRE5vZGUuaW5pdCgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmluaXQoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aHJlZUROb2RlLnNob3dTdGVwMigpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGhyZWVETm9kZS5jb250cm9sTWVyZ2UoMCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2xpZGVyTWVyZ2UuZ2V0Q29tcG9uZW50KGNjLlNsaWRlcikucHJvZ3Jlc3MgPSAwO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGhyZWVETm9kZS5oaWRlWnVvYmlhbygpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICBcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuY3VySW5kZXgtLTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGhpcy51cGRhdGVCdG5TdGF0ZShTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5jdXJJbmRleCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVCdG5TdGF0ZShpbmRleDogbnVtYmVyID0gMCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcInVwZGF0ZUJ0blN0YXRlXCIsIGluZGV4KTtcbiAgICAgICAgU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuY3VySW5kZXggPSBpbmRleDtcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiYnRuQ29weVwiKS5nZXRDaGlsZEJ5TmFtZShcImRpc2FibGVcIikuYWN0aXZlID0gaW5kZXggPiAwO1xuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJidG5Sb3RhdGVcIikuZ2V0Q2hpbGRCeU5hbWUoXCJkaXNhYmxlXCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJ0bk1lcmdlXCIpLmdldENoaWxkQnlOYW1lKFwiZGlzYWJsZVwiKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJidG5adW9iaWFvXCIpLmdldENoaWxkQnlOYW1lKFwiZGlzYWJsZVwiKS5hY3RpdmUgPSB0cnVlO1xuXG4gICAgICAgIHN3aXRjaCAoaW5kZXgpIHtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJidG5Sb3RhdGVcIikuZ2V0Q2hpbGRCeU5hbWUoXCJkaXNhYmxlXCIpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJ0bk1lcmdlXCIpLmdldENoaWxkQnlOYW1lKFwiZGlzYWJsZVwiKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJidG5adW9iaWFvXCIpLmdldENoaWxkQnlOYW1lKFwiZGlzYWJsZVwiKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpbmRleCAhPSA0KSB7XG4gICAgICAgICAgICB0aGlzLnRocmVlRE5vZGUuaGlkZVp1b2JpYW8oKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJidG5CYWNrXCIpLmdldENoaWxkQnlOYW1lKFwiZGlzYWJsZVwiKS5hY3RpdmUgPSBpbmRleCA9PSAwO1xuICAgICAgICB0aGlzLnNsaWRlclJvdGF0ZS5hY3RpdmUgPSBpbmRleCA9PSAyO1xuICAgICAgICB0aGlzLnNsaWRlck1lcmdlLmFjdGl2ZSA9IGluZGV4ID09IDM7XG4gICAgfVxufVxuIl19