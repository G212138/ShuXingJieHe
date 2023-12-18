import { NetWork } from "../../../../frame/scripts/Http/NetWork";
import { ListenerManager } from "../../../../frame/scripts/Manager/ListenerManager";
import { SoundManager } from "../../../../frame/scripts/Manager/SoundManager";
import { SyncDataManager } from "../../../../frame/scripts/Manager/SyncDataManager";
import { EventType } from "../../Data/EventType";
import { SoundConfig } from "./SoundConfig";


const { ccclass, property } = cc._decorator;

@ccclass
export default class Cube extends cc.Component {
    //上面的面
    @property(cc.Node)
    private upFace: cc.Node = null;
    //下面的面
    @property(cc.Node)
    private downFace: cc.Node = null;
    //左面的面
    @property(cc.Node)
    private leftFace: cc.Node = null;
    //右面的面
    @property(cc.Node)
    private rightFace: cc.Node = null;
    //前面的面
    @property(cc.Node)
    private frontFace: cc.Node = null;
    //后面的面
    @property(cc.Node)
    private backFace: cc.Node = null;


    //方块的行列层索引
    private xIndex: number;
    private yIndex: number;
    private zIndex: number;

    private isHide: boolean = false;

    private initPos: cc.Vec3 = cc.v3();

    public init(xCount: number, yCount: number, zCount: number) {
        this.xIndex = xCount;
        this.yIndex = yCount;
        this.zIndex = zCount;
        this.initPos = this.node.position;
        this.onChangeColor();
    }

    private clickCube(clckName: string) {
        let enableClick = false;
        let data = { xIndex: null, yIndex: null, zIndex: null }
        switch (clckName) {
            case "up":
                enableClick = this.yIndex == 5;
                data.xIndex = this.xIndex;
                data.zIndex = this.zIndex;
                break;
            case "down":
                enableClick = this.yIndex == 0;
                data.xIndex = this.xIndex;
                data.zIndex = this.zIndex;
                break;
            case "left":
                enableClick = this.xIndex == 0;
                data.yIndex = this.yIndex;
                data.zIndex = this.zIndex;
                break;
            case "right":
                enableClick = this.xIndex == 5;
                data.yIndex = this.yIndex;
                data.zIndex = this.zIndex;
                break;
            case "front":
                enableClick = this.zIndex == 5;
                data.xIndex = this.xIndex;
                data.yIndex = this.yIndex;
                break;
            case "back":
                enableClick = this.zIndex == 0;
                data.xIndex = this.xIndex;
                data.yIndex = this.yIndex;
                break;
            default:
                break;
        }
        SyncDataManager.getSyncData().customSyncData.cubeClickArr.push(data);
        ListenerManager.dispatch(EventType.CLICK_CUBE, data);
    }

    public handleCubeClick(data: { xIndex: number, yIndex: number, zIndex: number }, isClick:boolean = true) {
        if (data.xIndex == null && data.yIndex == this.yIndex && data.zIndex == this.zIndex) {
            if (isClick) {
                SoundManager.stopSoundByName(SoundConfig.soudlist["打孔音效"]);
                SoundManager.playEffect(SoundConfig.soudlist["打孔音效"], false, false);
            }            
            this.isHide = true;
            this.node.active = false;
        } else if (data.yIndex == null && data.xIndex == this.xIndex && data.zIndex == this.zIndex) {
            if (isClick) {
                SoundManager.stopSoundByName(SoundConfig.soudlist["打孔音效"]);
                SoundManager.playEffect(SoundConfig.soudlist["打孔音效"], false, false);
            }
            this.isHide = true;
            this.node.active = false;
        } else if (data.zIndex == null && data.xIndex == this.xIndex && data.yIndex == this.yIndex) {
            if (isClick) {
                SoundManager.stopSoundByName(SoundConfig.soudlist["打孔音效"]);
                SoundManager.playEffect(SoundConfig.soudlist["打孔音效"], false, false);
            }
            this.isHide = true;
            this.node.active = false;
        }
    }

    public handleOpen(pos: { x: number, y: number, z: number }) {
        this.node.setPosition(pos.x, pos.y, pos.z);
    }

    public handleClose() {
        this.node.setPosition(this.initPos);
    }

    public reset() {
        this.isHide = false;
        this.node.active = true;
    }

    private onChangeColor() {
        if (this.xIndex == 0) {
            let material = this.leftFace.getComponent(cc.MeshRenderer).getMaterial(0);
            let color = new cc.Color().fromHEX("#2DB97A");
            material.setProperty("diffuseColor", color, 0)
        }
        if (this.xIndex == SyncDataManager.getSyncData().customSyncData.xCount - 1) {
            let material = this.rightFace.getComponent(cc.MeshRenderer).getMaterial(0);
            let color = new cc.Color().fromHEX("#2DB97A");
            material.setProperty("diffuseColor", color, 0)
        }
        if (this.yIndex == 0) {
            let material = this.downFace.getComponent(cc.MeshRenderer).getMaterial(0);
            let color = new cc.Color().fromHEX("#2DB97A");
            material.setProperty("diffuseColor", color, 0)
        }
        if (this.yIndex == SyncDataManager.getSyncData().customSyncData.yCount - 1) {
            let material = this.upFace.getComponent(cc.MeshRenderer).getMaterial(0);
            let color = new cc.Color().fromHEX("#2DB97A");
            material.setProperty("diffuseColor", color, 0)
        }
        if (this.zIndex == 0) {
            let material = this.backFace.getComponent(cc.MeshRenderer).getMaterial(0);
            let color = new cc.Color().fromHEX("#2DB97A");
            material.setProperty("diffuseColor", color, 0)
        }
        if (this.zIndex == SyncDataManager.getSyncData().customSyncData.zCount - 1) {
            let material = this.frontFace.getComponent(cc.MeshRenderer).getMaterial(0);
            let color = new cc.Color().fromHEX("#2DB97A");
            material.setProperty("diffuseColor", color, 0)
        }
    }


}
