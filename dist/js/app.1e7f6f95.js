(function(e){function t(t){for(var r,o,a=t[0],i=t[1],f=t[2],l=0,s=[];l<a.length;l++)o=a[l],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&s.push(c[o][0]),c[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);d&&d(t);while(s.length)s.shift()();return u.push.apply(u,f||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,o=1;o<n.length;o++){var a=n[o];0!==c[a]&&(r=!1)}r&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},c={app:0},u=[];function a(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-081b722f":"327d783d","chunk-5cc20047":"9e278731","chunk-02bdf5b4":"86981982","chunk-d0541b1a":"983be887","chunk-770505aa":"a75ec8d7"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-081b722f":1,"chunk-02bdf5b4":1,"chunk-d0541b1a":1,"chunk-770505aa":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-081b722f":"4eaa8fe6","chunk-5cc20047":"31d6cfe0","chunk-02bdf5b4":"f94c8728","chunk-d0541b1a":"a7bc9c3f","chunk-770505aa":"1f71c785"}[e]+".css",c=i.p+r,u=document.getElementsByTagName("link"),a=0;a<u.length;a++){var f=u[a],l=f.getAttribute("data-href")||f.getAttribute("href");if("stylesheet"===f.rel&&(l===r||l===c))return t()}var s=document.getElementsByTagName("style");for(a=0;a<s.length;a++){f=s[a],l=f.getAttribute("data-href");if(l===r||l===c)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||c,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete o[e],d.parentNode.removeChild(d),n(u)},d.href=c;var h=document.getElementsByTagName("head")[0];h.appendChild(d)})).then((function(){o[e]=0})));var r=c[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=c[e]=[t,n]}));t.push(r[2]=u);var f,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=a(e);var s=new Error;f=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=c[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",s.name="ChunkLoadError",s.type=r,s.request=o,n[1](s)}c[e]=void 0}};var d=setTimeout((function(){f({type:"timeout",target:l})}),12e4);l.onerror=l.onload=f,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var f=window["webpackJsonp"]=window["webpackJsonp"]||[],l=f.push.bind(f);f.push=t,f=f.slice();for(var s=0;s<f.length;s++)t(f[s]);var d=l;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),o=n.n(r);o.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"nav",class:{"nav-left":e.isleft}},[n("div",[n("a",{on:{click:function(t){return e.toActive("/two")}}},[e._v("2048")])]),n("div",[n("a",{on:{click:function(t){return e.toActive("/sudoku")}}},[e._v("数独")])]),n("div",[n("a",{on:{click:function(t){return e.toActive("/fantu")}}},[e._v("翻图")])]),n("div",[n("a",{on:{click:function(t){return e.toActive("/qrcode")}}},[e._v("二维码")])]),n("div",{staticClass:"time"},[e._v(e._s(e.times))]),n("div",{staticClass:"colLeft",class:{"btn-left":e.isleft},attrs:{id:"toLeft"},on:{click:e.navToLeft}},[e._v("‹")])]),n("transition",{attrs:{name:"component-fade",mode:"out-in"}},[n("keep-alive",[n("router-view")],1)],1)],1)},c=[],u=(n("ac1f"),n("5319"),{name:"app",data:function(){return{times:"",dec:"",isleft:!1}},components:{},methods:{navToLeft:function(){this.isleft=!this.isleft},toActive:function(e){this.$router.replace(e).catch((function(){}))}},mounted:function(){}}),a=u,i=(n("034f"),n("2877")),f=Object(i["a"])(a,o,c,!1,null,null,null),l=f.exports,s=(n("d3b7"),n("8c4f")),d=function(){return n.e("chunk-081b722f").then(n.bind(null,"f62e"))},h=function(){return Promise.all([n.e("chunk-5cc20047"),n.e("chunk-d0541b1a")]).then(n.bind(null,"80ed"))},p=function(){return n.e("chunk-770505aa").then(n.bind(null,"9dd3"))},v=function(){return Promise.all([n.e("chunk-5cc20047"),n.e("chunk-02bdf5b4")]).then(n.bind(null,"7ff8"))};r["a"].use(s["a"]);var b=[{path:"/two",component:d},{path:"/sudoku",component:h},{path:"/fantu",component:p},{path:"/qrcode",component:v}],m=new s["a"]({base:"",routes:b}),k=m;new r["a"]({router:k,render:function(e){return e(l)}}).$mount("#app")},"85ec":function(e,t,n){}});
//# sourceMappingURL=app.1e7f6f95.js.map