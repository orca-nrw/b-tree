import React from 'react'
import edbHeaderLogo from '../img/edb_header_logo.png'
import eildHeaderLogo from '../img/eild_header_logo.png'

export const Header = () => {
  return (
    <header className="bg-white p-4">
      <div className="w-full flex justify-between">
        <img className="max-h-32" src={edbHeaderLogo} alt="EDB Logo" />
        <img className="max-h-32" src={eildHeaderLogo} alt="EILD Logo" />
      </div>
    </header>
  )
}
