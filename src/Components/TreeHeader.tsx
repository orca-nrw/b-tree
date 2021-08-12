import React, { useState } from 'react'

interface Props {
  insertionHandler: (x: any) => void,
  deletionHandler: (x: any) => void,
  resetHandler: () => void,
  treeType: number,
  setTreeType: (x: number) => void
}

export const TreeHeader = ({ insertionHandler, deletionHandler, resetHandler, treeType, setTreeType }: Props) => {
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
    <div className="flex justify-between">
      <h1 className="text-4xl m-4 font-mono">
        B-Baum-Zeichner
      </h1>
      <div className="flex flex-col items-end">
        <form className="">
          <input className="p-1 w-20 border rounded-lg border-gray-500" type="text" maxLength={5} value={insertValue} onChange={handleInsertionInput} />
          <button className="bg-purple-500 hover:bg-purple-600 text-white p-1 rounded-md cursor-pointer m-2" type="button" value="insert" onClick={onInsert}>Einfügen</button>

          <input className="p-1 w-20 border rounded-lg border-gray-500" type="text" maxLength={5} value={deletionValue} onChange={handleDeletionInput} />
          <button className="bg-purple-500 hover:bg-purple-600 text-white p-1 rounded-md cursor-pointer m-2" type="button" value="delete" onClick={onDelete}>Löschen</button>

          <button className="bg-purple-500 hover:bg-purple-600 text-white p-1 rounded-md cursor-pointer m-2" type="button" value="reset" onClick={onReset}>Zurücksetzen</button>
        </form>
        <form className="">
          <label className="mr-4 text-sm" htmlFor="treeType1">Typ des Baums:</label>

          <input className="" type="radio" name="treeType" id="treeType1" value={1} checked={treeType === 1} onChange={onTreeTypeChange} />
          <label className="mr-2 ml-1 text-sm" htmlFor="treeType1">Typ 1</label>

          <input className="" type="radio" name="treeType" id="treeType2" value={2} checked={treeType === 2} onChange={onTreeTypeChange} />
          <label className="mr-2 ml-1 text-sm" htmlFor="treeType2">Typ 2</label>

          <input className="" type="radio" name="treeType" id="treeType3" value={3} checked={treeType === 3} onChange={onTreeTypeChange} />
          <label className="mr-2 ml-1 text-sm" htmlFor="treeType3">Typ 3</label>

          <input className="" type="radio" name="treeType" id="treeType4" value={4} checked={treeType === 4} onChange={onTreeTypeChange} />
          <label className="mr-2 ml-1 text-sm" htmlFor="treeType4">Typ 4</label>

          <input className="" type="radio" name="treeType" id="treeType5" value={5} checked={treeType === 5} onChange={onTreeTypeChange} />
          <label className="mr-2 ml-1 text-sm" htmlFor="treeType5">Typ 5</label>
        </form>
      </div>
    </div>
  )
}
