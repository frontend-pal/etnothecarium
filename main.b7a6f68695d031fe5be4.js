(self.webpackChunketnothecarium = self.webpackChunketnothecarium || []).push([
    [179], {
        8255: We => {
            function fe(O) {
                return Promise.resolve().then(() => {
                    var A = new Error("Cannot find module '" + O + "'");
                    throw A.code = "MODULE_NOT_FOUND", A
                })
            }
            fe.keys = () => [], fe.resolve = fe, fe.id = 8255, We.exports = fe
        },
        8583: (We, fe, O) => {
            "use strict";
            O.d(fe, {
                mr: () => me,
                ez: () => Di,
                K0: () => re,
                Do: () => on,
                V_: () => U,
                Ye: () => Jt,
                S$: () => ue,
                mk: () => Br,
                O5: () => nr,
                b0: () => rt,
                lw: () => ee,
                EM: () => Yr,
                JF: () => wi,
                PM: () => qi,
                w_: () => Y,
                bD: () => zs,
                q: () => he,
                Mx: () => tt,
                HT: () => Z
            });
            var A = O(3018);
            let m = null;

            function he() {
                return m
            }

            function Z(E) {
                m || (m = E)
            }
            class Y {}
            const re = new A.OlP("DocumentToken");
            let ee = (() => {
                class E {
                    historyGo(v) {
                        throw new Error("Not implemented")
                    }
                }
                return E.\u0275fac = function(v) {
                    return new(v || E)
                }, E.\u0275prov = (0, A.Yz7)({
                    factory: Q,
                    token: E,
                    providedIn: "platform"
                }), E
            })();

            function Q() {
                return (0, A.LFG)(z)
            }
            const U = new A.OlP("Location Initialized");
            let z = (() => {
                class E extends ee {
                    constructor(v) {
                        super(), this._doc = v, this._init()
                    }
                    _init() {
                        this.location = window.location, this._history = window.history
                    }
                    getBaseHrefFromDOM() {
                        return he().getBaseHref(this._doc)
                    }
                    onPopState(v) {
                        const I = he().getGlobalEventTarget(this._doc, "window");
                        return I.addEventListener("popstate", v, !1), () => I.removeEventListener("popstate", v)
                    }
                    onHashChange(v) {
                        const I = he().getGlobalEventTarget(this._doc, "window");
                        return I.addEventListener("hashchange", v, !1), () => I.removeEventListener("hashchange", v)
                    }
                    get href() {
                        return this.location.href
                    }
                    get protocol() {
                        return this.location.protocol
                    }
                    get hostname() {
                        return this.location.hostname
                    }
                    get port() {
                        return this.location.port
                    }
                    get pathname() {
                        return this.location.pathname
                    }
                    get search() {
                        return this.location.search
                    }
                    get hash() {
                        return this.location.hash
                    }
                    set pathname(v) {
                        this.location.pathname = v
                    }
                    pushState(v, I, V) {
                        te() ? this._history.pushState(v, I, V) : this.location.hash = V
                    }
                    replaceState(v, I, V) {
                        te() ? this._history.replaceState(v, I, V) : this.location.hash = V
                    }
                    forward() {
                        this._history.forward()
                    }
                    back() {
                        this._history.back()
                    }
                    historyGo(v = 0) {
                        this._history.go(v)
                    }
                    getState() {
                        return this._history.state
                    }
                }
                return E.\u0275fac = function(v) {
                    return new(v || E)(A.LFG(re))
                }, E.\u0275prov = (0, A.Yz7)({
                    factory: q,
                    token: E,
                    providedIn: "platform"
                }), E
            })();

            function te() {
                return !!window.history.pushState
            }

            function q() {
                return new z((0, A.LFG)(re))
            }

            function Ae(E, T) {
                if (0 == E.length) return T;
                if (0 == T.length) return E;
                let v = 0;
                return E.endsWith("/") && v++, T.startsWith("/") && v++, 2 == v ? E + T.substring(1) : 1 == v ? E + T : E + "/" + T
            }

            function De(E) {
                const T = E.match(/#|\?|$/),
                    v = T && T.index || E.length;
                return E.slice(0, v - ("/" === E[v - 1] ? 1 : 0)) + E.slice(v)
            }

            function ge(E) {
                return E && "?" !== E[0] ? "?" + E : E
            }
            let ue = (() => {
                class E {
                    historyGo(v) {
                        throw new Error("Not implemented")
                    }
                }
                return E.\u0275fac = function(v) {
                    return new(v || E)
                }, E.\u0275prov = (0, A.Yz7)({
                    factory: Be,
                    token: E,
                    providedIn: "root"
                }), E
            })();

            function Be(E) {
                const T = (0, A.LFG)(re).location;
                return new rt((0, A.LFG)(ee), T && T.origin || "")
            }
            const me = new A.OlP("appBaseHref");
            let rt = (() => {
                    class E extends ue {
                        constructor(v, I) {
                            if (super(), this._platformLocation = v, this._removeListenerFns = [], null == I && (I = this._platformLocation.getBaseHrefFromDOM()), null == I) throw new Error("No base href set. Please provide a value for the APP_BASE_HREF token or add a base element to the document.");
                            this._baseHref = I
                        }
                        ngOnDestroy() {
                            for (; this._removeListenerFns.length;) this._removeListenerFns.pop()()
                        }
                        onPopState(v) {
                            this._removeListenerFns.push(this._platformLocation.onPopState(v), this._platformLocation.onHashChange(v))
                        }
                        getBaseHref() {
                            return this._baseHref
                        }
                        prepareExternalUrl(v) {
                            return Ae(this._baseHref, v)
                        }
                        path(v = !1) {
                            const I = this._platformLocation.pathname + ge(this._platformLocation.search),
                                V = this._platformLocation.hash;
                            return V && v ? `${I}${V}` : I
                        }
                        pushState(v, I, V, K) {
                            const _e = this.prepareExternalUrl(V + ge(K));
                            this._platformLocation.pushState(v, I, _e)
                        }
                        replaceState(v, I, V, K) {
                            const _e = this.prepareExternalUrl(V + ge(K));
                            this._platformLocation.replaceState(v, I, _e)
                        }
                        forward() {
                            this._platformLocation.forward()
                        }
                        back() {
                            this._platformLocation.back()
                        }
                        historyGo(v = 0) {
                            var I, V;
                            null === (V = (I = this._platformLocation).historyGo) || void 0 === V || V.call(I, v)
                        }
                    }
                    return E.\u0275fac = function(v) {
                        return new(v || E)(A.LFG(ee), A.LFG(me, 8))
                    }, E.\u0275prov = A.Yz7({
                        token: E,
                        factory: E.\u0275fac
                    }), E
                })(),
                on = (() => {
                    class E extends ue {
                        constructor(v, I) {
                            super(), this._platformLocation = v, this._baseHref = "", this._removeListenerFns = [], null != I && (this._baseHref = I)
                        }
                        ngOnDestroy() {
                            for (; this._removeListenerFns.length;) this._removeListenerFns.pop()()
                        }
                        onPopState(v) {
                            this._removeListenerFns.push(this._platformLocation.onPopState(v), this._platformLocation.onHashChange(v))
                        }
                        getBaseHref() {
                            return this._baseHref
                        }
                        path(v = !1) {
                            let I = this._platformLocation.hash;
                            return null == I && (I = "#"), I.length > 0 ? I.substring(1) : I
                        }
                        prepareExternalUrl(v) {
                            const I = Ae(this._baseHref, v);
                            return I.length > 0 ? "#" + I : I
                        }
                        pushState(v, I, V, K) {
                            let _e = this.prepareExternalUrl(V + ge(K));
                            0 == _e.length && (_e = this._platformLocation.pathname), this._platformLocation.pushState(v, I, _e)
                        }
                        replaceState(v, I, V, K) {
                            let _e = this.prepareExternalUrl(V + ge(K));
                            0 == _e.length && (_e = this._platformLocation.pathname), this._platformLocation.replaceState(v, I, _e)
                        }
                        forward() {
                            this._platformLocation.forward()
                        }
                        back() {
                            this._platformLocation.back()
                        }
                        historyGo(v = 0) {
                            var I, V;
                            null === (V = (I = this._platformLocation).historyGo) || void 0 === V || V.call(I, v)
                        }
                    }
                    return E.\u0275fac = function(v) {
                        return new(v || E)(A.LFG(ee), A.LFG(me, 8))
                    }, E.\u0275prov = A.Yz7({
                        token: E,
                        factory: E.\u0275fac
                    }), E
                })(),
                Jt = (() => {
                    class E {
                        constructor(v, I) {
                            this._subject = new A.vpe, this._urlChangeListeners = [], this._platformStrategy = v;
                            const V = this._platformStrategy.getBaseHref();
                            this._platformLocation = I, this._baseHref = De(wt(V)), this._platformStrategy.onPopState(K => {
                                this._subject.emit({
                                    url: this.path(!0),
                                    pop: !0,
                                    state: K.state,
                                    type: K.type
                                })
                            })
                        }
                        path(v = !1) {
                            return this.normalize(this._platformStrategy.path(v))
                        }
                        getState() {
                            return this._platformLocation.getState()
                        }
                        isCurrentPathEqualTo(v, I = "") {
                            return this.path() == this.normalize(v + ge(I))
                        }
                        normalize(v) {
                            return E.stripTrailingSlash(function(E, T) {
                                return E && T.startsWith(E) ? T.substring(E.length) : T
                            }(this._baseHref, wt(v)))
                        }
                        prepareExternalUrl(v) {
                            return v && "/" !== v[0] && (v = "/" + v), this._platformStrategy.prepareExternalUrl(v)
                        }
                        go(v, I = "", V = null) {
                            this._platformStrategy.pushState(V, "", v, I), this._notifyUrlChangeListeners(this.prepareExternalUrl(v + ge(I)), V)
                        }
                        replaceState(v, I = "", V = null) {
                            this._platformStrategy.replaceState(V, "", v, I), this._notifyUrlChangeListeners(this.prepareExternalUrl(v + ge(I)), V)
                        }
                        forward() {
                            this._platformStrategy.forward()
                        }
                        back() {
                            this._platformStrategy.back()
                        }
                        historyGo(v = 0) {
                            var I, V;
                            null === (V = (I = this._platformStrategy).historyGo) || void 0 === V || V.call(I, v)
                        }
                        onUrlChange(v) {
                            this._urlChangeListeners.push(v), this._urlChangeSubscription || (this._urlChangeSubscription = this.subscribe(I => {
                                this._notifyUrlChangeListeners(I.url, I.state)
                            }))
                        }
                        _notifyUrlChangeListeners(v = "", I) {
                            this._urlChangeListeners.forEach(V => V(v, I))
                        }
                        subscribe(v, I, V) {
                            return this._subject.subscribe({
                                next: v,
                                error: I,
                                complete: V
                            })
                        }
                    }
                    return E.\u0275fac = function(v) {
                        return new(v || E)(A.LFG(ue), A.LFG(ee))
                    }, E.normalizeQueryParams = ge, E.joinWithSlash = Ae, E.stripTrailingSlash = De, E.\u0275prov = (0, A.Yz7)({
                        factory: xe,
                        token: E,
                        providedIn: "root"
                    }), E
                })();

            function xe() {
                return new Jt((0, A.LFG)(ue), (0, A.LFG)(ee))
            }

            function wt(E) {
                return E.replace(/\/index.html$/, "")
            }
            var ke = (() => ((ke = ke || {})[ke.Zero = 0] = "Zero", ke[ke.One = 1] = "One", ke[ke.Two = 2] = "Two", ke[ke.Few = 3] = "Few", ke[ke.Many = 4] = "Many", ke[ke.Other = 5] = "Other", ke))();
            const cn = A.kL8;
            class Ft {}
            let Wn = (() => {
                class E extends Ft {
                    constructor(v) {
                        super(), this.locale = v
                    }
                    getPluralCategory(v, I) {
                        switch (cn(I || this.locale)(v)) {
                            case ke.Zero:
                                return "zero";
                            case ke.One:
                                return "one";
                            case ke.Two:
                                return "two";
                            case ke.Few:
                                return "few";
                            case ke.Many:
                                return "many";
                            default:
                                return "other"
                        }
                    }
                }
                return E.\u0275fac = function(v) {
                    return new(v || E)(A.LFG(A.soG))
                }, E.\u0275prov = A.Yz7({
                    token: E,
                    factory: E.\u0275fac
                }), E
            })();

            function tt(E, T) {
                T = encodeURIComponent(T);
                for (const v of E.split(";")) {
                    const I = v.indexOf("="),
                        [V, K] = -1 == I ? [v, ""] : [v.slice(0, I), v.slice(I + 1)];
                    if (V.trim() === T) return decodeURIComponent(K)
                }
                return null
            }
            let Br = (() => {
                    class E {
                        constructor(v, I, V, K) {
                            this._iterableDiffers = v, this._keyValueDiffers = I, this._ngEl = V, this._renderer = K, this._iterableDiffer = null, this._keyValueDiffer = null, this._initialClasses = [], this._rawClass = null
                        }
                        set klass(v) {
                            this._removeClasses(this._initialClasses), this._initialClasses = "string" == typeof v ? v.split(/\s+/) : [], this._applyClasses(this._initialClasses), this._applyClasses(this._rawClass)
                        }
                        set ngClass(v) {
                            this._removeClasses(this._rawClass), this._applyClasses(this._initialClasses), this._iterableDiffer = null, this._keyValueDiffer = null, this._rawClass = "string" == typeof v ? v.split(/\s+/) : v, this._rawClass && ((0, A.sIi)(this._rawClass) ? this._iterableDiffer = this._iterableDiffers.find(this._rawClass).create() : this._keyValueDiffer = this._keyValueDiffers.find(this._rawClass).create())
                        }
                        ngDoCheck() {
                            if (this._iterableDiffer) {
                                const v = this._iterableDiffer.diff(this._rawClass);
                                v && this._applyIterableChanges(v)
                            } else if (this._keyValueDiffer) {
                                const v = this._keyValueDiffer.diff(this._rawClass);
                                v && this._applyKeyValueChanges(v)
                            }
                        }
                        _applyKeyValueChanges(v) {
                            v.forEachAddedItem(I => this._toggleClass(I.key, I.currentValue)), v.forEachChangedItem(I => this._toggleClass(I.key, I.currentValue)), v.forEachRemovedItem(I => {
                                I.previousValue && this._toggleClass(I.key, !1)
                            })
                        }
                        _applyIterableChanges(v) {
                            v.forEachAddedItem(I => {
                                if ("string" != typeof I.item) throw new Error(`NgClass can only toggle CSS classes expressed as strings, got ${(0,A.AaK)(I.item)}`);
                                this._toggleClass(I.item, !0)
                            }), v.forEachRemovedItem(I => this._toggleClass(I.item, !1))
                        }
                        _applyClasses(v) {
                            v && (Array.isArray(v) || v instanceof Set ? v.forEach(I => this._toggleClass(I, !0)) : Object.keys(v).forEach(I => this._toggleClass(I, !!v[I])))
                        }
                        _removeClasses(v) {
                            v && (Array.isArray(v) || v instanceof Set ? v.forEach(I => this._toggleClass(I, !1)) : Object.keys(v).forEach(I => this._toggleClass(I, !1)))
                        }
                        _toggleClass(v, I) {
                            (v = v.trim()) && v.split(/\s+/g).forEach(V => {
                                I ? this._renderer.addClass(this._ngEl.nativeElement, V) : this._renderer.removeClass(this._ngEl.nativeElement, V)
                            })
                        }
                    }
                    return E.\u0275fac = function(v) {
                        return new(v || E)(A.Y36(A.ZZ4), A.Y36(A.aQg), A.Y36(A.SBq), A.Y36(A.Qsj))
                    }, E.\u0275dir = A.lG2({
                        type: E,
                        selectors: [
                            ["", "ngClass", ""]
                        ],
                        inputs: {
                            klass: ["class", "klass"],
                            ngClass: "ngClass"
                        }
                    }), E
                })(),
                nr = (() => {
                    class E {
                        constructor(v, I) {
                            this._viewContainer = v, this._context = new Tn, this._thenTemplateRef = null, this._elseTemplateRef = null, this._thenViewRef = null, this._elseViewRef = null, this._thenTemplateRef = I
                        }
                        set ngIf(v) {
                            this._context.$implicit = this._context.ngIf = v, this._updateView()
                        }
                        set ngIfThen(v) {
                            Tt("ngIfThen", v), this._thenTemplateRef = v, this._thenViewRef = null, this._updateView()
                        }
                        set ngIfElse(v) {
                            Tt("ngIfElse", v), this._elseTemplateRef = v, this._elseViewRef = null, this._updateView()
                        }
                        _updateView() {
                            this._context.$implicit ? this._thenViewRef || (this._viewContainer.clear(), this._elseViewRef = null, this._thenTemplateRef && (this._thenViewRef = this._viewContainer.createEmbeddedView(this._thenTemplateRef, this._context))) : this._elseViewRef || (this._viewContainer.clear(), this._thenViewRef = null, this._elseTemplateRef && (this._elseViewRef = this._viewContainer.createEmbeddedView(this._elseTemplateRef, this._context)))
                        }
                        static ngTemplateContextGuard(v, I) {
                            return !0
                        }
                    }
                    return E.\u0275fac = function(v) {
                        return new(v || E)(A.Y36(A.s_b), A.Y36(A.Rgc))
                    }, E.\u0275dir = A.lG2({
                        type: E,
                        selectors: [
                            ["", "ngIf", ""]
                        ],
                        inputs: {
                            ngIf: "ngIf",
                            ngIfThen: "ngIfThen",
                            ngIfElse: "ngIfElse"
                        }
                    }), E
                })();
            class Tn {
                constructor() {
                    this.$implicit = null, this.ngIf = null
                }
            }

            function Tt(E, T) {
                if (T && !T.createEmbeddedView) throw new Error(`${E} must be a TemplateRef, but received '${(0,A.AaK)(T)}'.`)
            }
            let Di = (() => {
                class E {}
                return E.\u0275fac = function(v) {
                    return new(v || E)
                }, E.\u0275mod = A.oAB({
                    type: E
                }), E.\u0275inj = A.cJS({
                    providers: [{
                        provide: Ft,
                        useClass: Wn
                    }]
                }), E
            })();
            const zs = "browser";

            function qi(E) {
                return "server" === E
            }
            let Yr = (() => {
                class E {}
                return E.\u0275prov = (0, A.Yz7)({
                    token: E,
                    providedIn: "root",
                    factory: () => new Ji((0, A.LFG)(re), window)
                }), E
            })();
            class Ji {
                constructor(T, v) {
                    this.document = T, this.window = v, this.offset = () => [0, 0]
                }
                setOffset(T) {
                    this.offset = Array.isArray(T) ? () => T : T
                }
                getScrollPosition() {
                    return this.supportsScrolling() ? [this.window.pageXOffset, this.window.pageYOffset] : [0, 0]
                }
                scrollToPosition(T) {
                    this.supportsScrolling() && this.window.scrollTo(T[0], T[1])
                }
                scrollToAnchor(T) {
                    if (!this.supportsScrolling()) return;
                    const v = function(E, T) {
                        const v = E.getElementById(T) || E.getElementsByName(T)[0];
                        if (v) return v;
                        if ("function" == typeof E.createTreeWalker && E.body && (E.body.createShadowRoot || E.body.attachShadow)) {
                            const I = E.createTreeWalker(E.body, NodeFilter.SHOW_ELEMENT);
                            let V = I.currentNode;
                            for (; V;) {
                                const K = V.shadowRoot;
                                if (K) {
                                    const _e = K.getElementById(T) || K.querySelector(`[name="${T}"]`);
                                    if (_e) return _e
                                }
                                V = I.nextNode()
                            }
                        }
                        return null
                    }(this.document, T);
                    v && (this.scrollToElement(v), this.attemptFocus(v))
                }
                setHistoryScrollRestoration(T) {
                    if (this.supportScrollRestoration()) {
                        const v = this.window.history;
                        v && v.scrollRestoration && (v.scrollRestoration = T)
                    }
                }
                scrollToElement(T) {
                    const v = T.getBoundingClientRect(),
                        I = v.left + this.window.pageXOffset,
                        V = v.top + this.window.pageYOffset,
                        K = this.offset();
                    this.window.scrollTo(I - K[0], V - K[1])
                }
                attemptFocus(T) {
                    return T.focus(), this.document.activeElement === T
                }
                supportScrollRestoration() {
                    try {
                        if (!this.supportsScrolling()) return !1;
                        const T = Cr(this.window.history) || Cr(Object.getPrototypeOf(this.window.history));
                        return !(!T || !T.writable && !T.set)
                    } catch (T) {
                        return !1
                    }
                }
                supportsScrolling() {
                    try {
                        return !!this.window && !!this.window.scrollTo && "pageXOffset" in this.window
                    } catch (T) {
                        return !1
                    }
                }
            }

            function Cr(E) {
                return Object.getOwnPropertyDescriptor(E, "scrollRestoration")
            }
            class wi {}
        },
        1841: (We, fe, O) => {
            "use strict";
            O.d(fe, {
                eN: () => Ne,
                JF: () => Yt
            });
            var A = O(8583),
                m = O(3018),
                he = O(5917),
                oe = O(7574),
                Z = O(4612),
                Y = O(5435),
                re = O(8002);
            class ee {}
            class Q {}
            class U {
                constructor(N) {
                    this.normalizedNames = new Map, this.lazyUpdate = null, N ? this.lazyInit = "string" == typeof N ? () => {
                        this.headers = new Map, N.split("\n").forEach(H => {
                            const ye = H.indexOf(":");
                            if (ye > 0) {
                                const le = H.slice(0, ye),
                                    Pe = le.toLowerCase(),
                                    be = H.slice(ye + 1).trim();
                                this.maybeSetNormalizedName(le, Pe), this.headers.has(Pe) ? this.headers.get(Pe).push(be) : this.headers.set(Pe, [be])
                            }
                        })
                    } : () => {
                        this.headers = new Map, Object.keys(N).forEach(H => {
                            let ye = N[H];
                            const le = H.toLowerCase();
                            "string" == typeof ye && (ye = [ye]), ye.length > 0 && (this.headers.set(le, ye), this.maybeSetNormalizedName(H, le))
                        })
                    } : this.headers = new Map
                }
                has(N) {
                    return this.init(), this.headers.has(N.toLowerCase())
                }
                get(N) {
                    this.init();
                    const H = this.headers.get(N.toLowerCase());
                    return H && H.length > 0 ? H[0] : null
                }
                keys() {
                    return this.init(), Array.from(this.normalizedNames.values())
                }
                getAll(N) {
                    return this.init(), this.headers.get(N.toLowerCase()) || null
                }
                append(N, H) {
                    return this.clone({
                        name: N,
                        value: H,
                        op: "a"
                    })
                }
                set(N, H) {
                    return this.clone({
                        name: N,
                        value: H,
                        op: "s"
                    })
                }
                delete(N, H) {
                    return this.clone({
                        name: N,
                        value: H,
                        op: "d"
                    })
                }
                maybeSetNormalizedName(N, H) {
                    this.normalizedNames.has(H) || this.normalizedNames.set(H, N)
                }
                init() {
                    this.lazyInit && (this.lazyInit instanceof U ? this.copyFrom(this.lazyInit) : this.lazyInit(), this.lazyInit = null, this.lazyUpdate && (this.lazyUpdate.forEach(N => this.applyUpdate(N)), this.lazyUpdate = null))
                }
                copyFrom(N) {
                    N.init(), Array.from(N.headers.keys()).forEach(H => {
                        this.headers.set(H, N.headers.get(H)), this.normalizedNames.set(H, N.normalizedNames.get(H))
                    })
                }
                clone(N) {
                    const H = new U;
                    return H.lazyInit = this.lazyInit && this.lazyInit instanceof U ? this.lazyInit : this, H.lazyUpdate = (this.lazyUpdate || []).concat([N]), H
                }
                applyUpdate(N) {
                    const H = N.name.toLowerCase();
                    switch (N.op) {
                        case "a":
                        case "s":
                            let ye = N.value;
                            if ("string" == typeof ye && (ye = [ye]), 0 === ye.length) return;
                            this.maybeSetNormalizedName(N.name, H);
                            const le = ("a" === N.op ? this.headers.get(H) : void 0) || [];
                            le.push(...ye), this.headers.set(H, le);
                            break;
                        case "d":
                            const Pe = N.value;
                            if (Pe) {
                                let be = this.headers.get(H);
                                if (!be) return;
                                be = be.filter(we => -1 === Pe.indexOf(we)), 0 === be.length ? (this.headers.delete(H), this.normalizedNames.delete(H)) : this.headers.set(H, be)
                            } else this.headers.delete(H), this.normalizedNames.delete(H)
                    }
                }
                forEach(N) {
                    this.init(), Array.from(this.normalizedNames.keys()).forEach(H => N(this.normalizedNames.get(H), this.headers.get(H)))
                }
            }
            class z {
                encodeKey(N) {
                    return De(N)
                }
                encodeValue(N) {
                    return De(N)
                }
                decodeKey(N) {
                    return decodeURIComponent(N)
                }
                decodeValue(N) {
                    return decodeURIComponent(N)
                }
            }
            const q = /%(\d[a-f0-9])/gi,
                Ae = {
                    40: "@",
                    "3A": ":",
                    24: "$",
                    "2C": ",",
                    "3B": ";",
                    "2B": "+",
                    "3D": "=",
                    "3F": "?",
                    "2F": "/"
                };

            function De(ne) {
                return encodeURIComponent(ne).replace(q, (N, H) => {
                    var ye;
                    return null !== (ye = Ae[H]) && void 0 !== ye ? ye : N
                })
            }

            function ge(ne) {
                return `${ne}`
            }
            class ue {
                constructor(N = {}) {
                    if (this.updates = null, this.cloneFrom = null, this.encoder = N.encoder || new z, N.fromString) {
                        if (N.fromObject) throw new Error("Cannot specify both fromString and fromObject.");
                        this.map = function(ne, N) {
                            const H = new Map;
                            return ne.length > 0 && ne.replace(/^\?/, "").split("&").forEach(le => {
                                const Pe = le.indexOf("="),
                                    [be, we] = -1 == Pe ? [N.decodeKey(le), ""] : [N.decodeKey(le.slice(0, Pe)), N.decodeValue(le.slice(Pe + 1))],
                                    Ke = H.get(be) || [];
                                Ke.push(we), H.set(be, Ke)
                            }), H
                        }(N.fromString, this.encoder)
                    } else N.fromObject ? (this.map = new Map, Object.keys(N.fromObject).forEach(H => {
                        const ye = N.fromObject[H];
                        this.map.set(H, Array.isArray(ye) ? ye : [ye])
                    })) : this.map = null
                }
                has(N) {
                    return this.init(), this.map.has(N)
                }
                get(N) {
                    this.init();
                    const H = this.map.get(N);
                    return H ? H[0] : null
                }
                getAll(N) {
                    return this.init(), this.map.get(N) || null
                }
                keys() {
                    return this.init(), Array.from(this.map.keys())
                }
                append(N, H) {
                    return this.clone({
                        param: N,
                        value: H,
                        op: "a"
                    })
                }
                appendAll(N) {
                    const H = [];
                    return Object.keys(N).forEach(ye => {
                        const le = N[ye];
                        Array.isArray(le) ? le.forEach(Pe => {
                            H.push({
                                param: ye,
                                value: Pe,
                                op: "a"
                            })
                        }) : H.push({
                            param: ye,
                            value: le,
                            op: "a"
                        })
                    }), this.clone(H)
                }
                set(N, H) {
                    return this.clone({
                        param: N,
                        value: H,
                        op: "s"
                    })
                }
                delete(N, H) {
                    return this.clone({
                        param: N,
                        value: H,
                        op: "d"
                    })
                }
                toString() {
                    return this.init(), this.keys().map(N => {
                        const H = this.encoder.encodeKey(N);
                        return this.map.get(N).map(ye => H + "=" + this.encoder.encodeValue(ye)).join("&")
                    }).filter(N => "" !== N).join("&")
                }
                clone(N) {
                    const H = new ue({
                        encoder: this.encoder
                    });
                    return H.cloneFrom = this.cloneFrom || this, H.updates = (this.updates || []).concat(N), H
                }
                init() {
                    null === this.map && (this.map = new Map), null !== this.cloneFrom && (this.cloneFrom.init(), this.cloneFrom.keys().forEach(N => this.map.set(N, this.cloneFrom.map.get(N))), this.updates.forEach(N => {
                        switch (N.op) {
                            case "a":
                            case "s":
                                const H = ("a" === N.op ? this.map.get(N.param) : void 0) || [];
                                H.push(ge(N.value)), this.map.set(N.param, H);
                                break;
                            case "d":
                                if (void 0 === N.value) {
                                    this.map.delete(N.param);
                                    break
                                } {
                                    let ye = this.map.get(N.param) || [];
                                    const le = ye.indexOf(ge(N.value)); - 1 !== le && ye.splice(le, 1), ye.length > 0 ? this.map.set(N.param, ye) : this.map.delete(N.param)
                                }
                        }
                    }), this.cloneFrom = this.updates = null)
                }
            }
            class me {
                constructor() {
                    this.map = new Map
                }
                set(N, H) {
                    return this.map.set(N, H), this
                }
                get(N) {
                    return this.map.has(N) || this.map.set(N, N.defaultValue()), this.map.get(N)
                }
                delete(N) {
                    return this.map.delete(N), this
                }
                keys() {
                    return this.map.keys()
                }
            }

            function on(ne) {
                return "undefined" != typeof ArrayBuffer && ne instanceof ArrayBuffer
            }

            function Jt(ne) {
                return "undefined" != typeof Blob && ne instanceof Blob
            }

            function xe(ne) {
                return "undefined" != typeof FormData && ne instanceof FormData
            }
            class wt {
                constructor(N, H, ye, le) {
                    let Pe;
                    if (this.url = H, this.body = null, this.reportProgress = !1, this.withCredentials = !1, this.responseType = "json", this.method = N.toUpperCase(), function(ne) {
                            switch (ne) {
                                case "DELETE":
                                case "GET":
                                case "HEAD":
                                case "OPTIONS":
                                case "JSONP":
                                    return !1;
                                default:
                                    return !0
                            }
                        }(this.method) || le ? (this.body = void 0 !== ye ? ye : null, Pe = le) : Pe = ye, Pe && (this.reportProgress = !!Pe.reportProgress, this.withCredentials = !!Pe.withCredentials, Pe.responseType && (this.responseType = Pe.responseType), Pe.headers && (this.headers = Pe.headers), Pe.context && (this.context = Pe.context), Pe.params && (this.params = Pe.params)), this.headers || (this.headers = new U), this.context || (this.context = new me), this.params) {
                        const be = this.params.toString();
                        if (0 === be.length) this.urlWithParams = H;
                        else {
                            const we = H.indexOf("?");
                            this.urlWithParams = H + (-1 === we ? "?" : we < H.length - 1 ? "&" : "") + be
                        }
                    } else this.params = new ue, this.urlWithParams = H
                }
                serializeBody() {
                    return null === this.body ? null : on(this.body) || Jt(this.body) || xe(this.body) || "undefined" != typeof URLSearchParams && this.body instanceof URLSearchParams || "string" == typeof this.body ? this.body : this.body instanceof ue ? this.body.toString() : "object" == typeof this.body || "boolean" == typeof this.body || Array.isArray(this.body) ? JSON.stringify(this.body) : this.body.toString()
                }
                detectContentTypeHeader() {
                    return null === this.body || xe(this.body) ? null : Jt(this.body) ? this.body.type || null : on(this.body) ? null : "string" == typeof this.body ? "text/plain" : this.body instanceof ue ? "application/x-www-form-urlencoded;charset=UTF-8" : "object" == typeof this.body || "number" == typeof this.body || "boolean" == typeof this.body ? "application/json" : null
                }
                clone(N = {}) {
                    var H;
                    const ye = N.method || this.method,
                        le = N.url || this.url,
                        Pe = N.responseType || this.responseType,
                        be = void 0 !== N.body ? N.body : this.body,
                        we = void 0 !== N.withCredentials ? N.withCredentials : this.withCredentials,
                        Ke = void 0 !== N.reportProgress ? N.reportProgress : this.reportProgress;
                    let Vt = N.headers || this.headers,
                        dn = N.params || this.params;
                    const Pt = null !== (H = N.context) && void 0 !== H ? H : this.context;
                    return void 0 !== N.setHeaders && (Vt = Object.keys(N.setHeaders).reduce((Xt, yt) => Xt.set(yt, N.setHeaders[yt]), Vt)), N.setParams && (dn = Object.keys(N.setParams).reduce((Xt, yt) => Xt.set(yt, N.setParams[yt]), dn)), new wt(ye, le, be, {
                        params: dn,
                        headers: Vt,
                        context: Pt,
                        reportProgress: Ke,
                        responseType: Pe,
                        withCredentials: we
                    })
                }
            }
            var ce = (() => ((ce = ce || {})[ce.Sent = 0] = "Sent", ce[ce.UploadProgress = 1] = "UploadProgress", ce[ce.ResponseHeader = 2] = "ResponseHeader", ce[ce.DownloadProgress = 3] = "DownloadProgress", ce[ce.Response = 4] = "Response", ce[ce.User = 5] = "User", ce))();
            class Me {
                constructor(N, H = 200, ye = "OK") {
                    this.headers = N.headers || new U, this.status = void 0 !== N.status ? N.status : H, this.statusText = N.statusText || ye, this.url = N.url || null, this.ok = this.status >= 200 && this.status < 300
                }
            }
            class ke extends Me {
                constructor(N = {}) {
                    super(N), this.type = ce.ResponseHeader
                }
                clone(N = {}) {
                    return new ke({
                        headers: N.headers || this.headers,
                        status: void 0 !== N.status ? N.status : this.status,
                        statusText: N.statusText || this.statusText,
                        url: N.url || this.url || void 0
                    })
                }
            }
            class Ve extends Me {
                constructor(N = {}) {
                    super(N), this.type = ce.Response, this.body = void 0 !== N.body ? N.body : null
                }
                clone(N = {}) {
                    return new Ve({
                        body: void 0 !== N.body ? N.body : this.body,
                        headers: N.headers || this.headers,
                        status: void 0 !== N.status ? N.status : this.status,
                        statusText: N.statusText || this.statusText,
                        url: N.url || this.url || void 0
                    })
                }
            }
            class Le extends Me {
                constructor(N) {
                    super(N, 0, "Unknown Error"), this.name = "HttpErrorResponse", this.ok = !1, this.message = this.status >= 200 && this.status < 300 ? `Http failure during parsing for ${N.url||"(unknown url)"}` : `Http failure response for ${N.url||"(unknown url)"}: ${N.status} ${N.statusText}`, this.error = N.error || null
                }
            }

            function st(ne, N) {
                return {
                    body: N,
                    headers: ne.headers,
                    context: ne.context,
                    observe: ne.observe,
                    params: ne.params,
                    reportProgress: ne.reportProgress,
                    responseType: ne.responseType,
                    withCredentials: ne.withCredentials
                }
            }
            let Ne = (() => {
                class ne {
                    constructor(H) {
                        this.handler = H
                    }
                    request(H, ye, le = {}) {
                        let Pe;
                        if (H instanceof wt) Pe = H;
                        else {
                            let Ke, Vt;
                            Ke = le.headers instanceof U ? le.headers : new U(le.headers), le.params && (Vt = le.params instanceof ue ? le.params : new ue({
                                fromObject: le.params
                            })), Pe = new wt(H, ye, void 0 !== le.body ? le.body : null, {
                                headers: Ke,
                                context: le.context,
                                params: Vt,
                                reportProgress: le.reportProgress,
                                responseType: le.responseType || "json",
                                withCredentials: le.withCredentials
                            })
                        }
                        const be = (0, he.of)(Pe).pipe((0, Z.b)(Ke => this.handler.handle(Ke)));
                        if (H instanceof wt || "events" === le.observe) return be;
                        const we = be.pipe((0, Y.h)(Ke => Ke instanceof Ve));
                        switch (le.observe || "body") {
                            case "body":
                                switch (Pe.responseType) {
                                    case "arraybuffer":
                                        return we.pipe((0, re.U)(Ke => {
                                            if (null !== Ke.body && !(Ke.body instanceof ArrayBuffer)) throw new Error("Response is not an ArrayBuffer.");
                                            return Ke.body
                                        }));
                                    case "blob":
                                        return we.pipe((0, re.U)(Ke => {
                                            if (null !== Ke.body && !(Ke.body instanceof Blob)) throw new Error("Response is not a Blob.");
                                            return Ke.body
                                        }));
                                    case "text":
                                        return we.pipe((0, re.U)(Ke => {
                                            if (null !== Ke.body && "string" != typeof Ke.body) throw new Error("Response is not a string.");
                                            return Ke.body
                                        }));
                                    case "json":
                                    default:
                                        return we.pipe((0, re.U)(Ke => Ke.body))
                                }
                            case "response":
                                return we;
                            default:
                                throw new Error(`Unreachable: unhandled observe type ${le.observe}}`)
                        }
                    }
                    delete(H, ye = {}) {
                        return this.request("DELETE", H, ye)
                    }
                    get(H, ye = {}) {
                        return this.request("GET", H, ye)
                    }
                    head(H, ye = {}) {
                        return this.request("HEAD", H, ye)
                    }
                    jsonp(H, ye) {
                        return this.request("JSONP", H, {
                            params: (new ue).append(ye, "JSONP_CALLBACK"),
                            observe: "body",
                            responseType: "json"
                        })
                    }
                    options(H, ye = {}) {
                        return this.request("OPTIONS", H, ye)
                    }
                    patch(H, ye, le = {}) {
                        return this.request("PATCH", H, st(le, ye))
                    }
                    post(H, ye, le = {}) {
                        return this.request("POST", H, st(le, ye))
                    }
                    put(H, ye, le = {}) {
                        return this.request("PUT", H, st(le, ye))
                    }
                }
                return ne.\u0275fac = function(H) {
                    return new(H || ne)(m.LFG(ee))
                }, ne.\u0275prov = m.Yz7({
                    token: ne,
                    factory: ne.\u0275fac
                }), ne
            })();
            class Ut {
                constructor(N, H) {
                    this.next = N, this.interceptor = H
                }
                handle(N) {
                    return this.interceptor.intercept(N, this.next)
                }
            }
            const er = new m.OlP("HTTP_INTERCEPTORS");
            let Tr = (() => {
                class ne {
                    intercept(H, ye) {
                        return ye.handle(H)
                    }
                }
                return ne.\u0275fac = function(H) {
                    return new(H || ne)
                }, ne.\u0275prov = m.Yz7({
                    token: ne,
                    factory: ne.\u0275fac
                }), ne
            })();
            const de = /^\)\]\}',?\n/;
            let je = (() => {
                class ne {
                    constructor(H) {
                        this.xhrFactory = H
                    }
                    handle(H) {
                        if ("JSONP" === H.method) throw new Error("Attempted to construct Jsonp request without HttpClientJsonpModule installed.");
                        return new oe.y(ye => {
                            const le = this.xhrFactory.build();
                            if (le.open(H.method, H.urlWithParams), H.withCredentials && (le.withCredentials = !0), H.headers.forEach((yt, ot) => le.setRequestHeader(yt, ot.join(","))), H.headers.has("Accept") || le.setRequestHeader("Accept", "application/json, text/plain, */*"), !H.headers.has("Content-Type")) {
                                const yt = H.detectContentTypeHeader();
                                null !== yt && le.setRequestHeader("Content-Type", yt)
                            }
                            if (H.responseType) {
                                const yt = H.responseType.toLowerCase();
                                le.responseType = "json" !== yt ? yt : "text"
                            }
                            const Pe = H.serializeBody();
                            let be = null;
                            const we = () => {
                                    if (null !== be) return be;
                                    const yt = 1223 === le.status ? 204 : le.status,
                                        ot = le.statusText || "OK",
                                        Ar = new U(le.getAllResponseHeaders()),
                                        Ue = function(ne) {
                                            return "responseURL" in ne && ne.responseURL ? ne.responseURL : /^X-Request-URL:/m.test(ne.getAllResponseHeaders()) ? ne.getResponseHeader("X-Request-URL") : null
                                        }(le) || H.url;
                                    return be = new ke({
                                        headers: Ar,
                                        status: yt,
                                        statusText: ot,
                                        url: Ue
                                    }), be
                                },
                                Ke = () => {
                                    let {
                                        headers: yt,
                                        status: ot,
                                        statusText: Ar,
                                        url: Ue
                                    } = we(), fn = null;
                                    204 !== ot && (fn = void 0 === le.response ? le.responseText : le.response), 0 === ot && (ot = fn ? 200 : 0);
                                    let tr = ot >= 200 && ot < 300;
                                    if ("json" === H.responseType && "string" == typeof fn) {
                                        const mr = fn;
                                        fn = fn.replace(de, "");
                                        try {
                                            fn = "" !== fn ? JSON.parse(fn) : null
                                        } catch (_t) {
                                            fn = mr, tr && (tr = !1, fn = {
                                                error: _t,
                                                text: fn
                                            })
                                        }
                                    }
                                    tr ? (ye.next(new Ve({
                                        body: fn,
                                        headers: yt,
                                        status: ot,
                                        statusText: Ar,
                                        url: Ue || void 0
                                    })), ye.complete()) : ye.error(new Le({
                                        error: fn,
                                        headers: yt,
                                        status: ot,
                                        statusText: Ar,
                                        url: Ue || void 0
                                    }))
                                },
                                Vt = yt => {
                                    const {
                                        url: ot
                                    } = we(), Ar = new Le({
                                        error: yt,
                                        status: le.status || 0,
                                        statusText: le.statusText || "Unknown Error",
                                        url: ot || void 0
                                    });
                                    ye.error(Ar)
                                };
                            let dn = !1;
                            const Pt = yt => {
                                    dn || (ye.next(we()), dn = !0);
                                    let ot = {
                                        type: ce.DownloadProgress,
                                        loaded: yt.loaded
                                    };
                                    yt.lengthComputable && (ot.total = yt.total), "text" === H.responseType && !!le.responseText && (ot.partialText = le.responseText), ye.next(ot)
                                },
                                Xt = yt => {
                                    let ot = {
                                        type: ce.UploadProgress,
                                        loaded: yt.loaded
                                    };
                                    yt.lengthComputable && (ot.total = yt.total), ye.next(ot)
                                };
                            return le.addEventListener("load", Ke), le.addEventListener("error", Vt), le.addEventListener("timeout", Vt), le.addEventListener("abort", Vt), H.reportProgress && (le.addEventListener("progress", Pt), null !== Pe && le.upload && le.upload.addEventListener("progress", Xt)), le.send(Pe), ye.next({
                                type: ce.Sent
                            }), () => {
                                le.removeEventListener("error", Vt), le.removeEventListener("abort", Vt), le.removeEventListener("load", Ke), le.removeEventListener("timeout", Vt), H.reportProgress && (le.removeEventListener("progress", Pt), null !== Pe && le.upload && le.upload.removeEventListener("progress", Xt)), le.readyState !== le.DONE && le.abort()
                            }
                        })
                    }
                }
                return ne.\u0275fac = function(H) {
                    return new(H || ne)(m.LFG(A.JF))
                }, ne.\u0275prov = m.Yz7({
                    token: ne,
                    factory: ne.\u0275fac
                }), ne
            })();
            const Ht = new m.OlP("XSRF_COOKIE_NAME"),
                pt = new m.OlP("XSRF_HEADER_NAME");
            class Wt {}
            let Gt = (() => {
                    class ne {
                        constructor(H, ye, le) {
                            this.doc = H, this.platform = ye, this.cookieName = le, this.lastCookieString = "", this.lastToken = null, this.parseCount = 0
                        }
                        getToken() {
                            if ("server" === this.platform) return null;
                            const H = this.doc.cookie || "";
                            return H !== this.lastCookieString && (this.parseCount++, this.lastToken = (0, A.Mx)(H, this.cookieName), this.lastCookieString = H), this.lastToken
                        }
                    }
                    return ne.\u0275fac = function(H) {
                        return new(H || ne)(m.LFG(A.K0), m.LFG(m.Lbi), m.LFG(Ht))
                    }, ne.\u0275prov = m.Yz7({
                        token: ne,
                        factory: ne.\u0275fac
                    }), ne
                })(),
                cn = (() => {
                    class ne {
                        constructor(H, ye) {
                            this.tokenService = H, this.headerName = ye
                        }
                        intercept(H, ye) {
                            const le = H.url.toLowerCase();
                            if ("GET" === H.method || "HEAD" === H.method || le.startsWith("http://") || le.startsWith("https://")) return ye.handle(H);
                            const Pe = this.tokenService.getToken();
                            return null !== Pe && !H.headers.has(this.headerName) && (H = H.clone({
                                headers: H.headers.set(this.headerName, Pe)
                            })), ye.handle(H)
                        }
                    }
                    return ne.\u0275fac = function(H) {
                        return new(H || ne)(m.LFG(Wt), m.LFG(pt))
                    }, ne.\u0275prov = m.Yz7({
                        token: ne,
                        factory: ne.\u0275fac
                    }), ne
                })(),
                Kt = (() => {
                    class ne {
                        constructor(H, ye) {
                            this.backend = H, this.injector = ye, this.chain = null
                        }
                        handle(H) {
                            if (null === this.chain) {
                                const ye = this.injector.get(er, []);
                                this.chain = ye.reduceRight((le, Pe) => new Ut(le, Pe), this.backend)
                            }
                            return this.chain.handle(H)
                        }
                    }
                    return ne.\u0275fac = function(H) {
                        return new(H || ne)(m.LFG(Q), m.LFG(m.zs3))
                    }, ne.\u0275prov = m.Yz7({
                        token: ne,
                        factory: ne.\u0275fac
                    }), ne
                })(),
                fi = (() => {
                    class ne {
                        static disable() {
                            return {
                                ngModule: ne,
                                providers: [{
                                    provide: cn,
                                    useClass: Tr
                                }]
                            }
                        }
                        static withOptions(H = {}) {
                            return {
                                ngModule: ne,
                                providers: [H.cookieName ? {
                                    provide: Ht,
                                    useValue: H.cookieName
                                } : [], H.headerName ? {
                                    provide: pt,
                                    useValue: H.headerName
                                } : []]
                            }
                        }
                    }
                    return ne.\u0275fac = function(H) {
                        return new(H || ne)
                    }, ne.\u0275mod = m.oAB({
                        type: ne
                    }), ne.\u0275inj = m.cJS({
                        providers: [cn, {
                            provide: er,
                            useExisting: cn,
                            multi: !0
                        }, {
                            provide: Wt,
                            useClass: Gt
                        }, {
                            provide: Ht,
                            useValue: "XSRF-TOKEN"
                        }, {
                            provide: pt,
                            useValue: "X-XSRF-TOKEN"
                        }]
                    }), ne
                })(),
                Yt = (() => {
                    class ne {}
                    return ne.\u0275fac = function(H) {
                        return new(H || ne)
                    }, ne.\u0275mod = m.oAB({
                        type: ne
                    }), ne.\u0275inj = m.cJS({
                        providers: [Ne, {
                            provide: ee,
                            useClass: Kt
                        }, je, {
                            provide: Q,
                            useExisting: je
                        }],
                        imports: [
                            [fi.withOptions({
                                cookieName: "XSRF-TOKEN",
                                headerName: "X-XSRF-TOKEN"
                            })]
                        ]
                    }), ne
                })()
        },
        3018: (We, fe, O) => {
            "use strict";
            O.d(fe, {
                deG: () => Nr,
                tb: () => o_,
                AFp: () => r_,
                ip1: () => pf,
                CZH: () => al,
                hGG: () => AS,
                z2F: () => nu,
                sBO: () => g0,
                Sil: () => tu,
                _Vd: () => Xa,
                EJc: () => l_,
                SBq: () => ui,
                qLn: () => Pa,
                vpe: () => ci,
                gxx: () => La,
                tBr: () => Ni,
                XFs: () => N,
                OlP: () => $e,
                zs3: () => sn,
                ZZ4: () => Hu,
                aQg: () => $u,
                soG: () => Xu,
                YKP: () => qm,
                v3s: () => oS,
                h0i: () => ia,
                PXZ: () => eS,
                R0b: () => kr,
                FiY: () => Ie,
                Lbi: () => i_,
                g9A: () => s_,
                n_E: () => Xl,
                Qsj: () => e0,
                FYo: () => Uu,
                JOm: () => si,
                Tiy: () => Ud,
                q3G: () => gn,
                tp0: () => Ze,
                EAV: () => cS,
                Rgc: () => Hl,
                dDg: () => f_,
                DyG: () => Ri,
                GfV: () => Um,
                s_b: () => Wu,
                ifc: () => Pt,
                eFA: () => __,
                G48: () => KT,
                Gpc: () => ge,
                _c5: () => CS,
                VLi: () => WT,
                c2e: () => a_,
                zSh: () => Pl,
                wAp: () => Je,
                vHH: () => rt,
                EiD: () => rh,
                mCW: () => Dl,
                qzn: () => Ia,
                JVY: () => aE,
                pB0: () => dE,
                eBb: () => uE,
                L6k: () => lE,
                LAX: () => cE,
                cg1: () => Rd,
                Tjo: () => _S,
                kL8: () => um,
                yhl: () => qf,
                dqk: () => Ue,
                sIi: () => xl,
                CqO: () => bd,
                QGY: () => Dd,
                F4k: () => mg,
                RDi: () => v,
                AaK: () => q,
                z3N: () => Fi,
                qOj: () => cd,
                TTD: () => Kr,
                _Bn: () => Lm,
                xp6: () => $h,
                uIk: () => hd,
                ekj: () => Md,
                Suo: () => Fy,
                Xpm: () => cs,
                lG2: () => en,
                Yz7: () => pt,
                cJS: () => Gt,
                oAB: () => ds,
                Yjl: () => In,
                Y36: () => Fl,
                _UZ: () => fg,
                qZA: () => vd,
                TgZ: () => Cd,
                EpF: () => gg,
                n5z: () => wa,
                Ikx: () => Od,
                LFG: () => Rt,
                $8M: () => d,
                NdJ: () => wd,
                CRH: () => Ly,
                kcU: () => ma,
                O4$: () => pa,
                ALo: () => Iy,
                lcZ: () => Py,
                Hsn: () => vg,
                F$t: () => Cg,
                Q6J: () => _d,
                s9C: () => Sd,
                DdM: () => by,
                iGM: () => xy,
                MAs: () => eg,
                Jf7: () => yh,
                CHM: () => ko,
                oJD: () => sh,
                LSH: () => Dc,
                B6R: () => Ao,
                kYT: () => Mn,
                YNc: () => Xp,
                _uU: () => zg,
                Oqu: () => Pd,
                hij: () => Nu,
                Gf: () => Ny
            });
            var A = O(9765),
                m = O(5319),
                he = O(7574),
                oe = O(6682),
                Z = O(2441);
            var ee = O(1307);

            function Q() {
                return new A.xQ
            }

            function z(e) {
                for (let t in e)
                    if (e[t] === z) return t;
                throw Error("Could not find renamed property on target object.")
            }

            function te(e, t) {
                for (const n in t) t.hasOwnProperty(n) && !e.hasOwnProperty(n) && (e[n] = t[n])
            }

            function q(e) {
                if ("string" == typeof e) return e;
                if (Array.isArray(e)) return "[" + e.map(q).join(", ") + "]";
                if (null == e) return "" + e;
                if (e.overriddenName) return `${e.overriddenName}`;
                if (e.name) return `${e.name}`;
                const t = e.toString();
                if (null == t) return "" + t;
                const n = t.indexOf("\n");
                return -1 === n ? t : t.substring(0, n)
            }

            function Ae(e, t) {
                return null == e || "" === e ? null === t ? "" : t : null == t || "" === t ? e : e + " " + t
            }
            const De = z({
                __forward_ref__: z
            });

            function ge(e) {
                return e.__forward_ref__ = ge, e.toString = function() {
                    return q(this())
                }, e
            }

            function ue(e) {
                return Be(e) ? e() : e
            }

            function Be(e) {
                return "function" == typeof e && e.hasOwnProperty(De) && e.__forward_ref__ === ge
            }
            class rt extends Error {
                constructor(t, n) {
                    super(function(e, t) {
                        return `${e?`NG0${e}: `:""}${t}`
                    }(t, n)), this.code = t
                }
            }

            function xe(e) {
                return "string" == typeof e ? e : null == e ? "" : String(e)
            }

            function xt(e) {
                return "function" == typeof e ? e.name || e.toString() : "object" == typeof e && null != e && "function" == typeof e.type ? e.type.name || e.type.toString() : xe(e)
            }

            function ke(e, t) {
                const n = t ? ` in ${t}` : "";
                throw new rt("201", `No provider for ${xt(e)} found${n}`)
            }

            function X(e, t) {
                null == e && function(e, t, n, r) {
                    throw new Error(`ASSERTION ERROR: ${e}` + (null == r ? "" : ` [Expected=> ${n} ${r} ${t} <=Actual]`))
                }(t, e, null, "!=")
            }

            function pt(e) {
                return {
                    token: e.token,
                    providedIn: e.providedIn || null,
                    factory: e.factory,
                    value: void 0
                }
            }

            function Gt(e) {
                return {
                    providers: e.providers || [],
                    imports: e.imports || []
                }
            }

            function cn(e) {
                return Kt(e, Yt) || Kt(e, hi)
            }

            function Kt(e, t) {
                return e.hasOwnProperty(t) ? e[t] : null
            }

            function fi(e) {
                return e && (e.hasOwnProperty(Sr) || e.hasOwnProperty(ne)) ? e[Sr] : null
            }
            const Yt = z({
                    \u0275prov: z
                }),
                Sr = z({
                    \u0275inj: z
                }),
                hi = z({
                    ngInjectableDef: z
                }),
                ne = z({
                    ngInjectorDef: z
                });
            var N = (() => ((N = N || {})[N.Default = 0] = "Default", N[N.Host = 1] = "Host", N[N.Self = 2] = "Self", N[N.SkipSelf = 4] = "SkipSelf", N[N.Optional = 8] = "Optional", N))();
            let H;

            function le(e) {
                const t = H;
                return H = e, t
            }

            function Pe(e, t, n) {
                const r = cn(e);
                return r && "root" == r.providedIn ? void 0 === r.value ? r.value = r.factory() : r.value : n & N.Optional ? null : void 0 !== t ? t : void ke(q(e), "Injector")
            }

            function we(e) {
                return {
                    toString: e
                }.toString()
            }
            var Ke = (() => ((Ke = Ke || {})[Ke.OnPush = 0] = "OnPush", Ke[Ke.Default = 1] = "Default", Ke))(),
                Pt = (() => ((Pt = Pt || {})[Pt.Emulated = 0] = "Emulated", Pt[Pt.None = 2] = "None", Pt[Pt.ShadowDom = 3] = "ShadowDom", Pt))();
            const Xt = "undefined" != typeof globalThis && globalThis,
                yt = "undefined" != typeof window && window,
                ot = "undefined" != typeof self && "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && self,
                Ue = Xt || "undefined" != typeof global && global || yt || ot,
                mr = {},
                _t = [],
                js = z({
                    \u0275cmp: z
                }),
                Bs = z({
                    \u0275dir: z
                }),
                jr = z({
                    \u0275pipe: z
                }),
                at = z({
                    \u0275mod: z
                }),
                $i = z({
                    \u0275loc: z
                }),
                Dn = z({
                    \u0275fac: z
                }),
                Mr = z({
                    __NG_ELEMENT_ID__: z
                });
            let pi = 0;

            function cs(e) {
                return we(() => {
                    const n = {},
                        r = {
                            type: e.type,
                            providersResolver: null,
                            decls: e.decls,
                            vars: e.vars,
                            factory: null,
                            template: e.template || null,
                            consts: e.consts || null,
                            ngContentSelectors: e.ngContentSelectors,
                            hostBindings: e.hostBindings || null,
                            hostVars: e.hostVars || 0,
                            hostAttrs: e.hostAttrs || null,
                            contentQueries: e.contentQueries || null,
                            declaredInputs: n,
                            inputs: null,
                            outputs: null,
                            exportAs: e.exportAs || null,
                            onPush: e.changeDetection === Ke.OnPush,
                            directiveDefs: null,
                            pipeDefs: null,
                            selectors: e.selectors || _t,
                            viewQuery: e.viewQuery || null,
                            features: e.features || null,
                            data: e.data || {},
                            encapsulation: e.encapsulation || Pt.Emulated,
                            id: "c",
                            styles: e.styles || _t,
                            _: null,
                            setInput: null,
                            schemas: e.schemas || null,
                            tView: null
                        },
                        s = e.directives,
                        i = e.features,
                        l = e.pipes;
                    return r.id += pi++, r.inputs = fs(e.inputs, n), r.outputs = fs(e.outputs), i && i.forEach(u => u(r)), r.directiveDefs = s ? () => ("function" == typeof s ? s() : s).map(zi) : null, r.pipeDefs = l ? () => ("function" == typeof l ? l() : l).map(Gn) : null, r
                })
            }

            function Ao(e, t, n) {
                const r = e.\u0275cmp;
                r.directiveDefs = () => t.map(zi), r.pipeDefs = () => n.map(Gn)
            }

            function zi(e) {
                return tn(e) || function(e) {
                    return e[Bs] || null
                }(e)
            }

            function Gn(e) {
                return function(e) {
                    return e[jr] || null
                }(e)
            }
            const Gi = {};

            function ds(e) {
                return we(() => {
                    const t = {
                        type: e.type,
                        bootstrap: e.bootstrap || _t,
                        declarations: e.declarations || _t,
                        imports: e.imports || _t,
                        exports: e.exports || _t,
                        transitiveCompileScopes: null,
                        schemas: e.schemas || null,
                        id: e.id || null
                    };
                    return null != e.id && (Gi[e.id] = e.type), t
                })
            }

            function Mn(e, t) {
                return we(() => {
                    const n = bn(e, !0);
                    n.declarations = t.declarations || _t, n.imports = t.imports || _t, n.exports = t.exports || _t
                })
            }

            function fs(e, t) {
                if (null == e) return mr;
                const n = {};
                for (const r in e)
                    if (e.hasOwnProperty(r)) {
                        let s = e[r],
                            i = s;
                        Array.isArray(s) && (i = s[1], s = s[0]), n[s] = r, t && (t[s] = i)
                    } return n
            }
            const en = cs;

            function In(e) {
                return {
                    type: e.type,
                    name: e.name,
                    factory: null,
                    pure: !1 !== e.pure,
                    onDestroy: e.type.prototype.ngOnDestroy || null
                }
            }

            function tn(e) {
                return e[js] || null
            }

            function bn(e, t) {
                const n = e[at] || null;
                if (!n && !0 === t) throw new Error(`Type ${q(e)} does not have '\u0275mod' property.`);
                return n
            }

            function Yn(e) {
                return Array.isArray(e) && "object" == typeof e[1]
            }

            function St(e) {
                return Array.isArray(e) && !0 === e[1]
            }

            function Hr(e) {
                return 0 != (8 & e.flags)
            }

            function $r(e) {
                return 2 == (2 & e.flags)
            }

            function zr(e) {
                return 1 == (1 & e.flags)
            }

            function qt(e) {
                return null !== e.template
            }

            function gs(e) {
                return 0 != (512 & e[2])
            }

            function Sn(e, t) {
                return e.hasOwnProperty(Dn) ? e[Dn] : null
            }
            class bi {
                constructor(t, n, r) {
                    this.previousValue = t, this.currentValue = n, this.firstChange = r
                }
                isFirstChange() {
                    return this.firstChange
                }
            }

            function Kr() {
                return qi
            }

            function qi(e) {
                return e.type.prototype.ngOnChanges && (e.setInput = Qi), Zi
            }

            function Zi() {
                const e = Yr(this),
                    t = null == e ? void 0 : e.current;
                if (t) {
                    const n = e.previous;
                    if (n === mr) e.previous = t;
                    else
                        for (let r in t) n[r] = t[r];
                    e.current = null, this.ngOnChanges(t)
                }
            }

            function Qi(e, t, n, r) {
                const s = Yr(e) || function(e, t) {
                        return e[Gs] = t
                    }(e, {
                        previous: mr,
                        current: null
                    }),
                    i = s.current || (s.current = {}),
                    l = s.previous,
                    u = this.declaredInputs[n],
                    h = l[u];
                i[u] = new bi(h && h.currentValue, t, l === mr), e[r] = t
            }
            Kr.ngInherit = !0;
            const Gs = "__ngSimpleChanges__";

            function Yr(e) {
                return e[Gs] || null
            }
            const wi = "http://www.w3.org/2000/svg";
            let T;

            function v(e) {
                T = e
            }

            function I() {
                return void 0 !== T ? T : "undefined" != typeof document ? document : void 0
            }

            function K(e) {
                return !!e.listen
            }
            const Re = {
                createRenderer: (e, t) => I()
            };

            function Xe(e) {
                for (; Array.isArray(e);) e = e[0];
                return e
            }

            function Mt(e, t) {
                return Xe(t[e])
            }

            function dt(e, t) {
                return Xe(t[e.index])
            }

            function lr(e, t) {
                return e.data[t]
            }

            function Rn(e, t) {
                return e[t]
            }

            function Ot(e, t) {
                const n = t[e];
                return Yn(n) ? n : n[0]
            }

            function En(e) {
                return 4 == (4 & e[2])
            }

            function Zt(e) {
                return 128 == (128 & e[2])
            }

            function jn(e, t) {
                return null == t ? null : e[t]
            }

            function Ks(e) {
                e[18] = 0
            }

            function Or(e, t) {
                e[5] += t;
                let n = e,
                    r = e[3];
                for (; null !== r && (1 === t && 1 === n[5] || -1 === t && 0 === n[5]);) r[5] += t, n = r, r = r[3]
            }
            const Qe = {
                lFrame: io(null),
                bindingsEnabled: !0,
                isInCheckNoChangesMode: !1
            };

            function Xi() {
                return Qe.bindingsEnabled
            }

            function pe() {
                return Qe.lFrame.lView
            }

            function gt() {
                return Qe.lFrame.tView
            }

            function ko(e) {
                return Qe.lFrame.contextLView = e, e[8]
            }

            function an() {
                let e = Si();
                for (; null !== e && 64 === e.type;) e = e.parent;
                return e
            }

            function Si() {
                return Qe.lFrame.currentTNode
            }

            function ur(e, t) {
                const n = Qe.lFrame;
                n.currentTNode = e, n.isParent = t
            }

            function eo() {
                return Qe.lFrame.isParent
            }

            function Ai() {
                Qe.lFrame.isParent = !1
            }

            function Es() {
                return Qe.isInCheckNoChangesMode
            }

            function to(e) {
                Qe.isInCheckNoChangesMode = e
            }

            function xn() {
                const e = Qe.lFrame;
                let t = e.bindingRootIndex;
                return -1 === t && (t = e.bindingRootIndex = e.tView.bindingStartIndex), t
            }

            function Zn() {
                return Qe.lFrame.bindingIndex++
            }

            function jo(e, t) {
                const n = Qe.lFrame;
                n.bindingIndex = n.bindingRootIndex = e, Bo(t)
            }

            function Bo(e) {
                Qe.lFrame.currentDirectiveIndex = e
            }

            function fa() {
                return Qe.lFrame.currentQueryIndex
            }

            function Ho(e) {
                Qe.lFrame.currentQueryIndex = e
            }

            function pl(e) {
                const t = e[1];
                return 2 === t.type ? t.declTNode : 1 === t.type ? e[6] : null
            }

            function ro(e, t, n) {
                if (n & N.SkipSelf) {
                    let s = t,
                        i = e;
                    for (; !(s = s.parent, null !== s || n & N.Host || (s = pl(i), null === s || (i = i[15], 10 & s.type))););
                    if (null === s) return !1;
                    t = s, e = i
                }
                const r = Qe.lFrame = Ys();
                return r.currentTNode = t, r.lView = e, !0
            }

            function so(e) {
                const t = Ys(),
                    n = e[1];
                Qe.lFrame = t, t.currentTNode = n.firstChild, t.lView = e, t.tView = n, t.contextLView = e, t.bindingIndex = n.bindingStartIndex, t.inI18n = !1
            }

            function Ys() {
                const e = Qe.lFrame,
                    t = null === e ? null : e.child;
                return null === t ? io(e) : t
            }

            function io(e) {
                const t = {
                    currentTNode: null,
                    isParent: !0,
                    lView: null,
                    tView: null,
                    selectedIndex: -1,
                    contextLView: null,
                    elementDepthCount: 0,
                    currentNamespace: null,
                    currentDirectiveIndex: -1,
                    bindingRootIndex: -1,
                    bindingIndex: -1,
                    currentQueryIndex: 0,
                    parent: e,
                    child: null,
                    inI18n: !1
                };
                return null !== e && (e.child = t), t
            }

            function Mi() {
                const e = Qe.lFrame;
                return Qe.lFrame = e.parent, e.currentTNode = null, e.lView = null, e
            }
            const ha = Mi;

            function Ii() {
                const e = Mi();
                e.isParent = !0, e.tView = null, e.selectedIndex = -1, e.contextLView = null, e.elementDepthCount = 0, e.currentDirectiveIndex = -1, e.currentNamespace = null, e.bindingRootIndex = -1, e.bindingIndex = -1, e.currentQueryIndex = 0
            }

            function An() {
                return Qe.lFrame.selectedIndex
            }

            function Qr(e) {
                Qe.lFrame.selectedIndex = e
            }

            function zt() {
                const e = Qe.lFrame;
                return lr(e.tView, e.selectedIndex)
            }

            function pa() {
                Qe.lFrame.currentNamespace = wi
            }

            function ma() {
                Qe.lFrame.currentNamespace = null
            }

            function oo(e, t) {
                for (let n = t.directiveStart, r = t.directiveEnd; n < r; n++) {
                    const i = e.data[n].type.prototype,
                        {
                            ngAfterContentInit: l,
                            ngAfterContentChecked: u,
                            ngAfterViewInit: h,
                            ngAfterViewChecked: _,
                            ngOnDestroy: b
                        } = i;
                    l && (e.contentHooks || (e.contentHooks = [])).push(-n, l), u && ((e.contentHooks || (e.contentHooks = [])).push(n, u), (e.contentCheckHooks || (e.contentCheckHooks = [])).push(n, u)), h && (e.viewHooks || (e.viewHooks = [])).push(-n, h), _ && ((e.viewHooks || (e.viewHooks = [])).push(n, _), (e.viewCheckHooks || (e.viewCheckHooks = [])).push(n, _)), null != b && (e.destroyHooks || (e.destroyHooks = [])).push(n, b)
                }
            }

            function qs(e, t, n) {
                Ea(e, t, 3, n)
            }

            function ao(e, t, n, r) {
                (3 & e[2]) === n && Ea(e, t, n, r)
            }

            function zo(e, t) {
                let n = e[2];
                (3 & n) === t && (n &= 2047, n += 1, e[2] = n)
            }

            function Ea(e, t, n, r) {
                const i = null != r ? r : -1,
                    l = t.length - 1;
                let u = 0;
                for (let h = void 0 !== r ? 65535 & e[18] : 0; h < l; h++)
                    if ("number" == typeof t[h + 1]) {
                        if (u = t[h], null != r && u >= r) break
                    } else t[h] < 0 && (e[18] += 65536), (u < i || -1 == i) && (lo(e, n, t, h), e[18] = (4294901760 & e[18]) + h + 2), h++
            }

            function lo(e, t, n, r) {
                const s = n[r] < 0,
                    i = n[r + 1],
                    u = e[s ? -n[r] : n[r]];
                if (s) {
                    if (e[2] >> 11 < e[18] >> 16 && (3 & e[2]) === t) {
                        e[2] += 2048;
                        try {
                            i.call(u)
                        } finally {}
                    }
                } else try {
                    i.call(u)
                } finally {}
            }
            class Pi {
                constructor(t, n, r) {
                    this.factory = t, this.resolving = !1, this.canSeeViewProviders = n, this.injectImpl = r
                }
            }

            function hn(e, t, n) {
                const r = K(e);
                let s = 0;
                for (; s < n.length;) {
                    const i = n[s];
                    if ("number" == typeof i) {
                        if (0 !== i) break;
                        s++;
                        const l = n[s++],
                            u = n[s++],
                            h = n[s++];
                        r ? e.setAttribute(t, u, h, l) : t.setAttributeNS(l, u, h)
                    } else {
                        const l = i,
                            u = n[++s];
                        Jr(l) ? r && e.setProperty(t, l, u) : r ? e.setAttribute(t, l, u) : t.setAttribute(l, u), s++
                    }
                }
                return s
            }

            function Qn(e) {
                return 3 === e || 4 === e || 6 === e
            }

            function Jr(e) {
                return 64 === e.charCodeAt(0)
            }

            function cr(e, t) {
                if (null !== t && 0 !== t.length)
                    if (null === e || 0 === e.length) e = t.slice();
                    else {
                        let n = -1;
                        for (let r = 0; r < t.length; r++) {
                            const s = t[r];
                            "number" == typeof s ? n = s : 0 === n || Ds(e, n, s, null, -1 === n || 2 === n ? t[++r] : null)
                        }
                    } return e
            }

            function Ds(e, t, n, r, s) {
                let i = 0,
                    l = e.length;
                if (-1 === t) l = -1;
                else
                    for (; i < e.length;) {
                        const u = e[i++];
                        if ("number" == typeof u) {
                            if (u === t) {
                                l = -1;
                                break
                            }
                            if (u > t) {
                                l = i - 1;
                                break
                            }
                        }
                    }
                for (; i < e.length;) {
                    const u = e[i];
                    if ("number" == typeof u) break;
                    if (u === n) {
                        if (null === r) return void(null !== s && (e[i + 1] = s));
                        if (r === e[i + 1]) return void(e[i + 2] = s)
                    }
                    i++, null !== r && i++, null !== s && i++
                } - 1 !== l && (e.splice(l, 0, t), i = l + 1), e.splice(i++, 0, n), null !== r && e.splice(i++, 0, r), null !== s && e.splice(i++, 0, s)
            }

            function bs(e) {
                return -1 !== e
            }

            function ws(e) {
                return 32767 & e
            }

            function Xr(e, t) {
                let n = function(e) {
                        return e >> 16
                    }(e),
                    r = t;
                for (; n > 0;) r = r[15], n--;
                return r
            }
            let Wo = !0;

            function es(e) {
                const t = Wo;
                return Wo = e, t
            }
            let ho = 0;

            function vr(e, t) {
                const n = ts(e, t);
                if (-1 !== n) return n;
                const r = t[1];
                r.firstCreatePass && (e.injectorIndex = t.length, Nn(r.data, e), Nn(t, null), Nn(r.blueprint, null));
                const s = po(e, t),
                    i = e.injectorIndex;
                if (bs(s)) {
                    const l = ws(s),
                        u = Xr(s, t),
                        h = u[1].data;
                    for (let _ = 0; _ < 8; _++) t[i + _] = u[l + _] | h[l + _]
                }
                return t[i + 8] = s, i
            }

            function Nn(e, t) {
                e.push(0, 0, 0, 0, 0, 0, 0, 0, t)
            }

            function ts(e, t) {
                return -1 === e.injectorIndex || e.parent && e.parent.injectorIndex === e.injectorIndex || null === t[e.injectorIndex + 8] ? -1 : e.injectorIndex
            }

            function po(e, t) {
                if (e.parent && -1 !== e.parent.injectorIndex) return e.parent.injectorIndex;
                let n = 0,
                    r = null,
                    s = t;
                for (; null !== s;) {
                    const i = s[1],
                        l = i.type;
                    if (r = 2 === l ? i.declTNode : 1 === l ? s[6] : null, null === r) return -1;
                    if (n++, s = s[15], -1 !== r.injectorIndex) return r.injectorIndex | n << 16
                }
                return -1
            }

            function go(e, t, n) {
                ! function(e, t, n) {
                    let r;
                    "string" == typeof n ? r = n.charCodeAt(0) || 0 : n.hasOwnProperty(Mr) && (r = n[Mr]), null == r && (r = n[Mr] = ho++);
                    const s = 255 & r;
                    t.data[e + (s >> 5)] |= 1 << s
                }(e, t, n)
            }

            function Da(e, t, n) {
                if (n & N.Optional) return e;
                ke(t, "NodeInjector")
            }

            function Yo(e, t, n, r) {
                if (n & N.Optional && void 0 === r && (r = null), 0 == (n & (N.Self | N.Host))) {
                    const s = e[9],
                        i = le(void 0);
                    try {
                        return s ? s.get(t, r, n & N.Optional) : Pe(t, r, n & N.Optional)
                    } finally {
                        le(i)
                    }
                }
                return Da(r, t, n)
            }

            function Oi(e, t, n, r = N.Default, s) {
                if (null !== e) {
                    const i = function(e) {
                        if ("string" == typeof e) return e.charCodeAt(0) || 0;
                        const t = e.hasOwnProperty(Mr) ? e[Mr] : void 0;
                        return "number" == typeof t ? t >= 0 ? 255 & t : Cl : t
                    }(n);
                    if ("function" == typeof i) {
                        if (!ro(t, e, r)) return r & N.Host ? Da(s, n, r) : Yo(t, n, r, s);
                        try {
                            const l = i(r);
                            if (null != l || r & N.Optional) return l;
                            ke(n)
                        } finally {
                            ha()
                        }
                    } else if ("number" == typeof i) {
                        let l = null,
                            u = ts(e, t),
                            h = -1,
                            _ = r & N.Host ? t[16][6] : null;
                        for ((-1 === u || r & N.SkipSelf) && (h = -1 === u ? po(e, t) : t[u + 8], -1 !== h && Qo(r, !1) ? (l = t[1], u = ws(h), t = Xr(h, t)) : u = -1); - 1 !== u;) {
                            const b = t[1];
                            if (Zo(i, u, b.data)) {
                                const M = qo(u, t, n, l, r, _);
                                if (M !== mo) return M
                            }
                            h = t[u + 8], -1 !== h && Qo(r, t[1].data[u + 8] === _) && Zo(i, u, t) ? (l = b, u = ws(h), t = Xr(h, t)) : u = -1
                        }
                    }
                }
                return Yo(t, n, r, s)
            }
            const mo = {};

            function Cl() {
                return new Qs(an(), pe())
            }

            function qo(e, t, n, r, s, i) {
                const l = t[1],
                    u = l.data[e + 8],
                    b = yo(u, l, n, null == r ? $r(u) && Wo : r != l && 0 != (3 & u.type), s & N.Host && i === u);
                return null !== b ? Ts(t, l, b, u) : mo
            }

            function yo(e, t, n, r, s) {
                const i = e.providerIndexes,
                    l = t.data,
                    u = 1048575 & i,
                    h = e.directiveStart,
                    b = i >> 20,
                    P = s ? u + b : e.directiveEnd;
                for (let L = r ? u : u + b; L < P; L++) {
                    const B = l[L];
                    if (L < h && n === B || L >= h && B.type === n) return L
                }
                if (s) {
                    const L = l[h];
                    if (L && qt(L) && L.type === n) return h
                }
                return null
            }

            function Ts(e, t, n, r) {
                let s = e[n];
                const i = t.data;
                if (function(e) {
                        return e instanceof Pi
                    }(s)) {
                    const l = s;
                    l.resolving && function(e, t) {
                        throw new rt("200", `Circular dependency in DI detected for ${e}`)
                    }(xt(i[n]));
                    const u = es(l.canSeeViewProviders);
                    l.resolving = !0;
                    const h = l.injectImpl ? le(l.injectImpl) : null;
                    ro(e, r, N.Default);
                    try {
                        s = e[n] = l.factory(void 0, i, e, r), t.firstCreatePass && n >= r.directiveStart && function(e, t, n) {
                            const {
                                ngOnChanges: r,
                                ngOnInit: s,
                                ngDoCheck: i
                            } = t.type.prototype;
                            if (r) {
                                const l = qi(t);
                                (n.preOrderHooks || (n.preOrderHooks = [])).push(e, l), (n.preOrderCheckHooks || (n.preOrderCheckHooks = [])).push(e, l)
                            }
                            s && (n.preOrderHooks || (n.preOrderHooks = [])).push(0 - e, s), i && ((n.preOrderHooks || (n.preOrderHooks = [])).push(e, i), (n.preOrderCheckHooks || (n.preOrderCheckHooks = [])).push(e, i))
                        }(n, i[n], t)
                    } finally {
                        null !== h && le(h), es(u), l.resolving = !1, ha()
                    }
                }
                return s
            }

            function Zo(e, t, n) {
                return !!(n[t + (e >> 5)] & 1 << e)
            }

            function Qo(e, t) {
                return !(e & N.Self || e & N.Host && t)
            }
            class Qs {
                constructor(t, n) {
                    this._tNode = t, this._lView = n
                }
                get(t, n, r) {
                    return Oi(this._tNode, this._lView, t, r, n)
                }
            }

            function wa(e) {
                return we(() => {
                    const t = e.prototype.constructor,
                        n = t[Dn] || g(t),
                        r = Object.prototype;
                    let s = Object.getPrototypeOf(e.prototype).constructor;
                    for (; s && s !== r;) {
                        const i = s[Dn] || g(s);
                        if (i && i !== n) return i;
                        s = Object.getPrototypeOf(s)
                    }
                    return i => new i
                })
            }

            function g(e) {
                return Be(e) ? () => {
                    const t = g(ue(e));
                    return t && t()
                } : Sn(e)
            }

            function d(e) {
                return function(e, t) {
                    if ("class" === t) return e.classes;
                    if ("style" === t) return e.styles;
                    const n = e.attrs;
                    if (n) {
                        const r = n.length;
                        let s = 0;
                        for (; s < r;) {
                            const i = n[s];
                            if (Qn(i)) break;
                            if (0 === i) s += 2;
                            else if ("number" == typeof i)
                                for (s++; s < r && "string" == typeof n[s];) s++;
                            else {
                                if (i === t) return n[s + 1];
                                s += 2
                            }
                        }
                    }
                    return null
                }(an(), e)
            }
            const y = "__parameters__";

            function j(e, t, n) {
                return we(() => {
                    const r = function(e) {
                        return function(...n) {
                            if (e) {
                                const r = e(...n);
                                for (const s in r) this[s] = r[s]
                            }
                        }
                    }(t);

                    function s(...i) {
                        if (this instanceof s) return r.apply(this, i), this;
                        const l = new s(...i);
                        return u.annotation = l, u;

                        function u(h, _, b) {
                            const M = h.hasOwnProperty(y) ? h[y] : Object.defineProperty(h, y, {
                                value: []
                            })[y];
                            for (; M.length <= b;) M.push(null);
                            return (M[b] = M[b] || []).push(l), h
                        }
                    }
                    return n && (s.prototype = Object.create(n.prototype)), s.prototype.ngMetadataName = e, s.annotationCls = s, s
                })
            }
            class $e {
                constructor(t, n) {
                    this._desc = t, this.ngMetadataName = "InjectionToken", this.\u0275prov = void 0, "number" == typeof n ? this.__NG_ELEMENT_ID__ = n : void 0 !== n && (this.\u0275prov = pt({
                        token: this,
                        providedIn: n.providedIn || "root",
                        factory: n.factory
                    }))
                }
                toString() {
                    return `InjectionToken ${this._desc}`
                }
            }
            const Nr = new $e("AnalyzeForEntryComponents"),
                Ri = Function;

            function br(e, t) {
                void 0 === t && (t = e);
                for (let n = 0; n < e.length; n++) {
                    let r = e[n];
                    Array.isArray(r) ? (t === e && (t = e.slice(0, n)), br(r, t)) : t !== e && t.push(r)
                }
                return t
            }

            function rs(e, t) {
                e.forEach(n => Array.isArray(n) ? rs(n, t) : t(n))
            }

            function Ta(e, t, n) {
                t >= e.length ? e.push(n) : e.splice(t, 0, n)
            }

            function xi(e, t) {
                return t >= e.length - 1 ? e.pop() : e.splice(t, 1)[0]
            }

            function Xs(e, t) {
                const n = [];
                for (let r = 0; r < e; r++) n.push(t);
                return n
            }

            function dr(e, t, n) {
                let r = Eo(e, t);
                return r >= 0 ? e[1 | r] = n : (r = ~r, function(e, t, n, r) {
                    let s = e.length;
                    if (s == t) e.push(n, r);
                    else if (1 === s) e.push(r, e[0]), e[0] = n;
                    else {
                        for (s--, e.push(e[s - 1], e[s]); s > t;) e[s] = e[s - 2], s--;
                        e[t] = n, e[t + 1] = r
                    }
                }(e, r, t, n)), r
            }

            function pu(e, t) {
                const n = Eo(e, t);
                if (n >= 0) return e[1 | n]
            }

            function Eo(e, t) {
                return function(e, t, n) {
                    let r = 0,
                        s = e.length >> n;
                    for (; s !== r;) {
                        const i = r + (s - r >> 1),
                            l = e[i << n];
                        if (t === l) return i << n;
                        l > t ? s = i : r = i + 1
                    }
                    return ~(s << n)
                }(e, t, 1)
            }
            const ve = {},
                Fe = "__NG_DI_FLAG__",
                et = "ngTempTokenPath",
                qe = /\n/gm,
                Et = "__source",
                Qt = z({
                    provide: String,
                    useValue: z
                });
            let Cn;

            function nn(e) {
                const t = Cn;
                return Cn = e, t
            }

            function Co(e, t = N.Default) {
                if (void 0 === Cn) throw new Error("inject() must be called from an injection context");
                return null === Cn ? Pe(e, void 0, t) : Cn.get(e, t & N.Optional ? null : void 0, t)
            }

            function Rt(e, t = N.Default) {
                return (H || Co)(ue(e), t)
            }

            function Jn(e) {
                const t = [];
                for (let n = 0; n < e.length; n++) {
                    const r = ue(e[n]);
                    if (Array.isArray(r)) {
                        if (0 === r.length) throw new Error("Arguments array must have arguments.");
                        let s, i = N.Default;
                        for (let l = 0; l < r.length; l++) {
                            const u = r[l],
                                h = gu(u);
                            "number" == typeof h ? -1 === h ? s = u.token : i |= h : s = u
                        }
                        t.push(Rt(s, i))
                    } else t.push(Rt(r))
                }
                return t
            }

            function fr(e, t) {
                return e[Fe] = t, e.prototype[Fe] = t, e
            }

            function gu(e) {
                return e[Fe]
            }

            function vo(e, t, n, r) {
                const s = e[et];
                throw t[Et] && s.unshift(t[Et]), e.message = function(e, t, n, r = null) {
                    e = e && "\n" === e.charAt(0) && "\u0275" == e.charAt(1) ? e.substr(2) : e;
                    let s = q(t);
                    if (Array.isArray(t)) s = t.map(q).join(" -> ");
                    else if ("object" == typeof t) {
                        let i = [];
                        for (let l in t)
                            if (t.hasOwnProperty(l)) {
                                let u = t[l];
                                i.push(l + ":" + ("string" == typeof u ? JSON.stringify(u) : q(u)))
                            } s = `{${i.join(", ")}}`
                    }
                    return `${n}${r?"("+r+")":""}[${s}]: ${e.replace(qe,"\n  ")}`
                }("\n" + e.message, s, n, r), e.ngTokenPath = s, e[et] = null, e
            }
            const Ni = fr(j("Inject", e => ({
                    token: e
                })), -1),
                Ie = fr(j("Optional"), 8),
                Ze = fr(j("SkipSelf"), 4);
            let mu, yu;

            function Ma(e) {
                var t;
                return (null === (t = function() {
                    if (void 0 === mu && (mu = null, Ue.trustedTypes)) try {
                        mu = Ue.trustedTypes.createPolicy("angular", {
                            createHTML: e => e,
                            createScript: e => e,
                            createScriptURL: e => e
                        })
                    } catch (e) {}
                    return mu
                }()) || void 0 === t ? void 0 : t.createHTML(e)) || e
            }

            function Wf(e) {
                var t;
                return (null === (t = function() {
                    if (void 0 === yu && (yu = null, Ue.trustedTypes)) try {
                        yu = Ue.trustedTypes.createPolicy("angular#unsafe-bypass", {
                            createHTML: e => e,
                            createScript: e => e,
                            createScriptURL: e => e
                        })
                    } catch (e) {}
                    return yu
                }()) || void 0 === t ? void 0 : t.createHTML(e)) || e
            }
            class ta {
                constructor(t) {
                    this.changingThisBreaksApplicationSecurity = t
                }
                toString() {
                    return `SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see https://g.co/ng/security#xss)`
                }
            }
            class nE extends ta {
                getTypeName() {
                    return "HTML"
                }
            }
            class rE extends ta {
                getTypeName() {
                    return "Style"
                }
            }
            class sE extends ta {
                getTypeName() {
                    return "Script"
                }
            }
            class iE extends ta {
                getTypeName() {
                    return "URL"
                }
            }
            class oE extends ta {
                getTypeName() {
                    return "ResourceURL"
                }
            }

            function Fi(e) {
                return e instanceof ta ? e.changingThisBreaksApplicationSecurity : e
            }

            function Ia(e, t) {
                const n = qf(e);
                if (null != n && n !== t) {
                    if ("ResourceURL" === n && "URL" === t) return !0;
                    throw new Error(`Required a safe ${t}, got a ${n} (see https://g.co/ng/security#xss)`)
                }
                return n === t
            }

            function qf(e) {
                return e instanceof ta && e.getTypeName() || null
            }

            function aE(e) {
                return new nE(e)
            }

            function lE(e) {
                return new rE(e)
            }

            function uE(e) {
                return new sE(e)
            }

            function cE(e) {
                return new iE(e)
            }

            function dE(e) {
                return new oE(e)
            }
            class fE {
                constructor(t) {
                    this.inertDocumentHelper = t
                }
                getInertBodyElement(t) {
                    t = "<body><remove></remove>" + t;
                    try {
                        const n = (new window.DOMParser).parseFromString(Ma(t), "text/html").body;
                        return null === n ? this.inertDocumentHelper.getInertBodyElement(t) : (n.removeChild(n.firstChild), n)
                    } catch (n) {
                        return null
                    }
                }
            }
            class hE {
                constructor(t) {
                    if (this.defaultDoc = t, this.inertDocument = this.defaultDoc.implementation.createHTMLDocument("sanitization-inert"), null == this.inertDocument.body) {
                        const n = this.inertDocument.createElement("html");
                        this.inertDocument.appendChild(n);
                        const r = this.inertDocument.createElement("body");
                        n.appendChild(r)
                    }
                }
                getInertBodyElement(t) {
                    const n = this.inertDocument.createElement("template");
                    if ("content" in n) return n.innerHTML = Ma(t), n;
                    const r = this.inertDocument.createElement("body");
                    return r.innerHTML = Ma(t), this.defaultDoc.documentMode && this.stripCustomNsAttrs(r), r
                }
                stripCustomNsAttrs(t) {
                    const n = t.attributes;
                    for (let s = n.length - 1; 0 < s; s--) {
                        const l = n.item(s).name;
                        ("xmlns:ns1" === l || 0 === l.indexOf("ns1:")) && t.removeAttribute(l)
                    }
                    let r = t.firstChild;
                    for (; r;) r.nodeType === Node.ELEMENT_NODE && this.stripCustomNsAttrs(r), r = r.nextSibling
                }
            }
            const gE = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^&:/?#]*(?:[/?#]|$))/gi,
                mE = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;

            function Dl(e) {
                return (e = String(e)).match(gE) || e.match(mE) ? e : "unsafe:" + e
            }

            function ni(e) {
                const t = {};
                for (const n of e.split(",")) t[n] = !0;
                return t
            }

            function bl(...e) {
                const t = {};
                for (const n of e)
                    for (const r in n) n.hasOwnProperty(r) && (t[r] = !0);
                return t
            }
            const Jf = ni("area,br,col,hr,img,wbr"),
                Xf = ni("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),
                eh = ni("rp,rt"),
                _c = bl(Jf, bl(Xf, ni("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")), bl(eh, ni("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")), bl(eh, Xf)),
                Ec = ni("background,cite,href,itemtype,longdesc,poster,src,xlink:href"),
                Cc = ni("srcset"),
                th = bl(Ec, Cc, ni("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"), ni("aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext")),
                yE = ni("script,style,template");
            class _E {
                constructor() {
                    this.sanitizedSomething = !1, this.buf = []
                }
                sanitizeChildren(t) {
                    let n = t.firstChild,
                        r = !0;
                    for (; n;)
                        if (n.nodeType === Node.ELEMENT_NODE ? r = this.startElement(n) : n.nodeType === Node.TEXT_NODE ? this.chars(n.nodeValue) : this.sanitizedSomething = !0, r && n.firstChild) n = n.firstChild;
                        else
                            for (; n;) {
                                n.nodeType === Node.ELEMENT_NODE && this.endElement(n);
                                let s = this.checkClobberedElement(n, n.nextSibling);
                                if (s) {
                                    n = s;
                                    break
                                }
                                n = this.checkClobberedElement(n, n.parentNode)
                            }
                    return this.buf.join("")
                }
                startElement(t) {
                    const n = t.nodeName.toLowerCase();
                    if (!_c.hasOwnProperty(n)) return this.sanitizedSomething = !0, !yE.hasOwnProperty(n);
                    this.buf.push("<"), this.buf.push(n);
                    const r = t.attributes;
                    for (let s = 0; s < r.length; s++) {
                        const i = r.item(s),
                            l = i.name,
                            u = l.toLowerCase();
                        if (!th.hasOwnProperty(u)) {
                            this.sanitizedSomething = !0;
                            continue
                        }
                        let h = i.value;
                        Ec[u] && (h = Dl(h)), Cc[u] && (e = h, h = (e = String(e)).split(",").map(t => Dl(t.trim())).join(", ")), this.buf.push(" ", l, '="', nh(h), '"')
                    }
                    var e;
                    return this.buf.push(">"), !0
                }
                endElement(t) {
                    const n = t.nodeName.toLowerCase();
                    _c.hasOwnProperty(n) && !Jf.hasOwnProperty(n) && (this.buf.push("</"), this.buf.push(n), this.buf.push(">"))
                }
                chars(t) {
                    this.buf.push(nh(t))
                }
                checkClobberedElement(t, n) {
                    if (n && (t.compareDocumentPosition(n) & Node.DOCUMENT_POSITION_CONTAINED_BY) === Node.DOCUMENT_POSITION_CONTAINED_BY) throw new Error(`Failed to sanitize html because the element is clobbered: ${t.outerHTML}`);
                    return n
                }
            }
            const EE = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
                CE = /([^\#-~ |!])/g;

            function nh(e) {
                return e.replace(/&/g, "&amp;").replace(EE, function(t) {
                    return "&#" + (1024 * (t.charCodeAt(0) - 55296) + (t.charCodeAt(1) - 56320) + 65536) + ";"
                }).replace(CE, function(t) {
                    return "&#" + t.charCodeAt(0) + ";"
                }).replace(/</g, "&lt;").replace(/>/g, "&gt;")
            }
            let _u;

            function rh(e, t) {
                let n = null;
                try {
                    _u = _u || function(e) {
                        const t = new hE(e);
                        return function() {
                            try {
                                return !!(new window.DOMParser).parseFromString(Ma(""), "text/html")
                            } catch (e) {
                                return !1
                            }
                        }() ? new fE(t) : t
                    }(e);
                    let r = t ? String(t) : "";
                    n = _u.getInertBodyElement(r);
                    let s = 5,
                        i = r;
                    do {
                        if (0 === s) throw new Error("Failed to sanitize html because the input is unstable");
                        s--, r = i, i = n.innerHTML, n = _u.getInertBodyElement(r)
                    } while (r !== i);
                    return Ma((new _E).sanitizeChildren(vc(n) || n))
                } finally {
                    if (n) {
                        const r = vc(n) || n;
                        for (; r.firstChild;) r.removeChild(r.firstChild)
                    }
                }
            }

            function vc(e) {
                return "content" in e && function(e) {
                    return e.nodeType === Node.ELEMENT_NODE && "TEMPLATE" === e.nodeName
                }(e) ? e.content : null
            }
            var gn = (() => ((gn = gn || {})[gn.NONE = 0] = "NONE", gn[gn.HTML = 1] = "HTML", gn[gn.STYLE = 2] = "STYLE", gn[gn.SCRIPT = 3] = "SCRIPT", gn[gn.URL = 4] = "URL", gn[gn.RESOURCE_URL = 5] = "RESOURCE_URL", gn))();

            function sh(e) {
                const t = wl();
                return t ? Wf(t.sanitize(gn.HTML, e) || "") : Ia(e, "HTML") ? Wf(Fi(e)) : rh(I(), xe(e))
            }

            function Dc(e) {
                const t = wl();
                return t ? t.sanitize(gn.URL, e) || "" : Ia(e, "URL") ? Fi(e) : Dl(xe(e))
            }

            function wl() {
                const e = pe();
                return e && e[12]
            }
            const ah = "__ngContext__";

            function rr(e, t) {
                e[ah] = t
            }

            function wc(e) {
                const t = function(e) {
                    return e[ah] || null
                }(e);
                return t ? Array.isArray(t) ? t : t.lView : null
            }

            function Eu(e) {
                return e.ngOriginalError
            }

            function kE(e, ...t) {
                e.error(...t)
            }
            class Pa {
                constructor() {
                    this._console = console
                }
                handleError(t) {
                    const n = this._findOriginalError(t),
                        r = this._findContext(t),
                        s = (e = t) && e.ngErrorLogger || kE;
                    var e;
                    s(this._console, "ERROR", t), n && s(this._console, "ORIGINAL ERROR", n), r && s(this._console, "ERROR CONTEXT", r)
                }
                _findContext(t) {
                    return t ? t.ngDebugContext || this._findContext(Eu(t)) : null
                }
                _findOriginalError(t) {
                    let n = t && Eu(t);
                    for (; n && Eu(n);) n = Eu(n);
                    return n || null
                }
            }
            const mh = (() => ("undefined" != typeof requestAnimationFrame && requestAnimationFrame || setTimeout).bind(Ue))();

            function yh(e) {
                return e.ownerDocument.defaultView
            }

            function ri(e) {
                return e instanceof Function ? e() : e
            }
            var si = (() => ((si = si || {})[si.Important = 1] = "Important", si[si.DashCase = 2] = "DashCase", si))();

            function Ac(e, t) {
                return undefined(e, t)
            }

            function Sl(e) {
                const t = e[3];
                return St(t) ? t[3] : t
            }

            function Mc(e) {
                return Dh(e[13])
            }

            function Ic(e) {
                return Dh(e[4])
            }

            function Dh(e) {
                for (; null !== e && !St(e);) e = e[4];
                return e
            }

            function Ra(e, t, n, r, s) {
                if (null != r) {
                    let i, l = !1;
                    St(r) ? i = r : Yn(r) && (l = !0, r = r[0]);
                    const u = Xe(r);
                    0 === e && null !== n ? null == s ? Mh(t, n, u) : na(t, n, u, s || null, !0) : 1 === e && null !== n ? na(t, n, u, s || null, !0) : 2 === e ? function(e, t, n) {
                        const r = vu(e, t);
                        r && function(e, t, n, r) {
                            K(e) ? e.removeChild(t, n, r) : t.removeChild(n)
                        }(e, r, t, n)
                    }(t, u, l) : 3 === e && t.destroyNode(u), null != i && function(e, t, n, r, s) {
                        const i = n[7];
                        i !== Xe(n) && Ra(t, e, r, i, s);
                        for (let u = 10; u < n.length; u++) {
                            const h = n[u];
                            Al(h[1], h, e, t, r, i)
                        }
                    }(t, e, i, n, s)
                }
            }

            function Oc(e, t, n) {
                return K(e) ? e.createElement(t, n) : null === n ? e.createElement(t) : e.createElementNS(n, t)
            }

            function wh(e, t) {
                const n = e[9],
                    r = n.indexOf(t),
                    s = t[3];
                1024 & t[2] && (t[2] &= -1025, Or(s, -1)), n.splice(r, 1)
            }

            function Rc(e, t) {
                if (e.length <= 10) return;
                const n = 10 + t,
                    r = e[n];
                if (r) {
                    const s = r[17];
                    null !== s && s !== e && wh(s, r), t > 0 && (e[n - 1][4] = r[4]);
                    const i = xi(e, 10 + t);
                    ! function(e, t) {
                        Al(e, t, t[11], 2, null, null), t[0] = null, t[6] = null
                    }(r[1], r);
                    const l = i[19];
                    null !== l && l.detachView(i[1]), r[3] = null, r[4] = null, r[2] &= -129
                }
                return r
            }

            function Th(e, t) {
                if (!(256 & t[2])) {
                    const n = t[11];
                    K(n) && n.destroyNode && Al(e, t, n, 3, null, null),
                        function(e) {
                            let t = e[13];
                            if (!t) return xc(e[1], e);
                            for (; t;) {
                                let n = null;
                                if (Yn(t)) n = t[13];
                                else {
                                    const r = t[10];
                                    r && (n = r)
                                }
                                if (!n) {
                                    for (; t && !t[4] && t !== e;) Yn(t) && xc(t[1], t), t = t[3];
                                    null === t && (t = e), Yn(t) && xc(t[1], t), n = t && t[4]
                                }
                                t = n
                            }
                        }(t)
                }
            }

            function xc(e, t) {
                if (!(256 & t[2])) {
                    t[2] &= -129, t[2] |= 256,
                        function(e, t) {
                            let n;
                            if (null != e && null != (n = e.destroyHooks))
                                for (let r = 0; r < n.length; r += 2) {
                                    const s = t[n[r]];
                                    if (!(s instanceof Pi)) {
                                        const i = n[r + 1];
                                        if (Array.isArray(i))
                                            for (let l = 0; l < i.length; l += 2) {
                                                const u = s[i[l]],
                                                    h = i[l + 1];
                                                try {
                                                    h.call(u)
                                                } finally {}
                                            } else try {
                                                i.call(s)
                                            } finally {}
                                    }
                                }
                        }(e, t),
                        function(e, t) {
                            const n = e.cleanup,
                                r = t[7];
                            let s = -1;
                            if (null !== n)
                                for (let i = 0; i < n.length - 1; i += 2)
                                    if ("string" == typeof n[i]) {
                                        const l = n[i + 1],
                                            u = "function" == typeof l ? l(t) : Xe(t[l]),
                                            h = r[s = n[i + 2]],
                                            _ = n[i + 3];
                                        "boolean" == typeof _ ? u.removeEventListener(n[i], h, _) : _ >= 0 ? r[s = _]() : r[s = -_].unsubscribe(), i += 2
                                    } else {
                                        const l = r[s = n[i + 1]];
                                        n[i].call(l)
                                    } if (null !== r) {
                                for (let i = s + 1; i < r.length; i++) r[i]();
                                t[7] = null
                            }
                        }(e, t), 1 === t[1].type && K(t[11]) && t[11].destroy();
                    const n = t[17];
                    if (null !== n && St(t[3])) {
                        n !== t[3] && wh(n, t);
                        const r = t[19];
                        null !== r && r.detachView(e)
                    }
                }
            }

            function Sh(e, t, n) {
                return function(e, t, n) {
                    let r = t;
                    for (; null !== r && 40 & r.type;) r = (t = r).parent;
                    if (null === r) return n[0];
                    if (2 & r.flags) {
                        const s = e.data[r.directiveStart].encapsulation;
                        if (s === Pt.None || s === Pt.Emulated) return null
                    }
                    return dt(r, n)
                }(e, t.parent, n)
            }

            function na(e, t, n, r, s) {
                K(e) ? e.insertBefore(t, n, r, s) : t.insertBefore(n, r, s)
            }

            function Mh(e, t, n) {
                K(e) ? e.appendChild(t, n) : t.appendChild(n)
            }

            function Ih(e, t, n, r, s) {
                null !== r ? na(e, t, n, r, s) : Mh(e, t, n)
            }

            function vu(e, t) {
                return K(e) ? e.parentNode(t) : t.parentNode
            }

            function Ph(e, t, n) {
                return Rh(e, t, n)
            }
            let Rh = function(e, t, n) {
                return 40 & e.type ? dt(e, n) : null
            };

            function Du(e, t, n, r) {
                const s = Sh(e, r, t),
                    i = t[11],
                    u = Ph(r.parent || t[6], r, t);
                if (null != s)
                    if (Array.isArray(n))
                        for (let h = 0; h < n.length; h++) Ih(i, s, n[h], u, !1);
                    else Ih(i, s, n, u, !1)
            }

            function bu(e, t) {
                if (null !== t) {
                    const n = t.type;
                    if (3 & n) return dt(t, e);
                    if (4 & n) return Fc(-1, e[t.index]);
                    if (8 & n) {
                        const r = t.child;
                        if (null !== r) return bu(e, r); {
                            const s = e[t.index];
                            return St(s) ? Fc(-1, s) : Xe(s)
                        }
                    }
                    if (32 & n) return Ac(t, e)() || Xe(e[t.index]); {
                        const r = Nh(e, t);
                        return null !== r ? Array.isArray(r) ? r[0] : bu(Sl(e[16]), r) : bu(e, t.next)
                    }
                }
                return null
            }

            function Nh(e, t) {
                return null !== t ? e[16][6].projection[t.projection] : null
            }

            function Fc(e, t) {
                const n = 10 + e + 1;
                if (n < t.length) {
                    const r = t[n],
                        s = r[1].firstChild;
                    if (null !== s) return bu(r, s)
                }
                return t[7]
            }

            function Lc(e, t, n, r, s, i, l) {
                for (; null != n;) {
                    const u = r[n.index],
                        h = n.type;
                    if (l && 0 === t && (u && rr(Xe(u), r), n.flags |= 4), 64 != (64 & n.flags))
                        if (8 & h) Lc(e, t, n.child, r, s, i, !1), Ra(t, e, s, u, i);
                        else if (32 & h) {
                        const _ = Ac(n, r);
                        let b;
                        for (; b = _();) Ra(t, e, s, b, i);
                        Ra(t, e, s, u, i)
                    } else 16 & h ? Lh(e, t, r, n, s, i) : Ra(t, e, s, u, i);
                    n = l ? n.projectionNext : n.next
                }
            }

            function Al(e, t, n, r, s, i) {
                Lc(n, r, e.firstChild, t, s, i, !1)
            }

            function Lh(e, t, n, r, s, i) {
                const l = n[16],
                    h = l[6].projection[r.projection];
                if (Array.isArray(h))
                    for (let _ = 0; _ < h.length; _++) Ra(t, e, s, h[_], i);
                else Lc(e, t, h, l[3], s, i, !0)
            }

            function kh(e, t, n) {
                K(e) ? e.setAttribute(t, "style", n) : t.style.cssText = n
            }

            function kc(e, t, n) {
                K(e) ? "" === n ? e.removeAttribute(t, "class") : e.setAttribute(t, "class", n) : t.className = n
            }

            function Vh(e, t, n) {
                let r = e.length;
                for (;;) {
                    const s = e.indexOf(t, n);
                    if (-1 === s) return s;
                    if (0 === s || e.charCodeAt(s - 1) <= 32) {
                        const i = t.length;
                        if (s + i === r || e.charCodeAt(s + i) <= 32) return s
                    }
                    n = s + 1
                }
            }
            const jh = "ng-template";

            function lC(e, t, n) {
                let r = 0;
                for (; r < e.length;) {
                    let s = e[r++];
                    if (n && "class" === s) {
                        if (s = e[r], -1 !== Vh(s.toLowerCase(), t, 0)) return !0
                    } else if (1 === s) {
                        for (; r < e.length && "string" == typeof(s = e[r++]);)
                            if (s.toLowerCase() === t) return !0;
                        return !1
                    }
                }
                return !1
            }

            function Bh(e) {
                return 4 === e.type && e.value !== jh
            }

            function uC(e, t, n) {
                return t === (4 !== e.type || n ? e.value : jh)
            }

            function cC(e, t, n) {
                let r = 4;
                const s = e.attrs || [],
                    i = function(e) {
                        for (let t = 0; t < e.length; t++)
                            if (Qn(e[t])) return t;
                        return e.length
                    }(s);
                let l = !1;
                for (let u = 0; u < t.length; u++) {
                    const h = t[u];
                    if ("number" != typeof h) {
                        if (!l)
                            if (4 & r) {
                                if (r = 2 | 1 & r, "" !== h && !uC(e, h, n) || "" === h && 1 === t.length) {
                                    if (Ms(r)) return !1;
                                    l = !0
                                }
                            } else {
                                const _ = 8 & r ? h : t[++u];
                                if (8 & r && null !== e.attrs) {
                                    if (!lC(e.attrs, _, n)) {
                                        if (Ms(r)) return !1;
                                        l = !0
                                    }
                                    continue
                                }
                                const M = dC(8 & r ? "class" : h, s, Bh(e), n);
                                if (-1 === M) {
                                    if (Ms(r)) return !1;
                                    l = !0;
                                    continue
                                }
                                if ("" !== _) {
                                    let P;
                                    P = M > i ? "" : s[M + 1].toLowerCase();
                                    const L = 8 & r ? P : null;
                                    if (L && -1 !== Vh(L, _, 0) || 2 & r && _ !== P) {
                                        if (Ms(r)) return !1;
                                        l = !0
                                    }
                                }
                            }
                    } else {
                        if (!l && !Ms(r) && !Ms(h)) return !1;
                        if (l && Ms(h)) continue;
                        l = !1, r = h | 1 & r
                    }
                }
                return Ms(r) || l
            }

            function Ms(e) {
                return 0 == (1 & e)
            }

            function dC(e, t, n, r) {
                if (null === t) return -1;
                let s = 0;
                if (r || !n) {
                    let i = !1;
                    for (; s < t.length;) {
                        const l = t[s];
                        if (l === e) return s;
                        if (3 === l || 6 === l) i = !0;
                        else {
                            if (1 === l || 2 === l) {
                                let u = t[++s];
                                for (;
                                    "string" == typeof u;) u = t[++s];
                                continue
                            }
                            if (4 === l) break;
                            if (0 === l) {
                                s += 4;
                                continue
                            }
                        }
                        s += i ? 1 : 2
                    }
                    return -1
                }
                return function(e, t) {
                    let n = e.indexOf(4);
                    if (n > -1)
                        for (n++; n < e.length;) {
                            const r = e[n];
                            if ("number" == typeof r) return -1;
                            if (r === t) return n;
                            n++
                        }
                    return -1
                }(t, e)
            }

            function Uh(e, t, n = !1) {
                for (let r = 0; r < t.length; r++)
                    if (cC(e, t[r], n)) return !0;
                return !1
            }

            function gC(e, t) {
                e: for (let n = 0; n < t.length; n++) {
                    const r = t[n];
                    if (e.length === r.length) {
                        for (let s = 0; s < e.length; s++)
                            if (e[s] !== r[s]) continue e;
                        return !0
                    }
                }
                return !1
            }

            function Hh(e, t) {
                return e ? ":not(" + t.trim() + ")" : t
            }

            function mC(e) {
                let t = e[0],
                    n = 1,
                    r = 2,
                    s = "",
                    i = !1;
                for (; n < e.length;) {
                    let l = e[n];
                    if ("string" == typeof l)
                        if (2 & r) {
                            const u = e[++n];
                            s += "[" + l + (u.length > 0 ? '="' + u + '"' : "") + "]"
                        } else 8 & r ? s += "." + l : 4 & r && (s += " " + l);
                    else "" !== s && !Ms(l) && (t += Hh(i, s), s = ""), r = l, i = i || !Ms(r);
                    n++
                }
                return "" !== s && (t += Hh(i, s)), t
            }
            const ft = {};

            function $h(e) {
                zh(gt(), pe(), An() + e, Es())
            }

            function zh(e, t, n, r) {
                if (!r)
                    if (3 == (3 & t[2])) {
                        const i = e.preOrderCheckHooks;
                        null !== i && qs(t, i, n)
                    } else {
                        const i = e.preOrderHooks;
                        null !== i && ao(t, i, 0, n)
                    } Qr(n)
            }

            function wu(e, t) {
                return e << 17 | t << 2
            }

            function Is(e) {
                return e >> 17 & 32767
            }

            function Vc(e) {
                return 2 | e
            }

            function Li(e) {
                return (131068 & e) >> 2
            }

            function jc(e, t) {
                return -131069 & e | t << 2
            }

            function Bc(e) {
                return 1 | e
            }

            function ep(e, t) {
                const n = e.contentQueries;
                if (null !== n)
                    for (let r = 0; r < n.length; r += 2) {
                        const s = n[r],
                            i = n[r + 1];
                        if (-1 !== i) {
                            const l = e.data[i];
                            Ho(s), l.contentQueries(2, t[i], i)
                        }
                    }
            }

            function Ml(e, t, n, r, s, i, l, u, h, _) {
                const b = t.blueprint.slice();
                return b[0] = s, b[2] = 140 | r, Ks(b), b[3] = b[15] = e, b[8] = n, b[10] = l || e && e[10], b[11] = u || e && e[11], b[12] = h || e && e[12] || null, b[9] = _ || e && e[9] || null, b[6] = i, b[16] = 2 == t.type ? e[16] : b, b
            }

            function xa(e, t, n, r, s) {
                let i = e.data[t];
                if (null === i) i = function(e, t, n, r, s) {
                    const i = Si(),
                        l = eo(),
                        h = e.data[t] = function(e, t, n, r, s, i) {
                            return {
                                type: n,
                                index: r,
                                insertBeforeIndex: null,
                                injectorIndex: t ? t.injectorIndex : -1,
                                directiveStart: -1,
                                directiveEnd: -1,
                                directiveStylingLast: -1,
                                propertyBindings: null,
                                flags: 0,
                                providerIndexes: 0,
                                value: s,
                                attrs: i,
                                mergedAttrs: null,
                                localNames: null,
                                initialInputs: void 0,
                                inputs: null,
                                outputs: null,
                                tViews: null,
                                next: null,
                                projectionNext: null,
                                child: null,
                                parent: t,
                                projection: null,
                                styles: null,
                                stylesWithoutHost: null,
                                residualStyles: void 0,
                                classes: null,
                                classesWithoutHost: null,
                                residualClasses: void 0,
                                classBindings: 0,
                                styleBindings: 0
                            }
                        }(0, l ? i : i && i.parent, n, t, r, s);
                    return null === e.firstChild && (e.firstChild = h), null !== i && (l ? null == i.child && null !== h.parent && (i.child = h) : null === i.next && (i.next = h)), h
                }(e, t, n, r, s), Qe.lFrame.inI18n && (i.flags |= 64);
                else if (64 & i.type) {
                    i.type = n, i.value = r, i.attrs = s;
                    const l = function() {
                        const e = Qe.lFrame,
                            t = e.currentTNode;
                        return e.isParent ? t : t.parent
                    }();
                    i.injectorIndex = null === l ? -1 : l.injectorIndex
                }
                return ur(i, !0), i
            }

            function Na(e, t, n, r) {
                if (0 === n) return -1;
                const s = t.length;
                for (let i = 0; i < n; i++) t.push(r), e.blueprint.push(r), e.data.push(null);
                return s
            }

            function Il(e, t, n) {
                so(t);
                try {
                    const r = e.viewQuery;
                    null !== r && nd(1, r, n);
                    const s = e.template;
                    null !== s && tp(e, t, s, 1, n), e.firstCreatePass && (e.firstCreatePass = !1), e.staticContentQueries && ep(e, t), e.staticViewQueries && nd(2, e.viewQuery, n);
                    const i = e.components;
                    null !== i && function(e, t) {
                        for (let n = 0; n < t.length; n++) qC(e, t[n])
                    }(t, i)
                } catch (r) {
                    throw e.firstCreatePass && (e.incompleteFirstPass = !0, e.firstCreatePass = !1), r
                } finally {
                    t[2] &= -5, Ii()
                }
            }

            function Fa(e, t, n, r) {
                const s = t[2];
                if (256 == (256 & s)) return;
                so(t);
                const i = Es();
                try {
                    Ks(t),
                        function(e) {
                            Qe.lFrame.bindingIndex = e
                        }(e.bindingStartIndex), null !== n && tp(e, t, n, 2, r);
                    const l = 3 == (3 & s);
                    if (!i)
                        if (l) {
                            const _ = e.preOrderCheckHooks;
                            null !== _ && qs(t, _, null)
                        } else {
                            const _ = e.preOrderHooks;
                            null !== _ && ao(t, _, 0, null), zo(t, 0)
                        } if (function(e) {
                            for (let t = Mc(e); null !== t; t = Ic(t)) {
                                if (!t[2]) continue;
                                const n = t[9];
                                for (let r = 0; r < n.length; r++) {
                                    const s = n[r],
                                        i = s[3];
                                    0 == (1024 & s[2]) && Or(i, 1), s[2] |= 1024
                                }
                            }
                        }(t), function(e) {
                            for (let t = Mc(e); null !== t; t = Ic(t))
                                for (let n = 10; n < t.length; n++) {
                                    const r = t[n],
                                        s = r[1];
                                    Zt(r) && Fa(s, r, s.template, r[8])
                                }
                        }(t), null !== e.contentQueries && ep(e, t), !i)
                        if (l) {
                            const _ = e.contentCheckHooks;
                            null !== _ && qs(t, _)
                        } else {
                            const _ = e.contentHooks;
                            null !== _ && ao(t, _, 1), zo(t, 1)
                        }!
                    function(e, t) {
                        const n = e.hostBindingOpCodes;
                        if (null !== n) try {
                            for (let r = 0; r < n.length; r++) {
                                const s = n[r];
                                if (s < 0) Qr(~s);
                                else {
                                    const i = s,
                                        l = n[++r],
                                        u = n[++r];
                                    jo(l, i), u(2, t[i])
                                }
                            }
                        } finally {
                            Qr(-1)
                        }
                    }(e, t);
                    const u = e.components;
                    null !== u && function(e, t) {
                        for (let n = 0; n < t.length; n++) YC(e, t[n])
                    }(t, u);
                    const h = e.viewQuery;
                    if (null !== h && nd(2, h, r), !i)
                        if (l) {
                            const _ = e.viewCheckHooks;
                            null !== _ && qs(t, _)
                        } else {
                            const _ = e.viewHooks;
                            null !== _ && ao(t, _, 2), zo(t, 2)
                        }! 0 === e.firstUpdatePass && (e.firstUpdatePass = !1), i || (t[2] &= -73), 1024 & t[2] && (t[2] &= -1025, Or(t[3], -1))
                } finally {
                    Ii()
                }
            }

            function IC(e, t, n, r) {
                const s = t[10],
                    i = !Es(),
                    l = En(t);
                try {
                    i && !l && s.begin && s.begin(), l && Il(e, t, r), Fa(e, t, n, r)
                } finally {
                    i && !l && s.end && s.end()
                }
            }

            function tp(e, t, n, r, s) {
                const i = An(),
                    l = 2 & r;
                try {
                    Qr(-1), l && t.length > 20 && zh(e, t, 20, Es()), n(r, s)
                } finally {
                    Qr(i)
                }
            }

            function Yc(e, t, n) {
                !Xi() || (function(e, t, n, r) {
                    const s = n.directiveStart,
                        i = n.directiveEnd;
                    e.firstCreatePass || vr(n, t), rr(r, t);
                    const l = n.initialInputs;
                    for (let u = s; u < i; u++) {
                        const h = e.data[u],
                            _ = qt(h);
                        _ && $C(t, n, h);
                        const b = Ts(t, e, u, n);
                        rr(b, t), null !== l && zC(0, u - s, b, h, 0, l), _ && (Ot(n.index, t)[8] = b)
                    }
                }(e, t, n, dt(n, t)), 128 == (128 & n.flags) && function(e, t, n) {
                    const r = n.directiveStart,
                        s = n.directiveEnd,
                        l = n.index,
                        u = Qe.lFrame.currentDirectiveIndex;
                    try {
                        Qr(l);
                        for (let h = r; h < s; h++) {
                            const _ = e.data[h],
                                b = t[h];
                            Bo(h), (null !== _.hostBindings || 0 !== _.hostVars || null !== _.hostAttrs) && cp(_, b)
                        }
                    } finally {
                        Qr(-1), Bo(u)
                    }
                }(e, t, n))
            }

            function qc(e, t, n = dt) {
                const r = t.localNames;
                if (null !== r) {
                    let s = t.index + 1;
                    for (let i = 0; i < r.length; i += 2) {
                        const l = r[i + 1],
                            u = -1 === l ? n(t, e) : e[l];
                        e[s++] = u
                    }
                }
            }

            function rp(e) {
                const t = e.tView;
                return null === t || t.incompleteFirstPass ? e.tView = Au(1, null, e.template, e.decls, e.vars, e.directiveDefs, e.pipeDefs, e.viewQuery, e.schemas, e.consts) : t
            }

            function Au(e, t, n, r, s, i, l, u, h, _) {
                const b = 20 + r,
                    M = b + s,
                    P = function(e, t) {
                        const n = [];
                        for (let r = 0; r < t; r++) n.push(r < e ? null : ft);
                        return n
                    }(b, M),
                    L = "function" == typeof _ ? _() : _;
                return P[1] = {
                    type: e,
                    blueprint: P,
                    template: n,
                    queries: null,
                    viewQuery: u,
                    declTNode: t,
                    data: P.slice().fill(null, b),
                    bindingStartIndex: b,
                    expandoStartIndex: M,
                    hostBindingOpCodes: null,
                    firstCreatePass: !0,
                    firstUpdatePass: !0,
                    staticViewQueries: !1,
                    staticContentQueries: !1,
                    preOrderHooks: null,
                    preOrderCheckHooks: null,
                    contentHooks: null,
                    contentCheckHooks: null,
                    viewHooks: null,
                    viewCheckHooks: null,
                    destroyHooks: null,
                    cleanup: null,
                    contentQueries: null,
                    components: null,
                    directiveRegistry: "function" == typeof i ? i() : i,
                    pipeRegistry: "function" == typeof l ? l() : l,
                    firstChild: null,
                    schemas: h,
                    consts: L,
                    incompleteFirstPass: !1
                }
            }

            function op(e, t, n, r) {
                const s = mp(t);
                null === n ? s.push(r) : (s.push(n), e.firstCreatePass && yp(e).push(r, s.length - 1))
            }

            function ap(e, t, n) {
                for (let r in e)
                    if (e.hasOwnProperty(r)) {
                        const s = e[r];
                        (n = null === n ? {} : n).hasOwnProperty(r) ? n[r].push(t, s) : n[r] = [t, s]
                    } return n
            }

            function Lr(e, t, n, r, s, i, l, u) {
                const h = dt(t, n);
                let b, _ = t.inputs;
                !u && null != _ && (b = _[r]) ? (Cp(e, n, b, r, s), $r(t) && function(e, t) {
                    const n = Ot(t, e);
                    16 & n[2] || (n[2] |= 64)
                }(n, t.index)) : 3 & t.type && (r = function(e) {
                    return "class" === e ? "className" : "for" === e ? "htmlFor" : "formaction" === e ? "formAction" : "innerHtml" === e ? "innerHTML" : "readonly" === e ? "readOnly" : "tabindex" === e ? "tabIndex" : e
                }(r), s = null != l ? l(s, t.value || "", r) : s, K(i) ? i.setProperty(h, r, s) : Jr(r) || (h.setProperty ? h.setProperty(r, s) : h[r] = s))
            }

            function Zc(e, t, n, r) {
                let s = !1;
                if (Xi()) {
                    const i = function(e, t, n) {
                            const r = e.directiveRegistry;
                            let s = null;
                            if (r)
                                for (let i = 0; i < r.length; i++) {
                                    const l = r[i];
                                    Uh(n, l.selectors, !1) && (s || (s = []), go(vr(n, t), e, l.type), qt(l) ? (dp(e, n), s.unshift(l)) : s.push(l))
                                }
                            return s
                        }(e, t, n),
                        l = null === r ? null : {
                            "": -1
                        };
                    if (null !== i) {
                        s = !0, fp(n, e.data.length, i.length);
                        for (let b = 0; b < i.length; b++) {
                            const M = i[b];
                            M.providersResolver && M.providersResolver(M)
                        }
                        let u = !1,
                            h = !1,
                            _ = Na(e, t, i.length, null);
                        for (let b = 0; b < i.length; b++) {
                            const M = i[b];
                            n.mergedAttrs = cr(n.mergedAttrs, M.hostAttrs), hp(e, n, t, _, M), HC(_, M, l), null !== M.contentQueries && (n.flags |= 8), (null !== M.hostBindings || null !== M.hostAttrs || 0 !== M.hostVars) && (n.flags |= 128);
                            const P = M.type.prototype;
                            !u && (P.ngOnChanges || P.ngOnInit || P.ngDoCheck) && ((e.preOrderHooks || (e.preOrderHooks = [])).push(n.index), u = !0), !h && (P.ngOnChanges || P.ngDoCheck) && ((e.preOrderCheckHooks || (e.preOrderCheckHooks = [])).push(n.index), h = !0), _++
                        }! function(e, t) {
                            const r = t.directiveEnd,
                                s = e.data,
                                i = t.attrs,
                                l = [];
                            let u = null,
                                h = null;
                            for (let _ = t.directiveStart; _ < r; _++) {
                                const b = s[_],
                                    M = b.inputs,
                                    P = null === i || Bh(t) ? null : GC(M, i);
                                l.push(P), u = ap(M, _, u), h = ap(b.outputs, _, h)
                            }
                            null !== u && (u.hasOwnProperty("class") && (t.flags |= 16), u.hasOwnProperty("style") && (t.flags |= 32)), t.initialInputs = l, t.inputs = u, t.outputs = h
                        }(e, n)
                    }
                    l && function(e, t, n) {
                        if (t) {
                            const r = e.localNames = [];
                            for (let s = 0; s < t.length; s += 2) {
                                const i = n[t[s + 1]];
                                if (null == i) throw new rt("301", `Export of name '${t[s+1]}' not found!`);
                                r.push(t[s], i)
                            }
                        }
                    }(n, r, l)
                }
                return n.mergedAttrs = cr(n.mergedAttrs, n.attrs), s
            }

            function up(e, t, n, r, s, i) {
                const l = i.hostBindings;
                if (l) {
                    let u = e.hostBindingOpCodes;
                    null === u && (u = e.hostBindingOpCodes = []);
                    const h = ~t.index;
                    (function(e) {
                        let t = e.length;
                        for (; t > 0;) {
                            const n = e[--t];
                            if ("number" == typeof n && n < 0) return n
                        }
                        return 0
                    })(u) != h && u.push(h), u.push(r, s, l)
                }
            }

            function cp(e, t) {
                null !== e.hostBindings && e.hostBindings(1, t)
            }

            function dp(e, t) {
                t.flags |= 2, (e.components || (e.components = [])).push(t.index)
            }

            function HC(e, t, n) {
                if (n) {
                    if (t.exportAs)
                        for (let r = 0; r < t.exportAs.length; r++) n[t.exportAs[r]] = e;
                    qt(t) && (n[""] = e)
                }
            }

            function fp(e, t, n) {
                e.flags |= 1, e.directiveStart = t, e.directiveEnd = t + n, e.providerIndexes = t
            }

            function hp(e, t, n, r, s) {
                e.data[r] = s;
                const i = s.factory || (s.factory = Sn(s.type)),
                    l = new Pi(i, qt(s), null);
                e.blueprint[r] = l, n[r] = l, up(e, t, 0, r, Na(e, n, s.hostVars, ft), s)
            }

            function $C(e, t, n) {
                const r = dt(t, e),
                    s = rp(n),
                    i = e[10],
                    l = Mu(e, Ml(e, s, null, n.onPush ? 64 : 16, r, t, i, i.createRenderer(r, n), null, null));
                e[t.index] = l
            }

            function ii(e, t, n, r, s, i) {
                const l = dt(e, t);
                ! function(e, t, n, r, s, i, l) {
                    if (null == i) K(e) ? e.removeAttribute(t, s, n) : t.removeAttribute(s);
                    else {
                        const u = null == l ? xe(i) : l(i, r || "", s);
                        K(e) ? e.setAttribute(t, s, u, n) : n ? t.setAttributeNS(n, s, u) : t.setAttribute(s, u)
                    }
                }(t[11], l, i, e.value, n, r, s)
            }

            function zC(e, t, n, r, s, i) {
                const l = i[t];
                if (null !== l) {
                    const u = r.setInput;
                    for (let h = 0; h < l.length;) {
                        const _ = l[h++],
                            b = l[h++],
                            M = l[h++];
                        null !== u ? r.setInput(n, M, _, b) : n[b] = M
                    }
                }
            }

            function GC(e, t) {
                let n = null,
                    r = 0;
                for (; r < t.length;) {
                    const s = t[r];
                    if (0 !== s)
                        if (5 !== s) {
                            if ("number" == typeof s) break;
                            e.hasOwnProperty(s) && (null === n && (n = []), n.push(s, e[s], t[r + 1])), r += 2
                        } else r += 2;
                    else r += 4
                }
                return n
            }

            function pp(e, t, n, r) {
                return new Array(e, !0, !1, t, null, 0, r, n, null, null)
            }

            function YC(e, t) {
                const n = Ot(t, e);
                if (Zt(n)) {
                    const r = n[1];
                    80 & n[2] ? Fa(r, n, r.template, n[8]) : n[5] > 0 && Jc(n)
                }
            }

            function Jc(e) {
                for (let r = Mc(e); null !== r; r = Ic(r))
                    for (let s = 10; s < r.length; s++) {
                        const i = r[s];
                        if (1024 & i[2]) {
                            const l = i[1];
                            Fa(l, i, l.template, i[8])
                        } else i[5] > 0 && Jc(i)
                    }
                const n = e[1].components;
                if (null !== n)
                    for (let r = 0; r < n.length; r++) {
                        const s = Ot(n[r], e);
                        Zt(s) && s[5] > 0 && Jc(s)
                    }
            }

            function qC(e, t) {
                const n = Ot(t, e),
                    r = n[1];
                (function(e, t) {
                    for (let n = t.length; n < e.blueprint.length; n++) t.push(e.blueprint[n])
                })(r, n), Il(r, n, n[8])
            }

            function Mu(e, t) {
                return e[13] ? e[14][4] = t : e[13] = t, e[14] = t, t
            }

            function Xc(e) {
                for (; e;) {
                    e[2] |= 64;
                    const t = Sl(e);
                    if (gs(e) && !t) return e;
                    e = t
                }
                return null
            }

            function td(e, t, n) {
                const r = t[10];
                r.begin && r.begin();
                try {
                    Fa(e, t, e.template, n)
                } catch (s) {
                    throw Ep(t, s), s
                } finally {
                    r.end && r.end()
                }
            }

            function gp(e) {
                ! function(e) {
                    for (let t = 0; t < e.components.length; t++) {
                        const n = e.components[t],
                            r = wc(n),
                            s = r[1];
                        IC(s, r, s.template, n)
                    }
                }(e[8])
            }

            function nd(e, t, n) {
                Ho(0), t(e, n)
            }
            const ev = (() => Promise.resolve(null))();

            function mp(e) {
                return e[7] || (e[7] = [])
            }

            function yp(e) {
                return e.cleanup || (e.cleanup = [])
            }

            function Ep(e, t) {
                const n = e[9],
                    r = n ? n.get(Pa, null) : null;
                r && r.handleError(t)
            }

            function Cp(e, t, n, r, s) {
                for (let i = 0; i < n.length;) {
                    const l = n[i++],
                        u = n[i++],
                        h = t[l],
                        _ = e.data[l];
                    null !== _.setInput ? _.setInput(h, s, r, u) : h[u] = s
                }
            }

            function Vi(e, t, n) {
                const r = Mt(t, e);
                ! function(e, t, n) {
                    K(e) ? e.setValue(t, n) : t.textContent = n
                }(e[11], r, n)
            }

            function Iu(e, t, n) {
                let r = n ? e.styles : null,
                    s = n ? e.classes : null,
                    i = 0;
                if (null !== t)
                    for (let l = 0; l < t.length; l++) {
                        const u = t[l];
                        "number" == typeof u ? i = u : 1 == i ? s = Ae(s, u) : 2 == i && (r = Ae(r, u + ": " + t[++l] + ";"))
                    }
                n ? e.styles = r : e.stylesWithoutHost = r, n ? e.classes = s : e.classesWithoutHost = s
            }
            const La = new $e("INJECTOR", -1);
            class vp {
                get(t, n = ve) {
                    if (n === ve) {
                        const r = new Error(`NullInjectorError: No provider for ${q(t)}!`);
                        throw r.name = "NullInjectorError", r
                    }
                    return n
                }
            }
            const Pl = new $e("Set Injector scope."),
                Ol = {},
                rv = {};
            let rd;

            function Dp() {
                return void 0 === rd && (rd = new vp), rd
            }

            function bp(e, t = null, n = null, r) {
                return new iv(e, n, t || Dp(), r)
            }
            class iv {
                constructor(t, n, r, s = null) {
                    this.parent = r, this.records = new Map, this.injectorDefTypes = new Set, this.onDestroy = new Set, this._destroyed = !1;
                    const i = [];
                    n && rs(n, u => this.processProvider(u, t, n)), rs([t], u => this.processInjectorType(u, [], i)), this.records.set(La, ka(void 0, this));
                    const l = this.records.get(Pl);
                    this.scope = null != l ? l.value : null, this.source = s || ("object" == typeof t ? null : q(t))
                }
                get destroyed() {
                    return this._destroyed
                }
                destroy() {
                    this.assertNotDestroyed(), this._destroyed = !0;
                    try {
                        this.onDestroy.forEach(t => t.ngOnDestroy())
                    } finally {
                        this.records.clear(), this.onDestroy.clear(), this.injectorDefTypes.clear()
                    }
                }
                get(t, n = ve, r = N.Default) {
                    this.assertNotDestroyed();
                    const s = nn(this),
                        i = le(void 0);
                    try {
                        if (!(r & N.SkipSelf)) {
                            let u = this.records.get(t);
                            if (void 0 === u) {
                                const h = ("function" == typeof(e = t) || "object" == typeof e && e instanceof $e) && cn(t);
                                u = h && this.injectableDefInScope(h) ? ka(sd(t), Ol) : null, this.records.set(t, u)
                            }
                            if (null != u) return this.hydrate(t, u)
                        }
                        return (r & N.Self ? Dp() : this.parent).get(t, n = r & N.Optional && n === ve ? null : n)
                    } catch (l) {
                        if ("NullInjectorError" === l.name) {
                            if ((l[et] = l[et] || []).unshift(q(t)), s) throw l;
                            return vo(l, t, "R3InjectorError", this.source)
                        }
                        throw l
                    } finally {
                        le(i), nn(s)
                    }
                    var e
                }
                _resolveInjectorDefTypes() {
                    this.injectorDefTypes.forEach(t => this.get(t))
                }
                toString() {
                    const t = [];
                    return this.records.forEach((r, s) => t.push(q(s))), `R3Injector[${t.join(", ")}]`
                }
                assertNotDestroyed() {
                    if (this._destroyed) throw new Error("Injector has already been destroyed.")
                }
                processInjectorType(t, n, r) {
                    if (!(t = ue(t))) return !1;
                    let s = fi(t);
                    const i = null == s && t.ngModule || void 0,
                        l = void 0 === i ? t : i,
                        u = -1 !== r.indexOf(l);
                    if (void 0 !== i && (s = fi(i)), null == s) return !1;
                    if (null != s.imports && !u) {
                        let b;
                        r.push(l);
                        try {
                            rs(s.imports, M => {
                                this.processInjectorType(M, n, r) && (void 0 === b && (b = []), b.push(M))
                            })
                        } finally {}
                        if (void 0 !== b)
                            for (let M = 0; M < b.length; M++) {
                                const {
                                    ngModule: P,
                                    providers: L
                                } = b[M];
                                rs(L, B => this.processProvider(B, P, L || _t))
                            }
                    }
                    this.injectorDefTypes.add(l);
                    const h = Sn(l) || (() => new l);
                    this.records.set(l, ka(h, Ol));
                    const _ = s.providers;
                    if (null != _ && !u) {
                        const b = t;
                        rs(_, M => this.processProvider(M, b, _))
                    }
                    return void 0 !== i && void 0 !== t.providers
                }
                processProvider(t, n, r) {
                    let s = Va(t = ue(t)) ? t : ue(t && t.provide);
                    const i = Tp(e = t) ? ka(void 0, e.useValue) : ka(wp(e), Ol);
                    var e;
                    if (Va(t) || !0 !== t.multi) this.records.get(s);
                    else {
                        let l = this.records.get(s);
                        l || (l = ka(void 0, Ol, !0), l.factory = () => Jn(l.multi), this.records.set(s, l)), s = t, l.multi.push(t)
                    }
                    this.records.set(s, i)
                }
                hydrate(t, n) {
                    return n.value === Ol && (n.value = rv, n.value = n.factory()), "object" == typeof n.value && n.value && null !== (e = n.value) && "object" == typeof e && "function" == typeof e.ngOnDestroy && this.onDestroy.add(n.value), n.value;
                    var e
                }
                injectableDefInScope(t) {
                    if (!t.providedIn) return !1;
                    const n = ue(t.providedIn);
                    return "string" == typeof n ? "any" === n || n === this.scope : this.injectorDefTypes.has(n)
                }
            }

            function sd(e) {
                const t = cn(e),
                    n = null !== t ? t.factory : Sn(e);
                if (null !== n) return n;
                if (e instanceof $e) throw new Error(`Token ${q(e)} is missing a \u0275prov definition.`);
                if (e instanceof Function) return function(e) {
                    const t = e.length;
                    if (t > 0) {
                        const r = Xs(t, "?");
                        throw new Error(`Can't resolve all parameters for ${q(e)}: (${r.join(", ")}).`)
                    }
                    const n = function(e) {
                        const t = e && (e[Yt] || e[hi]);
                        if (t) {
                            const n = function(e) {
                                if (e.hasOwnProperty("name")) return e.name;
                                const t = ("" + e).match(/^function\s*([^\s(]+)/);
                                return null === t ? "" : t[1]
                            }(e);
                            return console.warn(`DEPRECATED: DI is instantiating a token "${n}" that inherits its @Injectable decorator but does not provide one itself.\nThis will become an error in a future version of Angular. Please add @Injectable() to the "${n}" class.`), t
                        }
                        return null
                    }(e);
                    return null !== n ? () => n.factory(e) : () => new e
                }(e);
                throw new Error("unreachable")
            }

            function wp(e, t, n) {
                let r;
                if (Va(e)) {
                    const s = ue(e);
                    return Sn(s) || sd(s)
                }
                if (Tp(e)) r = () => ue(e.useValue);
                else if (function(e) {
                        return !(!e || !e.useFactory)
                    }(e)) r = () => e.useFactory(...Jn(e.deps || []));
                else if (function(e) {
                        return !(!e || !e.useExisting)
                    }(e)) r = () => Rt(ue(e.useExisting));
                else {
                    const s = ue(e && (e.useClass || e.provide));
                    if (! function(e) {
                            return !!e.deps
                        }(e)) return Sn(s) || sd(s);
                    r = () => new s(...Jn(e.deps))
                }
                return r
            }

            function ka(e, t, n = !1) {
                return {
                    factory: e,
                    value: t,
                    multi: n ? [] : void 0
                }
            }

            function Tp(e) {
                return null !== e && "object" == typeof e && Qt in e
            }

            function Va(e) {
                return "function" == typeof e
            }
            const Sp = function(e, t, n) {
                return function(e, t = null, n = null, r) {
                    const s = bp(e, t, n, r);
                    return s._resolveInjectorDefTypes(), s
                }({
                    name: n
                }, t, e, n)
            };
            let sn = (() => {
                class e {
                    static create(n, r) {
                        return Array.isArray(n) ? Sp(n, r, "") : Sp(n.providers, n.parent, n.name || "")
                    }
                }
                return e.THROW_IF_NOT_FOUND = ve, e.NULL = new vp, e.\u0275prov = pt({
                    token: e,
                    providedIn: "any",
                    factory: () => Rt(La)
                }), e.__NG_ELEMENT_ID__ = -1, e
            })();

            function Sv(e, t) {
                oo(wc(e)[1], an())
            }

            function cd(e) {
                let t = function(e) {
                        return Object.getPrototypeOf(e.prototype).constructor
                    }(e.type),
                    n = !0;
                const r = [e];
                for (; t;) {
                    let s;
                    if (qt(e)) s = t.\u0275cmp || t.\u0275dir;
                    else {
                        if (t.\u0275cmp) throw new Error("Directives cannot inherit Components");
                        s = t.\u0275dir
                    }
                    if (s) {
                        if (n) {
                            r.push(s);
                            const l = e;
                            l.inputs = dd(e.inputs), l.declaredInputs = dd(e.declaredInputs), l.outputs = dd(e.outputs);
                            const u = s.hostBindings;
                            u && Pv(e, u);
                            const h = s.viewQuery,
                                _ = s.contentQueries;
                            if (h && Mv(e, h), _ && Iv(e, _), te(e.inputs, s.inputs), te(e.declaredInputs, s.declaredInputs), te(e.outputs, s.outputs), qt(s) && s.data.animation) {
                                const b = e.data;
                                b.animation = (b.animation || []).concat(s.data.animation)
                            }
                        }
                        const i = s.features;
                        if (i)
                            for (let l = 0; l < i.length; l++) {
                                const u = i[l];
                                u && u.ngInherit && u(e), u === cd && (n = !1)
                            }
                    }
                    t = Object.getPrototypeOf(t)
                }! function(e) {
                    let t = 0,
                        n = null;
                    for (let r = e.length - 1; r >= 0; r--) {
                        const s = e[r];
                        s.hostVars = t += s.hostVars, s.hostAttrs = cr(s.hostAttrs, n = cr(n, s.hostAttrs))
                    }
                }(r)
            }

            function dd(e) {
                return e === mr ? {} : e === _t ? [] : e
            }

            function Mv(e, t) {
                const n = e.viewQuery;
                e.viewQuery = n ? (r, s) => {
                    t(r, s), n(r, s)
                } : t
            }

            function Iv(e, t) {
                const n = e.contentQueries;
                e.contentQueries = n ? (r, s, i) => {
                    t(r, s, i), n(r, s, i)
                } : t
            }

            function Pv(e, t) {
                const n = e.hostBindings;
                e.hostBindings = n ? (r, s) => {
                    t(r, s), n(r, s)
                } : t
            }
            let Pu = null;

            function ja() {
                if (!Pu) {
                    const e = Ue.Symbol;
                    if (e && e.iterator) Pu = e.iterator;
                    else {
                        const t = Object.getOwnPropertyNames(Map.prototype);
                        for (let n = 0; n < t.length; ++n) {
                            const r = t[n];
                            "entries" !== r && "size" !== r && Map.prototype[r] === Map.prototype.entries && (Pu = r)
                        }
                    }
                }
                return Pu
            }
            class Os {
                constructor(t) {
                    this.wrapped = t
                }
                static wrap(t) {
                    return new Os(t)
                }
                static unwrap(t) {
                    return Os.isWrapped(t) ? t.wrapped : t
                }
                static isWrapped(t) {
                    return t instanceof Os
                }
            }

            function xl(e) {
                return !!fd(e) && (Array.isArray(e) || !(e instanceof Map) && ja() in e)
            }

            function fd(e) {
                return null !== e && ("function" == typeof e || "object" == typeof e)
            }

            function oi(e, t, n) {
                return e[t] = n
            }

            function sr(e, t, n) {
                return !Object.is(e[t], n) && (e[t] = n, !0)
            }

            function hd(e, t, n, r) {
                const s = pe();
                return sr(s, Zn(), t) && (gt(), ii(zt(), s, e, t, n, r)), hd
            }

            function Ua(e, t, n, r) {
                return sr(e, Zn(), n) ? t + xe(n) + r : ft
            }

            function Xp(e, t, n, r, s, i, l, u) {
                const h = pe(),
                    _ = gt(),
                    b = e + 20,
                    M = _.firstCreatePass ? function(e, t, n, r, s, i, l, u, h) {
                        const _ = t.consts,
                            b = xa(t, e, 4, l || null, jn(_, u));
                        Zc(t, n, b, jn(_, h)), oo(t, b);
                        const M = b.tViews = Au(2, b, r, s, i, t.directiveRegistry, t.pipeRegistry, null, t.schemas, _);
                        return null !== t.queries && (t.queries.template(t, b), M.queries = t.queries.embeddedTView(b)), b
                    }(b, _, h, t, n, r, s, i, l) : _.data[b];
                ur(M, !1);
                const P = h[11].createComment("");
                Du(_, h, P, M), rr(P, h), Mu(h, h[b] = pp(P, h, P, M)), zr(M) && Yc(_, h, M), null != l && qc(h, M, u)
            }

            function eg(e) {
                return Rn(Qe.lFrame.contextLView, 20 + e)
            }

            function Fl(e, t = N.Default) {
                const n = pe();
                return null === n ? Rt(e, t) : Oi(an(), n, ue(e), t)
            }

            function _d(e, t, n) {
                const r = pe();
                return sr(r, Zn(), t) && Lr(gt(), zt(), r, e, t, r[11], n, !1), _d
            }

            function Ed(e, t, n, r, s) {
                const l = s ? "class" : "style";
                Cp(e, n, t.inputs[l], l, r)
            }

            function Cd(e, t, n, r) {
                const s = pe(),
                    i = gt(),
                    l = 20 + e,
                    u = s[11],
                    h = s[l] = Oc(u, t, Qe.lFrame.currentNamespace),
                    _ = i.firstCreatePass ? function(e, t, n, r, s, i, l) {
                        const u = t.consts,
                            _ = xa(t, e, 2, s, jn(u, i));
                        return Zc(t, n, _, jn(u, l)), null !== _.attrs && Iu(_, _.attrs, !1), null !== _.mergedAttrs && Iu(_, _.mergedAttrs, !0), null !== t.queries && t.queries.elementStart(t, _), _
                    }(l, i, s, 0, t, n, r) : i.data[l];
                ur(_, !0);
                const b = _.mergedAttrs;
                null !== b && hn(u, h, b);
                const M = _.classes;
                null !== M && kc(u, h, M);
                const P = _.styles;
                null !== P && kh(u, h, P), 64 != (64 & _.flags) && Du(i, s, h, _), 0 === Qe.lFrame.elementDepthCount && rr(h, s), Qe.lFrame.elementDepthCount++, zr(_) && (Yc(i, s, _), function(e, t, n) {
                    if (Hr(t)) {
                        const s = t.directiveEnd;
                        for (let i = t.directiveStart; i < s; i++) {
                            const l = e.data[i];
                            l.contentQueries && l.contentQueries(1, n[i], i)
                        }
                    }
                }(i, _, s)), null !== r && qc(s, _)
            }

            function vd() {
                let e = an();
                eo() ? Ai() : (e = e.parent, ur(e, !1));
                const t = e;
                Qe.lFrame.elementDepthCount--;
                const n = gt();
                n.firstCreatePass && (oo(n, e), Hr(e) && n.queries.elementEnd(e)), null != t.classesWithoutHost && function(e) {
                    return 0 != (16 & e.flags)
                }(t) && Ed(n, t, pe(), t.classesWithoutHost, !0), null != t.stylesWithoutHost && function(e) {
                    return 0 != (32 & e.flags)
                }(t) && Ed(n, t, pe(), t.stylesWithoutHost, !1)
            }

            function fg(e, t, n, r) {
                Cd(e, t, n, r), vd()
            }

            function gg() {
                return pe()
            }

            function Dd(e) {
                return !!e && "function" == typeof e.then
            }

            function mg(e) {
                return !!e && "function" == typeof e.subscribe
            }
            const bd = mg;

            function wd(e, t, n, r) {
                const s = pe(),
                    i = gt(),
                    l = an();
                return function(e, t, n, r, s, i, l, u) {
                    const h = zr(r),
                        b = e.firstCreatePass && yp(e),
                        M = t[8],
                        P = mp(t);
                    let L = !0;
                    if (3 & r.type || u) {
                        const W = dt(r, t),
                            Ce = u ? u(W) : W,
                            ae = P.length,
                            ze = u ? nt => u(Xe(nt[r.index])) : r.index;
                        if (K(n)) {
                            let nt = null;
                            if (!u && h && (nt = function(e, t, n, r) {
                                    const s = e.cleanup;
                                    if (null != s)
                                        for (let i = 0; i < s.length - 1; i += 2) {
                                            const l = s[i];
                                            if (l === n && s[i + 1] === r) {
                                                const u = t[7],
                                                    h = s[i + 2];
                                                return u.length > h ? u[h] : null
                                            }
                                            "string" == typeof l && (i += 2)
                                        }
                                    return null
                                }(e, t, s, r.index)), null !== nt)(nt.__ngLastListenerFn__ || nt).__ngNextListenerFn__ = i, nt.__ngLastListenerFn__ = i, L = !1;
                            else {
                                i = Td(r, t, M, i, !1);
                                const bt = n.listen(Ce, s, i);
                                P.push(i, bt), b && b.push(s, ze, ae, ae + 1)
                            }
                        } else i = Td(r, t, M, i, !0), Ce.addEventListener(s, i, l), P.push(i), b && b.push(s, ze, ae, l)
                    } else i = Td(r, t, M, i, !1);
                    const B = r.outputs;
                    let J;
                    if (L && null !== B && (J = B[s])) {
                        const W = J.length;
                        if (W)
                            for (let Ce = 0; Ce < W; Ce += 2) {
                                const Ln = t[J[Ce]][J[Ce + 1]].subscribe(i),
                                    ls = P.length;
                                P.push(i, Ln), b && b.push(s, r.index, ls, -(ls + 1))
                            }
                    }
                }(i, s, s[11], l, e, t, !!n, r), wd
            }

            function Eg(e, t, n, r) {
                try {
                    return !1 !== n(r)
                } catch (s) {
                    return Ep(e, s), !1
                }
            }

            function Td(e, t, n, r, s) {
                return function i(l) {
                    if (l === Function) return r;
                    const u = 2 & e.flags ? Ot(e.index, t) : t;
                    0 == (32 & t[2]) && Xc(u);
                    let h = Eg(t, 0, r, l),
                        _ = i.__ngNextListenerFn__;
                    for (; _;) h = Eg(t, 0, _, l) && h, _ = _.__ngNextListenerFn__;
                    return s && !1 === h && (l.preventDefault(), l.returnValue = !1), h
                }
            }

            function fD(e, t) {
                let n = null;
                const r = function(e) {
                    const t = e.attrs;
                    if (null != t) {
                        const n = t.indexOf(5);
                        if (0 == (1 & n)) return t[n + 1]
                    }
                    return null
                }(e);
                for (let s = 0; s < t.length; s++) {
                    const i = t[s];
                    if ("*" !== i) {
                        if (null === r ? Uh(e, i, !0) : gC(r, i)) return s
                    } else n = s
                }
                return n
            }

            function Cg(e) {
                const t = pe()[16][6];
                if (!t.projection) {
                    const r = t.projection = Xs(e ? e.length : 1, null),
                        s = r.slice();
                    let i = t.child;
                    for (; null !== i;) {
                        const l = e ? fD(i, e) : 0;
                        null !== l && (s[l] ? s[l].projectionNext = i : r[l] = i, s[l] = i), i = i.next
                    }
                }
            }

            function vg(e, t = 0, n) {
                const r = pe(),
                    s = gt(),
                    i = xa(s, 20 + e, 16, null, n || null);
                null === i.projection && (i.projection = t), Ai(), 64 != (64 & i.flags) && function(e, t, n) {
                    Lh(t[11], 0, t, n, Sh(e, n, t), Ph(n.parent || t[6], n, t))
                }(s, r, i)
            }

            function Sd(e, t, n) {
                return Ad(e, "", t, "", n), Sd
            }

            function Ad(e, t, n, r, s) {
                const i = pe(),
                    l = Ua(i, t, n, r);
                return l !== ft && Lr(gt(), zt(), i, e, l, i[11], s, !1), Ad
            }

            function Pg(e, t, n, r, s) {
                const i = e[n + 1],
                    l = null === t;
                let u = r ? Is(i) : Li(i),
                    h = !1;
                for (; 0 !== u && (!1 === h || l);) {
                    const b = e[u + 1];
                    gD(e[u], t) && (h = !0, e[u + 1] = r ? Bc(b) : Vc(b)), u = r ? Is(b) : Li(b)
                }
                h && (e[n + 1] = r ? Vc(i) : Bc(i))
            }

            function gD(e, t) {
                return null === e || null == t || (Array.isArray(e) ? e[1] : e) === t || !(!Array.isArray(e) || "string" != typeof t) && Eo(e, t) >= 0
            }

            function Md(e, t) {
                return function(e, t, n, r) {
                    const s = pe(),
                        i = gt(),
                        l = function(e) {
                            const t = Qe.lFrame,
                                n = t.bindingIndex;
                            return t.bindingIndex = t.bindingIndex + e, n
                        }(2);
                    i.firstUpdatePass && function(e, t, n, r) {
                        const s = e.data;
                        if (null === s[n + 1]) {
                            const i = s[An()],
                                l = function(e, t) {
                                    return t >= e.expandoStartIndex
                                }(e, n);
                            (function(e, t) {
                                return 0 != (e.flags & (t ? 16 : 32))
                            })(i, r) && null === t && !l && (t = !1), t = function(e, t, n, r) {
                                    const s = function(e) {
                                        const t = Qe.lFrame.currentDirectiveIndex;
                                        return -1 === t ? null : e[t]
                                    }(e);
                                    let i = r ? t.residualClasses : t.residualStyles;
                                    if (null === s) 0 === (r ? t.classBindings : t.styleBindings) && (n = Ll(n = Id(null, e, t, n, r), t.attrs, r), i = null);
                                    else {
                                        const l = t.directiveStylingLast;
                                        if (-1 === l || e[l] !== s)
                                            if (n = Id(s, e, t, n, r), null === i) {
                                                let h = function(e, t, n) {
                                                    const r = n ? t.classBindings : t.styleBindings;
                                                    if (0 !== Li(r)) return e[Is(r)]
                                                }(e, t, r);
                                                void 0 !== h && Array.isArray(h) && (h = Id(null, e, t, h[1], r), h = Ll(h, t.attrs, r), function(e, t, n, r) {
                                                    e[Is(n ? t.classBindings : t.styleBindings)] = r
                                                }(e, t, r, h))
                                            } else i = function(e, t, n) {
                                                let r;
                                                const s = t.directiveEnd;
                                                for (let i = 1 + t.directiveStylingLast; i < s; i++) r = Ll(r, e[i].hostAttrs, n);
                                                return Ll(r, t.attrs, n)
                                            }(e, t, r)
                                    }
                                    return void 0 !== i && (r ? t.residualClasses = i : t.residualStyles = i), n
                                }(s, i, t, r),
                                function(e, t, n, r, s, i) {
                                    let l = i ? t.classBindings : t.styleBindings,
                                        u = Is(l),
                                        h = Li(l);
                                    e[r] = n;
                                    let b, _ = !1;
                                    if (Array.isArray(n)) {
                                        const M = n;
                                        b = M[1], (null === b || Eo(M, b) > 0) && (_ = !0)
                                    } else b = n;
                                    if (s)
                                        if (0 !== h) {
                                            const P = Is(e[u + 1]);
                                            e[r + 1] = wu(P, u), 0 !== P && (e[P + 1] = jc(e[P + 1], r)), e[u + 1] = function(e, t) {
                                                return 131071 & e | t << 17
                                            }(e[u + 1], r)
                                        } else e[r + 1] = wu(u, 0), 0 !== u && (e[u + 1] = jc(e[u + 1], r)), u = r;
                                    else e[r + 1] = wu(h, 0), 0 === u ? u = r : e[h + 1] = jc(e[h + 1], r), h = r;
                                    _ && (e[r + 1] = Vc(e[r + 1])), Pg(e, b, r, !0), Pg(e, b, r, !1),
                                        function(e, t, n, r, s) {
                                            const i = s ? e.residualClasses : e.residualStyles;
                                            null != i && "string" == typeof t && Eo(i, t) >= 0 && (n[r + 1] = Bc(n[r + 1]))
                                        }(t, b, e, r, i), l = wu(u, h), i ? t.classBindings = l : t.styleBindings = l
                                }(s, i, t, n, l, r)
                        }
                    }(i, e, l, r), t !== ft && sr(s, l, t) && function(e, t, n, r, s, i, l, u) {
                        if (!(3 & t.type)) return;
                        const h = e.data,
                            _ = h[u + 1];
                        xu(function(e) {
                            return 1 == (1 & e)
                        }(_) ? Hg(h, t, n, s, Li(_), l) : void 0) || (xu(i) || function(e) {
                            return 2 == (2 & e)
                        }(_) && (i = Hg(h, null, n, s, u, l)), function(e, t, n, r, s) {
                            const i = K(e);
                            if (t) s ? i ? e.addClass(n, r) : n.classList.add(r) : i ? e.removeClass(n, r) : n.classList.remove(r);
                            else {
                                let l = -1 === r.indexOf("-") ? void 0 : si.DashCase;
                                if (null == s) i ? e.removeStyle(n, r, l) : n.style.removeProperty(r);
                                else {
                                    const u = "string" == typeof s && s.endsWith("!important");
                                    u && (s = s.slice(0, -10), l |= si.Important), i ? e.setStyle(n, r, s, l) : n.style.setProperty(r, s, u ? "important" : "")
                                }
                            }
                        }(r, l, Mt(An(), n), s, i))
                    }(i, i.data[An()], s, s[11], e, s[l + 1] = function(e, t) {
                        return null == e || ("string" == typeof t ? e += t : "object" == typeof e && (e = q(Fi(e)))), e
                    }(t, n), r, l)
                }(e, t, null, !0), Md
            }

            function Id(e, t, n, r, s) {
                let i = null;
                const l = n.directiveEnd;
                let u = n.directiveStylingLast;
                for (-1 === u ? u = n.directiveStart : u++; u < l && (i = t[u], r = Ll(r, i.hostAttrs, s), i !== e);) u++;
                return null !== e && (n.directiveStylingLast = u), r
            }

            function Ll(e, t, n) {
                const r = n ? 1 : 2;
                let s = -1;
                if (null !== t)
                    for (let i = 0; i < t.length; i++) {
                        const l = t[i];
                        "number" == typeof l ? s = l : s === r && (Array.isArray(e) || (e = void 0 === e ? [] : ["", e]), dr(e, l, !!n || t[++i]))
                    }
                return void 0 === e ? null : e
            }

            function Hg(e, t, n, r, s, i) {
                const l = null === t;
                let u;
                for (; s > 0;) {
                    const h = e[s],
                        _ = Array.isArray(h),
                        b = _ ? h[1] : h,
                        M = null === b;
                    let P = n[s + 1];
                    P === ft && (P = M ? _t : void 0);
                    let L = M ? pu(P, r) : b === r ? P : void 0;
                    if (_ && !xu(L) && (L = pu(h, r)), xu(L) && (u = L, l)) return u;
                    const B = e[s + 1];
                    s = l ? Is(B) : Li(B)
                }
                if (null !== t) {
                    let h = i ? t.residualClasses : t.residualStyles;
                    null != h && (u = pu(h, r))
                }
                return u
            }

            function xu(e) {
                return void 0 !== e
            }

            function zg(e, t = "") {
                const n = pe(),
                    r = gt(),
                    s = e + 20,
                    i = r.firstCreatePass ? xa(r, s, 1, t, null) : r.data[s],
                    l = n[s] = function(e, t) {
                        return K(e) ? e.createText(t) : e.createTextNode(t)
                    }(n[11], t);
                Du(r, n, l, i), ur(i, !1)
            }

            function Pd(e) {
                return Nu("", e, ""), Pd
            }

            function Nu(e, t, n) {
                const r = pe(),
                    s = Ua(r, e, t, n);
                return s !== ft && Vi(r, An(), s), Nu
            }

            function Od(e, t, n) {
                const r = pe();
                return sr(r, Zn(), t) && Lr(gt(), zt(), r, e, t, r[11], n, !0), Od
            }
            const sa = void 0;
            var ZD = ["en", [
                    ["a", "p"],
                    ["AM", "PM"], sa
                ],
                [
                    ["AM", "PM"], sa, sa
                ],
                [
                    ["S", "M", "T", "W", "T", "F", "S"],
                    ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                    ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                    ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]
                ], sa, [
                    ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
                    ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                    ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
                ], sa, [
                    ["B", "A"],
                    ["BC", "AD"],
                    ["Before Christ", "Anno Domini"]
                ], 0, [6, 0],
                ["M/d/yy", "MMM d, y", "MMMM d, y", "EEEE, MMMM d, y"],
                ["h:mm a", "h:mm:ss a", "h:mm:ss a z", "h:mm:ss a zzzz"],
                ["{1}, {0}", sa, "{1} 'at' {0}", sa],
                [".", ",", ";", "%", "+", "-", "E", "\xd7", "\u2030", "\u221e", "NaN", ":"],
                ["#,##0.###", "#,##0%", "\xa4#,##0.00", "#E0"], "USD", "$", "US Dollar", {}, "ltr",
                function(e) {
                    const t = Math.floor(Math.abs(e)),
                        n = e.toString().replace(/^[^.]*\.?/, "").length;
                    return 1 === t && 0 === n ? 1 : 5
                }
            ];
            let Qa = {};

            function Rd(e) {
                const t = function(e) {
                    return e.toLowerCase().replace(/_/g, "-")
                }(e);
                let n = cm(t);
                if (n) return n;
                const r = t.split("-")[0];
                if (n = cm(r), n) return n;
                if ("en" === r) return ZD;
                throw new Error(`Missing locale data for the locale "${e}".`)
            }

            function um(e) {
                return Rd(e)[Je.PluralCase]
            }

            function cm(e) {
                return e in Qa || (Qa[e] = Ue.ng && Ue.ng.common && Ue.ng.common.locales && Ue.ng.common.locales[e]), Qa[e]
            }
            var Je = (() => ((Je = Je || {})[Je.LocaleId = 0] = "LocaleId", Je[Je.DayPeriodsFormat = 1] = "DayPeriodsFormat", Je[Je.DayPeriodsStandalone = 2] = "DayPeriodsStandalone", Je[Je.DaysFormat = 3] = "DaysFormat", Je[Je.DaysStandalone = 4] = "DaysStandalone", Je[Je.MonthsFormat = 5] = "MonthsFormat", Je[Je.MonthsStandalone = 6] = "MonthsStandalone", Je[Je.Eras = 7] = "Eras", Je[Je.FirstDayOfWeek = 8] = "FirstDayOfWeek", Je[Je.WeekendRange = 9] = "WeekendRange", Je[Je.DateFormat = 10] = "DateFormat", Je[Je.TimeFormat = 11] = "TimeFormat", Je[Je.DateTimeFormat = 12] = "DateTimeFormat", Je[Je.NumberSymbols = 13] = "NumberSymbols", Je[Je.NumberFormats = 14] = "NumberFormats", Je[Je.CurrencyCode = 15] = "CurrencyCode", Je[Je.CurrencySymbol = 16] = "CurrencySymbol", Je[Je.CurrencyName = 17] = "CurrencyName", Je[Je.Currencies = 18] = "Currencies", Je[Je.Directionality = 19] = "Directionality", Je[Je.PluralCase = 20] = "PluralCase", Je[Je.ExtraData = 21] = "ExtraData", Je))();
            const Fu = "en-US";
            let dm = Fu;

            function xd(e) {
                X(e, "Expected localeId to be defined"), "string" == typeof e && (dm = e.toLowerCase().replace(/_/g, "-"))
            }

            function Ld(e, t, n, r, s) {
                if (e = ue(e), Array.isArray(e))
                    for (let i = 0; i < e.length; i++) Ld(e[i], t, n, r, s);
                else {
                    const i = gt(),
                        l = pe();
                    let u = Va(e) ? e : ue(e.provide),
                        h = wp(e);
                    const _ = an(),
                        b = 1048575 & _.providerIndexes,
                        M = _.directiveStart,
                        P = _.providerIndexes >> 20;
                    if (Va(e) || !e.multi) {
                        const L = new Pi(h, s, Fl),
                            B = Vd(u, t, s ? b : b + P, M); - 1 === B ? (go(vr(_, l), i, u), kd(i, e, t.length), t.push(u), _.directiveStart++, _.directiveEnd++, s && (_.providerIndexes += 1048576), n.push(L), l.push(L)) : (n[B] = L, l[B] = L)
                    } else {
                        const L = Vd(u, t, b + P, M),
                            B = Vd(u, t, b, b + P),
                            J = L >= 0 && n[L],
                            W = B >= 0 && n[B];
                        if (s && !W || !s && !J) {
                            go(vr(_, l), i, u);
                            const Ce = function(e, t, n, r, s) {
                                const i = new Pi(e, n, Fl);
                                return i.multi = [], i.index = t, i.componentProviders = 0, Fm(i, s, r && !n), i
                            }(s ? Kb : Wb, n.length, s, r, h);
                            !s && W && (n[B].providerFactory = Ce), kd(i, e, t.length, 0), t.push(u), _.directiveStart++, _.directiveEnd++, s && (_.providerIndexes += 1048576), n.push(Ce), l.push(Ce)
                        } else kd(i, e, L > -1 ? L : B, Fm(n[s ? B : L], h, !s && r));
                        !s && r && W && n[B].componentProviders++
                    }
                }
            }

            function kd(e, t, n, r) {
                const s = Va(t);
                if (s || function(e) {
                        return !!e.useClass
                    }(t)) {
                    const l = (t.useClass || t).prototype.ngOnDestroy;
                    if (l) {
                        const u = e.destroyHooks || (e.destroyHooks = []);
                        if (!s && t.multi) {
                            const h = u.indexOf(n); - 1 === h ? u.push(n, [r, l]) : u[h + 1].push(r, l)
                        } else u.push(n, l)
                    }
                }
            }

            function Fm(e, t, n) {
                return n && e.componentProviders++, e.multi.push(t) - 1
            }

            function Vd(e, t, n, r) {
                for (let s = n; s < r; s++)
                    if (t[s] === e) return s;
                return -1
            }

            function Wb(e, t, n, r) {
                return jd(this.multi, [])
            }

            function Kb(e, t, n, r) {
                const s = this.multi;
                let i;
                if (this.providerFactory) {
                    const l = this.providerFactory.componentProviders,
                        u = Ts(n, n[1], this.providerFactory.index, r);
                    i = u.slice(0, l), jd(s, i);
                    for (let h = l; h < u.length; h++) i.push(u[h])
                } else i = [], jd(s, i);
                return i
            }

            function jd(e, t) {
                for (let n = 0; n < e.length; n++) t.push((0, e[n])());
                return t
            }

            function Lm(e, t = []) {
                return n => {
                    n.providersResolver = (r, s) => function(e, t, n) {
                        const r = gt();
                        if (r.firstCreatePass) {
                            const s = qt(e);
                            Ld(n, r.data, r.blueprint, s, !0), Ld(t, r.data, r.blueprint, s, !1)
                        }
                    }(r, s ? s(e) : e, t)
                }
            }
            class km {}
            const jm = "ngComponent";
            class Zb {
                resolveComponentFactory(t) {
                    throw function(e) {
                        const t = Error(`No component factory found for ${q(e)}. Did you add it to @NgModule.entryComponents?`);
                        return t[jm] = e, t
                    }(t)
                }
            }
            let Xa = (() => {
                class e {}
                return e.NULL = new Zb, e
            })();

            function Bu(...e) {}

            function el(e, t) {
                return new ui(dt(e, t))
            }
            const Xb = function() {
                return el(an(), pe())
            };
            let ui = (() => {
                class e {
                    constructor(n) {
                        this.nativeElement = n
                    }
                }
                return e.__NG_ELEMENT_ID__ = Xb, e
            })();

            function Bm(e) {
                return e instanceof ui ? e.nativeElement : e
            }
            class Uu {}
            let e0 = (() => {
                class e {}
                return e.__NG_ELEMENT_ID__ = () => n0(), e
            })();
            const n0 = function() {
                const e = pe(),
                    n = Ot(an().index, e);
                return function(e) {
                    return e[11]
                }(Yn(n) ? n : e)
            };
            let Ud = (() => {
                class e {}
                return e.\u0275prov = pt({
                    token: e,
                    providedIn: "root",
                    factory: () => null
                }), e
            })();
            class Um {
                constructor(t) {
                    this.full = t, this.major = t.split(".")[0], this.minor = t.split(".")[1], this.patch = t.split(".").slice(2).join(".")
                }
            }
            const Hm = new Um("12.2.16");
            class $m {
                constructor() {}
                supports(t) {
                    return xl(t)
                }
                create(t) {
                    return new o0(t)
                }
            }
            const i0 = (e, t) => t;
            class o0 {
                constructor(t) {
                    this.length = 0, this._linkedRecords = null, this._unlinkedRecords = null, this._previousItHead = null, this._itHead = null, this._itTail = null, this._additionsHead = null, this._additionsTail = null, this._movesHead = null, this._movesTail = null, this._removalsHead = null, this._removalsTail = null, this._identityChangesHead = null, this._identityChangesTail = null, this._trackByFn = t || i0
                }
                forEachItem(t) {
                    let n;
                    for (n = this._itHead; null !== n; n = n._next) t(n)
                }
                forEachOperation(t) {
                    let n = this._itHead,
                        r = this._removalsHead,
                        s = 0,
                        i = null;
                    for (; n || r;) {
                        const l = !r || n && n.currentIndex < Gm(r, s, i) ? n : r,
                            u = Gm(l, s, i),
                            h = l.currentIndex;
                        if (l === r) s--, r = r._nextRemoved;
                        else if (n = n._next, null == l.previousIndex) s++;
                        else {
                            i || (i = []);
                            const _ = u - s,
                                b = h - s;
                            if (_ != b) {
                                for (let P = 0; P < _; P++) {
                                    const L = P < i.length ? i[P] : i[P] = 0,
                                        B = L + P;
                                    b <= B && B < _ && (i[P] = L + 1)
                                }
                                i[l.previousIndex] = b - _
                            }
                        }
                        u !== h && t(l, u, h)
                    }
                }
                forEachPreviousItem(t) {
                    let n;
                    for (n = this._previousItHead; null !== n; n = n._nextPrevious) t(n)
                }
                forEachAddedItem(t) {
                    let n;
                    for (n = this._additionsHead; null !== n; n = n._nextAdded) t(n)
                }
                forEachMovedItem(t) {
                    let n;
                    for (n = this._movesHead; null !== n; n = n._nextMoved) t(n)
                }
                forEachRemovedItem(t) {
                    let n;
                    for (n = this._removalsHead; null !== n; n = n._nextRemoved) t(n)
                }
                forEachIdentityChange(t) {
                    let n;
                    for (n = this._identityChangesHead; null !== n; n = n._nextIdentityChange) t(n)
                }
                diff(t) {
                    if (null == t && (t = []), !xl(t)) throw new Error(`Error trying to diff '${q(t)}'. Only arrays and iterables are allowed`);
                    return this.check(t) ? this : null
                }
                onDestroy() {}
                check(t) {
                    this._reset();
                    let s, i, l, n = this._itHead,
                        r = !1;
                    if (Array.isArray(t)) {
                        this.length = t.length;
                        for (let u = 0; u < this.length; u++) i = t[u], l = this._trackByFn(u, i), null !== n && Object.is(n.trackById, l) ? (r && (n = this._verifyReinsertion(n, i, l, u)), Object.is(n.item, i) || this._addIdentityChange(n, i)) : (n = this._mismatch(n, i, l, u), r = !0), n = n._next
                    } else s = 0,
                        function(e, t) {
                            if (Array.isArray(e))
                                for (let n = 0; n < e.length; n++) t(e[n]);
                            else {
                                const n = e[ja()]();
                                let r;
                                for (; !(r = n.next()).done;) t(r.value)
                            }
                        }(t, u => {
                            l = this._trackByFn(s, u), null !== n && Object.is(n.trackById, l) ? (r && (n = this._verifyReinsertion(n, u, l, s)), Object.is(n.item, u) || this._addIdentityChange(n, u)) : (n = this._mismatch(n, u, l, s), r = !0), n = n._next, s++
                        }), this.length = s;
                    return this._truncate(n), this.collection = t, this.isDirty
                }
                get isDirty() {
                    return null !== this._additionsHead || null !== this._movesHead || null !== this._removalsHead || null !== this._identityChangesHead
                }
                _reset() {
                    if (this.isDirty) {
                        let t;
                        for (t = this._previousItHead = this._itHead; null !== t; t = t._next) t._nextPrevious = t._next;
                        for (t = this._additionsHead; null !== t; t = t._nextAdded) t.previousIndex = t.currentIndex;
                        for (this._additionsHead = this._additionsTail = null, t = this._movesHead; null !== t; t = t._nextMoved) t.previousIndex = t.currentIndex;
                        this._movesHead = this._movesTail = null, this._removalsHead = this._removalsTail = null, this._identityChangesHead = this._identityChangesTail = null
                    }
                }
                _mismatch(t, n, r, s) {
                    let i;
                    return null === t ? i = this._itTail : (i = t._prev, this._remove(t)), null !== (t = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(r, null)) ? (Object.is(t.item, n) || this._addIdentityChange(t, n), this._reinsertAfter(t, i, s)) : null !== (t = null === this._linkedRecords ? null : this._linkedRecords.get(r, s)) ? (Object.is(t.item, n) || this._addIdentityChange(t, n), this._moveAfter(t, i, s)) : t = this._addAfter(new a0(n, r), i, s), t
                }
                _verifyReinsertion(t, n, r, s) {
                    let i = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(r, null);
                    return null !== i ? t = this._reinsertAfter(i, t._prev, s) : t.currentIndex != s && (t.currentIndex = s, this._addToMoves(t, s)), t
                }
                _truncate(t) {
                    for (; null !== t;) {
                        const n = t._next;
                        this._addToRemovals(this._unlink(t)), t = n
                    }
                    null !== this._unlinkedRecords && this._unlinkedRecords.clear(), null !== this._additionsTail && (this._additionsTail._nextAdded = null), null !== this._movesTail && (this._movesTail._nextMoved = null), null !== this._itTail && (this._itTail._next = null), null !== this._removalsTail && (this._removalsTail._nextRemoved = null), null !== this._identityChangesTail && (this._identityChangesTail._nextIdentityChange = null)
                }
                _reinsertAfter(t, n, r) {
                    null !== this._unlinkedRecords && this._unlinkedRecords.remove(t);
                    const s = t._prevRemoved,
                        i = t._nextRemoved;
                    return null === s ? this._removalsHead = i : s._nextRemoved = i, null === i ? this._removalsTail = s : i._prevRemoved = s, this._insertAfter(t, n, r), this._addToMoves(t, r), t
                }
                _moveAfter(t, n, r) {
                    return this._unlink(t), this._insertAfter(t, n, r), this._addToMoves(t, r), t
                }
                _addAfter(t, n, r) {
                    return this._insertAfter(t, n, r), this._additionsTail = null === this._additionsTail ? this._additionsHead = t : this._additionsTail._nextAdded = t, t
                }
                _insertAfter(t, n, r) {
                    const s = null === n ? this._itHead : n._next;
                    return t._next = s, t._prev = n, null === s ? this._itTail = t : s._prev = t, null === n ? this._itHead = t : n._next = t, null === this._linkedRecords && (this._linkedRecords = new zm), this._linkedRecords.put(t), t.currentIndex = r, t
                }
                _remove(t) {
                    return this._addToRemovals(this._unlink(t))
                }
                _unlink(t) {
                    null !== this._linkedRecords && this._linkedRecords.remove(t);
                    const n = t._prev,
                        r = t._next;
                    return null === n ? this._itHead = r : n._next = r, null === r ? this._itTail = n : r._prev = n, t
                }
                _addToMoves(t, n) {
                    return t.previousIndex === n || (this._movesTail = null === this._movesTail ? this._movesHead = t : this._movesTail._nextMoved = t), t
                }
                _addToRemovals(t) {
                    return null === this._unlinkedRecords && (this._unlinkedRecords = new zm), this._unlinkedRecords.put(t), t.currentIndex = null, t._nextRemoved = null, null === this._removalsTail ? (this._removalsTail = this._removalsHead = t, t._prevRemoved = null) : (t._prevRemoved = this._removalsTail, this._removalsTail = this._removalsTail._nextRemoved = t), t
                }
                _addIdentityChange(t, n) {
                    return t.item = n, this._identityChangesTail = null === this._identityChangesTail ? this._identityChangesHead = t : this._identityChangesTail._nextIdentityChange = t, t
                }
            }
            class a0 {
                constructor(t, n) {
                    this.item = t, this.trackById = n, this.currentIndex = null, this.previousIndex = null, this._nextPrevious = null, this._prev = null, this._next = null, this._prevDup = null, this._nextDup = null, this._prevRemoved = null, this._nextRemoved = null, this._nextAdded = null, this._nextMoved = null, this._nextIdentityChange = null
                }
            }
            class l0 {
                constructor() {
                    this._head = null, this._tail = null
                }
                add(t) {
                    null === this._head ? (this._head = this._tail = t, t._nextDup = null, t._prevDup = null) : (this._tail._nextDup = t, t._prevDup = this._tail, t._nextDup = null, this._tail = t)
                }
                get(t, n) {
                    let r;
                    for (r = this._head; null !== r; r = r._nextDup)
                        if ((null === n || n <= r.currentIndex) && Object.is(r.trackById, t)) return r;
                    return null
                }
                remove(t) {
                    const n = t._prevDup,
                        r = t._nextDup;
                    return null === n ? this._head = r : n._nextDup = r, null === r ? this._tail = n : r._prevDup = n, null === this._head
                }
            }
            class zm {
                constructor() {
                    this.map = new Map
                }
                put(t) {
                    const n = t.trackById;
                    let r = this.map.get(n);
                    r || (r = new l0, this.map.set(n, r)), r.add(t)
                }
                get(t, n) {
                    const s = this.map.get(t);
                    return s ? s.get(t, n) : null
                }
                remove(t) {
                    const n = t.trackById;
                    return this.map.get(n).remove(t) && this.map.delete(n), t
                }
                get isEmpty() {
                    return 0 === this.map.size
                }
                clear() {
                    this.map.clear()
                }
            }

            function Gm(e, t, n) {
                const r = e.previousIndex;
                if (null === r) return r;
                let s = 0;
                return n && r < n.length && (s = n[r]), r + t + s
            }
            class Wm {
                constructor() {}
                supports(t) {
                    return t instanceof Map || fd(t)
                }
                create() {
                    return new u0
                }
            }
            class u0 {
                constructor() {
                    this._records = new Map, this._mapHead = null, this._appendAfter = null, this._previousMapHead = null, this._changesHead = null, this._changesTail = null, this._additionsHead = null, this._additionsTail = null, this._removalsHead = null, this._removalsTail = null
                }
                get isDirty() {
                    return null !== this._additionsHead || null !== this._changesHead || null !== this._removalsHead
                }
                forEachItem(t) {
                    let n;
                    for (n = this._mapHead; null !== n; n = n._next) t(n)
                }
                forEachPreviousItem(t) {
                    let n;
                    for (n = this._previousMapHead; null !== n; n = n._nextPrevious) t(n)
                }
                forEachChangedItem(t) {
                    let n;
                    for (n = this._changesHead; null !== n; n = n._nextChanged) t(n)
                }
                forEachAddedItem(t) {
                    let n;
                    for (n = this._additionsHead; null !== n; n = n._nextAdded) t(n)
                }
                forEachRemovedItem(t) {
                    let n;
                    for (n = this._removalsHead; null !== n; n = n._nextRemoved) t(n)
                }
                diff(t) {
                    if (t) {
                        if (!(t instanceof Map || fd(t))) throw new Error(`Error trying to diff '${q(t)}'. Only maps and objects are allowed`)
                    } else t = new Map;
                    return this.check(t) ? this : null
                }
                onDestroy() {}
                check(t) {
                    this._reset();
                    let n = this._mapHead;
                    if (this._appendAfter = null, this._forEach(t, (r, s) => {
                            if (n && n.key === s) this._maybeAddToChanges(n, r), this._appendAfter = n, n = n._next;
                            else {
                                const i = this._getOrCreateRecordForKey(s, r);
                                n = this._insertBeforeOrAppend(n, i)
                            }
                        }), n) {
                        n._prev && (n._prev._next = null), this._removalsHead = n;
                        for (let r = n; null !== r; r = r._nextRemoved) r === this._mapHead && (this._mapHead = null), this._records.delete(r.key), r._nextRemoved = r._next, r.previousValue = r.currentValue, r.currentValue = null, r._prev = null, r._next = null
                    }
                    return this._changesTail && (this._changesTail._nextChanged = null), this._additionsTail && (this._additionsTail._nextAdded = null), this.isDirty
                }
                _insertBeforeOrAppend(t, n) {
                    if (t) {
                        const r = t._prev;
                        return n._next = t, n._prev = r, t._prev = n, r && (r._next = n), t === this._mapHead && (this._mapHead = n), this._appendAfter = t, t
                    }
                    return this._appendAfter ? (this._appendAfter._next = n, n._prev = this._appendAfter) : this._mapHead = n, this._appendAfter = n, null
                }
                _getOrCreateRecordForKey(t, n) {
                    if (this._records.has(t)) {
                        const s = this._records.get(t);
                        this._maybeAddToChanges(s, n);
                        const i = s._prev,
                            l = s._next;
                        return i && (i._next = l), l && (l._prev = i), s._next = null, s._prev = null, s
                    }
                    const r = new c0(t);
                    return this._records.set(t, r), r.currentValue = n, this._addToAdditions(r), r
                }
                _reset() {
                    if (this.isDirty) {
                        let t;
                        for (this._previousMapHead = this._mapHead, t = this._previousMapHead; null !== t; t = t._next) t._nextPrevious = t._next;
                        for (t = this._changesHead; null !== t; t = t._nextChanged) t.previousValue = t.currentValue;
                        for (t = this._additionsHead; null != t; t = t._nextAdded) t.previousValue = t.currentValue;
                        this._changesHead = this._changesTail = null, this._additionsHead = this._additionsTail = null, this._removalsHead = null
                    }
                }
                _maybeAddToChanges(t, n) {
                    Object.is(n, t.currentValue) || (t.previousValue = t.currentValue, t.currentValue = n, this._addToChanges(t))
                }
                _addToAdditions(t) {
                    null === this._additionsHead ? this._additionsHead = this._additionsTail = t : (this._additionsTail._nextAdded = t, this._additionsTail = t)
                }
                _addToChanges(t) {
                    null === this._changesHead ? this._changesHead = this._changesTail = t : (this._changesTail._nextChanged = t, this._changesTail = t)
                }
                _forEach(t, n) {
                    t instanceof Map ? t.forEach(n) : Object.keys(t).forEach(r => n(t[r], r))
                }
            }
            class c0 {
                constructor(t) {
                    this.key = t, this.previousValue = null, this.currentValue = null, this._nextPrevious = null, this._next = null, this._prev = null, this._nextAdded = null, this._nextRemoved = null, this._nextChanged = null
                }
            }

            function Km() {
                return new Hu([new $m])
            }
            let Hu = (() => {
                class e {
                    constructor(n) {
                        this.factories = n
                    }
                    static create(n, r) {
                        if (null != r) {
                            const s = r.factories.slice();
                            n = n.concat(s)
                        }
                        return new e(n)
                    }
                    static extend(n) {
                        return {
                            provide: e,
                            useFactory: r => e.create(n, r || Km()),
                            deps: [
                                [e, new Ze, new Ie]
                            ]
                        }
                    }
                    find(n) {
                        const r = this.factories.find(s => s.supports(n));
                        if (null != r) return r;
                        throw new Error(`Cannot find a differ supporting object '${n}' of type '${function(e){return e.name||typeof e}(n)}'`)
                    }
                }
                return e.\u0275prov = pt({
                    token: e,
                    providedIn: "root",
                    factory: Km
                }), e
            })();

            function Ym() {
                return new $u([new Wm])
            }
            let $u = (() => {
                class e {
                    constructor(n) {
                        this.factories = n
                    }
                    static create(n, r) {
                        if (r) {
                            const s = r.factories.slice();
                            n = n.concat(s)
                        }
                        return new e(n)
                    }
                    static extend(n) {
                        return {
                            provide: e,
                            useFactory: r => e.create(n, r || Ym()),
                            deps: [
                                [e, new Ze, new Ie]
                            ]
                        }
                    }
                    find(n) {
                        const r = this.factories.find(s => s.supports(n));
                        if (r) return r;
                        throw new Error(`Cannot find a differ supporting object '${n}'`)
                    }
                }
                return e.\u0275prov = pt({
                    token: e,
                    providedIn: "root",
                    factory: Ym
                }), e
            })();

            function zu(e, t, n, r, s = !1) {
                for (; null !== n;) {
                    const i = t[n.index];
                    if (null !== i && r.push(Xe(i)), St(i))
                        for (let u = 10; u < i.length; u++) {
                            const h = i[u],
                                _ = h[1].firstChild;
                            null !== _ && zu(h[1], h, _, r)
                        }
                    const l = n.type;
                    if (8 & l) zu(e, t, n.child, r);
                    else if (32 & l) {
                        const u = Ac(n, t);
                        let h;
                        for (; h = u();) r.push(h)
                    } else if (16 & l) {
                        const u = Nh(t, n);
                        if (Array.isArray(u)) r.push(...u);
                        else {
                            const h = Sl(t[16]);
                            zu(h[1], h, u, r, !0)
                        }
                    }
                    n = s ? n.projectionNext : n.next
                }
                return r
            }
            class Ul {
                constructor(t, n) {
                    this._lView = t, this._cdRefInjectingView = n, this._appRef = null, this._attachedToViewContainer = !1
                }
                get rootNodes() {
                    const t = this._lView,
                        n = t[1];
                    return zu(n, t, n.firstChild, [])
                }
                get context() {
                    return this._lView[8]
                }
                set context(t) {
                    this._lView[8] = t
                }
                get destroyed() {
                    return 256 == (256 & this._lView[2])
                }
                destroy() {
                    if (this._appRef) this._appRef.detachView(this);
                    else if (this._attachedToViewContainer) {
                        const t = this._lView[3];
                        if (St(t)) {
                            const n = t[8],
                                r = n ? n.indexOf(this) : -1;
                            r > -1 && (Rc(t, r), xi(n, r))
                        }
                        this._attachedToViewContainer = !1
                    }
                    Th(this._lView[1], this._lView)
                }
                onDestroy(t) {
                    op(this._lView[1], this._lView, null, t)
                }
                markForCheck() {
                    Xc(this._cdRefInjectingView || this._lView)
                }
                detach() {
                    this._lView[2] &= -129
                }
                reattach() {
                    this._lView[2] |= 128
                }
                detectChanges() {
                    td(this._lView[1], this._lView, this.context)
                }
                checkNoChanges() {
                    ! function(e, t, n) {
                        to(!0);
                        try {
                            td(e, t, n)
                        } finally {
                            to(!1)
                        }
                    }(this._lView[1], this._lView, this.context)
                }
                attachToViewContainerRef() {
                    if (this._appRef) throw new Error("This view is already attached directly to the ApplicationRef!");
                    this._attachedToViewContainer = !0
                }
                detachFromAppRef() {
                    var t;
                    this._appRef = null, Al(this._lView[1], t = this._lView, t[11], 2, null, null)
                }
                attachToAppRef(t) {
                    if (this._attachedToViewContainer) throw new Error("This view is already attached to a ViewContainer!");
                    this._appRef = t
                }
            }
            class f0 extends Ul {
                constructor(t) {
                    super(t), this._view = t
                }
                detectChanges() {
                    gp(this._view)
                }
                checkNoChanges() {
                    ! function(e) {
                        to(!0);
                        try {
                            gp(e)
                        } finally {
                            to(!1)
                        }
                    }(this._view)
                }
                get context() {
                    return null
                }
            }
            const p0 = function(e) {
                return function(e, t, n) {
                    if ($r(e) && !n) {
                        const r = Ot(e.index, t);
                        return new Ul(r, r)
                    }
                    return 47 & e.type ? new Ul(t[16], t) : null
                }(an(), pe(), 16 == (16 & e))
            };
            let g0 = (() => {
                class e {}
                return e.__NG_ELEMENT_ID__ = p0, e
            })();
            const _0 = [new Wm],
                C0 = new Hu([new $m]),
                v0 = new $u(_0),
                b0 = function() {
                    return Gu(an(), pe())
                };
            let Hl = (() => {
                class e {}
                return e.__NG_ELEMENT_ID__ = b0, e
            })();
            const w0 = Hl,
                T0 = class extends w0 {
                    constructor(t, n, r) {
                        super(), this._declarationLView = t, this._declarationTContainer = n, this.elementRef = r
                    }
                    createEmbeddedView(t) {
                        const n = this._declarationTContainer.tViews,
                            r = Ml(this._declarationLView, n, t, 16, null, n.declTNode, null, null, null, null);
                        r[17] = this._declarationLView[this._declarationTContainer.index];
                        const i = this._declarationLView[19];
                        return null !== i && (r[19] = i.createEmbeddedView(n)), Il(n, r, t), new Ul(r)
                    }
                };

            function Gu(e, t) {
                return 4 & e.type ? new T0(t, e, el(e, t)) : null
            }
            class ia {}
            class qm {}
            const M0 = function() {
                return Jm(an(), pe())
            };
            let Wu = (() => {
                class e {}
                return e.__NG_ELEMENT_ID__ = M0, e
            })();
            const P0 = Wu,
                Zm = class extends P0 {
                    constructor(t, n, r) {
                        super(), this._lContainer = t, this._hostTNode = n, this._hostLView = r
                    }
                    get element() {
                        return el(this._hostTNode, this._hostLView)
                    }
                    get injector() {
                        return new Qs(this._hostTNode, this._hostLView)
                    }
                    get parentInjector() {
                        const t = po(this._hostTNode, this._hostLView);
                        if (bs(t)) {
                            const n = Xr(t, this._hostLView),
                                r = ws(t);
                            return new Qs(n[1].data[r + 8], n)
                        }
                        return new Qs(null, this._hostLView)
                    }
                    clear() {
                        for (; this.length > 0;) this.remove(this.length - 1)
                    }
                    get(t) {
                        const n = Qm(this._lContainer);
                        return null !== n && n[t] || null
                    }
                    get length() {
                        return this._lContainer.length - 10
                    }
                    createEmbeddedView(t, n, r) {
                        const s = t.createEmbeddedView(n || {});
                        return this.insert(s, r), s
                    }
                    createComponent(t, n, r, s, i) {
                        const l = r || this.parentInjector;
                        if (!i && null == t.ngModule && l) {
                            const h = l.get(ia, null);
                            h && (i = h)
                        }
                        const u = t.create(l, s, void 0, i);
                        return this.insert(u.hostView, n), u
                    }
                    insert(t, n) {
                        const r = t._lView,
                            s = r[1];
                        if (St(r[3])) {
                            const b = this.indexOf(t);
                            if (-1 !== b) this.detach(b);
                            else {
                                const M = r[3],
                                    P = new Zm(M, M[6], M[3]);
                                P.detach(P.indexOf(t))
                            }
                        }
                        const i = this._adjustIndex(n),
                            l = this._lContainer;
                        ! function(e, t, n, r) {
                            const s = 10 + r,
                                i = n.length;
                            r > 0 && (n[s - 1][4] = t), r < i - 10 ? (t[4] = n[s], Ta(n, 10 + r, t)) : (n.push(t), t[4] = null), t[3] = n;
                            const l = t[17];
                            null !== l && n !== l && function(e, t) {
                                const n = e[9];
                                t[16] !== t[3][3][16] && (e[2] = !0), null === n ? e[9] = [t] : n.push(t)
                            }(l, t);
                            const u = t[19];
                            null !== u && u.insertView(e), t[2] |= 128
                        }(s, r, l, i);
                        const u = Fc(i, l),
                            h = r[11],
                            _ = vu(h, l[7]);
                        return null !== _ && function(e, t, n, r, s, i) {
                            r[0] = s, r[6] = t, Al(e, r, n, 1, s, i)
                        }(s, l[6], h, r, _, u), t.attachToViewContainerRef(), Ta(Hd(l), i, t), t
                    }
                    move(t, n) {
                        return this.insert(t, n)
                    }
                    indexOf(t) {
                        const n = Qm(this._lContainer);
                        return null !== n ? n.indexOf(t) : -1
                    }
                    remove(t) {
                        const n = this._adjustIndex(t, -1),
                            r = Rc(this._lContainer, n);
                        r && (xi(Hd(this._lContainer), n), Th(r[1], r))
                    }
                    detach(t) {
                        const n = this._adjustIndex(t, -1),
                            r = Rc(this._lContainer, n);
                        return r && null != xi(Hd(this._lContainer), n) ? new Ul(r) : null
                    }
                    _adjustIndex(t, n = 0) {
                        return null == t ? this.length + n : t
                    }
                };

            function Qm(e) {
                return e[8]
            }

            function Hd(e) {
                return e[8] || (e[8] = [])
            }

            function Jm(e, t) {
                let n;
                const r = t[e.index];
                if (St(r)) n = r;
                else {
                    let s;
                    if (8 & e.type) s = Xe(r);
                    else {
                        const i = t[11];
                        s = i.createComment("");
                        const l = dt(e, t);
                        na(i, vu(i, l), s, function(e, t) {
                            return K(e) ? e.nextSibling(t) : t.nextSibling
                        }(i, l), !1)
                    }
                    t[e.index] = n = pp(r, t, s, e), Mu(t, n)
                }
                return new Zm(n, e, t)
            }
            const sl = {};
            class _y extends Xa {
                constructor(t) {
                    super(), this.ngModule = t
                }
                resolveComponentFactory(t) {
                    const n = tn(t);
                    return new Cy(n, this.ngModule)
                }
            }

            function Ey(e) {
                const t = [];
                for (let n in e) e.hasOwnProperty(n) && t.push({
                    propName: e[n],
                    templateName: n
                });
                return t
            }
            const Sw = new $e("SCHEDULER_TOKEN", {
                providedIn: "root",
                factory: () => mh
            });
            class Cy extends km {
                constructor(t, n) {
                    super(), this.componentDef = t, this.ngModule = n, this.componentType = t.type, this.selector = t.selectors.map(mC).join(","), this.ngContentSelectors = t.ngContentSelectors ? t.ngContentSelectors : [], this.isBoundToModule = !!n
                }
                get inputs() {
                    return Ey(this.componentDef.inputs)
                }
                get outputs() {
                    return Ey(this.componentDef.outputs)
                }
                create(t, n, r, s) {
                    const i = (s = s || this.ngModule) ? function(e, t) {
                            return {
                                get: (n, r, s) => {
                                    const i = e.get(n, sl, s);
                                    return i !== sl || r === sl ? i : t.get(n, r, s)
                                }
                            }
                        }(t, s.injector) : t,
                        l = i.get(Uu, Re),
                        u = i.get(Ud, null),
                        h = l.createRenderer(null, this.componentDef),
                        _ = this.componentDef.selectors[0][0] || "div",
                        b = r ? function(e, t, n) {
                            if (K(e)) return e.selectRootElement(t, n === Pt.ShadowDom);
                            let r = "string" == typeof t ? e.querySelector(t) : t;
                            return r.textContent = "", r
                        }(h, r, this.componentDef.encapsulation) : Oc(l.createRenderer(null, this.componentDef), _, function(e) {
                            const t = e.toLowerCase();
                            return "svg" === t ? wi : "math" === t ? "http://www.w3.org/1998/MathML/" : null
                        }(_)),
                        M = this.componentDef.onPush ? 576 : 528,
                        P = function(e, t) {
                            return {
                                components: [],
                                scheduler: e || mh,
                                clean: ev,
                                playerHandler: t || null,
                                flags: 0
                            }
                        }(),
                        L = Au(0, null, null, 1, 0, null, null, null, null, null),
                        B = Ml(null, L, P, M, null, null, l, h, u, i);
                    let J, W;
                    so(B);
                    try {
                        const Ce = function(e, t, n, r, s, i) {
                            const l = n[1];
                            n[20] = e;
                            const h = xa(l, 20, 2, "#host", null),
                                _ = h.mergedAttrs = t.hostAttrs;
                            null !== _ && (Iu(h, _, !0), null !== e && (hn(s, e, _), null !== h.classes && kc(s, e, h.classes), null !== h.styles && kh(s, e, h.styles)));
                            const b = r.createRenderer(e, t),
                                M = Ml(n, rp(t), null, t.onPush ? 64 : 16, n[20], h, r, b, i || null, null);
                            return l.firstCreatePass && (go(vr(h, n), l, t.type), dp(l, h), fp(h, n.length, 1)), Mu(n, M), n[20] = M
                        }(b, this.componentDef, B, l, h);
                        if (b)
                            if (r) hn(h, b, ["ng-version", Hm.full]);
                            else {
                                const {
                                    attrs: ae,
                                    classes: ze
                                } = function(e) {
                                    const t = [],
                                        n = [];
                                    let r = 1,
                                        s = 2;
                                    for (; r < e.length;) {
                                        let i = e[r];
                                        if ("string" == typeof i) 2 === s ? "" !== i && t.push(i, e[++r]) : 8 === s && n.push(i);
                                        else {
                                            if (!Ms(s)) break;
                                            s = i
                                        }
                                        r++
                                    }
                                    return {
                                        attrs: t,
                                        classes: n
                                    }
                                }(this.componentDef.selectors[0]);
                                ae && hn(h, b, ae), ze && ze.length > 0 && kc(h, b, ze.join(" "))
                            } if (W = lr(L, 20), void 0 !== n) {
                            const ae = W.projection = [];
                            for (let ze = 0; ze < this.ngContentSelectors.length; ze++) {
                                const nt = n[ze];
                                ae.push(null != nt ? Array.from(nt) : null)
                            }
                        }
                        J = function(e, t, n, r, s) {
                            const i = n[1],
                                l = function(e, t, n) {
                                    const r = an();
                                    e.firstCreatePass && (n.providersResolver && n.providersResolver(n), hp(e, r, t, Na(e, t, 1, null), n));
                                    const s = Ts(t, e, r.directiveStart, r);
                                    rr(s, t);
                                    const i = dt(r, t);
                                    return i && rr(i, t), s
                                }(i, n, t);
                            if (r.components.push(l), e[8] = l, s && s.forEach(h => h(l, t)), t.contentQueries) {
                                const h = an();
                                t.contentQueries(1, l, h.directiveStart)
                            }
                            const u = an();
                            return !i.firstCreatePass || null === t.hostBindings && null === t.hostAttrs || (Qr(u.index), up(n[1], u, 0, u.directiveStart, u.directiveEnd, t), cp(t, l)), l
                        }(Ce, this.componentDef, B, P, [Sv]), Il(L, B, null)
                    } finally {
                        Ii()
                    }
                    return new Iw(this.componentType, J, el(W, B), B, W)
                }
            }
            class Iw extends class {} {
                constructor(t, n, r, s, i) {
                    super(), this.location = r, this._rootLView = s, this._tNode = i, this.instance = n, this.hostView = this.changeDetectorRef = new f0(s), this.componentType = t
                }
                get injector() {
                    return new Qs(this._tNode, this._rootLView)
                }
                destroy() {
                    this.hostView.destroy()
                }
                onDestroy(t) {
                    this.hostView.onDestroy(t)
                }
            }
            const il = new Map;
            class Rw extends ia {
                constructor(t, n) {
                    super(), this._parent = n, this._bootstrapComponents = [], this.injector = this, this.destroyCbs = [], this.componentFactoryResolver = new _y(this);
                    const r = bn(t),
                        s = t[$i] || null;
                    s && xd(s), this._bootstrapComponents = ri(r.bootstrap), this._r3Injector = bp(t, n, [{
                        provide: ia,
                        useValue: this
                    }, {
                        provide: Xa,
                        useValue: this.componentFactoryResolver
                    }], q(t)), this._r3Injector._resolveInjectorDefTypes(), this.instance = this.get(t)
                }
                get(t, n = sn.THROW_IF_NOT_FOUND, r = N.Default) {
                    return t === sn || t === ia || t === La ? this : this._r3Injector.get(t, n, r)
                }
                destroy() {
                    const t = this._r3Injector;
                    !t.destroyed && t.destroy(), this.destroyCbs.forEach(n => n()), this.destroyCbs = null
                }
                onDestroy(t) {
                    this.destroyCbs.push(t)
                }
            }
            class tf extends qm {
                constructor(t) {
                    super(), this.moduleType = t, null !== bn(t) && function(e) {
                        const t = new Set;
                        ! function n(r) {
                            const s = bn(r, !0),
                                i = s.id;
                            null !== i && (function(e, t, n) {
                                if (t && t !== n) throw new Error(`Duplicate module registered for ${e} - ${q(t)} vs ${q(t.name)}`)
                            }(i, il.get(i), r), il.set(i, r));
                            const l = ri(s.imports);
                            for (const u of l) t.has(u) || (t.add(u), n(u))
                        }(e)
                    }(t)
                }
                create(t) {
                    return new Rw(this.moduleType, t)
                }
            }

            function by(e, t, n) {
                const r = xn() + e,
                    s = pe();
                return s[r] === ft ? oi(s, r, n ? t.call(n) : t()) : function(e, t) {
                    return e[t]
                }(s, r)
            }

            function wy(e, t, n, r, s, i) {
                const l = t + n;
                return sr(e, l, s) ? oi(e, l + 1, i ? r.call(i, s) : r(s)) : function(e, t) {
                    const n = e[t];
                    return n === ft ? void 0 : n
                }(e, l + 1)
            }

            function Iy(e, t) {
                const n = gt();
                let r;
                const s = e + 20;
                n.firstCreatePass ? (r = function(e, t) {
                    if (t)
                        for (let n = t.length - 1; n >= 0; n--) {
                            const r = t[n];
                            if (e === r.name) return r
                        }
                    throw new rt("302", `The pipe '${e}' could not be found!`)
                }(t, n.pipeRegistry), n.data[s] = r, r.onDestroy && (n.destroyHooks || (n.destroyHooks = [])).push(s, r.onDestroy)) : r = n.data[s];
                const i = r.factory || (r.factory = Sn(r.type)),
                    l = le(Fl);
                try {
                    const u = es(!1),
                        h = i();
                    return es(u),
                        function(e, t, n, r) {
                            n >= e.data.length && (e.data[n] = null, e.blueprint[n] = null), t[n] = r
                        }(n, pe(), s, h), h
                } finally {
                    le(l)
                }
            }

            function Py(e, t, n) {
                const r = e + 20,
                    s = pe(),
                    i = Rn(s, r);
                return function(e, t) {
                    Os.isWrapped(t) && (t = Os.unwrap(t), e[Qe.lFrame.bindingIndex] = ft);
                    return t
                }(s, function(e, t) {
                    return e[1].data[t].pure
                }(s, r) ? wy(s, xn(), t, i.transform, n, i) : i.transform(n))
            }

            function nf(e) {
                return t => {
                    setTimeout(e, void 0, t)
                }
            }
            const ci = class extends A.xQ {
                constructor(t = !1) {
                    super(), this.__isAsync = t
                }
                emit(t) {
                    super.next(t)
                }
                subscribe(t, n, r) {
                    var s, i, l;
                    let u = t,
                        h = n || (() => null),
                        _ = r;
                    if (t && "object" == typeof t) {
                        const M = t;
                        u = null === (s = M.next) || void 0 === s ? void 0 : s.bind(M), h = null === (i = M.error) || void 0 === i ? void 0 : i.bind(M), _ = null === (l = M.complete) || void 0 === l ? void 0 : l.bind(M)
                    }
                    this.__isAsync && (h = nf(h), u && (u = nf(u)), _ && (_ = nf(_)));
                    const b = super.subscribe({
                        next: u,
                        error: h,
                        complete: _
                    });
                    return t instanceof m.w && t.add(b), b
                }
            };

            function Yw() {
                return this._results[ja()]()
            }
            class Xl {
                constructor(t = !1) {
                    this._emitDistinctChangesOnly = t, this.dirty = !0, this._results = [], this._changesDetected = !1, this._changes = null, this.length = 0, this.first = void 0, this.last = void 0;
                    const n = ja(),
                        r = Xl.prototype;
                    r[n] || (r[n] = Yw)
                }
                get changes() {
                    return this._changes || (this._changes = new ci)
                }
                get(t) {
                    return this._results[t]
                }
                map(t) {
                    return this._results.map(t)
                }
                filter(t) {
                    return this._results.filter(t)
                }
                find(t) {
                    return this._results.find(t)
                }
                reduce(t, n) {
                    return this._results.reduce(t, n)
                }
                forEach(t) {
                    this._results.forEach(t)
                }
                some(t) {
                    return this._results.some(t)
                }
                toArray() {
                    return this._results.slice()
                }
                toString() {
                    return this._results.toString()
                }
                reset(t, n) {
                    const r = this;
                    r.dirty = !1;
                    const s = br(t);
                    (this._changesDetected = ! function(e, t, n) {
                        if (e.length !== t.length) return !1;
                        for (let r = 0; r < e.length; r++) {
                            let s = e[r],
                                i = t[r];
                            if (n && (s = n(s), i = n(i)), i !== s) return !1
                        }
                        return !0
                    }(r._results, s, n)) && (r._results = s, r.length = s.length, r.last = s[this.length - 1], r.first = s[0])
                }
                notifyOnChanges() {
                    this._changes && (this._changesDetected || !this._emitDistinctChangesOnly) && this._changes.emit(this)
                }
                setDirty() {
                    this.dirty = !0
                }
                destroy() {
                    this.changes.complete(), this.changes.unsubscribe()
                }
            }
            Symbol;
            class rf {
                constructor(t) {
                    this.queryList = t, this.matches = null
                }
                clone() {
                    return new rf(this.queryList)
                }
                setDirty() {
                    this.queryList.setDirty()
                }
            }
            class sf {
                constructor(t = []) {
                    this.queries = t
                }
                createEmbeddedView(t) {
                    const n = t.queries;
                    if (null !== n) {
                        const r = null !== t.contentQueries ? t.contentQueries[0] : n.length,
                            s = [];
                        for (let i = 0; i < r; i++) {
                            const l = n.getByIndex(i);
                            s.push(this.queries[l.indexInDeclarationView].clone())
                        }
                        return new sf(s)
                    }
                    return null
                }
                insertView(t) {
                    this.dirtyQueriesWithMatches(t)
                }
                detachView(t) {
                    this.dirtyQueriesWithMatches(t)
                }
                dirtyQueriesWithMatches(t) {
                    for (let n = 0; n < this.queries.length; n++) null !== jy(t, n).matches && this.queries[n].setDirty()
                }
            }
            class Oy {
                constructor(t, n, r = null) {
                    this.predicate = t, this.flags = n, this.read = r
                }
            }
            class of {
                constructor(t = []) {
                    this.queries = t
                }
                elementStart(t, n) {
                    for (let r = 0; r < this.queries.length; r++) this.queries[r].elementStart(t, n)
                }
                elementEnd(t) {
                    for (let n = 0; n < this.queries.length; n++) this.queries[n].elementEnd(t)
                }
                embeddedTView(t) {
                    let n = null;
                    for (let r = 0; r < this.length; r++) {
                        const s = null !== n ? n.length : 0,
                            i = this.getByIndex(r).embeddedTView(t, s);
                        i && (i.indexInDeclarationView = r, null !== n ? n.push(i) : n = [i])
                    }
                    return null !== n ? new of (n) : null
                }
                template(t, n) {
                    for (let r = 0; r < this.queries.length; r++) this.queries[r].template(t, n)
                }
                getByIndex(t) {
                    return this.queries[t]
                }
                get length() {
                    return this.queries.length
                }
                track(t) {
                    this.queries.push(t)
                }
            }
            class af {
                constructor(t, n = -1) {
                    this.metadata = t, this.matches = null, this.indexInDeclarationView = -1, this.crossesNgTemplate = !1, this._appliesToNextNode = !0, this._declarationNodeIndex = n
                }
                elementStart(t, n) {
                    this.isApplyingToNode(n) && this.matchTNode(t, n)
                }
                elementEnd(t) {
                    this._declarationNodeIndex === t.index && (this._appliesToNextNode = !1)
                }
                template(t, n) {
                    this.elementStart(t, n)
                }
                embeddedTView(t, n) {
                    return this.isApplyingToNode(t) ? (this.crossesNgTemplate = !0, this.addMatch(-t.index, n), new af(this.metadata)) : null
                }
                isApplyingToNode(t) {
                    if (this._appliesToNextNode && 1 != (1 & this.metadata.flags)) {
                        const n = this._declarationNodeIndex;
                        let r = t.parent;
                        for (; null !== r && 8 & r.type && r.index !== n;) r = r.parent;
                        return n === (null !== r ? r.index : -1)
                    }
                    return this._appliesToNextNode
                }
                matchTNode(t, n) {
                    const r = this.metadata.predicate;
                    if (Array.isArray(r))
                        for (let s = 0; s < r.length; s++) {
                            const i = r[s];
                            this.matchTNodeWithReadOption(t, n, Qw(n, i)), this.matchTNodeWithReadOption(t, n, yo(n, t, i, !1, !1))
                        } else r === Hl ? 4 & n.type && this.matchTNodeWithReadOption(t, n, -1) : this.matchTNodeWithReadOption(t, n, yo(n, t, r, !1, !1))
                }
                matchTNodeWithReadOption(t, n, r) {
                    if (null !== r) {
                        const s = this.metadata.read;
                        if (null !== s)
                            if (s === ui || s === Wu || s === Hl && 4 & n.type) this.addMatch(n.index, -2);
                            else {
                                const i = yo(n, t, s, !1, !1);
                                null !== i && this.addMatch(n.index, i)
                            }
                        else this.addMatch(n.index, r)
                    }
                }
                addMatch(t, n) {
                    null === this.matches ? this.matches = [t, n] : this.matches.push(t, n)
                }
            }

            function Qw(e, t) {
                const n = e.localNames;
                if (null !== n)
                    for (let r = 0; r < n.length; r += 2)
                        if (n[r] === t) return n[r + 1];
                return null
            }

            function Xw(e, t, n, r) {
                return -1 === n ? function(e, t) {
                    return 11 & e.type ? el(e, t) : 4 & e.type ? Gu(e, t) : null
                }(t, e) : -2 === n ? function(e, t, n) {
                    return n === ui ? el(t, e) : n === Hl ? Gu(t, e) : n === Wu ? Jm(t, e) : void 0
                }(e, t, r) : Ts(e, e[1], n, t)
            }

            function Ry(e, t, n, r) {
                const s = t[19].queries[r];
                if (null === s.matches) {
                    const i = e.data,
                        l = n.matches,
                        u = [];
                    for (let h = 0; h < l.length; h += 2) {
                        const _ = l[h];
                        u.push(_ < 0 ? null : Xw(t, i[_], l[h + 1], n.metadata.read))
                    }
                    s.matches = u
                }
                return s.matches
            }

            function lf(e, t, n, r) {
                const s = e.queries.getByIndex(n),
                    i = s.matches;
                if (null !== i) {
                    const l = Ry(e, t, s, n);
                    for (let u = 0; u < i.length; u += 2) {
                        const h = i[u];
                        if (h > 0) r.push(l[u / 2]);
                        else {
                            const _ = i[u + 1],
                                b = t[-h];
                            for (let M = 10; M < b.length; M++) {
                                const P = b[M];
                                P[17] === P[3] && lf(P[1], P, _, r)
                            }
                            if (null !== b[9]) {
                                const M = b[9];
                                for (let P = 0; P < M.length; P++) {
                                    const L = M[P];
                                    lf(L[1], L, _, r)
                                }
                            }
                        }
                    }
                }
                return r
            }

            function xy(e) {
                const t = pe(),
                    n = gt(),
                    r = fa();
                Ho(r + 1);
                const s = jy(n, r);
                if (e.dirty && En(t) === (2 == (2 & s.metadata.flags))) {
                    if (null === s.matches) e.reset([]);
                    else {
                        const i = s.crossesNgTemplate ? lf(n, t, r, []) : Ry(n, t, s, r);
                        e.reset(i, Bm), e.notifyOnChanges()
                    }
                    return !0
                }
                return !1
            }

            function Ny(e, t, n) {
                const r = gt();
                r.firstCreatePass && (Vy(r, new Oy(e, t, n), -1), 2 == (2 & t) && (r.staticViewQueries = !0)), ky(r, pe(), t)
            }

            function Fy(e, t, n, r) {
                const s = gt();
                if (s.firstCreatePass) {
                    const i = an();
                    Vy(s, new Oy(t, n, r), i.index),
                        function(e, t) {
                            const n = e.contentQueries || (e.contentQueries = []);
                            t !== (n.length ? n[n.length - 1] : -1) && n.push(e.queries.length - 1, t)
                        }(s, e), 2 == (2 & n) && (s.staticContentQueries = !0)
                }
                ky(s, pe(), n)
            }

            function Ly() {
                return e = pe(), t = fa(), e[19].queries[t].queryList;
                var e, t
            }

            function ky(e, t, n) {
                const r = new Xl(4 == (4 & n));
                op(e, t, r, r.destroy), null === t[19] && (t[19] = new sf), t[19].queries.push(new rf(r))
            }

            function Vy(e, t, n) {
                null === e.queries && (e.queries = new of ), e.queries.track(new af(t, n))
            }

            function jy(e, t) {
                return e.queries.getByIndex(t)
            }
            const pf = new $e("Application Initializer");
            let al = (() => {
                class e {
                    constructor(n) {
                        this.appInits = n, this.resolve = Bu, this.reject = Bu, this.initialized = !1, this.done = !1, this.donePromise = new Promise((r, s) => {
                            this.resolve = r, this.reject = s
                        })
                    }
                    runInitializers() {
                        if (this.initialized) return;
                        const n = [],
                            r = () => {
                                this.done = !0, this.resolve()
                            };
                        if (this.appInits)
                            for (let s = 0; s < this.appInits.length; s++) {
                                const i = this.appInits[s]();
                                if (Dd(i)) n.push(i);
                                else if (bd(i)) {
                                    const l = new Promise((u, h) => {
                                        i.subscribe({
                                            complete: u,
                                            error: h
                                        })
                                    });
                                    n.push(l)
                                }
                            }
                        Promise.all(n).then(() => {
                            r()
                        }).catch(s => {
                            this.reject(s)
                        }), 0 === n.length && r(), this.initialized = !0
                    }
                }
                return e.\u0275fac = function(n) {
                    return new(n || e)(Rt(pf, 8))
                }, e.\u0275prov = pt({
                    token: e,
                    factory: e.\u0275fac
                }), e
            })();
            const r_ = new $e("AppId"),
                PT = {
                    provide: r_,
                    useFactory: function() {
                        return `${gf()}${gf()}${gf()}`
                    },
                    deps: []
                };

            function gf() {
                return String.fromCharCode(97 + Math.floor(25 * Math.random()))
            }
            const s_ = new $e("Platform Initializer"),
                i_ = new $e("Platform ID"),
                o_ = new $e("appBootstrapListener");
            let a_ = (() => {
                class e {
                    log(n) {
                        console.log(n)
                    }
                    warn(n) {
                        console.warn(n)
                    }
                }
                return e.\u0275fac = function(n) {
                    return new(n || e)
                }, e.\u0275prov = pt({
                    token: e,
                    factory: e.\u0275fac
                }), e
            })();
            const Xu = new $e("LocaleId"),
                l_ = new $e("DefaultCurrencyCode");
            class RT {
                constructor(t, n) {
                    this.ngModuleFactory = t, this.componentFactories = n
                }
            }
            const mf = function(e) {
                    return new tf(e)
                },
                xT = mf,
                NT = function(e) {
                    return Promise.resolve(mf(e))
                },
                u_ = function(e) {
                    const t = mf(e),
                        r = ri(bn(e).declarations).reduce((s, i) => {
                            const l = tn(i);
                            return l && s.push(new Cy(l)), s
                        }, []);
                    return new RT(t, r)
                },
                FT = u_,
                LT = function(e) {
                    return Promise.resolve(u_(e))
                };
            let tu = (() => {
                class e {
                    constructor() {
                        this.compileModuleSync = xT, this.compileModuleAsync = NT, this.compileModuleAndAllComponentsSync = FT, this.compileModuleAndAllComponentsAsync = LT
                    }
                    clearCache() {}
                    clearCacheFor(n) {}
                    getModuleId(n) {}
                }
                return e.\u0275fac = function(n) {
                    return new(n || e)
                }, e.\u0275prov = pt({
                    token: e,
                    factory: e.\u0275fac
                }), e
            })();
            const jT = (() => Promise.resolve(0))();

            function yf(e) {
                "undefined" == typeof Zone ? jT.then(() => {
                    e && e.apply(null, null)
                }) : Zone.current.scheduleMicroTask("scheduleMicrotask", e)
            }
            class kr {
                constructor({
                    enableLongStackTrace: t = !1,
                    shouldCoalesceEventChangeDetection: n = !1,
                    shouldCoalesceRunChangeDetection: r = !1
                }) {
                    if (this.hasPendingMacrotasks = !1, this.hasPendingMicrotasks = !1, this.isStable = !0, this.onUnstable = new ci(!1), this.onMicrotaskEmpty = new ci(!1), this.onStable = new ci(!1), this.onError = new ci(!1), "undefined" == typeof Zone) throw new Error("In this configuration Angular requires Zone.js");
                    Zone.assertZonePatched();
                    const s = this;
                    s._nesting = 0, s._outer = s._inner = Zone.current, Zone.TaskTrackingZoneSpec && (s._inner = s._inner.fork(new Zone.TaskTrackingZoneSpec)), t && Zone.longStackTraceZoneSpec && (s._inner = s._inner.fork(Zone.longStackTraceZoneSpec)), s.shouldCoalesceEventChangeDetection = !r && n, s.shouldCoalesceRunChangeDetection = r, s.lastRequestAnimationFrameId = -1, s.nativeRequestAnimationFrame = function() {
                            let e = Ue.requestAnimationFrame,
                                t = Ue.cancelAnimationFrame;
                            if ("undefined" != typeof Zone && e && t) {
                                const n = e[Zone.__symbol__("OriginalDelegate")];
                                n && (e = n);
                                const r = t[Zone.__symbol__("OriginalDelegate")];
                                r && (t = r)
                            }
                            return {
                                nativeRequestAnimationFrame: e,
                                nativeCancelAnimationFrame: t
                            }
                        }().nativeRequestAnimationFrame,
                        function(e) {
                            const t = () => {
                                ! function(e) {
                                    e.isCheckStableRunning || -1 !== e.lastRequestAnimationFrameId || (e.lastRequestAnimationFrameId = e.nativeRequestAnimationFrame.call(Ue, () => {
                                        e.fakeTopEventTask || (e.fakeTopEventTask = Zone.root.scheduleEventTask("fakeTopEventTask", () => {
                                            e.lastRequestAnimationFrameId = -1, Ef(e), e.isCheckStableRunning = !0, _f(e), e.isCheckStableRunning = !1
                                        }, void 0, () => {}, () => {})), e.fakeTopEventTask.invoke()
                                    }), Ef(e))
                                }(e)
                            };
                            e._inner = e._inner.fork({
                                name: "angular",
                                properties: {
                                    isAngularZone: !0
                                },
                                onInvokeTask: (n, r, s, i, l, u) => {
                                    try {
                                        return c_(e), n.invokeTask(s, i, l, u)
                                    } finally {
                                        (e.shouldCoalesceEventChangeDetection && "eventTask" === i.type || e.shouldCoalesceRunChangeDetection) && t(), d_(e)
                                    }
                                },
                                onInvoke: (n, r, s, i, l, u, h) => {
                                    try {
                                        return c_(e), n.invoke(s, i, l, u, h)
                                    } finally {
                                        e.shouldCoalesceRunChangeDetection && t(), d_(e)
                                    }
                                },
                                onHasTask: (n, r, s, i) => {
                                    n.hasTask(s, i), r === s && ("microTask" == i.change ? (e._hasPendingMicrotasks = i.microTask, Ef(e), _f(e)) : "macroTask" == i.change && (e.hasPendingMacrotasks = i.macroTask))
                                },
                                onHandleError: (n, r, s, i) => (n.handleError(s, i), e.runOutsideAngular(() => e.onError.emit(i)), !1)
                            })
                        }(s)
                }
                static isInAngularZone() {
                    return !0 === Zone.current.get("isAngularZone")
                }
                static assertInAngularZone() {
                    if (!kr.isInAngularZone()) throw new Error("Expected to be in Angular Zone, but it is not!")
                }
                static assertNotInAngularZone() {
                    if (kr.isInAngularZone()) throw new Error("Expected to not be in Angular Zone, but it is!")
                }
                run(t, n, r) {
                    return this._inner.run(t, n, r)
                }
                runTask(t, n, r, s) {
                    const i = this._inner,
                        l = i.scheduleEventTask("NgZoneEvent: " + s, t, UT, Bu, Bu);
                    try {
                        return i.runTask(l, n, r)
                    } finally {
                        i.cancelTask(l)
                    }
                }
                runGuarded(t, n, r) {
                    return this._inner.runGuarded(t, n, r)
                }
                runOutsideAngular(t) {
                    return this._outer.run(t)
                }
            }
            const UT = {};

            function _f(e) {
                if (0 == e._nesting && !e.hasPendingMicrotasks && !e.isStable) try {
                    e._nesting++, e.onMicrotaskEmpty.emit(null)
                } finally {
                    if (e._nesting--, !e.hasPendingMicrotasks) try {
                        e.runOutsideAngular(() => e.onStable.emit(null))
                    } finally {
                        e.isStable = !0
                    }
                }
            }

            function Ef(e) {
                e.hasPendingMicrotasks = !!(e._hasPendingMicrotasks || (e.shouldCoalesceEventChangeDetection || e.shouldCoalesceRunChangeDetection) && -1 !== e.lastRequestAnimationFrameId)
            }

            function c_(e) {
                e._nesting++, e.isStable && (e.isStable = !1, e.onUnstable.emit(null))
            }

            function d_(e) {
                e._nesting--, _f(e)
            }
            class zT {
                constructor() {
                    this.hasPendingMicrotasks = !1, this.hasPendingMacrotasks = !1, this.isStable = !0, this.onUnstable = new ci, this.onMicrotaskEmpty = new ci, this.onStable = new ci, this.onError = new ci
                }
                run(t, n, r) {
                    return t.apply(n, r)
                }
                runGuarded(t, n, r) {
                    return t.apply(n, r)
                }
                runOutsideAngular(t) {
                    return t()
                }
                runTask(t, n, r, s) {
                    return t.apply(n, r)
                }
            }
            let f_ = (() => {
                    class e {
                        constructor(n) {
                            this._ngZone = n, this._pendingCount = 0, this._isZoneStable = !0, this._didWork = !1, this._callbacks = [], this.taskTrackingZone = null, this._watchAngularEvents(), n.run(() => {
                                this.taskTrackingZone = "undefined" == typeof Zone ? null : Zone.current.get("TaskTrackingZone")
                            })
                        }
                        _watchAngularEvents() {
                            this._ngZone.onUnstable.subscribe({
                                next: () => {
                                    this._didWork = !0, this._isZoneStable = !1
                                }
                            }), this._ngZone.runOutsideAngular(() => {
                                this._ngZone.onStable.subscribe({
                                    next: () => {
                                        kr.assertNotInAngularZone(), yf(() => {
                                            this._isZoneStable = !0, this._runCallbacksIfReady()
                                        })
                                    }
                                })
                            })
                        }
                        increasePendingRequestCount() {
                            return this._pendingCount += 1, this._didWork = !0, this._pendingCount
                        }
                        decreasePendingRequestCount() {
                            if (this._pendingCount -= 1, this._pendingCount < 0) throw new Error("pending async requests below zero");
                            return this._runCallbacksIfReady(), this._pendingCount
                        }
                        isStable() {
                            return this._isZoneStable && 0 === this._pendingCount && !this._ngZone.hasPendingMacrotasks
                        }
                        _runCallbacksIfReady() {
                            if (this.isStable()) yf(() => {
                                for (; 0 !== this._callbacks.length;) {
                                    let n = this._callbacks.pop();
                                    clearTimeout(n.timeoutId), n.doneCb(this._didWork)
                                }
                                this._didWork = !1
                            });
                            else {
                                let n = this.getPendingTasks();
                                this._callbacks = this._callbacks.filter(r => !r.updateCb || !r.updateCb(n) || (clearTimeout(r.timeoutId), !1)), this._didWork = !0
                            }
                        }
                        getPendingTasks() {
                            return this.taskTrackingZone ? this.taskTrackingZone.macroTasks.map(n => ({
                                source: n.source,
                                creationLocation: n.creationLocation,
                                data: n.data
                            })) : []
                        }
                        addCallback(n, r, s) {
                            let i = -1;
                            r && r > 0 && (i = setTimeout(() => {
                                this._callbacks = this._callbacks.filter(l => l.timeoutId !== i), n(this._didWork, this.getPendingTasks())
                            }, r)), this._callbacks.push({
                                doneCb: n,
                                timeoutId: i,
                                updateCb: s
                            })
                        }
                        whenStable(n, r, s) {
                            if (s && !this.taskTrackingZone) throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/plugins/task-tracking" loaded?');
                            this.addCallback(n, r, s), this._runCallbacksIfReady()
                        }
                        getPendingRequestCount() {
                            return this._pendingCount
                        }
                        findProviders(n, r, s) {
                            return []
                        }
                    }
                    return e.\u0275fac = function(n) {
                        return new(n || e)(Rt(kr))
                    }, e.\u0275prov = pt({
                        token: e,
                        factory: e.\u0275fac
                    }), e
                })(),
                h_ = (() => {
                    class e {
                        constructor() {
                            this._applications = new Map, Cf.addToWindow(this)
                        }
                        registerApplication(n, r) {
                            this._applications.set(n, r)
                        }
                        unregisterApplication(n) {
                            this._applications.delete(n)
                        }
                        unregisterAllApplications() {
                            this._applications.clear()
                        }
                        getTestability(n) {
                            return this._applications.get(n) || null
                        }
                        getAllTestabilities() {
                            return Array.from(this._applications.values())
                        }
                        getAllRootElements() {
                            return Array.from(this._applications.keys())
                        }
                        findTestabilityInTree(n, r = !0) {
                            return Cf.findTestabilityInTree(this, n, r)
                        }
                    }
                    return e.\u0275fac = function(n) {
                        return new(n || e)
                    }, e.\u0275prov = pt({
                        token: e,
                        factory: e.\u0275fac
                    }), e
                })();
            class GT {
                addToWindow(t) {}
                findTestabilityInTree(t, n, r) {
                    return null
                }
            }

            function WT(e) {
                Cf = e
            }
            let Cf = new GT,
                p_ = !0,
                g_ = !1;

            function KT() {
                if (g_) throw new Error("Cannot enable prod mode after platform setup.");
                p_ = !1
            }
            let Ls;
            const y_ = new $e("AllowMultipleToken");
            class eS {
                constructor(t, n) {
                    this.name = t, this.token = n
                }
            }

            function __(e, t, n = []) {
                const r = `Platform: ${t}`,
                    s = new $e(r);
                return (i = []) => {
                    let l = E_();
                    if (!l || l.injector.get(y_, !1))
                        if (e) e(n.concat(i).concat({
                            provide: s,
                            useValue: !0
                        }));
                        else {
                            const u = n.concat(i).concat({
                                provide: s,
                                useValue: !0
                            }, {
                                provide: Pl,
                                useValue: "platform"
                            });
                            ! function(e) {
                                if (Ls && !Ls.destroyed && !Ls.injector.get(y_, !1)) throw new Error("There can be only one platform. Destroy the previous one to create a new one.");
                                Ls = e.get(C_);
                                const t = e.get(s_, null);
                                t && t.forEach(n => n())
                            }(sn.create({
                                providers: u,
                                name: r
                            }))
                        } return function(e) {
                        const t = E_();
                        if (!t) throw new Error("No platform exists!");
                        if (!t.injector.get(e, null)) throw new Error("A platform with a different configuration has been created. Please destroy it first.");
                        return t
                    }(s)
                }
            }

            function E_() {
                return Ls && !Ls.destroyed ? Ls : null
            }
            let C_ = (() => {
                class e {
                    constructor(n) {
                        this._injector = n, this._modules = [], this._destroyListeners = [], this._destroyed = !1
                    }
                    bootstrapModuleFactory(n, r) {
                        const u = function(e, t) {
                                let n;
                                return n = "noop" === e ? new zT : ("zone.js" === e ? void 0 : e) || new kr({
                                    enableLongStackTrace: (g_ = !0, p_),
                                    shouldCoalesceEventChangeDetection: !!(null == t ? void 0 : t.ngZoneEventCoalescing),
                                    shouldCoalesceRunChangeDetection: !!(null == t ? void 0 : t.ngZoneRunCoalescing)
                                }), n
                            }(r ? r.ngZone : void 0, {
                                ngZoneEventCoalescing: r && r.ngZoneEventCoalescing || !1,
                                ngZoneRunCoalescing: r && r.ngZoneRunCoalescing || !1
                            }),
                            h = [{
                                provide: kr,
                                useValue: u
                            }];
                        return u.run(() => {
                            const _ = sn.create({
                                    providers: h,
                                    parent: this.injector,
                                    name: n.moduleType.name
                                }),
                                b = n.create(_),
                                M = b.injector.get(Pa, null);
                            if (!M) throw new Error("No ErrorHandler. Is platform module (BrowserModule) included?");
                            return u.runOutsideAngular(() => {
                                    const P = u.onError.subscribe({
                                        next: L => {
                                            M.handleError(L)
                                        }
                                    });
                                    b.onDestroy(() => {
                                        vf(this._modules, b), P.unsubscribe()
                                    })
                                }),
                                function(e, t, n) {
                                    try {
                                        const r = n();
                                        return Dd(r) ? r.catch(s => {
                                            throw t.runOutsideAngular(() => e.handleError(s)), s
                                        }) : r
                                    } catch (r) {
                                        throw t.runOutsideAngular(() => e.handleError(r)), r
                                    }
                                }(M, u, () => {
                                    const P = b.injector.get(al);
                                    return P.runInitializers(), P.donePromise.then(() => (xd(b.injector.get(Xu, Fu) || Fu), this._moduleDoBootstrap(b), b))
                                })
                        })
                    }
                    bootstrapModule(n, r = []) {
                        const s = v_({}, r);
                        return function(e, t, n) {
                            const r = new tf(n);
                            return Promise.resolve(r)
                        }(0, 0, n).then(i => this.bootstrapModuleFactory(i, s))
                    }
                    _moduleDoBootstrap(n) {
                        const r = n.injector.get(nu);
                        if (n._bootstrapComponents.length > 0) n._bootstrapComponents.forEach(s => r.bootstrap(s));
                        else {
                            if (!n.instance.ngDoBootstrap) throw new Error(`The module ${q(n.instance.constructor)} was bootstrapped, but it does not declare "@NgModule.bootstrap" components nor a "ngDoBootstrap" method. Please define one of these.`);
                            n.instance.ngDoBootstrap(r)
                        }
                        this._modules.push(n)
                    }
                    onDestroy(n) {
                        this._destroyListeners.push(n)
                    }
                    get injector() {
                        return this._injector
                    }
                    destroy() {
                        if (this._destroyed) throw new Error("The platform has already been destroyed!");
                        this._modules.slice().forEach(n => n.destroy()), this._destroyListeners.forEach(n => n()), this._destroyed = !0
                    }
                    get destroyed() {
                        return this._destroyed
                    }
                }
                return e.\u0275fac = function(n) {
                    return new(n || e)(Rt(sn))
                }, e.\u0275prov = pt({
                    token: e,
                    factory: e.\u0275fac
                }), e
            })();

            function v_(e, t) {
                return Array.isArray(t) ? t.reduce(v_, e) : Object.assign(Object.assign({}, e), t)
            }
            let nu = (() => {
                class e {
                    constructor(n, r, s, i, l) {
                        this._zone = n, this._injector = r, this._exceptionHandler = s, this._componentFactoryResolver = i, this._initStatus = l, this._bootstrapListeners = [], this._views = [], this._runningTick = !1, this._stable = !0, this.componentTypes = [], this.components = [], this._onMicrotaskEmptySubscription = this._zone.onMicrotaskEmpty.subscribe({
                            next: () => {
                                this._zone.run(() => {
                                    this.tick()
                                })
                            }
                        });
                        const u = new he.y(_ => {
                                this._stable = this._zone.isStable && !this._zone.hasPendingMacrotasks && !this._zone.hasPendingMicrotasks, this._zone.runOutsideAngular(() => {
                                    _.next(this._stable), _.complete()
                                })
                            }),
                            h = new he.y(_ => {
                                let b;
                                this._zone.runOutsideAngular(() => {
                                    b = this._zone.onStable.subscribe(() => {
                                        kr.assertNotInAngularZone(), yf(() => {
                                            !this._stable && !this._zone.hasPendingMacrotasks && !this._zone.hasPendingMicrotasks && (this._stable = !0, _.next(!0))
                                        })
                                    })
                                });
                                const M = this._zone.onUnstable.subscribe(() => {
                                    kr.assertInAngularZone(), this._stable && (this._stable = !1, this._zone.runOutsideAngular(() => {
                                        _.next(!1)
                                    }))
                                });
                                return () => {
                                    b.unsubscribe(), M.unsubscribe()
                                }
                            });
                        this.isStable = (0, oe.T)(u, h.pipe(e => (0, ee.x)()(function(e, t) {
                            return function(r) {
                                let s;
                                s = "function" == typeof e ? e : function() {
                                    return e
                                };
                                const i = Object.create(r, Z.N);
                                return i.source = r, i.subjectFactory = s, i
                            }
                        }(Q)(e))))
                    }
                    bootstrap(n, r) {
                        if (!this._initStatus.done) throw new Error("Cannot bootstrap as there are still asynchronous initializers running. Bootstrap components in the `ngDoBootstrap` method of the root module.");
                        let s;
                        s = n instanceof km ? n : this._componentFactoryResolver.resolveComponentFactory(n), this.componentTypes.push(s.componentType);
                        const i = function(e) {
                                return e.isBoundToModule
                            }(s) ? void 0 : this._injector.get(ia),
                            u = s.create(sn.NULL, [], r || s.selector, i),
                            h = u.location.nativeElement,
                            _ = u.injector.get(f_, null),
                            b = _ && u.injector.get(h_);
                        return _ && b && b.registerApplication(h, _), u.onDestroy(() => {
                            this.detachView(u.hostView), vf(this.components, u), b && b.unregisterApplication(h)
                        }), this._loadComponent(u), u
                    }
                    tick() {
                        if (this._runningTick) throw new Error("ApplicationRef.tick is called recursively");
                        try {
                            this._runningTick = !0;
                            for (let n of this._views) n.detectChanges()
                        } catch (n) {
                            this._zone.runOutsideAngular(() => this._exceptionHandler.handleError(n))
                        } finally {
                            this._runningTick = !1
                        }
                    }
                    attachView(n) {
                        const r = n;
                        this._views.push(r), r.attachToAppRef(this)
                    }
                    detachView(n) {
                        const r = n;
                        vf(this._views, r), r.detachFromAppRef()
                    }
                    _loadComponent(n) {
                        this.attachView(n.hostView), this.tick(), this.components.push(n), this._injector.get(o_, []).concat(this._bootstrapListeners).forEach(s => s(n))
                    }
                    ngOnDestroy() {
                        this._views.slice().forEach(n => n.destroy()), this._onMicrotaskEmptySubscription.unsubscribe()
                    }
                    get viewCount() {
                        return this._views.length
                    }
                }
                return e.\u0275fac = function(n) {
                    return new(n || e)(Rt(kr), Rt(sn), Rt(Pa), Rt(Xa), Rt(al))
                }, e.\u0275prov = pt({
                    token: e,
                    factory: e.\u0275fac
                }), e
            })();

            function vf(e, t) {
                const n = e.indexOf(t);
                n > -1 && e.splice(n, 1)
            }
            class oS {}
            class lS {}
            const uS = {
                factoryPathPrefix: "",
                factoryPathSuffix: ".ngfactory"
            };
            let cS = (() => {
                class e {
                    constructor(n, r) {
                        this._compiler = n, this._config = r || uS
                    }
                    load(n) {
                        return this.loadAndCompile(n)
                    }
                    loadAndCompile(n) {
                        let [r, s] = n.split("#");
                        return void 0 === s && (s = "default"), O(8255)(r).then(i => i[s]).then(i => T_(i, r, s)).then(i => this._compiler.compileModuleAsync(i))
                    }
                    loadFactory(n) {
                        let [r, s] = n.split("#"), i = "NgFactory";
                        return void 0 === s && (s = "default", i = ""), O(8255)(this._config.factoryPathPrefix + r + this._config.factoryPathSuffix).then(l => l[s + i]).then(l => T_(l, r, s))
                    }
                }
                return e.\u0275fac = function(n) {
                    return new(n || e)(Rt(tu), Rt(lS, 8))
                }, e.\u0275prov = pt({
                    token: e,
                    factory: e.\u0275fac
                }), e
            })();

            function T_(e, t, n) {
                if (!e) throw new Error(`Cannot find '${n}' in '${t}'`);
                return e
            }
            const _S = function(e) {
                    return null
                },
                CS = __(null, "core", [{
                    provide: i_,
                    useValue: "unknown"
                }, {
                    provide: C_,
                    deps: [sn]
                }, {
                    provide: h_,
                    deps: []
                }, {
                    provide: a_,
                    deps: []
                }]),
                TS = [{
                    provide: nu,
                    useClass: nu,
                    deps: [kr, sn, Pa, Xa, al]
                }, {
                    provide: Sw,
                    deps: [kr],
                    useFactory: function(e) {
                        let t = [];
                        return e.onStable.subscribe(() => {
                                for (; t.length;) t.pop()()
                            }),
                            function(n) {
                                t.push(n)
                            }
                    }
                }, {
                    provide: al,
                    useClass: al,
                    deps: [
                        [new Ie, pf]
                    ]
                }, {
                    provide: tu,
                    useClass: tu,
                    deps: []
                }, PT, {
                    provide: Hu,
                    useFactory: function() {
                        return C0
                    },
                    deps: []
                }, {
                    provide: $u,
                    useFactory: function() {
                        return v0
                    },
                    deps: []
                }, {
                    provide: Xu,
                    useFactory: function(e) {
                        return xd(e = e || "undefined" != typeof $localize && $localize.locale || Fu), e
                    },
                    deps: [
                        [new Ni(Xu), new Ie, new Ze]
                    ]
                }, {
                    provide: l_,
                    useValue: "USD"
                }];
            let AS = (() => {
                class e {
                    constructor(n) {}
                }
                return e.\u0275fac = function(n) {
                    return new(n || e)(Rt(nu))
                }, e.\u0275mod = ds({
                    type: e
                }), e.\u0275inj = Gt({
                    providers: TS
                }), e
            })()
        },
        8934: (We, fe, O) => {
            "use strict";
            O.d(fe, {
                gz: () => Gr,
                m2: () => Vt,
                OD: () => Ke,
                F0: () => hn,
                rH: () => cr,
                Od: () => ws,
                yS: () => Ds,
                Bz: () => va,
                lC: () => Xr
            });
            var A = O(8583),
                m = O(3018),
                he = O(4869),
                oe = O(9796),
                Z = O(7393);
            class Y extends Z.L {
                notifyNext(d, c, y, D, S) {
                    this.destination.next(c)
                }
                notifyError(d, c) {
                    this.destination.error(d)
                }
                notifyComplete(d) {
                    this.destination.complete()
                }
            }
            class re extends Z.L {
                constructor(d, c, y) {
                    super(), this.parent = d, this.outerValue = c, this.outerIndex = y, this.index = 0
                }
                _next(d) {
                    this.parent.notifyNext(this.outerValue, d, this.outerIndex, this.index++, this)
                }
                _error(d) {
                    this.parent.notifyError(d, this), this.unsubscribe()
                }
                _complete() {
                    this.parent.notifyComplete(this), this.unsubscribe()
                }
            }
            var ee = O(7444),
                Q = O(7574);

            function U(g, d, c, y, D = new re(g, c, y)) {
                if (!D.closed) return d instanceof Q.y ? d.subscribe(D) : (0, ee.s)(d)(D)
            }
            var z = O(6693);
            const te = {};
            class Ae {
                constructor(d) {
                    this.resultSelector = d
                }
                call(d, c) {
                    return c.subscribe(new De(d, this.resultSelector))
                }
            }
            class De extends Y {
                constructor(d, c) {
                    super(d), this.resultSelector = c, this.active = 0, this.values = [], this.observables = []
                }
                _next(d) {
                    this.values.push(te), this.observables.push(d)
                }
                _complete() {
                    const d = this.observables,
                        c = d.length;
                    if (0 === c) this.destination.complete();
                    else {
                        this.active = c, this.toRespond = c;
                        for (let y = 0; y < c; y++) this.add(U(this, d[y], void 0, y))
                    }
                }
                notifyComplete(d) {
                    0 == (this.active -= 1) && this.destination.complete()
                }
                notifyNext(d, c, y) {
                    const D = this.values,
                        x = this.toRespond ? D[y] === te ? --this.toRespond : this.toRespond : 0;
                    D[y] = c, 0 === x && (this.resultSelector ? this._tryResultSelector(D) : this.destination.next(D.slice()))
                }
                _tryResultSelector(d) {
                    let c;
                    try {
                        c = this.resultSelector.apply(this, d)
                    } catch (y) {
                        return void this.destination.error(y)
                    }
                    this.destination.next(c)
                }
            }
            const ue = (() => {
                function g() {
                    return Error.call(this), this.message = "no elements in sequence", this.name = "EmptyError", this
                }
                return g.prototype = Object.create(Error.prototype), g
            })();
            var Be = O(4402),
                me = O(5917),
                rt = O(6215),
                on = O(8071),
                Jt = O(1439),
                xe = O(9193),
                xt = O(2441),
                wt = O(9765);

            function ce(g, d) {
                let c = !1;
                return arguments.length >= 2 && (c = !0),
                    function(D) {
                        return D.lift(new Me(g, d, c))
                    }
            }
            class Me {
                constructor(d, c, y = !1) {
                    this.accumulator = d, this.seed = c, this.hasSeed = y
                }
                call(d, c) {
                    return c.subscribe(new ke(d, this.accumulator, this.seed, this.hasSeed))
                }
            }
            class ke extends Z.L {
                constructor(d, c, y, D) {
                    super(d), this.accumulator = c, this._seed = y, this.hasSeed = D, this.index = 0
                }
                get seed() {
                    return this._seed
                }
                set seed(d) {
                    this.hasSeed = !0, this._seed = d
                }
                _next(d) {
                    if (this.hasSeed) return this._tryNext(d);
                    this.seed = d, this.destination.next(d)
                }
                _tryNext(d) {
                    const c = this.index++;
                    let y;
                    try {
                        y = this.accumulator(this.seed, d, c)
                    } catch (D) {
                        this.destination.error(D)
                    }
                    this.seed = y, this.destination.next(y)
                }
            }
            var Ve = O(5345);

            function Le(g) {
                return function(c) {
                    const y = new st(g),
                        D = c.lift(y);
                    return y.caught = D
                }
            }
            class st {
                constructor(d) {
                    this.selector = d
                }
                call(d, c) {
                    return c.subscribe(new Ne(d, this.selector, this.caught))
                }
            }
            class Ne extends Ve.Ds {
                constructor(d, c, y) {
                    super(d), this.selector = c, this.caught = y
                }
                error(d) {
                    if (!this.isStopped) {
                        let c;
                        try {
                            c = this.selector(d, this.caught)
                        } catch (S) {
                            return void super.error(S)
                        }
                        this._unsubscribeAndRecycle();
                        const y = new Ve.IY(this);
                        this.add(y);
                        const D = (0, Ve.ft)(c, y);
                        D !== y && this.add(D)
                    }
                }
            }
            var Ut = O(5435),
                er = O(7108);

            function Tr(g) {
                return function(c) {
                    return 0 === g ? (0, xe.c)() : c.lift(new us(g))
                }
            }
            class us {
                constructor(d) {
                    if (this.total = d, this.total < 0) throw new er.W
                }
                call(d, c) {
                    return c.subscribe(new di(d, this.total))
                }
            }
            class di extends Z.L {
                constructor(d, c) {
                    super(d), this.total = c, this.ring = new Array, this.count = 0
                }
                _next(d) {
                    const c = this.ring,
                        y = this.total,
                        D = this.count++;
                    c.length < y ? c.push(d) : c[D % y] = d
                }
                _complete() {
                    const d = this.destination;
                    let c = this.count;
                    if (c > 0) {
                        const y = this.count >= this.total ? this.total : this.count,
                            D = this.ring;
                        for (let S = 0; S < y; S++) {
                            const x = c++ % y;
                            d.next(D[x])
                        }
                    }
                    d.complete()
                }
            }

            function Vr(g = k) {
                return d => d.lift(new Ee(g))
            }
            class Ee {
                constructor(d) {
                    this.errorFactory = d
                }
                call(d, c) {
                    return c.subscribe(new it(d, this.errorFactory))
                }
            }
            class it extends Z.L {
                constructor(d, c) {
                    super(d), this.errorFactory = c, this.hasValue = !1
                }
                _next(d) {
                    this.hasValue = !0, this.destination.next(d)
                }
                _complete() {
                    if (this.hasValue) return this.destination.complete(); {
                        let d;
                        try {
                            d = this.errorFactory()
                        } catch (c) {
                            d = c
                        }
                        this.destination.error(d)
                    }
                }
            }

            function k() {
                return new ue
            }

            function X(g = null) {
                return d => d.lift(new de(g))
            }
            class de {
                constructor(d) {
                    this.defaultValue = d
                }
                call(d, c) {
                    return c.subscribe(new Te(d, this.defaultValue))
                }
            }
            class Te extends Z.L {
                constructor(d, c) {
                    super(d), this.defaultValue = c, this.isEmpty = !0
                }
                _next(d) {
                    this.isEmpty = !1, this.destination.next(d)
                }
                _complete() {
                    this.isEmpty && this.destination.next(this.defaultValue), this.destination.complete()
                }
            }
            var je = O(4487),
                pt = O(5257);

            function Wt(g, d) {
                const c = arguments.length >= 2;
                return y => y.pipe(g ? (0, Ut.h)((D, S) => g(D, S, y)) : je.y, (0, pt.q)(1), c ? X(d) : Vr(() => new ue))
            }

            function Gt() {}
            var cn = O(9105);

            function Kt(g, d, c) {
                return function(D) {
                    return D.lift(new Ui(g, d, c))
                }
            }
            class Ui {
                constructor(d, c, y) {
                    this.nextOrObserver = d, this.error = c, this.complete = y
                }
                call(d, c) {
                    return c.subscribe(new Hi(d, this.nextOrObserver, this.error, this.complete))
                }
            }
            class Hi extends Z.L {
                constructor(d, c, y, D) {
                    super(d), this._tapNext = Gt, this._tapError = Gt, this._tapComplete = Gt, this._tapError = y || Gt, this._tapComplete = D || Gt, (0, cn.m)(c) ? (this._context = this, this._tapNext = c) : c && (this._context = c, this._tapNext = c.next || Gt, this._tapError = c.error || Gt, this._tapComplete = c.complete || Gt)
                }
                _next(d) {
                    try {
                        this._tapNext.call(this._context, d)
                    } catch (c) {
                        return void this.destination.error(c)
                    }
                    this.destination.next(d)
                }
                _error(d) {
                    try {
                        this._tapError.call(this._context, d)
                    } catch (c) {
                        return void this.destination.error(c)
                    }
                    this.destination.error(d)
                }
                _complete() {
                    try {
                        this._tapComplete.call(this._context)
                    } catch (d) {
                        return void this.destination.error(d)
                    }
                    return this.destination.complete()
                }
            }
            var fi = O(5319);
            class Sr {
                constructor(d) {
                    this.callback = d
                }
                call(d, c) {
                    return c.subscribe(new hi(d, this.callback))
                }
            }
            class hi extends Z.L {
                constructor(d, c) {
                    super(d), this.add(new fi.w(c))
                }
            }
            var ne = O(8002),
                N = O(3190),
                H = O(9761),
                ye = O(4612),
                le = O(9773),
                Pe = O(1307),
                be = O(3282);
            class we {
                constructor(d, c) {
                    this.id = d, this.url = c
                }
            }
            class Ke extends we {
                constructor(d, c, y = "imperative", D = null) {
                    super(d, c), this.navigationTrigger = y, this.restoredState = D
                }
                toString() {
                    return `NavigationStart(id: ${this.id}, url: '${this.url}')`
                }
            }
            class Vt extends we {
                constructor(d, c, y) {
                    super(d, c), this.urlAfterRedirects = y
                }
                toString() {
                    return `NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`
                }
            }
            class dn extends we {
                constructor(d, c, y) {
                    super(d, c), this.reason = y
                }
                toString() {
                    return `NavigationCancel(id: ${this.id}, url: '${this.url}')`
                }
            }
            class Pt extends we {
                constructor(d, c, y) {
                    super(d, c), this.error = y
                }
                toString() {
                    return `NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`
                }
            }
            class Xt extends we {
                constructor(d, c, y, D) {
                    super(d, c), this.urlAfterRedirects = y, this.state = D
                }
                toString() {
                    return `RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`
                }
            }
            class yt extends we {
                constructor(d, c, y, D) {
                    super(d, c), this.urlAfterRedirects = y, this.state = D
                }
                toString() {
                    return `GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`
                }
            }
            class ot extends we {
                constructor(d, c, y, D, S) {
                    super(d, c), this.urlAfterRedirects = y, this.state = D, this.shouldActivate = S
                }
                toString() {
                    return `GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`
                }
            }
            class Ar extends we {
                constructor(d, c, y, D) {
                    super(d, c), this.urlAfterRedirects = y, this.state = D
                }
                toString() {
                    return `ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`
                }
            }
            class Ue extends we {
                constructor(d, c, y, D) {
                    super(d, c), this.urlAfterRedirects = y, this.state = D
                }
                toString() {
                    return `ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`
                }
            }
            class fn {
                constructor(d) {
                    this.route = d
                }
                toString() {
                    return `RouteConfigLoadStart(path: ${this.route.path})`
                }
            }
            class tr {
                constructor(d) {
                    this.route = d
                }
                toString() {
                    return `RouteConfigLoadEnd(path: ${this.route.path})`
                }
            }
            class mr {
                constructor(d) {
                    this.snapshot = d
                }
                toString() {
                    return `ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`
                }
            }
            class _t {
                constructor(d) {
                    this.snapshot = d
                }
                toString() {
                    return `ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`
                }
            }
            class js {
                constructor(d) {
                    this.snapshot = d
                }
                toString() {
                    return `ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`
                }
            }
            class Bs {
                constructor(d) {
                    this.snapshot = d
                }
                toString() {
                    return `ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`
                }
            }
            class jr {
                constructor(d, c, y) {
                    this.routerEvent = d, this.position = c, this.anchor = y
                }
                toString() {
                    return `Scroll(anchor: '${this.anchor}', position: '${this.position?`${this.position[0]}, ${this.position[1]}`:null}')`
                }
            }
            const at = "primary";
            class $i {
                constructor(d) {
                    this.params = d || {}
                }
                has(d) {
                    return Object.prototype.hasOwnProperty.call(this.params, d)
                }
                get(d) {
                    if (this.has(d)) {
                        const c = this.params[d];
                        return Array.isArray(c) ? c[0] : c
                    }
                    return null
                }
                getAll(d) {
                    if (this.has(d)) {
                        const c = this.params[d];
                        return Array.isArray(c) ? c : [c]
                    }
                    return []
                }
                get keys() {
                    return Object.keys(this.params)
                }
            }

            function Dn(g) {
                return new $i(g)
            }
            const Mr = "ngNavigationCancelingError";

            function pi(g) {
                const d = Error("NavigationCancelingError: " + g);
                return d[Mr] = !0, d
            }

            function Ao(g, d, c) {
                const y = c.path.split("/");
                if (y.length > g.length || "full" === c.pathMatch && (d.hasChildren() || y.length < g.length)) return null;
                const D = {};
                for (let S = 0; S < y.length; S++) {
                    const x = y[S],
                        j = g[S];
                    if (x.startsWith(":")) D[x.substring(1)] = j;
                    else if (x !== j.path) return null
                }
                return {
                    consumed: g.slice(0, y.length),
                    posParams: D
                }
            }

            function Gn(g, d) {
                const c = g ? Object.keys(g) : void 0,
                    y = d ? Object.keys(d) : void 0;
                if (!c || !y || c.length != y.length) return !1;
                let D;
                for (let S = 0; S < c.length; S++)
                    if (D = c[S], !Gi(g[D], d[D])) return !1;
                return !0
            }

            function Gi(g, d) {
                if (Array.isArray(g) && Array.isArray(d)) {
                    if (g.length !== d.length) return !1;
                    const c = [...g].sort(),
                        y = [...d].sort();
                    return c.every((D, S) => y[S] === D)
                }
                return g === d
            }

            function ds(g) {
                return Array.prototype.concat.apply([], g)
            }

            function Mn(g) {
                return g.length > 0 ? g[g.length - 1] : null
            }

            function en(g, d) {
                for (const c in g) g.hasOwnProperty(c) && d(g[c], c)
            }

            function In(g) {
                return (0, m.CqO)(g) ? g : (0, m.QGY)(g) ? (0, Be.D)(Promise.resolve(g)) : (0, me.of)(g)
            }
            const yr = {
                    exact: function kn(g, d, c) {
                        if (!Wn(g.segments, d.segments) || !yn(g.segments, d.segments, c) || g.numberOfChildren !== d.numberOfChildren) return !1;
                        for (const y in d.children)
                            if (!g.children[y] || !kn(g.children[y], d.children[y], c)) return !1;
                        return !0
                    },
                    subset: lt
                },
                Ir = {
                    exact: function(g, d) {
                        return Gn(g, d)
                    },
                    subset: function(g, d) {
                        return Object.keys(d).length <= Object.keys(g).length && Object.keys(d).every(c => Gi(g[c], d[c]))
                    },
                    ignored: () => !0
                };

            function bn(g, d, c) {
                return yr[c.paths](g.root, d.root, c.matrixParams) && Ir[c.queryParams](g.queryParams, d.queryParams) && !("exact" === c.fragment && g.fragment !== d.fragment)
            }

            function lt(g, d, c) {
                return Nt(g, d, d.segments, c)
            }

            function Nt(g, d, c, y) {
                if (g.segments.length > c.length) {
                    const D = g.segments.slice(0, c.length);
                    return !(!Wn(D, c) || d.hasChildren() || !yn(D, c, y))
                }
                if (g.segments.length === c.length) {
                    if (!Wn(g.segments, c) || !yn(g.segments, c, y)) return !1;
                    for (const D in d.children)
                        if (!g.children[D] || !lt(g.children[D], d.children[D], y)) return !1;
                    return !0
                } {
                    const D = c.slice(0, g.segments.length),
                        S = c.slice(g.segments.length);
                    return !!(Wn(g.segments, D) && yn(g.segments, D, y) && g.children[at]) && Nt(g.children[at], d, S, y)
                }
            }

            function yn(g, d, c) {
                return d.every((y, D) => Ir[c](g[D].parameters, y.parameters))
            }
            class Pn {
                constructor(d, c, y) {
                    this.root = d, this.queryParams = c, this.fragment = y
                }
                get queryParamMap() {
                    return this._queryParamMap || (this._queryParamMap = Dn(this.queryParams)), this._queryParamMap
                }
                toString() {
                    return wn.serialize(this)
                }
            }
            class He {
                constructor(d, c) {
                    this.segments = d, this.children = c, this.parent = null, en(c, (y, D) => y.parent = this)
                }
                hasChildren() {
                    return this.numberOfChildren > 0
                }
                get numberOfChildren() {
                    return Object.keys(this.children).length
                }
                toString() {
                    return Ur(this)
                }
            }
            class Ft {
                constructor(d, c) {
                    this.path = d, this.parameters = c
                }
                get parameterMap() {
                    return this._parameterMap || (this._parameterMap = Dn(this.parameters)), this._parameterMap
                }
                toString() {
                    return gi(this)
                }
            }

            function Wn(g, d) {
                return g.length === d.length && g.every((c, y) => c.path === d[y].path)
            }
            class tt {}
            class Br {
                parse(d) {
                    const c = new St(d);
                    return new Pn(c.parseRootSegment(), c.parseQueryParams(), c.parseFragment())
                }
                serialize(d) {
                    var g;
                    return `${`/${Kn(d.root,!0)}`}${function(g){const d=Object.keys(g).map(c=>{const y=g[c];return Array.isArray(y)?y.map(D=>`${ar(c)}=${ar(D)}`).join("&"):`${ar(c)}=${ar(y)}`}).filter(c=>!!c);return d.length?` ? $ {
                        d.join("&")
                    }
                    `:""}(d.queryParams)}${"string"==typeof d.fragment?`#${g=d.fragment,encodeURI(g)}`:""}`
                }
            }
            const wn = new Br;

            function Ur(g) {
                return g.segments.map(d => gi(d)).join("/")
            }

            function Kn(g, d) {
                if (!g.hasChildren()) return Ur(g);
                if (d) {
                    const c = g.children[at] ? Kn(g.children[at], !1) : "",
                        y = [];
                    return en(g.children, (D, S) => {
                        S !== at && y.push(`${S}:${Kn(D,!1)}`)
                    }), y.length > 0 ? `${c}(${y.join("//")})` : c
                } {
                    const c = function(g, d) {
                        let c = [];
                        return en(g.children, (y, D) => {
                            D === at && (c = c.concat(d(y, D)))
                        }), en(g.children, (y, D) => {
                            D !== at && (c = c.concat(d(y, D)))
                        }), c
                    }(g, (y, D) => D === at ? [Kn(g.children[at], !1)] : [`${D}:${Kn(y,!1)}`]);
                    return 1 === Object.keys(g.children).length && null != g.children[at] ? `${Ur(g)}/${c[0]}` : `${Ur(g)}/(${c.join("//")})`
                }
            }

            function _n(g) {
                return encodeURIComponent(g).replace(/%40/g, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",")
            }

            function ar(g) {
                return _n(g).replace(/%3B/gi, ";")
            }

            function Tn(g) {
                return _n(g).replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/%26/gi, "&")
            }

            function Tt(g) {
                return decodeURIComponent(g)
            }

            function ps(g) {
                return Tt(g.replace(/\+/g, "%20"))
            }

            function gi(g) {
                return `${Tn(g.path)}${function(g){return Object.keys(g).map(d=>`;${Tn(d)}=${Tn(g[d])}`).join("")}(g.parameters)}`
            }
            const yi = /^[^\/()?;=#]+/;

            function Pr(g) {
                const d = g.match(yi);
                return d ? d[0] : ""
            }
            const _r = /^[^=?&#]+/,
                Ki = /^[^?&#]+/;
            class St {
                constructor(d) {
                    this.url = d, this.remaining = d
                }
                parseRootSegment() {
                    return this.consumeOptional("/"), "" === this.remaining || this.peekStartsWith("?") || this.peekStartsWith("#") ? new He([], {}) : new He([], this.parseChildren())
                }
                parseQueryParams() {
                    const d = {};
                    if (this.consumeOptional("?"))
                        do {
                            this.parseQueryParam(d)
                        } while (this.consumeOptional("&"));
                    return d
                }
                parseFragment() {
                    return this.consumeOptional("#") ? decodeURIComponent(this.remaining) : null
                }
                parseChildren() {
                    if ("" === this.remaining) return {};
                    this.consumeOptional("/");
                    const d = [];
                    for (this.peekStartsWith("(") || d.push(this.parseSegment()); this.peekStartsWith("/") && !this.peekStartsWith("//") && !this.peekStartsWith("/(");) this.capture("/"), d.push(this.parseSegment());
                    let c = {};
                    this.peekStartsWith("/(") && (this.capture("/"), c = this.parseParens(!0));
                    let y = {};
                    return this.peekStartsWith("(") && (y = this.parseParens(!1)), (d.length > 0 || Object.keys(c).length > 0) && (y[at] = new He(d, c)), y
                }
                parseSegment() {
                    const d = Pr(this.remaining);
                    if ("" === d && this.peekStartsWith(";")) throw new Error(`Empty path url segment cannot have parameters: '${this.remaining}'.`);
                    return this.capture(d), new Ft(Tt(d), this.parseMatrixParams())
                }
                parseMatrixParams() {
                    const d = {};
                    for (; this.consumeOptional(";");) this.parseParam(d);
                    return d
                }
                parseParam(d) {
                    const c = Pr(this.remaining);
                    if (!c) return;
                    this.capture(c);
                    let y = "";
                    if (this.consumeOptional("=")) {
                        const D = Pr(this.remaining);
                        D && (y = D, this.capture(y))
                    }
                    d[Tt(c)] = Tt(y)
                }
                parseQueryParam(d) {
                    const c = function(g) {
                        const d = g.match(_r);
                        return d ? d[0] : ""
                    }(this.remaining);
                    if (!c) return;
                    this.capture(c);
                    let y = "";
                    if (this.consumeOptional("=")) {
                        const x = function(g) {
                            const d = g.match(Ki);
                            return d ? d[0] : ""
                        }(this.remaining);
                        x && (y = x, this.capture(y))
                    }
                    const D = ps(c),
                        S = ps(y);
                    if (d.hasOwnProperty(D)) {
                        let x = d[D];
                        Array.isArray(x) || (x = [x], d[D] = x), x.push(S)
                    } else d[D] = S
                }
                parseParens(d) {
                    const c = {};
                    for (this.capture("("); !this.consumeOptional(")") && this.remaining.length > 0;) {
                        const y = Pr(this.remaining),
                            D = this.remaining[y.length];
                        if ("/" !== D && ")" !== D && ";" !== D) throw new Error(`Cannot parse url '${this.url}'`);
                        let S;
                        y.indexOf(":") > -1 ? (S = y.substr(0, y.indexOf(":")), this.capture(S), this.capture(":")) : d && (S = at);
                        const x = this.parseChildren();
                        c[S] = 1 === Object.keys(x).length ? x[at] : new He([], x), this.consumeOptional("//")
                    }
                    return c
                }
                peekStartsWith(d) {
                    return this.remaining.startsWith(d)
                }
                consumeOptional(d) {
                    return !!this.peekStartsWith(d) && (this.remaining = this.remaining.substring(d.length), !0)
                }
                capture(d) {
                    if (!this.consumeOptional(d)) throw new Error(`Expected "${d}".`)
                }
            }
            class Hr {
                constructor(d) {
                    this._root = d
                }
                get root() {
                    return this._root.value
                }
                parent(d) {
                    const c = this.pathFromRoot(d);
                    return c.length > 1 ? c[c.length - 2] : null
                }
                children(d) {
                    const c = $r(d, this._root);
                    return c ? c.children.map(y => y.value) : []
                }
                firstChild(d) {
                    const c = $r(d, this._root);
                    return c && c.children.length > 0 ? c.children[0].value : null
                }
                siblings(d) {
                    const c = zr(d, this._root);
                    return c.length < 2 ? [] : c[c.length - 2].children.map(D => D.value).filter(D => D !== d)
                }
                pathFromRoot(d) {
                    return zr(d, this._root).map(c => c.value)
                }
            }

            function $r(g, d) {
                if (g === d.value) return d;
                for (const c of d.children) {
                    const y = $r(g, c);
                    if (y) return y
                }
                return null
            }

            function zr(g, d) {
                if (g === d.value) return [d];
                for (const c of d.children) {
                    const y = zr(g, c);
                    if (y.length) return y.unshift(d), y
                }
                return []
            }
            class qt {
                constructor(d, c) {
                    this.value = d, this.children = c
                }
                toString() {
                    return `TreeNode(${this.value})`
                }
            }

            function gs(g) {
                const d = {};
                return g && g.children.forEach(c => d[c.value.outlet] = c), d
            }
            class Io extends Hr {
                constructor(d, c) {
                    super(d), this.snapshot = c, Ei(this, d)
                }
                toString() {
                    return this.snapshot.toString()
                }
            }

            function Yi(g, d) {
                const c = function(g, d) {
                        const x = new ms([], {}, {}, "", {}, at, d, null, g.root, -1, {});
                        return new Er("", new qt(x, []))
                    }(g, d),
                    y = new rt.X([new Ft("", {})]),
                    D = new rt.X({}),
                    S = new rt.X({}),
                    x = new rt.X({}),
                    j = new rt.X(""),
                    se = new Gr(y, D, x, j, S, at, d, c.root);
                return se.snapshot = c.root, new Io(new qt(se, []), c)
            }
            class Gr {
                constructor(d, c, y, D, S, x, j, se) {
                    this.url = d, this.params = c, this.queryParams = y, this.fragment = D, this.data = S, this.outlet = x, this.component = j, this._futureSnapshot = se
                }
                get routeConfig() {
                    return this._futureSnapshot.routeConfig
                }
                get root() {
                    return this._routerState.root
                }
                get parent() {
                    return this._routerState.parent(this)
                }
                get firstChild() {
                    return this._routerState.firstChild(this)
                }
                get children() {
                    return this._routerState.children(this)
                }
                get pathFromRoot() {
                    return this._routerState.pathFromRoot(this)
                }
                get paramMap() {
                    return this._paramMap || (this._paramMap = this.params.pipe((0, ne.U)(d => Dn(d)))), this._paramMap
                }
                get queryParamMap() {
                    return this._queryParamMap || (this._queryParamMap = this.queryParams.pipe((0, ne.U)(d => Dn(d)))), this._queryParamMap
                }
                toString() {
                    return this.snapshot ? this.snapshot.toString() : `Future(${this._futureSnapshot})`
                }
            }

            function Po(g, d = "emptyOnly") {
                const c = g.pathFromRoot;
                let y = 0;
                if ("always" !== d)
                    for (y = c.length - 1; y >= 1;) {
                        const D = c[y],
                            S = c[y - 1];
                        if (D.routeConfig && "" === D.routeConfig.path) y--;
                        else {
                            if (S.component) break;
                            y--
                        }
                    }
                return function(g) {
                    return g.reduce((d, c) => ({
                        params: Object.assign(Object.assign({}, d.params), c.params),
                        data: Object.assign(Object.assign({}, d.data), c.data),
                        resolve: Object.assign(Object.assign({}, d.resolve), c._resolvedData)
                    }), {
                        params: {},
                        data: {},
                        resolve: {}
                    })
                }(c.slice(y))
            }
            class ms {
                constructor(d, c, y, D, S, x, j, se, Oe, Ct, Ye) {
                    this.url = d, this.params = c, this.queryParams = y, this.fragment = D, this.data = S, this.outlet = x, this.component = j, this.routeConfig = se, this._urlSegment = Oe, this._lastPathIndex = Ct, this._resolve = Ye
                }
                get root() {
                    return this._routerState.root
                }
                get parent() {
                    return this._routerState.parent(this)
                }
                get firstChild() {
                    return this._routerState.firstChild(this)
                }
                get children() {
                    return this._routerState.children(this)
                }
                get pathFromRoot() {
                    return this._routerState.pathFromRoot(this)
                }
                get paramMap() {
                    return this._paramMap || (this._paramMap = Dn(this.params)), this._paramMap
                }
                get queryParamMap() {
                    return this._queryParamMap || (this._queryParamMap = Dn(this.queryParams)), this._queryParamMap
                }
                toString() {
                    return `Route(url:'${this.url.map(y=>y.toString()).join("/")}', path:'${this.routeConfig?this.routeConfig.path:""}')`
                }
            }
            class Er extends Hr {
                constructor(d, c) {
                    super(c), this.url = d, Ei(this, c)
                }
                toString() {
                    return Ci(this._root)
                }
            }

            function Ei(g, d) {
                d.value._routerState = g, d.children.forEach(c => Ei(g, c))
            }

            function Ci(g) {
                const d = g.children.length > 0 ? ` { ${g.children.map(Ci).join(", ")} } ` : "";
                return `${g.value}${d}`
            }

            function Us(g) {
                if (g.snapshot) {
                    const d = g.snapshot,
                        c = g._futureSnapshot;
                    g.snapshot = c, Gn(d.queryParams, c.queryParams) || g.queryParams.next(c.queryParams), d.fragment !== c.fragment && g.fragment.next(c.fragment), Gn(d.params, c.params) || g.params.next(c.params),
                        function(g, d) {
                            if (g.length !== d.length) return !1;
                            for (let c = 0; c < g.length; ++c)
                                if (!Gn(g[c], d[c])) return !1;
                            return !0
                        }(d.url, c.url) || g.url.next(c.url), Gn(d.data, c.data) || g.data.next(c.data)
                } else g.snapshot = g._futureSnapshot, g.data.next(g._futureSnapshot.data)
            }

            function ys(g, d) {
                return Gn(g.params, d.params) && function(g, d) {
                    return Wn(g, d) && g.every((c, y) => Gn(c.parameters, d[y].parameters))
                }(g.url, d.url) && !(!g.parent != !d.parent) && (!g.parent || ys(g.parent, d.parent))
            }

            function Hs(g, d, c) {
                if (c && g.shouldReuseRoute(d.value, c.value.snapshot)) {
                    const y = c.value;
                    y._futureSnapshot = d.value;
                    const D = function(g, d, c) {
                        return d.children.map(y => {
                            for (const D of c.children)
                                if (g.shouldReuseRoute(y.value, D.value.snapshot)) return Hs(g, y, D);
                            return Hs(g, y)
                        })
                    }(g, d, c);
                    return new qt(y, D)
                } {
                    if (g.shouldAttach(d.value)) {
                        const S = g.retrieve(d.value);
                        if (null !== S) {
                            const x = S.route;
                            return vi(d, x), x
                        }
                    }
                    const y = function(g) {
                            return new Gr(new rt.X(g.url), new rt.X(g.params), new rt.X(g.queryParams), new rt.X(g.fragment), new rt.X(g.data), g.outlet, g.component, g)
                        }(d.value),
                        D = d.children.map(S => Hs(g, S));
                    return new qt(y, D)
                }
            }

            function vi(g, d) {
                if (g.value.routeConfig !== d.value.routeConfig) throw new Error("Cannot reattach ActivatedRouteSnapshot created from a different route");
                if (g.children.length !== d.children.length) throw new Error("Cannot reattach ActivatedRouteSnapshot with a different number of children");
                d.value._futureSnapshot = g.value;
                for (let c = 0; c < g.children.length; ++c) vi(g.children[c], d.children[c])
            }

            function Wr(g) {
                return "object" == typeof g && null != g && !g.outlets && !g.segmentPath
            }

            function Di(g) {
                return "object" == typeof g && null != g && g.outlets
            }

            function zs(g, d, c, y, D) {
                let S = {};
                return y && en(y, (x, j) => {
                    S[j] = Array.isArray(x) ? x.map(se => `${se}`) : `${x}`
                }), new Pn(c.root === g ? d : No(c.root, g, d), S, D)
            }

            function No(g, d, c) {
                const y = {};
                return en(g.children, (D, S) => {
                    y[S] = D === d ? c : No(D, d, c)
                }), new He(g.segments, y)
            }
            class Sn {
                constructor(d, c, y) {
                    if (this.isAbsolute = d, this.numberOfDoubleDots = c, this.commands = y, d && y.length > 0 && Wr(y[0])) throw new Error("Root segment cannot have matrix parameters");
                    const D = y.find(Di);
                    if (D && D !== Mn(y)) throw new Error("{outlets:{}} has to be the last command")
                }
                toRoot() {
                    return this.isAbsolute && 1 === this.commands.length && "/" == this.commands[0]
                }
            }
            class Kr {
                constructor(d, c, y) {
                    this.segmentGroup = d, this.processChildren = c, this.index = y
                }
            }

            function Gs(g, d, c) {
                if (g || (g = new He([], {})), 0 === g.segments.length && g.hasChildren()) return Yr(g, d, c);
                const y = function(g, d, c) {
                        let y = 0,
                            D = d;
                        const S = {
                            match: !1,
                            pathIndex: 0,
                            commandIndex: 0
                        };
                        for (; D < g.segments.length;) {
                            if (y >= c.length) return S;
                            const x = g.segments[D],
                                j = c[y];
                            if (Di(j)) break;
                            const se = `${j}`,
                                Oe = y < c.length - 1 ? c[y + 1] : null;
                            if (D > 0 && void 0 === se) break;
                            if (se && Oe && "object" == typeof Oe && void 0 === Oe.outlets) {
                                if (!wi(se, Oe, x)) return S;
                                y += 2
                            } else {
                                if (!wi(se, {}, x)) return S;
                                y++
                            }
                            D++
                        }
                        return {
                            match: !0,
                            pathIndex: D,
                            commandIndex: y
                        }
                    }(g, d, c),
                    D = c.slice(y.commandIndex);
                if (y.match && y.pathIndex < g.segments.length) {
                    const S = new He(g.segments.slice(0, y.pathIndex), {});
                    return S.children[at] = new He(g.segments.slice(y.pathIndex), g.children), Yr(S, 0, D)
                }
                return y.match && 0 === D.length ? new He(g.segments, {}) : y.match && !g.hasChildren() ? Cr(g, d, c) : y.match ? Yr(g, 0, D) : Cr(g, d, c)
            }

            function Yr(g, d, c) {
                if (0 === c.length) return new He(g.segments, {}); {
                    const y = function(g) {
                            return Di(g[0]) ? g[0].outlets : {
                                [at]: g
                            }
                        }(c),
                        D = {};
                    return en(y, (S, x) => {
                        "string" == typeof S && (S = [S]), null !== S && (D[x] = Gs(g.children[x], d, S))
                    }), en(g.children, (S, x) => {
                        void 0 === y[x] && (D[x] = S)
                    }), new He(g.segments, D)
                }
            }

            function Cr(g, d, c) {
                const y = g.segments.slice(0, d);
                let D = 0;
                for (; D < c.length;) {
                    const S = c[D];
                    if (Di(S)) {
                        const se = Fo(S.outlets);
                        return new He(y, se)
                    }
                    if (0 === D && Wr(c[0])) {
                        y.push(new Ft(g.segments[d].path, On(c[0]))), D++;
                        continue
                    }
                    const x = Di(S) ? S.outlets[at] : `${S}`,
                        j = D < c.length - 1 ? c[D + 1] : null;
                    x && j && Wr(j) ? (y.push(new Ft(x, On(j))), D += 2) : (y.push(new Ft(x, {})), D++)
                }
                return new He(y, {})
            }

            function Fo(g) {
                const d = {};
                return en(g, (c, y) => {
                    "string" == typeof c && (c = [c]), null !== c && (d[y] = Cr(new He([], {}), 0, c))
                }), d
            }

            function On(g) {
                const d = {};
                return en(g, (c, y) => d[y] = `${c}`), d
            }

            function wi(g, d, c) {
                return g == c.path && Gn(d, c.parameters)
            }
            class T {
                constructor(d, c, y, D) {
                    this.routeReuseStrategy = d, this.futureState = c, this.currState = y, this.forwardEvent = D
                }
                activate(d) {
                    const c = this.futureState._root,
                        y = this.currState ? this.currState._root : null;
                    this.deactivateChildRoutes(c, y, d), Us(this.futureState.root), this.activateChildRoutes(c, y, d)
                }
                deactivateChildRoutes(d, c, y) {
                    const D = gs(c);
                    d.children.forEach(S => {
                        const x = S.value.outlet;
                        this.deactivateRoutes(S, D[x], y), delete D[x]
                    }), en(D, (S, x) => {
                        this.deactivateRouteAndItsChildren(S, y)
                    })
                }
                deactivateRoutes(d, c, y) {
                    const D = d.value,
                        S = c ? c.value : null;
                    if (D === S)
                        if (D.component) {
                            const x = y.getContext(D.outlet);
                            x && this.deactivateChildRoutes(d, c, x.children)
                        } else this.deactivateChildRoutes(d, c, y);
                    else S && this.deactivateRouteAndItsChildren(c, y)
                }
                deactivateRouteAndItsChildren(d, c) {
                    this.routeReuseStrategy.shouldDetach(d.value.snapshot) ? this.detachAndStoreRouteSubtree(d, c) : this.deactivateRouteAndOutlet(d, c)
                }
                detachAndStoreRouteSubtree(d, c) {
                    const y = c.getContext(d.value.outlet);
                    if (y && y.outlet) {
                        const D = y.outlet.detach(),
                            S = y.children.onOutletDeactivated();
                        this.routeReuseStrategy.store(d.value.snapshot, {
                            componentRef: D,
                            route: d,
                            contexts: S
                        })
                    }
                }
                deactivateRouteAndOutlet(d, c) {
                    const y = c.getContext(d.value.outlet),
                        D = y && d.value.component ? y.children : c,
                        S = gs(d);
                    for (const x of Object.keys(S)) this.deactivateRouteAndItsChildren(S[x], D);
                    y && y.outlet && (y.outlet.deactivate(), y.children.onOutletDeactivated(), y.attachRef = null, y.resolver = null, y.route = null)
                }
                activateChildRoutes(d, c, y) {
                    const D = gs(c);
                    d.children.forEach(S => {
                        this.activateRoutes(S, D[S.value.outlet], y), this.forwardEvent(new Bs(S.value.snapshot))
                    }), d.children.length && this.forwardEvent(new _t(d.value.snapshot))
                }
                activateRoutes(d, c, y) {
                    const D = d.value,
                        S = c ? c.value : null;
                    if (Us(D), D === S)
                        if (D.component) {
                            const x = y.getOrCreateContext(D.outlet);
                            this.activateChildRoutes(d, c, x.children)
                        } else this.activateChildRoutes(d, c, y);
                    else if (D.component) {
                        const x = y.getOrCreateContext(D.outlet);
                        if (this.routeReuseStrategy.shouldAttach(D.snapshot)) {
                            const j = this.routeReuseStrategy.retrieve(D.snapshot);
                            this.routeReuseStrategy.store(D.snapshot, null), x.children.onOutletReAttached(j.contexts), x.attachRef = j.componentRef, x.route = j.route.value, x.outlet && x.outlet.attach(j.componentRef, j.route.value), v(j.route)
                        } else {
                            const j = function(g) {
                                    for (let d = g.parent; d; d = d.parent) {
                                        const c = d.routeConfig;
                                        if (c && c._loadedConfig) return c._loadedConfig;
                                        if (c && c.component) return null
                                    }
                                    return null
                                }(D.snapshot),
                                se = j ? j.module.componentFactoryResolver : null;
                            x.attachRef = null, x.route = D, x.resolver = se, x.outlet && x.outlet.activateWith(D, se), this.activateChildRoutes(d, null, x.children)
                        }
                    } else this.activateChildRoutes(d, null, y)
                }
            }

            function v(g) {
                Us(g.value), g.children.forEach(v)
            }
            class V {
                constructor(d, c) {
                    this.routes = d, this.module = c
                }
            }

            function K(g) {
                return "function" == typeof g
            }

            function Re(g) {
                return g instanceof Pn
            }
            const Mt = Symbol("INITIAL_VALUE");

            function dt() {
                return (0, N.w)(g => function(...g) {
                    let d, c;
                    return (0, he.K)(g[g.length - 1]) && (c = g.pop()), "function" == typeof g[g.length - 1] && (d = g.pop()), 1 === g.length && (0, oe.k)(g[0]) && (g = g[0]), (0, z.n)(g, c).lift(new Ae(d))
                }(g.map(d => d.pipe((0, pt.q)(1), (0, H.O)(Mt)))).pipe(ce((d, c) => {
                    let y = !1;
                    return c.reduce((D, S, x) => D !== Mt ? D : (S === Mt && (y = !0), y || !1 !== S && x !== c.length - 1 && !Re(S) ? D : S), d)
                }, Mt), (0, Ut.h)(d => d !== Mt), (0, ne.U)(d => Re(d) ? d : !0 === d), (0, pt.q)(1)))
            }
            let jt = (() => {
                class g {}
                return g.\u0275fac = function(c) {
                    return new(c || g)
                }, g.\u0275cmp = m.Xpm({
                    type: g,
                    selectors: [
                        ["ng-component"]
                    ],
                    decls: 1,
                    vars: 0,
                    template: function(c, y) {
                        1 & c && m._UZ(0, "router-outlet")
                    },
                    directives: function() {
                        return [Xr]
                    },
                    encapsulation: 2
                }), g
            })();

            function lr(g, d = "") {
                for (let c = 0; c < g.length; c++) {
                    const y = g[c];
                    Rn(y, Ot(d, y))
                }
            }

            function Rn(g, d) {
                g.children && lr(g.children, d)
            }

            function Ot(g, d) {
                return d ? g || d.path ? g && !d.path ? `${g}/` : !g && d.path ? d.path : `${g}/${d.path}` : "" : g
            }

            function En(g) {
                const d = g.children && g.children.map(En),
                    c = d ? Object.assign(Object.assign({}, g), {
                        children: d
                    }) : Object.assign({}, g);
                return !c.component && (d || c.loadChildren) && c.outlet && c.outlet !== at && (c.component = jt), c
            }

            function Zt(g) {
                return g.outlet || at
            }

            function Ws(g, d) {
                const c = g.filter(y => Zt(y) === d);
                return c.push(...g.filter(y => Zt(y) !== d)), c
            }
            const jn = {
                matched: !1,
                consumedSegments: [],
                lastChild: 0,
                parameters: {},
                positionalParamSegments: {}
            };

            function Ks(g, d, c) {
                var y;
                if ("" === d.path) return "full" === d.pathMatch && (g.hasChildren() || c.length > 0) ? Object.assign({}, jn) : {
                    matched: !0,
                    consumedSegments: [],
                    lastChild: 0,
                    parameters: {},
                    positionalParamSegments: {}
                };
                const S = (d.matcher || Ao)(c, g, d);
                if (!S) return Object.assign({}, jn);
                const x = {};
                en(S.posParams, (se, Oe) => {
                    x[Oe] = se.path
                });
                const j = S.consumed.length > 0 ? Object.assign(Object.assign({}, x), S.consumed[S.consumed.length - 1].parameters) : x;
                return {
                    matched: !0,
                    consumedSegments: S.consumed,
                    lastChild: S.consumed.length,
                    parameters: j,
                    positionalParamSegments: null !== (y = S.posParams) && void 0 !== y ? y : {}
                }
            }

            function Or(g, d, c, y, D = "corrected") {
                if (c.length > 0 && function(g, d, c) {
                        return c.some(y => Ti(g, d, y) && Zt(y) !== at)
                    }(g, c, y)) {
                    const x = new He(d, function(g, d, c, y) {
                        const D = {};
                        D[at] = y, y._sourceSegment = g, y._segmentIndexShift = d.length;
                        for (const S of c)
                            if ("" === S.path && Zt(S) !== at) {
                                const x = new He([], {});
                                x._sourceSegment = g, x._segmentIndexShift = d.length, D[Zt(S)] = x
                            } return D
                    }(g, d, y, new He(c, g.children)));
                    return x._sourceSegment = g, x._segmentIndexShift = d.length, {
                        segmentGroup: x,
                        slicedSegments: []
                    }
                }
                if (0 === c.length && function(g, d, c) {
                        return c.some(y => Ti(g, d, y))
                    }(g, c, y)) {
                    const x = new He(g.segments, function(g, d, c, y, D, S) {
                        const x = {};
                        for (const j of y)
                            if (Ti(g, c, j) && !D[Zt(j)]) {
                                const se = new He([], {});
                                se._sourceSegment = g, se._segmentIndexShift = "legacy" === S ? g.segments.length : d.length, x[Zt(j)] = se
                            } return Object.assign(Object.assign({}, D), x)
                    }(g, d, c, y, g.children, D));
                    return x._sourceSegment = g, x._segmentIndexShift = d.length, {
                        segmentGroup: x,
                        slicedSegments: c
                    }
                }
                const S = new He(g.segments, g.children);
                return S._sourceSegment = g, S._segmentIndexShift = d.length, {
                    segmentGroup: S,
                    slicedSegments: c
                }
            }

            function Ti(g, d, c) {
                return (!(g.hasChildren() || d.length > 0) || "full" !== c.pathMatch) && "" === c.path
            }

            function Xi(g, d, c, y) {
                return !!(Zt(g) === y || y !== at && Ti(d, c, g)) && ("**" === g.path || Ks(d, g, c).matched)
            }

            function Bn(g, d, c) {
                return 0 === d.length && !g.children[c]
            }
            class _s {
                constructor(d) {
                    this.segmentGroup = d || null
                }
            }
            class pe {
                constructor(d) {
                    this.urlTree = d
                }
            }

            function gt(g) {
                return new Q.y(d => d.error(new _s(g)))
            }

            function ko(g) {
                return new Q.y(d => d.error(new pe(g)))
            }

            function an(g) {
                return new Q.y(d => d.error(new Error(`Only absolute redirects can have named outlets. redirectTo: '${g}'`)))
            }
            class ur {
                constructor(d, c, y, D, S) {
                    this.configLoader = c, this.urlSerializer = y, this.urlTree = D, this.config = S, this.allowRedirects = !0, this.ngModule = d.get(m.h0i)
                }
                apply() {
                    const d = Or(this.urlTree.root, [], [], this.config).segmentGroup,
                        c = new He(d.segments, d.children);
                    return this.expandSegmentGroup(this.ngModule, this.config, c, at).pipe((0, ne.U)(S => this.createUrlTree(Ai(S), this.urlTree.queryParams, this.urlTree.fragment))).pipe(Le(S => {
                        if (S instanceof pe) return this.allowRedirects = !1, this.match(S.urlTree);
                        throw S instanceof _s ? this.noMatchError(S) : S
                    }))
                }
                match(d) {
                    return this.expandSegmentGroup(this.ngModule, this.config, d.root, at).pipe((0, ne.U)(D => this.createUrlTree(Ai(D), d.queryParams, d.fragment))).pipe(Le(D => {
                        throw D instanceof _s ? this.noMatchError(D) : D
                    }))
                }
                noMatchError(d) {
                    return new Error(`Cannot match any routes. URL Segment: '${d.segmentGroup}'`)
                }
                createUrlTree(d, c, y) {
                    const D = d.segments.length > 0 ? new He([], {
                        [at]: d
                    }) : d;
                    return new Pn(D, c, y)
                }
                expandSegmentGroup(d, c, y, D) {
                    return 0 === y.segments.length && y.hasChildren() ? this.expandChildren(d, c, y).pipe((0, ne.U)(S => new He([], S))) : this.expandSegment(d, y, c, y.segments, D, !0)
                }
                expandChildren(d, c, y) {
                    const D = [];
                    for (const S of Object.keys(y.children)) "primary" === S ? D.unshift(S) : D.push(S);
                    return (0, Be.D)(D).pipe((0, ye.b)(S => {
                        const x = y.children[S],
                            j = Ws(c, S);
                        return this.expandSegmentGroup(d, j, x, S).pipe((0, ne.U)(se => ({
                            segment: se,
                            outlet: S
                        })))
                    }), ce((S, x) => (S[x.outlet] = x.segment, S), {}), function(g, d) {
                        const c = arguments.length >= 2;
                        return y => y.pipe(g ? (0, Ut.h)((D, S) => g(D, S, y)) : je.y, Tr(1), c ? X(d) : Vr(() => new ue))
                    }())
                }
                expandSegment(d, c, y, D, S, x) {
                    return (0, Be.D)(y).pipe((0, ye.b)(j => this.expandSegmentAgainstRoute(d, c, y, j, D, S, x).pipe(Le(Oe => {
                        if (Oe instanceof _s) return (0, me.of)(null);
                        throw Oe
                    }))), Wt(j => !!j), Le((j, se) => {
                        if (j instanceof ue || "EmptyError" === j.name) {
                            if (Bn(c, D, S)) return (0, me.of)(new He([], {}));
                            throw new _s(c)
                        }
                        throw j
                    }))
                }
                expandSegmentAgainstRoute(d, c, y, D, S, x, j) {
                    return Xi(D, c, S, x) ? void 0 === D.redirectTo ? this.matchSegmentAgainstRoute(d, c, D, S, x) : j && this.allowRedirects ? this.expandSegmentAgainstRouteUsingRedirect(d, c, y, D, S, x) : gt(c) : gt(c)
                }
                expandSegmentAgainstRouteUsingRedirect(d, c, y, D, S, x) {
                    return "**" === D.path ? this.expandWildCardWithParamsAgainstRouteUsingRedirect(d, y, D, x) : this.expandRegularSegmentAgainstRouteUsingRedirect(d, c, y, D, S, x)
                }
                expandWildCardWithParamsAgainstRouteUsingRedirect(d, c, y, D) {
                    const S = this.applyRedirectCommands([], y.redirectTo, {});
                    return y.redirectTo.startsWith("/") ? ko(S) : this.lineralizeSegments(y, S).pipe((0, le.zg)(x => {
                        const j = new He(x, {});
                        return this.expandSegment(d, j, c, x, D, !1)
                    }))
                }
                expandRegularSegmentAgainstRouteUsingRedirect(d, c, y, D, S, x) {
                    const {
                        matched: j,
                        consumedSegments: se,
                        lastChild: Oe,
                        positionalParamSegments: Ct
                    } = Ks(c, D, S);
                    if (!j) return gt(c);
                    const Ye = this.applyRedirectCommands(se, D.redirectTo, Ct);
                    return D.redirectTo.startsWith("/") ? ko(Ye) : this.lineralizeSegments(D, Ye).pipe((0, le.zg)(Lt => this.expandSegment(d, c, y, Lt.concat(S.slice(Oe)), x, !1)))
                }
                matchSegmentAgainstRoute(d, c, y, D, S) {
                    if ("**" === y.path) return y.loadChildren ? (y._loadedConfig ? (0, me.of)(y._loadedConfig) : this.configLoader.load(d.injector, y)).pipe((0, ne.U)(Lt => (y._loadedConfig = Lt, new He(D, {})))) : (0, me.of)(new He(D, {}));
                    const {
                        matched: x,
                        consumedSegments: j,
                        lastChild: se
                    } = Ks(c, y, D);
                    if (!x) return gt(c);
                    const Oe = D.slice(se);
                    return this.getChildConfig(d, y, D).pipe((0, le.zg)(Ye => {
                        const Lt = Ye.module,
                            $e = Ye.routes,
                            {
                                segmentGroup: Nr,
                                slicedSegments: Dr
                            } = Or(c, j, Oe, $e),
                            Fr = new He(Nr.segments, Nr.children);
                        if (0 === Dr.length && Fr.hasChildren()) return this.expandChildren(Lt, $e, Fr).pipe((0, ne.U)(Jo => new He(j, Jo)));
                        if (0 === $e.length && 0 === Dr.length) return (0, me.of)(new He(j, {}));
                        const _o = Zt(y) === S;
                        return this.expandSegment(Lt, Fr, $e, Dr, _o ? at : S, !0).pipe((0, ne.U)(Js => new He(j.concat(Js.segments), Js.children)))
                    }))
                }
                getChildConfig(d, c, y) {
                    return c.children ? (0, me.of)(new V(c.children, d)) : c.loadChildren ? void 0 !== c._loadedConfig ? (0, me.of)(c._loadedConfig) : this.runCanLoadGuards(d.injector, c, y).pipe((0, le.zg)(D => {
                        return D ? this.configLoader.load(d.injector, c).pipe((0, ne.U)(S => (c._loadedConfig = S, S))) : (g = c, new Q.y(d => d.error(pi(`Cannot load children because the guard of the route "path: '${g.path}'" returned false`))));
                        var g
                    })) : (0, me.of)(new V([], d))
                }
                runCanLoadGuards(d, c, y) {
                    const D = c.canLoad;
                    if (!D || 0 === D.length) return (0, me.of)(!0);
                    const S = D.map(x => {
                        const j = d.get(x);
                        let se;
                        if ((g = j) && K(g.canLoad)) se = j.canLoad(c, y);
                        else {
                            if (!K(j)) throw new Error("Invalid CanLoad guard");
                            se = j(c, y)
                        }
                        var g;
                        return In(se)
                    });
                    return (0, me.of)(S).pipe(dt(), Kt(x => {
                        if (!Re(x)) return;
                        const j = pi(`Redirecting to "${this.urlSerializer.serialize(x)}"`);
                        throw j.url = x, j
                    }), (0, ne.U)(x => !0 === x))
                }
                lineralizeSegments(d, c) {
                    let y = [],
                        D = c.root;
                    for (;;) {
                        if (y = y.concat(D.segments), 0 === D.numberOfChildren) return (0, me.of)(y);
                        if (D.numberOfChildren > 1 || !D.children[at]) return an(d.redirectTo);
                        D = D.children[at]
                    }
                }
                applyRedirectCommands(d, c, y) {
                    return this.applyRedirectCreatreUrlTree(c, this.urlSerializer.parse(c), d, y)
                }
                applyRedirectCreatreUrlTree(d, c, y, D) {
                    const S = this.createSegmentGroup(d, c.root, y, D);
                    return new Pn(S, this.createQueryParams(c.queryParams, this.urlTree.queryParams), c.fragment)
                }
                createQueryParams(d, c) {
                    const y = {};
                    return en(d, (D, S) => {
                        if ("string" == typeof D && D.startsWith(":")) {
                            const j = D.substring(1);
                            y[S] = c[j]
                        } else y[S] = D
                    }), y
                }
                createSegmentGroup(d, c, y, D) {
                    const S = this.createSegments(d, c.segments, y, D);
                    let x = {};
                    return en(c.children, (j, se) => {
                        x[se] = this.createSegmentGroup(d, j, y, D)
                    }), new He(S, x)
                }
                createSegments(d, c, y, D) {
                    return c.map(S => S.path.startsWith(":") ? this.findPosParam(d, S, D) : this.findOrReturn(S, y))
                }
                findPosParam(d, c, y) {
                    const D = y[c.path.substring(1)];
                    if (!D) throw new Error(`Cannot redirect to '${d}'. Cannot find '${c.path}'.`);
                    return D
                }
                findOrReturn(d, c) {
                    let y = 0;
                    for (const D of c) {
                        if (D.path === d.path) return c.splice(y), D;
                        y++
                    }
                    return d
                }
            }

            function Ai(g) {
                const d = {};
                for (const y of Object.keys(g.children)) {
                    const S = Ai(g.children[y]);
                    (S.segments.length > 0 || S.hasChildren()) && (d[y] = S)
                }
                return function(g) {
                    if (1 === g.numberOfChildren && g.children[at]) {
                        const d = g.children[at];
                        return new He(g.segments.concat(d.segments), d.children)
                    }
                    return g
                }(new He(g.segments, d))
            }
            class Vo {
                constructor(d) {
                    this.path = d, this.route = this.path[this.path.length - 1]
                }
            }
            class Es {
                constructor(d, c) {
                    this.component = d, this.route = c
                }
            }

            function to(g, d, c) {
                const y = g._root;
                return Zn(y, d ? d._root : null, c, [y.value])
            }

            function qn(g, d, c) {
                const y = function(g) {
                    if (!g) return null;
                    for (let d = g.parent; d; d = d.parent) {
                        const c = d.routeConfig;
                        if (c && c._loadedConfig) return c._loadedConfig
                    }
                    return null
                }(d);
                return (y ? y.module.injector : c).get(g)
            }

            function Zn(g, d, c, y, D = {
                canDeactivateChecks: [],
                canActivateChecks: []
            }) {
                const S = gs(d);
                return g.children.forEach(x => {
                    (function(g, d, c, y, D = {
                        canDeactivateChecks: [],
                        canActivateChecks: []
                    }) {
                        const S = g.value,
                            x = d ? d.value : null,
                            j = c ? c.getContext(g.value.outlet) : null;
                        if (x && S.routeConfig === x.routeConfig) {
                            const se = function(g, d, c) {
                                if ("function" == typeof c) return c(g, d);
                                switch (c) {
                                    case "pathParamsChange":
                                        return !Wn(g.url, d.url);
                                    case "pathParamsOrQueryParamsChange":
                                        return !Wn(g.url, d.url) || !Gn(g.queryParams, d.queryParams);
                                    case "always":
                                        return !0;
                                    case "paramsOrQueryParamsChange":
                                        return !ys(g, d) || !Gn(g.queryParams, d.queryParams);
                                    case "paramsChange":
                                    default:
                                        return !ys(g, d)
                                }
                            }(x, S, S.routeConfig.runGuardsAndResolvers);
                            se ? D.canActivateChecks.push(new Vo(y)) : (S.data = x.data, S._resolvedData = x._resolvedData), Zn(g, d, S.component ? j ? j.children : null : c, y, D), se && j && j.outlet && j.outlet.isActivated && D.canDeactivateChecks.push(new Es(j.outlet.component, x))
                        } else x && Zr(d, j, D), D.canActivateChecks.push(new Vo(y)), Zn(g, null, S.component ? j ? j.children : null : c, y, D)
                    })(x, S[x.value.outlet], c, y.concat([x.value]), D), delete S[x.value.outlet]
                }), en(S, (x, j) => Zr(x, c.getContext(j), D)), D
            }

            function Zr(g, d, c) {
                const y = gs(g),
                    D = g.value;
                en(y, (S, x) => {
                    Zr(S, D.component ? d ? d.children.getContext(x) : null : d, c)
                }), c.canDeactivateChecks.push(new Es(D.component && d && d.outlet && d.outlet.isActivated ? d.outlet.component : null, D))
            }
            class so {}

            function Ys(g) {
                return new Q.y(d => d.error(g))
            }
            class Mi {
                constructor(d, c, y, D, S, x) {
                    this.rootComponentType = d, this.config = c, this.urlTree = y, this.url = D, this.paramsInheritanceStrategy = S, this.relativeLinkResolution = x
                }
                recognize() {
                    const d = Or(this.urlTree.root, [], [], this.config.filter(x => void 0 === x.redirectTo), this.relativeLinkResolution).segmentGroup,
                        c = this.processSegmentGroup(this.config, d, at);
                    if (null === c) return null;
                    const y = new ms([], Object.freeze({}), Object.freeze(Object.assign({}, this.urlTree.queryParams)), this.urlTree.fragment, {}, at, this.rootComponentType, null, this.urlTree.root, -1, {}),
                        D = new qt(y, c),
                        S = new Er(this.url, D);
                    return this.inheritParamsAndData(S._root), S
                }
                inheritParamsAndData(d) {
                    const c = d.value,
                        y = Po(c, this.paramsInheritanceStrategy);
                    c.params = Object.freeze(y.params), c.data = Object.freeze(y.data), d.children.forEach(D => this.inheritParamsAndData(D))
                }
                processSegmentGroup(d, c, y) {
                    return 0 === c.segments.length && c.hasChildren() ? this.processChildren(d, c) : this.processSegment(d, c, c.segments, y)
                }
                processChildren(d, c) {
                    const y = [];
                    for (const S of Object.keys(c.children)) {
                        const x = c.children[S],
                            j = Ws(d, S),
                            se = this.processSegmentGroup(j, x, S);
                        if (null === se) return null;
                        y.push(...se)
                    }
                    const D = ml(y);
                    return D.sort((d, c) => d.value.outlet === at ? -1 : c.value.outlet === at ? 1 : d.value.outlet.localeCompare(c.value.outlet)), D
                }
                processSegment(d, c, y, D) {
                    for (const S of d) {
                        const x = this.processSegmentAgainstRoute(S, c, y, D);
                        if (null !== x) return x
                    }
                    return Bn(c, y, D) ? [] : null
                }
                processSegmentAgainstRoute(d, c, y, D) {
                    if (d.redirectTo || !Xi(d, c, y, D)) return null;
                    let S, x = [],
                        j = [];
                    if ("**" === d.path) {
                        const $e = y.length > 0 ? Mn(y).parameters : {};
                        S = new ms(y, $e, Object.freeze(Object.assign({}, this.urlTree.queryParams)), this.urlTree.fragment, pa(d), Zt(d), d.component, d, Qr(c), zt(c) + y.length, ga(d))
                    } else {
                        const $e = Ks(c, d, y);
                        if (!$e.matched) return null;
                        x = $e.consumedSegments, j = y.slice($e.lastChild), S = new ms(x, $e.parameters, Object.freeze(Object.assign({}, this.urlTree.queryParams)), this.urlTree.fragment, pa(d), Zt(d), d.component, d, Qr(c), zt(c) + x.length, ga(d))
                    }
                    const se = (g = d).children ? g.children : g.loadChildren ? g._loadedConfig.routes : [],
                        {
                            segmentGroup: Oe,
                            slicedSegments: Ct
                        } = Or(c, x, j, se.filter($e => void 0 === $e.redirectTo), this.relativeLinkResolution);
                    var g;
                    if (0 === Ct.length && Oe.hasChildren()) {
                        const $e = this.processChildren(se, Oe);
                        return null === $e ? null : [new qt(S, $e)]
                    }
                    if (0 === se.length && 0 === Ct.length) return [new qt(S, [])];
                    const Ye = Zt(d) === D,
                        Lt = this.processSegment(se, Oe, Ct, Ye ? at : D);
                    return null === Lt ? null : [new qt(S, Lt)]
                }
            }

            function gl(g) {
                const d = g.value.routeConfig;
                return d && "" === d.path && void 0 === d.redirectTo
            }

            function ml(g) {
                const d = [],
                    c = new Set;
                for (const y of g) {
                    if (!gl(y)) {
                        d.push(y);
                        continue
                    }
                    const D = d.find(S => y.value.routeConfig === S.value.routeConfig);
                    void 0 !== D ? (D.children.push(...y.children), c.add(D)) : d.push(y)
                }
                for (const y of c) {
                    const D = ml(y.children);
                    d.push(new qt(y.value, D))
                }
                return d.filter(y => !c.has(y))
            }

            function Qr(g) {
                let d = g;
                for (; d._sourceSegment;) d = d._sourceSegment;
                return d
            }

            function zt(g) {
                let d = g,
                    c = d._segmentIndexShift ? d._segmentIndexShift : 0;
                for (; d._sourceSegment;) d = d._sourceSegment, c += d._segmentIndexShift ? d._segmentIndexShift : 0;
                return c - 1
            }

            function pa(g) {
                return g.data || {}
            }

            function ga(g) {
                return g.resolve || {}
            }

            function qs(g) {
                return (0, N.w)(d => {
                    const c = g(d);
                    return c ? (0, Be.D)(c).pipe((0, ne.U)(() => d)) : (0, me.of)(d)
                })
            }
            class Ea extends class {
                shouldDetach(d) {
                    return !1
                }
                store(d, c) {}
                shouldAttach(d) {
                    return !1
                }
                retrieve(d) {
                    return null
                }
                shouldReuseRoute(d, c) {
                    return d.routeConfig === c.routeConfig
                }
            } {}
            const lo = new m.OlP("ROUTES");
            class xr {
                constructor(d, c, y, D) {
                    this.loader = d, this.compiler = c, this.onLoadStartListener = y, this.onLoadEndListener = D
                }
                load(d, c) {
                    if (c._loader$) return c._loader$;
                    this.onLoadStartListener && this.onLoadStartListener(c);
                    const D = this.loadModuleFactory(c.loadChildren).pipe((0, ne.U)(S => {
                        this.onLoadEndListener && this.onLoadEndListener(c);
                        const x = S.create(d);
                        return new V(ds(x.injector.get(lo, void 0, m.XFs.Self | m.XFs.Optional)).map(En), x)
                    }), Le(S => {
                        throw c._loader$ = void 0, S
                    }));
                    return c._loader$ = new xt.c(D, () => new wt.xQ).pipe((0, Pe.x)()), c._loader$
                }
                loadModuleFactory(d) {
                    return "string" == typeof d ? (0, Be.D)(this.loader.load(d)) : In(d()).pipe((0, le.zg)(c => c instanceof m.YKP ? (0, me.of)(c) : (0, Be.D)(this.compiler.compileModuleAsync(c))))
                }
            }
            class Pi {
                constructor() {
                    this.outlet = null, this.route = null, this.resolver = null, this.children = new vs, this.attachRef = null
                }
            }
            class vs {
                constructor() {
                    this.contexts = new Map
                }
                onChildOutletCreated(d, c) {
                    const y = this.getOrCreateContext(d);
                    y.outlet = c, this.contexts.set(d, y)
                }
                onChildOutletDestroyed(d) {
                    const c = this.getContext(d);
                    c && (c.outlet = null, c.attachRef = null)
                }
                onOutletDeactivated() {
                    const d = this.contexts;
                    return this.contexts = new Map, d
                }
                onOutletReAttached(d) {
                    this.contexts = d
                }
                getOrCreateContext(d) {
                    let c = this.getContext(d);
                    return c || (c = new Pi, this.contexts.set(d, c)), c
                }
                getContext(d) {
                    return this.contexts.get(d) || null
                }
            }
            class Zs {
                shouldProcessUrl(d) {
                    return !0
                }
                extract(d) {
                    return d
                }
                merge(d, c) {
                    return d
                }
            }

            function uo(g) {
                throw g
            }

            function _l(g, d, c) {
                return d.parse("/")
            }

            function Ca(g, d) {
                return (0, me.of)(null)
            }
            const uu = {
                    paths: "exact",
                    fragment: "ignored",
                    matrixParams: "ignored",
                    queryParams: "exact"
                },
                El = {
                    paths: "subset",
                    fragment: "ignored",
                    matrixParams: "ignored",
                    queryParams: "subset"
                };
            let hn = (() => {
                class g {
                    constructor(c, y, D, S, x, j, se, Oe) {
                        this.rootComponentType = c, this.urlSerializer = y, this.rootContexts = D, this.location = S, this.config = Oe, this.lastSuccessfulNavigation = null, this.currentNavigation = null, this.disposed = !1, this.lastLocationChangeInfo = null, this.navigationId = 0, this.currentPageId = 0, this.isNgZoneEnabled = !1, this.events = new wt.xQ, this.errorHandler = uo, this.malformedUriErrorHandler = _l, this.navigated = !1, this.lastSuccessfulId = -1, this.hooks = {
                            beforePreactivation: Ca,
                            afterPreactivation: Ca
                        }, this.urlHandlingStrategy = new Zs, this.routeReuseStrategy = new Ea, this.onSameUrlNavigation = "ignore", this.paramsInheritanceStrategy = "emptyOnly", this.urlUpdateStrategy = "deferred", this.relativeLinkResolution = "corrected", this.canceledNavigationResolution = "replace", this.ngModule = x.get(m.h0i), this.console = x.get(m.c2e);
                        const Lt = x.get(m.R0b);
                        this.isNgZoneEnabled = Lt instanceof m.R0b && m.R0b.isInAngularZone(), this.resetConfig(Oe), this.currentUrlTree = new Pn(new He([], {}), {}, null), this.rawUrlTree = this.currentUrlTree, this.browserUrlTree = this.currentUrlTree, this.configLoader = new xr(j, se, $e => this.triggerEvent(new fn($e)), $e => this.triggerEvent(new tr($e))), this.routerState = Yi(this.currentUrlTree, this.rootComponentType), this.transitions = new rt.X({
                            id: 0,
                            targetPageId: 0,
                            currentUrlTree: this.currentUrlTree,
                            currentRawUrl: this.currentUrlTree,
                            extractedUrl: this.urlHandlingStrategy.extract(this.currentUrlTree),
                            urlAfterRedirects: this.urlHandlingStrategy.extract(this.currentUrlTree),
                            rawUrl: this.currentUrlTree,
                            extras: {},
                            resolve: null,
                            reject: null,
                            promise: Promise.resolve(!0),
                            source: "imperative",
                            restoredState: null,
                            currentSnapshot: this.routerState.snapshot,
                            targetSnapshot: null,
                            currentRouterState: this.routerState,
                            targetRouterState: null,
                            guards: {
                                canActivateChecks: [],
                                canDeactivateChecks: []
                            },
                            guardsResult: null
                        }), this.navigations = this.setupNavigations(this.transitions), this.processNavigations()
                    }
                    get browserPageId() {
                        var c;
                        return null === (c = this.location.getState()) || void 0 === c ? void 0 : c.\u0275routerPageId
                    }
                    setupNavigations(c) {
                        const y = this.events;
                        return c.pipe((0, Ut.h)(D => 0 !== D.id), (0, ne.U)(D => Object.assign(Object.assign({}, D), {
                            extractedUrl: this.urlHandlingStrategy.extract(D.rawUrl)
                        })), (0, N.w)(D => {
                            let S = !1,
                                x = !1;
                            return (0, me.of)(D).pipe(Kt(j => {
                                this.currentNavigation = {
                                    id: j.id,
                                    initialUrl: j.currentRawUrl,
                                    extractedUrl: j.extractedUrl,
                                    trigger: j.source,
                                    extras: j.extras,
                                    previousNavigation: this.lastSuccessfulNavigation ? Object.assign(Object.assign({}, this.lastSuccessfulNavigation), {
                                        previousNavigation: null
                                    }) : null
                                }
                            }), (0, N.w)(j => {
                                const se = this.browserUrlTree.toString(),
                                    Oe = !this.navigated || j.extractedUrl.toString() !== se || se !== this.currentUrlTree.toString();
                                if (("reload" === this.onSameUrlNavigation || Oe) && this.urlHandlingStrategy.shouldProcessUrl(j.rawUrl)) return Jr(j.source) && (this.browserUrlTree = j.extractedUrl), (0, me.of)(j).pipe((0, N.w)(Ye => {
                                    const Lt = this.transitions.getValue();
                                    return y.next(new Ke(Ye.id, this.serializeUrl(Ye.extractedUrl), Ye.source, Ye.restoredState)), Lt !== this.transitions.getValue() ? xe.E : Promise.resolve(Ye)
                                }), function(g, d, c, y) {
                                    return (0, N.w)(D => function(g, d, c, y, D) {
                                        return new ur(g, d, c, y, D).apply()
                                    }(g, d, c, D.extractedUrl, y).pipe((0, ne.U)(S => Object.assign(Object.assign({}, D), {
                                        urlAfterRedirects: S
                                    }))))
                                }(this.ngModule.injector, this.configLoader, this.urlSerializer, this.config), Kt(Ye => {
                                    this.currentNavigation = Object.assign(Object.assign({}, this.currentNavigation), {
                                        finalUrl: Ye.urlAfterRedirects
                                    })
                                }), function(g, d, c, y, D) {
                                    return (0, le.zg)(S => function(g, d, c, y, D = "emptyOnly", S = "legacy") {
                                        try {
                                            const x = new Mi(g, d, c, y, D, S).recognize();
                                            return null === x ? Ys(new so) : (0, me.of)(x)
                                        } catch (x) {
                                            return Ys(x)
                                        }
                                    }(g, d, S.urlAfterRedirects, c(S.urlAfterRedirects), y, D).pipe((0, ne.U)(x => Object.assign(Object.assign({}, S), {
                                        targetSnapshot: x
                                    }))))
                                }(this.rootComponentType, this.config, Ye => this.serializeUrl(Ye), this.paramsInheritanceStrategy, this.relativeLinkResolution), Kt(Ye => {
                                    "eager" === this.urlUpdateStrategy && (Ye.extras.skipLocationChange || this.setBrowserUrl(Ye.urlAfterRedirects, Ye), this.browserUrlTree = Ye.urlAfterRedirects);
                                    const Lt = new Xt(Ye.id, this.serializeUrl(Ye.extractedUrl), this.serializeUrl(Ye.urlAfterRedirects), Ye.targetSnapshot);
                                    y.next(Lt)
                                }));
                                if (Oe && this.rawUrlTree && this.urlHandlingStrategy.shouldProcessUrl(this.rawUrlTree)) {
                                    const {
                                        id: Lt,
                                        extractedUrl: $e,
                                        source: Nr,
                                        restoredState: Dr,
                                        extras: Fr
                                    } = j, _o = new Ke(Lt, this.serializeUrl($e), Nr, Dr);
                                    y.next(_o);
                                    const ns = Yi($e, this.rootComponentType).snapshot;
                                    return (0, me.of)(Object.assign(Object.assign({}, j), {
                                        targetSnapshot: ns,
                                        urlAfterRedirects: $e,
                                        extras: Object.assign(Object.assign({}, Fr), {
                                            skipLocationChange: !1,
                                            replaceUrl: !1
                                        })
                                    }))
                                }
                                return this.rawUrlTree = j.rawUrl, this.browserUrlTree = j.urlAfterRedirects, j.resolve(null), xe.E
                            }), qs(j => {
                                const {
                                    targetSnapshot: se,
                                    id: Oe,
                                    extractedUrl: Ct,
                                    rawUrl: Ye,
                                    extras: {
                                        skipLocationChange: Lt,
                                        replaceUrl: $e
                                    }
                                } = j;
                                return this.hooks.beforePreactivation(se, {
                                    navigationId: Oe,
                                    appliedUrlTree: Ct,
                                    rawUrlTree: Ye,
                                    skipLocationChange: !!Lt,
                                    replaceUrl: !!$e
                                })
                            }), Kt(j => {
                                const se = new yt(j.id, this.serializeUrl(j.extractedUrl), this.serializeUrl(j.urlAfterRedirects), j.targetSnapshot);
                                this.triggerEvent(se)
                            }), (0, ne.U)(j => Object.assign(Object.assign({}, j), {
                                guards: to(j.targetSnapshot, j.currentSnapshot, this.rootContexts)
                            })), function(g, d) {
                                return (0, le.zg)(c => {
                                    const {
                                        targetSnapshot: y,
                                        currentSnapshot: D,
                                        guards: {
                                            canActivateChecks: S,
                                            canDeactivateChecks: x
                                        }
                                    } = c;
                                    return 0 === x.length && 0 === S.length ? (0, me.of)(Object.assign(Object.assign({}, c), {
                                        guardsResult: !0
                                    })) : function(g, d, c, y) {
                                        return (0, Be.D)(g).pipe((0, le.zg)(D => function(g, d, c, y, D) {
                                            const S = d && d.routeConfig ? d.routeConfig.canDeactivate : null;
                                            if (!S || 0 === S.length) return (0, me.of)(!0);
                                            const x = S.map(j => {
                                                const se = qn(j, d, D);
                                                let Oe;
                                                if (function(g) {
                                                        return g && K(g.canDeactivate)
                                                    }(se)) Oe = In(se.canDeactivate(g, d, c, y));
                                                else {
                                                    if (!K(se)) throw new Error("Invalid CanDeactivate guard");
                                                    Oe = In(se(g, d, c, y))
                                                }
                                                return Oe.pipe(Wt())
                                            });
                                            return (0, me.of)(x).pipe(dt())
                                        }(D.component, D.route, c, d, y)), Wt(D => !0 !== D, !0))
                                    }(x, y, D, g).pipe((0, le.zg)(j => j && function(g) {
                                        return "boolean" == typeof g
                                    }(j) ? function(g, d, c, y) {
                                        return (0, Be.D)(d).pipe((0, ye.b)(D => (0, on.z)(function(g, d) {
                                            return null !== g && d && d(new mr(g)), (0, me.of)(!0)
                                        }(D.route.parent, y), function(g, d) {
                                            return null !== g && d && d(new js(g)), (0, me.of)(!0)
                                        }(D.route, y), function(g, d, c) {
                                            const y = d[d.length - 1],
                                                S = d.slice(0, d.length - 1).reverse().map(x => function(g) {
                                                    const d = g.routeConfig ? g.routeConfig.canActivateChild : null;
                                                    return d && 0 !== d.length ? {
                                                        node: g,
                                                        guards: d
                                                    } : null
                                                }(x)).filter(x => null !== x).map(x => (0, Jt.P)(() => {
                                                    const j = x.guards.map(se => {
                                                        const Oe = qn(se, x.node, c);
                                                        let Ct;
                                                        if (function(g) {
                                                                return g && K(g.canActivateChild)
                                                            }(Oe)) Ct = In(Oe.canActivateChild(y, g));
                                                        else {
                                                            if (!K(Oe)) throw new Error("Invalid CanActivateChild guard");
                                                            Ct = In(Oe(y, g))
                                                        }
                                                        return Ct.pipe(Wt())
                                                    });
                                                    return (0, me.of)(j).pipe(dt())
                                                }));
                                            return (0, me.of)(S).pipe(dt())
                                        }(g, D.path, c), function(g, d, c) {
                                            const y = d.routeConfig ? d.routeConfig.canActivate : null;
                                            if (!y || 0 === y.length) return (0, me.of)(!0);
                                            const D = y.map(S => (0, Jt.P)(() => {
                                                const x = qn(S, d, c);
                                                let j;
                                                if (function(g) {
                                                        return g && K(g.canActivate)
                                                    }(x)) j = In(x.canActivate(d, g));
                                                else {
                                                    if (!K(x)) throw new Error("Invalid CanActivate guard");
                                                    j = In(x(d, g))
                                                }
                                                return j.pipe(Wt())
                                            }));
                                            return (0, me.of)(D).pipe(dt())
                                        }(g, D.route, c))), Wt(D => !0 !== D, !0))
                                    }(y, S, g, d) : (0, me.of)(j)), (0, ne.U)(j => Object.assign(Object.assign({}, c), {
                                        guardsResult: j
                                    })))
                                })
                            }(this.ngModule.injector, j => this.triggerEvent(j)), Kt(j => {
                                if (Re(j.guardsResult)) {
                                    const Oe = pi(`Redirecting to "${this.serializeUrl(j.guardsResult)}"`);
                                    throw Oe.url = j.guardsResult, Oe
                                }
                                const se = new ot(j.id, this.serializeUrl(j.extractedUrl), this.serializeUrl(j.urlAfterRedirects), j.targetSnapshot, !!j.guardsResult);
                                this.triggerEvent(se)
                            }), (0, Ut.h)(j => !!j.guardsResult || (this.restoreHistory(j), this.cancelNavigationTransition(j, ""), !1)), qs(j => {
                                if (j.guards.canActivateChecks.length) return (0, me.of)(j).pipe(Kt(se => {
                                    const Oe = new Ar(se.id, this.serializeUrl(se.extractedUrl), this.serializeUrl(se.urlAfterRedirects), se.targetSnapshot);
                                    this.triggerEvent(Oe)
                                }), (0, N.w)(se => {
                                    let Oe = !1;
                                    return (0, me.of)(se).pipe(function(g, d) {
                                        return (0, le.zg)(c => {
                                            const {
                                                targetSnapshot: y,
                                                guards: {
                                                    canActivateChecks: D
                                                }
                                            } = c;
                                            if (!D.length) return (0, me.of)(c);
                                            let S = 0;
                                            return (0, Be.D)(D).pipe((0, ye.b)(x => function(g, d, c, y) {
                                                return function(g, d, c, y) {
                                                    const D = Object.keys(g);
                                                    if (0 === D.length) return (0, me.of)({});
                                                    const S = {};
                                                    return (0, Be.D)(D).pipe((0, le.zg)(x => function(g, d, c, y) {
                                                        const D = qn(g, d, y);
                                                        return In(D.resolve ? D.resolve(d, c) : D(d, c))
                                                    }(g[x], d, c, y).pipe(Kt(j => {
                                                        S[x] = j
                                                    }))), Tr(1), (0, le.zg)(() => Object.keys(S).length === D.length ? (0, me.of)(S) : xe.E))
                                                }(g._resolve, g, d, y).pipe((0, ne.U)(S => (g._resolvedData = S, g.data = Object.assign(Object.assign({}, g.data), Po(g, c).resolve), null)))
                                            }(x.route, y, g, d)), Kt(() => S++), Tr(1), (0, le.zg)(x => S === D.length ? (0, me.of)(c) : xe.E))
                                        })
                                    }(this.paramsInheritanceStrategy, this.ngModule.injector), Kt({
                                        next: () => Oe = !0,
                                        complete: () => {
                                            Oe || (this.restoreHistory(se), this.cancelNavigationTransition(se, "At least one route resolver didn't emit any value."))
                                        }
                                    }))
                                }), Kt(se => {
                                    const Oe = new Ue(se.id, this.serializeUrl(se.extractedUrl), this.serializeUrl(se.urlAfterRedirects), se.targetSnapshot);
                                    this.triggerEvent(Oe)
                                }))
                            }), qs(j => {
                                const {
                                    targetSnapshot: se,
                                    id: Oe,
                                    extractedUrl: Ct,
                                    rawUrl: Ye,
                                    extras: {
                                        skipLocationChange: Lt,
                                        replaceUrl: $e
                                    }
                                } = j;
                                return this.hooks.afterPreactivation(se, {
                                    navigationId: Oe,
                                    appliedUrlTree: Ct,
                                    rawUrlTree: Ye,
                                    skipLocationChange: !!Lt,
                                    replaceUrl: !!$e
                                })
                            }), (0, ne.U)(j => {
                                const se = function(g, d, c) {
                                    const y = Hs(g, d._root, c ? c._root : void 0);
                                    return new Io(y, d)
                                }(this.routeReuseStrategy, j.targetSnapshot, j.currentRouterState);
                                return Object.assign(Object.assign({}, j), {
                                    targetRouterState: se
                                })
                            }), Kt(j => {
                                this.currentUrlTree = j.urlAfterRedirects, this.rawUrlTree = this.urlHandlingStrategy.merge(j.urlAfterRedirects, j.rawUrl), this.routerState = j.targetRouterState, "deferred" === this.urlUpdateStrategy && (j.extras.skipLocationChange || this.setBrowserUrl(this.rawUrlTree, j), this.browserUrlTree = j.urlAfterRedirects)
                            }), ((g, d, c) => (0, ne.U)(y => (new T(d, y.targetRouterState, y.currentRouterState, c).activate(g), y)))(this.rootContexts, this.routeReuseStrategy, j => this.triggerEvent(j)), Kt({
                                next() {
                                    S = !0
                                },
                                complete() {
                                    S = !0
                                }
                            }), function(g) {
                                return d => d.lift(new Sr(g))
                            }(() => {
                                var j;
                                if (!S && !x) {
                                    const se = `Navigation ID ${D.id} is not equal to the current navigation id ${this.navigationId}`;
                                    "replace" === this.canceledNavigationResolution ? (this.restoreHistory(D), this.cancelNavigationTransition(D, se)) : this.cancelNavigationTransition(D, se)
                                }(null === (j = this.currentNavigation) || void 0 === j ? void 0 : j.id) === D.id && (this.currentNavigation = null)
                            }), Le(j => {
                                if (x = !0, function(g) {
                                        return g && g[Mr]
                                    }(j)) {
                                    const se = Re(j.url);
                                    se || (this.navigated = !0, this.restoreHistory(D, !0));
                                    const Oe = new dn(D.id, this.serializeUrl(D.extractedUrl), j.message);
                                    y.next(Oe), se ? setTimeout(() => {
                                        const Ct = this.urlHandlingStrategy.merge(j.url, this.rawUrlTree),
                                            Ye = {
                                                skipLocationChange: D.extras.skipLocationChange,
                                                replaceUrl: "eager" === this.urlUpdateStrategy || Jr(D.source)
                                            };
                                        this.scheduleNavigation(Ct, "imperative", null, Ye, {
                                            resolve: D.resolve,
                                            reject: D.reject,
                                            promise: D.promise
                                        })
                                    }, 0) : D.resolve(!1)
                                } else {
                                    this.restoreHistory(D, !0);
                                    const se = new Pt(D.id, this.serializeUrl(D.extractedUrl), j);
                                    y.next(se);
                                    try {
                                        D.resolve(this.errorHandler(j))
                                    } catch (Oe) {
                                        D.reject(Oe)
                                    }
                                }
                                return xe.E
                            }))
                        }))
                    }
                    resetRootComponentType(c) {
                        this.rootComponentType = c, this.routerState.root.component = this.rootComponentType
                    }
                    getTransition() {
                        const c = this.transitions.value;
                        return c.urlAfterRedirects = this.browserUrlTree, c
                    }
                    setTransition(c) {
                        this.transitions.next(Object.assign(Object.assign({}, this.getTransition()), c))
                    }
                    initialNavigation() {
                        this.setUpLocationChangeListener(), 0 === this.navigationId && this.navigateByUrl(this.location.path(!0), {
                            replaceUrl: !0
                        })
                    }
                    setUpLocationChangeListener() {
                        this.locationSubscription || (this.locationSubscription = this.location.subscribe(c => {
                            const y = this.extractLocationChangeInfoFromEvent(c);
                            this.shouldScheduleNavigation(this.lastLocationChangeInfo, y) && setTimeout(() => {
                                const {
                                    source: D,
                                    state: S,
                                    urlTree: x
                                } = y, j = {
                                    replaceUrl: !0
                                };
                                if (S) {
                                    const se = Object.assign({}, S);
                                    delete se.navigationId, delete se.\u0275routerPageId, 0 !== Object.keys(se).length && (j.state = se)
                                }
                                this.scheduleNavigation(x, D, S, j)
                            }, 0), this.lastLocationChangeInfo = y
                        }))
                    }
                    extractLocationChangeInfoFromEvent(c) {
                        var y;
                        return {
                            source: "popstate" === c.type ? "popstate" : "hashchange",
                            urlTree: this.parseUrl(c.url),
                            state: (null === (y = c.state) || void 0 === y ? void 0 : y.navigationId) ? c.state : null,
                            transitionId: this.getTransition().id
                        }
                    }
                    shouldScheduleNavigation(c, y) {
                        if (!c) return !0;
                        const D = y.urlTree.toString() === c.urlTree.toString();
                        return y.transitionId !== c.transitionId || !D || !("hashchange" === y.source && "popstate" === c.source || "popstate" === y.source && "hashchange" === c.source)
                    }
                    get url() {
                        return this.serializeUrl(this.currentUrlTree)
                    }
                    getCurrentNavigation() {
                        return this.currentNavigation
                    }
                    triggerEvent(c) {
                        this.events.next(c)
                    }
                    resetConfig(c) {
                        lr(c), this.config = c.map(En), this.navigated = !1, this.lastSuccessfulId = -1
                    }
                    ngOnDestroy() {
                        this.dispose()
                    }
                    dispose() {
                        this.transitions.complete(), this.locationSubscription && (this.locationSubscription.unsubscribe(), this.locationSubscription = void 0), this.disposed = !0
                    }
                    createUrlTree(c, y = {}) {
                        const {
                            relativeTo: D,
                            queryParams: S,
                            fragment: x,
                            queryParamsHandling: j,
                            preserveFragment: se
                        } = y, Oe = D || this.routerState.root, Ct = se ? this.currentUrlTree.fragment : x;
                        let Ye = null;
                        switch (j) {
                            case "merge":
                                Ye = Object.assign(Object.assign({}, this.currentUrlTree.queryParams), S);
                                break;
                            case "preserve":
                                Ye = this.currentUrlTree.queryParams;
                                break;
                            default:
                                Ye = S || null
                        }
                        return null !== Ye && (Ye = this.removeEmptyProps(Ye)),
                            function(g, d, c, y, D) {
                                if (0 === c.length) return zs(d.root, d.root, d, y, D);
                                const S = function(g) {
                                    if ("string" == typeof g[0] && 1 === g.length && "/" === g[0]) return new Sn(!0, 0, g);
                                    let d = 0,
                                        c = !1;
                                    const y = g.reduce((D, S, x) => {
                                        if ("object" == typeof S && null != S) {
                                            if (S.outlets) {
                                                const j = {};
                                                return en(S.outlets, (se, Oe) => {
                                                    j[Oe] = "string" == typeof se ? se.split("/") : se
                                                }), [...D, {
                                                    outlets: j
                                                }]
                                            }
                                            if (S.segmentPath) return [...D, S.segmentPath]
                                        }
                                        return "string" != typeof S ? [...D, S] : 0 === x ? (S.split("/").forEach((j, se) => {
                                            0 == se && "." === j || (0 == se && "" === j ? c = !0 : ".." === j ? d++ : "" != j && D.push(j))
                                        }), D) : [...D, S]
                                    }, []);
                                    return new Sn(c, d, y)
                                }(c);
                                if (S.toRoot()) return zs(d.root, new He([], {}), d, y, D);
                                const x = function(g, d, c) {
                                        if (g.isAbsolute) return new Kr(d.root, !0, 0);
                                        if (-1 === c.snapshot._lastPathIndex) {
                                            const S = c.snapshot._urlSegment;
                                            return new Kr(S, S === d.root, 0)
                                        }
                                        const y = Wr(g.commands[0]) ? 0 : 1;
                                        return function(g, d, c) {
                                            let y = g,
                                                D = d,
                                                S = c;
                                            for (; S > D;) {
                                                if (S -= D, y = y.parent, !y) throw new Error("Invalid number of '../'");
                                                D = y.segments.length
                                            }
                                            return new Kr(y, !1, D - S)
                                        }(c.snapshot._urlSegment, c.snapshot._lastPathIndex + y, g.numberOfDoubleDots)
                                    }(S, d, g),
                                    j = x.processChildren ? Yr(x.segmentGroup, x.index, S.commands) : Gs(x.segmentGroup, x.index, S.commands);
                                return zs(x.segmentGroup, j, d, y, D)
                            }(Oe, this.currentUrlTree, c, Ye, null != Ct ? Ct : null)
                    }
                    navigateByUrl(c, y = {
                        skipLocationChange: !1
                    }) {
                        const D = Re(c) ? c : this.parseUrl(c),
                            S = this.urlHandlingStrategy.merge(D, this.rawUrlTree);
                        return this.scheduleNavigation(S, "imperative", null, y)
                    }
                    navigate(c, y = {
                        skipLocationChange: !1
                    }) {
                        return function(g) {
                            for (let d = 0; d < g.length; d++) {
                                const c = g[d];
                                if (null == c) throw new Error(`The requested path contains ${c} segment at index ${d}`)
                            }
                        }(c), this.navigateByUrl(this.createUrlTree(c, y), y)
                    }
                    serializeUrl(c) {
                        return this.urlSerializer.serialize(c)
                    }
                    parseUrl(c) {
                        let y;
                        try {
                            y = this.urlSerializer.parse(c)
                        } catch (D) {
                            y = this.malformedUriErrorHandler(D, this.urlSerializer, c)
                        }
                        return y
                    }
                    isActive(c, y) {
                        let D;
                        if (D = !0 === y ? Object.assign({}, uu) : !1 === y ? Object.assign({}, El) : y, Re(c)) return bn(this.currentUrlTree, c, D);
                        const S = this.parseUrl(c);
                        return bn(this.currentUrlTree, S, D)
                    }
                    removeEmptyProps(c) {
                        return Object.keys(c).reduce((y, D) => {
                            const S = c[D];
                            return null != S && (y[D] = S), y
                        }, {})
                    }
                    processNavigations() {
                        this.navigations.subscribe(c => {
                            this.navigated = !0, this.lastSuccessfulId = c.id, this.currentPageId = c.targetPageId, this.events.next(new Vt(c.id, this.serializeUrl(c.extractedUrl), this.serializeUrl(this.currentUrlTree))), this.lastSuccessfulNavigation = this.currentNavigation, c.resolve(!0)
                        }, c => {
                            this.console.warn(`Unhandled Navigation Error: ${c}`)
                        })
                    }
                    scheduleNavigation(c, y, D, S, x) {
                        var j, se;
                        if (this.disposed) return Promise.resolve(!1);
                        const Oe = this.getTransition(),
                            Ct = Jr(y) && Oe && !Jr(Oe.source),
                            $e = (this.lastSuccessfulId === Oe.id || this.currentNavigation ? Oe.rawUrl : Oe.urlAfterRedirects).toString() === c.toString();
                        if (Ct && $e) return Promise.resolve(!0);
                        let Nr, Dr, Fr;
                        x ? (Nr = x.resolve, Dr = x.reject, Fr = x.promise) : Fr = new Promise((Js, Jo) => {
                            Nr = Js, Dr = Jo
                        });
                        const _o = ++this.navigationId;
                        let ns;
                        return "computed" === this.canceledNavigationResolution ? (0 === this.currentPageId && (D = this.location.getState()), ns = D && D.\u0275routerPageId ? D.\u0275routerPageId : S.replaceUrl || S.skipLocationChange ? null !== (j = this.browserPageId) && void 0 !== j ? j : 0 : (null !== (se = this.browserPageId) && void 0 !== se ? se : 0) + 1) : ns = 0, this.setTransition({
                            id: _o,
                            targetPageId: ns,
                            source: y,
                            restoredState: D,
                            currentUrlTree: this.currentUrlTree,
                            currentRawUrl: this.rawUrlTree,
                            rawUrl: c,
                            extras: S,
                            resolve: Nr,
                            reject: Dr,
                            promise: Fr,
                            currentSnapshot: this.routerState.snapshot,
                            currentRouterState: this.routerState
                        }), Fr.catch(Js => Promise.reject(Js))
                    }
                    setBrowserUrl(c, y) {
                        const D = this.urlSerializer.serialize(c),
                            S = Object.assign(Object.assign({}, y.extras.state), this.generateNgRouterState(y.id, y.targetPageId));
                        this.location.isCurrentPathEqualTo(D) || y.extras.replaceUrl ? this.location.replaceState(D, "", S) : this.location.go(D, "", S)
                    }
                    restoreHistory(c, y = !1) {
                        var D, S;
                        if ("computed" === this.canceledNavigationResolution) {
                            const x = this.currentPageId - c.targetPageId;
                            "popstate" !== c.source && "eager" !== this.urlUpdateStrategy && this.currentUrlTree !== (null === (D = this.currentNavigation) || void 0 === D ? void 0 : D.finalUrl) || 0 === x ? this.currentUrlTree === (null === (S = this.currentNavigation) || void 0 === S ? void 0 : S.finalUrl) && 0 === x && (this.resetState(c), this.browserUrlTree = c.currentUrlTree, this.resetUrlToCurrentUrlTree()) : this.location.historyGo(x)
                        } else "replace" === this.canceledNavigationResolution && (y && this.resetState(c), this.resetUrlToCurrentUrlTree())
                    }
                    resetState(c) {
                        this.routerState = c.currentRouterState, this.currentUrlTree = c.currentUrlTree, this.rawUrlTree = this.urlHandlingStrategy.merge(this.currentUrlTree, c.rawUrl)
                    }
                    resetUrlToCurrentUrlTree() {
                        this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree), "", this.generateNgRouterState(this.lastSuccessfulId, this.currentPageId))
                    }
                    cancelNavigationTransition(c, y) {
                        const D = new dn(c.id, this.serializeUrl(c.extractedUrl), y);
                        this.triggerEvent(D), c.resolve(!1)
                    }
                    generateNgRouterState(c, y) {
                        return "computed" === this.canceledNavigationResolution ? {
                            navigationId: c,
                            \u0275routerPageId: y
                        } : {
                            navigationId: c
                        }
                    }
                }
                return g.\u0275fac = function(c) {
                    return new(c || g)(m.LFG(m.DyG), m.LFG(tt), m.LFG(vs), m.LFG(A.Ye), m.LFG(m.zs3), m.LFG(m.v3s), m.LFG(m.Sil), m.LFG(void 0))
                }, g.\u0275prov = m.Yz7({
                    token: g,
                    factory: g.\u0275fac
                }), g
            })();

            function Jr(g) {
                return "imperative" !== g
            }
            let cr = (() => {
                    class g {
                        constructor(c, y, D, S, x) {
                            this.router = c, this.route = y, this.commands = [], this.onChanges = new wt.xQ, null == D && S.setAttribute(x.nativeElement, "tabindex", "0")
                        }
                        ngOnChanges(c) {
                            this.onChanges.next(this)
                        }
                        set routerLink(c) {
                            this.commands = null != c ? Array.isArray(c) ? c : [c] : []
                        }
                        onClick() {
                            const c = {
                                skipLocationChange: bs(this.skipLocationChange),
                                replaceUrl: bs(this.replaceUrl),
                                state: this.state
                            };
                            return this.router.navigateByUrl(this.urlTree, c), !0
                        }
                        get urlTree() {
                            return this.router.createUrlTree(this.commands, {
                                relativeTo: void 0 !== this.relativeTo ? this.relativeTo : this.route,
                                queryParams: this.queryParams,
                                fragment: this.fragment,
                                queryParamsHandling: this.queryParamsHandling,
                                preserveFragment: bs(this.preserveFragment)
                            })
                        }
                    }
                    return g.\u0275fac = function(c) {
                        return new(c || g)(m.Y36(hn), m.Y36(Gr), m.$8M("tabindex"), m.Y36(m.Qsj), m.Y36(m.SBq))
                    }, g.\u0275dir = m.lG2({
                        type: g,
                        selectors: [
                            ["", "routerLink", "", 5, "a", 5, "area"]
                        ],
                        hostBindings: function(c, y) {
                            1 & c && m.NdJ("click", function() {
                                return y.onClick()
                            })
                        },
                        inputs: {
                            routerLink: "routerLink",
                            queryParams: "queryParams",
                            fragment: "fragment",
                            queryParamsHandling: "queryParamsHandling",
                            preserveFragment: "preserveFragment",
                            skipLocationChange: "skipLocationChange",
                            replaceUrl: "replaceUrl",
                            state: "state",
                            relativeTo: "relativeTo"
                        },
                        features: [m.TTD]
                    }), g
                })(),
                Ds = (() => {
                    class g {
                        constructor(c, y, D) {
                            this.router = c, this.route = y, this.locationStrategy = D, this.commands = [], this.onChanges = new wt.xQ, this.subscription = c.events.subscribe(S => {
                                S instanceof Vt && this.updateTargetUrlAndHref()
                            })
                        }
                        set routerLink(c) {
                            this.commands = null != c ? Array.isArray(c) ? c : [c] : []
                        }
                        ngOnChanges(c) {
                            this.updateTargetUrlAndHref(), this.onChanges.next(this)
                        }
                        ngOnDestroy() {
                            this.subscription.unsubscribe()
                        }
                        onClick(c, y, D, S, x) {
                            if (0 !== c || y || D || S || x || "string" == typeof this.target && "_self" != this.target) return !0;
                            const j = {
                                skipLocationChange: bs(this.skipLocationChange),
                                replaceUrl: bs(this.replaceUrl),
                                state: this.state
                            };
                            return this.router.navigateByUrl(this.urlTree, j), !1
                        }
                        updateTargetUrlAndHref() {
                            this.href = this.locationStrategy.prepareExternalUrl(this.router.serializeUrl(this.urlTree))
                        }
                        get urlTree() {
                            return this.router.createUrlTree(this.commands, {
                                relativeTo: void 0 !== this.relativeTo ? this.relativeTo : this.route,
                                queryParams: this.queryParams,
                                fragment: this.fragment,
                                queryParamsHandling: this.queryParamsHandling,
                                preserveFragment: bs(this.preserveFragment)
                            })
                        }
                    }
                    return g.\u0275fac = function(c) {
                        return new(c || g)(m.Y36(hn), m.Y36(Gr), m.Y36(A.S$))
                    }, g.\u0275dir = m.lG2({
                        type: g,
                        selectors: [
                            ["a", "routerLink", ""],
                            ["area", "routerLink", ""]
                        ],
                        hostVars: 2,
                        hostBindings: function(c, y) {
                            1 & c && m.NdJ("click", function(S) {
                                return y.onClick(S.button, S.ctrlKey, S.shiftKey, S.altKey, S.metaKey)
                            }), 2 & c && (m.Ikx("href", y.href, m.LSH), m.uIk("target", y.target))
                        },
                        inputs: {
                            routerLink: "routerLink",
                            target: "target",
                            queryParams: "queryParams",
                            fragment: "fragment",
                            queryParamsHandling: "queryParamsHandling",
                            preserveFragment: "preserveFragment",
                            skipLocationChange: "skipLocationChange",
                            replaceUrl: "replaceUrl",
                            state: "state",
                            relativeTo: "relativeTo"
                        },
                        features: [m.TTD]
                    }), g
                })();

            function bs(g) {
                return "" === g || !!g
            }
            let ws = (() => {
                    class g {
                        constructor(c, y, D, S, x, j) {
                            this.router = c, this.element = y, this.renderer = D, this.cdr = S, this.link = x, this.linkWithHref = j, this.classes = [], this.isActive = !1, this.routerLinkActiveOptions = {
                                exact: !1
                            }, this.routerEventsSubscription = c.events.subscribe(se => {
                                se instanceof Vt && this.update()
                            })
                        }
                        ngAfterContentInit() {
                            (0, me.of)(this.links.changes, this.linksWithHrefs.changes, (0, me.of)(null)).pipe((0, be.J)()).subscribe(c => {
                                this.update(), this.subscribeToEachLinkOnChanges()
                            })
                        }
                        subscribeToEachLinkOnChanges() {
                            var c;
                            null === (c = this.linkInputChangesSubscription) || void 0 === c || c.unsubscribe();
                            const y = [...this.links.toArray(), ...this.linksWithHrefs.toArray(), this.link, this.linkWithHref].filter(D => !!D).map(D => D.onChanges);
                            this.linkInputChangesSubscription = (0, Be.D)(y).pipe((0, be.J)()).subscribe(D => {
                                this.isActive !== this.isLinkActive(this.router)(D) && this.update()
                            })
                        }
                        set routerLinkActive(c) {
                            const y = Array.isArray(c) ? c : c.split(" ");
                            this.classes = y.filter(D => !!D)
                        }
                        ngOnChanges(c) {
                            this.update()
                        }
                        ngOnDestroy() {
                            var c;
                            this.routerEventsSubscription.unsubscribe(), null === (c = this.linkInputChangesSubscription) || void 0 === c || c.unsubscribe()
                        }
                        update() {
                            !this.links || !this.linksWithHrefs || !this.router.navigated || Promise.resolve().then(() => {
                                const c = this.hasActiveLinks();
                                this.isActive !== c && (this.isActive = c, this.cdr.markForCheck(), this.classes.forEach(y => {
                                    c ? this.renderer.addClass(this.element.nativeElement, y) : this.renderer.removeClass(this.element.nativeElement, y)
                                }))
                            })
                        }
                        isLinkActive(c) {
                            const y = function(g) {
                                return !!g.paths
                            }(this.routerLinkActiveOptions) ? this.routerLinkActiveOptions : this.routerLinkActiveOptions.exact || !1;
                            return D => c.isActive(D.urlTree, y)
                        }
                        hasActiveLinks() {
                            const c = this.isLinkActive(this.router);
                            return this.link && c(this.link) || this.linkWithHref && c(this.linkWithHref) || this.links.some(c) || this.linksWithHrefs.some(c)
                        }
                    }
                    return g.\u0275fac = function(c) {
                        return new(c || g)(m.Y36(hn), m.Y36(m.SBq), m.Y36(m.Qsj), m.Y36(m.sBO), m.Y36(cr, 8), m.Y36(Ds, 8))
                    }, g.\u0275dir = m.lG2({
                        type: g,
                        selectors: [
                            ["", "routerLinkActive", ""]
                        ],
                        contentQueries: function(c, y, D) {
                            if (1 & c && (m.Suo(D, cr, 5), m.Suo(D, Ds, 5)), 2 & c) {
                                let S;
                                m.iGM(S = m.CRH()) && (y.links = S), m.iGM(S = m.CRH()) && (y.linksWithHrefs = S)
                            }
                        },
                        inputs: {
                            routerLinkActiveOptions: "routerLinkActiveOptions",
                            routerLinkActive: "routerLinkActive"
                        },
                        exportAs: ["routerLinkActive"],
                        features: [m.TTD]
                    }), g
                })(),
                Xr = (() => {
                    class g {
                        constructor(c, y, D, S, x) {
                            this.parentContexts = c, this.location = y, this.resolver = D, this.changeDetector = x, this.activated = null, this._activatedRoute = null, this.activateEvents = new m.vpe, this.deactivateEvents = new m.vpe, this.name = S || at, c.onChildOutletCreated(this.name, this)
                        }
                        ngOnDestroy() {
                            this.parentContexts.onChildOutletDestroyed(this.name)
                        }
                        ngOnInit() {
                            if (!this.activated) {
                                const c = this.parentContexts.getContext(this.name);
                                c && c.route && (c.attachRef ? this.attach(c.attachRef, c.route) : this.activateWith(c.route, c.resolver || null))
                            }
                        }
                        get isActivated() {
                            return !!this.activated
                        }
                        get component() {
                            if (!this.activated) throw new Error("Outlet is not activated");
                            return this.activated.instance
                        }
                        get activatedRoute() {
                            if (!this.activated) throw new Error("Outlet is not activated");
                            return this._activatedRoute
                        }
                        get activatedRouteData() {
                            return this._activatedRoute ? this._activatedRoute.snapshot.data : {}
                        }
                        detach() {
                            if (!this.activated) throw new Error("Outlet is not activated");
                            this.location.detach();
                            const c = this.activated;
                            return this.activated = null, this._activatedRoute = null, c
                        }
                        attach(c, y) {
                            this.activated = c, this._activatedRoute = y, this.location.insert(c.hostView)
                        }
                        deactivate() {
                            if (this.activated) {
                                const c = this.component;
                                this.activated.destroy(), this.activated = null, this._activatedRoute = null, this.deactivateEvents.emit(c)
                            }
                        }
                        activateWith(c, y) {
                            if (this.isActivated) throw new Error("Cannot activate an already activated outlet");
                            this._activatedRoute = c;
                            const x = (y = y || this.resolver).resolveComponentFactory(c._futureSnapshot.routeConfig.component),
                                j = this.parentContexts.getOrCreateContext(this.name).children,
                                se = new Wo(c, j, this.location.injector);
                            this.activated = this.location.createComponent(x, this.location.length, se), this.changeDetector.markForCheck(), this.activateEvents.emit(this.activated.instance)
                        }
                    }
                    return g.\u0275fac = function(c) {
                        return new(c || g)(m.Y36(vs), m.Y36(m.s_b), m.Y36(m._Vd), m.$8M("name"), m.Y36(m.sBO))
                    }, g.\u0275dir = m.lG2({
                        type: g,
                        selectors: [
                            ["router-outlet"]
                        ],
                        outputs: {
                            activateEvents: "activate",
                            deactivateEvents: "deactivate"
                        },
                        exportAs: ["outlet"]
                    }), g
                })();
            class Wo {
                constructor(d, c, y) {
                    this.route = d, this.childContexts = c, this.parent = y
                }
                get(d, c) {
                    return d === Gr ? this.route : d === vs ? this.childContexts : this.parent.get(d, c)
                }
            }
            class es {}
            class co {
                preload(d, c) {
                    return (0, me.of)(null)
                }
            }
            let fo = (() => {
                    class g {
                        constructor(c, y, D, S, x) {
                            this.router = c, this.injector = S, this.preloadingStrategy = x, this.loader = new xr(y, D, Oe => c.triggerEvent(new fn(Oe)), Oe => c.triggerEvent(new tr(Oe)))
                        }
                        setUpPreloading() {
                            this.subscription = this.router.events.pipe((0, Ut.h)(c => c instanceof Vt), (0, ye.b)(() => this.preload())).subscribe(() => {})
                        }
                        preload() {
                            const c = this.injector.get(m.h0i);
                            return this.processRoutes(c, this.router.config)
                        }
                        ngOnDestroy() {
                            this.subscription && this.subscription.unsubscribe()
                        }
                        processRoutes(c, y) {
                            const D = [];
                            for (const S of y)
                                if (S.loadChildren && !S.canLoad && S._loadedConfig) {
                                    const x = S._loadedConfig;
                                    D.push(this.processRoutes(x.module, x.routes))
                                } else S.loadChildren && !S.canLoad ? D.push(this.preloadConfig(c, S)) : S.children && D.push(this.processRoutes(c, S.children));
                            return (0, Be.D)(D).pipe((0, be.J)(), (0, ne.U)(S => {}))
                        }
                        preloadConfig(c, y) {
                            return this.preloadingStrategy.preload(y, () => (y._loadedConfig ? (0, me.of)(y._loadedConfig) : this.loader.load(c.injector, y)).pipe((0, le.zg)(S => (y._loadedConfig = S, this.processRoutes(S.module, S.routes)))))
                        }
                    }
                    return g.\u0275fac = function(c) {
                        return new(c || g)(m.LFG(hn), m.LFG(m.v3s), m.LFG(m.Sil), m.LFG(m.zs3), m.LFG(es))
                    }, g.\u0275prov = m.Yz7({
                        token: g,
                        factory: g.\u0275fac
                    }), g
                })(),
                ho = (() => {
                    class g {
                        constructor(c, y, D = {}) {
                            this.router = c, this.viewportScroller = y, this.options = D, this.lastId = 0, this.lastSource = "imperative", this.restoredId = 0, this.store = {}, D.scrollPositionRestoration = D.scrollPositionRestoration || "disabled", D.anchorScrolling = D.anchorScrolling || "disabled"
                        }
                        init() {
                            "disabled" !== this.options.scrollPositionRestoration && this.viewportScroller.setHistoryScrollRestoration("manual"), this.routerEventsSubscription = this.createScrollEvents(), this.scrollEventsSubscription = this.consumeScrollEvents()
                        }
                        createScrollEvents() {
                            return this.router.events.subscribe(c => {
                                c instanceof Ke ? (this.store[this.lastId] = this.viewportScroller.getScrollPosition(), this.lastSource = c.navigationTrigger, this.restoredId = c.restoredState ? c.restoredState.navigationId : 0) : c instanceof Vt && (this.lastId = c.id, this.scheduleScrollEvent(c, this.router.parseUrl(c.urlAfterRedirects).fragment))
                            })
                        }
                        consumeScrollEvents() {
                            return this.router.events.subscribe(c => {
                                c instanceof jr && (c.position ? "top" === this.options.scrollPositionRestoration ? this.viewportScroller.scrollToPosition([0, 0]) : "enabled" === this.options.scrollPositionRestoration && this.viewportScroller.scrollToPosition(c.position) : c.anchor && "enabled" === this.options.anchorScrolling ? this.viewportScroller.scrollToAnchor(c.anchor) : "disabled" !== this.options.scrollPositionRestoration && this.viewportScroller.scrollToPosition([0, 0]))
                            })
                        }
                        scheduleScrollEvent(c, y) {
                            this.router.triggerEvent(new jr(c, "popstate" === this.lastSource ? this.store[this.restoredId] : null, y))
                        }
                        ngOnDestroy() {
                            this.routerEventsSubscription && this.routerEventsSubscription.unsubscribe(), this.scrollEventsSubscription && this.scrollEventsSubscription.unsubscribe()
                        }
                    }
                    return g.\u0275fac = function(c) {
                        return new(c || g)(m.LFG(hn), m.LFG(A.EM), m.LFG(void 0))
                    }, g.\u0275prov = m.Yz7({
                        token: g,
                        factory: g.\u0275fac
                    }), g
                })();
            const vr = new m.OlP("ROUTER_CONFIGURATION"),
                Nn = new m.OlP("ROUTER_FORROOT_GUARD"),
                po = [A.Ye, {
                    provide: tt,
                    useClass: Br
                }, {
                    provide: hn,
                    useFactory: function(g, d, c, y, D, S, x, j = {}, se, Oe) {
                        const Ct = new hn(null, g, d, c, y, D, S, ds(x));
                        return se && (Ct.urlHandlingStrategy = se), Oe && (Ct.routeReuseStrategy = Oe),
                            function(g, d) {
                                g.errorHandler && (d.errorHandler = g.errorHandler), g.malformedUriErrorHandler && (d.malformedUriErrorHandler = g.malformedUriErrorHandler), g.onSameUrlNavigation && (d.onSameUrlNavigation = g.onSameUrlNavigation), g.paramsInheritanceStrategy && (d.paramsInheritanceStrategy = g.paramsInheritanceStrategy), g.relativeLinkResolution && (d.relativeLinkResolution = g.relativeLinkResolution), g.urlUpdateStrategy && (d.urlUpdateStrategy = g.urlUpdateStrategy)
                            }(j, Ct), j.enableTracing && Ct.events.subscribe(Ye => {
                                var Lt, $e;
                                null === (Lt = console.group) || void 0 === Lt || Lt.call(console, `Router Event: ${Ye.constructor.name}`), console.log(Ye.toString()), console.log(Ye), null === ($e = console.groupEnd) || void 0 === $e || $e.call(console)
                            }), Ct
                    },
                    deps: [tt, vs, A.Ye, m.zs3, m.v3s, m.Sil, lo, vr, [class {}, new m.FiY],
                        [class {}, new m.FiY]
                    ]
                }, vs, {
                    provide: Gr,
                    useFactory: function(g) {
                        return g.routerState.root
                    },
                    deps: [hn]
                }, {
                    provide: m.v3s,
                    useClass: m.EAV
                }, fo, co, class {
                    preload(d, c) {
                        return c().pipe(Le(() => (0, me.of)(null)))
                    }
                }, {
                    provide: vr,
                    useValue: {
                        enableTracing: !1
                    }
                }];

            function go() {
                return new m.PXZ("Router", hn)
            }
            let va = (() => {
                class g {
                    constructor(c, y) {}
                    static forRoot(c, y) {
                        return {
                            ngModule: g,
                            providers: [po, mo(c), {
                                    provide: Nn,
                                    useFactory: Oi,
                                    deps: [
                                        [hn, new m.FiY, new m.tp0]
                                    ]
                                }, {
                                    provide: vr,
                                    useValue: y || {}
                                }, {
                                    provide: A.S$,
                                    useFactory: Yo,
                                    deps: [A.lw, [new m.tBr(A.mr), new m.FiY], vr]
                                }, {
                                    provide: ho,
                                    useFactory: Da,
                                    deps: [hn, A.EM, vr]
                                }, {
                                    provide: es,
                                    useExisting: y && y.preloadingStrategy ? y.preloadingStrategy : co
                                }, {
                                    provide: m.PXZ,
                                    multi: !0,
                                    useFactory: go
                                },
                                [Ts, {
                                    provide: m.ip1,
                                    multi: !0,
                                    useFactory: ba,
                                    deps: [Ts]
                                }, {
                                    provide: Qo,
                                    useFactory: Zo,
                                    deps: [Ts]
                                }, {
                                    provide: m.tb,
                                    multi: !0,
                                    useExisting: Qo
                                }]
                            ]
                        }
                    }
                    static forChild(c) {
                        return {
                            ngModule: g,
                            providers: [mo(c)]
                        }
                    }
                }
                return g.\u0275fac = function(c) {
                    return new(c || g)(m.LFG(Nn, 8), m.LFG(hn, 8))
                }, g.\u0275mod = m.oAB({
                    type: g
                }), g.\u0275inj = m.cJS({}), g
            })();

            function Da(g, d, c) {
                return c.scrollOffset && d.setOffset(c.scrollOffset), new ho(g, d, c)
            }

            function Yo(g, d, c = {}) {
                return c.useHash ? new A.Do(g, d) : new A.b0(g, d)
            }

            function Oi(g) {
                return "guarded"
            }

            function mo(g) {
                return [{
                    provide: m.deG,
                    multi: !0,
                    useValue: g
                }, {
                    provide: lo,
                    multi: !0,
                    useValue: g
                }]
            }
            let Ts = (() => {
                class g {
                    constructor(c) {
                        this.injector = c, this.initNavigation = !1, this.destroyed = !1, this.resultOfPreactivationDone = new wt.xQ
                    }
                    appInitializer() {
                        return this.injector.get(A.V_, Promise.resolve(null)).then(() => {
                            if (this.destroyed) return Promise.resolve(!0);
                            let y = null;
                            const D = new Promise(j => y = j),
                                S = this.injector.get(hn),
                                x = this.injector.get(vr);
                            return "disabled" === x.initialNavigation ? (S.setUpLocationChangeListener(), y(!0)) : "enabled" === x.initialNavigation || "enabledBlocking" === x.initialNavigation ? (S.hooks.afterPreactivation = () => this.initNavigation ? (0, me.of)(null) : (this.initNavigation = !0, y(!0), this.resultOfPreactivationDone), S.initialNavigation()) : y(!0), D
                        })
                    }
                    bootstrapListener(c) {
                        const y = this.injector.get(vr),
                            D = this.injector.get(fo),
                            S = this.injector.get(ho),
                            x = this.injector.get(hn),
                            j = this.injector.get(m.z2F);
                        c === j.components[0] && (("enabledNonBlocking" === y.initialNavigation || void 0 === y.initialNavigation) && x.initialNavigation(), D.setUpPreloading(), S.init(), x.resetRootComponentType(j.componentTypes[0]), this.resultOfPreactivationDone.next(null), this.resultOfPreactivationDone.complete())
                    }
                    ngOnDestroy() {
                        this.destroyed = !0
                    }
                }
                return g.\u0275fac = function(c) {
                    return new(c || g)(m.LFG(m.zs3))
                }, g.\u0275prov = m.Yz7({
                    token: g,
                    factory: g.\u0275fac
                }), g
            })();

            function ba(g) {
                return g.appInitializer.bind(g)
            }

            function Zo(g) {
                return g.bootstrapListener.bind(g)
            }
            const Qo = new m.OlP("Router Initializer")
        },
        5469: (We, fe, O) => {
            "use strict";
            O.d(fe, {
                Zw: () => q,
                aw: () => Vr,
                X$: () => us,
                sK: () => er
            });
            var A = O(3018),
                m = O(7574);

            function he(Ee) {
                return !!Ee && (Ee instanceof m.y || "function" == typeof Ee.lift && "function" == typeof Ee.subscribe)
            }
            var oe = O(5917),
                Z = O(5758),
                Y = O(8071),
                re = O(1439),
                ee = O(5257),
                Q = O(7349),
                U = O(8002),
                z = O(4612),
                te = O(3190);
            class q {}
            let Ae = (() => {
                class Ee extends q {
                    getTranslation(k) {
                        return (0, oe.of)({})
                    }
                }
                return Ee.\u0275fac = function() {
                    let it;
                    return function(X) {
                        return (it || (it = A.n5z(Ee)))(X || Ee)
                    }
                }(), Ee.\u0275prov = A.Yz7({
                    token: Ee,
                    factory: Ee.\u0275fac
                }), Ee
            })();
            class ge {}
            let ue = (() => {
                class Ee {
                    handle(k) {
                        return k.key
                    }
                }
                return Ee.\u0275fac = function(k) {
                    return new(k || Ee)
                }, Ee.\u0275prov = A.Yz7({
                    token: Ee,
                    factory: Ee.\u0275fac
                }), Ee
            })();

            function Be(Ee, it) {
                if (Ee === it) return !0;
                if (null === Ee || null === it) return !1;
                if (Ee != Ee && it != it) return !0;
                let de, Te, je, k = typeof Ee;
                if (k == typeof it && "object" == k) {
                    if (!Array.isArray(Ee)) {
                        if (Array.isArray(it)) return !1;
                        for (Te in je = Object.create(null), Ee) {
                            if (!Be(Ee[Te], it[Te])) return !1;
                            je[Te] = !0
                        }
                        for (Te in it)
                            if (!(Te in je) && void 0 !== it[Te]) return !1;
                        return !0
                    }
                    if (!Array.isArray(it)) return !1;
                    if ((de = Ee.length) == it.length) {
                        for (Te = 0; Te < de; Te++)
                            if (!Be(Ee[Te], it[Te])) return !1;
                        return !0
                    }
                }
                return !1
            }

            function me(Ee) {
                return null != Ee
            }

            function rt(Ee) {
                return Ee && "object" == typeof Ee && !Array.isArray(Ee)
            }

            function on(Ee, it) {
                let k = Object.assign({}, Ee);
                return rt(Ee) && rt(it) && Object.keys(it).forEach(X => {
                    rt(it[X]) ? X in Ee ? k[X] = on(Ee[X], it[X]) : Object.assign(k, {
                        [X]: it[X]
                    }) : Object.assign(k, {
                        [X]: it[X]
                    })
                }), k
            }
            class Jt {}
            let xe = (() => {
                class Ee extends Jt {
                    constructor() {
                        super(...arguments), this.templateMatcher = /{{\s?([^{}\s]*)\s?}}/g
                    }
                    interpolate(k, X) {
                        let de;
                        return de = "string" == typeof k ? this.interpolateString(k, X) : "function" == typeof k ? this.interpolateFunction(k, X) : k, de
                    }
                    getValue(k, X) {
                        let de = "string" == typeof X ? X.split(".") : [X];
                        X = "";
                        do {
                            X += de.shift(), !me(k) || !me(k[X]) || "object" != typeof k[X] && de.length ? de.length ? X += "." : k = void 0 : (k = k[X], X = "")
                        } while (de.length);
                        return k
                    }
                    interpolateFunction(k, X) {
                        return k(X)
                    }
                    interpolateString(k, X) {
                        return X ? k.replace(this.templateMatcher, (de, Te) => {
                            let je = this.getValue(X, Te);
                            return me(je) ? je : de
                        }) : k
                    }
                }
                return Ee.\u0275fac = function() {
                    let it;
                    return function(X) {
                        return (it || (it = A.n5z(Ee)))(X || Ee)
                    }
                }(), Ee.\u0275prov = A.Yz7({
                    token: Ee,
                    factory: Ee.\u0275fac
                }), Ee
            })();
            class xt {}
            let wt = (() => {
                class Ee extends xt {
                    compile(k, X) {
                        return k
                    }
                    compileTranslations(k, X) {
                        return k
                    }
                }
                return Ee.\u0275fac = function() {
                    let it;
                    return function(X) {
                        return (it || (it = A.n5z(Ee)))(X || Ee)
                    }
                }(), Ee.\u0275prov = A.Yz7({
                    token: Ee,
                    factory: Ee.\u0275fac
                }), Ee
            })();
            class ce {
                constructor() {
                    this.currentLang = this.defaultLang, this.translations = {}, this.langs = [], this.onTranslationChange = new A.vpe, this.onLangChange = new A.vpe, this.onDefaultLangChange = new A.vpe
                }
            }
            const Me = new A.OlP("USE_STORE"),
                ke = new A.OlP("USE_DEFAULT_LANG"),
                Ve = new A.OlP("DEFAULT_LANGUAGE"),
                Le = new A.OlP("USE_EXTEND");
            let er = (() => {
                    class Ee {
                        constructor(k, X, de, Te, je, Ht = !0, pt = !1, Wt = !1, Gt) {
                            this.store = k, this.currentLoader = X, this.compiler = de, this.parser = Te, this.missingTranslationHandler = je, this.useDefaultLang = Ht, this.isolate = pt, this.extend = Wt, this.pending = !1, this._onTranslationChange = new A.vpe, this._onLangChange = new A.vpe, this._onDefaultLangChange = new A.vpe, this._langs = [], this._translations = {}, this._translationRequests = {}, Gt && this.setDefaultLang(Gt)
                        }
                        get onTranslationChange() {
                            return this.isolate ? this._onTranslationChange : this.store.onTranslationChange
                        }
                        get onLangChange() {
                            return this.isolate ? this._onLangChange : this.store.onLangChange
                        }
                        get onDefaultLangChange() {
                            return this.isolate ? this._onDefaultLangChange : this.store.onDefaultLangChange
                        }
                        get defaultLang() {
                            return this.isolate ? this._defaultLang : this.store.defaultLang
                        }
                        set defaultLang(k) {
                            this.isolate ? this._defaultLang = k : this.store.defaultLang = k
                        }
                        get currentLang() {
                            return this.isolate ? this._currentLang : this.store.currentLang
                        }
                        set currentLang(k) {
                            this.isolate ? this._currentLang = k : this.store.currentLang = k
                        }
                        get langs() {
                            return this.isolate ? this._langs : this.store.langs
                        }
                        set langs(k) {
                            this.isolate ? this._langs = k : this.store.langs = k
                        }
                        get translations() {
                            return this.isolate ? this._translations : this.store.translations
                        }
                        set translations(k) {
                            this.isolate ? this._translations = k : this.store.translations = k
                        }
                        setDefaultLang(k) {
                            if (k === this.defaultLang) return;
                            let X = this.retrieveTranslations(k);
                            void 0 !== X ? (null == this.defaultLang && (this.defaultLang = k), X.pipe((0, ee.q)(1)).subscribe(de => {
                                this.changeDefaultLang(k)
                            })) : this.changeDefaultLang(k)
                        }
                        getDefaultLang() {
                            return this.defaultLang
                        }
                        use(k) {
                            if (k === this.currentLang) return (0, oe.of)(this.translations[k]);
                            let X = this.retrieveTranslations(k);
                            return void 0 !== X ? (this.currentLang || (this.currentLang = k), X.pipe((0, ee.q)(1)).subscribe(de => {
                                this.changeLang(k)
                            }), X) : (this.changeLang(k), (0, oe.of)(this.translations[k]))
                        }
                        retrieveTranslations(k) {
                            let X;
                            return (void 0 === this.translations[k] || this.extend) && (this._translationRequests[k] = this._translationRequests[k] || this.getTranslation(k), X = this._translationRequests[k]), X
                        }
                        getTranslation(k) {
                            this.pending = !0;
                            const X = this.currentLoader.getTranslation(k).pipe((0, Q.d)(1), (0, ee.q)(1));
                            return this.loadingTranslations = X.pipe((0, U.U)(de => this.compiler.compileTranslations(de, k)), (0, Q.d)(1), (0, ee.q)(1)), this.loadingTranslations.subscribe({
                                next: de => {
                                    this.translations[k] = this.extend && this.translations[k] ? Object.assign(Object.assign({}, de), this.translations[k]) : de, this.updateLangs(), this.pending = !1
                                },
                                error: de => {
                                    this.pending = !1
                                }
                            }), X
                        }
                        setTranslation(k, X, de = !1) {
                            X = this.compiler.compileTranslations(X, k), this.translations[k] = (de || this.extend) && this.translations[k] ? on(this.translations[k], X) : X, this.updateLangs(), this.onTranslationChange.emit({
                                lang: k,
                                translations: this.translations[k]
                            })
                        }
                        getLangs() {
                            return this.langs
                        }
                        addLangs(k) {
                            k.forEach(X => {
                                -1 === this.langs.indexOf(X) && this.langs.push(X)
                            })
                        }
                        updateLangs() {
                            this.addLangs(Object.keys(this.translations))
                        }
                        getParsedResult(k, X, de) {
                            let Te;
                            if (X instanceof Array) {
                                let je = {},
                                    Ht = !1;
                                for (let pt of X) je[pt] = this.getParsedResult(k, pt, de), he(je[pt]) && (Ht = !0);
                                if (Ht) {
                                    const pt = X.map(Wt => he(je[Wt]) ? je[Wt] : (0, oe.of)(je[Wt]));
                                    return (0, Z.D)(pt).pipe((0, U.U)(Wt => {
                                        let Gt = {};
                                        return Wt.forEach((cn, Kt) => {
                                            Gt[X[Kt]] = cn
                                        }), Gt
                                    }))
                                }
                                return je
                            }
                            if (k && (Te = this.parser.interpolate(this.parser.getValue(k, X), de)), void 0 === Te && null != this.defaultLang && this.defaultLang !== this.currentLang && this.useDefaultLang && (Te = this.parser.interpolate(this.parser.getValue(this.translations[this.defaultLang], X), de)), void 0 === Te) {
                                let je = {
                                    key: X,
                                    translateService: this
                                };
                                void 0 !== de && (je.interpolateParams = de), Te = this.missingTranslationHandler.handle(je)
                            }
                            return void 0 !== Te ? Te : X
                        }
                        get(k, X) {
                            if (!me(k) || !k.length) throw new Error('Parameter "key" required');
                            if (this.pending) return this.loadingTranslations.pipe((0, z.b)(de => he(de = this.getParsedResult(de, k, X)) ? de : (0, oe.of)(de))); {
                                let de = this.getParsedResult(this.translations[this.currentLang], k, X);
                                return he(de) ? de : (0, oe.of)(de)
                            }
                        }
                        getStreamOnTranslationChange(k, X) {
                            if (!me(k) || !k.length) throw new Error('Parameter "key" required');
                            return (0, Y.z)((0, re.P)(() => this.get(k, X)), this.onTranslationChange.pipe((0, te.w)(de => {
                                const Te = this.getParsedResult(de.translations, k, X);
                                return "function" == typeof Te.subscribe ? Te : (0, oe.of)(Te)
                            })))
                        }
                        stream(k, X) {
                            if (!me(k) || !k.length) throw new Error('Parameter "key" required');
                            return (0, Y.z)((0, re.P)(() => this.get(k, X)), this.onLangChange.pipe((0, te.w)(de => {
                                const Te = this.getParsedResult(de.translations, k, X);
                                return he(Te) ? Te : (0, oe.of)(Te)
                            })))
                        }
                        instant(k, X) {
                            if (!me(k) || !k.length) throw new Error('Parameter "key" required');
                            let de = this.getParsedResult(this.translations[this.currentLang], k, X);
                            if (he(de)) {
                                if (k instanceof Array) {
                                    let Te = {};
                                    return k.forEach((je, Ht) => {
                                        Te[k[Ht]] = k[Ht]
                                    }), Te
                                }
                                return k
                            }
                            return de
                        }
                        set(k, X, de = this.currentLang) {
                            this.translations[de][k] = this.compiler.compile(X, de), this.updateLangs(), this.onTranslationChange.emit({
                                lang: de,
                                translations: this.translations[de]
                            })
                        }
                        changeLang(k) {
                            this.currentLang = k, this.onLangChange.emit({
                                lang: k,
                                translations: this.translations[k]
                            }), null == this.defaultLang && this.changeDefaultLang(k)
                        }
                        changeDefaultLang(k) {
                            this.defaultLang = k, this.onDefaultLangChange.emit({
                                lang: k,
                                translations: this.translations[k]
                            })
                        }
                        reloadLang(k) {
                            return this.resetLang(k), this.getTranslation(k)
                        }
                        resetLang(k) {
                            this._translationRequests[k] = void 0, this.translations[k] = void 0
                        }
                        getBrowserLang() {
                            if ("undefined" == typeof window || void 0 === window.navigator) return;
                            let k = window.navigator.languages ? window.navigator.languages[0] : null;
                            return k = k || window.navigator.language || window.navigator.browserLanguage || window.navigator.userLanguage, void 0 !== k ? (-1 !== k.indexOf("-") && (k = k.split("-")[0]), -1 !== k.indexOf("_") && (k = k.split("_")[0]), k) : void 0
                        }
                        getBrowserCultureLang() {
                            if ("undefined" == typeof window || void 0 === window.navigator) return;
                            let k = window.navigator.languages ? window.navigator.languages[0] : null;
                            return k = k || window.navigator.language || window.navigator.browserLanguage || window.navigator.userLanguage, k
                        }
                    }
                    return Ee.\u0275fac = function(k) {
                        return new(k || Ee)(A.LFG(ce), A.LFG(q), A.LFG(xt), A.LFG(Jt), A.LFG(ge), A.LFG(ke), A.LFG(Me), A.LFG(Le), A.LFG(Ve))
                    }, Ee.\u0275prov = A.Yz7({
                        token: Ee,
                        factory: Ee.\u0275fac
                    }), Ee
                })(),
                us = (() => {
                    class Ee {
                        constructor(k, X) {
                            this.translate = k, this._ref = X, this.value = ""
                        }
                        updateValue(k, X, de) {
                            let Te = je => {
                                this.value = void 0 !== je ? je : k, this.lastKey = k, this._ref.markForCheck()
                            };
                            if (de) {
                                let je = this.translate.getParsedResult(de, k, X);
                                he(je.subscribe) ? je.subscribe(Te) : Te(je)
                            }
                            this.translate.get(k, X).subscribe(Te)
                        }
                        transform(k, ...X) {
                            if (!k || !k.length) return k;
                            if (Be(k, this.lastKey) && Be(X, this.lastParams)) return this.value;
                            let de;
                            if (me(X[0]) && X.length)
                                if ("string" == typeof X[0] && X[0].length) {
                                    let Te = X[0].replace(/(\')?([a-zA-Z0-9_]+)(\')?(\s)?:/g, '"$2":').replace(/:(\s)?(\')(.*?)(\')/g, ':"$3"');
                                    try {
                                        de = JSON.parse(Te)
                                    } catch (je) {
                                        throw new SyntaxError(`Wrong parameter in TranslatePipe. Expected a valid Object, received: ${X[0]}`)
                                    }
                                } else "object" == typeof X[0] && !Array.isArray(X[0]) && (de = X[0]);
                            return this.lastKey = k, this.lastParams = X, this.updateValue(k, de), this._dispose(), this.onTranslationChange || (this.onTranslationChange = this.translate.onTranslationChange.subscribe(Te => {
                                this.lastKey && Te.lang === this.translate.currentLang && (this.lastKey = null, this.updateValue(k, de, Te.translations))
                            })), this.onLangChange || (this.onLangChange = this.translate.onLangChange.subscribe(Te => {
                                this.lastKey && (this.lastKey = null, this.updateValue(k, de, Te.translations))
                            })), this.onDefaultLangChange || (this.onDefaultLangChange = this.translate.onDefaultLangChange.subscribe(() => {
                                this.lastKey && (this.lastKey = null, this.updateValue(k, de))
                            })), this.value
                        }
                        _dispose() {
                            void 0 !== this.onTranslationChange && (this.onTranslationChange.unsubscribe(), this.onTranslationChange = void 0), void 0 !== this.onLangChange && (this.onLangChange.unsubscribe(), this.onLangChange = void 0), void 0 !== this.onDefaultLangChange && (this.onDefaultLangChange.unsubscribe(), this.onDefaultLangChange = void 0)
                        }
                        ngOnDestroy() {
                            this._dispose()
                        }
                    }
                    return Ee.\u0275fac = function(k) {
                        return new(k || Ee)(A.Y36(er, 16), A.Y36(A.sBO, 16))
                    }, Ee.\u0275pipe = A.Yjl({
                        name: "translate",
                        type: Ee,
                        pure: !1
                    }), Ee.\u0275prov = A.Yz7({
                        token: Ee,
                        factory: Ee.\u0275fac
                    }), Ee
                })(),
                Vr = (() => {
                    class Ee {
                        static forRoot(k = {}) {
                            return {
                                ngModule: Ee,
                                providers: [k.loader || {
                                    provide: q,
                                    useClass: Ae
                                }, k.compiler || {
                                    provide: xt,
                                    useClass: wt
                                }, k.parser || {
                                    provide: Jt,
                                    useClass: xe
                                }, k.missingTranslationHandler || {
                                    provide: ge,
                                    useClass: ue
                                }, ce, {
                                    provide: Me,
                                    useValue: k.isolate
                                }, {
                                    provide: ke,
                                    useValue: k.useDefaultLang
                                }, {
                                    provide: Le,
                                    useValue: k.extend
                                }, {
                                    provide: Ve,
                                    useValue: k.defaultLanguage
                                }, er]
                            }
                        }
                        static forChild(k = {}) {
                            return {
                                ngModule: Ee,
                                providers: [k.loader || {
                                    provide: q,
                                    useClass: Ae
                                }, k.compiler || {
                                    provide: xt,
                                    useClass: wt
                                }, k.parser || {
                                    provide: Jt,
                                    useClass: xe
                                }, k.missingTranslationHandler || {
                                    provide: ge,
                                    useClass: ue
                                }, {
                                    provide: Me,
                                    useValue: k.isolate
                                }, {
                                    provide: ke,
                                    useValue: k.useDefaultLang
                                }, {
                                    provide: Le,
                                    useValue: k.extend
                                }, {
                                    provide: Ve,
                                    useValue: k.defaultLanguage
                                }, er]
                            }
                        }
                    }
                    return Ee.\u0275fac = function(k) {
                        return new(k || Ee)
                    }, Ee.\u0275mod = A.oAB({
                        type: Ee
                    }), Ee.\u0275inj = A.cJS({}), Ee
                })()
        },
        6215: (We, fe, O) => {
            "use strict";
            O.d(fe, {
                X: () => he
            });
            var A = O(9765),
                m = O(7971);
            class he extends A.xQ {
                constructor(Z) {
                    super(), this._value = Z
                }
                get value() {
                    return this.getValue()
                }
                _subscribe(Z) {
                    const Y = super._subscribe(Z);
                    return Y && !Y.closed && Z.next(this._value), Y
                }
                getValue() {
                    if (this.hasError) throw this.thrownError;
                    if (this.closed) throw new m.N;
                    return this._value
                }
                next(Z) {
                    super.next(this._value = Z)
                }
            }
        },
        7574: (We, fe, O) => {
            "use strict";
            O.d(fe, {
                y: () => z
            });
            var A = O(7393),
                he = O(9181),
                oe = O(6490),
                Y = O(6554),
                re = O(4487);
            var U = O(2494);
            let z = (() => {
                class q {
                    constructor(De) {
                        this._isScalar = !1, De && (this._subscribe = De)
                    }
                    lift(De) {
                        const ge = new q;
                        return ge.source = this, ge.operator = De, ge
                    }
                    subscribe(De, ge, ue) {
                        const {
                            operator: Be
                        } = this, me = function(q, Ae, De) {
                            if (q) {
                                if (q instanceof A.L) return q;
                                if (q[he.b]) return q[he.b]()
                            }
                            return q || Ae || De ? new A.L(q, Ae, De) : new A.L(oe.c)
                        }(De, ge, ue);
                        if (me.add(Be ? Be.call(me, this.source) : this.source || U.v.useDeprecatedSynchronousErrorHandling && !me.syncErrorThrowable ? this._subscribe(me) : this._trySubscribe(me)), U.v.useDeprecatedSynchronousErrorHandling && me.syncErrorThrowable && (me.syncErrorThrowable = !1, me.syncErrorThrown)) throw me.syncErrorValue;
                        return me
                    }
                    _trySubscribe(De) {
                        try {
                            return this._subscribe(De)
                        } catch (ge) {
                            U.v.useDeprecatedSynchronousErrorHandling && (De.syncErrorThrown = !0, De.syncErrorValue = ge),
                                function(q) {
                                    for (; q;) {
                                        const {
                                            closed: Ae,
                                            destination: De,
                                            isStopped: ge
                                        } = q;
                                        if (Ae || ge) return !1;
                                        q = De && De instanceof A.L ? De : null
                                    }
                                    return !0
                                }(De) ? De.error(ge) : console.warn(ge)
                        }
                    }
                    forEach(De, ge) {
                        return new(ge = te(ge))((ue, Be) => {
                            let me;
                            me = this.subscribe(rt => {
                                try {
                                    De(rt)
                                } catch (on) {
                                    Be(on), me && me.unsubscribe()
                                }
                            }, Be, ue)
                        })
                    }
                    _subscribe(De) {
                        const {
                            source: ge
                        } = this;
                        return ge && ge.subscribe(De)
                    } [Y.L]() {
                        return this
                    }
                    pipe(...De) {
                        return 0 === De.length ? this : function(q) {
                            return 0 === q.length ? re.y : 1 === q.length ? q[0] : function(De) {
                                return q.reduce((ge, ue) => ue(ge), De)
                            }
                        }(De)(this)
                    }
                    toPromise(De) {
                        return new(De = te(De))((ge, ue) => {
                            let Be;
                            this.subscribe(me => Be = me, me => ue(me), () => ge(Be))
                        })
                    }
                }
                return q.create = Ae => new q(Ae), q
            })();

            function te(q) {
                if (q || (q = U.v.Promise || Promise), !q) throw new Error("no Promise impl found");
                return q
            }
        },
        6490: (We, fe, O) => {
            "use strict";
            O.d(fe, {
                c: () => he
            });
            var A = O(2494),
                m = O(4449);
            const he = {
                closed: !0,
                next(oe) {},
                error(oe) {
                    if (A.v.useDeprecatedSynchronousErrorHandling) throw oe;
                    (0, m.z)(oe)
                },
                complete() {}
            }
        },
        1929: (We, fe, O) => {
            "use strict";
            O.d(fe, {
                t: () => xe
            });
            var A = O(9765),
                m = O(6465),
                oe = O(6102);
            const re = new class extends oe.v {}(class extends m.o {
                constructor(ce, Me) {
                    super(ce, Me), this.scheduler = ce, this.work = Me
                }
                schedule(ce, Me = 0) {
                    return Me > 0 ? super.schedule(ce, Me) : (this.delay = Me, this.state = ce, this.scheduler.flush(this), this)
                }
                execute(ce, Me) {
                    return Me > 0 || this.closed ? super.execute(ce, Me) : this._execute(ce, Me)
                }
                requestAsyncId(ce, Me, ke = 0) {
                    return null !== ke && ke > 0 || null === ke && this.delay > 0 ? super.requestAsyncId(ce, Me, ke) : ce.flush(this)
                }
            });
            var ee = O(5319),
                Q = O(7393),
                U = O(9193),
                z = O(5917),
                te = O(7574);
            class ge {
                constructor(ce, Me, ke) {
                    this.kind = ce, this.value = Me, this.error = ke, this.hasValue = "N" === ce
                }
                observe(ce) {
                    switch (this.kind) {
                        case "N":
                            return ce.next && ce.next(this.value);
                        case "E":
                            return ce.error && ce.error(this.error);
                        case "C":
                            return ce.complete && ce.complete()
                    }
                }
                do(ce, Me, ke) {
                    switch (this.kind) {
                        case "N":
                            return ce && ce(this.value);
                        case "E":
                            return Me && Me(this.error);
                        case "C":
                            return ke && ke()
                    }
                }
                accept(ce, Me, ke) {
                    return ce && "function" == typeof ce.next ? this.observe(ce) : this.do(ce, Me, ke)
                }
                toObservable() {
                    switch (this.kind) {
                        case "N":
                            return (0, z.of)(this.value);
                        case "E":
                            return wt = this.error, new te.y(Me => Me.error(wt));
                        case "C":
                            return (0, U.c)()
                    }
                    var wt;
                    throw new Error("unexpected notification kind value")
                }
                static
                createNext(ce) {
                    return void 0 !== ce ? new ge("N", ce) : ge.undefinedValueNotification
                }
                static createError(ce) {
                    return new ge("E", void 0, ce)
                }
                static createComplete() {
                    return ge.completeNotification
                }
            }
            ge.completeNotification = new ge("C"), ge.undefinedValueNotification = new ge("N", void 0);
            class me extends Q.L {
                constructor(ce, Me, ke = 0) {
                    super(ce), this.scheduler = Me, this.delay = ke
                }
                static dispatch(ce) {
                    const {
                        notification: Me,
                        destination: ke
                    } = ce;
                    Me.observe(ke), this.unsubscribe()
                }
                scheduleMessage(ce) {
                    this.destination.add(this.scheduler.schedule(me.dispatch, this.delay, new rt(ce, this.destination)))
                }
                _next(ce) {
                    this.scheduleMessage(ge.createNext(ce))
                }
                _error(ce) {
                    this.scheduleMessage(ge.createError(ce)), this.unsubscribe()
                }
                _complete() {
                    this.scheduleMessage(ge.createComplete()), this.unsubscribe()
                }
            }
            class rt {
                constructor(ce, Me) {
                    this.notification = ce, this.destination = Me
                }
            }
            var on = O(7971),
                Jt = O(8858);
            class xe extends A.xQ {
                constructor(ce = Number.POSITIVE_INFINITY, Me = Number.POSITIVE_INFINITY, ke) {
                    super(), this.scheduler = ke, this._events = [], this._infiniteTimeWindow = !1, this._bufferSize = ce < 1 ? 1 : ce, this._windowTime = Me < 1 ? 1 : Me, Me === Number.POSITIVE_INFINITY ? (this._infiniteTimeWindow = !0, this.next = this.nextInfiniteTimeWindow) : this.next = this.nextTimeWindow
                }
                nextInfiniteTimeWindow(ce) {
                    if (!this.isStopped) {
                        const Me = this._events;
                        Me.push(ce), Me.length > this._bufferSize && Me.shift()
                    }
                    super.next(ce)
                }
                nextTimeWindow(ce) {
                    this.isStopped || (this._events.push(new xt(this._getNow(), ce)), this._trimBufferThenGetEvents()), super.next(ce)
                }
                _subscribe(ce) {
                    const Me = this._infiniteTimeWindow,
                        ke = Me ? this._events : this._trimBufferThenGetEvents(),
                        Ve = this.scheduler,
                        Le = ke.length;
                    let st;
                    if (this.closed) throw new on.N;
                    if (this.isStopped || this.hasError ? st = ee.w.EMPTY : (this.observers.push(ce), st = new Jt.W(this, ce)), Ve && ce.add(ce = new me(ce, Ve)), Me)
                        for (let Ne = 0; Ne < Le && !ce.closed; Ne++) ce.next(ke[Ne]);
                    else
                        for (let Ne = 0; Ne < Le && !ce.closed; Ne++) ce.next(ke[Ne].value);
                    return this.hasError ? ce.error(this.thrownError) : this.isStopped && ce.complete(), st
                }
                _getNow() {
                    return (this.scheduler || re).now()
                }
                _trimBufferThenGetEvents() {
                    const ce = this._getNow(),
                        Me = this._bufferSize,
                        ke = this._windowTime,
                        Ve = this._events,
                        Le = Ve.length;
                    let st = 0;
                    for (; st < Le && !(ce - Ve[st].time < ke);) st++;
                    return Le > Me && (st = Math.max(st, Le - Me)), st > 0 && Ve.splice(0, st), Ve
                }
            }
            class xt {
                constructor(ce, Me) {
                    this.time = ce, this.value = Me
                }
            }
        },
        9765: (We, fe, O) => {
            "use strict";
            O.d(fe, {
                Yc: () => re,
                xQ: () => ee
            });
            var A = O(7574),
                m = O(7393),
                he = O(5319),
                oe = O(7971),
                Z = O(8858),
                Y = O(9181);
            class re extends m.L {
                constructor(z) {
                    super(z), this.destination = z
                }
            }
            let ee = (() => {
                class U extends A.y {
                    constructor() {
                        super(), this.observers = [], this.closed = !1, this.isStopped = !1, this.hasError = !1, this.thrownError = null
                    } [Y.b]() {
                        return new re(this)
                    }
                    lift(te) {
                        const q = new Q(this, this);
                        return q.operator = te, q
                    }
                    next(te) {
                        if (this.closed) throw new oe.N;
                        if (!this.isStopped) {
                            const {
                                observers: q
                            } = this, Ae = q.length, De = q.slice();
                            for (let ge = 0; ge < Ae; ge++) De[ge].next(te)
                        }
                    }
                    error(te) {
                        if (this.closed) throw new oe.N;
                        this.hasError = !0, this.thrownError = te, this.isStopped = !0;
                        const {
                            observers: q
                        } = this, Ae = q.length, De = q.slice();
                        for (let ge = 0; ge < Ae; ge++) De[ge].error(te);
                        this.observers.length = 0
                    }
                    complete() {
                        if (this.closed) throw new oe.N;
                        this.isStopped = !0;
                        const {
                            observers: te
                        } = this, q = te.length, Ae = te.slice();
                        for (let De = 0; De < q; De++) Ae[De].complete();
                        this.observers.length = 0
                    }
                    unsubscribe() {
                        this.isStopped = !0, this.closed = !0, this.observers = null
                    }
                    _trySubscribe(te) {
                        if (this.closed) throw new oe.N;
                        return super._trySubscribe(te)
                    }
                    _subscribe(te) {
                        if (this.closed) throw new oe.N;
                        return this.hasError ? (te.error(this.thrownError), he.w.EMPTY) : this.isStopped ? (te.complete(), he.w.EMPTY) : (this.observers.push(te), new Z.W(this, te))
                    }
                    asObservable() {
                        const te = new A.y;
                        return te.source = this, te
                    }
                }
                return U.create = (z, te) => new Q(z, te), U
            })();
            class Q extends ee {
                constructor(z, te) {
                    super(), this.destination = z, this.source = te
                }
                next(z) {
                    const {
                        destination: te
                    } = this;
                    te && te.next && te.next(z)
                }
                error(z) {
                    const {
                        destination: te
                    } = this;
                    te && te.error && this.destination.error(z)
                }
                complete() {
                    const {
                        destination: z
                    } = this;
                    z && z.complete && this.destination.complete()
                }
                _subscribe(z) {
                    const {
                        source: te
                    } = this;
                    return te ? this.source.subscribe(z) : he.w.EMPTY
                }
            }
        },
        8858: (We, fe, O) => {
            "use strict";
            O.d(fe, {
                W: () => m
            });
            var A = O(5319);
            class m extends A.w {
                constructor(oe, Z) {
                    super(), this.subject = oe, this.subscriber = Z, this.closed = !1
                }
                unsubscribe() {
                    if (this.closed) return;
                    this.closed = !0;
                    const oe = this.subject,
                        Z = oe.observers;
                    if (this.subject = null, !Z || 0 === Z.length || oe.isStopped || oe.closed) return;
                    const Y = Z.indexOf(this.subscriber); - 1 !== Y && Z.splice(Y, 1)
                }
            }
        },
        7393: (We, fe, O) => {
            "use strict";
            O.d(fe, {
                L: () => re
            });
            var A = O(9105),
                m = O(6490),
                he = O(5319),
                oe = O(9181),
                Z = O(2494),
                Y = O(4449);
            class re extends he.w {
                constructor(U, z, te) {
                    switch (super(), this.syncErrorValue = null, this.syncErrorThrown = !1, this.syncErrorThrowable = !1, this.isStopped = !1, arguments.length) {
                        case 0:
                            this.destination = m.c;
                            break;
                        case 1:
                            if (!U) {
                                this.destination = m.c;
                                break
                            }
                            if ("object" == typeof U) {
                                U instanceof re ? (this.syncErrorThrowable = U.syncErrorThrowable, this.destination = U, U.add(this)) : (this.syncErrorThrowable = !0, this.destination = new ee(this, U));
                                break
                            }
                        default:
                            this.syncErrorThrowable = !0, this.destination = new ee(this, U, z, te)
                    }
                } [oe.b]() {
                    return this
                }
                static create(U, z, te) {
                    const q = new re(U, z, te);
                    return q.syncErrorThrowable = !1, q
                }
                next(U) {
                    this.isStopped || this._next(U)
                }
                error(U) {
                    this.isStopped || (this.isStopped = !0, this._error(U))
                }
                complete() {
                    this.isStopped || (this.isStopped = !0, this._complete())
                }
                unsubscribe() {
                    this.closed || (this.isStopped = !0, super.unsubscribe())
                }
                _next(U) {
                    this.destination.next(U)
                }
                _error(U) {
                    this.destination.error(U), this.unsubscribe()
                }
                _complete() {
                    this.destination.complete(), this.unsubscribe()
                }
                _unsubscribeAndRecycle() {
                    const {
                        _parentOrParents: U
                    } = this;
                    return this._parentOrParents = null, this.unsubscribe(), this.closed = !1, this.isStopped = !1, this._parentOrParents = U, this
                }
            }
            class ee extends re {
                constructor(U, z, te, q) {
                    super(), this._parentSubscriber = U;
                    let Ae, De = this;
                    (0, A.m)(z) ? Ae = z: z && (Ae = z.next, te = z.error, q = z.complete, z !== m.c && (De = Object.create(z), (0, A.m)(De.unsubscribe) && this.add(De.unsubscribe.bind(De)), De.unsubscribe = this.unsubscribe.bind(this))), this._context = De, this._next = Ae, this._error = te, this._complete = q
                }
                next(U) {
                    if (!this.isStopped && this._next) {
                        const {
                            _parentSubscriber: z
                        } = this;
                        Z.v.useDeprecatedSynchronousErrorHandling && z.syncErrorThrowable ? this.__tryOrSetError(z, this._next, U) && this.unsubscribe() : this.__tryOrUnsub(this._next, U)
                    }
                }
                error(U) {
                    if (!this.isStopped) {
                        const {
                            _parentSubscriber: z
                        } = this, {
                            useDeprecatedSynchronousErrorHandling: te
                        } = Z.v;
                        if (this._error) te && z.syncErrorThrowable ? (this.__tryOrSetError(z, this._error, U), this.unsubscribe()) : (this.__tryOrUnsub(this._error, U), this.unsubscribe());
                        else if (z.syncErrorThrowable) te ? (z.syncErrorValue = U, z.syncErrorThrown = !0) : (0, Y.z)(U), this.unsubscribe();
                        else {
                            if (this.unsubscribe(), te) throw U;
                            (0, Y.z)(U)
                        }
                    }
                }
                complete() {
                    if (!this.isStopped) {
                        const {
                            _parentSubscriber: U
                        } = this;
                        if (this._complete) {
                            const z = () => this._complete.call(this._context);
                            Z.v.useDeprecatedSynchronousErrorHandling && U.syncErrorThrowable ? (this.__tryOrSetError(U, z), this.unsubscribe()) : (this.__tryOrUnsub(z), this.unsubscribe())
                        } else this.unsubscribe()
                    }
                }
                __tryOrUnsub(U, z) {
                    try {
                        U.call(this._context, z)
                    } catch (te) {
                        if (this.unsubscribe(), Z.v.useDeprecatedSynchronousErrorHandling) throw te;
                        (0, Y.z)(te)
                    }
                }
                __tryOrSetError(U, z, te) {
                    if (!Z.v.useDeprecatedSynchronousErrorHandling) throw new Error("bad call");
                    try {
                        z.call(this._context, te)
                    } catch (q) {
                        return Z.v.useDeprecatedSynchronousErrorHandling ? (U.syncErrorValue = q, U.syncErrorThrown = !0, !0) : ((0, Y.z)(q), !0)
                    }
                    return !1
                }
                _unsubscribe() {
                    const {
                        _parentSubscriber: U
                    } = this;
                    this._context = null, this._parentSubscriber = null, U.unsubscribe()
                }
            }
        },
        5319: (We, fe, O) => {
            "use strict";
            O.d(fe, {
                w: () => Y
            });
            var A = O(9796),
                m = O(1555),
                he = O(9105);
            const Z = (() => {
                function ee(Q) {
                    return Error.call(this), this.message = Q ? `${Q.length} errors occurred during unsubscription:\n${Q.map((U,z)=>`${z+1}) ${U.toString()}`).join("\n  ")}` : "", this.name = "UnsubscriptionError", this.errors = Q, this
                }
                return ee.prototype = Object.create(Error.prototype), ee
            })();
            class Y {
                constructor(Q) {
                    this.closed = !1, this._parentOrParents = null, this._subscriptions = null, Q && (this._ctorUnsubscribe = !0, this._unsubscribe = Q)
                }
                unsubscribe() {
                    let Q;
                    if (this.closed) return;
                    let {
                        _parentOrParents: U,
                        _ctorUnsubscribe: z,
                        _unsubscribe: te,
                        _subscriptions: q
                    } = this;
                    if (this.closed = !0, this._parentOrParents = null, this._subscriptions = null, U instanceof Y) U.remove(this);
                    else if (null !== U)
                        for (let Ae = 0; Ae < U.length; ++Ae) U[Ae].remove(this);
                    if ((0, he.m)(te)) {
                        z && (this._unsubscribe = void 0);
                        try {
                            te.call(this)
                        } catch (Ae) {
                            Q = Ae instanceof Z ? re(Ae.errors) : [Ae]
                        }
                    }
                    if ((0, A.k)(q)) {
                        let Ae = -1,
                            De = q.length;
                        for (; ++Ae < De;) {
                            const ge = q[Ae];
                            if ((0, m.K)(ge)) try {
                                ge.unsubscribe()
                            } catch (ue) {
                                Q = Q || [], ue instanceof Z ? Q = Q.concat(re(ue.errors)) : Q.push(ue)
                            }
                        }
                    }
                    if (Q) throw new Z(Q)
                }
                add(Q) {
                    let U = Q;
                    if (!Q) return Y.EMPTY;
                    switch (typeof Q) {
                        case "function":
                            U = new Y(Q);
                        case "object":
                            if (U === this || U.closed || "function" != typeof U.unsubscribe) return U;
                            if (this.closed) return U.unsubscribe(), U;
                            if (!(U instanceof Y)) {
                                const q = U;
                                U = new Y, U._subscriptions = [q]
                            }
                            break;
                        default:
                            throw new Error("unrecognized teardown " + Q + " added to Subscription.")
                    }
                    let {
                        _parentOrParents: z
                    } = U;
                    if (null === z) U._parentOrParents = this;
                    else if (z instanceof Y) {
                        if (z === this) return U;
                        U._parentOrParents = [z, this]
                    } else {
                        if (-1 !== z.indexOf(this)) return U;
                        z.push(this)
                    }
                    const te = this._subscriptions;
                    return null === te ? this._subscriptions = [U] : te.push(U), U
                }
                remove(Q) {
                    const U = this._subscriptions;
                    if (U) {
                        const z = U.indexOf(Q); - 1 !== z && U.splice(z, 1)
                    }
                }
            }
            var ee;

            function re(ee) {
                return ee.reduce((Q, U) => Q.concat(U instanceof Z ? U.errors : U), [])
            }
            Y.EMPTY = ((ee = new Y).closed = !0, ee)
        },
        2494: (We, fe, O) => {
            "use strict";
            O.d(fe, {
                v: () => m
            });
            let A = !1;
            const m = {
                Promise: void 0,
                set useDeprecatedSynchronousErrorHandling(he) {
                    if (he) {
                        const oe = new Error;
                        console.warn("DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n" + oe.stack)
                    } else A && console.log("RxJS: Back to a better error behavior. Thank you. <3");
                    A = he
                },
                get useDeprecatedSynchronousErrorHandling() {
                    return A
                }
            }
        },
        5345: (We, fe, O) => {
            "use strict";
            O.d(fe, {
                IY: () => oe,
                Ds: () => Y,
                ft: () => ee
            });
            var A = O(7393),
                m = O(7574),
                he = O(7444);
            class oe extends A.L {
                constructor(U) {
                    super(), this.parent = U
                }
                _next(U) {
                    this.parent.notifyNext(U)
                }
                _error(U) {
                    this.parent.notifyError(U), this.unsubscribe()
                }
                _complete() {
                    this.parent.notifyComplete(), this.unsubscribe()
                }
            }
            class Y extends A.L {
                notifyNext(U) {
                    this.destination.next(U)
                }
                notifyError(U) {
                    this.destination.error(U)
                }
                notifyComplete() {
                    this.destination.complete()
                }
            }

            function ee(Q, U) {
                if (U.closed) return;
                if (Q instanceof m.y) return Q.subscribe(U);
                let z;
                try {
                    z = (0, he.s)(Q)(U)
                } catch (te) {
                    U.error(te)
                }
                return z
            }
        },
        2441: (We, fe, O) => {
            "use strict";
            O.d(fe, {
                c: () => Z,
                N: () => Y
            });
            var A = O(9765),
                m = O(7574),
                he = O(5319),
                oe = O(1307);
            class Z extends m.y {
                constructor(z, te) {
                    super(), this.source = z, this.subjectFactory = te, this._refCount = 0, this._isComplete = !1
                }
                _subscribe(z) {
                    return this.getSubject().subscribe(z)
                }
                getSubject() {
                    const z = this._subject;
                    return (!z || z.isStopped) && (this._subject = this.subjectFactory()), this._subject
                }
                connect() {
                    let z = this._connection;
                    return z || (this._isComplete = !1, z = this._connection = new he.w, z.add(this.source.subscribe(new re(this.getSubject(), this))), z.closed && (this._connection = null, z = he.w.EMPTY)), z
                }
                refCount() {
                    return (0, oe.x)()(this)
                }
            }
            const Y = (() => {
                const U = Z.prototype;
                return {
                    operator: {
                        value: null
                    },
                    _refCount: {
                        value: 0,
                        writable: !0
                    },
                    _subject: {
                        value: null,
                        writable: !0
                    },
                    _connection: {
                        value: null,
                        writable: !0
                    },
                    _subscribe: {
                        value: U._subscribe
                    },
                    _isComplete: {
                        value: U._isComplete,
                        writable: !0
                    },
                    getSubject: {
                        value: U.getSubject
                    },
                    connect: {
                        value: U.connect
                    },
                    refCount: {
                        value: U.refCount
                    }
                }
            })();
            class re extends A.Yc {
                constructor(z, te) {
                    super(z), this.connectable = te
                }
                _error(z) {
                    this._unsubscribe(), super._error(z)
                }
                _complete() {
                    this.connectable._isComplete = !0, this._unsubscribe(), super._complete()
                }
                _unsubscribe() {
                    const z = this.connectable;
                    if (z) {
                        this.connectable = null;
                        const te = z._connection;
                        z._refCount = 0, z._subject = null, z._connection = null, te && te.unsubscribe()
                    }
                }
            }
        },
        8071: (We, fe, O) => {
            "use strict";
            O.d(fe, {
                z: () => oe
            });
            var A = O(5917),
                m = O(3282);

            function oe(...Z) {
                return (0, m.J)(1)((0, A.of)(...Z))
            }
        },
        1439: (We, fe, O) => {
            "use strict";
            O.d(fe, {
                P: () => oe
            });
            var A = O(7574),
                m = O(4402),
                he = O(9193);

            function oe(Z) {
                return new A.y(Y => {
                    let re;
                    try {
                        re = Z()
                    } catch (Q) {
                        return void Y.error(Q)
                    }
                    return (re ? (0, m.D)(re) : (0, he.c)()).subscribe(Y)
                })
            }
        },
        9193: (We, fe, O) => {
            "use strict";
            O.d(fe, {
                E: () => m,
                c: () => he
            });
            var A = O(7574);
            const m = new A.y(Z => Z.complete());

            function he(Z) {
                return Z ? function(Z) {
                    return new A.y(Y => Z.schedule(() => Y.complete()))
                }(Z) : m
            }
        },
        5758: (We, fe, O) => {
            "use strict";
            O.d(fe, {
                D: () => Y
            });
            var A = O(7574),
                m = O(9796),
                he = O(8002),
                oe = O(1555),
                Z = O(4402);

            function Y(...ee) {
                if (1 === ee.length) {
                    const Q = ee[0];
                    if ((0, m.k)(Q)) return re(Q, null);
                    if ((0, oe.K)(Q) && Object.getPrototypeOf(Q) === Object.prototype) {
                        const U = Object.keys(Q);
                        return re(U.map(z => Q[z]), U)
                    }
                }
                if ("function" == typeof ee[ee.length - 1]) {
                    const Q = ee.pop();
                    return re(ee = 1 === ee.length && (0, m.k)(ee[0]) ? ee[0] : ee, null).pipe((0, he.U)(U => Q(...U)))
                }
                return re(ee, null)
            }

            function re(ee, Q) {
                return new A.y(U => {
                    const z = ee.length;
                    if (0 === z) return void U.complete();
                    const te = new Array(z);
                    let q = 0,
                        Ae = 0;
                    for (let De = 0; De < z; De++) {
                        const ge = (0, Z.D)(ee[De]);
                        let ue = !1;
                        U.add(ge.subscribe({
                            next: Be => {
                                ue || (ue = !0, Ae++), te[De] = Be
                            },
                            error: Be => U.error(Be),
                            complete: () => {
                                q++, (q === z || !ue) && (Ae === z && U.next(Q ? Q.reduce((Be, me, rt) => (Be[me] = te[rt], Be), {}) : te), U.complete())
                            }
                        }))
                    }
                })
            }
        },
        4402: (We, fe, O) => {
            "use strict";
            O.d(fe, {
                D: () => De
            });
            var A = O(7574),
                m = O(7444),
                he = O(5319),
                oe = O(6554),
                re = O(4087),
                ee = O(377),
                z = O(4072),
                te = O(9489);

            function De(ge, ue) {
                return ue ? function(ge, ue) {
                    if (null != ge) {
                        if (function(ge) {
                                return ge && "function" == typeof ge[oe.L]
                            }(ge)) return function(ge, ue) {
                            return new A.y(Be => {
                                const me = new he.w;
                                return me.add(ue.schedule(() => {
                                    const rt = ge[oe.L]();
                                    me.add(rt.subscribe({
                                        next(on) {
                                            me.add(ue.schedule(() => Be.next(on)))
                                        },
                                        error(on) {
                                            me.add(ue.schedule(() => Be.error(on)))
                                        },
                                        complete() {
                                            me.add(ue.schedule(() => Be.complete()))
                                        }
                                    }))
                                })), me
                            })
                        }(ge, ue);
                        if ((0, z.t)(ge)) return function(ge, ue) {
                            return new A.y(Be => {
                                const me = new he.w;
                                return me.add(ue.schedule(() => ge.then(rt => {
                                    me.add(ue.schedule(() => {
                                        Be.next(rt), me.add(ue.schedule(() => Be.complete()))
                                    }))
                                }, rt => {
                                    me.add(ue.schedule(() => Be.error(rt)))
                                }))), me
                            })
                        }(ge, ue);
                        if ((0, te.z)(ge)) return (0, re.r)(ge, ue);
                        if (function(ge) {
                                return ge && "function" == typeof ge[ee.hZ]
                            }(ge) || "string" == typeof ge) return function(ge, ue) {
                            if (!ge) throw new Error("Iterable cannot be null");
                            return new A.y(Be => {
                                const me = new he.w;
                                let rt;
                                return me.add(() => {
                                    rt && "function" == typeof rt.return && rt.return()
                                }), me.add(ue.schedule(() => {
                                    rt = ge[ee.hZ](), me.add(ue.schedule(function() {
                                        if (Be.closed) return;
                                        let on, Jt;
                                        try {
                                            const xe = rt.next();
                                            on = xe.value, Jt = xe.done
                                        } catch (xe) {
                                            return void Be.error(xe)
                                        }
                                        Jt ? Be.complete() : (Be.next(on), this.schedule())
                                    }))
                                })), me
                            })
                        }(ge, ue)
                    }
                    throw new TypeError((null !== ge && typeof ge || ge) + " is not observable")
                }(ge, ue) : ge instanceof A.y ? ge : new A.y((0, m.s)(ge))
            }
        },
        6693: (We, fe, O) => {
            "use strict";
            O.d(fe, {
                n: () => oe
            });
            var A = O(7574),
                m = O(5015),
                he = O(4087);

            function oe(Z, Y) {
                return Y ? (0, he.r)(Z, Y) : new A.y((0, m.V)(Z))
            }
        },
        6682: (We, fe, O) => {
            "use strict";
            O.d(fe, {
                T: () => Z
            });
            var A = O(7574),
                m = O(4869),
                he = O(3282),
                oe = O(6693);

            function Z(...Y) {
                let re = Number.POSITIVE_INFINITY,
                    ee = null,
                    Q = Y[Y.length - 1];
                return (0, m.K)(Q) ? (ee = Y.pop(), Y.length > 1 && "number" == typeof Y[Y.length - 1] && (re = Y.pop())) : "number" == typeof Q && (re = Y.pop()), null === ee && 1 === Y.length && Y[0] instanceof A.y ? Y[0] : (0, he.J)(re)((0, oe.n)(Y, ee))
            }
        },
        5917: (We, fe, O) => {
            "use strict";
            O.d(fe, {
                of: () => oe
            });
            var A = O(4869),
                m = O(6693),
                he = O(4087);

            function oe(...Z) {
                let Y = Z[Z.length - 1];
                return (0, A.K)(Y) ? (Z.pop(), (0, he.r)(Z, Y)) : (0, m.n)(Z)
            }
        },
        4612: (We, fe, O) => {
            "use strict";
            O.d(fe, {
                b: () => m
            });
            var A = O(9773);

            function m(he, oe) {
                return (0, A.zg)(he, oe, 1)
            }
        },
        5435: (We, fe, O) => {
            "use strict";
            O.d(fe, {
                h: () => m
            });
            var A = O(7393);

            function m(Z, Y) {
                return function(ee) {
                    return ee.lift(new he(Z, Y))
                }
            }
            class he {
                constructor(Y, re) {
                    this.predicate = Y, this.thisArg = re
                }
                call(Y, re) {
                    return re.subscribe(new oe(Y, this.predicate, this.thisArg))
                }
            }
            class oe extends A.L {
                constructor(Y, re, ee) {
                    super(Y), this.predicate = re, this.thisArg = ee, this.count = 0
                }
                _next(Y) {
                    let re;
                    try {
                        re = this.predicate.call(this.thisArg, Y, this.count++)
                    } catch (ee) {
                        return void this.destination.error(ee)
                    }
                    re && this.destination.next(Y)
                }
            }
        },
        8002: (We, fe, O) => {
            "use strict";
            O.d(fe, {
                U: () => m
            });
            var A = O(7393);

            function m(Z, Y) {
                return function(ee) {
                    if ("function" != typeof Z) throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");
                    return ee.lift(new he(Z, Y))
                }
            }
            class he {
                constructor(Y, re) {
                    this.project = Y, this.thisArg = re
                }
                call(Y, re) {
                    return re.subscribe(new oe(Y, this.project, this.thisArg))
                }
            }
            class oe extends A.L {
                constructor(Y, re, ee) {
                    super(Y), this.project = re, this.count = 0, this.thisArg = ee || this
                }
                _next(Y) {
                    let re;
                    try {
                        re = this.project.call(this.thisArg, Y, this.count++)
                    } catch (ee) {
                        return void this.destination.error(ee)
                    }
                    this.destination.next(re)
                }
            }
        },
        3282: (We, fe, O) => {
            "use strict";
            O.d(fe, {
                J: () => he
            });
            var A = O(9773),
                m = O(4487);

            function he(oe = Number.POSITIVE_INFINITY) {
                return (0, A.zg)(m.y, oe)
            }
        },
        9773: (We, fe, O) => {
            "use strict";
            O.d(fe, {
                zg: () => oe,
                VS: () => re
            });
            var A = O(8002),
                m = O(4402),
                he = O(5345);

            function oe(ee, Q, U = Number.POSITIVE_INFINITY) {
                return "function" == typeof Q ? z => z.pipe(oe((te, q) => (0, m.D)(ee(te, q)).pipe((0, A.U)((Ae, De) => Q(te, Ae, q, De))), U)) : ("number" == typeof Q && (U = Q), z => z.lift(new Z(ee, U)))
            }
            class Z {
                constructor(Q, U = Number.POSITIVE_INFINITY) {
                    this.project = Q, this.concurrent = U
                }
                call(Q, U) {
                    return U.subscribe(new Y(Q, this.project, this.concurrent))
                }
            }
            class Y extends he.Ds {
                constructor(Q, U, z = Number.POSITIVE_INFINITY) {
                    super(Q), this.project = U, this.concurrent = z, this.hasCompleted = !1, this.buffer = [], this.active = 0, this.index = 0
                }
                _next(Q) {
                    this.active < this.concurrent ? this._tryNext(Q) : this.buffer.push(Q)
                }
                _tryNext(Q) {
                    let U;
                    const z = this.index++;
                    try {
                        U = this.project(Q, z)
                    } catch (te) {
                        return void this.destination.error(te)
                    }
                    this.active++, this._innerSub(U)
                }
                _innerSub(Q) {
                    const U = new he.IY(this),
                        z = this.destination;
                    z.add(U);
                    const te = (0, he.ft)(Q, U);
                    te !== U && z.add(te)
                }
                _complete() {
                    this.hasCompleted = !0, 0 === this.active && 0 === this.buffer.length && this.destination.complete(), this.unsubscribe()
                }
                notifyNext(Q) {
                    this.destination.next(Q)
                }
                notifyComplete() {
                    const Q = this.buffer;
                    this.active--, Q.length > 0 ? this._next(Q.shift()) : 0 === this.active && this.hasCompleted && this.destination.complete()
                }
            }
            const re = oe
        },
        1307: (We, fe, O) => {
            "use strict";
            O.d(fe, {
                x: () => m
            });
            var A = O(7393);

            function m() {
                return function(Y) {
                    return Y.lift(new he(Y))
                }
            }
            class he {
                constructor(Y) {
                    this.connectable = Y
                }
                call(Y, re) {
                    const {
                        connectable: ee
                    } = this;
                    ee._refCount++;
                    const Q = new oe(Y, ee),
                        U = re.subscribe(Q);
                    return Q.closed || (Q.connection = ee.connect()), U
                }
            }
            class oe extends A.L {
                constructor(Y, re) {
                    super(Y), this.connectable = re
                }
                _unsubscribe() {
                    const {
                        connectable: Y
                    } = this;
                    if (!Y) return void(this.connection = null);
                    this.connectable = null;
                    const re = Y._refCount;
                    if (re <= 0) return void(this.connection = null);
                    if (Y._refCount = re - 1, re > 1) return void(this.connection = null);
                    const {
                        connection: ee
                    } = this, Q = Y._connection;
                    this.connection = null, Q && (!ee || Q === ee) && Q.unsubscribe()
                }
            }
        },
        7349: (We, fe, O) => {
            "use strict";
            O.d(fe, {
                d: () => m
            });
            var A = O(1929);

            function m(oe, Z, Y) {
                let re;
                return re = oe && "object" == typeof oe ? oe : {
                    bufferSize: oe,
                    windowTime: Z,
                    refCount: !1,
                    scheduler: Y
                }, ee => ee.lift(function({
                    bufferSize: oe = Number.POSITIVE_INFINITY,
                    windowTime: Z = Number.POSITIVE_INFINITY,
                    refCount: Y,
                    scheduler: re
                }) {
                    let ee, U, Q = 0,
                        z = !1,
                        te = !1;
                    return function(Ae) {
                        let De;
                        Q++, !ee || z ? (z = !1, ee = new A.t(oe, Z, re), De = ee.subscribe(this), U = Ae.subscribe({
                            next(ge) {
                                ee.next(ge)
                            },
                            error(ge) {
                                z = !0, ee.error(ge)
                            },
                            complete() {
                                te = !0, U = void 0, ee.complete()
                            }
                        }), te && (U = void 0)) : De = ee.subscribe(this), this.add(() => {
                            Q--, De.unsubscribe(), De = void 0, U && !te && Y && 0 === Q && (U.unsubscribe(), U = void 0, ee = void 0)
                        })
                    }
                }(re))
            }
        },
        9761: (We, fe, O) => {
            "use strict";
            O.d(fe, {
                O: () => he
            });
            var A = O(8071),
                m = O(4869);

            function he(...oe) {
                const Z = oe[oe.length - 1];
                return (0, m.K)(Z) ? (oe.pop(), Y => (0, A.z)(oe, Y, Z)) : Y => (0, A.z)(oe, Y)
            }
        },
        3190: (We, fe, O) => {
            "use strict";
            O.d(fe, {
                w: () => oe
            });
            var A = O(8002),
                m = O(4402),
                he = O(5345);

            function oe(re, ee) {
                return "function" == typeof ee ? Q => Q.pipe(oe((U, z) => (0, m.D)(re(U, z)).pipe((0, A.U)((te, q) => ee(U, te, z, q))))) : Q => Q.lift(new Z(re))
            }
            class Z {
                constructor(ee) {
                    this.project = ee
                }
                call(ee, Q) {
                    return Q.subscribe(new Y(ee, this.project))
                }
            }
            class Y extends he.Ds {
                constructor(ee, Q) {
                    super(ee), this.project = Q, this.index = 0
                }
                _next(ee) {
                    let Q;
                    const U = this.index++;
                    try {
                        Q = this.project(ee, U)
                    } catch (z) {
                        return void this.destination.error(z)
                    }
                    this._innerSub(Q)
                }
                _innerSub(ee) {
                    const Q = this.innerSubscription;
                    Q && Q.unsubscribe();
                    const U = new he.IY(this),
                        z = this.destination;
                    z.add(U), this.innerSubscription = (0, he.ft)(ee, U), this.innerSubscription !== U && z.add(this.innerSubscription)
                }
                _complete() {
                    const {
                        innerSubscription: ee
                    } = this;
                    (!ee || ee.closed) && super._complete(), this.unsubscribe()
                }
                _unsubscribe() {
                    this.innerSubscription = void 0
                }
                notifyComplete() {
                    this.innerSubscription = void 0, this.isStopped && super._complete()
                }
                notifyNext(ee) {
                    this.destination.next(ee)
                }
            }
        },
        5257: (We, fe, O) => {
            "use strict";
            O.d(fe, {
                q: () => oe
            });
            var A = O(7393),
                m = O(7108),
                he = O(9193);

            function oe(re) {
                return ee => 0 === re ? (0, he.c)() : ee.lift(new Z(re))
            }
            class Z {
                constructor(ee) {
                    if (this.total = ee, this.total < 0) throw new m.W
                }
                call(ee, Q) {
                    return Q.subscribe(new Y(ee, this.total))
                }
            }
            class Y extends A.L {
                constructor(ee, Q) {
                    super(ee), this.total = Q, this.count = 0
                }
                _next(ee) {
                    const Q = this.total,
                        U = ++this.count;
                    U <= Q && (this.destination.next(ee), U === Q && (this.destination.complete(), this.unsubscribe()))
                }
            }
        },
        4087: (We, fe, O) => {
            "use strict";
            O.d(fe, {
                r: () => he
            });
            var A = O(7574),
                m = O(5319);

            function he(oe, Z) {
                return new A.y(Y => {
                    const re = new m.w;
                    let ee = 0;
                    return re.add(Z.schedule(function() {
                        ee !== oe.length ? (Y.next(oe[ee++]), Y.closed || re.add(this.schedule())) : Y.complete()
                    })), re
                })
            }
        },
        6465: (We, fe, O) => {
            "use strict";
            O.d(fe, {
                o: () => he
            });
            var A = O(5319);
            class m extends A.w {
                constructor(Z, Y) {
                    super()
                }
                schedule(Z, Y = 0) {
                    return this
                }
            }
            class he extends m {
                constructor(Z, Y) {
                    super(Z, Y), this.scheduler = Z, this.work = Y, this.pending = !1
                }
                schedule(Z, Y = 0) {
                    if (this.closed) return this;
                    this.state = Z;
                    const re = this.id,
                        ee = this.scheduler;
                    return null != re && (this.id = this.recycleAsyncId(ee, re, Y)), this.pending = !0, this.delay = Y, this.id = this.id || this.requestAsyncId(ee, this.id, Y), this
                }
                requestAsyncId(Z, Y, re = 0) {
                    return setInterval(Z.flush.bind(Z, this), re)
                }
                recycleAsyncId(Z, Y, re = 0) {
                    if (null !== re && this.delay === re && !1 === this.pending) return Y;
                    clearInterval(Y)
                }
                execute(Z, Y) {
                    if (this.closed) return new Error("executing a cancelled action");
                    this.pending = !1;
                    const re = this._execute(Z, Y);
                    if (re) return re;
                    !1 === this.pending && null != this.id && (this.id = this.recycleAsyncId(this.scheduler, this.id, null))
                }
                _execute(Z, Y) {
                    let ee, re = !1;
                    try {
                        this.work(Z)
                    } catch (Q) {
                        re = !0, ee = !!Q && Q || new Error(Q)
                    }
                    if (re) return this.unsubscribe(), ee
                }
                _unsubscribe() {
                    const Z = this.id,
                        Y = this.scheduler,
                        re = Y.actions,
                        ee = re.indexOf(this);
                    this.work = null, this.state = null, this.pending = !1, this.scheduler = null, -1 !== ee && re.splice(ee, 1), null != Z && (this.id = this.recycleAsyncId(Y, Z, null)), this.delay = null
                }
            }
        },
        6102: (We, fe, O) => {
            "use strict";
            O.d(fe, {
                v: () => m
            });
            let A = (() => {
                class he {
                    constructor(Z, Y = he.now) {
                        this.SchedulerAction = Z, this.now = Y
                    }
                    schedule(Z, Y = 0, re) {
                        return new this.SchedulerAction(this, Z).schedule(re, Y)
                    }
                }
                return he.now = () => Date.now(), he
            })();
            class m extends A {
                constructor(oe, Z = A.now) {
                    super(oe, () => m.delegate && m.delegate !== this ? m.delegate.now() : Z()), this.actions = [], this.active = !1, this.scheduled = void 0
                }
                schedule(oe, Z = 0, Y) {
                    return m.delegate && m.delegate !== this ? m.delegate.schedule(oe, Z, Y) : super.schedule(oe, Z, Y)
                }
                flush(oe) {
                    const {
                        actions: Z
                    } = this;
                    if (this.active) return void Z.push(oe);
                    let Y;
                    this.active = !0;
                    do {
                        if (Y = oe.execute(oe.state, oe.delay)) break
                    } while (oe = Z.shift());
                    if (this.active = !1, Y) {
                        for (; oe = Z.shift();) oe.unsubscribe();
                        throw Y
                    }
                }
            }
        },
        377: (We, fe, O) => {
            "use strict";
            O.d(fe, {
                hZ: () => m
            });
            const m = "function" == typeof Symbol && Symbol.iterator ? Symbol.iterator : "@@iterator"
        },
        6554: (We, fe, O) => {
            "use strict";
            O.d(fe, {
                L: () => A
            });
            const A = "function" == typeof Symbol && Symbol.observable || "@@observable"
        },
        9181: (We, fe, O) => {
            "use strict";
            O.d(fe, {
                b: () => A
            });
            const A = "function" == typeof Symbol ? Symbol("rxSubscriber") : "@@rxSubscriber_" + Math.random()
        },
        7108: (We, fe, O) => {
            "use strict";
            O.d(fe, {
                W: () => m
            });
            const m = (() => {
                function he() {
                    return Error.call(this), this.message = "argument out of range", this.name = "ArgumentOutOfRangeError", this
                }
                return he.prototype = Object.create(Error.prototype), he
            })()
        },
        7971: (We, fe, O) => {
            "use strict";
            O.d(fe, {
                N: () => m
            });
            const m = (() => {
                function he() {
                    return Error.call(this), this.message = "object unsubscribed", this.name = "ObjectUnsubscribedError", this
                }
                return he.prototype = Object.create(Error.prototype), he
            })()
        },
        4449: (We, fe, O) => {
            "use strict";

            function A(m) {
                setTimeout(() => {
                    throw m
                }, 0)
            }
            O.d(fe, {
                z: () => A
            })
        },
        4487: (We, fe, O) => {
            "use strict";

            function A(m) {
                return m
            }
            O.d(fe, {
                y: () => A
            })
        },
        9796: (We, fe, O) => {
            "use strict";
            O.d(fe, {
                k: () => A
            });
            const A = Array.isArray || (m => m && "number" == typeof m.length)
        },
        9489: (We, fe, O) => {
            "use strict";
            O.d(fe, {
                z: () => A
            });
            const A = m => m && "number" == typeof m.length && "function" != typeof m
        },
        9105: (We, fe, O) => {
            "use strict";

            function A(m) {
                return "function" == typeof m
            }
            O.d(fe, {
                m: () => A
            })
        },
        1555: (We, fe, O) => {
            "use strict";

            function A(m) {
                return null !== m && "object" == typeof m
            }
            O.d(fe, {
                K: () => A
            })
        },
        4072: (We, fe, O) => {
            "use strict";

            function A(m) {
                return !!m && "function" != typeof m.subscribe && "function" == typeof m.then
            }
            O.d(fe, {
                t: () => A
            })
        },
        4869: (We, fe, O) => {
            "use strict";

            function A(m) {
                return m && "function" == typeof m.schedule
            }
            O.d(fe, {
                K: () => A
            })
        },
        7444: (We, fe, O) => {
            "use strict";
            O.d(fe, {
                s: () => z
            });
            var A = O(5015),
                m = O(4449),
                oe = O(377),
                Y = O(6554),
                ee = O(9489),
                Q = O(4072),
                U = O(1555);
            const z = te => {
                if (te && "function" == typeof te[Y.L]) return (te => q => {
                    const Ae = te[Y.L]();
                    if ("function" != typeof Ae.subscribe) throw new TypeError("Provided object does not correctly implement Symbol.observable");
                    return Ae.subscribe(q)
                })(te);
                if ((0, ee.z)(te)) return (0, A.V)(te);
                if ((0, Q.t)(te)) return (te => q => (te.then(Ae => {
                    q.closed || (q.next(Ae), q.complete())
                }, Ae => q.error(Ae)).then(null, m.z), q))(te);
                if (te && "function" == typeof te[oe.hZ]) return (te => q => {
                    const Ae = te[oe.hZ]();
                    for (;;) {
                        let De;
                        try {
                            De = Ae.next()
                        } catch (ge) {
                            return q.error(ge), q
                        }
                        if (De.done) {
                            q.complete();
                            break
                        }
                        if (q.next(De.value), q.closed) break
                    }
                    return "function" == typeof Ae.return && q.add(() => {
                        Ae.return && Ae.return()
                    }), q
                })(te); {
                    const Ae = `You provided ${(0,U.K)(te)?"an invalid object":`'${te}'`} where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.`;
                    throw new TypeError(Ae)
                }
            }
        },
        5015: (We, fe, O) => {
            "use strict";
            O.d(fe, {
                V: () => A
            });
            const A = m => he => {
                for (let oe = 0, Z = m.length; oe < Z && !he.closed; oe++) he.next(m[oe]);
                he.complete()
            }
        },
        7345: (We, fe, O) => {
            "use strict";
            var A = O(8583),
                m = O(3018);
            class he extends A.w_ {
                constructor() {
                    super(...arguments), this.supportsDOMEvents = !0
                }
            }
            class oe extends he {
                static makeCurrent() {
                    (0, A.HT)(new oe)
                }
                onAndCancel(o, a, f) {
                    return o.addEventListener(a, f, !1), () => {
                        o.removeEventListener(a, f, !1)
                    }
                }
                dispatchEvent(o, a) {
                    o.dispatchEvent(a)
                }
                remove(o) {
                    o.parentNode && o.parentNode.removeChild(o)
                }
                createElement(o, a) {
                    return (a = a || this.getDefaultDocument()).createElement(o)
                }
                createHtmlDocument() {
                    return document.implementation.createHTMLDocument("fakeTitle")
                }
                getDefaultDocument() {
                    return document
                }
                isElementNode(o) {
                    return o.nodeType === Node.ELEMENT_NODE
                }
                isShadowRoot(o) {
                    return o instanceof DocumentFragment
                }
                getGlobalEventTarget(o, a) {
                    return "window" === a ? window : "document" === a ? o : "body" === a ? o.body : null
                }
                getBaseHref(o) {
                    const a = (Z = Z || document.querySelector("base"), Z ? Z.getAttribute("href") : null);
                    return null == a ? null : function(p) {
                        re = re || document.createElement("a"), re.setAttribute("href", p);
                        const o = re.pathname;
                        return "/" === o.charAt(0) ? o : `/${o}`
                    }(a)
                }
                resetBaseElement() {
                    Z = null
                }
                getUserAgent() {
                    return window.navigator.userAgent
                }
                getCookie(o) {
                    return (0, A.Mx)(document.cookie, o)
                }
            }
            let re, Z = null;
            const Q = new m.OlP("TRANSITION_ID"),
                z = [{
                    provide: m.ip1,
                    useFactory: function(p, o, a) {
                        return () => {
                            a.get(m.CZH).donePromise.then(() => {
                                const f = (0, A.q)(),
                                    C = o.querySelectorAll(`style[ng-transition="${p}"]`);
                                for (let w = 0; w < C.length; w++) f.remove(C[w])
                            })
                        }
                    },
                    deps: [Q, A.K0, m.zs3],
                    multi: !0
                }];
            class te {
                static init() {
                    (0, m.VLi)(new te)
                }
                addToWindow(o) {
                    m.dqk.getAngularTestability = (f, C = !0) => {
                        const w = o.findTestabilityInTree(f, C);
                        if (null == w) throw new Error("Could not find testability for element.");
                        return w
                    }, m.dqk.getAllAngularTestabilities = () => o.getAllTestabilities(), m.dqk.getAllAngularRootElements = () => o.getAllRootElements(), m.dqk.frameworkStabilizers || (m.dqk.frameworkStabilizers = []), m.dqk.frameworkStabilizers.push(f => {
                        const C = m.dqk.getAllAngularTestabilities();
                        let w = C.length,
                            R = !1;
                        const F = function(G) {
                            R = R || G, w--, 0 == w && f(R)
                        };
                        C.forEach(function(G) {
                            G.whenStable(F)
                        })
                    })
                }
                findTestabilityInTree(o, a, f) {
                    if (null == a) return null;
                    const C = o.getTestability(a);
                    return null != C ? C : f ? (0, A.q)().isShadowRoot(a) ? this.findTestabilityInTree(o, a.host, !0) : this.findTestabilityInTree(o, a.parentElement, !0) : null
                }
            }
            let q = (() => {
                class p {
                    build() {
                        return new XMLHttpRequest
                    }
                }
                return p.\u0275fac = function(a) {
                    return new(a || p)
                }, p.\u0275prov = m.Yz7({
                    token: p,
                    factory: p.\u0275fac
                }), p
            })();
            const Ve = new m.OlP("EventManagerPlugins");
            let Le = (() => {
                class p {
                    constructor(a, f) {
                        this._zone = f, this._eventNameToPlugin = new Map, a.forEach(C => C.manager = this), this._plugins = a.slice().reverse()
                    }
                    addEventListener(a, f, C) {
                        return this._findPluginFor(f).addEventListener(a, f, C)
                    }
                    addGlobalEventListener(a, f, C) {
                        return this._findPluginFor(f).addGlobalEventListener(a, f, C)
                    }
                    getZone() {
                        return this._zone
                    }
                    _findPluginFor(a) {
                        const f = this._eventNameToPlugin.get(a);
                        if (f) return f;
                        const C = this._plugins;
                        for (let w = 0; w < C.length; w++) {
                            const R = C[w];
                            if (R.supports(a)) return this._eventNameToPlugin.set(a, R), R
                        }
                        throw new Error(`No event manager plugin found for event ${a}`)
                    }
                }
                return p.\u0275fac = function(a) {
                    return new(a || p)(m.LFG(Ve), m.LFG(m.R0b))
                }, p.\u0275prov = m.Yz7({
                    token: p,
                    factory: p.\u0275fac
                }), p
            })();
            class st {
                constructor(o) {
                    this._doc = o
                }
                addGlobalEventListener(o, a, f) {
                    const C = (0, A.q)().getGlobalEventTarget(this._doc, o);
                    if (!C) throw new Error(`Unsupported event target ${C} for event ${a}`);
                    return this.addEventListener(C, a, f)
                }
            }
            let Ne = (() => {
                    class p {
                        constructor() {
                            this._stylesSet = new Set
                        }
                        addStyles(a) {
                            const f = new Set;
                            a.forEach(C => {
                                this._stylesSet.has(C) || (this._stylesSet.add(C), f.add(C))
                            }), this.onStylesAdded(f)
                        }
                        onStylesAdded(a) {}
                        getAllStyles() {
                            return Array.from(this._stylesSet)
                        }
                    }
                    return p.\u0275fac = function(a) {
                        return new(a || p)
                    }, p.\u0275prov = m.Yz7({
                        token: p,
                        factory: p.\u0275fac
                    }), p
                })(),
                Ut = (() => {
                    class p extends Ne {
                        constructor(a) {
                            super(), this._doc = a, this._hostNodes = new Map, this._hostNodes.set(a.head, [])
                        }
                        _addStylesToHost(a, f, C) {
                            a.forEach(w => {
                                const R = this._doc.createElement("style");
                                R.textContent = w, C.push(f.appendChild(R))
                            })
                        }
                        addHost(a) {
                            const f = [];
                            this._addStylesToHost(this._stylesSet, a, f), this._hostNodes.set(a, f)
                        }
                        removeHost(a) {
                            const f = this._hostNodes.get(a);
                            f && f.forEach(er), this._hostNodes.delete(a)
                        }
                        onStylesAdded(a) {
                            this._hostNodes.forEach((f, C) => {
                                this._addStylesToHost(a, C, f)
                            })
                        }
                        ngOnDestroy() {
                            this._hostNodes.forEach(a => a.forEach(er))
                        }
                    }
                    return p.\u0275fac = function(a) {
                        return new(a || p)(m.LFG(A.K0))
                    }, p.\u0275prov = m.Yz7({
                        token: p,
                        factory: p.\u0275fac
                    }), p
                })();

            function er(p) {
                (0, A.q)().remove(p)
            }
            const Tr = {
                    svg: "http://www.w3.org/2000/svg",
                    xhtml: "http://www.w3.org/1999/xhtml",
                    xlink: "http://www.w3.org/1999/xlink",
                    xml: "http://www.w3.org/XML/1998/namespace",
                    xmlns: "http://www.w3.org/2000/xmlns/"
                },
                us = /%COMP%/g;

            function de(p, o, a) {
                for (let f = 0; f < o.length; f++) {
                    let C = o[f];
                    Array.isArray(C) ? de(p, C, a) : (C = C.replace(us, p), a.push(C))
                }
                return a
            }

            function Te(p) {
                return o => {
                    if ("__ngUnwrap__" === o) return p;
                    !1 === p(o) && (o.preventDefault(), o.returnValue = !1)
                }
            }
            let Ht = (() => {
                class p {
                    constructor(a, f, C) {
                        this.eventManager = a, this.sharedStylesHost = f, this.appId = C, this.rendererByCompId = new Map, this.defaultRenderer = new pt(a)
                    }
                    createRenderer(a, f) {
                        if (!a || !f) return this.defaultRenderer;
                        switch (f.encapsulation) {
                            case m.ifc.Emulated: {
                                let C = this.rendererByCompId.get(f.id);
                                return C || (C = new Kt(this.eventManager, this.sharedStylesHost, f, this.appId), this.rendererByCompId.set(f.id, C)), C.applyToHost(a), C
                            }
                            case 1:
                            case m.ifc.ShadowDom:
                                return new Ui(this.eventManager, this.sharedStylesHost, a, f);
                            default:
                                if (!this.rendererByCompId.has(f.id)) {
                                    const C = de(f.id, f.styles, []);
                                    this.sharedStylesHost.addStyles(C), this.rendererByCompId.set(f.id, this.defaultRenderer)
                                }
                                return this.defaultRenderer
                        }
                    }
                    begin() {}
                    end() {}
                }
                return p.\u0275fac = function(a) {
                    return new(a || p)(m.LFG(Le), m.LFG(Ut), m.LFG(m.AFp))
                }, p.\u0275prov = m.Yz7({
                    token: p,
                    factory: p.\u0275fac
                }), p
            })();
            class pt {
                constructor(o) {
                    this.eventManager = o, this.data = Object.create(null)
                }
                destroy() {}
                createElement(o, a) {
                    return a ? document.createElementNS(Tr[a] || a, o) : document.createElement(o)
                }
                createComment(o) {
                    return document.createComment(o)
                }
                createText(o) {
                    return document.createTextNode(o)
                }
                appendChild(o, a) {
                    o.appendChild(a)
                }
                insertBefore(o, a, f) {
                    o && o.insertBefore(a, f)
                }
                removeChild(o, a) {
                    o && o.removeChild(a)
                }
                selectRootElement(o, a) {
                    let f = "string" == typeof o ? document.querySelector(o) : o;
                    if (!f) throw new Error(`The selector "${o}" did not match any elements`);
                    return a || (f.textContent = ""), f
                }
                parentNode(o) {
                    return o.parentNode
                }
                nextSibling(o) {
                    return o.nextSibling
                }
                setAttribute(o, a, f, C) {
                    if (C) {
                        a = C + ":" + a;
                        const w = Tr[C];
                        w ? o.setAttributeNS(w, a, f) : o.setAttribute(a, f)
                    } else o.setAttribute(a, f)
                }
                removeAttribute(o, a, f) {
                    if (f) {
                        const C = Tr[f];
                        C ? o.removeAttributeNS(C, a) : o.removeAttribute(`${f}:${a}`)
                    } else o.removeAttribute(a)
                }
                addClass(o, a) {
                    o.classList.add(a)
                }
                removeClass(o, a) {
                    o.classList.remove(a)
                }
                setStyle(o, a, f, C) {
                    C & (m.JOm.DashCase | m.JOm.Important) ? o.style.setProperty(a, f, C & m.JOm.Important ? "important" : "") : o.style[a] = f
                }
                removeStyle(o, a, f) {
                    f & m.JOm.DashCase ? o.style.removeProperty(a) : o.style[a] = ""
                }
                setProperty(o, a, f) {
                    o[a] = f
                }
                setValue(o, a) {
                    o.nodeValue = a
                }
                listen(o, a, f) {
                    return "string" == typeof o ? this.eventManager.addGlobalEventListener(o, a, Te(f)) : this.eventManager.addEventListener(o, a, Te(f))
                }
            }
            class Kt extends pt {
                constructor(o, a, f, C) {
                    super(o), this.component = f;
                    const w = de(C + "-" + f.id, f.styles, []);
                    a.addStyles(w), this.contentAttr = "_ngcontent-%COMP%".replace(us, C + "-" + f.id), this.hostAttr = "_nghost-%COMP%".replace(us, C + "-" + f.id)
                }
                applyToHost(o) {
                    super.setAttribute(o, this.hostAttr, "")
                }
                createElement(o, a) {
                    const f = super.createElement(o, a);
                    return super.setAttribute(f, this.contentAttr, ""), f
                }
            }
            class Ui extends pt {
                constructor(o, a, f, C) {
                    super(o), this.sharedStylesHost = a, this.hostEl = f, this.shadowRoot = f.attachShadow({
                        mode: "open"
                    }), this.sharedStylesHost.addHost(this.shadowRoot);
                    const w = de(C.id, C.styles, []);
                    for (let R = 0; R < w.length; R++) {
                        const F = document.createElement("style");
                        F.textContent = w[R], this.shadowRoot.appendChild(F)
                    }
                }
                nodeOrShadowRoot(o) {
                    return o === this.hostEl ? this.shadowRoot : o
                }
                destroy() {
                    this.sharedStylesHost.removeHost(this.shadowRoot)
                }
                appendChild(o, a) {
                    return super.appendChild(this.nodeOrShadowRoot(o), a)
                }
                insertBefore(o, a, f) {
                    return super.insertBefore(this.nodeOrShadowRoot(o), a, f)
                }
                removeChild(o, a) {
                    return super.removeChild(this.nodeOrShadowRoot(o), a)
                }
                parentNode(o) {
                    return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(o)))
                }
            }
            let Hi = (() => {
                class p extends st {
                    constructor(a) {
                        super(a)
                    }
                    supports(a) {
                        return !0
                    }
                    addEventListener(a, f, C) {
                        return a.addEventListener(f, C, !1), () => this.removeEventListener(a, f, C)
                    }
                    removeEventListener(a, f, C) {
                        return a.removeEventListener(f, C)
                    }
                }
                return p.\u0275fac = function(a) {
                    return new(a || p)(m.LFG(A.K0))
                }, p.\u0275prov = m.Yz7({
                    token: p,
                    factory: p.\u0275fac
                }), p
            })();
            const Pe = ["alt", "control", "meta", "shift"],
                we = {
                    "\b": "Backspace",
                    "\t": "Tab",
                    "\x7f": "Delete",
                    "\x1b": "Escape",
                    Del: "Delete",
                    Esc: "Escape",
                    Left: "ArrowLeft",
                    Right: "ArrowRight",
                    Up: "ArrowUp",
                    Down: "ArrowDown",
                    Menu: "ContextMenu",
                    Scroll: "ScrollLock",
                    Win: "OS"
                },
                Ke = {
                    A: "1",
                    B: "2",
                    C: "3",
                    D: "4",
                    E: "5",
                    F: "6",
                    G: "7",
                    H: "8",
                    I: "9",
                    J: "*",
                    K: "+",
                    M: "-",
                    N: ".",
                    O: "/",
                    "`": "0",
                    "\x90": "NumLock"
                },
                yt = {
                    alt: p => p.altKey,
                    control: p => p.ctrlKey,
                    meta: p => p.metaKey,
                    shift: p => p.shiftKey
                };
            let ot = (() => {
                class p extends st {
                    constructor(a) {
                        super(a)
                    }
                    supports(a) {
                        return null != p.parseEventName(a)
                    }
                    addEventListener(a, f, C) {
                        const w = p.parseEventName(f),
                            R = p.eventCallback(w.fullKey, C, this.manager.getZone());
                        return this.manager.getZone().runOutsideAngular(() => (0, A.q)().onAndCancel(a, w.domEventName, R))
                    }
                    static parseEventName(a) {
                        const f = a.toLowerCase().split("."),
                            C = f.shift();
                        if (0 === f.length || "keydown" !== C && "keyup" !== C) return null;
                        const w = p._normalizeKey(f.pop());
                        let R = "";
                        if (Pe.forEach(G => {
                                const ie = f.indexOf(G);
                                ie > -1 && (f.splice(ie, 1), R += G + ".")
                            }), R += w, 0 != f.length || 0 === w.length) return null;
                        const F = {};
                        return F.domEventName = C, F.fullKey = R, F
                    }
                    static getEventFullKey(a) {
                        let f = "",
                            C = function(p) {
                                let o = p.key;
                                if (null == o) {
                                    if (o = p.keyIdentifier, null == o) return "Unidentified";
                                    o.startsWith("U+") && (o = String.fromCharCode(parseInt(o.substring(2), 16)), 3 === p.location && Ke.hasOwnProperty(o) && (o = Ke[o]))
                                }
                                return we[o] || o
                            }(a);
                        return C = C.toLowerCase(), " " === C ? C = "space" : "." === C && (C = "dot"), Pe.forEach(w => {
                            w != C && yt[w](a) && (f += w + ".")
                        }), f += C, f
                    }
                    static eventCallback(a, f, C) {
                        return w => {
                            p.getEventFullKey(w) === a && C.runGuarded(() => f(w))
                        }
                    }
                    static _normalizeKey(a) {
                        switch (a) {
                            case "esc":
                                return "escape";
                            default:
                                return a
                        }
                    }
                }
                return p.\u0275fac = function(a) {
                    return new(a || p)(m.LFG(A.K0))
                }, p.\u0275prov = m.Yz7({
                    token: p,
                    factory: p.\u0275fac
                }), p
            })();
            const Mr = (0, m.eFA)(m._c5, "browser", [{
                    provide: m.Lbi,
                    useValue: A.bD
                }, {
                    provide: m.g9A,
                    useValue: function() {
                        oe.makeCurrent(), te.init()
                    },
                    multi: !0
                }, {
                    provide: A.K0,
                    useFactory: function() {
                        return (0, m.RDi)(document), document
                    },
                    deps: []
                }]),
                pi = [
                    [], {
                        provide: m.zSh,
                        useValue: "root"
                    }, {
                        provide: m.qLn,
                        useFactory: function() {
                            return new m.qLn
                        },
                        deps: []
                    }, {
                        provide: Ve,
                        useClass: Hi,
                        multi: !0,
                        deps: [A.K0, m.R0b, m.Lbi]
                    }, {
                        provide: Ve,
                        useClass: ot,
                        multi: !0,
                        deps: [A.K0]
                    },
                    [], {
                        provide: Ht,
                        useClass: Ht,
                        deps: [Le, Ut, m.AFp]
                    }, {
                        provide: m.FYo,
                        useExisting: Ht
                    }, {
                        provide: Ne,
                        useExisting: Ut
                    }, {
                        provide: Ut,
                        useClass: Ut,
                        deps: [A.K0]
                    }, {
                        provide: m.dDg,
                        useClass: m.dDg,
                        deps: [m.R0b]
                    }, {
                        provide: Le,
                        useClass: Le,
                        deps: [Ve, m.R0b]
                    }, {
                        provide: A.JF,
                        useClass: q,
                        deps: []
                    },
                    []
                ];
            let cs = (() => {
                class p {
                    constructor(a) {
                        if (a) throw new Error("BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead.")
                    }
                    static withServerTransition(a) {
                        return {
                            ngModule: p,
                            providers: [{
                                provide: m.AFp,
                                useValue: a.appId
                            }, {
                                provide: Q,
                                useExisting: m.AFp
                            }, z]
                        }
                    }
                }
                return p.\u0275fac = function(a) {
                    return new(a || p)(m.LFG(p, 12))
                }, p.\u0275mod = m.oAB({
                    type: p
                }), p.\u0275inj = m.cJS({
                    providers: pi,
                    imports: [A.ez, m.hGG]
                }), p
            })();
            "undefined" != typeof window && window;
            var Ft = O(8934);
            const Bt = [{
                path: "index",
                loadChildren: () => Promise.all([O.e(592), O.e(225)]).then(O.bind(O, 7225)).then(p => p.IndexModule)
            }, {
                path: "products",
                loadChildren: () => Promise.all([O.e(592), O.e(946)]).then(O.bind(O, 946)).then(p => p.ProductsModule)
            }, {
                path: "about",
                loadChildren: () => Promise.all([O.e(592), O.e(863)]).then(O.bind(O, 863)).then(p => p.AboutModule)
            }, {
                path: "research",
                loadChildren: () => Promise.all([O.e(592), O.e(284)]).then(O.bind(O, 7284)).then(p => p.ResearchModule)
            }, {
                path: "contact",
                loadChildren: () => Promise.all([O.e(592), O.e(460)]).then(O.bind(O, 5460)).then(p => p.ContactModule)
            }, {
                path: "store",
                loadChildren: () => Promise.all([O.e(592), O.e(460)]).then(O.bind(O, 5460)).then(p => p.ContactModule)
            }, {
                path: "",
                redirectTo: "/index",
                pathMatch: "full"
            }, {
                path: "**",
                redirectTo: "/index",
                pathMatch: "full"
            }];
            let Wn = (() => {
                    class p {}
                    return p.\u0275fac = function(a) {
                        return new(a || p)
                    }, p.\u0275mod = m.oAB({
                        type: p
                    }), p.\u0275inj = m.cJS({
                        imports: [
                            [Ft.Bz.forRoot(Bt, {
                                useHash: !0
                            })], Ft.Bz
                        ]
                    }), p
                })(),
                hs = (() => {
                    class p {
                        remove(a) {
                            const f = document.getElementsByClassName(a) || [];
                            f.length > 0 && f.forEach(function(C) {
                                C.innerHTML || C.remove()
                            })
                        }
                    }
                    return p.\u0275fac = function(a) {
                        return new(a || p)
                    }, p.\u0275prov = m.Yz7({
                        token: p,
                        factory: p.\u0275fac,
                        providedIn: "root"
                    }), p
                })();
            class tt {}
            const wn = "*";

            function Ur(p, o) {
                return {
                    type: 7,
                    name: p,
                    definitions: o,
                    options: {}
                }
            }

            function Kn(p, o = null) {
                return {
                    type: 4,
                    styles: o,
                    timings: p
                }
            }

            function ar(p, o = null) {
                return {
                    type: 2,
                    steps: p,
                    options: o
                }
            }

            function nr(p) {
                return {
                    type: 6,
                    styles: p,
                    offset: null
                }
            }

            function Tn(p, o, a) {
                return {
                    type: 0,
                    name: p,
                    styles: o,
                    options: a
                }
            }

            function ps(p, o, a = null) {
                return {
                    type: 1,
                    expr: p,
                    animation: o,
                    options: a
                }
            }

            function _r(p) {
                Promise.resolve(null).then(p)
            }
            class $t {
                constructor(o = 0, a = 0) {
                    this._onDoneFns = [], this._onStartFns = [], this._onDestroyFns = [], this._started = !1, this._destroyed = !1, this._finished = !1, this._position = 0, this.parentPlayer = null, this.totalTime = o + a
                }
                _onFinish() {
                    this._finished || (this._finished = !0, this._onDoneFns.forEach(o => o()), this._onDoneFns = [])
                }
                onStart(o) {
                    this._onStartFns.push(o)
                }
                onDone(o) {
                    this._onDoneFns.push(o)
                }
                onDestroy(o) {
                    this._onDestroyFns.push(o)
                }
                hasStarted() {
                    return this._started
                }
                init() {}
                play() {
                    this.hasStarted() || (this._onStart(), this.triggerMicrotask()), this._started = !0
                }
                triggerMicrotask() {
                    _r(() => this._onFinish())
                }
                _onStart() {
                    this._onStartFns.forEach(o => o()), this._onStartFns = []
                }
                pause() {}
                restart() {}
                finish() {
                    this._onFinish()
                }
                destroy() {
                    this._destroyed || (this._destroyed = !0, this.hasStarted() || this._onStart(), this.finish(), this._onDestroyFns.forEach(o => o()), this._onDestroyFns = [])
                }
                reset() {
                    this._started = !1
                }
                setPosition(o) {
                    this._position = this.totalTime ? o * this.totalTime : 1
                }
                getPosition() {
                    return this.totalTime ? this._position / this.totalTime : 1
                }
                triggerCallback(o) {
                    const a = "start" == o ? this._onStartFns : this._onDoneFns;
                    a.forEach(f => f()), a.length = 0
                }
            }
            class Ki {
                constructor(o) {
                    this._onDoneFns = [], this._onStartFns = [], this._finished = !1, this._started = !1, this._destroyed = !1, this._onDestroyFns = [], this.parentPlayer = null, this.totalTime = 0, this.players = o;
                    let a = 0,
                        f = 0,
                        C = 0;
                    const w = this.players.length;
                    0 == w ? _r(() => this._onFinish()) : this.players.forEach(R => {
                        R.onDone(() => {
                            ++a == w && this._onFinish()
                        }), R.onDestroy(() => {
                            ++f == w && this._onDestroy()
                        }), R.onStart(() => {
                            ++C == w && this._onStart()
                        })
                    }), this.totalTime = this.players.reduce((R, F) => Math.max(R, F.totalTime), 0)
                }
                _onFinish() {
                    this._finished || (this._finished = !0, this._onDoneFns.forEach(o => o()), this._onDoneFns = [])
                }
                init() {
                    this.players.forEach(o => o.init())
                }
                onStart(o) {
                    this._onStartFns.push(o)
                }
                _onStart() {
                    this.hasStarted() || (this._started = !0, this._onStartFns.forEach(o => o()), this._onStartFns = [])
                }
                onDone(o) {
                    this._onDoneFns.push(o)
                }
                onDestroy(o) {
                    this._onDestroyFns.push(o)
                }
                hasStarted() {
                    return this._started
                }
                play() {
                    this.parentPlayer || this.init(), this._onStart(), this.players.forEach(o => o.play())
                }
                pause() {
                    this.players.forEach(o => o.pause())
                }
                restart() {
                    this.players.forEach(o => o.restart())
                }
                finish() {
                    this._onFinish(), this.players.forEach(o => o.finish())
                }
                destroy() {
                    this._onDestroy()
                }
                _onDestroy() {
                    this._destroyed || (this._destroyed = !0, this._onFinish(), this.players.forEach(o => o.destroy()), this._onDestroyFns.forEach(o => o()), this._onDestroyFns = [])
                }
                reset() {
                    this.players.forEach(o => o.reset()), this._destroyed = !1, this._finished = !1, this._started = !1
                }
                setPosition(o) {
                    const a = o * this.totalTime;
                    this.players.forEach(f => {
                        const C = f.totalTime ? Math.min(1, a / f.totalTime) : 1;
                        f.setPosition(C)
                    })
                }
                getPosition() {
                    const o = this.players.reduce((a, f) => null === a || f.totalTime > a.totalTime ? f : a, null);
                    return null != o ? o.getPosition() : 0
                }
                beforeDestroy() {
                    this.players.forEach(o => {
                        o.beforeDestroy && o.beforeDestroy()
                    })
                }
                triggerCallback(o) {
                    const a = "start" == o ? this._onStartFns : this._onDoneFns;
                    a.forEach(f => f()), a.length = 0
                }
            }
            var St = O(5469);
            let Hr = (() => {
                    class p {
                        constructor(a) {
                            this.translate = a, this.menuState = "out", this.texto = "", this.selected = "es";
                            const f = a.getBrowserLang();
                            a.addLangs(["en", "es"]), f && void 0 !== f && (a.use(f.match(/en|es/) ? f : "es"), a.setDefaultLang("es")), a.onLangChange.subscribe(() => {
                                this.texto = "es" == a.currentLang ? "Espa\xf1ol" : "English"
                            })
                        }
                        toggleMenu() {
                            this.menuState = "in" == this.menuState ? "out" : "in"
                        }
                        setClasses() {
                            return {
                                ham: !0,
                                open: "in" == this.menuState
                            }
                        }
                        test2(a) {
                            console.log(a)
                        }
                    }
                    return p.\u0275fac = function(a) {
                        return new(a || p)(m.Y36(St.sK))
                    }, p.\u0275cmp = m.Xpm({
                        type: p,
                        selectors: [
                            ["nav-bar"]
                        ],
                        decls: 57,
                        vars: 22,
                        consts: [
                            ["role", "navigation", 1, "navbar", "fixed-top"],
                            [1, "container1", "hidden-md-up"],
                            ["id", "nav-icon", 3, "ngClass", "click"],
                            [1, "container2", "hidden"],
                            ["routerLink", "/tienda", 1, "navbar-brand", "hidden-lg-up"],
                            ["src", "assets/images/svg/logo-nav.svg"],
                            ["routerLink", "/tienda", 1, "navbar-brand", "hidden-md-down"],
                            [1, "menu-derecha", "hidden"],
                            ["routerLink", "/index", "routerLinkActive", "active-link"],
                            [1, "material-icons"],
                            ["routerLink", "/products", "routerLinkActive", "active-link"],
                            ["routerLink", "/about", "routerLinkActive", "active-link"],
                            ["routerLink", "/research", "routerLinkActive", "active-link"],
                            ["routerLink", "/contact", "routerLinkActive", "active-link"],
                            [1, "lidioma"],
                            [1, "dropdown", "orden"],
                            ["id", "dropdownMenuButton", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false"],
                            [1, "material-icons", "lang"],
                            [1, "textolang"],
                            ["aria-labelledby", "dropdownMenuButton", 1, "dropdown-menu", 3, "change"],
                            ["langSelect", ""],
                            [1, "dropdown-item", 3, "click"]
                        ],
                        template: function(a, f) {
                            if (1 & a) {
                                const C = m.EpF();
                                m._UZ(0, "side-bar"), m.TgZ(1, "nav", 0), m.TgZ(2, "div", 1), m.TgZ(3, "button", 2), m.NdJ("click", function() {
                                    return f.toggleMenu()
                                }), m._UZ(4, "div"), m._UZ(5, "div"), m._UZ(6, "div"), m.qZA(), m.qZA(), m.TgZ(7, "div", 3), m.TgZ(8, "a", 4), m._UZ(9, "img", 5), m.qZA(), m.TgZ(10, "a", 6), m._UZ(11, "img", 5), m.qZA(), m.TgZ(12, "div", 7), m.TgZ(13, "ul"), m.TgZ(14, "li", 8), m.TgZ(15, "a"), m._uU(16), m.ALo(17, "translate"), m.qZA(), m.qZA(), m.TgZ(18, "i", 9), m._uU(19, "filter_vintage"), m.qZA(), m.TgZ(20, "li", 10), m.TgZ(21, "a"), m._uU(22), m.ALo(23, "translate"), m.qZA(), m.qZA(), m.TgZ(24, "i", 9), m._uU(25, "filter_vintage"), m.qZA(), m.TgZ(26, "li", 11), m.TgZ(27, "a"), m._uU(28), m.ALo(29, "translate"), m.qZA(), m.qZA(), m.TgZ(30, "i", 9), m._uU(31, "filter_vintage"), m.qZA(), m.TgZ(32, "li", 12), m.TgZ(33, "a"), m._uU(34), m.ALo(35, "translate"), m.qZA(), m.qZA(), m.TgZ(36, "i", 9), m._uU(37, "filter_vintage"), m.qZA(), m.TgZ(38, "li", 13), m.TgZ(39, "a"), m._uU(40), m.ALo(41, "translate"), m.qZA(), m.qZA(), m.TgZ(42, "i", 9), m._uU(43, "filter_vintage"), m.qZA(), m.TgZ(44, "li", 14), m.TgZ(45, "div", 15), m.TgZ(46, "a", 16), m.TgZ(47, "i", 17), m._uU(48, "language"), m.qZA(), m.TgZ(49, "h5", 18), m._uU(50), m.qZA(), m.qZA(), m.TgZ(51, "div", 19, 20), m.NdJ("change", function() {
                                    m.CHM(C);
                                    const R = m.MAs(52);
                                    return f.test2(R)
                                }), m.TgZ(53, "a", 21), m.NdJ("click", function() {
                                    return f.translate.use("es"), f.selected = "es"
                                }), m._uU(54, "Espa\xf1ol"), m.qZA(), m.TgZ(55, "a", 21), m.NdJ("click", function() {
                                    return f.translate.use("en"), f.selected = "en"
                                }), m._uU(56, "English"), m.qZA(), m.qZA(), m.qZA(), m.qZA(), m.qZA(), m.qZA(), m.qZA(), m.qZA()
                            }
                            2 & a && (m.Q6J("@slideInOut", f.menuState), m.xp6(3), m.Q6J("ngClass", f.setClasses()), m.xp6(13), m.Oqu(m.lcZ(17, 12, "navegacion.inicio")), m.xp6(6), m.Oqu(m.lcZ(23, 14, "navegacion.productos")), m.xp6(6), m.Oqu(m.lcZ(29, 16, "navegacion.quienesSomos")), m.xp6(6), m.Oqu(m.lcZ(35, 18, "navegacion.investigacion")), m.xp6(6), m.Oqu(m.lcZ(41, 20, "navegacion.contacto")), m.xp6(10), m.Oqu(f.texto), m.xp6(3), m.ekj("active", "es" == f.selected), m.xp6(2), m.ekj("active", "en" == f.selected))
                        },
                        styles: ['side-bar[_ngcontent-%COMP%]{box-sizing:border-box}.navbar[_ngcontent-%COMP%]{font-family:"Open Sans","sans serif";display:block;color:#fff;padding:0;margin:0}.container1[_ngcontent-%COMP%]{box-sizing:border-box;margin:1rem;height:49.995px;height:3.333rem;width:3.333em;background-color:#3e3e3d;display:flex;position:relative;padding:0;justify-content:center;align-items:center}.boton-menu[_ngcontent-%COMP%]{transition:all .15s ease-in-out;font-size:37.5px;font-size:2.5rem;color:#e5a833}.boton-menu[_ngcontent-%COMP%]:hover{background-color:#f44336;border-radius:50%;color:#1f2124}.lidioma[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]{border-radius:3px;border:1px solid darkgray}.lidioma[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]{margin:5px 0!important}.lidioma[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:hover{background-color:#8dc040}.lidioma[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item.active[_ngcontent-%COMP%]{background-color:#8dc0408c}@media all and (min-width: 767px){.container2[_ngcontent-%COMP%]{display:flex;align-items:center;flex-direction:column;background-color:#eee}.navbar-brand[_ngcontent-%COMP%]{cursor:pointer}.navbar-brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{padding:.8rem;width:240px;height:auto}.idioma[_ngcontent-%COMP%]{color:#8dc040;position:absolute;top:.5rem;right:.8rem}.dropdown-menu[_ngcontent-%COMP%]{margin:3px -57px 0;min-width:3rem;position:absolute;top:100%;left:0;z-index:1000;float:left;min-width:10rem;padding:.5rem 0;font-size:1rem;color:#212529;text-align:left;list-style:none;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,.15);border-radius:.25rem}.dropdown-item[_ngcontent-%COMP%]{cursor:pointer}.menu-derecha[_ngcontent-%COMP%]{height:52px;display:flex;width:100%;padding:0;margin:0;background-color:#3e3e3d}.menu-derecha[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{display:none}.menu-derecha[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{padding:0;list-style:none;margin:0 auto;height:50px;display:flex;width:100%;justify-content:center;align-items:center;max-width:920px;align-self:flex-end}.menu-derecha[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:0;height:50px;flex:1 1 25%;transition:all 20ms ease-in-out}.menu-derecha[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:block;padding:.7rem 0;text-align:center;color:#fff;text-decoration:none;font-size:1.2rem}.active-link[_ngcontent-%COMP%]{border-bottom:3px #8dc040 solid}.menu-derecha[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{cursor:pointer;background:none}.lidioma[_ngcontent-%COMP%]{display:flex;max-width:45px;justify-content:center;align-items:center}.lang[_ngcontent-%COMP%]{display:block!important;font-weight:300;font-size:1.4rem}.lidioma[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:.9rem;color:#fff!important}.lidioma[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]{right:unset;left:-75px}.lidioma[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#212020!important}.lidioma[_ngcontent-%COMP%]   .textolang[_ngcontent-%COMP%]{display:none}}@media screen and (min-width: 992px){.container2[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-around;flex-direction:row;padding:.8rem;width:100%;margin:0;height:90px;background-color:#fff;border-bottom:3px solid #3e3e3d}.menu-derecha[_ngcontent-%COMP%]{display:flex;margin-right:0;background-color:#fff}.menu-derecha[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin-right:0;height:auto}.menu-derecha[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{width:auto;height:auto}.menu-derecha[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(5){min-width:135px}.menu-derecha[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#1f2124;font-size:1.2rem;padding:.1rem}.menu-derecha[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{display:inline-block;color:#8dc040;font-size:1rem;align-self:flex-start;padding:10px 1rem}.navbar-brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{font-size:1.4rem;padding:0;width:250px;height:auto}}@media only screen and (min-width: 1280px){.container2[_ngcontent-%COMP%]{padding-left:2.8rem;padding-right:2.8rem}.lidioma[_ngcontent-%COMP%]   .textolang[_ngcontent-%COMP%]{display:block;margin:0;color:#1f2124}.lidioma[_ngcontent-%COMP%]{display:flex;max-width:unset;justify-content:center;align-items:center}.lidioma[_ngcontent-%COMP%]   #dropdownMenuButton[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{display:none!important}}.ham[_ngcontent-%COMP%]{position:relative;width:32px;height:27px;transition:all .3s cubic-bezier(.61,.01,.42,1);cursor:pointer;background:transparent;border:0px}.ham[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{height:0px;border:2.5px solid #e5a833;width:31px;display:block;position:absolute;transition:all .3s cubic-bezier(.61,.01,.42,1);background:#e5a833}.ham[_ngcontent-%COMP%]:focus{outline:0}.ham[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(1){top:0;left:0}.ham[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2){top:11px;left:0}.ham[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3){top:22px;left:0}.open[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3):before, .open[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3):before, .open[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2){opacity:0;-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";transition:all .2s}.open[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{border:2.5px solid #e5a833;height:0px;border-radius:0%;margin-left:0;margin-top:6px;animation:division .3s linear 1;width:31px;top:5px}.open[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2){width:0px}.open[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3){transform:translateY(-18px) rotate(45deg)}.open[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(1){transform:translateY(.25rem) rotate(-45deg)}@keyframes division{0%{transform:rotate(180deg)}}'],
                        data: {
                            animation: [Ur("slideInOut", [Tn("in", nr({
                                opacity: 1,
                                transform: "translate3d(0, 0, 0)"
                            })), Tn("out", nr({
                                opacity: 0,
                                transform: "translate3d(0, -100%, 0)"
                            })), ps("in => out", Kn("500ms ease-in-out")), ps("out => in", Kn("400ms ease-in-out"))])]
                        }
                    }), p
                })(),
                $r = (() => {
                    class p {
                        constructor(a) {
                            this.translate = a
                        }
                        ngOnInit() {}
                    }
                    return p.\u0275fac = function(a) {
                        return new(a || p)(m.Y36(St.sK))
                    }, p.\u0275cmp = m.Xpm({
                        type: p,
                        selectors: [
                            ["footer"]
                        ],
                        decls: 12,
                        vars: 0,
                        consts: [
                            [1, "total"],
                            ["src", "assets/images/bg/footer-bg.png", "alt", "nature"],
                            [1, "content"],
                            ["href", "https://www.youtube.com/channel/UCkY5XLY53bdxYGNdT1pWecg", "target", "_blank"],
                            ["src", "assets/images/svg/yb-icon.svg", "alt", "follow us"],
                            ["href", "https://www.facebook.com/etnothecarium/", "target", "_blank"],
                            ["src", "assets/images/svg/fb-icon.svg", "alt", "follow us"],
                            ["href", "https://www.instagram.com/etnothecariumbn/", "target", "_blank"],
                            ["src", "assets/images/svg/in-icon.svg", "alt", "follow us"],
                            [1, "copy"]
                        ],
                        template: function(a, f) {
                            1 & a && (m.TgZ(0, "div", 0), m._UZ(1, "img", 1), m.TgZ(2, "div", 2), m.TgZ(3, "a", 3), m._UZ(4, "img", 4), m.qZA(), m.TgZ(5, "a", 5), m._UZ(6, "img", 6), m.qZA(), m.TgZ(7, "a", 7), m._UZ(8, "img", 8), m.qZA(), m.qZA(), m.TgZ(9, "div", 9), m.TgZ(10, "h5"), m._uU(11, "\xa9 Copyright 2022 - Etnothecarium-Botica Natural S.A.S. Ibagu\xe9 - Tolima"), m.qZA(), m.qZA(), m.qZA())
                        },
                        styles: [".total[_ngcontent-%COMP%]{width:100%;bottom:0;position:relative}.total[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%}.content[_ngcontent-%COMP%]{width:100%;height:5rem;background-color:#e8e8e8;border-bottom:2px solid #d8d8d8;display:flex;align-items:center;justify-content:center;margin-top:-.2rem}.content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:32px;width:32px;margin:.8rem}.copy[_ngcontent-%COMP%]{background-color:#fff;width:100%;height:2rem;display:flex;justify-content:center;align-items:center}.copy[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-weight:500;font-size:.6rem}@media all and (min-width: 458px){.copy[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-weight:500;font-size:.6rem}}"]
                    }), p
                })(),
                zr = (() => {
                    class p {
                        constructor() {}
                        ngOnInit() {}
                    }
                    return p.\u0275fac = function(a) {
                        return new(a || p)
                    }, p.\u0275cmp = m.Xpm({
                        type: p,
                        selectors: [
                            ["app-loading"]
                        ],
                        decls: 3,
                        vars: 0,
                        consts: [
                            [1, "total"],
                            [1, "flower"]
                        ],
                        template: function(a, f) {
                            1 & a && (m.TgZ(0, "div", 0), m.TgZ(1, "span", 1), m._uU(2, "Loading..."), m.qZA(), m.qZA())
                        },
                        styles: [".total[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;width:100%;height:100vh;background-color:#8dc040;position:fixed;top:0;left:0;z-index:1000}@keyframes flower{0%{transform:rotate(0);box-shadow:#fff 0 0 15px,#fd8 -12px -12px 0 4px,#fd8 12px -12px 0 4px,#fd8 12px 12px 0 4px,#fd8 -12px 12px 0 4px}50%{transform:rotate(1080deg);box-shadow:#fff 0 0 15px,#fd8 12px 12px 0 4px,#fd8 -12px 12px 0 4px,#fd8 -12px -12px 0 4px,#fd8 12px -12px 0 4px}}body[_ngcontent-%COMP%]{text-align:center;padding:50px}.flower[_ngcontent-%COMP%]{font-family:sans-serif;font-weight:100}.flower[_ngcontent-%COMP%]:not(:required){overflow:hidden;position:relative;text-indent:-9999px;display:inline-block;width:16px;height:16px;background:#e96;border-radius:100%;box-shadow:#fff 0 0 15px,#fd8 -12px -12px 0 4px,#fd8 12px -12px 0 4px,#fd8 12px 12px 0 4px,#fd8 -12px 12px 0 4px;animation:flower 5s infinite ease-in-out;transform-origin:50% 50%}"]
                    }), p
                })();

            function qt(p, o) {
                1 & p && m._UZ(0, "app-loading")
            }
            let gs = (() => {
                    class p {
                        constructor(a, f) {
                            this.router = a, this.utils = f, this.loading = !1, this.userLang = navigator.language
                        }
                        ngOnInit() {
                            this.createListeners()
                        }
                        doSomethingOnWindowScroll(a) {
                            if (a.srcElement.children[0].scrollTop > 150) {
                                const C = document.getElementsByClassName("ws-float-button")[0];
                                void 0 !== C && C.classList.add("bounce-in-right")
                            }
                        }
                        createListeners() {
                            this.router.events.subscribe(a => {
                                if (a instanceof Ft.OD) {
                                    this.loading = !0;
                                    const f = document.getElementsByClassName("ws-float-button")[0];
                                    void 0 !== f && f.classList.contains("bounce-in-right") && f.classList.remove("bounce-in-right")
                                }
                            }), this.router.events.subscribe(a => {
                                $(".modal-backdrop").remove(), window.scrollTo(0, 0), a instanceof Ft.m2 && setTimeout(() => {
                                    this.loading = !1
                                }, 600)
                            })
                        }
                    }
                    return p.\u0275fac = function(a) {
                        return new(a || p)(m.Y36(Ft.F0), m.Y36(hs))
                    }, p.\u0275cmp = m.Xpm({
                        type: p,
                        selectors: [
                            ["app-root"]
                        ],
                        hostBindings: function(a, f) {
                            1 & a && m.NdJ("scroll", function(w) {
                                return f.doSomethingOnWindowScroll(w)
                            }, !1, m.Jf7)
                        },
                        decls: 9,
                        vars: 1,
                        consts: [
                            [1, "main-container", 3, "scroll"],
                            [1, "nav-help"],
                            [4, "ngIf"],
                            [1, "ws-float-button"],
                            ["href", "https://me-qr.com/Wo1Fn", "target", "_blank"],
                            ["src", "assets/images/svg/whatsapp.svg", "alt", "whatsapp-button", 1, "img-fluid"]
                        ],
                        template: function(a, f) {
                            1 & a && (m.TgZ(0, "div", 0), m.NdJ("scroll", function(w) {
                                return f.doSomethingOnWindowScroll(w)
                            }, !1, m.Jf7), m._UZ(1, "nav-bar"), m._UZ(2, "div", 1), m._UZ(3, "router-outlet"), m.YNc(4, qt, 1, 0, "app-loading", 2), m.TgZ(5, "div", 3), m.TgZ(6, "a", 4), m._UZ(7, "img", 5), m.qZA(), m.qZA(), m._UZ(8, "footer"), m.qZA()), 2 & a && (m.xp6(4), m.Q6J("ngIf", f.loading))
                        },
                        directives: [Hr, Ft.lC, A.O5, $r, zr],
                        encapsulation: 2
                    }), p
                })(),
                Io = (() => {
                    class p {
                        constructor(a, f) {
                            this.nav = a, this.translate = f, this.selected = ""
                        }
                        ngOnInit() {}
                        test(a) {}
                    }
                    return p.\u0275fac = function(a) {
                        return new(a || p)(m.Y36(Hr), m.Y36(St.sK))
                    }, p.\u0275cmp = m.Xpm({
                        type: p,
                        selectors: [
                            ["side-bar"]
                        ],
                        decls: 34,
                        vars: 22,
                        consts: [
                            [1, "mySideNav"],
                            [1, "side-menu"],
                            ["routerLink", "/index", "routerLinkActive", "active-link", 3, "click"],
                            ["routerLink", "/products", "routerLinkActive", "active-link", 3, "click"],
                            ["routerLink", "/about", "routerLinkActive", "active-link", 3, "click"],
                            ["routerLink", "/research", "routerLinkActive", "active-link", 3, "click"],
                            ["routerLink", "/contact", "routerLinkActive", "active-link", 3, "click"],
                            [1, "dropdown", "orden"],
                            ["id", "dropdownMenuButton", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false"],
                            ["aria-labelledby", "dropdownMenuButton", 1, "dropdown-menu", 3, "change"],
                            ["langSelect", ""],
                            [1, "dropdown-item", 3, "click"],
                            ["src", "assets/images/stock/thc.png", "alt", "THC Molecule"]
                        ],
                        template: function(a, f) {
                            if (1 & a) {
                                const C = m.EpF();
                                m.TgZ(0, "div", 0), m.TgZ(1, "ul", 1), m.TgZ(2, "li", 2), m.NdJ("click", function() {
                                    return f.nav.toggleMenu()
                                }), m.TgZ(3, "a"), m._uU(4), m.ALo(5, "translate"), m.qZA(), m.qZA(), m.TgZ(6, "li", 3), m.NdJ("click", function() {
                                    return f.nav.toggleMenu()
                                }), m.TgZ(7, "a"), m._uU(8), m.ALo(9, "translate"), m.qZA(), m.qZA(), m.TgZ(10, "li", 4), m.NdJ("click", function() {
                                    return f.nav.toggleMenu()
                                }), m.TgZ(11, "a"), m._uU(12), m.ALo(13, "translate"), m.qZA(), m.qZA(), m.TgZ(14, "li", 5), m.NdJ("click", function() {
                                    return f.nav.toggleMenu()
                                }), m.TgZ(15, "a"), m._uU(16), m.ALo(17, "translate"), m.qZA(), m.qZA(), m.TgZ(18, "li", 6), m.NdJ("click", function() {
                                    return f.nav.toggleMenu()
                                }), m.TgZ(19, "a"), m._uU(20), m.ALo(21, "translate"), m.qZA(), m.qZA(), m.TgZ(22, "li"), m.TgZ(23, "div", 7), m.TgZ(24, "a", 8), m._uU(25), m.ALo(26, "translate"), m.qZA(), m.TgZ(27, "div", 9, 10), m.NdJ("change", function() {
                                    m.CHM(C);
                                    const R = m.MAs(28);
                                    return f.test(R)
                                }), m.TgZ(29, "a", 11), m.NdJ("click", function() {
                                    return f.translate.use("es"), f.selected = "es"
                                }), m._uU(30, "Espa\xf1ol"), m.qZA(), m.TgZ(31, "a", 11), m.NdJ("click", function() {
                                    return f.translate.use("en"), f.selected = "en"
                                }), m._uU(32, "English"), m.qZA(), m.qZA(), m.qZA(), m.qZA(), m.qZA(), m._UZ(33, "img", 12), m.qZA()
                            }
                            2 & a && (m.xp6(4), m.Oqu(m.lcZ(5, 10, "navegacion.inicio")), m.xp6(4), m.Oqu(m.lcZ(9, 12, "navegacion.productos")), m.xp6(4), m.Oqu(m.lcZ(13, 14, "navegacion.quienesSomos")), m.xp6(4), m.Oqu(m.lcZ(17, 16, "navegacion.investigacion")), m.xp6(4), m.Oqu(m.lcZ(21, 18, "navegacion.contacto")), m.xp6(5), m.Oqu(m.lcZ(26, 20, "lan")), m.xp6(4), m.ekj("active", "es" == f.selected), m.xp6(2), m.ekj("active", "en" == f.selected))
                        },
                        directives: [Ft.rH, Ft.Od],
                        pipes: [St.X$],
                        styles: ["[_nghost-%COMP%]{background:#2a2a2b;color:#fff;position:fixed;right:auto;opacity:0;top:0;left:0;bottom:0;width:100%;visibility:visible;transform:translateY(-100%);display:flex;justify-content:center;align-items:center;z-index:10}.mySideNav[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.side-menu[_ngcontent-%COMP%]{font-family:Open Sans;font-weight:600;text-align:center;list-style:none;padding-left:0}.side-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:.4rem;font-size:2rem;color:#e58033}.side-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{cursor:pointer;text-transform:uppercase}.active-link[_ngcontent-%COMP%]{border-bottom:3px solid #e58033}.orden[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{padding:.65rem;border-radius:50%;width:2.8125rem;border:0;height:2.8125rem;box-shadow:none;background-color:transparent;cursor:pointer;color:#e58033}.orden[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover{background-color:#00000017;outline-color:transparent}.dropdown-menu[_ngcontent-%COMP%]{margin:-.54rem -53px 0;min-width:3rem;padding:0}.dropdown-item[_ngcontent-%COMP%]{cursor:pointer}.dropdown-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-transform:capitalize!important}.dropdown-item.active[_ngcontent-%COMP%]{color:#fff;text-decoration:none;background-color:#3e3e3d}img[_ngcontent-%COMP%]{position:absolute;bottom:1rem;left:1rem;width:50%;max-width:210px}@media screen and (max-height: 340px){.boton-cerrar[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:1.5rem}.side-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-size:1.3rem}}@media screen and (max-height: 400px){.logo[_ngcontent-%COMP%]{display:none}.side-menu[_ngcontent-%COMP%]{padding-top:1rem}}@media screen and (max-height: 480px){.logo[_ngcontent-%COMP%]{height:20%;padding-top:.5rem}.li-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:150px}}"]
                    }), p
                })();
            class Yi {
                constructor(o, a = "./assets/i18n/", f = ".json") {
                    this.http = o, this.prefix = a, this.suffix = f
                }
                getTranslation(o) {
                    return this.http.get(`${this.prefix}${o}${this.suffix}`)
                }
            }
            var _i = O(1841);

            function Gr(p) {
                return new Yi(p)
            }
            let Po = (() => {
                class p {
                    constructor(a) {
                        this.translate = a;
                        const f = a.getBrowserLang();
                        a.addLangs(["en", "es"]), a.setDefaultLang("en"), f && void 0 !== f.match(/en|es/) && a.use(f.match(/en|es/) ? f : "es")
                    }
                }
                return p.\u0275fac = function(a) {
                    return new(a || p)(m.LFG(St.sK))
                }, p.\u0275mod = m.oAB({
                    type: p
                }), p.\u0275inj = m.cJS({
                    imports: [
                        [A.ez, _i.JF, St.aw.forRoot({
                            loader: {
                                provide: St.Zw,
                                useFactory: Gr,
                                deps: [_i.eN]
                            }
                        })], _i.JF, St.aw
                    ]
                }), p
            })();

            function Oo() {
                return "undefined" != typeof window && void 0 !== window.document
            }

            function ms() {
                return "undefined" != typeof process && "[object process]" === {}.toString.call(process)
            }

            function Er(p) {
                switch (p.length) {
                    case 0:
                        return new $t;
                    case 1:
                        return p[0];
                    default:
                        return new Ki(p)
                }
            }

            function Ei(p, o, a, f, C = {}, w = {}) {
                const R = [],
                    F = [];
                let G = -1,
                    ie = null;
                if (f.forEach(ve => {
                        const Fe = ve.offset,
                            et = Fe == G,
                            Dt = et && ie || {};
                        Object.keys(ve).forEach(qe => {
                            let ut = qe,
                                Et = ve[qe];
                            if ("offset" !== qe) switch (ut = o.normalizePropertyName(ut, R), Et) {
                                case "!":
                                    Et = C[qe];
                                    break;
                                case wn:
                                    Et = w[qe];
                                    break;
                                default:
                                    Et = o.normalizeStyleValue(qe, ut, Et, R)
                            }
                            Dt[ut] = Et
                        }), et || F.push(Dt), ie = Dt, G = Fe
                    }), R.length) {
                    const ve = "\n - ";
                    throw new Error(`Unable to animate due to the following errors:${ve}${R.join(ve)}`)
                }
                return F
            }

            function Ci(p, o, a, f) {
                switch (o) {
                    case "start":
                        p.onStart(() => f(a && Us(a, "start", p)));
                        break;
                    case "done":
                        p.onDone(() => f(a && Us(a, "done", p)));
                        break;
                    case "destroy":
                        p.onDestroy(() => f(a && Us(a, "destroy", p)))
                }
            }

            function Us(p, o, a) {
                const f = a.totalTime,
                    w = ys(p.element, p.triggerName, p.fromState, p.toState, o || p.phaseName, null == f ? p.totalTime : f, !!a.disabled),
                    R = p._data;
                return null != R && (w._data = R), w
            }

            function ys(p, o, a, f, C = "", w = 0, R) {
                return {
                    element: p,
                    triggerName: o,
                    fromState: a,
                    toState: f,
                    phaseName: C,
                    totalTime: w,
                    disabled: !!R
                }
            }

            function Vn(p, o, a) {
                let f;
                return p instanceof Map ? (f = p.get(o), f || p.set(o, f = a)) : (f = p[o], f || (f = p[o] = a)), f
            }

            function Hs(p) {
                const o = p.indexOf(":");
                return [p.substring(1, o), p.substr(o + 1)]
            }
            let vi = (p, o) => !1,
                $s = (p, o) => !1,
                Wr = (p, o, a) => [];
            const zs = ms();
            (zs || "undefined" != typeof Element) && (vi = Oo() ? (p, o) => {
                for (; o && o !== document.documentElement;) {
                    if (o === p) return !0;
                    o = o.parentNode || o.host
                }
                return !1
            } : (p, o) => p.contains(o), $s = (() => {
                if (zs || Element.prototype.matches) return (p, o) => p.matches(o); {
                    const p = Element.prototype,
                        o = p.matchesSelector || p.mozMatchesSelector || p.msMatchesSelector || p.oMatchesSelector || p.webkitMatchesSelector;
                    return o ? (a, f) => o.apply(a, [f]) : $s
                }
            })(), Wr = (p, o, a) => {
                let f = [];
                if (a) {
                    const C = p.querySelectorAll(o);
                    for (let w = 0; w < C.length; w++) f.push(C[w])
                } else {
                    const C = p.querySelector(o);
                    C && f.push(C)
                }
                return f
            });
            let Sn = null,
                bi = !1;

            function Kr(p) {
                Sn || (Sn = ("undefined" != typeof document ? document.body : null) || {}, bi = !!Sn.style && "WebkitAppearance" in Sn.style);
                let o = !0;
                return Sn.style && ! function(p) {
                    return "ebkit" == p.substring(1, 6)
                }(p) && (o = p in Sn.style, !o && bi && (o = "Webkit" + p.charAt(0).toUpperCase() + p.substr(1) in Sn.style)), o
            }
            const Zi = $s,
                Qi = vi,
                Gs = Wr;

            function Yr(p) {
                const o = {};
                return Object.keys(p).forEach(a => {
                    const f = a.replace(/([a-z])([A-Z])/g, "$1-$2");
                    o[f] = p[a]
                }), o
            }
            let Ji = (() => {
                    class p {
                        validateStyleProperty(a) {
                            return Kr(a)
                        }
                        matchesElement(a, f) {
                            return Zi(a, f)
                        }
                        containsElement(a, f) {
                            return Qi(a, f)
                        }
                        query(a, f, C) {
                            return Gs(a, f, C)
                        }
                        computeStyle(a, f, C) {
                            return C || ""
                        }
                        animate(a, f, C, w, R, F = [], G) {
                            return new $t(C, w)
                        }
                    }
                    return p.\u0275fac = function(a) {
                        return new(a || p)
                    }, p.\u0275prov = m.Yz7({
                        token: p,
                        factory: p.\u0275fac
                    }), p
                })(),
                Cr = (() => {
                    class p {}
                    return p.NOOP = new Ji, p
                })();
            const E = "ng-enter",
                T = "ng-leave",
                V = "ng-trigger",
                K = ".ng-trigger",
                _e = "ng-animating",
                Re = ".ng-animating";

            function mt(p) {
                if ("number" == typeof p) return p;
                const o = p.match(/^(-?[\.\d]+)(m?s)/);
                return !o || o.length < 2 ? 0 : Xe(parseFloat(o[1]), o[2])
            }

            function Xe(p, o) {
                switch (o) {
                    case "s":
                        return 1e3 * p;
                    default:
                        return p
                }
            }

            function It(p, o, a) {
                return p.hasOwnProperty("duration") ? p : function(p, o, a) {
                    let C, w = 0,
                        R = "";
                    if ("string" == typeof p) {
                        const F = p.match(/^(-?[\.\d]+)(m?s)(?:\s+(-?[\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i);
                        if (null === F) return o.push(`The provided timing value "${p}" is invalid.`), {
                            duration: 0,
                            delay: 0,
                            easing: ""
                        };
                        C = Xe(parseFloat(F[1]), F[2]);
                        const G = F[3];
                        null != G && (w = Xe(parseFloat(G), F[4]));
                        const ie = F[5];
                        ie && (R = ie)
                    } else C = p;
                    if (!a) {
                        let F = !1,
                            G = o.length;
                        C < 0 && (o.push("Duration values below 0 are not allowed for this animation step."), F = !0), w < 0 && (o.push("Delay values below 0 are not allowed for this animation step."), F = !0), F && o.splice(G, 0, `The provided timing value "${p}" is invalid.`)
                    }
                    return {
                        duration: C,
                        delay: w,
                        easing: R
                    }
                }(p, o, a)
            }

            function Mt(p, o = {}) {
                return Object.keys(p).forEach(a => {
                    o[a] = p[a]
                }), o
            }

            function jt(p, o, a = {}) {
                if (o)
                    for (let f in p) a[f] = p[f];
                else Mt(p, a);
                return a
            }

            function lr(p, o, a) {
                return a ? o + ":" + a + ";" : ""
            }

            function Rn(p) {
                let o = "";
                for (let a = 0; a < p.style.length; a++) {
                    const f = p.style.item(a);
                    o += lr(0, f, p.style.getPropertyValue(f))
                }
                for (const a in p.style) p.style.hasOwnProperty(a) && !a.startsWith("_") && (o += lr(0, hl(a), p.style[a]));
                p.setAttribute("style", o)
            }

            function Ot(p, o, a) {
                p.style && (Object.keys(o).forEach(f => {
                    const C = Lo(f);
                    a && !a.hasOwnProperty(f) && (a[f] = p.style[C]), p.style[C] = o[f]
                }), ms() && Rn(p))
            }

            function En(p, o) {
                p.style && (Object.keys(o).forEach(a => {
                    const f = Lo(a);
                    p.style[f] = ""
                }), ms() && Rn(p))
            }

            function Zt(p) {
                return Array.isArray(p) ? 1 == p.length ? p[0] : ar(p) : p
            }
            const jn = new RegExp("{{\\s*(.+?)\\s*}}", "g");

            function Ks(p) {
                let o = [];
                if ("string" == typeof p) {
                    let a;
                    for (; a = jn.exec(p);) o.push(a[1]);
                    jn.lastIndex = 0
                }
                return o
            }

            function Or(p, o, a) {
                const f = p.toString(),
                    C = f.replace(jn, (w, R) => {
                        let F = o[R];
                        return o.hasOwnProperty(R) || (a.push(`Please provide a value for the animation param ${R}`), F = ""), F.toString()
                    });
                return C == f ? p : C
            }

            function Qe(p) {
                const o = [];
                let a = p.next();
                for (; !a.done;) o.push(a.value), a = p.next();
                return o
            }
            const lu = /-+([a-z0-9])/g;

            function Lo(p) {
                return p.replace(lu, (...o) => o[1].toUpperCase())
            }

            function hl(p) {
                return p.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
            }

            function Ti(p, o) {
                return 0 === p || 0 === o
            }

            function Xi(p, o, a) {
                const f = Object.keys(a);
                if (f.length && o.length) {
                    let w = o[0],
                        R = [];
                    if (f.forEach(F => {
                            w.hasOwnProperty(F) || R.push(F), w[F] = a[F]
                        }), R.length)
                        for (var C = 1; C < o.length; C++) {
                            let F = o[C];
                            R.forEach(function(G) {
                                F[G] = _s(p, G)
                            })
                        }
                }
                return o
            }

            function Bn(p, o, a) {
                switch (o.type) {
                    case 7:
                        return p.visitTrigger(o, a);
                    case 0:
                        return p.visitState(o, a);
                    case 1:
                        return p.visitTransition(o, a);
                    case 2:
                        return p.visitSequence(o, a);
                    case 3:
                        return p.visitGroup(o, a);
                    case 4:
                        return p.visitAnimate(o, a);
                    case 5:
                        return p.visitKeyframes(o, a);
                    case 6:
                        return p.visitStyle(o, a);
                    case 8:
                        return p.visitReference(o, a);
                    case 9:
                        return p.visitAnimateChild(o, a);
                    case 10:
                        return p.visitAnimateRef(o, a);
                    case 11:
                        return p.visitQuery(o, a);
                    case 12:
                        return p.visitStagger(o, a);
                    default:
                        throw new Error(`Unable to resolve animation metadata node #${o.type}`)
                }
            }

            function _s(p, o) {
                return window.getComputedStyle(p)[o]
            }

            function gt(p, o) {
                const a = [];
                return "string" == typeof p ? p.split(/\s*,\s*/).forEach(f => function(p, o, a) {
                    if (":" == p[0]) {
                        const G = function(p, o) {
                            switch (p) {
                                case ":enter":
                                    return "void => *";
                                case ":leave":
                                    return "* => void";
                                case ":increment":
                                    return (a, f) => parseFloat(f) > parseFloat(a);
                                case ":decrement":
                                    return (a, f) => parseFloat(f) < parseFloat(a);
                                default:
                                    return o.push(`The transition alias value "${p}" is not supported`), "* => *"
                            }
                        }(p, a);
                        if ("function" == typeof G) return void o.push(G);
                        p = G
                    }
                    const f = p.match(/^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/);
                    if (null == f || f.length < 4) return a.push(`The provided transition expression "${p}" is not supported`), o;
                    const C = f[1],
                        w = f[2],
                        R = f[3];
                    o.push(ur(C, R));
                    "<" == w[0] && !("*" == C && "*" == R) && o.push(ur(R, C))
                }(f, a, o)) : a.push(p), a
            }
            const Si = new Set(["true", "1"]),
                qr = new Set(["false", "0"]);

            function ur(p, o) {
                const a = Si.has(p) || qr.has(p),
                    f = Si.has(o) || qr.has(o);
                return (C, w) => {
                    let R = "*" == p || p == C,
                        F = "*" == o || o == w;
                    return !R && a && "boolean" == typeof C && (R = C ? Si.has(p) : qr.has(p)), !F && f && "boolean" == typeof w && (F = w ? Si.has(o) : qr.has(o)), R && F
                }
            }
            const Ai = new RegExp("s*:selfs*,?", "g");

            function ca(p, o, a) {
                return new Es(p).build(o, a)
            }
            class Es {
                constructor(o) {
                    this._driver = o
                }
                build(o, a) {
                    const f = new qn(a);
                    return this._resetContextStyleTimingState(f), Bn(this, Zt(o), f)
                }
                _resetContextStyleTimingState(o) {
                    o.currentQuerySelector = "", o.collectedStyles = {}, o.collectedStyles[""] = {}, o.currentTime = 0
                }
                visitTrigger(o, a) {
                    let f = a.queryCount = 0,
                        C = a.depCount = 0;
                    const w = [],
                        R = [];
                    return "@" == o.name.charAt(0) && a.errors.push("animation triggers cannot be prefixed with an `@` sign (e.g. trigger('@foo', [...]))"), o.definitions.forEach(F => {
                        if (this._resetContextStyleTimingState(a), 0 == F.type) {
                            const G = F,
                                ie = G.name;
                            ie.toString().split(/\s*,\s*/).forEach(ve => {
                                G.name = ve, w.push(this.visitState(G, a))
                            }), G.name = ie
                        } else if (1 == F.type) {
                            const G = this.visitTransition(F, a);
                            f += G.queryCount, C += G.depCount, R.push(G)
                        } else a.errors.push("only state() and transition() definitions can sit inside of a trigger()")
                    }), {
                        type: 7,
                        name: o.name,
                        states: w,
                        transitions: R,
                        queryCount: f,
                        depCount: C,
                        options: null
                    }
                }
                visitState(o, a) {
                    const f = this.visitStyle(o.styles, a),
                        C = o.options && o.options.params || null;
                    if (f.containsDynamicStyles) {
                        const w = new Set,
                            R = C || {};
                        if (f.styles.forEach(F => {
                                if (Zn(F)) {
                                    const G = F;
                                    Object.keys(G).forEach(ie => {
                                        Ks(G[ie]).forEach(ve => {
                                            R.hasOwnProperty(ve) || w.add(ve)
                                        })
                                    })
                                }
                            }), w.size) {
                            const F = Qe(w.values());
                            a.errors.push(`state("${o.name}", ...) must define default values for all the following style substitutions: ${F.join(", ")}`)
                        }
                    }
                    return {
                        type: 0,
                        name: o.name,
                        style: f,
                        options: C ? {
                            params: C
                        } : null
                    }
                }
                visitTransition(o, a) {
                    a.queryCount = 0, a.depCount = 0;
                    const f = Bn(this, Zt(o.animation), a);
                    return {
                        type: 1,
                        matchers: gt(o.expr, a.errors),
                        animation: f,
                        queryCount: a.queryCount,
                        depCount: a.depCount,
                        options: Cs(o.options)
                    }
                }
                visitSequence(o, a) {
                    return {
                        type: 2,
                        steps: o.steps.map(f => Bn(this, f, a)),
                        options: Cs(o.options)
                    }
                }
                visitGroup(o, a) {
                    const f = a.currentTime;
                    let C = 0;
                    const w = o.steps.map(R => {
                        a.currentTime = f;
                        const F = Bn(this, R, a);
                        return C = Math.max(C, a.currentTime), F
                    });
                    return a.currentTime = C, {
                        type: 3,
                        steps: w,
                        options: Cs(o.options)
                    }
                }
                visitAnimate(o, a) {
                    const f = function(p, o) {
                        let a = null;
                        if (p.hasOwnProperty("duration")) a = p;
                        else if ("number" == typeof p) return Zr(It(p, o).duration, 0, "");
                        const f = p;
                        if (f.split(/\s+/).some(w => "{" == w.charAt(0) && "{" == w.charAt(1))) {
                            const w = Zr(0, 0, "");
                            return w.dynamic = !0, w.strValue = f, w
                        }
                        return a = a || It(f, o), Zr(a.duration, a.delay, a.easing)
                    }(o.timings, a.errors);
                    a.currentAnimateTimings = f;
                    let C, w = o.styles ? o.styles : nr({});
                    if (5 == w.type) C = this.visitKeyframes(w, a);
                    else {
                        let R = o.styles,
                            F = !1;
                        if (!R) {
                            F = !0;
                            const ie = {};
                            f.easing && (ie.easing = f.easing), R = nr(ie)
                        }
                        a.currentTime += f.duration + f.delay;
                        const G = this.visitStyle(R, a);
                        G.isEmptyStep = F, C = G
                    }
                    return a.currentAnimateTimings = null, {
                        type: 4,
                        timings: f,
                        style: C,
                        options: null
                    }
                }
                visitStyle(o, a) {
                    const f = this._makeStyleAst(o, a);
                    return this._validateStyleAst(f, a), f
                }
                _makeStyleAst(o, a) {
                    const f = [];
                    Array.isArray(o.styles) ? o.styles.forEach(R => {
                        "string" == typeof R ? R == wn ? f.push(R) : a.errors.push(`The provided style string value ${R} is not allowed.`) : f.push(R)
                    }) : f.push(o.styles);
                    let C = !1,
                        w = null;
                    return f.forEach(R => {
                        if (Zn(R)) {
                            const F = R,
                                G = F.easing;
                            if (G && (w = G, delete F.easing), !C)
                                for (let ie in F)
                                    if (F[ie].toString().indexOf("{{") >= 0) {
                                        C = !0;
                                        break
                                    }
                        }
                    }), {
                        type: 6,
                        styles: f,
                        easing: w,
                        offset: o.offset,
                        containsDynamicStyles: C,
                        options: null
                    }
                }
                _validateStyleAst(o, a) {
                    const f = a.currentAnimateTimings;
                    let C = a.currentTime,
                        w = a.currentTime;
                    f && w > 0 && (w -= f.duration + f.delay), o.styles.forEach(R => {
                        "string" != typeof R && Object.keys(R).forEach(F => {
                            if (!this._driver.validateStyleProperty(F)) return void a.errors.push(`The provided animation property "${F}" is not a supported CSS property for animations`);
                            const G = a.collectedStyles[a.currentQuerySelector],
                                ie = G[F];
                            let ve = !0;
                            ie && (w != C && w >= ie.startTime && C <= ie.endTime && (a.errors.push(`The CSS property "${F}" that exists between the times of "${ie.startTime}ms" and "${ie.endTime}ms" is also being animated in a parallel animation between the times of "${w}ms" and "${C}ms"`), ve = !1), w = ie.startTime), ve && (G[F] = {
                                startTime: w,
                                endTime: C
                            }), a.options && function(p, o, a) {
                                const f = o.params || {},
                                    C = Ks(p);
                                C.length && C.forEach(w => {
                                    f.hasOwnProperty(w) || a.push(`Unable to resolve the local animation param ${w} in the given list of values`)
                                })
                            }(R[F], a.options, a.errors)
                        })
                    })
                }
                visitKeyframes(o, a) {
                    const f = {
                        type: 5,
                        styles: [],
                        options: null
                    };
                    if (!a.currentAnimateTimings) return a.errors.push("keyframes() must be placed inside of a call to animate()"), f;
                    let w = 0;
                    const R = [];
                    let F = !1,
                        G = !1,
                        ie = 0;
                    const ve = o.steps.map(ln => {
                        const Qt = this._makeStyleAst(ln, a);
                        let Cn = null != Qt.offset ? Qt.offset : function(p) {
                                if ("string" == typeof p) return null;
                                let o = null;
                                if (Array.isArray(p)) p.forEach(a => {
                                    if (Zn(a) && a.hasOwnProperty("offset")) {
                                        const f = a;
                                        o = parseFloat(f.offset), delete f.offset
                                    }
                                });
                                else if (Zn(p) && p.hasOwnProperty("offset")) {
                                    const a = p;
                                    o = parseFloat(a.offset), delete a.offset
                                }
                                return o
                            }(Qt.styles),
                            nn = 0;
                        return null != Cn && (w++, nn = Qt.offset = Cn), G = G || nn < 0 || nn > 1, F = F || nn < ie, ie = nn, R.push(nn), Qt
                    });
                    G && a.errors.push("Please ensure that all keyframe offsets are between 0 and 1"), F && a.errors.push("Please ensure that all keyframe offsets are in order");
                    const Fe = o.steps.length;
                    let et = 0;
                    w > 0 && w < Fe ? a.errors.push("Not all style() steps within the declared keyframes() contain offsets") : 0 == w && (et = 1 / (Fe - 1));
                    const Dt = Fe - 1,
                        qe = a.currentTime,
                        ut = a.currentAnimateTimings,
                        Et = ut.duration;
                    return ve.forEach((ln, Qt) => {
                        const Cn = et > 0 ? Qt == Dt ? 1 : et * Qt : R[Qt],
                            nn = Cn * Et;
                        a.currentTime = qe + ut.delay + nn, ut.duration = nn, this._validateStyleAst(ln, a), ln.offset = Cn, f.styles.push(ln)
                    }), f
                }
                visitReference(o, a) {
                    return {
                        type: 8,
                        animation: Bn(this, Zt(o.animation), a),
                        options: Cs(o.options)
                    }
                }
                visitAnimateChild(o, a) {
                    return a.depCount++, {
                        type: 9,
                        options: Cs(o.options)
                    }
                }
                visitAnimateRef(o, a) {
                    return {
                        type: 10,
                        animation: this.visitReference(o.animation, a),
                        options: Cs(o.options)
                    }
                }
                visitQuery(o, a) {
                    const f = a.currentQuerySelector,
                        C = o.options || {};
                    a.queryCount++, a.currentQuery = o;
                    const [w, R] = function(p) {
                        const o = !!p.split(/\s*,\s*/).find(a => ":self" == a);
                        return o && (p = p.replace(Ai, "")), [p = p.replace(/@\*/g, K).replace(/@\w+/g, a => K + "-" + a.substr(1)).replace(/:animating/g, Re), o]
                    }(o.selector);
                    a.currentQuerySelector = f.length ? f + " " + w : w, Vn(a.collectedStyles, a.currentQuerySelector, {});
                    const F = Bn(this, Zt(o.animation), a);
                    return a.currentQuery = null, a.currentQuerySelector = f, {
                        type: 11,
                        selector: w,
                        limit: C.limit || 0,
                        optional: !!C.optional,
                        includeSelf: R,
                        animation: F,
                        originalSelector: o.selector,
                        options: Cs(o.options)
                    }
                }
                visitStagger(o, a) {
                    a.currentQuery || a.errors.push("stagger() can only be used inside of query()");
                    const f = "full" === o.timings ? {
                        duration: 0,
                        delay: 0,
                        easing: "full"
                    } : It(o.timings, a.errors, !0);
                    return {
                        type: 12,
                        animation: Bn(this, Zt(o.animation), a),
                        timings: f,
                        options: null
                    }
                }
            }
            class qn {
                constructor(o) {
                    this.errors = o, this.queryCount = 0, this.depCount = 0, this.currentTransition = null, this.currentQuery = null, this.currentQuerySelector = null, this.currentAnimateTimings = null, this.currentTime = 0, this.collectedStyles = {}, this.options = null
                }
            }

            function Zn(p) {
                return !Array.isArray(p) && "object" == typeof p
            }

            function Cs(p) {
                return p ? (p = Mt(p)).params && (p.params = function(p) {
                    return p ? Mt(p) : null
                }(p.params)) : p = {}, p
            }

            function Zr(p, o, a) {
                return {
                    duration: p,
                    delay: o,
                    easing: a
                }
            }

            function jo(p, o, a, f, C, w, R = null, F = !1) {
                return {
                    type: 1,
                    element: p,
                    keyframes: o,
                    preStyleProps: a,
                    postStyleProps: f,
                    duration: C,
                    delay: w,
                    totalTime: C + w,
                    easing: R,
                    subTimeline: F
                }
            }
            class no {
                constructor() {
                    this._map = new Map
                }
                consume(o) {
                    let a = this._map.get(o);
                    return a ? this._map.delete(o) : a = [], a
                }
                append(o, a) {
                    let f = this._map.get(o);
                    f || this._map.set(o, f = []), f.push(...a)
                }
                has(o) {
                    return this._map.has(o)
                }
                clear() {
                    this._map.clear()
                }
            }
            const fa = new RegExp(":enter", "g"),
                pl = new RegExp(":leave", "g");

            function ro(p, o, a, f, C, w = {}, R = {}, F, G, ie = []) {
                return (new so).buildKeyframes(p, o, a, f, C, w, R, F, G, ie)
            }
            class so {
                buildKeyframes(o, a, f, C, w, R, F, G, ie, ve = []) {
                    ie = ie || new no;
                    const Fe = new io(o, a, ie, C, w, ve, []);
                    Fe.options = G, Fe.currentTimeline.setStyles([R], null, Fe.errors, G), Bn(this, f, Fe);
                    const et = Fe.timelines.filter(Dt => Dt.containsAnimation());
                    if (et.length && Object.keys(F).length) {
                        const Dt = et[et.length - 1];
                        Dt.allowOnlyTimelineStyles() || Dt.setStyles([F], null, Fe.errors, G)
                    }
                    return et.length ? et.map(Dt => Dt.buildKeyframes()) : [jo(a, [], [], [], 0, 0, "", !1)]
                }
                visitTrigger(o, a) {}
                visitState(o, a) {}
                visitTransition(o, a) {}
                visitAnimateChild(o, a) {
                    const f = a.subInstructions.consume(a.element);
                    if (f) {
                        const C = a.createSubContext(o.options),
                            w = a.currentTimeline.currentTime,
                            R = this._visitSubInstructions(f, C, C.options);
                        w != R && a.transformIntoNewTimeline(R)
                    }
                    a.previousNode = o
                }
                visitAnimateRef(o, a) {
                    const f = a.createSubContext(o.options);
                    f.transformIntoNewTimeline(), this.visitReference(o.animation, f), a.transformIntoNewTimeline(f.currentTimeline.currentTime), a.previousNode = o
                }
                _visitSubInstructions(o, a, f) {
                    let w = a.currentTimeline.currentTime;
                    const R = null != f.duration ? mt(f.duration) : null,
                        F = null != f.delay ? mt(f.delay) : null;
                    return 0 !== R && o.forEach(G => {
                        const ie = a.appendInstructionToTimeline(G, R, F);
                        w = Math.max(w, ie.duration + ie.delay)
                    }), w
                }
                visitReference(o, a) {
                    a.updateOptions(o.options, !0), Bn(this, o.animation, a), a.previousNode = o
                }
                visitSequence(o, a) {
                    const f = a.subContextCount;
                    let C = a;
                    const w = o.options;
                    if (w && (w.params || w.delay) && (C = a.createSubContext(w), C.transformIntoNewTimeline(), null != w.delay)) {
                        6 == C.previousNode.type && (C.currentTimeline.snapshotCurrentStyles(), C.previousNode = Ys);
                        const R = mt(w.delay);
                        C.delayNextStep(R)
                    }
                    o.steps.length && (o.steps.forEach(R => Bn(this, R, C)), C.currentTimeline.applyStylesToKeyframe(), C.subContextCount > f && C.transformIntoNewTimeline()), a.previousNode = o
                }
                visitGroup(o, a) {
                    const f = [];
                    let C = a.currentTimeline.currentTime;
                    const w = o.options && o.options.delay ? mt(o.options.delay) : 0;
                    o.steps.forEach(R => {
                        const F = a.createSubContext(o.options);
                        w && F.delayNextStep(w), Bn(this, R, F), C = Math.max(C, F.currentTimeline.currentTime), f.push(F.currentTimeline)
                    }), f.forEach(R => a.currentTimeline.mergeTimelineCollectedStyles(R)), a.transformIntoNewTimeline(C), a.previousNode = o
                }
                _visitTiming(o, a) {
                    if (o.dynamic) {
                        const f = o.strValue;
                        return It(a.params ? Or(f, a.params, a.errors) : f, a.errors)
                    }
                    return {
                        duration: o.duration,
                        delay: o.delay,
                        easing: o.easing
                    }
                }
                visitAnimate(o, a) {
                    const f = a.currentAnimateTimings = this._visitTiming(o.timings, a),
                        C = a.currentTimeline;
                    f.delay && (a.incrementTime(f.delay), C.snapshotCurrentStyles());
                    const w = o.style;
                    5 == w.type ? this.visitKeyframes(w, a) : (a.incrementTime(f.duration), this.visitStyle(w, a), C.applyStylesToKeyframe()), a.currentAnimateTimings = null, a.previousNode = o
                }
                visitStyle(o, a) {
                    const f = a.currentTimeline,
                        C = a.currentAnimateTimings;
                    !C && f.getCurrentStyleProperties().length && f.forwardFrame();
                    const w = C && C.easing || o.easing;
                    o.isEmptyStep ? f.applyEmptyStep(w) : f.setStyles(o.styles, w, a.errors, a.options), a.previousNode = o
                }
                visitKeyframes(o, a) {
                    const f = a.currentAnimateTimings,
                        C = a.currentTimeline.duration,
                        w = f.duration,
                        F = a.createSubContext().currentTimeline;
                    F.easing = f.easing, o.styles.forEach(G => {
                        F.forwardTime((G.offset || 0) * w), F.setStyles(G.styles, G.easing, a.errors, a.options), F.applyStylesToKeyframe()
                    }), a.currentTimeline.mergeTimelineCollectedStyles(F), a.transformIntoNewTimeline(C + w), a.previousNode = o
                }
                visitQuery(o, a) {
                    const f = a.currentTimeline.currentTime,
                        C = o.options || {},
                        w = C.delay ? mt(C.delay) : 0;
                    w && (6 === a.previousNode.type || 0 == f && a.currentTimeline.getCurrentStyleProperties().length) && (a.currentTimeline.snapshotCurrentStyles(), a.previousNode = Ys);
                    let R = f;
                    const F = a.invokeQuery(o.selector, o.originalSelector, o.limit, o.includeSelf, !!C.optional, a.errors);
                    a.currentQueryTotal = F.length;
                    let G = null;
                    F.forEach((ie, ve) => {
                        a.currentQueryIndex = ve;
                        const Fe = a.createSubContext(o.options, ie);
                        w && Fe.delayNextStep(w), ie === a.element && (G = Fe.currentTimeline), Bn(this, o.animation, Fe), Fe.currentTimeline.applyStylesToKeyframe(), R = Math.max(R, Fe.currentTimeline.currentTime)
                    }), a.currentQueryIndex = 0, a.currentQueryTotal = 0, a.transformIntoNewTimeline(R), G && (a.currentTimeline.mergeTimelineCollectedStyles(G), a.currentTimeline.snapshotCurrentStyles()), a.previousNode = o
                }
                visitStagger(o, a) {
                    const f = a.parentContext,
                        C = a.currentTimeline,
                        w = o.timings,
                        R = Math.abs(w.duration),
                        F = R * (a.currentQueryTotal - 1);
                    let G = R * a.currentQueryIndex;
                    switch (w.duration < 0 ? "reverse" : w.easing) {
                        case "reverse":
                            G = F - G;
                            break;
                        case "full":
                            G = f.currentStaggerTime
                    }
                    const ve = a.currentTimeline;
                    G && ve.delayNextStep(G);
                    const Fe = ve.currentTime;
                    Bn(this, o.animation, a), a.previousNode = o, f.currentStaggerTime = C.currentTime - Fe + (C.startTime - f.currentTimeline.startTime)
                }
            }
            const Ys = {};
            class io {
                constructor(o, a, f, C, w, R, F, G) {
                    this._driver = o, this.element = a, this.subInstructions = f, this._enterClassName = C, this._leaveClassName = w, this.errors = R, this.timelines = F, this.parentContext = null, this.currentAnimateTimings = null, this.previousNode = Ys, this.subContextCount = 0, this.options = {}, this.currentQueryIndex = 0, this.currentQueryTotal = 0, this.currentStaggerTime = 0, this.currentTimeline = G || new Mi(this._driver, a, 0), F.push(this.currentTimeline)
                }
                get params() {
                    return this.options.params
                }
                updateOptions(o, a) {
                    if (!o) return;
                    const f = o;
                    let C = this.options;
                    null != f.duration && (C.duration = mt(f.duration)), null != f.delay && (C.delay = mt(f.delay));
                    const w = f.params;
                    if (w) {
                        let R = C.params;
                        R || (R = this.options.params = {}), Object.keys(w).forEach(F => {
                            (!a || !R.hasOwnProperty(F)) && (R[F] = Or(w[F], R, this.errors))
                        })
                    }
                }
                _copyOptions() {
                    const o = {};
                    if (this.options) {
                        const a = this.options.params;
                        if (a) {
                            const f = o.params = {};
                            Object.keys(a).forEach(C => {
                                f[C] = a[C]
                            })
                        }
                    }
                    return o
                }
                createSubContext(o = null, a, f) {
                    const C = a || this.element,
                        w = new io(this._driver, C, this.subInstructions, this._enterClassName, this._leaveClassName, this.errors, this.timelines, this.currentTimeline.fork(C, f || 0));
                    return w.previousNode = this.previousNode, w.currentAnimateTimings = this.currentAnimateTimings, w.options = this._copyOptions(), w.updateOptions(o), w.currentQueryIndex = this.currentQueryIndex, w.currentQueryTotal = this.currentQueryTotal, w.parentContext = this, this.subContextCount++, w
                }
                transformIntoNewTimeline(o) {
                    return this.previousNode = Ys, this.currentTimeline = this.currentTimeline.fork(this.element, o), this.timelines.push(this.currentTimeline), this.currentTimeline
                }
                appendInstructionToTimeline(o, a, f) {
                    const C = {
                            duration: null != a ? a : o.duration,
                            delay: this.currentTimeline.currentTime + (null != f ? f : 0) + o.delay,
                            easing: ""
                        },
                        w = new ha(this._driver, o.element, o.keyframes, o.preStyleProps, o.postStyleProps, C, o.stretchStartingKeyframe);
                    return this.timelines.push(w), C
                }
                incrementTime(o) {
                    this.currentTimeline.forwardTime(this.currentTimeline.duration + o)
                }
                delayNextStep(o) {
                    o > 0 && this.currentTimeline.delayNextStep(o)
                }
                invokeQuery(o, a, f, C, w, R) {
                    let F = [];
                    if (C && F.push(this.element), o.length > 0) {
                        o = (o = o.replace(fa, "." + this._enterClassName)).replace(pl, "." + this._leaveClassName);
                        let ie = this._driver.query(this.element, o, 1 != f);
                        0 !== f && (ie = f < 0 ? ie.slice(ie.length + f, ie.length) : ie.slice(0, f)), F.push(...ie)
                    }
                    return !w && 0 == F.length && R.push(`\`query("${a}")\` returned zero elements. (Use \`query("${a}", { optional: true })\` if you wish to allow this.)`), F
                }
            }
            class Mi {
                constructor(o, a, f, C) {
                    this._driver = o, this.element = a, this.startTime = f, this._elementTimelineStylesLookup = C, this.duration = 0, this._previousKeyframe = {}, this._currentKeyframe = {}, this._keyframes = new Map, this._styleSummary = {}, this._pendingStyles = {}, this._backFill = {}, this._currentEmptyStepKeyframe = null, this._elementTimelineStylesLookup || (this._elementTimelineStylesLookup = new Map), this._localTimelineStyles = Object.create(this._backFill, {}), this._globalTimelineStyles = this._elementTimelineStylesLookup.get(a), this._globalTimelineStyles || (this._globalTimelineStyles = this._localTimelineStyles, this._elementTimelineStylesLookup.set(a, this._localTimelineStyles)), this._loadKeyframe()
                }
                containsAnimation() {
                    switch (this._keyframes.size) {
                        case 0:
                            return !1;
                        case 1:
                            return this.getCurrentStyleProperties().length > 0;
                        default:
                            return !0
                    }
                }
                getCurrentStyleProperties() {
                    return Object.keys(this._currentKeyframe)
                }
                get currentTime() {
                    return this.startTime + this.duration
                }
                delayNextStep(o) {
                    const a = 1 == this._keyframes.size && Object.keys(this._pendingStyles).length;
                    this.duration || a ? (this.forwardTime(this.currentTime + o), a && this.snapshotCurrentStyles()) : this.startTime += o
                }
                fork(o, a) {
                    return this.applyStylesToKeyframe(), new Mi(this._driver, o, a || this.currentTime, this._elementTimelineStylesLookup)
                }
                _loadKeyframe() {
                    this._currentKeyframe && (this._previousKeyframe = this._currentKeyframe), this._currentKeyframe = this._keyframes.get(this.duration), this._currentKeyframe || (this._currentKeyframe = Object.create(this._backFill, {}), this._keyframes.set(this.duration, this._currentKeyframe))
                }
                forwardFrame() {
                    this.duration += 1, this._loadKeyframe()
                }
                forwardTime(o) {
                    this.applyStylesToKeyframe(), this.duration = o, this._loadKeyframe()
                }
                _updateStyle(o, a) {
                    this._localTimelineStyles[o] = a, this._globalTimelineStyles[o] = a, this._styleSummary[o] = {
                        time: this.currentTime,
                        value: a
                    }
                }
                allowOnlyTimelineStyles() {
                    return this._currentEmptyStepKeyframe !== this._currentKeyframe
                }
                applyEmptyStep(o) {
                    o && (this._previousKeyframe.easing = o), Object.keys(this._globalTimelineStyles).forEach(a => {
                        this._backFill[a] = this._globalTimelineStyles[a] || wn, this._currentKeyframe[a] = wn
                    }), this._currentEmptyStepKeyframe = this._currentKeyframe
                }
                setStyles(o, a, f, C) {
                    a && (this._previousKeyframe.easing = a);
                    const w = C && C.params || {},
                        R = function(p, o) {
                            const a = {};
                            let f;
                            return p.forEach(C => {
                                "*" === C ? (f = f || Object.keys(o), f.forEach(w => {
                                    a[w] = wn
                                })) : jt(C, !1, a)
                            }), a
                        }(o, this._globalTimelineStyles);
                    Object.keys(R).forEach(F => {
                        const G = Or(R[F], w, f);
                        this._pendingStyles[F] = G, this._localTimelineStyles.hasOwnProperty(F) || (this._backFill[F] = this._globalTimelineStyles.hasOwnProperty(F) ? this._globalTimelineStyles[F] : wn), this._updateStyle(F, G)
                    })
                }
                applyStylesToKeyframe() {
                    const o = this._pendingStyles,
                        a = Object.keys(o);
                    0 != a.length && (this._pendingStyles = {}, a.forEach(f => {
                        this._currentKeyframe[f] = o[f]
                    }), Object.keys(this._localTimelineStyles).forEach(f => {
                        this._currentKeyframe.hasOwnProperty(f) || (this._currentKeyframe[f] = this._localTimelineStyles[f])
                    }))
                }
                snapshotCurrentStyles() {
                    Object.keys(this._localTimelineStyles).forEach(o => {
                        const a = this._localTimelineStyles[o];
                        this._pendingStyles[o] = a, this._updateStyle(o, a)
                    })
                }
                getFinalKeyframe() {
                    return this._keyframes.get(this.duration)
                }
                get properties() {
                    const o = [];
                    for (let a in this._currentKeyframe) o.push(a);
                    return o
                }
                mergeTimelineCollectedStyles(o) {
                    Object.keys(o._styleSummary).forEach(a => {
                        const f = this._styleSummary[a],
                            C = o._styleSummary[a];
                        (!f || C.time > f.time) && this._updateStyle(a, C.value)
                    })
                }
                buildKeyframes() {
                    this.applyStylesToKeyframe();
                    const o = new Set,
                        a = new Set,
                        f = 1 === this._keyframes.size && 0 === this.duration;
                    let C = [];
                    this._keyframes.forEach((F, G) => {
                        const ie = jt(F, !0);
                        Object.keys(ie).forEach(ve => {
                            const Fe = ie[ve];
                            "!" == Fe ? o.add(ve) : Fe == wn && a.add(ve)
                        }), f || (ie.offset = G / this.duration), C.push(ie)
                    });
                    const w = o.size ? Qe(o.values()) : [],
                        R = a.size ? Qe(a.values()) : [];
                    if (f) {
                        const F = C[0],
                            G = Mt(F);
                        F.offset = 0, G.offset = 1, C = [F, G]
                    }
                    return jo(this.element, C, w, R, this.duration, this.startTime, this.easing, !1)
                }
            }
            class ha extends Mi {
                constructor(o, a, f, C, w, R, F = !1) {
                    super(o, a, R.delay), this.keyframes = f, this.preStyleProps = C, this.postStyleProps = w, this._stretchStartingKeyframe = F, this.timings = {
                        duration: R.duration,
                        delay: R.delay,
                        easing: R.easing
                    }
                }
                containsAnimation() {
                    return this.keyframes.length > 1
                }
                buildKeyframes() {
                    let o = this.keyframes,
                        {
                            delay: a,
                            duration: f,
                            easing: C
                        } = this.timings;
                    if (this._stretchStartingKeyframe && a) {
                        const w = [],
                            R = f + a,
                            F = a / R,
                            G = jt(o[0], !1);
                        G.offset = 0, w.push(G);
                        const ie = jt(o[0], !1);
                        ie.offset = Ii(F), w.push(ie);
                        const ve = o.length - 1;
                        for (let Fe = 1; Fe <= ve; Fe++) {
                            let et = jt(o[Fe], !1);
                            et.offset = Ii((a + et.offset * f) / R), w.push(et)
                        }
                        f = R, a = 0, C = "", o = w
                    }
                    return jo(this.element, o, this.preStyleProps, this.postStyleProps, f, a, C, !0)
                }
            }

            function Ii(p, o = 3) {
                const a = Math.pow(10, o - 1);
                return Math.round(p * a) / a
            }
            class An {}
            class zt extends An {
                normalizePropertyName(o, a) {
                    return Lo(o)
                }
                normalizeStyleValue(o, a, f, C) {
                    let w = "";
                    const R = f.toString().trim();
                    if (ga[a] && 0 !== f && "0" !== f)
                        if ("number" == typeof f) w = "px";
                        else {
                            const F = f.match(/^[+-]?[\d\.]+([a-z]*)$/);
                            F && 0 == F[1].length && C.push(`Please provide a CSS unit value for ${o}:${f}`)
                        } return R + w
                }
            }
            const ga = (() => function(p) {
                const o = {};
                return p.forEach(a => o[a] = !0), o
            }("width,height,minWidth,minHeight,maxWidth,maxHeight,left,top,bottom,right,fontSize,outlineWidth,outlineOffset,paddingTop,paddingLeft,paddingBottom,paddingRight,marginTop,marginLeft,marginBottom,marginRight,borderRadius,borderWidth,borderTopWidth,borderLeftWidth,borderRightWidth,borderBottomWidth,textIndent,perspective".split(",")))();

            function ya(p, o, a, f, C, w, R, F, G, ie, ve, Fe, et) {
                return {
                    type: 0,
                    element: p,
                    triggerName: o,
                    isRemovalTransition: C,
                    fromState: a,
                    fromStyles: w,
                    toState: f,
                    toStyles: R,
                    timelines: F,
                    queriedElements: G,
                    preStyleProps: ie,
                    postStyleProps: ve,
                    totalTime: Fe,
                    errors: et
                }
            }
            const $o = {};
            class _a {
                constructor(o, a, f) {
                    this._triggerName = o, this.ast = a, this._stateStyles = f
                }
                match(o, a, f, C) {
                    return function(p, o, a, f, C) {
                        return p.some(w => w(o, a, f, C))
                    }(this.ast.matchers, o, a, f, C)
                }
                buildStyles(o, a, f) {
                    const C = this._stateStyles["*"],
                        w = this._stateStyles[o],
                        R = C ? C.buildStyles(a, f) : {};
                    return w ? w.buildStyles(a, f) : R
                }
                build(o, a, f, C, w, R, F, G, ie, ve) {
                    const Fe = [],
                        et = this.ast.options && this.ast.options.params || $o,
                        qe = this.buildStyles(f, F && F.params || $o, Fe),
                        ut = G && G.params || $o,
                        Et = this.buildStyles(C, ut, Fe),
                        ln = new Set,
                        Qt = new Map,
                        Cn = new Map,
                        nn = "void" === C,
                        Co = {
                            params: Object.assign(Object.assign({}, et), ut)
                        },
                        Rt = ve ? [] : ro(o, a, this.ast.animation, w, R, qe, Et, Co, ie, Fe);
                    let Un = 0;
                    if (Rt.forEach(Jn => {
                            Un = Math.max(Jn.duration + Jn.delay, Un)
                        }), Fe.length) return ya(a, this._triggerName, f, C, nn, qe, Et, [], [], Qt, Cn, Un, Fe);
                    Rt.forEach(Jn => {
                        const fr = Jn.element,
                            gu = Vn(Qt, fr, {});
                        Jn.preStyleProps.forEach(ti => gu[ti] = !0);
                        const vo = Vn(Cn, fr, {});
                        Jn.postStyleProps.forEach(ti => vo[ti] = !0), fr !== a && ln.add(fr)
                    });
                    const ei = Qe(ln.values());
                    return ya(a, this._triggerName, f, C, nn, qe, Et, Rt, ei, Qt, Cn, Un)
                }
            }
            class qs {
                constructor(o, a, f) {
                    this.styles = o, this.defaultParams = a, this.normalizer = f
                }
                buildStyles(o, a) {
                    const f = {},
                        C = Mt(this.defaultParams);
                    return Object.keys(o).forEach(w => {
                        const R = o[w];
                        null != R && (C[w] = R)
                    }), this.styles.styles.forEach(w => {
                        if ("string" != typeof w) {
                            const R = w;
                            Object.keys(R).forEach(F => {
                                let G = R[F];
                                G.length > 1 && (G = Or(G, C, a));
                                const ie = this.normalizer.normalizePropertyName(F, a);
                                G = this.normalizer.normalizeStyleValue(F, ie, G, a), f[ie] = G
                            })
                        }
                    }), f
                }
            }
            class zo {
                constructor(o, a, f) {
                    this.name = o, this.ast = a, this._normalizer = f, this.transitionFactories = [], this.states = {}, a.states.forEach(C => {
                        this.states[C.name] = new qs(C.style, C.options && C.options.params || {}, f)
                    }), lo(this.states, "true", "1"), lo(this.states, "false", "0"), a.transitions.forEach(C => {
                        this.transitionFactories.push(new _a(o, C, this.states))
                    }), this.fallbackTransition = function(p, o, a) {
                        return new _a(p, {
                            type: 1,
                            animation: {
                                type: 2,
                                steps: [],
                                options: null
                            },
                            matchers: [(R, F) => !0],
                            options: null,
                            queryCount: 0,
                            depCount: 0
                        }, o)
                    }(o, this.states)
                }
                get containsQueries() {
                    return this.ast.queryCount > 0
                }
                matchTransition(o, a, f, C) {
                    return this.transitionFactories.find(R => R.match(o, a, f, C)) || null
                }
                matchStyles(o, a, f) {
                    return this.fallbackTransition.buildStyles(o, a, f)
                }
            }

            function lo(p, o, a) {
                p.hasOwnProperty(o) ? p.hasOwnProperty(a) || (p[a] = p[o]) : p.hasOwnProperty(a) && (p[o] = p[a])
            }
            const xr = new no;
            class Pi {
                constructor(o, a, f) {
                    this.bodyNode = o, this._driver = a, this._normalizer = f, this._animations = {}, this._playersById = {}, this.players = []
                }
                register(o, a) {
                    const f = [],
                        C = ca(this._driver, a, f);
                    if (f.length) throw new Error(`Unable to build the animation due to the following errors: ${f.join("\n")}`);
                    this._animations[o] = C
                }
                _buildPlayer(o, a, f) {
                    const C = o.element,
                        w = Ei(0, this._normalizer, 0, o.keyframes, a, f);
                    return this._driver.animate(C, w, o.duration, o.delay, o.easing, [], !0)
                }
                create(o, a, f = {}) {
                    const C = [],
                        w = this._animations[o];
                    let R;
                    const F = new Map;
                    if (w ? (R = ro(this._driver, a, w, E, T, {}, {}, f, xr, C), R.forEach(ve => {
                            const Fe = Vn(F, ve.element, {});
                            ve.postStyleProps.forEach(et => Fe[et] = null)
                        })) : (C.push("The requested animation doesn't exist or has already been destroyed"), R = []), C.length) throw new Error(`Unable to create the animation due to the following errors: ${C.join("\n")}`);
                    F.forEach((ve, Fe) => {
                        Object.keys(ve).forEach(et => {
                            ve[et] = this._driver.computeStyle(Fe, et, wn)
                        })
                    });
                    const ie = Er(R.map(ve => {
                        const Fe = F.get(ve.element);
                        return this._buildPlayer(ve, {}, Fe)
                    }));
                    return this._playersById[o] = ie, ie.onDestroy(() => this.destroy(o)), this.players.push(ie), ie
                }
                destroy(o) {
                    const a = this._getPlayer(o);
                    a.destroy(), delete this._playersById[o];
                    const f = this.players.indexOf(a);
                    f >= 0 && this.players.splice(f, 1)
                }
                _getPlayer(o) {
                    const a = this._playersById[o];
                    if (!a) throw new Error(`Unable to find the timeline player referenced by ${o}`);
                    return a
                }
                listen(o, a, f, C) {
                    const w = ys(a, "", "", "");
                    return Ci(this._getPlayer(o), f, w, C), () => {}
                }
                command(o, a, f, C) {
                    if ("register" == f) return void this.register(o, C[0]);
                    if ("create" == f) return void this.create(o, a, C[0] || {});
                    const w = this._getPlayer(o);
                    switch (f) {
                        case "play":
                            w.play();
                            break;
                        case "pause":
                            w.pause();
                            break;
                        case "reset":
                            w.reset();
                            break;
                        case "restart":
                            w.restart();
                            break;
                        case "finish":
                            w.finish();
                            break;
                        case "init":
                            w.init();
                            break;
                        case "setPosition":
                            w.setPosition(parseFloat(C[0]));
                            break;
                        case "destroy":
                            this.destroy(o)
                    }
                }
            }
            const vs = "ng-animate-queued",
                Zs = "ng-animate-disabled",
                uo = ".ng-animate-disabled",
                uu = [],
                El = {
                    namespaceId: "",
                    setForRemoval: !1,
                    setForMove: !1,
                    hasAnimation: !1,
                    removedBeforeQueried: !1
                },
                hn = {
                    namespaceId: "",
                    setForMove: !1,
                    setForRemoval: !1,
                    hasAnimation: !1,
                    removedBeforeQueried: !0
                },
                Qn = "__ng_removed";
            class Jr {
                constructor(o, a = "") {
                    this.namespaceId = a;
                    const f = o && o.hasOwnProperty("value");
                    if (this.value = null != (p = f ? o.value : o) ? p : null, f) {
                        const w = Mt(o);
                        delete w.value, this.options = w
                    } else this.options = {};
                    var p;
                    this.options.params || (this.options.params = {})
                }
                get params() {
                    return this.options.params
                }
                absorbOptions(o) {
                    const a = o.params;
                    if (a) {
                        const f = this.options.params;
                        Object.keys(a).forEach(C => {
                            null == f[C] && (f[C] = a[C])
                        })
                    }
                }
            }
            const cr = "void",
                Ds = new Jr(cr);
            class bs {
                constructor(o, a, f) {
                    this.id = o, this.hostElement = a, this._engine = f, this.players = [], this._triggers = {}, this._queue = [], this._elementListeners = new Map, this._hostClassName = "ng-tns-" + o, Nn(a, this._hostClassName)
                }
                listen(o, a, f, C) {
                    if (!this._triggers.hasOwnProperty(a)) throw new Error(`Unable to listen on the animation trigger event "${f}" because the animation trigger "${a}" doesn't exist!`);
                    if (null == f || 0 == f.length) throw new Error(`Unable to listen on the animation trigger "${a}" because the provided event is undefined!`);
                    if ("start" != (p = f) && "done" != p) throw new Error(`The provided animation trigger event "${f}" for the animation trigger "${a}" is not supported!`);
                    var p;
                    const w = Vn(this._elementListeners, o, []),
                        R = {
                            name: a,
                            phase: f,
                            callback: C
                        };
                    w.push(R);
                    const F = Vn(this._engine.statesByElement, o, {});
                    return F.hasOwnProperty(a) || (Nn(o, V), Nn(o, V + "-" + a), F[a] = Ds), () => {
                        this._engine.afterFlush(() => {
                            const G = w.indexOf(R);
                            G >= 0 && w.splice(G, 1), this._triggers[a] || delete F[a]
                        })
                    }
                }
                register(o, a) {
                    return !this._triggers[o] && (this._triggers[o] = a, !0)
                }
                _getTrigger(o) {
                    const a = this._triggers[o];
                    if (!a) throw new Error(`The provided animation trigger "${o}" has not been registered!`);
                    return a
                }
                trigger(o, a, f, C = !0) {
                    const w = this._getTrigger(a),
                        R = new Go(this.id, a, o);
                    let F = this._engine.statesByElement.get(o);
                    F || (Nn(o, V), Nn(o, V + "-" + a), this._engine.statesByElement.set(o, F = {}));
                    let G = F[a];
                    const ie = new Jr(f, this.id);
                    if (!(f && f.hasOwnProperty("value")) && G && ie.absorbOptions(G.options), F[a] = ie, G || (G = Ds), ie.value !== cr && G.value === ie.value) {
                        if (! function(p, o) {
                                const a = Object.keys(p),
                                    f = Object.keys(o);
                                if (a.length != f.length) return !1;
                                for (let C = 0; C < a.length; C++) {
                                    const w = a[C];
                                    if (!o.hasOwnProperty(w) || p[w] !== o[w]) return !1
                                }
                                return !0
                            }(G.params, ie.params)) {
                            const ut = [],
                                Et = w.matchStyles(G.value, G.params, ut),
                                ln = w.matchStyles(ie.value, ie.params, ut);
                            ut.length ? this._engine.reportError(ut) : this._engine.afterFlush(() => {
                                En(o, Et), Ot(o, ln)
                            })
                        }
                        return
                    }
                    const et = Vn(this._engine.playersByElement, o, []);
                    et.forEach(ut => {
                        ut.namespaceId == this.id && ut.triggerName == a && ut.queued && ut.destroy()
                    });
                    let Dt = w.matchTransition(G.value, ie.value, o, ie.params),
                        qe = !1;
                    if (!Dt) {
                        if (!C) return;
                        Dt = w.fallbackTransition, qe = !0
                    }
                    return this._engine.totalQueuedPlayers++, this._queue.push({
                        element: o,
                        triggerName: a,
                        transition: Dt,
                        fromState: G,
                        toState: ie,
                        player: R,
                        isFallbackTransition: qe
                    }), qe || (Nn(o, vs), R.onStart(() => {
                        ts(o, vs)
                    })), R.onDone(() => {
                        let ut = this.players.indexOf(R);
                        ut >= 0 && this.players.splice(ut, 1);
                        const Et = this._engine.playersByElement.get(o);
                        if (Et) {
                            let ln = Et.indexOf(R);
                            ln >= 0 && Et.splice(ln, 1)
                        }
                    }), this.players.push(R), et.push(R), R
                }
                deregister(o) {
                    delete this._triggers[o], this._engine.statesByElement.forEach((a, f) => {
                        delete a[o]
                    }), this._elementListeners.forEach((a, f) => {
                        this._elementListeners.set(f, a.filter(C => C.name != o))
                    })
                }
                clearElementCache(o) {
                    this._engine.statesByElement.delete(o), this._elementListeners.delete(o);
                    const a = this._engine.playersByElement.get(o);
                    a && (a.forEach(f => f.destroy()), this._engine.playersByElement.delete(o))
                }
                _signalRemovalForInnerTriggers(o, a) {
                    const f = this._engine.driver.query(o, K, !0);
                    f.forEach(C => {
                        if (C[Qn]) return;
                        const w = this._engine.fetchNamespacesByElement(C);
                        w.size ? w.forEach(R => R.triggerLeaveAnimation(C, a, !1, !0)) : this.clearElementCache(C)
                    }), this._engine.afterFlushAnimationsDone(() => f.forEach(C => this.clearElementCache(C)))
                }
                triggerLeaveAnimation(o, a, f, C) {
                    const w = this._engine.statesByElement.get(o);
                    if (w) {
                        const R = [];
                        if (Object.keys(w).forEach(F => {
                                if (this._triggers[F]) {
                                    const G = this.trigger(o, F, cr, C);
                                    G && R.push(G)
                                }
                            }), R.length) return this._engine.markElementAsRemoved(this.id, o, !0, a), f && Er(R).onDone(() => this._engine.processLeaveNode(o)), !0
                    }
                    return !1
                }
                prepareLeaveAnimationListeners(o) {
                    const a = this._elementListeners.get(o),
                        f = this._engine.statesByElement.get(o);
                    if (a && f) {
                        const C = new Set;
                        a.forEach(w => {
                            const R = w.name;
                            if (C.has(R)) return;
                            C.add(R);
                            const G = this._triggers[R].fallbackTransition,
                                ie = f[R] || Ds,
                                ve = new Jr(cr),
                                Fe = new Go(this.id, R, o);
                            this._engine.totalQueuedPlayers++, this._queue.push({
                                element: o,
                                triggerName: R,
                                transition: G,
                                fromState: ie,
                                toState: ve,
                                player: Fe,
                                isFallbackTransition: !0
                            })
                        })
                    }
                }
                removeNode(o, a) {
                    const f = this._engine;
                    if (o.childElementCount && this._signalRemovalForInnerTriggers(o, a), this.triggerLeaveAnimation(o, a, !0)) return;
                    let C = !1;
                    if (f.totalAnimations) {
                        const w = f.players.length ? f.playersByQueriedElement.get(o) : [];
                        if (w && w.length) C = !0;
                        else {
                            let R = o;
                            for (; R = R.parentNode;)
                                if (f.statesByElement.get(R)) {
                                    C = !0;
                                    break
                                }
                        }
                    }
                    if (this.prepareLeaveAnimationListeners(o), C) f.markElementAsRemoved(this.id, o, !1, a);
                    else {
                        const w = o[Qn];
                        (!w || w === El) && (f.afterFlush(() => this.clearElementCache(o)), f.destroyInnerAnimations(o), f._onRemovalComplete(o, a))
                    }
                }
                insertNode(o, a) {
                    Nn(o, this._hostClassName)
                }
                drainQueuedTransitions(o) {
                    const a = [];
                    return this._queue.forEach(f => {
                        const C = f.player;
                        if (C.destroyed) return;
                        const w = f.element,
                            R = this._elementListeners.get(w);
                        R && R.forEach(F => {
                            if (F.name == f.triggerName) {
                                const G = ys(w, f.triggerName, f.fromState.value, f.toState.value);
                                G._data = o, Ci(f.player, F.phase, G, F.callback)
                            }
                        }), C.markedForDestroy ? this._engine.afterFlush(() => {
                            C.destroy()
                        }) : a.push(f)
                    }), this._queue = [], a.sort((f, C) => {
                        const w = f.transition.ast.depCount,
                            R = C.transition.ast.depCount;
                        return 0 == w || 0 == R ? w - R : this._engine.driver.containsElement(f.element, C.element) ? 1 : -1
                    })
                }
                destroy(o) {
                    this.players.forEach(a => a.destroy()), this._signalRemovalForInnerTriggers(this.hostElement, o)
                }
                elementContainsData(o) {
                    let a = !1;
                    return this._elementListeners.has(o) && (a = !0), a = !!this._queue.find(f => f.element === o) || a, a
                }
            }
            class ws {
                constructor(o, a, f) {
                    this.bodyNode = o, this.driver = a, this._normalizer = f, this.players = [], this.newHostElements = new Map, this.playersByElement = new Map, this.playersByQueriedElement = new Map, this.statesByElement = new Map, this.disabledNodes = new Set, this.totalAnimations = 0, this.totalQueuedPlayers = 0, this._namespaceLookup = {}, this._namespaceList = [], this._flushFns = [], this._whenQuietFns = [], this.namespacesByHostElement = new Map, this.collectedEnterElements = [], this.collectedLeaveElements = [], this.onRemovalComplete = (C, w) => {}
                }
                _onRemovalComplete(o, a) {
                    this.onRemovalComplete(o, a)
                }
                get queuedPlayers() {
                    const o = [];
                    return this._namespaceList.forEach(a => {
                        a.players.forEach(f => {
                            f.queued && o.push(f)
                        })
                    }), o
                }
                createNamespace(o, a) {
                    const f = new bs(o, a, this);
                    return this.bodyNode && this.driver.containsElement(this.bodyNode, a) ? this._balanceNamespaceList(f, a) : (this.newHostElements.set(a, f), this.collectEnterElement(a)), this._namespaceLookup[o] = f
                }
                _balanceNamespaceList(o, a) {
                    const f = this._namespaceList.length - 1;
                    if (f >= 0) {
                        let C = !1;
                        for (let w = f; w >= 0; w--)
                            if (this.driver.containsElement(this._namespaceList[w].hostElement, a)) {
                                this._namespaceList.splice(w + 1, 0, o), C = !0;
                                break
                            } C || this._namespaceList.splice(0, 0, o)
                    } else this._namespaceList.push(o);
                    return this.namespacesByHostElement.set(a, o), o
                }
                register(o, a) {
                    let f = this._namespaceLookup[o];
                    return f || (f = this.createNamespace(o, a)), f
                }
                registerTrigger(o, a, f) {
                    let C = this._namespaceLookup[o];
                    C && C.register(a, f) && this.totalAnimations++
                }
                destroy(o, a) {
                    if (!o) return;
                    const f = this._fetchNamespace(o);
                    this.afterFlush(() => {
                        this.namespacesByHostElement.delete(f.hostElement), delete this._namespaceLookup[o];
                        const C = this._namespaceList.indexOf(f);
                        C >= 0 && this._namespaceList.splice(C, 1)
                    }), this.afterFlushAnimationsDone(() => f.destroy(a))
                }
                _fetchNamespace(o) {
                    return this._namespaceLookup[o]
                }
                fetchNamespacesByElement(o) {
                    const a = new Set,
                        f = this.statesByElement.get(o);
                    if (f) {
                        const C = Object.keys(f);
                        for (let w = 0; w < C.length; w++) {
                            const R = f[C[w]].namespaceId;
                            if (R) {
                                const F = this._fetchNamespace(R);
                                F && a.add(F)
                            }
                        }
                    }
                    return a
                }
                trigger(o, a, f, C) {
                    if (es(a)) {
                        const w = this._fetchNamespace(o);
                        if (w) return w.trigger(a, f, C), !0
                    }
                    return !1
                }
                insertNode(o, a, f, C) {
                    if (!es(a)) return;
                    const w = a[Qn];
                    if (w && w.setForRemoval) {
                        w.setForRemoval = !1, w.setForMove = !0;
                        const R = this.collectedLeaveElements.indexOf(a);
                        R >= 0 && this.collectedLeaveElements.splice(R, 1)
                    }
                    if (o) {
                        const R = this._fetchNamespace(o);
                        R && R.insertNode(a, f)
                    }
                    C && this.collectEnterElement(a)
                }
                collectEnterElement(o) {
                    this.collectedEnterElements.push(o)
                }
                markElementAsDisabled(o, a) {
                    a ? this.disabledNodes.has(o) || (this.disabledNodes.add(o), Nn(o, Zs)) : this.disabledNodes.has(o) && (this.disabledNodes.delete(o), ts(o, Zs))
                }
                removeNode(o, a, f, C) {
                    if (es(a)) {
                        const w = o ? this._fetchNamespace(o) : null;
                        if (w ? w.removeNode(a, C) : this.markElementAsRemoved(o, a, !1, C), f) {
                            const R = this.namespacesByHostElement.get(a);
                            R && R.id !== o && R.removeNode(a, C)
                        }
                    } else this._onRemovalComplete(a, C)
                }
                markElementAsRemoved(o, a, f, C) {
                    this.collectedLeaveElements.push(a), a[Qn] = {
                        namespaceId: o,
                        setForRemoval: C,
                        hasAnimation: f,
                        removedBeforeQueried: !1
                    }
                }
                listen(o, a, f, C, w) {
                    return es(a) ? this._fetchNamespace(o).listen(a, f, C, w) : () => {}
                }
                _buildInstruction(o, a, f, C, w) {
                    return o.transition.build(this.driver, o.element, o.fromState.value, o.toState.value, f, C, o.fromState.options, o.toState.options, a, w)
                }
                destroyInnerAnimations(o) {
                    let a = this.driver.query(o, K, !0);
                    a.forEach(f => this.destroyActiveAnimationsForElement(f)), 0 != this.playersByQueriedElement.size && (a = this.driver.query(o, Re, !0), a.forEach(f => this.finishActiveQueriedAnimationOnElement(f)))
                }
                destroyActiveAnimationsForElement(o) {
                    const a = this.playersByElement.get(o);
                    a && a.forEach(f => {
                        f.queued ? f.markedForDestroy = !0 : f.destroy()
                    })
                }
                finishActiveQueriedAnimationOnElement(o) {
                    const a = this.playersByQueriedElement.get(o);
                    a && a.forEach(f => f.finish())
                }
                whenRenderingDone() {
                    return new Promise(o => {
                        if (this.players.length) return Er(this.players).onDone(() => o());
                        o()
                    })
                }
                processLeaveNode(o) {
                    const a = o[Qn];
                    if (a && a.setForRemoval) {
                        if (o[Qn] = El, a.namespaceId) {
                            this.destroyInnerAnimations(o);
                            const f = this._fetchNamespace(a.namespaceId);
                            f && f.clearElementCache(o)
                        }
                        this._onRemovalComplete(o, a.setForRemoval)
                    }
                    this.driver.matchesElement(o, uo) && this.markElementAsDisabled(o, !1), this.driver.query(o, uo, !0).forEach(f => {
                        this.markElementAsDisabled(f, !1)
                    })
                }
                flush(o = -1) {
                    let a = [];
                    if (this.newHostElements.size && (this.newHostElements.forEach((f, C) => this._balanceNamespaceList(f, C)), this.newHostElements.clear()), this.totalAnimations && this.collectedEnterElements.length)
                        for (let f = 0; f < this.collectedEnterElements.length; f++) Nn(this.collectedEnterElements[f], "ng-star-inserted");
                    if (this._namespaceList.length && (this.totalQueuedPlayers || this.collectedLeaveElements.length)) {
                        const f = [];
                        try {
                            a = this._flushAnimations(f, o)
                        } finally {
                            for (let C = 0; C < f.length; C++) f[C]()
                        }
                    } else
                        for (let f = 0; f < this.collectedLeaveElements.length; f++) this.processLeaveNode(this.collectedLeaveElements[f]);
                    if (this.totalQueuedPlayers = 0, this.collectedEnterElements.length = 0, this.collectedLeaveElements.length = 0, this._flushFns.forEach(f => f()), this._flushFns = [], this._whenQuietFns.length) {
                        const f = this._whenQuietFns;
                        this._whenQuietFns = [], a.length ? Er(a).onDone(() => {
                            f.forEach(C => C())
                        }) : f.forEach(C => C())
                    }
                }
                reportError(o) {
                    throw new Error(`Unable to process animations due to the following failed trigger transitions\n ${o.join("\n")}`)
                }
                _flushAnimations(o, a) {
                    const f = new no,
                        C = [],
                        w = new Map,
                        R = [],
                        F = new Map,
                        G = new Map,
                        ie = new Map,
                        ve = new Set;
                    this.disabledNodes.forEach(Ie => {
                        ve.add(Ie);
                        const Ge = this.driver.query(Ie, ".ng-animate-queued", !0);
                        for (let Ze = 0; Ze < Ge.length; Ze++) ve.add(Ge[Ze])
                    });
                    const Fe = this.bodyNode,
                        et = Array.from(this.statesByElement.keys()),
                        Dt = ho(et, this.collectedEnterElements),
                        qe = new Map;
                    let ut = 0;
                    Dt.forEach((Ie, Ge) => {
                        const Ze = E + ut++;
                        qe.set(Ge, Ze), Ie.forEach(At => Nn(At, Ze))
                    });
                    const Et = [],
                        ln = new Set,
                        Qt = new Set;
                    for (let Ie = 0; Ie < this.collectedLeaveElements.length; Ie++) {
                        const Ge = this.collectedLeaveElements[Ie],
                            Ze = Ge[Qn];
                        Ze && Ze.setForRemoval && (Et.push(Ge), ln.add(Ge), Ze.hasAnimation ? this.driver.query(Ge, ".ng-star-inserted", !0).forEach(At => ln.add(At)) : Qt.add(Ge))
                    }
                    const Cn = new Map,
                        nn = ho(et, Array.from(ln));
                    nn.forEach((Ie, Ge) => {
                        const Ze = T + ut++;
                        Cn.set(Ge, Ze), Ie.forEach(At => Nn(At, Ze))
                    }), o.push(() => {
                        Dt.forEach((Ie, Ge) => {
                            const Ze = qe.get(Ge);
                            Ie.forEach(At => ts(At, Ze))
                        }), nn.forEach((Ie, Ge) => {
                            const Ze = Cn.get(Ge);
                            Ie.forEach(At => ts(At, Ze))
                        }), Et.forEach(Ie => {
                            this.processLeaveNode(Ie)
                        })
                    });
                    const Co = [],
                        Rt = [];
                    for (let Ie = this._namespaceList.length - 1; Ie >= 0; Ie--) this._namespaceList[Ie].drainQueuedTransitions(a).forEach(Ze => {
                        const At = Ze.player,
                            vn = Ze.element;
                        if (Co.push(At), this.collectedEnterElements.length) {
                            const Xn = vn[Qn];
                            if (Xn && Xn.setForMove) return void At.destroy()
                        }
                        const wr = !Fe || !this.driver.containsElement(Fe, vn),
                            Hn = Cn.get(vn),
                            Ss = qe.get(vn),
                            rn = this._buildInstruction(Ze, f, Ss, Hn, wr);
                        if (rn.errors && rn.errors.length) Rt.push(rn);
                        else {
                            if (wr) return At.onStart(() => En(vn, rn.fromStyles)), At.onDestroy(() => Ot(vn, rn.toStyles)), void C.push(At);
                            if (Ze.isFallbackTransition) return At.onStart(() => En(vn, rn.fromStyles)), At.onDestroy(() => Ot(vn, rn.toStyles)), void C.push(At);
                            rn.timelines.forEach(Xn => Xn.stretchStartingKeyframe = !0), f.append(vn, rn.timelines), R.push({
                                instruction: rn,
                                player: At,
                                element: vn
                            }), rn.queriedElements.forEach(Xn => Vn(F, Xn, []).push(At)), rn.preStyleProps.forEach((Xn, As) => {
                                const Sa = Object.keys(Xn);
                                if (Sa.length) {
                                    let Do = G.get(As);
                                    Do || G.set(As, Do = new Set), Sa.forEach(Aa => Do.add(Aa))
                                }
                            }), rn.postStyleProps.forEach((Xn, As) => {
                                const Sa = Object.keys(Xn);
                                let Do = ie.get(As);
                                Do || ie.set(As, Do = new Set), Sa.forEach(Aa => Do.add(Aa))
                            })
                        }
                    });
                    if (Rt.length) {
                        const Ie = [];
                        Rt.forEach(Ge => {
                            Ie.push(`@${Ge.triggerName} has failed due to:\n`), Ge.errors.forEach(Ze => Ie.push(`- ${Ze}\n`))
                        }), Co.forEach(Ge => Ge.destroy()), this.reportError(Ie)
                    }
                    const Un = new Map,
                        ei = new Map;
                    R.forEach(Ie => {
                        const Ge = Ie.element;
                        f.has(Ge) && (ei.set(Ge, Ge), this._beforeAnimationBuild(Ie.player.namespaceId, Ie.instruction, Un))
                    }), C.forEach(Ie => {
                        const Ge = Ie.element;
                        this._getPreviousPlayers(Ge, !1, Ie.namespaceId, Ie.triggerName, null).forEach(At => {
                            Vn(Un, Ge, []).push(At), At.destroy()
                        })
                    });
                    const Jn = Et.filter(Ie => Yo(Ie, G, ie)),
                        fr = new Map;
                    fo(fr, this.driver, Qt, ie, wn).forEach(Ie => {
                        Yo(Ie, G, ie) && Jn.push(Ie)
                    });
                    const vo = new Map;
                    Dt.forEach((Ie, Ge) => {
                        fo(vo, this.driver, new Set(Ie), G, "!")
                    }), Jn.forEach(Ie => {
                        const Ge = fr.get(Ie),
                            Ze = vo.get(Ie);
                        fr.set(Ie, Object.assign(Object.assign({}, Ge), Ze))
                    });
                    const ti = [],
                        pc = [],
                        Ni = {};
                    R.forEach(Ie => {
                        const {
                            element: Ge,
                            player: Ze,
                            instruction: At
                        } = Ie;
                        if (f.has(Ge)) {
                            if (ve.has(Ge)) return Ze.onDestroy(() => Ot(Ge, At.toStyles)), Ze.disabled = !0, Ze.overrideTotalTime(At.totalTime), void C.push(Ze);
                            let vn = Ni;
                            if (ei.size > 1) {
                                let Hn = Ge;
                                const Ss = [];
                                for (; Hn = Hn.parentNode;) {
                                    const rn = ei.get(Hn);
                                    if (rn) {
                                        vn = rn;
                                        break
                                    }
                                    Ss.push(Hn)
                                }
                                Ss.forEach(rn => ei.set(rn, vn))
                            }
                            const wr = this._buildAnimation(Ze.namespaceId, At, Un, w, vo, fr);
                            if (Ze.setRealPlayer(wr), vn === Ni) ti.push(Ze);
                            else {
                                const Hn = this.playersByElement.get(vn);
                                Hn && Hn.length && (Ze.parentPlayer = Er(Hn)), C.push(Ze)
                            }
                        } else En(Ge, At.fromStyles), Ze.onDestroy(() => Ot(Ge, At.toStyles)), pc.push(Ze), ve.has(Ge) && C.push(Ze)
                    }), pc.forEach(Ie => {
                        const Ge = w.get(Ie.element);
                        if (Ge && Ge.length) {
                            const Ze = Er(Ge);
                            Ie.setRealPlayer(Ze)
                        }
                    }), C.forEach(Ie => {
                        Ie.parentPlayer ? Ie.syncPlayerEvents(Ie.parentPlayer) : Ie.destroy()
                    });
                    for (let Ie = 0; Ie < Et.length; Ie++) {
                        const Ge = Et[Ie],
                            Ze = Ge[Qn];
                        if (ts(Ge, T), Ze && Ze.hasAnimation) continue;
                        let At = [];
                        if (F.size) {
                            let wr = F.get(Ge);
                            wr && wr.length && At.push(...wr);
                            let Hn = this.driver.query(Ge, Re, !0);
                            for (let Ss = 0; Ss < Hn.length; Ss++) {
                                let rn = F.get(Hn[Ss]);
                                rn && rn.length && At.push(...rn)
                            }
                        }
                        const vn = At.filter(wr => !wr.destroyed);
                        vn.length ? po(this, Ge, vn) : this.processLeaveNode(Ge)
                    }
                    return Et.length = 0, ti.forEach(Ie => {
                        this.players.push(Ie), Ie.onDone(() => {
                            Ie.destroy();
                            const Ge = this.players.indexOf(Ie);
                            this.players.splice(Ge, 1)
                        }), Ie.play()
                    }), ti
                }
                elementContainsData(o, a) {
                    let f = !1;
                    const C = a[Qn];
                    return C && C.setForRemoval && (f = !0), this.playersByElement.has(a) && (f = !0), this.playersByQueriedElement.has(a) && (f = !0), this.statesByElement.has(a) && (f = !0), this._fetchNamespace(o).elementContainsData(a) || f
                }
                afterFlush(o) {
                    this._flushFns.push(o)
                }
                afterFlushAnimationsDone(o) {
                    this._whenQuietFns.push(o)
                }
                _getPreviousPlayers(o, a, f, C, w) {
                    let R = [];
                    if (a) {
                        const F = this.playersByQueriedElement.get(o);
                        F && (R = F)
                    } else {
                        const F = this.playersByElement.get(o);
                        if (F) {
                            const G = !w || w == cr;
                            F.forEach(ie => {
                                ie.queued || !G && ie.triggerName != C || R.push(ie)
                            })
                        }
                    }
                    return (f || C) && (R = R.filter(F => !(f && f != F.namespaceId || C && C != F.triggerName))), R
                }
                _beforeAnimationBuild(o, a, f) {
                    const w = a.element,
                        R = a.isRemovalTransition ? void 0 : o,
                        F = a.isRemovalTransition ? void 0 : a.triggerName;
                    for (const G of a.timelines) {
                        const ie = G.element,
                            ve = ie !== w,
                            Fe = Vn(f, ie, []);
                        this._getPreviousPlayers(ie, ve, R, F, a.toState).forEach(Dt => {
                            const qe = Dt.getRealPlayer();
                            qe.beforeDestroy && qe.beforeDestroy(), Dt.destroy(), Fe.push(Dt)
                        })
                    }
                    En(w, a.fromStyles)
                }
                _buildAnimation(o, a, f, C, w, R) {
                    const F = a.triggerName,
                        G = a.element,
                        ie = [],
                        ve = new Set,
                        Fe = new Set,
                        et = a.timelines.map(qe => {
                            const ut = qe.element;
                            ve.add(ut);
                            const Et = ut[Qn];
                            if (Et && Et.removedBeforeQueried) return new $t(qe.duration, qe.delay);
                            const ln = ut !== G,
                                Qt = function(p) {
                                    const o = [];
                                    return va(p, o), o
                                }((f.get(ut) || uu).map(Un => Un.getRealPlayer())).filter(Un => !!Un.element && Un.element === ut),
                                Cn = w.get(ut),
                                nn = R.get(ut),
                                Co = Ei(0, this._normalizer, 0, qe.keyframes, Cn, nn),
                                Rt = this._buildPlayer(qe, Co, Qt);
                            if (qe.subTimeline && C && Fe.add(ut), ln) {
                                const Un = new Go(o, F, ut);
                                Un.setRealPlayer(Rt), ie.push(Un)
                            }
                            return Rt
                        });
                    ie.forEach(qe => {
                        Vn(this.playersByQueriedElement, qe.element, []).push(qe), qe.onDone(() => function(p, o, a) {
                            let f;
                            if (p instanceof Map) {
                                if (f = p.get(o), f) {
                                    if (f.length) {
                                        const C = f.indexOf(a);
                                        f.splice(C, 1)
                                    }
                                    0 == f.length && p.delete(o)
                                }
                            } else if (f = p[o], f) {
                                if (f.length) {
                                    const C = f.indexOf(a);
                                    f.splice(C, 1)
                                }
                                0 == f.length && delete p[o]
                            }
                            return f
                        }(this.playersByQueriedElement, qe.element, qe))
                    }), ve.forEach(qe => Nn(qe, _e));
                    const Dt = Er(et);
                    return Dt.onDestroy(() => {
                        ve.forEach(qe => ts(qe, _e)), Ot(G, a.toStyles)
                    }), Fe.forEach(qe => {
                        Vn(C, qe, []).push(Dt)
                    }), Dt
                }
                _buildPlayer(o, a, f) {
                    return a.length > 0 ? this.driver.animate(o.element, a, o.duration, o.delay, o.easing, f) : new $t(o.duration, o.delay)
                }
            }
            class Go {
                constructor(o, a, f) {
                    this.namespaceId = o, this.triggerName = a, this.element = f, this._player = new $t, this._containsRealPlayer = !1, this._queuedCallbacks = {}, this.destroyed = !1, this.markedForDestroy = !1, this.disabled = !1, this.queued = !0, this.totalTime = 0
                }
                setRealPlayer(o) {
                    this._containsRealPlayer || (this._player = o, Object.keys(this._queuedCallbacks).forEach(a => {
                        this._queuedCallbacks[a].forEach(f => Ci(o, a, void 0, f))
                    }), this._queuedCallbacks = {}, this._containsRealPlayer = !0, this.overrideTotalTime(o.totalTime), this.queued = !1)
                }
                getRealPlayer() {
                    return this._player
                }
                overrideTotalTime(o) {
                    this.totalTime = o
                }
                syncPlayerEvents(o) {
                    const a = this._player;
                    a.triggerCallback && o.onStart(() => a.triggerCallback("start")), o.onDone(() => this.finish()), o.onDestroy(() => this.destroy())
                }
                _queueEvent(o, a) {
                    Vn(this._queuedCallbacks, o, []).push(a)
                }
                onDone(o) {
                    this.queued && this._queueEvent("done", o), this._player.onDone(o)
                }
                onStart(o) {
                    this.queued && this._queueEvent("start", o), this._player.onStart(o)
                }
                onDestroy(o) {
                    this.queued && this._queueEvent("destroy", o), this._player.onDestroy(o)
                }
                init() {
                    this._player.init()
                }
                hasStarted() {
                    return !this.queued && this._player.hasStarted()
                }
                play() {
                    !this.queued && this._player.play()
                }
                pause() {
                    !this.queued && this._player.pause()
                }
                restart() {
                    !this.queued && this._player.restart()
                }
                finish() {
                    this._player.finish()
                }
                destroy() {
                    this.destroyed = !0, this._player.destroy()
                }
                reset() {
                    !this.queued && this._player.reset()
                }
                setPosition(o) {
                    this.queued || this._player.setPosition(o)
                }
                getPosition() {
                    return this.queued ? 0 : this._player.getPosition()
                }
                triggerCallback(o) {
                    const a = this._player;
                    a.triggerCallback && a.triggerCallback(o)
                }
            }

            function es(p) {
                return p && 1 === p.nodeType
            }

            function co(p, o) {
                const a = p.style.display;
                return p.style.display = null != o ? o : "none", a
            }

            function fo(p, o, a, f, C) {
                const w = [];
                a.forEach(G => w.push(co(G)));
                const R = [];
                f.forEach((G, ie) => {
                    const ve = {};
                    G.forEach(Fe => {
                        const et = ve[Fe] = o.computeStyle(ie, Fe, C);
                        (!et || 0 == et.length) && (ie[Qn] = hn, R.push(ie))
                    }), p.set(ie, ve)
                });
                let F = 0;
                return a.forEach(G => co(G, w[F++])), R
            }

            function ho(p, o) {
                const a = new Map;
                if (p.forEach(F => a.set(F, [])), 0 == o.length) return a;
                const C = new Set(o),
                    w = new Map;

                function R(F) {
                    if (!F) return 1;
                    let G = w.get(F);
                    if (G) return G;
                    const ie = F.parentNode;
                    return G = a.has(ie) ? ie : C.has(ie) ? 1 : R(ie), w.set(F, G), G
                }
                return o.forEach(F => {
                    const G = R(F);
                    1 !== G && a.get(G).push(F)
                }), a
            }
            const Ko = "$$classes";

            function Nn(p, o) {
                if (p.classList) p.classList.add(o);
                else {
                    let a = p[Ko];
                    a || (a = p[Ko] = {}), a[o] = !0
                }
            }

            function ts(p, o) {
                if (p.classList) p.classList.remove(o);
                else {
                    let a = p[Ko];
                    a && delete a[o]
                }
            }

            function po(p, o, a) {
                Er(a).onDone(() => p.processLeaveNode(o))
            }

            function va(p, o) {
                for (let a = 0; a < p.length; a++) {
                    const f = p[a];
                    f instanceof Ki ? va(f.players, o) : o.push(f)
                }
            }

            function Yo(p, o, a) {
                const f = a.get(p);
                if (!f) return !1;
                let C = o.get(p);
                return C ? f.forEach(w => C.add(w)) : o.set(p, f), a.delete(p), !0
            }
            class Oi {
                constructor(o, a, f) {
                    this.bodyNode = o, this._driver = a, this._normalizer = f, this._triggerCache = {}, this.onRemovalComplete = (C, w) => {}, this._transitionEngine = new ws(o, a, f), this._timelineEngine = new Pi(o, a, f), this._transitionEngine.onRemovalComplete = (C, w) => this.onRemovalComplete(C, w)
                }
                registerTrigger(o, a, f, C, w) {
                    const R = o + "-" + C;
                    let F = this._triggerCache[R];
                    if (!F) {
                        const G = [],
                            ie = ca(this._driver, w, G);
                        if (G.length) throw new Error(`The animation trigger "${C}" has failed to build due to the following errors:\n - ${G.join("\n - ")}`);
                        F = function(p, o, a) {
                            return new zo(p, o, a)
                        }(C, ie, this._normalizer), this._triggerCache[R] = F
                    }
                    this._transitionEngine.registerTrigger(a, C, F)
                }
                register(o, a) {
                    this._transitionEngine.register(o, a)
                }
                destroy(o, a) {
                    this._transitionEngine.destroy(o, a)
                }
                onInsert(o, a, f, C) {
                    this._transitionEngine.insertNode(o, a, f, C)
                }
                onRemove(o, a, f, C) {
                    this._transitionEngine.removeNode(o, a, C || !1, f)
                }
                disableAnimations(o, a) {
                    this._transitionEngine.markElementAsDisabled(o, a)
                }
                process(o, a, f, C) {
                    if ("@" == f.charAt(0)) {
                        const [w, R] = Hs(f);
                        this._timelineEngine.command(w, a, R, C)
                    } else this._transitionEngine.trigger(o, a, f, C)
                }
                listen(o, a, f, C, w) {
                    if ("@" == f.charAt(0)) {
                        const [R, F] = Hs(f);
                        return this._timelineEngine.listen(R, a, F, w)
                    }
                    return this._transitionEngine.listen(o, a, f, C, w)
                }
                flush(o = -1) {
                    this._transitionEngine.flush(o)
                }
                get players() {
                    return this._transitionEngine.players.concat(this._timelineEngine.players)
                }
                whenRenderingDone() {
                    return this._transitionEngine.whenRenderingDone()
                }
            }

            function mo(p, o) {
                let a = null,
                    f = null;
                return Array.isArray(o) && o.length ? (a = qo(o[0]), o.length > 1 && (f = qo(o[o.length - 1]))) : o && (a = qo(o)), a || f ? new Cl(p, a, f) : null
            }
            let Cl = (() => {
                class p {
                    constructor(a, f, C) {
                        this._element = a, this._startStyles = f, this._endStyles = C, this._state = 0;
                        let w = p.initialStylesByElement.get(a);
                        w || p.initialStylesByElement.set(a, w = {}), this._initialStyles = w
                    }
                    start() {
                        this._state < 1 && (this._startStyles && Ot(this._element, this._startStyles, this._initialStyles), this._state = 1)
                    }
                    finish() {
                        this.start(), this._state < 2 && (Ot(this._element, this._initialStyles), this._endStyles && (Ot(this._element, this._endStyles), this._endStyles = null), this._state = 1)
                    }
                    destroy() {
                        this.finish(), this._state < 3 && (p.initialStylesByElement.delete(this._element), this._startStyles && (En(this._element, this._startStyles), this._endStyles = null), this._endStyles && (En(this._element, this._endStyles), this._endStyles = null), Ot(this._element, this._initialStyles), this._state = 3)
                    }
                }
                return p.initialStylesByElement = new WeakMap, p
            })();

            function qo(p) {
                let o = null;
                const a = Object.keys(p);
                for (let f = 0; f < a.length; f++) {
                    const C = a[f];
                    yo(C) && (o = o || {}, o[C] = p[C])
                }
                return o
            }

            function yo(p) {
                return "display" === p || "position" === p
            }
            const ba = "animation",
                Zo = "animationend";
            class Qs {
                constructor(o, a, f, C, w, R, F) {
                    this._element = o, this._name = a, this._duration = f, this._delay = C, this._easing = w, this._fillMode = R, this._onDoneFn = F, this._finished = !1, this._destroyed = !1, this._startTime = 0, this._position = 0, this._eventFn = G => this._handleCallback(G)
                }
                apply() {
                    (function(p, o) {
                        const a = x(p, "").trim();
                        let f = 0;
                        a.length && (function(p, o) {
                            let a = 0;
                            for (let f = 0; f < p.length; f++) "," === p.charAt(f) && a++;
                            return a
                        }(a) + 1, o = `${a}, ${o}`), S(p, "", o)
                    })(this._element, `${this._duration}ms ${this._easing} ${this._delay}ms 1 normal ${this._fillMode} ${this._name}`), D(this._element, this._eventFn, !1), this._startTime = Date.now()
                }
                pause() {
                    wa(this._element, this._name, "paused")
                }
                resume() {
                    wa(this._element, this._name, "running")
                }
                setPosition(o) {
                    const a = c(this._element, this._name);
                    this._position = o * this._duration, S(this._element, "Delay", `-${this._position}ms`, a)
                }
                getPosition() {
                    return this._position
                }
                _handleCallback(o) {
                    const a = o._ngTestManualTimestamp || Date.now(),
                        f = 1e3 * parseFloat(o.elapsedTime.toFixed(3));
                    o.animationName == this._name && Math.max(a - this._startTime, 0) >= this._delay && f >= this._duration && this.finish()
                }
                finish() {
                    this._finished || (this._finished = !0, this._onDoneFn(), D(this._element, this._eventFn, !0))
                }
                destroy() {
                    this._destroyed || (this._destroyed = !0, this.finish(), function(p, o) {
                        const f = x(p, "").split(","),
                            C = y(f, o);
                        C >= 0 && (f.splice(C, 1), S(p, "", f.join(",")))
                    }(this._element, this._name))
                }
            }

            function wa(p, o, a) {
                S(p, "PlayState", a, c(p, o))
            }

            function c(p, o) {
                const a = x(p, "");
                return a.indexOf(",") > 0 ? y(a.split(","), o) : y([a], o)
            }

            function y(p, o) {
                for (let a = 0; a < p.length; a++)
                    if (p[a].indexOf(o) >= 0) return a;
                return -1
            }

            function D(p, o, a) {
                a ? p.removeEventListener(Zo, o) : p.addEventListener(Zo, o)
            }

            function S(p, o, a, f) {
                const C = ba + o;
                if (null != f) {
                    const w = p.style[C];
                    if (w.length) {
                        const R = w.split(",");
                        R[f] = a, a = R.join(",")
                    }
                }
                p.style[C] = a
            }

            function x(p, o) {
                return p.style[ba + o] || ""
            }
            class Ct {
                constructor(o, a, f, C, w, R, F, G) {
                    this.element = o, this.keyframes = a, this.animationName = f, this._duration = C, this._delay = w, this._finalStyles = F, this._specialStyles = G, this._onDoneFns = [], this._onStartFns = [], this._onDestroyFns = [], this.currentSnapshot = {}, this._state = 0, this.easing = R || "linear", this.totalTime = C + w, this._buildStyler()
                }
                onStart(o) {
                    this._onStartFns.push(o)
                }
                onDone(o) {
                    this._onDoneFns.push(o)
                }
                onDestroy(o) {
                    this._onDestroyFns.push(o)
                }
                destroy() {
                    this.init(), !(this._state >= 4) && (this._state = 4, this._styler.destroy(), this._flushStartFns(), this._flushDoneFns(), this._specialStyles && this._specialStyles.destroy(), this._onDestroyFns.forEach(o => o()), this._onDestroyFns = [])
                }
                _flushDoneFns() {
                    this._onDoneFns.forEach(o => o()), this._onDoneFns = []
                }
                _flushStartFns() {
                    this._onStartFns.forEach(o => o()), this._onStartFns = []
                }
                finish() {
                    this.init(), !(this._state >= 3) && (this._state = 3, this._styler.finish(), this._flushStartFns(), this._specialStyles && this._specialStyles.finish(), this._flushDoneFns())
                }
                setPosition(o) {
                    this._styler.setPosition(o)
                }
                getPosition() {
                    return this._styler.getPosition()
                }
                hasStarted() {
                    return this._state >= 2
                }
                init() {
                    this._state >= 1 || (this._state = 1, this._styler.apply(), this._delay && this._styler.pause())
                }
                play() {
                    this.init(), this.hasStarted() || (this._flushStartFns(), this._state = 2, this._specialStyles && this._specialStyles.start()), this._styler.resume()
                }
                pause() {
                    this.init(), this._styler.pause()
                }
                restart() {
                    this.reset(), this.play()
                }
                reset() {
                    this._state = 0, this._styler.destroy(), this._buildStyler(), this._styler.apply()
                }
                _buildStyler() {
                    this._styler = new Qs(this.element, this.animationName, this._duration, this._delay, this.easing, "forwards", () => this.finish())
                }
                triggerCallback(o) {
                    const a = "start" == o ? this._onStartFns : this._onDoneFns;
                    a.forEach(f => f()), a.length = 0
                }
                beforeDestroy() {
                    this.init();
                    const o = {};
                    if (this.hasStarted()) {
                        const a = this._state >= 3;
                        Object.keys(this._finalStyles).forEach(f => {
                            "offset" != f && (o[f] = a ? this._finalStyles[f] : _s(this.element, f))
                        })
                    }
                    this.currentSnapshot = o
                }
            }
            class Ye extends $t {
                constructor(o, a) {
                    super(), this.element = o, this._startingStyles = {}, this.__initialized = !1, this._styles = Yr(a)
                }
                init() {
                    this.__initialized || !this._startingStyles || (this.__initialized = !0, Object.keys(this._styles).forEach(o => {
                        this._startingStyles[o] = this.element.style[o]
                    }), super.init())
                }
                play() {
                    !this._startingStyles || (this.init(), Object.keys(this._styles).forEach(o => this.element.style.setProperty(o, this._styles[o])), super.play())
                }
                destroy() {
                    !this._startingStyles || (Object.keys(this._startingStyles).forEach(o => {
                        const a = this._startingStyles[o];
                        a ? this.element.style.setProperty(o, a) : this.element.style.removeProperty(o)
                    }), this._startingStyles = null, super.destroy())
                }
            }
            class Nr {
                constructor() {
                    this._count = 0
                }
                validateStyleProperty(o) {
                    return Kr(o)
                }
                matchesElement(o, a) {
                    return Zi(o, a)
                }
                containsElement(o, a) {
                    return Qi(o, a)
                }
                query(o, a, f) {
                    return Gs(o, a, f)
                }
                computeStyle(o, a, f) {
                    return window.getComputedStyle(o)[a]
                }
                buildKeyframeElement(o, a, f) {
                    f = f.map(F => Yr(F));
                    let C = `@keyframes ${a} {\n`,
                        w = "";
                    f.forEach(F => {
                        w = " ";
                        const G = parseFloat(F.offset);
                        C += `${w}${100*G}% {\n`, w += " ", Object.keys(F).forEach(ie => {
                            const ve = F[ie];
                            switch (ie) {
                                case "offset":
                                    return;
                                case "easing":
                                    return void(ve && (C += `${w}animation-timing-function: ${ve};\n`));
                                default:
                                    return void(C += `${w}${ie}: ${ve};\n`)
                            }
                        }), C += `${w}}\n`
                    }), C += "}\n";
                    const R = document.createElement("style");
                    return R.textContent = C, R
                }
                animate(o, a, f, C, w, R = [], F) {
                    const G = R.filter(Et => Et instanceof Ct),
                        ie = {};
                    Ti(f, C) && G.forEach(Et => {
                        let ln = Et.currentSnapshot;
                        Object.keys(ln).forEach(Qt => ie[Qt] = ln[Qt])
                    });
                    const ve = function(p) {
                        let o = {};
                        return p && (Array.isArray(p) ? p : [p]).forEach(f => {
                            Object.keys(f).forEach(C => {
                                "offset" == C || "easing" == C || (o[C] = f[C])
                            })
                        }), o
                    }(a = Xi(o, a, ie));
                    if (0 == f) return new Ye(o, ve);
                    const Fe = "gen_css_kf_" + this._count++,
                        et = this.buildKeyframeElement(o, Fe, a);
                    (function(p) {
                        var o;
                        const a = null === (o = p.getRootNode) || void 0 === o ? void 0 : o.call(p);
                        return "undefined" != typeof ShadowRoot && a instanceof ShadowRoot ? a : document.head
                    })(o).appendChild(et);
                    const qe = mo(o, a),
                        ut = new Ct(o, a, Fe, f, C, w, ve, qe);
                    return ut.onDestroy(() => {
                        var p;
                        (p = et).parentNode.removeChild(p)
                    }), ut
                }
            }
            class Jo {
                constructor(o, a, f, C) {
                    this.element = o, this.keyframes = a, this.options = f, this._specialStyles = C, this._onDoneFns = [], this._onStartFns = [], this._onDestroyFns = [], this._initialized = !1, this._finished = !1, this._started = !1, this._destroyed = !1, this.time = 0, this.parentPlayer = null, this.currentSnapshot = {}, this._duration = f.duration, this._delay = f.delay || 0, this.time = this._duration + this._delay
                }
                _onFinish() {
                    this._finished || (this._finished = !0, this._onDoneFns.forEach(o => o()), this._onDoneFns = [])
                }
                init() {
                    this._buildPlayer(), this._preparePlayerBeforeStart()
                }
                _buildPlayer() {
                    if (this._initialized) return;
                    this._initialized = !0;
                    const o = this.keyframes;
                    this.domPlayer = this._triggerWebAnimation(this.element, o, this.options), this._finalKeyframe = o.length ? o[o.length - 1] : {}, this.domPlayer.addEventListener("finish", () => this._onFinish())
                }
                _preparePlayerBeforeStart() {
                    this._delay ? this._resetDomPlayerState() : this.domPlayer.pause()
                }
                _triggerWebAnimation(o, a, f) {
                    return o.animate(a, f)
                }
                onStart(o) {
                    this._onStartFns.push(o)
                }
                onDone(o) {
                    this._onDoneFns.push(o)
                }
                onDestroy(o) {
                    this._onDestroyFns.push(o)
                }
                play() {
                    this._buildPlayer(), this.hasStarted() || (this._onStartFns.forEach(o => o()), this._onStartFns = [], this._started = !0, this._specialStyles && this._specialStyles.start()), this.domPlayer.play()
                }
                pause() {
                    this.init(), this.domPlayer.pause()
                }
                finish() {
                    this.init(), this._specialStyles && this._specialStyles.finish(), this._onFinish(), this.domPlayer.finish()
                }
                reset() {
                    this._resetDomPlayerState(), this._destroyed = !1, this._finished = !1, this._started = !1
                }
                _resetDomPlayerState() {
                    this.domPlayer && this.domPlayer.cancel()
                }
                restart() {
                    this.reset(), this.play()
                }
                hasStarted() {
                    return this._started
                }
                destroy() {
                    this._destroyed || (this._destroyed = !0, this._resetDomPlayerState(), this._onFinish(), this._specialStyles && this._specialStyles.destroy(), this._onDestroyFns.forEach(o => o()), this._onDestroyFns = [])
                }
                setPosition(o) {
                    void 0 === this.domPlayer && this.init(), this.domPlayer.currentTime = o * this.time
                }
                getPosition() {
                    return this.domPlayer.currentTime / this.time
                }
                get totalTime() {
                    return this._delay + this._duration
                }
                beforeDestroy() {
                    const o = {};
                    this.hasStarted() && Object.keys(this._finalKeyframe).forEach(a => {
                        "offset" != a && (o[a] = this._finished ? this._finalKeyframe[a] : _s(this.element, a))
                    }), this.currentSnapshot = o
                }
                triggerCallback(o) {
                    const a = "start" == o ? this._onStartFns : this._onDoneFns;
                    a.forEach(f => f()), a.length = 0
                }
            }
            class Uf {
                constructor() {
                    this._isNativeImpl = /\{\s*\[native\s+code\]\s*\}/.test(cc().toString()), this._cssKeyframesDriver = new Nr
                }
                validateStyleProperty(o) {
                    return Kr(o)
                }
                matchesElement(o, a) {
                    return Zi(o, a)
                }
                containsElement(o, a) {
                    return Qi(o, a)
                }
                query(o, a, f) {
                    return Gs(o, a, f)
                }
                computeStyle(o, a, f) {
                    return window.getComputedStyle(o)[a]
                }
                overrideWebAnimationsSupport(o) {
                    this._isNativeImpl = o
                }
                animate(o, a, f, C, w, R = [], F) {
                    if (!F && !this._isNativeImpl) return this._cssKeyframesDriver.animate(o, a, f, C, w, R);
                    const ve = {
                        duration: f,
                        delay: C,
                        fill: 0 == C ? "both" : "forwards"
                    };
                    w && (ve.easing = w);
                    const Fe = {},
                        et = R.filter(qe => qe instanceof Jo);
                    Ti(f, C) && et.forEach(qe => {
                        let ut = qe.currentSnapshot;
                        Object.keys(ut).forEach(Et => Fe[Et] = ut[Et])
                    });
                    const Dt = mo(o, a = Xi(o, a = a.map(qe => jt(qe, !1)), Fe));
                    return new Jo(o, a, ve, Dt)
                }
            }

            function cc() {
                return Oo() && Element.prototype.animate || {}
            }
            let $f = (() => {
                class p extends tt {
                    constructor(a, f) {
                        super(), this._nextAnimationId = 0, this._renderer = a.createRenderer(f.body, {
                            id: "0",
                            encapsulation: m.ifc.None,
                            styles: [],
                            data: {
                                animation: []
                            }
                        })
                    }
                    build(a) {
                        const f = this._nextAnimationId.toString();
                        this._nextAnimationId++;
                        const C = Array.isArray(a) ? ar(a) : a;
                        return pn(this._renderer, null, f, "register", [C]), new Xo(f, this._renderer)
                    }
                }
                return p.\u0275fac = function(a) {
                    return new(a || p)(m.LFG(m.FYo), m.LFG(A.K0))
                }, p.\u0275prov = m.Yz7({
                    token: p,
                    factory: p.\u0275fac
                }), p
            })();
            class Xo extends class {} {
                constructor(o, a) {
                    super(), this._id = o, this._renderer = a
                }
                create(o, a) {
                    return new zf(this._id, o, a || {}, this._renderer)
                }
            }
            class zf {
                constructor(o, a, f, C) {
                    this.id = o, this.element = a, this._renderer = C, this.parentPlayer = null, this._started = !1, this.totalTime = 0, this._command("create", f)
                }
                _listen(o, a) {
                    return this._renderer.listen(this.element, `@@${this.id}:${o}`, a)
                }
                _command(o, ...a) {
                    return pn(this._renderer, this.element, this.id, o, a)
                }
                onDone(o) {
                    this._listen("done", o)
                }
                onStart(o) {
                    this._listen("start", o)
                }
                onDestroy(o) {
                    this._listen("destroy", o)
                }
                init() {
                    this._command("init")
                }
                hasStarted() {
                    return this._started
                }
                play() {
                    this._command("play"), this._started = !0
                }
                pause() {
                    this._command("pause")
                }
                restart() {
                    this._command("restart")
                }
                finish() {
                    this._command("finish")
                }
                destroy() {
                    this._command("destroy")
                }
                reset() {
                    this._command("reset"), this._started = !1
                }
                setPosition(o) {
                    this._command("setPosition", o)
                }
                getPosition() {
                    var o, a;
                    return null !== (a = null === (o = this._renderer.engine.players[+this.id]) || void 0 === o ? void 0 : o.getPosition()) && void 0 !== a ? a : 0
                }
            }

            function pn(p, o, a, f, C) {
                return p.setProperty(o, `@@${a}:${f}`, C)
            }
            const ea = "@.disabled";
            let Gf = (() => {
                class p {
                    constructor(a, f, C) {
                        this.delegate = a, this.engine = f, this._zone = C, this._currentId = 0, this._microtaskId = 1, this._animationCallbacksBuffer = [], this._rendererCache = new Map, this._cdRecurDepth = 0, this.promise = Promise.resolve(0), f.onRemovalComplete = (w, R) => {
                            R && R.parentNode(w) && R.removeChild(w.parentNode, w)
                        }
                    }
                    createRenderer(a, f) {
                        const w = this.delegate.createRenderer(a, f);
                        if (!(a && f && f.data && f.data.animation)) {
                            let ve = this._rendererCache.get(w);
                            return ve || (ve = new du("", w, this.engine), this._rendererCache.set(w, ve)), ve
                        }
                        const R = f.id,
                            F = f.id + "-" + this._currentId;
                        this._currentId++, this.engine.register(F, a);
                        const G = ve => {
                            Array.isArray(ve) ? ve.forEach(G) : this.engine.registerTrigger(R, F, a, ve.name, ve)
                        };
                        return f.data.animation.forEach(G), new br(this, F, w, this.engine)
                    }
                    begin() {
                        this._cdRecurDepth++, this.delegate.begin && this.delegate.begin()
                    }
                    _scheduleCountTask() {
                        this.promise.then(() => {
                            this._microtaskId++
                        })
                    }
                    scheduleListenerCallback(a, f, C) {
                        a >= 0 && a < this._microtaskId ? this._zone.run(() => f(C)) : (0 == this._animationCallbacksBuffer.length && Promise.resolve(null).then(() => {
                            this._zone.run(() => {
                                this._animationCallbacksBuffer.forEach(w => {
                                    const [R, F] = w;
                                    R(F)
                                }), this._animationCallbacksBuffer = []
                            })
                        }), this._animationCallbacksBuffer.push([f, C]))
                    }
                    end() {
                        this._cdRecurDepth--, 0 == this._cdRecurDepth && this._zone.runOutsideAngular(() => {
                            this._scheduleCountTask(), this.engine.flush(this._microtaskId)
                        }), this.delegate.end && this.delegate.end()
                    }
                    whenRenderingDone() {
                        return this.engine.whenRenderingDone()
                    }
                }
                return p.\u0275fac = function(a) {
                    return new(a || p)(m.LFG(m.FYo), m.LFG(Oi), m.LFG(m.R0b))
                }, p.\u0275prov = m.Yz7({
                    token: p,
                    factory: p.\u0275fac
                }), p
            })();
            class du {
                constructor(o, a, f) {
                    this.namespaceId = o, this.delegate = a, this.engine = f, this.destroyNode = this.delegate.destroyNode ? C => a.destroyNode(C) : null
                }
                get data() {
                    return this.delegate.data
                }
                destroy() {
                    this.engine.destroy(this.namespaceId, this.delegate), this.delegate.destroy()
                }
                createElement(o, a) {
                    return this.delegate.createElement(o, a)
                }
                createComment(o) {
                    return this.delegate.createComment(o)
                }
                createText(o) {
                    return this.delegate.createText(o)
                }
                appendChild(o, a) {
                    this.delegate.appendChild(o, a), this.engine.onInsert(this.namespaceId, a, o, !1)
                }
                insertBefore(o, a, f, C = !0) {
                    this.delegate.insertBefore(o, a, f), this.engine.onInsert(this.namespaceId, a, o, C)
                }
                removeChild(o, a, f) {
                    this.engine.onRemove(this.namespaceId, a, this.delegate, f)
                }
                selectRootElement(o, a) {
                    return this.delegate.selectRootElement(o, a)
                }
                parentNode(o) {
                    return this.delegate.parentNode(o)
                }
                nextSibling(o) {
                    return this.delegate.nextSibling(o)
                }
                setAttribute(o, a, f, C) {
                    this.delegate.setAttribute(o, a, f, C)
                }
                removeAttribute(o, a, f) {
                    this.delegate.removeAttribute(o, a, f)
                }
                addClass(o, a) {
                    this.delegate.addClass(o, a)
                }
                removeClass(o, a) {
                    this.delegate.removeClass(o, a)
                }
                setStyle(o, a, f, C) {
                    this.delegate.setStyle(o, a, f, C)
                }
                removeStyle(o, a, f) {
                    this.delegate.removeStyle(o, a, f)
                }
                setProperty(o, a, f) {
                    "@" == a.charAt(0) && a == ea ? this.disableAnimations(o, !!f) : this.delegate.setProperty(o, a, f)
                }
                setValue(o, a) {
                    this.delegate.setValue(o, a)
                }
                listen(o, a, f) {
                    return this.delegate.listen(o, a, f)
                }
                disableAnimations(o, a) {
                    this.engine.disableAnimations(o, a)
                }
            }
            class br extends du {
                constructor(o, a, f, C) {
                    super(a, f, C), this.factory = o, this.namespaceId = a
                }
                setProperty(o, a, f) {
                    "@" == a.charAt(0) ? "." == a.charAt(1) && a == ea ? this.disableAnimations(o, f = void 0 === f || !!f) : this.engine.process(this.namespaceId, o, a.substr(1), f) : this.delegate.setProperty(o, a, f)
                }
                listen(o, a, f) {
                    if ("@" == a.charAt(0)) {
                        const C = function(p) {
                            switch (p) {
                                case "body":
                                    return document.body;
                                case "document":
                                    return document;
                                case "window":
                                    return window;
                                default:
                                    return p
                            }
                        }(o);
                        let w = a.substr(1),
                            R = "";
                        return "@" != w.charAt(0) && ([w, R] = function(p) {
                            const o = p.indexOf(".");
                            return [p.substring(0, o), p.substr(o + 1)]
                        }(w)), this.engine.listen(this.namespaceId, C, w, R, F => {
                            this.factory.scheduleListenerCallback(F._data || -1, f, F)
                        })
                    }
                    return this.delegate.listen(o, a, f)
                }
            }
            let xi = (() => {
                class p extends Oi {
                    constructor(a, f, C) {
                        super(a.body, f, C)
                    }
                    ngOnDestroy() {
                        this.flush()
                    }
                }
                return p.\u0275fac = function(a) {
                    return new(a || p)(m.LFG(A.K0), m.LFG(Cr), m.LFG(An))
                }, p.\u0275prov = m.Yz7({
                    token: p,
                    factory: p.\u0275fac
                }), p
            })();
            const hu = new m.OlP("AnimationModuleType"),
                fc = [{
                    provide: tt,
                    useClass: $f
                }, {
                    provide: An,
                    useFactory: function() {
                        return new zt
                    }
                }, {
                    provide: Oi,
                    useClass: xi
                }, {
                    provide: m.FYo,
                    useFactory: function(p, o, a) {
                        return new Gf(p, o, a)
                    },
                    deps: [Ht, Oi, m.R0b]
                }],
                hc = [{
                    provide: Cr,
                    useFactory: function() {
                        return "function" == typeof cc() ? new Uf : new Nr
                    }
                }, {
                    provide: hu,
                    useValue: "BrowserAnimations"
                }, ...fc],
                vl = [{
                    provide: Cr,
                    useClass: Ji
                }, {
                    provide: hu,
                    useValue: "NoopAnimations"
                }, ...fc];
            let dr = (() => {
                    class p {
                        static withConfig(a) {
                            return {
                                ngModule: p,
                                providers: a.disableAnimations ? vl : hc
                            }
                        }
                    }
                    return p.\u0275fac = function(a) {
                        return new(a || p)
                    }, p.\u0275mod = m.oAB({
                        type: p
                    }), p.\u0275inj = m.cJS({
                        providers: hc,
                        imports: [cs]
                    }), p
                })(),
                Eo = (() => {
                    class p {}
                    return p.\u0275fac = function(a) {
                        return new(a || p)
                    }, p.\u0275mod = m.oAB({
                        type: p,
                        bootstrap: [gs]
                    }), p.\u0275inj = m.cJS({
                        providers: [],
                        imports: [
                            [cs, Wn, dr, Po]
                        ]
                    }), p
                })();
            m.B6R(Hr, [Io, A.mk, Ft.yS, Ft.rH, Ft.Od], [St.X$]), (0, m.G48)(), Mr().bootstrapModule(Eo).catch(p => console.error(p))
        }
    },
    We => {
        We(We.s = 7345)
    }
]);
