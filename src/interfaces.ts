export interface Board {
  dimensions: number
  size: number
}

export interface Stone {
  colour: 'black' | 'white'
  x: number
  y: number
}

export interface Position {
  stones: Stone[]
}

export interface Diagram {
  board: Board
  positions: Position[]
}
