import { useReducer, useState } from 'react';
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

const initialState = {
  count: 0,
  color:"black"
};

function reducer(state, action) {

  switch (action.type) {

    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1,
        color:"green"
        
      };
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1,
        color:"red"
      };

    default:
      return state;


  }
}

function App() {

  // const user = {
  //   name: "Rahul",
  //   role: "Developer",
  // };


  const [state, dispatch] = useReducer(reducer, initialState);

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
      {/* <UserContext.Provider value={user}>
        <Profile />
      </UserContext.Provider> */}

      <div >
        <h2 style={{color:state.color}}>{state.count}</h2>

        <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
        <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>

      </div>



    </>
  );
}

export default App;