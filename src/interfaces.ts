export interface IBoard {
  dimensions?: number
  size: number
}

export interface IStone {
  colour: 'black' | 'white'
  x: number
  y: number
}

export interface IPosition {
  stones: IStone[]
}

export interface IDiagram {
  board: IBoard
  positions?: IPosition[]
}
