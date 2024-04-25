import { Move } from "./interfaces"

export enum StoneColour {
  BLACK = 'black',
  WHITE = 'white',
  RED = 'red'
}

export type Mode = 'add' | 'remove'
export type MoveTree = Move[][]
