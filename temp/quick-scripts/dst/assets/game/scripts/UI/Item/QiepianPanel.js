
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game/scripts/UI/Item/QiepianPanel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZVxcc2NyaXB0c1xcVUlcXEl0ZW1cXFFpZXBpYW5QYW5lbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxRkFBb0Y7QUFDcEYsaUNBQTRCO0FBRXRCLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQTBDLGdDQUFZO0lBQXREO1FBQUEscUVBeURDO1FBdERXLFdBQUssR0FBYSxJQUFJLENBQUM7UUFFdkIsa0JBQVksR0FBYyxJQUFJLENBQUM7UUFFL0IsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFFM0IsYUFBTyxHQUFXLENBQUMsQ0FBQzs7SUFnRGhDLENBQUM7SUE5Q1UsMkJBQUksR0FBWCxVQUFZLFVBQWtCO1FBQzFCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEdBQUcsR0FBRyxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsT0FBTyxHQUFHLGlDQUFlLENBQUMsV0FBVyxFQUFFLENBQUMsY0FBYyxDQUFDLE1BQU0sR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRU8sZ0NBQVMsR0FBakI7UUFDSSxJQUFJLENBQUMsVUFBVSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDcEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQ3JDLElBQUksTUFBTSxHQUFHLGlDQUFlLENBQUMsV0FBVyxFQUFFLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQztRQUNqRSxJQUFJLE1BQU0sR0FBRyxpQ0FBZSxDQUFDLFdBQVcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUM7UUFDakUsSUFBSSxRQUFRLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDcEMsSUFBSSxlQUFlLEdBQUcsTUFBTSxHQUFHLEVBQUUsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEdBQUcsZUFBZSxDQUFDO1FBRXhDLEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDNUIsS0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDNUIsSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQzlDLEtBQUssQ0FBQyxJQUFJLEdBQUcsTUFBTSxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDM0QsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO2dCQUMvQixLQUFLLENBQUMsWUFBWSxDQUFDLGVBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ25FO1NBQ0o7UUFFRCxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDdkQsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRTtZQUNoRCxLQUFLLEdBQUcsUUFBUSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDO1NBQzVDO2FBQU07WUFDSCxLQUFLLEdBQUcsUUFBUSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDO1NBQzdDO1FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ2xDLENBQUM7SUFFTSx3Q0FBaUIsR0FBeEIsVUFBeUIsSUFBc0Q7UUFDM0UsMkRBQTJEO1FBQzNELCtFQUErRTtRQUMvRSxJQUFJO0lBQ1IsQ0FBQztJQUVNLGlDQUFVLEdBQWpCO1FBQ0ksS0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ25ELElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxlQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUMzRDtJQUNMLENBQUM7SUFyREQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzsrQ0FDWTtJQUUvQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3NEQUNtQjtJQUV2QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO29EQUNpQjtJQVBsQixZQUFZO1FBRGhDLE9BQU87T0FDYSxZQUFZLENBeURoQztJQUFELG1CQUFDO0NBekRELEFBeURDLENBekR5QyxFQUFFLENBQUMsU0FBUyxHQXlEckQ7a0JBekRvQixZQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3luY0RhdGFNYW5hZ2VyIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2ZyYW1lL3NjcmlwdHMvTWFuYWdlci9TeW5jRGF0YU1hbmFnZXJcIjtcbmltcG9ydCBCbG9jayBmcm9tIFwiLi9CbG9ja1wiO1xuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFFpZXBpYW5QYW5lbCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgcHJpdmF0ZSBsYWJlbDogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgcHJpdmF0ZSBibG9ja19wcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcHJpdmF0ZSBibG9ja1BhbmVsOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIHByaXZhdGUgX3lJbmRleDogbnVtYmVyID0gMDtcbiAgICBcbiAgICBwdWJsaWMgaW5pdChjZW5nSW5kZW54OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5sYWJlbC5zdHJpbmcgPSBcIuWxglwiICsgKGNlbmdJbmRlbnggKyAxKTsgICBcbiAgICAgICAgdGhpcy5feUluZGV4ID0gU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEueUNvdW50IC0gY2VuZ0luZGVueCAtIDE7ICAgICBcbiAgICAgICAgdGhpcy5pbml0QmxvY2soKTsgICAgICAgIFxuICAgIH1cblxuICAgIHByaXZhdGUgaW5pdEJsb2NrKCkge1xuICAgICAgICB0aGlzLmJsb2NrUGFuZWwucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcbiAgICAgICAgdGhpcy5ibG9ja1BhbmVsLmRlc3Ryb3lBbGxDaGlsZHJlbigpO1xuICAgICAgICBsZXQgeENvdW50ID0gU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEueENvdW50O1xuICAgICAgICBsZXQgekNvdW50ID0gU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuekNvdW50O1xuICAgICAgICBsZXQgbWF4V2lkdGggPSA2ICogNDAgKyAoNiAtIDEpICogMjsgICAgICAgIFxuICAgICAgICBsZXQgYmxvY2tQYW5lbFdpZHRoID0geENvdW50ICogNDAgKyAoeENvdW50IC0gMSkgKiAyO1xuICAgICAgICB0aGlzLmJsb2NrUGFuZWwud2lkdGggPSBibG9ja1BhbmVsV2lkdGg7XG4gICAgICAgIFxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgeENvdW50OyBpKyspIHtcbiAgICAgICAgICAgIGZvcihsZXQgaiA9IDA7IGogPCB6Q291bnQ7IGorKykge1xuICAgICAgICAgICAgICAgIGxldCBibG9jayA9IGNjLmluc3RhbnRpYXRlKHRoaXMuYmxvY2tfcHJlZmFiKTtcbiAgICAgICAgICAgICAgICBibG9jay5uYW1lID0geENvdW50IC0gMSAtIGkgKyBcIl9cIiArIGogKyBcIl9cIiArIHRoaXMuX3lJbmRleDtcbiAgICAgICAgICAgICAgICBibG9jay5wYXJlbnQgPSB0aGlzLmJsb2NrUGFuZWw7XG4gICAgICAgICAgICAgICAgYmxvY2suZ2V0Q29tcG9uZW50KEJsb2NrKS5pbml0KHhDb3VudCAtIDEgLSBpLCBqLCB0aGlzLl95SW5kZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0aGlzLmJsb2NrUGFuZWwuZ2V0Q29tcG9uZW50KGNjLkxheW91dCkudXBkYXRlTGF5b3V0KCk7XG4gICAgICAgIGxldCBzY2FsZSA9IDE7XG4gICAgICAgIGlmICh0aGlzLmJsb2NrUGFuZWwud2lkdGggPiB0aGlzLmJsb2NrUGFuZWwuaGVpZ2h0KSB7XG4gICAgICAgICAgICBzY2FsZSA9IG1heFdpZHRoIC8gdGhpcy5ibG9ja1BhbmVsLndpZHRoO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2NhbGUgPSBtYXhXaWR0aCAvIHRoaXMuYmxvY2tQYW5lbC5oZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coXCJzY2FsZVwiLCBzY2FsZSk7XG4gICAgICAgIHRoaXMuYmxvY2tQYW5lbC5zY2FsZSA9IHNjYWxlO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbkhhbmRsZUNsaWNrQ3ViZShkYXRhOiB7eEluZGV4OiBudW1iZXIsIHlJbmRleDogbnVtYmVyLCB6SW5kZXg6IG51bWJlcn0pIHtcbiAgICAgICAgLy8gZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuYmxvY2tQYW5lbC5jaGlsZHJlbkNvdW50OyBpKyspIHtcbiAgICAgICAgLy8gICAgIHRoaXMuYmxvY2tQYW5lbC5jaGlsZHJlbltpXS5nZXRDb21wb25lbnQoQmxvY2spLm9uSGFuZGxlQ2xpY2tDdWJlKGRhdGEpO1xuICAgICAgICAvLyB9XG4gICAgfVxuXG4gICAgcHVibGljIHJlc2V0QmxvY2soKSB7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLmJsb2NrUGFuZWwuY2hpbGRyZW5Db3VudDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmJsb2NrUGFuZWwuY2hpbGRyZW5baV0uZ2V0Q29tcG9uZW50KEJsb2NrKS5yZXNldCgpO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19