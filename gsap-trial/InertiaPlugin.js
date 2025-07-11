/*!
 * InertiaPlugin 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2024, GreenSock. All rights reserved.
 * *** DO NOT DEPLOY THIS FILE ***
 * This is a trial version that only works locally and on domains like codepen.io and codesandbox.io.
 * Loading it on an unauthorized domain violates the license and will cause a redirect.
 * Get the unrestricted file by joining Club GSAP at https://gsap.com/pricing
 * @author: Jack Doyle, jack@greensock.com
 */

let t,
  e,
  i,
  r,
  n,
  o,
  s,
  a,
  l,
  c = () => t || ("undefined" != typeof window && (t = window.gsap)),
  g = {},
  p = (t) => l(t).id,
  u = (t) => g[p("string" == typeof t ? i(t)[0] : t)],
  d = (t) => {
    let e,
      i = n;
    if (t - s >= 0.05)
      for (a = s, s = t; i; )
        (e = i.g(i.t, i.p)),
          (e !== i.v1 || t - i.t1 > 0.2) &&
            ((i.v2 = i.v1), (i.v1 = e), (i.t2 = i.t1), (i.t1 = t)),
          (i = i._next);
  },
  h = { deg: 360, rad: 2 * Math.PI },
  f = () => {
    (t = c()),
      t &&
        ((i = t.utils.toArray),
        (r = t.utils.getUnit),
        (l = t.core.getCache),
        (o = t.ticker),
        (e = 1));
  };
