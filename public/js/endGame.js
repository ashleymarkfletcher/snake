var name

// game over screen
function endGame(){
	background(screenColour);
	textSize(32);
	var msg = 'Game Over';
	var score = 'Your Score is ' + snake.tail.length;
  var nameMessage = 'Enter Your Name';

	msgWidth = textWidth(msg);
	scoreWidth = textWidth(score);
	fill(snakeColour);
	text(msg, (width - msgWidth)/2, height/2 - 40);
	text(score, (width - scoreWidth)/2, height/2);
	var startBtn = createButton('Restart Game');
	startBtn.position(width/2 - startBtn.width/2, height/2 + 40);
	startBtn.mousePressed(startScreen);

  text(nameMessage, width/2, height/2 + 70);

  var inp = createInput('');
  inp.input(myInputEvent);
  inp.position(width/2 - inp.width/2, height/2 + 100);

  var saveName = createButton('Save');
  saveName.position(width/2 - saveName.width/2, height/2 + 130);
  saveName.mousePressed(saveScore);
	noLoop();
}

function myInputEvent(){
  console.log('you are typing: ', this.value());
  name = this.value()
}

function saveScore() {
  var ref = db.ref("scores");
  ref.push({
    name: name,
    score: snake.tail.length
  });
  startScreen()
}
