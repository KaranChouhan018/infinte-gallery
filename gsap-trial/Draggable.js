/*!
 * Draggable 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

let e,
  t,
  o,
  n,
  r,
  i,
  l,
  a,
  s,
  d = "transform",
  c = d + "Origin",
  p = (r) => {
    let i = r.ownerDocument || r;
    !(d in r.style) &&
      "msTransform" in r.style &&
      ((d = "msTransform"), (c = d + "Origin"));
    for (; i.parentNode && (i = i.parentNode); );
    if (((t = window), (l = new v()), i)) {
      (e = i),
        (o = i.documentElement),
        (n = i.body),
        (a = e.createElementNS("http://www.w3.org/2000/svg", "g")),
        (a.style.transform = "none");
      let t = i.createElement("div"),
        r = i.createElement("div"),
        l = i && (i.body || i.firstElementChild);
      l &&
        l.appendChild &&
        (l.appendChild(t),
        t.appendChild(r),
        t.setAttribute(
          "style",
          "position:static;transform:translate3d(0,0,1px)"
        ),
        (s = r.offsetParent !== t),
        l.removeChild(t));
    }
    return i;
  },
  h = [],
  g = [],
  u = (e) =>
    e.ownerSVGElement || ("svg" === (e.tagName + "").toLowerCase() ? e : null),
  f = (e) =>
    "fixed" === t.getComputedStyle(e).position ||
    ((e = e.parentNode) && 1 === e.nodeType ? f(e) : void 0),
  x = (t, o) => {
    if (t.parentNode && (e || p(t))) {
      let n = u(t),
        l = n
          ? n.getAttribute("xmlns") || "http://www.w3.org/2000/svg"
          : "http://www.w3.org/1999/xhtml",
        a = n ? (o ? "rect" : "g") : "div",
        s = 2 !== o ? 0 : 100,
        d = 3 === o ? 100 : 0,
        c =
          "position:absolute;display:block;pointer-events:none;margin:0;padding:0;",
        p = e.createElementNS
          ? e.createElementNS(l.replace(/^https/, "http"), a)
          : e.createElement(a);
      return (
        o &&
          (n
            ? (i || (i = x(t)),
              p.setAttribute("width", 0.01),
              p.setAttribute("height", 0.01),
              p.setAttribute("transform", "translate(" + s + "," + d + ")"),
              i.appendChild(p))
            : (r || ((r = x(t)), (r.style.cssText = c)),
              (p.style.cssText =
                c +
                "width:0.1px;height:0.1px;top:" +
                d +
                "px;left:" +
                s +
                "px"),
              r.appendChild(p))),
        p
      );
    }
    throw "Need document and parent.";
  },
  m = (e, o) => {
    let n,
      p,
      f,
      m,
      y,
      w,
      b = u(e),
      T = e === b,
      E = b ? h : g,
      M = e.parentNode;
    if (e === t) return e;
    if ((E.length || E.push(x(e, 1), x(e, 2), x(e, 3)), (n = b ? i : r), b))
      T
        ? ((f = ((e) => {
            let t,
              o = e.getCTM();
            return (
              o ||
                ((t = e.style[d]),
                (e.style[d] = "none"),
                e.appendChild(a),
                (o = a.getCTM()),
                e.removeChild(a),
                t
                  ? (e.style[d] = t)
                  : e.style.removeProperty(
                      d.replace(/([A-Z])/g, "-$1").toLowerCase()
                    )),
              o || l.clone()
            );
          })(e)),
          (m = -f.e / f.a),
          (y = -f.f / f.d),
          (p = l))
        : e.getBBox
          ? ((f = e.getBBox()),
            (p = e.transform ? e.transform.baseVal : {}),
            (p = p.numberOfItems
              ? p.numberOfItems > 1
                ? ((e) => {
                    let t = new v(),
                      o = 0;
                    for (; o < e.numberOfItems; o++)
                      t.multiply(e.getItem(o).matrix);
                    return t;
                  })(p)
                : p.getItem(0).matrix
              : l),
            (m = p.a * f.x + p.c * f.y),
            (y = p.b * f.x + p.d * f.y))
          : ((p = new v()), (m = y = 0)),
        o && "g" === e.tagName.toLowerCase() && (m = y = 0),
        (T ? b : M).appendChild(n),
        n.setAttribute(
          "transform",
          "matrix(" +
            p.a +
            "," +
            p.b +
            "," +
            p.c +
            "," +
            p.d +
            "," +
            (p.e + m) +
            "," +
            (p.f + y) +
            ")"
        );
    else {
      if (((m = y = 0), s))
        for (
          p = e.offsetParent, f = e;
          f && (f = f.parentNode) && f !== p && f.parentNode;

        )
          (t.getComputedStyle(f)[d] + "").length > 4 &&
            ((m = f.offsetLeft), (y = f.offsetTop), (f = 0));
      if (
        ((w = t.getComputedStyle(e)),
        "absolute" !== w.position && "fixed" !== w.position)
      )
        for (p = e.offsetParent; M && M !== p; )
          (m += M.scrollLeft || 0), (y += M.scrollTop || 0), (M = M.parentNode);
      (f = n.style),
        (f.top = e.offsetTop - y + "px"),
        (f.left = e.offsetLeft - m + "px"),
        (f[d] = w[d]),
        (f[c] = w[c]),
        (f.position = "fixed" === w.position ? "fixed" : "absolute"),
        e.parentNode.appendChild(n);
    }
    return n;
  },
  y = (e, t, o, n, r, i, l) => (
    (e.a = t), (e.b = o), (e.c = n), (e.d = r), (e.e = i), (e.f = l), e
  );
class v {
  constructor(e = 1, t = 0, o = 0, n = 1, r = 0, i = 0) {
    y(this, e, t, o, n, r, i);
  }
  inverse() {
    let { a: e, b: t, c: o, d: n, e: r, f: i } = this,
      l = e * n - t * o || 1e-10;
    return y(
      this,
      n / l,
      -t / l,
      -o / l,
      e / l,
      (o * i - n * r) / l,
      -(e * i - t * r) / l
    );
  }
  multiply(e) {
    let { a: t, b: o, c: n, d: r, e: i, f: l } = this,
      a = e.a,
      s = e.c,
      d = e.b,
      c = e.d,
      p = e.e,
      h = e.f;
    return y(
      this,
      a * t + d * n,
      a * o + d * r,
      s * t + c * n,
      s * o + c * r,
      i + p * t + h * n,
      l + p * o + h * r
    );
  }
  clone() {
    return new v(this.a, this.b, this.c, this.d, this.e, this.f);
  }
  equals(e) {
    let { a: t, b: o, c: n, d: r, e: i, f: l } = this;
    return (
      t === e.a && o === e.b && n === e.c && r === e.d && i === e.e && l === e.f
    );
  }
  apply(e, t = {}) {
    let { x: o, y: n } = e,
      { a: r, b: i, c: l, d: a, e: s, f: d } = this;
    return (t.x = o * r + n * l + s || 0), (t.y = o * i + n * a + d || 0), t;
  }
}
function w(r, i, l, a) {
  if (!r || !r.parentNode || (e || p(r)).documentElement === r) return new v();
  let s = ((e) => {
      let t, o;
      for (; e && e !== n; )
        (o = e._gsap),
          o && o.uncache && o.get(e, "x"),
          o &&
            !o.scaleX &&
            !o.scaleY &&
            o.renderTransform &&
            ((o.scaleX = o.scaleY = 1e-4),
            o.renderTransform(1, o),
            t ? t.push(o) : (t = [o])),
          (e = e.parentNode);
      return t;
    })(r),
    d = u(r) ? h : g,
    c = m(r, l),
    x = d[0].getBoundingClientRect(),
    y = d[1].getBoundingClientRect(),
    w = d[2].getBoundingClientRect(),
    b = c.parentNode,
    T = !a && f(r),
    E = new v(
      (y.left - x.left) / 100,
      (y.top - x.top) / 100,
      (w.left - x.left) / 100,
      (w.top - x.top) / 100,
      x.left +
        (T
          ? 0
          : t.pageXOffset || e.scrollLeft || o.scrollLeft || n.scrollLeft || 0),
      x.top +
        (T
          ? 0
          : t.pageYOffset || e.scrollTop || o.scrollTop || n.scrollTop || 0)
    );
  if ((b.removeChild(c), s))
    for (x = s.length; x--; )
      (y = s[x]), (y.scaleX = y.scaleY = 0), y.renderTransform(1, y);
  return i ? E.inverse() : E;
}
let b,
  T,
  E,
  M,
  X,
  S,
  Y,
  C,
  k,
  D,
  L,
  N,
  P,
  O,
  R,
  A,
  _,
  B,
  I,
  H,
  F,
  W,
  z = 0,
  V = () => "undefined" != typeof window,
  K = () => b || (V() && (b = window.gsap) && b.registerPlugin && b),
  G = (e) => "function" == typeof e,
  U = (e) => "object" == typeof e,
  q = (e) => void 0 === e,
  $ = () => !1,
  j = "transform",
  Z = "transformOrigin",
  J = (e) => Math.round(1e4 * e) / 1e4,
  Q = Array.isArray,
  ee = (e, t) => {
    let o = E.createElementNS
      ? E.createElementNS(
          (t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
          e
        )
      : E.createElement(e);
    return o.style ? o : E.createElement(e);
  },
  te = 180 / Math.PI,
  oe = 1e20,
  ne = new v(),
  re = Date.now || (() => new Date().getTime()),
  ie = [],
  le = {},
  ae = 0,
  se = /^(?:a|input|textarea|button|select)$/i,
  de = 0,
  ce = {},
  pe = {},
  he = (e, t) => {
    let o,
      n = {};
    for (o in e) n[o] = t ? e[o] * t : e[o];
    return n;
  },
  ge = (e, t) => {
    let o,
      n = e.length;
    for (; n--; )
      t
        ? (e[n].style.touchAction = t)
        : e[n].style.removeProperty("touch-action"),
        (o = e[n].children),
        o && o.length && ge(o, t);
  },
  ue = () => ie.forEach((e) => e()),
  fe = () => !ie.length && b.ticker.remove(ue),
  xe = (e) => {
    let t = ie.length;
    for (; t--; ) ie[t] === e && ie.splice(t, 1);
    b.to(fe, {
      overwrite: !0,
      delay: 15,
      duration: 0,
      onComplete: fe,
      data: "_draggable",
    });
  },
  me = (e, t, o, n) => {
    if (e.addEventListener) {
      let r = P[t];
      (n = n || (L ? { passive: !1 } : null)),
        e.addEventListener(r || t, o, n),
        r && t !== r && e.addEventListener(t, o, n);
    }
  },
  ye = (e, t, o, n) => {
    if (e.removeEventListener) {
      let r = P[t];
      e.removeEventListener(r || t, o, n),
        r && t !== r && e.removeEventListener(t, o, n);
    }
  },
  ve = (e) => {
    e.preventDefault && e.preventDefault(),
      e.preventManipulation && e.preventManipulation();
  },
  we = (e) => {
    (O = e.touches && z < e.touches.length), ye(e.target, "touchend", we);
  },
  be = (e) => {
    (O = e.touches && z < e.touches.length), me(e.target, "touchend", we);
  },
  Te = (e) =>
    T.pageYOffset ||
    e.scrollTop ||
    e.documentElement.scrollTop ||
    e.body.scrollTop ||
    0,
  Ee = (e) =>
    T.pageXOffset ||
    e.scrollLeft ||
    e.documentElement.scrollLeft ||
    e.body.scrollLeft ||
    0,
  Me = (e, t) => {
    me(e, "scroll", t), Se(e.parentNode) || Me(e.parentNode, t);
  },
  Xe = (e, t) => {
    ye(e, "scroll", t), Se(e.parentNode) || Xe(e.parentNode, t);
  },
  Se = (e) =>
    !(
      e &&
      e !== M &&
      9 !== e.nodeType &&
      e !== E.body &&
      e !== T &&
      e.nodeType &&
      e.parentNode
    ),
  Ye = (e, t) => {
    let o = "x" === t ? "Width" : "Height",
      n = "scroll" + o,
      r = "client" + o;
    return Math.max(
      0,
      Se(e)
        ? Math.max(M[n], X[n]) - (T["inner" + o] || M[r] || X[r])
        : e[n] - e[r]
    );
  },
  Ce = (e, t) => {
    let o = Ye(e, "x"),
      n = Ye(e, "y");
    Se(e) ? (e = pe) : Ce(e.parentNode, t),
      (e._gsMaxScrollX = o),
      (e._gsMaxScrollY = n),
      t ||
        ((e._gsScrollX = e.scrollLeft || 0), (e._gsScrollY = e.scrollTop || 0));
  },
  ke = (e, t, o) => {
    let n = e.style;
    n &&
      (q(n[t]) && (t = k(t, e) || t),
      null == o
        ? n.removeProperty &&
          n.removeProperty(t.replace(/([A-Z])/g, "-$1").toLowerCase())
        : (n[t] = o));
  },
  De = (e) =>
    T.getComputedStyle(
      e instanceof Element ? e : e.host || (e.parentNode || {}).host || e
    ),
  Le = {},
  Ne = (e) => {
    if (e === T)
      return (
        (Le.left = Le.top = 0),
        (Le.width = Le.right =
          M.clientWidth || e.innerWidth || X.clientWidth || 0),
        (Le.height = Le.bottom =
          (e.innerHeight || 0) - 20 < M.clientHeight
            ? M.clientHeight
            : e.innerHeight || X.clientHeight || 0),
        Le
      );
    let t = e.ownerDocument || E,
      o = q(e.pageX)
        ? e.nodeType || q(e.left) || q(e.top)
          ? D(e)[0].getBoundingClientRect()
          : e
        : {
            left: e.pageX - Ee(t),
            top: e.pageY - Te(t),
            right: e.pageX - Ee(t) + 1,
            bottom: e.pageY - Te(t) + 1,
          };
    return (
      q(o.right) && !q(o.width)
        ? ((o.right = o.left + o.width), (o.bottom = o.top + o.height))
        : q(o.width) &&
          (o = {
            width: o.right - o.left,
            height: o.bottom - o.top,
            right: o.right,
            left: o.left,
            bottom: o.bottom,
            top: o.top,
          }),
      o
    );
  },
  Pe = (e, t, o) => {
    let n,
      r = e.vars,
      i = r[o],
      l = e._listeners[t];
    return (
      G(i) &&
        (n = i.apply(
          r.callbackScope || e,
          r[o + "Params"] || [e.pointerEvent]
        )),
      l && !1 === e.dispatchEvent(t) && (n = !1),
      n
    );
  },
  Oe = (e, t) => {
    let o,
      n,
      r,
      i = D(e)[0];
    return i.nodeType || i === T
      ? Ae(i, t)
      : q(e.left)
        ? ((n = e.min || e.minX || e.minRotation || 0),
          (o = e.min || e.minY || 0),
          {
            left: n,
            top: o,
            width: (e.max || e.maxX || e.maxRotation || 0) - n,
            height: (e.max || e.maxY || 0) - o,
          })
        : ((r = { x: 0, y: 0 }),
          {
            left: e.left - r.x,
            top: e.top - r.y,
            width: e.width,
            height: e.height,
          });
  },
  Re = {},
  Ae = (e, t) => {
    t = D(t)[0];
    let o,
      n,
      r,
      i,
      l,
      a,
      s,
      d,
      c,
      p,
      h,
      g,
      u,
      f = e.getBBox && e.ownerSVGElement,
      x = e.ownerDocument || E;
    if (e === T)
      (r = Te(x)),
        (o = Ee(x)),
        (n =
          o +
          (x.documentElement.clientWidth ||
            e.innerWidth ||
            x.body.clientWidth ||
            0)),
        (i =
          r +
          ((e.innerHeight || 0) - 20 < x.documentElement.clientHeight
            ? x.documentElement.clientHeight
            : e.innerHeight || x.body.clientHeight || 0));
    else {
      if (t === T || q(t)) return e.getBoundingClientRect();
      (o = r = 0),
        f
          ? ((p = e.getBBox()), (h = p.width), (g = p.height))
          : (e.viewBox &&
              (p = e.viewBox.baseVal) &&
              ((o = p.x || 0), (r = p.y || 0), (h = p.width), (g = p.height)),
            h ||
              ((u = De(e)),
              (p = "border-box" === u.boxSizing),
              (h =
                (parseFloat(u.width) || e.clientWidth || 0) +
                (p
                  ? 0
                  : parseFloat(u.borderLeftWidth) +
                    parseFloat(u.borderRightWidth))),
              (g =
                (parseFloat(u.height) || e.clientHeight || 0) +
                (p
                  ? 0
                  : parseFloat(u.borderTopWidth) +
                    parseFloat(u.borderBottomWidth))))),
        (n = h),
        (i = g);
    }
    return e === t
      ? { left: o, top: r, width: n - o, height: i - r }
      : ((l = w(t, !0).multiply(w(e))),
        (a = l.apply({ x: o, y: r })),
        (s = l.apply({ x: n, y: r })),
        (d = l.apply({ x: n, y: i })),
        (c = l.apply({ x: o, y: i })),
        (o = Math.min(a.x, s.x, d.x, c.x)),
        (r = Math.min(a.y, s.y, d.y, c.y)),
        {
          left: o,
          top: r,
          width: Math.max(a.x, s.x, d.x, c.x) - o,
          height: Math.max(a.y, s.y, d.y, c.y) - r,
        });
  },
  _e = (e, t, o, n, r, i) => {
    let l,
      a,
      s,
      d = {};
    if (t)
      if (1 !== r && t instanceof Array) {
        if (((d.end = l = []), (s = t.length), U(t[0])))
          for (a = 0; a < s; a++) l[a] = he(t[a], r);
        else for (a = 0; a < s; a++) l[a] = t[a] * r;
        (o += 1.1), (n -= 1.1);
      } else
        G(t)
          ? (d.end = (o) => {
              let n,
                i,
                l = t.call(e, o);
              if (1 !== r)
                if (U(l)) {
                  for (i in ((n = {}), l)) n[i] = l[i] * r;
                  l = n;
                } else l *= r;
              return l;
            })
          : (d.end = t);
    return (
      (o || 0 === o) && (d.max = o),
      (n || 0 === n) && (d.min = n),
      i && (d.velocity = 0),
      d
    );
  },
  Be = (e) => {
    let t;
    return (
      !(!e || !e.getAttribute || e === X) &&
      (!(
        "true" !== (t = e.getAttribute("data-clickable")) &&
        ("false" === t ||
          (!se.test(e.nodeName + "") &&
            "true" !== e.getAttribute("contentEditable")))
      ) ||
        Be(e.parentNode))
    );
  },
  Ie = (e, t) => {
    let o,
      n = e.length;
    for (; n--; )
      (o = e[n]),
        (o.ondragstart = o.onselectstart = t ? null : $),
        b.set(o, { lazy: !0, userSelect: t ? "text" : "none" });
  },
  He = (e) =>
    "fixed" === De(e).position ||
    ((e = e.parentNode) && 1 === e.nodeType ? He(e) : void 0),
  Fe = function (e, t) {
    (e = b.utils.toArray(e)[0]), (t = t || {});
    let o,
      n,
      r,
      i,
      l,
      a,
      s = document.createElement("div"),
      d = s.style,
      c = e.firstChild,
      p = 0,
      h = 0,
      g = e.scrollTop,
      u = e.scrollLeft,
      f = e.scrollWidth,
      x = e.scrollHeight,
      m = 0,
      y = 0,
      v = 0;
    F && !1 !== t.force3D
      ? ((l = "translate3d("), (a = "px,0px)"))
      : j && ((l = "translate("), (a = "px)")),
      (this.scrollTop = function (e, t) {
        if (!arguments.length) return -this.top();
        this.top(-e, t);
      }),
      (this.scrollLeft = function (e, t) {
        if (!arguments.length) return -this.left();
        this.left(-e, t);
      }),
      (this.left = function (o, n) {
        if (!arguments.length) return -(e.scrollLeft + h);
        let r = e.scrollLeft - u,
          i = h;
        if ((r > 2 || r < -2) && !n)
          return (
            (u = e.scrollLeft),
            b.killTweensOf(this, { left: 1, scrollLeft: 1 }),
            this.left(-u),
            void (t.onKill && t.onKill())
          );
        (o = -o) < 0
          ? ((h = (o - 0.5) | 0), (o = 0))
          : o > y
            ? ((h = (o - y) | 0), (o = y))
            : (h = 0),
          (h || i) &&
            (this._skip || (d[j] = l + -h + "px," + -p + a),
            h + m >= 0 && (d.paddingRight = h + m + "px")),
          (e.scrollLeft = 0 | o),
          (u = e.scrollLeft);
      }),
      (this.top = function (o, n) {
        if (!arguments.length) return -(e.scrollTop + p);
        let r = e.scrollTop - g,
          i = p;
        if ((r > 2 || r < -2) && !n)
          return (
            (g = e.scrollTop),
            b.killTweensOf(this, { top: 1, scrollTop: 1 }),
            this.top(-g),
            void (t.onKill && t.onKill())
          );
        (o = -o) < 0
          ? ((p = (o - 0.5) | 0), (o = 0))
          : o > v
            ? ((p = (o - v) | 0), (o = v))
            : (p = 0),
          (p || i) && (this._skip || (d[j] = l + -h + "px," + -p + a)),
          (e.scrollTop = 0 | o),
          (g = e.scrollTop);
      }),
      (this.maxScrollTop = () => v),
      (this.maxScrollLeft = () => y),
      (this.disable = function () {
        for (c = s.firstChild; c; )
          (i = c.nextSibling), e.appendChild(c), (c = i);
        e === s.parentNode && e.removeChild(s);
      }),
      (this.enable = function () {
        if (((c = e.firstChild), c !== s)) {
          for (; c; ) (i = c.nextSibling), s.appendChild(c), (c = i);
          e.appendChild(s), this.calibrate();
        }
      }),
      (this.calibrate = function (t) {
        let i,
          l,
          a,
          c = e.clientWidth === o;
        (g = e.scrollTop),
          (u = e.scrollLeft),
          (c &&
            e.clientHeight === n &&
            s.offsetHeight === r &&
            f === e.scrollWidth &&
            x === e.scrollHeight &&
            !t) ||
            ((p || h) &&
              ((l = this.left()),
              (a = this.top()),
              this.left(-e.scrollLeft),
              this.top(-e.scrollTop)),
            (i = De(e)),
            (c && !t) ||
              ((d.display = "block"),
              (d.width = "auto"),
              (d.paddingRight = "0px"),
              (m = Math.max(0, e.scrollWidth - e.clientWidth)),
              m &&
                (m +=
                  parseFloat(i.paddingLeft) +
                  (W ? parseFloat(i.paddingRight) : 0))),
            (d.display = "inline-block"),
            (d.position = "relative"),
            (d.overflow = "visible"),
            (d.verticalAlign = "top"),
            (d.boxSizing = "content-box"),
            (d.width = "100%"),
            (d.paddingRight = m + "px"),
            W && (d.paddingBottom = i.paddingBottom),
            (o = e.clientWidth),
            (n = e.clientHeight),
            (f = e.scrollWidth),
            (x = e.scrollHeight),
            (y = e.scrollWidth - o),
            (v = e.scrollHeight - n),
            (r = s.offsetHeight),
            (d.display = "block"),
            (l || a) && (this.left(l), this.top(a)));
      }),
      (this.content = s),
      (this.element = e),
      (this._skip = !1),
      this.enable();
  },
  We = (e) => {
    if (V() && document.body) {
      let e = window && window.navigator;
      (T = window),
        (E = document),
        (M = E.documentElement),
        (X = E.body),
        (S = ee("div")),
        (B = !!window.PointerEvent),
        (Y = ee("div")),
        (Y.style.cssText =
          "visibility:hidden;height:1px;top:-1px;pointer-events:none;position:relative;clear:both;cursor:grab"),
        (_ = "grab" === Y.style.cursor ? "grab" : "move"),
        (R = e && -1 !== e.userAgent.toLowerCase().indexOf("android")),
        (N =
          ("ontouchstart" in M && "orientation" in T) ||
          (e && (e.MaxTouchPoints > 0 || e.msMaxTouchPoints > 0))),
        (W = (function () {
          let e,
            t = ee("div"),
            o = ee("div"),
            n = o.style,
            r = X;
          return (
            (n.display = "inline-block"),
            (n.position = "relative"),
            (t.style.cssText =
              "width:90px;height:40px;padding:10px;overflow:auto;visibility:hidden"),
            t.appendChild(o),
            r.appendChild(t),
            (e = o.offsetHeight + 18 > t.scrollHeight),
            r.removeChild(t),
            e
          );
        })()),
        (P = (function (e) {
          let t = e.split(","),
            o = (
              "onpointerdown" in S
                ? "pointerdown,pointermove,pointerup,pointercancel"
                : "onmspointerdown" in S
                  ? "MSPointerDown,MSPointerMove,MSPointerUp,MSPointerCancel"
                  : e
            ).split(","),
            n = {},
            r = 4;
          for (; --r > -1; ) (n[t[r]] = o[r]), (n[o[r]] = t[r]);
          try {
            M.addEventListener(
              "test",
              null,
              Object.defineProperty({}, "passive", {
                get: function () {
                  L = 1;
                },
              })
            );
          } catch (e) {}
          return n;
        })("touchstart,touchmove,touchend,touchcancel")),
        me(E, "touchcancel", $),
        me(T, "touchmove", $),
        X && X.addEventListener("touchstart", $),
        me(E, "contextmenu", function () {
          for (let e in le) le[e].isPressed && le[e].endDrag();
        }),
        (b = C = K());
    }
    b
      ? ((A = b.plugins.inertia),
        (I = b.core.context || function () {}),
        (k = b.utils.checkPrefix),
        (j = k(j)),
        (Z = k(Z)),
        (D = b.utils.toArray),
        (H = b.core.getStyleSaver),
        (F = !!k("perspective")))
      : e && console.warn("Please gsap.registerPlugin(Draggable)");
  };
class ze extends class {
  constructor(e) {
    (this._listeners = {}), (this.target = e || this);
  }
  addEventListener(e, t) {
    let o = this._listeners[e] || (this._listeners[e] = []);
    ~o.indexOf(t) || o.push(t);
  }
  removeEventListener(e, t) {
    let o = this._listeners[e],
      n = o && o.indexOf(t);
    n >= 0 && o.splice(n, 1);
  }
  dispatchEvent(e) {
    let t;
    return (
      (this._listeners[e] || []).forEach(
        (o) => !1 === o.call(this, { type: e, target: this.target }) && (t = !1)
      ),
      t
    );
  }
} {
  constructor(e, t) {
    super(),
      C || We(1),
      (e = D(e)[0]),
      (this.styles = H && H(e, "transform,left,top")),
      A || (A = b.plugins.inertia),
      (this.vars = t = he(t || {})),
      (this.target = e),
      (this.x = this.y = this.rotation = 0),
      (this.dragResistance = parseFloat(t.dragResistance) || 0),
      (this.edgeResistance = isNaN(t.edgeResistance)
        ? 1
        : parseFloat(t.edgeResistance) || 0),
      (this.lockAxis = t.lockAxis),
      (this.autoScroll = t.autoScroll || 0),
      (this.lockedAxis = null),
      (this.allowEventDefault = !!t.allowEventDefault),
      b.getProperty(e, "x");
    let o,
      n,
      r,
      i,
      l,
      a,
      s,
      d,
      c,
      p,
      h,
      g,
      u,
      f,
      x,
      m,
      y,
      X,
      S,
      k,
      L,
      F,
      W,
      V,
      K,
      $,
      j,
      ee,
      se,
      fe,
      we,
      Ye,
      Le,
      Ae = (t.type || "x,y").toLowerCase(),
      Ve = ~Ae.indexOf("x") || ~Ae.indexOf("y"),
      Ke = -1 !== Ae.indexOf("rotation"),
      Ge = Ke ? "rotation" : Ve ? "x" : "left",
      Ue = Ve ? "y" : "top",
      qe = !(!~Ae.indexOf("x") && !~Ae.indexOf("left") && "scroll" !== Ae),
      $e = !(!~Ae.indexOf("y") && !~Ae.indexOf("top") && "scroll" !== Ae),
      je = t.minimumMovement || 2,
      Ze = this,
      Je = D(t.trigger || t.handle || e),
      Qe = {},
      et = 0,
      tt = !1,
      ot = t.autoScrollMarginTop || 40,
      nt = t.autoScrollMarginRight || 40,
      rt = t.autoScrollMarginBottom || 40,
      it = t.autoScrollMarginLeft || 40,
      lt = t.clickableTest || Be,
      at = 0,
      st = e._gsap || b.core.getCache(e),
      dt = He(e),
      ct = (t, o) => parseFloat(st.get(e, t, o)),
      pt = e.ownerDocument || E,
      ht = (e) => (
        ve(e), e.stopImmediatePropagation && e.stopImmediatePropagation(), !1
      ),
      gt = (t) => {
        if (Ze.autoScroll && Ze.isDragging && (tt || y)) {
          let t,
            o,
            n,
            r,
            i,
            l,
            a,
            s,
            d = e,
            c = 15 * Ze.autoScroll;
          for (
            tt = !1,
              pe.scrollTop =
                null != T.pageYOffset
                  ? T.pageYOffset
                  : null != pt.documentElement.scrollTop
                    ? pt.documentElement.scrollTop
                    : pt.body.scrollTop,
              pe.scrollLeft =
                null != T.pageXOffset
                  ? T.pageXOffset
                  : null != pt.documentElement.scrollLeft
                    ? pt.documentElement.scrollLeft
                    : pt.body.scrollLeft,
              r = Ze.pointerX - pe.scrollLeft,
              i = Ze.pointerY - pe.scrollTop;
            d && !o;

          )
            (o = Se(d.parentNode)),
              (t = o ? pe : d.parentNode),
              (n = o
                ? {
                    bottom: Math.max(M.clientHeight, T.innerHeight || 0),
                    right: Math.max(M.clientWidth, T.innerWidth || 0),
                    left: 0,
                    top: 0,
                  }
                : t.getBoundingClientRect()),
              (l = a = 0),
              $e &&
                ((s = t._gsMaxScrollY - t.scrollTop),
                s < 0
                  ? (a = s)
                  : i > n.bottom - rt && s
                    ? ((tt = !0),
                      (a = Math.min(
                        s,
                        (c * (1 - Math.max(0, n.bottom - i) / rt)) | 0
                      )))
                    : i < n.top + ot &&
                      t.scrollTop &&
                      ((tt = !0),
                      (a = -Math.min(
                        t.scrollTop,
                        (c * (1 - Math.max(0, i - n.top) / ot)) | 0
                      ))),
                a && (t.scrollTop += a)),
              qe &&
                ((s = t._gsMaxScrollX - t.scrollLeft),
                s < 0
                  ? (l = s)
                  : r > n.right - nt && s
                    ? ((tt = !0),
                      (l = Math.min(
                        s,
                        (c * (1 - Math.max(0, n.right - r) / nt)) | 0
                      )))
                    : r < n.left + it &&
                      t.scrollLeft &&
                      ((tt = !0),
                      (l = -Math.min(
                        t.scrollLeft,
                        (c * (1 - Math.max(0, r - n.left) / it)) | 0
                      ))),
                l && (t.scrollLeft += l)),
              o &&
                (l || a) &&
                (T.scrollTo(t.scrollLeft, t.scrollTop),
                St(Ze.pointerX + l, Ze.pointerY + a)),
              (d = t);
        }
        if (y) {
          let { x: o, y: r } = Ze;
          Ke
            ? ((Ze.deltaX = o - parseFloat(st.rotation)),
              (Ze.rotation = o),
              (st.rotation = o + "deg"),
              st.renderTransform(1, st))
            : n
              ? ($e && ((Ze.deltaY = r - n.top()), n.top(r)),
                qe && ((Ze.deltaX = o - n.left()), n.left(o)))
              : Ve
                ? ($e &&
                    ((Ze.deltaY = r - parseFloat(st.y)), (st.y = r + "px")),
                  qe && ((Ze.deltaX = o - parseFloat(st.x)), (st.x = o + "px")),
                  st.renderTransform(1, st))
                : ($e &&
                    ((Ze.deltaY = r - parseFloat(e.style.top || 0)),
                    (e.style.top = r + "px")),
                  qe &&
                    ((Ze.deltaX = o - parseFloat(e.style.left || 0)),
                    (e.style.left = o + "px"))),
            !d ||
              t ||
              ee ||
              ((ee = !0),
              !1 === Pe(Ze, "drag", "onDrag") &&
                (qe && (Ze.x -= Ze.deltaX), $e && (Ze.y -= Ze.deltaY), gt(!0)),
              (ee = !1));
        }
        y = !1;
      },
      ut = (t, o) => {
        let r,
          i,
          { x: l, y: a } = Ze;
        e._gsap || (st = b.core.getCache(e)),
          st.uncache && b.getProperty(e, "x"),
          Ve
            ? ((Ze.x = parseFloat(st.x)), (Ze.y = parseFloat(st.y)))
            : Ke
              ? (Ze.x = Ze.rotation = parseFloat(st.rotation))
              : n
                ? ((Ze.y = n.top()), (Ze.x = n.left()))
                : ((Ze.y =
                    parseFloat(e.style.top || ((i = De(e)) && i.top)) || 0),
                  (Ze.x = parseFloat(e.style.left || (i || {}).left) || 0)),
          (S || k || L) &&
            !o &&
            (Ze.isDragging || Ze.isThrowing) &&
            (L &&
              ((ce.x = Ze.x),
              (ce.y = Ze.y),
              (r = L(ce)),
              r.x !== Ze.x && ((Ze.x = r.x), (y = !0)),
              r.y !== Ze.y && ((Ze.y = r.y), (y = !0))),
            S &&
              ((r = S(Ze.x)),
              r !== Ze.x && ((Ze.x = r), Ke && (Ze.rotation = r), (y = !0))),
            k && ((r = k(Ze.y)), r !== Ze.y && (Ze.y = r), (y = !0))),
          y && gt(!0),
          t ||
            ((Ze.deltaX = Ze.x - l),
            (Ze.deltaY = Ze.y - a),
            Pe(Ze, "throwupdate", "onThrowUpdate"));
      },
      ft = (e, t, o, n) => (
        null == t && (t = -oe),
        null == o && (o = oe),
        G(e)
          ? (r) => {
              let i = Ze.isPressed ? 1 - Ze.edgeResistance : 1;
              return (
                e.call(
                  Ze,
                  (r > o ? o + (r - o) * i : r < t ? t + (r - t) * i : r) * n
                ) * n
              );
            }
          : Q(e)
            ? (n) => {
                let r,
                  i,
                  l = e.length,
                  a = 0,
                  s = oe;
                for (; --l > -1; )
                  (r = e[l]),
                    (i = r - n),
                    i < 0 && (i = -i),
                    i < s && r >= t && r <= o && ((a = l), (s = i));
                return e[a];
              }
            : isNaN(e)
              ? (e) => e
              : () => e * n
      ),
      xt = () => {
        let o, r, i, l;
        (s = !1),
          n
            ? (n.calibrate(),
              (Ze.minX = h = -n.maxScrollLeft()),
              (Ze.minY = u = -n.maxScrollTop()),
              (Ze.maxX = p = Ze.maxY = g = 0),
              (s = !0))
            : t.bounds &&
              ((o = Oe(t.bounds, e.parentNode)),
              Ke
                ? ((Ze.minX = h = o.left),
                  (Ze.maxX = p = o.left + o.width),
                  (Ze.minY = u = Ze.maxY = g = 0))
                : q(t.bounds.maxX) && q(t.bounds.maxY)
                  ? ((r = Oe(e, e.parentNode)),
                    (Ze.minX = h = Math.round(ct(Ge, "px") + o.left - r.left)),
                    (Ze.minY = u = Math.round(ct(Ue, "px") + o.top - r.top)),
                    (Ze.maxX = p = Math.round(h + (o.width - r.width))),
                    (Ze.maxY = g = Math.round(u + (o.height - r.height))))
                  : ((o = t.bounds),
                    (Ze.minX = h = o.minX),
                    (Ze.minY = u = o.minY),
                    (Ze.maxX = p = o.maxX),
                    (Ze.maxY = g = o.maxY)),
              h > p && ((Ze.minX = p), (Ze.maxX = p = h), (h = Ze.minX)),
              u > g && ((Ze.minY = g), (Ze.maxY = g = u), (u = Ze.minY)),
              Ke && ((Ze.minRotation = h), (Ze.maxRotation = p)),
              (s = !0)),
          t.liveSnap &&
            ((i = !0 === t.liveSnap ? t.snap || {} : t.liveSnap),
            (l = Q(i) || G(i)),
            Ke
              ? ((S = ft(l ? i : i.rotation, h, p, 1)), (k = null))
              : i.points
                ? (L = ((e, t, o, n, r, i, l) => (
                    (i = i && i < oe ? i * i : oe),
                    G(e)
                      ? (a) => {
                          let s,
                            d,
                            c,
                            p = Ze.isPressed ? 1 - Ze.edgeResistance : 1,
                            h = a.x,
                            g = a.y;
                          return (
                            (a.x = h =
                              h > o
                                ? o + (h - o) * p
                                : h < t
                                  ? t + (h - t) * p
                                  : h),
                            (a.y = g =
                              g > r
                                ? r + (g - r) * p
                                : g < n
                                  ? n + (g - n) * p
                                  : g),
                            (s = e.call(Ze, a)),
                            s !== a && ((a.x = s.x), (a.y = s.y)),
                            1 !== l && ((a.x *= l), (a.y *= l)),
                            i < oe &&
                              ((d = a.x - h),
                              (c = a.y - g),
                              d * d + c * c > i && ((a.x = h), (a.y = g))),
                            a
                          );
                        }
                      : Q(e)
                        ? (t) => {
                            let o,
                              n,
                              r,
                              l,
                              a = e.length,
                              s = 0,
                              d = oe;
                            for (; --a > -1; )
                              (r = e[a]),
                                (o = r.x - t.x),
                                (n = r.y - t.y),
                                (l = o * o + n * n),
                                l < d && ((s = a), (d = l));
                            return d <= i ? e[s] : t;
                          }
                        : (e) => e
                  ))(l ? i : i.points, h, p, u, g, i.radius, n ? -1 : 1))
                : (qe &&
                    (S = ft(
                      l ? i : i.x || i.left || i.scrollLeft,
                      h,
                      p,
                      n ? -1 : 1
                    )),
                  $e &&
                    (k = ft(
                      l ? i : i.y || i.top || i.scrollTop,
                      u,
                      g,
                      n ? -1 : 1
                    ))));
      },
      mt = () => {
        (Ze.isThrowing = !1), Pe(Ze, "throwcomplete", "onThrowComplete");
      },
      yt = () => {
        Ze.isThrowing = !1;
      },
      vt = (o, r) => {
        let i, l, a, d;
        o && A
          ? (!0 === o &&
              ((i = t.snap || t.liveSnap || {}),
              (l = Q(i) || G(i)),
              (o = {
                resistance:
                  (t.throwResistance || t.resistance || 1e3) / (Ke ? 10 : 1),
              }),
              Ke
                ? (o.rotation = _e(Ze, l ? i : i.rotation, p, h, 1, r))
                : (qe &&
                    (o[Ge] = _e(
                      Ze,
                      l ? i : i.points || i.x || i.left,
                      p,
                      h,
                      n ? -1 : 1,
                      r || "x" === Ze.lockedAxis
                    )),
                  $e &&
                    (o[Ue] = _e(
                      Ze,
                      l ? i : i.points || i.y || i.top,
                      g,
                      u,
                      n ? -1 : 1,
                      r || "y" === Ze.lockedAxis
                    )),
                  (i.points || (Q(i) && U(i[0]))) &&
                    ((o.linkedProps = Ge + "," + Ue), (o.radius = i.radius)))),
            (Ze.isThrowing = !0),
            (d = isNaN(t.overshootTolerance)
              ? 1 === t.edgeResistance
                ? 0
                : 1 - Ze.edgeResistance + 0.2
              : t.overshootTolerance),
            o.duration ||
              (o.duration = {
                max: Math.max(
                  t.minDuration || 0,
                  "maxDuration" in t ? t.maxDuration : 2
                ),
                min: isNaN(t.minDuration)
                  ? 0 === d || (U(o) && o.resistance > 1e3)
                    ? 0
                    : 0.5
                  : t.minDuration,
                overshoot: d,
              }),
            (Ze.tween = a =
              b.to(n || e, {
                inertia: o,
                data: "_draggable",
                inherit: !1,
                onComplete: mt,
                onInterrupt: yt,
                onUpdate: t.fastMode ? Pe : ut,
                onUpdateParams: t.fastMode
                  ? [Ze, "onthrowupdate", "onThrowUpdate"]
                  : i && i.radius
                    ? [!1, !0]
                    : [],
              })),
            t.fastMode ||
              (n && (n._skip = !0),
              a.render(1e9, !0, !0),
              ut(!0, !0),
              (Ze.endX = Ze.x),
              (Ze.endY = Ze.y),
              Ke && (Ze.endRotation = Ze.x),
              a.play(0),
              ut(!0, !0),
              n && (n._skip = !1)))
          : s && Ze.applyBounds();
      },
      wt = (t) => {
        let o,
          n = V;
        (V = w(e.parentNode, !0)),
          t &&
            Ze.isPressed &&
            !V.equals(n || new v()) &&
            ((o = n.inverse().apply({ x: r, y: i })),
            V.apply(o, o),
            (r = o.x),
            (i = o.y)),
          V.equals(ne) && (V = null);
      },
      bt = () => {
        let t,
          o,
          d,
          c = 1 - Ze.edgeResistance,
          f = dt ? Ee(pt) : 0,
          x = dt ? Te(pt) : 0;
        Ve &&
          ((st.x = ct(Ge, "px") + "px"),
          (st.y = ct(Ue, "px") + "px"),
          st.renderTransform()),
          wt(!1),
          (Re.x = Ze.pointerX - f),
          (Re.y = Ze.pointerY - x),
          V && V.apply(Re, Re),
          (r = Re.x),
          (i = Re.y),
          y && (St(Ze.pointerX, Ze.pointerY), gt(!0)),
          (Ye = w(e)),
          n
            ? (xt(), (a = n.top()), (l = n.left()))
            : (Tt() ? (ut(!0, !0), xt()) : Ze.applyBounds(),
              Ke
                ? ((t = e.ownerSVGElement
                    ? [st.xOrigin - e.getBBox().x, st.yOrigin - e.getBBox().y]
                    : (De(e)[Z] || "0 0").split(" ")),
                  (m = Ze.rotationOrigin =
                    w(e).apply({
                      x: parseFloat(t[0]) || 0,
                      y: parseFloat(t[1]) || 0,
                    })),
                  ut(!0, !0),
                  (o = Ze.pointerX - m.x - f),
                  (d = m.y - Ze.pointerY + x),
                  (l = Ze.x),
                  (a = Ze.y = Math.atan2(d, o) * te))
                : ((a = ct(Ue, "px")), (l = ct(Ge, "px")))),
          s &&
            c &&
            (l > p ? (l = p + (l - p) / c) : l < h && (l = h - (h - l) / c),
            Ke ||
              (a > g ? (a = g + (a - g) / c) : a < u && (a = u - (u - a) / c))),
          (Ze.startX = l = J(l)),
          (Ze.startY = a = J(a));
      },
      Tt = () => Ze.tween && Ze.tween.isActive(),
      Et = () => {
        !Y.parentNode || Tt() || Ze.isDragging || Y.parentNode.removeChild(Y);
      },
      Mt = (l, a) => {
        let s;
        if (
          !o ||
          Ze.isPressed ||
          !l ||
          (!(("mousedown" !== l.type && "pointerdown" !== l.type) || a) &&
            re() - at < 30 &&
            P[Ze.pointerEvent.type])
        )
          we && l && o && ve(l);
        else {
          if (
            ((K = Tt()),
            (Le = !1),
            (Ze.pointerEvent = l),
            P[l.type]
              ? ((W = ~l.type.indexOf("touch")
                  ? l.currentTarget || l.target
                  : pt),
                me(W, "touchend", Yt),
                me(W, "touchmove", Xt),
                me(W, "touchcancel", Yt),
                me(pt, "touchstart", be))
              : ((W = null), me(pt, "mousemove", Xt)),
            (j = null),
            (B && W) ||
              (me(pt, "mouseup", Yt),
              l && l.target && me(l.target, "mouseup", Yt)),
            (F = lt.call(Ze, l.target) && !1 === t.dragClickables && !a),
            F)
          )
            return (
              me(l.target, "change", Yt),
              Pe(Ze, "pressInit", "onPressInit"),
              Pe(Ze, "press", "onPress"),
              Ie(Je, !0),
              void (we = !1)
            );
          var p;
          if (
            (($ =
              !(
                !W ||
                qe === $e ||
                !1 === Ze.vars.allowNativeTouchScrolling ||
                (Ze.vars.allowContextMenu && l && (l.ctrlKey || l.which > 2))
              ) && (qe ? "y" : "x")),
            (we = !$ && !Ze.allowEventDefault),
            we && (ve(l), me(T, "touchforcechange", ve)),
            l.changedTouches
              ? ((l = f = l.changedTouches[0]), (x = l.identifier))
              : l.pointerId
                ? (x = l.pointerId)
                : (f = x = null),
            z++,
            (p = gt),
            ie.push(p),
            1 === ie.length && b.ticker.add(ue),
            (i = Ze.pointerY = l.pageY),
            (r = Ze.pointerX = l.pageX),
            Pe(Ze, "pressInit", "onPressInit"),
            ($ || Ze.autoScroll) && Ce(e.parentNode),
            !e.parentNode ||
              !Ze.autoScroll ||
              n ||
              Ke ||
              !e.parentNode._gsMaxScrollX ||
              Y.parentNode ||
              e.getBBox ||
              ((Y.style.width = e.parentNode.scrollWidth + "px"),
              e.parentNode.appendChild(Y)),
            bt(),
            Ze.tween && Ze.tween.kill(),
            (Ze.isThrowing = !1),
            b.killTweensOf(n || e, Qe, !0),
            n && b.killTweensOf(e, { scrollTo: 1 }, !0),
            (Ze.tween = Ze.lockedAxis = null),
            (t.zIndexBoost || (!Ke && !n && !1 !== t.zIndexBoost)) &&
              (e.style.zIndex = ze.zIndex++),
            (Ze.isPressed = !0),
            (d = !(!t.onDrag && !Ze._listeners.drag)),
            (c = !(!t.onMove && !Ze._listeners.move)),
            !1 !== t.cursor || t.activeCursor)
          )
            for (s = Je.length; --s > -1; )
              b.set(Je[s], {
                cursor:
                  t.activeCursor || t.cursor || ("grab" === _ ? "grabbing" : _),
              });
          Pe(Ze, "press", "onPress");
        }
      },
      Xt = (t) => {
        let n,
          l,
          a,
          s,
          d,
          p,
          h = t;
        if (o && !O && Ze.isPressed && t) {
          if (((Ze.pointerEvent = t), (n = t.changedTouches), n)) {
            if ((t = n[0]) !== f && t.identifier !== x) {
              for (
                s = n.length;
                --s > -1 && (t = n[s]).identifier !== x && t.target !== e;

              );
              if (s < 0) return;
            }
          } else if (t.pointerId && x && t.pointerId !== x) return;
          W &&
          $ &&
          !j &&
          ((Re.x = t.pageX - (dt ? Ee(pt) : 0)),
          (Re.y = t.pageY - (dt ? Te(pt) : 0)),
          V && V.apply(Re, Re),
          (l = Re.x),
          (a = Re.y),
          (d = Math.abs(l - r)),
          (p = Math.abs(a - i)),
          ((d !== p && (d > je || p > je)) || (R && $ === j)) &&
            ((j = d > p && qe ? "x" : "y"),
            $ && j !== $ && me(T, "touchforcechange", ve),
            !1 !== Ze.vars.lockAxisOnTouchScroll &&
              qe &&
              $e &&
              ((Ze.lockedAxis = "x" === j ? "y" : "x"),
              G(Ze.vars.onLockAxis) && Ze.vars.onLockAxis.call(Ze, h)),
            R && $ === j))
            ? Yt(h)
            : (Ze.allowEventDefault ||
              ($ && (!j || $ === j)) ||
              !1 === h.cancelable
                ? we && (we = !1)
                : (ve(h), (we = !0)),
              Ze.autoScroll && (tt = !0),
              St(t.pageX, t.pageY, c));
        } else we && t && o && ve(t);
      },
      St = (e, t, o) => {
        let n,
          d,
          c,
          f,
          x,
          v,
          w = 1 - Ze.dragResistance,
          b = 1 - Ze.edgeResistance,
          T = Ze.pointerX,
          E = Ze.pointerY,
          M = a,
          X = Ze.x,
          Y = Ze.y,
          C = Ze.endX,
          D = Ze.endY,
          N = Ze.endRotation,
          P = y;
        (Ze.pointerX = e),
          (Ze.pointerY = t),
          dt && ((e -= Ee(pt)), (t -= Te(pt))),
          Ke
            ? ((f = Math.atan2(m.y - t, e - m.x) * te),
              (x = Ze.y - f),
              x > 180
                ? ((a -= 360), (Ze.y = f))
                : x < -180 && ((a += 360), (Ze.y = f)),
              Ze.x !== l || Math.abs(a - f) > je
                ? ((Ze.y = f), (c = l + (a - f) * w))
                : (c = l))
            : (V &&
                ((v = e * V.a + t * V.c + V.e),
                (t = e * V.b + t * V.d + V.f),
                (e = v)),
              (d = t - i),
              (n = e - r),
              d < je && d > -je && (d = 0),
              n < je && n > -je && (n = 0),
              (Ze.lockAxis || Ze.lockedAxis) &&
                (n || d) &&
                ((v = Ze.lockedAxis),
                v ||
                  ((Ze.lockedAxis = v =
                    qe && Math.abs(n) > Math.abs(d) ? "y" : $e ? "x" : null),
                  v &&
                    G(Ze.vars.onLockAxis) &&
                    Ze.vars.onLockAxis.call(Ze, Ze.pointerEvent)),
                "y" === v ? (d = 0) : "x" === v && (n = 0)),
              (c = J(l + n * w)),
              (f = J(a + d * w))),
          (S || k || L) &&
            (Ze.x !== c || (Ze.y !== f && !Ke)) &&
            (L &&
              ((ce.x = c), (ce.y = f), (v = L(ce)), (c = J(v.x)), (f = J(v.y))),
            S && (c = J(S(c))),
            k && (f = J(k(f)))),
          s &&
            (c > p
              ? (c = p + Math.round((c - p) * b))
              : c < h && (c = h + Math.round((c - h) * b)),
            Ke ||
              (f > g
                ? (f = Math.round(g + (f - g) * b))
                : f < u && (f = Math.round(u + (f - u) * b)))),
          (Ze.x !== c || (Ze.y !== f && !Ke)) &&
            (Ke
              ? ((Ze.endRotation = Ze.x = Ze.endX = c), (y = !0))
              : ($e && ((Ze.y = Ze.endY = f), (y = !0)),
                qe && ((Ze.x = Ze.endX = c), (y = !0))),
            o && !1 === Pe(Ze, "move", "onMove")
              ? ((Ze.pointerX = T),
                (Ze.pointerY = E),
                (a = M),
                (Ze.x = X),
                (Ze.y = Y),
                (Ze.endX = C),
                (Ze.endY = D),
                (Ze.endRotation = N),
                (y = P))
              : !Ze.isDragging &&
                Ze.isPressed &&
                ((Ze.isDragging = Le = !0),
                Pe(Ze, "dragstart", "onDragStart")));
      },
      Yt = (n, r) => {
        if (
          !o ||
          !Ze.isPressed ||
          (n &&
            null != x &&
            !r &&
            ((n.pointerId && n.pointerId !== x && n.target !== e) ||
              (n.changedTouches &&
                !((e, t) => {
                  let o = e.length;
                  for (; o--; ) if (e[o].identifier === t) return !0;
                })(n.changedTouches, x))))
        )
          return void (we && n && o && ve(n));
        Ze.isPressed = !1;
        let i,
          l,
          a,
          s,
          d,
          c = n,
          p = Ze.isDragging,
          h = Ze.vars.allowContextMenu && n && (n.ctrlKey || n.which > 2),
          g = b.delayedCall(0.001, Et);
        if (
          (W
            ? (ye(W, "touchend", Yt),
              ye(W, "touchmove", Xt),
              ye(W, "touchcancel", Yt),
              ye(pt, "touchstart", be))
            : ye(pt, "mousemove", Xt),
          ye(T, "touchforcechange", ve),
          (B && W) ||
            (ye(pt, "mouseup", Yt),
            n && n.target && ye(n.target, "mouseup", Yt)),
          (y = !1),
          p && ((et = de = re()), (Ze.isDragging = !1)),
          xe(gt),
          F && !h)
        )
          return (
            n && (ye(n.target, "change", Yt), (Ze.pointerEvent = c)),
            Ie(Je, !1),
            Pe(Ze, "release", "onRelease"),
            Pe(Ze, "click", "onClick"),
            void (F = !1)
          );
        for (l = Je.length; --l > -1; )
          ke(Je[l], "cursor", t.cursor || (!1 !== t.cursor ? _ : null));
        if ((z--, n)) {
          if (
            ((i = n.changedTouches),
            i && (n = i[0]) !== f && n.identifier !== x)
          ) {
            for (
              l = i.length;
              --l > -1 && (n = i[l]).identifier !== x && n.target !== e;

            );
            if (l < 0 && !r) return;
          }
          (Ze.pointerEvent = c),
            (Ze.pointerX = n.pageX),
            (Ze.pointerY = n.pageY);
        }
        return (
          h && c
            ? (ve(c), (we = !0), Pe(Ze, "release", "onRelease"))
            : c && !p
              ? ((we = !1),
                K && (t.snap || t.bounds) && vt(t.inertia || t.throwProps),
                Pe(Ze, "release", "onRelease"),
                (R && "touchmove" === c.type) ||
                  -1 !== c.type.indexOf("cancel") ||
                  (Pe(Ze, "click", "onClick"),
                  re() - at < 300 && Pe(Ze, "doubleclick", "onDoubleClick"),
                  (s = c.target || e),
                  (at = re()),
                  (d = () => {
                    at === se ||
                      !Ze.enabled() ||
                      Ze.isPressed ||
                      c.defaultPrevented ||
                      (s.click
                        ? s.click()
                        : pt.createEvent &&
                          ((a = pt.createEvent("MouseEvents")),
                          a.initMouseEvent(
                            "click",
                            !0,
                            !0,
                            T,
                            1,
                            Ze.pointerEvent.screenX,
                            Ze.pointerEvent.screenY,
                            Ze.pointerX,
                            Ze.pointerY,
                            !1,
                            !1,
                            !1,
                            !1,
                            0,
                            null
                          ),
                          s.dispatchEvent(a)));
                  }),
                  R || c.defaultPrevented || b.delayedCall(0.05, d)))
              : (vt(t.inertia || t.throwProps),
                Ze.allowEventDefault ||
                !c ||
                (!1 === t.dragClickables && lt.call(Ze, c.target)) ||
                !p ||
                ($ && (!j || $ !== j)) ||
                !1 === c.cancelable
                  ? (we = !1)
                  : ((we = !0), ve(c)),
                Pe(Ze, "release", "onRelease")),
          Tt() && g.duration(Ze.tween.duration()),
          p && Pe(Ze, "dragend", "onDragEnd"),
          !0
        );
      },
      Ct = (t) => {
        if (t && Ze.isDragging && !n) {
          let o = t.target || e.parentNode,
            n = o.scrollLeft - o._gsScrollX,
            l = o.scrollTop - o._gsScrollY;
          (n || l) &&
            (V
              ? ((r -= n * V.a + l * V.c), (i -= l * V.d + n * V.b))
              : ((r -= n), (i -= l)),
            (o._gsScrollX += n),
            (o._gsScrollY += l),
            St(Ze.pointerX, Ze.pointerY));
        }
      },
      kt = (e) => {
        let t = re(),
          o = t - at < 100,
          n = t - et < 50,
          r = o && se === at,
          i = Ze.pointerEvent && Ze.pointerEvent.defaultPrevented,
          l = o && fe === at,
          a = e.isTrusted || (null == e.isTrusted && o && r);
        if (
          ((r || (n && !1 !== Ze.vars.suppressClickOnDrag)) &&
            e.stopImmediatePropagation &&
            e.stopImmediatePropagation(),
          o &&
            (!Ze.pointerEvent || !Ze.pointerEvent.defaultPrevented) &&
            (!r || (a && !l)))
        )
          return a && r && (fe = at), void (se = at);
        (Ze.isPressed || n || o) && ((a && e.detail && o && !i) || ve(e)),
          o ||
            n ||
            Le ||
            (e && e.target && (Ze.pointerEvent = e),
            Pe(Ze, "click", "onClick"));
      },
      Dt = (e) =>
        V
          ? { x: e.x * V.a + e.y * V.c + V.e, y: e.x * V.b + e.y * V.d + V.f }
          : { x: e.x, y: e.y };
    (X = ze.get(e)),
      X && X.kill(),
      (this.startDrag = (t, o) => {
        let n, l, a, s;
        Mt(t || Ze.pointerEvent, !0),
          o &&
            !Ze.hitTest(t || Ze.pointerEvent) &&
            ((n = Ne(t || Ze.pointerEvent)),
            (l = Ne(e)),
            (a = Dt({ x: n.left + n.width / 2, y: n.top + n.height / 2 })),
            (s = Dt({ x: l.left + l.width / 2, y: l.top + l.height / 2 })),
            (r -= a.x - s.x),
            (i -= a.y - s.y)),
          Ze.isDragging ||
            ((Ze.isDragging = Le = !0), Pe(Ze, "dragstart", "onDragStart"));
      }),
      (this.drag = Xt),
      (this.endDrag = (e) => Yt(e || Ze.pointerEvent, !0)),
      (this.timeSinceDrag = () => (Ze.isDragging ? 0 : (re() - et) / 1e3)),
      (this.timeSinceClick = () => (re() - at) / 1e3),
      (this.hitTest = (e, t) => ze.hitTest(Ze.target, e, t)),
      (this.getDirection = (t, o) => {
        let n,
          r,
          i,
          s,
          d,
          c,
          p = "velocity" === t && A ? t : U(t) && !Ke ? "element" : "start";
        return (
          "element" === p && ((d = Ne(Ze.target)), (c = Ne(t))),
          (n =
            "start" === p
              ? Ze.x - l
              : "velocity" === p
                ? A.getVelocity(e, Ge)
                : d.left + d.width / 2 - (c.left + c.width / 2)),
          Ke
            ? n < 0
              ? "counter-clockwise"
              : "clockwise"
            : ((o = o || 2),
              (r =
                "start" === p
                  ? Ze.y - a
                  : "velocity" === p
                    ? A.getVelocity(e, Ue)
                    : d.top + d.height / 2 - (c.top + c.height / 2)),
              (i = Math.abs(n / r)),
              (s = i < 1 / o ? "" : n < 0 ? "left" : "right"),
              i < o && ("" !== s && (s += "-"), (s += r < 0 ? "up" : "down")),
              s)
        );
      }),
      (this.applyBounds = (o, n) => {
        let r, i, l, a, d, c;
        if (o && t.bounds !== o) return (t.bounds = o), Ze.update(!0, n);
        if ((ut(!0), xt(), s && !Tt())) {
          if (
            ((r = Ze.x),
            (i = Ze.y),
            r > p ? (r = p) : r < h && (r = h),
            i > g ? (i = g) : i < u && (i = u),
            (Ze.x !== r || Ze.y !== i) &&
              ((l = !0),
              (Ze.x = Ze.endX = r),
              Ke ? (Ze.endRotation = r) : (Ze.y = Ze.endY = i),
              (y = !0),
              gt(!0),
              Ze.autoScroll && !Ze.isDragging))
          )
            for (
              Ce(e.parentNode),
                a = e,
                pe.scrollTop =
                  null != T.pageYOffset
                    ? T.pageYOffset
                    : null != pt.documentElement.scrollTop
                      ? pt.documentElement.scrollTop
                      : pt.body.scrollTop,
                pe.scrollLeft =
                  null != T.pageXOffset
                    ? T.pageXOffset
                    : null != pt.documentElement.scrollLeft
                      ? pt.documentElement.scrollLeft
                      : pt.body.scrollLeft;
              a && !c;

            )
              (c = Se(a.parentNode)),
                (d = c ? pe : a.parentNode),
                $e &&
                  d.scrollTop > d._gsMaxScrollY &&
                  (d.scrollTop = d._gsMaxScrollY),
                qe &&
                  d.scrollLeft > d._gsMaxScrollX &&
                  (d.scrollLeft = d._gsMaxScrollX),
                (a = d);
          Ze.isThrowing &&
            (l || Ze.endX > p || Ze.endX < h || Ze.endY > g || Ze.endY < u) &&
            vt(t.inertia || t.throwProps, l);
        }
        return Ze;
      }),
      (this.update = (t, o, n) => {
        if (o && Ze.isPressed) {
          let t = w(e),
            o = Ye.apply({ x: Ze.x - l, y: Ze.y - a }),
            n = w(e.parentNode, !0);
          n.apply({ x: t.e - o.x, y: t.f - o.y }, o),
            (Ze.x -= o.x - n.e),
            (Ze.y -= o.y - n.f),
            gt(!0),
            bt();
        }
        let { x: r, y: i } = Ze;
        return (
          wt(!o),
          t ? Ze.applyBounds() : (y && n && gt(!0), ut(!0)),
          o && (St(Ze.pointerX, Ze.pointerY), y && gt(!0)),
          Ze.isPressed &&
            !o &&
            ((qe && Math.abs(r - Ze.x) > 0.01) ||
              ($e && Math.abs(i - Ze.y) > 0.01 && !Ke)) &&
            bt(),
          Ze.autoScroll &&
            (Ce(e.parentNode, Ze.isDragging),
            (tt = Ze.isDragging),
            gt(!0),
            Xe(e, Ct),
            Me(e, Ct)),
          Ze
        );
      }),
      (this.enable = (r) => {
        let i,
          l,
          a,
          s = { lazy: !0 };
        if (
          (!1 !== t.cursor && (s.cursor = t.cursor || _),
          b.utils.checkPrefix("touchCallout") && (s.touchCallout = "none"),
          "soft" !== r)
        ) {
          for (
            ge(
              Je,
              qe === $e
                ? "none"
                : (t.allowNativeTouchScrolling &&
                      (e.scrollHeight === e.clientHeight) ==
                        (e.scrollWidth === e.clientHeight)) ||
                    t.allowEventDefault
                  ? "manipulation"
                  : qe
                    ? "pan-y"
                    : "pan-x"
            ),
              l = Je.length;
            --l > -1;

          )
            (a = Je[l]),
              B || me(a, "mousedown", Mt),
              me(a, "touchstart", Mt),
              me(a, "click", kt, !0),
              b.set(a, s),
              a.getBBox &&
                a.ownerSVGElement &&
                qe !== $e &&
                b.set(a.ownerSVGElement, {
                  touchAction:
                    t.allowNativeTouchScrolling || t.allowEventDefault
                      ? "manipulation"
                      : qe
                        ? "pan-y"
                        : "pan-x",
                }),
              t.allowContextMenu || me(a, "contextmenu", ht);
          Ie(Je, !1);
        }
        return (
          Me(e, Ct),
          (o = !0),
          A &&
            "soft" !== r &&
            A.track(n || e, Ve ? "x,y" : Ke ? "rotation" : "top,left"),
          (e._gsDragID = i = "d" + ae++),
          (le[i] = Ze),
          n && (n.enable(), (n.element._gsDragID = i)),
          (t.bounds || Ke) && bt(),
          t.bounds && Ze.applyBounds(),
          Ze
        );
      }),
      (this.disable = (t) => {
        let r,
          i = Ze.isDragging,
          l = Je.length;
        for (; --l > -1; ) ke(Je[l], "cursor", null);
        if ("soft" !== t) {
          for (ge(Je, null), l = Je.length; --l > -1; )
            (r = Je[l]),
              ke(r, "touchCallout", null),
              ye(r, "mousedown", Mt),
              ye(r, "touchstart", Mt),
              ye(r, "click", kt, !0),
              ye(r, "contextmenu", ht);
          Ie(Je, !0),
            W &&
              (ye(W, "touchcancel", Yt),
              ye(W, "touchend", Yt),
              ye(W, "touchmove", Xt)),
            ye(pt, "mouseup", Yt),
            ye(pt, "mousemove", Xt);
        }
        return (
          Xe(e, Ct),
          (o = !1),
          A &&
            "soft" !== t &&
            (A.untrack(n || e, Ve ? "x,y" : Ke ? "rotation" : "top,left"),
            Ze.tween && Ze.tween.kill()),
          n && n.disable(),
          xe(gt),
          (Ze.isDragging = Ze.isPressed = F = !1),
          i && Pe(Ze, "dragend", "onDragEnd"),
          Ze
        );
      }),
      (this.enabled = function (e, t) {
        return arguments.length ? (e ? Ze.enable(t) : Ze.disable(t)) : o;
      }),
      (this.kill = function () {
        return (
          (Ze.isThrowing = !1),
          Ze.tween && Ze.tween.kill(),
          Ze.disable(),
          b.set(Je, { clearProps: "userSelect" }),
          delete le[e._gsDragID],
          Ze
        );
      }),
      (this.revert = function () {
        this.kill(), this.styles && this.styles.revert();
      }),
      ~Ae.indexOf("scroll") &&
        ((n = this.scrollProxy =
          new Fe(
            e,
            ((e, t) => {
              for (let o in t) o in e || (e[o] = t[o]);
              return e;
            })(
              {
                onKill: function () {
                  Ze.isPressed && Yt(null);
                },
              },
              t
            )
          )),
        (e.style.overflowY = $e && !N ? "auto" : "hidden"),
        (e.style.overflowX = qe && !N ? "auto" : "hidden"),
        (e = n.content)),
      Ke ? (Qe.rotation = 1) : (qe && (Qe[Ge] = 1), $e && (Qe[Ue] = 1)),
      (st.force3D = !("force3D" in t) || t.force3D),
      I(this),
      this.enable();
  }
  static register(e) {
    (b = e), We();
  }
  static create(e, t) {
    return C || We(!0), D(e).map((e) => new ze(e, t));
  }
  static get(e) {
    return le[(D(e)[0] || {})._gsDragID];
  }
  static timeSinceDrag() {
    return (re() - de) / 1e3;
  }
  static hitTest(e, t, o) {
    if (e === t) return !1;
    let n,
      r,
      i,
      l = Ne(e),
      a = Ne(t),
      { top: s, left: d, right: c, bottom: p, width: h, height: g } = l,
      u = a.left > c || a.right < d || a.top > p || a.bottom < s;
    return u || !o
      ? !u
      : ((i = -1 !== (o + "").indexOf("%")),
        (o = parseFloat(o) || 0),
        (n = { left: Math.max(d, a.left), top: Math.max(s, a.top) }),
        (n.width = Math.min(c, a.right) - n.left),
        (n.height = Math.min(p, a.bottom) - n.top),
        !(n.width < 0 || n.height < 0) &&
          (i
            ? ((o *= 0.01),
              (r = n.width * n.height),
              r >= h * g * o || r >= a.width * a.height * o)
            : n.width > o && n.height > o));
  }
}
((e, t) => {
  for (let o in t) o in e || (e[o] = t[o]);
})(ze.prototype, {
  pointerX: 0,
  pointerY: 0,
  startX: 0,
  startY: 0,
  deltaX: 0,
  deltaY: 0,
  isDragging: !1,
  isPressed: !1,
}),
  (ze.zIndex = 1e3),
  (ze.version = "3.12.5"),
  K() && b.registerPlugin(ze);
export default ze;
export { ze as Draggable };
