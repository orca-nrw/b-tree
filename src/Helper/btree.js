/* eslint-disable */
import { Node } from './node'

export class Tree {
  constructor (order) {
    this.order = order
    this.root = new Node()
    this.height = 1
  }

  getLeftNeighborNode (node) {
    if (node.parent != null) {
      for (let i = 0; i < node.parent.children.length; i++) {
        if (node == node.parent.children[i]) {
          if ((i - 1) >= 0) {
            return node.parent.children[i - 1]
          } else {
            console.log('There is no left neigbor Node')
            return null
          }
        }
      }
    }
  }

  getRightNeighborNode (node) {
    if (node.parent != null) {
      for (let i = 0; i < node.parent.children.length; i++) {
        if (node == node.parent.children[i]) {
          if ((i + 1) < node.parent.children.length) {
            return node.parent.children[i + 1]
          } else {
            console.log('There is no right neighbor Node')
            return null
          }
        }
      }
    }
  }

  deleteValue (value, nodeToCheck) {
    let node = this.findNode(value, nodeToCheck)
    if (node == null) {
      console.log('Value does not exist in Tree.')
    } else {
      // If Leaf
      if (node.isLeaf()) {
        // No Underflow
        if (node.keys.length > this.order) {
          for (let i = 0; i < node.keys.length; i++) {
            if (value == node.keys[i]) {
              node.keys.splice(i, 1)
            }
          }
        } else if (node.keys.length == this.order) { // Underflow
          // Underflow and NeighborNode (left or right) has k+1 -> Rotate
          const leftNeighborNode = this.getLeftNeighborNode(node)
          const rightNeighborNode = this.getRightNeighborNode(node)

          // If Underflow and left NeighborNode has k+1, steal value from left neighborNode
          if (leftNeighborNode != null && leftNeighborNode.keys.length > this.order) {
            for (let i = 0; i < node.parent.children.length; i++) {
              if (node == node.parent.children[i]) {
                for (let j = 0; j < node.keys.length; j++) {
                  if (value == node.keys[j]) {
                    node.keys.splice(j, 1)
                  }
                }
                node.insertKey(node.parent.keys[i - 1], this.order)
                node.parent.keys[i - 1] = leftNeighborNode.keys[leftNeighborNode.keys.length - 1]
                leftNeighborNode.keys.splice(leftNeighborNode.keys.length - 1, 1)
              }
            }

            // If Underflow and left NeighborNode has not k+1, but right NeighborNode has k+1, steal value from right neighborNode
          } else if (rightNeighborNode != null && rightNeighborNode.keys.length > this.order) {
            for (let i = 0; i < node.parent.children.length; i++) {
              if (node == node.parent.children[i]) {
                for (let j = 0; j < node.keys.length; j++) {
                  if (value == node.keys[j]) {
                    node.keys.splice(j, 1)
                  }
                }
                node.insertKey(node.parent.keys[i], this.order)
                node.parent.keys[i] = rightNeighborNode.keys[0]
                rightNeighborNode.keys.splice(0, 1)
              }
            }
          } else { // Underflow and both NeighborNodes have not k+1 -> Take value from ParentNode in deleted Node (Merge)
            // If there is a left NeighborNode, merge with it
            if (leftNeighborNode != null) {
              for (let i = 0; i < node.parent.children.length; i++) {
                if (node == node.parent.children[i]) {
                  for (let j = 0; j < node.keys.length; j++) {
                    if (value == node.keys[j]) {
                      node.keys.splice(j, 1)
                    }
                  }
                  node.insertKey(node.parent.keys[i - 1], this.order)
                  node.parent.keys.splice(i - 1, 1)

                  for (let j = 0; j < node.keys.length; j++) {
                    leftNeighborNode.insertKey(node.keys[j], this.order)
                  }
                  node.parent.children.splice(i, 1)
                }
              }
              if (node.parent.keys.length == 0 && node.parent.parent == null) {
                leftNeighborNode.parent = null
                this.root = leftNeighborNode
              }
              // If there is not left NeighborNode, but a right one, merge with the right Node
            } else if (rightNeighborNode != null) {
              for (let i = 0; i < node.parent.children.length; i++) {
                if (node == node.parent.children[i]) {
                  for (let j = 0; j < node.keys.length; j++) {
                    if (value == node.keys[j]) {
                      node.keys.splice(j, 1)
                    }
                  }
                  node.insertKey(node.parent.keys[i], this.order)
                  node.parent.keys.splice(i, 1)

                  for (let j = 0; j < node.keys.length; j++) {
                    rightNeighborNode.insertKey(node.keys[j], this.order)
                  }

                  node.parent.children.splice(i, 1)
                }
              }
              if (node.parent.keys.length == 0 && node.parent.parent == null) {
                rightNeighborNode.parent = null
                this.root = rightNeighborNode
              }
            }
            // If Parent has < k values because of merge, it gets values from neighbor or parent
            if (node.parent.keys.length < this.order) {
              console.log('Parent has not enough keys')
              this.handleUnderflowInParent(node.parent)
            }
            node = null
          }
        }
      } else { // If Node has Children
        this.deleteValueInNode(value, node)
      }
    }
  }

