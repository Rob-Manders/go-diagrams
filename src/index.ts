import './style.scss'
import { drawLines } from './drawLines'
import { createCanvas } from './createCanvas'
import { getMousePosition } from './getMousePosition'
import { drawStone } from './drawStone'
import { Stone } from './diagram/interfaces'
import { removeArrayElement } from './util/removeArrayElement'
import { Board } from './interfaces'

const board = {
  dimensions: 700,
  size: 13
}

let stones: Stone[] = []

let stoneColour: 'black' | 'white' = 'black'
let mode: 'add' | 'remove' = 'add'

const { canvas, ctx } = createCanvas('canvas', board.dimensions)

drawLines(ctx, board)

canvas.addEventListener('click', event => {
  const { mouseX, mouseY } = getMousePosition(event, canvas, board)

  if (mode === 'add') addStone(mouseX, mouseY, stoneColour)
  if (mode === 'remove') removeStone(mouseX, mouseY)

  refreshCanvas(board)
})

const toggleColourButton = document.createElement('button')
toggleColourButton.setAttribute('id', 'toggleColourButton')
toggleColourButton.innerText = stoneColour.toUpperCase()
document.body.appendChild(toggleColourButton)

const toggleModeButton = document.createElement('button')
toggleModeButton.setAttribute('id', 'toggleModeButton')
toggleModeButton.innerText = mode.toUpperCase()
document.body.appendChild(toggleModeButton)

toggleColourButton.addEventListener('click', () => {
  stoneColour = stoneColour === 'black' ? 'white' : 'black'

  toggleColourButton.innerText = stoneColour.toUpperCase()
})

toggleModeButton.addEventListener('click', () => {
  mode = mode === 'add' ? 'remove' : 'add'

  toggleModeButton.innerText = mode.toUpperCase()
})

// Removing stones will mean refreshing canvas on each draw.
// Must store stone positions so previous stones can be redrawn.

function addStone(x: number, y: number, colour: 'black' | 'white') {
  const existingStone = stones.find(stone => stone.x === x && stone.y === y)

  console.log(existingStone)

  if (!existingStone) stones.push({ x, y, colour })

  console.log(stones)
}

function removeStone(x: number, y: number) {
  const index = stones.findIndex(stone => {
    if (stone.x === x && stone.y === y) return true

    return false
  })

  if (!index) return

  if (stones.length === 1) stones.pop()
  else stones.splice(index, 1)

  console.log(stones)
}

function refreshCanvas(board: Board) {
  ctx.resetTransform()
  ctx.clearRect(0, 0, board.dimensions, board.dimensions)

  drawLines(ctx, board)

  stones.forEach(stone => {
    drawStone(ctx, board, stone.x, stone.y, stone.colour)
  })
}
