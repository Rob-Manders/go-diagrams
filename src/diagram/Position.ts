import { Label, Stone } from './interfaces'
import { removeArrayElement } from '../util/removeArrayElement'

export class Position {
  private caption?: string
  private stones: Stone[] = []
  private labels: Label[] = []

  constructor(caption?: string) {
    this.caption = caption
  }

  addStone(stone: Stone): void {
    this.stones.push(stone)
  }

  addLabel(label: Label): void {
    this.labels.push(label)
  }

  removeStone(index: number): void {
    this.stones = removeArrayElement(this.stones, index)
  }

  removeLabel(index: number): void {
    this.labels = removeArrayElement(this.labels, index)
  }

  updateCaption(caption: string): void {
    this.caption = caption
  }

  getCaption(): string {
    return this.caption
  }

  getStones(): Stone[] {
    return this.stones
  }

  getLabels(): Label[] {
    return this.labels
  }
}
