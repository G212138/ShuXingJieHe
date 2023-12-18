
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/frame/scripts/UI/Panel/BaseTeacherPanel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '87818Dli8JHk4taZSHeRBG9', 'BaseTeacherPanel');
// frame/scripts/UI/Panel/BaseTeacherPanel.ts

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
var ConstValue_1 = require("../../../../game/scripts/Data/ConstValue");
var NetWork_1 = require("../../Http/NetWork");
var UIHelp_1 = require("../../Utils/UIHelp");
var BaseUI_1 = require("../BaseUI");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BaseTeacherPanel = /** @class */ (function (_super) {
    __extends(BaseTeacherPanel, _super);
    function BaseTeacherPanel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BaseTeacherPanel.prototype.onLoad = function () { };
    BaseTeacherPanel.prototype.start = function () {
        this.data.node.parent.removeChild(this.data.node);
        this.getNet();
        UIHelp_1.UIHelp.closeRecoverMask();
    };
    BaseTeacherPanel.prototype.setPanel = function () { };
    BaseTeacherPanel.prototype.getNet = function () {
        var _this = this;
        NetWork_1.NetWork.httpRequest(NetWork_1.NetWork.GET_TITLE + '?title_id=' + NetWork_1.NetWork.titleId, 'GET', 'application/json;charset=utf-8', function (err, response) {
            console.log('消息返回' + response);
            if (!err) {
                var res = response;
                if (Array.isArray(res.data)) {
                    _this.setPanel();
                    return;
                }
                var content = JSON.parse(res.data.courseware_content);
                NetWork_1.NetWork.coursewareId = res.data.courseware_id;
                if (NetWork_1.NetWork.empty) {
                    //如果URL里面带了empty参数 并且为true  就立刻清除数据
                    _this.ClearNet();
                }
                else {
                    if (content != null) {
                        if (content.CoursewareKey != ConstValue_1.ConstValue.CoursewareKey) {
                            UIHelp_1.UIHelp.showErrorPanel('该titleId已被使用,请联系技术老师解决！\ntitleId=' + NetWork_1.NetWork.titleId, '', '', '确定');
                            return;
                        }
                        // 如果编辑器数据修改 先注释掉此行
                        // EditorManager.setData(content.data);//test
                        _this.setPanel();
                    }
                    else {
                        _this.setPanel();
                    }
                }
            }
        }, null);
    };
    //删除课件数据  一般为脏数据清理
    BaseTeacherPanel.prototype.ClearNet = function () {
        var jsonData = { courseware_id: NetWork_1.NetWork.coursewareId };
        NetWork_1.NetWork.httpRequest(NetWork_1.NetWork.CLEAR, 'POST', 'application/json;charset=utf-8', function (err, response) {
            if (!err) {
                UIHelp_1.UIHelp.showTip('答案删除成功');
            }
        }, JSON.stringify(jsonData));
    };
    BaseTeacherPanel.className = 'BaseTeacherPanel';
    BaseTeacherPanel = __decorate([
        ccclass
    ], BaseTeacherPanel);
    return BaseTeacherPanel;
}(BaseUI_1.BaseUI));
exports.default = BaseTeacherPanel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWVcXHNjcmlwdHNcXFVJXFxQYW5lbFxcQmFzZVRlYWNoZXJQYW5lbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1RUFBc0U7QUFFdEUsOENBQTZDO0FBQzdDLDZDQUE0QztBQUM1QyxvQ0FBbUM7QUFFN0IsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBOEMsb0NBQU07SUFBcEQ7O0lBc0VBLENBQUM7SUFwRUcsaUNBQU0sR0FBTixjQUFVLENBQUM7SUFFWCxnQ0FBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNkLGVBQU0sQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFFTSxtQ0FBUSxHQUFmLGNBQW1CLENBQUM7SUFFWixpQ0FBTSxHQUFkO1FBQUEsaUJBd0NDO1FBdkNHLGlCQUFPLENBQUMsV0FBVyxDQUNmLGlCQUFPLENBQUMsU0FBUyxHQUFHLFlBQVksR0FBRyxpQkFBTyxDQUFDLE9BQU8sRUFDbEQsS0FBSyxFQUNMLGdDQUFnQyxFQUNoQyxVQUFDLEdBQUcsRUFBRSxRQUFRO1lBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLENBQUM7WUFDL0IsSUFBSSxDQUFDLEdBQUcsRUFBRTtnQkFDTixJQUFJLEdBQUcsR0FBRyxRQUFRLENBQUM7Z0JBQ25CLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7b0JBQ3pCLEtBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztvQkFDaEIsT0FBTztpQkFDVjtnQkFDRCxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztnQkFDdEQsaUJBQU8sQ0FBQyxZQUFZLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7Z0JBQzlDLElBQUksaUJBQU8sQ0FBQyxLQUFLLEVBQUU7b0JBQ2YsbUNBQW1DO29CQUNuQyxLQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7aUJBQ25CO3FCQUFNO29CQUNILElBQUksT0FBTyxJQUFJLElBQUksRUFBRTt3QkFDakIsSUFBSSxPQUFPLENBQUMsYUFBYSxJQUFJLHVCQUFVLENBQUMsYUFBYSxFQUFFOzRCQUNuRCxlQUFNLENBQUMsY0FBYyxDQUNqQixtQ0FBbUMsR0FBRyxpQkFBTyxDQUFDLE9BQU8sRUFDckQsRUFBRSxFQUNGLEVBQUUsRUFDRixJQUFJLENBQ1AsQ0FBQzs0QkFDRixPQUFPO3lCQUNWO3dCQUNELG1CQUFtQjt3QkFDbkIsNkNBQTZDO3dCQUM3QyxLQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7cUJBQ25CO3lCQUFNO3dCQUNILEtBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztxQkFDbkI7aUJBQ0o7YUFDSjtRQUNMLENBQUMsRUFDRCxJQUFJLENBQ1AsQ0FBQztJQUNOLENBQUM7SUFFRCxrQkFBa0I7SUFDbEIsbUNBQVEsR0FBUjtRQUNJLElBQUksUUFBUSxHQUFHLEVBQUUsYUFBYSxFQUFFLGlCQUFPLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDdkQsaUJBQU8sQ0FBQyxXQUFXLENBQ2YsaUJBQU8sQ0FBQyxLQUFLLEVBQ2IsTUFBTSxFQUNOLGdDQUFnQyxFQUNoQyxVQUFDLEdBQUcsRUFBRSxRQUFRO1lBQ1YsSUFBSSxDQUFDLEdBQUcsRUFBRTtnQkFDTixlQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQzVCO1FBQ0wsQ0FBQyxFQUNELElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQzNCLENBQUM7SUFDTixDQUFDO0lBbkVhLDBCQUFTLEdBQUcsa0JBQWtCLENBQUM7SUFENUIsZ0JBQWdCO1FBRHBDLE9BQU87T0FDYSxnQkFBZ0IsQ0FzRXBDO0lBQUQsdUJBQUM7Q0F0RUQsQUFzRUMsQ0F0RTZDLGVBQU0sR0FzRW5EO2tCQXRFb0IsZ0JBQWdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uc3RWYWx1ZSB9IGZyb20gJy4uLy4uLy4uLy4uL2dhbWUvc2NyaXB0cy9EYXRhL0NvbnN0VmFsdWUnO1xuaW1wb3J0IHsgRWRpdG9yTWFuYWdlciB9IGZyb20gJy4uLy4uLy4uLy4uL2dhbWUvc2NyaXB0cy9NYW5hZ2VyL0VkaXRvck1hbmFnZXInO1xuaW1wb3J0IHsgTmV0V29yayB9IGZyb20gJy4uLy4uL0h0dHAvTmV0V29yayc7XG5pbXBvcnQgeyBVSUhlbHAgfSBmcm9tICcuLi8uLi9VdGlscy9VSUhlbHAnO1xuaW1wb3J0IHsgQmFzZVVJIH0gZnJvbSAnLi4vQmFzZVVJJztcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2VUZWFjaGVyUGFuZWwgZXh0ZW5kcyBCYXNlVUkge1xuICAgIHB1YmxpYyBzdGF0aWMgY2xhc3NOYW1lID0gJ0Jhc2VUZWFjaGVyUGFuZWwnO1xuICAgIG9uTG9hZCgpIHt9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgdGhpcy5kYXRhLm5vZGUucGFyZW50LnJlbW92ZUNoaWxkKHRoaXMuZGF0YS5ub2RlKTtcbiAgICAgICAgdGhpcy5nZXROZXQoKTtcbiAgICAgICAgVUlIZWxwLmNsb3NlUmVjb3Zlck1hc2soKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0UGFuZWwoKSB7fVxuXG4gICAgcHJpdmF0ZSBnZXROZXQoKSB7XG4gICAgICAgIE5ldFdvcmsuaHR0cFJlcXVlc3QoXG4gICAgICAgICAgICBOZXRXb3JrLkdFVF9USVRMRSArICc/dGl0bGVfaWQ9JyArIE5ldFdvcmsudGl0bGVJZCxcbiAgICAgICAgICAgICdHRVQnLFxuICAgICAgICAgICAgJ2FwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtOCcsXG4gICAgICAgICAgICAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfmtojmga/ov5Tlm54nICsgcmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgIGlmICghZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSByZXNwb25zZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocmVzLmRhdGEpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFBhbmVsKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbGV0IGNvbnRlbnQgPSBKU09OLnBhcnNlKHJlcy5kYXRhLmNvdXJzZXdhcmVfY29udGVudCk7XG4gICAgICAgICAgICAgICAgICAgIE5ldFdvcmsuY291cnNld2FyZUlkID0gcmVzLmRhdGEuY291cnNld2FyZV9pZDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKE5ldFdvcmsuZW1wdHkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8v5aaC5p6cVVJM6YeM6Z2i5bim5LqGZW1wdHnlj4LmlbAg5bm25LiU5Li6dHJ1ZSAg5bCx56uL5Yi75riF6Zmk5pWw5o2uXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkNsZWFyTmV0KCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29udGVudCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbnRlbnQuQ291cnNld2FyZUtleSAhPSBDb25zdFZhbHVlLkNvdXJzZXdhcmVLZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVUlIZWxwLnNob3dFcnJvclBhbmVsKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ+ivpXRpdGxlSWTlt7Looqvkvb/nlKgs6K+36IGU57O75oqA5pyv6ICB5biI6Kej5Yaz77yBXFxudGl0bGVJZD0nICsgTmV0V29yay50aXRsZUlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICfnoa7lrponLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOWmguaenOe8lui+keWZqOaVsOaNruS/ruaUuSDlhYjms6jph4rmjonmraTooYxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBFZGl0b3JNYW5hZ2VyLnNldERhdGEoY29udGVudC5kYXRhKTsvL3Rlc3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFBhbmVsKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0UGFuZWwoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBudWxsLFxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8v5Yig6Zmk6K++5Lu25pWw5o2uICDkuIDoiKzkuLrohI/mlbDmja7muIXnkIZcbiAgICBDbGVhck5ldCgpIHtcbiAgICAgICAgbGV0IGpzb25EYXRhID0geyBjb3Vyc2V3YXJlX2lkOiBOZXRXb3JrLmNvdXJzZXdhcmVJZCB9O1xuICAgICAgICBOZXRXb3JrLmh0dHBSZXF1ZXN0KFxuICAgICAgICAgICAgTmV0V29yay5DTEVBUixcbiAgICAgICAgICAgICdQT1NUJyxcbiAgICAgICAgICAgICdhcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTgnLFxuICAgICAgICAgICAgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIWVycikge1xuICAgICAgICAgICAgICAgICAgICBVSUhlbHAuc2hvd1RpcCgn562U5qGI5Yig6Zmk5oiQ5YqfJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KGpzb25EYXRhKSxcbiAgICAgICAgKTtcbiAgICB9XG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==