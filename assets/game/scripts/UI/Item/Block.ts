import { SoundManager } from "../../../../frame/scripts/Manager/SoundManager";
import { SyncDataManager } from "../../../../frame/scripts/Manager/SyncDataManager";
import { SoundConfig } from "./SoundConfig";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Block extends cc.Component {

    private _xIndex: number = 0;
    private _yIndex: number = 0;
    private _zIndex: number = 0;

    private isClicked: boolean = false;

    public init(xIndex: number, yIndex: number, zIndex: number) {
        this.node.getChildByName("icon").active = false;
        this._xIndex = xIndex;
        this._yIndex = zIndex;
        this._zIndex = yIndex;
        let index = SyncDataManager.getSyncData().customSyncData.qiepianClickArr.indexOf(this.node.name);
        this.isClicked = index != -1;
        this.node.getChildByName("icon").active = this.isClicked;
    }

    public onHandleClickCube(data: {xIndex: number, yIndex: number, zIndex: number}) {
        // if (data.xIndex == null && data.yIndex == this._yIndex && data.zIndex == this._zIndex) {
        //     this.node.getChildByName("icon").active = true;
        // } else if (data.yIndex == null && data.xIndex == this._xIndex && data.zIndex == this._zIndex) {
        //     this.node.getChildByName("icon").active = true;
        // } else if (data.zIndex == null && data.xIndex == this._xIndex && data.yIndex == this._yIndex) {
        //     this.node.getChildByName("icon").active = true;
        // }
    }

    public reset() {
        // this.node.getChildByName("icon").active = false;
    }

    private onClickBlock() {
        SoundManager.stopSoundByName(SoundConfig.soudlist["点击音效"]);
        SoundManager.playEffect(SoundConfig.soudlist["点击音效"], false, false);
        this.isClicked = !this.isClicked;
        this.node.getChildByName("icon").active = this.isClicked;
        if (this.isClicked) {
            SyncDataManager.getSyncData().customSyncData.qiepianClickArr.push(this.node.name);
        } else {
            let index = SyncDataManager.getSyncData().customSyncData.qiepianClickArr.indexOf(this.node.name);
            SyncDataManager.getSyncData().customSyncData.qiepianClickArr.splice(index, 1);
        }
    }

}
