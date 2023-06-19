import './style.scss'
import { createCanvas } from './canvas/createCanvas'
import { getMousePosition } from './util/getMousePosition'
import { IDiagram } from './interfaces'
import { createToolbar } from './dom/createToolbar'
import { Mode, StoneColour } from './types'
import { DiagramEditor } from './diagram/DiagramEditor'

let diagram: IDiagram = {
  board: {
    size: 13
  },
  positions: [{ stones: [] }]
}

const canvasDimensions = 700
const canvas = createCanvas('canvas', canvasDimensions)

const diagramEditor = new DiagramEditor(canvas, canvasDimensions, diagram)

let stoneColour: StoneColour = StoneColour.BLACK
let mode: Mode = 'add'

const {
  toggleColourButton,
  toggleModeButton,
  addPositionButton,
  previousPositionButton,
  nextPositionButton,
  deletePositionButton
} = createToolbar(stoneColour, mode)

diagramEditor.init()

canvas.addEventListener('mousemove', event => {
  const { mouseX, mouseY } = getMousePosition(event, canvas, canvasDimensions, diagram.board)

  const deleteMode = mode === 'remove' ? true : false

  diagramEditor.drawGhost(mouseX, mouseY, deleteMode)
})

canvas.addEventListener('mouseleave', () => diagramEditor.refreshCanvas())

canvas.addEventListener('click', event => {
  const { mouseX, mouseY } = getMousePosition(event, canvas, canvasDimensions, diagram.board)

  if (mode === 'add') diagramEditor.addStone(mouseX, mouseY)
  if (mode === 'remove') diagramEditor.removeStone(mouseX, mouseY)
})

toggleColourButton.addEventListener('click', () => {
  const stoneColour = diagramEditor.getStoneColour()

  if (stoneColour === StoneColour.BLACK) diagramEditor.setStoneColour(StoneColour.WHITE)
  else diagramEditor.setStoneColour(StoneColour.BLACK)

  toggleColourButton.innerText = diagramEditor.getStoneColour().toUpperCase()
})

toggleModeButton.addEventListener('click', () => {
  mode = mode === 'add' ? 'remove' : 'add'

  toggleModeButton.innerText = mode.toUpperCase()
})

addPositionButton.addEventListener('click', () => diagramEditor.addPosition())
deletePositionButton.addEventListener('click', () => diagramEditor.deletePosition())

nextPositionButton.addEventListener('click', () => diagramEditor.nextPosition())
previousPositionButton.addEventListener('click', () => diagramEditor.previousPosition())
