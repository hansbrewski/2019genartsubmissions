function setup() {
  createCanvas(600, 600, WEBGL);
}

function draw() {
  background(220);

  fill(random(255), random(255), random(255));
   translate(0, 0, 0);
  push();
  rotateX(frameCount * 0.03);
  rotateY(frameCount * 0.03);
 cylinder(50, 700);
  pop();
   fill(random(255), random(255), random(255));
   translate(0, 0, 0);
  push();
  rotateZ(frameCount * 0.0);
  rotateY(frameCount * 0.03);
 cylinder(50, 700);
  pop(); 
  fill(random(255), random(255), random(255));
   translate(0, 0, 0);
  push();
  rotateX(frameCount * 0.03);
  rotateZ(frameCount * 0.03);
  cylinder(50, 700);
  pop();translate(0, 0, 0);
  push();
  rotateZ(frameCount * 0.03);
  rotateX(frameCount * 0.03);
  rotateY(frameCount * 0.03);
  sphere(100);
  pop();translate(0, 0, 0);
  push();
  rotateZ(frameCount * 0.03);
  rotateY(frameCount * 0.03);
  box(100, 100, 700);
  pop();translate(0, 0, 0);
  push();
  rotateZ(frameCount * 0.03);
  rotateX(frameCount * 0.03);
  box(100, 100, 700);
  pop();translate(0, 0, 0);
  push();
  rotateX(frameCount * 0.03);
  rotateY(frameCount * 0.03);
  box(100, 100, 700);
  pop();
  translate(0, 0, 0);
  torus(250, 40);
  
}