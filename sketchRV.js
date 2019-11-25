function setup() {
  createCanvas(400, 400, WEBGL);
}

function draw() {
  background(0);
  fill(255,0,0);
  rotateX(frameCount * 0.02);
  rotateY(frameCount * 0.02);
  torus(120,10);
  fill(0,255,0);
  rotateX(frameCount * 0.04);
  rotateY(frameCount * 0.04);
  torus(60,10);
  fill(0,0,255);
  rotateX(frameCount * 0.03);
  rotateY(frameCount * 0.03);
  torus(90,10);
  fill(251, 255, 0);
  rotateX(frameCount * 0.05);
  rotateY(frameCount * 0.05);
  torus(30,10);
  fill(255,255,255);
  sphere(20);
}