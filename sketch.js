let value = 0;
var angle = 2.0;
var scalar = 3.5;
var offset = 300;
var speed = 2;
let cnv
recs = []
stillrecs = []
var col = {
    r: 255,
    g: 0,
    b: 0
};
//let pressed = false;

function setup() {
    createCanvas(windowWidth,windowHeight)
    background(0)
}

function draw() {
    
    
    if (mousePressed()) {
        rec = new Rectangle(mouseX,mouseY,15,15)
        rec.display()
        rec.mouseClicked()
    }
    // for(i=0;i<stillrecs.length;i++) {
    //     stillrecs[i].display();
    // }

    // for (i=0;i<recs.length;i++) {
        
    //     rec.spiral()
    //     rec.display()
    // }
    
    // if (mouseIsPressed) {
    //     rec = new Rectangle(mouseX,mouseY,15,15)
    //     recs.push(rec)
    // }

}

class Rectangle{
    constructor(x,y,width,height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    display() {    
        col.r = random(0, 200);
        col.g = random(0, 250);
        col.b = random(100, 250); 
        fill(col.r, col.g, col.b);   
        rect(this.x,this.y,this.width,this.height)
    }

    mouseClicked() {
        var x = offset + cos(angle) * scalar;
        var y = offset + sin(angle) * scalar;
        ellipse(x, y, 5, 5);
        angle += speed;
        scalar += speed;
        return false
    }

    // spiral() {        
    //     this.x += cos(angle) * scalar;
    //     this.y += sin(angle) * scalar;
    //     noStroke();
    //     angle += speed;
    //     scalar += speed;
    //   }   
    
}

// function mouseClicked() {
//     var x = offset + cos(angle) * scalar;
//     var y = offset + sin(angle) * scalar;
//     ellipse(x, y, 5, 5);
//     angle += speed;
//     scalar += speed;
//     return false
// }

function mousePressed() {
    
}

// function mouseReleased() {
//     for (i=0;i<recs.length;i++) {
//         stillrecs.push(recs[i]);
//     }
//     recs = []
// }

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

