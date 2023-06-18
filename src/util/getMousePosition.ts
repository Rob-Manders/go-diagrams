import { IBoard } from '../interfaces'

export function getMousePosition(
  event: MouseEvent,
  canvas: HTMLCanvasElement,
  board: IBoard
): { mouseX: number; mouseY: number } {
  let rect = canvas.getBoundingClientRect()

  return {
    mouseX: Math.floor((event.clientX - rect.left) / (board.dimensions / board.size)) + 1,
    mouseY: Math.floor((event.clientY - rect.top) / (board.dimensions / board.size)) + 1
  }
}
