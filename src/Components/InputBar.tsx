import React, { useState } from 'react'

interface Props {
  insertionHandler: (x: any) => void,
  deletionHandler: (x: any) => void,
  resetHandler: () => void,
  treeType: number,
  setTreeType: (x: number) => void
}

export const InputBar = ({ insertionHandler, deletionHandler, resetHandler, treeType, setTreeType }: Props) => {
  const [insertValue, setInsertValue] = useState('')
  const [deletionValue, setDeletionValue] = useState('')

  function onInsert (event: React.FormEvent<HTMLButtonElement>) {
    insertionHandler(insertValue)
    setInsertValue('')
  }

  function handleKeyDownInsert (event: React.KeyboardEvent) {
    if (!(event.key === 'Enter')) return
    insertionHandler(insertValue)
    setInsertValue('')
  }

  function onDelete (event: React.FormEvent<HTMLButtonElement>) {
    deletionHandler(deletionValue)
    setDeletionValue('')
  }

  function handleKeyDownDelete (event: React.KeyboardEvent) {
    if (!(event.key === 'Enter')) return
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
    <div className="p-4 flex justify-between">
      <h1 className="text-4xl font-mono">
        B-Baum-Zeichner
      </h1>
      <div className="flex flex-col items-end">
        <div className="flex flex-row">
          <input className="p-1 mr-2 w-20 border rounded-lg border-gray-500" type="text" maxLength={5} value={insertValue} onChange={handleInsertionInput} onKeyDown={handleKeyDownInsert} />
          <button className="mr-4 bg-purple-500 hover:bg-purple-600 text-white px-2 py-1 rounded-md cursor-pointer" type="button" value="insert" onClick={onInsert}>Einfügen</button>

          <input className="p-1 mr-2 w-20 border rounded-lg border-gray-500" type="text" maxLength={5} value={deletionValue} onChange={handleDeletionInput} onKeyDown={handleKeyDownDelete} />
          <button className="mr-4 bg-purple-500 hover:bg-purple-600 text-white px-2 py-1 rounded-md cursor-pointer" type="button" value="delete" onClick={onDelete}>Löschen</button>

          <button className="bg-purple-500 hover:bg-purple-600 text-white px-2 py-0 rounded-md cursor-pointer" type="button" value="reset" onClick={onReset}>Zurücksetzen</button>

        </div>
        <div className="mt-2 space-x-3 flex flex-row">
          <label className="mr-2 font-semibold" htmlFor="treeType1">Typ des Baums:</label>

          <div>
            <input className="mr-1" type="radio" name="treeType" id="treeType1" value={1} checked={treeType === 1} onChange={onTreeTypeChange} />
            <label className="text-sm" htmlFor="treeType1">Typ 1</label>
          </div>

          <div>
            <input className="mr-1" type="radio" name="treeType" id="treeType2" value={2} checked={treeType === 2} onChange={onTreeTypeChange} />
            <label className="text-sm" htmlFor="treeType2">Typ 2</label>
          </div>

          <div>
            <input className="mr-1" type="radio" name="treeType" id="treeType3" value={3} checked={treeType === 3} onChange={onTreeTypeChange} />
            <label className="text-sm" htmlFor="treeType3">Typ 3</label>
          </div>

          <div>
            <input className="mr-1" type="radio" name="treeType" id="treeType4" value={4} checked={treeType === 4} onChange={onTreeTypeChange} />
            <label className="text-sm" htmlFor="treeType4">Typ 4</label>
          </div>

          <div>
            <input className="mr-1" type="radio" name="treeType" id="treeType5" value={5} checked={treeType === 5} onChange={onTreeTypeChange} />
            <label className="text-sm" htmlFor="treeType5">Typ 5</label>
          </div>
        </div>
      </div>
    </div>
  )
}
