const letters = "AGENT";
let textsize=90;

function preload() {
  fontsize = 100;
  font = loadFont('AKIRA EXPANDED DEMO.OTF');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(30);
  
  if(windowWidth<300){
    textsize = windowWidth/12;
  } else if (windowWidth>=300 || windowWidth<1200){
    textsize = windowWidth/7;
  } else if (windowWidth>=1200){
    textsize = windowWidth/12;
  }
  textFont(font);
  textSize(textsize);
  textAlign(CENTER, CENTER);
}

function draw() {
  
  background(255);
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
        stroke(0, colortransition);
      }
      
      text(char(countup), x, windowHeight/2-textsize/2);
    }
  }
  fill(255);
  noStroke();
  rect(map(frameCount, 0, 30, 0, windowWidth), 0, windowWidth, windowHeight);
  
  if(frameCount>=60){
    fill(0, 0, 255, map(frameCount, 60, 90, 0, 255));
    ellipse(windowWidth/2, windowHeight*0.5+textsize/2, 20+2*sin(frameCount/6), 20+2*sin(frameCount/6));
    
    let a = createA('index.html', 'Click to Enter the Game.')
    a.style('font-size', '1em');
    a.position(windowWidth/2-a.width/2, windowHeight*0.6);
    
    const rand = random(0, windowWidth*5);
    strokeWeight(0.5);
    stroke(0, 0, 255);
    line(rand,0, rand, windowHeight);
    line(0, rand, windowWidth, rand);
  }
}
