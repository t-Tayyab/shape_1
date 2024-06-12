function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  circle(100, 100, 50);
  
  ellipse(200, 100, 80, 50);
  
  line(50, 200, 150, 300);
  
  point(200, 200);
  
  rect(250, 50, 80, 40);
  
  square(300, 150, 70);
    
  quad(200, 300, 250, 350, 250, 250, 250, 250);
  
  arc(350, 300, 80, 80, 0, PI / 2);
}
