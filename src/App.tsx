import React from 'react'
import './app.css'
import { Header } from './Header'
import { BTree } from './BTree'
import { Footer } from './Footer'

const App = () => {
  return (
    <div className='main-container'>
      <Header />
      <BTree />
      <Footer />
    </div>
  )
}

export default App
