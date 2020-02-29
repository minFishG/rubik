<template>
  <div>
    <div ref="rubikX" class="rubikX"></div>

    <div class="boxCtrl">
<!--      <div style="margin-bottom: 8px">-->
<!--        <span>X:{{bigX}}</span><input type="range" max="270" min="-180" v-model="bigX">-->
<!--        <span>Y:{{bigY}}</span><input type="range" max="270" min="-180" v-model="bigY">-->
<!--        <span>Z:{{bigZ}}</span><input type="range" max="270" min="-180" v-model="bigZ">-->
<!--      </div>-->




      <div class="layerCtrl"
           :class="{'isShow':isShow}"
      >
        <div style="max-width: 266px;
                    margin: 0 auto;
          ">

          layer:
          <select name="layer" v-model="layer">
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <button @click="newGame">NEW GAME</button>
        </div>
      </div>
      <button @click="ctrlKey.boxMove('top')">X</button>
      <button @click="ctrlKey.boxMove('bottom')">X'</button>
      <button @click="ctrlKey.boxMove('left')">Y</button>
      <button @click="ctrlKey.boxMove('right')">Y'</button>
      <button @click="ctrlKey.boxMove('zTop')">Z</button>
      <button @click="ctrlKey.boxMove('zBottom')">Z'</button>
      <button @click="backZero">-O-</button>
    </div>

<!--    <div class="btnCtrl">-->
<!--      <div v-for="items in ctrlKeyMethods" class="btnBox">-->
<!--        <button v-for="(item,key) in items" @click="ctrlKey.startMove(item[0],item[1])">-->
<!--          {{item[1]==='left'?'&lt;':item[1]==='right'?'&gt;':item[1]==='top'?-->
<!--          '&and;':item[1]==='bottom'?'&or;':item[1]==='zTop'?'Z':'Z\''}}-->
<!--        </button>-->
<!--      </div>-->
<!--    </div>-->
  </div>
</template>

<script>
  import RubikX from "./rubikCube";
  export default {
    name: "rubikX",
    mounted() {
      this.newGame();
     //  let arr=[];
     //  let a=1;
     //  for(let i=10;i<=11;i++){
     //
     // //   arr.push(i+':[[3,\'right\'],[3,\'left\'],['+a+',\'bottom\'],['+a+',\'top\']],')
     //
     // //   arr.push(i+':[[1,\'zBottom\'],[1,\'zTop\'],['+a+',\'bottom\'],['+a+',\'top\']],')
     //
     //    arr.push(i+':[[2,\'right\'],[2,\'left\'],['+a+',\'zBottom\'],['+a+',\'zTop\']],')
     //    a+=1
     //  }
     //  console.log(arr.join('\n'));
    },
    data(){
      return {
        isShow:true,
        ctrlKey:null,
        ctrlKeyMethods:null,
        layer:2,
        bigMove:'',
        bigX:-38,bigY:-38,bigZ:0,
      }
    },
    watch:{
      bigX(){
        this.bigMoving();
      },
      bigY(){
        this.bigMoving();
      },
      bigZ(){
        this.bigMoving();
      }
    },
    methods:{
      backZero(){
        this.isShow=!this.isShow;
        // this.bigX=-38;
        // this.bigY=-38;
        // this.bigZ=0;
      },
      newGame(){
        let obj=this.$refs.rubikX;
        obj.innerHTML='';
        this.ctrlKey=new RubikX(obj,this.layer);

        this.bigMove=this.$refs.rubikX.getElementsByClassName('bigMove')[0];
        this.bigMoving();
        this.ctrlKeyMethods=this.ctrlKey.methods;
      },
      bigMoving(){
        this.bigMove.style.transform=`rotateX(${this.bigX}deg) rotateY(${this.bigY}deg) rotateZ(${this.bigZ}deg)`;
      },
    }
  }
</script>

<style scoped>

  .boxCtrl [type=range]{
    width: 136px;
    margin: 0;
  }
  .boxCtrl span{
    display: inline-block;
    width: 50px;
  }
  .layerCtrl select{
    width: 70px;
    height: 30px;
  }
  .btnCtrl button,.boxCtrl button{
    width: 80px;
    height: 35px;
    font-size: 16px;
    text-align: center;
  }
  .btnCtrl button{
    display: block;
    font-size: 20px;
    margin-bottom: 5px;
  }
  button:hover{
    background-color: #333;
    color:#eeeeee;
  }
  .btnCtrl{
    max-width: 540px;
    margin: 15px auto;
  }
  .btnBox{
    max-width: 80px;
    display: inline-block;
    margin-right: 10px;
  }
  .boxCtrl{
    max-width:560px ;
    margin: 10px auto;
    position: relative;
  }
  .layerCtrl{
    position: absolute;
    width: 480px;
    height: 35px;
    background-color: #fff;
    box-shadow: 0 1px 6px 0 rgba(32,33,36,.28);
    transition: all .3s;
  }
  .layerCtrl button{
    width: 150px;
  }
  .isShow{
    display: none;
  }
</style>
