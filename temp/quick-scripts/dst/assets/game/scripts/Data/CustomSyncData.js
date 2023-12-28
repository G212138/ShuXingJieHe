
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
        this.count = 2;
        this.eulerX = 0;
        this.eulerY = -15;
        this.eulerZ = 0;
        this.curIndex = 0;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZVxcc2NyaXB0c1xcRGF0YVxcQ3VzdG9tU3luY0RhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7OztHQUdHO0FBQ0g7SUFBQTtRQUNXLGFBQVEsR0FBVyxDQUFDLENBQUMsQ0FBQyxjQUFjO1FBQzNDLFdBQVc7UUFDSixVQUFLLEdBQVcsQ0FBQyxDQUFDO1FBQ2xCLFdBQU0sR0FBVSxDQUFDLENBQUM7UUFDbEIsV0FBTSxHQUFVLENBQUMsRUFBRSxDQUFDO1FBQ3BCLFdBQU0sR0FBVSxDQUFDLENBQUM7UUFFbEIsYUFBUSxHQUFXLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBQUQscUJBQUM7QUFBRCxDQVRBLEFBU0MsSUFBQTtBQVRZLHdDQUFjIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbi8qKlxuICog6ZyA6KaB5ZCM5q2l55qE6Ieq5a6a5LmJ5pWw5o2uXG4gKiDmuLjmiI/kuJrliqHlsYLlkIzmraXmlbDmja7lnKjov5nph4zmt7vliqBcbiAqL1xuZXhwb3J0IGNsYXNzIEN1c3RvbVN5bmNEYXRhIHtcbiAgICBwdWJsaWMgY3VyTGV2ZWw6IG51bWJlciA9IDA7IC8vIOW9k+WJjeWFs+WNoSjnrKzkuIDlhbPkuLowKVxuICAgIC8vIFRPRE8g6Ieq5a6a5LmJXG4gICAgcHVibGljIGNvdW50OiBudW1iZXIgPSAyO1xuICAgIHB1YmxpYyBldWxlclg6bnVtYmVyID0gMDtcbiAgICBwdWJsaWMgZXVsZXJZOm51bWJlciA9IC0xNTtcbiAgICBwdWJsaWMgZXVsZXJaOm51bWJlciA9IDA7XG5cbiAgICBwdWJsaWMgY3VySW5kZXg6IG51bWJlciA9IDA7XG59XG4iXX0=