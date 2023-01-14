import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import TopBar from './components/TopBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TopBar/>
      <Header />
      <Sidebar />
      
    </>
  )
}

export default App
