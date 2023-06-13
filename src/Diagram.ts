import { PositionInterface } from './Interfaces'

export class Diagram {
  private title?: string
  private description?: string
  private positions: PositionInterface[] = []

  constructor(title?: string, description?: string) {
    this.title = title
    this.description = description
  }

  getTitle(): string | undefined {
    return this.title ?? undefined
  }
  getDescription(): string | undefined {
    return this.description ?? undefined
  }
  getPositions(): PositionInterface[] {
    return this.positions
  }

  addPosition(position: PositionInterface): void {
    this.positions.push(position)
  }

  removePosition(index: number): void {
    if (index === this.positions.length - 1) this.positions.pop()
    if (index === 0) this.positions.shift

    this.positions = this.positions.slice(0, index).concat(this.positions.slice((index = 1)))
  }

  updatePosition(position: PositionInterface, index: number): void {
    this.positions[index] = position
  }
}
