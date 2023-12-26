import { SoundManager } from "../../../../frame/scripts/Manager/SoundManager";
import { SyncDataManager } from "../../../../frame/scripts/Manager/SyncDataManager";
import { SoundConfig } from "./SoundConfig";

const { ccclass, property } = cc._decorator;

@ccclass
export default class ThreeNode extends cc.Component {
    @property(cc.Prefab)
    private cubePrefab: cc.Prefab = null;
    @property(cc.Node)
    private cubeRootNode: cc.Node = null;
    @property(cc.Node)
    private secondStepBigCube: cc.Node[] = [];
    @property(cc.Node)
    private sliderRotate: cc.Node = null;
    @property(cc.Node)
    private sliderMerge: cc.Node = null;

    private touchEventId: number;
    private firstStepNode: cc.Node[] = [];
    private secondStepNode: cc.Node[][] = [];


    onLoad() {
        // for (let i = 0; i < 8 * 8 * 8; i++) {
        //     let smallCubeNode = cc.instantiate(this.cubePrefab);
        //     smallCubeNode.parent = this.cubeRootNode.getChildByName("firstStep");
        //     smallCubeNode.opacity = 0;
        //     this.firstStepNode.push(smallCubeNode);
        // }
        // for (let i = 0; i < 6; i++) {
        //     this.secondStepNode.push([]);
        //     for (let j = 0; j < 8 * 8 * 8; j++) {
        //         let smallCubeNode2 = cc.instantiate(this.cubePrefab);
        //         smallCubeNode2.parent = this.cubeRootNode.getChildByName("secondStep").getChildByName("secondStep_" + i);
        //         smallCubeNode2.opacity = 0;
        //         this.secondStepNode[i].push(smallCubeNode2);
        //     }
        // }
    }

    onDestroy() {

    }

    public init() {
        this.initBigCube();
    }

    public showStep2() {
        this.cubeRootNode.getChildByName("firstStep").opacity = 0;
        this.cubeRootNode.getChildByName("secondStep").opacity = 255;
        this.showSecondStep();
    }

    public reset() {
        let quat = new cc.Quat()
        cc.Quat.fromEuler(quat, 0, -15, 0)
        this.cubeRootNode.setRotation(quat);
        this.initBigCube();
    }

    //初始化大正方体
    private initBigCube() {
        this.changeBigCubeSize();
    }


    private changeBigCubeSize() {
        let count = SyncDataManager.getSyncData().customSyncData.count;

        this.cubeRootNode.getChildByName("firstStep").opacity = 255;
        this.cubeRootNode.getChildByName("secondStep").opacity = 0;
        this.cubeRootNode.getChildByName("firstStep").children.forEach(element => {
            element.opacity = 0;
        });

        //立方体的层数为count，例：count=3，立方体最上层为1*1，下一层为2*2,最下层为3*3
        let cubeWidth = 1;
        let cubeHeight = 1;
        let cubeLength = 1;
        let cubeDis = 0;
        let cubeXDis = cubeWidth + cubeDis;
        let cubeYDis = cubeHeight + cubeDis;
        let cubeZDis = cubeLength + cubeDis;
        let cubeStartX = -count * cubeXDis / 2 + cubeXDis / 2;
        for (let i = 0; i < count; i++) {
            for (let j = 0; j < count - i; j++) {
                for (let k = 0; k < count - i; k++) {
                    let smallCubeNode = this.firstStepNode[i * count * count + j * count + k];
                    if (!smallCubeNode) {
                        smallCubeNode = cc.instantiate(this.cubePrefab);
                        smallCubeNode.parent = this.cubeRootNode.getChildByName("firstStep");
                        this.firstStepNode.push(smallCubeNode);
                    }
                    // smallCubeNode.parent = this.cubeRootNode.getChildByName("firstStep");
                    smallCubeNode.opacity = 255;
                    smallCubeNode.setPosition(cubeStartX + j * cubeYDis, cubeStartX + i * cubeXDis, cubeStartX + k * cubeZDis);
                }
            }
        }
        this.cubeRootNode.getChildByName("firstStep").scale = 1 + (8 - count) * 0.15;
    }

