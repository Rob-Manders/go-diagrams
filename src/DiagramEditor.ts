import { DiagramViewer } from './DiagramViewer'
import { IBoard, IDiagram, IPosition } from './interfaces'
import { StoneColour } from './types'

export class DiagramEditor extends DiagramViewer {
  protected canvas: HTMLCanvasElement
  protected canvasDimensions: number
  protected ctx: CanvasRenderingContext2D

  protected defaultPosition: IPosition = { stones: [] }
  protected currentPosition: number = 0

  private stoneColour: StoneColour = 'black'

  board: IBoard
  positions: IPosition[]

  constructor(canvas: HTMLCanvasElement, canvasDimensions: number, diagram: IDiagram) {
    super(canvas, canvasDimensions, diagram)

    this.canvas = canvas
    this.canvasDimensions = canvasDimensions
    this.ctx = this.canvas.getContext('2d')
    this.board = diagram.board
    this.positions = diagram.positions && [this.defaultPosition]
  }

  addPosition(): void {
    this.positions.push({ stones: [] })
    this.currentPosition++
    this.refreshCanvas()
  }

  deletePosition(): void {
    if (this.currentPosition === 0 && this.positions.length === 1) {
      this.positions[0] = {
        stones: []
      }

      this.refreshCanvas()

      return
    }

    this.positions.splice(this.currentPosition, 1)

    if (this.currentPosition === 0) this.currentPosition = 0
    else this.currentPosition--

    this.refreshCanvas()
  }

  getStoneColour(): StoneColour {
    return this.stoneColour
  }

  setStoneColour(colour: StoneColour): void {
    this.stoneColour = colour
  }

  addStone(x: number, y: number): void {
    const existingStone = this.positions[this.currentPosition].stones.find(stone => stone.x === x && stone.y === y)

    if (!existingStone) this.positions[this.currentPosition].stones.push({ x, y, colour: this.stoneColour })

    this.refreshCanvas()
  }

  removeStone(x: number, y: number) {
    const index = this.positions[this.currentPosition].stones.findIndex(stone => stone.x === x && stone.y === y)

    if (index < 0) return

    this.positions[this.currentPosition].stones.splice(index, 1)

    this.refreshCanvas()
  }
}
