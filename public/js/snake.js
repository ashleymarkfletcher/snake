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
  }

  this.display = function() {

    fill(snakeColour)
    for (i = 0; i < this.tail.length; i ++) {
      rect(this.tail[i].x, this.tail[i].y, scl, scl)

    }

    rect(this.x, this.y, scl, scl)
  }

  this.dir = function (x, y) {
    if (x != this.xspeed * -1 && y != this.yspeed * -1) {
      this.xspeed = x
      this.yspeed = y
    }
  }

  this.eat = function (pos) {
    return this.x == pos.x && this.y == pos.y;
  }

  this.dead = function () {
    // check for hitting edges
    if(this.x >= width || this.y >= height || this.x < 0 || this.y < 0){
      gameState = 'end';
    }

    // check for hitting tail
    for (var i = 0; i <  this.tail.length; i++) {
       if (this.tail[i].x == this.x && this.tail[i].y == this.y) {
         gameState = 'end'
       }
    }
  }
}
