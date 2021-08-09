const letters = "AGENT";
let textsize=90;

function setup() {
  var canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  frameRate(30);

  textsize = windowWidth/7;
  textFont(font);
  textSize(textsize);
  textAlign(CENTER, CENTER);
}

function draw() {
  clear();
  text(letters, (windowWidth-letters.length)/2, windowHeight/2);
  }
