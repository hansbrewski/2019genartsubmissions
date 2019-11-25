function setup() {
  createCanvas(400, 400);
}

//variables
var eyeSize;
eyeSize=30
;

function draw() {
  //background and arctic landmarks
  background (197, 245,250);
  fill (232, 253, 255);
  rect (0,200,400,200);
  triangle (100,200,150,200,125,50);
  triangle (50,200,100,200,75,30);
  triangle (0,200,50,200,25,120);
  //body
  fill (0);
  ellipse (200,200,150,200);
  //yellow part
  fill (255, 232, 56);
  ellipse (200,150,120,100);
  //head
  fill (0);
  ellipse (200,150,100,100);
  //eyes
  fill (random(255),random(255),random(255));
  ellipse (160,150,eyeSize,eyeSize);
  ellipse (240,150,eyeSize,eyeSize);
  fill (0);
  ellipse (160,150,10,10);
  ellipse (240,150,10,10);
  fill(255);
  ellipse(242,149,5,5);
  ellipse(162,149,5,5);
  //belly
  fill (500)
  ellipse (200,240,120,120);
  //feet
  fill (255, 168, 97);
 triangle (160,300,180,300,170,280);
 triangle (220,300,240,300,230,280);
  //beak
  fill (240, 164, 12);
  triangle (180,160,220,160,200,210);
  //flipper
  fill (0);
  triangle (110,200,150,200,mouseX,mouseY);
  triangle (250,200,290,200,mouseX,mouseY);
  
  //snow/blizzard
  fill(255)
  ellipse(random(width), random(height),10,10)
   fill(255)
  ellipse(random(width), random(height),5,5)
   fill(255)
  ellipse(random(width), random(height),15,15)
   fill(255)
  ellipse(random(width), random(height),20,20)
    ellipse(random(width), random(height),10,10)
   fill(255)
  ellipse(random(width), random(height),5,5)
   fill(255)
  ellipse(random(width), random(height),15,15)
   fill(255)
  ellipse(random(width), random(height),20,20)
}

  
