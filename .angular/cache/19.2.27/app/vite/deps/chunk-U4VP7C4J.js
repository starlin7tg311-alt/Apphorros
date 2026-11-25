import {
  B,
  r
} from "./chunk-DYUZTTAD.js";

// node_modules/@ionic/core/components/p-DZmhtKIM.js
var t = (t2, r2) => {
  var a, n, s;
  const c = "40px", e = "back" === r2.direction, l = r2.leavingEl, p = B(r2.enteringEl), b = p.querySelector("ion-toolbar"), f = r();
  if (f.addElement(p).fill("both").beforeRemoveClass("ion-page-invisible"), e ? f.duration((null !== (a = r2.duration) && void 0 !== a ? a : 0) || 200).easing("cubic-bezier(0.47,0,0.745,0.715)") : f.duration((null !== (n = r2.duration) && void 0 !== n ? n : 0) || 280).easing("cubic-bezier(0.36,0.66,0.04,1)").fromTo("transform", `translateY(${c})`, "translateY(0px)").fromTo("opacity", 0.01, 1), b) {
    const o = r();
    o.addElement(b), f.addAnimation(o);
  }
  if (l && e) {
    f.duration((null !== (s = r2.duration) && void 0 !== s ? s : 0) || 200).easing("cubic-bezier(0.47,0,0.745,0.715)");
    const t3 = r();
    t3.addElement(B(l)).onFinish((i) => {
      1 === i && t3.elements.length > 0 && t3.elements[0].style.setProperty("display", "none");
    }).fromTo("transform", "translateY(0px)", `translateY(${c})`).fromTo("opacity", 1, 0), f.addAnimation(t3);
  }
  return f;
};

export {
  t
};
/*! Bundled license information:

@ionic/core/components/p-DZmhtKIM.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=chunk-U4VP7C4J.js.map
