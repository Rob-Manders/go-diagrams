import { Position } from './Position'
import { removeArrayElement } from '../util/removeArrayElement'

export class Diagram {
  private title?: string
  private description?: string
  private positions: Position[] = []

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
  getPositions(): Position[] {
    return this.positions
  }

  addPosition(position: Position): void {
    this.positions.push(position)
  }

  removePosition(index: number): void {
    this.positions = removeArrayElement(this.positions, index)
  }

  updatePosition(position: Position, index: number): void {
    this.positions[index] = position
  }
}
