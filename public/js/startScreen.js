// show the start screen
function startScreen() {
  removeElements()
  background(screenColour)
  var name = 'SNAKE'
  textSize(50)
  fill(snakeColour)
  var nameWidth = textWidth(name)
  text(name, (width - nameWidth)/2, height/2 - 40)

  var startBtn = createButton('Start Game')
  startBtn.position(width/2 - startBtn.width/2, height/2)
  startBtn.mousePressed(initGame)

  var highscoreBtn = createButton('High Scores')
  highscoreBtn.position(width/2 - startBtn.width/2, height/2+100)
  highscoreBtn.mousePressed(highscore)
  noLoop()
}

function highscore() {
  removeElements()
  background(screenColour)
  var scoreMsg = 'HIGH SCORES'
  textSize(50)
  fill(snakeColour)
  var scoreMsgWidth = textWidth(scoreMsg)
  text(scoreMsg, (width - scoreMsgWidth)/2, height/2 - 200)

  var backBtn = createButton('back')
  backBtn.position(width/2 - backBtn.width/2, height/2 + 140)
  backBtn.mousePressed(startScreen)

  getScores()

  noLoop()
}

function getScores() {

  var ref = db.ref("scores").orderByChild("score").limitToLast(10)
  ref.once("value")
    .then(function(snapshot) {
      console.log('val', snapshot.val())

      var scores = snapshot.val()
      var scoresArray = Object.keys(scores).map((key) => {
        return scores[key]
      }).sort((scoreA, scoreB) => scoreA.score < scoreB.score)

      console.log('arr', scoresArray)

      scoresArray.forEach((score, index) => {
        textSize(25)
        fill(snakeColour)
        var scoreText = `${score.score}     ${score.name}`
        var scoreWidth = textWidth(scoreText)
        text(scoreText, (width - 55)/2, height/2 - 140 + index*30)
      })
    });
}