class v {
  constructor(t, e, i, n) {
    (this.t = t),
      (this.p = e),
      (this.g = t._gsap.get),
      (this.rCap = h[i || r(this.g(t, e))]),
      (this.v1 = this.v2 = 0),
      (this.t1 = this.t2 = o.time),
      n && ((this._next = n), (n._prev = this));
  }
}
class m {
  constructor(t, r) {
    e || f(),
      (this.target = i(t)[0]),
      (g[p(this.target)] = this),
      (this._props = {}),
      r && this.add(r);
  }
  static register(e) {
    (t = e), f();
  }
  get(t, e) {
    let i,
      r,
      n,
      s = this._props[t] || console.warn("Not tracking " + t + " velocity.");
    return (
      (i = parseFloat(e ? s.v1 : s.g(s.t, s.p))),
      (r = i - parseFloat(s.v2)),
      (n = s.rCap),
      n && ((r %= n), r !== r % (n / 2) && (r = r < 0 ? r + n : r - n)),
      (a = r / ((e ? s.t1 : o.time) - s.t2)),
      Math.round(1e4 * a) / 1e4
    );
    var a;
  }
  getAll() {
    let t,
      e = {},
      i = this._props;
    for (t in i) e[t] = this.get(t);
    return e;
  }
  isTracking(t) {
    return t in this._props;
  }
  add(t, e) {
    t in this._props ||
      (n || (o.add(d), (s = a = o.time)),
      (n = this._props[t] = new v(this.target, t, e, n)));
  }
  remove(t) {
    let e,
      i,
      r = this._props[t];
    r &&
      ((e = r._prev),
      (i = r._next),
      e && (e._next = i),
      i ? (i._prev = e) : n === r && (o.remove(d), (n = 0)),
      delete this._props[t]);
  }
  kill(t) {
    for (let t in this._props) this.remove(t);
    t || delete g[p(this.target)];
  }
  static track(t, r, n) {
    e || f();
    let o,
      s,
      a = [],
      l = i(t),
      c = r.split(","),
      g = (n || "").split(","),
      p = l.length;
    for (; p--; ) {
      for (o = u(l[p]) || new m(l[p]), s = c.length; s--; )
        o.add(c[s], g[s] || g[0]);
      a.push(o);
    }
    return a;
  }
  static untrack(t, e) {
    let r = (e || "").split(",");
    i(t).forEach((t) => {
      let e = u(t);
      e && (r.length ? r.forEach((t) => e.remove(t)) : e.kill(1));
    });
  }
  static isTracking(t, e) {
    let i = u(t);
    return i && i.isTracking(e);
  }
  static getVelocity(t, e) {
    let i = u(t);
    return i && i.isTracking(e)
      ? i.get(e)
      : console.warn("Not tracking velocity of " + e);
  }
}
(m.getByTarget = u), c() && t.registerPlugin(m);
let y,
  w,
  _,
  k,
  x,
  T,
  F,
  P,
  N,
  b,
  M,
  O,
  E,
  A,
  C = m.getByTarget,
  S = () =>
    y ||
    ("undefined" != typeof window &&
      (y = window.gsap) &&
      y.registerPlugin &&
      y),
  j = (t) => "number" == typeof t,
  I = (t) => "object" == typeof t,
  B = (t) => "function" == typeof t,
  R = function () {
    return String.fromCharCode.apply(null, arguments);
  },
  W = R(103, 114, 101, 101, 110, 115, 111, 99, 107, 46, 99, 111, 109),
  L = R(103, 115, 97, 112, 46, 99, 111, 109),
  U = /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}:?\d*$/,
  V = (function (t) {
    var e = "undefined" != typeof window,
      i =
        0 ===
          (e ? window.location.href : "").indexOf(
            R(102, 105, 108, 101, 58, 47, 47)
          ) ||
        -1 !== t.indexOf(R(108, 111, 99, 97, 108, 104, 111, 115, 116)) ||
        U.test(t) ||
        (e ? window.location.hostname : "").split(".").pop() ===
          R(108, 111, 99, 97, 108),
      r = [
        W,
        L,
        R(99, 111, 100, 101, 112, 101, 110, 46, 105, 111),
        R(
          99,
          111,
          100,
          101,
          112,
          101,
          110,
          46,
          112,
          108,
          117,
          109,
          98,
          105,
          110,
          103
        ),
        R(99, 111, 100, 101, 112, 101, 110, 46, 100, 101, 118),
        R(99, 111, 100, 101, 112, 101, 110, 46, 97, 112, 112),
        R(
          99,
          111,
          100,
          101,
          112,
          101,
          110,
          46,
          119,
          101,
          98,
          115,
          105,
          116,
          101
        ),
        R(112, 101, 110, 115, 46, 99, 108, 111, 117, 100),
        R(99, 115, 115, 45, 116, 114, 105, 99, 107, 115, 46, 99, 111, 109),
        R(99, 100, 112, 110, 46, 105, 111),
        R(112, 101, 110, 115, 46, 105, 111),
        R(103, 97, 110, 110, 111, 110, 46, 116, 118),
        R(99, 111, 100, 101, 99, 97, 110, 121, 111, 110, 46, 110, 101, 116),
        R(
          116,
          104,
          101,
          109,
          101,
          102,
          111,
          114,
          101,
          115,
          116,
          46,
          110,
          101,
          116
        ),
        R(105, 110, 102, 105, 110, 116, 101, 45, 103, 97, 108, 108, 101, 114, 121, 46, 118, 101, 114, 99, 101, 108, 46, 97, 112, 112
        ),
        R(99, 101, 114, 101, 98, 114, 97, 120, 46, 99, 111, 46, 117, 107),
        R(116, 121, 109, 112, 97, 110, 117, 115, 46, 110, 101, 116),
        R(116, 119, 101, 101, 110, 109, 97, 120, 46, 99, 111, 109),
        R(112, 108, 110, 107, 114, 46, 99, 111),
        R(104, 111, 116, 106, 97, 114, 46, 99, 111, 109),
        R(119, 101, 98, 112, 97, 99, 107, 98, 105, 110, 46, 99, 111, 109),
        R(97, 114, 99, 104, 105, 118, 101, 46, 111, 114, 103),
        R(99, 111, 100, 101, 115, 97, 110, 100, 98, 111, 120, 46, 105, 111),
        R(99, 115, 98, 46, 97, 112, 112),
        R(115, 116, 97, 99, 107, 98, 108, 105, 116, 122, 46, 99, 111, 109),
        R(115, 116, 97, 99, 107, 98, 108, 105, 116, 122, 46, 105, 111),
        R(99, 111, 100, 105, 101, 114, 46, 105, 111),
        R(
          109,
          111,
          116,
          105,
          111,
          110,
          116,
          114,
          105,
          99,
          107,
          115,
          46,
          99,
          111,
          109
        ),
        R(
          115,
          116,
          97,
          99,
          107,
          111,
          118,
          101,
          114,
          102,
          108,
          111,
          119,
          46,
          99,
          111,
          109
        ),
        R(
          115,
          116,
          97,
          99,
          107,
          101,
          120,
          99,
          104,
          97,
          110,
          103,
          101,
          46,
          99,
          111,
          109
        ),
        R(
          115,
          116,
          117,
          100,
          105,
          111,
          102,
          114,
          101,
          105,
          103,
          104,
          116,
          46,
          99,
          111,
          109
        ),
        R(
          119,
          101,
          98,
          99,
          111,
          110,
          116,
          97,
          105,
          110,
          101,
          114,
          46,
          105,
          111
        ),
        R(106, 115, 102, 105, 100, 100, 108, 101, 46, 110, 101, 116),
      ],
      n = function () {
        if (e)
          if (
            "loading" === document.readyState ||
            "interactive" === document.readyState
          )
            document.addEventListener("readystatechange", n);
          else {
            document.removeEventListener("readystatechange", n);
            var t = "object" == typeof y ? y : e && window.gsap;
            e &&
              window.console &&
              !window._gsapWarned &&
              "object" == typeof t &&
              !1 !== t.config().trialWarn &&
              (console.log(
                R(37, 99, 87, 97, 114, 110, 105, 110, 103),
                R(
                  102,
                  111,
                  110,
                  116,
                  45,
                  115,
                  105,
                  122,
                  101,
                  58,
                  51,
                  48,
                  112,
                  120,
                  59,
                  99,
                  111,
                  108,
                  111,
                  114,
                  58,
                  114,
                  101,
                  100,
                  59
                )
              ),
              console.log(
                R(
                  65,
                  32,
                  116,
                  114,
                  105,
                  97,
                  108,
                  32,
                  118,
                  101,
                  114,
                  115,
                  105,
                  111,
                  110,
                  32,
                  111,
                  102,
                  32
                ) +
                  "InertiaPlugin" +
                  R(
                    32,
                    105,
                    115,
                    32,
                    108,
                    111,
                    97,
                    100,
                    101,
                    100,
                    32,
                    116,
                    104,
                    97,
                    116,
                    32,
                    111,
                    110,
                    108,
                    121,
                    32,
                    119,
                    111,
                    114,
                    107,
                    115,
                    32,
                    108,
                    111,
                    99,
                    97,
                    108,
                    108,
                    121,
                    32,
                    97,
                    110,
                    100,
                    32,
                    111,
                    110,
                    32,
                    100,
                    111,
                    109,
                    97,
                    105,
                    110,
                    115,
                    32,
                    108,
                    105,
                    107,
                    101,
                    32,
                    99,
                    111,
                    100,
                    101,
                    112,
                    101,
                    110,
                    46,
                    105,
                    111,
                    32,
                    97,
                    110,
                    100,
                    32,
                    99,
                    111,
                    100,
                    101,
                    115,
                    97,
                    110,
                    100,
                    98,
                    111,
                    120,
                    46,
                    105,
                    111,
                    46,
                    32,
                    42,
                    42,
                    42,
                    32,
                    68,
                    79,
                    32,
                    78,
                    79,
                    84,
                    32,
                    68,
                    69,
                    80,
                    76,
                    79,
                    89,
                    32,
                    84,
                    72,
                    73,
                    83,
                    32,
                    70,
                    73,
                    76,
                    69,
                    32,
                    42,
                    42,
                    42,
                    32,
                    76,
                    111,
                    97,
                    100,
                    105,
                    110,
                    103,
                    32,
                    105,
                    116,
                    32,
                    111,
                    110,
                    32,
                    97,
                    110,
                    32,
                    117,
                    110,
                    97,
                    117,
                    116,
                    104,
                    111,
                    114,
                    105,
                    122,
                    101,
                    100,
                    32,
                    115,
                    105,
                    116,
                    101,
                    32,
                    118,
                    105,
                    111,
                    108,
                    97,
                    116,
                    101,
                    115,
                    32,
                    116,
                    104,
                    101,
                    32,
                    108,
                    105,
                    99,
                    101,
                    110,
                    115,
                    101,
                    32,
                    97,
                    110,
                    100,
                    32,
                    119,
                    105,
                    108,
                    108,
                    32,
                    99,
                    97,
                    117,
                    115,
                    101,
                    32,
                    97,
                    32,
                    114,
                    101,
                    100,
                    105,
                    114,
                    101,
                    99,
                    116,
                    46,
                    32,
                    80,
                    108,
                    101,
                    97,
                    115,
                    101,
                    32,
                    106,
                    111,
                    105,
                    110,
                    32,
                    67,
                    108,
                    117,
                    98,
                    32,
                    71,
                    114,
                    101,
                    101,
                    110,
                    83,
                    111,
                    99,
                    107,
                    32,
                    116,
                    111,
                    32,
                    103,
                    101,
                    116,
                    32,
                    102,
                    117,
                    108,
                    108,
                    32,
                    97,
                    99,
                    99,
                    101,
                    115,
                    115,
                    32,
                    116,
                    111,
                    32,
                    116,
                    104,
                    101,
                    32,
                    98,
                    111,
                    110,
                    117,
                    115,
                    32,
                    112,
                    108,
                    117,
                    103,
                    105,
                    110,
                    115,
                    32,
                    116,
                    104,
                    97,
                    116,
                    32,
                    98,
                    111,
                    111,
                    115,
                    116,
                    32,
                    121,
                    111,
                    117,
                    114,
                    32,
                    97,
                    110,
                    105,
                    109,
                    97,
                    116,
                    105,
                    111,
                    110,
                    32,
                    115,
                    117,
                    112,
                    101,
                    114,
                    112,
                    111,
                    119,
                    101,
                    114,
                    115,
                    46,
                    32,
                    68,
                    105,
                    115,
                    97,
                    98,
                    108,
                    101,
                    32,
                    116,
                    104,
                    105,
                    115,
                    32,
                    119,
                    97,
                    114,
                    110,
                    105,
                    110,
                    103,
                    32,
                    119,
                    105,
                    116,
                    104,
                    32,
                    103,
                    115,
                    97,
                    112,
                    46,
                    99,
                    111,
                    110,
                    102,
                    105,
                    103,
                    40,
                    123,
                    116,
                    114,
                    105,
                    97,
                    108,
                    87,
                    97,
                    114,
                    110,
                    58,
                    32,
                    102,
                    97,
                    108,
                    115,
                    101,
                    125,
                    41,
                    59
                  )
              ),
              console.log(
                R(
                  37,
                  99,
                  71,
                  101,
                  116,
                  32,
                  117,
                  110,
                  114,
                  101,
                  115,
                  116,
                  114,
                  105,
                  99,
                  116,
                  101,
                  100,
                  32,
                  102,
                  105,
                  108,
                  101,
                  115,
                  32,
                  97,
                  116,
                  32,
                  104,
                  116,
                  116,
                  112,
                  115,
                  58,
                  47,
                  47,
                  103,
                  114,
                  101,
                  101,
                  110,
                  115,
                  111,
                  99,
                  107,
                  46,
                  99,
                  111,
                  109,
                  47,
                  99,
                  108,
                  117,
                  98
                ),
                R(
                  102,
                  111,
                  110,
                  116,
                  45,
                  115,
                  105,
                  122,
                  101,
                  58,
                  49,
                  54,
                  112,
                  120,
                  59,
                  99,
                  111,
                  108,
                  111,
                  114,
                  58,
                  35,
                  52,
                  101,
                  57,
                  56,
                  49,
                  53
                )
              ),
              (window._gsapWarned = 1));
          }
      },
      o = r.length;
    for (setTimeout(n, 50); --o > -1; ) if (-1 !== t.indexOf(r[o])) return !0;
    return (
      i ||
      !setTimeout(function () {
        e &&
          (window.location.href =
            R(104, 116, 116, 112, 115, 58, 47, 47) +
            W +
            R(
              47,
              114,
              101,
              113,
              117,
              105,
              114,
              101,
              115,
              45,
              109,
              101,
              109,
              98,
              101,
              114,
              115,
              104,
              105,
              112,
              47
            ) +
            "?plugin=InertiaPlugin&source=trial");
      }, 4e3)
    );
  })("undefined" != typeof window ? window.location.host : ""),
  q = Array.isArray,
  $ = (t) => t,
  z = 1e10,
  D = (t, e, i) => {
    for (let r in e) r in t || r === i || (t[r] = e[r]);
    return t;
  },
  G = (t) => {
    let e,
      i,
      r = {};
    for (e in t) r[e] = I((i = t[e])) && !q(i) ? G(i) : i;
    return r;
  },
  H = (t, e, i, r, n) => {
    let o,
      s,
      a,
      l,
      c = e.length,
      g = 0,
      p = z;
    if (I(t)) {
      for (; c--; ) {
        for (a in ((o = e[c]), (s = 0), t)) (l = o[a] - t[a]), (s += l * l);
        s < p && ((g = c), (p = s));
      }
      if ((n || z) < z && n < Math.sqrt(p)) return t;
    } else
      for (; c--; )
        (o = e[c]),
          (s = o - t),
          s < 0 && (s = -s),
          s < p && o >= r && o <= i && ((g = c), (p = s));
    return e[g];
  },
  J = (t, e, i, r, n, o, s) => {
    if ("auto" === t.end) return t;
    let a,
      l,
      c = t.end;
    if (((i = isNaN(i) ? z : i), (r = isNaN(r) ? -z : r), I(e))) {
      if (
        ((a = e.calculated ? e : (B(c) ? c(e, s) : H(e, c, i, r, o)) || e),
        !e.calculated)
      ) {
        for (l in a) e[l] = a[l];
        e.calculated = !0;
      }
      a = a[n];
    } else a = B(c) ? c(e, s) : q(c) ? H(e, c, i, r, o) : parseFloat(c);
    return (
      a > i ? (a = i) : a < r && (a = r),
      { max: a, min: a, unitFactor: t.unitFactor }
    );
  },
  K = (t, e, i) => (isNaN(t[e]) ? i : +t[e]),
  Q = (t, e) => (0.05 * e * t) / b,
  X = (t, e, i) => Math.abs(((e - t) * b) / i / 0.05),
  Y = {
    resistance: 1,
    checkpoint: 1,
    preventOvershoot: 1,
    linkedProps: 1,
    radius: 1,
    duration: 1,
  },
  Z = (t, e, i, r) => {
    if (e.linkedProps) {
      let n,
        o,
        s,
        a,
        l,
        c,
        g = e.linkedProps.split(","),
        p = {};
      for (n = 0; n < g.length; n++)
        (o = g[n]),
          (s = e[o]),
          s &&
            (j(s.velocity)
              ? (a = s.velocity)
              : ((l = l || C(t)), (a = l && l.isTracking(o) ? l.get(o) : 0)),
            (c = Math.abs(a / K(s, "resistance", r))),
            (p[o] = parseFloat(i(t, o)) + Q(a, c)));
      return p;
    }
  },
  tt = () => {
    (y = S()),
      y &&
        ((_ = y.parseEase),
        (k = y.utils.toArray),
        (F = y.utils.getUnit),
        (N = y.core.getCache),
        (M = y.utils.clamp),
        (E = y.core.getStyleSaver),
        (A = y.core.reverting || function () {}),
        (x = _("power3")),
        (b = x(0.05)),
        (P = y.core.PropTween),
        y.config({
          resistance: 100,
          unitFactors: {
            time: 1e3,
            totalTime: 1e3,
            progress: 1e3,
            totalProgress: 1e3,
          },
        }),
        (T = y.config()),
        y.registerPlugin(m),
        (w = 1));
  };
