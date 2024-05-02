import { Cell } from "../../interfaces"
import { Stone } from "../../types"

const blankCell = {
  stone: Stone.NONE,
  ghost: false
}

export class Position {
  public position: Cell[][] = []
  public comment?: string

  private width: number
  private height: number

  constructor(size: number) {
    this.width = size
    this.height = size

    this.initialise()
  }

  public addStone() {}

  public removeStone() {}

  private initialise() {
    let h = 0

    while (h < this.height) {
      let w = 0
      let row = []

      while (w < this.width) {
        row.push(blankCell)
        w++
      }
      
      this.position.push(row)
      h++
    }
  }
}