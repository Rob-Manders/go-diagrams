import { Stone, Symbol } from './types'

export interface Colour {
  r: number,
  b: number,
  g: number
}

export interface Coord {
  x: number,
  y: number
}

export interface Move {
  colour: string,
  coord: Coord[],
  comment?: string
  branches?: Move[][]
}

export interface Game {
  date: string,
  place: string,
  url?: string,
  name: string,
  playerBlack: string,
  playerWhite: string,
  blackRank: string,
  whiteRank: string,
  timeLimit: number,
  overtime: string,
  result: { winner: string, points: number },
  boardSize: number,
  komi: number,
  rules: string,
  handicap: number,
  addBlack?: { x: number, y: number }[],
  addWhite?: { x: number, y: number }[],
  moves: Move[]
}

export interface Cell {
  stone: Stone,
  ghost: boolean,
  symbol?: Symbol,
  label?: string,
}

export interface Position {
  name: string
  position: Cell[][]
  comment?: string
}
