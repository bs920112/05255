// let points = [
// [7,10],[12,6],[12,4],[9,1],[10,-2],[10,-7],[5,-10],[1,-11],[1,-13],[-3,-13],[-14,-4],[-13,4],
// [-11,9],[-12,13],[-10,16],[-8,17],[-5,13],[3,13],[7,16],[10,15],[10,13],[7,10]
// ]


// let points =[[6, -3], [5, 0], [7, 2],[7,4],[6,5],[9,5],[9,6],[8,7],[7,8],[6,8],[5,10],[4,10],[4,9],[5,8],[4,5],[0,5],[-2,4],[-4,1],[-4,-6],[-5,-7],[-10,-6],[-9,-7],[-4,-8],[-3,-7]
//,[-1,-5],[4,4],[3,2],[3,1],[5,-3],[4,-4],[5,-4],[6,-3],[4,1],[5,2],[1,-4],[2,-5],[2,-8],[8,-8],[7,-7],[3,-7],[3,-1],[4,-1],[3,-1],[2,-3],[0,-5],[-4,-2],[-3,-4],[-1,-5],[-1,-9],[5,-10],[6,-9],[0,-8],[0,-5],[1,0],[-1,3],[5,-4],[6,-4],[7,-3],[6,1]];

let points = [[-2, 0], [-1,-1], [0, -1],[1,0],[1,2],[0,3],[-1,3],[-2,2],[-3,2],[-4,1],[-4,-2],[-5,-4],[-4,-4]
,[-3,-2],[-2,-1],[-2,-3], [-2,-4], [-1, -4],[0,-4],[0,-2],[2,-2],[2,-4], [4, -4],[4,1],[3,2],[1,2],[1,2]]; //list資料，

var fill_colors = "ffcdb2-ffb4a2-e5989b-b5838d-6d6875".split("-").map(a=>"#"+a)//大象顏色
var line_colors = "780000-c1121f-fdf0d5-003049-669bbc".split("-").map(a=>"#"+a)//線條顏色

//class類別，粒子
// class Obj {//宣告一個類別，針對一個畫的圖案
//  constructor(args){//預設值，基本資料(物件的顏色、移動的速度、大小、初始顯示位置......)
//  // this.p =args.p|| {x: random(width),y:random(height)   }//描述為該物件初始位置，
//   //||(or)1,當產生一個物件時，有傳位置參數，則使用該參數，如果沒
//   this.p =args.p ||createVector(random(width),random(height)) ////將樓上那行變成向量方式呈現


//   //this.v = {x: random(-1,1),y:random(-1,1) }//設定一個物件的移動速度
//   this.v = createVector(random(-1,1),random(-1,1))//將樓上那行變成向量方式呈現
//   this.size = random(15,20)//設定一個物件的放大倍率
//   this.color =random(fill_colors)//充滿顏色
//   this.stroke =random(line_colors)//外框線條顏色
//    }
//   draw(){//畫出單一個物件形狀
//     push()//執行push()後依照我的設定，設定圓點(0，0)的位置
//      translate(this.p.x,this.p.y)///以該物件為原點
//      scale(this.v.x<0?1:-1,-1)//軸的放大倍率如果this.v.x<0條件成立，值為1，否則為-1，-1代表Y軸為上下翻轉
//      fill(this.color)
//      stroke(this.stroke)
//      strokeWeight(4) //線條粗細
//      beginShape()
//      for(var k=0;k<points.length-1;k=k+1){
//       //line(points[k][0]*this.size,points[k][1]*this.size,points[k+1][0]*this.size,points[k+1][1]*this.size) //需要提供兩個點的座標
//       //vertex(points[k][0]*this.size,points[k][1]*this.size) //只要設定一個點，當指令到endshape()，會把所有的點串接再一起
//       curveVertex(points[k][0]*this.size,points[k][1]*this.size) //畫線為圓弧方式畫圓
//      }
//      endShape()
//     pop()///執行pop之後，原點(0,0)回到整個視窗的左上角
//   }
//   update(){//移動程式碼內容
//     //this.p.x = this.p.x+this.v.x//x軸移動位置(this.p.x)至加上x軸移動速度(this.p.x)
//    //this.p.y = this.p.y+this.v.y//y軸移動位置(this.p.y)至加上y軸移動速度(this.v.y)
//     this.p.add(this.v)//設定好向量，就可以達到與上面兩行一樣的效果
//     //向量sub==>減號

//     //知道滑鼠的位置，並建立一個滑鼠的向量
//     let mouseV = createVector(mouseX,mouseY)//把滑鼠位置轉換成一個向量值
//     let delta = mouseV.sub(this.p).limit(this.v.mag()*2)//sub計算出滑鼠所在位置向量到物件向量mouseV(this.p)的距離，每次以3為距離移動,this.v.mag()該物件的速度大小，(一個向量值友分大小及方向)
//     this.p.add(delta)
    