  handleUnderflowInParent (node) {
    // NeighborNode (left or right) has k+1

    const leftNeighborNode = this.getLeftNeighborNode(node)
    const rightNeighborNode = this.getRightNeighborNode(node)

    if (leftNeighborNode != null && leftNeighborNode.keys.length > this.order) {
      for (let i = 0; i < node.parent.children.length; i++) {
        if (node == node.parent.children[i]) {
          // Steal values
          node.insertKey(node.parent.keys[i - 1], this.order)
          node.parent.keys[i - 1] = leftNeighborNode.keys[leftNeighborNode.keys.length - 1]
          leftNeighborNode.keys.splice(leftNeighborNode.keys.length - 1, 1)

          // Assign children
          const tempNodeChildren = []
          tempNodeChildren.push(leftNeighborNode.children[leftNeighborNode.children.length - 1])
          leftNeighborNode.children.splice(leftNeighborNode.children.length - 1, 1)
          for (let i = 0; i < node.children.length; i++) {
            tempNodeChildren.push(node.children[i])
          }
          node.children = []
          for (let i = 0; i < tempNodeChildren.length; i++) {
            node.addChild(tempNodeChildren[i])
          }
        }
      }
    } else if (rightNeighborNode != null && rightNeighborNode.keys.length > this.order) {
      for (let i = 0; i < node.parent.children.length; i++) {
        if (node == node.parent.children[i]) {
          // Steal values
          node.insertKey(node.parent.keys[i], this.order)
          node.parent.keys[i] = rightNeighborNode.keys[0]
          rightNeighborNode.keys.splice(0, 1)

          // Assign children
          const tempNodeChildren = []
          tempNodeChildren.push(rightNeighborNode.children[0])
          rightNeighborNode.children.splice(0, 1)
          for (let i = 0; i < node.children.length; i++) {
            tempNodeChildren.push(node.children[i])
          }
          node.children = []
          for (let i = 0; i < tempNodeChildren.length; i++) {
            node.addChild(tempNodeChildren[i])
          }
        }
      }
    } else { // No NeighborNode with k+1, merge with left or right NeighborNode
      // If there is a left NeighborNode, merge with it
      if (leftNeighborNode != null) {
        for (let i = 0; i < node.parent.children.length; i++) {
          if (node == node.parent.children[i]) {
            node.insertKey(node.parent.keys[i - 1], this.order)
            node.parent.keys.splice(i - 1, 1)
            node.parent.children.splice(i, 1)
            for (let j = 0; j < node.keys.length; j++) {
              leftNeighborNode.insertKey(node.keys[j], this.order)
            }

            // Handle children
            for (let j = 0; j < node.children.length; j++) {
              leftNeighborNode.addChild(node.children[j])
            }
          }
        }

        // If Parent Node empty now, delete
        if (node.parent.keys.length == 0 && node.parent.parent == null) {
          leftNeighborNode.parent = null
          this.root = leftNeighborNode
        }
      } else if (rightNeighborNode != null) { // If there is no left NeighborNode, but a right NeighborNode, merge with right NeighborNode
        for (let i = 0; i < node.parent.children.length; i++) {
          if (node == node.parent.children[i]) {
            node.insertKey(node.parent.keys[i], this.order)
            node.parent.keys.splice(i, 1)
            node.parent.children.splice(i, 1)
            for (let j = 0; j < node.keys.length; j++) {
              rightNeighborNode.insertKey(node.keys[j], this.order)
            }

            // Handle children
            for (let j = 0; j < node.children.length; j++) {
              rightNeighborNode.addChild(node.children[j])
            }
          }
        }
        if (node.parent.keys.length == 0 && node.parent.parent == null) {
          rightNeighborNode.parent = null
          this.root = rightNeighborNode
        }
      }
      if (node.parent != null) {
        if (node.parent.keys.length < this.order && node.parent.parent != null) {
          this.handleUnderflowInParent(node.parent)
        }
      }

      node = null
    }
  }