const et = {
  version: "3.12.5",
  name: "inertia",
  register(t) {
    (y = t), tt();
  },
  init(t, e, i, r, n) {
    w || tt();
    let o = C(t);
    if ("auto" === e) {
      if (!o)
        return void console.warn(
          "No inertia tracking on " + t + ". InertiaPlugin.track(target) first."
        );
      e = o.getAll();
    }
    (this.styles = E && "object" == typeof t.style && E(t)),
      (this.target = t),
      (this.tween = i),
      (O = e);
    let s,
      a,
      l,
      c,
      g,
      p,
      u,
      d,
      h,
      f = t._gsap,
      v = f.get,
      m = e.duration,
      y = I(m),
      _ = e.preventOvershoot || (y && 0 === m.overshoot),
      x = K(e, "resistance", T.resistance),
      b = j(m)
        ? m
        : ((t, e, i = 10, r = 0.2, n = 1, o = 0) => {
            if (("string" == typeof t && (t = k(t)[0]), !t)) return 0;
            let s,
              a,
              l,
              c,
              g,
              p,
              u,
              d,
              h,
              f,
              v = 0,
              m = z,
              y = e.inertia || e,
              w = N(t).get,
              _ = K(y, "resistance", T.resistance);
            for (s in ((f = Z(t, y, w, _)), y))
              Y[s] ||
                ((a = y[s]),
                I(a) ||
                  ((d = d || C(t)),
                  d && d.isTracking(s)
                    ? (a = j(a) ? { velocity: a } : { velocity: d.get(s) })
                    : ((c = +a || 0), (l = Math.abs(c / _)))),
                I(a) &&
                  (j(a.velocity)
                    ? (c = a.velocity)
                    : ((d = d || C(t)),
                      (c = d && d.isTracking(s) ? d.get(s) : 0)),
                  (l = M(r, i, Math.abs(c / K(a, "resistance", _)))),
                  (g = parseFloat(w(t, s)) || 0),
                  (p = g + Q(c, l)),
                  "end" in a &&
                    ((a = J(
                      a,
                      f && s in f ? f : p,
                      a.max,
                      a.min,
                      s,
                      y.radius,
                      c
                    )),
                    o &&
                      (O === e && (O = y = G(e)), (y[s] = D(a, y[s], "end")))),
                  "max" in a && p > +a.max + 1e-10
                    ? ((h = a.unitFactor || T.unitFactors[s] || 1),
                      (u =
                        (g > a.max && a.min !== a.max) ||
                        (c * h > -15 && c * h < 45)
                          ? r + 0.1 * (i - r)
                          : X(g, a.max, c)),
                      u + n < m && (m = u + n))
                    : "min" in a &&
                      p < +a.min - 1e-10 &&
                      ((h = a.unitFactor || T.unitFactors[s] || 1),
                      (u =
                        (g < a.min && a.min !== a.max) ||
                        (c * h > -45 && c * h < 15)
                          ? r + 0.1 * (i - r)
                          : X(g, a.min, c)),
                      u + n < m && (m = u + n)),
                  u > v && (v = u)),
                l > v && (v = l));
            return v > m && (v = m), v > i ? i : v < r ? r : v;
          })(
            t,
            e,
            (y && m.max) || 10,
            (y && m.min) || 0.2,
            y && "overshoot" in m ? +m.overshoot : _ ? 0 : 1,
            !0
          );
    for (s in ((e = O), (O = 0), (h = Z(t, e, v, x)), e))
      Y[s] ||
        ((a = e[s]),
        B(a) && (a = a(r, t, n)),
        j(a)
          ? (g = a)
          : I(a) && !isNaN(a.velocity)
            ? (g = +a.velocity)
            : o && o.isTracking(s)
              ? (g = o.get(s))
              : console.warn(
                  "ERROR: No velocity was defined for " + t + " property: " + s
                ),
        (p = Q(g, b)),
        (d = 0),
        (l = v(t, s)),
        (c = F(l)),
        (l = parseFloat(l)),
        I(a) &&
          ((u = l + p),
          "end" in a &&
            (a = J(a, h && s in h ? h : u, a.max, a.min, s, e.radius, g)),
          "max" in a && +a.max < u
            ? _ || a.preventOvershoot
              ? (p = a.max - l)
              : (d = a.max - l - p)
            : "min" in a &&
              +a.min > u &&
              (_ || a.preventOvershoot
                ? (p = a.min - l)
                : (d = a.min - l - p))),
        this._props.push(s),
        this.styles && this.styles.save(s),
        (this._pt = new P(this._pt, t, s, l, 0, $, 0, f.set(t, s, this))),
        (this._pt.u = c || 0),
        (this._pt.c1 = p),
        (this._pt.c2 = d));
    return i.duration(b), V;
  },
  render(t, e) {
    let i = e._pt;
    if ((t = x(e.tween._time / e.tween._dur)) || !A())
      for (; i; )
        i.set(
          i.t,
          i.p,
          ((r = i.s + i.c1 * t + i.c2 * t * t),
          Math.round(1e4 * r) / 1e4 + i.u),
          i.d,
          t
        ),
          (i = i._next);
    else e.styles.revert();
    var r;
  },
};
"track,untrack,isTracking,getVelocity,getByTarget"
  .split(",")
  .forEach((t) => (et[t] = m[t])),
  S() && y.registerPlugin(et);
export default et;
export { et as InertiaPlugin, m as VelocityTracker };