//     if(this.p.x<=0 || this.p.x>=width){//x軸碰到左邊(<=0)，或是碰到右邊(>=width)
//       this.v.x = -this.v.x//把x軸方向，速度方向改變
//     }
//     if(this.p.y<=0 || this.p.y>=height)////y軸碰到上邊(<=0)，或是碰到下邊(>=width)
//     this.v.y = -this.v.y//把y軸方向，速度方向改變
//   }
// isBallInRanger(x,y){////功能:判斷滑鼠按下位置是否在物件的範圍內
//   let d = dist(x,y,this.p.x,this.p.y) //計算兩點(滑鼠按下及物件中心點)之間的距離，放到d變數內
//   if(d<4*this.size){
//     return true//滑鼠與物件的距離小於物件的寬度，代表碰觸，則傳回ture的值
//   }else{
//     return false//滑鼠與物件的距離大於物件的寬度，代表沒有碰觸，則傳回false的值
//   }

// }
// ///定義一個bullet.js
// }
// class Bullet{
//   constructor(args){
//     this.r = args.r || 30//設計飛彈有大有小時，就傳參數,a,args.r
//     this.p = args.p || createVector(width/2,height/2)//建立一個向量{x:width/2,y:height/2}
//     this.v = args.v || createVector(mouseX-width/2,mouseY-height/2).limit(5)//建立一個向量{x:width/2,y:height/2}
//     this.color = args.color || "#a2d2ff"
    

//   }
//   draw(){///畫出物件程式碼
//    push()
// translate(this.p.x,this.p.y)
// fill(this.color)
// noStroke()
// ellipse(0,0,this.r)


//    pop()
//   }
//   update(){///計算出移動後的位置
// this.p.add(this.v)
// //this.p.x = this.p.x+this.v.x//x軸移動位置(this.p.x)至加上x軸移動速度(this.p.x)
//    //this.p.y = this.p.y+this.v.y//y軸移動位置(this.p.y)至加上y軸移動速度(this.v.y)
//   }
// }
/////畫所有點的物件
var ball ///目前正要處裡的物件，暫時放在ball變數內
var balls=[]///把產生的"所有"物件，為物件的倉庫，所有資料在此
////設定飛彈變數
var bullet //目前要處理的物件 暫時放在bullet變數內 
var bullets=[]///把產生的"所有"物件，為物件的倉庫，所有資料在此

/////++++++++++
var score = 0///計分

function setup() {
  createCanvas(windowWidth, windowHeight);
  for(var i=0;i<20;i=i+1){//i=0,1,2,3......8,9
   ball = new Obj({})///產生一個obj class元件
   balls.push(ball)///把ball的物件放入到balls陣列內
  }
}

function draw() {
  background(220);
 //for(var j=0;j<balls.length;j=j+1){///方法1
  //ball=balls[j]
 // ball.draw()
  //ball.update()
 //}

 ///大象的顯示
 for(let ball of balls)/////方法2,只要是陣列，都可以利用此方式處理
 {
  ball.draw()
  ball.update()
  for(let bullet of bullets){//飛彈物件有沒有接觸現在的ball
    if(ball.isBallInRanger(bullet.p.x,bullet.p.y)){
      balls.splice(balls.indexOf(ball),1)//
      bullets.splice(bullets.indexOf(bullet),1)//從倉庫balls取出被滑鼠按到的物件編號，balls.indexOf(ball),1)
     score= score+1///按一下分數+1
  }
}

 }
///飛彈的顯示
 for(let bullet of bullets)/////方法2,只要是陣列，都可以利用此方式處理
 {
  bullet.draw()
  bullet.update()
 }

 textSize(50)///分數文字大小
 text(score,50,50)//在座標為(50，50)上，顯示score分數內容
push()///重新規劃原點(0,0)
let dx = mouseX - width/2////
let dy = mouseY - height/2///算出中心點與
let angle = atan2(dy,dx)
translate(width/2,height/2)
fill("#ffafcc")
noStroke()
rotate(angle)
ellipse(0,0,50)
 triangle(-25,25,-25,-25,50,0)///設定三個點，畫成一個三角形
 pop()/////恢復定，原點(0,0),在視窗的中間
}
function mousePressed(){

  ////+++++++產生一個物件
  //ball = new Obj({
  //p:{x:mouseX,y:mouseY}
 // })///在滑鼠按下的地方產生一個obj class元件
  //balls.push(ball)///把ball的物件放入到balls陣列內(丟到倉庫)
  //+++++++++ 

  ////在物件上按下滑鼠，物件消失不見，分數+1分
  //for(let ball of balls){//檢查每一個物件
    //if(ball.isBallInRanger(mouseX,mouseY)){
      //balls.splice(balls.indexOf(ball),1)//從倉庫balls取出被滑鼠按到的物件編號，balls.indexOf(ball),1)
      //score= score+1///按一下分數+1
    //}
  //}


  ///按一下產生一個飛彈
  bullet = new Bullet ({})//在滑鼠按下的地方，產生一個新的bullet class元件(產產生一個飛彈)
  bullets.push(bullet)///把bullets的物件放入到bullet陣列內(丟到倉庫)
}



