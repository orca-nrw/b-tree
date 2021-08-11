import React from 'react'
import { Header } from './Header'
import { BTree } from './BTree'
import { Footer } from './Footer'

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