  deleteValueInNode (value, node) {
    let tempChildNode = new Node()

    // Delete value from Node
    for (let i = 0; i < node.keys.length; i++) {
      if (value == node.keys[i]) {
        node.keys.splice(i, 1)
      }
      tempChildNode = node.children[i]
    }
    // Traverse to max value
    while (!tempChildNode.isLeaf()) {
      tempChildNode = tempChildNode.children[tempChildNode.children.length - 1]
    }
    // Take max value from max child and insert it in parent
    const replaceValue = tempChildNode.keys[tempChildNode.keys.length - 1]
    node.insertKey(replaceValue, this.order)

    this.deleteValue(replaceValue, tempChildNode)
  }

  findValue (value, nodeToCheck) {
    const node = this.findNode(value, nodeToCheck)
    if (node == null) {
      return null
    } else {
      for (let i = 0; i < node.keys.length; i++) {
        if (value == node.keys[i]) {
          return node.keys[i]
        }
      }
    }
  }

  findNode (value, nodeToCheck) {
    for (let i = 0; i < nodeToCheck.keys.length; i++) {
      if (value == nodeToCheck.keys[i]) {
        return nodeToCheck
      }
    }
    if (nodeToCheck.isLeaf()) {
      return null
    }
    for (let i = 0; i < nodeToCheck.keys.length; i++) {
      if (value < nodeToCheck.keys[i]) {
        return this.findNode(value, nodeToCheck.children[i])
      } else if (nodeToCheck.keys[i] < value && nodeToCheck.keys[i + 1] == null) {
        return this.findNode(value, nodeToCheck.children[i + 1])
      }
    }
  }

  insertKey (newKey) {
    const leafNode = this.getLeafNode(newKey, this.root)

    // If leafNode is not full, insert
    if (!leafNode.isFull(this.order)) {
      leafNode.insertKey(newKey, this.order)
    } else { // If leafNode is not full, split
      // Insert 2k+1 values in node
      for (let i = 0; i <= this.order * 2; i++) {
        if (newKey < leafNode.keys[i] || leafNode.keys[i] == null) {
          leafNode.keys.splice(i, 0, newKey)
          break
        }
      }
      // Split Node with 2k+1 values
      this.split(leafNode, this.order)
    }
  }

  getLeafNode (newKey, nodeToCheck) {
    if (nodeToCheck.isLeaf()) {
      return nodeToCheck
    } else {
      for (let i = 0; i < nodeToCheck.keys.length; i++) {
        if (newKey < nodeToCheck.keys[i]) {
          return this.getLeafNode(newKey, nodeToCheck.children[i])
        } else if (nodeToCheck.keys[i] < newKey && nodeToCheck.keys[i + 1] == null) {
          return this.getLeafNode(newKey, nodeToCheck.children[i + 1])
        }
      }
    }
  }

