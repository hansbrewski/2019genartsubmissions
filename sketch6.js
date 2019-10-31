//Epilepsy Warning
function setup() {
  createCanvas(400, 400, WEBGL);
}
function draw() {
  background(200);
  fill(random(255), random(255), random(255));
  rotateX(frameCount * 0.02);
  rotateY(frameCount * 0.01);
  torus(150, 10);
    fill(random(255), random(255), random(255));
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.02);
  torus(150, 15);
      fill(random(255), random(255), random(255));
  rotateX(frameCount * 0.03);
  rotateY(frameCount * 0.01);
  torus(150, 15);
    fill(random(255), random(255), random(255));
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.02);
  box(150);
      fill(random(255), random(255), random(255));
  rotateX(frameCount * 0.02);
  rotateY(frameCount * 0.03);
  box(150);
      fill(random(255), random(255), random(255));
  rotateX(frameCount * 0.03);
  rotateY(frameCount * 0.04);
  box(150);
}