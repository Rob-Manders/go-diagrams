import { IBoard } from '../interfaces'

export function getMousePosition(
  event: MouseEvent,
  canvas: HTMLCanvasElement,
  canvasDimensions: number,
  board: IBoard
): { mouseX: number; mouseY: number } {
  let rect = canvas.getBoundingClientRect()

  return {
    mouseX: Math.floor((event.clientX - rect.left) / (canvasDimensions / board.size)) + 1,
    mouseY: Math.floor((event.clientY - rect.top) / (canvasDimensions / board.size)) + 1
  }
}
