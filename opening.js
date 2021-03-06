const letters = "AGENT";
let textsize=90;

function preload() {
  fontsize = 100;
  font = loadFont('AKIRA EXPANDED DEMO.OTF');
}

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
  textAlign(CENTER);

  let colortransition = map(frameCount, 0, 50, 255, 0);
  let uptrans = 255-colortransition;

  for (let i=0; i<letters.length; i++){
    for(let countup=65; countup<=unchar(letters[i]); countup++){
      let x = windowWidth*0.2 + gap*i;
      if(countup == unchar(letters[i])){
       fill(colortransition, uptrans);
        noStroke();
      } else{
        fill(255);
      }

      text(char(countup), x, windowHeight/2-textsize/2);
    }
  }
  fill(255);
  noStroke();
  rect(map(frameCount, 0, 30, 0, windowWidth), 0, windowWidth, windowHeight);

  if(frameCount>=60){
    fill(0, 0, 255, map(frameCount, 60, 90, 0, 255));
    ellipse(windowWidth/2, windowHeight*0.55, 20+2*sin(frameCount/6), 20+2*sin(frameCount/6));

    const rand = random(0, windowWidth*5);
    strokeWeight(0.5);
    stroke(0, 0, 255);
    line(rand,0, rand, windowHeight);
    line(0, rand, windowWidth, rand);
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
