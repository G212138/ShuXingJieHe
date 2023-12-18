import { NetWork } from "../../../../frame/scripts/Http/NetWork";
import { ListenerManager } from "../../../../frame/scripts/Manager/ListenerManager";
import { SyncDataManager } from "../../../../frame/scripts/Manager/SyncDataManager";
import { T2M } from "../../../../frame/scripts/SDK/T2M";
import { EventType } from "../../Data/EventType";
import Cube from "../Item/Cube";
import GameUI from "../Item/GameUI";
import ThreeNode from "../Item/ThreeDNode";

const { ccclass, property } = cc._decorator;

@ccclass
export default class GameLayer extends cc.Component {
    @property(ThreeNode)
    private threeDNode: ThreeNode = null;
    @property(GameUI)
    private gameUI: GameUI = null;

    @property(cc.Node)
    private threeDCamera: cc.Node = null;
    @property(cc.Node)
    private cubeRootNode: cc.Node = null;
    @property(cc.Node)
    private addMinus: cc.Node = null;
    @property(cc.Node)
    private img_huangbian: cc.Node[] = [];

    private touchEventId: number;

    onLoad() {
        ListenerManager.on(EventType.ENTER_GAME, this.handleEnterGame, this);
        ListenerManager.on(EventType.GAME_RECONNECT, this.handleEnterGame, this);

        T2M.addSyncEventListener(EventType.DRAG_END, this.handleDragEnd.bind(this));
        // this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this)
        // this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this)
        // this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this)
    }
    onDestroy() {
        ListenerManager.off(EventType.ENTER_GAME, this.handleEnterGame, this);
        ListenerManager.off(EventType.GAME_RECONNECT, this.handleEnterGame, this);

        T2M.removeSyncEventListener(EventType.DRAG_END);
        // this.node.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this)
        // this.node.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this)
        // this.node.off(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this)
    }

    private handleEnterGame() {
        this.threeDNode.init();
        this.gameUI.init();

        let eulerX = SyncDataManager.getSyncData().customSyncData.eulerX;
        let eulerY = SyncDataManager.getSyncData().customSyncData.eulerY;
        let eulerZ = SyncDataManager.getSyncData().customSyncData.eulerZ;
        let rotation = cc.quat();
        cc.Quat.fromEuler(rotation, eulerX, eulerY, eulerZ);
        this.cubeRootNode.setRotation(rotation);
    }

    private onDragStart(data) {
        this.addMinus.active = false;
        this.img_huangbian[0].active = false;
        this.img_huangbian[1].active = false;
        this.img_huangbian[2].active = false;
    }

