var ball = {};

function setup() {
    createCanvas(800,600);
    ball.x = random(800);
    ball.y = random(600);
    ball.dirX = 1;
    ball.dirY = 1;
}

function draw() {
    clear();
    stroke(random(255), random(255), random(255));
    ellipse(ball.x, ball.y, 10);

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
}
