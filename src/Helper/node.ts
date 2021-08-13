export class Node {
  parent: Node | null
  keys: number[]
  children: Node[]

  constructor () {
    this.parent = null
    this.keys = []
    this.children = []
  }

  insertKey (newKey: number, order: number) {
    if (!this.isFull(order)) {
      for (let i = 0; i <= order * 2 - 1; i++) {
        if (newKey < this.keys[i] || this.keys[i] == null) {
          this.keys.splice(i, 0, newKey)
          break
        }
      }
    } else {
      console.log('Node is full.')
    }
  }

  isLeaf () {
    if (this.children.length === 0) {
      return true
    } else {
      return false
    }
  }

  isFull (order: number) {
    for (let i = 0; i <= order * 2 - 1; i++) {
      if (this.keys[i] == null) {
        return false
      }
    }
    return true
  }

  addChild (newChildNode: Node) {
    newChildNode.parent = this
    const key1 = newChildNode.keys[0]
    for (let i = 0; i < this.keys.length; i++) {
      if (key1 < this.keys[i]) {
        this.children.splice(i, 0, newChildNode)
        break
      } else if (this.keys[i] < key1 && this.keys[i + 1] == null) {
        this.children.splice(i + 1, 0, newChildNode)
        break
      }
    }
  }
}
