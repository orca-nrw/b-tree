import React, { useState } from 'react'

interface Props {
  insertionHandler: (x: any) => void,
  deletionHandler: (x: any) => void,
  resetHandler: () => void,
  treeType: number,
  setTreeType: (x: number) => void
}

export const TreeForms = ({ insertionHandler, deletionHandler, resetHandler, treeType, setTreeType }: Props) => {
  const [insertValue, setInsertValue] = useState('')
  const [deletionValue, setDeletionValue] = useState('')

  function onInsert (event: React.FormEvent<HTMLButtonElement>) {
    insertionHandler(insertValue)
    setInsertValue('')
  }

  function onDelete (event: React.FormEvent<HTMLButtonElement>) {
    deletionHandler(deletionValue)
    setDeletionValue('')
  }

  function onReset (e: React.FormEvent<HTMLButtonElement>) {
    resetHandler()
  }

  function handleInsertionInput (event: React.FormEvent<HTMLInputElement>) {
    setInsertValue(event.currentTarget.value)
  }

  function handleDeletionInput (event: React.FormEvent<HTMLInputElement>) {
    setDeletionValue(event.currentTarget.value)
  }

  function onTreeTypeChange (e: React.FormEvent<HTMLInputElement>) {
    setTreeType(Number(e.currentTarget.value))
  }

  return (
    <div className='forms-container'>
        <form className='tree-inputs'>
          <input className='tree-text-input' type='text' maxLength={5} value={insertValue} onChange={handleInsertionInput} />
          <button className='btn' type='button' value='insert' onClick={onInsert}>Einfügen</button>
          <input className='tree-text-input' type="text" maxLength={5} value={deletionValue} onChange={handleDeletionInput} />
          <button className='btn' type="button" value="delete" onClick={onDelete}>Löschen</button>
          <button className='btn' type="button" value="reset" onClick={onReset}>Zurücksetzen</button>
        </form>
        <form className='tree-type-input'>
          <label htmlFor="treeType1">Typ des Baums:</label>
          <input type="radio" name="treeType" id="treeType1" value={1} checked={treeType === 1} onChange={onTreeTypeChange} />
          <label htmlFor="treeType1">Typ 1</label>
          <input type="radio" name="treeType" id="treeType2" value={2} checked={treeType === 2} onChange={onTreeTypeChange} />
          <label htmlFor="treeType2">Typ 2</label>
          <input type="radio" name="treeType" id="treeType3" value={3} checked={treeType === 3} onChange={onTreeTypeChange} />
          <label htmlFor="treeType3">Typ 3</label>
          <input type="radio" name="treeType" id="treeType4" value={4} checked={treeType === 4} onChange={onTreeTypeChange} />
          <label htmlFor="treeType4">Typ 4</label>
          <input type="radio" name="treeType" id="treeType5" value={5} checked={treeType === 5} onChange={onTreeTypeChange} />
          <label htmlFor="treeType5">Typ 5</label>
        </form>
      </div>
  )
}
