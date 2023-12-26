
(function () {
var scripts = [{"deps":{"./assets/game/scripts/Data/CustomSyncData":49,"./assets/game/scripts/Data/EventType":43,"./assets/game/scripts/Data/ConstValue":47,"./assets/game/scripts/Manager/EditorManager":44,"./assets/game/scripts/SkeletonExt":5,"./assets/game/scripts/Components/DragSync":48,"./assets/game/scripts/UI/Item/ThreeDNode":45,"./assets/game/scripts/UI/Item/GameUI":50,"./assets/game/scripts/UI/Layer/GameLayer":46,"./assets/game/scripts/UI/panel/TeacherPanel":3,"./assets/game/scripts/UI/panel/GamePanel":51,"./assets/game/scripts/UI/Item/SoundConfig":52,"./assets/frame/scripts/Data/FrameConstValue":6,"./assets/frame/scripts/Http/NetWork":4,"./assets/frame/scripts/Manager/ReportManager":2,"./assets/frame/scripts/Manager/SoundManager":12,"./assets/frame/scripts/Manager/SyncDataManager":11,"./assets/frame/scripts/Manager/UIManager":13,"./assets/frame/scripts/Manager/ListenerManager":15,"./assets/frame/scripts/SDK/T2M":7,"./assets/frame/scripts/SDK/GameMsg":14,"./assets/frame/scripts/UI/BaseFrameUI":18,"./assets/frame/scripts/UI/BaseUI":20,"./assets/frame/scripts/UI/BindNode":22,"./assets/frame/scripts/UI/GameMain":19,"./assets/frame/scripts/UI/AdaptiveScreen":17,"./assets/frame/scripts/UI/Item/MaskRecover":1,"./assets/frame/scripts/UI/Item/TeacherPanelLoading":21,"./assets/frame/scripts/UI/Item/Tip":23,"./assets/frame/scripts/UI/Item/TitleNode":16,"./assets/frame/scripts/UI/Item/replayBtn":25,"./assets/frame/scripts/UI/Item/MaskGlobal":26,"./assets/frame/scripts/UI/Panel/BaseGamePanel":24,"./assets/frame/scripts/UI/Panel/BaseTeacherPanel":8,"./assets/frame/scripts/UI/Panel/ErrorPanel":29,"./assets/frame/scripts/UI/Panel/LoadingUI":27,"./assets/frame/scripts/UI/Panel/OverTips":30,"./assets/frame/scripts/UI/Panel/StarCount":28,"./assets/frame/scripts/UI/Panel/SubmissionPanel":31,"./assets/frame/scripts/UI/Panel/TipUI":32,"./assets/frame/scripts/UI/Panel/UploadAndReturnPanel":33,"./assets/frame/scripts/UI/Panel/AffirmTips":35,"./assets/frame/scripts/Utils/BoundingBoxDemo":37,"./assets/frame/scripts/Utils/BoundingBoxHelp":41,"./assets/frame/scripts/Utils/HitTest":9,"./assets/frame/scripts/Utils/MathUtils":34,"./assets/frame/scripts/Utils/Tools":39,"./assets/frame/scripts/Utils/UIHelp":42,"./assets/frame/scripts/Utils/AudioPlayExtension":36,"./assets/frame/scripts/Data/FrameMsgType":38,"./assets/frame/scripts/Data/FrameSyncData":40,"./assets/game/scripts/Components/ButtonSync":10},"path":"preview-scripts/__qc_index__.js"},{"deps":{"../../Data/FrameMsgType":38,"../../Manager/ListenerManager":15,"../../Manager/UIManager":13,"../BindNode":22},"path":"preview-scripts/assets/frame/scripts/UI/Item/MaskRecover.js"},{"deps":{"../../../game/scripts/Data/ConstValue":47,"../../../game/scripts/Manager/EditorManager":44,"../SDK/GameMsg":14},"path":"preview-scripts/assets/frame/scripts/Manager/ReportManager.js"},{"deps":{"../../../../frame/scripts/Data/FrameMsgType":38,"../../../../frame/scripts/Manager/ListenerManager":15,"../../../../frame/scripts/Manager/ReportManager":2,"../../../../frame/scripts/Manager/UIManager":13,"../../../../frame/scripts/UI/Panel/BaseTeacherPanel":8,"../../../../frame/scripts/Utils/UIHelp":42,"../../Manager/EditorManager":44,"./GamePanel":51},"path":"preview-scripts/assets/game/scripts/UI/panel/TeacherPanel.js"},{"deps":{"../../../game/scripts/Data/ConstValue":47,"../Manager/UIManager":13,"../SDK/GameMsg":14,"../Utils/UIHelp":42},"path":"preview-scripts/assets/frame/scripts/Http/NetWork.js"},{"deps":{},"path":"preview-scripts/assets/game/scripts/SkeletonExt.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Data/FrameConstValue.js"},{"deps":{"../Data/FrameMsgType":38,"../Http/NetWork":4,"../Manager/ListenerManager":15,"../Manager/SyncDataManager":11,"../Utils/UIHelp":42,"./GameMsg":14},"path":"preview-scripts/assets/frame/scripts/SDK/T2M.js"},{"deps":{"../../../../game/scripts/Data/ConstValue":47,"../../Http/NetWork":4,"../../Utils/UIHelp":42,"../BaseUI":20},"path":"preview-scripts/assets/frame/scripts/UI/Panel/BaseTeacherPanel.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Utils/HitTest.js"},{"deps":{"../../../frame/scripts/SDK/T2M":7},"path":"preview-scripts/assets/game/scripts/Components/ButtonSync.js"},{"deps":{"../../../frame/scripts/Data/FrameSyncData":40,"../../../frame/scripts/Manager/ReportManager":2,"../../../game/scripts/Data/CustomSyncData":49},"path":"preview-scripts/assets/frame/scripts/Manager/SyncDataManager.js"},{"deps":{"../Data/FrameConstValue":6,"../Data/FrameMsgType":38,"../Http/NetWork":4,"../SDK/GameMsg":14,"./ListenerManager":15,"./UIManager":13},"path":"preview-scripts/assets/frame/scripts/Manager/SoundManager.js"},{"deps":{"../UI/BaseUI":20},"path":"preview-scripts/assets/frame/scripts/Manager/UIManager.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/SDK/GameMsg.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Manager/ListenerManager.js"},{"deps":{"../../Data/FrameMsgType":38,"../../Manager/ListenerManager":15},"path":"preview-scripts/assets/frame/scripts/UI/Item/TitleNode.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/UI/AdaptiveScreen.js"},{"deps":{"../Data/FrameConstValue":6,"./BaseUI":20},"path":"preview-scripts/assets/frame/scripts/UI/BaseFrameUI.js"},{"deps":{"../../../game/scripts/Manager/EditorManager":44,"../Data/FrameMsgType":38,"../Http/NetWork":4,"../Manager/ListenerManager":15,"../Manager/ReportManager":2,"../Manager/SoundManager":12,"../Manager/SyncDataManager":11,"../Manager/UIManager":13,"../SDK/GameMsg":14,"../SDK/T2M":7,"../Utils/UIHelp":42},"path":"preview-scripts/assets/frame/scripts/UI/GameMain.js"},{"deps":{"../Data/FrameConstValue":6,"../Manager/ListenerManager":15,"./BindNode":22},"path":"preview-scripts/assets/frame/scripts/UI/BaseUI.js"},{"deps":{"../../Data/FrameMsgType":38,"../../Manager/ListenerManager":15,"../BindNode":22},"path":"preview-scripts/assets/frame/scripts/UI/Item/TeacherPanelLoading.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/UI/BindNode.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/UI/Item/Tip.js"},{"deps":{"../../../../game/scripts/Data/ConstValue":47,"../../../../game/scripts/Manager/EditorManager":44,"../../Data/FrameMsgType":38,"../../Http/NetWork":4,"../../Manager/ListenerManager":15,"../../Manager/ReportManager":2,"../../Manager/SoundManager":12,"../../Manager/SyncDataManager":11,"../../Manager/UIManager":13,"../../SDK/GameMsg":14,"../../SDK/T2M":7,"../../Utils/UIHelp":42,"../BaseUI":20},"path":"preview-scripts/assets/frame/scripts/UI/Panel/BaseGamePanel.js"},{"deps":{"../../Data/FrameMsgType":38,"../../SDK/T2M":7},"path":"preview-scripts/assets/frame/scripts/UI/Item/replayBtn.js"},{"deps":{"../../Data/FrameMsgType":38,"../../Manager/ListenerManager":15,"../../Manager/UIManager":13,"../../Utils/UIHelp":42,"../BindNode":22},"path":"preview-scripts/assets/frame/scripts/UI/Item/MaskGlobal.js"},{"deps":{"../../../../game/scripts/Data/ConstValue":47,"../../../../game/scripts/UI/panel/GamePanel":51,"../../../../game/scripts/UI/panel/TeacherPanel":3,"../../Http/NetWork":4,"../../Manager/SoundManager":12,"../../Manager/UIManager":13,"../../SDK/GameMsg":14,"../BaseFrameUI":18},"path":"preview-scripts/assets/frame/scripts/UI/Panel/LoadingUI.js"},{"deps":{"./../../Manager/SoundManager":12,"../../Utils/Tools":39,"../BaseFrameUI":18,"../../../../game/scripts/Manager/EditorManager":44,"../../Manager/ReportManager":2,"../../Utils/UIHelp":42,"../../../../game/scripts/Data/ConstValue":47},"path":"preview-scripts/assets/frame/scripts/UI/Panel/StarCount.js"},{"deps":{"../../Utils/UIHelp":42,"./../../Manager/SoundManager":12,"./../../SDK/GameMsg":14,"./../BaseFrameUI":18},"path":"preview-scripts/assets/frame/scripts/UI/Panel/ErrorPanel.js"},{"deps":{"./../../Manager/SoundManager":12,"../../Utils/Tools":39,"../BaseFrameUI":18,"../../Utils/UIHelp":42,"../../Manager/UIManager":13,"../../SDK/T2M":7,"../../Data/FrameMsgType":38,"../../../../game/scripts/Data/ConstValue":47},"path":"preview-scripts/assets/frame/scripts/UI/Panel/OverTips.js"},{"deps":{"../../Http/NetWork":4,"../BaseFrameUI":18,"../../Utils/UIHelp":42,"../../../../game/scripts/Data/ConstValue":47,"../../../../game/scripts/Manager/EditorManager":44},"path":"preview-scripts/assets/frame/scripts/UI/Panel/SubmissionPanel.js"},{"deps":{"../BaseFrameUI":18,"../Item/Tip":23},"path":"preview-scripts/assets/frame/scripts/UI/Panel/TipUI.js"},{"deps":{"./../../Manager/ListenerManager":15,"../BaseFrameUI":18,"../../Data/FrameMsgType":38,"../../Utils/UIHelp":42,"../../Manager/ReportManager":2,"../../Manager/SoundManager":12,"../../SDK/T2M":7,"../../../../game/scripts/Manager/EditorManager":44,"../../Manager/UIManager":13,"../../../../game/scripts/UI/panel/TeacherPanel":3},"path":"preview-scripts/assets/frame/scripts/UI/Panel/UploadAndReturnPanel.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Utils/MathUtils.js"},{"deps":{"../../Data/FrameMsgType":38,"../../SDK/T2M":7,"../../Utils/UIHelp":42,"../BaseFrameUI":18},"path":"preview-scripts/assets/frame/scripts/UI/Panel/AffirmTips.js"},{"deps":{"./../Manager/SoundManager":12},"path":"preview-scripts/assets/frame/scripts/Utils/AudioPlayExtension.js"},{"deps":{"./BoundingBoxHelp":41},"path":"preview-scripts/assets/frame/scripts/Utils/BoundingBoxDemo.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Data/FrameMsgType.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Utils/Tools.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Data/FrameSyncData.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Utils/BoundingBoxHelp.js"},{"deps":{"../../../game/scripts/UI/panel/GamePanel":51,"../../../game/scripts/UI/panel/TeacherPanel":3,"../Data/FrameMsgType":38,"../Manager/ListenerManager":15,"../Manager/UIManager":13,"../UI/Panel/AffirmTips":35,"../UI/Panel/ErrorPanel":29,"../UI/Panel/OverTips":30,"../UI/Panel/StarCount":28,"../UI/Panel/SubmissionPanel":31,"../UI/Panel/TipUI":32,"../UI/Panel/UploadAndReturnPanel":33},"path":"preview-scripts/assets/frame/scripts/Utils/UIHelp.js"},{"deps":{},"path":"preview-scripts/assets/game/scripts/Data/EventType.js"},{"deps":{},"path":"preview-scripts/assets/game/scripts/Manager/EditorManager.js"},{"deps":{"../../../../frame/scripts/Manager/SyncDataManager":11,"../../../../frame/scripts/Manager/SoundManager":12},"path":"preview-scripts/assets/game/scripts/UI/Item/ThreeDNode.js"},{"deps":{"../../../../frame/scripts/Http/NetWork":4,"../../../../frame/scripts/Manager/ListenerManager":15,"../../../../frame/scripts/Manager/SyncDataManager":11,"../../../../frame/scripts/SDK/T2M":7,"../../Data/EventType":43,"../Item/GameUI":50,"../Item/ThreeDNode":45},"path":"preview-scripts/assets/game/scripts/UI/Layer/GameLayer.js"},{"deps":{},"path":"preview-scripts/assets/game/scripts/Data/ConstValue.js"},{"deps":{"../../../frame/scripts/SDK/T2M":7},"path":"preview-scripts/assets/game/scripts/Components/DragSync.js"},{"deps":{},"path":"preview-scripts/assets/game/scripts/Data/CustomSyncData.js"},{"deps":{"./SoundConfig":52,"./ThreeDNode":45,"../../../../frame/scripts/Manager/SyncDataManager":11,"../../../../frame/scripts/Manager/SoundManager":12},"path":"preview-scripts/assets/game/scripts/UI/Item/GameUI.js"},{"deps":{"../../../../frame/scripts/Manager/ListenerManager":15,"../../../../frame/scripts/UI/Panel/BaseGamePanel":24,"../../Data/EventType":43},"path":"preview-scripts/assets/game/scripts/UI/panel/GamePanel.js"},{"deps":{},"path":"preview-scripts/assets/game/scripts/UI/Item/SoundConfig.js"}];
var entries = ["preview-scripts/__qc_index__.js"];
var bundleScript = 'preview-scripts/__qc_bundle__.js';

/**
 * Notice: This file can not use ES6 (for IE 11)
 */
var modules = {};
var name2path = {};

// Will generated by module.js plugin
// var scripts = ${scripts};
// var entries = ${entries};
// var bundleScript = ${bundleScript};

if (typeof global === 'undefined') {
    window.global = window;
}

var isJSB = typeof jsb !== 'undefined';

function getXMLHttpRequest () {
    return window.XMLHttpRequest ? new window.XMLHttpRequest() : new ActiveXObject('MSXML2.XMLHTTP');
}

function downloadText(url, callback) {
    if (isJSB) {
        var result = jsb.fileUtils.getStringFromFile(url);
        callback(null, result);
        return;
    }

    var xhr = getXMLHttpRequest(),
        errInfo = 'Load text file failed: ' + url;
    xhr.open('GET', url, true);
    if (xhr.overrideMimeType) xhr.overrideMimeType('text\/plain; charset=utf-8');
    xhr.onload = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200 || xhr.status === 0) {
                callback(null, xhr.responseText);
            }
            else {
                callback({status:xhr.status, errorMessage:errInfo + ', status: ' + xhr.status});
            }
        }
        else {
            callback({status:xhr.status, errorMessage:errInfo + '(wrong readyState)'});
        }
    };
    xhr.onerror = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(error)'});
    };
    xhr.ontimeout = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(time out)'});
    };
    xhr.send(null);
};

