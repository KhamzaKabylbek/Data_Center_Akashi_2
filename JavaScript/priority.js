var headerEl = document.getElementById("header-outer")
  , headerSpaceEl = document.getElementById("header-space");
void 0 !== headerEl && null != headerEl && void 0 !== headerSpaceEl && null != headerSpaceEl && headerSpaceEl.hasAttribute("data-secondary-header-display") && (headerSpaceEl.style.height = headerEl.clientHeight + "px"),
jQuery(function(e) {
    "use strict";
    var t, a, r, n, o, d, i = !1;
    function h() {
        var a = t.offset().top;
        e("#page-header-wrap.fullscreen-header").css("height", "auto"),
        t.css("height", parseInt(window.innerHeight) - parseInt(a) + "px")
    }
    if (navigator.userAgent.match(/(Android|iPod|iPhone|iPad|BlackBerry|IEMobile|Opera Mini)/) && (i = !0),
    i && e("#page-header-bg.fullscreen-header").length > 0) {
        t = e("#page-header-bg"),
        h();
        var l = window.innerWidth
          , s = window.innerHeight;
        e(window).resize(function() {
            e(window).width() != l && e(window).height != s && (h(),
            l = window.innerWidth,
            s = window.innerHeight)
        })
    }
    i && e(".nectar_fullscreen_zoom_recent_projects").length > 0 && (a = e(".body-border-top").length > 0 && e(window).width() > 1e3 ? e(".body-border-top").height() : 0,
    e(".nectar_fullscreen_zoom_recent_projects").each(function() {
        e(this).parents(".first-section").length > 0 ? e(this).css("height", e(window).height() - e(this).offset().top - a) : e(this).css("height", e(window).height())
    })),
    e('#header-outer[data-format="centered-menu-bottom-bar"]').length > 0 && (r = e('#header-outer[data-format="centered-menu-bottom-bar"] header#top .span_9'),
    n = e('#header-outer[data-format="centered-menu-bottom-bar"] header#top .span_3'),
    o = e("#header-secondary-outer"),
    (d = n.find("#logo").clone()).is('[data-supplied-ml="true"]') && d.find("img:not(.mobile-only-logo)").remove(),
    d.find("img.starting-logo").remove(),
    o.length > 0 && o.addClass("centered-menu-bottom-bar"),
    e('#header-outer[data-condense="true"]').length > 0 && 0 == e('#header-outer[data-menu-bottom-bar-align="left"]').length && r.prepend(d)),
    e('#page-header-bg[data-animate-in-effect="zoom-out"]').addClass("loaded")
});
