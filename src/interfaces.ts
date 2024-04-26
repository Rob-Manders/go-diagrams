import { MoveTree, StoneColour } from './types'

export interface Coord {
  x: number,
  y: number
}

export interface IBoard {
  dimensions?: number
  size: number
}

export interface IStone {
  colour: StoneColour
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

export interface Move {
  colour: string,
  x: number,
  y: number,
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