function loadScript (src, cb) {
    if (typeof require !== 'undefined') {
        require(src);
        return cb();
    }

    // var timer = 'load ' + src;
    // console.time(timer);

    var scriptElement = document.createElement('script');

    function done() {
        // console.timeEnd(timer);
        // deallocation immediate whatever
        scriptElement.remove();
    }

    scriptElement.onload = function () {
        done();
        cb();
    };
    scriptElement.onerror = function () {
        done();
        var error = 'Failed to load ' + src;
        console.error(error);
        cb(new Error(error));
    };
    scriptElement.setAttribute('type','text/javascript');
    scriptElement.setAttribute('charset', 'utf-8');
    scriptElement.setAttribute('src', src);

    document.head.appendChild(scriptElement);
}

function loadScripts (srcs, cb) {
    var n = srcs.length;

    srcs.forEach(function (src) {
        loadScript(src, function () {
            n--;
            if (n === 0) {
                cb();
            }
        });
    })
}

function formatPath (path) {
    let destPath = window.__quick_compile_project__.destPath;
    if (destPath) {
        let prefix = 'preview-scripts';
        if (destPath[destPath.length - 1] === '/') {
            prefix += '/';
        }
        path = path.replace(prefix, destPath);
    }
    return path;
}

window.__quick_compile_project__ = {
    destPath: '',

    registerModule: function (path, module) {
        path = formatPath(path);
        modules[path].module = module;
    },

    registerModuleFunc: function (path, func) {
        path = formatPath(path);
        modules[path].func = func;

        var sections = path.split('/');
        var name = sections[sections.length - 1];
        name = name.replace(/\.(?:js|ts|json)$/i, '');
        name2path[name] = path;
    },

    require: function (request, path) {
        var m, requestScript;

        path = formatPath(path);
        if (path) {
            m = modules[path];
            if (!m) {
                console.warn('Can not find module for path : ' + path);
                return null;
            }
        }

        if (m) {
            let depIndex = m.deps[request];
            // dependence script was excluded
            if (depIndex === -1) {
                return null;
            }
            else {
                requestScript = scripts[ m.deps[request] ];
            }
        }
        
        let requestPath = '';
        if (!requestScript) {
            // search from name2path when request is a dynamic module name
            if (/^[\w- .]*$/.test(request)) {
                requestPath = name2path[request];
            }

            if (!requestPath) {
                if (CC_JSB) {
                    return require(request);
                }
                else {
                    console.warn('Can not find deps [' + request + '] for path : ' + path);
                    return null;
                }
            }
        }
        else {
            requestPath = formatPath(requestScript.path);
        }

        let requestModule = modules[requestPath];
        if (!requestModule) {
            console.warn('Can not find request module for path : ' + requestPath);
            return null;
        }

        if (!requestModule.module && requestModule.func) {
            requestModule.func();
        }

        if (!requestModule.module) {
            console.warn('Can not find requestModule.module for path : ' + path);
            return null;
        }

        return requestModule.module.exports;
    },

    run: function () {
        entries.forEach(function (entry) {
            entry = formatPath(entry);
            var module = modules[entry];
            if (!module.module) {
                module.func();
            }
        });
    },

    load: function (cb) {
        var self = this;

        var srcs = scripts.map(function (script) {
            var path = formatPath(script.path);
            modules[path] = script;

            if (script.mtime) {
                path += ("?mtime=" + script.mtime);
            }
            return path;
        });

        console.time && console.time('load __quick_compile_project__');
        // jsb can not analysis sourcemap, so keep separate files.
        if (bundleScript && !isJSB) {
            downloadText(formatPath(bundleScript), function (err, bundleSource) {
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                if (err) {
                    console.error(err);
                    return;
                }

                let evalTime = 'eval __quick_compile_project__ : ' + srcs.length + ' files';
                console.time && console.time(evalTime);
                var sources = bundleSource.split('\n//------QC-SOURCE-SPLIT------\n');
                for (var i = 0; i < sources.length; i++) {
                    if (sources[i]) {
                        window.eval(sources[i]);
                        // not sure why new Function cannot set breakpoints precisely
                        // new Function(sources[i])()
                    }
                }
                self.run();
                console.timeEnd && console.timeEnd(evalTime);
                cb();
            })
        }
        else {
            loadScripts(srcs, function () {
                self.run();
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                cb();
            });
        }
    }
};

// Polyfill for IE 11
if (!('remove' in Element.prototype)) {
    Element.prototype.remove = function () {
        if (this.parentNode) {
            this.parentNode.removeChild(this);
        }
    };
}
})();
    