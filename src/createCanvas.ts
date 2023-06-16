export function createCanvas(elementId: string, boardDimensions: number): CanvasRenderingContext2D {
  const canvas = document.createElement('canvas')

  canvas.setAttribute('id', 'canvas')
  canvas.setAttribute('width', `${boardDimensions}`)
  canvas.setAttribute('height', `${boardDimensions}`)

  document.body.appendChild(canvas)

  return canvas.getContext('2d')
}
