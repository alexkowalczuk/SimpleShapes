function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  textSize(40); //font size of our text
  textAlign(CENTER); //align of the text
  //rectMode(CENTER);
 }

// Draw code goes here
function draw() {
  background(211, 211, 211); //color of the background
  fill(0); //color of the text

  fill(204, 101, 192, 127);
  rect(600, 80, 100, 100, 20);

  fill('lightgreen');
  triangle(900, 200, 800, 200, 850, 700); 

  fill('red');
  arc(1000, 50, 80, 80, 0, PI + QUARTER_PI, CHORD);

  fill('yellow');
  circle(1100, 300, 200);

  fill('purple');
  quad(1100, 100, 1400, 200, 1300, 450, 1400, 540, 1100, 700);

  fill('black');
  square(1000, 550, 300);

  drawHouse();

  flower();

  weird();

  picasso();

}

//Function that create small house
function drawHouse() {
	fill('orange');
	translate(10, 10);
	triangle(15, 0, 0, 15, 30, 15);
	rect(0, 15, 30, 25);
	rect(12, 30, 10, 10);
}

//Function that create us flower
function flower() {
  fill('blue');	
  translate(100, 100);
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 30, 20, 80);
    rotate(PI/5);
  }
}

//Function that creates kind of weird flower with circles
function weird() {
	translate(250, 80);
	noStroke();
	for (let x = 0; x < 10; x ++) {
		fill(67,84,90);
		// x y width height 
		ellipse(90, 50, 70, 30);
		rotate(PI/5);
	}
}
//Function that draws us some cool art, called it picasso 
function picasso(){
	fill(0, 10);
	stroke(0, 160);
	
	translate(10, 400);
	
	for (var i=0; i < 30; i++) {
		push();
		rotate(i / 5.0);
		scale(i / 8.0);
		triangle(0, -100, -10, 100, 10, 100);
		pop();
	}
}