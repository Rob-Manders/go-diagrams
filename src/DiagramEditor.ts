import { DiagramViewer } from './DiagramViewer'
import { IBoard, IDiagram, IPosition } from './interfaces'
import { refreshCanvas } from './canvas/refreshCanvas'

export class DiagramEditor extends DiagramViewer {
  protected canvas: HTMLCanvasElement
  protected ctx: CanvasRenderingContext2D

  protected defaultPosition: IPosition = { stones: [] }
  protected currentPosition: number = 0

  board: IBoard
  positions: IPosition[]

  constructor(canvas: HTMLCanvasElement, diagram: IDiagram) {
    super(canvas, diagram)

    this.canvas = canvas
    this.ctx = this.canvas.getContext('2d')
    this.board = diagram.board
    this.positions = diagram.positions && [this.defaultPosition]
  }

  addPosition(): void {
    this.positions.push({ stones: [] })
    this.currentPosition++
    refreshCanvas(this.ctx, this.positions[this.currentPosition].stones, this.board)
  }

  deletePosition(): void {
    if (this.currentPosition === 0 && this.positions.length === 1) {
      this.positions[0] = {
        stones: []
      }

      refreshCanvas(this.ctx, this.positions[this.currentPosition].stones, this.board)

      return
    }

    this.positions.splice(this.currentPosition, 1)

    if (this.currentPosition === 0) this.currentPosition = 0
    else this.currentPosition--

    refreshCanvas(this.ctx, this.positions[this.currentPosition].stones, this.board)
  }
}