    private showSecondStep() {
        let colorArr = ["#2A82E4", "#E329AE", "#43CF7C", "#7948EA", "#FFC300", "#FF8D1A"];
        let count = SyncDataManager.getSyncData().customSyncData.count;

        this.cubeRootNode.getChildByName("firstStep").opacity = 0;
        this.cubeRootNode.getChildByName("secondStep").opacity = 255;
        this.secondStepBigCube.forEach(cube => {
            cube.children.forEach(node => {
                node.opacity = 0;
            });
        });

        let cubeWidth = 1;
        let cubeHeight = 1;
        let cubeLength = 1;
        let cubeDis = 0;
        let cubeXDis = cubeWidth + cubeDis;
        let cubeYDis = cubeHeight + cubeDis;
        let cubeZDis = cubeLength + cubeDis;
        let cubeStartX = -count * cubeXDis / 2 + cubeXDis / 2;

        this.secondStepBigCube[0].parent.y = 5;
        this.secondStepBigCube[3].parent.y = -5;

        for (let index = 0; index < 6; index++) {
            let node = this.secondStepBigCube[index];
            node.scale = 1 + (8 - count) * 0.15;
            node.is3DNode = true;
            if (index == 3 || index == 1 || index == 5) {
                node.eulerAngles = cc.v3(0, -90, 0);
            }

            //分成两行三列，居中
            let row = Math.floor(index / 3);
            let col = index % 3;
            let posX = 0;
            let posY = 0;
            // if (row == 0) {
            //     posY = 5;
            // } else {
            //     posY = -5;
            // }
            if (col == 0) {
                posX = -10;
            } else if (col == 1) {
                posX = 0;
            } else {
                posX = 10;
            }
            node.setPosition(posX, 0, 0);

            if (!this.secondStepNode[index]) {
                this.secondStepNode[index] = [];
            }
            for (let i = 0; i < count; i++) {
                for (let j = 0; j < count - i; j++) {
                    for (let k = 0; k < count - i; k++) {
                        let smallCubeNode = this.secondStepNode[index][i * count * count + j * count + k];
                        if (!smallCubeNode) {
                            smallCubeNode = cc.instantiate(this.cubePrefab);
                            smallCubeNode.parent = node;
                            this.secondStepNode[index].push(smallCubeNode);
                        }
                        smallCubeNode.opacity = 255;
                        smallCubeNode.setPosition(cubeStartX + j * cubeYDis, cubeStartX + i * cubeXDis, cubeStartX + k * cubeZDis);
                        for (let face = 0; face < 6; face++) {
                            let faceNode = smallCubeNode.getChildByName((face + 1).toString());
                            let material = faceNode.getComponent(cc.MeshRenderer).getMaterial(0);
                            let color = cc.Color.WHITE.fromHEX(colorArr[index]);
                            material.setProperty("diffuseColor", color, 0);
                        }
                    }
                }
            }
        }
    }

    public rotation() {
        let count = SyncDataManager.getSyncData().customSyncData.count;
        let scale = 1 + (8 - count) * 0.15;
        let node_0 = this.secondStepBigCube[0]
        node_0.is3DNode = true;
        cc.tween(node_0).to(1, { eulerAngles: cc.v3(-90, 0, 0), z: scale }).start();

        let node_1 = this.secondStepBigCube[1]
        node_1.is3DNode = true;
        cc.tween(node_1).to(1, { eulerAngles: cc.v3(180, -90, 0) }).start();

        let node_2 = this.secondStepBigCube[2]
        node_2.is3DNode = true;
        cc.tween(node_2).to(1, { eulerAngles: cc.v3(0, 0, 90), y: -scale }).start();

        let node_3 = this.secondStepBigCube[3]
        node_3.is3DNode = true;
        cc.tween(node_3).to(1, { eulerAngles: cc.v3(90, 90, 0), z: scale }).start();

        let node_4 = this.secondStepBigCube[4]
        node_4.is3DNode = true;
        cc.tween(node_4).to(1, { eulerAngles: cc.v3(0, 180, 0), y: -scale, z: scale }).start();

        let node_5 = this.secondStepBigCube[5]
        node_5.is3DNode = true;
        cc.tween(node_5).to(1, { eulerAngles: cc.v3(0, -90, -90), y: -scale }).start();

        let slider = this.sliderRotate.getComponent(cc.Slider);
        cc.tween(slider).to(1, { progress: 1 }).start();
    }

    public merge() {
        let slider = this.sliderMerge.getComponent(cc.Slider);
        cc.tween(slider).to(5, { progress: 1 }).start();

        let node_0 = this.secondStepBigCube[0];
        let node_1 = this.secondStepBigCube[1];
        let node_2 = this.secondStepBigCube[2];
        let node_3 = this.secondStepBigCube[3];
        let node_4 = this.secondStepBigCube[4];
        let node_5 = this.secondStepBigCube[5];

        let count = SyncDataManager.getSyncData().customSyncData.count;
        let scale = 1 + (8 - count) * 0.15;

        SoundManager.stopSoundByName("移动");
        SoundManager.playEffect("移动", false);
        cc.tween(node_0).to(1, { x: 0 }).call(() => {
            SoundManager.stopSoundByName("拼");
            SoundManager.playEffect("拼", false, false);
            SoundManager.stopSoundByName("移动");
            SoundManager.playEffect("移动", false, false);
            cc.tween(node_2).to(1, { x: 0, y: -scale }).call(() => {
                SoundManager.stopSoundByName("拼");
                SoundManager.playEffect("拼", false, false);
                SoundManager.stopSoundByName("移动");
                SoundManager.playEffect("移动", false, false);
                cc.tween(node_3).to(1, { x: 0 }).call(() => {
                    SoundManager.stopSoundByName("拼");
                    SoundManager.playEffect("拼", false, false);
                    SoundManager.stopSoundByName("移动");
                    SoundManager.playEffect("移动", false, false);
                    cc.tween(node_5).to(1, { x: 0 }).call(() => {
                        SoundManager.stopSoundByName("拼");
                        SoundManager.playEffect("拼", false, false);
                        SoundManager.stopSoundByName("移动");
                        SoundManager.playEffect("移动", false, false);
                        cc.tween(node_0.parent).to(1, { y: Math.floor(count / 2) * scale }).call(() => {

                        }).start();
                        cc.tween(node_3.parent).to(1, { y: -Math.floor(count / 2) * scale }).call(() => {
                            SoundManager.stopSoundByName("拼");
                            SoundManager.playEffect("拼", false, false);

                        }).start();
                    }).start();
                }).start();
            }).start();
        }).start();
    }

