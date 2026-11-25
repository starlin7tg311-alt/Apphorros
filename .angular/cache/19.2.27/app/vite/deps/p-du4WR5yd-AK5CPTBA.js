import {
  l,
  u
} from "./chunk-2Z2FLEJR.js";
import {
  t
} from "./chunk-FQ4UVN3T.js";
import {
  q,
  z
} from "./chunk-56GZ66HK.js";
import {
  __async
} from "./chunk-WDMUDEB6.js";

// node_modules/@ionic/core/components/p-du4WR5yd.js
var n = () => {
  const n2 = window;
  n2.addEventListener("statusTap", () => {
    q(() => {
      const o = document.elementFromPoint(n2.innerWidth / 2, n2.innerHeight / 2);
      if (!o) return;
      const i = l(o);
      i && new Promise((o2) => t(i, o2)).then(() => {
        z(() => __async(null, null, function* () {
          i.style.setProperty("--overflow", "hidden"), yield u(i, 300), i.style.removeProperty("--overflow");
        }));
      });
    });
  });
};
export {
  n as startStatusTap
};
/*! Bundled license information:

@ionic/core/components/p-du4WR5yd.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=p-du4WR5yd-AK5CPTBA.js.map
