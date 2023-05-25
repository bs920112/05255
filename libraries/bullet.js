class Bullet{
    constructor(args){
      this.r = args.r || 30//設計飛彈有大有小時，就傳參數,a,args.r
      this.p = args.p || createVector(width/2,height/2)//建立一個向量{x:width/2,y:height/2}
      this.v = args.v || createVector(mouseX-width/2,mouseY-height/2).limit(5)//建立一個向量{x:width/2,y:height/2}
      this.color = args.color || "#a2d2ff"
      
  
    }
    draw(){///畫出物件程式碼
     push()
  translate(this.p.x,this.p.y)
  fill(this.color)
  noStroke()
  ellipse(0,0,this.r)
  
  
     pop()
    }
    update(){///計算出移動後的位置
  this.p.add(this.v)
  //this.p.x = this.p.x+this.v.x//x軸移動位置(this.p.x)至加上x軸移動速度(this.p.x)
     //this.p.y = this.p.y+this.v.y//y軸移動位置(this.p.y)至加上y軸移動速度(this.v.y)
    }
  }