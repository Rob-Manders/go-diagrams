import { IBoard, IStone } from '../../interfaces'
import { drawLines } from './drawLines'
import { drawStone } from './drawStone'
import { drawStarPoints } from './drawStarPoints'

export function refreshCanvas(
  ctx: CanvasRenderingContext2D,
  canvasDimensions: number,
  stones: IStone[],
  board: IBoard
) {
  ctx.clearRect(0, 0, canvasDimensions, canvasDimensions)

  drawLines(ctx, canvasDimensions, board)
  drawStarPoints(ctx, canvasDimensions, board)

  stones.forEach(stone => {
    drawStone(ctx, canvasDimensions, board, stone.x, stone.y, stone.colour)
  })
}
