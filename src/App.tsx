import React from 'react'
import { Header } from './Components/Header'
import { BTree } from './Components/BTree'
import { Footer } from './Components/Footer'

const App = () => {
  return (
    <div className="max-w-screen-xl mx-auto my-0 flex flex-col justify-center">
      <Header />
      <BTree />
      <Footer />
    </div>
  )
}

export default App
