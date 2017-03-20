var ball = { }

function setup() {
    createCanvas(800,600);
    ball.x = random(800);
    ball.y = random(600);
}

function draw() {
    stroke(random(255), random(255), random(255));
    ellipse(ball.x, ball.y, 10);
}

function keyPressed() {
    console.log('keyPressed', keyCode);

    if ( keyCode == UP_ARROW && ball.y > 0 ) {
        ball.y -=10;
    } else if ( keyCode == DOWN_ARROW && ball.y < 600 ) {
        ball.y +=10;
    } else if ( keyCode == LEFT_ARROW && ball.x > 0 ) {
        ball.x -=10;
    } else if ( keyCode == RIGHT_ARROW && ball.x < 800 ) {
        ball.x +=10;
    }
}
