import React from 'react'
import edbHeaderLogo from './img/edb_header_logo.png'
import eildHeaderLogo from './img/eild_header_logo.png'

export const Header = () => {
  return (
    <header>
      <div className='header-image-container'>
        <img className='header-image' src={edbHeaderLogo} alt="EDB Logo" />
        <img className='header-image' src={eildHeaderLogo} alt="EILD Logo" />
      </div>
    </header>
  )
}