    private onDragMove(data) {
        let pos = data.target.parent.convertToWorldSpaceAR(cc.v2(data.pos.x, data.pos.y));
        let prevPos = data.target.parent.convertToWorldSpaceAR(cc.v2(data.prevLocation.x, data.prevLocation.y));
        let prevLocation = cc.v2(prevPos.x, prevPos.y);
        let curLocation = cc.v2(pos.x, pos.y);

        let vel = curLocation.sub(prevLocation);
        let disX = vel.x;
        let disY = vel.y;

        let eulerX = this.cubeRootNode.eulerAngles.x;
        let eulerY = this.cubeRootNode.eulerAngles.y;
        let eulerZ = this.cubeRootNode.eulerAngles.z;
        let quat = new cc.Quat()
        cc.Quat.fromEuler(quat, eulerX, eulerY, eulerZ)
        let changed = false;
        let dot = vel.normalize().dot(cc.Vec2.RIGHT);
        let rotateByUp = Math.abs(dot) > Math.cos(cc.misc.degreesToRadians(45));
        if ( rotateByUp) {
            let angle = (disX / 2436 * 360);
            // eulerY += angle
            cc.Quat.rotateAround(quat, quat, cc.Vec3.UP, cc.misc.degreesToRadians(angle))
            changed = true
        }
        if ( !rotateByUp) {
            let angle = -(disY / 2436 * 720);
            // eulerX += angle
            cc.Quat.rotateAround(quat, quat, this.threeDCamera.right, cc.misc.degreesToRadians(angle))
            changed = true
        }

        if (changed) {
            let outEuler = cc.v3()
            quat.toEuler(outEuler)
            this.onChangeBigCubeEuler(outEuler.x, outEuler.y, outEuler.z)
        }




        // let dif = data.target.parent.convertToWorldSpaceAR(cc.v2(data.delta.x, data.delta.y));
        // let q_tmp = new cc.Quat();
        // let v_tmp = cc.v3(-dif.y, dif.x, 0);
        // v_tmp.normalizeSelf();
        // let eulerX = this.cubeRootNode.eulerAngles.x;
        // let eulerY = this.cubeRootNode.eulerAngles.y;
        // let eulerZ = this.cubeRootNode.eulerAngles.z;
        // let quat = new cc.Quat()
        // cc.Quat.fromEuler(quat, eulerX, eulerY, eulerZ)
        // let out_Q = cc.Quat.rotateAround(q_tmp, quat, v_tmp, Math.PI * 0.007);
        // this.cubeRootNode.setRotation(out_Q.x, out_Q.y, out_Q.z, out_Q.w);
    }

    private onDragEnd(data) {
        if (data.isClick) {
            this.addMinus.active = false;
            this.img_huangbian[0].active = false;
            this.img_huangbian[1].active = false;
            this.img_huangbian[2].active = false;
        }
        this.node.position = cc.Vec3.ZERO;
        if (data.isClick && SyncDataManager.getSyncData().customSyncData.enableClick) {
            let pos = data.target.parent.convertToWorldSpaceAR(cc.v2(data.pos.x, data.pos.y));
            let location = cc.v2(pos.x, pos.y);
            let ray = this.threeDCamera.getComponent(cc.Camera).getRay(location);
            let results = cc.geomUtils.intersect.raycast(this.cubeRootNode, ray, null, null);
            for (let i = 0; i < results.length; i++) {
                if (results[0].node.parent.getComponent(Cube) && results[1]) {
                    results[0].node.parent.getComponent(Cube).clickCube(results[1].node.name);
                }
                return;
            }
        }

        if (NetWork.isMaster || !NetWork.isSync) {
            let data = {
                eulerX: SyncDataManager.getSyncData().customSyncData.eulerX,
                eulerY: SyncDataManager.getSyncData().customSyncData.eulerY,
                eulerZ: SyncDataManager.getSyncData().customSyncData.eulerZ
            }
            T2M.dispatch(EventType.DRAG_END, data);
        }
    }

    private onChangeBigCubeEuler(eulerX: number, eulerY: number, eulerZ: number) {
        let rotation = cc.quat();
        cc.Quat.fromEuler(rotation, eulerX, eulerY, eulerZ);
        SyncDataManager.getSyncData().customSyncData.eulerX = eulerX;
        SyncDataManager.getSyncData().customSyncData.eulerY = eulerY;
        SyncDataManager.getSyncData().customSyncData.eulerZ = eulerZ;
        this.cubeRootNode.setRotation(rotation);
    }

    private handleDragEnd(data: any) {
        let rotation = cc.quat();
        cc.Quat.fromEuler(rotation, data.eulerX, data.eulerY, data.eulerZ);
        this.cubeRootNode.setRotation(rotation);
        //将this.cubeRootNode的轴重置为世界坐标系的轴
        // let euler = this.cubeRootNode.eulerAngles;
        // let quat = new cc.Quat()
        // cc.Quat.fromEuler(quat, euler.x, euler.y, euler.z)
        // let outEuler = cc.v3()
        // quat.toEuler(outEuler)
        // this.onChangeBigCubeEuler(outEuler.x, outEuler.y, outEuler.z)
    }
}
