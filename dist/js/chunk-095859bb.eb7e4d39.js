(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-095859bb"],{"1dde":function(t,s,e){var a=e("d039"),i=e("b622"),r=e("2d00"),o=i("species");t.exports=function(t){return r>=51||!a((function(){var s=[],e=s.constructor={};return e[o]=function(){return{foo:1}},1!==s[t](Boolean).foo}))}},"56c7":function(t,s,e){"use strict";var a=e("f256"),i=e.n(a);i.a},"65f0":function(t,s,e){var a=e("861d"),i=e("e8b5"),r=e("b622"),o=r("species");t.exports=function(t,s){var e;return i(t)&&(e=t.constructor,"function"!=typeof e||e!==Array&&!i(e.prototype)?a(e)&&(e=e[o],null===e&&(e=void 0)):e=void 0),new(void 0===e?Array:e)(0===s?0:s)}},7672:function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",{staticClass:"shitu"},[e("div",{ref:"rubik",staticClass:"rongqi",style:{transform:t.setBoxTsf,webkitTransform:t.setBoxTsf,OTransform:t.setBoxTsf,msTransform:t.setBoxTsf,MozTransform:t.setBoxTsf}})]),e("div",{staticClass:"control"},[e("div",{staticClass:"rangeBox"},[e("div",[t._v("x:"),e("input",{directives:[{name:"model",rawName:"v-model",value:t.boxX,expression:"boxX"}],attrs:{type:"range",max:"360",min:"-360"},domProps:{value:t.boxX},on:{__r:function(s){t.boxX=s.target.value}}}),t._v(" "+t._s(t.boxX))]),e("div",[t._v("y: "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.boxY,expression:"boxY"}],attrs:{type:"range",max:"360",min:"-360"},domProps:{value:t.boxY},on:{__r:function(s){t.boxY=s.target.value}}}),t._v(t._s(t.boxY))]),e("div",[t._v("z: "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.boxZ,expression:"boxZ"}],attrs:{type:"range",max:"360",min:"-360"},domProps:{value:t.boxZ},on:{__r:function(s){t.boxZ=s.target.value}}}),t._v(t._s(t.boxZ))])]),e("div",{staticClass:"btnBoxCtrl"},[e("button",{on:{click:function(s){return t.boxMove("top")}}},[t._v("X")]),e("button",{on:{click:function(s){return t.boxMove("bottom")}}},[t._v("X'")]),e("button",{on:{click:function(s){return t.boxMove("left")}}},[t._v("Y")]),e("button",{on:{click:function(s){return t.boxMove("right")}}},[t._v("Y'")]),e("button",{on:{click:function(s){return t.boxMove("zTop")}}},[t._v("Z")]),e("button",{on:{click:function(s){return t.boxMove("zBottom")}}},[t._v("Z'")]),e("button",{on:{click:t.getBack}},[t._v("-O-")])])]),e("div",{staticClass:"btnControl"},[e("button",{staticClass:"t1",on:{click:function(s){return t.startMove(t.leftTopA,"top")}}},[t._v("L'")]),e("button",{staticClass:"t2",on:{click:function(s){return t.startMove(t.midTopA,"top")}}},[t._v("M'")]),e("button",{staticClass:"t3",on:{click:function(s){return t.startMove(t.rightTopA,"top")}}},[t._v("R")]),e("button",{staticClass:"b1",on:{click:function(s){return t.startMove(t.leftBottomA,"bottom")}}},[t._v("L")]),e("button",{staticClass:"b2",on:{click:function(s){return t.startMove(t.midBottomA,"bottom")}}},[t._v("M")]),e("button",{staticClass:"b3",on:{click:function(s){return t.startMove(t.rightBottomA,"bottom")}}},[t._v("R'")]),e("button",{staticClass:"l1",on:{click:function(s){return t.startMove(t.firstLeft,"left")}}},[t._v("U")]),e("button",{staticClass:"l2",on:{click:function(s){return t.startMove(t.secondLeft,"left")}}},[t._v("E'")]),e("button",{staticClass:"l3",on:{click:function(s){return t.startMove(t.thirdLeft,"left")}}},[t._v("D'")]),e("button",{staticClass:"r1",on:{click:function(s){return t.startMove(t.firstRight,"right")}}},[t._v("U'")]),e("button",{staticClass:"r2",on:{click:function(s){return t.startMove(t.secondRight,"right")}}},[t._v("E")]),e("button",{staticClass:"r3",on:{click:function(s){return t.startMove(t.thirdRight,"right")}}},[t._v("D")]),e("button",{staticClass:"z1",on:{click:function(s){return t.startMove(t.zlTop,"zTop")}}},[t._v("F")]),e("button",{staticClass:"z2",on:{click:function(s){return t.startMove(t.zmTop,"zTop")}}},[t._v("S'")]),e("button",{staticClass:"z3",on:{click:function(s){return t.startMove(t.zrTop,"zTop")}}},[t._v("B")]),e("button",{staticClass:"zb1",on:{click:function(s){return t.startMove(t.zlBottom,"zBottom")}}},[t._v("F'")]),e("button",{staticClass:"zb2",on:{click:function(s){return t.startMove(t.zmBottom,"zBottom")}}},[t._v("S")]),e("button",{staticClass:"zb3",on:{click:function(s){return t.startMove(t.zrBottom,"zBottom")}}},[t._v("B'")])])])},i=[];e("99af");function r(t){this.obj=t,this.init()}r.prototype.jryTransform=function(t,s){if(t.style){var e=t.style;e.transform=s,e.webkitTransform=s,e.OTransform=s,e.msTransform=s,e.MozTransform=s}},r.prototype.jryTransition=function(t,s){if(t.style){var e=t.style;e.transition=s,e.webkitTransition=s,e.OTransition=s,e.msTransition=s,e.MozTransition=s}},r.prototype.tsfStyle=function(t,s){if(t.style){var e=t.style;e.transformStyle=s,e.webkitTransformStyle=s,e.MozTransformStyle=s}},r.prototype.init=function(){var t=[[0,0,-50],[50,0,-50],[100,0,-50],[0,50,-50],[50,50,-50],[100,50,-50],[0,100,-50],[50,100,-50],[100,100,-50],[0,0,0],[50,0,0],[100,0,0],[0,50,0],[100,50,0],[0,100,0],[50,100,0],[100,100,0],[0,0,50],[50,0,50],[100,0,50],[0,50,50],[50,50,50],[100,50,50],[0,100,50],[50,100,50],[100,100,50]],s={a:{color:"white",tx:0,ty:0,tz:25,rx:0,ry:0},b:{color:"#ff2737",tx:0,ty:25,tz:0,rx:-90,ry:0},c:{color:"yellow",tx:0,ty:0,tz:-25,rx:-180,ry:0},d:{color:"#ffa109",tx:0,ty:-25,tz:0,rx:90,ry:0},e:{color:"#49da76",tx:-25,ty:0,tz:0,ry:-90,rx:0},f:{color:"#4959c2",tx:25,ty:0,tz:0,ry:90,rx:0}};switch(this.obj.layer){case 3:this.bigWidth=3*(this.obj.width+2),this.many=26;break;case 2:this.bigWidth=3*(this.obj.width+2),this.many=4;break}for(var e=0;e<26;e++){var a=document.createElement("div"),i=a.style;a.className="divs",i.height=this.bigWidth+"px",i.width=this.bigWidth+"px",i.position="absolute",this.tsfStyle(a,"preserve-3d"),this.jryTransition(a,"all .3s"),this.jryTransform(a,"rotateX(0deg) rotateY(0deg) rotateZ(0deg)"),this.i=e;var r=document.createElement("div"),o=r.style;for(var n in o.position="absolute",this.tsfStyle(r,"preserve-3d"),o.width="50px",o.height="50px",this.jryTransform(r,"translateX(".concat(t[e][0],"px)\n                                  translateY(").concat(t[e][1],"px)\n                                  translateZ(").concat(t[e][2],"px)")),s){var c=document.createElement("div"),h=c.style;h.height=this.obj.height+"px",h.width=this.obj.width+"px",h.border=this.obj.border,h.position="absolute",h.backgroundColor=s[n].color,this.jryTransform(c,"translateX(".concat(s[n].tx,"px)\n                                  translateY(").concat(s[n].ty,"px)\n                                  translateZ(").concat(s[n].tz,"px)\n                                  rotateX(").concat(s[n].rx,"deg)\n                                  rotateY(").concat(s[n].ry,"deg)")),r.appendChild(c)}a.appendChild(r);var f=document.createElement("div");f.className="zdiv";var b=f.style;b.height=this.bigWidth+"px",b.width=this.bigWidth+"px",b.position="absolute",this.tsfStyle(f,"preserve-3d"),this.jryTransform(f,"rotateZ(0deg)"),this.jryTransition(f,"all .3s"),f.appendChild(a),this.obj.obj.appendChild(f)}};var o=r,n={name:"rubik1-1",mounted:function(){new o({obj:this.$refs.rubik,layer:3,width:48,height:48,border:"2px solid #999"});for(var t=0;t<26;t++)this.allXYZ.push({x:0,y:0,z:0});var s=this;document.onkeydown=function(t){switch(t.keyCode){case 81:s.startMove(s.firstLeft,"left");break;case 87:s.startMove(s.secondLeft,"left");break;case 69:s.startMove(s.thirdLeft,"left");break;case 65:s.startMove(s.firstRight,"right");break;case 83:s.startMove(s.secondRight,"right");break;case 68:s.startMove(s.thirdRight,"right");break;case 82:s.startMove(s.leftTopA,"top");break;case 84:s.startMove(s.midTopA,"top");break;case 89:s.startMove(s.rightTopA,"top");break;case 70:s.startMove(s.leftBottomA,"bottom");break;case 71:s.startMove(s.midBottomA,"bottom");break;case 72:s.startMove(s.rightBottomA,"bottom");break;case 85:s.startMove(s.zlTop,"zTop");break;case 73:s.startMove(s.zmTop,"zTop");break;case 79:s.startMove(s.zrTop,"zTop");break;case 74:s.startMove(s.zlBottom,"zBottom");break;case 75:s.startMove(s.zmBottom,"zBottom");break;case 76:s.startMove(s.zrBottom,"zBottom");break}}},computed:{setBoxTsf:function(){return"rotateX(".concat(this.boxX,"deg) rotateY(").concat(this.boxY,"deg) rotateZ(").concat(this.boxZ,"deg)")}},data:function(){return{boxX:-32,boxY:-32,boxZ:0,canDo:!0,canCount:0,boxCanDo:!0,boxCanCount:0,allXYZ:[],moveLength:0,xzqk:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],allAway:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],away:[[0,0,0],[0,0,90],[0,0,180],[0,0,270],[0,90,0],[0,90,90],[0,90,180],[0,90,270],[0,180,0],[0,180,90],[0,180,180],[0,180,270],[0,270,0],[0,270,90],[0,270,180],[0,270,270],[90,0,0],[90,0,90],[90,0,180],[90,0,270],[270,0,0],[270,0,90],[270,0,180],[270,0,270]],rightTopA:[19,22,25,16,8,5,2,11,13],leftTopA:[17,20,23,14,6,3,0,9,12],midTopA:[18,21,24,15,7,4,1,10],firstLeft:[19,11,2,1,0,9,17,18,10],secondLeft:[22,13,5,4,3,12,20,21],thirdLeft:[25,16,8,7,6,14,23,24,15],rightBottomA:[19,11,2,5,8,16,25,22,13],midBottomA:[18,10,1,4,7,15,24,21],leftBottomA:[17,9,0,3,6,14,23,20,12],firstRight:[19,18,17,9,0,1,2,11,10],secondRight:[22,21,20,12,3,4,5,13],thirdRight:[25,24,23,14,6,7,8,16,15],zlTop:[19,22,25,24,23,20,17,18,21],zmTop:[11,13,16,15,14,12,9,10],zrTop:[2,5,8,7,6,3,0,1,4],zlBottom:[19,18,17,20,23,24,25,22,21],zmBottom:[11,10,9,12,14,15,16,13],zrBottom:[2,1,0,3,6,7,8,5,4]}},methods:{getBack:function(){this.boxX=-32,this.boxY=-32,this.boxZ=0},boxMove:function(t){if(this.boxCanDo&&this.canDo)switch(this.boxCanDo=!1,this.boxCanCount=0,t){case"top":this.startMove(this.rightTopA,"top",!0),this.startMove(this.leftTopA,"top",!0),this.startMove(this.midTopA,"top",!0);break;case"bottom":this.startMove(this.leftBottomA,"bottom",!0),this.startMove(this.midBottomA,"bottom",!0),this.startMove(this.rightBottomA,"bottom",!0);break;case"left":this.startMove(this.firstLeft,"left",!0),this.startMove(this.secondLeft,"left",!0),this.startMove(this.thirdLeft,"left",!0);break;case"right":this.startMove(this.firstRight,"right",!0),this.startMove(this.secondRight,"right",!0),this.startMove(this.thirdRight,"right",!0);break;case"zTop":this.startMove(this.zlTop,"zTop",!0),this.startMove(this.zmTop,"zTop",!0),this.startMove(this.zrTop,"zTop",!0);break;case"zBottom":this.startMove(this.zlBottom,"zBottom",!0),this.startMove(this.zmBottom,"zBottom",!0),this.startMove(this.zrBottom,"zBottom",!0);break;default:break}},startMove:function(t,s,e){if(!e){if(!this.boxCanDo)return;if(!this.canDo)return;this.canDo=!1,this.canCount=0,this.moveLength=t.length}var a=this.allAway[t[0]],i=this.allAway[t[1]];for(var r in t)switch(this[s](this.allAway[t[r]]),r){case"0":this.changeAway(t[0],t[2]);break;case"1":this.changeAway(t[1],t[3]);break;case"2":this.changeAway(t[2],t[4]);break;case"3":this.changeAway(t[3],t[5]);break;case"4":this.changeAway(t[4],t[6]);break;case"5":this.changeAway(t[5],t[7]);break;case"6":this.changeAway(t[6],a,!0);break;case"7":this.changeAway(t[7],i,!0);break;case"8":this.changeAway(t[8],t[8]);break;default:break}},top:function(t){switch(this.xzqk[t]){case 0:this.setTsf(90,0,0,16,t);break;case 1:this.setTsf(90,0,0,17,t);break;case 2:this.setTsf(90,0,0,18,t);break;case 3:this.setTsf(90,0,0,19,t);break;case 4:this.setTsf(0,0,90,5,t);break;case 5:this.setTsf(0,0,90,6,t);break;case 6:this.setTsf(0,0,90,7,t);break;case 7:this.setTsf(0,0,90,4,t);break;case 8:this.setTsf(90,0,0,22,t);break;case 9:this.setTsf(90,0,0,23,t);break;case 10:this.setTsf(90,0,0,20,t);break;case 11:this.setTsf(90,0,0,21,t);break;case 12:this.setTsf(90,0,0,15,t);break;case 13:this.setTsf(90,0,0,12,t);break;case 14:this.setTsf(90,0,0,13,t);break;case 15:this.setTsf(90,0,0,14,t);break;case 16:this.setTsf(90,0,0,10,t);break;case 17:this.setTsf(90,0,0,11,t);break;case 18:this.setTsf(90,0,0,8,t);break;case 19:this.setTsf(90,0,0,9,t);break;case 20:this.setTsf(90,0,0,0,t);break;case 21:this.setTsf(90,0,0,1,t);break;case 22:this.setTsf(90,0,0,2,t);break;case 23:this.setTsf(90,0,0,3,t);break}},bottom:function(t){switch(this.xzqk[t]){case 0:this.setTsf(-90,0,0,20,t);break;case 1:this.setTsf(-90,0,0,21,t);break;case 2:this.setTsf(-90,0,0,22,t);break;case 3:this.setTsf(-90,0,0,23,t);break;case 4:this.setTsf(0,0,-90,7,t);break;case 5:this.setTsf(0,0,-90,4,t);break;case 6:this.setTsf(0,0,-90,5,t);break;case 7:this.setTsf(0,0,-90,6,t);break;case 8:this.setTsf(-90,0,0,18,t);break;case 9:this.setTsf(-90,0,0,19,t);break;case 10:this.setTsf(-90,0,0,16,t);break;case 11:this.setTsf(-90,0,0,17,t);break;case 12:this.setTsf(-90,0,0,13,t);break;case 13:this.setTsf(-90,0,0,14,t);break;case 14:this.setTsf(-90,0,0,15,t);break;case 15:this.setTsf(-90,0,0,12,t);break;case 16:this.setTsf(-90,0,0,0,t);break;case 17:this.setTsf(-90,0,0,1,t);break;case 18:this.setTsf(-90,0,0,2,t);break;case 19:this.setTsf(-90,0,0,3,t);break;case 20:this.setTsf(-90,0,0,10,t);break;case 21:this.setTsf(-90,0,0,11,t);break;case 22:this.setTsf(-90,0,0,8,t);break;case 23:this.setTsf(-90,0,0,9,t);break}},right:function(t){switch(this.xzqk[t]){case 0:this.setTsf(0,90,0,4,t);break;case 1:this.setTsf(0,90,0,5,t);break;case 2:this.setTsf(0,90,0,6,t);break;case 3:this.setTsf(0,90,0,7,t);break;case 4:this.setTsf(0,90,0,8,t);break;case 5:this.setTsf(0,90,0,9,t);break;case 6:this.setTsf(0,90,0,10,t);break;case 7:this.setTsf(0,90,0,11,t);break;case 8:this.setTsf(0,90,0,12,t);break;case 9:this.setTsf(0,90,0,13,t);break;case 10:this.setTsf(0,90,0,14,t);break;case 11:this.setTsf(0,90,0,15,t);break;case 12:this.setTsf(0,90,0,0,t);break;case 13:this.setTsf(0,90,0,1,t);break;case 14:this.setTsf(0,90,0,2,t);break;case 15:this.setTsf(0,90,0,3,t);break;case 16:this.setTsf(0,0,-90,19,t);break;case 17:this.setTsf(0,0,-90,16,t);break;case 18:this.setTsf(0,0,-90,17,t);break;case 19:this.setTsf(0,0,-90,18,t);break;case 20:this.setTsf(0,0,90,21,t);break;case 21:this.setTsf(0,0,90,22,t);break;case 22:this.setTsf(0,0,90,23,t);break;case 23:this.setTsf(0,0,90,20,t);break}},left:function(t){switch(this.xzqk[t]){case 0:this.setTsf(0,-90,0,12,t);break;case 1:this.setTsf(0,-90,0,13,t);break;case 2:this.setTsf(0,-90,0,14,t);break;case 3:this.setTsf(0,-90,0,15,t);break;case 4:this.setTsf(0,-90,0,0,t);break;case 5:this.setTsf(0,-90,0,1,t);break;case 6:this.setTsf(0,-90,0,2,t);break;case 7:this.setTsf(0,-90,0,3,t);break;case 8:this.setTsf(0,-90,0,4,t);break;case 9:this.setTsf(0,-90,0,5,t);break;case 10:this.setTsf(0,-90,0,6,t);break;case 11:this.setTsf(0,-90,0,7,t);break;case 12:this.setTsf(0,-90,0,8,t);break;case 13:this.setTsf(0,-90,0,9,t);break;case 14:this.setTsf(0,-90,0,10,t);break;case 15:this.setTsf(0,-90,0,11,t);break;case 16:this.setTsf(0,0,90,17,t);break;case 17:this.setTsf(0,0,90,18,t);break;case 18:this.setTsf(0,0,90,19,t);break;case 19:this.setTsf(0,0,90,16,t);break;case 20:this.setTsf(0,0,-90,23,t);break;case 21:this.setTsf(0,0,-90,20,t);break;case 22:this.setTsf(0,0,-90,21,t);break;case 23:this.setTsf(0,0,-90,22,t);break}},zTop:function(t){switch(this.xzqk[t]){case 0:this.setTsf(0,-90,0,3,t,1);break;case 1:this.setTsf(0,-90,0,0,t,1);break;case 2:this.setTsf(0,-90,0,1,t,1);break;case 3:this.setTsf(0,-90,0,2,t,1);break;case 4:this.setTsf(0,-90,0,19,t,1);break;case 5:this.setTsf(0,-90,0,16,t,1);break;case 6:this.setTsf(0,-90,0,17,t,1);break;case 7:this.setTsf(0,-90,0,18,t,1);break;case 8:this.setTsf(0,-90,0,9,t,1);break;case 9:this.setTsf(0,-90,0,10,t,1);break;case 10:this.setTsf(0,-90,0,11,t,1);break;case 11:this.setTsf(0,-90,0,8,t,1);break;case 12:this.setTsf(0,-90,0,23,t,1);break;case 13:this.setTsf(0,-90,0,20,t,1);break;case 14:this.setTsf(0,-90,0,21,t,1);break;case 15:this.setTsf(0,-90,0,22,t,1);break;case 16:this.setTsf(0,0,90,15,t,1);break;case 17:this.setTsf(0,0,90,12,t,1);break;case 18:this.setTsf(0,0,90,13,t,1);break;case 19:this.setTsf(0,0,90,14,t,1);break;case 20:this.setTsf(0,0,-90,7,t,1);break;case 21:this.setTsf(0,0,-90,4,t,1);break;case 22:this.setTsf(0,0,-90,5,t,1);break;case 23:this.setTsf(0,0,-90,6,t,1);break}},zBottom:function(t){switch(this.xzqk[t]){case 0:this.setTsf(0,0,0,1,t,2);break;case 1:this.setTsf(0,0,0,2,t,2);break;case 2:this.setTsf(0,0,0,3,t,2);break;case 3:this.setTsf(0,0,0,0,t,2);break;case 4:this.setTsf(0,0,0,21,t,2);break;case 5:this.setTsf(0,0,0,22,t,2);break;case 6:this.setTsf(0,0,0,23,t,2);break;case 7:this.setTsf(0,0,0,20,t,2);break;case 8:this.setTsf(0,0,0,11,t,2);break;case 9:this.setTsf(0,0,0,8,t,2);break;case 10:this.setTsf(0,0,0,9,t,2);break;case 11:this.setTsf(0,0,0,10,t,2);break;case 12:this.setTsf(0,0,0,17,t,2);break;case 13:this.setTsf(0,0,0,18,t,2);break;case 14:this.setTsf(0,0,0,19,t,2);break;case 15:this.setTsf(0,0,0,16,t,2);break;case 16:this.setTsf(0,0,0,5,t,2);break;case 17:this.setTsf(0,0,0,6,t,2);break;case 18:this.setTsf(0,0,0,7,t,2);break;case 19:this.setTsf(0,0,0,4,t,2);break;case 20:this.setTsf(0,0,0,13,t,2);break;case 21:this.setTsf(0,0,0,14,t,2);break;case 22:this.setTsf(0,0,0,15,t,2);break;case 23:this.setTsf(0,0,0,12,t,2);break}},setTsf:function(t,s,e,a,i,r){if(this.xzqk[i]=a,r){if(1===r){var o=this.$refs.rubik.getElementsByClassName("zdiv");this.jianRongXing(o[i],"rotateZ(-90deg)")}else if(2===r){var n=this.$refs.rubik.getElementsByClassName("zdiv");this.jianRongXing(n[i],"rotateZ(90deg)")}}else{var c=this.$refs.rubik.getElementsByClassName("divs");this.allXYZ[i].x+=t,this.allXYZ[i].y+=s,this.allXYZ[i].z+=e,this.jianRongXing(c[i],"rotateX(".concat(this.allXYZ[i].x,"deg)\n                                       rotateY(").concat(this.allXYZ[i].y,"deg)\n                                       rotateZ(").concat(this.allXYZ[i].z,"deg)"))}var h=this;setTimeout((function(){h.setTsfa(a,i,r)}),305)},setTsfa:function(t,s,e){var a=this;this.allXYZ[s].x=this.away[t][0],this.allXYZ[s].y=this.away[t][1],this.allXYZ[s].z=this.away[t][2];var i=this.$refs.rubik.getElementsByClassName("divs");if(this.jryTransition(i[s],"all 0s"),this.jianRongXing(i[s],"rotateX(".concat(this.away[t][0],"deg)\n                                    rotateY(").concat(this.away[t][1],"deg)\n                                    rotateZ(").concat(this.away[t][2],"deg)")),e){var r=this.$refs.rubik.getElementsByClassName("zdiv");this.jryTransition(r[s],"all 0s"),this.jianRongXing(r[s],"rotateZ(0deg)")}setTimeout((function(){a.jryTransition(i[s],"all .3s"),a.canCount=1+Math.floor(a.canCount),a.canCount===a.moveLength&&(a.canDo=!0),a.boxCanDo||(a.boxCanCount=1+Math.floor(a.boxCanCount),26===a.boxCanCount&&(a.boxCanDo=!0)),e&&a.jryTransition(a.$refs.rubik.getElementsByClassName("zdiv")[s],"all .3s")}),10)},jianRongXing:function(t,s){if(t.style){var e=t.style;e.transform=s,e.webkitTransform=s,e.OTransform=s,e.msTransform=s,e.MozTransform=s}},jryTransition:function(t,s){if(t.style){var e=t.style;e.transition=s,e.webkitTransition=s,e.OTransition=s,e.msTransition=s,e.MozTransition=s}},changeAway:function(t,s,e){this.allAway[t]=e?s:this.allAway[s]}}},c=n,h=(e("56c7"),e("2877")),f=Object(h["a"])(c,a,i,!1,null,"77953402",null);s["default"]=f.exports},8418:function(t,s,e){"use strict";var a=e("c04e"),i=e("9bf2"),r=e("5c6c");t.exports=function(t,s,e){var o=a(s);o in t?i.f(t,o,r(0,e)):t[o]=e}},"99af":function(t,s,e){"use strict";var a=e("23e7"),i=e("d039"),r=e("e8b5"),o=e("861d"),n=e("7b0b"),c=e("50c4"),h=e("8418"),f=e("65f0"),b=e("1dde"),k=e("b622"),l=e("2d00"),T=k("isConcatSpreadable"),u=9007199254740991,v="Maximum allowed index exceeded",m=l>=51||!i((function(){var t=[];return t[T]=!1,t.concat()[0]!==t})),d=b("concat"),p=function(t){if(!o(t))return!1;var s=t[T];return void 0!==s?!!s:r(t)},g=!m||!d;a({target:"Array",proto:!0,forced:g},{concat:function(t){var s,e,a,i,r,o=n(this),b=f(o,0),k=0;for(s=-1,a=arguments.length;s<a;s++)if(r=-1===s?o:arguments[s],p(r)){if(i=c(r.length),k+i>u)throw TypeError(v);for(e=0;e<i;e++,k++)e in r&&h(b,k,r[e])}else{if(k>=u)throw TypeError(v);h(b,k++,r)}return b.length=k,b}})},e8b5:function(t,s,e){var a=e("c6b6");t.exports=Array.isArray||function(t){return"Array"==a(t)}},f256:function(t,s,e){}}]);