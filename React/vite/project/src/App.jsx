import { useState } from 'react'
import Nevbar from './Componets/Nevbar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Nevbar/>
    </>
  )
}

export default App
