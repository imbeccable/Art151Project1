let blocks = [];
let pressed = false;
let c1 = 0;
let c2 = 0;
let c3 = 0;
var col = {
    r: 255,
    g: 0,
    b: 0
};
class Block {
    constructor(x,y,width,height,speedx,speedy) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.speedx = speedx;
      this.speedy = speedy;
    }

    display() {
        col.r = random(0, 200);
        col.g = random(0, 250);
        col.b = random(100, 250); 
        fill(col.r, col.g, col.b);
        rect(this.x,this.y,this.width,this.height);
    }

    move() {
        this.x += this.speedx;
        if (this.x > windowWidth - this.width || this.x < 0) {
            this.speedx *= -1;
        }
        this.y += this.speedy;
        if (this.y > windowHeight - this.height || this.y < 0) {
            this.speedy *= -1;
        }        
    }   
    
    // scaling() {
    //     if (this.x < 5) {
    //         scale(2)
    //     }
    //     if (this.x > 200) {
    //         scale(-2)
    //     }
    //     if (this.y < 5) {
    //         scale(0,2)
    //     }
    //     if (this.y > 200) {
    //         scale(0,-2)
    //     }
    }
  }

function reset() {
    blocks.length = 0;
    c1 = 0;
    c2 = 0;
    c3 = 0;
}

function mouseClicked() {
    if (mouseIsPressed) {
        return true;
    }
    return false;
}

function changeBackground1() {
    col.r = random(0, 200);
    return col.r
}
function changeBackground2() {
    col.g = random(0, 250);
    return col.g
}
function changeBackground3() {
    col.b = random(100, 250);
    return col.b
}

function setup() {
    createCanvas(windowWidth, windowHeight);    
  }
  
function draw() { 
    background(c1,c2,c3)

    if (mouseClicked()) {
        if (mouseX > windowWidth/2 && mouseY < windowHeight/2){
            blocks.push(new Block(mouseX, mouseY, random(10,200), random(10,200), random(-5,-20), random(5,20))) 
        }
        else if (mouseX > windowWidth/2 && mouseY > windowHeight/2){
            blocks.push(new Block(mouseX, mouseY, random(10,200), random(10,200), random(-5,-20), random(-5,-20))) 
        }
        else if (mouseX < windowWidth/2 && mouseY > windowHeight/2){
            blocks.push(new Block(mouseX, mouseY, random(10,200), random(10,200), random(5,20), random(-5,-20))) 
        }
        else {
            blocks.push(new Block(mouseX, mouseY, random(10,200), random(10,200), random(5,20), random(5,20)))
        }

    }
    let i = 0
    for (i;i<blocks.length;i++) {
        blocks[i].display();
        blocks[i].move();
        //blocks[i].scaling();
    }
    
    if (keyCode == 27){
        reset();
        keyCode = 0;
    }

    if (keyCode == 13) {
        c1 = changeBackground1();
        c2 = changeBackground2();
        c3 = changeBackground3();
        keyCode = 0;
    }
  }