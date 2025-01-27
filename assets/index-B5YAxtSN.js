(function () {
  const v = document.createElement("link").relList;
  if (v && v.supports && v.supports("modulepreload")) return;
  for (const _ of document.querySelectorAll('link[rel="modulepreload"]')) S(_);
  new MutationObserver((_) => {
    for (const E of _)
      if (E.type === "childList")
        for (const M of E.addedNodes)
          M.tagName === "LINK" && M.rel === "modulepreload" && S(M);
  }).observe(document, { childList: !0, subtree: !0 });
  function c(_) {
    const E = {};
    return (
      _.integrity && (E.integrity = _.integrity),
      _.referrerPolicy && (E.referrerPolicy = _.referrerPolicy),
      _.crossOrigin === "use-credentials"
        ? (E.credentials = "include")
        : _.crossOrigin === "anonymous"
        ? (E.credentials = "omit")
        : (E.credentials = "same-origin"),
      E
    );
  }
  function S(_) {
    if (_.ep) return;
    _.ep = !0;
    const E = c(_);
    fetch(_.href, E);
  }
})();
var Mi = { exports: {} },
  Cr = {},
  Oi = { exports: {} },
  $ = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Fa;
function Zf() {
  if (Fa) return $;
  Fa = 1;
  var d = Symbol.for("react.element"),
    v = Symbol.for("react.portal"),
    c = Symbol.for("react.fragment"),
    S = Symbol.for("react.strict_mode"),
    _ = Symbol.for("react.profiler"),
    E = Symbol.for("react.provider"),
    M = Symbol.for("react.context"),
    P = Symbol.for("react.forward_ref"),
    U = Symbol.for("react.suspense"),
    J = Symbol.for("react.memo"),
    Z = Symbol.for("react.lazy"),
    K = Symbol.iterator;
  function Q(f) {
    return f === null || typeof f != "object"
      ? null
      : ((f = (K && f[K]) || f["@@iterator"]),
        typeof f == "function" ? f : null);
  }
  var ge = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    pe = Object.assign,
    V = {};
  function F(f, y, W) {
    (this.props = f),
      (this.context = y),
      (this.refs = V),
      (this.updater = W || ge);
  }
  (F.prototype.isReactComponent = {}),
    (F.prototype.setState = function (f, y) {
      if (typeof f != "object" && typeof f != "function" && f != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, f, y, "setState");
    }),
    (F.prototype.forceUpdate = function (f) {
      this.updater.enqueueForceUpdate(this, f, "forceUpdate");
    });
  function re() {}
  re.prototype = F.prototype;
  function me(f, y, W) {
    (this.props = f),
      (this.context = y),
      (this.refs = V),
      (this.updater = W || ge);
  }
  var Re = (me.prototype = new re());
  (Re.constructor = me), pe(Re, F.prototype), (Re.isPureReactComponent = !0);
  var ce = Array.isArray,
    Me = Object.prototype.hasOwnProperty,
    _e = { current: null },
    Te = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Ve(f, y, W) {
    var H,
      q = {},
      b = null,
      le = null;
    if (y != null)
      for (H in (y.ref !== void 0 && (le = y.ref),
      y.key !== void 0 && (b = "" + y.key),
      y))
        Me.call(y, H) && !Te.hasOwnProperty(H) && (q[H] = y[H]);
    var te = arguments.length - 2;
    if (te === 1) q.children = W;
    else if (1 < te) {
      for (var fe = Array(te), Ze = 0; Ze < te; Ze++)
        fe[Ze] = arguments[Ze + 2];
      q.children = fe;
    }
    if (f && f.defaultProps)
      for (H in ((te = f.defaultProps), te)) q[H] === void 0 && (q[H] = te[H]);
    return {
      $$typeof: d,
      type: f,
      key: b,
      ref: le,
      props: q,
      _owner: _e.current,
    };
  }
  function nt(f, y) {
    return {
      $$typeof: d,
      type: f.type,
      key: y,
      ref: f.ref,
      props: f.props,
      _owner: f._owner,
    };
  }
  function Xe(f) {
    return typeof f == "object" && f !== null && f.$$typeof === d;
  }
  function at(f) {
    var y = { "=": "=0", ":": "=2" };
    return (
      "$" +
      f.replace(/[=:]/g, function (W) {
        return y[W];
      })
    );
  }
  var Y = /\/+/g;
  function Oe(f, y) {
    return typeof f == "object" && f !== null && f.key != null
      ? at("" + f.key)
      : y.toString(36);
  }
  function Ie(f, y, W, H, q) {
    var b = typeof f;
    (b === "undefined" || b === "boolean") && (f = null);
    var le = !1;
    if (f === null) le = !0;
    else
      switch (b) {
        case "string":
        case "number":
          le = !0;
          break;
        case "object":
          switch (f.$$typeof) {
            case d:
            case v:
              le = !0;
          }
      }
    if (le)
      return (
        (le = f),
        (q = q(le)),
        (f = H === "" ? "." + Oe(le, 0) : H),
        ce(q)
          ? ((W = ""),
            f != null && (W = f.replace(Y, "$&/") + "/"),
            Ie(q, y, W, "", function (Ze) {
              return Ze;
            }))
          : q != null &&
            (Xe(q) &&
              (q = nt(
                q,
                W +
                  (!q.key || (le && le.key === q.key)
                    ? ""
                    : ("" + q.key).replace(Y, "$&/") + "/") +
                  f
              )),
            y.push(q)),
        1
      );
    if (((le = 0), (H = H === "" ? "." : H + ":"), ce(f)))
      for (var te = 0; te < f.length; te++) {
        b = f[te];
        var fe = H + Oe(b, te);
        le += Ie(b, y, W, fe, q);
      }
    else if (((fe = Q(f)), typeof fe == "function"))
      for (f = fe.call(f), te = 0; !(b = f.next()).done; )
        (b = b.value), (fe = H + Oe(b, te++)), (le += Ie(b, y, W, fe, q));
    else if (b === "object")
      throw (
        ((y = String(f)),
        Error(
          "Objects are not valid as a React child (found: " +
            (y === "[object Object]"
              ? "object with keys {" + Object.keys(f).join(", ") + "}"
              : y) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    return le;
  }
  function Je(f, y, W) {
    if (f == null) return f;
    var H = [],
      q = 0;
    return (
      Ie(f, H, "", "", function (b) {
        return y.call(W, b, q++);
      }),
      H
    );
  }
  function Se(f) {
    if (f._status === -1) {
      var y = f._result;
      (y = y()),
        y.then(
          function (W) {
            (f._status === 0 || f._status === -1) &&
              ((f._status = 1), (f._result = W));
          },
          function (W) {
            (f._status === 0 || f._status === -1) &&
              ((f._status = 2), (f._result = W));
          }
        ),
        f._status === -1 && ((f._status = 0), (f._result = y));
    }
    if (f._status === 1) return f._result.default;
    throw f._result;
  }
  var ie = { current: null },
    C = { transition: null },
    O = {
      ReactCurrentDispatcher: ie,
      ReactCurrentBatchConfig: C,
      ReactCurrentOwner: _e,
    };
  function z() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    ($.Children = {
      map: Je,
      forEach: function (f, y, W) {
        Je(
          f,
          function () {
            y.apply(this, arguments);
          },
          W
        );
      },
      count: function (f) {
        var y = 0;
        return (
          Je(f, function () {
            y++;
          }),
          y
        );
      },
      toArray: function (f) {
        return (
          Je(f, function (y) {
            return y;
          }) || []
        );
      },
      only: function (f) {
        if (!Xe(f))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return f;
      },
    }),
    ($.Component = F),
    ($.Fragment = c),
    ($.Profiler = _),
    ($.PureComponent = me),
    ($.StrictMode = S),
    ($.Suspense = U),
    ($.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = O),
    ($.act = z),
    ($.cloneElement = function (f, y, W) {
      if (f == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            f +
            "."
        );
      var H = pe({}, f.props),
        q = f.key,
        b = f.ref,
        le = f._owner;
      if (y != null) {
        if (
          (y.ref !== void 0 && ((b = y.ref), (le = _e.current)),
          y.key !== void 0 && (q = "" + y.key),
          f.type && f.type.defaultProps)
        )
          var te = f.type.defaultProps;
        for (fe in y)
          Me.call(y, fe) &&
            !Te.hasOwnProperty(fe) &&
            (H[fe] = y[fe] === void 0 && te !== void 0 ? te[fe] : y[fe]);
      }
      var fe = arguments.length - 2;
      if (fe === 1) H.children = W;
      else if (1 < fe) {
        te = Array(fe);
        for (var Ze = 0; Ze < fe; Ze++) te[Ze] = arguments[Ze + 2];
        H.children = te;
      }
      return {
        $$typeof: d,
        type: f.type,
        key: q,
        ref: b,
        props: H,
        _owner: le,
      };
    }),
    ($.createContext = function (f) {
      return (
        (f = {
          $$typeof: M,
          _currentValue: f,
          _currentValue2: f,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (f.Provider = { $$typeof: E, _context: f }),
        (f.Consumer = f)
      );
    }),
    ($.createElement = Ve),
    ($.createFactory = function (f) {
      var y = Ve.bind(null, f);
      return (y.type = f), y;
    }),
    ($.createRef = function () {
      return { current: null };
    }),
    ($.forwardRef = function (f) {
      return { $$typeof: P, render: f };
    }),
    ($.isValidElement = Xe),
    ($.lazy = function (f) {
      return { $$typeof: Z, _payload: { _status: -1, _result: f }, _init: Se };
    }),
    ($.memo = function (f, y) {
      return { $$typeof: J, type: f, compare: y === void 0 ? null : y };
    }),
    ($.startTransition = function (f) {
      var y = C.transition;
      C.transition = {};
      try {
        f();
      } finally {
        C.transition = y;
      }
    }),
    ($.unstable_act = z),
    ($.useCallback = function (f, y) {
      return ie.current.useCallback(f, y);
    }),
    ($.useContext = function (f) {
      return ie.current.useContext(f);
    }),
    ($.useDebugValue = function () {}),
    ($.useDeferredValue = function (f) {
      return ie.current.useDeferredValue(f);
    }),
    ($.useEffect = function (f, y) {
      return ie.current.useEffect(f, y);
    }),
    ($.useId = function () {
      return ie.current.useId();
    }),
    ($.useImperativeHandle = function (f, y, W) {
      return ie.current.useImperativeHandle(f, y, W);
    }),
    ($.useInsertionEffect = function (f, y) {
      return ie.current.useInsertionEffect(f, y);
    }),
    ($.useLayoutEffect = function (f, y) {
      return ie.current.useLayoutEffect(f, y);
    }),
    ($.useMemo = function (f, y) {
      return ie.current.useMemo(f, y);
    }),
    ($.useReducer = function (f, y, W) {
      return ie.current.useReducer(f, y, W);
    }),
    ($.useRef = function (f) {
      return ie.current.useRef(f);
    }),
    ($.useState = function (f) {
      return ie.current.useState(f);
    }),
    ($.useSyncExternalStore = function (f, y, W) {
      return ie.current.useSyncExternalStore(f, y, W);
    }),
    ($.useTransition = function () {
      return ie.current.useTransition();
    }),
    ($.version = "18.3.1"),
    $
  );
}
var Ua;
function Bi() {
  return Ua || ((Ua = 1), (Oi.exports = Zf())), Oi.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Aa;
function qf() {
  if (Aa) return Cr;
  Aa = 1;
  var d = Bi(),
    v = Symbol.for("react.element"),
    c = Symbol.for("react.fragment"),
    S = Object.prototype.hasOwnProperty,
    _ = d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    E = { key: !0, ref: !0, __self: !0, __source: !0 };
  function M(P, U, J) {
    var Z,
      K = {},
      Q = null,
      ge = null;
    J !== void 0 && (Q = "" + J),
      U.key !== void 0 && (Q = "" + U.key),
      U.ref !== void 0 && (ge = U.ref);
    for (Z in U) S.call(U, Z) && !E.hasOwnProperty(Z) && (K[Z] = U[Z]);
    if (P && P.defaultProps)
      for (Z in ((U = P.defaultProps), U)) K[Z] === void 0 && (K[Z] = U[Z]);
    return {
      $$typeof: v,
      type: P,
      key: Q,
      ref: ge,
      props: K,
      _owner: _.current,
    };
  }
  return (Cr.Fragment = c), (Cr.jsx = M), (Cr.jsxs = M), Cr;
}
var Va;
function bf() {
  return Va || ((Va = 1), (Mi.exports = qf())), Mi.exports;
}
var G = bf(),
  zr = Bi(),
  Ul = {},
  Ii = { exports: {} },
  Ye = {},
  Di = { exports: {} },
  Fi = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ba;
function ed() {
  return (
    Ba ||
      ((Ba = 1),
      (function (d) {
        function v(C, O) {
          var z = C.length;
          C.push(O);
          e: for (; 0 < z; ) {
            var f = (z - 1) >>> 1,
              y = C[f];
            if (0 < _(y, O)) (C[f] = O), (C[z] = y), (z = f);
            else break e;
          }
        }
        function c(C) {
          return C.length === 0 ? null : C[0];
        }
        function S(C) {
          if (C.length === 0) return null;
          var O = C[0],
            z = C.pop();
          if (z !== O) {
            C[0] = z;
            e: for (var f = 0, y = C.length, W = y >>> 1; f < W; ) {
              var H = 2 * (f + 1) - 1,
                q = C[H],
                b = H + 1,
                le = C[b];
              if (0 > _(q, z))
                b < y && 0 > _(le, q)
                  ? ((C[f] = le), (C[b] = z), (f = b))
                  : ((C[f] = q), (C[H] = z), (f = H));
              else if (b < y && 0 > _(le, z)) (C[f] = le), (C[b] = z), (f = b);
              else break e;
            }
          }
          return O;
        }
        function _(C, O) {
          var z = C.sortIndex - O.sortIndex;
          return z !== 0 ? z : C.id - O.id;
        }
        if (
          typeof performance == "object" &&
          typeof performance.now == "function"
        ) {
          var E = performance;
          d.unstable_now = function () {
            return E.now();
          };
        } else {
          var M = Date,
            P = M.now();
          d.unstable_now = function () {
            return M.now() - P;
          };
        }
        var U = [],
          J = [],
          Z = 1,
          K = null,
          Q = 3,
          ge = !1,
          pe = !1,
          V = !1,
          F = typeof setTimeout == "function" ? setTimeout : null,
          re = typeof clearTimeout == "function" ? clearTimeout : null,
          me = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function Re(C) {
          for (var O = c(J); O !== null; ) {
            if (O.callback === null) S(J);
            else if (O.startTime <= C)
              S(J), (O.sortIndex = O.expirationTime), v(U, O);
            else break;
            O = c(J);
          }
        }
        function ce(C) {
          if (((V = !1), Re(C), !pe))
            if (c(U) !== null) (pe = !0), Se(Me);
            else {
              var O = c(J);
              O !== null && ie(ce, O.startTime - C);
            }
        }
        function Me(C, O) {
          (pe = !1), V && ((V = !1), re(Ve), (Ve = -1)), (ge = !0);
          var z = Q;
          try {
            for (
              Re(O), K = c(U);
              K !== null && (!(K.expirationTime > O) || (C && !at()));

            ) {
              var f = K.callback;
              if (typeof f == "function") {
                (K.callback = null), (Q = K.priorityLevel);
                var y = f(K.expirationTime <= O);
                (O = d.unstable_now()),
                  typeof y == "function"
                    ? (K.callback = y)
                    : K === c(U) && S(U),
                  Re(O);
              } else S(U);
              K = c(U);
            }
            if (K !== null) var W = !0;
            else {
              var H = c(J);
              H !== null && ie(ce, H.startTime - O), (W = !1);
            }
            return W;
          } finally {
            (K = null), (Q = z), (ge = !1);
          }
        }
        var _e = !1,
          Te = null,
          Ve = -1,
          nt = 5,
          Xe = -1;
        function at() {
          return !(d.unstable_now() - Xe < nt);
        }
        function Y() {
          if (Te !== null) {
            var C = d.unstable_now();
            Xe = C;
            var O = !0;
            try {
              O = Te(!0, C);
            } finally {
              O ? Oe() : ((_e = !1), (Te = null));
            }
          } else _e = !1;
        }
        var Oe;
        if (typeof me == "function")
          Oe = function () {
            me(Y);
          };
        else if (typeof MessageChannel < "u") {
          var Ie = new MessageChannel(),
            Je = Ie.port2;
          (Ie.port1.onmessage = Y),
            (Oe = function () {
              Je.postMessage(null);
            });
        } else
          Oe = function () {
            F(Y, 0);
          };
        function Se(C) {
          (Te = C), _e || ((_e = !0), Oe());
        }
        function ie(C, O) {
          Ve = F(function () {
            C(d.unstable_now());
          }, O);
        }
        (d.unstable_IdlePriority = 5),
          (d.unstable_ImmediatePriority = 1),
          (d.unstable_LowPriority = 4),
          (d.unstable_NormalPriority = 3),
          (d.unstable_Profiling = null),
          (d.unstable_UserBlockingPriority = 2),
          (d.unstable_cancelCallback = function (C) {
            C.callback = null;
          }),
          (d.unstable_continueExecution = function () {
            pe || ge || ((pe = !0), Se(Me));
          }),
          (d.unstable_forceFrameRate = function (C) {
            0 > C || 125 < C
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (nt = 0 < C ? Math.floor(1e3 / C) : 5);
          }),
          (d.unstable_getCurrentPriorityLevel = function () {
            return Q;
          }),
          (d.unstable_getFirstCallbackNode = function () {
            return c(U);
          }),
          (d.unstable_next = function (C) {
            switch (Q) {
              case 1:
              case 2:
              case 3:
                var O = 3;
                break;
              default:
                O = Q;
            }
            var z = Q;
            Q = O;
            try {
              return C();
            } finally {
              Q = z;
            }
          }),
          (d.unstable_pauseExecution = function () {}),
          (d.unstable_requestPaint = function () {}),
          (d.unstable_runWithPriority = function (C, O) {
            switch (C) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                C = 3;
            }
            var z = Q;
            Q = C;
            try {
              return O();
            } finally {
              Q = z;
            }
          }),
          (d.unstable_scheduleCallback = function (C, O, z) {
            var f = d.unstable_now();
            switch (
              (typeof z == "object" && z !== null
                ? ((z = z.delay),
                  (z = typeof z == "number" && 0 < z ? f + z : f))
                : (z = f),
              C)
            ) {
              case 1:
                var y = -1;
                break;
              case 2:
                y = 250;
                break;
              case 5:
                y = 1073741823;
                break;
              case 4:
                y = 1e4;
                break;
              default:
                y = 5e3;
            }
            return (
              (y = z + y),
              (C = {
                id: Z++,
                callback: O,
                priorityLevel: C,
                startTime: z,
                expirationTime: y,
                sortIndex: -1,
              }),
              z > f
                ? ((C.sortIndex = z),
                  v(J, C),
                  c(U) === null &&
                    C === c(J) &&
                    (V ? (re(Ve), (Ve = -1)) : (V = !0), ie(ce, z - f)))
                : ((C.sortIndex = y), v(U, C), pe || ge || ((pe = !0), Se(Me))),
              C
            );
          }),
          (d.unstable_shouldYield = at),
          (d.unstable_wrapCallback = function (C) {
            var O = Q;
            return function () {
              var z = Q;
              Q = O;
              try {
                return C.apply(this, arguments);
              } finally {
                Q = z;
              }
            };
          });
      })(Fi)),
    Fi
  );
}
var Wa;
function td() {
  return Wa || ((Wa = 1), (Di.exports = ed())), Di.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $a;
function nd() {
  if ($a) return Ye;
  $a = 1;
  var d = Bi(),
    v = td();
  function c(e) {
    for (
      var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
        n = 1;
      n < arguments.length;
      n++
    )
      t += "&args[]=" + encodeURIComponent(arguments[n]);
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  var S = new Set(),
    _ = {};
  function E(e, t) {
    M(e, t), M(e + "Capture", t);
  }
  function M(e, t) {
    for (_[e] = t, e = 0; e < t.length; e++) S.add(t[e]);
  }
  var P = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    U = Object.prototype.hasOwnProperty,
    J =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    Z = {},
    K = {};
  function Q(e) {
    return U.call(K, e)
      ? !0
      : U.call(Z, e)
      ? !1
      : J.test(e)
      ? (K[e] = !0)
      : ((Z[e] = !0), !1);
  }
  function ge(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return r
          ? !1
          : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function pe(e, t, n, r) {
    if (t === null || typeof t > "u" || ge(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null)
      switch (n.type) {
        case 3:
          return !t;
        case 4:
          return t === !1;
        case 5:
          return isNaN(t);
        case 6:
          return isNaN(t) || 1 > t;
      }
    return !1;
  }
  function V(e, t, n, r, l, o, i) {
    (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = r),
      (this.attributeNamespace = l),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = o),
      (this.removeEmptyString = i);
  }
  var F = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      F[e] = new V(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var t = e[0];
      F[t] = new V(t, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (
      e
    ) {
      F[e] = new V(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (e) {
      F[e] = new V(e, 2, !1, e, null, !1, !1);
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        F[e] = new V(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      F[e] = new V(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      F[e] = new V(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      F[e] = new V(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      F[e] = new V(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
  var re = /[\-:]([a-z])/g;
  function me(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(re, me);
      F[t] = new V(t, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(re, me);
        F[t] = new V(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(re, me);
      F[t] = new V(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    }),
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      F[e] = new V(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (F.xlinkHref = new V(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1
    )),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      F[e] = new V(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
  function Re(e, t, n, r) {
    var l = F.hasOwnProperty(t) ? F[t] : null;
    (l !== null
      ? l.type !== 0
      : r ||
        !(2 < t.length) ||
        (t[0] !== "o" && t[0] !== "O") ||
        (t[1] !== "n" && t[1] !== "N")) &&
      (pe(t, n, l, r) && (n = null),
      r || l === null
        ? Q(t) &&
          (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
        : l.mustUseProperty
        ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
        : ((t = l.attributeName),
          (r = l.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((l = l.type),
              (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var ce = d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    Me = Symbol.for("react.element"),
    _e = Symbol.for("react.portal"),
    Te = Symbol.for("react.fragment"),
    Ve = Symbol.for("react.strict_mode"),
    nt = Symbol.for("react.profiler"),
    Xe = Symbol.for("react.provider"),
    at = Symbol.for("react.context"),
    Y = Symbol.for("react.forward_ref"),
    Oe = Symbol.for("react.suspense"),
    Ie = Symbol.for("react.suspense_list"),
    Je = Symbol.for("react.memo"),
    Se = Symbol.for("react.lazy"),
    ie = Symbol.for("react.offscreen"),
    C = Symbol.iterator;
  function O(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (C && e[C]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var z = Object.assign,
    f;
  function y(e) {
    if (f === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        f = (t && t[1]) || "";
      }
    return (
      `
` +
      f +
      e
    );
  }
  var W = !1;
  function H(e, t) {
    if (!e || W) return "";
    W = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t)
        if (
          ((t = function () {
            throw Error();
          }),
          Object.defineProperty(t.prototype, "props", {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == "object" && Reflect.construct)
        ) {
          try {
            Reflect.construct(t, []);
          } catch (h) {
            var r = h;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (h) {
            r = h;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (h) {
          r = h;
        }
        e();
      }
    } catch (h) {
      if (h && r && typeof h.stack == "string") {
        for (
          var l = h.stack.split(`
`),
            o = r.stack.split(`
`),
            i = l.length - 1,
            u = o.length - 1;
          1 <= i && 0 <= u && l[i] !== o[u];

        )
          u--;
        for (; 1 <= i && 0 <= u; i--, u--)
          if (l[i] !== o[u]) {
            if (i !== 1 || u !== 1)
              do
                if ((i--, u--, 0 > u || l[i] !== o[u])) {
                  var s =
                    `
` + l[i].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      s.includes("<anonymous>") &&
                      (s = s.replace("<anonymous>", e.displayName)),
                    s
                  );
                }
              while (1 <= i && 0 <= u);
            break;
          }
      }
    } finally {
      (W = !1), (Error.prepareStackTrace = n);
    }
    return (e = e ? e.displayName || e.name : "") ? y(e) : "";
  }
  function q(e) {
    switch (e.tag) {
      case 5:
        return y(e.type);
      case 16:
        return y("Lazy");
      case 13:
        return y("Suspense");
      case 19:
        return y("SuspenseList");
      case 0:
      case 2:
      case 15:
        return (e = H(e.type, !1)), e;
      case 11:
        return (e = H(e.type.render, !1)), e;
      case 1:
        return (e = H(e.type, !0)), e;
      default:
        return "";
    }
  }
  function b(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case Te:
        return "Fragment";
      case _e:
        return "Portal";
      case nt:
        return "Profiler";
      case Ve:
        return "StrictMode";
      case Oe:
        return "Suspense";
      case Ie:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case at:
          return (e.displayName || "Context") + ".Consumer";
        case Xe:
          return (e._context.displayName || "Context") + ".Provider";
        case Y:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case Je:
          return (
            (t = e.displayName || null), t !== null ? t : b(e.type) || "Memo"
          );
        case Se:
          (t = e._payload), (e = e._init);
          try {
            return b(e(t));
          } catch {}
      }
    return null;
  }
  function le(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (t.displayName || "Context") + ".Consumer";
      case 10:
        return (t._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return (
          (e = t.render),
          (e = e.displayName || e.name || ""),
          t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
        );
      case 7:
        return "Fragment";
      case 5:
        return t;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return b(t);
      case 8:
        return t === Ve ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == "function") return t.displayName || t.name || null;
        if (typeof t == "string") return t;
    }
    return null;
  }
  function te(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function fe(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function Ze(e) {
    var t = fe(e) ? "checked" : "value",
      n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      r = "" + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof n < "u" &&
      typeof n.get == "function" &&
      typeof n.set == "function"
    ) {
      var l = n.get,
        o = n.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return l.call(this);
          },
          set: function (i) {
            (r = "" + i), o.call(this, i);
          },
        }),
        Object.defineProperty(e, t, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return r;
          },
          setValue: function (i) {
            r = "" + i;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[t];
          },
        }
      );
    }
  }
  function Pr(e) {
    e._valueTracker || (e._valueTracker = Ze(e));
  }
  function $i(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      r = "";
    return (
      e && (r = fe(e) ? (e.checked ? "true" : "false") : e.value),
      (e = r),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  function Rr(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Al(e, t) {
    var n = t.checked;
    return z({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked,
    });
  }
  function Hi(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
      r = t.checked != null ? t.checked : t.defaultChecked;
    (n = te(t.value != null ? t.value : n)),
      (e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled:
          t.type === "checkbox" || t.type === "radio"
            ? t.checked != null
            : t.value != null,
      });
  }
  function Qi(e, t) {
    (t = t.checked), t != null && Re(e, "checked", t, !1);
  }
  function Vl(e, t) {
    Qi(e, t);
    var n = te(t.value),
      r = t.type;
    if (n != null)
      r === "number"
        ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
        : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value")
      ? Bl(e, t.type, n)
      : t.hasOwnProperty("defaultValue") && Bl(e, t.type, te(t.defaultValue)),
      t.checked == null &&
        t.defaultChecked != null &&
        (e.defaultChecked = !!t.defaultChecked);
  }
  function Gi(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (
        !(
          (r !== "submit" && r !== "reset") ||
          (t.value !== void 0 && t.value !== null)
        )
      )
        return;
      (t = "" + e._wrapperState.initialValue),
        n || t === e.value || (e.value = t),
        (e.defaultValue = t);
    }
    (n = e.name),
      n !== "" && (e.name = ""),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      n !== "" && (e.name = n);
  }
  function Bl(e, t, n) {
    (t !== "number" || Rr(e.ownerDocument) !== e) &&
      (n == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var An = Array.isArray;
  function dn(e, t, n, r) {
    if (((e = e.options), t)) {
      t = {};
      for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
      for (n = 0; n < e.length; n++)
        (l = t.hasOwnProperty("$" + e[n].value)),
          e[n].selected !== l && (e[n].selected = l),
          l && r && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + te(n), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === n) {
          (e[l].selected = !0), r && (e[l].defaultSelected = !0);
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Wl(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(c(91));
    return z({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function Ki(e, t) {
    var n = t.value;
    if (n == null) {
      if (((n = t.children), (t = t.defaultValue), n != null)) {
        if (t != null) throw Error(c(92));
        if (An(n)) {
          if (1 < n.length) throw Error(c(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), (n = t);
    }
    e._wrapperState = { initialValue: te(n) };
  }
  function Yi(e, t) {
    var n = te(t.value),
      r = te(t.defaultValue);
    n != null &&
      ((n = "" + n),
      n !== e.value && (e.value = n),
      t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
      r != null && (e.defaultValue = "" + r);
  }
  function Xi(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
      t !== "" &&
      t !== null &&
      (e.value = t);
  }
  function Ji(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function $l(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? Ji(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
  }
  var Tr,
    Zi = (function (e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (t, n, r, l) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, n, r, l);
            });
          }
        : e;
    })(function (e, t) {
      if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
        e.innerHTML = t;
      else {
        for (
          Tr = Tr || document.createElement("div"),
            Tr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = Tr.firstChild;
          e.firstChild;

        )
          e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    });
  function Vn(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Bn = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    },
    ec = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Bn).forEach(function (e) {
    ec.forEach(function (t) {
      (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Bn[t] = Bn[e]);
    });
  });
  function qi(e, t, n) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : n || typeof t != "number" || t === 0 || (Bn.hasOwnProperty(e) && Bn[e])
      ? ("" + t).trim()
      : t + "px";
  }
  function bi(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = n.indexOf("--") === 0,
          l = qi(n, t[n], r);
        n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
      }
  }
  var tc = z(
    { menuitem: !0 },
    {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    }
  );
  function Hl(e, t) {
    if (t) {
      if (tc[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(c(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(c(60));
        if (
          typeof t.dangerouslySetInnerHTML != "object" ||
          !("__html" in t.dangerouslySetInnerHTML)
        )
          throw Error(c(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(c(62));
    }
  }
  function Ql(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Gl = null;
  function Kl(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Yl = null,
    pn = null,
    mn = null;
  function eu(e) {
    if ((e = ar(e))) {
      if (typeof Yl != "function") throw Error(c(280));
      var t = e.stateNode;
      t && ((t = br(t)), Yl(e.stateNode, e.type, t));
    }
  }
  function tu(e) {
    pn ? (mn ? mn.push(e) : (mn = [e])) : (pn = e);
  }
  function nu() {
    if (pn) {
      var e = pn,
        t = mn;
      if (((mn = pn = null), eu(e), t)) for (e = 0; e < t.length; e++) eu(t[e]);
    }
  }
  function ru(e, t) {
    return e(t);
  }
  function lu() {}
  var Xl = !1;
  function ou(e, t, n) {
    if (Xl) return e(t, n);
    Xl = !0;
    try {
      return ru(e, t, n);
    } finally {
      (Xl = !1), (pn !== null || mn !== null) && (lu(), nu());
    }
  }
  function Wn(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = br(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (r = !r.disabled) ||
          ((e = e.type),
          (r = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !r);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(c(231, t, typeof n));
    return n;
  }
  var Jl = !1;
  if (P)
    try {
      var $n = {};
      Object.defineProperty($n, "passive", {
        get: function () {
          Jl = !0;
        },
      }),
        window.addEventListener("test", $n, $n),
        window.removeEventListener("test", $n, $n);
    } catch {
      Jl = !1;
    }
  function nc(e, t, n, r, l, o, i, u, s) {
    var h = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, h);
    } catch (w) {
      this.onError(w);
    }
  }
  var Hn = !1,
    Lr = null,
    jr = !1,
    Zl = null,
    rc = {
      onError: function (e) {
        (Hn = !0), (Lr = e);
      },
    };
  function lc(e, t, n, r, l, o, i, u, s) {
    (Hn = !1), (Lr = null), nc.apply(rc, arguments);
  }
  function oc(e, t, n, r, l, o, i, u, s) {
    if ((lc.apply(this, arguments), Hn)) {
      if (Hn) {
        var h = Lr;
        (Hn = !1), (Lr = null);
      } else throw Error(c(198));
      jr || ((jr = !0), (Zl = h));
    }
  }
  function qt(e) {
    var t = e,
      n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function iu(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function uu(e) {
    if (qt(e) !== e) throw Error(c(188));
  }
  function ic(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = qt(e)), t === null)) throw Error(c(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var l = n.return;
      if (l === null) break;
      var o = l.alternate;
      if (o === null) {
        if (((r = l.return), r !== null)) {
          n = r;
          continue;
        }
        break;
      }
      if (l.child === o.child) {
        for (o = l.child; o; ) {
          if (o === n) return uu(l), e;
          if (o === r) return uu(l), t;
          o = o.sibling;
        }
        throw Error(c(188));
      }
      if (n.return !== r.return) (n = l), (r = o);
      else {
        for (var i = !1, u = l.child; u; ) {
          if (u === n) {
            (i = !0), (n = l), (r = o);
            break;
          }
          if (u === r) {
            (i = !0), (r = l), (n = o);
            break;
          }
          u = u.sibling;
        }
        if (!i) {
          for (u = o.child; u; ) {
            if (u === n) {
              (i = !0), (n = o), (r = l);
              break;
            }
            if (u === r) {
              (i = !0), (r = o), (n = l);
              break;
            }
            u = u.sibling;
          }
          if (!i) throw Error(c(189));
        }
      }
      if (n.alternate !== r) throw Error(c(190));
    }
    if (n.tag !== 3) throw Error(c(188));
    return n.stateNode.current === n ? e : t;
  }
  function su(e) {
    return (e = ic(e)), e !== null ? au(e) : null;
  }
  function au(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = au(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var cu = v.unstable_scheduleCallback,
    fu = v.unstable_cancelCallback,
    uc = v.unstable_shouldYield,
    sc = v.unstable_requestPaint,
    we = v.unstable_now,
    ac = v.unstable_getCurrentPriorityLevel,
    ql = v.unstable_ImmediatePriority,
    du = v.unstable_UserBlockingPriority,
    Mr = v.unstable_NormalPriority,
    cc = v.unstable_LowPriority,
    pu = v.unstable_IdlePriority,
    Or = null,
    gt = null;
  function fc(e) {
    if (gt && typeof gt.onCommitFiberRoot == "function")
      try {
        gt.onCommitFiberRoot(Or, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var ct = Math.clz32 ? Math.clz32 : mc,
    dc = Math.log,
    pc = Math.LN2;
  function mc(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((dc(e) / pc) | 0)) | 0;
  }
  var Ir = 64,
    Dr = 4194304;
  function Qn(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function Fr(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
      l = e.suspendedLanes,
      o = e.pingedLanes,
      i = n & 268435455;
    if (i !== 0) {
      var u = i & ~l;
      u !== 0 ? (r = Qn(u)) : ((o &= i), o !== 0 && (r = Qn(o)));
    } else (i = n & ~l), i !== 0 ? (r = Qn(i)) : o !== 0 && (r = Qn(o));
    if (r === 0) return 0;
    if (
      t !== 0 &&
      t !== r &&
      !(t & l) &&
      ((l = r & -r), (o = t & -t), l >= o || (l === 16 && (o & 4194240) !== 0))
    )
      return t;
    if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= r; 0 < t; )
        (n = 31 - ct(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
    return r;
  }
  function hc(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function vc(e, t) {
    for (
      var n = e.suspendedLanes,
        r = e.pingedLanes,
        l = e.expirationTimes,
        o = e.pendingLanes;
      0 < o;

    ) {
      var i = 31 - ct(o),
        u = 1 << i,
        s = l[i];
      s === -1
        ? (!(u & n) || u & r) && (l[i] = hc(u, t))
        : s <= t && (e.expiredLanes |= u),
        (o &= ~u);
    }
  }
  function bl(e) {
    return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
  }
  function mu() {
    var e = Ir;
    return (Ir <<= 1), !(Ir & 4194240) && (Ir = 64), e;
  }
  function eo(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Gn(e, t, n) {
    (e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - ct(t)),
      (e[t] = n);
  }
  function gc(e, t) {
    var n = e.pendingLanes & ~t;
    (e.pendingLanes = t),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= t),
      (e.mutableReadLanes &= t),
      (e.entangledLanes &= t),
      (t = e.entanglements);
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var l = 31 - ct(n),
        o = 1 << l;
      (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o);
    }
  }
  function to(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var r = 31 - ct(n),
        l = 1 << r;
      (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
    }
  }
  var ne = 0;
  function hu(e) {
    return (
      (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
    );
  }
  var vu,
    no,
    gu,
    yu,
    wu,
    ro = !1,
    Ur = [],
    Lt = null,
    jt = null,
    Mt = null,
    Kn = new Map(),
    Yn = new Map(),
    Ot = [],
    yc =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " "
      );
  function xu(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Lt = null;
        break;
      case "dragenter":
      case "dragleave":
        jt = null;
        break;
      case "mouseover":
      case "mouseout":
        Mt = null;
        break;
      case "pointerover":
      case "pointerout":
        Kn.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Yn.delete(t.pointerId);
    }
  }
  function Xn(e, t, n, r, l, o) {
    return e === null || e.nativeEvent !== o
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: r,
          nativeEvent: o,
          targetContainers: [l],
        }),
        t !== null && ((t = ar(t)), t !== null && no(t)),
        e)
      : ((e.eventSystemFlags |= r),
        (t = e.targetContainers),
        l !== null && t.indexOf(l) === -1 && t.push(l),
        e);
  }
  function wc(e, t, n, r, l) {
    switch (t) {
      case "focusin":
        return (Lt = Xn(Lt, e, t, n, r, l)), !0;
      case "dragenter":
        return (jt = Xn(jt, e, t, n, r, l)), !0;
      case "mouseover":
        return (Mt = Xn(Mt, e, t, n, r, l)), !0;
      case "pointerover":
        var o = l.pointerId;
        return Kn.set(o, Xn(Kn.get(o) || null, e, t, n, r, l)), !0;
      case "gotpointercapture":
        return (
          (o = l.pointerId), Yn.set(o, Xn(Yn.get(o) || null, e, t, n, r, l)), !0
        );
    }
    return !1;
  }
  function ku(e) {
    var t = bt(e.target);
    if (t !== null) {
      var n = qt(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = iu(n)), t !== null)) {
            (e.blockedOn = t),
              wu(e.priority, function () {
                gu(n);
              });
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Ar(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = oo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        (Gl = r), n.target.dispatchEvent(r), (Gl = null);
      } else return (t = ar(n)), t !== null && no(t), (e.blockedOn = n), !1;
      t.shift();
    }
    return !0;
  }
  function Su(e, t, n) {
    Ar(e) && n.delete(t);
  }
  function xc() {
    (ro = !1),
      Lt !== null && Ar(Lt) && (Lt = null),
      jt !== null && Ar(jt) && (jt = null),
      Mt !== null && Ar(Mt) && (Mt = null),
      Kn.forEach(Su),
      Yn.forEach(Su);
  }
  function Jn(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      ro ||
        ((ro = !0),
        v.unstable_scheduleCallback(v.unstable_NormalPriority, xc)));
  }
  function Zn(e) {
    function t(l) {
      return Jn(l, e);
    }
    if (0 < Ur.length) {
      Jn(Ur[0], e);
      for (var n = 1; n < Ur.length; n++) {
        var r = Ur[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (
      Lt !== null && Jn(Lt, e),
        jt !== null && Jn(jt, e),
        Mt !== null && Jn(Mt, e),
        Kn.forEach(t),
        Yn.forEach(t),
        n = 0;
      n < Ot.length;
      n++
    )
      (r = Ot[n]), r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Ot.length && ((n = Ot[0]), n.blockedOn === null); )
      ku(n), n.blockedOn === null && Ot.shift();
  }
  var hn = ce.ReactCurrentBatchConfig,
    Vr = !0;
  function kc(e, t, n, r) {
    var l = ne,
      o = hn.transition;
    hn.transition = null;
    try {
      (ne = 1), lo(e, t, n, r);
    } finally {
      (ne = l), (hn.transition = o);
    }
  }
  function Sc(e, t, n, r) {
    var l = ne,
      o = hn.transition;
    hn.transition = null;
    try {
      (ne = 4), lo(e, t, n, r);
    } finally {
      (ne = l), (hn.transition = o);
    }
  }
  function lo(e, t, n, r) {
    if (Vr) {
      var l = oo(e, t, n, r);
      if (l === null) Eo(e, t, r, Br, n), xu(e, r);
      else if (wc(l, e, t, n, r)) r.stopPropagation();
      else if ((xu(e, r), t & 4 && -1 < yc.indexOf(e))) {
        for (; l !== null; ) {
          var o = ar(l);
          if (
            (o !== null && vu(o),
            (o = oo(e, t, n, r)),
            o === null && Eo(e, t, r, Br, n),
            o === l)
          )
            break;
          l = o;
        }
        l !== null && r.stopPropagation();
      } else Eo(e, t, r, null, n);
    }
  }
  var Br = null;
  function oo(e, t, n, r) {
    if (((Br = null), (e = Kl(r)), (e = bt(e)), e !== null))
      if (((t = qt(e)), t === null)) e = null;
      else if (((n = t.tag), n === 13)) {
        if (((e = iu(t)), e !== null)) return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return (Br = e), null;
  }
  function Eu(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (ac()) {
          case ql:
            return 1;
          case du:
            return 4;
          case Mr:
          case cc:
            return 16;
          case pu:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var It = null,
    io = null,
    Wr = null;
  function Cu() {
    if (Wr) return Wr;
    var e,
      t = io,
      n = t.length,
      r,
      l = "value" in It ? It.value : It.textContent,
      o = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++);
    var i = n - e;
    for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
    return (Wr = l.slice(e, 1 < r ? 1 - r : void 0));
  }
  function $r(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Hr() {
    return !0;
  }
  function _u() {
    return !1;
  }
  function qe(e) {
    function t(n, r, l, o, i) {
      (this._reactName = n),
        (this._targetInst = l),
        (this.type = r),
        (this.nativeEvent = o),
        (this.target = i),
        (this.currentTarget = null);
      for (var u in e)
        e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(o) : o[u]));
      return (
        (this.isDefaultPrevented = (
          o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
        )
          ? Hr
          : _u),
        (this.isPropagationStopped = _u),
        this
      );
    }
    return (
      z(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = Hr));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = Hr));
        },
        persist: function () {},
        isPersistent: Hr,
      }),
      t
    );
  }
  var vn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    uo = qe(vn),
    qn = z({}, vn, { view: 0, detail: 0 }),
    Ec = qe(qn),
    so,
    ao,
    bn,
    Qr = z({}, qn, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: fo,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== bn &&
              (bn && e.type === "mousemove"
                ? ((so = e.screenX - bn.screenX), (ao = e.screenY - bn.screenY))
                : (ao = so = 0),
              (bn = e)),
            so);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : ao;
      },
    }),
    Nu = qe(Qr),
    Cc = z({}, Qr, { dataTransfer: 0 }),
    _c = qe(Cc),
    Nc = z({}, qn, { relatedTarget: 0 }),
    co = qe(Nc),
    zc = z({}, vn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Pc = qe(zc),
    Rc = z({}, vn, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    Tc = qe(Rc),
    Lc = z({}, vn, { data: 0 }),
    zu = qe(Lc),
    jc = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    Mc = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    Oc = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function Ic(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = Oc[e])
      ? !!t[e]
      : !1;
  }
  function fo() {
    return Ic;
  }
  var Dc = z({}, qn, {
      key: function (e) {
        if (e.key) {
          var t = jc[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = $r(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
          ? Mc[e.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: fo,
      charCode: function (e) {
        return e.type === "keypress" ? $r(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? $r(e)
          : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
      },
    }),
    Fc = qe(Dc),
    Uc = z({}, Qr, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Pu = qe(Uc),
    Ac = z({}, qn, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: fo,
    }),
    Vc = qe(Ac),
    Bc = z({}, vn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Wc = qe(Bc),
    $c = z({}, Qr, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
          ? -e.wheelDeltaX
          : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
          ? -e.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    Hc = qe($c),
    Qc = [9, 13, 27, 32],
    po = P && "CompositionEvent" in window,
    er = null;
  P && "documentMode" in document && (er = document.documentMode);
  var Gc = P && "TextEvent" in window && !er,
    Ru = P && (!po || (er && 8 < er && 11 >= er)),
    Tu = " ",
    Lu = !1;
  function ju(e, t) {
    switch (e) {
      case "keyup":
        return Qc.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Mu(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var gn = !1;
  function Kc(e, t) {
    switch (e) {
      case "compositionend":
        return Mu(t);
      case "keypress":
        return t.which !== 32 ? null : ((Lu = !0), Tu);
      case "textInput":
        return (e = t.data), e === Tu && Lu ? null : e;
      default:
        return null;
    }
  }
  function Yc(e, t) {
    if (gn)
      return e === "compositionend" || (!po && ju(e, t))
        ? ((e = Cu()), (Wr = io = It = null), (gn = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Ru && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Xc = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Ou(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Xc[e.type] : t === "textarea";
  }
  function Iu(e, t, n, r) {
    tu(r),
      (t = Jr(t, "onChange")),
      0 < t.length &&
        ((n = new uo("onChange", "change", null, n, r)),
        e.push({ event: n, listeners: t }));
  }
  var tr = null,
    nr = null;
  function Jc(e) {
    bu(e, 0);
  }
  function Gr(e) {
    var t = Sn(e);
    if ($i(t)) return e;
  }
  function Zc(e, t) {
    if (e === "change") return t;
  }
  var Du = !1;
  if (P) {
    var mo;
    if (P) {
      var ho = "oninput" in document;
      if (!ho) {
        var Fu = document.createElement("div");
        Fu.setAttribute("oninput", "return;"),
          (ho = typeof Fu.oninput == "function");
      }
      mo = ho;
    } else mo = !1;
    Du = mo && (!document.documentMode || 9 < document.documentMode);
  }
  function Uu() {
    tr && (tr.detachEvent("onpropertychange", Au), (nr = tr = null));
  }
  function Au(e) {
    if (e.propertyName === "value" && Gr(nr)) {
      var t = [];
      Iu(t, nr, e, Kl(e)), ou(Jc, t);
    }
  }
  function qc(e, t, n) {
    e === "focusin"
      ? (Uu(), (tr = t), (nr = n), tr.attachEvent("onpropertychange", Au))
      : e === "focusout" && Uu();
  }
  function bc(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Gr(nr);
  }
  function ef(e, t) {
    if (e === "click") return Gr(t);
  }
  function tf(e, t) {
    if (e === "input" || e === "change") return Gr(t);
  }
  function nf(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var ft = typeof Object.is == "function" ? Object.is : nf;
  function rr(e, t) {
    if (ft(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var n = Object.keys(e),
      r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var l = n[r];
      if (!U.call(t, l) || !ft(e[l], t[l])) return !1;
    }
    return !0;
  }
  function Vu(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Bu(e, t) {
    var n = Vu(e);
    e = 0;
    for (var r; n; ) {
      if (n.nodeType === 3) {
        if (((r = e + n.textContent.length), e <= t && r >= t))
          return { node: n, offset: t - e };
        e = r;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = Vu(n);
    }
  }
  function Wu(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
        ? Wu(e, t.parentNode)
        : "contains" in e
        ? e.contains(t)
        : e.compareDocumentPosition
        ? !!(e.compareDocumentPosition(t) & 16)
        : !1
      : !1;
  }
  function $u() {
    for (var e = window, t = Rr(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Rr(e.document);
    }
    return t;
  }
  function vo(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }
  function rf(e) {
    var t = $u(),
      n = e.focusedElem,
      r = e.selectionRange;
    if (
      t !== n &&
      n &&
      n.ownerDocument &&
      Wu(n.ownerDocument.documentElement, n)
    ) {
      if (r !== null && vo(n)) {
        if (
          ((t = r.start),
          (e = r.end),
          e === void 0 && (e = t),
          "selectionStart" in n)
        )
          (n.selectionStart = t),
            (n.selectionEnd = Math.min(e, n.value.length));
        else if (
          ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
          e.getSelection)
        ) {
          e = e.getSelection();
          var l = n.textContent.length,
            o = Math.min(r.start, l);
          (r = r.end === void 0 ? o : Math.min(r.end, l)),
            !e.extend && o > r && ((l = r), (r = o), (o = l)),
            (l = Bu(n, o));
          var i = Bu(n, r);
          l &&
            i &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== l.node ||
              e.anchorOffset !== l.offset ||
              e.focusNode !== i.node ||
              e.focusOffset !== i.offset) &&
            ((t = t.createRange()),
            t.setStart(l.node, l.offset),
            e.removeAllRanges(),
            o > r
              ? (e.addRange(t), e.extend(i.node, i.offset))
              : (t.setEnd(i.node, i.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; (e = e.parentNode); )
        e.nodeType === 1 &&
          t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
        (e = t[n]),
          (e.element.scrollLeft = e.left),
          (e.element.scrollTop = e.top);
    }
  }
  var lf = P && "documentMode" in document && 11 >= document.documentMode,
    yn = null,
    go = null,
    lr = null,
    yo = !1;
  function Hu(e, t, n) {
    var r =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    yo ||
      yn == null ||
      yn !== Rr(r) ||
      ((r = yn),
      "selectionStart" in r && vo(r)
        ? (r = { start: r.selectionStart, end: r.selectionEnd })
        : ((r = (
            (r.ownerDocument && r.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset,
          })),
      (lr && rr(lr, r)) ||
        ((lr = r),
        (r = Jr(go, "onSelect")),
        0 < r.length &&
          ((t = new uo("onSelect", "select", null, t, n)),
          e.push({ event: t, listeners: r }),
          (t.target = yn))));
  }
  function Kr(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n["Webkit" + e] = "webkit" + t),
      (n["Moz" + e] = "moz" + t),
      n
    );
  }
  var wn = {
      animationend: Kr("Animation", "AnimationEnd"),
      animationiteration: Kr("Animation", "AnimationIteration"),
      animationstart: Kr("Animation", "AnimationStart"),
      transitionend: Kr("Transition", "TransitionEnd"),
    },
    wo = {},
    Qu = {};
  P &&
    ((Qu = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete wn.animationend.animation,
      delete wn.animationiteration.animation,
      delete wn.animationstart.animation),
    "TransitionEvent" in window || delete wn.transitionend.transition);
  function Yr(e) {
    if (wo[e]) return wo[e];
    if (!wn[e]) return e;
    var t = wn[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in Qu) return (wo[e] = t[n]);
    return e;
  }
  var Gu = Yr("animationend"),
    Ku = Yr("animationiteration"),
    Yu = Yr("animationstart"),
    Xu = Yr("transitionend"),
    Ju = new Map(),
    Zu =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  function Dt(e, t) {
    Ju.set(e, t), E(t, [e]);
  }
  for (var xo = 0; xo < Zu.length; xo++) {
    var ko = Zu[xo],
      of = ko.toLowerCase(),
      uf = ko[0].toUpperCase() + ko.slice(1);
    Dt(of, "on" + uf);
  }
  Dt(Gu, "onAnimationEnd"),
    Dt(Ku, "onAnimationIteration"),
    Dt(Yu, "onAnimationStart"),
    Dt("dblclick", "onDoubleClick"),
    Dt("focusin", "onFocus"),
    Dt("focusout", "onBlur"),
    Dt(Xu, "onTransitionEnd"),
    M("onMouseEnter", ["mouseout", "mouseover"]),
    M("onMouseLeave", ["mouseout", "mouseover"]),
    M("onPointerEnter", ["pointerout", "pointerover"]),
    M("onPointerLeave", ["pointerout", "pointerover"]),
    E(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    E(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    E("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    E(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    E(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    E(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var or =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    sf = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(or)
    );
  function qu(e, t, n) {
    var r = e.type || "unknown-event";
    (e.currentTarget = n), oc(r, t, void 0, e), (e.currentTarget = null);
  }
  function bu(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n],
        l = r.event;
      r = r.listeners;
      e: {
        var o = void 0;
        if (t)
          for (var i = r.length - 1; 0 <= i; i--) {
            var u = r[i],
              s = u.instance,
              h = u.currentTarget;
            if (((u = u.listener), s !== o && l.isPropagationStopped()))
              break e;
            qu(l, u, h), (o = s);
          }
        else
          for (i = 0; i < r.length; i++) {
            if (
              ((u = r[i]),
              (s = u.instance),
              (h = u.currentTarget),
              (u = u.listener),
              s !== o && l.isPropagationStopped())
            )
              break e;
            qu(l, u, h), (o = s);
          }
      }
    }
    if (jr) throw ((e = Zl), (jr = !1), (Zl = null), e);
  }
  function ue(e, t) {
    var n = t[Ro];
    n === void 0 && (n = t[Ro] = new Set());
    var r = e + "__bubble";
    n.has(r) || (es(t, e, 2, !1), n.add(r));
  }
  function So(e, t, n) {
    var r = 0;
    t && (r |= 4), es(n, e, r, t);
  }
  var Xr = "_reactListening" + Math.random().toString(36).slice(2);
  function ir(e) {
    if (!e[Xr]) {
      (e[Xr] = !0),
        S.forEach(function (n) {
          n !== "selectionchange" && (sf.has(n) || So(n, !1, e), So(n, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Xr] || ((t[Xr] = !0), So("selectionchange", !1, t));
    }
  }
  function es(e, t, n, r) {
    switch (Eu(t)) {
      case 1:
        var l = kc;
        break;
      case 4:
        l = Sc;
        break;
      default:
        l = lo;
    }
    (n = l.bind(null, t, n, e)),
      (l = void 0),
      !Jl ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (l = !0),
      r
        ? l !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: l })
          : e.addEventListener(t, n, !0)
        : l !== void 0
        ? e.addEventListener(t, n, { passive: l })
        : e.addEventListener(t, n, !1);
  }
  function Eo(e, t, n, r, l) {
    var o = r;
    if (!(t & 1) && !(t & 2) && r !== null)
      e: for (;;) {
        if (r === null) return;
        var i = r.tag;
        if (i === 3 || i === 4) {
          var u = r.stateNode.containerInfo;
          if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
          if (i === 4)
            for (i = r.return; i !== null; ) {
              var s = i.tag;
              if (
                (s === 3 || s === 4) &&
                ((s = i.stateNode.containerInfo),
                s === l || (s.nodeType === 8 && s.parentNode === l))
              )
                return;
              i = i.return;
            }
          for (; u !== null; ) {
            if (((i = bt(u)), i === null)) return;
            if (((s = i.tag), s === 5 || s === 6)) {
              r = o = i;
              continue e;
            }
            u = u.parentNode;
          }
        }
        r = r.return;
      }
    ou(function () {
      var h = o,
        w = Kl(n),
        x = [];
      e: {
        var g = Ju.get(e);
        if (g !== void 0) {
          var N = uo,
            T = e;
          switch (e) {
            case "keypress":
              if ($r(n) === 0) break e;
            case "keydown":
            case "keyup":
              N = Fc;
              break;
            case "focusin":
              (T = "focus"), (N = co);
              break;
            case "focusout":
              (T = "blur"), (N = co);
              break;
            case "beforeblur":
            case "afterblur":
              N = co;
              break;
            case "click":
              if (n.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              N = Nu;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              N = _c;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              N = Vc;
              break;
            case Gu:
            case Ku:
            case Yu:
              N = Pc;
              break;
            case Xu:
              N = Wc;
              break;
            case "scroll":
              N = Ec;
              break;
            case "wheel":
              N = Hc;
              break;
            case "copy":
            case "cut":
            case "paste":
              N = Tc;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              N = Pu;
          }
          var L = (t & 4) !== 0,
            xe = !L && e === "scroll",
            p = L ? (g !== null ? g + "Capture" : null) : g;
          L = [];
          for (var a = h, m; a !== null; ) {
            m = a;
            var k = m.stateNode;
            if (
              (m.tag === 5 &&
                k !== null &&
                ((m = k),
                p !== null &&
                  ((k = Wn(a, p)), k != null && L.push(ur(a, k, m)))),
              xe)
            )
              break;
            a = a.return;
          }
          0 < L.length &&
            ((g = new N(g, T, null, n, w)), x.push({ event: g, listeners: L }));
        }
      }
      if (!(t & 7)) {
        e: {
          if (
            ((g = e === "mouseover" || e === "pointerover"),
            (N = e === "mouseout" || e === "pointerout"),
            g &&
              n !== Gl &&
              (T = n.relatedTarget || n.fromElement) &&
              (bt(T) || T[St]))
          )
            break e;
          if (
            (N || g) &&
            ((g =
              w.window === w
                ? w
                : (g = w.ownerDocument)
                ? g.defaultView || g.parentWindow
                : window),
            N
              ? ((T = n.relatedTarget || n.toElement),
                (N = h),
                (T = T ? bt(T) : null),
                T !== null &&
                  ((xe = qt(T)), T !== xe || (T.tag !== 5 && T.tag !== 6)) &&
                  (T = null))
              : ((N = null), (T = h)),
            N !== T)
          ) {
            if (
              ((L = Nu),
              (k = "onMouseLeave"),
              (p = "onMouseEnter"),
              (a = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((L = Pu),
                (k = "onPointerLeave"),
                (p = "onPointerEnter"),
                (a = "pointer")),
              (xe = N == null ? g : Sn(N)),
              (m = T == null ? g : Sn(T)),
              (g = new L(k, a + "leave", N, n, w)),
              (g.target = xe),
              (g.relatedTarget = m),
              (k = null),
              bt(w) === h &&
                ((L = new L(p, a + "enter", T, n, w)),
                (L.target = m),
                (L.relatedTarget = xe),
                (k = L)),
              (xe = k),
              N && T)
            )
              t: {
                for (L = N, p = T, a = 0, m = L; m; m = xn(m)) a++;
                for (m = 0, k = p; k; k = xn(k)) m++;
                for (; 0 < a - m; ) (L = xn(L)), a--;
                for (; 0 < m - a; ) (p = xn(p)), m--;
                for (; a--; ) {
                  if (L === p || (p !== null && L === p.alternate)) break t;
                  (L = xn(L)), (p = xn(p));
                }
                L = null;
              }
            else L = null;
            N !== null && ts(x, g, N, L, !1),
              T !== null && xe !== null && ts(x, xe, T, L, !0);
          }
        }
        e: {
          if (
            ((g = h ? Sn(h) : window),
            (N = g.nodeName && g.nodeName.toLowerCase()),
            N === "select" || (N === "input" && g.type === "file"))
          )
            var j = Zc;
          else if (Ou(g))
            if (Du) j = tf;
            else {
              j = bc;
              var I = qc;
            }
          else
            (N = g.nodeName) &&
              N.toLowerCase() === "input" &&
              (g.type === "checkbox" || g.type === "radio") &&
              (j = ef);
          if (j && (j = j(e, h))) {
            Iu(x, j, n, w);
            break e;
          }
          I && I(e, g, h),
            e === "focusout" &&
              (I = g._wrapperState) &&
              I.controlled &&
              g.type === "number" &&
              Bl(g, "number", g.value);
        }
        switch (((I = h ? Sn(h) : window), e)) {
          case "focusin":
            (Ou(I) || I.contentEditable === "true") &&
              ((yn = I), (go = h), (lr = null));
            break;
          case "focusout":
            lr = go = yn = null;
            break;
          case "mousedown":
            yo = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (yo = !1), Hu(x, n, w);
            break;
          case "selectionchange":
            if (lf) break;
          case "keydown":
          case "keyup":
            Hu(x, n, w);
        }
        var D;
        if (po)
          e: {
            switch (e) {
              case "compositionstart":
                var A = "onCompositionStart";
                break e;
              case "compositionend":
                A = "onCompositionEnd";
                break e;
              case "compositionupdate":
                A = "onCompositionUpdate";
                break e;
            }
            A = void 0;
          }
        else
          gn
            ? ju(e, n) && (A = "onCompositionEnd")
            : e === "keydown" &&
              n.keyCode === 229 &&
              (A = "onCompositionStart");
        A &&
          (Ru &&
            n.locale !== "ko" &&
            (gn || A !== "onCompositionStart"
              ? A === "onCompositionEnd" && gn && (D = Cu())
              : ((It = w),
                (io = "value" in It ? It.value : It.textContent),
                (gn = !0))),
          (I = Jr(h, A)),
          0 < I.length &&
            ((A = new zu(A, e, null, n, w)),
            x.push({ event: A, listeners: I }),
            D ? (A.data = D) : ((D = Mu(n)), D !== null && (A.data = D)))),
          (D = Gc ? Kc(e, n) : Yc(e, n)) &&
            ((h = Jr(h, "onBeforeInput")),
            0 < h.length &&
              ((w = new zu("onBeforeInput", "beforeinput", null, n, w)),
              x.push({ event: w, listeners: h }),
              (w.data = D)));
      }
      bu(x, t);
    });
  }
  function ur(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Jr(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var l = e,
        o = l.stateNode;
      l.tag === 5 &&
        o !== null &&
        ((l = o),
        (o = Wn(e, n)),
        o != null && r.unshift(ur(e, o, l)),
        (o = Wn(e, t)),
        o != null && r.push(ur(e, o, l))),
        (e = e.return);
    }
    return r;
  }
  function xn(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function ts(e, t, n, r, l) {
    for (var o = t._reactName, i = []; n !== null && n !== r; ) {
      var u = n,
        s = u.alternate,
        h = u.stateNode;
      if (s !== null && s === r) break;
      u.tag === 5 &&
        h !== null &&
        ((u = h),
        l
          ? ((s = Wn(n, o)), s != null && i.unshift(ur(n, s, u)))
          : l || ((s = Wn(n, o)), s != null && i.push(ur(n, s, u)))),
        (n = n.return);
    }
    i.length !== 0 && e.push({ event: t, listeners: i });
  }
  var af = /\r\n?/g,
    cf = /\u0000|\uFFFD/g;
  function ns(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        af,
        `
`
      )
      .replace(cf, "");
  }
  function Zr(e, t, n) {
    if (((t = ns(t)), ns(e) !== t && n)) throw Error(c(425));
  }
  function qr() {}
  var Co = null,
    _o = null;
  function No(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var zo = typeof setTimeout == "function" ? setTimeout : void 0,
    ff = typeof clearTimeout == "function" ? clearTimeout : void 0,
    rs = typeof Promise == "function" ? Promise : void 0,
    df =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof rs < "u"
        ? function (e) {
            return rs.resolve(null).then(e).catch(pf);
          }
        : zo;
  function pf(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Po(e, t) {
    var n = t,
      r = 0;
    do {
      var l = n.nextSibling;
      if ((e.removeChild(n), l && l.nodeType === 8))
        if (((n = l.data), n === "/$")) {
          if (r === 0) {
            e.removeChild(l), Zn(t);
            return;
          }
          r--;
        } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
      n = l;
    } while (n);
    Zn(t);
  }
  function Ft(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  function ls(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (t === 0) return e;
          t--;
        } else n === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var kn = Math.random().toString(36).slice(2),
    yt = "__reactFiber$" + kn,
    sr = "__reactProps$" + kn,
    St = "__reactContainer$" + kn,
    Ro = "__reactEvents$" + kn,
    mf = "__reactListeners$" + kn,
    hf = "__reactHandles$" + kn;
  function bt(e) {
    var t = e[yt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[St] || n[yt])) {
        if (
          ((n = t.alternate),
          t.child !== null || (n !== null && n.child !== null))
        )
          for (e = ls(e); e !== null; ) {
            if ((n = e[yt])) return n;
            e = ls(e);
          }
        return t;
      }
      (e = n), (n = e.parentNode);
    }
    return null;
  }
  function ar(e) {
    return (
      (e = e[yt] || e[St]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e
    );
  }
  function Sn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(c(33));
  }
  function br(e) {
    return e[sr] || null;
  }
  var To = [],
    En = -1;
  function Ut(e) {
    return { current: e };
  }
  function se(e) {
    0 > En || ((e.current = To[En]), (To[En] = null), En--);
  }
  function oe(e, t) {
    En++, (To[En] = e.current), (e.current = t);
  }
  var At = {},
    De = Ut(At),
    $e = Ut(!1),
    en = At;
  function Cn(e, t) {
    var n = e.type.contextTypes;
    if (!n) return At;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
      return r.__reactInternalMemoizedMaskedChildContext;
    var l = {},
      o;
    for (o in n) l[o] = t[o];
    return (
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = l)),
      l
    );
  }
  function He(e) {
    return (e = e.childContextTypes), e != null;
  }
  function el() {
    se($e), se(De);
  }
  function os(e, t, n) {
    if (De.current !== At) throw Error(c(168));
    oe(De, t), oe($e, n);
  }
  function is(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
      return n;
    r = r.getChildContext();
    for (var l in r) if (!(l in t)) throw Error(c(108, le(e) || "Unknown", l));
    return z({}, n, r);
  }
  function tl(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        At),
      (en = De.current),
      oe(De, e),
      oe($e, $e.current),
      !0
    );
  }
  function us(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(c(169));
    n
      ? ((e = is(e, t, en)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        se($e),
        se(De),
        oe(De, e))
      : se($e),
      oe($e, n);
  }
  var Et = null,
    nl = !1,
    Lo = !1;
  function ss(e) {
    Et === null ? (Et = [e]) : Et.push(e);
  }
  function vf(e) {
    (nl = !0), ss(e);
  }
  function Vt() {
    if (!Lo && Et !== null) {
      Lo = !0;
      var e = 0,
        t = ne;
      try {
        var n = Et;
        for (ne = 1; e < n.length; e++) {
          var r = n[e];
          do r = r(!0);
          while (r !== null);
        }
        (Et = null), (nl = !1);
      } catch (l) {
        throw (Et !== null && (Et = Et.slice(e + 1)), cu(ql, Vt), l);
      } finally {
        (ne = t), (Lo = !1);
      }
    }
    return null;
  }
  var _n = [],
    Nn = 0,
    rl = null,
    ll = 0,
    rt = [],
    lt = 0,
    tn = null,
    Ct = 1,
    _t = "";
  function nn(e, t) {
    (_n[Nn++] = ll), (_n[Nn++] = rl), (rl = e), (ll = t);
  }
  function as(e, t, n) {
    (rt[lt++] = Ct), (rt[lt++] = _t), (rt[lt++] = tn), (tn = e);
    var r = Ct;
    e = _t;
    var l = 32 - ct(r) - 1;
    (r &= ~(1 << l)), (n += 1);
    var o = 32 - ct(t) + l;
    if (30 < o) {
      var i = l - (l % 5);
      (o = (r & ((1 << i) - 1)).toString(32)),
        (r >>= i),
        (l -= i),
        (Ct = (1 << (32 - ct(t) + l)) | (n << l) | r),
        (_t = o + e);
    } else (Ct = (1 << o) | (n << l) | r), (_t = e);
  }
  function jo(e) {
    e.return !== null && (nn(e, 1), as(e, 1, 0));
  }
  function Mo(e) {
    for (; e === rl; )
      (rl = _n[--Nn]), (_n[Nn] = null), (ll = _n[--Nn]), (_n[Nn] = null);
    for (; e === tn; )
      (tn = rt[--lt]),
        (rt[lt] = null),
        (_t = rt[--lt]),
        (rt[lt] = null),
        (Ct = rt[--lt]),
        (rt[lt] = null);
  }
  var be = null,
    et = null,
    de = !1,
    dt = null;
  function cs(e, t) {
    var n = st(5, null, null, 0);
    (n.elementType = "DELETED"),
      (n.stateNode = t),
      (n.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
  }
  function fs(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return (
          (t =
            t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
              ? null
              : t),
          t !== null
            ? ((e.stateNode = t), (be = e), (et = Ft(t.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (be = e), (et = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((n = tn !== null ? { id: Ct, overflow: _t } : null),
              (e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824,
              }),
              (n = st(18, null, null, 0)),
              (n.stateNode = t),
              (n.return = e),
              (e.child = n),
              (be = e),
              (et = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function Oo(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Io(e) {
    if (de) {
      var t = et;
      if (t) {
        var n = t;
        if (!fs(e, t)) {
          if (Oo(e)) throw Error(c(418));
          t = Ft(n.nextSibling);
          var r = be;
          t && fs(e, t)
            ? cs(r, n)
            : ((e.flags = (e.flags & -4097) | 2), (de = !1), (be = e));
        }
      } else {
        if (Oo(e)) throw Error(c(418));
        (e.flags = (e.flags & -4097) | 2), (de = !1), (be = e);
      }
    }
  }
  function ds(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
      e = e.return;
    be = e;
  }
  function ol(e) {
    if (e !== be) return !1;
    if (!de) return ds(e), (de = !0), !1;
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type),
        (t = t !== "head" && t !== "body" && !No(e.type, e.memoizedProps))),
      t && (t = et))
    ) {
      if (Oo(e)) throw (ps(), Error(c(418)));
      for (; t; ) cs(e, t), (t = Ft(t.nextSibling));
    }
    if ((ds(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(c(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                et = Ft(e.nextSibling);
                break e;
              }
              t--;
            } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
          }
          e = e.nextSibling;
        }
        et = null;
      }
    } else et = be ? Ft(e.stateNode.nextSibling) : null;
    return !0;
  }
  function ps() {
    for (var e = et; e; ) e = Ft(e.nextSibling);
  }
  function zn() {
    (et = be = null), (de = !1);
  }
  function Do(e) {
    dt === null ? (dt = [e]) : dt.push(e);
  }
  var gf = ce.ReactCurrentBatchConfig;
  function cr(e, t, n) {
    if (
      ((e = n.ref),
      e !== null && typeof e != "function" && typeof e != "object")
    ) {
      if (n._owner) {
        if (((n = n._owner), n)) {
          if (n.tag !== 1) throw Error(c(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(c(147, e));
        var l = r,
          o = "" + e;
        return t !== null &&
          t.ref !== null &&
          typeof t.ref == "function" &&
          t.ref._stringRef === o
          ? t.ref
          : ((t = function (i) {
              var u = l.refs;
              i === null ? delete u[o] : (u[o] = i);
            }),
            (t._stringRef = o),
            t);
      }
      if (typeof e != "string") throw Error(c(284));
      if (!n._owner) throw Error(c(290, e));
    }
    return e;
  }
  function il(e, t) {
    throw (
      ((e = Object.prototype.toString.call(t)),
      Error(
        c(
          31,
          e === "[object Object]"
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e
        )
      ))
    );
  }
  function ms(e) {
    var t = e._init;
    return t(e._payload);
  }
  function hs(e) {
    function t(p, a) {
      if (e) {
        var m = p.deletions;
        m === null ? ((p.deletions = [a]), (p.flags |= 16)) : m.push(a);
      }
    }
    function n(p, a) {
      if (!e) return null;
      for (; a !== null; ) t(p, a), (a = a.sibling);
      return null;
    }
    function r(p, a) {
      for (p = new Map(); a !== null; )
        a.key !== null ? p.set(a.key, a) : p.set(a.index, a), (a = a.sibling);
      return p;
    }
    function l(p, a) {
      return (p = Yt(p, a)), (p.index = 0), (p.sibling = null), p;
    }
    function o(p, a, m) {
      return (
        (p.index = m),
        e
          ? ((m = p.alternate),
            m !== null
              ? ((m = m.index), m < a ? ((p.flags |= 2), a) : m)
              : ((p.flags |= 2), a))
          : ((p.flags |= 1048576), a)
      );
    }
    function i(p) {
      return e && p.alternate === null && (p.flags |= 2), p;
    }
    function u(p, a, m, k) {
      return a === null || a.tag !== 6
        ? ((a = zi(m, p.mode, k)), (a.return = p), a)
        : ((a = l(a, m)), (a.return = p), a);
    }
    function s(p, a, m, k) {
      var j = m.type;
      return j === Te
        ? w(p, a, m.props.children, k, m.key)
        : a !== null &&
          (a.elementType === j ||
            (typeof j == "object" &&
              j !== null &&
              j.$$typeof === Se &&
              ms(j) === a.type))
        ? ((k = l(a, m.props)), (k.ref = cr(p, a, m)), (k.return = p), k)
        : ((k = Tl(m.type, m.key, m.props, null, p.mode, k)),
          (k.ref = cr(p, a, m)),
          (k.return = p),
          k);
    }
    function h(p, a, m, k) {
      return a === null ||
        a.tag !== 4 ||
        a.stateNode.containerInfo !== m.containerInfo ||
        a.stateNode.implementation !== m.implementation
        ? ((a = Pi(m, p.mode, k)), (a.return = p), a)
        : ((a = l(a, m.children || [])), (a.return = p), a);
    }
    function w(p, a, m, k, j) {
      return a === null || a.tag !== 7
        ? ((a = fn(m, p.mode, k, j)), (a.return = p), a)
        : ((a = l(a, m)), (a.return = p), a);
    }
    function x(p, a, m) {
      if ((typeof a == "string" && a !== "") || typeof a == "number")
        return (a = zi("" + a, p.mode, m)), (a.return = p), a;
      if (typeof a == "object" && a !== null) {
        switch (a.$$typeof) {
          case Me:
            return (
              (m = Tl(a.type, a.key, a.props, null, p.mode, m)),
              (m.ref = cr(p, null, a)),
              (m.return = p),
              m
            );
          case _e:
            return (a = Pi(a, p.mode, m)), (a.return = p), a;
          case Se:
            var k = a._init;
            return x(p, k(a._payload), m);
        }
        if (An(a) || O(a))
          return (a = fn(a, p.mode, m, null)), (a.return = p), a;
        il(p, a);
      }
      return null;
    }
    function g(p, a, m, k) {
      var j = a !== null ? a.key : null;
      if ((typeof m == "string" && m !== "") || typeof m == "number")
        return j !== null ? null : u(p, a, "" + m, k);
      if (typeof m == "object" && m !== null) {
        switch (m.$$typeof) {
          case Me:
            return m.key === j ? s(p, a, m, k) : null;
          case _e:
            return m.key === j ? h(p, a, m, k) : null;
          case Se:
            return (j = m._init), g(p, a, j(m._payload), k);
        }
        if (An(m) || O(m)) return j !== null ? null : w(p, a, m, k, null);
        il(p, m);
      }
      return null;
    }
    function N(p, a, m, k, j) {
      if ((typeof k == "string" && k !== "") || typeof k == "number")
        return (p = p.get(m) || null), u(a, p, "" + k, j);
      if (typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case Me:
            return (
              (p = p.get(k.key === null ? m : k.key) || null), s(a, p, k, j)
            );
          case _e:
            return (
              (p = p.get(k.key === null ? m : k.key) || null), h(a, p, k, j)
            );
          case Se:
            var I = k._init;
            return N(p, a, m, I(k._payload), j);
        }
        if (An(k) || O(k)) return (p = p.get(m) || null), w(a, p, k, j, null);
        il(a, k);
      }
      return null;
    }
    function T(p, a, m, k) {
      for (
        var j = null, I = null, D = a, A = (a = 0), Pe = null;
        D !== null && A < m.length;
        A++
      ) {
        D.index > A ? ((Pe = D), (D = null)) : (Pe = D.sibling);
        var ee = g(p, D, m[A], k);
        if (ee === null) {
          D === null && (D = Pe);
          break;
        }
        e && D && ee.alternate === null && t(p, D),
          (a = o(ee, a, A)),
          I === null ? (j = ee) : (I.sibling = ee),
          (I = ee),
          (D = Pe);
      }
      if (A === m.length) return n(p, D), de && nn(p, A), j;
      if (D === null) {
        for (; A < m.length; A++)
          (D = x(p, m[A], k)),
            D !== null &&
              ((a = o(D, a, A)),
              I === null ? (j = D) : (I.sibling = D),
              (I = D));
        return de && nn(p, A), j;
      }
      for (D = r(p, D); A < m.length; A++)
        (Pe = N(D, p, A, m[A], k)),
          Pe !== null &&
            (e &&
              Pe.alternate !== null &&
              D.delete(Pe.key === null ? A : Pe.key),
            (a = o(Pe, a, A)),
            I === null ? (j = Pe) : (I.sibling = Pe),
            (I = Pe));
      return (
        e &&
          D.forEach(function (Xt) {
            return t(p, Xt);
          }),
        de && nn(p, A),
        j
      );
    }
    function L(p, a, m, k) {
      var j = O(m);
      if (typeof j != "function") throw Error(c(150));
      if (((m = j.call(m)), m == null)) throw Error(c(151));
      for (
        var I = (j = null), D = a, A = (a = 0), Pe = null, ee = m.next();
        D !== null && !ee.done;
        A++, ee = m.next()
      ) {
        D.index > A ? ((Pe = D), (D = null)) : (Pe = D.sibling);
        var Xt = g(p, D, ee.value, k);
        if (Xt === null) {
          D === null && (D = Pe);
          break;
        }
        e && D && Xt.alternate === null && t(p, D),
          (a = o(Xt, a, A)),
          I === null ? (j = Xt) : (I.sibling = Xt),
          (I = Xt),
          (D = Pe);
      }
      if (ee.done) return n(p, D), de && nn(p, A), j;
      if (D === null) {
        for (; !ee.done; A++, ee = m.next())
          (ee = x(p, ee.value, k)),
            ee !== null &&
              ((a = o(ee, a, A)),
              I === null ? (j = ee) : (I.sibling = ee),
              (I = ee));
        return de && nn(p, A), j;
      }
      for (D = r(p, D); !ee.done; A++, ee = m.next())
        (ee = N(D, p, A, ee.value, k)),
          ee !== null &&
            (e &&
              ee.alternate !== null &&
              D.delete(ee.key === null ? A : ee.key),
            (a = o(ee, a, A)),
            I === null ? (j = ee) : (I.sibling = ee),
            (I = ee));
      return (
        e &&
          D.forEach(function (Jf) {
            return t(p, Jf);
          }),
        de && nn(p, A),
        j
      );
    }
    function xe(p, a, m, k) {
      if (
        (typeof m == "object" &&
          m !== null &&
          m.type === Te &&
          m.key === null &&
          (m = m.props.children),
        typeof m == "object" && m !== null)
      ) {
        switch (m.$$typeof) {
          case Me:
            e: {
              for (var j = m.key, I = a; I !== null; ) {
                if (I.key === j) {
                  if (((j = m.type), j === Te)) {
                    if (I.tag === 7) {
                      n(p, I.sibling),
                        (a = l(I, m.props.children)),
                        (a.return = p),
                        (p = a);
                      break e;
                    }
                  } else if (
                    I.elementType === j ||
                    (typeof j == "object" &&
                      j !== null &&
                      j.$$typeof === Se &&
                      ms(j) === I.type)
                  ) {
                    n(p, I.sibling),
                      (a = l(I, m.props)),
                      (a.ref = cr(p, I, m)),
                      (a.return = p),
                      (p = a);
                    break e;
                  }
                  n(p, I);
                  break;
                } else t(p, I);
                I = I.sibling;
              }
              m.type === Te
                ? ((a = fn(m.props.children, p.mode, k, m.key)),
                  (a.return = p),
                  (p = a))
                : ((k = Tl(m.type, m.key, m.props, null, p.mode, k)),
                  (k.ref = cr(p, a, m)),
                  (k.return = p),
                  (p = k));
            }
            return i(p);
          case _e:
            e: {
              for (I = m.key; a !== null; ) {
                if (a.key === I)
                  if (
                    a.tag === 4 &&
                    a.stateNode.containerInfo === m.containerInfo &&
                    a.stateNode.implementation === m.implementation
                  ) {
                    n(p, a.sibling),
                      (a = l(a, m.children || [])),
                      (a.return = p),
                      (p = a);
                    break e;
                  } else {
                    n(p, a);
                    break;
                  }
                else t(p, a);
                a = a.sibling;
              }
              (a = Pi(m, p.mode, k)), (a.return = p), (p = a);
            }
            return i(p);
          case Se:
            return (I = m._init), xe(p, a, I(m._payload), k);
        }
        if (An(m)) return T(p, a, m, k);
        if (O(m)) return L(p, a, m, k);
        il(p, m);
      }
      return (typeof m == "string" && m !== "") || typeof m == "number"
        ? ((m = "" + m),
          a !== null && a.tag === 6
            ? (n(p, a.sibling), (a = l(a, m)), (a.return = p), (p = a))
            : (n(p, a), (a = zi(m, p.mode, k)), (a.return = p), (p = a)),
          i(p))
        : n(p, a);
    }
    return xe;
  }
  var Pn = hs(!0),
    vs = hs(!1),
    ul = Ut(null),
    sl = null,
    Rn = null,
    Fo = null;
  function Uo() {
    Fo = Rn = sl = null;
  }
  function Ao(e) {
    var t = ul.current;
    se(ul), (e._currentValue = t);
  }
  function Vo(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
          : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
      )
        break;
      e = e.return;
    }
  }
  function Tn(e, t) {
    (sl = e),
      (Fo = Rn = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        (e.lanes & t && (Qe = !0), (e.firstContext = null));
  }
  function ot(e) {
    var t = e._currentValue;
    if (Fo !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), Rn === null)) {
        if (sl === null) throw Error(c(308));
        (Rn = e), (sl.dependencies = { lanes: 0, firstContext: e });
      } else Rn = Rn.next = e;
    return t;
  }
  var rn = null;
  function Bo(e) {
    rn === null ? (rn = [e]) : rn.push(e);
  }
  function gs(e, t, n, r) {
    var l = t.interleaved;
    return (
      l === null ? ((n.next = n), Bo(t)) : ((n.next = l.next), (l.next = n)),
      (t.interleaved = n),
      Nt(e, r)
    );
  }
  function Nt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
      (e.childLanes |= t),
        (n = e.alternate),
        n !== null && (n.childLanes |= t),
        (n = e),
        (e = e.return);
    return n.tag === 3 ? n.stateNode : null;
  }
  var Bt = !1;
  function Wo(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function ys(e, t) {
    (e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects,
        });
  }
  function zt(e, t) {
    return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function Wt(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), X & 2)) {
      var l = r.pending;
      return (
        l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
        (r.pending = t),
        Nt(e, n)
      );
    }
    return (
      (l = r.interleaved),
      l === null ? ((t.next = t), Bo(r)) : ((t.next = l.next), (l.next = t)),
      (r.interleaved = t),
      Nt(e, n)
    );
  }
  function al(e, t, n) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
    ) {
      var r = t.lanes;
      (r &= e.pendingLanes), (n |= r), (t.lanes = n), to(e, n);
    }
  }
  function ws(e, t) {
    var n = e.updateQueue,
      r = e.alternate;
    if (r !== null && ((r = r.updateQueue), n === r)) {
      var l = null,
        o = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var i = {
            eventTime: n.eventTime,
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: n.callback,
            next: null,
          };
          o === null ? (l = o = i) : (o = o.next = i), (n = n.next);
        } while (n !== null);
        o === null ? (l = o = t) : (o = o.next = t);
      } else l = o = t;
      (n = {
        baseState: r.baseState,
        firstBaseUpdate: l,
        lastBaseUpdate: o,
        shared: r.shared,
        effects: r.effects,
      }),
        (e.updateQueue = n);
      return;
    }
    (e = n.lastBaseUpdate),
      e === null ? (n.firstBaseUpdate = t) : (e.next = t),
      (n.lastBaseUpdate = t);
  }
  function cl(e, t, n, r) {
    var l = e.updateQueue;
    Bt = !1;
    var o = l.firstBaseUpdate,
      i = l.lastBaseUpdate,
      u = l.shared.pending;
    if (u !== null) {
      l.shared.pending = null;
      var s = u,
        h = s.next;
      (s.next = null), i === null ? (o = h) : (i.next = h), (i = s);
      var w = e.alternate;
      w !== null &&
        ((w = w.updateQueue),
        (u = w.lastBaseUpdate),
        u !== i &&
          (u === null ? (w.firstBaseUpdate = h) : (u.next = h),
          (w.lastBaseUpdate = s)));
    }
    if (o !== null) {
      var x = l.baseState;
      (i = 0), (w = h = s = null), (u = o);
      do {
        var g = u.lane,
          N = u.eventTime;
        if ((r & g) === g) {
          w !== null &&
            (w = w.next =
              {
                eventTime: N,
                lane: 0,
                tag: u.tag,
                payload: u.payload,
                callback: u.callback,
                next: null,
              });
          e: {
            var T = e,
              L = u;
            switch (((g = t), (N = n), L.tag)) {
              case 1:
                if (((T = L.payload), typeof T == "function")) {
                  x = T.call(N, x, g);
                  break e;
                }
                x = T;
                break e;
              case 3:
                T.flags = (T.flags & -65537) | 128;
              case 0:
                if (
                  ((T = L.payload),
                  (g = typeof T == "function" ? T.call(N, x, g) : T),
                  g == null)
                )
                  break e;
                x = z({}, x, g);
                break e;
              case 2:
                Bt = !0;
            }
          }
          u.callback !== null &&
            u.lane !== 0 &&
            ((e.flags |= 64),
            (g = l.effects),
            g === null ? (l.effects = [u]) : g.push(u));
        } else
          (N = {
            eventTime: N,
            lane: g,
            tag: u.tag,
            payload: u.payload,
            callback: u.callback,
            next: null,
          }),
            w === null ? ((h = w = N), (s = x)) : (w = w.next = N),
            (i |= g);
        if (((u = u.next), u === null)) {
          if (((u = l.shared.pending), u === null)) break;
          (g = u),
            (u = g.next),
            (g.next = null),
            (l.lastBaseUpdate = g),
            (l.shared.pending = null);
        }
      } while (!0);
      if (
        (w === null && (s = x),
        (l.baseState = s),
        (l.firstBaseUpdate = h),
        (l.lastBaseUpdate = w),
        (t = l.shared.interleaved),
        t !== null)
      ) {
        l = t;
        do (i |= l.lane), (l = l.next);
        while (l !== t);
      } else o === null && (l.shared.lanes = 0);
      (un |= i), (e.lanes = i), (e.memoizedState = x);
    }
  }
  function xs(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var r = e[t],
          l = r.callback;
        if (l !== null) {
          if (((r.callback = null), (r = n), typeof l != "function"))
            throw Error(c(191, l));
          l.call(r);
        }
      }
  }
  var fr = {},
    wt = Ut(fr),
    dr = Ut(fr),
    pr = Ut(fr);
  function ln(e) {
    if (e === fr) throw Error(c(174));
    return e;
  }
  function $o(e, t) {
    switch ((oe(pr, t), oe(dr, e), oe(wt, fr), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : $l(null, "");
        break;
      default:
        (e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = $l(t, e));
    }
    se(wt), oe(wt, t);
  }
  function Ln() {
    se(wt), se(dr), se(pr);
  }
  function ks(e) {
    ln(pr.current);
    var t = ln(wt.current),
      n = $l(t, e.type);
    t !== n && (oe(dr, e), oe(wt, n));
  }
  function Ho(e) {
    dr.current === e && (se(wt), se(dr));
  }
  var he = Ut(0);
  function fl(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (
          n !== null &&
          ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if (t.flags & 128) return t;
      } else if (t.child !== null) {
        (t.child.return = t), (t = t.child);
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
  }
  var Qo = [];
  function Go() {
    for (var e = 0; e < Qo.length; e++)
      Qo[e]._workInProgressVersionPrimary = null;
    Qo.length = 0;
  }
  var dl = ce.ReactCurrentDispatcher,
    Ko = ce.ReactCurrentBatchConfig,
    on = 0,
    ve = null,
    Ee = null,
    Ne = null,
    pl = !1,
    mr = !1,
    hr = 0,
    yf = 0;
  function Fe() {
    throw Error(c(321));
  }
  function Yo(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!ft(e[n], t[n])) return !1;
    return !0;
  }
  function Xo(e, t, n, r, l, o) {
    if (
      ((on = o),
      (ve = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (dl.current = e === null || e.memoizedState === null ? Sf : Ef),
      (e = n(r, l)),
      mr)
    ) {
      o = 0;
      do {
        if (((mr = !1), (hr = 0), 25 <= o)) throw Error(c(301));
        (o += 1),
          (Ne = Ee = null),
          (t.updateQueue = null),
          (dl.current = Cf),
          (e = n(r, l));
      } while (mr);
    }
    if (
      ((dl.current = vl),
      (t = Ee !== null && Ee.next !== null),
      (on = 0),
      (Ne = Ee = ve = null),
      (pl = !1),
      t)
    )
      throw Error(c(300));
    return e;
  }
  function Jo() {
    var e = hr !== 0;
    return (hr = 0), e;
  }
  function xt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return Ne === null ? (ve.memoizedState = Ne = e) : (Ne = Ne.next = e), Ne;
  }
  function it() {
    if (Ee === null) {
      var e = ve.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ee.next;
    var t = Ne === null ? ve.memoizedState : Ne.next;
    if (t !== null) (Ne = t), (Ee = e);
    else {
      if (e === null) throw Error(c(310));
      (Ee = e),
        (e = {
          memoizedState: Ee.memoizedState,
          baseState: Ee.baseState,
          baseQueue: Ee.baseQueue,
          queue: Ee.queue,
          next: null,
        }),
        Ne === null ? (ve.memoizedState = Ne = e) : (Ne = Ne.next = e);
    }
    return Ne;
  }
  function vr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Zo(e) {
    var t = it(),
      n = t.queue;
    if (n === null) throw Error(c(311));
    n.lastRenderedReducer = e;
    var r = Ee,
      l = r.baseQueue,
      o = n.pending;
    if (o !== null) {
      if (l !== null) {
        var i = l.next;
        (l.next = o.next), (o.next = i);
      }
      (r.baseQueue = l = o), (n.pending = null);
    }
    if (l !== null) {
      (o = l.next), (r = r.baseState);
      var u = (i = null),
        s = null,
        h = o;
      do {
        var w = h.lane;
        if ((on & w) === w)
          s !== null &&
            (s = s.next =
              {
                lane: 0,
                action: h.action,
                hasEagerState: h.hasEagerState,
                eagerState: h.eagerState,
                next: null,
              }),
            (r = h.hasEagerState ? h.eagerState : e(r, h.action));
        else {
          var x = {
            lane: w,
            action: h.action,
            hasEagerState: h.hasEagerState,
            eagerState: h.eagerState,
            next: null,
          };
          s === null ? ((u = s = x), (i = r)) : (s = s.next = x),
            (ve.lanes |= w),
            (un |= w);
        }
        h = h.next;
      } while (h !== null && h !== o);
      s === null ? (i = r) : (s.next = u),
        ft(r, t.memoizedState) || (Qe = !0),
        (t.memoizedState = r),
        (t.baseState = i),
        (t.baseQueue = s),
        (n.lastRenderedState = r);
    }
    if (((e = n.interleaved), e !== null)) {
      l = e;
      do (o = l.lane), (ve.lanes |= o), (un |= o), (l = l.next);
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function qo(e) {
    var t = it(),
      n = t.queue;
    if (n === null) throw Error(c(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
      l = n.pending,
      o = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var i = (l = l.next);
      do (o = e(o, i.action)), (i = i.next);
      while (i !== l);
      ft(o, t.memoizedState) || (Qe = !0),
        (t.memoizedState = o),
        t.baseQueue === null && (t.baseState = o),
        (n.lastRenderedState = o);
    }
    return [o, r];
  }
  function Ss() {}
  function Es(e, t) {
    var n = ve,
      r = it(),
      l = t(),
      o = !ft(r.memoizedState, l);
    if (
      (o && ((r.memoizedState = l), (Qe = !0)),
      (r = r.queue),
      bo(Ns.bind(null, n, r, e), [e]),
      r.getSnapshot !== t || o || (Ne !== null && Ne.memoizedState.tag & 1))
    ) {
      if (
        ((n.flags |= 2048),
        gr(9, _s.bind(null, n, r, l, t), void 0, null),
        ze === null)
      )
        throw Error(c(349));
      on & 30 || Cs(n, t, l);
    }
    return l;
  }
  function Cs(e, t, n) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = ve.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (ve.updateQueue = t),
          (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
  }
  function _s(e, t, n, r) {
    (t.value = n), (t.getSnapshot = r), zs(t) && Ps(e);
  }
  function Ns(e, t, n) {
    return n(function () {
      zs(t) && Ps(e);
    });
  }
  function zs(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !ft(e, n);
    } catch {
      return !0;
    }
  }
  function Ps(e) {
    var t = Nt(e, 1);
    t !== null && vt(t, e, 1, -1);
  }
  function Rs(e) {
    var t = xt();
    return (
      typeof e == "function" && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: vr,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = kf.bind(null, ve, e)),
      [t.memoizedState, e]
    );
  }
  function gr(e, t, n, r) {
    return (
      (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
      (t = ve.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (ve.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((n = t.lastEffect),
          n === null
            ? (t.lastEffect = e.next = e)
            : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
      e
    );
  }
  function Ts() {
    return it().memoizedState;
  }
  function ml(e, t, n, r) {
    var l = xt();
    (ve.flags |= e),
      (l.memoizedState = gr(1 | t, n, void 0, r === void 0 ? null : r));
  }
  function hl(e, t, n, r) {
    var l = it();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (Ee !== null) {
      var i = Ee.memoizedState;
      if (((o = i.destroy), r !== null && Yo(r, i.deps))) {
        l.memoizedState = gr(t, n, o, r);
        return;
      }
    }
    (ve.flags |= e), (l.memoizedState = gr(1 | t, n, o, r));
  }
  function Ls(e, t) {
    return ml(8390656, 8, e, t);
  }
  function bo(e, t) {
    return hl(2048, 8, e, t);
  }
  function js(e, t) {
    return hl(4, 2, e, t);
  }
  function Ms(e, t) {
    return hl(4, 4, e, t);
  }
  function Os(e, t) {
    if (typeof t == "function")
      return (
        (e = e()),
        t(e),
        function () {
          t(null);
        }
      );
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function Is(e, t, n) {
    return (
      (n = n != null ? n.concat([e]) : null), hl(4, 4, Os.bind(null, t, e), n)
    );
  }
  function ei() {}
  function Ds(e, t) {
    var n = it();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Yo(t, r[1])
      ? r[0]
      : ((n.memoizedState = [e, t]), e);
  }
  function Fs(e, t) {
    var n = it();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Yo(t, r[1])
      ? r[0]
      : ((e = e()), (n.memoizedState = [e, t]), e);
  }
  function Us(e, t, n) {
    return on & 21
      ? (ft(n, t) ||
          ((n = mu()), (ve.lanes |= n), (un |= n), (e.baseState = !0)),
        t)
      : (e.baseState && ((e.baseState = !1), (Qe = !0)), (e.memoizedState = n));
  }
  function wf(e, t) {
    var n = ne;
    (ne = n !== 0 && 4 > n ? n : 4), e(!0);
    var r = Ko.transition;
    Ko.transition = {};
    try {
      e(!1), t();
    } finally {
      (ne = n), (Ko.transition = r);
    }
  }
  function As() {
    return it().memoizedState;
  }
  function xf(e, t, n) {
    var r = Gt(e);
    if (
      ((n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Vs(e))
    )
      Bs(t, n);
    else if (((n = gs(e, t, n, r)), n !== null)) {
      var l = We();
      vt(n, e, r, l), Ws(n, t, r);
    }
  }
  function kf(e, t, n) {
    var r = Gt(e),
      l = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (Vs(e)) Bs(t, l);
    else {
      var o = e.alternate;
      if (
        e.lanes === 0 &&
        (o === null || o.lanes === 0) &&
        ((o = t.lastRenderedReducer), o !== null)
      )
        try {
          var i = t.lastRenderedState,
            u = o(i, n);
          if (((l.hasEagerState = !0), (l.eagerState = u), ft(u, i))) {
            var s = t.interleaved;
            s === null
              ? ((l.next = l), Bo(t))
              : ((l.next = s.next), (s.next = l)),
              (t.interleaved = l);
            return;
          }
        } catch {
        } finally {
        }
      (n = gs(e, t, l, r)),
        n !== null && ((l = We()), vt(n, e, r, l), Ws(n, t, r));
    }
  }
  function Vs(e) {
    var t = e.alternate;
    return e === ve || (t !== null && t === ve);
  }
  function Bs(e, t) {
    mr = pl = !0;
    var n = e.pending;
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t);
  }
  function Ws(e, t, n) {
    if (n & 4194240) {
      var r = t.lanes;
      (r &= e.pendingLanes), (n |= r), (t.lanes = n), to(e, n);
    }
  }
  var vl = {
      readContext: ot,
      useCallback: Fe,
      useContext: Fe,
      useEffect: Fe,
      useImperativeHandle: Fe,
      useInsertionEffect: Fe,
      useLayoutEffect: Fe,
      useMemo: Fe,
      useReducer: Fe,
      useRef: Fe,
      useState: Fe,
      useDebugValue: Fe,
      useDeferredValue: Fe,
      useTransition: Fe,
      useMutableSource: Fe,
      useSyncExternalStore: Fe,
      useId: Fe,
      unstable_isNewReconciler: !1,
    },
    Sf = {
      readContext: ot,
      useCallback: function (e, t) {
        return (xt().memoizedState = [e, t === void 0 ? null : t]), e;
      },
      useContext: ot,
      useEffect: Ls,
      useImperativeHandle: function (e, t, n) {
        return (
          (n = n != null ? n.concat([e]) : null),
          ml(4194308, 4, Os.bind(null, t, e), n)
        );
      },
      useLayoutEffect: function (e, t) {
        return ml(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return ml(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = xt();
        return (
          (t = t === void 0 ? null : t),
          (e = e()),
          (n.memoizedState = [e, t]),
          e
        );
      },
      useReducer: function (e, t, n) {
        var r = xt();
        return (
          (t = n !== void 0 ? n(t) : t),
          (r.memoizedState = r.baseState = t),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
          (r.queue = e),
          (e = e.dispatch = xf.bind(null, ve, e)),
          [r.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = xt();
        return (e = { current: e }), (t.memoizedState = e);
      },
      useState: Rs,
      useDebugValue: ei,
      useDeferredValue: function (e) {
        return (xt().memoizedState = e);
      },
      useTransition: function () {
        var e = Rs(!1),
          t = e[0];
        return (e = wf.bind(null, e[1])), (xt().memoizedState = e), [t, e];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
        var r = ve,
          l = xt();
        if (de) {
          if (n === void 0) throw Error(c(407));
          n = n();
        } else {
          if (((n = t()), ze === null)) throw Error(c(349));
          on & 30 || Cs(r, t, n);
        }
        l.memoizedState = n;
        var o = { value: n, getSnapshot: t };
        return (
          (l.queue = o),
          Ls(Ns.bind(null, r, o, e), [e]),
          (r.flags |= 2048),
          gr(9, _s.bind(null, r, o, n, t), void 0, null),
          n
        );
      },
      useId: function () {
        var e = xt(),
          t = ze.identifierPrefix;
        if (de) {
          var n = _t,
            r = Ct;
          (n = (r & ~(1 << (32 - ct(r) - 1))).toString(32) + n),
            (t = ":" + t + "R" + n),
            (n = hr++),
            0 < n && (t += "H" + n.toString(32)),
            (t += ":");
        } else (n = yf++), (t = ":" + t + "r" + n.toString(32) + ":");
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    Ef = {
      readContext: ot,
      useCallback: Ds,
      useContext: ot,
      useEffect: bo,
      useImperativeHandle: Is,
      useInsertionEffect: js,
      useLayoutEffect: Ms,
      useMemo: Fs,
      useReducer: Zo,
      useRef: Ts,
      useState: function () {
        return Zo(vr);
      },
      useDebugValue: ei,
      useDeferredValue: function (e) {
        var t = it();
        return Us(t, Ee.memoizedState, e);
      },
      useTransition: function () {
        var e = Zo(vr)[0],
          t = it().memoizedState;
        return [e, t];
      },
      useMutableSource: Ss,
      useSyncExternalStore: Es,
      useId: As,
      unstable_isNewReconciler: !1,
    },
    Cf = {
      readContext: ot,
      useCallback: Ds,
      useContext: ot,
      useEffect: bo,
      useImperativeHandle: Is,
      useInsertionEffect: js,
      useLayoutEffect: Ms,
      useMemo: Fs,
      useReducer: qo,
      useRef: Ts,
      useState: function () {
        return qo(vr);
      },
      useDebugValue: ei,
      useDeferredValue: function (e) {
        var t = it();
        return Ee === null ? (t.memoizedState = e) : Us(t, Ee.memoizedState, e);
      },
      useTransition: function () {
        var e = qo(vr)[0],
          t = it().memoizedState;
        return [e, t];
      },
      useMutableSource: Ss,
      useSyncExternalStore: Es,
      useId: As,
      unstable_isNewReconciler: !1,
    };
  function pt(e, t) {
    if (e && e.defaultProps) {
      (t = z({}, t)), (e = e.defaultProps);
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function ti(e, t, n, r) {
    (t = e.memoizedState),
      (n = n(r, t)),
      (n = n == null ? t : z({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var gl = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? qt(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var r = We(),
        l = Gt(e),
        o = zt(r, l);
      (o.payload = t),
        n != null && (o.callback = n),
        (t = Wt(e, o, l)),
        t !== null && (vt(t, e, l, r), al(t, e, l));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var r = We(),
        l = Gt(e),
        o = zt(r, l);
      (o.tag = 1),
        (o.payload = t),
        n != null && (o.callback = n),
        (t = Wt(e, o, l)),
        t !== null && (vt(t, e, l, r), al(t, e, l));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = We(),
        r = Gt(e),
        l = zt(n, r);
      (l.tag = 2),
        t != null && (l.callback = t),
        (t = Wt(e, l, r)),
        t !== null && (vt(t, e, r, n), al(t, e, r));
    },
  };
  function $s(e, t, n, r, l, o, i) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(r, o, i)
        : t.prototype && t.prototype.isPureReactComponent
        ? !rr(n, r) || !rr(l, o)
        : !0
    );
  }
  function Hs(e, t, n) {
    var r = !1,
      l = At,
      o = t.contextType;
    return (
      typeof o == "object" && o !== null
        ? (o = ot(o))
        : ((l = He(t) ? en : De.current),
          (r = t.contextTypes),
          (o = (r = r != null) ? Cn(e, l) : At)),
      (t = new t(n, o)),
      (e.memoizedState =
        t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = gl),
      (e.stateNode = t),
      (t._reactInternals = e),
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = l),
        (e.__reactInternalMemoizedMaskedChildContext = o)),
      t
    );
  }
  function Qs(e, t, n, r) {
    (e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(n, r),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(n, r),
      t.state !== e && gl.enqueueReplaceState(t, t.state, null);
  }
  function ni(e, t, n, r) {
    var l = e.stateNode;
    (l.props = n), (l.state = e.memoizedState), (l.refs = {}), Wo(e);
    var o = t.contextType;
    typeof o == "object" && o !== null
      ? (l.context = ot(o))
      : ((o = He(t) ? en : De.current), (l.context = Cn(e, o))),
      (l.state = e.memoizedState),
      (o = t.getDerivedStateFromProps),
      typeof o == "function" && (ti(e, t, o, n), (l.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function" ||
        (typeof l.UNSAFE_componentWillMount != "function" &&
          typeof l.componentWillMount != "function") ||
        ((t = l.state),
        typeof l.componentWillMount == "function" && l.componentWillMount(),
        typeof l.UNSAFE_componentWillMount == "function" &&
          l.UNSAFE_componentWillMount(),
        t !== l.state && gl.enqueueReplaceState(l, l.state, null),
        cl(e, n, l, r),
        (l.state = e.memoizedState)),
      typeof l.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function jn(e, t) {
    try {
      var n = "",
        r = t;
      do (n += q(r)), (r = r.return);
      while (r);
      var l = n;
    } catch (o) {
      l =
        `
Error generating stack: ` +
        o.message +
        `
` +
        o.stack;
    }
    return { value: e, source: t, stack: l, digest: null };
  }
  function ri(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function li(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  var _f = typeof WeakMap == "function" ? WeakMap : Map;
  function Gs(e, t, n) {
    (n = zt(-1, n)), (n.tag = 3), (n.payload = { element: null });
    var r = t.value;
    return (
      (n.callback = function () {
        Cl || ((Cl = !0), (wi = r)), li(e, t);
      }),
      n
    );
  }
  function Ks(e, t, n) {
    (n = zt(-1, n)), (n.tag = 3);
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var l = t.value;
      (n.payload = function () {
        return r(l);
      }),
        (n.callback = function () {
          li(e, t);
        });
    }
    var o = e.stateNode;
    return (
      o !== null &&
        typeof o.componentDidCatch == "function" &&
        (n.callback = function () {
          li(e, t),
            typeof r != "function" &&
              (Ht === null ? (Ht = new Set([this])) : Ht.add(this));
          var i = t.stack;
          this.componentDidCatch(t.value, {
            componentStack: i !== null ? i : "",
          });
        }),
      n
    );
  }
  function Ys(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new _f();
      var l = new Set();
      r.set(t, l);
    } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
    l.has(n) || (l.add(n), (e = Af.bind(null, e, t, n)), t.then(e, e));
  }
  function Xs(e) {
    do {
      var t;
      if (
        ((t = e.tag === 13) &&
          ((t = e.memoizedState),
          (t = t !== null ? t.dehydrated !== null : !0)),
        t)
      )
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Js(e, t, n, r, l) {
    return e.mode & 1
      ? ((e.flags |= 65536), (e.lanes = l), e)
      : (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (n.flags |= 131072),
            (n.flags &= -52805),
            n.tag === 1 &&
              (n.alternate === null
                ? (n.tag = 17)
                : ((t = zt(-1, 1)), (t.tag = 2), Wt(n, t, 1))),
            (n.lanes |= 1)),
        e);
  }
  var Nf = ce.ReactCurrentOwner,
    Qe = !1;
  function Be(e, t, n, r) {
    t.child = e === null ? vs(t, null, n, r) : Pn(t, e.child, n, r);
  }
  function Zs(e, t, n, r, l) {
    n = n.render;
    var o = t.ref;
    return (
      Tn(t, l),
      (r = Xo(e, t, n, r, o, l)),
      (n = Jo()),
      e !== null && !Qe
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~l),
          Pt(e, t, l))
        : (de && n && jo(t), (t.flags |= 1), Be(e, t, r, l), t.child)
    );
  }
  function qs(e, t, n, r, l) {
    if (e === null) {
      var o = n.type;
      return typeof o == "function" &&
        !Ni(o) &&
        o.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
        ? ((t.tag = 15), (t.type = o), bs(e, t, o, r, l))
        : ((e = Tl(n.type, null, r, t, t.mode, l)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((o = e.child), !(e.lanes & l))) {
      var i = o.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : rr), n(i, r) && e.ref === t.ref)
      )
        return Pt(e, t, l);
    }
    return (
      (t.flags |= 1),
      (e = Yt(o, r)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function bs(e, t, n, r, l) {
    if (e !== null) {
      var o = e.memoizedProps;
      if (rr(o, r) && e.ref === t.ref)
        if (((Qe = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
          e.flags & 131072 && (Qe = !0);
        else return (t.lanes = e.lanes), Pt(e, t, l);
    }
    return oi(e, t, n, r, l);
  }
  function ea(e, t, n) {
    var r = t.pendingProps,
      l = r.children,
      o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
      if (!(t.mode & 1))
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          oe(On, tt),
          (tt |= n);
      else {
        if (!(n & 1073741824))
          return (
            (e = o !== null ? o.baseLanes | n : n),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null,
            }),
            (t.updateQueue = null),
            oe(On, tt),
            (tt |= e),
            null
          );
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (r = o !== null ? o.baseLanes : n),
          oe(On, tt),
          (tt |= r);
      }
    else
      o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
        oe(On, tt),
        (tt |= r);
    return Be(e, t, l, n), t.child;
  }
  function ta(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function oi(e, t, n, r, l) {
    var o = He(n) ? en : De.current;
    return (
      (o = Cn(t, o)),
      Tn(t, l),
      (n = Xo(e, t, n, r, o, l)),
      (r = Jo()),
      e !== null && !Qe
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~l),
          Pt(e, t, l))
        : (de && r && jo(t), (t.flags |= 1), Be(e, t, n, l), t.child)
    );
  }
  function na(e, t, n, r, l) {
    if (He(n)) {
      var o = !0;
      tl(t);
    } else o = !1;
    if ((Tn(t, l), t.stateNode === null))
      wl(e, t), Hs(t, n, r), ni(t, n, r, l), (r = !0);
    else if (e === null) {
      var i = t.stateNode,
        u = t.memoizedProps;
      i.props = u;
      var s = i.context,
        h = n.contextType;
      typeof h == "object" && h !== null
        ? (h = ot(h))
        : ((h = He(n) ? en : De.current), (h = Cn(t, h)));
      var w = n.getDerivedStateFromProps,
        x =
          typeof w == "function" ||
          typeof i.getSnapshotBeforeUpdate == "function";
      x ||
        (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
          typeof i.componentWillReceiveProps != "function") ||
        ((u !== r || s !== h) && Qs(t, i, r, h)),
        (Bt = !1);
      var g = t.memoizedState;
      (i.state = g),
        cl(t, r, i, l),
        (s = t.memoizedState),
        u !== r || g !== s || $e.current || Bt
          ? (typeof w == "function" && (ti(t, n, w, r), (s = t.memoizedState)),
            (u = Bt || $s(t, n, u, r, g, s, h))
              ? (x ||
                  (typeof i.UNSAFE_componentWillMount != "function" &&
                    typeof i.componentWillMount != "function") ||
                  (typeof i.componentWillMount == "function" &&
                    i.componentWillMount(),
                  typeof i.UNSAFE_componentWillMount == "function" &&
                    i.UNSAFE_componentWillMount()),
                typeof i.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof i.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = r),
                (t.memoizedState = s)),
            (i.props = r),
            (i.state = s),
            (i.context = h),
            (r = u))
          : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
            (r = !1));
    } else {
      (i = t.stateNode),
        ys(e, t),
        (u = t.memoizedProps),
        (h = t.type === t.elementType ? u : pt(t.type, u)),
        (i.props = h),
        (x = t.pendingProps),
        (g = i.context),
        (s = n.contextType),
        typeof s == "object" && s !== null
          ? (s = ot(s))
          : ((s = He(n) ? en : De.current), (s = Cn(t, s)));
      var N = n.getDerivedStateFromProps;
      (w =
        typeof N == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function") ||
        (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
          typeof i.componentWillReceiveProps != "function") ||
        ((u !== x || g !== s) && Qs(t, i, r, s)),
        (Bt = !1),
        (g = t.memoizedState),
        (i.state = g),
        cl(t, r, i, l);
      var T = t.memoizedState;
      u !== x || g !== T || $e.current || Bt
        ? (typeof N == "function" && (ti(t, n, N, r), (T = t.memoizedState)),
          (h = Bt || $s(t, n, h, r, g, T, s) || !1)
            ? (w ||
                (typeof i.UNSAFE_componentWillUpdate != "function" &&
                  typeof i.componentWillUpdate != "function") ||
                (typeof i.componentWillUpdate == "function" &&
                  i.componentWillUpdate(r, T, s),
                typeof i.UNSAFE_componentWillUpdate == "function" &&
                  i.UNSAFE_componentWillUpdate(r, T, s)),
              typeof i.componentDidUpdate == "function" && (t.flags |= 4),
              typeof i.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof i.componentDidUpdate != "function" ||
                (u === e.memoizedProps && g === e.memoizedState) ||
                (t.flags |= 4),
              typeof i.getSnapshotBeforeUpdate != "function" ||
                (u === e.memoizedProps && g === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = r),
              (t.memoizedState = T)),
          (i.props = r),
          (i.state = T),
          (i.context = s),
          (r = h))
        : (typeof i.componentDidUpdate != "function" ||
            (u === e.memoizedProps && g === e.memoizedState) ||
            (t.flags |= 4),
          typeof i.getSnapshotBeforeUpdate != "function" ||
            (u === e.memoizedProps && g === e.memoizedState) ||
            (t.flags |= 1024),
          (r = !1));
    }
    return ii(e, t, n, r, o, l);
  }
  function ii(e, t, n, r, l, o) {
    ta(e, t);
    var i = (t.flags & 128) !== 0;
    if (!r && !i) return l && us(t, n, !1), Pt(e, t, o);
    (r = t.stateNode), (Nf.current = t);
    var u =
      i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return (
      (t.flags |= 1),
      e !== null && i
        ? ((t.child = Pn(t, e.child, null, o)), (t.child = Pn(t, null, u, o)))
        : Be(e, t, u, o),
      (t.memoizedState = r.state),
      l && us(t, n, !0),
      t.child
    );
  }
  function ra(e) {
    var t = e.stateNode;
    t.pendingContext
      ? os(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && os(e, t.context, !1),
      $o(e, t.containerInfo);
  }
  function la(e, t, n, r, l) {
    return zn(), Do(l), (t.flags |= 256), Be(e, t, n, r), t.child;
  }
  var ui = { dehydrated: null, treeContext: null, retryLane: 0 };
  function si(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function oa(e, t, n) {
    var r = t.pendingProps,
      l = he.current,
      o = !1,
      i = (t.flags & 128) !== 0,
      u;
    if (
      ((u = i) ||
        (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
      u
        ? ((o = !0), (t.flags &= -129))
        : (e === null || e.memoizedState !== null) && (l |= 1),
      oe(he, l & 1),
      e === null)
    )
      return (
        Io(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? (t.mode & 1
              ? e.data === "$!"
                ? (t.lanes = 8)
                : (t.lanes = 1073741824)
              : (t.lanes = 1),
            null)
          : ((i = r.children),
            (e = r.fallback),
            o
              ? ((r = t.mode),
                (o = t.child),
                (i = { mode: "hidden", children: i }),
                !(r & 1) && o !== null
                  ? ((o.childLanes = 0), (o.pendingProps = i))
                  : (o = Ll(i, r, 0, null)),
                (e = fn(e, r, n, null)),
                (o.return = t),
                (e.return = t),
                (o.sibling = e),
                (t.child = o),
                (t.child.memoizedState = si(n)),
                (t.memoizedState = ui),
                e)
              : ai(t, i))
      );
    if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
      return zf(e, t, i, r, u, l, n);
    if (o) {
      (o = r.fallback), (i = t.mode), (l = e.child), (u = l.sibling);
      var s = { mode: "hidden", children: r.children };
      return (
        !(i & 1) && t.child !== l
          ? ((r = t.child),
            (r.childLanes = 0),
            (r.pendingProps = s),
            (t.deletions = null))
          : ((r = Yt(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
        u !== null ? (o = Yt(u, o)) : ((o = fn(o, i, n, null)), (o.flags |= 2)),
        (o.return = t),
        (r.return = t),
        (r.sibling = o),
        (t.child = r),
        (r = o),
        (o = t.child),
        (i = e.child.memoizedState),
        (i =
          i === null
            ? si(n)
            : {
                baseLanes: i.baseLanes | n,
                cachePool: null,
                transitions: i.transitions,
              }),
        (o.memoizedState = i),
        (o.childLanes = e.childLanes & ~n),
        (t.memoizedState = ui),
        r
      );
    }
    return (
      (o = e.child),
      (e = o.sibling),
      (r = Yt(o, { mode: "visible", children: r.children })),
      !(t.mode & 1) && (r.lanes = n),
      (r.return = t),
      (r.sibling = null),
      e !== null &&
        ((n = t.deletions),
        n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
      (t.child = r),
      (t.memoizedState = null),
      r
    );
  }
  function ai(e, t) {
    return (
      (t = Ll({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function yl(e, t, n, r) {
    return (
      r !== null && Do(r),
      Pn(t, e.child, null, n),
      (e = ai(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function zf(e, t, n, r, l, o, i) {
    if (n)
      return t.flags & 256
        ? ((t.flags &= -257), (r = ri(Error(c(422)))), yl(e, t, i, r))
        : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((o = r.fallback),
          (l = t.mode),
          (r = Ll({ mode: "visible", children: r.children }, l, 0, null)),
          (o = fn(o, l, i, null)),
          (o.flags |= 2),
          (r.return = t),
          (o.return = t),
          (r.sibling = o),
          (t.child = r),
          t.mode & 1 && Pn(t, e.child, null, i),
          (t.child.memoizedState = si(i)),
          (t.memoizedState = ui),
          o);
    if (!(t.mode & 1)) return yl(e, t, i, null);
    if (l.data === "$!") {
      if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
      return (
        (r = u), (o = Error(c(419))), (r = ri(o, r, void 0)), yl(e, t, i, r)
      );
    }
    if (((u = (i & e.childLanes) !== 0), Qe || u)) {
      if (((r = ze), r !== null)) {
        switch (i & -i) {
          case 4:
            l = 2;
            break;
          case 16:
            l = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            l = 32;
            break;
          case 536870912:
            l = 268435456;
            break;
          default:
            l = 0;
        }
        (l = l & (r.suspendedLanes | i) ? 0 : l),
          l !== 0 &&
            l !== o.retryLane &&
            ((o.retryLane = l), Nt(e, l), vt(r, e, l, -1));
      }
      return _i(), (r = ri(Error(c(421)))), yl(e, t, i, r);
    }
    return l.data === "$?"
      ? ((t.flags |= 128),
        (t.child = e.child),
        (t = Vf.bind(null, e)),
        (l._reactRetry = t),
        null)
      : ((e = o.treeContext),
        (et = Ft(l.nextSibling)),
        (be = t),
        (de = !0),
        (dt = null),
        e !== null &&
          ((rt[lt++] = Ct),
          (rt[lt++] = _t),
          (rt[lt++] = tn),
          (Ct = e.id),
          (_t = e.overflow),
          (tn = t)),
        (t = ai(t, r.children)),
        (t.flags |= 4096),
        t);
  }
  function ia(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Vo(e.return, t, n);
  }
  function ci(e, t, n, r, l) {
    var o = e.memoizedState;
    o === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: r,
          tail: n,
          tailMode: l,
        })
      : ((o.isBackwards = t),
        (o.rendering = null),
        (o.renderingStartTime = 0),
        (o.last = r),
        (o.tail = n),
        (o.tailMode = l));
  }
  function ua(e, t, n) {
    var r = t.pendingProps,
      l = r.revealOrder,
      o = r.tail;
    if ((Be(e, t, r.children, n), (r = he.current), r & 2))
      (r = (r & 1) | 2), (t.flags |= 128);
    else {
      if (e !== null && e.flags & 128)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && ia(e, n, t);
          else if (e.tag === 19) ia(e, n, t);
          else if (e.child !== null) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      r &= 1;
    }
    if ((oe(he, r), !(t.mode & 1))) t.memoizedState = null;
    else
      switch (l) {
        case "forwards":
          for (n = t.child, l = null; n !== null; )
            (e = n.alternate),
              e !== null && fl(e) === null && (l = n),
              (n = n.sibling);
          (n = l),
            n === null
              ? ((l = t.child), (t.child = null))
              : ((l = n.sibling), (n.sibling = null)),
            ci(t, !1, l, n, o);
          break;
        case "backwards":
          for (n = null, l = t.child, t.child = null; l !== null; ) {
            if (((e = l.alternate), e !== null && fl(e) === null)) {
              t.child = l;
              break;
            }
            (e = l.sibling), (l.sibling = n), (n = l), (l = e);
          }
          ci(t, !0, n, null, o);
          break;
        case "together":
          ci(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function wl(e, t) {
    !(t.mode & 1) &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function Pt(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (un |= t.lanes),
      !(n & t.childLanes))
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(c(153));
    if (t.child !== null) {
      for (
        e = t.child, n = Yt(e, e.pendingProps), t.child = n, n.return = t;
        e.sibling !== null;

      )
        (e = e.sibling),
          (n = n.sibling = Yt(e, e.pendingProps)),
          (n.return = t);
      n.sibling = null;
    }
    return t.child;
  }
  function Pf(e, t, n) {
    switch (t.tag) {
      case 3:
        ra(t), zn();
        break;
      case 5:
        ks(t);
        break;
      case 1:
        He(t.type) && tl(t);
        break;
      case 4:
        $o(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context,
          l = t.memoizedProps.value;
        oe(ul, r._currentValue), (r._currentValue = l);
        break;
      case 13:
        if (((r = t.memoizedState), r !== null))
          return r.dehydrated !== null
            ? (oe(he, he.current & 1), (t.flags |= 128), null)
            : n & t.child.childLanes
            ? oa(e, t, n)
            : (oe(he, he.current & 1),
              (e = Pt(e, t, n)),
              e !== null ? e.sibling : null);
        oe(he, he.current & 1);
        break;
      case 19:
        if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
          if (r) return ua(e, t, n);
          t.flags |= 128;
        }
        if (
          ((l = t.memoizedState),
          l !== null &&
            ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
          oe(he, he.current),
          r)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), ea(e, t, n);
    }
    return Pt(e, t, n);
  }
  var sa, fi, aa, ca;
  (sa = function (e, t) {
    for (var n = t.child; n !== null; ) {
      if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
        (n.child.return = n), (n = n.child);
        continue;
      }
      if (n === t) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t) return;
        n = n.return;
      }
      (n.sibling.return = n.return), (n = n.sibling);
    }
  }),
    (fi = function () {}),
    (aa = function (e, t, n, r) {
      var l = e.memoizedProps;
      if (l !== r) {
        (e = t.stateNode), ln(wt.current);
        var o = null;
        switch (n) {
          case "input":
            (l = Al(e, l)), (r = Al(e, r)), (o = []);
            break;
          case "select":
            (l = z({}, l, { value: void 0 })),
              (r = z({}, r, { value: void 0 })),
              (o = []);
            break;
          case "textarea":
            (l = Wl(e, l)), (r = Wl(e, r)), (o = []);
            break;
          default:
            typeof l.onClick != "function" &&
              typeof r.onClick == "function" &&
              (e.onclick = qr);
        }
        Hl(n, r);
        var i;
        n = null;
        for (h in l)
          if (!r.hasOwnProperty(h) && l.hasOwnProperty(h) && l[h] != null)
            if (h === "style") {
              var u = l[h];
              for (i in u) u.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
            } else
              h !== "dangerouslySetInnerHTML" &&
                h !== "children" &&
                h !== "suppressContentEditableWarning" &&
                h !== "suppressHydrationWarning" &&
                h !== "autoFocus" &&
                (_.hasOwnProperty(h)
                  ? o || (o = [])
                  : (o = o || []).push(h, null));
        for (h in r) {
          var s = r[h];
          if (
            ((u = l != null ? l[h] : void 0),
            r.hasOwnProperty(h) && s !== u && (s != null || u != null))
          )
            if (h === "style")
              if (u) {
                for (i in u)
                  !u.hasOwnProperty(i) ||
                    (s && s.hasOwnProperty(i)) ||
                    (n || (n = {}), (n[i] = ""));
                for (i in s)
                  s.hasOwnProperty(i) &&
                    u[i] !== s[i] &&
                    (n || (n = {}), (n[i] = s[i]));
              } else n || (o || (o = []), o.push(h, n)), (n = s);
            else
              h === "dangerouslySetInnerHTML"
                ? ((s = s ? s.__html : void 0),
                  (u = u ? u.__html : void 0),
                  s != null && u !== s && (o = o || []).push(h, s))
                : h === "children"
                ? (typeof s != "string" && typeof s != "number") ||
                  (o = o || []).push(h, "" + s)
                : h !== "suppressContentEditableWarning" &&
                  h !== "suppressHydrationWarning" &&
                  (_.hasOwnProperty(h)
                    ? (s != null && h === "onScroll" && ue("scroll", e),
                      o || u === s || (o = []))
                    : (o = o || []).push(h, s));
        }
        n && (o = o || []).push("style", n);
        var h = o;
        (t.updateQueue = h) && (t.flags |= 4);
      }
    }),
    (ca = function (e, t, n, r) {
      n !== r && (t.flags |= 4);
    });
  function yr(e, t) {
    if (!de)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; t !== null; )
            t.alternate !== null && (n = t), (t = t.sibling);
          n === null ? (e.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = e.tail;
          for (var r = null; n !== null; )
            n.alternate !== null && (r = n), (n = n.sibling);
          r === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (r.sibling = null);
      }
  }
  function Ue(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      n = 0,
      r = 0;
    if (t)
      for (var l = e.child; l !== null; )
        (n |= l.lanes | l.childLanes),
          (r |= l.subtreeFlags & 14680064),
          (r |= l.flags & 14680064),
          (l.return = e),
          (l = l.sibling);
    else
      for (l = e.child; l !== null; )
        (n |= l.lanes | l.childLanes),
          (r |= l.subtreeFlags),
          (r |= l.flags),
          (l.return = e),
          (l = l.sibling);
    return (e.subtreeFlags |= r), (e.childLanes = n), t;
  }
  function Rf(e, t, n) {
    var r = t.pendingProps;
    switch ((Mo(t), t.tag)) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Ue(t), null;
      case 1:
        return He(t.type) && el(), Ue(t), null;
      case 3:
        return (
          (r = t.stateNode),
          Ln(),
          se($e),
          se(De),
          Go(),
          r.pendingContext &&
            ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (ol(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                ((t.flags |= 1024), dt !== null && (Si(dt), (dt = null)))),
          fi(e, t),
          Ue(t),
          null
        );
      case 5:
        Ho(t);
        var l = ln(pr.current);
        if (((n = t.type), e !== null && t.stateNode != null))
          aa(e, t, n, r, l),
            e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(c(166));
            return Ue(t), null;
          }
          if (((e = ln(wt.current)), ol(t))) {
            (r = t.stateNode), (n = t.type);
            var o = t.memoizedProps;
            switch (((r[yt] = t), (r[sr] = o), (e = (t.mode & 1) !== 0), n)) {
              case "dialog":
                ue("cancel", r), ue("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                ue("load", r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < or.length; l++) ue(or[l], r);
                break;
              case "source":
                ue("error", r);
                break;
              case "img":
              case "image":
              case "link":
                ue("error", r), ue("load", r);
                break;
              case "details":
                ue("toggle", r);
                break;
              case "input":
                Hi(r, o), ue("invalid", r);
                break;
              case "select":
                (r._wrapperState = { wasMultiple: !!o.multiple }),
                  ue("invalid", r);
                break;
              case "textarea":
                Ki(r, o), ue("invalid", r);
            }
            Hl(n, o), (l = null);
            for (var i in o)
              if (o.hasOwnProperty(i)) {
                var u = o[i];
                i === "children"
                  ? typeof u == "string"
                    ? r.textContent !== u &&
                      (o.suppressHydrationWarning !== !0 &&
                        Zr(r.textContent, u, e),
                      (l = ["children", u]))
                    : typeof u == "number" &&
                      r.textContent !== "" + u &&
                      (o.suppressHydrationWarning !== !0 &&
                        Zr(r.textContent, u, e),
                      (l = ["children", "" + u]))
                  : _.hasOwnProperty(i) &&
                    u != null &&
                    i === "onScroll" &&
                    ue("scroll", r);
              }
            switch (n) {
              case "input":
                Pr(r), Gi(r, o, !0);
                break;
              case "textarea":
                Pr(r), Xi(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof o.onClick == "function" && (r.onclick = qr);
            }
            (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
          } else {
            (i = l.nodeType === 9 ? l : l.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = Ji(n)),
              e === "http://www.w3.org/1999/xhtml"
                ? n === "script"
                  ? ((e = i.createElement("div")),
                    (e.innerHTML = "<script></script>"),
                    (e = e.removeChild(e.firstChild)))
                  : typeof r.is == "string"
                  ? (e = i.createElement(n, { is: r.is }))
                  : ((e = i.createElement(n)),
                    n === "select" &&
                      ((i = e),
                      r.multiple
                        ? (i.multiple = !0)
                        : r.size && (i.size = r.size)))
                : (e = i.createElementNS(e, n)),
              (e[yt] = t),
              (e[sr] = r),
              sa(e, t, !1, !1),
              (t.stateNode = e);
            e: {
              switch (((i = Ql(n, r)), n)) {
                case "dialog":
                  ue("cancel", e), ue("close", e), (l = r);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  ue("load", e), (l = r);
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < or.length; l++) ue(or[l], e);
                  l = r;
                  break;
                case "source":
                  ue("error", e), (l = r);
                  break;
                case "img":
                case "image":
                case "link":
                  ue("error", e), ue("load", e), (l = r);
                  break;
                case "details":
                  ue("toggle", e), (l = r);
                  break;
                case "input":
                  Hi(e, r), (l = Al(e, r)), ue("invalid", e);
                  break;
                case "option":
                  l = r;
                  break;
                case "select":
                  (e._wrapperState = { wasMultiple: !!r.multiple }),
                    (l = z({}, r, { value: void 0 })),
                    ue("invalid", e);
                  break;
                case "textarea":
                  Ki(e, r), (l = Wl(e, r)), ue("invalid", e);
                  break;
                default:
                  l = r;
              }
              Hl(n, l), (u = l);
              for (o in u)
                if (u.hasOwnProperty(o)) {
                  var s = u[o];
                  o === "style"
                    ? bi(e, s)
                    : o === "dangerouslySetInnerHTML"
                    ? ((s = s ? s.__html : void 0), s != null && Zi(e, s))
                    : o === "children"
                    ? typeof s == "string"
                      ? (n !== "textarea" || s !== "") && Vn(e, s)
                      : typeof s == "number" && Vn(e, "" + s)
                    : o !== "suppressContentEditableWarning" &&
                      o !== "suppressHydrationWarning" &&
                      o !== "autoFocus" &&
                      (_.hasOwnProperty(o)
                        ? s != null && o === "onScroll" && ue("scroll", e)
                        : s != null && Re(e, o, s, i));
                }
              switch (n) {
                case "input":
                  Pr(e), Gi(e, r, !1);
                  break;
                case "textarea":
                  Pr(e), Xi(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + te(r.value));
                  break;
                case "select":
                  (e.multiple = !!r.multiple),
                    (o = r.value),
                    o != null
                      ? dn(e, !!r.multiple, o, !1)
                      : r.defaultValue != null &&
                        dn(e, !!r.multiple, r.defaultValue, !0);
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = qr);
              }
              switch (n) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  r = !!r.autoFocus;
                  break e;
                case "img":
                  r = !0;
                  break e;
                default:
                  r = !1;
              }
            }
            r && (t.flags |= 4);
          }
          t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
        }
        return Ue(t), null;
      case 6:
        if (e && t.stateNode != null) ca(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(c(166));
          if (((n = ln(pr.current)), ln(wt.current), ol(t))) {
            if (
              ((r = t.stateNode),
              (n = t.memoizedProps),
              (r[yt] = t),
              (o = r.nodeValue !== n) && ((e = be), e !== null))
            )
              switch (e.tag) {
                case 3:
                  Zr(r.nodeValue, n, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    Zr(r.nodeValue, n, (e.mode & 1) !== 0);
              }
            o && (t.flags |= 4);
          } else
            (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
              (r[yt] = t),
              (t.stateNode = r);
        }
        return Ue(t), null;
      case 13:
        if (
          (se(he),
          (r = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (de && et !== null && t.mode & 1 && !(t.flags & 128))
            ps(), zn(), (t.flags |= 98560), (o = !1);
          else if (((o = ol(t)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!o) throw Error(c(318));
              if (
                ((o = t.memoizedState),
                (o = o !== null ? o.dehydrated : null),
                !o)
              )
                throw Error(c(317));
              o[yt] = t;
            } else
              zn(),
                !(t.flags & 128) && (t.memoizedState = null),
                (t.flags |= 4);
            Ue(t), (o = !1);
          } else dt !== null && (Si(dt), (dt = null)), (o = !0);
          if (!o) return t.flags & 65536 ? t : null;
        }
        return t.flags & 128
          ? ((t.lanes = n), t)
          : ((r = r !== null),
            r !== (e !== null && e.memoizedState !== null) &&
              r &&
              ((t.child.flags |= 8192),
              t.mode & 1 &&
                (e === null || he.current & 1 ? Ce === 0 && (Ce = 3) : _i())),
            t.updateQueue !== null && (t.flags |= 4),
            Ue(t),
            null);
      case 4:
        return (
          Ln(),
          fi(e, t),
          e === null && ir(t.stateNode.containerInfo),
          Ue(t),
          null
        );
      case 10:
        return Ao(t.type._context), Ue(t), null;
      case 17:
        return He(t.type) && el(), Ue(t), null;
      case 19:
        if ((se(he), (o = t.memoizedState), o === null)) return Ue(t), null;
        if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
          if (r) yr(o, !1);
          else {
            if (Ce !== 0 || (e !== null && e.flags & 128))
              for (e = t.child; e !== null; ) {
                if (((i = fl(e)), i !== null)) {
                  for (
                    t.flags |= 128,
                      yr(o, !1),
                      r = i.updateQueue,
                      r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      r = n,
                      n = t.child;
                    n !== null;

                  )
                    (o = n),
                      (e = r),
                      (o.flags &= 14680066),
                      (i = o.alternate),
                      i === null
                        ? ((o.childLanes = 0),
                          (o.lanes = e),
                          (o.child = null),
                          (o.subtreeFlags = 0),
                          (o.memoizedProps = null),
                          (o.memoizedState = null),
                          (o.updateQueue = null),
                          (o.dependencies = null),
                          (o.stateNode = null))
                        : ((o.childLanes = i.childLanes),
                          (o.lanes = i.lanes),
                          (o.child = i.child),
                          (o.subtreeFlags = 0),
                          (o.deletions = null),
                          (o.memoizedProps = i.memoizedProps),
                          (o.memoizedState = i.memoizedState),
                          (o.updateQueue = i.updateQueue),
                          (o.type = i.type),
                          (e = i.dependencies),
                          (o.dependencies =
                            e === null
                              ? null
                              : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext,
                                })),
                      (n = n.sibling);
                  return oe(he, (he.current & 1) | 2), t.child;
                }
                e = e.sibling;
              }
            o.tail !== null &&
              we() > In &&
              ((t.flags |= 128), (r = !0), yr(o, !1), (t.lanes = 4194304));
          }
        else {
          if (!r)
            if (((e = fl(i)), e !== null)) {
              if (
                ((t.flags |= 128),
                (r = !0),
                (n = e.updateQueue),
                n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                yr(o, !0),
                o.tail === null &&
                  o.tailMode === "hidden" &&
                  !i.alternate &&
                  !de)
              )
                return Ue(t), null;
            } else
              2 * we() - o.renderingStartTime > In &&
                n !== 1073741824 &&
                ((t.flags |= 128), (r = !0), yr(o, !1), (t.lanes = 4194304));
          o.isBackwards
            ? ((i.sibling = t.child), (t.child = i))
            : ((n = o.last),
              n !== null ? (n.sibling = i) : (t.child = i),
              (o.last = i));
        }
        return o.tail !== null
          ? ((t = o.tail),
            (o.rendering = t),
            (o.tail = t.sibling),
            (o.renderingStartTime = we()),
            (t.sibling = null),
            (n = he.current),
            oe(he, r ? (n & 1) | 2 : n & 1),
            t)
          : (Ue(t), null);
      case 22:
      case 23:
        return (
          Ci(),
          (r = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
          r && t.mode & 1
            ? tt & 1073741824 &&
              (Ue(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : Ue(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(c(156, t.tag));
  }
  function Tf(e, t) {
    switch ((Mo(t), t.tag)) {
      case 1:
        return (
          He(t.type) && el(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          Ln(),
          se($e),
          se(De),
          Go(),
          (e = t.flags),
          e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 5:
        return Ho(t), null;
      case 13:
        if (
          (se(he), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(c(340));
          zn();
        }
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return se(he), null;
      case 4:
        return Ln(), null;
      case 10:
        return Ao(t.type._context), null;
      case 22:
      case 23:
        return Ci(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var xl = !1,
    Ae = !1,
    Lf = typeof WeakSet == "function" ? WeakSet : Set,
    R = null;
  function Mn(e, t) {
    var n = e.ref;
    if (n !== null)
      if (typeof n == "function")
        try {
          n(null);
        } catch (r) {
          ye(e, t, r);
        }
      else n.current = null;
  }
  function di(e, t, n) {
    try {
      n();
    } catch (r) {
      ye(e, t, r);
    }
  }
  var fa = !1;
  function jf(e, t) {
    if (((Co = Vr), (e = $u()), vo(e))) {
      if ("selectionStart" in e)
        var n = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          n = ((n = e.ownerDocument) && n.defaultView) || window;
          var r = n.getSelection && n.getSelection();
          if (r && r.rangeCount !== 0) {
            n = r.anchorNode;
            var l = r.anchorOffset,
              o = r.focusNode;
            r = r.focusOffset;
            try {
              n.nodeType, o.nodeType;
            } catch {
              n = null;
              break e;
            }
            var i = 0,
              u = -1,
              s = -1,
              h = 0,
              w = 0,
              x = e,
              g = null;
            t: for (;;) {
              for (
                var N;
                x !== n || (l !== 0 && x.nodeType !== 3) || (u = i + l),
                  x !== o || (r !== 0 && x.nodeType !== 3) || (s = i + r),
                  x.nodeType === 3 && (i += x.nodeValue.length),
                  (N = x.firstChild) !== null;

              )
                (g = x), (x = N);
              for (;;) {
                if (x === e) break t;
                if (
                  (g === n && ++h === l && (u = i),
                  g === o && ++w === r && (s = i),
                  (N = x.nextSibling) !== null)
                )
                  break;
                (x = g), (g = x.parentNode);
              }
              x = N;
            }
            n = u === -1 || s === -1 ? null : { start: u, end: s };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      _o = { focusedElem: e, selectionRange: n }, Vr = !1, R = t;
      R !== null;

    )
      if (((t = R), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        (e.return = t), (R = e);
      else
        for (; R !== null; ) {
          t = R;
          try {
            var T = t.alternate;
            if (t.flags & 1024)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (T !== null) {
                    var L = T.memoizedProps,
                      xe = T.memoizedState,
                      p = t.stateNode,
                      a = p.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? L : pt(t.type, L),
                        xe
                      );
                    p.__reactInternalSnapshotBeforeUpdate = a;
                  }
                  break;
                case 3:
                  var m = t.stateNode.containerInfo;
                  m.nodeType === 1
                    ? (m.textContent = "")
                    : m.nodeType === 9 &&
                      m.documentElement &&
                      m.removeChild(m.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(c(163));
              }
          } catch (k) {
            ye(t, t.return, k);
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), (R = e);
            break;
          }
          R = t.return;
        }
    return (T = fa), (fa = !1), T;
  }
  function wr(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
      var l = (r = r.next);
      do {
        if ((l.tag & e) === e) {
          var o = l.destroy;
          (l.destroy = void 0), o !== void 0 && di(t, n, o);
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function kl(e, t) {
    if (
      ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
    ) {
      var n = (t = t.next);
      do {
        if ((n.tag & e) === e) {
          var r = n.create;
          n.destroy = r();
        }
        n = n.next;
      } while (n !== t);
    }
  }
  function pi(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      switch (e.tag) {
        case 5:
          e = n;
          break;
        default:
          e = n;
      }
      typeof t == "function" ? t(e) : (t.current = e);
    }
  }
  function da(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), da(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null &&
          (delete t[yt],
          delete t[sr],
          delete t[Ro],
          delete t[mf],
          delete t[hf])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  function pa(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function ma(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || pa(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function mi(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      (e = e.stateNode),
        t
          ? n.nodeType === 8
            ? n.parentNode.insertBefore(e, t)
            : n.insertBefore(e, t)
          : (n.nodeType === 8
              ? ((t = n.parentNode), t.insertBefore(e, n))
              : ((t = n), t.appendChild(e)),
            (n = n._reactRootContainer),
            n != null || t.onclick !== null || (t.onclick = qr));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (mi(e, t, n), e = e.sibling; e !== null; )
        mi(e, t, n), (e = e.sibling);
  }
  function hi(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && ((e = e.child), e !== null))
      for (hi(e, t, n), e = e.sibling; e !== null; )
        hi(e, t, n), (e = e.sibling);
  }
  var Le = null,
    mt = !1;
  function $t(e, t, n) {
    for (n = n.child; n !== null; ) ha(e, t, n), (n = n.sibling);
  }
  function ha(e, t, n) {
    if (gt && typeof gt.onCommitFiberUnmount == "function")
      try {
        gt.onCommitFiberUnmount(Or, n);
      } catch {}
    switch (n.tag) {
      case 5:
        Ae || Mn(n, t);
      case 6:
        var r = Le,
          l = mt;
        (Le = null),
          $t(e, t, n),
          (Le = r),
          (mt = l),
          Le !== null &&
            (mt
              ? ((e = Le),
                (n = n.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(n)
                  : e.removeChild(n))
              : Le.removeChild(n.stateNode));
        break;
      case 18:
        Le !== null &&
          (mt
            ? ((e = Le),
              (n = n.stateNode),
              e.nodeType === 8
                ? Po(e.parentNode, n)
                : e.nodeType === 1 && Po(e, n),
              Zn(e))
            : Po(Le, n.stateNode));
        break;
      case 4:
        (r = Le),
          (l = mt),
          (Le = n.stateNode.containerInfo),
          (mt = !0),
          $t(e, t, n),
          (Le = r),
          (mt = l);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !Ae &&
          ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
        ) {
          l = r = r.next;
          do {
            var o = l,
              i = o.destroy;
            (o = o.tag),
              i !== void 0 && (o & 2 || o & 4) && di(n, t, i),
              (l = l.next);
          } while (l !== r);
        }
        $t(e, t, n);
        break;
      case 1:
        if (
          !Ae &&
          (Mn(n, t),
          (r = n.stateNode),
          typeof r.componentWillUnmount == "function")
        )
          try {
            (r.props = n.memoizedProps),
              (r.state = n.memoizedState),
              r.componentWillUnmount();
          } catch (u) {
            ye(n, t, u);
          }
        $t(e, t, n);
        break;
      case 21:
        $t(e, t, n);
        break;
      case 22:
        n.mode & 1
          ? ((Ae = (r = Ae) || n.memoizedState !== null), $t(e, t, n), (Ae = r))
          : $t(e, t, n);
        break;
      default:
        $t(e, t, n);
    }
  }
  function va(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new Lf()),
        t.forEach(function (r) {
          var l = Bf.bind(null, e, r);
          n.has(r) || (n.add(r), r.then(l, l));
        });
    }
  }
  function ht(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var r = 0; r < n.length; r++) {
        var l = n[r];
        try {
          var o = e,
            i = t,
            u = i;
          e: for (; u !== null; ) {
            switch (u.tag) {
              case 5:
                (Le = u.stateNode), (mt = !1);
                break e;
              case 3:
                (Le = u.stateNode.containerInfo), (mt = !0);
                break e;
              case 4:
                (Le = u.stateNode.containerInfo), (mt = !0);
                break e;
            }
            u = u.return;
          }
          if (Le === null) throw Error(c(160));
          ha(o, i, l), (Le = null), (mt = !1);
          var s = l.alternate;
          s !== null && (s.return = null), (l.return = null);
        } catch (h) {
          ye(l, t, h);
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; ) ga(t, e), (t = t.sibling);
  }
  function ga(e, t) {
    var n = e.alternate,
      r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((ht(t, e), kt(e), r & 4)) {
          try {
            wr(3, e, e.return), kl(3, e);
          } catch (L) {
            ye(e, e.return, L);
          }
          try {
            wr(5, e, e.return);
          } catch (L) {
            ye(e, e.return, L);
          }
        }
        break;
      case 1:
        ht(t, e), kt(e), r & 512 && n !== null && Mn(n, n.return);
        break;
      case 5:
        if (
          (ht(t, e),
          kt(e),
          r & 512 && n !== null && Mn(n, n.return),
          e.flags & 32)
        ) {
          var l = e.stateNode;
          try {
            Vn(l, "");
          } catch (L) {
            ye(e, e.return, L);
          }
        }
        if (r & 4 && ((l = e.stateNode), l != null)) {
          var o = e.memoizedProps,
            i = n !== null ? n.memoizedProps : o,
            u = e.type,
            s = e.updateQueue;
          if (((e.updateQueue = null), s !== null))
            try {
              u === "input" && o.type === "radio" && o.name != null && Qi(l, o),
                Ql(u, i);
              var h = Ql(u, o);
              for (i = 0; i < s.length; i += 2) {
                var w = s[i],
                  x = s[i + 1];
                w === "style"
                  ? bi(l, x)
                  : w === "dangerouslySetInnerHTML"
                  ? Zi(l, x)
                  : w === "children"
                  ? Vn(l, x)
                  : Re(l, w, x, h);
              }
              switch (u) {
                case "input":
                  Vl(l, o);
                  break;
                case "textarea":
                  Yi(l, o);
                  break;
                case "select":
                  var g = l._wrapperState.wasMultiple;
                  l._wrapperState.wasMultiple = !!o.multiple;
                  var N = o.value;
                  N != null
                    ? dn(l, !!o.multiple, N, !1)
                    : g !== !!o.multiple &&
                      (o.defaultValue != null
                        ? dn(l, !!o.multiple, o.defaultValue, !0)
                        : dn(l, !!o.multiple, o.multiple ? [] : "", !1));
              }
              l[sr] = o;
            } catch (L) {
              ye(e, e.return, L);
            }
        }
        break;
      case 6:
        if ((ht(t, e), kt(e), r & 4)) {
          if (e.stateNode === null) throw Error(c(162));
          (l = e.stateNode), (o = e.memoizedProps);
          try {
            l.nodeValue = o;
          } catch (L) {
            ye(e, e.return, L);
          }
        }
        break;
      case 3:
        if (
          (ht(t, e), kt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            Zn(t.containerInfo);
          } catch (L) {
            ye(e, e.return, L);
          }
        break;
      case 4:
        ht(t, e), kt(e);
        break;
      case 13:
        ht(t, e),
          kt(e),
          (l = e.child),
          l.flags & 8192 &&
            ((o = l.memoizedState !== null),
            (l.stateNode.isHidden = o),
            !o ||
              (l.alternate !== null && l.alternate.memoizedState !== null) ||
              (yi = we())),
          r & 4 && va(e);
        break;
      case 22:
        if (
          ((w = n !== null && n.memoizedState !== null),
          e.mode & 1 ? ((Ae = (h = Ae) || w), ht(t, e), (Ae = h)) : ht(t, e),
          kt(e),
          r & 8192)
        ) {
          if (
            ((h = e.memoizedState !== null),
            (e.stateNode.isHidden = h) && !w && e.mode & 1)
          )
            for (R = e, w = e.child; w !== null; ) {
              for (x = R = w; R !== null; ) {
                switch (((g = R), (N = g.child), g.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    wr(4, g, g.return);
                    break;
                  case 1:
                    Mn(g, g.return);
                    var T = g.stateNode;
                    if (typeof T.componentWillUnmount == "function") {
                      (r = g), (n = g.return);
                      try {
                        (t = r),
                          (T.props = t.memoizedProps),
                          (T.state = t.memoizedState),
                          T.componentWillUnmount();
                      } catch (L) {
                        ye(r, n, L);
                      }
                    }
                    break;
                  case 5:
                    Mn(g, g.return);
                    break;
                  case 22:
                    if (g.memoizedState !== null) {
                      xa(x);
                      continue;
                    }
                }
                N !== null ? ((N.return = g), (R = N)) : xa(x);
              }
              w = w.sibling;
            }
          e: for (w = null, x = e; ; ) {
            if (x.tag === 5) {
              if (w === null) {
                w = x;
                try {
                  (l = x.stateNode),
                    h
                      ? ((o = l.style),
                        typeof o.setProperty == "function"
                          ? o.setProperty("display", "none", "important")
                          : (o.display = "none"))
                      : ((u = x.stateNode),
                        (s = x.memoizedProps.style),
                        (i =
                          s != null && s.hasOwnProperty("display")
                            ? s.display
                            : null),
                        (u.style.display = qi("display", i)));
                } catch (L) {
                  ye(e, e.return, L);
                }
              }
            } else if (x.tag === 6) {
              if (w === null)
                try {
                  x.stateNode.nodeValue = h ? "" : x.memoizedProps;
                } catch (L) {
                  ye(e, e.return, L);
                }
            } else if (
              ((x.tag !== 22 && x.tag !== 23) ||
                x.memoizedState === null ||
                x === e) &&
              x.child !== null
            ) {
              (x.child.return = x), (x = x.child);
              continue;
            }
            if (x === e) break e;
            for (; x.sibling === null; ) {
              if (x.return === null || x.return === e) break e;
              w === x && (w = null), (x = x.return);
            }
            w === x && (w = null),
              (x.sibling.return = x.return),
              (x = x.sibling);
          }
        }
        break;
      case 19:
        ht(t, e), kt(e), r & 4 && va(e);
        break;
      case 21:
        break;
      default:
        ht(t, e), kt(e);
    }
  }
  function kt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (pa(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(c(160));
        }
        switch (r.tag) {
          case 5:
            var l = r.stateNode;
            r.flags & 32 && (Vn(l, ""), (r.flags &= -33));
            var o = ma(e);
            hi(e, o, l);
            break;
          case 3:
          case 4:
            var i = r.stateNode.containerInfo,
              u = ma(e);
            mi(e, u, i);
            break;
          default:
            throw Error(c(161));
        }
      } catch (s) {
        ye(e, e.return, s);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Mf(e, t, n) {
    (R = e), ya(e);
  }
  function ya(e, t, n) {
    for (var r = (e.mode & 1) !== 0; R !== null; ) {
      var l = R,
        o = l.child;
      if (l.tag === 22 && r) {
        var i = l.memoizedState !== null || xl;
        if (!i) {
          var u = l.alternate,
            s = (u !== null && u.memoizedState !== null) || Ae;
          u = xl;
          var h = Ae;
          if (((xl = i), (Ae = s) && !h))
            for (R = l; R !== null; )
              (i = R),
                (s = i.child),
                i.tag === 22 && i.memoizedState !== null
                  ? ka(l)
                  : s !== null
                  ? ((s.return = i), (R = s))
                  : ka(l);
          for (; o !== null; ) (R = o), ya(o), (o = o.sibling);
          (R = l), (xl = u), (Ae = h);
        }
        wa(e);
      } else
        l.subtreeFlags & 8772 && o !== null ? ((o.return = l), (R = o)) : wa(e);
    }
  }
  function wa(e) {
    for (; R !== null; ) {
      var t = R;
      if (t.flags & 8772) {
        var n = t.alternate;
        try {
          if (t.flags & 8772)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                Ae || kl(5, t);
                break;
              case 1:
                var r = t.stateNode;
                if (t.flags & 4 && !Ae)
                  if (n === null) r.componentDidMount();
                  else {
                    var l =
                      t.elementType === t.type
                        ? n.memoizedProps
                        : pt(t.type, n.memoizedProps);
                    r.componentDidUpdate(
                      l,
                      n.memoizedState,
                      r.__reactInternalSnapshotBeforeUpdate
                    );
                  }
                var o = t.updateQueue;
                o !== null && xs(t, o, r);
                break;
              case 3:
                var i = t.updateQueue;
                if (i !== null) {
                  if (((n = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        n = t.child.stateNode;
                        break;
                      case 1:
                        n = t.child.stateNode;
                    }
                  xs(t, i, n);
                }
                break;
              case 5:
                var u = t.stateNode;
                if (n === null && t.flags & 4) {
                  n = u;
                  var s = t.memoizedProps;
                  switch (t.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      s.autoFocus && n.focus();
                      break;
                    case "img":
                      s.src && (n.src = s.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (t.memoizedState === null) {
                  var h = t.alternate;
                  if (h !== null) {
                    var w = h.memoizedState;
                    if (w !== null) {
                      var x = w.dehydrated;
                      x !== null && Zn(x);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(c(163));
            }
          Ae || (t.flags & 512 && pi(t));
        } catch (g) {
          ye(t, t.return, g);
        }
      }
      if (t === e) {
        R = null;
        break;
      }
      if (((n = t.sibling), n !== null)) {
        (n.return = t.return), (R = n);
        break;
      }
      R = t.return;
    }
  }
  function xa(e) {
    for (; R !== null; ) {
      var t = R;
      if (t === e) {
        R = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        (n.return = t.return), (R = n);
        break;
      }
      R = t.return;
    }
  }
  function ka(e) {
    for (; R !== null; ) {
      var t = R;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              kl(4, t);
            } catch (s) {
              ye(t, n, s);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var l = t.return;
              try {
                r.componentDidMount();
              } catch (s) {
                ye(t, l, s);
              }
            }
            var o = t.return;
            try {
              pi(t);
            } catch (s) {
              ye(t, o, s);
            }
            break;
          case 5:
            var i = t.return;
            try {
              pi(t);
            } catch (s) {
              ye(t, i, s);
            }
        }
      } catch (s) {
        ye(t, t.return, s);
      }
      if (t === e) {
        R = null;
        break;
      }
      var u = t.sibling;
      if (u !== null) {
        (u.return = t.return), (R = u);
        break;
      }
      R = t.return;
    }
  }
  var Of = Math.ceil,
    Sl = ce.ReactCurrentDispatcher,
    vi = ce.ReactCurrentOwner,
    ut = ce.ReactCurrentBatchConfig,
    X = 0,
    ze = null,
    ke = null,
    je = 0,
    tt = 0,
    On = Ut(0),
    Ce = 0,
    xr = null,
    un = 0,
    El = 0,
    gi = 0,
    kr = null,
    Ge = null,
    yi = 0,
    In = 1 / 0,
    Rt = null,
    Cl = !1,
    wi = null,
    Ht = null,
    _l = !1,
    Qt = null,
    Nl = 0,
    Sr = 0,
    xi = null,
    zl = -1,
    Pl = 0;
  function We() {
    return X & 6 ? we() : zl !== -1 ? zl : (zl = we());
  }
  function Gt(e) {
    return e.mode & 1
      ? X & 2 && je !== 0
        ? je & -je
        : gf.transition !== null
        ? (Pl === 0 && (Pl = mu()), Pl)
        : ((e = ne),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Eu(e.type))),
          e)
      : 1;
  }
  function vt(e, t, n, r) {
    if (50 < Sr) throw ((Sr = 0), (xi = null), Error(c(185)));
    Gn(e, n, r),
      (!(X & 2) || e !== ze) &&
        (e === ze && (!(X & 2) && (El |= n), Ce === 4 && Kt(e, je)),
        Ke(e, r),
        n === 1 && X === 0 && !(t.mode & 1) && ((In = we() + 500), nl && Vt()));
  }
  function Ke(e, t) {
    var n = e.callbackNode;
    vc(e, t);
    var r = Fr(e, e === ze ? je : 0);
    if (r === 0)
      n !== null && fu(n), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = r & -r), e.callbackPriority !== t)) {
      if ((n != null && fu(n), t === 1))
        e.tag === 0 ? vf(Ea.bind(null, e)) : ss(Ea.bind(null, e)),
          df(function () {
            !(X & 6) && Vt();
          }),
          (n = null);
      else {
        switch (hu(r)) {
          case 1:
            n = ql;
            break;
          case 4:
            n = du;
            break;
          case 16:
            n = Mr;
            break;
          case 536870912:
            n = pu;
            break;
          default:
            n = Mr;
        }
        n = La(n, Sa.bind(null, e));
      }
      (e.callbackPriority = t), (e.callbackNode = n);
    }
  }
  function Sa(e, t) {
    if (((zl = -1), (Pl = 0), X & 6)) throw Error(c(327));
    var n = e.callbackNode;
    if (Dn() && e.callbackNode !== n) return null;
    var r = Fr(e, e === ze ? je : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = Rl(e, r);
    else {
      t = r;
      var l = X;
      X |= 2;
      var o = _a();
      (ze !== e || je !== t) && ((Rt = null), (In = we() + 500), an(e, t));
      do
        try {
          Ff();
          break;
        } catch (u) {
          Ca(e, u);
        }
      while (!0);
      Uo(),
        (Sl.current = o),
        (X = l),
        ke !== null ? (t = 0) : ((ze = null), (je = 0), (t = Ce));
    }
    if (t !== 0) {
      if (
        (t === 2 && ((l = bl(e)), l !== 0 && ((r = l), (t = ki(e, l)))),
        t === 1)
      )
        throw ((n = xr), an(e, 0), Kt(e, r), Ke(e, we()), n);
      if (t === 6) Kt(e, r);
      else {
        if (
          ((l = e.current.alternate),
          !(r & 30) &&
            !If(l) &&
            ((t = Rl(e, r)),
            t === 2 && ((o = bl(e)), o !== 0 && ((r = o), (t = ki(e, o)))),
            t === 1))
        )
          throw ((n = xr), an(e, 0), Kt(e, r), Ke(e, we()), n);
        switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
          case 0:
          case 1:
            throw Error(c(345));
          case 2:
            cn(e, Ge, Rt);
            break;
          case 3:
            if (
              (Kt(e, r),
              (r & 130023424) === r && ((t = yi + 500 - we()), 10 < t))
            ) {
              if (Fr(e, 0) !== 0) break;
              if (((l = e.suspendedLanes), (l & r) !== r)) {
                We(), (e.pingedLanes |= e.suspendedLanes & l);
                break;
              }
              e.timeoutHandle = zo(cn.bind(null, e, Ge, Rt), t);
              break;
            }
            cn(e, Ge, Rt);
            break;
          case 4:
            if ((Kt(e, r), (r & 4194240) === r)) break;
            for (t = e.eventTimes, l = -1; 0 < r; ) {
              var i = 31 - ct(r);
              (o = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~o);
            }
            if (
              ((r = l),
              (r = we() - r),
              (r =
                (120 > r
                  ? 120
                  : 480 > r
                  ? 480
                  : 1080 > r
                  ? 1080
                  : 1920 > r
                  ? 1920
                  : 3e3 > r
                  ? 3e3
                  : 4320 > r
                  ? 4320
                  : 1960 * Of(r / 1960)) - r),
              10 < r)
            ) {
              e.timeoutHandle = zo(cn.bind(null, e, Ge, Rt), r);
              break;
            }
            cn(e, Ge, Rt);
            break;
          case 5:
            cn(e, Ge, Rt);
            break;
          default:
            throw Error(c(329));
        }
      }
    }
    return Ke(e, we()), e.callbackNode === n ? Sa.bind(null, e) : null;
  }
  function ki(e, t) {
    var n = kr;
    return (
      e.current.memoizedState.isDehydrated && (an(e, t).flags |= 256),
      (e = Rl(e, t)),
      e !== 2 && ((t = Ge), (Ge = n), t !== null && Si(t)),
      e
    );
  }
  function Si(e) {
    Ge === null ? (Ge = e) : Ge.push.apply(Ge, e);
  }
  function If(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && ((n = n.stores), n !== null))
          for (var r = 0; r < n.length; r++) {
            var l = n[r],
              o = l.getSnapshot;
            l = l.value;
            try {
              if (!ft(o(), l)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
        (n.return = t), (t = n);
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    }
    return !0;
  }
  function Kt(e, t) {
    for (
      t &= ~gi,
        t &= ~El,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes;
      0 < t;

    ) {
      var n = 31 - ct(t),
        r = 1 << n;
      (e[n] = -1), (t &= ~r);
    }
  }
  function Ea(e) {
    if (X & 6) throw Error(c(327));
    Dn();
    var t = Fr(e, 0);
    if (!(t & 1)) return Ke(e, we()), null;
    var n = Rl(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = bl(e);
      r !== 0 && ((t = r), (n = ki(e, r)));
    }
    if (n === 1) throw ((n = xr), an(e, 0), Kt(e, t), Ke(e, we()), n);
    if (n === 6) throw Error(c(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      cn(e, Ge, Rt),
      Ke(e, we()),
      null
    );
  }
  function Ei(e, t) {
    var n = X;
    X |= 1;
    try {
      return e(t);
    } finally {
      (X = n), X === 0 && ((In = we() + 500), nl && Vt());
    }
  }
  function sn(e) {
    Qt !== null && Qt.tag === 0 && !(X & 6) && Dn();
    var t = X;
    X |= 1;
    var n = ut.transition,
      r = ne;
    try {
      if (((ut.transition = null), (ne = 1), e)) return e();
    } finally {
      (ne = r), (ut.transition = n), (X = t), !(X & 6) && Vt();
    }
  }
  function Ci() {
    (tt = On.current), se(On);
  }
  function an(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), ff(n)), ke !== null))
      for (n = ke.return; n !== null; ) {
        var r = n;
        switch ((Mo(r), r.tag)) {
          case 1:
            (r = r.type.childContextTypes), r != null && el();
            break;
          case 3:
            Ln(), se($e), se(De), Go();
            break;
          case 5:
            Ho(r);
            break;
          case 4:
            Ln();
            break;
          case 13:
            se(he);
            break;
          case 19:
            se(he);
            break;
          case 10:
            Ao(r.type._context);
            break;
          case 22:
          case 23:
            Ci();
        }
        n = n.return;
      }
    if (
      ((ze = e),
      (ke = e = Yt(e.current, null)),
      (je = tt = t),
      (Ce = 0),
      (xr = null),
      (gi = El = un = 0),
      (Ge = kr = null),
      rn !== null)
    ) {
      for (t = 0; t < rn.length; t++)
        if (((n = rn[t]), (r = n.interleaved), r !== null)) {
          n.interleaved = null;
          var l = r.next,
            o = n.pending;
          if (o !== null) {
            var i = o.next;
            (o.next = l), (r.next = i);
          }
          n.pending = r;
        }
      rn = null;
    }
    return e;
  }
  function Ca(e, t) {
    do {
      var n = ke;
      try {
        if ((Uo(), (dl.current = vl), pl)) {
          for (var r = ve.memoizedState; r !== null; ) {
            var l = r.queue;
            l !== null && (l.pending = null), (r = r.next);
          }
          pl = !1;
        }
        if (
          ((on = 0),
          (Ne = Ee = ve = null),
          (mr = !1),
          (hr = 0),
          (vi.current = null),
          n === null || n.return === null)
        ) {
          (Ce = 1), (xr = t), (ke = null);
          break;
        }
        e: {
          var o = e,
            i = n.return,
            u = n,
            s = t;
          if (
            ((t = je),
            (u.flags |= 32768),
            s !== null && typeof s == "object" && typeof s.then == "function")
          ) {
            var h = s,
              w = u,
              x = w.tag;
            if (!(w.mode & 1) && (x === 0 || x === 11 || x === 15)) {
              var g = w.alternate;
              g
                ? ((w.updateQueue = g.updateQueue),
                  (w.memoizedState = g.memoizedState),
                  (w.lanes = g.lanes))
                : ((w.updateQueue = null), (w.memoizedState = null));
            }
            var N = Xs(i);
            if (N !== null) {
              (N.flags &= -257),
                Js(N, i, u, o, t),
                N.mode & 1 && Ys(o, h, t),
                (t = N),
                (s = h);
              var T = t.updateQueue;
              if (T === null) {
                var L = new Set();
                L.add(s), (t.updateQueue = L);
              } else T.add(s);
              break e;
            } else {
              if (!(t & 1)) {
                Ys(o, h, t), _i();
                break e;
              }
              s = Error(c(426));
            }
          } else if (de && u.mode & 1) {
            var xe = Xs(i);
            if (xe !== null) {
              !(xe.flags & 65536) && (xe.flags |= 256),
                Js(xe, i, u, o, t),
                Do(jn(s, u));
              break e;
            }
          }
          (o = s = jn(s, u)),
            Ce !== 4 && (Ce = 2),
            kr === null ? (kr = [o]) : kr.push(o),
            (o = i);
          do {
            switch (o.tag) {
              case 3:
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var p = Gs(o, s, t);
                ws(o, p);
                break e;
              case 1:
                u = s;
                var a = o.type,
                  m = o.stateNode;
                if (
                  !(o.flags & 128) &&
                  (typeof a.getDerivedStateFromError == "function" ||
                    (m !== null &&
                      typeof m.componentDidCatch == "function" &&
                      (Ht === null || !Ht.has(m))))
                ) {
                  (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                  var k = Ks(o, u, t);
                  ws(o, k);
                  break e;
                }
            }
            o = o.return;
          } while (o !== null);
        }
        za(n);
      } catch (j) {
        (t = j), ke === n && n !== null && (ke = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function _a() {
    var e = Sl.current;
    return (Sl.current = vl), e === null ? vl : e;
  }
  function _i() {
    (Ce === 0 || Ce === 3 || Ce === 2) && (Ce = 4),
      ze === null || (!(un & 268435455) && !(El & 268435455)) || Kt(ze, je);
  }
  function Rl(e, t) {
    var n = X;
    X |= 2;
    var r = _a();
    (ze !== e || je !== t) && ((Rt = null), an(e, t));
    do
      try {
        Df();
        break;
      } catch (l) {
        Ca(e, l);
      }
    while (!0);
    if ((Uo(), (X = n), (Sl.current = r), ke !== null)) throw Error(c(261));
    return (ze = null), (je = 0), Ce;
  }
  function Df() {
    for (; ke !== null; ) Na(ke);
  }
  function Ff() {
    for (; ke !== null && !uc(); ) Na(ke);
  }
  function Na(e) {
    var t = Ta(e.alternate, e, tt);
    (e.memoizedProps = e.pendingProps),
      t === null ? za(e) : (ke = t),
      (vi.current = null);
  }
  function za(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (((e = t.return), t.flags & 32768)) {
        if (((n = Tf(n, t)), n !== null)) {
          (n.flags &= 32767), (ke = n);
          return;
        }
        if (e !== null)
          (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
        else {
          (Ce = 6), (ke = null);
          return;
        }
      } else if (((n = Rf(n, t, tt)), n !== null)) {
        ke = n;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        ke = t;
        return;
      }
      ke = t = e;
    } while (t !== null);
    Ce === 0 && (Ce = 5);
  }
  function cn(e, t, n) {
    var r = ne,
      l = ut.transition;
    try {
      (ut.transition = null), (ne = 1), Uf(e, t, n, r);
    } finally {
      (ut.transition = l), (ne = r);
    }
    return null;
  }
  function Uf(e, t, n, r) {
    do Dn();
    while (Qt !== null);
    if (X & 6) throw Error(c(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
      throw Error(c(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var o = n.lanes | n.childLanes;
    if (
      (gc(e, o),
      e === ze && ((ke = ze = null), (je = 0)),
      (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
        _l ||
        ((_l = !0),
        La(Mr, function () {
          return Dn(), null;
        })),
      (o = (n.flags & 15990) !== 0),
      n.subtreeFlags & 15990 || o)
    ) {
      (o = ut.transition), (ut.transition = null);
      var i = ne;
      ne = 1;
      var u = X;
      (X |= 4),
        (vi.current = null),
        jf(e, n),
        ga(n, e),
        rf(_o),
        (Vr = !!Co),
        (_o = Co = null),
        (e.current = n),
        Mf(n),
        sc(),
        (X = u),
        (ne = i),
        (ut.transition = o);
    } else e.current = n;
    if (
      (_l && ((_l = !1), (Qt = e), (Nl = l)),
      (o = e.pendingLanes),
      o === 0 && (Ht = null),
      fc(n.stateNode),
      Ke(e, we()),
      t !== null)
    )
      for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
    if (Cl) throw ((Cl = !1), (e = wi), (wi = null), e);
    return (
      Nl & 1 && e.tag !== 0 && Dn(),
      (o = e.pendingLanes),
      o & 1 ? (e === xi ? Sr++ : ((Sr = 0), (xi = e))) : (Sr = 0),
      Vt(),
      null
    );
  }
  function Dn() {
    if (Qt !== null) {
      var e = hu(Nl),
        t = ut.transition,
        n = ne;
      try {
        if (((ut.transition = null), (ne = 16 > e ? 16 : e), Qt === null))
          var r = !1;
        else {
          if (((e = Qt), (Qt = null), (Nl = 0), X & 6)) throw Error(c(331));
          var l = X;
          for (X |= 4, R = e.current; R !== null; ) {
            var o = R,
              i = o.child;
            if (R.flags & 16) {
              var u = o.deletions;
              if (u !== null) {
                for (var s = 0; s < u.length; s++) {
                  var h = u[s];
                  for (R = h; R !== null; ) {
                    var w = R;
                    switch (w.tag) {
                      case 0:
                      case 11:
                      case 15:
                        wr(8, w, o);
                    }
                    var x = w.child;
                    if (x !== null) (x.return = w), (R = x);
                    else
                      for (; R !== null; ) {
                        w = R;
                        var g = w.sibling,
                          N = w.return;
                        if ((da(w), w === h)) {
                          R = null;
                          break;
                        }
                        if (g !== null) {
                          (g.return = N), (R = g);
                          break;
                        }
                        R = N;
                      }
                  }
                }
                var T = o.alternate;
                if (T !== null) {
                  var L = T.child;
                  if (L !== null) {
                    T.child = null;
                    do {
                      var xe = L.sibling;
                      (L.sibling = null), (L = xe);
                    } while (L !== null);
                  }
                }
                R = o;
              }
            }
            if (o.subtreeFlags & 2064 && i !== null) (i.return = o), (R = i);
            else
              e: for (; R !== null; ) {
                if (((o = R), o.flags & 2048))
                  switch (o.tag) {
                    case 0:
                    case 11:
                    case 15:
                      wr(9, o, o.return);
                  }
                var p = o.sibling;
                if (p !== null) {
                  (p.return = o.return), (R = p);
                  break e;
                }
                R = o.return;
              }
          }
          var a = e.current;
          for (R = a; R !== null; ) {
            i = R;
            var m = i.child;
            if (i.subtreeFlags & 2064 && m !== null) (m.return = i), (R = m);
            else
              e: for (i = a; R !== null; ) {
                if (((u = R), u.flags & 2048))
                  try {
                    switch (u.tag) {
                      case 0:
                      case 11:
                      case 15:
                        kl(9, u);
                    }
                  } catch (j) {
                    ye(u, u.return, j);
                  }
                if (u === i) {
                  R = null;
                  break e;
                }
                var k = u.sibling;
                if (k !== null) {
                  (k.return = u.return), (R = k);
                  break e;
                }
                R = u.return;
              }
          }
          if (
            ((X = l), Vt(), gt && typeof gt.onPostCommitFiberRoot == "function")
          )
            try {
              gt.onPostCommitFiberRoot(Or, e);
            } catch {}
          r = !0;
        }
        return r;
      } finally {
        (ne = n), (ut.transition = t);
      }
    }
    return !1;
  }
  function Pa(e, t, n) {
    (t = jn(n, t)),
      (t = Gs(e, t, 1)),
      (e = Wt(e, t, 1)),
      (t = We()),
      e !== null && (Gn(e, 1, t), Ke(e, t));
  }
  function ye(e, t, n) {
    if (e.tag === 3) Pa(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Pa(t, e, n);
          break;
        } else if (t.tag === 1) {
          var r = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof r.componentDidCatch == "function" &&
              (Ht === null || !Ht.has(r)))
          ) {
            (e = jn(n, e)),
              (e = Ks(t, e, 1)),
              (t = Wt(t, e, 1)),
              (e = We()),
              t !== null && (Gn(t, 1, e), Ke(t, e));
            break;
          }
        }
        t = t.return;
      }
  }
  function Af(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
      (t = We()),
      (e.pingedLanes |= e.suspendedLanes & n),
      ze === e &&
        (je & n) === n &&
        (Ce === 4 || (Ce === 3 && (je & 130023424) === je && 500 > we() - yi)
          ? an(e, 0)
          : (gi |= n)),
      Ke(e, t);
  }
  function Ra(e, t) {
    t === 0 &&
      (e.mode & 1
        ? ((t = Dr), (Dr <<= 1), !(Dr & 130023424) && (Dr = 4194304))
        : (t = 1));
    var n = We();
    (e = Nt(e, t)), e !== null && (Gn(e, t, n), Ke(e, n));
  }
  function Vf(e) {
    var t = e.memoizedState,
      n = 0;
    t !== null && (n = t.retryLane), Ra(e, n);
  }
  function Bf(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode,
          l = e.memoizedState;
        l !== null && (n = l.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(c(314));
    }
    r !== null && r.delete(t), Ra(e, n);
  }
  var Ta;
  Ta = function (e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || $e.current) Qe = !0;
      else {
        if (!(e.lanes & n) && !(t.flags & 128)) return (Qe = !1), Pf(e, t, n);
        Qe = !!(e.flags & 131072);
      }
    else (Qe = !1), de && t.flags & 1048576 && as(t, ll, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var r = t.type;
        wl(e, t), (e = t.pendingProps);
        var l = Cn(t, De.current);
        Tn(t, n), (l = Xo(null, t, r, e, l, n));
        var o = Jo();
        return (
          (t.flags |= 1),
          typeof l == "object" &&
          l !== null &&
          typeof l.render == "function" &&
          l.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              He(r) ? ((o = !0), tl(t)) : (o = !1),
              (t.memoizedState =
                l.state !== null && l.state !== void 0 ? l.state : null),
              Wo(t),
              (l.updater = gl),
              (t.stateNode = l),
              (l._reactInternals = t),
              ni(t, r, e, n),
              (t = ii(null, t, r, !0, o, n)))
            : ((t.tag = 0), de && o && jo(t), Be(null, t, l, n), (t = t.child)),
          t
        );
      case 16:
        r = t.elementType;
        e: {
          switch (
            (wl(e, t),
            (e = t.pendingProps),
            (l = r._init),
            (r = l(r._payload)),
            (t.type = r),
            (l = t.tag = $f(r)),
            (e = pt(r, e)),
            l)
          ) {
            case 0:
              t = oi(null, t, r, e, n);
              break e;
            case 1:
              t = na(null, t, r, e, n);
              break e;
            case 11:
              t = Zs(null, t, r, e, n);
              break e;
            case 14:
              t = qs(null, t, r, pt(r.type, e), n);
              break e;
          }
          throw Error(c(306, r, ""));
        }
        return t;
      case 0:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : pt(r, l)),
          oi(e, t, r, l, n)
        );
      case 1:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : pt(r, l)),
          na(e, t, r, l, n)
        );
      case 3:
        e: {
          if ((ra(t), e === null)) throw Error(c(387));
          (r = t.pendingProps),
            (o = t.memoizedState),
            (l = o.element),
            ys(e, t),
            cl(t, r, null, n);
          var i = t.memoizedState;
          if (((r = i.element), o.isDehydrated))
            if (
              ((o = {
                element: r,
                isDehydrated: !1,
                cache: i.cache,
                pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
                transitions: i.transitions,
              }),
              (t.updateQueue.baseState = o),
              (t.memoizedState = o),
              t.flags & 256)
            ) {
              (l = jn(Error(c(423)), t)), (t = la(e, t, r, n, l));
              break e;
            } else if (r !== l) {
              (l = jn(Error(c(424)), t)), (t = la(e, t, r, n, l));
              break e;
            } else
              for (
                et = Ft(t.stateNode.containerInfo.firstChild),
                  be = t,
                  de = !0,
                  dt = null,
                  n = vs(t, null, r, n),
                  t.child = n;
                n;

              )
                (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
          else {
            if ((zn(), r === l)) {
              t = Pt(e, t, n);
              break e;
            }
            Be(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          ks(t),
          e === null && Io(t),
          (r = t.type),
          (l = t.pendingProps),
          (o = e !== null ? e.memoizedProps : null),
          (i = l.children),
          No(r, l) ? (i = null) : o !== null && No(r, o) && (t.flags |= 32),
          ta(e, t),
          Be(e, t, i, n),
          t.child
        );
      case 6:
        return e === null && Io(t), null;
      case 13:
        return oa(e, t, n);
      case 4:
        return (
          $o(t, t.stateNode.containerInfo),
          (r = t.pendingProps),
          e === null ? (t.child = Pn(t, null, r, n)) : Be(e, t, r, n),
          t.child
        );
      case 11:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : pt(r, l)),
          Zs(e, t, r, l, n)
        );
      case 7:
        return Be(e, t, t.pendingProps, n), t.child;
      case 8:
        return Be(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return Be(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (
            ((r = t.type._context),
            (l = t.pendingProps),
            (o = t.memoizedProps),
            (i = l.value),
            oe(ul, r._currentValue),
            (r._currentValue = i),
            o !== null)
          )
            if (ft(o.value, i)) {
              if (o.children === l.children && !$e.current) {
                t = Pt(e, t, n);
                break e;
              }
            } else
              for (o = t.child, o !== null && (o.return = t); o !== null; ) {
                var u = o.dependencies;
                if (u !== null) {
                  i = o.child;
                  for (var s = u.firstContext; s !== null; ) {
                    if (s.context === r) {
                      if (o.tag === 1) {
                        (s = zt(-1, n & -n)), (s.tag = 2);
                        var h = o.updateQueue;
                        if (h !== null) {
                          h = h.shared;
                          var w = h.pending;
                          w === null
                            ? (s.next = s)
                            : ((s.next = w.next), (w.next = s)),
                            (h.pending = s);
                        }
                      }
                      (o.lanes |= n),
                        (s = o.alternate),
                        s !== null && (s.lanes |= n),
                        Vo(o.return, n, t),
                        (u.lanes |= n);
                      break;
                    }
                    s = s.next;
                  }
                } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
                else if (o.tag === 18) {
                  if (((i = o.return), i === null)) throw Error(c(341));
                  (i.lanes |= n),
                    (u = i.alternate),
                    u !== null && (u.lanes |= n),
                    Vo(i, n, t),
                    (i = o.sibling);
                } else i = o.child;
                if (i !== null) i.return = o;
                else
                  for (i = o; i !== null; ) {
                    if (i === t) {
                      i = null;
                      break;
                    }
                    if (((o = i.sibling), o !== null)) {
                      (o.return = i.return), (i = o);
                      break;
                    }
                    i = i.return;
                  }
                o = i;
              }
          Be(e, t, l.children, n), (t = t.child);
        }
        return t;
      case 9:
        return (
          (l = t.type),
          (r = t.pendingProps.children),
          Tn(t, n),
          (l = ot(l)),
          (r = r(l)),
          (t.flags |= 1),
          Be(e, t, r, n),
          t.child
        );
      case 14:
        return (
          (r = t.type),
          (l = pt(r, t.pendingProps)),
          (l = pt(r.type, l)),
          qs(e, t, r, l, n)
        );
      case 15:
        return bs(e, t, t.type, t.pendingProps, n);
      case 17:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : pt(r, l)),
          wl(e, t),
          (t.tag = 1),
          He(r) ? ((e = !0), tl(t)) : (e = !1),
          Tn(t, n),
          Hs(t, r, l),
          ni(t, r, l, n),
          ii(null, t, r, !0, e, n)
        );
      case 19:
        return ua(e, t, n);
      case 22:
        return ea(e, t, n);
    }
    throw Error(c(156, t.tag));
  };
  function La(e, t) {
    return cu(e, t);
  }
  function Wf(e, t, n, r) {
    (this.tag = e),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = r),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function st(e, t, n, r) {
    return new Wf(e, t, n, r);
  }
  function Ni(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function $f(e) {
    if (typeof e == "function") return Ni(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === Y)) return 11;
      if (e === Je) return 14;
    }
    return 2;
  }
  function Yt(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = st(e.tag, t, e.key, e.mode)),
          (n.elementType = e.elementType),
          (n.type = e.type),
          (n.stateNode = e.stateNode),
          (n.alternate = e),
          (e.alternate = n))
        : ((n.pendingProps = t),
          (n.type = e.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = e.flags & 14680064),
      (n.childLanes = e.childLanes),
      (n.lanes = e.lanes),
      (n.child = e.child),
      (n.memoizedProps = e.memoizedProps),
      (n.memoizedState = e.memoizedState),
      (n.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (n.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (n.sibling = e.sibling),
      (n.index = e.index),
      (n.ref = e.ref),
      n
    );
  }
  function Tl(e, t, n, r, l, o) {
    var i = 2;
    if (((r = e), typeof e == "function")) Ni(e) && (i = 1);
    else if (typeof e == "string") i = 5;
    else
      e: switch (e) {
        case Te:
          return fn(n.children, l, o, t);
        case Ve:
          (i = 8), (l |= 8);
          break;
        case nt:
          return (
            (e = st(12, n, t, l | 2)), (e.elementType = nt), (e.lanes = o), e
          );
        case Oe:
          return (e = st(13, n, t, l)), (e.elementType = Oe), (e.lanes = o), e;
        case Ie:
          return (e = st(19, n, t, l)), (e.elementType = Ie), (e.lanes = o), e;
        case ie:
          return Ll(n, l, o, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case Xe:
                i = 10;
                break e;
              case at:
                i = 9;
                break e;
              case Y:
                i = 11;
                break e;
              case Je:
                i = 14;
                break e;
              case Se:
                (i = 16), (r = null);
                break e;
            }
          throw Error(c(130, e == null ? e : typeof e, ""));
      }
    return (
      (t = st(i, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = o), t
    );
  }
  function fn(e, t, n, r) {
    return (e = st(7, e, r, t)), (e.lanes = n), e;
  }
  function Ll(e, t, n, r) {
    return (
      (e = st(22, e, r, t)),
      (e.elementType = ie),
      (e.lanes = n),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function zi(e, t, n) {
    return (e = st(6, e, null, t)), (e.lanes = n), e;
  }
  function Pi(e, t, n) {
    return (
      (t = st(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function Hf(e, t, n, r, l) {
    (this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = eo(0)),
      (this.expirationTimes = eo(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = eo(0)),
      (this.identifierPrefix = r),
      (this.onRecoverableError = l),
      (this.mutableSourceEagerHydrationData = null);
  }
  function Ri(e, t, n, r, l, o, i, u, s) {
    return (
      (e = new Hf(e, t, n, u, s)),
      t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
      (o = st(3, null, null, t)),
      (e.current = o),
      (o.stateNode = e),
      (o.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      Wo(o),
      e
    );
  }
  function Qf(e, t, n) {
    var r =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: _e,
      key: r == null ? null : "" + r,
      children: e,
      containerInfo: t,
      implementation: n,
    };
  }
  function ja(e) {
    if (!e) return At;
    e = e._reactInternals;
    e: {
      if (qt(e) !== e || e.tag !== 1) throw Error(c(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (He(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(c(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (He(n)) return is(e, n, t);
    }
    return t;
  }
  function Ma(e, t, n, r, l, o, i, u, s) {
    return (
      (e = Ri(n, r, !0, e, l, o, i, u, s)),
      (e.context = ja(null)),
      (n = e.current),
      (r = We()),
      (l = Gt(n)),
      (o = zt(r, l)),
      (o.callback = t ?? null),
      Wt(n, o, l),
      (e.current.lanes = l),
      Gn(e, l, r),
      Ke(e, r),
      e
    );
  }
  function jl(e, t, n, r) {
    var l = t.current,
      o = We(),
      i = Gt(l);
    return (
      (n = ja(n)),
      t.context === null ? (t.context = n) : (t.pendingContext = n),
      (t = zt(o, i)),
      (t.payload = { element: e }),
      (r = r === void 0 ? null : r),
      r !== null && (t.callback = r),
      (e = Wt(l, t, i)),
      e !== null && (vt(e, l, i, o), al(e, l, i)),
      i
    );
  }
  function Ml(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Oa(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Ti(e, t) {
    Oa(e, t), (e = e.alternate) && Oa(e, t);
  }
  function Gf() {
    return null;
  }
  var Ia =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function Li(e) {
    this._internalRoot = e;
  }
  (Ol.prototype.render = Li.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(c(409));
      jl(e, t, null, null);
    }),
    (Ol.prototype.unmount = Li.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          sn(function () {
            jl(null, e, null, null);
          }),
            (t[St] = null);
        }
      });
  function Ol(e) {
    this._internalRoot = e;
  }
  Ol.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = yu();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Ot.length && t !== 0 && t < Ot[n].priority; n++);
      Ot.splice(n, 0, e), n === 0 && ku(e);
    }
  };
  function ji(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function Il(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function Da() {}
  function Kf(e, t, n, r, l) {
    if (l) {
      if (typeof r == "function") {
        var o = r;
        r = function () {
          var h = Ml(i);
          o.call(h);
        };
      }
      var i = Ma(t, r, e, 0, null, !1, !1, "", Da);
      return (
        (e._reactRootContainer = i),
        (e[St] = i.current),
        ir(e.nodeType === 8 ? e.parentNode : e),
        sn(),
        i
      );
    }
    for (; (l = e.lastChild); ) e.removeChild(l);
    if (typeof r == "function") {
      var u = r;
      r = function () {
        var h = Ml(s);
        u.call(h);
      };
    }
    var s = Ri(e, 0, !1, null, null, !1, !1, "", Da);
    return (
      (e._reactRootContainer = s),
      (e[St] = s.current),
      ir(e.nodeType === 8 ? e.parentNode : e),
      sn(function () {
        jl(t, s, n, r);
      }),
      s
    );
  }
  function Dl(e, t, n, r, l) {
    var o = n._reactRootContainer;
    if (o) {
      var i = o;
      if (typeof l == "function") {
        var u = l;
        l = function () {
          var s = Ml(i);
          u.call(s);
        };
      }
      jl(t, i, e, l);
    } else i = Kf(n, t, e, l, r);
    return Ml(i);
  }
  (vu = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Qn(t.pendingLanes);
          n !== 0 &&
            (to(t, n | 1), Ke(t, we()), !(X & 6) && ((In = we() + 500), Vt()));
        }
        break;
      case 13:
        sn(function () {
          var r = Nt(e, 1);
          if (r !== null) {
            var l = We();
            vt(r, e, 1, l);
          }
        }),
          Ti(e, 1);
    }
  }),
    (no = function (e) {
      if (e.tag === 13) {
        var t = Nt(e, 134217728);
        if (t !== null) {
          var n = We();
          vt(t, e, 134217728, n);
        }
        Ti(e, 134217728);
      }
    }),
    (gu = function (e) {
      if (e.tag === 13) {
        var t = Gt(e),
          n = Nt(e, t);
        if (n !== null) {
          var r = We();
          vt(n, e, t, r);
        }
        Ti(e, t);
      }
    }),
    (yu = function () {
      return ne;
    }),
    (wu = function (e, t) {
      var n = ne;
      try {
        return (ne = e), t();
      } finally {
        ne = n;
      }
    }),
    (Yl = function (e, t, n) {
      switch (t) {
        case "input":
          if ((Vl(e, n), (t = n.name), n.type === "radio" && t != null)) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll(
                "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
              ),
                t = 0;
              t < n.length;
              t++
            ) {
              var r = n[t];
              if (r !== e && r.form === e.form) {
                var l = br(r);
                if (!l) throw Error(c(90));
                $i(r), Vl(r, l);
              }
            }
          }
          break;
        case "textarea":
          Yi(e, n);
          break;
        case "select":
          (t = n.value), t != null && dn(e, !!n.multiple, t, !1);
      }
    }),
    (ru = Ei),
    (lu = sn);
  var Yf = { usingClientEntryPoint: !1, Events: [ar, Sn, br, tu, nu, Ei] },
    Er = {
      findFiberByHostInstance: bt,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    Xf = {
      bundleType: Er.bundleType,
      version: Er.version,
      rendererPackageName: Er.rendererPackageName,
      rendererConfig: Er.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: ce.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return (e = su(e)), e === null ? null : e.stateNode;
      },
      findFiberByHostInstance: Er.findFiberByHostInstance || Gf,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Fl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Fl.isDisabled && Fl.supportsFiber)
      try {
        (Or = Fl.inject(Xf)), (gt = Fl);
      } catch {}
  }
  return (
    (Ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Yf),
    (Ye.createPortal = function (e, t) {
      var n =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!ji(t)) throw Error(c(200));
      return Qf(e, t, null, n);
    }),
    (Ye.createRoot = function (e, t) {
      if (!ji(e)) throw Error(c(299));
      var n = !1,
        r = "",
        l = Ia;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
        (t = Ri(e, 1, !1, null, null, n, !1, r, l)),
        (e[St] = t.current),
        ir(e.nodeType === 8 ? e.parentNode : e),
        new Li(t)
      );
    }),
    (Ye.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function"
          ? Error(c(188))
          : ((e = Object.keys(e).join(",")), Error(c(268, e)));
      return (e = su(t)), (e = e === null ? null : e.stateNode), e;
    }),
    (Ye.flushSync = function (e) {
      return sn(e);
    }),
    (Ye.hydrate = function (e, t, n) {
      if (!Il(t)) throw Error(c(200));
      return Dl(null, e, t, !0, n);
    }),
    (Ye.hydrateRoot = function (e, t, n) {
      if (!ji(e)) throw Error(c(405));
      var r = (n != null && n.hydratedSources) || null,
        l = !1,
        o = "",
        i = Ia;
      if (
        (n != null &&
          (n.unstable_strictMode === !0 && (l = !0),
          n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
        (t = Ma(t, null, e, 1, n ?? null, l, !1, o, i)),
        (e[St] = t.current),
        ir(e),
        r)
      )
        for (e = 0; e < r.length; e++)
          (n = r[e]),
            (l = n._getVersion),
            (l = l(n._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [n, l])
              : t.mutableSourceEagerHydrationData.push(n, l);
      return new Ol(t);
    }),
    (Ye.render = function (e, t, n) {
      if (!Il(t)) throw Error(c(200));
      return Dl(null, e, t, !1, n);
    }),
    (Ye.unmountComponentAtNode = function (e) {
      if (!Il(e)) throw Error(c(40));
      return e._reactRootContainer
        ? (sn(function () {
            Dl(null, null, e, !1, function () {
              (e._reactRootContainer = null), (e[St] = null);
            });
          }),
          !0)
        : !1;
    }),
    (Ye.unstable_batchedUpdates = Ei),
    (Ye.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
      if (!Il(n)) throw Error(c(200));
      if (e == null || e._reactInternals === void 0) throw Error(c(38));
      return Dl(e, t, n, !1, r);
    }),
    (Ye.version = "18.3.1-next-f1338f8080-20240426"),
    Ye
  );
}
var Ha;
function rd() {
  if (Ha) return Ii.exports;
  Ha = 1;
  function d() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(d);
      } catch (v) {
        console.error(v);
      }
  }
  return d(), (Ii.exports = nd()), Ii.exports;
}
var Qa;
function ld() {
  if (Qa) return Ul;
  Qa = 1;
  var d = rd();
  return (Ul.createRoot = d.createRoot), (Ul.hydrateRoot = d.hydrateRoot), Ul;
}
var od = ld();
function Ya(d) {
  var v,
    c,
    S = "";
  if (typeof d == "string" || typeof d == "number") S += d;
  else if (typeof d == "object")
    if (Array.isArray(d)) {
      var _ = d.length;
      for (v = 0; v < _; v++)
        d[v] && (c = Ya(d[v])) && (S && (S += " "), (S += c));
    } else for (c in d) d[c] && (S && (S += " "), (S += c));
  return S;
}
function id() {
  for (var d, v, c = 0, S = "", _ = arguments.length; c < _; c++)
    (d = arguments[c]) && (v = Ya(d)) && (S && (S += " "), (S += v));
  return S;
}
const Wi = "-",
  ud = (d) => {
    const v = ad(d),
      { conflictingClassGroups: c, conflictingClassGroupModifiers: S } = d;
    return {
      getClassGroupId: (M) => {
        const P = M.split(Wi);
        return P[0] === "" && P.length !== 1 && P.shift(), Xa(P, v) || sd(M);
      },
      getConflictingClassGroupIds: (M, P) => {
        const U = c[M] || [];
        return P && S[M] ? [...U, ...S[M]] : U;
      },
    };
  },
  Xa = (d, v) => {
    var M;
    if (d.length === 0) return v.classGroupId;
    const c = d[0],
      S = v.nextPart.get(c),
      _ = S ? Xa(d.slice(1), S) : void 0;
    if (_) return _;
    if (v.validators.length === 0) return;
    const E = d.join(Wi);
    return (M = v.validators.find(({ validator: P }) => P(E))) == null
      ? void 0
      : M.classGroupId;
  },
  Ga = /^\[(.+)\]$/,
  sd = (d) => {
    if (Ga.test(d)) {
      const v = Ga.exec(d)[1],
        c = v == null ? void 0 : v.substring(0, v.indexOf(":"));
      if (c) return "arbitrary.." + c;
    }
  },
  ad = (d) => {
    const { theme: v, prefix: c } = d,
      S = { nextPart: new Map(), validators: [] };
    return (
      fd(Object.entries(d.classGroups), c).forEach(([E, M]) => {
        Ai(M, S, E, v);
      }),
      S
    );
  },
  Ai = (d, v, c, S) => {
    d.forEach((_) => {
      if (typeof _ == "string") {
        const E = _ === "" ? v : Ka(v, _);
        E.classGroupId = c;
        return;
      }
      if (typeof _ == "function") {
        if (cd(_)) {
          Ai(_(S), v, c, S);
          return;
        }
        v.validators.push({ validator: _, classGroupId: c });
        return;
      }
      Object.entries(_).forEach(([E, M]) => {
        Ai(M, Ka(v, E), c, S);
      });
    });
  },
  Ka = (d, v) => {
    let c = d;
    return (
      v.split(Wi).forEach((S) => {
        c.nextPart.has(S) ||
          c.nextPart.set(S, { nextPart: new Map(), validators: [] }),
          (c = c.nextPart.get(S));
      }),
      c
    );
  },
  cd = (d) => d.isThemeGetter,
  fd = (d, v) =>
    v
      ? d.map(([c, S]) => {
          const _ = S.map((E) =>
            typeof E == "string"
              ? v + E
              : typeof E == "object"
              ? Object.fromEntries(
                  Object.entries(E).map(([M, P]) => [v + M, P])
                )
              : E
          );
          return [c, _];
        })
      : d,
  dd = (d) => {
    if (d < 1) return { get: () => {}, set: () => {} };
    let v = 0,
      c = new Map(),
      S = new Map();
    const _ = (E, M) => {
      c.set(E, M), v++, v > d && ((v = 0), (S = c), (c = new Map()));
    };
    return {
      get(E) {
        let M = c.get(E);
        if (M !== void 0) return M;
        if ((M = S.get(E)) !== void 0) return _(E, M), M;
      },
      set(E, M) {
        c.has(E) ? c.set(E, M) : _(E, M);
      },
    };
  },
  Ja = "!",
  pd = (d) => {
    const { separator: v, experimentalParseClassName: c } = d,
      S = v.length === 1,
      _ = v[0],
      E = v.length,
      M = (P) => {
        const U = [];
        let J = 0,
          Z = 0,
          K;
        for (let F = 0; F < P.length; F++) {
          let re = P[F];
          if (J === 0) {
            if (re === _ && (S || P.slice(F, F + E) === v)) {
              U.push(P.slice(Z, F)), (Z = F + E);
              continue;
            }
            if (re === "/") {
              K = F;
              continue;
            }
          }
          re === "[" ? J++ : re === "]" && J--;
        }
        const Q = U.length === 0 ? P : P.substring(Z),
          ge = Q.startsWith(Ja),
          pe = ge ? Q.substring(1) : Q,
          V = K && K > Z ? K - Z : void 0;
        return {
          modifiers: U,
          hasImportantModifier: ge,
          baseClassName: pe,
          maybePostfixModifierPosition: V,
        };
      };
    return c ? (P) => c({ className: P, parseClassName: M }) : M;
  },
  md = (d) => {
    if (d.length <= 1) return d;
    const v = [];
    let c = [];
    return (
      d.forEach((S) => {
        S[0] === "[" ? (v.push(...c.sort(), S), (c = [])) : c.push(S);
      }),
      v.push(...c.sort()),
      v
    );
  },
  hd = (d) => ({ cache: dd(d.cacheSize), parseClassName: pd(d), ...ud(d) }),
  vd = /\s+/,
  gd = (d, v) => {
    const {
        parseClassName: c,
        getClassGroupId: S,
        getConflictingClassGroupIds: _,
      } = v,
      E = [],
      M = d.trim().split(vd);
    let P = "";
    for (let U = M.length - 1; U >= 0; U -= 1) {
      const J = M[U],
        {
          modifiers: Z,
          hasImportantModifier: K,
          baseClassName: Q,
          maybePostfixModifierPosition: ge,
        } = c(J);
      let pe = !!ge,
        V = S(pe ? Q.substring(0, ge) : Q);
      if (!V) {
        if (!pe) {
          P = J + (P.length > 0 ? " " + P : P);
          continue;
        }
        if (((V = S(Q)), !V)) {
          P = J + (P.length > 0 ? " " + P : P);
          continue;
        }
        pe = !1;
      }
      const F = md(Z).join(":"),
        re = K ? F + Ja : F,
        me = re + V;
      if (E.includes(me)) continue;
      E.push(me);
      const Re = _(V, pe);
      for (let ce = 0; ce < Re.length; ++ce) {
        const Me = Re[ce];
        E.push(re + Me);
      }
      P = J + (P.length > 0 ? " " + P : P);
    }
    return P;
  };
function yd() {
  let d = 0,
    v,
    c,
    S = "";
  for (; d < arguments.length; )
    (v = arguments[d++]) && (c = Za(v)) && (S && (S += " "), (S += c));
  return S;
}
const Za = (d) => {
  if (typeof d == "string") return d;
  let v,
    c = "";
  for (let S = 0; S < d.length; S++)
    d[S] && (v = Za(d[S])) && (c && (c += " "), (c += v));
  return c;
};
function wd(d, ...v) {
  let c,
    S,
    _,
    E = M;
  function M(U) {
    const J = v.reduce((Z, K) => K(Z), d());
    return (c = hd(J)), (S = c.cache.get), (_ = c.cache.set), (E = P), P(U);
  }
  function P(U) {
    const J = S(U);
    if (J) return J;
    const Z = gd(U, c);
    return _(U, Z), Z;
  }
  return function () {
    return E(yd.apply(null, arguments));
  };
}
const ae = (d) => {
    const v = (c) => c[d] || [];
    return (v.isThemeGetter = !0), v;
  },
  qa = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  xd = /^\d+\/\d+$/,
  kd = new Set(["px", "full", "screen"]),
  Sd = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  Ed =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  Cd = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  _d = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  Nd =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  Tt = (d) => Fn(d) || kd.has(d) || xd.test(d),
  Jt = (d) => Un(d, "length", Od),
  Fn = (d) => !!d && !Number.isNaN(Number(d)),
  Ui = (d) => Un(d, "number", Fn),
  _r = (d) => !!d && Number.isInteger(Number(d)),
  zd = (d) => d.endsWith("%") && Fn(d.slice(0, -1)),
  B = (d) => qa.test(d),
  Zt = (d) => Sd.test(d),
  Pd = new Set(["length", "size", "percentage"]),
  Rd = (d) => Un(d, Pd, ba),
  Td = (d) => Un(d, "position", ba),
  Ld = new Set(["image", "url"]),
  jd = (d) => Un(d, Ld, Dd),
  Md = (d) => Un(d, "", Id),
  Nr = () => !0,
  Un = (d, v, c) => {
    const S = qa.exec(d);
    return S
      ? S[1]
        ? typeof v == "string"
          ? S[1] === v
          : v.has(S[1])
        : c(S[2])
      : !1;
  },
  Od = (d) => Ed.test(d) && !Cd.test(d),
  ba = () => !1,
  Id = (d) => _d.test(d),
  Dd = (d) => Nd.test(d),
  Fd = () => {
    const d = ae("colors"),
      v = ae("spacing"),
      c = ae("blur"),
      S = ae("brightness"),
      _ = ae("borderColor"),
      E = ae("borderRadius"),
      M = ae("borderSpacing"),
      P = ae("borderWidth"),
      U = ae("contrast"),
      J = ae("grayscale"),
      Z = ae("hueRotate"),
      K = ae("invert"),
      Q = ae("gap"),
      ge = ae("gradientColorStops"),
      pe = ae("gradientColorStopPositions"),
      V = ae("inset"),
      F = ae("margin"),
      re = ae("opacity"),
      me = ae("padding"),
      Re = ae("saturate"),
      ce = ae("scale"),
      Me = ae("sepia"),
      _e = ae("skew"),
      Te = ae("space"),
      Ve = ae("translate"),
      nt = () => ["auto", "contain", "none"],
      Xe = () => ["auto", "hidden", "clip", "visible", "scroll"],
      at = () => ["auto", B, v],
      Y = () => [B, v],
      Oe = () => ["", Tt, Jt],
      Ie = () => ["auto", Fn, B],
      Je = () => [
        "bottom",
        "center",
        "left",
        "left-bottom",
        "left-top",
        "right",
        "right-bottom",
        "right-top",
        "top",
      ],
      Se = () => ["solid", "dashed", "dotted", "double", "none"],
      ie = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
      ],
      C = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
      ],
      O = () => ["", "0", B],
      z = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      f = () => [Fn, B];
    return {
      cacheSize: 500,
      separator: ":",
      theme: {
        colors: [Nr],
        spacing: [Tt, Jt],
        blur: ["none", "", Zt, B],
        brightness: f(),
        borderColor: [d],
        borderRadius: ["none", "", "full", Zt, B],
        borderSpacing: Y(),
        borderWidth: Oe(),
        contrast: f(),
        grayscale: O(),
        hueRotate: f(),
        invert: O(),
        gap: Y(),
        gradientColorStops: [d],
        gradientColorStopPositions: [zd, Jt],
        inset: at(),
        margin: at(),
        opacity: f(),
        padding: Y(),
        saturate: f(),
        scale: f(),
        sepia: O(),
        skew: f(),
        space: Y(),
        translate: Y(),
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", "video", B] }],
        container: ["container"],
        columns: [{ columns: [Zt] }],
        "break-after": [{ "break-after": z() }],
        "break-before": [{ "break-before": z() }],
        "break-inside": [
          { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
        ],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [
          { object: ["contain", "cover", "fill", "none", "scale-down"] },
        ],
        "object-position": [{ object: [...Je(), B] }],
        overflow: [{ overflow: Xe() }],
        "overflow-x": [{ "overflow-x": Xe() }],
        "overflow-y": [{ "overflow-y": Xe() }],
        overscroll: [{ overscroll: nt() }],
        "overscroll-x": [{ "overscroll-x": nt() }],
        "overscroll-y": [{ "overscroll-y": nt() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: [V] }],
        "inset-x": [{ "inset-x": [V] }],
        "inset-y": [{ "inset-y": [V] }],
        start: [{ start: [V] }],
        end: [{ end: [V] }],
        top: [{ top: [V] }],
        right: [{ right: [V] }],
        bottom: [{ bottom: [V] }],
        left: [{ left: [V] }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: ["auto", _r, B] }],
        basis: [{ basis: at() }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
        flex: [{ flex: ["1", "auto", "initial", "none", B] }],
        grow: [{ grow: O() }],
        shrink: [{ shrink: O() }],
        order: [{ order: ["first", "last", "none", _r, B] }],
        "grid-cols": [{ "grid-cols": [Nr] }],
        "col-start-end": [{ col: ["auto", { span: ["full", _r, B] }, B] }],
        "col-start": [{ "col-start": Ie() }],
        "col-end": [{ "col-end": Ie() }],
        "grid-rows": [{ "grid-rows": [Nr] }],
        "row-start-end": [{ row: ["auto", { span: [_r, B] }, B] }],
        "row-start": [{ "row-start": Ie() }],
        "row-end": [{ "row-end": Ie() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", B] }],
        "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", B] }],
        gap: [{ gap: [Q] }],
        "gap-x": [{ "gap-x": [Q] }],
        "gap-y": [{ "gap-y": [Q] }],
        "justify-content": [{ justify: ["normal", ...C()] }],
        "justify-items": [
          { "justify-items": ["start", "end", "center", "stretch"] },
        ],
        "justify-self": [
          { "justify-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        "align-content": [{ content: ["normal", ...C(), "baseline"] }],
        "align-items": [
          { items: ["start", "end", "center", "baseline", "stretch"] },
        ],
        "align-self": [
          { self: ["auto", "start", "end", "center", "stretch", "baseline"] },
        ],
        "place-content": [{ "place-content": [...C(), "baseline"] }],
        "place-items": [
          { "place-items": ["start", "end", "center", "baseline", "stretch"] },
        ],
        "place-self": [
          { "place-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        p: [{ p: [me] }],
        px: [{ px: [me] }],
        py: [{ py: [me] }],
        ps: [{ ps: [me] }],
        pe: [{ pe: [me] }],
        pt: [{ pt: [me] }],
        pr: [{ pr: [me] }],
        pb: [{ pb: [me] }],
        pl: [{ pl: [me] }],
        m: [{ m: [F] }],
        mx: [{ mx: [F] }],
        my: [{ my: [F] }],
        ms: [{ ms: [F] }],
        me: [{ me: [F] }],
        mt: [{ mt: [F] }],
        mr: [{ mr: [F] }],
        mb: [{ mb: [F] }],
        ml: [{ ml: [F] }],
        "space-x": [{ "space-x": [Te] }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": [Te] }],
        "space-y-reverse": ["space-y-reverse"],
        w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", B, v] }],
        "min-w": [{ "min-w": [B, v, "min", "max", "fit"] }],
        "max-w": [
          {
            "max-w": [
              B,
              v,
              "none",
              "full",
              "min",
              "max",
              "fit",
              "prose",
              { screen: [Zt] },
              Zt,
            ],
          },
        ],
        h: [{ h: [B, v, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
        "min-h": [
          { "min-h": [B, v, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        "max-h": [
          { "max-h": [B, v, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        size: [{ size: [B, v, "auto", "min", "max", "fit"] }],
        "font-size": [{ text: ["base", Zt, Jt] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [
          {
            font: [
              "thin",
              "extralight",
              "light",
              "normal",
              "medium",
              "semibold",
              "bold",
              "extrabold",
              "black",
              Ui,
            ],
          },
        ],
        "font-family": [{ font: [Nr] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [
          {
            tracking: [
              "tighter",
              "tight",
              "normal",
              "wide",
              "wider",
              "widest",
              B,
            ],
          },
        ],
        "line-clamp": [{ "line-clamp": ["none", Fn, Ui] }],
        leading: [
          {
            leading: [
              "none",
              "tight",
              "snug",
              "normal",
              "relaxed",
              "loose",
              Tt,
              B,
            ],
          },
        ],
        "list-image": [{ "list-image": ["none", B] }],
        "list-style-type": [{ list: ["none", "disc", "decimal", B] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "placeholder-color": [{ placeholder: [d] }],
        "placeholder-opacity": [{ "placeholder-opacity": [re] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "text-color": [{ text: [d] }],
        "text-opacity": [{ "text-opacity": [re] }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [...Se(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: ["auto", "from-font", Tt, Jt] },
        ],
        "underline-offset": [{ "underline-offset": ["auto", Tt, B] }],
        "text-decoration-color": [{ decoration: [d] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: Y() }],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              B,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces",
            ],
          },
        ],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", B] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-opacity": [{ "bg-opacity": [re] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: [...Je(), Td] }],
        "bg-repeat": [
          { bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
        ],
        "bg-size": [{ bg: ["auto", "cover", "contain", Rd] }],
        "bg-image": [
          {
            bg: [
              "none",
              { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
              jd,
            ],
          },
        ],
        "bg-color": [{ bg: [d] }],
        "gradient-from-pos": [{ from: [pe] }],
        "gradient-via-pos": [{ via: [pe] }],
        "gradient-to-pos": [{ to: [pe] }],
        "gradient-from": [{ from: [ge] }],
        "gradient-via": [{ via: [ge] }],
        "gradient-to": [{ to: [ge] }],
        rounded: [{ rounded: [E] }],
        "rounded-s": [{ "rounded-s": [E] }],
        "rounded-e": [{ "rounded-e": [E] }],
        "rounded-t": [{ "rounded-t": [E] }],
        "rounded-r": [{ "rounded-r": [E] }],
        "rounded-b": [{ "rounded-b": [E] }],
        "rounded-l": [{ "rounded-l": [E] }],
        "rounded-ss": [{ "rounded-ss": [E] }],
        "rounded-se": [{ "rounded-se": [E] }],
        "rounded-ee": [{ "rounded-ee": [E] }],
        "rounded-es": [{ "rounded-es": [E] }],
        "rounded-tl": [{ "rounded-tl": [E] }],
        "rounded-tr": [{ "rounded-tr": [E] }],
        "rounded-br": [{ "rounded-br": [E] }],
        "rounded-bl": [{ "rounded-bl": [E] }],
        "border-w": [{ border: [P] }],
        "border-w-x": [{ "border-x": [P] }],
        "border-w-y": [{ "border-y": [P] }],
        "border-w-s": [{ "border-s": [P] }],
        "border-w-e": [{ "border-e": [P] }],
        "border-w-t": [{ "border-t": [P] }],
        "border-w-r": [{ "border-r": [P] }],
        "border-w-b": [{ "border-b": [P] }],
        "border-w-l": [{ "border-l": [P] }],
        "border-opacity": [{ "border-opacity": [re] }],
        "border-style": [{ border: [...Se(), "hidden"] }],
        "divide-x": [{ "divide-x": [P] }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": [P] }],
        "divide-y-reverse": ["divide-y-reverse"],
        "divide-opacity": [{ "divide-opacity": [re] }],
        "divide-style": [{ divide: Se() }],
        "border-color": [{ border: [_] }],
        "border-color-x": [{ "border-x": [_] }],
        "border-color-y": [{ "border-y": [_] }],
        "border-color-s": [{ "border-s": [_] }],
        "border-color-e": [{ "border-e": [_] }],
        "border-color-t": [{ "border-t": [_] }],
        "border-color-r": [{ "border-r": [_] }],
        "border-color-b": [{ "border-b": [_] }],
        "border-color-l": [{ "border-l": [_] }],
        "divide-color": [{ divide: [_] }],
        "outline-style": [{ outline: ["", ...Se()] }],
        "outline-offset": [{ "outline-offset": [Tt, B] }],
        "outline-w": [{ outline: [Tt, Jt] }],
        "outline-color": [{ outline: [d] }],
        "ring-w": [{ ring: Oe() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: [d] }],
        "ring-opacity": [{ "ring-opacity": [re] }],
        "ring-offset-w": [{ "ring-offset": [Tt, Jt] }],
        "ring-offset-color": [{ "ring-offset": [d] }],
        shadow: [{ shadow: ["", "inner", "none", Zt, Md] }],
        "shadow-color": [{ shadow: [Nr] }],
        opacity: [{ opacity: [re] }],
        "mix-blend": [
          { "mix-blend": [...ie(), "plus-lighter", "plus-darker"] },
        ],
        "bg-blend": [{ "bg-blend": ie() }],
        filter: [{ filter: ["", "none"] }],
        blur: [{ blur: [c] }],
        brightness: [{ brightness: [S] }],
        contrast: [{ contrast: [U] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", Zt, B] }],
        grayscale: [{ grayscale: [J] }],
        "hue-rotate": [{ "hue-rotate": [Z] }],
        invert: [{ invert: [K] }],
        saturate: [{ saturate: [Re] }],
        sepia: [{ sepia: [Me] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
        "backdrop-blur": [{ "backdrop-blur": [c] }],
        "backdrop-brightness": [{ "backdrop-brightness": [S] }],
        "backdrop-contrast": [{ "backdrop-contrast": [U] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": [J] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [Z] }],
        "backdrop-invert": [{ "backdrop-invert": [K] }],
        "backdrop-opacity": [{ "backdrop-opacity": [re] }],
        "backdrop-saturate": [{ "backdrop-saturate": [Re] }],
        "backdrop-sepia": [{ "backdrop-sepia": [Me] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": [M] }],
        "border-spacing-x": [{ "border-spacing-x": [M] }],
        "border-spacing-y": [{ "border-spacing-y": [M] }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [
          {
            transition: [
              "none",
              "all",
              "",
              "colors",
              "opacity",
              "shadow",
              "transform",
              B,
            ],
          },
        ],
        duration: [{ duration: f() }],
        ease: [{ ease: ["linear", "in", "out", "in-out", B] }],
        delay: [{ delay: f() }],
        animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", B] }],
        transform: [{ transform: ["", "gpu", "none"] }],
        scale: [{ scale: [ce] }],
        "scale-x": [{ "scale-x": [ce] }],
        "scale-y": [{ "scale-y": [ce] }],
        rotate: [{ rotate: [_r, B] }],
        "translate-x": [{ "translate-x": [Ve] }],
        "translate-y": [{ "translate-y": [Ve] }],
        "skew-x": [{ "skew-x": [_e] }],
        "skew-y": [{ "skew-y": [_e] }],
        "transform-origin": [
          {
            origin: [
              "center",
              "top",
              "top-right",
              "right",
              "bottom-right",
              "bottom",
              "bottom-left",
              "left",
              "top-left",
              B,
            ],
          },
        ],
        accent: [{ accent: ["auto", d] }],
        appearance: [{ appearance: ["none", "auto"] }],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              B,
            ],
          },
        ],
        "caret-color": [{ caret: [d] }],
        "pointer-events": [{ "pointer-events": ["none", "auto"] }],
        resize: [{ resize: ["none", "y", "x", ""] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": Y() }],
        "scroll-mx": [{ "scroll-mx": Y() }],
        "scroll-my": [{ "scroll-my": Y() }],
        "scroll-ms": [{ "scroll-ms": Y() }],
        "scroll-me": [{ "scroll-me": Y() }],
        "scroll-mt": [{ "scroll-mt": Y() }],
        "scroll-mr": [{ "scroll-mr": Y() }],
        "scroll-mb": [{ "scroll-mb": Y() }],
        "scroll-ml": [{ "scroll-ml": Y() }],
        "scroll-p": [{ "scroll-p": Y() }],
        "scroll-px": [{ "scroll-px": Y() }],
        "scroll-py": [{ "scroll-py": Y() }],
        "scroll-ps": [{ "scroll-ps": Y() }],
        "scroll-pe": [{ "scroll-pe": Y() }],
        "scroll-pt": [{ "scroll-pt": Y() }],
        "scroll-pr": [{ "scroll-pr": Y() }],
        "scroll-pb": [{ "scroll-pb": Y() }],
        "scroll-pl": [{ "scroll-pl": Y() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [
          { "will-change": ["auto", "scroll", "contents", "transform", B] },
        ],
        fill: [{ fill: [d, "none"] }],
        "stroke-w": [{ stroke: [Tt, Jt, Ui] }],
        stroke: [{ stroke: [d, "none"] }],
        sr: ["sr-only", "not-sr-only"],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: [
          "inset-x",
          "inset-y",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left",
        ],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction",
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-s",
          "border-w-e",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l",
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-s",
          "border-color-e",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml",
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"],
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
    };
  },
  Ud = wd(Fd);
function Vi(...d) {
  return Ud(id(d));
}
const Ad = ({ className: d }) => {
    const [v, c] = zr.useState(!1),
      S = () => {
        navigator.clipboard.writeText("i3huKSMYWeegJK1mrmgB6T1REdUq8Cp9QBoxXGsqaus").then(() => {
          c(!0), setTimeout(() => c(!1), 2e3);
        });
      };
    return G.jsxs(G.Fragment, {
      children: [
        G.jsx("div", {
          className: Vi(
            "h-[100vh] w-[100vw] flex items-center justify-between max-md:flex-col max-md:gap-11 max-md:justify-center",
            d
          ),
          children: G.jsx("div", {
            className: "w-full h-full relative overflow-hidden",
            children: G.jsx("div", {
              className: "flex items-center justify-center min-h-screen",
              children: G.jsxs("div", {
                className:
                  "absolute top-[5vh] flex items-center cursor-pointer",
                onClick: () => S(),
                children: [
                  G.jsx("p", {
                    className:
                      "bg-gradient-to-r from-[#3e3e3f] to-[#000] font-bold text-[1.5vw] text-transparent bg-clip-text inline-block text-left",
                    children: "i3huKSMYWeegJK1mrmgB6T1REdUq8Cp9QBoxXGsqaus",
                  }),
                  G.jsx("img", {
                    src: v ? "/copied2.svg" : "/copy2.svg",
                    className: "w-[1.5vw] h-[1.5vw] ml-[0.5vw]",
                  }),
                ],
              }),
            }),
          }),
        }),
        G.jsx("div", {
          className: Vi("py-[0]", d),
          children: G.jsx("div", {
            className:
              "flex flex-col md:flex-row items-center justify-between gap-4",
            children: G.jsxs("div", {
              className: "grid grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-2",
              children: [
                G.jsx("div", {
                  className:
                    "absolute bottom-[0.4vh] left-[0.4vw] flex justify-center w-[29.2vw] items-center gap-0",
                  children: G.jsx("p", {
                    className:
                      "bg-gradient-to-r from-[#3e3e3f] to-[#000] text-[0.83vw] text-transparent bg-clip-text inline-block text-left",
                    children: "",
                  }),
                }),
                G.jsxs("div", {
                  className:
                    "absolute bottom-[14vh] flex justify-center w-full items-center gap-0",
                  children: [
                    G.jsx("a", {
                      target: "_blank",
                      href: "https://dexscreener.com/solana/i3huKSMYWeegJK1mrmgB6T1REdUq8Cp9QBoxXGsqaus",
                      className:
                        "text-[1vw] mw800:text-[10px] text-[#fff] font-bold cursor-pointer hover:text-[#ffffff]/98 transition-all duration-300 py-4 flex items-center justify-center text-center",
                      children: G.jsx("button", {
                        className:
                          "w-[15.64vw] h-[7.5vh] bg-[#010101] border-[3px] border-[#ebae0c] rounded-[70px] flex justify-center items-center px-[20px] py-[18px] text-[#ebae0c] hover:bg-[#ebae0c] hover:text-[#000]",
                        children: "DEXSCREENER",
                      }),
                    }),
                    G.jsx("a", {
                      target: "_blank",
                      href: "https://www.dextools.io/app/en/solana/pair-explorer/",
                      className:
                        "text-[1vw] mw800:text-[10px] text-[#fff] font-bold cursor-pointer hover:text-[#ffffff]/98 transition-all duration-300 py-4 flex items-center justify-center text-center",
                      children: G.jsx("button", {
                        className:
                          "w-[15.64vw] h-[7.5vh] bg-[#010101] border-[3px] border-[#ebae0c] rounded-[70px] flex justify-center items-center px-[20px] py-[18px] text-[#ebae0c] hover:bg-[#ebae0c] hover:text-[#000]",
                        children: "DEXTOOLS",
                      }),
                    }),
                  ],
                }),
              ],
            }),
          }),
        }),
      ],
    });
  },
  Vd = ({ className: d }) => {
    const [v, c] = zr.useState(!1),
      S = () => {
        navigator.clipboard.writeText("i3huKSMYWeegJK1mrmgB6T1REdUq8Cp9QBoxXGsqaus").then(() => {
          c(!0), setTimeout(() => c(!1), 2e3);
        });
      };
    return G.jsxs("div", {
      className: Vi(
        "h-screen w-screen relative flex flex-col items-center justify-start",
        d
      ),
      style: {
        backgroundImage: 'url("/background_main.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      },
      children: [
        // G.jsx("img", { src: "/background_e.png", className: "w-full h-auto" }),
        G.jsxs("div", {
          className: "flex flex-col items-center justify-center mt-4",
          children: [
            G.jsxs("div", {
              className: "bg flex items-center cursor-pointer mb-4",
              onClick: S,
              children: [
                G.jsx("p", {
                  className:
                    "text-[#1d1e2a] font-bold text-[3.4vw] bg-clip-text inline-block break-all",
                  children: "i3huKSMYWeegJK1mrmgB6T1REdUq8Cp9QBoxXGsqaus",
                }),
                G.jsx("img", {
                  src: v ? "/copied2.svg" : "/copy2.svg",
                  className: "w-[18px] h-[18px] ml-[10px]",
                }),
              ],
            }),
            G.jsxs("div", {
              className: "flex justify-center space-x-4 w-full mb-4",
              children: [
                G.jsx("a", {
                  target: "_blank",
                  href: "https://dexscreener.com/solana/i3huKSMYWeegJK1mrmgB6T1REdUq8Cp9QBoxXGsqaus",
                  className: "w-[40vw] flex justify-center",
                  children: G.jsx("button", {
                    className:
                      "w-full h-[60px] bg-[#010101] rounded-[56px] text-[#ebae0c] text-[18px] font-bold hover:bg-[#1d1e2a] hover:text-[#ebae0c]",
                    children: "DEXSCREENER",
                  }),
                }),
                G.jsx("a", {
                  target: "_blank",
                  href: "https://www.dextools.io/app/en/solana/pair-explorer/",
                  className: "w-[40vw] flex justify-center",
                  children: G.jsx("button", {
                    className:
                      "w-full h-[60px] bg-[#010101] rounded-[56px] text-[#ebae0c] text-[18px] font-bold hover:bg-[#1d1e2a] hover:text-[#ebae0c]",
                    children: "DEXTOOLS",
                  }),
                }),
              ],
            }),

          ],
        }),
      ],
    });
  };
function Bd() {
  const [d, v] = zr.useState(window.innerWidth <= 800);
  return (
    zr.useEffect(() => {
      const c = () => {
        v(window.innerWidth <= 800);
      };
      return (
        window.addEventListener("resize", c),
        () => window.removeEventListener("resize", c)
      );
    }, []),
    G.jsx("div", {
      className:
        "mx-auto w-screen min-h-screen grid grid-rows-[auto_1fr_auto] overflow-y-auto",
      children: d ? G.jsx(Vd, {}) : G.jsx(Ad, {}),
    })
  );
}
od.createRoot(document.getElementById("root")).render(
  G.jsx(zr.StrictMode, { children: G.jsx(Bd, {}) })
);
