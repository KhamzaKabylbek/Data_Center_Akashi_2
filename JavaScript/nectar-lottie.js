!function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = e || self).LottieInteractivity = {})
}(this, function(e) {
    "use strict";
    function t(e) {
        return (t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        )(e)
    }
    function n(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value"in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    function i(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    function r(e, t) {
        if (null == e)
            return {};
        var n, i, r = function(e, t) {
            if (null == e)
                return {};
            var n, i, r = {}, a = Object.keys(e);
            for (i = 0; i < a.length; i++)
                n = a[i],
                t.indexOf(n) >= 0 || (r[n] = e[n]);
            return r
        }(e, t);
        if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(e);
            for (i = 0; i < a.length; i++)
                n = a[i],
                t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
        }
        return r
    }
    function a(e, t) {
        var n = t.get(e);
        if (!n)
            throw new TypeError("attempted to get private field on non-instance");
        return n.get ? n.get.call(e) : n.value
    }
    var o = {
        player: "lottie-player"
    }
      , s = "[lottieInteractivity]:"
      , l = function() {
        function e() {
            var n = this
              , l = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o
              , M = l.actions
              , _ = l.container
              , A = l.mode
              , C = l.player
              , T = r(l, ["actions", "container", "mode", "player"]);
            if (function(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e),
            c.set(this, {
                writable: !0,
                value: function() {
                    if (n.player) {
                        var e = function() {
                            n.player.addEventListener("enterFrame", a(n, L)),
                            n.container.addEventListener("mouseenter", a(n, w)),
                            n.container.addEventListener("mouseleave", a(n, E)),
                            n.container.addEventListener("touchstart", a(n, w), {
                                passive: !0
                            }),
                            n.container.addEventListener("touchend", a(n, E), {
                                passive: !0
                            })
                        };
                        n.stateHandler.set("loop", function() {
                            n.actions[n.interactionIdx].loop ? n.player.loop = parseInt(n.actions[n.interactionIdx].loop) - 1 : n.player.loop = !0,
                            n.player.autoplay = !0
                        }),
                        n.stateHandler.set("autoplay", function() {
                            n.player.loop = !1,
                            n.player.autoplay = !0
                        }),
                        n.stateHandler.set("click", function() {
                            n.player.loop = !1,
                            n.player.autoplay = !1,
                            n.container.addEventListener("click", a(n, p))
                        }),
                        n.stateHandler.set("hover", function() {
                            n.player.loop = !1,
                            n.player.autoplay = !1,
                            n.container.addEventListener("mouseenter", a(n, p)),
                            n.container.addEventListener("touchstart", a(n, p), {
                                passive: !0
                            })
                        }),
                        n.transitionHandler.set("click", function() {
                            n.container.addEventListener("click", a(n, h))
                        }),
                        n.transitionHandler.set("hover", function() {
                            n.container.addEventListener("mouseenter", a(n, h)),
                            n.container.addEventListener("touchstart", a(n, h), {
                                passive: !0
                            })
                        }),
                        n.transitionHandler.set("hold", e),
                        n.transitionHandler.set("pauseHold", e),
                        n.transitionHandler.set("repeat", function() {
                            n.player.loop = !0,
                            n.player.autoplay = !0,
                            n.player.addEventListener("loopComplete", function e() {
                                a(n, f).call(n, {
                                    handler: e
                                })
                            })
                        }),
                        n.transitionHandler.set("onComplete", function() {
                            "loop" === n.actions[n.interactionIdx].state ? n.player.addEventListener("loopComplete", a(n, m)) : n.player.addEventListener("complete", a(n, m))
                        }),
                        n.transitionHandler.set("seek", function() {
                            n.player.stop(),
                            n.player.addEventListener("enterFrame", a(n, g)),
                            n.container.addEventListener("mousemove", a(n, u)),
                            n.container.addEventListener("touchmove", a(n, y), {
                                passive: !1
                            }),
                            n.container.addEventListener("mouseout", a(n, v))
                        })
                    }
                }
            }),
            p.set(this, {
                writable: !0,
                value: function() {
                    var e = n.actions[n.interactionIdx].forceFlag;
                    e || !0 !== n.player.isPaused ? e && a(n, b).call(n, !0) : a(n, b).call(n, !0)
                }
            }),
            d.set(this, {
                writable: !0,
                value: function() {
                    0 === n.clickCounter ? (n.player.play(),
                    n.clickCounter++) : (n.clickCounter++,
                    n.player.setDirection(-1 * n.player.playDirection),
                    n.player.play())
                }
            }),
            h.set(this, {
                writable: !0,
                value: function() {
                    var e = n.actions[n.interactionIdx].forceFlag
                      , t = n.actions[n.interactionIdx].state
                      , i = n.actions[n.interactionIdx].transition;
                    if ("chain" === n.mode) {
                        if (n.actions[n.interactionIdx].count) {
                            var r = parseInt(n.actions[n.interactionIdx].count);
                            if (n.clickCounter < r - 1)
                                return void (n.clickCounter += 1)
                        }
                        return n.clickCounter = 0,
                        "click" === i && "click" === t || "hover" === i && "hover" === t ? n.transitionHandler.get("onComplete").call() : n.nextInteraction(),
                        n.container.removeEventListener("click", a(n, h)),
                        void n.container.removeEventListener("mouseenter", a(n, h))
                    }
                    e || !0 !== n.player.isPaused ? e && n.player.goToAndPlay(0, !0) : n.player.goToAndPlay(0, !0)
                }
            }),
            u.set(this, {
                writable: !0,
                value: function(e) {
                    a(n, S).call(n, e.clientX, e.clientY)
                }
            }),
            y.set(this, {
                writable: !0,
                value: function(e) {
                    e.cancelable && e.preventDefault(),
                    a(n, S).call(n, e.touches[0].clientX, e.touches[0].clientY)
                }
            }),
            v.set(this, {
                writable: !0,
                value: function() {
                    a(n, S).call(n, -1, -1)
                }
            }),
            m.set(this, {
                writable: !0,
                value: function() {
                    "loop" === n.actions[n.interactionIdx].state ? n.player.removeEventListener("loopComplete", a(n, m)) : n.player.removeEventListener("complete", a(n, m)),
                    n.nextInteraction()
                }
            }),
            f.set(this, {
                writable: !0,
                value: function(e) {
                    var t = e.handler
                      , i = 1;
                    n.actions[n.interactionIdx].repeat && (i = n.actions[n.interactionIdx].repeat),
                    n.playCounter >= i - 1 ? (n.playCounter = 0,
                    n.player.removeEventListener("loopComplete", t),
                    n.player.loop = !1,
                    n.player.autoplay = !1,
                    n.nextInteraction()) : n.playCounter += 1
                }
            }),
            g.set(this, {
                writable: !0,
                value: function() {
                    var e = n.actions[n.interactionIdx].frames;
                    e && n.player.currentFrame >= parseInt(e[1]) - 1 && (n.player.removeEventListener("enterFrame", a(n, g)),
                    n.container.removeEventListener("mousemove", a(n, u)),
                    n.container.removeEventListener("mouseout", a(n, v)),
                    setTimeout(n.nextInteraction, 0))
                }
            }),
            L.set(this, {
                writable: !0,
                value: function() {
                    var e = n.actions[n.interactionIdx].frames;
                    (e && n.player.currentFrame >= e[1] || n.player.currentFrame >= n.player.totalFrames - 1) && (n.player.removeEventListener("enterFrame", a(n, L)),
                    n.container.removeEventListener("mouseenter", a(n, w)),
                    n.container.removeEventListener("mouseleave", a(n, E)),
                    n.container.removeEventListener("touchstart", a(n, w), {
                        passive: !0
                    }),
                    n.container.removeEventListener("touchend", a(n, E), {
                        passive: !0
                    }),
                    n.player.pause(),
                    n.holdStatus = !1,
                    n.nextInteraction())
                }
            }),
            w.set(this, {
                writable: !0,
                value: function() {
                    -1 !== n.player.playDirection && null !== n.holdStatus && n.holdStatus || (n.player.setDirection(1),
                    n.player.play(),
                    n.holdStatus = !0)
                }
            }),
            E.set(this, {
                writable: !0,
                value: function() {
                    "hold" === n.actions[n.interactionIdx].transition || "hold" === n.actions[0].type ? (n.player.setDirection(-1),
                    n.player.play()) : "pauseHold" !== n.actions[n.interactionIdx].transition && "pauseHold" !== n.actions[0].type || n.player.pause(),
                    n.holdStatus = !1
                }
            }),
            I.set(this, {
                writable: !0,
                value: function() {
                    var e = n.actions[n.interactionIdx].state
                      , t = n.actions[n.interactionIdx].transition;
                    "hover" !== e && "click" !== e || (n.container.removeEventListener("click", a(n, p)),
                    n.container.removeEventListener("mouseenter", a(n, p))),
                    "hover" !== t && "click" !== t || (n.container.removeEventListener("click", a(n, h)),
                    n.container.removeEventListener("mouseenter", a(n, h)),
                    n.container.removeEventListener("touchstart", a(n, h), {
                        passive: !0
                    }))
                }
            }),
            i(this, "jumpToInteraction", function(e) {
                a(n, I).call(n),
                n.interactionIdx = e,
                n.interactionIdx < 0 ? n.interactionIdx = 0 : n.interactionIdx,
                n.nextInteraction(!1)
            }),
            i(this, "nextInteraction", function() {
                var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                n.oldInterctionIdx = n.interactionIdx,
                a(n, I).call(n);
                var t = n.actions[n.interactionIdx].jumpTo;
                t ? t >= 0 && t < n.actions.length ? (n.interactionIdx = t,
                a(n, k).call(n, {
                    ignorePath: !1
                })) : (n.interactionIdx = 0,
                n.player.goToAndStop(0, !0),
                a(n, k).call(n, {
                    ignorePath: !1
                })) : (e && n.interactionIdx++,
                n.interactionIdx >= n.actions.length ? n.actions[n.actions.length - 1].reset ? (n.interactionIdx = 0,
                n.player.resetSegments(!0),
                n.actions[n.interactionIdx].frames ? n.player.goToAndStop(n.actions[n.interactionIdx].frames, !0) : n.player.goToAndStop(0, !0),
                a(n, k).call(n, {
                    ignorePath: !1
                })) : (n.interactionIdx = n.actions.length - 1,
                a(n, k).call(n, {
                    ignorePath: !1
                })) : a(n, k).call(n, {
                    ignorePath: !1
                })),
                n.container.dispatchEvent(new CustomEvent("transition",{
                    bubbles: !0,
                    composed: !0,
                    detail: {
                        oldIndex: n.oldInterctionIdx,
                        newIndex: n.interactionIdx
                    }
                }))
            }),
            b.set(this, {
                writable: !0,
                value: function(e) {
                    var t = n.actions[n.interactionIdx].frames;
                    if (!t)
                        return n.player.resetSegments(!0),
                        void n.player.goToAndPlay(0, !0);
                    "string" == typeof t ? n.player.goToAndPlay(t, e) : n.player.playSegments(t, e)
                }
            }),
            x.set(this, {
                writable: !0,
                value: function() {
                    var e = n.actions[n.interactionIdx].path;
                    if (!e)
                        if ("object" === t(n.enteredPlayer) && "AnimationItem" === n.enteredPlayer.constructor.name) {
                            if (e = n.enteredPlayer,
                            n.player === e)
                                return void a(n, k).call(n, {
                                    ignorePath: !0
                                })
                        } else {
                            var i = (e = n.loadedAnimation).substr(e.lastIndexOf("/") + 1);
                            if (i = i.substr(0, i.lastIndexOf(".json")),
                            n.player.fileName === i)
                                return void a(n, k).call(n, {
                                    ignorePath: !0
                                })
                        }
                    var r = n.container.getBoundingClientRect()
                      , o = "width: " + r.width + "px !important; height: " + r.height + "px !important; background: " + n.container.style.background;
                    if (n.container.setAttribute("style", o),
                    "object" !== t(n.enteredPlayer) || "AnimationItem" !== n.enteredPlayer.constructor.name) {
                        if ("string" == typeof n.enteredPlayer) {
                            var l = document.querySelector(n.enteredPlayer);
                            l && "LOTTIE-PLAYER" === l.nodeName && (n.attachedListeners || (l.addEventListener("ready", function() {
                                n.container.style.width = "",
                                n.container.style.height = ""
                            }),
                            l.addEventListener("load", function() {
                                n.player = l.getLottie(),
                                a(n, k).call(n, {
                                    ignorePath: !0
                                })
                            }),
                            n.attachedListeners = !0),
                            l.load(e))
                        } else
                            n.enteredPlayer instanceof HTMLElement && "LOTTIE-PLAYER" === n.enteredPlayer.nodeName && (n.attachedListeners || (n.enteredPlayer.addEventListener("ready", function() {
                                n.container.style.width = "",
                                n.container.style.height = ""
                            }),
                            n.enteredPlayer.addEventListener("load", function() {
                                n.player = n.enteredPlayer.getLottie(),
                                a(n, k).call(n, {
                                    ignorePath: !0
                                })
                            }),
                            n.attachedListeners = !0),
                            n.enteredPlayer.load(e));
                        if (!n.player)
                            throw new Error("".concat(s, " Specified player is invalid."),n.enteredPlayer)
                    } else {
                        if (!window.lottie)
                            throw new Error("".concat(s, " A Lottie player is required."));
                        n.stop(),
                        n.player.destroy(),
                        n.container.innerHTML = "",
                        "object" === t(e) && "AnimationItem" === e.constructor.name ? n.player = window.lottie.loadAnimation({
                            loop: !1,
                            autoplay: !1,
                            animationData: e.animationData,
                            container: n.container
                        }) : n.player = window.lottie.loadAnimation({
                            loop: !1,
                            autoplay: !1,
                            path: e,
                            container: n.container
                        }),
                        n.player.addEventListener("DOMLoaded", function() {
                            n.container.style.width = "",
                            n.container.style.height = "",
                            a(n, k).call(n, {
                                ignorePath: !0
                            })
                        })
                    }
                    n.clickCounter = 0,
                    n.playCounter = 0
                }
            }),
            k.set(this, {
                writable: !0,
                value: function(e) {
                    var t = e.ignorePath
                      , i = n.actions[n.interactionIdx].state
                      , r = n.actions[n.interactionIdx].transition
                      , o = n.actions[n.interactionIdx].path
                      , s = n.stateHandler.get(i)
                      , l = n.transitionHandler.get(r)
                      , c = n.actions[n.interactionIdx].speed ? n.actions[n.interactionIdx].speed : 1
                      , p = n.actions[n.interactionIdx].delay ? n.actions[n.interactionIdx].delay : 0;
                    t || !(o || n.actions[n.actions.length - 1].reset && 0 === n.interactionIdx) ? setTimeout(function() {
                        s ? s.call() : "none" === i && (n.player.loop = !1,
                        n.player.autoplay = !1),
                        l && l.call(),
                        n.player.autoplay && (n.player.resetSegments(!0),
                        a(n, b).call(n, !0)),
                        n.player.setSpeed(c)
                    }, p) : a(n, x).call(n)
                }
            }),
            S.set(this, {
                writable: !0,
                value: function(e, t) {
                    if (-1 !== e && -1 !== t) {
                        var i = n.getContainerCursorPosition(e, t);
                        e = i.x,
                        t = i.y
                    }
                    var r = n.actions.find(function(n) {
                        var i = n.position;
                        if (i) {
                            if (Array.isArray(i.x) && Array.isArray(i.y))
                                return e >= i.x[0] && e <= i.x[1] && t >= i.y[0] && t <= i.y[1];
                            if (!Number.isNaN(i.x) && !Number.isNaN(i.y))
                                return e === i.x && t === i.y
                        }
                        return !1
                    });
                    if (r)
                        if ("seek" === r.type || "seek" === r.transition) {
                            var a = (e - r.position.x[0]) / (r.position.x[1] - r.position.x[0])
                              , o = (t - r.position.y[0]) / (r.position.y[1] - r.position.y[0]);
                            n.player.playSegments(r.frames, !0),
                            r.position.y[0] < 0 && r.position.y[1] > 1 ? n.player.goToAndStop(Math.floor(a * n.player.totalFrames), !0) : n.player.goToAndStop(Math.ceil((a + o) / 2 * n.player.totalFrames), !0)
                        } else
                            "loop" === r.type ? n.player.playSegments(r.frames, !0) : "play" === r.type ? (!0 === n.player.isPaused && n.player.resetSegments(),
                            n.player.playSegments(r.frames)) : "stop" === r.type && (n.player.resetSegments(!0),
                            n.player.goToAndStop(r.frames[0], !0))
                }
            }),
            P.set(this, {
                writable: !0,
                value: function() {
                    var e = n.getContainerVisibility()
                      , t = n.actions.find(function(t) {
                        var n = t.visibility;
                        return e >= n[0] && e <= n[1]
                    });
                    if (t)
                        if ("seek" === t.type) {
                            var i = t.frames[0]
                              , r = 2 == t.frames.length ? t.frames[1] : n.player.totalFrames - 1;
                            null !== n.assignedSegment && (n.player.resetSegments(!0),
                            n.assignedSegment = null),
                            n.player.goToAndStop(i + Math.round((e - t.visibility[0]) / (t.visibility[1] - t.visibility[0]) * (r - i)), !0)
                        } else
                            "loop" === t.type ? (n.player.loop = !0,
                            (null === n.assignedSegment || n.assignedSegment !== t.frames || !0 === n.player.isPaused) && (n.player.playSegments(t.frames, !0),
                            n.assignedSegment = t.frames)) : "play" === t.type ? n.scrolledAndPlayed || (n.scrolledAndPlayed = !0,
                            n.player.resetSegments(!0),
                            t.frames ? n.player.playSegments(t.frames, !0) : n.player.play()) : "stop" === t.type && n.player.goToAndStop(t.frames[0], !0)
                }
            }),
            this.enteredPlayer = C,
            "object" !== t(C) || "AnimationItem" !== C.constructor.name) {
                if ("string" == typeof C) {
                    var O = document.querySelector(C);
                    O && "LOTTIE-PLAYER" === O.nodeName && (C = O.getLottie())
                } else
                    C instanceof HTMLElement && "LOTTIE-PLAYER" === C.nodeName && (C = C.getLottie());
                if (!C)
                    throw new Error(s + "Specified player:" + C + " is invalid.")
            }
            "string" == typeof _ && (_ = document.querySelector(_)),
            _ || (_ = C.wrapper),
            this.player = C,
            this.loadedAnimation = this.player.path + this.player.fileName + ".json",
            this.attachedListeners = !1,
            this.container = _,
            this.mode = A,
            this.actions = M,
            this.options = T,
            this.assignedSegment = null,
            this.scrolledAndPlayed = !1,
            this.interactionIdx = 0,
            this.oldInterctionIdx = 0,
            this.clickCounter = 0,
            this.playCounter = 0,
            this.stateHandler = new Map,
            this.transitionHandler = new Map
        }
        var l, M;
        return l = e,
        (M = [{
            key: "getContainerVisibility",
            value: function() {
                var e = this.container.getBoundingClientRect()
                  , t = e.top
                  , n = e.height;
                return (window.innerHeight - t) / (window.innerHeight + n)
            }
        }, {
            key: "getContainerCursorPosition",
            value: function(e, t) {
                var n = this.container.getBoundingClientRect()
                  , i = n.top;
                return {
                    x: (e - n.left) / n.width,
                    y: (t - i) / n.height
                }
            }
        }, {
            key: "initScrollMode",
            value: function() {
                this.player.stop(),
                window.addEventListener("scroll", a(this, P), !0)
            }
        }, {
            key: "initCursorMode",
            value: function() {
                this.actions && 1 === this.actions.length ? "click" === this.actions[0].type ? (this.player.loop = !1,
                this.player.stop(),
                this.container.addEventListener("click", a(this, h))) : "hover" === this.actions[0].type ? (this.player.loop = !1,
                this.player.stop(),
                this.container.addEventListener("mouseenter", a(this, h)),
                this.container.addEventListener("touchstart", a(this, h), {
                    passive: !0
                })) : "toggle" === this.actions[0].type ? (this.player.loop = !1,
                this.player.stop(),
                this.container.addEventListener("click", a(this, d))) : "hold" === this.actions[0].type || "pauseHold" === this.actions[0].type ? (this.container.addEventListener("mouseenter", a(this, w)),
                this.container.addEventListener("mouseleave", a(this, E)),
                this.container.addEventListener("touchstart", a(this, w), {
                    passive: !0
                }),
                this.container.addEventListener("touchend", a(this, E), {
                    passive: !0
                })) : "seek" === this.actions[0].type && (this.player.loop = !0,
                this.player.stop(),
                this.container.addEventListener("mousemove", a(this, u)),
                this.container.addEventListener("touchmove", a(this, y), {
                    passive: !1
                }),
                this.container.addEventListener("mouseout", a(this, v))) : (this.player.loop = !0,
                this.player.stop(),
                this.container.addEventListener("mousemove", a(this, u)),
                this.container.addEventListener("mouseleave", a(this, v)),
                a(this, S).call(this, -1, -1))
            }
        }, {
            key: "initChainMode",
            value: function() {
                a(this, c).call(this),
                this.player.loop = !1,
                this.player.stop(),
                a(this, k).call(this, {
                    ignorePath: !1
                })
            }
        }, {
            key: "start",
            value: function() {
                var e = this;
                "scroll" === this.mode ? this.player.isLoaded ? this.initScrollMode() : this.player.addEventListener("DOMLoaded", function() {
                    e.initScrollMode()
                }) : "cursor" === this.mode ? this.player.isLoaded ? this.initCursorMode() : this.player.addEventListener("DOMLoaded", function() {
                    e.initCursorMode()
                }) : "chain" === this.mode && (this.player.isLoaded ? this.initChainMode() : this.player.addEventListener("DOMLoaded", function() {
                    e.initChainMode()
                }))
            }
        }, {
            key: "redefineOptions",
            value: function(e) {
                var n = e.actions
                  , i = e.container
                  , a = e.mode
                  , o = e.player
                  , l = r(e, ["actions", "container", "mode", "player"]);
                if (this.stop(),
                this.enteredPlayer = o,
                "object" !== t(o) || "AnimationItem" !== o.constructor.name) {
                    if ("string" == typeof o) {
                        var c = document.querySelector(o);
                        c && "LOTTIE-PLAYER" === c.nodeName && (o = c.getLottie())
                    } else
                        o instanceof HTMLElement && "LOTTIE-PLAYER" === o.nodeName && (o = o.getLottie());
                    if (!o)
                        throw new Error(s + "Specified player:" + o + " is invalid.",o)
                }
                "string" == typeof i && (i = document.querySelector(i)),
                i || (i = o.wrapper),
                this.player = o,
                this.loadedAnimation = this.player.path + this.player.fileName + ".json",
                this.attachedListeners = !1,
                this.container = i,
                this.mode = a,
                this.actions = n,
                this.options = l,
                this.assignedSegment = null,
                this.scrolledAndPlayed = !1,
                this.interactionIdx = 0,
                this.clickCounter = 0,
                this.playCounter = 0,
                this.holdStatus = null,
                this.stateHandler = new Map,
                this.transitionHandler = new Map,
                this.start()
            }
        }, {
            key: "stop",
            value: function() {
                if ("scroll" === this.mode && window.removeEventListener("scroll", a(this, P), !0),
                "cursor" === this.mode && (this.container.removeEventListener("click", a(this, h)),
                this.container.removeEventListener("click", a(this, d)),
                this.container.removeEventListener("mouseenter", a(this, h)),
                this.container.removeEventListener("touchstart", a(this, h)),
                this.container.removeEventListener("touchmove", a(this, y)),
                this.container.removeEventListener("mousemove", a(this, u)),
                this.container.removeEventListener("mouseleave", a(this, v)),
                this.container.removeEventListener("touchstart", a(this, w)),
                this.container.removeEventListener("touchend", a(this, E))),
                "chain" === this.mode && (this.container.removeEventListener("click", a(this, h)),
                this.container.removeEventListener("click", a(this, p)),
                this.container.removeEventListener("mouseenter", a(this, h)),
                this.container.removeEventListener("touchstart", a(this, h)),
                this.container.removeEventListener("touchmove", a(this, y)),
                this.container.removeEventListener("mouseenter", a(this, p)),
                this.container.removeEventListener("touchstart", a(this, p)),
                this.container.removeEventListener("mouseenter", a(this, w)),
                this.container.removeEventListener("touchstart", a(this, w)),
                this.container.removeEventListener("mouseleave", a(this, E)),
                this.container.removeEventListener("mousemove", a(this, u)),
                this.container.removeEventListener("mouseout", a(this, v)),
                this.container.removeEventListener("touchend", a(this, E)),
                this.player))
                    try {
                        this.player.removeEventListener("loopComplete", a(this, m)),
                        this.player.removeEventListener("complete", a(this, m)),
                        this.player.removeEventListener("enterFrame", a(this, g)),
                        this.player.removeEventListener("enterFrame", a(this, L))
                    } catch (e) {}
                this.player = null
            }
        }]) && n(l.prototype, M),
        e
    }()
      , c = new WeakMap
      , p = new WeakMap
      , d = new WeakMap
      , h = new WeakMap
      , u = new WeakMap
      , y = new WeakMap
      , v = new WeakMap
      , m = new WeakMap
      , f = new WeakMap
      , g = new WeakMap
      , L = new WeakMap
      , w = new WeakMap
      , E = new WeakMap
      , I = new WeakMap
      , b = new WeakMap
      , x = new WeakMap
      , k = new WeakMap
      , S = new WeakMap
      , P = new WeakMap
      , M = function(e) {
        var t = new l(e);
        return t.start(),
        t
    };
    e.LottieInteractivity = l,
    e.create = M,
    e.default = M,
    Object.defineProperty(e, "__esModule", {
        value: !0
    })
}),
function(e) {
    "use strict";
    function t(t) {
        this.el = t,
        this.setupProps(),
        this.domPosition(),
        0 == e(this.el).parents(".tabbed").length && !this.isInstagram() && 0 == e("#nectar_fullscreen_rows").length && "IntersectionObserver"in window ? this.inViewLoad() : this.init()
    }
    var n = t.prototype;
    let i;
    function r() {
        let e = document.querySelectorAll(".nectar-lottie");
        i = Array.from(e).map(function(e) {
            return new t(e)
        })
    }
    n.setupProps = function() {
        let e = JSON.parse(this.el.getAttribute("data-lottie-settings"));
        Object.keys(e).forEach(function(t) {
            e[t] = "true" === e[t] || e[t]
        }),
        "function" == typeof Object.assign && Object.assign(this, {
            json_url: "",
            trigger_type: "viewport",
            hover_func: "hover",
            loop: !1,
            mobile_func: "default",
            trigger_offset: "0, 100",
            trigger_delay: 0,
            frame_constraint: "0, 100",
            speed: 1,
            frameCount: 0,
            attach_to_element: "",
            preserve_aspect_ratio: "xMidYMid meet"
        }, e),
        window.nectarDOMInfo && window.nectarDOMInfo.winW > 1e3 && (this.mobile_func = "default")
    }
    ,
    n.domPosition = function() {
        if (this.attach_to_element.length > 0) {
            const t = e(this.el).parent().detach();
            e("body").find(this.attach_to_element).append(t)
        }
    }
    ,
    n.init = function() {
        this.id = "nectar-lottie-" + Math.ceil(Date.now() + Math.random()),
        this.el.setAttribute("id", this.id),
        "last_frame" !== this.mobile_func && "seek" !== this.trigger_type && "hover" !== this.trigger_type || (this.loop = !1),
        this.instance = lottie.loadAnimation({
            container: this.el,
            renderer: "svg",
            loop: this.loop,
            autoplay: !1,
            path: this.json_url,
            rendererSettings: {
                preserveAspectRatio: this.preserve_aspect_ratio
            }
        }),
        this.instance.setSpeed(parseFloat(this.speed)),
        "play" === this.trigger_type && this.inView(this.el) && (this.trigger_type = "autoplay"),
        "last_frame" === this.mobile_func && (this.trigger_delay = 0,
        this.trigger_type = "autoplay");
        var e = this;
        "autoplay" === this.trigger_type && this.instance.addEventListener("DOMLoaded", function() {
            0 != e.trigger_delay ? setTimeout(e.playFrames.bind(e), e.trigger_delay) : e.playFrames()
        }),
        this.instance.addEventListener("data_ready", function() {
            e.frameCount = e.instance.totalFrames,
            "autoplay" !== e.trigger_type && 0 == e.trigger_delay ? e.lottieInteractivity() : "play" === e.trigger_type && 0 != e.trigger_delay && e.scrollTriggerPlay()
        })
    }
    ,
    n.lottieInteractivity = function() {
        let t = this
          , n = this.trigger_offset.split(",");
        n = n.map(function(e) {
            return parseInt(e) / 100
        });
        let i = this.frame_constraint.split(",");
        i = i.map(function(e) {
            return Math.floor(t.instance.totalFrames * (parseInt(e) / 100))
        }),
        "seek" === this.trigger_type && (i[1] -= 1);
        let r = "hover" === this.trigger_type ? "cursor" : "scroll"
          , a = "hover" === this.trigger_type ? this.hover_func : this.trigger_type;
        this.interactiveInstance = LottieInteractivity.create({
            mode: r,
            player: this.instance,
            actions: [{
                visibility: n,
                type: a,
                frames: [i[0], i[1]]
            }]
        }),
        e(window).trigger("salient-parallax-el-recalculate"),
        e(window).trigger("salient-parallax-bg-recalculate")
    }
    ,
    n.scrollTriggerPlay = function() {
        if ("IntersectionObserver"in window) {
            const t = this
              , n = new IntersectionObserver(function(i) {
                i.forEach(function(i) {
                    i.isIntersecting && (setTimeout(t.playFrames.bind(t), t.trigger_delay),
                    e(window).trigger("salient-parallax-el-recalculate"),
                    e(window).trigger("salient-parallax-bg-recalculate"),
                    n.unobserve(i.target))
                })
            }
            ,{
                root: this.isSafari() ? null : document,
                rootMargin: "-12% 0% -12% 0%",
                threshold: 0
            });
            n.observe(this.el)
        }
    }
    ,
    n.lazyInit = function() {
        const t = this
          , n = new IntersectionObserver(function(i) {
            i.forEach(function(i) {
                i.isIntersecting && (t.init(),
                n.unobserve(i.target),
                e(window).trigger("salient-parallax-el-recalculate"),
                e(window).trigger("salient-parallax-bg-recalculate"))
            })
        }
        ,{
            root: this.isSafari() ? null : document,
            rootMargin: "300px 0px 300px 0px",
            threshold: 0
        });
        n.observe(this.el)
    }
    ,
    n.inView = function(e) {
        return e.getBoundingClientRect().top < window.innerHeight
    }
    ,
    n.isSafari = function() {
        return -1 != navigator.userAgent.indexOf("Safari") && -1 == navigator.userAgent.indexOf("Chrome")
    }
    ,
    n.isInstagram = function() {
        return -1 != navigator.userAgent.indexOf("Instagram")
    }
    ,
    n.inViewLoad = function() {
        let e = this;
        const t = new IntersectionObserver(function(n) {
            n.forEach(function(n) {
                n.isIntersecting ? e.init() : e.lazyInit(),
                t.unobserve(n.target)
            })
        }
        ,{
            root: this.isSafari() ? null : document,
            rootMargin: "49%",
            threshold: 0
        });
        t.observe(this.el)
    }
    ,
    n.playFrames = function(e) {
        var t = this;
        let n = this.frame_constraint.split(",");
        n = n.map(function(e) {
            return Math.floor(t.frameCount * (parseInt(e) / 100))
        }),
        "last_frame" != this.mobile_func ? e ? this.instance.goToAndStop(n[0]) : this.instance.playSegments(n, !0) : this.instance.goToAndStop(n[1] - 1, !0)
    }
    ,
    e(document).ready(function() {
        void 0 !== window.vc_iframe || r(),
        e(window).on("vc_reload", function() {
            lottie.destroy(),
            r()
        }),
        e(window).on("fp-section-init", function() {
            i.forEach(function(t) {
                "play" == t.trigger_type && (e(t.el).parents(".fp-table.active").length > 0 ? t.playFrames() : t.playFrames(!0))
            })
        })
    })
}(jQuery);
