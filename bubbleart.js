
function setup()  {
createCanvas(1348,608);
background(200);
frameRate(100);

}

function redbubble() {
fill(color="#8d3b49");
ellipse(random(width),random(height),50,50);
}

function bluebubble() {
fill(color="#19314d");
ellipse(random(width),random(height),50,50);
}


function draw(){
let x = random(0,1);
if(x > 0.5) {
redbubble();
}
else {
bluebubble();
}}

