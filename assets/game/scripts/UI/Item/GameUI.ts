
import { ListenerManager } from "../../../../frame/scripts/Manager/ListenerManager";
import { SoundManager } from "../../../../frame/scripts/Manager/SoundManager";
import { SyncDataManager } from "../../../../frame/scripts/Manager/SyncDataManager";
import { EventType } from "../../Data/EventType";
import Cube from "./Cube";
import QiepianPanel from "./QiepianPanel";
import { SoundConfig } from "./SoundConfig";
import ThreeNode from "./ThreeDNode";

const { ccclass, property } = cc._decorator;

@ccclass
export default class GameUI extends cc.Component {

    @property(ThreeNode)
    private threeDNode: ThreeNode = null;
    @property(cc.Node)
    private qiepianNode: cc.Node = null;
    @property(cc.Prefab)
    private qiepianPanel_prefab: cc.Prefab = null;
    @property(cc.Node)
    private addMinus: cc.Node = null;
    @property(cc.Label)
    private lbl_xCount: cc.Label = null;
    @property(cc.Label)
    private lbl_yCount: cc.Label = null;
    @property(cc.Label)
    private lbl_zCount: cc.Label = null;
    @property(cc.Node)
    private img_huangbian: cc.Node[] = [];

    onLoad() {
        ListenerManager.on(EventType.CLICK_CUBE, this.handleClickCube, this);
    }

    onDestroy() {
        ListenerManager.off(EventType.CLICK_CUBE, this.handleClickCube, this)
    }

    public init() {
        this.lbl_xCount.string = SyncDataManager.getSyncData().customSyncData.xCount.toString();
        this.lbl_yCount.string = SyncDataManager.getSyncData().customSyncData.zCount.toString();
        this.lbl_zCount.string = SyncDataManager.getSyncData().customSyncData.yCount.toString();

        this.node.getChildByName("btnEnanleClick").getChildByName('disable').active = SyncDataManager.getSyncData().customSyncData.cubeOpened;
        this.node.getChildByName("btnEnanleClick").getChildByName('xuanzhong').active = SyncDataManager.getSyncData().customSyncData.enableClick;
        this.node.getChildByName("btnOpen").getChildByName('xuanzhong').active = SyncDataManager.getSyncData().customSyncData.cubeOpened;
        this.node.getChildByName("btnBack").getChildByName('disable').active = SyncDataManager.getSyncData().customSyncData.cubeClickArr.length <= 0;
        if (SyncDataManager.getSyncData().customSyncData.cubeOpened) {
            this.showQiepianPanel();
        }
    }

    private onClickBtnOpen() {
        SoundManager.stopSoundByName(SoundConfig.soudlist["点击音效"]);
        SoundManager.playEffect(SoundConfig.soudlist["点击音效"], false, false);
        this.addMinus.active = false;
        this.img_huangbian[0].active = false;
        this.img_huangbian[1].active = false;
        this.img_huangbian[2].active = false;
        if (!SyncDataManager.getSyncData().customSyncData.cubeOpened) {
            SyncDataManager.getSyncData().customSyncData.cubeOpened = true;
            ListenerManager.dispatch(EventType.CUBE_OPEN, true);
            this.showQiepianPanel();
            this.handleClickCube();
            this.node.getChildByName("btnEnanleClick").getChildByName('disable').active = true;
            this.node.getChildByName("btnEnanleClick").getChildByName('xuanzhong').active = false;
            this.node.getChildByName("btnOpen").getChildByName('xuanzhong').active = true;
            SyncDataManager.getSyncData().customSyncData.enableClick = false;
        } else {
            SyncDataManager.getSyncData().customSyncData.cubeOpened = false;
            ListenerManager.dispatch(EventType.CUBE_OPEN, false);
            this.qiepianNode.active = false;
            this.node.getChildByName("btnEnanleClick").getChildByName('disable').active = false;
            this.node.getChildByName("btnOpen").getChildByName('xuanzhong').active = false;
        }
    }

