
(function () {
var scripts = [{"deps":{"./assets/game/scripts/Data/CustomSyncData":49,"./assets/game/scripts/Data/EventType":48,"./assets/game/scripts/Data/ConstValue":43,"./assets/game/scripts/Manager/EditorManager":45,"./assets/game/scripts/SkeletonExt":3,"./assets/game/scripts/Components/DragSync":47,"./assets/game/scripts/UI/Item/ThreeDNode":51,"./assets/game/scripts/UI/Item/GameUI":4,"./assets/game/scripts/UI/Layer/GameLayer":46,"./assets/game/scripts/UI/panel/TeacherPanel":44,"./assets/game/scripts/UI/panel/GamePanel":52,"./assets/game/scripts/UI/Item/SoundConfig":50,"./assets/frame/scripts/Data/FrameConstValue":5,"./assets/frame/scripts/Http/NetWork":6,"./assets/frame/scripts/Manager/ReportManager":2,"./assets/frame/scripts/Manager/SoundManager":10,"./assets/frame/scripts/Manager/SyncDataManager":11,"./assets/frame/scripts/Manager/UIManager":13,"./assets/frame/scripts/Manager/ListenerManager":12,"./assets/frame/scripts/SDK/T2M":7,"./assets/frame/scripts/SDK/GameMsg":15,"./assets/frame/scripts/UI/BaseFrameUI":16,"./assets/frame/scripts/UI/BaseUI":14,"./assets/frame/scripts/UI/BindNode":21,"./assets/frame/scripts/UI/GameMain":19,"./assets/frame/scripts/UI/AdaptiveScreen":18,"./assets/frame/scripts/UI/Item/MaskRecover":17,"./assets/frame/scripts/UI/Item/TeacherPanelLoading":1,"./assets/frame/scripts/UI/Item/Tip":23,"./assets/frame/scripts/UI/Item/TitleNode":22,"./assets/frame/scripts/UI/Item/replayBtn":25,"./assets/frame/scripts/UI/Item/MaskGlobal":26,"./assets/frame/scripts/UI/Panel/BaseGamePanel":24,"./assets/frame/scripts/UI/Panel/BaseTeacherPanel":8,"./assets/frame/scripts/UI/Panel/ErrorPanel":27,"./assets/frame/scripts/UI/Panel/LoadingUI":28,"./assets/frame/scripts/UI/Panel/OverTips":29,"./assets/frame/scripts/UI/Panel/StarCount":31,"./assets/frame/scripts/UI/Panel/SubmissionPanel":30,"./assets/frame/scripts/UI/Panel/TipUI":36,"./assets/frame/scripts/UI/Panel/UploadAndReturnPanel":32,"./assets/frame/scripts/UI/Panel/AffirmTips":35,"./assets/frame/scripts/Utils/BoundingBoxDemo":34,"./assets/frame/scripts/Utils/BoundingBoxHelp":33,"./assets/frame/scripts/Utils/HitTest":39,"./assets/frame/scripts/Utils/MathUtils":9,"./assets/frame/scripts/Utils/Tools":38,"./assets/frame/scripts/Utils/UIHelp":40,"./assets/frame/scripts/Utils/AudioPlayExtension":37,"./assets/frame/scripts/Data/FrameMsgType":41,"./assets/frame/scripts/Data/FrameSyncData":42,"./assets/game/scripts/Components/ButtonSync":20},"path":"preview-scripts/__qc_index__.js"},{"deps":{"../../Data/FrameMsgType":41,"../../Manager/ListenerManager":12,"../BindNode":21},"path":"preview-scripts/assets/frame/scripts/UI/Item/TeacherPanelLoading.js"},{"deps":{"../../../game/scripts/Data/ConstValue":43,"../../../game/scripts/Manager/EditorManager":45,"../SDK/GameMsg":15},"path":"preview-scripts/assets/frame/scripts/Manager/ReportManager.js"},{"deps":{},"path":"preview-scripts/assets/game/scripts/SkeletonExt.js"},{"deps":{"./SoundConfig":50,"./ThreeDNode":51,"../../Data/EventType":48,"../../../../frame/scripts/Manager/ListenerManager":12,"../../../../frame/scripts/Manager/SoundManager":10,"../../../../frame/scripts/Manager/SyncDataManager":11},"path":"preview-scripts/assets/game/scripts/UI/Item/GameUI.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Data/FrameConstValue.js"},{"deps":{"../../../game/scripts/Data/ConstValue":43,"../Manager/UIManager":13,"../SDK/GameMsg":15,"../Utils/UIHelp":40},"path":"preview-scripts/assets/frame/scripts/Http/NetWork.js"},{"deps":{"../Data/FrameMsgType":41,"../Http/NetWork":6,"../Manager/ListenerManager":12,"../Manager/SyncDataManager":11,"../Utils/UIHelp":40,"./GameMsg":15},"path":"preview-scripts/assets/frame/scripts/SDK/T2M.js"},{"deps":{"../../../../game/scripts/Data/ConstValue":43,"../../Http/NetWork":6,"../../Utils/UIHelp":40,"../BaseUI":14},"path":"preview-scripts/assets/frame/scripts/UI/Panel/BaseTeacherPanel.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Utils/MathUtils.js"},{"deps":{"../Data/FrameConstValue":5,"../Data/FrameMsgType":41,"../Http/NetWork":6,"../SDK/GameMsg":15,"./ListenerManager":12,"./UIManager":13},"path":"preview-scripts/assets/frame/scripts/Manager/SoundManager.js"},{"deps":{"../../../frame/scripts/Data/FrameSyncData":42,"../../../frame/scripts/Manager/ReportManager":2,"../../../game/scripts/Data/CustomSyncData":49},"path":"preview-scripts/assets/frame/scripts/Manager/SyncDataManager.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Manager/ListenerManager.js"},{"deps":{"../UI/BaseUI":14},"path":"preview-scripts/assets/frame/scripts/Manager/UIManager.js"},{"deps":{"../Data/FrameConstValue":5,"../Manager/ListenerManager":12,"./BindNode":21},"path":"preview-scripts/assets/frame/scripts/UI/BaseUI.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/SDK/GameMsg.js"},{"deps":{"../Data/FrameConstValue":5,"./BaseUI":14},"path":"preview-scripts/assets/frame/scripts/UI/BaseFrameUI.js"},{"deps":{"../../Data/FrameMsgType":41,"../../Manager/ListenerManager":12,"../../Manager/UIManager":13,"../BindNode":21},"path":"preview-scripts/assets/frame/scripts/UI/Item/MaskRecover.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/UI/AdaptiveScreen.js"},{"deps":{"../../../game/scripts/Manager/EditorManager":45,"../Data/FrameMsgType":41,"../Http/NetWork":6,"../Manager/ListenerManager":12,"../Manager/ReportManager":2,"../Manager/SoundManager":10,"../Manager/SyncDataManager":11,"../Manager/UIManager":13,"../SDK/GameMsg":15,"../SDK/T2M":7,"../Utils/UIHelp":40},"path":"preview-scripts/assets/frame/scripts/UI/GameMain.js"},{"deps":{"../../../frame/scripts/SDK/T2M":7},"path":"preview-scripts/assets/game/scripts/Components/ButtonSync.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/UI/BindNode.js"},{"deps":{"../../Data/FrameMsgType":41,"../../Manager/ListenerManager":12},"path":"preview-scripts/assets/frame/scripts/UI/Item/TitleNode.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/UI/Item/Tip.js"},{"deps":{"../../../../game/scripts/Data/ConstValue":43,"../../../../game/scripts/Manager/EditorManager":45,"../../Data/FrameMsgType":41,"../../Http/NetWork":6,"../../Manager/ListenerManager":12,"../../Manager/ReportManager":2,"../../Manager/SoundManager":10,"../../Manager/SyncDataManager":11,"../../Manager/UIManager":13,"../../SDK/GameMsg":15,"../../SDK/T2M":7,"../../Utils/UIHelp":40,"../BaseUI":14},"path":"preview-scripts/assets/frame/scripts/UI/Panel/BaseGamePanel.js"},{"deps":{"../../Data/FrameMsgType":41,"../../SDK/T2M":7},"path":"preview-scripts/assets/frame/scripts/UI/Item/replayBtn.js"},{"deps":{"../../Data/FrameMsgType":41,"../../Manager/ListenerManager":12,"../../Manager/UIManager":13,"../../Utils/UIHelp":40,"../BindNode":21},"path":"preview-scripts/assets/frame/scripts/UI/Item/MaskGlobal.js"},{"deps":{"../../Utils/UIHelp":40,"./../../Manager/SoundManager":10,"./../../SDK/GameMsg":15,"./../BaseFrameUI":16},"path":"preview-scripts/assets/frame/scripts/UI/Panel/ErrorPanel.js"},{"deps":{"../../../../game/scripts/Data/ConstValue":43,"../../../../game/scripts/UI/panel/GamePanel":52,"../../../../game/scripts/UI/panel/TeacherPanel":44,"../../Http/NetWork":6,"../../Manager/SoundManager":10,"../../Manager/UIManager":13,"../../SDK/GameMsg":15,"../BaseFrameUI":16},"path":"preview-scripts/assets/frame/scripts/UI/Panel/LoadingUI.js"},{"deps":{"./../../Manager/SoundManager":10,"../../Utils/Tools":38,"../BaseFrameUI":16,"../../Utils/UIHelp":40,"../../Manager/UIManager":13,"../../SDK/T2M":7,"../../Data/FrameMsgType":41,"../../../../game/scripts/Data/ConstValue":43},"path":"preview-scripts/assets/frame/scripts/UI/Panel/OverTips.js"},{"deps":{"../../Http/NetWork":6,"../BaseFrameUI":16,"../../Utils/UIHelp":40,"../../../../game/scripts/Data/ConstValue":43,"../../../../game/scripts/Manager/EditorManager":45},"path":"preview-scripts/assets/frame/scripts/UI/Panel/SubmissionPanel.js"},{"deps":{"./../../Manager/SoundManager":10,"../../Utils/Tools":38,"../BaseFrameUI":16,"../../../../game/scripts/Manager/EditorManager":45,"../../Manager/ReportManager":2,"../../Utils/UIHelp":40,"../../../../game/scripts/Data/ConstValue":43},"path":"preview-scripts/assets/frame/scripts/UI/Panel/StarCount.js"},{"deps":{"../BaseFrameUI":16,"../../Manager/ReportManager":2,"../../Manager/SoundManager":10,"../../Manager/UIManager":13,"./../../Manager/ListenerManager":12,"../../Data/FrameMsgType":41,"../../Utils/UIHelp":40,"../../SDK/T2M":7,"../../../../game/scripts/UI/panel/TeacherPanel":44},"path":"preview-scripts/assets/frame/scripts/UI/Panel/UploadAndReturnPanel.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Utils/BoundingBoxHelp.js"},{"deps":{"./BoundingBoxHelp":33},"path":"preview-scripts/assets/frame/scripts/Utils/BoundingBoxDemo.js"},{"deps":{"../../Data/FrameMsgType":41,"../../SDK/T2M":7,"../../Utils/UIHelp":40,"../BaseFrameUI":16},"path":"preview-scripts/assets/frame/scripts/UI/Panel/AffirmTips.js"},{"deps":{"../BaseFrameUI":16,"../Item/Tip":23},"path":"preview-scripts/assets/frame/scripts/UI/Panel/TipUI.js"},{"deps":{"./../Manager/SoundManager":10},"path":"preview-scripts/assets/frame/scripts/Utils/AudioPlayExtension.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Utils/Tools.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Utils/HitTest.js"},{"deps":{"../../../game/scripts/UI/panel/GamePanel":52,"../../../game/scripts/UI/panel/TeacherPanel":44,"../Data/FrameMsgType":41,"../Manager/ListenerManager":12,"../Manager/UIManager":13,"../UI/Panel/AffirmTips":35,"../UI/Panel/ErrorPanel":27,"../UI/Panel/OverTips":29,"../UI/Panel/StarCount":31,"../UI/Panel/SubmissionPanel":30,"../UI/Panel/TipUI":36,"../UI/Panel/UploadAndReturnPanel":32},"path":"preview-scripts/assets/frame/scripts/Utils/UIHelp.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Data/FrameMsgType.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Data/FrameSyncData.js"},{"deps":{},"path":"preview-scripts/assets/game/scripts/Data/ConstValue.js"},{"deps":{"./GamePanel":52,"../../Manager/EditorManager":45,"../../../../frame/scripts/Manager/ListenerManager":12,"../../../../frame/scripts/Utils/UIHelp":40,"../../../../frame/scripts/Data/FrameMsgType":41,"../../../../frame/scripts/UI/Panel/BaseTeacherPanel":8,"../../../../frame/scripts/Manager/UIManager":13},"path":"preview-scripts/assets/game/scripts/UI/panel/TeacherPanel.js"},{"deps":{},"path":"preview-scripts/assets/game/scripts/Manager/EditorManager.js"},{"deps":{"../../Data/EventType":48,"../Item/ThreeDNode":51,"../Item/GameUI":4,"../../../../frame/scripts/Manager/ListenerManager":12,"../../../../frame/scripts/SDK/T2M":7,"../../../../frame/scripts/Http/NetWork":6,"../../../../frame/scripts/Manager/SyncDataManager":11},"path":"preview-scripts/assets/game/scripts/UI/Layer/GameLayer.js"},{"deps":{"../../../frame/scripts/SDK/T2M":7},"path":"preview-scripts/assets/game/scripts/Components/DragSync.js"},{"deps":{},"path":"preview-scripts/assets/game/scripts/Data/EventType.js"},{"deps":{},"path":"preview-scripts/assets/game/scripts/Data/CustomSyncData.js"},{"deps":{},"path":"preview-scripts/assets/game/scripts/UI/Item/SoundConfig.js"},{"deps":{"../../Data/EventType":48,"../../../../frame/scripts/Manager/ListenerManager":12,"../../../../frame/scripts/Manager/SoundManager":10,"../../../../frame/scripts/Manager/SyncDataManager":11},"path":"preview-scripts/assets/game/scripts/UI/Item/ThreeDNode.js"},{"deps":{"../../Data/EventType":48,"../../Manager/EditorManager":45,"../../../../frame/scripts/Manager/SyncDataManager":11,"../../../../frame/scripts/UI/Panel/BaseGamePanel":24,"../../../../frame/scripts/Manager/ListenerManager":12},"path":"preview-scripts/assets/game/scripts/UI/panel/GamePanel.js"}];
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
    