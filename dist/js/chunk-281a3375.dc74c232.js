(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-281a3375"],{"057f":function(t,n,e){var r=e("fc6a"),s=e("241c").f,i={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],o=function(t){try{return s(t)}catch(n){return a.slice()}};t.exports.f=function(t){return a&&"[object Window]"==i.call(t)?o(t):s(r(t))}},"07e8":function(t,n,e){"use strict";e("99af");function r(t){this.obj=t;var n=t.style;n.transformStyle="preserve-3d",n.width="100px",n.height="100px",n.position="absolute",this.rule={width:"96px",height:"96px",position:"absolute"},this.six={a:{color:"white",tx:0,ty:0,tz:50,rx:0,ry:0},b:{color:"#ff2737",tx:0,ty:50,tz:0,rx:-90,ry:0},c:{color:"yellow",tx:0,ty:0,tz:-50,rx:-180,ry:0},d:{color:"#ffa109",tx:0,ty:-50,tz:0,rx:90,ry:0},e:{color:"#49da76",tx:-50,ty:0,tz:0,ry:-90,rx:0},f:{color:"#4959c2",tx:50,ty:0,tz:0,ry:90,rx:0}},this.setPos()}r.prototype.setPos=function(){for(var t in this.six){var n=document.createElement("div");for(var e in this.rule)n.style[e]=this.rule[e];n.style.fontSize="20px",n.style.border="2px solid #999",n.style.backgroundColor=this.six[t].color,n.style.transform=" translateX(".concat(this.six[t].tx,"px)\n                           translateY(").concat(this.six[t].ty,"px)\n                           translateZ(").concat(this.six[t].tz,"px)\n                           rotateX(").concat(this.six[t].rx,"deg)\n                           rotateY(").concat(this.six[t].ry,"deg)\n                           "),this.obj.appendChild(n)}},n["a"]=r},"1dde":function(t,n,e){var r=e("d039"),s=e("b622"),i=e("2d00"),a=s("species");t.exports=function(t){return i>=51||!r((function(){var n=[],e=n.constructor={};return e[a]=function(){return{foo:1}},1!==n[t](Boolean).foo}))}},"3ca3":function(t,n,e){"use strict";var r=e("6547").charAt,s=e("69f3"),i=e("7dd0"),a="String Iterator",o=s.set,c=s.getterFor(a);i(String,"String",(function(t){o(this,{type:a,string:String(t),index:0})}),(function(){var t,n=c(this),e=n.string,s=n.index;return s>=e.length?{value:void 0,done:!0}:(t=r(e,s),n.index+=t.length,{value:t,done:!1})}))},"62bc":function(t,n,e){"use strict";var r=e("eaf5"),s=e.n(r);s.a},"65f0":function(t,n,e){var r=e("861d"),s=e("e8b5"),i=e("b622"),a=i("species");t.exports=function(t,n){var e;return s(t)&&(e=t.constructor,"function"!=typeof e||e!==Array&&!s(e.prototype)?r(e)&&(e=e[a],null===e&&(e=void 0)):e=void 0),new(void 0===e?Array:e)(0===n?0:n)}},"746f":function(t,n,e){var r=e("428f"),s=e("5135"),i=e("e538"),a=e("9bf2").f;t.exports=function(t){var n=r.Symbol||(r.Symbol={});s(n,t)||a(n,t,{value:i.f(t)})}},"7f46":function(t,n,e){"use strict";e.r(n);var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",{staticClass:"look"},[e("div",{ref:"box",staticClass:"box",style:{transform:t.boxXdeg}},[e("div",{ref:"spanA",staticClass:"span spanA",style:{transform:t.spansDeg("spaA")}}),e("div",{ref:"spanB",staticClass:"span spanB",style:{transform:t.spansDeg("spaB")}}),e("div",{ref:"spanC",staticClass:"span spanC",style:{transform:t.spansDeg("spaC")}}),e("div",{ref:"spanD",staticClass:"span spanD",style:{transform:t.spansDeg("spaD")}}),e("div",{ref:"spanE",staticClass:"span spanE",style:{transform:t.spansDeg("spaE")}}),e("div",{ref:"spanF",staticClass:"span spanF",style:{transform:t.spansDeg("spaF")}}),e("div",{ref:"spanG",staticClass:"span spanG",style:{transform:t.spansDeg("spaG")}}),e("div",{ref:"spanH",staticClass:"span spanH",style:{transform:t.spansDeg("spaH")}})])]),e("div",{staticClass:"controlBtn"},[e("button",{staticClass:"leftt"},[t._v("left")]),e("button",{staticClass:"topl",on:{click:t.toplFn}},[t._v("top")]),e("button",{staticClass:"topr",on:{click:t.toprFn}},[t._v("top")]),e("button",{staticClass:"rightt",on:{click:t.righttFn}},[t._v("right")]),e("br"),e("button",{staticClass:"leftb"},[t._v("left")]),e("button",{staticClass:"boottoml",on:{click:t.bottomlFn}},[t._v("bottom")]),e("button",{staticClass:"bottomr",on:{click:t.bottomrFn}},[t._v("bottom")]),e("button",{staticClass:"rightb"},[t._v("right")])]),e("div",{staticClass:"control"},[e("div",[t._v("boxX:"),e("input",{directives:[{name:"model",rawName:"v-model",value:t.boxX,expression:"boxX"}],attrs:{type:"range",max:"120",min:"-120"},domProps:{value:t.boxX},on:{__r:function(n){t.boxX=n.target.value}}}),t._v(" "+t._s(t.boxX))]),e("div",[t._v("boxY: "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.boxY,expression:"boxY"}],attrs:{type:"range",max:"120",min:"-120"},domProps:{value:t.boxY},on:{__r:function(n){t.boxY=n.target.value}}}),t._v(t._s(t.boxY))]),e("div",[t._v("boxZ: "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.boxZ,expression:"boxZ"}],attrs:{type:"range",max:"120",min:"-120"},domProps:{value:t.boxZ},on:{__r:function(n){t.boxZ=n.target.value}}}),t._v(t._s(t.boxZ))])]),e("div",{staticClass:"spanTip"},t._l(t.spanTips,(function(n,r,s){return e("div",[t._v(t._s(r)+" "),e("input",{directives:[{name:"model",rawName:"v-model",value:n.x,expression:"item.x"}],attrs:{type:"range",max:"360",min:"-360"},domProps:{value:n.x},on:{__r:function(e){return t.$set(n,"x",e.target.value)}}}),e("span",[t._v("x:"+t._s(n.x))]),e("input",{directives:[{name:"model",rawName:"v-model",value:n.y,expression:"item.y"}],attrs:{type:"range",max:"360",min:"-360"},domProps:{value:n.y},on:{__r:function(e){return t.$set(n,"y",e.target.value)}}}),e("span",[t._v("y:"+t._s(n.y))]),e("input",{directives:[{name:"model",rawName:"v-model",value:n.z,expression:"item.z"}],attrs:{type:"range",max:"360",min:"-360"},domProps:{value:n.z},on:{__r:function(e){return t.$set(n,"z",e.target.value)}}}),e("span",[t._v("z:"+t._s(n.z))])])})),0)])},s=[],i=(e("a4d3"),e("e01a"),e("d28b"),e("99af"),e("d3b7"),e("3ca3"),e("ddb0"),e("07e8")),a={name:"rubik",data:function(){return{boxX:-20,boxY:-20,boxZ:0,spanTips:{spaA:{x:0,y:0,z:0,tlZ:-50},spaB:{x:0,y:0,z:0,tlZ:-50},spaC:{x:0,y:0,z:0,tlZ:-50},spaD:{x:0,y:0,z:0,tlZ:-50},spaE:{x:0,y:0,z:0,tlZ:50},spaF:{x:0,y:0,z:0,tlZ:50},spaG:{x:0,y:0,z:0,tlZ:50},spaH:{x:0,y:0,z:0,tlZ:50}},tsfOrigin:{0:{x:100,y:100,z:-50},1:{x:0,y:100,z:-50},2:{x:100,y:0,z:-50},3:{x:0,y:0,z:-50},4:{x:0,y:100,z:50},5:{x:100,y:100,z:50},6:{x:0,y:0,z:50},7:{x:100,y:0,z:50}},front:["spaH","spaG","spaF","spaE","spaC","spaD","spaA","spaB"]}},computed:{boxXdeg:function(){return"rotateX(".concat(this.boxX,"deg) rotateY(").concat(this.boxY,"deg)  rotateZ(").concat(this.boxZ,"deg) ")}},methods:{setInner:function(t,n){var e=t.getElementsByTagName("div"),r=!0,s=!1,i=void 0;try{for(var a,o=e[Symbol.iterator]();!(r=(a=o.next()).done);r=!0){var c=a.value;c.innerHTML=n}}catch(f){s=!0,i=f}finally{try{r||null==o.return||o.return()}finally{if(s)throw i}}},spansDeg:function(t){var n=this.spanTips[t];return"translateZ(".concat(n.tlZ,"px) rotateX(").concat(n.x,"deg) rotateY(").concat(n.y,"deg)  rotateZ(").concat(n.z,"deg) ")},changeArr:function(t,n,e,r,s){s?(this.spanTips[t][r]+=e,this.front[n]=t):(this.spanTips[this.front[t]][r]+=e,this.front[n]=this.front[t])},toprFn:function(){var t=this.front[1];this.changeArr(3,1,90,"x"),this.changeArr(6,3,90,"x"),this.changeArr(4,6,90,"x"),this.changeArr(t,4,90,"x",1),this.setTsfOr()},toplFn:function(){},setTsfOr:function(){for(var t in this.front)switch(this.front[t].charAt(3)){case"H":this.setTsf("spanH",t);break;case"G":this.setTsf("spanG",t);break;case"F":this.setTsf("spanF",t);break;case"E":this.setTsf("spanE",t);break;case"C":this.setTsf("spanC",t);break;case"D":this.setTsf("spanD",t);break;case"A":this.setTsf("spanA",t);break;case"B":this.setTsf("spanB",t);break}},setTsf:function(t,n){console.log(t+":::"+n),console.log(this.tsfOrigin[n].x),this.$refs[t].style.transformOrigin="".concat(this.tsfOrigin[n].x,"px\n                                             ").concat(this.tsfOrigin[n].y,"px\n                                             ").concat(this.tsfOrigin[n].z,"px")},righttFn:function(){console.log("a"),this.setTsfOr();var t=this.front[1];this.changeArr(0,1,90,"y"),this.changeArr(5,0,90,"y"),this.changeArr(4,5,90,"y"),this.changeArr(t,4,90,"y",1)},bottomrFn:function(){this.setTsfOr();var t=this.front[1];this.changeArr(4,1,-90,"x"),this.changeArr(6,4,-90,"x"),this.changeArr(3,6,-90,"x"),this.changeArr(t,3,-90,"x",1),console.log(this.front)},bottomlFn:function(){}},mounted:function(){new i["a"](this.$refs.spanA),new i["a"](this.$refs.spanB),new i["a"](this.$refs.spanC),new i["a"](this.$refs.spanD),new i["a"](this.$refs.spanE),new i["a"](this.$refs.spanF),new i["a"](this.$refs.spanG),new i["a"](this.$refs.spanH),this.setInner(this.$refs.spanA,"A"),this.setInner(this.$refs.spanB,"B"),this.setInner(this.$refs.spanC,"C"),this.setInner(this.$refs.spanD,"D"),this.setInner(this.$refs.spanE,"E"),this.setInner(this.$refs.spanF,"F"),this.setInner(this.$refs.spanG,"G"),this.setInner(this.$refs.spanH,"H"),this.setTsfOr()}},o=a,c=(e("62bc"),e("2877")),f=Object(c["a"])(o,r,s,!1,null,"63479464",null);n["default"]=f.exports},8418:function(t,n,e){"use strict";var r=e("c04e"),s=e("9bf2"),i=e("5c6c");t.exports=function(t,n,e){var a=r(n);a in t?s.f(t,a,i(0,e)):t[a]=e}},"99af":function(t,n,e){"use strict";var r=e("23e7"),s=e("d039"),i=e("e8b5"),a=e("861d"),o=e("7b0b"),c=e("50c4"),f=e("8418"),u=e("65f0"),l=e("1dde"),p=e("b622"),h=e("2d00"),d=p("isConcatSpreadable"),v=9007199254740991,b="Maximum allowed index exceeded",y=h>=51||!s((function(){var t=[];return t[d]=!1,t.concat()[0]!==t})),x=l("concat"),g=function(t){if(!a(t))return!1;var n=t[d];return void 0!==n?!!n:i(t)},m=!y||!x;r({target:"Array",proto:!0,forced:m},{concat:function(t){var n,e,r,s,i,a=o(this),l=u(a,0),p=0;for(n=-1,r=arguments.length;n<r;n++)if(i=-1===n?a:arguments[n],g(i)){if(s=c(i.length),p+s>v)throw TypeError(b);for(e=0;e<s;e++,p++)e in i&&f(l,p,i[e])}else{if(p>=v)throw TypeError(b);f(l,p++,i)}return l.length=p,l}})},a4d3:function(t,n,e){"use strict";var r=e("23e7"),s=e("da84"),i=e("d066"),a=e("c430"),o=e("83ab"),c=e("4930"),f=e("fdbf"),u=e("d039"),l=e("5135"),p=e("e8b5"),h=e("861d"),d=e("825a"),v=e("7b0b"),b=e("fc6a"),y=e("c04e"),x=e("5c6c"),g=e("7c73"),m=e("df75"),S=e("241c"),w=e("057f"),C=e("7418"),T=e("06cf"),_=e("9bf2"),A=e("d1e7"),O=e("9112"),z=e("6eeb"),L=e("5692"),D=e("f772"),F=e("d012"),k=e("90e3"),$=e("b622"),E=e("e538"),P=e("746f"),Z=e("d44e"),G=e("69f3"),N=e("b727").forEach,H=D("hidden"),j="Symbol",B="prototype",X=$("toPrimitive"),I=G.set,M=G.getterFor(j),Y=Object[B],V=s.Symbol,J=i("JSON","stringify"),R=T.f,q=_.f,Q=w.f,W=A.f,K=L("symbols"),U=L("op-symbols"),tt=L("string-to-symbol-registry"),nt=L("symbol-to-string-registry"),et=L("wks"),rt=s.QObject,st=!rt||!rt[B]||!rt[B].findChild,it=o&&u((function(){return 7!=g(q({},"a",{get:function(){return q(this,"a",{value:7}).a}})).a}))?function(t,n,e){var r=R(Y,n);r&&delete Y[n],q(t,n,e),r&&t!==Y&&q(Y,n,r)}:q,at=function(t,n){var e=K[t]=g(V[B]);return I(e,{type:j,tag:t,description:n}),o||(e.description=n),e},ot=f?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof V},ct=function(t,n,e){t===Y&&ct(U,n,e),d(t);var r=y(n,!0);return d(e),l(K,r)?(e.enumerable?(l(t,H)&&t[H][r]&&(t[H][r]=!1),e=g(e,{enumerable:x(0,!1)})):(l(t,H)||q(t,H,x(1,{})),t[H][r]=!0),it(t,r,e)):q(t,r,e)},ft=function(t,n){d(t);var e=b(n),r=m(e).concat(dt(e));return N(r,(function(n){o&&!lt.call(e,n)||ct(t,n,e[n])})),t},ut=function(t,n){return void 0===n?g(t):ft(g(t),n)},lt=function(t){var n=y(t,!0),e=W.call(this,n);return!(this===Y&&l(K,n)&&!l(U,n))&&(!(e||!l(this,n)||!l(K,n)||l(this,H)&&this[H][n])||e)},pt=function(t,n){var e=b(t),r=y(n,!0);if(e!==Y||!l(K,r)||l(U,r)){var s=R(e,r);return!s||!l(K,r)||l(e,H)&&e[H][r]||(s.enumerable=!0),s}},ht=function(t){var n=Q(b(t)),e=[];return N(n,(function(t){l(K,t)||l(F,t)||e.push(t)})),e},dt=function(t){var n=t===Y,e=Q(n?U:b(t)),r=[];return N(e,(function(t){!l(K,t)||n&&!l(Y,t)||r.push(K[t])})),r};if(c||(V=function(){if(this instanceof V)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,n=k(t),e=function(t){this===Y&&e.call(U,t),l(this,H)&&l(this[H],n)&&(this[H][n]=!1),it(this,n,x(1,t))};return o&&st&&it(Y,n,{configurable:!0,set:e}),at(n,t)},z(V[B],"toString",(function(){return M(this).tag})),z(V,"withoutSetter",(function(t){return at(k(t),t)})),A.f=lt,_.f=ct,T.f=pt,S.f=w.f=ht,C.f=dt,E.f=function(t){return at($(t),t)},o&&(q(V[B],"description",{configurable:!0,get:function(){return M(this).description}}),a||z(Y,"propertyIsEnumerable",lt,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:V}),N(m(et),(function(t){P(t)})),r({target:j,stat:!0,forced:!c},{for:function(t){var n=String(t);if(l(tt,n))return tt[n];var e=V(n);return tt[n]=e,nt[e]=n,e},keyFor:function(t){if(!ot(t))throw TypeError(t+" is not a symbol");if(l(nt,t))return nt[t]},useSetter:function(){st=!0},useSimple:function(){st=!1}}),r({target:"Object",stat:!0,forced:!c,sham:!o},{create:ut,defineProperty:ct,defineProperties:ft,getOwnPropertyDescriptor:pt}),r({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:ht,getOwnPropertySymbols:dt}),r({target:"Object",stat:!0,forced:u((function(){C.f(1)}))},{getOwnPropertySymbols:function(t){return C.f(v(t))}}),J){var vt=!c||u((function(){var t=V();return"[null]"!=J([t])||"{}"!=J({a:t})||"{}"!=J(Object(t))}));r({target:"JSON",stat:!0,forced:vt},{stringify:function(t,n,e){var r,s=[t],i=1;while(arguments.length>i)s.push(arguments[i++]);if(r=n,(h(n)||void 0!==t)&&!ot(t))return p(n)||(n=function(t,n){if("function"==typeof r&&(n=r.call(this,t,n)),!ot(n))return n}),s[1]=n,J.apply(null,s)}})}V[B][X]||O(V[B],X,V[B].valueOf),Z(V,j),F[H]=!0},b727:function(t,n,e){var r=e("0366"),s=e("44ad"),i=e("7b0b"),a=e("50c4"),o=e("65f0"),c=[].push,f=function(t){var n=1==t,e=2==t,f=3==t,u=4==t,l=6==t,p=5==t||l;return function(h,d,v,b){for(var y,x,g=i(h),m=s(g),S=r(d,v,3),w=a(m.length),C=0,T=b||o,_=n?T(h,w):e?T(h,0):void 0;w>C;C++)if((p||C in m)&&(y=m[C],x=S(y,C,g),t))if(n)_[C]=x;else if(x)switch(t){case 3:return!0;case 5:return y;case 6:return C;case 2:c.call(_,y)}else if(u)return!1;return l?-1:f||u?u:_}};t.exports={forEach:f(0),map:f(1),filter:f(2),some:f(3),every:f(4),find:f(5),findIndex:f(6)}},d28b:function(t,n,e){var r=e("746f");r("iterator")},ddb0:function(t,n,e){var r=e("da84"),s=e("fdbc"),i=e("e260"),a=e("9112"),o=e("b622"),c=o("iterator"),f=o("toStringTag"),u=i.values;for(var l in s){var p=r[l],h=p&&p.prototype;if(h){if(h[c]!==u)try{a(h,c,u)}catch(v){h[c]=u}if(h[f]||a(h,f,l),s[l])for(var d in i)if(h[d]!==i[d])try{a(h,d,i[d])}catch(v){h[d]=i[d]}}}},e01a:function(t,n,e){"use strict";var r=e("23e7"),s=e("83ab"),i=e("da84"),a=e("5135"),o=e("861d"),c=e("9bf2").f,f=e("e893"),u=i.Symbol;if(s&&"function"==typeof u&&(!("description"in u.prototype)||void 0!==u().description)){var l={},p=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),n=this instanceof p?new u(t):void 0===t?u():u(t);return""===t&&(l[n]=!0),n};f(p,u);var h=p.prototype=u.prototype;h.constructor=p;var d=h.toString,v="Symbol(test)"==String(u("test")),b=/^Symbol\((.*)\)[^)]+$/;c(h,"description",{configurable:!0,get:function(){var t=o(this)?this.valueOf():this,n=d.call(t);if(a(l,t))return"";var e=v?n.slice(7,-1):n.replace(b,"$1");return""===e?void 0:e}}),r({global:!0,forced:!0},{Symbol:p})}},e538:function(t,n,e){var r=e("b622");n.f=r},e8b5:function(t,n,e){var r=e("c6b6");t.exports=Array.isArray||function(t){return"Array"==r(t)}},eaf5:function(t,n,e){},fdbc:function(t,n){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-281a3375.dc74c232.js.map