import { IBoard } from '../../interfaces'
import { StoneColour } from '../../types'

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

  switch (colour) {
    case StoneColour.BLACK:
      fillColour = `rgba(0, 0, 0, ${opacity})`
      break
    case StoneColour.WHITE:
      fillColour = `rgba(255, 255, 255, ${opacity})`
      break
    case StoneColour.RED:
      fillColour = `rgba(180, 0, 0, ${opacity})`
      break
  }

  ctx.beginPath()
  ctx.arc(xPos, yPos, halfSquareSize, 0, 2 * Math.PI)
  ctx.fillStyle = fillColour
  ctx.fill()
}
