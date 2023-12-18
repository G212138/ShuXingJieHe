"use strict";
cc._RF.push(module, 'f6665ym0IlJNYKq4da/THmw', 'CustomSyncData');
// game/scripts/Data/CustomSyncData.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomSyncData = void 0;
/**
 * 需要同步的自定义数据
 * 游戏业务层同步数据在这里添加
 */
var CustomSyncData = /** @class */ (function () {
    function CustomSyncData() {
        this.curLevel = 0; // 当前关卡(第一关为0)
        // TODO 自定义
        this.xCount = 5; // x轴方块数量
        this.yCount = 5; // y轴方块数量
        this.zCount = 5; // z轴方块数量
        this.cubeOpened = false; // 方块是否打开
        this.cubeClickArr = []; // 点击的方块数组
        this.enableClick = false; // 是否允许点击
        this.qiepianClickArr = []; // 切片点击的方块数组
        this.eulerX = 0;
        this.eulerY = 0;
        this.eulerZ = 0;
    }
    return CustomSyncData;
}());
exports.CustomSyncData = CustomSyncData;

cc._RF.pop();