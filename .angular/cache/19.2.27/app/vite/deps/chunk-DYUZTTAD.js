import {
  d
} from "./chunk-JRRVO33B.js";
import {
  m
} from "./chunk-FQ4UVN3T.js";
import {
  a,
  e,
  f,
  h,
  z
} from "./chunk-56GZ66HK.js";
import {
  __async
} from "./chunk-WDMUDEB6.js";

// node_modules/@ionic/core/components/p-D3_0lGfA.js
var t;
var i = (e2, o, i2) => {
  const n2 = o.startsWith("animation") ? (r3 = e2, void 0 === t && (t = void 0 === r3.style.animationName && void 0 !== r3.style.webkitAnimationName ? "-webkit-" : ""), t) : "";
  var r3;
  e2.style.setProperty(n2 + o, i2);
};
var n = (e2 = [], o) => {
  if (void 0 !== o) {
    const t3 = Array.isArray(o) ? o : [o];
    return [...e2, ...t3];
  }
  return e2;
};
var r = (t3) => {
  let r3, a2, s2, d3, l2, f3, c2, v2, m3, u2, p2, y2 = [], g2 = [], A2 = [], b2 = false, C2 = {}, E2 = [], h3 = [], S = {}, j2 = 0, k2 = false, D2 = false, R = true, T = false, w2 = true, F = false;
  const I2 = t3, W2 = [], K = [], M2 = [], P2 = [], Z = [], x = [], z3 = [], X = [], _ = [], q = [], B2 = [], G = "function" == typeof AnimationEffect || void 0 !== d && "function" == typeof d.AnimationEffect, H = "function" == typeof Element && "function" == typeof Element.prototype.animate && G, J = () => B2, L2 = (e2, o) => {
    const t4 = o.findIndex((o2) => o2.c === e2);
    t4 > -1 && o.splice(t4, 1);
  }, N = (e2, o) => (((null == o ? void 0 : o.oneTimeCallback) ? K : W2).push({
    c: e2,
    o
  }), p2), O = () => {
    H && (B2.forEach((e2) => {
      e2.cancel();
    }), B2.length = 0);
  }, Q = () => {
    x.forEach((e2) => {
      (null == e2 ? void 0 : e2.parentNode) && e2.parentNode.removeChild(e2);
    }), x.length = 0;
  }, U = () => void 0 !== l2 ? l2 : c2 ? c2.getFill() : "both", V2 = () => void 0 !== v2 ? v2 : void 0 !== f3 ? f3 : c2 ? c2.getDirection() : "normal", Y = () => k2 ? "linear" : void 0 !== s2 ? s2 : c2 ? c2.getEasing() : "linear", $ = () => D2 ? 0 : void 0 !== m3 ? m3 : void 0 !== a2 ? a2 : c2 ? c2.getDuration() : 0, ee = () => void 0 !== d3 ? d3 : c2 ? c2.getIterations() : 1, oe = () => void 0 !== u2 ? u2 : void 0 !== r3 ? r3 : c2 ? c2.getDelay() : 0, te = () => {
    0 !== j2 && (j2--, 0 === j2 && ((() => {
      _.forEach((e3) => e3()), q.forEach((e3) => e3());
      const e2 = R ? 1 : 0, o = E2, t4 = h3, n2 = S;
      P2.forEach((e3) => {
        const r4 = e3.classList;
        o.forEach((e4) => r4.add(e4)), t4.forEach((e4) => r4.remove(e4));
        for (const o2 in n2) n2.hasOwnProperty(o2) && i(e3, o2, n2[o2]);
      }), m3 = void 0, v2 = void 0, u2 = void 0, W2.forEach((o2) => o2.c(e2, p2)), K.forEach((o2) => o2.c(e2, p2)), K.length = 0, w2 = true, R && (T = true), R = true;
    })(), c2 && c2.animationFinish()));
  }, ie = () => {
    (() => {
      z3.forEach((e3) => e3()), X.forEach((e3) => e3());
      const e2 = g2, o = A2, t4 = C2;
      P2.forEach((n2) => {
        const r4 = n2.classList;
        e2.forEach((e3) => r4.add(e3)), o.forEach((e3) => r4.remove(e3));
        for (const e3 in t4) t4.hasOwnProperty(e3) && i(n2, e3, t4[e3]);
      });
    })(), y2.length > 0 && H && (P2.forEach((e2) => {
      const o = e2.animate(y2, {
        id: I2,
        delay: oe(),
        duration: $(),
        easing: Y(),
        iterations: ee(),
        fill: U(),
        direction: V2()
      });
      o.pause(), B2.push(o);
    }), B2.length > 0 && (B2[0].onfinish = () => {
      te();
    })), b2 = true;
  }, ne = (e2) => {
    e2 = Math.min(Math.max(e2, 0), 0.9999), H && B2.forEach((o) => {
      o.currentTime = o.effect.getComputedTiming().delay + $() * e2, o.pause();
    });
  }, re = (e2) => {
    B2.forEach((e3) => {
      e3.effect.updateTiming({
        delay: oe(),
        duration: $(),
        easing: Y(),
        iterations: ee(),
        fill: U(),
        direction: V2()
      });
    }), void 0 !== e2 && ne(e2);
  }, ae = (e2 = false, o = true, t4) => (e2 && Z.forEach((i2) => {
    i2.update(e2, o, t4);
  }), H && re(t4), p2), se = () => {
    b2 && (H ? B2.forEach((e2) => {
      e2.pause();
    }) : P2.forEach((e2) => {
      i(e2, "animation-play-state", "paused");
    }), F = true);
  }, de = (e2) => new Promise((o) => {
    (null == e2 ? void 0 : e2.sync) && (D2 = true, N(() => D2 = false, {
      oneTimeCallback: true
    })), b2 || ie(), T && (H && (ne(0), re()), T = false), w2 && (j2 = Z.length + 1, w2 = false);
    const t4 = () => {
      L2(i2, K), o();
    }, i2 = () => {
      L2(t4, M2), o();
    };
    N(i2, {
      oneTimeCallback: true
    }), M2.push({
      c: t4,
      o: {
        oneTimeCallback: true
      }
    }), Z.forEach((e3) => {
      e3.play();
    }), H ? (B2.forEach((e3) => {
      e3.play();
    }), 0 !== y2.length && 0 !== P2.length || te()) : te(), F = false;
  }), le = (e2, o) => {
    const t4 = y2[0];
    return void 0 === t4 || void 0 !== t4.offset && 0 !== t4.offset ? y2 = [{
      offset: 0,
      [e2]: o
    }, ...y2] : t4[e2] = o, p2;
  };
  return p2 = {
    parentAnimation: c2,
    elements: P2,
    childAnimations: Z,
    id: I2,
    animationFinish: te,
    from: le,
    to: (e2, o) => {
      const t4 = y2[y2.length - 1];
      return void 0 === t4 || void 0 !== t4.offset && 1 !== t4.offset ? y2 = [...y2, {
        offset: 1,
        [e2]: o
      }] : t4[e2] = o, p2;
    },
    fromTo: (e2, o, t4) => le(e2, o).to(e2, t4),
    parent: (e2) => (c2 = e2, p2),
    play: de,
    pause: () => (Z.forEach((e2) => {
      e2.pause();
    }), se(), p2),
    stop: () => {
      Z.forEach((e2) => {
        e2.stop();
      }), b2 && (O(), b2 = false), k2 = false, D2 = false, w2 = true, v2 = void 0, m3 = void 0, u2 = void 0, j2 = 0, T = false, R = true, F = false, M2.forEach((e2) => e2.c(0, p2)), M2.length = 0;
    },
    destroy: (e2) => (Z.forEach((o) => {
      o.destroy(e2);
    }), ((e3) => {
      O(), e3 && Q();
    })(e2), P2.length = 0, Z.length = 0, y2.length = 0, W2.length = 0, K.length = 0, b2 = false, w2 = true, p2),
    keyframes: (e2) => {
      const o = y2 !== e2;
      return y2 = e2, o && ((e3) => {
        H && J().forEach((o2) => {
          const t4 = o2.effect;
          if (t4.setKeyframes) t4.setKeyframes(e3);
          else {
            const i2 = new KeyframeEffect(t4.target, e3, t4.getTiming());
            o2.effect = i2;
          }
        });
      })(y2), p2;
    },
    addAnimation: (e2) => {
      if (null != e2) if (Array.isArray(e2)) for (const o of e2) o.parent(p2), Z.push(o);
      else e2.parent(p2), Z.push(e2);
      return p2;
    },
    addElement: (o) => {
      if (null != o) if (1 === o.nodeType) P2.push(o);
      else if (o.length >= 0) for (let e2 = 0; e2 < o.length; e2++) P2.push(o[e2]);
      else a("createAnimation - Invalid addElement value.");
      return p2;
    },
    update: ae,
    fill: (e2) => (l2 = e2, ae(true), p2),
    direction: (e2) => (f3 = e2, ae(true), p2),
    iterations: (e2) => (d3 = e2, ae(true), p2),
    duration: (e2) => (H || 0 !== e2 || (e2 = 1), a2 = e2, ae(true), p2),
    easing: (e2) => (s2 = e2, ae(true), p2),
    delay: (e2) => (r3 = e2, ae(true), p2),
    getWebAnimations: J,
    getKeyframes: () => y2,
    getFill: U,
    getDirection: V2,
    getDelay: oe,
    getIterations: ee,
    getEasing: Y,
    getDuration: $,
    afterAddRead: (e2) => (_.push(e2), p2),
    afterAddWrite: (e2) => (q.push(e2), p2),
    afterClearStyles: (e2 = []) => {
      for (const o of e2) S[o] = "";
      return p2;
    },
    afterStyles: (e2 = {}) => (S = e2, p2),
    afterRemoveClass: (e2) => (h3 = n(h3, e2), p2),
    afterAddClass: (e2) => (E2 = n(E2, e2), p2),
    beforeAddRead: (e2) => (z3.push(e2), p2),
    beforeAddWrite: (e2) => (X.push(e2), p2),
    beforeClearStyles: (e2 = []) => {
      for (const o of e2) C2[o] = "";
      return p2;
    },
    beforeStyles: (e2 = {}) => (C2 = e2, p2),
    beforeRemoveClass: (e2) => (A2 = n(A2, e2), p2),
    beforeAddClass: (e2) => (g2 = n(g2, e2), p2),
    onFinish: N,
    isRunning: () => 0 !== j2 && !F,
    progressStart: (e2 = false, o) => (Z.forEach((t4) => {
      t4.progressStart(e2, o);
    }), se(), k2 = e2, b2 || ie(), ae(false, true, o), p2),
    progressStep: (e2) => (Z.forEach((o) => {
      o.progressStep(e2);
    }), ne(e2), p2),
    progressEnd: (e2, o, t4) => (k2 = false, Z.forEach((i2) => {
      i2.progressEnd(e2, o, t4);
    }), void 0 !== t4 && (m3 = t4), T = false, R = true, 0 === e2 ? (v2 = "reverse" === V2() ? "normal" : "reverse", "reverse" === v2 && (R = false), H ? (ae(), ne(1 - o)) : (u2 = (1 - o) * $() * -1, ae(false, false))) : 1 === e2 && (H ? (ae(), ne(o)) : (u2 = o * $() * -1, ae(false, false))), void 0 === e2 || c2 || de(), p2)
  };
};

