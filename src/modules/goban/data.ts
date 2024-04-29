import { Coord } from "../../interfaces";

export const starPointPositions: { [key: string]: Coord[] } = {
  '9x9': [
    { x: 3, y: 3 },
    { x: 7, y: 3 },
    { x: 5, y: 5 },
    { x: 3, y: 7 },
    { x: 7, y: 7 }
  ],
  '13x13': [
    { x: 4, y: 4 },
    { x: 10, y: 4 },
    { x: 7, y: 7 },
    { x: 4, y: 10 },
    { x: 10, y: 10 }
  ],
  '19x19': [
    { x: 4, y: 4 },
    { x: 10, y: 4 },
    { x: 16, y: 4 },
    { x: 4, y: 10 },
    { x: 10, y: 10 },
    { x: 16, y: 10 },
    { x: 4, y: 16 },
    { x: 10, y: 16 },
    { x: 16, y: 16 }
  ]
}