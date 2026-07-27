import React, { useEffect } from "react";


const FetchAPI = () =>{

   useEffect(() => {

    fetch("https://fakestoreapi.com/products")
    .then((response)=> response.json())
    .then((data)=> console.log(data));

   },[]);



}

export default  FetchAPI;