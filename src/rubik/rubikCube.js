//import Drag from './drag.js'

function RubikX(obj,layer) {


  const blocks=[8,26,56,98,160,218,296,386,488];
  this.obj=obj;
  this.layer=layer;
  this.border='2px solid #b0b0b0';
  if(Math.floor(layer)===5){
    this.bigWH=50*layer+'px';
    this.width='46px';
    this.height='46px';
    this.offsetWh='50px';
    this.values=this.valuesArr[5];
  }else{
    this.bigWH=60*layer+'px';
    this.width='56px';
    this.height='56px';
    this.offsetWh='60px';
    this.values=this.valuesArr[2];
  }
  // this.themeCol='#b0b0b0';
  this.themeCol='rgba(255,255,255,.1)';
  this.dataX=this.dataXArr[layer];
  this.blocks=blocks[layer-2];
  this.colValues=this.colValuesArr[layer];
  //-
  this.boxCanDo=true;
  this.boxCanCount=0;
  this.maxBCC=this.blocks;
  this.canDo=true;
  this.canCount=0;
  this.maxCC=0;

  //
  const key=[
      this.second,this.third,this.fourth,this.fifth,
      this.sixth,this.seventh,this.eighth,this.ninth,this.tenth
  ]
  RubikX.prototype.layerWay=key[layer-2];
  this.methods=this.methodsArr[layer];
  this.draw();
}
RubikX.prototype.valuesArr={
  2:{
    a:{
      // rgba(255,255,255,.2)  #fff
      color:'rgba(255,255,255,.92)',tx:0,ty:0,tz:30,
      rx:0,ry:0
    },
    b:{
      // rgba(255,39,55,.2)  #ff2737
      color:'rgba(255,39,55,.92)',tx:0,ty:30,tz:0,
      rx:-90,ry:0
    },
    c:{
      //rgba(255,255,0,.2)  yellow
      color:'rgba(255,255,0,.92)',tx:0,ty:0,tz:-30,
      rx:-180,ry:0
    },
    d:{
      //rgba(255,161,9,.2) #ffa109
      color:'rgba(255,161,9,.92)',tx:0,ty:-30,tz:0,
      rx:90,ry:0
    },
    e:{
      //rgba(73,218,118,.2)   color:'#49da76'
      color:'rgba(73,218,118,.92)',tx:-30,ty:0,tz:0,
      ry:-90,rx:0
    },
    f:{
      //rgba(73,89,194,.2)    color:'#4959c2'
      color:'rgba(73,89,194,.92)',tx:30,ty:0,tz:0,
      ry:90,rx:0
    }
  },
  5:{
    a:{
      // rgba(255,255,255,.2)  #fff
      color:'rgba(255,255,255,.92)',tx:0,ty:0,tz:25,
      rx:0,ry:0
    },
    b:{
      // rgba(255,39,55,.2)  #ff2737
      color:'rgba(255,39,55,.92)',tx:0,ty:25,tz:0,
      rx:-90,ry:0
    },
    c:{
      //rgba(255,255,0,.2)  yellow
      color:'rgba(255,255,0,.92)',tx:0,ty:0,tz:-25,
      rx:-180,ry:0
    },
    d:{
      //rgba(255,161,9,.2) #ffa109
      color:'rgba(255,161,9,.92)',tx:0,ty:-25,tz:0,
      rx:90,ry:0
    },
    e:{
      //rgba(73,218,118,.2)   color:'#49da76'
      color:'rgba(73,218,118,.92)',tx:-25,ty:0,tz:0,
      ry:-90,rx:0
    },
    f:{
      //rgba(73,89,194,.2)    color:'#4959c2'
      color:'rgba(73,89,194,.92)',tx:25,ty:0,tz:0,
      ry:90,rx:0
    }
  }
}
RubikX.prototype.colValuesArr={
  2:{
    a:[0,1,2,3],
    b:[2,3,6,7],
    c:[4,5,6,7],
    d:[0,1,4,5],
    e:[4,0,6,2],
    f:[1,5,3,7]
  },
  3:{
    a:[0,1,2,3,4,5,6,7,8],
    b:[6,7,8,14,15,16,23,24,25],
    c:[23,24,25,20,21,22,17,18,19],
    d:[17,18,19,9,10,11,0,1,2],
    e:[17,9,0,20,12,3,23,14,6],
    f:[2,11,19,5,13,22,8,16,25],
  },
  4:{
    a:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
    b:[12,13,14,15,24,25,26,27,36,37,38,39,52,53,54,55],
    c:[52,53,54,55,48,49,50,51,44,45,46,47,40,41,42,43],
    d:[40,41,42,43,28,29,30,31,16,17,18,19,0,1,2,3],
    e:[40,28,16,0,44,32,20,4,48,32,20,4,48,34,22,8,52,36,24,12],
    f:[3,19,31,43,7,21,33,47,11,23,35,51,15,27,39,55],
  },
  5:{
    a:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],
    b:[
        20,21,22,23,24,36,37,38,39,40,52,53,54,55,56,
        68,69,70,71,72,73,93,94,95,96,97],
    c:[
        93,94,95,96,97,88,89,90,91,92,83,84,85,86,87,78,79,80,81,82,
        73,74,75,76,77
    ],
    d:[
        0,1,2,3,4,25,26,27,28,29,41,42,43,44,45,57,58,59,60,61,
        73,74,75,76,77
    ],
    e:[
        0,5,10,15,20,25,30,32,34,36,41,46,48,50,52,57,62,64,66,68,
        73,78,83,88,93
    ],
    f:[
        4,9,14,19,24,29,31,33,35,40,45,47,49,51,56,61,63,65,67,72,
        77,82,87,92,97
    ],
  },
  6:{
    a:[],
    b:[],
    c:[],
    d:[],
    e:[],
    f:[],
  },
  7:{
    a:[],
    b:[],
    c:[],
    d:[],
    e:[],
    f:[],
  },
  8:{
    a:[],
    b:[],
    c:[],
    d:[],
    e:[],
    f:[],
  }
}
RubikX.prototype.dataXArr= {
  2: [
    [0, 0, 30], [60, 0, 30],
    [0, 60, 30], [60, 60, 30],

    [0, 0, -30], [60, 0, -30],
    [0, 60, -30], [60, 60, -30],
  ],
  3: [
    [0, 0, 60], [60, 0, 60], [120, 0, 60],
    [0, 60, 60], [60, 60, 60], [120, 60, 60],
    [0, 120, 60], [60, 120, 60], [120, 120, 60],

    [0, 0, 0],   [60, 0, 0],   [120, 0, 0],
    [0, 60, 0],              [120, 60, 0],
    [0, 120, 0], [60, 120, 0], [120, 120, 0],

    [0, 0, -60], [60, 0, -60], [120, 0, -60],
    [0, 60, -60], [60, 60, -60], [120, 60, -60],
    [0, 120, -60], [60, 120, -60], [120, 120, -60],
  ],
  4: [
    [0, 0, 90], [60, 0, 90],[120,0,90],[180,0,90],
    [0, 60, 90], [60, 60, 90],[120,60,90],[180,60,90],
    [0, 120, 90], [60, 120, 90],[120,120,90],[180,120,90],
    [0, 180, 90], [60, 180, 90],[120,180,90],[180,180,90],


    [0, 0, 30], [60, 0, 30],[120,0,30],[180,0,30],
    [0, 60, 30],                        [180,60,30],
    [0, 120, 30],                        [180,120,30],
    [0, 180, 30], [60, 180, 30],[120,180,30],[180,180,30],


    [0, 0,-30], [60, 0, -30],[120,0,-30],[180,0,-30],
    [0, 60, -30],                        [180,60,-30],
    [0, 120, -30],                        [180,120,-30],
    [0, 180, -30], [60, 180, -30],[120,180,-30],[180,180,-30],

    [0, 0, -90], [60, 0, -90],[120,0,-90],[180,0,-90],
    [0, 60, -90], [60, 60, -90],[120,60,-90],[180,60,-90],
    [0, 120, -90], [60, 120, -90],[120,120,-90],[180,120,-90],
    [0, 180, -90], [60, 180, -90],[120,180,-90],[180,180,-90],
  ],
  5: [
    [0, 0, 100],    [50,0, 100],        [100,0,100],      [150,0,100],      [200,0,100],
    [0, 50, 100],   [50, 50, 100],      [100, 50, 100],   [150, 50, 100],   [200,50,100],
    [0, 100, 100],  [50, 100, 100],     [100, 100, 100],  [150, 100, 100],  [200,100,100],
    [0, 150, 100],  [50, 150, 100],     [100, 150, 100],  [150, 150, 100],  [200,150,100],
    [0, 200, 100],  [50, 200, 100],     [100, 200, 100],  [150, 200, 100],  [200,200,100],


    [0, 0, 50],    [50,0, 50],        [100,0,50],      [150,0,50],      [200,0,50],
    [0, 50, 50],                                                       [200,50,50],
    [0, 100, 50],                                                        [200,100,50],
    [0, 150, 50],                                                       [200,150,50],
    [0, 200, 50],  [50, 200, 50],     [100, 200, 50],  [150, 200, 50],  [200,200,50],


    [0, 0, 0],    [50,0, 0],        [100,0,0],      [150,0,0],      [200,0,0],
    [0, 50, 0],                                                        [200,50,0],
    [0, 100, 0],                                                      [200,100,0],
    [0, 150, 0],                                                       [200,150,0],
    [0, 200, 0],  [50, 200, 0],     [100, 200, 0],  [150, 200, 0],  [200,200,0],


    [0, 0, -50],    [50,0, -50],        [100,0,-50],      [150,0,-50],      [200,0,-50],
    [0, 50, -50],                                                          [200,50,-50],
    [0, 100, -50],                                                           [200,100,-50],
    [0, 150, -50],                                                          [200,150,-50],
    [0, 200, -50],  [50, 200, -50],     [100, 200, -50],  [150, 200, -50],  [200,200,-50],



    [0, 0, -100],    [50,0, -100],        [100,0,-100],      [150,0,-100],      [200,0,-100],
    [0, 50, -100],   [50, 50, -100],      [100, 50, -100],   [150, 50, -100],   [200,50,-100],
    [0, 100, -100],  [50, 100, -100],     [100, 100, -100],  [150, 100,-100],  [200,100,-100],
    [0, 150, -100],  [50, 150, -100],     [100, 150, -100],  [150, 150, -100],  [200,150,-100],
    [0, 200, -100],  [50, 200, -100],     [100, 200, -100],  [150, 200, -100],  [200,200,-100],
  ],
  6: [], 7: [], 8: [], 9: [], 10: []
};
RubikX.prototype.methodsArr={
  2:{
    top:{
      1:[[0,2,6,4],'top'],
      2:[[1,3,7,5],'top'],
    },
    bottom:{
      1:[[0,4,6,2],'bottom'],
      2:[[1,5,7,3],'bottom'],
    },
    left:{
      1:[[1,5,4,0],'left'],
      2:[[3,7,6,2],'left'],
    },
    right:{
      1:[[1,0,4,5],'right'],
      2:[[3,2,6,7],'right'],
    },
    zTop:{
      1:[[1,3,2,0],'zTop'],
      2:[[5,7,6,4],'zTop'],
    },
    zBottom:{
      1:[[1,0,2,3],'zBottom'],
      2:[[5,4,6,7],'zBottom'],
    },
  },
  3:{
    top:{
      1:[[0,3,6,14,23,20,17,9,12],'top'],
      2:[[1,4,7,15,24,21,18,10],'top'],
      3:[[2,5,8,16,25,22,19,11,13],'top'],
    },
    bottom:{
      1:[[0,9,17,20,23,14,6,3,12],'bottom'],
      2:[[1,10,18,21,24,15,7,4],'bottom'],
      3:[[2,11,19,22,25,16,8,5,13],'bottom'],
    },
    left:{
      1:[[2,11,19,18,17,9,0,1,10],'left'],
      2:[[5,13,22,21,20,12,3,4],'left'],
      3:[[8,16,25,24,23,14,6,7,15],'left'],
    },
    right:{
      1:[[2,1,0,9,17,18,19,11,10],'right'],
      2:[[5,4,3,12,20,21,22,13],'right'],
      3:[[8,7,6,14,23,24,25,16,15],'right'],
    },
    zTop:{
      1:[[2,5,8,7,6,3,0,1,4],'zTop'],
      2:[[11,13,16,15,14,12,9,10],'zTop'],
      3:[[19,22,25,24,23,20,17,18,21],'zTop'],
    },
    zBottom:{
      1:[[2,1,0,3,6,7,8,5,4],'zBottom'],
      2:[[11,10,9,12,14,15,16,13],'zBottom'],
      3:[[19,18,17,20,23,24,25,22,21],'zBottom'],
    },
  },
  4:{
    top:{
      1:[[0,4,8,12,  24,36,52,48, 44,40,28,16, 20,22,34,32],'top'],
      2:[[1,5,9,13,  25,37,53,49, 45,41,29,17],'top'],
      3:[[2,6,10,14, 26,38,54,50, 46,42,30,18],'top'],
      4:[[3,7,11,15, 27,39,55,51, 47,43,31,19, 21,23,35,33],'top']
    },
    bottom:{
      1:[[0,16,28,40, 44,48,52,36, 24,12,8,4, 20,32,34,22],'bottom'],
      2:[[1,17,29,41, 45,49,53,37, 25,13,9,5],'bottom'],
      3:[[2,18,30,42, 46,50,54,38, 26,14,10,6],'bottom'],
      4:[[3,19,31,43, 47,51,55,39, 27,15,11,7, 21,33,35,23],'bottom']
    },
    left:{
      1:[[3,19,31,43, 42,41,40,28, 16,0,1,2, 18,30,29,17],'left'],
      2:[[7,21,33,47, 46,45,44,32, 20,4,5,6],'left'],
      3:[[11,23,35,51, 50,49,48,34, 22,8,9,10],'left'],
      4:[[15,27,39,55, 54,53,52,36, 24,12,13,14, 26,38,37,25],'left']

    },
    right:{
      1:[[3,2,1,0,  16,28,40,41,  42,43,31,19, 18,17,29,30],'right'],
      2:[[7,6,5,4, 20,32,44,45, 46,47,33,21],'right'],
      3:[[11,10,9,8, 22,34,48,49, 50,51,35,23],'right'],
      4:[[15,14,13,12, 24,36,52,53, 54,55,39,27, 26,25,37,38],'right']

    },
    zTop:{
      1:[[3,7,11,15, 14,13,12,8,  4,0,1,2,  6,10,9,5],'zTop'],
      2:[[19,21,23,27, 26,25,24,22,  20,16,17,18],'zTop'],
      3:[[31,33,35,39,  38,37,36,34,  32,28,29,30],'zTop'],
      4:[[43,47,51,55, 54,53,52,48,  44,40,41,42, 46,50,49,45],'zTop']

    },
    zBottom:{
      1:[[3,2,1,0,   4,8,12,13,  14,15,11,7,  6,5,9,10],'zBottom'],
      2:[[19,18,17,16,  20,22,24,25,  26,27,23,21],'zBottom'],
      3:[[31,30,29,28,  32,34,36,37,  38,39,35,33],'zBottom'],
      4:[[43,42,41,40,  44,48,52,53,  54,55,51,47,  46,45,49,50],'zBottom']
    },
  },
  5:{
    top:{
      1:[[
          0,5,10,15,20,
          36,52,68,93,88,
          83,78,73,57,41,25,
          30,32,34,50,66,64,62,46,48
      ],'top'],
      2:[[
          1,6,11,16,21,
          37,53,69,94,
          89,84,79,74,
          58,42,26
      ],'top'],
      3:[[
          2,7,12,17,22,
          38,54,70,95,
          90,85,80,75,
          59,43,27
      ],'top'],
      4:[[
          3,8,13,18,23,
          39,55,71,96,
          91,86,81,76,
          60,44,28
      ],'top'],
      5:[[
          4,9,14,19,24,
          40,56,72,97,
          92,87,82,77,
          61,45,29,
          31,33,35,51,67,65,63,47,49
      ],'top']
    },
    bottom:{
      1:[[
          0,25,41,57,73,
          78,83,88,93,
          68,52,36,20,
          15,10,5,
          30,46,62,64,66,50,34,32,48
      ],'bottom'],
      2:[[
          1,26,42,58,74,
          79,84,89,94,
          69,53,37,21,16,11,6
      ],'bottom'],
      3:[[
          2,27,43,59,75,
          80,85,90,95,
          70,54,38,22,17,12,7
      ],'bottom'],
      4:[[
          3,28,44,60,76,
          81,86,91,96,
          71,55,39,23,18,13,8
      ],'bottom'],
      5:[[
          4,29,45,61,77,
          82,87,92,97,72,56,40,24,19,14,9,
          31,47,63,65,67,51,35,33,49
      ],'bottom']
    },
    left:{
      1:[[
        4,29,45,61,77,
        76,75,74,73,57,41,25,0,1,2,3,
        28,44,60,59,58,42,26,27,43
      ],'left'],
      2:[[
          9,31,47,63,82,
          81,80,79,78,
          62,46,30,5,6,7,8
      ],'left'],
      3:[[
          14,33,49,65,87,
          86,85,84,83,
          64,48,32,10,11,12,13
      ],'left'],
      4:[[
          19,35,51,67,92,
          91,90,89,88,
          66,50,34,15,16,17,18
      ],'left'],
      5:[[
          24,40,56,72,97,96,95,94,93,
          68,52,36,20,21,22,23,
          39,55,71,70,69,53,37,38,54
      ],'left']

    },
    right:{
      1:[[
          4,3,2,1,0,
          25,41,57,73,74,75,76,77,
          61,45,29,
          28,27,26,42,58,59,60,44,43
      ],'right'],
      2:[[
          9,8,7,6,5,30,46,62,78,
          79,80,81,82,
          63,47,31
      ],'right'],
      3:[[
          14,13,12,11,10,32,48,64,83,
          84,85,86,87,
          65,49,33
      ],'right'],
      4:[[
          19,18,17,16,15,34,50,66,88,
          89,90,91,92,
          67,51,35
      ],'right'],
      5:[[
          24,23,22,21,20,36,52,68,
          93,94,95,96,97,
          72,56,40,39,38,37,53,69,70,71,55,54
      ],'right']

    },
    zTop:{
      1:[[
          4,9,14,19,24,
          23,22,21,20,15,10,5,0,1,2,3,
          8,13,18,17,16,11,6,7,12
      ],'zTop'],
      2:[[
          29,31,33,35,40,
          39,38,37,36,
          34,32,30,25,
          26,27,28
      ],'zTop'],
      3:[[
          45,47,49,51,56,
          55,54,53,52,
          50,48,46,41,
          42,43,44
      ],'zTop'],
      4:[[
          61,63,65,67,72,
          71,70,69,68,
          66,64,62,57,
          58,59,60
      ],'zTop'],
      5:[[
          77,82,87,92,97,
          96,95,94,93,88,83,78,73,74,75,76,
          81,86,91,90,89,84,79,80,85
      ],'zTop']

    },
    zBottom:{
      1:[[
        4,3,2,1,0,
        5,10,15,20,21,
        22, 23,24,19,14,
        9,8,7,6,11,
        16,17,18,13,12
      ],'zBottom'],
      2:[[
          29,28,27,26,25,
          30,32,34,36,37,
          38,39,40,35,33,31
      ],'zBottom'],
      3:[[
          45,44,43,42,41,
          46,48,50,52,53,
          54,55,56,51,49,47
      ],'zBottom'],
      4:[[
          61,60,59,58,57,
          62,64,66,68,69,
          70,71,72,67,65,63
      ],'zBottom'],
      5:[[
        77,76,75,74,73,
        78,83,88,93,94,
        95,96,97,92,87,
        82,81,80,79,84,
        89,90,91,86,85
      ],'zBottom']
    },
  }
}
RubikX.prototype.draw=function () {
  this.biaoGe=this.biaoGeArr[this.layer]
  this.tyrMouse=-1;
  this.toLeftMouse=true;
  this.toTopMouse=true;
  //旋转处理
  this.top=[
    [90,0,0,16],
    [90,0,0,17],
    [90,0,0,18],
    [90,0,0,19],
    [0,0,90,5],
    [0,0,90,6],
    [0,0,90,7],
    [0,0,90,4],

    [90,0,0,22],
    [90,0,0,23],
    [90,0,0,20],
    [90,0,0,21],
    [90,0,0,15],
    [90,0,0,12],
    [90,0,0,13],
    [90,0,0,14],

    [90,0,0,10],
    [90,0,0,11],
    [90,0,0,8],
    [90,0,0,9],
    [90,0,0,0],
    [90,0,0,1],
    [90,0,0,2],
    [90,0,0,3],
  ];
  this.bottom=[
    [-90,0,0,20],
    [-90,0,0,21],
    [-90,0,0,22],
    [-90,0,0,23],
    [0,0,-90,7],
    [0,0,-90,4],
    [0,0,-90,5],
    [0,0,-90,6],

    [-90,0,0,18],
    [-90,0,0,19],
    [-90,0,0,16],
    [-90,0,0,17],
    [-90,0,0,13],
    [-90,0,0,14],
    [-90,0,0,15],
    [-90,0,0,12],

    [-90,0,0,0],
    [-90,0,0,1],
    [-90,0,0,2],
    [-90,0,0,3],
    [-90,0,0,10],
    [-90,0,0,11],
    [-90,0,0,8],
    [-90,0,0,9]
  ];
  this.left=[
    [0,-90,0,12],
    [0,-90,0,13],
    [0,-90,0,14],
    [0,-90,0,15],
    [0,-90,0,0],
    [0,-90,0,1],
    [0,-90,0,2],
    [0,-90,0,3],

    [0,-90,0,4],
    [0,-90,0,5],
    [0,-90,0,6],
    [0,-90,0,7],
    [0,-90,0,8],
    [0,-90,0,9],
    [0,-90,0,10],
    [0,-90,0,11],

    [0,0,90,17],
    [0,0,90,18],
    [0,0,90,19],
    [0,0,90,16],
    [0,0,-90,23],
    [0,0,-90,20],
    [0,0,-90,21],
    [0,0,-90,22],
  ];
  this.right=[
    [0,90,0,4],
    [0,90,0,5],
    [0,90,0,6],
    [0,90,0,7],
    [0,90,0,8],
    [0,90,0,9],
    [0,90,0,10],
    [0,90,0,11],

    [0,90,0,12],
    [0,90,0,13],
    [0,90,0,14],
    [0,90,0,15],
    [0,90,0,0],
    [0,90,0,1],
    [0,90,0,2],
    [0,90,0,3],

    [0,0,-90,19],
    [0,0,-90,16],
    [0,0,-90,17],
    [0,0,-90,18],
    [0,0,90,21],
    [0,0,90,22],
    [0,0,90,23],
    [0,0,90,20]
  ];
  this.zTop=[
    [0,0,0,3],
    [0,0,0,0],
    [0,0,0,1],
    [0,0,0,2],
    [0,0,0,19],
    [0,0,0,16],
    [0,0,0,17],
    [0,0,0,18],

    [0,0,0,9],
    [0,0,0,10],
    [0,0,0,11],
    [0,0,0,8],
    [0,0,0,23],
    [0,0,0,20],
    [0,0,0,21],
    [0,0,0,22],

    [0,0,0,15],
    [0,0,0,12],
    [0,0,0,13],
    [0,0,0,14],
    [0,0,0,7],
    [0,0,0,4],
    [0,0,0,5],
    [0,0,0,6]
  ];
  this.zBottom=[
    [0,0,0,1],
    [0,0,0,2],
    [0,0,0,3],
    [0,0,0,0],
    [0,0,0,21],
    [0,0,0,22],
    [0,0,0,23],
    [0,0,0,20],

    [0,0,0,11],
    [0,0,0,8],
    [0,0,0,9],
    [0,0,0,10],
    [0,0,0,17],
    [0,0,0,18],
    [0,0,0,19],
    [0,0,0,16],

    [0,0,0,5],
    [0,0,0,6],
    [0,0,0,7],
    [0,0,0,4],
    [0,0,0,13],
    [0,0,0,14],
    [0,0,0,15],
    [0,0,0,12]
  ];


  this.xzqk=[];
  this.timeO=[];
  this.allXYZ=[];//记录每个方块当前位置
  this.allAway=[];//记录每个方块当前所在位置序号
  this.away=[
    [0,0,0], [0,0,90], [0,0,180], [0,0,270],
    [0,90,0], [0,90,90],[0,90,180],[0,90,270],
    [0,180,0], [0,180,90], [0,180,180], [0,180,270],
    [0,270,0], [0,270,90], [0,270,180], [0,270,270],
    [90,0,0],[90,0,90],[90,0,180],[90,0,270],
    [270,0,0], [270,0,90], [270,0,180], [270,0,270],
  ];//所在方向应有的旋转角度

  //视图绘制
  let TOS=this.obj.style;//视觉窗口
  TOS.width=TOS.height=this.bigWH;
  TOS.perspective='800px';
  TOS.position='relative';
  //
  TOS.margin='80px auto 180px';
  let rubik=this.creBlock();//整体转动
  rubik.className='bigMove'
  //
  for(let i=0;i<this.blocks;i++){
    this.allAway.push(i);
    this.timeO.push({});
    this.allXYZ.push({x:0,y:0,z:0});
    this.xzqk.push(0)

    //---
    let zBox=this.creBlock();//z轴处理块

    zBox.className='zBox';
    let block=this.creBlock();//xy轴转动块
    block.className='xyBox';
    let color=this.creCol(i);//色块
    for(let y in this.values){
      let spans=this.setCol(y,i);//贴图


     // spans.innerHTML=i;


      color.appendChild(spans);
    }
    block.appendChild(color);
    zBox.appendChild(block);
    rubik.appendChild(zBox);
  }

  /*
  *
  * */
  this.drawMouseData=this.drawMouseDataArr[this.layer]
  for(let y=0;y<3*this.layer*this.layer;y++){
    let drawM=this.drawMouse(y)
    rubik.appendChild(drawM)
  }



  this.obj.appendChild(rubik);
}
RubikX.prototype.drawMouseDataArr={
  2:[
    [0,0,61,0,0],
    [60,0,61,0,0],


    [0,60,61,0,0],
    [60,60,61,0,0],


    [0,-31,30,90,0],
    [60,-31,30,90,0],

    [0,-31,-30,90,0],
    [60,-31,-30,90,0],

    [91,0,30,0,90],
    [91,0,-30,0,90],

    [91,60,30,0,90],
    [91,60,-30,0,90]
  ],
  3:[
    [0,0,91,0,0],
    [60,0,91,0,0],
    [120,0,91,0,0],

    [0,60,91,0,0],
    [60,60,91,0,0],
    [120,60,91,0,0],

    [0,120,91,0,0],
    [60,120,91,0,0],
    [120,120,91,0,0],

    [151,0,60,0,90],
    [151,0,0,0,90],
    [151,0,-60,0,90],

    [151,60,60,0,90],
    [151,60,0,0,90],
    [151,60,-60,0,90],

    [151,120,60,0,90],
    [151,120,0,0,90],
    [151,120,-60,0,90],

      //zzz
    [0,-30,60,90,0],
    [60,-30,60,90,0],
    [120,-30,60,90,0],

    [0,-30,0,90,0],
    [60,-30,0,90,0],
    [120,-30,0,90,0],

    [0,-30,-60,90,0],
    [60,-30,-60,90,0],
    [120,-30,-60,90,0]
  ],
  4:[
    [0,0,121,0,0],
    [60,0,121,0,0],
    [120,0,121,0,0],
    [180,0,121,0,0],

    [0,60,121,0,0],
    [60,60,121,0,0],
    [120,60,121,0,0],
    [180,60,121,0,0],

    [0,120,121,0,0],
    [60,120,121,0,0],
    [120,120,121,0,0],
    [180,120,121,0,0],

    [0,180,121,0,0],
    [60,180,121,0,0],
    [120,180,121,0,0],
    [180,180,121,0,0],

      //y
    [0,-30,90,90,0],
    [60,-30,90,90,0],
    [120,-30,90,90,0],
    [180,-30,90,90,0],

    [0,-30,30,90,0],
    [60,-30,30,90,0],
    [120,-30,30,90,0],
    [180,-30,30,90,0],

    [0,-30,-30,90,0],
    [60,-30,-30,90,0],
    [120,-30,-30,90,0],
    [180,-30,-30,90,0],

    [0,-30,-90,90,0],
    [60,-30,-90,90,0],
    [120,-30,-90,90,0],
    [180,-30,-90,90,0],

      //z
    [211,0,90,0,90],
    [211,0,30,0,90],
    [211,0,-30,0,90],
    [211,0,-90,0,90],

    [211,60,90,0,90],
    [211,60,30,0,90],
    [211,60,-30,0,90],
    [211,60,-90,0,90],

    [211,120,90,0,90],
    [211,120,30,0,90],
    [211,120,-30,0,90],
    [211,120,-90,0,90],

    [211,180,90,0,90],
    [211,180,30,0,90],
    [211,180,-30,0,90],
    [211,180,-90,0,90],
  ],
  5:[
      //0
    [0,0,126,0,120],
    [50,0,126,0,0],
    [100,0,126,0,0],
    [150,0,126,0,0],
    [200,0,126,0,0],

      //1
    [0,50,126,0,0],
    [50,50,126,0,0],
    [100,50,126,0,0],
    [150,50,126,0,0],
    [200,50,126,0,0],

    //2
    [0,100,126,0,0],
    [50,100,126,0,0],
    [100,100,126,0,0],
    [150,100,126,0,0],
    [200,100,126,0,0],

    //3
    [0,150,126,0,0],
    [50,150,126,0,0],
    [100,150,126,0,0],
    [150,150,126,0,0],
    [200,150,126,0,0],
      //4
    [0,200,126,0,0],
    [50,200,126,0,0],
    [100,200,126,0,0],
    [150,200,126,0,0],
    [200,200,126,0,0],


      //xxxx

      //yyyyyyyy
    [0,-26,100,90,0],
    [50,-26,100,90,0],
    [100,-26,100,90,0],
    [150,-26,100,90,0],
    [200,-26,100,90,0],

    [0,-26,50,90,0],
    [50,-26,50,90,0],
    [100,-26,50,90,0],
    [150,-26,50,90,0],
    [200,-26,50,90,0],

    [0,-26,0,90,0],
    [50,-26,0,90,0],
    [100,-26,0,90,0],
    [150,-26,0,90,0],
    [200,-26,0,90,0],

    [0,-26,-50,90,0],
    [50,-26,-50,90,0],
    [100,-26,-50,90,0],
    [150,-26,-50,90,0],
    [200,-26,-50,90,0],

    [0,-26,-100,90,0],
    [50,-26,-100,90,0],
    [100,-26,-100,90,0],
    [150,-26,-100,90,0],
    [200,-26,-100,90,0],


      //zzzz
    [226,0,100,0,90],
    [226,0,50,0,90],
    [226,0,0,0,90],
    [226,0,-50,0,90],
    [226,0,-100,0,90],

    [226,50,100,0,90],
    [226,50,50,0,90],
    [226,50,0,0,90],
    [226,50,-50,0,90],
    [226,50,-100,0,90],

    [226,100,100,0,90],
    [226,100,50,0,90],
    [226,100,0,0,90],
    [226,100,-50,0,90],
    [226,100,-100,0,90],
//3
    [226,150,100,0,90],
    [226,150,50,0,90],
    [226,150,0,0,90],
    [226,150,-50,0,90],
    [226,150,-100,0,90],

    [226,200,100,0,90],
    [226,200,50,0,90],
    [226,200,0,0,90],
    [226,200,-50,0,90],
    [226,200,-100,0,90],


  ]
}
RubikX.prototype.drawMouse=function(y){
  let a=document.createElement('div');
  let as=a.style;
 // a.innerHTML=y;
  a.i=y;
  as.width=this.offsetWh;
  as.height=this.offsetWh;
  as.position='absolute';
 // as.backgroundColor='rgba(255,255,255,0)';
  // as.backgroundColor='red';
  as.transform=`
  translateX(${this.drawMouseData[y][0]}px)
  translateY(${this.drawMouseData[y][1]}px)
  translateZ(${this.drawMouseData[y][2]}px)
  rotateX(${this.drawMouseData[y][3]}deg) 
  rotateY(${this.drawMouseData[y][4]}deg)`;

  let vm=this;
  a.onmousedown=function (ev) {

    vm.toLeftMouse=true;
    vm.toTopMouse=true;
    vm.drag(ev,this.i)
  }
  return a
}

