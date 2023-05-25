//class類別，粒子
class Obj {//宣告一個類別，針對一個畫的圖案
    constructor(args){//預設值，基本資料(物件的顏色、移動的速度、大小、初始顯示位置......)
    // this.p =args.p|| {x: random(width),y:random(height)   }//描述為該物件初始位置，
     //||(or)1,當產生一個物件時，有傳位置參數，則使用該參數，如果沒
     this.p =args.p ||createVector(random(width),random(height)) ////將樓上那行變成向量方式呈現
   
   
     //this.v = {x: random(-1,1),y:random(-1,1) }//設定一個物件的移動速度
     this.v = createVector(random(-1,1),random(-1,1))//將樓上那行變成向量方式呈現
     this.size = random(15,20)//設定一個物件的放大倍率
     this.color =random(fill_colors)//充滿顏色
     this.stroke =random(line_colors)//外框線條顏色
      }
     draw(){//畫出單一個物件形狀
       push()//執行push()後依照我的設定，設定圓點(0，0)的位置
        translate(this.p.x,this.p.y)///以該物件為原點
        scale(this.v.x<0?1:-1,-1)//軸的放大倍率如果this.v.x<0條件成立，值為1，否則為-1，-1代表Y軸為上下翻轉
        fill(this.color)
        stroke(this.stroke)
        strokeWeight(4) //線條粗細
        beginShape()
        for(var k=0;k<points.length-1;k=k+1){
         //line(points[k][0]*this.size,points[k][1]*this.size,points[k+1][0]*this.size,points[k+1][1]*this.size) //需要提供兩個點的座標
         //vertex(points[k][0]*this.size,points[k][1]*this.size) //只要設定一個點，當指令到endshape()，會把所有的點串接再一起
         curveVertex(points[k][0]*this.size,points[k][1]*this.size) //畫線為圓弧方式畫圓
        }
        endShape()
       pop()///執行pop之後，原點(0,0)回到整個視窗的左上角
     }
     update(){//移動程式碼內容
       //this.p.x = this.p.x+this.v.x//x軸移動位置(this.p.x)至加上x軸移動速度(this.p.x)
      //this.p.y = this.p.y+this.v.y//y軸移動位置(this.p.y)至加上y軸移動速度(this.v.y)
       this.p.add(this.v)//設定好向量，就可以達到與上面兩行一樣的效果
       //向量sub==>減號
   
       //知道滑鼠的位置，並建立一個滑鼠的向量
       let mouseV = createVector(mouseX,mouseY)//把滑鼠位置轉換成一個向量值
       let delta = mouseV.sub(this.p).limit(this.v.mag()*2)//sub計算出滑鼠所在位置向量到物件向量mouseV(this.p)的距離，每次以3為距離移動,this.v.mag()該物件的速度大小，(一個向量值友分大小及方向)
       this.p.add(delta)
       
       if(this.p.x<=0 || this.p.x>=width){//x軸碰到左邊(<=0)，或是碰到右邊(>=width)
         this.v.x = -this.v.x//把x軸方向，速度方向改變
       }
       if(this.p.y<=0 || this.p.y>=height)////y軸碰到上邊(<=0)，或是碰到下邊(>=width)
       this.v.y = -this.v.y//把y軸方向，速度方向改變
     }
   isBallInRanger(x,y){////功能:判斷滑鼠按下位置是否在物件的範圍內
     let d = dist(x,y,this.p.x,this.p.y) //計算兩點(滑鼠按下及物件中心點)之間的距離，放到d變數內
     if(d<4*this.size){
       return true//滑鼠與物件的距離小於物件的寬度，代表碰觸，則傳回ture的值
     }else{
       return false//滑鼠與物件的距離大於物件的寬度，代表沒有碰觸，則傳回false的值
     }
   
   }
   
   }