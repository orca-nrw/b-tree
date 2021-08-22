import React, { useState } from 'react'

interface Props {
  insertionHandler: (input: string) => void,
  deletionHandler: (input: string) => void,
  resetHandler: () => void,
  degree: number,
  setDegree: (x: number) => void,
  treeType: string,
  setTreeType: (newTreeType: string) => void
}

export const InputBar = ({ insertionHandler, deletionHandler, resetHandler, degree, setDegree, treeType, setTreeType }: Props) => {
  const [insertValue, setInsertValue] = useState('')
  const [deletionValue, setDeletionValue] = useState('')

  // Insertion
  function onInsert (event: React.FormEvent<HTMLButtonElement>) {
    insertionHandler(insertValue)
    setInsertValue('')
  }

  function handleKeyDownInsert (event: React.KeyboardEvent) {
    if (!(event.key === 'Enter')) return
    insertionHandler(insertValue)
    setInsertValue('')
  }

  function handleInsertionInput (event: React.FormEvent<HTMLInputElement>) {
    setInsertValue(event.currentTarget.value)
  }

  // Deletion
  function onDelete (event: React.FormEvent<HTMLButtonElement>) {
    deletionHandler(deletionValue)
    setDeletionValue('')
  }

  function handleKeyDownDelete (event: React.KeyboardEvent) {
    if (!(event.key === 'Enter')) return
    deletionHandler(deletionValue)
    setDeletionValue('')
  }

  function handleDeletionInput (event: React.FormEvent<HTMLInputElement>) {
    setDeletionValue(event.currentTarget.value)
  }

  // Resets
  function onReset (e: React.FormEvent<HTMLButtonElement>) {
    resetHandler()
  }

  function onDegreeChange (e: React.FormEvent<HTMLInputElement>) {
    setDegree(Number(e.currentTarget.value))
  }

  // TreeType Toggle
  function onTypeChange (e: React.FormEvent<HTMLSelectElement>) {
    setTreeType(e.currentTarget.value)
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
          <label className="mr-2 font-semibold" htmlFor="degree1">Typ des Baums:</label>

          <div>
            <input className="mr-1" type="radio" name="degree" id="degree1" value={1} checked={degree === 1} onChange={onDegreeChange} />
            <label className="text-sm" htmlFor="degree1">Grad 1</label>
          </div>

          <div>
            <input className="mr-1" type="radio" name="degree" id="degree2" value={2} checked={degree === 2} onChange={onDegreeChange} />
            <label className="text-sm" htmlFor="degree2">Grad 2</label>
          </div>

          <div>
            <input className="mr-1" type="radio" name="degree" id="degree3" value={3} checked={degree === 3} onChange={onDegreeChange} />
            <label className="text-sm" htmlFor="degree3">Grad 3</label>
          </div>

          <div>
            <input className="mr-1" type="radio" name="degree" id="degree4" value={4} checked={degree === 4} onChange={onDegreeChange} />
            <label className="text-sm" htmlFor="degree4">Grad 4</label>
          </div>

          <div>
            <input className="mr-1" type="radio" name="degree" id="degree5" value={5} checked={degree === 5} onChange={onDegreeChange} />
            <label className="text-sm" htmlFor="degree5">Grad 5</label>
          </div>
        </div>
        <div>
          <label htmlFor="treeType">Typ des Baums</label>
          <select id="treeType" onChange={onTypeChange}>
            <option value="number">Zahlen</option>
            <option value="string">Strings</option>
          </select>
        </div>
      </div>
    </div>
  )
}