RubikX.prototype.drag=function(ev,index){
  let vm=this
  this.startX=ev.clientX
  this.startY=ev.clientY
  document.onmousemove=function (ev) {
    if(Math.abs(ev.clientX - vm.startX)>10){
      if(vm.toLeftMouse){
        vm.toTopMouse=false;
      }
    }
    if(Math.abs(ev.clientY - vm.startY)>10){
      if(vm.toTopMouse){
        vm.toLeftMouse=false;
      }
    }
  }
  document.onmouseup=function (ev) {
    let oEvent=ev||event;
    if(vm.toLeftMouse){
      oEvent.clientX > vm.startX?vm.tyrMouse=0:vm.tyrMouse=1;
   //   console.log(vm.tyrMouse);
      //1 往右了
    }else if(vm.toTopMouse){
      oEvent.clientY > vm.startY?vm.tyrMouse=2:vm.tyrMouse=3;
    //  console.log(vm.tyrMouse);
      //3 往下了
    }
   // console.log('x'+oEvent.clientX ,'sx'+vm.startX);
  //  console.log('y'+oEvent.clientY ,'sy'+vm.startY);
    //  console.log(vm.toLeftMouse,vm.toTopMouse);
    document.onmousemove=null;
    document.onmouseup=null;
    vm.mouseMove(index,vm.tyrMouse)
  }
}

