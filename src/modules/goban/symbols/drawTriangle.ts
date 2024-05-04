export function drawTriangle(context: CanvasRenderingContext2D, xPos: number, yPos: number, size: number, colour: string) {
	const angle = radians(150)
	const radius = Math.sin(radians(60)) * size

	const startX = xPos
	const startY = yPos - (size / 2) + 1

	context.beginPath()
	context.moveTo(startX, startY)
	
	const x = startX + (Math.sin(angle) * radius)
	const y = startY - (Math.cos(angle) * radius)

	context.lineTo(x, y)
	context.lineTo(x - (Math.sin(angle) * radius * 2), y)
	context.lineTo(startX, startY)

	context.lineWidth = 3
	context.strokeStyle = colour
	context.stroke()
}

function radians(degrees: number) {
	return degrees * (Math.PI / 180)
}