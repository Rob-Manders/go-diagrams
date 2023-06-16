import { Board } from './interfaces'

export function drawStone(
  ctx: CanvasRenderingContext2D,
  board: Board,
  x: number,
  y: number,
  colour: 'black' | 'white'
): void {
  const squareSize = board.dimensions / board.size
  const halfSquareSize = squareSize / 2

  const xPos = halfSquareSize + squareSize * x - squareSize
  const yPos = halfSquareSize + squareSize * y - squareSize

  const fillColour = colour === 'black' ? '#000000' : '#ffffff'

  ctx.beginPath()
  ctx.arc(xPos, yPos, halfSquareSize, 0, 2 * Math.PI)
  ctx.fillStyle = fillColour
  ctx.fill()
}
