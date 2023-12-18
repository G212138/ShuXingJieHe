
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game/scripts/SkeletonExt.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b17bdM6/FlI8aRFdqpwmXvl', 'SkeletonExt');
// game/scripts/SkeletonExt.js

"use strict";

cc.game.once(cc.game.EVENT_ENGINE_INITED, function () {
  cc.js.mixin(sp.Skeleton.prototype, {
    update: function update(dt) {
      // if (CC_EDITOR) return;
      if (CC_EDITOR) {
        cc.engine._animatingInEditMode = 1;
        cc.engine.animatingInEditMode = 1;
      }

      if (this.paused) return;
      dt *= this.timeScale * sp.timeScale;

      if (this.isAnimationCached()) {
        // Cache mode and has animation queue.
        if (this._isAniComplete) {
          if (this._animationQueue.length === 0 && !this._headAniInfo) {
            var frameCache = this._frameCache;

            if (frameCache && frameCache.isInvalid()) {
              frameCache.updateToFrame();
              var frames = frameCache.frames;
              this._curFrame = frames[frames.length - 1];
            }

            return;
          }

          if (!this._headAniInfo) {
            this._headAniInfo = this._animationQueue.shift();
          }

          this._accTime += dt;

          if (this._accTime > this._headAniInfo.delay) {
            var aniInfo = this._headAniInfo;
            this._headAniInfo = null;
            this.setAnimation(0, aniInfo.animationName, aniInfo.loop);
          }

          return;
        }

        this._updateCache(dt);
      } else {
        this._updateRealtime(dt);
      }
    }
  });
});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZVxcc2NyaXB0c1xcU2tlbGV0b25FeHQuanMiXSwibmFtZXMiOlsiY2MiLCJnYW1lIiwib25jZSIsIkVWRU5UX0VOR0lORV9JTklURUQiLCJqcyIsIm1peGluIiwic3AiLCJTa2VsZXRvbiIsInByb3RvdHlwZSIsInVwZGF0ZSIsImR0IiwiQ0NfRURJVE9SIiwiZW5naW5lIiwiX2FuaW1hdGluZ0luRWRpdE1vZGUiLCJhbmltYXRpbmdJbkVkaXRNb2RlIiwicGF1c2VkIiwidGltZVNjYWxlIiwiaXNBbmltYXRpb25DYWNoZWQiLCJfaXNBbmlDb21wbGV0ZSIsIl9hbmltYXRpb25RdWV1ZSIsImxlbmd0aCIsIl9oZWFkQW5pSW5mbyIsImZyYW1lQ2FjaGUiLCJfZnJhbWVDYWNoZSIsImlzSW52YWxpZCIsInVwZGF0ZVRvRnJhbWUiLCJmcmFtZXMiLCJfY3VyRnJhbWUiLCJzaGlmdCIsIl9hY2NUaW1lIiwiZGVsYXkiLCJhbmlJbmZvIiwic2V0QW5pbWF0aW9uIiwiYW5pbWF0aW9uTmFtZSIsImxvb3AiLCJfdXBkYXRlQ2FjaGUiLCJfdXBkYXRlUmVhbHRpbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0FBLEVBQUUsQ0FBQ0MsSUFBSCxDQUFRQyxJQUFSLENBQWFGLEVBQUUsQ0FBQ0MsSUFBSCxDQUFRRSxtQkFBckIsRUFBMEMsWUFBWTtFQUVsREgsRUFBRSxDQUFDSSxFQUFILENBQU1DLEtBQU4sQ0FBWUMsRUFBRSxDQUFDQyxRQUFILENBQVlDLFNBQXhCLEVBQW1DO0lBQy9CQyxNQUQrQixrQkFDdkJDLEVBRHVCLEVBQ25CO01BQ1I7TUFFQSxJQUFJQyxTQUFKLEVBQWU7UUFDWFgsRUFBRSxDQUFDWSxNQUFILENBQVVDLG9CQUFWLEdBQWlDLENBQWpDO1FBQ0FiLEVBQUUsQ0FBQ1ksTUFBSCxDQUFVRSxtQkFBVixHQUFnQyxDQUFoQztNQUNIOztNQUVELElBQUksS0FBS0MsTUFBVCxFQUFpQjtNQUVqQkwsRUFBRSxJQUFJLEtBQUtNLFNBQUwsR0FBaUJWLEVBQUUsQ0FBQ1UsU0FBMUI7O01BRUEsSUFBSSxLQUFLQyxpQkFBTCxFQUFKLEVBQThCO1FBRTFCO1FBQ0EsSUFBSSxLQUFLQyxjQUFULEVBQXlCO1VBQ3JCLElBQUksS0FBS0MsZUFBTCxDQUFxQkMsTUFBckIsS0FBZ0MsQ0FBaEMsSUFBcUMsQ0FBQyxLQUFLQyxZQUEvQyxFQUE2RDtZQUN6RCxJQUFJQyxVQUFVLEdBQUcsS0FBS0MsV0FBdEI7O1lBQ0EsSUFBSUQsVUFBVSxJQUFJQSxVQUFVLENBQUNFLFNBQVgsRUFBbEIsRUFBMEM7Y0FDdENGLFVBQVUsQ0FBQ0csYUFBWDtjQUNBLElBQUlDLE1BQU0sR0FBR0osVUFBVSxDQUFDSSxNQUF4QjtjQUNBLEtBQUtDLFNBQUwsR0FBaUJELE1BQU0sQ0FBQ0EsTUFBTSxDQUFDTixNQUFQLEdBQWdCLENBQWpCLENBQXZCO1lBQ0g7O1lBQ0Q7VUFDSDs7VUFDRCxJQUFJLENBQUMsS0FBS0MsWUFBVixFQUF3QjtZQUNwQixLQUFLQSxZQUFMLEdBQW9CLEtBQUtGLGVBQUwsQ0FBcUJTLEtBQXJCLEVBQXBCO1VBQ0g7O1VBQ0QsS0FBS0MsUUFBTCxJQUFpQm5CLEVBQWpCOztVQUNBLElBQUksS0FBS21CLFFBQUwsR0FBZ0IsS0FBS1IsWUFBTCxDQUFrQlMsS0FBdEMsRUFBNkM7WUFDekMsSUFBSUMsT0FBTyxHQUFHLEtBQUtWLFlBQW5CO1lBQ0EsS0FBS0EsWUFBTCxHQUFvQixJQUFwQjtZQUNBLEtBQUtXLFlBQUwsQ0FBbUIsQ0FBbkIsRUFBc0JELE9BQU8sQ0FBQ0UsYUFBOUIsRUFBNkNGLE9BQU8sQ0FBQ0csSUFBckQ7VUFDSDs7VUFDRDtRQUNIOztRQUVELEtBQUtDLFlBQUwsQ0FBa0J6QixFQUFsQjtNQUNILENBMUJELE1BMEJPO1FBQ0gsS0FBSzBCLGVBQUwsQ0FBcUIxQixFQUFyQjtNQUNIO0lBQ0o7RUExQzhCLENBQW5DO0FBNkNILENBL0NEIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcbmNjLmdhbWUub25jZShjYy5nYW1lLkVWRU5UX0VOR0lORV9JTklURUQsIGZ1bmN0aW9uICgpIHtcblxuICAgIGNjLmpzLm1peGluKHNwLlNrZWxldG9uLnByb3RvdHlwZSwge1xuICAgICAgICB1cGRhdGUgKGR0KSB7XG4gICAgICAgICAgICAvLyBpZiAoQ0NfRURJVE9SKSByZXR1cm47XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChDQ19FRElUT1IpIHtcbiAgICAgICAgICAgICAgICBjYy5lbmdpbmUuX2FuaW1hdGluZ0luRWRpdE1vZGUgPSAxO1xuICAgICAgICAgICAgICAgIGNjLmVuZ2luZS5hbmltYXRpbmdJbkVkaXRNb2RlID0gMTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMucGF1c2VkKSByZXR1cm47XG4gICAgXG4gICAgICAgICAgICBkdCAqPSB0aGlzLnRpbWVTY2FsZSAqIHNwLnRpbWVTY2FsZTtcbiAgICBcbiAgICAgICAgICAgIGlmICh0aGlzLmlzQW5pbWF0aW9uQ2FjaGVkKCkpIHtcbiAgICBcbiAgICAgICAgICAgICAgICAvLyBDYWNoZSBtb2RlIGFuZCBoYXMgYW5pbWF0aW9uIHF1ZXVlLlxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9pc0FuaUNvbXBsZXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9hbmltYXRpb25RdWV1ZS5sZW5ndGggPT09IDAgJiYgIXRoaXMuX2hlYWRBbmlJbmZvKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZnJhbWVDYWNoZSA9IHRoaXMuX2ZyYW1lQ2FjaGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZnJhbWVDYWNoZSAmJiBmcmFtZUNhY2hlLmlzSW52YWxpZCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJhbWVDYWNoZS51cGRhdGVUb0ZyYW1lKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZyYW1lcyA9IGZyYW1lQ2FjaGUuZnJhbWVzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2N1ckZyYW1lID0gZnJhbWVzW2ZyYW1lcy5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuX2hlYWRBbmlJbmZvKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9oZWFkQW5pSW5mbyA9IHRoaXMuX2FuaW1hdGlvblF1ZXVlLnNoaWZ0KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fYWNjVGltZSArPSBkdDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2FjY1RpbWUgPiB0aGlzLl9oZWFkQW5pSW5mby5kZWxheSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGFuaUluZm8gPSB0aGlzLl9oZWFkQW5pSW5mbztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2hlYWRBbmlJbmZvID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0QW5pbWF0aW9uICgwLCBhbmlJbmZvLmFuaW1hdGlvbk5hbWUsIGFuaUluZm8ubG9vcCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVDYWNoZShkdCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZVJlYWx0aW1lKGR0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pXG5cbn0pXG4iXX0=