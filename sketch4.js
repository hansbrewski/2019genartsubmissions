function setup() {
  createCanvas(550, 550, WEBGL);
  detailX = createSlider(3, 24, 3);
  detailX.position(100, height + 5);
  detailX.style('width', '80px');
  detailY = createSlider(3, 16, 3);
  detailY.position(10, height + 5);
  detailY.style('width', '80px');
}

function draw() {
  let locX = mouseX - height / 7;
  let locY = mouseY - width / 7;

  ambientLight(50);
  directionalLight(255, 0, 0, 0.25, 0.25, 0);
  pointLight(0, 0, 255, locX, locY, 250);


  ambientMaterial(250);
  background(205);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  torus(250, 35, detailX.value() ,detailY.value());
  rotateX(frameCount * 0.02);
  rotateY(frameCount * 0.02);
  torus(175, 35, detailX.value() ,detailY.value());
  rotateX(frameCount * 0.03);
  rotateY(frameCount * 0.03);
  torus(100, 35, detailX.value() ,detailY.value());
  rotateX(frameCount * 0.04);
  rotateY(frameCount * 0.04);
  torus(40, 25, detailX.value() ,detailY.value());
  rotateX(frameCount * 0.04);
  rotateY(frameCount * 0.04);
  torus(5, 5, detailX.value() ,detailY.value());
}