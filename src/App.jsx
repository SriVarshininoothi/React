import { useState } from 'react';
import './App.css';
import Header from './Router/Components/Header';
import { Routes, Route } from 'react-router-dom';
import Home from './Router/Pages/Home';
import About from './Router/Pages/About';
import Contact from './Router/Pages/Contact';
import ProductDetails from './Router/Pages/ProductDetails';
import Products from './Router/Pages/Products';
import RandomuserGenerator from './UseEffect/RandomuserGenertor';

import Profile from './Profile'
import { UserContext } from './Context/UserContext';

function App() {

  const user = {
    name: "Rahul",
    role: "Developer",
  };

  return (
    <>
      {/* 
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path='/About' element={<About />}/>
        <Route path='/Contact' element={<Contact />}/>
        <Route path='/Products' element={<Products/>}/>
        <Route path='/Products/:id' element={<ProductDetails/>}/>
      </Routes> 
      */}

      {/* Wrap Profile with UserContext.Provider and pass the user object */}
      <UserContext.Provider value={user}>
        <Profile />
      </UserContext.Provider>
    </>
  );
}

export default App;