//-------------------------------------------------------------------------------------
RubikX.prototype.biaoGeArr={
  2:{
    // 右 左 下 上

    0:[[1,'right'],[1,'left'],[1,'bottom'],[1,'top']],
    1:[[1,'right'],[1,'left'],[2,'bottom'],[2,'top']],
    2:[[2,'right'],[2,'left'],[1,'bottom'],[1,'top']],
    3:[[2,'right'],[2,'left'],[2,'bottom'],[2,'top']],

    4:[[1,'zBottom'],[1,'zTop'],[1,'bottom'],[1,'top']],
    5:[[1,'zBottom'],[1,'zTop'],[2,'bottom'],[2,'top']],
    6:[[2,'zBottom'],[2,'zTop'],[1,'bottom'],[1,'top']],
    7:[[2,'zBottom'],[2,'zTop'],[2,'bottom'],[2,'top']],

    8:[[1,'right'],[1,'left'],[1,'zBottom'],[1,'zTop']],
    9:[[1,'right'],[1,'left'],[2,'zBottom'],[2,'zTop']],
    10:[[2,'right'],[2,'left'],[1,'zBottom'],[1,'zTop']],
    11:[[2,'right'],[2,'left'],[2,'zBottom'],[2,'zTop']],
  },
  3:{
    0:[[1,'right'],[1,'left'],[1,'bottom'],[1,'top']],
    1:[[1,'right'],[1,'left'],[2,'bottom'],[2,'top']],
    2:[[1,'right'],[1,'left'],[3,'bottom'],[3,'top']],

    3:[[2,'right'],[2,'left'],[1,'bottom'],[1,'top']],
    4:[[2,'right'],[2,'left'],[2,'bottom'],[2,'top']],
    5:[[2,'right'],[2,'left'],[3,'bottom'],[3,'top']],

    6:[[3,'right'],[3,'left'],[1,'bottom'],[1,'top']],
    7:[[3,'right'],[3,'left'],[2,'bottom'],[2,'top']],
    8:[[3,'right'],[3,'left'],[3,'bottom'],[3,'top']],

    9:[[1,'right'],[1,'left'],[1,'zBottom'],[1,'zTop']],
    10:[[1,'right'],[1,'left'],[2,'zBottom'],[2,'zTop']],
    11:[[1,'right'],[1,'left'],[3,'zBottom'],[3,'zTop']],

    12:[[2,'right'],[2,'left'],[1,'zBottom'],[1,'zTop']],
    13:[[2,'right'],[2,'left'],[2,'zBottom'],[2,'zTop']],
    14:[[2,'right'],[2,'left'],[3,'zBottom'],[3,'zTop']],
    15:[[3,'right'],[3,'left'],[1,'zBottom'],[1,'zTop']],
    16:[[3,'right'],[3,'left'],[2,'zBottom'],[2,'zTop']],
    17:[[3,'right'],[3,'left'],[3,'zBottom'],[3,'zTop']],

    18:[[1,'zBottom'],[1,'zTop'],[1,'bottom'],[1,'top']],
    19:[[1,'zBottom'],[1,'zTop'],[2,'bottom'],[2,'top']],
    20:[[1,'zBottom'],[1,'zTop'],[3,'bottom'],[3,'top']],

    21:[[2,'zBottom'],[2,'zTop'],[1,'bottom'],[1,'top']],
    22:[[2,'zBottom'],[2,'zTop'],[2,'bottom'],[2,'top']],
    23:[[2,'zBottom'],[2,'zTop'],[3,'bottom'],[3,'top']],

    24:[[3,'zBottom'],[3,'zTop'],[1,'bottom'],[1,'top']],
    25:[[3,'zBottom'],[3,'zTop'],[2,'bottom'],[2,'top']],
    26:[[3,'zBottom'],[3,'zTop'],[3,'bottom'],[3,'top']],
  },
  4:{
    0:[[1,'right'],[1,'left'],[1,'bottom'],[1,'top']],
    1:[[1,'right'],[1,'left'],[2,'bottom'],[2,'top']],
    2:[[1,'right'],[1,'left'],[3,'bottom'],[3,'top']],
    3:[[1,'right'],[1,'left'],[4,'bottom'],[4,'top']],

    4:[[2,'right'],[2,'left'],[1,'bottom'],[1,'top']],
    5:[[2,'right'],[2,'left'],[2,'bottom'],[2,'top']],
    6:[[2,'right'],[2,'left'],[3,'bottom'],[3,'top']],
    7:[[2,'right'],[2,'left'],[4,'bottom'],[4,'top']],

    8:[[3,'right'],[3,'left'],[1,'bottom'],[1,'top']],
    9:[[3,'right'],[3,'left'],[2,'bottom'],[2,'top']],
    10:[[3,'right'],[3,'left'],[3,'bottom'],[3,'top']],
    11:[[3,'right'],[3,'left'],[4,'bottom'],[4,'top']],

    12:[[4,'right'],[4,'left'],[1,'bottom'],[1,'top']],
    13:[[4,'right'],[4,'left'],[2,'bottom'],[2,'top']],
    14:[[4,'right'],[4,'left'],[3,'bottom'],[3,'top']],
    15:[[4,'right'],[4,'left'],[4,'bottom'],[4,'top']],

    16:[[1,'zBottom'],[1,'zTop'],[1,'bottom'],[1,'top']],
    17:[[1,'zBottom'],[1,'zTop'],[2,'bottom'],[2,'top']],
    18:[[1,'zBottom'],[1,'zTop'],[3,'bottom'],[3,'top']],
    19:[[1,'zBottom'],[1,'zTop'],[4,'bottom'],[4,'top']],

    20:[[2,'zBottom'],[2,'zTop'],[1,'bottom'],[1,'top']],
    21:[[2,'zBottom'],[2,'zTop'],[2,'bottom'],[2,'top']],
    22:[[2,'zBottom'],[2,'zTop'],[3,'bottom'],[3,'top']],
    23:[[2,'zBottom'],[2,'zTop'],[4,'bottom'],[4,'top']],

    24:[[3,'zBottom'],[3,'zTop'],[1,'bottom'],[1,'top']],
    25:[[3,'zBottom'],[3,'zTop'],[2,'bottom'],[2,'top']],
    26:[[3,'zBottom'],[3,'zTop'],[3,'bottom'],[3,'top']],
    27:[[3,'zBottom'],[3,'zTop'],[4,'bottom'],[4,'top']],

    28:[[4,'zBottom'],[4,'zTop'],[1,'bottom'],[1,'top']],
    29:[[4,'zBottom'],[4,'zTop'],[2,'bottom'],[2,'top']],
    30:[[4,'zBottom'],[4,'zTop'],[3,'bottom'],[3,'top']],
    31:[[4,'zBottom'],[4,'zTop'],[4,'bottom'],[4,'top']],

    32:[[1,'right'],[1,'left'],[1,'zBottom'],[1,'zTop']],
    33:[[1,'right'],[1,'left'],[2,'zBottom'],[2,'zTop']],
    34:[[1,'right'],[1,'left'],[3,'zBottom'],[3,'zTop']],
    35:[[1,'right'],[1,'left'],[4,'zBottom'],[4,'zTop']],

    36:[[2,'right'],[2,'left'],[1,'zBottom'],[1,'zTop']],
    37:[[2,'right'],[2,'left'],[2,'zBottom'],[2,'zTop']],
    38:[[2,'right'],[2,'left'],[3,'zBottom'],[3,'zTop']],
    39:[[2,'right'],[2,'left'],[4,'zBottom'],[4,'zTop']],

    40:[[3,'right'],[3,'left'],[1,'zBottom'],[1,'zTop']],
    41:[[3,'right'],[3,'left'],[2,'zBottom'],[2,'zTop']],
    42:[[3,'right'],[3,'left'],[3,'zBottom'],[3,'zTop']],
    43:[[3,'right'],[3,'left'],[4,'zBottom'],[4,'zTop']],

    44:[[4,'right'],[4,'left'],[1,'zBottom'],[1,'zTop']],
    45:[[4,'right'],[4,'left'],[2,'zBottom'],[2,'zTop']],
    46:[[4,'right'],[4,'left'],[3,'zBottom'],[3,'zTop']],
    47:[[4,'right'],[4,'left'],[4,'zBottom'],[4,'zTop']],
  },
  5:{ // 右 左 下 上
    0:[[1,'right'],[1,'left'],[1,'bottom'],[1,'top']],
    1:[[1,'right'],[1,'left'],[2,'bottom'],[2,'top']],
    2:[[1,'right'],[1,'left'],[3,'bottom'],[3,'top']],
    3:[[1,'right'],[1,'left'],[4,'bottom'],[4,'top']],
    4:[[1,'right'],[1,'left'],[5,'bottom'],[5,'top']],

    5:[[2,'right'],[2,'left'],[1,'bottom'],[1,'top']],
    6:[[2,'right'],[2,'left'],[2,'bottom'],[2,'top']],
    7:[[2,'right'],[2,'left'],[3,'bottom'],[3,'top']],
    8:[[2,'right'],[2,'left'],[4,'bottom'],[4,'top']],
    9:[[2,'right'],[2,'left'],[5,'bottom'],[5,'top']],

    10:[[3,'right'],[3,'left'],[1,'bottom'],[1,'top']],
    11:[[3,'right'],[3,'left'],[2,'bottom'],[2,'top']],
    12:[[3,'right'],[3,'left'],[3,'bottom'],[3,'top']],
    13:[[3,'right'],[3,'left'],[4,'bottom'],[4,'top']],
    14:[[3,'right'],[3,'left'],[5,'bottom'],[5,'top']],

    15:[[4,'right'],[4,'left'],[1,'bottom'],[1,'top']],
    16:[[4,'right'],[4,'left'],[2,'bottom'],[2,'top']],
    17:[[4,'right'],[4,'left'],[3,'bottom'],[3,'top']],
    18:[[4,'right'],[4,'left'],[4,'bottom'],[4,'top']],
    19:[[4,'right'],[4,'left'],[5,'bottom'],[5,'top']],

    20:[[5,'right'],[5,'left'],[1,'bottom'],[1,'top']],
    21:[[5,'right'],[5,'left'],[2,'bottom'],[2,'top']],
    22:[[5,'right'],[5,'left'],[3,'bottom'],[3,'top']],
    23:[[5,'right'],[5,'left'],[4,'bottom'],[4,'top']],
    24:[[5,'right'],[5,'left'],[5,'bottom'],[5,'top']],

    //zBottom  ,zTop,    'bottom' 'top
    25:[[1,'zBottom'],[1,'zTop'],[1,'bottom'],[1,'top']],
    26:[[1,'zBottom'],[1,'zTop'],[2,'bottom'],[2,'top']],
    27:[[1,'zBottom'],[1,'zTop'],[3,'bottom'],[3,'top']],
    28:[[1,'zBottom'],[1,'zTop'],[4,'bottom'],[4,'top']],
    29:[[1,'zBottom'],[1,'zTop'],[5,'bottom'],[5,'top']],

    30:[[2,'zBottom'],[2,'zTop'],[1,'bottom'],[1,'top']],
    31:[[2,'zBottom'],[2,'zTop'],[2,'bottom'],[2,'top']],
    32:[[2,'zBottom'],[2,'zTop'],[3,'bottom'],[3,'top']],
    33:[[2,'zBottom'],[2,'zTop'],[4,'bottom'],[4,'top']],
    34:[[2,'zBottom'],[2,'zTop'],[5,'bottom'],[5,'top']],

    35:[[3,'zBottom'],[3,'zTop'],[1,'bottom'],[1,'top']],
    36:[[3,'zBottom'],[3,'zTop'],[2,'bottom'],[2,'top']],
    37:[[3,'zBottom'],[3,'zTop'],[3,'bottom'],[3,'top']],
    38:[[3,'zBottom'],[3,'zTop'],[4,'bottom'],[4,'top']],
    39:[[3,'zBottom'],[3,'zTop'],[5,'bottom'],[5,'top']],

    40:[[4,'zBottom'],[4,'zTop'],[1,'bottom'],[1,'top']],
    41:[[4,'zBottom'],[4,'zTop'],[2,'bottom'],[2,'top']],
    42:[[4,'zBottom'],[4,'zTop'],[3,'bottom'],[3,'top']],
    43:[[4,'zBottom'],[4,'zTop'],[4,'bottom'],[4,'top']],
    44:[[4,'zBottom'],[4,'zTop'],[5,'bottom'],[5,'top']],

    45:[[5,'zBottom'],[5,'zTop'],[1,'bottom'],[1,'top']],
    46:[[5,'zBottom'],[5,'zTop'],[2,'bottom'],[2,'top']],
    47:[[5,'zBottom'],[5,'zTop'],[3,'bottom'],[3,'top']],
    48:[[5,'zBottom'],[5,'zTop'],[4,'bottom'],[4,'top']],
    49:[[5,'zBottom'],[5,'zTop'],[5,'bottom'],[5,'top']],


//right  left zBottom  zTop,
    50:[[1,'right'],[1,'left'],[1,'zBottom'],[1,'zTop']],
    51:[[1,'right'],[1,'left'],[2,'zBottom'],[2,'zTop']],
    52:[[1,'right'],[1,'left'],[3,'zBottom'],[3,'zTop']],
    53:[[1,'right'],[1,'left'],[4,'zBottom'],[4,'zTop']],
    54:[[1,'right'],[1,'left'],[5,'zBottom'],[5,'zTop']],


    55:[[2,'right'],[2,'left'],[1,'zBottom'],[1,'zTop']],
    56:[[2,'right'],[2,'left'],[2,'zBottom'],[2,'zTop']],
    57:[[2,'right'],[2,'left'],[3,'zBottom'],[3,'zTop']],
    58:[[2,'right'],[2,'left'],[4,'zBottom'],[4,'zTop']],
    59:[[2,'right'],[2,'left'],[5,'zBottom'],[5,'zTop']],

    60:[[3,'right'],[3,'left'],[1,'zBottom'],[1,'zTop']],
    61:[[3,'right'],[3,'left'],[2,'zBottom'],[2,'zTop']],
    62:[[3,'right'],[3,'left'],[3,'zBottom'],[3,'zTop']],
    63:[[3,'right'],[3,'left'],[4,'zBottom'],[4,'zTop']],
    64:[[3,'right'],[3,'left'],[5,'zBottom'],[5,'zTop']],


    65:[[4,'right'],[4,'left'],[1,'zBottom'],[1,'zTop']],
    66:[[4,'right'],[4,'left'],[2,'zBottom'],[2,'zTop']],
    67:[[4,'right'],[4,'left'],[3,'zBottom'],[3,'zTop']],
    68:[[4,'right'],[4,'left'],[4,'zBottom'],[4,'zTop']],
    69:[[4,'right'],[4,'left'],[5,'zBottom'],[5,'zTop']],

    70:[[5,'right'],[5,'left'],[1,'zBottom'],[1,'zTop']],
    71:[[5,'right'],[5,'left'],[2,'zBottom'],[2,'zTop']],
    72:[[5,'right'],[5,'left'],[3,'zBottom'],[3,'zTop']],
    73:[[5,'right'],[5,'left'],[4,'zBottom'],[4,'zTop']],
    74:[[5,'right'],[5,'left'],[5,'zBottom'],[5,'zTop']],
  }
}
RubikX.prototype.mouseMove=function(index,code){
  let vm=this;
 // console.log(code);
  let load=this.biaoGe[index][code][0]
  let way=this.biaoGe[index][code][1]
  vm.startMove(vm.methods[way][load][0],vm.methods[way][load][1])
}

