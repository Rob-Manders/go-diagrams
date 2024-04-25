import { IStone } from '../../interfaces'
import { StoneColour } from '../../types'

export function addStone(stones: IStone[], x: number, y: number, colour: StoneColour) {
  const existingStone = stones.find(stone => stone.x === x && stone.y === y)

  if (!existingStone) stones.push({ x, y, colour })
}
