import { useState } from 'react'
import './App.css'
import Topbar from './components/Topbar'
import Aboutme from './components/Aboutme'
import MidSkipper from './components/MidSkipper'
import Projects from './components/Projects'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <Topbar />
      <Aboutme />
      <MidSkipper />
      <Projects />
    </main>
  )
}

export default App
