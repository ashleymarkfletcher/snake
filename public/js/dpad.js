function dpad (direction) {
  switch(direction) {
    case 'up': {
      console.log('up')
      snake.dir(0, -1)
      break;
    }
    case 'down': {
      console.log('down')
      snake.dir(0, 1)
      break;
    }
    case 'left': {
      console.log('left')
      snake.dir(-1, 0)
      break;
    }
    case 'right': {
      console.log('right')
      snake.dir(1, 0)
      break;
    }
  }
}
