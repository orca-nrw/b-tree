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

  function onDegreeChange (e: React.FormEvent<HTMLSelectElement>) {
    setDegree(Number(e.currentTarget.value))
  }

  // TreeType Toggle
  function onTypeChange (e: React.FormEvent<HTMLSelectElement>) {
    setTreeType(e.currentTarget.value)
  }

  return (
    <>
      <div className="flex flex-col items-end space-y-2">
        <div className="flex flex-row">
          <input className="p-1 mr-2 w-20 border rounded-lg border-gray-500" type="text" maxLength={5} value={insertValue} onChange={handleInsertionInput} onKeyDown={handleKeyDownInsert} />
          <button className="mr-4 bg-purple-500 hover:bg-purple-600 hover:shadow-md text-white px-2 py-1 rounded-md cursor-pointer" type="button" value="insert" onClick={onInsert}>Einfügen</button>

          <input className="p-1 mr-2 w-20 border rounded-lg border-gray-500" type="text" maxLength={5} value={deletionValue} onChange={handleDeletionInput} onKeyDown={handleKeyDownDelete} />
          <button className="bg-purple-500 hover:bg-purple-600 hover:shadow-md text-white px-2 py-1 rounded-md cursor-pointer" type="button" value="delete" onClick={onDelete}>Löschen</button>
        </div>

        <div>
          <label className="mr-2 font-semibold" htmlFor="treeType">Typ des Baums:</label>
          <select className="border rounded border-black" id="treeType" onChange={onTypeChange}>
            <option value="number">Zahlen</option>
            <option value="string">Strings</option>
          </select>
        </div>
        <div>
          <label className="mr-2 font-semibold" htmlFor="treeType">Grad des Baums:</label>
          <select className="border rounded border-black" id="treeType" onChange={onDegreeChange}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
        </div>
        <button className="bg-purple-500 hover:bg-purple-600 hover:shadow-md text-white px-2 py-1 rounded-md cursor-pointer" type="button" value="reset" onClick={onReset}>Zurücksetzen</button>

      </div>
    </>
  )
}
