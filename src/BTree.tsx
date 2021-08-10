import React, { useState } from 'react'
import { TreeForms } from './TreeForms'

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
    <div className='app-container'>
      <TreeForms
        insertionHandler={handleInsertion}
        deletionHandler={handleDeletion}
        resetHandler={handleReset}
        treeType={treeType}
        setTreeType={setTreeType} />
      <div className='info-text'>{infoText}</div>

      <canvas id='canvas' />
    </div>
  )
}
