import { useState } from 'react'
import reactLogo from './assets/react.svg'
import mainImg from './assets/cody.jpg'
import './App.css'
import Navbar from './components/Navbar'
import Section from './components/Section'
import Article from './components/Article'
import Nav2 from './components/Nav2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App container'>
      <nav className=' mb-10'>
        <Navbar />
      </nav>
      <hr />
      <nav className='mb-10'>
        <Nav2 />
      </nav>
      <main className='flex  container'>
        <Section />
        <Article />
      </main>
    </div>
  )
}

export default App
