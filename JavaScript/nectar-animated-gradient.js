!function() {
    "use strict";
    Math.sqrt(3),
    Math.sqrt(3);
    var t = 1 / 6;
    Math.sqrt(5),
    Math.sqrt(5);
    function i(t) {
        var i;
        i = "function" == typeof t ? t : t ? function() {
            var t = 0
              , i = 0
              , e = 0
              , s = 1
              , n = (o = 4022871197,
            function(t) {
                t = t.toString();
                for (var i = 0; i < t.length; i++) {
                    var e = .02519603282416938 * (o += t.charCodeAt(i));
                    e -= o = e >>> 0,
                    o = (e *= o) >>> 0,
                    o += 4294967296 * (e -= o)
                }
                return 2.3283064365386963e-10 * (o >>> 0)
            }
            );
            var o;
            t = n(" "),
            i = n(" "),
            e = n(" ");
            for (var r = 0; r < arguments.length; r++)
                (t -= n(arguments[r])) < 0 && (t += 1),
                (i -= n(arguments[r])) < 0 && (i += 1),
                (e -= n(arguments[r])) < 0 && (e += 1);
            return n = null,
            function() {
                var n = 2091639 * t + 2.3283064365386963e-10 * s;
                return t = i,
                i = e,
                e = n - (s = 0 | n)
            }
        }(t) : Math.random,
        this.p = e(i),
        this.perm = new Uint8Array(512),
        this.permMod12 = new Uint8Array(512);
        for (var s = 0; s < 512; s++)
            this.perm[s] = this.p[255 & s],
            this.permMod12[s] = this.perm[s] % 12
    }
    function e(t) {
        var i, e = new Uint8Array(256);
        for (i = 0; i < 256; i++)
            e[i] = i;
        for (i = 0; i < 255; i++) {
            var s = i + ~~(t() * (256 - i))
              , n = e[i];
            e[i] = e[s],
            e[s] = n
        }
        return e
    }
    i.prototype = {
        grad3: new Float32Array([1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1, 0, 1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, -1, 0, 1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1]),
        grad4: new Float32Array([0, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 1, 0, 1, 1, 1, 0, 1, -1, 1, 0, -1, 1, 1, 0, -1, -1, -1, 0, 1, 1, -1, 0, 1, -1, -1, 0, -1, 1, -1, 0, -1, -1, 1, 1, 0, 1, 1, 1, 0, -1, 1, -1, 0, 1, 1, -1, 0, -1, -1, 1, 0, 1, -1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, -1, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 0]),
        noise3D: function(i, e, s) {
            var n, o, r, a, h, c, d, l, u, f, g = this.permMod12, v = this.perm, p = this.grad3, m = (i + e + s) * (1 / 3), w = Math.floor(i + m), b = Math.floor(e + m), x = Math.floor(s + m), y = (w + b + x) * t, M = i - (w - y), _ = e - (b - y), A = s - (x - y);
            M >= _ ? _ >= A ? (h = 1,
            c = 0,
            d = 0,
            l = 1,
            u = 1,
            f = 0) : M >= A ? (h = 1,
            c = 0,
            d = 0,
            l = 1,
            u = 0,
            f = 1) : (h = 0,
            c = 0,
            d = 1,
            l = 1,
            u = 0,
            f = 1) : _ < A ? (h = 0,
            c = 0,
            d = 1,
            l = 0,
            u = 1,
            f = 1) : M < A ? (h = 0,
            c = 1,
            d = 0,
            l = 0,
            u = 1,
            f = 1) : (h = 0,
            c = 1,
            d = 0,
            l = 1,
            u = 1,
            f = 0);
            var S = M - h + t
              , I = _ - c + t
              , C = A - d + t
              , O = M - l + 2 * t
              , k = _ - u + 2 * t
              , q = A - f + 2 * t
              , z = M - 1 + .5
              , L = _ - 1 + .5
              , N = A - 1 + .5
              , P = 255 & w
              , j = 255 & b
              , E = 255 & x
              , V = .6 - M * M - _ * _ - A * A;
            if (V < 0)
                n = 0;
            else {
                var D = 3 * g[P + v[j + v[E]]];
                n = (V *= V) * V * (p[D] * M + p[D + 1] * _ + p[D + 2] * A)
            }
            var W = .6 - S * S - I * I - C * C;
            if (W < 0)
                o = 0;
            else {
                var F = 3 * g[P + h + v[j + c + v[E + d]]];
                o = (W *= W) * W * (p[F] * S + p[F + 1] * I + p[F + 2] * C)
            }
            var H = .6 - O * O - k * k - q * q;
            if (H < 0)
                r = 0;
            else {
                var U = 3 * g[P + l + v[j + u + v[E + f]]];
                r = (H *= H) * H * (p[U] * O + p[U + 1] * k + p[U + 2] * q)
            }
            var T = .6 - z * z - L * L - N * N;
            if (T < 0)
                a = 0;
            else {
                var J = 3 * g[P + 1 + v[j + 1 + v[E + 1]]];
                a = (T *= T) * T * (p[J] * z + p[J + 1] * L + p[J + 2] * N)
            }
            return 32 * (n + o + r + a)
        }
    },
    i._buildPermutationTable = e,
    "undefined" != typeof define && define.amd && define(function() {
        return i
    }),
    "undefined" != typeof exports ? exports.SimplexNoise = i : "undefined" != typeof window && (window.SimplexNoise = i),
    "undefined" != typeof module && (module.exports = i)
}(),
function(t) {
    "use strict";
    const i = new SimplexNoise;
    function e(t, i) {
        this.container = t,
        this.row = i,
        this.setup(),
        this.events(),
        this.rafLoop();
        var e = this;
        setTimeout(function() {
            e.canvas.classList.add("loaded")
        })
    }
    const s = e.prototype;
    function n() {
        document.querySelectorAll("[data-nectar-animated-gradient-settings]").forEach(function(t) {
            const i = t.querySelector(".row-bg-wrap");
            i && new e(i,t)
        })
    }
    s.setup = function() {
        this.canvas = document.createElement("canvas"),
        this.canvas.classList.add("nectar-animated-gradient"),
        this.container.appendChild(this.canvas),
        this.ctx = this.canvas.getContext("2d"),
        this.onMobile = window.innerWidth < 690,
        this.orientationChanged = !1,
        this.clock = 0,
        this.resolution = this.onMobile ? 90 : 110,
        this.resPercentage = 100 / this.resolution,
        this.resPercentageNormalized = this.resPercentage / 100,
        this.canvas.setAttribute("height", this.resolution),
        this.canvas.setAttribute("width", this.resolution),
        this.canvas.style = "width:100%; height: 100%; position: relative;",
        this.imgdata = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height),
        this.cx = this.canvas.width / 2,
        this.cy = this.canvas.height / 2,
        this.data = this.imgdata.data,
        this.settings = {};
        let t = JSON.parse(this.row.getAttribute("data-nectar-animated-gradient-settings"));
        if (Object.assign(this.settings, {
            speed: 1e3,
            color_1: !1,
            color_2: !1,
            blending_mode: "linear"
        }, t),
        this.colorSpeed = 1300 == this.settings.speed ? .5 : .9,
        this.colors = [],
        this.settings.color_1 !== this.settings.color_2 && 0 != this.settings.color_2 || (this.singleColor = !0),
        this.settings.color_1) {
            const t = this.rgbObj(this.settings.color_1);
            this.colors.push({
                r: t.r,
                g: t.g,
                b: t.b
            })
        }
        if (this.settings.color_2) {
            const t = this.rgbObj(this.settings.color_2);
            this.colors.push({
                r: t.r,
                g: t.g,
                b: t.b
            })
        }
    }
    ,
    s.events = function() {
        var t = this;
        this.trackInView(),
        window.addEventListener("resize", function() {
            t.onMobile && !t.orientationChanged || t.resize()
        }),
        window.addEventListener("orientationchange", function() {
            t.orientationChanged = !0
        }),
        this.resize()
    }
    ,
    s.resize = function() {
        this.containerW = this.container.clientWidth,
        this.containerH = this.container.clientHeight;
        let t = this.containerH / this.containerW;
        this.aspectMod = t < 1 ? {
            x: 1.4,
            y: 1.4 * t
        } : {
            x: t / 3,
            y: 1
        }
    }
    ,
    s.isSafari = function() {
        return -1 != navigator.userAgent.indexOf("Safari") && -1 == navigator.userAgent.indexOf("Chrome")
    }
    ,
    s.trackInView = function() {
        if ("IntersectionObserver"in window) {
            let t = this;
            new IntersectionObserver(function(i) {
                i.forEach(function(i) {
                    i.isIntersecting ? t.inView = !0 : t.inView = !1
                })
            }
            ,{
                root: this.isSafari() ? null : document,
                rootMargin: "250px"
            }).observe(this.container)
        }
    }
    ,
    s.rgbObj = function(t) {
        var i = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
        return !!i && {
            r: parseInt(i[1], 16),
            g: parseInt(i[2], 16),
            b: parseInt(i[3], 16)
        }
    }
    ,
    s.mix = function(t, i, e) {
        return t * (1 - e) + i * e
    }
    ,
    s.mixed = function(t, i, e, s) {
        return this.singleColor ? this.colors[0][t] : "organic" == this.settings.blending_mode ? this.mix(this.colors[0][t], this.colors[1][t], this.rotate(i, e, this.clock * this.colorSpeed) * this.resPercentageNormalized * 3.5 * s / 2) : "linear" == this.settings.blending_mode ? this.mix(this.colors[0][t], this.colors[1][t], this.rotate(i, e, this.clock * this.colorSpeed) * this.resPercentageNormalized * 2) : void 0
    }
    ,
    s.rotate = function(t, i, e) {
        let s = Math.PI / 180 * e
          , n = Math.cos(s)
          , o = Math.sin(s);
        return n * (t - this.cx) + o * (i - this.cy) + this.cx
    }
    ,
    s.rafLoop = function() {
        var t = this;
        if (this.inView) {
            for (var e = 0; e < this.resolution; e++)
                for (var s = 0; s < this.resolution; s++) {
                    const t = i.noise3D(e / this.resolution * this.aspectMod.x, s / this.resolution * this.aspectMod.y, this.clock / this.settings.speed);
                    this.data[4 * (e + s * this.resolution) + 0] = this.mixed("r", e, s, t),
                    this.data[4 * (e + s * this.resolution) + 1] = this.mixed("g", e, s, t),
                    this.data[4 * (e + s * this.resolution) + 2] = this.mixed("b", e, s, t),
                    this.data[4 * (e + s * this.resolution) + 3] = 265 * t
                }
            this.clock++,
            this.ctx.putImageData(this.imgdata, 0, 0)
        }
        requestAnimationFrame(function() {
            t.rafLoop()
        })
    }
    ,
    t(document).ready(function() {
        void 0 !== window.vc_iframe || n(),
        t(window).on("vc_reload", function() {
            n()
        })
    })
}(jQuery);
