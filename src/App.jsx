import { useState } from 'react'

import './App.css'

import Header from './Router/Components/Header'

import { Routes, Route } from 'react-router-dom'

import Home from './Router/Pages/Home'
import About from './Router/Pages/About'
import Contact from './Router/Pages/Contact'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Header />

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path='/About' element={<About />} />

<Route path='/Contact' element={<Contact/>}/>
      </Routes>



    </>
  )
}

export default App
