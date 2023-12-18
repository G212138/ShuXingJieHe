import { ListenerManager } from '../../../../frame/scripts/Manager/ListenerManager';
import { SyncData } from '../../../../frame/scripts/Manager/SyncDataManager';
import BaseGamePanel from '../../../../frame/scripts/UI/Panel/BaseGamePanel';
import { ConstValue } from '../../Data/ConstValue';
import { EventType } from '../../Data/EventType';
import { NetWork } from '../../../../frame/scripts/Http/NetWork';
import { T2M } from '../../../../frame/scripts/SDK/T2M';

const { ccclass, property } = cc._decorator;

@ccclass
export default class GamePanel extends BaseGamePanel {
    public static className = 'GamePanel';

    start() {
        super.start();
    }

    onDestroy() {
        super.onDestroy();
    }

    /**
     * 游戏入口
     * 这里已经拿到数据
     */
    protected setPanel() {
        super.setPanel();
        // TODO 业务逻辑
        let mainCamera = cc.find("Canvas/Main Camera").getComponent(cc.Camera)
        let bg = mainCamera.getComponent(cc.Sprite)
        bg.enabled = false
        mainCamera.clearFlags = cc.Camera.ClearFlags.DEPTH | cc.Camera.ClearFlags.STENCIL;
        ListenerManager.dispatch(EventType.ENTER_GAME);
    }

    /**
     * 心跳回调（当actionId不相等时才会触发）
     * 数据恢复，重绘画面
     * @param recovery
     */
    protected onRecoveryData(recovery: SyncData): void {
        super.onRecoveryData(recovery);
        ListenerManager.dispatch(EventType.GAME_RECONNECT);
    }

    /**
     * 作答正确
     * 父类实现了数据上报
     * @param isCurLevelFinish 本关是否完成
     */
    protected answerRight(isCurLevelFinish: boolean) {
        super.answerRight(isCurLevelFinish);
    }

    /**
     * 作答错误
     * 父类实现了数据上报
     * @param isCurLevelFinish 本关是否完成
     */
    protected answerWrong(isCurLevelFinish: boolean = false) {
        super.answerWrong(isCurLevelFinish);
    }

    /**
     * 游戏结束
     * 父类实现了结算界面（游戏结束或星级评判）的弹出
     */
    protected gameOver() {
        super.gameOver();
    }

    /**
     * 重玩
     */
    protected onReplay() {
        super.onReplay();
    }

    update(dt) {
        super.update(dt);
    }
}
