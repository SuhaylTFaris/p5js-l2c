function setup() {
    createCanvas(800,600);
}

function draw() {
    stroke(random(255), random(255), random(255));
    var x1 = random(800);
    var x2 = random(800);
    var y1 = random(600);
    var y2 = random(600);

    line(x1, y1, x2, y2);
}
