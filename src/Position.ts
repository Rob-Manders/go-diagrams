import { LabelInterface, StoneInterface } from "./Interfaces"
import { removeArrayElement } from "./util/removeArrayElement"

export class Position {
	private caption?: string
	private stones: StoneInterface[] = []
	private labels: LabelInterface[] = []

	constructor(caption?: string) {
		this.caption = caption
	}

	addStone(stone: StoneInterface): void {
		this.stones.push(stone)
	}

	addLabel(label: LabelInterface): void {
		this.labels.push(label)
	}

	removeStone(index: number): void {
		this.stones = removeArrayElement(this.stones, index)
	}

	removeLabel(index: number): void {
		this.labels = removeArrayElement(this.labels, index)
	}
}