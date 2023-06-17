import { drawLines } from './drawLines'
import { drawStone } from './drawStone'
import { Board, Stone } from '../interfaces'

export function refreshCanvas(ctx: CanvasRenderingContext2D, stones: Stone[], board: Board) {
  ctx.clearRect(0, 0, board.dimensions, board.dimensions)

  drawLines(ctx, board)

  stones.forEach(stone => {
    drawStone(ctx, board, stone.x, stone.y, stone.colour)
  })
}
