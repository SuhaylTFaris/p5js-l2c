var p1 = {};
var ball = {};

var PWIDTH = 20;
var PHEIGHT = 80;
var P1X = 20;
var P1BOUNDR = P1X + PWIDTH;
var P1BOUNDL = P1X;
var BSPD = 8;

function setup() {
    createCanvas(800,600);

    p1.x = P1X;
    p1.y = 10;

    resetBall();
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

    rect(p1.x, p1.y, PWIDTH, PHEIGHT);

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
        ball.x += BSPD;
    } else if (!ball.dirX) {
        ball.x -= BSPD;
    }

    if (ball.dirY) {
        ball.y += BSPD;
    } else if (!ball.dirY) {
        ball.y -= BSPD;
    }

    rect(ball.x, ball.y, 10, 10);

    // reset - P1

    if ((ball.dirX == 0) && ball.x <= P1BOUNDR && ball.x >= P1BOUNDL && (ball.y < p1.y || ball.y > p1.y + PHEIGHT)) {
        resetBall();
    }

    // collision - P1

    if ((ball.dirX == 0) && ball.x <= P1BOUNDR && ball.x >= P1BOUNDL && ball.y >= p1.y && ball.y <= p1.y + PHEIGHT) {
        ball.dirX = 1;
    }
}

function resetBall() {
    ball.x = 400;
    ball.y = 300;
    ball.dirX = 1;
    ball.dirY = random([0, 1]);
}
