
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game/scripts/Data/ConstValue.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZVxcc2NyaXB0c1xcRGF0YVxcQ29uc3RWYWx1ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQUFBO0lBWUEsQ0FBQztJQVgwQixzQkFBVyxHQUFHLElBQUksQ0FBQyxDQUFDLDBCQUEwQjtJQUM5QyxxQkFBVSxHQUFHLElBQUksQ0FBQyxDQUFDLFVBQVU7SUFDN0Isd0JBQWEsR0FBRyw4QkFBOEIsQ0FBQyxDQUFDLHVDQUF1QztJQUN2RixtQkFBUSxHQUFHLGlCQUFpQixDQUFDLENBQUMsNkJBQTZCO0lBQzNELGtCQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsaUJBQWlCO0lBRXJELGtEQUFrRDtJQUMzQiw4QkFBbUIsR0FBRyxJQUFJLENBQUMsQ0FBQSxjQUFjO0lBQ3pDLDhCQUFtQixHQUFHLEtBQUssQ0FBQyxDQUFBLFlBQVk7SUFDeEMsc0NBQTJCLEdBQUcsSUFBSSxDQUFDLENBQUEsaUJBQWlCO0lBRS9FLGlCQUFDO0NBWkQsQUFZQyxJQUFBO0FBWlksZ0NBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQ29uc3RWYWx1ZSB7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IElTX0VESVRJT05TID0gdHJ1ZTsgLy/mmK/lkKbkuLrlj5HluIPniYjmnKzvvIznlKjkuo7mlbDmja7kuIrmiqUg5Y+KIGxvZ+i+k+WHuuaOp+WItlxyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBJU19URUFDSEVSID0gdHJ1ZTsgLy/mmK/lkKbkuLrmlZnluIjnq6/niYjmnKxcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQ291cnNld2FyZUtleSA9ICdEYURvbmdRaWVQaWFuX2FkZnNkc2Vkd3hsamlrJzsgLy/mr4/kuKror77ku7bllK/kuIDnmoRrZXkg5bel56iL5ZCNKzE05L2N6ZqP5py65a2X56ym5Liy44CC77yI6ISa5pys5Yib5bu65bel56iL5pe26Ieq5Yqo55Sf5oiQ77yJXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEdhbWVOYW1lID0gJzIwMjNfNeWvkl8y6K6yX+aJk+a0nuWIh+eJhyc7IC8v5ri45oiP5ZCN5Lit5paH5o+P6L+w77yM55So5LqO5pWw5o2u5LiK5oqlICDvvIjohJrmnKzliJvlu7rlt6XnqIvml7bovpPlhaXvvIlcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgU3ViamVjdCA9IDE7IC8v5a2m56eR77yIMeeQhuenkSAy6K+t5paHIDPoi7Hor63vvIlcclxuXHJcbiAgICAvKiogLS0tLS0tLS0tLS0tLS0tLS0tLee8lui+keWZqOm7mOiupOmAiemhueaYr+WQpuWxleekui0tLS0tLS0tLS0tLS0gKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgRWRpdG9yX0NhblNob3dTdGFycyA9IHRydWU7Ly/mmK/lkKblsZXnpLrmmJ/nuqfor4TliKTlvIDlhbMgIFxyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBFZGl0b3JfQ2FuU2hvd0d1aWRlID0gZmFsc2U7Ly/mmK/lkKblsZXnpLrlvJXlr7zlvIDlhbMgIFxyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBFZGl0b3JfQ2FuU2hvd0F1dG9QbGF5VGl0bGUgPSB0cnVlOy8v5piv5ZCm5bGV56S66Ieq5Yqo5pKt5pS+5qCH6aKY6Z+z5pWI5byA5YWzIFxyXG4gICAgLyoqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0t5ri45oiP54us5pyJ5Lia5Yqh5pWw5o2uLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbn1cclxuIl19