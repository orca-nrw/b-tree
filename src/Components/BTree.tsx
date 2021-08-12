import React, { useState, useRef, useEffect } from 'react'
import { initializeCanvas, insertValue, resetTree } from '../Helper/canvas'
import { TreeHeader } from './TreeHeader'

export const BTree = () => {
  const [treeType, setTreeType] = useState(1)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  let context: CanvasRenderingContext2D

  function handleInsertion (x: any) {
    insertValue(Number(x), context)
  }

  function handleDeletion (x: any) {
    console.log('Delete: ', x)
  }

  function handleReset () {
    resetTree(context, treeType)
  }

  useEffect(() => {
    // Initialize Context with null handling
    const canvas = canvasRef.current
    if (!canvas) return
    canvas.height = 750
    const resolver = canvas?.getContext('2d')
    if (!resolver || !(resolver instanceof CanvasRenderingContext2D)) return
    context = resolver
    initializeCanvas(context, treeType)
  }, [])

  return (
    <div className="mx-0 my-5 bg-white">
      <TreeHeader
        insertionHandler={handleInsertion}
        deletionHandler={handleDeletion}
        resetHandler={handleReset}
        treeType={treeType}
        setTreeType={setTreeType} />

      <canvas className="mx-auto" ref={canvasRef}></canvas>
    </div>
  )
}
