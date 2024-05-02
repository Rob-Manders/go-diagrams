import { Position } from "../../interfaces"

export class Diagram {
  private id: string | null
  private name: string
  private positions: Position[]

  constructor(id: string | null = null, name: string = '') {
    this.id = id
    this.name = name
    this.positions = []
  }

  public getPosition(index: number): Position | null {
    if (this.positions.length <= 0) return null
    if (index >= this.positions.length) return null

    return this.positions[index]
  }

  public addPosition(position: Position) {
    this.positions.push(position)
  }
}