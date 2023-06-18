import { IBoard, IDiagram, IPosition } from './interfaces'
import { refreshCanvas } from './canvas/refreshCanvas'

export class DiagramViewer implements IDiagram {
  protected canvas: HTMLCanvasElement
  protected ctx: CanvasRenderingContext2D

  protected defaultPosition: IPosition = { stones: [] }
  protected currentPosition: number = 0

  board: IBoard
  positions: IPosition[]

  constructor(canvas: HTMLCanvasElement, diagram: IDiagram) {
    this.canvas = canvas
    this.ctx = this.canvas.getContext('2d')
    this.board = diagram.board
    this.positions = diagram.positions && [this.defaultPosition]
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
    refreshCanvas(this.ctx, this.positions[this.currentPosition].stones, this.board)
  }

  previousPosition(): void {
    if (this.currentPosition === 0) return

    this.currentPosition--
    refreshCanvas(this.ctx, this.positions[this.currentPosition].stones, this.board)
  }

  specificPosition(index: number): void {}
}
