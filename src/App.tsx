import React from 'react'
import { Header } from './Components/Header'
import { BTree } from './Components/BTree'
import { Footer } from './Components/Footer'
import SponsorBar from './Components/SponsorBar'

const App = () => {
  return (
    <div className="max-w-screen-xl space-y-4 mx-auto my-0 flex flex-col justify-center">
      <Header />
      <BTree />
      <SponsorBar />
      <Footer />
    </div>
  )
}

export default App
