
import { SoundManager } from "../../../../frame/scripts/Manager/SoundManager";
import { SyncDataManager } from "../../../../frame/scripts/Manager/SyncDataManager";
import { SoundConfig } from "./SoundConfig";
import ThreeNode from "./ThreeDNode";

const { ccclass, property } = cc._decorator;

@ccclass
export default class GameUI extends cc.Component {

    @property(ThreeNode)
    private threeDNode: ThreeNode = null;
    @property(cc.Node)
    private addMinus: cc.Node = null;
    @property(cc.Node)
    private img_huangbian: cc.Node = null;
    @property(cc.Label)
    private lbl_count: cc.Label = null;
    @property(cc.Node)
    private sliderRotate: cc.Node = null;
    @property(cc.Node)
    private sliderMerge: cc.Node = null;

    onLoad() {

    }

    onDestroy() {

    }

    public init() {
        this.lbl_count.string = SyncDataManager.getSyncData().customSyncData.count.toString();
    }

    private inputType: number = 0;
    private onClick_count() {
        this.addMinus.active = !this.addMinus.active;
        this.img_huangbian.active = false;
        this.handleBtnState(SyncDataManager.getSyncData().customSyncData.count);
    }

    private onClickAdd() {
        if (SyncDataManager.getSyncData().customSyncData.count < 8) {
            SyncDataManager.getSyncData().customSyncData.count++;
            this.handleBtnState(SyncDataManager.getSyncData().customSyncData.count);
            this.threeDNode.init();
            this.init();
        }
    }

    private onClickMinus() {
        if (SyncDataManager.getSyncData().customSyncData.count > 2) {
            SyncDataManager.getSyncData().customSyncData.count--;
            this.handleBtnState(SyncDataManager.getSyncData().customSyncData.count);
            this.threeDNode.init();
            this.init();
        }
    }

    private handleBtnState(count: number) {
        if (count <= 2) {
            this.addMinus.getChildByName("btnMinusSize").getChildByName("Label").color = new cc.Color().fromHEX("#74BBF2");
        } else {
            this.addMinus.getChildByName("btnMinusSize").getChildByName("Label").color = new cc.Color().fromHEX("#2094EE");
        }

        if (count >= 8) {
            this.addMinus.getChildByName("btnAddSize").getChildByName("Label").color = new cc.Color().fromHEX("#74BBF2");
        } else {
            this.addMinus.getChildByName("btnAddSize").getChildByName("Label").color = new cc.Color().fromHEX("#2094EE");
        }
    }

    private onClickBtnCopy() {
        SoundManager.stopSoundByName(SoundConfig.soudlist["点击音效"]);
        SoundManager.playEffect(SoundConfig.soudlist["点击音效"], false, false);
        this.addMinus.active = false;
        this.threeDNode.showStep2();
        // this.node.getChildByName("btnCopy").getChildByName("disable").active = true;
    }

    private onClickRotate() {
        SoundManager.stopSoundByName(SoundConfig.soudlist["点击音效"]);
        SoundManager.playEffect(SoundConfig.soudlist["点击音效"], false, false);
        this.addMinus.active = false;
        // this.node.getChildByName("btnRotate").getChildByName("disable").active = true;
        this.threeDNode.rotation();
        this.sliderRotate.active = true;
    }

    private onClickMerge() {
        SoundManager.stopSoundByName(SoundConfig.soudlist["点击音效"]);
        SoundManager.playEffect(SoundConfig.soudlist["点击音效"], false, false);
        this.addMinus.active = false;
        // this.node.getChildByName("btnMerge").getChildByName("disable").active = true;
        this.threeDNode.merge();
        this.sliderMerge.active = true;
    }

    private onSlideRotate(event) {
        let progress = event.progress;
        this.threeDNode.controlRotate(progress);
    }

    private onSlideMerge(event) {
        let progress = event.progress;
        this.threeDNode.controlMerge(progress);
    }

    private onClickShowZuoBiao() {
        this.threeDNode.reset();
        // this.node.getChildByName("btnZuobiao").getChildByName("disable").active = true;
        // let zuobiao_node = this.node.getChildByName("zuobiao_node");
        // zuobiao_node.active = true;
        // let zuobiao_top = zuobiao_node.getChildByName("top");
        // let count = SyncDataManager.getSyncData().customSyncData.count;
        // zuobiao_top.y = count * 80;
    }
}
