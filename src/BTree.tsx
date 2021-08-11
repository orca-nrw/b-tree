import React, { useState } from 'react'
import { TreeHeader } from './TreeHeader'

export const BTree = () => {
  const [treeType, setTreeType] = useState(1)
  const [infoText, setInfoText] = useState('')

  function handleInsertion (x: any) {
    console.log('Insert:', x)
  }

  function handleDeletion (x: any) {
    console.log('Delete: ', x)
  }

  function handleReset () {
    setInfoText('Reset!')
    console.log('Reset!')
  }

  return (
    <div className="mx-0 my-5 bg-white">
      <TreeHeader
        insertionHandler={handleInsertion}
        deletionHandler={handleDeletion}
        resetHandler={handleReset}
        treeType={treeType}
        setTreeType={setTreeType} />
      <div className="">{infoText}</div>

      <canvas id="canvas" />
    </div>
  )
}