  split (nodeToSplit, order) {
    // Create new parent and neighbor Node
    let parentNode = new Node()
    if (nodeToSplit.parent != null) parentNode = nodeToSplit.parent
    const neighborNode = new Node()

    // Insert values in new neighbor Node
    const insertInParent = nodeToSplit.keys[order]
    for (let i = order + 1; i <= order * 2; i++) {
      neighborNode.keys.push(nodeToSplit.keys[i])
      if (nodeToSplit.children.length !== 0) {
        nodeToSplit.children[i].parent = neighborNode
        neighborNode.children.push(nodeToSplit.children[i])
        if (nodeToSplit.keys[i + 1] == null) {
          nodeToSplit.children[i + 1].parent = neighborNode
          neighborNode.children.push(nodeToSplit.children[i + 1])
        }
      }
    }
    // Delete values from nodeToSplit, which were inserted into new neighbor Node
    while (nodeToSplit.keys[order] != null) {
      nodeToSplit.keys.splice(order, 1)
      if (nodeToSplit.children.length !== 0) {
        nodeToSplit.children.splice(order + 1, 1)
      }
    }

    if (!parentNode.isFull(this.order)) {
      // Insert key in parent
      parentNode.insertKey(insertInParent, this.order)
      // Add children to parent Node
      if (nodeToSplit.parent == null) {
        parentNode.addChild(nodeToSplit)
      }
      parentNode.addChild(neighborNode)
      // If parent has no parent, set parent as new root
      if (parentNode.parent == null) this.root = parentNode
    } else {
      for (let i = 0; i <= this.order * 2; i++) {
        if (insertInParent < parentNode.keys[i] || parentNode.keys[i] == null) {
          parentNode.keys.splice(i, 0, insertInParent)
          break
        }
      }
      if (nodeToSplit.parent == null) {
        parentNode.addChild(nodeToSplit)
      }
      parentNode.addChild(neighborNode)

      this.split(parentNode, this.order)
    }
  }

  getDepth () {
    let currentNode = this.root
    let depth = 1
    while (currentNode.children[0] != null) {
      depth += 1
      currentNode = currentNode.children[0]
    }
    return depth
  }

  printTree () {
    const currentNode = this.root
    const depth = this.getDepth()
    const depthCounter = 0
    const stringsLevel = []
    // Insert empty strings into array, so there is no "undefined" in front of each entry
    for (let i = 0; i < depth; i++) {
      stringsLevel.push('')
    }
    // Recursive printNode-function fills stringsLevel-Array
    this.printNode(currentNode, stringsLevel, depthCounter)
    // Print stringsLevel-Array with few space shiftings
    const stringSpace = '         '
    let stringMultiplier = stringsLevel.length - 1
    for (let i = 0; i < stringsLevel.length; i++) {
      for (let j = 0; j < stringMultiplier; j++) {
        stringsLevel[i] = stringSpace + stringsLevel[i]
      }
      stringMultiplier -= 1
      console.log(stringsLevel[i])
    }
  }

  // returnTree is the same method as printTree, the only difference is, that this method returns the stringsLevel-Array instead of printing it in console
  returnTree () {
    const currentNode = this.root
    const depth = this.getDepth()
    const depthCounter = 0
    const stringsLevel = []
    // Insert empty strings into array, so there is no "undefined" in front of each entry
    for (let i = 0; i < depth; i++) {
      stringsLevel.push('')
    }
    // Recursive printNode-function fills stringsLevel-Array
    this.printNode(currentNode, stringsLevel, depthCounter)
    return stringsLevel
  }

  printNode (node, stringsLevel, depth) {
    stringsLevel[depth] += '|' + node.keys + '|  '
    if (!node.isLeaf()) {
      depth += 1
      for (let i = 0; i < node.children.length; i++) {
        this.printNode(node.children[i], stringsLevel, depth)
      }
    }
  }

  returnTreeObject () {
    const currentNode = this.root
    const depth = this.getDepth()
    const depthCounter = 0
    const stringsLevel = []
    // Insert empty strings into array, so there is no "undefined" in front of each entry
    for (let i = 0; i < depth; i++) {
      const array = []
      stringsLevel.push(array)
    }
    // Recursive printNode-function fills stringsLevel-Array
    this.printNodeObject(currentNode, stringsLevel, depthCounter)
    return stringsLevel
  }

  printNodeObject (node, stringsLevel, depth) {
    stringsLevel[depth].push(node)
    if (!node.isLeaf()) {
      depth += 1
      for (let i = 0; i < node.children.length; i++) {
        this.printNodeObject(node.children[i], stringsLevel, depth)
      }
    }
  }
}
