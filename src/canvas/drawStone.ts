import { IBoard } from '../interfaces'
import { StoneColour } from '../types'

export function drawStone(
  ctx: CanvasRenderingContext2D,
  canvasDimensions: number,
  board: IBoard,
  x: number,
  y: number,
  colour: StoneColour
): void {
  const squareSize = canvasDimensions / board.size
  const halfSquareSize = squareSize / 2

  const xPos = halfSquareSize + squareSize * x - squareSize
  const yPos = halfSquareSize + squareSize * y - squareSize

  const fillColour = colour === 'black' ? '#000000' : '#ffffff'

  ctx.beginPath()
  ctx.arc(xPos, yPos, halfSquareSize, 0, 2 * Math.PI)
  ctx.fillStyle = fillColour
  ctx.fill()
}
