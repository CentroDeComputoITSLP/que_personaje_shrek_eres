let capture;

function setup() {
    createCanvas(480, 480);
    capture = createCapture(VIDEO);
    capture.hide();
}

function draw() {
    image(capture, 0, 0);
    filter(INVERT);
}