    private onClickReset() {
        SoundManager.stopSoundByName(SoundConfig.soudlist["点击音效"]);
        SoundManager.playEffect(SoundConfig.soudlist["点击音效"], false, false);
        SyncDataManager.getSyncData().customSyncData.cubeOpened = false;
        this.threeDNode.reset();
        this.qiepianNode.active = false;
        SyncDataManager.getSyncData().customSyncData.cubeClickArr = [];
        SyncDataManager.getSyncData().customSyncData.qiepianClickArr = [];
        this.node.getChildByName("btnBack").getChildByName('disable').active = true;
        this.node.getChildByName("btnOpen").getChildByName('xuanzhong').active = false;
    }

    private onClickBack() {
        SoundManager.stopSoundByName(SoundConfig.soudlist["点击音效"]);
        SoundManager.playEffect(SoundConfig.soudlist["点击音效"], false, false);
        this.addMinus.active = false;
        this.img_huangbian[0].active = false;
        this.img_huangbian[1].active = false;
        this.img_huangbian[2].active = false;
        if (SyncDataManager.getSyncData().customSyncData.cubeClickArr.length > 0) {
            SyncDataManager.getSyncData().customSyncData.cubeClickArr.pop();
            // for (let j = 0; j < this.qiepianNode.childrenCount; j++) {
            //     this.qiepianNode.children[j].getComponent(QiepianPanel).resetBlock();
            // }
            // for (let i = 0; i < SyncDataManager.getSyncData().customSyncData.cubeClickArr.length; i++) {
            //     for (let j = 0; j < this.qiepianNode.childrenCount; j++) {
            //         this.qiepianNode.children[j].getComponent(QiepianPanel).onHandleClickCube(SyncDataManager.getSyncData().customSyncData.cubeClickArr[i]);
            //     }
            // }
            this.cubeClickBack();
        }
    }

    private onClickEnanleClick() {
        SoundManager.stopSoundByName(SoundConfig.soudlist["点击音效"]);
        SoundManager.playEffect(SoundConfig.soudlist["点击音效"], false, false);
        this.addMinus.active = false;
        this.img_huangbian[0].active = false;
        this.img_huangbian[1].active = false;
        this.img_huangbian[2].active = false;
        SyncDataManager.getSyncData().customSyncData.enableClick = !SyncDataManager.getSyncData().customSyncData.enableClick;
        this.node.getChildByName("btnEnanleClick").getChildByName('xuanzhong').active = SyncDataManager.getSyncData().customSyncData.enableClick;
    }

    private cubeClickBack() {
        let cubeRootNode = this.threeDNode.node.getChildByName("cubeRootNode");
        for (let i = 0; i < cubeRootNode.childrenCount; i++) {
            cubeRootNode.children[i].getComponent(Cube).reset();
            for (let j = 0; j < SyncDataManager.getSyncData().customSyncData.cubeClickArr.length; j++) {
                cubeRootNode.children[i].getComponent(Cube).handleCubeClick(SyncDataManager.getSyncData().customSyncData.cubeClickArr[j], false);
            }
        }
        this.node.getChildByName("btnBack").getChildByName('disable').active = SyncDataManager.getSyncData().customSyncData.cubeClickArr.length <= 0;
    }

    private showQiepianPanel() {
        this.qiepianNode.active = true;
        this.qiepianNode.removeAllChildren();
        for (let i = 0; i < SyncDataManager.getSyncData().customSyncData.yCount; i++) {
            let qiepianPanel = cc.instantiate(this.qiepianPanel_prefab);
            qiepianPanel.parent = this.qiepianNode;
            qiepianPanel.getComponent(QiepianPanel).init(i);
        }
    }

    private handleClickCube() {
        // for (let i = 0; i < SyncDataManager.getSyncData().customSyncData.cubeClickArr.length; i++) {
        //     for (let j = 0; j < this.qiepianNode.childrenCount; j++) {
        //         this.qiepianNode.children[j].getComponent(QiepianPanel).onHandleClickCube(SyncDataManager.getSyncData().customSyncData.cubeClickArr[i]);
        //     }
        // }
        this.node.getChildByName("btnBack").getChildByName('disable').active = SyncDataManager.getSyncData().customSyncData.cubeClickArr.length <= 0;
    }

