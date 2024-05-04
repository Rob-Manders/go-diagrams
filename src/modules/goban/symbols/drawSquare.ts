export function drawSquare(context: CanvasRenderingContext2D, xPos: number, yPos: number, size: number, colour: string) {
	const startX = xPos - (size / 2) + 0.5
	const startY = yPos - (size / 2) + 0.5

	context.beginPath()
	context.moveTo(startX, startY)

	context.lineTo(startX + size, startY)
	context.lineTo(startX + size, startY + size)
	context.lineTo(startX, startY + size)
	context.lineTo(startX, startY)

	context.lineWidth = 3
	context.strokeStyle = colour
	context.stroke()
}