//----------------------------------------------------------------------------------------



//----------------------------------------------------------------------------------------

RubikX.prototype.setCol=function(y,i){
  let a=document.createElement('div');
  let as=a.style;
  as.width=this.width;
  as.height=this.height;
  as.position='absolute';
  as.border=this.border;
  if(this.ifSetCol(y,i)){
    as.backgroundColor=this.values[y].color;
  }else{
    as.backgroundColor=this.themeCol;
  }

  as.transform=`translateX(${this.values[y].tx}px) translateY(${this.values[y].ty}px) translateZ(${this.values[y].tz}px)
                rotateX(${this.values[y].rx}deg) rotateY(${this.values[y].ry}deg)`;


  return a
}
RubikX.prototype.ifSetCol=function(y,i){
  for(let ifi of this.colValues[y]){
    if(ifi===i) return true;
  }
  return  false;
}
RubikX.prototype.creCol=function (i) {
  let a=document.createElement('div');
  let as=a.style;
  as.width=this.offsetWh;
  as.height=this.offsetWh;
  as.position='absolute';
  as.transformStyle='preserve-3d';
  as.transform=`translateX(${this.dataX[i][0]}px) translateY(${this.dataX[i][1]}px) translateZ(${this.dataX[i][2]}px)`;
  return a;
}
RubikX.prototype.creBlock=function () {
  let a=document.createElement('div');
  let as=a.style;
  as.width=as.height=this.bigWH;
 // console.log(this.width);
  as.position='absolute';
  as.transformStyle='preserve-3d';
  as.transform=`rotateX(0deg) rotateY(0deg) rotateZ(0deg)`;
  return a;
}
RubikX.prototype.startMove=function (obj,howDo,ifBoxCall) {
  if(!ifBoxCall){
    if(!this.boxCanDo) return;
    if(!this.canDo) return;
    this.canDo=false;
    this.canCount=0;
    this.maxCC=obj.length;
  }
  this.layerWay(obj,howDo);

}
RubikX.prototype.second=function(obj,howDo){
  let a=this.allAway[obj[0]];
  for(let i in obj){
    this.TBLRZTB(this.allAway[obj[i]],howDo);
    switch (i) {
      case '0':this.changeAway(obj[0],obj[1]);break;
      case '1':this.changeAway(obj[1],obj[2]);break;
      case '2':this.changeAway(obj[2],obj[3]);break;
      case '3':this.changeAway(obj[3],a,true);break;
      default :break;
    }
  }
}
RubikX.prototype.third=function(obj,howDo){
  let a=this.allAway[obj[0]];
  let b=this.allAway[obj[1]];
  for(let i in obj){
    this.TBLRZTB(this.allAway[obj[i]],howDo);
    switch (i) {
      case '0':this.changeAway(obj[0],obj[2]);break;
      case '1':this.changeAway(obj[1],obj[3]);break;
      case '2':this.changeAway(obj[2],obj[4]);break;
      case '3':this.changeAway(obj[3],obj[5]);break;

      case '4':this.changeAway(obj[4],obj[6]);break;
      case '5':this.changeAway(obj[5],obj[7]);break;
      case '6':this.changeAway(obj[6],a,true);break;
      case '7':this.changeAway(obj[7],b,true);break;
      case '8':this.changeAway(obj[8],obj[8]);break;
      default :break;
    }
  }
}
RubikX.prototype.fourth=function(obj,howDo){
  let a=this.allAway[obj[0]];
  let b=this.allAway[obj[1]];
  let c=this.allAway[obj[2]];
  let d=this.allAway[obj[12]];
  for(let i in obj){
    this.TBLRZTB(this.allAway[obj[i]],howDo);
    switch (i) {
      case '0':this.changeAway(obj[0],obj[3]);break;
      case '1':this.changeAway(obj[1],obj[4]);break;
      case '2':this.changeAway(obj[2],obj[5]);break;
      case '3':this.changeAway(obj[3],obj[6]);break;
      case '4':this.changeAway(obj[4],obj[7]);break;
      case '5':this.changeAway(obj[5],obj[8]);break;
      case '6':this.changeAway(obj[6],obj[9]);break;
      case '7':this.changeAway(obj[7],obj[10]);break;
      case '8':this.changeAway(obj[8],obj[11]);break;
      case '9':this.changeAway(obj[9],a,true);break;
      case '10':this.changeAway(obj[10],b,true);break;
      case '11':this.changeAway(obj[11],c,true);break;
      case '12':this.changeAway(obj[12],obj[13]);break;
      case '13':this.changeAway(obj[13],obj[14]);break;
      case '14':this.changeAway(obj[14],obj[15]);break;
      case '15':this.changeAway(obj[15],d,true);break;
      default :break;
    }
  }
}
RubikX.prototype.fifth=function(obj,howDo){
  let a=this.allAway[obj[0]];
  let b=this.allAway[obj[1]];
  let c=this.allAway[obj[2]];
  let d=this.allAway[obj[3]];
  let a1=this.allAway[obj[16]];
  let a2=this.allAway[obj[17]];

  for(let i in obj){
    this.TBLRZTB(this.allAway[obj[i]],howDo);
    let mi=Math.floor(i);
    if(mi<12){
      this.changeAway(obj[mi],obj[mi+4]);
    }else if(mi>11&&mi<16){
      switch (mi) {
        case 12: this.changeAway(obj[12],a,true);break;
        case 13: this.changeAway(obj[13],b,true);break;
        case 14: this.changeAway(obj[14],c,true);break;
        case 15: this.changeAway(obj[15],d,true);break;
      }
    }else if(mi>15&&mi<22){
      this.changeAway(obj[mi],obj[mi+2]);
    }else{
      switch (mi) {
        case 22: this.changeAway(obj[22],a1,true);break;
        case 23: this.changeAway(obj[23],a2,true);break;
        case 24: this.changeAway(obj[24],obj[24]);break;
        default:break;
      }
    }
  }
}
RubikX.prototype.sixth=function(obj,howDo){
  console.log('6');
}
RubikX.prototype.seventh=function(obj,howDo){
  console.log('7');
}
RubikX.prototype.eighth=function(obj,howDo){
  console.log('8');
}
RubikX.prototype.ninth=function(obj,howDo){
  console.log('9');
}
RubikX.prototype.tenth=function(obj,howDo){
  console.log('10');
}

