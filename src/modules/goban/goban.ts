import { IBoard, IStone } from "../../interfaces"
import { StoneColour } from "../../types"
import { starPointPositions } from "./data"

export class Goban {
  private canvas: HTMLCanvasElement
  private board: IBoard
  private dimensions: number
  private context: CanvasRenderingContext2D

  constructor(canvas: HTMLCanvasElement, board: IBoard) {
    this.canvas = canvas
    this.board = board
    this.dimensions = canvas.width
    this.context = this.canvas.getContext('2d')!

    this.refresh()
  }

  public refresh(stones: IStone[] = []) {
    this.context.clearRect(0, 0, this.dimensions, this.dimensions)

    this.drawLines()
    this.drawStarPoints()

    if (stones.length > 0) {
      stones.forEach(stone => this.drawStone(stone.x, stone.y, stone.colour))
    }
  }

  private drawStone(
    x: number,
    y: number,
    colour: StoneColour,
    ghost?: boolean
  ): void {
    const squareSize = this.dimensions / this.board.size
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
  
    this.context.beginPath()
    this.context.arc(xPos, yPos, halfSquareSize, 0, 2 * Math.PI)
    this.context.fillStyle = fillColour
    this.context.fill()
  }

  private drawStarPoints(): void {
    const boardDimensions = `${this.board.size.toString()}x${this.board.size.toString()}`
  
    if (!boardDimensions) return
  
    const coords = starPointPositions[boardDimensions]
  
    coords.forEach(coord => {
      const squareSize = this.dimensions / this.board.size
      const halfSquareSize = squareSize / 2
  
      const xPos = halfSquareSize + squareSize * coord.x - squareSize
      const yPos = halfSquareSize + squareSize * coord.y - squareSize
  
      this.context.beginPath()
      this.context.arc(xPos, yPos, halfSquareSize / 5, 0, 2 * Math.PI)
      this.context.fillStyle = '#000000'
      this.context.fill()
    })
  }

  private drawLines(): void {
    const squareSize = this.dimensions / this.board.size
    const startPos = squareSize / 2
    const endPos = this.dimensions - squareSize / 2
  
    let x = startPos
    let y = startPos
  
    this.drawLine(startPos, y, endPos, y)
  
    for (let i = 1; i < this.board.size; i++) {
      y += squareSize
      this.drawLine(startPos, y, endPos, y)
    }
  
    this.drawLine(x, startPos, x, endPos)
  
    for (let i = 1; i < this.board.size; i++) {
      x += squareSize
      this.drawLine(x, startPos, x, endPos)
    }
  }
  
  private drawLine(startX: number, startY: number, endX: number, endY: number) {
    this.context.beginPath()
    this.context.moveTo(startX, startY)
    this.context.lineTo(endX, endY)
    this.context.stroke()
  }
}