    public controlRotate(progress: number) {
        this.stopAllTween();
        this.secondStepBigCube[0].eulerAngles = cc.v3(-90 * progress, 0, 0);
        this.secondStepBigCube[1].eulerAngles = cc.v3(180 * progress, -90, 0);
        this.secondStepBigCube[2].eulerAngles = cc.v3(0, 0, 90 * progress);
        this.secondStepBigCube[3].eulerAngles = cc.v3(90 * progress, -90 * (1 - progress) + 90 * progress, 0);
        this.secondStepBigCube[4].eulerAngles = cc.v3(0, 180 * progress, 0);
        this.secondStepBigCube[5].eulerAngles = cc.v3(0, -90, -90 * progress);
    }

    public controlMerge(progress: number) {
        this.stopAllTween();
        let count = SyncDataManager.getSyncData().customSyncData.count;
        let scale = 1 + (8 - count) * 0.15;
        if (progress * 5 < 1) {
            this.secondStepBigCube[0].parent.y = 5;
            this.secondStepBigCube[3].parent.y = -5;

            this.secondStepBigCube[0].x = -10 * (1 - progress * 5);
            this.secondStepBigCube[0].z = scale;

            this.secondStepBigCube[1].position = cc.v3(0, 0, 0);

            this.secondStepBigCube[2].x = 10;
            this.secondStepBigCube[2].y = -scale;

            this.secondStepBigCube[3].x = -10;
            this.secondStepBigCube[3].z = scale;

            this.secondStepBigCube[4].y = -scale;
            this.secondStepBigCube[4].z = scale;

            this.secondStepBigCube[5].x = 10;
            this.secondStepBigCube[5].y = -scale;
        } else if (progress * 5 < 2) {
            this.secondStepBigCube[0].parent.y = 5;
            this.secondStepBigCube[3].parent.y = -5;

            this.secondStepBigCube[0].x = 0;
            this.secondStepBigCube[0].z = scale;

            this.secondStepBigCube[1].position = cc.v3(0, 0, 0);

        } else if (progress * 5 < 3) {
            this.secondStepBigCube[0].parent.y = 5;
            this.secondStepBigCube[3].parent.y = -5;

            this.secondStepBigCube[0].x = 0;
            this.secondStepBigCube[0].z = scale;

            this.secondStepBigCube[1].position = cc.v3(0, 0, 0);
        } else if (progress * 5 < 4) {
            this.secondStepBigCube[0].parent.y = 5;
            this.secondStepBigCube[3].parent.y = -5;

            this.secondStepBigCube[0].x = 0;
            this.secondStepBigCube[0].z = scale;

            this.secondStepBigCube[1].position = cc.v3(0, 0, 0);
        } else {
            this.secondStepBigCube[0].x = 0;
            this.secondStepBigCube[0].z = scale;

            this.secondStepBigCube[1].position = cc.v3(0, 0, 0);

            this.secondStepBigCube[2].x = 0;
            this.secondStepBigCube[2].y = -scale;


            this.secondStepBigCube[3].x = 0;
            this.secondStepBigCube[3].z = scale;

            this.secondStepBigCube[4].y = -scale;
            this.secondStepBigCube[4].z = scale;

            this.secondStepBigCube[5].x = 0;
            this.secondStepBigCube[5].y = -scale;

        }
    }

    private stopAllTween() {
        this.secondStepBigCube.forEach(cube => {
            cc.Tween.stopAllByTarget(cube);
        });
        cc.Tween.stopAllByTarget(this.secondStepBigCube[0].parent);
        cc.Tween.stopAllByTarget(this.secondStepBigCube[3].parent);
        cc.Tween.stopAllByTarget(this.sliderRotate.getComponent(cc.Slider));
        cc.Tween.stopAllByTarget(this.sliderMerge.getComponent(cc.Slider));
    }
}
