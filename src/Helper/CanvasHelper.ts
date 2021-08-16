import { BTree } from './BTree'
import { BTreeNode } from './BTreeNode'
import { CanvasNode } from './CanvasNode'

const smallFont = '16px Verdana'
const largeFont = '28px Helvetica'
const errorTextHeight = 50
const initialHight = 105

const nodeHeight = 24
const nodeWidth = 55
const levelHeight = nodeWidth
const spaceWidth = 10

export class CanvasHelper<Type> {
  /**
   * The associated canvas element
   */
  canvas: HTMLCanvasElement

  /**
   * The context of the canvas element
   */
  context: CanvasRenderingContext2D

  /**
   * The BTree that is getting drawn
   */
  btree: BTree<Type>

  constructor (canvasReference: HTMLCanvasElement, treeOrder: number) {
    // Save canvas reference
    this.canvas = canvasReference
    this.canvas.width = 750
    this.canvas.height = 750

    // Savely extract the context
    const tempContext = this.canvas.getContext('2d')
    if (!tempContext) throw Error('Could not get canvas context!')
    this.context = tempContext
    this.context.textAlign = 'center'

    // Initialize BTree
    this.btree = new BTree<Type>(treeOrder)
  }

  /**
   * Resets the tree. Unless set otherwise the order of the tree remains the same.
   */
  resetTree (newOrder: number = this.btree.order) {
    // Reset the tree
    this.btree = new BTree<Type>(newOrder)

    // Clear canvas
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)

