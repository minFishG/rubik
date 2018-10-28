function getstyle(obj,attr) {
    if(obj.currentStyle){
        return obj.currentStyle[attr];
    }else{
        return window.getComputedStyle(obj,null)[attr];
    }
}
function startmove(obj,json,fn) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var bstop=true;
        for(var attr in json){
            var icur =0;
            if(attr=="opacity"){
                icur=parseInt(parseFloat(getstyle(obj,attr))*100);
            }else{
                icur=parseInt(getstyle(obj,attr));
            }
            var iSpeed = (json[attr] - icur) / 8;
            iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
            if (icur != json[attr]) {
                bstop=false;
            }
            if(attr=="opacity"){
                obj.style.filter='alpha(opacity:'+(icur+iSpeed)+')';
                obj.style.opacity=(icur+iSpeed)/100;
            }else{
                obj.style[attr]= icur + iSpeed+"px";
            }
        }
        if(bstop){
            clearInterval(obj.timer);
            if(fn){
                fn();
            }
        }
    }, 30)
}