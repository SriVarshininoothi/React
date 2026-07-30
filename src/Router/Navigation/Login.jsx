import React from "react";
import { Navigate } from "react-router-dom";

const Login = () =>{

    const isLogin = true;

    if(isLogin){
        return <Navigate to= "/dashboard"/>
    }
    return(
        <div>
            <h2>Please Login</h2>
        </div>
    )

}
export default Login;