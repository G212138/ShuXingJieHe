
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
        top.getChildByName("btn_1").active = true;
        top.getChildByName("btn_2").active = true;
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
            SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curIndex = 0;
            this.threeDNode.init();
            this.threeDNode.hideZuobiao();
            this.init();
        }
    };
    GameUI.prototype.onClickMinus = function () {
        if (SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.count > 2) {
            SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.count--;
            this.handleBtnState(SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.count);
            SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curIndex = 0;
            this.threeDNode.init();
            this.threeDNode.hideZuobiao();
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
                    this.sliderRotate.getComponent(cc.Slider).progress = 0;
                    break;
                case 3:
                    this.init();
                    this.sliderRotate.getComponent(cc.Slider).progress = 1;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZVxcc2NyaXB0c1xcVUlcXEl0ZW1cXEdhbWVVSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxxRkFBb0Y7QUFDcEYsK0VBQThFO0FBQzlFLHFGQUFvRjtBQUNwRixrREFBaUQ7QUFDakQsNkNBQTRDO0FBQzVDLDJDQUFxQztBQUUvQixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFvQywwQkFBWTtJQUFoRDtRQUFBLHFFQTRPQztRQXpPVyxnQkFBVSxHQUFjLElBQUksQ0FBQztRQUU3QixjQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLG1CQUFhLEdBQVksSUFBSSxDQUFDO1FBRTlCLGVBQVMsR0FBYSxJQUFJLENBQUM7UUFFM0Isa0JBQVksR0FBWSxJQUFJLENBQUM7UUFFN0IsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFFNUIsa0JBQVksR0FBYSxJQUFJLENBQUM7UUFFOUIsZUFBUyxHQUFZLElBQUksQ0FBQztRQTBFMUIsZUFBUyxHQUFXLENBQUMsQ0FBQzs7SUFpSmxDLENBQUM7SUF6TkcsdUJBQU0sR0FBTjtRQUNJLGlDQUFlLENBQUMsRUFBRSxDQUFDLHFCQUFTLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDM0UsQ0FBQztJQUNELDBCQUFTLEdBQVQ7UUFDSSxpQ0FBZSxDQUFDLEdBQUcsQ0FBQyxxQkFBUyxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzVFLENBQUM7SUFFRCw4QkFBYSxHQUFiO1FBQ0ksSUFBSSxLQUFLLEdBQUcsaUNBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDO1FBQy9ELElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFD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LFNBQVMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLElBQUksQ0FBQyxDQUFDO1FBQ2xGLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLEtBQUssSUFBSSxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsS0FBSyxJQUFJLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBeE9EO1FBREMsUUFBUSxDQUFDLG9CQUFTLENBQUM7OENBQ2lCO0lBRXJDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NENBQ2U7SUFFakM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztpREFDb0I7SUFFdEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzs2Q0FDZ0I7SUFFbkM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDbUI7SUFFckM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsrQ0FDa0I7SUFFcEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztnREFDbUI7SUFFdEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs2Q0FDZ0I7SUFqQmpCLE1BQU07UUFEMUIsT0FBTztPQUNhLE1BQU0sQ0E0TzFCO0lBQUQsYUFBQztDQTVPRCxBQTRPQyxDQTVPbUMsRUFBRSxDQUFDLFNBQVMsR0E0Ty9DO2tCQTVPb0IsTUFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgTGlzdGVuZXJNYW5hZ2VyIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2ZyYW1lL3NjcmlwdHMvTWFuYWdlci9MaXN0ZW5lck1hbmFnZXJcIjtcbmltcG9ydCB7IFNvdW5kTWFuYWdlciB9IGZyb20gXCIuLi8uLi8uLi8uLi9mcmFtZS9zY3JpcHRzL01hbmFnZXIvU291bmRNYW5hZ2VyXCI7XG5pbXBvcnQgeyBTeW5jRGF0YU1hbmFnZXIgfSBmcm9tIFwiLi4vLi4vLi4vLi4vZnJhbWUvc2NyaXB0cy9NYW5hZ2VyL1N5bmNEYXRhTWFuYWdlclwiO1xuaW1wb3J0IHsgRXZlbnRUeXBlIH0gZnJvbSBcIi4uLy4uL0RhdGEvRXZlbnRUeXBlXCI7XG5pbXBvcnQgeyBTb3VuZENvbmZpZyB9IGZyb20gXCIuL1NvdW5kQ29uZmlnXCI7XG5pbXBvcnQgVGhyZWVOb2RlIGZyb20gXCIuL1RocmVlRE5vZGVcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVVSSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoVGhyZWVOb2RlKVxuICAgIHByaXZhdGUgdGhyZWVETm9kZTogVGhyZWVOb2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBwcml2YXRlIGFkZE1pbnVzOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBwcml2YXRlIGltZ19odWFuZ2JpYW46IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBwcml2YXRlIGxibF9jb3VudDogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHByaXZhdGUgc2xpZGVyUm90YXRlOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBwcml2YXRlIHNsaWRlck1lcmdlOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgcHJpdmF0ZSBsYmxfZ29uZ3NoaTE6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBwcml2YXRlIGdvbmdzaGlfMjogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIExpc3RlbmVyTWFuYWdlci5vbihFdmVudFR5cGUuaGViaW5nd2FuY2hlbmcsIHRoaXMuc2hvd0dvbmdzaGlfMiwgdGhpcyk7XG4gICAgfVxuICAgIG9uRGVzdHJveSgpIHtcbiAgICAgICAgTGlzdGVuZXJNYW5hZ2VyLm9mZihFdmVudFR5cGUuaGViaW5nd2FuY2hlbmcsIHRoaXMuc2hvd0dvbmdzaGlfMiwgdGhpcyk7XG4gICAgfVxuXG4gICAgc2hvd0dvbmdzaGlfMigpIHtcbiAgICAgICAgbGV0IGNvdW50ID0gU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuY291bnQ7XG4gICAgICAgIHRoaXMubGJsX2dvbmdzaGkxLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZ29uZ3NoaV8yLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIGxldCBnb25nc2hpID0gXCJcIjtcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gY291bnQ7IGkrKykge1xuICAgICAgICAgICAgZ29uZ3NoaSArPSBpICsgXCLCslwiO1xuICAgICAgICAgICAgaWYgKGkgIT0gY291bnQpIHtcbiAgICAgICAgICAgICAgICBnb25nc2hpICs9IFwiICsgXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZ29uZ3NoaSArPSBcIiA9IFwiO1xuICAgICAgICB0aGlzLmdvbmdzaGlfMi5nZXRDaGlsZEJ5TmFtZShcImdvbmdzaGlfMVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGdvbmdzaGk7XG4gICAgICAgIGxldCB0b3AgPSB0aGlzLmdvbmdzaGlfMi5nZXRDaGlsZEJ5TmFtZShcImdvbmdzaGlfMlwiKS5nZXRDaGlsZEJ5TmFtZShcInRvcFwiKTtcbiAgICAgICAgdG9wLmdldENoaWxkQnlOYW1lKFwiZmlyc3RcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBjb3VudCArIFwieChcIjtcbiAgICAgICAgdG9wLmdldENoaWxkQnlOYW1lKFwiYnRuXzFcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBjb3VudCArIFwiKzFcIjtcbiAgICAgICAgdG9wLmdldENoaWxkQnlOYW1lKFwiYnRuXzJcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBjb3VudCArIFwieDIrMVwiO1xuICAgICAgICB0b3AuZ2V0Q2hpbGRCeU5hbWUoXCJidG5fMV8xXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gY291bnQgKyAxICsgXCJcIjtcbiAgICAgICAgdG9wLmdldENoaWxkQnlOYW1lKFwiYnRuXzJfMlwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGNvdW50ICogMiArIDEgKyBcIlwiO1xuICAgICAgICB0b3AuZ2V0Q2hpbGRCeU5hbWUoXCJidG5fMV8xXCIpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0b3AuZ2V0Q2hpbGRCeU5hbWUoXCJidG5fMl8yXCIpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0b3AuZ2V0Q2hpbGRCeU5hbWUoXCJidG5fMVwiKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0b3AuZ2V0Q2hpbGRCeU5hbWUoXCJidG5fMlwiKS5hY3RpdmUgPSB0cnVlO1xuICAgIH1cblxuICAgIG9uY2xpY2tfMSgpIHtcbiAgICAgICAgbGV0IHRvcCA9IHRoaXMuZ29uZ3NoaV8yLmdldENoaWxkQnlOYW1lKFwiZ29uZ3NoaV8yXCIpLmdldENoaWxkQnlOYW1lKFwidG9wXCIpO1xuICAgICAgICB0b3AuZ2V0Q2hpbGRCeU5hbWUoXCJidG5fMV8xXCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRvcC5nZXRDaGlsZEJ5TmFtZShcImJ0bl8xXCIpLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIG9uY2xpY2tfMV8xKCkge1xuICAgICAgICBsZXQgdG9wID0gdGhpcy5nb25nc2hpXzIuZ2V0Q2hpbGRCeU5hbWUoXCJnb25nc2hpXzJcIikuZ2V0Q2hpbGRCeU5hbWUoXCJ0b3BcIik7XG4gICAgICAgIHRvcC5nZXRDaGlsZEJ5TmFtZShcImJ0bl8xXzFcIikuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRvcC5nZXRDaGlsZEJ5TmFtZShcImJ0bl8xXCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgfVxuXG4gICAgb25jbGlja18yKCkge1xuICAgICAgICBsZXQgdG9wID0gdGhpcy5nb25nc2hpXzIuZ2V0Q2hpbGRCeU5hbWUoXCJnb25nc2hpXzJcIikuZ2V0Q2hpbGRCeU5hbWUoXCJ0b3BcIik7XG4gICAgICAgIHRvcC5nZXRDaGlsZEJ5TmFtZShcImJ0bl8yXCIpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0b3AuZ2V0Q2hpbGRCeU5hbWUoXCJidG5fMl8yXCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgfVxuXG4gICAgb25jbGlja18yXzIoKSB7XG4gICAgICAgIGxldCB0b3AgPSB0aGlzLmdvbmdzaGlfMi5nZXRDaGlsZEJ5TmFtZShcImdvbmdzaGlfMlwiKS5nZXRDaGlsZEJ5TmFtZShcInRvcFwiKTtcbiAgICAgICAgdG9wLmdldENoaWxkQnlOYW1lKFwiYnRuXzJcIikuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdG9wLmdldENoaWxkQnlOYW1lKFwiYnRuXzJfMlwiKS5hY3RpdmUgPSBmYWxzZTtcbiAgICB9XG4gICAgcHVibGljIGluaXQoKSB7XG4gICAgICAgIHRoaXMudXBkYXRlQnRuU3RhdGUoU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuY3VySW5kZXgpO1xuICAgICAgICBsZXQgY291bnQgPSBTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5jb3VudDtcbiAgICAgICAgdGhpcy5sYmxfY291bnQuc3RyaW5nID0gY291bnQudG9TdHJpbmcoKTtcbiAgICAgICAgbGV0IGdvbmdzaGkgPSBcIlwiO1xuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBjb3VudDsgaSsrKSB7XG4gICAgICAgICAgICBnb25nc2hpICs9IGkgKyBcIsKyXCI7XG4gICAgICAgICAgICBpZiAoaSAhPSBjb3VudCkge1xuICAgICAgICAgICAgICAgIGdvbmdzaGkgKz0gXCIgKyBcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBnb25nc2hpICs9IFwiID0gP1wiO1xuICAgICAgICB0aGlzLmxibF9nb25nc2hpMS5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuZ29uZ3NoaV8yLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmxibF9nb25nc2hpMS5zdHJpbmcgPSBnb25nc2hpO1xuICAgIH1cblxuICAgIHByaXZhdGUgaW5wdXRUeXBlOiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgb25DbGlja19jb3VudCgpIHtcbiAgICAgICAgdGhpcy5hZGRNaW51cy5hY3RpdmUgPSAhdGhpcy5hZGRNaW51cy5hY3RpdmU7XG4gICAgICAgIHRoaXMuaW1nX2h1YW5nYmlhbi5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5oYW5kbGVCdG5TdGF0ZShTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5jb3VudCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkNsaWNrQWRkKCkge1xuICAgICAgICBpZiAoU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuY291bnQgPCA4KSB7XG4gICAgICAgICAgICBTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5jb3VudCsrO1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVCdG5TdGF0ZShTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5jb3VudCk7XG4gICAgICAgICAgICBTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5jdXJJbmRleCA9IDA7XG4gICAgICAgICAgICB0aGlzLnRocmVlRE5vZGUuaW5pdCgpO1xuICAgICAgICAgICAgdGhpcy50aHJlZUROb2RlLmhpZGVadW9iaWFvKCk7XG4gICAgICAgICAgICB0aGlzLmluaXQoKTtcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkNsaWNrTWludXMoKSB7XG4gICAgICAgIGlmIChTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5jb3VudCA+IDIpIHtcbiAgICAgICAgICAgIFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmNvdW50LS07XG4gICAgICAgICAgICB0aGlzLmhhbmRsZUJ0blN0YXRlKFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmNvdW50KTtcbiAgICAgICAgICAgIFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmN1ckluZGV4ID0gMDtcbiAgICAgICAgICAgIHRoaXMudGhyZWVETm9kZS5pbml0KCk7XG4gICAgICAgICAgICB0aGlzLnRocmVlRE5vZGUuaGlkZVp1b2JpYW8oKTtcbiAgICAgICAgICAgIHRoaXMuaW5pdCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBoYW5kbGVCdG5TdGF0ZShjb3VudDogbnVtYmVyKSB7XG4gICAgICAgIGlmIChjb3VudCA8PSAyKSB7XG4gICAgICAgICAgICB0aGlzLmFkZE1pbnVzLmdldENoaWxkQnlOYW1lKFwiYnRuTWludXNTaXplXCIpLmdldENoaWxkQnlOYW1lKFwiTGFiZWxcIikuY29sb3IgPSBuZXcgY2MuQ29sb3IoKS5mcm9tSEVYKFwiIzc0QkJGMlwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYWRkTWludXMuZ2V0Q2hpbGRCeU5hbWUoXCJidG5NaW51c1NpemVcIikuZ2V0Q2hpbGRCeU5hbWUoXCJMYWJlbFwiKS5jb2xvciA9IG5ldyBjYy5Db2xvcigpLmZyb21IRVgoXCIjMjA5NEVFXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvdW50ID49IDgpIHtcbiAgICAgICAgICAgIHRoaXMuYWRkTWludXMuZ2V0Q2hpbGRCeU5hbWUoXCJidG5BZGRTaXplXCIpLmdldENoaWxkQnlOYW1lKFwiTGFiZWxcIikuY29sb3IgPSBuZXcgY2MuQ29sb3IoKS5mcm9tSEVYKFwiIzc0QkJGMlwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYWRkTWludXMuZ2V0Q2hpbGRCeU5hbWUoXCJidG5BZGRTaXplXCIpLmdldENoaWxkQnlOYW1lKFwiTGFiZWxcIikuY29sb3IgPSBuZXcgY2MuQ29sb3IoKS5mcm9tSEVYKFwiIzIwOTRFRVwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgb25DbGlja0J0bkNvcHkoKSB7XG4gICAgICAgIFNvdW5kTWFuYWdlci5zdG9wU291bmRCeU5hbWUoU291bmRDb25maWcuc291ZGxpc3RbXCLngrnlh7vpn7PmlYhcIl0pO1xuICAgICAgICBTb3VuZE1hbmFnZXIucGxheUVmZmVjdChTb3VuZENvbmZpZy5zb3VkbGlzdFtcIueCueWHu+mfs+aViFwiXSwgZmFsc2UsIGZhbHNlKTtcbiAgICAgICAgdGhpcy5hZGRNaW51cy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy50aHJlZUROb2RlLnNob3dTdGVwMigpO1xuICAgICAgICB0aGlzLnVwZGF0ZUJ0blN0YXRlKDEpO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25DbGlja1JvdGF0ZSgpIHtcbiAgICAgICAgU291bmRNYW5hZ2VyLnN0b3BTb3VuZEJ5TmFtZShTb3VuZENvbmZpZy5zb3VkbGlzdFtcIueCueWHu+mfs+aViFwiXSk7XG4gICAgICAgIFNvdW5kTWFuYWdlci5wbGF5RWZmZWN0KFNvdW5kQ29uZmlnLnNvdWRsaXN0W1wi54K55Ye76Z+z5pWIXCJdLCBmYWxzZSwgZmFsc2UpO1xuICAgICAgICB0aGlzLmFkZE1pbnVzLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnRocmVlRE5vZGUucm90YXRpb24oKTtcbiAgICAgICAgdGhpcy5zbGlkZXJSb3RhdGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy51cGRhdGVCdG5TdGF0ZSgyKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uQ2xpY2tNZXJnZSgpIHtcbiAgICAgICAgU291bmRNYW5hZ2VyLnN0b3BTb3VuZEJ5TmFtZShTb3VuZENvbmZpZy5zb3VkbGlzdFtcIueCueWHu+mfs+aViFwiXSk7XG4gICAgICAgIFNvdW5kTWFuYWdlci5wbGF5RWZmZWN0KFNvdW5kQ29uZmlnLnNvdWRsaXN0W1wi54K55Ye76Z+z5pWIXCJdLCBmYWxzZSwgZmFsc2UpO1xuICAgICAgICB0aGlzLmFkZE1pbnVzLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnRocmVlRE5vZGUubWVyZ2UoKTtcbiAgICAgICAgdGhpcy5zbGlkZXJNZXJnZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLnVwZGF0ZUJ0blN0YXRlKDMpO1xuICAgIH1cblxuICAgIFxuICAgIHByaXZhdGUgb25TbGlkZVJvdGF0ZShldmVudCkge1xuICAgICAgICBsZXQgcHJvZ3Jlc3MgPSBldmVudC5wcm9ncmVzcztcbiAgICAgICAgdGhpcy50aHJlZUROb2RlLmNvbnRyb2xSb3RhdGUocHJvZ3Jlc3MpO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25TbGlkZU1lcmdlKGV2ZW50KSB7XG4gICAgICAgIGxldCBwcm9ncmVzcyA9IGV2ZW50LnByb2dyZXNzO1xuICAgICAgICB0aGlzLnRocmVlRE5vZGUuY29udHJvbE1lcmdlKHByb2dyZXNzKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uQ2xpY2tTaG93WnVvQmlhbygpIHtcbiAgICAgICAgdGhpcy51cGRhdGVCdG5TdGF0ZSg0KTtcbiAgICAgICAgdGhpcy50aHJlZUROb2RlLnJlc2V0KCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkNsaWNrQnRuQmFjaygpIHtcbiAgICAgICAgdGhpcy5hZGRNaW51cy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgaWYgKFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmN1ckluZGV4ID4gMCkge1xuICAgICAgICAgICAgc3dpdGNoIChTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5jdXJJbmRleCkge1xuICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aHJlZUROb2RlLmluaXQoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aHJlZUROb2RlLmluaXQoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGhyZWVETm9kZS5zaG93U3RlcDIoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zbGlkZXJSb3RhdGUuZ2V0Q29tcG9uZW50KGNjLlNsaWRlcikucHJvZ3Jlc3MgPSAwO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5pdCgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNsaWRlclJvdGF0ZS5nZXRDb21wb25lbnQoY2MuU2xpZGVyKS5wcm9ncmVzcyA9IDE7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGhyZWVETm9kZS5jb250cm9sTWVyZ2UoMCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2xpZGVyTWVyZ2UuZ2V0Q29tcG9uZW50KGNjLlNsaWRlcikucHJvZ3Jlc3MgPSAwO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGhyZWVETm9kZS5oaWRlWnVvYmlhbygpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICBcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuY3VySW5kZXgtLTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGhpcy51cGRhdGVCdG5TdGF0ZShTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5jdXJJbmRleCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVCdG5TdGF0ZShpbmRleDogbnVtYmVyID0gMCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcInVwZGF0ZUJ0blN0YXRlXCIsIGluZGV4KTtcbiAgICAgICAgU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuY3VySW5kZXggPSBpbmRleDtcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiYnRuQ29weVwiKS5nZXRDaGlsZEJ5TmFtZShcImRpc2FibGVcIikuYWN0aXZlID0gaW5kZXggPiAwO1xuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJidG5Sb3RhdGVcIikuZ2V0Q2hpbGRCeU5hbWUoXCJkaXNhYmxlXCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJ0bk1lcmdlXCIpLmdldENoaWxkQnlOYW1lKFwiZGlzYWJsZVwiKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJidG5adW9iaWFvXCIpLmdldENoaWxkQnlOYW1lKFwiZGlzYWJsZVwiKS5hY3RpdmUgPSB0cnVlO1xuXG4gICAgICAgIHN3aXRjaCAoaW5kZXgpIHtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJidG5Sb3RhdGVcIikuZ2V0Q2hpbGRCeU5hbWUoXCJkaXNhYmxlXCIpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJ0bk1lcmdlXCIpLmdldENoaWxkQnlOYW1lKFwiZGlzYWJsZVwiKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJidG5adW9iaWFvXCIpLmdldENoaWxkQnlOYW1lKFwiZGlzYWJsZVwiKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpbmRleCAhPSA0KSB7XG4gICAgICAgICAgICB0aGlzLnRocmVlRE5vZGUuaGlkZVp1b2JpYW8oKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJidG5CYWNrXCIpLmdldENoaWxkQnlOYW1lKFwiZGlzYWJsZVwiKS5hY3RpdmUgPSBpbmRleCA9PSAwO1xuICAgICAgICB0aGlzLnNsaWRlclJvdGF0ZS5hY3RpdmUgPSBpbmRleCA9PSAyO1xuICAgICAgICB0aGlzLnNsaWRlck1lcmdlLmFjdGl2ZSA9IGluZGV4ID09IDM7XG4gICAgfVxufVxuIl19