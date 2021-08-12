import { Tree } from './btree'
import { CanvasNode } from './canvasNode'

const rectangleWidth = 55
const rectangleHeight = 24
let canvasWidth: number
let canvasHeight: number
let tree: Tree

function initializeCanvas (context: CanvasRenderingContext2D, treeType: number) {
  canvasWidth = context.canvas.width
  canvasHeight = context.canvas.height
  tree = new Tree(treeType)
}

function resetTree (context: CanvasRenderingContext2D, treeType: number) {
  context.clearRect(0, 0, canvasWidth, canvasHeight)
  tree = new Tree(treeType)
}

function validateInput (value: number): boolean {
  // Value is already in the tree
  if (tree.findValue(value, tree.root)) return false

  // Passed all checks
  return true
}

function drawTree (y: number, context: CanvasRenderingContext2D) {
  const levelsArray = tree.returnTreeObject()

  for (let i = 0; i < levelsArray.length; i++) {
    y += 55
  }

  // Draw Nodes with values

  // Traverse lines of tree
  for (let i = levelsArray.length - 1; i >= 0; i--) {
    const widthOfSpaces = levelsArray[i].length * 10
    let widthOfNodes = 0
    for (let j = 0; j < levelsArray[i].length; j++) {
      for (let k = 0; k < levelsArray[i][j].keys.length; k++) {
        widthOfNodes += rectangleWidth
      }
    }
    const widthOfAllNodes = widthOfNodes + widthOfSpaces
    const x = (canvasWidth - widthOfAllNodes) / 2

    const canvasNode = new CanvasNode(x, y)

    // Traverse Nodes in one line
    for (let j = 0; j < levelsArray[i].length; j++) {
      if (!levelsArray[i][j].isLeaf()) {
        const difference = levelsArray[i][j].children[levelsArray[i][j].children.length - 1].x + (levelsArray[i][j].children[levelsArray[i][j].children.length - 1].keys.length * rectangleWidth) - levelsArray[i][j].children[0].x
        canvasNode.x = levelsArray[i][j].children[0].x + difference / 2
        canvasNode.x -= (levelsArray[i][j].keys.length * rectangleWidth) / 2
      }

      for (let k = 0; k < levelsArray[i][j].keys.length; k++) {
        context.fillStyle = 'rgba(0, 0, 255, 0.2)'
        context.fillRect(canvasNode.x, canvasNode.y, canvasNode.width, canvasNode.height)
        context.fillStyle = 'rgba(0, 0, 0, 1)'
        context.strokeRect(canvasNode.x, canvasNode.y, canvasNode.width, canvasNode.height)

        if (k === 0) {
          levelsArray[i][j].x = canvasNode.x
          levelsArray[i][j].y = canvasNode.y
        }

        const key = levelsArray[i][j].keys[k] + ''
        canvasNode.insertValues(key, context)
        canvasNode.x += canvasNode.width
      }

      canvasNode.x += 10
    }

    y -= 55
  }

  // Draw connections between Nodes
  context.fillStyle = 'rgba(0, 0, 0, 1)'
  for (let i = 0; i < levelsArray.length; i++) {
    for (let j = 0; j < levelsArray[i].length; j++) {
      if (levelsArray[i][j].children != null) {
        for (let k = 0; k < levelsArray[i][j].children.length; k++) {
          let yParent = levelsArray[i][j].y
          yParent += rectangleHeight
          const yChild = levelsArray[i][j].children[k].y

          const xParent = levelsArray[i][j].x + (rectangleWidth * k)
          const xChild = levelsArray[i][j].children[k].x + (levelsArray[i][j].children[k].keys.length * rectangleWidth) / 2

          context.beginPath()
          context.moveTo(xParent, yParent)
          context.lineTo(xChild, yChild)
          context.stroke()
        }
      }
    }
  }
}

function insertValue (value: number, context: CanvasRenderingContext2D) {
  if (validateInput(value)) {
  // Info text
    context.clearRect(0, 0, context.canvas.width, context.canvas.height)
    let y = 105

    context.font = '28px Helvetica'
    let text = `Baum vor Einfügen von ${value}`
    context.fillText(text, canvasWidth / 2 - context.measureText(text).width / 2, y)

    // Old tree
    context.font = '16px Verdana'
    drawTree(y, context)

    // New tree
    const treeSize = tree.returnTreeObject().length
    for (let i = 0; i < treeSize; i++) y += 55

    y += 150
    context.font = '28px Helvetica'
    text = `Baum nach Einfügen von ${value}`
    context.fillText(text, canvasWidth / 2 - context.measureText(text).width / 2, y)
    context.font = '16px Verdana'

    tree.insertKey(value)

    drawTree(y, context)
  } else {
    // Handle invalid input
    context.font = '16px Verdana'
    let text = ''

    if (tree.findValue(value, tree.root)) {
      text = 'Zahl ist bereits im Baum vorhanden.'
    }

    context.clearRect(0, 0, canvasWidth, 60)
    context.fillText(text, canvasWidth / 2 - context.measureText(text).width / 2, 50)
  }
}

export {
  initializeCanvas,
  insertValue,
  resetTree
}
