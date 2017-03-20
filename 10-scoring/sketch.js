var p1 = {};
var p2 = {};
var ball = {};
var font;

var BSPD = 7;

var PWIDTH = 20;
var PHEIGHT = 80;

var P1X = 20;
var P1BOUNDR = P1X + PWIDTH;
var P1BOUNDL = P1X;

var P2X = 760;
var P2BOUNDR = P2X + PWIDTH;
var P2BOUNDL = P2X;

function preload() {
    font = loadFont('pong_score.ttf');
}

function setup() {
    createCanvas(800,600);

    textFont(font);
    textSize(72);

    p1.x = P1X;
    p1.y = 300;
    p1.score = 0;

    p2.x = P2X;
    p2.y = 300;
    p2.score = 0;

    resetBall();
}

function draw() {
    clear();

    background(0);
    strokeWeight(0);
    fill(255);

    // player 1

    if ( keyIsDown(87) && p1.y >= 10 ) {
        p1.y -=10;
    } else if ( keyIsDown(83) && p1.y <= 550 ) {
        p1.y +=10;
    }

    rect(p1.x, p1.y, PWIDTH, PHEIGHT);

    // player 2

    if ( keyIsDown(UP_ARROW) && p2.y >= 10 ) {
        p2.y -=10;
    } else if ( keyIsDown(DOWN_ARROW) && p2.y <= 550 ) {
        p2.y +=10;
    }

    rect(p2.x, p2.y, PWIDTH, PHEIGHT);

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
        // other player gets score
        p2.score++;
    }

    // collision - P1

    if ((ball.dirX == 0) && ball.x <= P1BOUNDR && ball.x >= P1BOUNDL && ball.y >= p1.y && ball.y <= p1.y + PHEIGHT) {
        ball.dirX = 1;
    }

    // reset - P2

    if ((ball.dirX == 1) && ball.x <= P2BOUNDR && ball.x >= P2BOUNDL && (ball.y < p2.y || ball.y > p2.y + PHEIGHT)) {
        resetBall();
        // other player gets score
        p1.score++;
    }

    // collision - P2

    if ((ball.dirX == 1) && ball.x <= P2BOUNDR && ball.x >= P2BOUNDL && ball.y >= p2.y && ball.y <= p2.y + PHEIGHT) {
        ball.dirX = 0;
    }

    // render scores

    text(p1.score, 250, 90);
    text(p2.score, 500, 90);
}


function resetBall() {
    ball.x = 400;
    ball.y = 300;
    ball.dirX = 1;
    ball.dirY = random([0, 1]);
}
