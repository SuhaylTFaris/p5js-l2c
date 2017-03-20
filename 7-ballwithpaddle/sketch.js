var p1 = {};
var p2 = {};
var ball = {};

function setup() {
    createCanvas(800,600);

    p1.x = 20;
    p1.y = 10;

    p2.x = 760;
    p2.y = 10;

    ball.x = 400;
    ball.y = 300;
    ball.dirX = 1;
    ball.dirY = random([0, 1]);
}

function draw() {
    clear();

    background(0);
    strokeWeight(0);
    fill(255);

    // player

    if ( keyIsDown(UP_ARROW) && p1.y >= 10 ) {
        p1.y -=10;
    } else if ( keyIsDown(DOWN_ARROW) && p1.y <= 550 ) {
        p1.y +=10;
    }

    rect(p1.x, p1.y, 20, 50);
    rect(p2.x, p2.y, 20, 50);

    // ball

    if (ball.x >= 800) {
        ball.dirX = 0;
    } else if (ball.x <= 0) {
        ball.dirX = 1;
    }

    if (ball.y >= 600) {
        ball.dirY = 0;
    } else if (ball.y <= 0) {
        ball.dirY = 1;
    }

    if (ball.dirX) {
        ball.x += 10;
    } else if (!ball.dirX) {
        ball.x -= 10;
    }

    if (ball.dirY) {
        ball.y += 10;
    } else if (!ball.dirY) {
        ball.y -= 10;
    }

    rect(ball.x, ball.y, 10, 10);
}
