import { drawLines } from './drawLines'
import { drawStone } from './drawStone'
import { IBoard, IStone } from '../interfaces'
import { drawStarPoints } from './drawStarPoints'

export function refreshCanvas(ctx: CanvasRenderingContext2D, stones: IStone[], board: IBoard) {
  ctx.clearRect(0, 0, board.dimensions, board.dimensions)

  drawLines(ctx, board)
  drawStarPoints(ctx, board)

  stones.forEach(stone => {
    drawStone(ctx, board, stone.x, stone.y, stone.colour)
  })
}
