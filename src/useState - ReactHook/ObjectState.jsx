
import React from "react";
import { useState } from "react";

const ObjectState = () => {

    const [student, setStudent] = useState(

        {

            name: "Srivarshini",
            Role: "Developer",
            Age: 22

        }
    );

    return (

        <div>
            <h1>Name: {student.name}</h1>
            <h1>Role: {student.Role}</h1>
            <h1>Age: {student.Age}</h1>

            <button onClick={() => setStudent(
                {

                ...student,
                name: "varsha",
                Role: "Testing",
                Age: 23

            }
            )}>  Click
            </button>

        </div>
    )
}
export default ObjectState;