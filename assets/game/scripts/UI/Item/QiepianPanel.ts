import { SyncDataManager } from "../../../../frame/scripts/Manager/SyncDataManager";
import Block from "./Block";

const {ccclass, property} = cc._decorator;

@ccclass
export default class QiepianPanel extends cc.Component {

    @property(cc.Label)
    private label: cc.Label = null;
    @property(cc.Prefab)
    private block_prefab: cc.Prefab = null;
    @property(cc.Node)
    private blockPanel: cc.Node = null;

    private _yIndex: number = 0;
    
    public init(cengIndenx: number) {
        this.label.string = "层" + (cengIndenx + 1);   
        this._yIndex = SyncDataManager.getSyncData().customSyncData.yCount - cengIndenx - 1;     
        this.initBlock();        
    }

    private initBlock() {
        this.blockPanel.removeAllChildren();
        this.blockPanel.destroyAllChildren();
        let xCount = SyncDataManager.getSyncData().customSyncData.xCount;
        let zCount = SyncDataManager.getSyncData().customSyncData.zCount;
        let maxWidth = 6 * 40 + (6 - 1) * 2;        
        let blockPanelWidth = xCount * 40 + (xCount - 1) * 2;
        this.blockPanel.width = blockPanelWidth;
        
        for(let i = 0; i < xCount; i++) {
            for(let j = 0; j < zCount; j++) {
                let block = cc.instantiate(this.block_prefab);
                block.name = xCount - 1 - i + "_" + j + "_" + this._yIndex;
                block.parent = this.blockPanel;
                block.getComponent(Block).init(xCount - 1 - i, j, this._yIndex);
            }
        }
        
        this.blockPanel.getComponent(cc.Layout).updateLayout();
        let scale = 1;
        if (this.blockPanel.width > this.blockPanel.height) {
            scale = maxWidth / this.blockPanel.width;
        } else {
            scale = maxWidth / this.blockPanel.height;
        }
        console.log("scale", scale);
        this.blockPanel.scale = scale;
    }

    public onHandleClickCube(data: {xIndex: number, yIndex: number, zIndex: number}) {
        // for(let i = 0; i < this.blockPanel.childrenCount; i++) {
        //     this.blockPanel.children[i].getComponent(Block).onHandleClickCube(data);
        // }
    }

    public resetBlock() {
        for(let i = 0; i < this.blockPanel.childrenCount; i++) {
            this.blockPanel.children[i].getComponent(Block).reset();
        }
    }
}
