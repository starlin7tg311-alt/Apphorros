import {
  a
} from "./chunk-56GZ66HK.js";

// node_modules/@ionic/core/components/p-o8OKV5aD.js
var o = (o3) => {
  var r2, t2;
  for (let t3 = o3; t3; t3 = t3.parentElement) {
    const o4 = null === (r2 = t3.getAttribute("dir")) || void 0 === r2 ? void 0 : r2.toLowerCase();
    if ("rtl" === o4) return true;
    if ("ltr" === o4) return false;
  }
  return "rtl" === (null === (t2 = null === document || void 0 === document ? void 0 : document.dir) || void 0 === t2 ? void 0 : t2.toLowerCase());
};

// node_modules/@ionic/core/components/p-EhcFjiqz.js
var r = (a2, i = 0) => new Promise((r2) => {
  e(a2, i, r2);
});
var e = (a2, i = 0, r2) => {
  let e2, t2;
  const n2 = {
    passive: true
  }, o3 = () => {
    e2 && e2();
  }, s2 = (i2) => {
    void 0 !== i2 && a2 !== i2.target || (o3(), r2(i2));
  };
  return a2 && (a2.addEventListener("webkitTransitionEnd", s2, n2), a2.addEventListener("transitionend", s2, n2), t2 = setTimeout(s2, i + 500), e2 = () => {
    void 0 !== t2 && (clearTimeout(t2), t2 = void 0), a2.removeEventListener("webkitTransitionEnd", s2, n2), a2.removeEventListener("transitionend", s2, n2);
  }), o3;
};
var t = (a2, i) => {
  a2.componentOnReady ? a2.componentOnReady().then((a3) => i(a3)) : m(() => i(a2));
};
var n = (a2) => void 0 !== a2.componentOnReady;
var o2 = (a2, i = []) => {
  const r2 = {};
  return i.forEach((i2) => {
    a2.hasAttribute(i2) && (null !== a2.getAttribute(i2) && (r2[i2] = a2.getAttribute(i2)), a2.removeAttribute(i2));
  }), r2;
};
var s = ["role", "aria-activedescendant", "aria-atomic", "aria-autocomplete", "aria-braillelabel", "aria-brailleroledescription", "aria-busy", "aria-checked", "aria-colcount", "aria-colindex", "aria-colindextext", "aria-colspan", "aria-controls", "aria-current", "aria-describedby", "aria-description", "aria-details", "aria-disabled", "aria-errormessage", "aria-expanded", "aria-flowto", "aria-haspopup", "aria-hidden", "aria-invalid", "aria-keyshortcuts", "aria-label", "aria-labelledby", "aria-level", "aria-live", "aria-multiline", "aria-multiselectable", "aria-orientation", "aria-owns", "aria-placeholder", "aria-posinset", "aria-pressed", "aria-readonly", "aria-relevant", "aria-required", "aria-roledescription", "aria-rowcount", "aria-rowindex", "aria-rowindextext", "aria-rowspan", "aria-selected", "aria-setsize", "aria-sort", "aria-valuemax", "aria-valuemin", "aria-valuenow", "aria-valuetext"];
var l = (a2) => o2(a2, s);
var u = (a2, i, r2, e2) => a2.addEventListener(i, r2, e2);
var c = (a2, i, r2, e2) => a2.removeEventListener(i, r2, e2);
var d = (a2, i = a2) => a2.shadowRoot || i;
var m = (a2) => "function" == typeof __zone_symbol__requestAnimationFrame ? __zone_symbol__requestAnimationFrame(a2) : "function" == typeof requestAnimationFrame ? requestAnimationFrame(a2) : setTimeout(a2);
var p = (a2) => !!a2.shadowRoot && !!a2.attachShadow;
var f = (a2) => {
  if (a2.focus(), a2.classList.contains("ion-focusable")) {
    const i = a2.closest("ion-app");
    i && i.setFocus([a2]);
  }
};
var b = (a2, i, r2, e2, t2) => {
  {
    let a3 = i.querySelector("input.aux-input");
    a3 || (a3 = i.ownerDocument.createElement("input"), a3.type = "hidden", a3.classList.add("aux-input"), i.appendChild(a3)), a3.disabled = t2, a3.name = r2, a3.value = e2 || "";
  }
};
var v = (a2, i, r2) => Math.max(a2, Math.min(i, r2));
var w = (i, r2) => {
  if (!i) {
    const i2 = "ASSERT: " + r2;
    throw a(i2), new Error(i2);
  }
};
var x = (a2) => {
  if (a2) {
    const i = a2.changedTouches;
    if (i && i.length > 0) {
      const a3 = i[0];
      return {
        x: a3.clientX,
        y: a3.clientY
      };
    }
    if (void 0 !== a2.pageX) return {
      x: a2.pageX,
      y: a2.pageY
    };
  }
  return {
    x: 0,
    y: 0
  };
};
var y = (a2, r2) => {
  const e2 = o(r2);
  switch (a2) {
    case "start":
      return e2;
    case "end":
      return !e2;
    default:
      throw new Error(`"${a2}" is not a valid value for [side]. Use "start" or "end" instead.`);
  }
};
var h = (a2, i) => {
  const r2 = a2._original || a2;
  return {
    _original: a2,
    emit: _(r2.emit.bind(r2), i)
  };
};
var _ = (a2, i = 0) => {
  let r2;
  return (...e2) => {
    clearTimeout(r2), r2 = setTimeout(a2, i, ...e2);
  };
};
var T = (a2, i) => {
  if (null != a2 || (a2 = {}), null != i || (i = {}), a2 === i) return true;
  const r2 = Object.keys(a2);
  if (r2.length !== Object.keys(i).length) return false;
  for (const e2 of r2) {
    if (!(e2 in i)) return false;
    if (a2[e2] !== i[e2]) return false;
  }
  return true;
};
var j = (a2) => "number" == typeof a2 && !isNaN(a2) && isFinite(a2);

export {
  o,
  r,
  t,
  n,
  o2,
  l,
  u,
  c,
  d,
  m,
  p,
  f,
  b,
  v,
  w,
  x,
  y,
  h,
  T,
  j
};
/*! Bundled license information:

@ionic/core/components/p-o8OKV5aD.js:
@ionic/core/components/p-EhcFjiqz.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=chunk-FQ4UVN3T.js.map
