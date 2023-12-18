"use strict";
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