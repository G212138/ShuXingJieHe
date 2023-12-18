"use strict";
cc._RF.push(module, '09aacfWZ5hJP7hYyEdzFTNe', 'QiepianPanel');
// game/scripts/UI/Item/QiepianPanel.ts

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
var SyncDataManager_1 = require("../../../../frame/scripts/Manager/SyncDataManager");
var Block_1 = require("./Block");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var QiepianPanel = /** @class */ (function (_super) {
    __extends(QiepianPanel, _super);
    function QiepianPanel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.block_prefab = null;
        _this.blockPanel = null;
        _this._yIndex = 0;
        return _this;
    }
    QiepianPanel.prototype.init = function (cengIndenx) {
        this.label.string = "层" + (cengIndenx + 1);
        this._yIndex = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.yCount - cengIndenx - 1;
        this.initBlock();
    };
    QiepianPanel.prototype.initBlock = function () {
        this.blockPanel.removeAllChildren();
        this.blockPanel.destroyAllChildren();
        var xCount = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.xCount;
        var zCount = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.zCount;
        var maxWidth = 6 * 40 + (6 - 1) * 2;
        var blockPanelWidth = xCount * 40 + (xCount - 1) * 2;
        this.blockPanel.width = blockPanelWidth;
        for (var i = 0; i < xCount; i++) {
            for (var j = 0; j < zCount; j++) {
                var block = cc.instantiate(this.block_prefab);
                block.name = xCount - 1 - i + "_" + j + "_" + this._yIndex;
                block.parent = this.blockPanel;
                block.getComponent(Block_1.default).init(xCount - 1 - i, j, this._yIndex);
            }
        }
        this.blockPanel.getComponent(cc.Layout).updateLayout();
        var scale = 1;
        if (this.blockPanel.width > this.blockPanel.height) {
            scale = maxWidth / this.blockPanel.width;
        }
        else {
            scale = maxWidth / this.blockPanel.height;
        }
        console.log("scale", scale);
        this.blockPanel.scale = scale;
    };
    QiepianPanel.prototype.onHandleClickCube = function (data) {
        // for(let i = 0; i < this.blockPanel.childrenCount; i++) {
        //     this.blockPanel.children[i].getComponent(Block).onHandleClickCube(data);
        // }
    };
    QiepianPanel.prototype.resetBlock = function () {
        for (var i = 0; i < this.blockPanel.childrenCount; i++) {
            this.blockPanel.children[i].getComponent(Block_1.default).reset();
        }
    };
    __decorate([
        property(cc.Label)
    ], QiepianPanel.prototype, "label", void 0);
    __decorate([
        property(cc.Prefab)
    ], QiepianPanel.prototype, "block_prefab", void 0);
    __decorate([
        property(cc.Node)
    ], QiepianPanel.prototype, "blockPanel", void 0);
    QiepianPanel = __decorate([
        ccclass
    ], QiepianPanel);
    return QiepianPanel;
}(cc.Component));
exports.default = QiepianPanel;

cc._RF.pop();