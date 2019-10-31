function setup() { 
  createCanvas(400, 400);
} 

function draw() { 
  background(50);
  fill (random(255), random(192), random(255));
  stroke(0, 192);
  strokeWeight(2);
  // nested for loop to draw something in a grid
  // every spacing pixels on the canvas
  let spacing = 20;
  for (let i = spacing/2; i < width; i += spacing) {
    for (let j = spacing/2; j < height; j += spacing) {
      // what goes in here: use the i and j
      // values to write some kind of expression
      // that evaluates to a value that you can use
      // to determine what the ellipse at this
      // position looks like. one idea: distance
      // from mouse.
      
      let d = dist(mouseX, mouseY, i, j);
      ellipse(i, j, d * 0.1);
      
      
      // another idea: sin(i)/cos(j) that changes
      // with framecount. (values 0.01 and 0.02
      // are arbitrarily chosen, change them to see
      // what happens!)
      /*
      let sinVal = sin((frameCount * 0.01) + (i * 0.02));
      let cosVal = cos((frameCount * 0.01) + (j * -0.02));
      let elSize = map(sinVal * cosVal, -1, 1, 0, 40);
      ellipse(i, j, elSize);
      */
      
      // another idea: use p5js's noise() function to
      // set the size of the ellipse to a random value
      // using Perlin noise (a kind of smooth randomness).
      // (again, 0.01 and 0.02 are arbitrarily chosen, 
      // change them to see what happens)
      /*
      let pnoiseVal = noise(i * 0.02,
                            j * 0.02,
                            frameCount * 0.01);
      ellipse(i, j, pnoiseVal * 50);
      */
      
      // you can do things other than just setting the size
      // of the ellipse! using an if/else if/else block,
      // you can maybe draw different shapes based on 
      // the value for this i, j position, e.g. (again
      // using perlin noise):
      /*
      let pnoiseVal = noise(i * 0.01,
                            j * 0.01,
                            frameCount * 0.005);
      
      if (pnoiseVal < 0.4) {
        noFill();
        stroke(255);
        strokeWeight(2);
        ellipse(i, j, 20);
      }
      else if (pnoiseVal < 0.6) {
        stroke(255);
        strokeWeight(2);
        line(i - (spacing/2), j - (spacing/2),
             i + (spacing/2), j + (spacing/2));
      }
      else {
        stroke(255);
        strokeWeight(6);
        line(i + (spacing/4), j - (spacing/4),
             i - (spacing/4), j + (spacing/4));
      }*/
      // experiment! also nothing is stopping you from
      // combining these techniques (e.g., try to make
      // something that uses the mouse position AND perlin
      // noise).
    }
  }
}