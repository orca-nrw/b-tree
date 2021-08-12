export class CanvasNode {
  x: number
  y: number
  width: number
  height: number

  constructor (x: number, y: number) {
    this.x = x
    this.y = y
    this.width = 55
    this.height = 24
  }

  insertValues (text: string, context: CanvasRenderingContext2D) {
    context.fillStyle = 'rgba(0, 0, 0, 1)'
    const xText = this.x + this.width / 2 - context.measureText(text).width / 2
    const lineHeight = context.measureText('M').width
    const yText = this.y + this.height / 2 + lineHeight / 2

    context.fillText(text, xText, yText)
  }
}
