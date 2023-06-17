export interface Board {
  dimensions: number
  size: number
}

export interface Stone {
  colour: 'black' | 'white'
  x: number
  y: number
}