    private inputType: number = 0;
    private onClick_xCount() {
        this.addMinus.active = true;
        this.addMinus.x = -140;
        this.inputType = 0;
        this.handleBtnState(SyncDataManager.getSyncData().customSyncData.xCount);
        this.img_huangbian[0].active = true;
        this.img_huangbian[1].active = false;
        this.img_huangbian[2].active = false;
    }

    private onClick_yCount() {
        this.addMinus.active = true;
        this.addMinus.x = 0;
        this.inputType = 1;
        this.handleBtnState(SyncDataManager.getSyncData().customSyncData.zCount);
        this.img_huangbian[0].active = false;
        this.img_huangbian[1].active = true;
        this.img_huangbian[2].active = false;
    }

    private onClick_zCount() {
        this.addMinus.active = true;
        this.addMinus.x = 140;
        this.inputType = 2;
        this.handleBtnState(SyncDataManager.getSyncData().customSyncData.yCount);
        this.img_huangbian[0].active = false;
        this.img_huangbian[1].active = false;
        this.img_huangbian[2].active = true;
    }

    private onClickAdd() {
        if (this.inputType == 0 && SyncDataManager.getSyncData().customSyncData.xCount < 6) {
            SyncDataManager.getSyncData().customSyncData.xCount++;
            this.lbl_xCount.string = SyncDataManager.getSyncData().customSyncData.xCount.toString();
            this.handleBtnState(SyncDataManager.getSyncData().customSyncData.xCount);
        } else if (this.inputType == 1 && SyncDataManager.getSyncData().customSyncData.zCount < 6) {
            SyncDataManager.getSyncData().customSyncData.zCount++;
            this.lbl_yCount.string = SyncDataManager.getSyncData().customSyncData.zCount.toString();
            this.handleBtnState(SyncDataManager.getSyncData().customSyncData.zCount);
        } else if (this.inputType == 2 && SyncDataManager.getSyncData().customSyncData.yCount < 6) {
            SyncDataManager.getSyncData().customSyncData.yCount++;
            this.lbl_zCount.string = SyncDataManager.getSyncData().customSyncData.yCount.toString();
            this.handleBtnState(SyncDataManager.getSyncData().customSyncData.yCount);
        }
        this.threeDNode.reset();
        this.qiepianNode.active = false;
        this.init();
    }

    private onClickMinus() {
        if (this.inputType == 0 && SyncDataManager.getSyncData().customSyncData.xCount > 1) {
            SyncDataManager.getSyncData().customSyncData.xCount--;
            this.lbl_xCount.string = SyncDataManager.getSyncData().customSyncData.xCount.toString();
            this.handleBtnState(SyncDataManager.getSyncData().customSyncData.xCount);
        } else if (this.inputType == 1 && SyncDataManager.getSyncData().customSyncData.zCount > 1) {
            SyncDataManager.getSyncData().customSyncData.zCount--;
            this.lbl_yCount.string = SyncDataManager.getSyncData().customSyncData.zCount.toString();
            this.handleBtnState(SyncDataManager.getSyncData().customSyncData.zCount);
        } else if (this.inputType == 2 && SyncDataManager.getSyncData().customSyncData.yCount > 1) {
            SyncDataManager.getSyncData().customSyncData.yCount--;
            this.lbl_zCount.string = SyncDataManager.getSyncData().customSyncData.yCount.toString();
            this.handleBtnState(SyncDataManager.getSyncData().customSyncData.yCount);
        }
        this.threeDNode.reset();
        this.qiepianNode.active = false;
        this.init();
    }

    private handleBtnState(count: number) {
        if (count <= 1) {
            this.addMinus.getChildByName("btnMinusSize").getChildByName("Label").color = new cc.Color().fromHEX("#74BBF2");
        } else {
            this.addMinus.getChildByName("btnMinusSize").getChildByName("Label").color = new cc.Color().fromHEX("#2094EE");
        }

        if (count >= 6) {
            this.addMinus.getChildByName("btnAddSize").getChildByName("Label").color = new cc.Color().fromHEX("#74BBF2");
        } else {
            this.addMinus.getChildByName("btnAddSize").getChildByName("Label").color = new cc.Color().fromHEX("#2094EE");
        }
    }
}
