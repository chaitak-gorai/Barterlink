import { useState } from 'react'
import {Navbar, Hero, Footer, Services, Transactions, Loader} from './components'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Hero />
      </div>
      <Services />
      <Transactions />
      <Footer />
    </div>
  )
}

export default App
