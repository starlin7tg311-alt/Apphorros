import {
  d
} from "./chunk-JRRVO33B.js";
import {
  a,
  e
} from "./chunk-56GZ66HK.js";
import {
  __async
} from "./chunk-WDMUDEB6.js";

// node_modules/@ionic/core/components/p-BKeF8t9j.js
var o = () => e.get("experimentalCloseWatcher", false) && void 0 !== d && "CloseWatcher" in d;
var i = () => {
  document.addEventListener("backbutton", () => {
  });
};
var r = () => {
  const e2 = document;
  let i2 = false;
  const r2 = () => {
    if (i2) return;
    let t = 0, o2 = [];
    const r3 = new CustomEvent("ionBackButton", {
      bubbles: false,
      detail: {
        register(e3, n) {
          o2.push({
            priority: e3,
            handler: n,
            id: t++
          });
        }
      }
    });
    e2.dispatchEvent(r3);
    const a3 = () => {
      if (o2.length > 0) {
        let t2 = {
          priority: Number.MIN_SAFE_INTEGER,
          handler: () => {
          },
          id: -1
        };
        o2.forEach((e3) => {
          e3.priority >= t2.priority && (t2 = e3);
        }), i2 = true, o2 = o2.filter((e3) => e3.id !== t2.id), ((t3) => __async(null, null, function* () {
          try {
            if (null == t3 ? void 0 : t3.handler) {
              const e3 = t3.handler(a3);
              null != e3 && (yield e3);
            }
          } catch (t4) {
            a("[ion-app] - Exception in startHardwareBackButton:", t4);
          }
        }))(t2).then(() => i2 = false);
      }
    };
    a3();
  };
  if (o()) {
    let e3;
    const n = () => {
      null == e3 || e3.destroy(), e3 = new d.CloseWatcher(), e3.onclose = () => {
        r2(), n();
      };
    };
    n();
  } else e2.addEventListener("backbutton", r2);
};
var a2 = 100;
var c = 99;

export {
  o,
  i,
  r,
  a2 as a,
  c
};
/*! Bundled license information:

@ionic/core/components/p-BKeF8t9j.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=chunk-6ZVUFPMG.js.map
