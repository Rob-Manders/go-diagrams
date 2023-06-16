import './style.scss'
import { drawLines } from './drawLines'
import { createCanvas } from './createCanvas'

const board = {
  dimensions: 700,
  size: 13
}

const ctx = createCanvas('canvas', board.dimensions)

drawLines(ctx, board.dimensions, board.size)
