import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("black");
  
  //event handler

  const Increment =()=>{

    setCount(count+1);
    setColor("Green")
  }
  const decrement =()=>{
    setCount(count-1);
    setColor("Red")
  }
  const reset = ()=>{

    setCount(0);
    setColor("black")
  }

  return (
    <div style={{justifyContent:"center"}}>
      <h2>Current Value: <p style={{color:color}}>{count}</p></h2>

      <button onClick={Increment}>Increment</button> 
      <button onClick={reset}>Reset</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;