// node_modules/@ionic/core/components/p-BCgwUc_i.js
var r2 = "ionViewWillEnter";
var t2 = "ionViewDidEnter";
var s = "ionViewWillLeave";
var c = "ionViewDidLeave";
var l = "ionViewWillUnload";
var u = (n2) => {
  n2.tabIndex = -1, n2.focus();
};
var d2 = (n2) => null !== n2.offsetParent;
var f2 = "ion-last-focus";
var p = (e2) => {
  if (e.get("focusManagerPriority", false)) {
    const n2 = document.activeElement;
    null !== n2 && (null == e2 ? void 0 : e2.contains(n2)) && n2.setAttribute(f2, "true");
  }
};
var w = (i2) => {
  const a2 = e.get("focusManagerPriority", false);
  if (Array.isArray(a2) && !i2.contains(document.activeElement)) {
    const n2 = i2.querySelector(`[${f2}]`);
    if (n2 && d2(n2)) return void u(n2);
    for (const n3 of a2) switch (n3) {
      case "content":
        const a3 = i2.querySelector('main, [role="main"]');
        if (a3 && d2(a3)) return void u(a3);
        break;
      case "heading":
        const o = i2.querySelector('h1, [role="heading"][aria-level="1"]');
        if (o && d2(o)) return void u(o);
        break;
      case "banner":
        const r3 = i2.querySelector('header, [role="banner"]');
        if (r3 && d2(r3)) return void u(r3);
        break;
      default:
        f(`Unrecognized focus manager priority value ${n3}`);
    }
    u(i2);
  }
};
var v = (n2) => new Promise((e2, a2) => {
  z(() => {
    const i2 = I(n2);
    m2(n2, i2), b(n2).then((i3) => {
      i3.animation && i3.animation.destroy(), g(n2), e2(i3);
    }, (e3) => {
      g(n2), a2(e3);
    }).finally(() => {
      A(i2, false);
    });
  });
});
var m2 = (n2, e2) => {
  const i2 = n2.enteringEl, a2 = n2.leavingEl;
  p(a2), W(i2, a2, n2.direction), A(e2, true), n2.showGoBack ? i2.classList.add("can-go-back") : i2.classList.remove("can-go-back"), L(i2, false), i2.style.setProperty("pointer-events", "none"), a2 && (L(a2, false), a2.style.setProperty("pointer-events", "none"));
};
var b = (n2) => __async(null, null, function* () {
  const e2 = yield h2(n2);
  return e2 && h.isBrowser ? y(e2, n2) : P(n2);
});
var g = (n2) => {
  const e2 = n2.enteringEl, i2 = n2.leavingEl;
  e2.classList.remove("ion-page-invisible"), e2.style.removeProperty("pointer-events"), void 0 !== i2 && (i2.classList.remove("ion-page-invisible"), i2.style.removeProperty("pointer-events")), w(e2);
};
var h2 = (n2) => __async(null, null, function* () {
  if (n2.leavingEl && n2.animated && 0 !== n2.duration) return n2.animationBuilder ? n2.animationBuilder : "ios" === n2.mode ? (yield import("./p-BXR3hJaT-R3C6ZVKM.js")).iosTransitionAnimation : (yield import("./p-DZmhtKIM-7WIRB2I3.js")).mdTransitionAnimation;
});
var y = (n2, e2) => __async(null, null, function* () {
  yield k(e2, true);
  const i2 = n2(e2.baseEl, e2);
  V(e2.enteringEl, e2.leavingEl);
  const a2 = yield D(i2, e2);
  return e2.progressCallback && e2.progressCallback(void 0), a2 && E(e2.enteringEl, e2.leavingEl), {
    hasCompleted: a2,
    animation: i2
  };
});
var P = (e2) => __async(null, null, function* () {
  const i2 = e2.enteringEl, a2 = e2.leavingEl, o = e.get("focusManagerPriority", false);
  return yield k(e2, o), V(i2, a2), E(i2, a2), {
    hasCompleted: true
  };
});
var k = (n2, e2) => __async(null, null, function* () {
  (void 0 !== n2.deepWait ? n2.deepWait : e2) && (yield Promise.all([C(n2.enteringEl), C(n2.leavingEl)])), yield j(n2.viewIsReady, n2.enteringEl);
});
var j = (n2, e2) => __async(null, null, function* () {
  n2 && (yield n2(e2));
});
var D = (n2, e2) => {
  const i2 = e2.progressCallback, a2 = new Promise((e3) => {
    n2.onFinish((n3) => e3(1 === n3));
  });
  return i2 ? (n2.progressStart(true), i2(n2)) : n2.play(), a2;
};
var V = (n2, e2) => {
  M(e2, s), M(n2, r2);
};
var E = (n2, e2) => {
  M(n2, t2), M(e2, c);
};
var M = (n2, e2) => {
  if (n2) {
    const i2 = new CustomEvent(e2, {
      bubbles: false,
      cancelable: false
    });
    n2.dispatchEvent(i2);
  }
};
var z2 = () => new Promise((n2) => m(() => m(() => n2())));
var C = (n2) => __async(null, null, function* () {
  const e2 = n2;
  if (e2) {
    if (null != e2.componentOnReady) {
      if (null != (yield e2.componentOnReady())) return;
    } else if (null != e2.__registerHost) {
      const n3 = new Promise((n4) => m(n4));
      return void (yield n3);
    }
    yield Promise.all(Array.from(e2.children).map(C));
  }
});
var L = (n2, e2) => {
  e2 ? (n2.setAttribute("aria-hidden", "true"), n2.classList.add("ion-page-hidden")) : (n2.hidden = false, n2.removeAttribute("aria-hidden"), n2.classList.remove("ion-page-hidden"));
};
var W = (n2, e2, i2) => {
  void 0 !== n2 && (n2.style.zIndex = "back" === i2 ? "99" : "101"), void 0 !== e2 && (e2.style.zIndex = "100");
};
var A = (n2, e2) => {
  if (!n2) return;
  const i2 = "header-transitioning";
  e2 ? n2.classList.add(i2) : n2.classList.remove(i2);
};
var B = (n2) => {
  if (n2.classList.contains("ion-page")) return n2;
  return n2.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs") || n2;
};
var I = (n2) => {
  if ("ios" !== n2.mode) return null;
  const e2 = "back" === n2.direction ? n2.leavingEl : n2.enteringEl;
  return e2 ? e2.querySelector("ion-header") : null;
};

export {
  r,
  r2,
  t2 as t,
  s,
  c,
  l,
  v,
  M,
  z2 as z,
  C,
  L,
  B
};
/*! Bundled license information:

@ionic/core/components/p-D3_0lGfA.js:
@ionic/core/components/p-BCgwUc_i.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=chunk-DYUZTTAD.js.map
