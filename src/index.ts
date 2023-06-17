import './style.scss'
import { drawLines } from './canvas/drawLines'
import { createCanvas } from './canvas/createCanvas'
import { getMousePosition } from './util/getMousePosition'
import { Stone } from './interfaces'
import { addStone } from './canvas/addStone'
import { removeStone } from './canvas/removeStone'
import { refreshCanvas } from './canvas/refreshCanvas'
import { createToolbar } from './createToolbar'
import { Mode, StoneColour } from './types'

const board = {
  dimensions: 700,
  size: 13
}

let stones: Stone[] = []

let stoneColour: StoneColour = 'black'
let mode: Mode = 'add'

const { canvas, ctx } = createCanvas('canvas', board.dimensions)
const { toggleColourButton, toggleModeButton } = createToolbar(stoneColour, mode)

drawLines(ctx, board)

canvas.addEventListener('click', event => {
  const { mouseX, mouseY } = getMousePosition(event, canvas, board)

  if (mode === 'add') addStone(stones, mouseX, mouseY, stoneColour)
  if (mode === 'remove') removeStone(stones, mouseX, mouseY)

  refreshCanvas(ctx, stones, board)
})

toggleColourButton.addEventListener('click', () => {
  stoneColour = stoneColour === 'black' ? 'white' : 'black'

  toggleColourButton.innerText = stoneColour.toUpperCase()
})

toggleModeButton.addEventListener('click', () => {
  mode = mode === 'add' ? 'remove' : 'add'

  toggleModeButton.innerText = mode.toUpperCase()
})
