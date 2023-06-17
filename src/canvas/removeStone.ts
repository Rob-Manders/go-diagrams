import { Stone } from '../interfaces'

export function removeStone(stones: Stone[], x: number, y: number) {
  const index = stones.findIndex(stone => stone.x === x && stone.y === y)

  if (index < 0) return

  stones.splice(index, 1)
}
