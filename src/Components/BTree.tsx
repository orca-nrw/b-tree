import React, { useState, useRef, useEffect } from 'react'
import { CanvasHelper } from '../Helper/CanvasHelper'
import { TreeHeader } from './TreeHeader'

export const BTree = () => {
  const [treeType, setTreeType] = useState(1)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  let canvasHelper: CanvasHelper<Number>

  function handleInsertion (key: any) {
    canvasHelper.insert(Number(key))
  }

  function handleDeletion (key: any) {
    canvasHelper.remove(Number(key))
  }

  function handleReset () {
    canvasHelper.resetTree()
  }

  useEffect(() => {
    // Initialize canvasHelper with null handling
    const canvas = canvasRef.current
    if (!canvas) throw Error('Could not find canvas reference!')
    canvasHelper = new CanvasHelper<Number>(canvas, treeType)
  }, [])

  useEffect(() => {
    // Handle tree type changes by resetting the tree and setting the new type
    canvasHelper.resetTree(treeType)
  }, [treeType])

  return (
    <div className="mx-0 my-5 bg-white">
      <TreeHeader
        insertionHandler={handleInsertion}
        deletionHandler={handleDeletion}
        resetHandler={handleReset}
        treeType={treeType}
        setTreeType={setTreeType} />

      <canvas className="m-auto" ref={canvasRef}></canvas>
    </div>
  )
}
