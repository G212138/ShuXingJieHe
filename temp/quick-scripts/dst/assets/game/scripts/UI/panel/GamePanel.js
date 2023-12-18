
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game/scripts/UI/panel/GamePanel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '246c2OOkGlKHoa6ZJOVEHI+', 'GamePanel');
// game/scripts/UI/panel/GamePanel.ts

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
var BaseGamePanel_1 = require("../../../../frame/scripts/UI/Panel/BaseGamePanel");
var EventType_1 = require("../../Data/EventType");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GamePanel = /** @class */ (function (_super) {
    __extends(GamePanel, _super);
    function GamePanel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GamePanel.prototype.start = function () {
        _super.prototype.start.call(this);
    };
    GamePanel.prototype.onDestroy = function () {
        _super.prototype.onDestroy.call(this);
    };
    /**
     * 游戏入口
     * 这里已经拿到数据
     */
    GamePanel.prototype.setPanel = function () {
        _super.prototype.setPanel.call(this);
        // TODO 业务逻辑
        var mainCamera = cc.find("Canvas/Main Camera").getComponent(cc.Camera);
        var bg = mainCamera.getComponent(cc.Sprite);
        bg.enabled = false;
        mainCamera.clearFlags = cc.Camera.ClearFlags.DEPTH | cc.Camera.ClearFlags.STENCIL;
        ListenerManager_1.ListenerManager.dispatch(EventType_1.EventType.ENTER_GAME);
    };
    /**
     * 心跳回调（当actionId不相等时才会触发）
     * 数据恢复，重绘画面
     * @param recovery
     */
    GamePanel.prototype.onRecoveryData = function (recovery) {
        _super.prototype.onRecoveryData.call(this, recovery);
        ListenerManager_1.ListenerManager.dispatch(EventType_1.EventType.GAME_RECONNECT);
    };
    /**
     * 作答正确
     * 父类实现了数据上报
     * @param isCurLevelFinish 本关是否完成
     */
    GamePanel.prototype.answerRight = function (isCurLevelFinish) {
        _super.prototype.answerRight.call(this, isCurLevelFinish);
    };
    /**
     * 作答错误
     * 父类实现了数据上报
     * @param isCurLevelFinish 本关是否完成
     */
    GamePanel.prototype.answerWrong = function (isCurLevelFinish) {
        if (isCurLevelFinish === void 0) { isCurLevelFinish = false; }
        _super.prototype.answerWrong.call(this, isCurLevelFinish);
    };
    /**
     * 游戏结束
     * 父类实现了结算界面（游戏结束或星级评判）的弹出
     */
    GamePanel.prototype.gameOver = function () {
        _super.prototype.gameOver.call(this);
    };
    /**
     * 重玩
     */
    GamePanel.prototype.onReplay = function () {
        _super.prototype.onReplay.call(this);
    };
    GamePanel.prototype.update = function (dt) {
        _super.prototype.update.call(this, dt);
    };
    GamePanel.className = 'GamePanel';
    GamePanel = __decorate([
        ccclass
    ], GamePanel);
    return GamePanel;
}(BaseGamePanel_1.default));
exports.default = GamePanel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZVxcc2NyaXB0c1xcVUlcXHBhbmVsXFxHYW1lUGFuZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUZBQW9GO0FBRXBGLGtGQUE2RTtBQUU3RSxrREFBaUQ7QUFJM0MsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBdUMsNkJBQWE7SUFBcEQ7O0lBdUVBLENBQUM7SUFwRUcseUJBQUssR0FBTDtRQUNJLGlCQUFNLEtBQUssV0FBRSxDQUFDO0lBQ2xCLENBQUM7SUFFRCw2QkFBUyxHQUFUO1FBQ0ksaUJBQU0sU0FBUyxXQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVEOzs7T0FHRztJQUNPLDRCQUFRLEdBQWxCO1FBQ0ksaUJBQU0sUUFBUSxXQUFFLENBQUM7UUFDakIsWUFBWTtRQUNaLElBQUksVUFBVSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQ3RFLElBQUksRUFBRSxHQUFHLFVBQVUsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQzNDLEVBQUUsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFBO1FBQ2xCLFVBQVUsQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQztRQUNsRixpQ0FBZSxDQUFDLFFBQVEsQ0FBQyxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFRDs7OztPQUlHO0lBQ08sa0NBQWMsR0FBeEIsVUFBeUIsUUFBa0I7UUFDdkMsaUJBQU0sY0FBYyxZQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQy9CLGlDQUFlLENBQUMsUUFBUSxDQUFDLHFCQUFTLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUVEOzs7O09BSUc7SUFDTywrQkFBVyxHQUFyQixVQUFzQixnQkFBeUI7UUFDM0MsaUJBQU0sV0FBVyxZQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVEOzs7O09BSUc7SUFDTywrQkFBVyxHQUFyQixVQUFzQixnQkFBaUM7UUFBakMsaUNBQUEsRUFBQSx3QkFBaUM7UUFDbkQsaUJBQU0sV0FBVyxZQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVEOzs7T0FHRztJQUNPLDRCQUFRLEdBQWxCO1FBQ0ksaUJBQU0sUUFBUSxXQUFFLENBQUM7SUFDckIsQ0FBQztJQUVEOztPQUVHO0lBQ08sNEJBQVEsR0FBbEI7UUFDSSxpQkFBTSxRQUFRLFdBQUUsQ0FBQztJQUNyQixDQUFDO0lBRUQsMEJBQU0sR0FBTixVQUFPLEVBQUU7UUFDTCxpQkFBTSxNQUFNLFlBQUMsRUFBRSxDQUFDLENBQUM7SUFDckIsQ0FBQztJQXJFYSxtQkFBUyxHQUFHLFdBQVcsQ0FBQztJQURyQixTQUFTO1FBRDdCLE9BQU87T0FDYSxTQUFTLENBdUU3QjtJQUFELGdCQUFDO0NBdkVELEFBdUVDLENBdkVzQyx1QkFBYSxHQXVFbkQ7a0JBdkVvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGlzdGVuZXJNYW5hZ2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vZnJhbWUvc2NyaXB0cy9NYW5hZ2VyL0xpc3RlbmVyTWFuYWdlcic7XG5pbXBvcnQgeyBTeW5jRGF0YSB9IGZyb20gJy4uLy4uLy4uLy4uL2ZyYW1lL3NjcmlwdHMvTWFuYWdlci9TeW5jRGF0YU1hbmFnZXInO1xuaW1wb3J0IEJhc2VHYW1lUGFuZWwgZnJvbSAnLi4vLi4vLi4vLi4vZnJhbWUvc2NyaXB0cy9VSS9QYW5lbC9CYXNlR2FtZVBhbmVsJztcbmltcG9ydCB7IENvbnN0VmFsdWUgfSBmcm9tICcuLi8uLi9EYXRhL0NvbnN0VmFsdWUnO1xuaW1wb3J0IHsgRXZlbnRUeXBlIH0gZnJvbSAnLi4vLi4vRGF0YS9FdmVudFR5cGUnO1xuaW1wb3J0IHsgTmV0V29yayB9IGZyb20gJy4uLy4uLy4uLy4uL2ZyYW1lL3NjcmlwdHMvSHR0cC9OZXRXb3JrJztcbmltcG9ydCB7IFQyTSB9IGZyb20gJy4uLy4uLy4uLy4uL2ZyYW1lL3NjcmlwdHMvU0RLL1QyTSc7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lUGFuZWwgZXh0ZW5kcyBCYXNlR2FtZVBhbmVsIHtcbiAgICBwdWJsaWMgc3RhdGljIGNsYXNzTmFtZSA9ICdHYW1lUGFuZWwnO1xuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHN1cGVyLnN0YXJ0KCk7XG4gICAgfVxuXG4gICAgb25EZXN0cm95KCkge1xuICAgICAgICBzdXBlci5vbkRlc3Ryb3koKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmuLjmiI/lhaXlj6NcbiAgICAgKiDov5nph4zlt7Lnu4/mi7/liLDmlbDmja5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgc2V0UGFuZWwoKSB7XG4gICAgICAgIHN1cGVyLnNldFBhbmVsKCk7XG4gICAgICAgIC8vIFRPRE8g5Lia5Yqh6YC76L6RXG4gICAgICAgIGxldCBtYWluQ2FtZXJhID0gY2MuZmluZChcIkNhbnZhcy9NYWluIENhbWVyYVwiKS5nZXRDb21wb25lbnQoY2MuQ2FtZXJhKVxuICAgICAgICBsZXQgYmcgPSBtYWluQ2FtZXJhLmdldENvbXBvbmVudChjYy5TcHJpdGUpXG4gICAgICAgIGJnLmVuYWJsZWQgPSBmYWxzZVxuICAgICAgICBtYWluQ2FtZXJhLmNsZWFyRmxhZ3MgPSBjYy5DYW1lcmEuQ2xlYXJGbGFncy5ERVBUSCB8IGNjLkNhbWVyYS5DbGVhckZsYWdzLlNURU5DSUw7XG4gICAgICAgIExpc3RlbmVyTWFuYWdlci5kaXNwYXRjaChFdmVudFR5cGUuRU5URVJfR0FNRSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5b+D6Lez5Zue6LCD77yI5b2TYWN0aW9uSWTkuI3nm7jnrYnml7bmiY3kvJrop6blj5HvvIlcbiAgICAgKiDmlbDmja7mgaLlpI3vvIzph43nu5jnlLvpnaJcbiAgICAgKiBAcGFyYW0gcmVjb3ZlcnlcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgb25SZWNvdmVyeURhdGEocmVjb3Zlcnk6IFN5bmNEYXRhKTogdm9pZCB7XG4gICAgICAgIHN1cGVyLm9uUmVjb3ZlcnlEYXRhKHJlY292ZXJ5KTtcbiAgICAgICAgTGlzdGVuZXJNYW5hZ2VyLmRpc3BhdGNoKEV2ZW50VHlwZS5HQU1FX1JFQ09OTkVDVCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5L2c562U5q2j56GuXG4gICAgICog54i257G75a6e546w5LqG5pWw5o2u5LiK5oqlXG4gICAgICogQHBhcmFtIGlzQ3VyTGV2ZWxGaW5pc2gg5pys5YWz5piv5ZCm5a6M5oiQXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGFuc3dlclJpZ2h0KGlzQ3VyTGV2ZWxGaW5pc2g6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIuYW5zd2VyUmlnaHQoaXNDdXJMZXZlbEZpbmlzaCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5L2c562U6ZSZ6K+vXG4gICAgICog54i257G75a6e546w5LqG5pWw5o2u5LiK5oqlXG4gICAgICogQHBhcmFtIGlzQ3VyTGV2ZWxGaW5pc2gg5pys5YWz5piv5ZCm5a6M5oiQXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGFuc3dlcldyb25nKGlzQ3VyTGV2ZWxGaW5pc2g6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgICAgICBzdXBlci5hbnN3ZXJXcm9uZyhpc0N1ckxldmVsRmluaXNoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmuLjmiI/nu5PmnZ9cbiAgICAgKiDniLbnsbvlrp7njrDkuobnu5PnrpfnlYzpnaLvvIjmuLjmiI/nu5PmnZ/miJbmmJ/nuqfor4TliKTvvInnmoTlvLnlh7pcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgZ2FtZU92ZXIoKSB7XG4gICAgICAgIHN1cGVyLmdhbWVPdmVyKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6YeN546pXG4gICAgICovXG4gICAgcHJvdGVjdGVkIG9uUmVwbGF5KCkge1xuICAgICAgICBzdXBlci5vblJlcGxheSgpO1xuICAgIH1cblxuICAgIHVwZGF0ZShkdCkge1xuICAgICAgICBzdXBlci51cGRhdGUoZHQpO1xuICAgIH1cbn1cbiJdfQ==