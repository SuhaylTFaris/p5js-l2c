var p1 = {};

function setup() {
    createCanvas(800,600);

    p1.x = 20;
    p1.y = 10;
}

function draw() {
    clear();

    if ( keyIsDown(UP_ARROW) && p1.y >= 10 ) {
        p1.y -=10;
    } else if ( keyIsDown(DOWN_ARROW) && p1.y <= 550 ) {
        p1.y +=10;
    }

    background(0);
    strokeWeight(0);
    fill(255);

    rect(p1.x, p1.y, 20, 50);
}
