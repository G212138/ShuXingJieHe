
import { ListenerManager } from "../../../../frame/scripts/Manager/ListenerManager";
import { SoundManager } from "../../../../frame/scripts/Manager/SoundManager";
import { SyncDataManager } from "../../../../frame/scripts/Manager/SyncDataManager";
import { EventType } from "../../Data/EventType";
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
    @property(cc.Label)
    private lbl_gongshi1: cc.Label = null;
    @property(cc.Node)
    private gongshi_2: cc.Node = null;

    onLoad() {
        ListenerManager.on(EventType.hebingwancheng, this.showGongshi_2, this);
    }
    onDestroy() {
        ListenerManager.off(EventType.hebingwancheng, this.showGongshi_2, this);
    }

    showGongshi_2() {
        let count = SyncDataManager.getSyncData().customSyncData.count;
        this.lbl_gongshi1.node.active = false;
        this.gongshi_2.active = true;
        let gongshi = "";
        for (let i = 1; i <= count; i++) {
            gongshi += i + "²";
            if (i != count) {
                gongshi += " + ";
            }
        }
        gongshi += " = ";
        this.gongshi_2.getChildByName("gongshi_1").getComponent(cc.Label).string = gongshi;
        let top = this.gongshi_2.getChildByName("gongshi_2").getChildByName("top");
        top.getChildByName("first").getComponent(cc.Label).string = count + "x(";
        top.getChildByName("btn_1").getComponent(cc.Label).string = count + "+1";
        top.getChildByName("btn_2").getComponent(cc.Label).string = count + "x2+1";
        top.getChildByName("btn_1_1").getComponent(cc.Label).string = count + 1 + "";
        top.getChildByName("btn_2_2").getComponent(cc.Label).string = count * 2 + 1 + "";
        top.getChildByName("btn_1_1").active = false;
        top.getChildByName("btn_2_2").active = false;
    }

    onclick_1() {
        let top = this.gongshi_2.getChildByName("gongshi_2").getChildByName("top");
        top.getChildByName("btn_1_1").active = true;
        top.getChildByName("btn_1").active = false;
    }

    onclick_1_1() {
        let top = this.gongshi_2.getChildByName("gongshi_2").getChildByName("top");
        top.getChildByName("btn_1_1").active = false;
        top.getChildByName("btn_1").active = true;
    }

    onclick_2() {
        let top = this.gongshi_2.getChildByName("gongshi_2").getChildByName("top");
        top.getChildByName("btn_2").active = false;
        top.getChildByName("btn_2_2").active = true;
    }

    onclick_2_2() {
        let top = this.gongshi_2.getChildByName("gongshi_2").getChildByName("top");
        top.getChildByName("btn_2").active = true;
        top.getChildByName("btn_2_2").active = false;
    }
    public init() {
        this.updateBtnState(SyncDataManager.getSyncData().customSyncData.curIndex);
        let count = SyncDataManager.getSyncData().customSyncData.count;
        this.lbl_count.string = count.toString();
        let gongshi = "";
        for (let i = 1; i <= count; i++) {
            gongshi += i + "²";
            if (i != count) {
                gongshi += " + ";
            }
        }
        gongshi += " = ?";
        this.lbl_gongshi1.node.active = true;
        this.gongshi_2.active = false;
        this.lbl_gongshi1.string = gongshi;
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
        this.updateBtnState(1);
    }

    private onClickRotate() {
        SoundManager.stopSoundByName(SoundConfig.soudlist["点击音效"]);
        SoundManager.playEffect(SoundConfig.soudlist["点击音效"], false, false);
        this.addMinus.active = false;
        this.threeDNode.rotation();
        this.sliderRotate.active = true;
        this.updateBtnState(2);
    }

    private onClickMerge() {
        SoundManager.stopSoundByName(SoundConfig.soudlist["点击音效"]);
        SoundManager.playEffect(SoundConfig.soudlist["点击音效"], false, false);
        this.addMinus.active = false;
        this.threeDNode.merge();
        this.sliderMerge.active = true;
        this.updateBtnState(3);
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
        this.updateBtnState(4);
        this.threeDNode.reset();
    }

    private onClickBtnBack() {
        this.addMinus.active = false;
        if (SyncDataManager.getSyncData().customSyncData.curIndex > 0) {
            switch (SyncDataManager.getSyncData().customSyncData.curIndex) {
                case 1:
                    this.threeDNode.init();
                    this.init();
                    break;
                case 2:
                    this.threeDNode.init();
                    this.init();
                    this.threeDNode.showStep2();
                    break;
                case 3:
                    this.threeDNode.controlMerge(0);
                    this.sliderMerge.getComponent(cc.Slider).progress = 0;
                    break;
                case 4:
                    this.threeDNode.hideZuobiao();
                    break;
    
            }

            SyncDataManager.getSyncData().customSyncData.curIndex--;
        }
        
        this.updateBtnState(SyncDataManager.getSyncData().customSyncData.curIndex);
    }

    private updateBtnState(index: number = 0) {
        console.log("updateBtnState", index);
        SyncDataManager.getSyncData().customSyncData.curIndex = index;
        this.node.getChildByName("btnCopy").getChildByName("disable").active = index > 0;
        this.node.getChildByName("btnRotate").getChildByName("disable").active = true;
        this.node.getChildByName("btnMerge").getChildByName("disable").active = true;
        this.node.getChildByName("btnZuobiao").getChildByName("disable").active = true;

        switch (index) {
            case 1:
                this.node.getChildByName("btnRotate").getChildByName("disable").active = false;
                break;
            case 2:
                this.node.getChildByName("btnMerge").getChildByName("disable").active = false;
                break;
            case 3:
                this.node.getChildByName("btnZuobiao").getChildByName("disable").active = false;
                break;
        }

        if (index != 4) {
            this.threeDNode.hideZuobiao();
        }
        this.node.getChildByName("btnBack").getChildByName("disable").active = index == 0;
        this.sliderRotate.active = index == 2;
        this.sliderMerge.active = index == 3;
    }
}
