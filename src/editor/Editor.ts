import { Diagram } from '../diagram/Diagram'

export class Editor {
  private diagram?: Diagram

  constructor(diagram?: Diagram) {
    this.diagram = diagram
  }

  getDiagram(): Diagram | undefined {
    return this.diagram ?? undefined
  }
}
