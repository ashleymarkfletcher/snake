var snake
var scl = 20
var food

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
  snake = new Snake()

  pickLocation()
}

function draw() {
  // background(211, 242, 236);
  // background(240, 240, 240);
  background(51, 77, 162);


  if (snake.eat(food)) {
    snake.total ++
    pickLocation()
  }

  snake.dead()
  snake.update()
  snake.display()

  rect(food.x, food.y, scl, scl)
}

function Snake() {
  this.x = 0
  this.y = 0
  this.xspeed = 1
  this.yspeed = 0
  this.total = 0
  this.tail = []

  this.update = function () {
    if (this.total === this.tail.length) {
      for (i = 0; i < this.tail.length-1; i ++) {
        this.tail[i] = this.tail[i+1]
      }
    }
    this.tail[this.total-1] = createVector(this.x, this.y)

    this.x += this.xspeed * scl
    this.y += this.yspeed * scl

    this.x = constrain(this.x, 0, width-scl)
    this.y = constrain(this.y, 0, height-scl)
  }

  this.display = function() {

    fill(255)
    for (i = 0; i < this.tail.length; i ++) {
      rect(this.tail[i].x, this.tail[i].y, scl, scl)

    }

    rect(this.x, this.y, scl, scl)
  }

  this.dir = function (x, y) {
    this.xspeed = x
    this.yspeed = y
  }

  this.eat = function (pos) {
    var d = dist(this.x, this.y, pos.x, pos.y)
    return (d <= 1 )
  }

  this.dead = function () {
    for (var i = 0; i <  this.tail.length; i++) {
       var pos = this.tail[i]
       var d = dist(this.x, this.y, pos.x, pos.y)

       if (d<1) {
         this.total = 0
         this.tail = []
       }
    }
  }
}

function pickLocation(){
  var cols = floor(width/scl)
  var rows = floor(height/scl)

  food = createVector(floor(random(cols)), floor(random(rows)), scl, scl)
  food.mult(scl)
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
