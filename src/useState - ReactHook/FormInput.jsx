import React from "react";
import { useState } from "react";

const FormInput = () => {

    const [name, setName] = useState("Ram");

    return (
        <div>

            <h3>Registration</h3>
            <input type="text"
                value={name}
                onChange={(e) => setName(e.target.value)} />
                <h6>{name}</h6>
        </div>
    )

}

export default FormInput;