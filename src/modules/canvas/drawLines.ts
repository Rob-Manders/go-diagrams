import { IBoard } from '../../interfaces'

export function drawLines(ctx: CanvasRenderingContext2D, canvasDimensions: number, board: IBoard): void {
  const squareSize = canvasDimensions / board.size
  const startPos = squareSize / 2
  const endPos = canvasDimensions - squareSize / 2

  let x = startPos
  let y = startPos

  drawLine(ctx, startPos, y, endPos, y)

  for (let i = 1; i < board.size; i++) {
    y += squareSize
    drawLine(ctx, startPos, y, endPos, y)
  }

  drawLine(ctx, x, startPos, x, endPos)

  for (let i = 1; i < board.size; i++) {
    x += squareSize
    drawLine(ctx, x, startPos, x, endPos)
  }
}

function drawLine(ctx: CanvasRenderingContext2D, startX: number, startY: number, endX: number, endY: number) {
  ctx.beginPath()
  ctx.moveTo(startX, startY)
  ctx.lineTo(endX, endY)
  ctx.stroke()
}
