
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game/scripts/Components/ButtonSync.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '98a0fVwvJlC27C+XRVM1mZS', 'ButtonSync');
// game/scripts/Components/ButtonSync.ts

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
var T2M_1 = require("../../../frame/scripts/SDK/T2M");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ButtonSync = /** @class */ (function (_super) {
    __extends(ButtonSync, _super);
    function ButtonSync() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.touchStartEvents = [];
        _this.touchEndEvents = [];
        _this.isNeedScale = true;
        return _this;
    }
    ButtonSync_1 = ButtonSync;
    ButtonSync.prototype.onLoad = function () {
        this.node.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEnd, this);
        this.tagId = this.node.name + this.node.parent.name + this.node.getSiblingIndex();
        this.addEventByT2M();
    };
    ButtonSync.prototype.addTouchEvent = function (target, component, handlers) {
        this.touchStartEvents.push(new ButtonSync_1.EventHandler());
        this.touchStartEvents[0].target = target;
        this.touchStartEvents[0].component = component;
        this.touchStartEvents[0].handler = handlers[0];
        this.touchEndEvents.push(new ButtonSync_1.EventHandler());
        this.touchEndEvents[0].target = target;
        this.touchEndEvents[0].component = component;
        this.touchEndEvents[0].handler = handlers[1];
    };
    ButtonSync.prototype.touchStart = function (event) {
        var type = 'touchStart' + this.tagId;
        T2M_1.T2M.dispatch(type, null);
    };
    ButtonSync.prototype.touchEnd = function (event) {
        var type = 'touchEnd' + this.tagId;
        T2M_1.T2M.dispatch(type, null);
    };
    ButtonSync.prototype.addEventByT2M = function () {
        T2M_1.T2M.addSyncEventListener('touchStart' + this.tagId, this.touchStartHandler.bind(this));
        T2M_1.T2M.addSyncEventListener('touchEnd' + this.tagId, this.touchEndHandler.bind(this));
    };
    ButtonSync.prototype.touchStartHandler = function (data) {
        if (this.isNeedScale) {
            this.node.scale = 1.1;
        }
        for (var _i = 0, _a = this.touchStartEvents; _i < _a.length; _i++) {
            var eventHandler = _a[_i];
            eventHandler.emit([{ target: this.node }]);
        }
    };
    ButtonSync.prototype.touchEndHandler = function (data) {
        if (this.isNeedScale) {
            this.node.scale = 1;
        }
        for (var _i = 0, _a = this.touchEndEvents; _i < _a.length; _i++) {
            var eventHandler = _a[_i];
            eventHandler.emit([{ target: this.node }]);
        }
    };
    var ButtonSync_1;
    __decorate([
        property({ type: [cc.Component.EventHandler] })
    ], ButtonSync.prototype, "touchStartEvents", void 0);
    __decorate([
        property({ type: [cc.Component.EventHandler] })
    ], ButtonSync.prototype, "touchEndEvents", void 0);
    __decorate([
        property(cc.Boolean)
    ], ButtonSync.prototype, "isNeedScale", void 0);
    ButtonSync = ButtonSync_1 = __decorate([
        ccclass
    ], ButtonSync);
    return ButtonSync;
}(cc.Component));
exports.default = ButtonSync;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZVxcc2NyaXB0c1xcQ29tcG9uZW50c1xcQnV0dG9uU3luYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxzREFBcUQ7QUFFL0MsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBd0MsOEJBQVk7SUFBcEQ7UUFBQSxxRUE4REM7UUE1RFcsc0JBQWdCLEdBQWdDLEVBQUUsQ0FBQztRQUVuRCxvQkFBYyxHQUFnQyxFQUFFLENBQUM7UUFFakQsaUJBQVcsR0FBWSxJQUFJLENBQUM7O0lBd0R4QyxDQUFDO21CQTlEb0IsVUFBVTtJQVUzQiwyQkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbkUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDL0QsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbEUsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUNsRixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVNLGtDQUFhLEdBQXBC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RSxDQUFDO3dEQUNXO0lBRTNEO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDO3NEQUNTO0lBRXpEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7bURBQ2U7SUFObkIsVUFBVTtRQUQ5QixPQUFPO09BQ2EsVUFBVSxDQThEOUI7SUFBRCxpQkFBQztDQTlERCxBQThEQyxDQTlEdUMsRUFBRSxDQUFDLFNBQVMsR0E4RG5EO2tCQTlEb0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgVDJNIH0gZnJvbSAnLi4vLi4vLi4vZnJhbWUvc2NyaXB0cy9TREsvVDJNJztcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1dHRvblN5bmMgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFtjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyXSB9KVxuICAgIHByaXZhdGUgdG91Y2hTdGFydEV2ZW50czogY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcltdID0gW107XG4gICAgQHByb3BlcnR5KHsgdHlwZTogW2NjLkNvbXBvbmVudC5FdmVudEhhbmRsZXJdIH0pXG4gICAgcHJpdmF0ZSB0b3VjaEVuZEV2ZW50czogY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcltdID0gW107XG4gICAgQHByb3BlcnR5KGNjLkJvb2xlYW4pXG4gICAgcHJpdmF0ZSBpc05lZWRTY2FsZTogYm9vbGVhbiA9IHRydWU7XG5cbiAgICBwcml2YXRlIHRhZ0lkOiBzdHJpbmc7XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy50b3VjaFN0YXJ0LCB0aGlzKTtcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy50b3VjaEVuZCwgdGhpcyk7XG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsIHRoaXMudG91Y2hFbmQsIHRoaXMpO1xuICAgICAgICB0aGlzLnRhZ0lkID0gdGhpcy5ub2RlLm5hbWUgKyB0aGlzLm5vZGUucGFyZW50Lm5hbWUgKyB0aGlzLm5vZGUuZ2V0U2libGluZ0luZGV4KCk7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRCeVQyTSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhZGRUb3VjaEV2ZW50KHRhcmdldDogY2MuTm9kZSwgY29tcG9uZW50OiBzdHJpbmcsIGhhbmRsZXJzOiBzdHJpbmdbXSkge1xuICAgICAgICB0aGlzLnRvdWNoU3RhcnRFdmVudHMucHVzaChuZXcgQnV0dG9uU3luYy5FdmVudEhhbmRsZXIoKSk7XG4gICAgICAgIHRoaXMudG91Y2hTdGFydEV2ZW50c1swXS50YXJnZXQgPSB0YXJnZXQ7XG4gICAgICAgIHRoaXMudG91Y2hTdGFydEV2ZW50c1swXS5jb21wb25lbnQgPSBjb21wb25lbnQ7XG4gICAgICAgIHRoaXMudG91Y2hTdGFydEV2ZW50c1swXS5oYW5kbGVyID0gaGFuZGxlcnNbMF07XG5cbiAgICAgICAgdGhpcy50b3VjaEVuZEV2ZW50cy5wdXNoKG5ldyBCdXR0b25TeW5jLkV2ZW50SGFuZGxlcigpKTtcbiAgICAgICAgdGhpcy50b3VjaEVuZEV2ZW50c1swXS50YXJnZXQgPSB0YXJnZXQ7XG4gICAgICAgIHRoaXMudG91Y2hFbmRFdmVudHNbMF0uY29tcG9uZW50ID0gY29tcG9uZW50O1xuICAgICAgICB0aGlzLnRvdWNoRW5kRXZlbnRzWzBdLmhhbmRsZXIgPSBoYW5kbGVyc1sxXTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHRvdWNoU3RhcnQoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpIHtcbiAgICAgICAgbGV0IHR5cGUgPSAndG91Y2hTdGFydCcgKyB0aGlzLnRhZ0lkO1xuICAgICAgICBUMk0uZGlzcGF0Y2godHlwZSwgbnVsbCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB0b3VjaEVuZChldmVudDogY2MuRXZlbnQuRXZlbnRUb3VjaCkge1xuICAgICAgICBsZXQgdHlwZSA9ICd0b3VjaEVuZCcgKyB0aGlzLnRhZ0lkO1xuICAgICAgICBUMk0uZGlzcGF0Y2godHlwZSwgbnVsbCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhZGRFdmVudEJ5VDJNKCkge1xuICAgICAgICBUMk0uYWRkU3luY0V2ZW50TGlzdGVuZXIoJ3RvdWNoU3RhcnQnICsgdGhpcy50YWdJZCwgdGhpcy50b3VjaFN0YXJ0SGFuZGxlci5iaW5kKHRoaXMpKTtcbiAgICAgICAgVDJNLmFkZFN5bmNFdmVudExpc3RlbmVyKCd0b3VjaEVuZCcgKyB0aGlzLnRhZ0lkLCB0aGlzLnRvdWNoRW5kSGFuZGxlci5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHRvdWNoU3RhcnRIYW5kbGVyKGRhdGEpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNOZWVkU2NhbGUpIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5zY2FsZSA9IDEuMTtcbiAgICAgICAgfSAgICAgICAgXG4gICAgICAgIGZvciAobGV0IGV2ZW50SGFuZGxlciBvZiB0aGlzLnRvdWNoU3RhcnRFdmVudHMpIHtcbiAgICAgICAgICAgIGV2ZW50SGFuZGxlci5lbWl0KFt7IHRhcmdldDogdGhpcy5ub2RlIH1dKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgdG91Y2hFbmRIYW5kbGVyKGRhdGEpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNOZWVkU2NhbGUpIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5zY2FsZSA9IDE7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgZXZlbnRIYW5kbGVyIG9mIHRoaXMudG91Y2hFbmRFdmVudHMpIHtcbiAgICAgICAgICAgIGV2ZW50SGFuZGxlci5lbWl0KFt7IHRhcmdldDogdGhpcy5ub2RlIH1dKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==