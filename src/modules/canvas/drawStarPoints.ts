import { IBoard } from '../../interfaces'

interface Coord {
  x: number
  y: number
}

const starPointPositions: { [key: string]: Coord[] } = {
  '9x9': [
    { x: 3, y: 3 },
    { x: 7, y: 3 },
    { x: 5, y: 5 },
    { x: 3, y: 7 },
    { x: 7, y: 7 }
  ],
  '13x13': [
    { x: 4, y: 4 },
    { x: 10, y: 4 },
    { x: 7, y: 7 },
    { x: 4, y: 10 },
    { x: 10, y: 10 }
  ],
  '19x19': [
    { x: 4, y: 4 },
    { x: 10, y: 4 },
    { x: 16, y: 4 },
    { x: 4, y: 10 },
    { x: 10, y: 10 },
    { x: 16, y: 10 },
    { x: 4, y: 16 },
    { x: 10, y: 16 },
    { x: 16, y: 16 }
  ]
}

export function drawStarPoints(ctx: CanvasRenderingContext2D, canvasDimensions: number, board: IBoard): void {
  const boardDimensions = `${board.size.toString()}x${board.size.toString()}`

  if (!boardDimensions) return

  const coords = starPointPositions[boardDimensions]

  coords.forEach(coord => {
    const squareSize = canvasDimensions / board.size
    const halfSquareSize = squareSize / 2

    const xPos = halfSquareSize + squareSize * coord.x - squareSize
    const yPos = halfSquareSize + squareSize * coord.y - squareSize

    ctx.beginPath()
    ctx.arc(xPos, yPos, halfSquareSize / 5, 0, 2 * Math.PI)
    ctx.fillStyle = '#000000'
    ctx.fill()
  })
}
