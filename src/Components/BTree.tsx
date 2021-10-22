import React, { useState, useRef, useEffect } from 'react'
import { CanvasHelper } from '../Helper/CanvasHelper'
import { InputBar } from './InputBar'

export const BTree = () => {
  const [degree, setDegree] = useState(1)
  const [treeType, setTreeType] = useState('number')
  const [canvasHelper, setCanvasHelper] = useState<CanvasHelper<any>>()
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Inserts and deletions are validated in the canvas which also displays possible error messages
  function handleInsertion (key: number | string) {
    if (!canvasHelper) return
    canvasHelper.insert(key)
  }

  function handleDeletion (key: number | string) {
    if (!canvasHelper) return
    canvasHelper.remove(key)
  }

  function handleReset (newDegree: number = degree) {
    if (!canvasHelper) return
    canvasHelper.resetTree(newDegree)
  }

  // Initialize canvasHelper with null handling
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) throw Error('Could not find canvas reference!')

    setCanvasHelper(new CanvasHelper<Number>(canvas, degree, treeType))
  }, [])

  // Handle degree changes by resetting the tree and setting the new degree
  useEffect(() => {
    handleReset(degree)
  }, [degree])

  // Handle treeType changes by resetting the tree and changing its type
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) throw Error('Could not find canvas reference!')

    if (treeType === 'number') {
      setCanvasHelper(new CanvasHelper<number>(canvas, degree, treeType))
    } else {
      setCanvasHelper(new CanvasHelper<string>(canvas, degree, treeType))
    }
  }, [treeType])

  return (
    <>
      <div className="bg-white p-4">
          <h1 className="no-underline text-black text-4xl font-semibold font-mono">B-Baum-Zeichner</h1>
      </div>
      <div className="bg-white p-4">
        <InputBar
          insertionHandler={handleInsertion}
          deletionHandler={handleDeletion}
          resetHandler={handleReset}
          treeType={treeType}
          setTreeType={setTreeType}
          degree={degree}
          setDegree={setDegree} />

        <canvas className="m-auto" ref={canvasRef}></canvas>
      </div>
    </>
  )
}
