import { useState } from 'react'

import './App.css'

import Header from './Router/Components/Header'

import { Routes, Route } from 'react-router-dom'

import Home from './Router/Pages/Home'
import About from './Router/Pages/About'
import Contact from './Router/Pages/Contact'
import ProductDetails from './Router/Pages/ProductDetails'
import Products from './Router/Pages/Products'
import RandomuserGenerator from './UseEffect/RandomuserGenertor'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Header />

      <Routes>

        <Route path="/" element={<Home />}/>
        <Route path='/About' element={<About />}/>

        <Route path='/Contact' element={<Contact />}/>
        <Route path='/Products' element={<Products/>}/>

        <Route path='/Products/:id' element={<ProductDetails/>}/>


      </Routes> 
     


    </>
  )
}

export default App
