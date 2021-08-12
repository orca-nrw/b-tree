import React, { useState, useRef, useEffect } from 'react'
import { TreeHeader } from './TreeHeader'

export const BTree = () => {
  const [treeType, setTreeType] = useState(1)
  const height = 500
  const width = 500
  const canvasRef = useRef<HTMLCanvasElement>(null)
  let context: CanvasRenderingContext2D

  function handleInsertion (x: any) {
    console.log(context)
  }

  function handleDeletion (x: any) {
    console.log('Delete: ', x)
  }

  function handleReset () {
    console.log('Reset!')
  }

  useEffect(() => {
    // Initialize Context with null handling
    const canvas = canvasRef.current
    const resolver = canvas?.getContext('2d')
    if (!resolver || !(resolver instanceof CanvasRenderingContext2D)) return
    context = resolver
  }, [])

  return (
    <div className="mx-0 my-5 bg-white">
      <TreeHeader
        insertionHandler={handleInsertion}
        deletionHandler={handleDeletion}
        resetHandler={handleReset}
        treeType={treeType}
        setTreeType={setTreeType} />

      <canvas className="mx-auto" ref={canvasRef} height={height} width={width}></canvas>
    </div>
  )
}
