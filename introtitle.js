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
  let gap = (windowWidth*0.6)/letters.length + windowWidth*0.02;
  let trans = map(frameCount, 0, 45, 0, windowHeight*0.35);
  textAlign(CENTER);

  for (let i=0; i<letters.length; i++){
      let x = windowWidth*0.2 + gap*i;
      text(char(letters[i]), x, windowHeight/2-textsize/2-trans);
    }
  }
