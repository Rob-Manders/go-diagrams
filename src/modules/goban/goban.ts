import { Position } from "../../interfaces"
import { Stone, Symbol } from "../../types"
import { starPointPositions } from "./data"

export class Goban {
  private canvas: HTMLCanvasElement
  private context: CanvasRenderingContext2D
  private size: number
  private bgColour: string
  private dimensions: number
  private squareSize: number

  constructor(canvas: HTMLCanvasElement, size: number, bgColour: string = 'rgb(174, 132, 78)') {
    this.canvas = canvas
    this.size = size
    this.bgColour = bgColour
    this.dimensions = canvas.width
    this.context = this.canvas.getContext('2d')!

    this.squareSize = this.dimensions / this.size

    this.refresh()
  }

  public refresh(diagram: Position | null = null) {
    this.context.clearRect(0, 0, this.dimensions, this.dimensions)

    this.drawLines()
    this.drawStarPoints()

    if (!diagram) return

    diagram.position.forEach((row, y) => {
      row.forEach((cell, x) => {
        const ghost = cell.ghost

        const xPos = this.pos(x + 1)
        const yPos = this.pos(y + 1)

        if (cell.stone != 'none') this.drawStone(xPos, yPos, cell.stone, ghost)

        if (cell.symbol) this.drawSymbol(cell.symbol, xPos, yPos, ghost)
        if (cell.label) this.drawLabel(cell.label, xPos, yPos, ghost)
      })
    })
  }

  private drawLabel(label: Uint8Array, xPos: number, yPos: number, ghost: boolean) {
    return
  }

  private drawSymbol(symbol: Symbol, xPos: number, yPos: number, ghost: boolean) {
    return
  }

  private drawStone(
    xPos: number,
    yPos: number,
    colour: Stone,
    ghost?: boolean
  ): void {   
    const opacity = ghost ? '0.5' : '1'
    
    this.context.beginPath()
    this.context.arc(xPos, yPos, (this.squareSize / 2), 0, 2 * Math.PI)
  
    switch (colour) {
      case Stone.BLACK:
        this.context.fillStyle = `rgba(0, 0, 0, ${opacity})`
        break
      case Stone.WHITE:
        this.context.fillStyle = `rgba(255, 255, 255, ${opacity})`
        break
      case Stone.RED:
        this.context.fillStyle = `rgba(180, 0, 0, ${opacity})`
        break
    }
  
    this.context.fill()
  }

  private drawStarPoints(): void {
    const boardDimensions = `${this.size.toString()}x${this.size.toString()}`
 
    if (!boardDimensions) return
  
    const coords = starPointPositions[boardDimensions]
  
    coords.forEach(coord => {
      const squareSize = this.dimensions / this.size
      const halfSquareSize = squareSize / 2
  
      const xPos = this.pos(coord.x)
      const yPos = this.pos(coord.y)
  
      this.context.beginPath()
      this.context.arc(xPos, yPos, halfSquareSize / 5, 0, 2 * Math.PI)
      this.context.fillStyle = '#000000'
      this.context.fill()
    })
  }

  private drawLines(): void {
    const startPos = this.squareSize / 2
    const endPos = this.dimensions - this.squareSize / 2
  
    let x = startPos
    let y = startPos
  
    this.drawLine(startPos, y, endPos, y)
  
    for (let i = 1; i < this.size; i++) {
      y += this.squareSize
      this.drawLine(startPos, y, endPos, y)
    }
  
    this.drawLine(x, startPos, x, endPos)
  
    for (let i = 1; i < this.size; i++) {
      x += this.squareSize
      this.drawLine(x, startPos, x, endPos)
    }
  }
  
  private drawLine(startX: number, startY: number, endX: number, endY: number) {
    this.context.beginPath()
    this.context.moveTo(startX, startY)
    this.context.lineTo(endX, endY)
    this.context.stroke()
  }

  private pos(coord: number) {
    return (this.squareSize / 2) + this.squareSize * coord - this.squareSize
  }
}