import { ListenerManager } from "../../../../frame/scripts/Manager/ListenerManager";
import { SyncDataManager } from "../../../../frame/scripts/Manager/SyncDataManager";
import { EventType } from "../../Data/EventType";
import Cube from "./Cube";

const { ccclass, property } = cc._decorator;

@ccclass
export default class ThreeNode extends cc.Component {
    @property(cc.Prefab)
    private cubePrefab: cc.Prefab = null;
    @property(cc.Node)
    private cubeRootNode: cc.Node = null;

    private touchEventId: number;

    onLoad() {
        ListenerManager.on(EventType.CUBE_OPEN, this.onCubeOpen, this);
        ListenerManager.on(EventType.CLICK_CUBE, this.onClickCube, this);
    }

    onDestroy() {
        ListenerManager.off(EventType.CUBE_OPEN, this.onCubeOpen, this);
        ListenerManager.off(EventType.CLICK_CUBE, this.onClickCube, this)
    }

    public init() {
        this.initBigCube();
        this.onCubeOpen(SyncDataManager.getSyncData().customSyncData.cubeOpened);
        for (let i = 0; i < SyncDataManager.getSyncData().customSyncData.cubeClickArr.length; i++) {
            this.onClickCube(SyncDataManager.getSyncData().customSyncData.cubeClickArr[i]);
        }
    }

    public reset() {
        let quat = new cc.Quat()
        cc.Quat.fromEuler(quat, 0, 45, 0)
        this.cubeRootNode.setRotation(quat);
        this.initBigCube();
        SyncDataManager.getSyncData().customSyncData.cubeClickArr = [];
        SyncDataManager.getSyncData().customSyncData.cubeOpened = false;
        SyncDataManager.getSyncData().customSyncData.qiepianClickArr = [];
    }

    //初始化大正方体
    private initBigCube() {
        let xCount = SyncDataManager.getSyncData().customSyncData.xCount;
        let yCount = SyncDataManager.getSyncData().customSyncData.yCount;
        let zCount = SyncDataManager.getSyncData().customSyncData.zCount;
        this.changeBigCubeSize(xCount, yCount, zCount);
    }

    private changeBigCubeSize(xCount: number, yCount: number, zCount: number) {
        //先清空
        this.cubeRootNode.removeAllChildren();

        //创建xCount行yCount列zCount层的大正方体，并且以大正方体的中心点为原点
        let cubeWidth = 1;
        let cubeHeight = 1;
        let cubeLength = 1;
        let cubeDis = 0;
        let cubeXDis = cubeWidth + cubeDis;
        let cubeYDis = cubeHeight + cubeDis;
        let cubeZDis = cubeLength + cubeDis;
        let cubeXCount = xCount;
        let cubeYCount = yCount;
        let cubeZCount = zCount;
        let cubeXTotalDis = cubeXCount * cubeXDis;
        let cubeYTotalDis = cubeYCount * cubeYDis;
        let cubeZTotalDis = cubeZCount * cubeZDis;
        let cubeXStart = -cubeXTotalDis / 2 + cubeXDis / 2;
        let cubeYStart = -cubeYTotalDis / 2 + cubeYDis / 2;
        let cubeZStart = -cubeZTotalDis / 2 + cubeZDis / 2;
        for (let i = 0; i < cubeXCount; i++) {
            for (let j = 0; j < cubeYCount; j++) {
                for (let k = 0; k < cubeZCount; k++) {
                    let cubeNode = cc.instantiate(this.cubePrefab);
                    cubeNode.parent = this.cubeRootNode;
                    cubeNode.setPosition(cubeXStart + i * cubeXDis, cubeYStart + j * cubeYDis, cubeZStart + k * cubeZDis);
                    cubeNode.getComponent(Cube).init(i, j, k);
                }
            }
        }
    }

    private onCubeOpen(isOpen: boolean) {
        if (isOpen) {
            //将大正方体的按层分开一定距离
            let cubeWidth = 1;
            let cubeHeight = 1;
            let cubeLength = 1;
            let cubeDis = 0.8;
            let cubeXDis = cubeWidth;
            let cubeYDis = cubeHeight + cubeDis;
            let cubeZDis = cubeLength;
            let cubeXCount = SyncDataManager.getSyncData().customSyncData.xCount;
            let cubeYCount = SyncDataManager.getSyncData().customSyncData.yCount;
            let cubeZCount = SyncDataManager.getSyncData().customSyncData.zCount;
            let cubeXTotalDis = cubeXCount * cubeXDis;
            let cubeYTotalDis = cubeYCount * cubeYDis;
            let cubeZTotalDis = cubeZCount * cubeZDis;
            let cubeXStart = -cubeXTotalDis / 2 + cubeXDis / 2;
            let cubeYStart = -cubeYTotalDis / 2 + cubeYDis / 2;
            let cubeZStart = -cubeZTotalDis / 2 + cubeZDis / 2;
            let openPosArr = [];
            for (let i = 0; i < cubeXCount; i++) {
                for (let j = 0; j < cubeYCount; j++) {
                    for (let k = 0; k < cubeZCount; k++) {
                        openPosArr.push({ x: cubeXStart + i * cubeXDis, y: cubeYStart + j * cubeYDis, z: cubeZStart + k * cubeZDis });
                    }
                }
            }
            for (let i = 0; i < this.cubeRootNode.children.length; i++) {
                let cubeNode = this.cubeRootNode.children[i];
                cubeNode.getComponent(Cube).handleOpen(openPosArr[i]);
            }
        } else {
            for (let i = 0; i < this.cubeRootNode.children.length; i++) {
                let cubeNode = this.cubeRootNode.children[i];
                cubeNode.getComponent(Cube).handleClose();
            }
        }
    }

    private onClickCube(data: { xIndex: number, yIndex: number, zIndex: number }) {
        for (let i = 0; i < this.cubeRootNode.children.length; i++) {
            let cubeNode = this.cubeRootNode.children[i];
            cubeNode.getComponent(Cube).handleCubeClick(data);
        }
    }
}