RubikX.prototype.boxMove=function (howDo) {
  if(!this.boxCanDo) return
  if(!this.canDo) return
  this.boxCanDo=false
  this.boxCanCount=0
  let s=this.methods[howDo];
  for(let i in s){
     this.startMove(s[i][0],s[i][1],true);
  }
}

RubikX.prototype.TBLRZTB=function (num,howDo) {
  let a=this[howDo][this.xzqk[num]]
  if(howDo==='zTop'){
    this.setTsf(a[0],a[1],a[2],a[3],num,1);
  }else if(howDo==='zBottom'){
    this.setTsf(a[0],a[1],a[2],a[3],num,2);
  } else{
    this.setTsf(a[0],a[1],a[2],a[3],num);
  }
}
RubikX.prototype.setTsf=function(x,y,z,num,index,ifzTB){
  let vm=this;
  if(!ifzTB){
    let arrS=this.obj.getElementsByClassName('xyBox');
    let isXYZ=x!==0?'x':y!==0?'y':z!==0?'z':''
    let target=x!==0?x:y!==0?y:z!==0?z:0;

    //----------------------
    //----------------------------
    vm.timeO[index].target=Math.abs(target);
    vm.timeO[index].speed=target<0?-5:5
    //-
    vm.timeO[index].start=vm.allXYZ[index][isXYZ]
  //  vm.timeO[index].isXYZ=isXYZ

    vm.timeO[index].timer=setInterval(function () {
     // let zxy=vm.timeO[index].isXYZ
      vm.timeO[index].start+=vm.timeO[index].speed
      vm.allXYZ[index][isXYZ]=(vm.timeO[index].start)
      vm.moveTsf(arrS[index],index)
      vm.timeO[index].target-=Math.abs(vm.timeO[index].speed)
      if(vm.timeO[index].target<0){
        clearInterval(vm.timeO[index].timer)
        vm.setTsfa(num,index)
      }
    },16)

    //--------------------------


  }else if(ifzTB===1){
    vm.zMoveTsf(num,ifzTB,index,-1)
  }else if(ifzTB===2){
    vm.zMoveTsf(num,ifzTB,index,1)
  }
}
RubikX.prototype.moveTsf=function(obj,index){
  obj.style.transform=`rotateX(${this.allXYZ[index].x}deg)
                      rotateY(${this.allXYZ[index].y}deg)
                      rotateZ(${this.allXYZ[index].z}deg)`;
}
RubikX.prototype.setTsfa=function (num,index,ifzTB) {
  this.xzqk[index]=num
  let vm=this;
  this.allXYZ[index].x=this.away[num][0];
  this.allXYZ[index].y=this.away[num][1];
  this.allXYZ[index].z=this.away[num][2];
  let arrs=this.obj.getElementsByClassName('xyBox');
  this.moveTsf(arrs[index],index)
  if(ifzTB){
    let zarr=this.obj.getElementsByClassName('zBox');
    zarr[index].style.transform=`rotateZ(0deg)`

  }
  if(!vm.boxCanDo){
    vm.boxCanCount=1+Math.floor(vm.boxCanCount)
    vm.boxCanCount===vm.maxBCC?vm.boxCanDo=true:''
  }else{
    vm.canCount=1+Math.floor(vm.canCount);
    vm.canCount===vm.maxCC?vm.canDo=true:'';
  }
}
RubikX.prototype.zMoveTsf=function(num,ifzTB,index,a){
  let vm=this
  let arrZ=vm.obj.getElementsByClassName('zBox');
  vm.timeO[index].moveOn=0
  vm.timeO[index].zStart=0
  vm.timeO[index].timer=setInterval(function () {
    vm.timeO[index].zStart+=5*a
    arrZ[index].style.transform=`rotateZ(${vm.timeO[index].zStart}deg)`
    vm.timeO[index].moveOn+=1
    if(vm.timeO[index].moveOn>17){
      clearInterval(vm.timeO[index].timer)
      vm.setTsfa(num,index,ifzTB)
    }
  },16)
}
RubikX.prototype.changeAway=function (a,b,ifa) {
  //console.log(a, b);
  if(ifa){
    this.allAway[a]=b
  }else{
    this.allAway[a]=this.allAway[b]
  }
}



export default RubikX
