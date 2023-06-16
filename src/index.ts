import './style.scss'
import { drawLines } from './drawLines'
import { createCanvas } from './createCanvas'
import { getMousePosition } from './getMousePosition'
import { drawStone } from './drawStone'

const board = {
  dimensions: 700,
  size: 13
}

let stoneColour: 'black' | 'white' = 'black'

const { canvas, ctx } = createCanvas('canvas', board.dimensions)

drawLines(ctx, board)

canvas.addEventListener('click', event => {
  const { mouseX, mouseY } = getMousePosition(event, canvas, board)

  drawStone(ctx, board, mouseX, mouseY, stoneColour)
})

const toggleColourButton = document.createElement('button')
toggleColourButton.setAttribute('id', 'toggleColourButton')
toggleColourButton.innerText = stoneColour.toUpperCase()
document.body.appendChild(toggleColourButton)

toggleColourButton.addEventListener('click', () => {
  stoneColour = stoneColour === 'black' ? 'white' : 'black'

  toggleColourButton.innerText = stoneColour.toUpperCase()
})

// Removing stones will mean refreshing canvas on each draw.
// Must store stone positions so previous stones can be redrawn.
