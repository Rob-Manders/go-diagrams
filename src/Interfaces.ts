export interface StoneInterface {
  colour: 'BLACK' | 'WHITE'
  x: number
  y: number
}

export interface LabelInterface {
  label: string
  x: number
  y: number
}

export interface PositionInterface {
  title?: string
  caption?: string
  stones: StoneInterface[]
  labels: LabelInterface[]
}
