"use strict";
cc._RF.push(module, 'b2ee0BC2l1Pp47nuM279OIO', 'ConstValue');
// game/scripts/Data/ConstValue.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConstValue = void 0;
var ConstValue = /** @class */ (function () {
    function ConstValue() {
    }
    ConstValue.IS_EDITIONS = true; //是否为发布版本，用于数据上报 及 log输出控制
    ConstValue.IS_TEACHER = true; //是否为教师端版本
    ConstValue.CoursewareKey = 'DaDongQiePian_adfsdsedwxljik'; //每个课件唯一的key 工程名+14位随机字符串。（脚本创建工程时自动生成）
    ConstValue.GameName = '2023_5寒_2讲_打洞切片'; //游戏名中文描述，用于数据上报  （脚本创建工程时输入）
    ConstValue.Subject = 1; //学科（1理科 2语文 3英语）
    /** -------------------编辑器默认选项是否展示------------- */
    ConstValue.Editor_CanShowStars = true; //是否展示星级评判开关  
    ConstValue.Editor_CanShowGuide = false; //是否展示引导开关  
    ConstValue.Editor_CanShowAutoPlayTitle = true; //是否展示自动播放标题音效开关 
    return ConstValue;
}());
exports.ConstValue = ConstValue;

cc._RF.pop();