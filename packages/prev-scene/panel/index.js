const Fs = require('fs');
var prevApp;
Editor.Panel.extend({

  style: Fs.readFileSync(Editor.url('packages://prev-scene/panel/index.css'), 'utf8'),

  template: Fs.readFileSync(Editor.url('packages://prev-scene/panel/index.html'), 'utf8'),

  // app: null,

  messages: {
    'prev-scene:updatePrev'(e, prevSceneData, prevPrefabData) {
      if(!prevApp){
        return;
      }
      prevApp.prevSceneData = prevSceneData;
      prevApp.prevPrefabData = prevPrefabData;
    }
  },

  

  ready() {

    prevApp = new window.Vue({
      el: this.shadowRoot,

      data() {
        return {
          prevSceneData: [],
          prevPrefabData: [],
        }
      },

      methods: {

        /**
         * 保存配置
         */
        // saveConfig() {
        //   if (this.isSaving) return;
        //   this.isSaving = true;

        //   const config = {
        //     enabled: this.enabled,

        //     minQuality: this.minQuality,
        //     maxQuality: this.maxQuality,
        //     colors: this.colors,
        //     speed: this.speed,
        //   };
        //   Editor.Ipc.sendToMain('prev-scene:save-config', config, () => {
        //     this.isSaving = false;
        //   });
        // },

        // /**
        //  * 读取配置
        //  */
        // readConfig() {
        //   Editor.Ipc.sendToMain('prev-scene:read-config', (err, config) => {
        //     if (err || !config) return;
        //     for (const key in config) {
        //       this[key] = config[key];
        //     }
        //   });
        // }

        // test() {
        //   Editor.log(JSON.stringify(Editor.Scene));
        // }

        jumpView(uuid, isScene) {
          if (isScene) {
            Editor.Panel.open('scene', {
              uuid,
            });
          } else {
            Editor.Ipc.sendToAll('scene:enter-prefab-edit-mode', uuid);
          }
        },

        // clear(){
        //   Editor.Ipc.sendToMain("prev-scene:clear")
        // }


      },
      computed: {
        // prevSceneData() {
        //   Editor.Ipc.sendToMainSync("get-prev-scene-data",)
        // },
        // prevPrefabData() {

        // }
      }
    });

    // prevApp.readConfig();
    setTimeout(() => {
      Editor.Ipc.sendToMain("prev-scene:updatePanel")
    }, 500)
  },



});