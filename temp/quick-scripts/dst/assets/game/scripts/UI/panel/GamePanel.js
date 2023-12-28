
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
var SyncDataManager_1 = require("../../../../frame/scripts/Manager/SyncDataManager");
var BaseGamePanel_1 = require("../../../../frame/scripts/UI/Panel/BaseGamePanel");
var EventType_1 = require("../../Data/EventType");
var EditorManager_1 = require("../../Manager/EditorManager");
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
        SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.count = EditorManager_1.EditorManager.editorData.count;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZVxcc2NyaXB0c1xcVUlcXHBhbmVsXFxHYW1lUGFuZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUZBQW9GO0FBQ3BGLHFGQUE4RjtBQUM5RixrRkFBNkU7QUFFN0Usa0RBQWlEO0FBR2pELDZEQUE0RDtBQUV0RCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF1Qyw2QkFBYTtJQUFwRDs7SUF3RUEsQ0FBQztJQXJFRyx5QkFBSyxHQUFMO1FBQ0ksaUJBQU0sS0FBSyxXQUFFLENBQUM7SUFDbEIsQ0FBQztJQUVELDZCQUFTLEdBQVQ7UUFDSSxpQkFBTSxTQUFTLFdBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQ7OztPQUdHO0lBQ08sNEJBQVEsR0FBbEI7UUFDSSxpQkFBTSxRQUFRLFdBQUUsQ0FBQztRQUNqQixpQ0FBZSxDQUFDLFdBQVcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEdBQUcsNkJBQWEsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDO1FBQ3BGLFlBQVk7UUFDWixJQUFJLFVBQVUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUN0RSxJQUFJLEVBQUUsR0FBRyxVQUFVLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUMzQyxFQUFFLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQTtRQUNsQixVQUFVLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUM7UUFDbEYsaUNBQWUsQ0FBQyxRQUFRLENBQUMscUJBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNPLGtDQUFjLEdBQXhCLFVBQXlCLFFBQWtCO1FBQ3ZDLGlCQUFNLGNBQWMsWUFBQyxRQUFRLENBQUMsQ0FBQztRQUMvQixpQ0FBZSxDQUFDLFFBQVEsQ0FBQyxxQkFBUyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFFRDs7OztPQUlHO0lBQ08sK0JBQVcsR0FBckIsVUFBc0IsZ0JBQXlCO1FBQzNDLGlCQUFNLFdBQVcsWUFBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRDs7OztPQUlHO0lBQ08sK0JBQVcsR0FBckIsVUFBc0IsZ0JBQWlDO1FBQWpDLGlDQUFBLEVBQUEsd0JBQWlDO1FBQ25ELGlCQUFNLFdBQVcsWUFBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRDs7O09BR0c7SUFDTyw0QkFBUSxHQUFsQjtRQUNJLGlCQUFNLFFBQVEsV0FBRSxDQUFDO0lBQ3JCLENBQUM7SUFFRDs7T0FFRztJQUNPLDRCQUFRLEdBQWxCO1FBQ0ksaUJBQU0sUUFBUSxXQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELDBCQUFNLEdBQU4sVUFBTyxFQUFFO1FBQ0wsaUJBQU0sTUFBTSxZQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3JCLENBQUM7SUF0RWEsbUJBQVMsR0FBRyxXQUFXLENBQUM7SUFEckIsU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQXdFN0I7SUFBRCxnQkFBQztDQXhFRCxBQXdFQyxDQXhFc0MsdUJBQWEsR0F3RW5EO2tCQXhFb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExpc3RlbmVyTWFuYWdlciB9IGZyb20gJy4uLy4uLy4uLy4uL2ZyYW1lL3NjcmlwdHMvTWFuYWdlci9MaXN0ZW5lck1hbmFnZXInO1xuaW1wb3J0IHsgU3luY0RhdGEsIFN5bmNEYXRhTWFuYWdlciB9IGZyb20gJy4uLy4uLy4uLy4uL2ZyYW1lL3NjcmlwdHMvTWFuYWdlci9TeW5jRGF0YU1hbmFnZXInO1xuaW1wb3J0IEJhc2VHYW1lUGFuZWwgZnJvbSAnLi4vLi4vLi4vLi4vZnJhbWUvc2NyaXB0cy9VSS9QYW5lbC9CYXNlR2FtZVBhbmVsJztcbmltcG9ydCB7IENvbnN0VmFsdWUgfSBmcm9tICcuLi8uLi9EYXRhL0NvbnN0VmFsdWUnO1xuaW1wb3J0IHsgRXZlbnRUeXBlIH0gZnJvbSAnLi4vLi4vRGF0YS9FdmVudFR5cGUnO1xuaW1wb3J0IHsgTmV0V29yayB9IGZyb20gJy4uLy4uLy4uLy4uL2ZyYW1lL3NjcmlwdHMvSHR0cC9OZXRXb3JrJztcbmltcG9ydCB7IFQyTSB9IGZyb20gJy4uLy4uLy4uLy4uL2ZyYW1lL3NjcmlwdHMvU0RLL1QyTSc7XG5pbXBvcnQgeyBFZGl0b3JNYW5hZ2VyIH0gZnJvbSAnLi4vLi4vTWFuYWdlci9FZGl0b3JNYW5hZ2VyJztcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVQYW5lbCBleHRlbmRzIEJhc2VHYW1lUGFuZWwge1xuICAgIHB1YmxpYyBzdGF0aWMgY2xhc3NOYW1lID0gJ0dhbWVQYW5lbCc7XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgc3VwZXIuc3RhcnQoKTtcbiAgICB9XG5cbiAgICBvbkRlc3Ryb3koKSB7XG4gICAgICAgIHN1cGVyLm9uRGVzdHJveSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOa4uOaIj+WFpeWPo1xuICAgICAqIOi/memHjOW3sue7j+aLv+WIsOaVsOaNrlxuICAgICAqL1xuICAgIHByb3RlY3RlZCBzZXRQYW5lbCgpIHtcbiAgICAgICAgc3VwZXIuc2V0UGFuZWwoKTtcbiAgICAgICAgU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuY291bnQgPSBFZGl0b3JNYW5hZ2VyLmVkaXRvckRhdGEuY291bnQ7XG4gICAgICAgIC8vIFRPRE8g5Lia5Yqh6YC76L6RXG4gICAgICAgIGxldCBtYWluQ2FtZXJhID0gY2MuZmluZChcIkNhbnZhcy9NYWluIENhbWVyYVwiKS5nZXRDb21wb25lbnQoY2MuQ2FtZXJhKVxuICAgICAgICBsZXQgYmcgPSBtYWluQ2FtZXJhLmdldENvbXBvbmVudChjYy5TcHJpdGUpXG4gICAgICAgIGJnLmVuYWJsZWQgPSBmYWxzZVxuICAgICAgICBtYWluQ2FtZXJhLmNsZWFyRmxhZ3MgPSBjYy5DYW1lcmEuQ2xlYXJGbGFncy5ERVBUSCB8IGNjLkNhbWVyYS5DbGVhckZsYWdzLlNURU5DSUw7XG4gICAgICAgIExpc3RlbmVyTWFuYWdlci5kaXNwYXRjaChFdmVudFR5cGUuRU5URVJfR0FNRSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5b+D6Lez5Zue6LCD77yI5b2TYWN0aW9uSWTkuI3nm7jnrYnml7bmiY3kvJrop6blj5HvvIlcbiAgICAgKiDmlbDmja7mgaLlpI3vvIzph43nu5jnlLvpnaJcbiAgICAgKiBAcGFyYW0gcmVjb3ZlcnlcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgb25SZWNvdmVyeURhdGEocmVjb3Zlcnk6IFN5bmNEYXRhKTogdm9pZCB7XG4gICAgICAgIHN1cGVyLm9uUmVjb3ZlcnlEYXRhKHJlY292ZXJ5KTtcbiAgICAgICAgTGlzdGVuZXJNYW5hZ2VyLmRpc3BhdGNoKEV2ZW50VHlwZS5HQU1FX1JFQ09OTkVDVCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5L2c562U5q2j56GuXG4gICAgICog54i257G75a6e546w5LqG5pWw5o2u5LiK5oqlXG4gICAgICogQHBhcmFtIGlzQ3VyTGV2ZWxGaW5pc2gg5pys5YWz5piv5ZCm5a6M5oiQXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGFuc3dlclJpZ2h0KGlzQ3VyTGV2ZWxGaW5pc2g6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIuYW5zd2VyUmlnaHQoaXNDdXJMZXZlbEZpbmlzaCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5L2c562U6ZSZ6K+vXG4gICAgICog54i257G75a6e546w5LqG5pWw5o2u5LiK5oqlXG4gICAgICogQHBhcmFtIGlzQ3VyTGV2ZWxGaW5pc2gg5pys5YWz5piv5ZCm5a6M5oiQXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGFuc3dlcldyb25nKGlzQ3VyTGV2ZWxGaW5pc2g6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgICAgICBzdXBlci5hbnN3ZXJXcm9uZyhpc0N1ckxldmVsRmluaXNoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmuLjmiI/nu5PmnZ9cbiAgICAgKiDniLbnsbvlrp7njrDkuobnu5PnrpfnlYzpnaLvvIjmuLjmiI/nu5PmnZ/miJbmmJ/nuqfor4TliKTvvInnmoTlvLnlh7pcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgZ2FtZU92ZXIoKSB7XG4gICAgICAgIHN1cGVyLmdhbWVPdmVyKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6YeN546pXG4gICAgICovXG4gICAgcHJvdGVjdGVkIG9uUmVwbGF5KCkge1xuICAgICAgICBzdXBlci5vblJlcGxheSgpO1xuICAgIH1cblxuICAgIHVwZGF0ZShkdCkge1xuICAgICAgICBzdXBlci51cGRhdGUoZHQpO1xuICAgIH1cbn1cbiJdfQ==