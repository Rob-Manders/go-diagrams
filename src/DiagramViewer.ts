import { IBoard, IDiagram, IPosition } from './interfaces'
import { drawLines } from './canvas/drawLines'
import { drawStarPoints } from './canvas/drawStarPoints'
import { drawStone } from './canvas/drawStone'

export class DiagramViewer implements IDiagram {
  private initilised: boolean = false

  protected canvas: HTMLCanvasElement
  protected canvasDimensions: number
  protected ctx: CanvasRenderingContext2D

  protected defaultPosition: IPosition = { stones: [] }
  protected currentPosition: number = 0

  board: IBoard
  positions: IPosition[]

  constructor(canvas: HTMLCanvasElement, canvasDimensions: number, diagram: IDiagram) {
    this.canvas = canvas
    this.canvasDimensions = canvasDimensions
    this.ctx = this.canvas.getContext('2d')
    this.board = diagram.board
    this.positions = diagram.positions && [this.defaultPosition]
  }

  protected refreshCanvas() {
    this.ctx.clearRect(0, 0, this.canvasDimensions, this.canvasDimensions)

    drawLines(this.ctx, this.canvasDimensions, this.board)
    drawStarPoints(this.ctx, this.canvasDimensions, this.board)

    this.positions[this.currentPosition].stones.forEach(stone => {
      drawStone(this.ctx, this.canvasDimensions, this.board, stone.x, stone.y, stone.colour)
    })
  }

  init(): void {
    if (this.initilised) return

    this.refreshCanvas()
    this.initilised = true
  }

  getDiagram(): IDiagram {
    return {
      board: this.board,
      positions: this.positions
    }
  }

  getCurrentPosition(): IPosition {
    return this.positions[this.currentPosition]
  }

  nextPosition(): void {
    if (this.currentPosition === this.positions.length - 1) return

    this.currentPosition++
    this.refreshCanvas()
  }

  previousPosition(): void {
    if (this.currentPosition === 0) return

    this.currentPosition--
    this.refreshCanvas()
  }

  selectPosition(index: number): void {
    this.currentPosition = index
  }
}
