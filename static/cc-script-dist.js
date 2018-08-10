!function(n) {
    function i() {
        var e = jQuery(".bb-downloads .overlay").eq(0);
        e.show(), e.find(".form").show(), setTimeout(function() {
            e.addClass("revealed"), e.find(".close").one("click", o);
        }, 15);
    }
    function o() {
        var e = jQuery(".bb-downloads .overlay").eq(0);
        e.removeClass("revealed"), setTimeout(function() {
            e.hide(), e.find(".form").hide();
        }, 650);
    }
    n(window).resize(function() {
        n("#track").find(".frame").css("opacity", "0.3");
        var e = n(window).width();
        switch (!0) {
          case 700 < e:
            n("#track").find(".frame").first().css("marginLeft", "0");
            break;

          case e < 700:
            n("#track").find(".frame").first().css("marginLeft", "-70%");
        }
        switch (!0) {
          case 1300 < e:
            n("#track").find(".frame").eq(1).css("opacity", "1"), n("#track").find(".frame").eq(2).css("opacity", "1");
            break;

          case 700 < e:
          case 0 < e:
            n("#track").find(".frame").eq(1).css("opacity", "1");
        }
    }), jQuery(document).ready(function() {
        function e(e) {
            var t = n(window).width();
            switch (!0) {
              case 1300 < t:
                if ("fwd" == e) {
                    var i = n("#track").find(".frame").first().clone();
                    n("#track").find(".frame").first().animate({
                        marginLeft: "-25%"
                    }, 400, function() {
                        n("#track").find(".frame").first().remove(), n("#track").append(i);
                    }), n("#track").find(".frame").eq(2).fadeTo(100, 1), n("#track").find(".frame").eq(3).fadeTo(100, 1);
                } else {
                    i = n("#track").find(".frame").last().clone().css("opacity", "0.3");
                    n("#track").find(".frame").last().remove(), i.css("marginLeft", "-25%"), n("#track").prepend(i), 
                    n("#track").find(".frame").first().animate({
                        marginLeft: "0"
                    }, 400, function() {}), n("#track").find(".frame").eq(1).fadeTo(100, 1), n("#track").find(".frame").eq(2).fadeTo(100, 1);
                }
                break;

              case 700 < t:
                if ("fwd" == e) {
                    i = n("#track").find(".frame").first().clone();
                    n("#track").find(".frame").first().animate({
                        marginLeft: "-33.3%"
                    }, 400, function() {
                        n("#track").find(".frame").first().remove(), n("#track").append(i);
                    }), n("#track").find(".frame").eq(2).fadeTo(100, 1);
                } else {
                    (i = n("#track").find(".frame").last().clone().css("opacity", "0.3")).css("marginLeft", "-33.3%"), 
                    n("#track").prepend(i), n("#track").find(".frame").last().remove(), n("#track").find(".frame").first().animate({
                        marginLeft: "0"
                    }, 400, function() {}), n("#track").find(".frame").eq(1).fadeTo(100, 1);
                }
                break;

              case 0 < t:
                if ("fwd" == e) n("#track").find(".frame").first().animate({
                    marginLeft: "-150%"
                }, 400, function() {
                    n("#track").find(".frame").first().next().css("marginLeft", "-70%");
                    var e = n("#track").find(".frame").first().clone();
                    e.css("marginLeft", "0"), n("#track").find(".frame").first().remove(), n("#track").append(e);
                }), n("#track").find(".frame").eq(2).fadeTo(100, 1); else n("#track").find(".frame").first().css("marginLeft", "-150%"), 
                (i = n("#track").find(".frame").first().clone()).css("marginLeft", "0%"), n("#track").find(".frame").first().after(i), 
                n("#track").find(".frame").first().animate({
                    marginLeft: "-70%"
                }, 400, function() {
                    var e = n("#track").find(".frame").last().clone();
                    n("#track").find(".frame").last().remove(), e.css("marginLeft", "-70%"), n("#track").find(".frame").first().remove(), 
                    n("#track").prepend(e);
                }), n("#track").find(".frame").eq(1).fadeTo(100, 1);
            }
        }
        jQuery(".bb-downloads .item, .bb-downloads .download").on("click", i), jQuery(".bb-downloads .overlay").on("click", function(e) {
            jQuery(e.target).hasClass("overlay") && jQuery(e.target).hasClass("revealed") && o();
        }), n(".frontb").last().find(".mage").children("div").addClass("grade"), n("#track").find(".frame").fadeTo(100, .3);
        var t = n(window).width();
        switch (!0) {
          case 700 < t:
            n("#track").find(".frame").first().css("marginLeft", "0");
            break;

          case t < 700:
            n("#track").find(".frame").first().css("marginLeft", "-70%");
        }
        switch (!0) {
          case 1300 < t:
            n("#track").find(".frame").eq(1).fadeTo(100, 1), n("#track").find(".frame").eq(2).fadeTo(100, 1);
            break;

          case 700 < t:
          case 0 < t:
            n("#track").find(".frame").eq(1).fadeTo(100, 1);
        }
        n(window).on("swipeleft", function() {
            n("#fwd").click();
        }), n(window).on("swiperight", function() {
            n("#back").click();
        }), n("#fwd").click(function() {
            n(".frame").fadeTo(100, .3), e("fwd");
        }), n("#back").click(function() {
            n(".frame").fadeTo(100, .3), e("back");
        });
    }), jQuery(window).load(function() {}), jQuery(window).resize(function() {});
}(jQuery), function(o) {
    o(document).ready(function() {
        o(".hamburger").click(function(e) {
            o("html").toggleClass("fullscreen-menu");
        }), o(".sub-menu").parent().hover(function() {
            var e = o(this).find("ul");
            o(e).offset().left + e.width() > o(window).width() && o(e).addClass("reverse");
        }), o(".sub-menu").each(function(e, t) {
            var i = o(t).closest("li"), n = i.children("a").attr("href");
            i.attr("class").replace("menu-item-has-children", "menu-item-has-children-link"), 
            i.html();
            jQuery(this).prepend('<li class="duplicate-link"><a href="' + n + '">' + i.children("a").html() + "</a></li>");
        }), jQuery("#main-menu .sub-menu > li:not(.menu-item-has-children) > a").on("touchstart", function() {
            var e = jQuery(this).attr("href");
            window.location = e;
        }), o("#header .menu-item-has-children > a").on("click touchstart", function(e) {
            o("html").hasClass("fullscreen-menu") && (e.preventDefault(), o(this).siblings(".sub-menu").toggleClass("open"));
        }), o("#header .menu-item-back > a").click(function(e) {
            e.preventDefault(), $ancestorMenus = o(this).parents("ul"), $parentMenu = o($ancestorMenus[0]), 
            $parentMenu.toggleClass("open");
        });
    });
}(jQuery), function(e) {
    e(document).ready(function() {
        e("#gform_4").length && (e(document).on("change", ".prod", function() {
            console.log(e(this).val()), e(this).closest("tr").find(".log").val(e(this).val());
        }), e(document).on("change", ".log", function() {
            e(this).closest("tr").find(".prod").val(e(this).val());
        }), e(".gfield_list_12_cell1").find("select").each(function() {
            e(this).addClass("log");
        }), e(".gfield_list_12_cell2").find("select").each(function() {
            e(this).addClass("prod");
        }));
    });
}(jQuery), function(c) {
    "use strict";
    function n(e, t) {
        if (!(this instanceof n)) {
            var i = new n(e, t);
            return i.open(), i;
        }
        this.id = n.id++, this.setup(e, t), this.chainCallbacks(n._callbackChain);
    }
    if (void 0 !== c) {
        var o = [], s = function(t) {
            return o = c.grep(o, function(e) {
                return e !== t && 0 < e.$instance.closest("body").length;
            });
        }, i = {
            keyup: "onKeyUp",
            resize: "onResize"
        }, r = function(e) {
            c.each(n.opened().reverse(), function() {
                return e.isDefaultPrevented() || !1 !== this[i[e.type]](e) ? void 0 : (e.preventDefault(), 
                e.stopPropagation(), !1);
            });
        }, a = function(e) {
            if (e !== n._globalHandlerInstalled) {
                n._globalHandlerInstalled = e;
                var t = c.map(i, function(e, t) {
                    return t + "." + n.prototype.namespace;
                }).join(" ");
                c(window)[e ? "on" : "off"](t, r);
            }
        };
        n.prototype = {
            constructor: n,
            namespace: "featherlight",
            targetAttr: "data-featherlight",
            variant: null,
            resetCss: !1,
            background: null,
            openTrigger: "click",
            closeTrigger: "click",
            filter: null,
            root: "body",
            openSpeed: 250,
            closeSpeed: 250,
            closeOnClick: "background",
            closeOnEsc: !0,
            closeIcon: "&#10005;",
            loading: "",
            persist: !1,
            otherClose: null,
            beforeOpen: c.noop,
            beforeContent: c.noop,
            beforeClose: c.noop,
            afterOpen: c.noop,
            afterContent: c.noop,
            afterClose: c.noop,
            onKeyUp: c.noop,
            onResize: c.noop,
            type: null,
            contentFilters: [ "jquery", "image", "html", "ajax", "iframe", "text" ],
            setup: function(e, t) {
                "object" != typeof e || e instanceof c != 0 || t || (t = e, e = void 0);
                var i = c.extend(this, t, {
                    target: e
                }), n = i.resetCss ? i.namespace + "-reset" : i.namespace, o = c(i.background || [ '<div class="' + n + "-loading " + n + '">', '<div class="' + n + '-content">', '<span class="' + n + "-close-icon " + i.namespace + '-close">', i.closeIcon, "</span>", '<div class="' + i.namespace + '-inner">' + i.loading + "</div>", "</div>", "</div>" ].join("")), s = "." + i.namespace + "-close" + (i.otherClose ? "," + i.otherClose : "");
                return i.$instance = o.clone().addClass(i.variant), i.$instance.on(i.closeTrigger + "." + i.namespace, function(e) {
                    var t = c(e.target);
                    ("background" === i.closeOnClick && t.is("." + i.namespace) || "anywhere" === i.closeOnClick || t.closest(s).length) && (e.preventDefault(), 
                    i.close());
                }), this;
            },
            getContent: function() {
                if (!1 !== this.persist && this.$content) return this.$content;
                var t = this, e = this.constructor.contentFilters, i = function(e) {
                    return t.$currentTarget && t.$currentTarget.attr(e);
                }, n = i(t.targetAttr), o = t.target || n || "", s = e[t.type];
                if (!s && o in e && (s = e[o], o = t.target && n), o = o || i("href") || "", !s) for (var r in e) t[r] && (s = e[r], 
                o = t[r]);
                if (!s) {
                    var a = o;
                    if (o = null, c.each(t.contentFilters, function() {
                        return (s = e[this]).test && (o = s.test(a)), !o && s.regex && a.match && a.match(s.regex) && (o = a), 
                        !o;
                    }), !o) return "console" in window && window.console.error("Featherlight: no content filter found " + (a ? ' for "' + a + '"' : " (no target specified)")), 
                    !1;
                }
                return s.process.call(t, o);
            },
            setContent: function(e) {
                var t = this;
                return (e.is("iframe") || 0 < c("iframe", e).length) && t.$instance.addClass(t.namespace + "-iframe"), 
                t.$instance.removeClass(t.namespace + "-loading"), t.$instance.find("." + t.namespace + "-inner").not(e).slice(1).remove().end().replaceWith(c.contains(t.$instance[0], e[0]) ? "" : e), 
                t.$content = e.addClass(t.namespace + "-inner"), t;
            },
            open: function(t) {
                var i = this;
                if (i.$instance.hide().appendTo(i.root), !(t && t.isDefaultPrevented() || !1 === i.beforeOpen(t))) {
                    t && t.preventDefault();
                    var e = i.getContent();
                    if (e) return o.push(i), a(!0), i.$instance.fadeIn(i.openSpeed), i.beforeContent(t), 
                    c.when(e).always(function(e) {
                        i.setContent(e), i.afterContent(t);
                    }).then(i.$instance.promise()).done(function() {
                        i.afterOpen(t);
                    });
                }
                return i.$instance.detach(), c.Deferred().reject().promise();
            },
            close: function(e) {
                var t = this, i = c.Deferred();
                return !1 === t.beforeClose(e) ? i.reject() : (0 === s(t).length && a(!1), t.$instance.fadeOut(t.closeSpeed, function() {
                    t.$instance.detach(), t.afterClose(e), i.resolve();
                })), i.promise();
            },
            chainCallbacks: function(e) {
                for (var t in e) this[t] = c.proxy(e[t], this, c.proxy(this[t], this));
            }
        }, c.extend(n, {
            id: 0,
            autoBind: "[data-featherlight]",
            defaults: n.prototype,
            contentFilters: {
                jquery: {
                    regex: /^[#.]\w/,
                    test: function(e) {
                        return e instanceof c && e;
                    },
                    process: function(e) {
                        return !1 !== this.persist ? c(e) : c(e).clone(!0);
                    }
                },
                image: {
                    regex: /\.(png|jpg|jpeg|gif|tiff|bmp)(\?\S*)?$/i,
                    process: function(e) {
                        var t = c.Deferred(), i = new Image(), n = c('<img src="' + e + '" alt="" class="' + this.namespace + '-image" />');
                        return i.onload = function() {
                            n.naturalWidth = i.width, n.naturalHeight = i.height, t.resolve(n);
                        }, i.onerror = function() {
                            t.reject(n);
                        }, i.src = e, t.promise();
                    }
                },
                html: {
                    regex: /^\s*<[\w!][^<]*>/,
                    process: function(e) {
                        return c(e);
                    }
                },
                ajax: {
                    regex: /./,
                    process: function(e) {
                        var i = c.Deferred(), n = c("<div></div>").load(e, function(e, t) {
                            "error" !== t && i.resolve(n.contents()), i.fail();
                        });
                        return i.promise();
                    }
                },
                iframe: {
                    process: function(e) {
                        var t = new c.Deferred(), i = c("<iframe/>").hide().attr("src", e).css(function(e, t) {
                            var i = {}, n = new RegExp("^" + t + "([A-Z])(.*)");
                            for (var o in e) {
                                var s = o.match(n);
                                s && (i[(s[1] + s[2].replace(/([A-Z])/g, "-$1")).toLowerCase()] = e[o]);
                            }
                            return i;
                        }(this, "iframe")).on("load", function() {
                            t.resolve(i.show());
                        }).appendTo(this.$instance.find("." + this.namespace + "-content"));
                        return t.promise();
                    }
                },
                text: {
                    process: function(e) {
                        return c("<div>", {
                            text: e
                        });
                    }
                }
            },
            functionAttributes: [ "beforeOpen", "afterOpen", "beforeContent", "afterContent", "beforeClose", "afterClose" ],
            readElementConfig: function(e, t) {
                var n = this, o = new RegExp("^data-" + t + "-(.*)"), s = {};
                return e && e.attributes && c.each(e.attributes, function() {
                    var e = this.name.match(o);
                    if (e) {
                        var t = this.value, i = c.camelCase(e[1]);
                        if (0 <= c.inArray(i, n.functionAttributes)) t = new Function(t); else try {
                            t = c.parseJSON(t);
                        } catch (e) {}
                        s[i] = t;
                    }
                }), s;
            },
            extend: function(e, t) {
                var i = function() {
                    this.constructor = e;
                };
                return i.prototype = this.prototype, e.prototype = new i(), e.__super__ = this.prototype, 
                c.extend(e, this, t), e.defaults = e.prototype, e;
            },
            attach: function(n, o, s) {
                var r = this;
                "object" != typeof o || o instanceof c != 0 || s || (s = o, o = void 0);
                var a, e = (s = c.extend({}, s)).namespace || r.defaults.namespace, l = c.extend({}, r.defaults, r.readElementConfig(n[0], e), s);
                return n.on(l.openTrigger + "." + l.namespace, l.filter, function(e) {
                    var t = c.extend({
                        $source: n,
                        $currentTarget: c(this)
                    }, r.readElementConfig(n[0], l.namespace), r.readElementConfig(this, l.namespace), s), i = a || c(this).data("featherlight-persisted") || new r(o, t);
                    "shared" === i.persist ? a = i : !1 !== i.persist && c(this).data("featherlight-persisted", i), 
                    i.open(e);
                }), n;
            },
            current: function() {
                var e = this.opened();
                return e[e.length - 1] || null;
            },
            opened: function() {
                var t = this;
                return s(), c.grep(o, function(e) {
                    return e instanceof t;
                });
            },
            close: function() {
                var e = this.current();
                return e ? e.close() : void 0;
            },
            _onReady: function() {
                var e = this;
                e.autoBind && (e.attach(c(document), {
                    filter: e.autoBind
                }), c(e.autoBind).filter("[data-featherlight-filter]").each(function() {
                    e.attach(c(this));
                }));
            },
            _callbackChain: {
                onKeyUp: function(e, t) {
                    return 27 === t.keyCode ? (this.closeOnEsc && this.$instance.find("." + this.namespace + "-close:first").click(), 
                    !1) : e(t);
                },
                onResize: function(e, t) {
                    if (this.$content.naturalWidth) {
                        var i = this.$content.naturalWidth, n = this.$content.naturalHeight;
                        this.$content.css("width", "").css("height", "");
                        var o = Math.max(i / parseInt(this.$content.parent().css("width"), 10), n / parseInt(this.$content.parent().css("height"), 10));
                        1 < o && this.$content.css("width", i / o + "px").css("height", n / o + "px");
                    }
                    return e(t);
                },
                afterContent: function(e, t) {
                    var i = e(t);
                    return this.onResize(t), i;
                }
            }
        }), c.featherlight = n, c.fn.featherlight = function(e, t) {
            return n.attach(this, e, t);
        }, c(document).ready(function() {
            n._onReady();
        });
    } else "console" in window && window.console.info("Too much lightness, Featherlight needs jQuery.");
}(jQuery), function(e, r) {
    function a() {
        var e = h.elements;
        return "string" == typeof e ? e.split(" ") : e;
    }
    function l(e) {
        var t = f[e[s]];
        return t || (t = {}, u++, e[s] = u, f[u] = t), t;
    }
    function c(e, t, i) {
        return t || (t = r), p ? t.createElement(e) : (i || (i = l(t)), (t = i.cache[e] ? i.cache[e].cloneNode() : o.test(e) ? (i.cache[e] = i.createElem(e)).cloneNode() : i.createElem(e)).canHaveChildren && !n.test(e) ? i.frag.appendChild(t) : t);
    }
    function t(e) {
        e || (e = r);
        var t, i, n = l(e);
        if (h.shivCSS && !d && !n.hasCSS) {
            var o, s = e;
            o = s.createElement("p"), s = s.getElementsByTagName("head")[0] || s.documentElement, 
            o.innerHTML = "x<style>article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}</style>", 
            o = s.insertBefore(o.lastChild, s.firstChild), n.hasCSS = !!o;
        }
        return p || (t = e, (i = n).cache || (i.cache = {}, i.createElem = t.createElement, 
        i.createFrag = t.createDocumentFragment, i.frag = i.createFrag()), t.createElement = function(e) {
            return h.shivMethods ? c(e, t, i) : i.createElem(e);
        }, t.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + a().join().replace(/[\w\-]+/g, function(e) {
            return i.createElem(e), i.frag.createElement(e), 'c("' + e + '")';
        }) + ");return n}")(h, i.frag)), e;
    }
    var d, p, i = e.html5 || {}, n = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i, o = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i, s = "_html5shiv", u = 0, f = {};
    !function() {
        try {
            var e, t = r.createElement("a");
            if (t.innerHTML = "<xyz></xyz>", d = "hidden" in t, !(e = 1 == t.childNodes.length)) {
                r.createElement("a");
                var i = r.createDocumentFragment();
                e = void 0 === i.cloneNode || void 0 === i.createDocumentFragment || void 0 === i.createElement;
            }
            p = e;
        } catch (e) {
            p = d = !0;
        }
    }();
    var h = {
        elements: i.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
        version: "3.7.0",
        shivCSS: !1 !== i.shivCSS,
        supportsUnknownElements: p,
        shivMethods: !1 !== i.shivMethods,
        type: "default",
        shivDocument: t,
        createElement: c,
        createDocumentFragment: function(e, t) {
            if (e || (e = r), p) return e.createDocumentFragment();
            for (var i = (t = t || l(e)).frag.cloneNode(), n = 0, o = a(), s = o.length; n < s; n++) i.createElement(o[n]);
            return i;
        }
    };
    e.html5 = h, t(r);
}(this, document), function(t, i, n) {
    "function" == typeof define && define.amd ? define([ "jquery" ], function(e) {
        return n(e, t, i), e.mobile;
    }) : n(t.jQuery, t, i);
}(this, document, function(e, j, P, t) {
    var o, i, s, n, r, a, l, c, d, p, u, f, h, m, v, g, b, y, w, k, T, S;
    (function(c, d, e) {
        "$:nomunge";
        function p(e) {
            return "#" + (e = e || location.href).replace(/^[^#]*#?(.*)$/, "$1");
        }
        var t, u = "hashchange", f = P, i = c.event.special, n = f.documentMode, h = "on" + u in d && (void 0 === n || 7 < n);
        c.fn[u] = function(e) {
            return e ? this.bind(u, e) : this.trigger(u);
        }, c.fn[u].delay = 50, i[u] = c.extend(i[u], {
            setup: function() {
                if (h) return !1;
                c(t.start);
            },
            teardown: function() {
                if (h) return !1;
                c(t.stop);
            }
        }), t = function() {
            function i() {
                var e = p(), t = l(s);
                e !== s ? (a(s = e, t), c(d).trigger(u)) : t !== s && (location.href = location.href.replace(/#.*/, "") + t), 
                n = setTimeout(i, c.fn[u].delay);
            }
            var n, o, e, t = {}, s = p(), r = function(e) {
                return e;
            }, a = r, l = r;
            return t.start = function() {
                n || i();
            }, t.stop = function() {
                n && clearTimeout(n), n = void 0;
            }, d.attachEvent && !d.addEventListener && !h && (t.start = function() {
                o || (e = (e = c.fn[u].src) && e + p(), o = c('<iframe tabindex="-1" title="empty"/>').hide().one("load", function() {
                    e || a(p()), i();
                }).attr("src", e || "javascript:0").insertAfter("body")[0].contentWindow, f.onpropertychange = function() {
                    try {
                        "title" === event.propertyName && (o.document.title = f.title);
                    } catch (e) {}
                });
            }, t.stop = r, l = function() {
                return p(o.location.href);
            }, a = function(e, t) {
                var i = o.document, n = c.fn[u].domain;
                e !== t && (i.title = f.title, i.open(), n && i.write('<script>document.domain="' + n + '"</script>'), 
                i.close(), o.location.hash = e);
            }), t;
        }();
    })(e, this), e.mobile = {}, (S = e).extend(S.mobile, {
        version: "1.4.5",
        subPageUrlKey: "ui-page",
        hideUrlBar: !0,
        keepNative: ":jqmData(role='none'), :jqmData(role='nojs')",
        activePageClass: "ui-page-active",
        activeBtnClass: "ui-btn-active",
        focusClass: "ui-focus",
        ajaxEnabled: !0,
        hashListeningEnabled: !0,
        linkBindingEnabled: !0,
        defaultPageTransition: "fade",
        maxTransitionWidth: !1,
        minScrollBack: 0,
        defaultDialogTransition: "pop",
        pageLoadErrorMessage: "Error Loading Page",
        pageLoadErrorMessageTheme: "a",
        phonegapNavigationEnabled: !1,
        autoInitializePage: !0,
        pushStateEnabled: !0,
        ignoreContentEnabled: !1,
        buttonMarkup: {
            hoverDelay: 200
        },
        dynamicBaseEnabled: !0,
        pageContainer: S(),
        allowCrossDomainPages: !1,
        dialogHashKey: "&ui-state=dialog"
    }), y = {}, w = (b = e).find, k = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, T = /:jqmData\(([^)]*)\)/g, 
    b.extend(b.mobile, {
        ns: "",
        getAttribute: function(e, t) {
            var i;
            (e = e.jquery ? e[0] : e) && e.getAttribute && (i = e.getAttribute("data-" + b.mobile.ns + t));
            try {
                i = "true" === i || "false" !== i && ("null" === i ? null : +i + "" === i ? +i : k.test(i) ? JSON.parse(i) : i);
            } catch (e) {}
            return i;
        },
        nsNormalizeDict: y,
        nsNormalize: function(e) {
            return y[e] || (y[e] = b.camelCase(b.mobile.ns + e));
        },
        closestPageData: function(e) {
            return e.closest(":jqmData(role='page'), :jqmData(role='dialog')").data("mobile-page");
        }
    }), b.fn.jqmData = function(e, t) {
        var i;
        return void 0 !== e && (e && (e = b.mobile.nsNormalize(e)), i = arguments.length < 2 || void 0 === t ? this.data(e) : this.data(e, t)), 
        i;
    }, b.jqmData = function(e, t, i) {
        var n;
        return void 0 !== t && (n = b.data(e, t ? b.mobile.nsNormalize(t) : t, i)), n;
    }, b.fn.jqmRemoveData = function(e) {
        return this.removeData(b.mobile.nsNormalize(e));
    }, b.jqmRemoveData = function(e, t) {
        return b.removeData(e, b.mobile.nsNormalize(t));
    }, b.find = function(e, t, i, n) {
        return -1 < e.indexOf(":jqmData") && (e = e.replace(T, "[data-" + (b.mobile.ns || "") + "$1]")), 
        w.call(this, e, t, i, n);
    }, b.extend(b.find, w), function(a, e) {
        function n(e, t) {
            var i, n, o, s = e.nodeName.toLowerCase();
            return "area" === s ? (n = (i = e.parentNode).name, !(!e.href || !n || "map" !== i.nodeName.toLowerCase()) && (!!(o = a("img[usemap=#" + n + "]")[0]) && r(o))) : (/input|select|textarea|button|object/.test(s) ? !e.disabled : "a" === s && e.href || t) && r(e);
        }
        function r(e) {
            return a.expr.filters.visible(e) && !a(e).parents().addBack().filter(function() {
                return "hidden" === a.css(this, "visibility");
            }).length;
        }
        var t, o, i = 0, s = /^ui-id-\d+$/;
        a.ui = a.ui || {}, a.extend(a.ui, {
            version: "c0ab71056b936627e8a7821f03c044aec6280a40",
            keyCode: {
                BACKSPACE: 8,
                COMMA: 188,
                DELETE: 46,
                DOWN: 40,
                END: 35,
                ENTER: 13,
                ESCAPE: 27,
                HOME: 36,
                LEFT: 37,
                PAGE_DOWN: 34,
                PAGE_UP: 33,
                PERIOD: 190,
                RIGHT: 39,
                SPACE: 32,
                TAB: 9,
                UP: 38
            }
        }), a.fn.extend({
            focus: (o = a.fn.focus, function(t, i) {
                return "number" == typeof t ? this.each(function() {
                    var e = this;
                    setTimeout(function() {
                        a(e).focus(), i && i.call(e);
                    }, t);
                }) : o.apply(this, arguments);
            }),
            scrollParent: function() {
                var e;
                return e = a.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function() {
                    return /(relative|absolute|fixed)/.test(a.css(this, "position")) && /(auto|scroll)/.test(a.css(this, "overflow") + a.css(this, "overflow-y") + a.css(this, "overflow-x"));
                }).eq(0) : this.parents().filter(function() {
                    return /(auto|scroll)/.test(a.css(this, "overflow") + a.css(this, "overflow-y") + a.css(this, "overflow-x"));
                }).eq(0), /fixed/.test(this.css("position")) || !e.length ? a(this[0].ownerDocument || P) : e;
            },
            uniqueId: function() {
                return this.each(function() {
                    this.id || (this.id = "ui-id-" + ++i);
                });
            },
            removeUniqueId: function() {
                return this.each(function() {
                    s.test(this.id) && a(this).removeAttr("id");
                });
            }
        }), a.extend(a.expr[":"], {
            data: a.expr.createPseudo ? a.expr.createPseudo(function(t) {
                return function(e) {
                    return !!a.data(e, t);
                };
            }) : function(e, t, i) {
                return !!a.data(e, i[3]);
            },
            focusable: function(e) {
                return n(e, !isNaN(a.attr(e, "tabindex")));
            },
            tabbable: function(e) {
                var t = a.attr(e, "tabindex"), i = isNaN(t);
                return (i || 0 <= t) && n(e, !i);
            }
        }), a("<a>").outerWidth(1).jquery || a.each([ "Width", "Height" ], function(e, i) {
            function n(e, t, i, n) {
                return a.each(o, function() {
                    t -= parseFloat(a.css(e, "padding" + this)) || 0, i && (t -= parseFloat(a.css(e, "border" + this + "Width")) || 0), 
                    n && (t -= parseFloat(a.css(e, "margin" + this)) || 0);
                }), t;
            }
            var o = "Width" === i ? [ "Left", "Right" ] : [ "Top", "Bottom" ], s = i.toLowerCase(), r = {
                innerWidth: a.fn.innerWidth,
                innerHeight: a.fn.innerHeight,
                outerWidth: a.fn.outerWidth,
                outerHeight: a.fn.outerHeight
            };
            a.fn["inner" + i] = function(e) {
                return void 0 === e ? r["inner" + i].call(this) : this.each(function() {
                    a(this).css(s, n(this, e) + "px");
                });
            }, a.fn["outer" + i] = function(e, t) {
                return "number" != typeof e ? r["outer" + i].call(this, e) : this.each(function() {
                    a(this).css(s, n(this, e, !0, t) + "px");
                });
            };
        }), a.fn.addBack || (a.fn.addBack = function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
        }), a("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (a.fn.removeData = (t = a.fn.removeData, 
        function(e) {
            return arguments.length ? t.call(this, a.camelCase(e)) : t.call(this);
        })), a.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), a.support.selectstart = "onselectstart" in P.createElement("div"), 
        a.fn.extend({
            disableSelection: function() {
                return this.bind((a.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function(e) {
                    e.preventDefault();
                });
            },
            enableSelection: function() {
                return this.unbind(".ui-disableSelection");
            },
            zIndex: function(e) {
                if (void 0 !== e) return this.css("zIndex", e);
                if (this.length) for (var t, i, n = a(this[0]); n.length && n[0] !== P; ) {
                    if (("absolute" === (t = n.css("position")) || "relative" === t || "fixed" === t) && (i = parseInt(n.css("zIndex"), 10), 
                    !isNaN(i) && 0 !== i)) return i;
                    n = n.parent();
                }
                return 0;
            }
        }), a.ui.plugin = {
            add: function(e, t, i) {
                var n, o = a.ui[e].prototype;
                for (n in i) o.plugins[n] = o.plugins[n] || [], o.plugins[n].push([ t, i[n] ]);
            },
            call: function(e, t, i, n) {
                var o, s = e.plugins[t];
                if (s && (n || e.element[0].parentNode && 11 !== e.element[0].parentNode.nodeType)) for (o = 0; o < s.length; o++) e.options[s[o][0]] && s[o][1].apply(e.element, i);
            }
        };
    }(e), g = this, (v = e).extend(v.mobile, {
        window: v(g),
        document: v(P),
        keyCode: v.ui.keyCode,
        behaviors: {},
        silentScroll: function(e) {
            "number" !== v.type(e) && (e = v.mobile.defaultHomeScroll), v.event.special.scrollstart.enabled = !1, 
            setTimeout(function() {
                g.scrollTo(0, e), v.mobile.document.trigger("silentscroll", {
                    x: 0,
                    y: e
                });
            }, 20), setTimeout(function() {
                v.event.special.scrollstart.enabled = !0;
            }, 150);
        },
        getClosestBaseUrl: function(e) {
            var t = v(e).closest(".ui-page").jqmData("url"), i = v.mobile.path.documentBase.hrefNoHash;
            return v.mobile.dynamicBaseEnabled && t && v.mobile.path.isPath(t) || (t = i), v.mobile.path.makeUrlAbsolute(t, i);
        },
        removeActiveLinkClass: function(e) {
            !!v.mobile.activeClickedLink && (!v.mobile.activeClickedLink.closest("." + v.mobile.activePageClass).length || e) && v.mobile.activeClickedLink.removeClass(v.mobile.activeBtnClass), 
            v.mobile.activeClickedLink = null;
        },
        getInheritedTheme: function(e, t) {
            for (var i, n, o = e[0], s = "", r = /ui-(bar|body|overlay)-([a-z])\b/; o && !((i = o.className || "") && (n = r.exec(i)) && (s = n[2])); ) o = o.parentNode;
            return s || t || "a";
        },
        enhanceable: function(e) {
            return this.haveParents(e, "enhance");
        },
        hijackable: function(e) {
            return this.haveParents(e, "ajax");
        },
        haveParents: function(e, t) {
            if (!v.mobile.ignoreContentEnabled) return e;
            var i, n, o, s, r = e.length, a = v();
            for (s = 0; s < r; s++) {
                for (n = e.eq(s), o = !1, i = e[s]; i; ) {
                    if ("false" === (i.getAttribute ? i.getAttribute("data-" + v.mobile.ns + t) : "")) {
                        o = !0;
                        break;
                    }
                    i = i.parentNode;
                }
                o || (a = a.add(n));
            }
            return a;
        },
        getScreenHeight: function() {
            return g.innerHeight || v.mobile.window.height();
        },
        resetActivePageHeight: function(e) {
            var t, i, n, o, s, r, a, l, c, d = v("." + v.mobile.activePageClass), p = d.height(), u = d.outerHeight(!0);
            t = d, i = "number" == typeof e ? e : v.mobile.getScreenHeight(), n = t.parent(), 
            o = [], s = function() {
                var e = v(this), t = v.mobile.toolbar && e.data("mobile-toolbar") ? e.toolbar("option") : {
                    position: e.attr("data-" + v.mobile.ns + "position"),
                    updatePagePadding: !1 !== e.attr("data-" + v.mobile.ns + "update-page-padding")
                };
                return "fixed" !== t.position || !0 !== t.updatePagePadding;
            }, r = n.children(":jqmData(role='header')").filter(s), a = t.children(":jqmData(role='header')"), 
            l = n.children(":jqmData(role='footer')").filter(s), c = t.children(":jqmData(role='footer')"), 
            0 === a.length && 0 < r.length && (o = o.concat(r.toArray())), 0 === c.length && 0 < l.length && (o = o.concat(l.toArray())), 
            v.each(o, function(e, t) {
                i -= v(t).outerHeight();
            }), e = Math.max(0, i), d.css("min-height", ""), d.height() < e && d.css("min-height", e - (u - p));
        },
        loading: function() {
            var e = this.loading._widget || v(v.mobile.loader.prototype.defaultHtml).loader(), t = e.loader.apply(e, arguments);
            return this.loading._widget = e, t;
        }
    }), v.addDependents = function(e, t) {
        var i = v(e), n = i.jqmData("dependents") || v();
        i.jqmData("dependents", v(n).add(t));
    }, v.fn.extend({
        removeWithDependents: function() {
            v.removeWithDependents(this);
        },
        enhanceWithin: function() {
            var e, n = {}, o = v.mobile.page.prototype.keepNativeSelector(), s = this;
            for (e in v.mobile.nojs && v.mobile.nojs(this), v.mobile.links && v.mobile.links(this), 
            v.mobile.degradeInputsWithin && v.mobile.degradeInputsWithin(this), v.fn.buttonMarkup && this.find(v.fn.buttonMarkup.initSelector).not(o).jqmEnhanceable().buttonMarkup(), 
            v.fn.fieldcontain && this.find(":jqmData(role='fieldcontain')").not(o).jqmEnhanceable().fieldcontain(), 
            v.each(v.mobile.widgets, function(e, t) {
                if (t.initSelector) {
                    var i = v.mobile.enhanceable(s.find(t.initSelector));
                    0 < i.length && (i = i.not(o)), 0 < i.length && (n[t.prototype.widgetName] = i);
                }
            }), n) n[e][e]();
            return this;
        },
        addDependents: function(e) {
            v.addDependents(this, e);
        },
        getEncodedText: function() {
            return v("<a>").text(this.text()).html();
        },
        jqmEnhanceable: function() {
            return v.mobile.enhanceable(this);
        },
        jqmHijackable: function() {
            return v.mobile.hijackable(this);
        }
    }), v.removeWithDependents = function(e) {
        var t = v(e);
        (t.jqmData("dependents") || v()).remove(), t.remove();
    }, v.addDependents = function(e, t) {
        var i = v(e), n = i.jqmData("dependents") || v();
        i.jqmData("dependents", v(n).add(t));
    }, v.find.matches = function(e, t) {
        return v.find(e, null, null, t);
    }, v.find.matchesSelector = function(e, t) {
        return 0 < v.find(t, null, null, [ e ]).length;
    }, c = e, j.matchMedia = j.matchMedia || (u = (d = P).documentElement, f = u.firstElementChild || u.firstChild, 
    h = d.createElement("body"), (m = d.createElement("div")).id = "mq-test-1", m.style.cssText = "position:absolute;top:-100em", 
    h.style.background = "none", h.appendChild(m), function(e) {
        return m.innerHTML = '&shy;<style media="' + e + '"> #mq-test-1 { width: 42px; }</style>', 
        u.insertBefore(h, f), p = 42 === m.offsetWidth, u.removeChild(h), {
            matches: p,
            media: e
        };
    }), c.mobile.media = function(e) {
        return j.matchMedia(e).matches;
    }, l = {
        touch: "ontouchend" in P
    }, (a = e).mobile.support = a.mobile.support || {}, a.extend(a.support, l), a.extend(a.mobile.support, l), 
    (r = e).extend(r.support, {
        orientation: "orientation" in j && "onorientationchange" in j
    }), function(s, r) {
        function e(e) {
            var t, i = e.charAt(0).toUpperCase() + e.substr(1), n = (e + " " + $.join(i + " ") + i).split(" ");
            for (t in n) if (C[n[t]] !== r) return !0;
        }
        var t, i, n, o, a, l, c, d, p, u, f, h, m, v, g, b, y, w, k, T, S = s("<body>").prependTo("html"), C = S[0].style, $ = [ "Webkit", "Moz", "O" ], x = "palmGetResource" in j, E = j.operamini && "[object OperaMini]" === {}.toString.call(j.operamini), A = j.blackberry && !e("-webkit-transform");
        s.extend(s.mobile, {
            browser: {}
        }), s.mobile.browser.oldIE = function() {
            for (var e = 3, t = P.createElement("div"), i = t.all || []; t.innerHTML = "<!--[if gt IE " + ++e + "]><br><![endif]-->", 
            i[0]; ) ;
            return 4 < e ? e : !e;
        }(), s.extend(s.support, {
            pushState: "pushState" in history && "replaceState" in history && !(0 <= j.navigator.userAgent.indexOf("Firefox") && j.top !== j) && -1 === j.navigator.userAgent.search(/CriOS/),
            mediaquery: s.mobile.media("only all"),
            cssPseudoElement: !!e("content"),
            touchOverflow: !!e("overflowScrolling"),
            cssTransform3d: function() {
                var e, t, i, n = "transform-3d", o = s.mobile.media("(-" + $.join("-" + n + "),(-") + "-" + n + "),(" + n + ")");
                if (o) return !!o;
                for (i in e = P.createElement("div"), t = {
                    MozTransform: "-moz-transform",
                    transform: "transform"
                }, S.append(e), t) e.style[i] !== r && (e.style[i] = "translate3d( 100px, 1px, 1px )", 
                o = j.getComputedStyle(e).getPropertyValue(t[i]));
                return !!o && "none" !== o;
            }(),
            boxShadow: !!e("boxShadow") && !A,
            fixedPosition: (h = j, m = navigator.userAgent, v = navigator.platform, g = m.match(/AppleWebKit\/([0-9]+)/), 
            b = !!g && g[1], y = m.match(/Fennec\/([0-9]+)/), w = !!y && y[1], k = m.match(/Opera Mobi\/([0-9]+)/), 
            T = !!k && k[1], !((-1 < v.indexOf("iPhone") || -1 < v.indexOf("iPad") || -1 < v.indexOf("iPod")) && b && b < 534 || h.operamini && "[object OperaMini]" === {}.toString.call(h.operamini) || k && T < 7458 || -1 < m.indexOf("Android") && b && b < 533 || w && w < 6 || "palmGetResource" in j && b && b < 534 || -1 < m.indexOf("MeeGo") && -1 < m.indexOf("NokiaBrowser/8.5.0"))),
            scrollTop: ("pageXOffset" in j || "scrollTop" in P.documentElement || "scrollTop" in S[0]) && !x && !E,
            dynamicBaseTag: (d = location.protocol + "//" + location.host + location.pathname + "ui-dir/", 
            p = s("head base"), u = null, f = "", p.length ? f = p.attr("href") : p = u = s("<base>", {
                href: d
            }).appendTo("head"), c = s("<a href='testurl' />").prependTo(S)[0].href, p[0].href = f || location.pathname, 
            u && u.remove(), 0 === c.indexOf(d)),
            cssPointerEvents: (o = P.createElement("x"), a = P.documentElement, l = j.getComputedStyle, 
            "pointerEvents" in o.style && (o.style.pointerEvents = "auto", o.style.pointerEvents = "x", 
            a.appendChild(o), n = l && "auto" === l(o, "").pointerEvents, a.removeChild(o), 
            !!n)),
            boundingRect: void 0 !== P.createElement("div").getBoundingClientRect,
            inlineSVG: function() {
                var e = j, t = !(!e.document.createElementNS || !e.document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect || e.opera && -1 === navigator.userAgent.indexOf("Chrome")), i = function(e) {
                    (!e || !t) && s("html").addClass("ui-nosvg");
                }, n = new e.Image();
                n.onerror = function() {
                    i(!1);
                }, n.onload = function() {
                    i(1 === n.width && 1 === n.height);
                }, n.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
            }
        }), S.remove(), t = -1 < (i = j.navigator.userAgent).indexOf("Nokia") && (-1 < i.indexOf("Symbian/3") || -1 < i.indexOf("Series60/5")) && -1 < i.indexOf("AppleWebKit") && i.match(/(BrowserNG|NokiaBrowser)\/7\.[0-3]/), 
        s.mobile.gradeA = function() {
            return (s.support.mediaquery && s.support.cssPseudoElement || s.mobile.browser.oldIE && 8 <= s.mobile.browser.oldIE) && (s.support.boundingRect || null !== s.fn.jquery.match(/1\.[0-7+]\.[0-9+]?/));
        }, s.mobile.ajaxBlacklist = j.blackberry && !j.WebKitPoint || E || t, t && s(function() {
            s("head link[rel='stylesheet']").attr("rel", "alternate stylesheet").attr("rel", "stylesheet");
        }), s.support.boxShadow || s("html").addClass("ui-noboxshadow");
    }(e), s = (o = e).mobile.window, n = function() {}, o.event.special.beforenavigate = {
        setup: function() {
            s.on("navigate", n);
        },
        teardown: function() {
            s.off("navigate", n);
        }
    }, o.event.special.navigate = i = {
        bound: !1,
        pushStateEnabled: !0,
        originalEventName: void 0,
        isPushStateEnabled: function() {
            return o.support.pushState && !0 === o.mobile.pushStateEnabled && this.isHashChangeEnabled();
        },
        isHashChangeEnabled: function() {
            return !0 === o.mobile.hashListeningEnabled;
        },
        popstate: function(e) {
            var t = new o.Event("navigate"), i = new o.Event("beforenavigate"), n = e.originalEvent.state || {};
            i.originalEvent = e, s.trigger(i), i.isDefaultPrevented() || (e.historyState && o.extend(n, e.historyState), 
            t.originalEvent = e, setTimeout(function() {
                s.trigger(t, {
                    state: n
                });
            }, 0));
        },
        hashchange: function(e) {
            var t = new o.Event("navigate"), i = new o.Event("beforenavigate");
            i.originalEvent = e, s.trigger(i), i.isDefaultPrevented() || (t.originalEvent = e, 
            s.trigger(t, {
                state: e.hashchangeState || {}
            }));
        },
        setup: function() {
            i.bound || (i.bound = !0, i.isPushStateEnabled() ? (i.originalEventName = "popstate", 
            s.bind("popstate.navigate", i.popstate)) : i.isHashChangeEnabled() && (i.originalEventName = "hashchange", 
            s.bind("hashchange.navigate", i.hashchange)));
        }
    }, function(e) {
        e.event.special.throttledresize = {
            setup: function() {
                e(this).bind("resize", o);
            },
            teardown: function() {
                e(this).unbind("resize", o);
            }
        };
        var t, i, n, o = function() {
            i = new Date().getTime(), 250 <= (n = i - s) ? (s = i, e(this).trigger("throttledresize")) : (t && clearTimeout(t), 
            t = setTimeout(o, 250 - n));
        }, s = 0;
    }(e), function(t, i) {
        function e() {
            var e = n();
            e !== o && (o = e, c.trigger(d));
        }
        var n, o, s, r, a, l, c = t(i), d = "orientationchange", p = {
            0: !0,
            180: !0
        };
        t.support.orientation && (a = i.innerWidth || c.width(), 50, s = (l = i.innerHeight || c.height()) < a && 50 < a - l, 
        r = p[i.orientation], (s && r || !s && !r) && (p = {
            "-90": !0,
            90: !0
        })), t.event.special.orientationchange = t.extend({}, t.event.special.orientationchange, {
            setup: function() {
                if (t.support.orientation && !t.event.special.orientationchange.disabled) return !1;
                o = n(), c.bind("throttledresize", e);
            },
            teardown: function() {
                if (t.support.orientation && !t.event.special.orientationchange.disabled) return !1;
                c.unbind("throttledresize", e);
            },
            add: function(e) {
                var t = e.handler;
                e.handler = function(e) {
                    return e.orientation = n(), t.apply(this, arguments);
                };
            }
        }), t.event.special.orientationchange.orientation = n = function() {
            var e = P.documentElement;
            return (t.support.orientation ? p[i.orientation] : e && e.clientWidth / e.clientHeight < 1.1) ? "portrait" : "landscape";
        }, t.fn[d] = function(e) {
            return e ? this.bind(d, e) : this.trigger(d);
        }, t.attrFn && (t.attrFn[d] = !0);
    }(e, this), function(u, e, t, f) {
        function h(e) {
            for (;e && void 0 !== e.originalEvent; ) e = e.originalEvent;
            return e;
        }
        function s(e) {
            for (var t, i, n = {}; e; ) {
                for (i in t = u.data(e, k)) t[i] && (n[i] = n.hasVirtualBinding = !0);
                e = e.parentNode;
            }
            return n;
        }
        function o() {
            z = !0;
        }
        function r() {
            z = !1;
        }
        function a() {
            l(), A = setTimeout(function() {
                q = A = 0, O.length = 0, M = !1, o();
            }, u.vmouse.resetTimerDuration);
        }
        function l() {
            A && (clearTimeout(A), A = 0);
        }
        function c(e, t, i) {
            var n;
            return (i && i[e] || !i && function(e, t) {
                for (var i; e; ) {
                    if ((i = u.data(e, k)) && (!t || i[t])) return e;
                    e = e.parentNode;
                }
                return null;
            }(t.target, e)) && (n = function(e, t) {
                var i, n, o, s, r, a, l, c, d, p = e.type;
                if ((e = u.Event(e)).type = t, i = e.originalEvent, n = u.event.props, -1 < p.search(/^(mouse|click)/) && (n = x), 
                i) for (l = n.length; l; ) e[s = n[--l]] = i[s];
                if (-1 < p.search(/mouse(down|up)|click/) && !e.which && (e.which = 1), -1 !== p.search(/^touch/) && (p = (o = h(i)).touches, 
                r = o.changedTouches, a = p && p.length ? p[0] : r && r.length ? r[0] : f)) for (c = 0, 
                d = C.length; c < d; c++) e[s = C[c]] = a[s];
                return e;
            }(t, e), u(t.target).trigger(n)), n;
        }
        function d(e) {
            var t, i = u.data(e.target, T);
            !M && (!q || q !== i) && ((t = c("v" + e.type, e)) && (t.isDefaultPrevented() && e.preventDefault(), 
            t.isPropagationStopped() && e.stopPropagation(), t.isImmediatePropagationStopped() && e.stopImmediatePropagation()));
        }
        function p(e) {
            var t, i, n, o = h(e).touches;
            o && 1 === o.length && ((i = s(t = e.target)).hasVirtualBinding && (q = N++, u.data(t, T, q), 
            l(), r(), D = !1, n = h(e).touches[0], j = n.pageX, P = n.pageY, c("vmouseover", e, i), 
            c("vmousedown", e, i)));
        }
        function m(e) {
            z || (D || c("vmousecancel", e, s(e.target)), D = !0, a());
        }
        function v(e) {
            if (!z) {
                var t = h(e).touches[0], i = D, n = u.vmouse.moveDistanceThreshold, o = s(e.target);
                (D = D || Math.abs(t.pageX - j) > n || Math.abs(t.pageY - P) > n) && !i && c("vmousecancel", e, o), 
                c("vmousemove", e, o), a();
            }
        }
        function g(e) {
            if (!z) {
                o();
                var t, i, n = s(e.target);
                c("vmouseup", e, n), D || (t = c("vclick", e, n)) && t.isDefaultPrevented() && (i = h(e).changedTouches[0], 
                O.push({
                    touchID: q,
                    x: i.clientX,
                    y: i.clientY
                }), M = !0), c("vmouseout", e, n), D = !1, a();
            }
        }
        function b(e) {
            var t, i = u.data(e, k);
            if (i) for (t in i) if (i[t]) return !0;
            return !1;
        }
        function y() {}
        function i(i) {
            var n = i.substr(1);
            return {
                setup: function() {
                    b(this) || u.data(this, k, {}), u.data(this, k)[i] = !0, E[i] = (E[i] || 0) + 1, 
                    1 === E[i] && H.bind(n, d), u(this).bind(n, y), L && (E.touchstart = (E.touchstart || 0) + 1, 
                    1 === E.touchstart && H.bind("touchstart", p).bind("touchend", g).bind("touchmove", v).bind("scroll", m));
                },
                teardown: function() {
                    --E[i], E[i] || H.unbind(n, d), L && (--E.touchstart, E.touchstart || H.unbind("touchstart", p).unbind("touchmove", v).unbind("touchend", g).unbind("scroll", m));
                    var e = u(this), t = u.data(this, k);
                    t && (t[i] = !1), e.unbind(n, y), b(this) || e.removeData(k);
                }
            };
        }
        var w, n, k = "virtualMouseBindings", T = "virtualTouchID", S = "vmouseover vmousedown vmousemove vmouseup vclick vmouseout vmousecancel".split(" "), C = "clientX clientY pageX pageY screenX screenY".split(" "), $ = u.event.mouseHooks ? u.event.mouseHooks.props : [], x = u.event.props.concat($), E = {}, A = 0, j = 0, P = 0, D = !1, O = [], M = !1, z = !1, L = "addEventListener" in t, H = u(t), N = 1, q = 0;
        for (u.vmouse = {
            moveDistanceThreshold: 10,
            clickDistanceThreshold: 10,
            resetTimerDuration: 1500
        }, n = 0; n < S.length; n++) u.event.special[S[n]] = i(S[n]);
        L && t.addEventListener("click", function(e) {
            var t, i, n, o, s, r = O.length, a = e.target;
            if (r) for (t = e.clientX, i = e.clientY, w = u.vmouse.clickDistanceThreshold, n = a; n; ) {
                for (o = 0; o < r; o++) if (s = O[o], 0, n === a && Math.abs(s.x - t) < w && Math.abs(s.y - i) < w || u.data(n, T) === s.touchID) return e.preventDefault(), 
                void e.stopPropagation();
                n = n.parentNode;
            }
        }, !0);
    }(e, 0, P), function(c, s, r) {
        function d(e, t, i, n) {
            var o = i.type;
            i.type = t, n ? c.event.trigger(i, r, e) : c.event.dispatch.call(e, i), i.type = o;
        }
        var p = c(P), e = c.mobile.support.touch, a = "touchmove scroll", i = e ? "touchstart" : "mousedown", l = e ? "touchend" : "mouseup", u = e ? "touchmove" : "mousemove";
        c.each("touchstart touchmove touchend tap taphold swipe swipeleft swiperight scrollstart scrollstop".split(" "), function(e, t) {
            c.fn[t] = function(e) {
                return e ? this.bind(t, e) : this.trigger(t);
            }, c.attrFn && (c.attrFn[t] = !0);
        }), c.event.special.scrollstart = {
            enabled: !0,
            setup: function() {
                function t(e, t) {
                    d(o, (i = t) ? "scrollstart" : "scrollstop", e);
                }
                var i, n, o = this;
                c(o).bind(a, function(e) {
                    c.event.special.scrollstart.enabled && (i || t(e, !0), clearTimeout(n), n = setTimeout(function() {
                        t(e, !1);
                    }, 50));
                });
            },
            teardown: function() {
                c(this).unbind(a);
            }
        }, c.event.special.tap = {
            tapholdThreshold: 750,
            emitTapOnTaphold: !0,
            setup: function() {
                var r = this, a = c(r), l = !1;
                a.bind("vmousedown", function(e) {
                    function t() {
                        clearTimeout(o);
                    }
                    function i() {
                        t(), a.unbind("vclick", n).unbind("vmouseup", t), p.unbind("vmousecancel", i);
                    }
                    function n(e) {
                        i(), l || s !== e.target ? l && e.preventDefault() : d(r, "tap", e);
                    }
                    if (l = !1, e.which && 1 !== e.which) return !1;
                    var o, s = e.target;
                    a.bind("vmouseup", t).bind("vclick", n), p.bind("vmousecancel", i), o = setTimeout(function() {
                        c.event.special.tap.emitTapOnTaphold || (l = !0), d(r, "taphold", c.Event("taphold", {
                            target: s
                        }));
                    }, c.event.special.tap.tapholdThreshold);
                });
            },
            teardown: function() {
                c(this).unbind("vmousedown").unbind("vclick").unbind("vmouseup"), p.unbind("vmousecancel");
            }
        }, c.event.special.swipe = {
            scrollSupressionThreshold: 30,
            durationThreshold: 1e3,
            horizontalDistanceThreshold: 30,
            verticalDistanceThreshold: 30,
            getLocation: function(e) {
                var t = s.pageXOffset, i = s.pageYOffset, n = e.clientX, o = e.clientY;
                return 0 === e.pageY && Math.floor(o) > Math.floor(e.pageY) || 0 === e.pageX && Math.floor(n) > Math.floor(e.pageX) ? (n -= t, 
                o -= i) : (o < e.pageY - i || n < e.pageX - t) && (n = e.pageX - t, o = e.pageY - i), 
                {
                    x: n,
                    y: o
                };
            },
            start: function(e) {
                var t = e.originalEvent.touches ? e.originalEvent.touches[0] : e, i = c.event.special.swipe.getLocation(t);
                return {
                    time: new Date().getTime(),
                    coords: [ i.x, i.y ],
                    origin: c(e.target)
                };
            },
            stop: function(e) {
                var t = e.originalEvent.touches ? e.originalEvent.touches[0] : e, i = c.event.special.swipe.getLocation(t);
                return {
                    time: new Date().getTime(),
                    coords: [ i.x, i.y ]
                };
            },
            handleSwipe: function(e, t, i, n) {
                if (t.time - e.time < c.event.special.swipe.durationThreshold && Math.abs(e.coords[0] - t.coords[0]) > c.event.special.swipe.horizontalDistanceThreshold && Math.abs(e.coords[1] - t.coords[1]) < c.event.special.swipe.verticalDistanceThreshold) {
                    var o = e.coords[0] > t.coords[0] ? "swipeleft" : "swiperight";
                    return d(i, "swipe", c.Event("swipe", {
                        target: n,
                        swipestart: e,
                        swipestop: t
                    }), !0), d(i, o, c.Event(o, {
                        target: n,
                        swipestart: e,
                        swipestop: t
                    }), !0), !0;
                }
                return !1;
            },
            eventInProgress: !1,
            setup: function() {
                var e, s = this, t = c(s), r = {};
                (e = c.data(this, "mobile-events")) || (e = {
                    length: 0
                }, c.data(this, "mobile-events", e)), e.length++, (e.swipe = r).start = function(e) {
                    if (!c.event.special.swipe.eventInProgress) {
                        c.event.special.swipe.eventInProgress = !0;
                        var t, i = c.event.special.swipe.start(e), n = e.target, o = !1;
                        r.move = function(e) {
                            i && !e.isDefaultPrevented() && (t = c.event.special.swipe.stop(e), o || (o = c.event.special.swipe.handleSwipe(i, t, s, n)) && (c.event.special.swipe.eventInProgress = !1), 
                            Math.abs(i.coords[0] - t.coords[0]) > c.event.special.swipe.scrollSupressionThreshold && e.preventDefault());
                        }, r.stop = function() {
                            o = !0, c.event.special.swipe.eventInProgress = !1, p.off(u, r.move), r.move = null;
                        }, p.on(u, r.move).one(l, r.stop);
                    }
                }, t.on(i, r.start);
            },
            teardown: function() {
                var e, t;
                (e = c.data(this, "mobile-events")) && (t = e.swipe, delete e.swipe, e.length--, 
                0 === e.length && c.removeData(this, "mobile-events")), t && (t.start && c(this).off(i, t.start), 
                t.move && p.off(u, t.move), t.stop && p.off(l, t.stop));
            }
        }, c.each({
            scrollstop: "scrollstart",
            taphold: "tap",
            swipeleft: "swipe.left",
            swiperight: "swipe.right"
        }, function(e, t) {
            c.event.special[e] = {
                setup: function() {
                    c(this).bind(t, c.noop);
                },
                teardown: function() {
                    c(this).unbind(t);
                }
            };
        });
    }(e, this);
}), window.Modernizr = function(e, p, s) {
    function i(e) {
        h.cssText = e;
    }
    function r(e, t) {
        return typeof e === t;
    }
    function o(e, t) {
        return !!~("" + e).indexOf(t);
    }
    function a(e, t) {
        for (var i in e) {
            var n = e[i];
            if (!o(n, "-") && h[n] !== s) return "pfx" != t || n;
        }
        return !1;
    }
    function t(e, t, i) {
        var n = e.charAt(0).toUpperCase() + e.slice(1), o = (e + " " + b.join(n + " ") + n).split(" ");
        return r(t, "string") || r(t, "undefined") ? a(o, t) : function(e, t, i) {
            for (var n in e) {
                var o = t[e[n]];
                if (o !== s) return !1 === i ? e[n] : r(o, "function") ? o.bind(i || t) : o;
            }
            return !1;
        }(o = (e + " " + y.join(n + " ") + n).split(" "), t, i);
    }
    var n, l, c = {}, u = p.documentElement, f = "modernizr", d = p.createElement(f), h = d.style, m = ":)", v = ({}.toString, 
    " -webkit- -moz- -o- -ms- ".split(" ")), g = "Webkit Moz O ms", b = g.split(" "), y = g.toLowerCase().split(" "), w = {}, k = [], T = k.slice, S = function(e, t, i, n) {
        var o, s, r, a, l = p.createElement("div"), c = p.body, d = c || p.createElement("body");
        if (parseInt(i, 10)) for (;i--; ) (r = p.createElement("div")).id = n ? n[i] : f + (i + 1), 
        l.appendChild(r);
        return o = [ "&#173;", '<style id="s', f, '">', e, "</style>" ].join(""), l.id = f, 
        (c ? l : d).innerHTML += o, d.appendChild(l), c || (d.style.background = "", d.style.overflow = "hidden", 
        a = u.style.overflow, u.style.overflow = "hidden", u.appendChild(d)), s = t(l, e), 
        c ? l.parentNode.removeChild(l) : (d.parentNode.removeChild(d), u.style.overflow = a), 
        !!s;
    }, C = {}.hasOwnProperty;
    for (var $ in l = r(C, "undefined") || r(C.call, "undefined") ? function(e, t) {
        return t in e && r(e.constructor.prototype[t], "undefined");
    } : function(e, t) {
        return C.call(e, t);
    }, Function.prototype.bind || (Function.prototype.bind = function(n) {
        var o = this;
        if ("function" != typeof o) throw new TypeError();
        var s = T.call(arguments, 1), r = function() {
            if (this instanceof r) {
                var e = function() {};
                e.prototype = o.prototype;
                var t = new e(), i = o.apply(t, s.concat(T.call(arguments)));
                return Object(i) === i ? i : t;
            }
            return o.apply(n, s.concat(T.call(arguments)));
        };
        return r;
    }), w.flexbox = function() {
        return t("flexWrap");
    }, w.rgba = function() {
        return i("background-color:rgba(150,255,150,.5)"), o(h.backgroundColor, "rgba");
    }, w.backgroundsize = function() {
        return t("backgroundSize");
    }, w.borderradius = function() {
        return t("borderRadius");
    }, w.opacity = function() {
        return e = "opacity:.55", i(v.join(e + ";") + (t || "")), /^0.55$/.test(h.opacity);
        var e, t;
    }, w.cssanimations = function() {
        return t("animationName");
    }, w.cssgradients = function() {
        var e = "background-image:";
        return i((e + "-webkit- ".split(" ").join("gradient(linear,left top,right bottom,from(#9f9),to(white));" + e) + v.join("linear-gradient(left top,#9f9, white);" + e)).slice(0, -e.length)), 
        o(h.backgroundImage, "gradient");
    }, w.csstransforms = function() {
        return !!t("transform");
    }, w.csstransforms3d = function() {
        var i = !!t("perspective");
        return i && "webkitPerspective" in u.style && S("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(e, t) {
            i = 9 === e.offsetLeft && 3 === e.offsetHeight;
        }), i;
    }, w.csstransitions = function() {
        return t("transition");
    }, w.fontface = function() {
        var s;
        return S('@font-face {font-family:"font";src:url("https://")}', function(e, t) {
            var i = p.getElementById("smodernizr"), n = i.sheet || i.styleSheet, o = n ? n.cssRules && n.cssRules[0] ? n.cssRules[0].cssText : n.cssText || "" : "";
            s = /src/i.test(o) && 0 === o.indexOf(t.split(" ")[0]);
        }), s;
    }, w.generatedcontent = function() {
        var t;
        return S([ "#", f, "{font:0/0 a}#", f, ':after{content:"', m, '";visibility:hidden;font:3px/1 a}' ].join(""), function(e) {
            t = 3 <= e.offsetHeight;
        }), t;
    }, w) l(w, $) && (n = $.toLowerCase(), c[n] = w[$](), k.push((c[n] ? "" : "no-") + n));
    return c.addTest = function(e, t) {
        if ("object" == typeof e) for (var i in e) l(e, i) && c.addTest(i, e[i]); else {
            if (e = e.toLowerCase(), c[e] !== s) return c;
            t = "function" == typeof t ? t() : t, u.className += " " + (t ? "" : "no-") + e, 
            c[e] = t;
        }
        return c;
    }, i(""), d = null, function(e, l) {
        function c() {
            var e = h.elements;
            return "string" == typeof e ? e.split(" ") : e;
        }
        function d(e) {
            var t = a[e[n]];
            return t || (t = {}, r++, e[n] = r, a[r] = t), t;
        }
        function p(e, t, i) {
            return t || (t = l), f ? t.createElement(e) : (i || (i = d(t)), !(n = i.cache[e] ? i.cache[e].cloneNode() : s.test(e) ? (i.cache[e] = i.createElem(e)).cloneNode() : i.createElem(e)).canHaveChildren || o.test(e) || n.tagUrn ? n : i.frag.appendChild(n));
            var n;
        }
        function t(e) {
            e || (e = l);
            var t, i, n, o, s, r, a = d(e);
            return h.shivCSS && !u && !a.hasCSS && (a.hasCSS = (o = "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}", 
            s = (n = e).createElement("p"), r = n.getElementsByTagName("head")[0] || n.documentElement, 
            s.innerHTML = "x<style>" + o + "</style>", !!r.insertBefore(s.lastChild, r.firstChild))), 
            f || (t = e, (i = a).cache || (i.cache = {}, i.createElem = t.createElement, i.createFrag = t.createDocumentFragment, 
            i.frag = i.createFrag()), t.createElement = function(e) {
                return h.shivMethods ? p(e, t, i) : i.createElem(e);
            }, t.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + c().join().replace(/[\w\-]+/g, function(e) {
                return i.createElem(e), i.frag.createElement(e), 'c("' + e + '")';
            }) + ");return n}")(h, i.frag)), e;
        }
        var u, f, i = e.html5 || {}, o = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i, s = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i, n = "_html5shiv", r = 0, a = {};
        !function() {
            try {
                var e = l.createElement("a");
                e.innerHTML = "<xyz></xyz>", u = "hidden" in e, f = 1 == e.childNodes.length || function() {
                    l.createElement("a");
                    var e = l.createDocumentFragment();
                    return void 0 === e.cloneNode || void 0 === e.createDocumentFragment || void 0 === e.createElement;
                }();
            } catch (e) {
                f = u = !0;
            }
        }();
        var h = {
            elements: i.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
            version: "3.7.0",
            shivCSS: !1 !== i.shivCSS,
            supportsUnknownElements: f,
            shivMethods: !1 !== i.shivMethods,
            type: "default",
            shivDocument: t,
            createElement: p,
            createDocumentFragment: function(e, t) {
                if (e || (e = l), f) return e.createDocumentFragment();
                for (var i = (t = t || d(e)).frag.cloneNode(), n = 0, o = c(), s = o.length; n < s; n++) i.createElement(o[n]);
                return i;
            }
        };
        e.html5 = h, t(l);
    }(this, p), c._version = "2.8.3", c._prefixes = v, c._domPrefixes = y, c._cssomPrefixes = b, 
    c.testProp = function(e) {
        return a([ e ]);
    }, c.testAllProps = t, c.testStyles = S, u.className = u.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + " js " + k.join(" "), 
    c;
}(0, this.document), function(e, u, a) {
    function p(e) {
        return "[object Function]" == o.call(e);
    }
    function f(e) {
        return "string" == typeof e;
    }
    function h() {}
    function m(e) {
        return !e || "loaded" == e || "complete" == e || "uninitialized" == e;
    }
    function v() {
        var e = w.shift();
        k = 1, e ? e.t ? b(function() {
            ("c" == e.t ? g.injectCss : g.injectJs)(e.s, 0, e.a, e.x, e.e, 1);
        }, 0) : (e(), v()) : k = 0;
    }
    function t(e, t, i, n, o) {
        return k = 0, t = t || "j", f(e) ? function(i, n, e, t, o, s, r) {
            function a(e) {
                if (!c && m(l.readyState) && (p.r = c = 1, !k && v(), l.onload = l.onreadystatechange = null, 
                e)) for (var t in "img" != i && b(function() {
                    S.removeChild(l);
                }, 50), x[n]) x[n].hasOwnProperty(t) && x[n][t].onload();
            }
            r = r || g.errorTimeout;
            var l = u.createElement(i), c = 0, d = 0, p = {
                t: e,
                s: n,
                e: o,
                a: s,
                x: r
            };
            1 === x[n] && (d = 1, x[n] = []), "object" == i ? l.data = n : (l.src = n, l.type = i), 
            l.width = l.height = "0", l.onerror = l.onload = l.onreadystatechange = function() {
                a.call(this, d);
            }, w.splice(t, 0, p), "img" != i && (d || 2 === x[n] ? (S.insertBefore(l, T ? null : y), 
            b(a, r)) : x[n].push(l));
        }("c" == t ? c : r, e, t, this.i++, i, n, o) : (w.splice(this.i++, 0, e), 1 == w.length && v()), 
        this;
    }
    function l() {
        var e = g;
        return e.loader = {
            load: t,
            i: 0
        }, e;
    }
    var i, g, n = u.documentElement, b = e.setTimeout, y = u.getElementsByTagName("script")[0], o = {}.toString, w = [], k = 0, s = "MozAppearance" in n.style, T = s && !!u.createRange().compareNode, S = T ? n : y.parentNode, r = (n = e.opera && "[object Opera]" == o.call(e.opera), 
    n = !!u.attachEvent && !n, s ? "object" : n ? "script" : "img"), c = n ? "script" : r, C = Array.isArray || function(e) {
        return "[object Array]" == o.call(e);
    }, $ = [], x = {}, E = {
        timeout: function(e, t) {
            return t.length && (e.timeout = t[0]), e;
        }
    };
    (g = function(e) {
        function d(e, t, i, n, o) {
            var s = function(e) {
                e = e.split("!");
                var t, i, n, o = $.length, s = e.pop(), r = e.length;
                for (s = {
                    url: s,
                    origUrl: s,
                    prefixes: e
                }, i = 0; i < r; i++) n = e[i].split("="), (t = E[n.shift()]) && (s = t(s, n));
                for (i = 0; i < o; i++) s = $[i](s);
                return s;
            }(e), r = s.autoCallback;
            s.url.split(".").pop().split("?").shift(), s.bypass || (t && (t = p(t) ? t : t[e] || t[n] || t[e.split("/").pop().split("?")[0]]), 
            s.instead ? s.instead(e, t, i, n, o) : (x[s.url] ? s.noexec = !0 : x[s.url] = 1, 
            i.load(s.url, s.forceCSS || !s.forceJS && "css" == s.url.split(".").pop().split("?").shift() ? "c" : a, s.noexec, s.attrs, s.timeout), 
            (p(t) || p(r)) && i.load(function() {
                l(), t && t(s.origUrl, o, n), r && r(s.origUrl, o, n), x[s.url] = 2;
            })));
        }
        function t(e, t) {
            function i(i, e) {
                if (i) {
                    if (f(i)) e || (a = function() {
                        var e = [].slice.call(arguments);
                        l.apply(this, e), c();
                    }), d(i, a, t, 0, s); else if (Object(i) === i) for (o in n = function() {
                        var e, t = 0;
                        for (e in i) i.hasOwnProperty(e) && t++;
                        return t;
                    }(), i) i.hasOwnProperty(o) && (!e && !--n && (p(a) ? a = function() {
                        var e = [].slice.call(arguments);
                        l.apply(this, e), c();
                    } : a[o] = function(t) {
                        return function() {
                            var e = [].slice.call(arguments);
                            t && t.apply(this, e), c();
                        };
                    }(l[o])), d(i[o], a, t, o, s));
                } else !e && c();
            }
            var n, o, s = !!e.test, r = e.load || e.both, a = e.callback || h, l = a, c = e.complete || h;
            i(s ? e.yep : e.nope, !!r), r && i(r);
        }
        var i, n, o = this.yepnope.loader;
        if (f(e)) d(e, 0, o, 0); else if (C(e)) for (i = 0; i < e.length; i++) f(n = e[i]) ? d(n, 0, o, 0) : C(n) ? g(n) : Object(n) === n && t(n, o); else Object(e) === e && t(e, o);
    }).addPrefix = function(e, t) {
        E[e] = t;
    }, g.addFilter = function(e) {
        $.push(e);
    }, g.errorTimeout = 1e4, null == u.readyState && u.addEventListener && (u.readyState = "loading", 
    u.addEventListener("DOMContentLoaded", i = function() {
        u.removeEventListener("DOMContentLoaded", i, 0), u.readyState = "complete";
    }, 0)), e.yepnope = l(), e.yepnope.executeStack = v, e.yepnope.injectJs = function(e, t, i, n, o, s) {
        var r, a, l = u.createElement("script");
        n = n || g.errorTimeout;
        for (a in l.src = e, i) l.setAttribute(a, i[a]);
        t = s ? v : t || h, l.onreadystatechange = l.onload = function() {
            !r && m(l.readyState) && (r = 1, t(), l.onload = l.onreadystatechange = null);
        }, b(function() {
            r || t(r = 1);
        }, n), o ? l.onload() : y.parentNode.insertBefore(l, y);
    }, e.yepnope.injectCss = function(e, t, i, n, o, s) {
        var r;
        n = u.createElement("link"), t = s ? v : t || h;
        for (r in n.href = e, n.rel = "stylesheet", n.type = "text/css", i) n.setAttribute(r, i[r]);
        o || (y.parentNode.insertBefore(n, y), b(t, 0));
    };
}(this, document), Modernizr.load = function() {
    yepnope.apply(window, [].slice.call(arguments, 0));
}, Modernizr.addTest("csscalc", function() {
    var e = document.createElement("div");
    return e.style.cssText = "width:" + Modernizr._prefixes.join("calc(10px);width:"), 
    !!e.style.length;
}), Modernizr.addTest("cssfilters", function() {
    var e = document.createElement("div");
    return e.style.cssText = Modernizr._prefixes.join("filter:blur(2px); "), !!e.style.length && (void 0 === document.documentMode || 9 < document.documentMode);
}), Modernizr.addTest("svgfilters", function() {
    var e = !1;
    try {
        e = void 0 !== typeof SVGFEColorMatrixElement && 2 == SVGFEColorMatrixElement.SVG_FECOLORMATRIX_TYPE_SATURATE;
    } catch (e) {}
    return e;
}), function(e) {
    "use strict";
    "function" == typeof define && define.amd ? define([ "jquery" ], e) : "undefined" != typeof exports ? module.exports = e(require("jquery")) : e(jQuery);
}(function(c) {
    "use strict";
    var o, r = window.Slick || {};
    o = 0, (r = function(e, t) {
        var i, n = this;
        n.defaults = {
            accessibility: !0,
            adaptiveHeight: !1,
            appendArrows: c(e),
            appendDots: c(e),
            arrows: !0,
            asNavFor: null,
            prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
            nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
            autoplay: !1,
            autoplaySpeed: 3e3,
            centerMode: !1,
            centerPadding: "50px",
            cssEase: "ease",
            customPaging: function(e, t) {
                return c('<button type="button" data-role="none" role="button" tabindex="0" />').text(t + 1);
            },
            dots: !1,
            dotsClass: "slick-dots",
            draggable: !0,
            easing: "linear",
            edgeFriction: .35,
            fade: !1,
            focusOnSelect: !1,
            infinite: !0,
            initialSlide: 0,
            lazyLoad: "ondemand",
            mobileFirst: !1,
            pauseOnHover: !0,
            pauseOnFocus: !0,
            pauseOnDotsHover: !1,
            respondTo: "window",
            responsive: null,
            rows: 1,
            rtl: !1,
            slide: "",
            slidesPerRow: 1,
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 500,
            swipe: !0,
            swipeToSlide: !1,
            touchMove: !0,
            touchThreshold: 5,
            useCSS: !0,
            useTransform: !0,
            variableWidth: !1,
            vertical: !1,
            verticalSwiping: !1,
            waitForAnimate: !0,
            zIndex: 1e3
        }, n.initials = {
            animating: !1,
            dragging: !1,
            autoPlayTimer: null,
            currentDirection: 0,
            currentLeft: null,
            currentSlide: 0,
            direction: 1,
            $dots: null,
            listWidth: null,
            listHeight: null,
            loadIndex: 0,
            $nextArrow: null,
            $prevArrow: null,
            slideCount: null,
            slideWidth: null,
            $slideTrack: null,
            $slides: null,
            sliding: !1,
            slideOffset: 0,
            swipeLeft: null,
            $list: null,
            touchObject: {},
            transformsEnabled: !1,
            unslicked: !1
        }, c.extend(n, n.initials), n.activeBreakpoint = null, n.animType = null, n.animProp = null, 
        n.breakpoints = [], n.breakpointSettings = [], n.cssTransitions = !1, n.focussed = !1, 
        n.interrupted = !1, n.hidden = "hidden", n.paused = !0, n.positionProp = null, n.respondTo = null, 
        n.rowCount = 1, n.shouldClick = !0, n.$slider = c(e), n.$slidesCache = null, n.transformType = null, 
        n.transitionType = null, n.visibilityChange = "visibilitychange", n.windowWidth = 0, 
        n.windowTimer = null, i = c(e).data("slick") || {}, n.options = c.extend({}, n.defaults, t, i), 
        n.currentSlide = n.options.initialSlide, n.originalSettings = n.options, void 0 !== document.mozHidden ? (n.hidden = "mozHidden", 
        n.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (n.hidden = "webkitHidden", 
        n.visibilityChange = "webkitvisibilitychange"), n.autoPlay = c.proxy(n.autoPlay, n), 
        n.autoPlayClear = c.proxy(n.autoPlayClear, n), n.autoPlayIterator = c.proxy(n.autoPlayIterator, n), 
        n.changeSlide = c.proxy(n.changeSlide, n), n.clickHandler = c.proxy(n.clickHandler, n), 
        n.selectHandler = c.proxy(n.selectHandler, n), n.setPosition = c.proxy(n.setPosition, n), 
        n.swipeHandler = c.proxy(n.swipeHandler, n), n.dragHandler = c.proxy(n.dragHandler, n), 
        n.keyHandler = c.proxy(n.keyHandler, n), n.instanceUid = o++, n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, 
        n.registerBreakpoints(), n.init(!0);
    }).prototype.activateADA = function() {
        this.$slideTrack.find(".slick-active").attr({
            "aria-hidden": "false"
        }).find("a, input, button, select").attr({
            tabindex: "0"
        });
    }, r.prototype.addSlide = r.prototype.slickAdd = function(e, t, i) {
        var n = this;
        if ("boolean" == typeof t) i = t, t = null; else if (t < 0 || t >= n.slideCount) return !1;
        n.unload(), "number" == typeof t ? 0 === t && 0 === n.$slides.length ? c(e).appendTo(n.$slideTrack) : i ? c(e).insertBefore(n.$slides.eq(t)) : c(e).insertAfter(n.$slides.eq(t)) : !0 === i ? c(e).prependTo(n.$slideTrack) : c(e).appendTo(n.$slideTrack), 
        n.$slides = n.$slideTrack.children(this.options.slide), n.$slideTrack.children(this.options.slide).detach(), 
        n.$slideTrack.append(n.$slides), n.$slides.each(function(e, t) {
            c(t).attr("data-slick-index", e);
        }), n.$slidesCache = n.$slides, n.reinit();
    }, r.prototype.animateHeight = function() {
        var e = this;
        if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
            var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
            e.$list.animate({
                height: t
            }, e.options.speed);
        }
    }, r.prototype.animateSlide = function(e, t) {
        var i = {}, n = this;
        n.animateHeight(), !0 === n.options.rtl && !1 === n.options.vertical && (e = -e), 
        !1 === n.transformsEnabled ? !1 === n.options.vertical ? n.$slideTrack.animate({
            left: e
        }, n.options.speed, n.options.easing, t) : n.$slideTrack.animate({
            top: e
        }, n.options.speed, n.options.easing, t) : !1 === n.cssTransitions ? (!0 === n.options.rtl && (n.currentLeft = -n.currentLeft), 
        c({
            animStart: n.currentLeft
        }).animate({
            animStart: e
        }, {
            duration: n.options.speed,
            easing: n.options.easing,
            step: function(e) {
                e = Math.ceil(e), !1 === n.options.vertical ? i[n.animType] = "translate(" + e + "px, 0px)" : i[n.animType] = "translate(0px," + e + "px)", 
                n.$slideTrack.css(i);
            },
            complete: function() {
                t && t.call();
            }
        })) : (n.applyTransition(), e = Math.ceil(e), !1 === n.options.vertical ? i[n.animType] = "translate3d(" + e + "px, 0px, 0px)" : i[n.animType] = "translate3d(0px," + e + "px, 0px)", 
        n.$slideTrack.css(i), t && setTimeout(function() {
            n.disableTransition(), t.call();
        }, n.options.speed));
    }, r.prototype.getNavTarget = function() {
        var e = this.options.asNavFor;
        return e && null !== e && (e = c(e).not(this.$slider)), e;
    }, r.prototype.asNavFor = function(t) {
        var e = this.getNavTarget();
        null !== e && "object" == typeof e && e.each(function() {
            var e = c(this).slick("getSlick");
            e.unslicked || e.slideHandler(t, !0);
        });
    }, r.prototype.applyTransition = function(e) {
        var t = this, i = {};
        !1 === t.options.fade ? i[t.transitionType] = t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : i[t.transitionType] = "opacity " + t.options.speed + "ms " + t.options.cssEase, 
        !1 === t.options.fade ? t.$slideTrack.css(i) : t.$slides.eq(e).css(i);
    }, r.prototype.autoPlay = function() {
        var e = this;
        e.autoPlayClear(), e.slideCount > e.options.slidesToShow && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed));
    }, r.prototype.autoPlayClear = function() {
        this.autoPlayTimer && clearInterval(this.autoPlayTimer);
    }, r.prototype.autoPlayIterator = function() {
        var e = this, t = e.currentSlide + e.options.slidesToScroll;
        e.paused || e.interrupted || e.focussed || (!1 === e.options.infinite && (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1 ? e.direction = 0 : 0 === e.direction && (t = e.currentSlide - e.options.slidesToScroll, 
        e.currentSlide - 1 == 0 && (e.direction = 1))), e.slideHandler(t));
    }, r.prototype.buildArrows = function() {
        var e = this;
        !0 === e.options.arrows && (e.$prevArrow = c(e.options.prevArrow).addClass("slick-arrow"), 
        e.$nextArrow = c(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), 
        e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), 
        e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), 
        !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }));
    }, r.prototype.buildDots = function() {
        var e, t, i = this;
        if (!0 === i.options.dots && i.slideCount > i.options.slidesToShow) {
            for (i.$slider.addClass("slick-dotted"), t = c("<ul />").addClass(i.options.dotsClass), 
            e = 0; e <= i.getDotCount(); e += 1) t.append(c("<li />").append(i.options.customPaging.call(this, i, e)));
            i.$dots = t.appendTo(i.options.appendDots), i.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false");
        }
    }, r.prototype.buildOut = function() {
        var e = this;
        e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), 
        e.slideCount = e.$slides.length, e.$slides.each(function(e, t) {
            c(t).attr("data-slick-index", e).data("originalStyling", c(t).attr("style") || "");
        }), e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? c('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), 
        e.$list = e.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), 
        e.$slideTrack.css("opacity", 0), (!0 === e.options.centerMode || !0 === e.options.swipeToSlide) && (e.options.slidesToScroll = 1), 
        c("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), 
        e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), 
        !0 === e.options.draggable && e.$list.addClass("draggable");
    }, r.prototype.buildRows = function() {
        var e, t, i, n, o, s, r, a = this;
        if (n = document.createDocumentFragment(), s = a.$slider.children(), 1 < a.options.rows) {
            for (r = a.options.slidesPerRow * a.options.rows, o = Math.ceil(s.length / r), e = 0; e < o; e++) {
                var l = document.createElement("div");
                for (t = 0; t < a.options.rows; t++) {
                    var c = document.createElement("div");
                    for (i = 0; i < a.options.slidesPerRow; i++) {
                        var d = e * r + (t * a.options.slidesPerRow + i);
                        s.get(d) && c.appendChild(s.get(d));
                    }
                    l.appendChild(c);
                }
                n.appendChild(l);
            }
            a.$slider.empty().append(n), a.$slider.children().children().children().css({
                width: 100 / a.options.slidesPerRow + "%",
                display: "inline-block"
            });
        }
    }, r.prototype.checkResponsive = function(e, t) {
        var i, n, o, s = this, r = !1, a = s.$slider.width(), l = window.innerWidth || c(window).width();
        if ("window" === s.respondTo ? o = l : "slider" === s.respondTo ? o = a : "min" === s.respondTo && (o = Math.min(l, a)), 
        s.options.responsive && s.options.responsive.length && null !== s.options.responsive) {
            for (i in n = null, s.breakpoints) s.breakpoints.hasOwnProperty(i) && (!1 === s.originalSettings.mobileFirst ? o < s.breakpoints[i] && (n = s.breakpoints[i]) : o > s.breakpoints[i] && (n = s.breakpoints[i]));
            null !== n ? null !== s.activeBreakpoint ? (n !== s.activeBreakpoint || t) && (s.activeBreakpoint = n, 
            "unslick" === s.breakpointSettings[n] ? s.unslick(n) : (s.options = c.extend({}, s.originalSettings, s.breakpointSettings[n]), 
            !0 === e && (s.currentSlide = s.options.initialSlide), s.refresh(e)), r = n) : (s.activeBreakpoint = n, 
            "unslick" === s.breakpointSettings[n] ? s.unslick(n) : (s.options = c.extend({}, s.originalSettings, s.breakpointSettings[n]), 
            !0 === e && (s.currentSlide = s.options.initialSlide), s.refresh(e)), r = n) : null !== s.activeBreakpoint && (s.activeBreakpoint = null, 
            s.options = s.originalSettings, !0 === e && (s.currentSlide = s.options.initialSlide), 
            s.refresh(e), r = n), e || !1 === r || s.$slider.trigger("breakpoint", [ s, r ]);
        }
    }, r.prototype.changeSlide = function(e, t) {
        var i, n, o = this, s = c(e.currentTarget);
        switch (s.is("a") && e.preventDefault(), s.is("li") || (s = s.closest("li")), i = o.slideCount % o.options.slidesToScroll != 0 ? 0 : (o.slideCount - o.currentSlide) % o.options.slidesToScroll, 
        e.data.message) {
          case "previous":
            n = 0 === i ? o.options.slidesToScroll : o.options.slidesToShow - i, o.slideCount > o.options.slidesToShow && o.slideHandler(o.currentSlide - n, !1, t);
            break;

          case "next":
            n = 0 === i ? o.options.slidesToScroll : i, o.slideCount > o.options.slidesToShow && o.slideHandler(o.currentSlide + n, !1, t);
            break;

          case "index":
            var r = 0 === e.data.index ? 0 : e.data.index || s.index() * o.options.slidesToScroll;
            o.slideHandler(o.checkNavigable(r), !1, t), s.children().trigger("focus");
            break;

          default:
            return;
        }
    }, r.prototype.checkNavigable = function(e) {
        var t, i;
        if (i = 0, e > (t = this.getNavigableIndexes())[t.length - 1]) e = t[t.length - 1]; else for (var n in t) {
            if (e < t[n]) {
                e = i;
                break;
            }
            i = t[n];
        }
        return e;
    }, r.prototype.cleanUpEvents = function() {
        var e = this;
        e.options.dots && null !== e.$dots && c("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", c.proxy(e.interrupt, e, !0)).off("mouseleave.slick", c.proxy(e.interrupt, e, !1)), 
        e.$slider.off("focus.slick blur.slick"), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), 
        e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide)), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), 
        e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), 
        e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), 
        c(document).off(e.visibilityChange, e.visibility), e.cleanUpSlideEvents(), !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler), 
        !0 === e.options.focusOnSelect && c(e.$slideTrack).children().off("click.slick", e.selectHandler), 
        c(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), 
        c(window).off("resize.slick.slick-" + e.instanceUid, e.resize), c("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), 
        c(window).off("load.slick.slick-" + e.instanceUid, e.setPosition), c(document).off("ready.slick.slick-" + e.instanceUid, e.setPosition);
    }, r.prototype.cleanUpSlideEvents = function() {
        var e = this;
        e.$list.off("mouseenter.slick", c.proxy(e.interrupt, e, !0)), e.$list.off("mouseleave.slick", c.proxy(e.interrupt, e, !1));
    }, r.prototype.cleanUpRows = function() {
        var e;
        1 < this.options.rows && ((e = this.$slides.children().children()).removeAttr("style"), 
        this.$slider.empty().append(e));
    }, r.prototype.clickHandler = function(e) {
        !1 === this.shouldClick && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault());
    }, r.prototype.destroy = function(e) {
        var t = this;
        t.autoPlayClear(), t.touchObject = {}, t.cleanUpEvents(), c(".slick-cloned", t.$slider).detach(), 
        t.$dots && t.$dots.remove(), t.$prevArrow && t.$prevArrow.length && (t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), 
        t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()), t.$nextArrow && t.$nextArrow.length && (t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), 
        t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()), t.$slides && (t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
            c(this).attr("style", c(this).data("originalStyling"));
        }), t.$slideTrack.children(this.options.slide).detach(), t.$slideTrack.detach(), 
        t.$list.detach(), t.$slider.append(t.$slides)), t.cleanUpRows(), t.$slider.removeClass("slick-slider"), 
        t.$slider.removeClass("slick-initialized"), t.$slider.removeClass("slick-dotted"), 
        t.unslicked = !0, e || t.$slider.trigger("destroy", [ t ]);
    }, r.prototype.disableTransition = function(e) {
        var t = {};
        t[this.transitionType] = "", !1 === this.options.fade ? this.$slideTrack.css(t) : this.$slides.eq(e).css(t);
    }, r.prototype.fadeSlide = function(e, t) {
        var i = this;
        !1 === i.cssTransitions ? (i.$slides.eq(e).css({
            zIndex: i.options.zIndex
        }), i.$slides.eq(e).animate({
            opacity: 1
        }, i.options.speed, i.options.easing, t)) : (i.applyTransition(e), i.$slides.eq(e).css({
            opacity: 1,
            zIndex: i.options.zIndex
        }), t && setTimeout(function() {
            i.disableTransition(e), t.call();
        }, i.options.speed));
    }, r.prototype.fadeSlideOut = function(e) {
        var t = this;
        !1 === t.cssTransitions ? t.$slides.eq(e).animate({
            opacity: 0,
            zIndex: t.options.zIndex - 2
        }, t.options.speed, t.options.easing) : (t.applyTransition(e), t.$slides.eq(e).css({
            opacity: 0,
            zIndex: t.options.zIndex - 2
        }));
    }, r.prototype.filterSlides = r.prototype.slickFilter = function(e) {
        var t = this;
        null !== e && (t.$slidesCache = t.$slides, t.unload(), t.$slideTrack.children(this.options.slide).detach(), 
        t.$slidesCache.filter(e).appendTo(t.$slideTrack), t.reinit());
    }, r.prototype.focusHandler = function() {
        var i = this;
        i.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*:not(.slick-arrow)", function(e) {
            e.stopImmediatePropagation();
            var t = c(this);
            setTimeout(function() {
                i.options.pauseOnFocus && (i.focussed = t.is(":focus"), i.autoPlay());
            }, 0);
        });
    }, r.prototype.getCurrent = r.prototype.slickCurrentSlide = function() {
        return this.currentSlide;
    }, r.prototype.getDotCount = function() {
        var e = this, t = 0, i = 0, n = 0;
        if (!0 === e.options.infinite) for (;t < e.slideCount; ) ++n, t = i + e.options.slidesToScroll, 
        i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow; else if (!0 === e.options.centerMode) n = e.slideCount; else if (e.options.asNavFor) for (;t < e.slideCount; ) ++n, 
        t = i + e.options.slidesToScroll, i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow; else n = 1 + Math.ceil((e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll);
        return n - 1;
    }, r.prototype.getLeft = function(e) {
        var t, i, n, o = this, s = 0;
        return o.slideOffset = 0, i = o.$slides.first().outerHeight(!0), !0 === o.options.infinite ? (o.slideCount > o.options.slidesToShow && (o.slideOffset = o.slideWidth * o.options.slidesToShow * -1, 
        s = i * o.options.slidesToShow * -1), o.slideCount % o.options.slidesToScroll != 0 && e + o.options.slidesToScroll > o.slideCount && o.slideCount > o.options.slidesToShow && (e > o.slideCount ? (o.slideOffset = (o.options.slidesToShow - (e - o.slideCount)) * o.slideWidth * -1, 
        s = (o.options.slidesToShow - (e - o.slideCount)) * i * -1) : (o.slideOffset = o.slideCount % o.options.slidesToScroll * o.slideWidth * -1, 
        s = o.slideCount % o.options.slidesToScroll * i * -1))) : e + o.options.slidesToShow > o.slideCount && (o.slideOffset = (e + o.options.slidesToShow - o.slideCount) * o.slideWidth, 
        s = (e + o.options.slidesToShow - o.slideCount) * i), o.slideCount <= o.options.slidesToShow && (s = o.slideOffset = 0), 
        !0 === o.options.centerMode && !0 === o.options.infinite ? o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2) - o.slideWidth : !0 === o.options.centerMode && (o.slideOffset = 0, 
        o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2)), t = !1 === o.options.vertical ? e * o.slideWidth * -1 + o.slideOffset : e * i * -1 + s, 
        !0 === o.options.variableWidth && (n = o.slideCount <= o.options.slidesToShow || !1 === o.options.infinite ? o.$slideTrack.children(".slick-slide").eq(e) : o.$slideTrack.children(".slick-slide").eq(e + o.options.slidesToShow), 
        t = !0 === o.options.rtl ? n[0] ? -1 * (o.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0, 
        !0 === o.options.centerMode && (n = o.slideCount <= o.options.slidesToShow || !1 === o.options.infinite ? o.$slideTrack.children(".slick-slide").eq(e) : o.$slideTrack.children(".slick-slide").eq(e + o.options.slidesToShow + 1), 
        t = !0 === o.options.rtl ? n[0] ? -1 * (o.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0, 
        t += (o.$list.width() - n.outerWidth()) / 2)), t;
    }, r.prototype.getOption = r.prototype.slickGetOption = function(e) {
        return this.options[e];
    }, r.prototype.getNavigableIndexes = function() {
        var e, t = this, i = 0, n = 0, o = [];
        for (!1 === t.options.infinite ? e = t.slideCount : (i = -1 * t.options.slidesToScroll, 
        n = -1 * t.options.slidesToScroll, e = 2 * t.slideCount); i < e; ) o.push(i), i = n + t.options.slidesToScroll, 
        n += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
        return o;
    }, r.prototype.getSlick = function() {
        return this;
    }, r.prototype.getSlideCount = function() {
        var i, n, o = this;
        return n = !0 === o.options.centerMode ? o.slideWidth * Math.floor(o.options.slidesToShow / 2) : 0, 
        !0 === o.options.swipeToSlide ? (o.$slideTrack.find(".slick-slide").each(function(e, t) {
            return t.offsetLeft - n + c(t).outerWidth() / 2 > -1 * o.swipeLeft ? (i = t, !1) : void 0;
        }), Math.abs(c(i).attr("data-slick-index") - o.currentSlide) || 1) : o.options.slidesToScroll;
    }, r.prototype.goTo = r.prototype.slickGoTo = function(e, t) {
        this.changeSlide({
            data: {
                message: "index",
                index: parseInt(e)
            }
        }, t);
    }, r.prototype.init = function(e) {
        var t = this;
        c(t.$slider).hasClass("slick-initialized") || (c(t.$slider).addClass("slick-initialized"), 
        t.buildRows(), t.buildOut(), t.setProps(), t.startLoad(), t.loadSlider(), t.initializeEvents(), 
        t.updateArrows(), t.updateDots(), t.checkResponsive(!0), t.focusHandler()), e && t.$slider.trigger("init", [ t ]), 
        !0 === t.options.accessibility && t.initADA(), t.options.autoplay && (t.paused = !1, 
        t.autoPlay());
    }, r.prototype.initADA = function() {
        var t = this;
        t.$slides.add(t.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({
            tabindex: "-1"
        }), t.$slideTrack.attr("role", "listbox"), t.$slides.not(t.$slideTrack.find(".slick-cloned")).each(function(e) {
            c(this).attr({
                role: "option",
                "aria-describedby": "slick-slide" + t.instanceUid + e
            });
        }), null !== t.$dots && t.$dots.attr("role", "tablist").find("li").each(function(e) {
            c(this).attr({
                role: "presentation",
                "aria-selected": "false",
                "aria-controls": "navigation" + t.instanceUid + e,
                id: "slick-slide" + t.instanceUid + e
            });
        }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), 
        t.activateADA();
    }, r.prototype.initArrowEvents = function() {
        var e = this;
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.off("click.slick").on("click.slick", {
            message: "previous"
        }, e.changeSlide), e.$nextArrow.off("click.slick").on("click.slick", {
            message: "next"
        }, e.changeSlide));
    }, r.prototype.initDotEvents = function() {
        var e = this;
        !0 === e.options.dots && e.slideCount > e.options.slidesToShow && c("li", e.$dots).on("click.slick", {
            message: "index"
        }, e.changeSlide), !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && c("li", e.$dots).on("mouseenter.slick", c.proxy(e.interrupt, e, !0)).on("mouseleave.slick", c.proxy(e.interrupt, e, !1));
    }, r.prototype.initSlideEvents = function() {
        var e = this;
        e.options.pauseOnHover && (e.$list.on("mouseenter.slick", c.proxy(e.interrupt, e, !0)), 
        e.$list.on("mouseleave.slick", c.proxy(e.interrupt, e, !1)));
    }, r.prototype.initializeEvents = function() {
        var e = this;
        e.initArrowEvents(), e.initDotEvents(), e.initSlideEvents(), e.$list.on("touchstart.slick mousedown.slick", {
            action: "start"
        }, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", {
            action: "move"
        }, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", {
            action: "end"
        }, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", {
            action: "end"
        }, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), c(document).on(e.visibilityChange, c.proxy(e.visibility, e)), 
        !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && c(e.$slideTrack).children().on("click.slick", e.selectHandler), 
        c(window).on("orientationchange.slick.slick-" + e.instanceUid, c.proxy(e.orientationChange, e)), 
        c(window).on("resize.slick.slick-" + e.instanceUid, c.proxy(e.resize, e)), c("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), 
        c(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), c(document).on("ready.slick.slick-" + e.instanceUid, e.setPosition);
    }, r.prototype.initUI = function() {
        var e = this;
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(), 
        e.$nextArrow.show()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.show();
    }, r.prototype.keyHandler = function(e) {
        var t = this;
        e.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === e.keyCode && !0 === t.options.accessibility ? t.changeSlide({
            data: {
                message: !0 === t.options.rtl ? "next" : "previous"
            }
        }) : 39 === e.keyCode && !0 === t.options.accessibility && t.changeSlide({
            data: {
                message: !0 === t.options.rtl ? "previous" : "next"
            }
        }));
    }, r.prototype.lazyLoad = function() {
        function e(e) {
            c("img[data-lazy]", e).each(function() {
                var e = c(this), t = c(this).attr("data-lazy"), i = document.createElement("img");
                i.onload = function() {
                    e.animate({
                        opacity: 0
                    }, 100, function() {
                        e.attr("src", t).animate({
                            opacity: 1
                        }, 200, function() {
                            e.removeAttr("data-lazy").removeClass("slick-loading");
                        }), n.$slider.trigger("lazyLoaded", [ n, e, t ]);
                    });
                }, i.onerror = function() {
                    e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), 
                    n.$slider.trigger("lazyLoadError", [ n, e, t ]);
                }, i.src = t;
            });
        }
        var t, i, n = this;
        !0 === n.options.centerMode ? !0 === n.options.infinite ? i = (t = n.currentSlide + (n.options.slidesToShow / 2 + 1)) + n.options.slidesToShow + 2 : (t = Math.max(0, n.currentSlide - (n.options.slidesToShow / 2 + 1)), 
        i = n.options.slidesToShow / 2 + 1 + 2 + n.currentSlide) : (t = n.options.infinite ? n.options.slidesToShow + n.currentSlide : n.currentSlide, 
        i = Math.ceil(t + n.options.slidesToShow), !0 === n.options.fade && (0 < t && t--, 
        i <= n.slideCount && i++)), e(n.$slider.find(".slick-slide").slice(t, i)), n.slideCount <= n.options.slidesToShow ? e(n.$slider.find(".slick-slide")) : n.currentSlide >= n.slideCount - n.options.slidesToShow ? e(n.$slider.find(".slick-cloned").slice(0, n.options.slidesToShow)) : 0 === n.currentSlide && e(n.$slider.find(".slick-cloned").slice(-1 * n.options.slidesToShow));
    }, r.prototype.loadSlider = function() {
        var e = this;
        e.setPosition(), e.$slideTrack.css({
            opacity: 1
        }), e.$slider.removeClass("slick-loading"), e.initUI(), "progressive" === e.options.lazyLoad && e.progressiveLazyLoad();
    }, r.prototype.next = r.prototype.slickNext = function() {
        this.changeSlide({
            data: {
                message: "next"
            }
        });
    }, r.prototype.orientationChange = function() {
        this.checkResponsive(), this.setPosition();
    }, r.prototype.pause = r.prototype.slickPause = function() {
        this.autoPlayClear(), this.paused = !0;
    }, r.prototype.play = r.prototype.slickPlay = function() {
        var e = this;
        e.autoPlay(), e.options.autoplay = !0, e.paused = !1, e.focussed = !1, e.interrupted = !1;
    }, r.prototype.postSlide = function(e) {
        var t = this;
        t.unslicked || (t.$slider.trigger("afterChange", [ t, e ]), t.animating = !1, t.setPosition(), 
        t.swipeLeft = null, t.options.autoplay && t.autoPlay(), !0 === t.options.accessibility && t.initADA());
    }, r.prototype.prev = r.prototype.slickPrev = function() {
        this.changeSlide({
            data: {
                message: "previous"
            }
        });
    }, r.prototype.preventDefault = function(e) {
        e.preventDefault();
    }, r.prototype.progressiveLazyLoad = function(e) {
        e = e || 1;
        var t, i, n, o = this, s = c("img[data-lazy]", o.$slider);
        s.length ? (t = s.first(), i = t.attr("data-lazy"), (n = document.createElement("img")).onload = function() {
            t.attr("src", i).removeAttr("data-lazy").removeClass("slick-loading"), !0 === o.options.adaptiveHeight && o.setPosition(), 
            o.$slider.trigger("lazyLoaded", [ o, t, i ]), o.progressiveLazyLoad();
        }, n.onerror = function() {
            e < 3 ? setTimeout(function() {
                o.progressiveLazyLoad(e + 1);
            }, 500) : (t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), 
            o.$slider.trigger("lazyLoadError", [ o, t, i ]), o.progressiveLazyLoad());
        }, n.src = i) : o.$slider.trigger("allImagesLoaded", [ o ]);
    }, r.prototype.refresh = function(e) {
        var t, i, n = this;
        i = n.slideCount - n.options.slidesToShow, !n.options.infinite && n.currentSlide > i && (n.currentSlide = i), 
        n.slideCount <= n.options.slidesToShow && (n.currentSlide = 0), t = n.currentSlide, 
        n.destroy(!0), c.extend(n, n.initials, {
            currentSlide: t
        }), n.init(), e || n.changeSlide({
            data: {
                message: "index",
                index: t
            }
        }, !1);
    }, r.prototype.registerBreakpoints = function() {
        var e, t, i, n = this, o = n.options.responsive || null;
        if ("array" === c.type(o) && o.length) {
            for (e in n.respondTo = n.options.respondTo || "window", o) if (i = n.breakpoints.length - 1, 
            t = o[e].breakpoint, o.hasOwnProperty(e)) {
                for (;0 <= i; ) n.breakpoints[i] && n.breakpoints[i] === t && n.breakpoints.splice(i, 1), 
                i--;
                n.breakpoints.push(t), n.breakpointSettings[t] = o[e].settings;
            }
            n.breakpoints.sort(function(e, t) {
                return n.options.mobileFirst ? e - t : t - e;
            });
        }
    }, r.prototype.reinit = function() {
        var e = this;
        e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, 
        e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), 
        e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), 
        e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), 
        e.buildDots(), e.updateDots(), e.initDotEvents(), e.cleanUpSlideEvents(), e.initSlideEvents(), 
        e.checkResponsive(!1, !0), !0 === e.options.focusOnSelect && c(e.$slideTrack).children().on("click.slick", e.selectHandler), 
        e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.setPosition(), 
        e.focusHandler(), e.paused = !e.options.autoplay, e.autoPlay(), e.$slider.trigger("reInit", [ e ]);
    }, r.prototype.resize = function() {
        var e = this;
        c(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function() {
            e.windowWidth = c(window).width(), e.checkResponsive(), e.unslicked || e.setPosition();
        }, 50));
    }, r.prototype.removeSlide = r.prototype.slickRemove = function(e, t, i) {
        var n = this;
        return "boolean" == typeof e ? e = !0 === (t = e) ? 0 : n.slideCount - 1 : e = !0 === t ? --e : e, 
        !(n.slideCount < 1 || e < 0 || e > n.slideCount - 1) && (n.unload(), !0 === i ? n.$slideTrack.children().remove() : n.$slideTrack.children(this.options.slide).eq(e).remove(), 
        n.$slides = n.$slideTrack.children(this.options.slide), n.$slideTrack.children(this.options.slide).detach(), 
        n.$slideTrack.append(n.$slides), n.$slidesCache = n.$slides, void n.reinit());
    }, r.prototype.setCSS = function(e) {
        var t, i, n = this, o = {};
        !0 === n.options.rtl && (e = -e), t = "left" == n.positionProp ? Math.ceil(e) + "px" : "0px", 
        i = "top" == n.positionProp ? Math.ceil(e) + "px" : "0px", o[n.positionProp] = e, 
        !1 === n.transformsEnabled || (!(o = {}) === n.cssTransitions ? o[n.animType] = "translate(" + t + ", " + i + ")" : o[n.animType] = "translate3d(" + t + ", " + i + ", 0px)"), 
        n.$slideTrack.css(o);
    }, r.prototype.setDimensions = function() {
        var e = this;
        !1 === e.options.vertical ? !0 === e.options.centerMode && e.$list.css({
            padding: "0px " + e.options.centerPadding
        }) : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow), 
        !0 === e.options.centerMode && e.$list.css({
            padding: e.options.centerPadding + " 0px"
        })), e.listWidth = e.$list.width(), e.listHeight = e.$list.height(), !1 === e.options.vertical && !1 === e.options.variableWidth ? (e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow), 
        e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length))) : !0 === e.options.variableWidth ? e.$slideTrack.width(5e3 * e.slideCount) : (e.slideWidth = Math.ceil(e.listWidth), 
        e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length)));
        var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
        !1 === e.options.variableWidth && e.$slideTrack.children(".slick-slide").width(e.slideWidth - t);
    }, r.prototype.setFade = function() {
        var i, n = this;
        n.$slides.each(function(e, t) {
            i = n.slideWidth * e * -1, !0 === n.options.rtl ? c(t).css({
                position: "relative",
                right: i,
                top: 0,
                zIndex: n.options.zIndex - 2,
                opacity: 0
            }) : c(t).css({
                position: "relative",
                left: i,
                top: 0,
                zIndex: n.options.zIndex - 2,
                opacity: 0
            });
        }), n.$slides.eq(n.currentSlide).css({
            zIndex: n.options.zIndex - 1,
            opacity: 1
        });
    }, r.prototype.setHeight = function() {
        var e = this;
        if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
            var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
            e.$list.css("height", t);
        }
    }, r.prototype.setOption = r.prototype.slickSetOption = function() {
        var e, t, i, n, o, s = this, r = !1;
        if ("object" === c.type(arguments[0]) ? (i = arguments[0], r = arguments[1], o = "multiple") : "string" === c.type(arguments[0]) && (i = arguments[0], 
        n = arguments[1], r = arguments[2], "responsive" === arguments[0] && "array" === c.type(arguments[1]) ? o = "responsive" : void 0 !== arguments[1] && (o = "single")), 
        "single" === o) s.options[i] = n; else if ("multiple" === o) c.each(i, function(e, t) {
            s.options[e] = t;
        }); else if ("responsive" === o) for (t in n) if ("array" !== c.type(s.options.responsive)) s.options.responsive = [ n[t] ]; else {
            for (e = s.options.responsive.length - 1; 0 <= e; ) s.options.responsive[e].breakpoint === n[t].breakpoint && s.options.responsive.splice(e, 1), 
            e--;
            s.options.responsive.push(n[t]);
        }
        r && (s.unload(), s.reinit());
    }, r.prototype.setPosition = function() {
        var e = this;
        e.setDimensions(), e.setHeight(), !1 === e.options.fade ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(), 
        e.$slider.trigger("setPosition", [ e ]);
    }, r.prototype.setProps = function() {
        var e = this, t = document.body.style;
        e.positionProp = !0 === e.options.vertical ? "top" : "left", "top" === e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"), 
        (void 0 !== t.WebkitTransition || void 0 !== t.MozTransition || void 0 !== t.msTransition) && !0 === e.options.useCSS && (e.cssTransitions = !0), 
        e.options.fade && ("number" == typeof e.options.zIndex ? e.options.zIndex < 3 && (e.options.zIndex = 3) : e.options.zIndex = e.defaults.zIndex), 
        void 0 !== t.OTransform && (e.animType = "OTransform", e.transformType = "-o-transform", 
        e.transitionType = "OTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), 
        void 0 !== t.MozTransform && (e.animType = "MozTransform", e.transformType = "-moz-transform", 
        e.transitionType = "MozTransition", void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (e.animType = !1)), 
        void 0 !== t.webkitTransform && (e.animType = "webkitTransform", e.transformType = "-webkit-transform", 
        e.transitionType = "webkitTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), 
        void 0 !== t.msTransform && (e.animType = "msTransform", e.transformType = "-ms-transform", 
        e.transitionType = "msTransition", void 0 === t.msTransform && (e.animType = !1)), 
        void 0 !== t.transform && !1 !== e.animType && (e.animType = "transform", e.transformType = "transform", 
        e.transitionType = "transition"), e.transformsEnabled = e.options.useTransform && null !== e.animType && !1 !== e.animType;
    }, r.prototype.setSlideClasses = function(e) {
        var t, i, n, o, s = this;
        i = s.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), 
        s.$slides.eq(e).addClass("slick-current"), !0 === s.options.centerMode ? (t = Math.floor(s.options.slidesToShow / 2), 
        !0 === s.options.infinite && (t <= e && e <= s.slideCount - 1 - t ? s.$slides.slice(e - t, e + t + 1).addClass("slick-active").attr("aria-hidden", "false") : (n = s.options.slidesToShow + e, 
        i.slice(n - t + 1, n + t + 2).addClass("slick-active").attr("aria-hidden", "false")), 
        0 === e ? i.eq(i.length - 1 - s.options.slidesToShow).addClass("slick-center") : e === s.slideCount - 1 && i.eq(s.options.slidesToShow).addClass("slick-center")), 
        s.$slides.eq(e).addClass("slick-center")) : 0 <= e && e <= s.slideCount - s.options.slidesToShow ? s.$slides.slice(e, e + s.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : i.length <= s.options.slidesToShow ? i.addClass("slick-active").attr("aria-hidden", "false") : (o = s.slideCount % s.options.slidesToShow, 
        n = !0 === s.options.infinite ? s.options.slidesToShow + e : e, s.options.slidesToShow == s.options.slidesToScroll && s.slideCount - e < s.options.slidesToShow ? i.slice(n - (s.options.slidesToShow - o), n + o).addClass("slick-active").attr("aria-hidden", "false") : i.slice(n, n + s.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), 
        "ondemand" === s.options.lazyLoad && s.lazyLoad();
    }, r.prototype.setupInfinite = function() {
        var e, t, i, n = this;
        if (!0 === n.options.fade && (n.options.centerMode = !1), !0 === n.options.infinite && !1 === n.options.fade && (t = null, 
        n.slideCount > n.options.slidesToShow)) {
            for (i = !0 === n.options.centerMode ? n.options.slidesToShow + 1 : n.options.slidesToShow, 
            e = n.slideCount; e > n.slideCount - i; e -= 1) t = e - 1, c(n.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t - n.slideCount).prependTo(n.$slideTrack).addClass("slick-cloned");
            for (e = 0; e < i; e += 1) t = e, c(n.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t + n.slideCount).appendTo(n.$slideTrack).addClass("slick-cloned");
            n.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                c(this).attr("id", "");
            });
        }
    }, r.prototype.interrupt = function(e) {
        e || this.autoPlay(), this.interrupted = e;
    }, r.prototype.selectHandler = function(e) {
        var t = this, i = c(e.target).is(".slick-slide") ? c(e.target) : c(e.target).parents(".slick-slide"), n = parseInt(i.attr("data-slick-index"));
        return n || (n = 0), t.slideCount <= t.options.slidesToShow ? (t.setSlideClasses(n), 
        void t.asNavFor(n)) : void t.slideHandler(n);
    }, r.prototype.slideHandler = function(e, t, i) {
        var n, o, s, r, a, l = null, c = this;
        return t = t || !1, !0 === c.animating && !0 === c.options.waitForAnimate || !0 === c.options.fade && c.currentSlide === e || c.slideCount <= c.options.slidesToShow ? void 0 : (!1 === t && c.asNavFor(e), 
        n = e, l = c.getLeft(n), r = c.getLeft(c.currentSlide), c.currentLeft = null === c.swipeLeft ? r : c.swipeLeft, 
        !1 === c.options.infinite && !1 === c.options.centerMode && (e < 0 || e > c.getDotCount() * c.options.slidesToScroll) ? void (!1 === c.options.fade && (n = c.currentSlide, 
        !0 !== i ? c.animateSlide(r, function() {
            c.postSlide(n);
        }) : c.postSlide(n))) : !1 === c.options.infinite && !0 === c.options.centerMode && (e < 0 || e > c.slideCount - c.options.slidesToScroll) ? void (!1 === c.options.fade && (n = c.currentSlide, 
        !0 !== i ? c.animateSlide(r, function() {
            c.postSlide(n);
        }) : c.postSlide(n))) : (c.options.autoplay && clearInterval(c.autoPlayTimer), o = n < 0 ? c.slideCount % c.options.slidesToScroll != 0 ? c.slideCount - c.slideCount % c.options.slidesToScroll : c.slideCount + n : n >= c.slideCount ? c.slideCount % c.options.slidesToScroll != 0 ? 0 : n - c.slideCount : n, 
        c.animating = !0, c.$slider.trigger("beforeChange", [ c, c.currentSlide, o ]), s = c.currentSlide, 
        c.currentSlide = o, c.setSlideClasses(c.currentSlide), c.options.asNavFor && ((a = (a = c.getNavTarget()).slick("getSlick")).slideCount <= a.options.slidesToShow && a.setSlideClasses(c.currentSlide)), 
        c.updateDots(), c.updateArrows(), !0 === c.options.fade ? (!0 !== i ? (c.fadeSlideOut(s), 
        c.fadeSlide(o, function() {
            c.postSlide(o);
        })) : c.postSlide(o), void c.animateHeight()) : void (!0 !== i ? c.animateSlide(l, function() {
            c.postSlide(o);
        }) : c.postSlide(o))));
    }, r.prototype.startLoad = function() {
        var e = this;
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(), 
        e.$nextArrow.hide()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.hide(), 
        e.$slider.addClass("slick-loading");
    }, r.prototype.swipeDirection = function() {
        var e, t, i, n, o = this;
        return e = o.touchObject.startX - o.touchObject.curX, t = o.touchObject.startY - o.touchObject.curY, 
        i = Math.atan2(t, e), (n = Math.round(180 * i / Math.PI)) < 0 && (n = 360 - Math.abs(n)), 
        n <= 45 && 0 <= n ? !1 === o.options.rtl ? "left" : "right" : n <= 360 && 315 <= n ? !1 === o.options.rtl ? "left" : "right" : 135 <= n && n <= 225 ? !1 === o.options.rtl ? "right" : "left" : !0 === o.options.verticalSwiping ? 35 <= n && n <= 135 ? "down" : "up" : "vertical";
    }, r.prototype.swipeEnd = function(e) {
        var t, i, n = this;
        if (n.dragging = !1, n.interrupted = !1, n.shouldClick = !(10 < n.touchObject.swipeLength), 
        void 0 === n.touchObject.curX) return !1;
        if (!0 === n.touchObject.edgeHit && n.$slider.trigger("edge", [ n, n.swipeDirection() ]), 
        n.touchObject.swipeLength >= n.touchObject.minSwipe) {
            switch (i = n.swipeDirection()) {
              case "left":
              case "down":
                t = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide + n.getSlideCount()) : n.currentSlide + n.getSlideCount(), 
                n.currentDirection = 0;
                break;

              case "right":
              case "up":
                t = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide - n.getSlideCount()) : n.currentSlide - n.getSlideCount(), 
                n.currentDirection = 1;
            }
            "vertical" != i && (n.slideHandler(t), n.touchObject = {}, n.$slider.trigger("swipe", [ n, i ]));
        } else n.touchObject.startX !== n.touchObject.curX && (n.slideHandler(n.currentSlide), 
        n.touchObject = {});
    }, r.prototype.swipeHandler = function(e) {
        var t = this;
        if (!(!1 === t.options.swipe || "ontouchend" in document && !1 === t.options.swipe || !1 === t.options.draggable && -1 !== e.type.indexOf("mouse"))) switch (t.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1, 
        t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold, !0 === t.options.verticalSwiping && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold), 
        e.data.action) {
          case "start":
            t.swipeStart(e);
            break;

          case "move":
            t.swipeMove(e);
            break;

          case "end":
            t.swipeEnd(e);
        }
    }, r.prototype.swipeMove = function(e) {
        var t, i, n, o, s, r = this;
        return s = void 0 !== e.originalEvent ? e.originalEvent.touches : null, !(!r.dragging || s && 1 !== s.length) && (t = r.getLeft(r.currentSlide), 
        r.touchObject.curX = void 0 !== s ? s[0].pageX : e.clientX, r.touchObject.curY = void 0 !== s ? s[0].pageY : e.clientY, 
        r.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(r.touchObject.curX - r.touchObject.startX, 2))), 
        !0 === r.options.verticalSwiping && (r.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(r.touchObject.curY - r.touchObject.startY, 2)))), 
        "vertical" !== (i = r.swipeDirection()) ? (void 0 !== e.originalEvent && 4 < r.touchObject.swipeLength && e.preventDefault(), 
        o = (!1 === r.options.rtl ? 1 : -1) * (r.touchObject.curX > r.touchObject.startX ? 1 : -1), 
        !0 === r.options.verticalSwiping && (o = r.touchObject.curY > r.touchObject.startY ? 1 : -1), 
        n = r.touchObject.swipeLength, (r.touchObject.edgeHit = !1) === r.options.infinite && (0 === r.currentSlide && "right" === i || r.currentSlide >= r.getDotCount() && "left" === i) && (n = r.touchObject.swipeLength * r.options.edgeFriction, 
        r.touchObject.edgeHit = !0), !1 === r.options.vertical ? r.swipeLeft = t + n * o : r.swipeLeft = t + n * (r.$list.height() / r.listWidth) * o, 
        !0 === r.options.verticalSwiping && (r.swipeLeft = t + n * o), !0 !== r.options.fade && !1 !== r.options.touchMove && (!0 === r.animating ? (r.swipeLeft = null, 
        !1) : void r.setCSS(r.swipeLeft))) : void 0);
    }, r.prototype.swipeStart = function(e) {
        var t, i = this;
        return i.interrupted = !0, 1 !== i.touchObject.fingerCount || i.slideCount <= i.options.slidesToShow ? !(i.touchObject = {}) : (void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (t = e.originalEvent.touches[0]), 
        i.touchObject.startX = i.touchObject.curX = void 0 !== t ? t.pageX : e.clientX, 
        i.touchObject.startY = i.touchObject.curY = void 0 !== t ? t.pageY : e.clientY, 
        void (i.dragging = !0));
    }, r.prototype.unfilterSlides = r.prototype.slickUnfilter = function() {
        var e = this;
        null !== e.$slidesCache && (e.unload(), e.$slideTrack.children(this.options.slide).detach(), 
        e.$slidesCache.appendTo(e.$slideTrack), e.reinit());
    }, r.prototype.unload = function() {
        var e = this;
        c(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), 
        e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "");
    }, r.prototype.unslick = function(e) {
        this.$slider.trigger("unslick", [ this, e ]), this.destroy();
    }, r.prototype.updateArrows = function() {
        var e = this;
        Math.floor(e.options.slidesToShow / 2), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 
        e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), 
        e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - e.options.slidesToShow && !1 === e.options.centerMode ? (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), 
        e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - 1 && !0 === e.options.centerMode && (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), 
        e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")));
    }, r.prototype.updateDots = function() {
        var e = this;
        null !== e.$dots && (e.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), 
        e.$dots.find("li").eq(Math.floor(e.currentSlide / e.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"));
    }, r.prototype.visibility = function() {
        this.options.autoplay && (document[this.hidden] ? this.interrupted = !0 : this.interrupted = !1);
    }, c.fn.slick = function() {
        var e, t, i = this, n = arguments[0], o = Array.prototype.slice.call(arguments, 1), s = i.length;
        for (e = 0; e < s; e++) if ("object" == typeof n || void 0 === n ? i[e].slick = new r(i[e], n) : t = i[e].slick[n].apply(i[e].slick, o), 
        void 0 !== t) return t;
        return i;
    };
});