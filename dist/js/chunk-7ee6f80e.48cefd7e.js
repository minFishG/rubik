(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7ee6f80e"],{"07e8":function(s,t,e){"use strict";e("99af");function i(s){this.obj=s;var t=s.style;t.transformStyle="preserve-3d",t.width="100px",t.height="100px",t.position="absolute",this.rule={width:"96px",height:"96px",position:"absolute"},this.six={a:{color:"white",tx:0,ty:0,tz:50,rx:0,ry:0},b:{color:"#ff2737",tx:0,ty:50,tz:0,rx:-90,ry:0},c:{color:"yellow",tx:0,ty:0,tz:-50,rx:-180,ry:0},d:{color:"#ffa109",tx:0,ty:-50,tz:0,rx:90,ry:0},e:{color:"#49da76",tx:-50,ty:0,tz:0,ry:-90,rx:0},f:{color:"#4959c2",tx:50,ty:0,tz:0,ry:90,rx:0}},this.setPos()}i.prototype.setPos=function(){for(var s in this.six){var t=document.createElement("div");for(var e in this.rule)t.style[e]=this.rule[e];t.style.fontSize="20px",t.style.border="2px solid #999",t.style.backgroundColor=this.six[s].color,t.style.transform=" translateX(".concat(this.six[s].tx,"px)\n                           translateY(").concat(this.six[s].ty,"px)\n                           translateZ(").concat(this.six[s].tz,"px)\n                           rotateX(").concat(this.six[s].rx,"deg)\n                           rotateY(").concat(this.six[s].ry,"deg)\n                           "),this.obj.appendChild(t)}},t["a"]=i},"0b04":function(s,t,e){},"1dde":function(s,t,e){var i=e("d039"),a=e("b622"),r=e("2d00"),h=a("species");s.exports=function(s){return r>=51||!i((function(){var t=[],e=t.constructor={};return e[h]=function(){return{foo:1}},1!==t[s](Boolean).foo}))}},"5b49":function(s,t,e){"use strict";var i=e("0b04"),a=e.n(i);a.a},"65f0":function(s,t,e){var i=e("861d"),a=e("e8b5"),r=e("b622"),h=r("species");s.exports=function(s,t){var e;return a(s)&&(e=s.constructor,"function"!=typeof e||e!==Array&&!a(e.prototype)?i(e)&&(e=e[h],null===e&&(e=void 0)):e=void 0),new(void 0===e?Array:e)(0===t?0:t)}},"6d53":function(s,t,e){"use strict";e.r(t);var i=function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"show"},[e("div",{staticClass:"box"},[e("div",{ref:"three",attrs:{id:"app"}})]),e("div",[s._v(" rotateX:"),e("input",{directives:[{name:"model",rawName:"v-model",value:s.x,expression:"x"}],attrs:{type:"number"},domProps:{value:s.x},on:{input:function(t){t.target.composing||(s.x=t.target.value)}}}),e("br"),s._v(" rotateY:"),e("input",{directives:[{name:"model",rawName:"v-model",value:s.y,expression:"y"}],attrs:{type:"number"},domProps:{value:s.y},on:{input:function(t){t.target.composing||(s.y=t.target.value)}}}),e("br"),s._v(" rotateZ:"),e("input",{directives:[{name:"model",rawName:"v-model",value:s.z,expression:"z"}],attrs:{type:"number"},domProps:{value:s.z},on:{input:function(t){t.target.composing||(s.z=t.target.value)}}}),e("br")]),e("div",[s._v(" x.speed:"+s._s(s.sx)+" "),e("button",{on:{click:function(t){return s.speedAdd("sx",1)}}},[s._v("+")]),e("button",{on:{click:function(t){return s.speedAdd("sx",-1)}}},[s._v("-")]),e("br"),s._v(" y.speed:"+s._s(s.sy)+" "),e("button",{on:{click:function(t){return s.speedAdd("sy",1)}}},[s._v("+")]),e("button",{on:{click:function(t){return s.speedAdd("sy",-1)}}},[s._v("-")]),e("br"),s._v(" z.speed:"+s._s(s.sz)+" "),e("button",{on:{click:function(t){return s.speedAdd("sz",1)}}},[s._v("+")]),e("button",{on:{click:function(t){return s.speedAdd("sz",-1)}}},[s._v("-")]),e("br"),e("button",{on:{click:s.startMove}},[s._v("start")]),e("button",{on:{click:s.stop}},[s._v("stop")])]),e("div",{staticClass:"control"},[e("button",{on:{click:s.top}},[s._v("上")]),e("button",{on:{click:s.bottom}},[s._v("下")]),e("button",{on:{click:s.left}},[s._v("左")]),e("button",{on:{click:s.right}},[s._v("右")])]),e("div",s._l(s.away,(function(t,i){return e("button",{staticStyle:{width:"50px"},on:{click:function(t){return s.setTsfa(i)}}},[s._v(s._s(i))])})),0)])},a=[],r=(e("99af"),e("07e8")),h={name:"Three",data:function(){return{x:0,y:0,z:0,sx:0,sy:0,sz:0,isGo:!0,canDo:!0,xzqk:0,away:[[0,0,0],[0,0,90],[0,0,180],[0,0,270],[0,90,0],[0,90,90],[0,90,180],[0,90,270],[0,180,0],[0,180,90],[0,180,180],[0,180,270],[0,270,0],[0,270,90],[0,270,180],[0,270,270],[90,0,0],[90,0,90],[90,0,180],[90,0,270],[270,0,0],[270,0,90],[270,0,180],[270,0,270]],sameArr:[]}},methods:{setTsfa:function(s){this.x=this.away[s][0],this.y=this.away[s][1],this.z=this.away[s][2],this.$refs.three.style.transform="rotateX(".concat(this.x,"deg)\n                                        rotateY(").concat(this.y,"deg)\n                                        rotateZ(").concat(this.z,"deg)\n                                        ")},setTsf:function(s,t,e,i){clearInterval(this.timer),this.x+=s,this.y+=t,this.z+=e,this.$refs.three.style.transform="rotateX(".concat(this.x,"deg)\n                                        rotateY(").concat(this.y,"deg)\n                                        rotateZ(").concat(this.z,"deg)\n                                        ");var a=this;this.timer=setTimeout((function(){a.$refs.three.style.transition="0s",a.setTsfa(i),a.canDo=!0,setTimeout((function(){a.$refs.three.style.transition="all .3s"}),10)}),300)},top:function(){if(this.canDo)switch(this.canDo=!1,this.xzqk){case 0:this.setTsf(90,0,0,16),this.xzqk=16;break;case 1:this.setTsf(90,0,0,17),this.xzqk=17;break;case 2:this.setTsf(90,0,0,18),this.xzqk=18;break;case 3:this.setTsf(90,0,0,19),this.xzqk=19;break;case 4:this.setTsf(0,0,90,5),this.xzqk=5;break;case 5:this.setTsf(0,0,90,6),this.xzqk=6;break;case 6:this.setTsf(0,0,90,7),this.xzqk=7;break;case 7:this.setTsf(0,0,90,4),this.xzqk=4;break;case 8:this.setTsf(90,0,0,22),this.xzqk=22;break;case 9:this.setTsf(90,0,0,23),this.xzqk=23;break;case 10:this.setTsf(90,0,0,20),this.xzqk=20;break;case 11:this.setTsf(90,0,0,21),this.xzqk=21;break;case 12:this.setTsf(90,0,0,15),this.xzqk=15;break;case 13:this.setTsf(90,0,0,12),this.xzqk=12;break;case 14:this.setTsf(90,0,0,13),this.xzqk=13;break;case 15:this.setTsf(90,0,0,14),this.xzqk=14;break;case 16:this.setTsf(90,0,0,10),this.xzqk=10;break;case 17:this.setTsf(90,0,0,11),this.xzqk=11;break;case 18:this.setTsf(90,0,0,8),this.xzqk=8;break;case 19:this.setTsf(90,0,0,9),this.xzqk=9;break;case 20:this.setTsf(90,0,0,0),this.xzqk=0;break;case 21:this.setTsf(90,0,0,1),this.xzqk=1;break;case 22:this.setTsf(90,0,0,2),this.xzqk=2;break;case 23:this.setTsf(90,0,0,3),this.xzqk=3;break}},bottom:function(){if(this.canDo)switch(this.canDo=!1,this.xzqk){case 0:this.setTsf(-90,0,0,20),this.xzqk=20;break;case 1:this.setTsf(-90,0,0,21),this.xzqk=21;break;case 2:this.setTsf(-90,0,0,22),this.xzqk=22;break;case 3:this.setTsf(-90,0,0,23),this.xzqk=23;break;case 4:this.setTsf(0,0,-90,7),this.xzqk=7;break;case 5:this.setTsf(0,0,-90,4),this.xzqk=4;break;case 6:this.setTsf(0,0,-90,5),this.xzqk=5;break;case 7:this.setTsf(0,0,-90,6),this.xzqk=6;break;case 8:this.setTsf(-90,0,0,18),this.xzqk=18;break;case 9:this.setTsf(-90,0,0,19),this.xzqk=19;break;case 10:this.setTsf(-90,0,0,16),this.xzqk=16;break;case 11:this.setTsf(-90,0,0,17),this.xzqk=17;break;case 12:this.setTsf(-90,0,0,13),this.xzqk=13;break;case 13:this.setTsf(-90,0,0,14),this.xzqk=14;break;case 14:this.setTsf(-90,0,0,15),this.xzqk=15;break;case 15:this.setTsf(-90,0,0,12),this.xzqk=12;break;case 16:this.setTsf(-90,0,0,0),this.xzqk=0;break;case 17:this.setTsf(-90,0,0,1),this.xzqk=1;break;case 18:this.setTsf(-90,0,0,2),this.xzqk=2;break;case 19:this.setTsf(-90,0,0,3),this.xzqk=3;break;case 20:this.setTsf(-90,0,0,10),this.xzqk=10;break;case 21:this.setTsf(-90,0,0,11),this.xzqk=11;break;case 22:this.setTsf(-90,0,0,8),this.xzqk=8;break;case 23:this.setTsf(-90,0,0,9),this.xzqk=9;break}},right:function(){if(this.canDo)switch(this.canDo=!1,this.xzqk){case 0:this.setTsf(0,90,0,4),this.xzqk=4;break;case 1:this.setTsf(0,90,0,5),this.xzqk=5;break;case 2:this.setTsf(0,90,0,6),this.xzqk=6;break;case 3:this.setTsf(0,90,0,7),this.xzqk=7;break;case 4:this.setTsf(0,90,0,8),this.xzqk=8;break;case 5:this.setTsf(0,90,0,9),this.xzqk=9;break;case 6:this.setTsf(0,90,0,10),this.xzqk=10;break;case 7:this.setTsf(0,90,0,11),this.xzqk=11;break;case 8:this.setTsf(0,90,0,12),this.xzqk=12;break;case 9:this.setTsf(0,90,0,13),this.xzqk=13;break;case 10:this.setTsf(0,90,0,14),this.xzqk=14;break;case 11:this.setTsf(0,90,0,15),this.xzqk=15;break;case 12:this.setTsf(0,90,0,0),this.xzqk=0;break;case 13:this.setTsf(0,90,0,1),this.xzqk=1;break;case 14:this.setTsf(0,90,0,2),this.xzqk=2;break;case 15:this.setTsf(0,90,0,3),this.xzqk=3;break;case 16:this.setTsf(0,0,-90,19),this.xzqk=19;break;case 17:this.setTsf(0,0,-90,16),this.xzqk=16;break;case 18:this.setTsf(0,0,-90,17),this.xzqk=17;break;case 19:this.setTsf(0,0,-90,18),this.xzqk=18;break;case 20:this.setTsf(0,0,90,21),this.xzqk=21;break;case 21:this.setTsf(0,0,90,22),this.xzqk=22;break;case 22:this.setTsf(0,0,90,23),this.xzqk=23;break;case 23:this.setTsf(0,0,90,20),this.xzqk=20;break}},left:function(){if(this.canDo)switch(this.canDo=!1,this.xzqk){case 0:this.setTsf(0,-90,0,12),this.xzqk=12;break;case 1:this.setTsf(0,-90,0,13),this.xzqk=13;break;case 2:this.setTsf(0,-90,0,14),this.xzqk=14;break;case 3:this.setTsf(0,-90,0,15),this.xzqk=15;break;case 4:this.setTsf(0,-90,0,0),this.xzqk=0;break;case 5:this.setTsf(0,-90,0,1),this.xzqk=1;break;case 6:this.setTsf(0,-90,0,2),this.xzqk=2;break;case 7:this.setTsf(0,-90,0,3),this.xzqk=3;break;case 8:this.setTsf(0,-90,0,4),this.xzqk=4;break;case 9:this.setTsf(0,-90,0,5),this.xzqk=5;break;case 10:this.setTsf(0,-90,0,6),this.xzqk=6;break;case 11:this.setTsf(0,-90,0,7),this.xzqk=7;break;case 12:this.setTsf(0,-90,0,8),this.xzqk=8;break;case 13:this.setTsf(0,-90,0,9),this.xzqk=9;break;case 14:this.setTsf(0,-90,0,10),this.xzqk=10;break;case 15:this.setTsf(0,-90,0,11),this.xzqk=11;break;case 16:this.setTsf(0,0,90,17),this.xzqk=17;break;case 17:this.setTsf(0,0,90,18),this.xzqk=18;break;case 18:this.setTsf(0,0,90,19),this.xzqk=19;break;case 19:this.setTsf(0,0,90,16),this.xzqk=16;break;case 20:this.setTsf(0,0,-90,23),this.xzqk=23;break;case 21:this.setTsf(0,0,-90,20),this.xzqk=20;break;case 22:this.setTsf(0,0,-90,21),this.xzqk=21;break;case 23:this.setTsf(0,0,-90,22),this.xzqk=22;break}},startMove:function(){var s=this;clearInterval(this.timer),this.timer=setInterval((function(){s.x=Math.floor(s.x)+s.sx,s.y=Math.floor(s.y)+s.sy,s.z=Math.floor(s.z)+s.sz,s.$refs.three.style.transform="rotateX(".concat(s.x,"deg)\n                                          rotateY(").concat(s.y,"deg)\n                                          rotateZ(").concat(s.z,"deg)\n                                          ")}),25),this.isGo=!0},stop:function(){clearInterval(this.timer),this.isGo=!1},speedAdd:function(s,t){this[s]+=t}},mounted:function(){new r["a"](this.$refs.three)},deactivated:function(){},activated:function(){}},c=h,n=(e("5b49"),e("2877")),o=Object(n["a"])(c,i,a,!1,null,"3d04cfbe",null);t["default"]=o.exports},8418:function(s,t,e){"use strict";var i=e("c04e"),a=e("9bf2"),r=e("5c6c");s.exports=function(s,t,e){var h=i(t);h in s?a.f(s,h,r(0,e)):s[h]=e}},"99af":function(s,t,e){"use strict";var i=e("23e7"),a=e("d039"),r=e("e8b5"),h=e("861d"),c=e("7b0b"),n=e("50c4"),o=e("8418"),k=e("65f0"),f=e("1dde"),x=e("b622"),b=e("2d00"),z=x("isConcatSpreadable"),u=9007199254740991,T="Maximum allowed index exceeded",q=b>=51||!a((function(){var s=[];return s[z]=!1,s.concat()[0]!==s})),d=f("concat"),l=function(s){if(!h(s))return!1;var t=s[z];return void 0!==t?!!t:r(s)},v=!q||!d;i({target:"Array",proto:!0,forced:v},{concat:function(s){var t,e,i,a,r,h=c(this),f=k(h,0),x=0;for(t=-1,i=arguments.length;t<i;t++)if(r=-1===t?h:arguments[t],l(r)){if(a=n(r.length),x+a>u)throw TypeError(T);for(e=0;e<a;e++,x++)e in r&&o(f,x,r[e])}else{if(x>=u)throw TypeError(T);o(f,x++,r)}return f.length=x,f}})},e8b5:function(s,t,e){var i=e("c6b6");s.exports=Array.isArray||function(s){return"Array"==i(s)}}}]);
//# sourceMappingURL=chunk-7ee6f80e.48cefd7e.js.map