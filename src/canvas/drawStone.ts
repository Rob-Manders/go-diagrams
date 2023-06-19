import { IBoard } from '../interfaces'
import { StoneColour } from '../types'

export function drawStone(
  ctx: CanvasRenderingContext2D,
  canvasDimensions: number,
  board: IBoard,
  x: number,
  y: number,
  colour: StoneColour,
  ghost?: boolean
): void {
  const squareSize = canvasDimensions / board.size
  const halfSquareSize = squareSize / 2

  const xPos = halfSquareSize + squareSize * x - squareSize
  const yPos = halfSquareSize + squareSize * y - squareSize

  const opacity = ghost ? '0.5' : '1'
  let fillColour: string

  if (colour === 'black') fillColour = `rgba(0, 0, 0, ${opacity})`
  if (colour === 'white') fillColour = `rgba(255, 255, 255, ${opacity})`
  if (colour === 'red') fillColour = `rgba(255, 0, 0, ${opacity})`

  ctx.beginPath()
  ctx.arc(xPos, yPos, halfSquareSize, 0, 2 * Math.PI)
  ctx.fillStyle = fillColour
  ctx.fill()
}
