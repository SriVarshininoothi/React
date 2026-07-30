import React from "react";
import { useNavigate } from "react-router-dom";


const UseNagivation = () => {

    const navigate = useNavigate()

    return(
        <div>
            <button onClick={ () => navigate("/products")}>Click</button>

        </div>

    )

}

export default UseNagivation;