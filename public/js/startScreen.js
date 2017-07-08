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