    // Maybe add info text
  }

  insert (key: Type) {
    // Validate input
    const validationResult = this.validateInsertion(key)
    if (!validationResult.isValid) {
      if (!validationResult.error) throw Error('No validation error message found!')
      this.drawUpdateText(validationResult.error)
      return
    }

    let currentHeight = initialHight
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)

    /*
      Old tree
     */
    this.drawInfoText(`Baum vor Einfügen von ${key}`, currentHeight)

    this.drawTree(currentHeight)
    currentHeight += levelHeight * (this.btree.getHeight() + 1)

    /*
      New tree
    */
    currentHeight += levelHeight

    // Insert key into tree
    this.btree.insert(key)

    this.drawInfoText(`Baum nach Einfügen von ${key}`, currentHeight)

    this.drawTree(currentHeight)

    // TODO: Check canvas height
  }

  remove (key: Type) {
    // Validate input
    const validationResult = this.validateRemoval(key)
    if (!validationResult.isValid) {
      if (!validationResult.error) throw Error('No validation error message found!')
      this.drawUpdateText(validationResult.error)
      return
    }

    let currentHeight = initialHight
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)

    /*
      Old tree
     */
    this.drawInfoText(`Baum vor Entfernen von ${key}`, currentHeight)

    this.drawTree(currentHeight)
    currentHeight += levelHeight * (this.btree.getHeight() + 1)

    /*
      New tree
    */
    currentHeight += levelHeight

    // Insert key into tree
    this.btree.remove(key)

    this.drawInfoText(`Baum nach Entfernen von ${key}`, currentHeight)

    this.drawTree(currentHeight)

    // TODO: Check canvas height
  }

  validateInsertion (key: Type): ValidationResult {
    if (this.btree.contains(key)) return { isValid: false, error: 'Der Wert ist bereits vorhanden!' }

    return { isValid: true }
  }

  validateRemoval (key: Type): ValidationResult {
    if (!this.btree.contains(key)) return { isValid: false, error: 'Der Wert ist nicht vorhanden!' }

    return { isValid: true }
  }

  drawInfoText (infoText: string, height: number) {
    this.context.font = largeFont
    this.context.fillText(infoText, this.canvas.width / 2, height)
  }

  drawTree (height: number) {
    this.context.font = smallFont
    const nodeMatrix: any = this.extractNodeMatrixFromTree()

    // Tree is drawn bottom up
    height += nodeMatrix.length * levelHeight

    // Traverse level of the tree
    for (let levelIndex = nodeMatrix.length - 1; levelIndex >= 0; levelIndex--) {
      const widthOfSpaces = nodeMatrix[levelIndex].length * spaceWidth
      let widthOfNodes = 0

      for (let nodeIndex = 0; nodeIndex < nodeMatrix[levelIndex].length; nodeIndex++) {
        for (let keyIndex = 0; keyIndex < nodeMatrix[levelIndex][nodeIndex].keys.length; keyIndex++) {
          widthOfNodes += levelHeight
        }
      }
      const levelWidth = widthOfNodes + widthOfSpaces
      const borderSpace = (this.canvas.width - levelWidth) / 2

      const canvasNode = new CanvasNode(borderSpace, height)

      for (let nodeIndex = 0; nodeIndex < nodeMatrix[levelIndex].length; nodeIndex++) {
        if (!nodeMatrix[levelIndex][nodeIndex].isLeaf()) {
          const difference = nodeMatrix[levelIndex][nodeIndex].children[nodeMatrix[levelIndex][nodeIndex].children.length - 1].x + (nodeMatrix[levelIndex][nodeIndex].children[nodeMatrix[levelIndex][nodeIndex].children.length - 1].keys.length * nodeWidth) - nodeMatrix[levelIndex][nodeIndex].children[0].x
          canvasNode.x = nodeMatrix[levelIndex][nodeIndex].children[0].x + difference / 2
          canvasNode.x -= (nodeMatrix[levelIndex][nodeIndex].keys.length * nodeWidth) / 2
        }

        for (let keyIndex = 0; keyIndex < nodeMatrix[levelIndex][nodeIndex].keys.length; keyIndex++) {
          this.context.fillStyle = 'rgba(0, 0, 255, 0.2)'
          this.context.fillRect(canvasNode.x, canvasNode.y, canvasNode.width, canvasNode.height)
          this.context.fillStyle = 'rgba(0, 0, 0, 1)'
          this.context.strokeRect(canvasNode.x, canvasNode.y, canvasNode.width, canvasNode.height)

          if (keyIndex === 0) {
            nodeMatrix[levelIndex][nodeIndex].x = canvasNode.x
            nodeMatrix[levelIndex][nodeIndex].y = canvasNode.y
          }

          const key = String(nodeMatrix[levelIndex][nodeIndex].keys[keyIndex])
          this.drawCanvasNode(key, canvasNode)
          canvasNode.x += canvasNode.width
        }

        canvasNode.x += spaceWidth
      }

      height -= levelHeight
    }

    /*
      Connection Lines
    */
    this.context.fillStyle = 'rgba(0, 0, 0, 1)'
    for (let i = 0; i < nodeMatrix.length; i++) {
      for (let j = 0; j < nodeMatrix[i].length; j++) {
        if (nodeMatrix[i][j].children != null) {
          for (let k = 0; k < nodeMatrix[i][j].children.length; k++) {
            let yParent = nodeMatrix[i][j].y
            yParent += nodeHeight
            const yChild = nodeMatrix[i][j].children[k].y

            const xParent = nodeMatrix[i][j].x + (nodeWidth * k)
            const xChild = nodeMatrix[i][j].children[k].x + (nodeMatrix[i][j].children[k].keys.length * nodeWidth) / 2

            this.context.beginPath()
            this.context.moveTo(xParent, yParent)
            this.context.lineTo(xChild, yChild)
            this.context.stroke()
          }
        }
      }
    }
  }

  drawUpdateText (message: string) {
    this.context.font = smallFont
    this.context.clearRect(0, 0, this.canvas.width, errorTextHeight + 10)
    this.context.fillText(message, this.canvas.width / 2, errorTextHeight)
  }

  extractNodeMatrixFromTree () {
    const currentNode = this.btree.root
    const depthCounter = 0
    const keyMatrix: BTreeNode<Type>[][] = []

    for (let i = 0; i < this.btree.getHeight(); i++) {
      keyMatrix.push([])
    }

    this.extractNodesFromLevel(currentNode, keyMatrix, depthCounter)
    return keyMatrix
  }

  extractNodesFromLevel (node: BTreeNode<Type>, keyMatrix: any[], depth: number) {
    keyMatrix[depth].push(node)
    if (node.isLeaf()) return
    depth += 1
    for (let i = 0; i < node.children.length; i++) {
      this.extractNodesFromLevel(node.children[i], keyMatrix, depth)
    }
  }

  drawCanvasNode (text: string, node: CanvasNode) {
    this.context.fillStyle = 'rgba(0, 0, 0, 1)'
    const xText = node.x + node.width / 2
    const lineHeight = this.context.measureText('M').width
    const yText = node.y + node.height / 2 + lineHeight / 2

    this.context.fillText(text, xText, yText)
  }
}

interface ValidationResult {
  isValid: boolean,
  error?: string
}
