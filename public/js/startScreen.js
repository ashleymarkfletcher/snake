// show the start screen
function startScreen() {
  removeElements()
  background(screenColour)
  const name = 'SNAKE'
  textSize(50)
  fill(snakeColour)
  const nameWidth = textWidth(name)
  text(name, (width - nameWidth)/2, height/2 - 40)

  const startBtn = createButton('START GAME')
  startBtn.position(width/2 - startBtn.width/2, height/2)
  startBtn.mousePressed(initGame)
  startBtn.style('background', '#2D4606')
  startBtn.style('color', '#86B101')
  startBtn.style('border', '2px solid #2D4606')

  const highscoreBtn = createButton('High Scores')
  highscoreBtn.position(width/2 - highscoreBtn.width/2, height/2+100)
  highscoreBtn.mousePressed(highscore)

  highscoreBtn.style('background', '#2D4606')
  highscoreBtn.style('color', '#86B101')
  highscoreBtn.style('border', '2px solid #2D4606')

  noLoop()
}

function highscore() {
  removeElements()
  background(screenColour)
  const scoreMsg = 'HIGH SCORES'
  textSize(50)
  fill(snakeColour)
  const scoreMsgWidth = textWidth(scoreMsg)
  text(scoreMsg, (width - scoreMsgWidth)/2, height/2 - 200)

  const backBtn = createButton('back')
  backBtn.position(width/2 - backBtn.width/2, height/2 + 140)
  backBtn.mousePressed(startScreen)

  backBtn.style('background', '#2D4606')
  backBtn.style('color', '#86B101')
  backBtn.style('border', '2px solid #2D4606')

  getScores()

  noLoop()
}

function getScores() {

  var ref = db.ref("scores").orderByChild("score").limitToLast(10)
  ref.once("value")
  .then((snapshot) => {
    console.log('val', snapshot.val())

    const scores = snapshot.val()
    const scoresArray = Object.keys(scores).map((key) => {
      return scores[key]
    }).sort((scoreA, scoreB) => scoreA.score < scoreB.score)

    scoresArray.forEach((score, index) => {
      textSize(25)
      fill(snakeColour)
      const scoreText = `${score.score}     ${score.name}`
      const scoreWidth = textWidth(scoreText)
      text(scoreText, (width - 55)/2, height/2 - 140 + index*30)
    })
  })
}
