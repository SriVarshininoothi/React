import React, { useEffect, useState } from "react";

const RandomuserGenerator =() => {
//state

const[user,setUser] = useState([]);
const[loading,setloading] = useState(true);
const[error,setError] = useState("");


//fetch data

useEffect( () => {

    const RandomUser = async () => {

        try{

        setloading(true);

        const response = await fetch("https://dummyjson.com/users");
        const data = await response.json();
        setUser(data.user);
        }catch(error){
            setError("Failed to fetch user data");
        }
        finally{
          
            
        }

    }


},[]);



}
export default RandomuserGenerator;