import { deflateRaw } from 'zlib'
import { BTree } from './BTree'

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

    // Savely extract the context
    const tempContext = this.canvas.getContext('2d')
    if (!tempContext) throw Error('Could not get canvas context!')
    this.context = tempContext

    // Initialize BTree
    this.btree = new BTree<Type>(treeOrder)
  }

  /**
   * Resets the tree. Unless set otherwise the order of the tree remains the same.
   */
  resetTree (newOrder: number = this.btree.order) {
    this.btree = new BTree<Type>(newOrder)
    this.drawTree()
  }

  insert (key: Type) {
    this.btree.insert(key)
    this.drawTree()
  }

  validateInsertion (key: Type) {

  }

  remove (key: Type) {
    this.btree.remove(key)
    this.drawTree()
  }

  validateRemoval (key: Type) {

  }

  drawTree () {

  }
}
