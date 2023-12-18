'use strict';
let Fs = require('fs');
let Path = require('path');

var prevMain = {
  load() {
    // execute when package loaded
    this.readHistory()
    // Editor.Scene.on('enter-prefab-edit-mode', this.onEnterPrefabEditMode);
  },

  unload() {
    // execute when package unloaded
  },

  historyUrl: Editor.Project.path + '/local/prev-scene-history.json',

  // register your ipc messages here
  messages: {
    'open'() {
      // open entry panel registered in package.json
      Editor.Panel.open('prev-scene');
    },
    'say-hello'() {
      Editor.log('Hello World!');
      // send ipc message to panel
      Editor.Ipc.sendToPanel('prev-scene', 'prev-scene:hello');
    },
    'clicked'() {
      Editor.log(' Button clicked!');
    },
    'scene:enter-prefab-edit-mode'(e, uuid) {
      for (let i = 0; i < prevMain.prevPrefabData.length; i++) {
        let element = prevMain.prevPrefabData[i];
        if (element.uuid == uuid) {
          prevMain.prevPrefabData.splice(i, 1)
          break;
        }
      }
      let info = Editor.assetdb.assetInfoByUuid(uuid);
      let prefabName = info.url.slice(info.url.lastIndexOf("/") + 1, info.url.lastIndexOf("."));
      prevMain.prevPrefabData.unshift({ uuid: uuid, name: prefabName });
      prevMain.dataChange();
    },
    'scene:ready'() {
      let uuid = Editor.currentSceneUuid
      if (uuid) {
        for (let i = 0; i < prevMain.prevSceneData.length; i++) {
          let element = prevMain.prevSceneData[i];
          if (element.uuid == uuid) {
            prevMain.prevSceneData.splice(i, 1)
            break;
          }
        }
        let info = Editor.assetdb.assetInfoByUuid(uuid);
        let sceneName = info.url.slice(info.url.lastIndexOf("/") + 1, info.url.lastIndexOf("."));
        prevMain.prevSceneData.unshift({ uuid: uuid, name: sceneName });
      }
      prevMain.dataChange();
    },
    'prev-scene:updatePanel'() {
      prevMain.noticePanelUpdate();
    },
    'prev-scene:clear'(){
      if (Fs.existsSync(prevMain.historyUrl)){
        Fs.unlinkSync(prevMain.historyUrl)
      }
      prevMain.prevSceneData = [];
      prevMain.prevPrefabData = [];
      prevMain.noticePanelUpdate();
      Editor.log("prev-scene:clear重置成功")
    }
  },

  dataChange() {
    prevMain.noticePanelUpdate();
    setTimeout(() => {
      prevMain.saveHistory();
    }, 1000);
  },

  noticePanelUpdate() {
    Editor.Ipc.sendToPanel('prev-scene', 'prev-scene:updatePrev', this.prevSceneData, this.prevPrefabData);
  },


  readHistory() {
    if (Fs.existsSync(prevMain.historyUrl)) {
      let str = Fs.readFileSync(prevMain.historyUrl);
      let json = JSON.parse(str);
      prevMain.prevSceneData = json.prevSceneData;
      prevMain.prevPrefabData = json.prevPrefabData;
    }
  },

  saveHistory() {
    let json = { prevSceneData: prevMain.prevSceneData, prevPrefabData: prevMain.prevPrefabData };
    let str = JSON.stringify(json);
    
    Fs.writeFile(prevMain.historyUrl, str,{encoding:"utf-8",flag:"w"}, (err) => {
      if (err) {
        Editor.error(err)
      }
    })
  },

  prevSceneData: [],
  prevPrefabData: [],
};

module.exports = prevMain