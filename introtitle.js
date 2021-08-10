const title = 'AGENT';
let bgm;

function preload(){
  font = loadFont('AKIRA EXPANDED DEMO.OTF');
  fontsize = windowWidth/7;
}


function setup(){
  var canvas= createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  frameRate(30);

  bgm = createAudio("audios/Drifting Sands.mp3");
  bgm.autoplay(true);

  textFont(font);
  textSize(fontsize);
  textAlign(CENTER, CENTER);


}

function draw(){
  clear();
  noStroke();

  let gap = (windowWidth*0.6)/title.length + windowWidth*0.02;

  for (let i=0; i<title.length; i++){
    let x = windowWidth*0.2+gap*i;
    let t = frameCount;
    if(frameCount>=30){t=30;}
    let y = windowHeight*0.45*(cos(t/30*PI-PI)+1)/2;
    fill(255*sin(t/30*PI));
    text(title[i], x, windowHeight/2-y);
    }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
