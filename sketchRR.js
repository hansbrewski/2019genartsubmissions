function setup(){
	createCanvas(400,400);
background(135, 202, 250);}

function draw(){
// The ground
fill(36, 255, 62);
rect(0, 300, 400, 100);

//The sun
fill(235, 207, 29);
ellipse(80, 64, 100, 100);

// The snowman
fill(255, 255, 255);
ellipse(200, 300, 150, 150);
ellipse(200, 200, 100, 100);
ellipse(200, 120, 75, 75);

// Hat
fill(5, 0, 0);
rect(152,74,94,18);
rect(177,22,47,53);

//arms
line(239,169,334,125);
line(161,169,100,123);}