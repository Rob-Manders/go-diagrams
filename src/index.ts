import './style.scss'
import { drawLines } from './canvas/drawLines'
import { createCanvas } from './canvas/createCanvas'
import { getMousePosition } from './util/getMousePosition'
import { Diagram } from './interfaces'
import { addStone } from './canvas/addStone'
import { removeStone } from './canvas/removeStone'
import { refreshCanvas } from './canvas/refreshCanvas'
import { createToolbar } from './createToolbar'
import { Mode, StoneColour } from './types'
import { drawStarPoints } from './canvas/drawStarPoints'

let diagram: Diagram = {
  board: {
    dimensions: 700,
    size: 13
  },
  positions: [{ stones: [] }]
}

let currentPosition = 0

let stoneColour: StoneColour = 'black'
let mode: Mode = 'add'

const { canvas, ctx } = createCanvas('canvas', diagram.board.dimensions)
const {
  toggleColourButton,
  toggleModeButton,
  addPositionButton,
  previousPositionButton,
  nextPositionButton,
  deletePositionButton
} = createToolbar(stoneColour, mode)

drawLines(ctx, diagram.board)
drawStarPoints(ctx, diagram.board)

canvas.addEventListener('click', event => {
  const { mouseX, mouseY } = getMousePosition(event, canvas, diagram.board)

  if (mode === 'add') addStone(diagram.positions[currentPosition].stones, mouseX, mouseY, stoneColour)
  if (mode === 'remove') removeStone(diagram.positions[currentPosition].stones, mouseX, mouseY)

  refreshCanvas(ctx, diagram.positions[currentPosition].stones, diagram.board)
})

toggleColourButton.addEventListener('click', () => {
  stoneColour = stoneColour === 'black' ? 'white' : 'black'

  toggleColourButton.innerText = stoneColour.toUpperCase()
})

toggleModeButton.addEventListener('click', () => {
  mode = mode === 'add' ? 'remove' : 'add'

  toggleModeButton.innerText = mode.toUpperCase()
})

addPositionButton.addEventListener('click', () => {
  diagram.positions.push({ stones: [] })
  currentPosition++
  refreshCanvas(ctx, diagram.positions[currentPosition].stones, diagram.board)
})

deletePositionButton.addEventListener('click', () => {
  if (currentPosition === 0 && diagram.positions.length === 1) {
    diagram.positions[0] = {
      stones: []
    }

    refreshCanvas(ctx, diagram.positions[currentPosition].stones, diagram.board)

    return
  }

  diagram.positions.splice(currentPosition, 1)

  if (currentPosition === 0) currentPosition = 0
  else currentPosition--

  refreshCanvas(ctx, diagram.positions[currentPosition].stones, diagram.board)
})

previousPositionButton.addEventListener('click', () => {
  if (currentPosition === 0) return

  currentPosition--
  refreshCanvas(ctx, diagram.positions[currentPosition].stones, diagram.board)
})

nextPositionButton.addEventListener('click', () => {
  if (currentPosition === diagram.positions.length - 1) return

  currentPosition++
  refreshCanvas(ctx, diagram.positions[currentPosition].stones, diagram.board)
})
