//存放一些基本的页面信息
//pageDomain是domian。
//baseURI 是主域名地址。
window.PPInfo = {
pageDomain: "91pinpai.cn",
baseURI: "91pinpai.cn",
searchCfg: {"witkey":{"placeholder":"\u641c\u201c\u516b\u6212\u753b\u50cf\u201d\u8bd5\u8bd5\uff0c\u4e0d\u6b62\u662f\u50cf","def_keyword":"\u516b\u6212\u753b\u50cf"},"service":{"placeholder":"","def_keyword":""},"task":{"placeholder":"","def_keyword":""}}
};
! function(a, b) {
    function c(a) {
        return K.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
    }

    function d(a) {
        if (!tc[a]) {
            var b = H.body,
                c = K("<" + a + ">").appendTo(b),
                d = c.css("display");
            c.remove(), ("none" === d || "" === d) && (pc || (pc = H.createElement("iframe"), pc.frameBorder = pc.width = pc.height = 0), b.appendChild(pc), qc && pc.createElement || (qc = (pc.contentWindow || pc.contentDocument).document, qc.write(("CSS1Compat" === H.compatMode ? "<!doctype html>" : "") + "<html><body>"), qc.close()), c = qc.createElement(a), qc.body.appendChild(c), d = K.css(c, "display"), b.removeChild(pc)), tc[a] = d
        }
        return tc[a]
    }

    function e(a, b) {
        var c = {};
        return K.each(wc.concat.apply([], wc.slice(0, b)), function() {
            c[this] = a
        }), c
    }

    function f() {
        sc = b
    }

    function g() {
        return setTimeout(f, 0), sc = K.now()
    }

    function h() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch (b) {}
    }

    function i() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {}
    }

    function j(a, c) {
        a.dataFilter && (c = a.dataFilter(c, a.dataType));
        var d, e, f, g, h, i, j, k, l = a.dataTypes,
            m = {},
            n = l.length,
            o = l[0];
        for (d = 1; n > d; d++) {
            if (1 === d)
                for (e in a.converters) "string" == typeof e && (m[e.toLowerCase()] = a.converters[e]);
            if (g = o, o = l[d], "*" === o) o = g;
            else if ("*" !== g && g !== o) {
                if (h = g + " " + o, i = m[h] || m["* " + o], !i) {
                    k = b;
                    for (j in m)
                        if (f = j.split(" "), (f[0] === g || "*" === f[0]) && (k = m[f[1] + " " + o])) {
                            j = m[j], j === !0 ? i = k : k === !0 && (i = j);
                            break
                        }
                }!i && !k && K.error("No conversion from " + h.replace(" ", " to ")), i !== !0 && (c = i ? i(c) : k(j(c)))
            }
        }
        return c
    }

    function k(a, c, d) {
        var e, f, g, h, i = a.contents,
            j = a.dataTypes,
            k = a.responseFields;
        for (f in k) f in d && (c[k[f]] = d[f]);
        for (;
            "*" === j[0];) j.shift(), e === b && (e = a.mimeType || c.getResponseHeader("content-type"));
        if (e)
            for (f in i)
                if (i[f] && i[f].test(e)) {
                    j.unshift(f);
                    break
                }
        if (j[0] in d) g = j[0];
        else {
            for (f in d) {
                if (!j[0] || a.converters[f + " " + j[0]]) {
                    g = f;
                    break
                }
                h || (h = f)
            }
            g = g || h
        }
        return g ? (g !== j[0] && j.unshift(g), d[g]) : void 0
    }

    function l(a, b, c, d) {
        if (K.isArray(b)) K.each(b, function(b, e) {
            c || Tb.test(a) ? d(a, e) : l(a + "[" + ("object" == typeof e || K.isArray(e) ? b : "") + "]", e, c, d)
        });
        else if (c || null == b || "object" != typeof b) d(a, b);
        else
            for (var e in b) l(a + "[" + e + "]", b[e], c, d)
    }

    function m(a, c) {
        var d, e, f = K.ajaxSettings.flatOptions || {};
        for (d in c) c[d] !== b && ((f[d] ? a : e || (e = {}))[d] = c[d]);
        e && K.extend(!0, a, e)
    }

    function n(a, c, d, e, f, g) {
        f = f || c.dataTypes[0], g = g || {}, g[f] = !0;
        for (var h, i = a[f], j = 0, k = i ? i.length : 0, l = a === gc; k > j && (l || !h); j++) h = i[j](c, d, e), "string" == typeof h && (!l || g[h] ? h = b : (c.dataTypes.unshift(h), h = n(a, c, d, e, h, g)));
        return (l || !h) && !g["*"] && (h = n(a, c, d, e, "*", g)), h
    }

    function o(a) {
        return function(b, c) {
            if ("string" != typeof b && (c = b, b = "*"), K.isFunction(c))
                for (var d, e, f, g = b.toLowerCase().split(cc), h = 0, i = g.length; i > h; h++) d = g[h], f = /^\+/.test(d), f && (d = d.substr(1) || "*"), e = a[d] = a[d] || [], e[f ? "unshift" : "push"](c)
        }
    }

    function p(a, b, c) {
        var d = "width" === b ? a.offsetWidth : a.offsetHeight,
            e = "width" === b ? Ob : Pb,
            f = 0,
            g = e.length;
        if (d > 0) {
            if ("border" !== c)
                for (; g > f; f++) c || (d -= parseFloat(K.css(a, "padding" + e[f])) || 0), "margin" === c ? d += parseFloat(K.css(a, c + e[f])) || 0 : d -= parseFloat(K.css(a, "border" + e[f] + "Width")) || 0;
            return d + "px"
        }
        if (d = Eb(a, b, b), (0 > d || null == d) && (d = a.style[b] || 0), d = parseFloat(d) || 0, c)
            for (; g > f; f++) d += parseFloat(K.css(a, "padding" + e[f])) || 0, "padding" !== c && (d += parseFloat(K.css(a, "border" + e[f] + "Width")) || 0), "margin" === c && (d += parseFloat(K.css(a, c + e[f])) || 0);
        return d + "px"
    }

    function q(a, b) {
        b.src ? K.ajax({
            url: b.src,
            async: !1,
            dataType: "script"
        }) : K.globalEval((b.text || b.textContent || b.innerHTML || "").replace(Bb, "/*$0*/")), b.parentNode && b.parentNode.removeChild(b)
    }

    function r(a) {
        var b = H.createElement("div");
        return Db.appendChild(b), b.innerHTML = a.outerHTML, b.firstChild
    }

    function s(a) {
        var b = (a.nodeName || "").toLowerCase();
        "input" === b ? t(a) : "script" !== b && "undefined" != typeof a.getElementsByTagName && K.grep(a.getElementsByTagName("input"), t)
    }

    function t(a) {
        ("checkbox" === a.type || "radio" === a.type) && (a.defaultChecked = a.checked)
    }

    function u(a) {
        return "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName("*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll("*") : []
    }

    function v(a, b) {
        var c;
        1 === b.nodeType && (b.clearAttributes && b.clearAttributes(), b.mergeAttributes && b.mergeAttributes(a), c = b.nodeName.toLowerCase(), "object" === c ? b.outerHTML = a.outerHTML : "input" !== c || "checkbox" !== a.type && "radio" !== a.type ? "option" === c ? b.selected = a.defaultSelected : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue) : (a.checked && (b.defaultChecked = b.checked = a.checked), b.value !== a.value && (b.value = a.value)), b.removeAttribute(K.expando))
    }

    function w(a, b) {
        if (1 === b.nodeType && K.hasData(a)) {
            var c, d, e, f = K._data(a),
                g = K._data(b, f),
                h = f.events;
            if (h) {
                delete g.handle, g.events = {};
                for (c in h)
                    for (d = 0, e = h[c].length; e > d; d++) K.event.add(b, c + (h[c][d].namespace ? "." : "") + h[c][d].namespace, h[c][d], h[c][d].data)
            }
            g.data && (g.data = K.extend({}, g.data))
        }
    }

    function x(a) {
        return K.nodeName(a, "table") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function y(a) {
        var b = pb.split("|"),
            c = a.createDocumentFragment();
        if (c.createElement)
            for (; b.length;) c.createElement(b.pop());
        return c
    }

    function z(a, b, c) {
        if (b = b || 0, K.isFunction(b)) return K.grep(a, function(a, d) {
            var e = !!b.call(a, d, a);
            return e === c
        });
        if (b.nodeType) return K.grep(a, function(a) {
            return a === b === c
        });
        if ("string" == typeof b) {
            var d = K.grep(a, function(a) {
                return 1 === a.nodeType
            });
            if (lb.test(b)) return K.filter(b, d, !c);
            b = K.filter(b, d)
        }
        return K.grep(a, function(a) {
            return K.inArray(a, b) >= 0 === c
        })
    }

    function A(a) {
        return !a || !a.parentNode || 11 === a.parentNode.nodeType
    }

    function B() {
        return !0
    }

    function C() {
        return !1
    }

    function D(a, b, c) {
        var d = b + "defer",
            e = b + "queue",
            f = b + "mark",
            g = K._data(a, d);
        !(!g || "queue" !== c && K._data(a, e) || "mark" !== c && K._data(a, f) || !setTimeout(function() {
            !K._data(a, e) && !K._data(a, f) && (K.removeData(a, d, !0), g.fire())
        }, 0))
    }

    function E(a) {
        for (var b in a)
            if (("data" !== b || !K.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
        return !0
    }

    function F(a, c, d) {
        if (d === b && 1 === a.nodeType) {
            var e = "data-" + c.replace(O, "-$1").toLowerCase();
            if (d = a.getAttribute(e), "string" == typeof d) {
                try {
                    d = "true" === d ? !0 : "false" === d ? !1 : "null" === d ? null : K.isNumeric(d) ? parseFloat(d) : N.test(d) ? K.parseJSON(d) : d
                } catch (f) {}
                K.data(a, c, d)
            } else d = b
        }
        return d
    }

    function G(a) {
        var b, c, d = L[a] = {};
        for (a = a.split(/\s+/), b = 0, c = a.length; c > b; b++) d[a[b]] = !0;
        return d
    }
    var H = a.document,
        I = a.navigator,
        J = a.location,
        K = function() {
            function c() {
                if (!h.isReady) {
                    try {
                        H.documentElement.doScroll("left")
                    } catch (a) {
                        return void setTimeout(c, 1)
                    }
                    h.ready()
                }
            }
            var d, e, f, g, h = function(a, b) {
                    return new h.fn.init(a, b, d)
                },
                i = a.jQuery,
                j = a.$,
                k = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
                l = /\S/,
                m = /^\s+/,
                n = /\s+$/,
                o = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
                p = /^[\],:{}\s]*$/,
                q = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
                r = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                s = /(?:^|:|,)(?:\s*\[)+/g,
                t = /(webkit)[ \/]([\w.]+)/,
                u = /(opera)(?:.*version)?[ \/]([\w.]+)/,
                v = /(msie) ([\w.]+)/,
                w = /(mozilla)(?:.*? rv:([\w.]+))?/,
                x = /-([a-z]|[0-9])/gi,
                y = /^-ms-/,
                z = function(a, b) {
                    return (b + "").toUpperCase()
                },
                A = I.userAgent,
                B = Object.prototype.toString,
                C = Object.prototype.hasOwnProperty,
                D = Array.prototype.push,
                E = Array.prototype.slice,
                F = String.prototype.trim,
                G = Array.prototype.indexOf,
                J = {};
            return h.fn = h.prototype = {
                constructor: h,
                init: function(a, c, d) {
                    var e, f, g, i;
                    if (!a) return this;
                    if (a.nodeType) return this.context = this[0] = a, this.length = 1, this;
                    if ("body" === a && !c && H.body) return this.context = H, this[0] = H.body, this.selector = a, this.length = 1, this;
                    if ("string" == typeof a) {
                        if (e = "<" !== a.charAt(0) || ">" !== a.charAt(a.length - 1) || a.length < 3 ? k.exec(a) : [null, a, null], e && (e[1] || !c)) {
                            if (e[1]) return c = c instanceof h ? c[0] : c, i = c ? c.ownerDocument || c : H, g = o.exec(a), g ? h.isPlainObject(c) ? (a = [H.createElement(g[1])], h.fn.attr.call(a, c, !0)) : a = [i.createElement(g[1])] : (g = h.buildFragment([e[1]], [i]), a = (g.cacheable ? h.clone(g.fragment) : g.fragment).childNodes), h.merge(this, a);
                            if (f = H.getElementById(e[2]), f && f.parentNode) {
                                if (f.id !== e[2]) return d.find(a);
                                this.length = 1, this[0] = f
                            }
                            return this.context = H, this.selector = a, this
                        }
                        return !c || c.jquery ? (c || d).find(a) : this.constructor(c).find(a)
                    }
                    return h.isFunction(a) ? d.ready(a) : (a.selector !== b && (this.selector = a.selector, this.context = a.context), h.makeArray(a, this))
                },
                selector: "",
                jquery: "1.7.1",
                length: 0,
                size: function() {
                    return this.length
                },
                toArray: function() {
                    return E.call(this, 0)
                },
                get: function(a) {
                    return null == a ? this.toArray() : 0 > a ? this[this.length + a] : this[a]
                },
                pushStack: function(a, b, c) {
                    var d = this.constructor();
                    return h.isArray(a) ? D.apply(d, a) : h.merge(d, a), d.prevObject = this, d.context = this.context, "find" === b ? d.selector = this.selector + (this.selector ? " " : "") + c : b && (d.selector = this.selector + "." + b + "(" + c + ")"), d
                },
                each: function(a, b) {
                    return h.each(this, a, b)
                },
                ready: function(a) {
                    return h.bindReady(), f.add(a), this
                },
                eq: function(a) {
                    return a = +a, -1 === a ? this.slice(a) : this.slice(a, a + 1)
                },
                first: function() {
                    return this.eq(0)
                },
                last: function() {
                    return this.eq(-1)
                },
                slice: function() {
                    return this.pushStack(E.apply(this, arguments), "slice", E.call(arguments).join(","))
                },
                map: function(a) {
                    return this.pushStack(h.map(this, function(b, c) {
                        return a.call(b, c, b)
                    }))
                },
                end: function() {
                    return this.prevObject || this.constructor(null)
                },
                push: D,
                sort: [].sort,
                splice: [].splice
            }, h.fn.init.prototype = h.fn, h.extend = h.fn.extend = function() {
                var a, c, d, e, f, g, i = arguments[0] || {},
                    j = 1,
                    k = arguments.length,
                    l = !1;
                for ("boolean" == typeof i && (l = i, i = arguments[1] || {}, j = 2), "object" != typeof i && !h.isFunction(i) && (i = {}), k === j && (i = this, --j); k > j; j++)
                    if (null != (a = arguments[j]))
                        for (c in a) d = i[c], e = a[c], i !== e && (l && e && (h.isPlainObject(e) || (f = h.isArray(e))) ? (f ? (f = !1, g = d && h.isArray(d) ? d : []) : g = d && h.isPlainObject(d) ? d : {}, i[c] = h.extend(l, g, e)) : e !== b && (i[c] = e));
                return i
            }, h.extend({
                noConflict: function(b) {
                    return a.$ === h && (a.$ = j), b && a.jQuery === h && (a.jQuery = i), h
                },
                isReady: !1,
                readyWait: 1,
                holdReady: function(a) {
                    a ? h.readyWait++ : h.ready(!0)
                },
                ready: function(a) {
                    if (a === !0 && !--h.readyWait || a !== !0 && !h.isReady) {
                        if (!H.body) return setTimeout(h.ready, 1);
                        if (h.isReady = !0, a !== !0 && --h.readyWait > 0) return;
                        f.fireWith(H, [h]), h.fn.trigger && h(H).trigger("ready").off("ready")
                    }
                },
                bindReady: function() {
                    if (!f) {
                        if (f = h.Callbacks("once memory"), "complete" === H.readyState) return setTimeout(h.ready, 1);
                        if (H.addEventListener) H.addEventListener("DOMContentLoaded", g, !1), a.addEventListener("load", h.ready, !1);
                        else if (H.attachEvent) {
                            H.attachEvent("onreadystatechange", g), a.attachEvent("onload", h.ready);
                            var b = !1;
                            try {
                                b = null == a.frameElement
                            } catch (d) {}
                            H.documentElement.doScroll && b && c()
                        }
                    }
                },
                isFunction: function(a) {
                    return "function" === h.type(a)
                },
                isArray: Array.isArray || function(a) {
                    return "array" === h.type(a)
                },
                isWindow: function(a) {
                    return a && "object" == typeof a && "setInterval" in a
                },
                isNumeric: function(a) {
                    return !isNaN(parseFloat(a)) && isFinite(a)
                },
                type: function(a) {
                    return null == a ? String(a) : J[B.call(a)] || "object"
                },
                isPlainObject: function(a) {
                    if (!a || "object" !== h.type(a) || a.nodeType || h.isWindow(a)) return !1;
                    try {
                        if (a.constructor && !C.call(a, "constructor") && !C.call(a.constructor.prototype, "isPrototypeOf")) return !1
                    } catch (c) {
                        return !1
                    }
                    var d;
                    for (d in a);
                    return d === b || C.call(a, d)
                },
                isEmptyObject: function(a) {
                    for (var b in a) return !1;
                    return !0
                },
                error: function(a) {
                    throw new Error(a)
                },
                parseJSON: function(b) {
                    return "string" == typeof b && b ? (b = h.trim(b), a.JSON && a.JSON.parse ? a.JSON.parse(b) : p.test(b.replace(q, "@").replace(r, "]").replace(s, "")) ? new Function("return " + b)() : void h.error("Invalid JSON: " + b)) : null
                },
                parseXML: function(c) {
                    var d, e;
                    try {
                        a.DOMParser ? (e = new DOMParser, d = e.parseFromString(c, "text/xml")) : (d = new ActiveXObject("Microsoft.XMLDOM"), d.async = "false", d.loadXML(c))
                    } catch (f) {
                        d = b
                    }
                    return (!d || !d.documentElement || d.getElementsByTagName("parsererror").length) && h.error("Invalid XML: " + c), d
                },
                noop: function() {},
                globalEval: function(b) {
                    b && l.test(b) && (a.execScript || function(b) {
                        a.eval.call(a, b)
                    })(b)
                },
                camelCase: function(a) {
                    return a.replace(y, "ms-").replace(x, z)
                },
                nodeName: function(a, b) {
                    return a.nodeName && a.nodeName.toUpperCase() === b.toUpperCase()
                },
                each: function(a, c, d) {
                    var e, f = 0,
                        g = a.length,
                        i = g === b || h.isFunction(a);
                    if (d)
                        if (i) {
                            for (e in a)
                                if (c.apply(a[e], d) === !1) break
                        } else
                            for (; g > f && c.apply(a[f++], d) !== !1;);
                    else if (i) {
                        for (e in a)
                            if (c.call(a[e], e, a[e]) === !1) break
                    } else
                        for (; g > f && c.call(a[f], f, a[f++]) !== !1;);
                    return a
                },
                trim: F ? function(a) {
                    return null == a ? "" : F.call(a)
                } : function(a) {
                    return null == a ? "" : (a + "").replace(m, "").replace(n, "")
                },
                makeArray: function(a, b) {
                    var c = b || [];
                    if (null != a) {
                        var d = h.type(a);
                        null == a.length || "string" === d || "function" === d || "regexp" === d || h.isWindow(a) ? D.call(c, a) : h.merge(c, a)
                    }
                    return c
                },
                inArray: function(a, b, c) {
                    var d;
                    if (b) {
                        if (G) return G.call(b, a, c);
                        for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++)
                            if (c in b && b[c] === a) return c
                    }
                    return -1
                },
                merge: function(a, c) {
                    var d = a.length,
                        e = 0;
                    if ("number" == typeof c.length)
                        for (var f = c.length; f > e; e++) a[d++] = c[e];
                    else
                        for (; c[e] !== b;) a[d++] = c[e++];
                    return a.length = d, a
                },
                grep: function(a, b, c) {
                    var d, e = [];
                    c = !!c;
                    for (var f = 0, g = a.length; g > f; f++) d = !!b(a[f], f), c !== d && e.push(a[f]);
                    return e
                },
                map: function(a, c, d) {
                    var e, f, g = [],
                        i = 0,
                        j = a.length,
                        k = a instanceof h || j !== b && "number" == typeof j && (j > 0 && a[0] && a[j - 1] || 0 === j || h.isArray(a));
                    if (k)
                        for (; j > i; i++) e = c(a[i], i, d), null != e && (g[g.length] = e);
                    else
                        for (f in a) e = c(a[f], f, d), null != e && (g[g.length] = e);
                    return g.concat.apply([], g)
                },
                guid: 1,
                proxy: function(a, c) {
                    if ("string" == typeof c) {
                        var d = a[c];
                        c = a, a = d
                    }
                    if (!h.isFunction(a)) return b;
                    var e = E.call(arguments, 2),
                        f = function() {
                            return a.apply(c, e.concat(E.call(arguments)))
                        };
                    return f.guid = a.guid = a.guid || f.guid || h.guid++, f
                },
                access: function(a, c, d, e, f, g) {
                    var i = a.length;
                    if ("object" == typeof c) {
                        for (var j in c) h.access(a, j, c[j], e, f, d);
                        return a
                    }
                    if (d !== b) {
                        e = !g && e && h.isFunction(d);
                        for (var k = 0; i > k; k++) f(a[k], c, e ? d.call(a[k], k, f(a[k], c)) : d, g);
                        return a
                    }
                    return i ? f(a[0], c) : b
                },
                now: function() {
                    return (new Date).getTime()
                },
                uaMatch: function(a) {
                    a = a.toLowerCase();
                    var b = t.exec(a) || u.exec(a) || v.exec(a) || a.indexOf("compatible") < 0 && w.exec(a) || [];
                    return {
                        browser: b[1] || "",
                        version: b[2] || "0"
                    }
                },
                sub: function() {
                    function a(b, c) {
                        return new a.fn.init(b, c)
                    }
                    h.extend(!0, a, this), a.superclass = this, a.fn = a.prototype = this(), a.fn.constructor = a, a.sub = this.sub, a.fn.init = function(c, d) {
                        return d && d instanceof h && !(d instanceof a) && (d = a(d)), h.fn.init.call(this, c, d, b)
                    }, a.fn.init.prototype = a.fn;
                    var b = a(H);
                    return a
                },
                browser: {}
            }), h.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(a, b) {
                J["[object " + b + "]"] = b.toLowerCase()
            }), e = h.uaMatch(A), e.browser && (h.browser[e.browser] = !0, h.browser.version = e.version), h.browser.webkit && (h.browser.safari = !0), l.test(" ") && (m = /^[\s\xA0]+/, n = /[\s\xA0]+$/), d = h(H), H.addEventListener ? g = function() {
                H.removeEventListener("DOMContentLoaded", g, !1), h.ready()
            } : H.attachEvent && (g = function() {
                "complete" === H.readyState && (H.detachEvent("onreadystatechange", g), h.ready())
            }), h
        }(),
        L = {};
    K.Callbacks = function(a) {
        a = a ? L[a] || G(a) : {};
        var c, d, e, f, g, h = [],
            i = [],
            j = function(b) {
                var c, d, e, f;
                for (c = 0, d = b.length; d > c; c++) e = b[c], f = K.type(e), "array" === f ? j(e) : "function" === f && (!a.unique || !l.has(e)) && h.push(e)
            },
            k = function(b, j) {
                for (j = j || [], c = !a.memory || [b, j], d = !0, g = e || 0, e = 0, f = h.length; h && f > g; g++)
                    if (h[g].apply(b, j) === !1 && a.stopOnFalse) {
                        c = !0;
                        break
                    }
                d = !1, h && (a.once ? c === !0 ? l.disable() : h = [] : i && i.length && (c = i.shift(), l.fireWith(c[0], c[1])))
            },
            l = {
                add: function() {
                    if (h) {
                        var a = h.length;
                        j(arguments), d ? f = h.length : c && c !== !0 && (e = a, k(c[0], c[1]))
                    }
                    return this
                },
                remove: function() {
                    if (h)
                        for (var b = arguments, c = 0, e = b.length; e > c; c++)
                            for (var i = 0; i < h.length && (b[c] !== h[i] || (d && f >= i && (f--, g >= i && g--), h.splice(i--, 1), !a.unique)); i++);
                    return this
                },
                has: function(a) {
                    if (h)
                        for (var b = 0, c = h.length; c > b; b++)
                            if (a === h[b]) return !0;
                    return !1
                },
                empty: function() {
                    return h = [], this
                },
                disable: function() {
                    return h = i = c = b, this
                },
                disabled: function() {
                    return !h
                },
                lock: function() {
                    return i = b, (!c || c === !0) && l.disable(), this
                },
                locked: function() {
                    return !i
                },
                fireWith: function(b, e) {
                    return i && (d ? a.once || i.push([b, e]) : (!a.once || !c) && k(b, e)), this
                },
                fire: function() {
                    return l.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!c
                }
            };
        return l
    };
    var M = [].slice;
    K.extend({
        Deferred: function(a) {
            var b, c = K.Callbacks("once memory"),
                d = K.Callbacks("once memory"),
                e = K.Callbacks("memory"),
                f = "pending",
                g = {
                    resolve: c,
                    reject: d,
                    notify: e
                },
                h = {
                    done: c.add,
                    fail: d.add,
                    progress: e.add,
                    state: function() {
                        return f
                    },
                    isResolved: c.fired,
                    isRejected: d.fired,
                    then: function(a, b, c) {
                        return i.done(a).fail(b).progress(c), this
                    },
                    always: function() {
                        return i.done.apply(i, arguments).fail.apply(i, arguments), this
                    },
                    pipe: function(a, b, c) {
                        return K.Deferred(function(d) {
                            K.each({
                                done: [a, "resolve"],
                                fail: [b, "reject"],
                                progress: [c, "notify"]
                            }, function(a, b) {
                                var c, e = b[0],
                                    f = b[1];
                                i[a](K.isFunction(e) ? function() {
                                    c = e.apply(this, arguments), c && K.isFunction(c.promise) ? c.promise().then(d.resolve, d.reject, d.notify) : d[f + "With"](this === i ? d : this, [c])
                                } : d[f])
                            })
                        }).promise()
                    },
                    promise: function(a) {
                        if (null == a) a = h;
                        else
                            for (var b in h) a[b] = h[b];
                        return a
                    }
                },
                i = h.promise({});
            for (b in g) i[b] = g[b].fire, i[b + "With"] = g[b].fireWith;
            return i.done(function() {
                f = "resolved"
            }, d.disable, e.lock).fail(function() {
                f = "rejected"
            }, c.disable, e.lock), a && a.call(i, i), i
        },
        when: function(a) {
            function b(a) {
                return function(b) {
                    g[a] = arguments.length > 1 ? M.call(arguments, 0) : b, i.notifyWith(j, g)
                }
            }

            function c(a) {
                return function(b) {
                    d[a] = arguments.length > 1 ? M.call(arguments, 0) : b, --h || i.resolveWith(i, d)
                }
            }
            var d = M.call(arguments, 0),
                e = 0,
                f = d.length,
                g = Array(f),
                h = f,
                i = 1 >= f && a && K.isFunction(a.promise) ? a : K.Deferred(),
                j = i.promise();
            if (f > 1) {
                for (; f > e; e++) d[e] && d[e].promise && K.isFunction(d[e].promise) ? d[e].promise().then(c(e), i.reject, b(e)) : --h;
                h || i.resolveWith(i, d)
            } else i !== a && i.resolveWith(i, f ? [a] : []);
            return j
        }
    }), K.support = function() {
        {
            var b, c, d, e, f, g, h, i, j, k, l, m, n = H.createElement("div");
            H.documentElement
        }
        if (n.setAttribute("className", "t"), n.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>", c = n.getElementsByTagName("*"), d = n.getElementsByTagName("a")[0], !c || !c.length || !d) return {};
        e = H.createElement("select"), f = e.appendChild(H.createElement("option")), g = n.getElementsByTagName("input")[0], b = {
            leadingWhitespace: 3 === n.firstChild.nodeType,
            tbody: !n.getElementsByTagName("tbody").length,
            htmlSerialize: !!n.getElementsByTagName("link").length,
            style: /top/.test(d.getAttribute("style")),
            hrefNormalized: "/a" === d.getAttribute("href"),
            opacity: /^0.55/.test(d.style.opacity),
            cssFloat: !!d.style.cssFloat,
            checkOn: "on" === g.value,
            optSelected: f.selected,
            getSetAttribute: "t" !== n.className,
            enctype: !!H.createElement("form").enctype,
            html5Clone: "<:nav></:nav>" !== H.createElement("nav").cloneNode(!0).outerHTML,
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0
        }, g.checked = !0, b.noCloneChecked = g.cloneNode(!0).checked, e.disabled = !0, b.optDisabled = !f.disabled;
        try {
            delete n.test
        } catch (o) {
            b.deleteExpando = !1
        }
        if (!n.addEventListener && n.attachEvent && n.fireEvent && (n.attachEvent("onclick", function() {
                b.noCloneEvent = !1
            }), n.cloneNode(!0).fireEvent("onclick")), g = H.createElement("input"), g.value = "t", g.setAttribute("type", "radio"), b.radioValue = "t" === g.value, g.setAttribute("checked", "checked"), n.appendChild(g), i = H.createDocumentFragment(), i.appendChild(n.lastChild), b.checkClone = i.cloneNode(!0).cloneNode(!0).lastChild.checked, b.appendChecked = g.checked, i.removeChild(g), i.appendChild(n), n.innerHTML = "", a.getComputedStyle && (h = H.createElement("div"), h.style.width = "0", h.style.marginRight = "0", n.style.width = "2px", n.appendChild(h), b.reliableMarginRight = 0 === (parseInt((a.getComputedStyle(h, null) || {
                marginRight: 0
            }).marginRight, 10) || 0)), n.attachEvent)
            for (l in {
                    submit: 1,
                    change: 1,
                    focusin: 1
                }) k = "on" + l, m = k in n, m || (n.setAttribute(k, "return;"), m = "function" == typeof n[k]), b[l + "Bubbles"] = m;
        return i.removeChild(n), i = e = f = h = n = g = null, K(function() {
            var a, c, d, e, f, g, h, i, k, l, o = H.getElementsByTagName("body")[0];
            !o || (g = 1, h = "position:absolute;top:0;left:0;width:1px;height:1px;margin:0;", i = "visibility:hidden;border:0;", k = "style='" + h + "border:5px solid #000;padding:0;'", l = "<div " + k + "><div></div></div><table " + k + " cellpadding='0' cellspacing='0'><tr><td></td></tr></table>", a = H.createElement("div"), a.style.cssText = i + "width:0;height:0;position:static;top:0;margin-top:" + g + "px", o.insertBefore(a, o.firstChild), n = H.createElement("div"), a.appendChild(n), n.innerHTML = "<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>", j = n.getElementsByTagName("td"), m = 0 === j[0].offsetHeight, j[0].style.display = "", j[1].style.display = "none", b.reliableHiddenOffsets = m && 0 === j[0].offsetHeight, n.innerHTML = "", n.style.width = n.style.paddingLeft = "1px", K.boxModel = b.boxModel = 2 === n.offsetWidth, "undefined" != typeof n.style.zoom && (n.style.display = "inline", n.style.zoom = 1, b.inlineBlockNeedsLayout = 2 === n.offsetWidth, n.style.display = "", n.innerHTML = "<div style='width:4px;'></div>", b.shrinkWrapBlocks = 2 !== n.offsetWidth), n.style.cssText = h + i, n.innerHTML = l, c = n.firstChild, d = c.firstChild, e = c.nextSibling.firstChild.firstChild, f = {
                doesNotAddBorder: 5 !== d.offsetTop,
                doesAddBorderForTableAndCells: 5 === e.offsetTop
            }, d.style.position = "fixed", d.style.top = "20px", f.fixedPosition = 20 === d.offsetTop || 15 === d.offsetTop, d.style.position = d.style.top = "", c.style.overflow = "hidden", c.style.position = "relative", f.subtractsBorderForOverflowNotVisible = -5 === d.offsetTop, f.doesNotIncludeMarginInBodyOffset = o.offsetTop !== g, o.removeChild(a), n = a = null, K.extend(b, f))
        }), b
    }();
    var N = /^(?:\{.*\}|\[.*\])$/,
        O = /([A-Z])/g;
    K.extend({
        cache: {},
        uuid: 0,
        expando: "jQuery" + (K.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function(a) {
            return a = a.nodeType ? K.cache[a[K.expando]] : a[K.expando], !!a && !E(a)
        },
        data: function(a, c, d, e) {
            if (K.acceptData(a)) {
                var f, g, h, i = K.expando,
                    j = "string" == typeof c,
                    k = a.nodeType,
                    l = k ? K.cache : a,
                    m = k ? a[i] : a[i] && i,
                    n = "events" === c;
                if (!(m && l[m] && (n || e || l[m].data) || !j || d !== b)) return;
                return m || (k ? a[i] = m = ++K.uuid : m = i), l[m] || (l[m] = {}, k || (l[m].toJSON = K.noop)), ("object" == typeof c || "function" == typeof c) && (e ? l[m] = K.extend(l[m], c) : l[m].data = K.extend(l[m].data, c)), f = g = l[m], e || (g.data || (g.data = {}), g = g.data), d !== b && (g[K.camelCase(c)] = d), n && !g[c] ? f.events : (j ? (h = g[c], null == h && (h = g[K.camelCase(c)])) : h = g, h)
            }
        },
        removeData: function(a, b, c) {
            if (K.acceptData(a)) {
                var d, e, f, g = K.expando,
                    h = a.nodeType,
                    i = h ? K.cache : a,
                    j = h ? a[g] : g;
                if (!i[j]) return;
                if (b && (d = c ? i[j] : i[j].data)) {
                    K.isArray(b) || (b in d ? b = [b] : (b = K.camelCase(b), b = b in d ? [b] : b.split(" ")));
                    for (e = 0, f = b.length; f > e; e++) delete d[b[e]];
                    if (!(c ? E : K.isEmptyObject)(d)) return
                }
                if (!c && (delete i[j].data, !E(i[j]))) return;
                K.support.deleteExpando || !i.setInterval ? delete i[j] : i[j] = null, h && (K.support.deleteExpando ? delete a[g] : a.removeAttribute ? a.removeAttribute(g) : a[g] = null)
            }
        },
        _data: function(a, b, c) {
            return K.data(a, b, c, !0)
        },
        acceptData: function(a) {
            if (a.nodeName) {
                var b = K.noData[a.nodeName.toLowerCase()];
                if (b) return b !== !0 && a.getAttribute("classid") === b
            }
            return !0
        }
    }), K.fn.extend({
        data: function(a, c) {
            var d, e, f, g = null;
            if ("undefined" == typeof a) {
                if (this.length && (g = K.data(this[0]), 1 === this[0].nodeType && !K._data(this[0], "parsedAttrs"))) {
                    e = this[0].attributes;
                    for (var h = 0, i = e.length; i > h; h++) f = e[h].name, 0 === f.indexOf("data-") && (f = K.camelCase(f.substring(5)), F(this[0], f, g[f]));
                    K._data(this[0], "parsedAttrs", !0)
                }
                return g
            }
            return "object" == typeof a ? this.each(function() {
                K.data(this, a)
            }) : (d = a.split("."), d[1] = d[1] ? "." + d[1] : "", c === b ? (g = this.triggerHandler("getData" + d[1] + "!", [d[0]]), g === b && this.length && (g = K.data(this[0], a), g = F(this[0], a, g)), g === b && d[1] ? this.data(d[0]) : g) : this.each(function() {
                var b = K(this),
                    e = [d[0], c];
                b.triggerHandler("setData" + d[1] + "!", e), K.data(this, a, c), b.triggerHandler("changeData" + d[1] + "!", e)
            }))
        },
        removeData: function(a) {
            return this.each(function() {
                K.removeData(this, a)
            })
        }
    }), K.extend({
        _mark: function(a, b) {
            a && (b = (b || "fx") + "mark", K._data(a, b, (K._data(a, b) || 0) + 1))
        },
        _unmark: function(a, b, c) {
            if (a !== !0 && (c = b, b = a, a = !1), b) {
                c = c || "fx";
                var d = c + "mark",
                    e = a ? 0 : (K._data(b, d) || 1) - 1;
                e ? K._data(b, d, e) : (K.removeData(b, d, !0), D(b, c, "mark"))
            }
        },
        queue: function(a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = K._data(a, b), c && (!d || K.isArray(c) ? d = K._data(a, b, K.makeArray(c)) : d.push(c)), d || []) : void 0
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = K.queue(a, b),
                d = c.shift(),
                e = {};
            "inprogress" === d && (d = c.shift()), d && ("fx" === b && c.unshift("inprogress"), K._data(a, b + ".run", e), d.call(a, function() {
                K.dequeue(a, b)
            }, e)), c.length || (K.removeData(a, b + "queue " + b + ".run", !0), D(a, b, "queue"))
        }
    }), K.fn.extend({
        queue: function(a, c) {
            return "string" != typeof a && (c = a, a = "fx"), c === b ? K.queue(this[0], a) : this.each(function() {
                var b = K.queue(this, a, c);
                "fx" === a && "inprogress" !== b[0] && K.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                K.dequeue(this, a)
            })
        },
        delay: function(a, b) {
            return a = K.fx ? K.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
                var d = setTimeout(b, a);
                c.stop = function() {
                    clearTimeout(d)
                }
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, c) {
            function d() {
                --i || f.resolveWith(g, [g])
            }
            "string" != typeof a && (c = a, a = b), a = a || "fx";
            for (var e, f = K.Deferred(), g = this, h = g.length, i = 1, j = a + "defer", k = a + "queue", l = a + "mark"; h--;)(e = K.data(g[h], j, b, !0) || (K.data(g[h], k, b, !0) || K.data(g[h], l, b, !0)) && K.data(g[h], j, K.Callbacks("once memory"), !0)) && (i++, e.add(d));
            return d(), f.promise()
        }
    });
    var P, Q, R, S = /[\n\t\r]/g,
        T = /\s+/,
        U = /\r/g,
        V = /^(?:button|input)$/i,
        W = /^(?:button|input|object|select|textarea)$/i,
        X = /^a(?:rea)?$/i,
        Y = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        Z = K.support.getSetAttribute;
    K.fn.extend({
        attr: function(a, b) {
            return K.access(this, a, b, !0, K.attr)
        },
        removeAttr: function(a) {
            return this.each(function() {
                K.removeAttr(this, a)
            })
        },
        prop: function(a, b) {
            return K.access(this, a, b, !0, K.prop)
        },
        removeProp: function(a) {
            return a = K.propFix[a] || a, this.each(function() {
                try {
                    this[a] = b, delete this[a]
                } catch (c) {}
            })
        },
        addClass: function(a) {
            var b, c, d, e, f, g, h;
            if (K.isFunction(a)) return this.each(function(b) {
                K(this).addClass(a.call(this, b, this.className))
            });
            if (a && "string" == typeof a)
                for (b = a.split(T), c = 0, d = this.length; d > c; c++)
                    if (e = this[c], 1 === e.nodeType)
                        if (e.className || 1 !== b.length) {
                            for (f = " " + e.className + " ", g = 0, h = b.length; h > g; g++) ~f.indexOf(" " + b[g] + " ") || (f += b[g] + " ");
                            e.className = K.trim(f)
                        } else e.className = a;
            return this
        },
        removeClass: function(a) {
            var c, d, e, f, g, h, i;
            if (K.isFunction(a)) return this.each(function(b) {
                K(this).removeClass(a.call(this, b, this.className))
            });
            if (a && "string" == typeof a || a === b)
                for (c = (a || "").split(T), d = 0, e = this.length; e > d; d++)
                    if (f = this[d], 1 === f.nodeType && f.className)
                        if (a) {
                            for (g = (" " + f.className + " ").replace(S, " "), h = 0, i = c.length; i > h; h++) g = g.replace(" " + c[h] + " ", " ");
                            f.className = K.trim(g)
                        } else f.className = "";
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a,
                d = "boolean" == typeof b;
            return this.each(K.isFunction(a) ? function(c) {
                K(this).toggleClass(a.call(this, c, this.className, b), b)
            } : function() {
                if ("string" === c)
                    for (var e, f = 0, g = K(this), h = b, i = a.split(T); e = i[f++];) h = d ? h : !g.hasClass(e), g[h ? "addClass" : "removeClass"](e);
                else("undefined" === c || "boolean" === c) && (this.className && K._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : K._data(this, "__className__") || "")
            })
        },
        hasClass: function(a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
                if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(S, " ").indexOf(b) > -1) return !0;
            return !1
        },
        val: function(a) {
            var c, d, e, f = this[0];
            return arguments.length ? (e = K.isFunction(a), this.each(function(d) {
                var f, g = K(this);
                1 === this.nodeType && (f = e ? a.call(this, d, g.val()) : a, null == f ? f = "" : "number" == typeof f ? f += "" : K.isArray(f) && (f = K.map(f, function(a) {
                    return null == a ? "" : a + ""
                })), c = K.valHooks[this.nodeName.toLowerCase()] || K.valHooks[this.type], c && "set" in c && c.set(this, f, "value") !== b || (this.value = f))
            })) : f ? (c = K.valHooks[f.nodeName.toLowerCase()] || K.valHooks[f.type], c && "get" in c && (d = c.get(f, "value")) !== b ? d : (d = f.value, "string" == typeof d ? d.replace(U, "") : null == d ? "" : d)) : void 0
        }
    }), K.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = a.attributes.value;
                    return !b || b.specified ? a.value : a.text
                }
            },
            select: {
                get: function(a) {
                    var b, c, d, e, f = a.selectedIndex,
                        g = [],
                        h = a.options,
                        i = "select-one" === a.type;
                    if (0 > f) return null;
                    for (c = i ? f : 0, d = i ? f + 1 : h.length; d > c; c++)
                        if (e = h[c], !(!e.selected || (K.support.optDisabled ? e.disabled : null !== e.getAttribute("disabled")) || e.parentNode.disabled && K.nodeName(e.parentNode, "optgroup"))) {
                            if (b = K(e).val(), i) return b;
                            g.push(b)
                        }
                    return i && !g.length && h.length ? K(h[f]).val() : g
                },
                set: function(a, b) {
                    var c = K.makeArray(b);
                    return K(a).find("option").each(function() {
                        this.selected = K.inArray(K(this).val(), c) >= 0
                    }), c.length || (a.selectedIndex = -1), c
                }
            }
        },
        attrFn: {
            val: !0,
            css: !0,
            html: !0,
            text: !0,
            data: !0,
            width: !0,
            height: !0,
            offset: !0
        },
        attr: function(a, c, d, e) {
            var f, g, h, i = a.nodeType;
            return a && 3 !== i && 8 !== i && 2 !== i ? e && c in K.attrFn ? K(a)[c](d) : "undefined" == typeof a.getAttribute ? K.prop(a, c, d) : (h = 1 !== i || !K.isXMLDoc(a), h && (c = c.toLowerCase(), g = K.attrHooks[c] || (Y.test(c) ? Q : P)), d !== b ? null === d ? void K.removeAttr(a, c) : g && "set" in g && h && (f = g.set(a, d, c)) !== b ? f : (a.setAttribute(c, "" + d), d) : g && "get" in g && h && null !== (f = g.get(a, c)) ? f : (f = a.getAttribute(c), null === f ? b : f)) : void 0
        },
        removeAttr: function(a, b) {
            var c, d, e, f, g = 0;
            if (b && 1 === a.nodeType)
                for (d = b.toLowerCase().split(T), f = d.length; f > g; g++) e = d[g], e && (c = K.propFix[e] || e, K.attr(a, e, ""), a.removeAttribute(Z ? e : c), Y.test(e) && c in a && (a[c] = !1))
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (V.test(a.nodeName) && a.parentNode) K.error("type property can't be changed");
                    else if (!K.support.radioValue && "radio" === b && K.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            },
            value: {
                get: function(a, b) {
                    return P && K.nodeName(a, "button") ? P.get(a, b) : b in a ? a.value : null
                },
                set: function(a, b, c) {
                    return P && K.nodeName(a, "button") ? P.set(a, b, c) : void(a.value = b)
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function(a, c, d) {
            var e, f, g, h = a.nodeType;
            return a && 3 !== h && 8 !== h && 2 !== h ? (g = 1 !== h || !K.isXMLDoc(a), g && (c = K.propFix[c] || c, f = K.propHooks[c]), d !== b ? f && "set" in f && (e = f.set(a, d, c)) !== b ? e : a[c] = d : f && "get" in f && null !== (e = f.get(a, c)) ? e : a[c]) : void 0
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var c = a.getAttributeNode("tabindex");
                    return c && c.specified ? parseInt(c.value, 10) : W.test(a.nodeName) || X.test(a.nodeName) && a.href ? 0 : b
                }
            }
        }
    }), K.attrHooks.tabindex = K.propHooks.tabIndex, Q = {
        get: function(a, c) {
            var d, e = K.prop(a, c);
            return e === !0 || "boolean" != typeof e && (d = a.getAttributeNode(c)) && d.nodeValue !== !1 ? c.toLowerCase() : b
        },
        set: function(a, b, c) {
            var d;
            return b === !1 ? K.removeAttr(a, c) : (d = K.propFix[c] || c, d in a && (a[d] = !0), a.setAttribute(c, c.toLowerCase())), c
        }
    }, Z || (R = {
        name: !0,
        id: !0
    }, P = K.valHooks.button = {
        get: function(a, c) {
            var d;
            return d = a.getAttributeNode(c), d && (R[c] ? "" !== d.nodeValue : d.specified) ? d.nodeValue : b
        },
        set: function(a, b, c) {
            var d = a.getAttributeNode(c);
            return d || (d = H.createAttribute(c), a.setAttributeNode(d)), d.nodeValue = b + ""
        }
    }, K.attrHooks.tabindex.set = P.set, K.each(["width", "height"], function(a, b) {
        K.attrHooks[b] = K.extend(K.attrHooks[b], {
            set: function(a, c) {
                return "" === c ? (a.setAttribute(b, "auto"), c) : void 0
            }
        })
    }), K.attrHooks.contenteditable = {
        get: P.get,
        set: function(a, b, c) {
            "" === b && (b = "false"), P.set(a, b, c)
        }
    }), K.support.hrefNormalized || K.each(["href", "src", "width", "height"], function(a, c) {
        K.attrHooks[c] = K.extend(K.attrHooks[c], {
            get: function(a) {
                var d = a.getAttribute(c, 2);
                return null === d ? b : d
            }
        })
    }), K.support.style || (K.attrHooks.style = {
        get: function(a) {
            return a.style.cssText.toLowerCase() || b
        },
        set: function(a, b) {
            return a.style.cssText = "" + b
        }
    }), K.support.optSelected || (K.propHooks.selected = K.extend(K.propHooks.selected, {
        get: function(a) {
            var b = a.parentNode;
            return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
        }
    })), K.support.enctype || (K.propFix.enctype = "encoding"), K.support.checkOn || K.each(["radio", "checkbox"], function() {
        K.valHooks[this] = {
            get: function(a) {
                return null === a.getAttribute("value") ? "on" : a.value
            }
        }
    }), K.each(["radio", "checkbox"], function() {
        K.valHooks[this] = K.extend(K.valHooks[this], {
            set: function(a, b) {
                return K.isArray(b) ? a.checked = K.inArray(K(a).val(), b) >= 0 : void 0
            }
        })
    });
    var $ = /^(?:textarea|input|select)$/i,
        _ = /^([^\.]*)?(?:\.(.+))?$/,
        ab = /\bhover(\.\S+)?\b/,
        bb = /^key/,
        cb = /^(?:mouse|contextmenu)|click/,
        db = /^(?:focusinfocus|focusoutblur)$/,
        eb = /^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,
        fb = function(a) {
            var b = eb.exec(a);
            return b && (b[1] = (b[1] || "").toLowerCase(), b[3] = b[3] && new RegExp("(?:^|\\s)" + b[3] + "(?:\\s|$)")), b
        },
        gb = function(a, b) {
            var c = a.attributes || {};
            return !(b[1] && a.nodeName.toLowerCase() !== b[1] || b[2] && (c.id || {}).value !== b[2] || b[3] && !b[3].test((c["class"] || {}).value))
        },
        hb = function(a) {
            return K.event.special.hover ? a : a.replace(ab, "mouseenter$1 mouseleave$1")
        };
    K.event = {
            add: function(a, c, d, e, f) {
                var g, h, i, j, k, l, m, n, o, p, q;
                if (3 !== a.nodeType && 8 !== a.nodeType && c && d && (g = K._data(a))) {
                    for (d.handler && (o = d, d = o.handler), d.guid || (d.guid = K.guid++), i = g.events, i || (g.events = i = {}), h = g.handle, h || (g.handle = h = function(a) {
                            return "undefined" == typeof K || a && K.event.triggered === a.type ? b : K.event.dispatch.apply(h.elem, arguments)
                        }, h.elem = a), c = K.trim(hb(c)).split(" "), j = 0; j < c.length; j++) k = _.exec(c[j]) || [], l = k[1], m = (k[2] || "").split(".").sort(), q = K.event.special[l] || {}, l = (f ? q.delegateType : q.bindType) || l, q = K.event.special[l] || {}, n = K.extend({
                        type: l,
                        origType: k[1],
                        data: e,
                        handler: d,
                        guid: d.guid,
                        selector: f,
                        quick: fb(f),
                        namespace: m.join(".")
                    }, o), p = i[l], p || (p = i[l] = [], p.delegateCount = 0, q.setup && q.setup.call(a, e, m, h) !== !1 || (a.addEventListener ? a.addEventListener(l, h, !1) : a.attachEvent && a.attachEvent("on" + l, h))), q.add && (q.add.call(a, n), n.handler.guid || (n.handler.guid = d.guid)), f ? p.splice(p.delegateCount++, 0, n) : p.push(n), K.event.global[l] = !0;
                    a = null
                }
            },
            global: {},
            remove: function(a, b, c, d, e) {
                var f, g, h, i, j, k, l, m, n, o, p, q, r = K.hasData(a) && K._data(a);
                if (r && (m = r.events)) {
                    for (b = K.trim(hb(b || "")).split(" "), f = 0; f < b.length; f++)
                        if (g = _.exec(b[f]) || [], h = i = g[1], j = g[2], h) {
                            for (n = K.event.special[h] || {}, h = (d ? n.delegateType : n.bindType) || h, p = m[h] || [], k = p.length, j = j ? new RegExp("(^|\\.)" + j.split(".").sort().join("\\.(?:.*\\.)?") + "(\\.|$)") : null, l = 0; l < p.length; l++) q = p[l], !(!e && i !== q.origType || c && c.guid !== q.guid || j && !j.test(q.namespace) || d && d !== q.selector && ("**" !== d || !q.selector) || (p.splice(l--, 1), q.selector && p.delegateCount--, !n.remove || !n.remove.call(a, q)));
                            0 === p.length && k !== p.length && ((!n.teardown || n.teardown.call(a, j) === !1) && K.removeEvent(a, h, r.handle), delete m[h])
                        } else
                            for (h in m) K.event.remove(a, h + b[f], c, d, !0);
                    K.isEmptyObject(m) && (o = r.handle, o && (o.elem = null), K.removeData(a, ["events", "handle"], !0))
                }
            },
            customEvent: {
                getData: !0,
                setData: !0,
                changeData: !0
            },
            trigger: function(c, d, e, f) {
                if (!e || 3 !== e.nodeType && 8 !== e.nodeType) {
                    var g, h, i, j, k, l, m, n, o, p, q = c.type || c,
                        r = [];
                    if (db.test(q + K.event.triggered)) return;
                    if (q.indexOf("!") >= 0 && (q = q.slice(0, -1), h = !0), q.indexOf(".") >= 0 && (r = q.split("."), q = r.shift(), r.sort()), (!e || K.event.customEvent[q]) && !K.event.global[q]) return;
                    if (c = "object" == typeof c ? c[K.expando] ? c : new K.Event(q, c) : new K.Event(q), c.type = q, c.isTrigger = !0, c.exclusive = h, c.namespace = r.join("."), c.namespace_re = c.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.)?") + "(\\.|$)") : null, l = q.indexOf(":") < 0 ? "on" + q : "", !e) {
                        g = K.cache;
                        for (i in g) g[i].events && g[i].events[q] && K.event.trigger(c, d, g[i].handle.elem, !0);
                        return
                    }
                    if (c.result = b, c.target || (c.target = e), d = null != d ? K.makeArray(d) : [], d.unshift(c), m = K.event.special[q] || {}, m.trigger && m.trigger.apply(e, d) === !1) return;
                    if (o = [
                            [e, m.bindType || q]
                        ], !f && !m.noBubble && !K.isWindow(e)) {
                        for (p = m.delegateType || q, j = db.test(p + q) ? e : e.parentNode, k = null; j; j = j.parentNode) o.push([j, p]), k = j;
                        k && k === e.ownerDocument && o.push([k.defaultView || k.parentWindow || a, p])
                    }
                    for (i = 0; i < o.length && !c.isPropagationStopped(); i++) j = o[i][0], c.type = o[i][1], n = (K._data(j, "events") || {})[c.type] && K._data(j, "handle"), n && n.apply(j, d), n = l && j[l], n && K.acceptData(j) && n.apply(j, d) === !1 && c.preventDefault();
                    return c.type = q, !(f || c.isDefaultPrevented() || m._default && m._default.apply(e.ownerDocument, d) !== !1 || "click" === q && K.nodeName(e, "a") || !K.acceptData(e) || !l || !e[q] || ("focus" === q || "blur" === q) && 0 === c.target.offsetWidth || K.isWindow(e) || (k = e[l], k && (e[l] = null), K.event.triggered = q, e[q](), K.event.triggered = b, !k || !(e[l] = k))), c.result
                }
            },
            dispatch: function(c) {
                c = K.event.fix(c || a.event);
                var d, e, f, g, h, i, j, k, l, m, n = (K._data(this, "events") || {})[c.type] || [],
                    o = n.delegateCount,
                    p = [].slice.call(arguments, 0),
                    q = !c.exclusive && !c.namespace,
                    r = [];
                if (p[0] = c, c.delegateTarget = this, o && !c.target.disabled && (!c.button || "click" !== c.type))
                    for (g = K(this), g.context = this.ownerDocument || this, f = c.target; f != this; f = f.parentNode || this) {
                        for (i = {}, k = [], g[0] = f, d = 0; o > d; d++) l = n[d], m = l.selector, i[m] === b && (i[m] = l.quick ? gb(f, l.quick) : g.is(m)), i[m] && k.push(l);
                        k.length && r.push({
                            elem: f,
                            matches: k
                        })
                    }
                for (n.length > o && r.push({
                        elem: this,
                        matches: n.slice(o)
                    }), d = 0; d < r.length && !c.isPropagationStopped(); d++)
                    for (j = r[d], c.currentTarget = j.elem, e = 0; e < j.matches.length && !c.isImmediatePropagationStopped(); e++) l = j.matches[e], (q || !c.namespace && !l.namespace || c.namespace_re && c.namespace_re.test(l.namespace)) && (c.data = l.data, c.handleObj = l, h = ((K.event.special[l.origType] || {}).handle || l.handler).apply(j.elem, p), h !== b && (c.result = h, h === !1 && (c.preventDefault(), c.stopPropagation())));
                return c.result
            },
            props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(a, b) {
                    return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(a, c) {
                    var d, e, f, g = c.button,
                        h = c.fromElement;
                    return null == a.pageX && null != c.clientX && (d = a.target.ownerDocument || H, e = d.documentElement, f = d.body, a.pageX = c.clientX + (e && e.scrollLeft || f && f.scrollLeft || 0) - (e && e.clientLeft || f && f.clientLeft || 0), a.pageY = c.clientY + (e && e.scrollTop || f && f.scrollTop || 0) - (e && e.clientTop || f && f.clientTop || 0)), !a.relatedTarget && h && (a.relatedTarget = h === a.target ? c.toElement : h), !a.which && g !== b && (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0), a
                }
            },
            fix: function(a) {
                if (a[K.expando]) return a;
                var c, d, e = a,
                    f = K.event.fixHooks[a.type] || {},
                    g = f.props ? this.props.concat(f.props) : this.props;
                for (a = K.Event(e), c = g.length; c;) d = g[--c], a[d] = e[d];
                return a.target || (a.target = e.srcElement || H), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey === b && (a.metaKey = a.ctrlKey), f.filter ? f.filter(a, e) : a
            },
            special: {
                ready: {
                    setup: K.bindReady
                },
                load: {
                    noBubble: !0
                },
                focus: {
                    delegateType: "focusin"
                },
                blur: {
                    delegateType: "focusout"
                },
                beforeunload: {
                    setup: function(a, b, c) {
                        K.isWindow(this) && (this.onbeforeunload = c)
                    },
                    teardown: function(a, b) {
                        this.onbeforeunload === b && (this.onbeforeunload = null)
                    }
                }
            },
            simulate: function(a, b, c, d) {
                var e = K.extend(new K.Event, c, {
                    type: a,
                    isSimulated: !0,
                    originalEvent: {}
                });
                d ? K.event.trigger(e, null, b) : K.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
            }
        }, K.event.handle = K.event.dispatch, K.removeEvent = H.removeEventListener ? function(a, b, c) {
            a.removeEventListener && a.removeEventListener(b, c, !1)
        } : function(a, b, c) {
            a.detachEvent && a.detachEvent("on" + b, c)
        }, K.Event = function(a, b) {
            return this instanceof K.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || a.returnValue === !1 || a.getPreventDefault && a.getPreventDefault() ? B : C) : this.type = a, b && K.extend(this, b), this.timeStamp = a && a.timeStamp || K.now(), this[K.expando] = !0, void 0) : new K.Event(a, b)
        }, K.Event.prototype = {
            preventDefault: function() {
                this.isDefaultPrevented = B;
                var a = this.originalEvent;
                !a || (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
            },
            stopPropagation: function() {
                this.isPropagationStopped = B;
                var a = this.originalEvent;
                !a || (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
            },
            stopImmediatePropagation: function() {
                this.isImmediatePropagationStopped = B, this.stopPropagation()
            },
            isDefaultPrevented: C,
            isPropagationStopped: C,
            isImmediatePropagationStopped: C
        }, K.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        }, function(a, b) {
            K.event.special[a] = {
                delegateType: b,
                bindType: b,
                handle: function(a) {
                    {
                        var c, d = this,
                            e = a.relatedTarget,
                            f = a.handleObj;
                        f.selector
                    }
                    return (!e || e !== d && !K.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
                }
            }
        }), K.support.submitBubbles || (K.event.special.submit = {
            setup: function() {
                return K.nodeName(this, "form") ? !1 : void K.event.add(this, "click._submit keypress._submit", function(a) {
                    var c = a.target,
                        d = K.nodeName(c, "input") || K.nodeName(c, "button") ? c.form : b;
                    d && !d._submit_attached && (K.event.add(d, "submit._submit", function(a) {
                        this.parentNode && !a.isTrigger && K.event.simulate("submit", this.parentNode, a, !0)
                    }), d._submit_attached = !0)
                })
            },
            teardown: function() {
                return K.nodeName(this, "form") ? !1 : void K.event.remove(this, "._submit")
            }
        }), K.support.changeBubbles || (K.event.special.change = {
            setup: function() {
                return $.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (K.event.add(this, "propertychange._change", function(a) {
                    "checked" === a.originalEvent.propertyName && (this._just_changed = !0)
                }), K.event.add(this, "click._change", function(a) {
                    this._just_changed && !a.isTrigger && (this._just_changed = !1, K.event.simulate("change", this, a, !0))
                })), !1) : void K.event.add(this, "beforeactivate._change", function(a) {
                    var b = a.target;
                    $.test(b.nodeName) && !b._change_attached && (K.event.add(b, "change._change", function(a) {
                        this.parentNode && !a.isSimulated && !a.isTrigger && K.event.simulate("change", this.parentNode, a, !0)
                    }), b._change_attached = !0)
                })
            },
            handle: function(a) {
                var b = a.target;
                return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0
            },
            teardown: function() {
                return K.event.remove(this, "._change"), $.test(this.nodeName)
            }
        }), K.support.focusinBubbles || K.each({
            focus: "focusin",
            blur: "focusout"
        }, function(a, b) {
            var c = 0,
                d = function(a) {
                    K.event.simulate(b, a.target, K.event.fix(a), !0)
                };
            K.event.special[b] = {
                setup: function() {
                    0 === c++ && H.addEventListener(a, d, !0)
                },
                teardown: function() {
                    0 === --c && H.removeEventListener(a, d, !0)
                }
            }
        }), K.fn.extend({
            on: function(a, c, d, e, f) {
                var g, h;
                if ("object" == typeof a) {
                    "string" != typeof c && (d = c, c = b);
                    for (h in a) this.on(h, c, d, a[h], f);
                    return this
                }
                if (null == d && null == e ? (e = c, d = c = b) : null == e && ("string" == typeof c ? (e = d, d = b) : (e = d, d = c, c = b)), e === !1) e = C;
                else if (!e) return this;
                return 1 === f && (g = e, e = function(a) {
                    return K().off(a), g.apply(this, arguments)
                }, e.guid = g.guid || (g.guid = K.guid++)), this.each(function() {
                    K.event.add(this, a, e, d, c)
                })
            },
            one: function(a, b, c, d) {
                return this.on.call(this, a, b, c, d, 1)
            },
            off: function(a, c, d) {
                if (a && a.preventDefault && a.handleObj) {
                    var e = a.handleObj;
                    return K(a.delegateTarget).off(e.namespace ? e.type + "." + e.namespace : e.type, e.selector, e.handler), this
                }
                if ("object" == typeof a) {
                    for (var f in a) this.off(f, c, a[f]);
                    return this
                }
                return (c === !1 || "function" == typeof c) && (d = c, c = b), d === !1 && (d = C), this.each(function() {
                    K.event.remove(this, a, d, c)
                })
            },
            bind: function(a, b, c) {
                return this.on(a, null, b, c)
            },
            unbind: function(a, b) {
                return this.off(a, null, b)
            },
            live: function(a, b, c) {
                return K(this.context).on(a, this.selector, b, c), this
            },
            die: function(a, b) {
                return K(this.context).off(a, this.selector || "**", b), this
            },
            delegate: function(a, b, c, d) {
                return this.on(b, a, c, d)
            },
            undelegate: function(a, b, c) {
                return 1 == arguments.length ? this.off(a, "**") : this.off(b, a, c)
            },
            trigger: function(a, b) {
                return this.each(function() {
                    K.event.trigger(a, b, this)
                })
            },
            triggerHandler: function(a, b) {
                return this[0] ? K.event.trigger(a, b, this[0], !0) : void 0
            },
            toggle: function(a) {
                var b = arguments,
                    c = a.guid || K.guid++,
                    d = 0,
                    e = function(c) {
                        var e = (K._data(this, "lastToggle" + a.guid) || 0) % d;
                        return K._data(this, "lastToggle" + a.guid, e + 1), c.preventDefault(), b[e].apply(this, arguments) || !1
                    };
                for (e.guid = c; d < b.length;) b[d++].guid = c;
                return this.click(e)
            },
            hover: function(a, b) {
                return this.mouseenter(a).mouseleave(b || a)
            }
        }), K.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
            K.fn[b] = function(a, c) {
                return null == c && (c = a, a = null), arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
            }, K.attrFn && (K.attrFn[b] = !0), bb.test(b) && (K.event.fixHooks[b] = K.event.keyHooks), cb.test(b) && (K.event.fixHooks[b] = K.event.mouseHooks)
        }),
        function() {
            function a(a, b, c, d, f, g) {
                for (var h = 0, i = d.length; i > h; h++) {
                    var j = d[h];
                    if (j) {
                        var k = !1;
                        for (j = j[a]; j;) {
                            if (j[e] === c) {
                                k = d[j.sizset];
                                break
                            }
                            if (1 === j.nodeType)
                                if (g || (j[e] = c, j.sizset = h), "string" != typeof b) {
                                    if (j === b) {
                                        k = !0;
                                        break
                                    }
                                } else if (m.filter(b, [j]).length > 0) {
                                k = j;
                                break
                            }
                            j = j[a]
                        }
                        d[h] = k
                    }
                }
            }

            function c(a, b, c, d, f, g) {
                for (var h = 0, i = d.length; i > h; h++) {
                    var j = d[h];
                    if (j) {
                        var k = !1;
                        for (j = j[a]; j;) {
                            if (j[e] === c) {
                                k = d[j.sizset];
                                break
                            }
                            if (1 === j.nodeType && !g && (j[e] = c, j.sizset = h), j.nodeName.toLowerCase() === b) {
                                k = j;
                                break
                            }
                            j = j[a]
                        }
                        d[h] = k
                    }
                }
            }
            var d = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
                e = "sizcache" + (Math.random() + "").replace(".", ""),
                f = 0,
                g = Object.prototype.toString,
                h = !1,
                i = !0,
                j = /\\/g,
                k = /\r\n/g,
                l = /\W/;
            [0, 0].sort(function() {
                return i = !1, 0
            });
            var m = function(a, b, c, e) {
                c = c || [], b = b || H;
                var f = b;
                if (1 !== b.nodeType && 9 !== b.nodeType) return [];
                if (!a || "string" != typeof a) return c;
                var h, i, j, k, l, n, q, r, t = !0,
                    u = m.isXML(b),
                    v = [],
                    x = a;
                do
                    if (d.exec(""), h = d.exec(x), h && (x = h[3], v.push(h[1]), h[2])) {
                        k = h[3];
                        break
                    }
                while (h);
                if (v.length > 1 && p.exec(a))
                    if (2 === v.length && o.relative[v[0]]) i = w(v[0] + v[1], b, e);
                    else
                        for (i = o.relative[v[0]] ? [b] : m(v.shift(), b); v.length;) a = v.shift(), o.relative[a] && (a += v.shift()), i = w(a, i, e);
                else if (!e && v.length > 1 && 9 === b.nodeType && !u && o.match.ID.test(v[0]) && !o.match.ID.test(v[v.length - 1]) && (l = m.find(v.shift(), b, u), b = l.expr ? m.filter(l.expr, l.set)[0] : l.set[0]), b)
                    for (l = e ? {
                            expr: v.pop(),
                            set: s(e)
                        } : m.find(v.pop(), 1 !== v.length || "~" !== v[0] && "+" !== v[0] || !b.parentNode ? b : b.parentNode, u), i = l.expr ? m.filter(l.expr, l.set) : l.set, v.length > 0 ? j = s(i) : t = !1; v.length;) n = v.pop(), q = n, o.relative[n] ? q = v.pop() : n = "", null == q && (q = b), o.relative[n](j, q, u);
                else j = v = [];
                if (j || (j = i), j || m.error(n || a), "[object Array]" === g.call(j))
                    if (t)
                        if (b && 1 === b.nodeType)
                            for (r = 0; null != j[r]; r++) j[r] && (j[r] === !0 || 1 === j[r].nodeType && m.contains(b, j[r])) && c.push(i[r]);
                        else
                            for (r = 0; null != j[r]; r++) j[r] && 1 === j[r].nodeType && c.push(i[r]);
                else c.push.apply(c, j);
                else s(j, c);
                return k && (m(k, f, c, e), m.uniqueSort(c)), c
            };
            m.uniqueSort = function(a) {
                if (u && (h = i, a.sort(u), h))
                    for (var b = 1; b < a.length; b++) a[b] === a[b - 1] && a.splice(b--, 1);
                return a
            }, m.matches = function(a, b) {
                return m(a, null, null, b)
            }, m.matchesSelector = function(a, b) {
                return m(b, null, null, [a]).length > 0
            }, m.find = function(a, b, c) {
                var d, e, f, g, h, i;
                if (!a) return [];
                for (e = 0, f = o.order.length; f > e; e++)
                    if (h = o.order[e], (g = o.leftMatch[h].exec(a)) && (i = g[1], g.splice(1, 1), "\\" !== i.substr(i.length - 1) && (g[1] = (g[1] || "").replace(j, ""), d = o.find[h](g, b, c), null != d))) {
                        a = a.replace(o.match[h], "");
                        break
                    }
                return d || (d = "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName("*") : []), {
                    set: d,
                    expr: a
                }
            }, m.filter = function(a, c, d, e) {
                for (var f, g, h, i, j, k, l, n, p, q = a, r = [], s = c, t = c && c[0] && m.isXML(c[0]); a && c.length;) {
                    for (h in o.filter)
                        if (null != (f = o.leftMatch[h].exec(a)) && f[2]) {
                            if (k = o.filter[h], l = f[1], g = !1, f.splice(1, 1), "\\" === l.substr(l.length - 1)) continue;
                            if (s === r && (r = []), o.preFilter[h])
                                if (f = o.preFilter[h](f, s, d, r, e, t)) {
                                    if (f === !0) continue
                                } else g = i = !0;
                            if (f)
                                for (n = 0; null != (j = s[n]); n++) j && (i = k(j, f, n, s), p = e ^ i, d && null != i ? p ? g = !0 : s[n] = !1 : p && (r.push(j), g = !0));
                            if (i !== b) {
                                if (d || (s = r), a = a.replace(o.match[h], ""), !g) return [];
                                break
                            }
                        }
                    if (a === q) {
                        if (null != g) break;
                        m.error(a)
                    }
                    q = a
                }
                return s
            }, m.error = function(a) {
                throw new Error("Syntax error, unrecognized expression: " + a)
            };
            var n = m.getText = function(a) {
                    var b, c, d = a.nodeType,
                        e = "";
                    if (d) {
                        if (1 === d || 9 === d) {
                            if ("string" == typeof a.textContent) return a.textContent;
                            if ("string" == typeof a.innerText) return a.innerText.replace(k, "");
                            for (a = a.firstChild; a; a = a.nextSibling) e += n(a)
                        } else if (3 === d || 4 === d) return a.nodeValue
                    } else
                        for (b = 0; c = a[b]; b++) 8 !== c.nodeType && (e += n(c));
                    return e
                },
                o = m.selectors = {
                    order: ["ID", "NAME", "TAG"],
                    match: {
                        ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                        CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                        NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
                        ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
                        TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
                        CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
                        POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
                        PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
                    },
                    leftMatch: {},
                    attrMap: {
                        "class": "className",
                        "for": "htmlFor"
                    },
                    attrHandle: {
                        href: function(a) {
                            return a.getAttribute("href")
                        },
                        type: function(a) {
                            return a.getAttribute("type")
                        }
                    },
                    relative: {
                        "+": function(a, b) {
                            var c = "string" == typeof b,
                                d = c && !l.test(b),
                                e = c && !d;
                            d && (b = b.toLowerCase());
                            for (var f, g = 0, h = a.length; h > g; g++)
                                if (f = a[g]) {
                                    for (;
                                        (f = f.previousSibling) && 1 !== f.nodeType;);
                                    a[g] = e || f && f.nodeName.toLowerCase() === b ? f || !1 : f === b
                                }
                            e && m.filter(b, a, !0)
                        },
                        ">": function(a, b) {
                            var c, d = "string" == typeof b,
                                e = 0,
                                f = a.length;
                            if (d && !l.test(b)) {
                                for (b = b.toLowerCase(); f > e; e++)
                                    if (c = a[e]) {
                                        var g = c.parentNode;
                                        a[e] = g.nodeName.toLowerCase() === b ? g : !1
                                    }
                            } else {
                                for (; f > e; e++) c = a[e], c && (a[e] = d ? c.parentNode : c.parentNode === b);
                                d && m.filter(b, a, !0)
                            }
                        },
                        "": function(b, d, e) {
                            var g, h = f++,
                                i = a;
                            "string" == typeof d && !l.test(d) && (d = d.toLowerCase(), g = d, i = c), i("parentNode", d, h, b, g, e)
                        },
                        "~": function(b, d, e) {
                            var g, h = f++,
                                i = a;
                            "string" == typeof d && !l.test(d) && (d = d.toLowerCase(), g = d, i = c), i("previousSibling", d, h, b, g, e)
                        }
                    },
                    find: {
                        ID: function(a, b, c) {
                            if ("undefined" != typeof b.getElementById && !c) {
                                var d = b.getElementById(a[1]);
                                return d && d.parentNode ? [d] : []
                            }
                        },
                        NAME: function(a, b) {
                            if ("undefined" != typeof b.getElementsByName) {
                                for (var c = [], d = b.getElementsByName(a[1]), e = 0, f = d.length; f > e; e++) d[e].getAttribute("name") === a[1] && c.push(d[e]);
                                return 0 === c.length ? null : c
                            }
                        },
                        TAG: function(a, b) {
                            return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a[1]) : void 0
                        }
                    },
                    preFilter: {
                        CLASS: function(a, b, c, d, e, f) {
                            if (a = " " + a[1].replace(j, "") + " ", f) return a;
                            for (var g, h = 0; null != (g = b[h]); h++) g && (e ^ (g.className && (" " + g.className + " ").replace(/[\t\n\r]/g, " ").indexOf(a) >= 0) ? c || d.push(g) : c && (b[h] = !1));
                            return !1
                        },
                        ID: function(a) {
                            return a[1].replace(j, "")
                        },
                        TAG: function(a) {
                            return a[1].replace(j, "").toLowerCase()
                        },
                        CHILD: function(a) {
                            if ("nth" === a[1]) {
                                a[2] || m.error(a[0]), a[2] = a[2].replace(/^\+|\s*/g, "");
                                var b = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec("even" === a[2] && "2n" || "odd" === a[2] && "2n+1" || !/\D/.test(a[2]) && "0n+" + a[2] || a[2]);
                                a[2] = b[1] + (b[2] || 1) - 0, a[3] = b[3] - 0
                            } else a[2] && m.error(a[0]);
                            return a[0] = f++, a
                        },
                        ATTR: function(a, b, c, d, e, f) {
                            var g = a[1] = a[1].replace(j, "");
                            return !f && o.attrMap[g] && (a[1] = o.attrMap[g]), a[4] = (a[4] || a[5] || "").replace(j, ""), "~=" === a[2] && (a[4] = " " + a[4] + " "), a
                        },
                        PSEUDO: function(a, b, c, e, f) {
                            if ("not" === a[1]) {
                                if (!((d.exec(a[3]) || "").length > 1 || /^\w/.test(a[3]))) {
                                    var g = m.filter(a[3], b, c, !0 ^ f);
                                    return c || e.push.apply(e, g), !1
                                }
                                a[3] = m(a[3], null, null, b)
                            } else if (o.match.POS.test(a[0]) || o.match.CHILD.test(a[0])) return !0;
                            return a
                        },
                        POS: function(a) {
                            return a.unshift(!0), a
                        }
                    },
                    filters: {
                        enabled: function(a) {
                            return a.disabled === !1 && "hidden" !== a.type
                        },
                        disabled: function(a) {
                            return a.disabled === !0
                        },
                        checked: function(a) {
                            return a.checked === !0
                        },
                        selected: function(a) {
                            return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                        },
                        parent: function(a) {
                            return !!a.firstChild
                        },
                        empty: function(a) {
                            return !a.firstChild
                        },
                        has: function(a, b, c) {
                            return !!m(c[3], a).length
                        },
                        header: function(a) {
                            return /h\d/i.test(a.nodeName)
                        },
                        text: function(a) {
                            var b = a.getAttribute("type"),
                                c = a.type;
                            return "input" === a.nodeName.toLowerCase() && "text" === c && (b === c || null === b)
                        },
                        radio: function(a) {
                            return "input" === a.nodeName.toLowerCase() && "radio" === a.type
                        },
                        checkbox: function(a) {
                            return "input" === a.nodeName.toLowerCase() && "checkbox" === a.type
                        },
                        file: function(a) {
                            return "input" === a.nodeName.toLowerCase() && "file" === a.type
                        },
                        password: function(a) {
                            return "input" === a.nodeName.toLowerCase() && "password" === a.type
                        },
                        submit: function(a) {
                            var b = a.nodeName.toLowerCase();
                            return ("input" === b || "button" === b) && "submit" === a.type
                        },
                        image: function(a) {
                            return "input" === a.nodeName.toLowerCase() && "image" === a.type
                        },
                        reset: function(a) {
                            var b = a.nodeName.toLowerCase();
                            return ("input" === b || "button" === b) && "reset" === a.type
                        },
                        button: function(a) {
                            var b = a.nodeName.toLowerCase();
                            return "input" === b && "button" === a.type || "button" === b
                        },
                        input: function(a) {
                            return /input|select|textarea|button/i.test(a.nodeName)
                        },
                        focus: function(a) {
                            return a === a.ownerDocument.activeElement
                        }
                    },
                    setFilters: {
                        first: function(a, b) {
                            return 0 === b
                        },
                        last: function(a, b, c, d) {
                            return b === d.length - 1
                        },
                        even: function(a, b) {
                            return b % 2 === 0
                        },
                        odd: function(a, b) {
                            return b % 2 === 1
                        },
                        lt: function(a, b, c) {
                            return b < c[3] - 0
                        },
                        gt: function(a, b, c) {
                            return b > c[3] - 0
                        },
                        nth: function(a, b, c) {
                            return c[3] - 0 === b
                        },
                        eq: function(a, b, c) {
                            return c[3] - 0 === b
                        }
                    },
                    filter: {
                        PSEUDO: function(a, b, c, d) {
                            var e = b[1],
                                f = o.filters[e];
                            if (f) return f(a, c, b, d);
                            if ("contains" === e) return (a.textContent || a.innerText || n([a]) || "").indexOf(b[3]) >= 0;
                            if ("not" === e) {
                                for (var g = b[3], h = 0, i = g.length; i > h; h++)
                                    if (g[h] === a) return !1;
                                return !0
                            }
                            m.error(e)
                        },
                        CHILD: function(a, b) {
                            var c, d, f, g, h, i, j = b[1],
                                k = a;
                            switch (j) {
                                case "only":
                                case "first":
                                    for (; k = k.previousSibling;)
                                        if (1 === k.nodeType) return !1;
                                    if ("first" === j) return !0;
                                    k = a;
                                case "last":
                                    for (; k = k.nextSibling;)
                                        if (1 === k.nodeType) return !1;
                                    return !0;
                                case "nth":
                                    if (c = b[2], d = b[3], 1 === c && 0 === d) return !0;
                                    if (f = b[0], g = a.parentNode, g && (g[e] !== f || !a.nodeIndex)) {
                                        for (h = 0, k = g.firstChild; k; k = k.nextSibling) 1 === k.nodeType && (k.nodeIndex = ++h);
                                        g[e] = f
                                    }
                                    return i = a.nodeIndex - d, 0 === c ? 0 === i : i % c === 0 && i / c >= 0
                            }
                        },
                        ID: function(a, b) {
                            return 1 === a.nodeType && a.getAttribute("id") === b
                        },
                        TAG: function(a, b) {
                            return "*" === b && 1 === a.nodeType || !!a.nodeName && a.nodeName.toLowerCase() === b
                        },
                        CLASS: function(a, b) {
                            return (" " + (a.className || a.getAttribute("class")) + " ").indexOf(b) > -1
                        },
                        ATTR: function(a, b) {
                            var c = b[1],
                                d = m.attr ? m.attr(a, c) : o.attrHandle[c] ? o.attrHandle[c](a) : null != a[c] ? a[c] : a.getAttribute(c),
                                e = d + "",
                                f = b[2],
                                g = b[4];
                            return null == d ? "!=" === f : !f && m.attr ? null != d : "=" === f ? e === g : "*=" === f ? e.indexOf(g) >= 0 : "~=" === f ? (" " + e + " ").indexOf(g) >= 0 : g ? "!=" === f ? e !== g : "^=" === f ? 0 === e.indexOf(g) : "$=" === f ? e.substr(e.length - g.length) === g : "|=" === f ? e === g || e.substr(0, g.length + 1) === g + "-" : !1 : e && d !== !1
                        },
                        POS: function(a, b, c, d) {
                            var e = b[2],
                                f = o.setFilters[e];
                            return f ? f(a, c, b, d) : void 0
                        }
                    }
                },
                p = o.match.POS,
                q = function(a, b) {
                    return "\\" + (b - 0 + 1)
                };
            for (var r in o.match) o.match[r] = new RegExp(o.match[r].source + /(?![^\[]*\])(?![^\(]*\))/.source), o.leftMatch[r] = new RegExp(/(^(?:.|\r|\n)*?)/.source + o.match[r].source.replace(/\\(\d+)/g, q));
            var s = function(a, b) {
                return a = Array.prototype.slice.call(a, 0), b ? (b.push.apply(b, a), b) : a
            };
            try {
                Array.prototype.slice.call(H.documentElement.childNodes, 0)[0].nodeType
            } catch (t) {
                s = function(a, b) {
                    var c = 0,
                        d = b || [];
                    if ("[object Array]" === g.call(a)) Array.prototype.push.apply(d, a);
                    else if ("number" == typeof a.length)
                        for (var e = a.length; e > c; c++) d.push(a[c]);
                    else
                        for (; a[c]; c++) d.push(a[c]);
                    return d
                }
            }
            var u, v;
            H.documentElement.compareDocumentPosition ? u = function(a, b) {
                    return a === b ? (h = !0, 0) : a.compareDocumentPosition && b.compareDocumentPosition ? 4 & a.compareDocumentPosition(b) ? -1 : 1 : a.compareDocumentPosition ? -1 : 1
                } : (u = function(a, b) {
                    if (a === b) return h = !0, 0;
                    if (a.sourceIndex && b.sourceIndex) return a.sourceIndex - b.sourceIndex;
                    var c, d, e = [],
                        f = [],
                        g = a.parentNode,
                        i = b.parentNode,
                        j = g;
                    if (g === i) return v(a, b);
                    if (!g) return -1;
                    if (!i) return 1;
                    for (; j;) e.unshift(j), j = j.parentNode;
                    for (j = i; j;) f.unshift(j), j = j.parentNode;
                    c = e.length, d = f.length;
                    for (var k = 0; c > k && d > k; k++)
                        if (e[k] !== f[k]) return v(e[k], f[k]);
                    return k === c ? v(a, f[k], -1) : v(e[k], b, 1)
                }, v = function(a, b, c) {
                    if (a === b) return c;
                    for (var d = a.nextSibling; d;) {
                        if (d === b) return -1;
                        d = d.nextSibling
                    }
                    return 1
                }),
                function() {
                    var a = H.createElement("div"),
                        c = "script" + (new Date).getTime(),
                        d = H.documentElement;
                    a.innerHTML = "<a name='" + c + "'/>", d.insertBefore(a, d.firstChild), H.getElementById(c) && (o.find.ID = function(a, c, d) {
                        if ("undefined" != typeof c.getElementById && !d) {
                            var e = c.getElementById(a[1]);
                            return e ? e.id === a[1] || "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id").nodeValue === a[1] ? [e] : b : []
                        }
                    }, o.filter.ID = function(a, b) {
                        var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                        return 1 === a.nodeType && c && c.nodeValue === b
                    }), d.removeChild(a), d = a = null
                }(),
                function() {
                    var a = H.createElement("div");
                    a.appendChild(H.createComment("")), a.getElementsByTagName("*").length > 0 && (o.find.TAG = function(a, b) {
                        var c = b.getElementsByTagName(a[1]);
                        if ("*" === a[1]) {
                            for (var d = [], e = 0; c[e]; e++) 1 === c[e].nodeType && d.push(c[e]);
                            c = d
                        }
                        return c
                    }), a.innerHTML = "<a href='#'></a>", a.firstChild && "undefined" != typeof a.firstChild.getAttribute && "#" !== a.firstChild.getAttribute("href") && (o.attrHandle.href = function(a) {
                        return a.getAttribute("href", 2)
                    }), a = null
                }(), H.querySelectorAll && function() {
                    var a = m,
                        b = H.createElement("div"),
                        c = "__sizzle__";
                    if (b.innerHTML = "<p class='TEST'></p>", !b.querySelectorAll || 0 !== b.querySelectorAll(".TEST").length) {
                        m = function(b, d, e, f) {
                            if (d = d || H, !f && !m.isXML(d)) {
                                var g = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);
                                if (g && (1 === d.nodeType || 9 === d.nodeType)) {
                                    if (g[1]) return s(d.getElementsByTagName(b), e);
                                    if (g[2] && o.find.CLASS && d.getElementsByClassName) return s(d.getElementsByClassName(g[2]), e)
                                }
                                if (9 === d.nodeType) {
                                    if ("body" === b && d.body) return s([d.body], e);
                                    if (g && g[3]) {
                                        var h = d.getElementById(g[3]);
                                        if (!h || !h.parentNode) return s([], e);
                                        if (h.id === g[3]) return s([h], e)
                                    }
                                    try {
                                        return s(d.querySelectorAll(b), e)
                                    } catch (i) {}
                                } else if (1 === d.nodeType && "object" !== d.nodeName.toLowerCase()) {
                                    var j = d,
                                        k = d.getAttribute("id"),
                                        l = k || c,
                                        n = d.parentNode,
                                        p = /^\s*[+~]/.test(b);
                                    k ? l = l.replace(/'/g, "\\$&") : d.setAttribute("id", l), p && n && (d = d.parentNode);
                                    try {
                                        if (!p || n) return s(d.querySelectorAll("[id='" + l + "'] " + b), e)
                                    } catch (q) {} finally {
                                        k || j.removeAttribute("id")
                                    }
                                }
                            }
                            return a(b, d, e, f)
                        };
                        for (var d in a) m[d] = a[d];
                        b = null
                    }
                }(),
                function() {
                    var a = H.documentElement,
                        b = a.matchesSelector || a.mozMatchesSelector || a.webkitMatchesSelector || a.msMatchesSelector;
                    if (b) {
                        var c = !b.call(H.createElement("div"), "div"),
                            d = !1;
                        try {
                            b.call(H.documentElement, "[test!='']:sizzle")
                        } catch (e) {
                            d = !0
                        }
                        m.matchesSelector = function(a, e) {
                            if (e = e.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']"), !m.isXML(a)) try {
                                if (d || !o.match.PSEUDO.test(e) && !/!=/.test(e)) {
                                    var f = b.call(a, e);
                                    if (f || !c || a.document && 11 !== a.document.nodeType) return f
                                }
                            } catch (g) {}
                            return m(e, null, null, [a]).length > 0
                        }
                    }
                }(),
                function() {
                    var a = H.createElement("div");
                    if (a.innerHTML = "<div class='test e'></div><div class='test'></div>", a.getElementsByClassName && 0 !== a.getElementsByClassName("e").length) {
                        if (a.lastChild.className = "e", 1 === a.getElementsByClassName("e").length) return;
                        o.order.splice(1, 0, "CLASS"), o.find.CLASS = function(a, b, c) {
                            return "undefined" == typeof b.getElementsByClassName || c ? void 0 : b.getElementsByClassName(a[1])
                        }, a = null
                    }
                }(), m.contains = H.documentElement.contains ? function(a, b) {
                    return a !== b && (a.contains ? a.contains(b) : !0)
                } : H.documentElement.compareDocumentPosition ? function(a, b) {
                    return !!(16 & a.compareDocumentPosition(b))
                } : function() {
                    return !1
                }, m.isXML = function(a) {
                    var b = (a ? a.ownerDocument || a : 0).documentElement;
                    return b ? "HTML" !== b.nodeName : !1
                };
            var w = function(a, b, c) {
                for (var d, e = [], f = "", g = b.nodeType ? [b] : b; d = o.match.PSEUDO.exec(a);) f += d[0], a = a.replace(o.match.PSEUDO, "");
                a = o.relative[a] ? a + "*" : a;
                for (var h = 0, i = g.length; i > h; h++) m(a, g[h], e, c);
                return m.filter(f, e)
            };
            m.attr = K.attr, m.selectors.attrMap = {}, K.find = m, K.expr = m.selectors, K.expr[":"] = K.expr.filters, K.unique = m.uniqueSort, K.text = m.getText, K.isXMLDoc = m.isXML, K.contains = m.contains
        }();
    var ib = /Until$/,
        jb = /^(?:parents|prevUntil|prevAll)/,
        kb = /,/,
        lb = /^.[^:#\[\.,]*$/,
        mb = Array.prototype.slice,
        nb = K.expr.match.POS,
        ob = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    K.fn.extend({
        find: function(a) {
            var b, c, d = this;
            if ("string" != typeof a) return K(a).filter(function() {
                for (b = 0, c = d.length; c > b; b++)
                    if (K.contains(d[b], this)) return !0
            });
            var e, f, g, h = this.pushStack("", "find", a);
            for (b = 0, c = this.length; c > b; b++)
                if (e = h.length, K.find(a, this[b], h), b > 0)
                    for (f = e; f < h.length; f++)
                        for (g = 0; e > g; g++)
                            if (h[g] === h[f]) {
                                h.splice(f--, 1);
                                break
                            }
            return h
        },
        has: function(a) {
            var b = K(a);
            return this.filter(function() {
                for (var a = 0, c = b.length; c > a; a++)
                    if (K.contains(this, b[a])) return !0
            })
        },
        not: function(a) {
            return this.pushStack(z(this, a, !1), "not", a)
        },
        filter: function(a) {
            return this.pushStack(z(this, a, !0), "filter", a)
        },
        is: function(a) {
            return !!a && ("string" == typeof a ? nb.test(a) ? K(a, this.context).index(this[0]) >= 0 : K.filter(a, this).length > 0 : this.filter(a).length > 0)
        },
        closest: function(a, b) {
            var c, d, e = [],
                f = this[0];
            if (K.isArray(a)) {
                for (var g = 1; f && f.ownerDocument && f !== b;) {
                    for (c = 0; c < a.length; c++) K(f).is(a[c]) && e.push({
                        selector: a[c],
                        elem: f,
                        level: g
                    });
                    f = f.parentNode, g++
                }
                return e
            }
            var h = nb.test(a) || "string" != typeof a ? K(a, b || this.context) : 0;
            for (c = 0, d = this.length; d > c; c++)
                for (f = this[c]; f;) {
                    if (h ? h.index(f) > -1 : K.find.matchesSelector(f, a)) {
                        e.push(f);
                        break
                    }
                    if (f = f.parentNode, !f || !f.ownerDocument || f === b || 11 === f.nodeType) break
                }
            return e = e.length > 1 ? K.unique(e) : e, this.pushStack(e, "closest", a)
        },
        index: function(a) {
            return a ? "string" == typeof a ? K.inArray(this[0], K(a)) : K.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
        },
        add: function(a, b) {
            var c = "string" == typeof a ? K(a, b) : K.makeArray(a && a.nodeType ? [a] : a),
                d = K.merge(this.get(), c);
            return this.pushStack(A(c[0]) || A(d[0]) ? d : K.unique(d))
        },
        andSelf: function() {
            return this.add(this.prevObject)
        }
    }), K.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function(a) {
            return K.dir(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return K.dir(a, "parentNode", c)
        },
        next: function(a) {
            return K.nth(a, 2, "nextSibling")
        },
        prev: function(a) {
            return K.nth(a, 2, "previousSibling")
        },
        nextAll: function(a) {
            return K.dir(a, "nextSibling")
        },
        prevAll: function(a) {
            return K.dir(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return K.dir(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return K.dir(a, "previousSibling", c)
        },
        siblings: function(a) {
            return K.sibling(a.parentNode.firstChild, a)
        },
        children: function(a) {
            return K.sibling(a.firstChild)
        },
        contents: function(a) {
            return K.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : K.makeArray(a.childNodes)
        }
    }, function(a, b) {
        K.fn[a] = function(c, d) {
            var e = K.map(this, b, c);
            return ib.test(a) || (d = c), d && "string" == typeof d && (e = K.filter(d, e)), e = this.length > 1 && !ob[a] ? K.unique(e) : e, (this.length > 1 || kb.test(d)) && jb.test(a) && (e = e.reverse()), this.pushStack(e, a, mb.call(arguments).join(","))
        }
    }), K.extend({
        filter: function(a, b, c) {
            return c && (a = ":not(" + a + ")"), 1 === b.length ? K.find.matchesSelector(b[0], a) ? [b[0]] : [] : K.find.matches(a, b)
        },
        dir: function(a, c, d) {
            for (var e = [], f = a[c]; f && 9 !== f.nodeType && (d === b || 1 !== f.nodeType || !K(f).is(d));) 1 === f.nodeType && e.push(f), f = f[c];
            return e
        },
        nth: function(a, b, c) {
            b = b || 1;
            for (var d = 0; a && (1 !== a.nodeType || ++d !== b); a = a[c]);
            return a
        },
        sibling: function(a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c
        }
    });
    var pb = "abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        qb = / jQuery\d+="(?:\d+|null)"/g,
        rb = /^\s+/,
        sb = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        tb = /<([\w:]+)/,
        ub = /<tbody/i,
        vb = /<|&#?\w+;/,
        wb = /<(?:script|style)/i,
        xb = /<(?:script|object|embed|option|style)/i,
        yb = new RegExp("<(?:" + pb + ")", "i"),
        zb = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ab = /\/(java|ecma)script/i,
        Bb = /^\s*<!(?:\[CDATA\[|\-\-)/,
        Cb = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            area: [1, "<map>", "</map>"],
            _default: [0, "", ""]
        },
        Db = y(H);
    Cb.optgroup = Cb.option, Cb.tbody = Cb.tfoot = Cb.colgroup = Cb.caption = Cb.thead, Cb.th = Cb.td, K.support.htmlSerialize || (Cb._default = [1, "div<div>", "</div>"]), K.fn.extend({
        text: function(a) {
            return K.isFunction(a) ? this.each(function(b) {
                var c = K(this);
                c.text(a.call(this, b, c.text()))
            }) : "object" != typeof a && a !== b ? this.empty().append((this[0] && this[0].ownerDocument || H).createTextNode(a)) : K.text(this)
        },
        wrapAll: function(a) {
            if (K.isFunction(a)) return this.each(function(b) {
                K(this).wrapAll(a.call(this, b))
            });
            if (this[0]) {
                var b = K(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                    for (var a = this; a.firstChild && 1 === a.firstChild.nodeType;) a = a.firstChild;
                    return a
                }).append(this)
            }
            return this
        },
        wrapInner: function(a) {
            return this.each(K.isFunction(a) ? function(b) {
                K(this).wrapInner(a.call(this, b))
            } : function() {
                var b = K(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = K.isFunction(a);
            return this.each(function(c) {
                K(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                K.nodeName(this, "body") || K(this).replaceWith(this.childNodes)
            }).end()
        },
        append: function() {
            return this.domManip(arguments, !0, function(a) {
                1 === this.nodeType && this.appendChild(a)
            })
        },
        prepend: function() {
            return this.domManip(arguments, !0, function(a) {
                1 === this.nodeType && this.insertBefore(a, this.firstChild)
            })
        },
        before: function() {
            if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function(a) {
                this.parentNode.insertBefore(a, this)
            });
            if (arguments.length) {
                var a = K.clean(arguments);
                return a.push.apply(a, this.toArray()), this.pushStack(a, "before", arguments)
            }
        },
        after: function() {
            if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function(a) {
                this.parentNode.insertBefore(a, this.nextSibling)
            });
            if (arguments.length) {
                var a = this.pushStack(this, "after", arguments);
                return a.push.apply(a, K.clean(arguments)), a
            }
        },
        remove: function(a, b) {
            for (var c, d = 0; null != (c = this[d]); d++)(!a || K.filter(a, [c]).length) && (!b && 1 === c.nodeType && (K.cleanData(c.getElementsByTagName("*")), K.cleanData([c])), c.parentNode && c.parentNode.removeChild(c));
            return this
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++)
                for (1 === a.nodeType && K.cleanData(a.getElementsByTagName("*")); a.firstChild;) a.removeChild(a.firstChild);
            return this
        },
        clone: function(a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
                return K.clone(this, a, b)
            })
        },
        html: function(a) {
            if (a === b) return this[0] && 1 === this[0].nodeType ? this[0].innerHTML.replace(qb, "") : null;
            if ("string" != typeof a || wb.test(a) || !K.support.leadingWhitespace && rb.test(a) || Cb[(tb.exec(a) || ["", ""])[1].toLowerCase()]) K.isFunction(a) ? this.each(function(b) {
                var c = K(this);
                c.html(a.call(this, b, c.html()))
            }) : this.empty().append(a);
            else {
                a = a.replace(sb, "<$1></$2>");
                try {
                    for (var c = 0, d = this.length; d > c; c++) 1 === this[c].nodeType && (K.cleanData(this[c].getElementsByTagName("*")), this[c].innerHTML = a)
                } catch (e) {
                    this.empty().append(a)
                }
            }
            return this
        },
        replaceWith: function(a) {
            return this[0] && this[0].parentNode ? K.isFunction(a) ? this.each(function(b) {
                var c = K(this),
                    d = c.html();
                c.replaceWith(a.call(this, b, d))
            }) : ("string" != typeof a && (a = K(a).detach()), this.each(function() {
                var b = this.nextSibling,
                    c = this.parentNode;
                K(this).remove(), b ? K(b).before(a) : K(c).append(a)
            })) : this.length ? this.pushStack(K(K.isFunction(a) ? a() : a), "replaceWith", a) : this
        },
        detach: function(a) {
            return this.remove(a, !0)
        },
        domManip: function(a, c, d) {
            var e, f, g, h, i = a[0],
                j = [];
            if (!K.support.checkClone && 3 === arguments.length && "string" == typeof i && zb.test(i)) return this.each(function() {
                K(this).domManip(a, c, d, !0)
            });
            if (K.isFunction(i)) return this.each(function(e) {
                var f = K(this);
                a[0] = i.call(this, e, c ? f.html() : b), f.domManip(a, c, d)
            });
            if (this[0]) {
                if (h = i && i.parentNode, e = K.support.parentNode && h && 11 === h.nodeType && h.childNodes.length === this.length ? {
                        fragment: h
                    } : K.buildFragment(a, this, j), g = e.fragment, f = 1 === g.childNodes.length ? g = g.firstChild : g.firstChild, f) {
                    c = c && K.nodeName(f, "tr");
                    for (var k = 0, l = this.length, m = l - 1; l > k; k++) d.call(c ? x(this[k], f) : this[k], e.cacheable || l > 1 && m > k ? K.clone(g, !0, !0) : g)
                }
                j.length && K.each(j, q)
            }
            return this
        }
    }), K.buildFragment = function(a, b, c) {
        var d, e, f, g, h = a[0];
        return b && b[0] && (g = b[0].ownerDocument || b[0]), g.createDocumentFragment || (g = H), 1 === a.length && "string" == typeof h && h.length < 512 && g === H && "<" === h.charAt(0) && !xb.test(h) && (K.support.checkClone || !zb.test(h)) && (K.support.html5Clone || !yb.test(h)) && (e = !0, f = K.fragments[h], f && 1 !== f && (d = f)), d || (d = g.createDocumentFragment(), K.clean(a, g, d, c)), e && (K.fragments[h] = f ? d : 1), {
            fragment: d,
            cacheable: e
        }
    }, K.fragments = {}, K.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        K.fn[a] = function(c) {
            var d = [],
                e = K(c),
                f = 1 === this.length && this[0].parentNode;
            if (f && 11 === f.nodeType && 1 === f.childNodes.length && 1 === e.length) return e[b](this[0]), this;
            for (var g = 0, h = e.length; h > g; g++) {
                var i = (g > 0 ? this.clone(!0) : this).get();
                K(e[g])[b](i), d = d.concat(i)
            }
            return this.pushStack(d, a, e.selector)
        }
    }), K.extend({
        clone: function(a, b, c) {
            var d, e, f, g = K.support.html5Clone || !yb.test("<" + a.nodeName) ? a.cloneNode(!0) : r(a);
            if (!(K.support.noCloneEvent && K.support.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || K.isXMLDoc(a)))
                for (v(a, g), d = u(a), e = u(g), f = 0; d[f]; ++f) e[f] && v(d[f], e[f]);
            if (b && (w(a, g), c))
                for (d = u(a), e = u(g), f = 0; d[f]; ++f) w(d[f], e[f]);
            return d = e = null, g
        },
        clean: function(a, b, c, d) {
            var e;
            b = b || H, "undefined" == typeof b.createElement && (b = b.ownerDocument || b[0] && b[0].ownerDocument || H);
            for (var f, g, h = [], i = 0; null != (g = a[i]); i++)
                if ("number" == typeof g && (g += ""), g) {
                    if ("string" == typeof g)
                        if (vb.test(g)) {
                            g = g.replace(sb, "<$1></$2>");
                            var j = (tb.exec(g) || ["", ""])[1].toLowerCase(),
                                k = Cb[j] || Cb._default,
                                l = k[0],
                                m = b.createElement("div");
                            for (b === H ? Db.appendChild(m) : y(b).appendChild(m), m.innerHTML = k[1] + g + k[2]; l--;) m = m.lastChild;
                            if (!K.support.tbody) {
                                var n = ub.test(g),
                                    o = "table" !== j || n ? "<table>" !== k[1] || n ? [] : m.childNodes : m.firstChild && m.firstChild.childNodes;
                                for (f = o.length - 1; f >= 0; --f) K.nodeName(o[f], "tbody") && !o[f].childNodes.length && o[f].parentNode.removeChild(o[f])
                            }!K.support.leadingWhitespace && rb.test(g) && m.insertBefore(b.createTextNode(rb.exec(g)[0]), m.firstChild), g = m.childNodes
                        } else g = b.createTextNode(g);
                    var p;
                    if (!K.support.appendChecked)
                        if (g[0] && "number" == typeof(p = g.length))
                            for (f = 0; p > f; f++) s(g[f]);
                        else s(g);
                    g.nodeType ? h.push(g) : h = K.merge(h, g)
                }
            if (c)
                for (e = function(a) {
                        return !a.type || Ab.test(a.type)
                    }, i = 0; h[i]; i++)
                    if (!d || !K.nodeName(h[i], "script") || h[i].type && "text/javascript" !== h[i].type.toLowerCase()) {
                        if (1 === h[i].nodeType) {
                            var q = K.grep(h[i].getElementsByTagName("script"), e);
                            h.splice.apply(h, [i + 1, 0].concat(q))
                        }
                        c.appendChild(h[i])
                    } else d.push(h[i].parentNode ? h[i].parentNode.removeChild(h[i]) : h[i]);
            return h
        },
        cleanData: function(a) {
            for (var b, c, d, e = K.cache, f = K.event.special, g = K.support.deleteExpando, h = 0; null != (d = a[h]); h++)
                if ((!d.nodeName || !K.noData[d.nodeName.toLowerCase()]) && (c = d[K.expando])) {
                    if (b = e[c], b && b.events) {
                        for (var i in b.events) f[i] ? K.event.remove(d, i) : K.removeEvent(d, i, b.handle);
                        b.handle && (b.handle.elem = null)
                    }
                    g ? delete d[K.expando] : d.removeAttribute && d.removeAttribute(K.expando), delete e[c]
                }
        }
    });
    var Eb, Fb, Gb, Hb = /alpha\([^)]*\)/i,
        Ib = /opacity=([^)]*)/,
        Jb = /([A-Z]|^ms)/g,
        Kb = /^-?\d+(?:px)?$/i,
        Lb = /^-?\d/,
        Mb = /^([\-+])=([\-+.\de]+)/,
        Nb = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Ob = ["Left", "Right"],
        Pb = ["Top", "Bottom"];
    K.fn.css = function(a, c) {
        return 2 === arguments.length && c === b ? this : K.access(this, a, c, !0, function(a, c, d) {
            return d !== b ? K.style(a, c, d) : K.css(a, c)
        })
    }, K.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = Eb(a, "opacity", "opacity");
                        return "" === c ? "1" : c
                    }
                    return a.style.opacity
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": K.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(a, c, d, e) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var f, g, h = K.camelCase(c),
                    i = a.style,
                    j = K.cssHooks[h];
                if (c = K.cssProps[h] || h, d === b) return j && "get" in j && (f = j.get(a, !1, e)) !== b ? f : i[c];
                if (g = typeof d, "string" === g && (f = Mb.exec(d)) && (d = +(f[1] + 1) * +f[2] + parseFloat(K.css(a, c)), g = "number"), null == d || "number" === g && isNaN(d)) return;
                if ("number" === g && !K.cssNumber[h] && (d += "px"), !(j && "set" in j && (d = j.set(a, d)) === b)) try {
                    i[c] = d
                } catch (k) {}
            }
        },
        css: function(a, c, d) {
            var e, f;
            return c = K.camelCase(c), f = K.cssHooks[c], c = K.cssProps[c] || c, "cssFloat" === c && (c = "float"), f && "get" in f && (e = f.get(a, !0, d)) !== b ? e : Eb ? Eb(a, c) : void 0
        },
        swap: function(a, b, c) {
            var d = {};
            for (var e in b) d[e] = a.style[e], a.style[e] = b[e];
            c.call(a);
            for (e in b) a.style[e] = d[e]
        }
    }), K.curCSS = K.css, K.each(["height", "width"], function(a, b) {
        K.cssHooks[b] = {
            get: function(a, c, d) {
                var e;
                return c ? 0 !== a.offsetWidth ? p(a, b, d) : (K.swap(a, Nb, function() {
                    e = p(a, b, d)
                }), e) : void 0
            },
            set: function(a, b) {
                return Kb.test(b) ? (b = parseFloat(b), b >= 0 ? b + "px" : void 0) : b
            }
        }
    }), K.support.opacity || (K.cssHooks.opacity = {
        get: function(a, b) {
            return Ib.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "" : b ? "1" : ""
        },
        set: function(a, b) {
            var c = a.style,
                d = a.currentStyle,
                e = K.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
                f = d && d.filter || c.filter || "";
            c.zoom = 1, b >= 1 && "" === K.trim(f.replace(Hb, "")) && (c.removeAttribute("filter"), d && !d.filter) || (c.filter = Hb.test(f) ? f.replace(Hb, e) : f + " " + e)
        }
    }), K(function() {
        K.support.reliableMarginRight || (K.cssHooks.marginRight = {
            get: function(a, b) {
                var c;
                return K.swap(a, {
                    display: "inline-block"
                }, function() {
                    c = b ? Eb(a, "margin-right", "marginRight") : a.style.marginRight
                }), c
            }
        })
    }), H.defaultView && H.defaultView.getComputedStyle && (Fb = function(a, b) {
        var c, d, e;
        return b = b.replace(Jb, "-$1").toLowerCase(), (d = a.ownerDocument.defaultView) && (e = d.getComputedStyle(a, null)) && (c = e.getPropertyValue(b), "" === c && !K.contains(a.ownerDocument.documentElement, a) && (c = K.style(a, b))), c
    }), H.documentElement.currentStyle && (Gb = function(a, b) {
        var c, d, e, f = a.currentStyle && a.currentStyle[b],
            g = a.style;
        return null === f && g && (e = g[b]) && (f = e), !Kb.test(f) && Lb.test(f) && (c = g.left, d = a.runtimeStyle && a.runtimeStyle.left, d && (a.runtimeStyle.left = a.currentStyle.left), g.left = "fontSize" === b ? "1em" : f || 0, f = g.pixelLeft + "px", g.left = c, d && (a.runtimeStyle.left = d)), "" === f ? "auto" : f
    }), Eb = Fb || Gb, K.expr && K.expr.filters && (K.expr.filters.hidden = function(a) {
        var b = a.offsetWidth,
            c = a.offsetHeight;
        return 0 === b && 0 === c || !K.support.reliableHiddenOffsets && "none" === (a.style && a.style.display || K.css(a, "display"))
    }, K.expr.filters.visible = function(a) {
        return !K.expr.filters.hidden(a)
    });
    var Qb, Rb, Sb = /%20/g,
        Tb = /\[\]$/,
        Ub = /\r?\n/g,
        Vb = /#.*$/,
        Wb = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Xb = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
        Yb = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
        Zb = /^(?:GET|HEAD)$/,
        $b = /^\/\//,
        _b = /\?/,
        ac = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        bc = /^(?:select|textarea)/i,
        cc = /\s+/,
        dc = /([?&])_=[^&]*/,
        ec = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,
        fc = K.fn.load,
        gc = {},
        hc = {},
        ic = ["*/"] + ["*"];
    try {
        Qb = J.href
    } catch (jc) {
        Qb = H.createElement("a"), Qb.href = "", Qb = Qb.href
    }
    Rb = ec.exec(Qb.toLowerCase()) || [], K.fn.extend({
        load: function(a, c, d) {
            if ("string" != typeof a && fc) return fc.apply(this, arguments);
            if (!this.length) return this;
            var e = a.indexOf(" ");
            if (e >= 0) {
                var f = a.slice(e, a.length);
                a = a.slice(0, e)
            }
            var g = "GET";
            c && (K.isFunction(c) ? (d = c, c = b) : "object" == typeof c && (c = K.param(c, K.ajaxSettings.traditional), g = "POST"));
            var h = this;
            return K.ajax({
                url: a,
                type: g,
                dataType: "html",
                data: c,
                complete: function(a, b, c) {
                    c = a.responseText, a.isResolved() && (a.done(function(a) {
                        c = a
                    }), h.html(f ? K("<div>").append(c.replace(ac, "")).find(f) : c)), d && h.each(d, [c, b, a])
                }
            }), this
        },
        serialize: function() {
            return K.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                return this.elements ? K.makeArray(this.elements) : this
            }).filter(function() {
                return this.name && !this.disabled && (this.checked || bc.test(this.nodeName) || Xb.test(this.type))
            }).map(function(a, b) {
                var c = K(this).val();
                return null == c ? null : K.isArray(c) ? K.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(Ub, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(Ub, "\r\n")
                }
            }).get()
        }
    }), K.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(a, b) {
        K.fn[b] = function(a) {
            return this.on(b, a)
        }
    }), K.each(["get", "post"], function(a, c) {
        K[c] = function(a, d, e, f) {
            return K.isFunction(d) && (f = f || e, e = d, d = b), K.ajax({
                type: c,
                url: a,
                data: d,
                success: e,
                dataType: f
            })
        }
    }), K.extend({
        getScript: function(a, c) {
            return K.get(a, b, c, "script")
        },
        getJSON: function(a, b, c) {
            return K.get(a, b, c, "json")
        },
        ajaxSetup: function(a, b) {
            return b ? m(a, K.ajaxSettings) : (b = a, a = K.ajaxSettings), m(a, b), a
        },
        ajaxSettings: {
            url: Qb,
            isLocal: Yb.test(Rb[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": ic
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": a.String,
                "text html": !0,
                "text json": K.parseJSON,
                "text xml": K.parseXML
            },
            flatOptions: {
                context: !0,
                url: !0
            }
        },
        ajaxPrefilter: o(gc),
        ajaxTransport: o(hc),
        ajax: function(a, c) {
            function d(a, c, d, g) {
                if (2 !== x) {
                    x = 2, i && clearTimeout(i), h = b, f = g || "", y.readyState = a > 0 ? 4 : 0;
                    var l, n, o, v, w, z = c,
                        A = d ? k(p, y, d) : b;
                    if (a >= 200 && 300 > a || 304 === a)
                        if (p.ifModified && ((v = y.getResponseHeader("Last-Modified")) && (K.lastModified[e] = v), (w = y.getResponseHeader("Etag")) && (K.etag[e] = w)), 304 === a) z = "notmodified", l = !0;
                        else try {
                            n = j(p, A), z = "success", l = !0
                        } catch (B) {
                            z = "parsererror", o = B
                        } else o = z, (!z || a) && (z = "error", 0 > a && (a = 0));
                    y.status = a, y.statusText = "" + (c || z), l ? s.resolveWith(q, [n, z, y]) : s.rejectWith(q, [y, z, o]), y.statusCode(u), u = b, m && r.trigger("ajax" + (l ? "Success" : "Error"), [y, p, l ? n : o]), t.fireWith(q, [y, z]), m && (r.trigger("ajaxComplete", [y, p]), --K.active || K.event.trigger("ajaxStop"))
                }
            }
            "object" == typeof a && (c = a, a = b), c = c || {};
            var e, f, g, h, i, l, m, o, p = K.ajaxSetup({}, c),
                q = p.context || p,
                r = q !== p && (q.nodeType || q instanceof K) ? K(q) : K.event,
                s = K.Deferred(),
                t = K.Callbacks("once memory"),
                u = p.statusCode || {},
                v = {},
                w = {},
                x = 0,
                y = {
                    readyState: 0,
                    setRequestHeader: function(a, b) {
                        if (!x) {
                            var c = a.toLowerCase();
                            a = w[c] = w[c] || a, v[a] = b
                        }
                        return this
                    },
                    getAllResponseHeaders: function() {
                        return 2 === x ? f : null
                    },
                    getResponseHeader: function(a) {
                        var c;
                        if (2 === x) {
                            if (!g)
                                for (g = {}; c = Wb.exec(f);) g[c[1].toLowerCase()] = c[2];
                            c = g[a.toLowerCase()]
                        }
                        return c === b ? null : c
                    },
                    overrideMimeType: function(a) {
                        return x || (p.mimeType = a), this
                    },
                    abort: function(a) {
                        return a = a || "abort", h && h.abort(a), d(0, a), this
                    }
                };
            if (s.promise(y), y.success = y.done, y.error = y.fail, y.complete = t.add, y.statusCode = function(a) {
                    if (a) {
                        var b;
                        if (2 > x)
                            for (b in a) u[b] = [u[b], a[b]];
                        else b = a[y.status], y.then(b, b)
                    }
                    return this
                }, p.url = ((a || p.url) + "").replace(Vb, "").replace($b, Rb[1] + "//"), p.dataTypes = K.trim(p.dataType || "*").toLowerCase().split(cc), null == p.crossDomain && (l = ec.exec(p.url.toLowerCase()), p.crossDomain = !(!l || l[1] == Rb[1] && l[2] == Rb[2] && (l[3] || ("http:" === l[1] ? 80 : 443)) == (Rb[3] || ("http:" === Rb[1] ? 80 : 443)))), p.data && p.processData && "string" != typeof p.data && (p.data = K.param(p.data, p.traditional)), n(gc, p, c, y), 2 === x) return !1;
            if (m = p.global, p.type = p.type.toUpperCase(), p.hasContent = !Zb.test(p.type), m && 0 === K.active++ && K.event.trigger("ajaxStart"), !p.hasContent && (p.data && (p.url += (_b.test(p.url) ? "&" : "?") + p.data, delete p.data), e = p.url, p.cache === !1)) {
                var z = K.now(),
                    A = p.url.replace(dc, "$1_=" + z);
                p.url = A + (A === p.url ? (_b.test(p.url) ? "&" : "?") + "_=" + z : "")
            }(p.data && p.hasContent && p.contentType !== !1 || c.contentType) && y.setRequestHeader("Content-Type", p.contentType), p.ifModified && (e = e || p.url, K.lastModified[e] && y.setRequestHeader("If-Modified-Since", K.lastModified[e]), K.etag[e] && y.setRequestHeader("If-None-Match", K.etag[e])), y.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + ic + "; q=0.01" : "") : p.accepts["*"]);
            for (o in p.headers) y.setRequestHeader(o, p.headers[o]);
            if (p.beforeSend && (p.beforeSend.call(q, y, p) === !1 || 2 === x)) return y.abort(), !1;
            for (o in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) y[o](p[o]);
            if (h = n(hc, p, c, y)) {
                y.readyState = 1, m && r.trigger("ajaxSend", [y, p]), p.async && p.timeout > 0 && (i = setTimeout(function() {
                    y.abort("timeout")
                }, p.timeout));
                try {
                    x = 1, h.send(v, d)
                } catch (B) {
                    if (!(2 > x)) throw B;
                    d(-1, B)
                }
            } else d(-1, "No Transport");
            return y
        },
        param: function(a, c) {
            var d = [],
                e = function(a, b) {
                    b = K.isFunction(b) ? b() : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
                };
            if (c === b && (c = K.ajaxSettings.traditional), K.isArray(a) || a.jquery && !K.isPlainObject(a)) K.each(a, function() {
                e(this.name, this.value)
            });
            else
                for (var f in a) l(f, a[f], c, e);
            return d.join("&").replace(Sb, "+")
        }
    }), K.extend({
        active: 0,
        lastModified: {},
        etag: {}
    });
    var kc = K.now(),
        lc = /(\=)\?(&|$)|\?\?/i;
    K.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            return K.expando + "_" + kc++
        }
    }), K.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e = "application/x-www-form-urlencoded" === b.contentType && "string" == typeof b.data;
        if ("jsonp" === b.dataTypes[0] || b.jsonp !== !1 && (lc.test(b.url) || e && lc.test(b.data))) {
            var f, g = b.jsonpCallback = K.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback,
                h = a[g],
                i = b.url,
                j = b.data,
                k = "$1" + g + "$2";
            return b.jsonp !== !1 && (i = i.replace(lc, k), b.url === i && (e && (j = j.replace(lc, k)), b.data === j && (i += (/\?/.test(i) ? "&" : "?") + b.jsonp + "=" + g))), b.url = i, b.data = j, a[g] = function(a) {
                f = [a]
            }, d.always(function() {
                a[g] = h, f && K.isFunction(h) && a[g](f[0])
            }), b.converters["script json"] = function() {
                return f || K.error(g + " was not called"), f[0]
            }, b.dataTypes[0] = "json", "script"
        }
    }), K.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /javascript|ecmascript/
        },
        converters: {
            "text script": function(a) {
                return K.globalEval(a), a
            }
        }
    }), K.ajaxPrefilter("script", function(a) {
        a.cache === b && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
    }), K.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var c, d = H.head || H.getElementsByTagName("head")[0] || H.documentElement;
            return {
                send: function(e, f) {
                    // c = H.createElement("script"), c.async = "async", a.scriptCharset && (c.charset = a.scriptCharset), c.src = a.url, c.onload = c.onreadystatechange = function(a, e) {
                    //     (e || !c.readyState || /loaded|complete/.test(c.readyState)) && (c.onload = c.onreadystatechange = null, d && c.parentNode && d.removeChild(c), c = b, e || f(200, "success"))
                    // }, d.insertBefore(c, d.firstChild)
                },
                abort: function() {
                    c && c.onload(0, 1)
                }
            }
        }
    });
    var mc, nc = a.ActiveXObject ? function() {
            for (var a in mc) mc[a](0, 1)
        } : !1,
        oc = 0;
    K.ajaxSettings.xhr = a.ActiveXObject ? function() {
            return !this.isLocal && i() || h()
        } : i,
        function(a) {
            K.extend(K.support, {
                ajax: !!a,
                cors: !!a && "withCredentials" in a
            })
        }(K.ajaxSettings.xhr()), K.support.ajax && K.ajaxTransport(function(c) {
            if (!c.crossDomain || K.support.cors) {
                var d;
                return {
                    send: function(e, f) {
                        var g, h, i = c.xhr();
                        if (c.username ? i.open(c.type, c.url, c.async, c.username, c.password) : i.open(c.type, c.url, c.async), c.xhrFields)
                            for (h in c.xhrFields) i[h] = c.xhrFields[h];
                        c.mimeType && i.overrideMimeType && i.overrideMimeType(c.mimeType), !c.crossDomain && !e["X-Requested-With"] && (e["X-Requested-With"] = "XMLHttpRequest");
                        try {
                            for (h in e) i.setRequestHeader(h, e[h])
                        } catch (j) {}
                        i.send(c.hasContent && c.data || null), d = function(a, e) {
                            var h, j, k, l, m;
                            try {
                                if (d && (e || 4 === i.readyState))
                                    if (d = b, g && (i.onreadystatechange = K.noop, nc && delete mc[g]), e) 4 !== i.readyState && i.abort();
                                    else {
                                        h = i.status, k = i.getAllResponseHeaders(), l = {}, m = i.responseXML, m && m.documentElement && (l.xml = m), l.text = i.responseText;
                                        try {
                                            j = i.statusText
                                        } catch (n) {
                                            j = ""
                                        }
                                        h || !c.isLocal || c.crossDomain ? 1223 === h && (h = 204) : h = l.text ? 200 : 404
                                    }
                            } catch (o) {
                                e || f(-1, o)
                            }
                            l && f(h, j, l, k)
                        }, c.async && 4 !== i.readyState ? (g = ++oc, nc && (mc || (mc = {}, K(a).unload(nc)), mc[g] = d), i.onreadystatechange = d) : d()
                    },
                    abort: function() {
                        d && d(0, 1)
                    }
                }
            }
        });
    var pc, qc, rc, sc, tc = {},
        uc = /^(?:toggle|show|hide)$/,
        vc = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,
        wc = [
            ["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"],
            ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"],
            ["opacity"]
        ];
    K.fn.extend({
        show: function(a, b, c) {
            var f, g;
            if (a || 0 === a) return this.animate(e("show", 3), a, b, c);
            for (var h = 0, i = this.length; i > h; h++) f = this[h], f.style && (g = f.style.display, !K._data(f, "olddisplay") && "none" === g && (g = f.style.display = ""), "" === g && "none" === K.css(f, "display") && K._data(f, "olddisplay", d(f.nodeName)));
            for (h = 0; i > h; h++) f = this[h], f.style && (g = f.style.display, ("" === g || "none" === g) && (f.style.display = K._data(f, "olddisplay") || ""));
            return this
        },
        hide: function(a, b, c) {
            if (a || 0 === a) return this.animate(e("hide", 3), a, b, c);
            for (var d, f, g = 0, h = this.length; h > g; g++) d = this[g], d.style && (f = K.css(d, "display"), "none" !== f && !K._data(d, "olddisplay") && K._data(d, "olddisplay", f));
            for (g = 0; h > g; g++) this[g].style && (this[g].style.display = "none");
            return this
        },
        _toggle: K.fn.toggle,
        toggle: function(a, b, c) {
            var d = "boolean" == typeof a;
            return K.isFunction(a) && K.isFunction(b) ? this._toggle.apply(this, arguments) : null == a || d ? this.each(function() {
                var b = d ? a : K(this).is(":hidden");
                K(this)[b ? "show" : "hide"]()
            }) : this.animate(e("toggle", 3), a, b, c), this
        },
        fadeTo: function(a, b, c, d) {
            return this.filter(":hidden").css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d)
        },
        animate: function(a, b, c, e) {
            function f() {
                g.queue === !1 && K._mark(this);
                var b, c, e, f, h, i, j, k, l, m = K.extend({}, g),
                    n = 1 === this.nodeType,
                    o = n && K(this).is(":hidden");
                m.animatedProperties = {};
                for (e in a) {
                    if (b = K.camelCase(e), e !== b && (a[b] = a[e], delete a[e]), c = a[b], K.isArray(c) ? (m.animatedProperties[b] = c[1], c = a[b] = c[0]) : m.animatedProperties[b] = m.specialEasing && m.specialEasing[b] || m.easing || "swing", "hide" === c && o || "show" === c && !o) return m.complete.call(this);
                    n && ("height" === b || "width" === b) && (m.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY], "inline" === K.css(this, "display") && "none" === K.css(this, "float") && (K.support.inlineBlockNeedsLayout && "inline" !== d(this.nodeName) ? this.style.zoom = 1 : this.style.display = "inline-block"))
                }
                null != m.overflow && (this.style.overflow = "hidden");
                for (e in a) f = new K.fx(this, m, e), c = a[e], uc.test(c) ? (l = K._data(this, "toggle" + e) || ("toggle" === c ? o ? "show" : "hide" : 0), l ? (K._data(this, "toggle" + e, "show" === l ? "hide" : "show"), f[l]()) : f[c]()) : (h = vc.exec(c), i = f.cur(), h ? (j = parseFloat(h[2]), k = h[3] || (K.cssNumber[e] ? "" : "px"), "px" !== k && (K.style(this, e, (j || 1) + k), i = (j || 1) / f.cur() * i, K.style(this, e, i + k)), h[1] && (j = ("-=" === h[1] ? -1 : 1) * j + i), f.custom(i, j, k)) : f.custom(i, c, ""));
                return !0
            }
            var g = K.speed(b, c, e);
            return K.isEmptyObject(a) ? this.each(g.complete, [!1]) : (a = K.extend({}, a), g.queue === !1 ? this.each(f) : this.queue(g.queue, f))
        },
        stop: function(a, c, d) {
            return "string" != typeof a && (d = c, c = a, a = b), c && a !== !1 && this.queue(a || "fx", []), this.each(function() {
                function b(a, b, c) {
                    var e = b[c];
                    K.removeData(a, c, !0), e.stop(d)
                }
                var c, e = !1,
                    f = K.timers,
                    g = K._data(this);
                if (d || K._unmark(!0, this), null == a)
                    for (c in g) g[c] && g[c].stop && c.indexOf(".run") === c.length - 4 && b(this, g, c);
                else g[c = a + ".run"] && g[c].stop && b(this, g, c);
                for (c = f.length; c--;) f[c].elem === this && (null == a || f[c].queue === a) && (d ? f[c](!0) : f[c].saveState(), e = !0, f.splice(c, 1));
                (!d || !e) && K.dequeue(this, a)
            })
        }
    }), K.each({
        slideDown: e("show", 1),
        slideUp: e("hide", 1),
        slideToggle: e("toggle", 1),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(a, b) {
        K.fn[a] = function(a, c, d) {
            return this.animate(b, a, c, d)
        }
    }), K.extend({
        speed: function(a, b, c) {
            var d = a && "object" == typeof a ? K.extend({}, a) : {
                complete: c || !c && b || K.isFunction(a) && a,
                duration: a,
                easing: c && b || b && !K.isFunction(b) && b
            };
            return d.duration = K.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in K.fx.speeds ? K.fx.speeds[d.duration] : K.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function(a) {
                K.isFunction(d.old) && d.old.call(this), d.queue ? K.dequeue(this, d.queue) : a !== !1 && K._unmark(this)
            }, d
        },
        easing: {
            linear: function(a, b, c, d) {
                return c + d * a
            },
            swing: function(a, b, c, d) {
                return (-Math.cos(a * Math.PI) / 2 + .5) * d + c
            }
        },
        timers: [],
        fx: function(a, b, c) {
            this.options = b, this.elem = a, this.prop = c, b.orig = b.orig || {}
        }
    }), K.fx.prototype = {
        update: function() {
            this.options.step && this.options.step.call(this.elem, this.now, this), (K.fx.step[this.prop] || K.fx.step._default)(this)
        },
        cur: function() {
            if (null != this.elem[this.prop] && (!this.elem.style || null == this.elem.style[this.prop])) return this.elem[this.prop];
            var a, b = K.css(this.elem, this.prop);
            return isNaN(a = parseFloat(b)) ? b && "auto" !== b ? b : 0 : a
        },
        custom: function(a, c, d) {
            function e(a) {
                return f.step(a)
            }
            var f = this,
                h = K.fx;
            this.startTime = sc || g(), this.end = c, this.now = this.start = a, this.pos = this.state = 0, this.unit = d || this.unit || (K.cssNumber[this.prop] ? "" : "px"), e.queue = this.options.queue, e.elem = this.elem, e.saveState = function() {
                f.options.hide && K._data(f.elem, "fxshow" + f.prop) === b && K._data(f.elem, "fxshow" + f.prop, f.start)
            }, e() && K.timers.push(e) && !rc && (rc = setInterval(h.tick, h.interval))
        },
        show: function() {
            var a = K._data(this.elem, "fxshow" + this.prop);
            this.options.orig[this.prop] = a || K.style(this.elem, this.prop), this.options.show = !0, a !== b ? this.custom(this.cur(), a) : this.custom("width" === this.prop || "height" === this.prop ? 1 : 0, this.cur()), K(this.elem).show()
        },
        hide: function() {
            this.options.orig[this.prop] = K._data(this.elem, "fxshow" + this.prop) || K.style(this.elem, this.prop), this.options.hide = !0, this.custom(this.cur(), 0)
        },
        step: function(a) {
            var b, c, d, e = sc || g(),
                f = !0,
                h = this.elem,
                i = this.options;
            if (a || e >= i.duration + this.startTime) {
                this.now = this.end, this.pos = this.state = 1, this.update(), i.animatedProperties[this.prop] = !0;
                for (b in i.animatedProperties) i.animatedProperties[b] !== !0 && (f = !1);
                if (f) {
                    if (null != i.overflow && !K.support.shrinkWrapBlocks && K.each(["", "X", "Y"], function(a, b) {
                            h.style["overflow" + b] = i.overflow[a]
                        }), i.hide && K(h).hide(), i.hide || i.show)
                        for (b in i.animatedProperties) K.style(h, b, i.orig[b]), K.removeData(h, "fxshow" + b, !0), K.removeData(h, "toggle" + b, !0);
                    d = i.complete, d && (i.complete = !1, d.call(h))
                }
                return !1
            }
            return 1 / 0 == i.duration ? this.now = e : (c = e - this.startTime, this.state = c / i.duration, this.pos = K.easing[i.animatedProperties[this.prop]](this.state, c, 0, 1, i.duration), this.now = this.start + (this.end - this.start) * this.pos), this.update(), !0
        }
    }, K.extend(K.fx, {
        tick: function() {
            for (var a, b = K.timers, c = 0; c < b.length; c++) a = b[c], !a() && b[c] === a && b.splice(c--, 1);
            b.length || K.fx.stop()
        },
        interval: 13,
        stop: function() {
            clearInterval(rc), rc = null
        },
        speeds: {
            slow: 600,
            fast: 200,
            _default: 400
        },
        step: {
            opacity: function(a) {
                K.style(a.elem, "opacity", a.now)
            },
            _default: function(a) {
                a.elem.style && null != a.elem.style[a.prop] ? a.elem.style[a.prop] = a.now + a.unit : a.elem[a.prop] = a.now
            }
        }
    }), K.each(["width", "height"], function(a, b) {
        K.fx.step[b] = function(a) {
            K.style(a.elem, b, Math.max(0, a.now) + a.unit)
        }
    }), K.expr && K.expr.filters && (K.expr.filters.animated = function(a) {
        return K.grep(K.timers, function(b) {
            return a === b.elem
        }).length
    });
    var xc = /^t(?:able|d|h)$/i,
        yc = /^(?:body|html)$/i;
    K.fn.offset = "getBoundingClientRect" in H.documentElement ? function(a) {
        var b, d = this[0];
        if (a) return this.each(function(b) {
            K.offset.setOffset(this, a, b)
        });
        if (!d || !d.ownerDocument) return null;
        if (d === d.ownerDocument.body) return K.offset.bodyOffset(d);
        try {
            b = d.getBoundingClientRect()
        } catch (e) {}
        var f = d.ownerDocument,
            g = f.documentElement;
        if (!b || !K.contains(g, d)) return b ? {
            top: b.top,
            left: b.left
        } : {
            top: 0,
            left: 0
        };
        var h = f.body,
            i = c(f),
            j = g.clientTop || h.clientTop || 0,
            k = g.clientLeft || h.clientLeft || 0,
            l = i.pageYOffset || K.support.boxModel && g.scrollTop || h.scrollTop,
            m = i.pageXOffset || K.support.boxModel && g.scrollLeft || h.scrollLeft,
            n = b.top + l - j,
            o = b.left + m - k;
        return {
            top: n,
            left: o
        }
    } : function(a) {
        var b = this[0];
        if (a) return this.each(function(b) {
            K.offset.setOffset(this, a, b)
        });
        if (!b || !b.ownerDocument) return null;
        if (b === b.ownerDocument.body) return K.offset.bodyOffset(b);
        for (var c, d = b.offsetParent, e = b, f = b.ownerDocument, g = f.documentElement, h = f.body, i = f.defaultView, j = i ? i.getComputedStyle(b, null) : b.currentStyle, k = b.offsetTop, l = b.offsetLeft;
            (b = b.parentNode) && b !== h && b !== g && (!K.support.fixedPosition || "fixed" !== j.position);) c = i ? i.getComputedStyle(b, null) : b.currentStyle, k -= b.scrollTop, l -= b.scrollLeft, b === d && (k += b.offsetTop, l += b.offsetLeft, K.support.doesNotAddBorder && (!K.support.doesAddBorderForTableAndCells || !xc.test(b.nodeName)) && (k += parseFloat(c.borderTopWidth) || 0, l += parseFloat(c.borderLeftWidth) || 0), e = d, d = b.offsetParent), K.support.subtractsBorderForOverflowNotVisible && "visible" !== c.overflow && (k += parseFloat(c.borderTopWidth) || 0, l += parseFloat(c.borderLeftWidth) || 0), j = c;
        return ("relative" === j.position || "static" === j.position) && (k += h.offsetTop, l += h.offsetLeft), K.support.fixedPosition && "fixed" === j.position && (k += Math.max(g.scrollTop, h.scrollTop), l += Math.max(g.scrollLeft, h.scrollLeft)), {
            top: k,
            left: l
        }
    }, K.offset = {
        bodyOffset: function(a) {
            var b = a.offsetTop,
                c = a.offsetLeft;
            return K.support.doesNotIncludeMarginInBodyOffset && (b += parseFloat(K.css(a, "marginTop")) || 0, c += parseFloat(K.css(a, "marginLeft")) || 0), {
                top: b,
                left: c
            }
        },
        setOffset: function(a, b, c) {
            var d = K.css(a, "position");
            "static" === d && (a.style.position = "relative");
            var e, f, g = K(a),
                h = g.offset(),
                i = K.css(a, "top"),
                j = K.css(a, "left"),
                k = ("absolute" === d || "fixed" === d) && K.inArray("auto", [i, j]) > -1,
                l = {},
                m = {};
            k ? (m = g.position(), e = m.top, f = m.left) : (e = parseFloat(i) || 0, f = parseFloat(j) || 0), K.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (l.top = b.top - h.top + e), null != b.left && (l.left = b.left - h.left + f), "using" in b ? b.using.call(a, l) : g.css(l)
        }
    }, K.fn.extend({
        position: function() {
            if (!this[0]) return null;
            var a = this[0],
                b = this.offsetParent(),
                c = this.offset(),
                d = yc.test(b[0].nodeName) ? {
                    top: 0,
                    left: 0
                } : b.offset();
            return c.top -= parseFloat(K.css(a, "marginTop")) || 0, c.left -= parseFloat(K.css(a, "marginLeft")) || 0, d.top += parseFloat(K.css(b[0], "borderTopWidth")) || 0, d.left += parseFloat(K.css(b[0], "borderLeftWidth")) || 0, {
                top: c.top - d.top,
                left: c.left - d.left
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var a = this.offsetParent || H.body; a && !yc.test(a.nodeName) && "static" === K.css(a, "position");) a = a.offsetParent;
                return a
            })
        }
    }), K.each(["Left", "Top"], function(a, d) {
        var e = "scroll" + d;
        K.fn[e] = function(d) {
            var f, g;
            return d === b ? (f = this[0]) ? (g = c(f), g ? "pageXOffset" in g ? g[a ? "pageYOffset" : "pageXOffset"] : K.support.boxModel && g.document.documentElement[e] || g.document.body[e] : f[e]) : null : this.each(function() {
                g = c(this), g ? g.scrollTo(a ? K(g).scrollLeft() : d, a ? d : K(g).scrollTop()) : this[e] = d
            })
        }
    }), K.each(["Height", "Width"], function(a, c) {
        var d = c.toLowerCase();
        K.fn["inner" + c] = function() {
            var a = this[0];
            return a ? a.style ? parseFloat(K.css(a, d, "padding")) : this[d]() : null
        }, K.fn["outer" + c] = function(a) {
            var b = this[0];
            return b ? b.style ? parseFloat(K.css(b, d, a ? "margin" : "border")) : this[d]() : null
        }, K.fn[d] = function(a) {
            var e = this[0];
            if (!e) return null == a ? null : this;
            if (K.isFunction(a)) return this.each(function(b) {
                var c = K(this);
                c[d](a.call(this, b, c[d]()))
            });
            if (K.isWindow(e)) {
                var f = e.document.documentElement["client" + c],
                    g = e.document.body;
                return "CSS1Compat" === e.document.compatMode && f || g && g["client" + c] || f
            }
            if (9 === e.nodeType) return Math.max(e.documentElement["client" + c], e.body["scroll" + c], e.documentElement["scroll" + c], e.body["offset" + c], e.documentElement["offset" + c]);
            if (a === b) {
                var h = K.css(e, d),
                    i = parseFloat(h);
                return K.isNumeric(i) ? i : h
            }
            return this.css(d, "string" == typeof a ? a : a + "px")
        }
    }), a.jQuery = a.$ = K, "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function() {
        return K
    })
}(window), new function(a) {
    var b = a.separator || "&",
        c = a.spaces === !1 ? !1 : !0,
        d = (a.suffix === !1 ? "" : "[]", a.prefix === !1 ? !1 : !0),
        e = d ? a.hash === !0 ? "#" : "?" : "",
        f = a.numbers === !1 ? !1 : !0;
    jQuery.query = new function() {
        var a = function(a, b) {
                return void 0 != a && null !== a && (b ? a.constructor == b : !0)
            },
            d = function(a) {
                for (var b, c = /\[([^[]*)\]/g, d = /^([^[]+)(\[.*\])?$/.exec(a), e = d[1], f = []; b = c.exec(d[2]);) f.push(b[1]);
                return [e, f]
            },
            g = function(b, c, d) {
                var e = c.shift();
                if ("object" != typeof b && (b = null), "" === e)
                    if (b || (b = []), a(b, Array)) b.push(0 == c.length ? d : g(null, c.slice(0), d));
                    else if (a(b, Object)) {
                    for (var f = 0; null != b[f++];);
                    b[--f] = 0 == c.length ? d : g(b[f], c.slice(0), d)
                } else b = [], b.push(0 == c.length ? d : g(null, c.slice(0), d));
                else if (e && e.match(/^\s*[0-9]+\s*$/)) {
                    var h = parseInt(e, 10);
                    b || (b = []), b[h] = 0 == c.length ? d : g(b[h], c.slice(0), d)
                } else {
                    if (!e) return d;
                    var h = e.replace(/^\s*|\s*$/g, "");
                    if (b || (b = {}), a(b, Array)) {
                        for (var i = {}, f = 0; f < b.length; ++f) i[f] = b[f];
                        b = i
                    }
                    b[h] = 0 == c.length ? d : g(b[h], c.slice(0), d)
                }
                return b
            },
            h = function(a) {
                var b = this;
                return b.keys = {}, a.queryObject ? jQuery.each(a.get(), function(a, c) {
                    b.SET(a, c)
                }) : jQuery.each(arguments, function() {
                    var a = "" + this;
                    a = a.replace(/^[?#]/, ""), a = a.replace(/[;&]$/, ""), c && (a = a.replace(/[+]/g, " ")), jQuery.each(a.split(/[&;]/), function() {
                        var a = decodeURIComponent(this.split("=")[0] || ""),
                            c = decodeURIComponent(this.split("=")[1] || "");
                        a && (f && (/^[+-]?[0-9]+\.[0-9]*$/.test(c) ? c = parseFloat(c) : /^[+-]?[0-9]+$/.test(c) && (c = parseInt(c, 10))), c = c || 0 === c ? c : !0, c !== !1 && c !== !0 && "number" != typeof c && (c = c), b.SET(a, c))
                    })
                }), b
            };
        return h.prototype = {
            queryObject: !0,
            has: function(b, c) {
                var d = this.get(b);
                return a(d, c)
            },
            GET: function(b) {
                if (!a(b)) return this.keys;
                for (var c = d(b), e = c[0], f = c[1], g = this.keys[e]; null != g && 0 != f.length;) g = g[f.shift()];
                return "number" == typeof g ? g : g || ""
            },
            get: function(b) {
                var c = this.GET(b);
                return a(c, Object) ? jQuery.extend(!0, {}, c) : a(c, Array) ? c.slice(0) : c
            },
            SET: function(b, c) {
                var e = a(c) ? c : null,
                    f = d(b),
                    h = f[0],
                    i = f[1],
                    j = this.keys[h];
                return this.keys[h] = g(j, i.slice(0), e), this
            },
            set: function(a, b) {
                return this.copy().SET(a, b)
            },
            REMOVE: function(a) {
                return this.SET(a, null).COMPACT()
            },
            remove: function(a) {
                return this.copy().REMOVE(a)
            },
            EMPTY: function() {
                var a = this;
                return jQuery.each(a.keys, function(b) {
                    delete a.keys[b]
                }), a
            },
            load: function(a) {
                var b = a.replace(/^.*?[#](.+?)(?:\?.+)?$/, "$1"),
                    c = a.replace(/^.*?[?](.+?)(?:#.+)?$/, "$1");
                return new h(a.length == c.length ? "" : c, a.length == b.length ? "" : b)
            },
            empty: function() {
                return this.copy().EMPTY()
            },
            copy: function() {
                return new h(this)
            },
            COMPACT: function() {
                function b(c) {
                    function d(b, c, d) {
                        a(b, Array) ? b.push(d) : b[c] = d
                    }
                    var e = "object" == typeof c ? a(c, Array) ? [] : {} : c;
                    return "object" == typeof c && jQuery.each(c, function(c, f) {
                        return a(f) ? void d(e, c, b(f)) : !0
                    }), e
                }
                return this.keys = b(this.keys), this
            },
            compact: function() {
                return this.copy().COMPACT()
            },
            toString: function() {
                var d = [],
                    f = [],
                    g = function(a) {
                        return a += "", c && (a = a.replace(/ /g, "+")), encodeURIComponent(a)
                    },
                    h = function(b, c, d) {
                        if (a(d) && d !== !1) {
                            var e = [g(c)];
                            d !== !0 && (e.push("="), e.push(g(d))), b.push(e.join(""))
                        }
                    },
                    i = function(a, b) {
                        var c = function(a) {
                            return b && "" != b ? [b, "[", a, "]"].join("") : [a].join("")
                        };
                        jQuery.each(a, function(a, b) {
                            "object" == typeof b ? i(b, c(a)) : h(f, c(a), b)
                        })
                    };
                return i(this.keys), f.length > 0 && d.push(e), d.push(f.join(b)), d.join("")
            }
        }, new h(location.search, location.hash)
    }
}(jQuery.query || {}),
function(a, b) {
    function c(a, b) {
        var c = Array.apply([], arguments),
            e = 1,
            f = "boolean" == typeof c[c.length - 1] ? c.pop() : !0;
        for (1 == c.length && (a = d) && (e = 0); b = c[e++];)
            for (var g in b) !b.hasOwnProperty(g) || !f && g in a || (a[g] = b[g]);
        return a
    }
    var d = function() {},
        e = +new Date,
        f = ".ZDK" + e,
        g = "constructor,@CLASSNAME,__proto__,",
        h = /,/g,
        i = Object.prototype.toString;
    if (c({
            Global: a,
            DOC: b,
            HTML: b.documentElement,
            HEAD: b.getElementsByTagName("head")[0],
            rword: /[^,]+/g,
            sword: h,
            mix: c,
            namespace: function(a, b, c) {
                var e, f = a.split("."),
                    g = d;
                for ("ZDK" === f[0] && f.shift(); e = f.shift();) g = g[e] || (g[e] = f.length ? {} : c || "function" != typeof b ? b : b(e))
            },
            filter: function(a, b) {
                var c, d = 0,
                    e = a.length;
                if (e)
                    for (; e > d && !1 !== b(d, a[d]); d++);
                else
                    for (c in a)
                        if (!1 === b(c, a[c])) break
            },
            hash: function(a) {
                for (var b = 16777619, c = a.length - 1; c >= 0; c--) b ^= (b << 5) + a.charCodeAt(c) + (b >> 2);
                return 2147483647 & b
            },
            uuid: function() {
                return e++
            },
            type: function(a, b) {
                var c = i.call(a).match(exprtypeof),
                    d = c ? c[1].toLowerCase() : "";
                return b ? d === b : d
            },
            one: function(a) {
                var b = {},
                    c = arguments[1] || 1;
                "string" == typeof a && (a = a.split(h) || []);
                for (var d = a.length - 1; d >= 0; d--) b[a[d]] = c;
                return b
            },
            lazy: function(a, b) {
                setTimeout(a, b || 100)
            },
            object: function(a, b) {
                function c() {}
                return c.prototype["@CLASSNAME"] = a, c.prototype = b, new c
            },
            procopy: function(a) {
                var b;
                if (arguments.length >= 2)
                    for (var c = arguments.length - 1; c > 0; c--) {
                        b = arguments[c];
                        for (var d in b.prototype) b.prototype.hasOwnProperty(d) && -1 == g.indexOf(d + ",") && (a.prototype[d] = b.prototype[d])
                    }
                return a
            },
            deferred: function(a) {
                var b = [],
                    c = function(a) {
                        return "function" != typeof a ? c.defer = a || "one" : b.push(a), c
                    };
                return c.defer = a || "one", c.fire = function(a) {
                    for (var e = c.defer && "one" != c.defer && "one" != a ? b.concat() : b; a = e.shift();) a();
                    return b.length ? c : d.noop
                }, c
            },
            substitute: function(a, b, c) {
                if (2 == arguments.length) return a.replace(/\{([^{}]+)\}/g, function(a, c) {
                    var d = b[c];
                    return void 0 !== d ? "" + d : ""
                });
                var d = c instanceof Array;
                b = b instanceof Array ? b : [b];
                for (var e = b.length - 1; e >= 0; e--) a = a.replace(b[e], d ? c[e] || "" : c);
                return a
            },
            noop: function() {}
        }), d.namespace("package", {
            "#module:cache": {
                "@interface": [/\/(?:\\\/|[^\/])*\/[igm]*/, /'(?:\\'|[^'])*'/gm, /"(?:\\"|[^"])*"/gm, /\/\/[^\n]*\n/, /\/\*[\s\S]*\*\//gm],
                "@replace": /(?:[^\b\.]+|ZDK\.|^)+require\s*\([\s'"]*([^'"]*)[\s'"]*\)/gim,
                "@regr_ready": /(loaded|complete|undefined)/i
            },
            "#module:config": {
                basepath: "/script/",
                cache: !0,
                minpath: "/min/",
                minbase: !1,
                minify: !0,
                debug: !1
            },
            "#module:compiled": function(a, b) {
                var c, e = b ? b.concat() : [],
                    f = this["#module:cache"],
                    g = {},
                    h = [],
                    i = 0;
                for ("string" != typeof a && (a = a.toString()), d.substitute(a.replace(/\\\n/g, "").replace(/require\s*\(\s*['"]([\w\.]+)['"]\s*\)/gm, "require(|$1|)"), f["@interface"], "").replace(/\|/g, '"').replace(f["@replace"], function(a, b) {
                        e.push(b)
                    }); c = e[i++];) g[c] || f["@loaded:" + c] || (g[c] = 1) && h.push(c);
                return h
            },
            "#module:truepath": function(a) {
                return this["#module:config"].basepath + a.replace("zdk.", "").replace(/\./g, "/") + ".js::" + a
            },
            "#module:listener": function() {
                var a, b = {},
                    c = null,
                    e = 0;
                return function(f) {
                    var g = this;
                    (a = a || d["package"]["#module:cache"]) && !b[f] && ++e && (1 == e && (c = setInterval(function() {
                        for (var f in b)
                            if (b.hasOwnProperty(f)) {
                                var h = b[f],
                                    i = !0;
                                if (h.depend.length)
                                    for (var j = h.depend.length - 1; j >= 0; j--)
                                        if (!a["@factory:" + h.depend[j]]) {
                                            i = !1;
                                            break
                                        }
                                i && (d.namespace(f, h.factory(g["#provide:require"], a["@exports:" + f]), !0), h.factory = null, delete b[f], a["@factory:" + f] = !0, --e || clearInterval(c))
                            }
                    }, 13)), b[f] = a["@module:" + f])
                }
            }(),
            "#module:require": function(a) {
                var b, c, d = this["#module:cache"],
                    e = 0,
                    f = a.module;
                if (d["@module:" + f] = a, b = d["@exports:" + f] || (d["@exports:" + f] = {}), c = a.depend.length) {
                    var g = this["#module:config"];
                    if (g.minify) {
                        var h = g.minpath + "?f=" + a.depend.join(",");
                        g.minbase && (h += "&b=" + g.minbase), g.debug && (h += "&debug"), this.loadJS(h + "::" + f, function() {
                            for (var b, c = a.depend, e = 0; b = c[e++];) d["@loaded:" + b] = !0, d["@exports:" + b] = d["@exports:" + b] || {};
                            d["@loaded:" + f] = !0
                        })
                    } else
                        for (; c > e;) this.loadJS(this["#module:truepath"](a.depend[e++]), function(a) {
                            d["@exports:" + a] = d["@exports:" + a] || {}, d["@loaded:" + a] = !0
                        })
                } else d["@loaded:" + f] = !0;
                !a.anonymous && this["#module:listener"](f)
            },
            "#provide:require": function(a) {
                return d["package"]["#module:cache"]["@exports:" + a] || {}
            },
            define: function(a, b, c, e) {
                var f, g = arguments.length;
                if ("boolean" == typeof arguments[g - 1] && (e = arguments[--g]), "undefined" == typeof c && ("function" == typeof a ? (c = a, a = d.uuid()) : ("function" == typeof b ? (c = b) && (b = a) : c = a, a = null)), "function" != typeof c) {
                    var h = this["#module:cache"],
                        i = this["#module:config"];
                    if ("string" == typeof b) return i[c] = b;
                    if ("object" == typeof c)
                        for (var j in c) c.hasOwnProperty(j) && (h["@data:" + j] = c[j]);
                    else if (void 0 == b) return h["@data:" + c] || null
                } else null == a && (a = b) && (b = null), f = [] || this["#module:compiled"](c, b ? b instanceof Array ? b : b.split(d.sword) : []), c["#module"] = a || f.join("") || d.uuid(), this["#module:require"]({
                    module: c["#module"],
                    depend: f,
                    factory: c,
                    amount: f.length,
                    anonymous: e || !1
                })
            },
            loadJS: function(a, b, c) {
                var e = document.createElement("script"),
                    f = this,
                    g = ("" + a).split("::");
                e.type = "text/javascript", e.defer = !0, e.src = g[0] + (this["#module:config"].cache ? "" : (g[0].indexOf("?") > -1 ? "&" : "?") + "t=" + +new Date), e.readyState ? d.bind(e, "readystatechange", function() {
                    f["#module:cache"]["@regr_ready"].test(e.readyState) && (b && b(g[1] || null), d.unbind(e, "readystatechange", arguments.callee))
                }) : d.bind(e, "load", function() {
                    b && b(g[1] || null), d.unbind(e, "load", arguments.callee)
                }), d.bind(e, "error", function() {
                    c && c(), d.unbind(e, "error", arguments.callee)
                }), d.HEAD.appendChild(e)
            }
        }), d.mix({
            loadJS: function(a, b, c) {
                return d["package"].loadJS(a, b, c)
            },
            define: function(a, b, c, e) {
                return d["package"].define(a, b, c, e)
            },
            bind: window.addEventListener ? function(a, b, c) {
                a.addEventListener(b, c, !1)
            } : function(a, b, c) {
                a.attachEvent && a.attachEvent("on" + b, c)
            },
            unbind: window.addEventListener ? function(a, b, c) {
                a.removeEventListener(b, c || d.noop, !1)
            } : function(a, b, c) {
                a[b = "on" + b] && (a[b] = null), a.detachEvent(b, c || d.noop)
            },
            mask: function() {
                var a = $('<div class="ui-mask"></div>').hide(),
                    b = !1,
                    c = 0;
                return function(d, e, f) {
                    if (f = f || document, "object" == typeof d && d.nodeType && (f = d, d = null), e) return a.css("z-index", e);
                    var g = $(f.body).find(".ui-mask");
                    if (g.length && (b = !0), !b && a.appendTo(f.body) && (b = !0), "boolean" == typeof d) a.hide(), g.hide();
                    else {
                        var f = $(f);
                        d && a.css("z-index", d), a.show(), a.css("height", f.outerHeight()), c++
                    }
                }
            }(),
            assert: function(a) {
                var b = document.createElement("div");
                b.style.position = "absolute", b.style.left = "-1000px", document.body.appendChild(b), a(b), document.body.removeChild(b)
            },
            domain: function(a) {
                return -1 == document.domain.indexOf("zhubajie.com") ? a + ".zbj.com" : a + "zhubajie.com"
            },
            placeHolder: function(a, b, c, d, e, f) {
                b = b || a.parent().find("em"), a.focus(function() {
                    a.val() && b.hide(), b.addClass("over"), c && c()
                }).blur(function() {
                    a.val() || b.show(), b.removeClass("over"), d && d()
                }), a.keydown(function() {
                    a.val() ? b.hide() : b.show()
                }), a.keyup(function() {
                    a.val() ? b.hide() : b.show()
                }), b.click(function() {
                    return a.focus(), f && f(), !1
                }), a.click(function() {
                    return e && e(), !1
                })
            }
        }), d.namespace("EventEmitter", function() {
            var a = function() {};
            return a.prototype = {
                addListener: function(a, b, c) {
                    return !this["#eventcache"] && (this["#eventcache"] = {}), !this["#eventcache"][a] && (this["#eventcache"][a] = []), "function" == typeof b && this["#eventcache"][a].push({
                        type: a,
                        handler: b,
                        guid: b[f] = d.uuid(),
                        data: $.isPlainObject(c) ? c : {}
                    }), this
                },
                on: function(a, b, c) {
                    var d = this;
                    return jQuery.isArray(a) || (a = a.split(/,\s*/)), jQuery.each(a, function(a, e) {
                        return d.addListener(e, b, c)
                    }), this
                },
                removeListener: function(a, b) {
                    if (b && this["#eventcache"][a])
                        for (var c = this["#eventcache"][a].length - 1; c >= 0; c--) this["#eventcache"][a].guid === b[f] && this["#eventcache"][a].splice(c, 1);
                    else a && (this["#eventcache"][a] = [])
                },
                trigger: function(a, b, c) {
                    var d, e = [];
                    if (!this["#eventcache"] && (this["#eventcache"] = {}), a = this["#eventcache"][a])
                        for (var f = a.length - 1; f >= 0; f--) d = a[f].handler($.extend({}, a[f].data, b)), e.push(d);
                    return c ? e : d
                }
            }, a
        }), d.namespace("EventDelegate", function() {
            var a = function() {};
            return a.prototype = {
                bindTarget: function(a, b) {
                    var c = this;
                    !this["@dataType"] && (this["@dataType"] = {}), !this["@action"] && (this["@action"] = "action-type"), !this["@actionType"] && (this["@actionType"] = {}), this["@actionType"][b = b || "click"] || a.bind(this["@actionType"][b] = b, function(a) {
                        c.eventDelegate(a)
                    })
                },
                eventDelegate: function(a) {
                    var b, c = $(a.target);
                    (b = c.attr(this["@action"])) && this.trigger(a.type + ":" + b, this["@eventData"](c, a))
                },
                "@eventData": function(a, b) {
                    var c, d = [],
                        e = 0,
                        f = {};
                    for (var g in this["@dataType"])(c = a.attr(g)) && d.push([g, c]);
                    if (d.length)
                        for (; c = d[e++];) f[c[0]] = c[1];
                    if (c = a.attr("action-data"))
                        for (c = c.split("&"); e = c.pop();) 2 == (e = e.split("=")).length && (f[e[0]] = e[1]);
                    return f.event = b, f
                },
                bindData: function(a) {
                    return this["@dataType"][a] = 1
                },
                resetAction: function(a) {
                    this["@action"] = a
                }
            }, d.procopy(a, d.EventEmitter)
        }), d.namespace("AOP", function() {
            var a = function() {};
            return a.prototype = {
                before: function(a, b) {
                    var c = this[a];
                    this[a] = function() {
                        return b.apply(this, arguments), c.apply(this, arguments)
                    }
                },
                after: function(a, b) {
                    var c = this[a];
                    this.af || (this.af = {}), this[a] = function() {
                        return this.af[a] = c.apply(this, arguments), b.apply(this, arguments)
                    }
                },
                around: function(a, b) {
                    var c = this[a];
                    this.ar || (this.ar = {}), this[a] = function() {
                        return this.ar[a] = c, b.apply(this, arguments)
                    }
                }
            }, a
        }), "undefined" == typeof window.console) {
        window.console = {
            log: function() {}
        };
        try {
            document.execCommand("BackgroundImageCache", !1, !0)
        } catch (j) {}
    }
    $.fn.extend({
        ie6hover: function(a) {
            $.browser.msie && "6.0" == $.browser.version && !$.support.style && (a = a || "hover", this.each(function() {
                $(this).hover(function() {
                    $(this).addClass(a)
                }, function() {
                    $(this).removeClass(a)
                })
            }))
        },
        inputEmpty: function(a) {
            this.each(function() {
                function b(b, c) {
                    var d = c.find("em"),
                        e = b;
                    a = d.attr("defalut-value") || a, /^\s*$/.test(e.val()) || e.val() == a ? (d.text(a), e.val("")) : d.text("")
                }
                var c = $(this),
                    d = c.find("input[type='text']");
                d = d.length ? d : c.find("textarea"), d.focus(function() {
                    c.find("em").text("")
                }), d.blur(function() {
                    b($(this), c)
                }), c.find("em").click(function() {
                    d.focus()
                }), b(d, c)
            })
        },
        ie6winFloat: function(a) {
            var b = window.attachEvent && !window.XMLHttpRequest && navigator.userAgent.indexOf("MSIE 6.0") > -1;
            if (b) {
                var c = $("head").first(),
                    d = document.createElement("style");
                if (d.setAttribute("type", "text/css"), c.append(d), d.styleSheet) {
                    var e;
                    if (a) switch (a) {
                        case "top":
                            e = "document.documentElement.scrollTop";
                            break;
                        case "bottom":
                            e = "document.documentElement.scrollTop + document.documentElement.offsetHeight -" + $(this).height();
                            break;
                        case "center":
                            e = "document.documentElement.scrollTop + document.documentElement.offsetHeight -" + $(this).height();
                            break;
                        default:
                            e = "document.documentElement.scrollTop + document.documentElement.offsetHeight -" + a
                    } else e = "document.documentElement.scrollTop";
                    d.styleSheet.cssText = "html{_text-overflow:ellipsis;}", d.styleSheet.cssText += "#" + $(this).attr("id") + "{position:absolute;top:expression(fixed = " + e + ")}"
                }
            }
        },
        yzmtimer: function(a) {
            var b = a || "<i></i>重发验证码";
            this.each(function() {
                var a = $(this),
                    c = "";
                a.hasClass("butn-green") && (a.removeClass("butn-green"), c = "butn-green"), a.attr("disabled", "disabled");
                var d = 60;
                a.html(b + "(" + d + ")");
                var e = setInterval(function() {
                    d-- > 0 ? a.html(b + "(" + d + ")") : (clearInterval(e), a.removeAttr("disabled").html(b).addClass(c))
                }, 1e3)
            })
        }
    }), a.ZDK = d
}(this, this.document),
function(a) {
    var b = "undefined" == typeof module ? a.baidu = a.baidu || {} : module.exports;
    b.template = function(b, d) {
        var e = function() {
                if (!a.document) return c._compile(b);
                var d = document.getElementById(b);
                if (d) {
                    if (c.cache[b]) return c.cache[b];
                    var e = /^(textarea|input)$/i.test(d.nodeName) ? d.value : d.innerHTML;
                    return c._compile(e)
                }
                return c._compile(b)
            }(),
            f = c._isObject(d) ? e(d) : e;
        return e = null, f
    };
    var c = b.template;
    c.versions = c.versions || [], c.versions.push("1.0.6"), c.cache = {}, c.LEFT_DELIMITER = c.LEFT_DELIMITER || "<%", c.RIGHT_DELIMITER = c.RIGHT_DELIMITER || "%>", c.ESCAPE = !0, c._encodeHTML = function(a) {
        return String(a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\\/g, "&#92;").replace(/"/g, "&quot;").replace(/'/g, "&#39;")
    }, c._encodeReg = function(a) {
        return String(a).replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1")
    }, c._encodeEventHTML = function(a) {
        return String(a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/\\\\/g, "\\").replace(/\\\//g, "/").replace(/\\n/g, "\n").replace(/\\r/g, "\r")
    }, c._compile = function(a) {
        var b = "var _template_fun_array=[];\nvar fn=(function(__data__){\nvar _template_varName='';\nfor(name in __data__){\n_template_varName+=('var '+name+'=__data__[\"'+name+'\"];');\n};\neval(_template_varName);\n_template_fun_array.push('" + c._analysisStr(a) + "');\n_template_varName=null;\n})(_template_object);\nfn = null;\nreturn _template_fun_array.join('');\n";
        return new Function("_template_object", b)
    }, c._isObject = function(a) {
        return "function" == typeof a || !(!a || "object" != typeof a)
    }, c._analysisStr = function(a) {
        var b = c.LEFT_DELIMITER,
            d = c.RIGHT_DELIMITER,
            e = c._encodeReg(b),
            f = c._encodeReg(d);
        return a = String(a).replace(new RegExp("(" + e + "[^" + f + "]*)//.*\n", "g"), "$1").replace(new RegExp("<!--.*?-->", "g"), "").replace(new RegExp(e + "\\*.*?\\*" + f, "g"), "").replace(new RegExp("[\\r\\t\\n]", "g"), "").replace(new RegExp(e + "(?:(?!" + f + ")[\\s\\S])*" + f + "|((?:(?!" + e + ")[\\s\\S])+)", "g"), function(a, b) {
            var c = "";
            if (b)
                for (c = b.replace(/\\/g, "&#92;").replace(/'/g, "&#39;");
                    /<[^<]*?&#39;[^<]*?>/g.test(c);) c = c.replace(/(<[^<]*?)&#39;([^<]*?>)/g, "$1\r$2");
            else c = a;
            return c
        }), a = a.replace(new RegExp("(" + e + "[\\s]*?var[\\s]*?.*?[\\s]*?[^;])[\\s]*?" + f, "g"), "$1;" + d).replace(new RegExp("(" + e + ":?[hvu]?[\\s]*?=[\\s]*?[^;|" + f + "]*?);[\\s]*?" + f, "g"), "$1" + d).split(b).join("	"), a = c.ESCAPE ? a.replace(new RegExp("\\t=(.*?)" + f, "g"), "',typeof($1) === 'undefined'?'':baidu.template._encodeHTML($1),'") : a.replace(new RegExp("\\t=(.*?)" + f, "g"), "',typeof($1) === 'undefined'?'':$1,'"), a = a.replace(new RegExp("\\t:h=(.*?)" + f, "g"), "',typeof($1) === 'undefined'?'':baidu.template._encodeHTML($1),'").replace(new RegExp("\\t(?::=|-)(.*?)" + f, "g"), "',typeof($1)==='undefined'?'':$1,'").replace(new RegExp("\\t:u=(.*?)" + f, "g"), "',typeof($1)==='undefined'?'':encodeURIComponent($1),'").replace(new RegExp("\\t:v=(.*?)" + f, "g"), "',typeof($1)==='undefined'?'':baidu.template._encodeEventHTML($1),'").split("	").join("');").split(d).join("_template_fun_array.push('").split("\r").join("\\'")
    }, ("undefined" != typeof ZDK ? ZDK : a.ZDK = {}).template = c
}(window),
function() {
    function a(b, c) {
        var d = a.arguments,
            e = a.arguments.length,
            f = e > 2 ? d[2] : null,
            g = e > 3 ? d[3] : null,
            h = e > 4 ? d[4] : null,
            i = e > 5 ? d[5] : !1;
        document.cookie = b + "=" + escape(c) + (null == f ? "" : "; expires=" + f.toGMTString()) + (null == g ? "" : "; path=" + g) + (null == h ? "" : "; domain=" + h) + (1 == i ? "; secure" : "")
    }

    function b(a) {
        for (var b = a + "=", c = b.length, e = document.cookie.length, f = 0; e > f;) {
            var g = f + c;
            if (document.cookie.substring(f, g) == b) return d(g);
            if (f = document.cookie.indexOf(" ", f) + 1, 0 == f) break
        }
        return null
    }

    function c(a) {
        var b = new Date;
        b.setTime(b.getTime() - 1);
        var c = 0;
        document.cookie = a + "=" + c + "; expires=" + b.toGMTString()
    }

    function d(a) {
        var b = document.cookie.indexOf(";", a);
        return -1 == b && (b = document.cookie.length), decodeURIComponent(document.cookie.substring(a, b))
    }

    function e(a) {
        if (!a) return "http://t4.zbjimg.com/r/p/task/48.gif";
        var b, c = "000000000" + a,
            d = c.substr(c.length - 9, 9);
        return b = "http://p6.zbjimg.com/user_avat_new/" + d.substr(0, 3) + "/" + d.substr(3, 2) + "/" + d.substr(5, 2) + "/48x48_avatar_" + d.substr(7, 2) + ".jpg"
    }
    ZDK.cookie = {
        setCookie: a,
        getCookie: b,
        deleteCookie: c,
        getUserImg: e
    }
}(),
function(a) {
    Storage = function() {
        function a(a) {
            return a.replace(/[_\s]/g, function(a) {
                return "_" == a ? "__" : "_s"
            })
        }

        function b() {
            return document.getElementById(g + "-storage")
        }

        function c(a) {
            return "[object Date]" === {}.toString.call(a) && "Invalid Date" !== a.toString() && !isNaN(a)
        }

        function d() {
            var a;
            return window.localStorage ? a = f() : window.ActiveXObject && (a = e()), a
        }

        function e() {
            var d = document.createElement("div");
            return d.style.display = "none", d.id = g + "-storage", document.body.appendChild(d), b().addBehavior("#default#userData"), {
                set: function(d, e, f) {
                    var g = h.SUCCESS,
                        i = b(),
                        j = a(d),
                        k = f ? f : (new Date).getTime() + 31536e6;
                    c(k) && (k = k.getTime()), i.expires = new Date(k).toUTCString();
                    try {
                        i.setAttribute(j, e), i.save(j)
                    } catch (l) {
                        g = h.OVERFLOW
                    }
                    return i = null, g
                },
                get: function(c) {
                    var d = b(),
                        e = a(c),
                        f = null;
                    try {
                        return d.load(e), f = d.getAttribute(e)
                    } catch (g) {
                        throw g.message
                    }
                },
                del: function(c) {
                    var d, e = b(),
                        f = a(c);
                    try {
                        return e.load(f), d = e.getAttribute(f), d ? (e.removeAttribute(f), e.expires = new Date(315532799e3).toUTCString(), e.save(f), !0) : !1
                    } catch (g) {
                        return !1
                    }
                }
            }
        }

        function f() {
            return {
                set: function(b, d, e) {
                    var f = h.SUCCESS,
                        g = window.localStorage,
                        i = a(b),
                        j = e ? e : (new Date).getTime() + 31536e6;
                    c(j) && (j = j.getTime());
                    try {
                        g.setItem(i, j + "|" + d)
                    } catch (k) {
                        f = h.OVERFLOW
                    }
                    return f
                },
                get: function(b) {
                    var c, d, e = window.localStorage,
                        f = a(b),
                        g = null;
                    try {
                        g = e.getItem(f)
                    } catch (h) {
                        return null
                    }
                    return g ? (c = g.indexOf("|"), d = parseInt(g.substring(0, c), 10), new Date(d).getTime() > (new Date).getTime() || 0 == d ? g = g.substring(c + 1, g.length) : (g = null, this.del(b), null)) : null
                },
                del: function(b) {
                    var c = window.localStorage,
                        d = a(b),
                        e = null;
                    try {
                        e = c.getItem(d)
                    } catch (f) {
                        return !1
                    }
                    return e ? (e = e.substring(e.indexOf("|") + 1, e.length), e && c.removeItem(d), !0) : !1
                }
            }
        }
        var g = "tieba",
            h = {
                SUCCESS: 0,
                FAILURE: 1,
                OVERFLOW: 2
            };
        return {
            set: function() {
                var a = this;
                return !a._storage && (a._storage = d()), a._storage.set.apply(a._storage, arguments)
            },
            get: function() {
                var a = this;
                return !a._storage && (a._storage = d()), a._storage.get.apply(a._storage, arguments)
            },
            remove: function() {
                var a = this;
                return !a._storage && (a._storage = d()), a._storage.del.apply(a._storage, arguments)
            },
            isSupport: function() {
                return !(!window.localStorage && !window.ActiveXObject)
            }
        }
    }(), "undefined" != typeof module && module.exports ? module.exports = Storage : "function" == typeof define && define.amd ? define(Storage) : (a.ZDK = a.ZDK || {}, ZDK.store = Storage)
}(this.window || global), ZDK.define("module.tips", function() {
        function a(a) {
            this.content = a.content, this.timeout = a.timeout, this.icon = a.icon, this.width = a.width, this._config = {
                iconFont: {
                    info: "&#xe818;",
                    error: "&#xe816;",
                    warning: "&#xe819;",
                    success: "&#xe814;"
                }
            }
        }
        a.prototype = {
            create: function() {
                var a = [];
                a = ['<div class="ui-tips ui-tips-pop ui-tips-' + this.icon + '">'], a.push('<i class="ui-tips-icon iconfont">' + this._config.iconFont[this.icon] + "</i>"), a.push('<div class="ui-tips-bd">' + this.content + "</div>"), a.push("</div>");
                var b = $(a.join(""));
                return b.appendTo(document.body), b
            },
            resetPosition: function(a) {
                var b = a.width(),
                    c = a.height(),
                    d = $(document).scrollTop();
                a.css({
                    "margin-left": -b / 2 - 22.5,
                    "margin-top": -c / 2 + d + 15
                }), a.animate({
                    marginTop: -c / 2 + d
                }, 400)
            },
            hideClose: function(a) {
                a.remove()
            }
        }, ZDK.Tips = function(b, c, d, e) {
            if (/^\s*$/.test(b) || !b) return !1;
            var f = new a({
                content: b,
                icon: d || "success",
                width: e,
                timeout: c
            });
            f.hideClose($(".tisp-" + d));
            var g = f.create();
            f.resetPosition(g), 0 != c && setTimeout(function() {
                f.hideClose(g)
            }, f.timeout)
        };
        var b = $("body");
        b.delegate(".zbj-tooltip", "mouseenter", function() {
            for (var a = $(this); a.attr("tool-target");) a = $("#" + a.attr("tool-target"));
            if (a.attr("tool-text")) {
                var b = $("body"),
                    c = a.attr("tool-map"),
                    d = a.attr("tool-text"),
                    e = a.attr("tool-top"),
                    f = a.attr("tool-left"),
                    g = b.find(".ui-tooltip-" + c),
                    h = a.attr("tool-cls") || "";
                g.length >= 1 && g.remove(), g = $('<div class="ui-tooltip  ui-tooltip-' + c + "  " + h + ' "><div class="ui-tooltip-arrow"></div><div class="ui-tooltip-inner">' + d + "</div></div>").css({
                    opacity: 0
                }).appendTo(b); {
                    var i = a.offset().left - (f ? f : 0),
                        j = (a.offset().right, a.offset().top - (e ? e : 0));
                    a.offset().bottom
                }
                switch (c) {
                    case "top":
                        g.css({
                            top: j - g.innerHeight(),
                            left: i - g.innerWidth() / 2 + a.innerWidth() / 2
                        });
                        break;
                    case "bottom":
                        g.css({
                            top: j + a.innerHeight() + 8,
                            left: i - g.innerWidth() / 2 + a.innerWidth() / 2
                        });
                        break;
                    case "left":
                        g.css({
                            top: j - g.innerHeight() / 2 + a.innerHeight() / 2,
                            left: i - g.innerWidth() - 15
                        });
                        break;
                    case "right":
                        g.css({
                            top: j - g.innerHeight() / 2 + a.innerHeight() / 2,
                            left: i + a.innerWidth() + 15
                        });
                        break;
                    default:
                        g.css({
                            bottom: "25px"
                        })
                }
                g.animate({
                    opacity: 1
                }, 400)
            }
        }), b.delegate(".zbj-tooltip", "mouseleave click", function() {
            for (var a = $(this); a.attr("tool-target");) a = $("#" + a.attr("tool-target"));
            a.attr("tool-text") && $("body").find(".ui-tooltip-" + a.attr("tool-map")).remove()
        })
    }), ZDK.define("module.btnloading", function(a, b) {
        var c = b.btnloading = function(a) {
            var b = a ? a : {};
            if (!b.obj) return !1;
            b.nodeName = b.obj.get(0).nodeName, b.txt = b.txt ? b.txt : "提交中", b.dynamic = "undefined" != typeof b.dynamic ? b.dynamic : !0;
            var c = b.obj.attr("isloading");
            if ("loading" === c) return !1;
            if (b.obj.attr("isloading", "loading"), b.obj.data("oldtext", b.obj.html()), b.obj.data("oldclass", b.obj.attr("class")), b.obj.attr("disabled", "disabled"), b.addClass && b.obj.addClass(b.addClass), b.removeClass && b.obj.removeClass(b.removeClass), b.dynamic) {
                b.obj.html(b.txt + "&nbsp;&nbsp;&nbsp;");
                var d = 0;
                b.obj.get(0).loadingtimer = setInterval(function() {
                    0 == d ? (b.obj.html(b.txt + ".&nbsp;&nbsp;"), d++) : 1 == d ? (b.obj.html(b.txt + "..&nbsp;"), d++) : 2 == d && (b.obj.html(b.txt + "..."), d = 0)
                }, 200)
            } else b.obj.html(b.txt)
        };
        return c.reset = function(a) {
            a.attr("isloading", ""), a.html(a.data("oldtext")), a.attr("class", a.data("oldclass")), a.get(0).loadingtimer && clearInterval(a.get(0).loadingtimer), a.removeAttr("disabled")
        }, ZDK.procopy(c, ZDK.EventEmitter)
    }), ZDK.define("lang.product.signup", function(a, b) {
        var c = {
            passsimple: "密码过于简单",
            passgood: "密码强度适中",
            passverygood: "密码强度很好",
            checkloading: "正在检测中..."
        };
        b.translation = function(a) {
            return c[a] || ""
        }
    }), ZDK.define("module.passport", function(a, b) {
        function c() {
            this.$topBarCtn = $("#J-header-logic3"), this.passportUrl = "https://login." + PPInfo.baseURI
        }
        if (!$(document.body).hasClass("t5s")) {
            var d = a("lang.product.signup").translation;
            a("module.verify")
        }
        return $.extend(c.prototype, {
            login: function(a, b) {
                if (this.checkLogin()) return void(a && a());
                var c = {
                    selected: "login"
                };
                this._CONF = {
                    login: {
                        title: "登录",
                        contentType: 1,
                        btnText: "登录"
                    },
                    registerPhone: {
                        title: "手机注册",
                        contentType: 2,
                        btnText: "注册"
                    },
                    registerEmail: {
                        title: "邮箱注册",
                        contentType: 3,
                        btnText: "注册"
                    }
                }, this._itemDoms = {}, this._options = $.extend(c, b), this._options.selected in this._CONF || (this._options = c);
                var d = this,
                    e = ZDK.module.window({
                        title: "登录",
                        content: "<span>登录</span>",
                        id: "loginWin" + ZDK.uuid(),
                        width: 550,
                        mask: !0,
                        cache: !1,
                        zIndex: 500,
                        close: !1,
                        hasIframe: !0,
                        ok: "登录"
                    });
                e.on("onok", function() {
                    return !1
                }), e.Footer.remove(), d._panel = e, d._callback = a, d._switchTo(this._options.selected), d._bindEvents()
            },
            quickLogin: function() {
                var a;
                return function(b, c) {
                    function d(a) {
                        var b = function(a) {
                                return ZDK.module.verify.type.tel(a)
                            },
                            c = a.val();
                        b(c) ? g() : f()
                    }

                    function e() {
                        $("#j-quicklogin-mobile-wrap").removeClass("error").addClass("success").find(".help-inline").hide(), $("#j-mobile-verify-btn").addClass("ui-btn-primary"), $("#j-mobile-verify-btn").attr("data-active", 1)
                    }

                    function f(a) {
                        a = a || "请输入正确的手机号码", $("#j-quicklogin-mobile-wrap").removeClass("success").addClass("error").find(".help-inline").html(a).show(), $("#j-mobile-verify-btn").removeClass("ui-btn-primary"), $("#j-mobile-verify-btn").removeAttr("data-active")
                    }

                    function g() {
                        var a = $("#j-quicklogin-mobile").val();
                        $.ajax({
                            url: n("/register/ChkUn-type-2.html?mobile=" + a),
                            dataType: "jsonp",
                            jsonp: "jsonpcallback",
                            success: function(a) {
                                1 == a.state ? ($("#j-mobile-verify-wrap").show(), e(), $("#zbj_csrf_token").val(a.zbj_csrf_token)) : ($("#j-mobile-verify-wrap").hide(), f(a.msg))
                            }
                        })
                    }

                    function h(c) {
                        var d = $("#j-quicklogin-mobile").val(),
                            e = $("#j-mobile-verify-code").val(),
                            f = "mobile=" + d + "&ticket=" + e;
                        return $("#j-quicklogin-mobile-wrap").hasClass("success") ? void $.ajax({
                            url: n("/register/doapply"),
                            jsonp: "jsonpcallback",
                            dataType: "jsonp",
                            success: function(g) {
                                return 1 == g.state ? void i() : "" == d || "" == e ? void ZDK.Tips("请输入手机和验证码", 3e3, "error") : void(c.attr("isloading") || (p(c), $.ajax({
                                    url: n("/register/verify"),
                                    data: f,
                                    jsonp: "jsonpcallback",
                                    dataType: "jsonp",
                                    success: function(d) {
                                        1 == d.state ? (a.hide(), b && b(), window.__ga_new && __ga_new(function() {
                                            __ga_new("send", "event", "signup", "mobile", "zbj_popup", 1, {
                                                nonInteraction: !0
                                            })
                                        })) : ZDK.Tips(d.msg, 5e3, "error"), q(c)
                                    }
                                })))
                            },
                            error: function() {
                                return ZDK.Tips("您当前的网络遇到点问题", 5e3, "error"), !1
                            }
                        }) : void ZDK.Tips("请输入正确的手机号码", 3e3, "error")
                    }

                    function i() {
                        function a(a, b) {
                            a.click(function() {
                                $(this).closest(".ui-tips").remove()
                            }), b.click(function() {
                                j(), a.click()
                            })
                        }
                        ZDK.Tips(ZDK.passport._getQuickLoginApplyTipsTPL(), 5e3, "error"), a($(".tips-close"), $(".tips-apply-link"))
                    }

                    function j() {
                        function a() {
                            function a(a, b, c) {
                                return d ? void(a.test(b.val()) || (ZDK.Tips(c, 5e3, "error"), b.focus(), d = 0)) : !1
                            }

                            function b(a) {
                                $.ajax({
                                    url: n("/register/ChkUn-type-2.html?mobile=" + a),
                                    dataType: "jsonp",
                                    jsonp: "jsonpcallback",
                                    success: function(a) {
                                        return 1 == a.state ? void $(".register-apply-form").submit() : (ZDK.Tips(a.msg, 5e3, "error"), void(d = 0))
                                    }
                                })
                            }
                            var d = 1,
                                e = c.find('[name="phone"]'),
                                f = c.find('[name="province"]'),
                                g = c.find('[name="city"]'),
                                h = c.find('[name="town"]'),
                                i = c.find('[name="locale"]');
                            a(/^[0-9]*$/, f, "请选择您所在的省份"), a(/^[0-9]*$/, g, "请选择您所在的城市"), 1 !== $('[name="town"] option').length && a(/^[0-9]*$/, h, "请选择您所在的区县"), a(/^\S\w*/, i, "请输入您的上网地点"), a(/1[345678]\d{9}$/, e, "请输入正确的手机号码"), d && b(e.val())
                        }
                        var b;
                        b = ZDK.module.window({
                            title: "注册申请",
                            content: ZDK.passport._getQuickLoginApplyTPL(),
                            width: 510,
                            mask: !0,
                            cache: !1,
                            cancel: "关闭",
                            theme: "quickLogin-register-apply",
                            ok: "立即提交"
                        }), $(".ui-quicklogin-wrap").hide();
                        var c;
                        seajs.use("address-selector", function(a) {
                            var b = new a({
                                parentNode: "#holder"
                            });
                            b.on("change", function() {
                                this.getAddress()
                            })
                        }), c = $(".register-apply-form"), c.attr("action", n("/register/doapply"));
                        var d = $("#j-quicklogin-mobile");
                        $("#j-quicklogin-mobile-wrap").hasClass("success") && c.find('[name="phone"]').val(d.val()), c.closest(".quickLogin-register-apply").find(".ui-window-ok").on("click", function() {
                            return a(), !1
                        })
                    }

                    function k(c) {
                        r() && (c.attr("isloading") || (p(c), $.ajax({
                            url: n("/login/dologin"),
                            data: $("#j-quicklogin-passport-form").serialize(),
                            jsonp: "jsonpcallback",
                            dataType: "jsonp",
                            success: function(d) {
                                if (1 == d.state) a.hide(), b && b();
                                else if (-2 == d.state) document.location.href = d.url;
                                else {
                                    var e = d.msg; - 3 == d.state && 3 == d.type && ($("#j-quicklogin-passport-form").find("input[name=catcha]").size() ? e = "验证码错误，请重新输入" : (e = "请输入验证码", m($("#j-quicklogin-passport-form").find(".catcha-group")))), ZDK.Tips(e, 5e3, "error"), $("#signin-catchaimg").click()
                                }
                                q(c)
                            }
                        })))
                    }

                    function l(a) {
                        $.ajax({
                            url: n("/register/doapply"),
                            jsonp: "jsonpcallback",
                            dataType: "jsonp",
                            success: function(b) {
                                if (1 == b.state) return void i();
                                if (a.attr("data-active") && !a.attr("disabled")) {
                                    var c = $("#j-quicklogin-mobile").val();
                                    $("#j-mobile-login-btn").addClass("max-butn-green");
                                    var d = "mobile=" + c + "&zbj_csrf_token=" + $("#zbj_csrf_token").val(),
                                        e = s("passport");
                                    if (e.isValid) {
                                        if (null !== e.value) {
                                            var f = $("#j-quicklogin-mobile-form").find('input[name="seed"]').val();
                                            d += "&seed=" + f + "&catcha=" + e.value
                                        }
                                        $.ajax({
                                            url: n("/register/quick?send=1"),
                                            data: d,
                                            jsonp: "jsonpcallback",
                                            dataType: "jsonp",
                                            success: function(b) {
                                                if (1 == b.state) a.yzmtimer("<i></i>重新发送"), ZDK.Tips("发送成功", 3e3, "success"), $("#zbj_csrf_token").val(b.zbj_csrf_token);
                                                else {
                                                    var c = b.msg,
                                                        d = $("#j-quicklogin-mobile-form").find(".catcha-group"); - 1 == b.state && 5 == b.type && (d.find("input[name=catcha]").size() ? c = "图片验证码错误，请重新输入" : (c = "请输入图片验证码", m(d))), ZDK.Tips(c, 5e3, "error"), o(d)
                                                }
                                            }
                                        })
                                    }
                                }
                            },
                            error: function() {
                                return ZDK.Tips("您当前的网络遇到点问题", 5e3, "error"), !1
                            }
                        })
                    }

                    function m(a) {
                        if (!a.find("input[name=catcha]").size()) {
                            var b = '<div class="control-group clearfix" id="signin-catcha-div"><label class="control-label" for="inputWarning">图片验证码：</label><div requiredtips="请填写验证码" class="controls ui-form-item"><input type="text" value="" style="width: 100px" id="signin-catcha" name="catcha" placeholder="验证码"><input type="hidden" value="523e54f013a3e" id="signin-seed" name="seed"><img id="signin-catchaimg" src="' + n("/login/verify?seed=523e54f013a3e") + '" class="yzmimg ml5 mr5"><div><a href="javascript:void(0);" class="refimg ml5 blue">换一张</a></div></div></div>';
                            $(b).appendTo(a)
                        }
                        o(a)
                    }

                    function n(a) {
                        return "https://login." + window.PPInfo.baseURI + a
                    }

                    function o(a) {
                        var b = a.find("img.yzmimg"),
                            c = a.find("input[type=hidden]"),
                            d = function() {
                                var d = b.attr("src"),
                                    e = +new Date;
                                return d = (d + "").replace(/seed=(\w+)/, function() {
                                    return "seed=" + e
                                }), b.attr("src", d), a.find("input[name=catcha]").val(""), c.val(e), !1
                            };
                        a.find(".refimg").click(d), b.click(d)
                    }

                    function p(a) {
                        ZDK.module.btnloading({
                            obj: a,
                            addClass: "no-int",
                            removeClass: "max-butn-orange",
                            txt: "<i></i>正在登录"
                        })
                    }

                    function q(a) {
                        ZDK.module.btnloading.reset(a)
                    }

                    function r() {
                        return $("#j-quicklogin-name").val() && $("#j-quicklogin-pwd").val() ? s("passport").isValid : (ZDK.Tips("请输入帐号和密码", 3e3, "error"), !1)
                    }

                    function s(a) {
                        var b = $("#j-quicklogin-" + a + "-form").find("input.catcha"),
                            c = {};
                        return b.size() ? (c.value = b.val(), b.val() ? (ZDK.Tips("请输入图像验证码", 3e3, "error"), c.isValid = 0) : c.isValid = 1) : c = {
                            isValid: 1,
                            value: null
                        }, c
                    }
                    return this.checkLogin() ? void(b && b()) : a ? void a.show() : (a = ZDK.module.window({
                        content: this._getQuickLoginWinTPL(),
                        id: "j-quickLoginWin",
                        width: 900,
                        cache: !0,
                        zIndex: 500,
                        mask: !0,
                        close: !1,
                        ok: !1,
                        theme: "ui-quicklogin-wrap"
                    }), a.Footer.hide(), a.Body.on("click", "#j-passport-login-btn", function() {
                        k($(this))
                    }), a.Body.on("click", "#j-mobile-verify-btn", function() {
                        l($(this))
                    }), a.Body.on("click", "#j-mobile-login-btn", function() {
                        h($(this))
                    }), a.Body.on("blur", "#j-quicklogin-mobile", function() {
                        d($(this))
                    }), void a.on("posthide", function() {
                        c && c()
                    }))
                }
            }(),
            refreshTopbar: function() {
                var a = this.getUserInfoByCookie();
                if (this._isTopBarlogined() || !a.id) return !1;
                var b = "http://u." + PPInfo.baseURI,
                    c = "http://u." + PPInfo.baseURI,
                    d = this.passportUrl,
                    e = '<div class="ui-dropdown">    <span href="#none" class="ui-dropdown-hd">        <a href="' + c + '">' + a.brandName.replace(/([\S\s]{5})(.*)/, "$1...") + '<b></b></a>    </span>    <div class="ui-dropdown-menu nouserinfo">正在加载...</div></div><span class="split">|</span><div class="navusernews ui-dropdown">        <div id="j-msg-tip" class="ui-poptipnoc ui-poptipnoc-bottom">        <div class="ui-poptipnoc-arrow"><i></i></div>        <div class="ui-poptipnoc-bd">你有新的消息!</div>    </div>    <a href="#" class="ui-dropdown-hd item-usernews">        <i id="j-msg-icon" class="iconfont">&#xe81d;</i><b></b></span>    </a>    <ul class="unstyled fr ui-dropdown-menu item-usernews-dropdown navmsg">    <li><a id="j-msg-trade" href="' + b + '/notice/list-type-1" target="_blank">查看交易提醒</a></li>    <li><a id="j-msg-recommend" href="' + b + '/officialtaskinvite/snatch" target="_blank">查看派单通知</a></li>    <li><a id="j-msg-system" href="' + b + '/notice/list-type-2" target="_blank">查看活动/其他通知</a></li>    <li style="display:none;"><a id="j-msg-chengxin" href="' + b + '/notice/list-type-3" target="_blank">查看诚信委员通知</a></li>    <li><a id="j-msg-reply" href="' + b + '/taskcomment/commentlist-state-1.html" target="_blank">查看评论</a></li>    <li><a id="j-msg-logs" href="' + b + '/notice/chat" target="_blank">查看聊天记录</a></li>    <li><a id="j-msg-bid" href="' + b + '/taskcomment/bids" target="_blank">查看参与</a></li>    <li><a id="j-msg-thx" href="' + b + '/task/seller?s=5" target="_blank">查看谢谢</a></li>    <li><a id="j-msg-fans" href="' + b + '/fav/index-type-2" target="_blank">查看粉丝</a></li>    </ul></div>';
                this.$topBarCtn.addClass("ui-header-logined").addClass("item-userinfo").html(e);
                var f = '欢迎来到猪八戒网<a href="' + c + '" class="user-name">' + a.brandName + '</a><a href="' + d + '/login/dologout">退出</a>';
                $("#J-header-logic1").html(f);
                var g = this;
                $(".item-userinfo .ui-dropdown").eq(0).one("mouseover", function() {
                    $.ajax({
                        url: "http://www." + PPInfo.baseURI + "/main/Ajaxuserinfo-uid-" + a.id,
                        type: "post",
                        dataType: "jsonp",
                        jsonp: "jsonpcallback",
                        success: function(a) {
                            $(".nouserinfo").html(a.replace(/^\s*"/, "").replace(/"\s*$/, "")).removeClass(".nouserinfo"), g.loadBalance()
                        }
                    })
                })
            },
            loadBalance: function() {
                var a = $("#my-balance-holder,.my-balance-holder"),
                    b = "http://task." + PPInfo.baseURI + "/api/MyBalance";
                a.length > 0 && $.ajax({
                    url: b,
                    type: "get",
                    dataType: "jsonp",
                    jsonp: "jsonp",
                    data: {
                        pic: "1"
                    },
                    success: function(b) {
                        1 == b.state && (a.html(b.amount), b.amount > 0 && $("#withdraw-link").show())
                    }
                })
            },
            checkLogin: function(a) {
                return ZDK.cookie.getCookie("userid") ? !0 : (a && ZDK.Tips("请先登录!", 3e3, "error"), !1)
            },
            getUserInfoByCookie: function() {
                if (!ZDK.cookie) return {};
                var a = ZDK.cookie.getCookie,
                    b = a("userid"),
                    c = {
                        id: b,
                        brandName: a("brandname") || a("nickname"),
                        avatar: ZDK.cookie.getUserImg(b)
                    };
                return c
            },
            _getQuickLoginWinTPL: function() {
                var a = '<div class="ui-quicklogin"><div class="quicklogin-passport fl"><h3 class="yahei quicklogin-title">已有<strong>猪八戒</strong>帐号，直接登录</h3><form id="j-quicklogin-passport-form"><div class="control-group"><label class="control-label">账号：</label><div class="controls ui-form-item"><input type="text" name="username" id="j-quicklogin-name" placeholder="请输入手机号码/邮箱" tabindex="1"><span class="help-inline"></span></div></div><div class="control-group"><label class="control-label">密码：</label><div class="controls ui-form-item"><div><input type="password" name="password" tabindex="2" id="j-quicklogin-pwd"></div><a class="blue" href="https://login.zhubajie.com/retrieve" target="_blank">忘记密码？</a></div></div><div class="catcha-group"></div><input type="hidden" name="q" value="1"><div class="control-group"><label class="control-label"></label><div class="controls ui-form-item"><a class="ui-btn ui-btn-large ui-btn-inverse" href="###" id="j-passport-login-btn">立即登录</a><a href="https://login.zhubajie.com/register" target="_blank" class="ml10 blue">注册</a></div></div></form></div><div class="quicklogin-phone fr" id="j-quicklogin-mobile-form"><h3 class="yahei quicklogin-title">无需账号，立即提交</h3><div class="control-group" id="j-quicklogin-mobile-wrap"><label class="control-label">手机号码：</label><div class="controls" type="phone"><div><input type="text" name="mobile" id="j-quicklogin-mobile" tabindex="3" placeholder="请输入手机号码"></div><span class="help-inline help-in"></span></div></div><div class="catcha-group"></div><div class="control-group" style="display:none;" id="j-mobile-verify-wrap"><label class="control-label"><a href="###" class="ui-btn ui-btn-primary quicklogin-getverify" id="j-mobile-verify-btn">获取验证码</a></label><input type="hidden" name="zbj_csrf_token" id="zbj_csrf_token" value="vyb4c618wbo6zaf3gyv8du6ev97sl1k9"><div class="controls ui-form-item"><input type="text" name="yznumber" tabindex="4" style="width:70px"  id="j-mobile-verify-code"><span class="help-inline">验证码将发送到您的手机</span></div></div><div class="control-group"><label class="control-label"></label><div class="controls ui-form-item" type=""><a class="ui-btn ui-btn-large" href="#" id="j-mobile-login-btn">立即提交</a></div></div></div></div>';
                return a
            },
            _getQuickLoginApplyTPL: function() {
                var a = '<div class="register-apply-content"><div class="alert"><div class="alert-img"><em></em>您的IP今天似乎注册了多个账号，目前无法再注册新账号了！</div></div><h4 class="register-title">您可以提交以下信息申请注册，我们会火速处理</h4><form action="" class="register-apply-form" method="post"><div class="control-group clearfix"><label class="control-label" for="">称&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;呼：</label><div class="controls ui-form-item" required="" requiredtips="请填写您的称呼" min="1" max="40" noblur="1"><input type="text" id="inputWarning" name="callname" placeholder=""></div></div><div class="control-group clearfix"><label class="control-label" for="inputWarning">上网地点：</label><div class="controls ui-form-item" required="" requiredtips="请填写您的上网地点" min="1" max="40" noblur="1"><div class="cityAddress" id="holder"></div><div class="detailAddress-div"><input type="text" class="form-detailAddress-input" name="locale" placeholder="详细地址，不需要重复填写省市区"></div></div></div><div class="control-group clearfix last-control-group"><div class="clearfix"><label class="control-label" for="">手&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;机：</label><div class="controls ui-form-item" required="" requiredtips="请填写您的手机号码" min="1" max="40" noblur="1"><input type="text" name="phone" placeholder="请填写您的手机号码" type="tel"></div></div><div class="select-sign-type mobile-sign-tip"><span>请填写真实的手机，审核结果将以短信方式发送到你的手机。</span></div></div></form></div>';
                return a
            },
            _getQuickLoginApplyTipsTPL: function() {
                var a = '<style>.tips-close {font-size: 22px;position: absolute;top: 2px;right: 8px;color: #333;text-decoration: none;}.tips-close:hover {text-decoration:none;}.ui-poptip-body {padding-right: 10px;}</style><a href="javascript:;" class="tips-close">×</a>您涉嫌恶意注册，24小时内无法注册新账号。<br>若您今天是首次注册，请<a href="javascript:;" class="tips-apply-link">点击此处</a></div>';
                return a
            },
            _bindEvents: function() {
                var a = this;
                this._panel.Body.delegate(".j_item_switch", "click", function(b) {
                    b.preventDefault();
                    var c = $(this);
                    a._switchTo(c.attr("data-item-sele"))
                }).delegate(".j_verify_ctn img,.j_verify_ctn a", "click", function(b) {
                    b.preventDefault(), a._refreshVerify()
                })
            },
            _switchTo: function(a) {
                var b = this._CONF[a];
                this._panel.setTitle(b.title).setContentNode(this._initContent(a)), this._refreshVerify(), this._validate(this._panel.Body.find("form"))
            },
            _initContent: function(a) {
                if (this._itemDoms[a]) return this._itemDoms[a];
                var b, c = this.passportUrl,
                    d = '<iframe class="hide" id="login-submit" name="login-submit"></iframe><form target="login-submit" method="post" action="/login/dologin" id="loginForm" class="ui-window-login login-panel j_form_login"><div class="tab-t mb20"><a href="#" class="cur j_item_switch" data-item-sele="login"><i></i>登录</a><a href="#" class="j_item_switch" data-item-sele="registerPhone"><i></i>注册</a></div><div class="control-group clearfix"><label for="inputWarning" class="control-label">登录名：</label><div noblur="1" max="100" min="1" requiredtips="登录名不能为空" required="" class="controls ui-form-item" data-index="0"><input type="text" name="username" tabindex="1" id="inputWarning"><span class="help-inline lin9">可输入手机号码、邮箱和用户名</span></div></div><div class="control-group clearfix"><label for="inputWarning" class="control-label">登录密码：</label><div noblur="1" max="16" min="6" requiredtips="请填写登录密码" required="" class="controls ui-form-item"><input type="password" name="password"><span class="help-inline lin9">请填写密码</span></div></div><div class="control-group clearfix"><label for="inputWarning" class="control-label">验证码：</label><div required="" class="controls ui-form-item"><input type="text" style="width: 80px" name="catcha"></div><p class="j_verify_ctn clearfix"><input type="hidden" value="50e0ecd1e16ab" name="seed"><img id="catchaimg" src="' + c + '/login/verify?seed=50e0ecd1e16ab" class="ml5"><span class="gray6">看不清楚？<a href="javascript:void(0);">换一张</a></span></p></div><p class="xieyi clearfix"><label><input type="checkbox" value="1" name="cache"><span>两周内自动登录</span></label></p><p class="sub-btn mt20">	<input type="hidden" value="http://www.zhubajie.com/" name="fromurl"><button class="ui-btn ui-btn-inverse j_btn_submit" id="subLogin"><i></i>登录</button><a href="' + c + '/retrieve/index.html?mode=1" class="underline ml10">忘记密码？</a></p><h4 class="other-tit">使用合作账号登录</h4><ul class="win-other-login clearfix"><li><a class="qq" href="' + c + '/oauth/redirect/act/QQ"></a></li><li><a class="xinL" href="' + c + '/oauth/redirect/act/sina"></a></li><li><a class="touban" href="' + c + '/oauth/redirect/act/douban"></a></li><li><a class="ren" href="' + c + '/oauth/redirect/act/renren"></a></li><li><a class="taob" href="' + c + '/oauth/redirect/act/taobao"></a></li></ul></form>',
                    e = '<div class="control-group clearfix"><label for="inputWarning" class="control-label">登录密码：</label><div max="16" min="6" required="" class="controls ui-form-item" data-index="1"><input type="password" tabindex="2" maxlength="16" name="password"><span class="help-inline lin9">6～16个数字、字母或特殊符号组成</span></div></div><div class="control-group clearfix"><label for="inputWarning" class="control-label">确认密码：</label><div max="16" min="6" required="" class="controls ui-form-item" data-index="2"><input type="password" tabindex="3" maxlength="16" name="cpassword"><span class="help-inline lin9" data-title="请输入确认密码">请输入确认密码</span></div></div><div class="control-group clearfix"><label for="inputWarning" class="control-label">昵称：</label><div max="16" min="4" ajaxurl="' + c + '/register/chkun/type-1" required="" class="controls ui-form-item" data-index="3"><input type="text" maxlength="16" tabindex="4" name="account"><span class="help-inline lin9" data-title="4~16个字符，汉字长度为2个字符">4~16个字符，汉字长度为2个字符</span></div></div><div class="control-group clearfix"><label for="inputWarning" class="control-label">验证码：</label><div required="" class="controls ui-form-item" data-index="4"><input type="text" tabindex="5" style="width: 80px" name="catcha"></div><p class="j_verify_ctn clearfix"><input type="hidden" value="50e0ecd1e16ab" name="seed"><img id="catchaimg" src="' + c + '/login/verify?seed=50e0ecd1e16ab" class="ml5"><span class="gray6">看不清楚？<a href="javascript:void(0);">换一张</a></span></p></div><p id="xy" requiredtips="请先阅读猪八戒协议" required="" class="xieyi clearfix ui-form-item" data-index="5"><label><input type="checkbox" checked="checked" tabindex="6"> <span>我已阅读并接受</span></label><span><a href="http://zt.zhubajie.com/ztold/dealzbj/" target="_blank">《猪八戒网服务协议》</a></span></p><p class="sub-btn"><button class="ui-btn ui-btn-inverse j_btn_submit"><i></i>注册</button></p></form>',
                    f = '<iframe style="display:none;" id="register-submit" name="register-submit"></iframe><form target="register-submit" action="' + c + '/register/doreg" method="post" id="signup" class="register login-panel j_form_signup"><input type="hidden" name="type" value="1" /><div class="tab-t mb20"><a href="#" class="j_item_switch" data-item-sele="login"><i></i>登录</a><a href="#" class="cur title-link j_item_switch" data-item-sele="registerPhone"><i></i>手机注册</a><a href="' + c + '/register/" class="email-link" data-item-sele="registerEmail" target="_blank"><i></i>邮箱注册</a></div><div class="control-group clearfix"><label for="inputWarning" class="control-label">手机号码：</label><div type="tel" required="" ajaxurl="' + c + '/register/chkun/type-2?jsonpcallback=?" class="controls ui-form-item" data-index="0"><input type="text" tabindex="1" name="mobile"><span class="help-inline lin9" data-title="用以在多个终端登录和找回密码">用以在多个终端登录和找回密码</span></div></div>',
                    g = '<iframe style="display:none;" id="register-submit" name="register-submit"></iframe><form target="register-submit" action="' + c + '/register/doreg/type-1" method="post" id="signup" class="register login-panel j_form_signup"><input type="hidden" name="type" value="2" /><div class="tab-t mb20"><a href="#" class="j_item_switch" data-item-sele="login"><i></i>登录</a><a href="' + c + '/register/" class="email-link" data-item-sele="registerEmail" target="_blank"><i></i>邮箱注册</a></div><a href="#" class="email-link j_item_switch" data-item-sele="registerPhone"><i></i>手机注册</a></div><div class="control-group clearfix"><label for="inputWarning" class="control-label">邮箱地址：</label><div type="email" required="" ajaxurl="' + c + '/register/chkun/type-3?jsonpcallback=?" class="controls ui-form-item" data-index="0"><input type="text" tabindex="1" name="email" id="email" autocomplete="off"><span class="help-inline lin9" data-title="用以在多个终端登录和找回密码">用以在多个终端登录和找回密码</span></div></div>';
                switch (a) {
                    case "registerPhone":
                    case "registerEmail":
                        b = $(("registerPhone" === a ? f : g) + e);
                        break;
                    default:
                        b = $(d)
                }
                return this._itemDoms[a] = b, b
            },
            _submitLogin: function() {
                function a(a) {
                    return 1 != a.state ? -2 == a.state ? document.location.href = a.url : (ZDK.Tips(a.msg, 2e3, "error"), e._refreshVerify()) : (e._panel.hide(), e.refreshTopbar(), e._callback ? e._callback(a, e._panel) : ZDK.Tips("登录成功！", 3e3, "success")), !1
                }
                var b = this._panel.Body,
                    c = b.find(".j_form_login");
                if (c.data("loading") !== !0) {
                    c.data("loading", !0);
                    var d = this.passportUrl,
                        e = this;
                    $.ajax({
                        type: "post",
                        url: d + "/login/dologin",
                        data: c.serialize(),
                        dataType: "jsonp",
                        jsonp: "jsonpcallback",
                        success: function(b) {
                            a(b), c.data("loading", !1)
                        }
                    })
                }
            },
            _submitRegister: function() {
                function a(a) {
                    function d(a) {
                        var b = 60,
                            c = a.attr("ajaxurl"),
                            d = setInterval(function() {
                                a.html("(<font class='orange'>" + b + "</font>)秒后重新获取").attr("ajaxurl", "javascript:void(0)").css({
                                    color: "#999"
                                }), b--, 0 >= b && (clearInterval(d), a.html("重新发送").attr("ajaxurl", c).css({
                                    color: "#0B73BB"
                                }))
                            }, 1e3)
                    }
                    return 1 != a.state ? (a.type ? ZDK.module.poptip({
                        target: c.find("input").eq(parseInt(a.type)),
                        theme: "ui-verify-tips",
                        content: '<p class="ui-warning-min">' + a.msg + "</p>",
                        width: 16 * a.msg.length + 45,
                        cache: !1,
                        zIndex: 501
                    }) : ZDK.Tips(a.msg, 3e3, "error"), b._refreshVerify()) : (b._panel.resetBody(b._getPhoneValidHtml(3)), c.find("input[name='kid']").val(a.kid), c.find("#phone-num").html(a.mobile), c.find("#rePot").attr("key", a.key), c.find("#save").click(function() {
                        return $.ajax({
                            url: c.find("#signup").attr("action"),
                            data: c.find("#signup").serialize() + "&jsonpcallback=?",
                            dataType: "jsonp",
                            jsonp: "jsonpcallback",
                            success: function(a) {
                                1 == a.state ? b._callback ? b._callback(a, b._panel) : ZDK.Tips("注册成功！", 3e3, "success") : ZDK.Tips(a.msg, 3e3, "warning")
                            }
                        }), !1
                    }), c.find("#rePot").click(function() {
                        var b = $(this),
                            e = c.find("input[name='kid']").val();
                        return "javascript:void(0)" != b.attr("ajaxurl") && $.ajax({
                            type: "post",
                            url: b.attr("ajaxurl"),
                            data: "key=" + b.attr("key") + "&kid=" + e + "&jsonpcallback=?",
                            dataType: "jsonp",
                            jsonp: "jsonpcallback",
                            success: function(a) {
                                1 == a.state ? d(b) : 1 == a.limit ? (b.attr("ajaxurl", "javascript:void(0)").html(a.msg).css({
                                    color: "#999"
                                }), ZDK.Tips(a.msg, 3e3, "warning")) : ZDK.Tips(a.msg, 3e3, "warning")
                            },
                            error: function() {
                                ZDK.Tips(a.msg, 3e3, "warning")
                            }
                        }), !1
                    })), !1
                }
                var b = this,
                    c = b._panel.Body,
                    d = c.find(".j_form_signup");
                if (d.data("loading") !== !0) {
                    d.data("loading", !0);
                    var e = ("regcallback" + +new Date, d.attr("action")); - 1 != e.indexOf("?jsonpcallback") && (e = e.substr(0, e.indexOf("?jsonpcallback"))), d.attr("action", e), $.ajax({
                        type: "post",
                        url: e,
                        data: d.serialize(),
                        dataType: "jsonp",
                        jsonp: "jsonpcallback",
                        success: function(b) {
                            a(b), d.data("loading", !1)
                        }
                    })
                }
            },
            _validate: function(a) {
                var b = this,
                    c = ZDK.module.verify({
                        target: a,
                        button: a.find(".j_btn_submit"),
                        errorClass: "error",
                        successClass: "success",
                        warningClass: "warning",
                        asynClass: "loading",
                        holderLeft: 10,
                        holderTop: 10
                    });
                c.on("itemfocus", function(a) {
                    var b = a.item.find(".help-inline");
                    b.show()
                }).on("checkerror", function(a) {
                    var b = a.item.find(".help-inline");
                    b.attr("data-title") || b.attr("data-title", b.html()), b.html(a.res)
                }).on("checksuccess", function(b) {
                    if (!a.hasClass("j_form_login")) {
                        var d = 0 ^ b.item.attr("data-index");
                        if (3 == d) {
                            var e = c.items.eq(3),
                                f = e.find("input"),
                                g = f.val();
                            if (/^[0-9]/.test(g)) return c.changeState(f, e, "error"), b.item.find(".help-inline").html("昵称不能以数字开头！"), !1
                        } else if (2 == d) {
                            var h = b.item.parent(".control-group").prev(".control-group");
                            if (b.input.val() != h.find("input[type='password']").val()) return c.changeState(b.input, b.item, "error"), b.item.find(".help-inline").html("两次密码必须一致！"), !1
                        } else if (1 == d) {
                            var e = c.items.eq(2),
                                f = e.find("input");
                            f.val() && (f.val() !== b.input.val() ? (c.changeState(f, e, "error")(f, e, "success", !0, c), e.find(".help-inline").html("两次密码必须一致！")) : (e.find(".help-inline").html("确认登录密码"), c.changeState(f, e, "sucess")(f, e, "error", !0, c)))
                        }
                        if (1 !== d) {
                            var i = b.item.find(".help-inline");
                            i.html("")
                        }
                    }
                }).on("asyning", function(a) {
                    var b = 0 ^ a.item.attr("data-index");
                    (0 == b || 2 == b) && a.item.find(".help-inline").html(d("checkloading"))
                }).on("asynError", function(a) {
                    var b = 0 ^ a.item.attr("data-index");
                    (0 == b || 3 == b) && a.item.find(".help-inline").html(a.json.msg)
                }).on("asynSuccess", function(a) {
                    var b = 0 ^ a.item.attr("data-index");
                    (0 == b || 3 == b) && a.item.find(".help-inline").html("")
                }).on("submitBefore", function() {
                    return a.hasClass("j_form_login") ? b._submitLogin() : b._submitRegister(), !1
                })
            },
            _refreshVerify: function() {
                var a = this._panel.Body.find(".j_verify_ctn"),
                    b = a.find("img"),
                    c = a.find("input[type=hidden]"),
                    d = b.attr("src"),
                    e = +new Date;
                d = (d + "").replace(/seed=(\w+)/, function() {
                    return "seed=" + e
                }), b.attr("src", d), a.find("input").not("[type=hidden]").val(""), c.val(e)
            },
            _getPhoneValidHtml: function() {
                var a = this.passportUrl;
                return '<div class="bcf-brc win-th-phone"><h3 class="tit">马上验证手机，激活你的账号！</h3><p class="status mt10">验证码已通过短信发送至<font color="#ff6600" id="phone-num">135******58</font>，请输入完成验证</p><p class="alt">手机绑定是为保障用户的信息真实性和帐号安全性</p><div class="control-group clearfix"><form method="post" action="' + a + '/register/verify" id="signup"><div max="16" min="6" placeholder="请输入验证码" required="" class="controls ui-form-item" data-index="0"><input type="text" name="ticket" tabindex="1" placeholder="请输入验证码"></div><a id="save" href="javascript:void(0);" class="butn max-butn max-butn-green"><i></i>验证</a><input type="hidden" name="kid"></form></div><p class="resh-time">若长时间未收到，请点此<a href="javascript:void(0);" ajaxurl="' + a + '/register/resend" class="ml10" id="rePot">重新发送</a></p></div>'
            },
            _isTopBarlogined: function() {
                return !!$(".ui-header-logined").length
            },
            _processLogin: function() {
                function a(a, b, c) {
                    var d;
                    return d = window.PPInfo && window.PPInfo.baseURI ? window.PPInfo.baseURI : document.domain, "http" + (c ? "s" : "") + "://" + a + "." + d + b
                }

                function b() {
                    c(".header-user .user-reg, .header-user .user-login", function() {
                        var b = '<a href="' + a("home", "/" + ZDK.cookie.getCookie("userid") + "/") + '" class="user-name">' + ZDK.cookie.getCookie("brandname") + '</a><span class="delimiter">|</span><a href="' + a("login", "/login/dologout", "https") + '">退出登录</a>';
                        $(".header-user").html(b)
                    })
                }

                function c(a, b) {
                    $(a).click(function(a) {
                        a.preventDefault(), ZDK.passport.quickLogin(b)
                    })
                }
                b()
            }
        }), ZDK.passport = new c, ZDK.passport.refreshTopbar(), ZDK.passport._processLogin(), b.passport = c, ZDK.procopy(c, ZDK.EventEmitter)
    }), ZDK.define("module.wtaid", function(a, b) {
        var c = b.wtaid = function() {},
            d = /<script\s*type=['"]?([^'"]+)['"]?>([\w\W]+?)<\/script>/gim,
            e = {};
        return c.callee = function(a, b, c) {
            function d() {
                return (void 0 == c.cache || c.cache) && (wtaid = e[c.id]) ? ($.extend(wtaid.opche, c), wtaid.trigger("cache", {
                    target: wtaid
                }), wtaid.reset && wtaid.reset(), wtaid.show()) : void 0
            }
            c.id || (c.id = "string" == typeof c.content && c.content ? ZDK.hash(c.content) : ZDK.uuid());
            var f = c.target;
            if (f) {
                if (f.hasClass("childs")) {
                    var g = f.attr("flag");
                    if (g > 0 && c.cache) return d();
                    f.attr("flag", ++g)
                }
            } else d();
            return a instanceof b ? void a.entry(c) : new b(c)
        }, c.prototype = {
            entry: function(a) {
                function b() {
                    return -1 == d.pageurl.indexOf(location.host) || -1 != d.pageurl.indexOf("jsonpcallback")
                }
                var c = this.opche = $.extend({
                        target: null,
                        title: "弹出窗口",
                        id: null,
                        content: "",
                        iframe: !1,
                        cache: !0,
                        allowClose: !0,
                        escClose: !1,
                        cancel: !0,
                        ok: !0,
                        height: "auto",
                        width: 560,
                        onInited: null,
                        zIndex: 100,
                        mask: !0,
                        theme: "",
                        doc: document,
                        version2: !1
                    }, a),
                    d = this;
                c.cache && (e[a.id] = d), !($.browser.msie && "6.0" == $.browser.version && !$.support.style) && (this.opche.hasIframe = !1), ((d.pageurl = !1) || "string" == typeof c.content) && c.content.match(/^([^<>]+|[a-z\/.\?%@&=]+)$/i) && (d.pageurl = c.content), c.iframe = c.iframe && d.pageurl, c.escClose = c.escClose && c.allowClose, d.pageurl && (d.jsonp = !1, b() && (d.jsonp = !0)), d.init(this)
            },
            init: function(a) {
                if (a.create(), a.Wrap = a.Wrap || a.Window, a.bindTarget(a.Window), a.pageurl) {
                    if (a.opche.iframe) return a.bindIframe();
                    a.on("click:wtaid-reasyn", function() {
                        a.Body.html('<p class="ui-initwait">正在重新连</a>'), a.pageurl += (a.pageurl.indexOf("?") > -1 ? "&" : "?") + "t=" + ZDK.uuid(), a.asyn()
                    }), a.asyn()
                } else a.Body.html("").append(a.opche.content);
                a.show(), a._inited(a), a.opche.onInited && a.opche.onInited(a), a.Wrap.css("z-index", a.opche.zIndex)
            },
            _inited: function(a, b, c) {
                (c = a.opche.width) && a.resetWidth(c), (c = a.opche.height) && "auto" != c && a.resetHeight(c), a.inited && a.inited(), a.bind && a.bind(), a.trigger("inited", $.extend({
                    target: b || null
                })), a.reset && a.reset(), a.ready = !0, a.opche.isWindow || a.Window.mousedown(function(a) {
                    a.stopPropagation()
                }), a.opche.onContentLoaded && a.opche.onContentLoaded(a)
            },
            asyn: function() {
                function a(a) {
                    var b = " if(window.healthBtnClicked) {								var paywin = ZDK.module.window({									title: '完成支付',									content: '',									cache: false,									width: 550,									cancel:'支付失败',									ok: '支付成功',									onInited: function(win) {										win.resetBody('是否支付成功?');									}								});								paywin.on('onok',function(){									$(window).trigger('payok');								});								window.open(json.msg);							} else {								window.location.href = json.msg;							}";
                    return a = a.replace(/window\.location\.href\s?=\s?json\.msg;/, b), b = " if(window.healthBtnClicked) {								$(window).trigger('operationok');							}							$('.task_content').html(json.msg.content);							", a = a.replace(/\$\('\.task_content'\)\.html\(json\.msg\.content\);/, b), b = " if(window.healthBtnClicked) {								$(window).trigger('operationok');							}							$('#invite-num').html('('+json.num+')');							", a = a.replace(/\$\('#invite-num'\)\.html\('\('\+json\.num\+'\)'\);/, b)
                }
                var b = this,
                    c = {
                        type: "post",
                        url: b.pageurl,
                        dataType: b.jsonp ? "jsonp" : "html",
                        timeout: 3e4,
                        error: function(a, c, d) {
                            return b.trigger("asynerror", {
                                status: c
                            }), "timeout" == c ? (d = "服务器连接超时", a = "ui-warning") : (d = "服务器连接错误", a = "ui-error"), b.Body.html('<p class="ui-warning">' + d + ',请<a href="javascript:;" action-type="wtaid-reasyn">重试</a>!</p>'), !1
                        },
                        success: function(c) {
                            var e = "string" == typeof c ? c : c.msg || c.html || c.data || "",
                                f = [];
                            if (!e) return b.trigger("asynerror", {
                                status: "error"
                            });
                            if (0 === e.indexOf("{")) {
                                var g = new Function("return " + e)();
                                if (1 != g.state) return b.hide(), ZDK.Tips(g.msg, 2e3, "warning");
                                e = g.msg
                            }
                            b.Body[0].innerHTML = e.replace(d, function(b, c, d) {
                                return "text/tpl" !== c ? (d = a(d), f.push(d), "") : d
                            }), b.script(f.length ? f.join(";") : ""), b._inited(b)
                        }
                    };
                b.show(), b.jsonp && (c.type = "jsonp"), b.jsonp && (c.type = "jsonp", c.url = b.pageurl.indexOf("jsonpcallback") <= 0 ? b.pageurl + (b.pageurl.indexOf("?") > -1 ? "&" : "?") + "jsonpcallback=?" : b.pageurl), b.opche.contentType && "img" == b.opche.contentType ? $('<img style="padding:10px"/>').on("load", function() {
                    b.opche.maxWidth && $(this).css("maxWidth", b.opche.maxWidth), b.opche.maxHeight && $(this).css("maxHeight", b.opche.maxHeight), b.Body.empty().append($(this));
                    var a = /MSIE 6/i.test(navigator.userAgent);
                    a && b.opche.maxWidth && this.width > b.opche.maxWidth && $(this).css("width", b.opche.maxWidth), b.resetWidth($(this).width() + 22), b._inited(b)
                }).on("error", function() {
                    b.trigger("asynerror", {
                        status: "error"
                    });
                    return !1
                }).attr("src", b.pageurl) : $.ajax(c)
            },
            script: function(a) {
                if (a) try {
                    new Function(a).call(this)
                } catch (b) {
                    throw new Error("WTaid asyn script error!")
                }
            },
            show: function() {
                this.isshow = !0, !1 !== this.trigger("showbefore", {
                    target: this
                }) && this.Wrap.show(), this.trigger("onshow", {
                    target: this
                }), this.resetPosition && this.resetPosition();
                var a = this;
                setTimeout(function() {
                    a.thide && $(a.opche.doc).bind("mousedown", {
                        self: a
                    }, a.thide)
                }, 0), a.opche.mask && ZDK.mask(a.opche.doc), a.opche.version2 && $("html", a.opche.doc).addClass("ui-noscroll")
            },
            hide: function() {
                this.target && "thinks" == this.target.attr("act-type") && this.target.parents(".user-red").removeAttr("style"), this.isshow && (this.isshow = !1, !1 !== this.trigger("hidebefore", {
                    target: this
                }) && this.Wrap.hide(), this.trigger("hide", {
                    trigger: this
                }), this.thide && $(this.opche.doc).unbind("mousedown", this.thide), this.opche.mask && ZDK.mask(!0, null, this.opche.doc), !this.opche.cache && this.Wrap.remove(), this.trigger("posthide", {
                    trigger: this
                })), this.opche.version2 && $("html", this.opche.doc).removeClass("ui-noscroll")
            },
            resetHeight: function(a) {
                a && (this.Body.css("height", a), this.trigger("resetHeight", {
                    height: a,
                    target: this
                }), this.resetPosition && this.resetPosition())
            },
            getHeight: function() {
                return this.Body.height()
            },
            resetWidth: function(a) {
                a && (this.opche.width = a, this.Window.css("width", a), this.trigger("resetWidth", {
                    width: a,
                    targer: this
                }))
            },
            getWidth: function() {
                return this.Window.width()
            },
            bindIframe: function() {
                var a = this,
                    b = a.pageurl,
                    c = a.opche;
                return a.Iframe = $('<iframe style="display:none;width:100%;border:none;" frameborder="0" scrolling="no" src="' + b + '"  ></iframe>'), a.Iframe.bind("load", function(b) {
                    a.Iframe.show(), a.Iframe.css("height", "auto" !== c.height ? c.height || 350 : 350), a.Body.html("").append(a.Iframe), a.trigger("iframeonload", {
                        iframe: a.Iframe
                    }), a.ready = !0, a.bind && a.bind(), (b = a.opche.width) && a.resetWidth(b), (b = a.opche.height) && "auto" != b && a.resetHeight(b), a._inited(a)
                }), $(c.doc.body).append(a.Iframe)
            }
        }, ZDK.procopy(c, ZDK.EventDelegate)
    }), ZDK.define("module.verify", function(require, exports) {
        function Lang(a) {
            var b = {
                required: "该字段为必填项！",
                min: "该字段最小长度不能低于{min}位！",
                max: "该字段最大长度不能高于{max}位！",
                pattern: "该字段不满足模式条件！",
                "int": "请输入正确的整型！",
                email: "请输入正确的邮件(email)地址！",
                url: "请输入正确的URL地址！",
                date: "请输入正确的日期格式!",
                time: "请输入正确的时间格式!",
                qq: "请输入正确的QQ号码",
                tel: "请输入正确的手机号码",
                phone: "请输入正确的座机号码",
                contact: "不能包含联系方式！"
            };
            return b[a] || ""
        }
        require("module.poptip"), require("module.window");
        var Verify = exports.verify = function(a) {
                return this instanceof arguments.callee ? void this.entry(a) : new arguments.callee(a)
            },
            regForm = /form/i;
        return Verify.prototype = {
            entry: function(a) {
                if (this.opche = $.extend({
                        target: null,
                        button: null,
                        item: ".ui-form-item",
                        focusClass: "ui-form-focus",
                        successClass: "ui-form-success",
                        errorClass: "ui-form-error",
                        hoverClass: "ui-form-hover",
                        asynClass: "ui-form-asyn",
                        warningClass: "ui-form-warning",
                        oninited: null,
                        holderLeft: 5,
                        holderTop: 5,
                        alertType: !0
                    }, a), this.target = $(this.opche.target), this.button = $(this.opche.button), 0 != this.target.length) {
                    if (!regForm.test(this.target[0].nodeName)) throw new Error("The target must is a form element!");
                    for (var b, c = "focus,hover,error,success,asyn,warning".split(","), d = c.length - 1; d >= 0; d--) this["i" + (b = c[d])] = "string" == typeof this.opche[b += "Class"] ? this.opche[b].replace(".", "") : !1;
                    this.asyning = !1, this.asynCache = {}, this.asynQueue = [], this.asynResult = {}, this.asynError = {}, this.asynSuccess = {}, this.result = {}, this.errorTips = [], this.bind(), this.opche.oninited && this.opche.oninited(this)
                }
            },
            forceSubmit: function() {
                this.foSubmit = !0, this.target.submit(), this.foSubmit = !1
            },
            bind: function() {
                var a = this;
                this.target.unbind("submit"), this.button.unbind("click").bind("click", function() {
                    return a.target.submit(), !1
                }), this.target.submit(function() {
                    return !0 !== a.submit() || !a.foSubmit && !1 === a.trigger("submitBefore") ? !1 : !0
                }), (this.items = this.target.find(this.opche.item)).each(function(b, c) {
                    var c = $(c),
                        d = c.find(":input").not("[type=hidden]") || c.find(":textarea"),
                        e = d.attr("name");
                    c.attr("data-index", b), a.bindItem(d, c, e), d.attr("tabIndex", 1 + b)
                }), this.trigger("bind", {
                    verify: this
                })
            },
            bindItem: function(a, b, c) {
                var d = this,
                    e = Verify.fn.ajaxurl(b),
                    f = e.indexOf("http") > -1,
                    g = b.attr("autofocus"),
                    h = b.attr("placeholder"),
                    i = b.attr("focustips");
                d.trigger("bindItem", {
                    input: a,
                    item: b,
                    name: c
                }), a.focus(function() {
                    d.ifocus && d.changeState(a, b, "focus"), i && Verify.fn.focustips(a, b, i, c, !0), d.trigger("itemfocus", {
                        input: a,
                        item: b
                    })
                }).blur(function() {
                    b.attr("noblur") || (d.checkItem(a, b, c) && e && d.asyn(a, b, e, c, f), d.ifocus && d.changeState(a, b, "focus", !0), i && Verify.fn.focustips(a, b, c), d.trigger("itemblur", {
                        input: a,
                        item: b
                    }))
                }), d.ihover && b.hover(function() {
                    d.changeState(a, b, "hover")
                }, function() {
                    d.changeState(a, b, "hover", !0)
                }), h && Verify.fn.placeholder(a, b, h, d), g && Verify.fn.autofocus(b)
            },
            asyn: function(a, b, c, d, e, f) {
                var g, h, i = this,
                    j = d + "=" + (g = a.val()),
                    k = ZDK.hash(c);
                return !f && (i.asynCache[k + g] || i.asynCache[k]), !f && i.asyning ? (i.asynCache[k] = !0) && i.asynQueue.push([a, b, c, d, e]) : (i.trigger("asyning", {
                    input: a,
                    item: b,
                    asyn: c,
                    jsonp: e
                }), i.iasyn && i.changeState(a, b, "asyning")(a, b, "success", !0, i), (h = Verify.fn.parameter(b)) && (j += "&" + h), void $.ajax((i.asyning = !0) && e ? {
                    url: c,
                    dataType: "jsonp",
                    jsonp: "jsonpcallback",
                    data: j,
                    success: function(e) {
                        i.asynCallback(e, a, b, c, d, g)
                    }
                } : {
                    url: c,
                    dataType: "html",
                    data: j,
                    type: "post",
                    success: function(e) {
                        e = new Function("return " + e)(), i.asynCallback(e, a, b, c, d, g)
                    },
                    error: function() {}
                }))
            },
            asynCallback: function(a, b, c, d, e, f) {
                var g, h = this;
                (g = h.asynQueue.pop()) && g.push(!0) ? h.asyn.apply(h, g) : h.asyning = !1;
                var i = ZDK.hash(d);
                h.iasyn && h.changeState(b, c, "asyning", !0), h.asynCache[i] = !1, 1 == a.state ? (h.asynCache[i + f] = !0, 0 != h.trigger("asynSuccess", {
                    json: a,
                    input: b,
                    item: c,
                    name: e,
                    val: f
                }) && (h.changeState(b, c, "error", !0)(b, c, "success", !1, h)(b, c, "asyning", !0, h), h.asynResult[e] = !0, delete h.asynError[e], h.asynSuccess[e] = a.msg)) : (h.asynResult[e] = !1, h.trigger("asynError", {
                    json: a,
                    input: b,
                    item: c,
                    name: e,
                    val: f
                }), h.asynError[e] = a.msg, h.changeState(b, c, "error"), delete h.asynSuccess[e])
            },
            checkItem: function(a, b, c) {
                if (a.is(":disabled") && "required" != c) return !0;
                var d, e, f, g = a.val(),
                    h = this,
                    i = !0;
                "checkbox" == a.attr("type") && (g = a.attr("checked")), h.result[c] = !1;
                for (var j in Verify.property)
                    if (void 0 !== (d = b.attr(j)) && d && "string" == typeof(e = Verify.property[j](d, g, b))) {
                        i = !1, e = b.attr(d + "tips") || e;
                        break
                    }
                if (i && !g) return !0;
                if (i && (f = b.attr("type")) && f in Verify.type && g && !Verify.type[f](g, b) && (i = !1, e = Lang(f)), (f = b.attr("notype")) && g) {
                    var k = {
                        email: function(a) {
                            return /[a-zA-Z0-9_+.-]+\@([a-zA-Z0-9-]+\.)+[a-zA-Z0-9]{2,4}$/.test(a)
                        },
                        qq: function(a) {
                            return /[0-9]{5,10}$/.test(a)
                        },
                        tel: function(a) {
                            var b = /1[345678]\d{9}$/.test(a),
                                c = /^852\d{8}$/.test(a),
                                d = /^853\d{8}$/.test(a);
                            return b || c || d
                        },
                        phone: function(a) {
                            return /(?:\d{3,4})\d{6-8}$/.test(a)
                        }
                    };
                    "contact" == f ? (k.phone(g, b) || k.tel(g, b) || k.email(g, b) || k.qq(g, b)) && (i = !1, e = Lang(f)) : f == Verify.type && k[f](g, b) && (i = !1, e = Lang(f))
                }
                if (h.isubmit && !1 === h.asynResult[c] && (e = h.asynError[c], i = !1), e = i ? h.asynSuccess[c] || e : e, 0 == i) {
                    if (!b.attr("noblur") && "pop" != this.opche.alertType) {
                        h.trigger("checkerror", {
                            input: a,
                            item: b,
                            name: c,
                            res: e
                        }), h.ierror && h.changeState(a, b, "error")(a, b, "success", !0, h)(a, b, "warning", !0, h);
                        try {
                            var l = b.find(".help-inline");
                            l.get(0).defText && l.html(l.get(0).defText), b.attr("notype") && l.html(e)
                        } catch (m) {}
                    }
                    return h.isubmit && "text" != this.opche.alertType && Verify.fn.errortips && Verify.fn.errortips(a, b, h.errorTips.push(e) && e, c, !1, this), i
                }
                if (!1 === h.trigger("checksuccess", {
                        input: a,
                        item: b,
                        name: c,
                        res: e
                    })) return !1;
                if (!b.attr("noblur") && "pop" != this.opche.alertType) {
                    h.isuccess && h.changeState(a, b, "success"), h.changeState(a, b, "error", !0);
                    try {
                        var l = b.find(".help-inline");
                        l.get(0).defText || (l.get(0).defText = l.html()), l.html("")
                    } catch (m) {}
                }
                return h.result[c] = !0
            },
            changeState: function(a, b, c, d, e) {
                var f, g = "";
                if ("boolean" != typeof d && (e = d, d = !1), e = e || this, d && f) return arguments.callee;
                switch (c) {
                    case "success":
                        g = f ? e.ierror : e.isuccess;
                        break;
                    case "error":
                        g = e.ierror;
                        break;
                    case "warning":
                        g = e.iwarning;
                        break;
                    case "asyning":
                        g = e.iasyn;
                        break;
                    case "focus":
                        g = e.ifocus;
                        break;
                    default:
                        return arguments.callee
                }
                return g && (b[d ? "removeClass" : "addClass"](g), a[d ? "removeClass" : "addClass"](g)), arguments.callee
            },
            submit: function() {
                var a = this.items.length,
                    b = 0,
                    c = this;
                return this.errorTips = [], this.isubmit = !0, !1 !== c.trigger("scheckBefore", {
                    target: c
                }) && c.items.each(function(a, d) {
                    var d = $(d),
                        e = d.find(":input").not("[type=hidden]");
                    return 0 == e.length || c.checkItem(e, d, e.attr("name")) ? void++b : !1
                }), this.isubmit = !1, a === b
            }
        }, Verify.tips = function() {
            var a, b, c, d = function(a) {
                return c && clearTimeout(c), c = setTimeout(function() {
                    a && a.hide(), c = null
                }, 3e3)
            };
            return function(c, e, f, g, h, i) {
                var j = arguments.callee;
                return j[b] && j[b].hide(), 3 == arguments.length ? j[g] && j[g].hide() : (a = ZDK.module.poptip({
                    target: c,
                    content: '<p class="ui-warning-min">' + f + "</p>",
                    align: !0,
                    theme: "ui-verify-tips ui-poptip-bottom",
                    width: 50 + 16 * f.length,
                    height: 32,
                    id: "verify-tips-" + g,
                    rebody: !0,
                    zIndex: 1e4,
                    datatitle: f,
                    hasIframe: !0,
                    datafocus: h
                }), i && i.trigger("ontips", {
                    title: f,
                    input: c,
                    item: e
                }), j[b = g] || (a.on("cache", function(a) {
                    var b = a.target;
                    b.resetWidth(50 + 16 * b.opche.datatitle.length), b.resetBody('<p class="ui-warning-min">' + b.opche.datatitle + "</p>"), b.reset(), !b.opche.datafocus && d(b)
                }), j[g] = a), void(!h && d(a) && c.focus()))
            }
        }(), Verify.type = {
            "int": function(a) {
                return /^[0-9]+$/.test(a)
            },
            userid: function(a) {
                return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(a)
            },
            email: function(a) {
                return /^[a-zA-Z0-9_+.-]+\@([a-zA-Z0-9-]+\.)+[a-zA-Z0-9]{2,4}$/.test(a)
            },
            url: function(a) {
                return /^http:\/\/[A-Za-z0-9]+\.[A-Za-z0-9]+[\/=\?%\-&_~`@[\]\':+!]*([^<>\"\"])*$/.test(a)
            },
            date: function(a, b) {
                var c = (b.attr("dateformat") || "YYYY-MM-DD").toUpperCase();
                c = c.replace("YYYY", "[12][09][0-9][0-9]").replace("YY", "[7-9][0-9]").replace("MM", "[10][0-9]").replace("M", "[10]?[0-9]").replace("DD", "[0-3][0-9]").replace("D", "[0-3]?[0-9]");
                try {
                    c = new RegExp("^" + c + "$")
                } catch (d) {
                    throw "DataFormat is error:" + c
                }
                return c.test(a)
            },
            time: function(a) {
                return /^[0-2][0-9]:[0-5][0-9]:[0-5][0-9]$/.test(a)
            },
            qq: function(a) {
                return /^[0-9]{5,10}$/.test(a)
            },
            tel: function(a) {
                var b = /1[345678]\d{9}$/.test(a),
                    c = /^852\d{8}$/.test(a),
                    d = /^853\d{8}$/.test(a);
                return b || c || d
            },
            phone: function(a) {
                return /^(?:\d{3,4})\d{6-8}$/.test(a)
            }
        }, Verify.property = {
            required: function(a, b) {
                return void 0 !== a ? b ? !0 : Lang("required") : !0
            },
            min: function(a, b) {
                var c = b.replace(/[\u4e00-\u9fa5]/g, "**").length;
                return b ? c >= a ^ 0 ? !0 : Lang("min").replace("{min}", a) : !0
            },
            max: function(a, b) {
                var c = b.replace(/[\u4e00-\u9fa5]/g, "**").length;
                return b ? a >= c ^ 0 ? !0 : Lang("max").replace("{max}", a) : !0
            },
            pattern: function(pattern, val, item) {
                if (pattern) {
                    try {
                        pattern = eval(pattern)
                    } catch (e) {
                        throw "The pattern error:" + pattern
                    }
                    return pattern.test(val) ? !0 : item.attr("patterntips") || Lang("pattern")
                }
                return !0
            }
        }, Verify.fn = {
            placeholder: function(a, b, c, d) {
                var e, f = a.eq(0).position();
                e = $('<em class="ui-form-placeholder">' + c + "</em>").css({
                    left: f.left + d.opche.holderLeft,
                    top: f.top + d.opche.holderTop
                }).appendTo(b), e.click(function() {
                    a.focus()
                }), a.eq(0).bind("focus", function() {
                    e[a.val() ? "hide" : "show"]()
                }).bind("keyup", function() {
                    e[a.val() ? "hide" : "show"]()
                }).bind("blur", function() {
                    a.val() || e.show()
                }), setTimeout(function() {
                    a.val() && e.hide()
                }, 100)
            },
            autofocus: function(a) {
                a.find(":input").focus()
            },
            ajaxurl: function(a) {
                return a.attr("ajaxurl") || ""
            },
            parameter: function(a) {
                return a.attr("parameter") || ""
            },
            focustips: function() {
                Verify.tips.apply(Verify, arguments)
            },
            errortips: function() {
                Verify.tips.apply(Verify, arguments)
            },
            successtips: !1
        }, ZDK.procopy(Verify, ZDK.EventEmitter)
    }), ZDK.define("module.window", function(a, b) {
        var c = a("module.wtaid").wtaid,
            d = b.window = function(a) {
                return a.zIndex = a.zIndex || 500, a.isWindow = !0, c.callee(this, arguments.callee, a)
            };
        d.prototype = {
            create: function() {
                d.create(this)
            },
            bind: function() {
                var a = this;
                a.opche.escClose && $(a.opche.doc).bind("keyup", function(b) {
                    27 == b.which && a.hide()
                })
            },
            reset: function() {
                this.resetPosition(), this.show(), this.opche.hasIframe && this.Window.find("iframe.ui-pop-bgd").css({
                    height: this.Window.height()
                })
            },
            resetPosition: function() {
                var a = this.Window.width(),
                    b = this.Window.height();
                this.Window.css({
                    "margin-left": -a / 2,
                    "margin-top": -b / 2
                })
            },
            resetTheme: function(a) {
                this.Window.addClass(a)
            },
            resetTitle: function(a) {
                this.Title.html(a)
            },
            resetBody: function(a) {
                this.Body.html(a)
            },
            setTitle: function(a) {
                return this.Title.html(a), this
            },
            setContent: function(a) {
                return this.Body.html(a), this.resetPosition(), this
            },
            setContentNode: function(a) {
                return this.Body.empty().append(a), this.resetPosition(), this
            },
            hideClose: function() {
                self.Close.hide()
            },
            resetFooter: function(a) {
                this.Footer.show(), this.Footer.html(a)
            },
            resetOkButton: function(a) {
                this.Footer.show(), this.Footer.find(".ui-window-ok").html(a)
            },
            resetCancelButton: function(a) {
                this.Footer.show(), this.Footer.find(".ui-window-cancel").html(a)
            },
            ok: function() {
                return "disabled" == this.Footer.find(".ui-window-ok").attr("disabled") ? !1 : void(0 != this.trigger("onok") && this.hide())
            },
            cancel: function() {
                0 != this.trigger("oncancel") && this.hide()
            }
        }, d.create = function(a) {
            var b, c = a.opche;
            if (b = ['<div class="ui-pop ' + c.theme + '">'], a.opche.hasIframe && b.push('<iframe scrolling="no" class="ui-pop-bgd" ' + (c.height && "auto" != c.height ? 'style="height:' + c.height + 'px"' : "") + "></iframe>"), b.push('<div class="ui-pop-header">'), b.push('<a href="javascript:;" class="ui-pop-close" action-type="pop-close" ' + (c.allowClose ? "" : 'style="display:none;"') + ">×</a>"), b.push("<h3>" + c.title + '</h3></div><div class="ui-pop-body"><p class="ui-initwait"> 正在加载中...</p></div>'), c.ok || c.cancel) {
                var d = '<div class="ui-pop-footer">';
                c.footer ? d += c.footer : (c.cancel && (d += '<button class="ui-btn ui-window-cancel" action-type="pop-cancel">' + ("string" == typeof c.cancel ? c.cancel : "取消") + "</button>"), c.ok && (d += '<button class="ui-btn ui-btn-inverse ui-window-ok" action-type="pop-ok">' + ("string" == typeof c.ok ? c.ok : "确定") + "</button>")), b.push(d + "</div>")
            } else b.push('<div class="ui-pop-footer" style="display:none;"></div>');
            b.push("</div>"), a.Window = $(b.join("")).appendTo(a.opche.doc.body), a.opche.version2 && (a.Wrap = $('<div class="ui-window2-wrap"></div>'), a.Wrap.append(a.Window), a.Wrap.appendTo(a.opche.doc.body)), a.Header = a.Window.find(".ui-pop-header"), a.Title = a.Header.find("h3"), a.Body = a.Window.find(".ui-pop-body"), a.Footer = a.Window.find(".ui-pop-footer"), a.Close = a.Window.find(".ui-pop-close"), d && (a.Ok = a.Footer.find(".ui-window-ok"), a.Cancel = a.Footer.find(".ui-window-cancel")), a.on("click:pop-cancel", function() {
                a.cancel()
            }).on("click:pop-ok", function() {
                a.ok()
            }).on("click:pop-close", function() {
                a.hide()
            })
        };
        try {
            return ZDK.procopy(d, c)
        } finally {
            d.Tips = function(a, b, c, e, f, g, h) {
                var i, j = d.one = d({
                    title: a,
                    content: e ? '<i class="ui-tips-icon iconfont">' + e + "</i>&nbsp;&nbsp;" + b : b,
                    id: "winalert" + ZDK.uuid(),
                    width: 430,
                    mask: !0,
                    cache: !1,
                    zIndex: 9e3,
                    close: !1,
                    hasIframe: !0,
                    cancel: "string" == typeof g ? g : g && !0,
                    ok: h || !0
                });
                return c && (i && clearTimeout(i), i = setTimeout(function() {
                    j.hide()
                }, c)), f && j.on("onok", function() {
                    return f()
                }), g && j.on("oncancel", function() {
                    "string" == typeof g ? j.hide() : g()
                }), j
            }, ZDK.Alert = function(a, b, c, e, f, g) {
                d.Tips(a, b, void 0 == c ? 4e3 : c, "&#xe819;", e, f, g)
            }, ZDK.Error = function(a, b, c, e, f, g) {
                d.Tips(a, b, void 0 == c ? 4e3 : c, "&#xe816;", e, f, g)
            }, ZDK.Success = function(a, b, c, e, f, g) {
                d.Tips(a, b, void 0 == c ? 4e3 : c, "&#xe814;", e, f, g)
            }, ZDK.Load = function(a) {
                var b, c, e = a ? a : {},
                    f = e.title ? e.title : "系统提示",
                    g = e.url ? e.url : "",
                    h = e.dataType ? e.dataType : "html",
                    i = e.callback ? e.callback : !1,
                    j = e.errback ? e.errback : !1,
                    k = e.loadback ? e.loadback : !1,
                    l = e.width ? e.width : 430,
                    m = e.ok ? e.ok : !1,
                    n = e.cancel ? e.cancel : !1,
                    o = e.zIndex ? e.zIndex : 9e3;
                $.ajax({
                    url: g,
                    type: e.type || "get",
                    dataType: h,
                    success: function(a) {
                        b = a, c = h ? "<div>" + a.msg + "</div>" : a;
                        var e = d.one = d({
                            title: f,
                            content: "html" == h ? a : c,
                            id: "winalert" + ZDK.uuid(),
                            width: l,
                            mask: !0,
                            cache: !1,
                            zIndex: o,
                            close: !1,
                            hasIframe: !0,
                            ok: m,
                            cancel: n
                        });
                        i && e.on("onok", function() {
                            return i(e, b), !1
                        }), j && e.on("oncancel", function() {
                            j()
                        }), k && k(e)
                    },
                    error: function() {
                        c = "加载失败，请刷新页面后重试..."
                    }
                })
            }
        }
    }), ZDK.define("module.page", function(a, b) {
        var c = function() {},
            d = +new Date,
            e = "page:" + d,
            f = {};
        return c.prototype = {
            init: function() {
                var a = this;
                return $(document.body).click(function(b, c) {
                    (c = b.target.getAttribute("act-type")) ? a.click(b, c): (c = b.target.parentNode.getAttribute("act-type")) && $(b.target.parentNode).click()
                }), this
            },
            click: function(a, b) {
                var c = {},
                    g = $(a.target),
                    h = a.target[e] || (a.target[e] = d++);
                f[b] || (f[b] = {}), f[b][h] || (f[b][h] = {}), f[b][h].call || (f[b][h].call = g.attr("act-call")), f[b][h].data || (f[b][h].data = this.makeData(g.attr("act-data"))), c.ETarget = g, c.aurl = g.attr("act-href") || g.attr("data-href"), c.event = a, $.extend(c, f[b][h].data), this.trigger("page:" + b, c)
            },
            makeData: function(a) {
                var b = {};
                if (a)
                    for (var c, d = a.split("&"), e = 0; c = d[e++];) {
                        var f = c.split("=");
                        b[f[0]] = f[1]
                    }
                return b
            },
            getData: function(a) {
                var b = [];
                if (a) {
                    a = this.clearData(a);
                    for (var c in a) b.push(c + "=" + a[c])
                }
                return b.join("&")
            },
            clearData: function(a) {
                var b = {
                        reload: 1,
                        aurl: 1,
                        target: 1,
                        ETarget: 1,
                        event: 1,
                        closest: 1
                    },
                    c = {};
                if (a)
                    for (var d in a) d in b || (c[d] = a[d]);
                return c
            },
            AJAX: function(a, b, c, d) {
                var e, f = a.indexOf(document.domain) > -1 && location.host == document.domain ? !1 : !0,
                    g = {
                        success: function(a) {
                            a.state > 0 ? c && c(a) : d && d(a)
                        },
                        error: function() {
                            c({
                                state: 1,
                                msg: ""
                            }), d && d({
                                msg: "系统错误:" + arguments[1]
                            })
                        }
                    };
                f ? (a += (a.indexOf("?") > -1 ? "&" : "?") + (e = this.getData(b)) + (e ? "&" : "") + "jsonpcallback=?", g.dataType = "jsonp", g.jsonp = "jsonpcallback") : g.dataType = "json", g.url = a, b = this.clearData(b), g.data = b, $.ajax(g)
            },
            runCall: function(a, b) {
                var c = a[0] ? a[0][e] : !1;
                if (c && (b = f[b][c])) switch (b.call) {
                    case "reload":
                        window.location.reload();
                        break;
                    case "clear":
                        b.data.closest ? a.closest(b.data.closest).remove() : a.parent().remove()
                }
            }
        }, ZDK.procopy(c, ZDK.EventEmitter), b.page = (new c).init()
    }), ZDK.define("module.poptip", function(a, b) {
        var c = a("module.wtaid").wtaid,
            d = b.poptip = function(a) {
                return a.mask = !1, c.callee(this, arguments.callee, a)
            };
        return d.prototype = {
            create: function(a) {
                d.create(this, a)
            },
            bind: function() {
                var a = this;
                a.target = $(this.opche.target)
            },
            thide: function(a) {
                var b = a.data.self,
                    c = a.target;
                return c && c.nodeName && "WEBDATEDAYITEM" == c.nodeName.toUpperCase() ? !1 : void(("undefined" == typeof b.opche.autoclose || 0 != b.opche.autoclose) && 1 === a.which && b.hide())
            },
            reset: function() {
                {
                    var a, b = this,
                        c = b.target.offset(),
                        d = {},
                        e = b.target.outerWidth(!0),
                        f = b.target.outerHeight(),
                        g = b.Window.outerWidth(),
                        h = b.Window.outerHeight(),
                        i = $(window).width();
                    $(window).height()
                }
                d.left = c.left, d.top = c.top + f + 15, b.opche.autoreset && (c.top < h + $(b.opche.doc.body).scrollTop() + 30 ? (b.Window.addClass("ui-poptip-bottom").removeClass("ui-poptip-top"), a = !0) : b.Window.hasClass("ui-verify-tips") || b.Window.addClass("ui-poptip-top").removeClass("ui-poptip-bottom")), b.opche.right || i - d.left < g ? (d.left = c.left + e - g, b.Arrow.css({
                    left: "auto",
                    right: b.opche.arrowOffset || 7
                })) : b.Arrow.css({
                    left: 17,
                    right: "auto"
                }), b.opche.right && d.left < 10 && (d.left = c.left, b.Arrow.css({
                    left: b.opche.arrowOffset || 17,
                    right: "auto"
                })), !a && b.opche.bottom && (d.top = c.top - 15 - h), b.Window.hasClass("ui-verify-tips") && (d.top -= 10), this.Window.css({
                    top: d.top + (this.opche.offTop || 0),
                    left: d.left + (this.opche.offLeft || 0)
                }), this.show()
            },
            resetBody: function(a) {
                this.Body.html(a)
            },
            resetWidth: function(a) {
                this.Window.css({
                    width: a
                })
            }
        }, d.create = function(a) {
            var b, c = a.opche;
            c.bottom && (c.theme += " ui-poptip-top"), b += '<div class="ui-poptip ' + c.theme + '"><div class="ui-poptip-arrow"><i></i></div><div class="ui-poptip-bd"><p>  正在加载中... </p></div></div>', a.Window = $(b).appendTo(a.opche.doc.body), a.Body = a.Window.find(".ui-poptip-bd"), a.Arrow = a.Window.find(".ui-poptip-arrow"), c.right && a.Arrow.css({
                left: "auto",
                right: 20
            })
        }, ZDK.procopy(d, c)
    }), ZDK.define("pagewindow", function(a) {
        function b(a, b) {
            {
                var c = a.event,
                    d = e.getData(a);
                $(c.target)
            }
            d && (a.aurl += (a.aurl.indexOf("?") > -1 ? "&" : "?") + e.getData(a));
            try {
                if (1 == $(c.target).get(0).clickMark) return
            } catch (f) {}
            $(c.target).get(0).clickMark = 1;
            var g = $(c.target);
            e.AJAX(a.aurl, a, function() {
                g.get(0).clickMark = 0, g.get(0).clickMark = ZDK.module.window({
                    version2: b,
                    title: g.attr("zw-title") || "系统弹窗",
                    content: a.aurl,
                    cache: !1,
                    theme: g.attr("zw-theme") || "",
                    width: g.attr("zw-width") || 400
                })
            }, function() {
                -1 == json.state ? ZDK.Tips(json.msg, 3e3, "error") : -2 == json.state && bindMobile(), $(c.target).get(0).clickMark = 0
            }), c.preventDefault()
        }

        function c(a, b, c, d, e, f) {
            var g = ZDK.module.window({
                title: a,
                content: b,
                cache: !1,
                width: c,
                mask: !0,
                cache: !1,
                zIndex: 998,
                close: !1,
                hasIframe: !0,
                cancel: "string" == typeof e ? e : e && !0,
                ok: f || !0
            });
            return d && g.on("onok", function() {
                return d()
            }), e && g.on("oncancel", function() {
                "string" == typeof e ? g.hide() : e()
            }), g
        }

        function d(a, b, c, d, e, f, g, h, i) {
            function j(a, b) {
                if (o.onCancelUpload(a.attr("data-pid")), a.remove(), !b) return !1;
                var c = e || k.find("input[name='files']"),
                    d = b.attr("del-val"); - 1 != c.val().indexOf("," + d) && (d = "," + d), c.val(c.val().replace(d, ""))
            }
            var k = a || $("#make-tender"),
                l = b || $("#make-filelist"),
                m = {},
                n = !0,
                o = ZDK.module.upload({
                    target: k.find(".add-f a"),
                    no: !1,
                    formatErrMsg: h || "",
                    checkExt: f || !1,
                    fileExt: g || ".jpg",
                    uploadURI: c || PUBCONFIG.WORKUPLOADURI + "?ifr=2",
                    progressURI: d || PUBCONFIG.PROGRESSURI,
                    maxNumber: 5,
                    tips: i || function(a) {
                        var b = k.find(".delect");
                        b.length >= 1 ? b.css({
                            opacity: 1
                        }).animate({
                            opacity: 0
                        }, 3e3) : $('<p style="margin-left: -54px; margin-top: 35px; display: block;" class="delect">' + a + "</p>").appendTo(k).animate({
                            opacity: 0
                        }, 3e3)
                    },
                    creatProgressID: function() {
                        return ($("#ProgressID").val() || ZDK.uuid() + Math.random()) + ZDK.uuid()
                    }
                });
            o.on("onprogresreading", function(a) {
                if (!m[a.progress]) {
                    var b = a.name || "";
                    b = b.toLowerCase().split("."), b = b[b.length - 1];
                    var c = $('<li data-pid="' + a.progress + '"><p class="file clearfix"><span class="fl">' + a.name + '</span><a href="javascript:;" style="display:none;" action-type="cancel">删除</a></p><div class="adding clearfix"><p class="adifile"><span style="width:0%"></span></p><p class="fl">正在上传中....</p><a href="javascript:;" class="fr" action-type="cancel">取消</a></div></li>');
                    "mp3" == b || "wav" == b || "wma" == b || "ogg" == b ? (c.addClass("upload-type-music"), c.prependTo(l)) : c.appendTo(l), m[a.progress] = c
                }
                window.console && console.log("up_start", a), n = !1
            }).on("onprogresing", function(a) {
                var b = m[a.progress],
                    c = (a.uploaded / a.total * 100).toFixed(2) + "%";
                b.find("p.fl").html("上传" + c), b.find("p.adifile span").css("width", c), n = !1
            }).on("onprogresed", function(a) {
                var b = m[a.progress];
                b.find("p.fl").html("上传成功!"), b.find("p.adifile span").css("width", "100%"), b.find("div").hide(), b.addClass("tsuc"), b.find("p.file a").show().attr("del-val", a.url), window.console && console.log("up end", a);
                var c = e || k.find("input[name='files']");
                c.val(c.val().length ? c.val() + "-," + a.url : a.url), n = !0
            }).on("onprogresreadqueue", function(a) {
                if (!m[a.progress]) {
                    var b = $('<li data-pid="' + a.progress + '"><p class="file clearfix"><span class="fl">' + a.name + '</span><a href="javascript:;" style="display:none;" action-type="del">删除</a></p><div class="adding clearfix"><p class="adifile"><span style="width:0%"></span></p><p class="fl">正在上传中....</p><a href="javascript:;" class="fr" action-type="cancel">取消</a></div></li>').appendTo(l);
                    m[a.progress] = b
                }
                window.console && console.log("up end", a), n = !1
            }).on("onprogresserror", function(a, b) {
                (b = m[a.progress]) && b.find("p.fl").html("上传失败").css("color", "red"), n = !1
            }).on("oncancelupload", function() {}), l.delegate("a", "click", function() {
                "cancel" == $(this).attr("action-type") && j($(this).parents("li"), $(this))
            });
            var p = $("#me-tender"),
                q = ($("#me-tender span"), $(".user-tobiao")),
                n = (p.attr("html-href"), 1);
            return q.delegate("form .make-button .butn", "click", function() {
                var a = $(this);
                return n ? (ZDK.module.btnloading({
                    obj: a,
                    txt: "<i></i>投标中",
                    addClass: "no-int",
                    removeClass: "butn-green"
                }), $.ajax({
                    url: a.attr("act-type"),
                    type: "post",
                    data: a.parents("form").serialize(),
                    dataType: "json",
                    success: function(b) {
                        if (ZDK.module.btnloading.reset(a), 1 == b.state) {
                            var c = $(".user-comet").eq(1);
                            c.find(".js-alert").length > 0 ? $(b.msg).insertBefore(c.find(".js-alert").eq(0)) : (q.next(".not").remove(), $('<div class="user-comet user-tobiao">' + b.msg + "</div>").insertAfter(q)), ZDK.Tips("投标成功！", 3e3, "success"), q.find("form").find("textarea").val(""), q.find("input[type='checkbox']").removeAttr("checked"), q.find("#make-filelist").find("li").each(function() {
                                j($(this)), o.refreshNum()
                            }), q.find("input[name='files']").val("");
                            var d = $("#j-wbaccount");
                            d.length > 0 && (d.html('<option value="0">请选择转发帐号</option><option>读取帐号中...</option>'), $("#j-wbaddr").val("").keyup()), $("#werkNum").html(parseInt($("#werkNum").html()) + 1), n = 1
                        } else ZDK.Tips(b.msg, 3e3, "error"), $("#catchaimg").length && catchasrc("catchaimg", "catcha_seed")
                    }
                }), !1) : (ZDK.Tips("还有未上传完的附件！", 2e3, "warning"), !1)
            }), k.find("textarea").focus(function() {
                $(".bid-notice").hide(), k.css({
                    border: "2px solid #ffbf59",
                    margin: "10px 0px"
                })
            }).blur(function() {
                k.find("textarea").val() || $(".bid-notice").show(), k.css({
                    border: "1px solid #CFCFCF",
                    margin: "11px 1px"
                })
            }), o
        }
        var e = a("module.page").page;
        a("module.upload"), a("module.btnloading"), e.on("page:window", b), e.on("page:window2", function(a) {
            b(a, !0)
        }), e.on("page:report", function(a) {
            var b, e = ($(a.event.target).parent("span"), -1),
                f = $(a.event.target);
            try {
                if (f.get(0).clickState) return !1
            } catch (g) {}
            switch (f.get(0).clickState = 1, b = "cata=" + (a.cat || a.cata), a.cata) {
                case "1":
                    b += "&wid=" + a.wid;
                    break;
                case "2":
                    b += "&tid=" + a.tid;
                    break;
                case "3":
                    b += "&sid=" + a.sid;
                    break;
                case "4":
                    b += "&uid=" + a.uid;
                    break;
                case "5":
                case "6":
                case "7":
                case "8":
                    b += "&id=" + a.id
            }
            $.ajax({
                url: a.aurl,
                data: b + "&jsonpcallback=?",
                type: "get",
                dataType: "jsonp",
                jsonp: "jsoncallback",
                success: function(g) {
                    function h(a, b) {
                        $.ajax({
                            url: a.attr("aurl"),
                            data: a.attr("field") + "&jsonpcallback=?",
                            dataType: "json",
                            success: function(a) {
                                if (1 == a.state) {
                                    if (e = 1, a.field) {
                                        var g, h, j, k = '<div id="inserHtml">';
                                        for (var m in a.field) switch (a.field[m][0]) {
                                            case "textarea":
                                                k += '<p class="mt15 gray3">' + a.field[m][2] + '</p><div class="controls controls-report mt5 mb10" style="float:none;margin-left:0px"><textarea name=' + m + ' id="reportCont"></textarea><em>' + a.field[m][1] + '</em><em style="left:auto;top:auto;bottom:5px;right:20px"><span id="reportNum">0</span>/500</em></div>';
                                                break;
                                            case "input":
                                                "url" == m ? g = "url" : "o_wid" == m && (g = "int"), k += '<p class="mt15 gray3">' + a.field[m][2] + '</p><div class="controls mt10" style="float:none;margin-left:0px"><input  name=' + m + ' type="text"/><em>' + a.field[m][1] + "</em></div>";
                                                break;
                                            case "file":
                                                k += '<div class="add-file mb10" id="make-tender1" style="float:none;margin-left:0px"><p class="add-f load-evi" style="margin-left:0px"><a class="" href="javascript:;"></a><span class="gray9">(凭证要求：gif/jpg/jpeg/zip/rar/doc/xls格式，2M以内)</span></p><input type="hidden" name="files"></div><ul class="add-file" id="make-filelist1"></ul>';
                                                break;
                                            case "hidden":
                                                k += a.field[m][1] ? '<div class="mb10 gray9">' + a.field[m][1] + '<input type="hidden" value="' + a.field[m][2] + '" name="' + m + '" /></div>' : '<input type="hidden" value="' + a.filed[m][2] + '" name="' + m + '" />';
                                                break;
                                            case "select":
                                                k += '<div class="mt10" style="border-top:1px solid #E9E9E9;padding-top:10px">我要求：<select name=' + m + '><option value="0">--请选择处理方式--</opton>';
                                                var n = a.field[m][1];
                                                for (var o in n) k += "<option value=" + o + " data-name=" + n[o] + ">" + n[o] + "</opton>";
                                                k += "</select></div>", h = a.field[m][2], j = a.accept;
                                                break;
                                            case "checkbox":
                                                k += '<div class="mt10" style="border-top:1px solid #E9E9E9;padding-top:10px">';
                                                var n = a.field[m][1];
                                                for (var o in n) k += '<input type="checkbox" name="' + m + '" value="' + o + '">' + n[o];
                                                k += "</div>", h = a.field[m][2]
                                        }
                                        k += "</div>", b ? (l += k, i()) : $("#inserHtml").length ? $("#inserHtml").html(k) : $(k).appendTo($("#report-field")), $("#reportCont").length && $("#reportCont").keyup(function() {
                                            var a = $(this).val().length;
                                            $("#reportNum").html(a), a > 500 && ZDK.Tips("举报内容不能超过500字！", 3e3, "error")
                                        }), $("#inserHtml").find("select").change(function() {
                                            var b, c = $(this);
                                            if (2 == c.val())
                                                if ("分配赏金" == c.find("option:selected").data("name")) {
                                                    var d = "";
                                                    j && (d = '<br/><span class="orange">支付完成时，将扣除支付金额的' + j + "%作为平台服务费</span>"), b = '<span class="ml10">支付我<input type="text" name="amount" value="0" style="padding: 3px; vertical-align: middle; border: 1px solid #cccccc; width: 50px; height: 20px; margin:-5px 5px;" />元，退还TA <em id="moeny" class="orange">' + h + "</em> 元" + d + "</span>"
                                                } else b = '<span class="ml10">退还我 <em id="moeny" class="orange">' + h + '</em> 元，支付TA<input type="text" name="amount" value="0" style="padding: 3px; vertical-align: middle; border: 1px solid #cccccc; width: 50px; height: 20px; margin:-5px 5px;" />元</span>';
                                            else b = 5 == c.val() ? '<span class="ml10">赔付我<input type="text" name="amount" value="0" style="padding: 3px; vertical-align: middle; border: 1px solid #cccccc; width: 50px; height: 20px; margin:-5px 5px;" />元，最高赔付金额 <em id="moeny" class="orange">' + h + "</em> 元</span>" : "";
                                            c.next("span").length ? c.next("span").remove() : "", $(b).insertAfter(c), 10 == a.mode && 2 == $(this).val() ? (0 == $("#inserHtml p.bigaoTips").length && $("#inserHtml").append('<p class="bigaoTips" class="orange"></p>'), $("#inserHtml p.bigaoTips").html("提示：退款成功时，所退还金额将扣除20%作为平台服务费")) : $("#inserHtml p.bigaoTips").html(""), $("#inserHtml").find("input[type='text']").live("keyup", function() {
                                                isNaN($(this).val()) ? ($(this).val(""), $("#moeny").html(h)) : h - $(this).val() < 0 ? (2 == c.val() ? (ZDK.Tips("您最多可分配" + h + "元", 2e3, "error"), $("#moeny").html("0")) : ZDK.Tips("您最多可获得赔付金额" + h + "元", 2e3, "error"), $(this).val(h)) : 2 == c.val() && $("#moeny").html(parseFloat(h - $(this).val()).toFixed(2))
                                            })
                                        }), $("#inserHtml").find("input[type='checkbox']").click(function() {
                                            var a, b = $(this);
                                            a = b.checked ? '<span class="ml10">赔付我<input type="text" name="amount" value="0" style="padding: 3px; vertical-align: middle; border: 1px solid #cccccc; width: 50px; height: 20px; margin:-5px 5px;" />元，最高赔付金额<em id="moeny" class="orange">' + h + "</em> 元</span>" : "", b.next("span").length ? b.next("span").remove() : "", $(a).insertAfter(b), $("#inserHtml").find("input[type='text']").live("keyup", function() {
                                                isNaN($(this).val()) ? ($(this).val(""), $("#moeny").html(h)) : h - $(this).val() < 0 ? (2 == b.val() ? (ZDK.Tips("您最多可分配" + h + "元", 2e3, "error"), $("#moeny").html("0")) : ZDK.Tips("您最多可获得赔付金额" + h + "元", 2e3, "error"), $(this).val(h)) : 2 == b.val() && $("#moeny").html(h - $(this).val())
                                            })
                                        })
                                    } else $("#inserHtml").length ? $("#inserHtml").remove() : "";
                                    a.adr && d($("#make-tender1"), $("#make-filelist1"), a.adr[0], a.adr[1])
                                } else -2 == a.state ? (e = 0, ZDK.Tips(a.msg, 3e3, "warning"), f.get(0).clickState = 0) : -3 == a.state ? (e = 0, c("已有举报结果", "<div class='ui-warning'><p style='font-size:14px;' class='ml10'>" + a.msg + "</p></div>", 520, null, null, "确定"), f.get(0).clickState = 0) : (e = 0, ZDK.Tips(a.msg, 3e3, "error"), f.get(0).clickState = 0)
                            },
                            error: function() {
                                f.get(0).clickState = 0, ZDK.Tips("操作出错！请重试", 3e3, "error")
                            }
                        })
                    }

                    function i() {
                        var a = c("举报", '<div class="report-box"><form id="report-field">' + l + "</form></div>", 550, function() {
                            if (0 == e) return !1;
                            if (-1 == e) return ZDK.Tips("请选择举报类型！", 3e3, "error"), !1;
                            if ($("#reportCont").length && $("#reportCont").val().length > 500) return ZDK.Tips("举报内容不能超过500字！", 3e3, "error"), !1;
                            var b = $("#report-field"),
                                c = b.find("input[type='radio']:checked");
                            c = c.attr("aurl") ? c : b.find("input[type='radio']");
                            try {
                                $.ajax({
                                    url: c.attr("aurl"),
                                    data: c.attr("field") + "&jsonpcallback=?&" + (b ? b.serialize() + "&step=1" : c.attr("field") + "&step=1"),
                                    dataType: "json",
                                    success: function(b) {
                                        1 == b.state ? (ZDK.Tips(b.msg, 5e3, "success"), a.hide()) : b.name ? ZDK.module.poptip({
                                            target: $("[name='" + b.name + "']"),
                                            content: '<p class="ui-warning-min">' + b.msg + "</p>",
                                            theme: "ui-verify-tips",
                                            zIndex: 2222,
                                            width: 385,
                                            zIndex: 9001,
                                            offsetLeft: 10
                                        }) : -5 == b.state ? (ZDK.Tips(b.msg, 5e3, "warning"), a.hide()) : ZDK.Tips(b.msg, 5e3, "error")
                                    }
                                })
                            } catch (d) {
                                ZDK.Tips("出错了！", 3e3, "error")
                            }
                            return !1
                        }, null, "提交");
                        f.get(0).clickState = 0;
                        var b = a.Body.find("#report-field");
                        return b.delegate("input[type='radio']", "click", function() {
                            h($(this))
                        }), b.delegate("textarea", "focus", function() {
                            $(this).next("em").hide()
                        }), b.delegate("em", "click", function() {
                            $(this).prev().focus()
                        }), b.delegate("textarea", "blur", function() {
                            /^\s*$/.test($(this).val()) ? ($(this).next("em").show(), $(this).css({
                                border: "1px solid #B94A48"
                            })) : $(this).css({
                                border: "1px solid #cccccc"
                            })
                        }), b.delegate("textarea", "focus", function() {
                            $(this).css({
                                border: "1px solid #cccccc"
                            })
                        }), a
                    }
                    if (1 == g.state) {
                        var j = g.complex ? '<br/>分歧可能来自沟通不畅，建议您与对方积极沟通。若发起的举报处理完成后产生退款，将会对您在列表中的排名产生影响！<a href="http://quanzi.zhubajie.com/main/topic-qid-10458-tid-154929" target="_blank">查看详情</a>' : "",
                            k = '<div class="alert mb10">为了防止恶意举报，发起举报，需冻结五分信用度作为担保，举报处理完成后将根据<a href="http://chengxin.zhubajie.com/report/rule-g-2324" target="_blank">《猪八戒网举报处理制度（试行）》</a>进行相应释放。' + j + '</div><p class="gray3">您要举报的是 ' + g.user + (g.cata ? " 的" + g.cata : "") + '：</p><dl class="mt10 clearfix"><dt><a href=""><img border="0" width="48" height="48" onerror="this.onerror=null;this.src=\'http://t4.zbjimg.com/r/p/task/120.gif\'" class="touxiangall" src="' + g.img + '" id="avatar"></a></dt><dd class="mt5" style="height:43px;overflow: hidden;">' + g.text + "</dd></dl>",
                            l = '<div id="report-user" style="min-height:160px;">' + k + "</div>";
                        if (g.bidworks && g.bidworks.length > 0) {
                            l += '<p class="mt15 gray3" style="">请选择举报的稿件编号：</p><select name="wid" style="margin:0;">';
                            for (var m = 0, n = g.bidworks.length; n > m; m++) l += '<option value="' + g.bidworks[m].works_id + '">' + g.bidworks[m].works_id + "</option>";
                            l += "</select>"
                        }
                        l += '<p class="mt15 gray3" style="' + (g.me ? "display:none" : "") + '">请选择举报类型：</p><p class="mt10 gray9" style="' + (g.me ? "display:none" : "") + '">';
                        for (var m in g.data)
                            for (var o in g.data[m]) {
                                var p = "";
                                l += '<label><input name="radio" type="radio" aurl="' + a.aurl + '" field="' + b + "&type=" + o + '">' + g.data[m][o][0] + p + "</label>"
                            }
                        if (l += "</p>", 1 == g.me) h($(l).find("input"), 1);
                        else {
                            i()
                        }
                    } else -2 == g.state ? ZDK.Error("系统提示", g.msg, 0, function() {
                        return !0
                    }, null, "我知道了") : (ZDK.Tips(g.msg, 5e3, "error"), f.get(0).clickState = 0)
                },
                error: function() {
                    ZDK.Tips("操作出错！请重试", 3e3, "error")
                }
            })
        })
    }), ZDK.define("attention", function(a) {
        function b(a, d, e, f) {
            if (!ZDK.cookie.getCookie("userid")) {
                var g = new ZDK.module.passport;
                return void g.createLogin({
                    login: function() {
                        b(a, d, e, f)
                    },
                    register: function(a) {
                        1 == a.state && (location.href = a.url)
                    }
                })
            }
            var h = a.event,
                i = $("U" == h.target.nodeName ? h.target.parentNode : h.target),
                j = i.attr("class") + "",
                k = a.aurl || e,
                l = "",
                m = j.match(/(min|small|max)?-butn/i),
                n = j.match(/(?:butn|tmpbutn)-(green|orange)?/i);
            m = m ? m[1] || "" : "", n = n ? n[1] || "" : "", l = n ? (m ? m + "-" : "") + "butn-" + n : "";
            var o = i.html(),
                p = o.replace(/[\u4e00-\u9fa5]+/gi, "--"),
                q = o.match(/<u[^>]+>/i),
                r = o.match(/\((\d+)\)/i);
            if ((o.indexOf("取消") > -1 || o.indexOf("已") > -1) && (a.c = 1), -1 != o.indexOf("取消收藏")) {
                var s;
                return i.parent("span").length ? (s = 2, i.parent("span").css({
                    display: "inline-block"
                })) : (s = i.next("u").length) ? i.css({
                    display: "inline-block"
                }).next("u").css({
                    display: "inline-block"
                }) : i.css({
                    display: "inline-block"
                }).prev(".cutline").css({
                    display: "inline-block"
                }), ZDK.module.poptip({
                    target: i,
                    content: '<div id="tips-favorite"><em class="favwar"></em>您确定取消收藏吗？<p class="mt10"><button class="butn min-butn min-butn-orange"><i></i>确定</button><button class="butn min-butn ml10"><i></i>取消</button></p></div>',
                    theme: "tips-favorite",
                    zIndex: 190,
                    width: 150,
                    bottom: !0,
                    autoreset: !1,
                    cache: !1,
                    offLeft: -20,
                    onInited: function(b) {
                        b.Arrow.css({
                            left: "30px"
                        });
                        var d = $("#tips-favorite").find(".butn");
                        d.click(function() {
                            $(this).hasClass("min-butn-orange") ? c.AJAX(k, a, function() {
                                i.html("收藏").removeAttr("style"), 1 == s ? i.next("u").removeAttr("style") : 2 == s ? i.parent("span").removeAttr("style") : i.prev(".cutline").removeAttr("style"), ZDK.Tips("取消收藏成功！", 3e3, "success"), b.hide()
                            }) : (i.removeAttr("style"), 1 == s ? i.next("u").removeAttr("style") : 2 == s ? i.parent("span").removeAttr("style") : i.prev(".cutline").removeAttr("style"), b.hide())
                        })
                    }
                }), !1
            }
            i.html("<i></i>请求中..."), "2" == i.attr("act-style") && i.removeClass("small-butn-green"), c.AJAX(k, a, function(a) {
                if ("draftdel" != e) {
                    if ("draftpub" == e)
                        if (1 == a.state) {
                            var b = i.parents(".nts-a");
                            b.length >= 1 ? b.html(a.html) : ($(a.html).appendTo(i.parent("p")), i.next("a").remove(), i.remove())
                        } else ZDK.Tips(a.msg, 3e3, "error");
                    var g, h = d;
                    if (f && c.runCall(i, f), g = i.closest("tr").find("." + i.attr("act-follow"))) {
                        var j = 0 ^ g.html();
                        g.html(++j)
                    }
                    if (1 == a.state && (p = p.replace(/(<u[^>]+>|<\/u>)/i, "")), 1 == a.state ? (p = p.replace(/(<u[^>]+>|<\/u>)/i, ""), h = "取消" + d, "关注" == d && (h = "已关注"), q = null, n && i.addClass("tmpbutn-" + n), i.removeClass(l)) : e == COMMONURI.ATTENTION && (q = ['<u act-type="' + i.attr("act-type") + '" act-data="' + i.attr("act-data") + '">'], i.addClass(l)), r) {
                        var j = 0 ^ r[1];
                        p = p.replace(/\(\d+\)/i, "(" + (1 == a.state ? ++j : --j) + ")")
                    }
                    q ? "1" == i.attr("act-style") ? (h = q[0] + "</u>" + h, i.html("<i></i>" + h), i.attr("class", "butn min-butn ac-tion").find("u").addClass("icons icon-plus"), i.attr("data-class") && i.prev(".atten-suc").remove()) : (h = q[0] + h + "</u>", "关注" == d && i.attr("data-class") ? i.attr("class", i.attr("data-class")).html("<i></i>" + h).prev(".atten-suc").remove() : (i.html("<i></i>" + h).removeClass("carAtt"), ZDK.Tips(1 == a.state ? d + "成功！" : "取消" + d + "成功！", 3e3, "success"))) : ("关注" != d || i.attr("act-style") ? i.html(p.replace(/-{2,}/g, h)).addClass("carAtt") : ("butn small-butn small-butn-green" != i.attr("data-class") && i.attr("data-class", i.attr("class")), i.attr("class", "butn-atten").html(p.replace(/-{2,}/g, "取消")), $('<a class="atten-suc">已关注<u class="gray9"> | </u></a>').insertBefore(i), i.parent().addClass("atten-parent").ie6hover()), "1" == i.attr("act-style") && i.removeClass("butn min-butn ac-tion"), e == COMMONURI.FAVORITE && (i.html("取消收藏"), ZDK.Tips("收藏成功！", 3e3, "success")))
                } else if (1 == a.state) {
                    ZDK.Tips(a.msg, 3e3, "success");
                    var k = (i.parents(".user-information,.time-box").remove(), $("#contentBox"));
                    k.find(".time-box").length < 1 && k.find(".user-information").length < 1 && k.html('<div style="text-align:center; margin:20px auto" class="alert mt10"><strong>暂时还没有此类需求！</strong></div>')
                } else ZDK.Tips(a.msg, 3e3, "error")
            }, function(a) {
                i.html(o), ZDK.Tips(a.msg, 3e3, "warning")
            })
        }
        a("module.passport"), a("module.poptip");
        var c = a("module.page").page;
        c.on("page:attention", function(a) {
            b(a, "关注", COMMONURI.ATTENTION, "attention")
        })
    }),
    function() {
        var a = {},
            b = {},
            c = "uc" + +new Date,
            d = null;
        $("a.user-card, img.user-card").live("mouseenter", function(e, f) {
            if (!f) {
                var g = arguments.callee;
                return d = setTimeout(function() {
                    g(e, !0)
                }, 200)
            }
            var h = $(e.target);
            h.hasClass("user-card") || (h = h.closest(".user-card"));
            var i = h.attr("act-data"),
                j = COMMONURI.USERCARD;
            j += (j.indexOf("?") > -1 ? "" : "?") + i;
            var k = h[0][c] || (h[0][c] = ZDK.uuid());
            if (a[k]) return void a[k].show();
            if (h.hasClass("j_guojitask")) {
                var l = h.attr("href");
                j = '<div class="clearfix"><div class="list-task-avatar"><a act-data="uid=18&amp;type=buyer/" href="' + l + '" target="_blank"><img src="' + h.find("img").attr("src") + '" class="touxiangall" border="0"></a></div><div class="guoji-avatardesc"><p><a href="' + h.attr("href") + '">猪八戒网站Witmart</a></p><p><button type="button" class="ui-btn ui-btn-inverse ui-btn-mini" onclick="window.open(\'' + l + '\')">逛逛witmart.com</button></p></div></div><div class="guoji-cando"><p>在witmart.com您可以：</p><ul><li>发布任务，两站同步，外国人、中国人抢着为您服务</li><li>参加任务，赚美金，更过瘾！还可提现成人民币哟</li><li>有中文界面+中文客服</li><li>无需注册，使用猪八戒网账号一键登录</li></ul></div>'
            }
            var m = ZDK.module.poptip({
                target: h,
                content: j,
                right: !0,
                bottom: !0,
                width: 370,
                arrowOffset: 17,
                exo: k,
                autoreset: !0,
                onContentLoaded: function() {
                    try {
                        prepareWebIMButton(), WebIM.buildWebIMButtons(), WebIM.watchUsers([i.replace("uid=", "")])
                    } catch (a) {}
                },
                onInited: function(c) {
                    var d = c.opche.exo;
                    c.Window.hover(function() {
                        b[d] = !0
                    }, function() {
                        b[d] = !1, a[d] && a[d].hide()
                    })
                }
            });
            a[k] || (a[k] = m)
        }).live("mouseleave", function(e) {
            var f = $(e.target);
            clearTimeout(d), f.hasClass("user-card") || (f = f.closest(".user-card"));
            var g = f[0][c] || 0;
            ! function(c) {
                setTimeout(function() {
                    !b[c] && a[c] && a[c].hide()
                }, 200)
            }(g)
        })
    }(),
    function(a, b, c, d) {
        var e = a(b);
        a.fn.lazyload = function(c) {
            function f() {
                var b = 0;
                h.each(function() {
                    var c = a(this);
                    if (!i.skip_invisible || c.is(":visible"))
                        if (a.abovethetop(this, i) || a.leftofbegin(this, i));
                        else if (a.belowthefold(this, i) || a.rightoffold(this, i)) {
                        if (++b > i.failure_limit) return !1
                    } else c.trigger("appear"), b = 0
                })
            }
            var g, h = this,
                i = {
                    threshold: 0,
                    failure_limit: 0,
                    event: "scroll",
                    effect: "show",
                    container: b,
                    data_attribute: "original",
                    skip_invisible: !0,
                    appear: null,
                    load: null
                };
            return c && (d !== c.failurelimit && (c.failure_limit = c.failurelimit, delete c.failurelimit), d !== c.effectspeed && (c.effect_speed = c.effectspeed, delete c.effectspeed), a.extend(i, c)), g = i.container === d || i.container === b ? e : a(i.container), 0 === i.event.indexOf("scroll") && g.bind(i.event, function() {
                return f()
            }), this.each(function() {
                var b = this,
                    c = a(b);
                b.loaded = !1, c.one("appear", function() {
                    if (!this.loaded) {
                        if (i.appear) {
                            var d = h.length;
                            i.appear.call(b, d, i)
                        }
                        a("<img />").bind("load", function() {
                            c.hide().attr("src", c.data(i.data_attribute))[i.effect](i.effect_speed), b.loaded = !0;
                            var d = a.grep(h, function(a) {
                                return !a.loaded
                            });
                            if (h = a(d), i.load) {
                                var e = h.length;
                                i.load.call(b, e, i)
                            }
                        }).bind("error", function() {
                            c.attr("src", "http://t5.zbjimg.com/r/page/zbjimg.gif")
                        }).attr("src", c.data(i.data_attribute))
                    }
                }), 0 !== i.event.indexOf("scroll") && c.bind(i.event, function() {
                    b.loaded || c.trigger("appear")
                })
            }), e.bind("resize", function() {
                f()
            }), /iphone|ipod|ipad.*os 5/gi.test(navigator.appVersion) && e.bind("pageshow", function(b) {
                b.originalEvent.persisted && h.each(function() {
                    a(this).trigger("appear")
                })
            }), a(b).load(function() {
                f()
            }), this
        }, a.belowthefold = function(c, f) {
            var g;
            return g = f.container === d || f.container === b ? e.height() + e.scrollTop() : a(f.container).offset().top + a(f.container).height(), g <= a(c).offset().top - f.threshold
        }, a.rightoffold = function(c, f) {
            var g;
            return g = f.container === d || f.container === b ? e.width() + e.scrollLeft() : a(f.container).offset().left + a(f.container).width(), g <= a(c).offset().left - f.threshold
        }, a.abovethetop = function(c, f) {
            var g;
            return g = f.container === d || f.container === b ? e.scrollTop() : a(f.container).offset().top, g >= a(c).offset().top + f.threshold + a(c).height()
        }, a.leftofbegin = function(c, f) {
            var g;
            return g = f.container === d || f.container === b ? e.scrollLeft() : a(f.container).offset().left, g >= a(c).offset().left + f.threshold + a(c).width()
        }, a.inviewport = function(b, c) {
            return !(a.rightoffold(b, c) || a.leftofbegin(b, c) || a.belowthefold(b, c) || a.abovethetop(b, c))
        }, a.extend(a.expr[":"], {
            "below-the-fold": function(b) {
                return a.belowthefold(b, {
                    threshold: 0
                })
            },
            "above-the-top": function(b) {
                return !a.belowthefold(b, {
                    threshold: 0
                })
            },
            "right-of-screen": function(b) {
                return a.rightoffold(b, {
                    threshold: 0
                })
            },
            "left-of-screen": function(b) {
                return !a.rightoffold(b, {
                    threshold: 0
                })
            },
            "in-viewport": function(b) {
                return a.inviewport(b, {
                    threshold: 0
                })
            },
            "above-the-fold": function(b) {
                return !a.belowthefold(b, {
                    threshold: 0
                })
            },
            "right-of-fold": function(b) {
                return a.rightoffold(b, {
                    threshold: 0
                })
            },
            "left-of-fold": function(b) {
                return !a.rightoffold(b, {
                    threshold: 0
                })
            }
        })
    }(jQuery, window, document),
    function(a) {
        function b(b) {
            var c = a(this),
                d = null,
                e = [],
                f = null,
                g = null,
                h = a.extend({
                    rowSelector: "> li",
                    submenuSelector: "*",
                    submenuDirection: "right",
                    tolerance: 75,
                    enter: a.noop,
                    exit: a.noop,
                    activate: a.noop,
                    deactivate: a.noop,
                    exitMenu: a.noop
                }, b),
                i = 3,
                j = 300,
                k = function(a) {
                    e.push({
                        x: a.pageX,
                        y: a.pageY
                    }), e.length > i && e.shift()
                },
                l = function() {
                    g && clearTimeout(g), h.exitMenu(this) && (d && h.deactivate(d), d = null)
                },
                m = function() {
                    g && clearTimeout(g), h.enter(this), q(this)
                },
                n = function() {
                    h.exit(this)
                },
                o = function() {
                    p(this)
                },
                p = function(a) {
                    a != d && (d && h.deactivate(d), h.activate(a), d = a)
                },
                q = function(a) {
                    var b = r();
                    b ? g = setTimeout(function() {
                        q(a)
                    }, b) : p(a)
                },
                r = function() {
                    function b(a, b) {
                        return (b.y - a.y) / (b.x - a.x)
                    }
                    if (!d || !a(d).is(h.submenuSelector)) return 0;
                    var g = c.offset(),
                        i = {
                            x: g.left,
                            y: g.top - h.tolerance
                        },
                        k = {
                            x: g.left + c.outerWidth(),
                            y: i.y
                        },
                        l = {
                            x: g.left,
                            y: g.top + c.outerHeight() + h.tolerance
                        },
                        m = {
                            x: g.left + c.outerWidth(),
                            y: l.y
                        },
                        n = e[e.length - 1],
                        o = e[0];
                    if (!n) return 0;
                    if (o || (o = n), o.x < g.left || o.x > m.x || o.y < g.top || o.y > m.y) return 0;
                    if (f && n.x == f.x && n.y == f.y) return 0;
                    var p = k,
                        q = m;
                    "left" == h.submenuDirection ? (p = l, q = i) : "below" == h.submenuDirection ? (p = m, q = l) : "above" == h.submenuDirection && (p = i, q = k);
                    var r = b(n, p),
                        s = b(n, q),
                        t = b(o, p),
                        u = b(o, q);
                    return t > r && s > u ? (f = n, j) : (f = null, 0)
                };
            c.mouseleave(l).find(h.rowSelector).mouseenter(m).mouseleave(n).click(o), a(document).mousemove(k)
        }
        a.fn.menuAim = function(a) {
            return this.each(function() {
                b.call(this, a)
            }), this
        }
    }(jQuery),
    function(a) {
        function b() {
            if (a.browser.msie) {
                var b = a(document).height(),
                    c = a(window).height();
                return [window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth, 20 > b - c ? c : b]
            }
            return [a(document).width(), a(document).height()]
        }

        function c(b) {
            return b ? b.call(a.mask) : void 0
        }
        a.tools = a.tools || {
            version: "v1.2.7"
        };
        var d;
        d = a.tools.expose = {
            conf: {
                maskId: "exposeMask",
                loadSpeed: "slow",
                closeSpeed: "fast",
                closeOnClick: !0,
                closeOnEsc: !0,
                zIndex: 9998,
                opacity: .8,
                startOpacity: 0,
                color: "#fff",
                onLoad: null,
                onClose: null
            }
        };
        var e, f, g, h, i;
        a.mask = {
            load: function(j, k) {
                if (g) return this;
                "string" == typeof j && (j = {
                    color: j
                }), j = j || h, h = j = a.extend(a.extend({}, d.conf), j), e = a("#" + j.maskId), e.length || (e = a("<div/>").attr("id", j.maskId), a("body").append(e));
                var l = b();
                return e.css({
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: l[0],
                    height: l[1],
                    display: "none",
                    opacity: j.startOpacity,
                    zIndex: j.zIndex
                }), j.color && e.css("backgroundColor", j.color), c(j.onBeforeLoad) === !1 ? this : (j.closeOnEsc && a(document).on("keydown.mask", function(b) {
                    27 == b.keyCode && a.mask.close(b)
                }), j.closeOnClick && e.on("click.mask", function(b) {
                    a.mask.close(b)
                }), a(window).on("resize.mask", function() {
                    a.mask.fit()
                }), k && k.length && (i = k.eq(0).css("zIndex"), a.each(k, function() {
                    var b = a(this);
                    /relative|absolute|fixed/i.test(b.css("position")) || b.css("position", "relative")
                }), f = k.css({
                    zIndex: Math.max(j.zIndex + 1, "auto" == i ? 0 : i)
                })), e.css({
                    display: "block"
                }).fadeTo(j.loadSpeed, j.opacity, function() {
                    a.mask.fit(), c(j.onLoad), g = "full"
                }), g = !0, this)
            },
            close: function() {
                if (g) {
                    if (c(h.onBeforeClose) === !1) return this;
                    e.fadeOut(h.closeSpeed, function() {
                        c(h.onClose), f && f.css({
                            zIndex: i
                        }), g = !1
                    }), a(document).off("keydown.mask"), e.off("click.mask"), a(window).off("resize.mask")
                }
                return this
            },
            fit: function() {
                if (g) {
                    var a = b();
                    e.css({
                        width: a[0],
                        height: a[1]
                    })
                }
            },
            getMask: function() {
                return e
            },
            isLoaded: function(a) {
                return a ? "full" == g : g
            },
            getConf: function() {
                return h
            },
            getExposed: function() {
                return f
            }
        }, a.fn.mask = function(b) {
            return a.mask.load(b), this
        }, a.fn.expose = function(b) {
            return a.mask.load(b, this), this
        }
    }(jQuery),
    function() {
        function a(a) {
            var b = $(a),
                d = b.find(".category-item-two");
            c.find(".hover").removeClass("hover"), d.css({
                top: -b.position().top - 2
            }), b.addClass("hover")
        }
        var b;
        if ("undefined" != typeof seajs && (define("hack$", [], function() {
                return window.$
            }), seajs.use("hack$"), seajs.cache[seajs.resolve("$")] = seajs.cache[seajs.resolve("$-debug")] = seajs.cache[seajs.resolve("hack$")]), $(".hall-nav").length > 0 && $("#j-zbj-header ,.hall-nav,.ui-logo-sub").css("background-color", "#f6f6f6"), !($(".category").size() <= 0)) {
            var c = $(".category-content");
            c.menuAim({
                rowSelector: ".category-item",
                activate: a
            }), $(".category-status-close").bind("mouseover", function() {
                var a = $(this);
                b = setTimeout(function() {
                    a.find(".category-content").show()
                }, 150)
            }), $(".category-status-close").bind("mouseleave", function() {
                var a = $(this);
                clearTimeout(b), setTimeout(function() {
                    a.find(".category-content").hide()
                }, 150)
            })
        }
    }(), $(document).ready(function() {
        function a(a) {
            var c = a.attr("data-cmstoken");
            c && (m[c] || (m[c] = !0, $.ajax({
                url: p + "/cmsfiles/" + c + ".js",
                jsonpCallback: "_" + c.replace(/.*\//, "") + "_js",
                dataType: "jsonp",
                success: function(a) {
                    var d = b(a);
                    n.filter('[data-cmstoken="' + c + '"]').each(function() {
                        var a = $(this),
                            b = a.attr("data-cmsindex") || 0;
                        a.html(d[b] || "")
                    })
                }
            })))
        }

        function b(a) {
            var b = [],
                d = a.content.split("##split##"),
                e = a.ext || [];
            return $.each(d, function(a, d) {
                var f = e[a];
                if (!f) return void b.push(d);
                var g = +new Date,
                    h = d;
                if (f.showtime) {
                    var i = f.showtime.split("-");
                    1 == i.length && i.push(o), c(g, i) || (h = "")
                }
                if (f.schedule) {
                    var j = f.schedule;
                    if (j.showtime) {
                        var k = j.showtime.split("-");
                        1 == k.length && k.push(o), c(g, k) && (h = j.content)
                    }
                }
                "https:" == location.protocol && (h = h.replace(/http:\/\/cms\.zbjimg\.com/, function() {
                    return p
                })), b.push(h)
            }), b
        }

        function c(a, b) {
            var c = b[0].split("."),
                d = b[1].split(".");
            return a >= +new Date(c[0], 1 * c[1] - 1, c[2]) && a <= +new Date(d[0], 1 * d[1] - 1, d[2]) ? !0 : !1
        }
        if (!($("body.role-index").length > 0)) {
            var d = $("#j-zbj-header"),
                e = $("#isBaojia").val(),
                f = "";
            if (f = Number(e) ? "免费获得报价！" : "让服务商来找你！", d.data("fixed")) {
                var g, h = $("#j-header-top"),
                    i = d.height(),
                    j = h.height();
                d.data("tips") && (g = '<div class="ui-poptip ui-poptip-bottom ui-header-fixed-tips"><div class="ui-poptip-arrow"><i></i></div><div class="ui-poptip-bd" style="padding: 10px;">服务商不好找？<br />发布需求，' + f + "</div></div>");
                var k = $("#task_id").val();
                if (k) {
                    var l = "/pub/step1-id-" + k + ".html?from_cid=10003";
                    $(".ui-header-task-entry-link, .ui-header-gotopub").attr("href", l), g = '<div class="ui-poptip ui-poptip-bottom ui-header-fixed-tips" style="width:190px;margin-top: 10px;padding: 0"><div class="ui-poptip-arrow" style="left:70px"><i></i></div><div class="ui-poptip-bd" style="padding: 10px;">以此需求为模板，发布类似需求</div></div>'
                }
                $(g).appendTo("#j-head-pubentry"), $(window).scroll(function() {
                    h.css({
                        position: "fixed",
                        top: 0
                    }), d.css("padding-top", j);
                    var a = $(this).scrollTop();
                    a > i - j ? 0 == d.hasClass("ui-header-fixed") && (d.addClass("ui-header-mini ui-header-fixed"), $("body").addClass("body-headerfixed"), $("#j-ui-header-bd-wrap").css("top", 0).animate({
                        top: j
                    }, function() {
                        d.trigger("onHeaderSticky")
                    })) : (d.removeClass("ui-header-mini ui-header-fixed"), $("body").removeClass("body-headerfixed"), d.trigger("offHeaderSticky"))
                }), $(".ui-header-fixed-tips").hover(function() {
                    $(this).hide()
                })
            }
            var m = {},
                n = $(".j_cms_ctn"),
                o = "2020.01.01",
                p = "http://cms.zbjimg.com";
            "https:" == location.protocol && (p = "https://login.zhubajie.com/cms"), n.each(function(b, c) {
                var d = $(c);
                a(d)
            });
            var q, r;
            $("#j-search-vote").bind("click", function() {
                var a = $(this),
                    b = $("body"),
                    c = a.attr("data-url"),
                    d = c.indexOf(location.host) > -1 ? !1 : !0;
                if (q || r) q.show(), r.show();
                else {
                    q = $('<div class="ui-mask"></div>').appendTo(b).css({
                        height: b.height(),
                        zIndex: 500
                    }), r = a.next(".search-vote-wrap").appendTo(b).show(), r.css({
                        left: ($(window).width() - r.outerWidth()) / 2,
                        top: ($(window).height() - r.outerHeight()) / 2
                    });
                    var e = r.find(".ui-btn"),
                        f = r.find(".close"),
                        g = r.find(".search-vote-form");
                    e.bind("click", function() {
                        var a = {
                            url: c,
                            type: "post",
                            data: g.serialize(),
                            dataType: "json",
                            success: function(a) {
                                1 == a.state ? (ZDK.Tips(a.msg, 3e3, "success"), f.trigger("click")) : ZDK.Tips(a.msg, 3e3, "error")
                            }
                        };
                        d && (a.dataType = "jsonp", a.jsonp = "jsonpcallback"), $.ajax(a)
                    }), f.bind("click", function() {
                        q.hide(), r.hide(), g[0].reset()
                    })
                }
            })
        }
    }),
    function() {
        var a = "http://u." + PPInfo.baseURI + "/notice/getcount?jsonpcallback=?",
            b = {
                requestTime: 200,
                intervalTime: 18e5,
                init: function() {
                    return /https/.test(window.location.href) ? !1 : void(ZDK.cookie.getCookie("userid") && (this.start(), this.bindEvent()))
                },
                start: function() {
                    var a = this;
                    setTimeout(function() {
                        a.sendRequest()
                    }, a.requestTime)
                },
                sendRequest: function() {
                    var b = this;
                    $.getJSON(a, function(a) {
                        a && b.updateMsgIndicator(a)
                    })
                },
                updateMsgIndicator: function(a) {
                    var b = 0;
                    for (var c in a)
                        if (a.hasOwnProperty(c)) {
                            var d = 1 * a[c],
                                e = $("#j-msg-" + c);
                            d > 0 && (b += d), d > 0 ? (e.find(".highlight").remove(), e.prepend(' <span class="highlight">' + d + "</span>"), "chengxin" == c && e.parent("li").show()) : (e.find("span").remove(), "chengxin" == c && e.parent("li").hide())
                        }
                    this.setBlinkIcon(b > 0), this.requestTime = this.intervalTime, this.start()
                },
                setBlinkIcon: function(a) {
                    if (a) {
                        if (!this._blinkTimer) {
                            this._blinkTimer = setInterval(function() {
                                $("#j-msg-icon").css("visibility", "hidden"), setTimeout(function() {
                                    $("#j-msg-icon").css("visibility", "visible")
                                }, 400)
                            }, 1e3), $("#j-msg-tip").show();
                            var b = this;
                            $(".navusernews").one("mouseover", function() {
                                $("#j-msg-tip").hide(), b.setBlinkIcon(!1)
                            })
                        }
                    } else this._blinkTimer && (clearInterval(this._blinkTimer), $("#j-msg-icon").css("visibility", "visible"), this._blinkTimer = null)
                },
                bindEvent: function() {
                    var a = this;
                    $("ul.item-usernews-dropdown a").click(function() {
                        a.onmsgItemClick($(this))
                    })
                },
                onmsgItemClick: function(a) {
                    var b = a.find("span");
                    if (b.size()) {
                        var c = parseInt($("#j-msg-total").html(), 10) - parseInt(b.html().replace(/\s/g, ""), 10);
                        c > 0 ? $("#j-msg-total").html(c).show() : $("#j-msg-total").hide(), b.remove()
                    }
                },
                makeTips: function() {}
            };
        b.init(), /login.v5.zbj.com/.test(window.location.href) || /login.zhubajie.com/.test(window.location.href) || window.WebIM && WebIM.onNotification && WebIM.onNotification(function(a) {
            var c = a.content.msgcount;
            b.updateMsgIndicator(c)
        })
    }(),
    function() {
        function a() {
            var a = {
                title: "在线咨询",
                link: "http://livechat.zhubajie.com/LR/Chatpre.aspx?id=PCF83427900&skid=27",
                className: ""
            };
            window.PPInfo && window.PPInfo.chatCfg && $.extend(a, window.PPInfo.chatCfg);
            var b = '<div class="ui-tools-top ui-tools-livechat"><a class="{%className%}" href="{%link%}" target="_blank" title="{%className%}"><i class="ui-ico ui-ico-cs"></i></a></div>';
            return b = f(b, a), $(b).appendTo(document.body)
        }

        function b() {
            var a = {
                title: "意见反馈",
                link: "http://task.zhubajie.com/3105598/",
                className: ""
            };
            window.PPInfo && window.PPInfo.feedbackCfg && $.extend(a, window.PPInfo.feedbackCfg);
            var b = '<a rel="nofollow" href="{%link%}" target="_blank" class="item-tools {%className%}" id="j-feedback-btn"><span class="item-ico"><i class="ui-ico ui-ico-feed"></i></span><span class="item-txt">{%title%}</span></a>';
            return b = f(b, a)
        }

        function c(a, b) {
            $.ajax({
                url: safepwdUrl,
                data: "tips=1",
                dataType: "jsonp",
                jsonp: "jsonpcallback",
                success: function(c) {
                    var e; - 2 == c.state ? (e = "输入你的安全密码", i.removeAttr("id").addClass("safepwdUrl"), i.find(".control-group").html('<label style="width:110px" for="inputWarning" class="control-label">输入你的安全密码</label><div class="controls"><em>输入你的安全密码</em><p><input type="password" id="inputWarning"><a target="_blank" href="http://help./main/findspas" class="ml10 underline">忘记密码？</a></p></div>'), d(a, b), i.find(".controls").inputEmpty(e)) : (e = "请输入手机号码", d(a, b))
                }
            })
        }

        function d(a, b) {
            var c = b && b.btn_cancel,
                d = ZDK.module.window({
                    title: "账户安全提醒",
                    content: i.show(),
                    width: 485,
                    mask: !0,
                    cache: !1,
                    zIndex: 500,
                    allowClose: !0,
                    hasIframe: !0,
                    ok: "下一步",
                    cancel: c || "跳过，下次再说"
                });
            return b && (b.alert && i.find(".alert-img").html("<em></em>" + b.alert), b.title && d.resetTitle(b.title)), i.find(".controls").inputEmpty("请输入手机号码"), d.Close.click(function() {
                a && a()
            }), d.Body.find("form").submit(function() {
                return d.Footer.find(".ui-window-ok").click(), !1
            }), d.on("onok", function() {
                return $("#cert-phone").length ? e(d) : $.ajax($(".safepwdUrl").length ? {
                    url: safepwdUrl,
                    data: "s_pas=" + $(".safepwdUrl").find("input[type='password']").val() + "&act=1",
                    dataType: "jsonp",
                    jsonp: "jsonpcallback",
                    success: function(a) {
                        1 == a.state ? (i.attr("id", "cert-phone").removeClass("safepwdUrl"), i.find(".control-group").html('<label class="control-label" for="inputWarning" style="width:110px">输入你的手机号码</label><div class="controls"><em>请输入手机号码</em><p><input type="text" id="inputWarning"><span class="help-inline">暂只支持中国地区手机号码</span></p></div>'), i.find(".alert").hide(), d.resetBody(i.show()), i.find(".controls").inputEmpty("请输入手机号码")) : ZDK.Tips(a.msg, 2e3, "error")
                    }
                } : {
                    url: m,
                    data: "vid=" + j.find("input[name=vid]").val() + "&code=" + j.find("input[name=code]").val(),
                    dataType: "jsonp",
                    jsonp: "jsonpcallback",
                    success: function(b) {
                        if (1 == b.state) {
                            if (ZDK.Tips("您的手机已绑定成功！", 2e3, "success"), d.hide(), a) return a(), !1;
                            /payorder|task/.test(location.href) && setTimeout(function() {
                                location.reload()
                            }, 2e3)
                        } else ZDK.Tips(b.msg, 2e3, "error")
                    }
                }), !1
            }), d.on("oncancel", function() {
                function b() {
                    var a = new Date,
                        b = a.getDate();
                    return a.setDate(b + 1), a
                }
                var c, d;
                /u.zhubajie.com/.test(location.href) ? (c = "http://u." + PPInfo.baseURI + "/main/disablepop", d = "get") : (c = "http://u." + PPInfo.baseURI + "/main/disablepop?jsonpcallback=?", d = "jsonp"), $.ajax({
                    type: d,
                    url: c,
                    dataType: "json",
                    complete: function() {}
                }), o("needmobile", 0, b()), a && a()
            }), d
        }

        function e(a) {
            var b = $("#cert-phone").find("input[type='text']").val();
            $.ajax({
                url: k,
                data: "mobile=" + b + "&tips=1",
                dataType: "jsonp",
                jsonp: "jsonpcallback",
                success: function(c) {
                    function d(a) {
                        a.attr("disabled", "disabled");
                        var b = 60;
                        a.html("<i></i>重发验证码(60)").removeClass("butn-green");
                        var c = setInterval(function() {
                            b-- > 0 ? a.html("<i></i>发送验证码(" + b + ")") : (clearInterval(c), a.removeAttr("disabled").html("<i></i>重发验证码").addClass("butn-green"))
                        }, 1e3)
                    }
                    if (1 == c.state) {
                        j.find(".phone-number").html(b), j.find("input[name='vid']").val(c.vid), a.resetOkButton("提交并完成绑定"), a.resetBody(j), j.find(".controls").inputEmpty("请输入短信验证码"), j.find("#resendcode").click(function() {
                            var a = $(this);
                            return "disabled" == a.attr("disabled") ? !1 : void $.ajax({
                                url: l,
                                data: "vid=" + $("#phone-verify").find("input[name='vid']").val(),
                                dataType: "jsonp",
                                jsonp: "jsonpcallback",
                                success: function(b) {
                                    1 == b.state ? (d(a), ZDK.Tips(b.msg, 2e3, "success")) : ZDK.Tips(b.msg, 2e3, "error")
                                }
                            })
                        }), d(j.find("#resendcode"));
                        var e = j.find(".phone-number");
                        e.next("a").click(function() {
                            return i.find(".name,.alert").remove(), i.find(".control-label").html("请重新输入手机号码"), a.resetBody(i.show()), a.resetOkButton("下一步"), !1
                        })
                    } else ZDK.Tips(c.msg, 2e3, "error")
                }
            })
        }
        if (!(document.location.href.indexOf("https://") >= 0)) {
            var f = function(a, b) {
                    return a.replace(/{%([^%]*)%}/g, function(a, c) {
                        return b[c]
                    })
                },
                g = '<div class="ui-tools-bottom" style=" display:none;"><div class="ui-tools-app"><a class="item-tools" href="http://app.zhubajie.com" target="_blank"><span class="item-ico"><i class="ui-ico ui-ico-mobile"></i></span><span class="item-txt">移动应用</span><div class="ui-poptipnoc ui-poptipnoc-left"><div class="ui-poptipnoc-arrow"><i></i></div><div class="ui-poptipnoc-bd"><div><div class="item-weixin"></div><p>官方微信<br/>轻松找人做事</p></div><div class="ui-vline"></div><div><div class="item-mobile"></div><p>下载新版APP<br/><span style="color:#ff0000">首次下单送5元</span></p></div></div></div></a></div><div class="ui-tools-feed">' + b() + '</div><div class="ui-tools-gotop"><a class="item-tools" href="javascript:;" title="返回顶部" id="j-goTop"><i class="iconfont">&#xe806;</i></a></div></div>';
            if ($(function() {
                    function b() {
                        return $(window).scrollTop()
                    }

                    function c(a) {
                        $(window).scrollTop(~~a)
                    }
                    var d = $("body");
                    window.PPInfo && window.PPInfo.isShowChatEntry && a();
                    var e = $(g).appendTo(d);
                    0 == location.href.indexOf("http://shop.") && e.addClass("shop-tool-bottom"), window.fix_poptip_on_t5 && fix_poptip_on_t5(e); {
                        var f = e.find(".ui-tools-gotop").css("visibility", "hidden");
                        f.find(".item-tools")
                    }
                    $(window).scroll(function() {
                        b() > 0 ? f.css("visibility", "visible") : f.css("visibility", "hidden")
                    }), e.delegate(".ui-tools-gotop", "click", function() {
                        function a() {
                            c(b() / 1.1), b() < 1 && clearInterval(d)
                        }
                        var d = setInterval(a, 5)
                    })
                }), !window.mobileVerify) {
                var h = "http://u.zhubajie.com/pay/withdraw" == location.href ? "您尚未绑定手机，提现操作可能存在一定风险，我们建议您立即绑定手机。" : "你的账户中有余额，为了保障你的资金安全，建议你立即绑定手机。",
                    i = $('<form id="cert-phone"><div class="gray9 mt10 alert"><div class="alert-img"><em></em>' + h + '</div></div><div class="control-group clearfix mt15"><label class="control-label" for="inputWarning" style="width:110px">输入你的手机号码</label><div class="controls"><em>请输入手机号码</em><p><input type="text" id="inputWarning"><span class="help-inline">暂只支持中国地区手机号码</span></p></div></div></form>'),
                    j = $('<style>.ui-verify-tips .ui-poptip-arrow{left:30px}</style><form id="phone-verify"><div class="alert"><div class="alert-img"><em></em>已发送短信验证码至<strong class="orange phone-number">136 **** 9856</strong><a href="" class="ml10 underline" style="color:#999">错误的手机号？</a></div></div><div class="control-group clearfix mt15"><label class="control-label" style="width:110px;padding-top:6px">请输入短信验证码</label><div class="controls"><em style="top:5px">请输入短信验证码</em><input type="text" style="padding:5px" name="code"><a class="butn ml10 butn-green" href="###" id="resendcode"><i></i>重发验证码</a> </div></div><input type="hidden" name="vid" /></form>'),
                    k = "http://u." + PPInfo.baseURI + "/cert/sendcode",
                    l = "http://u." + PPInfo.baseURI + "/cert/resendcode",
                    m = "http://u." + PPInfo.baseURI + "/cert/vmobile";
                safepwdUrl = "http://u." + PPInfo.baseURI + "/cert/checksafepass";
                var n = ("login." + PPInfo.baseURI + "/register/complete", "login." + PPInfo.baseURI + "/register/tag", "login." + PPInfo.baseURI + "/register/people", ZDK.cookie && ZDK.cookie.getCookie ? ZDK.cookie.getCookie : GetCookie),
                    o = ZDK.cookie && ZDK.cookie.setCookie ? ZDK.cookie.setCookie : SetCookie;
                (1 == n("needmobile") && 0 == /cert\/mobile/.test(location.href) || 1 == /pay\/withdraw/.test(location.href) && n("mobilepoped")) && 0 == $("#noMobileTip").size() && c(), window.mobileVerify = c
            }
        }
    }(),
    function() {
        function a() {
            function a(a) {
                a = parseInt(a), a > 0 && (c.html(a), c.show(), c.attr("tool-map", "top"), c.attr("tool-text", "你有" + a + "个官方派单待处理"), c.addClass("zbj-tooltip"), $("#j-my-invitetask-digit").html(a), $("#j-need-invite .ui-dropdown-hd").after($("<a></a>").attr({
                    href: "http://u." + PPInfo.baseURI + "/officialtaskinvite/snatch",
                    target: "_blank"
                }).append(c.clone().attr({
                    id: "",
                    "tool-map": "bottom",
                    "tool-cls": "snatch-topnar-tip"
                }).css("position", "static"))))
            }

            function b() {
                return "http://u." + PPInfo.baseURI + "/officialtaskinvite/count"
            }
            var c = $("#j-invitetask-dom-tips-num");
            0 == c.size() && (c = $('<span class="menu-tips-num" id="j-invitetask-dom-tips-num"></span>')), $.getJSON(b() + "?jsonpcallback=?", function(b) {
                1 == b.state && a(b.msg.todo)
            })
        }

        function b() {
            var a = parseInt(f.css("padding-left")),
                b = f.outerWidth(),
                c = a - 3,
                d = b - a;
            return {
                width: d,
                alignX: c
            }
        }
        window.GetCookie || (window.GetCookie = ZDK.cookie.getCookie), GetCookie("userid") && a();
        var c = (window.location.href.indexOf("youxuan.") > -1 || window.location.href.indexOf("from=mall") > -1 ? "http://youxuan." : "http://search.") + PPInfo.baseURI,
            d = "http://search." + PPInfo.baseURI,
            e = {
                witkey: 1,
                task: 3,
                service: 2
            },
            f = $("#j-header-kw"),
            g = $("#j-header-searchform"),
            h = $('<input type="hidden" name="type" id="j-header-search-type" />').appendTo(g),
            i = b(),
            j = i.alignX,
            k = i.width;
        var l = $("#j-header-kw"),
            m = "请输入关键词",
            n = {
                dom: $("#j-placeholder-tip"),
                init: function() {
                    var a = this;
                    l.length && (this.dom.on("click", function() {
                        $("#j-header-kw").focus()
                    }), $("#j-header-kw").on("keyup", function() {
                        this.value ? a.hide() : a.show()
                    }), $("#j-header-search-btn").on("click", function(a) {
                        var b = (l.data("type"), window.PPInfo.searchCfg[l.data("type")]);
                        return b && (a.preventDefault(), !$("#j-header-kw").val()) ? void(document.location.href = $("#j-header-searchform").attr("action") + "?kw=" + encodeURIComponent(b.def_keyword)) : void $(this).parents("form").submit()
                    }), this.show())
                },
                setKw: function(a) {
                    var b = window.PPInfo.searchCfg[a];
                    b && (l.attr("data-default", b.def_keyword), $("#j-placeholder-tip").html(b.placeholder))
                },
                show: function() {
                    if (!l.val()) {
                        var a = window.PPInfo.searchCfg[l.data("type")];
                        a ? ($("#j-header-kw").removeAttr("placeholder"), this.dom.show()) : ($("#j-header-kw").attr("placeholder", m), this.dom.hide())
                    }
                },
                hide: function() {
                    var a = window.PPInfo.searchCfg[l.data("type")];
                    a || $("#j-header-kw").attr("placeholder", m), this.dom.hide()
                }
            };
        n.init();
        var o;
        $("#j-header-searchwrap li").click(function() {
            var a = $(this);
            o = a.data("type");
            var b;
            "witkey" == o ? b = 0 : "task" == o ? b = 1 : "service" == o && (b = 2), $("#j-header-searchlabel").text(a.find("a").text()), a.hide().siblings().show(), a.parent().hide(), f.data("type", o).focus();
            var d = $("#j-header-searchform")[0];
            0 == b ? d.action = c + "/p/" : 1 == b ? d.action = c + "/t/" : 2 == b && (d.action = c + "/s/"), n.setKw(o), n.show()
        });
        for (var p = ["wdzx", "bzsj", "wdtg", "tuiguang", "photo", "xcpsj", "logovi", "mhsj", "ggsj"], q = $(".ui-logo-sub span").attr("rel"), r = 0; r < p.length; r++) q == p[r] && $("#j-header-searchwrap li").last().click();
        $("#j-header-searchwrap").hover(function() {
            $(this).find(".ui-dropdown-menu").show()
        }, function() {
            $(this).find(".ui-dropdown-menu").hide()
        })
    }(), $(function() {
        function a() {
            $.ajax({
                url: c,
                type: "get",
                dataType: "jsonp",
                jsonp: "jsonp",
                data: {
                    pic: "1"
                },
                success: function(a) {
                    1 == a.state && (b.html(a.amount), a.amount > 0 && $("#withdraw-link,.withdraw-link").show())
                }
            })
        }
        var b = $("#my-balance-holder,.my-balance-holder"),
            c = "http://task." + PPInfo.baseURI + "/api/MyBalance";
        b.length > 0 && (location.host == "u." + PPInfo.baseURI ? a() : $(".item-userinfo .ui-dropdown").one("mouseover", function() {
            a()
        }))
    }),
    function() {
        document.location.href.indexOf("https://") >= 0 || document.cookie.indexOf("zbj_advert_zh") < 0 && $.getScript("http://intstyle.zhubajie.com/js/int.advert.min.js?v=20131231")
    }(),
    function() {
        function a(a) {
            var b = "\\bu\\." + window.PPInfo.baseURI;
            return a.match(new RegExp(b))
        }

        function b(b) {
            var d = c(b.target),
                e = d.href,
                f = +new Date;
            a(e) && !/_t=\d+/.test(e) && (e += (e.indexOf("?") < 0 ? "?" : "&") + "_t=" + f, d.href = e)
        }

        function c(a) {
            for (; a;) {
                if ("A" == a.nodeName) return a;
                a = a.parentNode
            }
            return null
        }
        $("div.ui-header").delegate("div.ui-dropdown a", "mouseover", function(a) {
            b(a)
        }), $("div.ui-header").delegate("div.lot a", "mouseover", function(a) {
            b(a)
        }), $("#J-header-logic1").delegate("a", "mouseover", function(a) {
            b(a)
        }), a(document.location.href) && $(document.body).delegate("a", "mouseover", function(a) {
            b(a)
        })
    }(),
    function() {
        function a() {
            1 !== c && (c = 1, b())
        }

        function b() {
            $.getScript(PPInfo.staticURI + "/mirror/static/feedback.js", function() {
                c = 4, $(document.body).undelegate("#j-feedback-btn", "mouseenter", a), $.feedback({
                    proxy: "http://slogger.zhubajie.com/html2canvasproxy.php",
                    html2canvasURL: PPInfo.staticURI + "/mirror/static/html2canvas.js",
                    feedbackBtnSelector: "#j-feedback-btn"
                })
            })
        }
        var c = 0;
        $(document.body).delegate("#j-feedback-btn", "mouseenter", a)
    }(),
    function() {
        var a = 0,
            b = $("#j-head-pubentry"),
            c = $("#j-ui-header-tasklist"),
            d = '{{#each data}}<div class="task-list-item clearfix"><div class="task-title"><span class="highlight">￥{{price}}</span> <a href="http://task.zhubajie.com/{{task_id}}" title="{{title}}" target="_blank">{{title}}</a></div><div class="task-detail"><span class="fr">{{day}}天完成</span><span class="fl">{{works_num}}个服务商参与</span></div></div>{{/each}}';
        b.ie6hover("ui-header-task-entry-hover"), b.on("mouseenter", function() {
            function e(a) {
                seajs.use("gallery/handlebars/1.0.2/handlebars", function(b) {
                    var c = b.compile(d);
                    $("#j-ui-header-tasklist").html(c({
                        data: a
                    })), f()
                })
            }

            function f() {
                var a = c.find(".task-list-item").length,
                    b = 0;
                setInterval(function() {
                    b += 1, b == a && (b = 0), c.animate({
                        "margin-top": 42 * -b
                    })
                }, 5e3)
            }
            a || (a = 1, document.location.href.indexOf("https://") >= 0 ? b.find(".task-panel-ft").hide() : $.ajax({
                url: "http://u." + PPInfo.baseURI + "/ajax/lasttasklist",
                dataType: "jsonp",
                jsonp: "jsonpcallback",
                success: function(a) {
                    e(a)
                }
            }))
        })
    }(),
    function() {
        if ("zhubajie.com" != PPInfo.baseURI) {
            var a = $("#j-zbj-header").find('a[data-process="1"], form[data-process="1"], area[data-process="1"]');
            a.each(function(a, b) {
                var c = "FORM" == b.nodeName ? "action" : "href",
                    d = b[c];
                b[c] = d.replace("zhubajie.com", PPInfo.baseURI)
            })
        }
    }(),
    function() {
        var a = $(".ui-header-a-d"),
            b = $("#j-tmp-mobile-entry");
        "0" == ZDK.cookie.getCookie("tmpmobileentry") && b.css("visibility", "visible");
        var c = function(a) {
            var b = new Date,
                c = b.getDate();
            return b.setDate(c + a), b
        };
        b.delegate("#j-mobile-entry-close,.j_mobile_entry_close", "click", function() {
            ZDK.cookie.setCookie("tmpmobileentry", 1, c(30), "/", PPInfo.pageDomain), b.css("visibility", "hidden")
        }), $(".ui-header-a-d .item-close").click(function() {
            ZDK.cookie.setCookie("head_a_d", 1, c(7), "/", PPInfo.pageDomain), a.hide()
        })
    }(),
    function() {
        function a(a, b, c) {
            return g[c + a] ? b(g[c + a]) : void $.ajax({
                url: c ? e + a : d,
                dataType: "jsonp",
                success: function(d) {
                    g[c + a] = d.data || [], b(g[c + a])
                }
            })
        }
        var b = $("#quickpub-sideblock");
        if (b.length) {
            var c = function(a, b, c) {
                    var d = b ? '<option value="-1">' + b + "</option>" : "";
                    return $.each(a, function(a, b) {
                        d += '<option value="' + b.virtual_id + '" ' + (c == b.virtual_id ? 'selected="selected"' : "") + ">" + b.virtual_name + "</option>"
                    }), d
                },
                d = "http://api." + window.PPInfo.baseURI + "/category/getvirtual?appid=a1321823faf68904&level=2",
                e = "http://api." + window.PPInfo.baseURI + "/category/getvirtual?appid=a1321823faf68904&id=",
                f = "http://task." + window.PPInfo.baseURI + "/pub/step2-category-",
                g = {},
                h = $("#quickpub-sideblock-cat1"),
                i = $("#quickpub-sideblock-cat2"),
                j = $("#quickpub-sideblock-form");
            a(0, function(b) {
                var d = c(b, "选择需求类目", h.attr("data-selected"));
                h.html(d), h.attr("data-selected") > 0 && a(h.attr("data-selected"), function(a) {
                    var b = c(a, "选择需求类目", i.attr("data-selected"));
                    i.html(b)
                }, !0)
            }), h.on("change", function() {
                var b = $(this).val();
                a(b, function(a) {
                    var b = c(a, "选择需求类目", i.attr("data-selected"));
                    i.html(b)
                }, !0)
            }), $("#quickpub-sideblock-submit").on("click", function() {
                var a = $(this).attr("data-fromcid"),
                    b = i.val();
                "-1" != b ? (j.attr("action", f + b + "?from_cid=" + a), j.submit()) : ZDK.module.verify.fn.errortips(i, i, "请选择类目", "cat2")
            })
        }
    }(),
    function() {
        function a(a) {
            a.uid = f("userid") || "", a.cid = f("uniqid") || "", a.utmb = f("__utmb") || "", a.utmz = f("__utmz") || "", a.t = Date.now ? Date.now() : +new Date, a.page = document.location.href, a.pagefrom = document.referrer, window.PPInfo.pageId && (a.pageId = window.PPInfo.pageId)
        }

        function b(b) {
            var f = $(b).data();
            a(f);
            var g = c(e, f);
            d(g)
        }

        function c(a, b) {
            var c = a + (a.indexOf("?") >= 0 ? "&" : "?"),
                d = 0,
                e = {
                    linkid: "linkId"
                };
            return $.each(b, function(a, b) {
                d > 0 && (c += "&"), c += (e[a] ? e[a] : a) + "=" + encodeURIComponent(b), d++
            }), c
        }

        function d(a) {
            var b = new Image;
            b.onload = b.onerror = function() {
                b = null
            }, b.src = a
        }
        var e = "http://click.log.zhubajie.com:8787",
            f = ZDK.cookie.getCookie;
        $(document.body).on("click", "[data-linkid]", function() {
            if (this.getAttribute("data-linkid")) {
                var a = $(this);
                b(a)
            }
        })
    }(),
    function() {
        if ($("body").hasClass("myzbj"))
            if ($(".nav.navt").length > 0) 0 === $(".user-ck:visible").length && $(".nav .tit.set").next().hasClass("user-ck") && $(".user-ck").eq(0).show();
            else {
                var a, b = $(".unselectable").find("li.sel");
                b.length > 0 ? (a = b.closest("ul").show(), a.prev(".tit-summary").removeClass("collapse")) : ($(".tit-summary").eq(0).removeClass("collapse"), $(".user-ck").eq(0).show()), $(".left-nav div.tit-summary").click(function() {
                    $(this).toggleClass("collapse"), $(this).next("ul").slideToggle()
                })
            }
    }(),
    function() {
        var a = $(".j-tgt-commond");
        a.each(function() {
            var a = $(this),
                b = a.attr("data-obtain");
            $.ajax({
                url: b,
                dataType: "jsonp",
                jsonp: "jsonpcallback",
                success: function(b) {
                    1 == b.state ? a.html(b.msg) : ZDK.Tips(b.msg, 3e3, "error")
                }
            })
        }), a.on("click", "a", function() {
            var a, b, c, d, e;
            if (a = $(this).closest(".j-tgt-commond"), c = a.attr("data-url"), window.location.host.indexOf("task.") > -1 ? (b = $(this).closest(".task-service-box-bd-list"), d = b.attr("data-id"), e = b.attr("data-loation")) : (b = $(this).closest("li"), d = b.attr("data-id"), e = b.attr("data-loation")), d) {
                var f = new Image;
                f.onload = f.onerror = function() {
                    f = null
                }, f.src = c + "/ad_click?ad_id=" + d + "&location=" + e
            }
        })
    }(),
    function() {
        function a() {
            function a() {
                function a() {
                    var b, c;
                    d.length ? (b = d.shift(), c = f) : (b = e.shift(), c = g), c.css(b), (d.length || e.length) && setTimeout(a, 30)
                }
                var d = $.extend([], b),
                    e = $.extend([], c),
                    f = $(".animate-mask2"),
                    g = $(".animate-mask1");
                setTimeout(a, 30)
            }
            var b = [{
                    width: "7px",
                    top: "7px",
                    left: "16px"
                }, {
                    width: "7px",
                    top: "9px",
                    left: "17px"
                }, {
                    width: "5px",
                    top: "11px",
                    left: "19px"
                }, {
                    width: "2px",
                    top: "10px",
                    left: "21px"
                }, {
                    width: "0px",
                    top: "10px",
                    left: "21px"
                }],
                c = [{
                    width: "12px",
                    left: "27px"
                }, {
                    width: "13px",
                    top: "6px"
                }, {
                    width: "11px",
                    height: "10px",
                    top: "6px",
                    left: "29px"
                }, {
                    width: "9px",
                    top: "6px",
                    left: "30px"
                }, {
                    width: "9px",
                    top: "6px",
                    left: "30px"
                }, {
                    width: "8px",
                    height: "10px",
                    top: "6px",
                    left: "31px"
                }, {
                    width: "6px",
                    top: "6px",
                    left: "32px"
                }, {
                    width: "4px",
                    height: "10px",
                    top: "6px",
                    left: "35px"
                }];
            a()
        }
        var b = $.browser.version,
            c = $.browser.msie && ("7.0" == b || "8.0" == b || "6.0" == b);
        return !$(".ibj-nav").length || c ? void $(".animate-mask").hide() : void $(".nav-youxuan a").mouseenter(function() {
            a()
        }).mouseleave(function() {
            $(".animate-mask").removeAttr("style")
        })
    }();
