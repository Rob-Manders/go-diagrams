import './style.scss'
import { drawLines } from './drawLines'
import { createCanvas } from './createCanvas'
import { getMousePosition } from './getMousePosition'

const board = {
  dimensions: 700,
  size: 13
}

const { canvas, ctx } = createCanvas('canvas', board.dimensions)

drawLines(ctx, board.dimensions, board.size)

const mousePosReadout = document.createElement('h3')
mousePosReadout.setAttribute('id', 'mousePosReadout')
document.body.appendChild(mousePosReadout)

canvas.addEventListener('mousemove', event => {
  const { mouseX, mouseY } = getMousePosition(event, canvas, board)

  mousePosReadout.innerText = `X: ${mouseX} - Y: ${mouseY}`
})
