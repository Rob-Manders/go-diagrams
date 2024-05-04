import { Colour, Position } from "../../interfaces"
import { Stone, Symbol } from "../../types"
import { starPointPositions } from "./data"
import { drawCircle, drawSquare, drawTriangle } from "./symbols"

export class Goban {
  private canvas: HTMLCanvasElement
  private context: CanvasRenderingContext2D
  private size: number
  private bgColour: Colour
  private dimensions: number
  private cellSize: number

  constructor(canvas: HTMLCanvasElement, size: number, bgColour: Colour = { r: 174, g: 132, b: 78 }) {
    this.canvas = canvas
    this.size = size
    this.bgColour = bgColour
    this.dimensions = canvas.width
    this.context = this.canvas.getContext('2d')!

    this.cellSize = this.dimensions / this.size

    this.refresh()
  }

  public refresh(diagram: Position | null = null) {
    this.context.clearRect(0, 0, this.dimensions, this.dimensions)

    this.drawLines()
    this.drawStarPoints()

    if (!diagram) return

    diagram.position.forEach((row, y) => {
      row.forEach((cell, x) => {
        const { stone, symbol, label, ghost } = cell

        const xPos = this.pos(x + 1)
        const yPos = this.pos(y + 1)

        if (stone != 'none') this.drawStone(xPos, yPos, cell.stone, ghost)

        if (symbol) this.drawSymbol(stone, symbol, xPos, yPos, ghost)
        if (label) this.drawLabel(stone, label, xPos, yPos, ghost)
      })
    })
  }

  public mousePosition(event: MouseEvent): { mouseX: number; mouseY: number } {
    let rect = this.canvas.getBoundingClientRect()

    return {
      mouseX: Math.floor((event.clientX - rect.left) / (this.dimensions / this.size)) + 1,
      mouseY: Math.floor((event.clientY - rect.top) / (this.dimensions / this.size)) + 1
    }
  }

  private drawSymbol(stone: Stone, symbol: Symbol, xPos: number, yPos: number, ghost: boolean) {
    const { r, g, b } = this.bgColour
    const opacity = ghost ? '0.5' : '1'

    if (stone === Stone.NONE) {
      this.context.beginPath()
      this.context.arc(xPos, yPos, (this.cellSize * 0.8) / 2, 0, 2 * Math.PI)
      this.context.fillStyle = `rgba(${r}, ${g}, ${b}, 0.5`
      this.context.fill()
    }

    const symbolColour = stone === Stone.BLACK ? `rgba(255, 255, 255, ${opacity})` : `rgba(0, 0, 0, ${opacity})`

    switch (symbol) {
      case Symbol.CIRCLE:
        drawCircle(this.context, xPos, yPos, (this.cellSize * 0.6) / 2, symbolColour)
        break
      case Symbol.SQUARE:
        drawSquare(this.context, xPos, yPos, this.cellSize * 0.5, symbolColour)
        break
      case Symbol.TRIANGLE:
        drawTriangle(this.context, xPos, yPos, this.cellSize * 0.65, symbolColour)
    }
  }
  
  private drawLabel(stone: Stone, label: Uint8Array, xPos: number, yPos: number, ghost: boolean) {
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
    this.context.arc(xPos, yPos, (this.cellSize / 2), 0, 2 * Math.PI)
  
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
      const cellSize = this.dimensions / this.size
      const halfcellSize = cellSize / 2
  
      const xPos = this.pos(coord.x)
      const yPos = this.pos(coord.y)
  
      this.context.beginPath()
      this.context.arc(xPos, yPos, halfcellSize / 5, 0, 2 * Math.PI)
      this.context.fillStyle = '#000000'
      this.context.fill()
    })
  }

  private drawLines(): void {
    const startPos = this.cellSize / 2
    const endPos = this.dimensions - this.cellSize / 2
  
    let x = startPos
    let y = startPos
  
    this.drawLine(startPos, y, endPos, y)
  
    for (let i = 1; i < this.size; i++) {
      y += this.cellSize
      this.drawLine(startPos, y, endPos, y)
    }
  
    this.drawLine(x, startPos, x, endPos)
  
    for (let i = 1; i < this.size; i++) {
      x += this.cellSize
      this.drawLine(x, startPos, x, endPos)
    }
  }
  
  private drawLine(startX: number, startY: number, endX: number, endY: number) {
    this.context.beginPath()
    this.context.moveTo(startX, startY)
    this.context.lineTo(endX, endY)
    this.context.lineWidth = 1.5
    this.context.stroke()
  }

  private pos(coord: number) {
    return (this.cellSize / 2) + this.cellSize * coord - this.cellSize
  }
}