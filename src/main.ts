import './assets/style.css'

import { createCanvas, drawLines, drawStarPoints } from './modules/canvas'

const board =  {
    size: 13
  }

const canvasDimensions = 700
const canvas = createCanvas('canvas', canvasDimensions)
const canvasContext = canvas.getContext('2d')!

canvasContext.clearRect(0, 0, canvasDimensions, canvasDimensions)

drawLines(canvasContext, canvasDimensions, board)
drawStarPoints(canvasContext, canvasDimensions, board)
