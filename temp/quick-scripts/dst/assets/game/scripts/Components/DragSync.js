
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game/scripts/Components/DragSync.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0ccc7AgbEVFBIAWgd69Ebr0', 'DragSync');
// game/scripts/Components/DragSync.ts

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
var DragSync = /** @class */ (function (_super) {
    __extends(DragSync, _super);
    function DragSync() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rootNode = null;
        _this.touchStartEvents = [];
        _this.touchMovingEvents = [];
        _this.touchEndEvents = [];
        _this.isEnable = true;
        _this.isTouching = false;
        _this.isTouch = false;
        //根据触摸时间判断是否为点击事件
        _this.isClickEvent = false;
        _this.touchStartData = null;
        //触摸开始位置
        _this.touchStartPos = null;
        return _this;
    }
    DragSync_1 = DragSync;
    DragSync.prototype.onLoad = function () {
        this.rootNode = cc.find('Canvas/GamePanel');
        var index = this.node.getSiblingIndex();
        this.node.attr({
            id: index,
            initParent: this.node.parent,
            initPos: { x: this.node.x, y: this.node.y },
            initSiblingIndex: index,
        });
        this.node.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEnd, this);
        this.tagId = this.node.name + this.node.parent.name + this.node.getSiblingIndex();
        this.addEventByT2M();
    };
    DragSync.prototype.setEnable = function (isEnable) {
        this.isEnable = isEnable;
    };
    DragSync.prototype.addTouchEvent = function (target, component, handlers) {
        this.touchStartEvents.push(new DragSync_1.EventHandler());
        this.touchStartEvents[0].target = target;
        this.touchStartEvents[0].component = component;
        this.touchStartEvents[0].handler = handlers[0];
        this.touchMovingEvents.push(new DragSync_1.EventHandler());
        this.touchMovingEvents[0].target = target;
        this.touchMovingEvents[0].component = component;
        this.touchMovingEvents[0].handler = handlers[1];
        this.touchEndEvents.push(new DragSync_1.EventHandler());
        this.touchEndEvents[0].target = target;
        this.touchEndEvents[0].component = component;
        this.touchEndEvents[0].handler = handlers[2];
    };
    DragSync.prototype.touchStart = function (event) {
        if (!this.isEnable)
            return;
        this.isTouching = true;
        this.isTouch = true;
        var pos = this.rootNode.convertToNodeSpaceAR(event.getLocation());
        var prevLocation = this.rootNode.convertToNodeSpaceAR(event.getPreviousLocation());
        var type = 'touchStart' + this.tagId;
        var data = { pos: { x: pos.x, y: pos.y }, prevLocation: { x: prevLocation.x, y: prevLocation.y } };
        T2M_1.T2M.dispatch(type, data);
    };
    DragSync.prototype.touchMove = function (event) {
        if (!this.isEnable || !this.isTouching)
            return;
        var pos = this.rootNode.convertToNodeSpaceAR(event.getLocation());
        var prevLocation = this.rootNode.convertToNodeSpaceAR(event.getPreviousLocation());
        var delta = this.rootNode.convertToNodeSpaceAR(event.getDelta());
        var type = 'touchMove' + this.tagId;
        var data = { pos: { x: pos.x, y: pos.y }, prevLocation: { x: prevLocation.x, y: prevLocation.y }, delta: { x: delta.x, y: delta.y } };
        T2M_1.T2M.dispatch(type, data, true);
    };
    DragSync.prototype.touchEnd = function (event) {
        this.isTouching = false;
        if (!this.isEnable || !this.isTouch)
            return;
        this.isTouch = false;
        var pos = this.rootNode.convertToNodeSpaceAR(event.getLocation());
        var prevLocation = this.rootNode.convertToNodeSpaceAR(event.getPreviousLocation());
        var type = 'touchEnd' + this.tagId;
        var data = { pos: { x: pos.x, y: pos.y }, prevLocation: { x: prevLocation.x, y: prevLocation.y } };
        T2M_1.T2M.dispatch(type, data);
    };
    DragSync.prototype.addEventByT2M = function () {
        T2M_1.T2M.addSyncEventListener('touchStart' + this.tagId, this.touchStartHandler.bind(this));
        T2M_1.T2M.addSyncEventListener('touchMove' + this.tagId, this.touchMoveHandler.bind(this));
        T2M_1.T2M.addSyncEventListener('touchEnd' + this.tagId, this.touchEndHandler.bind(this));
    };
    DragSync.prototype.touchStartHandler = function (data) {
        if (!this.isEnable)
            return;
        this.touchStartPos = cc.v2(data.pos.x, data.pos.y);
        this.isClickEvent = true;
        this.touchStartData = data;
    };
    DragSync.prototype.handleTouchStart = function (data) {
        this.node.parent = this.rootNode;
        this.node.position = cc.v3(this.touchStartData.pos.x, this.touchStartData.pos.y);
        for (var _i = 0, _a = this.touchStartEvents; _i < _a.length; _i++) {
            var eventHandler = _a[_i];
            eventHandler.emit([{ pos: this.touchStartData.pos, target: this.node, prevLocation: this.touchStartData.prevLocation }]);
        }
    };
    DragSync.prototype.touchMoveHandler = function (data) {
        //判断当前位置与触摸开始位置的距离，如果超过一定距离，则不再判断为点击事件
        if (this.isClickEvent && this.touchStartPos) {
            var distance = this.touchStartPos.sub(cc.v2(data.pos.x, data.pos.y)).mag();
            if (distance > 10) {
                this.isClickEvent = false;
                this.handleTouchStart(this.touchStartData);
                this.touchStartData = null;
            }
        }
        else {
            this.node.position = cc.v3(data.pos.x, data.pos.y);
            for (var _i = 0, _a = this.touchMovingEvents; _i < _a.length; _i++) {
                var eventHandler = _a[_i];
                eventHandler.emit([{ pos: data.pos, target: this.node, prevLocation: data.prevLocation, delta: data.delta }]);
            }
        }
    };
    DragSync.prototype.touchEndHandler = function (data) {
        if (this.isClickEvent && this.touchStartPos) {
            var distance = this.touchStartPos.sub(cc.v2(data.pos.x, data.pos.y)).mag();
            if (distance <= 10) {
                this.isClickEvent = true;
            }
        }
        else {
            this.node.position = cc.v3(data.pos.x, data.pos.y);
        }
        for (var _i = 0, _a = this.touchEndEvents; _i < _a.length; _i++) {
            var eventHandler = _a[_i];
            eventHandler.emit([{ pos: data.pos, target: this.node, isClick: this.isClickEvent, prevLocation: data.prevLocation }]);
        }
    };
    var DragSync_1;
    __decorate([
        property(cc.Node)
    ], DragSync.prototype, "rootNode", void 0);
    __decorate([
        property({ type: [cc.Component.EventHandler] })
    ], DragSync.prototype, "touchStartEvents", void 0);
    __decorate([
        property({ type: [cc.Component.EventHandler] })
    ], DragSync.prototype, "touchMovingEvents", void 0);
    __decorate([
        property({ type: [cc.Component.EventHandler] })
    ], DragSync.prototype, "touchEndEvents", void 0);
    DragSync = DragSync_1 = __decorate([
        ccclass
    ], DragSync);
    return DragSync;
}(cc.Component));
exports.default = DragSync;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZVxcc2NyaXB0c1xcQ29tcG9uZW50c1xcRHJhZ1N5bmMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0RBQXFEO0FBRS9DLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBZ0pDO1FBOUlXLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsc0JBQWdCLEdBQWdDLEVBQUUsQ0FBQztRQUVuRCx1QkFBaUIsR0FBZ0MsRUFBRSxDQUFDO1FBRXBELG9CQUFjLEdBQWdDLEVBQUUsQ0FBQztRQUdqRCxjQUFRLEdBQVksSUFBSSxDQUFDO1FBQ3pCLGdCQUFVLEdBQVksS0FBSyxDQUFDO1FBQzVCLGFBQU8sR0FBWSxLQUFLLENBQUM7UUE4RWpDLGlCQUFpQjtRQUNULGtCQUFZLEdBQVksS0FBSyxDQUFDO1FBQzlCLG9CQUFjLEdBQVEsSUFBSSxDQUFDO1FBRW5DLFFBQVE7UUFDQSxtQkFBYSxHQUFZLElBQUksQ0FBQzs7SUFnRDFDLENBQUM7aUJBaEpvQixRQUFRO0lBZXpCLHlCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUM1QyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3hDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ1gsRUFBRSxFQUFFLEtBQUs7WUFDVCxVQUFVLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNO1lBQzVCLE9BQU8sRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVB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QUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4Q0FDZTtJQUVqQztRQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQztzREFDVztJQUUzRDtRQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQzt1REFDWTtJQUU1RDtRQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQztvREFDUztJQVJ4QyxRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBZ0o1QjtJQUFELGVBQUM7Q0FoSkQsQUFnSkMsQ0FoSnFDLEVBQUUsQ0FBQyxTQUFTLEdBZ0pqRDtrQkFoSm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUMk0gfSBmcm9tICcuLi8uLi8uLi9mcmFtZS9zY3JpcHRzL1NESy9UMk0nO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJhZ1N5bmMgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHByaXZhdGUgcm9vdE5vZGU6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFtjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyXSB9KVxuICAgIHByaXZhdGUgdG91Y2hTdGFydEV2ZW50czogY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcltdID0gW107XG4gICAgQHByb3BlcnR5KHsgdHlwZTogW2NjLkNvbXBvbmVudC5FdmVudEhhbmRsZXJdIH0pXG4gICAgcHJpdmF0ZSB0b3VjaE1vdmluZ0V2ZW50czogY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcltdID0gW107XG4gICAgQHByb3BlcnR5KHsgdHlwZTogW2NjLkNvbXBvbmVudC5FdmVudEhhbmRsZXJdIH0pXG4gICAgcHJpdmF0ZSB0b3VjaEVuZEV2ZW50czogY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcltdID0gW107XG5cbiAgICBwcml2YXRlIHRhZ0lkOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBpc0VuYWJsZTogYm9vbGVhbiA9IHRydWU7XG4gICAgcHJpdmF0ZSBpc1RvdWNoaW5nOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBpc1RvdWNoOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMucm9vdE5vZGUgPSBjYy5maW5kKCdDYW52YXMvR2FtZVBhbmVsJyk7XG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMubm9kZS5nZXRTaWJsaW5nSW5kZXgoKTtcbiAgICAgICAgdGhpcy5ub2RlLmF0dHIoe1xuICAgICAgICAgICAgaWQ6IGluZGV4LFxuICAgICAgICAgICAgaW5pdFBhcmVudDogdGhpcy5ub2RlLnBhcmVudCxcbiAgICAgICAgICAgIGluaXRQb3M6IHsgeDogdGhpcy5ub2RlLngsIHk6IHRoaXMubm9kZS55IH0sXG4gICAgICAgICAgICBpbml0U2libGluZ0luZGV4OiBpbmRleCxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy50b3VjaFN0YXJ0LCB0aGlzKTtcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIHRoaXMudG91Y2hNb3ZlLCB0aGlzKTtcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy50b3VjaEVuZCwgdGhpcyk7XG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsIHRoaXMudG91Y2hFbmQsIHRoaXMpO1xuICAgICAgICB0aGlzLnRhZ0lkID0gdGhpcy5ub2RlLm5hbWUgKyB0aGlzLm5vZGUucGFyZW50Lm5hbWUgKyB0aGlzLm5vZGUuZ2V0U2libGluZ0luZGV4KCk7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRCeVQyTSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRFbmFibGUoaXNFbmFibGU6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5pc0VuYWJsZSA9IGlzRW5hYmxlO1xuICAgIH1cblxuICAgIHB1YmxpYyBhZGRUb3VjaEV2ZW50KHRhcmdldDogY2MuTm9kZSwgY29tcG9uZW50OiBzdHJpbmcsIGhhbmRsZXJzOiBzdHJpbmdbXSkge1xuICAgICAgICB0aGlzLnRvdWNoU3RhcnRFdmVudHMucHVzaChuZXcgRHJhZ1N5bmMuRXZlbnRIYW5kbGVyKCkpO1xuICAgICAgICB0aGlzLnRvdWNoU3RhcnRFdmVudHNbMF0udGFyZ2V0ID0gdGFyZ2V0O1xuICAgICAgICB0aGlzLnRvdWNoU3RhcnRFdmVudHNbMF0uY29tcG9uZW50ID0gY29tcG9uZW50O1xuICAgICAgICB0aGlzLnRvdWNoU3RhcnRFdmVudHNbMF0uaGFuZGxlciA9IGhhbmRsZXJzWzBdO1xuXG4gICAgICAgIHRoaXMudG91Y2hNb3ZpbmdFdmVudHMucHVzaChuZXcgRHJhZ1N5bmMuRXZlbnRIYW5kbGVyKCkpO1xuICAgICAgICB0aGlzLnRvdWNoTW92aW5nRXZlbnRzWzBdLnRhcmdldCA9IHRhcmdldDtcbiAgICAgICAgdGhpcy50b3VjaE1vdmluZ0V2ZW50c1swXS5jb21wb25lbnQgPSBjb21wb25lbnQ7XG4gICAgICAgIHRoaXMudG91Y2hNb3ZpbmdFdmVudHNbMF0uaGFuZGxlciA9IGhhbmRsZXJzWzFdO1xuXG4gICAgICAgIHRoaXMudG91Y2hFbmRFdmVudHMucHVzaChuZXcgRHJhZ1N5bmMuRXZlbnRIYW5kbGVyKCkpO1xuICAgICAgICB0aGlzLnRvdWNoRW5kRXZlbnRzWzBdLnRhcmdldCA9IHRhcmdldDtcbiAgICAgICAgdGhpcy50b3VjaEVuZEV2ZW50c1swXS5jb21wb25lbnQgPSBjb21wb25lbnQ7XG4gICAgICAgIHRoaXMudG91Y2hFbmRFdmVudHNbMF0uaGFuZGxlciA9IGhhbmRsZXJzWzJdO1xuICAgIH1cblxuICAgIHByaXZhdGUgdG91Y2hTdGFydChldmVudDogY2MuRXZlbnQuRXZlbnRUb3VjaCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNFbmFibGUpIHJldHVybjtcbiAgICAgICAgdGhpcy5pc1RvdWNoaW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pc1RvdWNoID0gdHJ1ZTtcbiAgICAgICAgbGV0IHBvcyA9IHRoaXMucm9vdE5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIoZXZlbnQuZ2V0TG9jYXRpb24oKSk7XG4gICAgICAgIGxldCBwcmV2TG9jYXRpb24gPSB0aGlzLnJvb3ROb2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKGV2ZW50LmdldFByZXZpb3VzTG9jYXRpb24oKSk7XG4gICAgICAgIGxldCB0eXBlID0gJ3RvdWNoU3RhcnQnICsgdGhpcy50YWdJZDtcbiAgICAgICAgbGV0IGRhdGEgPSB7IHBvczogeyB4OiBwb3MueCwgeTogcG9zLnkgfSwgcHJldkxvY2F0aW9uOiB7IHg6IHByZXZMb2NhdGlvbi54LCB5OiBwcmV2TG9jYXRpb24ueSB9IH07XG4gICAgICAgIFQyTS5kaXNwYXRjaCh0eXBlLCBkYXRhKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHRvdWNoTW92ZShldmVudDogY2MuRXZlbnQuRXZlbnRUb3VjaCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNFbmFibGUgfHwgIXRoaXMuaXNUb3VjaGluZykgcmV0dXJuO1xuICAgICAgICBsZXQgcG9zID0gdGhpcy5yb290Tm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihldmVudC5nZXRMb2NhdGlvbigpKTtcbiAgICAgICAgbGV0IHByZXZMb2NhdGlvbiA9IHRoaXMucm9vdE5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIoZXZlbnQuZ2V0UHJldmlvdXNMb2NhdGlvbigpKTtcbiAgICAgICAgbGV0IGRlbHRhID0gdGhpcy5yb290Tm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihldmVudC5nZXREZWx0YSgpKTtcbiAgICAgICAgbGV0IHR5cGUgPSAndG91Y2hNb3ZlJyArIHRoaXMudGFnSWQ7XG4gICAgICAgIGxldCBkYXRhID0geyBwb3M6IHsgeDogcG9zLngsIHk6IHBvcy55IH0sIHByZXZMb2NhdGlvbjogeyB4OiBwcmV2TG9jYXRpb24ueCwgeTogcHJldkxvY2F0aW9uLnkgfSxkZWx0YTogeyB4OiBkZWx0YS54LCB5OiBkZWx0YS55IH0gfTtcbiAgICAgICAgVDJNLmRpc3BhdGNoKHR5cGUsIGRhdGEsIHRydWUpO1xuICAgIH1cblxuICAgIHByaXZhdGUgdG91Y2hFbmQoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpIHtcbiAgICAgICAgdGhpcy5pc1RvdWNoaW5nID0gZmFsc2U7XG4gICAgICAgIGlmICghdGhpcy5pc0VuYWJsZSB8fCAhdGhpcy5pc1RvdWNoKSByZXR1cm47XG4gICAgICAgIHRoaXMuaXNUb3VjaCA9IGZhbHNlO1xuICAgICAgICBsZXQgcG9zID0gdGhpcy5yb290Tm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihldmVudC5nZXRMb2NhdGlvbigpKTtcbiAgICAgICAgbGV0IHByZXZMb2NhdGlvbiA9IHRoaXMucm9vdE5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIoZXZlbnQuZ2V0UHJldmlvdXNMb2NhdGlvbigpKTtcbiAgICAgICAgbGV0IHR5cGUgPSAndG91Y2hFbmQnICsgdGhpcy50YWdJZDtcbiAgICAgICAgbGV0IGRhdGEgPSB7IHBvczogeyB4OiBwb3MueCwgeTogcG9zLnkgfSwgcHJldkxvY2F0aW9uOiB7IHg6IHByZXZMb2NhdGlvbi54LCB5OiBwcmV2TG9jYXRpb24ueSB9IH07XG4gICAgICAgIFQyTS5kaXNwYXRjaCh0eXBlLCBkYXRhKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFkZEV2ZW50QnlUMk0oKSB7XG4gICAgICAgIFQyTS5hZGRTeW5jRXZlbnRMaXN0ZW5lcigndG91Y2hTdGFydCcgKyB0aGlzLnRhZ0lkLCB0aGlzLnRvdWNoU3RhcnRIYW5kbGVyLmJpbmQodGhpcykpO1xuICAgICAgICBUMk0uYWRkU3luY0V2ZW50TGlzdGVuZXIoJ3RvdWNoTW92ZScgKyB0aGlzLnRhZ0lkLCB0aGlzLnRvdWNoTW92ZUhhbmRsZXIuYmluZCh0aGlzKSk7XG4gICAgICAgIFQyTS5hZGRTeW5jRXZlbnRMaXN0ZW5lcigndG91Y2hFbmQnICsgdGhpcy50YWdJZCwgdGhpcy50b3VjaEVuZEhhbmRsZXIuYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAgLy/moLnmja7op6bmkbjml7bpl7TliKTmlq3mmK/lkKbkuLrngrnlh7vkuovku7ZcbiAgICBwcml2YXRlIGlzQ2xpY2tFdmVudDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByaXZhdGUgdG91Y2hTdGFydERhdGE6IGFueSA9IG51bGw7XG5cbiAgICAvL+inpuaRuOW8gOWni+S9jee9rlxuICAgIHByaXZhdGUgdG91Y2hTdGFydFBvczogY2MuVmVjMiA9IG51bGw7XG5cbiAgICBwcml2YXRlIHRvdWNoU3RhcnRIYW5kbGVyKGRhdGEpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzRW5hYmxlKSByZXR1cm47XG4gICAgICAgIHRoaXMudG91Y2hTdGFydFBvcyA9IGNjLnYyKGRhdGEucG9zLngsIGRhdGEucG9zLnkpO1xuICAgICAgICB0aGlzLmlzQ2xpY2tFdmVudCA9IHRydWU7XG4gICAgICAgIHRoaXMudG91Y2hTdGFydERhdGEgPSBkYXRhO1xuICAgIH1cblxuICAgIHByaXZhdGUgaGFuZGxlVG91Y2hTdGFydChkYXRhKSB7XG4gICAgICAgIHRoaXMubm9kZS5wYXJlbnQgPSB0aGlzLnJvb3ROb2RlO1xuICAgICAgICB0aGlzLm5vZGUucG9zaXRpb24gPSBjYy52Myh0aGlzLnRvdWNoU3RhcnREYXRhLnBvcy54LCB0aGlzLnRvdWNoU3RhcnREYXRhLnBvcy55KTtcbiAgICAgICAgZm9yIChsZXQgZXZlbnRIYW5kbGVyIG9mIHRoaXMudG91Y2hTdGFydEV2ZW50cykge1xuICAgICAgICAgICAgZXZlbnRIYW5kbGVyLmVtaXQoW3sgcG9zOiB0aGlzLnRvdWNoU3RhcnREYXRhLnBvcywgdGFyZ2V0OiB0aGlzLm5vZGUgLCBwcmV2TG9jYXRpb246IHRoaXMudG91Y2hTdGFydERhdGEucHJldkxvY2F0aW9ufV0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB0b3VjaE1vdmVIYW5kbGVyKGRhdGEpIHtcbiAgICAgICAgLy/liKTmlq3lvZPliY3kvY3nva7kuI7op6bmkbjlvIDlp4vkvY3nva7nmoTot53nprvvvIzlpoLmnpzotoXov4fkuIDlrprot53nprvvvIzliJnkuI3lho3liKTmlq3kuLrngrnlh7vkuovku7ZcbiAgICAgICAgaWYgKHRoaXMuaXNDbGlja0V2ZW50ICYmIHRoaXMudG91Y2hTdGFydFBvcykge1xuICAgICAgICAgICAgbGV0IGRpc3RhbmNlID0gdGhpcy50b3VjaFN0YXJ0UG9zLnN1YihjYy52MihkYXRhLnBvcy54LCBkYXRhLnBvcy55KSkubWFnKCk7XG4gICAgICAgICAgICBpZiAoZGlzdGFuY2UgPiAxMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNDbGlja0V2ZW50ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVUb3VjaFN0YXJ0KHRoaXMudG91Y2hTdGFydERhdGEpO1xuICAgICAgICAgICAgICAgIHRoaXMudG91Y2hTdGFydERhdGEgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5ub2RlLnBvc2l0aW9uID0gY2MudjMoZGF0YS5wb3MueCwgZGF0YS5wb3MueSk7XG4gICAgICAgICAgICBmb3IgKGxldCBldmVudEhhbmRsZXIgb2YgdGhpcy50b3VjaE1vdmluZ0V2ZW50cykge1xuICAgICAgICAgICAgICAgIGV2ZW50SGFuZGxlci5lbWl0KFt7IHBvczogZGF0YS5wb3MsIHRhcmdldDogdGhpcy5ub2RlLCBwcmV2TG9jYXRpb246IGRhdGEucHJldkxvY2F0aW9uICxkZWx0YTogZGF0YS5kZWx0YX1dKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgdG91Y2hFbmRIYW5kbGVyKGRhdGEpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNDbGlja0V2ZW50ICYmIHRoaXMudG91Y2hTdGFydFBvcykge1xuICAgICAgICAgICAgbGV0IGRpc3RhbmNlID0gdGhpcy50b3VjaFN0YXJ0UG9zLnN1YihjYy52MihkYXRhLnBvcy54LCBkYXRhLnBvcy55KSkubWFnKCk7XG4gICAgICAgICAgICBpZiAoZGlzdGFuY2UgPD0gMTApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzQ2xpY2tFdmVudCA9IHRydWU7ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5ub2RlLnBvc2l0aW9uID0gY2MudjMoZGF0YS5wb3MueCwgZGF0YS5wb3MueSk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgZXZlbnRIYW5kbGVyIG9mIHRoaXMudG91Y2hFbmRFdmVudHMpIHtcbiAgICAgICAgICAgIGV2ZW50SGFuZGxlci5lbWl0KFt7IHBvczogZGF0YS5wb3MsIHRhcmdldDogdGhpcy5ub2RlLCBpc0NsaWNrOiB0aGlzLmlzQ2xpY2tFdmVudCAsIHByZXZMb2NhdGlvbjogZGF0YS5wcmV2TG9jYXRpb259XSk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=