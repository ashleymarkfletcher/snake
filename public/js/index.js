var snake
var scl = 20
var food
var gameState = 'start';
var screenColour = [134, 177, 1]
var snakeColour = [45, 70, 6]

function setup() {
  createCanvas(500, 500);
  // background(211, 242, 236);
  // // stroke(0)
  // stroke(211, 242, 236)
  // strokeWeight(7)
  // // strokeCap(ROUND);
  // strokeCap(SQUARE)
  // rectMode(CENTER)
  frameRate(10)
  // snake = new Snake()
  noStroke()


}

function draw() {
  // background(211, 242, 236);
  // background(240, 240, 240);
  background(screenColour);

  if (gameState === 'start') {
    startScreen()
  }
  else if (gameState === 'play') {
    runGame()
  }
  else if (gameState === 'end') {
    endGame()
  }

}

// game running
function runGame() {
  if (snake.eat(food)) {
    snake.total ++
    pickLocation()
  }

  snake.dead()
  snake.update()
  snake.display()

  showFood()
}

// start playing the game
function initGame() {
	removeElements()
	gameState = 'play'
	snake = new Snake()
  pickLocation()
	loop()
}

// show the start screen
function startScreen() {
  removeElements()
  background(screenColour);
  var name = 'SNAKE';
  textSize(50);
  fill(snakeColour);
  nameWidth = textWidth(name);
  text(name, (width - nameWidth)/2, height/2 - 40);
  startBtn = createButton('Start Game');
  startBtn.position(width/2 - startBtn.width/2, height/2);
  startBtn.mousePressed(initGame);
  noLoop();
}

// game over screen
function endGame(){
	background(screenColour);
	textSize(32);
	var msg = 'Game Over';
	var score = 'Your Score is ' + snake.tail.length;
	msgWidth = textWidth(msg);
	scoreWidth = textWidth(score);
	fill(snakeColour);
	text(msg, (width - msgWidth)/2, height/2 - 40);
	text(score, (width - scoreWidth)/2, height/2);
	startBtn = createButton('Restart Game');
	startBtn.position(width/2 - startBtn.width/2, height/2 + 40);
	startBtn.mousePressed(startScreen);
	noLoop();
}

// pick the random location for food
function pickLocation(){
  var cols = floor(width/scl)
  var rows = floor(height/scl)

  food = createVector(floor(random(cols)), floor(random(rows)), scl, scl)
  food.mult(scl)
}

// display the food
function showFood() {
  var third = scl * 0.3
  var twoThirds = scl * 0.6
  rect(food.x + third, food.y, third, third)
  rect(food.x, food.y + third, third, third)
  rect(food.x + third, food.y + twoThirds, third, third)
  rect(food.x + twoThirds, food.y + third, third, third)
}

function keyPressed() {
  if ( keyCode === UP_ARROW ) {
    snake.dir(0, -1)
  } else if ( keyCode === DOWN_ARROW ) {
    snake.dir(0, 1)
  } else if ( keyCode === LEFT_ARROW ) {
   snake.dir(-1, 0)
  } else if ( keyCode === RIGHT_ARROW ) {
   snake.dir(1, 0)
  }
}

function windowResized() {
  resizeCanvas(500, 500);
  background(51, 77, 162);
}
