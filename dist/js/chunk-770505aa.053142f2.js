(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-770505aa"],{"1dde":function(t,r,e){var o=e("d039"),n=e("b622"),i=e("2d00"),a=n("species");t.exports=function(t){return i>=51||!o((function(){var r=[],e=r.constructor={};return e[a]=function(){return{foo:1}},1!==r[t](Boolean).foo}))}},"3b80":function(t,r,e){},"65f0":function(t,r,e){var o=e("861d"),n=e("e8b5"),i=e("b622"),a=i("species");t.exports=function(t,r){var e;return n(t)&&(e=t.constructor,"function"!=typeof e||e!==Array&&!n(e.prototype)?o(e)&&(e=e[a],null===e&&(e=void 0)):e=void 0),new(void 0===e?Array:e)(0===r?0:r)}},7230:function(t,r,e){"use strict";var o=e("3b80"),n=e.n(o);n.a},8418:function(t,r,e){"use strict";var o=e("c04e"),n=e("9bf2"),i=e("5c6c");t.exports=function(t,r,e){var a=o(r);a in t?n.f(t,a,i(0,e)):t[a]=e}},"9dd3":function(t,r,e){"use strict";e.r(r);var o=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",[e("span",[t._v("x:")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.x,expression:"x"}],staticClass:"numbers",attrs:{type:"number"},domProps:{value:t.x},on:{input:function(r){r.target.composing||(t.x=r.target.value)}}}),e("span",[t._v("y:")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.y,expression:"y"}],staticClass:"numbers",attrs:{type:"number"},domProps:{value:t.y},on:{input:function(r){r.target.composing||(t.y=r.target.value)}}}),e("button",{on:{click:t.start}},[t._v("新游戏")]),e("div",{attrs:{id:"fantuG"}})])},n=[];e("a434");function i(t,r,e){var o=this;o.obj=t,o.x=r,o.y=e,o.cre()}i.prototype.cre=function(){var t=this;t.pd=0,t.col="",t.ii=0,t.arr=[],t.ifrg=-1,t.boxwh=70,t.obj.style.height=80*t.y-10+"px",t.obj.style.width=80*t.x-10+"px",t.obj.style.margin="10px auto",t.obj.style.position="relative",t.arrbox=[],t.arrbox2=[],t.arrid=[];for(var r=0;r<t.y;r++)for(var e=0;e<t.x;e++){t.arr.push(r*t.x+e);var o=t.crediv();o.style.top=80*r+"px",o.style.left=80*e+"px",o.style.transformStyle="preserve-3d",o.style.transition="all .6s",o.ic=r*t.x+e,o.open=1,o.onclick=function(){if(1==this.open)if(this.open=0,t.ifrg*=-1,this.style.transform="rotateY(180deg)",1==t.ifrg)t.arrid.push(this.childNodes[1].id),t.arrbox.push(this);else if(t.arrid[t.arrid.length-1]!=this.childNodes[1].id){t.arrbox2.push(this);var r=t.arrbox.length-1,e=t.arrbox2.length-1;setTimeout((function(){t.arrbox2[e].style.transform="rotateY(0deg)",t.arrbox[r].style.transform="rotateY(0deg)",t.arrbox2[e].open=1,t.arrbox[r].open=1}),800)}};var n=t.crediv();n.style.backgroundColor="#666",n.style.zIndex="10",n.style.transform="translateZ(1px)",o.appendChild(n),o.appendChild(t.crediv()),t.obj.appendChild(o)}for(r=0;r<t.x*t.y;r++)t.setCol()},i.prototype.crediv=function(){var t=this,r=document.createElement("div");return r.style.position="absolute",r.style.width=t.boxwh+"px",r.style.height=t.boxwh+"px",r},i.prototype.setCol=function(){var t=this,r=t.ifSet(),e=t.obj.childNodes[r].childNodes[1];if(0==t.pd){var o=t.mathFR(255),n=t.mathFR(255),i=t.mathFR(255);t.col="rgb("+o+","+n+","+i+")",t.pd=1,t.ii=r}else t.pd=0;e.style.backgroundColor=t.col,e.style.transform="rotateY(180deg)",e.id=t.ii},i.prototype.mathFR=function(t){return Math.floor(Math.random()*t)},i.prototype.ifSet=function(){var t=this,r=t.arr[t.mathFR(t.arr.length)];for(var e in t.arr)if(t.arr[e]==r)return t.arr.splice(e,1),r};var a=i,s={name:"Fantu",data:function(){return{x:6,y:6}},methods:{start:function(){var t=document.getElementById("fantuG");t.innerHTML=null,new a(t,this.x,this.y)}},mounted:function(){this.start()}},l=s,c=(e("7230"),e("2877")),u=Object(c["a"])(l,o,n,!1,null,"44a41a68",null);r["default"]=u.exports},a434:function(t,r,e){"use strict";var o=e("23e7"),n=e("23cb"),i=e("a691"),a=e("50c4"),s=e("7b0b"),l=e("65f0"),c=e("8418"),u=e("1dde"),d=e("ae40"),f=u("splice"),p=d("splice",{ACCESSORS:!0,0:0,1:2}),h=Math.max,v=Math.min,y=9007199254740991,b="Maximum allowed length exceeded";o({target:"Array",proto:!0,forced:!f||!p},{splice:function(t,r){var e,o,u,d,f,p,x=s(this),m=a(x.length),g=n(t,m),w=arguments.length;if(0===w?e=o=0:1===w?(e=0,o=m-g):(e=w-2,o=v(h(i(r),0),m-g)),m+e-o>y)throw TypeError(b);for(u=l(x,o),d=0;d<o;d++)f=g+d,f in x&&c(u,d,x[f]);if(u.length=o,e<o){for(d=g;d<m-o;d++)f=d+o,p=d+e,f in x?x[p]=x[f]:delete x[p];for(d=m;d>m-o+e;d--)delete x[d-1]}else if(e>o)for(d=m-o;d>g;d--)f=d+o-1,p=d+e-1,f in x?x[p]=x[f]:delete x[p];for(d=0;d<e;d++)x[d+g]=arguments[d+2];return x.length=m-o+e,u}})},ae40:function(t,r,e){var o=e("83ab"),n=e("d039"),i=e("5135"),a=Object.defineProperty,s={},l=function(t){throw t};t.exports=function(t,r){if(i(s,t))return s[t];r||(r={});var e=[][t],c=!!i(r,"ACCESSORS")&&r.ACCESSORS,u=i(r,0)?r[0]:l,d=i(r,1)?r[1]:void 0;return s[t]=!!e&&!n((function(){if(c&&!o)return!0;var t={length:-1};c?a(t,1,{enumerable:!0,get:l}):t[1]=1,e.call(t,u,d)}))}},e8b5:function(t,r,e){var o=e("c6b6");t.exports=Array.isArray||function(t){return"Array"==o(t)}}}]);
//# sourceMappingURL=chunk-770505aa.053142f2.js.map