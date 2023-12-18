
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game/scripts/Data/CustomSyncData.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZVxcc2NyaXB0c1xcRGF0YVxcQ3VzdG9tU3luY0RhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7OztHQUdHO0FBQ0g7SUFBQTtRQUNXLGFBQVEsR0FBVyxDQUFDLENBQUMsQ0FBQyxjQUFjO1FBQzNDLFdBQVc7UUFFSixXQUFNLEdBQVcsQ0FBQyxDQUFDLENBQUMsU0FBUztRQUM3QixXQUFNLEdBQVcsQ0FBQyxDQUFDLENBQUMsU0FBUztRQUM3QixXQUFNLEdBQVcsQ0FBQyxDQUFDLENBQUMsU0FBUztRQUM3QixlQUFVLEdBQVksS0FBSyxDQUFDLENBQUMsU0FBUztRQUN0QyxpQkFBWSxHQUF1RCxFQUFFLENBQUMsQ0FBQyxVQUFVO1FBQ2pGLGdCQUFXLEdBQVksS0FBSyxDQUFDLENBQUMsU0FBUztRQUN2QyxvQkFBZSxHQUFhLEVBQUUsQ0FBQyxDQUFDLFlBQVk7UUFDNUMsV0FBTSxHQUFVLENBQUMsQ0FBQztRQUNsQixXQUFNLEdBQVUsQ0FBQyxDQUFDO1FBQ2xCLFdBQU0sR0FBVSxDQUFDLENBQUM7SUFFN0IsQ0FBQztJQUFELHFCQUFDO0FBQUQsQ0FmQSxBQWVDLElBQUE7QUFmWSx3Q0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4vKipcbiAqIOmcgOimgeWQjOatpeeahOiHquWumuS5ieaVsOaNrlxuICog5ri45oiP5Lia5Yqh5bGC5ZCM5q2l5pWw5o2u5Zyo6L+Z6YeM5re75YqgXG4gKi9cbmV4cG9ydCBjbGFzcyBDdXN0b21TeW5jRGF0YSB7XG4gICAgcHVibGljIGN1ckxldmVsOiBudW1iZXIgPSAwOyAvLyDlvZPliY3lhbPljaEo56ys5LiA5YWz5Li6MClcbiAgICAvLyBUT0RPIOiHquWumuS5iVxuICAgIFxuICAgIHB1YmxpYyB4Q291bnQ6IG51bWJlciA9IDU7IC8vIHjovbTmlrnlnZfmlbDph49cbiAgICBwdWJsaWMgeUNvdW50OiBudW1iZXIgPSA1OyAvLyB56L205pa55Z2X5pWw6YePXG4gICAgcHVibGljIHpDb3VudDogbnVtYmVyID0gNTsgLy8geui9tOaWueWdl+aVsOmHj1xuICAgIHB1YmxpYyBjdWJlT3BlbmVkOiBib29sZWFuID0gZmFsc2U7IC8vIOaWueWdl+aYr+WQpuaJk+W8gFxuICAgIHB1YmxpYyBjdWJlQ2xpY2tBcnI6IHt4SW5kZXg6IG51bWJlciwgeUluZGV4OiBudW1iZXIsIHpJbmRleDogbnVtYmVyfVtdID0gW107IC8vIOeCueWHu+eahOaWueWdl+aVsOe7hFxuICAgIHB1YmxpYyBlbmFibGVDbGljazogYm9vbGVhbiA9IGZhbHNlOyAvLyDmmK/lkKblhYHorrjngrnlh7tcbiAgICBwdWJsaWMgcWllcGlhbkNsaWNrQXJyOiBzdHJpbmdbXSA9IFtdOyAvLyDliIfniYfngrnlh7vnmoTmlrnlnZfmlbDnu4RcbiAgICBwdWJsaWMgZXVsZXJYOm51bWJlciA9IDA7XG4gICAgcHVibGljIGV1bGVyWTpudW1iZXIgPSAwO1xuICAgIHB1YmxpYyBldWxlclo6bnVtYmVyID0gMDtcbiAgICBcbn1cbiJdfQ==