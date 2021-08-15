import React, { useState, useRef, useEffect } from 'react'
import { CanvasHelper } from '../Helper/CanvasHelper'
import { TreeHeader } from './TreeHeader'

export const BTree = () => {
  const [treeType, setTreeType] = useState(1)
  const [canvasHelper, setCanvasHelper] = useState<CanvasHelper<Number>>()
  const canvasRef = useRef<HTMLCanvasElement>(null)

  function handleInsertion (key: any) {
    if (canvasHelper) canvasHelper.insert(Number(key))
  }

  function handleDeletion (key: any) {
    if (canvasHelper) canvasHelper.remove(Number(key))
  }

  function handleReset (treeType?: number) {
    if (canvasHelper) canvasHelper.resetTree(treeType)
  }

  useEffect(() => {
    // Initialize canvasHelper with null handling
    const canvas = canvasRef.current
    if (!canvas) throw Error('Could not find canvas reference!')
    setCanvasHelper(new CanvasHelper<Number>(canvas, treeType))
  }, [])

  useEffect(() => {
    // Handle tree type changes by resetting the tree and setting the new type
    handleReset(treeType)
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
