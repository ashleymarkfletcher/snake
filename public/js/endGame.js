var name

// game over screen
function endGame(){
	background(screenColour);
	textSize(32);
	const msg = 'Game Over';
	const score = 'Your Score is ' + snake.tail.length;
  const nameMessage = 'Enter Your Name';

	const msgWidth = textWidth(msg);
	const scoreWidth = textWidth(score);
	const nameMessageWidth = textWidth(nameMessage);

	fill(snakeColour);
	text(msg, (width - msgWidth)/2, height/2 - 140);
	text(score, (width - scoreWidth)/2, height/2 - 100);

  text(nameMessage, (width - nameMessageWidth)/2, height/2);

  const inp = createInput('');
  inp.input(myInputEvent);
  inp.position(width/2 - inp.width/2, height/2 + 40);
	inp.attribute("maxlength", "4");

	inp.style('background', '#86B101')
	inp.style('color', '#2D4606')
	inp.style('border', '2px solid #2D4606')
	inp.style('outline', 'none')

  const saveName = createButton('SAVE SCORE');
  saveName.position(width/2 - saveName.width/2, height/2 + 90);
  saveName.mousePressed(saveScore);

	saveName.style('background', '#2D4606')
	saveName.style('color', '#86B101')
	saveName.style('border', '2px solid #2D4606')
	noLoop();
}

function myInputEvent(){
  console.log('you are typing: ', this.value());
  name = this.value()
}

function saveScore() {
  const ref = db.ref("scores");

  ref.push({
    "name": name,
    "score": snake.tail.length
  }).catch((err) => {console.log('err', err);});
  startScreen()
}
