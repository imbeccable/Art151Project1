let value = 0;
var angle = 2.0;
var scalar = 3.5;
var speed = 2;
recs = []
var col = {
    r: 255,
    g: 0,
    b: 0
};
let pressed = false;

function setup() {
    createCanvas(windowWidth,windowHeight)
    background(0)
}

function draw() {

    for (i=0;i<recs.length;i++) {
        rec.spiral()
        rec.display()
    }
    
    if (mouseIsPressed) {
        rec = new Rectangle(mouseX,mouseY,15,15)
        recs.push(rec)        
    }

}

class Rectangle{
    constructor(x,y,width,height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    display() {        
        rect(this.x,this.y,this.width,this.height)
    }

    spiral() {
        col.r = random(0, 200);
        col.g = random(0, 250);
        col.b = random(100, 250);
        this.x += cos(angle) * scalar;
        this.y += sin(angle) * scalar;
        fill(col.r, col.g, col.b);
        noStroke();
        // rec = new Rectangle(newx, newy, 15, 15);
        // rec.display()
        angle += speed;
        scalar += speed;
      }

    reset() {
        this.x = mouseX
        this.y = mouseY
    }
    
}

function mousePressed() {
    pressed = true
    return pressed
}

// keyValue = 0
// function keyPressed() {
//     if (keyCode === 65) {
//         console.log('keyPressed is A')
//         keyValue = 100
//     }
//     if (keyCode ===83) {
//         console.log('keyPressed is S')
//         keyValue = 50
//     }
//     else {
//         console.log('key released')
//     }
// }

