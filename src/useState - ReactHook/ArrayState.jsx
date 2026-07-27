import React, { useState } from "react";

const ArrayState = () => {

    const [student, setStudent] = useState(
        ["Sri", "Laxmi", "Anjali", "Vaishani"
        ]
    )

    const addStudent = () => {
        setStudent([...student , "ram"])
    }

    return (
        <div>
            <h2>Array Management</h2>
            <button onClick={addStudent}>Add</button>

            <ul>

               {
                student.map( (name,index)  => (
                    <li key={index}>{name}</li>
                ) 
                )
               } 

            </ul>

        </div>
    )

}
export default ArrayState;


