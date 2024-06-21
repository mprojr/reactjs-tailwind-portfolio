import { useState } from 'react'
import './App.css'
import Topbar from './components/Topbar'
import Aboutme from './components/Aboutme'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <Topbar />
      <Aboutme />
    </main>
  )
}

export default App
