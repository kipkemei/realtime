(function(e) {
    var n = {};

    function t(i) {
        if (n[i]) {
            return n[i].exports
        }
        var a = n[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        e[i].call(a.exports, a, a.exports, t);
        a.l = !0;
        return a.exports
    }
    t.m = e;
    t.c = n;
    t.d = function(e, n, i) {
        if (!t.o(e, n)) {
            Object.defineProperty(e, n, {
                configurable: !1,
                enumerable: !0,
                get: i
            })
        }
    };
    t.r = function(e) {
        Object.defineProperty(e, '__esModule', {
            value: !0
        })
    };
    t.n = function(e) {
        var n = e && e.__esModule ? function() {
            return e['default']
        } : function() {
            return e
        };
        t.d(n, 'a', n);
        return n
    };
    t.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    };
    t.p = '';
    return t(t.s = 559)
})([function(e, t, n) {
    'use strict';
    n.r(t);
    var i = n(1),
        a = n.n(i),
        r = n(8),
        l = n.n(r),
        s = n(83),
        d = n.n(s);
}, function(e, t, n) {
    var i, a, r, l, s, d = [].slice;
    a = n(2)['default'], i = '2015-02-17', a.wistia || (a.wistia = i, a.extend = function() {
        var e, t, n;
        return e = arguments[0], t = 2 <= arguments.length ? d.call(arguments, 1) : [], t.length || (t = [e], e = a), (n = a.obj).merge.apply(n, [e].concat(d.call(t))), e
    }, a.proto = function(e) {
        return null == e && (e = window.location.href), a.url.proto(e)
    }, a.data = function(e, t) {
        return a.obj.isArray(e) || (e = e.split('.')), null != t && a.obj.set(a, ['_data'].concat(e), t), a.obj.get(a, ['_data'].concat(e))
    }, a.removeData = function(e) {
        return a.obj.isArray(e) || (e = e.split('.')), a.obj.unset(a, ['_data'].concat(e))
    }, a.asyncChain = function(e, t, n) {
        var i, r, l, s, d, p, u;
        for (null == n && (n = 1), u = [], r = function(e) {
                var t;
                return t = function() {
                    var t;
                    try {
                        return e()
                    } catch (e) {
                        return t = e, a.error(t)
                    }
                }, u.push(new a.StopGo().run(t))
            }, (l = 0, d = t.length); l < d; l++) i = t[l], r(i);
        return s = u[u.length - 1], a._drainStopGosAsync(e, u), p = new a.StopGo, s.then(function() {
            return a.timeout(e + '.last', function() {
                return p.go()
            }, 0)
        }), p
    }, a.chain = function(t) {
        var n, e, i, r, l;
        for (l = new a.StopGo, i = 0, r = t.length; i < r; i++) {
            e = t[i];
            try {
                e()
            } catch (e) {
                n = e, a.error(n)
            }
        }
        return l.go(), l
    }, a._drainStopGosAsync = function(e, t, n) {
        var i;
        if (null == n && (n = 0), !(1 > t.length)) return i = t.shift(), i.run(function() {
            return a._drainStopGosAsync(e, t, n + 1)
        }), a.timeout(e + '.' + n, function() {
            return i.go()
        }, 0), i
    }, a.uniqId = function(e, t) {
        var n, i;
        return null == e && (e = ''), null == t && (t = ''), n = new Date().getTime(), window.performance && 'function' == typeof window.performance.now && (n += window.performance.now()), i = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx-xxxxxxxxx-xxxxxxxxxxxx-xxxx'.replace(/[xy]/g, function(e) {
            var t, i;
            return t = 0 | (n + 16 * Math.random()) % 16, n = Math.floor(n / 16), i = 'x' === e ? t : 8 | 3 & t, i.toString(16)
        }), e + i + t
    }, a.css = function() {
        var e, t, n;
        return 2 === arguments.length ? (n = arguments[0] || document.body || document.head, e = arguments[1]) : (n = document.body || document.head, e = arguments[0]), /\{/.test(e) && /\}/.test(e) ? a.util.addInlineCss(n, e) : (t = document.createElement('link'), t.setAttribute('rel', 'stylesheet'), t.setAttribute('href', e), a.elem.append(n, t), t)
    }, a.script = function() {
        var e, t;
        return t = 1 <= arguments.length ? d.call(arguments, 0) : [], (e = a.remote).scripts.apply(e, t)
    }, s = n(5), l = s.doTimeout, r = s.clearTimeouts, a.seqId = n(7)['default'], a.timeout = l, a.clearTimeouts = r);
}, function(e, t, n) {
    'use strict';
    n.r(t);
    var i = n(3);
    null == i['default'].Wistia && (i['default'].Wistia = {});
    var a = i['default'].Wistia;
    null == a._initializers && (a._initializers = {}), null == a._destructors && (a._destructors = {}), null == a.mixin && (a.mixin = function(e, t) {
        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
    });
    t['default'] = i['default'].Wistia;
}, function(e, t, n) {
    'use strict';
    n.r(t);
    (function(e) {
        var n;
        try {
            n = (0, eval)('this')
        } catch (t) {
            try {
                n = self
            } catch (t) {
                n = e
            }
        }
        t['default'] = n;
    }).call(this, n(4))
}, function(e) {
    var t = function() {
        return this
    }();
    try {
        t = t || Function('return this')() || (1, eval)('this')
    } catch (n) {
        'object' == typeof window && (t = window)
    }
    e.exports = t;
}, function(e, t, n) {
    'use strict';
    n.r(t);
    n.d(t, 'doTimeout', function() {
        return l
    });
    n.d(t, 'clearTimeouts', function() {
        return s
    });
    var i = n(2),
        a = n(6),
        r = i['default'];
    null == r._timeouts && (r._timeouts = {});
    var l = function(e, t) {
            var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 1;
            Object(a.isArray)(e) && (e = e.join('.'));
            var i = p(e);
            if (s(e, i), t) {
                var l = r._timeouts[i];
                null == l && (l = r._timeouts[i] = {});
                var d = setTimeout(function() {
                    delete l[e], t()
                }, n);
                return l[e] = d, d
            }
            return r._timeouts[i][e]
        },
        s = function(e) {
            var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
            Object(a.isArray)(e) && (e = e.join('.')), t = t || p(e);
            var n;
            if ('__global__' === t && (n = r._timeouts[e]))
                for (var i in n) {
                    var l = n[i];
                    clearTimeout(l), delete n[i]
                }
            if (n = r._timeouts[t], n)
                for (var s in n) {
                    var u = n[s];
                    s.indexOf && 0 === s.indexOf(e) && (s.length === e.length || '.' === s.charAt(e.length)) && (clearTimeout(u), delete n[s])
                }
            r.blockSweepTimeouts || (r.blockSweepTimeouts = !0, setTimeout(d, 0), setTimeout(function() {
                r.blockSweepTimeouts = !1
            }, 5e3))
        },
        d = function() {
            for (var e in r._timeouts) {
                var t = r._timeouts[e];
                Object(a.isEmpty)(t) && delete r._timeouts[e]
            }
        },
        p = function(e) {
            var t = e.indexOf('.');
            return 0 < t ? e.substring(0, t) : '__global__'
        };
}, function(e, t, n) {
    'use strict';
    n.r(t);
    n.d(t, 'merge', function() {
        return l
    });
    n.d(t, 'mergeOne', function() {
        return s
    });
    n.d(t, 'identityFunc', function() {
        return d
    });
    n.d(t, 'legacyShouldDeleteFromMerge', function() {
        return p
    });
    n.d(t, 'clone', function() {
        return u
    });
    n.d(t, 'get', function() {
        return c
    });
    n.d(t, 'set', function() {
        return m
    });
    n.d(t, 'unset', function() {
        return g
    });
    n.d(t, 'exists', function() {
        return h
    });
    n.d(t, 'assign', function() {
        return y
    });
    n.d(t, 'cast', function() {
        return _
    });
    n.d(t, 'castDeep', function() {
        return v
    });
    n.d(t, 'only', function() {
        return A
    });
    n.d(t, 'except', function() {
        return w
    });
    n.d(t, 'select', function() {
        return k
    });
    n.d(t, 'filter', function() {
        return P
    });
    n.d(t, 'values', function() {
        return C
    });
    n.d(t, 'sort', function() {
        return S
    });
    n.d(t, 'isArray', function() {
        return I
    });
    n.d(t, 'isObject', function() {
        return D
    });
    n.d(t, 'isFunction', function() {
        return B
    });
    n.d(t, 'isRegExp', function() {
        return O
    });
    n.d(t, 'isBasicType', function() {
        return L
    });
    n.d(t, 'isEmpty', function() {
        return N
    });
    n.d(t, 'isSubsetDeep', function() {
        return W
    });
    n.d(t, 'equalsDeep', function() {
        return R
    });
    n.d(t, 'eachDeep', function() {
        return H
    });
    n.d(t, 'eachLeaf', function() {
        return j
    });
    n.d(t, 'keys', function() {
        return z
    });
    n.d(t, 'pick', function() {
        return G
    });
    n.d(t, 'indexOf', function() {
        return Q
    });
    var a = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
        },
        r, i = Array.prototype.slice,
        l = function(e) {
            for (var t = arguments.length, n = Array(1 < t ? t - 1 : 0), a = 1; a < t; a++) n[a - 1] = arguments[a];
            if (0 === n.length) return e;
            for (var r = 0; r < n.length; r++) s(e, n[r]);
            return e
        },
        s = function e(t, n) {
            var a = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : d,
                r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : p;
            if (I(n)) {
                I(t) || (t = []);
                for (var l = 0; l < n.length; l++) {
                    var i = n[l],
                        s = e(t[l], i, a);
                    r(n, l, s) ? delete t[l] : t[l] = s
                }
                return a(t)
            }
            if (D(n)) {
                for (var u in n) {
                    var c = n[u];
                    I(c) ? (!I(t[u]) && (t[u] = []), e(t[u], c, a), t[u] = a(t[u])) : D(c) ? (!D(t[u]) && (t[u] = {}), e(t[u], c, a), t[u] = a(t[u])) : null == t ? (t = {}, !r(n, u, c) && (t[u] = a(c))) : r(n, u, c) ? delete t[u] : t[u] = a(c)
                }
                return a(t)
            }
            return a(n)
        },
        d = function(e) {
            return e
        },
        p = function(e, t, n) {
            return null == n
        },
        u = function(e, t) {
            return I(e) ? s([], e, t) : s({}, e, t)
        },
        c = function(e, t, n) {
            t = 'string' == typeof t ? t.split('.') : i.call(t);
            for (var a, r = e, l; null != e && t.length;) {
                l = t.shift();
                e[l] !== void 0 && (D(e[l]) || I(e[l])) || !n || (0 === l ? (e = r[a] = [], e[l] = {}) : e[l] = {}), r = e, a = l, e = e[l]
            }
            return e
        },
        m = function(e, t, n) {
            t = 'string' == typeof t ? t.split('.') : i.call(t);
            var a = t.pop();
            e = c(e, t, !0);
            null != e && (D(e) || I(e)) && null != a && (null == n ? delete e[a] : e[a] = n)
        },
        g = function(e, t) {
            return m(e, t)
        },
        h = function(e, t) {
            return c(e, t) !== void 0
        },
        y = function(e) {
            for (var t = arguments.length, n = Array(1 < t ? t - 1 : 0), a = 1; a < t; a++) n[a - 1] = arguments[a];
            for (var r = 0; r < n.length; r++) f(e, n[r]);
            return e
        },
        f = function(e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
            return e
        },
        _ = function(e) {
            return null == e ? e : D(e) || I(e) ? v(e) : b('' + e, e)
        },
        b = function(e) {
            var t = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : e;
            return /^\-?[1-9]\d*?$/.test(e) ? parseInt(e, 10) : '0' === e || '-0' === e ? 0 : /^\-?\d*\.\d+$/.test(e) ? parseFloat(e) : !!/^true$/i.test(e) || !/^false$/i.test(e) && t
        },
        v = function(e) {
            return s(e, e, function(e) {
                return 'string' == typeof e ? b(e) : e
            }, function() {
                return !1
            })
        },
        A = function(e, t) {
            for (var n = {}, a = {}, r = 0; r < t.length; r++) a[t[r]] = !0;
            for (var i in e) a[i] && (n[i] = e[i]);
            return n
        },
        w = function(e, t) {
            for (var n = {}, a = {}, r = 0; r < t.length; r++) a[t[r]] = !0;
            for (var i in e) a[i] || (n[i] = e[i]);
            return n
        },
        k = function(e, t) {
            for (var n, a = [], r = 'function' == typeof t, l = r ? t : null, s = 0; s < e.length; s++)
                if (n = e[s], r) l(n) && a.push(n);
                else {
                    var i = !0;
                    for (var d in t) {
                        var p = t[d];
                        if (p instanceof Array) {
                            if (!n[d] || n[d] < p[0] || n[d] > p[1]) {
                                i = !1;
                                break
                            }
                        } else if (p instanceof RegExp) {
                            if (!p.test(n[d])) {
                                i = !1;
                                break
                            }
                        } else if (p instanceof E) {
                            for (var u, c = !1, m = 0; m < p.values.length; m++)
                                if (u = p.values[m], n[d] === u) {
                                    c = !0;
                                    break
                                }
                            if (!c) {
                                i = !1;
                                break
                            }
                        } else if ('function' == typeof p) {
                            if (null == n[d] || !p(n[d])) {
                                i = !1;
                                break
                            }
                        } else if (n[d] !== p) {
                            i = !1;
                            break
                        }
                    }
                    i && a.push(n)
                }
            return a
        },
        E = function(e) {
            var t = this;
            return function() {
                t.values = e
            }(), t
        },
        C = function() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return new E(t)
        },
        S = function(e, t) {
            var n = 'function' == typeof t,
                a = n ? t : null,
                r = i.call(e);
            return n ? r.sort(a) : r.sort(function(e, n) {
                var i = t instanceof Array ? u(t) : t.split(/\s*,\s*/);
                for (var a = 0; 0 == a && 0 < i.length;) {
                    var r = i.shift().split(/\s+/),
                        l = r[0],
                        s = r[1];
                    if (s = 'desc' === s ? -1 : 1, e[l] < n[l]) {
                        a = -1 * s;
                        break
                    } else if (e[l] === n[l]) a = 0;
                    else {
                        a = 1 * s;
                        break
                    }
                }
                return a
            }), r
        },
        P = function(e, t, n) {
            for (var a = n === void 0 ? r : n, l = [], s = 0; s < e.length; s++) t.call(a, e[s], s, e) && l.push(e[s]);
            return l
        },
        T = /^\s*function Array()/,
        I = function(e) {
            return null != e && e.push && T.test(e.constructor)
        },
        x = /^\s*function Object()/,
        D = function(e) {
            return null != e && 'object' === ('undefined' == typeof e ? 'undefined' : a(e)) && x.test(e.constructor)
        },
        B = function(e) {
            return null != e && 'function' == typeof e
        },
        F = /^\s*function RegExp()/,
        O = function(e) {
            return null != e && F.test(e.constructor)
        },
        M = /^string|number|boolean|function$/i,
        L = function(e) {
            return null != e && (M.test('undefined' == typeof e ? 'undefined' : a(e)) || O(e))
        },
        N = function(e) {
            if (null == e) return !0;
            if (I(e) && !e.length) return !0;
            if (D(e)) {
                var t = !0;
                for (var n in e) {
                    t = !1;
                    break
                }
                return t
            }
            return !1
        },
        W = function(e, t) {
            if (e === t) return !0;
            if (null != e && null == t || null == e && null != t) return !1;
            var n = !0;
            return j(e, function(e, i) {
                var a = c(t, i);
                e !== a && (n = !1)
            }), n
        },
        R = function(e, t) {
            return W(e, t) && W(t, e)
        },
        H = function e(t, n, a, r, l) {
            if (null == a && (a = []), L(t)) n(t, a, r, l);
            else if (D(t) || I(t)) {
                for (var s in n(t, a, r, l), t)
                    if (t.hasOwnProperty(s)) {
                        var d = i.call(a);
                        d.push(s), e(t[s], n, d, t, s)
                    }
            } else n(t, a, r, l)
        },
        j = function(e, t) {
            H(e, function(e, n, i, a) {
                I(e) || D(e) || t(e, n, i, a)
            })
        },
        V = !{
            toString: null
        }.propertyIsEnumerable('toString'),
        U = ['toString', 'toLocaleString', 'valueOf', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'constructor'],
        z = function(e) {
            if (Object.keys) return Object.keys(e);
            if ('object' !== ('undefined' == typeof o ? 'undefined' : a(o)) && 'function' != typeof o || null === o) throw new TypeError('Object.keys called on a non-object');
            var t = [];
            if (V)
                for (var n, r = 0; r < U.length; r++) n = U[r], o.hasOwnProperty(n) && t.push(n);
            else
                for (var i in o) t.push(i);
            return t
        },
        G = function(e, t) {
            for (var n, a = {}, r = 0; r < t.length; r++) n = t[r], a[n] = e[n];
            return a
        },
        Q = function(e, t) {
            for (var n = 0; n < e.length; n++)
                if (e[n] === t) return n;
            return -1
        };
}, function(e, t, n) {
    'use strict';
    n.r(t);
    var i = n(2);
    t['default'] = function() {
        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 'wistia_',
            t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : '',
            n = i['default']._sequenceVal || 1;
        return i['default']._sequenceVal = n + 1, '' + e + n + t
    };
}, function(e, t, n) {
    n(9), n(39), n(40), n(48), n(49), n(50), n(51), n(52), n(53), n(54), n(55), n(56), n(57), n(58), n(59), n(60), n(61), n(62), n(63), n(64), n(65), n(66), n(67), n(68), n(70), n(71), n(72), n(73), n(74), n(75), n(76), n(77), n(78), n(79), n(81), n(82);
}, function(e, t, n) {
    'use strict';
    n.r(t);
    var i = n(2),
        a = n(10),
        r = n(7),
        l = n(13),
        s = n(6),
        d = n(14),
        p = n(15),
        u = n(16),
        c = n(19),
        m = n(24),
        g = n(11),
        h = n(12),
        y = n(25),
        f = n(26),
        _ = n(27),
        b = n(18),
        v = n(28),
        A = n(29),
        w = n(30),
        k = n(20),
        E = n(5),
        C = n(31),
        S = n(32),
        P = n(33),
        T = n(34),
        I = n(35),
        x = n(36),
        D = n(21),
        B = n.n(D),
        F = n(37),
        O = n(23),
        M = n.n(O),
        L = n(38),
        N = n.n(L),
        R = n(39),
        H = i['default'];
    null == H.libjs && (H.libjs = {}, H.libjs['utilities/seqid'] = r['default'], H.libjs['utilities/core'] = l, H.libjs['utilities/obj'] = s, H.libjs['utilities/url'] = p, H.libjs['utilities/color'] = d['default'], H.libjs['player/lib/assets'] = u, H.libjs['player/lib/elem'] = c, H.libjs['utilities/json'] = JSON, H.libjs['utilities/localstorage'] = m, H.libjs['utilities/wlog'] = g, H.libjs['utilities/detect'] = h, H.libjs['utilities/cacheable'] = y, H.libjs['utilities/event_loop'] = T, H.libjs['player/lib/jsonp'] = f, H.libjs['player/lib/hosts'] = b, H.libjs['player/lib/judy'] = _, H.libjs['player/lib/ajax'] = v, H.libjs['player/lib/fit-control'] = P, H.libjs['player/lib/media_data'] = A, H.libjs['player/lib/playlist_data'] = w, H.libjs['player/lib/script-utils'] = k, H.libjs['player/lib/timeout-utils'] = E, H.libjs['utilities/metrics'] = S, H.libjs['utilities/bindify'] = I, H.libjs['player/translations'] = x, H.libjs.preact = F['default'], H.libjs['utilities/stopgo'] = B.a, H.libjs.promiscuous = M.a, H.libjs['player/control_definitions'] = a, H.libjs.interpolation = N.a), H.lib = function(e) {
        var t = H.libjs[e];
        if (null == t) throw new Error('Internal import for "' + e + '" does not exist. Value is "' + t + '".');
        return t
    };
    t['default'] = H;
}, function(e, t, n) {
    'use strict';
    n.r(t);
    n.d(t, 'defineControl', function() {
        return s
    });
    n.d(t, 'getControlDefinitions', function() {
        return d
    });
    var i = n(2),
        a = n(7),
        r = n(11);
    null == i['default']._controlDefinitions && (i['default']._controlDefinitions = {});
    var l = function(e) {
            return 'control-bar-left' === e.type || 'control-bar-right' === e.type || 'lower-playbar' == e.type || 'upper-playbar' === e.type
        },
        s = function(e) {
            if (null == e.handle) return void r.wlog.error('Please specify a handle property for control', e);
            var t = i['default']._controlDefinitions[e.handle];
            null != t || (null == e.isVideoChrome && l(e) && (e.isVideoChrome = !0), i['default']._controlDefinitions[e.handle] = e, i['default'].trigger('controldefined', e))
        },
        d = function() {
            return i['default']._controlDefinitions || {}
        };
    i['default'].defineControl = s;
}, function(e, t, n) {
    'use strict';
    n.r(t);
    n.d(t, 'ERROR', function() {
        return s
    });
    n.d(t, 'WARNING', function() {
        return d
    });
    n.d(t, 'NOTICE', function() {
        return p
    });
    n.d(t, 'INFO', function() {
        return u
    });
    n.d(t, 'DEBUG', function() {
        return c
    });
    n.d(t, 'LOG_LEVELS', function() {
        return m
    });
    n.d(t, 'Logger', function() {
        return h
    });
    n.d(t, 'wlog', function() {
        return w
    });
    var a = n(12),
        r = n(2);

    function i(e) {
        if (Array.isArray(e)) {
            for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
            return n
        }
        return Array.from(e)
    }
    var l = Object(a.cachedDetect)(),
        s = 0,
        d = 1,
        p = 2,
        u = 3,
        c = 4,
        m = {
            ERROR: s,
            WARNING: d,
            NOTICE: p,
            INFO: u,
            DEBUG: c,
            error: s,
            warning: d,
            notice: p,
            info: u,
            debug: c
        },
        g = function() {},
        h = function(e) {
            var t = this;
            null == e && (e = {});
            return t.error = function() {
                    for (var e = arguments.length, n = Array(e), i = 0; i < e; i++) n[i] = arguments[i];
                    return t.log(s, n)
                }, t.warn = function() {
                    for (var e = arguments.length, n = Array(e), i = 0; i < e; i++) n[i] = arguments[i];
                    return t.log(d, n)
                }, t.notice = function() {
                    for (var e = arguments.length, n = Array(e), i = 0; i < e; i++) n[i] = arguments[i];
                    return t.log(d, n)
                }, t.info = function() {
                    for (var e = arguments.length, n = Array(e), i = 0; i < e; i++) n[i] = arguments[i];
                    return t.log(u, n)
                }, t.debug = function() {
                    for (var e = arguments.length, n = Array(e), i = 0; i < e; i++) n[i] = arguments[i];
                    return t.log(c, n)
                },
                function() {
                    t.ctx = e, t.ctx.initializedAt || t.reset()
                }(), t
        },
        y = h.prototype;
    y.reset = function() {
        this.ctx.level = s, this.ctx.grep = null, this.ctx.grepv = null, this.ctx.first1000LogLines = [], this.ctx.last1000LogLines = [], this.ctx.initializedAt = new Date().getTime()
    }, y.setLevel = function(e) {
        var t = this.logFunc(u);
        null == m[e] ? t('Unknown log level "' + e + '"') : (this.ctx.level = m[e], t('Log level set to "' + e + '" (' + m[e] + ')'))
    }, y.setGrep = function(e) {
        this.ctx.grep = e
    }, y.setGrepv = function(e) {
        this.ctx.grepv = e
    }, y.first1000LogLines = function() {
        return this.ctx.first1000LogLines
    }, y.last1000LogLines = function() {
        return this.ctx.last1000LogLines
    }, y.matchedGrep = function(e) {
        var t = !1;
        if (this.ctx.grep || this.ctx.grepv) {
            for (var n = [], a = 0; a < e.length; a++) try {
                var i = e[a];
                n.push(i.toString && i.toString())
            } catch (t) {
                n.push('')
            }
            var r = n.join(' '),
                l = !this.ctx.grep || r.match(this.ctx.grep),
                s = !this.ctx.grepv || !r.match(this.ctx.grepv);
            t = l && s
        } else t = !0;
        return t
    }, y.now = function() {
        return 'undefined' != typeof performance && 'function' == typeof performance.now ? performance.now().toFixed(3) : Date.now ? Date.now() - this.ctx.initializedAt : new Date().getTime() - this.ctx.initializedAt
    }, y.messagesToLogLine = function(e, t, n) {
        var i = [e, t];
        i = i.concat(n);
        var a;
        try {
            a = i.join(' ') || '', 200 < a.length && (a = a.slice(0, 200))
        } catch (e) {
            a = 'could not serialize'
        }
        return a
    }, y.persistLine = function(e) {
        1e3 > this.ctx.first1000LogLines.length ? this.ctx.first1000LogLines.push(e) : (1e3 <= this.ctx.last1000LogLines.length && this.ctx.last1000LogLines.shift(), this.ctx.last1000LogLines.push(e))
    }, y.log = function(t, n) {
        var a, r = t <= this.ctx.level,
            s = t < c,
            d = (r || s) && this.matchedGrep(n);
        if (d && (r || s) && (a = this.now()), s && d) {
            var p = this.messagesToLogLine(t, a, n);
            this.persistLine(p)
        }
        if (r && d) {
            var u, e = this.logFunc(t);
            1 === n.length && (u = n[0]) instanceof Error ? (e(u.message), u.stack && e(u.stack)) : l.browser.msie && (9 > l.browser.version || l.browser.quirks) ? e(n.join(' ')) : e.apply(void 0, i(n))
        }
    };
    var f = function() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            console.error.apply(console, t)
        },
        _ = function() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            console.warn.apply(console, t)
        },
        b = function() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            console.info.apply(console, t)
        },
        v = function() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            console.debug.apply(console, t)
        },
        A = function(e) {
            console.log.apply(console, e)
        };
    y.logFunc = function(e) {
        if (null == e && (e = this.level), !console) return g;
        var t;
        return e === s ? t = f : e === d ? t = _ : e === u ? t = b : e === c && (t = v), t || (t = A), 'function' != typeof t && (this.noConsoleLog = !0, t = g), t
    }, y.maybePrefix = function(t, e) {
        if (t) {
            if ('function' == typeof t) try {
                t = t()
            } catch (n) {
                t = 'prefix err "' + n.message + '"'
            }
            return t instanceof Array ? t.concat(e) : [t].concat(e)
        }
        return e
    }, y.getPrefixedFunctions = function(e) {
        var t = this;
        return {
            log: function() {
                for (var n = arguments.length, i = Array(n), a = 0; a < n; a++) i[a] = arguments[a];
                return t.log(s, t.maybePrefix(e, i))
            },
            error: function() {
                for (var n = arguments.length, i = Array(n), a = 0; a < n; a++) i[a] = arguments[a];
                return t.log(s, t.maybePrefix(e, i))
            },
            warn: function() {
                for (var n = arguments.length, i = Array(n), a = 0; a < n; a++) i[a] = arguments[a];
                return t.log(d, t.maybePrefix(e, i))
            },
            notice: function() {
                for (var n = arguments.length, i = Array(n), a = 0; a < n; a++) i[a] = arguments[a];
                return t.log(d, t.maybePrefix(e, i))
            },
            info: function() {
                for (var n = arguments.length, i = Array(n), a = 0; a < n; a++) i[a] = arguments[a];
                return t.log(u, t.maybePrefix(e, i))
            },
            debug: function() {
                for (var n = arguments.length, i = Array(n), a = 0; a < n; a++) i[a] = arguments[a];
                return t.log(c, t.maybePrefix(e, i))
            }
        }
    }, r['default'] && null == r['default'].wlogCtx && (r['default'].wlogCtx = {});
    var w = new h(r['default'].wlogCtx);
}, function(e, t, n) {
    'use strict';
    n.r(t);
    n.d(t, 'callingPlayRequiresEventContext', function() {
        return le
    });
    n.d(t, 'cachedDetect', function() {
        return se
    });
    n.d(t, 'uncachedDetect', function() {
        return de
    });
    n.d(t, 'clearDetectCache', function() {
        return pe
    });
    var i = n(2),
        a = n(3),
        r, l = navigator.userAgent,
        s = /(webkit)[ \/]([^\s]+)/i,
        d = /OPR\/([^\s]+)/i,
        p = /(msie) ([^\s;]+)/i,
        u = /(trident)\/\s*([^;]+)/i,
        c = /(edge)\/(\d+(?:\.\d+)?)/i,
        m = /(mozilla)(?:.*? rv:([^\s\)]+))?/i,
        g = /(android) ([^;]+)/i,
        h = /(iphone)/i,
        y = /(ipad)/i,
        f = /(Windows Phone OS (\d+(?:\.\d+)?))/,
        _ = /OS (\d+)_(\d+)/i,
        b = /(playstation 3)/i,
        v = /BlackBerry|BB10/i,
        A = /(firefox)/i,
        w = /Mobile VR/i,
        k = function() {
            return (C()[1] || 'webkit').toLowerCase()
        },
        E = function() {
            return C()[2]
        },
        C = function() {
            var e;
            return (e = l.match(s)) ? e : (e = l.match(d)) ? e : (e = l.match(p)) ? (null != document.documentMode && (e[2] = document.documentMode), e) : (e = l.match(m)) ? e : []
        },
        S = function() {
            var e = l.match(g);
            return null != e && {
                version: e[2]
            }
        },
        P = function() {
            return S() && '4.1.0' > S().version && !H()
        },
        T = function() {
            return h.test(l)
        },
        I = function() {
            return 0 < N() || S()
        },
        x = function() {
            return v.test(l)
        },
        D = function() {
            return null != a['default'].devicePixelRatio && 1 < a['default'].devicePixelRatio
        },
        B = function() {
            return y.test(l)
        },
        F = function() {
            return s.test(l) && !/chrome/i.test(l) && !B() && !T()
        },
        O = function() {
            return /Chrome/.test(l) && /Google Inc/.test(navigator.vendor) && {
                version: M()
            }
        },
        M = function() {
            var e = l.match(/\bChrome\/([^\s]+)/);
            return e && e[1]
        },
        L = function() {
            return d.test(l)
        },
        N = function() {
            var e = l.match(_);
            return null == e ? 0 : parseFloat(e[1] + '.' + e[2])
        },
        W = function() {
            return f.test(l)
        },
        R = function() {
            return b.test(l)
        },
        H = function() {
            return u.test(l)
        },
        j = function() {
            return c.test(l)
        },
        V = function() {
            return A.test(l)
        },
        U = function() {
            return w.test(l)
        },
        z = function() {
            return /win/i.test(navigator.platform)
        },
        G = function() {
            return /mac/i.test(navigator.platform)
        },
        Q = function() {
            return /linux/i.test(navigator.platform)
        },
        q = function() {
            var e = K();
            return {
                version: parseFloat(e[0] + '.' + e[1]),
                major: parseInt(e[0]),
                minor: parseInt(e[1]),
                rev: parseInt(e[2])
            }
        },
        K = function() {
            try {
                try {
                    var e = new ActiveXObject('ShockwaveFlash.ShockwaveFlash.6');
                    try {
                        e.AllowScriptAccess = 'always'
                    } catch (t) {
                        return [6, 0, 0]
                    }
                } catch (t) {}
                return new ActiveXObject('ShockwaveFlash.ShockwaveFlash').GetVariable('$version').replace(/\D+/g, ',').match(/^,?(.+),?$/)[1].split(',')
            } catch (t) {
                try {
                    if (navigator.mimeTypes['application/x-shockwave-flash'].enabledPlugin) return (navigator.plugins['Shockwave Flash 2.0'] || navigator.plugins['Shockwave Flash']).description.replace(/\D+/g, ',').match(/^,?(.+),?$/)[1].split(',')
                } catch (t) {}
            }
            return [0, 0, 0]
        },
        Y = function() {
            var e = document.createElement('video'),
                t = !1;
            try {
                if (!!e.canPlayType) {
                    t = {};
                    var n = 'video/mp4; codecs="avc1.42E01E';
                    t.h264 = !!e.canPlayType(n + '"') || !!e.canPlayType(n + ', mp4a.40.2"'), t.webm = !!e.canPlayType('video/webm; codecs="vp9, vorbis"'), t.nativeHls = !!e.canPlayType('application/vnd.apple.mpegURL')
                }
            } catch (n) {
                t = {
                    ogg: !1,
                    h264: !1,
                    webm: !1,
                    nativeHls: !1
                }
            }
            return t
        },
        X = function() {
            return a['default'].MediaSource && a['default'].MediaSource.isTypeSupported('video/mp4; codecs="avc1.42E01E' + ', mp4a.40.2"')
        },
        J = function() {
            return (T() || B() || F()) && !H() && Y().nativeHls
        },
        Z = function() {
            try {
                return 'localStorage' in a['default'] && null != a['default'].localStorage
            } catch (t) {
                return !1
            }
        },
        $ = function() {
            return !!(a['default'].JSON && 'function' == typeof JSON.parse)
        },
        ee = function() {
            var e = document.createElement('div');
            return '' === e.style.backgroundSize || '' === e.style.webkitBackgroundSize || '' === e.style.mozBackgroundSize || '' === e.style.oBackgroundSize
        },
        te = function() {
            return document.fullscreenEnabled || document.mozFullScreenEnabled || document.webkitFullscreenEnabled || document.msFullscreenEnabled
        },
        ne = ['WebKit', 'Moz', 'O', 'Ms', ''],
        oe = function() {
            for (var e = 0; e < ne.length; e++) {
                var t = ne[e],
                    n = t + 'MutationObserver';
                if (a['default'][n]) return n
            }
            return null
        },
        ie = function() {
            return !(T() || B() || S() || x() || !/webkit|mozilla/.test(k()) && ('msie' !== k() || !(11 <= E())) || !Y().h264 || !Object.defineProperties)
        },
        ae = function() {
            return O() || V() || j() || H() ? 'probably' : !!F() && 'maybe'
        },
        re = function() {
            if (null != r) return r;
            try {
                var e = Object.defineProperty({}, 'passive', {
                    get: function() {
                        r = !0
                    }
                });
                window.addEventListener('test', null, e)
            } catch (e) {
                r = !1
            }
            return r
        },
        le = function() {
            return 0 < N() || S() || F()
        },
        se = function() {
            return i['default']._detectCache ? i['default']._detectCache : (i['default']._detectCache = de(), i['default']._detectCache)
        },
        de = function() {
            var e = {
                browser: {
                    version: E(),
                    quirks: 'msie' === k() && 'BackCompat' === document.compatMode,
                    old: 'msie' === k() && ('BackCompat' === document.compatMode || 7 > E()),
                    ltie8: 'msie' === k() && ('BackCompat' === document.compatMode || 8 > E())
                },
                trident: H(),
                edge: j(),
                firefox: V(),
                gearvr: U(),
                android: S(),
                oldandroid: P(),
                iphone: T(),
                ipad: B(),
                blackberry: x(),
                safari: F(),
                chrome: O(),
                opera: L(),
                winphone: {
                    version: W()[2]
                },
                ios: {
                    version: N()
                },
                windows: z(),
                mac: G(),
                linux: Q(),
                retina: D(),
                touchScreen: I(),
                ps3: R(),
                flash: q(),
                video: Y(),
                mediaSource: X(),
                nativeHls: J(),
                localstorage: Z(),
                json: $(),
                backgroundSize: ee(),
                fullscreenEnabled: te(),
                vulcanSupport: ie(),
                mutationObserver: oe(),
                autoPlayWithSound: ae(),
                callingPlayRequiresEventContext: le(),
                passiveSupported: re()
            };
            return e.browser[k()] = !0, e
        },
        pe = function() {
            i['default']._detectCache = null
        };
}, function(e, t, n) {
    'use strict';
    n.r(t);
    n.d(t, 'unbreakifyText', function() {
        return i
    });
    n.d(t, 'unescapeHtml', function() {
        return a
    });
    n.d(t, 'stripHtml', function() {
        return r
    });
    n.d(t, 'camelCase', function() {
        return l
    });
    n.d(t, 'snakeCase', function() {
        return s
    });
    n.d(t, 'shallowCamelizeKeys', function() {
        return d
    });
    n.d(t, 'shallowSnakeKeys', function() {
        return p
    });
    n.d(t, 'base64Decode', function() {
        return c
    });
    n.d(t, 'base64Encode', function() {
        return m
    });
    n.d(t, 'notSetOrTrue', function() {
        return g
    });
    n.d(t, 'niceDuration', function() {
        return h
    });
    n.d(t, 'padNumber', function() {
        return y
    });
    n.d(t, 'preventOuterMouseWheel', function() {
        return f
    });
    n.d(t, 'poll', function() {
        return _
    });
    n.d(t, 'throttle', function() {
        return b
    });
    var i = function() {
            var e = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : '';
            return e.replace(' ', '&nbsp;')
        },
        a = function(t) {
            var n = document.createElement('div');
            return n.innerHTML = t.toString().replace(/</g, '&lt;').replace(/>/g, '&gt;'), 0 < n.childNodes.length ? n.childNodes[0].nodeValue : ''
        },
        r = function(e) {
            var t = document.createElement('div');
            return t.innerHTML = e, t.textContent || t.innerText || ''
        },
        l = function(e) {
            return e.replace(/[_-]([a-z])/g, function(e) {
                return e.charAt(1).toUpperCase()
            })
        },
        s = function(e) {
            return e.replace(/[A-Z]/g, function(e) {
                return '_' + e.toLowerCase()
            })
        },
        d = function(e) {
            return Object.keys(e).reduce(function(t, n) {
                return t[l(n)] = e[n], t
            }, {})
        },
        p = function(e) {
            return Object.keys(e).reduce(function(t, n) {
                return t[s(n)] = e[n], t
            }, {})
        },
        u = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
        c = function(e) {
            var t = String.fromCharCode,
                n = 0,
                i = '';
            for (e = e.replace(/[^A-Za-z0-9\+\/\=]/g, ''); n < e.length;) {
                var a = u.indexOf(e.charAt(n++)),
                    r = u.indexOf(e.charAt(n++)),
                    l = u.indexOf(e.charAt(n++)),
                    s = u.indexOf(e.charAt(n++));
                i += t(a << 2 | r >> 4), 64 != l && (i += t((15 & r) << 4 | l >> 2)), 64 != s && (i += t((3 & l) << 6 | s))
            }
            return i
        },
        m = function(e) {
            for (var t = 0, n = ''; t < e.length;) {
                var i = e.charCodeAt(t++),
                    a = e.charCodeAt(t++),
                    r = e.charCodeAt(t++),
                    l = (15 & a) << 2 | r >> 6,
                    s = 63 & r;
                isNaN(a) ? l = s = 64 : isNaN(r) && (s = 64), n = n + u.charAt(i >> 2) + u.charAt((3 & i) << 4 | a >> 4) + u.charAt(l) + u.charAt(s)
            }
            return n
        },
        g = function(e) {
            return null == e || !0 === e
        },
        h = function(e) {
            var t = Math.floor,
                n = 0,
                i = 0,
                a = 0;
            return 0 < e && (n += t(e / 3600), e %= 3600), 0 < e && (i += t(e / 60), e %= 60), a = Math.round(e), 60 === i && (n += 1, i = 0), 60 === a && (i += 1, a = 0), 0 === n ? i + ':' + y(a, 2) : n + ':' + y(i, 2) + ':' + y(a, 2)
        },
        y = function(e) {
            for (var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0, n = '' + e; n.length < t;) n = '0' + n;
            return n
        },
        f = function(t, e) {
            var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : 0,
                i = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : 0,
                a = e.scrollTop,
                r = e.scrollHeight,
                l = e.offsetHeight,
                s = function() {
                    var e = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : 0;
                    return 0 >= a + e - n
                },
                d = function() {
                    var e = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : 0;
                    return a + e + i >= r - l
                },
                p = t.deltaY || -t.wheelDelta,
                u = 0 < p ? 'down' : 'up',
                c = !!t.deltaY;
            if (c)('up' == u && s() || 'down' == u && d()) && t.preventDefault();
            else {
                var m = 47.5 * p / 120;
                'up' == u && s(m) ? (t.preventDefault(), e.scrollTop = 0) : 'down' == u && d(m) && (t.preventDefault(), e.scrollTop = r - l)
            }
        },
        _ = function(e, t) {
            var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : 50,
                i = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : 5e3,
                a = arguments[4],
                r = null,
                l = new Date().getTime();
            r = setTimeout(function s() {
                return new Date().getTime() - l > i ? void('function' == typeof a && a()) : void(e() ? t() : (clearTimeout(r), r = setTimeout(s, n)))
            }, 1)
        },
        b = function(e, t) {
            var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : {},
                i = null,
                a = null,
                r = null,
                l = null,
                s = 0,
                d = function() {
                    s = !1 === n.leading ? 0 : new Date().getTime(), l = null, r = t.apply(i, a), l || (i = a = null)
                };
            return function() {
                var p = new Date().getTime();
                s || !1 !== n.leading || (s = p);
                var u = e - (p - s);
                return i = this, a = arguments, 0 >= u || u > e ? (clearTimeout(l), l = null, s = p, r = t.apply(i, a), !l && (i = a = null)) : !l && !1 !== n.trailing && (l = setTimeout(d, u)), r
            }
        };
}, function(e, t, n) {
    'use strict';
    n.r(t);
    var a = n(2),
        r = n(12),
        l = function() {
            function e(e, t) {
                for (var n, a = 0; a < t.length; a++) n = t[a], n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }();

    function i(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
    }
    var s = Object(r.cachedDetect)(),
        d = /^#?([0-9a-f]{3,4}|[0-9a-f]{6,8})$/i,
        p = /^rgba?\((\d{1,3}(?:\.\d+)?%?),\s*(\d{1,3}(?:\.\d+)?%?),\s*(\d{1,3}(?:\.\d+)?%?)(?:,\s*([01]?\.?\d*))?\)$/,
        u = /^\d+(\.\d+)*%$/,
        c = /([0-9a-f])/gi,
        m = function(e) {
            return u.test(e) ? 2.55 * parseFloat(e) : e
        },
        g = function(e, t, n) {
            return 0 > n && (n += 1), 1 < n && (n -= 1), n < 1 / 6 ? e + 6 * (t - e) * n : n < 1 / 2 ? t : n < 2 / 3 ? e + 6 * ((t - e) * (2 / 3 - n)) : e
        },
        h = function() {
            function e(t) {
                i(this, e), t instanceof e ? (this.r = t.r, this.g = t.g, this.b = t.b, this.a = t.a) : t ? this.parse(t) : (this.r = this.g = this.b = 0, this.a = 1)
            }
            var t = Math.round,
                n = Math.min,
                a = Math.max;
            return l(e, [{
                key: 'parse',
                value: function(e) {
                    if (e += '', d.test(e)) {
                        var t = e.replace(/^\#/, '');
                        (3 === t.length || 4 === t.length) && (t = t.replace(c, '$1$1')), this.r = parseInt(t.substr(0, 2), 16), this.g = parseInt(t.substr(2, 2), 16), this.b = parseInt(t.substr(4, 2), 16), this.a = 8 === t.length ? parseInt(t.substr(6, 2), 16) / 255 : 1
                    } else p.test(e) && (parts = e.match(p), this.r = parseFloat(m(parts[1])), this.g = parseFloat(m(parts[2])), this.b = parseFloat(m(parts[3])), this.a = parts[4] ? parseFloat(parts[4]) : 1);
                    return this
                }
            }, {
                key: 'clone',
                value: function() {
                    return new e(this)
                }
            }, {
                key: '_hslFromRgb',
                value: function() {
                    var e = this.r / 255,
                        t = this.g / 255,
                        i = this.b / 255,
                        r = a(e, t, i),
                        p = n(e, t, i),
                        u = (r + p) / 2;
                    r === p && (this._h = this._s = 0);
                    var l, s = r - p;
                    if (0 == s) return this._h = 0, this._s = 0, this._l = 100 * e, this;
                    l = .5 < u ? s / (2 - r - p) : s / (r + p);
                    var d;
                    return d = r === e ? (t - i) / s + (t < i ? 6 : 0) : r === t ? (i - e) / s + 2 : (e - t) / s + 4, d /= 6, this._h = 360 * d, this._s = 100 * l, this._l = 100 * u, this
                }
            }, {
                key: '_rgbFromHsl',
                value: function() {
                    var e = this._h / 360,
                        t = this._s / 100,
                        n = this._l / 100,
                        i = .5 > n ? n * (1 + t) : n + t - n * t,
                        a = 2 * n - i;
                    return this.r = 255 * g(a, i, e + 1 / 3), this.g = 255 * g(a, i, e), this.b = 255 * g(a, i, e - 1 / 3), this
                }
            }, {
                key: 'blendChannel',
                value: function(e, t, n) {
                    return this[e] = n * t + (1 - n) * this[e], this
                }
            }, {
                key: 'blend',
                value: function(t, n) {
                    return t = new e(t), this.blendChannel('r', t.r, n), this.blendChannel('g', t.g, n), this.blendChannel('b', t.b, n), this
                }
            }, {
                key: 'lightenChannel',
                value: function(e, t) {
                    return this[e] += t, 0 > this[e] ? this[e] = 0 : 255 < this[e] && (this[e] = 255), this
                }
            }, {
                key: 'lighten',
                value: function(e) {
                    return this.looksLikePercent(e) ? this.lightness(this.lightness() + parseFloat(e)) : (this.lightenChannel('r', e), this.lightenChannel('g', e), this.lightenChannel('b', e)), this
                }
            }, {
                key: 'darken',
                value: function(e) {
                    return 'string' == typeof e ? this.lighten('-' + e) : this.lighten(-e)
                }
            }, {
                key: 'looksLikePercent',
                value: function(e) {
                    return /^\-?\d+(\.\d+)?%$/.test(e)
                }
            }, {
                key: 'lightness',
                value: function(e) {
                    return this._hslFromRgb(), null == e ? this._l : (this._l = a(0, n(100, e)), this._rgbFromHsl(), this)
                }
            }, {
                key: 'saturation',
                value: function(e) {
                    return this._hslFromRgb(), null == e ? this._s : (this._s = a(0, n(100, e)), this._rgbFromHsl(), this)
                }
            }, {
                key: 'grayLevel',
                value: function() {
                    return (.299 * this.r + .587 * this.g + .114 * this.b) / 255
                }
            }, {
                key: 'whiteLevel',
                value: function() {
                    return n(n(this.r, this.g), this.b)
                }
            }, {
                key: 'isGrayscale',
                value: function() {
                    return this.r === this.g && this.g === this.b
                }
            }, {
                key: 'distanceFrom',
                value: function(e) {
                    var t = Math.pow;
                    return Math.sqrt(t(this.r - e.r, 2) + t(this.g - e.g, 2) + t(this.b - e.b, 2))
                }
            }, {
                key: 'channelDominance',
                value: function() {
                    var e = this;
                    return ['r', 'g', 'b'].sort(function(t, n) {
                        return e[n] - e[t]
                    })
                }
            }, {
                key: 'alpha',
                value: function(e) {
                    return null == e ? this.a : (this.a = e, this)
                }
            }, {
                key: 'red',
                value: function(e) {
                    return null == e ? this.r : (this.r = e, this)
                }
            }, {
                key: 'green',
                value: function(e) {
                    return null == e ? this.g : (this.g = e, this)
                }
            }, {
                key: 'blue',
                value: function(e) {
                    return null == e ? this.b : (this.b = e, this)
                }
            }, {
                key: 'toHex',
                value: function() {
                    var e = t(this.r).toString(16),
                        n = t(this.g).toString(16),
                        i = t(this.b).toString(16);
                    return 1 === e.length && (e = '0' + e), 1 === n.length && (n = '0' + n), 1 === i.length && (i = '0' + i), '' + e + n + i
                }
            }, {
                key: 'toHexWithAlpha',
                value: function() {
                    var e = t(255 * this.a).toString(16);
                    return 1 === e.length && (e = '0' + e), '' + e + this.toHex()
                }
            }, {
                key: 'toRgb',
                value: function() {
                    return 'rgb(' + t(this.r) + ',' + t(this.g) + ',' + t(this.b) + ')'
                }
            }, {
                key: 'toRgba',
                value: function() {
                    return 'rgba(' + t(this.r) + ',' + t(this.g) + ',' + t(this.b) + ',' + this.a + ')'
                }
            }, {
                key: 'toRgbaOrHex',
                value: function() {
                    return s.browser.msie && 9 > s.browser.version ? '#' + this.toHex() : this.toRgba()
                }
            }, {
                key: 'toPercent',
                value: function() {
                    return 'rgba(' + 100 * (this.r / 255) + '%,' + 100 * (this.g / 255) + '%,' + 100 * (this.b / 255) + '%,' + this.a + ')'
                }
            }, {
                key: 'toIeGradient',
                value: function() {
                    return 'progid:DXImageTransform.Microsoft.gradient(startColorStr=\'#' + this.toHexWithAlpha() + '\', endColorStr=\'#' + this.toHexWithAlpha() + '\')'
                }
            }, {
                key: 'toString',
                value: function() {
                    return this.toPercent()
                }
            }]), e
        }();
    t['default'] = h;
}, function(e, t, n) {
    'use strict';
    n.r(t);
    n.d(t, 'proto', function() {
        return l
    });
    n.d(t, 'queryParamsToObject', function() {
        return s
    });
    n.d(t, 'urlComponentToObject', function() {
        return d
    });
    n.d(t, 'objectToQueryParams', function() {
        return p
    });
    n.d(t, 'splitPath', function() {
        return u
    });
    n.d(t, 'joinPath', function() {
        return c
    });
    n.d(t, 'brack', function() {
        return m
    });
    n.d(t, 'debrack', function() {
        return g
    });
    n.d(t, 'Url', function() {
        return y
    });
    var a = n(6),
        i = n(11),
        r = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
        },
        l = function() {
            var e = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : location.href;
            return /^http:\/\//.test(e) ? 'http:' : 'https:'
        },
        s = function(e) {
            var t = {};
            if (!e) return t;
            for (var n = e.split('&'), r = 0; r < n.length; r++) {
                var l = n[r],
                    s = l.split('='),
                    p = s[0],
                    u = s[1];
                try {
                    p = g(decodeURIComponent(p)) || ''
                } catch (t) {
                    setTimeout(function() {
                        i.wlog.notice(t)
                    }, 50), p = ''
                }
                a.cast(p);
                var c = a.get(t, p);
                if (!(null != c)) a.set(t, p, d(u));
                else if (a.isArray(c)) c.push(d(u));
                else {
                    var m = [c];
                    m.push(d(u)), a.set(t, p, m)
                }
            }
            return t
        },
        d = function(t) {
            var n;
            try {
                n = decodeURIComponent(t)
            } catch (a) {
                setTimeout(function() {
                    i.wlog.notice(a)
                }, 50), n = t
            }
            if ('string' == typeof t && /^[\{\[].*[\}\]]$/.test(n)) try {
                return JSON.parse(n)
            } catch (t) {
                return n
            } else return n
        },
        p = function(e) {
            var t = [];
            return a.eachLeaf(e, function(e, n) {
                t.push(encodeURIComponent(m(n)) + '=' + encodeURIComponent(e))
            }), t.join('&')
        },
        u = function(e) {
            var t = [];
            if (null == e) return t;
            for (var n, a = e.split(/\/+/), r = 0; r < a.length; r++) n = a[r], null != n && '' !== n && t.push(n);
            return t
        },
        c = function(e) {
            return 'string' == typeof e && (e = e.split('/')), null == e ? '' : '/' + e.join('/')
        },
        m = function(e) {
            for (var t = e[0], n = 1; n < e.length; n++) t += '[' + e[n] + ']';
            return t
        },
        g = function(e) {
            return e.match(/([\w\-\_]+)/g)
        },
        h = ['protocol', 'host', 'port', 'params', 'path'],
        y = function(e) {
            var t = this;
            return function() {
                t.params = {}, t.path = [], t.host = '', 'object' === ('undefined' == typeof e ? 'undefined' : r(e)) ? t.fromOptions(e) : e && t.fromRaw(e)
            }(), t
        },
        f = y.prototype;
    f.fromOptions = function(e) {
        for (var t, n = 0; n < h.length; n++) t = h[n], null != e[t] && (this[t] = e[t]);
        return this
    }, f.fromRaw = function(e) {
        this.rawUrl = e;
        var t;
        return (t = e.match(/^((?:https?\:)|(?:file\:)|(?:ftp\:))?\/\//)) && (this.protocol = t[1] || void 0), (t = e.match(/\/\/([^\:\?\/]*)/)) && (this.host = t[1] || void 0), ((t = e.match(/\/\/.*?(\/[^\?#$]+)/)) || (t = e.match(/(^\/[^\/][^\?#$]+)/))) && (this.rawPath = t[1], this._hasTrailingSlash = /\/$/.test(this.rawPath), this.path = u(this.rawPath)), (t = e.match(/\:(\d+)/)) && (this.port = parseInt(t[1], 10)), (t = e.match(/\?([^#]+)/)) && (this.rawParams = t[1], this.params = s(this.rawParams)), (t = e.match(/#(.*)$/)) && (this.anchor = t[1]), this
    }, f.clone = function() {
        return new y({
            protocol: this.protocol,
            host: this.host,
            port: this.port,
            path: a.clone(this.path),
            params: a.clone(this.params),
            anchor: this.anchor
        })
    }, f.ext = function(e) {
        if (null != e) {
            var t = this.ext(),
                n = this.path.length - 1,
                i = new RegExp('\\.' + t, 'g');
            return t && (this.path[n] = '' + this.path[n].replace(i, '')), this.path[n] = this.path[n] + '.' + e
        }
        var a = this.path[this.path.length - 1].match(/\.(.*)$/);
        return null != a && a[1] || null
    }, f.isRelative = function() {
        var e = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : window.location,
            t = this.protocol,
            n = this.host;
        return (null == t || '' === t || t === e.protocol) && (!n || n === e.hostname)
    }, f.toString = function() {
        return this.isRelative() ? this.relative() : this.absolute()
    }, f.absolute = function() {
        var e = '';
        null != this.protocol && (e = this.protocol);
        var t = '';
        return null != this.port && (t = ':' + this.port), e + '//' + (this.host || location.host) + t + this.relative()
    }, f.relative = function() {
        var e = '';
        0 < this.path.length && (e = c(this.path), this._hasTrailingSlash && (e += '/'));
        var t = '?' + p(this.params);
        return 1 === t.length && (t = ''), '' + e + t + this.relativeAnchor()
    }, f.authority = function() {
        var e = null == this.port ? '' : ':' + this.port;
        return '' + this.host + e
    }, f.relativeProtocol = function() {
        var e = '';
        return null != this.port && (e = ':' + this.port), '//' + this.host + e + this.relative()
    }, f.relativeAnchor = function() {
        var e = '';
        return null != this.anchor && (e = '#' + this.anchor), '' + e
    }, y.create = function(e) {
        return new y(e)
    }, y.parse = function(e) {
        return new y(e)
    };
}, function(e, t, n) {
    'use strict';
    n.r(t);
    n.d(t, 'FAILED', function() {
        return m
    });
    n.d(t, 'QUEUED', function() {
        return g
    });
    n.d(t, 'PROCESSING', function() {
        return h
    });
    n.d(t, 'READY', function() {
        return y
    });
    n.d(t, 'filter', function() {
        return _
    });
    n.d(t, 'one', function() {
        return b
    });
    n.d(t, 'readyPublicMp4s', function() {
        return v
    });
    n.d(t, 'readyPublicM3u8s', function() {
        return A
    });
    n.d(t, 'readyPublicFlvs', function() {
        return w
    });
    n.d(t, 'readyPublicMp4sAndFlvs', function() {
        return k
    });
    n.d(t, 'filterOver400', function() {
        return E
    });
    n.d(t, 'readyPublicOver400', function() {
        return C
    });
    n.d(t, 'nonfailedPublicOver400', function() {
        return S
    });
    n.d(t, 'withinQualityRange', function() {
        return P
    });
    n.d(t, 'numericSizeSnapped', function() {
        return T
    });
    n.d(t, 'findClosestAssetByQuality', function() {
        return I
    });
    n.d(t, 'still', function() {
        return x
    });
    n.d(t, 'stillUrl', function() {
        return B
    });
    n.d(t, 'getStillWidth', function() {
        return F
    });
    n.d(t, 'BAKERY_HOSTS', function() {
        return O
    });
    n.d(t, 'isBakeryUrl', function() {
        return M
    });
    n.d(t, 'onePublicReadyWithContainer', function() {
        return L
    });
    n.d(t, 'mp4', function() {
        return N
    });
    n.d(t, 'webm', function() {
        return W
    });
    n.d(t, 'm3u8', function() {
        return R
    });
    n.d(t, 'flv', function() {
        return H
    });
    n.d(t, 'original', function() {
        return j
    });
    n.d(t, 'playable', function() {
        return V
    });
    n.d(t, 'isScreencast', function() {
        return U
    });
    n.d(t, 'videoAspect', function() {
        return z
    });
    n.d(t, 'originalAspect', function() {
        return G
    });
    n.d(t, 'iphone', function() {
        return Q
    });
    n.d(t, 'smallestNormalMp4', function() {
        return q
    });
    n.d(t, 'urlWithCorrectHost', function() {
        return K
    });
    n.d(t, 'nearestOutsideRange', function() {
        return Y
    });
    n.d(t, 'moveToFront', function() {
        return X
    });
    var a = n(6),
        i = n(17),
        r = n.n(i),
        l = n(15),
        s = n(12),
        d = n(18),
        p = n(11),
        u = function() {
            function e(e, t) {
                var n, i = [],
                    a = !0,
                    r = !1;
                try {
                    for (var l, s = e[Symbol.iterator](); !(a = (l = s.next()).done) && (i.push(l.value), !(t && i.length === t)); a = !0);
                } catch (e) {
                    r = !0, n = e
                } finally {
                    try {
                        !a && s['return'] && s['return']()
                    } finally {
                        if (r) throw n
                    }
                }
                return i
            }
            return function(t, n) {
                if (Array.isArray(t)) return t;
                if (Symbol.iterator in Object(t)) return e(t, n);
                throw new TypeError('Invalid attempt to destructure non-iterable instance')
            }
        }(),
        c = Array.prototype.slice,
        m = -1,
        g = 0,
        h = 1,
        y = 2,
        f = ['select', 'sortFn', 'sortBy', 'unique'],
        _ = function(e) {
            var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
            e.assets && (e = e.assets), (null != t.qualityMin || null != t.qualityMax) && (e = P(e, t.qualityMin, t.qualityMax), t = a.except(t, ['qualityMin', 'qualityMax']));
            var n = a.only(t, f),
                r = n.select || a.except(t, f);
            r && (n.select = r);
            var l = n.select ? a.select(e, n.select) : a.clone(e);
            if ((n.sortFn || n.sortBy) && (l = a.sort(l, n.sortFn || n.sortBy)), n.unique) {
                for (var s = {}, d = 0; d < l.length; d++) {
                    var i = l[d],
                        p = i['' + n.unique] || '__undefined__';
                    s[p] || (s[p] = i)
                }
                for (var u in l = [], s) l.push(s[u])
            }
            return l
        },
        b = function(e, t) {
            return _(e, t)[0] || null
        },
        v = function(e) {
            return _(e, {
                container: 'mp4',
                status: y,
                public: !0
            })
        },
        A = function(e) {
            return _(e, {
                container: 'm3u8',
                status: y,
                public: !0
            })
        },
        w = function(e) {
            return _(e, {
                container: 'flv',
                status: y,
                public: !0
            })
        },
        k = function(e) {
            return _(e, {
                container: /mp4|flv/,
                status: y,
                public: !0
            })
        },
        E = function(e) {
            for (var t = [], n = 0; n < e.length; n++) {
                var i = e[n],
                    a = null != i.opt_vbitrate && 500 <= i.opt_vbitrate && 1e5 >= i.opt_vbitrate,
                    r = null != i.width && 400 < i.width;
                (a || r) && t.push(i)
            }
            return t
        },
        C = function(e) {
            return E(_(e, {
                container: /mp4|flv/,
                public: !0,
                status: y
            }))
        },
        S = function(e) {
            return E(_(e, {
                container: /mp4|flv/,
                public: !0,
                status: function(e) {
                    return e !== m
                }
            }))
        },
        P = function(e) {
            var t = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : 100,
                n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : 1e4;
            return _(e, {
                select: function(e) {
                    var i = T(e.width, e.height);
                    return t <= i && i <= n
                }
            })
        },
        T = function(e, t) {
            if (t > e) {
                var n = e;
                e = t, t = n
            }
            var i = e / t,
                a = e * t + 1;
            return a >= 3840 * (3840 / i) ? 2160 : a >= 2560 * (2560 / i) ? 1440 : a >= 1920 * (1920 / i) ? 1080 : a >= 1280 * (1280 / i) ? 720 : a >= 960 * (960 / i) ? 540 : a >= 640 * (640 / i) ? 360 : t
        },
        I = function(e, t) {
            var n = Math.abs,
                i;
            i = '4k' === t ? 2160 : parseInt(t, 10);
            var a = P(e, i, i)[0];
            if (a) return a;
            var r = Y(e, i, i);
            if (1 === r.length) return r[0];
            var l = z(e),
                s = Math.round(l * i),
                d = u(r, 2),
                p = d[0],
                c = d[1],
                m = n(p.width - s),
                g = n(c.width - s);
            return m < g ? p : c
        },
        x = function(e) {
            var t = b(e, {
                type: 'still_image',
                sortBy: 'created_at desc'
            });
            return t || (t = b(e, {
                container: /mp4/,
                sortBy: 'width desc'
            })), t
        },
        D = r()('fast'),
        B = function(e) {
            var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                n = x(e);
            if (n.status !== y) return '//' + D + '/assets/images/blank.gif';
            t = a.merge({
                aspect: n.width / n.height,
                stillUrl: n.url,
                playButton: !1,
                playerColor: t.playerColor || '636155',
                videoWidth: n.width || 640,
                videoHeight: n.height || 360,
                stillSnap: !0
            }, t);
            var i = t.videoWidth,
                r = t.videoHeight,
                s = new l.Url(t.stillUrl);
            return (t.retina && (s.params.image_play_button_size = '2x', i *= 2, r *= 2), t.stillSnap && (i = F({
                videoWidth: i,
                masterStillWidth: n.width
            }), r = Math.round(i / t.aspect)), !M(t.stillUrl)) ? t.stillUrl : ('https:' === t.protocol && (s.protocol = 'https:', s.host = 'embed-ssl.wistia.com'), s.params.image_crop_resized = i + 'x' + r, (null == t.playButton || t.playButton) && (s.params.image_play_button = 1, s.params.image_play_button_color = ('' + t.playerColor).replace(/^#+/, '') + 'e0'), s.ext('jpg'), s.absolute())
        },
        F = function(e) {
            var t = [640, 960, 1280, 1920, 3840];
            3840 > e.masterStillWidth && t.push(e.masterStillWidth);
            for (var n, a = [], r = 0; r < t.length; r++) n = t[r], n <= e.masterStillWidth && a.push(n);
            a.sort(function(e, t) {
                return e - t
            });
            for (var i, l = 0; l < a.length; l++)
                if (i = a[l], e.videoWidth <= i) return i;
            return Math.max.apply(Math, a)
        },
        O = ['undefined', 'embed-ssl.wistia.com', 'undefined', 'undefined', r()('embed'), r()('prime'), r()('mixergy-cdn'), r()('embed-a'), 'embedwistia-a.akamaihd.net'],
        M = function(e) {
            if (null == e) return !1;
            var t = new l.Url(e);
            return !!t.host && 0 <= O.join(',').indexOf(t.host)
        },
        L = function(e, t, n) {
            return n = a.merge({
                container: t,
                public: !0,
                status: y
            }, n), b(e, n)
        },
        N = function(e, t) {
            return L(e, 'mp4', t)
        },
        W = function(e, t) {
            return L(e, 'webm', t)
        },
        R = function(e, t) {
            return L(e, 'm3u8', t)
        },
        H = function(e, t) {
            return L(e, 'flv', t)
        },
        j = function(e) {
            return b(e, {
                type: 'original'
            })
        },
        V = function(e, t) {
            var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : Object(s.cachedDetect)();
            return n.video.webm ? W(e, t) || N(e, t) : N(e, t)
        },
        U = function(e) {
            var t = j(e);
            return t && 640 < t.width && 1200 > t.bitrate
        },
        z = function(e) {
            var t = N(e) || H(e) || R(e) || W(e) || j(e);
            return t && t.height ? t.width / t.height : 640 / 360
        },
        G = function(e) {
            var t = z(e),
                n = j(e);
            if (n && n.width && n.height) {
                var i = n.width / n.height;
                return 1 < i && 1 > t || 1 > i && 1 < t ? 1 / i : i
            }
            return t
        },
        Q = function(e, t) {
            var n = z(e);
            if (1 < n) return t = a.merge({
                width: 640
            }, t), N(e, t) || q(e, t);
            var i = a.merge({
                    width: 320
                }, t),
                r = a.merge({
                    width: 640
                }, t);
            return N(e, i) || N(e, r) || q(e, t)
        },
        q = function(e, t) {
            return t = a.merge({
                sortBy: 'width asc',
                width: [640, 1920]
            }, t), N(e, t)
        },
        K = function(e) {
            var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : d.eV1Protocol(),
                n = new l.Url(e);
            return M(e) && ('https:' === t ? (n.host = d.deliveryHost(location.protocol), n.protocol = 'https:') : (n.host = d.deliveryHost(location.protocol), n.protocol = 'http:')), n.absolute()
        },
        Y = function(e, t, n) {
            if (0 === e.length) return [];
            for (var a = c.call(e).sort(function(e, t) {
                    return T(e.width, e.height) - T(t.width, t.height)
                }), r = a[0], l = a[a.length - 1], s = void 0, d = void 0, u = 0; u < a.length; u++) {
                var i = a[u],
                    m = T(i.width, i.height);
                if (m < t && (s = i), m >= n) {
                    d = i;
                    break
                }
            }
            var g = [];
            return s && g.push(s), d && g.push(d), 0 === g.length && (p.wlog.error('nearestOutsideRange: no nearby assets found, using first in list', a[0]), g.push(a[0])), g
        },
        X = function(e, t) {
            if (!t) return e;
            for (var n, a = -1, r = 0; r < e.length; r++)
                if (n = e[r], n.url === t.url) {
                    a = r;
                    break
                }
            return 0 < a && (e.splice(a, 1), e.unshift(t)), e
        };
}, function(e) {
    var t;
    t = function(e) {
        var t;
        return null == e && (e = 'app'), t = e ? e + '.' + 'wistia.com' : 'wistia.com', '80' !== '80' && (t += ':' + '80'), t
    }, e.exports = t;
}, function(e, t, n) {
    'use strict';
    n.r(t);
    n.d(t, 'deliveryHost', function() {
        return h
    });
    n.d(t, 'akamaiHost', function() {
        return y
    });
    n.d(t, 'appHost', function() {
        return f
    });
    n.d(t, 'cdnFastWistiaComHost', function() {
        return _
    });
    n.d(t, 'cdnFastWistiaNetHost', function() {
        return b
    });
    n.d(t, 'eV1Url', function() {
        return v
    });
    n.d(t, 'eV1Host', function() {
        return A
    });
    n.d(t, 'eV1Protocol', function() {
        return w
    });
    n.d(t, 'mediaDataHost', function() {
        return k
    });
    n.d(t, 'metricsHost', function() {
        return E
    });
    n.d(t, 'forceValidFastWistiaHost', function() {
        return S
    });
    var i = n(17),
        a = n.n(i),
        r = n(3),
        l = n(15),
        s = a()('app'),
        d = a()('fast'),
        p = 'embed-ssl.wistia.com',
        u = a()('embed-a'),
        c = a()('embed-e'),
        m = function() {
            return 'undefined' != typeof window && r['default'] === window && r['default'].location ? r['default'].location.protocol : 'https:'
        }(),
        g = function(e, t, n) {
            return 'https:' === e ? t : n
        },
        h = function() {
            var e = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : m;
            return g(e, p, 'undefined')
        },
        y = function() {
            var e = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : m;
            return g(e, 'embedwistia-a.akamaihd.net', u)
        },
        f = function() {
            return s
        },
        _ = function() {
            return d
        },
        b = function() {
            return 'fast.wistia.net'
        },
        v = function() {
            for (var e, t = document.getElementsByTagName('script'), n = 0; n < t.length; n++)
                if (e = t[n], e.src) {
                    var i = new l.Url(e.src),
                        a = /\/assets\/external\/E-v1(-with-vulcan-v2)?\.js$/.test(i.rawPath),
                        r = i.host === _() || i.host === b(),
                        s = 'https:' === location.protocol && 'https:' === i.protocol,
                        d = '' === i.protocol || null == i.protocol,
                        p = s || d || 'http:' === location.protocol,
                        u = !e.readyState || /loaded|complete/.test(e.readyState);
                    if (a && r && p && u) return i
                }
            return new l.Url(Object(l.proto)() + '//' + b() + '/E-v1.js')
        }(),
        A = function() {
            return v.host
        },
        w = function() {
            return v.protocol
        },
        k = function() {
            var e = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : {};
            return e.embedHost ? S(e) : A()
        },
        E = function() {
            return 'pipedream.wistia.com'
        },
        C = /(\.wistia\.net|\.wistia.com|\.wistia\.st)$/,
        S = function(e) {
            return e && C.test(e) ? e : A()
        };
}, function(e, t, n) {
    'use strict';
    n.r(t);
    n.d(t, 'elemHtml', function() {
        return m
    });
    n.d(t, 'getScriptTags', function() {
        return g
    });
    n.d(t, 'execScriptTags', function() {
        return h
    });
    n.d(t, 'removeScriptTags', function() {
        return y
    });
    n.d(t, 'getCssTags', function() {
        return f
    });
    n.d(t, 'execCssTags', function() {
        return _
    });
    n.d(t, 'removeCssTags', function() {
        return b
    });
    n.d(t, 'addInlineCss', function() {
        return v
    });
    n.d(t, 'elemFromObject', function() {
        return A
    });
    n.d(t, 'elemToObject', function() {
        return w
    });
    n.d(t, 'elemClone', function() {
        return k
    });
    n.d(t, 'elemAppend', function() {
        return E
    });
    n.d(t, 'elemPrepend', function() {
        return C
    });
    n.d(t, 'elemBefore', function() {
        return S
    });
    n.d(t, 'elemAfter', function() {
        return P
    });
    n.d(t, 'elemRemove', function() {
        return T
    });
    n.d(t, 'elemRemoveClass', function() {
        return I
    });
    n.d(t, 'elemAddClass', function() {
        return x
    });
    n.d(t, 'elemHasClass', function() {
        return D
    });
    n.d(t, 'elemClasses', function() {
        return O
    });
    n.d(t, 'elemStyle', function() {
        return L
    });
    n.d(t, 'propsWithVendorPrefixes', function() {
        return H
    });
    n.d(t, 'getComputedStyle', function() {
        return j
    });
    n.d(t, 'elemWidth', function() {
        return V
    });
    n.d(t, 'elemHeight', function() {
        return U
    });
    n.d(t, 'isBoxModel', function() {
        return G
    });
    n.d(t, 'elemOffset', function() {
        return Q
    });
    n.d(t, 'elemContainsOffset', function() {
        return q
    });
    n.d(t, 'elemScrollOffset', function() {
        return K
    });
    n.d(t, 'elemIsHidden', function() {
        return Y
    });
    n.d(t, 'elemInDom', function() {
        return X
    });
    n.d(t, 'elemIsDescendantOf', function() {
        return J
    });
    n.d(t, 'elemAncestorWithClass', function() {
        return Z
    });
    n.d(t, 'elemAncestorHasClass', function() {
        return $
    });
    n.d(t, 'elemAncestors', function() {
        return ee
    });
    n.d(t, 'elemIsInside', function() {
        return te
    });
    n.d(t, 'elemAnimate', function() {
        return oe
    });
    n.d(t, 'elemBind', function() {
        return ie
    });
    n.d(t, 'elemUnbind', function() {
        return ae
    });
    n.d(t, 'elemUnbindAll', function() {
        return re
    });
    n.d(t, 'elemUnbindAllInside', function() {
        return le
    });
    n.d(t, 'elemBindKey', function() {
        return se
    });
    n.d(t, 'elemRebind', function() {
        return de
    });
    n.d(t, 'elemBindOnce', function() {
        return pe
    });
    n.d(t, 'elemTrigger', function() {
        return ue
    });
    n.d(t, 'fullscreenElement', function() {
        return ce
    });
    n.d(t, 'elemRequestFullscreen', function() {
        return me
    });
    n.d(t, 'elemCancelFullscreen', function() {
        return ge
    });
    n.d(t, 'elemStripEventAttributes', function() {
        return he
    });
    n.d(t, 'elemMutationObserver', function() {
        return ye
    });
    n.d(t, 'docScrollTop', function() {
        return fe
    });
    n.d(t, 'docScrollLeft', function() {
        return _e
    });
    n.d(t, 'safeRequestAnimationFrame', function() {
        return be
    });
    n.d(t, 'pageLoaded', function() {
        return ve
    });
    n.d(t, 'isDocReady', function() {
        return Ae
    });
    n.d(t, 'formInputIsFocused', function() {
        return we
    });
    n.d(t, 'inUserEventContext', function() {
        return ke
    });
    n.d(t, 'getLastActiveEventAt', function() {
        return Ee
    });
    var a = n(20),
        r = n(6),
        i = n(12),
        l = n(11),
        s = n(7),
        d = n(2),
        p = d['default'],
        u = Object(i.cachedDetect)(),
        c = Array.prototype.slice,
        m = function(e, t) {
            var n = f(t),
                i = g(t);
            return t = b(t), t = y(t), e.innerHTML = t, _(n, e), h(i)
        },
        g = function(e) {
            return e.match(/<script.*?src[^>]*>\s*<\/script>|<script.*?>[\s\S]+?<\/script>/ig) || []
        },
        h = function(e, t) {
            if (!e) return null;
            Object(r.isArray)(e) || (e = g(e));
            for (var n = [], l = 0; l < e.length; l++) {
                var i = e[l],
                    s = {},
                    d = void 0;
                (d = i.match(/<script.*?>/i)) && (d = d[0].match(/src="([^"]+)"/i)) ? (s.src = d[1], s.async = /async/i.test(i.replace(s.src, ''))) : (d = i.match(/<script>([\s\S]+?)<\/script>/i)) && function() {
                    var e = d[1];
                    s.fn = function() {
                        return eval(e)
                    }
                }(), n.push(s)
            }
            return Object(a.runScripts)(n, t)
        },
        y = function(e) {
            return e.replace(/<script.*?src[^>]*>\s*<\/script>|<script>[\s\S]+?<\/script>/g, '')
        },
        f = function(e) {
            return e.match(/<link.*?rel=['"]stylesheet['"][^>]*>|<style>[\s\S]+?<\/style>/ig) || []
        },
        _ = function(e, t) {
            if (!e) return null;
            Object(r.isArray)(e) || (e = f(e));
            for (var n, a = [], l = 0; l < e.length; l++)
                if (n = e[l], /<link.*?rel=['"]stylesheet['"][^>]*>/.test(n)) {
                    var i = void 0;
                    if (i = n.match(/href=['"](.*?)['"]/i)) {
                        var s = document.createElement('link');
                        s.setAttribute('rel', 'stylesheet'), s.setAttribute('href', i[1]), s.className = 'wistia_injected_style', (t || document.body || document.head).appendChild(s), a.push(s)
                    }
                } else if (/<style>[\s\S]+?<\/style>/ig.test(n)) {
                var d = void 0;
                if (d = n.match(/<style>([\s\S]+?)<\/style>/i)) {
                    var p = v(t || document.body || document.head, d[1]);
                    a.push(p)
                }
            }
            return a
        },
        b = function(e) {
            return e.replace(/<link.*?rel=['"]stylesheet['"][^>]*>|<style>[\s\S]+?<\/style>/ig, '')
        },
        v = function(e, t) {
            var n = document.createElement('style');
            n.id = Object(s['default'])('wistia_', '_style'), n.setAttribute('type', 'text/css'), n.className = 'wistia_injected_style';
            document.getElementsByTagName('style');
            return e.appendChild(n, e.nextSibling), n.styleSheet ? n.styleSheet.cssText = t : n.appendChild(document.createTextNode(t)), n
        },
        A = function e(t) {
            if (Object(r.isArray)(t)) {
                for (var n = [], a = 0; a < t.length; a++) n.push(e(t[a]));
                return n
            }
            var i = t.tagName || 'div',
                l = t.childNodes || [];
            Object(r.isArray)(l) || (l = [l]);
            var s = document.createElement(i);
            for (var d in t) {
                var u = t[d];
                if ('childNodes' != d && 'tagName' != d && 'ref' != d) {
                    var c = d.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
                    if ('style' == d) {
                        if (Object(r.isObject)(u))
                            for (var m in u) s.style[m] = u[m];
                        else
                            for (var p = u.split(';'), g = 0; g < p.length; g++) {
                                var h = p[g].split(/\s*:\s*/),
                                    y = h[0],
                                    f = h[1];
                                y && f && (s.style[y] = f)
                            }
                    } else if ('events' == d)
                        for (var _ in u) {
                            var b = u[_];
                            ie(s, _, b)
                        } else 'className' == d || 'class' == d ? s.className = u : 'innerHTML' == d ? s.innerHTML = u : 'innerText' == d ? s.innerText = u : null != u && 'function' == typeof u.toString && s.setAttribute(c, u.toString())
                }
            }
            for (var v, A = 0; A < l.length; A++)
                if (v = l[A], Object(r.isObject)(v)) {
                    var w = e(v);
                    E(s, w)
                } else {
                    var k = document.createTextNode(v.toString());
                    E(s, k)
                }
            return 'function' == typeof t.ref && t.ref(s), s
        },
        w = function e(t) {
            if (Object(r.isArray)(t))
                for (var n = [], a = 0; a < t.length; a++) n.push(e(t[a]));
            for (var i, l = {
                    tagName: t.tagName.toLowerCase()
                }, s = Object(r.keys)(t), d = 0; d < s.length; d++)
                if (i = s[d], 'tagName' === i || 'childNodes' === i || 'nodeType' === i || 'nodeValue' === i) continue;
                else if ('style' === i) {
                l.style = {};
                for (var p, u = Object(r.keys)(t.style), c = 0; c < u.length; c++) p = u[c], val = t.style[p], val && !/^\d/.test(p) && 'length' !== p && (l.style[p] = val)
            } else value = t.getAttribute(i), null != value && (l[i] = value);
            for (var m, g = [], h = 0; h < t.childNodes.length; h++) m = t.childNodes[h], 1 === m.nodeType ? g.push(e(m)) : 3 === m.nodeType && g.push(m.nodeValue);
            return 0 < g.length && (l.childNodes = g), l
        },
        k = function(e) {
            var t = w(e);
            return A(t)
        },
        E = function e(t, n) {
            if (Object(r.isArray)(n)) {
                for (var a = 0; a < n.length; a++) e(t, n[a]);
                return
            }
            t.appendChild(n)
        },
        C = function e(t, n) {
            if (Object(r.isArray)(n)) {
                for (var a = 0; a < n.length; a++) e(t, n[a]);
                return
            }
            return 0 === t.childNodes.length ? E(t, n) : t.insertBefore(n, t.childNodes[0])
        },
        S = function e(t, n) {
            if (Object(r.isArray)(n)) {
                n = n.reverse();
                for (var a = 0; a < n.length; a++) e(t, n[a]);
                return
            }
            return t.parentNode.insertBefore(n, t)
        },
        P = function e(t, n) {
            if (Object(r.isArray)(n)) {
                n = n.reverse();
                for (var a = 0; a < n.length; a++) e(t, n[a]);
                return
            }
            return t.parentNode.insertBefore(n, t.nextSibling)
        },
        T = function e(t) {
            if (Object(r.isArray)(t) || window.NodeList && t instanceof NodeList) {
                for (var n = 0; n < t.length; n++) e(t[n]);
                return
            }
            var i;
            null != t && (1 === t.nodeType || 3 === t.nodeType) && (i = t.parentNode) && (i.removeChild(t), t = null)
        },
        I = function e(t, n) {
            if (Object(r.isArray)(t) || window.NodeList && t instanceof NodeList) {
                for (var a = 0; a < t.length; a++) e(t[a], n);
                return
            }
            if (D(t, n)) {
                var i = t.getAttribute('class');
                if (i) {
                    var l = new RegExp('\\b' + n + '\\b', 'g'),
                        s = M(i.replace(l, ''));
                    t.setAttribute('class', s)
                }
            }
        },
        x = function e(t, n) {
            if (Object(r.isArray)(t) || window.NodeList && t instanceof NodeList) {
                for (var a = 0; a < t.length; a++) e(t[a], n);
                return
            }
            if (!D(t, n)) {
                var i, l = t.getAttribute('class');
                l ? (I(t, n), i = M(l + ' ' + n)) : i = n, t.setAttribute('class', i)
            }
        },
        D = function(e, t) {
            var n = null != e && 'function' == typeof e.getAttribute && e.getAttribute('class');
            if (!n && e && 'string' == typeof e.className && (n = e.className), !n) return !1;
            var i = !1;
            return F(n, t, function(e) {
                var a = 0 === e || ' ' === n.charAt(e - 1),
                    r = e + t.length === n.length,
                    l = ' ' === n.charAt(e + t.length);
                if (a && (r || l)) return i = !0, B
            }), i
        },
        B = {},
        F = function(e, t, n) {
            for (var a = -1; - 1 != (a = e.indexOf(t, a + 1)) && !(n(a) === B););
        },
        O = function(e) {
            if (e && 'string' != typeof e.className) return [''];
            return (e && e.className || '').split(/\s+/)
        },
        M = function(e) {
            return e.replace(/^\s+/g, '').replace(/\s+$/g, '').replace(/\s+/g, ' ')
        },
        L = function e(t) {
            for (var n = arguments.length, a = Array(1 < n ? n - 1 : 0), s = 1; s < n; s++) a[s - 1] = arguments[s];
            if (Object(r.isArray)(t) || window.NodeList && t instanceof NodeList) {
                for (var d, p = [], u = 0; u < t.length; u++) d = t[u], 1 === d.nodeType && p.push(e.apply(void 0, [d].concat(a)));
                return p
            }
            if (2 === a.length) {
                var i = a[0],
                    c = a[1];
                t.style[i] = c
            } else if (1 !== a.length) l.wlog.apply(void 0, ['Unexpected args', t].concat(a));
            else if ('string' == typeof a[0]) {
                var m = a[0];
                try {
                    return t.currentStyle ? t.currentStyle[m] : window.getComputedStyle ? window.getComputedStyle(t, null).getPropertyValue(m) : null
                } catch (t) {
                    l.wlog.notice(t)
                }
            } else {
                var g = H(a[0]);
                for (var h in g) {
                    var y = g[h];
                    t.style[h] = y
                }
            }
        },
        N = {
            borderImage: !0,
            mixBlendMode: !0,
            transform: !0,
            transition: !0,
            transitionDuration: !0
        },
        W = function(e) {
            return N[e]
        },
        R = ['webkit', 'moz', 'o', 'ms'],
        H = function(e) {
            if (u.chrome) return e;
            var t = {};
            for (var n in e) {
                var a = e[n];
                if (t[n] = a, N[n])
                    for (var r = R, l = 0; l < r.length; l++) {
                        var i = r[l],
                            s = i + n.charAt(0).toUpperCase() + n.slice(1);
                        n[s] || (t[s] = a)
                    }
            }
            return t
        },
        j = function(e, t) {
            if (!window.getComputedStyle) return null;
            var n = window.getComputedStyle(e, null);
            return null == n ? null : null == t ? n : n[t]
        },
        V = function(e) {
            if (e === window) return window.innerWidth ? window.innerWidth : document.documentElement ? document.documentElement.offsetWidth : document.body.offsetWidth;
            if (e === document) {
                var t = document.body,
                    n = document.documentElement;
                return Math.max(t.scrollWidth, t.offsetWidth, n.clientWidth, n.scrollWidth, n.offsetWidth)
            }
            var i;
            return u.browser.quirks ? parseInt(e.offsetWidth, 10) : (i = j(e, 'width')) && null != i ? parseFloat(i) : e.currentStyle ? e.offsetWidth : -1
        },
        U = function(e) {
            if (e === window) return window.innerHeight ? window.innerHeight : document.documentElement ? document.documentElement.offsetHeight : document.body.offsetHeight;
            if (e === document) {
                var t = document.body,
                    n = document.documentElement;
                return Math.max(t.scrollHeight, t.offsetHeight, n.clientHeight, n.scrollHeight, n.offsetHeight)
            }
            var i;
            return u.browser.quirks ? parseInt(e.offsetHeight, 10) : (i = j(e, 'height')) && null != i ? parseFloat(i) : e.currentStyle ? e.offsetHeight : -1
        },
        z, G = function() {
            if (null != z) return z;
            var e = document.createElement('div');
            return e.style.paddingLeft = e.style.width = '1px', document.body.appendChild(e), z = 2 === e.offsetWidth, document.body.removeChild(e), z
        },
        Q = function(e) {
            var t, n = document.body,
                i = document.defaultView,
                a = document.documentElement,
                r = e.getBoundingClientRect(),
                l = a.clientTop || n.clientTop || 0,
                s = a.clientLeft || n.clientLeft || 0;
            t = i && null != i.pageYOffset ? i.pageYOffset : G() && a && null != a.scrollTop ? a.scrollTop : n.scrollTop;
            var d;
            return d = i && null != i.pageXOffset ? i.pageXOffset : G() && a && null != a.scrollLeft ? a.scrollLeft : n.scrollLeft, {
                top: r.top + t - l,
                left: r.left + d - s
            }
        },
        q = function(e, t, n) {
            var i = Q(e);
            return i.right = i.left + V(e), i.bottom = i.top + U(e), i.left <= t && t < i.right && i.top <= n && n < i.bottom
        },
        K = function(e) {
            var t = 0,
                n = 0;
            if (e.parentNode)
                for (; e && e.offsetParent;) n += e.scrollTop, t += e.scrollLeft, e = e.parentNode;
            return {
                left: t,
                top: n
            }
        },
        Y = function(e) {
            for (; e && 1 === e.nodeType;) {
                if ('none' === L(e, 'display')) return !0;
                e = e.parentNode
            }
            return !1
        },
        X = function(e) {
            for (; e = e.parentNode;)
                if (e === document) return !0;
            return !1
        },
        J = function(e, t) {
            for (var n = ee(e), a = 0; a < n.length; a++)
                if (n[a] === t) return !0;
            return !1
        },
        Z = function(e, t) {
            for (var n = ee(e), a = 0; a < n.length; a++)
                if (D(n[a], t)) return n[a];
            return null
        },
        $ = function(e, t) {
            var n = Z(e, t);
            return !!n
        },
        ee = function(e) {
            for (var t = e, n = []; t = t.parentNode;) n.push(t);
            return n
        },
        te = function(e, t) {
            return e === t || J(e, t)
        },
        ne = function(e, t, n) {
            var i = [];
            for (var a in e) i.push(a + ' ' + t + 'ms ' + n);
            return i.join(',')
        },
        oe = function(e) {
            var t = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {},
                n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : {};
            n = Object(r.merge)({
                time: 400,
                easing: 'ease'
            }, n);
            var i = ne(t, n.time, n.easing);
            L(e, {
                transition: i
            }), be(function() {
                L(e, t), setTimeout(function() {
                    L(e, {
                        transition: ''
                    }), 'function' == typeof n.callback && n.callback()
                }, n.time)
            })
        },
        ie = function(t, n, i) {
            var e = 3 < arguments.length && void 0 !== arguments[3] && arguments[3],
                a = function(a) {
                    for (var e = arguments.length, r = Array(1 < e ? e - 1 : 0), l = 1; l < e; l++) r[l - 1] = arguments[l];
                    a = a || window.event, !a.pageX && !a.pageY && (a.clientX || a.clientY) && (a.pageX = a.clientX + _e(), a.pageY = a.clientY + fe()), a.preventDefault || (a.preventDefault = function() {
                        a.returnValue = !1
                    }), a.stopPropagation || (a.stopPropagation = function() {
                        a.cancelBubble = !0
                    }), null == a.which && (a.which = null == a.charCode ? a.keyCode : a.charCode), null == a.which && null != a.button && (1 & a.button ? a.which = 1 : 2 & a.button ? a.which = 3 : 4 & a.button ? a.which = 2 : u.browser.msie && 0 === a.button ? a.which = 1 : a.which = 0), a.target || a.srcElement && (a.target = a.srcElement), a.target && 3 === a.target.nodeType && (a.target = a.target.parentNode);
                    var s = i.apply(a.target, [a].concat(r));
                    return s === ae && ae(t, n, i), s
                };
            p._elemBind = p._elemBind || {};
            var r = se(t, n, i);
            return p._elemBind[r] = a, a.elem = t, a.event = n, u.browser.msie && 9 > u.browser.version ? t.attachEvent('on' + n, a) : t.addEventListener(n, a, e),
                function() {
                    ae(t, n, i, e)
                }
        },
        ae = function(e, t, n) {
            var i = 3 < arguments.length && void 0 !== arguments[3] && arguments[3];
            if (null != e && null != e._wistiaElemId && null != n && n._wistiaBindId) {
                var a = se(e, t, n),
                    r = p._elemBind[a];
                return r && (u.browser.msie && 9 > u.browser.version ? e.detachEvent('on' + t, r) : e.removeEventListener(t, r, i), r.elem = null, r.event = null), delete p._elemBind[a]
            }
        },
        re = function(e) {
            for (var t in p._elemBind) {
                var n = p._elemBind[t];
                if (n && e === n.elem) {
                    var i = n.event;
                    u.browser.msie && 9 > u.browser.version ? n.elem.detachEvent('on' + i, n) : n.elem.removeEventListener(i, n, !1), n.elem = null, n.event = null, delete p._elemBind[t]
                }
            }
        },
        le = function(e) {
            var t = 0;
            for (var n in p._elemBind) {
                var i = p._elemBind[n];
                if (i && p.elem.isInside(i.elem, e)) {
                    var a = i.event;
                    u.browser.msie && 9 > u.browser.version ? i.elem.detachEvent('on' + a, i) : i.elem.removeEventListener(a, i, !1), i.elem = null, i.event = null, delete p._elemBind[n], t += 1
                }
            }
            return t
        },
        se = function(e, t, n) {
            return e._wistiaElemId = e._wistiaElemId || Object(s['default'])('wistia_elem_'), n._wistiaBindId = n._wistiaBindId || Object(s['default'])('wistia_bind_'), e._wistiaElemId + '.' + t + '.' + n._wistiaBindId
        },
        de = function(e, t, n) {
            if (n) return ae(e, t, n), ie(e, t, n)
        },
        pe = function(e, t, n) {
            return ie(e, t, function() {
                for (var e = arguments.length, t = Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                return n.apply(this, t), ae
            })
        },
        ue = function(e, t) {
            for (var n = arguments.length, i = Array(2 < n ? n - 2 : 0), a = 2; a < n; a++) i[a - 2] = arguments[a];
            if (e.dispatchEvent) {
                var r = document.createEvent('Events');
                return r.initEvent(t, !0, !1), 'click' === t || 'doubleclick' === t ? r.which = 1 : 'rightclick' === t && (r.which = 2), r.customArguments = i, e.dispatchEvent(r)
            }
            if (e.fireEvent) {
                return e.fireEvent('on' + t, {
                    customArguments: i
                })
            }
            l.wlog.error('neither dispatchEvent nor fireEvent is defined for', e, t)
        },
        ce = function() {
            return document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement
        },
        me = function(e) {
            return e.requestFullscreen ? e.requestFullscreen() : e.mozRequestFullScreen ? e.mozRequestFullScreen() : e.webkitRequestFullscreen ? e.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT) : e.msRequestFullscreen ? e.msRequestFullscreen() : e.webkitEnterFullscreen ? e.webkitEnterFullscreen() : (l.wlog.notice('no requestFullscreen functionality detected'), null)
        },
        ge = function(e) {
            return document.cancelFullscreen ? document.cancelFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitCancelFullScreen ? document.webkitCancelFullScreen() : document.msExitFullscreen ? document.msExitFullscreen() : e && e.webkitExitFullscreen ? e.webkitExitFullscreen() : (l.wlog.notice('no cancelFullscreen functionality detected'), null)
        },
        he = function e(t) {
            var n = t && t.attributes || [];
            try {
                for (var a, r = 0; r < n.length; r++) a = n[r], /^on.+/i.test(a.name) && (t[a.name] = null, t.removeAttribute(a.name))
            } catch (t) {
                l.wlog.error(t)
            }
            if (t.childNodes)
                for (var i, s = 0; s < t.childNodes.length; s++) i = t.childNodes[s], 1 === i.nodeType && e(i)
        },
        ye = function(e) {
            var t = u.mutationObserver;
            return t ? new window[t](e) : null
        },
        fe = function(e) {
            var t = document.body,
                n = document.documentElement;
            return null == e ? n && n.scrollTop || t && t.scrollTop || 0 : void(t && (t.scrollTop = e), n && (n.scrollTop = e))
        },
        _e = function(e) {
            var t = document.body,
                n = document.documentElement;
            return null == e ? n && n.scrollLeft || t && t.scrollLeft || 0 : void(t && (t.scrollLeft = e), n && (n.scrollLeft = e))
        },
        be = function(e) {
            var t = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(e) {
                return setTimeout(e, 1e3 / 60)
            };
            return t(e)
        },
        ve = function(e) {
            if (!Ae()) {
                var t = function() {
                    return clearTimeout(n), e(), ae
                };
                ie(window, 'load', t);
                var n = setTimeout(function() {
                    ae(window, 'load', t), e()
                }, 4e3)
            } else setTimeout(e, 1)
        },
        Ae = function() {
            return /loaded|complete/.test(document.readyState)
        },
        we = function() {
            return /^textarea|input|select$/i.test(document.activeElement.tagName)
        },
        ke = function() {
            return !!Ce
        },
        Ee = function() {
            return Se
        },
        Ce, Se = -1,
        Pe = ['auxclick', 'click', 'contextmenu', 'dblclick', 'focus', 'keydown', 'keypress', 'keyup', 'mousedown', 'mouseup', 'reset', 'submit', 'touchend', 'touchstart'];
    Pe.forEach(function(e) {
        ie(document, e, function(t) {
            Ce = t, Se = Date.now(), setTimeout(function() {
                Ce === t && (Ce = void 0)
            }, 0)
        }, !u.passiveSupported || {
            capture: !0,
            passive: !0
        })
    });
}, function(e, t, n) {
    'use strict';
    n.r(t);
    n.d(t, 'findScriptInDomBySrc', function() {
        return u
    });
    n.d(t, 'removeScriptsBySrc', function() {
        return c
    });
    n.d(t, 'runScript', function() {
        return m
    });
    n.d(t, 'runScripts', function() {
        return g
    });
    n.d(t, 'scriptInputsToHash', function() {
        return h
    });
    var i = n(21),
        a = n.n(i),
        r = n(11),
        l = n(7),
        s = n(6),
        d = n(22),
        p = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
        },
        u = function(e) {
            for (var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, n = document.getElementsByTagName('script'), a = 0; a < n.length; a++) {
                var i = n[a],
                    r = i.getAttribute('src') || '';
                if (t.ignoreQueryParams) {
                    var l = r.split('?'),
                        s = l[0],
                        d = l[1];
                    r = s
                }
                if (!t.scriptRegex && t.ignoreProtocol && (r = r.replace(/^https?:/, ''), e = e.replace(/^https?:/, '')), t.scriptRegex && t.scriptRegex.test(r)) return i;
                if (t.testStartsWith && 0 === r.indexOf(e)) return i;
                if (r === e) return i
            }
            return null
        },
        c = function(e) {
            for (var t, n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}; t = u(e, n);)
                if (t && (t.onload = t.onreadystatechange = t.onerror = null, t.parentNode && p(t.parentNode.removeChild))) try {
                    t.parentNode.removeChild(t)
                } catch (t) {
                    setTimeout(function() {
                        throw t
                    }, 0)
                }
        },
        m = function(e, t) {
            var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 8e3,
                i = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : {};
            null == n && (n = 8e3), null == i && (i = {});
            var r, l, s = new a.a,
                p = new a.a;
            return !0 === i.once && (r = u(e)) && (l = !0), i.once && l ? (!r.readyState || /loaded|complete/.test(r.readyState)) && setTimeout(function() {
                s(!0)
            }, 1) : Object(d['default'])(e, n).then(function() {
                s(!0)
            }).catch(function(e) {
                s(!0, e), setTimeout(function() {
                    throw e
                }, 1)
            }), 'function' == typeof t && s.then(t), {
                loaded: s,
                error: function() {
                    return p
                }
            }
        },
        g = function() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            if (t[0] instanceof Array) {
                var l = t[1];
                t = t[0], l && (t = t.concat(l))
            }
            t = h(t);
            for (var s, d = 0; d < t.length; d++) s = t[d], s.src && s.preloadAllowed && m(s.src, null, null, s);
            for (var i = [], p = [], u = 0; u < t.length; u++) {
                var c = t[u],
                    g = new a.a,
                    y = new a.a;
                (function(e, t, n) {
                    a.a.when.apply(a.a, i).run(function() {
                        if (e.fn) {
                            var i = function() {
                                try {
                                    e.fn()
                                } catch (t) {
                                    r.wlog.error(t)
                                } finally {
                                    t.go(), n.go()
                                }
                            };
                            e.async ? setTimeout(i, 1) : i()
                        } else if (e.src) {
                            var a = function() {
                                m(e.src, null, null, e).loaded(function() {
                                    n.go(), t.go()
                                })
                            };
                            e.async ? (setTimeout(a, 1), t.go()) : setTimeout(a, 1)
                        }
                    })
                })(c, g, y), i.push(g), p.push(y)
            }
            return {
                loaded: a.a.when.apply(a.a, p)
            }
        },
        h = function(e) {
            for (var t, n = [], a = 0; a < e.length; a++) t = e[a], 'string' == typeof t ? n.push({
                src: t,
                async: !1
            }) : Object(s.isObject)(t) ? n.push(t) : n.push({
                fn: t,
                async: !1
            });
            return n
        };
}, function(e) {
    var t, n = [].slice;
    t = function() {
        function e() {
            return this._queue = [], this._green = !1, this._lock = !1, this.allInOne = function(e) {
                return function() {
                    return e._allInOne.apply(e, arguments)
                }
            }(this), this.defineMethodsOn(this.allInOne), this.allInOne
        }
        return e.prototype.defineMethodsOn = function(e) {
            var t, n, i, a, r;
            for (n in t = {}, i = this, a = [], i) r = i[n], a.push(function() {
                return function(n, i, a) {
                    if ('[object Function]' === t.toString.call(i)) return e[n] = function() {
                        return a[n].apply(a, arguments)
                    }
                }
            }(this)(n, r, this));
            return a
        }, e.prototype.flush = function() {
            var e, t;
            if (e = 1 <= arguments.length ? n.call(arguments, 0) : [], !this._green) return this;
            for (this._lock = !0; 0 < this._queue.length && (t = this._queue.shift(), e.length || !this.goArgs ? this.tryAndReport(function() {
                    return t.apply(null, e)
                }) : this.tryAndReport(function(e) {
                    return function() {
                        return t.apply(null, e.goArgs)
                    }
                }(this)), !this._block && this._green););
            return this._lock = !1, this
        }, e.prototype._debug = function() {
            return 'undefined' != typeof console && null !== console ? console.log.apply(console, arguments) : void 0
        }, e.prototype.synchronize = function() {
            var e, t, a, i;
            for (t = 1 <= arguments.length ? n.call(arguments, 0) : [], a = 0, i = t.length; a < i; a++) e = t[a], this.synchronizeFn(e);
            return this
        }, e.prototype.synchronizeFn = function(e) {
            var t, n, i;
            return n = null, t = function(e) {
                return function() {
                    return clearTimeout(n), e._block = !1, e.go()
                }
            }(this), i = function(n) {
                return function() {
                    return n._block = !0, n.stop(), e(t)
                }
            }(this), n = setTimeout(function(n) {
                return function() {
                    return n._debug('StopGo#synchronize timed out', e), t()
                }
            }(this), 5e3), this.runFn(i), this
        }, e.prototype.tryAndReport = function(t) {
            var n;
            try {
                return t()
            } catch (e) {
                return n = e, n.stack ? ('undefined' != typeof console && null !== console && console.log(n.message), 'undefined' != typeof console && null !== console ? console.log(n.stack) : void 0) : 'undefined' != typeof console && null !== console ? console.log(n) : void 0
            }
        }, e.prototype.clearSynchronized = function() {
            return this.setQueue([]), this._block = !1, this._green = !0
        }, e.prototype.filter = function(e) {
            var t;
            return this._queue = function() {
                var n, i, a, r;
                for (a = this._queue, r = [], (n = 0, i = a.length); n < i; n++) t = a[n], e(t) && r.push(t);
                return r
            }.call(this), this
        }, e.prototype.push = function(e) {
            return this._queue.push(e), this
        }, e.prototype.go = function() {
            var e;
            return e = 1 <= arguments.length ? n.call(arguments, 0) : [], this._green = !0, this.goArgs = e, this.flush.apply(this, e), this
        }, e.prototype.stop = function() {
            return this._green = !1, this
        }, e.prototype.run = function() {
            var e, t, a, i;
            for (t = 1 <= arguments.length ? n.call(arguments, 0) : [], a = 0, i = t.length; a < i; a++) e = t[a], this.runFn(e);
            return this
        }, e.prototype.then = function() {
            return this.run.apply(this, arguments)
        }, e.prototype.runFn = function(e) {
            return this._green && !this._block ? this._lock ? this.tryAndReport(e) : (this.push(e), this.flush()) : this.push(e), this
        }, e.prototype.remove = function() {
            var e, t, a, i;
            for (t = 1 <= arguments.length ? n.call(arguments, 0) : [], a = 0, i = t.length; a < i; a++) e = t[a], this.removeFn(e);
            return this
        }, e.prototype.removeFn = function(e) {
            return this.filter(function(t) {
                return e !== t
            }), this
        }, e.prototype.setQueue = function(e) {
            return this._queue = e, this
        }, e.prototype.getQueue = function() {
            return this._queue
        }, e.prototype._allInOne = function() {
            var e, t;
            return e = arguments[0], t = 2 <= arguments.length ? n.call(arguments, 1) : [], !0 === e ? this.go.apply(this, t) : !1 === e ? this.stop() : null == e ? this._green : e instanceof Array ? this.run.apply(this, e) : 'string' == typeof e ? this[e].apply(this, t) : this.run.apply(this, arguments)
        }, e
    }(), t.when = function() {
        var e, a, i, r, l, s, d, p;
        for (p = 1 <= arguments.length ? n.call(arguments, 0) : [], s = new t, i = function() {
                return s.go.apply(s, arguments)
            }, l = p.reverse(), e = function(e, t) {
                return i = function() {
                    return t(function() {
                        return e.apply(null, arguments)
                    })
                }
            }, (a = 0, r = l.length); a < r; a++) d = l[a], e(i, d);
        return i(), s
    }, e.exports = t;
}, function(e, t, n) {
    'use strict';
    n.r(t);
    n.d(t, 'runScript', function() {
        return r
    });
    var i = n(23),
        a = n.n(i),
        r = function(e, t) {
            return new a.a(function(n, i) {
                null == t && (t = 8e3);
                var a;
                a = document.createElement('script'), a.src = e, a.async = !0, a.type = 'text/javascript';
                var r = null,
                    l = !1,
                    s = function() {
                        a.onerror = a.onreadystatechange = a.onload = null, clearTimeout(r), clearTimeout(p), r = setTimeout(function() {
                            a && a.parentNode && a.parentNode.removeChild(a)
                        }, 500)
                    },
                    d = function() {
                        var e = a.readyState;
                        l || e && !/loaded|complete/.test(e) || (l = !0, setTimeout(function() {
                            n(), s()
                        }, 1))
                    },
                    p = setTimeout(function() {
                        l = !0, s(), i('timeout')
                    }, t);
                a.onerror = function() {
                    l = !0, s(), i('error')
                }, a.onreadystatechange = d, a.onload = d, (document.body || document.head).appendChild(a)
            })
        };
    t['default'] = r;
}, function(e) {
    var t = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(e) {
        return typeof e
    } : function(e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
    };
    (function(n, a) {
        function r(e, n) {
            return ('undefined' == typeof n ? 'undefined' : t(n))[0] == e
        }

        function l(e, t) {
            return t = function d(p, u, c, m, g, h) {
                if (m = d.q, p != r) return l(function(e, t) {
                    m.push({
                        p: this,
                        r: e,
                        j: t,
                        1: p,
                        0: u
                    })
                });
                if (c && r(n, c) | r(a, c)) try {
                    g = c.then
                } catch (e) {
                    u = 0, c = e
                }
                if (r(n, g)) {
                    var i = function(e) {
                        return function(t) {
                            g && (g = 0, d(r, e, t))
                        }
                    };
                    try {
                        g.call(c, i(1), u = i(0))
                    } catch (e) {
                        u(e)
                    }
                } else
                    for (t = function(t, i) {
                            return r(n, t = u ? t : i) ? l(function(e, n) {
                                s(this, e, n, c, t)
                            }) : e
                        }, h = 0; h < m.length;) g = m[h++], r(n, p = g[u]) ? s(g.p, g.r, g.j, c, p) : (u ? g.r : g.j)(c)
            }, t.q = [], e.call(e = {
                then: function(e, n) {
                    return t(e, n)
                },
                catch: function(e) {
                    return t(0, e)
                }
            }, function(e) {
                t(r, 1, e)
            }, function(e) {
                t(r, 0, e)
            }), e
        }

        function s(e, t, i, l, s) {
            var d = function() {
                try {
                    l = s(l), s = l && r(a, l) | r(n, l) && l.then, r(n, s) ? l == e ? i(TypeError()) : s.call(l, t, i) : t(l)
                } catch (e) {
                    i(e)
                }
            };
            window.setImmediate ? window.setImmediate(d) : setTimeout(d, 0)
        }

        function i(e) {
            return l(function(t) {
                t(e)
            })
        }
        return window.Promise ? void(e.exports = window.Promise) : void(e.exports = l, l.resolve = i, l.reject = function(e) {
            return l(function(t, n) {
                n(e)
            })
        }, l.all = function(e) {
            return l(function(t, n, a, r) {
                r = [], a = e.length || t(r), e.map(function(e, l) {
                    i(e).then(function(e) {
                        r[l] = e, --a || t(r)
                    }, n)
                })
            })
        }, l.race = function(e) {
            return l(function(t, n) {
                e.map(function(e) {
                    i(e).then(t, n)
                })
            })
        })
    })('f', 'o');
}, function(e, t, n) {
    'use strict';
    n.r(t);
    n.d(t, 'init', function() {
        return d
    });
    n.d(t, 'uncache', function() {
        return p
    });
    n.d(t, 'setOrGet', function() {
        return u
    });
    n.d(t, 'removeLocalStorage', function() {
        return c
    });
    n.d(t, 'dumpLocalStorage', function() {
        return m
    });
    var i = n(2),
        a = n(12),
        r = n(6),
        l = n(11),
        s = Object(a.cachedDetect)(),
        d = function() {
            if (s.localstorage && null == i['default']._localStorage && (i['default']._localStorage = {}, localStorage.wistia)) try {
                i['default']._localStorage = JSON.parse(localStorage.wistia)
            } catch (t) {
                l.wlog.notice(t)
            }
        },
        p = function() {
            i['default']._localStorage = {}
        },
        u = function(e, t) {
            var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2];
            if (s.localstorage) {
                if (null == i['default']._localStorage && d(), null != t) {
                    n ? Object(r.unset)(i['default']._localStorage, e) : Object(r.set)(i['default']._localStorage, e, t);
                    try {
                        localStorage.wistia = JSON.stringify(i['default']._localStorage)
                    } catch (t) {
                        l.wlog.notice(t)
                    }
                    return t
                }
                return null == e ? i['default']._localStorage : Object(r.get)(i['default']._localStorage, e)
            }
        },
        c = function(e) {
            return u(e, 'nada', !0)
        },
        m = function() {
            if (s.localstorage) {
                i['default']._localStorage = {};
                try {
                    localStorage.removeItem('wistia')
                } catch (t) {
                    l.wlog.error(t)
                }
            }
        };
}, function(e, t, n) {
    'use strict';
    n.r(t);
    n.d(t, 'makeCacheable', function() {
        return i
    });
    n.d(t, 'uncacheNamespace', function() {
        return u
    });
    n.d(t, 'uncache', function() {
        return p
    });
    n.d(t, 'makeNamespace', function() {
        return a
    });
    var i = function(e) {
            return function(t, n, i) {
                if (s(e, t), r(e, t, n)) return l(e, t, n);
                var a = i();
                return d(e, t, n, a), a
            }
        },
        a = function(e) {
            return function(t) {
                return null == t[e] && (t[e] = {}), t[e]
            }
        },
        r = function(e, t, n) {
            return null != l(e, t, n)
        },
        l = function(e, t, n) {
            return s(e, t), t[e][n]
        },
        s = function(e, t) {
            null == t[e] && (t[e] = {})
        },
        d = function(e, t, n, i) {
            s(e, t), t[e][n] = i
        },
        p = function(e, t, n) {
            s(e, t), delete t[e][n]
        },
        u = function(e, t) {
            t[e] = {}
        };
}, function(e, t, n) {
    'use strict';
    n.r(t);
    n.d(t, 'jsonp', function() {
        return i
    });
    n.d(t, 'jsonpPlus', function() {
        return c
    });
    var a = n(3),
        r = n(2),
        l = n(15),
        s = n(20),
        d = n(13),
        p = n(11),
        u = p.wlog.getPrefixedFunctions('jsonp');
    null == r['default']._jsonpCounter && (r['default']._jsonpCounter = 0);

    function i(e, t, n, i) {
        var p = '?';
        for (var c in t = t || {}, t) 'callback' != c && t.hasOwnProperty(c) && (p += encodeURIComponent(c) + '=' + encodeURIComponent(t[c]) + '&');
        u.info(e, p, i);
        var m, g;
        if (i && i.once && (m = (e + p).replace(/\.json[^p]/, '.jsonp'), g = Object(s.findScriptInDomBySrc)(m, {
                ignoreProtocol: !0,
                scriptRegex: i.scriptRegex
            })), g) {
            var h = new l.Url(m),
                y = 'wistiajsonp-' + h.relative();
            u.info('script already in DOM', m, 'polling', y), Object(d.poll)(function() {
                return u.info('found', y, 'on root object'), null != a['default'][y]
            }, function() {
                n(a['default'][y])
            }, 15, 3e4)
        } else {
            var f;
            f = t && t.callback ? t.callback : 'wistiajson' + ++r['default']._jsonpCounter, u.info('defining on root:', f), a['default'][f] = function(e) {
                n(e);
                try {
                    delete a['default'][f]
                } catch (t) {}
                a['default'][f] = null
            };
            var _ = e + p + 'callback=' + f;
            u.info('runScript', _), Object(s.runScript)(_)
        }
        return f
    }
    var c = function(e, t, n) {
        var a = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : {};
        a.timeout || (a.timeout = 5e3), a.onerror || (a.onerror = function() {});
        var r = setTimeout(a.onerror, a.timeout);
        i(e, t, function(e) {
            clearTimeout(r), n && n(e)
        }, a)
    };
}, function(e, t, n) {
    'use strict';
    n.r(t);
    n.d(t, 'getDefaultContext', function() {
        return P
    });
    n.d(t, 'buildContext', function() {
        return T
    });
    n.d(t, 'choosePlayer', function() {
        return I
    });
    n.d(t, 'bestPlayer', function() {
        return x
    });
    n.d(t, 'isValidPlayer', function() {
        return D
    });
    n.d(t, 'canUsePlayer', function() {
        return B
    });
    n.d(t, 'canPlayInline', function() {
        return F
    });
    n.d(t, 'usablePlayers', function() {
        return O
    });
    n.d(t, 'supportedPlayers', function() {
        return M
    });
    n.d(t, 'isSupportedPlayer', function() {
        return L
    });
    n.d(t, 'hasAssetsForPlayer', function() {
        return N
    });
    n.d(t, 'determinePlayerPreferenceFromInput', function() {
        return W
    });
    n.d(t, 'isMobile', function() {
        return R
    });
    n.d(t, 'isPasswordProtected', function() {
        return H
    });
    n.d(t, 'isNotPlayable', function() {
        return j
    });
    n.d(t, 'noFallbackFromFlash', function() {
        return V
    });
    n.d(t, 'logWarnings', function() {
        return U
    });
    n.d(t, 'shouldServeHls', function() {
        return z
    });
    n.d(t, 'hasDesktopHlsAssets', function() {
        return G
    });
    n.d(t, 'xhrHasBeenTamperedWith', function() {
        return K
    });
    n.d(t, 'urlHasBeenTamperedWith', function() {
        return Y
    });
    n.d(t, 'PLUGIN_CONFIGS', function() {
        return Z
    });
    n.d(t, 'playerPlugins', function() {
        return ee
    });
    n.d(t, 'enginesToLoad', function() {
        return te
    });
    n.d(t, 'bestUsableEngineClass', function() {
        return oe
    });
    n.d(t, 'bestUsableEngine', function() {
        return ie
    });
    n.d(t, 'report', function() {
        return ae
    });
    var i = n(3),
        a = n(2),
        r = n(16),
        l = n(6),
        s = n(24),
        d = n(12),
        p = n(11),
        u, c = p.wlog.getPrefixedFunctions('judy'),
        m = 'vulcan',
        g = 'vulcan-v2',
        h = 'html5',
        y = 'simplehtml5',
        f = 'flash',
        _ = 'external',
        b = 'notplayable',
        v = 'passwordprotected',
        A = 'auto',
        w = [m, g, h, y, f, _, b, v],
        k = 'nativeHlsVideo',
        E = 'hlsVideo',
        C = 'manualQualityVideo',
        S = 'twoStrokeVideo',
        P = function() {
            return u ? u : (u = {
                location: window.location,
                logger: c,
                pageUrl: location.href,
                detect: l.clone(Object(d.cachedDetect)()),
                userAgent: navigator.userAgent,
                silenceGlobalWarnings: i['default'].wistiaSilenceGlobalWarnings,
                inIframe: top !== self
            }, u)
        },
        T = function() {
            var e = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : {};
            return l.assign({}, P(), e)
        },
        I = function(e, t, n) {
            var i = e.logger,
                a = t.assets,
                r = n.force,
                l = n.playerForce;
            !l && r && (l = r), i.info('choosePlayer input', t.hashedId);
            var s = W(e, t, n);
            if (l && !D(e, l) && (i.error('Invalid playerForce option: "' + l + '", ignoring'), l = r = null), s && s !== A && !D(e, s) && (i.error('Invalid playerPreference option: "' + s + '", ignoring'), s = A), i.info('playerPreference is', s), l) return i.info('"playerForce" used, return', l), l;
            if (H(e, n)) return i.info('return', v), v;
            if (j(e, t)) return i.info('return', b), b;
            if (s !== A && B(e, s, a)) {
                var d = (t.spherical || n.spherical) && !n.overrideSpherical;
                return s === g && d ? (i.info('vulcan-v2 doesn\'t support spherical, return', m), m) : (i.info('"playerPreference" used, return', s), s)
            }
            return i.info('choosing player with no preference'), x(e, t, n)
        },
        x = function(e, t, n) {
            var i = e.location,
                a = e.detect,
                r = e.logger,
                s = e.inIframe,
                d = t.assets;
            if (a.oldandroid) return r.info('oldandroid'), B(e, f, d) && 'https:' === i.protocol ? (r.info('flash on old android'), f) : (r.info('external on old android'), _);
            if (B(e, m, d)) {
                var p = (t.spherical || n.spherical) && !n.overrideSpherical,
                    u = l.get(n, 'plugin.captions-v1'),
                    c = null != u && !1 !== u.on,
                    g = a.iphone || a.android || a.ipad;
                return !1 === n.playsinline && g || !p && 0 < a.ios.version && n._inIframe && c && !1 !== n.fullscreenButton ? (r.info('ios iframe w/ captions, ret', h), h) : (r.info('default, ret', m), m)
            }
            return B(e, f, d) ? (r.info('default, ret', f), f) : B(e, h, d) ? (r.info('default, ret', h), h) : V(e) ? (r.info('no fallback from flash, return', f), f) : (r.info('nothing left, use', _), _)
        },
        D = function(e, t) {
            return 0 <= l.indexOf(w, t)
        },
        B = function(e, t, n) {
            return L(e, t) && N(e, t, n)
        },
        F = function(e) {
            var t = e.detect;
            return t.android || 10 <= t.ios.version
        },
        O = function(e, t) {
            for (var n, a = [], r = M(e), l = 0; l < r.length; l++) n = r[l], B(e, n, t) && a.push(n);
            return a
        },
        M = function(e) {
            var t = e.detect,
                n = [b, v, _];
            return t.vulcanSupport ? (n.push(m), n.push(g)) : (t.iphone || t.ipad || t.android) && (n.push(m), n.push(g)), t.video.h264 && n.push(h), 9 <= t.flash.version && n.push(f), n
        },
        L = function(e, t) {
            return !!D(e, t) && 0 <= l.indexOf(M(e), t)
        },
        N = function(e, t, n) {
            if (!D(e, t)) return !1;
            if (t === b || t === v) return !0;
            if (t === m || t === g) return 0 < r.readyPublicMp4s(n).length || 0 < r.readyPublicM3u8s(n).length;
            if (t === h) return 0 < r.readyPublicMp4s(n).length;
            if (t === f) return 0 < r.readyPublicFlvs(n).length || 0 < r.readyPublicMp4s(n).length;
            if (t === _) return 0 < r.readyPublicMp4s(n).length;
            throw new Error('Unhandled player type \'' + t + '\'')
        },
        W = function(e, t, n) {
            var i = n.playerPreference || n.platformPreference;
            return i && i !== A ? i === h ? R(e) ? h : m : i === y ? h : i : A
        },
        R = function() {
            var e = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : context,
                t = e.detect;
            return t.iphone || t.ipad || t.android
        },
        H = function(e, t) {
            var n = l.get(t, 'plugin.passwordProtectedVideo');
            return null != n && !1 !== n.on
        },
        j = function e(t, n) {
            var i = n.assets;
            return 0 === i.length || 1 === i.length && 'original' === i[0].type || 0 == r.readyPublicMp4sAndFlvs(i).length || 0 < r.nonfailedPublicOver400(i).length && 0 === r.readyPublicOver400(i).length || ne(n) && e(t, n.secondaryMediaData)
        },
        V = function() {
            var e = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : context,
                t = e.detect;
            return t.browser.msie && (9 > t.browser.version || t.browser.quirks) || t.browser.mozilla
        },
        U = function(e) {
            var t = e.detect,
                n = e.userAgent,
                i = e.logger,
                a = e.silenceGlobalWarnings;
            if (!a) {
                var r = t.browser.msie && 11 > t.browser.version,
                    l = /phantomjs/i.test(n);
                !K() || l || r || i.error('The XMLHttpRequest constructor has been tampered with. Because this affects CORS/Range XHR requests, HLS playback has been disabled. To enable HLS playback and other important features, please remove code that changes the definition of window.XMLHttpRequest.'), Y() && t.mediaSource && !l && !r && i.error('window.URL.createObjectURL has been tampered with. Because this affects use of Media Source Extensions, HLS playback has been disabled. window.URL is a browser API that should not be clobbered. Its current value is:', window.URL)
            }
        },
        z = function(e, t, n) {
            var i = e.detect;
            return (i.mediaSource || i.nativeHls) && (!i.chrome || 50 < parseInt(i.chrome.version)) && !i.trident && !(i.android && (!1 === n.playsinline || !0 === n.nativeMode)) && (t.hls_enabled || X(e, n)) && !1 !== X(e, n) && G(e, t.assets) && (!K(e) && !Y(e) || X(e, n))
        },
        G = function(e, t) {
            var n = r.filter(t, {
                    container: 'm3u8',
                    type: 'hls_video',
                    status: r.READY,
                    sortBy: 'width desc',
                    metadata: function(e) {
                        return e && e.max_bitrate
                    },
                    display_name: function(e) {
                        return 'Audio' != e
                    }
                }),
                i = r.filter(t, {
                    container: 'mp4',
                    status: r.READY,
                    sortBy: 'width desc'
                });
            return 0 < n.length && (0 === i.length || n[0].width >= i[0].width)
        },
        Q = /\s*function\s+XMLHttpRequest\(\)\s*{\s*\[native code\]\s*}\s*/m,
        q = /\[object XMLHttpRequestConstructor\]/m,
        K = function() {
            if (XMLHttpRequest && XMLHttpRequest.prototype && XMLHttpRequest.prototype.constructor) {
                var e = XMLHttpRequest.prototype.constructor.toString();
                return !(Q.test(e) || q.test(e))
            }
            return !0
        },
        Y = function() {
            return 'function' != typeof(window.URL && window.URL.createObjectURL)
        },
        X = function() {
            var e = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : context,
                t = e.pageUrl,
                n = arguments[1],
                i = J(t);
            if (null != i) return i;
            var a = Object(s.setOrGet)('forceHls');
            return null == a ? n.hls : a
        },
        J = function(e) {
            var t = e && e.match && e.match(/[\&\?]whls=([^\&]+)/),
                n = t && t[1];
            return null == n ? null : l.cast(n)
        },
        Z = {
            sphericalVideo: {
                on: !0,
                initBeforeHasData: !1,
                async: !1
            },
            notPlayableVideo: {
                on: !0,
                initBeforeHasData: !0,
                async: !1,
                loadWeight: -1
            },
            vulcanVideo: {
                on: !0,
                initBeforeHasData: !1,
                async: !1,
                loadWeight: -1
            },
            vulcanV2Video: {
                on: !0,
                initBeforeHasData: !1,
                async: !1,
                loadWeight: -1
            },
            hlsVideo: {
                on: !0,
                initBeforeHasData: !1,
                async: !1,
                loadWeight: 0
            },
            nativeHlsVideo: {
                on: !0,
                initBeforeHasData: !1,
                async: !1,
                loadWeight: 0
            },
            passwordProtectedVideo: {
                on: !0,
                initBeforeHasData: !0,
                async: !1,
                loadWeight: -1
            },
            encodingProgress: {
                on: !0,
                initBeforeHasData: !1,
                async: !0,
                loadWeight: 100
            },
            externalPlayer: {
                on: !0,
                initBeforeHasData: !1,
                async: !1,
                loadWeight: -1
            },
            flashPlayer: {
                on: !0,
                initBeforeHasData: !1,
                async: !1,
                loadWeight: -1
            },
            html5Player: {
                on: !0,
                initBeforeHasData: !1,
                async: !1,
                loadWeight: -1
            }
        },
        $ = function(e, t) {
            var n = {};
            return n[t] = Z[t], n
        },
        ee = function(e, t, n, a) {
            var r = e.detect,
                s = e.logger,
                d = {};
            if (s.info('playerPlugins input', t, n.hashedId, n, a), t === b) l.merge(d, $(e, 'notPlayableVideo'));
            else if (t === v) l.merge(d, $(e, 'passwordProtectedVideo'));
            else if (t === h) l.merge(d, $(e, 'html5Player'));
            else if (t === f) l.merge(d, $(e, 'flashPlayer'));
            else if (t === _) l.merge(d, $(e, 'externalPlayer'));
            else if (t === g) l.merge(d, $(e, 'vulcanV2Video'));
            else if (t === m) {
                l.merge(d, $(e, 'vulcanVideo')), (n.spherical || a.spherical) && !a.overrideSpherical && l.merge(d, $(e, 'sphericalVideo'));
                for (var p = te(e, n, a), u = 0; u < p.length; u++) l.merge(d, $(e, p[u]))
            }
            var i = [];
            for (var c in d) i.push(c);
            return s.info.apply(s, ['playerPlugins output'].concat(i, [d])), d
        },
        te = function e(t, n) {
            var i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {},
                a = t.detect,
                r = t.logger,
                s = [];
            r.info('enginesToLoad');
            var d = z(t, n, i);
            if (d && a.nativeHls ? (r.info(k), s.push(k)) : d ? (r.info(E), s.push(E)) : (r.info(C), s.push(C)), ne(n)) {
                r.info(S), s.push(S);
                var p = l.except(i, ['twoStroke']),
                    u = n.secondaryMediaData,
                    c = e(t, u, p);
                s = s.concat(c)
            } else i.secondaryVideoUrl && (r.info('secondaryVideoUrl', S), s.push(S));
            var m = {};
            s.map(function(e) {
                m[e] = !0
            });
            var g = [];
            for (var h in m) g.push(h);
            return g
        },
        ne = function(e) {
            return !!e.secondaryMediaData
        },
        oe = function(e, t) {
            var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {},
                i = e.detect,
                r = e.logger;
            r.info('bestUsableEngineClass');
            var l = z(e, t, n),
                s = a['default'].engines || {};
            return ne(t) && s.TwoStrokeVideo ? (r.info(S), s.TwoStrokeVideo) : n.secondaryVideoUrl && s.TwoStrokeVideo ? (r.info(S), s.TwoStrokeVideo) : l && i.nativeHls && s.NativeHlsVideo ? (r.info(k), s.NativeHlsVideo) : l && s.HlsVideo ? (r.info(E), s.HlsVideo) : (r.info(C), s.ManualQualityVideo)
        },
        ie = function(e, t) {
            var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {},
                i = e.detect,
                a = e.logger;
            a.info('bestUsableEngineClass');
            var r = z(e, t, n);
            return ne(t) ? (a.info(S), 'engines/two_stroke_video.js') : n.secondaryVideoUrl ? (a.info(S), 'engines/two_stroke_video.js') : r && i.nativeHls ? (a.info(k), 'engines/native_hls_video.js') : r ? (a.info(E), 'engines/hls_video.js') : (a.info(C), 'engines/manual_quality_video.js')
        },
        ae = function(e, t, n) {
            return {
                bestPlayer: x(e, t, n),
                supportedPlayers: M(e),
                usablePlayers: O(e, t.assets),
                playerPreferenceFromInput: W(e, t, n)
            }
        };
}, function(e, t, n) {
    'use strict';
    n.r(t);
    n.d(t, 'AJAX_DEFAULTS', function() {
        return h
    });
    n.d(t, 'ajaxGet', function() {
        return y
    });
    n.d(t, 'ajaxHead', function() {
        return f
    });
    n.d(t, 'ajaxPost', function() {
        return _
    });
    n.d(t, 'ajax', function() {
        return b
    });
    var i = n(6),
        a = n(15),
        r = n(12),
        l = n(20),
        s = n(11),
        d = n(7),
        p = n(26),
        u = n(5),
        c = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
        },
        m = Object(r.cachedDetect)(),
        g = s.wlog.getPrefixedFunctions('ajax'),
        h = {
            type: 'GET',
            contentType: '',
            headers: void 0,
            data: void 0,
            dataType: void 0,
            timeout: 0,
            success: void 0,
            error: void 0,
            complete: void 0
        },
        y = function(e, t) {
            return t = Object(i.merge)({}, t, {
                type: 'GET',
                data: void 0
            }), b(e, t)
        },
        f = function(e, t) {
            return t = Object(i.merge)({}, t, {
                type: 'HEAD',
                data: void 0
            }), b(e, t)
        },
        _ = function(e, t) {
            return t = Object(i.merge)({
                contentType: 'application/x-www-form-urlencoded'
            }, t, {
                type: 'POST'
            }), b(e, t)
        },
        b = function(e, t) {
            g.info('ajax', e, t);
            var n = Object(i.merge)({}, h, t),
                r = new a.Url(e);
            r.protocol = r.protocol || Object(a.proto)();
            var s = !!(m.browser.msie && 11 > m.browser.version),
                y = Object(a.proto)() !== r.protocol;
            if (g.info('noHttpToHttpsSupport', s, 'isHttpToHttps', y), n.fallbackToJsonp && y && s)
                if (g.info('fallbackToJsonp'), !n.type || /get/i.test(n.type)) {
                    var f = r.params;
                    n.data && Object(i.isObject)(n.data) && (f = Object(i.merge)(f, n.data)), n.jsonpCallback && (f.callback = n.jsonpCallback), r.params = {}, Object(l.removeScriptsBySrc)(r.absolute(), {
                        ignoreProtocol: !0,
                        testStartsWith: !0
                    });
                    var _ = Object(d['default'])('ajax-jsonp.');
                    Object(p.jsonp)(r.absolute(), f, function(e) {
                        if (Object(u.clearTimeouts)(_), 'json' === n.dataType && 'string' == typeof e) try {
                            var t = JSON.parse(e);
                            n.success(t, 'OK', e), n.complete(null, 'OK')
                        } catch (t) {
                            n.error(null, 'parseerror', e), n.complete(null, e)
                        } else n.success(e, 'OK')
                    }), Object(u.doTimeout)(_, function() {
                        n.error(null, 'timeout'), g.warn('request timed out:', r.absolute(), f)
                    }, 6e4)
                } else return void(Object(i.isFunction)(n.error) && n.error.call(null, null, 'error', 'This browser does not support POST requests from an http to an https domain. To use this feature, please make sure this page is loaded over https.'));
            var b = r.absolute(),
                v = A(b);
            if (!v) return Object(i.isFunction)(n.error) && n.error.call(null, v, 'error', 'Could not create XMLHttpRequest'), void(Object(i.isFunction)(n.complete) && n.complete.call(null, v, 'error'));
            var w = null != window.XDomainRequest && v instanceof window.XDomainRequest,
                k = !1,
                E = !1,
                C = function(e, t, a) {
                    !k && Object(i.isFunction)(n.error) && n.error.call(null, e, t, a), k = !0
                },
                S = function(e, t, a) {
                    Object(i.isFunction)(n.success) && !k && n.success.call(null, e, t, a), k = !0
                },
                P = function(e, t) {
                    Object(i.isFunction)(n.complete) && !E && n.complete.call(null, e, t), e.onerror = e.ontimeout = e[w ? 'onload' : 'onreadystatechange'] = null, E = !0
                };
            g.info('xhr.open', n.type, b), v.open(n.type, b, !0);
            var T = function() {
                    if (!(null != v.status && (200 <= v.status && 300 > v.status || 304 == v.status))) C(v, 'error', v.statusText), g.warn('error', v.statusText);
                    else if ('json' == n.dataType && 'object' !== c(v.response)) try {
                        var e = JSON.parse(v.responseText);
                        g.info('success', v.statusText, e), S(e, v.statusText, v)
                    } catch (t) {
                        C(v, 'parseerror', t), g.warn('parseerror'), g.warn(t)
                    } else S(v.response || v.responseText, v.statusText, v), g.info('success', v.statusText, v.response || v.responseText);
                    P(v, v.statusText), g.info('complete', v.statusText)
                },
                I = function(e, t) {
                    C(v, e, t), P(v, e)
                };
            if (n.timeout && (v.timeout = n.timeout), null != n.dataType && (v.responseType = n.dataType), Object(i.isFunction)(v.setRequestHeader) && (n.contentType && v.setRequestHeader('Content-Type', n.contentType), n.headers))
                for (var x in n.headers) v.setRequestHeader(x, n.headers[x]);
            if (n.withCredentials && (v.withCredentials = !0), w) {
                if (g.info('isXDomainObject'), null != n.headers) return I('error', 'custom headers disallowed for XDomainRequest');
                v.onload = function() {
                    g.info('XDomainObject onload'), v.status = 200, v.statusText = 'OK', T()
                }, v.onerror = function() {
                    return I('error', 'error')
                }, v.ontimeout = function() {
                    return I('timeout', 'timeout')
                }
            } else v.onreadystatechange = function() {
                g.info('xhr onreadystatechange', v.readyState), 4 == v.readyState && T()
            }, v.onerror = function() {
                return I('error', 'error')
            }, v.ontimeout = function() {
                return I('timeout', 'timeout')
            };
            return g.info('xhr.send', n.data), v.send(n.data), v
        },
        v = [function() {
            var e, t;
            return function(n) {
                if (null != window.XDomainRequest) {
                    null == e && (e = window.location.href), null == t && (t = new a.Url(e.toLowerCase()));
                    var i = new a.Url(n.toLowerCase()),
                        r = !1;
                    return r || (r = t.protocol != i.protocol), r || (r = t.host != i.host), r ? new window.XDomainRequest : null
                }
            }
        }(), function() {
            return new XMLHttpRequest
        }, function() {
            return new ActiveXObject('Microsoft.XMLHTTP')
        }],
        A = function(e) {
            for (var t, n = void 0, a = 0; a < v.length; a++) {
                t = v[a];
                try {
                    n = t(e)
                } catch (t) {
                    continue
                }
                if (!!n) break
            }
            return n
        };
}, function(e, t, n) {
    'use strict';
    n.r(t);
    n.d(t, 'canEditMedia', function() {
        return h
    });
    n.d(t, 'fetchMedia', function() {
        return y
    });
    n.d(t, 'mediaDataUrl', function() {
        return f
    });
    n.d(t, 'mediaDataScriptRegExp', function() {
        return _
    });
    n.d(t, 'EMBED_SSL_ACCOUNT_IDS', function() {
        return b
    });
    n.d(t, 'isEmbedSslMedia', function() {
        return v
    });
    n.d(t, 'convertEmbedSslToAkamai', function() {
        return A
    });
    n.d(t, 'cacheMedia', function() {
        return w
    });
    n.d(t, 'uncacheMedia', function() {
        return k
    });
    n.d(t, 'mediaFromCache', function() {
        return E
    });
    var i = n(3),
        a = n(2),
        r = n(21),
        l = n.n(r),
        s = n(11),
        d = n(26),
        p = n(20),
        u = n(7),
        c = n(5),
        m = n(18),
        g = n(15);
    null == a['default']._canEditMedia && (a['default']._canEditMedia = {}), null == a['default']._remoteMedia && (a['default']._remoteMedia = {});
    var h = function(e, t) {
            var n;
            if (n = a['default']._canEditMedia[e]) return n;
            n = a['default']._canEditMedia[e], null == n && (n = a['default']._canEditMedia[e] = new l.a);
            var i = 'https://' + Object(m.mediaDataHost)(t) + '/media_url',
                r = {
                    hashed_id: encodeURIComponent(e)
                };
            return Object(d.jsonpPlus)(i, r, function(e) {
                e && e.logged_in && n.go(e)
            }, {
                once: !0
            }), n
        },
        y = function(e, t) {
            var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : {},
                i = E(e);
            if (i) {
                s.wlog.info('W.remote.media', e, 'from local cache');
                var a = 'remote-media.' + e + '.' + Object(u['default'])();
                return Object(c.doTimeout)(a, function() {
                    t(i)
                }), a
            }
            s.wlog.info('W.remote.media', e, 'fetching');
            var r, l = f(e, n);
            null != n.password && (r = {
                password: n.password
            });
            var p = {
                onerror: function() {
                    s.wlog.error('Timed out fetching ' + l)
                },
                timeout: 1e4,
                once: null == n.once || n.once,
                scriptRegex: _(e)
            };
            return Object(d.jsonpPlus)(l, r, function(n) {
                n.error ? (s.wlog.info('W.remote.media', e, 'error', n), w(e, n), t(n)) : (delete n.media.unnamed_assets, A(n.media), w(e, n.media), s.wlog.info('W.remote.media', e, 'responded', n.media), t(n.media))
            }, p)
        },
        f = function(e) {
            var t = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {};
            if (t.useMediaDataHostLogic) {
                var n = Object(m.mediaDataHost)(t);
                return Object(m.eV1Protocol)() + '//' + n + '/embed/medias/' + e + '.json'
            }
            var i = Object(m.forceValidFastWistiaHost)(t.embedHost);
            return Object(g.proto)() + '//' + i + '/embed/medias/' + e + '.json'
        },
        _ = function(e) {
            var t = 'https:' === location.protocol ? 'https' : 'https?';
            return new RegExp('^(' + t + ':)?//((' + Object(m.cdnFastWistiaComHost)().replace('.', '\\.') + ')|(' + Object(m.cdnFastWistiaNetHost)().replace('.', '\\.') + '))/embed/medias/' + e + '\\.jsonp\\??')
        },
        b = [],
        v = function(e) {
            if (e.accountKey) return !1;
            for (var t, n = 0; n < b.length; n++)
                if (t = b[n], e.accountKey === 'wistia-production_' + t) return !0;
            return !1
        },
        A = function e(t) {
            if (t.assets && !v(t))
                for (var n, a = 0; a < t.assets.length; a++) n = t.assets[a], n.url && (n.url = n.url.replace(/^https:\/\/embed-ssl\.wistia\.com/, 'https://embedwistia-a.akamaihd.net'));
            return t.secondaryMediaData && e(t.secondaryMediaData), t
        },
        w = function(e, t) {
            return a['default']._remoteMedia[e] = t
        },
        k = function(e) {
            a['default']._remoteMedia[e] = null, delete a['default']._remoteMedia[e], window['wistiajsonp-/embed/medias/' + e + '.json'] = null, Object(p.removeScriptsBySrc)(f(e), {
                scriptRegex: _(e)
            })
        },
        E = function(e) {
            var t = a['default']._remoteMedia[e];
            if (t) return t;
            var n = i['default']['wistiajsonp-/embed/medias/' + e + '.json'];
            return null != n && n.media ? n.media : null
        };
}, function(e, t, n) {
    'use strict';
    n.r(t);
    n.d(t, 'fetchPlaylist', function() {
        return u
    });
    var i = n(2),
        a = n(26),
        r = n(15),
        l = n(18),
        s = n(11),
        d = n(7),
        p = n(5);
    null == i['default']._remotePlaylist && (i['default']._remotePlaylist = {});
    var u = function(e, t) {
        var n;
        if (n = i['default']._remotePlaylist[e]) Object(p.doTimeout)('remote-playlist.' + e + '.' + Object(d['default'])(), function() {
            t(n)
        });
        else {
            var u = Object(r.proto)() + '//' + Object(l.cdnFastWistiaComHost)() + '/embed/playlists/' + e + '.json',
                c = function(n) {
                    i['default']._remotePlaylist[e] = n, t(n)
                },
                m = function() {
                    s.wlog.error('Timed out fetching ' + u)
                };
            Object(a.jsonpPlus)(u, {}, c, {
                onerror: m,
                timeout: 1e4
            })
        }
    };
}, function(e, t, n) {
    'use strict';
    n.r(t);
    n.d(t, 'PUBLIC_METHODS', function() {
        return i
    });
    n.d(t, 'delegateMethods', function() {
        return a
    });
    n.d(t, 'delegatePublicMethods', function() {
        return r
    });
    var i = ['activeBufferRange', 'anyBuffered', 'bind', 'bindNamed', 'bufferInfo', 'cancelFullscreen', 'captureCurrentFrame', 'changeQuality', 'changeStream', 'changeStreamWithoutLoad', 'changeVideo', 'currentAsset', 'defaultAsset', 'destroy', 'diagnosticData', 'eventContext', 'fit', 'getCurrentQuality', 'getCurrentTime', 'getDuration', 'getPlaybackMode', 'getPlaybackRate', 'getPreload', 'getState', 'getTrim', 'getVolume', 'hasIssuedPlay', 'isChangingVideo', 'isInitializingFromUnmuted', 'isInFullscreen', 'isMuted', 'isSeeking', 'isSourceOfBrowserEvent', 'lastBufferedTime', 'mute', 'onEnterFullscreen', 'onHeightChange', 'onLeaveFullscreen', 'onPlayed', 'onReady', 'onWidthChange', 'pause', 'play', 'playType', 'requestFullscreen', 'reset', 'seek', 'seekOnPlay', 'selectedAsset', 'selectableAssets', 'selectableQualities', 'selectedQuality', 'sequentialBufferedRange', 'setAttributes', 'setCurrentTime', 'setPlaybackRate', 'setTrim', 'setVolume', 'showFirstFrame', 'stopStreaming', 'timeBeforeEndOfBuffer', 'totalBuffered', 'totalPlayed', 'trigger', 'unbind', 'unbindNamed', 'unbindAllInNamespace', 'unmute', 'videoElem'],
        a = function(e, t, n) {
            for (var a, r = 0; r < e.length; r++) a = e[r], t[a] || function(e) {
                t[e] = function() {
                    var t = n.call(this);
                    return t ? t[e].apply(t, arguments) : null
                }
            }(a)
        },
        r = function(e, t) {
            a(i, e, t)
        };
}, function(e, t, n) {
    'use strict';
    n.r(t);
    n.d(t, 'send', function() {
        return h
    });
    n.d(t, 'msend', function() {
        return y
    });
    n.d(t, 'count', function() {
        return f
    });
    n.d(t, 'sample', function() {
        return _
    });
    var i = n(2),
        a = n(5),
        r = n(11),
        l = n(6),
        s = n(19),
        d = n(15),
        p = n(18),
        u = n(28),
        c, m = i['default'];
    null == m._metricsCache && (m._metricsCache = {});
    var g = m._metricsCache,
        h = function(e, t, n) {
            var i = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : {};
            try {
                null == g.toMput && (g.toMput = []), null == g.requestId && (g.requestId = 0);
                var d = l.merge({
                        type: e,
                        key: t,
                        value: null == n ? null : n,
                        request_id: g.requestId
                    }, i),
                    p = JSON.stringify(d);
                r.wlog.debug('send metrics', p), g.toMput.push(p), Object(a.doTimeout)('metrics.debounce', function() {
                    Object(s.pageLoaded)(function() {
                        y.apply(c, g.toMput), g.toMput = [], g.requestId += 1
                    })
                }, 500)
            } catch (t) {
                r.wlog.error(t)
            }
        },
        y = function() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            if (!m.isVisitorTrackingEnabled || m.isVisitorTrackingEnabled()) {
                var i = Object(d.proto)() + '//' + Object(p.metricsHost)() + '/mput?topic=metrics';
                return Object(u.ajaxPost)(i, {
                    data: t.join('\n')
                })
            }
        },
        f = function(e) {
            var t = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : 1,
                n = arguments[2];
            return h('count', e, t, n)
        },
        _ = function(e, t, n) {
            return h('sample', e, t, n)
        };
}, function(e, t, n) {
    'use strict';
    n.r(t);
    n.d(t, 'controlDimensionsForVideo', function() {
        return p
    });
    n.d(t, 'scalingOptionsFromVideo', function() {
        return u
    });
    n.d(t, 'controlDimensions', function() {
        return c
    });
    n.d(t, 'bigPlayButtonDimensions', function() {
        return m
    });
    n.d(t, 'fontSizeMultiplier', function() {
        return g
    });
    n.d(t, 'allowBigControls', function() {
        return h
    });
    n.d(t, 'maxMultiplierForVideo', function() {
        return y
    });
    n.d(t, 'minMultiplierForVideo', function() {
        return f
    });
    n.d(t, 'getZoomMultiplier', function() {
        return _
    });
    n.d(t, 'getDeviceMultiplier', function() {
        return b
    });
    n.d(t, 'controlMultiplierForVideo', function() {
        return v
    });
    n.d(t, 'controlMultiplier', function() {
        return A
    });
    n.d(t, 'menuMultiplier', function() {
        return w
    });
    n.d(t, 'fitControl', function() {
        return k
    });
    n.d(t, 'tapIcon', function() {
        return E
    });
    n.d(t, 'controlMultiplierBasedOnVideo', function() {
        return P
    });
    var i = n(19),
        a = n(5),
        r = n(12),
        l = n(6),
        s = function() {
            function e(e, t) {
                var n, i = [],
                    a = !0,
                    r = !1;
                try {
                    for (var l, s = e[Symbol.iterator](); !(a = (l = s.next()).done) && (i.push(l.value), !(t && i.length === t)); a = !0);
                } catch (e) {
                    r = !0, n = e
                } finally {
                    try {
                        !a && s['return'] && s['return']()
                    } finally {
                        if (r) throw n
                    }
                }
                return i
            }
            return function(t, n) {
                if (Array.isArray(t)) return t;
                if (Symbol.iterator in Object(t)) return e(t, n);
                throw new TypeError('Invalid attempt to destructure non-iterable instance')
            }
        }(),
        d = Object(r.cachedDetect)(),
        p = function(e) {
            var t = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {},
                n = arguments[2],
                i = arguments[3];
            return c(u(e, t), n, i)
        },
        u = function(e, t) {
            return l.merge({
                videoWidth: e.videoWidth(),
                videoHeight: e.videoHeight(),
                isInFullscreen: e.inFullscreen(),
                controlScaling: e.controlScaling()
            }, t)
        },
        c = function() {
            var e = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : {},
                t = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : 40,
                n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : 34;
            e = l.merge({
                videoWidth: 640,
                videoHeight: 360,
                isInFullscreen: !1,
                baseWidth: null == t ? 40 : t,
                baseHeight: null == n ? 34 : n
            }, e);
            var i = A(e);
            return {
                width: i * e.baseWidth,
                height: i * e.baseHeight
            }
        },
        m = function(e, t, n) {
            return c(e, t, n)
        },
        g = function(e) {
            return A(e)
        },
        h = function() {
            var e = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : {},
                t = e.screenHeight || window.screen.height,
                n = e.screenWidth || window.screen.width;
            return 'auto' != e.controlScaling || d.iphone || d.android || n < t
        },
        y = function(e) {
            return 'auto' == e.controlScaling ? h(e) ? 3.5 : 1.4 : e.controlScaling
        },
        f = function(e) {
            return 'auto' == e.controlScaling ? h(e) ? 1 : 0.75 : e.controlScaling
        },
        _ = function(e) {
            var t = Math.max;
            if (!e.isInFullscreen) return 1;
            var n = t(1, window.innerWidth / t(screen.width, screen.height));
            return n
        },
        b = function(e) {
            return h(e) ? 1.4 : 1
        },
        v = function(e, t) {
            return A(u(e, t))
        },
        A = function(e) {
            var t = Math.max;
            if ('auto' != e.controlScaling) return e.controlScaling;
            var n = e.videoWidth,
                i = e.videoHeight,
                a = e.isInFullscreen,
                r = _(e),
                l = t(n, i);
            if (960 < l) {
                var s = l / 960 * b(e);
                return Math.min(y(e) * r, s * r)
            }
            if (640 > l) {
                var d = l / 640 * b(e);
                return t(f(e) * r, d * r)
            }
            return 1 * b(e)
        },
        w = function(e) {
            return Math.max(0.75, A(e))
        },
        k = function(e) {
            var t = e,
                n = t.controlId,
                a = t.video,
                r = t.controlElem;
            e = l.merge({
                videoWidth: a.videoWidth(),
                videoHeight: a.videoHeight(),
                controlScaling: a.controlScaling(),
                isInFullscreen: a.inFullscreen()
            }, e);
            var s = c(e),
                d = s.width,
                p = s.height;
            return Object(i.elemStyle)(r, {
                height: p + 'px',
                width: d + 'px'
            }), E(a.uuid + '.' + n, r), {
                width: d,
                height: p
            }
        },
        E = function(e, t) {
            for (var n = t.getElementsByTagName('svg'), r = 0; r < n.length; r++)(function(t) {
                Object(a.doTimeout)(e + '.tap_icon', function() {
                    Object(i.elemStyle)(t, {
                        position: 'relative'
                    }), Object(a.doTimeout)('#{timeoutPrefix}.tap_icon', function() {
                        Object(i.elemStyle)(t, {
                            position: ''
                        })
                    }, 30)
                }, 30)
            })(n[r])
        },
        C = function() {
            var e = document.querySelector('meta[name=viewport]'),
                t = e && e.getAttribute('content'),
                n = {};
            if (t) {
                var i = t.split(/[\s,]+/);
                i.forEach(function(e) {
                    var t = e.split('=');
                    2 === t.length && (n[t[0]] = l.cast(t[1]))
                })
            }
            return n
        },
        S = function() {
            var e = d.iphone || d.ipad || d.android;
            if (!e) return [640, 960];
            var t, n = C();
            if (n.width) {
                t = 'number' == typeof n.width ? 0 + n.width : screen.width || window.innerWidth;
                var i = Math.max(n['minimum-scale'] || 0, Math.min(n['maximum-scale'] || 10, n['initial-scale'] || 1));
                1 > i && (t /= i)
            } else t = window.innerWidth;
            return [t, 2 * t / 3]
        },
        P = function(e, t) {
            var n = e.videoWidth(),
                i = t || S(),
                a = s(i, 2),
                r = a[0],
                l = a[1];
            return n < r ? n / r : n > l ? n / l : 1
        };
}, function(e, t, n) {
    'use strict';
    n.r(t);
    n.d(t, 'EventLoop', function() {
        return s
    });
    n.d(t, 'globalEventLoop', function() {
        return p
    });
    var i = n(19),
        a = n(11),
        r = n(2),
        l = a.wlog.getPrefixedFunctions('event_loop'),
        s = function() {
            var e = this,
                t = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : {};
            this._timeoutId = null, this._latency = null == t.latency ? 100 : t.latency, this._blurLatency = null == t.blurLatency ? 2e3 : t.blurLatency, this._functions = {}, this._paused = {}, Object(i.elemBind)(window, 'blur', function() {
                return e.blur()
            }), Object(i.elemBind)(window, 'focus', function() {
                return e.focus()
            }), this.start()
        },
        d = s.prototype;
    d.start = function() {
        var e = this;
        clearTimeout(this._timeoutId), this._loopFn = this._loopFn || function() {
            e.runFunctions(), e._timeoutId = setTimeout(e._loopFn, e._latency)
        }, this._loopFn()
    }, d.resync = function() {
        this.start()
    }, d.resyncNextTick = function() {
        var e = this;
        setTimeout(function() {
            e.resync()
        }, 0)
    }, d.stop = function() {
        clearTimeout(this._timeoutId)
    }, d.clear = function() {
        this._functions = {}
    }, d.runFunctions = function() {
        this._pausedDirty && this.updatePaused();
        var e = [];
        for (var t in this._functions) {
            var n = this._functions[t],
                a = new Date().getTime(),
                r = a - n.lastRanAt;
            if (!n.paused && r >= n.interval) {
                n.lastRanAt = a;
                try {
                    var s = n.fn();
                    s === this.remove && e.push(t)
                } catch (t) {
                    l.error(t)
                }
            }
        }
        for (var d = 0; d < e.length; d++) this.remove(e[d])
    }, d.add = function(e, t, n) {
        var i = new Date().getTime();
        this._functions[e] = {
            addedAt: i,
            lastRanAt: -1,
            interval: t,
            fn: n
        };
        var a = n();
        this._functions[e] && (this._functions[e].lastRanAt = new Date().getTime()), this._functions[e] && a === this.remove ? delete this._functions[e] : this._pausedDirty = !0
    }, d.remove = function(e) {
        var t = this;
        this.forEachMatchingKey(e, function(e) {
            delete t._functions[e]
        })
    }, d.forEachMatchingKey = function(e, t) {
        for (var n in this._functions) {
            var i = this._functions[n];
            this.key1IncludesKey2(e, n) && t(n, i)
        }
    }, d.latency = function(e) {
        return null == e ? this._latency : void(this._latency = e)
    }, d.interval = function(e, t) {
        return null == t ? this._functions[e].interval : void(null == this._functions[e] ? l.notice('setting interval of ', e, 'to', t, 'failed because', e, 'is not defined') : this._functions[e].interval = t)
    }, d.pause = function(e) {
        this._paused[e] = !0, this._pausedDirty = !0
    }, d.unpause = function(e) {
        this._paused[e] = !1, this._pausedDirty = !0
    }, d.isPaused = function(e) {
        for (var t in this.paused) {
            var n = this._paused[t];
            if (n && this.key1IncludesKey2(t, e)) return !0
        }
        return !1
    }, d.updatePaused = function() {
        for (var e in this._functions) {
            var t = this._functions[e];
            t.paused = this.isPaused(e)
        }
        this._pausedDirty = !1
    }, d.key1IncludesKey2 = function(e, t) {
        return 'function' == typeof t.indexOf && 0 === t.indexOf(e) && (t.length === e.length || '.' === t.charAt(e.length))
    }, d.blur = function() {
        this._blurred || (this._blurred = !0, this._savedLatency = this._latency, this._latency = this._blurLatency)
    }, d.focus = function() {
        this._blurred && (this._blurred = !1, this._latency = this._savedLatency, this.resync())
    }, null == r['default'].eventLoop && (r['default'].eventLoop = new s({
        latency: 100,
        blurLatency: 100
    }));
    var p = r['default'].eventLoop;
}, function(e, t, n) {
    'use strict';
    n.r(t);
    n.d(t, 'bind', function() {
        return l
    });
    n.d(t, 'unbind', function() {
        return s
    });
    n.d(t, 'rebind', function() {
        return d
    });
    n.d(t, 'trigger', function() {
        return p
    });
    n.d(t, 'once', function() {
        return c
    });
    n.d(t, 'initNamespace', function() {
        return m
    });
    n.d(t, 'bindNamed', function() {
        return y
    });
    n.d(t, 'unbindNamed', function() {
        return f
    });
    n.d(t, 'unbindAllInNamespace', function() {
        return _
    });
    n.d(t, 'bindify', function() {
        return v
    });
    n.d(t, 'Bindings', function() {
        return A
    });
    var i = n(11),
        a = i.wlog.getPrefixedFunctions('bindify'),
        r = Array.prototype.slice,
        l = function(e, t) {
            var n = this;
            return n._bindings || (n._bindings = {}), n._bindings[e] || (n._bindings[e] = []), n._bindings[e].push(t),
                function() {
                    n.unbind(e, t)
                }
        },
        s = function(e, t) {
            if (!this._bindings) return this;
            if (!this._bindings[e]) return this;
            for (var n, a = [], r = 0; r < this._bindings[e].length; r++) n = this._bindings[e][r], n !== t && a.push(n);
            this._bindings[e] = a
        },
        d = function(e, t) {
            return this.unbind(e, t), this.bind(e, t), {
                event: e,
                fn: t
            }
        },
        p = function(e) {
            for (var t = arguments.length, n = Array(1 < t ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
            return this._bindings && null != this._bindings.all && u.apply(this, ['all', e].concat(n)), u.apply(this, [e].concat(n))
        },
        u = function(e) {
            if (!this._bindings) return this;
            if (!this._bindings[e]) return this;
            for (var t, n = r.call(arguments, 1), l = void 0, s = this._bindings[e], d = 0; d < s.length; d++) {
                t = s[d];
                try {
                    var i = t.apply(this, n);
                    i === this.unbind && (null == l && (l = []), l.push({
                        event: e,
                        fn: t
                    }))
                } catch (t) {
                    a.error(t)
                }
            }
            if (l)
                for (var p, u = 0; u < l.length; u++) p = l[u], this.unbind(p.event, p.fn);
            return this
        },
        c = function(e, t) {
            return l(e, function() {
                return t.apply(this, r.call(arguments, 0)), s
            })
        },
        m = function(e, t) {
            null == e._namedBindings && (e._namedBindings = {}), null == e._namedBindings[t] && (e._namedBindings[t] = {})
        },
        g = function(e, t, n) {
            return m(e, t), e._namedBindings[t][n]
        },
        h = function(e, t, n, i, a) {
            m(e, t), e._namedBindings[t][n] = {
                event: i,
                fn: a
            }
        },
        y = function(e, t, n, i) {
            return a.debug('bindNamed', e, t, n), this.unbindNamed(e, t), h(this, e, t, n, i), this.bind(n, i),
                function() {
                    this.unbindNamed(e, t)
                }
        },
        f = function(e, t) {
            a.debug('unbindNamed', e, t), m(this, e);
            var n = g(this, e, t);
            if (n) {
                var i = n.event,
                    r = n.fn;
                this.unbind(i, r)
            }
            var l = this._namedBindings;
            return delete l[e][t], b(l[e]) && delete l[e], this
        },
        _ = function(e) {
            a.debug('unbindAllInNamespace', e);
            var t = this._namedBindings && this._namedBindings[e];
            if (null == t) return this;
            for (var n in t) t.hasOwnProperty(n) && this.unbindNamed(e, n)
        },
        b = function(e) {
            for (var t in e)
                if (e.hasOwnProperty(t)) return !1;
            return !0
        },
        v = function(e) {
            return e.bind = l, e.unbind = s, e.on = l, e.off = s, e.rebind = d, e.trigger = p, e.bindNamed = y, e.unbindNamed = f, e.unbindAllInNamespace = _, e
        },
        A = function() {};
    v(A.prototype);
}, function(e, t, n) {
    'use strict';
    n.r(t);
    n.d(t, 'defineLanguage', function() {
        return s
    });
    n.d(t, 'getLanguage', function() {
        return d
    });
    n.d(t, 'defineTranslations', function() {
        return p
    });
    n.d(t, 'getTranslation', function() {
        return h
    });
    var i = n(2),
        a = n(6),
        r = i['default'].languages = i['default'].languages || {},
        l = i['default'].translations = i['default'].translations || {},
        s = function(e, t, n) {
            r[e] = {
                code: e,
                text: g(t)
            }, n && p(e, n)
        },
        d = function(e) {
            return r[e]
        },
        p = function(e, t) {
            if (null == r[e]) throw new Error('Must define a language with code ' + e + ' before defining its translations.');
            var n = l[e];
            n ? Object(a.merge)(n, t) : l[e] = Object(a.clone)(t)
        },
        u, c = function(e) {
            return null == e ? '?' : e
        },
        m = i['default'].cachedDecodings = i['default'].cachedDecodings || {},
        g = function(e) {
            return (u || (u = document.createElement('textarea')), null != m[e]) ? m[e] : (u.innerHTML = e, m[e] = u.value, u.value)
        },
        h = function(e, t) {
            var n;
            return n = l[e] && l[e][t] ? l[e][t] : l['en-US'][t], g(c(n))
        };
    s('en-US', 'English'), p('en-US', {
        SETTINGS_PLAYBACK_RATE_TITLE: 'Speed',
        SETTINGS_QUALITY_TITLE: 'Quality',
        SETTINGS_QUALITY_AUTO: 'Auto',
        CONTEXT_MENU_LOGGED_IN_TO_WISTIA: 'Logged In to Wistia',
        CONTEXT_MENU_ABOUT_WISTIA: 'About Wistia',
        CONTEXT_MENU_REPORT_A_PROBLEM: 'Report a Problem',
        CONTEXT_MENU_OPEN_VIDEO_IN_WISTIA: 'Open video in Wistia',
        CONTEXT_MENU_VIEW_STATS_IN_WISTIA: 'View stats in Wistia',
        CONTEXT_MENU_COPY_LINK_AND_THUMBNAIL: 'Copy link and thumbnail',
        CONTEXT_MENU_BROADCAST_TO_WISTIA_TRON: 'Broadcast to WistiaTron!',
        CONTEXT_MENU_COPIED: 'Copied!',
        PLAY_BUTTON_TITLE_WHEN_NOT_PLAYING: 'Play',
        PLAY_BUTTON_TITLE_WHEN_PLAYING: 'Pause',
        VOLUME_TITLE_WHEN_MUTED: 'Unmute',
        VOLUME_TITLE_WHEN_UNMUTED: 'Mute',
        FULLSCREEN_TITLE_WHEN_IN_FULLSCREEN: 'Unfullscreen',
        FULLSCREEN_TITLE_WHEN_NOT_IN_FULLSCREEN: 'Fullscreen',
        CHAPTERS_OPEN_CHAPTERS: 'Open Chapters',
        CHAPTERS_CLOSE_CHAPTERS: 'Close Chapters',
        THUMBNAIL_VIDEO_THUMBNAIL: 'Video Thumbnail',
        LAYOUT_TITLE: 'Video',
        SHARE_CONTROL_OPEN: 'Open sharing menu',
        SHARE_CONTROL_CLOSE: 'Close sharing menu',
        STATUS_BAR_EMBED_CODE_COPIED: 'Embed Code is now copied to your clipboard!',
        CLICK_FOR_SOUND_MOBILE_TEXT: 'Tap for sound',
        CLICK_FOR_SOUND_DESKTOP_TEXT: 'Click for sound',
        CTA_SKIP: 'Skip',
        CTA_REWATCH: 'Rewatch',
        CAPTIONS_SHOW_MENU: 'Show captions menu',
        CAPTIONS_HIDE_MENU: 'Hide captions menu',
        CAPTIONS_OFF: 'Off',
        SUBTITLES_READ_TRANSCRIPT: 'Search Video'
    }), i['default'].defineLanguage = s, i['default'].getLanguage = d, i['default'].defineTranslations = p, i['default'].getTranslation = h;
}, function(e, t, n) {
    'use strict';
    n.r(t);
    n.d(t, 'h', function() {
        return i
    });
    n.d(t, 'createElement', function() {
        return i
    });
    n.d(t, 'cloneElement', function() {
        return l
    });
    n.d(t, 'Component', function() {
        return F
    });
    n.d(t, 'render', function() {
        return O
    });
    n.d(t, 'rerender', function() {
        return s
    });
    n.d(t, 'options', function() {
        return L
    });
    n.d(t, 'components', function() {
        return Q
    });
    var M = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(e) {
        return typeof e
    } : function(e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
    };

    function a() {}
    var L = {},
        N = [],
        W = [];

    function i(e, t) {
        var n, r, l, s, i = W;
        for (s = arguments.length; 2 < s--;) N.push(arguments[s]);
        for (t && null != t.children && (!N.length && N.push(t.children), delete t.children); N.length;)
            if ((r = N.pop()) && void 0 !== r.pop)
                for (s = r.length; s--;) N.push(r[s]);
            else 'boolean' == typeof r && (r = null), (l = 'function' != typeof e) && (null == r ? r = '' : 'number' == typeof r ? r += '' : 'string' != typeof r && (l = !1)), l && n ? i[i.length - 1] += r : i === W ? i = [r] : i.push(r), n = l;
        var d = new a;
        return d.nodeName = e, d.children = i, d.attributes = null == t ? void 0 : t, d.key = null == t ? void 0 : t.key, void 0 !== L.vnode && L.vnode(d), d
    }

    function r(e, t) {
        for (var n in t) e[n] = t[n];
        return e
    }
    var R = 'function' == typeof Promise ? Promise.resolve().then.bind(Promise.resolve()) : setTimeout;

    function l(e, t) {
        return i(e.nodeName, r(r({}, e.attributes), t), 2 < arguments.length ? [].slice.call(arguments, 2) : e.children)
    }
    var H = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,
        j = [];

    function d(e) {
        !e._dirty && (e._dirty = !0) && 1 == j.push(e) && (L.debounceRendering || R)(s)
    }

    function s() {
        var e, t = j;
        for (j = []; e = t.pop();) e._dirty && x(e)
    }

    function p(e, t, n) {
        return 'string' == typeof t || 'number' == typeof t ? void 0 !== e.splitText : 'string' == typeof t.nodeName ? !e._componentConstructor && u(e, t.nodeName) : n || e._componentConstructor === t.nodeName
    }

    function u(e, t) {
        return e.normalizedNodeName === t || e.nodeName.toLowerCase() === t.toLowerCase()
    }

    function m(e) {
        var t = r({}, e.attributes);
        t.children = e.children;
        var n = e.nodeName.defaultProps;
        if (n !== void 0)
            for (var a in n) void 0 === t[a] && (t[a] = n[a]);
        return t
    }

    function c(e, t) {
        var n = t ? document.createElementNS('http://www.w3.org/2000/svg', e) : document.createElement(e);
        return n.normalizedNodeName = e, n
    }

    function g(e) {
        var t = e.parentNode;
        t && t.removeChild(e)
    }

    function y(e, t, n, a, r) {
        if ('className' === t && (t = 'class'), 'key' === t);
        else if ('ref' === t) n && n(null), a && a(e);
        else if ('class' === t && !r) e.className = a || '';
        else if ('style' === t) {
            if (a && 'string' != typeof a && 'string' != typeof n || (e.style.cssText = a || ''), a && 'object' === ('undefined' == typeof a ? 'undefined' : M(a))) {
                if ('string' != typeof n)
                    for (var l in n) l in a || (e.style[l] = '');
                for (var l in a) e.style[l] = 'number' == typeof a[l] && !1 === H.test(l) ? a[l] + 'px' : a[l]
            }
        } else if ('dangerouslySetInnerHTML' === t) a && (e.innerHTML = a.__html || '');
        else if ('o' == t[0] && 'n' == t[1]) {
            var i = t !== (t = t.replace(/Capture$/, ''));
            t = t.toLowerCase().substring(2), a ? !n && e.addEventListener(t, _, i) : e.removeEventListener(t, _, i), (e._listeners || (e._listeners = {}))[t] = a
        } else if ('list' !== t && 'type' !== t && !r && t in e) f(e, t, null == a ? '' : a), (null == a || !1 === a) && e.removeAttribute(t);
        else {
            var s = r && t !== (t = t.replace(/^xlink\:?/, ''));
            null == a || !1 === a ? s ? e.removeAttributeNS('http://www.w3.org/1999/xlink', t.toLowerCase()) : e.removeAttribute(t) : 'function' != typeof a && (s ? e.setAttributeNS('http://www.w3.org/1999/xlink', t.toLowerCase(), a) : e.setAttribute(t, a))
        }
    }

    function f(e, t, n) {
        try {
            e[t] = n
        } catch (t) {}
    }

    function _(t) {
        return this._listeners[t.type](L.event && L.event(t) || t)
    }
    var V = [],
        U = 0,
        z = !1,
        G = !1;

    function b() {
        for (var e; e = V.pop();) L.afterMount && L.afterMount(e), e.componentDidMount && e.componentDidMount()
    }

    function v(e, t, n, i, a, r) {
        U++ || (z = null != a && void 0 !== a.ownerSVGElement, G = null != e && !('__preactattr_' in e));
        var l = A(e, t, n, i, r);
        return a && l.parentNode !== a && a.appendChild(l), --U || (G = !1, !r && b()), l
    }

    function A(e, t, n, r, l) {
        var s = e,
            d = z;
        if ((null == t || 'boolean' == typeof t) && (t = ''), 'string' == typeof t || 'number' == typeof t) return e && void 0 !== e.splitText && e.parentNode && (!e._component || l) ? e.nodeValue != t && (e.nodeValue = t) : (s = document.createTextNode(t), e && (e.parentNode && e.parentNode.replaceChild(s, e), k(e, !0))), s.__preactattr_ = !0, s;
        var p = t.nodeName;
        if ('function' == typeof p) return D(e, t, n, r);
        if (z = 'svg' === p || 'foreignObject' !== p && z, p += '', (!e || !u(e, p)) && (s = c(p, z), e)) {
            for (; e.firstChild;) s.appendChild(e.firstChild);
            e.parentNode && e.parentNode.replaceChild(s, e), k(e, !0)
        }
        var m = s.firstChild,
            g = s.__preactattr_,
            h = t.children;
        if (null == g) {
            g = s.__preactattr_ = {};
            for (var y = s.attributes, a = y.length; a--;) g[y[a].name] = y[a].value
        }
        return !G && h && 1 === h.length && 'string' == typeof h[0] && null != m && void 0 !== m.splitText && null == m.nextSibling ? m.nodeValue != h[0] && (m.nodeValue = h[0]) : (h && h.length || null != m) && w(s, h, n, r, G || null != g.dangerouslySetInnerHTML), C(s, t.attributes, g), z = d, s
    }

    function w(e, t, n, a, r) {
        var l, s, d, u, c, m = e.childNodes,
            h = [],
            y = {},
            f = 0,
            _ = 0,
            b = m.length,
            v = 0,
            w = t ? t.length : 0;
        if (0 !== b)
            for (var E = 0; E < b; E++) {
                var i = m[E],
                    C = i.__preactattr_,
                    S = w && C ? i._component ? i._component.__key : C.key : null;
                null == S ? (C || (void 0 === i.splitText ? r : !r || i.nodeValue.trim())) && (h[v++] = i) : (f++, y[S] = i)
            }
        if (0 !== w)
            for (var E = 0; E < w; E++) {
                u = t[E], c = null;
                var S = u.key;
                if (null != S) f && void 0 !== y[S] && (c = y[S], y[S] = void 0, f--);
                else if (!c && _ < v)
                    for (l = _; l < v; l++)
                        if (void 0 !== h[l] && p(s = h[l], u, r)) {
                            c = s, h[l] = void 0, l === v - 1 && v--, l === _ && _++;
                            break
                        }
                c = A(c, u, n, a), d = m[E], c && c !== e && c !== d && (null == d ? e.appendChild(c) : c === d.nextSibling ? g(d) : e.insertBefore(c, d))
            }
        if (f)
            for (var E in y) void 0 !== y[E] && k(y[E], !1);
        for (; _ <= v;) void 0 !== (c = h[v--]) && k(c, !1)
    }

    function k(e, t) {
        var n = e._component;
        n ? B(n) : (null != e.__preactattr_ && e.__preactattr_.ref && e.__preactattr_.ref(null), (!1 === t || null == e.__preactattr_) && g(e), E(e))
    }

    function E(e) {
        for (e = e.lastChild; e;) {
            var t = e.previousSibling;
            k(e, !0), e = t
        }
    }

    function C(e, t, n) {
        for (var i in n) t && null != t[i] || null == n[i] || y(e, i, n[i], n[i] = void 0, z);
        for (i in t) 'children' === i || 'innerHTML' === i || i in n && t[i] === ('value' === i || 'checked' === i ? e[i] : n[i]) || y(e, i, n[i], n[i] = t[i], z)
    }
    var Q = {};

    function S(e) {
        var t = e.constructor.name;
        (Q[t] || (Q[t] = [])).push(e)
    }

    function P(e, t, n) {
        var a, r = Q[e.name];
        if (e.prototype && e.prototype.render ? (a = new e(t, n), F.call(a, t, n)) : (a = new F(t, n), a.constructor = e, a.render = T), r)
            for (var l = r.length; l--;)
                if (r[l].constructor === e) {
                    a.nextBase = r[l].nextBase, r.splice(l, 1);
                    break
                }
        return a
    }

    function T(e, t, n) {
        return this.constructor(e, n)
    }

    function I(e, t, n, i, a) {
        e._disable || (e._disable = !0, (e.__ref = t.ref) && delete t.ref, (e.__key = t.key) && delete t.key, !e.base || a ? e.componentWillMount && e.componentWillMount() : e.componentWillReceiveProps && e.componentWillReceiveProps(t, i), i && i !== e.context && (!e.prevContext && (e.prevContext = e.context), e.context = i), !e.prevProps && (e.prevProps = e.props), e.props = t, e._disable = !1, 0 !== n && (1 !== n && !1 === L.syncComponentUpdates && e.base ? d(e) : x(e, 1, a)), e.__ref && e.__ref(e))
    }

    function x(e, n, i, a) {
        if (!e._disable) {
            var l, s, d, p = e.props,
                u = e.state,
                c = e.context,
                g = e.prevProps || p,
                h = e.prevState || u,
                y = e.prevContext || c,
                f = e.base,
                _ = e.nextBase,
                A = f || _,
                w = e._component,
                E = !1;
            if (f && (e.props = g, e.state = h, e.context = y, 2 !== n && e.shouldComponentUpdate && !1 === e.shouldComponentUpdate(p, u, c) ? E = !0 : e.componentWillUpdate && e.componentWillUpdate(p, u, c), e.props = p, e.state = u, e.context = c), e.prevProps = e.prevState = e.prevContext = e.nextBase = null, e._dirty = !1, !E) {
                l = e.render(p, u, c), e.getChildContext && (c = r(r({}, c), e.getChildContext()));
                var C, S, T = l && l.nodeName;
                if ('function' == typeof T) {
                    var D = m(l);
                    s = w, s && s.constructor === T && D.key == s.__key ? I(s, D, 1, c, !1) : (C = s, e._component = s = P(T, D, c), s.nextBase = s.nextBase || _, s._parentComponent = e, I(s, D, 0, c, !1), x(s, 1, i, !0)), S = s.base
                } else d = A, C = w, C && (d = e._component = null), (A || 1 === n) && (d && (d._component = null), S = v(d, l, c, i || !f, A && A.parentNode, !0));
                if (A && S !== A && s !== w) {
                    var F = A.parentNode;
                    F && S !== F && (F.replaceChild(S, A), !C && (A._component = null, k(A, !1)))
                }
                if (C && B(C), e.base = S, S && !a) {
                    for (var O = e, M = e; M = M._parentComponent;)(O = M).base = S;
                    S._component = O, S._componentConstructor = O.constructor
                }
            }
            if (!f || i ? V.unshift(e) : !E && (e.componentDidUpdate && e.componentDidUpdate(g, h, y), L.afterUpdate && L.afterUpdate(e)), null != e._renderCallbacks)
                for (; e._renderCallbacks.length;) e._renderCallbacks.pop().call(e);
            U || a || b()
        }
    }

    function D(e, t, n, i) {
        for (var a = e && e._component, r = a, l = e, s = a && e._componentConstructor === t.nodeName, d = s, p = m(t); a && !d && (a = a._parentComponent);) d = a.constructor === t.nodeName;
        return a && d && (!i || a._component) ? (I(a, p, 3, n, i), e = a.base) : (r && !s && (B(r), e = l = null), a = P(t.nodeName, p, n), e && !a.nextBase && (a.nextBase = e, l = null), I(a, p, 1, n, i), e = a.base, l && e !== l && (l._component = null, k(l, !1))), e
    }

    function B(e) {
        L.beforeUnmount && L.beforeUnmount(e);
        var t = e.base;
        e._disable = !0, e.componentWillUnmount && e.componentWillUnmount(), e.base = null;
        var n = e._component;
        n ? B(n) : t && (t.__preactattr_ && t.__preactattr_.ref && t.__preactattr_.ref(null), e.nextBase = t, g(t), S(e), E(t)), e.__ref && e.__ref(null)
    }

    function F(e, t) {
        this._dirty = !0, this.context = t, this.props = e, this.state = this.state || {}
    }
    r(F.prototype, {
        setState: function(e, t) {
            var n = this.state;
            this.prevState || (this.prevState = r({}, n)), r(n, 'function' == typeof e ? e(n, this.props) : e), t && (this._renderCallbacks = this._renderCallbacks || []).push(t), d(this)
        },
        forceUpdate: function(e) {
            e && (this._renderCallbacks = this._renderCallbacks || []).push(e), x(this, 2)
        },
        render: function() {}
    });

    function O(e, t, n) {
        return v(n, e, {}, !1, t, !1)
    }
    t['default'] = {
        h: i,
        createElement: i,
        cloneElement: l,
        Component: F,
        render: O,
        rerender: s,
        options: L,
        components: Q
    }
}, function(e) {
    var t;
    t = function() {
        function e(t) {
            var n, i, a, r, l, s, d, p, u;
            if (p = t.seedRange, d = t.seedFunction, u = t.seedStart, a = null == (r = t.outputStart) ? 0 : r, i = null == (l = t.outputEnd) ? 1 : l, n = null == (s = t.easing) ? e.linear : s, null == p) throw new Error('Must provide seedRange argument');
            if (null != d && 'function' != typeof d) throw new Error('Given seed is not a function');
            if ('function' != typeof n) throw new Error('Invalid easing function given: ' + this.easing);
            this._seedRange = p, this._seedFunction = d || function() {
                return new Date().getTime()
            }, this._outputStart = a, this._outputEnd = i, this._easing = n, this._seedStart = ('function' == typeof u ? u() : void 0) || this.seed()
        }
        var t = Math.max,
            n = Math.min;
        return e.prototype.seed = function() {
            return this.seedFunction()()
        }, e.prototype.seedStart = function() {
            return this._seedStart
        }, e.prototype.seedRange = function() {
            return this._valOrFn(this._seedRange)
        }, e.prototype.seedFunction = function() {
            return this._seedFunction
        }, e.prototype.outputStart = function() {
            return this._valOrFn(this._outputStart)
        }, e.prototype.outputEnd = function() {
            return this._valOrFn(this._outputEnd)
        }, e.prototype.easing = function() {
            return this._valOrFn(this._easing)
        }, e.prototype.value = function() {
            return this._easing.apply(this, this.easingArgs())
        }, e.prototype.atEnd = function() {
            return 1 === this.ratio()
        }, e.prototype.atStart = function() {
            return 0 === this.ratio()
        }, e.prototype.easingArgs = function() {
            return [this.c(), this.t(), this.d(), this.b()]
        }, e.prototype.seedDelta = function() {
            return 0 < this.seedRange() ? n(this.seedRange(), this.seed() - this.seedStart()) : 0 > this.seedRange() ? t(this.seedRange(), this.seed() - this.seedStart()) : 0
        }, e.prototype.ratio = function() {
            var e, i;
            return i = this.seedRange(), 0 === i ? 1 : e = t(0, n(1, this.seedDelta() / i))
        }, e.prototype.c = function() {
            return this.outputEnd() - this.outputStart()
        }, e.prototype.t = function() {
            return this.seedDelta()
        }, e.prototype.d = function() {
            return this.seedRange()
        }, e.prototype.b = function() {
            return this.outputStart()
        }, e.prototype._valOrFn = function(e) {
            return 'function' == typeof e ? e() : e
        }, e.linear = function(e, n, t, i) {
            return e * n / (t || 1) + i
        }, e.easeInOut = function(e, n, t, i) {
            return n /= (t || 1) / 2, 1 > n ? e / 2 * n * n + i : (n -= 1, -e / 2 * (n * (n - 2) - 1) + i)
        }, e
    }(), e.exports = t;
}, function(e, t, n) {
    'use strict';
    n.r(t);
    var i = n(2),
        a = n(23),
        r = n.n(a),
        l = n(22),
        s = n(18);
    if (!i['default'].define) {
        var d = i['default'].modulePromises = {},
            p = i['default'].moduleDeps = {},
            u = i['default'].moduleResolveQueues = {},
            c = function(e, t) {
                null == u[e] && (u[e] = []), u[e].push(t)
            },
            m = function(e) {
                var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 1.2e5;
                if (null != d[e]) return d[e];
                var n = Object(s.eV1Protocol)() + '//' + Object(s.eV1Host)() + '/assets/external/' + e;
                return d[e] = new r.a(function(i, a) {
                    c(e, i), Object(l['default'])(n, t).catch(function(t) {
                        setTimeout(function() {
                            throw t
                        }, 1), a(t)
                    })
                }), d[e]
            },
            g = function(e) {
                if (null != p[e]) return p[e];
                throw new Error('Cannot synchronously require dep "' + e + '" because it is not defined.')
            };
        i['default'].define = function(e, t) {
            p[e] = t, null == d[e] && (d[e] = r.a.resolve(t)), u[e] && (u[e].map(function(e) {
                return e(t)
            }), delete u[e])
        }, i['default'].asyncDefine = function(e, t) {
            return d[e] = t.then(function(t) {
                return i['default'].define(e, t), t
            }), d[e]
        }, i['default'].asyncRequire = function(e, t) {
            return e instanceof Array ? r.a.all(e.map(function(e) {
                return m(e, t)
            })) : m(e, t)
        }, i['default'].syncRequire = function(e) {
            return e instanceof Array ? depPath.map(function(e) {
                return g(e)
            }) : g(e)
        }
    }
}, function(e, t, n) {
    n(41), n(42), n(44), n(45), n(46), n(47);
}, function(e, t, n) {
    var i;
    i = n(2)['default'], i.obj || (i.obj = n(6));
}, function(e, t, n) {
    var i, a, r, l, s, d, p, u, c, m, g, h;
    a = n(2)['default'], a.util || (u = n(13), h = u.unescapeHtml, m = u.snakeCase, r = u.camelCase, l = u.notSetOrTrue, p = u.poll, g = u.throttle, i = n(19), c = n(43), s = c.overpassNumbersBase64, d = c.overpassNumbersFontFace, a.util = {
        bindEvent: function() {
            var e;
            return (e = a.elem).bind.apply(e, arguments)
        },
        unbindEvent: function() {
            var e;
            return (e = a.elem).unbind.apply(e, arguments)
        },
        elemHeight: function(e) {
            return a.elem.height(e)
        },
        elemWidth: function(e) {
            return a.elem.width(e)
        },
        elemInDom: function(e) {
            return a.elem.inDom(e)
        },
        winHeight: function() {
            return a.elem.height(window)
        },
        winWidth: function() {
            return a.elem.width(window)
        },
        docHeight: function() {
            return a.elem.height(document)
        },
        docWidth: function() {
            return a.elem.width(document)
        },
        unescapeHtml: h,
        addInlineCss: i.addInlineCss,
        cssTags: i.getCssTags,
        execCssTags: i.execCssTags,
        removeCssTags: i.removeCssTags,
        scriptTags: i.getScriptTags,
        execScriptTags: i.execScriptTags,
        removeScriptTags: i.removeScriptTags,
        scrollTop: function(e) {
            var t, n, i, a;
            return null == e ? ('undefined' != typeof document && null !== document ? null == (i = document.documentElement) ? void 0 : i.scrollTop : void 0) || ('undefined' != typeof document && null !== document ? null == (a = document.body) ? void 0 : a.scrollTop : void 0) || 0 : (null != (t = document.body) && (t.scrollTop = e), null == (n = document.documentElement) ? void 0 : n.scrollTop = e)
        },
        scrollLeft: function(e) {
            var t, n, i, a;
            return null == e ? ('undefined' != typeof document && null !== document ? null == (i = document.documentElement) ? void 0 : i.scrollLeft : void 0) || ('undefined' != typeof document && null !== document ? null == (a = document.body) ? void 0 : a.scrollLeft : void 0) || 0 : (null != (t = document.body) && (t.scrollLeft = e), null == (n = document.documentElement) ? void 0 : n.scrollLeft = e)
        },
        applyTransform: function(e, t) {
            var n, i, a, r, l;
            for (i = ['msTransform', 'mozTransform', 'webkitTransform', 'transform'], l = [], (a = 0, r = i.length); a < r; a++) n = i[a], l.push(e.style[n] = t);
            return l
        },
        applyTransformOrigin: function(e, t) {
            var n, i, a, r, l;
            for (i = ['msTransformOrigin', 'mozTransformOrigin', 'webkitTransformOrigin', 'transformOrigin'], l = [], (a = 0, r = i.length); a < r; a++) n = i[a], l.push(e.style[n] = t);
            return l
        },
        vendoredCss: function(e) {
            return function(t) {
                var n, i;
                return i = ['-webkit-', '-moz-', '-o-', '-ms-', ''],
                    function() {
                        var a, r, l;
                        for (l = [], a = 0, r = i.length; a < r; a++) n = i[a], l.push('' + n + e + ': ' + t + ';');
                        return l
                    }().join('\n')
            }
        },
        transitionCss: function() {
            var e, t, n;
            return arguments[0] instanceof Array ? (t = arguments, n = function() {
                var n, i, a;
                for (a = [], n = 0, i = t.length; n < i; n++) e = t[n], a.push(e[0] + ' ' + e[1] + ' linear ' + (e[2] || '0s'));
                return a
            }().join(',')) : (e = arguments, n = e[0] + ' ' + e[1] + ' linear ' + (e[2] || '0s')), a.util.vendoredCss('transition')(n)
        },
        transformCss: function(e) {
            return a.util.vendoredCss('transform')(e)
        },
        niceDuration: function(e) {
            var t, n, i;
            return t = i = 0, 0 < e && (t += Math.floor(e / 60), e %= 60), i = Math.round(e), 60 === i && (t += 1, i = 0), n = t + ':' + this.padNumber(i, 2), n
        },
        padNumber: function(e, t) {
            var n;
            for (null == t && (t = 0), n = '' + e; n.length < t;) n = '0' + n;
            return n
        },
        localDate: function(e) {
            var t, n, i = Math.abs,
                a = Math.floor;
            return null == e && (e = new Date), n = -e.getTimezoneOffset(), t = 0 <= n ? '+' : '-', '' + e.getFullYear() + '-' + this.padNumber(e.getMonth() + 1, 2) + '-' + this.padNumber(e.getDate(), 2) + 'T' + this.padNumber(e.getHours(), 2) + ':' + this.padNumber(e.getMinutes(), 2) + ':' + this.padNumber(e.getSeconds(), 2) + t + this.padNumber(i(a(n / 60)), 2) + ':' + this.padNumber(i(a(n % 60)), 2)
        },
        requestAnimationFrame: function(e) {
            var t;
            return t = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(e) {
                return setTimeout(e, 1e3 / 60)
            }, t(e)
        },
        notSetOrTrue: l,
        indexOf: function(e, t) {
            var n, i, a;
            for (n = i = 0, a = e.length; 0 <= a ? i <= a : i >= a; n = 0 <= a ? ++i : --i)
                if ('function' == typeof t) {
                    if (t(e[n])) return n
                } else if (e[n] === t && e[n] === t) return n;
            return -1
        },
        insertIntoArray: function(e, t, n) {
            var i;
            return null == n && (n = {}), n.after ? (i = a.util.indexOf(e, n.detect || n.after), 0 <= i ? e.splice(i + 1, 0, t) : 'undefined' != typeof console && null !== console ? console.log(n.after + ' not found when trying to add ' + t + ' to array') : void 0) : n.before ? (i = a.util.indexOf(e, n.detect || n.before), 0 <= i ? e.splice(i, 0, t) : 'undefined' != typeof console && null !== console ? console.log(n.before + ' not found when trying to add ' + t + ' to array') : void 0) : null == n.index ? e.push(t) : e.splice(n.index, 0, t)
        },
        throttle: g,
        toArray: function(e, t) {
            if (null == t && (t = /\s+/), e instanceof Array) return e;
            if ('string' == typeof e) return e.split(t);
            throw new Error('Don\'t know how to convert ' + e + ' into an array.')
        },
        poll: p,
        aps: function(e) {
            var t, n, i, a;
            for (a = [], n = 0, i = e.length; n < i; n++) t = e[n], a.push(t);
            return a
        },
        pageLoaded: i.pageLoaded,
        isDocReady: i.isDocReady,
        onDocReady: function() {
            var e, t, n, i, r, l, s, d;
            return 1 < arguments.length ? (s = arguments[0], t = arguments[1]) : (s = 1e4, t = arguments[0]), a.util.isDocReady() ? t() : top === self && document.documentElement.doScroll ? (l = function() {
                var t;
                try {
                    return document.documentElement.doScroll('left'), !0
                } catch (e) {
                    return t = e, !1
                }
            }, a.util.poll(l, t, 50, s, t)) : (r = function() {
                if (a.util.isDocReady()) return clearTimeout(i), d(), t()
            }, e = function() {
                return a.elem.bind(document, 'DOMContentLoaded', r), a.elem.bind(document, 'readystatechange', r), a.elem.bind(window, 'load', r)
            }, d = function() {
                return a.elem.unbind(document, 'DOMContentLoaded', r), a.elem.unbind(document, 'readystatechange', r), a.elem.unbind(window, 'load', r)
            }, n = function() {
                return d(), t()
            }, i = setTimeout(n, s), e())
        },
        camelCase: r,
        snakeCase: m,
        breakIdentifier: {},
        eachIndexOf: function(e, t, n) {
            var r, i;
            for (r = -1, i = []; - 1 !== (r = e.indexOf(t, r + 1)) && !(n(r) === a.util.breakIdentifier);) i.push(void 0);
            return i
        },
        removeFromArray: function(e, t) {
            var n;
            return n = e.indexOf(t), e.splice(n, 1)
        },
        assetSizeShorthandToNumeric: function(e) {
            return '4k' === e ? 2160 : parseInt(e, 10)
        },
        numericAssetSizeSnapped: function(e, t) {
            var n, i;
            return n = e / t, i = e * t + 1, i >= 3840 * (3840 / n) ? 2160 : i >= 2560 * (2560 / n) ? 1440 : i >= 1920 * (1920 / n) ? 1080 : i >= 1280 * (1280 / n) ? 720 : i >= 960 * (960 / n) ? 540 : i >= 640 * (640 / n) ? 360 : t
        },
        parentFramesLength: function() {
            var t;
            try {
                return parent.frames.length
            } catch (e) {
                return t = e, a.warn(t), 1
            }
        },
        injectWistiaOverpassFontFace: function() {
            return a._overpassFontFacePromise ? a._overpassFontFacePromise : a._overpassFontFacePromise = a.asyncRequire('overpassFontFace.js')
        },
        removeWistiaOverpassFontFace: function() {
            if (a._overpassFontFacePromise) return a._overpassFontFacePromise.then(function() {
                return function(e) {
                    var t;
                    return t = e.removeWistiaOverpassFontFace, t()
                }
            }(this))
        }
    });
}, function(e, t, n) {
    'use strict';
    n.r(t);
    var i = n(2),
        a = n(19),
        r = '\n@font-face {\nfont-family: \'WistiaPlayerOverpassNumbers\';\nsrc: url(data:application/x-font-ttf;charset=utf-8;base64,' + 'AAEAAAARAQAABAAQRFNJRwAAAAEAAA7oAAAACEdQT1Ow+b/jAAAONAAAAKhHU1VCAAEAAAAADtwAAAAKT1MvMl1sVb8AAAe0AAAAYGNtYXAApwIpAAAIFAAAALJjdnQgAAAAAAAAClQAAAAEZnBnbUM+8IgAAAjIAAABCWdhc3AAGgAjAAAOJAAAABBnbHlmWNZE7QAAARwAAAXMaGVhZIS0XikAAAckAAAANmhoZWEF5gGwAAAHkAAAACRobXR4GNICwAAAB1wAAAA0bG9jYQi0CoYAAAcIAAAAHG1heHAAGQBKAAAG6AAAACBuYW1lGpIbcAAAClgAAAOPcG9zdAAPAKQAAA3oAAAAPHByZXBoUamTAAAJ1AAAAH8ACgBd/wYBmgLuAAMADwAVABkAIwApADUAOQA9AEgAAAUhESEHFTMVIxUzNSM1MzUHFTM1IzUHIzUzBxUzFSMVMzUzNQcVIxUzNQcVMzUzFSM1IxUzNQcVMzUHIzUzBxUzBxUzNSM3MzUBmv7DAT3yQUKmQkKmpkIiISFCQkJkQiGFpmQiIWQhpqamIWRkhUZGpmZGIPoD6EMhJSEhJSGBaCJGRiRhISUhRiE8QiJkejgXL1Bxca1xcVAvZyEvISEvIQAAAAIARv/0AiYCyAAVACUAAAQ3Njc2NTQmJyYjIgcGBwYVFBYXFjMmJyY1NDc2MzIXFhUUBwYjAY87MRgTGRo/flo7LxkTGRs9f1wqIR8pX1oqIR4pXgw9M1tJVkOAMnU9MV1IV0Z/MXQ/X0qCeUxmX0uBfEplAAAAAAEAKAAAAOUCvAAIAAATIwYGIxUzETPlLRBHOXdGArwwJyj9wwAAAAABAEcAAAISAsgAJAAAJSE2Nz4CNzY2NzY1NCYjIgcGBxc2MzIWFRQHBgcHBgYHBhUhAhL+fwszEjIhCDBDG0J0Z1c+OhE+HX9HUTMjUhMrOhhEActDPTARJRYFHjAcRFRbaisoQRxxSzs8NSM2DR0uHFJzAAEAMv/0AggCyAA0AAAENjc2NjU0Jic2NjU0JicmJiMiBwYHFzY3NjMyFhcWFRQGIyMVMzIWFRQHBiMiJicHFhcWMwFJViIiJT83Ki8fHBxMKlM7MRpBFR8rPBkvEidLPyUvS1EwLEg+TxpBGzM6YAwfGxxLK0RiFhdSMCdDGBcaLiZAGS4aJBEQIjk6RUBMQkIlIjxCG0spMAAAAAIAHgAAAiICvAAKAA0AACUzNSMRIwEVIRUzAxEjAbhqair+kAFURkb5vTwBw/4mJb0CQ/62AAAAAQBG//QCLgK8AC0AADYWFxYzMjY3NjY1NCYnJiYjIgYHNyE1IQMXNjc2MzIXFhYVFAYHBgYjIicmJwdTLh1ETjpfIyAiIx8fUy4tVCAoASz+nDk7FykzN0QuFBccGBlEJkIuKiQpPB8MHSkjIVUtMVMfHSEeHfQ//pUSGxIWMRc+IiE+GBgbFxUkMwACADz/9AIEAsgAIQA2AAAENjc2NjU0JicmJiMiBgc2Njc2Njc1BgYHBgYVFBYXFhYzEhcWFRQGBwYjIiYnJiY1NDY3NjYzAVFSHx8jIBwdTCo2UxoIMiUlWzFKhDExNh4dHlc4RS0rFxUsSCE7FRYZGBUVOyMMJB8gVTAnTh4fJCEfLFkoKDsPNxJaPz+RSjpjIyYpAYAtLUgiOhUuGBYVOyEjPBYVGAABACgAAAHLArwADAAANjc2NzUhFSEGBwYHM+ooN4L+XQFTdzMrAkamjsSWLjyXqIq3AAAAAwBG//QCEALIACMALwBCAAAABgcGBhUUFhcGBwYVFBYXFjMyNjc2NjU0Jic2NjU0JicmJiMCJjU0NjMyFhUUBiMCJyY1NDY3NjYzMhcWFhUUBwYjAQJJGxoeMCw1JCMiH0JiMFUfHyJEOS4vHhobSSk5RUc3N0dFOUQrLRYVFToiRC4UFi0rRALIHRkZQiQuThQTNTRCLE0cPCAcHE0sQmcVE04vJEIZGR3+0D8zOkVFOjM//pspK0gfOBYWGC4WOB9IKykAAAACADz/9AIEAsgAIAA0AAASBgcGBhUUFhcWFjMyNjcGBgcGBgcVNjY3NjY1NCYnJiMCJyY1NDc2MzIWFxYWFRQGBwYGI/RUICAkIBwbTCo3VRoGLCMkWDJKfy8uMhwbPG1NLSssLUchOxYWGBgVFTsjAsgjIB9WMClNHh4iIyEtXCgpPA83Elo/PpJKOWMlTv58Ly1IRC4vGRYWOyEjPBYWGQAAAAIAMv/yALAB4wALABcAABI2NTQmIyIGFRQWMxI2NTQmIyIGFRQWM4slJRoaJSUaGiUlGholJRoBZSYZGSYmGRkm/o0mGRkmJhkZJgABAAAADQBJAAoAAAAAAAEAAAAAAAEAAAAAAAAAAAAAAAAAYgBiAJ4AsgDsAToBVgGcAfACCgJuAsAC5gABAAAAARmZfAtXkV8PPPUAAwPoAAAAAE2yzjUAAAAA1Z4zgwAe/wYCLgLuAAAABwACAAAAAAAAAfQAXQAAAAACbABGAU4AKAJYAEcCTgAyAksAHgJ0AEYCSgA8AfMAKAJWAEYCSgA8AOIAMgABAAADtv8GAAACdAAAACgCLgABAAAAAAAAAAAAAAAAAAAADQADAhYBkAAFAAgCigJYAAAASwKKAlgAAAFeABQBMgAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABERUxWAEAAIAA6Au7/BgEKA7YA+gAAAAEAAAAAAf8CvAAAACAAAgAAAAMAAAADAAAAigABAAAAAAAcAAMAAQAAAIoABgBuAAAACQAyAAEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAwAEAAUABgAHAAgACQAKAAsADAAEACgAAAAGAAQAAQACACAAOv//AAAAIAAw////4f/SAAEAAAAAAAAAALAALEAOBQYHDQYJFA4TCxIIERBDsAEVRrAJQ0ZhZEJDRUJDRUJDRUJDRrAMQ0ZhZLASQ2FpQkNGsBBDRmFksBRDYWlCQ7BAUHmxBkBCsQUHQ7BAUHmxB0BCsxAFBRJDsBNDYLAUQ2CwBkNgsAdDYLAgYUJDsBFDUrAHQ7BGUlp5swUFBwdDsEBhQkOwQGFCsRAFQ7ARQ1KwBkOwRlJaebMFBQYGQ7BAYUJDsEBhQrEJBUOwEUNSsBJDsEZSWnmxEhJDsEBhQrEIBUOwEUOwQGFQebIGQAZDYEKzDQ8MCkOwEkOyAQEJQxAUEzpDsAZDsApDEDpDsBRDZbAQQxA6Q7AHQ2WwD0MQOi0AAACxAAAAQrE7AEOwAFB5uP+/QBAAAQAAAwQBAAABAAAEAgIAQ0VCQ2lCQ7AEQ0RDYEJDRUJDsAFDsAJDYWpgQkOwA0NEQ2BCHLEtAEOwAVB5swcFBQBDRUJDsF1QebIJBUBCHLIFCgVDYGlCuP/NswABAABDsAVDRENgQhy4LQAdAAAAAAAAAAASAN4AAQAAAAAAAQAWAAAAAQAAAAAAAgAFABYAAQAAAAAAAwAnABsAAQAAAAAABAAcAEIAAQAAAAAABQAPAF4AAQAAAAAABgAcAG0AAQAAAAAACQAgAIkAAQAAAAAACgA4AKkAAwABBAkAAQA4AOEAAwABBAkAAgAOARkAAwABBAkAAwBOAScAAwABBAkABAA4AXUAAwABBAkABQAeAa0AAwABBAkABgA4AXUAAwABBAkACQBAAcsAAwABBAkACgBwAgsAAwABBAkAEAAsAnsAAwABBAkAEQAKAqdXaXN0aWEtUGxheWVyLU92ZXJwYXNzTGlnaHQxLjEwMDtERUxWO1dpc3RpYS1QbGF5ZXItT3ZlcnBhc3MtTGlnaHRXaXN0aWEtUGxheWVyLU92ZXJwYXNzIExpZ2h0VmVyc2lvbiAxLjAzMTAwV2lzdGlhLVBsYXllci1PdmVycGFzcy1MaWdodERlbHZlIFdpdGhyaW5ndG9uLCBUaG9tYXMgSm9ja2luQ29weXJpZ2h0IChjKSAyMDE0IGJ5IFJlZCBIYXQsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4AVwBpAHMAdABpAGEALQBQAGwAYQB5AGUAcgAtAE8AdgBlAHIAcABhAHMAcwAgAEwAaQBnAGgAdABSAGUAZwB1AGwAYQByADEALgAxADAAMAA7AEQARQBMAFYAOwBXAGkAcwB0AGkAYQAtAFAAbABhAHkAZQByAC0ATwB2AGUAcgBwAGEAcwBzAC0ATABpAGcAaAB0AFcAaQBzAHQAaQBhAC0AUABsAGEAeQBlAHIALQBPAHYAZQByAHAAYQBzAHMALQBMAGkAZwBoAHQAVgBlAHIAcwBpAG8AbgAgADEALgAwADMAMQAwADAARABlAGwAdgBlACAAVwBpAHQAaAByAGkAbgBnAHQAbwBuACwAIABUAGgAbwBtAGEAcwAgAEoAbwBjAGsAaQBuAEMAbwBwAHkAcgBpAGcAaAB0ACAAKABjACkAIAAyADAAMQA0ACAAYgB5ACAAUgBlAGQAIABIAGEAdAAsACAASQBuAGMALgAgAEEAbABsACAAcgBpAGcAaAB0AHMAIAByAGUAcwBlAHIAdgBlAGQALgBXAGkAcwB0AGkAYQAtAFAAbABhAHkAZQByAC0ATwB2AGUAcgBwAGEAcwBzAEwAaQBnAGgAdAAAAgAAAAAAAP+FABQAAAAAAAAAAAAAAAAAAAAAAAAAAAANAAAAAwATABQAFQAWABcAGAAZABoAGwAcAB0AAQADAAcACgATAAf//wAPAAEAAAAKAB4ALAABREZMVAAIAAQAAAAA//8AAQAAAAFrZXJuAAgAAAABAAAAAQAEAAIAAAABAAgAAQBmAAQAAAAIABoAIAAmADAAOgBIAFIAYAABAAb/7AABAAb/9gACAAn/9gAL//EAAgAJ//YAC//xAAMABP/7AAn/9gAL//YAAgAJ/+wAC//dAAMABv+6AAj/4gAJACMAAQAJ//YAAgABAAMACgAAAAEAAAAAAAAAAAAAAAAAAQAAAAA=' + ');\n}\n';
    i['default']._overpassNumbersFontFace || (i['default']._overpassNumbersFontFace = Object(a.addInlineCss)(document.body || document.head, r));
    t['default'] = {
        overpassNumbersFontFace: r,
        removeOverpassNumbersFontFace: function() {
            i['default']._overpassNumbersFontFace && Object(a.elemRemove)(i['default']._overpassNumbersFontFace)
        }
    };
}, function(e, t, n) {
    var i, a, r;
    a = n(2)['default'], a.elem || (a.Elem = i = n(19), a.elem = r = {}, r.html = i.elemHtml, r.fromObject = i.elemFromObject, r.toObject = i.elemToObject, r.clone = i.elemClone, r.append = i.elemAppend, r.prepend = i.elemPrepend, r.before = i.elemBefore, r.after = i.elemAfter, r.remove = i.elemRemove, r.removeClass = i.elemRemoveClass, r.addClass = i.elemAddClass, r.hasClass = i.elemHasClass, r.classes = i.elemClasses, r.style = i.elemStyle, r.vendoredProperties = i.vendoredProperties, r.vendoredProperty = i.vendoredProperty, r.vendorPrefixes = i.vendorPrefixes, r.propsWithVendorPrefixes = i.propsWithVendorPrefixes, r.width = i.elemWidth, r.height = i.elemHeight, r.isBoxModel = i.isBoxModel, r.offset = i.elemOffset, r.containsOffset = i.elemContainsOffset, r.scrollOffset = i.elemScrollOffset, r.isHidden = i.elemIsHidden, r.inDom = i.elemInDom, r.isDescendantOf = i.elemIsDescendantOf, r.ancestorHasClass = i.elemAncestorHasClass, r.ancestors = i.elemAncestors, r.isInside = i.elemIsInside, r.animate = i.elemAnimate, r.bind = i.elemBind, r.unbind = i.elemUnbind, r.unbindAll = i.elemUnbindAll, r.unbindAllInside = i.elemUnbindAllInside, r._bindKey = i.elemBindKey, r.rebind = i.elemRebind, r.bindOnce = i.elemBindOnce, r.trigger = i.elemTrigger, r.fullscreenElement = i.fullscreenElement, r.requestFullscreen = i.elemRequestFullscreen, r.cancelFullscreen = i.elemCancelFullscreen, r.stripEventAttributes = i.elemStripEventAttributes, r.mutationObserver = i.elemMutationObserver, r.domDistance = i.elemDomDistance, r.allBetween = i.elemAllBetween);
}, function(e, t, n) {
    var i, a, r, l, s, d = [].slice;
    if (a = n(35), i = n(2)['default'], !i.bindable)
        for (r in i.bindable = {
                bind: function(e, t) {
                    return !0 === ('function' == typeof this.specialBind ? this.specialBind.apply(this, arguments) : void 0) ? this : t ? (a.bind.call(this, e, t), this) : i.warn(this.constructor.name, 'bind', 'falsey value passed in as callback:', t)
                },
                unbind: function(e, t) {
                    return !0 === ('function' == typeof this.specialUnbind ? this.specialUnbind.apply(this, arguments) : void 0) ? this : (t ? a.unbind.call(this, e, t) : this._bindings && (this._bindings[e] = []), this._bindings && this._bindings[e] && !this._bindings[e].length && (this._bindings[e] = null, delete this._bindings[e]), this)
                },
                on: function(e, t) {
                    var n;
                    return n = 'function' == typeof this.specialBind ? this.specialBind.apply(this, arguments) : void 0, 'function' == typeof n ? n : a.bind.call(this, e, t)
                },
                off: function(e, t) {
                    var n;
                    return n = 'function' == typeof this.specialUnbind ? this.specialUnbind.apply(this, arguments) : void 0, 'function' == typeof n ? n : a.unbind.call(this, e, t)
                },
                rebind: function(e, t) {
                    return this.unbind(e, t), this.bind(e, t), this
                },
                trigger: function() {
                    var e, t, n;
                    return t = arguments[0], e = 2 <= arguments.length ? d.call(arguments, 1) : [], (n = a.trigger).call.apply(n, [this, t].concat(d.call(e))), this
                },
                bindNamed: function() {
                    return a.bindNamed.apply(this, arguments)
                },
                unbindNamed: function() {
                    return a.unbindNamed.apply(this, arguments)
                },
                unbindAllInNamespace: function() {
                    return a.unbindAllInNamespace.apply(this, arguments)
                }
            }, l = i.bindable, l) s = l[r], i[r] || (i[r] = s);
}, function(e, t, n) {
    var a, i, r, l, s, d, p;
    if (i = n(2)['default'], a = n(6), !i.hasState)
        for (l in i.hasState = {
                updateState: function(e) {
                    var t, n, i, l, s;
                    for (this.state || (this.state = {}), t = r(this.state, e), s = a.clone(this.state), a.merge(s, e), this.state = s, (n = 0, i = t.length); n < i; n++) l = t[n], this.trigger('property:updated:' + l);
                    if (0 !== t.length) return this.trigger('property:updated:all')
                },
                getState: function(e) {
                    var t;
                    return t = a.clone(this.state), e ? t[e] : stateCone
                }
            }, r = function(e, t) {
                var n, i, a;
                for (i in n = [], t) a = t[i], s(a, e[i]) && n.push(i);
                return n
            }, s = function(e, t) {
                return i.obj.isObject(e) ? !i.obj.equalsDeep(e, t) : e !== t
            }, d = i.bindable, d) p = d[l], i.bindable.hasOwnProperty(l) && (i.hasState[l] = p);
}, function(e, t, n) {
    (function(e) {
        var t;
        if (!e.StopGo) return t = n(11).wlog, t = t.getPrefixedFunctions('StopGo'), e.StopGo = n(21), e.StopGo.prototype._debug = function() {
            return t.notice.apply(t, arguments)
        }
    })(Wistia);
}, function(e, t, n) {
    (function(e) {
        var t;
        if (!e.url) return t = n(15), e.url = {}, e.url.proto = t.proto, e.url.paramsToJson = t.queryParamsToObject, e.url.urlComponentToJson = t.urlComponentToObject, e.url.jsonToParams = t.objectToQueryParams, e.url.splitPath = t.splitPath, e.url.joinPath = t.joinPath, e.url._brack = t.brack, e.url._debrack = t.debrack, e.url.create = t.Url.create, e.url.parse = t.Url.parse
    })(Wistia);
}, function(e, t, n) {
    var i = [].slice;
    (function(e) {
        var t, a, r, l;
        if (a = e, !a.wlog) return r = n(11), l = r.wlog, t = r.LOG_LEVELS, a.wlog = l, a.log = l.error, a.error = l.error, a.warn = l.warn, a.notice = l.notice, a.info = l.info, a.debug = l.debug, a.logLevels = t, a.stacktrace = function() {
            var t;
            try {
                throw new Error('stacktrace')
            } catch (e) {
                return t = e, t.stack
            }
        }, a.logHelpers = {
            _log: function() {
                var e, t, n;
                return n = arguments[0], t = 2 <= arguments.length ? i.call(arguments, 1) : [], e = a[n], t = [].concat(this._logPrefix()).concat(t), e.apply(null, t)
            },
            _logPrefix: function() {
                return [this.constructor.name]
            },
            error: function() {
                var e;
                return e = 1 <= arguments.length ? i.call(arguments, 0) : [], this._log.apply(this, ['error'].concat(i.call(e)))
            },
            warn: function() {
                var e;
                return e = 1 <= arguments.length ? i.call(arguments, 0) : [], this._log.apply(this, ['notice'].concat(i.call(e)))
            },
            notice: function() {
                var e;
                return e = 1 <= arguments.length ? i.call(arguments, 0) : [], this._log.apply(this, ['notice'].concat(i.call(e)))
            },
            info: function() {
                var e;
                return e = 1 <= arguments.length ? i.call(arguments, 0) : [], this._log.apply(this, ['info'].concat(i.call(e)))
            },
            debug: function() {
                var e;
                return e = 1 <= arguments.length ? i.call(arguments, 0) : [], this._log.apply(this, ['debug'].concat(i.call(e)))
            },
            log: function() {
                var e;
                return e = 1 <= arguments.length ? i.call(arguments, 0) : [], this._log.apply(this, ['error'].concat(i.call(e)))
            }
        }, a._initializers.initWLog = function() {
            var e, t, n, i, r, s, d, p, u, c, m;
            if (t = a.url.parse(location.href), document.referrer && (u = a.url.parse(document.referrer)), ((e = null == t || null == (n = t.params) ? void 0 : n.wlog) || top !== self && (e = null == u || null == (i = u.params) ? void 0 : i.wlog)) && l.setLevel(e), ((c = null == t || null == (r = t.params) ? void 0 : r.wgrep) || (c = null == u || null == (s = u.params) ? void 0 : s.wgrep)) && l.setGrep(new RegExp(c, 'i')), (m = null == t || null == (d = t.params) ? void 0 : d.wgrepv) || (m = null == u || null == (p = u.params) ? void 0 : p.wgrepv)) return l.setGrepv(new RegExp(m, 'i'))
        }, a._destructors.destroyWLog = function() {
            return null == l ? void 0 : l.reset()
        }
    })(Wistia);
}, function(e, t, n) {
    var i;
    i = n(12).cachedDetect,
        function(e) {
            return e._initializers.initDetect = function() {
                if (!e.detect) return e.detect = i()
            }
        }(Wistia);
}, function(e, t, n) {
    (function(e) {
        var t, i, a;
        if (t = e, i = n(34).globalEventLoop, null == (a = t._initializers) || !a.initEventLoop) return t._initializers.initEventLoop = function() {
            return t.eventLoop = i
        }, t._destructors.destroyEventLoop = function() {
            var e;
            return null != (e = t.eventLoop) && e.stop(), t.eventLoop = null
        }
    })(Wistia);
}, function() {
    (function(e) {
        var t, n, i, a;
        if (i = e, !i.embed) return t = i.lib('player/lib/judy'), n = i.lib('promiscuous'), a = i.lib('player/lib/media_data').fetchMedia, i._embed = {}, i.embed = function(e, t) {
            var n, a;
            return null == t && (t = {}), i.info('Wistia.embed', e, t), 'string' == typeof e ? a = e : (a = e.hashedId, i.remote._convertEmbedSslToAkamai(e), i.cacheMedia(a, e)), n = new i.PublicApi(a, t), n
        }, i.embedEngine = function(e, r, l, s) {
            var d;
            return null == l && (l = {}), null == s && (s = {}), d = 'string' == typeof r ? r : r.hashedId, new n(function(n) {
                return a(d, function(a) {
                    var r, p;
                    return i.remote._convertEmbedSslToAkamai(a), i.cacheMedia(d, a), r = t.buildContext(s), p = t.bestUsableEngine(r, a, l), i.asyncRequire(p).then(function(t) {
                        var r;
                        return r = new t(e, a, i.obj.merge({
                            duration: a.duration
                        }, l)), n(r)
                    })
                })
            })
        }
    })(Wistia);
}, function(e, t, n) {
    var i = function(e, t) {
            return function() {
                return e.apply(t, arguments)
            }
        },
        a = [].slice;
    (function(e) {
        var t, r, s, l, d, p, u, c;
        if (s = e, !s.PublicApi) return t = n(27), r = n(23), s.Judy = t, s.Assets = n(16), p = n(19).inUserEventContext, c = n(18), d = c.eV1Protocol, l = c.eV1Host, s.PublicApi = function() {
            function n(e, t) {
                this._definePluginMethod = i(this._definePluginMethod, this), this._doResize = i(this._doResize, this), this._doMonitor = i(this._doMonitor, this), this._initWithMediaData = i(this._initWithMediaData, this), this._allocEmbedSlot = i(this._allocEmbedSlot, this);
                var n, a;
                this.info('initialize'), this._hasImpl = new s.StopGo, this._notReplacing = new s.StopGo, this._notReplacing(!0), this.hasPlugins = new s.StopGo, this.up = new s.StopGo, this.up(!0), this.down = new s.StopGo, this.down(!1), this.inViewport = new s.StopGo, this.inViewport(!1), this._implVersion = 0, this._playlistIndex = 0, this._attrs = {}, this.params = {}, this.options = {}, this.controls = {}, this._pluginStopGos = {}, this.plugins = {}, this.data = {}, this._definePluginMethod(), this.hashedId(e), this._givenOptions = t, this._playlist = [], this._setupContainer(), this._validate(), this._inferPropertiesBeforeMediaData(), this._dedupContainer(), this._addToGlobalCache(), this._setupBindings(), this._resetTracker(), this.supportedPlayers = [], this.addToPlaylist(this.hashedId(), t), this.down(this.looksDown()), this.up(this.looksUp()), this._hasImpl(function(e) {
                    return function() {
                        if (e._wvideoInUrl()) return e._scrollToContainer(), e.play()
                    }
                }(this)), null != (a = window.wistiaEmbeds) && a.bindHandles(), this.monitor(), this.embedded(function(e) {
                    return function() {
                        return e.monitor()
                    }
                }(this)), this.ready(function(e) {
                    return function() {
                        return e.monitor()
                    }
                }(this)), n = function(e) {
                    return function() {
                        return e._onInitializable(function() {
                            return e._withFreeEmbedSlots(function() {
                                var t;
                                return e._initTime = new Date().getTime(), e.hasData(function() {
                                    return e._hasDataTime = new Date().getTime()
                                }), e.embedded(function() {
                                    return e._embeddedTime = new Date().getTime()
                                }), e.ready(function() {
                                    return e._readyTime = new Date().getTime()
                                }), t = e._gatherOptions(), t.mediaData ? e._initWithMediaData(t.mediaData) : s.remote.media(e.hashedId(), e._initWithMediaData, t)
                            })
                        })
                    }
                }(this), this._shouldBePopover() ? (this.popover = {
                    show: function(e) {
                        return function() {
                            return e._hasImpl(function() {
                                return e.popover.show()
                            })
                        }
                    }(this),
                    hide: function(e) {
                        return function() {
                            return e._hasImpl(function() {
                                return e.popover.hide()
                            })
                        }
                    }(this),
                    height: function(e) {
                        return function(t, n) {
                            return null == t ? 0 : e._hasImpl(function() {
                                return e.popover.height(t, n)
                            })
                        }
                    }(this),
                    width: function(e) {
                        return function(t, n) {
                            return null == t ? 0 : e._hasImpl(function() {
                                return e.popover.width(t, n)
                            })
                        }
                    }(this)
                }, s.asyncRequire('popover.js').then(function(e) {
                    return function() {
                        return e.popover = new s.Popover(e), n()
                    }
                }(this))) : n(), this.trigger('initembed')
            }
            var u = Math.round;
            return n.prototype._withFreeEmbedSlots = function(e) {
                var t;
                return this._setupEmbedSlots(), t = null, this.embedded(function(e) {
                    return function() {
                        return clearTimeout(t), t = setTimeout(function() {
                            return e._freeEmbedSlot()
                        }, e._embedSlotThrottleInterval())
                    }
                }(this)), null == this._freeEmbedSlotOnError && (this._freeEmbedSlotOnError = function(e) {
                    return function() {
                        return e._freeEmbedSlot(), e.unbind
                    }
                }(this)), this.rebind('servererror', this._freeEmbedSlotOnError), s._embedSlotFree(function(n) {
                    return function() {
                        return n._allocEmbedSlot(), t = setTimeout(function() {
                            return n._freeEmbedSlot()
                        }, 1e3), e()
                    }
                }(this))
            }, n.prototype._onInitializable = function(e) {
                return this.popover ? s.elem.isHidden(this.container) ? (this.info('popover, delaying init until container is visible'), s.eventLoop.add(this.uuid + '.wait_for_container_visible', 500, function(t) {
                    return function() {
                        var n;
                        if (!s.elem.isHidden(t.container)) {
                            t.info('container became visible, initializing');
                            try {
                                e()
                            } catch (e) {
                                n = e, s.error(n)
                            }
                            return s.eventLoop.remove
                        }
                    }
                }(this))) : e() : e()
            }, n.prototype._setupEmbedSlots = function() {
                if (null == s._embedSlots && (s._embedSlots = []), !s._embedSlotFree) return s._embedSlotFree = new s.StopGo, s._embedSlotFree(!0)
            }, n.prototype._maxEmbedSlots = function() {
                var e, t, n;
                return n = function() {
                    var n, i;
                    for (e in n = s.data('video'), i = [], n) t = n[e], i.push(e);
                    return i
                }().length, 20 < n ? 5 : 10 < n ? 8 : 13
            }, n.prototype._embedSlotThrottleInterval = function() {
                return 500
            }, n.prototype._freeEmbedSlot = function() {
                var e;
                if (this._setupEmbedSlots(), s._embedSlots = function() {
                        var t, n, i, a;
                        for (i = s._embedSlots, a = [], (t = 0, n = i.length); t < n; t++) e = i[t], e !== this && a.push(e);
                        return a
                    }.call(this), s._embedSlots.length < this._maxEmbedSlots()) return s._embedSlotFree(!0)
            }, n.prototype._allocEmbedSlot = function() {
                if (this._setupEmbedSlots(), s._embedSlots.push(this), s._embedSlots.length >= this._maxEmbedSlots()) return s._embedSlotFree(!1)
            }, n.prototype._shouldLazyLoad = function() {
                var e;
                return e = this._gatherOptions(), !window._inWistiaIframe && parent === self && (e.lazyLoad || this.popover && !1 !== e.lazyLoad)
            }, n.prototype._initWithMediaData = function(e) {
                var n, i, a;
                this.info('_initWithMediaData', e);
                try {
                    0 === s.Player.assets(e, {
                        public: !0
                    }).length && s.Metrics.videoCount(this, 'player/no-public-assets')
                } catch (e) {
                    n = e, this.debug(n)
                }
                return this.isRemoved() ? void this.notice('abort, video already removed') : e.error ? (this.notice('display error message from server'), this._displayServerError(e), void this.trigger('servererror')) : (this._originalMediaData = e, this._mediaData = this._transformMediaData(e), this.data.media = e, this.info('_optionSources', this._optionSources()), this._opts = this._gatherOptions(), this.info('_opts', s.obj.clone(this._opts)), 'vulcan' === this._opts.playerPreference && this.embedded(function(e) {
                    return function() {
                        return s.Metrics.videoCount(e, 'player/vulcan-v1/' + e._mediaData.accountKey, 1, {
                            pageUrl: e._attrs.pageUrl,
                            optionSources: e._optionSources()
                        })
                    }
                }(this)), s.obj.merge(this._mediaData, this._opts.mergeMediaData), this._inferPropertiesAfterMediaData(), a = t.choosePlayer(this.judyCtx(), this._mediaData, this._opts), this._playerPlugins = t.playerPlugins(this.judyCtx(), a, this._mediaData, this._opts), t.logWarnings(this.judyCtx(), a, this._mediaData, this._opts), this._implVersion += 1, i = this._implVersion, this._execPlugins(function(n) {
                    return function() {
                        var r, e, l;
                        if (n._implVersion !== i) return void n.notice('_initWithMediaData(): impl changed from', i, 'to', n._implVersion, 'not completing init');
                        n.hasPlugins(!0), e = s.PublicApi.classFor(a), n.supportedPlayers = t.supportedPlayers(n.judyCtx(), n._mediaData.assets);
                        try {
                            n._impl = new e(n).init()
                        } catch (t) {
                            throw r = t, n.error('Failed to initialize impl of class', e, 'preferred', a, 'supported', n.supportedPlayers), r
                        }
                        return n.grid = n._impl.setupGrid({
                            initDimensions: !1
                        }), n._hasImpl(!0), n.hasData(!0), (null == (l = n._embedContainer) ? void 0 : l.parentNode) ? (n._runMethodsFromOptions(), n._impl.embed(), 0 < n._getFadeInTime() && s.elem.style(n._impl.gridChildren(), {
                            opacity: 0
                        }), n._impl.embedded(function() {
                            return 0 < n._getFadeInTime() ? s.elem.animate(n._impl.gridChildren(), {
                                opacity: 1
                            }, {
                                time: n._getFadeInTime(),
                                callback: function() {
                                    return n.trigger('transitiondone')
                                }
                            }) : n.trigger('transitiondone')
                        }), s.timeout(n.uuid + '.prefetch_next_media', function() {
                            return n.prefetchNextMedia()
                        }, 2e3), n._injectJsonLd()) : n.notice('embed(): container removed, giving up')
                    }
                }(this)))
            }, n.prototype._getFadeInTime = function() {
                return null == this._opts.fadeInTime ? 200 : this._opts.fadeInTime
            }, n.prototype.judyCtx = function() {
                return this._judyCtx || (this._judyCtx = t.buildContext({
                    pageUrl: this._attrs.pageUrl
                }))
            }, n.prototype._iframeUrl = function(e) {
                return null == e && (e = ''), e + '//' + s.remote.externalEmbedHost(e) + '/embed/iframe/' + this.hashedId()
            }, n.prototype._removeJsonLd = function() {
                if (this._jsonLd) return s.elem.remove(this._jsonLd), this._jsonLd = null
            }, n.prototype._wvideoInUrl = function() {
                var e;
                return !this._opts._inIframe && (e = s.url.parse(this._attrs.pageUrl), e.params.wvideo === this.hashedId())
            }, n.prototype._scrollToContainer = function() {
                var e;
                return e = s.elem.offset(this.container), s.util.scrollTop(e.top - 100)
            }, n.prototype._injectJsonLd = function() {
                var e, t, n;
                if ('notplayable' !== this.playerType) return (this._removeJsonLd(), !this._opts._inIframe) ? !1 === this._opts.seo ? void 0 : (e = {
                    "@context": 'http://schema.org/',
                    "@id": this._iframeUrl('https:'),
                    "@type": 'VideoObject',
                    duration: 'PT' + this.humanDuration().toUpperCase(),
                    name: this.name(),
                    thumbnailUrl: this.stillUrl({
                        protocol: 'https:'
                    }),
                    embedUrl: this._iframeUrl('https:'),
                    uploadDate: this._createdAtIso8601()
                }, this._mediaData.captions && (e.transcript = null == (t = this._mediaData.captions[0]) ? void 0 : t.text), this._mediaData.seoDescription && (e.description = this._mediaData.seoDescription), n = JSON.stringify(e), this._jsonLd = s.elem.fromObject({
                    tagName: 'script',
                    type: 'application/ld+json',
                    childNodes: n
                }), this._jsonLd._wistia = !0, s.elem.append(document.head, this._jsonLd)) : void 0
            }, n.prototype._createdAtIso8601 = function() {
                var e, t, n, i;
                return e = new Date(1e3 * this._mediaData.createdAt), i = e.getFullYear(), n = e.getMonth() + 1, t = e.getDate(), 10 > n && (n = '0' + n), 10 > t && (t = '0' + t), i + '-' + n + '-' + t
            }, n.prototype._setDeprecatedProperties = function() {
                return this.options = s.obj.clone(this._opts), this.params = s.obj.clone(this._opts), s.obj.merge(this.params, this._attrs), this._attrs.email && (this.params.trackEmail = this._attrs.email), this._hasImpl(function(e) {
                    return function() {
                        var t;
                        return e.playerType = e.embedType = null == (t = e._impl) ? void 0 : t.playerType
                    }
                }(this))
            }, n.prototype.elem = function() {
                var e;
                return null == (e = this._impl) ? void 0 : 'function' == typeof e.elem ? e.elem() : void 0
            }, n.prototype._resetTracker = function() {
                var e;
                return null != (e = this._tracker) && e.reset(), this._tracker || (this._tracker = new s.VideoTracker2(this)), this.tracker = this._tracker, this._visitorKey = this._tracker.visitorKey(), this._tracker.monitor()
            }, n.prototype._execPlugins = function(e) {
                return this._pluginScripts = s.plugin._scriptsFromVideo(this), this.info('_execPlugins', this._pluginScripts), s.plugin._execQueue(this, this._pluginScripts, e)
            }, n.prototype._optionSources = function(e) {
                var t, n, i, a, r, l, d, p, u, c, m, g, h, y, f;
                for (l in null == e && (e = {}), e = s.obj.merge({
                        givenOptions: s.obj.clone(this._givenOptions),
                        mediaData: s.obj.clone(this._mediaData),
                        hashedId: this._hashedId,
                        container: this.container
                    }, e), a = e.givenOptions, 'v1' === a.version ? n = {} : e.mediaData ? (n = s.obj.clone(e.mediaData.embed_options), delete n.stillUrl) : n = {}, p = {}, h = s.url.parse(this._inferPageUrl()), u = ['autoPlay', 'controlsVisibleOnLoad', 'fadeInTime', 'fakeFullscreen', 'hls', 'muted', 'nativeMode', 'playbar', 'playerForce', 'playerPreference', 'playsinline', 'silentAutoPlay', 'swatchEnabled', 'videoFoam', 'volumeControl'], c = h.params || {}, c) f = c[l], /^w_/.test(l) && (l = l.replace(/^w_/, ''), 0 <= s.obj.indexOf(u, l) && (p[l] = f));
                if (i = {}, g = {
                        customize: n,
                        global: s.options('__global__'),
                        hashedId: s.options(e.hashedId),
                        dom: s.options('__' + e.container.id + '_dom_options__'),
                        container: s.options(e.container.id),
                        inline: a,
                        inferredOptions: i,
                        queryParamOptions: p,
                        override: e.override || {}
                    }, a.optionSourceOverrides)
                    for (r in m = a.optionSourceOverrides, m) y = m[r], g.hasOwnProperty(r) && (g[r] = y);
                for (t in g) d = g[t], !1 === d['vulcan-v2'] ? i.playerPreference = 'vulcan' : !0 === d['vulcan-v2'] && (i.playerPreference = 'vulcan-v2');
                for (r in 'true' === h.params['vulcan-v2'] ? i.playerPreference = 'vulcan-v2' : 'false' === h.params['vulcan-v2'] && (i.playerPreference = 'vulcan'), g) y = g[r], s.obj.isEmpty(y) && delete g[r];
                return g
            }, n.prototype._gatherOptions = function(e) {
                var t, n, i, a, r, l, d, p, u;
                for (t in null == e && (e = {}), n = {}, p = this._optionSources(e), p) u = p[t], 0 <= (null == (i = e.only) ? void 0 : i.indexOf(t)) ? s.obj.merge(n, u) : 0 > (null == (a = e.except) ? void 0 : a.indexOf(t)) ? s.obj.merge(n, u) : !e.only && !e.except && s.obj.merge(n, u);
                return s.obj.cast(n), this._normalizeOptions(n), 'html5' === n.playerPreference && 'vulcan-v2' === (null == (r = this._mediaData) || null == (l = r.embed_options) ? void 0 : l.playerPreference) && (n.playerPreference = 'vulcan-v2'), (null == (d = this._mediaData) ? void 0 : d.useMediaDataHostLogic) && (n.useMediaDataHostLogic = !0), n
            }, n.prototype.hashedId = function(e) {
                return null == e ? this._hashedId : (this._hashedId = e, this)
            }, n.prototype._normalizeOptions = function(e) {
                return e.twitter && (this.info('twitter detected'), s.obj.get(e, 'plugin.socialbar-v1') && (this.info('disabled socialbar'), s.obj.set(e, 'plugin.socialbar-v1.on', !1)), s.obj.get(e, 'plugin.transcript-v2') && (this.info('disabled transcript'), s.obj.set(e, 'plugin.transcript-v2.on', !1))), null != e.playButtonVisible && (e.playButton = s.obj.cast(e.playButtonVisible), delete e.playButtonVisible), e
            }, n.prototype._setupContainer = function() {
                var e, t, n, i;
                if (this._containerId = this._givenOptions.container ? this._givenOptions.container : 'wistia_' + this.hashedId(), this.container = 'string' == typeof this._containerId ? document.getElementById(this._containerId) : this._containerId, this.container) {
                    for (this.container.wistiaApi = this, this._startingHtml = this.container.innerHTML, i = Array.prototype.slice.call(this.container.childNodes), (t = 0, n = i.length); t < n; t++) e = i[t], s.elem.hasClass(e, 'wistia_swatch') || s.elem.remove(e);
                    s.elem.addClass(this.container, 'wistia_embed_initialized')
                }
                return this.info('container', this.container)
            }, n.prototype._inferPropertiesBeforeMediaData = function() {
                var e;
                if (this.chrome = s.elem.fromObject({
                        id: s.seqId('wistia_chrome_'),
                        class: 'w-chrome',
                        style: s.generate.relativeBlockCss()
                    }), s.elem.style(this.chrome, {
                        outline: 'none',
                        overflow: 'hidden',
                        boxSizing: 'content-box',
                        mozBoxSizing: 'content-box',
                        webkitBoxSizing: 'content-box'
                    }), e = this._gatherOptions(), this._shouldBePopover() ? (this._embedContainer = s.elem.fromObject({
                        id: this.container.id + '_popover',
                        style: {
                            height: this._popoverSize(e).height + 'px',
                            width: this._popoverSize(e).width + 'px'
                        }
                    }), s.elem.append(document.body, this._embedContainer)) : this._embedContainer = this.container, s.elem.append(this._embedContainer, this.chrome), this.uuid = e.uuid ? e.uuid : s.seqId(), this.info('uuid', this.uuid), null != e.playlistLoop && (this._attrs.playlistLoop = e.playlistLoop), this._embedContainer) return this._attrs.startingWidth = s.elem.width(this._embedContainer), this._attrs.startingHeight = s.elem.height(this._embedContainer)
            }, n.prototype._shouldBePopover = function() {
                var e;
                return e = this._gatherOptions(), !e._inIframe && (!0 === e.popover || 'v2' === e.popover)
            }, n.prototype._popoverSize = function(e) {
                var t, n, i, a, r;
                return null == e && (e = this._opts), null == e && (e = {}), e.popoverSize ? (a = (null == (i = e.popoverSize) ? void 0 : i.split('x')) || [640, 360], r = a[0], t = a[1], r = parseInt(r), t = parseInt(t)) : this._mediaData ? (n = this.asset({
                    container: 'mp4',
                    width: [0, 960],
                    sortBy: 'width desc'
                })) ? (r = n.width, t = n.height) : (r = 640, t = 360) : (r = 640, t = 360), {
                    width: r,
                    height: t
                }
            }, n.prototype._inferPropertiesAfterMediaData = function() {
                var e, t, n, i;
                return this._attrs.shouldTrack = !this._opts.doNotTrack, this._attrs.seekThreshold = this._opts.seekThreshold || 1.5, n = this._inferQualityRangeFromOpts(), t = n[0], e = n[1], this._attrs.qualityMin = t, this._attrs.qualityMax = e, this._attrs.qualityMax < this._attrs.qualityMin && (this.error('qualityMax ' + this._attrs.qualityMax + ' is less than qualityMin ' + this._attrs.qualityMin + '. Setting qualityMax to ' + this._attrs.qualityMin + '.'), this._attrs.qualityMax = this._attrs.qualityMin), this._attrs.rawEmbed = null == this._opts.rawEmbed ? null == this._opts._inIframe || !s.obj.cast(this._opts._inIframe || !1) : s.obj.cast(this._opts.rawEmbed), this._attrs.pageUrl || (this._attrs.pageUrl = this._inferPageUrl()), null != this._opts.trackEmail && (this._attrs.email = this._opts.trackEmail), !this._attrs.email && this._attrs.shouldTrack && (i = this._extractEmailFromParams(), i && (this._attrs.email = i)), !this._attrs.email && s.localStorage([this._attrs.pageUrl, 'trackEmail']) && (this._attrs.email = s.localStorage([this._attrs.pageUrl, 'trackEmail'])), this._attrs.playerColor = s.Player._sanePlayerColor(this._opts.playerColor || '636155'), this._attrs.playerBackgroundColor = this._opts.playerBackgroundColor || '#000000', this._attrs.trackWithJs = !0, this._attrs.newStillLogic = !0, this._opts.noDeprecatedProperties || this._setDeprecatedProperties(), this
            }, n.prototype._inferPageUrl = function() {
                var e, t, n;
                return (null == (e = this._opts) ? void 0 : e.pageUrl) ? this._opts.pageUrl : (null == (t = window.FreshUrl) ? void 0 : t.originalUrl) ? null == (n = window.FreshUrl) ? void 0 : n.originalUrl : top === self ? location.href || '' : document.referrer || ''
            }, n.prototype._inferQualityRangeFromOpts = function() {
                var e, t, n, i, a, r, l, d, p, c, m;
                return t = 360, e = 2160, this._opts.videoQuality && 'auto' !== this._opts.videoQuality ? 'sd-only' === this._opts.videoQuality ? [200, 360] : 'md' === this._opts.videoQuality ? [540, e] : 'hd-only' === this._opts.videoQuality ? [720, e] : /width:/.test(this._opts.videoQuality) ? (p = this._opts.videoQuality.match(/width:(\d+)/i), n = p[0], c = p[1], m = parseInt(c, 10), (a = s.Player.asset(this._mediaData, {
                    container: /mp4|flv/,
                    status: s.Player.READY,
                    public: !0
                })) ? (i = a.width / a.height, r = u(m / i), [r, r]) : (this.warn('No assets available to determine aspect for videoQuality \'' + this._opts.videoQuality + '\', using default qualityMin/qualityMax'), [t, e])) : (this.warn('Unknown videoQuality setting \'' + this._opts.videoQuality + '\', using default qualityMin/qualityMax'), [t, e]) : (d = null == this._opts.qualityMin ? t : s.util.assetSizeShorthandToNumeric(this._opts.qualityMin), l = null == this._opts.qualityMax ? e : s.util.assetSizeShorthandToNumeric(this._opts.qualityMax), [d, l])
            }, n.prototype._extractEmailFromParams = function() {
                var e, t, n, i, a, r;
                return (a = (null == (n = this._attrs.pageUrl) ? void 0 : n.match(/wemail\=([^\&\#]+)/)) || null, a) ? a[1] : (r = (null == (i = this._attrs.pageUrl) ? void 0 : i.match(/wkey\=([^\&\#]+)/)) || null, r ? (e = r[1], t = s.base64.decode(e), t) : null)
            }, n.prototype._runMethodsFromOptions = function() {
                var e, t, n;
                if (null != this._opts.foreignData && this.foreignData(this._opts.foreignData), null == this._opts.email ? null != this._opts.trackEmail && this.email(this._opts.trackEmail) : this.email(this._opts.email), null != this._opts.playerLanguage && this.playerLanguage(this._opts.playerLanguage), null != this._opts.videoFoam && this.videoFoam(this._opts.videoFoam), this._opts.controlScaling && this.controlScaling(this._opts.controlScaling), this._hasImpl(function(e) {
                        return function() {
                            if (null != e._opts.playerColor && 'flash' !== e.playerType) return e.playerColor(e._opts.playerColor)
                        }
                    }(this)), null != this._opts.volume && this.volume(this._opts.volume), (!0 === this._opts.muted || 0 === this._opts.volume) && this.mute(), !1 === this._opts.muted && this.unmute(), this._opts.suppressPlay && this.suppressPlay(this._opts.suppressPlay), !this.popover && this._opts.autoPlay && this._hasImpl(function(e) {
                        return function() {
                            return e._playSuspendedOffScreenEnabled() ? e.inViewport() ? e.play() : e.bind('enterviewport', function() {
                                return e.play(), e.unbind
                            }) : e.play()
                        }
                    }(this)), this._opts.pause && this.pause(), null != this._opts.time) return t = s.detect.iphone || s.detect.ipad || s.detect.android, e = this.popover && !this.popover._visible, n = 'playing' !== this.state() && (t || e), this.time(this._opts.time, {
                    lazy: n
                })
            }, n.prototype._playSuspendedOffScreenEnabled = function() {
                return null != this._opts.playSuspendedOffScreen && 'auto' !== this._opts.playSuspendedOffScreen ? this._opts.playSuspendedOffScreen : this.isMuted()
            }, n.prototype._validate = function() {
                var e;
                if (e = this._errors(), 0 < e.length) {
                    throw new Error(e.join(', '))
                }
                return !0
            }, n.prototype._errors = function() {
                var e;
                return e = [], this.container || e.push('Could not find element with ID "' + this._containerId + '" in DOM. Failed to initialize video "' + this._hashedId + '".'), e
            }, n.prototype._dedupContainer = function() {
                var e, t, n, i, a, r, l;
                if (s.data('video')) {
                    for (l in r = [], i = s.data('video'), i) e = i[l], (null == (a = e.container) ? void 0 : a.id) === this.container.id && r.push(e);
                    for (t = 0, n = r.length; t < n; t++) e = r[t], this.notice('_dedupContainer', e.container.id), e.remove();
                    if (0 < r.length) return this.container.wistiaApi = this
                }
            }, n.prototype._addToGlobalCache = function() {
                return this.info('_addToGlobalCache', this.uuid), s.data(['video', this.uuid], this)
            }, n.prototype._displayServerError = function(e) {
                var t;
                return e.iframe ? (t = this._gatherOptions().useMediaDataHostLogic ? d() + '//' + l() : s.proto() + '//' + s.remote.embedHost(), this.container.innerHTML = '<iframe src=\'' + t + '/embed/iframe/' + this.hashedId() + '\' height=\'' + this.height() + '\' width=\'' + this.width() + '\' frameborder=\'0\' scrolling=\'no\'></iframe>') : this.container.innerHTML = '<div style=\'background:#fff;border:2px dashed #ddd;color:#aaa;font-family:Century Gothic,Arial;font-size:14px;text-align:center;width:' + this.width() + ';height:' + this.height() + ';\'><div style=\'padding:20px;\'>' + (e.message || e.error) + '</div></div>'
            }, n.prototype._implExec = function() {
                var e, t;
                return t = arguments[0], e = 2 <= arguments.length ? a.call(arguments, 1) : [], this._hasImpl(function(n) {
                    return function() {
                        var i;
                        return n._impl[t] ? n._impl[t]._originalMethod === n[t] ? void n.warn('calling ' + t + ' would result in an infinite loop') : (i = n._impl)[t].apply(i, e) : n.warn(t + ' is not defined', s.stacktrace())
                    }
                }(this)), this
            }, n.prototype._implGet = function() {
                var e, t, n, i;
                return n = arguments[0], t = arguments[1], e = 3 <= arguments.length ? a.call(arguments, 2) : [], null == t && (t = null), this._hasImpl() ? this._impl[n] ? this._impl[n]._originalMethod === this[n] ? void this.warn('calling ' + n + ' would result in an infinite loop') : (i = this._impl)[n].apply(i, e) : this.warn(n + ' is not defined', s.stacktrace()) : t
            }, n.prototype._implSetOrGet = function() {
                var e, t, n;
                return n = arguments[0], t = arguments[1], e = 3 <= arguments.length ? a.call(arguments, 2) : [], 0 < e.length ? this._implExec.apply(this, [n].concat(a.call(e))) : this._implGet(n, t)
            }, n.prototype._implPromise = function() {
                var e, t;
                return t = arguments[0], e = 2 <= arguments.length ? a.call(arguments, 1) : [], new r(function(n) {
                    return function(i, a) {
                        return n._hasImpl(function() {
                            var l, s;
                            return n._impl[t] ? n._impl[t]._originalMethod === n[t] ? void n.warn('calling ' + t + ' would result in an infinite loop') : (s = (l = n._impl)[t].apply(l, e), s instanceof r ? s.then(i)['catch'](a) : i(s)) : a(new Error(t + ' is not defined on _impl'))
                        })
                    }
                }(this))
            }, n.prototype.rebuild = function() {
                return this._hasImpl(function(e) {
                    return function() {
                        return e._impl.rebuild(), e._runMethodsFromOptions()
                    }
                }(this))
            }, n.prototype.fullRebuild = function(e) {
                return null == e && (e = {}), this.replaceWith(this._impl._mediaData, s.obj.merge({
                    force: this._impl.playerType,
                    inPlace: !1,
                    transition: 'none'
                }, e))
            }, n.prototype.rebuildAs = function(e, t) {
                return null == t && (t = {}), this.fullRebuild(s.obj.merge(this._givenOptions, t, {
                    force: e,
                    transition: 'none'
                }))
            }, n.prototype.replace = function(e, t) {
                return null == t && (t = {}), this.replaceWith(e, s.obj.merge({
                    inlineOptionsOnly: !0
                }, t))
            }, n.prototype.replaceWith = function(e, t) {
                var n;
                return null == t && (t = {}), this.info('replaceWith', e, t), n = function(n) {
                    return function() {
                        var i, a, r;
                        return r = n._impl ? n._replaceWithMediaData : n._initWithMediaData, n._impl.trigger('beforereplace'), n._notReplacing(!1), n.hasData(!1), n._hasImpl(!1), n._initTime = new Date().getTime(), n.hasData(function() {
                            return n._hasDataTime = new Date().getTime(), n.embedded(function() {
                                return n._embeddedTime = new Date().getTime()
                            })
                        }), s.obj.isObject(e) ? r.call(n, e, t) : (i = s.mediaFromCache(e)) ? r.call(n, i, t) : (a = s.obj.merge({}, n._gatherOptions(), t), s.remote.media(e, function(e) {
                            return r.call(n, e, t)
                        }, a))
                    }
                }(this), this._hasImpl(function(e) {
                    return function() {
                        return e._notReplacing(n)
                    }
                }(this)), this
            }, n.prototype._replaceWithMediaData = function() {
                var e;
                return e = 1 <= arguments.length ? a.call(arguments, 0) : [], this._impl.commandQueueOpen.synchronize(function(t) {
                    return function(n) {
                        return t._replaceWithMediaDataQueuable.apply(t, e), t._notReplacing(n)
                    }
                }(this))
            }, n.prototype._replaceWithMediaDataQueuable = function(e, n) {
                var i, a, r, l, d, u, c, m, g, h, y, f, _, b;
                return (null == n && (n = {}), s.remote._convertEmbedSslToAkamai(e), n = s.obj.clone(n), this.info('_replaceWithMediaData', e, n), e.error) ? (this._displayServerError(e), void this.trigger('servererror')) : (null == n.playlistIndex ? this._inPlaylist(e.hashedId) && (this._playlistIndex = this._playlistIndexOf(e.hashedId)) : (this._playlistIndex = n.playlistIndex, delete n.playlistIndex), n.inlineOptionsOnly && (d = n.inlineOptionsOnly, delete n.inlineOptionsOnly), null != n.inPlace && (l = n.inPlace, delete n.inPlace), null != n.transition && (_ = n.transition, delete n.transition), null != n.transitionTime && (b = n.transitionTime, delete n.transitionTime), this.hasData(!1), this._hasImpl(!1), this._tracker.stopMonitoring(), this._clobberVideoBindings(), this._savedState = {}, this._suspended = !1, c = this._impl, 'function' == typeof c.wipeOutstandingAsyncFunctions && c.wipeOutstandingAsyncFunctions(), this._hashedId = e.hashedId, this._originalMediaData = e, this._mediaData = this._transformMediaData(e), this.data.media = e, this._givenOptions = n, this._opts = d ? this._gatherOptions({
                    only: 'inline'
                }) : this._gatherOptions(), this._embedOptions = null, c.freezeLastFrame(), m = new s.StopGo, f = function() {
                    return m.go()
                }, p() && !0 === this._opts.autoPlay && !c.isMuted() ? (i = c.engine, i ? (i.stopStreaming(), i.play().then(f)['catch'](f), setTimeout(f, 2e3)) : f()) : f(), !1 === (null == (g = this._mediaData.embed_options.plugin) || null == (h = g.passwordProtectedVideo) ? void 0 : h.on) && null != (null == (y = this._opts.plugin) ? void 0 : y.passwordProtectedVideo) && (this._opts.plugin.passwordProtectedVideo.on = !1), this.info('_opts', s.obj.clone(this._opts)), s.obj.merge(this._mediaData, this._opts.mediaData), this._inferPropertiesAfterMediaData(), r = 'notplayable' !== c.playerType && 'passwordprotected' !== c.playerType && ('html5' === c.playerType && (s.detect.iphone || s.detect.android || s.detect.ipad || s.detect.safari) || null != l && l), this.info('inPlace', r), u = t.choosePlayer(this.judyCtx(), this._mediaData, this._opts), this._playerPlugins = t.playerPlugins(this.judyCtx(), u, this._mediaData, this._opts), t.logWarnings(this.judyCtx(), u, this._mediaData, this._opts), r && (this.removePlugins(), c.stopStreaming()), this.plugin = null, this._pluginStopGos = {}, this._definePluginMethod(), this.hasPlugins(!1), c.commandQueueOpen.setQueue([]), this.removeSwatch(), this._implVersion += 1, a = this._implVersion, m(function(e) {
                    return function() {
                        var n;
                        return null != (n = c.engine) && n.destroy(), e._execPlugins(function() {
                            var n, i;
                            return e._implVersion === a ? (e.hasPlugins(!0), e.supportedPlayers = t.supportedPlayers(e.judyCtx(), e._mediaData.assets), i = s.PublicApi.classFor(u), e._impl = new i(e).init(), e._setupBindings(), e.grid = r ? e._impl.grid = c.grid : e._impl.setupGrid({
                                initDimensions: !1
                            }), 'function' == typeof(n = e._impl).transferStateFrom && n.transferStateFrom(c), e._hasImpl(!0), e.hasData(!0), e._resetTracker(), r || e._runMethodsFromOptions(), r ? e._replaceMode(function() {
                                return e._impl.initFrom(c)
                            }) : e._replaceMode(function() {
                                return e._embedWithTransitionFrom(c, _, {
                                    time: b
                                })
                            }), e.embedded(function() {
                                return e._notReplacing(!0)
                            }), r && e._runMethodsFromOptions(), e._allowContainerMatch() && e.width(e.containerWidth(), {
                                constrain: !0
                            }), s.timeout(e._impl.uuid + '.inject_json_ld', function() {
                                return e._injectJsonLd()
                            }), e.trigger('afterreplace'), s.timeout(e.uuid + '.prefetch_next_media', function() {
                                return e.prefetchNextMedia()
                            }, 2e3)) : void e.notice('replaceWith(): impl changed from', a, 'to', e._implVersion, 'not completing replacement')
                        })
                    }
                }(this)))
            }, n.prototype._embedWithTransitionFrom = function(e, t, n) {
                return null == t && (t = 'none'), this.info('_embedWithTransitionFrom', e, t), 'slide' === t || 'slideleft' === t ? (this.info('slideleft'), this._impl.embed(e), this._impl.embedded(function(t) {
                    return function() {
                        return e.slideOutLeft(n, function() {
                            return e.remove()
                        }), t._impl.slideInLeft(n, t._impl.trigger('transitiondone'))
                    }
                }(this))) : 'slideright' === t ? (this.info('slideright'), this._impl.embed(e), this._impl.embedded(function(t) {
                    return function() {
                        return e.slideOutRight(n, function() {
                            return e.remove()
                        }), t._impl.slideInRight(n, function() {
                            return t._impl.trigger('transitiondone')
                        })
                    }
                }(this))) : 'fade' === t ? (this.info('fade'), 'transparent' !== e._opts.wmode && (e.grid.center.style.backgroundColor = '#000'), null != n.time && (n.time = u(n.time / 2)), e.fadeOut(n, function(t) {
                    return function() {
                        var i;
                        return e.remove(), 'transparent' !== t._impl._opts.wmode && null != (i = t._impl.grid) && (i.center.style.backgroundColor = '#000'), t._impl.embed(e), t._impl.embedded(function() {
                            return t._impl.fadeIn(n, function() {
                                var e;
                                return null != (e = t._impl) && (e.grid.center.style.backgroundColor = ''), t._impl.trigger('transitiondone')
                            })
                        })
                    }
                }(this))) : 'crossfade' === t ? (this.info('crossfade'), e.grid && s.elem.style(e.grid.root, {
                    position: 'absolute',
                    zIndex: 0
                }), s.elem.style(this._impl.grid.root, {
                    zIndex: 1
                }), this._impl.embed(e), this._impl.embedded(function(t) {
                    return function() {
                        return t._impl.fadeIn(n, function() {
                            return e.remove(), s.elem.style(t._impl.grid.root, {
                                zIndex: ''
                            }), t._impl.trigger('transitiondone')
                        })
                    }
                }(this))) : (this.info('no transition'), this._impl.embed(e), e.remove())
            }, n.prototype._clobberVideoBindings = function() {
                var e, t, n, i;
                for (e in t = this._bindings, n = [], t) i = t[e], 'afterreplace' === e || 'beforereplace' === e || 'all' === e ? n.push(void 0) : n.push(this.unbind(e));
                return n
            }, n.prototype._replaceMode = function(e) {
                return this.info('_replaceMode', !0), this._impl._replacing = !0, e(), this._impl.embedded(function(e) {
                    return function() {
                        return e._impl._replacing = !1, e.info('_replaceMode', !1)
                    }
                }(this))
            }, n.prototype.remove = function() {
                var e, t, n, i, a, r, l, d;
                return this.info('remove'), this.trigger('down'), this.trigger('beforeremove'), this._freeEmbedSlot(), null != (e = this.elem()) && null != (t = e.mux) && 'function' == typeof t.destroy && t.destroy(), this.removeSwatch(), this._implExec('remove', {
                    trigger: !1
                }), this._hasImpl(!1), this._removeJsonLd(), null != (n = this.popover) && n.remove(), null != (i = this._impl) && i.stopStreaming(), null != (a = this._intersectionObserver) && a.disconnect(), s.elem.unbindAll(this._foamDummyElem), s.elem.remove(this._foamDummyElem), null != (r = s.eventLoop) && r.remove(this.uuid), s.clearTimeouts(this.uuid), this._unbindListeners(), s.elem.remove(this.chrome), s.removeData(['video', this.uuid]), this.trigger('afterremove'), this._bindings = {}, this.container.wistiaApi = 'removed', this._impl = null, null != (l = window.__wistiaStores) && (l[this.uuid] = null), null == (d = window.__wistiaStores) ? void 0 : delete d[this.uuid]
            }, n.prototype.removeSwatch = function() {
                var e;
                if (e = this.container.querySelector('.wistia_swatch'), e) return s.elem.remove(e)
            }, n.prototype.fullRemove = function() {
                var e, t;
                return t = this._embedContainer, e = this.container, this.remove(), s.elem.remove(t), s.elem.remove(e), this.container = this._embedContainer = null, this
            }, n.prototype.isRemoved = function() {
                return !s.data(['video', this.uuid])
            }, n.prototype._unbindListeners = function() {
                if (s.elem.unbindAllInside(this.chrome), this._throttleTriggerViewport && s.elem.unbind(window, 'scroll', this._throttleTriggerViewport), this._doResize) return s.elem.unbind(window, 'resize', this._doResize)
            }, n.prototype._saveState = function() {
                var e;
                return this._savedState = {
                    state: this.state(),
                    time: this.time(),
                    volume: this.volume(),
                    inFullscreen: this.inFullscreen(),
                    uuid: null == (e = this._impl) ? void 0 : e.uuid
                }
            }, n.prototype.suspend = function() {
                if (!this._suspended) return this._saveState(), this.info('suspend', s.obj.clone(this._savedState)), this.pause(), this.suppressPlay(!0), this.cancelFullscreen(), this._suspended = !0, this._suspendPlayBinding = function(e) {
                    return function() {
                        return e.pause()
                    }
                }(this), this._suspendSeekBinding = function(e) {
                    return function() {
                        return e.pause(), e.time(e._savedState.time)
                    }
                }(this), this.bind('play', this._suspendPlayBinding), this.bind('seek', this._suspendSeekBinding), this.trigger('suspendstatechange', !0), this
            }, n.prototype.resume = function(e) {
                var t, n;
                if (null == e && (e = {}), !!this._suspended) return (n = s.obj.merge({}, this._savedState, e), this.info('resume', s.obj.clone(n)), this._suspended = !1, this.trigger('suspendstatechange', !1), this.unbind('play', this._suspendPlayBinding), this.unbind('seek', this._suspendSeekBinding), n.uuid !== (null == (t = this._impl) ? void 0 : t.uuid)) ? this : (this.suppressPlay(!1), this.volume(n.volume), 0 < n.time && ('ended' === n.state ? 'flash' === this.playerType && 1800 < this.duration() ? this.time(n.time - 10) : this.time(n.time - 1) : this.time(n.time)), 'playing' === n.state && this.play(), this)
            }, n.prototype._setupBindings = function() {
                return this.bind('afterend', function(e) {
                    return function() {
                        return e._suspended ? e.bind('suspendstatechange', function(t) {
                            if (!1 === t) return e._nextEmbedOrPlaylistLoop(), e.unbind
                        }) : e._nextEmbedOrPlaylistLoop()
                    }
                }(this)), this.bind('widthchange', function(e) {
                    return function() {
                        var t, n;
                        return null != (t = e._impl) && (t._width = e._width = e.width()), null == (n = e._impl) ? void 0 : n._videoWidth = e._videoWidth = e.videoWidth()
                    }
                }(this)), this.bind('heightchange', function(e) {
                    return function() {
                        return e._impl._height = e._height = e.height(), e._impl._videoHeight = e._videoHeight = e.videoHeight()
                    }
                }(this)), window.IntersectionObserver ? (this.looksUp() && (this.inViewport(this._isInViewportNow()), this.inViewport() ? this.trigger('enterviewport') : this.trigger('leaveviewport')), this._intersectionObserver = new IntersectionObserver(function(e) {
                    return function(t) {
                        return t[0].isIntersecting ? (e.trigger('enterviewport'), e.inViewport(!0)) : (e.trigger('leaveviewport'), e.inViewport(!1))
                    }
                }(this)), this._intersectionObserver.observe(this.container)) : top === self ? (null == this._throttleTriggerViewport && (this._throttleTriggerViewport = s.util.throttle(300, function(e) {
                    return function() {
                        var t;
                        return (t = e._isInViewportNow(), t && !e._inViewport) ? (e._inViewport = !0, e.inViewport(!0), e.trigger('enterviewport')) : !t && e._inViewport ? (e._inViewport = !1, e.inViewport(!1), e.trigger('leaveviewport')) : void 0
                    }
                }(this))), s.elem.rebind(window, 'scroll', this._throttleTriggerViewport), this.bind('initembed', this._throttleTriggerViewport), this.bind('up', this._throttleTriggerViewport), this.looksUp() && this._throttleTriggerViewport()) : (this._inViewport = !0, this.inViewport(!0)), s.elem.rebind(window, 'resize', this._doResize), this.bind('sphericaltap', function(e) {
                    return window.location = e
                })
            }, n.prototype._nextEmbedOrPlaylistLoop = function() {
                return this.nextVideo() ? this.embedNext() : this._attrs.playlistLoop ? (this.info('playlistLoop'), this.embedIndex(0, {
                    autoPlay: !0
                })) : void 0
            }, n.prototype._isInViewportNow = function() {
                var e, t, n, i, a;
                return this.down() || this.looksDown() ? !1 : window.IntersectionObserver || top === self ? (e = s.elem.offset(this.container), n = e.top, t = n + s.elem.height(this.container), a = s.util.scrollTop(), i = s.util.scrollTop() + s.elem.height(window), n >= a && n < i || t >= a && t < i || n <= a && t >= i) : !0
            }, n.prototype._pauseEventLoop = function() {
                var e;
                if (s.eventLoop.pause(this.uuid), null == (e = this._impl) ? void 0 : e.uuid) return s.eventLoop.pause(this._impl.uuid)
            }, n.prototype._unpauseEventLoop = function() {
                var e;
                if (s.eventLoop.unpause(this.uuid), null == (e = this._impl) ? void 0 : e.uuid) return s.eventLoop.unpause(this._impl.uuid)
            }, n.prototype.playlistIndex = function() {
                return this._playlistIndexOf(this.hashedId())
            }, n.prototype.nextVideo = function() {
                return 0 <= this.playlistIndex() ? this._playlist[this.playlistIndex() + 1] || null : null
            }, n.prototype.previousVideo = function() {
                return 0 < this.playlistIndex() ? this._playlist[this.playlistIndex() - 1] || null : null
            }, n.prototype._playlistIndexOf = function(e) {
                var t, n, i, a;
                for (t = n = 0, i = this._playlist.length; 0 <= i ? n <= i : n >= i; t = 0 <= i ? ++n : --n)
                    if ((null == (a = this._playlist[t]) ? void 0 : a.hashedId) === e) return t;
                return -1
            }, n.prototype._inPlaylist = function(e) {
                return 0 <= this._playlistIndexOf(e)
            }, n.prototype._setTransitionOptions = function(e) {
                if (e.transition || (e.transition = this._opts.playlistTransition || 'fade'), e.transitionTime || (e.transitionTime = this._opts.playlistTransitionTime), e.playlistIndex && 'slide' === e.transition) return e.playlistIndex >= this._playlistIndex ? e.transition = 'slideleft' : e.transition = 'slideright'
            }, n.prototype.embedNext = function(e) {
                var t, n;
                return n = this.nextVideo(), this.info('embedNext', n), t = s.obj.merge({
                    autoPlay: !0
                }, n.options, e), t.playlistIndex = this._playlistIndex + 1, this._setTransitionOptions(t), this.replaceWith(n.hashedId, t)
            }, n.prototype.embedPrevious = function(e) {
                var t, n;
                return n = this.previousVideo(), this.info('embedPrevious', n), t = s.obj.merge({
                    autoPlay: !0
                }, n.options, e), t.playlistIndex = this._playlistIndex - 1, this.replaceWith(n.hashedId, t)
            }, n.prototype.embedIndex = function(e, t) {
                var n, i;
                return i = this._playlist[e], this.info('embedIndex', e, i), n = s.obj.merge({
                    autoPlay: !0
                }, i.options, t), n.playlistIndex = e, this.replaceWith(i.hashedId, n)
            }, n.prototype.addToPlaylist = function(e, t, n) {
                var i, a, r, l, d, p, u;
                for (null == t && (t = {}), null == n && (n = {}), null == this._playlist && (this._playlist = []), d = s.util.toArray(e), (r = 0, l = d.length); r < l; r++) a = d[r], i = {
                    hashedId: a,
                    options: t
                }, n = s.obj.clone(n), n.after ? n.detect = function(e) {
                    return e.hashedId === n.after
                } : n.before && (n.detect = function(e) {
                    return e.hashedId === n.before
                }), this.info('addToPlaylist', i, n), s.util.insertIntoArray(this._playlist, i, n), a === (null == (p = this.nextVideo()) ? void 0 : p.hashedId) ? this.prefetchMedia(a, t) : a === (null == (u = this.previousVideo()) ? void 0 : u.hashedId) && this.prefetchMedia(a, t);
                return this.info('updated _playlist', s.obj.clone(this._playlist)), this._playlist
            }, n.prototype.prefetchNextMedia = function() {
                var e;
                if (!this._opts._inLegacyPlaylist && (e = this.nextVideo())) return this.prefetchMedia(e.hashedId, e.options)
            }, n.prototype.prefetchMedia = function(e, n) {
                return this.info('@prefetchMedia', e), s.remote.media(e, function(i) {
                    return function(a) {
                        var r;
                        return i.info('prefetched', e), i._prefetchPluginScripts(a, n), r = t.bestUsableEngine(i.judyCtx(), a, n), s.asyncRequire(r)
                    }
                }(this), n)
            }, n.prototype._prefetchPluginScripts = function(e, t) {
                var n, i, a, r, d;
                if (this.info('@_prefetchPluginScripts for', e, t), a = this._gatherOptions({
                        givenOptions: t,
                        mediaData: e,
                        hashedId: e.hashedId,
                        container: this.container
                    }), r = s.plugin._scriptsFromOptions(a), r = function() {
                        var e, t, n;
                        for (n = [], e = 0, t = r.length; e < t; e++) d = r[e], s.plugin._prefetched[d.src] || n.push(d);
                        return n
                    }(), 0 === r.length) return void this.info('@_prefetchPluginScripts: no need to fetch plugins');
                for (n = 0, i = r.length; n < i; n++) d = r[n], s.plugin._prefetched[d.src] = 'fetching';
                return this.info('prefetching scripts', r), s.remote.scripts(r, function(e) {
                    return function() {
                        var t, n;
                        for (t = 0, n = r.length; t < n; t++) d = r[t], s.plugin._prefetched[d.src] = 'fetched';
                        return e.info('prefetched scripts', r)
                    }
                }(this))
            }, n.prototype.addPlugin = function(e, t) {
                return null == t && (t = {}), this.info('addPlugin', e, t), new r(function(n) {
                    return function(i) {
                        return n._hasImpl(function() {
                            return n.hasPlugin(e) || s.plugin._inject(n, e, t), n.plugin(e).then(function(e) {
                                return i(e)
                            })
                        })
                    }
                }(this))
            }, n.prototype.hasPlugin = function(e) {
                return !!this.plugin[e]
            }, n.prototype.turnOffPluginApis = function() {
                var e, t, n, i, a;
                for (n in this.info('turnOffPluginApis'), i = this.plugin, a = [], i) t = i[n], a.push('function' == typeof(e = this._pluginStopGos)[n] ? e[n](!1) : void 0);
                return a
            }, n.prototype.removePlugin = function(t) {
                var n, e, i;
                if (e = this.plugin[t], !!e) {
                    try {
                        'function' == typeof e.remove && e.remove()
                    } catch (e) {
                        n = e, setTimeout(function() {
                            return function() {
                                throw n
                            }
                        }(this), 0)
                    }
                    return delete this.plugin[t], (null == (i = this._impl.plugin) ? void 0 : i[t]) && delete this._impl.plugin[t], e.uuid && this.plugins && (delete this.plugins[this.uuid], s.removeData(['plugins', t, this.uuid, e.uuid])), this.fit(), this.trigger('pluginremoved', t)
                }
            }, n.prototype.removePlugins = function() {
                var e, t, n, i;
                for (t in this.info('removePlugins'), n = this.plugin, i = [], n) e = n[t], i.push(this.removePlugin(t));
                return i
            }, n.prototype.containerWidth = function() {
                return this._attrs.rawEmbed ? s.elem.width(this._embedContainer) : s.util.winWidth()
            }, n.prototype.containerHeight = function() {
                return this._attrs.rawEmbed ? s.elem.height(this._embedContainer) : s.util.winHeight()
            }, n.prototype._goToDownState = function() {
                return this.info('_goToDownState'), this._stateBeforeDown = this._lastState, this.up(!1), this.down(!0), 'flash' !== this.embedType && this.pause(), this.ready(!1), this.trigger('down')
            }, n.prototype._goToUpState = function() {
                var e;
                return this.info('_goToUpState'), this.down(!1), this._ignoreUp = !0, this._doSizing(), this._ignoreUp = !1, this.up(!0), this.ready(!1), 'flash' === this.embedType ? this.rebuild() : (this.fit(), null != (e = this._impl) && e.checkForReady(), 'playing' === this._stateBeforeDown && this.play()), this.trigger('up')
            }, n.prototype._checkDownState = function() {
                var e;
                return (e = this.looksDown(), this.up() && e) ? (this.info('moving to down state'), this._goToDownState()) : this.down() && !e ? (this.info('moving to up state'), this._goToUpState()) : void 0
            }, n.prototype._removeHandleIfGoneFromDOM = function() {
                return !!this.embedded() && (this.elem() ? this._embedContainer && !this._embedContainer.parentNode && (this.warn('container removed from DOM', this._embedContainer.id), this.remove(), !0) : (this.warn('video element removed from DOM', this._embedContainer.id), this.remove(), !0))
            }, n.prototype._doFoam = function() {
                var e, t, n, i, a, r, l, d, p, c, m;
                if (null == this._parentBoxSizing && (this._parentBoxSizing = s.elem.style(this._embedContainer.parentNode, 'box-sizing')), this.popover ? (m = s.elem.width(window), c = s.elem.height(window), p = m / c, d = Math.min(m, c), t = 500 < d ? 160 : 0.2 > Math.abs(p - this.aspect()) ? 0.2 * d : 0.1 * d, l = p > this.aspect() ? u((c - t) * this.aspect()) : m - t) : 'border-box' === this._parentBoxSizing ? (!this._foamDummyElem && (this._foamDummyElem = s.elem.fromObject({
                        class: 'wistia_video_foam_dummy',
                        "data-source-container-id": this._embedContainer.id,
                        style: {
                            border: 0,
                            display: 'block',
                            height: 0,
                            margin: 0,
                            padding: 0,
                            position: 'static',
                            visibility: 'hidden',
                            width: 'auto'
                        }
                    }), s.elem.before(this._embedContainer, this._foamDummyElem)), l = s.elem.width(this._foamDummyElem)) : l = s.elem.width(this._embedContainer.parentNode), !isNaN(l) && (this._lastParentWidth !== l || !this._didFoam)) return this._didFoam = !0, r = l, a = r - this.extraWidth(), i = this.heightForWidth(a), n = i + this.extraHeight(), e = this.videoFoam(), e.maxHeight && n > e.maxHeight && (n = e.maxHeight, i = n - this.extraHeight(), a = this.widthForHeight(i), r = a + this.extraWidth()), e.maxWidth && r > e.maxWidth && (r = e.maxWidth, a = r - this.extraWidth(), i = this.heightForWidth(a), n = i + this.extraHeight()), e.minHeight && n < e.minHeight && (n = e.minHeight, i = n - this.extraHeight(), a = this.widthForHeight(i), r = a + this.extraWidth()), e.minWidth && r < e.minWidth && (r = e.minWidth, a = r - this.extraWidth(), i = this.heightForWidth(a), n = i + this.extraHeight()), this.info('videoFoam set width', r), this.width(r, {
                    constrain: !0
                }), this._lastParentWidth = l
            }, n.prototype._allowFoam = function() {
                var e;
                return this._hasImpl() && this.grid && (this.up() || this._ignoreUp) && this.looksUp() && this._attrs.rawEmbed && (this._attrs.videoFoam || (null == (e = this.popover) ? void 0 : e.isResponsive()))
            }, n.prototype._allowContainerMatch = function() {
                return (this.up() || this._ignoreUp) && !this._opts.dontMonitorSize && !this.inFullscreen()
            }, n.prototype._doContainerMatch = function() {
                var e, t;
                if (t = this.containerWidth(), e = this.containerHeight(), this._lastWidth !== t && (this.notice('container width changed to ' + t + ', matching'), this.width(t, {
                        dontChangeContainer: !0
                    }), this.info('_doContainerMatch set width', t), this.trigger('widthchange', t, this._lastWidth), this._lastWidth = t), this._lastHeight !== e) return this.notice('container height changed to ' + e + ', matching'), this.height(e, {
                    dontChangeContainer: !0
                }), this.trigger('heightchange', e, this._lastHeight), this._lastHeight = e
            }, n.prototype.monitor = function() {
                return this.info('monitor'), this._lastWidth = this._attrs.startingWidth, this._lastHeight = this._attrs.startingHeight, this._lastParentWidth = this.width(), this._didFoam = !1, this._hasImpl(function(e) {
                    return function() {
                        return s.eventLoop.add(e.uuid + '.monitor', 500, e._doMonitor)
                    }
                }(this))
            }, n.prototype._doMonitor = function() {
                if (!this._removeHandleIfGoneFromDOM()) return this._checkDownState(), this._doSizing()
            }, n.prototype._doSizing = function() {
                return this.popover ? this.popover.fixedSizeTooBigForWindow() ? this._doFoam() : this._opts.popoverSize ? (this._lastWidth = this.width(), this._lastHeight = this.height(), this.width(this._popoverSize().width), this.height(this._popoverSize().height)) : this._doFoam() : this._allowFoam() ? this._doFoam() : this._allowContainerMatch() ? this._doContainerMatch() : void 0
            }, n.prototype.looksDown = function() {
                return !this._embedContainer || !s.elem.inDom(this._embedContainer) || s.elem.isHidden(this._embedContainer)
            }, n.prototype.looksUp = function() {
                return !this.looksDown()
            }, n.prototype._doResize = function() {
                return 'function' == typeof this._throttleTriggerViewport && this._throttleTriggerViewport(), this._debounceDoMonitor || this.embedded(function(e) {
                    return function() {
                        return s.util.requestAnimationFrame(function() {
                            return e._doMonitor(), e._debounceDoMonitor = !1
                        })
                    }
                }(this)), this._debounceDoMonitor = !0
            }, n.prototype._definePluginMethod = function() {
                return this.plugin ? void 0 : this.plugin = function(e) {
                    return function(t, n) {
                        var i;
                        return (i = e._pluginStopGos[t]) || (i = e._pluginStopGos[t] = new s.StopGo, i(!!e.plugin[t], e.plugin[t])), n ? i(function() {
                            return n(e.plugin[t])
                        }) : i
                    }
                }(this)
            }, n.prototype.videoFoam = function(e) {
                return null == e ? this._attrs.videoFoam || !1 : (this.info('videoFoam', e), this._attrs.videoFoam = e, this.monitor(), e)
            }, n.prototype._formattedDurationToSeconds = function(e) {
                return s.TimeHelper.isValidHumanDuration(e) ? s.TimeHelper.humanDurationToSeconds(e) : s.TimeHelper.isValidIso8601(e) ? s.TimeHelper.iso8601ToSeconds(e) : e
            }, n.prototype._transformAndUpdateMediaData = function() {
                var e;
                return this._mediaData = this._transformMediaData(this._originalMediaData), null == (e = this._impl) ? void 0 : e._mediaData = this._mediaData
            }, n.prototype._mediaDataTransforms = function() {
                var e;
                return e = [], s.remote._isEmbedSslMedia(this._originalMediaData) || this._useEmbedSslHost && e.push(function(e) {
                    var t, n, i, a, r;
                    for (a = e.assets, n = 0, i = a.length; n < i; n++) t = a[n], t.url && (r = s.url.parse(t.url), r.host = 'embed-ssl.wistia.com', r.protocol = 'https:', t.url = r.absolute());
                    return e
                }), e
            }, n.prototype._transformMediaData = function(e, t) {
                var n, i, a, r;
                for (null == t && (t = this._mediaDataTransforms()), a = s.obj.clone(e), (n = 0, i = t.length); n < i; n++) r = t[n], a = r(a);
                return a
            }, n.prototype.specialBind = function() {
                var e, n, i, r, t, l;
                return n = arguments[0], e = 2 <= arguments.length ? a.call(arguments, 1) : [], 'crosstime' === n ? (r = e[0], i = e[1], this.onCrossTime(r, i), function(e) {
                    return function() {
                        return e.unbindOnCrossTime(r, i)
                    }
                }(this)) : 'betweentimes' === n && (t = e[0], l = e[1], i = e[2], this.betweenTimes(t, l, i), function(e) {
                    return function() {
                        return e.unbindBetweenTimes(t, l, i)
                    }
                }(this))
            }, n.prototype.specialUnbind = function() {
                var e, n, i, r, t, l;
                return n = arguments[0], e = 2 <= arguments.length ? a.call(arguments, 1) : [], 'crosstime' === n ? (r = e[0], i = e[1], this.unbindOnCrossTime(r, i), !0) : 'betweentimes' === n && (t = e[0], l = e[1], i = e[2], this.unbindBetweenTimes(t, l, i), !0)
            }, n.prototype.onCrossTime = function(e, t) {
                var n, i, a, r, l, d, p;
                if (!/^(\d+\.)?\d+$/.test(e)) throw 'onCrossTime: Expected first argument to be a number';
                if ('function' != typeof t) throw 'onCrossTime: Expected second argument to be a function';
                return null == this._onCrossTimeBindings && (this._onCrossTimeBindings = {}), null == (i = this._onCrossTimeBindings)[e] && (i[e] = []), p = this.uuid + '.' + s.uniqId('after_time_'), n = this.time() > e, a = function(i) {
                    return function() {
                        var a;
                        return i.time() < e ? r() : !n && (n = !0, a = t.call(i), a === i.unbind) ? i.unbindOnCrossTime(e, t) : void 0
                    }
                }(this), r = function(t) {
                    return function() {
                        return t.time() >= e ? (s.clearTimeouts(p), a()) : n ? void 0 : s.timeout(p, a, 1e3 * (e - t.time()))
                    }
                }(this), l = function(t) {
                    return function() {
                        if (t.time() < e) {
                            if (n = !1, 2 > e - t.time()) return r()
                        } else if (!n) return a()
                    }
                }(this), d = function() {
                    return function() {
                        return s.clearTimeouts(p)
                    }
                }(this), this.bind('play', l), this.bind('timechange', l), this.bind('pause', d), this.bind('end', d), this.bind('waiting', d), 'playing' !== this.state() || n || l(), this._onCrossTimeBindings[e].push({
                    fn: t,
                    setupTimeoutFromNowIfClose: l,
                    suspendTimeoutIndefinitely: d
                }), this
            }, n.prototype.unbindOnCrossTime = function(e, t) {
                var n, i, a, r, l, s;
                if (!(this._onCrossTimeBindings && this._onCrossTimeBindings[e])) return this;
                for (n = null, a = 0, s = this._onCrossTimeBindings[e], (r = 0, l = s.length); r < l; r++) {
                    if (i = s[r], i.fn === t) {
                        n = i;
                        break
                    }
                    a += 1
                }
                return n ? (this.unbind('play', n.setupTimeoutFromNowIfClose), this.unbind('timechange', n.setupTimeoutFromNowIfClose), this.unbind('pause', n.suspendTimeoutIndefinitely), this.unbind('end', n.suspendTimeoutIndefinitely), this.unbind('waiting', n.suspendTimeoutIndefinitely), this._onCrossTimeBindings[e].splice(a, 1), 0 === this._onCrossTimeBindings[e].length && delete this._onCrossTimeBindings[e], this) : this
            }, n.prototype.betweenTimes = function(e, n, i) {
                var t, a, r, l;
                if (!(/^(\d+\.)?\d+$/.test(e) && /^(\d+\.)?\d+$/.test(n))) throw 'betweenTimes: Expected first two arguments to be numbers';
                if ('function' != typeof i) throw 'betweenTimes: Expected second argument to be a function';
                return r = e + '-' + n, null == this._betweenTimeBindings && (this._betweenTimeBindings = {}), null == (t = this._betweenTimeBindings)[r] && (t[r] = []), l = !1, a = function(a) {
                    return function() {
                        var r, s;
                        if (s = a.time(), e <= s && s < n && !l ? (l = !0, r = i.call(a, l)) : !(e <= s && s < n) && l && (l = !1, r = i.call(a, l)), r === a.unbind) return a.unbindBetweenTimes(e, n, i)
                    }
                }(this), this.onCrossTime(e, a), this.onCrossTime(n, a), this.bind('timechange', a), a(), this._betweenTimeBindings[r].push({
                    fn: i,
                    onTimechange: a
                }), this
            }, n.prototype.unbindBetweenTimes = function(e, t, n) {
                var i, a, r, l, s, d, p;
                if (p = e + '-' + t, !this._betweenTimeBindings[p]) return this;
                for (i = null, r = 0, d = this._betweenTimeBindings[p], (l = 0, s = d.length); l < s; l++) {
                    if (a = d[l], a.fn === n) {
                        i = a;
                        break
                    }
                    r += 1
                }
                return i ? (this.unbindOnCrossTime(e, i.onTimechange), this.unbindOnCrossTime(t, i.onTimechange), this.unbind('timechange', i.onTimechange), this._betweenTimeBindings[p].splice(r, 1), 0 === this._betweenTimeBindings[p].length && delete this._betweenTimeBindings[p], this) : this
            }, n.prototype.aspect = function() {
                return this._implGet('aspect', 0)
            }, n.prototype.asset = function() {
                return this._implGet.apply(this, ['asset', null].concat(a.call(arguments)))
            }, n.prototype.assets = function() {
                return this._implGet.apply(this, ['assets', null].concat(a.call(arguments)))
            }, n.prototype.bigPlayButtonEnabled = function() {
                return this._implSetOrGet.apply(this, ['bigPlayButtonEnabled', !1].concat(a.call(arguments)))
            }, n.prototype.bigPlayButtonTimeEnabled = function() {
                return this._implSetOrGet.apply(this, ['bigPlayButtonTimeEnabled', !1].concat(a.call(arguments)))
            }, n.prototype.cancelOverlay = function() {
                return this._implPromise.apply(this, ['cancelOverlay'].concat(a.call(arguments)))
            }, n.prototype.cancelFullscreen = function() {
                return this._implExec('cancelFullscreen')
            }, n.prototype.captureCurrentFrame = function() {
                return this._implGet.apply(this, ['captureCurrentFrame', null].concat(a.call(arguments)))
            }, n.prototype.controlScaling = function() {
                return this._implSetOrGet.apply(this, ['controlScaling', 'auto'].concat(a.call(arguments)))
            }, n.prototype.createControl = function() {
                return this._implGet.apply(this, ['createControl', null].concat(a.call(arguments)))
            }, n.prototype.defineOverlay = function() {
                return this._implExec.apply(this, ['defineOverlay'].concat(a.call(arguments)))
            }, n.prototype.destroyControl = function() {
                return this._implExec.apply(this, ['destroyControl'].concat(a.call(arguments)))
            }, n.prototype.duration = function() {
                return this._implGet('duration', null)
            }, n.prototype.embedded = function() {
                return this._implSetOrGet.apply(this, ['embedded', !1].concat(a.call(arguments)))
            }, n.prototype.embedOptions = function() {
                return this._hasImpl() ? this._implGet.apply(this, ['embedOptions', {}].concat(a.call(arguments))) : this._embedOptions ? this._embedOptions : this._embedOptions = this._gatherOptions()
            }, n.prototype.enterInputContext = function() {
                return this._implExec.apply(this, ['enterInputContext'].concat(a.call(arguments)))
            }, n.prototype.eventKey = function() {
                return this._tracker.eventKey() || null
            }, n.prototype.exitInputContext = function() {
                return this._implExec.apply(this, ['exitInputContext'].concat(a.call(arguments)))
            }, n.prototype.extraHeight = function() {
                return this._implGet('extraHeight', 0)
            }, n.prototype.extraWidth = function() {
                return this._implGet('extraWidth', 0)
            }, n.prototype.fit = function() {
                return this._implExec('fit')
            }, n.prototype.fullscreenButtonEnabled = function() {
                return this._implSetOrGet.apply(this, ['fullscreenButtonEnabled', !1].concat(a.call(arguments)))
            }, n.prototype.getBuffered = function() {
                return this._implGet('getBuffered', [])
            }, n.prototype.getFocusedChapter = function() {
                return this._implGet('getFocusedChapter', null)
            }, n.prototype.getInputContext = function() {
                return this._implGet('getInputContext', [])
            }, n.prototype.getOverlays = function() {
                return this._implGet('getOverlays', {})
            }, n.prototype.getRegion = function() {
                return this._implGet.apply(this, ['getRegion', null].concat(a.call(arguments)))
            }, n.prototype.getVideoElement = function() {
                return this._implGet('getVideoElement', null)
            }, n.prototype.hasData = function() {
                return this._implSetOrGet.apply(this, ['hasData', !1].concat(a.call(arguments)))
            }, n.prototype.height = function() {
                return this._implSetOrGet.apply(this, ['height', null].concat(a.call(arguments)))
            }, n.prototype.heightForWidth = function() {
                return this._implGet.apply(this, ['heightForWidth', null].concat(a.call(arguments)))
            }, n.prototype.hideControls = function() {
                return this._implExec.apply(this, ['hideControls', null].concat(a.call(arguments)))
            }, n.prototype.humanDuration = function() {
                return s.TimeHelper.secondsToHumanDuration(this.duration())
            }, n.prototype.ieSizeHack = function() {
                return this._implExec('ieSizeHack')
            }, n.prototype.inFullscreen = function() {
                return this._implGet('inFullscreen', !1)
            }, n.prototype.inSilentPlaybackMode = function() {
                return this._implGet('inSilentPlaybackMode', !1)
            }, n.prototype.isMuted = function() {
                return this._implGet('isMuted')
            }, n.prototype.lastPauseInfo = function() {
                return this._implGet('lastPauseInfo', {})
            }, n.prototype.lastPlayInfo = function() {
                return this._implGet('lastPlayInfo', {})
            }, n.prototype.layout = function() {
                return this._implSetOrGet.apply(this, ['layout', 'primary'].concat(a.call(arguments)))
            }, n.prototype.look = function() {
                return this._implSetOrGet.apply(this, ['look', {}].concat(a.call(arguments)))
            }, n.prototype.mp4Asset = function() {
                return this._implGet.apply(this, ['mp4Asset', null].concat(a.call(arguments)))
            }, n.prototype.mute = function() {
                return this._implExec('mute')
            }, n.prototype.playerLanguage = function() {
                return this._implSetOrGet.apply(this, ['playerLanguage', 'en-US'].concat(a.call(arguments)))
            }, n.prototype.name = function() {
                return this._implGet('name', '')
            }, n.prototype.originalAsset = function() {
                return this._implGet.apply(this, ['originalAsset', null].concat(a.call(arguments)))
            }, n.prototype.pause = function() {
                return this._implExec('pause')
            }, n.prototype.percentWatched = function() {
                return this._implGet('percentWatched', 0)
            }, n.prototype.playbarControlEnabled = function() {
                return this._implSetOrGet.apply(this, ['playbarControlEnabled', !1].concat(a.call(arguments)))
            }, n.prototype.play = function() {
                return this._implExec('play')
            }, n.prototype.playbackRate = function() {
                return this._implSetOrGet.apply(this, ['playbackRate', 1].concat(a.call(arguments)))
            }, n.prototype.playbackRateControlEnabled = function() {
                return this._implSetOrGet.apply(this, ['playbackRateControlEnabled', !1].concat(a.call(arguments)))
            }, n.prototype.playerColor = function() {
                return this._implSetOrGet.apply(this, ['playerColor', '636155'].concat(a.call(arguments)))
            }, n.prototype.playerBackgroundColor = function() {
                return this._implSetOrGet.apply(this, ['playerBackgroundColor', '000000'].concat(a.call(arguments)))
            }, n.prototype.requestFullscreen = function() {
                return this._implExec('requestFullscreen')
            }, n.prototype.requestOverlay = function() {
                return this._implPromise.apply(this, ['requestOverlay'].concat(a.call(arguments)))
            }, n.prototype.qualityControlEnabled = function() {
                return this._implSetOrGet.apply(this, ['qualityControlEnabled', !1].concat(a.call(arguments)))
            }, n.prototype.ready = function() {
                return this._implSetOrGet.apply(this, ['ready', !1].concat(a.call(arguments)))
            }, n.prototype.releaseChromeless = function() {
                return this._implExec.apply(this, ['releaseChromeless'].concat(a.call(arguments)))
            }, n.prototype.releaseControls = function() {
                return this._implExec.apply(this, ['releaseControls'].concat(a.call(arguments)))
            }, n.prototype.requestChromeless = function() {
                return this._implExec.apply(this, ['requestChromeless'].concat(a.call(arguments)))
            }, n.prototype.requestControls = function() {
                return this._implExec.apply(this, ['requestControls'].concat(a.call(arguments)))
            }, n.prototype.secondsWatched = function() {
                return this._implGet('secondsWatched', 0)
            }, n.prototype.secondsWatchedVector = function() {
                return this._implGet('secondsWatchedVector', [])
            }, n.prototype.selectableQualities = function() {
                return this._implGet('selectableQualities', [])
            }, n.prototype.selectedQuality = function() {
                return this._implGet('selectedQuality', [])
            }, n.prototype.setFocusedChapter = function() {
                return this._implSetOrGet.apply(this, ['setFocusedChapter', null].concat(a.call(arguments)))
            }, n.prototype.settingsControlEnabled = function() {
                return this._implSetOrGet.apply(this, ['settingsControlEnabled', !1].concat(a.call(arguments)))
            }, n.prototype.showControls = function() {
                return this._implExec.apply(this, ['showControls', null].concat(a.call(arguments)))
            }, n.prototype.smallPlayButtonEnabled = function() {
                return this._implSetOrGet.apply(this, ['smallPlayButtonEnabled', !1].concat(a.call(arguments)))
            }, n.prototype.state = function() {
                return this._implGet('state', 'beforeplay')
            }, n.prototype.stillUrl = function() {
                return this._implGet.apply(this, ['stillUrl', null].concat(a.call(arguments)))
            }, n.prototype.suppressPlay = function() {
                return this._implSetOrGet.apply(this, ['suppressPlay', this].concat(a.call(arguments)))
            }, n.prototype.thumbnailAssets = function() {
                return this._implGet('thumbnailAssets', [])
            }, n.prototype.time = function() {
                var e, n;
                return n = arguments[0], e = 2 <= arguments.length ? a.call(arguments, 1) : [], null == n ? this._implSetOrGet('time', 0) : this._implSetOrGet.apply(this, ['time', 0, this._formattedDurationToSeconds(n)].concat(a.call(e)))
            }, n.prototype.timeInHumanDuration = function() {
                return e.TimeHelper.secondsToHumanDuration(this._implGet.apply(this, ['time', 0].concat(a.call(arguments))))
            }, n.prototype.timeInIso8601Duration = function() {
                return e.TimeHelper.secondsToIso8601(this._implGet.apply(this, ['time', 0].concat(a.call(arguments))))
            }, n.prototype.trim = function() {
                return this._implSetOrGet.apply(this, ['trim', {
                    start: 0,
                    end: -1
                }].concat(a.call(arguments)))
            }, n.prototype.unmute = function() {
                return this._implExec('unmute')
            }, n.prototype.undefineOverlay = function() {
                return this._implPromise.apply(this, ['undefineOverlay'].concat(a.call(arguments)))
            }, n.prototype.videoHeight = function() {
                return this._implSetOrGet.apply(this, ['videoHeight', null].concat(a.call(arguments)))
            }, n.prototype.videoQuality = function() {
                return this._implSetOrGet.apply(this, ['videoQuality', 'auto'].concat(a.call(arguments)))
            }, n.prototype.videoWidth = function() {
                return this._implSetOrGet.apply(this, ['videoWidth', null].concat(a.call(arguments)))
            }, n.prototype.visitorKey = function() {
                return this._tracker.visitorKey() || null
            }, n.prototype.volume = function() {
                return this._implSetOrGet.apply(this, ['volume', 0].concat(a.call(arguments)))
            }, n.prototype.volumeControlEnabled = function() {
                return this._implSetOrGet.apply(this, ['volumeControlEnabled', !1].concat(a.call(arguments)))
            }, n.prototype.whenVideoElementInDom = function() {
                return new r(function(e) {
                    return function(t) {
                        return e._hasImpl(function() {
                            return t(e._implGet.apply(e, ['whenVideoElementInDom', null].concat(a.call(arguments))))
                        })
                    }
                }(this))
            }, n.prototype.width = function() {
                return this._implSetOrGet.apply(this, ['width', null].concat(a.call(arguments)))
            }, n.prototype.widthForHeight = function() {
                return this._implGet.apply(this, ['widthForHeight', null].concat(a.call(arguments)))
            }, n.prototype.chaptersEnabled = function() {
                return this._implSetOrGet.apply(this, ['chaptersEnabled', null].concat(a.call(arguments)))
            }, n.prototype.chaptersVisibleOnLoad = function() {
                return this._implSetOrGet.apply(this, ['chaptersVisibleOnLoad', null].concat(a.call(arguments)))
            }, n.prototype.addChapter = function() {
                return this._implExec.apply(this, ['addChapter'].concat(a.call(arguments)))
            }, n.prototype.getChapter = function() {
                return this._implGet.apply(this, ['getChapter', null].concat(a.call(arguments)))
            }, n.prototype.removeChapter = function() {
                return this._implExec.apply(this, ['removeChapter'].concat(a.call(arguments)))
            }, n.prototype.chapters = function() {
                return this._implSetOrGet.apply(this, ['chapters', []].concat(a.call(arguments)))
            }, n.prototype.customerLogo = function() {
                return this._implExec.apply(this, ['customerLogo'].concat(a.call(arguments)))
            }, n.prototype.setControlEnabled = function(e, t) {
                return this._implSetOrGet('setControlEnabled', null, e, t)
            }, n.prototype.isControlDisabled = function(e) {
                return this._implGet('isControlDisabled', !1, e)
            }, n.prototype.isControlEnabled = function(e) {
                return this._implGet('isControlEnabled', !1, e)
            }, n.prototype.whenControlMounted = function(e) {
                return this._implPromise('whenControlMounted', e)
            }, n.prototype.getControl = function(e) {
                return this._implGet('getControl', null, e)
            }, n.prototype.getEmail = function() {
                return this.email()
            }, n.prototype.getEventKey = function() {
                return this.eventKey()
            }, n.prototype.getVisitorKey = function() {
                return this.visitorKey()
            }, n.prototype.setEmail = function(e) {
                return this.email(e)
            }, n.prototype.setPlayerColor = function() {
                return this._implExec.apply(this, ['playerColor'].concat(a.call(arguments)))
            }, n.prototype.removeReadyFn = function() {
                var e;
                return e = 1 <= arguments.length ? a.call(arguments, 0) : [], this._hasImpl(function(t) {
                    return function() {
                        var n;
                        return (n = t._impl.ready).remove.apply(n, e)
                    }
                }(this))
            }, n.prototype.email = function(e) {
                var t, n;
                return null == e ? this._attrs.email || null : (this.info('email', e), t = this._attrs.email, this._attrs.email = e, s.localStorage([this._attrs.pageUrl, 'trackEmail'], e), (null == (n = this._opts) ? void 0 : n.noDeprecatedProperties) || (this.params.trackEmail = e), this._implExec('email', e), e !== t && this.trigger('emailchange', e), this)
            }, n.prototype.foreignData = function(e) {
                var t;
                if (void 0 === e) return this._attrs.foreignData || this._foreignData || null;
                if (null === e) return this._attrs.foreignData = null, this.trigger('foreigndatachange', e);
                if (this.info('foreignData', e), !s.obj.isObject(e)) throw new Error('foreignData can only be an Object');
                return e = s.obj.clone(e), this._attrs.foreignData = e, null != (t = this.tracker) && t.transmit({
                    force: !0
                }), this.trigger('foreigndatachange', e)
            }, n.classFor = function(e) {
                var t, n;
                return e instanceof s.Player ? e = e.embedType : e instanceof s.PublicApi && (e = null == (t = e._impl) ? void 0 : t.embedType), n = function() {
                    return 'vulcan' === e ? s.VulcanPlayer : 'vulcan-v2' === e ? s.VulcanV2Player : 'html5' === e ? s.Html5Player : 'flash' === e ? s.FlashPlayer : 'external' === e ? s.ExternalPlayer : 'notplayable' === e ? s.NotPlayablePlayer : 'passwordprotected' === e ? s.PasswordProtectedPlayer : s.Player
                }(), n ? n : (s.Metrics.count('player/' + e + '-class-not-defined', 1, {
                    ua: navigator.userAgent,
                    detect: s.detect
                }), s.error('PublicApi.classFor: embedType is ' + e + ' but its class is not defined. Using \'vulcan-v2\' instead.'), s.VulcanV2Player)
            }, n
        }(), s.mixin(s.PublicApi.prototype, s.bindable), u = s.PublicApi.prototype.trigger, s.PublicApi.prototype._triggerNoImpl = function() {
            var e, t, n;
            return t = arguments[0], e = 2 <= arguments.length ? a.call(arguments, 1) : [], u.call.apply(u, [this, t].concat(a.call(e))), null == (n = window.wistiaEmbeds) ? void 0 : n.trigger.apply(n, [t, this].concat(a.call(e)))
        }, s.PublicApi.prototype.trigger = function() {
            var e, t;
            return e = 1 <= arguments.length ? a.call(arguments, 0) : [], this._impl ? (t = this._impl).trigger.apply(t, e) : this._triggerNoImpl.apply(this, e)
        }, s.mixin(s.PublicApi.prototype, s.logHelpers), s.PublicApi.prototype._logPrefix = function() {
            var e;
            return [this.constructor.name, this.hashedId() || 'no hashedId', null == (e = this.container) ? void 0 : e.id, this.uuid]
        }
    })(Wistia);
}, function() {
    (function(e) {
        if (!e.generate) return e.generate = {}, e.generate.html = function(t) {
            var n, a, r, l, s, i, d, p, u, c, m, g, h, y;
            if (/string|number|boolean/.test(typeof t)) return t.toString();
            if (t instanceof Array) {
                for (m = '', s = 0, p = t.length; s < p; s++) l = t[s], m += e.generate.html(l);
                return m
            }
            if ('object' != typeof t) return t.toString();
            for (d in a = [], t) h = t[d], 'tagName' === d ? g = h : 'childNodes' === d ? r = h : a.push({
                key: d,
                val: h
            });
            for (g || (g = 'div'), m = '<' + g, (i = 0, u = a.length); i < u; i++) n = a[i], 'style' === n.key && e.obj.isObject(n.val) && (n.val = function() {
                var e, t;
                for (c in e = n.val, t = [], e) y = e[c], t.push(c.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase() + ':' + y);
                return t
            }().join(';') + ';'), m += ' ' + n.key + '="' + n.val + '"';
            return /^(br|hr|img|link|meta|input)$/i.test(g) ? m += ' />' : (m += '>', r && ('string' == typeof r ? m += r : 'object' == typeof r && (m += e.generate.html(r))), m += '</' + g + '>'), m
        }, e.generate.stillWidth = function(e) {
            var t, n, i, a, r, l, s, d;
            for (l = [640, 960, 1280, 1920, 3840], 3840 > e.masterStillWidth && l.push(e.masterStillWidth), t = [], (n = 0, a = l.length); n < a; n++) d = l[n], d <= e.masterStillWidth && t.push(d);
            for (s = t.sort(function(e, t) {
                    return e - t
                }), i = 0, r = s.length; i < r; i++)
                if (d = s[i], e.videoWidth <= d) return d;
            return Math.max.apply(Math, t)
        }, e.generate.relativeBlockCss = function(e, t) {
            return null == e && (e = '100%'), null == t && (t = '100%'), 'display:inline-block;*display:inline;height:' + t + ';margin:0;padding:0;position:relative;vertical-align:top;width:' + e + ';zoom:1;'
        }, e.generate.video = function(t, n, i) {
            return i = e.obj.merge({}, n.params, i, {
                uuid: n.uuid,
                videoWidth: n.videoWidth(),
                videoHeight: n.videoHeight()
            }), 'flash' === t ? e.generate.flashEmbedCode(n._mediaData, i) : 'html5' === t ? e.generate.html5EmbedElem(n._mediaData, i) : 'romulus' === t ? e.generate.romulusEmbedElem(n._mediaData, i) : 'external' === t ? e.generate.externalEmbedCode(n._mediaData, i) : 'flashUrl' === t ? e.generate.flashUrl(n._mediaData, i) : void 0
        }
    })(Wistia);
}, function(e, t, n) {
    var i = function(e, t) {
            return function() {
                return e.apply(t, arguments)
            }
        },
        a = [].slice;
    (function(e) {
        var t, r, l, s, d, p, u, c, m, g, h, y;
        if (d = e, !d.Player) {
            for (l = n(6), r = n(27), t = n(16), s = n(23), p = n(18).eV1Protocol, d.Player = function() {
                    function l(e) {
                        var t, n, a;
                        for (t in this.publicApi = e, this._percentWatchedThreshold = i(this._percentWatchedThreshold, this), this.uuid = d.seqId(), this.info('constructor'), this.transferFacadeProperties(), this._impl = this, a = this.publicApi, a) n = a[t], n instanceof d.StopGo && !this.hasOwnProperty(t) && (this[t] = n);
                        this.plugin = this.publicApi.plugin, this.ready = new d.StopGo, this.hasData = new d.StopGo, this.embedded = new d.StopGo, this.commandQueueOpen = new d.StopGo, this.hasData(!0), this.commandQueueOpen(!0), this.playing = new d.StopGo, this.notFullscreen = new d.StopGo, this.resetStateVariables(), this.setupPercentTracking(), this._recordFirstEmbedIfEligible(), this
                    }
                    var u = Math.max,
                        c = Math.round,
                        m = Math.floor;
                    return l.FAILED = -1, l.QUEUED = 0, l.PROCESSING = 1, l.READY = 2, l.prototype.init = function() {
                        return this.setupPipedreamTracking(), this
                    }, l.prototype.transferFacadeProperties = function() {
                        var e, t, n, i, a;
                        for (i = '_attrs\n_embedContainer\n_givenOptions\n_hashedId\n_hasImpl\n_mediaData\n_opts\n_originalMediaData\n_tracker\nchrome\ncontainer\ncontrols\ndata\ndown\nfullscreenContainer\noptions\nparams\nplugin\nplugins\nup'.split(/[\n\s]+/), a = [], (e = 0, t = i.length); e < t; e++) n = i[e], a.push(this[n] = this.publicApi[n]);
                        return a
                    }, l.prototype.elem = function() {
                        return null
                    }, l.prototype.embed = function() {
                        throw new Error('Define in subclass!')
                    }, l.prototype.checkForReady = function() {
                        throw new Error('Define in subclass!')
                    }, l.prototype.setupGrid = function(e) {
                        return this.grid || (this.grid = d.createGrid(this, e), d.elem.append(this.chrome, this.grid.root)), this.grid
                    }, l.prototype.implContainer = function() {
                        return this._opts.subContainer ? this._embedContainer : this.grid.center
                    }, l.prototype.placeEmbed = function(e) {
                        var t;
                        return t = this.implContainer(), this.info('placeEmbed', t, e), this.wrapperElem = d.elem.fromObject({
                            id: d.seqId('wistia_video_wrapper_'),
                            style: d.generate.relativeBlockCss(),
                            class: 'wistia_video_wrapper'
                        }), d.elem.style(this.wrapperElem, {
                            overflow: 'hidden'
                        }), d.elem.append(t, this.wrapperElem), 'string' == typeof e ? this.wrapperElem.innerHTML += e : d.elem.append(this.wrapperElem, e)
                    }, l.prototype.stopStreaming = function() {}, l.prototype.wipeOutstandingAsyncFunctions = function() {
                        var e;
                        if (this.info('wipeOutstandingAsyncFunctions'), null != (e = d.eventLoop) && e.remove(this.uuid), d.clearTimeouts(this.uuid), this._remoteMediaKey) return d.clearTimeouts(this._remoteMediaKey)
                    }, l.prototype.resetStateVariables = function() {
                        return this.info('resetStateVariables'), this._lastTimePosition = -1, this._lastState = 'beforeplay', this._streamSet = !1, this._issuedPlay = !1, this._issuedPause = !1, this._beforePlay = !0, this._hasPlayed = !1, this._waiting = 0, this._ended = !1, this.playing(!1)
                    }, l.prototype.rebuild = function(e) {
                        return null == e && (e = {}), this.info('rebuild'), this.embedded(function(e) {
                            return function() {
                                return e.ready(!1), e._oldVideoElem = e.elem(), e.stopStreaming(), d.elem.remove(e.wrapperElem), e.wipeOutstandingAsyncFunctions(), e.embed()
                            }
                        }(this)), this
                    }, l.prototype.cancelFullscreen = function() {
                        return this.info('cancelFullscreen'), this.rebuild()
                    }, l.prototype.requestFullscreen = function() {}, l.prototype.fit = function() {
                        return this.info('fit'), this._opts.dontFit || (this.grid.root.style.height = d.elem.height(this.chrome) + 'px', this.grid.root.style.width = d.elem.width(this.chrome) + 'px'), d.grid.fitVertical(this), d.grid.fitHorizontal(this)
                    }, l.prototype.setupPercentTracking = function() {
                        var e, t, n;
                        if (!this._trackPercent) {
                            if ('playing' === this.state())
                                for (n = e = 0, t = m(this.time()); 0 <= t ? e < t : e > t; n = 0 <= t ? ++e : --e) this._logSecondWatched(n);
                            return null == this._trackPercent && (this._trackPercent = function(e) {
                                return function(t) {
                                    var n;
                                    if (n = e.percentWatched(), e._logSecondWatched(t), e.percentWatched() !== n) return e.trigger('percentwatchedchanged', e.percentWatched(), n), e._percentWatchedThreshold(e.percentWatched())
                                }
                            }(this)), this.rebind('secondchange', this._trackPercent)
                        }
                    }, l.prototype._percentWatchedThreshold = function(e) {
                        var t, n, i, a, r, l;
                        for (null == this._thresholds && (this._thresholds = [0.25, 0.5, 0.75, 1]), l = [], i = c(100 * e) / 100, a = this._thresholds, (t = 0, n = a.length); t < n; t++) r = a[t], i >= r ? this.trigger('percentWatchedThreshold', r) : l.push(r);
                        return this._thresholds = l
                    }, l.prototype._logSecondWatched = function(e) {
                        var t;
                        if (null == this._secondsWatched && (this._secondsWatched = function() {
                                var e, n, i;
                                for (i = [], t = e = 0, n = m(this.duration()); 0 <= n ? e < n : e > n; t = 0 <= n ? ++e : --e) i.push(0);
                                return i
                            }.call(this)), null == this._totalWatched && (this._totalWatched = 0), null == this._totalRewatched && (this._totalRewatched = 0), !(e >= this._secondsWatched.length)) return this._secondsWatched[e] += 1, 1 === this._secondsWatched[e] ? this._totalWatched += 1 : this._totalRewatched += 1
                    }, l.prototype.percentWatched = function() {
                        return this.secondsWatched() / m(this.duration())
                    }, l.prototype.secondsWatched = function() {
                        return this._totalWatched || 0
                    }, l.prototype.secondsWatchedVector = function() {
                        return this._secondsWatched
                    }, l.prototype._isOnWistia = function() {
                        return this._opts._inIframe ? !!document.referrer.match(/wistia\.(dev|st|com)/) : !!window.location.href.match(/wistia\.(dev|st|com)/)
                    }, l.prototype._isLoggedIn = function() {
                        var e;
                        return null == (e = document.getElementsByTagName('body')[0]) ? void 0 : e.classList.contains('logged_in')
                    }, l.prototype._isShared = function() {
                        return this._isOnWistia() && !this._isLoggedIn()
                    }, l.prototype._isExternallyEmbedded = function() {
                        return !this._isOnWistia()
                    }, l.prototype._recordFirstEmbedIfEligible = function() {
                        var t, i, a;
                        if (this._mediaData.firstEmbedForAccount || this._mediaData.firstShareForAccount) return (t = n(18).appHost, a = p() + '//' + t() + '/account/activities', i = {
                            account_key: this._mediaData.accountKey,
                            media_hashed_id: this._mediaData.hashedId
                        }, this._mediaData.firstEmbedForAccount && this._isExternallyEmbedded()) ? (i.first_embed = this._isExternallyEmbedded(), e.remote.post(a, {
                            data: JSON.stringify(i),
                            dataType: 'json'
                        })) : this._mediaData.firstShareForAccount && this._isShared() ? (i.first_share = this._isShared(), e.remote.post(a, {
                            data: JSON.stringify(i),
                            dataType: 'json'
                        })) : void 0
                    }, l.prototype.setupPipedreamTracking = function() {
                        return this.whenVideoElementInDom().then(function(e) {
                            return function() {
                                return e._opts.flashShim ? void 0 : d.timeout(e.uuid + '.track-initembed', function() {
                                    var t, n, i, a, l;
                                    for (d.Metrics.videoCount(e, 'player/initembed'), l = d.Metrics.assetBuckets(e), (i = 0, a = l.length); i < a; i++) n = l[i], d.Metrics.videoCount(e, 'player/initembed.' + n);
                                    return t = r.usablePlayers(e.publicApi.judyCtx(), e.publicApi._mediaData), d.Metrics.videoCount(e, 'player/available-players', 1, {
                                        available_players: t
                                    })
                                }, 100)
                            }
                        }(this)), this.bind('play', function(e) {
                            return function() {
                                var t, n, i, a;
                                for (d.Metrics.videoCount(e, 'player/play'), a = d.Metrics.assetBuckets(e), (n = 0, i = a.length); n < i; n++) t = a[n], d.Metrics.videoCount(e, 'player/play.' + t);
                                return e.unbind
                            }
                        }(this)), d.Metrics.countEventOnce(this, 'enter-fullscreen'), d.Metrics.countEventOnce(this, 'end'), d.Metrics.countShowLoadingOnce(this), d.Metrics.countShowLoadingAll(this), d.Metrics.countShowLoadingLongTimeOnce(this), d.Metrics.countShowLoadingLongTimeAll(this), this.bind('secondchange', function(e) {
                            return function() {
                                if (10 <= e.secondsWatched()) return d.Metrics.videoCount(e, 'player/played-10-seconds'), e.unbind
                            }
                        }(this)), this.bind('secondchange', function(e) {
                            return function() {
                                if (30 <= e.secondsWatched()) return d.Metrics.videoCount(e, 'player/played-30-seconds'), e.unbind
                            }
                        }(this))
                    }, l.prototype.animate = function(e, t) {
                        var n;
                        return null == e && (e = {}), null == t && (t = {}), this.info('animate', e, t), n = t.callback, t.callback = function(e) {
                            return function() {
                                return d.elem.style(e.grid.root, {
                                    position: 'relative'
                                }), 'function' == typeof n ? n() : void 0
                            }
                        }(this), d.elem.style(this.grid.root, {
                            position: 'absolute'
                        }), d.elem.animate(this.grid.root, e, t), this
                    }, l.prototype.slide = function() {
                        var e, t, n;
                        return e = arguments[0], n = arguments[1], t = 3 <= arguments.length ? a.call(arguments, 2) : [], this.animate.apply(this, [{
                            transform: 'translate(' + e + 'px,' + n + 'px)'
                        }].concat(a.call(t)))
                    }, l.prototype._shortAnimArgs = function(e) {
                        var t;
                        return 'function' == typeof e[0] ? t = {
                            callback: e[0]
                        } : t = d.obj.merge({}, e[0], {
                            callback: e[1]
                        })
                    }, l.prototype.slideOutLeft = function() {
                        var e;
                        return e = this._shortAnimArgs(arguments), d.elem.style(this.grid.root, {
                            transform: 'translate(0px, 0px)'
                        }), setTimeout(function(t) {
                            return function() {
                                return t.slide(-t.videoWidth(), 0, e)
                            }
                        }(this), 1), this
                    }, l.prototype.slideInLeft = function() {
                        var e;
                        return e = this._shortAnimArgs(arguments), d.elem.style(this.grid.root, {
                            transform: 'translate(' + this.videoWidth() + 'px, 0px)'
                        }), setTimeout(function(t) {
                            return function() {
                                return t.slide(0, 0, e)
                            }
                        }(this), 1), this
                    }, l.prototype.slideOutRight = function() {
                        var e;
                        return e = this._shortAnimArgs(arguments), d.elem.style(this.grid.root, {
                            transform: 'translate(0px, 0px)'
                        }), setTimeout(function(t) {
                            return function() {
                                return t.slide(t.videoWidth(), 0, e)
                            }
                        }(this), 1), this
                    }, l.prototype.slideInRight = function() {
                        var e;
                        return e = this._shortAnimArgs(arguments), d.elem.style(this.grid.root, {
                            transform: 'translate(' + -this.videoWidth() + 'px, 0px)'
                        }), setTimeout(function(t) {
                            return function() {
                                return t.slide(0, 0, e)
                            }
                        }(this), 1), this
                    }, l.prototype.fade = function() {
                        var e, t, n;
                        return t = arguments[0], e = 2 <= arguments.length ? a.call(arguments, 1) : [], null == t && (t = 0), (n = d.elem).animate.apply(n, [this.gridChildren(), {
                            opacity: t
                        }].concat(a.call(e)))
                    }, l.prototype.fadeIn = function() {
                        var e, t;
                        return t = this._shortAnimArgs(arguments), e = t.callback, t.callback = function(t) {
                            return function() {
                                return d.elem.style(t.gridChildren(), {
                                    opacity: ''
                                }), 'function' == typeof e ? e() : void 0
                            }
                        }(this), d.elem.style(this.gridChildren(), {
                            opacity: 0
                        }), setTimeout(function(e) {
                            return function() {
                                return e.fade(1, t)
                            }
                        }(this), 1)
                    }, l.prototype.fadeOut = function() {
                        var e;
                        return e = this._shortAnimArgs(arguments), d.elem.style(this.gridChildren(), {
                            opacity: 1
                        }), setTimeout(function(t) {
                            return function() {
                                return t.fade(0, e)
                            }
                        }(this), 1)
                    }, l.prototype.gridChildren = function() {
                        var e, t, n, i, a, r, l, s;
                        for (s in l = [], a = this.grid, a)
                            for (i = a[s], r = i.childNodes, (t = 0, n = r.length); t < n; t++) e = r[t], d.isGridElem(this.grid, e) || l.push(e);
                        return l
                    }, l.prototype.remove = function(e) {
                        var t, n;
                        return null == e && (e = {}), this.info('remove'), !1 !== e.trigger && this.trigger('beforeremove'), this.hasData(!1), this.ready(!1), this.embedded(!1), null != (t = this.engine) && t.destroy(), this.stopStreaming(), !1 !== e.trigger && this.trigger('down'), !1 !== e.trigger && this.trigger('afterremove'), this.wipeOutstandingAsyncFunctions(), this._bindings = {}, this.cleanupRefs(), (null == (n = this.grid) ? void 0 : n.root) && (d.elem.unbindAllInside(this.grid.root), d.elem.remove(this.grid.root)), this.grid = null
                    }, l.prototype.isRemoved = function() {
                        return null === this.grid
                    }, l.prototype.freezeLastFrame = function() {}, l.prototype.cleanupRefs = function() {
                        var e, t, n, i, a;
                        for (e in 'function' == typeof this.cleanup && this.cleanup(), t = this, i = [], t) a = t[e], a !== this && i.push(null == (n = this[e]) ? void 0 : 'function' == typeof n.cleanup ? n.cleanup() : void 0);
                        return i
                    }, l.prototype._baseEventLoopDuration = 300, l.prototype._eventLoopDuration = 300, l.prototype.play = function() {
                        return this.info('play'), this.ready(function(e) {
                            return function() {
                                return e.play()
                            }
                        }(this)), this
                    }, l.prototype.canAutoPlay = function() {
                        return !0
                    }, l.prototype.suppressPlay = function(e) {
                        return null == e ? this._suppressPlay : (this.info('suppressPlay', e), this._suppressPlay = !!e)
                    }, l.prototype.pause = function() {
                        return this.info('pause'), this.ready(function(e) {
                            return function() {
                                return e.pause()
                            }
                        }(this)), this
                    }, l.prototype.time = function(e) {
                        return null == e ? 0 : (this.info('time', e), this.ready(function(t) {
                            return function() {
                                return t.time(e)
                            }
                        }(this)), this)
                    }, l.prototype.state = function() {
                        return 'beforeplay'
                    }, l.prototype.duration = function() {
                        return this._mediaData.duration || null
                    }, l.prototype.mute = function() {
                        return this._muted = !0, this.trigger('volumechange', this.volume())
                    }, l.prototype.unmute = function() {
                        return this._muted = !1, this._isPlayingSilently = !1, this.trigger('volumechange', this.volume())
                    }, l.prototype.isMuted = function() {
                        return !!this._opts.muted
                    }, l.prototype.volume = function(e) {
                        return null == e ? 0 : (this.info('volume', e), this.ready(function(t) {
                            return function() {
                                return t.volume(e)
                            }
                        }(this)))
                    }, l.prototype.playerLanguage = function(e) {
                        return null == e ? d.getLanguage(this._attrs.playerLanguage) || d.getLanguage('en-US') : this.embedded(function(t) {
                            return function() {
                                if (!d.getLanguage(e)) throw new Error('Language ' + e + ' isn\'t defined.');
                                return e === t._attrs.playerLanguage ? void 0 : (t._attrs.playerLanguage = e, t.trigger('playerlanguagechange', d.getLanguage(e)))
                            }
                        }(this))
                    }, l.prototype.name = function() {
                        return this._mediaData.name || null
                    }, l.prototype.hashedId = function() {
                        return this._hashedId
                    }, l.prototype.bigPlayButtonEnabled = function() {
                        return this
                    }, l.prototype.smallPlayButtonEnabled = function() {
                        return this
                    }, l.prototype.playbarControlEnabled = function() {
                        return this
                    }, l.prototype.volumeControlEnabled = function() {
                        return this
                    }, l.prototype.fullscreenButtonEnabled = function() {
                        return this
                    }, l.prototype.setPlayerColor = function(e) {
                        return this.playerColor(e), this
                    }, l.prototype.playerColor = function(e) {
                        var t;
                        return null == e ? this._attrs.playerColor : (this.info('playerColor', e), t = this._attrs.playerColor, this._attrs.playerColor = d.Player._sanePlayerColor(e), t !== this._attrs.playerColor && this.trigger('playercolorchange', this._attrs.playerColor, t), this)
                    }, l._sanePlayerColor = function(e) {
                        var t, n, i, a;
                        if (e) {
                            if (e = ('' + e).replace(/^#/g, ''), 6 > e.length) {
                                for (i = '', t = n = 0, a = 6 - e.length; 0 <= a ? n < a : n > a; t = 0 <= a ? ++n : --n) i += '0';
                                e = '' + i + e
                            }
                            return /^[\da-f]{6}$/i.test(e) || (e = '636155'), e
                        }
                        return '636155'
                    }, l.prototype.playbackRate = function(e) {
                        return null == e ? 1 : this
                    }, l.prototype.videoQuality = function(e) {
                        return null == e ? 'auto' : this
                    }, l.prototype.width = function(e, t) {
                        var n, i, a;
                        return null == t && (t = {}), null == e ? (a = d.elem.width(this.grid.left) + d.elem.width(this.grid.center) + d.elem.width(this.grid.right), a) : (this.info('width', e, t), e = parseInt(e, 10), n = this.width(), this.grid.wrapper.style.width = this.chrome.style.width = e + 'px', t.dontChangeContainer || (this._embedContainer.style.width = e + 'px'), this.grid.center.style.width = '100%', 'flash' === this.embedType && null != (i = this.elem()) && (i.style.width = '100%'), this._opts.dontFit ? (this.grid.main.style.width = e - d.elem.width(this.grid.left) - d.elem.width(this.grid.right) + 'px', this.grid.main.style.marginLeft = d.elem.width(this.grid.left) + 'px') : (d.grid.fitHorizontal(this), d.grid.fitVertical(this)), (e !== n || t.trigger) && this.trigger('widthchange', e, n), t.constrain && this.constrainToWidth({
                            trigger: t.trigger
                        }), this._width = e, this)
                    }, l.prototype.height = function(e, t) {
                        var n, i, a;
                        return null == t && (t = {}), null == e ? (a = d.elem.height(this.grid.center) + u(d.elem.height(this.grid.above), d.elem.height(this.grid.top)) + u(d.elem.height(this.grid.below), d.elem.height(this.grid.bottom)), a) : (this.info('height', e, t), e = parseInt(e, 10), n = this.height(), this.grid.wrapper.style.height = this.chrome.style.height = e + 'px', t.dontChangeContainer || (this._embedContainer.style.height = e + 'px'), this.grid.center.style.height = '100%', 'flash' === this.embedType && null != (i = this.elem()) && (i.style.height = '100%'), this._opts.dontFit ? (this.grid.main.style.height = e - d.elem.height(this.grid.above) - d.elem.height(this.grid.below) + 'px', this.grid.main.style.marginTop = d.elem.height(this.grid.top) + 'px') : (d.grid.fitHorizontal(this), d.grid.fitVertical(this)), (e !== n || t.trigger) && this.trigger('heightchange', e, n), t.constrain && this.constrainToHeight({
                            trigger: t.trigger
                        }), this)
                    }, l.prototype.videoWidth = function(e, t) {
                        var n, i;
                        return null == t && (t = {}), null == e ? d.elem.width(this.grid.center) : (this.info('videoWidth', e, t), e = parseInt(e, 10), i = this.width(), this.grid.center.style.width = '100%', this.grid.main.style.width = e + 'px', n = d.elem.width(this.grid.left) + d.elem.width(this.grid.right), this.grid.wrapper.style.width = this.chrome.style.width = e + n + 'px', t.dontChangeContainer || (this._embedContainer.style.width = e + n + 'px'), d.grid.fitHorizontal(this), d.grid.fitVertical(this), (e !== i || t.trigger) && this.trigger('widthchange', e, i), t.constrain && this.constrainToWidth({
                            trigger: t.trigger
                        }), this)
                    }, l.prototype.videoHeight = function(e, t) {
                        var n, i, a, r;
                        return null == t && (t = {}), null == e ? d.elem.height(this.grid.center) : (this.info('videoHeight', e, t), e = parseInt(e, 10), a = this.height(), this.grid.main.style.height = e + 'px', this.grid.center.style.height = '100%', this.grid.main.style.height = e + 'px', r = u(d.elem.height(this.grid.above), d.elem.height(this.grid.top)), n = u(d.elem.height(this.grid.below), d.elem.height(this.grid.bottom)), i = r + n, this.grid.wrapper.style.height = this.chrome.style.height = e + i + 'px', t.dontChangeContainer || (this._embedContainer.style.height = e + i + 'px'), d.grid.fitHorizontal(this), d.grid.fitVertical(this), (e !== a || t.trigger) && this.trigger('heightchange', e, a), t.constrain && this.constrainToHeight({
                            trigger: t.trigger
                        }), this)
                    }, l.prototype.constrainToHeight = function(e) {
                        return this.videoWidth(this.widthForHeight(this.videoHeight()), e)
                    }, l.prototype.constrainToWidth = function(e) {
                        return this.videoHeight(this.heightForWidth(this.videoWidth()), e)
                    }, l.prototype.extraHeight = function() {
                        var e, t;
                        return t = u(d.elem.height(this.grid.above), d.elem.height(this.grid.top)), e = u(d.elem.height(this.grid.below), d.elem.height(this.grid.bottom)), t + e
                    }, l.prototype.extraWidth = function() {
                        return d.elem.width(this.grid.left) + d.elem.width(this.grid.right)
                    }, l.prototype.heightForWidth = function(e) {
                        return c(e / this.aspect())
                    }, l.prototype.widthForHeight = function(e) {
                        return c(e * this.aspect())
                    }, l.prototype.aspect = function() {
                        var e;
                        return this._opts.aspect ? this._opts.aspect : this._currentAsset ? 'variable' === this._currentAsset.width ? this.mp4Aspect() || this.originalAspect() : this._currentAsset.width / this._currentAsset.height : (e = this.asset({
                            container: /mp4|flv/
                        })) ? e.width / e.height : 640 / 360
                    }, l.prototype.mp4Aspect = function() {
                        var e;
                        return (e = this.mp4Asset({
                            width: 640
                        }) || this.mp4Asset({
                            width: 960
                        }) || this.mp4Asset()) ? e.width / e.height : null
                    }, l.prototype.originalAspect = function() {
                        return this.originalAsset() ? this.originalAsset().width / this.originalAsset().height : this.bestAsset().width / this.bestAsset().height
                    }, l.prototype.inFullscreen = function() {
                        return !1
                    }, l.prototype.visitorKey = function() {
                        return this._tracker.visitorKey()
                    }, l.prototype.eventKey = function() {
                        return this._tracker.eventKey()
                    }, l.prototype.getVisitorKey = function() {
                        return this.visitorKey()
                    }, l.prototype.getEventKey = function() {
                        return this.eventKey()
                    }, l.prototype.disableTextTracks = function() {
                        return this.info('disableTextTracks'), null == this._disableTextTracks && (this._disableTextTracks = function(e) {
                            return function() {
                                var t, n, i, a, r, l;
                                if (null != (i = e.elem()) && i.textTracks) {
                                    for (a = e.elem().textTracks, r = [], (t = 0, n = a.length); t < n; t++) l = a[t], r.push(l.mode = 'disabled');
                                    return r
                                }
                            }
                        }(this)), this.rebind('play', this._disableTextTracks)
                    }, l.prototype.sdAsset = function() {
                        throw new Error('Implement in subclass!')
                    }, l.prototype.mdAsset = function() {
                        throw new Error('Implement in subclass!')
                    }, l.prototype.hdAsset = function() {
                        throw new Error('Implement in subclass!')
                    }, l.assets = t.filter, l.asset = t.one, l.assetsWithinQualityRange = t.withinQualityRange, l.stillUrl = t.stillUrl, l.bakeryHosts = function() {
                        return t.BAKERY_HOSTS
                    }, l.isBakeryUrl = t.isBakeryUrl, l.stillAsset = t.still, l.prototype.stillUrl = function(e) {
                        var n, i;
                        return e = d.obj.merge({
                            videoWidth: this.grid ? this.videoWidth() : null,
                            videoHeight: this.grid ? this.videoHeight() : null
                        }, this._opts, e), e.playerColor || (e.playerColor = null == (n = this._mediaData) || null == (i = n.embed_options) ? void 0 : i.playerColor), t.stillUrl(this._mediaData.assets, e)
                    }, l.prototype.stillAsset = function() {
                        return t.still(this._mediaData.assets)
                    }, l.prototype.thumbnailAssets = function() {
                        var e, t, n, i, a, r, l, s, d;
                        if (this._opts.stillUrl) return [{
                            height: null,
                            url: this._opts.stillUrl,
                            width: null
                        }];
                        for (r = this.stillAsset(), l = r.width / r.height, i = [320, 640, 960, 1280, 1920, 3840], a = [], (t = 0, n = i.length); t < n; t++) d = i[t], e = c(d / l), s = this.stillUrl({
                            videoWidth: d,
                            videoHeight: e,
                            playButton: !1
                        }), a.push({
                            height: e,
                            url: s,
                            width: d
                        });
                        return a
                    }, l.prototype._replaceStillAsset = function(e) {
                        var t, n;
                        return n = function() {
                            var e, n, i, a;
                            for (i = this.assets(), a = [], (e = 0, n = i.length); e < n; e++) t = i[e], 'still_image' !== t.type && a.push(t);
                            return a
                        }.call(this), this._mediaData.assets = n, this._mediaData.assets.push(e)
                    }, l.prototype._refreshDataFromServer = function(e, t) {
                        return d.remote.ajax('//' + d.remote.embedHost() + '/embed/medias/' + this.hashedId() + '.json', {
                            dataType: 'json',
                            fallbackToJsonp: !0,
                            jsonpCallback: 'wistia_jsonp_refresh_' + this.hashedId(),
                            success: function(t) {
                                return function(n) {
                                    return t._originalMediaData = n.media, t._mediaData = t.publicApi._transformMediaData(n.media), t._newStill && t._replaceStillAsset(t._newStill), t.publicApi._mediaData = t._mediaData, d.cacheMedia(t.hashedId(), t._mediaData), 'function' == typeof e && e(), t.trigger('refreshed-from-server')
                                }
                            }(this),
                            error: t
                        })
                    }, l.prototype.assets = function(e) {
                        return t.filter(this._mediaData.assets, e)
                    }, l.prototype.asset = function(e) {
                        var t;
                        return 'string' == typeof arguments[0] ? (t = arguments[0] + 'Asset', e = arguments[1], this[t](e)) : (e = arguments[0], this.assets(e)[0] || null)
                    }, l.prototype.mp4Asset = function(e) {
                        return t.mp4(this._mediaData.assets, e)
                    }, l.prototype.qualityOptions = function() {
                        return {
                            qualityMin: this._attrs.qualityMin,
                            qualityMax: this._attrs.qualityMax
                        }
                    }, l.prototype.mp4AssetInRange = function(e) {
                        return null == e && (e = {}), t.mp4(this._mediaData.assets, d.obj.merge(this.qualityOptions(), e))
                    }, l.prototype.webmAsset = function(e) {
                        return t.webm(this._mediaData.assets, e)
                    }, l.prototype.webmAssetInRange = function(e) {
                        return null == e && (e = {}), t.webm(this._mediaData.assets, d.obj.merge(this.qualityOptions(), e))
                    }, l.prototype.playableAsset = function(e) {
                        return t.playable(this._mediaData.assets, e)
                    }, l.prototype.playableAssetInRange = function(e) {
                        return null == e && (e = {}), t.playable(this._mediaData.assets, d.obj.merge(this.qualityOptions(), e))
                    }, l.prototype.flashAsset = function(e) {
                        return t.flv(this._mediaData.assets, e)
                    }, l.prototype.flashAssetInRange = function(e) {
                        return null == e && (e = {}), t.flv(this._mediaData.assets, d.obj.merge(this.qualityOptions(), e))
                    }, l.prototype.hlsAsset = function(e) {
                        return t.m3u8(this._mediaData.assets, e)
                    }, l.prototype.hlsAssetInRange = function(e) {
                        return null == e && (e = {}), t.m3u8(this._mediaData.assets, d.obj.merge(this.qualityOptions(), e))
                    }, l.prototype.isScreencast = function() {
                        return t.isScreencast(this._mediaData.assets)
                    }, l.prototype.originalAsset = function() {
                        return this._original || (this._original = t.original(this._mediaData.assets))
                    }, l.prototype.iphoneAsset = function(e) {
                        return null == e && (e = {}), this._iphoneAsset || (this._iphoneAsset = t.iphone(this._mediaData.assets, e))
                    }, l.prototype.iphoneAssetInRange = function(e) {
                        return null == e && (e = {}), t.iphone(this._mediaData.assets, d.obj.merge(this.qualityOptions(), e))
                    }, l.prototype.trim = function(e) {
                        return null == e ? this._trimSettings || {
                            start: 0,
                            end: -1
                        } : this._trimSettings = e
                    }, l.prototype.getVideoElement = function() {
                        return null
                    }, l.prototype.whenVideoElementInDom = function() {
                        return new s(function() {})
                    }, l.prototype.embedOptions = function() {
                        return this._embedOptions ? this._embedOptions : this._embedOptions = d.obj.clone(this._opts)
                    }, l.prototype.inSilentPlaybackMode = function() {
                        return !1
                    }, l
                }(), d.mixin(d.Player.prototype, d.bindable), d.mixin(d.Player.prototype, d.logHelpers), d.Player.prototype._logPrefix = function() {
                    var e;
                    return [this.constructor.name, this.hashedId() || 'no hashedId', null == (e = this._embedContainer) ? void 0 : e.id, this.uuid]
                }, m = d.Player.prototype.trigger, d.Player.prototype.trigger = function() {
                    var e, t;
                    return e = 1 <= arguments.length ? a.call(arguments, 0) : [], m.apply(this, e), (t = this.publicApi)._triggerNoImpl.apply(t, e)
                }, y = Object.getOwnPropertyNames(d.PublicApi.prototype), (u = 0, c = y.length); u < c; u++) g = y[u], h = d.PublicApi.prototype[g], 'function' != typeof h || d.Player.prototype.hasOwnProperty(g) || function(e, t) {
                return d.Player.prototype[e] = function() {
                    var t, n;
                    return t = 1 <= arguments.length ? a.call(arguments, 0) : [], (n = this.publicApi)[e].apply(n, t)
                }, d.Player.prototype[e]._originalMethod = t
            }(g, h);
            return d.Video = d.Player
        }
    })(Wistia);
}, function() {
    (function(e) {
        return null == e._onFullscreenChange && (e._onFullscreenChange = function() {
            return e.elem.fullscreenElement() ? e.trigger('enter-fullscreen', e.elem.fullscreenElement()) : e.trigger('cancel-fullscreen')
        }), e._initializers.initFullscreenTriggers = function() {
            return e.elem.rebind(document, 'mozfullscreenchange', e._onFullscreenChange), e.elem.rebind(document, 'webkitfullscreenchange', e._onFullscreenChange), e.elem.rebind(document, 'MSFullscreenChange', e._onFullscreenChange), e.elem.rebind(document, 'fullscreenchange', e._onFullscreenChange)
        }, e._destructors.destroyFullscreenTriggers = function() {
            return e.elem.unbind(document, 'mozfullscreenchange', e._onFullscreenChange), e.elem.unbind(document, 'webkitfullscreenchange', e._onFullscreenChange), e.elem.unbind(document, 'MSFullscreenChange', e._onFullscreenChange), e.elem.unbind(document, 'fullscreenchange', e._onFullscreenChange)
        }
    })(Wistia);
}, function(e, t, n) {
    (function(t) {
        var e;
        return e = n(18).eV1Protocol, t.BandwidthTest = function() {
            function e(e) {
                this.opt = e, this.opt = t.obj.merge({
                    minKbps: 2500,
                    timeoutLength: 4e3,
                    freshFor: 3.6e6
                }, this.opt), this.opt.uuid || (this.opt.uuid = t.seqId('bandwidth_test_'))
            }
            return e.prototype.start = function() {
                var e, n, i, a;
                return null != (i = this._testXhr) && i.abort(), this._testStart = new Date().getTime(), this._testXhr = new XMLHttpRequest, this._testXhr.open('GET', this.testFileUrl(), !0), n = Math.floor(100 * Math.random()), a = 1e6 * n, e = a + 999999, this._testXhr.setRequestHeader('Range', 'bytes=' + a + '-' + e), t.timeout(this.uuid + '.cancel_bandwidth_test', function(e) {
                    return function() {
                        return e.trigger('timeout'), e.fail()
                    }
                }(this), this.opt.timeoutLength), this._testDataLoaded = 0, this._onTestXhrProgress = function(e) {
                    return function(t) {
                        return e._testDataLoaded = t.loaded, e.trigger('progress', t)
                    }
                }(this), this._testXhr.addEventListener('progress', this._onTestXhrProgress), this._onTestXhrLoaded = function(e) {
                    return function() {
                        return e.succeed()
                    }
                }(this), this._testXhr.addEventListener('load', this._onTestXhrLoaded), this._testXhr.send(null), this.trigger('started')
            }, e.prototype.fail = function() {
                return this._sampleKbps(), this._supportsHd = !1, this.saveResult(), this.trigger('failed'), this.end()
            }, e.prototype.succeed = function() {
                if (this._sampleKbps(), this._supportsHd = !0, this.saveResult(), this.trigger('succeeded'), this.end(), this._suspiciouslyFast()) return this._reportSuspiciousBandwidthTest()
            }, e.prototype._reportSuspiciousBandwidthTest = function() {
                var n, e, i;
                try {
                    if (this._suspiciouslyFast()) return t.Metrics.count('player/suspicious-bandwidth-test', 1, {
                        bw_test_time: this._testTime,
                        visitor_key: t.visitorKey.value(),
                        location: ('undefined' != typeof location && null !== location ? null == (e = location.protocol) ? void 0 : e.length : void 0) && ('undefined' != typeof location && null !== location ? null == (i = location.hostname) ? void 0 : i.length : void 0) ? location.protocol + '//' + location.hostname : null,
                        connection_type: t.Metrics.connectionType(),
                        agent: navigator.userAgent
                    })
                } catch (e) {
                    return n = e, t.error(n)
                }
            }, e.prototype._suspiciouslyFast = function() {
                return 0.05 > this._testTime
            }, e.prototype._sampleKbps = function() {
                return this._testEnd = new Date().getTime(), this._testTime = (this._testEnd - this._testStart) / 1e3, this._kbps = 8 * this._testDataLoaded / 1e3 / this._testTime
            }, e.prototype.endEarly = function() {
                return null == this._supportsHd && null != this._testDataLoaded ? (this._sampleKbps(), this._supportsHd = !(1 < this._testTime) || this._kbps >= this.opt.minKbps, this.trigger('ended-early'), this.end()) : (this.end(), this.trigger('ended-early'))
            }, e.prototype.end = function() {
                var e, n, i;
                return this._onTestXhrLoaded && null != (e = this._testXhr) && e.removeEventListener('load', this._onTestXhrLoaded), this._onTestXhrProgress && null != (n = this._testXhr) && n.removeEventListener('progress', this._onTestXhrProgress), null != (i = this._testXhr) && i.abort(), this._testXhr = null, t.clearTimeouts(this.uuid + '.cancel_bandwidth_test'), this.trigger('ended')
            }, e.prototype.testFileUrl = function() {
                return this.opt.testFileUrl || ('https:' === t.proto() ? 'https://embed-ssl.wistia.com/deliveries/6992339c876a95a37250fbe5b0a0eaecca3018a5/file.jpg?bust=2015-12-29a' : 'http://embed-e.wistia.com/deliveries/6992339c876a95a37250fbe5b0a0eaecca3018a5/file.jpg?bust=2015-12-29a')
            }, e.prototype.saveKey = function() {
                return this.opt.saveKey || 'bandwidth_test'
            }, e.prototype.saveResult = function() {
                return t.localStorage(this.saveKey(), {
                    updatedAt: new Date().getTime(),
                    supportsHd: this._supportsHd,
                    clientKbps: this._kbps
                })
            }, e.prototype.savedResult = function() {
                return t.localStorage(this.saveKey())
            }, e.prototype.isFresh = function() {
                var e, t;
                return e = new Date().getTime() - ((null == (t = this.savedResult()) ? void 0 : t.updatedAt) || 0), e < this.opt.freshFor
            }, e.prototype.supportsHd = function() {
                return this._supportsHd || !1
            }, e
        }(), t.mixin(t.BandwidthTest.prototype, t.bindable)
    })(Wistia);
}, function(e, t, n) {
    var i, a, r = function(e, t) {
        return function() {
            return e.apply(t, arguments)
        }
    };
    i = n(2)['default'], a = i.lib('utilities/obj').assign,
        function(e) {
            return e.VideoTracker2 ? void 0 : e.VideoTracker2 = function() {
                function t(t) {
                    this.publicApi = t, this.onLookChange = r(this.onLookChange, this), this.resendAllFailedEvents = r(this.resendAllFailedEvents, this), this.retrySendingFailedEvent = r(this.retrySendingFailedEvent, this), this.eventQueue = [], this.clockStart = new Date().getTime(), this.isIE = navigator.userAgent.match(/Trident/) || navigator.userAgent.match(/MSIE/), this.initializedOnce = !1, this.monitoring = !1, this.publicApi.hasData(function(t) {
                        return function() {
                            t.params = e.extend({
                                transmitInterval: 1e3 * (t.publicApi._mediaData.trackingTransmitInterval || 10)
                            }, t.publicApi._opts), !t.publicApi._attrs.shouldTrack
                        }
                    }(this)), this
                }
                var n = Math.abs;
                return t.prototype.conversions = {
                    "missing-conversion": 0,
                    "pre-roll-email": 1,
                    "post-roll-email": 2,
                    "mid-roll-email": 3,
                    "post-roll-click": 4,
                    "mid-roll-click": 5,
                    "non-video": 6
                }, t.prototype._getAccountKey = function() {
                    return this.publicApi._opts.accountKey || this.publicApi._mediaData.accountKey
                }, t.prototype._data = function() {
                    var t;
                    return t = {
                        account_key: this._getAccountKey(),
                        session_id: this.visitorKey(),
                        media_id: this.publicApi._mediaData.mediaKey,
                        event_key: this.eventKey(),
                        media_duration: parseFloat(this.publicApi._mediaData.duration),
                        visitor_version: this._getVisitorVersion(),
                        referrer: this.publicApi._attrs.pageUrl,
                        event_details: this.eventQueue,
                        foreign_data: this.publicApi.foreignData(),
                        seconds_watched: this.publicApi.secondsWatched()
                    }, this.publicApi.email() && (t.email = this.publicApi.email()), (this.publicApi._opts.anonymizeIp || !e.isVisitorTrackingEnabled()) && (t.anonymizeIp = !0), this.params.conversionType && (t.conversion_type = this.conversions[this.params.conversionType]), this.params.conversionData && (t.conversion_data = this.params.conversionData), JSON.stringify(t)
                }, t.prototype._secondsSinceTime = function(e) {
                    return e ? Math.round((new Date().getTime() - e) / 1e3) : null
                }, t.prototype.nullToNone = function(e) {
                    return null === e ? 'none' : e
                }, t.prototype.lastLoadForAccount = function() {
                    return this.nullToNone(this._secondsSinceTime(Wistia.localStorage('accounts_loaded.' + this._getAccountKey())))
                }, t.prototype.lastLoadForMedia = function() {
                    return this.nullToNone(this._secondsSinceTime(Wistia.localStorage('medias_loaded.' + this.publicApi.hashedId())))
                }, t.prototype.lastPlayForAccount = function() {
                    return this.nullToNone(this._secondsSinceTime(Wistia.localStorage('accounts_played.' + this._getAccountKey())))
                }, t.prototype.lastPlayForMedia = function() {
                    return this.nullToNone(this._secondsSinceTime(Wistia.localStorage('medias_played.' + this.publicApi.hashedId())))
                }, t.prototype.lastRecordingOfActionForMedia = function(e) {
                    return this.nullToNone(this._secondsSinceTime(Wistia.localStorage('action_recorded.' + this.publicApi.hashedId() + '.' + e)))
                }, t.prototype.recordLastActionForMedia = function(e) {
                    return Wistia.localStorage('action_recorded.' + this.publicApi.hashedId() + '.' + e, new Date().getTime())
                }, t.prototype.recordLoad = function() {
                    return this.publicApi.info('recordLoad'), Wistia.localStorage('accounts_loaded.' + this._getAccountKey(), new Date().getTime()), Wistia.localStorage('medias_loaded.' + this.publicApi.hashedId(), new Date().getTime())
                }, t.prototype.recordPlay = function() {
                    return this.publicApi.info('recordPlay'), Wistia.localStorage('accounts_played.' + this._getAccountKey(), new Date().getTime()), Wistia.localStorage('medias_played.' + this.publicApi.hashedId(), new Date().getTime())
                }, t.prototype.isValidKey = function(e) {
                    return 25 < (null == e ? void 0 : e.length) && /^[a-z0-9_\-\.]+$/i.test(e)
                }, t.prototype._saveVisitorVersion = function(e) {
                    if (null == e && (e = 1), null == Wistia.localStorage('visitor_version')) return Wistia.localStorage('visitor_version', e)
                }, t.prototype._getVisitorVersion = function() {
                    var e;
                    return e = Wistia.localStorage('visitor_version'), e ? e : (this._saveVisitorVersion(0), 0)
                }, t.prototype.reset = function() {
                    return this.stopMonitoring(), this.initializedOnce = !1, this._eventKey = null
                }, t.prototype.initialize = function() {
                    return this.initializedOnce || (this.publicApi.info('video tracker initialize'), this._lastLoadForAccount = this.lastLoadForAccount(), this._lastLoadForMedia = this.lastLoadForMedia(), this._lastPlayForAccount = this.lastPlayForAccount(), this._lastPlayForMedia = this.lastPlayForMedia(), this._failedEventsQueue = [], this._retryTimer = null, this._retryInterval = 1e3, this.initializedOnce = !0, this.log('initialized'), this.recordLoad(), this.debounceTransmit()), this
                }, t.prototype.monitor = function() {
                    return this.publicApi.embedded(function(i) {
                        return function() {
                            return i.stopMonitoring(), i.publicApi.info('_tracker.monitor'), i.initialize(), null == i.onPlaybackRateChange && (i.onPlaybackRateChange = function(e) {
                                return i.log('playbackRateChange', null, e)
                            }), null == i.onPlay && (i.onPlay = function() {
                                if (i.log('play'), i._logCurrentCameraPosition(), i.recordPlay(), !i._played) return i._played = !0, i.debounceTransmit()
                            }), null == i.onPause && (i.onPause = function() {
                                if (.3 < n(i.publicApi.duration() - i.publicApi.time())) return i.log('pause')
                            }), null == i.onEnd && (i.onEnd = function() {
                                return i.log('end'), i._logCurrentCameraPosition(), i.transmit()
                            }), null == i.onSeek && (i.onSeek = function(e, t) {
                                if (5 <= n(t - e)) return i.log('seek')
                            }), null == i.onPercentWatchedThreshold && (i.onPercentWatchedThreshold = function(e) {
                                return i.log('percentWatchedThreshold', null, e), i.transmit()
                            }), i.monitoring = !0, i.publicApi.rebind('play', i.onPlay), i.publicApi.rebind('pause', i.onPause), i.publicApi.rebind('end', i.onEnd), i.publicApi.rebind('seek', i.onSeek), i.publicApi.rebind('playbackratechange', i.onPlaybackRateChange), i.publicApi.rebind('percentWatchedThreshold', i.onPercentWatchedThreshold), i.monitorCameraPosition(), 'playing' === i.publicApi.state() && i.onPlay(), e.timeout(i.publicApi.uuid + '.start_tracking_timeout', function() {
                                return i.publicApi.info('_tracker start tracking_loop'), e.eventLoop.add(i.publicApi.uuid + '.tracking_loop', i.params.transmitInterval, function() {
                                    return 'playing' === i.publicApi.state() && i.log('update'), i.transmit()
                                })
                            }, Math.random() * i.params.transmitInterval + 1e3)
                        }
                    }(this))
                }, t.prototype.stopMonitoring = function() {
                    return this.publicApi.info('_tracker.stopMonitoring'), this.monitoring = !1, this.onPlay && this.publicApi.unbind('play', this.onPlay), this.onPause && this.publicApi.unbind('pause', this.onPause), this.onEnd && this.publicApi.unbind('end', this.onEnd), this.onSeek && this.publicApi.unbind('seek', this.onSeek), this.onPercentWatchedChanged && this.publicApi.unbind('percentwatchedchanged', this.onPercentWatchedChanged), this.unmonitorCameraPosition()
                }, t.prototype.distilleryUrl = function() {
                    return this.publicApi._opts.statsUrl || this.publicApi._mediaData.distilleryUrl
                }, t.prototype.sendToDistillery = function(t) {
                    return e.detect.browser.msie && 11 > e.detect.browser.version ? this.sendDataUsingJsonp(t) : this.sendDataUsingXhr(t)
                }, t.prototype.sendDataUsingXhr = function(t) {
                    var n;
                    return n = 3e4, e.remote.post(this.distilleryUrl(), {
                        contentType: 'text/plain',
                        data: encodeURIComponent(t),
                        timeout: n
                    })
                }, t.prototype.sendDataUsingJsonp = function(t) {
                    var n, i;
                    return n = 3e4, i = this.distilleryUrl() + '?data=' + encodeURIComponent(t), this.isIE && (i += '&ie=1'), e.remote.script(i, null, n)
                }, t.prototype.retrySendingFailedEvent = function() {
                    return this.sendToDistillery(this._failedEventsQueue.shift())
                }, t.prototype.resendAllFailedEvents = function() {
                    var e, t, n, i, a, r, l, s;
                    if (i = this._failedEventsQueue.length, clearTimeout(this._retryTimer), !!(0 < i)) {
                        for (s = 350, l = this._failedEventsQueue, t = function(e) {
                                return function(t, n) {
                                    return setTimeout(function() {
                                        return e.sendToDistillery(t)
                                    }, s * n)
                                }
                            }(this), (n = a = 0, r = l.length); a < r; n = ++a) e = l[n], t(e, n);
                        return this._failedEventsQueue = []
                    }
                }, t.prototype.transmit = function(t) {
                    return null == t && (t = {}), this.publicApi._attrs.shouldTrack ? e.util.pageLoaded(function(n) {
                        return function() {
                            return e.visitorKey.ready(function() {
                                var i, a;
                                if ((0 < n.eventQueue.length || t.force) && (i = n._data(), n.publicApi.info('_tracker.transmit', i), n.publicApi.trigger('transmit-stats', i), n.sendToDistillery(e.base64.encode(i)), n.eventQueue = []), !e.visitorKey._reported && (e.visitorKey._reported = !0, a = e.visitorKey.origin(), ('new' === a || 'timeout' === a) && e.Metrics.videoCount(n.publicApi, 'player/visitor_key/new', 1, {
                                        visitor_key: e.visitorKey.value(),
                                        visitor_key_origin: a
                                    }), 'timeout' === a && e.Metrics.videoCount(n.publicApi, 'player/visitor_key/shim_timeout', 1, {
                                        visitor_key: e.visitorKey.value()
                                    }), 'suggested' === a && e.Metrics.videoCount(n.publicApi, 'player/visitor_key/suggested', 1, {
                                        visitor_key: e.visitorKey.value()
                                    }), /-conflict$/.test(a))) return e.Metrics.videoCount(n.publicApi, 'player/visitor_key/conflict', 1, {
                                    visitor_key: e.visitorKey.value()
                                })
                            })
                        }
                    }(this)) : void 0
                }, t.prototype.debounceTransmit = function() {
                    return e.timeout(this.publicApi.uuid + '.transmit_play_data', function(e) {
                        return function() {
                            return e.transmit()
                        }
                    }(this), 350)
                }, t.prototype.log = function(e, t, n) {
                    var i;
                    if (this.publicApi._attrs.shouldTrack) return this.publicApi.info('_tracker.log', e, t, n), 'conversion' === e ? (this.params.conversionType = t, this.params.conversionData = n, this.transmit({
                        force: !0
                    })) : (i = {
                        key: e,
                        value: this.timeInVideo(),
                        timeDelta: this.timeDelta()
                    }, 'initialized' === e ? (i.lastAccountInstance = this._lastLoadForAccount, i.lastMediaInstance = this._lastLoadForMedia) : 'play' === e ? (i.lastAccountInstance = this._lastPlayForAccount, i.lastMediaInstance = this._lastPlayForMedia) : 'playbackRateChange' === e ? i.value = n : 'percentWatchedThreshold' === e ? i.value = n : 'cameraPosition' === e && (i.value = n), this.publicApi.debug('_tracker.log', i), this.eventQueue.push(i))
                }, t.prototype.logConversionOpportunity = function(t) {
                    var n;
                    return this.publicApi._attrs.shouldTrack ? null == t.co_key ? e.Metrics.videoCount(this.publicApi, 'player/no-co-key', 1) : (n = {
                        key: 'conversion',
                        value: t,
                        timeDelta: this.timeDelta()
                    }, this.publicApi.info('_tracker.logConversionOpportunity', t), this.eventQueue.push(n)) : void 0
                }, t.prototype.logAction = function(e, t) {
                    var n, i, r;
                    return null == t && (t = {}), n = {
                        time: this.publicApi.time(),
                        key: e,
                        type: 'default',
                        category: 'default',
                        text: 'test',
                        uniqueToVisitor: !1
                    }, i = a({}, n, t), r = {
                        value: i,
                        key: 'action',
                        timeDelta: this.timeDelta()
                    }, this.eventQueue.push(r)
                }, t.prototype.clearActionRecordings = function() {
                    return ['chapterImpression', 'chapterConversion', 'shareImpression', 'shareConversion'].forEach(function(e) {
                        return function(t) {
                            return Wistia.localStorage('action_recorded.' + e.publicApi.hashedId() + '.' + t, '', !0)
                        }
                    }(this))
                }, t.prototype.logCaptionSelection = function(e) {
                    var t;
                    if (this.publicApi._attrs.shouldTrack) return e.caption_key ? (t = {
                        key: 'caption',
                        value: e,
                        timeDelta: this.timeDelta()
                    }, this.publicApi.info('_tracker.logCaptionSelection', e), this.eventQueue.push(t)) : void 0
                }, t.prototype.logChapterClick = function(e, t) {
                    return this.logAction('chapterConversion', {
                        text: e.title,
                        type: 'conversion',
                        category: 'chapter',
                        uniqueToVisitor: !0,
                        time: t
                    }), this.logAction('chapterSelection-' + e.id, {
                        text: e.title,
                        type: 'interaction',
                        category: 'chapter',
                        time: t
                    })
                }, t.prototype.logShareClick = function(e) {
                    return this.logAction('shareConversion', {
                        text: e,
                        type: 'conversion',
                        category: 'share',
                        uniqueToVisitor: !0
                    }), this.logAction('shareClick-' + e, {
                        text: e,
                        type: 'interaction',
                        category: 'share'
                    })
                }, t.prototype.timeInVideo = function() {
                    var e;
                    return e = this.publicApi.time(), null == e && ('beforeplay' === this.publicApi.state() ? e = 0 : e = this.publicApi.duration()), e.toFixed(1)
                }, t.prototype.timeDelta = function() {
                    return new Date().getTime() - this.clockStart
                }, t.prototype.visitorKey = function() {
                    return e.visitorKey.ready() ? e.visitorKey.value() : null
                }, t.prototype.eventKey = function() {
                    return this.isValidKey(this._eventKey) ? this._eventKey : (this._eventKey = e.uniqId('7be62dae196bd0b7a65fd3de2b3b6528'.substring(0, 7) + '_'), this._eventKey)
                }, t.prototype.monitorCameraPosition = function() {
                    return this._lastPitch = 0, this._lastHeading = 0, this.publicApi.rebind('lookchange', this.onLookChange)
                }, t.prototype.unmonitorCameraPosition = function() {
                    return this.publicApi.unbind('lookchange', this.onLookChange)
                }, t.prototype.onLookChange = function(e) {
                    var t;
                    if ('playing' === this.publicApi.state()) return this._heading = e.heading, this._pitch = e.pitch, t = this._getIsInsidePauseBoundary(), this._cameraPauseTimeoutSet ? !t && (clearTimeout(this._cameraPauseTimeout), this._cameraPauseTimeoutSet = !1) : !t && (this._setPauseTimeout(), this._prevIsInsidePauseBoundary && this._logCurrentCameraPosition()), this._prevIsInsidePauseBoundary = t
                }, t.prototype._logCurrentCameraPosition = function() {
                    var e, t, n, i;
                    if (null != (i = this.publicApi._mediaData) && i.spherical) return (n = 'function' == typeof(e = this.publicApi).look ? e.look() : void 0, !!n) ? (this._heading || (this._heading = n.heading), this._pitch || (this._pitch = n.pitch), t = this.publicApi.time() + ',' + this._heading.toFixed() + ',' + this._pitch.toFixed(), this.log('cameraPosition', null, t)) : void 0
                }, t.prototype._setPauseTimeout = function() {
                    return this._startHeading = this._heading, this._startPitch = this._pitch, this._cameraPauseTimeoutSet = !0, this._cameraPauseTimeout = setTimeout(function(e) {
                        return function() {
                            return e._cameraPauseTimeoutSet = !1, e._logCurrentCameraPosition()
                        }
                    }(this), 250)
                }, t.prototype._getIsInsidePauseBoundary = function() {
                    var e, t;
                    return null == this._startHeading && (this._startHeading = 0), null == this._startPitch && (this._startPitch = 0), e = this._angularDistance(this._heading, this._startHeading), t = this._angularDistance(this._pitch, this._startPitch), 5 > e && 5 > t
                }, t.prototype._angularDistance = function(e, t) {
                    return Math.min(360 - n(e - t), n(e - t))
                }, t
            }()
        }(Wistia);
}, function(e, t, n) {
    var i;
    i = n(13), Wistia.base64 || (Wistia.base64 = {}), Wistia.base64.decode || (Wistia.base64._keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=', Wistia.base64.encode = i.base64Encode);
}, function(e, t, n) {
    var i;
    i = n(13), Wistia.base64 || (Wistia.base64 = {}), Wistia.base64.decode || (Wistia.base64._keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=', Wistia.base64.decode = i.base64Decode);
}, function(e, t, n) {
    (function(e) {
        var t, i, a, r, l, s, d, p, u, c;
        if (!e.remote) return d = n(17), s = n(20), i = n(16), a = e.Hosts = n(18), t = e.Ajax = n(28), r = e.MediaData = n(29), l = e.PlaylistData = n(30), c = n(26), p = c.jsonp, u = c.jsonpPlus, e.remote = {}, e.remote.appHostname = d, e.remote.embedHost = a.cdnFastWistiaComHost, e.remote.externalEmbedHost = a.cdnFastWistiaNetHost, e.remote.appHost = a.appHost, e.remote.assetHost = a.deliveryHost, e.remote.assetUrlWithCorrectHost = function(e, t, n) {
            return i.assetUrlWithCorrectHost(t, n)
        }, e.remote.findScriptInDomBySrc = s.findScriptInDomBySrc, e.remote.script = s.runScript, e.remote.scripts = s.runScripts, e.remote.scriptInputsToHash = s.scriptInputsToHash, e.remote.ajaxDefaults = t.AJAX_DEFAULTS, e.remote.get = t.ajaxGet, e.remote.head = t.ajaxHead, e.remote.post = t.ajaxPost, e.remote.ajax = t.ajax, e.remote.canEditMedia = r.canEditMedia, e.remote.media = r.fetchMedia, e.remote._isEmbedSslMedia = r.isEmbedSslMedia, e.remote._convertEmbedSslToAkamai = r.convertEmbedSslToAkamai, e.cacheMedia = r.cacheMedia, e.uncacheMedia = r.uncacheMedia, e.mediaFromCache = r.mediaFromCache, e.remote.playlist = l.fetchPlaylist, e.remote.fetch = u, e.jsonp = {
            get: p
        }
    })(Wistia);
}, function(e, t, n) {
    (function(e) {
        var t, i, a, r, l, s;
        if (!e.Metrics) return i = n(18).metricsHost, r = n(32), a = r.msend, s = r.send, t = r.count, l = r.sample, e.Metrics = {
            count: t,
            sample: l,
            send: s,
            msend: a,
            videoCount: function(e, t, n, i) {
                return null == n && (n = 1), this.videoSend(e, 'count', t, n, i)
            },
            videoSample: function(e, t, n, i) {
                return this.videoSend(e, 'sample', t, n, i)
            },
            videoSend: function(t, n, i, a, r) {
                return null == r && (r = {}), 'function' == typeof t.hasData ? t.hasData(function(l) {
                    return function() {
                        var s, d, p, u, c, m, g, h, y, f, _, b, v, A, w;
                        if (s = ('function' == typeof t.bandwidthTest ? t.bandwidthTest().savedResult() : void 0) || {}, r = e.obj.merge({
                                location: ('undefined' != typeof location && null !== location ? null == (p = location.protocol) ? void 0 : p.length : void 0) && ('undefined' != typeof location && null !== location ? null == (h = location.hostname) ? void 0 : h.length : void 0) ? location.protocol + '//' + location.hostname : null,
                                agent: navigator.userAgent,
                                account_key: null == (y = t._mediaData) ? void 0 : y.accountKey,
                                at: t.time(),
                                video_id: t.hashedId(),
                                embed_type: t.playerType,
                                duration: t.duration(),
                                client_kbps: s.clientKbps,
                                supports_hd: s.supportsHd,
                                autoplay: null != (f = t._opts) && f.autoPlay,
                                in_iframe: top !== self,
                                device_pixel_ratio: window.devicePixelRatio,
                                window_width: e.elem.width(window),
                                window_height: e.elem.height(window),
                                video_width: t.videoWidth(),
                                video_height: t.videoHeight(),
                                visitor_key: null == (_ = t._tracker) ? void 0 : _.visitorKey(),
                                event_key: null == (b = t._tracker) ? void 0 : b.eventKey(),
                                event_time_delta: null == (v = t._tracker) ? void 0 : v.timeDelta(),
                                connection_type: l.connectionType(),
                                version: 9,
                                channel: e.channelName
                            }, r), /romulus|html5|vulcan/.test(t.playerType) && (e.detect.trident ? r.errorState = null == (A = t.elem()) || null == (w = A.error) ? void 0 : w.code : r.errorState = null == (u = t.elem()) ? void 0 : u.error), null != t._cacheStatus && (r.cache_status = t._cacheStatus), null != t._assetServer && (r.asset_server = t._assetServer), null != t._cacheHit && (r.cache_hit = t._cacheHit), t.inFullscreen && (r.in_fullscreen = t.inFullscreen()), null == t._substream ? (r.substream = null, r.adaptive = null, d = null == (c = t.data) ? void 0 : c.asset) : (r.substream = t._substream.index, r.adaptive = t._substream.adaptive, r.current_level = t._substream.currentLevel, r.all_level_names = t._substream.allLevelNames, d = t._substream.asset, r.hls_error_counts = t._substream.hlsErrorCounts()), null != d && (r.asset_type = d.type, r.asset_slug = d.slug, r.bitrate = d.bitrate, r.asset_height = d.height, r.asset_width = d.width), 0 < (null == (m = t.videoElem) || null == (g = m.buffered) ? void 0 : g.length) && (r.bufferedFrom0 = t.videoElem.buffered.end(0)), null != t._timeToFirstByte && (r.time_to_first_byte = t._timeToFirstByte), r.buffered = null == t.totalBuffered ? void 0 : t.totalBuffered(), r.played = null == t.totalPlayed ? void 0 : t.totalPlayed(), l.send(n, i, a, r), t._mediaData && t._mediaData.accountKey && t._mediaData.accountSpecificMetrics) return l.send(n, t._mediaData.accountKey + '/' + i, a, r)
                    }
                }(this)) : void 0
            },
            countEvent: function(e, t, n) {
                var i;
                return n || (n = t), null == (i = this._private.countEventCallbacks)[n] && (i[n] = this._private.mkCountEventCallback(t, n)), e.rebind(t, this._private.countEventCallbacks[n])
            },
            countEventOnce: function(e, t, n) {
                var i;
                return n || (n = t), null == (i = this._private.countEventOnceCallbacks)[n] && (i[n] = this._private.mkCountEventOnceCallback(t, n)), e.rebind(t, this._private.countEventOnceCallbacks[n])
            },
            sampleEvent: function(e, t, n) {
                var i;
                return n || (n = t), null == (i = this._private.sampleEventCallbacks)[n] && (i[n] = this._private.mkSampleEventCallback(t, n)), e.rebind(t, this._private.sampleEventCallbacks[n])
            },
            countShowLoadingOnce: function(e) {
                var t;
                return t = -1, e.bind('waiting', function(n) {
                    return function(i) {
                        return 2 > t && 2 <= i ? (n.videoCount(e, 'player/show-loading/first', 1), t = i, e.unbind) : t = i
                    }
                }(this))
            },
            countShowLoadingAll: function(e) {
                var t;
                return t = -1, e.bind('waiting', function(n) {
                    return function(i) {
                        return 2 > t && 2 <= i && n.videoCount(e, 'player/show-loading/all', 1), t = i
                    }
                }(this)), e.bind('done-waiting', function() {
                    return t = -1
                })
            },
            countShowLoadingLongTimeOnce: function(e) {
                var t;
                return t = -1, e.bind('waiting', function(n) {
                    return function(i) {
                        return 5 > t && 5 <= i ? (n.videoCount(e, 'player/show-loading-long-time/first', 1), t = i, e.unbind) : t = i
                    }
                }(this))
            },
            countShowLoadingLongTimeAll: function(e) {
                var t;
                return t = -1, e.bind('waiting', function(n) {
                    return function(i) {
                        return 5 > t && 5 <= i && n.videoCount(e, 'player/show-loading-long-time/all', 1), t = i
                    }
                }(this)), e.bind('done-waiting', function() {
                    return t = -1
                })
            },
            assetBuckets: function(t) {
                var n, i;
                return n = t.engine ? t.engine.currentAsset() : t._currentAsset, i = e.detect.iphone || e.detect.android || e.detect.blackberry || /mobile/i.test(navigator.userAgent), n ? i ? e.detect.iphone ? ['mobile', 'iphone'] : e.detect.android ? ['mobile', 'android'] : ['mobile'] : /hls/.test(n.type) ? ['hls'] : /md/.test(n.type) ? ['md'] : /hd/.test(n.type) ? ['hd'] : ['sd'] : []
            },
            connectionType: function() {
                var e;
                return e = window.navigator.connection || window.navigator.mozConnection || window.navigator.webkitConnection, null == e ? void 0 : e.type
            },
            sumTimeRanges: function(e) {
                var t, n, i, a;
                if (null == e) return null;
                for (a = 0, t = n = 0, i = e.length; 0 <= i ? n < i : n > i; t = 0 <= i ? ++n : --n) a += e.end(t) - e.start(t);
                return a
            },
            millisecondsSince: function(e) {
                return new Date().getTime() - e
            },
            _private: {
                countEventCallbacks: {},
                mkCountEventCallback: function(t, n) {
                    return function(i) {
                        return n || (n = t), e.Metrics.videoCount(this, 'player/' + n, i)
                    }
                },
                countEventOnceCallbacks: {},
                mkCountEventOnceCallback: function(t, n) {
                    return function(i) {
                        return n || (n = t), e.Metrics.videoCount(this, 'player/' + n, i), this.unbind
                    }
                },
                sampleEventCallbacks: {},
                mkSampleEventCallback: function(t, n) {
                    return function(i) {
                        return n || (n = t), e.Metrics.videoSample(this, 'player/' + n, i)
                    }
                }
            }
        }
    })(Wistia);
}, function(e, t, n) {
    (function(e) {
        var t, a, i;
        if (e.Plugin || (e.Plugin = {}), !e.Plugin.Base) return (i = n(18), t = i.eV1Host, a = i.eV1Protocol, e.Plugin.Base = function() {
            function t() {
                this.pluginName = 'plugin', this
            }
            return t.prototype.instances = function() {
                return e.data(['plugins', this.pluginName, this.video.uuid])
            }, t.prototype.register = function(t) {
                var n;
                return n = this.playlist || this.video, n.plugins[this.uuid] = t, e.data(['plugins', this.pluginName, n.uuid, this.uuid], t)
            }, t.prototype.remove = function(t) {
                var n;
                if (null == t && (t = {}), n = this.playlist || this.video, n.plugins[this.uuid] = null, e.removeData(['plugins', this.pluginName, n.uuid, this.uuid]), n.plugins[this.uuid] === this && delete n.plugins[this.uuid], n.plugin[this.pluginName] === this && delete n.plugin[this.pluginName], !t.dontFit) return e.grid.fitHorizontal(n), e.grid.fitVertical(n)
            }, t.prototype.fit = function() {}, t.prototype.init = function(t, n) {
                return null == t.plugins && (t.plugins = {}), (null == t ? void 0 : t.playlist) ? this.playlist = t : this.video = t, this.target = this.playlist || this.video, this.options = n || {}, this.params = e.extend({}, n || {}), this.uuid = this.params.uuid || e.seqId('wistia_', '_plugin')
            }, t
        }(), !e.plugin) ? (e.plugin = function(t, n) {
            var i, a, r, l, s, d;
            if ((i = null == (l = e.pluginQueue) || null == (s = l[t]) ? void 0 : s.shift()) && (r = function() {
                    var e, a;
                    return i.video.info('initializing plugin', t, i.options), e = n(i.video._impl || i.video, i.options) || !0, i.video.plugin[t] = e, i.video._impl && (i.video._impl.plugin[t] = e), i.video.trigger('plugininitialized', t), null == (a = i.video._pluginStopGos) ? void 0 : 'function' == typeof a[t] ? a[t](!0, e) : void 0
                }, a = function() {
                    return i.options.initBeforeHasData ? r() : i.video.hasData(r)
                }, !0 !== i.options.initBeforeHasData && (null == (d = i.video) ? void 0 : d.looksDown()) ? (i.video.notice('W.plugin: delaying initialization of plugin until "up"', t, i.options), i.video.bind('up', function() {
                    return a(), this.unbind
                })) : i.video._implVersion === i.implVersion ? a() : i.video.notice('W.plugin impl changed, ignoring initialization', t, i.options)), !e.plugin[t]) return e.plugin[t] = n
        }, e.plugin._scriptsFromVideo = function(n) {
            var r, d, i, p, u, l, c, m, g, h, y, f, _, b, v, A, w, k, E;
            if (h = e.plugin._scriptsFromOptions(n._opts), h = h.concat(e.plugin._scriptsFromOptions({
                    plugin: n._playerPlugins || []
                })), (e.detect.safari || e.detect.iphone || e.detect.ipad) && 'vulcan-v2' === n._opts.playerPreference && !1 !== n._opts.airplayButton && (r = {
                    name: 'airplay',
                    options: (null == (y = n._opts.plugin) ? void 0 : y.airplay) || {},
                    async: !0,
                    src: a() + '//' + t() + '/assets/external/airplay.js'
                }, h.push(r)), 'vulcan-v2' === n._opts.playerPreference && n._opts.chaptersOn && (null == (f = n._opts.plugin) || !f.chapters) && (h = h.concat(e.plugin._scriptsFromOptions({
                    plugin: {
                        chapters: {
                            async: !1
                        }
                    }
                }))), 'vulcan-v2' === n._opts.playerPreference && (null == (_ = n._opts.plugin) ? void 0 : _['captions-v1']))
                for (d = 0, l = h.length; d < l; d++) E = h[d], 'captions-v1' === E.name && (E.name = 'captions', E.src = E.src.replace(/captions-v1/, 'captions'));
            if ('vulcan-v2' === n._opts.playerPreference && (null == (b = n._opts.plugin) ? void 0 : b.share))
                for (i = 0, c = h.length; i < c; i++) E = h[i], 'share' === E.name && (E.name = 'share-v2', E.src = E.src.replace(/share/, 'share-v2'));
            if ('vulcan-v2' === n._opts.playerPreference && (null == (v = n._opts.plugin) ? void 0 : v['postRoll-v1']))
                for (p = 0, m = h.length; p < m; p++) E = h[p], 'postRoll-v1' === E.name && (E.name = 'postRoll-v2', E.src = E.src.replace(/postRoll-v1/, 'postRoll-v2'));
            if ('vulcan-v2' === n._opts.playerPreference && (null == (A = n._opts.plugin) ? void 0 : A['midrollLink-v1']))
                for (u = 0, g = h.length; u < g; u++) E = h[u], 'midrollLink-v1' === E.name && (E.name = 'midrollLink-v2', E.src = E.src.replace(/midrollLink-v1/, 'midrollLink-v2'));
            return 'vulcan-v2' === n._opts.playerPreference && n._opts.showCustomerLogo && n._opts.customerLogoImageUrl && n._mediaData.enableCustomerLogo && h.push({
                name: 'customerLogo',
                options: (null == (w = n._opts.plugin) ? void 0 : w.customerLogo) || {},
                async: !0,
                src: a() + '//' + t() + '/assets/external/customerLogo.js'
            }), 'vulcan-v2' === n._opts.playerPreference && (!0 === n._opts.branding || !0 === n._mediaData.branding) && h.push({
                name: 'wistiaLogo',
                options: (null == (k = n._opts.plugin) ? void 0 : k.wistiaLogo) || {},
                async: !0,
                src: a() + '//' + t() + '/assets/external/wistiaLogo.js'
            }), e.plugin._setFnForDefinedPlugins(n, h), h
        }, e.plugin._prefetched = {}, e.plugin._scriptsFromOptions = function(n) {
            var i, r, l, s, d, p, u;
            for (r in s = [], d = n.plugin, d)(l = d[r], !!n.plugin.hasOwnProperty(r)) && !1 !== (null == l ? void 0 : l.on) && (p = e.plugin._getSourceName(r), i = {
                name: p,
                options: l,
                src: a() + '//' + t() + '/assets/external/' + p + '.js',
                async: null == l.async ? !/^(requireEmail|captions|socialbar|transcript|midrollLink|share)/.test(r) : l.async
            }, l.src && e.plugin._allow3rdParty(n) && (i.src = l.src), /transcript/.test(r) && (u = 'https:' === a() ? 'https://s3.amazonaws.com/origin-p3.3playmedia.com/javascripts/vendor/jquery-1.6.2.min.js' : 'http://p3.3playmedia.com/javascripts/vendor/jquery-1.6.2.min.js', s.push({
                src: u,
                async: !1
            })), s.push(i));
            return e.plugin._orderScripts(s)
        }, e.plugin._orderScripts = function(e) {
            var t, n;
            return t = function(e) {
                var t;
                return t = 0, null != (null == e ? void 0 : e.options) && 'loadWeight' in e.options && (t = e.options.loadWeight), t
            }, n = e.sort(function(e, n) {
                return t(e) - t(n)
            }), n
        }, e.plugin._getSourceName = function(e) {
            var t;
            return t = function() {
                return 'socialbar' === e ? 'socialbar-v1' : 'requireEmail' === e ? 'requireEmail-v1' : 'postRoll' === e ? 'postRoll-v1' : 'transcript' === e ? 'transcript-v2' : e
            }(), t
        }, e.plugin._inject = function(n, i, r) {
            var l, s;
            if (null == r && (r = {}), !1 !== r.on) return l = a() + '//' + t() + '/assets/external/' + i + '.js', s = [{
                name: i,
                options: r,
                src: r.src && e.plugin._allow3rdParty(n.options) ? r.src : l,
                async: !0
            }], e.plugin._setFnForDefinedPlugins(n, s), e.plugin._execQueue(n, s)
        }, e.plugin._allow3rdParty = function(e) {
            return !1 !== (null == e ? void 0 : e.allowThirdParty) && !/([\w\_\-]+\.)?wistia\.(com|st)$/.test(window.location.hostname)
        }, e.plugin._setFnForDefinedPlugins = function(t, n) {
            var a, i, r, l;
            for (r = [], a = 0, i = n.length; a < i; a++) l = n[a], e.plugin[l.name] && r.push(function(n) {
                return n.fn = function() {
                    var i;
                    return i = function() {
                        var i, a, r;
                        return a = e.plugin[n.name](t._impl || t, n.options) || !0, t.plugin[n.name] = a, t._impl && (t._impl.plugin[n.name] = a, t.trigger('plugininitialized', n.name)), null == (r = t._pluginStopGos) ? void 0 : 'function' == typeof r[i = n.name] ? r[i](!0, a) : void 0
                    }, n.options.initBeforeHasData ? i() : t.hasData(i)
                }, n.async = !1
            }(l));
            return r
        }, e.plugin._queueUndefinedPlugins = function(t, n) {
            var a, i, r, l, s, d;
            for (null == e.pluginQueue && (e.pluginQueue = {}), s = [], (a = 0, i = n.length); a < i; a++) l = n[a], l.subScripts ? s.push(function() {
                var n, i, a, s;
                for (a = l.subScripts, s = [], (n = 0, i = a.length); n < i; n++) d = a[n], r = d.name || d.src, null == e.pluginQueue[r] && (e.pluginQueue[r] = []), l.fn ? s.push(void 0) : s.push(e.pluginQueue[r].push({
                    video: t,
                    implVersion: t._implVersion,
                    options: d.options
                }));
                return s
            }()) : (r = l.name || l.src, null == e.pluginQueue[r] && (e.pluginQueue[r] = []), l.fn ? s.push(void 0) : s.push(e.pluginQueue[r].push({
                video: t,
                implVersion: t._implVersion,
                options: l.options
            })));
            return s
        }, e.plugin._execQueue = function(t, n, i) {
            return e.plugin._queueUndefinedPlugins(t, n), e.remote.scripts(n, i)
        }, e.plugin._init = function(t, n, i) {
            var a, r, l;
            return l = t.charAt(0).toUpperCase() + t.substr(1), r = e.Plugin[l], a = new r, a.init(n, i), a
        }, e.plugin._instance = function(t, n, i) {
            return e.data(['plugins', t, n.uuid, i])
        }, e.plugin._remove = function(t, n, i) {
            var a;
            null != (a = e.plugin._instance(t, n, i)) && a.remove()
        }, e.plugin._isActive = function(t, n, i) {
            return !!e.plugin._instance(t, n, i)
        }, e.plugin._defined = function() {
            var t, n, i, a;
            for (t in n = e.plugin, i = [], n) a = n[t], /^_/.test(t) || i.push({
                name: t,
                options: a
            });
            return i
        }) : void 0
    })(Wistia);
}, function() {
    (function(e) {
        var t;
        if (!e.seo) return t = e.seo = {}, e.seo.inject = function() {}
    })(Wistia);
}, function(e, t, n) {
    (function(e) {
        var t;
        if (!e.localStorage) return t = n(24), e.localStorage = t.setOrGet, e.removeLocalStorage = t.removeLocalStorage, e.dumpLocalStorage = t.dumpLocalStorage, e._initializers.initLocalStorage = function() {
            return t.init()
        }, e._destructors.destroyLocalStorage = function() {
            return t.uncache()
        }
    })(Wistia);
}, function() {
    (function(n) {
        return n.cookie ? void 0 : n.cookie = function(i, a, r) {
            var l, s, d, e, p;
            if (1 < arguments.length && '[object Object]' !== a + '') {
                r = n.extend({}, r), null == a && (r.expires = -1), 'number' == typeof r.expires && (l = r.expires, p = r.expires = new Date, p.setDate(p.getDate() + l)), a = a + '';
                try {
                    return document.cookie = [encodeURIComponent(i), '=', r.raw ? a : encodeURIComponent(a), r.expires ? '; expires=' + r.expires.toUTCString() : '', r.path ? '; path=' + r.path : '', r.domain ? '; domain=' + r.domain : '', r.secure ? '; secure' : ''].join('')
                } catch (e) {
                    if (d = e, /sandbox/i.test(d.message)) n.notice('sandboxed, can\'t write cookie'), null;
                    else throw d
                }
            }
            r = a || {}, s = r.raw ? function(e) {
                return e
            } : decodeURIComponent;
            try {
                return (e = new RegExp('(?:^|; )' + encodeURIComponent(i) + '=([^;]*)').exec(document.cookie)) ? s(e[1]) : null
            } catch (e) {
                if (d = e, /sandbox/i.test(d.message)) return n.notice('sandboxed, can\'t get cookie'), null;
                throw d
            }
        }
    })(Wistia);
}, function() {
    (function(e) {
        e.gridify || (e.gridifyCss = function(e) {
            var t;
            return t = e.replace(/_grid$/, ''), '#' + e + '_wrapper{-moz-box-sizing:content-box;-webkit-box-sizing:content-box;box-sizing:content-box;font-family:Arial,sans-serif;font-size:14px;height:100%;position:relative;text-align:left;width:100%;}\n#' + e + '_wrapper *{-moz-box-sizing:content-box;-webkit-box-sizing:content-box;box-sizing:content-box;}\n#' + e + '_above{position:relative;}\n#' + e + '_main{display:block;height:100%;position:relative;}\n#' + e + '_behind{height:100%;left:0;position:absolute;top:0;width:100%;}\n#' + e + '_center{height:100%;overflow:hidden;position:relative;width:100%;}\n#' + e + '_front{display:none;height:100%;left:0;position:absolute;top:0;width:100%;}\n#' + e + '_top_inside{position:absolute;left:0;top:0;width:100%;}\n#' + e + '_top{width:100%;position:absolute;bottom:0;left:0;}\n#' + e + '_bottom_inside{position:absolute;left:0;bottom:0;width:100%;}\n#' + e + '_bottom{width:100%;position:absolute;top:0;left:0;}\n#' + e + '_left_inside{height:100%;position:absolute;left:0;top:0;}\n#' + e + '_left{height:100%;position:absolute;right:0;top:0;}\n#' + e + '_right_inside{height:100%;right:0;position:absolute;top:0;}\n#' + e + '_right{height:100%;left:0;position:absolute;top:0;}\n#' + e + '_below{position:relative;}'
        }, e.gridifyHtml = function(e) {
            return {
                id: e + '_wrapper',
                childNodes: [{
                    id: e + '_above'
                }, {
                    id: e + '_main',
                    childNodes: [{
                        id: e + '_behind'
                    }, {
                        id: e + '_center'
                    }, {
                        id: e + '_front'
                    }, {
                        id: e + '_top_inside',
                        childNodes: {
                            id: e + '_top'
                        }
                    }, {
                        id: e + '_bottom_inside',
                        childNodes: {
                            id: e + '_bottom'
                        }
                    }, {
                        id: e + '_left_inside',
                        childNodes: {
                            id: e + '_left'
                        }
                    }, {
                        id: e + '_right_inside',
                        childNodes: {
                            id: e + '_right'
                        }
                    }]
                }, {
                    id: e + '_below'
                }]
            }
        }, e.createGrid = function(t, n) {
            var i;
            return i = e.createGridSkeleton(), e.initGridDimensions(t, i, n), i
        }, e.createGridSkeleton = function() {
            var t, n, a, r, i, l, s, d;
            for (n = e.seqId('wistia_grid_'), a = e.elem.fromObject(e.gridifyHtml(n)), t = e.css(a, e.gridifyCss(n)), l = {}, l.css = t, l.root = a, e.elem.style(a, {
                    display: 'none'
                }), e.elem.append(document.body, a), d = ['wrapper', 'main', 'above', 'below', 'top', 'right', 'bottom', 'left', 'top_inside', 'right_inside', 'bottom_inside', 'left_inside', 'front', 'center', 'behind'], (r = 0, i = d.length); r < i; r++) s = d[r], l[s] = document.getElementById(n + '_' + s);
            return e.elem.remove(a), e.elem.style(a, {
                display: 'block'
            }), l
        }, e.initGridDimensions = function(t, n, i) {
            var a, r, l;
            if (null == i && (i = {}), !1 !== i.initDimensions) return r = t._embedContainer, a = t.chrome, l = t._opts, a.style.height = e.elem.height(r) + 'px', n.main.style.width = e.elem.width(r) + 'px'
        }, e.gridify = function(t, n) {
            var a, r, i, l, s, d;
            for (s = {}, a = n.id + '_grid', n.innerHTML = e.generate.html(e.gridifyHtml(a)), l = ['wrapper', 'main', 'above', 'below', 'top', 'right', 'bottom', 'left', 'top_inside', 'right_inside', 'bottom_inside', 'left_inside', 'front', 'center', 'behind'], (r = 0, i = l.length); r < i; r++) d = l[r], s[d] = document.getElementById(a + '_' + d);
            return e.util.addInlineCss(s.wrapper, e.gridifyCss(a)), s.wrapper.style.height = e.elem.height(n) + 'px', s.main.style.width = e.elem.width(n) + 'px', s
        }, e.isGridElem = function(e, t) {
            var n, i;
            for (i in e)
                if (n = e[i], t === n) return !0;
            return !1
        }, e.grid = {}, e.grid.allNodesHidden = function(e) {
            var t, n, i;
            if (0 === e.length) return !0;
            for (t = 0, n = e.length; t < n; t++)
                if (i = e[t], i.style && 'none' !== i.style.display) return !1;
            return !0
        }, e.grid.zeroEmptySections = function(t) {
            var n, a, i, r, l, s;
            for (r = ['top', 'bottom', 'left', 'right', 'above', 'below'], l = [], (a = 0, i = r.length); a < i; a++) s = r[a], n = t.grid[s], n.childNodes.length ? e.grid.allNodesHidden(n.childNodes) ? (n.style.height = '0px', n.style.fontSize = '0px', n.style.lineHeight = '0px', l.push(n.isEmpty = !0)) : (n.style.height = '', n.style.fontSize = '', l.push(n.style.lineHeight = '')) : (n.appendChild(document.createTextNode(' ')), n.style.height = '0px', n.style.fontSize = '0px', n.style.lineHeight = '0px', l.push(n.isEmpty = !0));
            return l
        }, e.grid.wrapperHeight = function(t) {
            var n, i;
            return n = t.grid.wrapper, i = e.elem.height(n), i
        }, e.grid.wrapperWidth = function(t) {
            var n, i;
            return n = t.grid.wrapper, i = e.elem.width(n), i
        }, e.grid.fitVertical = function(t) {
            var n, i, a, r, l, s, d = Math.max;
            t._opts.dontFit || (e.grid.zeroEmptySections(t), i = t.grid, a = i.main, s = i.wrapper, l = d(e.elem.height(i.above), e.elem.height(i.top)), n = d(e.elem.height(i.below), e.elem.height(i.bottom)), r = d(0, e.grid.wrapperHeight(t) - l - n), a.style.height = r + 'px', 0 === e.elem.width(i.left) && (a.style.left = '0px'), a.style.marginTop = e.elem.height(i.top) + 'px')
        }, e.grid.fitHorizontal = function(t) {
            var n, i, a, r, l, s;
            t._opts.dontFit || (e.grid.zeroEmptySections(t), n = t.grid, s = n.wrapper, a = n.main, i = e.elem.width(n.left), l = e.elem.width(n.right), r = e.grid.wrapperWidth(t) - i - l, a.style.width = r + 'px', a.style.left = i + 'px')
        }, e.grid.fit = function(t, n) {
            /left|right/.test(n) ? e.grid.fitHorizontal(t) : /top|bottom|above|below/.test(n) && e.grid.fitVertical(t), t.ieSizeHack()
        })
    })(Wistia);
}, function(e, t, n) {
    (function(e) {
        return e.Color ? void 0 : e.Color = n(69)
    })(Wistia);
}, function(e, t, n) {
    var i, a;
    a = n(12).cachedDetect, i = function() {
        function e(t) {
            t instanceof e ? (this.r = t.r, this.g = t.g, this.b = t.b, this.a = t.a) : t ? this.parse(t) : (this.r = this.g = this.b = 0, this.a = 1), this
        }
        var t, n, i, r, l, s, d, p = Math.round,
            u = Math.min,
            c = Math.max;
        return e.detect = a(), l = /^#?([0-9a-f]{3,4}|[0-9a-f]{6,8})$/i, d = /^rgba?\((\d{1,3}(?:\.\d+)?%?),\s*(\d{1,3}(?:\.\d+)?%?),\s*(\d{1,3}(?:\.\d+)?%?)(?:,\s*([01]?\.?\d*))?\)$/, s = /^\d+(\.\d+)*%$/, n = /([0-9a-f])/gi, t = function(e) {
            return .5 + e << 0
        }, r = function(e) {
            return s.test(e) ? 2.55 * parseFloat(e) : e
        }, i = function(e, t, n) {
            return 0 > n && (n += 1), 1 < n && (n -= 1), n < 1 / 6 ? e + 6 * (t - e) * n : n < 1 / 2 ? t : n < 2 / 3 ? e + 6 * ((t - e) * (2 / 3 - n)) : e
        }, e.prototype.parse = function(e) {
            var t, i;
            return e += '', l.test(e) ? (i = e.replace(/^\#/, ''), (3 === i.length || 4 === i.length) && (i = i.replace(n, '$1$1')), this.r = parseInt(i.substr(0, 2), 16), this.g = parseInt(i.substr(2, 2), 16), this.b = parseInt(i.substr(4, 2), 16), this.a = 8 === i.length ? parseInt(i.substr(6, 2), 16) / 255 : 1) : d.test(e) && (t = e.match(d), this.r = parseFloat(r(t[1])), this.g = parseFloat(r(t[2])), this.b = parseFloat(r(t[3])), this.a = t[4] ? parseFloat(t[4]) : 1), this
        }, e.prototype.clone = function() {
            return new e(this)
        }, e.prototype._hslFromRgb = function() {
            var e, t, n, i, a, l, d, p, r, s;
            return (p = this.r / 255, n = this.g / 255, e = this.b / 255, l = c(p, n, e), d = u(p, n, e), a = (l + d) / 2, s = l, l === d && (this._h = this._s = 0), t = l - d, 0 === t) ? (this._h = 0, this._s = 0, this._l = 100 * p, this) : (r = .5 < a ? t / (2 - l - d) : t / (l + d), i = l === p ? (n - e) / t + (n < e ? 6 : 0) : l === n ? (e - p) / t + 2 : (p - n) / t + 4, i /= 6, this._h = 360 * i, this._s = 100 * r, this._l = 100 * a, this)
        }, e.prototype._rgbFromHsl = function() {
            var e, t, n, a, r;
            return e = this._h / 360, r = this._s / 100, t = this._l / 100, a = .5 > t ? t * (1 + r) : t + r - t * r, n = 2 * t - a, this.r = 255 * i(n, a, e + 1 / 3), this.g = 255 * i(n, a, e), this.b = 255 * i(n, a, e - 1 / 3), this
        }, e.prototype.blendChannel = function(e, t, n) {
            return this[e] = n * t + (1 - n) * this[e], this
        }, e.prototype.blend = function(t, n) {
            return t = new e(t), this.blendChannel('r', t.r, n), this.blendChannel('g', t.g, n), this.blendChannel('b', t.b, n), this
        }, e.prototype.lightenChannel = function(e, t) {
            return this[e] += t, 0 > this[e] ? this[e] = 0 : 255 < this[e] && (this[e] = 255), this
        }, e.prototype.lighten = function(e) {
            return this.looksLikePercent(e) ? this.lightness(this.lightness() + parseFloat(e)) : (this.lightenChannel('r', e), this.lightenChannel('g', e), this.lightenChannel('b', e)), this
        }, e.prototype.darken = function(e) {
            return 'string' == typeof e ? this.lighten('-' + e) : this.lighten(-e)
        }, e.prototype.looksLikePercent = function(e) {
            return /^\-?\d+(\.\d+)?%$/.test(e)
        }, e.prototype.lightness = function(e) {
            return this._hslFromRgb(), null == e ? this._l : (this._l = c(0, u(100, e)), this._rgbFromHsl(), this)
        }, e.prototype.saturation = function(e) {
            return this._hslFromRgb(), null == e ? this._s : (this._s = c(0, u(100, e)), this._rgbFromHsl(), this)
        }, e.prototype.grayLevel = function() {
            return (.299 * this.r + .587 * this.g + .114 * this.b) / 255
        }, e.prototype.whiteLevel = function() {
            return u(u(this.r, this.g), this.b)
        }, e.prototype.isGrayscale = function() {
            return this.r === this.g && this.g === this.b
        }, e.prototype.distanceFrom = function(e) {
            var t = Math.pow;
            return Math.sqrt(t(this.r - e.r, 2) + t(this.g - e.g, 2) + t(this.b - e.b, 2))
        }, e.prototype.channelDominance = function() {
            return ['r', 'g', 'b'].sort(function(e) {
                return function(t, n) {
                    return e[n] - e[t]
                }
            }(this))
        }, e.prototype.alpha = function(e) {
            return null == this.a ? this.a : (this.a = e, this)
        }, e.prototype.red = function(e) {
            return null == e ? this.r : (this.r = e, this)
        }, e.prototype.green = function(e) {
            return null == this.g ? this.g : (this.g = e, this)
        }, e.prototype.blue = function(e) {
            return null == this.b ? this.b : (this.b = e, this)
        }, e.prototype.toHex = function() {
            var e, t, n;
            return n = p(this.r).toString(16), t = p(this.g).toString(16), e = p(this.b).toString(16), 1 === n.length && (n = '0' + n), 1 === t.length && (t = '0' + t), 1 === e.length && (e = '0' + e), '' + n + t + e
        }, e.prototype.toHexWithAlpha = function() {
            var e;
            return e = p(255 * this.a).toString(16), 1 === e.length && (e = '0' + e), '' + e + this.toHex()
        }, e.prototype.toRgb = function() {
            return 'rgb(' + p(this.r) + ',' + p(this.g) + ',' + p(this.b) + ')'
        }, e.prototype.toRgba = function() {
            return 'rgba(' + p(this.r) + ',' + p(this.g) + ',' + p(this.b) + ',' + this.a + ')'
        }, e.prototype.toRgbaOrHex = function() {
            return this.constructor.detect.browser.msie && 9 > this.constructor.detect.browser.version ? '#' + this.toHex() : this.toRgba()
        }, e.prototype.toPercent = function() {
            return 'rgba(' + 100 * (this.r / 255) + '%,' + 100 * (this.g / 255) + '%,' + 100 * (this.b / 255) + '%,' + this.a + ')'
        }, e.prototype.toIeGradient = function() {
            return 'progid:DXImageTransform.Microsoft.gradient(startColorStr=\'#' + this.toHexWithAlpha() + '\', endColorStr=\'#' + this.toHexWithAlpha() + '\')'
        }, e.prototype.toString = function() {
            return this.toPercent()
        }, e
    }(), e.exports = i;
}, function(e, t, n) {
    (function(t) {
        var i;
        if (!t.embeds) return t.embeds = {}, i = n(11).wlog, t.embeds.setup = function(e) {
            return t.embeds.notEmbedding(function() {
                var n, i, a, r, l, s, d, p, u;
                t.embeds.notEmbedding(!1), r = [];
                try {
                    for (e = t.embeds.uninitialized(e), e && e.length && 0 < e.length && t.info('initializing', null == e ? void 0 : e.length, 'embedElems'), (s = 0, d = e.length); s < d; s++) {
                        a = e[s];
                        try {
                            t.info('initializing elem', a), l = t.embeds.hashedIdForElem(a, {
                                    asyncOnly: !0
                                }), a.id ? document.getElementById(a.id) !== a && (p = t.embeds.genIdFor(l), t.error('Duplicate DOM ID found for container "' + a.id + '". Changing it to "' + p + '" to avoid issues.', a), a.id = p) : a.id = t.embeds.genIdFor(l), u = t.embeds.optionsFromElemClass(a), t.options('__' + a.id + '_dom_options__', u),
                                function(e, n) {
                                    return r.push(function() {
                                        if (!t.embeds.containerIsInitialized(n)) return t.embed(e, {
                                            container: n.id
                                        })
                                    })
                                }(l, a)
                        } catch (e) {
                            n = e, t.error(n)
                        }
                    }
                } catch (e) {
                    i = e, t.error(i)
                }
                return r.push(function() {
                    return t.watchForInit()
                }), r.push(function() {
                    return t.embeds.notEmbedding(!0)
                }), t.asyncChain('embeds_setup', r)
            })
        }, t.embeds._setupThrottled = t.util.throttle(500, t.embeds.setup), t.embeds.optionsFromElemClass = function(e) {
            var n, i, a, r, l, s;
            for (r = [], s = t.elem.classes(e), (n = 0, a = s.length); n < a; n++) i = s[n], 0 < i.indexOf('=') && r.push(i);
            return l = t.url.paramsToJson(r.join('&')), t.obj.cast(l), l
        }, t.embeds.hashedIdForElem = function(e, t) {
            var n, i, a, r, l, s;
            return null == t && (t = {}), t.asyncOnly ? (null == (n = e.className) || null == (i = n.match(/wistia_async_([^\s]+)/)) ? void 0 : i[1]) || null : (null == (a = e.className) || null == (r = a.match(/wistia_async_([^\s]+)/)) ? void 0 : r[1]) || (null == (l = e.className) || null == (s = l.match(/wistia_([^\s]+)/)) ? void 0 : s[1]) || null
        }, t.embeds.genIdFor = function(e) {
            var t, n, a;
            for (t = 'wistia-' + e, a = 1; n = t + '-' + a, !!document.getElementById(n);) a += 1;
            return n
        }, t.embeds._options = {}, t.embeds.options = function(e, n) {
            var i, a, r, l;
            if (t.obj.isObject(e) && (n = e, e = '__global__'), null != n) return t.embeds._options[e] = t.obj.cast(t.obj.clone(n));
            if (e) {
                if (t.embeds._options[e]) return t.embeds._options[e];
                if (i = t.api(e), null === i) return {};
                for (a in r = t.embeds._options, r)
                    if (l = r[a], t.api(a) === i) return l;
                return {}
            }
            return t.embeds._options
        }, t.options = t.embeds.options, t.embeds.api = function(e) {
            var n, i, a, r, l, s, d;
            return null == e && (e = 'wistia_embed'), document.querySelectorAll ? document.querySelectorAll('div.' + e + ',span.' + e) : (i = (null == (r = document.body) ? void 0 : r.getElementsByTagName('div')) || [], d = (null == (l = document.body) ? void 0 : l.getElementsByTagName('span')) || [], n = function() {
                var n, r, l;
                for (l = [], n = 0, r = i.length; n < r; n++) a = i[n], t.elem.hasClass(a, e) && l.push(a);
                return l
            }(), s = function() {
                var n, i, r;
                for (r = [], n = 0, i = d.length; n < i; n++) a = d[n], t.elem.hasClass(a, e) && r.push(a);
                return r
            }(), n.concat(s))
        }, t.embeds.uninitialized = function(e) {
            var n, i, a, r, l;
            for (null == e && (e = t.embeds.api()), l = [], (a = 0, r = e.length); a < r; a++) n = e[a], i = t.embeds.hashedIdForElem(n, {
                asyncOnly: !0
            }), i && !t.embeds.containerIsInitialized(n) && l.push(n);
            return l
        }, t.embeds.containerIsInitialized = function() {
            return function(e) {
                return e && e.wistiaApi && !(e.wistiaApi instanceof t.IframeApiProxy)
            }
        }(this), t.embeds.initialized = function() {
            var e, n, i, a;
            for (a in n = t._data.video, i = [], n) e = n[a], i.push(e);
            return i
        }, t.embeds.observe = function() {
            var n, a;
            if (!t.embeds.initObserver) {
                if (t.embeds.initObserver = t.elem.mutationObserver(function(e) {
                        var n, i, a, r, l, s, d, p, u, c;
                        for (i = [], n = !1, (a = 0, r = e.length); a < r; a++)
                            for (d = e[a], 0 < (null == (u = d.addedNodes) ? void 0 : u.length) && (n = !0), c = d.addedNodes || [], (s = 0, l = c.length); s < l; s++) p = c[s], t.elem.hasClass(p, 'wistia_embed') && i.push(p);
                        if (0 < i.length && setTimeout(function() {
                                return t.embeds.setup(i)
                            }, 10), n) return t.embeds._setupThrottled()
                    }), n = {
                        subtree: !0,
                        childList: !0
                    }, 0 < t.detect.ios.version) return t.util.onDocReady(function() {
                    return t.embeds.initObserver.observe(document.body, n)
                });
                try {
                    return t.embeds.initObserver.observe(document.body, n)
                } catch (e) {
                    return a = e, i.notice(a), t.util.onDocReady(function() {
                        return t.embeds.initObserver.observe(document.body, n)
                    })
                }
            }
        }, t.embeds.unobserve = function() {
            var e;
            return null != (e = t.embeds.initObserver) && e.disconnect(), t.embeds.initObserver = null
        }, t.embeds.poll = function(e) {
            return null == e && (e = 500), t.eventLoop.add('poll_setup_embeds', e, function() {
                return t.embeds.setup()
            })
        }, t.embeds.unpoll = function() {
            var e;
            return null == (e = t.eventLoop) ? void 0 : e.remove('poll_setup_embeds')
        }, t.embeds.watch = function() {
            return t.embeds._dontWatch = !1, t.detect.mutationObserver && !t.detect.trident ? (t.embeds.observe(), t.embeds.poll(2e3)) : t.embeds.poll()
        }, t.embeds.dontWatch = function() {
            return t.embeds._dontWatch = !0, t.embeds.unwatch()
        }, t.embeds.unwatch = function() {
            return t.embeds.unobserve(), t.embeds.unpoll()
        }, t.flushInit = function() {
            var n, e, a, r;
            if (window.wistiaInit) {
                if (wistiaInit instanceof Array)
                    for (a = 0, r = wistiaInit.length; a < r; a++) {
                        e = wistiaInit[a];
                        try {
                            'function' == typeof e && e(t)
                        } catch (e) {
                            n = e, i.error(n)
                        }
                    } else 'function' == typeof wistiaInit && wistiaInit(t);
                return window.wistiaInit = null
            }
        }, t.addQueue = function(e) {
            return t._queueNames.push(e), t.watchForInit()
        }, t._queueNames = ['_wq', 'wistiaInitQueue'], t._wqBoundListeners = [], t.flushInitQueue = function() {
            var n, e, a, r, l, s, d, p, u, c, m, g, h, y, f, _;
            for (h = t._queueNames, y = [], (l = 0, d = h.length); l < d; l++)
                if (m = h[l], c = window[m], !!(c && c instanceof Array && 0 < c.length)) {
                    for (r = []; 0 < c.length;)
                        if (f = c.shift(), !t.obj.isObject(f)) 'function' == typeof f ? function(e) {
                            var n;
                            return n = function() {
                                return e(t)
                            }, r.push(n)
                        }(f) : t.notice(m + ': Don\'t know what to do with ' + f + ', ignoring.');
                        else if (f.revoke && t.revokeQueueListener(f.revoke), f.__unbinds || (f.__unbinds = []), f.id) g = !1, f.options && ('_all' === f.id ? (t.options(f.options), g = !0) : (t.options(f.id, f.options), g = !0)),
                        function(e) {
                            var n, i;
                            return i = '_all' === e.id ? [] : [e.id], e.onFind && (n = i.concat([function(t) {
                                return e.onFind(t)
                            }]), e.__unbinds = e.__unbinds.concat(t.api.apply(t, n)), g = !0), e.onHasData && (n = i.concat([function(t) {
                                return t.hasData(function() {
                                    return e.onHasData(t)
                                })
                            }]), e.__unbinds = e.__unbinds.concat(t.api.apply(t, n)), g = !0), e.onEmbedded && (n = i.concat([function(t) {
                                return t.embedded(function() {
                                    return e.onEmbedded(t)
                                })
                            }]), e.__unbinds = e.__unbinds.concat(t.api.apply(t, n)), g = !0), e.onReady && (n = i.concat([function(t) {
                                return t.ready(function() {
                                    return e.onReady(t)
                                })
                            }]), e.__unbinds = e.__unbinds.concat(t.api.apply(t, n)), g = !0), g ? t._wqBoundListeners.push(e) : t.error('No initialization function provided for ID ' + e.id, e)
                        }(f);
                    else
                        for (s in a = function(e, n, i) {
                                var a, l;
                                if ('function' == typeof i) return l = function(e) {
                                    return e.hasData(function() {
                                        return i(e)
                                    })
                                }, a = function() {
                                    return e.__unbinds = '_all' === n ? e.__unbinds.concat(t.api(l)) : e.__unbinds.concat(t.api(n, l)), t._wqBoundListeners.push(e)
                                }, r.push(a);
                                if (t.obj.isObject(i)) return a = '_all' === n ? function() {
                                    return t.options(i)
                                } : function() {
                                    return t.options(n, i)
                                }, r.push(a);
                                if ('__unbinds' === n || 'revoke' === n);
                                else return t.error('Unknown initialization object:', i, 'Expected Object or Function.')
                            }, f) _ = f[s], a(f, s, _);
                    for (u = 0, p = r.length; u < p; u++) {
                        e = r[u];
                        try {
                            'function' == typeof e && e(t)
                        } catch (e) {
                            n = e, i.error(n)
                        }
                    }
                    y.push(c.length = 0)
                }
            return y
        }, t.getInitQueueListeners = function() {
            return t.obj.assign([], t._wqBoundListeners)
        }, t.revokeQueueListener = function(e) {
            var n, i, a, r, l, s, d, p;
            for (d = e instanceof Array ? e : [e], s = [], (n = 0, i = d.length); n < i; n++) {
                if (e = d[n], e.__unbinds) {
                    for (l = e.__unbinds, r = 0, a = l.length; r < a; r++) p = l[r], 'function' == typeof p && p();
                    delete e.__unbinds
                }
                s.push(t._wqBoundListeners = t._wqBoundListeners.filter(function(t) {
                    return t !== e
                }))
            }
            return s
        }, t.watchForInit = function() {
            if (null == t._pollInit && (t._pollInit = function() {
                    return t.flushInitQueue(), t.flushInit()
                }), t._pollInit(), t.eventLoop) return t.eventLoop.unpause('poll_init'), t.eventLoop.add('poll_init', 500, t._pollInit)
        }, t.api = function(e, n) {
            var i, a, r, l, s, d, p, u, c, m, g;
            if (null != e) {
                if (n) return t.api.onFind(e, n);
                if ('function' == typeof e) return t.api.onFind(e);
                if ('string' != typeof e) 'number' == typeof e ? (s = e, i = t.api.all(), 0 > s && (s = i.length + s), r = (null == (g = i[s]) ? void 0 : g.container) || null) : window.HtmlElement && e instanceof HtmlElement ? r = e : t.error('W.api: Unrecognized matcher', e);
                else if (u = e, r = document.getElementById(u), !r)
                    for (a = t.api.all(), d = 0, p = a.length; d < p; d++)
                        if (l = a[d], 0 === (null == (c = l.hashedId()) ? void 0 : c.indexOf(u)) || 0 === (null == (m = l.container.id) ? void 0 : m.indexOf(u))) {
                            r = l.container;
                            break
                        }
                return (null == r ? void 0 : r.wistiaApi) && (r.wistiaApi instanceof t.PublicApi || t.IframeApi && r.wistiaApi instanceof t.IframeApi) ? r.wistiaApi : null
            }
            return t.api.all()[0] || null
        }, t.api.all = function() {
            return t.api._apiHandles().concat(t.api._iframeHandles())
        }, t.api._apiHandles = function() {
            return t.embeds.initialized()
        }, t.api._apiHandlesByDomOrder = function() {
            var e, n, i, a, r;
            for (n = t.embeds.api('wistia_embed_initialized'), r = [], (i = 0, a = n.length); i < a; i++) e = n[i], e.wistiaApi && e.wistiaApi instanceof t.PublicApi && r.push(e.wistiaApi);
            return r
        }, t.api._iframeHandles = function() {
            var e, n, i, a;
            for (a in n = t._data.iframe_api, i = [], n) e = n[a], i.push(e);
            return i
        }, t.api.onFind = function(e, n) {
            var i, a;
            return 'function' == typeof e && (n = e, e = null), i = function(i) {
                    return (null === e || t.api(e) === i) && (n(i), !0)
                }, wistiaEmbeds.each(i), a = [wistiaEmbeds.on('initembed', i), wistiaEmbeds.on('afterreplace', i)],
                function() {
                    return function() {
                        var e, t, n, i;
                        for (n = [], e = 0, t = a.length; e < t; e++) i = a[e], n.push(i());
                        return n
                    }
                }(this)
        }, t._asyncInitSoonAfterLoad = function(e) {
            return null == e && (e = 10), setTimeout(function() {
                var n;
                try {
                    return t.embeds.setup(), t.embeds._dontWatch || t.embeds.watch(), t.watchForInit()
                } catch (e) {
                    return n = e, i.error(n)
                }
            }, e)
        }, t._initializers.initAsyncEmbeds = function() {
            var e, n, i;
            return t.embeds.notEmbedding = new t.StopGo, t.embeds.notEmbedding(!0), null == t._data && (t._data = {}), null == (e = t._data).video && (e.video = {}), null == (n = t._data).iframe_api && (n.iframe_api = {}), window._inWistiaIframe ? setTimeout(function() {
                return t.watchForInit()
            }, 10) : (0 < t.detect.ios.version ? t.util.onDocReady(t._asyncInitSoonAfterLoad) : (!t.util.isDocReady() && t.util.onDocReady(t._asyncInitSoonAfterLoad), t._asyncInitSoonAfterLoad()), t._asyncInitSoonAfterLoad(500), null == (i = t.eventLoop) ? void 0 : i.pause('poll_init'))
        }, t._destructors.destroyAsyncEmbeds = function() {
            var e, n;
            return t.clearTimeouts('embeds_setup'), null != (e = t.eventLoop) && e.remove('poll_init'), null == (n = t.embeds) ? void 0 : n.unwatch()
        }
    })(Wistia);
}, function(e, t, n) {
    'use strict';
    n.r(t);
    var a = n(2);
    a['default']._initializers.initEmbedLinks = function() {
        wistiaEmbeds.bind('initembed', function() {
            a['default'].timeout('maybe_load_embed_links_1', l, 1), a['default'].timeout('maybe_load_embed_links_1000', l, 1e3), a['default'].timeout('maybe_load_embed_links_3000', l, 3e3)
        }), a['default'].util.onDocReady(function() {
            l(), a['default'].timeout('maybe_load_embed_links_5000', l, 5e3)
        })
    }, a['default']._destructors.destroyEmbedLinks = function() {
        a['default'].EmbedLink.EmbedLinkClass && a['default'].EmbedLink.EmbedLinkClass._onEv1Destroy()
    };
    var i = function() {
            return a['default'].asyncRequire('embedLinks.js')
        },
        r = function() {
            for (var e = a['default'].api._apiHandlesByDomOrder(), t = 0; t < e.length; t++)
                if (e[t]._opts && e[t]._opts.playlistLinks) return !0;
            return !!(0 < document.querySelectorAll('a[href^="#wistia_"]').length)
        },
        l = function() {
            r() && i()
        };
    a['default'].EmbedLink = {}, a['default'].EmbedLink.setup = function() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return i().then(function() {
            var e;
            (e = a['default'].EmbedLink.EmbedLinkClass).setup.apply(e, t)
        })
    }, a['default'].EmbedLink.setupAll = function() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return i().then(function() {
            var e;
            (e = a['default'].EmbedLink.EmbedLinkClass).setupAll.apply(e, t)
        })
    }, a['default'].EmbedLink.destroyAll = function() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return i().then(function() {
            var e;
            (e = a['default'].EmbedLink.EmbedLinkClass).destroyAll.apply(e, t)
        })
    };
}, function() {
    var e = [].slice;
    (function(t) {
        var n, i, a, r, l;
        if (i = t.lib('promiscuous'), t.iframeInit || (t.iframeInit = function(e, n) {
                return t.asyncRequire('insideIframe.js').then(function(t) {
                    return t(e, n)
                })
            }), !t.IframeApiProxy) {
            for (a in n = function() {
                    function n(e) {
                        this.iframe = e, this.loadIframeApi()
                    }
                    return n.prototype.loadIframeApi = function() {
                        return new i(function() {
                            return function(e) {
                                return setTimeout(function() {
                                    return t.asyncRequire('iframeApi.js').then(function(t) {
                                        return function() {
                                            return t._loaded = !0, e()
                                        }
                                    }(this))
                                }, 0)
                            }
                        }(this))
                    }, n.prototype.proxyFn = function() {
                        var t, n, i;
                        return n = arguments[0], t = 2 <= arguments.length ? e.call(arguments, 1) : [], this._loaded ? (i = this.iframe.wistiaApi)[n].apply(i, t) : (this.loadIframeApi().then(function(e) {
                            return function() {
                                var i;
                                if (e.iframe.wistiaApi !== e) return (i = e.iframe.wistiaApi)[n].apply(i, t)
                            }
                        }(this)), this)
                    }, n.prototype._hasImpl = function() {
                        var t;
                        return t = 1 <= arguments.length ? e.call(arguments, 0) : [], this.proxyFn.apply(this, ['_hasImpl'].concat(e.call(t)))
                    }, n.prototype.hasData = function() {
                        var t;
                        return t = 1 <= arguments.length ? e.call(arguments, 0) : [], this.proxyFn.apply(this, ['hasData'].concat(e.call(t)))
                    }, n.prototype.embedded = function() {
                        var t;
                        return t = 1 <= arguments.length ? e.call(arguments, 0) : [], this.proxyFn.apply(this, ['embedded'].concat(e.call(t)))
                    }, n.prototype.ready = function() {
                        var t;
                        return t = 1 <= arguments.length ? e.call(arguments, 0) : [], this.proxyFn.apply(this, ['ready'].concat(e.call(t)))
                    }, n.prototype.up = function() {
                        var t;
                        return t = 1 <= arguments.length ? e.call(arguments, 0) : [], this.proxyFn.apply(this, ['up'].concat(e.call(t)))
                    }, n.prototype.down = function() {
                        return this.proxyFn.apply(this, ['down'].concat(e.call(args)))
                    }, n
                }(), r = t.PublicApi.prototype, r) l = r[a], n.prototype[a] || 'function' != typeof l || function(t) {
                return n.prototype[t] = function() {
                    var n;
                    return n = 1 <= arguments.length ? e.call(arguments, 0) : [], this.proxyFn.apply(this, [t].concat(e.call(n)))
                }
            }(a);
            t.IframeApiProxy = n
        }
        return null == t.maybeRequireIframeApi && (t.maybeRequireIframeApi = function() {
            var e, t, i, a, r;
            if (r = document.querySelectorAll('iframe.wistia_embed,iframe[name=wistia_embed],iframe.wistia_playlist,iframe[name=wistia_playlist]'), 0 < r.length) {
                for (a = [], e = 0, i = r.length; e < i; e++) t = r[e], t.wistiaApi ? a.push(void 0) : a.push(t.wistiaIframeApiProxy = t.wistiaApi = new n(t));
                return a
            }
        }), null == t.onIframePostMessage && (t.onIframePostMessage = function(e) {
            if ('new-wistia-iframe' === e.data) return t.asyncRequire('iframeApi.js'), t.elem.unbind
        }), t.elem.rebind(window, 'message', t.onIframePostMessage), t.bind('ev1initend', function() {
            return t.maybeRequireIframeApi(), t.elem.rebind(window, 'message', t.onIframePostMessage)
        }), t.bind('ev1destroystart', function() {
            return t.elem.unbind(window, 'message', t.onIframePostMessage)
        })
    })(Wistia);
}, function() {
    var e = function(e, n) {
            function i() {
                this.constructor = e
            }
            for (var a in n) t.call(n, a) && (e[a] = n[a]);
            return i.prototype = n.prototype, e.prototype = new i, e.__super__ = n.prototype, e
        },
        t = {}.hasOwnProperty;
    (function(t) {
        if (!t.EmbedListener) return t.EmbedListener = function(n) {
            function i() {
                this.uuid = t.seqId(), this.bindHandles(), this.bind('down', function(e) {
                    return function() {
                        return e.info('got down event, prune and rebind handles'), t.timeout('prune_zombies_later', function() {
                            return e.pruneZombies(), e.bindHandles()
                        })
                    }
                }(this)), this.bind('up', function(e) {
                    return function(t) {
                        return e.info('got up event, set _bound=false for', t), t._bound = !1, e.bindHandles()
                    }
                }(this))
            }
            return e(i, n), i.prototype.bindHandles = function() {
                var e, t, n, i, a;
                for (e = this.allUnboundHandles(), this.info('bindHandles', e), a = [], (n = 0, i = e.length); n < i; n++) t = e[n], this.info('bind to all events for', t), t._bound = !0, a.push(this.push(t));
                return a
            }, i.prototype.pruneZombies = function() {
                var e, t, n, i, a, r, l, s, d, p, u;
                for (this.info('pruneZombies'), u = [], s = this.allBoundHandles(), (n = 0, r = s.length); n < r; n++) e = s[n], e.looksDown() ? this.info('prune zombie', e) : u.push(e);
                for (t = i = 0, d = this.length; 0 <= d ? i <= d : i >= d; t = 0 <= d ? ++i : --i) delete this[t];
                for (this.length = 0, p = [], (a = 0, l = u.length); a < l; a++) e = u[a], p.push(this.push(e));
                return p
            }, i.prototype.allBoundHandles = function() {
                var e, t, n, i, a;
                for (a = [], i = this.allHandles(), (t = 0, n = i.length); t < n; t++) e = i[t], e._bound && a.push(e);
                return a
            }, i.prototype.allUnboundHandles = function() {
                var e, t, n, i, a;
                for (a = [], i = this.allHandles(), (t = 0, n = i.length); t < n; t++) e = i[t], e._bound || a.push(e);
                return a
            }, i.prototype.allHandles = function() {
                return this.apiHandles().concat(this.iframeApiHandles())
            }, i.prototype.iframeApiHandles = function() {
                var e, n, i, a, r;
                for (this.iframes || (this.iframes = document.getElementsByTagName('iframe')), r = [], a = this.iframes, (n = 0, i = a.length); n < i; n++) e = a[n], e.wistiaApi && !(e.wistiaApi instanceof t.IframeApiProxy) && r.push(e.wistiaApi);
                return r
            }, i.prototype.apiHandles = function() {
                var e, t, n, i;
                if (t = [], window.Wistia)
                    for (n in i = Wistia.data('video'), i) e = i[n], t.push(e);
                return t
            }, i.prototype.each = function(e) {
                var t, n, i, a, r;
                for (a = this.allBoundHandles(), r = [], (n = 0, i = a.length); n < i; n++) t = a[n], r.push(e(t));
                return r
            }, i.prototype.onFind = function(e) {
                var t;
                return t = function(t) {
                    return function(n) {
                        return n.up(function() {
                            return t.info('onFind', n), e(n), n.unbind
                        })
                    }
                }(this), this.each(t), this.bind('initembed', t)
            }, i
        }(Array), t.mixin(t.EmbedListener.prototype, t.bindable), t.mixin(t.EmbedListener.prototype, t.logHelpers), t._initializers.initEmbedShepherd = function() {
            return window.wistiaEmbeds ? (t.info('window.wistiaEmbeds already exists, call bindHandles'), 'function' == typeof wistiaEmbeds.bindHandles && wistiaEmbeds.bindHandles()) : (t.info('initialize embed shepherd'), window.wistiaEmbeds = new t.EmbedListener), t.info('call window.wistiaEmbedShepherdReady()'), 'function' == typeof window.wistiaEmbedShepherdReady ? window.wistiaEmbedShepherdReady() : void 0
        }, t._destructors.destroyEmbedShepherd = function() {
            var e;
            return null != (e = window.wistiaEmbeds) && e.each(function(e) {
                return e._bound = !1
            }), window.wistiaEmbeds = null
        }
    })(Wistia);
}, function(e, t, n) {
    (function(e) {
        var t, i, a, r, l;
        if (t = e, !t.VisitorKey) return l = n(18), i = l.eV1Host, a = l.eV1Protocol, t.DISTILLERY_COOKIE = '__distillery', t._visitorTrackingDomain = location.hostname || '', null == (r = t.localStorage('visitorTrackingEnabled')) ? t._visitorTracking = t.localStorage('visitorTracking') || {} : (t.removeLocalStorage('visitorTrackingEnabled'), t._visitorTracking = {}, t._visitorTracking[t._visitorTrackingDomain] = {
            isEnabled: r,
            updatedAt: Date.now()
        }, t.localStorage('visitorTracking', t._visitorTracking)), t.consent = function(e) {
            return null == e ? t.isVisitorTrackingEnabled() : void t.setVisitorTrackingEnabled(e)
        }, t.setVisitorTrackingEnabled = function(e, n) {
            var a, r, i, l, s, d;
            for (null == n && (n = t._visitorTrackingDomain), 'default' === e ? (delete t._visitorTracking[n], t.localStorage('visitorTracking', t._visitorTracking)) : (t._visitorTracking[n] = {
                    isEnabled: t.obj.cast(e),
                    updatedAt: Date.now()
                }, t.localStorage('visitorTracking', t._visitorTracking)), s = t.api.all(), (r = 0, l = s.length); r < l; r++) d = s[r], 'function' == typeof d._postDownVisitorTrackingEnabled && d._postDownVisitorTrackingEnabled();
            if (t.visitorKey) {
                if (i = t.isVisitorTrackingEnabled(), !i) return t.visitorKey.unpersist(), t.cookie('muxData', '', {
                    expires: 0,
                    path: '/'
                }), t.cookie('wistia-http2-push-disabled', '', {
                    expires: 0,
                    path: '/'
                }), 'function' == typeof(a = t._destructors).destroyMux ? a.destroyMux() : void 0;
                if (t.visitorKey.value()) return t.visitorKey.persist(t.visitorKey.value())
            }
        }, t.isCurrentDomainOrAnyParentDomainsEnabled = function() {
            var e, n, i, a;
            if (t.obj.isObject(t._visitorTracking))
                for (e = t._visitorTrackingDomain.split('.'); 0 < e.length;) {
                    if (n = null == (i = t._visitorTracking) || null == (a = i[e.join('.')]) ? void 0 : a.isEnabled, null != n) return n;
                    e.shift()
                }
        }, t.isVisitorTrackingEnabled = function() {
            var e, n, i, a, r, l;
            if (t.obj.isObject(t._visitorTracking) && null != (n = t.isCurrentDomainOrAnyParentDomainsEnabled())) return !!n;
            if ('boolean' == typeof t._visitorTracking) return t._visitorTracking;
            for (a = t.api.all(), e = 0, i = a.length; e < i; e++)
                if (l = a[e], !0 === (null == (r = l._mediaData) ? void 0 : r.privacyMode)) return !1;
            return !0
        }, !0 === window.wistiaDisableCookies && null == window.wistiaIframeShim && (window.wistiaIframeShim = !1), t.VisitorKey = function() {
            function e() {
                this.ready = new t.StopGo, this.unbinds = [], setTimeout(function(e) {
                    return function() {
                        return e.unbinds.push(t.api.onFind(function(t) {
                            return t.hasData(function() {
                                var n;
                                return t.iframe || !0 !== (null == (n = t._mediaData) ? void 0 : n.privacyMode) || e.unpersist(), e.doInit()
                            })
                        }))
                    }
                }(this), 0)
            }
            return e.prototype.reinitialize = function() {
                return this.destroy(), this.unbinds = [], this.ready = new t.StopGo, this._initialized = !1, this.doInit()
            }, e.prototype.doInit = function() {
                if (!this._initialized) return this._initialized = !0, !1 === t.isVisitorTrackingEnabled() || !1 === window.wistiaIframeShim || t.detect.browser.msie && (8 > t.detect.browser.version || t.detect.browser.quirks) || !t.detect.localstorage ? (this.savedValue() || (this._origin = 'new', this.persist(t.VisitorKey.generate())), this.ready(!0)) : (this.setupOutsideShim(), t.util.pageLoaded(function(e) {
                    return function() {
                        return e.executeShim('send_visitor_key|' + (e.savedValue() || '') + '|' + '7be62dae196bd0b7a65fd3de2b3b6528', !0)
                    }
                }(this)))
            }, e.prototype.setupOutsideShim = function() {
                return this.info('@setupOutsideShim'), null == this._outsideShim && (this._outsideShim = function(e) {
                    return function(n) {
                        var i, a, r, l;
                        if (!e._ignoreShimMessages) return (t.clearTimeouts('shim_timeout'), 'string' == typeof n.data && /^visitor_key/.test(n.data)) ? (r = n.data.split('|'), i = r[0], l = r[1], a = r[2], e._origin = a, e.info('outsideShim got message ' + n.data), e.persist(l), t.timeout('remove_iframe_shim', function() {
                            return t.elem.remove(e._iframeShim)
                        }, 1e3), t.timeout('visitor_key_ready', function() {
                            return e.info('visitorKey ready(true)'), e.ready(!0)
                        }), t.elem.unbind) : void 0
                    }
                }(this)), t.elem.rebind(window, 'message', this._outsideShim)
            }, e.prototype.executeShim = function(e, n) {
                var r;
                if (null == n && (n = !1), this.info('@executeShim', e, n), this._iframeShim = t.elem.fromObject({
                        allowtransparency: 'true',
                        frameborder: 0,
                        height: 1,
                        scrolling: 'no',
                        src: a() + '//' + i() + '/embed/iframe_shim?' + t.url.jsonToParams(this.ev1ParamsForShim()),
                        style: {
                            height: '1px',
                            left: '-200px',
                            position: 'absolute',
                            top: '-200px',
                            width: '1px',
                            direction: 'ltr'
                        },
                        tagName: 'iframe',
                        width: 1
                    }), this._iframeShim.onload = function(t) {
                        return function() {
                            return t.info('post request for visitor key', e), t._iframeShim.contentWindow.postMessage(e, '*')
                        }
                    }(this), (r = document.getElementsByTagName('script')[0]) && t.elem.after(r, this._iframeShim), n) return t.timeout('shim_timeout', function(n) {
                    return function() {
                        return n.notice('shim timeout for', e), t.elem.unbind(window, 'message', n._outsideShim), n.savedValue() || (n._origin = 'timeout', n.persist(t.VisitorKey.generate())), n.ready(!0)
                    }
                }(this), 5e3)
            }, e.prototype.persist = function(e) {
                var n;
                return t.VisitorKey.isValid(e) ? (this.info('@persist', e), this._value = e, !!t.isVisitorTrackingEnabled()) ? (!0 !== window.wistiaDisableCookies && this.localStorageValue() !== this._value && t.localStorage(t.DISTILLERY_COOKIE, this._value), !0 !== window.wistiaDisableCookies && this.cookieValue() !== this._value) ? (n = new Date, n.setTime(n.getTime() + 3.1536e10), t.cookie(t.DISTILLERY_COOKIE, this._value, {
                    expires: n,
                    path: '/'
                })) : void 0 : void 0 : void this.error(new Error('Attempted to persist invalid visitor key \'' + e + '\''))
            }, e.prototype.unpersist = function() {
                if (this.clearFromCurrentDomain(), !window._wistiaIframeShim) return this.clearFromShimDomain()
            }, e.prototype.clear = function() {
                return this.info('clear'), this.unpersist(), this._value = null
            }, e.prototype.clearFromCurrentDomain = function() {
                if (t.removeLocalStorage(t.DISTILLERY_COOKIE, null), t.cookie(t.DISTILLERY_COOKIE)) return t.cookie(t.DISTILLERY_COOKIE, '', {
                    expires: 0,
                    path: '/'
                })
            }, e.prototype.clearFromShimDomain = function() {
                return this.executeShim('clear_visitor_key')
            }, e.prototype.value = function() {
                return this._value || this.savedValue()
            }, e.prototype.savedValue = function() {
                return t.isVisitorTrackingEnabled() ? this.localStorageValue() || this.cookieValue() : void 0
            }, e.prototype.cookieValue = function() {
                return t.cookie(t.DISTILLERY_COOKIE)
            }, e.prototype.localStorageValue = function() {
                return t.localStorage(t.DISTILLERY_COOKIE)
            }, e.prototype.isValid = function() {
                return t.VisitorKey.isValid(this.value())
            }, e.prototype.origin = function() {
                return this._origin
            }, e.prototype.ev1ParamsForShim = function() {
                var e, n, i, a, r, l, s, d, p, u;
                for (p = document.getElementsByTagName('script'), l = {
                        domain: 'net'
                    }, (n = 0, r = p.length); n < r; n++)
                    if (d = p[n], u = d.getAttribute('src')) {
                        if (!u.indexOf) continue;
                        if (e = 0 <= u.indexOf(t.remote.embedHost()) ? 'com' : 0 <= u.indexOf(t.remote.externalEmbedHost()) ? 'net' : null, i = 0 <= u.indexOf('/E-v1.js'), a = 0 <= u.indexOf('/static/'), e && i) return s = {
                            domain: e
                        }, a && (s.legacy = !0), s
                    }
                return {
                    domain: 'net'
                }
            }, e.prototype.cancelShim = function() {
                if (this._iframeShim && (t.elem.remove(this._iframeShim), this._iframeShim = null), this._outsideShim) return t.elem.unbind(window, 'message', this._outsideShim)
            }, e.prototype.destroy = function() {
                var e, t, n, i;
                for (this._ignoreShimMessages = !1, this.cancelShim(), n = this.unbinds, (e = 0, t = n.length); e < t; e++) i = n[e], i();
                return this.unbinds = []
            }, e.isValid = function(e) {
                return 25 < (null == e ? void 0 : e.length) && /^[a-z0-9_\-\.]+$/i.test(e)
            }, e.generate = function() {
                return t.uniqId('7be62dae196bd0b7a65fd3de2b3b6528'.substring(0, 7) + '_')
            }, e
        }(), t.mixin(t.VisitorKey.prototype, t.logHelpers), t._initializers.initVisitorKey = function() {
            return t.visitorKey = new t.VisitorKey
        }, t._destructors.destroyVisitorKey = function() {
            var e;
            return null != (e = t.visitorKey) && e.destroy(), t.visitorKey = null
        }
    })(Wistia);
}, function() {
    (function(e) {
        return e.TimeHelper ? void 0 : e.TimeHelper = function() {
            function e() {}
            var t, n;
            return e.secondsIntoDurationGroups = function(e) {
                var t, i, a, r = Math.floor;
                return e = n(e), a = r(e), t = r(a / 3600), a -= 3600 * t, i = r(a / 60), a -= 60 * i, {
                    hours: t,
                    minutes: i,
                    seconds: a
                }
            }, n = function(e) {
                return 0 | Math.abs(parseInt(e))
            }, e.secondsToIso8601 = function(e) {
                var t, n, i, a, r;
                return t = this.secondsIntoDurationGroups(e), n = t.hours.toString(), i = t.minutes.toString(), a = t.seconds.toString(), r = ['00'.substring(n.length) + n, '00'.substring(i.length) + i, '00'.substring(a.length) + a], r.join(':')
            }, e.secondsToHumanDuration = function(e) {
                var t, n, i, a, r;
                for (n in t = this.secondsIntoDurationGroups(e), a = {
                        hours: 0 === t.hours ? void 0 : t.hours + 'h',
                        minutes: 0 !== t.minutes || 60 <= e && 0 !== t.seconds ? t.minutes + 'm' : void 0,
                        seconds: 0 !== t.seconds || 0 === t.minutes && 3600 > e ? t.seconds + 's' : void 0
                    }, i = '', a) r = a[n], null != r && (i += r);
                return i
            }, e.TRIM_REGEXP = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, e.isValidHumanDuration = function(e) {
                var t, n, i, a, r, l, s, d, p, u, c, m;
                if (void 0 === e || null === e || '' === e) return !1;
                if (e = ('' + e).replace(this.TRIM_REGEXP, ''), null === e.match(/[\dhms]+/) || null === e.match(/[hms]+/)) return !1;
                if (e.match(/[\dhms]+/)[0] !== e) return !1;
                for (p = ['h', 'm', 's'], n = 0, a = p.length; n < a; n++)
                    if (l = p[n], c = new RegExp(l, 'g'), null !== e.match(c) && 1 < e.match(c).length) return !1;
                if (s = e.match(/[hms]/g), 3 === s.length && ('h' !== s[0] || 'm' !== s[1] || 's' !== s[2])) return !1;
                if (2 === s.length) {
                    for (t = !1, d = s.join(''), u = ['hm', 'hs', 'ms'], (i = 0, r = u.length); i < r; i++)
                        if (m = u[i], d === m) {
                            t = !0;
                            break
                        }
                    if (!t) return !1
                }
                return !0
            }, t = function(e, t) {
                var n, i;
                return n = new RegExp('\\d+' + e), i = t.match(n), i ? parseInt(i[0].match(/\d+/)[0]) : 0
            }, e.humanDurationToSeconds = function(e) {
                var n, i, a, r, l;
                if (e = e ? e.toString() : '', l = 0, this.isValidHumanDuration(e))
                    for (i = [3600 * t('h', e), 60 * t('m', e), t('s', e)], a = 0, r = i.length; a < r; a++) n = i[a], l += n;
                return l
            }, e.isValidIso8601 = function(e) {
                return void 0 === e || null === e || '' === e ? !1 : 'string' == typeof e && (e = e.replace(this.TRIM_REGEXP, ''), null !== e.match(/[\d:]+/) && e.match(/[\d:]+/)[0] === e)
            }, e.iso8601ToSeconds = function(e) {
                var t, a, r, i, l, s, d;
                for (e = e ? e.toString() : '', d = 0, s = [1, 60, 3600], a = e.split(':').reverse(), (r = i = 0, l = a.length); i < l; r = ++i) t = a[r], d += t * s[r];
                return n(d)
            }, e
        }()
    })(Wistia);
}, function() {
    (function(t) {
        return t._initializers.initSpecificTime = function() {
            var n, e, i;
            try {
                return parent === self ? (i = location.href.match(/[\?&]wtime=([\dhms]*)/), !(2 <= (null == i ? void 0 : i.length))) || t._specificTimeInitiated ? void 0 : (t._specificTimeInitiated = !0, e = !1, wistiaEmbeds.onFind(function(t) {
                    if (!e) return e = !0, t.time(i[1]).play()
                })) : void 0
            } catch (e) {
                return n = e, t.error(n), t._specificTimeInitiated = !1
            }
        }
    })(Wistia);
}, function(e, t, n) {
    (function(e) {
        return e.Interpolation ? void 0 : e.Interpolation = n(38)
    })(Wistia);
}, function() {
    (function(e) {
        return null == e.mux && (e.mux = {}), e._initializers.initMux = function() {
            if (!e.mux._setup) return e.mux._setup = !0, e.mux._disabled = !1, e.api.onFind(function(t) {
                var n;
                return n = function() {
                    return window.wistiaDisableMux
                }, n() || e.mux._disabled || t.iframe || t._opts && !1 === t._opts.mux ? void 0 : e.asyncRequire('wistia-mux.js').then(function(e) {
                    return t.embedded(function() {
                        return n() ? void 0 : e(t)
                    })
                })
            })
        }, e._destructors.destroyMux = function() {
            var t, n, i, a, r, l;
            for (e.mux._disabled = !0, i = e.api.all(), r = [], (t = 0, n = i.length); t < n; t++) l = i[t], r.push(null == (a = l.mux) ? void 0 : 'function' == typeof a.destroy ? a.destroy() : void 0);
            return r
        }
    })(Wistia);
}, function(e, t, n) {
    (function(e) {
        return e.featureEvent ? void 0 : e.featureEvent = n(80)
    })(Wistia);
}, function(e, t, n) {
    var i, a, r, l, s;
    a = n(17), i = n(28).ajaxPost, r = n(15).objectToQueryParams, s = function(e, t) {
        return t || (t = {}), t.key = e, i('/feature_events', {
            data: r(t)
        })
    }, l = function(e, t, n) {
        return n || (n = {}), n.key = e, n.account_id = t, i('//' + 'fast.wistia.net' + '/feature_events', {
            data: r(n)
        })
    }, e.exports = {
        trackForCurrentAccount: s,
        track: l
    };
}, function(e, t, n) {
    (function(e) {
        var t;
        return t = n(5).doTimeout, e._initializers.initEditInPlace = function() {
            return e._editInPlaceTest = !1, t('setup_edit_in_place_test', function() {
                if (!e._editInPlaceTest) return e._editInPlaceTest = !0, e.api.onFind(function(t) {
                    return t.hasData(function() {
                        var n;
                        if (null != (n = t.grid) && n.root) return e.elem.bind(t.grid.root, 'mouseover', function(n) {
                            var i, a;
                            if (i = /weditInPlace=true/.test(location.href), null == e._allowEditInPlace && (e._allowEditInPlace = null != (a = t._mediaData) && a.customizeInPlaceEnabled), i || e._allowEditInPlace) return e.remote.canEditMedia(t.hashedId(), t._opts).then(function(i) {
                                return e.info('experiment: canEditMedia', t.hashedId(), i), t.plugin('editInPlace', function(e) {
                                    return e.onMouseoverVideo(n)
                                }), t.addPlugin('editInPlace', {
                                    on: !0
                                })
                            })
                        }), e.elem.unbind
                    })
                })
            })
        }
    })(Wistia);
}, function(e, t, n) {
    'use strict';
    n.r(t);
    var i = n(2),
        a = i['default'].lib('utilities/obj'),
        r = a.isEmpty,
        l = i['default'].lib('player/lib/elem'),
        s = l.pageLoaded,
        d = function(e) {
            if (e._mediaData && e._mediaData.integrations)
                for (var t in e._mediaData.integrations)
                    if (e._mediaData.integrations[t]) return !0;
            return !1
        };
    window._wq = window._wq || [], window._wq.push({
        id: '_all',
        onHasData: function(e) {
            d(e) && s(function() {
                setTimeout(function() {
                    i['default'].asyncRequire('allIntegrations.js')
                }, 1e3)
            })
        }
    });
}, function() {
    (function(e) {
        var t, n;
        return n = e.initializeOnce = function() {
            return e._initializers.initDetect(), e._initializers.initLocalStorage(), e._initializers.initWLog(), e._initializers.initVisitorKey(), e._initializers.initEventLoop(), e._initializers.initFullscreenTriggers(), e._initializers.initEditInPlace(), e.trigger('ev1initonce')
        }, t = e.initializeEveryTime = function() {
            var t;
            return e.trigger('ev1initstart'), e._initializers.initEmbedShepherd(), e._initializers.initMux(), e._initializers.initAsyncEmbeds(), e._initializers.initEmbedLinks(), e._initializers.initSpecificTime(), null != (t = e.eventLoop) && t.resync(), e.trigger('ev1initend')
        }, e.destroy = function() {
            return e.trigger('ev1destroystart'), e._destructors.destroyAsyncEmbeds(), e._destructors.destroyEmbedShepherd(), e._destructors.destroyEmbedLinks(), e._destructors.destroyFullscreenTriggers(), e._destructors.destroyEventLoop(), e._destructors.destroyVisitorKey(), e._destructors.destroyWLog(), e._destructors.destroyMux(), e.trigger('ev1destroyend')
        }, e.destroyGlobals = function() {
            var e, t, n;
            for (e in window.Wistia = null, window.wistiaApi = null, window.wistiaDispatch = null, window.wistiaBindIframes = null, window.wistiaEmbeds = null, window._wistiaElemId = null, window.wistiaInitQueue = null, window.wistiaInit = null, window.wistiaEmbedShepherdReady = null, t = [], window) n = window[e], /^wistiajson/.test(e) ? t.push(window[e] = null) : t.push(void 0);
            return t
        }, e.reinitialize = function() {
            return e.destroy(), e.initializeOnce(), e.initializeEveryTime()
        }, e._initialized || (e._initialized = !0, e.initializeOnce()), e.initializeEveryTime()
    })(Wistia);
}, , , , function(e, t, n) {
    'use strict';
    n.r(t);
    var a = n(2),
        r = function() {
            function e(e, t) {
                for (var n, a = 0; a < t.length; a++) n = t[a], n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }();

    function i(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
    }
    var l = a['default'].lib('player/lib/elem'),
        s = l.elemRemove,
        d = a['default'].lib('preact'),
        p = d.h,
        u = d.render,
        c = function() {
            function e(t) {
                i(this, e), this.video = t, this.unbinds = [], this.reactMounts = {}
            }
            return r(e, [{
                key: 'mount',
                value: function(e) {
                    this.rootElem = e
                }
            }, {
                key: 'destroy',
                value: function() {
                    this._destroyed = !0, this.unbinds instanceof Array && (this.unbinds.map(function(e) {
                        try {
                            e()
                        } catch (t) {
                            setTimeout(function() {
                                throw t
                            }, 1)
                        }
                    }), this.unbinds = null);
                    var e = this.reactMounts;
                    if (e)
                        if (e instanceof Array) g(e);
                        else
                            for (var t in e) e.hasOwnProperty(t) && e[t] && g(e[t]);
                    for (var n in this.rootElem && s(Array.prototype.slice.call(this.rootElem.childNodes)), this) this.hasOwnProperty(n) && !m(n) && 'mounted' != n && (this[n] = null);
                    this.__prevProps = null, this._destroyed = !0
                }
            }]), e
        }(),
        m = function(e) {
            return '_' === e[0] && '_' === e[1]
        },
        g = function(e) {
            var t = e[0],
                n = e[1];
            t && n && u(p('nothing', null), t, n)
        };
    t['default'] = c;
}, , function(e, t, n) {
    'use strict';
    n.r(t);
    n.d(t, 'standardSvgAttrs', function() {
        return a
    });
    var i = n(2),
        a = function(e, t) {
            return {
                x: '0px',
                y: '0px',
                viewBox: '0 0 ' + e + ' ' + t,
                "enable-background": 'new 0 0 ' + e + ' ' + t,
                style: {
                    fill: '#ffffff',
                    width: '100%',
                    height: '100%',
                    left: 0,
                    top: 0,
                    strokeWidth: 0
                }
            }
        };
    i['default'].define('vulcanV2Video/svg_boilerplate.js', {
        standardSvgAttrs: a
    });
}, , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
    'use strict';
    n.r(t);
    var i = n(2),
        a = i['default'].lib('player/lib/elem'),
        r = a.elemBind,
        l = i['default'].lib('utilities/detect'),
        s = l.cachedDetect,
        d = s();
    if (null == i['default']._isMouseDown) {
        i['default']._isMouseDown = !1;
        var p = function(e) {
                i['default']._isMouseDown = !0, setTimeout(function() {
                    e.defaultPrevented && (i['default']._isMouseDown = !1)
                }, 0)
            },
            u = function() {
                i['default']._isMouseDown = !1
            },
            c = function() {
                setTimeout(function() {
                    i['default']._isMouseDown = !1
                }, 0)
            };
        d.touchScreen ? (r(document, 'touchstart', p, !0), r(document, 'touchend', c, !0)) : (r(document, 'mousedown', p, !0), r(document, 'mouseup', u, !0));
        var m = d.windows ? u : p;
        r(document, 'contextmenu', m, !0), i['default']._isMouseDown = !0, i['default'].isMouseDown = function() {
            return i['default']._isMouseDown
        }
    }
    i['default'].define('vulcanV2Video/isMouseDown.js', i['default'].isMouseDown);
    t['default'] = i['default'].isMouseDown;
}, function(e, t, n) {
    'use strict';
    n.r(t);
    var l = n(2),
        s = n(118),
        d = Object.assign || function(e) {
            for (var t, n = 1; n < arguments.length; n++)
                for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e
        },
        p = function() {
            function e(e, t) {
                for (var n, a = 0; a < t.length; a++) n = t[a], n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }();

    function i(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
    }

    function a(e, t) {
        if (!e) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return t && ('object' == typeof t || 'function' == typeof t) ? t : e
    }

    function r(e, t) {
        if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function, not ' + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    var u = l['default'].lib('preact'),
        c = u.h,
        m = u.render,
        g = u.Component,
        h = l['default'].lib('utilities/detect'),
        y = h.cachedDetect,
        f = y(),
        _ = l['default'].lib('player/lib/elem'),
        b = _.elemBind,
        v = _.elemUnbind,
        A = function(e) {
            function t() {
                var e, n, r, l;
                i(this, t);
                for (var s = arguments.length, d = Array(s), p = 0; p < s; p++) d[p] = arguments[p];
                return l = (n = (r = a(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(d))), r), r.onSwipe = function(t, e) {
                    var n = r.props.onSwipe;
                    n && n(t, e)
                }, r.onPinch = function(t, e) {
                    var n = r.props.onPinch;
                    n && n(t, e)
                }, r.onLongPress = function(t, e) {
                    var n = r.props.onLongPress;
                    n && n(t, e)
                }, r.onClick = function(t) {
                    var e = r.props.onClickOrTap;
                    e && e(t)
                }, r.onTouchEnd = function(t, e) {
                    if (e.isTap) {
                        var n = r.props.onClickOrTap;
                        n && n(t, e)
                    }
                }, n), a(r, l)
            }
            return r(t, e), p(t, [{
                key: 'render',
                value: function() {
                    var e = this.props.tagName || 'div';
                    return c(e, d({}, this.props, {
                        ref: this.props.elemRef
                    }), this.props.children)
                }
            }, {
                key: 'componentDidMount',
                value: function() {
                    this._savedBase = this.base, this.setupBindings()
                }
            }, {
                key: 'componentDidUpdate',
                value: function() {
                    this.base !== this._savedBase && (this._savedBase = this.base, this.destroyBindings(), this.setupBindings())
                }
            }, {
                key: 'componentWillUnmount',
                value: function() {
                    this.destroyBindings()
                }
            }, {
                key: 'setupBindings',
                value: function() {
                    if (this.unbinds = [], f.touchScreen) {
                        var e = this.touchEvents = new s['default'](this.base);
                        e.on('touchend', this.onTouchEnd), e.on('swipe', this.onSwipe), e.on('pinch', this.onPinch), e.on('longpress', this.onLongPress)
                    } else this.unbinds.push(b(this.base, 'click', this.onClick))
                }
            }, {
                key: 'destroyBindings',
                value: function() {
                    this.touchEvents && (this.touchEvents.destroy(), this.touchEvents = null), this.unbinds && (this.unbinds.map(function(e) {
                        return e()
                    }), this.unbinds = null)
                }
            }]), t
        }(g);
    t['default'] = A;
}, function(e, t, n) {
    'use strict';
    n.r(t);
    var a = n(2),
        r = function() {
            function e(e, t) {
                for (var n, a = 0; a < t.length; a++) n = t[a], n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }();

    function i(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
    }
    var l = a['default'].lib('utilities/bindify'),
        s = l.bindify,
        d = a['default'].lib('player/lib/elem'),
        p = d.elemBind,
        u = d.elemUnbind,
        c = d.elemWidth,
        m = d.elemHeight,
        g = d.elemOffset,
        h = a['default'].lib('utilities/detect'),
        y = h.cachedDetect,
        f = y(),
        _ = function() {
            function e(n) {
                var a = this;
                i(this, e), this.onTouchStart = function(e) {
                    a.rootWidth = c(a.rootElem), a.rootHeight = m(a.rootElem), a.rootOffset = g(a.rootElem), a.resetTouchContext(), e.touches[0] && (a.xDown = e.touches[0].clientX, a.yDown = e.touches[0].clientY), a.updatePinch(e), 2 == e.touches.length && a.touchesAreInsideRootElem() && (a.isPinch = !0, e.preventDefault()), a.startedAt = Date.now(), p(document, 'touchmove', a.onTouchMoveDocument, {
                        passive: !1
                    }), p(document, 'touchend', a.onTouchEndDocument), p(a.rootElem, 'touchmove', a.onTouchMove, {
                        passive: !1
                    }), p(a.rootElem, 'touchend', a.onTouchEnd);
                    var t = a.getTouchContext(e);
                    a.trigger('touchstart', e, t), a.maybeTriggerMoreSpecificEvent(e, t)
                }, this.onTouchMove = function(e) {
                    e._handledByTouchMove = !0;
                    var n = e.touches[0].clientX,
                        i = e.touches[0].clientY;
                    if (a.xDiff = a.xDown - n, a.yDiff = a.yDown - i, a.updatePinch(e), !a.isPinch) {
                        var r = t(a.xDiff * a.xDiff + a.yDiff * a.yDiff);
                        (25 < r || 300 < Date.now() - a.startedAt) && (a.isSwipe = !0)
                    }
                    var l = a.getTouchContext(e);
                    a.trigger('touchmove', e, l), a.maybeTriggerMoreSpecificEvent(e, l)
                }, this.onTouchMoveDocument = function(e) {
                    e._handledByTouchMove || a.onTouchMove(e)
                }, this.onTouchEnd = function(e) {
                    e._handledByTouchEnd = !0, a.updatePinch(e);
                    var t = a.getTouchContext(e);
                    a.trigger('touchend', e, t), a.maybeTriggerMoreSpecificEvent(e, t), a.resetTouchContext(), a.unbindTouchEndAndTouchMove()
                }, this.onTouchEndDocument = function(e) {
                    e._handledByTouchEnd || a.onTouchEnd(e)
                }, this.rootElem = n, this.xDown = this.yDown = null, this.xDiff = this.yDiff = 0, this.isSwipe = !1, this.isPinch = !1, this.startedAt = null, this.initialPinchDelta = null, this.touch1 = this.touch2 = null, this.pinchDelta = 0, this.pinchScale = 0, p(n, 'touchstart', this.onTouchStart, !!f.passiveSupported && {
                    passive: !1
                })
            }
            var t = Math.sqrt;
            return r(e, [{
                key: 'updatePinch',
                value: function(n) {
                    var e = Math.pow,
                        i = this.rootOffset;
                    return 2 === n.touches.length ? (this.touch1 = {
                        left: n.touches[0].pageX - i.left,
                        top: n.touches[0].pageY - i.top
                    }, this.touch2 = {
                        left: n.touches[1].pageX - i.left,
                        top: n.touches[1].pageY - i.top
                    }, this.pinchDelta = t(e(this.touch1.left - this.touch2.left, 2), e(this.touch1.top - this.touch2.top, 2)), null == this.initialPinchDelta && (this.initialPinchDelta = this.pinchDelta), this.pinchScale = this.pinchDelta / this.initialPinchDelta, this.pinchScale) : 0
                }
            }, {
                key: 'getTouchContext',
                value: function(n) {
                    var e = Math.abs,
                        i = this.rootOffset,
                        a = n.pageX - i.left,
                        r = n.pageY - i.top,
                        l = Date.now() - this.startedAt;
                    return {
                        xOffset: a,
                        yOffset: r,
                        xDelta: this.xDiff,
                        yDelta: this.yDiff,
                        absXDelta: e(this.xDiff),
                        absYDelta: e(this.yDiff),
                        delta: t(this.xDiff * this.xDiff + this.yDiff * this.yDiff),
                        startedAt: this.startedAt,
                        isSwipe: !this.isPinch && this.isSwipe,
                        isTap: 1e3 > l && !this.isPinch && !this.isSwipe,
                        isLongPress: 1e3 <= l && !this.isPinch && !this.isSwipe,
                        isPinch: this.isPinch,
                        timeDelta: l,
                        pinchScale: this.pinchScale,
                        pinchDelta: this.pinchDelta
                    }
                }
            }, {
                key: 'touchIsInsideRootElem',
                value: function(e) {
                    return 0 <= e.left && e.left < this.rootWidth && 0 <= e.top && e.top < this.rootHeight
                }
            }, {
                key: 'touchesAreInsideRootElem',
                value: function() {
                    return this.touchIsInsideRootElem(this.touch1) && this.touchIsInsideRootElem(this.touch2)
                }
            }, {
                key: 'resetTouchContext',
                value: function() {
                    this.xDown = this.yDown = null, this.xDiff = this.yDiff = 0, this.isSwipe = !1, this.isPinch = !1, this.startedAt = null, this.pinchDelta = 0, this.initialPinchDelta = null, this.touch1 = this.touch2 = null
                }
            }, {
                key: 'maybeTriggerMoreSpecificEvent',
                value: function(e, t) {
                    t.isLongPress ? this.trigger('longpress', e, t) : t.isTap ? this.trigger('tap', e, t) : t.isSwipe ? this.trigger('swipe', e, t) : t.isPinch && this.trigger('pinch', e, t)
                }
            }, {
                key: 'destroy',
                value: function() {
                    u(this.rootElem, 'touchstart', this.onTouchStart), this.unbindTouchEndAndTouchMove(), this.rootElem = null
                }
            }, {
                key: 'unbindTouchEndAndTouchMove',
                value: function() {
                    u(document, 'touchmove', this.onTouchMoveDocument), u(document, 'touchend', this.onTouchEndDocument), u(this.rootElem, 'touchmove', this.onTouchMove), u(this.rootElem, 'touchend', this.onTouchEnd)
                }
            }]), e
        }();
    s(_.prototype), a['default'].define('vulcanV2Video/TouchEvents.js', _);
    t['default'] = _;
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
    'use strict';
    n.r(t);
    var l = n(2),
        s = n(10),
        d = n(278),
        p = n(281),
        u = n(283),
        c = n(285),
        m = n(287),
        g = n(289),
        y = n(291),
        f = n(293),
        _ = n(296),
        b = n(297),
        v = n(299),
        A = n(301),
        w = n(302),
        k = n(305),
        E = n(306),
        C = n(308),
        S = n(310),
        P = n(311),
        T = n(312),
        I = n(313),
        x = n(314),
        D = n(315),
        B = n(316),
        F = n(324),
        O = function() {
            function e(e, t) {
                var n, i = [],
                    a = !0,
                    r = !1;
                try {
                    for (var l, s = e[Symbol.iterator](); !(a = (l = s.next()).done) && (i.push(l.value), !(t && i.length === t)); a = !0);
                } catch (e) {
                    r = !0, n = e
                } finally {
                    try {
                        !a && s['return'] && s['return']()
                    } finally {
                        if (r) throw n
                    }
                }
                return i
            }
            return function(t, n) {
                if (Array.isArray(t)) return t;
                if (Symbol.iterator in Object(t)) return e(t, n);
                throw new TypeError('Invalid attempt to destructure non-iterable instance')
            }
        }(),
        M = function() {
            function e(e, t) {
                for (var n, a = 0; a < t.length; a++) n = t[a], n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }(),
        L = function e(t, n, i) {
            null === t && (t = Function.prototype);
            var a = Object.getOwnPropertyDescriptor(t, n);
            if (a === void 0) {
                var r = Object.getPrototypeOf(t);
                return null === r ? void 0 : e(r, n, i)
            }
            if ('value' in a) return a.value;
            var l = a.get;
            return void 0 === l ? void 0 : l.call(i)
        };

    function i(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
    }

    function a(e, t) {
        if (!e) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return t && ('object' == typeof t || 'function' == typeof t) ? t : e
    }

    function r(e, t) {
        if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function, not ' + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    var N = l['default'].lib('player/lib/judy'),
        W = l['default'].lib('player/lib/assets'),
        R = l['default'].lib('preact'),
        H = R.h,
        h = R.render,
        j = l['default'].lib('utilities/event_loop'),
        V = j.globalEventLoop,
        U = l['default'].lib('promiscuous'),
        z = l['default'].lib('player/lib/elem'),
        G = z.elemFromObject,
        Q = z.elemAppend,
        q = z.elemBind,
        K = z.elemAddClass,
        Y = z.elemOffset,
        X = z.elemRemoveClass,
        J = z.elemPrepend,
        Z = z.elemStyle,
        $ = z.elemWidth,
        ee = z.inUserEventContext,
        te = l['default'].lib('utilities/obj');
    if (!l['default'].VulcanV2Player) {
        var ne = l['default'].Video,
            oe = function(e) {
                function t(e) {
                    i(this, t);
                    var n = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                    return n.playerType = 'vulcan-v2', n._enabledControls = {}, n._visibilityRequests = {}, n._playerContext = [], n._overlays = {}, n.setupBehaviors(), n
                }
                var n = Math.max,
                    s = Math.min;
                return r(t, e), M(t, [{
                    key: 'setupBehaviors',
                    value: function() {
                        this.addBehaviors([C['default'], I['default'], P['default'], D['default'], x['default'], T['default'], S.PlaySuspendedOffScreenBehavior, F['default'], B['default']])
                    }
                }, {
                    key: 'removeBehaviors',
                    value: function() {
                        for (var e in this.behaviors) this.behaviors.hasOwnProperty(e) && this.removeBehavior(e)
                    }
                }, {
                    key: 'elem',
                    value: function() {
                        return this.engine ? this.engine.videoElem() : (this._dummyVideo || (this._dummyVideo = document.createElement('video')), this._dummyVideo)
                    }
                }, {
                    key: 'embed',
                    value: function(e) {
                        return e instanceof t ? this.behaviors.embed.embed(e) : this.behaviors.embed.embed()
                    }
                }, {
                    key: 'renderUI',
                    value: function() {
                        var e = this;
                        this.ui || (this.ui = this.behaviors.ui);
                        var t = this.ui.lastRenderPromise || U.resolve();
                        return t.then(function() {
                            return e.ui.render().then(function() {
                                e.vulcanWrapper || (e.vulcanWrapper = e.ui.vulcanWrapper)
                            })
                        })
                    }
                }, {
                    key: 'rebuild',
                    value: function() {
                        return this.behaviors.embed.rebuild(this)
                    }
                }, {
                    key: 'onDimensionChangeSafe',
                    value: function() {
                        if (this.grid) try {
                            this.onWidthChange(this.videoWidth()), this.onHeightChange(this.videoHeight())
                        } catch (t) {
                            this.error(t)
                        }
                    }
                }, {
                    key: 'transferStateFrom',
                    value: function(e) {
                        this.behaviors.fullscreen && this.behaviors.fullscreen.transferStateFrom(e)
                    }
                }, {
                    key: 'bestEngine',
                    value: function() {
                        return N.bestUsableEngine(this.publicApi.judyCtx(), this._mediaData, this._opts)
                    }
                }, {
                    key: 'initEngineAfterEmbedded',
                    value: function() {
                        var e = this;
                        this.embedded(function() {
                            return e.behaviors.embed.initializeEngine()
                        })
                    }
                }, {
                    key: 'setupBindings',
                    value: function() {
                        this.setupVideoBindings()
                    }
                }, {
                    key: 'setupVideoBindings',
                    value: function() {
                        var e = this;
                        this.publicApi.bind('click', function() {
                            e.initEngineAfterEmbedded()
                        }), this.publicApi.bind('mouseenter', function() {
                            e.initEngineAfterEmbedded()
                        }), this.publicApi.bind('focusin', function() {
                            e.initEngineAfterEmbedded()
                        }), this.bind('widthchange', function(t) {
                            e.onWidthChange(t)
                        }), this.bind('heightchange', function(t) {
                            e.onHeightChange(t)
                        })
                    }
                }, {
                    key: 'addBehavior',
                    value: function(e) {
                        var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : !0;
                        null == this.behaviors && (this.behaviors = {});
                        var n = e.handle;
                        if (!n) return void this.error('No handle defined for', e);
                        this.behaviors[n] && (this.behaviors[n].destroy(), this.behaviors[n] = null);
                        try {
                            var i = this.behaviors[n] = new e(this);
                            return t && i.init(), i
                        } catch (t) {
                            setTimeout(function() {
                                throw t
                            }, 0), delete this.behaviors[n]
                        }
                    }
                }, {
                    key: 'addBehaviors',
                    value: function(e) {
                        var t = this,
                            n = e.map(function(e) {
                                return t.addBehavior(e, !1)
                            });
                        return n.map(function(n) {
                            try {
                                n.init()
                            } catch (i) {
                                t.error('error in init for', n.constructor.handle, 'behavior'), setTimeout(function() {
                                    throw i
                                }, 0)
                            }
                        }), n
                    }
                }, {
                    key: 'removeBehavior',
                    value: function(e) {
                        this.behaviors[e] && (this.behaviors[e].destroy(), delete this.behaviors[e])
                    }
                }, {
                    key: 'isMediaDataUsingEmbedSsl',
                    value: function() {
                        for (var e, t = 0; t < this._mediaData.assets.length; t++)
                            if (e = this._mediaData.assets[t], e.url && /embed-ssl\.wistia\.com/.test(e.url)) return !0;
                        return !1
                    }
                }, {
                    key: 'onWidthChange',
                    value: function(e) {
                        this.engine && this.engine.onWidthChange(e)
                    }
                }, {
                    key: 'onHeightChange',
                    value: function(e) {
                        this.engine && this.engine.onHeightChange(e)
                    }
                }, {
                    key: 'controlScaling',
                    value: function(e) {
                        if (null != e) {
                            var t = this._controlScaling;
                            this._controlScaling = e, t !== e && this.trigger('controlscalingchange', e, t)
                        } else return this._controlScaling || 'auto'
                    }
                }, {
                    key: 'bigPlayButtonEnabled',
                    value: function(e) {
                        this.setControlEnabled('bigPlayButton', e)
                    }
                }, {
                    key: 'bigPlayButtonTimeEnabled',
                    value: function(e) {
                        this.isControlEnabled('bigPlayButton') && this.ui.controls.bigPlayButton.setTimeEnabled(e)
                    }
                }, {
                    key: 'smallPlayButtonEnabled',
                    value: function(e) {
                        this.setControlEnabled('smallPlayButton', e)
                    }
                }, {
                    key: 'playbarControlEnabled',
                    value: function(e) {
                        this.setControlEnabled('lowerPlaybar', e), this.setControlEnabled('upperPlaybar', e)
                    }
                }, {
                    key: 'settingsControlEnabled',
                    value: function(e) {
                        this.setControlEnabled('settingsButton', e)
                    }
                }, {
                    key: 'playbackRateControlEnabled',
                    value: function(e) {
                        this.isControlEnabled('settingsButton') && this.ui.controls.settingsButton.setPlaybackRateEnabled(e)
                    }
                }, {
                    key: 'qualityControlEnabled',
                    value: function(e) {
                        this.isControlEnabled('settingsButton') && this.ui.controls.settingsButton.setQualityEnabled(e)
                    }
                }, {
                    key: 'volumeControlEnabled',
                    value: function(e) {
                        this.setControlEnabled('volumeButton', e)
                    }
                }, {
                    key: 'fullscreenButtonEnabled',
                    value: function(e) {
                        this.setControlEnabled('fullscreenButton', e)
                    }
                }, {
                    key: 'hideControls',
                    value: function() {
                        return this.ui.releaseControls('showControls')
                    }
                }, {
                    key: 'showControls',
                    value: function() {
                        return this.requestControls('showControls', 4e3)
                    }
                }, {
                    key: 'requestChromeless',
                    value: function(e, t) {
                        return this.requestControls(e, t, !1)
                    }
                }, {
                    key: 'releaseChromeless',
                    value: function(e) {
                        return this.releaseControls(e)
                    }
                }, {
                    key: 'requestControls',
                    value: function(e, t) {
                        var n = this,
                            i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : !0;
                        return this._visibilityRequests[e] = i, null != t && l['default'].timeout(this.uuid + '.' + e + '.release_controls', function() {
                            n.releaseControls(e)
                        }, t), this.ui.maybeToggleControls()
                    }
                }, {
                    key: 'releaseControls',
                    value: function(e) {
                        return this._visibilityRequests[e] = null, this.ui.maybeToggleControls()
                    }
                }, {
                    key: 'fit',
                    value: function() {
                        L(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), 'fit', this).call(this), this.embedded(function() {})
                    }
                }, {
                    key: 'getBuffered',
                    value: function() {
                        if (!this.engine) return [];
                        var e = this.engine.activeBufferRange();
                        if (e) {
                            var t = this.engine.activeBufferRange(),
                                n = O(t, 2),
                                i = n[0],
                                a = n[1];
                            return [{
                                start: i,
                                end: a
                            }]
                        }
                        return []
                    }
                }, {
                    key: 'rangeBuffered',
                    value: function() {
                        this.engine.activeBufferRange()
                    }
                }, {
                    key: 'timeBuffered',
                    value: function() {
                        var e = this.rangeBuffered();
                        return e ? e[1] - e[0] : 0
                    }
                }, {
                    key: 'totalBuffered',
                    value: function() {
                        return this.engine ? this.engine.totalBuffered() : 0
                    }
                }, {
                    key: 'totalPlayed',
                    value: function() {
                        return this.engine ? this.engine.totalPlayed() : 0
                    }
                }, {
                    key: 'sequentialBufferedRange',
                    value: function() {
                        return this.engine ? this.engine.sequentialBufferedRange() : [0, 0]
                    }
                }, {
                    key: 'requestFullscreen',
                    value: function() {
                        return this.behaviors.fullscreen.requestFullscreen()
                    }
                }, {
                    key: 'cancelFullscreen',
                    value: function() {
                        return this.behaviors.fullscreen.cancelFullscreen()
                    }
                }, {
                    key: 'inFullscreen',
                    value: function() {
                        return this.behaviors.fullscreen.inFullscreen()
                    }
                }, {
                    key: 'stopStreaming',
                    value: function() {
                        this.info('stopStreaming'), this.engine && this.engine.stopStreaming()
                    }
                }, {
                    key: 'cleanup',
                    value: function() {
                        this.info('cleanup'), this.removeBehaviors()
                    }
                }, {
                    key: 'assetOptions',
                    value: function() {
                        return this.engine.selectableAssets()
                    }
                }, {
                    key: 'videoQuality',
                    value: function(e) {
                        var t = this;
                        return null == e ? this.engine ? this.engine.getCurrentQuality() : 'auto' : void(this.info('videoQuality', e), this.initEngineAfterEmbedded(), this.commandQueueOpen.synchronize(function(n) {
                            t.ready(function() {
                                t.engine.changeQuality(e, 'playing' === t.state()).then(n)
                            })
                        }))
                    }
                }, {
                    key: 'selectedQuality',
                    value: function() {
                        return this.engine ? this.engine.selectedQuality() : 'auto'
                    }
                }, {
                    key: 'selectableQualities',
                    value: function() {
                        return this.engine ? this.engine.selectableQualities() : ['auto']
                    }
                }, {
                    key: 'stillUrl',
                    value: function(e) {
                        return e = l['default'].obj.merge({
                            playButton: !1
                        }, e), L(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), 'stillUrl', this).call(this, e)
                    }
                }, {
                    key: 'play',
                    value: function() {
                        var t = this;
                        this.suppressPlay() || this.trigger('playcalled'), this.initEngineAfterEmbedded();
                        var e = ee() && !this.ready();
                        return this.info('play'), this.commandQueueOpen.synchronize(function(n) {
                            return t.suppressPlay() ? void n() : void(t._isPlayPending = !0, t._lastPlayType = void 0, t._lastPlaySource = ie(), t._lastPlayIssuedAt = Date.now(), t._lastPlayResolvedAt = null, t._lastPlayRejectedAt = null, t.trigger('playpending', t.lastPlayInfo()), t.ready(function() {
                                t._calledPlay = !0, t._mozillaAtEnd() && t.engine.setCurrentTime(0);
                                var i = {};
                                e && !1 === t._opts.silentAutoPlay && (i.silentAutoPlay = 'allow', t.trigger('clicked-play-before-ready'));
                                var a = function() {
                                    t._isPlayPending = !1, t._lastPlayType = void 0, t._lastPlayRejectedAt = Date.now(), t.trigger('playrejected', t.lastPlayInfo()), n()
                                };
                                return l['default'].detect.ios.version && 10.1 > l['default'].detect.ios.version && !ee() && !t.engine.isInitializingFromUnmuted() ? (t.notice('Play rejected because not in user context.'), void a()) : void(t._playPromise = t.engine.play(i).then(function(e) {
                                    t._isPlayPending = !1, t._lastPlayType = e, t._lastPlayResolvedAt = Date.now(), 'play-silently' !== e || t._inSilentPlaybackMode || (t._inSilentPlaybackMode = !0, t.trigger('silentplaybackmodechange', !0)), n()
                                }).catch(function(n) {
                                    t.notice(n), a()
                                }))
                            }))
                        }), this
                    }
                }, {
                    key: 'pause',
                    value: function() {
                        var e = this;
                        return this.info('pause'), this.trigger('receivepause'), this.initEngineAfterEmbedded(), this.commandQueueOpen.synchronize(function(t) {
                            e._isPausePending = !1, e._lastPauseSource = ie(), e._lastPauseIssuedAt = Date.now(), e.ready() ? e.engine.pause().then(function() {
                                e._isPausePending = !1, t()
                            }) : t()
                        }), this
                    }
                }, {
                    key: 'time',
                    value: function(i, e) {
                        var t = this;
                        return null == i ? this.engine && this.engine.getCurrentTime() || 0 : (this.info('time', i), this.initEngineAfterEmbedded(), this.commandQueueOpen.synchronize(function(a) {
                            'beforeplay' === t.state() && (t._lastPlaySource = ie(), t._lastPlayIssuedAt = Date.now(), t._isPlayPending = !0, t._lastPlayType = void 0, t._isPausePending = !0, t._lastPauseIssuedAt = t._lastPlayIssuedAt, t._lastPauseSource = t._lastPlaySource), i = n(0, s(t.duration(), i));
                            ie();
                            t.ready(function() {
                                var n = e && e.lazy && 'playing' !== t.state();
                                return n ? (t.engine.seekOnPlay(i).then(t.behaviors.relayEvents.fireTimeChangedEventsIfChanged), t._isPlayPending = !1, void a()) : void('beforeplay' === t.state() ? t._seekPromise = t.engine.seek(i).catch(function(n) {
                                    t.notice(n), t.engine.seekOnPlay(i), t._isPlayPending = !1, t._lastPlayRejectedAt = Date.now(), t._lastPlayType = void 0, t.trigger('playrejected', t.lastPlayInfo()), a()
                                }).then(function(e) {
                                    t.behaviors.relayEvents.fireTimeChangedEventsIfChanged(), t._isPlayPending = !1, t._isPausePending = !1, t._lastPlayType = e, 'play-silently' === e && (t._inSilentPlaybackMode = !0, t.trigger('silentplaybackmodechange', !0)), a()
                                }) : (t.info('time ' + i + ': set immediately'), t.engine.setCurrentTime(i), t.behaviors.relayEvents.fireTimeChangedEventsIfChanged(), a()))
                            })
                        }), this)
                    }
                }, {
                    key: 'duration',
                    value: function() {
                        if (this.engine) return this.engine.getDuration();
                        var e = this._opts.trimStart,
                            t = this._opts.trimEnd,
                            n = null != e && -1 !== e ? e : 0,
                            i = null != t && -1 !== t ? t : this._mediaData.duration;
                        return i - n
                    }
                }, {
                    key: 'volume',
                    value: function(e) {
                        return null == e ? this.engine ? this.engine.getVolume() : null == this._volume ? 1 : this._volume : (this.info('volume', e), e = n(0, s(1, e)), this.initEngineAfterEmbedded(), this._volume = e, this.ready() && this.engine.setVolume(e), this)
                    }
                }, {
                    key: 'mute',
                    value: function() {
                        this._muted = !0, this.ready() && this.engine.mute()
                    }
                }, {
                    key: 'unmute',
                    value: function() {
                        this._muted = !1, this.ready() && (l['default'].detect.callingPlayRequiresEventContext ? 'playing' !== this.state() || ee() ? (this.engine.unmute(), this._inSilentPlaybackMode && (this._inSilentPlaybackMode = !1, this.trigger('silentplaybackmodechange', !1))) : this.notice('could not unmute') : (this.engine.unmute(), this._inSilentPlaybackMode && (this._inSilentPlaybackMode = !1, this.trigger('silentplaybackmodechange', !1))))
                    }
                }, {
                    key: 'isMuted',
                    value: function() {
                        return this.engine ? this.engine.isMuted() : null == this._muted ? !!this._opts.muted : this._muted
                    }
                }, {
                    key: 'state',
                    value: function() {
                        if (this.engine) {
                            var e = this.engine.getPlaybackMode();
                            return 'beforeplay' === e && this.behaviors.relayEvents._hasPlayed ? 'paused' : e
                        }
                        return 'beforeplay'
                    }
                }, {
                    key: 'lastPauseInfo',
                    value: function() {
                        return {
                            source: this._lastPauseSource,
                            issuedAt: this._lastPauseIssuedAt,
                            isPending: !!this._isPausePending
                        }
                    }
                }, {
                    key: 'lastPlayInfo',
                    value: function() {
                        return {
                            source: this._lastPlaySource,
                            issuedAt: this._lastPlayIssuedAt,
                            isPending: !!this._isPlayPending,
                            playType: this._lastPlayType,
                            resolvedAt: this._lastPlayResolvedAt,
                            rejectedAt: this._lastPlayRejectedAt
                        }
                    }
                }, {
                    key: 'playerColor',
                    value: function(e) {
                        var t = this;
                        return null == e ? this._attrs.playerColor : (this.info('playerColor', e), this.embedded(function() {
                            var n = t._attrs.playerColor;
                            e = l['default'].Player._sanePlayerColor(e), t._attrs.playerColor = new l['default'].Color(e).toHex(), n !== t._attrs.playerColor && t.trigger('playercolorchange', t._attrs.playerColor, n)
                        }), this)
                    }
                }, {
                    key: 'playerBackgroundColor',
                    value: function(e) {
                        if (null != e) {
                            this.info('playerBackgroundColor', e);
                            var t = this._attrs.playerBackgroundColor;
                            return this._attrs.playerBackgroundColor = new l['default'].Color(e).toHex(), t !== this._attrs.playerBackgroundColor && this.trigger('playerbackgroundcolorchange', this._attrs.playerBackgroundColor, t), this
                        }
                        return this._attrs.playerBackgroundColor
                    }
                }, {
                    key: 'width',
                    value: function(e) {
                        var n = this,
                            i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                        return null == e ? L(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), 'width', this).call(this, e, i) : i.fullscreen || !this.inFullscreen() ? L(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), 'width', this).call(this, e, i) : (this.info('notFullscreen => width(' + e + ')'), this.notFullscreen(function() {
                            L(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), 'width', n).call(n, e, i)
                        }), this)
                    }
                }, {
                    key: 'height',
                    value: function(e) {
                        var n = this,
                            i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                        return null == e ? L(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), 'height', this).call(this, e, i) : i.fullscreen || !this.inFullscreen() ? L(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), 'height', this).call(this, e, i) : (this.info('notFullscreen => height(' + e + ')'), this.notFullscreen(function() {
                            L(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), 'height', n).call(n, e, i)
                        }), this)
                    }
                }, {
                    key: 'videoWidth',
                    value: function(e) {
                        var n = this,
                            i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                        return null == e ? L(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), 'videoWidth', this).call(this, e, i) : i.fullscreen || !this.inFullscreen() ? L(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), 'videoWidth', this).call(this, e, i) : (this.info('notFullscreen => videoWidth(' + e + ')'), this.notFullscreen(function() {
                            L(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), 'videoWidth', n).call(n, e, i)
                        }), this)
                    }
                }, {
                    key: 'videoHeight',
                    value: function(e) {
                        var n = this,
                            i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                        return null == e ? L(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), 'videoHeight', this).call(this, e, i) : i.fullscreen || !this.inFullscreen() ? L(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), 'videoHeight', this).call(this, e, i) : (this.info('notFullscreen => videoHeight(' + e + ')'), this.notFullscreen(function() {
                            L(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), 'videoHeight', n).call(n, e, i)
                        }), this)
                    }
                }, {
                    key: 'playbackRate',
                    value: function(e) {
                        var t = this;
                        return null == e ? this.engine ? this.engine.getPlaybackRate() : 1 : (this.initEngineAfterEmbedded(), this.ready(function() {
                            t.info('playbackRate', e);
                            var i = parseFloat(e);
                            if (isNaN(i)) return t.error('playbackRate: Invalid argument \'#{rate}\' given. Expected a float.'), t;
                            e = i;
                            var a = t.engine.getPlaybackRate();
                            t.engine.setPlaybackRate(e), t._eventLoopDuration = n(50, s(500, t._baseEventLoopDuration * e)), t._playbackRate = e, a !== t._playbackRate && t.trigger('playbackratechange', t._playbackRate)
                        }), this)
                    }
                }, {
                    key: 'trim',
                    value: function(e) {
                        var t = this;
                        return null == e ? this.engine.getTrim() : void this.embedded(function() {
                            l['default'].obj.equalsDeep(e, t.engine.getTrim()) || (t.engine.setTrim(e), t.trigger('trimchange', e))
                        })
                    }
                }, {
                    key: 'captureCurrentFrame',
                    value: function() {
                        var e;
                        return (e = this.engine).captureCurrentFrame.apply(e, arguments)
                    }
                }, {
                    key: 'getReportAProblemData',
                    value: function() {
                        var e = this,
                            t = function(e) {
                                try {
                                    return e()
                                } catch (t) {
                                    return 'threw exception: ' + t.message
                                }
                            },
                            n = {
                                media_key: this._mediaData.mediaKey,
                                account_key: this._mediaData.accountKey,
                                visitor_key: this.visitorKey(),
                                event_key: this.eventKey(),
                                referrer: document.referrer,
                                page_url: location.href,
                                extra_data: {
                                    first_1000_logs: l['default'].wlog.first1000LogLines(),
                                    last_1000_logs: l['default'].wlog.last1000LogLines(),
                                    browser_time: new Date,
                                    option_sources: t(function() {
                                        return e.publicApi._optionSources()
                                    }),
                                    embed_options: this.publicApi._opts,
                                    active_plugins: t(function() {
                                        return Object.keys(e.publicApi.plugin)
                                    }),
                                    assets: this._mediaData.assets,
                                    selectedAsset: this.engine.selectedAsset(),
                                    attrs: this._attrs,
                                    assetOptions: t(function() {
                                        return e.assetOptions()
                                    }),
                                    isScreencast: t(function() {
                                        return e.isScreencast()
                                    }),
                                    judy: t(function() {
                                        return N.report(e.publicApi.judyCtx(), e._mediaData, e._opts)
                                    }),
                                    detect: l['default'].detect,
                                    engineDiagnostics: t(function() {
                                        return e.engine.diagnosticData()
                                    })
                                }
                            };
                        for (var i in this.publicApi.plugin)
                            if ('vulcanVideo' != i) {
                                var a = this.publicApi.plugin[i];
                                'function' == typeof a.getReportAProblemData && (n.extra_data[i] = a.getReportAProblemData())
                            }
                        return n
                    }
                }, {
                    key: 'setControlEnabled',
                    value: function(e, t) {
                        var n = this,
                            i = this.isControlEnabled(e) !== t;
                        this._enabledControls[e] = t;
                        var a = function() {
                            t ? n.trigger('controlenabled', e) : n.trigger('controldisabled', e)
                        };
                        return i ? this.embedded() ? this.renderUI().then(a) : new U(function(e) {
                            n.embedded(e), a()
                        }) : this.ui && this.ui.lastRenderPromise || U.resolve()
                    }
                }, {
                    key: 'isControlDisabled',
                    value: function(e) {
                        var t = l['default']._controlDefinitions[e];
                        return t && t.isVideoChrome && this._opts.chromeless || !1 === this._enabledControls[e]
                    }
                }, {
                    key: 'isControlEnabled',
                    value: function(e) {
                        return !1 !== this._enabledControls[e] && null != this.publicApi.controls[e]
                    }
                }, {
                    key: 'whenControlMounted',
                    value: function(e) {
                        var t = this;
                        return new U(function(n) {
                            t.embedded(function() {
                                t.behaviors.ui.whenControlMounted(e).then(n)
                            })
                        })
                    }
                }, {
                    key: 'getControl',
                    value: function(e) {
                        return this.ui && this.ui.controls && this.ui.controls[e]
                    }
                }, {
                    key: 'enterInputContext',
                    value: function(e) {
                        var t = this._playerContext.indexOf(e);
                        0 < t && this._playerContext.splice(t, 1), (-1 === t || 0 < t) && (this._playerContext.unshift(e), this.trigger('inputcontextchange', e))
                    }
                }, {
                    key: 'exitInputContext',
                    value: function(e) {
                        var t = this.getInputContext(),
                            n = this._playerContext.indexOf(e);
                        this._playerContext.splice(n, 1);
                        var i = this.getInputContext();
                        t !== i && this.trigger('inputcontextchange', i)
                    }
                }, {
                    key: 'getInputContext',
                    value: function() {
                        return this._playerContext[0]
                    }
                }, {
                    key: 'getVideoElement',
                    value: function() {
                        return this.engine && this.engine.videoElem()
                    }
                }, {
                    key: 'whenVideoElementInDom',
                    value: function() {
                        var e = this;
                        return this._whenVideoElementInDom ? this._whenVideoElementInDom : this.engine ? void resolve(this.getVideoElement()) : this._whenVideoElementInDom = new U(function(t) {
                            e.bind('engine-initialized', function() {
                                return t(e.getVideoElement()), e.unbind
                            })
                        })
                    }
                }, {
                    key: 'inSilentPlaybackMode',
                    value: function() {
                        return !!this._inSilentPlaybackMode
                    }
                }, {
                    key: 'checkForReady',
                    value: function() {
                        this.behaviors.embed.checkForReady()
                    }
                }, {
                    key: 'loadOverlayCode',
                    value: function() {
                        var e = this,
                            t = new l['default'].StopGo;
                        return this.behaviors.overlays ? t.go() : l['default'].asyncRequire('vulcanV2Video/behaviors/OverlaysBehavior.js').then(function(n) {
                            e.behaviors.overlays || e.addBehavior(n), t.go()
                        }), t
                    }
                }, {
                    key: 'defineOverlay',
                    value: function(e, t) {
                        this.loadOverlayCode(), this._overlays[e] = t
                    }
                }, {
                    key: 'requestOverlay',
                    value: function(e) {
                        var t = this;
                        return this.loadOverlayCode().then(function() {
                            return t.behaviors.overlays.requestOverlay(e)
                        })
                    }
                }, {
                    key: 'cancelOverlay',
                    value: function(e) {
                        var t = this;
                        return this.loadOverlayCode().then(function() {
                            return t.behaviors.overlays.cancelOverlay(e)
                        })
                    }
                }, {
                    key: 'undefineOverlay',
                    value: function(e) {
                        var t = this;
                        return this.loadOverlayCode().then(function() {
                            return t.behaviors.overlays.undefineOverlay(e)
                        })
                    }
                }, {
                    key: 'getOverlays',
                    value: function() {
                        return this._overlays
                    }
                }, {
                    key: 'layout',
                    value: function(e) {
                        var t = this,
                            n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                        return null == e ? this._layout : void(this.whenVideoElementInDom().then(function() {
                            t.engine.setLayout(e, n)
                        }), this._layout = e)
                    }
                }, {
                    key: '_inNativeMode',
                    value: function() {
                        return this.behaviors.ui.inNativeMode()
                    }
                }, {
                    key: '_bandwidthTest',
                    value: function() {
                        return this.behaviors.bandwidthTest.bandwidthTest()
                    }
                }, {
                    key: '_mozillaAtEnd',
                    value: function() {
                        return this.behaviors.relayEvents.mozillaAtEnd()
                    }
                }]), t
            }(ne);
        l['default'].VulcanV2Player = oe, l['default'].plugin('vulcanV2Video', function() {
            l['default'].info('vulcanV2Video no-op plugin executed')
        });
        var ie = function() {
            return ee() ? 'user-event' : 'non-user-event'
        }
    }
    t['default'] = l['default'].VulcanV2Player;
}, function(e, t, n) {
    'use strict';
    n.r(t);
    var l = n(2),
        s = n(87),
        d = n(279),
        p = function() {
            function e(e, t) {
                for (var n, a = 0; a < t.length; a++) n = t[a], n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }();

    function i(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
    }

    function a(e, t) {
        if (!e) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return t && ('object' == typeof t || 'function' == typeof t) ? t : e
    }

    function r(e, t) {
        if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function, not ' + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    var u = l['default'].lib('player/lib/fit-control'),
        c = u.controlMultiplierBasedOnVideo,
        m = l['default'].lib('preact'),
        g = m.h,
        h = m.render,
        y = 125,
        f = function(e) {
            function t(e) {
                i(this, t);
                var n = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return n.renderButton = function() {
                    n.buttonElem = h(g(d['default'], {
                        color: n.video.playerColor(),
                        scale: n.scale(),
                        isVisible: 'beforeplay' === n.video.state() && !1 === n.video.lastPlayInfo().isPending,
                        onClickOrTap: n.onClickOrTap,
                        showBpbTime: n._timeEnabled,
                        duration: n.video.duration(),
                        playerLanguage: n.props.playerLanguage,
                        leftNudgeFraction: n.getLeftNudgeFraction(),
                        topNudgeFraction: n.getTopNudgeFraction(),
                        baseHeight: 80,
                        baseWidth: y
                    }), n.rootElem, n.buttonElem), n.reactMounts = [n.rootElem, n.buttonElem]
                }, n.onClickOrTap = function() {
                    n.video.play()
                }, n.unbinds.push(e.on('playercolorchange', n.renderButton), e.on('play', n.renderButton), e.on('playrejected', n.renderButton), e.on('playpending', n.renderButton), e.on('playerlanguagechange', n.renderButton), e.on('end', n.renderButton), e.on('widthchange', n.renderButton), e.on('trimchange', n.renderButton)), n._timeEnabled = n.video._opts.bpbTime, n
            }
            return r(t, e), p(t, [{
                key: 'mount',
                value: function(e) {
                    this.rootElem = e, this.renderButton()
                }
            }, {
                key: 'onControlPropsUpdated',
                value: function(e) {
                    this.props.videoWidth !== e.videoWidth && this.renderButton()
                }
            }, {
                key: 'shouldShow',
                value: function() {
                    var e = 50 < this.scale() * y,
                        t = this.video.isControlEnabled('smallPlayButton') && !1 !== this.video._opts.controlsVisibleOnLoad;
                    return !e && t ? !1 : 'beforeplay' === this.video.state() && !1 === this.video.lastPlayInfo().isPending
                }
            }, {
                key: 'scale',
                value: function() {
                    return Math.min(1.3, Math.max(0.3, c(this.video, [640, 960])))
                }
            }, {
                key: 'setTimeEnabled',
                value: function(e) {
                    this._timeEnabled = e, this.renderButton()
                }
            }, {
                key: 'setLeftNudgeFraction',
                value: function(e) {
                    this._leftNudgeFraction = e, this.renderButton()
                }
            }, {
                key: 'setTopNudgeFraction',
                value: function(e) {
                    this._topNudgeFraction = e, this.renderButton()
                }
            }, {
                key: 'getLeftNudgeFraction',
                value: function() {
                    return null == this._leftNudgeFraction ? this.video._opts.bpbLeftNudge : this._leftNudgeFraction
                }
            }, {
                key: 'getTopNudgeFraction',
                value: function() {
                    return null == this._topNudgeFraction ? this.video._opts.bpbTopNudge : this._topNudgeFraction
                }
            }]), t
        }(s['default']);
    f.shouldMount = function(e) {
        var t = e._opts.playButton;
        return null == t || !0 === t
    }, f.handle = 'bigPlayButton', f.type = 'above-control-bar', l['default'].defineControl(f);
    t['default'] = f;
}, function(e, t, n) {
    'use strict';
    n.r(t);
    var l = n(2),
        s = n(89),
        d = n(280),
        p = function() {
            function e(e, t) {
                for (var n, a = 0; a < t.length; a++) n = t[a], n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }();

    function i(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
    }

    function a(e, t) {
        if (!e) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return t && ('object' == typeof t || 'function' == typeof t) ? t : e
    }

    function r(e, t) {
        if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function, not ' + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    var u = l['default'].lib('player/translations'),
        c = u.getTranslation,
        m = l['default'].lib('preact'),
        g = m.h,
        h = m.render,
        y = m.Component,
        f = l['default'].lib('utilities/color'),
        _ = l['default'].lib('utilities/core'),
        b = _.niceDuration,
        v = function(e) {
            function t(e) {
                i(this, t);
                var n = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return n.onMouseEnter = function() {
                    n.setState({
                        isHovering: !0
                    })
                }, n.onMouseLeave = function() {
                    n.setState({
                        isHovering: !1
                    })
                }, n.onFocusIn = function() {
                    n.setState({
                        isHovering: !0
                    })
                }, n.onFocusOut = function() {
                    n.setState({
                        isHovering: !1
                    })
                }, n.state = {
                    isHovering: !1
                }, n
            }
            return r(t, e), p(t, [{
                key: 'render',
                value: function() {
                    var e = this.props.baseWidth,
                        t = this.props.baseHeight;
                    return g('div', {
                        class: 'w-bpb-wrapper w-css-reset w-css-reset-tree',
                        style: this.wrapperStyle()
                    }, g('button', {
                        class: 'w-big-play-button w-css-reset-button-important w-vulcan-v2-button',
                        style: this.buttonStyle(),
                        onMouseEnter: this.onMouseEnter,
                        onMouseLeave: this.onMouseLeave,
                        onFocusIn: this.onFocusIn,
                        onFocusOut: this.onFocusOut,
                        "aria-label": this.t('TITLE_WHEN_NOT_PLAYING')
                    }, g('svg', Object(s.standardSvgAttrs)(e, t), g('rect', {
                        "fill-rule": 'evenodd',
                        "clip-rule": 'evenodd',
                        fill: 'none',
                        width: e,
                        height: t
                    }), g('polygon', {
                        "fill-rule": 'evenodd',
                        "clip-rule": 'evenodd',
                        fill: '#FFFFFF',
                        points: '53,22 53,58 79,40'
                    }))), this.props.showBpbTime ? g('div', {
                        class: 'w-bpb-time',
                        style: this.timeStyle()
                    }, b(this.props.duration)) : null)
                }
            }, {
                key: 't',
                value: function(e) {
                    return c(this.props.playerLanguage, 'PLAY_BUTTON_' + e)
                }
            }, {
                key: 'wrapperStyle',
                value: function() {
                    var e = Math.min,
                        t = Math.max,
                        n = this.props,
                        i = n.scale,
                        a = new f(n.color).alpha(.8);
                    return this.state.isHovering && a.lighten(30), {
                        display: n.isVisible ? 'block' : 'none',
                        left: 50 + (e(50, t(-50, 100 * (n.leftNudgeFraction || 0))) || 0) + '%',
                        position: 'absolute',
                        top: 50 + (e(50, t(-50, 100 * (n.topNudgeFraction || 0))) || 0) + '%',
                        transform: 'translate(-50%, -50%)'
                    }
                }
            }, {
                key: 'buttonStyle',
                value: function() {
                    var e = this.props,
                        t = e.scale,
                        n = new f(e.color).alpha(.8);
                    return this.state.isHovering && n.lighten(30), {
                        cursor: 'pointer',
                        height: e.baseHeight * t + 'px',
                        background: n.toRgba(),
                        boxShadow: this.state.isKeyboardFocused ? '0 0 0 2px #fff inset' : 'none',
                        width: e.baseWidth * t + 'px'
                    }
                }
            }, {
                key: 'timeStyle',
                value: function() {
                    var e = this.props.scale;
                    return {
                        background: 'rgba(0,0,0,.4)',
                        color: '#fff',
                        fontFamily: 'WistiaPlayerOverpassNumbers, Helvetica, Sans-Serif',
                        fontSize: 18 * e + 'px',
                        lineHeight: 30 * e + 'px',
                        pointerEvents: 'none',
                        textAlign: 'center'
                    }
                }
            }]), t
        }(y);
    t['default'] = Object(d['default'])(v);
}, function(e, t, n) {
    'use strict';
    n.r(t);
    var l = n(2),
        s = n(118),
        d = function() {
            function e(e, t) {
                for (var n, a = 0; a < t.length; a++) n = t[a], n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }();

    function i(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
    }

    function a(e, t) {
        if (!e) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return t && ('object' == typeof t || 'function' == typeof t) ? t : e
    }

    function r(e, t) {
        if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function, not ' + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    var p = l['default'].lib('preact'),
        u = p.h,
        c = p.render,
        m = p.Component,
        g = l['default'].lib('utilities/detect'),
        h = g.cachedDetect,
        y = h(),
        f = l['default'].lib('player/lib/elem'),
        _ = f.elemBind,
        b = f.elemUnbind;
    t['default'] = function(e) {
        return function(t) {
            function n() {
                var e, t, r, l;
                i(this, n);
                for (var s = arguments.length, d = Array(s), p = 0; p < s; p++) d[p] = arguments[p];
                return l = (t = (r = a(this, (e = n.__proto__ || Object.getPrototypeOf(n)).call.apply(e, [this].concat(d))), r), r.onTouchEnd = function(t, e) {
                    var n = r.props.onClickOrTap;
                    n && e.isTap && n(t)
                }, r.onClick = function(t) {
                    var e = r.props.onClickOrTap;
                    e && e(t)
                }, t), a(r, l)
            }
            return r(n, t), d(n, [{
                key: 'render',
                value: function() {
                    return u(e, this.props)
                }
            }, {
                key: 'componentDidMount',
                value: function() {
                    this.setupBindings()
                }
            }, {
                key: 'componentDidUpdate',
                value: function() {
                    this.destroyBindings(), this.setupBindings()
                }
            }, {
                key: 'componentWillUnmount',
                value: function() {
                    this.destroyBindings()
                }
            }, {
                key: 'setupBindings',
                value: function() {
                    this.unbinds = [], y.touchScreen ? (this.touchEvents = new s['default'](this.base), this.touchEvents.on('touchend', this.onTouchEnd)) : this.unbinds.push(_(this.base, 'click', this.onClick))
                }
            }, {
                key: 'destroyBindings',
                value: function() {
                    this.touchEvents && (this.touchEvents.destroy(), this.touchEvents = null), this.unbinds && (this.unbinds.map(function(e) {
                        return e()
                    }), this.unbinds = null)
                }
            }]), n
        }(m)
    };
}, function(e, t, n) {
    'use strict';
    n.r(t);
    var l = n(117),
        s = n(2),
        d = n(87),
        p = n(282),
        u = function() {
            function e(e, t) {
                for (var n, a = 0; a < t.length; a++) n = t[a], n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }();

    function i(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
    }

    function a(e, t) {
        if (!e) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return t && ('object' == typeof t || 'function' == typeof t) ? t : e
    }

    function r(e, t) {
        if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function, not ' + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    var c = s['default'].lib('preact'),
        m = c.h,
        g = c.render,
        h = s['default'].lib('player/lib/fit-control'),
        y = h.controlMultiplierBasedOnVideo,
        f = s['default'].lib('utilities/detect'),
        _ = f.cachedDetect,
        b = _(),
        v = function(e) {
            function t(e) {
                i(this, t);
                var n = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return n.renderWithFade = function() {
                    'beforeplay' === n.video.state() || (n.renderButton(), clearTimeout(n.displayTimeout), n.displayTimeout = n.props.controlsAreVisible ? setTimeout(function() {
                        n.isDisplayNone = !1, n.renderButton()
                    }, 1) : setTimeout(function() {
                        n.isDisplayNone = !0, n.renderButton()
                    }, 200))
                }, n.onClickOrTap = function() {
                    n.togglePlay()
                }, n.unbinds.push(e.on('play', n.renderWithFade), e.on('pause', n.renderWithFade)), n.isDisplayNone = 'beforeplay' === e.state(), n
            }
            return r(t, e), u(t, [{
                key: 'mount',
                value: function(e) {
                    this.rootElem = e, this.renderButton()
                }
            }, {
                key: 'renderButton',
                value: function() {
                    this.iconElem = g(m(l['default'], {
                        tagName: 'button',
                        class: 'w-centered-play-pause-toggler w-vulcan-v2-button',
                        onClickOrTap: this.onClickOrTap,
                        style: this.rootStyle()
                    }, m(p['default'], {
                        isPlaying: 'playing' === this.video.state(),
                        svgStyle: this.svgStyle(),
                        noPadding: !0
                    })), this.rootElem, this.iconElem), this.reactMounts = [this.rootElem, this.iconElem]
                }
            }, {
                key: 'onControlPropsUpdated',
                value: function(e) {
                    e.controlsAreVisible !== this.props.controlsAreVisible && this.renderWithFade(), e.videoWidth !== this.props.videoWidth && this.renderButton()
                }
            }, {
                key: 'rootStyle',
                value: function() {
                    var e = this.scale(),
                        t = this.props.controlsAreVisible,
                        n = 'playing' === this.video.state(),
                        i = n ? 72 : 80,
                        a = n ? 60 : 50;
                    return {
                        background: 'transparent',
                        border: 0,
                        display: this.isDisplayNone ? 'none' : 'block',
                        height: i * e + 'px',
                        left: '50%',
                        margin: 0,
                        padding: '5px 20px',
                        position: 'absolute',
                        opacity: t ? .7 : 0,
                        outline: 'none',
                        top: '50%',
                        transform: 'translate(-' + (n ? 50 : 42) + '%, -50%)',
                        transition: 'opacity 200ms',
                        webkitTapHighlightColor: 'rgba(0,0,0,0)',
                        width: a * e + 'px'
                    }
                }
            }, {
                key: 'togglePlay',
                value: function() {
                    var e = this.video;
                    'playing' === e.state() ? e.pause() : e.play()
                }
            }, {
                key: 'svgStyle',
                value: function() {
                    return {
                        filter: 'drop-shadow(0px 0px 3px rgba(0,0,0,0.5))'
                    }
                }
            }, {
                key: 'scale',
                value: function() {
                    return Math.min(1.3, Math.max(0.3, y(this.video, [640, 960])))
                }
            }]), t
        }(d['default']);
    v.shouldMount = function() {
        return b.touchScreen
    }, v.handle = 'centeredPlayPauseToggler', v.type = 'above-control-bar', s['default'].defineControl(v);
    t['default'] = v;
}, function(e, t, n) {
    'use strict';
    n.r(t);
    var l = n(2),
        s = n(89),
        d = Object.assign || function(e) {
            for (var t, n = 1; n < arguments.length; n++)
                for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e
        },
        p = function() {
            function e(e, t) {
                for (var n, a = 0; a < t.length; a++) n = t[a], n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }();

    function i(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
    }

    function a(e, t) {
        if (!e) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return t && ('object' == typeof t || 'function' == typeof t) ? t : e
    }

    function r(e, t) {
        if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function, not ' + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    var u = l['default'].lib('preact'),
        c = u.h,
        m = u.render,
        g = u.Component,
        h = l['default'].lib('utilities/obj'),
        y = h.merge,
        f = function(e) {
            function t() {
                return i(this, t), a(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            }
            return r(t, e), p(t, [{
                key: 'shouldComponentUpdate',
                value: function(e) {
                    return this.props.isPlaying !== e.isPlaying
                }
            }, {
                key: 'render',
                value: function() {
                    return this.props.isPlaying ? this.renderPauseIcon() : this.renderPlayIcon()
                }
            }, {
                key: 'renderPlayIcon',
                value: function() {
                    var e = this.props.noPadding,
                        t = e ? 0 : 20,
                        n = e ? 0 : 9;
                    return c('svg', d({}, this.svgAttrs(10 + 2 * t, 16 + 2 * n), {
                        class: 'w-css-reset w-css-reset-tree'
                    }), c('polygon', {
                        points: t + 9.5 + ',' + (n + 8) + ' ' + t + ',' + (n + 16) + ' ' + t + ',' + n
                    }))
                }
            }, {
                key: 'renderPauseIcon',
                value: function() {
                    var e = this.props.noPadding,
                        t = e ? 0 : 20,
                        n = e ? 0 : 11.3,
                        i = 12;
                    return c('svg', d({}, this.svgAttrs(10 + 2 * t, i + 2 * n), {
                        class: 'w-css-reset w-css-reset-tree'
                    }), c('g', null, c('rect', {
                        x: t,
                        y: n,
                        width: '3.5',
                        height: i
                    }), c('rect', {
                        x: t + 6.5,
                        y: n,
                        width: '3.5',
                        height: i
                    })))
                }
            }, {
                key: 'svgAttrs',
                value: function() {
                    var e = this.props.noPadding,
                        t = this.props.isPlaying,
                        n = e ? 0 : 20,
                        i = e ? 0 : t ? 11.3 : 9,
                        a = t ? 12 : 16,
                        r = Object(s.standardSvgAttrs)(10 + 2 * n, a + 2 * i);
                    return y(r.style, this.props.svgStyle), r
                }
            }]), t
        }(g);
    t['default'] = f;
}, function(e, t, n) {
    'use strict';
    n.r(t);
    var l = n(2),
        s = n(87),
        d = n(284),
        p = n(116),
        u = Object.assign || function(e) {
            for (var t, n = 1; n < arguments.length; n++)
                for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e
        },
        c = function() {
            function e(e, t) {
                for (var n, a = 0; a < t.length; a++) n = t[a], n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }();

    function i(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
    }

    function a(e, t) {
        if (!e) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return t && ('object' == typeof t || 'function' == typeof t) ? t : e
    }

    function r(e, t) {
        if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function, not ' + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    var m = l['default'].lib('preact'),
        g = m.h,
        h = m.render,
        y = l['default'].lib('utilities/bindify'),
        f = y.bindify,
        _ = l['default'].lib('player/lib/elem'),
        b = _.elemFromObject,
        v = _.elemRemove,
        A = _.elemUnbindAllInside,
        w = l['default'].lib('player/translations'),
        k = w.getTranslation,
        E = l['default'].lib('utilities/detect'),
        C = E.cachedDetect,
        S = l['default'].lib('promiscuous'),
        P = l['default'].lib('player/lib/fit-control'),
        T = P.controlMultiplierBasedOnVideo,
        I = C(),
        x = function(e) {
            function t(e) {
                i(this, t);
                var n = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return n.renderButton = function() {
                    var e = !!n.video._opts.silentAutoPlayIsChromeless,
                        t = n.isVisible();
                    e && (t ? n.video.requestChromeless('clickForSound') : n.video.releaseChromeless('clickForSound')), n.video.trigger('clickforsoundvisibilitychange', t);
                    var i;
                    if (t) {
                        var a = new S(function(e) {
                            return setTimeout(e, 1e3)
                        });
                        i = S.race([a, l['default'].asyncRequire('overpassFontFace.js')])
                    } else i = S.resolve();
                    i.then(function() {
                        n.buttonRoot = h(g(d['default'], u({}, n.props, {
                            scale: n.scale(),
                            isVisible: t,
                            onClickOrTap: n.onClickOrTap,
                            backdropEnabled: e,
                            buttonText: n.buttonText()
                        })), n.rootElem, n.buttonRoot), n.reactMounts = [n.rootElem, n.buttonRoot]
                    })
                }, n.onClickOrTap = function(t) {
                    Object(p['default'])() || n.video._impl.ui.vulcanWrapper.focus(), n.video.unmute(), n.trigger('click', t)
                }, n.unbinds.push(e.on('play', n.renderButton), e.on('silentplaybackmodechange', n.renderButton), e.on('volumechange', n.renderButton)), n
            }
            return r(t, e), c(t, [{
                key: 'mount',
                value: function(e) {
                    this.rootElem = e, this.renderButton()
                }
            }, {
                key: 'onControlPropsUpdated',
                value: function(e) {
                    var t = this.props;
                    (e.scale !== t.scale || e.controlsAreVisible !== t.controlsAreVisible || e.controlBarHeight !== t.controlBarHeight) && this.renderButton()
                }
            }, {
                key: 'isVisible',
                value: function() {
                    return null == this._isVisible ? this.video.inSilentPlaybackMode() : this._isVisible
                }
            }, {
                key: 'setIsVisible',
                value: function(e) {
                    this._isVisible = e, this.renderButton()
                }
            }, {
                key: 'buttonText',
                value: function() {
                    return this._buttonText ? this._buttonText : I.touchScreen ? this.t('MOBILE_TEXT') : this.t('DESKTOP_TEXT')
                }
            }, {
                key: 'setButtonText',
                value: function(e) {
                    this._buttonText = e, this.renderButton()
                }
            }, {
                key: 't',
                value: function(e) {
                    return k(this.props.language, 'CLICK_FOR_SOUND_' + e)
                }
            }, {
                key: 'scale',
                value: function() {
                    return 1.2 * this.props.scale
                }
            }]), t
        }(s['default']);
    f(x.prototype), x.handle = 'clickForSoundButton', x.type = 'above-control-bar', l['default'].defineControl(x);
    t['default'] = x;
}, function(e, t, n) {
    'use strict';
    n.r(t);
    var l = n(2),
        s = n(89),
        d = n(117),
        p = n(116),
        u = function() {
            function e(e, t) {
                for (var n, a = 0; a < t.length; a++) n = t[a], n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }();

    function i(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
    }

    function a(e, t) {
        if (!e) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return t && ('object' == typeof t || 'function' == typeof t) ? t : e
    }

    function r(e, t) {
        if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function, not ' + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    var c = l['default'].lib('preact'),
        m = c.h,
        g = c.render,
        h = c.Component,
        y = function(e) {
            function t() {
                var e, n, r, l;
                i(this, t);
                for (var s = arguments.length, d = Array(s), u = 0; u < s; u++) d[u] = arguments[u];
                return l = (n = (r = a(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(d))), r), r.onFocus = function() {
                    Object(p['default'])() || r.setState({
                        isKeyboardFocused: !0
                    })
                }, r.onBlur = function() {
                    r.setState({
                        isKeyboardFocused: !1
                    })
                }, n), a(r, l)
            }
            return r(t, e), u(t, [{
                key: 'render',
                value: function() {
                    return m(d['default'], {
                        class: 'w-css-reset w-css-reset-tree',
                        style: this.rootStyle(),
                        onClickOrTap: this.props.onClickOrTap
                    }, m('button', {
                        style: this.buttonStyle(),
                        onFocus: this.onFocus,
                        onBlur: this.onBlur,
                        class: 'w-vulcan-v2-button'
                    }, m('svg', {
                        viewBox: '0 0 237 237',
                        style: this.svgStyle()
                    }, m('style', null, this.styleText()), m('polygon', {
                        fill: 'white',
                        points: '88 107 65 107 65 131 89 131 112 154 112 84'
                    }), m('g', {
                        fill: 'none',
                        stroke: 'white',
                        "stroke-width": '10',
                        "stroke-linecap": 'round'
                    }, m('path', {
                        class: 'volume__small-wave',
                        d: 'M 142 86 C 151 107 151 130 142 151'
                    }), m('path', {
                        class: 'volume__large-wave',
                        d: 'M 165 74 C 178 97 178 140 165 163'
                    }))), m('div', {
                        style: this.textStyle()
                    }, this.props.buttonText)))
                }
            }, {
                key: 'styleText',
                value: function() {
                    return '\n      @keyframes VOLUME_SMALL_WAVE_FLASH {\n          0% { opacity: 0; }\n         33% { opacity: 1; }\n         66% { opacity: 1; }\n        100% { opacity: 0; }\n      }\n\n      @keyframes VOLUME_LARGE_WAVE_FLASH {\n          0% { opacity: 0; }\n         33% { opacity: 1; }\n         66% { opacity: 1; }\n        100% { opacity: 0; }\n      }\n\n      .volume__small-wave {\n        animation: VOLUME_SMALL_WAVE_FLASH 2s infinite;\n        opacity: 0;\n      }\n\n      .volume__large-wave {\n        animation: VOLUME_LARGE_WAVE_FLASH 2s infinite .3s;\n        opacity: 0;\n      }\n    '
                }
            }, {
                key: 'rootStyle',
                value: function() {
                    return {
                        display: this.props.isVisible ? 'block' : 'none',
                        height: '100%',
                        left: 0,
                        pointerEvents: this.props.backdropEnabled ? 'auto' : 'none',
                        position: 'absolute',
                        top: 0,
                        width: '100%'
                    }
                }
            }, {
                key: 'buttonStyle',
                value: function() {
                    var e = this.props.scale;
                    return {
                        background: 'rgba(0,0,0,0.4)',
                        border: '2px solid ' + (this.state.isKeyboardFocused ? '#fff' : 'transparent'),
                        borderRadius: 27 * e + 'px',
                        cursor: 'pointer',
                        height: 35 * e + 'px',
                        lineHeight: 35 * e + 'px',
                        outline: 'none',
                        paddingRight: 10 * e + 'px',
                        pointerEvents: 'auto',
                        position: 'absolute',
                        right: 15 * e - 2 + 'px',
                        textAlign: 'left',
                        top: 15 * e - 2 + 'px'
                    }
                }
            }, {
                key: 'svgStyle',
                value: function() {
                    var e = this.props.scale;
                    return {
                        height: 32 * e + 'px',
                        marginTop: 0.5 * e + 'px',
                        verticalAlign: 'top',
                        width: 35 * e + 'px'
                    }
                }
            }, {
                key: 'textStyle',
                value: function() {
                    var e = this.props.scale;
                    return {
                        color: 'white',
                        display: 'inline-block',
                        fontFamily: 'WistiaPlayerOverpass, Helvetica, Sans-Serif',
                        fontSize: 13 * e + 'px',
                        marginLeft: -4 * e + 'px',
                        marginTop: -0.75 * e + 'px',
                        verticalAlign: 'top',
                        whiteSpace: 'nowrap',
                        width: '36%'
                    }
                }
            }]), t
        }(h);
    t['default'] = y;
}, function(e, t, n) {
    'use strict';
    n.r(t);
    var l = n(286),
        s = n(87),
        d = n(2),
        p = n(118),
        u = n(116),
        c = function() {
            function e(e, t) {
                var n, i = [],
                    a = !0,
                    r = !1;
                try {
                    for (var l, s = e[Symbol.iterator](); !(a = (l = s.next()).done) && (i.push(l.value), !(t && i.length === t)); a = !0);
                } catch (e) {
                    r = !0, n = e
                } finally {
                    try {
                        !a && s['return'] && s['return']()
                    } finally {
                        if (r) throw n
                    }
                }
                return i
            }
            return function(t, n) {
                if (Array.isArray(t)) return t;
                if (Symbol.iterator in Object(t)) return e(t, n);
                throw new TypeError('Invalid attempt to destructure non-iterable instance')
            }
        }(),
        m = function() {
            function e(e, t) {
                for (var n, a = 0; a < t.length; a++) n = t[a], n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }(),
        g = function e(t, n, i) {
            null === t && (t = Function.prototype);
            var a = Object.getOwnPropertyDescriptor(t, n);
            if (a === void 0) {
                var r = Object.getPrototypeOf(t);
                return null === r ? void 0 : e(r, n, i)
            }
            if ('value' in a) return a.value;
            var l = a.get;
            return void 0 === l ? void 0 : l.call(i)
        };

    function i(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
    }

    function a(e, t) {
        if (!e) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return t && ('object' == typeof t || 'function' == typeof t) ? t : e
    }

    function r(e, t) {
        if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function, not ' + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    var y = d['default'].lib('promiscuous'),
        f = d['default'].lib('preact'),
        _ = f.h,
        h = f.render,
        b = d['default'].lib('player/lib/elem'),
        v = b.elemBind,
        A = b.elemIsInside,
        w = b.elemRebind,
        k = b.elemUnbind,
        E = d['default'].lib('utilities/detect'),
        C = E.cachedDetect,
        S = C(),
        P = function(e) {
            function t(e) {
                i(this, t);
                var n = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return n.onContextMenu = function(t) {
                    if (!t.altKey) {
                        'contextmenu' === t.type && t.preventDefault(), n.pageX = t.pageX, n.pageY = t.pageY, n.hasLoaded || n.loading(new y(function(e) {
                            n.loadingPromise = e
                        }), {
                            x: n.pageX,
                            y: n.pageY
                        });
                        var e = new y(function(e) {
                            Object(u['default'])() ? v(document, 'mouseup', function(t) {
                                return n.pageX = t.pageX, n.pageY = t.pageY, e(), k
                            }) : e()
                        });
                        e.then(function() {
                            Object(l.logPromiseErrors)(n.loadContextMenu().then(function() {
                                n.renderMenu && (n.loadingPromise(), n.renderMenu()), setTimeout(function() {
                                    w(document, 'mouseup', n.onDocumentMouseUp)
                                }, 50)
                            }))
                        })
                    }
                }, n.onDocumentMouseUp = function(t) {
                    t.ctrlKey || A(t.target, n.rootElem) || (k(document, 'mouseup', n.onDocumentMouseUp), n.loadContextMenu().then(function() {
                        n.hideMenu()
                    }))
                }, S.touchScreen ? (n.touchEvents = new p['default'](e.chrome), n.touchEvents.bind('longpress', n.onContextMenu)) : n.unbinds.push(v(e.chrome, 'contextmenu', n.onContextMenu)), n
            }
            return r(t, e), m(t, [{
                key: 'mount',
                value: function(e) {
                    this.rootElem = e
                }
            }, {
                key: 'destroy',
                value: function() {
                    g(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), 'destroy', this).call(this), this.touchEvents && (this.touchEvents.destroy(), this.touchEvents = null)
                }
            }, {
                key: 'onControlPropsUpdated',
                value: function(e) {
                    this.props.playerLanguage !== e.playerLanguage && this._visible && this.renderMenu()
                }
            }, {
                key: 'loadContextMenu',
                value: function() {
                    var e = this;
                    return d['default'].asyncRequire(['overpassFontFace.js', 'vulcanV2Video/controls/ContextMenuControl/menu.js']).then(function(t) {
                        var n = c(t, 2),
                            i = n[0],
                            a = n[1];
                        for (var r in a) e[r] = a[r].bind(e)
                    })
                }
            }]), t
        }(s['default']);
    P.handle = 'contextMenu', P.type = 'foreground', d['default'].defineControl(P);
    t['default'] = P;
}, function(e, t, n) {
    'use strict';
    n.r(t);
    n.d(t, 'throwAsync', function() {
        return i
    });
    n.d(t, 'logPromiseErrors', function() {
        return a
    });
    var i = function(t) {
            setTimeout(function() {
                throw t
            }, 0)
        },
        a = function(e) {
            return e.catch(i)
        };
}, function(e, t, n) {
    'use strict';
    n.r(t);
    var l = n(2),
        s = n(87),
        d = n(288),
        p = function() {
            function e(e, t) {
                for (var n, a = 0; a < t.length; a++) n = t[a], n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }();

    function i(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
    }

    function a(e, t) {
        if (!e) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return t && ('object' == typeof t || 'function' == typeof t) ? t : e
    }

    function r(e, t) {
        if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function, not ' + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    var u = l['default'].lib('preact'),
        c = u.h,
        m = u.render,
        g = u.Component,
        h = l['default'].lib('player/translations'),
        y = h.getTranslation,
        f = l['default'].lib('player/lib/elem'),
        _ = f.elemBind,
        b = f.formInputIsFocused,
        v = l['default'].lib('utilities/detect'),
        A = v.cachedDetect,
        w = A(),
        k = function(e) {
            function t(e) {
                i(this, t);
                var n = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return n.onClickButton = function() {
                    n.toggleFullscreen()
                }, n.onKeyUp = function(t) {
                    if (!b()) {
                        var e = n.video.getInputContext();
                        ('player-mouseover' === e || 'player-focus' === e || 'playbar-focus' === e) && t.keyCode === 70 && n.toggleFullscreen()
                    }
                }, n.unbinds.push(e.on('enter-fullscreen', function() {
                    n.renderButton()
                }), e.on('cancel-fullscreen', function() {
                    n.renderButton()
                }), _(document, 'keyup', n.onKeyUp)), E() || C(n.video) || !S() || (n.mountDialog = n.maybeMountDialog), n
            }
            return r(t, e), p(t, [{
                key: 'maybeMountDialog',
                value: function(e) {
                    this.dialogElem = e, this.renderDialog()
                }
            }, {
                key: 'renderDialog',
                value: function() {
                    this.dialogElem.innerHTML = 'Double-tap to zoom in or out'
                }
            }, {
                key: 'mountButton',
                value: function(e) {
                    this.buttonElem = e, this.renderButton()
                }
            }, {
                key: 'renderButton',
                value: function() {
                    if (this.buttonElem) {
                        var e = this.video.inFullscreen() ? this.t('TITLE_WHEN_IN_FULLSCREEN') : this.t('TITLE_WHEN_NOT_IN_FULLSCREEN');
                        this.setButtonLabel(e), this.iconElem = m(c(d['default'], null), this.buttonElem, this.iconElem), this.reactMounts = [this.buttonElem, this.iconElem]
                    }
                }
            }, {
                key: 't',
                value: function(e) {
                    return y(this.props.playerLanguage.code, 'FULLSCREEN_' + e)
                }
            }, {
                key: 'toggleFullscreen',
                value: function() {
                    if (E() || C(this.video)) {
                        var e = this.video;
                        e.inFullscreen() ? e.cancelFullscreen() : e.requestFullscreen()
                    }
                }
            }]), t
        }(s['default']);
    k.handle = 'fullscreenButton', k.type = 'control-bar-right', k.sortValue = 1e3, l['default'].defineControl(k);
    var E = function() {
            return w.fullscreenEnabled
        },
        C = function(e) {
            var t = e._mediaData,
                n = e._opts,
                i = (t.spherical || n.spherical) && !n.overrideSpherical,
                a = !!t.secondaryMediaData,
                r = top !== self;
            return 0 < w.ios.version && (!r || !i && !a)
        },
        S = function() {
            return 0 < w.ios.version || w.android
        };
    k.shouldMount = function(e) {
        var t = e._opts.fullscreenButton;
        return (!0 === t || null == t) && (E() || C(e) || S())
    };
    t['default'] = k;
}, function(e, t, n) {
    'use strict';
    n.r(t);
    var l = n(89),
        s = n(2),
        d = Object.assign || function(e) {
            for (var t, n = 1; n < arguments.length; n++)
                for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e
        },
        p = function() {
            function e(e, t) {
                for (var n, a = 0; a < t.length; a++) n = t[a], n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }();

    function i(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
    }

    function a(e, t) {
        if (!e) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return t && ('object' == typeof t || 'function' == typeof t) ? t : e
    }

    function r(e, t) {
        if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function, not ' + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    var u = s['default'].lib('preact'),
        c = u.h,
        m = u.render,
        g = u.Component,
        h = function(e) {
            function t() {
                return i(this, t), a(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            }
            return r(t, e), p(t, [{
                key: 'shouldComponentUpdate',
                value: function() {
                    return !1
                }
            }, {
                key: 'render',
                value: function() {
                    var e = {
                        fill: 'none',
                        stroke: '#ffffff',
                        "stroke-width": 2,
                        "stroke-linecap": 'round',
                        "stroke-linejoin": 'round',
                        "stroke-miterlimit": 10
                    };
                    return c('svg', Object(l.standardSvgAttrs)(40, 34), c('g', null, c('g', null, c('polyline', d({}, e, {
                        points: '31.4,12.6 31.4,8.7 25.8,8.7'
                    })), c('polyline', d({}, e, {
                        points: '14.7,8.7 9.1,8.7 9.1,12.6'
                    })), c('polyline', d({}, e, {
                        points: '25.8,24.8 31.4,24.8 31.4,20.9'
                    })), c('polyline', d({}, e, {
                        points: '9.1,20.9 9.1,24.8 14.7,24.8'
                    }))), c('rect', d({
                        x: '13.7',
                        y: '12.3'
                    }, e, {
                        "enable-background": 'new',
                        width: '13.3',
                        height: '8.9'
                    }))))
                }
            }]), t
        }(g);
    t['default'] = h;
}, function(e, t, n) {
    'use strict';
    n.r(t);
    var l = n(2),
        s = n(87),
        d = n(290),
        p = function() {
            function e(e, t) {
                for (var n, a = 0; a < t.length; a++) n = t[a], n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }();

    function i(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
    }

    function a(e, t) {
        if (!e) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return t && ('object' == typeof t || 'function' == typeof t) ? t : e
    }

    function r(e, t) {
        if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function, not ' + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    var u = l['default'].lib('preact'),
        c = u.h,
        m = u.render,
        g = function(e) {
            function t(e) {
                i(this, t);
                var n = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                n.isVisible = !1;
                var r = -1;
                return n.unbinds.push(e.on('waiting', function(e) {
                    !n.isVisible && 2 > r && 2 <= e && (n.isVisible = !0, n.renderIndicator()), r = e
                }), e.on('done-waiting', function() {
                    n.isVisible = !1, n.renderIndicator(), r = -1
                }), e.on('timechange', function() {
                    n.isVisible = !1, n.renderIndicator(), r = -1
                })), n
            }
            return r(t, e), p(t, [{
                key: 'mount',
                value: function(e) {
                    this.rootElem = e
                }
            }, {
                key: 'renderIndicator',
                value: function() {
                    this.indicatorElem = m(c('div', {
                        style: this.rootStyle()
                    }, c(d['default'], null)), this.rootElem, this.indicatorElem), this.reactMounts = [this.rootElem, this.indicatorElem]
                }
            }, {
                key: 'rootStyle',
                value: function() {
                    return {
                        display: this.isVisible ? 'block' : 'none',
                        height: '80px',
                        width: '125px'
                    }
                }
            }]), t
        }(s['default']);
    g.handle = 'loadingIndicator', g.type = 'above-control-bar', l['default'].defineControl(g);
    t['default'] = g;
}, function(e, t, n) {
    'use strict';
    n.r(t);
    var l = n(89),
        s = n(2),
        d = function() {
            function e(e, t) {
                for (var n, a = 0; a < t.length; a++) n = t[a], n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }();

    function i(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
    }

    function a(e, t) {
        if (!e) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return t && ('object' == typeof t || 'function' == typeof t) ? t : e
    }

    function r(e, t) {
        if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function, not ' + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    var p = s['default'].lib('preact'),
        u = p.h,
        c = p.render,
        m = p.Component,
        g = s['default'].lib('utilities/color'),
        h = s['default'].lib('player/lib/elem'),
        y = h.addInlineCss,
        f = s['default'].lib('utilities/seqid'),
        _ = function(e) {
            function t(e) {
                i(this, t);
                var n = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return n.pathId = f('w-loading-path-'), n
            }
            return r(t, e), d(t, [{
                key: 'shouldComponentUpdate',
                value: function() {
                    return !1
                }
            }, {
                key: 'render',
                value: function() {
                    var t = this,
                        e = new g(this.props.color || '#fff');
                    return u('div', {
                        ref: function(n) {
                            return t.iconRoot = n
                        },
                        style: this.rootStyle()
                    })
                }
            }, {
                key: 'componentDidMount',
                value: function() {
                    this.activeSvgId = f('wistia_loading_svg_'), this.iconRoot.innerHTML = '\n      <svg version="1.2" id=' + this.activeSvgId + ' height="80" width="125" xmlns="http://www.w3.org/2000/svg" viewport="0 0 125 80" xmlns:xlink="http://www.w3.org/1999/xlink">\n        <path fill="none" stroke="#ffffff" stroke-miterlimit="20" d="M52,21 L81,40 L52,60 Z" />\n      </svg>\n    ';
                    var e, t = this.iconRoot.getElementsByTagName('path')[0];
                    e = t.getTotalLength ? t.getTotalLength() : 100, y(this.iconRoot, '\n      #' + this.activeSvgId + ' path {\n        stroke-width: 2px;\n        stroke-dasharray: ' + e / 3 + ', ' + 2 * e / 3 + ';\n        -webkit-animation: wistia_dash 1s infinite linear forwards;\n      }\n      @-webkit-keyframes wistia_dash {\n        from { stroke-dashoffset: ' + e + '; }\n        to { stroke-dashoffset: 0; }\n      }\n    ')
                }
            }, {
                key: 'rootStyle',
                value: function() {
                    return {
                        height: '80px',
                        left: '50%',
                        position: 'absolute',
                        top: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '125px'
                    }
                }
            }]), t
        }(m);
    t['default'] = _;
}, function(e, t, n) {
    'use strict';
    n.r(t);
    var l = n(87),
        s = n(292),
        d = n(2),
        p = function() {
            function e(e, t) {
                for (var n, a = 0; a < t.length; a++) n = t[a], n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }();

    function i(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
    }

    function a(e, t) {
        if (!e) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return t && ('object' == typeof t || 'function' == typeof t) ? t : e
    }

    function r(e, t) {
        if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function, not ' + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    var u = d['default'].lib('player/lib/elem'),
        c = u.elemBind,
        m = u.elemIsInside,
        g = u.elemUnbind,
        y = u.formInputIsFocused,
        f = u.elemOffset,
        _ = d['default'].lib('preact'),
        b = _.h,
        h = _.render,
        v = d['default'].lib('player/translations'),
        A = v.getTranslation,
        w = d['default'].lib('utilities/detect'),
        k = w.cachedDetect,
        E = k(),
        C = function(e) {
            function t(e) {
                i(this, t);
                var n = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return n.show = function(e) {
                    n._isVisible = !0, n.renderMenu(e)
                }, n.hide = function() {
                    n._isVisible = !1, n.menuElem = h(b('nothing', null), n.rootElem, n.menuElem), n.reactMounts = [n.rootElem, n.menuElem]
                }, n._isVisible = !1, n
            }
            return r(t, e), p(t, [{
                key: 'mount',
                value: function(e) {
                    this.rootElem = e
                }
            }, {
                key: 'renderMenu',
                value: function(e) {
                    var t = e.x || 0,
                        n = e.y || 0,
                        i = f(this.video._embedContainer);
                    this._isVisible && (this.menuElem = h(b(s['default'], {
                        videoOffset: i,
                        x: t,
                        y: n
                    }), this.rootElem, this.menuElem), this.reactMounts = [this.rootElem, this.menuElem])
                }
            }]), t
        }(l['default']);
    C.handle = 'loadingHourglass', C.type = 'foreground', d['default'].defineControl(C);
    t['default'] = C;
}, function(e, t, n) {
    'use strict';
    n.r(t);
    var l = n(2),
        s = Object.assign || function(e) {
            for (var t, n = 1; n < arguments.length; n++)
                for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e
        },
        d = function() {
            function e(e, t) {
                for (var n, a = 0; a < t.length; a++) n = t[a], n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }();

    function i(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
    }

    function a(e, t) {
        if (!e) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return t && ('object' == typeof t || 'function' == typeof t) ? t : e
    }

    function r(e, t) {
        if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function, not ' + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    var p = l['default'].lib('preact'),
        u = p.h,
        c = p.render,
        m = p.Component,
        g = l['default'].lib('player/lib/elem'),
        h = g.elemBind,
        y = g.elemHeight,
        f = g.elemOffset,
        _ = g.elemUnbind,
        b = function(e) {
            function t(e) {
                i(this, t);
                var n = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return n.onMouseMove = function(t) {
                    var e = t.pageX - n.props.videoOffset.left + 10,
                        i = t.pageY - n.props.videoOffset.top;
                    n.setState({
                        x: e,
                        y: i
                    })
                }, n.animationInterval = void 0, n.state = {
                    x: n.props.x + 10,
                    y: n.props.y,
                    floatingPixel: 8
                }, n
            }
            return r(t, e), d(t, [{
                key: 'componentWillMount',
                value: function() {
                    var e = this;
                    this.animationInterval = setInterval(function() {
                        var t = e.state.floatingPixel + 1;
                        10 < t && (t = 8), e.setState({
                            floatingPixel: t
                        })
                    }, 500), h(document, 'mousemove', this.onMouseMove)
                }
            }, {
                key: 'componentWillUnmount',
                value: function() {
                    clearInterval(this.animationInterval), _(document, 'mousemove', this.onMouseMove)
                }
            }, {
                key: 'sandStyle',
                value: function() {
                    return {
                        fill: '#000000',
                        width: '1',
                        height: '1'
                    }
                }
            }, {
                key: 'anchorStyle',
                value: function() {
                    this.props;
                    return {
                        height: 0,
                        left: this.state.x + 'px',
                        position: 'absolute',
                        top: this.state.y + 'px',
                        width: 0
                    }
                }
            }, {
                key: 'sandProps',
                value: function(e, t) {
                    return {
                        className: 'sand',
                        x: e,
                        y: t,
                        style: this.sandStyle()
                    }
                }
            }, {
                key: 'useRules',
                value: function() {
                    return {
                        fill: '#FFFFFF',
                        "fill-rule": 'evenodd'
                    }
                }
            }, {
                key: 'hourGlassProps',
                value: function(e) {
                    return {
                        stroke: '#000000',
                        x: '1.5',
                        y: e,
                        width: '12',
                        height: '2'
                    }
                }
            }, {
                key: 'defsProps',
                value: function(e) {
                    return {
                        x: 1,
                        y: e,
                        width: 13,
                        height: 3
                    }
                }
            }, {
                key: 'render',
                value: function() {
                    var e = this;
                    return u('div', {
                        style: this.anchorStyle(),
                        onMouseMove: this.onMouseMove
                    }, u('svg', {
                        width: '15px',
                        height: '20px',
                        viewBox: '0 0 15 20',
                        version: '1.1'
                    }, u('defs', null, u('rect', s({
                        id: 'path-1'
                    }, this.defsProps(1))), u('rect', s({
                        id: 'path-2'
                    }, this.defsProps(16))), u('polygon', {
                        id: 'path-3',
                        points: '2 3 13 3 13 7 10.25 10 13 13 13 17 2 17 2 13 4.75 10 2 7'
                    })), u('g', {
                        id: 'Page-1',
                        stroke: 'none',
                        "stroke-width": '1',
                        fill: 'none',
                        "fill-rule": 'evenodd'
                    }, u('g', {
                        id: 'hourglass'
                    }, u('g', {
                        id: 'top'
                    }, u('use', s({}, this.useRules(), {
                        xlinkKref: '#path-1'
                    })), u('rect', this.hourGlassProps(1.5))), u('g', {
                        id: 'bottom'
                    }, u('use', s({}, this.useRules(), {
                        xlinkHref: '#path-2'
                    })), u('rect', this.hourGlassProps(16.5))), u('g', {
                        id: 'glass'
                    }, u('use', s({}, this.useRules(), {
                        xlinkHref: '#path-3'
                    })), u('path', {
                        stroke: '#000000',
                        d: 'M2.5,3.5 L2.5,6.80550815 L5.42828419,10 L2.5,13.1944918 L2.5,16.5 L12.5,16.5 L12.5,13.1944918 L9.57171581,10 L12.5,6.80550815 L12.5,3.5 L2.5,3.5 Z'
                    })), u('rect', {
                        id: 'floater',
                        fill: '#000000',
                        x: '7',
                        y: this.state.floatingPixel,
                        width: '1',
                        height: '1'
                    }), [
                        [5, 6],
                        [7, 6],
                        [6, 7],
                        [8, 7],
                        [7, 11],
                        [6, 12],
                        [8, 12],
                        [7, 13],
                        [6, 14],
                        [8, 14],
                        [5, 13],
                        [9, 13],
                        [4, 14],
                        [10, 14],
                        [5, 6],
                        [9, 6]
                    ].map(function(t) {
                        return u('rect', e.sandProps(t[0], t[1]))
                    })))))
                }
            }]), t
        }(m);
    t['default'] = b;
}, function(e, t, n) {
    'use strict';
    n.r(t);
    var l = n(2),
        s = n(294),
        d = function() {
            function e(e, t) {
                for (var n, a = 0; a < t.length; a++) n = t[a], n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }();

    function i(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
    }

    function a(e, t) {
        if (!e) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return t && ('object' == typeof t || 'function' == typeof t) ? t : e
    }

    function r(e, t) {
        if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function, not ' + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    var p = function(e) {
        function t() {
            return i(this, t), a(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
        }
        return r(t, e), d(t, [{
            key: 'width',
            value: function() {
                return this.props.width
            }
        }, {
            key: 'left',
            value: function() {
                return this.props.left
            }
        }, {
            key: 'isPlaceholder',
            value: function() {
                return 'upper' === this.props.playbarMode
            }
        }, {
            key: 'isVisible',
            value: function() {
                return 'lower' === this.props.playbarMode
            }
        }]), t
    }(s['default']);
    p.shouldMount = function(e) {
        var t = e._opts.playbar;
        return !0 === t || null == t
    }, p.handle = 'lowerPlaybar', p.type = 'lower-playbar', l['default'].defineControl(p);
    t['default'] = p;
}, function(e, t, n) {
    'use strict';
    n.r(t);
    var l = n(2),
        s = n(87),
        d = n(295),
        p = n(116),
        u = Object.assign || function(e) {
            for (var t, n = 1; n < arguments.length; n++)
                for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e
        },
        c = function() {
            function e(e, t) {
                for (var n, a = 0; a < t.length; a++) n = t[a], n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }(),
        m = function e(t, n, i) {
            null === t && (t = Function.prototype);
            var a = Object.getOwnPropertyDescriptor(t, n);
            if (a === void 0) {
                var r = Object.getPrototypeOf(t);
                return null === r ? void 0 : e(r, n, i)
            }
            if ('value' in a) return a.value;
            var l = a.get;
            return void 0 === l ? void 0 : l.call(i)
        };

    function i(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
    }

    function a(e, t) {
        if (!e) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return t && ('object' == typeof t || 'function' == typeof t) ? t : e
    }

    function r(e, t) {
        if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function, not ' + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    var g = l['default'].lib('utilities/obj'),
        y = l['default'].lib('player/lib/assets'),
        f = l['default'].lib('player/lib/timeout-utils'),
        _ = f.doTimeout,
        b = l['default'].lib('player/lib/elem'),
        v = b.elemBind,
        A = b.formInputIsFocused,
        w = l['default'].lib('preact'),
        k = w.h,
        h = w.render,
        E = 33,
        C = 34,
        S = 32,
        P = function(e) {
            function t(e) {
                i(this, t);
                var n = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return T.call(n), n.showTime = !0, n
            }
            return r(t, e), c(t, [{
                key: 'mount',
                value: function(e) {
                    var n = this;
                    m(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), 'mount', this).call(this, e);
                    var i = this.video;
                    this.unbinds.push(i.on('play', this.renderPlaybar), i.on('pause', this.renderPlaybar), i.on('progress', this.renderIfNotPlaying), i.on('timechange', this.renderIfNotPlaying), i.on('end', this.renderPlaybar), i.on('widthchange', this.renderPlaybar), i.on('playercolorchange', this.renderPlaybar), i.on('seekcomplete', function() {
                        n._lastSeekedAt = Date.now(), n.renderPlaybar()
                    }), i.on('seeking', this.renderPlaybar), i.on('trimchange', function() {
                        n.renderNothing(), n.renderPlaybar()
                    }), v(document, 'keydown', this.onKeyDown), v(document, 'keyup', this.onKeyUp));
                    var a = function() {
                        var e = i.plugin.chapters;
                        n.unbinds.push(e.on('focuschange', n.renderPlaybar), e.on('changechapters', n.renderPlaybar))
                    };
                    i.plugin('chapters').then(a), i.on('plugininitialized', function(e) {
                        'chapters' === e && a()
                    }), this.renderPlaybar()
                }
            }, {
                key: 'onControlPropsUpdated',
                value: function(e) {
                    e.width !== this.props.width && this.renderPlaybar(), e.controlsAreVisible && !this.props.controlsAreVisible && this.renderPlaybar(), !e.controlsAreVisible && this.props.controlsAreVisible && this.renderPlaybar()
                }
            }, {
                key: 'chaptersPlugin',
                value: function() {
                    return this.video.plugin.chapters
                }
            }, {
                key: 'isPlaceholder',
                value: function() {
                    return !1
                }
            }, {
                key: 'isVisible',
                value: function() {
                    return !0
                }
            }, {
                key: 'shouldShowStoryboard',
                value: function() {
                    if (null != this._shouldShowStoryboard) return this._shouldShowStoryboard;
                    var e = !!this.storyboardAsset(),
                        t = !!this.video._mediaData.secondaryMediaData;
                    return this._shouldShowStoryboard = e && !t
                }
            }, {
                key: 'storyboardAsset',
                value: function() {
                    return y.one(this.video._mediaData.assets, {
                        type: 'storyboard',
                        status: y.READY,
                        metadata: function(e) {
                            return e && e.frame_count && e.frame_width && e.frame_height
                        }
                    })
                }
            }]), t
        }(s['default']),
        T = function() {
            var t = this;
            this.renderPlaybar = function() {
                var e = t.video,
                    n = e.plugin.chapters,
                    i = n ? n.getAllChapters() : [],
                    a = n ? n.getFocusedChapter() : null;
                t.playbarElem = h(k(d['default'], u({
                    getCurrentTime: t.getCurrentTime,
                    getCurrentBufferTime: t.getCurrentBufferTime,
                    duration: e.duration(),
                    isBeforePlay: 'beforeplay' === e.state(),
                    isVisible: t.props.controlsAreVisible,
                    isPlaying: 'playing' === e.state(),
                    isSeeking: e._impl.engine && e._impl.engine.isSeeking()
                }, t.props, {
                    onDragStart: t.onDragStart,
                    onDrag: t.onDrag,
                    onDragEnd: t.onDragEnd,
                    onBlur: t.onBlurPlaybar,
                    onFocus: t.onFocusPlaybar,
                    isPlaceholder: t.isPlaceholder(),
                    chapters: i,
                    focusedChapter: a,
                    onMouseEnterChapter: t.onMouseEnterChapter,
                    onMouseLeaveChapter: t.onMouseLeaveChapter,
                    mediaData: t.video._mediaData,
                    embedOptions: t.video._opts,
                    color: t.video.playerColor(),
                    showTime: t.showTime,
                    lastSeekedAt: t._lastSeekedAt || 0,
                    shouldShowStoryboard: t.shouldShowStoryboard(),
                    storyboardAsset: t.storyboardAsset()
                })), t.rootElem, t.playbarElem), t.reactMounts = [t.rootElem, t.playbarElem]
            }, this.renderNothing = function() {
                t.playbarElem = h(k('nothing', null), t.rootElem, t.playbarElem), t.reactMounts = [t.rootElem, t.playbarElem]
            }, this.renderIfNotPlaying = function() {
                'playing' !== t.video.state() && t.renderPlaybar()
            }, this.getCurrentTime = function() {
                return t.video ? t.video.time() : 0
            }, this.getCurrentBufferTime = function() {
                var e = t.video ? t.video.getBuffered() : [];
                return 0 === e.length ? 0 : e[e.length - 1].end
            }, this.onMouseEnterChapter = function(n, e) {
                t.chaptersPlugin().setFocusedChapter(e && e.id)
            }, this.onMouseLeaveChapter = function() {
                t.chaptersPlugin().setFocusedChapter(null)
            }, this.onDragStart = function(n, e) {
                t.video.requestControls('playbar-drag'), t.stateBeforeDrag = t.video.state(), t.onDrag(n, e), _(t.video.uuid + '.maybe-pause-on-scrub', function() {
                    Object(p['default'])() && t.video.pause()
                }, 300)
            }, this.onDrag = function(n, e) {
                t.video.time(e * t.video.duration())
            }, this.onDragEnd = function(n, e) {
                t.video.releaseControls('playbar-drag'), t.onDrag(n, e), ('beforeplay' === t.stateBeforeDrag || 'playing' === t.stateBeforeDrag) && t.video.play()
            }, this.onFocusPlaybar = function() {
                t.video.enterInputContext('playbar-focus')
            }, this.onBlurPlaybar = function() {
                t.video.exitInputContext('playbar-focus')
            }, this.onKeyDown = function(n) {
                if (t.isVisible() && !A()) {
                    var e = t.video,
                        i = e.getInputContext();
                    if ('playbar-focus' === i || 'player-mouseover' === i) {
                        var a = e.duration(),
                            r = n.keyCode;
                        if (r === S) return void n.preventDefault();
                        null == t.keyDownStartedAt && (t.keyDownStartedAt = Date.now());
                        var l = Date.now() - t.keyDownStartedAt,
                            s = 0;
                        s = 'playing' === e.state() ? n.shiftKey || 200 < l ? r === E || r === C ? 30 > a ? 5 : 60 > a ? 10 : 10 + a / 60 : 30 > a ? 2 : 60 > a ? 5 : 5 + a / 60 / 2 : r === E || r === C ? 60 > a ? 5 : 20 : 2 : n.shiftKey || 200 < l ? 1 : 1 / 24;
                        var d = 0;
                        r === 39 || r === E ? d = 1 : (r === 37 || r === C) && (d = -1), -1 == d ? e.time(e.time() - s) : 1 == d && e.time(e.time() + s)
                    }
                }
            }, this.onKeyUp = function(n) {
                if (t.isVisible() && !A()) {
                    t.keyDownStartedAt = null;
                    var e = t.video,
                        i = e.getInputContext();
                    'playbar-focus' === i && n.keyCode === S && ('playing' === e.state() ? e.pause() : e.play())
                }
            }
        };
    t['default'] = P;
}, function(e, t, n) {
    'use strict';
    n.r(t);
    var l = n(2),
        s = n(116),
        d = n(38),
        p = n.n(d),
        u = n(118),
        c = Object.assign || function(e) {
            for (var t, n = 1; n < arguments.length; n++)
                for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e
        },
        m = function() {
            function e(e, t) {
                var n, i = [],
                    a = !0,
                    r = !1;
                try {
                    for (var l, s = e[Symbol.iterator](); !(a = (l = s.next()).done) && (i.push(l.value), !(t && i.length === t)); a = !0);
                } catch (e) {
                    r = !0, n = e
                } finally {
                    try {
                        !a && s['return'] && s['return']()
                    } finally {
                        if (r) throw n
                    }
                }
                return i
            }
            return function(t, n) {
                if (Array.isArray(t)) return t;
                if (Symbol.iterator in Object(t)) return e(t, n);
                throw new TypeError('Invalid attempt to destructure non-iterable instance')
            }
        }(),
        g = function() {
            function e(e, t) {
                for (var n, a = 0; a < t.length; a++) n = t[a], n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }();

    function i(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
    }

    function a(e, t) {
        if (!e) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return t && ('object' == typeof t || 'function' == typeof t) ? t : e
    }

    function r(e, t) {
        if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function, not ' + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    var y, f, _, b = l['default'].lib('utilities/color'),
        v = l['default'].lib('utilities/core'),
        A = v.niceDuration,
        w = l['default'].lib('player/lib/elem'),
        k = w.elemBind,
        E = w.elemOffset,
        C = w.elemUnbind,
        S = w.elemWidth,
        P = l['default'].lib('preact'),
        T = P.h,
        h = P.render,
        I = P.Component,
        x = l['default'].lib('utilities/detect'),
        D = x.cachedDetect,
        B = D(),
        F = 'vulcanV2Video/ui_components',
        O = 'w-playbar',
        M = 36,
        L = function(e) {
            return Math.min(1, Math.max(0, e))
        },
        N = function(e, t) {
            for (var n in e)
                if (e.hasOwnProperty(n) && e[n] !== t[n]) return !0;
            return !1
        },
        W = function(e) {
            function t(e) {
                i(this, t);
                var n = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return n.onFocusIn = function() {
                    Object(s['default'])() || n.setState({
                        isKeyboardFocused: !0
                    })
                }, n.onFocusOut = function() {
                    n.state.isKeyboardFocused && n.setState({
                        isKeyboardFocused: !1
                    })
                }, n.onMouseEnter = function(t) {
                    n.touchEvents || (t.wistiaPlayerHandled = !0, n.setState({
                        isHovering: !0
                    }), n.cachePositionDetails(), n.props.shouldShowStoryboard && n.loadStoryboard())
                }, n.onMouseLeave = function(t) {
                    n.touchEvents || (t.wistiaPlayerHandled = !0, n.setState({
                        isHovering: !1
                    }))
                }, n.onMouseMove = function(t) {
                    if (!n.touchEvents) {
                        t.wistiaPlayerHandled = !0;
                        var e = n.getPercentFromMouse(t);
                        n.setState({
                            hoverPercent: e
                        })
                    }
                }, n.onMouseDown = function(t) {
                    if (!n.touchEvents && !t.ctrlKey) {
                        t.preventDefault(), n.wrapperElem.focus(), t.wistiaPlayerHandled = !0, n.cachePositionDetails();
                        var e = n.getPercentFromMouse(t);
                        n.handleWithProp('onDragStart', t, e), n.setState({
                            dragPercent: e,
                            dragMode: !0,
                            wasBeforePlayOnDrag: n.props.isBeforePlay
                        }), k(document, 'mousemove', n.onMouseMoveDragging), k(document, 'mouseup', n.onMouseUpDragging)
                    }
                }, n.onMouseMoveDragging = function(t) {
                    t.preventDefault(), t.wistiaPlayerHandled = !0;
                    var e = n.getPercentFromMouse(t);
                    n.handleWithProp('onDrag', t, e), n.setState({
                        dragPercent: e,
                        dragMode: !0
                    })
                }, n.onMouseUpDragging = function(t) {
                    t.wistiaPlayerHandled = !0;
                    var e = n.getPercentFromMouse(t);
                    n.setState({
                        dragPercent: e,
                        dragMode: !1
                    }), n.handleWithProp('onDragEnd', t, e), C(document, 'mousemove', n.onMouseMoveDragging), C(document, 'mouseup', n.onMouseUpDragging)
                }, n.onTouchStart = function(t) {
                    t.preventDefault(), t.wistiaPlayerHandled = !0, n.cachePositionDetails();
                    var e = n.getPercentFromMouse(t);
                    n.handleWithProp('onDragStart', t, e), n.setState({
                        dragPercent: e,
                        dragMode: !0
                    }), n.touchEvents.on('touchmove', n.onTouchMoveDragging), n.touchEvents.on('touchend', n.onTouchEndDragging)
                }, n.onTouchMoveDragging = function(t) {
                    t.preventDefault(), t.wistiaPlayerHandled = !0;
                    var e = n.getPercentFromMouse(t);
                    n.handleWithProp('onDrag', t, e), n.setState({
                        dragPercent: e,
                        dragMode: !0
                    })
                }, n.onTouchEndDragging = function(t) {
                    t.wistiaPlayerHandled = !0;
                    var e = n.getPercentFromMouse(t);
                    n.setState({
                        dragPercent: e,
                        dragMode: !1
                    }), n.handleWithProp('onDragEnd', t, e), n.touchEvents.off('touchmove', n.onTouchMoveDragging), n.touchEvents.off('touchend', n.onTouchEndDragging)
                }, n.startAnimLoopIfPlaying = function() {
                    (n.props.isPlaying || !n.bufferedTween.atEnd()) && n.props.isVisible && requestAnimationFrame(n.continuouslyUpdatePlaybar)
                }, n.stopAnimLoop = function() {
                    cancelAnimationFrame(n.animReq)
                }, n.continuouslyUpdatePlaybar = function() {
                    300 < Date.now() - n.lastRenderedAt ? n.setState({
                        currentTime: n.props.getCurrentTime(),
                        currentBufferTime: n.props.getCurrentBufferTime(),
                        timeWidth: n._timeWidth
                    }, n.startAnimLoopIfPlaying) : (n.drawPlaybar(), n.startAnimLoopIfPlaying())
                }, n.loadStoryboard = function() {
                    return Wistia.asyncRequire(F + '/Storyboard.js').then(function(e) {
                        _ = e, n.setState({
                            loadedStoryboard: !0
                        })
                    })
                }, n.loadChapters = function() {
                    return Wistia.asyncRequire([F + '/ChapterMarkers.js', F + '/ChapterTitles.js']).then(function(e) {
                        var t = m(e, 2),
                            i = t[0],
                            a = t[1];
                        y = i, f = a, n.setState({
                            loadedChapters: !0
                        })
                    })
                }, n.state = {
                    hasPlayed: !1,
                    isHovering: !1,
                    dragMode: !1,
                    dragPercent: 0,
                    hoverPercent: 0,
                    currentTime: e.getCurrentTime(),
                    currentBufferTime: e.getCurrentBufferTime(),
                    isKeyboardFocused: !1,
                    loadedStoryboard: !1,
                    loadedChapters: !1,
                    timeWidth: null,
                    wasBeforePlayOnDrag: !1
                }, n.setColorsFromPlayerColor(e.color), n.bufferedTween = new p.a({
                    seedRange: 0,
                    outputStart: 0,
                    outputEnd: 0
                }), e.chapters && 0 < e.chapters.length && n.loadChapters(), n
            }
            return r(t, e), g(t, [{
                key: 'componentWillReceiveProps',
                value: function(e) {
                    var t = this.props;
                    t.color !== e.color && this.setColorsFromPlayerColor(e.color), this.setState({
                        dragMode: !1,
                        currentTime: t.getCurrentTime(),
                        currentBufferTime: t.getCurrentBufferTime()
                    }), e.chapters && 0 < e.chapters.length && this.loadChapters()
                }
            }, {
                key: 'shouldComponentUpdate',
                value: function(e, t) {
                    return N(this.props, e) || N(this.state, t)
                }
            }, {
                key: 'render',
                value: function() {
                    var t = this;
                    return this.oldWrapperElem = this.wrapperElem, this.props.isPlaceholder ? T('div', {
                        class: O + '-placeholder w-css-reset w-css-reset-tree',
                        role: 'slider',
                        "aria-label": 'Playbar',
                        "aria-orientation": 'horizontal',
                        "aria-valuenow": this.ariaValueNow(),
                        "aria-valuemin": 0,
                        "aria-valuemax": this.props.duration,
                        "aria-valuetext": this.ariaValueText(),
                        tabindex: -1,
                        style: this.placeholderStyle()
                    }, this.renderTime()) : T('div', {
                        class: O + '-wrapper w-css-reset w-css-reset-tree',
                        role: 'slider',
                        "aria-label": 'Playbar',
                        "aria-orientation": 'horizontal',
                        "aria-valuenow": this.ariaValueNow(),
                        "aria-valuemin": 0,
                        "aria-valuemax": this.props.duration,
                        "aria-valuetext": this.ariaValueText(),
                        tabindex: 0,
                        style: this.wrapperStyle(),
                        ref: function(n) {
                            return t.wrapperElem = n
                        },
                        onBlur: this.props.onBlur,
                        onFocus: this.props.onFocus,
                        onFocusIn: this.onFocusIn,
                        onFocusOut: this.onFocusOut,
                        onMouseEnter: this.onMouseEnter,
                        onMouseLeave: this.onMouseLeave,
                        onMouseMove: this.onMouseMove,
                        onMouseDown: this.onMouseDown,
                        onMouseUp: this.onMouseUp
                    }, T('div', {
                        style: this.clippedStyle()
                    }, T('canvas', {
                        width: this.canvasWidth(),
                        height: this.canvasHeight(),
                        ref: function(n) {
                            t.canvas = n
                        },
                        style: this.canvasStyle()
                    })), 'undefined' == typeof y ? null : T(y, c({}, this.props, {
                        timeLeft: this.timeLeft(),
                        timeRight: this.timeRight()
                    })), this.props.shouldShowStoryboard && 'undefined' != typeof _ ? T(_, c({}, this.props, {
                        isHovering: this.state.isHovering,
                        hoverPercent: this.state.hoverPercent
                    })) : null, 'undefined' == typeof f ? null : T(f, this.props), T('div', {
                        class: O + '__hoverMarker',
                        style: this.hoverMarkerStyle()
                    }), T('div', {
                        class: O + '__focus-border',
                        style: this.focusBorderStyle()
                    }))
                }
            }, {
                key: 'canvasWidth',
                value: function() {
                    return this.props.width * (window.devicePixelRatio || 1)
                }
            }, {
                key: 'canvasHeight',
                value: function() {
                    return this.props.height * (window.devicePixelRatio || 1)
                }
            }, {
                key: 'renderTime',
                value: function() {
                    var t = this;
                    return T('div', {
                        class: O + '__time',
                        style: this.timeStyle(),
                        ref: function(n) {
                            return t.timeElem = n
                        }
                    }, this.timeText())
                }
            }, {
                key: 'componentDidMount',
                value: function() {
                    this.lastRenderedAt = Date.now(), this.drawPlaybar(), B.touchScreen && this.wrapperElem && (this.touchEvents = new u['default'](this.wrapperElem), this.touchEvents.on('touchstart', this.onTouchStart));
                    var e = this.props;
                    e.isPlaying && this.setState({
                        hasPlayed: !0
                    }), e.isPlaying && this.startAnimLoopIfPlaying()
                }
            }, {
                key: 'componentDidUpdate',
                value: function(e, t) {
                    var n = this.props;
                    this.lastRenderedAt = Date.now(), this.drawPlaybar(), B.touchScreen && this.wrapperElem && this.oldWrapperElem !== this.wrapperElem && (this.touchEvents && this.touchEvents.destroy(), this.touchEvents = new u['default'](this.wrapperElem), this.touchEvents.on('touchstart', this.onTouchStart)), n.isPlaying && !this.state.hasPlayed && this.setState({
                        hasPlayed: !0
                    });
                    var i = n.isPlaying && !e.isPlaying,
                        a = t.currentBufferTime != this.state.currentBufferTime,
                        r = n.isVisible && !e.isVisible;
                    (i || r || a) && this.startAnimLoopIfPlaying();
                    var l = !n.isVisible && e.isVisible;
                    l && this.stopAnimLoop()
                }
            }, {
                key: 'drawPlaybar',
                value: function() {
                    var e = this;
                    if (this.canvas) {
                        var t = this.props,
                            n = this._hasDrawn;
                        this._hasDrawn = !0, this._prevTime = this._currentTime, this._prevBufferTime = this._currentBufferTime, this._currentTime = t.getCurrentTime(), this._currentBufferTime = t.getCurrentBufferTime();
                        var i = this.canvasWidth(),
                            a = this.canvasHeight(),
                            r = this.canvas.getContext('2d');
                        r.clearRect(0, 0, i, a);
                        var l = 0,
                            s = i * this.playedPercent();
                        r.fillStyle = this.playedColor.toRgba(), r.fillRect(l, 0, s, a), l += s;
                        var d = 100 > Date.now() - t.lastSeekedAt;
                        (this._prevTime !== this._currentTime || this._prevBufferTime != this._currentBufferTime) && (this.bufferedTween = new p.a({
                            seedRange: 400,
                            outputStart: d ? this.bufferedAheadPercent() : this.bufferedTween.value(),
                            outputEnd: this.bufferedAheadPercent()
                        }));
                        var u = i * this.bufferedTween.value();
                        if (r.fillStyle = this.bufferedColor.toRgba(), r.fillRect(l, 0, u, a), l += u, r.fillStyle = this.emptyColor.toRgba(), r.fillRect(l, 0, i, a), !1 !== t.showTime) {
                            var c = this._timeLength,
                                m = this.timeText();
                            this._timeLength = n ? m.length : 0;
                            var g = 14 * t.scale * window.devicePixelRatio;
                            r.font = g + 'px WistiaPlayerOverpassNumbers, Helvetica, Sans-Serif', n && this._timeLength !== c && (this._timeWidth = r.measureText(m.replace(/\d/g, '5')).width);
                            var h, y = this.timePadding() * (window.devicePixelRatio || 1);
                            this._timeWidth + 2 * y < s ? (r.textAlign = 'right', h = s - y) : (r.textAlign = 'left', h = y), r.fillStyle = '#fff', r.textBaseline = 'middle', r.fillText(n ? m : '.', h, a / 2), n || setTimeout(function() {
                                e.drawPlaybar(), e.setState({
                                    timeWidth: e._timeWidth
                                })
                            }, 0)
                        }
                    }
                }
            }, {
                key: 'componentWillUnmount',
                value: function() {
                    C(document, 'mousemove', this.onMouseMoveDragging), C(document, 'mouseup', this.onMouseUpDragging), this.touchEvents && (this.touchEvents.destroy(), this.touchEvents = null)
                }
            }, {
                key: 'placeholderStyle',
                value: function() {
                    var e = new b(this.props.color).alpha(.95);
                    return {
                        background: e.toRgba(),
                        cursor: 'default',
                        height: '100%',
                        outline: 'none',
                        position: 'relative',
                        width: '100%'
                    }
                }
            }, {
                key: 'timeBounds',
                value: function() {
                    var e, t;
                    return this.timeCanFitInPlayedRect() ? (t = this.playheadLeftPosition() - this.timePadding(), e = t - this.timeWidth() - this.timePadding()) : (e = this.timePadding(), t = e + this.timeWidth()), {
                        left: e,
                        right: t
                    }
                }
            }, {
                key: 'timeLeft',
                value: function() {
                    return this.timeBounds().left
                }
            }, {
                key: 'timeRight',
                value: function() {
                    return this.timeBounds().right
                }
            }, {
                key: 'wrapperStyle',
                value: function() {
                    return {
                        cursor: 'pointer',
                        height: '100%',
                        outline: 'none',
                        position: 'relative'
                    }
                }
            }, {
                key: 'clippedStyle',
                value: function() {
                    return {
                        display: 'block',
                        height: '100%',
                        overflow: 'hidden',
                        pointerEvents: 'none',
                        position: 'relative',
                        width: this.props.width
                    }
                }
            }, {
                key: 'canvasStyle',
                value: function() {
                    return {
                        height: this.props.height,
                        left: 0,
                        pointerEvents: 'none',
                        position: 'absolute',
                        top: 0,
                        width: this.props.width
                    }
                }
            }, {
                key: 'timeStyle',
                value: function() {
                    var e = this.props.scale,
                        t = !this.props.isPlaceholder && this.timeCanFitInPlayedRect();
                    return {
                        color: 'white',
                        display: !1 === this.props.showTime ? 'none' : 'block',
                        fontFamily: 'WistiaPlayerOverpassNumbers, Helvetica, Sans-Serif',
                        fontSize: 14 * e + 'px',
                        marginLeft: t ? -10 * e + 'px' : 10 * e + 'px',
                        pointerEvents: 'none',
                        position: 'absolute',
                        textShadow: '0 0 6px rgba(0, 0, 0, 0.2)',
                        top: '50%',
                        transform: 'translateY(-50%) translateX(' + (t ? '-100%' : 0) + ')',
                        whiteSpace: 'nowrap'
                    }
                }
            }, {
                key: 'hoverMarkerStyle',
                value: function() {
                    return {
                        background: 'linear-gradient(to right, rgba(255,255,255,0) 0%,rgba(255,255,255,.12) 100%)',
                        display: this.state.isHovering ? ' block' : 'none',
                        height: '100%',
                        left: this.state.hoverPercent * this.props.width - M + 'px',
                        pointerEvents: 'none',
                        position: 'absolute',
                        top: 0,
                        width: M
                    }
                }
            }, {
                key: 'focusBorderStyle',
                value: function() {
                    return {
                        border: '2px solid #fff',
                        display: this.state.isKeyboardFocused ? 'block' : 'none',
                        height: '100%',
                        left: 0,
                        pointerEvents: 'none',
                        position: 'absolute',
                        top: 0,
                        width: '100%'
                    }
                }
            }, {
                key: 'playedPercent',
                value: function() {
                    var e = this.state;
                    return e.dragMode || e.wasBeforePlayOnDrag && (this.props.isSeeking || !e.hasPlayed) ? e.dragPercent : L(this.props.getCurrentTime() / this.props.duration)
                }
            }, {
                key: 'bufferedAheadPercent',
                value: function() {
                    var e = this.state;
                    if (this.props.isBeforePlay) return 0;
                    if (e.dragMode) {
                        var t = e.currentBufferTime / this.props.duration;
                        return L(t - e.dragPercent)
                    }
                    return L((this.props.getCurrentBufferTime() - this.props.getCurrentTime()) / this.props.duration)
                }
            }, {
                key: 'emptyPercent',
                value: function() {
                    var e = L(this.playedPercent() + this.bufferedAheadPercent());
                    return 1 - e
                }
            }, {
                key: 'timeText',
                value: function() {
                    var e = this.state,
                        t = this.props;
                    return e.dragMode || e.wasBeforePlayOnDrag && (this.props.isSeeking || !e.hasPlayed) ? A(e.dragPercent * t.duration) : e.hasPlayed || 1 <= this.props.getCurrentTime() ? A(t.getCurrentTime()) : A(t.duration)
                }
            }, {
                key: 'ariaValueNow',
                value: function() {
                    return this.state.dragMode ? this.state.dragPercent * this.props.duration : this.props.getCurrentTime()
                }
            }, {
                key: 'ariaValueText',
                value: function() {
                    return A(this.ariaValueNow())
                }
            }, {
                key: 'cachePositionDetails',
                value: function() {
                    this.offset = E(this.wrapperElem)
                }
            }, {
                key: 'getPercentFromMouse',
                value: function(t) {
                    if (!this.offset) return 0;
                    var e = t.pageX ? t.pageX : t.changedTouches && t.changedTouches[0] && t.changedTouches[0].pageX,
                        n = e - this.offset.left;
                    return Math.max(0, Math.min(1, n / this.props.width))
                }
            }, {
                key: 'handleWithProp',
                value: function(t, n) {
                    var e = this.props[t];
                    if (e) {
                        for (var i = arguments.length, a = Array(2 < i ? i - 2 : 0), r = 2; r < i; r++) a[r - 2] = arguments[r];
                        e.apply(void 0, [n].concat(a))
                    }
                }
            }, {
                key: 'timeWidth',
                value: function() {
                    return this._timeWidth / (window.devicePixelRatio || 1)
                }
            }, {
                key: 'playheadLeftPosition',
                value: function() {
                    return this.props.width * this.playedPercent()
                }
            }, {
                key: 'timePadding',
                value: function() {
                    return 8 * this.props.scale
                }
            }, {
                key: 'timeCanFitInPlayedRect',
                value: function() {
                    return this.timeWidth() + 2 * this.timePadding() < this.playheadLeftPosition()
                }
            }, {
                key: 'setColorsFromPlayerColor',
                value: function(e) {
                    this.playedColor = new b(e).darken(30).alpha(.7), this.bufferedColor = new b(e).lighten(75).alpha(.6), this.emptyColor = new b(e).lighten(40).alpha(.3)
                }
            }]), t
        }(I);
    t['default'] = W;
}, function(e, t, n) {
    'use strict';
    n.r(t);
    var l = n(2),
        s = n(87),
        d = n(282),
        p = function() {
            function e(e, t) {
                for (var n, a = 0; a < t.length; a++) n = t[a], n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }();

    function i(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
    }

    function a(e, t) {
        if (!e) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return t && ('object' == typeof t || 'function' == typeof t) ? t : e
    }

    function r(e, t) {
        if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function, not ' + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    var u = l['default'].lib('player/lib/elem'),
        c = u.getLastActiveEventAt,
        m = l['default'].lib('preact'),
        g = m.h,
        h = m.render,
        y = l['default'].lib('player/lib/fit-control'),
        f = y.controlMultiplierBasedOnVideo,
        _ = l['default'].lib('utilities/detect'),
        b = _.cachedDetect,
        v = b(),
        A = function(e) {
            function t(e) {
                i(this, t);
                var n = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return n.showIconAndFade = function() {
                    return n.playedOnce ? void(n.video.isControlEnabled('centeredPlayPauseToggler') && !n.props.chromeless || n.video._inNativeMode() || (n.isPlaying = 'playing' === n.video.state(), n.renderAndFade())) : void(n.playedOnce = !0)
                }, n.isOpaque = !1, n.unbinds.push(e.on('play', n.showIconAndFade), e.on('pause', n.showIconAndFade)), n
            }
            return r(t, e), p(t, [{
                key: 'mount',
                value: function(e) {
                    this.rootElem = e
                }
            }, {
                key: 'onControlPropsUpdated',
                value: function(e) {
                    e.videoWidth !== this.props.videoWidth && this.renderButton()
                }
            }, {
                key: 'renderAndFade',
                value: function() {
                    var e = this,
                        t = this.video.lastPlayInfo();
                    if (!(this.isPlaying && 'user-event' !== t.source)) {
                        var n = this.video.lastPauseInfo();
                        (this.isPlaying || 'user-event' === n.source) && (this.isOpaque = !0, this.renderButton(), clearTimeout(this.fadeTimeout), this.fadeTimeout = setTimeout(function() {
                            e.isOpaque = !1, e.renderButton()
                        }, 20))
                    }
                }
            }, {
                key: 'renderButton',
                value: function() {
                    this.iconElem = h(g('div', {
                        class: 'w-play-pause-notifier',
                        style: this.rootStyle()
                    }, g(d['default'], {
                        isPlaying: !this.isPlaying,
                        svgStyle: this.svgStyle(),
                        noPadding: !0
                    })), this.rootElem, this.iconElem), this.reactMounts = [this.rootElem, this.iconElem]
                }
            }, {
                key: 'rootStyle',
                value: function() {
                    var e = this.scale(),
                        t = this.isPlaying,
                        n = t ? 72 : 80,
                        i = t ? 60 : 50;
                    return {
                        height: n * e + 'px',
                        left: '50%',
                        pointerEvents: 'none',
                        position: 'absolute',
                        opacity: this.isOpaque ? .5 : 0,
                        top: '50%',
                        transform: 'translate(-' + (t ? 33 : 50) + '%, -50%) scale(' + (this.isOpaque ? .7 : 1.5) + ')',
                        transition: this.isOpaque ? '' : 'opacity .6s, transform .6s',
                        width: i * e + 'px'
                    }
                }
            }, {
                key: 'svgStyle',
                value: function() {
                    return {
                        filter: 'drop-shadow(0px 0px 3px rgba(0,0,0,0.5))'
                    }
                }
            }, {
                key: 'scale',
                value: function() {
                    return Math.min(1.3, Math.max(0.3, f(this.video, [640, 960])))
                }
            }]), t
        }(s['default']);
    A.shouldMount = function(e) {
        return !1 !== e._opts.playPauseNotifier
    }, A.handle = 'playPauseNotifier', A.type = 'above-control-bar', l['default'].defineControl(A);
    t['default'] = A;
}, function(e, t, n) {
    'use strict';
    n.r(t);
    var l = n(2),
        s = n(298),
        d = n(87),
        p = function() {
            function e(e, t) {
                var n, i = [],
                    a = !0,
                    r = !1;
                try {
                    for (var l, s = e[Symbol.iterator](); !(a = (l = s.next()).done) && (i.push(l.value), !(t && i.length === t)); a = !0);
                } catch (e) {
                    r = !0, n = e
                } finally {
                    try {
                        !a && s['return'] && s['return']()
                    } finally {
                        if (r) throw n
                    }
                }
                return i
            }
            return function(t, n) {
                if (Array.isArray(t)) return t;
                if (Symbol.iterator in Object(t)) return e(t, n);
                throw new TypeError('Invalid attempt to destructure non-iterable instance')
            }
        }(),
        u = function() {
            function e(e, t) {
                for (var n, a = 0; a < t.length; a++) n = t[a], n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }();

    function i(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
    }

    function a(e, t) {
        if (!e) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return t && ('object' == typeof t || 'function' == typeof t) ? t : e
    }

    function r(e, t) {
        if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function, not ' + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    var c = l['default'].lib('preact'),
        m = c.h,
        g = c.render,
        h = l['default'].lib('player/translations'),
        y = h.getTranslation,
        f = l['default'].lib('promiscuous'),
        _ = function(e) {
            function t(e) {
                i(this, t);
                var n = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return n.loadMenuCode = function() {
                    return l['default'].asyncRequire(['overpassFontFace.js', 'vulcanV2Video/controls/SettingsControl/dialog.js']).then(function(e) {
                        var t = p(e, 2),
                            i = t[0],
                            a = t[1];
                        n.renderMenuImpl || (n.renderMenuImpl = a.renderMenu.bind(n), n.onSelect = a.onSelect.bind(n))
                    })
                }, n.onMouseEnterButton = function() {
                    n.loadMenuCode()
                }, n.unbinds.push(e.on('playbackratechange', function() {
                    n.menuElem && n.renderMenu()
                }), e.on('qualitychange', function() {
                    n.menuElem && n.renderMenu()
                }), e.on('playerlanguagechange', function() {
                    n.menuElem && n.renderMenu()
                })), e.hasData(function() {
                    if (null == n._isQualityEnabled) {
                        var t = e._opts.qualityControl;
                        n._isQualityEnabled = !0 === t || null == t
                    }
                    if (null == n._isPlaybackRateEnabled) {
                        var i = e._opts.playbackRateControl;
                        n._isPlaybackRateEnabled = !0 === i || null == i
                    }
                }), n
            }
            return r(t, e), u(t, [{
                key: 't',
                value: function(e) {
                    return y(this.props.playerLanguage.code, 'SETTINGS_' + e)
                }
            }, {
                key: 'mountButton',
                value: function(e) {
                    this.buttonRoot = e, this.setButtonLabel('Settings'), this.renderButton()
                }
            }, {
                key: 'mountDialog',
                value: function(e) {
                    return this.dialogRoot = e, this.renderMenu()
                }
            }, {
                key: 'renderButton',
                value: function() {
                    this.buttonElem = g(m(s['default'], {
                        onMouseEnter: this.onMouseEnterButton
                    }), this.buttonRoot, this.buttonElem), this.reactMounts.button = [this.buttonRoot, this.buttonElem]
                }
            }, {
                key: 'renderMenu',
                value: function() {
                    var e = this;
                    if (this.dialog.isOpen()) {
                        var t = this.loadMenuCode().then(function() {
                            e.renderMenuImpl()
                        });
                        return this.loading(new f(function(e) {
                            t.then(e)
                        })), t
                    }
                }
            }, {
                key: 'onControlPropsUpdated',
                value: function() {
                    this.dialog && this.dialog.isOpen() && this.renderMenu()
                }
            }, {
                key: 'setQualityEnabled',
                value: function(e) {
                    var t = this;
                    return this._isQualityEnabled = e, this.loadMenuCode().then(function() {
                        t.renderMenuImpl()
                    })
                }
            }, {
                key: 'setPlaybackRateEnabled',
                value: function(e) {
                    var t = this;
                    return this._isPlaybackRateEnabled = e, this.loadMenuCode().then(function() {
                        t.renderMenuImpl()
                    })
                }
            }]), t
        }(d['default']);
    _.shouldMount = function(e) {
        var t = e._opts,
            n = t.settingsControl,
            i = t.qualityControl,
            a = t.playbackRateControl;
        return !1 !== n && (!0 === i || null == i || !0 === a || null == a)
    }, _.handle = 'settingsButton', _.type = 'control-bar-right', _.sortValue = 200, _.isVideoChrome = !0, l['default'].defineControl(_), l['default'].SettingsControl = _;
    t['default'] = _;
}, function(e, t, n) {
    'use strict';
    n.r(t);
    var l = n(2),
        s = n(89),
        d = Object.assign || function(e) {
            for (var t, n = 1; n < arguments.length; n++)
                for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e
        },
        p = function() {
            function e(e, t) {
                for (var n, a = 0; a < t.length; a++) n = t[a], n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }();

    function i(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
    }

    function a(e, t) {
        if (!e) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return t && ('object' == typeof t || 'function' == typeof t) ? t : e
    }

    function r(e, t) {
        if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function, not ' + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    var u = l['default'].lib('preact'),
        c = u.h,
        m = u.render,
        g = u.Component,
        h = function(e) {
            function t() {
                return i(this, t), a(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            }
            return r(t, e), p(t, [{
                key: 'shouldComponentUpdate',
                value: function() {
                    return !1
                }
            }, {
                key: 'render',
                value: function() {
                    return c('svg', d({}, Object(s.standardSvgAttrs)(40, 34), {
                        onMouseEnter: this.props.onMouseEnter
                    }), c('g', null, c('g', null, c('path', {
                        d: 'M28.3,16.4h-1.9c-0.4,0-0.8-0.3-0.9-0.7l-0.4-1.1c-0.2-0.3-0.1-0.8,0.2-1.1l1.3-1.3c0.3-0.3,0.3-0.7,0-1l-0.4-0.4c-0.3-0.3-0.7-0.3-1,0l-1.3,1.3c-0.3,0.3-0.8,0.3-1.1,0.1l-1.1-0.5c-0.4-0.1-0.7-0.5-0.7-0.9V9.1c0-0.4-0.3-0.7-0.7-0.7h-0.6c-0.4,0-0.7,0.3-0.7,0.7v1.7c0,0.4-0.3,0.8-0.7,0.9l-1.2,0.5c-0.3,0.2-0.8,0.1-1.1-0.2l-1.2-1.2c-0.3-0.3-0.7-0.3-1,0l-0.4,0.4c-0.3,0.3-0.3,0.7,0,1l1.2,1.2c0.3,0.3,0.3,0.8,0.1,1.1l-0.5,1.2c-0.1,0.4-0.5,0.7-0.9,0.7h-1.6c-0.4,0-0.7,0.3-0.7,0.7v0.6c0,0.4,0.3,0.7,0.7,0.7h1.6c0.4,0,0.8,0.3,0.9,0.7l0.5,1.2c0.2,0.3,0.1,0.8-0.1,1.1l-1.2,1.2c-0.3,0.3-0.3,0.7,0,1l0.4,0.4c0.3,0.3,0.7,0.3,1,0l1.2-1.2c0.3-0.3,0.8-0.3,1.1-0.2l1.2,0.5c0.4,0.1,0.7,0.5,0.7,0.9v1.7c0,0.4,0.3,0.7,0.7,0.7h0.6c0.4,0,0.7-0.3,0.7-0.7V24c0-0.4,0.3-0.8,0.7-0.9l1.1-0.5c0.3-0.2,0.8-0.1,1.1,0.1l1.3,1.3c0.3,0.3,0.7,0.3,1,0l0.4-0.4c0.3-0.3,0.3-0.7,0-1l-1.3-1.3C25,21,25,20.5,25.1,20.2l0.4-1.1c0.1-0.4,0.5-0.7,0.9-0.7h1.9c0.4,0,0.7-0.3,0.7-0.7v-0.6C29,16.7,28.7,16.4,28.3,16.4z M23.8,17.5c0,2.2-1.8,3.9-3.9,3.9c-2.2,0-3.9-1.8-3.9-3.9s1.7-3.9,3.9-3.9C22.1,13.6,23.8,15.3,23.8,17.5z'
                    }))))
                }
            }]), t
        }(g);
    t['default'] = h;
}, function(e, t, n) {
    'use strict';
    n.r(t);
    var l = n(2),
        s = n(87),
        d = n(300),
        p = function() {
            function e(e, t) {
                for (var n, a = 0; a < t.length; a++) n = t[a], n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }();

    function i(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
    }

    function a(e, t) {
        if (!e) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return t && ('object' == typeof t || 'function' == typeof t) ? t : e
    }

    function r(e, t) {
        if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function, not ' + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    var u = l['default'].lib('preact'),
        c = u.h,
        m = u.render,
        g = l['default'].lib('utilities/detect'),
        h = g.cachedDetect,
        y = l['default'].lib('player/translations'),
        f = y.getTranslation,
        _ = h(),
        b = function(e) {
            function t(e) {
                i(this, t);
                var n = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return n._isVisible = !1, n
            }
            return r(t, e), p(t, [{
                key: 'flash',
                value: function(e) {
                    var t = this,
                        n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 2e3;
                    this._isVisible = !0, this.renderMenu(this.t(e)), setTimeout(function() {
                        t.hide()
                    }, n)
                }
            }, {
                key: 't',
                value: function(e) {
                    return f(this.props.playerLanguage.code, 'STATUS_BAR_' + e)
                }
            }, {
                key: 'hide',
                value: function() {
                    this._isVisible = !1, this.menuElem = m(c('nothing', null), this.rootElem, this.menuElem)
                }
            }, {
                key: 'renderMenu',
                value: function(e) {
                    this._isVisible && (this.menuElem = m(c(d['default'], {
                        message: e
                    }), this.rootElem, this.menuElem), this.reactMounts = [this.rootElem, this.menuElem])
                }
            }]), t
        }(s['default']);
    b.handle = 'statusBar', b.type = 'background', l['default'].defineControl(b);
    t['default'] = b;
}, function(e, t, n) {
    'use strict';
    n.r(t);
    var l = n(2),
        s = function() {
            function e(e, t) {
                for (var n, a = 0; a < t.length; a++) n = t[a], n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }();

    function i(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
    }

    function a(e, t) {
        if (!e) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return t && ('object' == typeof t || 'function' == typeof t) ? t : e
    }

    function r(e, t) {
        if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function, not ' + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    var d = l['default'].lib('preact'),
        p = d.h,
        u = d.render,
        c = d.Component,
        m = l['default'].lib('utilities/detect'),
        g = m.cachedDetect,
        h = g(),
        y = function(e) {
            function t() {
                return i(this, t), a(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            }
            return r(t, e), s(t, [{
                key: 'styles',
                value: function() {
                    return {
                        background: 'rgba(0,0,0,.3)',
                        boxShadow: 'none',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        fontSize: b(this),
                        lineHeight: _(this),
                        padding: '0 ' + 10 * this.props.scale + 'px',
                        width: '100%',
                        height: '30px',
                        color: '#fff',
                        position: 'absolute',
                        justifyContent: 'center'
                    }
                }
            }, {
                key: 'render',
                value: function() {
                    return p('div', {
                        style: this.styles()
                    }, this.props.message)
                }
            }]), t
        }(c),
        f = function(e) {
            return 34 * e.props.scale
        },
        _ = function(e) {
            return f(e) + 'px'
        },
        b = function(e) {
            return 14 * e.props.scale + 'px'
        };
    t['default'] = y;
}, function(e, t, n) {
    'use strict';
    n.r(t);
    var l = n(2),
        s = n(87),
        d = n(282),
        p = function() {
            function e(e, t) {
                for (var n, a = 0; a < t.length; a++) n = t[a], n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }();

    function i(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
    }

    function a(e, t) {
        if (!e) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return t && ('object' == typeof t || 'function' == typeof t) ? t : e
    }

    function r(e, t) {
        if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function, not ' + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    var u = l['default'].lib('preact'),
        c = u.h,
        m = u.render,
        g = l['default'].lib('player/translations'),
        h = g.getTranslation,
        y = l['default'].lib('utilities/detect'),
        f = y.cachedDetect,
        _ = f(),
        b = function(e) {
            function t(e) {
                i(this, t);
                var n = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return v.call(n), n.unbinds.push(e.on('play', n.renderButton), e.on('pause', n.renderButton), e.on('end', n.renderButton)), n
            }
            return r(t, e), p(t, [{
                key: 'mountButton',
                value: function(e) {
                    this.buttonRoot = e, this.renderButton()
                }
            }, {
                key: 't',
                value: function(e) {
                    return h(this.props.playerLanguage, 'PLAY_BUTTON_' + e)
                }
            }]), t
        }(s['default']),
        v = function() {
            var e = this;
            this.renderButton = function() {
                if (e.buttonRoot && ('playing' === e.video.state() ? e.setButtonLabel(e.t('TITLE_WHEN_PLAYING')) : e.setButtonLabel(e.t('TITLE_WHEN_NOT_PLAYING')), e.buttonElem = m(c(d['default'], {
                        isPlaying: 'playing' === e.video.state()
                    }), e.buttonRoot, e.buttonElem), e.reactMounts = [e.rootElem, e.thumbnailElem], _.trident)) {
                    var t = e.buttonRoot.parentNode;
                    t.style.display = 'none', setTimeout(function() {
                        t.style.display = ''
                    }, 1)
                }
            }, this.onClickButton = function() {
                var t = e.video;
                'playing' === t.state() ? t.pause() : t.play()
            }
        };
    b.shouldMount = function(e) {
        var t = e._opts.smallPlayButton;
        return !0 === t || null == t
    }, b.handle = 'smallPlayButton', b.type = 'control-bar-left', b.width = 50, b.sortValue = 100;
    l['default'].defineControl(b);
    t['default'] = b;
}, function(e, t, n) {
    'use strict';
    n.r(t);
    var l = n(2),
        s = n(87),
        d = n(303),
        p = Object.assign || function(e) {
            for (var t, n = 1; n < arguments.length; n++)
                for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e
        },
        u = function() {
            function e(e, t) {
                for (var n, a = 0; a < t.length; a++) n = t[a], n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }();

    function i(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
    }

    function a(e, t) {
        if (!e) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return t && ('object' == typeof t || 'function' == typeof t) ? t : e
    }

    function r(e, t) {
        if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function, not ' + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    var c = l['default'].lib('preact'),
        m = c.h,
        g = c.render,
        h = l['default'].lib('promiscuous'),
        y = l['default'].lib('utilities/detect'),
        f = y.cachedDetect,
        _ = f(),
        b = function(e) {
            function t(e) {
                i(this, t);
                var n = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return v.call(n), n.unbinds.push(e.on('play', function() {
                    n._hasPlayed = !0, n.renderThumbnail()
                }), e.on('playrejected', function() {
                    n.renderThumbnail()
                }), e.on('playpending', function() {
                    n.renderThumbnail()
                }), e.on('up', n.renderThumbnail), e.on('end', n.renderThumbnail)), n._swatchEnabled = e._opts.swatchEnabled ? e._opts.swatchEnabled : e._embedContainer.querySelector('.wistia_swatch'), n
            }
            return r(t, e), u(t, [{
                key: 'mount',
                value: function(e) {
                    var t = this;
                    if (this.rootElem = e, this.thumbnailAssets = this.video.thumbnailAssets(), !!this.shouldShow()) {
                        var n = new h(function(e) {
                                return setTimeout(e, 1e3)
                            }),
                            i = new h(function(e) {
                                t.renderThumbnail(e), t.video.embedded(function() {
                                    return t.renderThumbnail()
                                })
                            });
                        return h.race([i, n])
                    }
                }
            }, {
                key: 'shouldShow',
                value: function() {
                    var e = this.video,
                        t = e.lastPlayInfo(),
                        n = Date.now() - t.issuedAt,
                        i = !t.source || t.rejectedAt,
                        a = t.isPending && 'user-event' === t.source && 2e3 > n,
                        r = 'beforeplay' === e.state() && this._hasPlayed,
                        l = t.isPending && 'non-user-event' === t.source && !e.isMuted() && (!1 === e._opts.silentAutoPlay || null == e._opts.silentAutoPlay) && (_.iphone || _.ipad || _.safari);
                    return e.up() && 'beforeplay' === e.state() && (i || l || a || r)
                }
            }, {
                key: 'onControlPropsUpdated',
                value: function(e) {
                    var t = this;
                    if (this._hasRenderedVisible) {
                        var n = ['videoWidth', 'videoHeight', 'playerLanguage'].some(function(n) {
                            return t.props[n] !== e[n]
                        });
                        n && this.renderThumbnail()
                    }
                }
            }]), t
        }(s['default']),
        v = function() {
            var e = this;
            this.renderThumbnail = function(t) {
                var n = e.video,
                    i = n.lastPlayInfo(),
                    a = Date.now() - i.issuedAt;
                e._isVisible = e.shouldShow(), e.thumbnailElem = g(m(d['default'], p({}, e.props, {
                    images: e.thumbnailAssets,
                    isVisible: e.shouldShow(),
                    onDisplay: t,
                    hashedId: e.video.hashedId(),
                    swatchEnabled: !n._opts.stillUrl && e._swatchEnabled,
                    uiHasRendered: e.video._impl.ui.hasRendered(),
                    fitStrategy: e.video._opts.fitStrategy
                })), e.rootElem, e.thumbnailElem), e._isVisible && (e._hasRenderedVisible = !0), e._isVisible && 2e3 > a && setTimeout(function() {
                    e._destroyed || e.renderThumbnail()
                }, 2e3 - a + 1), e.reactMounts = [e.rootElem, e.thumbnailElem]
            }
        };
    b.handle = 'thumbnail', b.type = 'background', b.sortValue = 1e3, l['default'].defineControl(b);
    t['default'] = b;
}, function(e, t, n) {
    'use strict';
    n.r(t);
    var l = n(2),
        s = n(304),
        d = Object.assign || function(e) {
            for (var t, n = 1; n < arguments.length; n++)
                for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e
        },
        p = function() {
            function e(e, t) {
                for (var n, a = 0; a < t.length; a++) n = t[a], n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }();

    function i(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
    }

    function a(e, t) {
        if (!e) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return t && ('object' == typeof t || 'function' == typeof t) ? t : e
    }

    function r(e, t) {
        if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function, not ' + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    var u = l['default'].lib('utilities/obj'),
        c = u.assign,
        m = l['default'].lib('preact'),
        g = m.h,
        h = m.render,
        y = m.Component,
        f = l['default'].lib('player/lib/hosts'),
        _ = f.eV1Protocol,
        b = f.eV1Host,
        v = function(e) {
            function t(e) {
                i(this, t);
                var n = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return n.afterTwoSeconds = function() {
                    n._displayed || 1 !== n.state.normalThumbOpacity || n.setState({
                        normalThumbOpacity: 0
                    })
                }, n.onDisplayNormalThumb = function() {
                    n.setState({
                        normalThumbOpacity: 1
                    }), n._displayed = !0, n.onDisplay && n.onDisplay()
                }, n.state = {
                    normalThumbOpacity: e.isVisible ? 1 : 0
                }, n.onDisplay = e.onDisplay, n
            }
            return r(t, e), p(t, [{
                key: 'componentWillReceiveProps',
                value: function(e) {
                    !this.onDisplay && e.onDisplay && (this.onDisplay = e.onDisplay)
                }
            }, {
                key: 'render',
                value: function() {
                    this.props.isVisible && (this._hasRenderedVisible = !0);
                    var e = {
                            fitStrategy: this.props.fitStrategy,
                            isVisible: this.props.isVisible,
                            stillSnap: this.props.stillSnap,
                            stretchLimit: this.props.stretchLimit,
                            videoHeight: this.props.videoHeight,
                            videoWidth: this.props.videoWidth
                        },
                        t = c({}, e, {
                            images: [{
                                url: _() + '//' + b() + '/embed/medias/' + this.props.hashedId + '/swatch'
                            }]
                        }),
                        n = c({}, e, {
                            onDisplay: this.onDisplayNormalThumb,
                            images: this.props.images
                        });
                    return g('div', null, this.props.swatchEnabled && this._hasRenderedVisible ? g(s['default'], d({}, t, {
                        wrapperStyle: this.swatchWrapperStyle()
                    })) : null, this._hasRenderedVisible ? g(s['default'], d({}, n, {
                        wrapperStyle: this.normalThumbWrapperStyle()
                    })) : null)
                }
            }, {
                key: 'componentDidMount',
                value: function() {
                    setTimeout(this.afterTwoSeconds, 2e3)
                }
            }, {
                key: 'normalThumbWrapperStyle',
                value: function() {
                    var e = this.props.swatchEnabled && this.props.uiHasRendered && 1 === this.state.normalThumbOpacity ? 'opacity 3s' : '';
                    return {
                        height: '100%',
                        opacity: this.state.normalThumbOpacity,
                        position: 'absolute',
                        transition: e,
                        width: '100%'
                    }
                }
            }, {
                key: 'swatchWrapperStyle',
                value: function() {
                    return {
                        filter: 'blur(5px)',
                        height: '100%',
                        position: 'absolute',
                        width: '100%'
                    }
                }
            }]), t
        }(y);
    t['default'] = v;
}, function(e, t, n) {
    'use strict';
    n.r(t);
    var l = n(2),
        s = function() {
            function e(e, t) {
                for (var n, a = 0; a < t.length; a++) n = t[a], n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }();

    function i(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
    }

    function a(e, t) {
        if (!e) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return t && ('object' == typeof t || 'function' == typeof t) ? t : e
    }

    function r(e, t) {
        if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function, not ' + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    var d = l['default'].lib('promiscuous'),
        p = l['default'].lib('preact'),
        u = p.h,
        c = p.render,
        m = p.Component,
        g = l['default'].lib('utilities/obj'),
        h = l['default'].lib('player/lib/elem'),
        y = h.elemInDom,
        f = l['default'].lib('player/translations'),
        _ = f.getTranslation,
        b = l['default'].lib('player/lib/hosts'),
        v = b.eV1Host,
        A = l['default'].lib('utilities/detect'),
        w = A.cachedDetect,
        k = w(),
        E = function(e) {
            function t(e) {
                i(this, t);
                var n = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return n.initialState = n.state = {
                    isLoaded: !1,
                    isDisplaying: !1
                }, n.onDisplay = n.props.onDisplay, n
            }
            return r(t, e), s(t, [{
                key: 'componentWillReceiveProps',
                value: function(e) {
                    e.images !== this.props.images && (clearTimeout(this.loadTimeout), this._sortedImages = null, this.loadTimeout = null, this.setState({
                        isLoaded: !1,
                        isDisplaying: !1
                    })), !this.onDisplay && e.onDisplay && (this.onDisplay = e.onDisplay)
                }
            }, {
                key: 'render',
                value: function() {
                    var t = this;
                    return u('div', {
                        style: this.wrapperStyle(),
                        class: 'w-css-reset'
                    }, u('img', {
                        class: 'w-css-reset',
                        srcset: 1 < this.props.images.length ? this.srcSet() : null,
                        src: this.bestSrc(),
                        style: this.imgStyle(),
                        alt: this.t('VIDEO_THUMBNAIL'),
                        ref: function(n) {
                            return t.imgElem = n
                        }
                    }))
                }
            }, {
                key: 't',
                value: function(e) {
                    return _(this.props.playerLanguage, 'THUMBNAIL_' + e)
                }
            }, {
                key: 'componentDidMount',
                value: function() {
                    this.setStateBasedOnImgStatus(), this.maybeCallOnDisplay(this.initialState)
                }
            }, {
                key: 'componentDidUpdate',
                value: function(e, t) {
                    this.setStateBasedOnImgStatus(), this.maybeCallOnDisplay(t)
                }
            }, {
                key: 'maybeCallOnDisplay',
                value: function() {
                    this.onDisplay && this.state.isDisplaying && !this.calledOnDisplay && (this.calledOnDisplay = !0, this.onDisplay())
                }
            }, {
                key: 'setStateBasedOnImgStatus',
                value: function() {
                    var e = this,
                        t = this.state,
                        n = this.imgElem;
                    t.isLoaded || (!n.onload && (n.onload = function() {
                        y(n) && e.setState({
                            isLoaded: !0
                        })
                    }), n.complete && this.setState({
                        isLoaded: !0
                    })), !t.isDisplaying && t.isLoaded && this.setState({
                        isDisplaying: !0
                    })
                }
            }, {
                key: 'wrapperStyle',
                value: function() {
                    var e = this.state.isDisplaying && this.props.isVisible;
                    return g.assign({}, this.props.wrapperStyle, {
                        display: this.state.isLoaded && !e ? 'none' : 'block'
                    })
                }
            }, {
                key: 'baseStyle',
                value: function() {
                    var e = this.props.fitStrategy;
                    return 'cover' !== e || k.browser.trident ? 'contain' === e ? this.containStyle() : 'fill' === e ? this.fillStyle() : this.containStyle() : this.coverStyle()
                }
            }, {
                key: 'imgStyle',
                value: function() {
                    var e = this.state.isDisplaying && this.props.isVisible;
                    return g.assign(this.baseStyle(), {
                        clip: e ? 'auto' : 'rect(0,0,0,0)',
                        display: this.state.isLoaded && !e ? 'none' : 'block',
                        position: 'absolute'
                    })
                }
            }, {
                key: 'containStyle',
                value: function() {
                    var e = Math.max,
                        t = Math.round,
                        n = this.props,
                        i = n.videoWidth,
                        a = n.videoHeight,
                        r = i / a,
                        l = this.imgElem ? this.imgElem.naturalWidth / this.imgElem.naturalHeight : 1.667,
                        s, d;
                    !1 === n.stillSnap ? (s = i, d = a) : r > l ? (d = a, s = t(d * l)) : r <= l && (s = i, d = t(s / l));
                    var p = e(0, a - d),
                        u = e(0, i - s),
                        c = t(p / 2),
                        m = t(u / 2),
                        g = c,
                        h = m,
                        y = c,
                        f = m;
                    2 * y <= this.stretchLimit() && (y = 0, g = 0, d = a), 2 * f <= this.stretchLimit() && (f = 0, h = 0, s = i);
                    var _ = this.props.backgroundColor || '#000';
                    return {
                        borderTop: g + 'px solid ' + _,
                        borderBottom: y + 'px solid ' + _,
                        borderLeft: f + 'px solid ' + _,
                        borderRight: h + 'px solid ' + _,
                        boxSizing: 'content-box',
                        height: d + 'px',
                        left: 0,
                        top: 0,
                        webkitTouchCallout: 'none',
                        width: s + 'px'
                    }
                }
            }, {
                key: 'coverStyle',
                value: function() {
                    return {
                        height: '100%',
                        objectFit: 'cover',
                        width: '100%'
                    }
                }
            }, {
                key: 'fillStyle',
                value: function() {
                    return {
                        height: '100%',
                        objectFit: 'fill',
                        width: '100%'
                    }
                }
            }, {
                key: 'bestSrc',
                value: function() {
                    return this.bestImage().url
                }
            }, {
                key: 'srcSet',
                value: function() {
                    var e = this.sortedImages();
                    return 0 === e.length && (e = [this.blankImage()]), e.map(function(e) {
                        return e.url + ' ' + e.width + 'w'
                    }).join(', ')
                }
            }, {
                key: 'blankImage',
                value: function() {
                    return {
                        height: this.props.videoHeight,
                        url: 'https://' + v() + '/assets/images/blank.gif',
                        width: this.props.videoWidth
                    }
                }
            }, {
                key: 'bestImage',
                value: function() {
                    var e = this.sortedImages();
                    if (0 === e.length) return this.blankImage();
                    var t = this.props.videoWidth,
                        n = (window.devicePixelRatio || 1) * t;
                    if (n <= e[0].width) return e[0];
                    for (var a, r = 0; r < e.length; r++)
                        if (a = e[r], a.width >= n) return a;
                    return e[e.length - 1]
                }
            }, {
                key: 'sortedImages',
                value: function() {
                    return this._sortedImages ? this._sortedImages : (this._sortedImages = g.clone(this.props.images), this._sortedImages.map(function(e) {
                        e.aspect = e.width / e.height
                    }), this._sortedImages)
                }
            }, {
                key: 'stretchLimit',
                value: function() {
                    var e = this.props.stretchLimit;
                    return null == e ? 10 : e
                }
            }]), t
        }(m);
    t['default'] = E;
}, function(e, t, n) {
    'use strict';
    n.r(t);
    var l = n(2),
        s = n(294),
        d = function() {
            function e(e, t) {
                for (var n, a = 0; a < t.length; a++) n = t[a], n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }();

    function i(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
    }

    function a(e, t) {
        if (!e) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return t && ('object' == typeof t || 'function' == typeof t) ? t : e
    }

    function r(e, t) {
        if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function, not ' + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    var p = function(e) {
        function t(e) {
            i(this, t);
            var n = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return n.showTime = !1, n
        }
        return r(t, e), d(t, [{
            key: 'isPlaceholder',
            value: function() {
                return !1
            }
        }, {
            key: 'isVisible',
            value: function() {
                return 'upper' === this.props.playbarMode
            }
        }]), t
    }(s['default']);
    p.shouldMount = function(e) {
        var t = e._opts.playbar;
        return !0 === t || null == t
    }, p.handle = 'upperPlaybar', p.type = 'upper-playbar', l['default'].defineControl(p);
    t['default'] = p;
}, function(e, t, n) {
    'use strict';
    n.r(t);
    var l = n(87),
        s = n(307),
        d = n(2),
        p = function() {
            function e(e, t) {
                for (var n, a = 0; a < t.length; a++) n = t[a], n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }();

    function i(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
    }

    function a(e, t) {
        if (!e) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return t && ('object' == typeof t || 'function' == typeof t) ? t : e
    }

    function r(e, t) {
        if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function, not ' + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    var u = d['default'].lib('player/lib/elem'),
        c = u.elemBind,
        m = u.elemIsInside,
        g = u.elemUnbind,
        y = u.formInputIsFocused,
        f = d['default'].lib('preact'),
        _ = f.h,
        h = f.render,
        b = d['default'].lib('player/translations'),
        v = b.getTranslation,
        A = d['default'].lib('utilities/detect'),
        w = A.cachedDetect,
        k = w(),
        E = d['default'].lib('promiscuous'),
        C = function(e) {
            function t(e) {
                i(this, t);
                var n = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return S.call(n), n.unbinds.push(e.on('volumechange', function() {
                    n.buttonRoot && n.buttonElem && n.renderButton(), n.dialogRoot && n.sliderElem && n.renderSlider()
                }), c(document, 'keyup', n.onKeyUp), c(document, 'keydown', n.onKeyDown)), n
            }
            return r(t, e), p(t, [{
                key: 'onControlPropsUpdated',
                value: function() {
                    this.dialog && this.dialog.isOpen() && this.renderSlider()
                }
            }, {
                key: 'mountButton',
                value: function(e) {
                    this.buttonRoot = e, this.renderButton()
                }
            }, {
                key: 'mountDialog',
                value: function(e) {
                    return this.dialogRoot = e, this.renderSlider()
                }
            }, {
                key: 'renderButton',
                value: function() {
                    this.buttonRoot && (this.setButtonLabel(this.video.isMuted() ? this.t('TITLE_WHEN_MUTED') : this.t('TITLE_WHEN_UNMUTED')), this.buttonElem = h(_(s['default'], {
                        volume: this.video.isMuted() ? 0 : this.video.volume()
                    }), this.buttonRoot, this.buttonElem), this.reactMounts.button = [this.buttonRoot, this.buttonElem])
                }
            }, {
                key: 't',
                value: function(e) {
                    return v(this.props.playerLanguage, 'VOLUME_' + e)
                }
            }, {
                key: 'loadSliderCode',
                value: function() {
                    return Wistia.asyncRequire('vulcanV2Video/ui_components/VolumeSlider.js')
                }
            }, {
                key: 'renderSlider',
                value: function() {
                    var e = this;
                    if (this.dialogRoot && this.dialog.isOpen()) {
                        var t = this.props.scale,
                            n = this.loadSliderCode().then(function(n) {
                                e.sliderElem = h(_(n, {
                                    volume: e.video.isMuted() ? 0 : e.video.volume(),
                                    scale: t,
                                    onDragStart: e.onDragSliderStart,
                                    onDrag: e.onDragSlider,
                                    onDragEnd: e.onDragSliderEnd,
                                    onFocus: e.onFocusSlider,
                                    onBlur: e.onBlurSlider
                                }), e.dialogRoot, e.sliderElem), e.reactMounts.dialog = [e.dialogRoot, e.sliderElem]
                            });
                        return this.loading(new E(function(t) {
                            e.resolveLoading && e.resolveLoading(), e.resolveLoading = t, n.then(t)
                        })), n
                    }
                }
            }, {
                key: 'getButtonTitle',
                value: function() {
                    return 0 === this.video.volume() ? 'Unmute' : 'Mute'
                }
            }, {
                key: 'toggleMute',
                value: function() {
                    var e = this.video;
                    e.isMuted() ? (0 === e.volume() && e.volume(1), e.unmute()) : e.mute()
                }
            }]), t
        }(l['default']),
        S = function() {
            var t = this;
            this.onDragSliderStart = function(n, e) {
                t.video.requestControls('volume-slider'), t.onDragSlider(n, e)
            }, this.onDragSlider = function(n, e) {
                var i = t.video;
                i.volume(e), i.isMuted() || 0 !== e || i.mute(), i.isMuted() && 0 < e && i.unmute()
            }, this.onDragSliderEnd = function(n, e) {
                t.onDragSlider(n, e), t.video.releaseControls('volume-slider')
            }, this.onClickButton = function() {
                k.touchScreen || t.toggleMute()
            }, this.onFocusInButton = function() {
                t.video.enterInputContext('volume-button-focus')
            }, this.onFocusOutButton = function() {
                t.video.exitInputContext('volume-button-focus')
            }, this.onMouseLeave = function() {
                t.resolveLoading && (t.resolveLoading(), t.resolveLoading = null)
            }, this.onFocusSlider = function() {
                t.video.enterInputContext('volume-slider-focus')
            }, this.onBlurSlider = function() {
                t.video.exitInputContext('volume-slider-focus')
            }, this.onKeyUp = function(n) {
                if (!(y() || n.eventHandled)) {
                    var e = t.video,
                        i = e.getInputContext();
                    ('player-mouseover' === i || 'player-focus' === i || 'volume-button-focus' === i || 'volume-slider-focus' === i) && n.keyCode === 77 && (e.isMuted() ? e.unmute() : e.mute())
                }
            }, this.onKeyDown = function(n) {
                if (!(y() || n.eventHandled)) {
                    var e = t.video,
                        i = e.getInputContext();
                    if ('player-mouseover' === i || 'player-focus' === i || 'volume-slider-focus' === i) {
                        var a = n.keyCode,
                            r = 0;
                        if (a === 38 ? r = 1 : a === 40 && (r = -1), 1 == r) {
                            var l = n.shiftKey ? 0.01 : 0.1;
                            e.volume(e.volume() + l)
                        } else if (-1 == r) {
                            var s = n.shiftKey ? 0.01 : 0.1;
                            e.volume(e.volume() - s)
                        }
                    }
                }
            }
        };
    C.shouldMount = function(e) {
        var t = e._opts.volumeControl;
        return (!0 === t || null == t) && !k.iphone && !k.ipad && !k.android
    }, C.handle = 'volumeButton', C.type = 'control-bar-right', C.sortValue = 100, C.toggleDialogOnHover = !0, d['default'].defineControl(C);
    t['default'] = C;
}, function(e, t, n) {
    'use strict';
    n.r(t);
    var l = n(89),
        s = n(2),
        d = Object.assign || function(e) {
            for (var t, n = 1; n < arguments.length; n++)
                for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e
        },
        p = function() {
            function e(e, t) {
                for (var n, a = 0; a < t.length; a++) n = t[a], n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }();

    function i(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
    }

    function a(e, t) {
        if (!e) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return t && ('object' == typeof t || 'function' == typeof t) ? t : e
    }

    function r(e, t) {
        if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function, not ' + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    var u = s['default'].lib('preact'),
        c = u.h,
        m = u.render,
        g = u.Component,
        h = 'opacity 100ms',
        y = function(e) {
            function t(e) {
                i(this, t);
                var n = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return n.state = {
                    volume: e.volume
                }, n
            }
            return r(t, e), p(t, [{
                key: 'waveCount',
                value: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : this.props.volume;
                    return 0.55 < e ? 2 : 0 < e ? 1 : 0
                }
            }, {
                key: 'shouldComponentUpdate',
                value: function(e) {
                    var t = this.waveCount(),
                        n = this.waveCount(e.volume);
                    return t !== n
                }
            }, {
                key: 'render',
                value: function() {
                    var e = {
                        fill: 'none',
                        stroke: '#ffffff',
                        "stroke-line-cap": 'round',
                        "stroke-miterlimit": '10'
                    };
                    return c('svg', Object(l.standardSvgAttrs)(40, 34), c('g', {
                        style: this.speakerGroupStyle()
                    }, c('g', null, c('path', {
                        d: 'M13.8,14.2c-0.5,0.5-1.4,0.8-2,0.8h-1.6C9.5,15,9,15.5,9,16.2v1.6c0,0.7,0.5,1.2,1.2,1.2h1.6c0.7,0,1.6,0.4,2,0.8l2.3,2.3c0.5,0.5,0.8,0.3,0.8-0.4v-9.6c0-0.7-0.4-0.8-0.8-0.4L13.8,14.2z'
                    })), c('g', null, c('path', d({}, e, {
                        "stroke-width": '2',
                        d: 'M22,11.7c0,0,1.1,2.5,1.1,5s-1.1,5-1.1,5',
                        style: this.wave1Style()
                    })), c('path', d({}, e, {
                        "stroke-width": '2',
                        d: 'M25.8,9.2c0,0,1.7,3.8,1.7,7.5c0,3.7-1.7,7.5-1.7,7.5',
                        style: this.wave2Style()
                    }))), c('g', {
                        style: this.waveXStyle()
                    }, c('line', d({}, e, {
                        "stroke-width": '1.8102',
                        x1: '19.2',
                        y1: '15',
                        x2: '23.2',
                        y2: '19'
                    })), c('line', d({}, e, {
                        "stroke-width": '1.8102',
                        x1: '19.2',
                        y1: '19',
                        x2: '23.2',
                        y2: '15'
                    })))))
                }
            }, {
                key: 'speakerGroupStyle',
                value: function() {
                    return {
                        transform: 'translateX(' + (2 > this.waveCount() ? 3 : 1.25) + 'px)',
                        transition: 'transform 100ms'
                    }
                }
            }, {
                key: 'waveXStyle',
                value: function() {
                    return {
                        opacity: 0 >= this.waveCount() ? 1 : 0,
                        transition: h
                    }
                }
            }, {
                key: 'wave1Style',
                value: function() {
                    return {
                        opacity: 1 <= this.waveCount() ? 1 : 0,
                        transition: h
                    }
                }
            }, {
                key: 'wave2Style',
                value: function() {
                    return {
                        opacity: 2 <= this.waveCount() ? 1 : 0,
                        transition: h
                    }
                }
            }]), t
        }(g);
    t['default'] = y;
}, function(e, t, n) {
    'use strict';
    n.r(t);
    var l = n(2),
        s = n(309),
        d = function() {
            function e(e, t) {
                for (var n, a = 0; a < t.length; a++) n = t[a], n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }(),
        p = function e(t, n, i) {
            null === t && (t = Function.prototype);
            var a = Object.getOwnPropertyDescriptor(t, n);
            if (a === void 0) {
                var r = Object.getPrototypeOf(t);
                return null === r ? void 0 : e(r, n, i)
            }
            if ('value' in a) return a.value;
            var l = a.get;
            return void 0 === l ? void 0 : l.call(i)
        };

    function i(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
    }

    function a(e, t) {
        if (!e) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return t && ('object' == typeof t || 'function' == typeof t) ? t : e
    }

    function r(e, t) {
        if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function, not ' + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    var u = l['default'].lib('utilities/event_loop'),
        c = u.globalEventLoop,
        m = l['default'].lib('promiscuous'),
        g = function(e) {
            function t() {
                var e, r, l, s;
                i(this, t);
                for (var d = arguments.length, p = Array(d), u = 0; u < d; u++) p[u] = arguments[u];
                return s = (r = (l = a(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(p))), l), l.maybeFireStateAndTimeEvents = function() {
                    l.fireStateChangedEventsIfChanged(), l.fireTimeChangedEventsIfChanged()
                }, l.onPause = function() {
                    l.maybeFireStateAndTimeEvents()
                }, l.onPlaying = function() {
                    l._beforePlay = !1, l._ended = !1, l.maybeFireStateAndTimeEvents()
                }, l.onEnded = function() {
                    l.maybeFireStateAndTimeEvents()
                }, l.onVolumeChange = function() {
                    var e = l.impl.isMuted();
                    l.impl.trigger('volumechange', l.impl.volume(), e), e !== l._isMuted && (l._isMuted = e, l.impl.trigger('mutechange', e))
                }, l.onRateChange = function() {
                    l.impl.trigger('ratechange', l.impl.playbackRate())
                }, l.onProgress = function(t) {
                    l.impl.trigger('progress', t)
                }, l.onError = function(t) {
                    l.impl.trigger('error', t)
                }, l.onSeeking = function(t) {
                    l.impl.trigger('seeking', t), l.engine.bind('seeked', function(t) {
                        return l.impl.trigger('seekcomplete', t), l.engine.unbind
                    })
                }, l.onCustomWaiting = function(e) {
                    l._waiting = e, l.impl.trigger('waiting', e)
                }, l.onCustomDoneWaiting = function(e) {
                    l._waiting = -1, l.impl.trigger('done-waiting', e)
                }, l.fireTimeChangedEventsIfChanged = function() {
                    var e = Math.floor,
                        t = l.impl,
                        i = t.time(),
                        a = i !== l._lastTimePosition,
                        r = 'beforeplay' === t.state() && 0.3 > i;
                    return a && 0 < i && !r && (l._ended = !1, t.trigger('timechange', i), e(i) !== e(l._lastTimePosition) && t.trigger('secondchange', e(i)), !l._beforePlay && !l._ended && n(i - l._lastTimePosition) > t._attrs.seekThreshold && t.trigger('seek', i, l._lastTimePosition), l._lastTimePosition = i), m.resolve()
                }, r), a(l, s)
            }
            var n = Math.abs;
            return r(t, e), d(t, [{
                key: 'init',
                value: function() {
                    var e = this;
                    this.resetState(), this.impl.whenVideoElementInDom().then(function() {
                        return e.doInit()
                    })
                }
            }, {
                key: 'doInit',
                value: function() {
                    var e = this,
                        t = this.impl,
                        n = t.engine;
                    this.unbinds.push(n.bind('pause', this.onPause), n.bind('playing', this.onPlaying), n.bind('ended', this.onEnded), n.bind('volumechange', this.onVolumeChange), n.bind('ratechange', this.onRateChange), n.bind('progress', this.onProgress), n.bind('custom-waiting', this.onCustomWaiting), n.bind('custom-done-waiting', this.onCustomDoneWaiting), n.bind('error', this.onError)), c.add(t.uuid + '.events', t._eventLoopDuration, function() {
                        if (!t.looksDown()) {
                            e.fireStateChangedEventsIfChanged(), e.fireTimeChangedEventsIfChanged();
                            var n = t.videoQuality();
                            n !== e._lastQuality && (t.trigger('qualitychange', n), e._lastQuality = n)
                        }
                    })
                }
            }, {
                key: 'destroy',
                value: function() {
                    c.remove(this.impl.uuid + '.events'), p(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), 'destroy', this).call(this)
                }
            }, {
                key: 'resetState',
                value: function() {
                    this._waiting = -1, this._lastTimePosition = -1, this._beforePlay = !0, this._ended = !1, this._isMuted = this.impl.isMuted(), this._hasPlayed = !1
                }
            }, {
                key: 'fireStateChangedEventsIfChanged',
                value: function() {
                    var e = this.impl,
                        t = e.state();
                    t !== this._lastState && (e.trigger('statechange', t, this._lastState), 'playing' === t && (this._hasPlayed = !0, this._ended = !1, e.trigger('play', e.lastPlayInfo())), 'paused' === t && e.trigger('pause', e.lastPauseInfo()), 'ended' === t && (this._ended = !0, e.trigger('end'), e.trigger('afterend')), 'ended' !== t && this.mozillaAtEnd() && (e.engine.pause(), this._ended = !0, e.trigger('end'), e.trigger('afterend')), this._lastState = t)
                }
            }, {
                key: 'mozillaAtEnd',
                value: function() {
                    return !this._ended && l['default'].detect.browser.mozilla && 45 > l['default'].detect.browser.version && !l['default'].detect.edge && l['default'].detect.windows && 0.6 <= this._waiting && 2 > n(this.impl.time() - this.impl.duration())
                }
            }]), t
        }(s.PlayerBehavior);
    g.handle = 'relayEvents';
    t['default'] = g;
}, function(e, t, n) {
    'use strict';
    n.r(t);
    n.d(t, 'PlayerBehavior', function() {
        return r
    });
    var a = function() {
        function e(e, t) {
            for (var n, a = 0; a < t.length; a++) n = t[a], n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
        return function(t, n, i) {
            return n && e(t.prototype, n), i && e(t, i), t
        }
    }();

    function i(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
    }
    var r = function() {
        function e(t) {
            i(this, e), this.impl = t, this.unbinds = [], this.namedUnbinds = {}
        }
        return a(e, [{
            key: 'addNamedUnbind',
            value: function(e, t) {
                this.namedUnbinds[e] && this.namedUnbinds[e](), this.namedUnbinds[e] = t
            }
        }, {
            key: 'removeNamedUnbind',
            value: function(e) {
                this.namedUnbinds[e] && (this.namedUnbinds[e](), delete this.namedUnbinds[e])
            }
        }, {
            key: 'destroy',
            value: function() {
                for (var e in this.unbinds instanceof Array && this.unbinds.map(function(e) {
                        return e()
                    }), this.namedUnbinds) this.namedUnbinds.hasOwnProperty(e) && this.namedUnbinds[e].map(function(e) {
                    return e()
                });
                this.unbinds = [], this.namedUnbinds = {}, this.impl = null, this._destroyed = !0
            }
        }]), e
    }();
}, function(e, t, n) {
    'use strict';
    n.r(t);
    n.d(t, 'PlaySuspendedOffScreenBehavior', function() {
        return d
    });
    var l = n(309),
        s = function() {
            function e(e, t) {
                for (var n, a = 0; a < t.length; a++) n = t[a], n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }();

    function i(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
    }

    function a(e, t) {
        if (!e) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return t && ('object' == typeof t || 'function' == typeof t) ? t : e
    }

    function r(e, t) {
        if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function, not ' + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    var d = function(e) {
        function t() {
            return i(this, t), a(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
        }
        return r(t, e), s(t, [{
            key: 'init',
            value: function() {
                var e = this,
                    t = this.impl,
                    n = t.publicApi;
                this.unbinds.push(n.on('enterviewport', function() {
                    t.inFullscreen() || e._isSuspended && (e._isSuspended = !1, n._playSuspendedOffScreenEnabled() && 'paused' === t.state() && t.play())
                }), n.on('leaveviewport', function() {
                    t.inFullscreen() || !e._isSuspended && n._playSuspendedOffScreenEnabled() && 'playing' === t.state() && (t.pause(), e._isSuspended = !0)
                }), t.on('receivepause', function() {
                    e._isSuspended && (e._isSuspended = !1)
                }))
            }
        }]), t
    }(l.PlayerBehavior);
    d.handle = 'playSuspendedOffScreen';
}, function(e, t, n) {
    'use strict';
    n.r(t);
    var l = n(2),
        s = n(309),
        d = function() {
            function e(e, t) {
                for (var n, a = 0; a < t.length; a++) n = t[a], n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }();

    function i(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
    }

    function a(e, t) {
        if (!e) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return t && ('object' == typeof t || 'function' == typeof t) ? t : e
    }

    function r(e, t) {
        if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function, not ' + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    var p = l['default'].lib('player/lib/elem'),
        u = p.elemAppend,
        c = p.elemFromObject,
        m = p.elemPrepend,
        g = p.pageLoaded,
        h = l['default'].lib('player/lib/assets'),
        y = function(e) {
            function t() {
                var e, n, r, l;
                i(this, t);
                for (var s = arguments.length, d = Array(s), p = 0; p < s; p++) d[p] = arguments[p];
                return l = (n = (r = a(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(d))), r), r.updateBackgroundColor = function() {
                    var e = r.impl;
                    if (e.videoWrapper && !e._replacing && e.embedded())
                        if ('transparent' === e._opts.wmode && !e.inFullscreen()) e.videoWrapper.style.backgroundColor = 'transparent';
                        else {
                            var t = e._attrs.playerBackgroundColor || e._opts.backgroundColor || '#000';
                            e.videoWrapper.style.backgroundColor = t || '#000'
                        }
                }, n), a(r, l)
            }
            return r(t, e), d(t, [{
                key: 'init',
                value: function() {
                    this.unbinds.push(this.impl.on('playerbackgroundcolorchange', this.updateBackgroundColor), this.impl.publicApi.on('transitiondone', this.updateBackgroundColor))
                }
            }, {
                key: 'embed',
                value: function(e) {
                    var t = this,
                        n = this.impl;
                    n.oldImpl = e, n.resetStateVariables(), n.videoWrapper = c({
                        class: 'w-video-wrapper w-css-reset',
                        style: {
                            clip: 'rect(0,0,0,0)',
                            height: '100%',
                            position: 'absolute',
                            top: 0,
                            width: '100%'
                        }
                    }), this.updateBackgroundColor(), m(n.implContainer(), n.videoWrapper), n.uiContainer || (n.uiContainer = c({
                        class: 'w-ui-container',
                        style: {
                            height: '100%',
                            pointerEvents: n._inNativeMode() ? 'none' : '',
                            left: 0,
                            position: 'absolute',
                            top: 0,
                            width: '100%'
                        }
                    }), u(n.implContainer(), n.uiContainer)), n.up(function() {
                        t._preloadPreference = t.preloadValue(), n._replacing && (t.initializeEngine(), n.info('embedded'), n.embedded(!0)), n.renderUI().then(function() {
                            try {
                                n.setupBindings()
                            } catch (t) {
                                setTimeout(function() {
                                    throw t
                                }, 0)
                            }
                            l['default'].timeout(n.uuid + '.finish_embedding', function() {
                                n.info('embedded'), n.embedded(!0), g(function() {
                                    t.initializeEngine()
                                })
                            }, 0)
                        })
                    }), n.down() && n.embedded(!0)
                }
            }, {
                key: 'preloadValue',
                value: function() {
                    var e, t = this.impl;
                    e = t._opts.autoPlay && !t.publicApi.popover && t.looksUp() ? 'auto' : null == t._opts.preload ? t._mediaData.preloadPreference : t._opts.preload;
                    var n;
                    if (t._mediaData.spherical) {
                        if (t._opts._inIframe) n = 'none';
                        else {
                            var i = [],
                                a = l['default'].data('video');
                            for (var r in a) i.push(a[r]);
                            n = 1 < i.length ? 'none' : 'auto'
                        }
                    } else if ('metadata' === e) n = 'metadata';
                    else if (!0 === e || 'auto' === e) n = 'auto';
                    else if (!1 === e || 'none' === e) n = 'none';
                    else {
                        var s = [],
                            d = l['default'].data('video');
                        for (var p in d) s.push(d[p]);
                        n = t._opts._inIframe && top !== parent ? 'none' : t._opts._inIframe && 25 < l['default'].util.parentFramesLength() ? 'none' : t._opts._inIframe && (!window._allIframes || 2 < _allIframes.length) ? 'none' : !t._opts._inIframe && 2 < s.length ? 'none' : t._mediaData.stats && 5e3 < t._mediaData.stats.loadCount && 0.1 > t._mediaData.stats.uniquePlayCount / t._mediaData.stats.uniqueLoadCount ? 'none' : 'metadata'
                    }
                    return n
                }
            }, {
                key: 'rebuild',
                value: function() {
                    var e = this.impl;
                    return e.info('rebuild'), e.embedded(function() {
                        e.embedded(!1), e.ready(!1), e.removeBehaviors(), e.enginePromise = null, e.engine = null, e._oldVideoElem = e.elem(), e._whenVideoElementInDom = null, e.stopStreaming(), l['default'].elem.remove(e.videoWrapper), e.videoWrapper = null, e.vulcanWrapper = null, e.ui = null, e.wipeOutstandingAsyncFunctions(), e.setupBehaviors(), e.embed()
                    }), e
                }
            }, {
                key: 'checkForReady',
                value: function() {
                    var e = this.impl;
                    e._checkDownState(), e.up(function() {
                        e.embedded(function() {
                            e.onDimensionChangeSafe(), e.engine && e.engine.onReady().then(function() {
                                e.onDimensionChangeSafe(), e.ready(!0)
                            })
                        })
                    })
                }
            }, {
                key: 'initializeEngine',
                value: function() {
                    var e = this,
                        t = this.impl;
                    if (t) {
                        if (t.enginePromise) return t.enginePromise;
                        var n = t.bestEngine();
                        return t.enginePromise = l['default'].asyncRequire(n).then(function(n) {
                            if (t.grid) try {
                                t.engine = new n(t.videoWrapper, t._mediaData, e.engineAttributes(), t.oldImpl && t.oldImpl.engine), t.oldImpl = null, t.trigger('engine-initialized'), t.setupBindings(), e.checkForReady()
                            } catch (n) {
                                t.error(n)
                            }
                        })
                    }
                }
            }, {
                key: 'engineAttributes',
                value: function() {
                    var e, t = this.impl;
                    t._opts.videoQuality ? e = t._opts.videoQuality : (t._opts.videoFoam || 720 <= t.videoWidth()) && (e = 'md');
                    var n;
                    t._bandwidthTest().isFresh() && (n = t._bandwidthTest().savedResult().clientKbps);
                    var i;
                    if (t._mediaData.secondaryMediaData) i = l['default'].obj.clone(t._mediaData.secondaryMediaData);
                    else if (t._opts.secondaryVideoUrl) {
                        var a = l['default'].obj.clone(t._mediaData),
                            r = t.originalAsset();
                        a.assets = [{
                            container: 'mp4',
                            ext: 'mp4',
                            codec: 'x264',
                            public: !0,
                            url: t._opts.secondaryVideoUrl,
                            height: r.height,
                            width: r.width,
                            type: 'mp4_video',
                            display_name: h.numericSizeSnapped(r.width, r.height) + 'p',
                            status: h.READY,
                            created_at: new Date().getTime()
                        }], i = a
                    }
                    var s = t._opts.layoutTiming;
                    return t._opts.twoStroke && t._opts.twoStroke.layoutTiming && (s = t._opts.twoStroke.layoutTiming), {
                        backgroundColor: 'transparent' === t._opts.wmode ? 'transparent' : t.playerBackgroundColor(),
                        controls: t._inNativeMode(),
                        duration: t._mediaData.duration,
                        fitStrategy: t._opts.fitStrategy,
                        hashedId: t.hashedId(),
                        height: t.videoHeight(),
                        layoutTiming: s,
                        loop: 'loop' === t._opts.endVideoBehavior,
                        muted: t._muted,
                        playsinline: !0,
                        preload: this._preloadPreference,
                        qualityMax: t._attrs.qualityMax,
                        qualityMin: t._attrs.qualityMin,
                        savedBandwidth: n,
                        secondaryMediaData: i,
                        silentAutoPlay: t._opts.silentAutoPlay,
                        trimEnd: t._opts.trimEnd,
                        trimStart: t._opts.trimStart,
                        videoQuality: e,
                        volume: t._volume,
                        width: t.videoWidth()
                    }
                }
            }]), t
        }(s.PlayerBehavior);
    y.handle = 'embed';
    t['default'] = y;
}, function(e, t, n) {
    'use strict';
    n.r(t);
    var l = n(2),
        s = n(309),
        d = function() {
            function e(e, t) {
                for (var n, a = 0; a < t.length; a++) n = t[a], n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }();

    function i(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
    }

    function a(e, t) {
        if (!e) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return t && ('object' == typeof t || 'function' == typeof t) ? t : e
    }

    function r(e, t) {
        if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function, not ' + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    var p = function(e) {
        function t() {
            var e, n, r, s;
            i(this, t);
            for (var d = arguments.length, p = Array(d), u = 0; u < d; u++) p[u] = arguments[u];
            return s = (n = (r = a(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(p))), r), r.onPlay = function() {
                if (null == r._startedLoadingAt) return r._startedLoadingAt = Date.now(), impl.unbind
            }, r.onProgress = function() {
                var e = r.impl;
                if (e.engine.anyBuffered()) return r._firstByteReceivedAt = Date.now(), null != r._startedLoadingAt && (r._timeToFirstByte = r._firstByteReceivedAt - r._startedLoadingAt), e.unbind
            }, r.onWaiting = function(e) {
                var t = r.impl,
                    n = t.engine.anyBuffered();
                r._noDataFor5Seconds || !(5 <= e) || n || (r._noDataFor5Seconds = !0, l['default'].Metrics.videoCount(t, 'player/no-data/5-seconds')), r._noDataFor10Seconds || !(10 <= e) || n || (r._noDataFor10Seconds = !0, l['default'].Metrics.videoCount(t, 'player/no-data/10-seconds')), r._noDataFor15Seconds || !(15 <= e) || n || (r._noDataFor15Seconds = !0, l['default'].Metrics.videoCount(t, 'player/no-data/15-seconds'))
            }, r.onClickedPlayBeforeReady = function() {
                l['default'].Metrics.videoCount(r.impl, 'player/clicked-play-before-ready')
            }, n), a(r, s)
        }
        return r(t, e), d(t, [{
            key: 'init',
            value: function() {
                var e = this;
                this.impl.whenVideoElementInDom().then(function() {
                    return e.doInit()
                })
            }
        }, {
            key: 'doInit',
            value: function() {
                var e = this.impl;
                e.engine && e.engine.getPreload() && (this._startedLoadingAt = Date.now()), this.unbinds.push(e.on('play', this.onPlay), e.on('progress', this.onProgress), e.on('waiting', this.onWaiting), e.on('clicked-play-before-ready', this.onClickedPlayBeforeReady))
            }
        }]), t
    }(s.PlayerBehavior);
    p.handle = 'metrics';
    t['default'] = p;
}, function(e, t, n) {
    'use strict';
    n.r(t);
    var l = n(2),
        s = n(309),
        d = function() {
            function e(e, t) {
                for (var n, a = 0; a < t.length; a++) n = t[a], n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }();

    function i(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
    }

    function a(e, t) {
        if (!e) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return t && ('object' == typeof t || 'function' == typeof t) ? t : e
    }

    function r(e, t) {
        if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function, not ' + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    var p = function(e) {
        function t() {
            return i(this, t), a(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
        }
        return r(t, e), d(t, [{
            key: 'init',
            value: function() {
                var e = this,
                    t = this.impl;
                t.embedded(function() {
                    e.bandwidthTest().isFresh() ? (e._supportsHd = e.bandwidthTest().savedResult().supportsHd, e.impl.whenVideoElementInDom().then(function() {
                        e.impl.engine.setAttributes({
                            supportsHd: e._supportsHd
                        })
                    })) : e.hdAsset() && null != !e._supportsHd && e.unbinds.push(t.on('play', function() {
                        return e.doBandwidthTest(), t.unbind
                    }))
                })
            }
        }, {
            key: 'bandwidthTest',
            value: function() {
                return this._bandwidthTest ? this._bandwidthTest : (this._bandwidthTest = new l['default'].BandwidthTest({
                    timeoutLength: 4e3,
                    uuid: this.impl.uuid,
                    saveKey: 'vulcan.bandwidth'
                }), this._bandwidthTest)
            }
        }, {
            key: 'doBandwidthTest',
            value: function() {
                var e = this,
                    t = this.impl;
                t.info('doBandwidthTest'), this._endBandwidthTestEarly || (this._endBandwidthTestEarly = function() {
                    t.info('_endBandwidthTestEarly'), e.bandwidthTest().endEarly(), l['default'].Metrics.videoCount(t, 'player/bandwidth_test/ended_early')
                });
                var n = ['seek', 'pause', 'end', 'switched-to-asset-without-load'];
                n.map(function(n) {
                    e.unbinds.push(t.on(n, e._endBandwidthTestEarly))
                }), this._failBandwidthTestOnWaiting || (this._failBandwidthTestOnWaiting = function() {
                    return t.info('_failBandwidthTestOnWaiting'), e.bandwidthTest().fail(), l['default'].Metrics.videoCount(t, 'player/bandwidth_test/failed'), t.unbind
                }), this.unbinds.push(t.on('waiting', this._failBandwidthTestOnWaiting)), this._endBandwidthTestOnTime = function() {
                    t.info('_endBandwidthTestOnTime'), e._supportsHd = e.bandwidthTest().supportsHd(), t.engine.setAttributes({
                        supportsHd: !0
                    }), e._failBandwidthTestOnWaiting && t.unbind('waiting', e._failBandwidthTestOnWaiting), e._endBandwidthTestEarly && n.map(function(n) {
                        t.unbind(n, e._endBandwidthTestEarly)
                    }), l['default'].Metrics.videoCount(t, 'player/bandwidth_test/ended_on_time')
                }, this.bandwidthTest().bind('ended', this._endBandwidthTestOnTime), this.bandwidthTest().start()
            }
        }, {
            key: 'supportsHd',
            value: function() {
                return !!this.hdAsset() && (null == this._supportsHd || this._supportsHd)
            }
        }, {
            key: 'hdAsset',
            value: function() {
                if (this._hdAsset) return this._hdAsset;
                var e = this.impl;
                return this._hdAsset = e.playableAssetInRange({
                    width: [980, e._opts.maxHdWidth || 2e3],
                    sortBy: 'width desc, bitrate desc'
                }), this._hdAsset
            }
        }]), t
    }(s.PlayerBehavior);
    p.handle = 'bandwidthTest';
    t['default'] = p;
}, function(e, t, n) {
    'use strict';
    n.r(t);
    var l = n(2),
        s = n(309),
        d = function() {
            function e(e, t) {
                for (var n, a = 0; a < t.length; a++) n = t[a], n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }();

    function i(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
    }

    function a(e, t) {
        if (!e) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return t && ('object' == typeof t || 'function' == typeof t) ? t : e
    }

    function r(e, t) {
        if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function, not ' + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    var p = l['default'].lib('player/lib/elem'),
        u = p.inUserEventContext,
        c = l['default'].lib('utilities/detect'),
        m = c.cachedDetect,
        g = m(),
        h = function(e) {
            function t() {
                var e, n, r, s;
                i(this, t);
                for (var d = arguments.length, p = Array(d), c = 0; c < d; c++) p[c] = arguments[c];
                return s = (n = (r = a(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(p))), r), r.onEnterFullscreen = function(e) {
                    var t = r.impl;
                    e === t.chrome ? (t.info('_onEnterFullscreen'), t.trigger('before-enter-fullscreen'), r._hasBeenInFullscreen = !0, r._inFullscreen = !0, t.notFullscreen(!1), r.injectFullscreenStyles(), t.behaviors.embed.updateBackgroundColor(), t.width(l['default'].elem.width(window), {
                        fullscreen: !0,
                        dontChangeContainer: !0
                    }), t.height(l['default'].elem.height(window), {
                        fullscreen: !0,
                        dontChangeContainer: !0
                    }), t.engine && t.engine.onEnterFullscreen(), t.trigger('enter-fullscreen')) : t.elem().webkitDisplayingFullscreen && (r._hasBeenInFullscreen = !0, r._inFullscreen = !0, r._nativeFullscreen = !0, t.notFullscreen(!1), t.trigger('enter-fullscreen'))
                }, r.onCancelFullscreen = function() {
                    var e = r.impl;
                    r._nativeFullscreen ? (r._nativeFullscreen = !1, r._inFullscreen = !1, e.notFullscreen(!0), e.trigger('cancel-fullscreen')) : r._inFullscreen && (e.info('onCancelFullscreen'), r._inFullscreen = !1, e.notFullscreen(!0), r.removeFullscreenStyles(), e.behaviors.embed.updateBackgroundColor(), e.width(r._widthBeforeFullscreen), e.height(r._heightBeforeFullscreen), e.fit(), e.engine && e.engine.onLeaveFullscreen(), e.trigger('cancel-fullscreen'))
                }, r.onOrientationChange = function() {
                    var e = r.impl;
                    if (r.fullscreenResizeToWindow(), -90 === window.orientation || 90 === window.orientation) {
                        if ('playing' !== e.state() || e.engine.isMuted()) return;
                        e.requestFullscreen()
                    } else e.cancelFullscreen()
                }, r.maybeAutoFullscreen = function() {
                    var e = r.impl._inNativeMode() && !1 === r.impl._opts.playsinline && u() && !r._hasAutoFullscreened;
                    e && (r._hasAutoFullscreened = !0, r.requestFullscreen())
                }, n), a(r, s)
            }
            return r(t, e), d(t, [{
                key: 'init',
                value: function() {
                    var e = this,
                        t = this.impl;
                    this.unbinds.push(l['default'].on('enter-fullscreen', this.onEnterFullscreen), l['default'].on('cancel-fullscreen', this.onCancelFullscreen), l['default'].elem.bind(window, 'resize', function() {
                        e.fullscreenResizeToWindow()
                    }), t.on('playpending', this.maybeAutoFullscreen)), t.whenVideoElementInDom().then(function() {
                        t.engine.bind('webkitbeginfullscreen', e.onEnterFullscreen), t.engine.bind('webkitendfullscreen', e.onCancelFullscreen)
                    }), this.getIsFullscreenOnRotateToLandscape() && (window.screen.orientation ? this.unbinds.push(l['default'].elem.bind(window.screen.orientation, 'change', this.onOrientationChange)) : this.unbinds.push(l['default'].elem.bind(window, 'orientationchange', this.onOrientationChange)))
                }
            }, {
                key: 'fullscreenResizeToWindow',
                value: function() {
                    var e = this.impl;
                    if (e.inFullscreen() && !this._nativeFullscreen) {
                        e.debug('fullscreenResizeToWindow');
                        var t = e.width(),
                            n = e.height(),
                            i = l['default'].elem.width(window),
                            a = l['default'].elem.height(window);
                        t !== i && e.width(l['default'].elem.width(window), {
                            fullscreen: !0,
                            dontChangeContainer: !0
                        }), n !== a && e.height(l['default'].elem.height(window), {
                            fullscreen: !0,
                            dontChangeContainer: !0
                        })
                    }
                }
            }, {
                key: 'injectFullscreenStyles',
                value: function() {
                    if (!this._fullscreenStyle) {
                        document.body.id || (this._docBodyId = l['default'].seqId('wistia_', '_tmp_body_id'), document.body.setAttribute('id', this._docBodyId));
                        var e = '\n      #' + document.body.id + ', #' + document.body.id + ' :full-screen-ancestor {\n        animation-name: none;\n        -webkit-animation-name: none;\n        transform: none;\n        -webkit-transform: none;\n      }\n    ';
                        ['webkit', 'moz', 'ms', 'o'].map(function(t) {
                            e += '\n      #' + document.body.id + ' :-' + t + '-full-screen-ancestor {\n        animation-name: none;\n        -webkit-animation-name: none;\n        transform: none;\n        -webkit-transform: none;\n      }\n      \n'
                        }), this._fullscreenStyle = l['default'].css(this.impl.wrapperElem, e)
                    }
                }
            }, {
                key: 'removeFullscreenStyles',
                value: function() {
                    this._fullscreenStyle && (this._docBodyId && document.body.id === this._docBodyId && (document.body.removeAttribute('id'), this._docBodyId = null), l['default'].elem.remove(this._fullscreenStyle), this._fullscreenStyle = null)
                }
            }, {
                key: 'requestFullscreen',
                value: function() {
                    var e = this.impl;
                    e.inFullscreen() || (e.info('requestFullscreen'), this._widthBeforeFullscreen = e.width(), this._heightBeforeFullscreen = e.height(), e._inNativeMode() ? e.engine && e.engine.requestFullscreen() : g.fullscreenEnabled ? l['default'].elem.requestFullscreen(e.chrome) : this.getAllowFakeFullscreen() ? this.enterFakeFullscreen() : e.engine && ('beforeplay' === e.state() && (g.iphone || g.ipad) && e.engine.play().then(function() {
                        return e.engine.pause()
                    }), e.engine && e.engine.requestFullscreen()))
                }
            }, {
                key: 'cancelFullscreen',
                value: function() {
                    var e = this.impl;
                    e.inFullscreen() && (e.info('cancelFullscreen'), e._inNativeMode() ? e.engine.cancelFullscreen() : g.fullscreenEnabled ? l['default'].elem.cancelFullscreen() : this.getAllowFakeFullscreen() ? this.cancelFakeFullscreen() : e.engine.cancelFullscreen())
                }
            }, {
                key: 'getAllowFakeFullscreen',
                value: function() {
                    return !this.impl._opts._inIframe && 10 <= g.ios.version && (this.impl._opts.fakeFullscreen || /two_stroke/i.test(this.impl.bestEngine()))
                }
            }, {
                key: 'getIsFullscreenOnRotateToLandscape',
                value: function() {
                    if (!g.touchScreen) return !1;
                    if (0 < g.ios.version && 10 > g.ios.version) return !1;
                    var e = this.impl._opts.fullscreenOnRotateToLandscape;
                    return null == e || e
                }
            }, {
                key: 'enterFakeFullscreen',
                value: function() {
                    var e = this.impl;
                    this._widthBeforeFullscreen = e.width(), this._heightBeforeFullscreen = e.height(), this._inFakeFullscreen = !0, this._chromeParent = e.chrome.parentNode, document.body.appendChild(e.chrome), this._leftOffsetBeforeFullscreen = l['default'].util.scrollLeft(), this.onEnterFullscreen(e.chrome), this.setupFakeFullscreenBindings(), l['default'].elem.style(e.chrome, {
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        zIndex: 2147483647
                    }), l['default'].util.scrollLeft(0), e.engine && e.engine.onEnterFullscreen()
                }
            }, {
                key: 'setupFakeFullscreenBindings',
                value: function() {
                    var e = this,
                        t = this.impl;
                    l['default'].eventLoop.add(t.uuid + '.fakefullscreen', 100, function() {
                        e.fullscreenResizeToWindow()
                    }), this._preventDefaultForTouchMove || (this._preventDefaultForTouchMove = function(e) {
                        e.preventDefault()
                    }), l['default'].elem.rebind(t.vulcanWrapper, 'touchmove', this._preventDefaultForTouchMove)
                }
            }, {
                key: 'cancelFakeFullscreen',
                value: function() {
                    var e = this.impl;
                    this._inFakeFullscreen = !1, this.onCancelFullscreen(e.chrome), this._chromeParent && this._chromeParent.appendChild(e.chrome), e.chrome.style.position = '', l['default'].util.scrollLeft(this._leftOffsetBeforeFullscreen), l['default'].eventLoop.remove(e.uuid + '.fakefullscreen'), e.engine && e.engine.onLeaveFullscreen(), null != this._preventDefaultForTouchMove && l['default'].elem.unbind(e.vulcanWrapper, 'touchmove', this._preventDefaultForTouchMove)
                }
            }, {
                key: 'transferStateFrom',
                value: function(e) {
                    var t = this,
                        n = e.behaviors && e.behaviors.fullscreen;
                    if (n)
                        for (var i in n) {
                            if (n.hasOwnProperty(i)) {
                                var a = n[i];
                                '_' === i[0] && 'function' != typeof a && (this[i] = a)
                            }
                            n._inFullscreen && function() {
                                var e = t.impl;
                                e.notFullscreen(function() {
                                    e.width(t._widthBeforeFullscreen), e.height(t._heightBeforeFullscreen)
                                })
                            }()
                        }
                }
            }, {
                key: 'inFullscreen',
                value: function() {
                    return !!this._inFullscreen
                }
            }, {
                key: 'inNativeFullscreen',
                value: function() {
                    return !!this._nativeFullscreen
                }
            }]), t
        }(s.PlayerBehavior);
    h.handle = 'fullscreen', l['default']._onFullscreenChange || (l['default']._onFullscreenChange = function() {
        l['default'].elem.fullscreenElement() ? l['default'].trigger('enter-fullscreen', l['default'].elem.fullscreenElement()) : l['default'].trigger('cancel-fullscreen')
    }, l['default']._initializers.initFullscreenTriggers = function() {
        l['default'].elem.rebind(document, 'mozfullscreenchange', l['default']._onFullscreenChange), l['default'].elem.rebind(document, 'webkitfullscreenchange', l['default']._onFullscreenChange), l['default'].elem.rebind(document, 'MSFullscreenChange', l['default']._onFullscreenChange), l['default'].elem.rebind(document, 'fullscreenchange', l['default']._onFullscreenChange)
    }, l['default']._destructors.destroyFullscreenTriggers = function() {
        l['default'].elem.unbind(document, 'mozfullscreenchange', l['default']._onFullscreenChange), l['default'].elem.unbind(document, 'webkitfullscreenchange', l['default']._onFullscreenChange), l['default'].elem.unbind(document, 'MSFullscreenChange', l['default']._onFullscreenChange), l['default'].elem.unbind(document, 'fullscreenchange', l['default']._onFullscreenChange)
    });
    t['default'] = h;
}, function(e, t, n) {
    'use strict';
    n.r(t);
    var l = n(2),
        s = n(309),
        d = function() {
            function e(e, t) {
                for (var n, a = 0; a < t.length; a++) n = t[a], n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }();

    function i(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
    }

    function a(e, t) {
        if (!e) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return t && ('object' == typeof t || 'function' == typeof t) ? t : e
    }

    function r(e, t) {
        if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function, not ' + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    var p = function(e) {
        function t() {
            var e, n, r, l;
            i(this, t);
            for (var s = arguments.length, d = Array(s), p = 0; p < s; p++) d[p] = arguments[p];
            return l = (n = (r = a(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(d))), r), r.onEnd = function() {
                'reset' === r.impl._opts.endVideoBehavior && r.resetToFirstFrame()
            }, n), a(r, l)
        }
        return r(t, e), d(t, [{
            key: 'init',
            value: function() {
                this.unbinds.push(this.impl.on('end', this.onEnd))
            }
        }, {
            key: 'resetToFirstFrame',
            value: function() {
                var e = this.impl;
                e.info('resetToFirstFrame'), e.commandQueueOpen(function() {
                    e.engine.reset(), e.behaviors.relayEvents.resetState()
                })
            }
        }]), t
    }(s.PlayerBehavior);
    p.handle = 'endVideoBehavior';
    t['default'] = p;
}, function(e, t, n) {
    'use strict';
    n.r(t);
    var l = n(2),
        s = n(317),
        d = n(319),
        p = n(320),
        u = n(323),
        c = n(116),
        m = n(309),
        g = Object.assign || function(e) {
            for (var t, n = 1; n < arguments.length; n++)
                for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e
        },
        y = function() {
            function e(e, t) {
                for (var n, a = 0; a < t.length; a++) n = t[a], n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }(),
        f = function e(t, n, i) {
            null === t && (t = Function.prototype);
            var a = Object.getOwnPropertyDescriptor(t, n);
            if (a === void 0) {
                var r = Object.getPrototypeOf(t);
                return null === r ? void 0 : e(r, n, i)
            }
            if ('value' in a) return a.value;
            var l = a.get;
            return void 0 === l ? void 0 : l.call(i)
        };

    function i(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
    }

    function a(e, t) {
        if (!e) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return t && ('object' == typeof t || 'function' == typeof t) ? t : e
    }

    function r(e, t) {
        if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function, not ' + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    var _ = l['default'].lib('promiscuous'),
        b = l['default'].lib('utilities/seqid'),
        v = l['default'].lib('preact'),
        A = v.h,
        h = v.render,
        w = v.Component,
        k = l['default'].lib('player/lib/fit-control'),
        E = k.controlMultiplierBasedOnVideo,
        C = l['default'].lib('utilities/detect'),
        S = C.cachedDetect,
        P = l['default'].lib('player/lib/timeout-utils'),
        T = P.doTimeout,
        I = P.clearTimeouts,
        x = l['default'].lib('utilities/obj'),
        D = x.assign,
        B = x.clone,
        F = l['default'].lib('player/lib/elem'),
        O = F.addInlineCss,
        M = F.elemBind,
        L = F.elemUnbind,
        N = F.elemIsInside,
        W = F.elemOffset,
        R = F.elemRemove,
        H = F.elemStyle,
        j = F.formInputIsFocused,
        V = S(),
        U = 34,
        z = 40,
        G = 16,
        Q = function(e) {
            function t() {
                var e, n, r, s;
                i(this, t);
                for (var d = arguments.length, p = Array(d), u = 0; u < d; u++) p[u] = arguments[u];
                return s = (n = (r = a(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(p))), r), r.onFocusIn = function(t) {
                    if (!V.trident) {
                        if ((Object(c['default'])() || r._isMouseDownFromTouch) && t.srcElement === r.vulcanWrapper) return void t.srcElement.blur();
                        var e = r.isKeyboardFocused;
                        r.isKeyboardFocused = !(Object(c['default'])() || r._isMouseDownFromTouch), !e && r.isKeyboardFocused && (r.impl.trigger('focusin', t), r.maybeToggleControls(), r.impl.enterInputContext('player-focus'))
                    }
                }, r.onFocusOut = function(t) {
                    V.trident || (r.isKeyboardFocused ? T(r.impl.uuid + '.maybe_toggle_on_blur', function() {
                        document.activeElement && N(document.activeElement, r.vulcanWrapper) || (r.isKeyboardFocused = !1, r.impl.trigger('focusout', t), r.impl.exitInputContext('player-focus'), r.maybeToggleControls())
                    }, 1e3) : T(r.impl.uuid + '.maybe_toggle_on_blur', r.maybeToggleControls, 50))
                }, r.onMouseEnter = function(t) {
                    r.impl.trigger('mouseenter', t), r.isHovering = !0, r.maybeToggleControls(), r.impl.enterInputContext('player-mouseover')
                }, r.onMouseLeave = function(t) {
                    r.impl.trigger('mouseleave', t), r.isHovering = !1, r.maybeToggleControls(), r.impl.exitInputContext('player-mouseover')
                }, r.onMouseMove = function(t) {
                    if (!V.touchScreen) {
                        var e = r.lastPageX !== t.pageX || r.lastPageY !== t.pageY;
                        e && (r.lastMovedMouseAt = Date.now(), r.lastPageX = t.pageX, r.lastPageY = t.pageY), e && (r.maybeToggleControls(), r.shouldShowControls() && (clearTimeout(r.maybeToggleControlsTimeout), N(t.target, r.backgroundElem) ? (r.lastMouseMoveWasFromBackground = !0, r.maybeToggleControlsTimeout = setTimeout(r.maybeToggleControls, r.showControlsTimeout())) : (r.lastMouseMoveWasFromBackground = !1, r.maybeToggleControls())))
                    }
                }, r.onClickOrTap = function(t) {
                    r.lastMovedMouseAt = Date.now(), r.lastPageX = t.pageX, r.lastPageY = t.pageY, N(t.target, r.backgroundElem) ? V.touchScreen ? ('beforeplay' === r.impl.state() ? r.impl.play() : r.isChromeless() ? r.togglePlay() : V.ios.version && 10.1 > V.ios.version ? (r.tappedToHide = !1, r.impl.play()) : r._areControlsVisible ? r.tappedToHide = !r.tappedToHide : r.tappedToHide = !1, r.maybeToggleControls(), setTimeout(r.maybeToggleControls, r.showControlsTimeout())) : r.togglePlay() : (r.tappedToHide = !1, r.maybeToggleControls(), setTimeout(r.maybeToggleControls, r.showControlsTimeout()))
                }, r.onDblClick = function(t) {
                    if (N(t.target, r.backgroundElem)) {
                        var e = r.impl;
                        r.impl.isControlEnabled('fullscreenButton') && (e.inFullscreen() ? e.cancelFullscreen() : e.requestFullscreen())
                    }
                }, r.onTouchStart = function() {
                    r._cancelSwipe = !r.impl.inFullscreen()
                }, r.onSwipe = function(t, e) {
                    if (!r._cancelSwipe) {
                        r._swipeCtx = e;
                        var n = r.impl,
                            i = n.height(),
                            a = n.width(),
                            s = e.absYDelta / i,
                            d = e.absXDelta / a;
                        if (175 < e.timeDelta && (0.02 > s || d > s)) return r._cancelSwipe = !0, void l['default'].elem.animate(n.chrome, {
                            transform: 'translate(0, 0)'
                        }, {
                            time: 200,
                            callback: function() {
                                l['default'].elem.animate(n.chrome, {
                                    transform: ''
                                })
                            }
                        });
                        if (0.02 <= s && s > d) {
                            var p = e.yDelta / i;
                            l['default'].elem.style(n.chrome, {
                                transform: 'translate(0, ' + -1 * p * i + 'px)'
                            })
                        }
                    }
                }, r.onPinch = function(t, e) {
                    if (r.impl.isControlEnabled('fullscreenButton')) {
                        r._pinchCtx = e;
                        var n, i, a = r.impl;
                        r.impl.inFullscreen() ? (n = 0.3, i = 2.5) : (n = .8, i = 2.5), e.pinchScale *= 1 > e.pinchScale ? 1 + 0.5 * (1 - e.pinchScale) : 1 + 0.25 * (e.pinchScale - 1);
                        var s = m(n, v(i, e.pinchScale));
                        l['default'].elem.style(a.chrome, {
                            transform: 'scale(' + s + ')'
                        })
                    }
                }, r.onTouchEnd = function() {
                    if (r.impl.isControlEnabled('fullscreenButton')) {
                        var e = r._pinchCtx,
                            t = r._swipeCtx;
                        r._pinchCtx = null, r._swipeCtx = null;
                        var n = r.impl;
                        if (e) !n.inFullscreen() && 1.5 < e.pinchScale ? (l['default'].elem.style(n.chrome, {
                            transform: ''
                        }), n.requestFullscreen()) : n.inFullscreen() && 0.7 > e.pinchScale ? (l['default'].elem.style(n.chrome, {
                            transform: ''
                        }), n.cancelFullscreen()) : l['default'].elem.animate(n.chrome, {
                            transform: 'scale(1)'
                        }, {
                            time: 400,
                            callback: function() {
                                l['default'].elem.style(n.chrome, {
                                    transform: ''
                                })
                            }
                        });
                        else if (t) {
                            var i = n.height(),
                                a = n.width(),
                                s = t.absYDelta / i,
                                d = t.absXDelta / a,
                                p = function() {
                                    l['default'].elem.style(n.chrome, {
                                        transform: ''
                                    })
                                };
                            if (0.16 < s && s > d && 500 > Date.now() - t.startedAt) {
                                r._cancelSwipe = !0;
                                var u = 0 < t.yDelta ? -1 : 1;
                                l['default'].elem.animate(n.chrome, {
                                    transform: 'translate(0, ' + u * i + 'px)'
                                }, {
                                    time: 200,
                                    callback: function() {
                                        n.cancelFullscreen(), p()
                                    }
                                })
                            } else r._cancelSwipe = !0, l['default'].elem.animate(n.chrome, {
                                transform: 'translate(0, 0)'
                            }, {
                                time: 200,
                                callback: p
                            })
                        }
                    }
                }, r.maybeToggleControls = function() {
                    if (!r._destroyed) {
                        var e = r._shouldShowControls;
                        return r._shouldShowControls = r.shouldShowControls(), e === r._shouldShowControls ? _.resolve() : r.lastRenderPromise.then(function() {
                            return r.render()
                        })
                    }
                }, r.mountRefsFn = function(e) {
                    D(r.mountRefs, e)
                }, r.backgroundRefFn = function(t) {
                    r.backgroundElem = t
                }, n), a(r, s)
            }
            var n = Math.round,
                m = Math.max,
                v = Math.min;
            return r(t, e), y(t, [{
                key: 'init',
                value: function() {
                    this.mountPromises = [], this.controls = {}, this.controlsByType = {}, this.dialogs = [], this.mountRefs = {}, this.buttonMountRefs = {}, this.lastRenderPromise = _.resolve(), this.domId || (this.domId = b('w-vulcan-v2-'))
                }
            }, {
                key: 'setupBindings',
                value: function() {
                    var e = this,
                        t = this.impl;
                    this.unbinds.push(t.on('play', function() {
                        e.doneWaitingForPlay = !0, e.tappedToHide = !1, e.render(), e.maybeToggleControls(), setTimeout(e.maybeToggleControls, e.showControlsTimeout())
                    }), t.on('pause', function() {
                        V.touchScreen && (e.tappedToHide = !1, e.maybeToggleControls())
                    }), t.on('playrejected', function() {
                        e.doneWaitingForPlay = !0, e.showVideoWrapper(), e.render()
                    }), t.on('enter-fullscreen', function() {
                        e._scale = null, e.cachedVideoHeight = null, e.cachedVideoWidth = null, e.render(), e.maybeToggleControls()
                    }), t.on('cancel-fullscreen', function() {
                        e._scale = null, e.cachedVideoHeight = null, e.cachedVideoWidth = null, e.render(), e.maybeToggleControls()
                    }), t.on('up', function() {
                        e._scale = null, e.cachedVideoHeight = null, e.cachedVideoWidth = null, e.render()
                    }), t.on('playerlanguagechange', function() {
                        e.render()
                    }), t.on('playercolorchange', function() {
                        e.render()
                    }), t.on('widthchange', function() {
                        e._scale = null, e.cachedVideoWidth = null, e.render()
                    }), t.on('heightchange', function() {
                        e._scale = null, e.cachedVideoHeight = null, e.render()
                    }), l['default'].on('controldefined', function() {
                        e.render()
                    }), M(document, 'keyup', function(n) {
                        j() || 'player-mouseover' === t.getInputContext() && !1 !== t._opts.hoverHotkeysEnabled && n.keyCode === 32 && e.togglePlay()
                    }), M(window, 'mouseout', function(t) {
                        var n = t.relatedTarget || t.toElement;
                        n && 'HTML' !== n.nodeName || (e.isHovering = !1, e.impl.exitInputContext('player-mouseover'))
                    }), M(document, 'touchend', function() {
                        Object(c['default'])() && (e._isMouseDownFromTouch = !0), setTimeout(function() {
                            e._isMouseDownFromTouch = !1, e.render()
                        }, 50)
                    })), t.whenVideoElementInDom().then(function() {
                        e.unbinds.push(e.impl.engine.bind('webkitplaybacktargetavailabilitychanged', function() {
                            setTimeout(function() {
                                e.render()
                            }, 0)
                        }))
                    })
                }
            }, {
                key: 'render',
                value: function() {
                    var e = this,
                        t = this.impl;
                    if (this._destroyed || !t.grid) return new _(function() {});
                    if (this._hasSetupBindings || (this._hasSetupBindings = !0, this.setupBindings()), this.cssResetStyle || (this.cssResetStyle = O(t.uiContainer, this.cssResetContent())), null == this.doneWaitingForPlay) {
                        var n = t._isPlayPending && 'beforeplay' === t.state();
                        this.doneWaitingForPlay = !n
                    }
                    return this.lastRenderPromise = new _(function(n) {
                        var i = e.setupControls(),
                            a = i.newControls,
                            r = i.existingControls;
                        e.setControlProps();
                        var l = null == e._shouldShowControls ? e.shouldShowControls() : e._shouldShowControls;
                        e._areControlsVisible = e._shouldShowControls;
                        e.vulcanWrapper = h(A(s['default'], {
                            afterRender: 0 < a.length ? function() {
                                e.afterRender(r, a, n)
                            } : null,
                            allMounted: e.allMounted,
                            backgroundRef: e.backgroundRefFn,
                            controlsByType: e.controlsByType,
                            domId: e.domId,
                            doneWaitingForPlay: e.doneWaitingForPlay,
                            fullControlBarHeight: e.fullControlBarHeight(),
                            inFullscreen: t.inFullscreen(),
                            inNativeMode: e.inNativeMode(),
                            isMouseDownFromTouch: e._isMouseDownFromTouch,
                            lowerControlBarHeight: e.lowerControlBarHeight(),
                            mountRefs: e.mountRefsFn,
                            onClickOrTap: e.onClickOrTap,
                            onDblClick: e.onDblClick,
                            onFocusIn: e.onFocusIn,
                            onFocusOut: e.onFocusOut,
                            onMouseEnter: e.onMouseEnter,
                            onMouseLeave: e.onMouseLeave,
                            onMouseMove: e.onMouseMove,
                            onPinch: e.onPinch,
                            onSwipe: e.onSwipe,
                            onTouchEnd: e.onTouchEnd,
                            onTouchStart: e.onTouchStart,
                            playbarMode: e.playbarMode(),
                            playerLanguage: t.playerLanguage(),
                            shouldShowControls: l,
                            upperControlBarHeight: e.upperControlBarHeight(),
                            videoHeight: e.videoHeight(),
                            videoState: t.state(),
                            videoWidth: e.videoWidth()
                        }), t.uiContainer, e.vulcanWrapper), 0 === a.length && e.afterRender(r, a, n)
                    })
                }
            }, {
                key: 'afterRender',
                value: function(e, t, n) {
                    var i = this;
                    if (!this._destroyed && this.impl.grid)
                        if (this.runOnControlPropsUpdated(e), this.renderButtons(e), this.mountControls(t), this.didFirstRender) n();
                        else {
                            this.didFirstRender = !0;
                            var a = new _(function(e) {
                                return T(i.impl.uuid + '.two_seconds_elapsed', e, 2e3)
                            });
                            this.allMountedPromise = _.race([a, _.all(this.mountPromises)]).catch(function(t) {
                                setTimeout(function() {
                                    throw t
                                }, 0)
                            }).then(function() {
                                i.allMounted = !0, i.render().then(n)
                            }), 0 === this.mountPromises.length && n(), this.doneWaitingForPlay ? this.allMountedPromise.then(function() {
                                i.showVideoWrapper()
                            }) : (T(this.impl.uuid + '.bail_on_autoplay', function() {
                                i.doneWaitingForPlay || (i.doneWaitingForPlay = !0, i.showVideoWrapper(), i.render())
                            }, 2e3), this.showVideoWrapperAfterInitialPlay())
                        }
                }
            }, {
                key: 'setControlProps',
                value: function() {
                    var e = this,
                        t = this.impl,
                        i = this.videoWidth(),
                        a = this.videoHeight(),
                        r = this.scale(),
                        l = t.playerLanguage(),
                        s = this.shouldShowControls(),
                        d = this.isChromeless(),
                        p = this.isHovering,
                        u = this.vulcOffset = W(t.grid.center),
                        c = this.bottomBarOffset = {
                            left: u.left,
                            top: u.top + this.videoHeight() - this.lowerControlBarHeight()
                        },
                        m = this.controlsByType['upper-playbar'] && this.controlsByType['upper-playbar'][0];
                    m && (m.__prevProps = m.props, m.props = {
                        chromeless: d,
                        scale: r,
                        videoWidth: i,
                        videoHeight: a,
                        controlsAreVisible: s,
                        playerLanguage: l,
                        width: i,
                        height: G * r,
                        left: 0,
                        top: c.top
                    });
                    var g = 0,
                        h = 0;
                    (this.controlsByType['control-bar-left'] || []).map(function(e) {
                        e.__prevProps = e.props, e.props = {
                            chromeless: d,
                            scale: r,
                            playerLanguage: l,
                            controlsAreVisible: s,
                            videoWidth: i,
                            videoHeight: a,
                            height: n((e.constructor.height || U) * r),
                            width: n((e.constructor.width || z) * r),
                            left: h
                        }, h += e.props.width, g += e.props.width
                    }), this.leftControlWidth = h, (this.controlsByType['control-bar-right'] || []).map(function(e) {
                        e.__prevProps = e.props, e.props = {
                            chromeless: d,
                            scale: r,
                            playerLanguage: l,
                            controlsAreVisible: s,
                            videoWidth: i,
                            videoHeight: a,
                            height: n((e.constructor.height || U) * r),
                            width: n((e.constructor.width || z) * r)
                        }, g += e.props.width
                    });
                    var y = 0;
                    (this.controlsByType['control-bar-right'] || []).slice().reverse().map(function(e) {
                        y += e.props.width, e.props.left = i - y
                    }), this.rightControlWidth = y;
                    var f = i - g,
                        _ = this.controlsByType['lower-playbar'] && this.controlsByType['lower-playbar'][0];
                    _ && (_.__prevProps = _.props, _.props = {
                        chromeless: d,
                        scale: r,
                        playerLanguage: l,
                        videoWidth: i,
                        videoHeight: a,
                        controlsAreVisible: s,
                        width: f,
                        height: this.lowerControlBarHeight(),
                        left: h
                    }), this.lowerPlaybarControlWidth = f;
                    var b = this.fullControlBarHeight();
                    ['background', 'foreground', 'left-flyout', 'above-control-bar', 'right-flyout'].map(function(t) {
                        (e.controlsByType[t] || []).map(function(e) {
                            e.__prevProps = e.props, e.props = {
                                playerLanguage: l,
                                chromeless: d,
                                scale: r,
                                videoHeight: a,
                                videoWidth: i,
                                controlBarHeight: b,
                                controlsAreVisible: s,
                                isHoveringOnPlayer: p
                            }
                        })
                    });
                    var v = this.playbarMode();
                    m ? (this.upperPlaybarControlHeight = 'upper' === this.playbarMode() ? m.props.height || 0 : 0, m.props.playbarMode = v) : this.upperPlaybarControlHeight = 0;
                    var A = c.top + this.upperPlaybarControlHeight;
                    this.eachButtonControl(function(e) {
                        e.props.top = A
                    }), _ && D(_.props, {
                        playbarMode: v,
                        top: A
                    })
                }
            }, {
                key: 'runOnControlPropsUpdated',
                value: function(e) {
                    e.forEach(function(e) {
                        e.constructor.type;
                        if ('function' == typeof e.onControlPropsUpdated) try {
                            e.onControlPropsUpdated(e.__prevProps || {})
                        } catch (t) {
                            setTimeout(function() {
                                throw t
                            }, 0)
                        }
                        e.__prevProps = null
                    })
                }
            }, {
                key: 'setupControls',
                value: function() {
                    var e = this,
                        t = this.impl,
                        n = !1,
                        i = [];
                    for (var a in this.controls) {
                        var r = this.controls[a],
                            s = r.constructor.shouldMount;
                        if (t.isControlDisabled(a) || s && !s(t.publicApi)) {
                            if (r.destroy) try {
                                r.destroy()
                            } catch (t) {
                                setTimeout(function() {
                                    throw t
                                }, 1)
                            }
                            delete this.mountRefs[a], delete this.buttonMountRefs[a], delete this.controls[K(r)], n = !0, i.push(r), t.trigger('controldestroyed', a)
                        }
                    }
                    var d = !1,
                        p = [],
                        u = [],
                        c = function(n) {
                            var i = l['default']._controlDefinitions[n],
                                a = null != e.controls[n],
                                r = !t.isControlDisabled(n) && (null == i.shouldMount || i.shouldMount(t.publicApi));
                            if (r && a && u.push(e.controls[n]), !a && r) {
                                try {
                                    var s = e.controls[n] = new i(t);
                                    s.mounted = new _(function(e) {
                                        s.__didMount = function() {
                                            s.mounted.isResolved = !0, t.trigger('controlmounted', n), e()
                                        }
                                    }), p.push(s)
                                } catch (t) {
                                    setTimeout(function() {
                                        throw t
                                    }, 1)
                                }
                                d = !0
                            }
                        };
                    for (var m in l['default']._controlDefinitions) c(m);
                    if (d || n) {
                        var g = {};
                        for (var h in this.eachControl(function(e) {
                                var t = e.constructor.type;
                                null == g[t] && (g[t] = []), g[t].push(e)
                            }), g) g[h].sort(function(e, t) {
                            return (e.constructor.sortValue || 0) - (t.constructor.sortValue || 0)
                        });
                        this.controlsByType = g, t.publicApi.controls = t.controls = this.controls
                    }
                    return {
                        newControls: p,
                        existingControls: u,
                        destroyedControls: i
                    }
                }
            }, {
                key: 'whenControlMounted',
                value: function(e) {
                    var t = this;
                    return new _(function(i) {
                        t.controls[e] ? i(t.controls[e]) : t.impl.bind('controlmounted', function(a) {
                            if (a === e) return i(t.controls[e]), t.impl.unbind
                        })
                    })
                }
            }, {
                key: 'mountControls',
                value: function(e) {
                    var t = this;
                    e.forEach(function(e) {
                        var n = e.constructor.type,
                            i = K(e),
                            a = t.mountRefs[i];
                        if (e.__nextControl || (e.__nextControl = function() {
                                return t.getControlAfter(e)
                            }), e.loading || (e.loading = function(i) {
                                var a = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                                return 'control-bar-right' === n ? t.renderButtonWithDialogLoader(e, i) : t.renderHourglassLoader(i, a)
                            }), 'control-bar-left' !== n && 'control-bar-right' !== n) t.mountControl(e, function() {
                            return e.mount(a)
                        });
                        else if (e.mountButton) {
                            var r = t.renderButtonWithDialog(e);
                            t.mountControl(e, function() {
                                return e.mountButton(r)
                            })
                        } else e.mount && t.mountControl(e, function() {
                            return e.mount(a)
                        })
                    })
                }
            }, {
                key: 'mountControl',
                value: function(e, t) {
                    try {
                        var n = K(e),
                            i = t();
                        i && i.then && i.catch ? (i.handle = n, this.mountPromises.push(i), i.then(function() {
                            e.__didMount()
                        })) : e.__didMount()
                    } catch (t) {
                        setTimeout(function() {
                            throw t
                        }, 0)
                    }
                }
            }, {
                key: 'renderButtons',
                value: function(e) {
                    var t = this;
                    e.forEach(function(e) {
                        e.mountButton && t.renderButtonWithDialog(e)
                    })
                }
            }, {
                key: 'renderButtonWithDialog',
                value: function(t) {
                    var e = this,
                        n = K(t);
                    try {
                        t.mountDialog && !t.dialog && (t.dialog = new d['default'](this, {
                            dialogWillOpen: q(t.controlDialogWillOpen, t),
                            dialogOpened: q(t.controlDialogOpened, t),
                            dialogWillClose: q(t.controlDialogWillClose, t),
                            dialogClosed: q(t.controlDialogClosed, t),
                            control: t
                        }), this.dialogs.push(t.dialog))
                    } catch (t) {
                        setTimeout(function() {
                            throw t
                        }, 0)
                    }
                    t.setButtonLabel || (t.setButtonLabel = function(n) {
                        t.__buttonLabel = n, e.renderButtonWithDialog(t)
                    });
                    var i;
                    return this.buttonMountRefs[n] = h(A(p['default'], g({}, t.props, {
                        buttonLabel: t.__buttonLabel,
                        color: this.impl.playerColor(),
                        key: n + '_button_and_dialog',
                        control: t,
                        stubRef: function(t) {
                            return i = t
                        },
                        buttonRef: function(n) {
                            t.buttonElement = n
                        },
                        closeDialogOnFocusOut: this.impl._opts.closeDialogsOnFocusOut
                    })), this.mountRefs[n], this.buttonMountRefs[n]), i
                }
            }, {
                key: 'renderButtonWithDialogLoader',
                value: function(e, t) {
                    var n = this;
                    return new _(function(i) {
                        var a = n.impl.uuid + '.loading_dialog_indicator.' + b();
                        T(a, function() {
                            n.setLoadingDialogAndRender(e, !0), V.touchScreen ? M(document, 'touchstart', function() {
                                try {
                                    n.setLoadingDialogAndRender(e, !1)
                                } catch (t) {
                                    setTimeout(function() {
                                        throw t
                                    }, 0)
                                }
                                return i(), L
                            }) : M(document, 'mousedown', function() {
                                try {
                                    n.setLoadingDialogAndRender(e, !1)
                                } catch (t) {
                                    setTimeout(function() {
                                        throw t
                                    }, 0)
                                }
                                return i(), L
                            })
                        }, 300), t.then(function() {
                            I(a), n.setLoadingDialogAndRender(e, !1), i()
                        })
                    })
                }
            }, {
                key: 'setLoadingDialogAndRender',
                value: function(e, t) {
                    e.__isDialogLoading = t, this.renderButtonWithDialog(e)
                }
            }, {
                key: 'renderHourglassLoader',
                value: function(e, t) {
                    var n = this;
                    return new _(function(i) {
                        var a = n.impl.uuid + '.loading_indicator.' + b();
                        T(a, function() {
                            n.controls.loadingHourglass.show(t), V.touchScreen ? M(document, 'touchstart', function() {
                                try {
                                    n.controls.loadingHourglass.hide()
                                } catch (t) {
                                    setTimeout(function() {
                                        throw t
                                    }, 0)
                                }
                                return i(), L
                            }) : M(document, 'mousedown', function() {
                                try {
                                    n.controls.loadingHourglass.hide()
                                } catch (t) {
                                    setTimeout(function() {
                                        throw t
                                    }, 0)
                                }
                                return i(), L
                            })
                        }, 300), e.then(function() {
                            I(a), n.controls.loadingHourglass.hide(), i()
                        })
                    })
                }
            }, {
                key: 'eachControl',
                value: function(e) {
                    for (var t in this.controls) e(this.controls[t])
                }
            }, {
                key: 'eachButtonControl',
                value: function(e) {
                    var t = (this.controlsByType['control-bar-left'] || []).concat(this.controlsByType['control-bar-right'] || []);
                    t.forEach(e)
                }
            }, {
                key: 'playbarMode',
                value: function() {
                    return 260 > this.spaceForLowerPlaybar() ? 'upper' : 'lower'
                }
            }, {
                key: 'spaceForLowerPlaybar',
                value: function() {
                    var e = 0;
                    return this.eachButtonControl(function(t) {
                        e += t.props.width
                    }), this.videoWidth() - e
                }
            }, {
                key: 'lowerControlBarHeight',
                value: function() {
                    return n(U * this.scale())
                }
            }, {
                key: 'upperControlBarHeight',
                value: function() {
                    return this.impl.isControlEnabled('upperPlaybar') ? 'upper' === this.playbarMode() ? n(G * this.scale()) : 0 : 0
                }
            }, {
                key: 'fullControlBarHeight',
                value: function() {
                    var e = this.impl;
                    return 'beforeplay' === e.state() && !e._opts.controlsVisibleOnLoad || this.isChromeless() ? 0 : this.lowerControlBarHeight() + this.upperControlBarHeight()
                }
            }, {
                key: 'shouldShowControls',
                value: function() {
                    var e, t = this.impl;
                    return e = !this.isChromeless() && ('beforeplay' === t.state() && this.doneWaitingForPlay ? null == t._opts.controlsVisibleOnLoad || !0 === t._opts.controlsVisibleOnLoad : !!this.hasRequestedControlsVisible() || (V.touchScreen ? !this.tappedToHide && ('playing' !== t.state() || this.anyDialogOpen() || this.lastMovedMouseAt && 3e3 > Date.now() - this.lastMovedMouseAt && this.lastMovedMouseAt > t.lastPlayInfo().issuedAt) : !!this.anyDialogOpen() || !!this.isKeyboardFocused || (t.inFullscreen() || this.isHovering) && (this.lastMovedMouseAt && 3e3 > Date.now() - this.lastMovedMouseAt || !this.lastMouseMoveWasFromBackground))), e
                }
            }, {
                key: 'hasRequestedControlsVisible',
                value: function() {
                    var e = this.impl._visibilityRequests;
                    for (var t in e)
                        if (e[t]) return !0;
                    return !1
                }
            }, {
                key: 'showControlsTimeout',
                value: function() {
                    return this.impl.inFullscreen() || V.touchScreen ? 3e3 : 5e3
                }
            }, {
                key: 'togglePlay',
                value: function() {
                    var e = this.impl;
                    'playing' === e.state() ? e.pause() : e.play()
                }
            }, {
                key: 'showVideoWrapperAfterInitialPlay',
                value: function() {
                    var e = this;
                    this.impl.ready(function() {
                        var t = [e.impl._playPromise, e.impl._seekPromise].filter(function(e) {
                            return null != e
                        });
                        return _.all(t).then(function() {
                            e.showVideoWrapper()
                        })
                    })
                }
            }, {
                key: 'showVideoWrapper',
                value: function() {
                    H(this.impl.videoWrapper, {
                        clip: ''
                    })
                }
            }, {
                key: 'anyDialogOpen',
                value: function() {
                    for (var e in this.controls) {
                        var t = this.controls[e];
                        if (t.dialog && !t.constructor.toggleDialogOnHover && t.dialog.isOpen()) return !0
                    }
                    return !1
                }
            }, {
                key: 'openDialog',
                value: function(e) {
                    this.dialogs.map(function(t) {
                        t !== e && t.close()
                    }), this.render()
                }
            }, {
                key: 'closeDialog',
                value: function() {
                    this.render()
                }
            }, {
                key: 'resizeDialog',
                value: function() {
                    this.render()
                }
            }, {
                key: 'videoWidth',
                value: function() {
                    return null == this.cachedVideoWidth ? this.cachedVideoWidth = this.impl.videoWidth() : this.cachedVideoWidth
                }
            }, {
                key: 'videoHeight',
                value: function() {
                    return null == this.cachedVideoHeight ? this.cachedVideoHeight = this.impl.videoHeight() : this.cachedVideoHeight
                }
            }, {
                key: 'scale',
                value: function() {
                    return null == this._scale ? 'auto' === this.impl.controlScaling() ? this._scale = v(1.3, m(0.6, E(this.impl))) : this.impl.controlScaling() : this._scale
                }
            }, {
                key: 'destroy',
                value: function() {
                    for (var e in this.buttonMountRefs) this.buttonMountRefs.hasOwnProperty(e) && h(A('nothing', null), this.mountRefs[e], this.buttonMountRefs[e]);
                    this.vulcanWrapper = h(A('nothing', null), this.impl.uiContainer, this.vulcanWrapper), this.eachControl(function(e) {
                        if (e.destroy) try {
                            e.destroy()
                        } catch (t) {
                            setTimeout(function() {
                                throw t
                            }, 0)
                        }
                    }), this.unbinds.forEach(function(e) {
                        return e()
                    }), R(this.vulcanWrapper), R(this.cssResetStyle), this.cssResetStyle = null;
                    var n = l['default'].lib('preact').components;
                    for (var i in n) n.hasOwnProperty(i) && delete n[i];
                    f(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), 'destroy', this).call(this)
                }
            }, {
                key: 'getControlAfter',
                value: function(e) {
                    var t = e.constructor.type,
                        n = this.controlsByType[t],
                        i = n.indexOf(e),
                        a = n[i + 1];
                    return 'control-bar-left' === t && (!a && this.controlsByType['lower-playbar'] && (a = this.controlsByType['lower-playbar'][0]), !a && this.controlsByType['control-bar-right'] && (a = this.controlsByType['control-bar-right'][0])), a
                }
            }, {
                key: 'hasAnyVideoChromeControls',
                value: function() {
                    for (var e in this.controls) {
                        var t = this.controls[e];
                        if (t.constructor.isVideoChrome) return !0
                    }
                    return !1
                }
            }, {
                key: 'hasRequestedChromeless',
                value: function() {
                    var e = this.impl._visibilityRequests;
                    for (var t in e)
                        if (!1 === e[t]) return !0;
                    return !1
                }
            }, {
                key: 'isChromeless',
                value: function() {
                    return this.inNativeMode() || this.impl._opts.chromeless || this.hasRequestedChromeless() || !this.hasAnyVideoChromeControls()
                }
            }, {
                key: 'inNativeMode',
                value: function() {
                    var e = this.impl._opts;
                    return !0 === e.nativeMode || V.ipad && V.ios.version && 10.1 > V.ios.version || !1 === e.playsinline && (V.ipad || V.iphone || V.android) && !/two_stroke/.test(this.impl.bestEngine())
                }
            }, {
                key: 'cssResetContent',
                value: function() {
                    var e = '#' + this.impl.chrome.id + ' #' + this.impl.grid.wrapper.id,
                        t = Object(u.cssResetForSelector)(e + ' ', '.w-css-reset'),
                        n = Object(u.cssResetForSelector)(e + ' .w-css-reset-tree ', '');
                    return '\n      ' + t + '\n      ' + n + '\n      ' + e + ' .w-css-reset-max-width-none-important{max-width:none!important}\n      ' + e + ' .w-css-reset-button-important{border-radius:0!important;color:#fff!important;}\n    '
                }
            }, {
                key: 'hasRendered',
                value: function() {
                    return !!this.allMounted
                }
            }]), t
        }(m.PlayerBehavior);
    Q.handle = 'ui';
    var q = function(e, t) {
            return e ? e.bind(t) : null
        },
        K = function(e) {
            return e.constructor.handle
        };
    t['default'] = Q;
}, function(e, t, n) {
    'use strict';
    n.r(t);
    var l = n(2),
        s = n(318),
        d = n(117),
        p = n(116),
        u = function() {
            function e(e, t) {
                for (var n, a = 0; a < t.length; a++) n = t[a], n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }();

    function i(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
    }

    function a(e, t) {
        if (!e) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return t && ('object' == typeof t || 'function' == typeof t) ? t : e
    }

    function r(e, t) {
        if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function, not ' + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    var c = l['default'].lib('preact'),
        m = c.h,
        g = c.render,
        h = c.Component,
        y = l['default'].lib('player/translations'),
        f = y.getTranslation,
        _ = l['default'].lib('utilities/detect'),
        b = _.cachedDetect,
        v = l['default'].lib('player/lib/elem'),
        A = v.elemHasClass,
        w = v.elemAncestorHasClass,
        k = b(),
        E = function(e) {
            function t(e) {
                i(this, t);
                var n = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return n.onFocus = function() {
                    n.props.isMouseDownFromTouch || Object(p['default'])() || n.setState({
                        isKeyboardFocused: !0
                    })
                }, n.onBlur = function() {
                    n.state.isKeyboardFocused && n.setState({
                        isKeyboardFocused: !1
                    })
                }, n.onFocusIn = function(t) {
                    n.props.onFocusIn && n.props.onFocusIn(t)
                }, n.onFocusOut = function(t) {
                    n.props.onFocusOut && n.props.onFocusOut(t)
                }, n.onClick = function(t) {
                    if (C(t) && t.preventDefault(), n.props.onClick) return n.props.onClick(t)
                }, n.onTouchEnd = function(t) {
                    if (n.props.onTouchEnd) return n.props.onTouchEnd(t)
                }, n.state = {
                    areControlsOpaque: e.shouldShowControls,
                    areControlsDisplayNone: !e.shouldShowControls,
                    isKeyboardFocused: !1
                }, n
            }
            return r(t, e), u(t, [{
                key: 'componentWillReceiveProps',
                value: function(e) {
                    this.handleControlBarAnimation(e)
                }
            }, {
                key: 'render',
                value: function() {
                    var t = this;
                    return this.mountRefs = {}, m(d['default'], {
                        class: 'w-vulcan-v2 w-css-reset',
                        style: this.wrapperStyle(),
                        onFocus: this.onFocus,
                        onBlur: this.onBlur,
                        onFocusIn: this.props.onFocusIn,
                        onFocusOut: this.props.onFocusOut,
                        onMouseEnter: this.props.onMouseEnter,
                        onMouseLeave: this.props.onMouseLeave,
                        onMouseMove: this.props.onMouseMove,
                        onClickOrTap: this.props.onClickOrTap,
                        onDblClick: this.props.onDblClick,
                        onSwipe: this.props.onSwipe,
                        onPinch: this.props.onPinch,
                        onTouchStart: this.props.onTouchStart,
                        onTouchMove: this.props.onTouchMove,
                        onTouchEnd: this.onTouchEnd,
                        onClick: this.onClick,
                        id: this.props.domId,
                        role: 'region',
                        "aria-label": this.t('TITLE'),
                        tabindex: 0
                    }, m('div', {
                        class: 'w-vulcan--background w-css-reset',
                        style: this.backgroundStyle(),
                        ref: this.props.backgroundRef
                    }, this.renderControlCells('background')), m('div', {
                        class: 'w-vulcan-overlays-table w-css-reset',
                        style: this.layoutTableStyle()
                    }, m('div', {
                        class: 'w-vulcan-overlays--left w-css-reset',
                        style: this.tdLeftStyle()
                    }, m('div', {
                        style: this.tdLayoutInnerStyle(),
                        class: 'w-css-reset'
                    }, this.renderControlCells('left-flyout', {
                        height: '100%',
                        pointerEvents: 'auto'
                    }))), m('div', {
                        class: 'w-vulcan-overlays--center w-css-reset',
                        style: this.tdCenterStyle()
                    }, m('div', {
                        style: this.tdLayoutInnerStyle(),
                        class: 'w-css-reset'
                    }, this.renderControlCells('above-control-bar', {
                        pointerEvents: 'auto'
                    }))), m('div', {
                        class: 'w-vulcan-overlays--right w-css-reset',
                        style: this.tdRightStyle()
                    }, m('div', {
                        style: this.tdLayoutInnerStyle(),
                        class: 'w-css-reset'
                    }, this.renderControlCells('right-flyout', {
                        height: '100%',
                        pointerEvents: 'auto'
                    })))), m('div', {
                        class: 'w-bottom-bar w-css-reset',
                        style: this.bottomBarStyle(),
                        ref: function(n) {
                            return t.bottomBar = n
                        }
                    }, m('div', {
                        class: 'w-bottom-bar-upper w-css-reset',
                        style: this.upperPlaybarStyle()
                    }, this.renderControlCells('upper-playbar', {
                        height: '100%'
                    })), m('div', {
                        class: 'w-bottom-bar-lower w-css-reset'
                    }, m('div', {
                        class: 'w-bottom-bar-left w-css-reset',
                        style: this.bottomBarLeftStyle()
                    }, m('div', {
                        class: 'w-bottom-bar-left-inner w-css-reset',
                        style: this.bottomBarLeftInnerStyle()
                    }, this.renderControlCells('control-bar-left', {
                        display: 'inline-block',
                        verticalAlign: 'top'
                    }))), m('div', {
                        class: 'w-bottom-bar-middle w-css-reset',
                        style: this.bottomBarMiddleStyle()
                    }, m('div', {
                        class: 'w-bottom-bar-middle-inner w-css-reset',
                        style: this.bottomBarMiddleInnerStyle()
                    }, this.renderControlCells('lower-playbar', {
                        height: '100%'
                    }))), m('div', {
                        class: 'w-bottom-bar-right w-css-reset',
                        style: this.bottomBarRightStyle()
                    }, m('div', {
                        class: 'w-bottom-bar-right-inner w-css-reset',
                        style: this.bottomBarRightInnerStyle()
                    }, this.renderControlCells('control-bar-right', {
                        display: 'inline-block',
                        verticalAlign: 'top'
                    }))))), m('div', {
                        class: 'w-foreground w-css-reset',
                        style: this.foregroundStyle()
                    }, this.renderControlCells('foreground', {
                        pointerEvents: 'auto'
                    })), m('div', {
                        class: 'w-focus-border',
                        style: this.focusBorderStyle()
                    }))
                }
            }, {
                key: 'componentDidMount',
                value: function() {
                    this.props.mountRefs && this.props.mountRefs(this.mountRefs), this.props.afterRender && this.props.afterRender()
                }
            }, {
                key: 'componentDidUpdate',
                value: function() {
                    var e = this.props.mountRefs,
                        t = this.mountRefs,
                        n = this.props.afterRender;
                    setTimeout(function() {
                        e && e(t), n && n()
                    }, 1)
                }
            }, {
                key: 'wrapperStyle',
                value: function() {
                    var e = this.props.inFullscreen && !this.props.shouldShowControls;
                    return {
                        boxSizing: 'border-box',
                        cursor: e ? 'none' : 'default',
                        height: '100%',
                        left: 0,
                        pointerEvents: this.props.inNativeMode ? 'none' : '',
                        position: 'absolute',
                        visibility: this.props.allMounted && this.props.doneWaitingForPlay ? 'visible' : 'hidden',
                        top: 0,
                        width: '100%'
                    }
                }
            }, {
                key: 'foregroundStyle',
                value: function() {
                    return {
                        height: '100%',
                        left: 0,
                        pointerEvents: 'none',
                        position: 'absolute',
                        top: 0,
                        width: '100%'
                    }
                }
            }, {
                key: 'backgroundStyle',
                value: function() {
                    return {
                        height: '100%',
                        left: 0,
                        pointerEvents: this.props.inNativeMode ? 'none' : '',
                        position: 'absolute',
                        top: 0,
                        width: '100%'
                    }
                }
            }, {
                key: 'layoutTableStyle',
                value: function() {
                    return {
                        display: 'table',
                        pointerEvents: 'none',
                        position: 'absolute',
                        width: '100%'
                    }
                }
            }, {
                key: 'tdLeftStyle',
                value: function() {
                    return this.standardCellStyle(0)
                }
            }, {
                key: 'tdCenterStyle',
                value: function() {
                    return this.standardCellStyle('100%')
                }
            }, {
                key: 'tdRightStyle',
                value: function() {
                    return this.standardCellStyle(0)
                }
            }, {
                key: 'tdLayoutInnerStyle',
                value: function() {
                    return {
                        height: this.props.videoHeight - this.props.fullControlBarHeight + 'px'
                    }
                }
            }, {
                key: 'upperPlaybarStyle',
                value: function() {
                    return 'upper' === this.props.playbarMode ? {
                        display: 'block',
                        height: this.props.upperControlBarHeight
                    } : {
                        display: 'none'
                    }
                }
            }, {
                key: 'bottomBarStyle',
                value: function() {
                    return {
                        bottom: 0,
                        borderCollapse: 'collapse',
                        display: this.state.areControlsDisplayNone ? 'none' : 'table',
                        height: this.props.fullControlBarHeight + 'px',
                        left: 0,
                        opacity: this.state.areControlsOpaque ? 1 : 0,
                        pointerEvents: 'none',
                        position: 'absolute',
                        tableLayout: 'auto',
                        transition: k.trident ? 'none' : 'opacity ' + ('beforeplay' === this.props.videoState ? 0 : 0.2) + 's',
                        width: '100%'
                    }
                }
            }, {
                key: 'bottomBarLeftStyle',
                value: function() {
                    return this.standardCellStyle(0)
                }
            }, {
                key: 'bottomBarLeftInnerStyle',
                value: function() {
                    return this.standardInnerStyle()
                }
            }, {
                key: 'bottomBarMiddleStyle',
                value: function() {
                    return this.standardCellStyle('100%')
                }
            }, {
                key: 'bottomBarMiddleInnerStyle',
                value: function() {
                    return this.standardInnerStyle()
                }
            }, {
                key: 'bottomBarRightStyle',
                value: function() {
                    return this.standardCellStyle(0)
                }
            }, {
                key: 'bottomBarRightInnerStyle',
                value: function() {
                    return this.standardInnerStyle()
                }
            }, {
                key: 'standardCellStyle',
                value: function(e) {
                    return {
                        display: 'table-cell',
                        verticalAlign: 'top',
                        position: 'relative',
                        width: e
                    }
                }
            }, {
                key: 'standardInnerStyle',
                value: function() {
                    return {
                        height: this.props.lowerControlBarHeight,
                        position: 'relative',
                        whiteSpace: 'nowrap'
                    }
                }
            }, {
                key: 'focusBorderStyle',
                value: function() {
                    return {
                        border: '2px solid #fff',
                        boxSizing: 'border-box',
                        display: this.state.isKeyboardFocused ? 'block' : 'none',
                        height: '100%',
                        left: 0,
                        pointerEvents: 'none',
                        position: 'absolute',
                        top: 0,
                        width: '100%'
                    }
                }
            }, {
                key: 'renderControlCells',
                value: function(e) {
                    var t = this,
                        n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                    return (this.props.controlsByType[e] || []).map(function(e) {
                        var i = e.constructor.handle;
                        return n.pointerEvents = 'auto', m(s['default'], {
                            mount: function(n) {
                                return t.mountRefs[i] = n
                            },
                            key: i,
                            style: n,
                            handle: i,
                            class: 'w-css-reset'
                        })
                    })
                }
            }, {
                key: 'handleControlBarAnimation',
                value: function(e) {
                    var t = this;
                    e.shouldShowControls && !this.props.shouldShowControls && (clearTimeout(this.displayNoneTimeout), this.setState({
                        areControlsDisplayNone: !1
                    }, function() {
                        setTimeout(function() {
                            t.setState({
                                areControlsOpaque: !0
                            })
                        }, 1)
                    })), !e.shouldShowControls && this.props.shouldShowControls && this.setState({
                        areControlsOpaque: !1
                    }, function() {
                        clearTimeout(t.displayNoneTimeout), t.displayNoneTimeout = setTimeout(function() {
                            t.setState({
                                areControlsDisplayNone: !0
                            })
                        }, k.trident ? 0 : 200)
                    })
                }
            }, {
                key: 't',
                value: function(e) {
                    return f(this.props.playerLanguage, 'LAYOUT_' + e)
                }
            }]), t
        }(h),
        C = function(t) {
            return t.target && (A(t.target, 'w-vulcan-v2-button') || w(t.target, 'w-vulcan-v2-button'))
        };
    t['default'] = E;
}, function(e, t, n) {
    'use strict';
    n.r(t);
    var l = n(2),
        s = function() {
            function e(e, t) {
                for (var n, a = 0; a < t.length; a++) n = t[a], n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }();

    function i(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
    }

    function a(e, t) {
        if (!e) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return t && ('object' == typeof t || 'function' == typeof t) ? t : e
    }

    function r(e, t) {
        if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function, not ' + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    var d = l['default'].lib('preact'),
        p = d.h,
        u = d.render,
        c = d.Component,
        m = function(e) {
            function t() {
                return i(this, t), a(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            }
            return r(t, e), s(t, [{
                key: 'shouldComponentUpdate',
                value: function() {
                    return !1
                }
            }, {
                key: 'render',
                value: function() {
                    var e = this.props;
                    return p('div', {
                        class: e.class || 'w-html-stub',
                        style: e.style,
                        ref: e.stubRef,
                        "data-handle": e.handle
                    })
                }
            }, {
                key: 'componentDidMount',
                value: function() {
                    var e = this.props.mount;
                    e && e(this.base)
                }
            }, {
                key: 'componentWillUnmount',
                value: function() {
                    var e = this.props.destroy;
                    e && e()
                }
            }]), t
        }(c);
    l['default'].define('vulcanV2Video/ui_components/RawHTMLStub.js', m);
    t['default'] = m;
}, function(e, t, n) {
    'use strict';
    n.r(t);
    var a = n(2),
        r = function() {
            function e(e, t) {
                for (var n, a = 0; a < t.length; a++) n = t[a], n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }();

    function i(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
    }
    var l = a['default'].lib('promiscuous'),
        s = a['default'].lib('utilities/bindify'),
        d = s.bindify,
        p = function() {
            function e(t) {
                var n = this,
                    a = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                i(this, e), this.dialogWillOpen = function() {
                    return new l(function(e) {
                        if (n.config.dialogWillOpen) {
                            var t = n.config.dialogWillOpen();
                            if (t && t.then) return void t.then(e)
                        }
                        e()
                    })
                }, this.doOpen = function() {
                    return new l(function(e) {
                        n._isOpen ? e() : (n._isOpen = !0, n._hasOpened = !0, n.ui.openDialog(n), setTimeout(e, 170))
                    })
                }, this.dialogOpened = function() {
                    return new l(function(e) {
                        n.config.dialogOpened && n.config.dialogOpened(), e()
                    })
                }, this.close = function() {
                    return n.control.mounted.then(function() {
                        return n.isOpen() ? n.dialogWillClose().then(n.doClose).then(n.dialogClosed) : l.resolve()
                    })
                }, this.dialogWillClose = function() {
                    return new l(function(e) {
                        if (n.config.dialogWillClose) {
                            var t = n.config.dialogWillClose();
                            if (t && t.then) return void t.then(e)
                        }
                        e()
                    })
                }, this.doClose = function() {
                    return new l(function(e) {
                        n._isOpen ? (n._isOpen = !1, n.ui.closeDialog(n), setTimeout(e, 200)) : e()
                    })
                }, this.dialogClosed = function() {
                    return new l(function(e) {
                        n.config.dialogClosed && n.config.dialogClosed(), e()
                    })
                }, this.ui = t, this.config = a, this._isOpen = !1, this._hasOpened = !1, this.control = a.control
            }
            return r(e, [{
                key: 'open',
                value: function() {
                    var e = this;
                    return this.control.mounted.then(function() {
                        return e.isOpen() ? l.resolve() : e.dialogWillOpen().then(e.doOpen).then(e.dialogOpened)
                    })
                }
            }, {
                key: 'isOpen',
                value: function() {
                    return this._isOpen
                }
            }, {
                key: 'hasOpened',
                value: function() {
                    return this._hasOpened
                }
            }, {
                key: 'resize',
                value: function() {
                    this._resizeRequestedAt = Date.now(), this.ui.resizeDialog(this)
                }
            }]), e
        }();
    d(p.prototype);
    t['default'] = p;
}, function(e, t, n) {
    'use strict';
    n.r(t);
    var l = n(2),
        s = n(318),
        d = n(321),
        p = n(322),
        u = function() {
            function e(e, t) {
                for (var n, a = 0; a < t.length; a++) n = t[a], n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }();

    function i(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
    }

    function a(e, t) {
        if (!e) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return t && ('object' == typeof t || 'function' == typeof t) ? t : e
    }

    function r(e, t) {
        if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function, not ' + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    var c = l['default'].lib('player/lib/elem'),
        m = c.elemBind,
        g = c.elemIsInside,
        y = c.elemUnbind,
        f = l['default'].lib('preact'),
        _ = f.h,
        h = f.render,
        b = f.Component,
        v = function(e) {
            function t() {
                var e, n, r, l;
                i(this, t);
                for (var s = arguments.length, d = Array(s), p = 0; p < s; p++) d[p] = arguments[p];
                return l = (n = (r = a(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(d))), r), r.onClickButton = function() {
                    var e = r.props.control;
                    if (!1 !== e.toggleDialogOnClick && !e.constructor.toggleDialogOnHover) {
                        var t = e.dialog;
                        t && (t.isOpen() ? t.close() : t.open())
                    }
                    e.onClickButton && e.onClickButton()
                }, r.onKeyboardFocusButton = function(t) {
                    if (t.relatedTarget !== r.dummyElem) {
                        var e = r.props.control,
                            n = e.dialog;
                        n && !n.isOpen() && n.open(), e.onFocusInButton && e.onFocusInButton(t)
                    }
                }, r.onBlurButton = function(t) {
                    var e = r.props.control,
                        n = e.dialog;
                    setTimeout(function() {
                        var i = document.activeElement;
                        !1 === r.props.closeDialogOnFocusOut || i && g(i, r.base) || !n || n.close(), e.onFocusOutButton && e.onFocusOutButton(t)
                    }, 20)
                }, r.onMouseEnter = function() {
                    r._isHovering = !0;
                    var e = r.props.control;
                    e.constructor.toggleDialogOnHover && e.dialog.open()
                }, r.onMouseLeave = function(t) {
                    r._isHovering = !1;
                    var e = r.props.control;
                    e.constructor.toggleDialogOnHover && !r._isMouseDown && e.dialog.close(), e.onMouseLeave && e.onMouseLeave(t)
                }, r.onMouseDown = function() {
                    r._isMouseDown = !0, m(document, 'mouseup', r.onMouseUp)
                }, r.onMouseUp = function() {
                    r._isMouseDown = !1, y(document, 'mouseup', r.onMouseUp);
                    var e = r.props.control;
                    e.constructor.toggleDialogOnHover && !r._isHovering && e.dialog.close()
                }, r.onFocusOut = function() {
                    setTimeout(function() {
                        var e = r.props.control;
                        !1 !== r.props.closeDialogOnFocusOut && e.dialog && e.dialog.isOpen() && (!document.activeElement || !g(document.activeElement, r.base)) && e.dialog.close()
                    }, 500)
                }, r.onFocusDummy = function() {
                    var e = r.props.control;
                    e.dialog.close();
                    var t = e.__nextControl();
                    t && t.buttonElement && t.buttonElement.focus && t.buttonElement.focus()
                }, r.onBeforeDisplayNone = function() {
                    var e = r.props.control;
                    if (r.dialogElem && document.activeElement && g(document.activeElement, r.dialogElem)) {
                        var t = e.__nextControl();
                        t && t.buttonElement ? t.buttonElement.focus() : e.buttonElement.focus()
                    }
                }, r.dialogRefFn = function(t) {
                    r.dialogElem = t, r.props.dialogRef && r.props.dialogRef(t)
                }, n), a(r, l)
            }
            return r(t, e), u(t, [{
                key: 'render',
                value: function() {
                    var e = this.props.control,
                        t = e.mountDialog && e.dialog && e.dialog.hasOpened();
                    return _('div', {
                        class: 'w-vulcan-button-wrapper w-css-reset',
                        style: this.wrapperStyle(),
                        onMouseEnter: this.onMouseEnter,
                        onMouseLeave: this.onMouseLeave,
                        onMouseDown: this.onMouseDown,
                        onFocusOut: this.onFocusOut,
                        ref: this.props.rootRef
                    }, this.renderControlBarButton(), t ? this.renderControlBarDialog() : null)
                }
            }, {
                key: 'componentDidMount',
                value: function() {
                    var e = this.props.buttonRef;
                    e && e(this.buttonElem)
                }
            }, {
                key: 'componentDidUpdate',
                value: function() {
                    var e = this.props.buttonRef;
                    e && e(this.buttonElem)
                }
            }, {
                key: 'renderControlBarButton',
                value: function() {
                    var t = this,
                        e = this.props;
                    return _(d['default'], {
                        onClickOrTap: this.onClickButton,
                        onKeyboardFocus: this.onKeyboardFocusButton,
                        onBlur: this.onBlurButton,
                        color: e.color,
                        buttonLabel: this.props.buttonLabel,
                        buttonRef: function(n) {
                            return t.buttonElem = n
                        },
                        stubRef: e.stubRef,
                        handle: e.control.constructor.handle,
                        isLoading: e.control.__isDialogLoading || !1
                    })
                }
            }, {
                key: 'renderControlBarDialog',
                value: function() {
                    var e = this.props,
                        t = e.control,
                        n = e.videoHeight - 34 * e.scale;
                    return _(p['default'], {
                        mount: function(n) {
                            return t.mountDialog(n)
                        },
                        left: t.props.left,
                        top: t.props.top,
                        canvasWidth: e.videoWidth,
                        canvasHeight: n,
                        scale: e.scale,
                        isOpen: t.dialog.isOpen(),
                        resizeRequestedAt: t.dialog._resizeRequestedAt,
                        onFocusDummy: this.onFocusDummy,
                        shouldRenderDummy: !!t.__nextControl(),
                        dialogRef: this.dialogRefFn,
                        onBeforeDisplayNone: this.onBeforeDisplayNone,
                        handle: t.constructor.handle + '__dialog'
                    })
                }
            }, {
                key: 'wrapperStyle',
                value: function() {
                    var e = this.props.control;
                    return {
                        display: 'inline-block',
                        height: e.props.height,
                        position: 'relative',
                        verticalAlign: 'top',
                        width: e.props.width
                    }
                }
            }]), t
        }(b);
    t['default'] = v;
}, function(e, t, n) {
    'use strict';
    n.r(t);
    var l = n(117),
        s = n(318),
        d = n(116),
        p = n(2),
        u = Object.assign || function(e) {
            for (var t, n = 1; n < arguments.length; n++)
                for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e
        },
        c = function() {
            function e(e, t) {
                for (var n, a = 0; a < t.length; a++) n = t[a], n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }();

    function i(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
    }

    function a(e, t) {
        if (!e) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return t && ('object' == typeof t || 'function' == typeof t) ? t : e
    }

    function r(e, t) {
        if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function, not ' + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    var m = p['default'].lib('utilities/color'),
        g = p['default'].lib('preact'),
        y = g.h,
        h = g.render,
        f = g.Component,
        _ = p['default'].lib('utilities/detect'),
        b = _.cachedDetect,
        v = b(),
        A = function(e) {
            function t(e) {
                i(this, t);
                var n = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return n.onFocus = function(t) {
                    setTimeout(function() {
                        n.setState({
                            isKeyboardFocused: !Object(d['default'])()
                        }), n.props.onFocus && n.props.onFocus(t), !Object(d['default'])() && n.props.onKeyboardFocus && n.props.onKeyboardFocus(t)
                    }, 10)
                }, n.onBlur = function(t) {
                    n.setState({
                        isKeyboardFocused: !1
                    }), n.props.onBlur && n.props.onBlur(t)
                }, n.onMouseEnter = function() {
                    n.setState({
                        isHovering: !0
                    })
                }, n.onMouseLeave = function() {
                    n.setState({
                        isHovering: !1
                    })
                }, n.interval = void 0, n.state = {
                    isKeyboardFocused: !1,
                    isHovering: !1,
                    opacity: '1.0'
                }, n
            }
            return r(t, e), c(t, [{
                key: 'render',
                value: function() {
                    var t = this,
                        n = this.props,
                        e = n.buttonLabel,
                        i = {
                            class: 'w-vulcan-v2-button w-css-reset w-css-reset-tree w-css-reset-button-important',
                            style: this.buttonStyle(),
                            "aria-label": e,
                            title: e,
                            onClickOrTap: n.onClickOrTap,
                            elemRef: function(i) {
                                t.buttonElem = i, n.buttonRef && n.buttonRef(i)
                            }
                        };
                    return v.touchScreen || (i.onFocus = this.onFocus, i.onBlur = this.onBlur, i.onMouseEnter = this.onMouseEnter, i.onMouseLeave = this.onMouseLeave), y(l['default'], u({
                        tagName: 'button'
                    }, i), y(s['default'], {
                        class: 'w-vulcan-icon-wrapper',
                        style: this.stubStyle(),
                        stubRef: function(n) {
                            return t.stubRoot = n
                        },
                        handle: this.props.handle
                    }))
                }
            }, {
                key: 'componentDidMount',
                value: function() {
                    this.props.mount && this.props.mount(this.stubRoot, this.anchorRoot, this.buttonElem), this.props.stubRef && this.props.stubRef(this.stubRoot)
                }
            }, {
                key: 'createLoadingInterval',
                value: function() {
                    var e = this;
                    this.interval = setInterval(function() {
                        var t = '0.2' === e.state.opacity ? '0.8' : '0.2';
                        e.setState({
                            opacity: t
                        })
                    }, 400)
                }
            }, {
                key: 'clearLoadingInterval',
                value: function() {
                    clearInterval(this.interval), this.setState({
                        opacity: '1.0'
                    })
                }
            }, {
                key: 'componentWillReceiveProps',
                value: function(e) {
                    !1 === this.props.isLoading && !0 === e.isLoading ? this.createLoadingInterval() : !0 === this.props.isLoading && !1 === e.isLoading && this.clearLoadingInterval()
                }
            }, {
                key: 'componentDidUpdate',
                value: function() {
                    var e = this;
                    this.props.stubRef && this.props.stubRef(this.stubRoot), v.trident && setTimeout(function() {
                        e.base.style.display = 'inline-block', setTimeout(function() {
                            e.base.style.display = 'block'
                        }, 1)
                    }, 1)
                }
            }, {
                key: 'rootStyle',
                value: function() {
                    return {
                        height: '100%',
                        position: 'relative',
                        width: '100%'
                    }
                }
            }, {
                key: 'buttonStyle',
                value: function() {
                    var e = this.state,
                        t = e.isHovering ? .7 : .95,
                        n = new m(this.props.color || '#000').alpha(t);
                    return {
                        background: n.toRgba(),
                        boxShadow: e.isKeyboardFocused ? '0 0 0 2px #fff inset' : 'none',
                        cursor: 'pointer',
                        height: '100%',
                        position: 'relative',
                        width: '100%',
                        transition: 'opacity 400ms ease',
                        opacity: e.opacity
                    }
                }
            }, {
                key: 'stubStyle',
                value: function() {
                    return {
                        boxSizing: 'border-box',
                        height: '100%'
                    }
                }
            }]), t
        }(f);
    t['default'] = A;
}, function(e, t, n) {
    'use strict';
    n.r(t);
    var s = n(2),
        d = n(318),
        p = function() {
            function e(e, t) {
                for (var n, a = 0; a < t.length; a++) n = t[a], n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }();

    function i(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function a(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
    }

    function r(e, t) {
        if (!e) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return t && ('object' == typeof t || 'function' == typeof t) ? t : e
    }

    function l(e, t) {
        if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function, not ' + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    var u = s['default'].lib('player/lib/elem'),
        c = u.elemHeight,
        m = u.elemWidth,
        g = s['default'].lib('preact'),
        y = g.h,
        h = g.render,
        f = g.Component,
        _ = s['default'].lib('promiscuous'),
        b = s['default'].lib('utilities/detect'),
        v = b.cachedDetect,
        A = s['default'].lib('utilities/event_loop'),
        w = A.globalEventLoop,
        k = s['default'].lib('utilities/seqid'),
        E = v(),
        C = 40,
        S = function(e) {
            function t(e) {
                a(this, t);
                var n = r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return P.call(n), n.uuid = k(), n.state = {
                    isDisplayNone: !0,
                    isOpaque: !1,
                    widthInButtons: null
                }, n
            }
            return l(t, e), p(t, [{
                key: 'componentWillReceiveProps',
                value: function(e) {
                    this.props.resizeRequestedAt !== e.resizeRequestedAt && this.setState({
                        widthInButtons: null
                    })
                }
            }, {
                key: 'componentWillUpdate',
                value: function(e, t) {
                    !0 === t.isDisplayNone && !1 === this.state.isDisplayNone && (this.cancelMeasurementLoop(), e.onBeforeDisplayNone && e.onBeforeDisplayNone()), !1 === t.isDisplayNone && !0 === this.state.isDisplayNone && this.setupMeasurementLoop()
                }
            }, {
                key: 'render',
                value: function() {
                    var e, t = this;
                    return y('div', {
                        class: 'w-anchor w-css-reset',
                        style: this.anchorStyle()
                    }, y('div', {
                        class: 'w-dialog w-css-reset',
                        style: this.dialogStyle(),
                        ref: this.dialogRefFn
                    }, y(d['default'], {
                        style: this.stubStyle(),
                        stubRef: function(n) {
                            return t.stubElem = n
                        },
                        handle: this.props.handle,
                        class: 'w-css-reset'
                    }), this.props.shouldRenderDummy ? y('div', (e = {
                        class: 'w-dummy-button',
                        style: this.dummyStyle(),
                        onFocus: this.props.onFocusDummy
                    }, i(e, 'class', 'w-css-reset'), i(e, 'tabindex', '0'), e)) : null))
                }
            }, {
                key: 'componentDidMount',
                value: function() {
                    var e = this.props.mount(this.stubElem);
                    this.mountPromise = e && e.then && e.catch ? e : _.resolve(), this.mountPromise.then(this.handleTransitionsAfterRender)
                }
            }, {
                key: 'componentDidUpdate',
                value: function() {
                    this.mountPromise && this.mountPromise.then(this.handleTransitionsAfterRender)
                }
            }, {
                key: 'componentWillUnmount',
                value: function() {
                    this.cancelMeasurementLoop()
                }
            }, {
                key: 'anchorStyle',
                value: function() {
                    return {
                        height: 0,
                        left: 0,
                        position: 'absolute',
                        top: 0,
                        width: '100%'
                    }
                }
            }, {
                key: 'dialogStyle',
                value: function() {
                    var e = this.props,
                        t = this.state,
                        n = 0,
                        i = null;
                    if (null != t.widthInButtons) {
                        i = t.widthInButtons * C * e.scale;
                        var a = e.left + i - e.canvasWidth;
                        0 < a && (n = -1 * a)
                    }
                    return {
                        background: 'rgba(0,0,0,.5)',
                        bottom: 0,
                        color: '#fff',
                        display: t.isDisplayNone ? 'none' : 'block',
                        left: n,
                        lineHeight: '34px',
                        maxHeight: e.canvasHeight + 'px',
                        opacity: t.isOpaque ? 1 : 0,
                        overflowX: 'hidden',
                        overflowY: 'auto',
                        position: 'absolute',
                        transition: E.trident ? 'none' : 'opacity 170ms',
                        width: null == i ? null : i + 'px'
                    }
                }
            }, {
                key: 'stubStyle',
                value: function() {
                    return {
                        boxSizing: 'border-box',
                        display: 'inline-block',
                        height: '100%',
                        verticalAlign: 'bottom',
                        width: '100%'
                    }
                }
            }, {
                key: 'dummyStyle',
                value: function() {
                    return {
                        clip: 'rect(0,0,0,0)',
                        height: '1px',
                        position: 'absolute',
                        top: 0,
                        width: '1px'
                    }
                }
            }, {
                key: 'setupMeasurementLoop',
                value: function() {
                    w.add(this.uuid, 500, this.measureUserElem)
                }
            }, {
                key: 'cancelMeasurementLoop',
                value: function() {
                    w.remove(this.uuid)
                }
            }]), t
        }(f),
        P = function() {
            var t = this;
            this.dialogRefFn = function(n) {
                t.dialogElem = n, t.props.dialogRef && t.props.dialogRef(n)
            }, this.handleTransitionsAfterRender = function() {
                var e = t.props,
                    n = t.state;
                e.isOpen ? (n.isDisplayNone || n.isOpaque && null == n.widthInButtons) && t.setState({
                    isDisplayNone: !1
                }, function() {
                    t.measureUserElem(), t.setState({
                        isOpaque: !0
                    })
                }) : !n.isDisplayNone && n.isOpaque && t.setState({
                    isOpaque: !1
                }, function() {
                    clearTimeout(t.displayNoneTimeout), t.displayNoneTimeout = setTimeout(function() {
                        t.setState({
                            isDisplayNone: !0
                        })
                    }, E.trident ? 0 : 200)
                })
            }, this.measureUserElem = function() {
                t.stubElem.style.width = '';
                var e = m(t.stubElem);
                t.stubElem.style.width = '100%';
                var n = Math.ceil(e / (C * t.props.scale));
                n !== t.state.widthInButtons && t.setState({
                    widthInButtons: n
                })
            }
        };
    t['default'] = S;
}, function(e, t, n) {
    'use strict';
    n.r(t);
    n.d(t, 'cssResetForSelector', function() {
        return m
    });
    var i = n(2),
        a = i['default'].lib('utilities/obj'),
        r = a.assign,
        l = {
            "background-attachment": 'scroll',
            "background-color": 'transparent',
            "background-image": 'none',
            "background-position": '0 0',
            "background-repeat": 'no-repeat',
            "background-size": '100% 100%'
        },
        s = {
            "box-sizing": 'inherit',
            "box-shadow": 'none',
            color: 'inherit',
            display: 'block',
            float: 'none',
            font: 'inherit',
            "font-family": 'inherit',
            "font-style": 'normal',
            "font-weight": 'normal',
            "font-size": 'inherit',
            "letter-spacing": 0,
            "line-height": 'inherit',
            margin: 0,
            "max-height": 'none',
            "max-width": 'none',
            "min-height": 'none',
            "min-width": 'none',
            padding: 0,
            position: 'static',
            "text-decoration": 'none',
            "text-transform": 'none',
            "text-shadow": 'none',
            transition: 'none',
            "word-wrap": 'normal',
            "-webkit-tap-highlight-color": 'rgba(0,0,0,0)',
            "-webkit-user-select": 'none',
            "-webkit-font-smoothing": 'antialiased'
        },
        d = {
            border: 0,
            "border-radius": 0,
            outline: 'none',
            position: 'static'
        },
        p = function(e) {
            var t = [];
            for (var n in e) {
                var i = e[n];
                t.push(n + ':' + i)
            }
            return t.join(';')
        },
        u = '\n&{font-size:14px;}\ndiv,span,ul,li,label,button,img,a,svg,p{' + p(s) + '}\na{border:0;}\np{margin:1.4em 0;}\na,span,svg{display:inline;}\nul,ol,li{' + p(r({}, s, {
            "list-style-type": 'none',
            position: 'static'
        })) + '}\nul:before,ol:before,li:before{display:none}\nul:after,ol:after,li:after{display:none}\nlabel{' + p(r({}, l, {
            float: 'none',
            outline: 'none'
        })) + '}\nbutton{' + p(r({}, l, d)) + '}\nimg{' + p(r({}, {
            border: 0,
            display: 'inline-block',
            "vertical-align": 'top'
        }, d)) + '}\n',
        c = function(e, t, n) {
            var i = n.indexOf('{'),
                a = n.substring(0, i),
                r = n.substring(i, n.length),
                l = a.split(/,\s*/);
            return l.map(function(n) {
                return 0 <= n.indexOf('&') ? '' + n.replace(/\&/g, e) + t + r : '' + e + n + t + r
            }).join('\n')
        },
        m = function(e, t) {
            return u.trim().split(/\n+/).map(function(n) {
                return c(e, t, n)
            }).join('\n')
        };
}, function(e, t, n) {
    'use strict';
    n.r(t);
    var l = n(2),
        s = n(309),
        d = function() {
            function e(e, t) {
                for (var n, a = 0; a < t.length; a++) n = t[a], n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }();

    function i(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
    }

    function a(e, t) {
        if (!e) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return t && ('object' == typeof t || 'function' == typeof t) ? t : e
    }

    function r(e, t) {
        if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function, not ' + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    var p = l['default'].lib('utilities/detect'),
        u = p.cachedDetect,
        c = u(),
        m = function(e) {
            function t() {
                var e, n, r, s;
                i(this, t);
                for (var d = arguments.length, p = Array(d), u = 0; u < d; u++) p[u] = arguments[u];
                return s = (n = (r = a(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(p))), r), r.onError = function() {
                    var e = r.impl,
                        t = e.getVideoElement();
                    if (t && t.error && t.error.code === 3 && /native_hls_video/.test(r.impl.bestEngine())) {
                        var n = e.lastPlayInfo().isPending;
                        e.commandQueueOpen.clearSynchronized();
                        var i = n ? 'playing' : 'not-playing';
                        l['default'].Metrics.videoCount(e, 'player/rebuild-non-hls-on-error/' + i), r.unbinds.push(e.on('play', function() {
                            return l['default'].Metrics.videoCount(e, 'player/rebuild-non-hls-on-error/' + i), e.unbind
                        })), e.publicApi.fullRebuild({
                            hls: !1,
                            autoPlay: n && !(c.ios.version && 10.1 > c.ios.version)
                        })
                    }
                }, n), a(r, s)
            }
            return r(t, e), d(t, [{
                key: 'init',
                value: function() {
                    this.unbinds.push(this.impl.on('error', this.onError))
                }
            }]), t
        }(s.PlayerBehavior);
    m.handle = 'playbackErrorHandling';
    t['default'] = m;
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
    'use strict';
    n.r(t);
    var i = n(0),
        a = n(277);
}]);