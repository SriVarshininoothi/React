import React from "react";
import EmployeeCard from "./EmployeeCard";

const Rendering = () => {

    const employees = [
        { id: 1, name: "Rahul" ,role:"Developer"},
        { id: 2, name: "Priya" ,role:"Testing"}
    ];


    return (
        <div>
            <h1>Rendering & KeyList</h1>
            <p>
                {
                    employees.map((employee) =>

                        <EmployeeCard key={employee.id}
                        {...employee}/>

                    )


                }
            </p>
        </div>
    )

}
export default Rendering;