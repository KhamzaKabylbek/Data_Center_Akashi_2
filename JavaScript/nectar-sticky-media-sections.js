!function(e) {
    "use strict";
    function i(e) {
        this.$el = e,
        this.$mediaSections = this.$el.find(".nectar-sticky-media-section__featured-media"),
        this.$contentSections = this.$el.find(".nectar-sticky-media-section__content"),
        this.usingFrontEndEditor = !(!window.nectarDOMInfo || !window.nectarDOMInfo.usingFrontEndEditor),
        this.direction = "down",
        this.prevScroll = 0,
        this.activeIndex = 0,
        this.prevIndex = -1,
        this.timeout = "",
        this.events()
    }
    var t = i.prototype;
    t.events = function() {
        this.usingFrontEndEditor && this.rebuildMedia(),
        this.observe(),
        window.nectarDOMInfo && window.nectarDOMInfo.usingMobileBrowser && window.nectarDOMInfo.winW < 1e3 || (this.trackDirection(),
        this.verticallyCenter(),
        e(window).on("resize", this.verticallyCenter.bind(this)))
    }
    ,
    t.verticallyCenter = function() {
        if (window.nectarDOMInfo) {
            var i = 0;
            i = e("body").is('[data-header-format="left-header"]') || e("body").is('[data-hhun="1"]') || e("#header-outer").length > 0 && e("#header-outer").is('[data-permanent-transparent="1"]') || e(".page-template-template-no-header-footer").length > 0 || e(".page-template-template-no-header").length > 0 ? 0 : e("#header-space").length > 0 ? e("#header-space").height() : 0,
            window.nectarDOMInfo.adminBarHeight > 0 && (i += window.nectarDOMInfo.adminBarHeight);
            var t = (window.nectarDOMInfo.winH - this.$mediaSections.height()) / 2 + i / 2;
            this.$el[0].style.setProperty("--nectar-sticky-media-sections-vert-y", t + "px")
        }
    }
    ,
    t.isSafari = function() {
        return -1 != navigator.userAgent.indexOf("Safari") && -1 == navigator.userAgent.indexOf("Chrome")
    }
    ,
    t.trackDirection = function() {
        window.nectarDOMInfo.scrollTop != this.prevScroll ? (window.nectarDOMInfo.scrollTop > this.prevScroll ? this.direction = "down" : this.direction = "up",
        this.prevScroll = window.nectarDOMInfo.scrollTop,
        window.requestAnimationFrame(this.trackDirection.bind(this))) : window.requestAnimationFrame(this.trackDirection.bind(this))
    }
    ,
    t.observe = function() {
        var i = this;
        this.sections = Array.from(this.$contentSections.find("> div")),
        "IntersectionObserver"in window && (window.nectarDOMInfo.usingMobileBrowser && window.nectarDOMInfo.winW < 1e3 ? (this.mobileObserver = new IntersectionObserver(function(t) {
            t.forEach(function(t) {
                if (t.isIntersecting) {
                    var n = e(t.target).index()
                      , o = i.$contentSections.find("> .nectar-sticky-media-section__content-section:eq(" + n + ")");
                    if (o.find("video").length > 0)
                        0 == o.find("video")[0].currentTime && i.playSectionVideo(o.find("video")[0]);
                    i.mobileObserver.unobserve(t.target)
                }
            })
        }
        ,{
            rootMargin: "-5% 0% -5% 0%",
            threshold: 0
        }),
        this.$contentSections.find("> div").each(function() {
            i.mobileObserver.observe(e(this)[0])
        })) : (this.observer = new IntersectionObserver(function(t) {
            t.forEach(function(t) {
                if (t.isIntersecting) {
                    var n = e(t.target).index();
                    i.activeIndex = n;
                    var o = i.$mediaSections.find("> .nectar-sticky-media-section__media-wrap:eq(" + n + ")")
                      , r = i.$contentSections.find("> .nectar-sticky-media-section__content-section:eq(" + n + ")")
                      , a = i.$mediaSections.find("> .nectar-sticky-media-section__media-wrap");
                    if (i.activeIndex == i.prevIndex)
                        return;
                    if (clearTimeout(i.timeout),
                    i.timeout = setTimeout(function() {
                        a.removeClass("active"),
                        o.addClass("active")
                    }, 100),
                    !o.hasClass("pause-trigger") || 1 == i.prevIndex && 0 == i.activeIndex || i.prevIndex == a.length - 2 && i.activeIndex == a.length - 1)
                        if (o.find("video").length > 0 && window.nectarDOMInfo.winW > 999 && i.playSectionVideo(o.find("video")[0]),
                        r.find("video").length > 0 && window.nectarDOMInfo.winW < 1e3)
                            0 == r.find("video")[0].currentTime && i.playSectionVideo(r.find("video")[0]);
                    0 == n || n == i.$contentSections.find("> div").length - 1 ? o.addClass("pause-trigger") : a.removeClass("pause-trigger"),
                    i.prevIndex = n
                }
            })
        }
        ,{
            root: this.isSafari() ? null : document,
            rootMargin: "-40% 0% -40% 0%",
            threshold: 0
        }),
        this.$contentSections.find("> div").each(function() {
            i.observer.observe(e(this)[0])
        })))
    }
    ,
    t.playSectionVideo = function(e) {
        var i = this;
        e.readyState >= 2 ? (e.pause(),
        e.currentTime = 0,
        e.play()) : setTimeout(function() {
            i.playSectionVideo(e)
        }, 70)
    }
    ,
    t.shouldUpdate = function(i) {
        return !!("down" === this.direction && !i.isIntersecting || "down" === this.direction && i.isIntersecting && 0 == e(i.target).index()) || !("up" !== this.direction || !i.isIntersecting)
    }
    ,
    t.rebuildMedia = function() {
        var i = this
          , t = [];
        this.$contentSections.find(".nectar-sticky-media-section__content-section").each(function(i) {
            e(this).find(".nectar-sticky-media-content__media-wrap").length > 1 && e(this).find(".nectar-sticky-media-content__media-wrap").each(function(i) {
                i > 0 && e(this).remove()
            }),
            t[i] = e(this).find(".nectar-sticky-media-content__media-wrap").clone(),
            t[i].removeClass("nectar-sticky-media-content__media-wrap").addClass("nectar-sticky-media-section__media-wrap")
        }),
        i.$mediaSections.html(" "),
        t.forEach(function(e) {
            i.$mediaSections.append(e)
        }),
        e(window).trigger("salient-lazyloading-image-reinit")
    }
    ;
    var n = [];
    function o() {
        n = [],
        e(".nectar-sticky-media-sections").each(function(t) {
            n[t] = new i(e(this))
        })
    }
    e(document).ready(function() {
        o(),
        e(window).on("vc_reload", function() {
            setTimeout(o, 200)
        })
    })
}(jQuery);
