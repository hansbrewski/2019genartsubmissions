// draw a spinning torus
// with ring radius 30 and tube radius 15
function setup() {
  createCanvas(1348,608, WEBGL);
}

function draw() {
  background(255);
fill(color="#19314d");
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  torus(1300, 100);
fill(color="#8d3b49");
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  torus(1200, 90);
fill(color="#19314d");
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  torus(1100, 80);
fill(color="#8d3b49");
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  torus(1000, 70);
fill(color="#19314d");
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  torus(900, 60);
fill(color="#8d3b49");
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  torus(800, 50);
fill(color="#19314d");
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  torus(700, 40);
fill(color="#8d3b49");
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  torus(600, 30);
fill(color="#19314d");
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  torus(500, 20);
fill(color="#8d3b49");
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  torus(400, 10);
fill(color="#19314d");
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  torus(300, 5);
fill(color="#8d3b49");
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  torus(200, 4);
fill(color="#19314d");
 rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  torus(100, 3)
fill(color="#8d3b49");
 rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  torus(50, 2)
fill(color="#19314d");
 rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  torus(25, 1)

  sphere(12.5)
}