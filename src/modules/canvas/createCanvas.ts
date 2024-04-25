export function createCanvas(elementId: string, canvasDimensions: number): HTMLCanvasElement {
  const canvas = document.createElement('canvas')

  canvas.setAttribute('id', elementId)
  canvas.setAttribute('width', `${canvasDimensions}`)
  canvas.setAttribute('height', `${canvasDimensions}`)

  document.body.appendChild(canvas)

  return canvas
}
