interface Canvas {
  canvas: HTMLCanvasElement
  ctx: CanvasRenderingContext2D
}

export function createCanvas(elementId: string, boardDimensions: number): Canvas {
  const canvas = document.createElement('canvas')

  canvas.setAttribute('id', elementId)
  canvas.setAttribute('width', `${boardDimensions}`)
  canvas.setAttribute('height', `${boardDimensions}`)

  document.body.appendChild(canvas)

  const ctx = canvas.getContext('2d')

  return { canvas, ctx }
}
