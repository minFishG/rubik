(function(e){function n(n){for(var r,c,a=n[0],i=n[1],f=n[2],l=0,s=[];l<a.length;l++)c=a[l],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&s.push(o[c][0]),o[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);d&&d(n);while(s.length)s.shift()();return u.push.apply(u,f||[]),t()}function t(){for(var e,n=0;n<u.length;n++){for(var t=u[n],r=!0,c=1;c<t.length;c++){var a=t[c];0!==o[a]&&(r=!1)}r&&(u.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},c={app:0},o={app:0},u=[];function a(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-081b722f":"f0ed91fd","chunk-1ef5cb9a":"733e5e8c","chunk-34762dc9":"1f9d43b8","chunk-5cc20047":"9e278731","chunk-68c4567e":"b7121f3c","chunk-d0541b1a":"19b5f3b0","chunk-770505aa":"b32b41fe"}[e]+".js"}function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-081b722f":1,"chunk-1ef5cb9a":1,"chunk-34762dc9":1,"chunk-68c4567e":1,"chunk-d0541b1a":1,"chunk-770505aa":1};c[e]?n.push(c[e]):0!==c[e]&&t[e]&&n.push(c[e]=new Promise((function(n,t){for(var r="css/"+({}[e]||e)+"."+{"chunk-081b722f":"4eaa8fe6","chunk-1ef5cb9a":"010639e7","chunk-34762dc9":"f1bcc9f2","chunk-5cc20047":"31d6cfe0","chunk-68c4567e":"2dd7123f","chunk-d0541b1a":"a7bc9c3f","chunk-770505aa":"1f71c785"}[e]+".css",o=i.p+r,u=document.getElementsByTagName("link"),a=0;a<u.length;a++){var f=u[a],l=f.getAttribute("data-href")||f.getAttribute("href");if("stylesheet"===f.rel&&(l===r||l===o))return n()}var s=document.getElementsByTagName("style");for(a=0;a<s.length;a++){f=s[a],l=f.getAttribute("data-href");if(l===r||l===o)return n()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=n,d.onerror=function(n){var r=n&&n.target&&n.target.src||o,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete c[e],d.parentNode.removeChild(d),t(u)},d.href=o;var h=document.getElementsByTagName("head")[0];h.appendChild(d)})).then((function(){c[e]=0})));var r=o[e];if(0!==r)if(r)n.push(r[2]);else{var u=new Promise((function(n,t){r=o[e]=[n,t]}));n.push(r[2]=u);var f,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=a(e);var s=new Error;f=function(n){l.onerror=l.onload=null,clearTimeout(d);var t=o[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),c=n&&n.target&&n.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+c+")",s.name="ChunkLoadError",s.type=r,s.request=c,t[1](s)}o[e]=void 0}};var d=setTimeout((function(){f({type:"timeout",target:l})}),12e4);l.onerror=l.onload=f,document.head.appendChild(l)}return Promise.all(n)},i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="",i.oe=function(e){throw console.error(e),e};var f=window["webpackJsonp"]=window["webpackJsonp"]||[],l=f.push.bind(f);f.push=n,f=f.slice();for(var s=0;s<f.length;s++)n(f[s]);var d=l;u.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"034f":function(e,n,t){"use strict";var r=t("85ec"),c=t.n(r);c.a},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("2b0e"),c=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("div",{staticClass:"nav",class:{"nav-left":e.isleft}},[t("div",[t("a",{on:{click:function(n){return e.toActive("/two")}}},[e._v("2048")])]),t("div",[t("a",{on:{click:function(n){return e.toActive("/sudoku")}}},[e._v("数独")])]),t("div",[t("a",{on:{click:function(n){return e.toActive("/fantu")}}},[e._v("翻图")])]),t("div",[t("a",{on:{click:function(n){return e.toActive("/qrcode")}}},[e._v("自定义二维码")])]),t("div",[t("a",{on:{click:function(n){return e.toActive("/rubikX")}}},[e._v("魔方")])]),t("div",[t("a",{on:{click:function(n){return e.toActive("/rubik")}}},[e._v("魔方-触摸版")])]),t("div",{staticClass:"colLeft",class:{"btn-left":e.isleft},attrs:{id:"toLeft"},on:{click:e.navToLeft}},[e._v("‹")])]),t("transition",{attrs:{name:"component-fade",mode:"out-in"}},[t("router-view")],1)],1)},o=[],u=(t("ac1f"),t("5319"),{name:"app",data:function(){return{isleft:!1}},components:{},computed:{},methods:{navToLeft:function(){this.isleft=!this.isleft},toActive:function(e){this.navToLeft(),this.$router.replace(e).catch((function(){}))}},mounted:function(){}}),a=u,i=(t("034f"),t("2877")),f=Object(i["a"])(a,c,o,!1,null,null,null),l=f.exports,s=(t("d3b7"),t("8c4f")),d=function(){return t.e("chunk-081b722f").then(t.bind(null,"f62e"))},h=function(){return Promise.all([t.e("chunk-5cc20047"),t.e("chunk-d0541b1a")]).then(t.bind(null,"80ed"))},p=function(){return t.e("chunk-770505aa").then(t.bind(null,"9dd3"))},v=function(){return Promise.all([t.e("chunk-5cc20047"),t.e("chunk-68c4567e")]).then(t.bind(null,"7ff8"))},b=function(){return t.e("chunk-1ef5cb9a").then(t.bind(null,"5153"))},k=function(){return t.e("chunk-34762dc9").then(t.bind(null,"7f46"))};r["a"].use(s["a"]);var m=[{path:"/two",component:d},{path:"/sudoku",component:h},{path:"/fantu",component:p},{path:"/qrcode",component:v},{path:"/rubikX",component:b},{path:"/rubik",component:k}],g=new s["a"]({base:"",routes:m}),y=g;new r["a"]({router:y,render:function(e){return e(l)}}).$mount("#app")},"85ec":function(e,n,t){}});