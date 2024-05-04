export function drawCircle(context: CanvasRenderingContext2D, xPos: number, yPos: number, radius: number, colour: string) {
	context.beginPath()
	context.arc(xPos, yPos, radius, 0, 2 * Math.PI)
	context.lineWidth = 3
	context.strokeStyle = colour
	context.stroke()
}